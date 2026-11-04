"""Round 20 sources for the clean reels and stories. Runs in the Blender venv from the live scenes dir.

  python book20.py book <slug> <outdir> [--gen]      the open brandbook (3000x2000) + geo.json (page boxes, uv lookup)
  python book20.py dev <slug> <template> <out.jpg>   a design project's real design on a portrait template (1440x2560)
  python book20.py pan <still.jpg> <secs> <outdir> <cx,cy,w> <cx,cy,w> [--fps 30]
                                                     a 9:16 camera move over a still: window centre + width, eased

The brandbook uses the project's REAL brandbook pages (r16 picks) or, for branding projects without them, M7's own
brand sheets of the real logo and verified palette (r-62 logos, r-63 colours). Never invented content.
"""
import os, sys, json, math
sys.path = [x for x in sys.path if os.path.abspath(x or '.') != os.path.dirname(os.path.abspath(__file__))]
SC = '/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r12/scenes'
sys.path.insert(0, os.path.join(os.path.dirname(SC), 'lib')); sys.path.insert(0, SC)
from PIL import Image, ImageFilter

GEN = {'cover': 'r-62-brand-sheet-logos.webp', 'l1': 'r-62-brand-sheet-logos.webp', 'r1': 'r-63-brand-sheet-colours.webp', 'bg': 'light', 'tag': '169'}


def book(slug, outd, gen=False):
    import numpy as np
    import book16 as B
    real = B.picks()
    pk = GEN if gen else real[slug]
    B.picks = lambda: dict(real, **{slug: dict(pk, cam='a')})
    tag = pk.get('tag') or B.tag_for(slug, pk)
    im = B.still(slug, 'a')
    pp, _ = B.prepared(f'g03_book{tag}__a', 'still')
    W = pp['W']
    geo = {'tag': tag, 'size': [im.width, im.height], 'gen': gen}
    for pr in pp['prints']:
        r = pr['role']
        if r not in ('cover', 'l1', 'r1'):
            continue
        idx = pr['idx']; ys, xs = idx // W, idx % W
        geo[r] = [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())]
        # page uv -> pixel lookup on a coarse grid (for details such as the logo on a brand sheet)
        du, dv = pr['du'], pr['dv']
        pts = {}
        for u in (0.15, 0.25, 0.5, 0.75, 0.85):
            for v in (0.25, 0.5, 0.75):
                k = int(np.argmin((du - u) ** 2 + (dv - v) ** 2))
                pts[f'{u},{v}'] = [int(xs[k]), int(ys[k])]
        geo[r + '_uv'] = pts
    os.makedirs(outd, exist_ok=True)
    # atomic writes: another worker may be reading these
    im.convert('RGB').save(os.path.join(outd, 'still.tmp.jpg'), quality=96)
    os.replace(os.path.join(outd, 'still.tmp.jpg'), os.path.join(outd, 'still.jpg'))
    json.dump(geo, open(os.path.join(outd, 'geo.tmp'), 'w'), indent=1)
    os.replace(os.path.join(outd, 'geo.tmp'), os.path.join(outd, 'geo.json'))
    print('book', slug, tag, geo.get('l1'), geo.get('r1'), geo.get('cover'))


SCREEN = {  # which screens of a portrait scene carry the design (a phone next to a laptop stays dark)
    'd02_mac_top__p': ('mac',), 'd01_desk_studio__p': ('studio', 'mac_b'),
}


def dev(slug, t, out, i=0):
    import dev16 as D
    plan = D.plan()[slug]
    first = []
    for e in plan:
        for x in (e['src'].values() if isinstance(e['src'], dict) else [e['src']]):
            if x not in first: first.append(x)
    ds = first          # only the designs vetted in round 16 (no personal data); others may hold names or portraits
    src = ds[i % len(ds)]
    # the settings (blur of personal data, fit mode, tint) of the plan entry that holds this design
    e = next(x for x in plan if src in (x['src'].values() if isinstance(x['src'], dict) else [x['src']]))
    e = {k: v for k, v in e.items() if k in ('tint', 'blur', 'mode', 'y0', 'x0', 'crop')}
    e = dict(e, t=t, src={r: src for r in SCREEN[t]} if t in SCREEN else src)
    im = D.comp(slug, e)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    im.convert('RGB').save(out + '.tmp.jpg', quality=95)
    os.replace(out + '.tmp.jpg', out)
    print('dev', slug, t, im.size)


def ease(s):
    return 0.5 * s + 0.5 * (0.5 - 0.5 * math.cos(math.pi * s))   # half linear, half sine: drifts, never stops dead


def pan(src, secs, outd, a, b, fps=30, W=1080, H=1920):
    im = Image.open(src).convert('RGB')
    n = int(round(float(secs) * fps))
    os.makedirs(outd, exist_ok=True)
    (ax, ay, aw), (bx, by, bw) = a, b
    for i in range(n):
        s = ease(i / max(1, n - 1))
        cx, cy, w = ax + (bx - ax) * s, ay + (by - ay) * s, aw * (bw / aw) ** s     # zoom in log space: even speed
        h = w * H / W
        x0 = min(max(cx - w / 2, 0), im.width - w); y0 = min(max(cy - h / 2, 0), im.height - h)
        fr = im.resize((W, H), Image.LANCZOS, box=(x0, y0, x0 + w, y0 + h))
        if w < W * 0.95:                       # upscaled: a light unsharp mask keeps the print crisp
            fr = fr.filter(ImageFilter.UnsharpMask(radius=1.0, percent=40, threshold=2))
        fr.save(os.path.join(outd, f'{i + 1:05d}.jpg'), quality=92)
    print('frames', n)


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'book':
        book(sys.argv[2], sys.argv[3], '--gen' in sys.argv)
    elif cmd == 'dev':
        dev(*sys.argv[2:5], i=int(sys.argv[sys.argv.index('--i') + 1]) if '--i' in sys.argv else 0)
    elif cmd == 'pan':
        fps = int(sys.argv[sys.argv.index('--fps') + 1]) if '--fps' in sys.argv else 30
        p = lambda s: [float(x) for x in s.split(',')]
        pan(sys.argv[2], sys.argv[3], sys.argv[4], p(sys.argv[5]), p(sys.argv[6]), fps)
