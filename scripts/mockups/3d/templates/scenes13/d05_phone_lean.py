import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D05 iPhone leaning against a concrete block on a recolourable floor."""
def build():
    SK.env(0.25)
    SK.floor('floor', tex='concrete_wall_006', scale=1.0)
    blk = T.tint_material('block', tex='concrete_wall_006', scale=0.5, contrast=0.9)
    SK.block('block', (0.20, 0.09, 0.11), blk, loc=(0.0, 0.05, 0.0))
    ph = R.iphone17pro('Phone', screen='iphone-home.png', finish='spaceblack')
    ph.rotation_euler = (math.radians(90 - 18), 0, 0); ph.location = (0.0, 0.004 - 0.0465 * 0 - 0.0, 0.0)
    # bottom edge on the floor, back resting on the block face (y = 0.005)
    a = math.radians(18)
    ph.location = (0.0, 0.005 - 0.075 * math.sin(a) - 0.0088, 0.075 * math.cos(a))
    T.make_screen(ph, 'iphone', 'phone_a')
    SK.lights_soft(target=(0, 0, 0.07), key=(-0.6, -0.7, 0.8), key_power=45, fill_power=12)
SK.run('d05_phone_lean', build, {
    'a': dict(loc=(0.18, -0.48, 0.17), target=(0.0, 0.0, 0.07), lens=60),
    'b': dict(loc=(-0.10, -0.30, 0.07), target=(0.0, 0.0, 0.08), lens=50),
})
