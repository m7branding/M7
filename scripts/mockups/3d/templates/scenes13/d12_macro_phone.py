import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D12 Macro: camera very close along the edge of an iPhone lying on a recolourable surface (no DOF on screens)."""
def build():
    SK.env(0.2)
    SK.floor('floor', tex='concrete_wall_006', scale=0.6, contrast=0.6)
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.rotation_euler.z = math.radians(-30); T.make_screen(ph, 'iphone', 'phone_a')
    SK.lights_soft(target=(0, 0, 0.0), key=(-0.4, -0.5, 0.7), key_power=30, fill_power=8, rim=True)
SK.run('d12_macro_phone', build, {
    'a': dict(loc=(-0.09, -0.115, 0.075), target=(0.012, 0.012, 0.004), lens=50),
    'b': dict(loc=(0.11, -0.05, 0.05), target=(-0.005, 0.03, 0.006), lens=60),
})
