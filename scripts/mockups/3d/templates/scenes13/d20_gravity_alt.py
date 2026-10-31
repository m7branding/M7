import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'scenes'))
"""D20 The T1 gravity set (tumbling iPhones + iPad) from other angles (transparent + shadow catcher)."""
import t1_gravity as G
def build():
    G.build(G.cam_loc())
SK.run('d20_gravity_alt', build, {
    'a': dict(loc=tuple(T.cam_pos(G.TARGET, 0.95, 62, 28)), target=G.TARGET, lens=55),
    'b': dict(loc=tuple(T.cam_pos((0.02, 0.0, 0.15), 0.78, 20, 30)), target=(0.02, 0.0, 0.15), lens=58),
    'n': dict(loc=tuple(T.cam_pos(G.TARGET, 0.95, 62, 28)), target=G.TARGET, lens=55, w=2400, h=1100, samples=64, autoframe=dict(h=0.62, w=0.55, x=0.64, y=0.5)),
}, transparent=True)
