import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B07 A-frame sign (two printed boards) on a concrete floor in front of a recolourable wall."""
def build():
    SK.env(0.22)
    SK.floor('floor', tex='concrete_floor_01', scale=2.5, size=10, contrast=0.6)
    SK.wall('wall', y=1.1, size=10, h=4)
    alu = R.mat_alu('aframe_alu', R.srgb((40, 40, 42)), 0.4, aniso=0.0)
    for side in (1, -1):
        b = SK.sheet('aframe', 600, 840, t_mm=6, r_mm=4, edge=0.3)
        b.data.materials[0] = alu
        b.rotation_euler = (math.radians(76), 0, 0 if side == 1 else math.radians(180))
        b.location = (0, -side * 0.1016, 0.4075)
    SK.lights_soft(target=(0, 0, 0.45), key=(-1.5, -1.8, 2.0), key_power=500, fill_power=150)
SK.run('b07_aframe', build, {
    'a': dict(loc=(0.6, -2.4, 0.85), target=(0.0, 0.0, 0.42), lens=50),
    'b': dict(loc=(-1.2, -1.6, 0.35), target=(0.0, 0.0, 0.46), lens=45),
})
