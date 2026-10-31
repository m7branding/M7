"""designs — minimal, truthful print designs for the branding templates (PIL).

Only the client's real logo, brand colour(s) and URL are used — nothing invented (no names, phone numbers,
slogans or body copy). A design is returned as tcomp.PrintDesign (linear albedo + optional relief).
"""
import os, colorsys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import tcomp as C

FONT = '/usr/share/fonts/opentype/inter/Inter-%s.otf'
PAPER = (244, 243, 239)
INK = (28, 29, 32)


def font(w, size):
    return ImageFont.truetype(FONT % w, max(6, int(size)))


def hex2rgb(h):
    h = h.lstrip('#'); return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def darkened(hexc, l=0.19, smax=0.6):
    """Deep, calm version of a brand colour (not pastel): HSL lightness ~0.19, saturation capped."""
    r, g, b = [v / 255 for v in hex2rgb(hexc)]
    h, ll, s = colorsys.rgb_to_hls(r, g, b)
    if s < 0.08:
        return (30, 31, 34)
    return tuple(int(round(v * 255)) for v in colorsys.hls_to_rgb(h, l, min(s, smax)))


def lum(c):
    return (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255


def dark_for(hexc, l=0.19, smax=0.6):
    """Darkened brand colour; bright yellows / limes go olive when darkened -> charcoal instead."""
    rgb = hex2rgb(hexc)
    h, ll, s = colorsys.rgb_to_hls(*[v / 255 for v in rgb])
    if lum(rgb) > 0.5 and s > 0.4 and 0.10 < h < 0.30:
        return (29, 30, 33)
    return darkened(hexc, l, smax)


def tint_dark(hexc):
    """Albedo for a lit, recolourable set surface in the 'brand' family: lit, it reads as a deep calm brand tone."""
    return dark_for(hexc, l=0.125, smax=0.5)


def backdrop_dark(hexc):
    """Base colour for a brand-dark backdrop behind transparent templates (the light pool lifts it)."""
    return dark_for(hexc, l=0.15, smax=0.5)


import re as _re
# hosting / staging domains: never printed on stationery (a client's own domain only)
_STAGING = _re.compile(r'(\.(webflow\.(io|com)|vercel\.app|netlify\.app|herokuapp\.com|pages\.dev|github\.io|wixsite\.com|'
                       r'myshopify\.com|framer\.(app|website)|webstudio\.is|squarespace\.com|wpengine(powered)?\.com|'
                       r'azurewebsites\.net|onrender\.com|fly\.dev|surge\.sh|ngrok\.(io|app))$)'
                       r'|^(staging|stage|dev|test|acc|preview|beta)[.-]|localhost')


def print_url(u):
    """The domain to print on a design, or '' when it is missing or a hosting / staging domain."""
    d = (u or '').strip().lower()
    d = _re.sub(r'^[a-z]+://', '', d)
    d = _re.sub(r'^www\.', '', d).split('/')[0].split('?')[0]
    return '' if (not d or _STAGING.search(d)) else d


class Brand:
    """Everything a design may use. mono: L mask (logo shape, 255 = ink); rgba: full-colour logo (optional)."""

    def __init__(self, slug, color, url, mono, rgba=None, captures=None):
        self.slug, self.color, self.url = slug, color, print_url(url)        # central guard: no staging domains
        self.mono = mono
        self.rgba = rgba
        self.caps = captures or {}
        self.imagery = []               # the client's own photos (BRAND kit imagery), paths
        self.rgb = hex2rgb(color)
        h, l, s = colorsys.rgb_to_hls(*[v / 255 for v in self.rgb])
        self.bright = lum(self.rgb) > 0.5 and s > 0.4
        # darkened brand colour; bright yellows / limes go olive when darkened -> charcoal with the logo in brand colour
        self.dark = (29, 30, 33) if (self.bright and 0.10 < h < 0.30) else darkened(color)
        self.on_dark = self.rgb if (self.bright and self.dark == (29, 30, 33)) else (246, 246, 244)
        # print fill: the real brand colour (grey-ish colours -> charcoal); logo white on it, or ink when it is light
        self.fill = self.rgb if s >= 0.08 else (29, 30, 33)
        self.on_fill = (250, 250, 248) if lum(self.fill) < 0.6 else INK
        # ink colour for the logo on light paper: the brand colour if it is dark enough, else near-black
        self.ink = self.rgb if lum(self.rgb) < 0.55 else INK

    def photo(self):
        """The client's own photo from their site (BRAND kit), for the photo poster; None if there is none."""
        for f in self.imagery:
            try:
                im = Image.open(f).convert('RGB')
            except Exception:
                continue
            if min(im.size) >= 700:
                return im
        return None

    # ---------------------------------------------------------------- helpers
    def logo(self, width, color=None, full=False):
        """Logo image (RGBA) scaled to width px. full=True uses the full-colour logo when available."""
        if full and self.rgba is not None:
            im = self.rgba
        else:
            m = self.mono
            im = Image.new('RGBA', m.size, (color or INK) + (0,)); im.putalpha(m)
        hgt = max(1, round(im.height * width / im.width))
        return im.resize((int(width), hgt), Image.LANCZOS)

    def fit_logo(self, box_w, box_h, color=None, full=False):
        ar = self.mono.width / self.mono.height
        w = min(box_w, box_h * ar)
        return self.logo(w, color, full)


def canvas(w_mm, h_mm, ppm, bg):
    return Image.new('RGB', (int(w_mm * ppm), int(h_mm * ppm)), bg)


def paste_center(c, im, cx, cy):
    c.paste(im, (int(cx - im.width / 2), int(cy - im.height / 2)), im)


def url_text(d, xy, b, size, color, anchor='ls'):
    d.text(xy, b.url, font=font('Medium', size), fill=color, anchor=anchor)


# ---------------------------------------------------------------------------- designs
def card_front(b, w=85, h=55, ppm=14):
    c = canvas(w, h, ppm, b.fill)
    lg = b.fit_logo(c.width * 0.55, c.height * 0.36, color=b.on_fill)
    paste_center(c, lg, c.width / 2, c.height / 2)
    return C.PrintDesign(np.asarray(c))


def card_back(b, w=85, h=55, ppm=14):
    c = canvas(w, h, ppm, PAPER); d = ImageDraw.Draw(c)
    lg = b.fit_logo(c.width * 0.30, c.height * 0.20, color=b.ink)
    c.paste(lg, (int(8 * ppm), int(8 * ppm)), lg)
    url_text(d, (8 * ppm, c.height - 8 * ppm), b, 2.6 * ppm, (90, 92, 98))
    d.rectangle([0, c.height - int(2.2 * ppm), c.width, c.height], fill=b.rgb)
    return C.PrintDesign(np.asarray(c))


def letter(b, w=210, h=297, ppm=6):
    c = canvas(w, h, ppm, PAPER); d = ImageDraw.Draw(c)
    lg = b.fit_logo(52 * ppm, 16 * ppm, color=b.ink)
    c.paste(lg, (int(20 * ppm), int(20 * ppm)), lg)
    d.rectangle([int(20 * ppm), int(h * ppm - 22 * ppm), int(w * ppm - 20 * ppm), int(h * ppm - 21.6 * ppm)], fill=b.rgb)
    url_text(d, (20 * ppm, h * ppm - 14 * ppm), b, 3.2 * ppm, (110, 112, 118))
    return C.PrintDesign(np.asarray(c))


def envelope(b, w=220, h=110, ppm=6):
    c = canvas(w, h, ppm, PAPER)
    lg = b.fit_logo(40 * ppm, 12 * ppm, color=b.ink)
    c.paste(lg, (int(14 * ppm), int(12 * ppm)), lg)
    return C.PrintDesign(np.asarray(c))


def poster(b, w=500, h=700, ppm=3, variant=0):
    """variant 0: logo on darkened brand colour; 1: the site's own hero image with the logo; 2: logo on paper."""
    photo = b.photo() if variant == 1 else None
    if variant == 1 and photo is None and b.caps.get('hero-desktop') is None:
        variant = 2                     # no photo and no site: the logo on paper instead of a duplicate poster
    if variant == 1:
        hero = photo if photo is not None else b.caps['hero-desktop']
        c = canvas(w, h, ppm, b.dark)
        ar = c.width / c.height
        if hero.width / hero.height > ar:
            cw = int(hero.height * ar); x0 = (hero.width - cw) // 2 if photo is not None else 0
            src = hero.crop((x0, 0, x0 + cw, hero.height))
        else:
            chh = int(hero.width / ar); src = hero.crop((0, 0, hero.width, chh)) if photo is None else \
                hero.crop((0, (hero.height - chh) // 2, hero.width, (hero.height - chh) // 2 + chh))
        c.paste(src.resize(c.size, Image.LANCZOS), (0, 0))
        band = Image.new('RGB', (c.width, int(c.height * 0.24)), b.dark)
        c.paste(band, (0, c.height - band.height))
        lg = b.fit_logo(c.width * 0.42, band.height * 0.42, color=b.on_dark)
        paste_center(c, lg, c.width / 2, c.height - band.height / 2)
    elif variant == 2:
        c = canvas(w, h, ppm, PAPER)
        lg = b.fit_logo(c.width * 0.56, c.height * 0.22, color=b.ink)
        paste_center(c, lg, c.width / 2, c.height * 0.45)
        d = ImageDraw.Draw(c); url_text(d, (c.width / 2, c.height * 0.9), b, 11 * ppm, (110, 112, 118), anchor='ms')
    else:
        c = canvas(w, h, ppm, b.fill)
        lg = b.fit_logo(c.width * 0.6, c.height * 0.24, color=b.on_fill)
        paste_center(c, lg, c.width / 2, c.height * 0.46)
        d = ImageDraw.Draw(c); url_text(d, (c.width / 2, c.height * 0.9), b, 11 * ppm, tuple(int(0.8 * v + 0.2 * f) for v, f in zip(b.on_fill, b.fill)), anchor='ms')
    return C.PrintDesign(np.asarray(c))


def brochure_l(b, w=210, h=297, ppm=5):
    c = canvas(w, h, ppm, b.fill)
    lg = b.fit_logo(c.width * 0.55, c.height * 0.16, color=b.on_fill)
    paste_center(c, lg, c.width / 2, c.height * 0.5)
    return C.PrintDesign(np.asarray(c))


def brochure_r(b, w=210, h=297, ppm=5):
    c = canvas(w, h, ppm, PAPER); d = ImageDraw.Draw(c)
    src = b.caps.get('full-desktop') or b.caps.get('hero-desktop')
    if src is not None:
        iw = int(c.width - 24 * ppm)
        crop = src.crop((0, 0, src.width, min(src.height, int(src.width * 1.05))))
        crop = crop.resize((iw, int(crop.height * iw / crop.width)), Image.LANCZOS)
        crop = crop.crop((0, 0, iw, min(crop.height, int(c.height * 0.62))))
        c.paste(crop, (int(12 * ppm), int(14 * ppm)))
    lg = b.fit_logo(40 * ppm, 11 * ppm, color=b.ink)
    c.paste(lg, (int(12 * ppm), int(c.height - 30 * ppm)), lg)
    url_text(d, (12 * ppm, c.height - 12 * ppm), b, 3.6 * ppm, (110, 112, 118))
    return C.PrintDesign(np.asarray(c))


def flag(b, w=600, h=1800, ppm=1.6):
    c = canvas(w, h, ppm, b.fill)
    lg = b.fit_logo(c.width * 0.72, c.height * 0.16, color=b.on_fill)
    paste_center(c, lg, c.width / 2, c.height * 0.36)
    return C.PrintDesign(np.asarray(c))


def aframe(b, w=600, h=840, ppm=2):
    c = canvas(w, h, ppm, b.dark); d = ImageDraw.Draw(c)
    lg = b.fit_logo(c.width * 0.7, c.height * 0.2, color=b.on_dark)
    paste_center(c, lg, c.width / 2, c.height * 0.42)
    url_text(d, (c.width / 2, c.height * 0.82), b, 26 * ppm, (210, 212, 216), anchor='ms')
    return C.PrintDesign(np.asarray(c))


def sticker(b, d_mm=70, ppm=12):
    s = int(d_mm * ppm)
    c = Image.new('RGB', (s, s), (250, 250, 248))
    lg = b.fit_logo(s * 0.68, s * 0.4, color=b.ink)
    paste_center(c, lg, s / 2, s / 2)
    return C.PrintDesign(np.asarray(c))


def mark(b, w=400, h=400, ppm=3, on_dark=True):
    c = canvas(w, h, ppm, b.dark if on_dark else PAPER)
    lg = b.fit_logo(c.width * 0.5, c.height * 0.3, color=(246, 246, 244) if on_dark else b.ink)
    paste_center(c, lg, c.width / 2, c.height / 2)
    return C.PrintDesign(np.asarray(c))


def _relief(b, c_size, box, blur=2.0):
    """Height map (0..1) of the logo placed in box (x0, y0, w, h) on a canvas of c_size."""
    h = Image.new('L', c_size, 0)
    lg = b.fit_logo(box[2], box[3], color=(255, 255, 255))
    h.paste(lg.split()[3], (int(box[0] + (box[2] - lg.width) / 2), int(box[1] + (box[3] - lg.height) / 2)))
    if blur: h = h.filter(ImageFilter.GaussianBlur(blur))
    return np.asarray(h, np.float32) / 255.0


def emboss_paper(b, w=210, h=210, ppm=6, deboss=False):
    """Blind emboss (no ink) of the logo on white paper."""
    c = canvas(w, h, ppm, PAPER)
    hgt = _relief(b, c.size, (c.width * 0.22, c.height * 0.3, c.width * 0.56, c.height * 0.4), blur=1.6 * ppm / 6)
    if deboss: hgt = -hgt
    return C.PrintDesign(np.asarray(c), height=hgt * 6.0, relief=1.0)


def wall_logo(b, w=2000, h=1300, ppm=1.2, light=(-0.7, -0.5), color=None, wall=(236, 235, 232)):
    """Raised (3D sign) logo on a wall: albedo with a baked soft cast shadow + relief for the edges.
    color: logo colour (None = same as the wall, i.e. tone-on-tone)."""
    c = canvas(w, h, ppm, (255, 255, 255))
    box = (c.width * 0.27, c.height * 0.30, c.width * 0.46, c.height * 0.30)
    hgt = _relief(b, c.size, box, blur=0.8)
    sh = Image.fromarray((hgt * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(10 * ppm))
    lx, ly = light; n = (lx * lx + ly * ly) ** 0.5
    off = (-lx / n * 14 * ppm, -ly / n * 14 * ppm)
    shadow = Image.new('L', c.size, 0); shadow.paste(sh, (int(off[0]), int(off[1])))
    s = np.asarray(shadow, np.float32) / 255.0
    alb = np.ones((c.height, c.width, 3), np.float32) * (np.array(wall, np.float32) / 255.0)
    alb *= (1.0 - 0.38 * s * (1.0 - hgt))[..., None]
    if color is not None:
        col = np.array(color, np.float32) / 255.0
        alb = alb * (1 - hgt[..., None]) + col * hgt[..., None]
    rgb = (np.clip(alb, 0, 1) * 255).astype(np.uint8)
    return C.PrintDesign(rgb, height=hgt * 10.0, relief=1.0, post=False)


# role name (as used in the templates) -> design
ROLES = {
    'card_front': card_front, 'card_back': card_back, 'letter': letter, 'envelope': envelope,
    'poster': lambda b, **k: poster(b, variant=0, **k), 'poster_photo': lambda b, **k: poster(b, variant=1, **k),
    'poster_paper': lambda b, **k: poster(b, variant=2, **k), 'brochure_l': brochure_l, 'brochure_r': brochure_r,
    'flag': flag, 'aframe': aframe, 'sticker': sticker, 'mark': mark, 'emboss_paper': emboss_paper,
    'wall_logo': lambda b, **k: wall_logo(b, **k), 'wall_mark': lambda b, **k: wall_logo(b, color=(246, 246, 244), wall=b.dark, **k),
}
# physical size (mm) of each design as laid out on its surface (w along the surface's u, h along v)
SIZES = {'card_front': (85, 55), 'card_back': (85, 55), 'letter': (210, 297), 'envelope': (220, 110), 'poster': (500, 700),
         'poster_photo': (500, 700), 'poster_paper': (500, 700), 'brochure_l': (210, 297), 'brochure_r': (210, 297),
         'flag': (600, 1800), 'aframe': (600, 840), 'mark': (400, 400), 'emboss_paper': (210, 210)}


def design_for(role, b, cache=None, swap=False):
    """swap=True: the surface is seen turned by 90 degrees, so the upright design is made at the swapped aspect
    (e.g. a business card that lies portrait in the picture gets a vertical card layout)."""
    key = (role, swap)
    if cache is not None and key in cache:
        return cache[key]
    base = role.split(':')[0].split('#')[0]
    fn = ROLES.get(base) or mark
    if swap and base in SIZES:
        w, h = SIZES[base]
        d = fn(b, w=h, h=w)
    else:
        d = fn(b)
    if cache is not None: cache[key] = d
    return d


def social_grid(b, W=1206, H=2622, top=162):
    """A clean grid of posts for a phone screen: tiles cropped from the client's own site imagery, a logo tile on
    the darkened brand colour. No third-party UI, no invented text (only the domain)."""
    c = Image.new('RGB', (W, H), (250, 250, 250)); d = ImageDraw.Draw(c)
    s = 3
    y = top + 30 * s
    av = 36 * s
    d.ellipse([22 * s, y, 22 * s + av, y + av], fill=b.dark)
    lg = b.fit_logo(av * 0.7, av * 0.5, color=b.on_dark); c.paste(lg, (int(22 * s + (av - lg.width) / 2), int(y + (av - lg.height) / 2)), lg)
    d.text((22 * s + av + 12 * s, y + av / 2), b.url, font=font('SemiBold', 15 * s), fill=(20, 20, 22), anchor='lm')
    y += av + 26 * s
    gap = 2 * s; tw = (W - 2 * gap) // 3
    srcs = [b.caps.get(k) for k in ('hero-desktop', 'full-desktop', 'full-mobile', 'hero-mobile') if b.caps.get(k) is not None]
    rng = np.random.default_rng(abs(hash(b.slug)) % (2 ** 31))
    i = 0
    while y < H:
        for col in range(3):
            x = col * (tw + gap)
            if i % 7 == 1:
                tile = Image.new('RGB', (tw, tw), b.dark)
                lg = b.fit_logo(tw * 0.6, tw * 0.3, color=b.on_dark); tile.paste(lg, ((tw - lg.width) // 2, (tw - lg.height) // 2), lg)
            elif srcs:
                src = srcs[i % len(srcs)]
                sz = int(min(src.width, src.height) * rng.uniform(0.35, 0.8))
                x0 = int(rng.uniform(0, max(1, src.width - sz))); y0 = int(rng.uniform(0, max(1, min(src.height, src.width * 2) - sz)))
                tile = src.crop((x0, y0, x0 + sz, y0 + sz)).resize((tw, tw), Image.LANCZOS)
            else:
                tile = Image.new('RGB', (tw, tw), b.rgb)
            c.paste(tile, (x, int(y)))
            i += 1
        y += tw + gap
    return c
