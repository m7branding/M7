import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D10 Four iPads in a 2x2 grid seen isometrically (orthographic) on a recolourable floor."""
def build():
    SK.env(0.3)
    SK.floor('floor', tex=None)
    for i, (x, y, role) in enumerate([(-0.16, 0.12, 'tablet'), (0.16, 0.12, 'tablet_b'), (-0.16, -0.12, 'tablet_c'), (0.16, -0.12, 'tablet_d')]):
        ip = R.ipad_pro13(f'iPad{i}', screen='ipad-home.png', finish='spaceblack', back=False)
        ip.location = (x, y, 0); T.make_screen(ip, 'ipad', role)
    SK.lights_soft(target=(0, 0, 0), key=(-0.8, -0.4, 1.4), key_power=70, fill_power=16, rim=False, top_power=40)
d = 2.6
SK.run('d10_tablets_iso', build, {
    'a': dict(loc=(d * 0.55, -d * 0.55, d * 0.62), target=(0, 0, 0), lens=50, ortho=0.85),
    'b': dict(loc=(-d * 0.6, -d * 0.45, d * 0.66), target=(0, 0, 0), lens=50, ortho=0.62),
    'c': dict(loc=(d * 0.06, -d * 0.22, d * 0.97), target=(0, 0, 0), lens=50, ortho=0.72),
})
