"""flows16 — round 16: device films (r-flow-*) for the cases that had a live site but no film yet.

  python flows16.py plan <slugs>      adds / replaces those slugs in r14/flows_plan.json
  python flows16.py render <slugs>    public/media/cases/<slug>/r-flow-<n>.mp4 + .webp + r-flows.json (Dutch titles)

Same recorder and film look as round 15 (flows15.py): 2x virtual-time takes at 30 fps from CAPTURE r16
(`r16/films/cap/<slug>/flows.json`), one device composition, static camera, neutral backdrop (navy only for blue
brands). The overview film is listed first and its title starts with "Home", so the case hero picks it.
"""
import sys, os, json
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import flows15 as F15
import batch13 as B13

CAP = os.path.join(os.path.dirname(B13.R13), 'r16', 'films', 'cap')
PICK = {}          # filled from r16/films/pick.json: {slug: [take, ...]} (the reviewed takes, overview first)
_pf = os.path.join(os.path.dirname(CAP), 'pick.json')
if os.path.exists(_pf): PICK.update(json.load(open(_pf)))


def plan(slugs):
    F15.CAP, F15.PICK = CAP, PICK
    return F15.plan(slugs)


def render(slugs):
    F15.CAP, F15.PICK = CAP, PICK
    return F15.render(slugs)


if __name__ == '__main__':
    cmd, sl = sys.argv[1], sys.argv[2].split(',') if len(sys.argv) > 2 else list(PICK)
    if cmd == 'plan':
        for k, v in plan(sl).items(): print(k, v)
    elif cmd == 'render':
        render(sl)
