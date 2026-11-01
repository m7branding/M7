"""dev16 — round 16 (R3D16): M7's REAL web / app designs (s-fa-*.webp) on photoreal devices.

  python dev16.py test <slug> [i]            r16/r3d/test-dev-<slug>-<i>.jpg (one entry of the plan, full size)
  python dev16.py render <slugs|all>         r16/r3d/out/<slug>/r-65-device-<n>.webp (2000 px)

Plan: r16/r3d/dev_plan.json {slug: [{t, src, y0?, tint, n}]}; one display per template (Studio Display d19,
MacBook d13 / d18). The design fills the display without browser chrome (no URL is claimed): taller than the
display -> the viewport-height section from y0 (default: the hero at the top); wider -> padded with the page's own
bottom colour when that edge is plain, else trimmed evenly at the sides. Never stretched, never invented.
"""
import sys, os, json
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
from PIL import Image, ImageFilter
import tcomp as C, backdrops as BD
import batch13 as B13

S = os.environ.get('M7_SCRATCH') or os.path.dirname(os.path.dirname(HERE))
ROOT = os.environ.get('M7_ROOT', '/home/user/M7')
CASES = os.path.join(ROOT, 'public', 'media', 'cases')
OUTD = os.path.join(S, 'r16', 'r3d')
PLAN = os.path.join(OUTD, 'dev_plan.json')
TINTS = {'light': '#E3E4E6', 'warm': '#E4E2DE', 'mid': '#CDCFD2', 'dark': '#2A2B2F', 'anth': '#1D1E21', 'black': '#0D0E10',
         'navy': '#0B1426'}


def fit(img, W, H, y0=0, x0=None, mode=None, crop=None):
    img = img.convert('RGB')
    if crop: img = img.crop(tuple(crop))
    ar = W / H; a = img.width / img.height
    if mode == 'padx' and a < ar:                    # whole design centred on a wide screen, page colour at the sides
        arr = np.asarray(img); w = round(img.height * ar)
        col = tuple(int(v) for v in np.median(np.concatenate([arr[:, :4].reshape(-1, 3), arr[:, -4:].reshape(-1, 3)]), 0))
        c = Image.new('RGB', (w, img.height), col); c.paste(img, ((w - img.width) // 2, 0)); return c
    if mode == 'pady' and a > ar:                    # page colour below a short design
        arr = np.asarray(img); h = round(img.width / ar)
        col = tuple(int(v) for v in np.median(arr[-4:].reshape(-1, 3), 0))
        c = Image.new('RGB', (img.width, h), col); c.paste(img, (0, 0)); return c
    if a < ar * 0.995:                               # taller: one viewport-height section
        h = round(img.width / ar); y0 = int(min(max(0, y0), img.height - h))
        return img.crop((0, y0, img.width, y0 + h))
    if a > ar * 1.005:                               # wider
        arr = np.asarray(img).astype(np.float32)
        bot = arr[-6:].reshape(-1, 3)
        if bot.std(0).max() < 6:
            h = round(img.width / ar); col = tuple(int(v) for v in np.median(bot, 0))
            c = Image.new('RGB', (img.width, h), col); c.paste(img, (0, 0)); return c
        w = round(img.height * ar); x = (img.width - w) // 2 if x0 is None else int(x0)
        return img.crop((x, 0, x + w, img.height))
    return img


def plan():
    return json.load(open(PLAN))


def comp(slug, e):
    t = e['t']
    pp = B13.prepared(t)
    meta = json.load(open(os.path.join(C.TPL, t, 'meta.json')))
    base = BD.lin(TINTS.get(e.get('tint', 'light'), e.get('tint', 'light')))
    tints = None
    if pp.get('tints'):
        tints = {}
        for i, tr in enumerate(pp['tints']):
            f = 1.0 if i == 0 else (0.82 if base.mean() > 0.3 else 1.35)
            tints[tr['role']] = np.clip(base * f, 0, 1)
    ds = {}
    srcs = e['src'] if isinstance(e['src'], dict) else None
    for x in pp['screens']:
        r = x['role']
        g = meta['glass'][x['type']]; W, H = g['px']
        src = srcs.get(r) if srcs else e['src']
        if src is None: continue
        src_im = Image.open(os.path.join(CASES, slug, src)).convert('RGB')
        for b in e.get('blur', []):                  # personal data (names, portraits) in a UI: blurred out
            reg = src_im.crop(tuple(b)).filter(ImageFilter.GaussianBlur(14)); src_im.paste(reg, tuple(b[:2]))
        im = fit(src_im, W, H, y0=e.get('y0', 0), x0=e.get('x0'), mode=e.get('mode'), crop=e.get('crop'))
        if im.width < W:      # the sampler is mip-mapped; upsample once with Lanczos so small designs stay crisp
            im = im.resize((W, round(im.height * W / im.width)), Image.LANCZOS)
        ds[r] = C.Display(W, H, np.asarray(im), 0, None)
    dev = C.develop_set(pp, tints, None) if tints else None
    return Image.fromarray(C.over(pp, C.foreground(pp, ds, 0.25, 6, dev=dev), bg=None))


def render(slug):
    od = os.path.join(OUTD, 'out', slug); os.makedirs(od, exist_ok=True)
    out = []
    for e in plan()[slug]:
        if e.get('skip'): continue
        im = comp(slug, e).resize((2000, 1333), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=0.7, percent=30, threshold=1))
        p = os.path.join(od, f"r-65-device-{e['n']}.webp")
        for q in (90, 86, 82):
            im.save(p, quality=q, method=6)
            if os.path.getsize(p) < 650_000: break
        out.append(p)
    return out


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'test':
        slug = sys.argv[2]; i = int(sys.argv[3]) if len(sys.argv) > 3 else 0
        comp(slug, plan()[slug][i]).save(os.path.join(OUTD, f'test-dev-{slug}-{i}.jpg'), quality=88)
    elif cmd == 'render':
        sel = sorted(plan()) if sys.argv[2] == 'all' else sys.argv[2].split(',')
        for s in sel: print('dev', s, render(s), flush=True)
