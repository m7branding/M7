import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
from _float import card
"""F04 iPad Pro on a keyboard folio (site) with two real UI cards lifting off the screen; dark, quiet set."""
def build():
    SK.env(0.12)
    SK.cyc('floor', tex='concrete_wall_006', y=0.75, radius=0.5)
    kb = SK.keyboard_folio('kb', loc=(0, 0, 0))
    ip = R.ipad_pro13('iPad', screen='ipad-home.png', finish='spaceblack', back=True)
    a = math.radians(68); ip.rotation_euler = (a, 0, 0)
    ip.location = (0, 0.095 - 0.1078 * math.cos(a), 0.006 + 0.1078 * math.sin(a))
    T.make_screen(ip, 'ipad', 'tablet')
    X = math.radians(90)
    card('c1', 'snip_1', 'snip_card', (0.13, -0.06, 0.20), (X - math.radians(12), 0, math.radians(-14)), scale=0.9)
    card('c2', 'snip_2', 'snip_bar', (-0.175, -0.13, 0.075), (X - math.radians(6), 0, math.radians(12)), scale=0.85)
    SK.lights_soft(target=(0, 0.05, 0.1), key=(-0.7, -0.6, 0.8), key_power=40, fill_power=8)
SK.run('f04_ipad_float', build, {
    'a': dict(loc=(-0.35, -0.70, 0.36), target=(0.0, 0.0, 0.12), lens=50),
    'b': dict(loc=(0.45, -0.62, 0.24), target=(0.0, 0.0, 0.12), lens=55),
})
