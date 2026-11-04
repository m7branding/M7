"""07 — Fanned browser windows (home, shop, product) floating in 3D over a light studio floor with soft
shadows (like ref cover (2), with real depth)."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R

K = R.K
R.reset()
w, h, spp = R.res(2400, 1600, 64)
R.setup_render(w, h, samples=spp, threshold=0.01)
R.world_hdri('studio_small_09', strength=0.10, rot_z=math.radians(30))
fl = R.mat_paint('floor', R.srgb((236, 236, 238)), rough=0.6, spec=0.3)
R.sweep('sweep', width=6, depth=3, height=3, radius=0.9, mat=fl, loc=(0, 0.9, 0))
grp = R.empty('fan'); grp.rotation_euler.z = math.radians(-18)
Wmm = 300.0
rad = 22 / 2880 * Wmm
specs = [('shop', 'browser-shop.png', (-0.115, 0.075), 22), ('product', 'browser-product.png', (0.120, 0.060), -20), ('home', 'browser-home.png', (0.0, -0.02), 0)]
for nm, png, (x, y), ry in specs:
    ob, hmm = R.card(nm, os.path.join(R.TEX, png), Wmm, thickness=1.0, radius=rad, edge_color=(0.85, 0.85, 0.86), spec=0.06, rough=0.25)
    R.parent(ob, grp, keep=False)
    ob.rotation_euler = (math.radians(90), 0, math.radians(ry))
    ob.location = (x, y, (hmm / 2 + 70) * K)
R.area_light('key', (-0.8, -0.9, 1.1), (0, 0, 0.15), size=(0.8, 0.8), power=70, color=(1.0, 0.985, 0.97))
R.area_light('fill', (0.9, -0.7, 0.4), (0, 0, 0.15), size=(1.0, 1.0), power=14)
R.camera((0.08, -0.80, 0.25), (0.0, 0.03, 0.165), lens=52, fstop=8.0)
R.render_still(R.out_name('r-07-browsers'), post_kw=dict(exposure=-0.9, look='AgX - Medium High Contrast'))
