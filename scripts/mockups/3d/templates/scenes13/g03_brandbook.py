import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""G03 (round 16) A real landscape brand book: an open perfect-bound book whose pages have the proportions of the
brandbook slides (G03_ASPECT, default 16:9), the pages curving down into the gutter over a page block, and a closed
copy showing the cover. Soft window light with an out-of-frame plant. Prints: l1 / r1 (open spread), cover, edge#n
(cover colour on the spine and the rim of the cover board). Camera 'v' (G03_ANIM=1) renders the page turn
r1 -> (back: l2) revealing r2, frame by frame (f_0000 ...), for the r-64 film.

  G03_ASPECT=1.7778 G03_TAG=169 R12_PV=0 python g03_brandbook.py          still cameras a, b
  G03_ANIM=1 G03_ASPECT=1.7778 G03_TAG=169 R12_PV=0 python g03_brandbook.py   page-turn frames (camera v)
"""
import bmesh
from mathutils import Matrix

ASPECT = float(os.environ.get('G03_ASPECT', '1.7778'))
TAG = os.environ.get('G03_TAG', '169')
NAME = f'g03_book{TAG}'
PW = 0.240                       # page width (m); height follows the slide aspect
PH = PW / ASPECT
TB = 0.0042                      # page block thickness per side
EPS1, EPS2 = 0.00012, 0.00030    # static top pages / turning page above the block
NX = 140                         # segments across a page
TURN_N = int(os.environ.get('G03_TURN_N', '56'))
BOOK_ROT = math.radians(-4.0)
BOOK_LOC = (0.0, -0.035, 0.0)


def ztop(s):
    """Top of the page block at distance s from the spine: pages dive into the gutter, a faint dome, flat edge."""
    s = max(0.0, min(s, PW))
    return TB * (1 - 0.70 * math.exp(-s / 0.012)) + 0.0007 * math.sin(math.pi * s / PW)


def slope(s, h=1e-5):
    return math.atan((ztop(s + h) - ztop(max(s - h, 0))) / (2 * h if s > h else h + s))


def print2_material(role_f, role_b, w_mm, h_mm, rough=0.62):
    """Two-sided print: front shows role_f at (u, v), the back role_b at (1 - u, v) (Geometry > Backfacing)."""
    pf = len(T._PRINTS) + 1; T._PRINTS[pf] = dict(role=role_f, w=w_mm, h=h_mm, light=[-0.6, -0.8], emboss=0.0)
    pb = len(T._PRINTS) + 1; T._PRINTS[pb] = dict(role=role_b, w=w_mm, h=h_mm, light=[-0.6, -0.8], emboss=0.0)
    m = bpy.data.materials.new(f'print2_{pf}_{pb}'); nt, N, L, out = R._nodes(m)
    p = R.principled(N, base=(T.ALBEDO, T.ALBEDO, T.ALBEDO), rough=rough, spec=0.25)
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    uv = N.new('ShaderNodeUVMap'); uv.uv_map = 'UVMap'
    sep = N.new('ShaderNodeSeparateXYZ'); L.new(uv.outputs['UV'], sep.inputs['Vector'])
    geo = N.new('ShaderNodeNewGeometry')
    def math_node(op, a=None, b=None, c=None):
        n = N.new('ShaderNodeMath'); n.operation = op
        for i, v in enumerate((a, b, c)):
            if v is None: continue
            if isinstance(v, (int, float)): n.inputs[i].default_value = float(v)
            else: L.new(v, n.inputs[i])
        return n.outputs['Value']
    one_m2u = math_node('MULTIPLY_ADD', sep.outputs['X'], -2.0, 1.0)            # 1 - 2u
    u = math_node('ADD', sep.outputs['X'], math_node('MULTIPLY', geo.outputs['Backfacing'], one_m2u))
    pid = math_node('MULTIPLY_ADD', geo.outputs['Backfacing'], float(pb - pf), float(pf))
    cmb = N.new('ShaderNodeCombineColor')
    L.new(u, cmb.inputs[0]); L.new(sep.outputs['Y'], cmb.inputs[1]); L.new(pid, cmb.inputs[2])
    a1 = N.new('ShaderNodeOutputAOV'); a1.aov_name = 'prn_uv'; L.new(cmb.outputs['Color'], a1.inputs['Color'])
    a2 = N.new('ShaderNodeOutputAOV'); a2.aov_name = 'prn_cov'; a2.inputs['Value'].default_value = 1.0
    return m


def grid_page(name, mat, side, eps):
    """Page surface over the block: side +1 right (u = s / PW), -1 left (u = 1 - s / PW); v = 1 at the head."""
    me = bpy.data.meshes.new(name); bm = bmesh.new()
    uvl = bm.loops.layers.uv.new('UVMap')
    rows = []
    for j, y in enumerate((-PH / 2, 0.0, PH / 2)):
        rows.append([bm.verts.new((side * PW * i / NX, y, ztop(PW * i / NX) + eps)) for i in range(NX + 1)])
    for j in range(2):
        for i in range(NX):
            vs = (rows[j][i], rows[j][i + 1], rows[j + 1][i + 1], rows[j + 1][i])
            if side < 0: vs = tuple(reversed(vs))
            f = bm.faces.new(vs)
            for lp in f.loops:
                co = lp.vert.co
                s = abs(co.x) / PW
                lp[uvl].uv = (s if side > 0 else 1 - s, (co.y + PH / 2) / PH)
    bm.normal_update(); bm.to_mesh(me); bm.free(); me.shade_smooth()
    ob = bpy.data.objects.new(name, me); me.materials.append(mat)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def block(name, side, mat):
    """Page block under one half: top follows ztop, flat bottom, closed sides (paper edge)."""
    me = bpy.data.meshes.new(name); bm = bmesh.new()
    prof = [(side * PW * i / NX, ztop(PW * i / NX)) for i in range(NX + 1)]
    pts = [(prof[0][0], 0.0)] + prof + [(prof[-1][0], 0.0)]
    front = [bm.verts.new((x, -PH / 2, z)) for x, z in pts]
    back = [bm.verts.new((x, PH / 2, z)) for x, z in pts]
    n = len(pts)
    for i in range(n):
        j = (i + 1) % n
        bm.faces.new((front[i], front[j], back[j], back[i]))
    bm.faces.new(front); bm.faces.new(list(reversed(back)))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(name, me); me.materials.append(mat)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def turn_shape(theta):
    """Page cross-section (x, z) at turn progress theta (0 = lying right, 1 = lying left), by arc length. Each point
    has its own progress: the fore-edge leads while the page is lifted (first half) and lags as it settles."""
    ds = PW / NX
    x, z = 0.0, ztop(0) + EPS2
    pts = [(x, z)]
    for i in range(NX):
        s = (i + 0.5) * ds
        g = (s / PW) ** 1.3
        ts = min(1.0, max(0.0, theta + 0.16 * math.sin(2 * math.pi * theta) * g + 0.05 * math.sin(math.pi * theta) * g))
        fr = slope(s)
        phi = (1 - ts) * fr + ts * (math.pi - fr)
        x += math.cos(phi) * ds; z += math.sin(phi) * ds
        z = max(z, ztop(abs(x)) + EPS2)                    # never through the pages below
        pts.append((x, z))
    return pts


def turn_page(mat):
    me = bpy.data.meshes.new('turn'); bm = bmesh.new()
    uvl = bm.loops.layers.uv.new('UVMap')
    pts = turn_shape(0.0)
    rows = [[bm.verts.new((x, y, z)) for x, z in pts] for y in (-PH / 2, 0.0, PH / 2)]
    for j in range(2):
        for i in range(NX):
            f = bm.faces.new((rows[j][i], rows[j][i + 1], rows[j + 1][i + 1], rows[j + 1][i]))
            for lp, (ii, jj) in zip(f.loops, ((i, j), (i + 1, j), (i + 1, j + 1), (i, j + 1))):
                lp[uvl].uv = (ii / NX, jj / 2)
    bm.normal_update(); bm.to_mesh(me); bm.free(); me.shade_smooth()
    ob = bpy.data.objects.new('turn', me); me.materials.append(mat)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def set_turn(ob, theta):
    pts = turn_shape(theta)
    me = ob.data
    for jj in range(3):
        for ii, (x, z) in enumerate(pts):
            me.vertices[jj * (NX + 1) + ii].co.x = x; me.vertices[jj * (NX + 1) + ii].co.z = z
    me.update()


def closed_book(loc, rot_z, edge_mat):
    """Closed copy: cover print on top, paper edges, the spine (left) in the cover colour."""
    th = 2 * TB + 0.0009
    cover = T.print_material('cover', PW * 1000, PH * 1000, rough=0.5, spec=0.3)
    b = R.slab('closed', PW * 1000, PH * 1000, 0.5, [(0, 0), (0, th * 1000)], n=3, continuous=False,
               mats=[SK.paper_edge(0.93), SK.paper_edge(0.93), cover])
    sp = R.plane('spine', PH, th, mat=edge_mat, loc=(-PW / 2 - 0.00006, 0, th / 2), rot=(math.radians(90), 0, math.radians(-90)))
    R.parent(sp, b, keep=False)
    b.location = loc; b.rotation_euler = (0, 0, rot_z)
    return b


def build(anim=False):
    SK.env(0.22)
    SK.floor('floor', tex='white_plaster_02', scale=0.9, size=6, contrast=0.55)
    root = R.empty('book', loc=BOOK_LOC, rot=(0, 0, BOOK_ROT))
    edge = SK.paper_edge(0.94)
    rim = T.print_material('edge#1', 10, 10, rough=0.55)
    for side, nm in ((-1, 'blk_l'), (1, 'blk_r')):
        bl = block(nm, side, edge); R.parent(bl, root, keep=False)
    l1 = grid_page('page_l1', T.print_material('l1', PW * 1000, PH * 1000, rough=0.62), -1, EPS1); R.parent(l1, root, keep=False)
    if anim:
        r2 = grid_page('page_r2', T.print_material('r2', PW * 1000, PH * 1000, rough=0.62), 1, EPS1); R.parent(r2, root, keep=False)
        tp = turn_page(print2_material('r1', 'l2', PW * 1000, PH * 1000)); R.parent(tp, root, keep=False)
    else:
        r1 = grid_page('page_r1', T.print_material('r1', PW * 1000, PH * 1000, rough=0.62), 1, EPS1); R.parent(r1, root, keep=False)
        tp = None
    # the soft cover board under the open block: a 1 mm rim in the cover colour
    cb = R.slab('coverboard', 2 * PW * 1000 + 2.4, PH * 1000 + 2.0, 0.6, [(0, -0.45), (0, 0.0)], n=3, continuous=False,
                mats=[rim, rim, rim])
    R.parent(cb, root, keep=False)
    for o in (root,):
        o.location.z = 0.00045
    spine = T.print_material('edge#2', 10, 10, rough=0.5)
    closed_book((0.165, 0.175, 0.0), math.radians(10.0), spine)
    sun, to_sun = SK.sun_window(az=-115, el=32, strength=float(os.environ.get('G03_SUN', '4.5')), angle=2.0)
    SK.leaf_gobo(to_sun, center=(-0.34, 0.22, 0.0), dist=0.9, scale=0.7)
    SK.lights_soft(target=(0, 0, 0), key=(-0.7, 0.35, 1.3), key_power=28, fill_power=12, rim=False, top_power=10)
    return tp


CAMS = {
    'a': dict(loc=(-0.051, -0.460, 0.630), target=(0.0, 0.03, 0.0), lens=50, w=3000, h=2000, samples=96),
    'b': dict(loc=(-0.12, -0.62, 0.26), target=(0.02, 0.0, 0.0), lens=45, w=3000, h=2000, samples=96),
    'c': dict(loc=(0.0, -0.10, 0.80), target=(0.0, 0.05, 0.0), lens=50, w=3000, h=2000, samples=96),
}
VCAM = dict(loc=(0.02, -0.50, 0.66), target=(0.02, 0.055, 0.02), lens=40, w=2112, h=1188)

if __name__ == '__main__':
    if os.environ.get('G03_ANIM') != '1':
        SK.run(NAME, build, CAMS, samples=96)
    else:
        T.reset()
        pv = T.preview()
        sc_ = float(os.environ.get('R12_SCALE', '0.3'))
        w, h = (VCAM['w'], VCAM['h']) if not pv else (int(VCAM['w'] * sc_), int(VCAM['h'] * sc_))
        T.setup(w, h, samples=int(os.environ.get('R12_SPP', '48' if not pv else '10')), threshold=0.03, transparent=False)
        # disk: the colour passes as DWAA (lossy, visually lossless), uv stays 32-bit ZIP
        for nd in bpy.context.scene.compositing_node_group.nodes:
            if nd.name in ('out_rgb', 'out_env'):
                nd.format.exr_codec = 'DWAA'
        bpy.context.scene.render.use_persistent_data = True
        tp = build(anim=True)
        nm = f'{NAME}__v'
        cam = R.camera(VCAM['loc'], VCAM['target'], lens=VCAM['lens'])
        T.write_meta(nm, dict(kind='video', frames=TURN_N, fps=30, look='AgX - Medium High Contrast', exposure=0.0,
                              scene='g03_brandbook', cam='v'))
        only = os.environ.get('R12_ONLY')
        idx = [int(i) for i in only.split(',')] if only else range(TURN_N)
        for i in idx:
            base = f'f_{i:04d}'
            if os.path.exists(os.path.join(T.TPL, nm, f'{base}_rgb.exr')) and not os.environ.get('R12_FORCE'):
                continue
            t = i / (TURN_N - 1)
            th = t * t * t * (t * (t * 6 - 15) + 10)          # smootherstep
            set_turn(tp, th)
            bpy.context.view_layer.update()
            T.render_frame(nm, base)
