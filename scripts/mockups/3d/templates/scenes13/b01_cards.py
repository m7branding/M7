"""B01 business cards: a stack + two loose cards (front / back) on a recolourable stone floor."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import scenekit as SK
R = SK.R

def build():
    SK.env(0.25)
    SK.floor('floor', tex='concrete_wall_006', scale=0.9)
    SK.card_stack('card_front', n=10, loc=(-0.02, 0.02, 0), rot_z=math.radians(-18))
    SK.sheet('card_back', 85, 55, t_mm=0.45, r_mm=0.6, loc=(0.075, -0.035, 0), rot_z=math.radians(12))
    SK.sheet('card_front', 85, 55, t_mm=0.45, r_mm=0.6, loc=(-0.085, -0.06, 0), rot_z=math.radians(-13))
    SK.lights_soft(target=(0, 0, 0), key=(-0.6, -0.4, 0.9), key_power=40, fill_power=8, rim=False)

SK.run('b01_cards', build, {
    'a': dict(loc=(0.05, -0.36, 0.30), target=(0.0, -0.01, 0.0), lens=60),
    'b': dict(loc=(0.0, -0.03, 0.62), target=(0.0, -0.01, 0.0), lens=55),
})
