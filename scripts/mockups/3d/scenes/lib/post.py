"""Develop a Cycles multilayer EXR: AgX (+look, exposure) for the scene, exact sRGB for lit screens.
The AOV 'scr' (lit display / self-lit UI mask, anti-aliased, follows DOF) blends the two."""
import os, numpy as np
import OpenEXR, Imath
import PyOpenColorIO as OCIO
from PIL import Image

_CFG = None
def _proc(look, view='AgX'):
    global _CFG
    if _CFG is None:
        import bpy
        cfgp = os.path.join(bpy.utils.system_resource('DATAFILES'), 'colormanagement', 'config.ocio')
        _CFG = OCIO.Config.CreateFromFile(cfgp)
    g = OCIO.GroupTransform()
    if look and look != 'None':
        g.appendTransform(OCIO.LookTransform(src='Linear Rec.709', dst='Linear Rec.709', looks=look))
    g.appendTransform(OCIO.DisplayViewTransform(src='Linear Rec.709', display='sRGB', view=view))
    return _CFG.getProcessor(g).getDefaultCPUProcessor()

def _read(path, chans='RGB'):
    f = OpenEXR.InputFile(path)
    hd = f.header(); dw = hd['dataWindow']
    W, H = dw.max.x - dw.min.x + 1, dw.max.y - dw.min.y + 1
    FT = Imath.PixelType(Imath.PixelType.FLOAT)
    return np.dstack([np.frombuffer(f.channel(c, FT), dtype=np.float32).reshape(H, W) for c in chans])

def read_exr(path):
    """path: <base>_rgb.exr (mask read from the sibling <base>_scr.exr when present)."""
    rgb = _read(path, 'RGB')
    sp = path.replace('_rgb', '_scr')
    m = _read(sp, 'R')[..., 0] if (sp != path and os.path.exists(sp)) else np.zeros(rgb.shape[:2], np.float32)
    return rgb, m

def read_emit(path):
    ep = path.replace('_rgb', '_emit')
    return _read(ep, 'RGB') if (ep != path and os.path.exists(ep)) else None

def srgb_oetf(x):
    x = np.clip(x, 0, 1)
    return np.where(x <= 0.0031308, x * 12.92, 1.055 * np.power(x, 1 / 2.4) - 0.055)

def develop(exr, out_base, look='AgX - Medium High Contrast', exposure=0.0, screen_exact=True, webp=True, q=88,
            out_w=None, grain=0.6, png=True, vignette=0.0, sat=1.0, mask_gain=1.0, refl=0.25):
    """refl: how much of the glass reflection stays on lit screens (needs the Emit pass). A 4 % Fresnel
    reflection of a bright studio lifts #d60072's green channel from 0 to ~40 in sRGB; 0.25 keeps a hint of
    glass while magenta and whites stay within a few levels of the capture."""
    rgb, m = read_exr(exr)
    emit = read_emit(exr)
    lin = rgb * (2.0 ** exposure)
    p = _proc(look)
    agx = np.ascontiguousarray(lin.astype(np.float32).copy())
    p.applyRGB(agx)
    if sat != 1.0:
        lum = (agx * np.array([0.2126, 0.7152, 0.0722], np.float32)).sum(-1, keepdims=True)
        agx = lum + (agx - lum) * sat
    out = agx
    if screen_exact:
        scr_lin = rgb if emit is None else np.maximum(emit + refl * (rgb - emit), 0.0)
        std = srgb_oetf(scr_lin)
        mm = np.clip(m * mask_gain, 0, 1)[..., None]
        out = agx * (1 - mm) + std * mm
    if vignette > 0:
        H, W = out.shape[:2]
        yy, xx = np.mgrid[0:H, 0:W]
        d = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / np.sqrt(2)
        out = out * (1 - vignette * np.clip(d, 0, 1) ** 2.2)[..., None]
    out = np.clip(out, 0, 1) * 255.0
    if grain > 0:
        rng = np.random.default_rng(7)
        out = out + (rng.random(out.shape[:2]) - rng.random(out.shape[:2]))[..., None] * grain
    img = Image.fromarray(np.clip(out + 0.5, 0, 255).astype(np.uint8), 'RGB')
    if out_w and out_w != img.width:
        img = img.resize((out_w, round(img.height * out_w / img.width)), Image.LANCZOS)
    if png: img.save(out_base + '.png')
    if webp: img.save(out_base + '.webp', quality=q, method=6)
    return img

if __name__ == '__main__':
    import sys, json
    kw = json.loads(sys.argv[3]) if len(sys.argv) > 3 else {}
    develop(sys.argv[1], sys.argv[2], **kw)
