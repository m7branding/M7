import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B11 Business cards + iPhone (site) flatlay on a recolourable stone surface."""
def build():
    SK.env(0.22)
    SK.floor('floor', tex='concrete_floor_01', scale=0.7, contrast=0.6)
    SK.card_stack('card_front', n=9, loc=(0.08, 0.06, 0), rot_z=math.radians(12))
    SK.sheet('card_back', 85, 55, t_mm=0.45, r_mm=0.6, loc=(0.12, -0.06, 0), rot_z=math.radians(-8))
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.location = (-0.07, -0.01, 0); ph.rotation_euler.z = math.radians(-8); T.make_screen(ph, 'iphone', 'phone_a')
    SK.lights_soft(target=(0, 0, 0), key=(-0.6, 0.3, 1.0), key_power=40, fill_power=10, rim=False, top_power=18)
SK.run('b11_cards_phone', build, {
    'a': dict(loc=(0.02, -0.03, 0.55), target=(0.02, 0.0, 0.0), lens=45),
    'b': dict(loc=(0.30, -0.40, 0.22), target=(0.02, 0.0, 0.0), lens=55),
})
