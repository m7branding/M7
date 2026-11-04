"""Round 14 phase 3 slug lists: 'extras' (cases whose plan has floating-UI stills) or 'recap' (cases with clean
recaptures for audited slots)."""
import sys, os, json
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import proj as P
import batch13 as B13
what = sys.argv[1]
if what == 'extras':
    pl = json.load(open(os.path.join(B13.R13, 'plan.json')))
    print(','.join(s for s, v in pl.items() if any(st.get('ui2d') or st.get('snips') for st in v['stills'])))
elif what == 'recap':
    print(','.join(s for s in P.projects() if P.r14_replace(s) and P.r14_qa(s)))
