"""Recolour ai-waves.webp per Aurora palette (luminance -> palette ramp in OKLab, keeps local hue/chroma nuance).
usage: python3 -I recolor.py <src.webp> <outdir> [--sheet sheet.png]"""
import sys, os
import numpy as np
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from oklab import rgb_to_oklab, oklab_to_lin, lin_to_srgb, hexrgb

# ramps: (t, hex) with t = normalised OKLab lightness of the source (0 = deepest shadow, 1 = brightest rim)
RAMPS = {
    "brand":   [(0.00, "#021417"), (0.22, "#043238"), (0.42, "#06555a"), (0.62, "#0b8a80"), (0.82, "#19c9a0"), (1.00, "#7dffd8")],
    "teal":    [(0.00, "#011416"), (0.22, "#033338"), (0.42, "#06585e"), (0.62, "#0a8f92"), (0.82, "#20d2d4"), (1.00, "#9dffff")],
    "emerald": [(0.00, "#01140a"), (0.22, "#033318"), (0.42, "#075a2a"), (0.62, "#0c8f3e"), (0.82, "#25cf5f"), (1.00, "#9dffbb")],
    "sunset":  [(0.00, "#1a0802"), (0.22, "#3d1205"), (0.42, "#6e2108"), (0.62, "#a8400c"), (0.82, "#e07a1c"), (1.00, "#ffd27a")],
    "night":   [(0.00, "#03050f"), (0.22, "#0a1030"), (0.42, "#141f5c"), (0.62, "#22389a"), (0.82, "#3e62e0"), (1.00, "#a9bcff")],
}
L0, L1 = 0.23, 0.66      # source lightness range
H0 = 292.0               # source mean hue (deg)

def ramp_lab(ramp, t):
    ts = np.array([s[0] for s in ramp]); labs = np.array([rgb_to_oklab(hexrgb(s[1])) for s in ramp])
    out = np.empty(t.shape + (3,))
    for k in range(3):
        out[..., k] = np.interp(t, ts, labs[:, k])
    return out

def gamut_clip(lab):
    # reduce chroma until in sRGB gamut (per pixel, bisection)
    L = lab[..., 0:1]; ab = lab[..., 1:3]
    lo = np.zeros(L.shape); hi = np.ones(L.shape)
    lin = oklab_to_lin(lab)
    ok = np.all((lin >= -1e-4) & (lin <= 1 + 1e-4), axis=-1, keepdims=True)
    for _ in range(18):
        mid = (lo + hi) / 2
        lin = oklab_to_lin(np.concatenate([L, ab * mid], -1))
        good = np.all((lin >= -1e-4) & (lin <= 1 + 1e-4), axis=-1, keepdims=True)
        lo = np.where(good, mid, lo); hi = np.where(good, hi, mid)
    s = np.where(ok, 1.0, lo)
    return np.concatenate([L, ab * s], -1)

def recolor(src, ramp, hue_k=0.8, chroma_k=0.35):
    lab = rgb_to_oklab(src)
    L = lab[..., 0]; C = np.hypot(lab[..., 1], lab[..., 2]); h = np.degrees(np.arctan2(lab[..., 2], lab[..., 1]))
    t = np.clip((L - L0) / (L1 - L0), 0, 1)
    tgt = ramp_lab(ramp, t)
    # keep the source's local nuance: hue deviation -> small rotation, chroma deviation -> gentle scale
    dh = np.radians(((h - H0 + 180) % 360 - 180) * hue_k)
    # expected source chroma at this lightness (smooth fit) -> relative chroma
    cexp = np.interp(L, [0.2, 0.3, 0.4, 0.5, 0.6, 0.7], [0.09, 0.18, 0.2, 0.25, 0.25, 0.22])
    cs = np.clip((C / cexp), 0.4, 1.6) ** chroma_k
    a, b = tgt[..., 1], tgt[..., 2]
    ca, sa = np.cos(dh), np.sin(dh)
    a2 = (a * ca - b * sa) * cs; b2 = (a * sa + b * ca) * cs
    out = gamut_clip(np.stack([tgt[..., 0], a2, b2], -1))
    return lin_to_srgb(oklab_to_lin(out))

if __name__ == "__main__":
    src_p, outdir = sys.argv[1], sys.argv[2]
    sheet = sys.argv[sys.argv.index("--sheet") + 1] if "--sheet" in sys.argv else None
    only = sys.argv[sys.argv.index("--only") + 1].split(",") if "--only" in sys.argv else list(RAMPS)
    from PIL import ImageFilter
    blur = float(sys.argv[sys.argv.index("--blur") + 1]) if "--blur" in sys.argv else 1.6
    # the source is a smooth render: a light blur removes webp block noise that a steep ramp would amplify
    src = np.asarray(Image.open(src_p).convert("RGB").filter(ImageFilter.GaussianBlur(blur)), dtype=np.float64) / 255
    os.makedirs(outdir, exist_ok=True)
    tiles = [Image.open(src_p).convert("RGB").resize((450, 450), Image.LANCZOS)]
    for name in only:
        rgb = recolor(src, RAMPS[name])
        img = Image.fromarray(np.round(rgb * 255).astype(np.uint8))
        p = os.path.join(outdir, f"ai-waves-{name}.webp")
        img.save(p, "WEBP", quality=86, method=6)
        print(name, os.path.getsize(p))
        tiles.append(img.resize((450, 450), Image.LANCZOS))
    if sheet:
        W = Image.new("RGB", (450 * len(tiles), 450))
        for i, t in enumerate(tiles):
            W.paste(t, (450 * i, 0))
        W.save(sheet)
