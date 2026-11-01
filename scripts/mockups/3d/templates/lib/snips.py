"""Round 14 floating UI: real UI snippets of a site (CAPTURE: r14/cap/<slug>/snippets.json) on the 'snip_*' card
screens of the f-templates (3D) and for flat 2D cards over a render (float2d)."""
import os, json, re, math, hashlib
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
CAP = os.path.join(os.path.dirname(os.path.dirname(HERE)), 'r14', 'cap')
# full viewport crops (screens, not snippets), thin bars and the hero copy (already on the device screen,
# sometimes caught mid-fade) are not used as floating cards
SKIP_KINDS = {'mobile-menu', 'nav-open', 'search-results', 'hero-copy', 'navbar'}
_Q = None


def quality(s):
    """Share of 'ink' (pixels that differ from the page colour): near-empty snippets (an empty dropdown, a lone
    line of text) are not worth a card. Cached in r14/snip_quality.json."""
    global _Q
    qf = os.path.join(os.path.dirname(CAP), 'snip_quality.json')
    if _Q is None:
        try: _Q = json.load(open(qf))
        except Exception: _Q = {}
    key = s['path'] + ':' + str(int(os.path.getmtime(s['path'])))
    if key not in _Q:
        im, b = flat(s)
        a = np.asarray(im.resize((max(1, im.width // 4), max(1, im.height // 4)))).astype(np.int16)
        _Q[key] = float((np.abs(a - np.array(b, np.int16)).max(-1) > 28).mean())
        try: json.dump(_Q, open(qf, 'w'))
        except Exception: pass
    return _Q[key]


def _h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def rgb(css):
    m = re.match(r'rgba?\(([^)]*)\)', css or '')
    if not m: return None
    v = [float(x) for x in m.group(1).split(',')]
    if len(v) == 4 and v[3] < 0.6: return None
    return tuple(int(x) for x in v[:3])


R15CAP = os.path.join(os.path.dirname(os.path.dirname(CAP)), 'r15', 'cap')
R15_SKIP = {'cta-button', 'dropdown-trigger', 'chip', 'stapknop', 'button'}


def load(slug, fresh=True):
    f = os.path.join(CAP, slug, 'snippets.json')
    try:
        xs = json.load(open(f)) if os.path.exists(f) else []
    except Exception:
        xs = []
    out = []
    for i, s in enumerate(xs):
        p = os.path.join(CAP, slug, s['file'])
        if not os.path.exists(p) or s.get('kind') in SKIP_KINDS: continue
        w, h = s['size']; sc = s.get('scale') or 2
        if min(w, h) < 60 or w / sc < 120 or h / sc < 36: continue          # too small to read on a card
        out.append(dict(s, path=p, aspect=w / h, i=i))
    # round 15: CAPTURE's r15 close-ups and snippets (2x PNG, reviewed); keys 'r15/<file>'
    f15 = os.path.join(R15CAP, slug, 'stills.json')
    if os.path.exists(f15):
        try: j = json.load(open(f15))
        except Exception: j = {}
        for kind, xs15 in (('closeup', j.get('closeups') or []), (None, j.get('snippets') or [])):
            for k, s in enumerate(xs15):
                p = os.path.join(R15CAP, slug, s['file'])
                if not os.path.exists(p): continue
                if not kind and (s.get('kind') or '') in SKIP_KINDS | R15_SKIP: continue      # hero copy is on the screen already; lone buttons / chips are too thin for a card
                w, h = s['size']
                if min(w, h) < 60 or w / 2 < 120 or h / 2 < 36: continue
                out.append(dict(s, file='r15/' + s['file'], kind=kind or s.get('kind') or 'snippet', desc=s.get('title', ''),
                                scale=2, path=p, aspect=w / h, i=1000 + k + (0 if kind else 500)))
    if fresh: out = [x for x in out if quality(x) >= 0.05]
    return out


def flat(s, bg=None):
    """The snippet as RGB on its page backdrop (transparent corners / background filled)."""
    im = None
    for i in range(3):
        try:
            im = Image.open(s['path']); im.load(); im = im.convert('RGBA'); break
        except Exception:
            import time; time.sleep(2 + 3 * i); im = None
    if im is None: raise IOError(s['path'])
    b = bg or rgb(s.get('backdrop')) or _edge(im)
    # cut-out elements (no own background) are cropped tight to their text: give them a margin of their page
    # colour so nothing touches the card's rounded edge
    pad = int(round(0.05 * min(im.size) + 0.012 * max(im.size) + 12)) if 'transparent' in (s.get('alpha') or '') else 0
    base = Image.new('RGBA', (im.width + 2 * pad, im.height + 2 * pad), b + (255,)); base.alpha_composite(im, (pad, pad))
    return base.convert('RGB'), b


def _edge(im):
    a = np.asarray(im.convert('RGBA')).astype(np.float32)
    e = np.concatenate([a[0], a[-1], a[:, 0], a[:, -1]]); e = e[e[:, 3] > 200]
    return tuple(int(x) for x in np.median(e[:, :3], 0)) if len(e) else (255, 255, 255)


def card_image(s, aspect, px_w=1600, pad=0.07):
    """Contain-fit the snippet into a card of the given aspect, with a margin in the snippet's own backdrop."""
    im, b = flat(s)
    W = px_w; H = int(round(W / aspect))
    iw, ih = im.size
    k = min(W * (1 - 2 * pad * min(1, 1 / aspect * 1.6)) / iw, H * (1 - 2 * pad) / ih)
    k = min(k, W / iw, H / ih)
    nw, nh = max(1, int(iw * k)), max(1, int(ih * k))
    card = Image.new('RGB', (W, H), b)
    card.paste(im.resize((nw, nh), Image.LANCZOS), ((W - nw) // 2, (H - nh) // 2))
    return np.asarray(card), b


def assign(slug, slots, tol=1.45, seed='', exclude=()):
    """slots: [(role, aspect)] -> {role: snippet}: distinct snippets, aspect within a factor tol, varied kinds.
    None when a slot cannot be filled honestly."""
    sn = load(slug)
    if not sn: return None
    rnd = np.random.default_rng(_h(slug + seed))
    order = list(rnd.permutation(len(sn)))
    used, kinds, out = set(), set(), {}
    for role, a in sorted(slots, key=lambda x: -abs(math.log(x[1]))):
        best = None
        for j in order:
            s = sn[j]
            if j in used or s['file'] in exclude: continue
            r = max(s['aspect'] / a, a / s['aspect'])
            if r > tol: continue
            cw = (s.get('css') or {}).get('w') or s['size'][0] / (s.get('scale') or 2)
            sc = r + (0.5 if s['kind'] in kinds else 0) + (0.6 if cw > 1000 else 0)     # big panels get illegible
            if best is None or sc < best[0]: best = (sc, j)
        if best is None: return None
        used.add(best[1]); kinds.add(sn[best[1]]['kind']); out[role] = sn[best[1]]
    return out
