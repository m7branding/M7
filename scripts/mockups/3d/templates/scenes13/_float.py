import math
from _hdr import SK, T, R, MM

ASPECT = {'snip_wide': (160, 100), 'snip_card': (120, 90), 'snip_sq': (96, 96), 'snip_tall': (84, 120), 'snip_bar': (170, 56)}


def card(name, role, kind, loc, rot, scale=1.0):
    """A floating UI card (round 14): a thin rounded slab whose face is a flat 'screen' (role snip_n) that the
    compositor fills with a real UI snippet from the site (CAPTURE snippets.json), fitted to the card aspect."""
    w, h = ASPECT[kind]; w *= scale; h *= scale
    edge = T.tint_material('cedge_' + role.split('_')[1], rough=0.45, spec=0.4)     # = the snippet's page colour
    ob = R.slab(name, w, h, min(w, h) * 0.06, [(0.25, 0.0), (0.0, 0.25), (0.0, 1.2)], mats=[edge, edge, edge], n=8)
    ob.location = loc; ob.rotation_euler = rot
    T.make_flat_screen(ob, kind, role, (int(w * 10), int(h * 10)), radius=0.06, mat_index=2)
    return ob
