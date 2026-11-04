"""Animation A — Gravity float: the T1 devices drift and turn gently in place while the camera pushes in
slowly. Unique frames are rendered once (transparent + shadow catcher); the loop is a ping-pong of these
frames with cosine easing, and the sites scroll per output frame in the compositor."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import bpy
import tmpl as T
R = T.R
from mathutils import Vector, Euler, Matrix
import t1_gravity as G

NAME = 'v_a_gravity'
N = int(os.environ.get('R12_FRAMES', '80'))

# per device: (position amplitude m, rotation amplitude deg (x, y, z), phase)
DRIFT = {'ipad': (0.006, (2.5, 2.0, 1.5), 0.0), 'a': (0.008, (3.5, 3.0, 2.5), 1.9), 'b': (0.006, (3.0, 2.5, 2.0), 3.7)}

if __name__ == '__main__':
    T.reset()
    pv = T.preview()
    w, h = (1600, 900) if not pv else (640, 360)
    T.setup(w, h, samples=int(os.environ.get('R12_SPP', '16' if not pv else '6')), threshold=0.03, transparent=True)
    bpy.context.scene.render.use_persistent_data = True
    cam0 = G.cam_loc()
    dev = G.build(cam0)
    cam = G.camera(cam0)
    base = {k: (o.location.copy(), o.rotation_euler.copy()) for k, o in dev.items()}
    T.write_meta(NAME, dict(kind='video', frames=N, fps=24, look='AgX - Medium High Contrast'))
    only = os.environ.get('R12_ONLY')
    idx = [int(i) for i in only.split(',')] if only else range(N)
    for i in idx:
        if os.path.exists(os.path.join(T.TPL, NAME, f'f_{i:04d}_rgb.exr')) and not os.environ.get('R12_FORCE'):
            continue
        t = i / (N - 1)
        e = (1 - math.cos(math.pi * t)) / 2           # eased 0..1 (zero velocity at both ends -> ping-pong)
        for k, o in dev.items():
            amp, rot, ph = DRIFT[k]
            loc0, rot0 = base[k]
            s = math.sin(ph + e * math.pi * 0.9) - math.sin(ph)
            c = math.cos(ph * 1.3 + e * math.pi * 0.7) - math.cos(ph * 1.3)
            o.location = loc0 + Vector((amp * 0.6 * c, amp * 0.4 * s, amp * s))
            dr = Euler((math.radians(rot[0] * s), math.radians(rot[1] * c), math.radians(rot[2] * s)))
            o.rotation_euler = (rot0.to_matrix() @ dr.to_matrix()).to_euler()
        tgt = Vector(G.TARGET) + Vector((0.0, 0.01, 0.012))
        d = (cam0 - Vector(G.TARGET)) * (1.36 - 0.07 * e)
        cam.location = tgt + d
        R.look_at(cam, tgt)
        bpy.context.view_layer.update()
        T.render_frame(NAME, f'f_{i:04d}')
