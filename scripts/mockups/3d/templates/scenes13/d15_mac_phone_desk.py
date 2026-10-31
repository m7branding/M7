import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D15 MacBook 3/4 + iPhone on a walnut desk in front of a recolourable wall, soft side light."""
def build():
    SK.env(0.2)
    wal = R.mat_pbr('walnut', 'oak_veneer_03', scale=1.0, bump=0.25, sat=0.8, val=0.55, rot=math.radians(90))
    R.box('desk', (2.4, 1.1, 0.03), mat=wal, loc=(0, -0.15, -0.03), bevel=0.003)
    SK.wall('wall', y=0.38)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=112)
    mbp.location = (0.02, 0.06, mbp.location.z); mbp.rotation_euler.z = math.radians(22); T.make_screen(mbp, 'mac', 'mac')
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.location = (-0.24, -0.12, 0); ph.rotation_euler.z = math.radians(14); T.make_screen(ph, 'iphone', 'phone_b')
    SK.lights_soft(target=(0, 0, 0.1), key=(-1.0, -0.3, 0.7), key_power=55, fill_power=14)
SK.run('d15_mac_phone_desk', build, {
    'a': dict(loc=(-0.30, -0.95, 0.38), target=(-0.02, 0.02, 0.10), lens=50),
    'b': dict(loc=(0.55, -0.70, 0.20), target=(0.0, 0.05, 0.12), lens=60),
    'c': dict(loc=(0.05, -0.58, 0.72), target=(0.0, 0.05, 0.05), lens=50),
})
