import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B03 Framed poster on a recolourable plaster wall, a succulent on a low bench, soft daylight."""
def build():
    SK.env(0.22)
    SK.floor('floor', tex='concrete_floor_01', scale=2.0, size=8, contrast=0.5)
    SK.wall('wall', y=0.0, size=8, h=3.2)
    fr = SK.frame('poster', 500, 700, border=16, depth=26, mount=55)
    fr.rotation_euler = (math.radians(90), 0, 0); fr.location = (0.0, -0.001, 1.45)
    oak = R.mat_pbr('oak', 'oak_veneer_01', scale=0.8, bump=0.25, sat=0.7, val=1.1)
    SK.block('bench', (1.1, 0.32, 0.42), oak, loc=(0.55, -0.22, 0.0))
    pr, pn = R.import_gltf('potted_plant_04/potted_plant_04_2k.gltf', 'succulent', loc=(0.80, -0.22, 0.42), rot=(0, 0, 0.6), scale=1.4)
    R.gltf_part(pr, pn, ['plant', 'pot', 'dirt'])
    sun, to_sun = SK.sun_window(az=-128, el=30, strength=3.5, angle=1.2)
    SK.leaf_gobo(to_sun, center=(-0.5, 0.0, 1.3), dist=1.4, scale=0.9)
    SK.lights_soft(target=(0, 0, 1.2), key=(-1.5, -2.0, 2.2), key_power=500, fill_power=180, rim=False)
SK.run('b03_poster_wall', build, {
    'a': dict(loc=(0.20, -2.5, 1.30), target=(0.22, 0.0, 1.18), lens=45),
    'b': dict(loc=(-1.25, -1.9, 1.20), target=(0.12, 0.0, 1.40), lens=46),
})
