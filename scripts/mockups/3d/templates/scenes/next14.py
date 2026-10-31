"""next14 — round 14: the wide image for the "next case" card (public/media/cases/<slug>/r-next.webp, 2400x1100).

  python next14.py plan            r14/next_plan.json: one '<scene>__n' composition per case (not its cover's scene)
  python next14.py render [slugs]  composite at full quality (aniso 8), calm darker left side, WebP
  python next14.py sheet           r14/sheet-next.jpg

The '__n' cameras (scenekit autoframe) put the subject centre-right inside the middle ~60% of the height and leave
the left 40% calm. Backdrops: dark neutrals or deep navy only (no unverified brand colours).
"""
import sys, os, json, time, hashlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
from PIL import Image
import tcomp as C, proj as P, backdrops as BD
import batch13 as B13

R14 = os.path.join(os.path.dirname(B13.R13), 'r14')
PLAN = os.path.join(R14, 'next_plan.json')
TINTS = ['#1D1E21', '#141518', '#2A2B2F', '#0B1426', '#1D1E21', '#0D1830']
BGS = ['navy-glow', 'anthracite', 'near-black', 'graphite', 'navy-nebula']


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


NAVY_T = {'#0B1426', '#0D1830'}; NAVY_B = {'navy-glow', 'navy-nebula'}


def backdrop(slug, t, lib):
    """Dark neutral, or deep navy for blue brands only."""
    k = h(slug); blue = B13.is_blue(slug)
    tints = TINTS if blue else [c for c in TINTS if c not in NAVY_T]
    bgs = BGS if blue else [b for b in BGS if b not in NAVY_B]
    st = dict(t=t, fam='dark')
    if lib[t]['transparent']: st['bg'] = bgs[k % len(bgs)]
    else: st['tint'] = tints[k % len(tints)]
    return st


def add_new():
    """Cases that have captures now but no r-next yet (round 14: live sites of former logo-only cases)."""
    lib = {t: L for t, L in B13.library(final=False, nxt=True).items() if t.endswith('__n') and not t.startswith(('d01_', 'd15_'))}
    PR = P.projects(); pl = json.load(open(os.path.join(B13.R13, 'plan.json'))); nx = json.load(open(PLAN)); ch = []
    cnt = {}
    for st in nx.values(): cnt[st['t']] = cnt.get(st['t'], 0) + 1
    for slug in pl:
        if slug in nx or slug not in PR or slug in B13.PRESERVE: continue
        rok = P.roles_ok(PR[slug]); cov = (pl[slug].get('cover') or '').split('__')[0]
        el = [t for t, L in lib.items() if set(L['roles']) - {'social'} <= rok and t.split('__')[0] != cov]
        if not el: continue
        t = min(el, key=lambda t: (cnt.get(t, 0), h(slug + t) % 97)); cnt[t] = cnt.get(t, 0) + 1
        nx[slug] = backdrop(slug, t, lib); ch.append(slug)
    json.dump(nx, open(PLAN, 'w'), indent=1)
    return ch


def fix_navy():
    """Non-blue cases whose r-next sits on navy: same composition, dark neutral backdrop. Returns the slugs."""
    lib = B13.library(final=False, nxt=True); nx = json.load(open(PLAN)); ch = []
    for s, st in nx.items():
        if B13.is_blue(s): continue
        if st.get('tint') in NAVY_T or st.get('bg') in NAVY_B:
            nx[s] = backdrop(s, st['t'], lib); ch.append(s)
    json.dump(nx, open(PLAN, 'w'), indent=1)
    return ch


def make_plan():
    # not the desk sets (d01 / d15): their light wooden desk runs under the card title on the left
    lib = {t: L for t, L in B13.library(final=False, nxt=True).items() if t.endswith('__n') and not t.startswith(('d01_', 'd15_'))}
    PR = P.projects(); cs = B13.cases()
    pl = json.load(open(os.path.join(B13.R13, 'plan_installed14.json')))
    order = [l.strip() for l in open(os.path.join(B13.R12, 'work', 'grid_order.txt')) if l.strip() in cs]
    order += [s for s in PR if s not in order]
    out = {}; prev = None; cnt = {}
    for slug in order:
        if slug not in PR or slug in B13.PRESERVE: continue
        rok = P.roles_ok(PR[slug]); ex = PR[slug].get('exclude_t') or []
        cover_scene = (pl.get(slug, {}).get('cover') or '').split('__')[0]
        el = [t for t, L in lib.items() if set(L['roles']) - {'social'} <= rok and not any(t.startswith(x) for x in ex)
              and t.split('__')[0] != cover_scene and t != prev]
        if not el: continue
        el.sort(key=lambda t: (cnt.get(t, 0), (h(slug + t) % 97)))
        t = el[0]; cnt[t] = cnt.get(t, 0) + 1; prev = t
        out[slug] = backdrop(slug, t, lib)
    json.dump(out, open(PLAN, 'w'), indent=1)
    return out, cnt


def fix_covers():
    """After a re-plan: a case whose new cover uses the same scene as its r-next gets another '__n' composition
    (least used, not its neighbours'). Returns the slugs that changed."""
    lib = {t: L for t, L in B13.library(final=False, nxt=True).items() if t.endswith('__n') and not t.startswith(('d01_', 'd15_'))}
    PR = P.projects(); pl = json.load(open(os.path.join(B13.R13, 'plan.json'))); nx = json.load(open(PLAN))
    cnt = {}
    for st in nx.values(): cnt[st['t']] = cnt.get(st['t'], 0) + 1
    order = list(nx); changed = []
    for i, slug in enumerate(order):
        if slug not in PR: continue
        cov = (pl.get(slug, {}).get('cover') or '').split('__')[0]
        rok = P.roles_ok(PR[slug]); ex = PR[slug].get('exclude_t') or []
        cur = nx[slug]['t']
        ok_now = cur in lib and set(lib[cur]['roles']) - {'social'} <= rok
        if cur.split('__')[0] != cov and ok_now: continue
        nb = {nx[o]['t'] for o in order[max(0, i - 1):i + 2] if o != slug}
        el = [t for t, L in lib.items() if set(L['roles']) - {'social'} <= rok and not any(t.startswith(x) for x in ex)
              and t.split('__')[0] != cov and t not in nb]
        if not el: continue
        t = min(el, key=lambda t: (cnt.get(t, 0), h(slug + t) % 97))
        cnt[nx[slug]['t']] -= 1; cnt[t] = cnt.get(t, 0) + 1
        nx[slug] = backdrop(slug, t, lib); changed.append(slug)
    json.dump(nx, open(PLAN, 'w'), indent=1)
    return changed


def calm_left(img):
    """Darken the left side a little (the card's title sits there): x 0 -> 0.42 eases from 0.80 to 1.0."""
    a = np.asarray(img).astype(np.float32)
    W = a.shape[1]; x = np.linspace(0, 1, W)
    t = np.clip(x / 0.42, 0, 1); t = t * t * (3 - 2 * t)
    f = 0.80 + 0.20 * t
    return Image.fromarray(np.clip(a * f[None, :, None] + 0.5, 0, 255).astype(np.uint8))


def render_one(slug, st):
    if not os.path.exists(os.path.join(C.TPL, st['t'], 'still_rgb.exr')):
        raise RuntimeError(f'{slug}: no final render for {st["t"]}')
    case = B13.cases()[slug]; p = P.projects()[slug]; caps = P.captures(p)
    brand = B13.brand_for(slug, case, caps)
    S = B13.setup_still(slug, case, st, caps, brand, {}, {})
    img = calm_left(Image.fromarray(B13.compose(S, aniso=8)))
    if img.size != (2400, 1100): img = img.resize((2400, 1100), Image.LANCZOS)
    for base in (B13.OUT, B13.SITE):
        os.makedirs(os.path.join(base, slug), exist_ok=True)
        img.save(os.path.join(base, slug, 'r-next.webp'), quality=88, method=6)
    return os.path.getsize(os.path.join(B13.SITE, slug, 'r-next.webp'))


def sheet():
    from PIL import ImageDraw, ImageFont
    F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 13)
    pl = json.load(open(PLAN)); cells = []
    for s, st in pl.items():
        f = os.path.join(B13.SITE, s, 'r-next.webp')
        if not os.path.exists(f): continue
        im = Image.open(f).convert('RGB'); im.thumbnail((480, 220)); cells.append((im, f"{s} · {st['t']}"))
    cols = 4; cw, ch = 490, 245
    sh = Image.new('RGB', (cols * cw + 10, ((len(cells) + cols - 1) // cols) * ch + 10), (24, 24, 26)); d = ImageDraw.Draw(sh)
    for i, (im, lab) in enumerate(cells):
        x = 10 + (i % cols) * cw; y = 10 + (i // cols) * ch
        sh.paste(im, (x, y)); d.text((x, y + im.height + 3), lab, font=F, fill=(220, 220, 224))
    sh.save(os.path.join(R14, 'sheet-next.jpg'), quality=84)


if __name__ == '__main__':
    cmd = sys.argv[1]; t0 = time.time()
    if cmd == 'plan':
        out, cnt = make_plan(); print('next plans', len(out), sorted(cnt.items(), key=lambda x: -x[1]))
    elif cmd == 'render':
        pl = json.load(open(PLAN))
        sel = sys.argv[2].split(',') if len(sys.argv) > 2 else list(pl)
        tot = 0
        for s in sel:
            n = render_one(s, pl[s]); tot += n; print('next', s, pl[s]['t'], f'{n / 1024:.0f} KB', flush=True)
        print(f'total {tot / 1048576:.1f} MB')
    elif cmd == 'sheet':
        sheet()
    elif cmd == 'addnew':
        ch = add_new(); print('added', len(ch), ','.join(ch))
        for s in ch: print('next', s, render_one(s, json.load(open(PLAN))[s]) // 1024, 'KB', flush=True)
    elif cmd == 'fixnavy':
        ch = fix_navy(); print('navy -> dark', len(ch), ','.join(ch))
        for s in ch: print('next', s, render_one(s, json.load(open(PLAN))[s]) // 1024, 'KB', flush=True)
    elif cmd == 'fixcover':
        ch = fix_covers(); print('changed', len(ch), ','.join(ch))
        for s in ch: print('next', s, render_one(s, json.load(open(PLAN))[s]) // 1024, 'KB', flush=True)
    print(f'{cmd} done in {time.time() - t0:.0f}s')
