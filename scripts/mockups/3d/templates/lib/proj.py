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


# round 14: cases that were logo-only and now have CAPTURE's captures of their live site
R14_SYNTH = ('teamtv', 'taylor', 'architectenbureau-koppens')
_SYN = None


def projects():
    global _SYN
    d = {p['slug']: p for p in json.load(open(PROJECTS))}
    if _SYN is None:
        _SYN = {}
        for s in R14_SYNTH:
            q = r14_qa(s)
            if q and ((q.get('items') or {}).get('hero-desktop') or {}).get('ok'):
                _SYN[s] = dict(slug=s, captures=os.path.join(R14CAP, s), url=q.get('url'), r14=True,
                               n_screens={dv: len(q['items'].get('screens-' + dv) or []) for dv in ('desktop', 'tablet', 'mobile')})
    for s, p in _SYN.items():
        if s not in d: d[s] = dict(p)
    return d


def bar_url(p):
    """What the browser address bar of a device shows: None = no browser chrome (bare app screens), '' = an empty
    address field when the site only lives on a hosting / staging domain (same guard as print), else the domain."""
    if p.get('bare'): return None
    import designs as DS
    d = domain(p)
    return DS.print_url(d) or ''


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
    # the case's own (verified) URL
    cj = os.path.join(SCR, 'r13', 'cases.json')
    if os.path.exists(cj):
        try:
            u = next((c.get('url') for c in json.load(open(cj)) if c['slug'] == p['slug']), '')
            if u:
                return re.sub(r'^https?://(www\.)?', '', u).split('/')[0]
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
    for k in set((p.get('role_src') or {}).values()):         # extra named screens (e.g. app UI screens)
        c[k] = load(p, f'{k}.png')
    for k, f in OVERRIDE.get(p['slug'], {}).items():
        f = f if os.path.isabs(f) else os.path.join(p['captures'], f)
        if os.path.exists(f):
            im = Image.open(f).convert('RGB')
            if k == 'full-desktop' and im.width > 1440:
                im = im.resize((1440, round(im.height * 1440 / im.width)), Image.LANCZOS)
            c[k] = im
    if os.environ.get('R14_PHASE3') or os.environ.get('R14_RECAP'):
        r14_captures(p['slug'], c)
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


# ---------------------------------------------------------------- round 14: clean recaptures (CAPTURE agent)
R14CAP = os.path.join(SCR, 'r14', 'cap')
_R14REP = None


def r14_replace(slug):
    """Capture files the r14 audit (r14/cap/AUDIT.md) says to replace for this slug (broken or clipped screens)."""
    global _R14REP
    if _R14REP is None:
        _R14REP = {}
        f = os.path.join(R14CAP, 'AUDIT.md'); cur = None
        if os.path.exists(f):
            for line in open(f):
                m = re.match(r'^### (\S+)', line)
                if m: cur = m.group(1); continue
                if cur and line.startswith('Replace:'):
                    for name, note in re.findall(r'`([\w-]+)\.png([^`]*)`', line):
                        if 'from the client' not in note: _R14REP.setdefault(cur, set()).add(name)
    return _R14REP.get(slug, set()) | R14_EXTRA_REPLACE.get(slug, set())


def r14_qa(slug):
    f = os.path.join(R14CAP, slug, 'qa.json')
    return json.load(open(f)) if os.path.exists(f) else None


def r14_stack(files, width):
    """Clean viewport screens stacked into one tall 'page' + the row where each screen starts (content texels),
    so device slots at an offset show whole screens instead of a clipped full-page capture."""
    ims = []
    for f in files:
        im = _safe_open(f)
        if im is None: raise IOError(f)
        ims.append(im.resize((width, round(im.height * width / im.width)), Image.LANCZOS) if im.width != width else im)
    pad = int(0.12 * ims[-1].height)        # the last screen can sit at the top of a slightly taller display
    H = sum(i.height for i in ims) + pad; out = Image.new('RGB', (width, H)); y = 0; br = []
    for i in ims:
        out.paste(i, (0, y)); br.append(y); y += i.height
    last = np.asarray(ims[-1])[-1]                          # continue the bottom row of the last screen
    out.paste(Image.fromarray(np.repeat(last[None], pad, 0)), (0, y))
    return out, br


def _safe_open(f, tries=3):
    """CAPTURE may be rewriting a file while we read it: retry, then give up (keep the old capture)."""
    import time
    for i in range(tries):
        try:
            im = Image.open(f); im.load(); return im.convert('RGB')
        except Exception:
            time.sleep(2 + 3 * i)
    return None


def r14_captures(slug, c):
    try:
        rep = r14_replace(slug); qa = r14_qa(slug)
    except Exception:
        return
    if not rep or not qa: return
    d = os.path.join(R14CAP, slug); items = qa.get('items') or {}
    for k in ('hero-desktop', 'hero-tablet', 'hero-mobile'):
        f = os.path.join(d, k + '.png')
        if k in rep and (items.get(k) or {}).get('ok') and os.path.exists(f):
            im = _safe_open(f)
            if im is not None: c[k] = im
    br = c.setdefault('_breaks', {})
    for k, w in (('full-desktop', 1440), ('full-mobile', 780)):       # CAPTURE's clean stitched pages (r10 format)
        f = os.path.join(d, k + '.png')
        if k in rep and os.path.exists(f):
            im = _safe_open(f)
            if im is None: continue
            if im.width != w: im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            # scrolling video: one continuous clean page, but only when it is long enough for the deepest slot
            # (short pages would clamp several devices onto the same screen: those use the stacked screens)
            vh = 900 if k == 'full-desktop' else 1688
            if im.height >= 4.6 * vh: c.setdefault('_video', {})[k] = im
    for k, dev, w in (('full-desktop', 'desktop', 1440), ('full-mobile', 'mobile', 780), ('full-desktop', 'tablet', 1180)):
        if k not in rep: continue
        fs = [os.path.join(d, x['file']) for x in items.get('screens-' + dev) or []
              if not x.get('issues') and os.path.exists(os.path.join(d, x['file']))]
        if len(fs) < 2:
            if dev != 'tablet' and (c.get('_video') or {}).get(k) is not None: c[k] = c['_video'][k]
            continue
        key = 'full-tablet' if dev == 'tablet' else k
        try:
            c[key], br[key] = r14_stack(fs, w)
        except Exception:
            pass                                    # a screen is being rewritten: keep the old capture


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


def ipad_overlay(url, W=None, H=None):
    W, H = (W, H) if W else IPADPRO13['px']; sb, tb = IPADPRO13['status_px'], IPADPRO13['toolbar_px']; s = 2
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
    d.rectangle([0, 0, W, sb], fill=(246, 246, 246, 255))
    d.text((22 * s, sb / 2 + 2), '9:41  do 30 okt', font=SC.font('SemiBold', 12 * s), fill=(20, 20, 22, 255), anchor='lm')
    SC.status_icons(d, W - 20 * s, sb / 2 + 2, 0.85 * s, (20, 20, 22))
    bar = SC.mac_toolbar(W, tb, 2, url)
    ImageDraw.Draw(bar).rectangle([0, 0, 82 * s, tb - 3], fill=(246, 246, 246))
    ov.paste(bar.convert('RGBA'), (0, sb))
    return ov, sb + tb


# ------------------------------------------------------------------ displays per role
def fit_screen(img, W, H):
    """Fit a screenshot to a display aspect without stretching: crop when it is taller, pad with its own edge
    colour when it is wider (a short app screen)."""
    ar = W / H
    if img.width / img.height > ar * 1.01 and img.height * ar >= 0.7 * img.width:
        return img.crop((0, 0, round(img.height * ar), img.height))      # app UI: keep the left (sidebar / nav)
    if img.width / img.height > ar * 1.01:
        h = round(img.width / ar)
        edge = tuple(int(v) for v in np.median(np.asarray(img)[-3:].reshape(-1, 3), 0))
        c = Image.new('RGB', (img.width, h), edge); c.paste(img, (0, 0)); return c
    return img


def make_display(dtype, content, url, offset_frac=0.0, max_w=None):
    """content: PIL RGB capture (scaled to the display width by the sampler). offset_frac: start the
    content this many display-heights further down (clamped)."""
    if max_w and content.width > max_w:
        content = content.resize((max_w, round(content.height * max_w / content.width)), Image.LANCZOS)
    if url is None:          # bare: an app screen without browser chrome (the screenshot has its own UI)
        W, H = {'iphone': IPHONE17PRO['px'], 'mac': MBP14['px'], 'studio': STUDIO['px']}.get(dtype, IPADPRO13['px'])
        return Display(W, H, np.asarray(fit_screen(content, W, H)), 0, None)
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
    # round 13
    'phone_c': ('iphone', 'full-mobile', 'full-mobile', 2.2),
    'phone_d': ('iphone', 'full-mobile', 'full-mobile', 3.4),
    'mac_b': ('mac', 'full-desktop', 'full-desktop', 1.1),
    'studio_b': ('studio', 'full-desktop', 'full-desktop', 0.9),
    'tablet_d': ('ipad', 'full-desktop', 'full-desktop', 3.2),
    'tablet_p': ('ipad_p', 'full-desktop', 'full-desktop', 0.0),
    'billboard': ('flat', 'hero-desktop', 'full-desktop', 0.0),
    'panel_1': ('flat', 'full-desktop', 'full-desktop', 0.0),
    'panel_2': ('flat', 'full-desktop', 'full-desktop', 0.0),
    'panel_3': ('flat', 'full-desktop', 'full-desktop', 0.0),
    'panel_4': ('flat', 'full-desktop', 'full-desktop', 0.0),
    'panel_5': ('flat', 'full-mobile', 'full-mobile', 0.0),
    'social': ('social', 'hero-mobile', 'hero-mobile', 0.0),
}
# panel crops: (x0, y0, w) as fractions of the capture width, the height follows the panel aspect
PANEL_CROP = {'panel_1': (0.0, 0.0, 1.0), 'panel_2': (0.05, 1.1, 0.55), 'panel_3': (0.45, 1.9, 0.5),
              'panel_4': (0.0, 2.8, 1.0), 'panel_5': (0.0, 0.0, 1.0)}


def flat_display(role, src, px, breaks=None):
    """Content for a flat screen (panel / billboard) of px = (w, h): a crop of the capture, no chrome.
    breaks (r14 stacked clean screens): panels start at the top of a screen."""
    W, H = px
    if role.startswith('panel'):
        x0, y0, wf = PANEL_CROP.get(role, (0, 0, 1))
        cw = int(src.width * wf); ch = int(cw * H / W)
        y = int(y0 * src.width * 0.62)
        if breaks:
            y = min(breaks, key=lambda b: abs(b - y))
        y = max(0, min(y, src.height - ch)) if src.height > ch else 0
        crop = src.crop((int(x0 * src.width), y, int(x0 * src.width) + cw, y + ch))
    else:
        ar = W / H
        crop = src.crop((0, 0, src.width, min(src.height, int(src.width / ar))))
    crop = crop.resize((W, int(crop.height * W / crop.width)), Image.LANCZOS)
    return Display(W, H, np.asarray(crop), 0, None)


def displays_for(p, roles, video=False, caps=None, glass=None, brand=None):
    """glass: template meta['glass'] (needed for flat screens to know their content resolution).
    brand: designs.Brand (needed for the 'social' screen)."""
    caps = caps or captures(p)
    url = bar_url(p)
    out = {}; used = set()
    for r in roles:
        dtype, still, vid, off = ROLE_SOURCES[r]
        if (p.get('role_src') or {}).get(r):
            still = vid = p['role_src'][r]
        if dtype == 'social':
            if brand is None: continue
            import designs as DS
            W, H = IPHONE17PRO['px']; sb = IPHONE17PRO['status_h']
            grid = DS.social_grid(brand, W, H, sb)
            ov, top = iphone_overlay((250, 250, 250), url)
            ov = np.asarray(ov).copy(); ov[top:] = 0          # status bar only (no Safari pill)
            out[r] = Display(W, H, np.asarray(grid), 0, ov)
            continue
        key = vid if video else still
        if dtype == 'ipad' and key == 'full-desktop' and caps.get('full-tablet') is not None:
            key = 'full-tablet'                 # r14: clean tablet-width screens
        src = caps.get(key)
        breaks = (caps.get('_breaks') or {}).get(key)
        if video and (caps.get('_video') or {}).get(key) is not None:
            src = caps['_video'][key]; breaks = None
        if src is None:
            continue
        if dtype == 'flat':
            px = (glass or {}).get(r, {}).get('px') or (2400, 1500)
            out[r] = flat_display(r, src, px, breaks=None if video else breaks)
        elif dtype == 'ipad_p':
            d = ipad_portrait_display(src, url)
            d.offset = min(d.max_offset, off * (d.H - d.top) * d.cscale)
            out[r] = rotated(d)
        else:
            out[r] = make_display(dtype, src, url, off)
        if breaks and not video and r in out and off > 0:       # r14: start exactly at a screen
            d = out[r]; ok = [b for b in breaks if b <= d.max_offset + 1]
            free = [b for b in ok if (key, b) not in used] or ok          # two devices: two different screens
            if free:
                d.offset = float(min(free, key=lambda b: abs(b - d.offset))); used.add((key, int(d.offset)))
    return out


def ipad_portrait_display(src, url):
    W, H = IPADPRO13['px'][1], IPADPRO13['px'][0]
    ov, top = ipad_overlay(url, W=W, H=H)
    return Display(W, H, np.asarray(src), top, np.asarray(ov))


def rotated(d):
    d.rot = 90
    return d


BARE_OK = {'phone_a', 'phone_b', 'phone_c', 'phone_d', 'mac', 'mac_b', 'studio', 'studio_b', 'tablet', 'tablet_b', 'tablet_c',
           'tablet_d', 'billboard'}


def roles_ok(p, caps=None):
    """Screen roles this project can fill with real content (projects with only desktop or only phone
    screens, app screens without browser chrome): templates needing other roles are not eligible."""
    caps = caps or captures(p)
    ok = set()
    for r, (dtype, still, vid, off) in ROLE_SOURCES.items():
        if dtype == 'social':
            continue
        rs = (p.get('role_src') or {}).get(r)
        if caps.get(rs or still) is None or caps.get(rs or vid) is None:
            continue
        if p.get('bare') and r not in BARE_OK:
            continue
        if p.get('roles') and r not in p['roles']:
            continue
        ok.add(r)
    ok -= R14_NOROLES.get(p['slug'], set())
    if p.get('r14'):          # captured live site: as many offset slots as there are clean screens, never clamped
        n = p.get('n_screens') or {}
        need = {'mac_b': ('desktop', 2), 'studio_b': ('desktop', 2), 'tablet_c': ('tablet', 2), 'tablet_b': ('tablet', 3),
                'tablet_d': ('tablet', 4), 'phone_b': ('mobile', 2), 'phone_c': ('mobile', 3), 'phone_d': ('mobile', 4),
                'panel_2': ('desktop', 2), 'panel_3': ('desktop', 3), 'panel_4': ('desktop', 4), 'panel_1': ('desktop', 1),
                'panel_5': ('mobile', 1)}
        ok = {r for r in ok if r not in need or n.get(need[r][0], 0) >= need[r][1]}
    return ok


# round 14 (CAPTURE AUDIT): sites that could not be recaptured or are a single screen: no device slots that would
# show a broken capture or clamp several devices onto the same screen
_OFFSET_ROLES = {'phone_b', 'phone_c', 'phone_d', 'tablet_b', 'tablet_c', 'tablet_d', 'mac_b', 'studio_b',
                 'panel_1', 'panel_2', 'panel_3', 'panel_4', 'panel_5'}
R14_NOROLES = {
    'debiteurnet': _OFFSET_ROLES,                                   # one short portal screen
    'infrai': {'phone_b', 'phone_c', 'phone_d', 'panel_5'},         # one short app screen
    'zuyver-jeeps': _OFFSET_ROLES,                                  # 'coming soon' page: one screen
    'perfect-people': {'mac', 'studio', 'billboard', 'tablet'},     # hero-desktop blurred + promo popup; no recapture
}
R14_EXTRA_REPLACE = {'zuyver-jeeps': {'hero-desktop', 'hero-tablet', 'hero-mobile'},     # the new heroes show the video
                     'teamtv': {'full-desktop', 'full-mobile'}, 'taylor': {'full-desktop', 'full-mobile'},
                     'architectenbureau-koppens': {'full-desktop', 'full-mobile'},
                     'solidlayer': {'full-desktop', 'full-mobile'}}     # old full pages reach the placeholder FAQ
