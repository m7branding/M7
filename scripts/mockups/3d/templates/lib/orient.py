"""orient — read-upright mapping for printed designs.

For a print surface in a template we know, per pixel, the design coords (du, dv) and their image-space derivatives.
orientation() picks, out of the 8 ways to lay a design on the surface (4 rotations x mirror), the one whose
design axes best match image right (+x) and image down (+y), so a logo / text always reads upright (and never
mirrored). swapped=True means the design's width runs along the surface's dv (design must be made at the swapped
aspect). residual = remaining tilt of the design's vertical in the image (degrees)."""
import numpy as np

# candidate: (U from, V from) with sign; 'u' = du, '-u' = 1 - du ...
CANDS = [('u', 'v'), ('-u', '-v'), ('v', '-u'), ('-v', 'u'), ('-u', 'v'), ('u', '-v'), ('v', 'u'), ('-v', '-u')]


def axes(jac, m):
    """Median image direction of +du and +dv (columns of the inverse jacobian) over well-covered pixels."""
    sel = m > 0.9 if (m > 0.9).sum() > 50 else m > 0.3
    J = jac[sel].astype(np.float64)
    det = J[:, 0, 0] * J[:, 1, 1] - J[:, 0, 1] * J[:, 1, 0]
    ok = np.abs(det) > 1e-12
    J, det = J[ok], det[ok]
    inv = np.stack([np.stack([J[:, 1, 1], -J[:, 0, 1]], -1), np.stack([-J[:, 1, 0], J[:, 0, 0]], -1)], 1) / det[:, None, None]
    # inv[:, :, 0] = d(x, y)/d du ; inv[:, :, 1] = d(x, y)/d dv
    a = np.median(inv[:, :, 0], 0); b = np.median(inv[:, :, 1], 0)
    return a, b


def orientation(jac, m):
    a, b = axes(jac, m)
    vec = {'u': a, '-u': -a, 'v': b, '-v': -b}
    best = None
    for U, V in CANDS:
        du, dv = vec[U], vec[V]
        # mirrored layouts only if the surface itself is seen mirrored
        cross = du[0] * dv[1] - du[1] * dv[0]
        if cross <= 0: continue
        sc = du[0] / (np.linalg.norm(du) + 1e-12) + dv[1] / (np.linalg.norm(dv) + 1e-12)
        if best is None or sc > best[0]: best = (sc, U, V)
    _, U, V = best
    du, dv = vec[U], vec[V]
    base = float(np.degrees(np.arctan2(du[1], du[0])))       # tilt of the text baseline (+ = clockwise in the image)
    vert = float(np.degrees(np.arctan2(-dv[0], dv[1])))       # tilt of the design's vertical
    return dict(U=U, V=V, swapped=U.lstrip('-') == 'v', residual=base, vertical=vert)


def apply(du, dv, jac, o):
    """Re-express (du, dv, jac) in the upright design's coords."""
    src = {'u': (du, jac[:, 0, :], 1), 'v': (dv, jac[:, 1, :], 1)}

    def pick(k):
        c, g, _ = src[k.lstrip('-')]
        return (1.0 - c, -g) if k.startswith('-') else (c, g)
    U, gU = pick(o['U']); V, gV = pick(o['V'])
    return U.astype(np.float32), V.astype(np.float32), np.stack([gU, gV], 1).astype(np.float32)
