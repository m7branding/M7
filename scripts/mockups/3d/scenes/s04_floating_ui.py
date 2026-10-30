"""04 — Floating UI fragments of the webshop layered in depth on a deep MisterGlass-magenta backdrop
(like ref cover (1)): hero, product card, price calculator, logo, price badge, CTA."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R
from mathutils import Vector

K = R.K
R.reset()
w, h, spp = R.res(2400, 1500, 80)
R.setup_render(w, h, samples=spp, threshold=0.01)
R.world_color((0.004, 0.002, 0.004), 1.0)
# backdrop: deep plum, lit by a magenta glow from the upper right
bd = R.mat_paint('backdrop', R.srgb((40, 10, 30)), rough=0.85, spec=0.2)
R.plane('backdrop', 4.0, 3.0, mat=bd, loc=(0, 0.75, 0), rot=(math.radians(90), 0, 0))
R.area_light('glow', (0.55, 0.55, 0.45), (0.3, 0.75, 0.15), size=(0.5, 0.5), power=55, color=R.srgb((214, 0, 114)))
R.area_light('glow2', (-0.6, 0.6, -0.4), (-0.3, 0.75, -0.2), size=(0.6, 0.6), power=10, color=R.srgb((90, 20, 120)))
R.area_light('key', (-0.45, -0.55, 0.6), (0, 0, 0), size=(0.35, 0.35), power=20, color=(1.0, 0.97, 0.95))
R.area_light('rim', (0.35, 0.25, 0.35), (0, 0, 0), size=(0.2, 0.2), power=8, color=R.srgb((255, 120, 190)))

grp = R.empty('ui')
grp.rotation_euler = (math.radians(90 - 22), math.radians(-8), math.radians(14))
T = lambda n: os.path.join(R.TEX, n)
items = [  # name, png, width mm, (x, y) mm in the group plane, lift mm, extra z-rot deg, radius mm
    ('hero', 'card-hero.png', 200.0, (0, 8), 0.0, 0, 3.4),
    ('product', 'card-product.png', 54.0, (112, -8), 22.0, -3, 3.0),
    ('calc', 'card-calc.png', 104.0, (-78, -60), 34.0, 4, 3.6),
    ('logo', 'card-logo.png', 62.0, (-96, 66), 46.0, -2, 3.2),
    ('price', 'card-price.png', 82.0, (58, 76), 16.0, 2, 2.2),
    ('cta', 'card-cta.png', 52.0, (52, -76), 52.0, -5, 1.4),
]
cards = {}
for nm, png, wmm, (x, y), lift, rz, rad in items:
    ob, hmm = R.card(nm, T(png), wmm, thickness=1.4, radius=rad)
    R.parent(ob, grp, keep=False)
    ob.location = (x * K, y * K, lift * K)
    ob.rotation_euler = (0, 0, math.radians(rz))
    cards[nm] = ob
bpy.context.view_layer.update()
focus = R.empty('focus', (0, 0, 0)); R.parent(focus, grp, keep=False); focus.location = (0, 0, 20 * K)
R.camera((0.02, -0.52, 0.085), (0.0, 0.0, -0.012), lens=50, fstop=5.6, focus=focus)
R.render_still(R.out_name('r-04-floating-ui'), post_kw=dict(exposure=0.0, look='AgX - Medium High Contrast'))
