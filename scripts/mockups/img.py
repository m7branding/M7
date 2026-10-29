#!/usr/bin/env python3
"""Beeldhulp voor de mockup-pipeline (Pillow + numpy). Aangeroepen door compose.mjs.

  python3 img.py <cmd>   met een JSON-opdracht op stdin, antwoord als JSON op stdout.

  analyze  {dir, files}                 → merkkleur, donker/licht, interessante uitsneden
  prep     {items:[{src,out,w,h,x,y,region}]} → exact voorgesneden schermbeelden (Lanczos)
  webp     {items:[{src,out,q}]}        → WebP (+ bytes)
  long     {items:[{src,out,w,maxh,q}]} → lange screenshots voor de device-hero
  sheet    {items:[path], out, cols}    → contactsheet (JPEG)
"""
import json
import os
import sys

import numpy as np
from PIL import Image, ImageFilter

Image.MAX_IMAGE_PIXELS = None


def load(p):
    im = Image.open(p)
    if im.mode != "RGB":
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im.convert("RGBA"), mask=im.convert("RGBA").split()[3])
        im = bg
    return im


def lum(rgb):
    r, g, b = [c / 255 for c in rgb]
    return float(0.2126 * r + 0.7152 * g + 0.0722 * b)


# ---------------------------------------------------------------- analyse
def brand_color(im):
    """Verzadigde accentkleur op de hero (fallback als sites.json geen brandColor heeft).
    Wortel van het aantal pixels, zodat een klein maar fel logo/knop het kan winnen van een grote foto."""
    small = im.resize((240, max(1, int(240 * im.height / im.width))), Image.BILINEAR)
    hsv = np.asarray(small.convert("HSV"), dtype=np.int32).reshape(-1, 3)
    rgb = np.asarray(small, dtype=np.int32).reshape(-1, 3)
    m = (hsv[:, 1] > 110) & (hsv[:, 2] > 60)
    if m.sum() < 30:
        return None
    bins = hsv[m, 0] // 10
    best = None
    for b in np.unique(bins):
        sel = bins == b
        n = int(sel.sum())
        if n < 15:
            continue
        S = hsv[m][sel, 1].mean() / 255
        V = hsv[m][sel, 2].mean() / 255
        sc = n ** 0.5 * S * S * V
        if not best or sc > best[0]:
            best = (sc, np.median(rgb[m][sel], axis=0).astype(int), S * V)
    if not best or best[2] < 0.22:  # modderige tinten: liever neutraal
        return None
    return "#%02x%02x%02x" % tuple(best[1])


def sections(im, scale):
    """Rij-analyse van een lange screenshot: energie per rij en de rijen waar een nieuwe sectie begint
    (de achtergrondkleur verspringt over de volle breedte, of inhoud begint na een rustige band)."""
    small = im.resize((max(1, im.width // scale), max(1, im.height // scale)), Image.BILINEAR)
    a = np.asarray(small, dtype=np.float32)
    L = a.mean(axis=2)
    gx = np.abs(np.diff(L, axis=1, prepend=L[:, :1]))
    gy = np.abs(np.diff(L, axis=0, prepend=L[:1, :]))
    row = np.minimum(gx + gy, 60.0).mean(axis=1)
    mean = a.mean(axis=1)
    std = a.std(axis=1).mean(axis=1)
    jump = np.abs(np.diff(mean, axis=0, prepend=mean[:1])).sum(axis=1)
    calm = std < 6
    starts = set()
    n = len(row)
    for y in range(2, n - 2):
        # harde kleurwissel tussen twee egale rijen: grens tussen secties
        if jump[y] > 24 and calm[y] and calm[y - 1]:
            starts.add(y)
    return row, sorted(starts)


def window_rows(im, win_h, avoid_top, avoid_bottom, count, min_gap):
    """Kies `count` verticale uitsneden (hoogte win_h) met veel inhoud, niet overlappend,
    bij voorkeur beginnend op een sectiegrens."""
    H = im.height
    if H < win_h + avoid_top * 0.5:
        return []
    scale = 4
    row, starts = sections(im, scale)
    flat = (row < 2.0).astype(np.float32)
    n = len(row)
    wh = max(1, win_h // scale)
    c1 = np.concatenate([[0], np.cumsum(row)])
    c2 = np.concatenate([[0], np.cumsum(flat)])
    lo = int(min(avoid_top, max(0, H - avoid_bottom - win_h)) // scale)
    hi = int(max(lo, (H - avoid_bottom - win_h) // scale))
    sset = set(starts)
    cands = []
    for y in range(lo, hi + 1):
        if y + wh > n:
            break
        if y not in sset and y % 6:
            continue
        m = (c1[y + wh] - c1[y]) / wh
        f = (c2[y + wh] - c2[y]) / wh
        sc = m * (1 - 0.85 * f) * (1.3 if y in sset else 1.0)
        cands.append((sc, y))
    cands.sort(reverse=True)
    out = []
    for sc, y in cands:
        if all(abs(y - o) * scale >= min_gap for o in out):
            out.append(y)
        if len(out) >= count:
            break
    res = []
    for y in sorted(out):
        best = y
        if y not in sset:
            # niet midden in een regel tekst beginnen: terug naar de dichtstbijzijnde rustige rij
            for k in range(y, max(lo, y - 40), -1):
                if row[k] < 1.2:
                    best = k
                    break
        res.append(int(best * scale))
    return res


def text_window(im, ww, wh):
    """Uitsnede (ww×wh) met de meeste 'tekst': (bijna) wit of zwart direct naast een harde rand.
    Foto's tellen daardoor nauwelijks mee; kop, logo, navigatie en knoppen wel."""
    scale = 4
    small = im.resize((im.width // scale, im.height // scale), Image.BILINEAR)
    L = np.asarray(small.convert("L"), dtype=np.float32) / 255
    g = np.maximum(np.abs(np.diff(L, axis=1, prepend=L[:, :1])), np.abs(np.diff(L, axis=0, prepend=L[:1, :])))
    t = (((L > 0.86) | (L < 0.1)) & (g > 0.28)).astype(np.float32)
    H, W = t.shape
    w, h = min(W, ww // scale), min(H, wh // scale)
    ii = np.pad(t.cumsum(0).cumsum(1), ((1, 0), (1, 0)))
    best = (-1, 0, 0)
    for y in range(0, max(1, H - h + 1), 4):
        for x in range(0, max(1, W - w + 1), 4):
            sc = ii[y + h, x + w] - ii[y, x + w] - ii[y + h, x] + ii[y, x]
            sc *= 1 + 0.12 * (1 - y / max(1, H - h))
            if sc > best[0]:
                best = (sc, x, y)
    return [best[1] * scale, best[2] * scale, w * scale, h * scale]


def cmd_analyze(job):
    d = job["dir"]
    out = {"files": {}}
    for f in sorted(os.listdir(d)):
        if f.endswith(".png"):
            with Image.open(os.path.join(d, f)) as im:
                out["files"][f[:-4]] = list(im.size)
    hd = os.path.join(d, "hero-desktop.png")
    if os.path.exists(hd):
        im = load(hd)
        a = np.asarray(im.resize((160, 100)), dtype=np.float32) / 255
        L = (0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]).mean()
        out["heroLum"] = float(L)
        out["brand"] = brand_color(im)
        dw = job.get("detail", [1600, 1200])
        out["detail"] = text_window(im, dw[0], dw[1])
    fm = os.path.join(d, "full-mobile.png")
    if os.path.exists(fm):
        im = load(fm)
        wh = int(job.get("mobileWin", 1584))
        first = int(job.get("mobileFirst", 1688))  # eerste schermhoogte (zit al in hero-mobile)
        out["mobileY"] = window_rows(im, wh, avoid_top=first, avoid_bottom=int(im.height * 0.07), count=3, min_gap=int(wh * 0.9))
        cw = int(job.get("cardWin", 1180))
        out["mobileCardY"] = window_rows(im, cw, avoid_top=first, avoid_bottom=int(im.height * 0.08), count=1, min_gap=cw)
        out["fullMobileH"] = im.height
    fd = os.path.join(d, "full-desktop.png")
    if os.path.exists(fd):
        im = load(fd)
        out["fullDesktopH"] = im.height
        dh = int(job.get("deskWin", 810))
        out["desktopY"] = window_rows(im, dh, avoid_top=int(job.get("deskFirst", 900)), avoid_bottom=int(im.height * 0.08), count=2, min_gap=dh)
    if not out.get("brand"):
        hm = os.path.join(d, "hero-mobile.png")
        if os.path.exists(hm):
            out["brand"] = brand_color(load(hm))
    return out


# ---------------------------------------------------------------- prep
_cache = {}


def src_img(p):
    if p not in _cache:
        _cache.clear()
        _cache[p] = load(p)
    return _cache[p]


def cmd_prep(job):
    res = []
    for it in sorted(job["items"], key=lambda i: i["src"]):
        im = src_img(it["src"])
        W, H = im.size
        w, h = max(1, int(round(it["w"]))), max(1, int(round(it["h"])))
        rx, ry, rw, rh = it.get("region") or [0, it.get("y", 0), W, H - it.get("y", 0)]
        rw = min(rw, W - rx)
        rh = min(rh, H - ry)
        # "cover" binnen de regio: breedte vullen, bovenkant aanhouden; is de regio te laag, dan op hoogte en midden
        s = w / rw
        if rh * s < h - 0.5:
            s = h / rh
        cw, ch = min(W, w / s), min(H, h / s)
        cx = min(max(0, rx + (rw - cw) / 2), W - cw)
        cy = min(max(0, ry), H - ch)
        box = (cx, cy, cx + cw, cy + ch)
        crop = im.resize((w, h), Image.LANCZOS, box=box, reducing_gap=3.0)
        if s < 0.8:
            crop = crop.filter(ImageFilter.UnsharpMask(radius=0.6, percent=35, threshold=2))
        os.makedirs(os.path.dirname(it["out"]), exist_ok=True)
        crop.save(it["out"], compress_level=1)
        a = np.asarray(crop, dtype=np.float32)
        top = a[: max(2, h // 120)].reshape(-1, 3).mean(axis=0)
        bot = a[-max(4, h // 30):].reshape(-1, 3).mean(axis=0)
        res.append({"out": it["out"], "top": [int(v) for v in top], "topLum": lum(top), "botLum": lum(bot)})
    return res


# ---------------------------------------------------------------- export
def cmd_webp(job):
    res = []
    for it in job["items"]:
        im = load(it["src"])
        if it.get("resize"):
            im = im.resize(tuple(it["resize"]), Image.LANCZOS)
        os.makedirs(os.path.dirname(it["out"]), exist_ok=True)
        im.save(it["out"], "WEBP", quality=int(it.get("q", 80)), method=6)
        res.append({"out": it["out"], "bytes": os.path.getsize(it["out"]), "size": list(im.size)})
    return res


def cmd_long(job):
    res = []
    for it in job["items"]:
        im = load(it["src"])
        w = int(it["w"])
        if im.width != w:
            im = im.resize((w, int(round(im.height * w / im.width))), Image.LANCZOS)
        if im.height > it["maxh"]:
            im = im.crop((0, 0, w, int(it["maxh"])))
        os.makedirs(os.path.dirname(it["out"]), exist_ok=True)
        im.save(it["out"], "WEBP", quality=int(it.get("q", 72)), method=6)
        res.append({"out": it["out"], "bytes": os.path.getsize(it["out"]), "size": list(im.size)})
    return res


def cmd_sheet(job):
    cols = int(job.get("cols", 4))
    cw = int(job.get("cell", 600))
    items = [p for p in job["items"] if os.path.exists(p)]
    cells = []
    for p in items:
        im = load(p)
        im.thumbnail((cw, cw * 2), Image.LANCZOS)
        cells.append(im)
    rows = [cells[i : i + cols] for i in range(0, len(cells), cols)]
    gap = 16
    H = sum(max(c.height for c in r) for r in rows) + gap * (len(rows) + 1)
    W = cols * cw + gap * (cols + 1)
    sheet = Image.new("RGB", (W, H), (40, 41, 44))
    y = gap
    for r in rows:
        x = gap
        for c in r:
            sheet.paste(c, (x, y))
            x += cw + gap
        y += max(c.height for c in r) + gap
    sheet.save(job["out"], quality=86)
    return {"out": job["out"], "size": [W, H]}


if __name__ == "__main__":
    cmd = sys.argv[1]
    job = json.load(sys.stdin)
    print(json.dumps(globals()["cmd_" + cmd](job)))
