"""T5 iPads on dark — three iPad Pro (landscape) lying on a dark matte surface, seen from above at a slight
angle; centre one complete, the side ones cut by the frame (ref 13). Different pages per iPad."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import bpy
import tmpl as T
R = T.R
from mathutils import Vector

NAME = 't5_ipads_dark'


def build():
    T.world(strength=0.03, color=(1, 1, 1))
    surf = R.mat_pbr('surface', 'concrete_wall_006', scale=1.6, sat=0.0, val=0.10, bump=0.25, rough_mul=1.05)
    R.box('surface', (3.0, 3.0, 0.03), mat=surf, loc=(0, 0, -0.03))
    D = 0.0051
    spec = [('iPadC', 'tablet', (0.0, 0.0), 0.0), ('iPadL', 'tablet_b', (-0.305, -0.050), 0.0), ('iPadR', 'tablet_c', (0.305, 0.050), 0.0)]
    out = {}
    for nm, role, (x, y), rz in spec:
        ip = R.ipad_pro13(nm, screen='ipad-home.png', finish='spaceblack', back=False)
        ip.location = (x, y, 0.0); ip.rotation_euler.z = math.radians(rz)
        T.make_screen(ip, 'ipad', role); out[role] = ip
    top = R.area_light('top', (0.0, 0.25, 1.4), (0, 0, 0), size=(1.2, 0.8), power=55, color=(1.0, 0.98, 0.96))
    top.visible_glossy = False
    edge = [R.area_light('rimB', (0.0, 0.9, 0.35), (0, 0, 0), size=(1.6, 0.08), power=30, color=(0.88, 0.92, 1.0)),
            R.area_light('rimF', (0.2, -0.9, 0.25), (0, 0, 0), size=(1.6, 0.08), power=10, color=(1.0, 0.95, 0.92))]
    T.edge_lights_skip_screens(edge)
    T.soft_fill((0, 0, 0), power=5.0, loc=(0.0, -1.2, 1.3))
    return out


TARGET = Vector((0.0, 0.0, 0.0))


def cam_loc():
    return T.cam_pos(TARGET, 0.92, 64.0, -6.0)


if __name__ == '__main__':
    T.reset()
    w, h, spp = T.res(2400, 1600, 80, scale=float(os.environ.get('R12_SCALE', '0.35')), pv_spp=int(os.environ.get('R12_SPP', '12')))
    T.setup(w, h, samples=spp, threshold=0.02, transparent=False)
    build()
    R.camera(cam_loc(), TARGET, lens=50)
    T.write_meta(NAME, dict(kind='still', look='AgX - High Contrast'))
    T.render_frame(NAME, 'still' if not T.preview() else 'pv')
