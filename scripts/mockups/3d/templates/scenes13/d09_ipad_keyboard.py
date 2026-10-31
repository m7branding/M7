import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D09 iPad Pro on a keyboard folio (laptop pose) on a recolourable desk, dark mood."""
def build():
    SK.env(0.10)
    SK.cyc('floor', tex='concrete_wall_006', y=0.75, radius=0.5, width=20.0)       # sweep: no horizon in the low camera
    kb = SK.keyboard_folio('kb', loc=(0, 0, 0))
    ip = R.ipad_pro13('iPad', screen='ipad-home.png', finish='spaceblack', back=True)
    a = math.radians(68)
    ip.rotation_euler = (a, 0, 0)
    ip.location = (0, 0.105 - 0.0051 * math.sin(a), 0.006 + 0.0)
    # put the iPad's lower edge on the back of the keyboard: origin at the back plane centre
    ip.location = (0, 0.095 + 0.1078 * math.cos(a) * 0 + 0.0, 0.006 + 0.1078 * math.sin(a))
    ip.location.y = 0.095 - 0.1078 * math.cos(a)
    T.make_screen(ip, 'ipad', 'tablet')
    SK.lights_soft(target=(0, 0.05, 0.1), key=(-0.7, -0.6, 0.8), key_power=40, fill_power=8)
SK.run('d09_ipad_keyboard', build, {
    'a': dict(loc=(-0.40, -0.62, 0.36), target=(0.0, 0.03, 0.10), lens=55),
    'b': dict(loc=(0.55, -0.35, 0.16), target=(0.0, 0.04, 0.11), lens=60),
    'c': dict(loc=(0.06, -0.85, 0.24), target=(0.0, 0.03, 0.11), lens=65),
})
