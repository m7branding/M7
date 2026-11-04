"""08 — Macro detail: camera very close to the MacBook Pro screen at a grazing angle, the price
configurator (height/width inputs) in focus, everything else melting into a shallow depth of field."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R
from mathutils import Vector

R.reset()
R.INTERP = 'Cubic'
w, h, spp = R.res(2400, 1600, 96)
R.setup_render(w, h, samples=spp, threshold=0.01)
R.world_hdri('white_home_studio', strength=0.25, rot_z=math.radians(150), sat=0.6)
oak = R.mat_pbr('oak', 'oak_veneer_01', scale=1.1, bump=0.25, sat=0.75, val=1.0, rot=math.radians(90))
R.box('desk', (3.0, 2.0, 0.03), mat=oak, loc=(0, 0.2, -0.03), bevel=0.003)
wall = R.mat_paint('wall', R.srgb((200, 196, 190)), rough=0.85, spec=0.3)
R.plane('wall', 4.0, 2.0, mat=wall, loc=(0, 0.9, 0.8), rot=(math.radians(90), 0, 0))
mbp = R.macbook_pro14('MBP', screen='mbp3x-config.png', finish='spaceblack', open_deg=108)
mbp.rotation_euler.z = math.radians(8)
bpy.context.view_layer.update()
gl = bpy.data.objects['MBP_lidglass']
S = R.MBP14; gw, gh = (S['W'] - 1.2) * R.K, (S['lid_L'] - 1.2) * R.K
M = gl.matrix_world
X = (M.to_3x3() @ Vector((1, 0, 0))).normalized(); Y = (M.to_3x3() @ Vector((0, 1, 0))).normalized(); Nn = (M.to_3x3() @ Vector((0, 0, 1))).normalized()
def uv(u, v): return M @ Vector(((u - 0.5) * gw, (v - 0.5) * gh, 0.0))
P = uv(0.600, 0.338)
cam_loc = P + Nn * 0.205 + X * 0.185 + Y * 0.035
focus = R.empty('focus', P)
R.camera(cam_loc, P + X * 0.045 + Y * 0.010, lens=55, fstop=3.2, focus=focus)
key = R.area_light('key', (-0.8, -0.6, 0.8), (0, 0, 0.1), size=(0.8, 0.8), power=60, color=(1.0, 0.95, 0.88))
key.visible_glossy = False   # its reflection washed out part of the UI text
R.area_light('rim', (0.6, 0.6, 0.6), (0, 0, 0.1), size=(0.6, 0.6), power=20, color=(0.9, 0.95, 1.0))
R.render_still(R.out_name('r-08-macro'), post_kw=dict(exposure=-0.5, look='AgX - Medium High Contrast', vignette=0.18))
