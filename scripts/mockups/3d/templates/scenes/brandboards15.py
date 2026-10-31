"""brandboards15 — round 15: brand presentation boards built only from real assets.

  python brandboards15.py build [slugs|all]     r15/r3d/boards/<slug>/{logos,colours}.png (2400x1350) + booklet pages
  python brandboards15.py sheet                 r15/r3d/sheet-boards.jpg

Sources, nothing else:
  - the case's vector logo: public/media/cases/<slug>/logo.svg and logo-white.svg (+ the BRAND kit's logo-dark.svg for a
    logo whose own file is white);
  - the verified palette r14/palette/palettes.json (fullBleed / uiColor / logo colours / accents / neutrals);
  - the typeface only when the live site's computed CSS named it (r13/brand/<slug>/fonts.json); a specimen ("Aa") only
    when the font file itself is available (Google Fonts, OFL), otherwise just the name.
Cases with branding services whose only logo is a raster under 1000 px are skipped (listed in skipped.json).
Layout after M7's own brandbook pages (r15/inbox/good-sparked-brandsheet.png): logo on white, on the brand colour,
on black and on a light neutral; colour swatches with hex codes; no patterns, mock print or taglines.
"""
import sys, os, json, subprocess, re, colorsys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
from PIL import Image, ImageDraw, ImageFont

S = os.environ.get('M7_SCRATCH') or os.path.dirname(os.path.dirname(HERE))     # work root (r13 / r14 / r15 live here)
ROOT = os.environ.get('M7_ROOT') or '/home/user/M7'
CASES = os.path.join(ROOT, 'public', 'media', 'cases')
KIT = os.path.join(S, 'r13', 'brand')
FONTS = os.path.join(KIT, '_fonts')
PAL = json.load(open(os.path.join(S, 'r14', 'palette', 'palettes.json')))
OUT = os.path.join(S, 'r15', 'r3d', 'boards')
LCACHE = os.path.join(S, 'r15', 'r3d', 'logos')
RASTER = os.path.join(S, 'r13', 'scenes', 'logo_raster.js')
INTER = '/usr/share/fonts/opentype/inter/Inter-{}.otf'
BRANDING = {'branding-rebranding', 'grafisch-ontwerp-print'}
INK = (24, 24, 24); MUTED = (120, 120, 118); BLACK = (21, 21, 21)
# CSS family names as the site serves them -> how the typeface is called (only cosmetic: spacing / capitals)
FONT_NAME = {'good-times': 'Good Times', 'museo-sans-rounded': 'Museo Sans Rounded', 'Circularstd': 'Circular Std',
             'Circularpro': 'Circular Pro', 'Circularpro book': 'Circular Pro Book', 'Sf display': 'SF Display',
             'SuisseIntl-Medium': 'Suisse Int’l', 'SuisseIntl-Regular': 'Suisse Int’l', 'tt-autonomous-mono': 'TT Autonomous Mono',
             'contralto-big': 'Contralto Big', 'magistral': 'Magistral', 'Graphikweb': 'Graphik', 'OmniWide': 'Omni Wide'}
SYSTEM = {'-apple-system', 'system-ui', 'sans-serif', 'serif', 'Arial', 'Helvetica', 'Helvetica Neue'}


def inter(w, size):
    return ImageFont.truetype(INTER.format(w), size)


def hexrgb(h):
    h = h.lstrip('#'); return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def lum(c):
    c = np.asarray(c, np.float64) / 255.0
    c = np.where(c <= 0.03928, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
    return c[..., 0] * 0.2126 + c[..., 1] * 0.7152 + c[..., 2] * 0.0722


def contrast(a, b):
    la, lb = lum(a), lum(b)
    return (np.maximum(la, lb) + 0.05) / (np.minimum(la, lb) + 0.05)


# ------------------------------------------------------------------------------------------------ assets
def logo_files(slug):
    d = os.path.join(CASES, slug); k = os.path.join(KIT, slug)
    out = {}
    for key, cands in (('full', [os.path.join(d, 'logo.svg')]), ('white', [os.path.join(d, 'logo-white.svg'), os.path.join(k, 'logo-white.svg')]),
                       ('dark', [os.path.join(k, 'logo-dark.svg')])):
        f = next((c for c in cands if os.path.exists(c)), None)
        if f: out[key] = f
    return out


def raster_all(jobs):
    """jobs: [(svg, png)] -> rasterised (2400 px long side) in one browser session, only what is missing / stale."""
    todo = [(a, b) for a, b in jobs if not os.path.exists(b) or os.path.getmtime(b) < os.path.getmtime(a)]
    if not todo: return
    args = [x for ab in todo for x in ab]
    for i in range(0, len(args), 40):
        subprocess.run(['node', RASTER] + args[i:i + 40], check=True, capture_output=True, timeout=600)


def load_logo(png):
    im = Image.open(png).convert('RGBA')
    bb = im.split()[3].point(lambda v: 255 if v > 8 else 0).getbbox()
    return im.crop(bb) if bb else im


def logos(slug):
    os.makedirs(LCACHE, exist_ok=True)
    fs = logo_files(slug)
    jobs = [(f, os.path.join(LCACHE, f'{slug}-{k}.png')) for k, f in fs.items()]
    raster_all(jobs)
    out = {}
    for k, f in fs.items():
        im = load_logo(os.path.join(LCACHE, f'{slug}-{k}.png'))
        a = np.asarray(im).astype(np.float32); op = a[..., 3] > 128
        if not op.any(): continue
        rgb = a[op][:, :3]
        if k == 'full' and (rgb.min(-1) > 225).mean() > 0.9: k = 'white'          # the 'logo.svg' is the white version
        if k in out: continue
        out[k] = im
    return out


def skip_reason(slug):
    d = os.path.join(CASES, slug)
    if not os.path.isdir(d): return 'no case media folder'
    fs = logo_files(slug)
    if 'full' in fs or ('white' in fs and 'dark' in fs): return None
    png = [os.path.join(d, f) for f in ('logo.png', 'logo-white.png') if os.path.exists(os.path.join(d, f))]
    if png:
        w = max(max(load_logo(p).size) for p in png)
        return f'only a raster logo ({w} px wide), renders soft' if w < 1000 else None
    return 'no logo file'


def logo_ink(im):
    """Colour pixels of a logo (opaque, RGB) for contrast tests."""
    a = np.asarray(im).astype(np.float32); op = a[..., 3] > 160
    return a[op][:, :3]


def readable(L, bg, prefer=('full', 'dark', 'white')):
    """A logo version that reads on bg (3:1 or more for 85% of its ink), or None."""
    for k in prefer:
        if k in L and float((contrast(logo_ink(L[k]), np.array(bg, np.float64)) >= 3.0).mean()) >= 0.85: return L[k]
    return None


def pick_logo(L, bg, prefer=('full', 'dark', 'white')):
    """The logo version that reads on bg: the first in `prefer` whose ink is at 3:1 or more for 85% of its pixels,
    else the one with the best contrast."""
    best, score = None, -1
    for k in prefer:
        if k not in L: continue
        cr = contrast(logo_ink(L[k]), np.array(bg, np.float64))
        good = float((cr >= 3.0).mean())
        if good >= 0.85: return L[k]
        if good > score: best, score = L[k], good
    return best


def colours(slug):
    p = PAL.get(slug) or {}
    seq = [p.get('fullBleed'), p.get('uiColor')] + list((p.get('logo') or {}).get('colors') or []) + list(p.get('accent') or [])
    seq += [(p.get('neutrals') or {}).get('dark'), (p.get('neutrals') or {}).get('light')]
    out = []
    for c in seq:
        if not (isinstance(c, str) and re.fullmatch(r'#[0-9A-Fa-f]{6}', c)): continue
        rgb = np.array(hexrgb(c), np.float64)
        if any(np.linalg.norm(rgb - np.array(hexrgb(o), np.float64)) < 22 for o in out): continue
        out.append(c.upper())
    return out[:6]


def brand_field(slug):
    """The colour of the 'on the brand colour' panel: the verified full-bleed field, else the brand colour (uiColor),
    as long as it is a real colour (not near-white / near-black)."""
    p = PAL.get(slug) or {}
    for c in (p.get('fullBleed'), p.get('uiColor')):
        if isinstance(c, str) and re.fullmatch(r'#[0-9A-Fa-f]{6}', c):
            l = float(lum(np.array(hexrgb(c), np.float64)))
            if 0.012 < l < 0.85: return c.upper()
    return None


def typefaces(slug):
    """[(role, display name, ttf path or None, weight)] from the live site's computed CSS."""
    f = os.path.join(KIT, slug, 'fonts.json')
    if not os.path.exists(f): return []
    j = json.load(open(f))
    if 'computed' not in (j.get('source') or ''): return []
    out = []
    for role in ('heading', 'body'):
        fam = j.get(role)
        if not fam or fam in SYSTEM or fam.startswith('-'): continue
        name = FONT_NAME.get(fam, fam)
        if any(name == o[1] for o in out): out[0] = (out[0][0] + ' + ' + role, out[0][1], out[0][2], out[0][3]); continue
        w = str((j.get('detail') or {}).get(role + '_weight') or ('700' if role == 'heading' else '400'))
        d = os.path.join(FONTS, fam.replace(' ', ''))
        ttf = None
        if os.path.isdir(d):
            fs = sorted(x for x in os.listdir(d) if x.endswith('.ttf'))
            want = f"{fam.replace(' ', '')}-{w}.ttf"
            ttf = os.path.join(d, want) if want in fs else (os.path.join(d, fs[0]) if fs else None)
            if ttf and want not in fs:      # nearest weight
                ws = [(abs(int(re.sub(r'\D', '', x.split('-')[-1]) or 400) - int(re.sub(r'\D', '', w) or 400)), x) for x in fs]
                ttf = os.path.join(d, min(ws)[1])
        out.append((role, name, ttf, w))
    return out


def client(slug):
    return (PAL.get(slug) or {}).get('client') or slug.replace('-', ' ').title()


# ------------------------------------------------------------------------------------------------ drawing
def paste_logo(c, im, box, maxw, maxh):
    x0, y0, x1, y1 = box
    s = min(maxw / im.width, maxh / im.height)
    lg = im.resize((max(1, round(im.width * s)), max(1, round(im.height * s))), Image.LANCZOS)
    c.alpha_composite(lg, (round((x0 + x1 - lg.width) / 2), round((y0 + y1 - lg.height) / 2)))


def spaced(d, xy, text, font, fill, track=0.14):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += d.textlength(ch, font=font) + font.size * track
    return x


def header(d, W, H, x, label, fill=INK, s=1.0):
    f = inter('Bold', round(26 * s)); g = inter('Medium', round(21 * s))
    xx = spaced(d, (x, round(72 * s)), 'M7', f, fill, 0.02)
    d.line([(xx + 14 * s, round(74 * s)), (xx + 14 * s, round(100 * s))], fill=fill, width=max(1, round(2 * s)))
    spaced(d, (xx + 30 * s, round(75 * s)), 'BRAND AGENCY', g, fill)
    spaced(d, (x, H - round(98 * s)), label.upper(), g, fill)


def board_logos(slug, L, W=2400, H=1350):
    """Logo variants: on white (large), on the brand colour, on black, on a light neutral."""
    s = W / 2400
    c = Image.new('RGBA', (W, H), (255, 255, 255, 255)); d = ImageDraw.Draw(c)
    half = W // 2
    field = brand_field(slug)
    p = PAL.get(slug) or {}
    light = (p.get('neutrals') or {}).get('light') or '#F2F2F0'
    if lum(np.array(hexrgb(light), np.float64)) > 0.97: light = '#F1F1EF'
    panels = []
    main = (255, 255, 255)
    if readable(L, main) is None:
        # a logo drawn for a dark / brand field (e.g. TeamTV's white 'team'): never put it on white
        dk = (p.get('neutrals') or {}).get('dark') or '#1D1E21'
        main = hexrgb(field) if field else BLACK
        d.rectangle([0, 0, half, H], fill=main)
        panels.append(((half, 0, W, H // 2), hexrgb(dk) if field else hexrgb('#2A2A2C'), ('full', 'white', 'dark')))
        panels.append(((half, H // 2, W, H), BLACK if field else hexrgb('#3A3A3D'), ('full', 'white', 'dark')))
    elif field:
        panels.append(((half, 0, W, H // 2), hexrgb(field), ('white', 'full', 'dark')))
        panels.append(((half, H // 2, half + half // 2, H), BLACK, ('white', 'full', 'dark')))
        panels.append(((half + half // 2, H // 2, W, H), hexrgb(light), ('full', 'dark', 'white')))
    else:            # no brand field: black (large) and a light neutral
        panels.append(((half, 0, W, H // 2), BLACK, ('white', 'full', 'dark')))
        panels.append(((half, H // 2, W, H), hexrgb(light), ('full', 'dark', 'white')))
    for (x0, y0, x1, y1), bg, pref in panels:
        d.rectangle([x0, y0, x1, y1], fill=bg)
        lg = pick_logo(L, bg, pref)
        pw, ph = x1 - x0, y1 - y0
        paste_logo(c, lg, (x0, y0, x1, y1), pw * (0.5 if pw > half * 0.7 else 0.62), ph * 0.34)
    lg = pick_logo(L, main, ('full', 'dark', 'white'))
    paste_logo(c, lg, (0, 0, half, H), half * 0.62, H * 0.30)
    tc = INK if lum(np.array(main, np.float64)) > 0.4 else (245, 245, 243)
    header(d, W, H, round(110 * s), f'{client(slug)}  |  Logo variants', fill=tc, s=s)
    return c.convert('RGB')


def board_colours(slug, W=2400, H=1350):
    """Colour swatches with hex / RGB, and the typeface(s) the live site uses."""
    s = W / 2400
    c = Image.new('RGB', (W, H), (255, 255, 255)); d = ImageDraw.Draw(c)
    cols = colours(slug); tf = typefaces(slug)
    x0, x1 = round(110 * s), (round(W * 0.60) if tf else W - round(110 * s))
    y0, y1 = round(190 * s), H - round(190 * s)
    n = max(1, len(cols)); gap = round(18 * s)
    wsw = (x1 - x0 - gap * (n - 1)) / n
    fh = inter('SemiBold', round(30 * s)); fr = inter('Medium', round(19 * s))
    for i, col in enumerate(cols):
        rgb = hexrgb(col); a = round(x0 + i * (wsw + gap)); b = round(a + wsw)
        d.rectangle([a, y0, b, y1], fill=rgb)
        if lum(np.array(rgb, np.float64)) > 0.9: d.rectangle([a, y0, b, y1], outline=(222, 222, 220), width=max(1, round(2 * s)))
        tc = (255, 255, 255) if contrast(np.array(rgb, np.float64), np.array((255, 255, 255), np.float64)) >= 3 else INK
        d.text((a + round(26 * s), y1 - round(92 * s)), col, font=fh, fill=tc)
        d.text((a + round(26 * s), y1 - round(50 * s)), 'RGB {} {} {}'.format(*rgb), font=fr, fill=tc)
    if tf:
        tx = round(W * 0.60) + round(110 * s); ty = y0
        lab = inter('Medium', round(21 * s))
        spaced(d, (tx, ty), 'TYPEFACE' if len(tf) == 1 else 'TYPEFACES', lab, MUTED)
        ty += round(70 * s)
        for role, name, ttf, w in tf:
            if ttf:
                big = ImageFont.truetype(ttf, round((250 if len(tf) == 1 else 170) * s))
                d.text((tx - round(8 * s), ty), 'Aa', font=big, fill=INK)
                ty += round((300 if len(tf) == 1 else 200) * s)
                nf = ImageFont.truetype(ttf, round(54 * s))
            else:
                nf = inter('SemiBold', round(54 * s))
            d.text((tx, ty), name, font=nf, fill=INK); ty += round(76 * s)
            spaced(d, (tx, ty), ('HEADINGS AND TEXT' if '+' in role else ('HEADINGS' if role == 'heading' else 'TEXT')), lab, MUTED)
            ty += round(90 * s)
    header(d, W, H, round(110 * s), f'{client(slug)}  |  Colours' + ('  &  type' if tf else ''), s=s)
    return c


def build(slug):
    why = skip_reason(slug)
    if why: return slug, None, why
    L = logos(slug)
    if not L: return slug, None, 'no logo file'
    o = os.path.join(OUT, slug); os.makedirs(o, exist_ok=True)
    board_logos(slug, L).save(os.path.join(o, 'logos.png'))
    board_colours(slug).save(os.path.join(o, 'colours.png'))
    # booklet: A5 landscape pages (210 x 148 mm) + the cover (logo on the brand colour, or on black)
    board_logos(slug, L, 2100, 1480).save(os.path.join(o, 'page-logos.png'))
    board_colours(slug, 2100, 1480).save(os.path.join(o, 'page-colours.png'))
    fb = brand_field(slug); bg = hexrgb(fb) if fb else BLACK
    cv = Image.new('RGBA', (2100, 1480), bg + (255,))
    paste_logo(cv, pick_logo(L, bg, ('white', 'full', 'dark')), (0, 0, 2100, 1480), 900, 330)
    cv.convert('RGB').save(os.path.join(o, 'page-cover.png'))
    return slug, o, None


def branding_cases():
    import batch13 as B13
    cs = B13.cases()
    return [s for s, c in cs.items() if set(c['services']) & BRANDING]


def sheet():
    sl = sorted(d for d in os.listdir(OUT) if os.path.isdir(os.path.join(OUT, d)))
    cw, ch = 600, 338
    sh = Image.new('RGB', (cw * 2 + 30, len(sl) * (ch + 34) + 10), (30, 30, 32)); dr = ImageDraw.Draw(sh); F = inter('Medium', 15)
    for i, s in enumerate(sl):
        y = i * (ch + 34) + 6
        dr.text((10, y), s, font=F, fill=(230, 230, 230))
        for j, f in enumerate(('logos.png', 'colours.png')):
            im = Image.open(os.path.join(OUT, s, f)); im.thumbnail((cw, ch)); sh.paste(im, (10 + j * (cw + 10), y + 22))
    sh.save(os.path.join(S, 'r15', 'r3d', 'sheet-boards.jpg'), quality=84)


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'build':
        sel = branding_cases() if len(sys.argv) < 3 or sys.argv[2] == 'all' else sys.argv[2].split(',')
        res = [build(s) for s in sel]
        skipped = {s: w for s, o, w in res if w}
        json.dump(skipped, open(os.path.join(S, 'r15', 'r3d', 'skipped.json'), 'w'), indent=1)
        print('built', sum(1 for r in res if r[1]), 'skipped', skipped)
    elif cmd == 'sheet':
        sheet()
