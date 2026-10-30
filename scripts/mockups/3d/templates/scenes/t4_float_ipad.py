"""T4 Dark floating iPad — iPad Pro tilted, floating above a dark stone pedestal, moody rim light, portrait
composition (ref 16)."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import bpy
import tmpl as T
R = T.R
from mathutils import Vector

NAME = 't4_float_ipad'
PH = 0.36


def build():
    T.world(strength=0.025, color=(1, 1, 1))
    wall = R.mat_paint('wall', R.srgb((20, 20, 22)), rough=0.9, spec=0.2)
    R.sweep('set', width=8, depth=6, height=4, radius=1.2, mat=wall, loc=(0, 1.2, 0))
    stone = R.mat_pbr('ped', 'concrete_wall_006', scale=0.7, sat=0.0, val=0.15, bump=0.2, rough_mul=0.95, box=True)
    ped = R.cylinder('pedestal', 115.0, PH * 1000, segs=160, mat=stone, bevel=3.0)
    ped.location = (0.0, 0.05, 0.0)
    cam = cam_loc()
    ip = R.ipad_pro13('iPad', screen='ipad-home.png', finish='spaceblack', back=True)
    ip.location = (0.0, 0.03, PH + 0.17)
    T.orient_cam(ip, cam, roll=-24, tilt_long=28, tilt_short=-26)
    T.make_screen(ip, 'ipad', 'tablet')
    top = R.area_light('top', (0.0, 0.05, PH + 1.0), (0.0, 0.05, PH), size=(0.35, 0.35), power=22, color=(1.0, 0.97, 0.94))
    top.visible_glossy = False
    edge = [R.area_light('rimR', (0.55, 0.55, PH + 0.45), (0.0, 0.03, PH + 0.2), size=(0.06, 0.7), power=26, color=(0.85, 0.9, 1.0)),
            R.area_light('rimL', (-0.6, 0.4, PH + 0.25), (0.0, 0.03, PH + 0.2), size=(0.06, 0.6), power=16, color=(1.0, 0.92, 0.88))]
    T.edge_lights_skip_screens(edge)
    # charcoal pool of light on the backdrop behind the iPad (backdrop only) -> gradient instead of flat black
    pool = R.area_light('pool', (0.0, 0.35, PH + 0.35), (0.0, 1.2, PH + 0.30), size=(0.5, 0.5), power=28, color=(0.92, 0.94, 1.0))
    T.link_only(pool, [bpy.data.objects['set']])
    # pedestal top-edge rim
    rim = R.area_light('pedRim', (0.0, 0.70, PH + 0.10), (0.0, 0.05, PH), size=(0.6, 0.05), power=3.5, color=(0.9, 0.93, 1.0))
    T.link_only(rim, [ped])
    T.soft_fill((0.0, 0.05, PH * 0.6), power=1.2, loc=(0.3, -1.4, PH + 0.3))
    return dict(ipad=ip)


TARGET = Vector((0.0, 0.04, PH + 0.135))


def cam_loc():
    return T.cam_pos(TARGET, float(os.environ.get('R12_T4D', '0.80')), 12.0, -8.0)


if __name__ == '__main__':
    T.reset()
    w, h, spp = T.res(2000, 2500, 96, scale=float(os.environ.get('R12_SCALE', '0.35')), pv_spp=int(os.environ.get('R12_SPP', '12')))
    T.setup(w, h, samples=spp, threshold=0.02, transparent=False)
    build()
    c = R.camera(cam_loc(), TARGET, lens=60); c.data.sensor_fit = 'VERTICAL'; c.data.sensor_height = 36.0
    T.write_meta(NAME, dict(kind='still', look='AgX - High Contrast'))
    T.render_frame(NAME, 'still' if not T.preview() else 'pv')
