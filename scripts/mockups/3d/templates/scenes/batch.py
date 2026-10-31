"""batch — composite every project into the rendered templates.

  python batch.py prep                      # once: develop + cache all template frames (tpl/<t>/cache/*.npz)
  python batch.py stills [slug,...|all]     # 5 stills + r-cover per project  -> out/<slug>/
  python batch.py video  [slug,...|all]     # 1 hero video (+ poster) per project -> out/<slug>/
  python batch.py sheets                    # contact sheet per template -> r12/sheet-<template>.jpg
  python batch.py install [slug,...|all]    # copy out/<slug>/* to public/media/cases/<slug>/
Options: -j N (parallel processes)."""
import sys, os, json, time, math, subprocess, shutil, glob
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import numpy as np
from PIL import Image
import tcomp as C, proj as P

R12 = C.R12
OUT = os.path.join(R12, 'out')
_here = os.path.abspath(__file__)
SITE = os.environ.get('R12_SITE') or (os.path.join(_here.split('/scripts/mockups/')[0], 'public', 'media', 'cases')
                                      if '/scripts/mockups/' in _here else '/home/user/M7/public/media/cases')
STILLS = [  # template, output name, still role layout is in the template meta
    ('t1_gravity', 'r-01-gravity'),
    ('t2_closeup', 'r-02-closeup'),
    ('t3_plinth', 'r-03-plinth'),
    ('t4_float_ipad', 'r-04-floating-ipad'),
    ('t5_ipads_dark', 'r-05-ipads'),
]
VIDEOS = {'A': 'v_a_gravity', 'B': 'v_b_plinth'}
COVER_FROM = ['t1_gravity', 't3_plinth', 't5_ipads_dark', 't2_closeup']
FPS = 24
OUT_W, OUT_H = 1440, 810
CRF = int(os.environ.get('R12_CRF', '27'))


# develop settings per template (exposure only affects the set; screens stay colour-exact)
DEVELOP = {'t3_plinth': dict(exposure=-0.6, vignette=0.12), 'v_b_plinth': dict(exposure=-0.6, vignette=0.12),
           't4_float_ipad': dict(exposure=-0.1, vignette=0.10), 't5_ipads_dark': dict(exposure=-0.2, vignette=0.15)}


def cache_dir(t):
    return os.path.join(C.TPL, t, 'cache')


def prep_one(args):
    t, base = args
    tdir, meta = C.load_template(t)
    dst = os.path.join(cache_dir(t), base + '.npz')
    if os.path.exists(dst) and os.path.getmtime(dst) > os.path.getmtime(os.path.join(tdir, base + '_rgb.exr')):
        return
    fr = C.Frame(tdir, base, meta)
    dv = dict(exposure=meta.get('exposure', 0.0), look=meta.get('look', 'AgX - Medium High Contrast'), vignette=meta.get('vignette', 0.0))
    dv.update(DEVELOP.get(t, {}))
    pp = C.prepare(fr, **dv)
    os.makedirs(cache_dir(t), exist_ok=True)
    C.save_prepared(pp, dst)


def prep_jobs():
    jobs = [(t, 'still') for t, _ in STILLS if os.path.exists(os.path.join(C.TPL, t, 'still_rgb.exr'))]
    for v in VIDEOS.values():
        n = json.load(open(os.path.join(C.TPL, v, 'meta.json')))['frames'] if os.path.exists(os.path.join(C.TPL, v, 'meta.json')) else 0
        jobs += [(v, f'f_{i:04d}') for i in range(n) if os.path.exists(os.path.join(C.TPL, v, f'f_{i:04d}_rgb.exr'))]
    return jobs


# ------------------------------------------------------------------ choices per project
def video_kind(p, idx):
    """B (dark plinth) for dark brand colours, A (gravity, neutral/navy backdrop) for light ones; near-greys alternate."""
    r, g, b = C.hex2rgb(p['color'])
    l = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
    sat = (max(r, g, b) - min(r, g, b)) / 255
    if sat < 0.1:
        return 'B' if idx % 2 else 'A'
    return 'B' if l < 0.36 else 'A'


def cover_template(p, idx):
    return COVER_FROM[idx % len(COVER_FROM)]


# ------------------------------------------------------------------ backdrops (transparent templates)
ASSIGN_FILE = os.path.join(R12, 'bg-assign.json')
# per template: variants that don't work there -> replacement (T2: the close-up phone's bezel edge vanishes on near-black)
BG_OVERRIDE = {'t2_closeup': {'near-black': 'anthracite'}}


def bg_variant(slug, t):
    import backdrops as BD
    a = json.load(open(ASSIGN_FILE)) if os.path.exists(ASSIGN_FILE) else {}
    v = a.get(slug, {}).get('variant', 'light-grey')
    return BG_OVERRIDE.get(t, {}).get(v, v)


def still_backdrop(t, variant, pp):
    """Project-independent backdrop for a still template, cached on disk (float16)."""
    import backdrops as BD
    f = os.path.join(C.TPL, t, 'bg', variant + '.npz')
    if os.path.exists(f):
        z = np.load(f); return z['img'].astype(np.float32), float(z['amp'])
    meta = json.load(open(os.path.join(C.TPL, t, 'meta.json')))
    img, amp = BD.backdrop(variant, meta['camera'], pp['W'], pp['H'], alpha=pp['a'])
    os.makedirs(os.path.dirname(f), exist_ok=True)
    np.savez(f, img=img.astype(np.float16), amp=amp)
    return img, amp


# ------------------------------------------------------------------ stills
def stills_one(args):
    slug, idx = args
    p = P.projects()[slug]
    caps = P.captures(p)
    d = os.path.join(OUT, slug); os.makedirs(d, exist_ok=True)
    disp_cache = {}
    t0 = time.time()
    only = os.environ.get('R12_ONLY_T')
    for t, name in STILLS:
        if only and t not in only.split(','):
            continue
        cp = os.path.join(cache_dir(t), 'still.npz')
        if not os.path.exists(cp):
            continue
        pp = C.load_prepared(cp)
        roles = sorted({s['role'] for s in pp['screens']})
        for r in roles:
            if r not in disp_cache:
                disp_cache.update(P.displays_for(p, [r], caps=caps))
        bg = still_backdrop(t, bg_variant(slug, t), pp) if pp['transparent'] else None
        img = Image.fromarray(C.finish(pp, disp_cache, bg=bg))
        src = os.path.join(d, 'src'); os.makedirs(src, exist_ok=True)
        img.save(os.path.join(src, name + '.png'), compress_level=1)        # lossless source for fit()
        img.save(os.path.join(d, name + '.webp'), quality=88, method=6)
        if t == cover_template(p, idx):
            w, h = img.size
            ch = round(w * 1500 / 2400)
            y0 = max(0, (h - ch) // 2)
            cv = img.crop((0, y0, w, y0 + ch)).resize((2400, 1500), Image.LANCZOS)
            cv.save(os.path.join(src, 'r-cover.png'), compress_level=1)
            cv.save(os.path.join(d, 'r-cover.webp'), quality=86, method=6)
    return slug, time.time() - t0


# ------------------------------------------------------------------ video
def scroll_curve(f, F):
    """0 -> 1 -> 0 over the loop, eased (cosine), with short holds at the top."""
    x = f / F
    return (1 - math.cos(2 * math.pi * x)) / 2


def video_one(args):
    slug, idx = args
    p = P.projects()[slug]
    kind = video_kind(p, idx)
    t = VIDEOS[kind]
    meta = json.load(open(os.path.join(C.TPL, t, 'meta.json')))
    N = meta['frames']
    seq = list(range(N)) + list(range(N - 2, 0, -1))          # ping-pong (seamless)
    F = len(seq)
    caps = P.captures(p)
    first = C.load_prepared(os.path.join(cache_dir(t), 'f_0000.npz'))
    roles = sorted({s['role'] for s in first['screens']})
    ds = P.displays_for(p, roles, video=True, caps=caps)
    start = {r: d.offset for r, d in ds.items()}
    amp = {}
    for r, d in ds.items():
        vis = (d.H - d.top) * d.cscale
        amp[r] = max(0.0, min(d.max_offset - start[r], (1.6 if d.W > 2000 else 2.2) * vis))
    import backdrops as BD
    variant = bg_variant(slug, t)
    d_out = os.path.join(OUT, slug); os.makedirs(d_out, exist_ok=True)
    mp4 = os.path.join(d_out, 'r-hero.mp4')
    W, H = first['W'], first['H']
    cmd = ['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
           '-vf', f'scale={OUT_W}:{OUT_H}:flags=lanczos', '-c:v', 'libx264', '-preset', 'slow', '-crf', str(CRF),
           '-g', '480', '-bf', '3', '-x264-params', 'aq-mode=3',
           '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', mp4]
    pr = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    cache = {}
    t0 = time.time()
    for f, u in enumerate(seq):
        if u not in cache:
            cache.clear()
            cache[u] = C.load_prepared(os.path.join(cache_dir(t), f'f_{u:04d}.npz'))
        s = scroll_curve(f, F)
        for r, d in ds.items():
            d.offset = start[r] + amp[r] * s
        pp = cache[u]
        bg = BD.backdrop(variant, meta['cameras'][f'f_{u:04d}'], pp['W'], pp['H'], alpha=pp['a'], phase=f / F) if pp['transparent'] else None
        img = C.finish(pp, ds, bg=bg, aniso=3)
        if f == 0:
            Image.fromarray(img).resize((OUT_W, OUT_H), Image.LANCZOS).save(os.path.join(d_out, 'r-hero.webp'), quality=82, method=6)
        pr.stdin.write(img.tobytes())
    pr.stdin.close(); pr.wait()
    return slug, kind, time.time() - t0, os.path.getsize(mp4)


# ------------------------------------------------------------------ sheets / install
def sheets(slugs):
    from PIL import ImageDraw, ImageFont
    F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 18)
    for t, name in STILLS + [('cover', 'r-cover')]:
        cells = []
        for s in slugs:
            f = os.path.join(OUT, s, name + '.webp')
            if os.path.exists(f):
                try:
                    im = Image.open(f).convert('RGB')
                except Exception:
                    continue
                im.thumbnail((420, 420)); cells.append((im, s))
        if not cells:
            continue
        cw = 430; chh = max(im.height for im, _ in cells) + 30; cols = 6
        sh = Image.new('RGB', (cols * cw + 10, ((len(cells) + cols - 1) // cols) * chh + 10), (24, 24, 26))
        dr = ImageDraw.Draw(sh)
        for i, (im, s) in enumerate(cells):
            x = 10 + (i % cols) * cw; y = 10 + (i // cols) * chh
            sh.paste(im, (x, y)); dr.text((x, y + im.height + 4), s, font=F, fill=(220, 220, 224))
        sh.save(os.path.join(R12, f'sheet-{name.replace("r-0", "").replace("r-", "")}.jpg'), quality=84)


BUDGET = float(os.environ.get('R12_BUDGET', '1.6')) * 1048576


def fit_one(args):
    """Re-encode a project's stills from the lossless sources at the highest WebP quality that keeps the
    project (stills + cover + hero video + poster) within BUDGET."""
    slug, idx = args
    d = os.path.join(OUT, slug); src = os.path.join(d, 'src')
    if not os.path.isdir(src):
        return slug, None, 0
    fixed = sum(os.path.getsize(os.path.join(d, f)) for f in ('r-hero.mp4', 'r-hero.webp') if os.path.exists(os.path.join(d, f)))
    ims = {f[:-4]: Image.open(os.path.join(src, f)).convert('RGB') for f in sorted(os.listdir(src)) if f.endswith('.png')}
    import io
    for q in (88, 85, 82, 79, 76, 73, 70):
        enc = {}
        for n, im in ims.items():
            b = io.BytesIO(); im.save(b, 'webp', quality=q - (2 if n == 'r-cover' else 0), method=6); enc[n] = b.getvalue()
        tot = fixed + sum(len(v) for v in enc.values())
        if tot <= BUDGET:
            break
    for n, data in enc.items():
        with open(os.path.join(d, n + '.webp'), 'wb') as f:
            f.write(data)
    return slug, q, tot


def install(slugs):
    tot = 0
    for s in slugs:
        src = os.path.join(OUT, s); dst = os.path.join(SITE, s)
        os.makedirs(dst, exist_ok=True)
        for f in sorted(os.listdir(src)):
            if f.startswith('r-') and (f.endswith('.webp') or f.endswith('.mp4')):
                shutil.copy2(os.path.join(src, f), os.path.join(dst, f)); tot += os.path.getsize(os.path.join(src, f))
    return tot


def run(fn, jobs, j):
    if j <= 1:
        return [fn(x) for x in jobs]
    from multiprocessing import Pool
    with Pool(j) as pool:
        return list(pool.imap_unordered(fn, jobs))


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('-j')]
    j = next((int(a[2:]) for a in sys.argv[1:] if a.startswith('-j')), 1)
    cmd = args[0]
    allp = list(P.projects().keys())
    sel = allp if len(args) < 2 or args[1] == 'all' else args[1].split(',')
    jobs = [(s, allp.index(s)) for s in sel]
    t0 = time.time()
    if cmd == 'prep':
        run(prep_one, prep_jobs(), j)
    elif cmd == 'stills':
        for r in run(stills_one, jobs, j): print('stills', r[0], f'{r[1]:.1f}s', flush=True)
    elif cmd == 'video':
        for r in run(video_one, jobs, j): print('video', r[0], r[1], f'{r[2]:.0f}s', f'{r[3] / 1048576:.2f} MB', flush=True)
    elif cmd == 'fit':
        for r in run(fit_one, jobs, j): print('fit', r[0], r[1], f'{r[2] / 1048576:.2f} MB', flush=True)
    elif cmd == 'sheets':
        sheets(sel)
    elif cmd == 'install':
        print(f'installed {install(sel) / 1048576:.1f} MB')
    print(f'{cmd} done in {time.time() - t0:.0f}s')
