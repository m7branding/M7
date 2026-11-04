"""Which URL every installed print / branding composition prints (stills, r-cover, hero, showreels -m/-p)."""
import sys, os, json
here = os.path.dirname(os.path.abspath(__file__))
for d in (os.path.join(os.path.dirname(here), 'scenes'), os.path.join(os.path.dirname(os.path.dirname(here)), 'r12', 'scenes')):
    if os.path.exists(os.path.join(d, 'batch13.py')): sys.path.insert(0, d); sys.path.insert(0, os.path.join(os.path.dirname(d), 'lib')); break
import batch13 as B13, designs as D
URL_ROLES = {'card_back', 'letter', 'poster', 'poster_paper', 'aframe', 'brochure_r', 'social'}
lib = B13.library(final=False, portrait=True); cs = B13.cases()
plan = json.load(open(B13.R13 + '/plan.json')); hero = json.load(open(B13.R13 + '/hero_plan.json'))
reels = json.load(open(B13.R13 + '/reel_plan.json'))
urls = {}
def url(s):
    if s not in urls:
        b = B13.brand_for(s, cs[s], {}); urls[s] = b.url if b else None
    return urls[s]
rows = []
def add(out, slug, t):
    roles = sorted((set(lib[t]['prints']) | set(lib[t]['roles'])) & URL_ROLES)
    if roles: rows.append((out, slug, t, ','.join(roles), url(slug) or '(none)'))
for s, v in plan.items():
    for i, st in enumerate(v['stills']):
        add(f"cases/{s}/r-{i + 1 + B13.PRESERVE.get(s, {}).get('offset', 0):02d}-{st['t'].replace('__', '-').replace('_', '-')}.webp", s, st['t'])
    if v.get('cover'): add(f'cases/{s}/r-cover.webp', s, v['cover'])
for s, shots in hero.items():
    for sh in shots: add(f'cases/{s}/r-hero.mp4 + r-hero-m.mp4', s, sh['st']['t'])
for r, v in reels.items():
    for sh in v['shots']:
        add(f'showreels/{r}.mp4 + {r}-m.mp4', sh['slug'], sh['st']['t'])
        tp = sh['st']['t'].split('__')[0] + '__p'
        add(f'showreels/{r}-p.mp4', sh['slug'], tp if tp in lib and os.path.exists(os.path.join(B13.C.TPL, tp, 'still_rgb.exr')) else sh['st']['t'])
out = os.path.join(B13.R13, 'url_audit.tsv')
with open(out, 'w') as f:
    f.write('output\tcase\tcomposition\turl roles\tprinted url\n')
    for r in rows: f.write('\t'.join(r) + '\n')
bad = [r for r in rows if r[4] != '(none)' and D.print_url(r[4]) != r[4]]
print(len(rows), 'print compositions;', len({r[1] for r in rows}), 'cases; staging:', bad)
print(sorted({(r[1], r[4]) for r in rows}))
