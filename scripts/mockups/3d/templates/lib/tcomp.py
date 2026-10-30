"""tcomp — composite a project's screens into a pre-rendered template (numpy, no Blender needed at run time
except for the OCIO config, which is read from the bpy install).

    other  = Combined - screen_lightgroup - env + env * tint        (linear, premultiplied)
    screen = W * tex(uv / cov)                                       (W = white screen light group)
    out    = AgX(other) outside the display, exact sRGB(tex + refl * other) on the display (mask = W),
             over a project background (transparent templates: bg * shadow-catcher, alpha-over).

Texture lookups are trilinear (mip pyramid) with up to `aniso` samples along the major axis of the
UV footprint, so tilted / minified screens stay sharp without aliasing.
"""
import os, json, math, glob
import numpy as np
import OpenEXR, Imath
import PyOpenColorIO as OCIO

HERE = os.path.dirname(os.path.abspath(__file__))
R12 = os.path.dirname(HERE)
TPL = os.path.join(R12, 'tpl')
_R3D = os.environ.get('R3D_ROOT') or (os.path.join(os.path.dirname(R12), 'r11') if os.path.isdir(os.path.join(os.path.dirname(R12), 'r11')) else os.path.dirname(R12))
OCIO_CFG = os.environ.get('R3D_OCIO') or os.path.join(_R3D, 'venv', 'lib', 'python3.13', 'site-packages', 'bpy', '5.2',
                                                      'datafiles', 'colormanagement', 'config.ocio')
_PROC = {}


# ------------------------------------------------------------------ colour
def agx_proc(look='AgX - Medium High Contrast'):
    if look not in _PROC:
        cfg = OCIO.Config.CreateFromFile(OCIO_CFG)
        g = OCIO.GroupTransform()
        if look and look != 'None':
            g.appendTransform(OCIO.LookTransform(src='Linear Rec.709', dst='Linear Rec.709', looks=look))
        g.appendTransform(OCIO.DisplayViewTransform(src='Linear Rec.709', display='sRGB', view='AgX'))
        _PROC[look] = cfg.getProcessor(g).getDefaultCPUProcessor()
    return _PROC[look]


def agx(lin, look='AgX - Medium High Contrast'):
    a = np.ascontiguousarray(lin.astype(np.float32).reshape(-1, 3).copy())
    agx_proc(look).applyRGB(a)
    return a.reshape(lin.shape)


def oetf(x):
    x = np.clip(np.asarray(x, np.float32), 0, 1)
    try:
        import cv2
        p = cv2.pow(np.ascontiguousarray(x), 1 / 2.4)
    except ImportError:
        p = np.power(x, 1 / 2.4)
    return np.where(x <= 0.0031308, x * 12.92, 1.055 * p - 0.055).astype(np.float32)


def eotf(x):
    x = np.asarray(x, np.float32)
    return np.where(x <= 0.04045, x / 12.92, ((x + 0.055) / 1.055) ** 2.4)


_LUT = eotf(np.arange(256) / 255.0).astype(np.float32)


def hex2rgb(h):
    h = h.lstrip('#'); return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


# ------------------------------------------------------------------ EXR
def read_exr(path, chans=None):
    f = OpenEXR.InputFile(path)
    hd = f.header(); dw = hd['dataWindow']
    W, H = dw.max.x - dw.min.x + 1, dw.max.y - dw.min.y + 1
    have = list(hd['channels'].keys())
    chans = chans or [c for c in 'RGBA' if c in have]
    FT = Imath.PixelType(Imath.PixelType.FLOAT)
    return np.dstack([np.frombuffer(f.channel(c, FT), dtype=np.float32).reshape(H, W) for c in chans])


class Frame:
    """All passes of one template frame (+ precomputed screen geometry)."""

    def __init__(self, tdir, base, meta):
        p = lambda k: os.path.join(tdir, f'{base}_{k}.exr')
        self.meta = meta
        rgba = read_exr(p('rgb'), list('RGBA'))
        self.rgb, self.alpha = rgba[..., :3], rgba[..., 3]
        self.W = read_exr(p('scr'), ['R'])[..., 0]
        self.env = read_exr(p('env'), list('RGB'))
        uv = read_exr(p('uv'), list('RGB'))
        cov = read_exr(p('cov'), ['R'])[..., 0]
        self.sc = read_exr(p('sc'), list('RGB')) if os.path.exists(p('sc')) else None
        self.H, self.Wd = self.W.shape
        self.base_other = self.rgb - self.W[..., None]          # still contains env (tinted later)
        valid = cov > 0.02
        sid = np.zeros(cov.shape, np.int32)
        sid[valid] = np.rint(uv[..., 2][valid] / cov[valid]).astype(np.int32)
        u = np.zeros(cov.shape, np.float32); v = np.zeros(cov.shape, np.float32)
        u[valid] = uv[..., 0][valid] / cov[valid]; v[valid] = uv[..., 1][valid] / cov[valid]
        # display coordinates (0..1 from the display's top-left) per screen id
        self.screens = {}
        for k, s in meta['screens'].items():
            k = int(k)
            g = meta['glass'][s['type']]
            msk = valid & (sid == k)
            if not msk.any():
                continue
            du = np.full(cov.shape, np.nan, np.float32); dv = np.full(cov.shape, np.nan, np.float32)
            du[msk] = (u[msk] * g['gw'] - g['x0']) / g['dw']
            dv[msk] = ((1 - v[msk]) * g['gh'] - g['y0']) / g['dh']
            # only pixels where the display actually emits are sampled
            lit = msk & (self.W > 1e-4)
            self.screens[k] = dict(type=s['type'], role=s['role'], du=du, dv=dv, lit=lit)


# ------------------------------------------------------------------ textures
class Pyramid:
    def __init__(self, img):
        """img: float32 HxWxC (linear, premultiplied if it has alpha)."""
        self.levels = [np.ascontiguousarray(img, np.float32)]
        while min(self.levels[-1].shape[:2]) > 8:
            a = self.levels[-1]
            h, w = a.shape[0] // 2 * 2, a.shape[1] // 2 * 2
            a = a[:h, :w]
            self.levels.append(np.ascontiguousarray(0.25 * (a[0::2, 0::2] + a[1::2, 0::2] + a[0::2, 1::2] + a[1::2, 1::2]), np.float32))
        self.h, self.w = img.shape[:2]

    def bilinear(self, lvl, x, y):
        """x, y: level-0 pixel coords (pixel centres at i + 0.5)."""
        a = self.levels[lvl]; h, w = a.shape[:2]
        s = 2.0 ** lvl
        fx = x / s - 0.5; fy = y / s - 0.5
        x0 = np.floor(fx); y0 = np.floor(fy)
        tx = (fx - x0)[:, None]; ty = (fy - y0)[:, None]
        x0 = x0.astype(np.int64); y0 = y0.astype(np.int64)
        x1 = np.clip(x0 + 1, 0, w - 1); y1 = np.clip(y0 + 1, 0, h - 1)
        x0 = np.clip(x0, 0, w - 1); y0 = np.clip(y0, 0, h - 1)
        return (a[y0, x0] * (1 - tx) * (1 - ty) + a[y0, x1] * tx * (1 - ty) +
                a[y1, x0] * (1 - tx) * ty + a[y1, x1] * tx * ty)

    def remap(self, lvl, x, y):
        """Bilinear lookup at level lvl via OpenCV (fast); x, y level-0 pixel coords (centres at i + 0.5)."""
        import cv2
        n = x.shape[0]
        if n == 0:
            return np.zeros((0, self.levels[0].shape[2]), np.float32)
        s = 2.0 ** lvl
        cols = 2048
        rows = (n + cols - 1) // cols
        mx = np.full(rows * cols, -10.0, np.float32); my = np.full(rows * cols, -10.0, np.float32)
        mx[:n] = x / s - 0.5; my[:n] = y / s - 0.5
        src = self.levels[lvl]
        r = cv2.remap(src, mx.reshape(rows, cols), my.reshape(rows, cols), cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
        return r.reshape(rows * cols, -1)[:n]

    def sample(self, x, y, lod):
        try:
            import cv2  # noqa: F401
            fast = True
        except ImportError:
            fast = False
        if fast:
            top = len(self.levels) - 1
            lod = np.clip(lod, 0, top).astype(np.float32)
            l0 = np.floor(lod).astype(np.int32); fr = (lod - l0)[:, None]
            lo, hi = int(l0.min()), min(int(l0.max()) + 1, top)
            stack = np.stack([self.remap(L, x, y) for L in range(lo, hi + 1)])     # (levels, n, C)
            ar = np.arange(x.shape[0])
            a = stack[l0 - lo, ar]
            b = stack[np.minimum(l0 + 1, hi) - lo, ar]
            return a + (b - a) * fr
        out = np.zeros((x.shape[0], self.levels[0].shape[2]), np.float32)
        lod = np.clip(lod, 0, len(self.levels) - 1)
        l0 = np.floor(lod).astype(np.int32); fr = (lod - l0)[:, None]
        for L in np.unique(l0):
            sel = l0 == L
            a = self.bilinear(L, x[sel], y[sel])
            if L + 1 < len(self.levels):
                b = self.bilinear(L + 1, x[sel], y[sel])
                a = a * (1 - fr[sel]) + b * fr[sel]
            out[sel] = a
        return out


def to_lin(img_u8):
    """uint8 sRGB (H,W,3|4) -> float32 linear (alpha kept linear, colour premultiplied)."""
    a = np.asarray(img_u8)
    rgb = _LUT[a[..., :3]]
    if a.shape[2] == 4:
        al = a[..., 3:4].astype(np.float32) / 255.0
        return np.concatenate([rgb * al, al], axis=2)
    return rgb


class Display:
    """What one screen shows: a content image (scrollable) under a static RGBA overlay (status bar, browser
    chrome …). Coordinates: display pixels (W x H)."""

    def __init__(self, W, H, content, top, overlay=None, offset=0.0):
        self.W, self.H = W, H
        self.content = Pyramid(to_lin(content))
        self.cscale = content.shape[1] / W              # content texels per display px
        self.top = top                                    # display px where the content starts
        self.offset = offset                              # content scroll (content texels)
        self.max_offset = max(0.0, content.shape[0] - (H - top) * self.cscale)
        self.overlay = Pyramid(to_lin(overlay)) if overlay is not None else None

    def shade(self, dx, dy, jac, aniso=6):
        """dx, dy: display px of the lit pixels; jac: (n,2,2) d(display px)/d(image px)."""
        out = None
        for which in ('content', 'overlay'):
            pyr = self.content if which == 'content' else self.overlay
            if pyr is None:
                continue
            k = self.cscale if which == 'content' else pyr.w / self.W
            tx = dx * k
            ty = ((dy - self.top) * k + self.offset) if which == 'content' else dy * k
            col = sample_aniso(pyr, tx, ty, jac * k, aniso)
            if which == 'content':
                out = col[:, :3]
            else:
                out = col[:, :3] + out * (1 - col[:, 3:4])
        return out


def sample_aniso(pyr, x, y, jac, n_max):
    ax = jac[:, :, 0]; ay = jac[:, :, 1]                 # texel-space derivative along image x / y
    lx = np.linalg.norm(ax, axis=1); ly = np.linalg.norm(ay, axis=1)
    major = np.maximum(lx, ly); minor = np.maximum(np.minimum(lx, ly), 1e-6)
    n = np.clip(np.ceil(major / minor), 1, n_max).astype(np.int32)
    lod = np.log2(np.maximum(major / n, 1e-6))
    dirv = np.where((lx >= ly)[:, None], ax, ay)
    out = np.zeros((x.shape[0], pyr.levels[0].shape[2]), np.float32)
    for N in np.unique(n):
        sel = n == N
        acc = 0
        for i in range(N):
            t = (i + 0.5) / N - 0.5
            acc = acc + pyr.sample(x[sel] + dirv[sel, 0] * t, y[sel] + dirv[sel, 1] * t, lod[sel])
        out[sel] = acc / N
    return out


def jacobian(du, dv, W, H):
    """d(display px)/d(image px) from the per-pixel display coordinates (NaN = not this screen); uses the
    valid forward or backward neighbour so screen edges don't blow up the footprint."""
    X = du * W; Y = dv * H
    def d(a, axis):
        f = np.full(a.shape, np.nan, np.float32); b = np.full(a.shape, np.nan, np.float32)
        if axis == 1:
            f[:, :-1] = a[:, 1:] - a[:, :-1]; b[:, 1:] = a[:, 1:] - a[:, :-1]
        else:
            f[:-1] = a[1:] - a[:-1]; b[1:] = a[1:] - a[:-1]
        r = np.where(np.isnan(f), b, f)
        return np.nan_to_num(r)
    J = np.stack([np.stack([d(X, 1), d(X, 0)], -1), np.stack([d(Y, 1), d(Y, 0)], -1)], -2)   # (H,W,2,2): [tex axis][img axis]
    return J


# ------------------------------------------------------------------ compositing
def load_template(name):
    tdir = os.path.join(TPL, name)
    meta = json.load(open(os.path.join(tdir, 'meta.json')))
    return tdir, meta


def pastel(hex_color, light=0.86, min_sat=0.42):
    """Brand pastel: keep the hue, HSL lightness ~0.86, saturation >= min_sat (near-greys stay a soft warm grey)."""
    import colorsys
    r, g, b = [v / 255.0 for v in hex2rgb(hex_color)]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    if s < 0.12 or max(r, g, b) - min(r, g, b) < 0.06:
        return colorsys.hls_to_rgb(0.08, 0.88, 0.06)
    return colorsys.hls_to_rgb(h, light, max(min_sat, min(s, 0.75)))


_BG = {}


def background(h, w, color_srgb, kind='flat'):
    """Display-space background (sRGB 0..1) with a soft vertical light falloff (cached)."""
    key = (h, w, tuple(round(float(v), 5) for v in color_srgb), kind)
    if key not in _BG:
        _BG.clear(); _BG[key] = _background(h, w, color_srgb, kind)
    return _BG[key]


_BGL = {}


def background_lin(h, w, color_srgb):
    key = (h, w, tuple(round(float(v), 5) for v in color_srgb))
    if key not in _BGL:
        _BGL.clear(); _BGL[key] = eotf(background(h, w, color_srgb)).astype(np.float32)
    return _BGL[key]


def _background(h, w, color_srgb, kind='flat'):
    c = np.array(color_srgb, np.float32)
    yy = np.linspace(-1, 1, h, dtype=np.float32)[:, None, None]
    xx = np.linspace(-1, 1, w, dtype=np.float32)[None, :, None]
    if kind == 'flat':
        g = 1.0 + 0.035 * (-yy) - 0.02 * (xx ** 2)
    else:
        g = np.ones((1, 1, 1), np.float32)
    return np.clip(c[None, None, :] * g, 0, 1) * np.ones((h, w, 1), np.float32)


def composite(fr, displays, bg_srgb=None, exposure=0.0, look='AgX - Medium High Contrast', refl=0.25,
              env_tint=None, aniso=6, vignette=0.0):
    """fr: Frame; displays: {role: Display}; bg_srgb: (r,g,b) 0..1 for transparent templates.
    Returns uint8 HxWx3."""
    H, Wd = fr.H, fr.Wd
    k = 2.0 ** exposure
    other = fr.base_other.copy()
    if env_tint is not None:
        other += fr.env * (np.array(env_tint, np.float32) - 1.0)
    a = fr.alpha if fr.meta.get('transparent') else np.ones((H, Wd), np.float32)
    ou = other / np.maximum(a, 1e-4)[..., None]
    disp = agx(np.maximum(ou, 0) * k, look)
    tex = np.zeros((H, Wd, 3), np.float32)
    m = np.clip(fr.W, 0, 1)
    for sid, s in fr.screens.items():
        d = displays.get(s['role'])
        if d is None:
            continue
        lit = s['lit']
        J = jacobian(s['du'], s['dv'], d.W, d.H)
        jac = J[lit]
        dx = s['du'][lit] * d.W; dy = s['dv'][lit] * d.H
        tex[lit] = d.shade(dx, dy, jac, aniso)
    Wn = np.where(m > 1e-4, fr.W / np.maximum(m, 1e-4), 0)[..., None]
    scr_disp = oetf(tex * Wn + refl * np.maximum(ou, 0))
    dev = m[..., None] * scr_disp + (1 - m[..., None]) * disp
    if vignette > 0:
        yy, xx = np.mgrid[0:H, 0:Wd]
        dd = np.sqrt(((xx - Wd / 2) / (Wd / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / np.sqrt(2)
        dev = dev * (1 - vignette * np.clip(dd, 0, 1) ** 2.2)[..., None]
    if fr.meta.get('transparent'):
        bg = background(H, Wd, bg_srgb)
        bg_lin = eotf(bg) * (fr.sc if fr.sc is not None else 1.0)
        out = a[..., None] * dev + (1 - a[..., None]) * oetf(bg_lin)
    else:
        out = dev
    return (np.clip(out, 0, 1) * 255 + 0.5).astype(np.uint8)


# ================================================================== prepared frames (stills + video)
def prepare(fr, exposure=0.0, look='AgX - Medium High Contrast', vignette=0.0):
    """Project-independent part of a frame: developed device layer, screen pixel geometry."""
    H, Wd = fr.H, fr.Wd
    transparent = bool(fr.meta.get('transparent'))
    a = fr.alpha if transparent else np.ones((H, Wd), np.float32)
    ou = np.maximum(fr.base_other / np.maximum(a, 1e-4)[..., None], 0)
    dev = agx(ou * 2.0 ** exposure, look)
    m = np.clip(fr.W, 0, 1)
    vg = None
    if vignette > 0:
        yy, xx = np.mgrid[0:H, 0:Wd]
        dd = np.sqrt(((xx - Wd / 2) / (Wd / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / np.sqrt(2)
        vg = (1 - vignette * np.clip(dd, 0, 1) ** 2.2).astype(np.float32)
    P = dict(H=H, W=Wd, transparent=transparent, dev=dev.astype(np.float32), vg=vg)
    if transparent:
        P['a'] = a.astype(np.float32)
        P['sc'] = (fr.sc if fr.sc is not None else np.ones((H, Wd, 3), np.float32)).astype(np.float32)
    scr = []
    for sid, s in fr.screens.items():
        lit = s['lit']
        idx = np.flatnonzero(lit)
        if not idx.size:
            continue
        g = fr.meta['glass'][s['type']]
        px = g['px']
        J = jacobian(s['du'], s['dv'], px[0], px[1])          # in display px of the device's native px size
        mm = m.reshape(-1)[idx]
        Wn = (fr.W.reshape(-1)[idx] / np.maximum(mm, 1e-4)).astype(np.float32)
        scr.append(dict(role=s['role'], type=s['type'], idx=idx, du=s['du'].reshape(-1)[idx], dv=s['dv'].reshape(-1)[idx],
                        jac=J.reshape(-1, 2, 2)[idx] / np.array([px[0], px[1]], np.float32)[:, None],
                        m=mm.astype(np.float32), Wn=Wn, ou=ou.reshape(-1, 3)[idx].astype(np.float32)))
    P['screens'] = scr
    return P


def finish(P, displays, bg_srgb=None, refl=0.25, aniso=6):
    """Project part: screen contents + background. Returns uint8 HxWx3."""
    H, Wd = P['H'], P['W']
    out = P['dev'].reshape(-1, 3).copy()
    for s in P['screens']:
        d = displays.get(s['role'])
        if d is None:
            continue
        jac = s['jac'] * np.array([d.W, d.H], np.float32)[:, None]
        tex = d.shade(s['du'] * d.W, s['dv'] * d.H, jac, aniso)
        sd = oetf(tex * s['Wn'][:, None] + refl * s['ou'])
        mm = s['m'][:, None]
        out[s['idx']] = mm * sd + (1 - mm) * out[s['idx']]
    out = out.reshape(H, Wd, 3)
    if P['vg'] is not None:
        out = out * P['vg'][..., None]
    if P['transparent']:
        bgl = oetf(background_lin(H, Wd, bg_srgb) * P['sc'])
        a = P['a'][..., None]
        out = a * out + (1 - a) * bgl
    return (np.clip(out, 0, 1) * 255 + 0.5).astype(np.uint8)


def save_prepared(P, path):
    d = {k: v for k, v in P.items() if k not in ('screens',) and v is not None and not isinstance(v, (bool, int))}
    for k in ('dev', 'sc'):
        if k in d: d[k] = d[k].astype(np.float16)
    meta = dict(H=P['H'], W=P['W'], transparent=P['transparent'], has_vg=P['vg'] is not None,
                screens=[dict(role=s['role'], type=s['type']) for s in P['screens']])
    small = dict(idx=np.int32, jac=np.float16, m=np.float16, Wn=np.float16, ou=np.float16)
    if 'a' in d: d['a'] = d['a'].astype(np.float16)
    for i, s in enumerate(P['screens']):
        for k in ('idx', 'du', 'dv', 'jac', 'm', 'Wn', 'ou'):
            d[f's{i}_{k}'] = s[k].astype(small[k]) if k in small else s[k]
    np.savez(path, **d)
    with open(path + '.json', 'w') as f:
        json.dump(meta, f)


def load_prepared(path):
    meta = json.load(open(path + '.json'))
    z = np.load(path if path.endswith('.npz') else path + '.npz')
    P = dict(H=meta['H'], W=meta['W'], transparent=meta['transparent'], dev=z['dev'].astype(np.float32),
             vg=z['vg'] if meta['has_vg'] else None)
    if meta['transparent']:
        P['a'] = z['a'].astype(np.float32); P['sc'] = z['sc'].astype(np.float32)
    P['screens'] = []
    for i, s in enumerate(meta['screens']):
        e = dict(s)
        for k in ('idx', 'du', 'dv', 'jac', 'm', 'Wn', 'ou'):
            e[k] = z[f's{i}_{k}']
            if k != 'idx': e[k] = e[k].astype(np.float32)
        P['screens'].append(e)
    return P
