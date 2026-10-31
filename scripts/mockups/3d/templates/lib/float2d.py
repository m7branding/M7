"""Round 14 floating UI, flat variant: 2-3 real UI snippets of the site (CAPTURE snippets.json) as crisp cards
over a finished 3D device render, overlapping the device edge as if they lift off the screen, with soft layered
shadows. The 3D variant (cards in the scene, lit and reflected) is the f0x templates + snips.py.

spec (still plan 'ui2d'): dict(layout='flank'|'stack'|'corner', seed=str, n=2|3, tilt=bool)
"""
import math, hashlib
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import snips as SN


def _h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def screen_bbox(pp):
    W = pp['W']
    idx = np.concatenate([s['idx'][s['m'] > 0.5] for s in pp['screens'] if len(s['idx'])])
    ys, xs = idx // W, idx % W
    # robust: ignore stray pixels
    return (float(np.percentile(xs, 0.5)), float(np.percentile(ys, 0.5)), float(np.percentile(xs, 99.5)),
            float(np.percentile(ys, 99.5)))


RANK = ['dropdown', 'mega-menu', 'mobile-menu-panel', 'form-focus', 'form', 'accordion-open', 'search-focus', 'search-dropdown',
        'pricing-card', 'modal', 'configurator-step', 'option-card', 'control-panel', 'selector', 'stepper', 'filters', 'search',
        'stats', 'product-card', 'article-card', 'card', 'tool-card-filled', 'tool-card', 'cta-button', 'navbar', 'toolbar',
        'summary-bar', 'hero-copy']


def pick(slug, n, seed, max_aspect=7.5, exclude=(), files=None, min_n=2):
    """n snippets: interactive pieces (open menus, forms, accordions, pricing) before plain cards; the hero copy
    (already on the device screen) last; varied kinds; no whole-viewport panels (illegible when small)."""
    if files:                                   # the plan fixed them (no snippet twice in one case)
        by = {s['file']: s for s in SN.load(slug)}
        out = [by[f] for f in files if f in by]
        return out if len(out) == len(files) else None
    sn = [s for s in SN.load(slug) if 1 / 2.4 <= s['aspect'] <= max_aspect and s['file'] not in exclude
          and ((s.get('css') or {}).get('w') or s['size'][0] / 2) <= 1100]
    if len(sn) < min_n: return None
    rnd = np.random.default_rng(_h(slug + seed))
    key = lambda s: (RANK.index(s['kind']) if s['kind'] in RANK else 20) + rnd.uniform(0, 9)
    order = sorted(sn, key=key)
    out, kinds = [], set()
    for s in order:
        if s['kind'] in kinds or (s['kind'].startswith('form') and any(k.startswith('form') for k in kinds)): continue
        out.append(s); kinds.add(s['kind'])
        if len(out) == n: break
    return out if len(out) >= min_n else None


def _card(s, w, radius, tilt=0.0):
    """RGBA card at width w (px): the snippet on its page colour, rounded, hairline edge; optional yaw tilt."""
    im, bg = SN.flat(s)
    k = w / im.width; h = max(8, int(round(im.height * k)))
    ss = 2
    big = im.resize((w * ss, h * ss), Image.LANCZOS).convert('RGBA')
    m = Image.new('L', (w * ss, h * ss), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, w * ss - 1, h * ss - 1], radius=radius * ss, fill=255)
    lum = (0.2126 * bg[0] + 0.7152 * bg[1] + 0.0722 * bg[2]) / 255
    edge = (255, 255, 255, 46) if lum < 0.4 else (0, 0, 0, 30)
    ov = Image.new('RGBA', big.size, (0, 0, 0, 0))
    ImageDraw.Draw(ov).rounded_rectangle([0, 0, w * ss - 1, h * ss - 1], radius=radius * ss, outline=edge, width=2 * ss)
    big.alpha_composite(ov); big.putalpha(m)
    if tilt:
        big = _yaw(big, tilt)
    return big.resize((big.width // ss, big.height // ss), Image.LANCZOS)


def _yaw(im, deg):
    """Gentle perspective: the card turned about its vertical axis (deg > 0: right edge further away)."""
    W, H = im.size; t = math.radians(abs(deg))
    shrink = 0.5 * H * math.sin(t) * 0.35; wn = W * math.cos(t)
    if deg > 0:
        quad = [(0, 0), (wn, shrink), (wn, H - shrink), (0, H)]
    else:
        quad = [(0, shrink), (wn, 0), (wn, H), (0, H - shrink)]
    out_w = int(math.ceil(wn))
    coeffs = _persp([(0, 0), (W, 0), (W, H), (0, H)], quad)
    return im.transform((out_w, H), Image.PERSPECTIVE, coeffs, Image.BICUBIC)


def _persp(src, dst):
    """Coefficients mapping output (dst) coords to input (src) coords for Image.PERSPECTIVE."""
    A, b = [], []
    for (x, y), (u, v) in zip(dst, src):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); b.append(u)
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y]); b.append(v)
    return np.linalg.solve(np.array(A, float), np.array(b, float)).tolist()


def _shadow(base, card, x, y, z):
    """Two shadows: a wide soft one (lift) and a tight contact-ish one; z 0..1 = how far the card floats."""
    W, H = base.size
    a = card.split()[3]
    for blur, dy, op in ((0.012 + 0.020 * z, 0.010 + 0.022 * z, 0.30 + 0.12 * z), (0.004, 0.004, 0.22)):
        r = max(1, int(blur * W)); pad = 3 * r
        sh = Image.new('L', (card.width + 2 * pad, card.height + 2 * pad), 0)
        sh.paste(a, (pad, pad)); sh = sh.filter(ImageFilter.GaussianBlur(r))
        sh = sh.point(lambda v: int(v * op))
        blk = Image.new('RGBA', sh.size, (0, 0, 0, 0)); blk.putalpha(sh)
        base.alpha_composite(blk, (int(x - pad), int(y - pad + dy * H)))


LAYOUTS = {
    # slot: (anchor x in bbox units, anchor y in bbox units, card width as fraction of image W, z)
    'flank': [(1.02, 0.16, 0.25, 0.9), (-0.04, 0.72, 0.23, 0.6), (0.86, 0.92, 0.17, 0.4)],
    'stack': [(1.06, 0.10, 0.24, 0.8), (1.10, 0.52, 0.21, 0.6), (1.02, 0.92, 0.18, 0.4)],
    'corner': [(-0.02, 0.86, 0.27, 0.9), (0.98, 0.06, 0.20, 0.5), (0.10, 0.08, 0.16, 0.3)],
}


def overlay(img, pp, slug, spec):
    """img: PIL RGB still; pp: the template (screens -> device bbox). Returns the still with floating cards."""
    sn = pick(slug, spec.get('n', 3), spec.get('seed', ''), files=spec.get('files'))
    if not sn: raise RuntimeError(f'{slug}: no snippets for ui2d')
    rnd = np.random.default_rng(_h(slug + spec.get('seed', '') + 'jit'))
    W, H = img.size
    sx, sy = W / pp['W'], H / pp['H']
    x0, y0, x1, y1 = screen_bbox(pp); x0 *= sx; x1 *= sx; y0 *= sy; y1 *= sy
    bw, bh = x1 - x0, y1 - y0
    base = img.convert('RGBA')
    slots = LAYOUTS[spec.get('layout', 'flank')]
    # per case a different stacking: mirrored or not, anchors and sizes jittered
    mir = bool(spec.get('mirror'))
    slots = [(((1.0 - ax) if mir else ax) + rnd.uniform(-0.05, 0.05), ay + rnd.uniform(-0.06, 0.06),
              wf * rnd.uniform(0.9, 1.1), z) for ax, ay, wf, z in slots]
    mg = 0.035; covered = 0.0                    # screen area already covered by cards
    order = sorted(range(len(sn)), key=lambda i: slots[i][3])         # far cards first
    for i in order:
        s = sn[i]; ax, ay, wf, z = slots[i]
        fim, _ = SN.flat(s); asp = fim.width / fim.height
        cw = wf * W
        if asp > 3: cw *= 1.25                                         # bars: a bit wider so text stays legible
        ch = cw / asp
        if ch > 0.40 * H: ch = 0.40 * H; cw = ch * asp
        cw = min(cw, fim.width * 1.0)                                  # never upscale the capture (stays crisp)
        tilt = (8 if ax > 0.5 else -8) * (1 if spec.get('tilt') else 0)
        card = _card(s, int(cw), radius=max(6, int(0.010 * W)), tilt=tilt)
        cx = x0 + ax * bw; cy = y0 + ay * bh
        x = cx - card.width / 2; y = cy - card.height / 2
        x = min(max(x, mg * W), W - mg * W - card.width); y = min(max(y, mg * H), H - mg * H - card.height)
        # never hide most of the device: at most ~40% of the card over the screen area, else slide outwards
        dirx = 1 if (x + card.width / 2) >= (x0 + x1) / 2 else -1
        for _ in range(40):
            ox = max(0, min(x + card.width, x1) - max(x, x0)); oy = max(0, min(y + card.height, y1) - max(y, y0))
            if ox * oy <= min(0.35 * card.width * card.height, 0.15 * bw * bh, 0.32 * bw * bh - covered): break
            nx = x + dirx * 0.01 * W
            if nx < mg * W * 0.5 or nx + card.width > W - mg * W * 0.5: break
            x = nx
        covered += max(0, min(x + card.width, x1) - max(x, x0)) * max(0, min(y + card.height, y1) - max(y, y0))
        _shadow(base, card, x, y, z)
        base.alpha_composite(card, (int(x), int(y)))
    return base.convert('RGB')
