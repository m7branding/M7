import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""G02 (round 15) An open A5-landscape booklet (two 210 x 148 mm pages, slight V) and a closed copy on a recolourable
surface, soft top light. The spread takes two real brand-sheet pages, the closed copy the logo on the brand colour."""
def build():
    SK.env(0.25)
    SK.floor('floor', tex='white_plaster_02', scale=0.8, contrast=0.5)
    sp = R.empty('spread', loc=(-0.035, -0.02, 0), rot=(0, 0, math.radians(-4)))
    a = math.radians(2.4); z0 = 0.0027            # pages hinge at the spine, on top of the page block
    for role, sx in (('page_l', -1), ('page_r', 1)):
        s = SK.sheet(role, 210, 148, t_mm=0.35, r_mm=0.3, rough=0.55)
        s.location = (sx * 0.105 * math.cos(a), 0, z0 + 0.105 * math.sin(a)); s.rotation_euler = (0, -sx * a, 0)
        R.parent(s, sp, keep=False)
    under = SK.sheet('under', 422, 150, t_mm=2.4, r_mm=0.3, loc=(-0.035, -0.02, 0), rot_z=math.radians(-4))
    cl = SK.sheet('bcover', 210, 148, t_mm=3.0, r_mm=0.4, loc=(0.205, 0.165, 0), rot_z=math.radians(11), rough=0.5)
    SK.lights_soft(target=(0, 0, 0), key=(-0.7, 0.45, 1.25), key_power=55, fill_power=15, rim=False, top_power=26)
SK.run('g02_booklet', build, {
    'a': dict(loc=(0.0, -0.11, 0.80), target=(0.0, 0.025, 0.0), lens=45),
    'b': dict(loc=(0.02, -0.58, 0.40), target=(0.0, 0.035, 0.0), lens=42),
})
