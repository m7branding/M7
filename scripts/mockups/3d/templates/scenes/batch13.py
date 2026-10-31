"""batch13 — round-13 per-project directories from the template library.

  python batch13.py prep [-jN]                 develop + cache every rendered template (tpl/<t>/cache/still.npz)
  python batch13.py plan                       write r13/plan.json (stills, backgrounds, unique covers per case)
  python batch13.py stills [slug,...|all] [-jN]
  python batch13.py sheet                      contact sheets r13/sheet-*.jpg
  python batch13.py install [slug,...|all]     copy r13/out/<slug>/r-* to public/media/cases/<slug>/ (stale r-* removed)
Truthfulness: stationery / print scenes only for cases with branding-rebranding or grafisch-ontwerp-print; logo-only
scenes need a real logo; social-post screens only for content-marketing cases; devices only show real captures.
"""
import sys, os, json, math, time, glob, hashlib, shutil
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
from PIL import Image
import tcomp as C, proj as P, backdrops as BD, designs as D, logos as LG
import batch as B

R12 = C.R12
R13 = os.path.join(os.path.dirname(R12), 'r13')
OUT = os.path.join(R13, 'out')
CASES_JSON = os.path.join(R13, 'cases.json')
SITE = B.SITE
BRANDING = {'branding-rebranding', 'grafisch-ontwerp-print'}
CONTENT = {'content-marketing-online-ads'}
PRINT_BRAND = {'card_front', 'card_back', 'letter', 'envelope', 'poster', 'poster_photo', 'poster_paper', 'brochure_l',
               'brochure_r', 'flag', 'aframe', 'sticker', 'emboss_paper'}
PRINT_LOGO = {'wall_logo', 'wall_mark', 'mark'}
OLD = ['t1_gravity', 't2_closeup', 't3_plinth', 't4_float_ipad', 't5_ipads_dark']
# cover preference (higher first) — clean, readable at thumbnail size
COVER_RANK = ['d01_desk_studio__a', 'd02_mac_top__b', 'd04_phone_trio__a', 't1_gravity', 'd15_mac_phone_desk__a', 'd03_flatlay__b',
              'd11_ui_panels__a', 'd19_studio_front__b', 'd10_tablets_iso__a', 'd17_ipads_lean__a', 'd08_ipad_stand__b',
              'd09_ipad_keyboard__a', 'b12_letter_mac__a', 'd05_phone_lean__a', 'd18_mac_profile__b', 't3_plinth', 'd14_billboard__a',
              'b11_cards_phone__b', 'd20_gravity_alt__a', 'd02_mac_top__a', 'd03_flatlay__a', 'd06_phone_linen__b', 'd13_macro_mac__a',
              'd01_desk_studio__b', 'd15_mac_phone_desk__b', 'd04_phone_trio__b', 'd07_phone_stone__a', 
              't5_ipads_dark', 'd10_tablets_iso__b', 'd11_ui_panels__b', 'd16_phone_plinth__b', 'd17_ipads_lean__b', 'd19_studio_front__a',
              'd09_ipad_keyboard__b', 'd20_gravity_alt__b', 'd14_billboard__b', 'd05_phone_lean__b', 'd06_phone_linen__a',
              'd07_phone_stone__b', 'd12_macro_phone__a', 'd13_macro_mac__b', 'd18_mac_profile__a', 'd08_ipad_stand__a',
              'd19_studio_front__c', 'd15_mac_phone_desk__c', 'd17_ipads_lean__c', 'd09_ipad_keyboard__c', 'd10_tablets_iso__c',
              'd18_mac_profile__c', 'd08_ipad_stand__c', 'd11_ui_panels__c', 'd14_billboard__c',
              'b13_social_phone__a', 'b11_cards_phone__a', 'b12_letter_mac__b', 't2_closeup',
              'b01_cards__a', 'b02_letterhead__b', 'b03_poster_wall__b', 'b04_posters_lean__a', 'b06_wall_logo__b', 'b07_aframe__a',
              'b08_flags__a', 'b09_brochure__b', 'b05_emboss__a', 'b06_wall_logo__c', 'b02_letterhead__a', 'b01_cards__b',
              'b09_brochure__a', 'b03_poster_wall__a', 'b04_posters_lean__b', 'b06_wall_logo__a', 'b07_aframe__b', 'b08_flags__b',
              'b05_emboss__b', 'b10_sticker__b', 'b10_sticker__a', 'b13_social_phone__b', 'd12_macro_phone__b']
NEUTRAL = {'light': ['#ECEBE7', '#E3E4E6', '#D7D5D0', '#CDCFD2'], 'dark': ['#2A2B2F', '#1D1E21', '#141518'], 'navy': ['#0B1426', '#0D1830']}
FAM_TO_BG = {'light': ['white', 'light-grey', 'white-leaves', 'mid-grey', 'grey-plaster', 'white-dune', 'white-linen'],
             'dark': ['graphite', 'anthracite', 'near-black', 'anthracite-plaster', 'graphite-dune'],
             'navy': ['navy-glow', 'navy-nebula'], 'brand': ['brand-dark', 'brand-dark-dune', 'brand-dark-plaster']}


# cases with a hand-made set from an earlier round: keep it, add only branding stills after it, no new cover / hero
PRESERVE = {'misterglass': dict(offset=10, max=8, keep=lambda f: f[:4] in {f'r-{i:02d}' for i in range(1, 11)} or f.startswith('r-hero'))}


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def cases():
    return {c['slug']: c for c in json.load(open(CASES_JSON))}


PATTERNS = os.environ.get('R13_TPL', '*').split(',')


def library(final=True):
    """Templates with a final still render (final=False: also preview-only ones; 'base' says which)."""
    out = {}
    for tdir in sorted(sum((glob.glob(os.path.join(C.TPL, pt)) for pt in PATTERNS), [])):
        t = os.path.basename(tdir)
        if t.startswith('v_'): continue
        base = 'still' if os.path.exists(os.path.join(tdir, 'still_rgb.exr')) else 'pv' if os.path.exists(os.path.join(tdir, 'pv_rgb.exr')) else None
        if base is None or (final and base != 'still'): continue
        meta = json.load(open(os.path.join(tdir, 'meta.json')))
        roles = sorted({s['role'] for s in meta.get('screens', {}).values()})
        prints = sorted({p['role'] for p in (meta.get('prints') or {}).values()})
        out[t] = dict(roles=roles, prints=prints, tints=sorted({x['role'] for x in (meta.get('tints') or {}).values()}),
                      transparent=meta.get('transparent', False), portrait=meta['h'] > meta['w'], w=meta['w'], h=meta['h'], base=base)
    return out


def library_any():
    return library(final=False)


def eligible(t, L, case, has_caps, has_logo):
    sv = set(case['services'])
    if L['roles'] and not has_caps: return False
    if 'social' in L['roles'] and not (sv & CONTENT and has_logo): return False
    pr = set(L['prints'])
    if pr & PRINT_BRAND and not (sv & BRANDING and has_logo): return False
    if pr & PRINT_LOGO and not has_logo: return False
    if not L['roles'] and not pr: return False
    return True


def families(slug, n):
    """Background family per still: ~1/3 light, ~1/4 brand-dark, ~1/4 dark, rest navy, rotated per project."""
    base = ['light', 'brand', 'dark', 'light', 'navy', 'brand', 'light', 'dark', 'brand', 'light', 'navy', 'dark']
    k = h(slug) % len(base)
    return [base[(k + i) % len(base)] for i in range(n)]


def make_plan(max_stills=18):
    lib = library(final=False); cs = cases(); PR = P.projects()
    order = [l.strip() for l in open(os.path.join(R12, 'work', 'grid_order.txt')) if l.strip() in cs]
    order += [s for s in cs if s not in order]
    el_all = {}
    for slug in order:
        c = cs[slug]
        has_caps = slug in PR
        mono, _ = LG.load(slug)
        el = [t for t, L in lib.items() if eligible(t, L, c, has_caps, mono is not None)]
        if el: el_all[slug] = (el, has_caps, mono is not None)
    # 1. unique covers: cases whose card shows the r-cover first (in /cases grid order), then the rest
    shows = {s: str(cs[s].get('cover') or '').endswith('r-cover.webp') or not cs[s].get('cover') for s in el_all}
    used = set(); covers = {}
    for pass_ in (True, False):
        for slug in order:
            if slug not in el_all or shows[slug] != pass_ or slug in PRESERVE: continue
            ts = sorted((t for t in el_all[slug][0] if not lib[t]['portrait']), key=lambda t: COVER_RANK.index(t) if t in COVER_RANK else 999)
            pick = next((t for t in ts if t not in used), None)
            if pick: used.add(pick); covers[slug] = pick
    # 2. stills: device / branding interleaved, the cover always among them
    plan = {}
    for slug in order:
        if slug not in el_all: continue
        el, has_caps, has_logo = el_all[slug]
        if slug in PRESERVE:
            el = [t for t in el if not lib[t]['roles']]
            if not el: continue
        rnd = np.random.default_rng(h(slug))
        dev = [t for t in el if lib[t]['roles']]; br = [t for t in el if not lib[t]['roles']]
        rnd.shuffle(dev); rnd.shuffle(br)
        seq = []
        while (dev or br) and len(seq) < max_stills:
            for _ in range(2):
                if dev and len(seq) < max_stills: seq.append(dev.pop())
            if br and len(seq) < max_stills: seq.append(br.pop())
        if slug in PRESERVE: seq = seq[:PRESERVE[slug]['max']]
        cv = None if slug in PRESERVE else covers.get(slug)
        if cv and cv not in seq:
            seq[min(len(seq) - 1, 3 + h(slug) % 5)] = cv
        fams = families(slug, len(seq))
        stills = []
        for i, (t, fam) in enumerate(zip(seq, fams)):
            L = lib[t]
            if L['transparent']:
                opts = FAM_TO_BG[fam]
                stills.append(dict(t=t, fam=fam, bg=opts[(h(slug + t) >> 3) % len(opts)]))
            else:
                col = None if fam == 'brand' else NEUTRAL[fam][(h(slug + t) >> 5) % len(NEUTRAL[fam])]
                stills.append(dict(t=t, fam=fam, tint=col))
        plan[slug] = dict(stills=stills, has_caps=has_caps, has_logo=has_logo, shows_cover=shows[slug])
        if cv: plan[slug]['cover'] = cv
    json.dump(plan, open(os.path.join(R13, 'plan.json'), 'w'), indent=1)
    return plan


# ---------------------------------------------------------------------------------- compositing
_PP = {}


def prepared(t):
    """Developed template (cached on disk); falls back to the preview render while the final one is not there yet."""
    if t not in _PP:
        if len(_PP) > 1: _PP.clear()          # a developed template is ~1-1.5 GB in memory: keep few
        base = 'still' if os.path.exists(os.path.join(C.TPL, t, 'still_rgb.exr')) else 'pv'
        B.prep_one((t, base))
        _PP[t] = C.load_prepared(os.path.join(B.cache_dir(t), base + '.npz'))
    return _PP[t]


def brand_for(slug, case, caps):
    mono, rgba = LG.load(slug)
    if mono is None:
        return None
    p = P.projects().get(slug)
    # URL printed on stationery: the case's verified URL, else the BRAND kit's site, else the captured site's
    # domain; never a staging domain (*.webflow.io) — then no URL at all
    dom = lambda u: (u or '').replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0]
    site = dom(case.get('url'))
    if not site:
        try: site = dom(json.load(open(os.path.join(R13, 'brand', slug, 'meta.json'))).get('site'))
        except Exception: site = ''
    if not site and p: site = P.domain(p)
    url = '' if site.endswith('webflow.io') else site
    b = D.Brand(slug, case['color'], url, mono, rgba=rgba, captures=caps)
    try:
        im = json.load(open(os.path.join(R13, 'brand', slug, 'imagery.json')))['images']
        b.imagery = [os.path.join(R13, 'brand', slug, x['file']) for x in im
                     if not x.get('transparent') and min(x.get('width', 0), x.get('height', 0)) >= 700]
    except Exception:
        pass
    return b


_UP = {}


def upright(t, pp):
    """Copy of pp whose print surfaces are re-expressed in upright design coords (orient.py): logos and text
    always read upright and never mirrored, whatever way the paper lies in the picture. Each print gets its own
    role key ('card_front#2'), as two cards of the same role can lie differently."""
    import orient as O
    key = (t, pp["W"], pp["H"])
    if key not in _UP:
        prs = []
        for i, pr in enumerate(pp['prints']):
            o = O.orientation(pr['jac'], pr['m'])
            du, dv, jac = O.apply(pr['du'], pr['dv'], pr['jac'], o)
            l = list(pr['light']); lv = {'u': l[0], 'v': l[1]}
            light = [(-1 if o['U'].startswith('-') else 1) * lv[o['U'].lstrip('-')], (-1 if o['V'].startswith('-') else 1) * lv[o['V'].lstrip('-')]]
            prs.append(dict(pr, du=du, dv=dv, jac=jac, light=light, role=f"{pr['role']}#{i}", swap=o['swapped'], orient=o))
        _UP[key] = prs
    q = dict(pp); q["prints"] = _UP[key]
    return q


def setup_still(slug, case, st, caps, brand, dcache, disp_cache, video=False):
    """Everything project-specific for one still / shot: developed set (tints + prints), backdrop, displays."""
    t = st['t']; pp = prepared(t)
    meta = json.load(open(os.path.join(C.TPL, t, 'meta.json')))
    tints = None
    base = BD.lin('#%02x%02x%02x' % D.tint_dark(case['color'])) if st.get('tint') is None else BD.lin(st['tint'])
    if pp.get('tints'):
        tints = {}
        for i, tr in enumerate(pp['tints']):
            f = 1.0 if i == 0 else (0.82 if base.mean() > 0.3 else 1.35)        # second surface a shade off
            tints[tr['role']] = np.clip(base * f, 0, 1)
    prints = None
    if pp.get('prints') and brand:
        prints = {}
        pp = upright(t, pp)
        for pr in pp['prints']:
            r = pr['role']
            if r.split('#')[0] == 'wall_logo':      # the wall colour must match the tinted wall around it
                wc = tints.get('wall_bg') if tints else base
                wall = tuple(int(round(float(v))) for v in (C.oetf(np.asarray(wc, np.float32)).reshape(-1) * 255))
                # light wall: tone-on-tone sign; dark wall: the letters in the brand colour (or off-white)
                col = None if D.lum(wall) > 0.3 else (brand.fill if D.lum(brand.fill) > 0.22 else (236, 235, 232))
                key = ('wall_logo', wall, col)
                if key not in dcache: dcache[key] = D.wall_logo(brand, wall=wall, color=col)
                prints[r] = dcache[key]
            else:
                prints[r] = D.design_for(r, brand, dcache, swap=pr.get('swap', False))
    roles = sorted({x['role'] for x in pp['screens']})
    if video:
        ds = P.displays_for(P.projects()[slug], roles, video=True, caps=caps, glass=meta.get('glass'), brand=brand) if (roles and caps) else {}
    else:
        need = [r for r in roles if r not in disp_cache]
        if need and caps:
            disp_cache.update(P.displays_for(P.projects()[slug], need, caps=caps, glass=meta.get('glass'), brand=brand))
        ds = disp_cache
    bg = None
    if pp['transparent']:
        base = '#%02x%02x%02x' % D.backdrop_dark(case['color']) if st['fam'] == 'brand' else None
        bg = BD.backdrop(st['bg'], meta['camera'], pp['W'], pp['H'], alpha=pp['a'], base=base)
    dev = C.develop_set(pp, tints, prints) if (tints or prints) else None
    return dict(pp=pp, dev=dev, bg=bg, ds=ds, meta=meta)


def compose(S, aniso=6):
    return C.over(S['pp'], C.foreground(S['pp'], S['ds'], 0.25, aniso, dev=S['dev']), bg=S['bg'])


def render_still(slug, case, st, caps, brand, dcache, disp_cache):
    return Image.fromarray(compose(setup_still(slug, case, st, caps, brand, dcache, disp_cache)))


def stills_one(args):
    slug = args[0] if isinstance(args, tuple) else args
    plan = json.load(open(os.path.join(R13, 'plan.json')))[slug]
    case = cases()[slug]
    p = P.projects().get(slug)
    caps = P.captures(p) if p else {}
    brand = brand_for(slug, case, caps)
    missing = [st['t'] for st in plan['stills'] if not os.path.exists(os.path.join(C.TPL, st['t'], 'still_rgb.exr'))]
    if missing:      # never ship a preview-size render
        raise RuntimeError(f'{slug}: no final render for {missing}')
    d = os.path.join(OUT, slug); src = os.path.join(d, 'src'); os.makedirs(src, exist_ok=True)
    for f in glob.glob(os.path.join(d, 'r-*.webp')) + glob.glob(os.path.join(src, 'r-*.png')):
        if 'r-hero' not in f: os.remove(f)
    dcache, disp = {}, {}
    t0 = time.time()
    ims = {}                  # kept in memory (no lossless copies on disk); fit encodes them to the budget
    for i, st in enumerate(plan['stills']):
        img = render_still(slug, case, st, caps, brand, dcache, disp)
        name = f"r-{i + 1 + PRESERVE.get(slug, {}).get('offset', 0):02d}-{st['t'].replace('__', '-').replace('_', '-')}"
        ims[name] = img
        if plan.get('cover') == st['t']:
            w, hh = img.size; ch = round(w * 1500 / 2400); y0 = max(0, (hh - ch) // 2)
            ims['r-cover'] = img.crop((0, y0, w, y0 + ch)).resize((2400, 1500), Image.LANCZOS)
    fit_one(slug, ims=ims)
    return slug, len(plan['stills']), time.time() - t0


def sheet(slugs=None):
    from PIL import ImageDraw, ImageFont
    F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 15)
    plan = json.load(open(os.path.join(R13, 'plan.json')))
    slugs = slugs or list(plan)
    # covers sheet
    cells = []
    for s in slugs:
        f = os.path.join(OUT, s, 'r-cover.webp')
        if os.path.exists(f):
            im = Image.open(f).convert('RGB'); im.thumbnail((400, 260)); cells.append((im, f"{s}  [{plan[s].get('cover')}]"))
    _grid(cells, os.path.join(R13, 'sheet-covers.jpg'), F, cols=6, cw=410, chh=290)
    # cases with their own cover: current cover next to the r-cover (to decide replaceCover)
    cs = cases(); cells = []
    pub = SITE.split('/media/cases')[0]
    for s in slugs:
        cur = cs[s].get('cover') or ''
        f = os.path.join(OUT, s, 'r-cover.webp')
        if not cur or cur.endswith('r-cover.webp') or not os.path.exists(f): continue
        try:
            a = Image.open(pub + cur).convert('RGB'); a.thumbnail((300, 200))
        except Exception:
            continue
        b = Image.open(f).convert('RGB'); b.thumbnail((300, 200))
        c = Image.new('RGB', (610, 200), (24, 24, 26)); c.paste(a, (0, 0)); c.paste(b, (310, 0))
        cells.append((c, f"{s}: now {Image.open(pub + cur).size} | r-cover"))
    _grid(cells, os.path.join(R13, 'sheet-cover-compare.jpg'), F, cols=3, cw=620, chh=230)
    # per-project directory sheets, 6 projects per page
    for k in range(0, len(slugs), 6):
        rows = []
        for s in slugs[k:k + 6]:
            fs = sorted(glob.glob(os.path.join(OUT, s, 'r-[0-9]*.webp')))
            ims = []
            for f in fs:
                im = Image.open(f).convert('RGB'); im.thumbnail((240, 180)); ims.append(im)
            rows.append((s, ims))
        W = 12 + 10 * 250; Hh = sum(30 + 190 * ((len(ims) + 9) // 10) for _, ims in rows) + 10
        sh = Image.new('RGB', (W, Hh), (24, 24, 26)); dr = ImageDraw.Draw(sh); y = 6
        for s, ims in rows:
            dr.text((8, y), f'{s}  ({len(ims)} stills)', font=F, fill=(235, 235, 235)); y += 24
            for i, im in enumerate(ims):
                sh.paste(im, (8 + (i % 10) * 250, y + (i // 10) * 190))
            y += 190 * ((len(ims) + 9) // 10) + 6
        sh.save(os.path.join(R13, f'sheet-dir-{k // 6 + 1:02d}.jpg'), quality=82)


def _grid(cells, out, F, cols, cw, chh):
    from PIL import ImageDraw
    if not cells: return
    sh = Image.new('RGB', (cols * cw + 10, ((len(cells) + cols - 1) // cols) * chh + 10), (24, 24, 26)); dr = ImageDraw.Draw(sh)
    for i, (im, lab) in enumerate(cells):
        x = 10 + (i % cols) * cw; y = 10 + (i // cols) * chh
        sh.paste(im, (x, y)); dr.text((x, y + im.height + 3), lab, font=F, fill=(220, 220, 224))
    sh.save(out, quality=84)


def install(slugs):
    tot = 0
    for s in slugs:
        src = os.path.join(OUT, s); dst = os.path.join(SITE, s)
        if not os.path.isdir(src): continue
        os.makedirs(dst, exist_ok=True)
        keep = {f for f in os.listdir(src) if f.startswith('r-')}
        for f in os.listdir(dst):
            if f.startswith('r-') and f not in keep and not f.startswith('r-hero') and not (s in PRESERVE and PRESERVE[s]['keep'](f)):
                os.remove(os.path.join(dst, f))
        for f in sorted(keep):
            if f.endswith('.webp') or f.endswith('.mp4'):
                shutil.copy2(os.path.join(src, f), os.path.join(dst, f)); tot += os.path.getsize(os.path.join(src, f))
    return tot


STILL_W = 2000        # gallery stills (3:2 -> 2000x1333); the cover is 1800x1125 (16:10)
COVER_W = 1800


def _enc(im, w, q):
    import io
    if im.width > w:
        im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    b = io.BytesIO(); im.save(b, 'webp', quality=q, method=6); return b.getvalue()


def fit_one(args, budget=None, ims=None):
    """Encode all r-* stills of a project (from the lossless sources) to WebP within the stills budget
    (R13_STILLS_MB, default 2.9 MB incl. the cover): the highest quality that fits, first at full size, then smaller."""
    slug = args[0] if isinstance(args, tuple) else args
    d = os.path.join(OUT, slug); src = os.path.join(d, 'src')
    budget = budget or float(os.environ.get('R13_STILLS_MB', '2.9')) * 1048576
    if ims is None:
        ims = {f[:-4]: Image.open(os.path.join(src, f)).convert('RGB') for f in sorted(os.listdir(src)) if f.endswith('.png')}
    best = None
    for scale in (1.0, 0.9, 0.8):
        for q in (86, 83, 80, 77, 74):
            enc = {n: _enc(im, int((COVER_W if n == 'r-cover' else STILL_W) * scale), q) for n, im in ims.items()}
            tot = sum(len(v) for v in enc.values())
            best = (scale, q, tot, enc)
            if tot <= budget: break
        if best[2] <= budget: break
    scale, q, tot, enc = best
    for f in glob.glob(os.path.join(d, 'r-*.webp')):
        if 'r-hero' not in f and os.path.basename(f)[:-5] not in enc: os.remove(f)
    for n, data in enc.items():
        open(os.path.join(d, n + '.webp'), 'wb').write(data)
    return slug, f'{scale:.1f}x q{q}', tot


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('-j')]
    j = next((int(a[2:]) for a in sys.argv[1:] if a.startswith('-j')), 1)
    cmd = args[0]
    t0 = time.time()
    if cmd == 'prep':
        jobs = [(t, 'still') for t in library()]
        B.run(B.prep_one, jobs, j)
    elif cmd == 'plan':
        pl = make_plan()
        n = sum(len(v['stills']) for v in pl.values())
        print('cases', len(pl), 'stills', n, 'covers', sum(1 for v in pl.values() if v.get('cover')))
    else:
        plan = json.load(open(os.path.join(R13, 'plan.json')))
        sel = list(plan) if len(args) < 2 or args[1] == 'all' else args[1].split(',')
        if cmd == 'stills':
            for r in B.run(stills_one, [(s,) for s in sel], j): print('stills', r[0], r[1], f'{r[2]:.0f}s', flush=True)
        elif cmd == 'fit':
            tot = 0
            for r in B.run(fit_one, [(s,) for s in sel], j):
                tot += r[2]; print('fit', r[0], r[1], f'{r[2] / 1048576:.2f} MB', flush=True)
            print(f'stills total {tot / 1048576:.1f} MB')
        elif cmd == 'sheet':
            sheet(sel)
        elif cmd == 'install':
            print(f'installed {install(sel) / 1048576:.1f} MB')
    print(f'{cmd} done in {time.time() - t0:.0f}s')
