"""02 — MacBook Pro 14 (space black) in a high 3/4 view, keyboard visible, clean white studio."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import r3d as R

R.reset()
w, h, spp = R.res(2400, 2400, 64, preview_scale=0.35)
R.setup_render(w, h, samples=spp, threshold=0.012)
R.world_hdri('studio_small_09', strength=0.10, rot_z=math.radians(70))
floor = R.mat_paint('floor', R.srgb((232, 232, 233)), rough=0.6, spec=0.3)
R.sweep('sweep', width=6, depth=4, height=3, radius=1.0, mat=floor, loc=(0, 1.2, 0), rot_z=math.radians(-35))
mbp = R.macbook_pro14('MBP', screen='mbp-product.png', finish='spaceblack', open_deg=108)
mbp.rotation_euler.z = math.radians(10)
R.area_light('key', (-1.0, -0.2, 1.3), (0, 0, 0), size=(1.2, 1.2), power=110, color=(1.0, 0.985, 0.97))
R.area_light('rim', (0.7, 0.9, 0.8), (0, 0, 0.1), size=(1.0, 0.5), power=90)
R.area_light('fill', (0.9, -1.0, 0.5), (0, 0, 0.05), size=(1.2, 1.2), power=25)
R.camera((-0.46, -0.66, 0.66), (-0.012, 0.056, 0.072), lens=68, fstop=8.0)
R.render_still(R.out_name('r-02-macbook'), post_kw=dict(exposure=-1.1, look='AgX - Medium High Contrast'))
