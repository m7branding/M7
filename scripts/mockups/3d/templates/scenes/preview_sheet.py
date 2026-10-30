"""Preview sheet: all stills + 3 frames of each animation for a few projects."""
import sys, os, json, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from PIL import Image, ImageDraw, ImageFont
import tcomp as C, proj as P, batch as B

slugs = sys.argv[1].split(',')
out = sys.argv[2]
FR = [0, 40, 79]
F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 22)
rows = []
PR = P.projects()
for s in slugs:
    p = PR[s]
    caps = P.captures(p)
    cells = []
    for t, name in B.STILLS:
        f = os.path.join(B.OUT, s, name + '.webp')
        if os.path.exists(f):
            im = Image.open(f).convert('RGB'); im.thumbnail((560, 400)); cells.append((im, name))
    rows.append((s + '  (stills)', cells))
    for kind, t in B.VIDEOS.items():
        meta = json.load(open(os.path.join(C.TPL, t, 'meta.json'))); N = meta['frames']; Ftot = 2 * N - 2
        cells = []
        for u in FR:
            cp = os.path.join(B.cache_dir(t), f'f_{u:04d}.npz')
            if not os.path.exists(cp):
                continue
            pp = C.load_prepared(cp)
            ds = P.displays_for(p, sorted({x['role'] for x in pp['screens']}), video=True, caps=caps)
            for r, d in ds.items():
                st = d.offset; vis = (d.H - d.top) * d.cscale
                amp = max(0.0, min(d.max_offset - st, (1.6 if d.W > 2000 else 2.2) * vis))
                d.offset = st + amp * B.scroll_curve(u, Ftot)
            im = Image.fromarray(C.finish(pp, ds, bg_srgb=C.pastel(p['color']), aniso=3)); im.thumbnail((560, 400))
            cells.append((im, f'{kind} frame {u}'))
        rows.append((f'{s}  animation {kind} ({"assigned" if B.video_kind(p, list(PR).index(s)) == kind else "alt"})', cells))
W = 6 * 570 + 10
H = sum(max(c[0].height for c in r[1]) + 60 for r in rows if r[1]) + 10
sh = Image.new('RGB', (W, H), (24, 24, 26)); d = ImageDraw.Draw(sh)
y = 10
for title, cells in rows:
    if not cells: continue
    d.text((10, y), title, font=F, fill=(240, 240, 240)); y += 30
    x = 10
    for im, lab in cells:
        sh.paste(im, (x, y)); d.text((x, y + im.height + 2), lab, font=F, fill=(170, 170, 175)); x += 570
    y += max(c[0].height for c in cells) + 30
sh.save(out, quality=86); print(out, sh.size)
