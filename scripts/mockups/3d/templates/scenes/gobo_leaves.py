"""Leaf-shadow gobo for the light backdrops: top-down orthographic render of a white floor with soft sun
shadows of CC0 Poly Haven plants (pachira_aquatica_01 + potted_plant_02 leaves). Output: r12/bgtex/leaves.png
(16-bit grey, 1 = full sun). The floor covers 2.4 x 1.6 m."""
import sys, os, math
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
import bpy
import tmpl as T
R = T.R
from mathutils import Vector
import numpy as np

R.reset()
R.setup_render(2400, 1600, samples=24, threshold=0.05)
R.world_color((1, 1, 1), 0.0)
R.plane('floor', 2.4, 1.6, mat=R.mat_paint('white', (0.8, 0.8, 0.8), rough=0.9))
sun_e, to_sun = R.sun_dir(-125, 52)
R.sun_light('sun', sun_e, strength=3.0, angle=3.2, color=(1, 1, 1))
gr, gn = R.import_gltf('pachira_aquatica_01/pachira_aquatica_01_2k.gltf', 'p1')
gn = R.gltf_part(gr, gn, ['_a', '_b'])
gr.rotation_euler = (0, 0, math.radians(-20)); gr.scale = (0.75, 0.75, 0.75)
R.place_center(gr, [o for o in gn if 'leaves' in o.name], Vector((-0.35, 0.15, 0.0)) + to_sun * 0.55)
fr, fn = R.import_gltf('potted_plant_02/potted_plant_02_2k.gltf', 'p2')
R.gltf_part(fr, fn, ['leaves'])
fr.rotation_euler = (0, 0, math.radians(70))
R.place_center(fr, fn, Vector((0.55, -0.25, 0.0)) + to_sun * 0.45)
for r in (gr, fr):
    R.set_visibility(r, camera=False, glossy=False, diffuse=False, shadow=True)
R.camera((0, 0, 3.0), (0, 0, 0), ortho=2.4)
d = os.path.join(T.R12, 'bgtex'); R.set_output(d, 'leaves')
bpy.ops.render.render(write_still=False)
import post
rgb, _ = post.read_exr(os.path.join(d, 'leaves_rgb.exr'))
lum = rgb.mean(-1); lum = lum / np.percentile(lum, 99.5)
from PIL import Image
Image.fromarray((np.clip(lum, 0, 1) * 65535).astype(np.uint16)).save(os.path.join(d, 'leaves.png'))
Image.fromarray((np.clip(lum, 0, 1) * 255).astype(np.uint8)).resize((1200, 800)).save(os.path.join(d, 'leaves_preview.png'))
print('ok', lum.min(), lum.mean())
