"""flows14 — round 14: interaction films. A real recording of the site (CAPTURE flows.json: dropdowns, mega menus,
configurators, search, filters ...) plays on the screen of one device composition; static camera so the film loops.

  python flows14.py plan                 r14/flows_plan.json: 1-2 films per case (2 for the priority cases)
  python flows14.py render [slugs] [-jN] public/media/cases/<slug>/r-flow-<n>.mp4 + .webp poster + r-flows.json titles
  python flows14.py sheet                r14/sheet-flows.jpg (start / middle / end frame of every film)

1920x1080, 30 fps, H.264, no audio. The recordings are 1x (1440x900 desktop, 390x844 mobile): the device screen stays
at about 0.6-1.0x native in the film (never a flat full-screen close-up). Seamless recordings loop as they are; the
others play once and dissolve back into their first frame.
"""
import sys, os, json, time, subprocess, hashlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
from PIL import Image
import tcomp as C, proj as P, flows as FL
import batch13 as B13
import video13 as V

R14 = os.path.join(os.path.dirname(B13.R13), 'r14')
PLAN = os.path.join(R14, 'flows_plan.json')
FW, FH, FPS = 1920, 1080, 30
BUDGET = 2.6 * 1048576
PRIORITY = ['steddion-tools', 'buitenstate-tools', 'huurfix', 'the-digital-clinic', 'repairlab', 'digital-newsgroup', 'kippenkar',
            'maarschall', 'misterglass', 'speedbar', 'silvr', 'monvy', 'alpacafarm-vorstenbosch']
STRONG = set(FL.PREF[:FL.PREF.index('cards-hover')])          # real interactions (not only hovers / sliders)
DESK = ['d19_studio_front__a', 'd18_mac_profile__b', 'd01_desk_studio__a', 'd02_mac_top__b',
        'd19_studio_front__c', 'd01_desk_studio__b']
MOB = ['d16_phone_plinth__b', 'd05_phone_lean__a', 'd06_phone_linen__a', 'd07_phone_stone__b']
TINTS = {'dark': ['#1D1E21', '#141518', '#2A2B2F'], 'navy': ['#0B1426', '#0D1830'], 'light': ['#E3E4E6', '#ECEBE7']}
EXTRA = {'misterglass': 'https://www.misterglass.nl'}          # cases outside projects.json with fresh captures


# titles = alt text on the case page: short, factual, Dutch (what the film shows)
TITLES = {
    ('steddion-tools', 'configurator-intake'): 'Energy Property Configurator: intake met gebouwtype',
    ('steddion-tools', 'ems-compare'): 'EMS-vergelijker op mobiel: sector en assets kiezen',
    ('buitenstate-tools', 'funnel-steps'): 'Zoekers voor mijn woning: provincie kiezen, actieve zoekers zien',
    ('huurfix', 'tool-fill-desktop'): 'Huurprijscheck: postcode en huisnummer invullen',
    ('huurfix', 'tool-fill-mobile'): 'Huurprijscheck op mobiel: postcode, huisnummer en eerste vraag',
    ('the-digital-clinic', 'intake-steps'): 'Online intake haaruitval: de eerste vragen',
    ('repairlab', 'search'): 'Toestel zoeken: live resultaten tijdens het typen',
    ('digital-newsgroup', 'shop-filters'): 'Marketplace: filteren op domeinautoriteit en taal',
    ('kippenkar', 'dealer-map'): 'Dealerkaart: land zoeken en een dealer openen',
    ('maarschall', 'finder'): 'Uitlaatzoeker: model typen en filteren op merk',
    ('maarschall', 'cards-hover'): 'Productkaarten met hover-effect',
    ('misterglass', 'configurator'): 'Glasconfigurator: opties en maten kiezen, de prijs rekent mee',
    ('speedbar', 'configurator'): 'Configurator: grip, carbon basis en interface kiezen',
    ('silvr', 'form-step'): 'Aanvraag starten: kenteken invullen',
    ('monvy', 'mega-menu'): 'Megamenu’s Features en Branches',
    ('alpacafarm-vorstenbosch', 'calendar'): 'Openingskalender: door de maanden bladeren',
    ('buitenstate', 'map'): 'Woningkaart: inzoomen en verslepen',
    ('the-sandt', 'tabs'): 'Beleggingsopties: particulier, professioneel en family office',
}


PAIRS = {'huurfix': ['tool-fill-desktop', 'tool-fill-mobile']}


def title_for(slug, x):
    if (slug, x['kind'] + '-' + x['device']) in TITLES: return TITLES[(slug, x['kind'] + '-' + x['device'])]
    if (slug, x['kind']) in TITLES: return TITLES[(slug, x['kind'])]
    if x['kind'] == 'menu-open':
        return 'Mobiel menu met submenu' if 'submenu' in (x.get('description') or '') else 'Mobiel menu'
    if x['kind'] == 'nav-dropdown': return 'Navigatie met uitklapmenu’s'
    t = FL.TITLE.get(x['kind'], 'Interactie op de site')
    return t + (' op mobiel' if x['device'] == 'mobile' else '')


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def project(slug):
    p = P.projects().get(slug)
    if p is None and slug in EXTRA:
        p = dict(slug=slug, captures=os.path.join(P.R14CAP, slug), url=EXTRA[slug])
    return p


def make_plan():
    lib = B13.library(final=True)
    cs = B13.cases(); cnt = {}; out = {}
    slugs = [s for s in PRIORITY if s in cs] + sorted(s for s in cs if s not in PRIORITY)
    for slug in slugs:
        p = project(slug)
        if p is None: continue
        fls = [x for x in FL.load(slug)]
        if not fls: continue
        n = 2 if slug in PRIORITY else 1
        if slug not in PRIORITY:
            fls = [x for x in fls if x['kind'] in STRONG]
        rok = P.roles_ok(p) if slug in P.projects() else {'mac', 'studio', 'phone_a', 'studio_b'}
        picks, kinds = [], set()
        if slug in PAIRS:                 # reviewed pairs (coordinator): exactly these recordings
            byk = {x['kind'] + '-' + x['device']: x for x in fls}
            picks = [byk[k] for k in PAIRS[slug] if k in byk]; kinds = {x['kind'] for x in picks}
        # one desktop + one mobile where possible, never the same kind twice
        for want in ((('desktop', 'mobile'), ('mobile', 'desktop')) if n == 2 else (('desktop', 'mobile'),)) if slug not in PAIRS else ():
            for dev in want:
                if len(picks) >= n: break
                x = next((x for x in fls if x['device'] == dev and x['kind'] not in kinds and x not in picks), None)
                if x: picks.append(x); kinds.add(x['kind'])
            if len(picks) >= n: break
        films = []
        for i, x in enumerate(picks[:n]):
            order = MOB if x['device'] == 'mobile' else DESK
            roles = V.FLOW_ROLES[x['device']]
            el = [t for t in order if t in lib and set(lib[t]['roles']) - {'social'} <= (rok | {'studio_b'} if slug in EXTRA else rok)
                  and any(r in lib[t]['roles'] for r in roles)]
            if not el: continue
            t = min(el, key=lambda t: (cnt.get(t, 0), order.index(t)))
            cnt[t] = cnt.get(t, 0) + 1
            role = next(r for r in roles if r in lib[t]['roles'])
            blue = B13.is_blue(slug)
            fl = (['dark', 'navy', 'light'] if blue else ['dark', 'light']) if x['device'] == 'desktop' else (['dark', 'navy'] if blue else ['dark'])
            fam = fl[(h(slug) + i) % len(fl)]
            st = dict(t=t, fam=fam, tint=TINTS[fam][h(slug + t) % len(TINTS[fam])])
            lp = x.get('loop') or {}
            seamless = bool(x.get('seamless'))
            m = x.get('motion') or {}
            if seamless:
                t0, t1 = float(lp.get('start', 0)), float(lp.get('end', x['duration']))
            else:
                t0 = max(0.0, (m.get('first') or 0.6) - 0.6)
                t1 = min(x['duration'] - 0.05, (m.get('last') or x['duration']) + 0.9)
            films.append(dict(n=len(films) + 1, path=x['path'], kind=x['kind'], device=x['device'], st=st, role=role,
                              size=x['size'], trim_top=x.get('trim_top') or 0,
                              t0=round(t0, 3), t1=round(t1, 3), seamless=seamless,
                              title=title_for(slug, x)))
        if films: out[slug] = films
    json.dump(out, open(PLAN + '.tmp', 'w'), indent=1); os.replace(PLAN + '.tmp', PLAN)     # renders may be reading it
    return out, cnt


def render_one(args):
    slug = args[0] if isinstance(args, tuple) else args
    films = json.load(open(PLAN))[slug]
    p = project(slug); case = B13.cases()[slug]
    caps = P.captures(p)
    if slug in EXTRA:
        scr = sorted(f for f in os.listdir(p['captures']) if f.startswith('screen-') and f.endswith('-desktop.png'))
        if scr: caps['full-desktop'], _ = P.r14_stack([os.path.join(p['captures'], f) for f in scr], 1440)
        _orig = P.projects; P.projects = lambda: dict(_orig(), **{slug: p})
    brand = B13.brand_for(slug, case, caps)
    t00 = time.time(); res = []
    for d in (B13.OUT, B13.SITE): os.makedirs(os.path.join(d, slug), exist_ok=True)
    titles = {}
    for f in films:
        V.DW, V.DH = FW, FH
        V.MOVES['still'] = dict(z=(1.03, 1.03), f0=(0.5, 0.5), f1=(0.5, 0.5))
        spec = dict(st=f['st'], move='still', scroll=False, flow=dict(path=f['path'], kind=f['kind'], device=f['device'],
                                                                      role=f['role'], t0=f['t0'], t1=f['t1'],
                                                                      size=f.get('size') or [1440, 900], trim_top=f.get('trim_top') or 0))
        sh = V.Shot(slug, case, caps, brand, spec, {})
        dur = f['t1'] - f['t0']; N = max(2, int(round(dur * FPS)))
        xf = 0 if f['seamless'] else int(0.5 * FPS)                  # dissolve back into the first frame
        name = f"r-flow-{f['n']}"
        mp4 = os.path.join(B13.OUT, slug, name + '.mp4')
        tmp = mp4 + '.mkv'
        enc = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{FW}x{FH}',
                                '-r', str(FPS), '-i', '-', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '8', '-pix_fmt', 'yuv444p',
                                tmp], stdin=subprocess.PIPE)
        first = None
        for k in range(N):
            img = sh.frame(k / N if f['seamless'] else k / (N - 1))     # seamless: the end frame = frame 0, not twice
            if k == 0:
                first = img.copy()
                Image.fromarray(img).save(os.path.join(B13.OUT, slug, name + '.webp'), quality=84, method=6)
            if xf and k >= N - xf:
                w = (k - (N - xf) + 1) / xf; w = 0.5 - 0.5 * np.cos(np.pi * w)
                img = (img.astype(np.float32) * (1 - w) + first.astype(np.float32) * w + 0.5).astype(np.uint8)
            enc.stdin.write(img.tobytes())
        enc.stdin.close(); enc.wait()
        for crf in (21, 23, 25, 27, 29):
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', tmp, '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf),
                            '-g', str(FPS * 4), '-bf', '3', '-x264-params', 'aq-mode=3', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
                            '-an', mp4], check=True)
            if os.path.getsize(mp4) <= BUDGET: break
        os.remove(tmp)                                                  # no frame folders left behind
        import shutil
        for ext in ('.mp4', '.webp'):
            shutil.copy2(os.path.join(B13.OUT, slug, name + ext), os.path.join(B13.SITE, slug, name + ext))
        titles[name + '.mp4'] = f['title']
        res.append((name, f['kind'], f['st']['t'], crf, os.path.getsize(mp4) // 1024))
    for d in (B13.OUT, B13.SITE):
        json.dump(titles, open(os.path.join(d, slug, 'r-flows.json'), 'w'), ensure_ascii=False, indent=1)
    return slug, time.time() - t00, res


def render_safe(args):
    import traceback
    try:
        return render_one(args)
    except Exception as e:
        return (args[0] if isinstance(args, tuple) else args), 0.0, [('FAILED', str(e)[:200], traceback.format_exc()[-500:])]


def sheet():
    from PIL import ImageDraw, ImageFont
    F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 13)
    pl = json.load(open(PLAN)); rows = []
    for s, films in pl.items():
        for f in films:
            mp4 = os.path.join(B13.SITE, s, f"r-flow-{f['n']}.mp4")
            if not os.path.exists(mp4): continue
            dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', mp4],
                                       capture_output=True, text=True).stdout or 0)
            ims = []
            for t in (0.0, dur * 0.45, dur * 0.8):
                r = subprocess.run(['ffmpeg', '-loglevel', 'error', '-ss', f'{t:.2f}', '-i', mp4, '-frames:v', '1', '-vf', 'scale=384:-1',
                                    '-f', 'image2pipe', '-vcodec', 'png', '-'], capture_output=True)
                import io
                ims.append(Image.open(io.BytesIO(r.stdout)).convert('RGB'))
            rows.append((f"{s} · r-flow-{f['n']} · {f['kind']}-{f['device']} · {f['st']['t']} · {os.path.getsize(mp4) // 1024} KB", ims))
    W = 3 * 390 + 10; Hh = len(rows) * (216 + 22) + 10
    sh = Image.new('RGB', (W * 2, (len(rows) + 1) // 2 * (216 + 22) + 10), (24, 24, 26)); d = ImageDraw.Draw(sh)
    for i, (lab, ims) in enumerate(rows):
        x0 = (i % 2) * W + 5; y0 = (i // 2) * 238 + 5
        d.text((x0, y0), lab, font=F, fill=(225, 225, 228))
        for j, im in enumerate(ims): sh.paste(im, (x0 + j * 390, y0 + 18))
    sh.save(os.path.join(R14, 'sheet-flows.jpg'), quality=82)


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('-j')]
    j = next((int(a[2:]) for a in sys.argv[1:] if a.startswith('-j')), 1)
    cmd = args[0]; t0 = time.time()
    if cmd == 'plan':
        pl, cnt = make_plan()
        print('films', sum(len(v) for v in pl.values()), 'cases', len(pl), cnt)
    elif cmd == 'render':
        pl = json.load(open(PLAN))
        sel = list(pl) if len(args) < 2 or args[1] == 'all' else args[1].split(',')
        for r in B13.B.run(render_safe, [(s,) for s in sel], j):
            print('flow', r[0], f'{r[1]:.0f}s', r[2], flush=True)
    elif cmd == 'sheet':
        sheet()
    elif cmd == 'titles':          # rewrite r-flows.json of rendered films from the current plan titles
        pl, _ = make_plan()
        for s, films in pl.items():
            t = {f"r-flow-{f['n']}.mp4": f['title'] for f in films if os.path.exists(os.path.join(B13.SITE, s, f"r-flow-{f['n']}.mp4"))}
            if t:
                for d in (B13.OUT, B13.SITE): json.dump(t, open(os.path.join(d, s, 'r-flows.json'), 'w'), ensure_ascii=False, indent=1)
    print(f'{cmd} done in {time.time() - t0:.0f}s')
