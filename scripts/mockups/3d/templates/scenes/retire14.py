"""Round 14, phase 1: take invented print off the site. Retired scenes (b01 b02 b03 b04 b07 b08 b09 b11 b12 b13)
and logo scenes coloured from the unverified case colour (b05, b10, b06 other than tone-on-tone on a light wall) are
deleted from public/media/cases (stills, r-cover) and so are hero videos that contain them; files move to r14/retired."""
import json, os, shutil, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import batch13 as B13
R13 = B13.R13; SITE = B13.SITE; OUT = B13.OUT
RET = ('b01_', 'b02_', 'b03_', 'b04_', 'b07_', 'b08_', 'b09_', 'b11_', 'b12_', 'b13_')
LOGO = ('b05_', 'b06_', 'b10_')
BIN = os.path.join(os.path.dirname(R13), 'r14', 'retired')


def kind(t, fam):
    if t.startswith(RET): return 'retired'
    if t.startswith(LOGO): return 'ok' if (t.startswith('b06_') and fam == 'light') else 'logo-colour'
    return 'brandbg' if fam == 'brand' else 'ok'


def move(slug, name, log):
    for base in (SITE, OUT):
        f = os.path.join(base, slug, name)
        if os.path.exists(f):
            dst = os.path.join(BIN, 'site' if base == SITE else 'out', slug); os.makedirs(dst, exist_ok=True)
            shutil.move(f, os.path.join(dst, name)); log.append(f'{slug}/{name}' + ('' if base == SITE else ' (out)'))


if __name__ == '__main__':
    plan = json.load(open(R13 + '/plan.json')); hero = json.load(open(R13 + '/hero_plan.json'))
    log = []; kept = {}
    for s, v in plan.items():
        off = B13.PRESERVE.get(s, {}).get('offset', 0)
        keep = []
        for i, st in enumerate(v['stills']):
            name = f"r-{i + 1 + off:02d}-{st['t'].replace('__', '-').replace('_', '-')}.webp"
            if kind(st['t'], st.get('fam')) in ('retired', 'logo-colour'): move(s, name, log)
            else: keep.append(dict(st, file=name))
        cov = v.get('cover')
        if cov:
            fam = next((x.get('fam') for x in v['stills'] if x['t'] == cov), None)
            if kind(cov, fam) in ('retired', 'logo-colour'):
                move(s, 'r-cover.webp', log); v = dict(v); v.pop('cover')
        kept[s] = dict(v, stills=keep)
    heroes_removed = []
    for s, shots in hero.items():
        if any(kind(x['st']['t'], x['st'].get('fam')) in ('retired', 'logo-colour') for x in shots):
            for n in ('r-hero.mp4', 'r-hero.webp', 'r-hero-m.mp4', 'r-hero-m.webp'): move(s, n, log)
            heroes_removed.append(s)
    json.dump(kept, open(R13 + '/plan_installed14.json', 'w'), indent=1)
    open(os.path.join(BIN, 'removed.txt'), 'w').write('\n'.join(log) + '\n')
    print('moved', len(log), 'files; heroes removed', len(heroes_removed))
