"""10 — Brand shot: a real 10 mm float-glass pane (green edges from iron content, volume absorption) with the
MisterGlass logo sand-etched into it, standing in brushed clamps; behind it the webshop on an iPhone.
Low sun through the glass throws a green-tinted shadow / light stripe on the stone surface."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R
from mathutils import Vector

R.reset()
w, h, spp = R.res(2400, 1600, 112)
R.setup_render(w, h, samples=spp, threshold=0.01, bounces=(16, 3, 4, 16, 16), clamp=6.0)
R.world_hdri('white_home_studio', strength=0.15, rot_z=math.radians(80), sat=0.5)
stone = R.mat_pbr('stone', 'concrete_floor_01', scale=0.9, sat=0.25, val=1.25, bump=0.35, rough_mul=1.0)
R.box('surface', (3.0, 2.0, 0.04), mat=stone, loc=(0, 0.3, -0.04))
wallm = R.mat_paint('wall', R.srgb((196, 194, 190)), rough=0.85)
wall = R.plane('wall', 4.0, 2.0, mat=wallm, loc=(0, 0.75, 0.9), rot=(math.radians(90), 0, 0)); wall.visible_shadow = False

def glass_mat(name, frost=None, tint=(0.985, 0.995, 0.99), shadow_tint=(0.80, 0.92, 0.86)):
    """Glass without volumes (bpy 5 volume stack misbehaves on this thin slab): faces nearly clear,
    the polished edges carry the typical float-glass green (seen edge-on)."""
    m = bpy.data.materials.new(name); nt, N, L, out = R._nodes(m)
    g = R.principled(N, base=tint, rough=0.0, ior=1.52, trans=1.0)
    if frost:
        img = bpy.data.images.load(frost); img.colorspace_settings.name = 'Non-Color'
        t = N.new('ShaderNodeTexImage'); t.image = img; t.extension = 'CLIP'
        uv = N.new('ShaderNodeUVMap'); uv.uv_map = 'UVMap'; L.new(uv.outputs['UV'], t.inputs['Vector'])
        etched = R.principled(N, base=(0.95, 0.97, 0.96), rough=0.55, ior=1.52, trans=0.55)
        mx0 = N.new('ShaderNodeMixShader'); L.new(t.outputs['Color'], mx0.inputs['Fac'])
        L.new(g.outputs['BSDF'], mx0.inputs[1]); L.new(etched.outputs['BSDF'], mx0.inputs[2]); surf = mx0.outputs['Shader']
    else:
        surf = g.outputs['BSDF']
    # shadow rays pass through, tinted (cheap, stable 'caustic' for a flat pane)
    lp = N.new('ShaderNodeLightPath'); tr = N.new('ShaderNodeBsdfTransparent'); tr.inputs['Color'].default_value = (*shadow_tint, 1)
    mx = N.new('ShaderNodeMixShader'); L.new(lp.outputs['Is Shadow Ray'], mx.inputs['Fac'])
    L.new(surf, mx.inputs[1]); L.new(tr.outputs['BSDF'], mx.inputs[2])
    L.new(mx.outputs['Shader'], out.inputs['Surface'])
    return m

clear = glass_mat('glass_clear'); etched = glass_mat('glass_etched', os.path.join(R.TEX, 'etch-logo.png'))
edge = glass_mat('glass_edge', tint=(0.42, 0.80, 0.66), shadow_tint=(0.20, 0.45, 0.35))
GW, GH, GT = 280.0, 190.0, 10.0
pane = R.slab('pane', GW, GH, 1.2, [(0.6, 0), (0, 0.6), (0, GT - 0.6), (0.6, GT)], mats=[edge, clear, etched], n=4, continuous=False)
pane.rotation_euler = (math.radians(90), 0, math.radians(24))
pane.location = (0.0, 0.0, (GH / 2 + 6) * R.K)
# move so the pane's centre plane sits over the origin (front face at +GT/2)
off = pane.matrix_world.to_3x3() @ Vector((0, 0, -GT / 2 * R.K)); pane.location += off
alu = R.mat_alu('clamp', R.srgb((200, 200, 202)), 0.28, aniso=0.4)
for sx in (-1, 1):
    c = R.slab('clamp', 34, 26, 3.0, [(0, 0), (0, 14)] + R.round_profile(1.5, 14, up=True, n=3)[1:], mats=[alu, alu, alu], n=6, continuous=False)
    c.rotation_euler.z = math.radians(24)
    c.location = pane.matrix_world.to_3x3() @ Vector((sx * 0.105, 0, 0)) + Vector((0, 0, 0)); c.location.z = 0
ph = R.iphone17pro('Phone', screen='iphone-product.png', finish='deepblue')
ph.rotation_euler = (math.radians(90 - 8), 0, math.radians(14)); ph.location = (0.165, 0.17, 0.077)
sun_e, to_sun = R.sun_dir(-82, 24)
R.sun_light('sun', sun_e, strength=8.0, angle=0.7, color=(1.0, 0.93, 0.84))
R.area_light('fill', (0.7, -0.9, 0.5), (0, 0.1, 0.1), size=(1.2, 1.2), power=22, color=(0.95, 0.97, 1.0))
R.area_light('strip', (-0.55, -0.45, 0.16), (0.0, 0.0, 0.10), size=(0.06, 0.45), power=14, color=(1, 1, 1))
focus = R.empty('focus', (0.0, 0.0, 0.11))
R.camera((-0.37, -0.63, 0.20), (0.035, 0.05, 0.10), lens=55, fstop=4.0, focus=focus)
R.render_still(R.out_name('r-10-glass'), post_kw=dict(exposure=-0.35, look='AgX - High Contrast', vignette=0.18))
