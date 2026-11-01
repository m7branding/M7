"""book16 — round 16 (R3D16): M7's REAL brandbook pages (s-fa-brandbook-NN) in a printed landscape brand book.

  python book16.py test <slug> [a|b] [pv|still] [tint]      r16/r3d/test-book-<slug>-<cam>.jpg
  python book16.py still <slugs|all> [cam]                  r16/r3d/out/<slug>/r-64-brandbook-open.webp (2000 px)
  python book16.py film <slugs|all>                         r16/r3d/out/<slug>/r-64-brandbook-open.mp4 + .webp poster
  python book16.py install <slugs|all>                      copy the outputs into public/media/cases/<slug>/

Template: scenes13/g03_brandbook.py (pages with the slide aspect: g03_book169 / g03_book154 / g03_book141). The open
spread shows two strong pages (l1 | r1), the closed copy the cover; the film turns r1 (its back is l2) to reveal r2.
Picks per case in r16/r3d/book_picks.json (hand-made from the pages; only real pages, never invented content).
Backgrounds: warm light grey, anthracite, or navy only for verified blue brands (r14/navycheck.py BLUE).
"""
import sys, os, json, shutil, subprocess
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
from PIL import Image, ImageFilter
import tcomp as C, backdrops as BD

S = os.environ.get('M7_SCRATCH') or os.path.dirname(os.path.dirname(HERE))
ROOT = os.environ.get('M7_ROOT', '/home/user/M7')
CASES = os.path.join(ROOT, 'public', 'media', 'cases')
OUTD = os.path.join(S, 'r16', 'r3d')
PICKS = os.path.join(OUTD, 'book_picks.json')
BLUE = set("aigora alpacafarm-vorstenbosch atl-plus cryptocointalk debiteurnet edgeway-commodities expociety-app "
           "expociety-branding happy-horse-sales icewall infrai jalo-energy jmtuning mindyourpass monvy nexis-group "
           "nova-funeral-cars rsi-3d-sportvelden silvr solidlayer sparta-blue-hydrogen the-sandt verichecks your-earth".split())
TINTS = {'light': '#E3E1DC', 'light2': '#DAD9D5', 'stone': '#CFCDC8', 'dark': '#2B2B2D', 'dark2': '#222224', 'navy': '#0E1729'}


def picks():
    return json.load(open(PICKS))


def page_path(slug, n):
    n = str(n)
    return os.path.join(CASES, slug, n if n.endswith('.webp') else f's-fa-brandbook-{int(n):02d}.webp')


def tag_for(slug, pk):
    im = Image.open(page_path(slug, pk['l1']))
    a = im.width / im.height
    return '169' if a > 1.66 else ('154' if a > 1.48 else '141')


def fit_page(im, aspect):
    """The page image at the template's page aspect. A small mismatch is padded with the page's own edge colour
    (median of the border), never stretched and never cropped into the content."""
    im = im.convert('RGB')
    a = im.width / im.height
    if abs(a / aspect - 1) < 0.012:
        return im
    if a > aspect:              # too wide: pad top / bottom
        nh = round(im.width / aspect); pad = (nh - im.height)
        arr = np.asarray(im); col = tuple(int(c) for c in np.median(np.concatenate([arr[:3].reshape(-1, 3), arr[-3:].reshape(-1, 3)]), 0))
        out = Image.new('RGB', (im.width, nh), col); out.paste(im, (0, pad // 2)); return out
    nw = round(im.height * aspect); pad = nw - im.width
    arr = np.asarray(im); col = tuple(int(c) for c in np.median(np.concatenate([arr[:, :3].reshape(-1, 3), arr[:, -3:].reshape(-1, 3)]), 0))
    out = Image.new('RGB', (nw, im.height), col); out.paste(im, (pad // 2, 0)); return out


def edge_colour(slug, pk):
    """Cover colour for the spine / board rim: median of the cover's left 3 % (where the cover wraps the spine)."""
    if pk.get('edge'): return pk['edge']
    a = np.asarray(Image.open(page_path(slug, pk['cover'])).convert('RGB'))
    c = np.median(a[:, :max(4, a.shape[1] // 33)].reshape(-1, 3), 0)
    return '#%02X%02X%02X' % tuple(int(x) for x in c)


def designs(slug, pk, aspect, roles):
    out = {}
    for r in roles:
        src = pk.get(r)
        if src is None: continue
        im = fit_page(Image.open(page_path(slug, src)), aspect)
        if im.width > 2600: im = im.resize((2600, round(2600 / aspect)), Image.LANCZOS)
        out[r] = C.PrintDesign(np.asarray(im))
    ec = np.full((8, 8, 3), [int(edge_colour(slug, pk)[i:i + 2], 16) for i in (1, 3, 5)], np.uint8)
    out['edge'] = C.PrintDesign(ec)
    return out


_PP = {}


def prepared(t, base):
    k = (t, base)
    if k not in _PP:
        _PP.clear()
        tdir, meta = C.load_template(t)
        fr = C.Frame(tdir, base, meta)
        _PP[k] = (C.prepare(fr, exposure=meta.get('exposure', 0.0), look=meta.get('look', 'AgX - Medium High Contrast')), meta)
    return _PP[k]


def tint_of(slug, pk):
    t = pk.get('bg', 'light')
    if t == 'navy' and slug not in BLUE:
        raise SystemExit(f'{slug}: navy background for a non-blue brand')
    return TINTS.get(t, t)


def comp(pp, slug, pk, dsg):
    tint = tint_of(slug, pk)
    bl = BD.lin(tint)
    tints = {tr['role']: np.clip(bl, 0, 1) for tr in (pp.get('tints') or [])}
    prints = {}
    for pr in pp['prints']:
        r0 = pr['role'].split('#')[0]
        if r0 in dsg: prints[pr['role']] = dsg[r0]
    dev = C.develop_set(pp, tints or None, prints)
    return C.over(pp, C.foreground(pp, {}, 0.25, 6, dev=dev), bg=None)


def still(slug, cam='a', base='still', out=None):
    pk = picks()[slug]
    tag = pk.get('tag') or tag_for(slug, pk)
    t = f'g03_book{tag}__{pk.get("cam", cam)}'
    pp, meta = prepared(t, base)
    asp = {'169': 1.7778, '154': 1.5397, '141': 1.4134}[tag]
    dsg = designs(slug, pk, asp, ('l1', 'r1', 'cover'))
    im = Image.fromarray(comp(pp, slug, pk, dsg))
    if out is None: return im
    od = os.path.join(OUTD, 'out', slug); os.makedirs(od, exist_ok=True)
    im = im.resize((2000, round(im.height * 2000 / im.width)), Image.LANCZOS)
    im = im.filter(ImageFilter.UnsharpMask(radius=0.8, percent=35, threshold=1))
    p = os.path.join(od, 'r-64-brandbook-open.webp')
    for q in (90, 86, 82, 78):
        im.save(p, quality=q, method=6)
        if os.path.getsize(p) < 700_000: break
    return p


def sel(arg):
    pk = picks()
    return sorted(pk) if arg == 'all' else arg.split(',')


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'test':
        slug = sys.argv[2]; cam = sys.argv[3] if len(sys.argv) > 3 else 'a'; base = sys.argv[4] if len(sys.argv) > 4 else 'pv'
        pk = picks()
        if len(sys.argv) > 5: pk[slug]['bg'] = sys.argv[5]
        im = still(slug, cam, base)
        im.save(os.path.join(OUTD, f'test-book-{slug}-{cam}.jpg'), quality=88)
    elif cmd == 'still':
        cam = sys.argv[3] if len(sys.argv) > 3 else 'a'
        for s in sel(sys.argv[2]):
            print('still', s, still(s, cam, 'still', out=True), flush=True)


def film_test(slug, frames, base_tpl='g03_book169__v'):
    pk = picks()[slug]
    tdir, meta = C.load_template(base_tpl)
    dsg = designs(slug, pk, 1.7778, ('l1', 'r1', 'l2', 'r2', 'cover'))
    ims = []
    for i in frames:
        fr = C.Frame(tdir, f'f_{i:04d}', meta)
        pp = C.prepare(fr, exposure=meta.get('exposure', 0.0), look=meta.get('look'))
        ims.append(Image.fromarray(comp(pp, slug, pk, dsg)))
    W, H = ims[0].size
    sh = Image.new('RGB', (W * 2, H * ((len(ims) + 1) // 2)))
    for k, im in enumerate(ims): sh.paste(im, ((k % 2) * W, (k // 2) * H))
    sh.save(os.path.join(OUTD, f'film-test-{slug}.jpg'), quality=85)


# ------------------------------------------------------------------ the page-turn film
FPS = 30
HOLD_A, HOLD_B, XF = 36, 54, 15
FILM_TITLE = 'Brandbook: door de echte pagina’s bladeren'


def film_cases(tag='169'):
    pk = picks()
    return [s for s in sorted(pk) if pk[s].get('r2') and (pk[s].get('tag') or tag_for(s, pk[s])) == tag and not pk[s].get('nofilm')]


def film_frames(slugs, tag='169'):
    """Composite every turn frame for every case once (prepare per frame is the expensive part) -> JPEG q96 temp."""
    t = f'g03_book{tag}__v'
    tdir, meta = C.load_template(t)
    N = meta['frames']
    asp = {'169': 1.7778, '154': 1.5397, '141': 1.4134}[tag]
    pk = picks()
    dsg = {}
    for s in slugs:
        d = designs(s, pk[s], asp, ('l1', 'r1', 'l2', 'r2', 'cover'))
        dsg[s] = d
    tmp = os.path.join(OUTD, 'filmtmp')
    for s in slugs: os.makedirs(os.path.join(tmp, s), exist_ok=True)
    for i in range(N):
        if all(os.path.exists(os.path.join(tmp, s, f'{i:04d}.jpg')) for s in slugs): continue
        fr = C.Frame(tdir, f'f_{i:04d}', meta)
        pp = C.prepare(fr, exposure=meta.get('exposure', 0.0), look=meta.get('look', 'AgX - Medium High Contrast'))
        for s in slugs:
            Image.fromarray(comp(pp, s, pk[s], dsg[s])).save(os.path.join(tmp, s, f'{i:04d}.jpg'), quality=96, subsampling=0)
        print('frame', i, flush=True)
    return N


def film_encode(slug, N, n):
    """holdA (turn frame 0) + the turn + holdB, a slow 5 % push-in over the whole film, 0.5 s dissolve into frame 1."""
    import cv2
    sys.path.insert(0, HERE)
    import film16 as F
    tmp = os.path.join(OUTD, 'filmtmp', slug)
    seq = [0] * HOLD_A + list(range(N)) + [N - 1] * HOLD_B
    T = len(seq)
    cache = {}
    def src(i):
        if i not in cache:
            if len(cache) > 3: cache.clear()
            cache[i] = np.asarray(Image.open(os.path.join(tmp, f'{i:04d}.jpg')).convert('RGB'))
        return cache[i]
    def frames():
        for k, i in enumerate(seq):
            img = src(i); H, W = img.shape[:2]
            s = k / (T - 1); e = 0.5 - 0.5 * np.cos(np.pi * s)
            z = 1.0 + 0.05 * e
            cw, ch = W / z, H / z
            cx, cy = W * 0.5, H * 0.56
            x0 = min(max(cx - cw / 2, 0), W - cw); y0 = min(max(cy - ch / 2, 0), H - ch)
            k_ = cw / F.FW
            sm = cv2.GaussianBlur(img, (0, 0), 0.42 * (k_ - 1.0) ** 0.5 * 1.6) if k_ > 1.05 else img
            M = np.array([[k_, 0, x0 + 0.5 * k_ - 0.5], [0, ch / F.FH, y0 + 0.5 * ch / F.FH - 0.5]], np.float64)
            yield cv2.warpAffine(sm, M, (F.FW, F.FH), flags=cv2.INTER_CUBIC | cv2.WARP_INVERSE_MAP, borderMode=cv2.BORDER_REFLECT)
    od = os.path.join(OUTD, 'out', slug); os.makedirs(od, exist_ok=True)
    name = f'r-flow-{n}'
    crf = F.encode(frames(), T, os.path.join(od, name + '.mp4'), os.path.join(od, name + '.webp'), 2.6 * 1048576, xf=XF)
    json.dump(dict(name=name, title=FILM_TITLE, fid='book'), open(os.path.join(od, name + '.json'), 'w'), ensure_ascii=False)
    return name, crf, os.path.getsize(os.path.join(od, name + '.mp4')) // 1024
