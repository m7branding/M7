"""T2 Gravity close-up — the T1 set seen through a long lens: tight, tilted crop of iPhone A with the
iPad's corner entering the frame (ref 2). Same lights and devices as T1, so both read as one series."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import bpy
import tmpl as T
R = T.R
from mathutils import Vector
import t1_gravity as G

NAME = 't2_closeup'

if __name__ == '__main__':
    T.reset()
    w, h, spp = T.res(2400, 1600, 96, scale=float(os.environ.get('R12_SCALE', '0.35')), pv_spp=int(os.environ.get('R12_SPP', '12')))
    T.setup(w, h, samples=spp, threshold=0.02, transparent=True)
    dev = G.build()
    bpy.context.view_layer.update()
    pa = dev['a']
    M = pa.matrix_world
    centre = M @ Vector((0.006, 0.020, 0.0087))          # upper half of phone A's screen
    d = (G.cam_loc() - Vector(G.TARGET)).normalized()
    d = (d + Vector((0.05, 0.0, 0.06))).normalized()
    dist = float(os.environ.get('R12_DIST', '0.34'))
    cam = R.camera(centre + d * dist, centre + Vector((0.020, 0.010, -0.004)), lens=float(os.environ.get('R12_LENS', '85')))
    from mathutils import Matrix
    cam.rotation_euler = (cam.rotation_euler.to_matrix() @ Matrix.Rotation(math.radians(float(os.environ.get('R12_ROLL', '32'))), 3, 'Z')).to_euler()
    T.write_meta(NAME, dict(kind='still'))
    T.render_frame(NAME, 'still' if not T.preview() else 'pv')
