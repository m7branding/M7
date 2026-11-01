"""ui16 — round 16: render ONLY the floating-UI stills that ui15.py planned from the r16 close-ups, and append them to
the case's installed stills under the next free number (r-<NN>-<template>-ui.webp in r13/out and public/media/cases).

  python ui15.py <slugs>          plan (adds the r15-flagged ui2d stills to r13/plan.json, as in round 15)
  python ui16.py <slugs>          render + append only those (keys 'r16/...'), nothing else is re-rendered

Why not `batch13.py stills` (the round-15 way): that re-renders every still of a case, and the older ui2d stills of
these cases point at r14 snippet files that are no longer on disk, so a full re-render fails (and would renumber the
gallery). Encoding as fit_one: 2000 px wide WebP, the highest quality up to 86 that keeps the still under 260 KB.
"""
import sys, os, re, json
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import batch13 as B13, proj as P

STILL = re.compile(r'^r-(\d\d)-.+\.webp$')


def add(slug):
    plan = json.load(open(os.path.join(B13.R13, 'plan.json')))[slug]
    new = [st for st in plan['stills'] if st.get('r15') and st.get('ui2d')
           and all(f.startswith('r16/') for f in st['ui2d'].get('files') or [])]
    if not new: return slug, []
    case = B13.cases()[slug]; p = P.projects().get(slug)
    caps = P.captures(p) if p else {}
    brand = B13.brand_for(slug, case, caps)
    site, out = os.path.join(B13.SITE, slug), os.path.join(B13.OUT, slug)
    done = []
    for st in new:
        stem = f"{st['t'].replace('__', '-').replace('_', '-')}-ui"
        have = [f for f in os.listdir(site) if STILL.match(f) and int(STILL.match(f).group(1)) < 60]
        old = next((f for f in have if f[5:-5] == stem), None)          # idempotent: same template -> same file
        n = int(old[2:4]) if old else max([int(STILL.match(f).group(1)) for f in have] + [0]) + 1
        img = B13.render_still(slug, case, st, caps, brand, {}, {})
        for q in (86, 83, 80, 77, 74):
            data = B13._enc(img, B13.STILL_W, q)
            if len(data) <= 260 * 1024: break
        name = f'r-{n:02d}-{stem}.webp'
        for d in (out, site):
            open(os.path.join(d, name), 'wb').write(data)
        done.append((name, q, len(data) // 1024, st['ui2d']['files']))
    return slug, done


if __name__ == '__main__':
    for s in sys.argv[1].split(','): print(*add(s), flush=True)
