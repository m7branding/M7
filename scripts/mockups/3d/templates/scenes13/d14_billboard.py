import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D14 A large screen on a recolourable concrete wall in an architectural space (pillars, floor), low angle."""
def build():
    SK.env(0.15)
    SK.floor('floor', tex='concrete_floor_01', scale=3.0, size=30, contrast=0.6)
    wm = T.tint_material('wall', tex='concrete_wall_006', scale=2.5, contrast=0.7)
    R.plane('wall', 30, 12, mat=wm, loc=(0, 6.0, 6.0), rot=(math.radians(90), 0, 0))
    pm = T.tint_material('pillars', tex='concrete_wall_006', scale=2.0, contrast=0.6)
    for x in (-5.5, 5.5):
        SK.block(f'pillar{x}', (0.8, 0.8, 7.0), pm, loc=(x, 4.0, 0))
    frame_m = R.mat_paint('bezel', (0.01, 0.01, 0.012), rough=0.4)
    W, H = 6.4, 3.6
    fr = R.slab('bezel', W * 1000 + 80, H * 1000 + 80, 20, [(0, 0), (0, 60)], mats=[frame_m] * 3, n=4, continuous=False)
    fr.rotation_euler = (math.radians(90), 0, 0); fr.location = (0, 5.95, 3.4)
    scr = R.plane('screen', W, H, loc=(0, 5.88, 3.4), rot=(math.radians(90), 0, 0))
    T.make_flat_screen(scr, 'billboard', 'billboard', (2880, 1620), radius=0.0)
    k = R.area_light('key', (-6, -4, 8), (0, 5, 2), size=(4, 4), power=6000); k.visible_glossy = False
    R.area_light('fill', (6, -6, 3), (0, 5, 2), size=(5, 5), power=1500).visible_glossy = False
SK.run('d14_billboard', build, {
    'a': dict(loc=(-1.8, -3.2, 1.4), target=(0.0, 5.0, 3.1), lens=30),
    'b': dict(loc=(2.6, -1.2, 1.1), target=(0.0, 5.5, 3.2), lens=26),
    'c': dict(loc=(0.4, -5.5, 1.6), target=(0.0, 5.0, 3.2), lens=35),
})
