import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D08 iPad Pro (portrait) in an aluminium stand on a desk in front of a recolourable wall."""
def build():
    SK.env(0.25)
    SK.floor('floor', tex='white_plaster_02', scale=1.0, contrast=0.4)
    SK.wall('wall', y=0.32)
    root, holder = SK.ipad_stand(loc=(0, 0, 0), angle=72)
    ip = R.ipad_pro13('iPad', screen='ipad-home.png', finish='spaceblack', back=False)
    R.parent(ip, holder, keep=False); ip.rotation_euler = (0, 0, math.radians(90)); ip.location = (0, 0.1076, 0.006)
    T.make_screen(ip, 'ipad', 'tablet_p')
    SK.lights_soft(target=(0, 0, 0.14), key=(-0.8, -0.8, 0.9), key_power=60, fill_power=16)
SK.run('d08_ipad_stand', build, {
    'a': dict(loc=(0.36, -0.95, 0.34), target=(0.0, 0.0, 0.125), lens=55),
    'b': dict(loc=(-0.14, -0.78, 0.17), target=(0.0, 0.0, 0.13), lens=50),
    'c': dict(loc=(-0.42, -0.78, 0.42), target=(0.0, 0.0, 0.12), lens=60),
})
