"""Deterministic backdrop per project (bg-assign.json).
- group from the SITE's own luminance (hero-desktop + hero-mobile): darkest ~40 % -> light neutrals, the rest ->
  dark neutrals (~35 %) or deep navy (~25 %);
- variants within a group by quota, walking the /cases grid order so neighbouring cards differ."""
import sys, os, json
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import numpy as np
from PIL import Image
import proj as P

R12 = P.R12
QUOTA = {  # per group: variant -> count (scaled to the group size)
    'light': {'white': 6, 'light-grey': 5, 'mid-grey': 3, 'white-leaves': 3, 'grey-plaster': 2, 'white-linen': 2, 'white-dune': 2},
    'dark': {'graphite': 5, 'anthracite': 5, 'near-black': 4, 'anthracite-plaster': 3, 'graphite-dune': 3},
    'navy': {'navy-glow': 8, 'navy-nebula': 6},
}
SHARE = {'light': 0.40, 'dark': 0.35, 'navy': 0.25}


def site_lum(p):
    c = P.captures(p)
    v = []
    for k in ('hero-desktop', 'hero-mobile'):
        im = c.get(k)
        if im is not None:
            a = np.asarray(im.convert('L').resize((96, max(1, int(96 * im.height / im.width)))), np.float32) / 255
            v.append(a.mean())
    return float(np.mean(v))


def scaled(q, n):
    tot = sum(q.values()); out = {k: max(1, round(v * n / tot)) for k, v in q.items()}
    while sum(out.values()) > n: out[max(out, key=out.get)] -= 1
    while sum(out.values()) < n: out[max(q, key=lambda k: q[k] - out[k] * tot / n)] += 1
    return out


if __name__ == '__main__':
    pr = P.projects()
    go = os.path.join(R12, 'work', 'grid_order.txt')
    order = [l.strip() for l in open(go) if l.strip() in pr] if os.path.exists(go) else []
    order += [s for s in pr if s not in order]
    lum = {s: site_lum(pr[s]) for s in pr}
    n = len(pr)
    n_light = round(SHARE['light'] * n)
    light = set(sorted(pr, key=lambda s: lum[s])[:n_light])
    n_navy = round(SHARE['navy'] * n); n_dark = n - n_light - n_navy
    left = {'dark': n_dark, 'navy': n_navy}
    quota = {'light': scaled(QUOTA['light'], n_light), 'dark': scaled(QUOTA['dark'], n_dark), 'navy': scaled(QUOTA['navy'], n_navy)}
    res, prev = {}, []
    for s in order:
        if s in light:
            g = 'light'
        else:
            # keep the dark/navy ratio, avoid the same group as the previous card when possible
            opts = sorted(left, key=lambda k: -left[k] / (n_dark if k == 'dark' else n_navy))
            opts = [k for k in opts if left[k] > 0]
            if len(opts) > 1 and prev and res[prev[-1]]['group'] == opts[0]:
                ratio = {k: left[k] / (n_dark if k == 'dark' else n_navy) for k in opts}
                if ratio[opts[1]] > 0.6 * ratio[opts[0]]:
                    opts = [opts[1], opts[0]]
            g = opts[0]; left[g] -= 1
        recent = {res[x]['variant'] for x in prev[-2:]}
        cands = [v for v, c in quota[g].items() if c > 0]
        pick = sorted(cands, key=lambda v: (v in recent, -quota[g][v], list(QUOTA[g]).index(v)))[0]
        quota[g][pick] -= 1
        res[s] = dict(group=g, variant=pick, site_lum=round(lum[s], 3))
        prev.append(s)
    json.dump(res, open(os.path.join(R12, 'bg-assign.json'), 'w'), indent=1)
    from collections import Counter
    print(Counter(v['group'] for v in res.values()), Counter(v['variant'] for v in res.values()))
    for s in order: print(f"{s:32s} {res[s]['site_lum']:.2f} {res[s]['variant']}")
