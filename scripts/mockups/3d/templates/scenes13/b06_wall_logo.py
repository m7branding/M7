import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B06 Raised logo on a plaster wall (the wall is a print surface: wall colour + logo relief + baked shadow),
recolourable floor, raking light from the left."""
def build():
    SK.env(0.10)
    SK.floor('floor', tex='concrete_floor_01', scale=2.0, size=8, contrast=0.5)
    m = T.print_material('wall_logo', 2000, 1300, rough=0.9, spec=0.2, light=(-0.8, -0.45), emboss=1.0)
    R.plane('wall_bg', 8, 3.2, mat=T.tint_material('wall_bg', rough=0.9, spec=0.2), loc=(0, 0.002, 1.6), rot=(math.radians(90), 0, 0))
    w = R.plane('wall_logo', 2.0, 1.3, mat=m, loc=(0.0, 0.0, 1.35), rot=(math.radians(90), 0, 0))
    k = SK.lights_raking(target=(0, 0, 1.35), from_dir=(-1.0, -0.35), height=0.9, dist=1.6, power=900, size=(0.4, 2.0))
    R.area_light('fill', (0.8, -3.0, 1.4), (0, 0, 1.3), size=(2.0, 2.0), power=90).visible_glossy = False
SK.run('b06_wall_logo', build, {
    'a': dict(loc=(0.25, -3.4, 1.25), target=(0.0, 0.0, 1.30), lens=50),
    'b': dict(loc=(1.9, -2.3, 1.20), target=(-0.05, 0.0, 1.35), lens=55),
    'c': dict(loc=(-0.55, -1.55, 1.42), target=(0.05, 0.0, 1.36), lens=60),
})
