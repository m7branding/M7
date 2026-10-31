"""Video A — slow dolly across the desk scene with a rack focus from the iPhone to the MacBook.
1920x1080 output, 24 fps, 68 rendered frames (1600x900, upscaled to 1080p) played as a ping-pong loop (+ short rests, ~7 s)."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R, anim
from mathutils import Vector
import s01_desk

N = int(os.environ.get('R11_FRAMES', '68'))
R.reset()
final = R.quality() == 'final'
R.setup_render(1600 if final else 768, 900 if final else 432, samples=14 if final else 12, threshold=0.04)
objs = s01_desk.build()
fg = bpy.data.objects['fgplant']; fg.location.x -= 0.11; fg.location.z -= 0.03
bpy.context.view_layer.update()
phone_pt = bpy.data.objects['Phone_glass'].matrix_world.translation.copy()
mbp_pt = Vector((0.30, -0.02, 0.12))
cam = R.camera((0.0, -1.32, 0.45), (0.08, 0.06, 0.17), lens=40, fstop=2.4, focus=1.0)
c0, c1 = Vector((-0.07, -1.34, 0.44)), Vector((0.12, -1.24, 0.45))
t0, t1 = Vector((0.03, 0.04, 0.165)), Vector((0.11, 0.05, 0.175))


def pose(i, t):
    cam.location = c0.lerp(c1, t)
    R.look_at(cam, t0.lerp(t1, t))
    fp = phone_pt.lerp(mbp_pt, anim.smooth(min(1.0, t * 1.15)))
    cam.data.dof.focus_distance = (fp - cam.location).length


d = anim.render_frames('vA' if final else 'vA_pv', N, pose, post_kw=dict(exposure=0.0, look='AgX - Medium High Contrast', vignette=0.10))
if final:
    anim.encode_pingpong(d, os.path.join(R.OUT, 'r-hero-a.mp4'), poster_index=N - 1, poster_webp=os.path.join(R.OUT, 'r-hero-a.webp'))
