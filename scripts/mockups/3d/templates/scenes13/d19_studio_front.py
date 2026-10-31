import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D19 Studio Display straight on, clean, on a recolourable desk + wall (like a product shot)."""
def build():
    SK.env(0.25)
    SK.floor('floor', tex='white_plaster_02', scale=1.4, contrast=0.4)
    SK.wall('wall', y=0.30)
    sd = R.studio_display('Studio', screen='studio-home.png', finish='silver', tilt_deg=3)
    T.make_screen(sd, 'studio', 'studio_b')
    SK.lights_soft(target=(0, 0, 0.3), key=(-0.9, -1.0, 1.0), key_power=80, fill_power=25, top_power=20)
SK.run('d19_studio_front', build, {
    'a': dict(loc=(0.0, -1.35, 0.32), target=(0.0, 0.0, 0.30), lens=50),
    'b': dict(loc=(0.75, -0.95, 0.42), target=(0.0, 0.0, 0.30), lens=60),
    'c': dict(loc=(-0.85, -0.90, 0.25), target=(0.0, 0.0, 0.32), lens=55),
})
