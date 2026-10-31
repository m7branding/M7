"""Install only the stills + covers (+ r-next) of the given cases from r13/out to public/media/cases (heroes and
films are installed separately, so a running hero pass is never copied half-written)."""
import sys, os, json, shutil, glob, re
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import batch13 as B13
sel = sys.argv[1].split(',') if len(sys.argv) > 1 and sys.argv[1] != 'all' else list(json.load(open(os.path.join(B13.R13, 'plan.json'))))
STILL = re.compile(r'^r-(\d\d-.+|cover|next)\.webp$')
tot = 0; n = 0
for s in sel:
    src = os.path.join(B13.OUT, s); dst = os.path.join(B13.SITE, s)
    if not os.path.isdir(src): continue
    os.makedirs(dst, exist_ok=True)
    keep = {f for f in os.listdir(src) if STILL.match(f)}
    if not any(f[2:4].isdigit() for f in keep): continue
    for f in os.listdir(dst):
        if STILL.match(f) and f not in keep and not (s in B13.PRESERVE and B13.PRESERVE[s]['keep'](f)) and f != 'r-next.webp':
            os.remove(os.path.join(dst, f))
    for f in sorted(keep):
        shutil.copy2(os.path.join(src, f), os.path.join(dst, f)); tot += os.path.getsize(os.path.join(src, f)); n += 1
print(f'installed {n} files, {tot / 1048576:.1f} MB for {len(sel)} cases')
