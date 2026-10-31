import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D17 Two iPads leaning against a recolourable wall, overlapping, on the floor."""
def build():
    SK.env(0.22)
    SK.floor('floor', tex='concrete_wall_006', scale=1.2, contrast=0.5)
    SK.wall('wall', y=0.20)
    for i, (x, y, lean, rz, role) in enumerate([(-0.10, 0.17, 14, 4, 'tablet'), (0.12, 0.10, 18, -6, 'tablet_c')]):
        ip = R.ipad_pro13(f'iPad{i}', screen='ipad-home.png', finish='spaceblack', back=True)
        a = math.radians(90 - lean)
        ip.rotation_euler = (a, 0, math.radians(rz))
        ip.location = (x, y - 0.1078 * math.cos(a) - 0.006, 0.1078 * math.sin(a))
        T.make_screen(ip, 'ipad', role)
    SK.lights_soft(target=(0, 0.1, 0.1), key=(-0.9, -0.7, 0.9), key_power=60, fill_power=14)
SK.run('d17_ipads_lean', build, {
    'a': dict(loc=(0.15, -0.95, 0.30), target=(0.0, 0.08, 0.11), lens=50),
    'b': dict(loc=(-0.55, -0.55, 0.18), target=(0.0, 0.08, 0.12), lens=55),
    'c': dict(loc=(0.60, -0.62, 0.22), target=(0.0, 0.08, 0.12), lens=55),
})
