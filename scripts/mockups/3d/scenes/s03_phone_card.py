"""03 — iPhone 17 Pro at an angle with the price calculator 'exploding' out of the screen as an enlarged
UI card (like ref 05 (1)). Also used for video B (v_b_card.py)."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R
from mathutils import Vector, Matrix


def build():
    R.world_hdri('studio_small_09', strength=0.12, rot_z=math.radians(40))
    bgm = R.mat_paint('bg', R.srgb((222, 220, 223)), rough=0.7, spec=0.3)
    R.plane('backwall', 3.0, 3.0, mat=bgm, loc=(0, 0.06, 0), rot=(math.radians(90), 0, 0))
    ph = R.iphone17pro('Phone', screen='iphone-config.png', finish='deepblue')
    # stand the phone up (screen towards -Y), turned a little to the left, floating 5 cm in front of the wall
    ph.rotation_euler = (math.radians(90), 0, math.radians(-16))
    ph.location = (0.032, 0.0, 0.0)
    calc, ch = R.card('calc', os.path.join(R.TEX, 'card-calc.png'), 112.0, thickness=1.6, radius=5.0)
    calc.rotation_euler = (math.radians(90), 0, math.radians(-6))
    calc.location = (-0.040, -0.055, -0.012)
    price, ph_ = R.card('price', os.path.join(R.TEX, 'card-price.png'), 78.0, thickness=1.2, radius=3.0)
    price.rotation_euler = (math.radians(90), 0, math.radians(-10))
    price.location = (-0.036, -0.032, 0.058)
    R.area_light('key', (-0.55, -0.70, 0.55), (0, 0, 0), size=(0.5, 0.5), power=36, color=(1.0, 0.985, 0.97))
    R.area_light('fill', (0.6, -0.6, 0.1), (0, 0, 0), size=(0.8, 0.8), power=8)
    R.area_light('top', (0.0, -0.2, 0.7), (0, 0, 0), size=(0.6, 0.3), power=10)
    return ph, calc, price


if __name__ == '__main__':
    R.reset()
    w, h, spp = R.res(2400, 2000, 64)
    R.setup_render(w, h, samples=spp, threshold=0.01)
    ph, calc, price = build()
    focus = R.empty('focus', (-0.01, -0.034, 0.0))
    R.camera((-0.10, -0.62, 0.05), (0.0, 0.0, 0.0), lens=85, fstop=18.0, focus=focus)
    R.render_still(R.out_name('r-03-phone-card'), post_kw=dict(exposure=-0.6, look='AgX - Medium High Contrast'))
