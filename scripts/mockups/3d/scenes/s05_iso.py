"""05 — Isometric device group (Studio Display, MacBook Pro, iPad Pro, iPhone 17 Pro) on a muted,
brand-tinted (dusty plum) floor, like ref teamtv-platform."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R

R.reset()
w, h, spp = R.res(2400, 1600, 64)
R.setup_render(w, h, samples=spp, threshold=0.01)
R.world_hdri('studio_small_09', strength=0.10, rot_z=math.radians(-30))
fl = R.mat_paint('floor', R.srgb((90, 70, 84)), rough=0.8, spec=0.25)
R.plane('floor', 8, 8, mat=fl, loc=(0, 0, 0))
sd = R.studio_display('Studio', screen='studio-home.png', finish='silver', tilt_deg=3)
sd.location = (-0.04, 0.15, 0); sd.rotation_euler.z = 0
mbp = R.macbook_pro14('MBP', screen='mbp-shop.png', finish='spaceblack', open_deg=110)
mbp.location = (0.31, -0.13, mbp.location.z)
ip = R.ipad_pro13('iPad', screen='ipad-product.png', finish='spaceblack')
ip.location = (-0.22, -0.25, 0.0); ip.rotation_euler.z = math.radians(0)
pen = R.pencil_pro('Pencil'); pen.location = (-0.21, -0.40, 0.0)
ph = R.iphone17pro('Phone', screen='iphone-product.png', finish='deepblue')
ph.rotation_euler = (math.radians(90), 0, 0); ph.location = (-0.46, 0.03, 0.10)
R.area_light('top', (-0.4, -0.3, 1.6), (0, 0, 0), size=(1.6, 1.6), power=260, color=(1.0, 0.98, 0.97))
R.area_light('side', (1.4, -0.6, 0.6), (0, 0, 0.1), size=(1.0, 1.0), power=60, color=(1.0, 0.95, 0.97))
az, el = math.radians(-38), math.radians(32)
d = 3.0
cam = (d * math.sin(az) * math.cos(el), -d * math.cos(az) * math.cos(el), d * math.sin(el))
R.camera(cam, (0.06, 0.0, 0.17), lens=50, ortho=1.40)
R.render_still(R.out_name('r-05-iso'), post_kw=dict(exposure=-0.9, look='AgX - Medium High Contrast'))
