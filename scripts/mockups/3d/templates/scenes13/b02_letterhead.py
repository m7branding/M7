import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B02 Letterhead + envelope + business card + pencil flatlay on a recolourable surface."""
def build():
    SK.env(0.25)
    SK.floor('floor', tex='white_plaster_02', scale=0.8, contrast=0.5)
    SK.sheet('envelope', 220, 110, t_mm=0.6, loc=(0.06, 0.10, 0.0), rot_z=math.radians(9))
    SK.sheet('letter', 210, 297, t_mm=0.12, loc=(-0.07, -0.01, 0.0007), rot_z=math.radians(-7))
    SK.sheet('card_front', 85, 55, t_mm=0.45, r_mm=0.6, loc=(0.135, -0.105, 0.0), rot_z=math.radians(16))
    SK.sheet('card_back', 85, 55, t_mm=0.45, r_mm=0.6, loc=(0.16, -0.035, 0.0), rot_z=math.radians(-4))
    pen = R.pencil_pro('Pencil'); pen.location = (0.085, -0.18, 0); pen.rotation_euler.z = math.radians(-62)
    sun, to_sun = SK.sun_window(az=-130, el=46, strength=3.0, angle=1.8)
    SK.leaf_gobo(to_sun, center=(-0.18, 0.15, 0.0), dist=0.55, scale=0.45)
    SK.lights_soft(target=(0, 0, 0), key=(-0.6, 0.2, 1.1), key_power=30, fill_power=10, rim=False, top_power=20)
SK.run('b02_letterhead', build, {
    'a': dict(loc=(0.02, -0.03, 0.78), target=(0.02, 0.0, 0.0), lens=45),
    'b': dict(loc=(0.30, -0.52, 0.33), target=(0.0, 0.0, 0.0), lens=55),
    'p': dict(loc=(0.0, -0.02, 0.95), target=(0.0, 0.015, 0.0), lens=26, w=1440, h=2560, vertical=True),
})
