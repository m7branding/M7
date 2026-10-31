"""logos — client logos for the branding scenes.

Source order (BRAND kit, SCRATCH/r13/brand/<slug>/, listed in READY.txt):
  shape (mono mask): logo-dark.svg|png (the logo recoloured to near-black: a clean shape for any print colour),
                     else public/media/cases/<slug>/logo.svg|png, else logo-white, else public/media/logos-designed.
  full colour:       the kit's logo.svg|png in original colours, unless the original is white-on-dark ('whitecontent').
Doubtful logos (SKIP) get no logo scenes. SVGs are rasterised with Chromium (r13/scenes/logo_raster.js)."""
import os, subprocess, json
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__)); R12 = os.path.dirname(HERE); SCR = os.path.dirname(R12)
ROOT = os.environ.get('M7_ROOT') or (HERE.split('/scripts/mockups/')[0] if '/scripts/mockups/' in HERE else '/home/user/M7')
SITE = os.path.join(ROOT, 'public', 'media')
KIT = os.environ.get('R13_BRAND') or os.path.join(SCR, 'r13', 'brand')          # BRAND kits (logo-dark, colours, imagery)
CACHE = os.path.join(SCR, 'r13', 'logos')
RASTER = next((p for p in (os.path.join(R12, 'scenes13', 'logo_raster.js'), os.path.join(SCR, 'r13', 'scenes', 'logo_raster.js'))
               if os.path.exists(p)), os.path.join(SCR, 'r13', 'scenes', 'logo_raster.js'))
DESIGNED = {'atl-plus': 'atl', 'bernheze-makelaars-rebranding': 'bernheze-makelaars', 'bernheze-makelaars-video': 'bernheze-makelaars',
            'happy-horse-sales': 'happy-horse-sales', 'jurgh-detailing': 'jurgh', 'kippenkar': 'kippenkar',
            'architectenbureau-koppens': 'koppens-architecten', 'nktv': 'nktv', 'sparked': 'sparked',
            'sublime-branding': 'sublime', 'sublime-video': 'sublime'}
SKIP = {'bctn', 'supernova-techniek', 'esmailly-bouw', 'giarte-tableau-dashboards', 'debiteurnet', 'infrai', 'trt-tv',
        'perfect-people', 'hylofit', 'sami', 'audi-s5-coupe', 'gender-reveal-rotterdam'}


def ready():
    f = os.path.join(KIT, 'READY.txt')
    return {l.strip() for l in open(f) if l.strip()} if os.path.exists(f) else set()


def _first(d, names):
    for n in names:
        f = os.path.join(d, n)
        if os.path.exists(f): return f
    return None


def _raster(svg, png):
    if not os.path.exists(png) or os.path.getmtime(png) < os.path.getmtime(svg):
        subprocess.run(['node', RASTER, svg, png], check=True, capture_output=True, timeout=120)
    return png


def source(slug):
    if slug in SKIP: return None
    kit = os.path.join(KIT, slug)
    if slug in ready():
        f = _first(kit, ['logo-dark.svg', 'logo-dark.png'])
        if f: return f
    f = _first(os.path.join(SITE, 'cases', slug), ['logo.svg', 'logo.png', 'logo-white.svg', 'logo-white.png'])
    if f: return f
    if slug in DESIGNED:
        f = os.path.join(SITE, 'logos-designed', DESIGNED[slug] + '.webp')
        if os.path.exists(f): return f
    return None


def full_source(slug):
    kit = os.path.join(KIT, slug)
    if slug in SKIP or slug not in ready(): return None
    try:
        mode = json.load(open(os.path.join(kit, 'meta.json'))).get('logo', {}).get('mode')
    except Exception:
        mode = None
    if mode == 'whitecontent': return None
    return _first(kit, ['logo.svg', 'logo.png'])


def _img(f, tag):
    if f.endswith('.svg'):
        f = _raster(f, os.path.join(CACHE, tag + '.png'))
    im = Image.open(f).convert('RGBA')
    a = np.asarray(im)
    if a[..., 3].min() > 250:      # no transparency: logo on a flat background
        bg = np.median(np.concatenate([a[0], a[-1], a[:, 0], a[:, -1]]), 0)[:3]
        diff = np.abs(a[..., :3].astype(int) - bg).sum(-1)
        alpha = np.clip(diff * 3, 0, 255).astype(np.uint8)
        a = a.copy(); a[..., 3] = alpha; im = Image.fromarray(a)
    bbox = im.split()[3].point(lambda v: 255 if v > 8 else 0).getbbox()
    return im.crop(bbox) if bbox else im


def load(slug):
    """(mono L mask, full-colour rgba or None), trimmed to the logo, or (None, None)."""
    f = source(slug)
    if not f:
        return None, None
    os.makedirs(CACHE, exist_ok=True)
    im = _img(f, slug + '-' + os.path.basename(f).split('.')[0])
    mono = im.split()[3]
    full = None
    ff = full_source(slug)
    if ff:
        fi = _img(ff, slug + '-full')
        rgb = np.asarray(fi)[..., :3].astype(int); al = np.asarray(fi)[..., 3]
        if al.sum() and (rgb[al > 128].mean() < 235):
            full = fi
    elif not f.endswith('.webp') and 'white' not in os.path.basename(f) and 'dark' not in os.path.basename(f):
        rgb = np.asarray(im)[..., :3].astype(int)
        if rgb.mean() < 235: full = im
    return mono, full
