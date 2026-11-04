import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B13 iPhone held upright on a small stand showing a grid of social posts (role 'social'), + a second phone
showing the site; recolourable sweep."""
def build():
    SK.env(0.2)
    SK.cyc('floor', y=0.5, radius=0.4)
    a = R.iphone17pro('PhoneA', screen='iphone-home.png', finish='spaceblack')
    a.rotation_euler = (math.radians(90 - 10), 0, math.radians(10)); a.location = (-0.045, 0.0, 0.0738)
    T.make_screen(a, 'iphone', 'social')
    b = R.iphone17pro('PhoneB', screen='iphone-home.png', finish='spaceblack')
    b.rotation_euler = (math.radians(90 - 10), 0, math.radians(-16)); b.location = (0.06, 0.04, 0.0738)
    T.make_screen(b, 'iphone', 'phone_a')
    SK.lights_soft(target=(0, 0, 0.07), key=(-0.7, -0.6, 0.7), key_power=40, fill_power=12)
SK.run('b13_social_phone', build, {
    'a': dict(loc=(0.0, -0.52, 0.12), target=(0.0, 0.0, 0.075), lens=58),
    'b': dict(loc=(-0.32, -0.40, 0.24), target=(0.0, 0.0, 0.07), lens=62),
})
