"""09 — Two iPhone 17 Pro (deep blue) standing on a satin surface, dramatic low angle: one showing the
screen, one the full-width camera plateau. Dark set, strip lights for edge definition."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R

R.reset()
w, h, spp = R.res(2000, 2400, 96)
R.setup_render(w, h, samples=spp, threshold=0.01)
R.world_hdri('studio_kontrast_03', strength=0.05, rot_z=math.radians(0))
fl = R.mat_paint('surface', R.srgb((26, 23, 25)), rough=0.36, spec=0.5)
R.sweep('sweep', width=4, depth=2, height=2, radius=0.5, mat=fl, loc=(0, 0.45, 0))
a = R.iphone17pro('PhoneA', screen='iphone-product.png', finish='deepblue')
a.rotation_euler = (math.radians(90), 0, math.radians(-24)); a.location = (-0.040, -0.005, 0.075 + 0.0002)
b = R.iphone17pro('PhoneB', screen='iphone-shop.png', finish='deepblue')
b.rotation_euler = (math.radians(90), 0, math.radians(180 + 32)); b.location = (0.045, 0.045, 0.075 + 0.0002)
# strip lights (edge definition) + soft key + magenta back glow
R.area_light('stripL', (-0.30, 0.22, 0.16), (0, 0.02, 0.08), size=(0.03, 0.5), power=12, color=(0.92, 0.95, 1.0))
R.area_light('stripR', (0.30, 0.25, 0.16), (0, 0.02, 0.08), size=(0.03, 0.5), power=12, color=(1.0, 0.96, 0.94))
R.area_light('key', (-0.25, -0.45, 0.35), (0, 0, 0.07), size=(0.35, 0.35), power=9, color=(1.0, 0.98, 0.96))
R.area_light('glow', (0.05, 0.42, 0.25), (0, 0.45, 0.1), size=(0.6, 0.3), power=14, color=R.srgb((214, 0, 114)))
R.area_light('backfill', (0.26, -0.22, 0.15), (0.045, 0.045, 0.085), size=(0.22, 0.30), power=3.2, color=(0.95, 0.97, 1.0))
focus = R.empty('focus', (-0.02, -0.01, 0.08))
R.camera((0.03, -0.33, 0.020), (0.0, 0.02, 0.083), lens=58, fstop=5.6, focus=focus)
R.render_still(R.out_name('r-09-iphones'), post_kw=dict(exposure=-0.2, look='AgX - Medium High Contrast', vignette=0.15))
