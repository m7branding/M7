"""Round 21: extra camera angles for the existing 3D scenes, without touching the scene scripts.
Renders new cameras as templates '<scene>__<cam>' (all passes) with the r13 scene builds. Runs in the Blender venv.

  python cam21.py <scene> <cam> <lx,ly,lz> <tx,ty,tz> <lens> [--w 1440 --h 2560] [--roll deg] [--ortho s] [--spp 24]
  bash cams21.sh                    renders the round-21 camera list below it (skips cameras already rendered)
"""
import os, sys, runpy
SC13 = '/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r13/scenes'
sys.path = [x for x in sys.path if os.path.abspath(x or '.') != os.path.dirname(os.path.abspath(__file__))]
sys.path.insert(0, SC13)
import _hdr  # noqa: F401  (sets up the pipeline path and bpy)
import scenekit as SK

scene, cam = sys.argv[1], sys.argv[2]
f = lambda s: tuple(float(x) for x in s.split(','))
arg = lambda n, d: sys.argv[sys.argv.index(n) + 1] if n in sys.argv else d
new = dict(loc=f(sys.argv[3]), target=f(sys.argv[4]), lens=float(sys.argv[5]), w=int(arg('--w', 1440)), h=int(arg('--h', 2560)),
           vertical=int(arg('--h', 2560)) > int(arg('--w', 1440)), samples=int(arg('--spp', 24)))
if '--ortho' in sys.argv:
    new['ortho'] = float(arg('--ortho', 0.8))
if '--roll' in sys.argv:
    new['roll'] = float(arg('--roll', 0))
orig = SK.run


def run(name, build, cams, **kw):
    return orig(name, build, {cam: new}, **kw)    # only the new camera


SK.run = run
os.environ['R12_PV'] = '0'
runpy.run_path(os.path.join(SC13, scene + '.py'), run_name='__main__')
