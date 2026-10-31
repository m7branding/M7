import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D13 Macro: MacBook screen corner + keyboard, close and low, on a recolourable desk."""
def build():
    SK.env(0.2)
    SK.floor('floor', tex='concrete_wall_006', scale=1.0, contrast=0.5)
    SK.wall('wall', y=0.6)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=105)
    mbp.rotation_euler.z = math.radians(-12); T.make_screen(mbp, 'mac', 'mac')
    SK.lights_soft(target=(0, 0.05, 0.1), key=(-0.6, -0.5, 0.7), key_power=40, fill_power=10)
SK.run('d13_macro_mac', build, {
    'a': dict(loc=(0.26, -0.24, 0.14), target=(0.06, 0.06, 0.12), lens=50),
    'b': dict(loc=(-0.24, -0.20, 0.06), target=(-0.06, 0.08, 0.10), lens=45),
})
