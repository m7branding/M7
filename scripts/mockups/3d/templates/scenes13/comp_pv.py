"""Quick composite of a template preview/still with a test brand (for authoring)."""
import sys, os, json
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import numpy as np
from PIL import Image
import tcomp as C, proj as P, designs as D, backdrops as BD
t, base = sys.argv[1], sys.argv[2]
slug = sys.argv[3] if len(sys.argv) > 3 else 'jurgh-detailing'
logo = sys.argv[4] if len(sys.argv) > 4 else '/home/user/M7/public/media/logos-designed/jurgh.webp'
tint = sys.argv[5] if len(sys.argv) > 5 else '#D9D8D4'
tdir, meta = C.load_template(t)
fr = C.Frame(tdir, base, meta)
pp = C.prepare(fr, exposure=meta.get('exposure', 0.0), look=meta.get('look', 'AgX - Medium High Contrast'))
PR = P.projects(); p = PR.get(slug, {'slug': slug, 'color': '#3A4BFF', 'captures': ''})
caps = P.captures(p) if p.get('captures') else {}
mono = Image.open(logo).convert('RGBA').split()[3]
b = D.Brand(slug, p['color'], P.domain(p) if p.get('captures') else slug + '.nl', mono, captures=caps)
prints = {}
for pr in pp.get('prints', []):
    r = pr['role']
    if r in prints: continue
    fn = getattr(D, r.split(':')[0], None)
    prints[r] = fn(b) if fn else D.mark(b)
tints = {t_['role']: BD.lin(tint) for t_ in pp.get('tints', [])}
roles = sorted({x['role'] for x in pp['screens']})
ds = P.displays_for(p, roles, caps=caps) if caps else {}
bg = None
if pp['transparent']:
    bg = BD.backdrop('light-grey', meta['camera'], pp['W'], pp['H'], alpha=pp['a'])
img = C.finish(pp, ds, bg=bg, tints=tints, prints=prints)
out = os.path.join(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'work'), f'{t}_{base}_{slug}.png')
Image.fromarray(img).save(out); print(out)
