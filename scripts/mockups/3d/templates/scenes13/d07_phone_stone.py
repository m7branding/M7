import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D07 iPhone on a stone slab (recolourable) with a second phone face down, low raking light, dark mood."""
def build():
    SK.env(0.06)
    SK.floor('floor', tex='concrete_wall_006', scale=0.7, contrast=0.9)
    slab_m = T.tint_material('slab', tex='concrete_floor_01', scale=0.6, contrast=0.7)
    SK.block('slab', (0.32, 0.22, 0.03), slab_m, loc=(0, 0, 0))
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.location = (-0.03, -0.01, 0.03); ph.rotation_euler.z = math.radians(-32); T.make_screen(ph, 'iphone', 'phone_a')
    k = SK.lights_raking(target=(0, 0, 0.03), from_dir=(-1.0, 0.6), height=0.22, dist=0.7, power=55, size=(0.3, 0.8))
    edge = [R.area_light('rim', (0.5, 0.6, 0.25), (0, 0, 0.03), size=(0.6, 0.06), power=18)]
    T.edge_lights_skip_screens(edge)
SK.run('d07_phone_stone', build, {
    'a': dict(loc=(0.20, -0.38, 0.30), target=(-0.02, 0.0, 0.03), lens=60),
    'b': dict(loc=(-0.02, -0.12, 0.42), target=(-0.02, 0.0, 0.03), lens=55, roll=0),
})
