"""Video B — slow orbit + push towards the iPhone while the price-calculator card lifts out of the screen.
1920x1080 output, 24 fps, 68 rendered frames (1600x900, upscaled to 1080p) played as a ping-pong loop (+ short rests, ~7 s)."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R, anim
from mathutils import Vector, Euler, Matrix
import s03_phone_card

N = int(os.environ.get('R11_FRAMES', '68'))
R.reset()
final = R.quality() == 'final'
R.setup_render(1600 if final else 768, 900 if final else 432, samples=16 if final else 12, threshold=0.04)
ph, calc, price = s03_phone_card.build()
bpy.context.view_layer.update()
# end pose = the still's composition; start pose = card lying on the phone screen, scaled down
end_loc, end_rot = calc.location.copy(), calc.rotation_euler.copy()
pend_loc, pend_rot = price.location.copy(), price.rotation_euler.copy()
scr = bpy.data.objects['Phone_glass'].matrix_world
Nn = (scr.to_3x3() @ Vector((0, 0, 1))).normalized()
start_loc = scr @ Vector((0.0, -0.022, 0.00875)) + Nn * 0.0012
pstart_loc = scr @ Vector((0.0, 0.050, 0.00875)) + Nn * 0.0010
start_rot = Euler((math.radians(90), 0, math.radians(-16)))
cam = R.camera((0.0, -0.62, 0.05), (0.0, 0.0, 0.0), lens=70, fstop=11.0, focus=0.6)
fade_calc, fade_price = anim.fadeable(calc), anim.fadeable(price)


def orbit(az, el, dist, tgt):
    a, e = math.radians(az), math.radians(el)
    return Vector(tgt) + Vector((math.sin(a) * math.cos(e), -math.cos(a) * math.cos(e), math.sin(e))) * dist


def pose(i, t):
    k = anim.smooth(min(1.0, max(0.0, (t - 0.08) / 0.84)))
    calc.location = start_loc.lerp(end_loc, k)
    calc.rotation_euler = Euler(anim.lerp(tuple(start_rot), tuple(end_rot), k))
    s = 0.56 + 0.44 * k
    calc.scale = (s, s, s)
    fade_calc(anim.smooth(min(1.0, k / 0.35)))   # fades in while it lifts off the screen
    k2 = anim.smooth(min(1.0, max(0.0, (t - 0.25) / 0.75)))
    price.location = pstart_loc.lerp(pend_loc, k2)
    price.rotation_euler = Euler(anim.lerp(tuple(start_rot), tuple(pend_rot), k2))
    s2 = 0.6 + 0.4 * k2; price.scale = (s2, s2, s2)
    fade_price(anim.smooth(min(1.0, k2 / 0.35)))
    tgt = Vector((-0.006 - 0.008 * t, -0.02 * t, 0.0))
    cam.location = orbit(8 - 18 * t, 6 - 2 * t, 0.66 - 0.08 * t, tgt)
    R.look_at(cam, tgt)
    cam.data.dof.focus_distance = (Vector((-0.012, -0.03 * t, 0.0)) - cam.location).length


d = anim.render_frames('vB' if final else 'vB_pv', N, pose, post_kw=dict(exposure=-0.6, look='AgX - Medium High Contrast'))
if final:
    anim.encode_pingpong(d, os.path.join(R.OUT, 'r-hero-b.mp4'), poster_index=N - 1, poster_webp=os.path.join(R.OUT, 'r-hero-b.webp'))
