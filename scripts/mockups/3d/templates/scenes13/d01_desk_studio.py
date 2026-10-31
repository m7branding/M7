import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D01 Studio Display + MacBook + iPhone on a light oak desk against a recolourable plaster wall, window light."""
def build():
    SK.env(0.25)
    oak = R.mat_pbr('oak', 'oak_veneer_01', scale=1.1, bump=0.25, sat=0.75, val=1.15, rot=math.radians(90))
    R.box('desk', (2.4, 1.1, 0.03), mat=oak, loc=(0, -0.2, -0.03), bevel=0.003)
    SK.wall('wall', y=0.42)
    sd = R.studio_display('Studio', screen='studio-home.png', finish='silver', tilt_deg=4)
    sd.location = (-0.06, 0.20, 0); T.make_screen(sd, 'studio', 'studio')
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=110)
    mbp.location = (0.40, -0.10, mbp.location.z); mbp.rotation_euler.z = math.radians(-24); T.make_screen(mbp, 'mac', 'mac_b')
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.location = (-0.02, -0.20, 0); ph.rotation_euler.z = math.radians(-10); T.make_screen(ph, 'iphone', 'phone_a')
    sun, to_sun = SK.sun_window(az=-125, el=34, strength=5.0, angle=1.0)
    SK.leaf_gobo(to_sun, center=(-0.2, 0.42, 0.45), dist=0.9, scale=0.7)
    SK.lights_soft(target=(0, 0, 0.2), key=(-1.2, -0.6, 0.9), key_power=60, fill_power=20)
SK.run('d01_desk_studio', build, {
    'a': dict(loc=(0.10, -1.30, 0.40), target=(0.06, 0.06, 0.21), lens=44),
    'b': dict(loc=(-0.55, -0.85, 0.32), target=(-0.02, 0.15, 0.25), lens=55),
    'p': dict(loc=(-0.04, -1.15, 0.55), target=(-0.03, 0.10, 0.28), lens=21, w=1440, h=2560, vertical=True),
})
