"""01 — Realistic desk scene: Studio Display + MacBook Pro 14 + iPhone 17 Pro on a light oak desk,
succulent, soft daylight with leaf shadows (out-of-frame plant as gobo), shallow depth of field.
Also builds the set for video A (see v_a_desk.py)."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R
from mathutils import Vector


def build(sun=True):
    R.world_hdri('white_home_studio', strength=0.26, rot_z=math.radians(200), sat=0.6)
    # desk + wall
    oak = R.mat_pbr('oak', 'oak_veneer_01', scale=1.1, rough_mul=1.0, bump=0.25, sat=0.75, val=1.18, rot=math.radians(90))
    desk = R.box('desk', (3.0, 2.2, 0.03), mat=oak, loc=(0, -0.55, -0.03), bevel=0.003)
    wall = R.mat_paint('wall', R.srgb((226, 221, 213)), rough=0.85, spec=0.3)
    R.plane('wall', 4.0, 2.0, mat=wall, loc=(0, 0.52, 0.8), rot=(math.radians(90), 0, 0))
    # devices
    sd = R.studio_display('Studio', screen='studio-home.png', finish='silver', tilt_deg=4)
    sd.location = (-0.12, 0.27, 0); sd.rotation_euler.z = math.radians(4)
    mbp = R.macbook_pro14('MBP', screen='mbp-shop.png', finish='spaceblack', open_deg=110)
    mbp.location = (0.36, -0.06, mbp.location.z); mbp.rotation_euler.z = math.radians(-24)
    ph = R.iphone17pro('Phone', screen='iphone-config.png', finish='deepblue')
    ph.location = (-0.05, -0.19, 0.0); ph.rotation_euler = (0, 0, math.radians(-9))
    # succulent in a white pot (back right) + ceramic planter (left)
    pr, pn = R.import_gltf('potted_plant_04/potted_plant_04_2k.gltf', 'succulent', loc=(0.47, 0.30, 0.0), rot=(0, 0, 0.6), scale=0.9)
    R.gltf_part(pr, pn, ['plant', 'pot', 'dirt'])
    # out-of-frame pachira as gobo for leaf shadows on wall + desk
    gr, gn = R.import_gltf('pachira_aquatica_01/pachira_aquatica_01_2k.gltf', 'gobo')
    gn = R.gltf_part(gr, gn, ['_a'])
    gr.rotation_euler = (0, 0, math.radians(-30)); gr.scale = (0.7, 0.7, 0.7)
    sun_eul, to_sun = R.sun_dir(-122, 33)
    leaves = [o for o in gn if 'leaves' in o.name]
    R.place_center(gr, leaves, Vector((-0.20, 0.42, 0.50)) + to_sun * 0.95)
    R.set_visibility(gr, camera=False, glossy=False, diffuse=True, shadow=True)
    # foreground leaves (out of focus, framing bottom-left)
    fr, fn = R.import_gltf('potted_plant_02/potted_plant_02_2k.gltf', 'fgplant')
    R.gltf_part(fr, fn, ['leaves'])
    fr.rotation_euler = (0, 0, math.radians(35))
    R.place_center(fr, fn, (-0.47, -0.80, 0.20))
    if sun:
        R.sun_light('sun', sun_eul, strength=8.0, angle=0.5, color=(1.0, 0.92, 0.82))
    # window fill (left) + soft top bounce
    R.area_light('window', (-1.6, -0.2, 0.9), (0.0, 0.1, 0.2), size=(1.6, 1.2), power=120, color=(0.93, 0.96, 1.0))
    R.area_light('fill', (0.6, -1.6, 0.9), (0.1, 0.1, 0.15), size=(1.4, 1.0), power=35, color=(1.0, 0.98, 0.96))
    return dict(sd=sd, mbp=mbp, ph=ph)


if __name__ == '__main__':
    R.reset()
    w, h, spp = R.res(2400, 1500, 96)
    R.setup_render(w, h, samples=spp, threshold=0.012)
    objs = build()
    focus = R.empty('focus', (0.30, -0.02, 0.12))
    R.camera((0.10, -1.30, 0.38), (0.08, 0.06, 0.205), lens=46, fstop=3.5, focus=focus)
    R.render_still(R.out_name('r-01-desk'), post_kw=dict(exposure=0.0, look='AgX - Medium High Contrast', vignette=0.10))
