"""r-next for a case outside projects.json (misterglass's own set): a '__n' composition with CAPTURE's fresh
r14 captures of the live site (hero-* + screens), same treatment as next14 (dark neutral, calm left)."""
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
from PIL import Image
import proj as P, batch13 as B13, next14 as N
slug, t, url = sys.argv[1], sys.argv[2], sys.argv[3]
d = os.path.join(P.R14CAP, slug)
p = dict(slug=slug, captures=d, url=url)
caps = P.captures(p)
scr = sorted(f for f in os.listdir(d) if f.startswith('screen-') and f.endswith('-desktop.png'))
if scr:
    caps['full-desktop'], _ = P.r14_stack([os.path.join(d, f) for f in scr], 1440)
_orig = P.projects
P.projects = lambda: dict(_orig(), **{slug: p})              # this one call only
case = B13.cases()[slug]
brand = B13.brand_for(slug, case, caps)
st = dict(t=t, fam='dark', tint='#141518')
S = B13.setup_still(slug, case, st, caps, brand, {}, {})
img = N.calm_left(Image.fromarray(B13.compose(S, aniso=8)))
if img.size != (2400, 1100): img = img.resize((2400, 1100), Image.LANCZOS)
for base in (B13.OUT, B13.SITE):
    os.makedirs(os.path.join(base, slug), exist_ok=True)
    img.save(os.path.join(base, slug, 'r-next.webp'), quality=88, method=6)
print('next', slug, t, os.path.getsize(os.path.join(B13.SITE, slug, 'r-next.webp')) // 1024, 'KB')
