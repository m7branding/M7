"""scenekit — building blocks for the round-13 template library (device + branding compositions).

A scene is built once and rendered from one or more cameras; every camera becomes its own template
(tpl/<scene>__<cam>/still_*.exr + meta.json). Recolourable surfaces (floors, walls, plinths) use
tmpl.tint_material, printable ones (cards, letterheads, posters, banners ...) tmpl.print_material, so a
single render serves every project, colourway and design.
"""
import os, sys, math
import bpy
import tmpl as T
R = T.R
from mathutils import Vector, Matrix, Euler

K = R.K
MM = 0.001


def env(strength=0.35, color=(1, 1, 1)):
    return T.world(strength=strength, color=color)


def floor(role='floor', tex='concrete_wall_006', scale=1.2, size=20.0, z=0.0, bump=0.25, contrast=0.6):
    m = T.tint_material(role, tex=tex, scale=scale, bump=bump, contrast=contrast) if tex else T.tint_material(role)
    return R.plane(role, size, size, mat=m, loc=(0, 0, z))


def wall(role='wall', y=0.6, tex='white_plaster_02', scale=1.0, size=20.0, h=3.0, bump=0.35, contrast=0.6, mat=None):
    m = mat or (T.tint_material(role, tex=tex, scale=scale, bump=bump, contrast=contrast) if tex else T.tint_material(role))
    return R.plane(role, size, h, mat=m, loc=(0, y, h / 2), rot=(math.radians(90), 0, 0))


def cyc(role='floor', tex=None, y=0.8, radius=0.6, width=20.0):
    m = T.tint_material(role, tex=tex, scale=1.2, bump=0.2, contrast=0.5) if tex else T.tint_material(role)
    return R.sweep(role, width=width, depth=4, height=3, radius=radius, mat=m, loc=(0, y, 0))


_EDGE = {}


def paper_edge(shade=0.92):
    k = round(shade, 3)
    if k not in _EDGE or _EDGE[k].name not in bpy.data.materials:
        _EDGE[k] = R.mat_paint(f'paper_edge_{k}', (shade * 0.85, shade * 0.85, shade * 0.84), rough=0.8, spec=0.2)
    return _EDGE[k]


def sheet(role, w_mm, h_mm, t_mm=0.25, r_mm=0.4, loc=(0, 0, 0), rot_z=0.0, light=(-0.6, -0.8), emboss=0.0,
          back_role=None, rough=0.6, edge=0.92):
    """Paper / card / board with a printed top face (and optionally a printed back)."""
    pm = T.print_material(role, w_mm, h_mm, rough=rough, light=light, emboss=emboss)
    bm = T.print_material(back_role, w_mm, h_mm, rough=rough) if back_role else paper_edge(edge)
    ob = R.slab(role, w_mm, h_mm, r_mm, [(0, 0), (0, t_mm)], mats=[paper_edge(edge), bm, pm], n=4, continuous=False)
    ob.location = loc; ob.rotation_euler = (0, 0, rot_z)
    return ob


def card_stack(role_top, n=8, w=85.0, h=55.0, t=0.45, loc=(0, 0, 0), rot_z=0.0, jitter=0.6, seed=3, edge=0.92):
    import random
    rnd = random.Random(seed)
    root = R.empty('stack_' + role_top, loc=loc, rot=(0, 0, rot_z))
    for i in range(n):
        if i == n - 1:
            c = sheet(role_top, w, h, t_mm=t, r_mm=0.6, edge=edge)
        else:
            c = R.slab(f'card_{role_top}_{i}', w, h, 0.6, [(0, 0), (0, t)], mats=[paper_edge(edge)] * 3, n=4, continuous=False)
        c.location = (rnd.uniform(-jitter, jitter) * MM, rnd.uniform(-jitter, jitter) * MM, i * t * MM)
        c.rotation_euler.z = math.radians(rnd.uniform(-1.2, 1.2))
        R.parent(c, root, keep=False)
    return root


def frame(role, w_mm, h_mm, border=18.0, depth=22.0, mat=None, mount=40.0, loc=(0, 0, 0), rot=(0, 0, 0)):
    """Picture frame (front faces -Y when rot is applied by the caller) with passe-partout and print."""
    root = R.empty('frame_' + role, loc=loc, rot=rot)
    fm = mat or R.mat_paint('frame_black', (0.02, 0.02, 0.02), rough=0.45, spec=0.4)
    W, H = w_mm + 2 * mount + 2 * border, h_mm + 2 * mount + 2 * border
    outer = R.slab('frame_' + role + '_o', W, H, 1.0, [(0, 0), (0, depth)], mats=[fm, fm, fm], n=3, continuous=False)
    R.parent(outer, root, keep=False)
    mm_ = R.mat_paint('passe', (0.86, 0.86, 0.84), rough=0.9, spec=0.2)
    pp = R.slab('frame_' + role + '_pp', W - 2 * border, H - 2 * border, 0.2, [(0, 0), (0, 2.0)], mats=[mm_, mm_, mm_], n=2, continuous=False)
    pp.location.z = (depth + 0.05) * MM; R.parent(pp, root, keep=False)
    pr = sheet(role, w_mm, h_mm, t_mm=0.3, r_mm=0.1)
    pr.location.z = (depth + 2.1) * MM; R.parent(pr, root, keep=False)
    return root


def block(name, size, mat, loc=(0, 0, 0), rot_z=0.0, bevel=0.002):
    return R.box(name, size, mat=mat, loc=loc, rot=(0, 0, rot_z), bevel=bevel)


def ipad_stand(name='stand', loc=(0, 0, 0), rot_z=0.0, angle=70.0, finish='silver'):
    """Simple aluminium tablet stand: base plate + slanted back plate + lip. Returns (root, tablet_frame) where
    tablet_frame is an empty to parent the iPad to (its back on the plate, long edge horizontal)."""
    col, rough = R.ALU[finish]
    alu = R.mat_alu('stand_' + finish, col, rough, aniso=0.3)
    root = R.empty(name, loc=loc, rot=(0, 0, rot_z))
    base = R.slab(name + '_base', 140, 120, 8, [(0, 0), (0, 6)] + R.round_profile(1.5, 6, up=True, n=3)[1:], mats=[alu] * 3, n=6)
    R.parent(base, root, keep=False)
    a = math.radians(angle)
    back = R.slab(name + '_back', 120, 150, 6, [(0, 0), (0, 5)], mats=[alu] * 3, n=6)
    # back plate: tilt so its normal points to -Y and up by (90 - angle)
    back.rotation_euler = (math.radians(angle), 0, 0)
    back.location = (0, 0.02, 0.075 * math.sin(a) + 0.006)
    R.parent(back, root, keep=False)
    lip = R.slab(name + '_lip', 120, 10, 2, [(0, 0), (0, 14)], mats=[alu] * 3, n=4)
    lip.location = (0, -0.045, 0.006); R.parent(lip, root, keep=False)
    holder = R.empty(name + '_holder'); R.parent(holder, root, keep=False)
    holder.location = (0, -0.035, 0.012)
    holder.rotation_euler = (math.radians(angle), 0, 0)
    return root, holder


def keyboard_folio(name='kb', loc=(0, 0, 0), rot_z=0.0):
    """Dark keyboard folio base (closed keyboard case look) for an iPad: a thin slab with a keyboard well."""
    dark = R.mat_paint('folio', (0.018, 0.018, 0.02), rough=0.65, spec=0.3)
    keys = R.mat_paint('folio_keys', (0.03, 0.03, 0.032), rough=0.55, spec=0.3)
    root = R.empty(name, loc=loc, rot=(0, 0, rot_z))
    b = R.slab(name + '_base', 286, 220, 12, [(0.6, 0), (0, 0.6), (0, 4.4), (0.6, 5.0)], mats=[dark] * 3, n=8)
    R.parent(b, root, keep=False)
    import random
    rnd = random.Random(5)
    pitch = 18.5
    for r in range(5):
        for c in range(14):
            k = R.slab(f'{name}_k{r}_{c}', pitch - 2.6, pitch - 2.6, 2.0, [(0, 5.0), (0, 5.6)], mats=[keys] * 3, n=2, continuous=False)
            k.location = ((c - 6.5) * pitch * MM, (25 - r * pitch) * MM, 0); R.parent(k, root, keep=False)
    tp = R.slab(name + '_tp', 120, 62, 5, [(0, 4.8), (0, 5.05)], mats=[keys] * 3, n=4)
    tp.location = (0, -72 * MM, 0); R.parent(tp, root, keep=False)
    return root


def lights_soft(target=(0, 0, 0.05), key=(-0.8, -0.7, 1.1), key_power=70, fill_power=18, rim=True, top_power=0.0, glossy=False):
    k = R.area_light('key', key, target, size=(0.9, 0.9), power=key_power, color=(1.0, 0.98, 0.95))
    f = R.area_light('fill', (0.9, -0.9, 0.6), target, size=(1.2, 1.2), power=fill_power, color=(0.95, 0.97, 1.0))
    k.visible_glossy = glossy; f.visible_glossy = False
    edge = []
    if rim:
        edge.append(R.area_light('rim', (0.6, 0.9, 0.6), target, size=(0.8, 0.12), power=30, color=(1, 1, 1)))
    if top_power:
        t = R.area_light('top', (0, 0, 1.6), target, size=(1.2, 1.2), power=top_power); t.visible_glossy = False
    T.edge_lights_skip_screens(edge)
    return k


def lights_raking(target=(0, 0, 0), from_dir=(-1.0, 0.25), height=0.25, dist=1.0, power=60, size=(0.25, 1.2)):
    d = Vector((from_dir[0], from_dir[1], 0)).normalized()
    loc = Vector(target) + d * dist + Vector((0, 0, height))
    k = R.area_light('rake', tuple(loc), target, size=size, power=power, color=(1.0, 0.97, 0.92))
    k.visible_glossy = False
    return k


def sun_window(az=-120, el=38, strength=4.0, angle=2.5):
    e, to_sun = R.sun_dir(az, el)
    return R.sun_light('sun', e, strength=strength, angle=angle, color=(1.0, 0.95, 0.88)), to_sun


def leaf_gobo(to_sun, center=(0, 0.2, 0.0), dist=0.7, scale=0.6):
    """Out-of-frame CC0 plant (pachira) between the sun and the set: soft leaf shadows."""
    gr, gn = R.import_gltf('pachira_aquatica_01/pachira_aquatica_01_2k.gltf', 'gobo')
    gn = R.gltf_part(gr, gn, ['_a'])
    gr.scale = (scale, scale, scale); gr.rotation_euler = (0, 0, math.radians(-25))
    R.place_center(gr, [o for o in gn if 'leaves' in o.name], Vector(center) + to_sun * dist)
    R.set_visibility(gr, camera=False, glossy=False, diffuse=True, shadow=True)
    return gr


def run(name, build, cams, w=2400, h=1600, samples=24, transparent=False, look='AgX - Medium High Contrast', extra=None):
    """Build once, render every camera as its own template '<name>__<cam>'.
    cams: {cam: dict(loc=, target=, lens=, roll=0, w=, h=)}; env R12_PV=1 renders small previews, R12_CAMS
    limits the cameras."""
    T.reset()
    pv = T.preview()
    only = os.environ.get('R12_CAMS')
    scale = float(os.environ.get('R12_SCALE', '0.3'))
    W, H = (int(w * scale), int(h * scale)) if pv else (w, h)
    T.setup(W, H, samples=int(os.environ.get('R12_SPP', '10')) if pv else samples, threshold=0.04 if pv else 0.045,
            transparent=transparent)
    bpy.context.scene.render.use_persistent_data = True
    build()
    for cam, c in cams.items():
        if only and cam not in only.split(','):
            continue
        cw, chh = c.get('w', w), c.get('h', h)
        sc = bpy.context.scene
        sc.render.resolution_x, sc.render.resolution_y = (int(cw * scale), int(chh * scale)) if pv else (cw, chh)
        ob = R.camera(c['loc'], c['target'], lens=c.get('lens', 50), ortho=c.get('ortho'))
        if c.get('roll'):
            ob.rotation_euler = (ob.rotation_euler.to_matrix() @ Matrix.Rotation(math.radians(c['roll']), 3, 'Z')).to_euler()
        if c.get('vertical'):
            ob.data.sensor_fit = 'VERTICAL'; ob.data.sensor_height = 24.0
        tname = f'{name}__{cam}'
        T.write_meta(tname, dict(kind='still', look=c.get('look', look), exposure=c.get('exposure', 0.0), scene=name, cam=cam,
                                 **(extra or {})))
        T.render_frame(tname, 'pv' if pv else 'still')
