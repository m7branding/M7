"""T1 Gravity — two iPhone 17 Pro + an iPad Pro floating, tilted at bold angles over a pastel brand-colour
background (transparent film + shadow catcher; the background colour is composited per project)."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import bpy
import tmpl as T
R = T.R
from mathutils import Vector

NAME = 't1_gravity'


TARGET = (0.035, 0.05, 0.125)
CAM = dict(dist=0.86, el=40.0, az=-14.0, lens=62.0)


def cam_loc():
    return T.cam_pos(TARGET, CAM['dist'], CAM['el'], CAM['az'])


def build(cam=None):
    """Devices tumbling in 3D; positions/rotations relative to the camera so the side frames show."""
    cam = cam or cam_loc()
    T.world(strength=0.22, color=(1, 1, 1))
    catcher = R.plane('catcher', 8, 8, mat=R.mat_paint('floor', (0.8, 0.8, 0.8), rough=0.9), loc=(0, 0, 0))
    catcher.is_shadow_catcher = True
    ip = R.ipad_pro13('iPad', screen='ipad-home.png', finish='spaceblack', back=True)
    ip.location = (0.120, 0.130, 0.205)
    T.orient_cam(ip, cam, roll=-28, tilt_long=-36, tilt_short=22)
    pa = R.iphone17pro('PhoneA', screen='iphone-home.png', finish='spaceblack')
    pa.location = (-0.100, -0.040, 0.180)
    T.orient_cam(pa, cam, roll=-34, tilt_long=42, tilt_short=-18)
    pb = R.iphone17pro('PhoneB', screen='iphone-home.png', finish='spaceblack')
    pb.location = (0.050, -0.045, 0.075)
    T.orient_cam(pb, cam, roll=58, tilt_long=-30, tilt_short=48)
    T.make_screen(ip, 'ipad', 'tablet'); T.make_screen(pa, 'iphone', 'phone_a'); T.make_screen(pb, 'iphone', 'phone_b')
    # soft top light (visible floor shadows well below), key from the front-left, rim + strip for the frames
    top = R.area_light('top', (0.05, 0.05, 1.5), (0, 0, 0), size=(0.7, 0.7), power=230, color=(1.0, 1.0, 1.0))
    key = R.area_light('key', (-0.9, -0.7, 1.0), (0, 0, 0.25), size=(0.7, 0.7), power=55, color=(1.0, 0.98, 0.96))
    top.visible_glossy = False; key.visible_glossy = False   # no big softbox mirrored in the screens
    edge = [R.area_light('rim', (0.8, 0.9, 0.6), (0, 0, 0.25), size=(0.6, 0.25), power=40, color=(1, 1, 1)),
            R.area_light('strip', (0.9, -0.5, 0.45), (0, 0, 0.25), size=(0.05, 0.8), power=22, color=(1, 1, 1)),
            R.area_light('stripL', (-0.8, 0.3, 0.35), (0, 0, 0.25), size=(0.05, 0.8), power=14, color=(1, 1, 1))]
    T.edge_lights_skip_screens(edge)
    return dict(ipad=ip, a=pa, b=pb)


def camera(loc=None):
    return R.camera(loc or cam_loc(), TARGET, lens=CAM['lens'])


if __name__ == '__main__':
    T.reset()
    w, h, spp = T.res(2400, 1600, 96, scale=float(os.environ.get('R12_SCALE', '0.35')), pv_spp=int(os.environ.get('R12_SPP', '12')))
    T.setup(w, h, samples=spp, threshold=0.02, transparent=True)
    build(); camera()
    T.write_meta(NAME, dict(kind='still'))
    T.render_frame(NAME, 'still' if not T.preview() else 'pv')
