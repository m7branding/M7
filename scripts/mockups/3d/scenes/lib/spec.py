"""Real-world dimensions (mm) of the newest Apple devices, shared by the PIL screen
composer (screens.py) and the procedural bpy models (devices.py).
Sources: Apple tech specs (iPhone 17 Pro, MacBook Pro 14" M4/M5, iPad Pro 13" M4/M5, Studio Display).
Corner radii / bezels are measured-by-eye approximations."""

IPHONE17PRO = dict(
    W=71.9, H=150.0, D=8.75, r=12.6,           # body
    glass_inset=0.55,                           # front glass outline inset from body outline
    px=(1206, 2622), ppi=460,                    # display
    disp_r=9.6,                                 # display corner radius (continuous)
    island=(20.9, 6.15, 1.85),                  # dynamic island w, h, top offset from display top
    status_h=162, web_h=2460,                   # px: status bar + web viewport (402x820pt @3x)
)
MBP14 = dict(
    W=312.6, Dp=221.2, base_h=10.9, lid_t=4.6, lid_L=215.0,
    px=(3024, 1964), ppi=254,
    bezel_side=5.1, bezel_top=4.2,              # display offset inside lid (inner face)
    disp_r_top=8.0,
    notch=(31.5, 7.1, 2.4),                     # w, h, bottom corner radius
    menubar_px=74, toolbar_px=104, web_h=1786,
)
STUDIO = dict(
    W=623.0, H=362.7, D=16.0, r=7.0,
    px=(3200, 1800), disp_mm=(596.5, 335.6),
    menubar_px=48, toolbar_px=106, web_h=1646,
)
IPADPRO13 = dict(
    W=281.6, H=215.5, D=5.1, r=12.6,
    px=(2752, 2064), ppi=264, disp_r=3.9,
    status_px=48, toolbar_px=100, web_h=1916,
)
PENCILPRO = dict(L=166.0, dia=8.9)

def mm_per_px(spec):
    return 25.4 / spec['ppi']

def disp_mm(spec):
    if 'disp_mm' in spec: return spec['disp_mm']
    k = mm_per_px(spec)
    return spec['px'][0] * k, spec['px'][1] * k

# ---------------------------------------------------------------- outlines
import math
SQ_P = 3.4    # superellipse exponent used for Apple-like continuous corners
SQ_E = 1.42   # corner extent relative to the nominal radius

def _corner(cx, cy, e, q, n, p):
    pts = []
    for i in range(n + 1):
        t = (math.pi / 2) * (i / n) + q * math.pi / 2
        c, s = math.cos(t), math.sin(t)
        x = e * math.copysign(abs(c) ** (2 / p), c)
        y = e * math.copysign(abs(s) ** (2 / p), s)
        pts.append((cx + x, cy + y))
    return pts

def rrect(w, h, r, n=20, continuous=True):
    """CCW outline (list of (x,y)) of a rounded rectangle centred on the origin, y up.
    r: float, or 4-tuple (top-right, top-left, bottom-left, bottom-right)."""
    if not isinstance(r, (tuple, list)): r = (r, r, r, r)
    hw, hh = w / 2, h / 2
    pts = []
    for q, (sx, sy) in enumerate([(1, 1), (-1, 1), (-1, -1), (1, -1)]):
        rr = r[q]
        if rr <= 1e-6:
            pts.append((sx * hw, sy * hh)); continue
        p = SQ_P if continuous else 2.0
        e = min(rr * (SQ_E if continuous else 1.0), hw, hh)
        pts.extend(_corner(sx * (hw - e), sy * (hh - e), e, q, n, p))
    out = []
    for pt in pts:
        if not out or abs(pt[0] - out[-1][0]) + abs(pt[1] - out[-1][1]) > 1e-7: out.append(pt)
    if abs(out[0][0] - out[-1][0]) + abs(out[0][1] - out[-1][1]) < 1e-7: out.pop()
    return out
