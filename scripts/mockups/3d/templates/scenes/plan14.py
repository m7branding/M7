"""plan14 — round 14 per-project plan with verified palettes (r14/palette/palettes.json).

  python plan14.py plan          writes r13/plan.json (+ r14/plan14.json copy)
Rules: no invented print (b01-b04, b07-b09, b11-b13 retired); logo scenes only b05 (blind emboss), b06 (raised wall
logo) and b10 (sticker), with the logo in its true colours on a neutral surface (palette neutrals) or the verified
full-bleed colour; device backdrops light grey / anthracite / near-black / navy, darkened brand colour only when the
palette has a verified fullBleed; covers unique (cases whose card shows the r-cover first, in grid order).
"""
import sys, os, json, hashlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
import proj as P, logos as LG
import batch13 as B13

RETIRED = ('b01_', 'b02_', 'b03_', 'b04_', 'b07_', 'b08_', 'b09_', 'b11_', 'b12_', 'b13_')
LOGO = ('b05_', 'b06_', 'b10_')
NEUTRAL = {'light': ['#E3E4E6', '#ECEBE7', '#D7D5D0'], 'dark': ['#2A2B2F', '#1D1E21', '#141518'], 'navy': ['#0B1426', '#0D1830']}
FAM_BG = {'light': ['light-grey', 'white', 'mid-grey', 'grey-plaster', 'white-dune', 'white-leaves'],
          'dark': ['anthracite', 'graphite', 'near-black', 'anthracite-plaster', 'graphite-dune'],
          'navy': ['navy-glow', 'navy-nebula'], 'brand': ['brand-dark', 'brand-dark-dune', 'brand-dark-plaster']}


# M7's own supplied covers win for these (src/content/supplied-media.ts): their r-cover never shows
SUPPLIED_COVER = {'expociety-app', 'infrai', 'repairlab', 'jurgh-detailing', 'mindyourpass', 'kippenkar', 'taylor'}
# new cases without captures or palettes (coordinator): no generated media
SKIP = {'citex-ai', 'eredivisietoppers', 'nova-special-cars', 'designers-house', 'onderbouwd-investeren', 'battery-park-montessori'}


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def families(slug, n):
    """Neutral rhythm; the verified brand field (darkened) only for cases with a palette fullBleed."""
    base = ['light', 'dark', 'navy', 'light', 'dark', 'brand', 'light', 'navy', 'dark', 'light', 'brand', 'dark']
    blue = B13.is_blue(slug)
    if not B13.bleed(slug):
        base = [(('navy' if blue else 'light') if i % 2 else 'dark') if f == 'brand' else f for i, f in enumerate(base)]
    if not blue:          # navy only for blue brands: the others get dark / light neutrals only
        base = [('dark' if i % 2 else 'light') if f == 'navy' else f for i, f in enumerate(base)]
    k = h(slug) % len(base)
    return [base[(k + i) % len(base)] for i in range(n)]


def logo_st(slug, t, i):
    """Surface + logo variant for a logo scene: light neutral (true-colour logo, or tone-on-tone), dark neutral
    (logo version for dark surfaces), or the verified full-bleed field."""
    pal = B13.palette(slug); neu = pal.get('neutrals') or {}
    light = neu.get('light') or '#ECEBE7'; dark = neu.get('dark') or '#1D1E21'
    has_light = B13.logo_variant(slug, 'light') is not None
    lum = lambda hx: (0.2126 * B13.hexrgb(hx)[0] + 0.7152 * B13.hexrgb(hx)[1] + 0.0722 * B13.hexrgb(hx)[2]) / 255
    opts = [('dark', dark, 'dark')]
    if has_light: opts.append(('light', light, 'light'))
    fb = B13.bleed(slug)
    if fb:                                   # on a light brand field the logo's version for light surfaces
        if lum(fb) < 0.55: opts.append(('bleed', fb, 'dark'))
        elif has_light: opts.append(('bleed', fb, 'light'))
    fam, surf, var = opts[(h(slug + t) + i) % len(opts)]
    if t.startswith('b06_'):
        return dict(t=t, fam='brand' if fam == 'bleed' else fam, surface=surf, logo=var, tint=None if fam == 'bleed' else (light if fam == 'light' else dark))
    if t.startswith('b10_'):          # sticker: white disc + true-colour logo, or black disc + logo for dark
        disc, v = ('#FAFAF8', 'light') if has_light else ('#18181A', 'dark')
        f2 = 'light' if (h(slug + t) % 2) else 'dark'
        return dict(t=t, fam=f2, surface=surf, logo=v, disc=disc, tint=NEUTRAL[f2][h(slug + t) % len(NEUTRAL[f2])])
    # b05 blind emboss (colourless) on a neutral floor
    fams = ['light', 'dark', 'navy'] if B13.is_blue(slug) else ['light', 'dark']
    f2 = fams[h(slug + t) % len(fams)]
    return dict(t=t, fam=f2, surface=surf, logo='tone', tint=NEUTRAL[f2][h(slug) % len(NEUTRAL[f2])])


FLOAT3D = ['f01_mac_float__a', 'f03_studio_float__a', 'f02_phone_float__a', 'f04_ipad_float__a', 'f01_mac_float__b',
           'f03_studio_float__b', 'f02_phone_float__b', 'f04_ipad_float__b']
UI2D_LAYOUTS = ['flank', 'stack', 'corner']


def bboxes():
    """Screen bbox (fractions of the frame) of every final device template, cached in r14/bbox.json."""
    import tcomp as C, float2d as F2
    f = os.path.join(os.path.dirname(B13.R13), 'r14', 'bbox.json')
    bb = json.load(open(f)) if os.path.exists(f) else {}
    lib = B13.library(final=True); ch = False
    for t, L in lib.items():
        if t in bb or not L['roles'] or t.startswith(('f0', 'b')): continue
        pp = B13.prepared(t); x0, y0, x1, y1 = F2.screen_bbox(pp)
        bb[t] = [x0 / pp['W'], y0 / pp['H'], x1 / pp['W'], y1 / pp['H']]; ch = True
    if ch: json.dump(bb, open(f, 'w'), indent=0)
    return bb


def phase3_extras(slug, el, lib, rok, seq):
    """Round 14 phase 3: floating UI stills from the site's real snippets: 3D card scenes (f0x) whose cards can all
    be filled honestly, and flat cards over device renders that leave room around the screen."""
    import snips as SN, float2d as F2
    if not SN.load(slug): return []
    out = []; k = h(slug)
    pp_slots = {}
    used_sn = set()                 # never the same snippet in two compositions of one case
    nsn = len(SN.load(slug))
    f_order = FLOAT3D[(k % 2)::1] + FLOAT3D[:(k % 2)]
    if nsn < 8:            # few snippets: one 3D scene, the 2-card one first, the rest goes to flat cards
        f_order = sorted(f_order, key=lambda t: (not t.startswith('f04'), t.startswith('f03')))
    for t in f_order:
        if len([x for x in out if 'snips' in x]) >= (2 if nsn >= 8 else 1): break
        if not os.path.exists(os.path.join(B13.C.TPL, t, 'still_rgb.exr')): continue
        if any(x['t'].split('__')[0] == t.split('__')[0] for x in out): continue
        L = lib.get(t)
        if not L or not (set(r for r in L['roles'] if not r.startswith('snip_')) <= rok): continue
        if t not in pp_slots:
            pp = B13.prepared(t); meta = json.load(open(os.path.join(B13.C.TPL, t, 'meta.json')))
            pp_slots[t] = B13.snip_slots(pp, meta)
        pick = SN.assign(slug, list(pp_slots[t].items()), seed=t, exclude=used_sn)
        if not pick: continue
        used_sn |= {s['file'] for s in pick.values()}
        fl3 = ['dark', 'navy', 'light'] if B13.is_blue(slug) else ['dark', 'light', 'dark']
        fam = fl3[(k >> len(out)) % 3]
        out.append(dict(t=t, fam=fam, tint=NEUTRAL[fam][(k >> 3) % len(NEUTRAL[fam])],
                        snips={r: s['file'] for r, s in pick.items()}))
    bb = bboxes()
    cands = [t for t in el if t in bb and (bb[t][2] - bb[t][0]) <= 0.70 and (bb[t][3] - bb[t][1]) <= 0.85
             and not lib[t]['portrait'] and not t.endswith(('__n', '__p')) and not t.startswith(('d14_', 'd12_', 'd13_'))]
    cands.sort(key=lambda t: (t in seq, h(slug + t) % 101))
    used = set()
    for t in cands:
        if len([x for x in out if 'ui2d' in x]) >= 4 or len(out) >= 6: break
        if t.split('__')[0] in used: continue
        i = len([x for x in out if 'ui2d' in x])
        lay = UI2D_LAYOUTS[(k + i) % 3]
        left = len([x for x in SN.load(slug) if x['file'] not in used_sn])
        n = 3 if left >= 9 else 2 if left >= 3 else 1
        if n == 1 and len(out) >= 5: break
        sn = F2.pick(slug, n, t, exclude=used_sn, min_n=1)
        if not sn: break
        used.add(t.split('__')[0]); used_sn |= {s['file'] for s in sn}
        fam = (['light', 'dark', 'navy'] if B13.is_blue(slug) else ['light', 'dark', 'light'])[(k + i) % 3]
        st = dict(t=t, fam=fam, ui2d=dict(layout=lay, seed=t, n=len(sn), files=[s['file'] for s in sn],
                                          tilt=lay == 'stack' or (k >> (5 + i)) % 3 == 0, mirror=bool((k >> (2 + i)) & 1)))
        if lib[t]['transparent']: st['bg'] = FAM_BG[fam][(k >> 2) % len(FAM_BG[fam])]
        else: st['tint'] = NEUTRAL[fam][(k >> 4) % len(NEUTRAL[fam])]
        out.append(st)
    return out


def make_plan(max_stills=18):
    lib = {t: L for t, L in B13.library(final=False).items() if not t.startswith(RETIRED) and not t.startswith('f0')}
    lib_all = B13.library(final=False); rok_all = {}
    P3 = bool(os.environ.get('R14_PHASE3'))
    cs = B13.cases(); PR = P.projects()
    order = [l.strip() for l in open(os.path.join(B13.R12, 'work', 'grid_order.txt')) if l.strip() in cs]
    order += [s for s in cs if s not in order]
    el_all = {}
    for slug in order:
        if slug in SKIP: continue
        c = cs[slug]; has_caps = slug in PR
        has_logo = LG.variants(slug) is not None
        rok = P.roles_ok(PR[slug]) if has_caps else None
        rok_all[slug] = rok
        ex = (PR.get(slug) or {}).get('exclude_t') or []
        el = []
        for t, L in lib.items():
            if any(t.startswith(x) for x in ex): continue
            if t.startswith(LOGO):
                if has_logo: el.append(t)
                continue
            if not L['roles'] or not has_caps: continue
            if 'social' in L['roles']: continue
            if not (set(L['roles']) <= rok): continue
            el.append(t)
        if el: el_all[slug] = (el, has_caps, has_logo)
    shows = {s: (str(cs[s].get('cover') or '').endswith('r-cover.webp') or not cs[s].get('cover')) and s not in SUPPLIED_COVER
             for s in el_all}
    used = set(); covers = {}
    # keep the covers of the current plan where they are still eligible (no cascade of new covers)
    try: prev = json.load(open(os.path.join(B13.R13, 'plan.json')))
    except Exception: prev = {}
    for slug in order:
        cv = (prev.get(slug) or {}).get('cover')
        if slug in el_all and slug not in P.R14_SYNTH and cv and cv in el_all[slug][0] and cv not in used:
            used.add(cv); covers[slug] = cv
    for pass_ in (True, False):
        for slug in order:
            if slug not in el_all or shows[slug] != pass_ or slug in B13.PRESERVE or slug in covers: continue
            ts = sorted((t for t in el_all[slug][0] if not lib[t]['portrait']),
                        key=lambda t: B13.COVER_RANK.index(t) if t in B13.COVER_RANK else 999)
            dev = [t for t in ts if not t.startswith(LOGO)]
            pick = next((t for t in dev if t not in used), None)
            if pick is None and not pass_:
                pick = next((t for t in ts if t not in used), None)
            if pick: used.add(pick); covers[slug] = pick
    plan = {}
    for slug in order:
        if slug not in el_all: continue
        el, has_caps, has_logo = el_all[slug]
        if slug in B13.PRESERVE:
            el = [t for t in el if t.startswith(LOGO)]
            if not el: continue
        rnd = np.random.default_rng(h(slug))
        dev = [t for t in el if not t.startswith(LOGO)]; lg = [t for t in el if t.startswith(LOGO)]
        rnd.shuffle(dev); rnd.shuffle(lg)
        cap = min(max_stills, (PR.get(slug) or {}).get('max_stills') or max_stills)
        if slug in B13.PRESERVE: cap = min(cap, B13.PRESERVE[slug]['max'])
        seq = []
        if slug in P.R14_SYNTH:            # formerly logo-only, now with its live site: ~11 device stills + the 7 logo stills
            dev, lg = dev[-11:], lg[-7:]; cap = len(dev) + len(lg)
        while (dev or lg) and len(seq) < cap:
            for _ in range(4 if slug not in P.R14_SYNTH else 2):
                if dev and len(seq) < cap: seq.append(dev.pop())
            if lg and len(seq) < cap: seq.append(lg.pop())
        cv = covers.get(slug)
        if cv and cv not in seq:
            seq[min(len(seq) - 1, 2 + h(slug) % 5)] = cv
        extras = phase3_extras(slug, el, lib_all, rok_all.get(slug) or set(), seq) if (P3 and has_caps) else []
        if extras and slug not in P.R14_SYNTH:   # the floating UI stills take the place of some plain ones (same budget)
            keep = max(12, cap - len(extras))
            if cv in seq[keep:]: seq = [t for t in seq if t != cv][:keep - 1] + [cv]
            else: seq = seq[:keep]
        fams = families(slug, len(seq))
        stills = []
        for i, (t, fam) in enumerate(zip(seq, fams)):
            L = lib[t]
            if t.startswith(LOGO):
                stills.append(logo_st(slug, t, i)); continue
            if L['transparent']:
                opts = FAM_BG[fam]; stills.append(dict(t=t, fam=fam, bg=opts[(h(slug + t) >> 3) % len(opts)]))
            else:
                stills.append(dict(t=t, fam=fam, tint=None if fam == 'brand' else NEUTRAL[fam][(h(slug + t) >> 5) % len(NEUTRAL[fam])]))
        for j, x in enumerate(extras):          # spread them through the gallery
            stills.insert(min(len(stills), 2 + j * 3 + (h(slug) % 2)), x)
        plan[slug] = dict(stills=stills, has_caps=has_caps, has_logo=has_logo, shows_cover=shows[slug])
        if cv: plan[slug]['cover'] = cv
    json.dump(plan, open(os.path.join(B13.R13, 'plan.json'), 'w'), indent=1)
    json.dump(plan, open(os.path.join(os.path.dirname(B13.R13), 'r14', 'plan14.json'), 'w'), indent=1)
    return plan


if __name__ == '__main__':
    pl = make_plan()
    import collections
    print('cases', len(pl), 'stills', sum(len(v['stills']) for v in pl.values()), 'covers', sum(1 for v in pl.values() if v.get('cover')))
    print('families', collections.Counter(st['fam'] for v in pl.values() for st in v['stills']))
    print('shows but no cover', [s for s, v in pl.items() if v['shows_cover'] and not v.get('cover')])
    print('logo-only', {s: len(v['stills']) for s, v in pl.items() if not v['has_caps']})
