"""06 — iPad Pro 13 top-down on a dark leather desk mat over dark stone, Apple Pencil Pro, a second
iPad face-down (camera side), moody window light (like refs teamtv-tablet / koppens)."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lib'))
import bpy
import r3d as R

R.reset()
w, h, spp = R.res(2400, 1800, 80)
R.setup_render(w, h, samples=spp, threshold=0.01)
R.world_hdri('studio_kontrast_03', strength=0.06, rot_z=math.radians(120))
stone = R.mat_pbr('stone', 'concrete_floor_01', scale=0.8, sat=0.35, val=0.24, bump=0.5, rough_mul=0.95)
R.box('table', (2.0, 2.0, 0.04), mat=stone, loc=(0, 0, -0.04))
def mat_leather():
    # smooth dark leather (procedural: fine grain bump + subtle roughness variation, no veins)
    m = bpy.data.materials.new('leather'); nt, N, L, out = R._nodes(m)
    tc = N.new('ShaderNodeTexCoord')
    nz = N.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = 900.0; nz.inputs['Detail'].default_value = 4.0
    L.new(tc.outputs['Object'], nz.inputs['Vector'])
    nz2 = N.new('ShaderNodeTexNoise'); nz2.inputs['Scale'].default_value = 18.0; L.new(tc.outputs['Object'], nz2.inputs['Vector'])
    mr = N.new('ShaderNodeMapRange'); mr.inputs['To Min'].default_value = 0.48; mr.inputs['To Max'].default_value = 0.62
    L.new(nz2.outputs['Fac'], mr.inputs['Value'])
    p = R.principled(N, base=R.srgb((22, 19, 18)), spec=0.4, sheen=0.15)
    L.new(mr.outputs['Result'], p.inputs['Roughness'])
    bp = N.new('ShaderNodeBump'); bp.inputs['Strength'].default_value = 0.25; bp.inputs['Distance'].default_value = 0.0004
    L.new(nz.outputs['Fac'], bp.inputs['Height']); L.new(bp.outputs['Normal'], p.inputs['Normal'])
    L.new(p.outputs['BSDF'], out.inputs['Surface'])
    return m
leather = mat_leather()
mat = R.slab('deskmat', 600, 400, 14, [(0.6, 0), (0, 0.6), (0, 2.0), (0.6, 2.6)], mats=[leather, leather, leather], n=8, continuous=False)
mat.location = (0.03, 0.02, 0); mat.rotation_euler.z = math.radians(-24)
back = R.ipad_pro13('iPadBack', screen='ipad-shop.png', finish='spaceblack')
back.rotation_euler = (0, math.radians(180), math.radians(-14)); back.location = (0.10, 0.07, 0.0026 + 0.0051)
ip = R.ipad_pro13('iPad', screen='ipad-home.png', finish='spaceblack', back=False)
ip.location = (-0.04, -0.03, 0.0026 + 0.0102 + 0.0005); ip.rotation_euler.z = math.radians(-32)
pen = R.pencil_pro('Pencil'); pen.location = (0.215, -0.10, 0.0026); pen.rotation_euler.z = math.radians(58)
R.area_light('window', (-0.9, 0.5, 0.9), (0, 0, 0), size=(1.2, 0.5), power=110, color=(0.96, 0.97, 1.0))
R.area_light('overhead', (0.225, 0.37, 0.95), (0.17, 0.12, 0.0), size=(0.3, 0.3), power=11, color=(1.0, 0.99, 0.98))
R.area_light('bounce', (0.8, -0.8, 0.6), (0, 0, 0), size=(1.0, 1.0), power=6, color=(1.0, 0.95, 0.9))
focus = R.empty('focus', (-0.04, -0.03, 0.017))
R.camera((0.05, -0.16, 0.86), (0.015, 0.0, 0.0), lens=50, fstop=4.5, focus=focus)
R.render_still(R.out_name('r-06-ipad-top'), post_kw=dict(exposure=-0.4, look='AgX - Medium High Contrast', vignette=0.25))
