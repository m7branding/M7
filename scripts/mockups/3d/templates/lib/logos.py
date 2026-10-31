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


def _kit_original(slug):
    """The BRAND kit's logo in original colours (also when that original is white-on-dark)."""
    if slug in SKIP or slug not in ready(): return None
    f = _first(os.path.join(KIT, slug), ['logo.svg', 'logo.png'])
    return _img(f, slug + '-orig') if f else None


def whitecontent(slug):
    try:
        return json.load(open(os.path.join(KIT, slug, 'meta.json'))).get('logo', {}).get('mode') == 'whitecontent'
    except Exception:
        return False


def on_dark(im):
    """Version for a dark surface: the near-black / grey ink becomes white, brand colours stay (e.g. RepairLab's
    red dot, JURGH's red bar) — how these brands show their logo on black."""
    a = np.asarray(im.convert('RGBA')).astype(np.float32)
    rgb = a[..., :3] / 255.0
    dark = rgb.max(-1) < 0.45                          # black / charcoal / navy / aubergine ink -> white
    out = a.copy(); out[dark, :3] = 250
    return Image.fromarray(out.astype(np.uint8))


# M7's own logo tiles (logo on its brand surface) where the kit holds a later / temporary variant
TILES = {'jurgh-detailing': 'jurgh-tile.webp'}       # the kit has the 10th-anniversary variant


def _from_tile(fn):
    """Logo (RGBA) keyed out of a tile: the background is the median border colour."""
    im = Image.open(os.path.join(SITE, 'logos-designed', fn)).convert('RGB'); a = np.asarray(im).astype(np.float32)
    bg = np.median(np.concatenate([a[0], a[-1], a[:, 0], a[:, -1]]), 0)
    mx = a.max(-1)                                      # dark tile: the logo is what is clearly brighter
    alpha = np.clip((mx - bg.max() - 45) * 3.0, 0, 255).astype(np.uint8)
    out = Image.fromarray(np.dstack([a.astype(np.uint8), alpha]))
    bb = out.split()[3].point(lambda v: 255 if v > 160 else 0).getbbox()
    return out.crop(bb)


def variants(slug):
    """Logo images in their true colours for the logo scenes: {'light': for light surfaces or None,
    'dark': for dark / brand-field surfaces, 'mono': L mask}. None when there is no verified logo."""
    mono, full = load(slug)
    if mono is None:
        return None
    if slug in TILES:
        dark = _from_tile(TILES[slug])
        a = np.asarray(dark).astype(np.float32); white = a[..., :3].min(-1) > 200
        b = a.copy(); b[white, :3] = 0                  # light surface: the white letters print black
        return dict(light=Image.fromarray(b.astype(np.uint8)), dark=dark, mono=dark.split()[3])
    orig = _kit_original(slug)
    if whitecontent(slug):
        light = None                                   # a white-on-dark logo never goes on a light surface
        dark = orig if orig is not None else Image.merge('RGBA', [Image.new('L', mono.size, 250)] * 3 + [mono])
    else:
        light = full
        if full is not None:                           # a logo with white letters is a logo for dark surfaces
            a = np.asarray(full.convert('RGBA')).astype(np.float32)
            op = a[..., 3] > 128
            if op.sum() and (a[op, :3].min(-1) > 225).mean() > 0.10: light = None
        dark = on_dark(full) if full is not None else Image.merge('RGBA', [Image.new('L', mono.size, 250)] * 3 + [mono])
    return dict(light=light, dark=dark, mono=mono)
