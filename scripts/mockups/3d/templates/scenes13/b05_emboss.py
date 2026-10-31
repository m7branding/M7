import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B05 Blind-embossed logo on a sheet of paper on a recolourable surface, low raking light."""
def build():
    SK.env(0.08)
    SK.floor('floor', tex='concrete_wall_006', scale=0.8, contrast=0.6)
    SK.sheet('emboss_paper', 210, 210, t_mm=0.4, loc=(0, 0, 0), rot_z=math.radians(-8), light=(-0.9, -0.3), emboss=1.0)
    SK.sheet('card_back', 85, 55, t_mm=0.45, r_mm=0.6, loc=(0.135, -0.10, 0.0), rot_z=math.radians(22))
    SK.lights_raking(target=(0, 0, 0), from_dir=(-1.0, 0.3), height=0.12, dist=0.8, power=60, size=(0.3, 1.0))
    R.area_light('fill', (0.5, -0.6, 0.6), (0, 0, 0), size=(1.0, 1.0), power=6).visible_glossy = False
SK.run('b05_emboss', build, {
    'a': dict(loc=(0.12, -0.36, 0.24), target=(0.0, 0.0, 0.0), lens=62),
    'b': dict(loc=(0.0, -0.02, 0.48), target=(0.0, 0.0, 0.0), lens=55),
    'p': dict(loc=(0.07, -0.34, 0.68), target=(0.03, 0.0, 0.0), lens=33, w=1440, h=2560, vertical=True),
})
