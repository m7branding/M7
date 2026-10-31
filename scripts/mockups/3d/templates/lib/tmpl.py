"""tmpl — Blender side of the r12 TEMPLATE pipeline.

A template scene is rendered once; every project's screens are composited into it afterwards (tcomp.py).
Per frame the render writes (all EXR, via compositor File Output nodes, bpy 5.x):
  <base>_rgb.exr   Combined (denoised, RGBA; alpha used when film is transparent)
  <base>_scr.exr   light group 'screen'  (white screen emission, camera rays only)      = W(x)
  <base>_env.exr   light group 'env'     (world light, denoised)                          (tinted per project)
  <base>_uv.exr    AOV scr_uv = (glass u, glass v, screen id)   float32
  <base>_cov.exr   AOV scr_cov = 1 on screen glass               (uv / cov = clean AA'd uv)
  <base>_sc.exr    Shadow Catcher pass (transparent templates only)
and a <template>.json with the screen ids -> device type / role, resolution and frame count.
"""
import bpy, os, sys, json, math
HERE = os.path.dirname(os.path.abspath(__file__))
R12 = os.path.dirname(HERE)
# r3d device library: scratch layout (r11/ next to r12/) or repo layout (scripts/mockups/3d/scenes/lib)
R11 = os.environ.get('R3D_ROOT') or (os.path.join(os.path.dirname(R12), 'r11') if os.path.isdir(os.path.join(os.path.dirname(R12), 'r11')) else os.path.dirname(R12))
sys.path.insert(0, os.path.join(R11, 'scenes', 'lib'))
import r3d as R  # noqa: E402
from spec import IPHONE17PRO, MBP14, STUDIO, IPADPRO13, disp_mm  # noqa: E402

TPL = os.path.join(R12, 'tpl')
MASKS = os.path.join(R12, 'masks')

# glass panel -> display rectangle (mm, measured from the glass top-left), mirrors r11/scenes/screens.py
def glass_rects():
    out = {}
    S = IPHONE17PRO; gi = S['glass_inset']; gw, gh = S['W'] - 2 * gi, S['H'] - 2 * gi; dw, dh = disp_mm(S)
    out['iphone'] = dict(gw=gw, gh=gh, x0=(gw - dw) / 2, y0=(gh - dh) / 2, dw=dw, dh=dh, px=S['px'])
    S = MBP14; gi = 0.6; gw, gh = S['W'] - 2 * gi, S['lid_L'] - 2 * gi; dw, dh = disp_mm(S)
    out['mac'] = dict(gw=gw, gh=gh, x0=(gw - dw) / 2, y0=S['bezel_top'] - gi, dw=dw, dh=dh, px=S['px'])
    S = IPADPRO13; gi = 0.5; gw, gh = S['W'] - 2 * gi, S['H'] - 2 * gi; dw, dh = disp_mm(S)
    out['ipad'] = dict(gw=gw, gh=gh, x0=(gw - dw) / 2, y0=(gh - dh) / 2, dw=dw, dh=dh, px=S['px'])
    S = STUDIO; gi = 0.5; gw, gh = S['W'] - 2 * gi, S['H'] - 2 * gi; dw, dh = S['disp_mm']
    out['studio'] = dict(gw=gw, gh=gh, x0=(gw - dw) / 2, y0=(gh - dh) / 2, dw=dw, dh=dh, px=S['px'])
    return out


GLASS = {'iphone': '_glass', 'ipad': '_glass', 'mac': '_lidglass', 'studio': '_glass'}
_EXTRA_GLASS = {}   # extra screen types (panels, billboards): name -> glass rect (UV 0..1 = display)
_SCREENS = {}   # id -> dict(type, role, object)


def reset():
    R.reset()
    _SCREENS.clear()
    _PRINTS.clear(); _TINTS.clear()


def setup(w, h, samples=64, threshold=0.02, transparent=False, bounces=(8, 3, 4, 8, 16), clamp=6.0):
    sc = R.setup_render(w, h, samples=samples, threshold=threshold, bounces=bounces, clamp=clamp)
    sc.render.film_transparent = transparent
    vl = sc.view_layers[0]
    for a in list(vl.aovs): vl.aovs.remove(a)
    a = vl.aovs.add(); a.name = 'scr_uv'; a.type = 'COLOR'
    a = vl.aovs.add(); a.name = 'scr_cov'; a.type = 'VALUE'
    # round 13: recolourable (tint) and printable (prn) surfaces
    for n, t in (('prn_uv', 'COLOR'), ('prn_cov', 'VALUE'), ('tnt', 'VALUE'), ('tnt_cov', 'VALUE')):
        a = vl.aovs.add(); a.name = n; a.type = t
    for g in ('screen', 'env'):
        if g not in vl.lightgroups: vl.lightgroups.add(name=g)
    vl.use_pass_emit = False
    vl.cycles.denoising_store_passes = True
    vl.cycles.use_pass_shadow_catcher = transparent
    # compositor: replace r3d's outputs
    ng = bpy.data.node_groups.new('tcomp', 'CompositorNodeTree'); sc.compositing_node_group = ng
    rl = ng.nodes.new('CompositorNodeRLayers')
    dn = ng.nodes.new('CompositorNodeDenoise')
    ng.links.new(rl.outputs['Combined_env'], dn.inputs['Image'])
    ng.links.new(rl.outputs['Denoising Albedo'], dn.inputs['Albedo'])
    ng.links.new(rl.outputs['Denoising Normal'], dn.inputs['Normal'])
    outs = [('rgb', rl.outputs['Image'], 'RGBA', '16'), ('scr', rl.outputs['Combined_screen'], 'RGBA', '16'),
            ('env', dn.outputs['Image'], 'RGBA', '16'), ('uv', rl.outputs['scr_uv'], 'RGBA', '32'),
            ('cov', rl.outputs['scr_cov'], 'FLOAT', '16'),
            ('prnuv', rl.outputs['prn_uv'], 'RGBA', '32'), ('prncov', rl.outputs['prn_cov'], 'FLOAT', '16'),
            ('tnt', rl.outputs['tnt'], 'FLOAT', '16'), ('tntcov', rl.outputs['tnt_cov'], 'FLOAT', '16')]
    if transparent:
        outs.append(('sc', rl.outputs['Shadow Catcher'], 'RGBA', '16'))
    for key, sock, typ, depth in outs:
        fo = ng.nodes.new('CompositorNodeOutputFile'); fo.name = 'out_' + key
        fo.format.media_type = 'IMAGE'; fo.format.file_format = 'OPEN_EXR'
        fo.format.color_depth = depth; fo.format.exr_codec = 'ZIP'
        fo.file_output_items.new(typ, key)
        ng.links.new(sock, fo.inputs[0])
    return sc


def set_output(directory, base):
    ng = bpy.context.scene.compositing_node_group
    for n in ng.nodes:
        if n.name.startswith('out_'):
            n.directory = directory; n.file_name = base + '_'


def mask_path(dtype):
    return os.path.join(MASKS, f'mask-{dtype}.png')


def screen_material(dtype, sid):
    """White, camera-only emission through the display mask (rounded corners, island / notch cut out),
    a clear glossy glass layer on top, and the AOVs the compositor needs."""
    m = bpy.data.materials.new(f'screen_{sid}'); nt, N, L, out = R._nodes(m)
    m.cycles.emission_sampling = 'NONE'
    uv = N.new('ShaderNodeUVMap'); uv.uv_map = 'UVMap'
    img = bpy.data.images.load(mask_path(dtype), check_existing=True); img.colorspace_settings.name = 'Non-Color'
    t = N.new('ShaderNodeTexImage'); t.image = img; t.interpolation = 'Linear'; t.extension = 'CLIP'
    L.new(uv.outputs['UV'], t.inputs['Vector'])
    lp = N.new('ShaderNodeLightPath')
    mul = N.new('ShaderNodeMath'); mul.operation = 'MULTIPLY'
    L.new(t.outputs['Color'], mul.inputs[0]); L.new(lp.outputs['Is Camera Ray'], mul.inputs[1])
    em = N.new('ShaderNodeEmission'); em.inputs['Color'].default_value = (1, 1, 1, 1)
    L.new(mul.outputs['Value'], em.inputs['Strength'])
    g = R.principled(N, base=(0.0, 0.0, 0.0), rough=0.035, ior=1.45)
    add = N.new('ShaderNodeAddShader'); L.new(em.outputs['Emission'], add.inputs[0]); L.new(g.outputs['BSDF'], add.inputs[1])
    L.new(add.outputs['Shader'], out.inputs['Surface'])
    sep = N.new('ShaderNodeSeparateXYZ'); L.new(uv.outputs['UV'], sep.inputs['Vector'])
    cmb = N.new('ShaderNodeCombineColor')
    L.new(sep.outputs['X'], cmb.inputs[0]); L.new(sep.outputs['Y'], cmb.inputs[1]); cmb.inputs[2].default_value = float(sid)
    a1 = N.new('ShaderNodeOutputAOV'); a1.aov_name = 'scr_uv'; L.new(cmb.outputs['Color'], a1.inputs['Color'])
    a2 = N.new('ShaderNodeOutputAOV'); a2.aov_name = 'scr_cov'; a2.inputs['Value'].default_value = 1.0
    return m


def make_screen(root, dtype, role):
    """Turn the display glass of a device built by r3d into a template screen slot."""
    sid = len(_SCREENS) + 1
    glass = next(o for o in [root] + list(root.children_recursive) if o.name.endswith(GLASS[dtype]))
    glass.data.materials[2] = screen_material(dtype, sid)
    glass.lightgroup = 'screen'
    _SCREENS[sid] = dict(type=dtype, role=role, object=glass.name)
    return sid


def world(strength=1.0, color=(1, 1, 1), hdri=None, rot_z=0.0, sat=1.0):
    """World light in light group 'env' (the compositor can tint it per project)."""
    if hdri:
        w = R.world_hdri(hdri, strength=strength, rot_z=rot_z, sat=sat)
    else:
        w = R.world_color(color, strength)
    w.lightgroup = 'env'
    return w


def cam_info():
    """Camera of the current scene (world matrix + intrinsics) so the compositor can project backdrops
    (floor textures, light pools) exactly into the image."""
    sc = bpy.context.scene; cam = sc.camera; bpy.context.view_layer.update()
    cd = cam.data
    return dict(matrix=[list(map(float, r)) for r in cam.matrix_world], lens=cd.lens, sensor_width=cd.sensor_width,
                sensor_height=cd.sensor_height, sensor_fit=cd.sensor_fit, shift=[cd.shift_x, cd.shift_y],
                ortho=cd.ortho_scale if cd.type == 'ORTHO' else None)


def meta_only():
    """R12_META_ONLY=1: build the scene and write meta.json (incl. cameras) without rendering."""
    return os.environ.get('R12_META_ONLY') == '1'


def write_meta(name, extra=None):
    sc = bpy.context.scene
    d = dict(name=name, w=sc.render.resolution_x, h=sc.render.resolution_y, transparent=sc.render.film_transparent,
             screens={str(k): dict(type=v['type'], role=v['role']) for k, v in _SCREENS.items()}, glass=glass_rects(),
             prints={str(k): v for k, v in _PRINTS.items()}, tints={str(k): v for k, v in _TINTS.items()})
    d['glass'].update(_EXTRA_GLASS)
    if sc.camera is not None:
        d['camera'] = cam_info()
    if extra: d.update(extra)
    os.makedirs(os.path.join(TPL, name), exist_ok=True)
    p = os.path.join(TPL, name, 'meta.json')
    if os.path.exists(p):
        old = json.load(open(p))
        if 'cameras' in old: d['cameras'] = old['cameras']
    with open(p, 'w') as f:
        json.dump(d, f, indent=1)


def _store_frame_camera(name, base):
    p = os.path.join(TPL, name, 'meta.json')
    d = json.load(open(p)) if os.path.exists(p) else {}
    d.setdefault('cameras', {})[base] = cam_info()
    with open(p, 'w') as f:
        json.dump(d, f, indent=1)


def render_frame(name, base):
    import time
    d = os.path.join(TPL, name)
    os.makedirs(d, exist_ok=True)
    if base.startswith('f_'):
        _store_frame_camera(name, base)
    if meta_only():
        return 0.0
    set_output(d, base)
    t = time.time()
    bpy.ops.render.render(write_still=False)
    dt = time.time() - t
    print(f'[tmpl] {name}/{base} {dt:.1f}s', flush=True)
    return dt


def orient(ob, normal, up):
    """Rotate ob so its local +Z (screen normal) points along `normal` and local +Y (device top) towards `up`."""
    from mathutils import Vector, Matrix
    z = Vector(normal).normalized()
    y = Vector(up); y = (y - z * y.dot(z)).normalized()
    x = y.cross(z)
    ob.rotation_euler = Matrix((x, y, z)).transposed().to_euler()


def preview():
    return os.environ.get('R12_PV', '1') == '1'


def res(w, h, spp, scale=0.35, pv_spp=12):
    return (int(w * scale), int(h * scale), pv_spp) if preview() else (w, h, spp)


def place_device_center(root, dtype, loc):
    """r3d device roots sit at the back plane centre; that's what we position."""
    root.location = loc


def orient_cam(ob, cam_loc, roll=0.0, tilt_long=0.0, tilt_short=0.0, flip=False):
    """Orient a device relative to the camera: start screen-to-camera (top = camera up), then roll in the
    image plane, tilt about the device's long axis (shows a side frame) and its short axis (top away/towards).
    Angles in degrees. flip=True turns it round (back to the camera)."""
    from mathutils import Vector, Matrix
    z0 = (Vector(cam_loc) - ob.location).normalized()
    up = Vector((0, 0, 1)); y0 = (up - z0 * up.dot(z0)).normalized(); x0 = y0.cross(z0)
    B = Matrix((x0, y0, z0)).transposed().to_4x4()
    Rr = Matrix.Rotation(math.radians(roll), 4, 'Z')
    Rl = Matrix.Rotation(math.radians(tilt_long + (180 if flip else 0)), 4, 'Y')
    Rs = Matrix.Rotation(math.radians(tilt_short), 4, 'X')
    ob.rotation_euler = (B @ Rr @ Rl @ Rs).to_euler()


def cam_pos(target, dist, el_deg, az_deg):
    from mathutils import Vector
    el, az = math.radians(el_deg), math.radians(az_deg)
    return Vector(target) + Vector((math.sin(az) * math.cos(el), -math.cos(az) * math.cos(el), math.sin(el))) * dist


def edge_lights_skip_screens(lights):
    """Light linking: these (strip / rim) lights shape the metal frames but don't reach the screen glass,
    so their reflections never wash out a display."""
    coll = bpy.data.collections.get('no_screens') or bpy.data.collections.new('no_screens')
    screens = {s['object'] for s in _SCREENS.values()}
    for o in bpy.context.scene.objects:
        if o.type == 'MESH' and o.name not in screens and o.name not in coll.objects:
            coll.objects.link(o)
    for l in lights:
        l.light_linking.receiver_collection = coll


def link_only(light, objs):
    """Light linking: this light reaches only `objs`."""
    name = 'only_' + light.name
    coll = bpy.data.collections.get(name) or bpy.data.collections.new(name)
    for o in objs:
        if o.name not in coll.objects: coll.objects.link(o)
    light.light_linking.receiver_collection = coll


def soft_fill(target, power=6.0, loc=(0.0, -1.6, 0.9), size=(2.0, 1.4)):
    """Very soft frontal fill (no reflections in the screens) that lifts the darkest shadows of the set."""
    f = R.area_light('fill', loc, target, size=size, power=power, color=(0.95, 0.97, 1.0))
    f.visible_glossy = False
    return f



# ================================================================== round 13: print + tint surfaces
_PRINTS = {}   # pid -> dict(role, w, h (mm), light (x, y) in design space, emboss)
_TINTS = {}    # tid -> dict(role)
ALBEDO = 0.8   # white albedo of print / tint surfaces (the compositor multiplies by design / colour / ALBEDO)


def _aov(N, L, name, sock=None, value=None):
    a = N.new('ShaderNodeOutputAOV'); a.aov_name = name
    if sock is not None:
        L.new(sock, a.inputs['Color'] if a.inputs.get('Color') is not None and name == 'prn_uv' else a.inputs['Value'])
    elif value is not None:
        a.inputs['Value'].default_value = value
    return a


def print_material(role, w_mm, h_mm, rough=0.55, spec=0.25, light=(-0.6, -0.8), emboss=0.0, sheen=0.0):
    """Printable surface: white diffuse (albedo ALBEDO) + AOVs (u, v, pid). The compositor multiplies the lighting by
    the project's design (logo / card / poster ...) sampled at (u, v). light: direction the light comes FROM in the
    design image (x right, y down) for embossing."""
    pid = len(_PRINTS) + 1
    m = bpy.data.materials.new(f'print_{pid}_{role}'); nt, N, L, out = R._nodes(m)
    p = R.principled(N, base=(ALBEDO, ALBEDO, ALBEDO), rough=rough, spec=spec, sheen=sheen)
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    uv = N.new('ShaderNodeUVMap'); uv.uv_map = 'UVMap'
    sep = N.new('ShaderNodeSeparateXYZ'); L.new(uv.outputs['UV'], sep.inputs['Vector'])
    cmb = N.new('ShaderNodeCombineColor')
    L.new(sep.outputs['X'], cmb.inputs[0]); L.new(sep.outputs['Y'], cmb.inputs[1]); cmb.inputs[2].default_value = float(pid)
    a1 = N.new('ShaderNodeOutputAOV'); a1.aov_name = 'prn_uv'; L.new(cmb.outputs['Color'], a1.inputs['Color'])
    a2 = N.new('ShaderNodeOutputAOV'); a2.aov_name = 'prn_cov'; a2.inputs['Value'].default_value = 1.0
    _PRINTS[pid] = dict(role=role, w=w_mm, h=h_mm, light=list(light), emboss=emboss)
    return m


def tint_material(role, tex=None, scale=1.0, rough=0.85, spec=0.3, bump=0.3, box=False, contrast=1.0):
    """Recolourable surface (floor / wall / plinth): neutral albedo around ALBEDO (optionally a desaturated PBR
    texture for structure), AOV tnt = id. The compositor multiplies by the chosen colour / ALBEDO."""
    tid = len(_TINTS) + 1
    if tex:
        m = R.mat_pbr(f'tint_{tid}_{role}', tex, scale=scale, sat=0.0, val=1.0, bump=bump, rough_mul=1.0, box=box)
        nt = m.node_tree; N = nt.nodes; L = nt.links
        p = next(n for n in N if n.type == 'BSDF_PRINCIPLED')
        # normalise the texture around ALBEDO: albedo = ALBEDO * (1 + contrast * (tex - mean))
        src = p.inputs['Base Color'].links[0].from_socket
        bw = N.new('ShaderNodeRGBToBW'); L.new(src, bw.inputs['Color'])
        sub = N.new('ShaderNodeMath'); sub.operation = 'SUBTRACT'; sub.inputs[1].default_value = 0.5
        L.new(bw.outputs['Val'], sub.inputs[0])
        mul = N.new('ShaderNodeMath'); mul.operation = 'MULTIPLY_ADD'; mul.inputs[1].default_value = 0.35 * contrast; mul.inputs[2].default_value = ALBEDO
        L.new(sub.outputs['Value'], mul.inputs[0])
        cl = N.new('ShaderNodeClamp'); L.new(mul.outputs['Value'], cl.inputs['Value'])
        cc = N.new('ShaderNodeCombineColor')
        for i in range(3): L.new(cl.outputs['Result'], cc.inputs[i])
        L.new(cc.outputs['Color'], p.inputs['Base Color'])
        p.inputs['Specular IOR Level'].default_value = spec
    else:
        m = bpy.data.materials.new(f'tint_{tid}_{role}'); nt, N, L, out = R._nodes(m)
        p = R.principled(N, base=(ALBEDO, ALBEDO, ALBEDO), rough=rough, spec=spec)
        L.new(p.outputs['BSDF'], out.inputs['Surface'])
    a1 = N.new('ShaderNodeOutputAOV'); a1.aov_name = 'tnt'; a1.inputs['Value'].default_value = float(tid)
    a2 = N.new('ShaderNodeOutputAOV'); a2.aov_name = 'tnt_cov'; a2.inputs['Value'].default_value = 1.0
    _TINTS[tid] = dict(role=role)
    return m


def extra_meta():
    return dict(prints={str(k): v for k, v in _PRINTS.items()}, tints={str(k): v for k, v in _TINTS.items()})


def make_flat_screen(obj, dtype, role, px, radius=0.0, mat_index=None):
    """A flat emissive 'screen' that is not a device (floating UI panel, billboard, poster screen): UV 0..1 of the
    object = the whole display. px: content resolution (w, h); radius: corner radius as a fraction of the height."""
    from PIL import Image, ImageDraw
    os.makedirs(MASKS, exist_ok=True)
    mp = mask_path(dtype)
    if not os.path.exists(mp):
        W, H = 1600, max(8, int(1600 * px[1] / px[0]))
        ss = 3; m = Image.new('L', (W * ss, H * ss), 0)
        ImageDraw.Draw(m).rounded_rectangle([0, 0, W * ss - 1, H * ss - 1], radius=int(radius * H * ss), fill=255)
        m.resize((W, H), Image.LANCZOS).save(mp)
    sid = len(_SCREENS) + 1
    mat = screen_material(dtype, sid)
    if mat_index is None:
        obj.data.materials.clear(); obj.data.materials.append(mat)
    else:
        obj.data.materials[mat_index] = mat
    obj.lightgroup = 'screen'
    _SCREENS[sid] = dict(type=dtype, role=role, object=obj.name)
    _EXTRA_GLASS[dtype] = dict(gw=1.0, gh=1.0, x0=0.0, y0=0.0, dw=1.0, dh=1.0, px=list(px))
    return sid
