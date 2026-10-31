"""r3d — small procedural toolkit for realistic device mockups in Blender (bpy 5.x, Cycles CPU).

Units: metres in the scene; device dimensions are given in millimetres (spec.py) and converted.
Screens are emissive textures (tex/*.png from screens.py) with an AOV 'scr' = lit-display mask, so
post.py can develop the scene with AgX while keeping the screen pixels colour-exact (Standard sRGB).
"""
import bpy, bmesh, math, os, sys, json, time
from mathutils import Vector, Matrix, Euler

LIB = os.path.dirname(os.path.abspath(__file__))
SCENES = os.path.dirname(LIB)
R11 = os.path.dirname(SCENES)
TEX = os.path.join(R11, 'tex')
CAPEL = os.path.join(R11, 'cap', 'el')
ASSETS = os.path.join(R11, 'assets')
OUT = os.path.join(R11, 'out')
sys.path.insert(0, LIB)
from spec import IPHONE17PRO, MBP14, STUDIO, IPADPRO13, PENCILPRO, rrect, disp_mm  # noqa: E402

K = 0.001  # mm -> m
INTERP = 'Linear'   # screen texture interpolation ('Cubic' for macro shots)
MICRO_BUMP = True


# ============================================================== scene / render
def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    _MC.clear()
    sc = bpy.context.scene
    sc.unit_settings.system = 'METRIC'
    return sc


def setup_render(w, h, samples=256, threshold=0.01, bounces=(8, 3, 4, 8, 24), caustics=False,
                 clamp=8.0, filter_glossy=0.8, motion=False):
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'
    cy = sc.cycles
    cy.device = 'CPU'
    cy.samples = samples
    cy.use_adaptive_sampling = True
    cy.adaptive_threshold = threshold
    cy.adaptive_min_samples = 0
    cy.use_denoising = True
    cy.denoiser = 'OPENIMAGEDENOISE'
    try:
        cy.denoising_input_passes = 'RGB_ALBEDO_NORMAL'
        cy.denoising_prefilter = 'ACCURATE'
        cy.denoising_quality = 'HIGH'
    except Exception:
        pass
    cy.max_bounces, cy.diffuse_bounces, cy.glossy_bounces, cy.transmission_bounces, cy.transparent_max_bounces = bounces
    cy.volume_bounces = 2
    cy.caustics_reflective = caustics
    cy.caustics_refractive = caustics
    cy.sample_clamp_direct = 0
    cy.sample_clamp_indirect = clamp
    cy.blur_glossy = filter_glossy
    cy.use_light_tree = True
    sc.render.resolution_x, sc.render.resolution_y = w, h
    sc.render.resolution_percentage = 100
    sc.render.threads_mode = 'FIXED'
    sc.render.threads = os.cpu_count() or 4
    sc.render.film_transparent = False
    sc.render.use_motion_blur = motion
    sc.render.filter_size = 1.2
    sc.view_settings.view_transform = 'AgX'
    sc.view_settings.look = 'AgX - Medium High Contrast'
    vl = sc.view_layers[0]
    if 'scr' not in [a.name for a in vl.aovs]:
        a = vl.aovs.add(); a.name = 'scr'; a.type = 'VALUE'
    _compositor(sc)
    return sc


def _compositor(sc):
    """bpy 5.x writes only Combined into multilayer EXRs, so passes go through File Output nodes:
    <name>_rgb.exr (Combined) and <name>_scr.exr (AOV mask)."""
    sc.render.compositor_device = 'CPU'
    sc.view_layers[0].use_pass_emit = True   # screens: emission without the glass reflection (see post.develop)
    ng = bpy.data.node_groups.new('comp', 'CompositorNodeTree'); sc.compositing_node_group = ng
    rl = ng.nodes.new('CompositorNodeRLayers')
    for key, sock, typ in (('rgb', 'Image', 'RGBA'), ('scr', 'scr', 'FLOAT'), ('emit', 'Emission', 'RGBA')):
        fo = ng.nodes.new('CompositorNodeOutputFile'); fo.name = 'out_' + key
        fo.format.media_type = 'IMAGE'; fo.format.file_format = 'OPEN_EXR'
        fo.format.color_depth = '16' if key == 'scr' else '32'; fo.format.exr_codec = 'ZIP'
        fo.file_output_items.new(typ, key)
        ng.links.new(rl.outputs[sock], fo.inputs[0])


def set_output(directory, base):
    ng = bpy.context.scene.compositing_node_group
    for key in ('rgb', 'scr', 'emit'):
        fo = ng.nodes['out_' + key]; fo.directory = directory; fo.file_name = base + '_'


def render_still(name, post_kw=None, out_dir=OUT, save_blend=False):
    """Render the current scene to out/<name>.exr and develop to out/<name>.png (+ .webp)."""
    sc = bpy.context.scene
    os.makedirs(out_dir, exist_ok=True)
    set_output(out_dir, name)
    exr = os.path.join(out_dir, name + '_rgb.exr')
    if save_blend:
        bpy.ops.wm.save_as_mainfile(filepath=os.path.join(out_dir, name + '.blend'))
    t = time.time()
    bpy.ops.render.render(write_still=False)
    dt = time.time() - t
    print(f'[r3d] rendered {name} in {dt:.1f}s', flush=True)
    import post
    post.develop(exr, os.path.join(out_dir, name), **(post_kw or {}))
    with open(os.path.join(out_dir, name + '.time'), 'w') as f:
        f.write(f'{dt:.1f}\n')
    return dt


# ============================================================== world / lights
def world_hdri(name, strength=1.0, rot_z=0.0, cam_color=None, cam_strength=1.0, sat=1.0):
    """HDRI lighting. cam_color: colour seen by camera rays (None = HDRI itself)."""
    w = bpy.data.worlds.new('World'); bpy.context.scene.world = w
    w.use_nodes = True
    nt = w.node_tree; N = nt.nodes; L = nt.links
    for n in list(N): N.remove(n)
    out = N.new('ShaderNodeOutputWorld')
    tc = N.new('ShaderNodeTexCoord'); mp = N.new('ShaderNodeMapping')
    mp.inputs['Rotation'].default_value = (0, 0, rot_z)
    env = N.new('ShaderNodeTexEnvironment')
    env.image = bpy.data.images.load(os.path.join(ASSETS, 'hdri', name + '_2k.hdr'), check_existing=True)
    L.new(tc.outputs['Generated'], mp.inputs['Vector']); L.new(mp.outputs['Vector'], env.inputs['Vector'])
    col = env.outputs['Color']
    if sat != 1.0:
        hs = N.new('ShaderNodeHueSaturation'); hs.inputs['Saturation'].default_value = sat
        L.new(col, hs.inputs['Color']); col = hs.outputs['Color']
    bg = N.new('ShaderNodeBackground'); bg.inputs['Strength'].default_value = strength
    L.new(col, bg.inputs['Color'])
    if cam_color is None:
        L.new(bg.outputs['Background'], out.inputs['Surface'])
    else:
        bg2 = N.new('ShaderNodeBackground'); bg2.inputs['Color'].default_value = (*cam_color, 1); bg2.inputs['Strength'].default_value = cam_strength
        lp = N.new('ShaderNodeLightPath'); mx = N.new('ShaderNodeMixShader')
        L.new(lp.outputs['Is Camera Ray'], mx.inputs['Fac'])
        L.new(bg.outputs['Background'], mx.inputs[1]); L.new(bg2.outputs['Background'], mx.inputs[2])
        L.new(mx.outputs['Shader'], out.inputs['Surface'])
    return w


def world_color(color, strength=1.0):
    w = bpy.data.worlds.new('World'); bpy.context.scene.world = w
    w.use_nodes = True
    bg = w.node_tree.nodes.get('Background')
    bg.inputs['Color'].default_value = (*color, 1); bg.inputs['Strength'].default_value = strength
    return w


def area_light(name, loc, target, size=(1, 1), power=100.0, color=(1, 1, 1), shape='RECTANGLE', spread=180, visible=False):
    ld = bpy.data.lights.new(name, 'AREA'); ld.energy = power; ld.color = color
    ld.shape = shape
    if shape in ('RECTANGLE', 'ELLIPSE'):
        ld.size, ld.size_y = size
    else:
        ld.size = size[0]
    ld.spread = math.radians(spread)
    ob = bpy.data.objects.new(name, ld); bpy.context.scene.collection.objects.link(ob)
    ob.location = loc; look_at(ob, target)
    ob.visible_camera = visible; ob.visible_glossy = True
    return ob


def sun_light(name, direction_euler, strength=3.0, angle=1.5, color=(1, 0.97, 0.92)):
    ld = bpy.data.lights.new(name, 'SUN'); ld.energy = strength; ld.angle = math.radians(angle); ld.color = color
    ob = bpy.data.objects.new(name, ld); bpy.context.scene.collection.objects.link(ob)
    ob.rotation_euler = direction_euler
    return ob


def look_at(ob, target, roll=0.0):
    d = Vector(target) - ob.location
    q = d.to_track_quat('-Z', 'Y')
    ob.rotation_euler = q.to_euler()
    if roll:
        ob.rotation_euler.rotate(Euler((0, 0, 0)))
        ob.matrix_world = ob.matrix_world @ Matrix.Rotation(roll, 4, 'Z')


def camera(loc, target, lens=50.0, fstop=None, focus=None, sensor=36.0, shift=(0, 0), ortho=None, roll=0.0, clip=(0.005, 100)):
    cd = bpy.data.cameras.new('Cam'); cd.lens = lens; cd.sensor_width = sensor; cd.sensor_fit = 'HORIZONTAL'
    cd.clip_start, cd.clip_end = clip
    cd.shift_x, cd.shift_y = shift
    if ortho:
        cd.type = 'ORTHO'; cd.ortho_scale = ortho
    ob = bpy.data.objects.new('Cam', cd); bpy.context.scene.collection.objects.link(ob)
    ob.location = loc; look_at(ob, target)
    if roll:
        ob.rotation_euler = (ob.matrix_world @ Matrix.Rotation(roll, 4, 'Z')).to_euler()
    bpy.context.scene.camera = ob
    if fstop:
        cd.dof.use_dof = True; cd.dof.aperture_fstop = fstop
        cd.dof.aperture_blades = 0
        if isinstance(focus, bpy.types.Object):
            cd.dof.focus_object = focus
        else:
            cd.dof.focus_distance = focus if focus else (Vector(target) - Vector(loc)).length
    return ob


# ============================================================== materials
def _nodes(m):
    m.use_nodes = True
    nt = m.node_tree
    for n in list(nt.nodes): nt.nodes.remove(n)
    out = nt.nodes.new('ShaderNodeOutputMaterial')
    return nt, nt.nodes, nt.links, out


def principled(N, **kw):
    p = N.new('ShaderNodeBsdfPrincipled')
    names = {'base': 'Base Color', 'metal': 'Metallic', 'rough': 'Roughness', 'ior': 'IOR', 'alpha': 'Alpha',
             'aniso': 'Anisotropic', 'aniso_rot': 'Anisotropic Rotation', 'trans': 'Transmission Weight',
             'coat': 'Coat Weight', 'coat_rough': 'Coat Roughness', 'spec': 'Specular IOR Level', 'sheen': 'Sheen Weight',
             'sss': 'Subsurface Weight', 'emit': 'Emission Color', 'emit_s': 'Emission Strength', 'spec_tint': 'Specular Tint'}
    for k, v in kw.items():
        key = names.get(k, k)
        if k == 'base' or k == 'emit' or k == 'spec_tint':
            v = (*v, 1) if len(v) == 3 else v
        p.inputs[key].default_value = v
    return p


def srgb(c):
    """sRGB 0-255 or hex -> linear tuple."""
    if isinstance(c, str):
        c = c.lstrip('#'); c = tuple(int(c[i:i + 2], 16) for i in (0, 2, 4))
    def f(v):
        v = v / 255.0
        return v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4
    return tuple(f(v) for v in c)


def _micro_bump(nt, N, L, p, scale=3000.0, strength=0.03, distance=0.0002):
    """Very fine bead-blast noise (anodised aluminium)."""
    tc = N.new('ShaderNodeTexCoord')
    nz = N.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = scale; nz.inputs['Detail'].default_value = 2.0
    L.new(tc.outputs['Object'], nz.inputs['Vector'])
    bp = N.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = strength; bp.inputs['Distance'].default_value = distance
    L.new(nz.outputs['Fac'], bp.inputs['Height']); L.new(bp.outputs['Normal'], p.inputs['Normal'])


def mat_alu(name, color, rough=0.32, aniso=0.25, bump=0.04):
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    p = principled(N, base=color, metal=1.0, rough=rough, aniso=aniso)
    tg = N.new('ShaderNodeTangent'); tg.direction_type = 'UV_MAP'
    try: tg.uv_map = 'UVMap'
    except Exception: pass
    L.new(tg.outputs['Tangent'], p.inputs['Tangent'])
    if bump and MICRO_BUMP: _micro_bump(nt, N, L, p, strength=bump)
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    return m


ALU = {
    'spaceblack': (srgb((52, 52, 55)), 0.36),
    'silver': (srgb((214, 215, 216)), 0.30),
    'deepblue': (srgb((44, 56, 84)), 0.34),
    'cosmic': (srgb((214, 112, 52)), 0.32),
}


def mat_paint(name, color, rough=0.5, spec=0.5, coat=0.0, sheen=0.0):
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    p = principled(N, base=color, rough=rough, spec=spec, coat=coat, sheen=sheen)
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    return m


def mat_black_glass(name='blackglass', rough=0.03, color=(0.004, 0.004, 0.005)):
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    p = principled(N, base=color, rough=rough, ior=1.5)
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    return m


def mat_screen(name, tex_name, strength=1.0, gloss_rough=0.035, ior=1.45, aov=True, path=None):
    """Emissive display under glass. tex alpha = lit display (written to AOV 'scr')."""
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    img = bpy.data.images.load(path or os.path.join(TEX, tex_name), check_existing=True)
    img.colorspace_settings.name = 'sRGB'
    img.alpha_mode = 'CHANNEL_PACKED'
    t = N.new('ShaderNodeTexImage'); t.image = img; t.interpolation = INTERP; t.extension = 'CLIP'
    uv = N.new('ShaderNodeUVMap'); uv.uv_map = 'UVMap'; L.new(uv.outputs['UV'], t.inputs['Vector'])
    m.cycles.emission_sampling = 'NONE'   # screens are not sampled as lights (big speed-up)
    em = N.new('ShaderNodeEmission'); em.inputs['Strength'].default_value = strength
    L.new(t.outputs['Color'], em.inputs['Color'])
    g = principled(N, base=(0.0, 0.0, 0.0), rough=gloss_rough, ior=ior)
    add = N.new('ShaderNodeAddShader')
    L.new(em.outputs['Emission'], add.inputs[0]); L.new(g.outputs['BSDF'], add.inputs[1])
    L.new(add.outputs['Shader'], out.inputs['Surface'])
    if aov:
        ao = N.new('ShaderNodeOutputAOV'); ao.aov_name = 'scr'
        L.new(t.outputs['Alpha'], ao.inputs['Value'])
    return m


def mat_image(name, path, rough=0.4, emission=0.0, aov=False, alpha_clip=True, spec=0.5, coat=0.0):
    """Printed / UI card face. With emission>0 the face is self-lit (like a screen) and colour-exact via AOV."""
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    img = bpy.data.images.load(path, check_existing=True); img.colorspace_settings.name = 'sRGB'
    t = N.new('ShaderNodeTexImage'); t.image = img; t.interpolation = INTERP; t.extension = 'CLIP'
    uv = N.new('ShaderNodeUVMap'); uv.uv_map = 'UVMap'; L.new(uv.outputs['UV'], t.inputs['Vector'])
    m.cycles.emission_sampling = 'NONE'
    if emission > 0:
        em = N.new('ShaderNodeEmission'); em.inputs['Strength'].default_value = emission
        L.new(t.outputs['Color'], em.inputs['Color'])
        g = principled(N, base=(0, 0, 0), rough=rough, spec=spec, coat=coat)
        add = N.new('ShaderNodeAddShader'); L.new(em.outputs['Emission'], add.inputs[0]); L.new(g.outputs['BSDF'], add.inputs[1])
        L.new(add.outputs['Shader'], out.inputs['Surface'])
    else:
        p = principled(N, rough=rough, spec=spec, coat=coat)
        L.new(t.outputs['Color'], p.inputs['Base Color'])
        L.new(t.outputs['Alpha'], p.inputs['Alpha'])
        L.new(p.outputs['BSDF'], out.inputs['Surface'])
    if aov:
        ao = N.new('ShaderNodeOutputAOV'); ao.aov_name = 'scr'; L.new(t.outputs['Alpha'], ao.inputs['Value'])
    return m


def mat_pbr(name, tex_dir, scale=1.0, tint=None, rough_mul=1.0, bump=0.4, sat=1.0, val=1.0, rot=0.0, box=False):
    """Poly Haven PBR texture set (diff / nor_gl / rough). scale in metres per texture tile."""
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    d = os.path.join(ASSETS, 'textures', tex_dir)
    fs = {f.split('_')[-2]: os.path.join(d, f) for f in os.listdir(d) if f.endswith('.jpg')}
    tc = N.new('ShaderNodeTexCoord'); mp = N.new('ShaderNodeMapping')
    mp.inputs['Scale'].default_value = (1 / scale, 1 / scale, 1 / scale)
    mp.inputs['Rotation'].default_value = (0, 0, rot)
    L.new(tc.outputs['Object'], mp.inputs['Vector'])
    p = principled(N)
    def tex(key, cs):
        t = N.new('ShaderNodeTexImage'); t.image = bpy.data.images.load(fs[key], check_existing=True)
        t.image.colorspace_settings.name = cs; L.new(mp.outputs['Vector'], t.inputs['Vector'])
        if box:
            t.projection = 'BOX'; t.projection_blend = 0.25
        return t
    dif = tex('diff', 'sRGB')
    col = dif.outputs['Color']
    if sat != 1.0 or val != 1.0:
        hs = N.new('ShaderNodeHueSaturation'); hs.inputs['Saturation'].default_value = sat; hs.inputs['Value'].default_value = val
        L.new(col, hs.inputs['Color']); col = hs.outputs['Color']
    if tint:
        mx = N.new('ShaderNodeMix'); mx.data_type = 'RGBA'; mx.blend_type = 'MULTIPLY'; mx.inputs['Factor'].default_value = 1.0
        L.new(col, mx.inputs[6]); mx.inputs[7].default_value = (*tint, 1); col = mx.outputs[2]
    L.new(col, p.inputs['Base Color'])
    if 'rough' in fs:
        r = tex('rough', 'Non-Color')
        mt = N.new('ShaderNodeMath'); mt.operation = 'MULTIPLY'; mt.inputs[1].default_value = rough_mul
        L.new(r.outputs['Color'], mt.inputs[0]); L.new(mt.outputs['Value'], p.inputs['Roughness'])
    if 'gl' in fs or 'nor' in fs:
        key = 'gl' if 'gl' in fs else 'nor'
        n = tex(key, 'Non-Color')
        nm = N.new('ShaderNodeNormalMap'); nm.inputs['Strength'].default_value = bump
        L.new(n.outputs['Color'], nm.inputs['Color']); L.new(nm.outputs['Normal'], p.inputs['Normal'])
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    return m


def mat_keys(name, legend_path):
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    img = bpy.data.images.load(legend_path, check_existing=True)
    t = N.new('ShaderNodeTexImage'); t.image = img; t.interpolation = 'Linear'; t.extension = 'CLIP'
    uv = N.new('ShaderNodeUVMap'); uv.uv_map = 'UVMap'; L.new(uv.outputs['UV'], t.inputs['Vector'])
    p = principled(N, rough=0.62, spec=0.32)
    L.new(t.outputs['Color'], p.inputs['Base Color'])
    _micro_bump(nt, N, L, p, scale=5000, strength=0.03)
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    return m


def mat_grille(name, base_color, rough=0.35, pitch=0.00085, hole=0.00026):
    """Aluminium with a regular grid of tiny dark speaker holes (procedural)."""
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    tc = N.new('ShaderNodeTexCoord')
    sep = N.new('ShaderNodeSeparateXYZ'); L.new(tc.outputs['Object'], sep.inputs['Vector'])
    def wrap(inp):
        a = N.new('ShaderNodeMath'); a.operation = 'WRAP'; a.inputs[1].default_value = -pitch / 2; a.inputs[2].default_value = pitch / 2
        L.new(inp, a.inputs[0]); return a.outputs[0]
    cmb = N.new('ShaderNodeCombineXYZ')
    L.new(wrap(sep.outputs['X']), cmb.inputs['X']); L.new(wrap(sep.outputs['Y']), cmb.inputs['Y'])
    ln = N.new('ShaderNodeVectorMath'); ln.operation = 'LENGTH'; L.new(cmb.outputs['Vector'], ln.inputs[0])
    st = N.new('ShaderNodeMapRange'); st.inputs['From Min'].default_value = hole * 0.75; st.inputs['From Max'].default_value = hole
    L.new(ln.outputs['Value'], st.inputs['Value'])
    p = principled(N, base=base_color, metal=1.0, rough=rough)
    hole_m = principled(N, base=(0.002, 0.002, 0.002), rough=0.8)
    mx = N.new('ShaderNodeMixShader'); L.new(st.outputs['Result'], mx.inputs['Fac'])
    L.new(hole_m.outputs['BSDF'], mx.inputs[1]); L.new(p.outputs['BSDF'], mx.inputs[2])
    L.new(mx.outputs['Shader'], out.inputs['Surface'])
    return m


def mat_glass(name, tint=(0.80, 0.93, 0.88), density=18.0, rough=0.0, ior=1.52, frost_mask=None, frost_rough=0.35):
    """Float glass: clear faces, green edges (volume absorption). frost_mask: image path, white = etched."""
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    g = principled(N, base=(1, 1, 1), rough=rough, ior=ior, trans=1.0)
    if frost_mask:
        img = bpy.data.images.load(frost_mask, check_existing=True); img.colorspace_settings.name = 'Non-Color'
        t = N.new('ShaderNodeTexImage'); t.image = img; t.extension = 'CLIP'
        uv = N.new('ShaderNodeUVMap'); uv.uv_map = 'UVMap'; L.new(uv.outputs['UV'], t.inputs['Vector'])
        mr = N.new('ShaderNodeMapRange'); mr.inputs['To Min'].default_value = rough; mr.inputs['To Max'].default_value = frost_rough
        L.new(t.outputs['Color'], mr.inputs['Value']); L.new(mr.outputs['Result'], g.inputs['Roughness'])
    va = N.new('ShaderNodeVolumeAbsorption'); va.inputs['Color'].default_value = (*tint, 1); va.inputs['Density'].default_value = density
    L.new(g.outputs['BSDF'], out.inputs['Surface']); L.new(va.outputs['Volume'], out.inputs['Volume'])
    return m


def mat_backdrop_gradient(name, c_top, c_bottom, axis='Z', lo=0.0, hi=1.0, rough=0.9):
    """Diffuse backdrop whose albedo blends from c_bottom to c_top along an object axis (metres)."""
    m = bpy.data.materials.new(name); nt, N, L, out = _nodes(m)
    tc = N.new('ShaderNodeTexCoord'); sep = N.new('ShaderNodeSeparateXYZ'); L.new(tc.outputs['Object'], sep.inputs['Vector'])
    mr = N.new('ShaderNodeMapRange'); mr.inputs['From Min'].default_value = lo; mr.inputs['From Max'].default_value = hi
    mr.interpolation_type = 'SMOOTHSTEP'
    L.new(sep.outputs[axis], mr.inputs['Value'])
    mx = N.new('ShaderNodeMix'); mx.data_type = 'RGBA'
    L.new(mr.outputs['Result'], mx.inputs['Factor']); mx.inputs[6].default_value = (*c_bottom, 1); mx.inputs[7].default_value = (*c_top, 1)
    p = principled(N, rough=rough, spec=0.3); L.new(mx.outputs[2], p.inputs['Base Color'])
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    return m


# ============================================================== geometry
def _link(ob, coll=None):
    (coll or bpy.context.scene.collection).objects.link(ob)
    return ob


def round_profile(r, z0, up=True, inset0=0.0, n=6, start='side'):
    """Quarter-circle profile points (inset, z). start='side': begins at the vertical side (inset0) and curves to
    the cap (inset0 + r); up: curve goes towards +z."""
    pts = []
    for i in range(n + 1):
        a = (math.pi / 2) * i / n
        inset = inset0 + r * (1 - math.cos(a))
        dz = r * math.sin(a)
        pts.append((inset, z0 + dz if up else z0 - dz))
    return pts


def slab(name, w, h, r, profile, n=18, continuous=True, mats=None, cap_mats=(1, 2), min_r=0.05, rings_only=False,
         uv_rect=None, coll=None, sharp_angle=35.0):
    """Extruded rounded rectangle with a side profile. All lengths in mm. profile: list of (inset_mm, z_mm),
    bottom -> top. cap_mats: material index for (bottom cap, top cap); side faces use index 0.
    UVMap = planar XY over uv_rect (w,h) centred (default: the outline)."""
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    rings = []
    rr = r if isinstance(r, (tuple, list)) else (r, r, r, r)
    for inset, z in profile:
        rad = tuple(max(c - inset, min_r) if c > 0 else 0.0 for c in rr)
        pts = rrect(w - 2 * inset, h - 2 * inset, rad, n=n, continuous=continuous)
        rings.append([bm.verts.new((x * K, y * K, z * K)) for x, y in pts])
    cnt = len(rings[0])
    assert all(len(rg) == cnt for rg in rings), 'ring vertex counts differ'
    side = []
    for a, b in zip(rings[:-1], rings[1:]):
        for i in range(cnt):
            j = (i + 1) % cnt
            f = bm.faces.new((a[i], a[j], b[j], b[i])); f.material_index = 0; side.append(f)
    caps = []
    if not rings_only:
        fb = bm.faces.new(list(reversed(rings[0]))); fb.material_index = cap_mats[0]; caps.append(fb)
        ft = bm.faces.new(rings[-1]); ft.material_index = cap_mats[1]; caps.append(ft)
    uw, uh = uv_rect or (w, h)
    uvl = bm.loops.layers.uv.new('UVMap')
    for f in bm.faces:
        for lp in f.loops:
            co = lp.vert.co
            lp[uvl].uv = (co.x / (uw * K) + 0.5, co.y / (uh * K) + 0.5)
    bm.normal_update()
    bm.to_mesh(me); bm.free()
    me.shade_smooth()
    me.set_sharp_from_angle(angle=math.radians(sharp_angle))
    # caps are flat-shaded (keeps big glass faces perfectly flat, and splits normals at the cap boundary)
    if not rings_only:
        attr = me.attributes.get('sharp_face') or me.attributes.new('sharp_face', 'BOOLEAN', 'FACE')
        nf = len(me.polygons)
        attr.data[nf - 2].value = True; attr.data[nf - 1].value = True
    ob = bpy.data.objects.new(name, me)
    for mt in (mats or []):
        me.materials.append(mt)
    return _link(ob, coll)


def cylinder(name, radius, depth, segs=96, mat=None, bevel=0.0, z0=0.0, coll=None, cap_mat=None):
    """Cylinder along +Z from z0 to z0+depth (mm), optional rounded top edge."""
    prof = [(0.0, z0)]
    if bevel > 0:
        prof += round_profile(bevel, z0 + depth - bevel, up=True, n=4)
    else:
        prof += [(0.0, z0 + depth)]
    mats = [mat, mat, cap_mat or mat]
    ob = slab(name, 2 * radius, 2 * radius, radius, prof, n=segs // 4, continuous=False, mats=mats, coll=coll)
    return ob


def parent(child, par, keep=True):
    child.parent = par
    if keep:
        child.matrix_parent_inverse = par.matrix_world.inverted()


def empty(name, loc=(0, 0, 0), rot=(0, 0, 0), coll=None):
    e = bpy.data.objects.new(name, None); e.location = loc; e.rotation_euler = rot
    return _link(e, coll)


def plane(name, w, h, mat=None, loc=(0, 0, 0), rot=(0, 0, 0), coll=None):
    """w,h in metres."""
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    vs = [bm.verts.new((x * w / 2, y * h / 2, 0)) for x, y in [(-1, -1), (1, -1), (1, 1), (-1, 1)]]
    f = bm.faces.new(vs)
    uvl = bm.loops.layers.uv.new('UVMap')
    for lp in f.loops: lp[uvl].uv = (lp.vert.co.x / w + 0.5, lp.vert.co.y / h + 0.5)
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(name, me)
    if mat: me.materials.append(mat)
    ob.location = loc; ob.rotation_euler = rot
    return _link(ob, coll)


def sweep(name, width=6.0, depth=4.0, height=3.0, radius=0.8, mat=None, loc=(0, 0, 0), rot_z=0.0, segs=24):
    """Photo-studio cyclorama: floor (towards -y) curving up into a wall at +y. metres."""
    me = bpy.data.meshes.new(name); bm = bmesh.new()
    prof = [(-depth, 0.0), (0.0, 0.0)]
    for i in range(1, segs + 1):
        a = (math.pi / 2) * i / segs
        prof.append((radius * math.sin(a), radius * (1 - math.cos(a))))
    prof.append((radius, height))
    rows = []
    for x in (-width / 2, width / 2):
        rows.append([bm.verts.new((x, y, z)) for y, z in prof])
    for i in range(len(prof) - 1):
        bm.faces.new((rows[0][i], rows[1][i], rows[1][i + 1], rows[0][i + 1]))
    uvl = bm.loops.layers.uv.new('UVMap')
    for f in bm.faces:
        for lp in f.loops: lp[uvl].uv = (lp.vert.co.x, lp.vert.co.y + lp.vert.co.z)
    bm.to_mesh(me); bm.free(); me.shade_smooth()
    ob = bpy.data.objects.new(name, me)
    if mat: me.materials.append(mat)
    ob.location = loc; ob.rotation_euler = (0, 0, rot_z)
    return _link(ob)


def box(name, size, mat=None, loc=(0, 0, 0), rot=(0, 0, 0), bevel=0.0):
    """size (x,y,z) in metres, origin at bottom centre."""
    sx, sy, sz = size
    prof = [(0, 0)] + (round_profile(bevel * 1000, sz * 1000 - bevel * 1000, up=True, n=3) if bevel else [(0, sz * 1000)])
    ob = slab(name, sx * 1000, sy * 1000, bevel * 1000 if bevel else 0.0, prof, n=3, continuous=False, mats=[mat, mat, mat] if mat else None)
    ob.location = loc; ob.rotation_euler = rot
    return ob


# ============================================================== devices
def _mats_cache():
    c = bpy.context.scene.get('_r3d_mats')
    return c


_MC = {}


def M(key, factory):
    ok = False
    if key in _MC:
        try: ok = _MC[key].name in bpy.data.materials
        except ReferenceError: ok = False
    if not ok:
        _MC[key] = factory()
    return _MC[key]


def iphone17pro(name='iPhone', screen='iphone-product.png', finish='deepblue', screen_strength=1.0, back_detail=True):
    """iPhone 17 Pro. Origin: centre of the back plane; screen faces +Z, top of phone +Y."""
    S = IPHONE17PRO
    W, H, D, r = S['W'], S['H'], S['D'], S['r']
    col, rough = ALU[finish]
    alu = M('alu_' + finish, lambda: mat_alu('alu_' + finish, col, rough))
    alu_shiny = M('alu_ch_' + finish, lambda: mat_alu('alu_ch_' + finish, col, max(0.16, rough - 0.16), aniso=0.0))
    bg = M('blackglass', lambda: mat_black_glass())
    root = empty(name)
    gt = 0.55
    zt = D - gt
    rb, rf = 1.7, 0.9
    prof = round_profile(rb, rb, up=False, inset0=0.0, n=7)[::-1]  # bottom (back) rounding: inset rb at z=0 -> 0 at z=rb
    prof = [(p[0], p[1]) for p in prof]
    prof += [(0.0, zt - rf)] + round_profile(rf, zt - rf, up=True, inset0=0.0, n=5)[1:]
    body = slab(name + '_body', W, H, r, prof, mats=[alu, alu, alu], n=22); parent(body, root)
    # front glass (screen)
    gi = S['glass_inset']
    scr = mat_screen(name + '_scr', screen, strength=screen_strength)
    gp = [(0.0, zt - 0.25), (0.0, D - 0.32)] + round_profile(0.32, D - 0.32, up=True, n=4)[1:]
    glass = slab(name + '_glass', W - 2 * gi, H - 2 * gi, r - gi, gp, mats=[bg, bg, scr], n=22); parent(glass, root)
    # buttons (left: action, vol+, vol-; right: side, camera control)
    def btn(nm, side, y_top, length, depth=0.55, thick=2.6, mat=alu):
        ob = slab(nm, length, thick, thick / 2 - 0.01, [(0, 0)] + round_profile(0.35, depth - 0.35, up=True, n=3), continuous=False, mats=[mat, mat, mat], n=6)
        X = Vector((0, 1, 0)); Y = Vector((0, 0, side)); Z = X.cross(Y)
        ob.rotation_euler = Matrix((X, Y, Z)).transposed().to_euler()
        ob.location = (side * (W / 2 - 0.2) * K, (H / 2 - y_top - length / 2) * K, D / 2 * K)
        parent(ob, root)
    btn(name + '_action', -1, 27.0, 7.5)
    btn(name + '_volup', -1, 40.0, 13.5)
    btn(name + '_voldn', -1, 58.0, 13.5)
    btn(name + '_side', 1, 39.0, 20.0)
    cc = M('sapphire', lambda: mat_black_glass('sapphire', rough=0.08, color=(0.01, 0.012, 0.016)))
    btn(name + '_camctl', 1, 88.0, 17.0, depth=0.15, mat=cc)
    if back_detail:
        _iphone_back(name, root, alu, alu_shiny, W, H, r, rb)
    _iphone_bottom(name, root, W, H, D)
    return root


def _iphone_back(name, root, alu, alu_shiny, W, H, r, rb):
    Hp, tp = 37.5, 1.75  # plateau height (from the top) and how far it rises from the back
    # plateau: same side outline as the body over its top part, square ends at the bottom, rounded back edge
    rp = 1.2
    prof = round_profile(rp, -tp + rp, up=False, inset0=0.0, n=7)[::-1] + [(0.0, rb)]
    pl = slab(name + '_plateau', W, Hp, (r, r, 0.0, 0.0), prof, mats=[alu, alu, alu], n=22, min_r=0.01)
    pl.location = (0, (H / 2 - Hp / 2) * K, 0)
    parent(pl, root)
    zb = -tp  # plateau back surface (z)
    ring = M('lensring', lambda: mat_alu('lensring', srgb((70, 74, 86)), 0.22, aniso=0.0, bump=0.0))
    sapph = M('lens', lambda: _mat_lens())
    flash = M('flash', lambda: mat_paint('flash', srgb((236, 226, 200)), rough=0.15, coat=1.0))
    lidar = M('lidar', lambda: mat_black_glass('lidar', rough=0.12, color=(0.01, 0.01, 0.012)))
    cx0 = -W / 2 + 15.0
    cy0 = H / 2 - Hp / 2 - 0.5
    lenses = [(cx0, cy0 + 9.4), (cx0, cy0 - 9.4), (cx0 + 13.6, cy0)]
    for i, (x, y) in enumerate(lenses):
        rg = cylinder(f'{name}_ring{i}', 7.1, 1.25, mat=ring, bevel=0.45, z0=0)
        rg.rotation_euler = (math.radians(180), 0, 0); rg.location = (-x * K, y * K, (zb + 0.01) * K); parent(rg, root)
        ln = cylinder(f'{name}_lens{i}', 5.9, 1.27, mat=sapph, z0=0)
        ln.rotation_euler = (math.radians(180), 0, 0); ln.location = (-x * K, y * K, (zb + 0.01) * K); parent(ln, root)
    for nm, (x, y), mt, rad in [('flash', (cx0 + 28.5, cy0 + 9.0), flash, 3.0), ('lidar', (cx0 + 28.5, cy0 - 9.0), lidar, 3.0), ('mic', (cx0 + 23.0, cy0 + 2.0), lidar, 0.55)]:
        c = cylinder(f'{name}_{nm}', rad, 0.06, mat=mt, z0=0)
        c.rotation_euler = (math.radians(180), 0, 0); c.location = (-x * K, y * K, (zb + 0.01) * K); parent(c, root)
    # glass (MagSafe) window on the lower back
    _bc = tuple(alu.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value[:3])
    _br = alu.node_tree.nodes['Principled BSDF'].inputs['Roughness'].default_value
    gl = M('backglass_' + alu.name, lambda: mat_alu('backglass_' + alu.name, tuple(min(1.0, c * 1.12) for c in _bc), _br + 0.04, aniso=0.0, bump=0.0))
    gw, gh = W - 15.0, H - Hp - 20.0
    g = slab(name + '_backglass', gw, gh, 6.0, [(0, 0), (0, 0.04)], mats=[gl, gl, gl], n=12)
    g.rotation_euler = (0, math.radians(180), 0); g.location = (0, (-H / 2 + 8.0 + gh / 2) * K, 0.005 * K); parent(g, root)


def _mat_lens():
    m = bpy.data.materials.new('lens'); nt, N, L, out = _nodes(m)
    # dark sapphire with a deep blue-violet coated lens inside (radial rings)
    tc = N.new('ShaderNodeTexCoord'); ln = N.new('ShaderNodeVectorMath'); ln.operation = 'LENGTH'
    sep = N.new('ShaderNodeSeparateXYZ'); L.new(tc.outputs['Object'], sep.inputs['Vector'])
    cmb = N.new('ShaderNodeCombineXYZ'); L.new(sep.outputs['X'], cmb.inputs['X']); L.new(sep.outputs['Y'], cmb.inputs['Y'])
    L.new(cmb.outputs['Vector'], ln.inputs[0])
    ramp = N.new('ShaderNodeValToRGB'); L.new(ln.outputs['Value'], ramp.inputs['Fac'])
    cr = ramp.color_ramp; cr.interpolation = 'EASE'
    cr.elements[0].position = 0.0; cr.elements[0].color = (0.006, 0.006, 0.02, 1)
    cr.elements[1].position = 0.0059; cr.elements[1].color = (0.001, 0.001, 0.001, 1)
    e = cr.elements.new(0.0030); e.color = (0.03, 0.02, 0.08, 1)
    e = cr.elements.new(0.0042); e.color = (0.002, 0.002, 0.004, 1)
    p = principled(N, rough=0.04, coat=1.0, coat_rough=0.02)
    L.new(ramp.outputs['Color'], p.inputs['Base Color'])
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    return m


def _iphone_bottom(name, root, W, H, D):
    dark = M('port', lambda: mat_paint('port', (0.004, 0.004, 0.004), rough=0.7))
    # USB-C opening + speaker / mic holes on the bottom edge
    usb = slab(name + '_usb', 8.6, 3.0, 1.49, [(0, 0), (0, 0.05)], continuous=False, mats=[dark, dark, dark], n=8)
    usb.rotation_euler = (math.radians(90), 0, 0); usb.location = (0, -H / 2 * K - 0.00002, D / 2 * K); parent(usb, root)
    for side in (-1, 1):
        for i in range(5 if side > 0 else 3):
            h = cylinder(f'{name}_hole{side}{i}', 0.55, 0.05, segs=24, mat=dark)
            h.rotation_euler = (math.radians(90), 0, 0)
            h.location = (side * (9.5 + i * 2.1) * K, -H / 2 * K - 0.00002, D / 2 * K); parent(h, root)


# ------------------------------------------------------------------ MacBook Pro 14
KEY_ROWS = [
    [('esc', 1.5)] + [(f'F{i}', 1.0) for i in range(1, 13)] + [('', 1.0)],
    [('~\n`', 1), ('!\n1', 1), ('@\n2', 1), ('#\n3', 1), ('$\n4', 1), ('%\n5', 1), ('^\n6', 1), ('&\n7', 1), ('*\n8', 1), ('(\n9', 1), (')\n0', 1), ('_\n-', 1), ('+\n=', 1), ('delete', 1.5)],
    [('tab', 1.5)] + [(c, 1) for c in 'QWERTYUIOP'] + [('{\n[', 1), ('}\n]', 1), ('|\n\\', 1)],
    [('caps lock', 1.8)] + [(c, 1) for c in 'ASDFGHJKL'] + [(':\n;', 1), ('"\n\'', 1), ('return', 1.7)],
    [('shift', 2.3)] + [(c, 1) for c in 'ZXCVBNM'] + [('<\n,', 1), ('>\n.', 1), ('?\n/', 1), ('shift ', 2.2)],
    [('fn', 1), ('control', 1), ('option', 1), ('⌘\ncommand', 1.25), ('', 5.0), ('⌘\ncommand ', 1.25), ('option ', 1), ('◀', 1), ('▲▼', 1), ('▶', 1)],
]


def keyboard_legend(path, pitch=19.0, gap=2.9, px_per_mm=14):
    """Draw key legends (white on near-black) for KEY_ROWS; returns (w_mm, h_mm)."""
    from PIL import Image, ImageDraw, ImageFont
    wu = sum(u for _, u in KEY_ROWS[0])
    Wmm, Hmm = wu * pitch, len(KEY_ROWS) * pitch
    s = px_per_mm
    img = Image.new('RGB', (int(Wmm * s), int(Hmm * s)), (9, 9, 10))
    d = ImageDraw.Draw(img)
    F = '/usr/share/fonts/opentype/inter/Inter-%s.otf'
    f_big = ImageFont.truetype(F % 'Regular', int(4.1 * s)); f_sm = ImageFont.truetype(F % 'Regular', int(2.6 * s))
    f_sym = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', int(3.0 * s))
    col = (218, 218, 220)
    for ri, row in enumerate(KEY_ROWS):
        x = 0.0; y0 = ri * pitch
        for lab, u in row:
            kw = u * pitch - gap; kh = pitch - gap
            x0 = x + gap / 2; yk = y0 + gap / 2
            cx, cy = (x0 + kw / 2) * s, (yk + kh / 2) * s
            lab = lab.strip() if lab not in ('shift ', 'option ', '⌘\ncommand ') else lab.strip()
            if not lab:
                pass
            elif len(lab) == 1 and lab.isalpha():
                d.text((cx, cy), lab, font=f_big, fill=col, anchor='mm')
            elif '\n' in lab and lab.split('\n')[1] in ('command',):
                d.text((x0 * s + kw * s - 1.6 * s, yk * s + 1.4 * s), '⌘', font=f_sym, fill=col, anchor='ra')
                d.text((x0 * s + kw * s - 1.6 * s, (yk + kh) * s - 1.6 * s), 'command', font=f_sm, fill=col, anchor='rd')
            elif '\n' in lab:
                a, b = lab.split('\n')
                d.text((cx, cy - 2.6 * s), a, font=f_sm, fill=col, anchor='mm'); d.text((cx, cy + 2.6 * s), b, font=f_sm, fill=col, anchor='mm')
            elif lab in ('◀', '▶', '▲▼'):
                if lab == '▲▼':
                    d.text((cx, cy - kh * s / 4), '▲', font=f_sm, fill=col, anchor='mm'); d.text((cx, cy + kh * s / 4), '▼', font=f_sm, fill=col, anchor='mm')
                else:
                    d.text((cx, cy + kh * s / 4), lab, font=f_sm, fill=col, anchor='mm')
            elif lab.startswith('F') and lab[1:].isdigit():
                d.text((cx, cy + 2.6 * s), lab, font=f_sm, fill=col, anchor='mm')
            elif lab in ('tab', 'caps lock', 'shift', 'control', 'fn'):
                d.text((x0 * s + 1.6 * s, (yk + kh) * s - 1.6 * s), lab, font=f_sm, fill=col, anchor='ld')
            elif lab in ('delete', 'return', 'option'):
                d.text((x0 * s + kw * s - 1.6 * s, (yk + kh) * s - 1.6 * s), lab, font=f_sm, fill=col, anchor='rd')
            else:
                d.text((x0 * s + 1.6 * s, (yk + kh) * s - 1.6 * s), lab, font=f_sm, fill=col, anchor='ld')
            x += u * pitch
    img.save(path)
    return Wmm, Hmm


def macbook_pro14(name='MBP', screen='mbp-home.png', finish='spaceblack', open_deg=112.0, screen_strength=1.0):
    """MacBook Pro 14". Origin: centre of the base footprint on the desk; keyboard faces +Z, hinge at +Y,
    user sits at -Y."""
    S = MBP14
    W, Dp, bh, lt, LL = S['W'], S['Dp'], S['base_h'], S['lid_t'], S['lid_L']
    col, rough = ALU[finish]
    alu = M('alu_' + finish, lambda: mat_alu('alu_' + finish, col, rough))
    blk = M('alu_black', lambda: mat_alu('alu_black', srgb((14, 14, 15)), 0.38, aniso=0.0))
    bg = M('blackglass', lambda: mat_black_glass())
    rub = M('rubber', lambda: mat_paint('rubber', (0.01, 0.01, 0.01), rough=0.75))
    root = empty(name)
    rc = 9.0
    # base: rounded bottom edge (r 2.6), vertical side, small top chamfer (0.6)
    prof = [(2.6 * (1 - math.sin(a)), 2.6 * (1 - math.cos(a))) for a in [math.pi / 2 * i / 7 for i in range(7, -1, -1)]]
    prof = [(2.6 - 2.6 * math.cos(a) * 0 + 0, 0) for a in []] or [(2.6 - 2.6 * math.sin(math.pi / 2 * i / 7), 2.6 - 2.6 * math.cos(math.pi / 2 * i / 7)) for i in range(0, 8)]
    prof = [(2.6 - 2.6 * math.sin(math.pi / 2 * i / 7), 2.6 - 2.6 * math.cos(math.pi / 2 * i / 7)) for i in range(7, -1, -1)]
    prof = sorted(prof, key=lambda p: p[1])
    prof += [(0.0, bh - 0.6)] + round_profile(0.6, bh - 0.6, up=True, n=3)[1:]
    base = slab(name + '_base', W, Dp, rc, prof, mats=[alu, alu, alu], n=20); parent(base, root)
    # feet
    for sx in (-1, 1):
        for sy in (-1, 1):
            f = cylinder(f'{name}_foot', 6.5, 0.9, mat=rub, bevel=0.4, segs=48)
            f.rotation_euler = (math.radians(180), 0, 0); f.location = (sx * (W / 2 - 22) * K, sy * (Dp / 2 - 22) * K, 0.02 * K); parent(f, root)
    root.location.z = 0.9 * K
    # keyboard well + keys
    pitch, gap = 19.0, 2.9
    leg = os.path.join(TEX, 'keyboard-legend.png')
    if not os.path.exists(leg):
        keyboard_legend(leg, pitch, gap)
    Kw, Kh = sum(u for _, u in KEY_ROWS[0]) * pitch, len(KEY_ROWS) * pitch
    ky0 = Dp / 2 - 13.5 - Kh / 2   # keyboard centre y (top row 13.5 mm from hinge side)
    well = slab(name + '_well', Kw + 3.0, Kh + 3.0, 4.0, [(0, bh - 0.4), (0, bh + 0.01)], mats=[blk, blk, blk], n=6, continuous=False)
    well.location.y = ky0 * K; parent(well, root)
    keys_mat = M('keys', lambda: mat_keys('keys', leg))
    _keys_mesh(name, root, keys_mat, pitch, gap, ky0, bh + 0.01, Kw, Kh)
    # trackpad
    tw, th = 140.0, 87.0
    tp_mat = M('trackpad_' + finish, lambda: mat_alu('trackpad_' + finish, col, max(0.2, rough - 0.08), aniso=0.0, bump=0.0))
    gap_m = M('tpgap', lambda: mat_paint('tpgap', (0.02, 0.02, 0.02), rough=0.6))
    g = slab(name + '_tpgap', tw + 0.6, th + 0.6, 5.3, [(0, bh - 0.3), (0, bh + 0.005)], mats=[gap_m, gap_m, gap_m], n=10)
    g.location.y = (-Dp / 2 + 9.0 + th / 2) * K; parent(g, root)
    t = slab(name + '_trackpad', tw, th, 5.0, [(0, bh - 0.2), (0.0, bh - 0.02)] + round_profile(0.03, bh - 0.02, up=True, n=2)[1:], mats=[tp_mat, tp_mat, tp_mat], n=10)
    t.location.y = (-Dp / 2 + 9.0 + th / 2) * K; parent(t, root)
    # speaker grilles beside the keyboard
    gr = M('grille_' + finish, lambda: mat_grille('grille_' + finish, col, rough))
    for sx in (-1, 1):
        gx = sx * (Kw / 2 + (W / 2 - Kw / 2) / 2 + 0.4)
        p = slab(f'{name}_grille{sx}', 11.0, Kh + 2.0, 1.0, [(0, bh - 0.1), (0, bh + 0.004)], mats=[gr, gr, gr], n=4, continuous=False)
        p.location = (gx * K, ky0 * K, 0); parent(p, root)
    # side ports (dark slots)
    dark = M('port', lambda: mat_paint('port', (0.004, 0.004, 0.004), rough=0.7))
    for sx, items in ((-1, [(-Dp / 2 + 38, 11.0, 2.6), (-Dp / 2 + 58, 8.6, 3.0), (-Dp / 2 + 72, 8.6, 3.0), (Dp / 2 - 30, 6.5, 6.5)]),
                      (1, [(-Dp / 2 + 40, 15.0, 4.2), (-Dp / 2 + 60, 8.6, 3.0), (-Dp / 2 + 82, 25.0, 2.2)])):
        for (y, l, hh) in items:
            s = slab(f'{name}_port', l, hh, min(hh / 2 - 0.01, 1.4), [(0, 0), (0, 0.06)], continuous=False, mats=[dark, dark, dark], n=6)
            X = Vector((0, 1, 0)); Y = Vector((0, 0, sx)); s.rotation_euler = Matrix((X, Y, X.cross(Y))).transposed().to_euler()
            s.location = (sx * W / 2 * K, y * K, (bh * 0.46) * K); parent(s, root)
    # hinge (black) + lid
    hy, hz = Dp / 2 - 4.2, bh - 1.6
    hinge = cylinder(name + '_hinge', 4.0, W - 70.0, mat=blk, bevel=1.0, z0=-(W - 70.0) / 2)
    hinge.rotation_euler = (0, math.radians(90), 0); hinge.location = (0, hy * K, hz * K); parent(hinge, root)
    lid = empty(name + '_lid'); parent(lid, root, keep=False)
    lid.location = (0, hy * K, hz * K)
    lid.rotation_euler = (math.pi - math.radians(open_deg), 0, 0)
    # lid shell in lid space: extends along +Y from the hinge, inner face at z=+0 .. outer at z=-lt
    oy = 4.4  # hinge axis to lid edge offset
    lprof = [(1.6 - 1.6 * math.cos(a), -lt + 1.6 - 1.6 * math.sin(a)) for a in [math.pi / 2 * i / 5 for i in range(5, -1, -1)]]
    lprof = sorted(lprof, key=lambda p: p[1]) + [(0.0, -0.6), (0.25, -0.15)]
    shell = slab(name + '_lidshell', W, LL, rc, lprof, mats=[alu, alu, alu], n=20)
    shell.location = (0, (LL / 2 - oy) * K, 1.9 * K); parent(shell, lid, keep=False)
    scr = mat_screen(name + '_scr', screen, strength=screen_strength)
    gi = 0.6
    gl = slab(name + '_lidglass', W - 2 * gi, LL - 2 * gi, rc - gi, [(0, -0.4), (0.0, -0.06)] + round_profile(0.06, -0.06, up=True, n=2)[1:], mats=[bg, bg, scr], n=20)
    gl.location = (0, (LL / 2 - oy) * K, 1.9 * K); parent(gl, lid, keep=False)
    return root


def _keys_mesh(name, root, mat, pitch, gap, ky0, z0, Kw, Kh):
    """All keycaps in one mesh; UVs = planar over the keyboard rect (legend texture)."""
    me = bpy.data.meshes.new(name + '_keys'); bm = bmesh.new()
    uvl = bm.loops.layers.uv.new('UVMap')
    kz = 0.75  # key height above the well
    rk = 1.9
    for ri, row in enumerate(KEY_ROWS):
        x = -Kw / 2
        yc_row = ky0 + Kh / 2 - (ri + 0.5) * pitch
        for lab, u in row:
            kw = u * pitch - gap; kh = pitch - gap
            xc = x + u * pitch / 2
            parts = [(yc_row, kh)]
            if lab == '▲▼':
                parts = [(yc_row + pitch / 4, kh / 2 - 0.4), (yc_row - pitch / 4, kh / 2 - 0.4)]
            elif lab in ('◀', '▶'):
                parts = [(yc_row - pitch / 4, kh / 2 - 0.4)]
            for (yc, hh) in parts:
                prof = [(0, z0), (0, z0 + kz - 0.3)] + round_profile(0.3, z0 + kz - 0.3, up=True, n=3)[1:]
                rings = []
                for inset, z in prof:
                    pts = rrect(kw - 2 * inset, hh - 2 * inset, max(rk - inset, 0.2), n=4, continuous=False)
                    rings.append([bm.verts.new(((xc + px) * K, (yc + py) * K, z * K)) for px, py in pts])
                cnt = len(rings[0])
                for a, b in zip(rings[:-1], rings[1:]):
                    for i in range(cnt):
                        j = (i + 1) % cnt; bm.faces.new((a[i], a[j], b[j], b[i]))
                bm.faces.new(rings[-1])
            x += u * pitch
    for f in bm.faces:
        for lp in f.loops:
            co = lp.vert.co
            lp[uvl].uv = (co.x / (Kw * K) + 0.5, (co.y - ky0 * K) / (Kh * K) + 0.5)
    bm.to_mesh(me); bm.free()
    me.shade_smooth(); me.set_sharp_from_angle(angle=math.radians(40))
    me.materials.append(mat)
    ob = bpy.data.objects.new(name + '_keys', me); _link(ob); parent(ob, root, keep=False)
    return ob


# ------------------------------------------------------------------ iPad Pro 13 + Pencil Pro
def ipad_pro13(name='iPad', screen='ipad-home.png', finish='spaceblack', screen_strength=1.0, back=True):
    """iPad Pro 13" (landscape). Origin: centre of the back plane; screen +Z, long edge along X."""
    S = IPADPRO13
    W, H, D, r = S['W'], S['H'], S['D'], S['r']
    col, rough = ALU[finish]
    alu = M('alu_' + finish, lambda: mat_alu('alu_' + finish, col, rough))
    bg = M('blackglass', lambda: mat_black_glass())
    root = empty(name)
    gt = 0.45; zt = D - gt
    prof = [(0.8 - 0.8 * math.sin(math.pi / 2 * i / 4), 0.8 - 0.8 * math.cos(math.pi / 2 * i / 4)) for i in range(4, -1, -1)]
    prof = sorted(prof, key=lambda p: p[1]) + [(0.0, zt - 0.5)] + round_profile(0.5, zt - 0.5, up=True, n=3)[1:]
    body = slab(name + '_body', W, H, r, prof, mats=[alu, alu, alu], n=22); parent(body, root)
    scr = mat_screen(name + '_scr', screen, strength=screen_strength)
    gi = 0.5
    gp = [(0.0, zt - 0.2), (0.0, D - 0.25)] + round_profile(0.25, D - 0.25, up=True, n=3)[1:]
    glass = slab(name + '_glass', W - 2 * gi, H - 2 * gi, r - gi, gp, mats=[bg, bg, scr], n=22); parent(glass, root)
    if back:
        # rear camera bump (top-left seen from the back)
        bump = slab(name + '_cam', 13.5, 26.0, 5.6, [(0, 0), (0, 0.9)] + round_profile(0.5, 0.9, up=True, n=3)[1:], mats=[alu, alu, alu], n=12)
        bump.rotation_euler = (0, math.radians(180), math.radians(90))
        bump.location = ((W / 2 - 22.0) * K, (H / 2 - 13.0) * K, 0); parent(bump, root)
        sapph = M('lens', lambda: _mat_lens())
        ln = cylinder(name + '_lens', 4.6, 1.5, mat=sapph)
        ln.rotation_euler = (math.radians(180), 0, 0); ln.location = ((W / 2 - 15.5) * K, (H / 2 - 13.0) * K, 0); parent(ln, root)
    # top button + volume
    for (x, l) in ((W / 2 - 30, 17.0),):
        b = slab(name + '_btn', l, 2.6, 1.29, [(0, 0), (0, 0.45)], continuous=False, mats=[alu, alu, alu], n=6)
        b.rotation_euler = (math.radians(-90), 0, 0); b.location = (x * K, H / 2 * K, D / 2 * K); parent(b, root)
    return root


def pencil_pro(name='Pencil', color=(0.86, 0.86, 0.85)):
    """Apple Pencil Pro along +X (tip at +X). Origin: centre of the flat side, lying on it."""
    S = PENCILPRO
    L, dia = S['L'], S['dia']
    wh = M('pencil', lambda: mat_paint('pencil', srgb((236, 236, 234)), rough=0.38, spec=0.45, coat=0.15))
    root = empty(name)
    R = dia / 2
    flat = 3.4  # half-chord of the flat side
    # cross-section: circle with one flat chord; extrude along X via slab rings built manually
    me = bpy.data.meshes.new(name + '_barrel'); bm = bmesh.new()
    nseg = 64
    d0 = math.sqrt(R * R - flat * flat)
    sec = []
    for i in range(nseg):
        a = 2 * math.pi * i / nseg
        y, z = R * math.cos(a), R * math.sin(a)
        if z < -d0: z = -d0
        sec.append((y, z + d0))
    body_L = L - 18.0
    xs = [-body_L / 2 + t for t in (0.0, 0.6, 1.4)] + [body_L / 2]
    scales = [0.82, 0.96, 1.0, 1.0]
    rings = []
    for x, s in zip(xs, scales):
        rings.append([bm.verts.new((x * K, y * s * K, ((z - d0) * s + d0) * K)) for y, z in sec])
    for a, b in zip(rings[:-1], rings[1:]):
        for i in range(nseg):
            j = (i + 1) % nseg; bm.faces.new((a[i], a[j], b[j], b[i]))
    bm.faces.new(list(reversed(rings[0])))
    # tip: cone
    tipL = 18.0
    tip_rings = []
    for k, (t, s) in enumerate([(0.0, 1.0), (0.35, 0.78), (0.7, 0.5), (0.92, 0.22), (1.0, 0.08)]):
        x = body_L / 2 + t * tipL
        tip_rings.append([bm.verts.new((x * K, y * s * K, ((z - d0) * s + d0) * K)) for y, z in sec])
    prev = rings[-1]
    for rg in tip_rings:
        for i in range(nseg):
            j = (i + 1) % nseg; bm.faces.new((prev[i], prev[j], rg[j], rg[i]))
        prev = rg
    bm.faces.new(tip_rings[-1])
    uvl = bm.loops.layers.uv.new('UVMap')
    bm.to_mesh(me); bm.free(); me.shade_smooth(); me.set_sharp_from_angle(angle=math.radians(50))
    me.materials.append(wh)
    ob = bpy.data.objects.new(name + '_barrel', me); _link(ob); parent(ob, root, keep=False)
    return root


# ------------------------------------------------------------------ Studio Display
def studio_display(name='Studio', screen='studio-home.png', finish='silver', tilt_deg=5.0, screen_strength=1.0):
    """Studio Display on its tilt stand. Origin: centre of the foot on the desk; screen faces -Y."""
    S = STUDIO
    W, H, r = S['W'], S['H'], S['r']
    col, rough = ALU[finish]
    alu = M('alu_' + finish, lambda: mat_alu('alu_' + finish, col, rough))
    bg = M('blackglass', lambda: mat_black_glass())
    root = empty(name)
    # stand: foot plate + slanted arm
    fw, fd, ft = 150.0, 190.0, 6.5
    foot = slab(name + '_foot', fw, fd, 10.0, [(0, 0), (0, ft - 1.2)] + round_profile(1.2, ft - 1.2, up=True, n=3)[1:], mats=[alu, alu, alu], n=10)
    parent(foot, root)
    ang = math.radians(14); arm_t = 12.0
    za, ya = 116.0 + H * 0.42, 4.0           # attach point on the display back
    arm_len = (za - ft) / math.cos(ang)
    yb = ya + arm_len * math.sin(ang)         # arm foot (behind the display)
    arm = slab(name + '_arm', fw - 20, arm_len + 8, 4.0, [(0, 0)] + [(0, arm_t - 1.5)] + round_profile(1.5, arm_t - 1.5, up=True, n=3)[1:], mats=[alu, alu, alu], n=6)
    arm.rotation_euler = (math.radians(90) + ang, 0, 0)
    arm.location = (0, ((yb + ya) / 2) * K, ((ft + za) / 2) * K)
    parent(arm, root)
    foot.location.y = (yb - fd / 2 + 25) * K
    # display body: thin slab facing -Y, centre at height ~ 116 + H/2 above desk
    disp = empty(name + '_display'); parent(disp, root, keep=False)
    disp.location = (0, (-10.0) * K, (116.0 + H / 2) * K)
    disp.rotation_euler = (math.radians(90 - tilt_deg), 0, 0)
    Dd = 16.0
    prof = [(3.0 - 3.0 * math.sin(math.pi / 2 * i / 5), 3.0 - 3.0 * math.cos(math.pi / 2 * i / 5)) for i in range(5, -1, -1)]
    prof = sorted(prof, key=lambda p: p[1]) + [(0.0, Dd - 1.0), (0.35, Dd - 0.6)]
    body = slab(name + '_body', W, H, r, prof, mats=[alu, alu, alu], n=16)
    body.location.z = -Dd * K; parent(body, disp, keep=False)
    scr = mat_screen(name + '_scr', screen, strength=screen_strength)
    gi = 0.5
    gl = slab(name + '_glass', W - 2 * gi, H - 2 * gi, r - gi, [(0, -1.0), (0, -0.2)] + round_profile(0.2, -0.2, up=True, n=2)[1:], mats=[bg, bg, scr], n=16)
    parent(gl, disp, keep=False)
    return root


# ============================================================== UI cards & browser windows
def card(name, img_path, w_mm, thickness=1.2, radius=None, emission=1.0, rough=0.35, coat=0.0, edge_color=(0.92, 0.92, 0.92),
         aov=True, crop_alpha=True, spec=0.5):
    """A floating UI card: rounded slab whose top face shows img (aspect from image). Size in mm (width).
    emission>0 -> self-lit, colour-exact via AOV (reads like a screen fragment)."""
    from PIL import Image
    im = Image.open(img_path); iw, ih = im.size
    h_mm = w_mm * ih / iw
    r = radius if radius is not None else min(w_mm, h_mm) * 0.06
    face = mat_image(name + '_face', img_path, rough=rough, emission=emission, aov=aov, coat=coat, spec=spec)
    edge = mat_paint(name + '_edge', edge_color, rough=0.5)
    prof = [(0.3, 0.0), (0.0, 0.3), (0.0, thickness - 0.25)] + round_profile(0.25, thickness - 0.25, up=True, n=3)[1:]
    ob = slab(name, w_mm, h_mm, r, prof, mats=[edge, edge, face], n=12, continuous=True)
    return ob, h_mm


def ensure_card_png(src, dst, pad=40, radius=36, bg=(255, 255, 255), crop=None, scale=1.0, shadow=False):
    """Make a clean UI-card PNG (white rounded panel with the element) from an element capture."""
    from PIL import Image, ImageDraw
    im = Image.open(src).convert('RGB')
    if crop: im = im.crop(crop)
    if scale != 1.0: im = im.resize((int(im.width * scale), int(im.height * scale)), Image.LANCZOS)
    W, H = im.width + 2 * pad, im.height + 2 * pad
    c = Image.new('RGB', (W, H), bg); c.paste(im, (pad, pad))
    c.save(dst)
    return dst


# ============================================================== assets
def import_gltf(rel, name=None, loc=(0, 0, 0), rot=(0, 0, 0), scale=1.0):
    path = os.path.join(ASSETS, 'models', rel)
    before = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=path)
    new = [o for o in bpy.data.objects if o not in before]
    root = empty(name or os.path.basename(rel))
    for o in new:
        if o.parent is None:
            o.parent = root
    root.location = loc; root.rotation_euler = rot; root.scale = (scale, scale, scale)
    return root, new


def bounds(objs):
    import itertools
    pts = []
    for o in objs:
        if o.type != 'MESH': continue
        pts += [o.matrix_world @ Vector(c) for c in o.bound_box]
    mn = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    mx = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    return mn, mx


def shadow_only(ob, on=True):
    """Visible to shadows/indirect only (gobo / out-of-frame casters)."""
    ob.visible_camera = not on
    for c in ob.children_recursive:
        c.visible_camera = not on


def set_visibility(ob, camera=True, glossy=True, diffuse=True, shadow=True, transmission=True):
    for o in [ob] + list(ob.children_recursive):
        o.visible_camera = camera; o.visible_glossy = glossy; o.visible_diffuse = diffuse
        o.visible_shadow = shadow; o.visible_transmission = transmission


# ============================================================== scene helpers
def quality():
    """R11_Q=preview|final (default preview)."""
    return os.environ.get('R11_Q', 'preview')


def res(w, h, samples, preview_scale=0.4, preview_samples=24):
    if quality() == 'final':
        return w, h, samples
    return int(w * preview_scale), int(h * preview_scale), preview_samples


def out_name(name):
    return name if quality() == 'final' else name + '_pv'


def gltf_part(root, new, keep):
    """Keep only imported objects whose name contains one of `keep`; delete the rest."""
    for o in list(new):
        if o.type == 'MESH' and not any(k in o.name for k in keep):
            bpy.data.objects.remove(o, do_unlink=True); new.remove(o)
    return [o for o in new if o.name in bpy.data.objects]


def recolor(objs, color=None, rough=None, mat_name_has=None, sat=None):
    """Tint the base colour of imported (Principled) materials."""
    for o in objs:
        if o.type != 'MESH': continue
        for s in o.material_slots:
            m = s.material
            if not m or (mat_name_has and mat_name_has not in m.name): continue
            nt = m.node_tree
            p = next((n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'), None)
            if not p: continue
            if color is not None:
                for l in list(p.inputs['Base Color'].links): nt.links.remove(l)
                p.inputs['Base Color'].default_value = (*color, 1)
            if rough is not None:
                for l in list(p.inputs['Roughness'].links): nt.links.remove(l)
                p.inputs['Roughness'].default_value = rough


def place_center(root, objs, target):
    """Translate root so that the bounding-box centre of objs lands on target (world)."""
    bpy.context.view_layer.update()
    mn, mx = bounds(objs)
    c = (mn + mx) / 2
    root.location = root.location + (Vector(target) - c)
    bpy.context.view_layer.update()
    return mn, mx


def sun_dir(az_deg, el_deg):
    """Euler for a sun coming FROM azimuth az (0=+y back, 90=+x right, -90=left, 180=front) at elevation el."""
    az, el = math.radians(az_deg), math.radians(el_deg)
    to_sun = Vector((math.sin(az) * math.cos(el), math.cos(az) * math.cos(el), math.sin(el)))
    q = (-to_sun).to_track_quat('-Z', 'Y')
    return q.to_euler(), to_sun
