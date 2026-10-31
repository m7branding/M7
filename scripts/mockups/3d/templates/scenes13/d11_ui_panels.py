import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""D11 Floating UI panels (2.5D): crops of the site as thin rounded cards layered in depth over a backdrop
(transparent film + shadow catcher)."""
def panel(name, role, w_mm, h_mm, loc, rot):
    edge = R.mat_paint('panel_edge', (0.9, 0.9, 0.9), rough=0.5)
    ob = R.slab(name, w_mm, h_mm, min(w_mm, h_mm) * 0.035, [(0.3, 0.0), (0.0, 0.3), (0.0, 1.6)], mats=[edge, edge, edge], n=8)
    ob.location = loc; ob.rotation_euler = rot
    T.make_flat_screen(ob, 'panel_' + role[-1], role, (int(w_mm * 10), int(h_mm * 10)), radius=0.035, mat_index=2)
    return ob
def build():
    T.world(strength=0.25, color=(1, 1, 1))
    c = R.plane('catcher', 6, 6, mat=R.mat_paint('cf', (0.8, 0.8, 0.8)), loc=(0, 0, 0)); c.is_shadow_catcher = True
    tilt = (math.radians(90 - 24), math.radians(-6), math.radians(14))
    grp = R.empty('ui', loc=(0, 0.02, 0.13), rot=tilt)
    for nm, role, w, h, x, y, lift in [('p1', 'panel_1', 240, 150, 0, 10, 0), ('p2', 'panel_2', 120, 80, -95, -55, 26),
                                       ('p3', 'panel_3', 110, 70, 105, 62, 18), ('p4', 'panel_4', 150, 94, 92, -60, 40),
                                       ('p5', 'panel_5', 62, 128, -128, 52, 46)]:
        ob = panel(nm, role, w, h, (x * MM, y * MM, lift * MM), (0, 0, 0)); R.parent(ob, grp, keep=False)
    k = R.area_light('key', (-0.5, -0.6, 0.9), (0, 0, 0.1), size=(0.6, 0.6), power=50); k.visible_glossy = False
    t = R.area_light('top', (0, 0, 1.2), (0, 0, 0), size=(0.8, 0.8), power=60); t.visible_glossy = False
SK.run('d11_ui_panels', build, {
    'a': dict(loc=(0.02, -0.55, 0.36), target=(0.0, 0.0, 0.11), lens=50),
    'b': dict(loc=(-0.30, -0.42, 0.20), target=(0.0, 0.0, 0.12), lens=58),
    'c': dict(loc=(0.34, -0.45, 0.28), target=(0.0, 0.0, 0.115), lens=55),
}, transparent=True)
