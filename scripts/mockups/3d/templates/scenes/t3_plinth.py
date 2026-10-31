"""T3 Dark plinth — MacBook Pro 14 (space black) on a dark concrete plinth in a near-black set, soft key
from above-left, cool rim from behind; the screen is the brightest thing in frame (refs 17, 6).
Also the set for animation B (v_b_plinth.py), which adds an iPhone lying on the plinth."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import bpy
import tmpl as T
R = T.R
from mathutils import Vector

NAME = 't3_plinth'
PH = 0.42   # plinth height (m)


def build(phone=False):
    T.world(strength=0.03, color=(1, 1, 1))
    wall = R.mat_paint('wall', R.srgb((22, 22, 24)), rough=0.9, spec=0.2)
    R.sweep('set', width=8, depth=6, height=4, radius=1.2, mat=wall, loc=(0, 1.6, 0))
    conc = R.mat_pbr('plinth', 'concrete_wall_006', scale=0.9, sat=0.0, val=0.20, bump=0.22, rough_mul=1.0, box=True)
    R.box('plinth', (0.62, 0.50, PH), mat=conc, loc=(0.03, 0.08, 0.0), bevel=0.004)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=110)
    mbp.location = (0.0, 0.06, PH + mbp.location.z); mbp.rotation_euler.z = math.radians(-30)
    T.make_screen(mbp, 'mac', 'mac')
    out = dict(mbp=mbp)
    if phone:
        ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
        ph.location = (0.25, -0.10, PH); ph.rotation_euler = (0, 0, math.radians(-28))
        T.make_screen(ph, 'iphone', 'phone_a'); out['phone'] = ph
    key = R.area_light('key', (-0.5, -0.2, PH + 0.9), (0.0, 0.05, PH), size=(0.5, 0.5), power=12, color=(1.0, 0.97, 0.94))
    key.visible_glossy = False
    edge = [R.area_light('rim', (0.55, 0.85, PH + 0.45), (0.0, 0.05, PH + 0.1), size=(0.8, 0.15), power=40, color=(0.85, 0.9, 1.0)),
            R.area_light('rimL', (-0.75, 0.6, PH + 0.30), (0.0, 0.05, PH + 0.08), size=(0.05, 0.6), power=14, color=(0.9, 0.93, 1.0)),
            R.area_light('front', (0.3, -0.9, PH + 0.08), (0.0, 0.0, PH + 0.02), size=(0.9, 0.06), power=10, color=(1, 1, 1))]
    T.edge_lights_skip_screens(edge)
    T.soft_fill((0.0, 0.05, PH - 0.1), power=5.0, loc=(0.2, -1.6, PH + 0.5))
    # plinth edges separate from a near-black page: thin top-edge light from behind on the plinth only
    ed = R.area_light('plinthEdge', (0.0, 0.75, PH + 0.06), (0.0, 0.10, PH), size=(1.2, 0.05), power=4, color=(0.9, 0.93, 1.0))
    T.link_only(ed, [bpy.data.objects['plinth']])
    return out


TARGET = Vector((0.02, 0.03, PH + 0.075))


def camera(az=-12.0, el=17.0, dist=1.0, lens=58):
    return R.camera(T.cam_pos(TARGET, dist, el, az), TARGET, lens=lens)


if __name__ == '__main__':
    T.reset()
    w, h, spp = T.res(2400, 1600, 96, scale=float(os.environ.get('R12_SCALE', '0.35')), pv_spp=int(os.environ.get('R12_SPP', '12')))
    T.setup(w, h, samples=spp, threshold=0.02, transparent=False)
    build(); camera()
    T.write_meta(NAME, dict(kind='still', look='AgX - High Contrast', exposure=0.0))
    T.render_frame(NAME, 'still' if not T.preview() else 'pv')
