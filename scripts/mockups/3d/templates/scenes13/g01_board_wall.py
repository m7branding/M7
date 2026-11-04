import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""G01 (round 15) A landscape brand board (16:9 foam board, 800 x 450 mm) hung on a recolourable plaster wall, an oak
sideboard with a plant below it, soft daylight from a window on the left. The board takes a real brand sheet."""
def build():
    SK.env(0.22)
    SK.floor('floor', tex='concrete_floor_01', scale=2.0, size=8, contrast=0.5)
    SK.wall('wall', y=0.0, size=8, h=3.2)
    b = SK.sheet('board', 800, 450, t_mm=5.0, r_mm=0.8, edge=0.96, rough=0.7)
    b.rotation_euler = (math.radians(90), 0, 0); b.location = (0.0, -0.0012, 1.29)
    oak = R.mat_pbr('oak', 'oak_veneer_01', scale=0.8, bump=0.25, sat=0.7, val=1.1)
    SK.block('sideboard', (1.30, 0.40, 0.62), oak, loc=(0.10, -0.205, 0.0))
    pr, pn = R.import_gltf('potted_plant_04/potted_plant_04_2k.gltf', 'plant', loc=(0.62, -0.22, 0.62), rot=(0, 0, 0.6), scale=1.15)
    R.gltf_part(pr, pn, ['plant', 'pot', 'dirt'])
    sun, to_sun = SK.sun_window(az=-128, el=30, strength=3.0, angle=1.6)
    SK.leaf_gobo(to_sun, center=(-0.85, 0.0, 1.2), dist=1.4, scale=0.8)
    SK.lights_soft(target=(0, 0, 1.3), key=(-1.5, -2.2, 2.2), key_power=520, fill_power=200, rim=False)
SK.run('g01_board_wall', build, {
    'a': dict(loc=(0.10, -2.05, 1.18), target=(0.10, 0.0, 1.08), lens=45),
    'b': dict(loc=(-1.05, -1.62, 1.20), target=(0.12, 0.0, 1.15), lens=50),
})
