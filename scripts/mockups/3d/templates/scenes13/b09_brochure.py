import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B09 A4 bi-fold brochure: open spread (slight V) + a closed copy, on a recolourable surface."""
def build():
    SK.env(0.25)
    SK.floor('floor', tex='white_plaster_02', scale=0.8, contrast=0.5)
    sp = R.empty('spread', loc=(-0.02, -0.01, 0), rot=(0, 0, math.radians(-6)))
    for role, sx in (('brochure_l', -1), ('brochure_r', 1)):
        s = SK.sheet(role, 210, 297, t_mm=0.3, r_mm=0.2)
        s.location = (sx * 0.105, 0, 0.004); s.rotation_euler = (0, math.radians(-sx * 3.5), 0)
        R.parent(s, sp, keep=False)
    cl = SK.sheet('brochure_l', 210, 297, t_mm=0.6, r_mm=0.2, loc=(0.24, 0.10, 0), rot_z=math.radians(14))
    SK.lights_soft(target=(0, 0, 0), key=(-0.7, 0.4, 1.2), key_power=55, fill_power=14, rim=False, top_power=25)
SK.run('b09_brochure', build, {
    'a': dict(loc=(0.05, -0.04, 0.95), target=(0.05, 0.02, 0.0), lens=45),
    'b': dict(loc=(-0.25, -0.62, 0.40), target=(0.02, 0.0, 0.0), lens=50),
})
