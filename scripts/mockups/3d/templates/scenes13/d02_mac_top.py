import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D02 MacBook open, seen from above on a recolourable stone surface, iPhone + Pencil beside it."""
def build():
    SK.env(0.3)
    SK.floor('floor', tex='concrete_wall_006', scale=1.0)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=128)
    mbp.rotation_euler.z = math.radians(8); T.make_screen(mbp, 'mac', 'mac')
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.location = (0.235, -0.07, 0); ph.rotation_euler.z = math.radians(16); T.make_screen(ph, 'iphone', 'phone_a')
    SK.lights_soft(target=(0, 0, 0), key=(-0.7, 0.3, 1.2), key_power=55, fill_power=14, rim=False, top_power=30)
SK.run('d02_mac_top', build, {
    'a': dict(loc=(0.03, -0.12, 0.95), target=(0.03, 0.02, 0.0), lens=45),
    'b': dict(loc=(-0.28, -0.62, 0.55), target=(0.03, 0.04, 0.06), lens=50),
})
