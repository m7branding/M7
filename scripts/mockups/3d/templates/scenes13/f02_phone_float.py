import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
from _float import card
"""F02 iPhone standing on a small plinth, three real UI cards floating out of its screen at different depths."""
def build():
    SK.env(0.22)
    SK.cyc('floor', y=0.5, radius=0.4)
    blk = T.tint_material('plinth', tex='concrete_wall_006', scale=0.4, contrast=0.8)
    SK.block('plinth', (0.12, 0.12, 0.03), blk, loc=(0.0, 0.0, 0.0))
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.rotation_euler = (math.radians(90), 0, math.radians(-10)); ph.location = (0.0, 0.004, 0.03 + 0.0747)
    T.make_screen(ph, 'iphone', 'phone_a')
    X = math.radians(90)
    card('c1', 'snip_1', 'snip_card', (-0.085, -0.05, 0.15), (X, 0, math.radians(16)), scale=0.85)
    card('c2', 'snip_2', 'snip_bar', (0.08, -0.09, 0.115), (X, 0, math.radians(-14)), scale=0.8)
    card('c3', 'snip_3', 'snip_sq', (0.075, -0.035, 0.205), (X, 0, math.radians(-8)), scale=0.7)
    SK.lights_soft(target=(0, 0, 0.12), key=(-0.7, -0.8, 0.8), key_power=40, fill_power=12, top_power=15)
SK.run('f02_phone_float', build, {
    'a': dict(loc=(0.12, -0.70, 0.22), target=(0.0, -0.03, 0.13), lens=55),
    'b': dict(loc=(-0.40, -0.55, 0.30), target=(0.0, -0.03, 0.13), lens=55),
})
