"""reel13 — ~30 s showreels cut from the project compositions (no text overlays).

  python reel13.py plan                 r13/reel_plan.json
  python reel13.py render [slug,...]    r13/reels/<slug>.mp4 (1920x1080) + <slug>-m.mp4 (1280x720) + <slug>.webp
  python reel13.py install              -> public/media/showreels/ + src/content/generated/showreels.ts
  python reel13.py sheet                r13/sheet-reels.jpg

A reel is a rhythmic sequence of short shots (1.2 - 2.8 s), each one composition of one project's gallery with
a quick 2.5D move; device shots scroll the real site. Mostly hard cuts on the beat, with a few short dissolves;
the last shot dissolves into the first frame so the reel loops. Every project appears at most once per reel and
no composition template repeats within a reel.
"""
import sys, os, json, math, time, shutil, subprocess, hashlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
import cv2
from PIL import Image
import proj as P
import batch13 as B13
import video13 as V

FPS = 24
RW, RH = 1920, 1080
MW, MH = 1280, 720
ROOT = B13.SITE.split('/public/')[0]
DST = os.path.join(ROOT, 'public', 'media', 'showreels')
GEN = os.path.join(ROOT, 'src', 'content', 'generated', 'showreels.ts')
OUTD = os.path.join(B13.R13, 'reels')
BUDGET = {'d': 7.5 * 1048576, 'm': 3.0 * 1048576}

# slugs: the frontend picks films by slug words (highlights / web / branding / app / content)
REELS = [
    dict(slug='highlights', title={'nl': 'M7 — hoogtepunten', 'en': 'M7 — highlights'}, kind='mix', n=16),
    dict(slug='web', title={'nl': 'Websites & platforms', 'en': 'Websites & platforms'}, kind='device',
         services={'websites-webshops'}, n=15),
    dict(slug='branding', title={'nl': 'Branding & identiteit', 'en': 'Branding & identity'}, kind='brand',
         services={'branding-rebranding', 'grafisch-ontwerp-print'}, n=15),
    dict(slug='apps', title={'nl': 'Apps, portals & tools', 'en': 'Apps, portals & tools'}, kind='device',
         services={'web-apps-portals-apps', 'configurators-lead-tools-widgets', 'automation-funnels'}, n=14),
    dict(slug='content', title={'nl': 'Content & campagnes', 'en': 'Content & campaigns'}, kind='mix',
         services={'content-marketing-online-ads'}, n=13),
    dict(slug='brand-colour', title={'nl': 'In merkkleur', 'en': 'In brand colour'}, kind='brandfam', n=15),
]
# beat pattern (s); cycles through, scaled so the reel lands on ~30 s
BEAT = [2.4, 1.6, 1.6, 2.8, 1.2, 2.0, 2.0, 1.6, 2.6, 1.4, 1.8, 2.4]
XF_SOFT = 0.35          # occasional dissolve; otherwise a hard cut
V.MOVES.update({
    'r_push':  dict(z=(1.02, 1.10), f0=(0.5, 0.5), f1=(0.5, 0.5)),
    'r_pull':  dict(z=(1.11, 1.03), f0=(0.5, 0.5), f1=(0.5, 0.5)),
    'r_left':  dict(z=(1.08, 1.09), f0=(0.58, 0.5), f1=(0.44, 0.5)),
    'r_right': dict(z=(1.08, 1.09), f0=(0.43, 0.5), f1=(0.57, 0.5)),
    'r_up':    dict(z=(1.07, 1.10), f0=(0.5, 0.42), f1=(0.5, 0.56)),
})
RMOVES = ['r_push', 'r_left', 'r_pull', 'r_right', 'r_up']


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def make_plan():
    plan = json.load(open(os.path.join(B13.R13, 'plan.json')))
    lib = B13.library(final=False); cs = B13.cases()
    order = list(plan)
    out = {}
    for R in REELS:
        cands = []
        for slug in order:
            c = cs[slug]
            if R.get('services') and not set(c['services']) & R['services']: continue
            if R.get('sector') and c['sector'] != R['sector']: continue
            sts = [s for s in plan[slug]['stills'] if not lib[s['t']]['portrait']]
            if R['kind'] == 'device': sts = [s for s in sts if lib[s['t']]['roles']]
            elif R['kind'] == 'brand': sts = [s for s in sts if lib[s['t']]['prints'] and not lib[s['t']]['roles']]
            elif R['kind'] == 'brandfam': sts = [s for s in sts if s['fam'] == 'brand']
            if sts: cands.append((slug, sts))
        # round robin over projects, never the same template twice; alternate device / branding in 'mix'
        rnd = np.random.default_rng(h(R['slug']))
        rnd.shuffle(cands)
        used_t, shots = {}, []
        want_brand = False
        seq = cands + [c for c in cands if len(cands) < R['n']]      # small pools: a project may come back once
        for slug, sts in seq:
            if len(shots) >= R['n']: break
            if shots and shots[-1]['slug'] == slug: continue
            lim = 2 if R['kind'] == 'brand' else 1          # one camera per scene per reel (two in the branding reel)
            pref = [s for s in sts if s['t'] not in used_t and used_t.get(s['t'].split('__')[0], 0) < lim]
            if R['kind'] == 'mix':
                pb = [s for s in pref if bool(lib[s['t']]['prints']) == want_brand and not (want_brand and lib[s['t']]['roles'])]
                pref = pb or pref
            if not pref: continue
            st = pref[h(R['slug'] + slug) % len(pref)]
            used_t[st['t']] = 1; sc = st['t'].split('__')[0]; used_t[sc] = used_t.get(sc, 0) + 1
            if R['kind'] == 'mix' and lib[st['t']]['prints'] and not lib[st['t']]['roles']: want_brand = False
            else: want_brand = (len(shots) % 3 == 1)
            shots.append(dict(slug=slug, st=st, move=RMOVES[len(shots) % len(RMOVES)], scroll=bool(lib[st['t']]['roles'])))
        n = len(shots)
        if not n: continue
        if R['kind'] in ('mix', 'device'):      # open on a strong, wide device composition (it is also the poster)
            best = [i for i, sh in enumerate(shots) if sh['st']['t'] in V.HERO_DEV[:14]]
            if best and best[0] != 0:
                i = best[0]; shots[0], shots[i] = shots[i], shots[0]
                for k, sh in enumerate(shots): sh['move'] = RMOVES[k % len(RMOVES)]
        beats = [BEAT[i % len(BEAT)] for i in range(n)]
        k = 30.0 / sum(beats)
        for sh, b in zip(shots, beats):
            sh['dur'] = round(b * k * FPS) / FPS
        out[R['slug']] = dict(title=R['title'], shots=shots)
    json.dump(out, open(os.path.join(B13.R13, 'reel_plan.json'), 'w'), indent=1)
    return out


def timeline(durs):
    """Per frame: [(shot, local s, weight)]. Hard cuts, except a short dissolve every third cut and at the loop."""
    F = int(round(sum(durs) * FPS)); T = sum(durs)
    starts = np.cumsum([0] + durs[:-1])
    soft = [(i % 3 == 2) or i == 0 for i in range(len(durs))]      # dissolve INTO shot i
    out = []
    for f in range(F):
        t = f / FPS; items = []
        for i, (a, d) in enumerate(zip(starts, durs)):
            xin = XF_SOFT if soft[i] else 0.0
            xout = XF_SOFT if soft[(i + 1) % len(durs)] else 0.0
            lo, hi = a - xin / 2, a + d + xout / 2
            for tt in (t, t + T, t - T):
                if lo <= tt < hi:
                    s = (tt - lo) / (hi - lo)
                    w = 1.0
                    if xin and tt < a + xin / 2: w = min(w, (tt - lo) / xin)
                    if xout and tt > a + d - xout / 2: w = min(w, (hi - tt) / xout)
                    if w > 1e-3: items.append((i, s, w))
        tot = sum(w for _, _, w in items)
        out.append([(i, s, w / tot) for i, s, w in items])
    return out


def render(slug):
    R = json.load(open(os.path.join(B13.R13, 'reel_plan.json')))[slug]
    os.makedirs(OUTD, exist_ok=True)
    V.DW, V.DH = RW, RH
    cs = B13.cases()
    brands = {}
    t0 = time.time()

    def make(i):
        sp = R['shots'][i]; s = sp['slug']; p = P.projects().get(s); caps = P.captures(p) if p else {}
        if s not in brands: brands[s] = B13.brand_for(s, cs[s], caps)
        return V.Shot(s, cs[s], caps, brands[s], dict(st=sp['st'], move=sp['move'], scroll=sp['scroll']), {})
    tl = timeline([sp['dur'] for sp in R['shots']])
    k = int(round(R['shots'][0]['dur'] / 2 * FPS)); tl = tl[k:] + tl[:k]      # frame 0 = poster: mid shot 1, no dissolve
    raw = os.path.join(OUTD, slug + '.lossless.mkv')     # lossless intermediate (a raw dump would be ~4.5 GB)
    live = {}          # only the shots on screen are kept in memory
    enc = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{RW}x{RH}', '-r', str(FPS),
                            '-i', '-', '-c:v', 'libx264', '-preset', 'ultrafast', '-qp', '0', '-pix_fmt', 'yuv444p', raw], stdin=subprocess.PIPE)
    fh = enc.stdin
    if True:
        for f, items in enumerate(tl):
            need = {i for i, _, _ in items}
            for i in list(live):
                if i not in need: del live[i]
            acc = None
            for i, s, w in items:
                if i not in live: live[i] = make(i)
                img = live[i].frame(s).astype(np.float32)
                acc = img * w if acc is None else acc + img * w
            fr = np.clip(acc + 0.5, 0, 255).astype(np.uint8)
            if f == 0:
                Image.fromarray(fr).save(os.path.join(OUTD, slug + '.webp'), quality=80, method=6)
            fh.write(fr.tobytes())
    live.clear()
    fh.close(); enc.wait()
    sizes = {}
    for tag, W, H, out, crf0 in (('d', RW, RH, slug + '.mp4', 25), ('m', MW, MH, slug + '-m.mp4', 26)):
        mp4 = os.path.join(OUTD, out)
        for crf in (crf0, crf0 + 2, crf0 + 4, crf0 + 6, crf0 + 8):
            vf = [] if tag == 'd' else ['-vf', f'scale={MW}:{MH}:flags=lanczos']
            cmd = ['ffmpeg', '-y', '-loglevel', 'error', '-i', raw,
                   *vf, '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf), '-g', '96', '-bf', '3', '-x264-params', 'aq-mode=3',
                   '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', mp4]
            subprocess.run(cmd, check=True)
            if os.path.getsize(mp4) <= BUDGET[tag]: break
        sizes[out] = (crf, os.path.getsize(mp4))
    os.remove(raw)
    return slug, time.time() - t0, sizes


PW, PH = 720, 1280
BUDGET['p'] = 2.5 * 1048576


def portrait_template(t):
    """The portrait camera of the same scene ('<scene>__p'), when it has a final render."""
    tp = t.split('__')[0] + '__p'
    return tp if os.path.exists(os.path.join(B13.C.TPL, tp, 'still_rgb.exr')) else None


def render_portrait(slug):
    """Portrait cut (720x1280) of a reel: same shots, timing and moves; each shot reframed around its main
    subject (like the r-hero-m videos), or the scene's own portrait camera where the subject is too wide for a
    crop of the landscape render."""
    R = json.load(open(os.path.join(B13.R13, 'reel_plan.json')))[slug]
    os.makedirs(OUTD, exist_ok=True)
    V.MW, V.MH = PW, PH
    cs = B13.cases(); brands = {}; used_p = []
    t0 = time.time()

    def make(i):
        sp = R['shots'][i]; s = sp['slug']; p = P.projects().get(s); caps = P.captures(p) if p else {}
        if s not in brands: brands[s] = B13.brand_for(s, cs[s], caps)
        st = dict(sp['st']); tp = portrait_template(st['t'])
        if tp:
            st['t'] = tp; used_p.append(tp)
        return V.Shot(s, cs[s], caps, brands[s], dict(st=st, move=sp['move'], scroll=sp['scroll']), {})
    tl = timeline([sp['dur'] for sp in R['shots']])
    k = int(round(R['shots'][0]['dur'] / 2 * FPS)); tl = tl[k:] + tl[:k]
    raw = os.path.join(OUTD, slug + '-p.lossless.mkv')
    enc = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{PW}x{PH}', '-r', str(FPS),
                            '-i', '-', '-c:v', 'libx264', '-preset', 'ultrafast', '-qp', '0', '-pix_fmt', 'yuv444p', raw], stdin=subprocess.PIPE)
    live = {}
    for f, items in enumerate(tl):
        need = {i for i, _, _ in items}
        for i in list(live):
            if i not in need: del live[i]
        acc = None
        for i, s, w in items:
            if i not in live: live[i] = make(i)
            img = live[i].frame(s, mobile=True).astype(np.float32)
            acc = img * w if acc is None else acc + img * w
        fr = np.clip(acc + 0.5, 0, 255).astype(np.uint8)
        if f == 0:
            Image.fromarray(fr).save(os.path.join(OUTD, slug + '-p.webp'), quality=80, method=6)
        enc.stdin.write(fr.tobytes())
    live.clear(); enc.stdin.close(); enc.wait()
    mp4 = os.path.join(OUTD, slug + '-p.mp4')
    for crf in (26, 28, 30, 32, 34):
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', raw, '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf), '-g', '96',
                        '-bf', '3', '-x264-params', 'aq-mode=3', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', mp4], check=True)
        if os.path.getsize(mp4) <= BUDGET['p']: break
    os.remove(raw)
    return slug, time.time() - t0, crf, os.path.getsize(mp4), sorted(set(used_p))


def install():
    plan = json.load(open(os.path.join(B13.R13, 'reel_plan.json')))
    os.makedirs(DST, exist_ok=True)
    entries = []
    for R in REELS:
        s = R['slug']
        if s not in plan or not os.path.exists(os.path.join(OUTD, s + '.mp4')): continue
        for f in (s + '.mp4', s + '-m.mp4', s + '.webp', s + '-p.mp4', s + '-p.webp'):
            if os.path.exists(os.path.join(OUTD, f)):
                shutil.copy2(os.path.join(OUTD, f), os.path.join(DST, f))
        has_p = os.path.exists(os.path.join(OUTD, s + '-p.mp4'))
        cases = []
        for sh in plan[s]['shots']:
            if sh['slug'] not in cases: cases.append(sh['slug'])
        dur = round(sum(sh['dur'] for sh in plan[s]['shots']), 1)
        entries.append(dict(slug=s, title=plan[s]['title'], src=f'/media/showreels/{s}.mp4', srcMobile=f'/media/showreels/{s}-m.mp4',
                            poster=f'/media/showreels/{s}.webp', duration=dur, cases=cases,
                            portrait=(f'/media/showreels/{s}-p.mp4', f'/media/showreels/{s}-p.webp') if has_p else None))
    def entry(e):
        out = ['  {',
               f'    slug: {json.dumps(e["slug"])},',
               f'    title: {{ nl: {json.dumps(e["title"]["nl"], ensure_ascii=False)}, en: {json.dumps(e["title"]["en"], ensure_ascii=False)} }},',
               f'    src: {json.dumps(e["src"])},', f'    srcMobile: {json.dumps(e["srcMobile"])},']
        if e['portrait']:
            out += [f'    srcPortrait: {json.dumps(e["portrait"][0])},', f'    posterPortrait: {json.dumps(e["portrait"][1])},']
        out += [f'    poster: {json.dumps(e["poster"])},', f'    duration: {e["duration"]},',
                f'    cases: [{", ".join(json.dumps(c) for c in e["cases"])}],', '  },']
        return '\n'.join(out) + '\n'
    body = ''.join(entry(e) for e in entries)
    ts = ('/* Gegenereerd door scripts/mockups — niet met de hand bewerken. */\n'
          'import type { Showreel } from "../showreels";\n\n'
          f'export const showreels: Showreel[] = [{chr(10) + body if body else ""}];\n')
    open(GEN, 'w').write(ts)
    tot = sum(os.path.getsize(os.path.join(DST, f)) for f in os.listdir(DST))
    return len(entries), tot


def sheet():
    from PIL import ImageDraw, ImageFont
    import io
    F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 14)
    plan = json.load(open(os.path.join(B13.R13, 'reel_plan.json')))
    rows = []
    for s in plan:
        mp4 = os.path.join(OUTD, s + '.mp4')
        if not os.path.exists(mp4): continue
        ims = []
        t = 0.0
        for sh in plan[s]['shots']:
            o = subprocess.run(['ffmpeg', '-loglevel', 'error', '-ss', f'{t + sh["dur"] / 2:.2f}', '-i', mp4, '-frames:v', '1', '-f', 'image2pipe',
                                '-vcodec', 'png', '-'], capture_output=True).stdout
            t += sh['dur']
            im = Image.open(io.BytesIO(o)).convert('RGB'); im.thumbnail((192, 108)); ims.append(im)
        rows.append((s, ims))
    W = 16 * 198 + 10
    sh = Image.new('RGB', (W, len(rows) * 136 + 10), (24, 24, 26)); dr = ImageDraw.Draw(sh)
    for k, (s, ims) in enumerate(rows):
        y = 8 + k * 136
        dr.text((8, y), s, font=F, fill=(225, 225, 228))
        for i, im in enumerate(ims):
            sh.paste(im, (8 + i * 198, y + 20))
    sh.save(os.path.join(B13.R13, 'sheet-reels.jpg'), quality=82)


if __name__ == '__main__':
    args = sys.argv[1:]; cmd = args[0]; t0 = time.time()
    if cmd == 'plan':
        pl = make_plan()
        for k, v in pl.items(): print(k, len(v['shots']), f"{sum(s['dur'] for s in v['shots']):.1f}s", [s['slug'] for s in v['shots']])
    elif cmd == 'render':
        sel = args[1].split(',') if len(args) > 1 else [R['slug'] for R in REELS]
        for s in sel:
            r = render(s); print('reel', r[0], f'{r[1]:.0f}s', {k: f'crf{v[0]} {v[1] / 1048576:.2f}MB' for k, v in r[2].items()}, flush=True)
    elif cmd == 'portrait':
        sel = args[1].split(',') if len(args) > 1 else [R['slug'] for R in REELS]
        for s in sel:
            r = render_portrait(s); print('portrait', r[0], f'{r[1]:.0f}s', f'crf{r[2]} {r[3] / 1048576:.2f}MB', 'portrait cams:', r[4], flush=True)
    elif cmd == 'install':
        n, tot = install(); print(f'installed {n} reels, {tot / 1048576:.1f} MB')
    elif cmd == 'sheet':
        sheet()
    print(f'{cmd} done in {time.time() - t0:.0f}s')
