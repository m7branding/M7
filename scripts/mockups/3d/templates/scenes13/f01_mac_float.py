import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
from _float import card
"""F01 MacBook Pro (site) with three real UI cards floating out of the screen towards the camera."""
def build():
    SK.env(0.22)
    SK.cyc('floor', y=0.7, radius=0.5)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=112)
    mbp.rotation_euler.z = math.radians(-8); T.make_screen(mbp, 'mac', 'mac')
    X = math.radians(90)
    card('c1', 'snip_1', 'snip_wide', (-0.135, -0.11, 0.205), (X - math.radians(6), 0, math.radians(14)))
    card('c2', 'snip_2', 'snip_card', (0.155, -0.16, 0.135), (X - math.radians(4), 0, math.radians(-12)))
    card('c3', 'snip_3', 'snip_bar', (0.02, -0.21, 0.30), (X - math.radians(10), 0, math.radians(3)), scale=0.9)
    SK.lights_soft(target=(0, 0, 0.12), key=(-0.8, -0.9, 1.0), key_power=60, fill_power=18, top_power=20)
SK.run('f01_mac_float', build, {
    'a': dict(loc=(0.18, -1.05, 0.42), target=(0.0, 0.0, 0.15), lens=48),
    'b': dict(loc=(-0.55, -0.85, 0.30), target=(0.0, -0.03, 0.15), lens=50),
})
