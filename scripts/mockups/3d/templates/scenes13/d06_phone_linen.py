import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D06 iPhone lying on recolourable linen, soft window light with leaf shadows."""
def build():
    SK.env(0.25)
    SK.floor('floor', tex='rough_linen', scale=0.25, bump=0.6, contrast=0.8)
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.rotation_euler.z = math.radians(-24); T.make_screen(ph, 'iphone', 'phone_a')
    ph2 = R.iphone17pro('Phone2', screen='iphone-home.png', finish='spaceblack')
    ph2.location = (0.10, 0.06, 0); ph2.rotation_euler = (0, math.radians(180), math.radians(-24 + 180 - 8))
    ph2.location.z = 0.00875
    sun, to_sun = SK.sun_window(az=-140, el=42, strength=4.5, angle=1.5)
    SK.leaf_gobo(to_sun, center=(0.12, 0.1, 0.0), dist=0.5, scale=0.45)
    SK.lights_soft(target=(0, 0, 0), key=(-0.5, -0.4, 1.0), key_power=20, fill_power=8, rim=False)
SK.run('d06_phone_linen', build, {
    'a': dict(loc=(0.03, -0.02, 0.48), target=(0.03, 0.02, 0.0), lens=50),
    'b': dict(loc=(-0.22, -0.30, 0.20), target=(0.02, 0.0, 0.0), lens=62),
})
