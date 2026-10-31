import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D03 Flatlay: MacBook open (site), iPad and iPhone on a recolourable surface, top-down and low angle."""
def build():
    SK.env(0.3)
    SK.floor('floor', tex='white_plaster_02', scale=0.8, contrast=0.5, size=20.0)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=122); T.make_screen(mbp, 'mac', 'mac')
    mbp.location = (-0.17, 0.09, mbp.location.z); mbp.rotation_euler.z = math.radians(-6)
    ip = R.ipad_pro13('iPad', screen='ipad-home.png', finish='spaceblack', back=False)
    ip.location = (0.155, -0.10, 0.0); ip.rotation_euler.z = math.radians(5); T.make_screen(ip, 'ipad', 'tablet')
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.location = (-0.07, -0.18, 0); ph.rotation_euler.z = math.radians(-12); T.make_screen(ph, 'iphone', 'phone_a')
    pen = R.pencil_pro('Pencil'); pen.location = (0.33, 0.02, 0); pen.rotation_euler.z = math.radians(96)
    SK.lights_soft(target=(0, 0, 0), key=(-0.9, 0.5, 1.3), key_power=60, fill_power=14, rim=False, top_power=25)
SK.run('d03_flatlay', build, {
    'a': dict(loc=(0.0, 0.03, 1.25), target=(0.0, 0.06, 0.0), lens=42),
    'b': dict(loc=(0.48, -0.80, 0.36), target=(0.0, 0.02, 0.04), lens=50),
    'p': dict(loc=(0.0, 0.035, 1.35), target=(0.0, 0.06, 0.0), lens=25, w=1440, h=2560, vertical=True),
})
