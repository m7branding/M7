"""proj — per-project screen content for the templates: content images (captures) + static overlays
(iOS status bar / Safari pill, macOS menu bar + browser toolbar, iPadOS status + toolbar)."""
import os, sys, json, re
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
HERE = os.path.dirname(os.path.abspath(__file__)); R12 = os.path.dirname(HERE); SCR = os.path.dirname(R12)
_R3D = os.environ.get('R3D_ROOT') or (os.path.join(SCR, 'r11') if os.path.isdir(os.path.join(SCR, 'r11')) else SCR)
sys.path.insert(0, os.path.join(_R3D, 'scenes'))
import screens as SC                       # noqa: E402  (r11 helpers: mac_toolbar, status_icons, font)
from lib.spec import IPHONE17PRO, MBP14, STUDIO, IPADPRO13   # noqa: E402
from tcomp import Display                  # noqa: E402

Image.MAX_IMAGE_PIXELS = None
PROJECTS = os.environ.get('R12_PROJECTS') or os.path.join(R12, 'projects.json')
META_DIRS = [os.path.join(SCR, 'r10', 'u', 'meta')] + ([os.environ['R12_META']] if os.environ.get('R12_META') else [])


def projects():
    return {p['slug']: p for p in json.load(open(PROJECTS))}


def domain(p):
    """Domain for the URL fields, from the capture meta when we have it."""
    if p.get('url'):
        return re.sub(r'^https?://(www\.)?', '', p['url']).split('/')[0]
    for m in [os.path.join(d, p['slug'] + '.json') for d in META_DIRS] + [os.path.join(p['captures'], 'meta.json')]:
        if os.path.exists(m):
            try:
                d = json.load(open(m))
                for s in d.get('shots', []):
                    u = (s.get('meta') or {}).get('finalUrl')
                    if u:
                        return re.sub(r'^https?://(www\.)?', '', u).split('/')[0]
                if d.get('url'):
                    return re.sub(r'^https?://(www\.)?', '', d['url']).split('/')[0]
            except Exception:
                pass
    return p['slug'] + '.nl'


def load(p, name):
    f = os.path.join(p['captures'], name)
    return Image.open(f).convert('RGB') if os.path.exists(f) else None


CAPX = os.path.join(R12, 'capx')
# projects whose standard captures are missing: map to their tool pages (same site)
OVERRIDE = {
    'buitenstate-tools': {'hero-desktop': 'page-zoekers-voor-mijn-woning-desktop.png', 'full-desktop': 'page-woonprofiel-desktop.png',
                          'hero-mobile': 'page-zoekers-voor-mijn-woning-mobile.png', 'full-mobile': 'page-woonprofiel-mobile.png'},
    'steddion-tools': {'full-desktop': 'page-ems-vergelijker-desktop.png', 'hero-mobile': os.path.join(CAPX, 'steddion-tools', 'hero-mobile.png'),
                       'full-mobile': os.path.join(CAPX, 'steddion-tools', 'full-mobile.png')},
}


def captures(p):
    """Content images with fallbacks (some projects lack a capture)."""
    c = {k: load(p, f'{k}.png') for k in ('hero-desktop', 'full-desktop', 'hero-mobile', 'full-mobile', 'hero-tablet')}
    for k, f in OVERRIDE.get(p['slug'], {}).items():
        f = f if os.path.isabs(f) else os.path.join(p['captures'], f)
        if os.path.exists(f):
            im = Image.open(f).convert('RGB')
            if k == 'full-desktop' and im.width > 1440:
                im = im.resize((1440, round(im.height * 1440 / im.width)), Image.LANCZOS)
            c[k] = im
    if c['hero-desktop'] is None and c['full-desktop'] is not None:
        fd = c['full-desktop']; c['hero-desktop'] = fd.crop((0, 0, fd.width, int(fd.width * 0.625)))
    if c['full-desktop'] is None and c['hero-desktop'] is not None:
        c['full-desktop'] = c['hero-desktop']
    if c['hero-mobile'] is None and c['full-mobile'] is not None:
        fm = c['full-mobile']; c['hero-mobile'] = fm.crop((0, 0, fm.width, int(fm.width * 2.164)))
    if c['full-mobile'] is None and c['hero-mobile'] is not None:
        c['full-mobile'] = c['hero-mobile']
    if c['hero-tablet'] is None and c['hero-desktop'] is not None:
        hd = c['hero-desktop']; c['hero-tablet'] = hd.resize((2360, int(hd.height * 2360 / hd.width))).crop((0, 0, 2360, 1640))
    return c


def top_color(img, rows=6):
    a = np.asarray(img.crop((0, 0, img.width, rows))).reshape(-1, 3)
    return tuple(int(v) for v in np.median(a, 0))


def lum(c):
    return (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255


# ------------------------------------------------------------------ overlays
def iphone_overlay(top_rgb, url):
    W, H = IPHONE17PRO['px']; sb = IPHONE17PRO['status_h']; s = 3
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
    d.rectangle([0, 0, W, sb], fill=top_rgb + (255,))
    fg = (16, 16, 18) if lum(top_rgb) > 0.55 else (250, 250, 250)
    d.text((W * 0.165, 31 * s), '9:41', font=SC.font('SemiBold', 17 * s), fill=fg + (255,), anchor='mm')
    SC.status_icons(d, W - 26 * s, 31 * s, s, fg)
    # floating Safari address pill (frosted look approximated with translucent white + soft shadow)
    pw, ph = 362 * s, 48 * s; px0 = (W - pw) // 2; py0 = H - 34 * s - ph
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle([px0, py0 + 8, px0 + pw, py0 + ph + 8], radius=ph / 2, fill=(0, 0, 0, 60))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    ov = Image.alpha_composite(ov, shadow); d = ImageDraw.Draw(ov)
    d.rounded_rectangle([px0, py0, px0 + pw, py0 + ph], radius=ph / 2, fill=(248, 248, 250, 236), outline=(255, 255, 255, 255), width=2)
    d.text((W / 2, py0 + ph / 2), url, font=SC.font('Medium', 15.5 * s), fill=(24, 24, 26, 255), anchor='mm')
    d.text((px0 + 24 * s, py0 + ph / 2 - 3), 'aA', font=SC.font('SemiBold', 14 * s), fill=(24, 24, 26, 255), anchor='lm')
    cx = px0 + pw - 26 * s; cy = py0 + ph / 2
    d.arc([cx - 8 * s, cy - 8 * s, cx + 8 * s, cy + 8 * s], 300, 250, fill=(24, 24, 26, 255), width=int(2 * s))
    d.polygon([(cx + 1 * s, cy - 11 * s), (cx + 6 * s, cy - 8 * s), (cx + 1 * s, cy - 4.5 * s)], fill=(24, 24, 26, 255))
    d.rounded_rectangle([W / 2 - 67 * s, H - 13 * s, W / 2 + 67 * s, H - 8 * s], radius=2.5 * s, fill=(12, 12, 14, 255))
    return ov, sb


def mac_overlay(url, k=1.0):
    W, H = MBP14['px']; mb, tb = MBP14['menubar_px'], MBP14['toolbar_px']
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov.paste(Image.new('RGBA', (W, mb), (0, 0, 0, 255)), (0, 0))
    ov.paste(SC.mac_toolbar(W, tb, 2, url).convert('RGBA'), (0, mb))
    return ov, mb + tb


def studio_overlay(url):
    W, H = STUDIO['px']; mb, tb = STUDIO['menubar_px'], STUDIO['toolbar_px']; s = 2
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
    d.rectangle([0, 0, W, mb], fill=(232, 232, 235, 255))
    d.text((W - 16 * s, mb / 2), 'do 30 okt  9:41', font=SC.font('Medium', 13 * s), fill=(30, 30, 32, 255), anchor='rm')
    ov.paste(SC.mac_toolbar(W, tb, 2, url).convert('RGBA'), (0, mb))
    return ov, mb + tb


def ipad_overlay(url):
    W, H = IPADPRO13['px']; sb, tb = IPADPRO13['status_px'], IPADPRO13['toolbar_px']; s = 2
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
    d.rectangle([0, 0, W, sb], fill=(246, 246, 246, 255))
    d.text((22 * s, sb / 2 + 2), '9:41  do 30 okt', font=SC.font('SemiBold', 12 * s), fill=(20, 20, 22, 255), anchor='lm')
    SC.status_icons(d, W - 20 * s, sb / 2 + 2, 0.85 * s, (20, 20, 22))
    bar = SC.mac_toolbar(W, tb, 2, url)
    ImageDraw.Draw(bar).rectangle([0, 0, 82 * s, tb - 3], fill=(246, 246, 246))
    ov.paste(bar.convert('RGBA'), (0, sb))
    return ov, sb + tb


# ------------------------------------------------------------------ displays per role
def make_display(dtype, content, url, offset_frac=0.0, max_w=None):
    """content: PIL RGB capture (scaled to the display width by the sampler). offset_frac: start the
    content this many display-heights further down (clamped)."""
    if max_w and content.width > max_w:
        content = content.resize((max_w, round(content.height * max_w / content.width)), Image.LANCZOS)
    if dtype == 'iphone':
        ov, top = iphone_overlay(top_color(content), url); W, H = IPHONE17PRO['px']
    elif dtype == 'mac':
        ov, top = mac_overlay(url); W, H = MBP14['px']
    elif dtype == 'studio':
        ov, top = studio_overlay(url); W, H = STUDIO['px']
    else:
        ov, top = ipad_overlay(url); W, H = IPADPRO13['px']
    d = Display(W, H, np.asarray(content), top, np.asarray(ov))
    d.offset = min(d.max_offset, offset_frac * (H - top) * d.cscale)
    return d


ROLE_SOURCES = {
    # role: (device type, still capture, video capture, offset in display heights)
    'phone_a': ('iphone', 'hero-mobile', 'full-mobile', 0.0),
    'phone_b': ('iphone', 'full-mobile', 'full-mobile', 1.0),
    'tablet': ('ipad', 'hero-tablet', 'full-desktop', 0.0),
    'tablet_b': ('ipad', 'full-desktop', 'full-desktop', 2.2),
    'tablet_c': ('ipad', 'full-desktop', 'full-desktop', 1.0),
    'mac': ('mac', 'hero-desktop', 'full-desktop', 0.0),
    'studio': ('studio', 'hero-desktop', 'full-desktop', 0.0),
}


def displays_for(p, roles, video=False, caps=None):
    caps = caps or captures(p)
    url = domain(p)
    out = {}
    for r in roles:
        dtype, still, vid, off = ROLE_SOURCES[r]
        src = caps[vid if video else still]
        if src is None:
            continue
        out[r] = make_display(dtype, src, url, off)
    return out
