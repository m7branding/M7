"""flows15 — round 15: device films (r-flow-*) from CAPTURE's r15 recordings (2x, 30 fps, virtual-time, reviewed).

  python flows15.py plan <slugs>      adds / replaces those slugs in r14/flows_plan.json
  python flows15.py render <slugs>    public/media/cases/<slug>/r-flow-<n>.mp4 + .webp + r-flows.json (Dutch titles)

Per slug the strongest takes (PICK): 1-2 desktop and 1 mobile where there is one. Every r15 take already loops
(seamless, or CAPTURE's own crossfade into frame 1), so the film plays the whole take once and loops as it is.
Same film look as flows14: one device composition, static camera, neutral backdrop (navy only for blue brands).
"""
import sys, os, json, glob
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import flows14 as F14
import batch13 as B13
import proj as P

CAP = os.path.join(os.path.dirname(B13.R13), 'r15', 'cap')
PICK = {
    'steddion-tools': ['flow-3-oplossingen-desktop', 'flow-2-nieuwe-e-behoefte-desktop'],
    'repairlab': ['flow-2-model-reparaties-desktop', 'flow-3-afspraakflow-desktop', 'flow-5-afspraakflow-mobile'],
    'silvr': ['flow-1-voertuigenslider-desktop', 'flow-2-aanvraag-voertuig-kenteken-desktop', 'flow-5-kentekencheck-mobile'],
    'hela': ['flow-1-home-lottie-scroll-desktop', 'flow-3-kruidenketchup-hero-desktop', 'flow-4-home-lottie-scroll-mobile'],
    'nexis-group': ['flow-1-tabs-3d-apparaten-desktop', 'flow-2-scroll-effecten-desktop'],
}
# film length grows with the take: keep the bitrate of the r14 films (2.6 MB for ~8 s)
F14.BUDGET = 2.6 * 1048576


def plan(slugs):
    lib = B13.library(final=True)
    pl = json.load(open(F14.PLAN)) if os.path.exists(F14.PLAN) else {}
    cnt = {}
    for v in pl.values():
        for f in v: cnt[f['st']['t']] = cnt.get(f['st']['t'], 0) + 1
    for slug in slugs:
        fl = {os.path.basename(x['file'])[:-4]: x for x in json.load(open(os.path.join(CAP, slug, 'flows.json')))}
        rok = P.roles_ok(P.projects()[slug]) if slug in P.projects() else {'mac', 'studio', 'phone_a'}
        films = []
        for i, key in enumerate(PICK[slug]):
            x = fl[key]; dev = x['device']
            order = F14.MOB if dev == 'mobile' else F14.DESK
            roles = V_ROLES[dev]
            el = [t for t in order if t in lib and set(lib[t]['roles']) - {'social'} <= rok | {'studio_b'} and any(r in lib[t]['roles'] for r in roles)]
            used = {f['st']['t'] for f in films}
            t = min([t for t in el if t not in used] or el, key=lambda t: (cnt.get(t, 0), order.index(t)))
            cnt[t] = cnt.get(t, 0) + 1
            role = next(r for r in roles if r in lib[t]['roles'])
            blue = B13.is_blue(slug); h = F14.h(slug)
            fams = (['dark', 'navy', 'light'] if blue else ['dark', 'light']) if dev == 'desktop' else (['dark', 'navy'] if blue else ['dark'])
            fam = fams[(h + i) % len(fams)]
            st = dict(t=t, fam=fam, tint=F14.TINTS[fam][F14.h(slug + t) % len(F14.TINTS[fam])])
            films.append(dict(n=i + 1, path=os.path.join(CAP, slug, x['file']), kind=key, device=dev, st=st, role=role,
                              size=x['size'], trim_top=0, t0=0.0, t1=float(x['duration']), seamless=True, title=x['title']))
        pl[slug] = films
    json.dump(pl, open(F14.PLAN + '.tmp', 'w'), indent=1); os.replace(F14.PLAN + '.tmp', F14.PLAN)
    return {s: [(f['kind'], f['st']['t'], f['st']['fam']) for f in pl[s]] for s in slugs}


import video13 as V
V_ROLES = V.FLOW_ROLES


def render(slugs):
    for slug in slugs:
        for d in (B13.OUT, B13.SITE):          # the new set replaces the r14 films of this case
            for f in glob.glob(os.path.join(d, slug, 'r-flow-*')): os.remove(f)
            if os.path.exists(os.path.join(d, slug, 'r-flows.json')): os.remove(os.path.join(d, slug, 'r-flows.json'))
        n = len(json.load(open(F14.PLAN))[slug])
        dur = sum(f['t1'] - f['t0'] for f in json.load(open(F14.PLAN))[slug]) / n
        F14.BUDGET = max(2.6, 0.33 * dur) * 1048576
        print('flow', *F14.render_safe((slug,)), flush=True)


if __name__ == '__main__':
    cmd, sl = sys.argv[1], sys.argv[2].split(',') if len(sys.argv) > 2 else list(PICK)
    if cmd == 'plan':
        for k, v in plan(sl).items(): print(k, v)
    elif cmd == 'render':
        render(sl)
