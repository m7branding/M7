"""Composite every template preview (pv) with a test project and build a labelled sheet."""
import sys, os, json, glob
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import tcomp as C, proj as P, designs as D, backdrops as BD
base = sys.argv[1]; pattern = sys.argv[2]; out = sys.argv[3]
slug = sys.argv[4] if len(sys.argv) > 4 else 'huurfix'
logo = sys.argv[5] if len(sys.argv) > 5 else '/home/user/M7/public/media/logos-designed/jurgh.webp'
tintc = sys.argv[6] if len(sys.argv) > 6 else '#D9D8D4'
p = P.projects()[slug]; caps = P.captures(p)
b = D.Brand(slug, p['color'], P.domain(p), Image.open(logo).convert('RGBA').split()[3], captures=caps)
F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 16)
cells = []
for tdir in sorted(glob.glob(os.path.join(C.TPL, pattern))):
    t = os.path.basename(tdir)
    if not os.path.exists(os.path.join(tdir, base + '_rgb.exr')): continue
    meta = json.load(open(os.path.join(tdir, 'meta.json')))
    try:
        fr = C.Frame(tdir, base, meta)
        pp = C.prepare(fr, exposure=meta.get('exposure', 0.0), look=meta.get('look', 'AgX - Medium High Contrast'))
        prints = {pr['role']: D.design_for(pr['role'], b) for pr in pp.get('prints', [])}
        tints = {t_['role']: BD.lin(tintc) for t_ in pp.get('tints', [])}
        ds = P.displays_for(p, sorted({x['role'] for x in pp['screens']}), caps=caps, glass=meta.get('glass'), brand=b)
        bg = BD.backdrop('light-grey', meta['camera'], pp['W'], pp['H'], alpha=pp['a']) if pp['transparent'] else None
        im = Image.fromarray(C.finish(pp, ds, bg=bg, tints=tints, prints=prints))
    except Exception as e:
        print('ERR', t, e); continue
    im.thumbnail((480, 480)); cells.append((im, t))
cols = 5; cw = 490; chh = max(c[0].height for c in cells) + 26
sh = Image.new('RGB', (cols * cw + 10, ((len(cells) + cols - 1) // cols) * chh + 10), (24, 24, 26)); d = ImageDraw.Draw(sh)
for i, (im, t) in enumerate(cells):
    x = 10 + (i % cols) * cw; y = 10 + (i // cols) * chh; sh.paste(im, (x, y)); d.text((x, y + im.height + 3), t, font=F, fill=(220, 220, 224))
sh.save(out, quality=86); print(out, len(cells))
