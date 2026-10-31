import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B08 Three hanging banners (gently curved cloth) in a recolourable concrete hall."""
import bmesh
def banner(name, w=0.6, h=1.8, amp=0.025, loc=(0, 0, 0), phase=0.0):
    me = bpy.data.meshes.new(name); bm = bmesh.new()
    nx, ny = 24, 40
    vs = [[bm.verts.new(((i / nx - 0.5) * w, amp * math.sin(2 * math.pi * (i / nx) * 1.3 + phase) * (0.4 + 0.6 * j / ny), (j / ny - 0.5) * h))
           for i in range(nx + 1)] for j in range(ny + 1)]
    uvl = bm.loops.layers.uv.new('UVMap')
    for j in range(ny):
        for i in range(nx):
            f = bm.faces.new((vs[j][i], vs[j][i + 1], vs[j + 1][i + 1], vs[j + 1][i]))
            for lp, (a, b) in zip(f.loops, ((i, j), (i + 1, j), (i + 1, j + 1), (i, j + 1))):
                lp[uvl].uv = (a / nx, b / ny)
    bm.normal_update(); bm.to_mesh(me); bm.free(); me.shade_smooth()
    me.materials.append(T.print_material('flag', 600, 1800, rough=0.85, spec=0.15, sheen=0.3) if not hasattr(banner, 'm') else banner.m)
    banner.m = me.materials[0]
    ob = bpy.data.objects.new(name, me); bpy.context.scene.collection.objects.link(ob); ob.location = loc
    rod = R.cylinder(name + '_rod', 6, 640, mat=R.mat_alu('rod', R.srgb((30, 30, 32)), 0.35, aniso=0.0))
    rod.rotation_euler = (0, math.radians(90), 0); rod.location = (loc[0] - 0.32, loc[1], loc[2] + h / 2 + 0.01)
    return ob
def build():
    SK.env(0.18)
    SK.floor('floor', tex='concrete_floor_01', scale=3.0, size=14, contrast=0.6)
    SK.wall('wall', y=2.5, size=14, h=6, tex='concrete_wall_006', scale=2.0)
    for i, x in enumerate((-0.85, 0.0, 0.85)):
        banner(f'flag{i}', loc=(x, 0.4 + 0.15 * (i % 2), 2.1), phase=i * 1.7)
    k = R.area_light('key', (-3, -3, 4), (0, 0.5, 2.0), size=(3, 3), power=2500); k.visible_glossy = False
    R.area_light('fill', (3, -4, 2), (0, 0.5, 2.0), size=(3, 3), power=700).visible_glossy = False
SK.run('b08_flags', build, {
    'a': dict(loc=(0.4, -4.2, 1.2), target=(0.0, 0.5, 2.0), lens=35),
    'b': dict(loc=(-2.2, -2.8, 1.0), target=(0.0, 0.5, 2.1), lens=40),
})
