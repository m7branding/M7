"""Animation B — Dark plinth: slow orbit + dolly around the MacBook on the plinth (iPhone lying beside it),
sites scrolling in the compositor. Unique frames rendered once, ping-pong with cosine easing."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import bpy
import tmpl as T
R = T.R
from mathutils import Vector
import t3_plinth as P

NAME = 'v_b_plinth'
N = int(os.environ.get('R12_FRAMES', '80'))

if __name__ == '__main__':
    T.reset()
    pv = T.preview()
    w, h = (1600, 900) if not pv else (640, 360)
    T.setup(w, h, samples=int(os.environ.get('R12_SPP', '16' if not pv else '6')), threshold=0.03, transparent=False)
    bpy.context.scene.render.use_persistent_data = True
    P.build(phone=True)
    cam = P.camera()
    T.write_meta(NAME, dict(kind='video', frames=N, fps=24, look='AgX - High Contrast'))
    only = os.environ.get('R12_ONLY')
    idx = [int(i) for i in only.split(',')] if only else range(N)
    for i in idx:
        if os.path.exists(os.path.join(T.TPL, NAME, f'f_{i:04d}_rgb.exr')) and not os.environ.get('R12_FORCE'):
            continue
        t = i / (N - 1)
        e = (1 - math.cos(math.pi * t)) / 2
        az = -26.0 + 22.0 * e
        el = 14.0 + 3.0 * e
        dist = 1.22 - 0.12 * e
        tgt = P.TARGET + Vector((0.035 * e, 0.0, 0.035))
        cam.location = T.cam_pos(tgt, dist, el, az)
        R.look_at(cam, tgt)
        bpy.context.view_layer.update()
        T.render_frame(NAME, f'f_{i:04d}')
