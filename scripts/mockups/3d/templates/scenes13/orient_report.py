import sys, os, json, glob
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'scenes'))
import batch13 as B13, orient as O
for t, L in sorted(B13.library(final=False).items()):
    if not L['prints']: continue
    pp = B13.prepared(t)
    for pr in pp['prints']:
        o = O.orientation(pr['jac'], pr['m'])
        flag = '  <-- TILT' if abs(o['residual']) > 25 else ''
        print(f"{t:24s} {pr['role']:14s} U={o['U']:3s} V={o['V']:3s} swap={o['swapped']!s:5s} baseline={o['residual']:6.1f} vertical={o['vertical']:6.1f}{flag}")
