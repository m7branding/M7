"""ui15 — round 15 (and 16): floating-UI stills from CAPTURE's r15 / r16 close-ups and snippets (appended to the case's stills, so the
existing numbering stays). Flat cards over device renders that leave room around the screen (float2d), only r15 cards,
never the same card twice in one case."""
import sys, os, json, hashlib
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import batch13 as B13, proj as P, snips as SN, float2d as F2
import plan14 as PL

def h(s): return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)

def add(slug, n_new=2):
    pl = json.load(open(os.path.join(B13.R13, 'plan.json')))
    v = pl[slug]; lib = B13.library(final=True)
    v['stills'] = [st for st in v['stills'] if not st.get('r15')]          # idempotent
    used = {f for st in v['stills'] for f in ((st.get('ui2d') or {}).get('files') or []) + list((st.get('snips') or {}).values())}
    r14 = {s['file'] for s in SN.load(slug) if not s['file'].startswith(('r15/', 'r16/'))}
    rok = P.roles_ok(P.projects()[slug])
    have = {st['t'] for st in v['stills']}
    bb = PL.bboxes()
    cands = [t for t in sorted(lib) if t.startswith('d') and not t.startswith(('d11', 'd12', 'd13', 'd14')) and not lib[t]['portrait'] and lib[t]['roles']
             and set(lib[t]['roles']) - {'social'} <= rok and t not in have and t in bb]
    cands.sort(key=lambda t: h(slug + t))
    k = h(slug); out = []
    for t in cands:
        if len(out) >= n_new: break
        if any(o['t'].split('__')[0] == t.split('__')[0] for o in out): continue
        i = len(out)
        sn = F2.pick(slug, 3 if i == 0 else 2, t, exclude=used | r14, min_n=2)
        if not sn: continue
        used |= {s['file'] for s in sn}
        lay = PL.UI2D_LAYOUTS[(k + i) % 3]
        fam = (['light', 'dark', 'navy'] if B13.is_blue(slug) else ['light', 'dark'])[(k + i) % (3 if B13.is_blue(slug) else 2)]
        st = dict(t=t, fam=fam, r15=True, ui2d=dict(layout=lay, seed=t, n=len(sn), files=[s['file'] for s in sn],
                                                     tilt=lay == 'stack', mirror=bool((k >> (2 + i)) & 1)))
        if lib[t]['transparent']: st['bg'] = PL.FAM_BG[fam][(k >> 2) % len(PL.FAM_BG[fam])]
        else: st['tint'] = PL.NEUTRAL[fam][(k >> 4) % len(PL.NEUTRAL[fam])]
        out.append(st)
    v['stills'] += out
    json.dump(pl, open(os.path.join(B13.R13, 'plan.json'), 'w'), indent=1)
    return [(o['t'], o['fam'], o['ui2d']['files']) for o in out]

if __name__ == '__main__':
    for s in sys.argv[1].split(','): print(s, add(s), flush=True)
