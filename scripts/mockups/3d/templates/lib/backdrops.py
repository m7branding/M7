"""backdrops — neutral / navy / textured backgrounds for the transparent templates (T1, T2, animation A).

Every backdrop is built in LINEAR light and projected on the template's real floor plane (z = 0) through the
camera stored in the template meta, so light pools, textures and leaf shadows sit in correct perspective and
move with the camera in the video. On top of that, a soft halo derived from the device alpha keeps space-black
devices separated on dark backdrops. A static fine grain (applied in display space) prevents banding.
No colour is derived from the project's brand colour.
"""
import os, math
import numpy as np
import cv2
from tcomp import eotf, oetf, hex2rgb, Pyramid

HERE = os.path.dirname(os.path.abspath(__file__)); R12 = os.path.dirname(HERE)
_R3D = os.environ.get('R3D_ROOT') or (os.path.join(os.path.dirname(R12), 'r11') if os.path.isdir(os.path.join(os.path.dirname(R12), 'r11')) else os.path.dirname(R12))
TEXDIR = os.path.join(_R3D, 'assets', 'textures')
BGTEX = os.path.join(R12, 'bgtex')


def lin(hexc):
    return eotf(np.array(hex2rgb(hexc), np.float32) / 255.0).astype(np.float32)


# ------------------------------------------------------------------ the set
# group: light | dark | navy.  tex: None | plaster | linen | leaves | dune | nebula
VARIANTS = {
    'white':              dict(group='light', base='#F2F2F0'),
    'light-grey':         dict(group='light', base='#E3E4E6'),
    'mid-grey':           dict(group='light', base='#CDCFD2'),
    'white-leaves':       dict(group='light', base='#EFEEEA', tex='leaves'),
    'grey-plaster':       dict(group='light', base='#E0E1E2', tex='plaster'),
    'white-linen':        dict(group='light', base='#EDECE8', tex='linen'),
    'white-dune':         dict(group='light', base='#EEEEEC', tex='dune'),
    'graphite':           dict(group='dark', base='#2A2B2F'),
    'anthracite':         dict(group='dark', base='#1D1E21'),
    'near-black':         dict(group='dark', base='#0D0E10'),
    'anthracite-plaster': dict(group='dark', base='#1F2023', tex='plaster'),
    'graphite-dune':      dict(group='dark', base='#28292D', tex='dune'),
    'navy-glow':          dict(group='navy', base='#070C1A'),
    'navy-nebula':        dict(group='navy', base='#060B18', tex='nebula'),
}
GROUPS = {g: [k for k, v in VARIANTS.items() if v['group'] == g] for g in ('light', 'dark', 'navy')}


# ------------------------------------------------------------------ geometry
def floor_coords(cam, W, H):
    """World (X, Y) on the z = 0 floor for every pixel centre (+ distance from the camera)."""
    M = np.array(cam['matrix'], np.float64)
    Rm, o = M[:3, :3], M[:3, 3]
    lens, sw = cam['lens'], cam['sensor_width']
    if cam.get('sensor_fit') == 'VERTICAL':
        sw = cam['sensor_height'] * W / H
    xs = ((np.arange(W) + 0.5) / W - 0.5) * sw / lens
    ys = (0.5 - (np.arange(H) + 0.5) / H) * (sw * H / W) / lens
    dx, dy = np.meshgrid(xs, ys)
    d = np.stack([dx, dy, -np.ones_like(dx)], -1) @ Rm.T
    t = -o[2] / np.minimum(d[..., 2], -1e-6)
    X = o[0] + t * d[..., 0]; Y = o[1] + t * d[..., 1]
    return X.astype(np.float32), Y.astype(np.float32), (t * np.linalg.norm(d, axis=-1)).astype(np.float32)


def project(cam, W, H, p):
    """World point -> pixel (x, y)."""
    M = np.array(cam['matrix'], np.float64)
    Rm, o = M[:3, :3], M[:3, 3]
    c = Rm.T @ (np.array(p, np.float64) - o)
    sw = cam['sensor_width']
    x = (c[0] / -c[2]) * cam['lens'] / sw
    y = (c[1] / -c[2]) * cam['lens'] / (sw * H / W)
    return (x + 0.5) * W, (0.5 - y) * H


# ------------------------------------------------------------------ textures
_TEX = {}


def _hp_tex(name, sigma=40):
    """Desaturated, high-passed, unit-std texture (pyramid) from a Poly Haven diffuse map."""
    if name not in _TEX:
        f = os.path.join(TEXDIR, name, f'{name}_diff_2k.jpg')
        g = cv2.imread(f, cv2.IMREAD_GRAYSCALE).astype(np.float32) / 255.0
        h, w = g.shape; t = np.tile(g, (3, 3))                     # wrap-around blur (tileable textures)
        g = g - cv2.GaussianBlur(t, (0, 0), sigma)[h:2 * h, w:2 * w]
        g = g / (g.std() + 1e-6)
        _TEX[name] = Pyramid(g[..., None])
    return _TEX[name]


def _noise_tex(seed=11, size=512):
    """Tileable fBm noise (unit std) for nebula clouds."""
    key = ('noise', seed, size)
    if key not in _TEX:
        rng = np.random.default_rng(seed)
        acc = np.zeros((size, size), np.float32)
        for k, (cells, w) in enumerate([(3, 1.0), (6, 0.55), (12, 0.3), (24, 0.15)]):
            g = rng.standard_normal((cells, cells)).astype(np.float32)
            g = np.tile(g, (3, 3))
            up = cv2.resize(g, (size * 3, size * 3), interpolation=cv2.INTER_CUBIC)[size:2 * size, size:2 * size]
            acc += w * up
        acc = (acc - acc.mean()) / acc.std()
        _TEX[key] = Pyramid(np.stack([acc, np.roll(acc, (size // 3, size // 2), (0, 1)), np.roll(acc.T, size // 4, 0)], -1))
    return _TEX[key]


def _leaves():
    if 'leaves' not in _TEX:
        g = cv2.imread(os.path.join(BGTEX, 'leaves.png'), cv2.IMREAD_UNCHANGED).astype(np.float32) / 65535.0
        g = cv2.GaussianBlur(g, (0, 0), 3)
        _TEX['leaves'] = Pyramid(g[..., None])
    return _TEX['leaves']


def _sample_world(pyr, X, Y, metres_per_tile, wrap=True, offset=(0.0, 0.0), rot=0.0, px_per_m=None):
    """Sample a texture pyramid at world floor coords, mip level from the coordinate derivatives."""
    c, s = math.cos(rot), math.sin(rot)
    mx, my = metres_per_tile if isinstance(metres_per_tile, (tuple, list)) else (metres_per_tile, metres_per_tile)
    u = (c * (X - offset[0]) - s * (Y - offset[1])) / mx
    v = -(s * (X - offset[0]) + c * (Y - offset[1])) / my + (0.0 if wrap else 1.0)
    tw, th = pyr.w, pyr.h
    tx = u * tw; ty = v * th
    if wrap:
        tx = np.mod(tx, tw); ty = np.mod(ty, th)
    dxx = np.abs(np.diff(tx, axis=1, append=tx[:, -1:])); dyy = np.abs(np.diff(ty, axis=0, append=ty[-1:]))
    dxx = np.minimum(dxx, tw - dxx) if wrap else dxx
    dyy = np.minimum(dyy, th - dyy) if wrap else dyy
    lod = np.log2(np.maximum(np.maximum(dxx, dyy), 1e-3)).astype(np.float32)
    out = pyr.sample(tx.reshape(-1).astype(np.float32), ty.reshape(-1).astype(np.float32), lod.reshape(-1))
    return out.reshape(X.shape + (pyr.levels[0].shape[2],))


# ------------------------------------------------------------------ halo / grain
def halo(alpha, W, H, sigma_frac=0.09):
    """Soft glow behind the device silhouettes (normalised 0..1)."""
    s = 8
    a = cv2.resize(alpha, (max(1, W // s), max(1, H // s)), interpolation=cv2.INTER_AREA)
    b = cv2.GaussianBlur(a, (0, 0), sigma_frac * W / s)
    b = b / max(b.max(), 1e-6)
    return cv2.resize(b, (W, H), interpolation=cv2.INTER_CUBIC)


_GRAIN = {}


def grain(H, W, amp):
    key = (H, W)
    if key not in _GRAIN:
        rng = np.random.default_rng(1234)
        _GRAIN[key] = (rng.random((H, W), np.float32) - rng.random((H, W), np.float32))[..., None]   # triangular, std ~0.41
    return _GRAIN[key] * (amp / 255.0)


# ------------------------------------------------------------------ the backdrop
POOL_CENTRE = (0.10, 0.24)       # floor point under the device group (T1 world)
LEAF_SIZE = (1.2, 0.8)           # metres covered by the gobo render (2.4 x 1.6 m, scaled down 2x)
LEAF_XFORM = dict(offset=(-0.80, -0.20), rot=math.radians(0.0))   # leaf cluster on the far-left floor


def backdrop(variant, cam, W, H, alpha=None, phase=0.0):
    """Linear RGB backdrop (H, W, 3) + display-space grain amplitude. phase in [0, 1) drives a slow, seamless drift
    of the light pool / glow (video)."""
    v = VARIANTS[variant]
    base = lin(v['base'])
    X, Y, dist = floor_coords(cam, W, H)
    cx = POOL_CENTRE[0] + 0.05 * math.sin(2 * math.pi * phase)
    cy = POOL_CENTRE[1] + 0.03 * math.sin(4 * math.pi * phase)
    r2 = (X - cx) ** 2 + (Y - cy) ** 2
    pool = np.exp(-r2 / (2 * 0.42 ** 2))[..., None]
    wide = np.exp(-r2 / (2 * 1.1 ** 2))[..., None]
    yy = np.linspace(-1, 1, H, dtype=np.float32)[:, None, None]; xx = np.linspace(-1, 1, W, dtype=np.float32)[None, :, None]
    vig = 1.0 - 0.10 * np.clip((xx ** 2 + yy ** 2) / 2, 0, 1)
    g = v['group']
    if g == 'light':
        img = base * (0.90 + 0.08 * wide + 0.07 * pool) * vig
        amp = 0.7
    elif g == 'dark':
        img = base * (0.80 + 0.25 * wide + 0.70 * pool) * vig
        amp = 1.0
    else:  # navy
        img = base * (0.80 + 0.20 * wide) * vig + lin('#13224A') * 0.32 * pool
        amp = 1.2
    tex = v.get('tex')
    if tex in ('plaster', 'linen'):
        t = _sample_world(_hp_tex('white_plaster_02' if tex == 'plaster' else 'rough_linen'), X, Y,
                          0.55 if tex == 'plaster' else 0.22)[..., :1]
        k = (0.035 if tex == 'plaster' else 0.022) * (1.6 if g != 'light' else 1.0)
        img = img * (1.0 + k * np.clip(t, -3, 3))
    elif tex == 'leaves':
        t = _sample_world(_leaves(), X, Y, LEAF_SIZE, wrap=False, offset=LEAF_XFORM['offset'], rot=LEAF_XFORM['rot'])[..., :1]
        # outside the gobo: full light
        u = (X - LEAF_XFORM['offset'][0]); vv = (Y - LEAF_XFORM['offset'][1])
        c, s = math.cos(LEAF_XFORM['rot']), math.sin(LEAF_XFORM['rot'])
        uu, ww = c * u - s * vv, s * u + c * vv
        inside = ((uu >= 0) & (uu < LEAF_SIZE[0]) & (ww >= 0) & (ww < LEAF_SIZE[1]))[..., None]
        sh = np.where(inside, t, 1.0)
        img = img * (1.0 - 0.18 * (1.0 - np.clip(sh, 0, 1)))
    elif tex == 'dune':
        n = _sample_world(_noise_tex(5), X, Y, 2.2)[..., :1]
        a = math.radians(28)
        ph = ((X * math.cos(a) + Y * math.sin(a)) / 0.30 * 2 * math.pi)[..., None] + 1.4 * n
        band = 0.5 + 0.5 * np.sin(ph)
        band = band ** 3                                   # thin soft highlights, wide soft lows
        k = 0.12 if g == 'light' else 0.55
        img = img * (1.0 - 0.5 * k + k * band)
    elif tex == 'nebula':
        n = _sample_world(_noise_tex(23), X - 0.06 * math.sin(2 * math.pi * phase), Y, 2.4)
        cl = np.clip(0.42 + 0.32 * n, 0, 1) ** 3.5                 # a few large, soft clouds
        neb = (lin('#1A2A66') * cl[..., :1] * 0.45 + lin('#0F3A52') * cl[..., 1:2] * 0.22 + lin('#2A1C58') * cl[..., 2:3] * 0.25)
        img = img + 0.45 * neb * (0.4 + 0.6 * wide)
    if g != 'light' and alpha is not None:
        hl = halo(alpha, W, H)[..., None]
        col = lin('#2E3C66') if g == 'navy' else lin('#3E4046')
        # light falling on the backdrop behind the devices, not an outline: wide and weak (the pool does most of the work)
        strength = {'near-black': 0.30, 'anthracite': 0.19, 'anthracite-plaster': 0.19}.get(variant, 0.14 if g == 'dark' else 0.25)
        img = img + col * strength * hl
    return np.maximum(img, 0).astype(np.float32), amp
