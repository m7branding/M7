import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D18 MacBook seen low from the side (3/4 profile) on a recolourable sweep, dramatic rim light."""
def build():
    SK.env(0.06)
    SK.cyc('floor', y=0.8, radius=0.6)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=108)
    mbp.rotation_euler.z = math.radians(-28); T.make_screen(mbp, 'mac', 'mac')
    k = R.area_light('key', (-0.6, -0.4, 0.7), (0, 0, 0.1), size=(0.5, 0.5), power=30); k.visible_glossy = False
    edge = [R.area_light('rim', (0.5, 0.6, 0.35), (0, 0, 0.1), size=(0.8, 0.08), power=40)]
    T.edge_lights_skip_screens(edge)
SK.run('d18_mac_profile', build, {
    'a': dict(loc=(0.55, -0.55, 0.12), target=(0.0, 0.0, 0.09), lens=55),
    'b': dict(loc=(-0.20, -0.75, 0.30), target=(0.02, 0.02, 0.08), lens=60),
    'c': dict(loc=(0.10, -0.90, 0.45), target=(0.0, 0.02, 0.09), lens=55),
})
