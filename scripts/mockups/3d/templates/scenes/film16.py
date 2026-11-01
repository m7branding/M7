"""film16 — round 16 (R3D16): M7's own screen recordings (s-fa-*.mp4) as device films, flows15 conventions.

  python film16.py test <id> [t]          r16/r3d/film-<id>-<t>.jpg (one frame at t seconds of the take)
  python film16.py render <ids|all>        r16/r3d/out/<slug>/r-flow-<n>.mp4 + .webp poster (n = next free number)
  python film16.py install <ids|all>       copy into public/media/cases/<slug>/ and add the Dutch title to r-flows.json

Plan: r16/r3d/film_plan.json {id: {slug, src, t, tint, t0, t1, fit, blur, title}}. One device composition, static
camera, 1920x1080, 30 fps, H.264 (faststart, no audio). The take plays once in real time and dissolves (0.5 s) back
into its first frame, so the film loops. Personal data in a take (names) is blurred per region / time range. Existing
r-flow films of a case are never replaced: the new film gets the next free number.
"""
import sys, os, json, shutil, subprocess, glob
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np, cv2
from PIL import Image, ImageFilter
import tcomp as C, backdrops as BD, flows as FL, proj as P
import batch13 as B13
import video13 as V

S = os.environ.get('M7_SCRATCH') or os.path.dirname(os.path.dirname(HERE))
ROOT = os.environ.get('M7_ROOT', '/home/user/M7')
CASES = os.path.join(ROOT, 'public', 'media', 'cases')
OUTD = os.path.join(S, 'r16', 'r3d')
PLAN = os.path.join(OUTD, 'film_plan.json')
FW, FH, FPS = 1920, 1080, 30
TINTS = {'light': '#E3E4E6', 'warm': '#ECEBE7', 'dark': '#2A2B2F', 'anth': '#1D1E21', 'black': '#141518', 'navy': '#0B1426'}


def plan():
    return json.load(open(PLAN))


def fit_frame(fr, W, H, f):
    """fr: RGB uint8 recording frame -> content at the display aspect (crop / pad with the page's own colour)."""
    if f.get('crop'):
        x0, y0, x1, y1 = f['crop']; fr = fr[y0:y1, x0:x1]
    h, w = fr.shape[:2]; ar = W / H; a = w / h
    mode = f.get('mode', 'top')
    if a < ar * 0.995:                       # taller than the display
        if mode == 'padx':
            nw = round(h * ar); col = f.get('col') or np.median(np.concatenate([fr[:, :3].reshape(-1, 3), fr[:, -3:].reshape(-1, 3)]), 0)
            out = np.empty((h, nw, 3), np.uint8); out[:] = np.asarray(col, np.uint8); x = (nw - w) // 2; out[:, x:x + w] = fr; return out
        nh = round(w / ar); y0 = int(f.get('y0', 0)); return fr[y0:y0 + nh]
    if a > ar * 1.005:                       # wider than the display
        if mode in ('padtop', 'padbottom'):
            nh = round(w / ar); out = np.empty((nh, w, 3), np.uint8)
            if mode == 'padtop':
                out[:nh - h] = np.asarray(f.get('col') or np.median(fr[:2].reshape(-1, 3), 0), np.uint8); out[nh - h:] = fr
            else:
                out[h:] = np.asarray(f.get('col') or np.median(fr[-2:].reshape(-1, 3), 0), np.uint8); out[:h] = fr
            return out
        nw = round(h * ar); x0 = int(f.get('x0', (w - nw) // 2)); return fr[:, x0:x0 + nw]
    return fr


def blurred(fr, regs, t):
    for r in regs or []:
        x0, y0, x1, y1 = r[:4]
        if len(r) > 4 and not (r[4] <= t <= r[5]): continue
        fr[y0:y1, x0:x1] = cv2.GaussianBlur(fr[y0:y1, x0:x1], (0, 0), 9)
    return fr


class Film:
    def __init__(self, fid):
        self.e = e = plan()[fid]; self.fid = fid; self.slug = e['slug']
        t = e['t']
        self.pp = pp = B13.prepared(t)
        meta = json.load(open(os.path.join(C.TPL, t, 'meta.json')))
        base = BD.lin(TINTS.get(e.get('tint', 'dark'), e.get('tint', 'dark')))
        tints = None
        if pp.get('tints'):
            tints = {}
            for i, tr in enumerate(pp['tints']):
                f = 1.0 if i == 0 else (0.82 if base.mean() > 0.3 else 1.35)
                tints[tr['role']] = np.clip(base * f, 0, 1)
        dev = C.develop_set(pp, tints, None) if tints else None
        self.sf = C.StaticFrame(pp, bg=None, dev=dev)
        scr = pp['screens'][0]; self.role = scr['role']; g = meta['glass'][scr['type']]
        self.portrait = self.role == 'tablet_p'
        self.W, self.H = (g['px'][1], g['px'][0]) if self.portrait else tuple(g['px'])
        self.rd = FL.Reader(os.path.join(CASES, self.slug, e['src']))
        self.t0 = e.get('t0', 0.0); self.t1 = e.get('t1', self.rd.n / self.rd.fps - 0.04)
        c0 = self.content(self.t0)
        if scr['type'] == 'iphone' and e.get('url') is not None:
            self.d = P.make_display('iphone', Image.fromarray(c0), e['url'], 0.0)
        else:
            self.d = C.Display(self.W, self.H, c0, 0, None)
            if self.portrait: self.d.rot = 90
        (cx, cy, bw, bh), _ = V.subject(pp)
        z = e.get('zoom', 1.0); fx, fy = e.get('focus', (0.5, 0.5))
        self.rect = V.crop_rect(pp['W'], pp['H'], FW / FH, z, cx, cy, fx, fy, bw, bh)

    def content(self, t):
        fr = np.ascontiguousarray(self.rd.get(t))
        fr = blurred(fr.copy(), self.e.get('blur'), t)
        return np.ascontiguousarray(fit_frame(fr, self.W, self.H, self.e.get('fit') or {}))

    def frame(self, t):
        self.d.content = C.Pyramid(C.to_lin(self.content(t)))
        img = self.sf.frame({self.role: self.d}, aniso=4)
        x0, y0, cw, ch = self.rect
        k = cw / FW
        if k > 1.05: img = cv2.GaussianBlur(img, (0, 0), 0.42 * (k - 1.0) ** 0.5 * 1.6)
        M = np.array([[k, 0, x0 + 0.5 * k - 0.5], [0, ch / FH, y0 + 0.5 * ch / FH - 0.5]], np.float64)
        return cv2.warpAffine(img, M, (FW, FH), flags=cv2.INTER_CUBIC | cv2.WARP_INVERSE_MAP, borderMode=cv2.BORDER_REFLECT)


def next_n(slug):
    have = set()
    for d in (os.path.join(CASES, slug), os.path.join(OUTD, 'out', slug)):
        for f in glob.glob(os.path.join(d, 'r-flow-*.mp4')):
            try: have.add(int(os.path.basename(f)[7:-4]))
            except ValueError: pass
    n = 1
    while n in have: n += 1
    return n


def encode(frames_iter, n_frames, mp4, poster, budget, xf=int(0.5 * FPS)):
    tmp = mp4 + '.mkv'
    enc = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{FW}x{FH}',
                            '-r', str(FPS), '-i', '-', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '8', '-pix_fmt', 'yuv444p',
                            tmp], stdin=subprocess.PIPE)
    first = None
    for k, img in enumerate(frames_iter):
        if k == 0:
            first = img.copy(); Image.fromarray(img).save(poster, quality=84, method=6)
        if xf and k >= n_frames - xf:
            w = (k - (n_frames - xf) + 1) / xf; w = 0.5 - 0.5 * np.cos(np.pi * w)
            img = (img.astype(np.float32) * (1 - w) + first.astype(np.float32) * w + 0.5).astype(np.uint8)
        enc.stdin.write(img.tobytes())
    enc.stdin.close(); enc.wait()
    for crf in (20, 22, 24, 26, 28):
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', tmp, '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf),
                        '-g', str(FPS * 4), '-bf', '3', '-x264-params', 'aq-mode=3', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
                        '-an', mp4], check=True)
        if os.path.getsize(mp4) <= budget: break
    os.remove(tmp)
    return crf


def render(fid):
    fm = Film(fid); e = fm.e
    od = os.path.join(OUTD, 'out', fm.slug); os.makedirs(od, exist_ok=True)
    n = e.get('n') or next_n(fm.slug)
    name = f'r-flow-{n}'
    dur = fm.t1 - fm.t0; N = int(round(dur * FPS))
    budget = max(2.6, 0.33 * dur) * 1048576
    frames = (fm.frame(fm.t0 + k / FPS) for k in range(N))
    crf = encode(frames, N, os.path.join(od, name + '.mp4'), os.path.join(od, name + '.webp'), budget)
    json.dump(dict(name=name, title=e['title'], fid=fid), open(os.path.join(od, name + '.json'), 'w'), ensure_ascii=False)
    return name, crf, os.path.getsize(os.path.join(od, name + '.mp4')) // 1024


def install(slug, name, title):
    od = os.path.join(OUTD, 'out', slug); sd = os.path.join(CASES, slug)
    for ext in ('.mp4', '.webp'):
        shutil.copy2(os.path.join(od, name + ext), os.path.join(sd, name + ext))
    p = os.path.join(sd, 'r-flows.json')
    t = json.load(open(p)) if os.path.exists(p) else {}
    t[name + '.mp4'] = title
    json.dump(t, open(p, 'w'), ensure_ascii=False, indent=1)


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'test':
        fm = Film(sys.argv[2]); ts = [float(x) for x in (sys.argv[3] if len(sys.argv) > 3 else '0').split(',')]
        for t in ts:
            Image.fromarray(fm.frame(fm.t0 + t)).save(os.path.join(OUTD, f'film-{sys.argv[2]}-{t}.jpg'), quality=88)
    elif cmd == 'render':
        ids = sorted(plan()) if sys.argv[2] == 'all' else sys.argv[2].split(',')
        for i in ids: print('film', i, render(i), flush=True)
    elif cmd == 'install':
        ids = sorted(plan()) if sys.argv[2] == 'all' else sys.argv[2].split(',')
        for i in ids:
            slug = plan()[i]['slug']
            for j in glob.glob(os.path.join(OUTD, 'out', slug, 'r-flow-*.json')):
                m = json.load(open(j))
                if m.get('fid') == i: install(slug, m['name'], m['title']); print('installed', slug, m['name'])
