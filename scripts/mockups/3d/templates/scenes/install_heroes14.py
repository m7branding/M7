"""Install the rendered heroes (r-hero.mp4/.webp + r-hero-m.mp4/.webp) from r13/out to public/media/cases, only
complete ones (both videos, not written in the last 2 minutes)."""
import sys, os, json, shutil, time
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import batch13 as B13
pl = json.load(open(os.path.join(B13.R13, 'hero_plan.json')))
n = 0; tot = 0; miss = []
for s in pl:
    if s in B13.PRESERVE: continue
    src = os.path.join(B13.OUT, s); fs = ['r-hero.mp4', 'r-hero.webp', 'r-hero-m.mp4', 'r-hero-m.webp']
    if not all(os.path.exists(os.path.join(src, f)) for f in fs) or any(time.time() - os.path.getmtime(os.path.join(src, f)) < 120 for f in fs):
        miss.append(s); continue
    for f in fs:
        shutil.copy2(os.path.join(src, f), os.path.join(B13.SITE, s, f)); tot += os.path.getsize(os.path.join(src, f))
    n += 1
print(f'installed {n} heroes, {tot / 1048576:.1f} MB; missing {miss}')
