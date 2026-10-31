"""video13 — round-13 hero videos (~10 s, 3 shots, seamless loop) and the shot clips for the showreels.

  python video13.py plan                      r13/hero_plan.json (3 shots per project, unique combination)
  python video13.py hero [slug,...|all] [-jN] r13/out/<slug>/r-hero.mp4/.webp (1600x900) + r-hero-m.mp4/.webp (720x1280)
  python video13.py sheet                     r13/sheet-hero.jpg (3 frames per project)

A shot is one template still of the project's gallery (same backdrop / colours) with a slow 2.5D camera move
(push, pull, drift, rise) over the high-res composite; device shots scroll the real site on their screens.
Shots crossfade; the last one fades back into the first frame, so the clip loops without a seam.
Desktop framing puts the subject centre/right (the title sits bottom-left); mobile crops portrait around the
main device / print.
"""
import sys, os, json, math, time, subprocess, hashlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
import cv2
from PIL import Image
import tcomp as C, proj as P
import batch13 as B13

FPS = 24
DUR = float(os.environ.get('R13_DUR', '10.0'))
XF = 0.8                       # crossfade (s)
DW, DH = 1600, 900
MW, MH = 720, 1280
CRF_D = int(os.environ.get('R13_CRF', '26'))
CRF_M = int(os.environ.get('R13_CRF_M', '27'))
BUDGET_D = 1.7 * 1048576
BUDGET_M = 0.9 * 1048576

# camera moves: zoom range (1 = the widest crop of the target aspect) and where the subject sits in the crop
MOVES = {
    'push':    dict(z=(1.03, 1.15), f0=(0.58, 0.47), f1=(0.58, 0.47)),
    'pull':    dict(z=(1.17, 1.04), f0=(0.58, 0.47), f1=(0.58, 0.47)),
    'drift_l': dict(z=(1.12, 1.15), f0=(0.65, 0.47), f1=(0.53, 0.47)),
    'drift_r': dict(z=(1.12, 1.15), f0=(0.52, 0.47), f1=(0.64, 0.47)),
    'rise':    dict(z=(1.10, 1.16), f0=(0.58, 0.40), f1=(0.58, 0.53)),
    'sink':    dict(z=(1.14, 1.09), f0=(0.58, 0.53), f1=(0.58, 0.42)),
}
# hero-worthy device compositions in 16:9, best first
HERO_DEV = ['d01_desk_studio__a', 'd02_mac_top__b', 'd15_mac_phone_desk__a', 'd19_studio_front__b', 'd09_ipad_keyboard__a',
            'd13_macro_mac__a', 'd18_mac_profile__b', 'd04_phone_trio__a', 'd10_tablets_iso__a', 'd17_ipads_lean__a', 'd14_billboard__a',
            'd11_ui_panels__a', 'd05_phone_lean__a', 'd08_ipad_stand__b', 'd03_flatlay__b', 'd01_desk_studio__b', 'd15_mac_phone_desk__b',
            'd02_mac_top__a', 't1_gravity', 'd20_gravity_alt__a', 'd06_phone_linen__a', 'd07_phone_stone__a', 'd12_macro_phone__a',
            'd16_phone_plinth__b', 'd17_ipads_lean__b', 'd19_studio_front__a', 'd09_ipad_keyboard__b', 'd10_tablets_iso__b',
            'd11_ui_panels__b', 'd13_macro_mac__b', 'd14_billboard__b', 'd04_phone_trio__b', 'd05_phone_lean__b', 'd06_phone_linen__b',
            'd07_phone_stone__b', 'd18_mac_profile__a', 'd20_gravity_alt__b', 'd03_flatlay__a', 'd08_ipad_stand__a', 'd12_macro_phone__b',
            't3_plinth', 't5_ipads_dark', 't4_float_ipad', 't2_closeup', 'd16_phone_plinth__a']
HERO_BRAND = ['b03_poster_wall__a', 'b06_wall_logo__b', 'b04_posters_lean__a', 'b07_aframe__a', 'b08_flags__b', 'b01_cards__a',
              'b02_letterhead__b', 'b12_letter_mac__a', 'b11_cards_phone__a', 'b09_brochure__a', 'b05_emboss__a', 'b06_wall_logo__c',
              'b03_poster_wall__b', 'b04_posters_lean__b', 'b07_aframe__b', 'b08_flags__a', 'b01_cards__b', 'b02_letterhead__a',
              'b12_letter_mac__b', 'b11_cards_phone__b', 'b09_brochure__b', 'b05_emboss__b', 'b06_wall_logo__a', 'b10_sticker__a',
              'b10_sticker__b', 'b13_social_phone__a', 'b13_social_phone__b']
SMALL = ('phone', 'tablet')
MACRO = {'d12_macro_phone__a', 'd12_macro_phone__b', 'd13_macro_mac__a', 'd13_macro_mac__b', 't2_closeup', 'd14_billboard__b'}       # device classes for variety between shot A and B


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def dev_class(t, lib):
    roles = ' '.join(lib[t]['roles'])
    if 'mac' in roles or 'studio' in roles or 'billboard' in roles or 'panel' in roles: return 'big'
    if 'tablet' in roles: return 'tablet'
    return 'phone'


# ---------------------------------------------------------------------------------------------- plan
def make_plan(keep=None):
    """3 shots per project: A = a strong device composition (not the cover), C = a branding scene (or a device
    shot on the darkened brand colour), B = another device class. Templates that are already used by many hero
    videos are penalised, and no two projects get the same combination."""
    from collections import Counter
    plan = json.load(open(os.path.join(B13.R13, 'plan.json')))
    lib = B13.library(final=False)
    used = set(); out = {}; cnt = Counter()
    keep = keep or {}
    for slug, shots in keep.items():              # already rendered: keep as they are
        ts = tuple(x['st']['t'] for x in shots); used.add(frozenset(ts)); cnt.update(ts)
    for slug, pl in plan.items():
        if slug in B13.PRESERVE: continue
        if slug in keep:
            out[slug] = keep[slug]; continue
        sts = {s['t']: s for s in pl['stills'] if s['t'] in lib and not lib[s['t']]['portrait']}
        rank = lambda L: (lambda t: (L.index(t) if t in L else 99) + 6 * cnt[t])
        dev = sorted((t for t in sts if lib[t]['roles']), key=rank(HERO_DEV))
        brd = sorted((t for t in sts if lib[t]['prints']), key=rank(HERO_BRAND))
        cover = pl.get('cover')
        if len(dev) > 1 and dev[0] == cover: dev = dev[1:] + dev[:1]
        is_brand = bool(set(B13.cases()[slug]['services']) & B13.BRANDING)
        if not dev and not is_brand:
            continue        # logo-only case without a site: its own film / photo stays the hero
        if dev and not is_brand:
            # the raised wall logo is the only logo scene for non-branding cases: use it in some heroes only,
            # the others get a device shot on the darkened brand colour
            brd = [t for t in brd if cnt[t] < 5]
        cands = []
        if dev:
            # A is a wide, readable composition; at most one macro close-up per hero
            for a in [t for t in dev if t not in MACRO][:4] or dev[:4]:
                bs = [t for t in dev if t != a and dev_class(t, lib) != dev_class(a, lib)] or [t for t in dev if t != a]
                cs = [t for t in brd if t != a] or [t for t in dev if t != a]
                for c in cs[:4]:
                    for b in bs[:4]:
                        if b != c and sum(t in MACRO for t in (a, b, c)) <= 1: cands.append((a, c, b))
        else:
            for i, a in enumerate(brd[:4]):
                for c in brd[i + 1:i + 5]:
                    for b in brd:
                        if b not in (a, c): cands.append((a, c, b))
        pick = next((x for x in cands if frozenset(x) not in used), cands[0] if cands else None)
        if not pick: continue
        used.add(frozenset(pick)); cnt.update(pick)
        mv = list(MOVES); k = h(slug)
        order = [mv[(k + i * 7) % len(mv)] for i in range(3)]
        if len(set(order)) < 3: order = [mv[(k + i) % len(mv)] for i in range(3)]
        shots = [dict(st=dict(sts[t]), move=m, scroll=bool(lib[t]['roles'])) for t, m in zip(pick, order)]
        if not any(sh['st']['fam'] == 'brand' for sh in shots):      # at least one shot on the brand colour
            sh = shots[1]; sh['st']['fam'] = 'brand'
            if lib[sh['st']['t']]['transparent']: sh['st']['bg'] = B13.FAM_TO_BG['brand'][k % 3]
            else: sh['st']['tint'] = None
        out[slug] = shots
    json.dump(out, open(os.path.join(B13.R13, 'hero_plan.json'), 'w'), indent=1)
    print('most used:', cnt.most_common(8))
    return out


# ---------------------------------------------------------------------------------------------- framing
def subject(pp):
    """(desktop target = bbox centre of all screens + prints, mobile target = centroid of the biggest one)."""
    W = pp['W']; groups = {}
    for s in pp['screens']:
        groups.setdefault(('s', s['role']), []).append(s['idx'])
    for i, pr in enumerate(pp.get('prints') or []):
        groups.setdefault(('p', pr['role']), []).append(pr['idx'])
    if not groups:
        return (W / 2, pp['H'] / 2, W * 0.5, pp['H'] * 0.5), (W / 2, pp['H'] / 2)
    allidx = np.concatenate([np.concatenate(v) for v in groups.values()])
    ys, xs = allidx // W, allidx % W
    x0, x1 = np.percentile(xs, [2, 98]); y0, y1 = np.percentile(ys, [2, 98])
    big = max(groups.values(), key=lambda v: sum(len(a) for a in v))
    bi = np.concatenate(big)
    bx0, bx1 = np.percentile(bi % W, [2, 98]); by0, by1 = np.percentile(bi // W, [2, 98])
    return ((x0 + x1) / 2, (y0 + y1) / 2, x1 - x0, y1 - y0), (float((bi % W).mean()), float((bi // W).mean()), bx1 - bx0, by1 - by0)


def crop_rect(W, H, aspect, z, tx, ty, fx, fy, sw=0.0, sh=0.0):
    """Crop of `aspect` at zoom z with the subject point (tx, ty) at (fx, fy) of the crop; a subject box of
    sw x sh around it is kept inside the crop when it fits; the crop stays inside the image."""
    if W / H > aspect: bh = H; bw = H * aspect
    else: bw = W; bh = W / aspect
    cw, ch = bw / z, bh / z
    x0 = tx - fx * cw; y0 = ty - fy * ch
    if sw and sw < cw * 0.96: x0 = min(max(x0, tx + sw / 2 + cw * 0.02 - cw), tx - sw / 2 - cw * 0.02)
    if sh and sh < ch * 0.96: y0 = min(max(y0, ty + sh / 2 + ch * 0.02 - ch), ty - sh / 2 - ch * 0.02)
    x0 = min(max(x0, 0), W - cw); y0 = min(max(y0, 0), H - ch)
    return np.array([x0, y0, cw, ch], np.float64)


class Shot:
    def __init__(self, slug, case, caps, brand, spec, dcache):
        self.spec = spec; st = spec['st']
        if not os.path.exists(os.path.join(C.TPL, st['t'], 'still_rgb.exr')):
            raise RuntimeError(f"{slug}: no final render for {st['t']}")
        self.S = B13.setup_still(slug, case, st, caps, brand, dcache, {}, video=spec['scroll'])
        pp = self.S['pp']
        (cx, cy, bw, bh), (mx, my, mw, mh) = subject(pp)
        mv = MOVES[spec['move']]
        W, H = pp['W'], pp['H']
        # desktop: subject centre/right; zoom out a little more when the subject is wide
        bwid, bhei = (W, W / (DW / DH)) if W / H < DW / DH else (H * DW / DH, H)
        zmax = max(1.0, min(0.92 * bwid / max(bw, 1.0), 0.92 * bhei / max(bh, 1.0), 1.25))
        span = max(0.04, zmax - 1.0 + 0.03)          # wide subjects: a smaller zoom range, but never a frozen shot
        zs = [1.0 + (z - 1.0) * min(1.0, span / 0.17) for z in mv['z']]
        self.rd = [crop_rect(W, H, DW / DH, zs[0], cx, cy, *mv['f0'], bw, bh), crop_rect(W, H, DW / DH, zs[1], cx, cy, *mv['f1'], bw, bh)]
        fm0 = (0.5 + (mv['f0'][0] - 0.58) * 0.5, mv['f0'][1]); fm1 = (0.5 + (mv['f1'][0] - 0.58) * 0.5, mv['f1'][1])
        zm = [1.0 + (z - 1.0) * 0.8 for z in mv['z']]
        self.rm = [crop_rect(W, H, MW / MH, zm[0], mx, my, *fm0, mw, mh), crop_rect(W, H, MW / MH, zm[1], mx, my, *fm1, mw, mh)]
        self.static = None; self._sf = None; self._last = None
        self.start = {}; self.amp = {}
        if spec['scroll']:
            for r, d in self.S['ds'].items():
                self.start[r] = d.offset
                vis = (d.H - d.top) * d.cscale
                self.amp[r] = max(0.0, min(d.max_offset - d.offset, 1.1 * vis))
            if not any(a > 1 for a in self.amp.values()):
                self.spec = dict(spec, scroll=False)
        if not self.spec['scroll']:
            self.static = B13.compose(self.S)

    def image(self, s):
        if self.static is not None:
            return self.static
        if self._last is not None and self._last[0] == s:
            return self._last[1]
        if self._sf is None:
            self._sf = C.StaticFrame(self.S['pp'], bg=self.S['bg'], dev=self.S['dev'])
        e = 0.5 - 0.5 * math.cos(math.pi * min(max(s, 0.0), 1.0))       # eased scroll, like a hand on a trackpad
        for r, d in self.S['ds'].items():
            d.offset = self.start[r] + self.amp[r] * e
        img = self._sf.frame(self.S['ds'], aniso=4)
        self._last = (s, img)
        return img

    def frame(self, s, mobile=False):
        img = self.image(s)
        r0, r1 = (self.rm if mobile else self.rd)
        x0, y0, cw, ch = r0 + (r1 - r0) * s
        OW, OH = (MW, MH) if mobile else (DW, DH)
        k = cw / OW
        if k > 1.05:      # pre-filter against aliasing on the down-scale
            sig = 0.42 * (k - 1.0) ** 0.5 * 1.6
            img = cv2.GaussianBlur(img, (0, 0), sig)
        M = np.array([[cw / OW, 0, x0 + 0.5 * cw / OW - 0.5], [0, ch / OH, y0 + 0.5 * ch / OH - 0.5]], np.float64)
        return cv2.warpAffine(img, M, (OW, OH), flags=cv2.INTER_CUBIC | cv2.WARP_INVERSE_MAP, borderMode=cv2.BORDER_REFLECT)


def timeline(n, dur=DUR, xf=XF):
    """Per frame: [(shot index, local s in 0..1, weight)], seamless over the loop."""
    F = int(round(dur * FPS)); seg = dur / n
    out = []
    for f in range(F):
        t = f / FPS; ws = []
        for i in range(n):
            a, b = i * seg - xf / 2, (i + 1) * seg + xf / 2
            for tt in (t, t + dur, t - dur):
                if a <= tt <= b:
                    s = (tt - a) / (b - a)
                    w = min(1.0, (tt - a) / xf, (b - tt) / xf)
                    w = 0.5 - 0.5 * math.cos(math.pi * max(0.0, w))
                    if w > 1e-3: ws.append((i, s, w))
        tot = sum(w for _, _, w in ws)
        out.append([(i, s, w / tot) for i, s, w in ws])
    return out


def ffmpeg(path, W, H, crf):
    cmd = ['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
           '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf), '-g', '480', '-bf', '3', '-x264-params', 'aq-mode=3',
           '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', path]
    return subprocess.Popen(cmd, stdin=subprocess.PIPE)


def render_frames(shots, sink_d, sink_m, tl):
    for f, items in enumerate(tl):
        fd = None; fm = None
        for i, s, w in items:
            a = shots[i].frame(s).astype(np.float32); b = shots[i].frame(s, True).astype(np.float32)
            fd = a * w if fd is None else fd + a * w
            fm = b * w if fm is None else fm + b * w
        sink_d(f, np.clip(fd + 0.5, 0, 255).astype(np.uint8)); sink_m(f, np.clip(fm + 0.5, 0, 255).astype(np.uint8))


def hero_one(args):
    slug = args[0] if isinstance(args, tuple) else args
    spec = json.load(open(os.path.join(B13.R13, 'hero_plan.json')))[slug]
    case = B13.cases()[slug]
    p = P.projects().get(slug); caps = P.captures(p) if p else {}
    brand = B13.brand_for(slug, case, caps)
    t0 = time.time()
    shots = [Shot(slug, case, caps, brand, sp, {}) for sp in spec]
    d = os.path.join(B13.OUT, slug); os.makedirs(d, exist_ok=True)
    tl = timeline(len(shots))
    # render once into memory-light temp files, then encode to budget
    tmp = os.path.join(d, '.frames'); os.makedirs(tmp, exist_ok=True)
    fd_path, fm_path = os.path.join(tmp, 'd.raw'), os.path.join(tmp, 'm.raw')
    with open(fd_path, 'wb') as FD, open(fm_path, 'wb') as FM:
        def sd(f, img):
            if f == 0: Image.fromarray(img).save(os.path.join(d, 'r-hero.webp'), quality=82, method=6)
            FD.write(img.tobytes())

        def sm(f, img):
            if f == 0: Image.fromarray(img).save(os.path.join(d, 'r-hero-m.webp'), quality=82, method=6)
            FM.write(img.tobytes())
        render_frames(shots, sd, sm, tl)
    sizes = {}
    for raw, out, W, H, crf, budget in ((fd_path, 'r-hero.mp4', DW, DH, CRF_D, BUDGET_D), (fm_path, 'r-hero-m.mp4', MW, MH, CRF_M, BUDGET_M)):
        mp4 = os.path.join(d, out)
        for c in (crf, crf + 2, crf + 4, crf + 6):
            pr = ffmpeg(mp4, W, H, c)
            with open(raw, 'rb') as fh:
                while True:
                    buf = fh.read(W * H * 3 * 8)
                    if not buf: break
                    pr.stdin.write(buf)
            pr.stdin.close(); pr.wait()
            if os.path.getsize(mp4) <= budget: break
        sizes[out] = (c, os.path.getsize(mp4))
        os.remove(raw)
    os.rmdir(tmp)
    return slug, time.time() - t0, sizes, [s.spec['st']['t'] + '/' + s.spec['move'] for s in shots]


def sheet(slugs):
    from PIL import ImageDraw, ImageFont
    F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 14)
    rows = []
    for s in slugs:
        mp4 = os.path.join(B13.OUT, s, 'r-hero.mp4'); mm = os.path.join(B13.OUT, s, 'r-hero-m.mp4')
        if not os.path.exists(mp4): continue
        ims = []
        for f, src, sz in ((1.0, mp4, (320, 180)), (4.4, mp4, (320, 180)), (7.7, mp4, (320, 180)), (2.0, mm, (101, 180)), (8.0, mm, (101, 180))):
            o = subprocess.run(['ffmpeg', '-loglevel', 'error', '-ss', str(f), '-i', src, '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-'],
                               capture_output=True).stdout
            import io
            im = Image.open(io.BytesIO(o)).convert('RGB'); im.thumbnail(sz); ims.append(im)
        rows.append((s, ims))
    W = 3 * 330 + 2 * 111 + 20; sh = Image.new('RGB', (W * 2, ((len(rows) + 1) // 2) * 206 + 10), (24, 24, 26)); dr = ImageDraw.Draw(sh)
    for k, (s, ims) in enumerate(rows):
        X = (k % 2) * W + 8; Y = (k // 2) * 206 + 8; x = X
        for im in ims:
            sh.paste(im, (x, Y)); x += im.width + 10
        dr.text((X, Y + 184), s, font=F, fill=(225, 225, 228))
    sh.save(os.path.join(B13.R13, 'sheet-hero.jpg'), quality=82)


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('-j')]
    j = next((int(a[2:]) for a in sys.argv[1:] if a.startswith('-j')), 1)
    cmd = args[0]; t0 = time.time()
    if cmd == 'plan':
        keep = {}
        if '--keep-done' in args:        # projects whose hero is rendered keep their shots
            old = json.load(open(os.path.join(B13.R13, 'hero_plan.json')))
            log = os.path.join(B13.R13, 'logs', 'hero.log')
            done = {l.split()[1] for l in open(log) if l.startswith('hero ')} if os.path.exists(log) else set()
            keep = {s: old[s] for s in done if s in old and s not in args}
        pl = make_plan(keep); print('hero plans', len(pl), 'kept', len(keep))
    else:
        pl = json.load(open(os.path.join(B13.R13, 'hero_plan.json')))
        sel = list(pl) if len(args) < 2 or args[1] == 'all' else args[1].split(',')
        if cmd == 'hero':
            for r in B13.B.run(hero_one, [(s,) for s in sel], j):
                print('hero', r[0], f'{r[1]:.0f}s', {k: f'crf{v[0]} {v[1] / 1048576:.2f}MB' for k, v in r[2].items()}, r[3], flush=True)
        elif cmd == 'sheet':
            sheet(sel)
    print(f'{cmd} done in {time.time() - t0:.0f}s')
