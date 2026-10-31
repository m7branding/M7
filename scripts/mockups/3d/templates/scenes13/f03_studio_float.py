import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
from _float import card
"""F03 Studio Display (site) with four real UI cards stacked in depth in front of it."""
def build():
    SK.env(0.22)
    SK.floor('floor', tex='white_plaster_02', scale=1.4, contrast=0.4)
    SK.wall('wall', y=0.30)
    sd = R.studio_display('Studio', screen='studio-home.png', finish='silver', tilt_deg=3)
    T.make_screen(sd, 'studio', 'studio')
    X = math.radians(90)
    card('c1', 'snip_1', 'snip_wide', (0.22, -0.16, 0.42), (X, 0, math.radians(-10)), scale=1.1)
    card('c2', 'snip_2', 'snip_card', (0.30, -0.26, 0.27), (X, 0, math.radians(-16)))
    card('c3', 'snip_3', 'snip_tall', (-0.27, -0.20, 0.33), (X, 0, math.radians(14)))
    card('c4', 'snip_4', 'snip_bar', (-0.05, -0.32, 0.19), (X - math.radians(8), 0, math.radians(2)), scale=0.9)
    SK.lights_soft(target=(0, 0, 0.3), key=(-0.9, -1.0, 1.0), key_power=80, fill_power=25, top_power=20)
SK.run('f03_studio_float', build, {
    'a': dict(loc=(0.15, -1.55, 0.40), target=(0.02, 0.0, 0.31), lens=45),
    'b': dict(loc=(0.85, -1.15, 0.45), target=(0.0, -0.05, 0.30), lens=50),
})
