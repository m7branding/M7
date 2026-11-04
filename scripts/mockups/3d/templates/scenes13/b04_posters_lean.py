import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B04 Two framed posters leaning against a recolourable wall on the floor."""
def build():
    SK.env(0.22)
    SK.floor('floor', tex='concrete_wall_006', scale=1.6, size=8, contrast=0.5)
    SK.wall('wall', y=0.0, size=8, h=3.2)
    for i, (role, x, lean, s) in enumerate([('poster_photo', -0.32, 6, 1.0), ('poster', 0.30, 8, 0.82)]):
        fr = SK.frame(role, 500 * s, 700 * s, border=14, depth=24, mount=45 * s)
        a = math.radians(90 - lean)
        Hh = (700 * s + 2 * 45 * s + 28) * MM
        fr.rotation_euler = (a, 0, 0)
        fr.location = (x, -0.025 - Hh / 2 * math.cos(a) - 0.01, Hh / 2 * math.sin(a))
    SK.lights_soft(target=(0, 0, 0.4), key=(-1.4, -1.6, 1.8), key_power=420, fill_power=120, rim=False)
SK.run('b04_posters_lean', build, {
    'a': dict(loc=(0.0, -2.6, 0.75), target=(0.0, 0.0, 0.42), lens=45),
    'b': dict(loc=(1.2, -1.7, 0.55), target=(-0.05, 0.0, 0.42), lens=50),
})
