import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B12 MacBook open (site) + letterhead + cards on an oak desk in front of a recolourable wall."""
def build():
    SK.env(0.22)
    oak = R.mat_pbr('oak', 'oak_veneer_01', scale=1.1, bump=0.25, sat=0.75, val=1.1, rot=math.radians(90))
    R.box('desk', (2.4, 1.1, 0.03), mat=oak, loc=(0, -0.15, -0.03), bevel=0.003)
    SK.wall('wall', y=0.40)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='spaceblack', open_deg=110)
    mbp.location = (-0.12, 0.10, mbp.location.z); mbp.rotation_euler.z = math.radians(10); T.make_screen(mbp, 'mac', 'mac')
    SK.sheet('letter', 210, 297, t_mm=0.12, loc=(0.24, -0.10, 0.0), rot_z=math.radians(-12))
    SK.card_stack('card_front', n=6, loc=(0.10, -0.25, 0), rot_z=math.radians(20))
    SK.lights_soft(target=(0, 0, 0.05), key=(-1.0, -0.5, 1.0), key_power=60, fill_power=16)
SK.run('b12_letter_mac', build, {
    'a': dict(loc=(0.10, -1.05, 0.55), target=(0.04, -0.02, 0.06), lens=45),
    'b': dict(loc=(0.30, -0.80, 0.26), target=(0.08, -0.06, 0.05), lens=55),
})
