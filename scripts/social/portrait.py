"""Full-screen portrait mockup shots (1080x1920) from the 3D templates' portrait cameras ('<scene>__p', 1440x2560):
the project's real screens on the devices, scrolling, with a slow 2.5D camera move. Runs in the Blender venv (cv2).

  python portrait.py shot <slug> <template> <move> <seconds> <outdir> [--scroll 0|1] [--fps 30]
  python portrait.py still <slug> <template> <out.jpg> [--s 0.0] [--w 1080 --h 1920]
"""
import os, sys, json
# our own scripts/social/lib.py would shadow the pipeline's 'lib' package
sys.path = [x for x in sys.path if os.path.abspath(x or '.') != os.path.dirname(os.path.abspath(__file__))]
SC = '/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r12/scenes'
sys.path.insert(0, os.path.join(os.path.dirname(SC), 'lib')); sys.path.insert(0, SC)
import numpy as np
from PIL import Image
import video13 as V
import batch13 as B13
import proj as P

# closer camera moves for full-screen social (the subject fills more of the frame)
V.MOVES.update({
    'close':     dict(z=(1.28, 1.28), f0=(0.58, 0.48), f1=(0.58, 0.48)),
    'mid':       dict(z=(1.14, 1.14), f0=(0.58, 0.48), f1=(0.58, 0.48)),
    'wide':      dict(z=(1.0, 1.0), f0=(0.58, 0.48), f1=(0.58, 0.48)),
    'push_in':   dict(z=(1.14, 1.36), f0=(0.58, 0.48), f1=(0.58, 0.48)),
    'pull_out':  dict(z=(1.38, 1.16), f0=(0.58, 0.48), f1=(0.58, 0.48)),
    'glide_l':   dict(z=(1.30, 1.34), f0=(0.66, 0.48), f1=(0.52, 0.48)),
    'glide_r':   dict(z=(1.30, 1.34), f0=(0.52, 0.48), f1=(0.66, 0.48)),
    'lift':      dict(z=(1.26, 1.32), f0=(0.58, 0.42), f1=(0.58, 0.54)),
})

S = '/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad'


def arg(n, d=None):
    return sys.argv[sys.argv.index(n) + 1] if n in sys.argv else d


def base_st(slug, t):
    """The project's gallery settings for this scene (backdrop family, tint), with the portrait camera."""
    plan = json.load(open(os.path.join(S, 'r13/plan.json'))).get(slug, {})
    base = t.split('__')[0]
    for st in plan.get('stills', []):
        if st['t'].split('__')[0] == base:
            return dict(st, t=t)
    return dict(t=t, fam='light', bg='light-grey')


def make_shot(slug, t, move, scroll, W, H):
    V.MW, V.MH = W, H
    cs = B13.cases()
    p = P.projects().get(slug)
    caps = P.captures(p) if p else {}
    brand = B13.brand_for(slug, cs[slug], caps)
    st = base_st(slug, t)
    return V.Shot(slug, cs[slug], caps, brand, dict(st=st, move=move, scroll=scroll), {})


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'shot':
        slug, t, move, secs, outd = sys.argv[2:7]
        fps = int(arg('--fps', 30)); W, H = int(arg('--w', 1080)), int(arg('--h', 1920))
        sh = make_shot(slug, t, move, arg('--scroll', '1') == '1', W, H)
        os.makedirs(outd, exist_ok=True)
        n = int(round(float(secs) * fps))
        for i in range(n):
            s = i / max(1, n - 1)
            fr = sh.frame(s, mobile=True)
            Image.fromarray(np.clip(fr, 0, 255).astype(np.uint8)).save(os.path.join(outd, f'{i + 1:05d}.jpg'), quality=93)
        print('frames', n)
    elif cmd == 'still':
        slug, t, out = sys.argv[2:5]
        W, H = int(arg('--w', 1080)), int(arg('--h', 1920))
        sh = make_shot(slug, t, arg('--move', 'close'), False, W, H)
        fr = sh.frame(float(arg('--s', 0.5)), mobile=True)
        Image.fromarray(np.clip(fr, 0, 255).astype(np.uint8)).save(out, quality=95)
        print('still', out)
