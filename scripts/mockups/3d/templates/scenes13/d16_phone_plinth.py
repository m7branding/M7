import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D16 iPhone standing on a small round plinth under a spot light, recolourable set (dark or brand-dark)."""
def build():
    SK.env(0.04)
    SK.cyc('floor', y=0.6, radius=0.5)
    pm = T.tint_material('plinth', tex='concrete_wall_006', scale=0.4, contrast=0.8)
    pl = R.cylinder('plinth', 70.0, 90.0, segs=128, mat=pm, bevel=1.5)
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.rotation_euler = (math.radians(90 - 8), 0, math.radians(-14)); ph.location = (0, 0.0, 0.09 + 0.0743)
    T.make_screen(ph, 'iphone', 'phone_a')
    s = R.area_light('spot', (0.05, -0.15, 0.9), (0, 0, 0.12), size=(0.25, 0.25), power=35); s.visible_glossy = False
    edge = [R.area_light('rimL', (-0.4, 0.3, 0.3), (0, 0, 0.15), size=(0.04, 0.5), power=12),
            R.area_light('rimR', (0.4, 0.3, 0.3), (0, 0, 0.15), size=(0.04, 0.5), power=12)]
    T.edge_lights_skip_screens(edge)
SK.run('d16_phone_plinth', build, {
    'a': dict(loc=(0.0, -0.60, 0.17), target=(0.0, 0.0, 0.14), lens=60, w=2000, h=2500, vertical=True),
    'b': dict(loc=(0.30, -0.50, 0.30), target=(0.0, 0.0, 0.13), lens=55),
})
