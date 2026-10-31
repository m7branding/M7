import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D04 Three iPhone 17 Pro standing in a row on a recolourable sweep."""
def build():
    SK.env(0.25)
    SK.cyc('floor', y=0.35, radius=0.35)
    for i, (x, rz, role) in enumerate([(-0.085, 14, 'phone_b'), (0.0, 0, 'phone_a'), (0.085, -14, 'phone_c')]):
        ph = R.iphone17pro(f'Phone{i}', screen='iphone-home.png', finish='spaceblack')
        ph.rotation_euler = (math.radians(90 - 6), 0, math.radians(rz)); ph.location = (x, 0.03 * abs(i - 1), 0.0746)
        T.make_screen(ph, 'iphone', role)
    SK.lights_soft(target=(0, 0, 0.07), key=(-0.7, -0.6, 0.7), key_power=40, fill_power=12)
SK.run('d04_phone_trio', build, {
    'a': dict(loc=(0.0, -0.55, 0.09), target=(0.0, 0.0, 0.075), lens=60),
    'b': dict(loc=(-0.30, -0.42, 0.26), target=(0.0, 0.01, 0.07), lens=62),
})
