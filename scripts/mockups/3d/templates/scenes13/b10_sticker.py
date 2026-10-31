import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); from _hdr import *
"""B10 Open silver MacBook seen from behind: a round logo sticker on the lid.
The MacBook's own screen faces away (never a blank screen in view)."""
def build():
    SK.env(0.28)
    SK.floor('floor', tex='concrete_wall_006', scale=1.0, contrast=0.5, size=20.0)
    mbp = R.macbook_pro14('MBP', screen='mbp-home.png', finish='silver', open_deg=104)
    mbp.rotation_euler.z = math.radians(8)
    bpy.context.view_layer.update()
    lid = bpy.data.objects['MBP_lid']
    st = SK.sheet('sticker', 64, 64, t_mm=0.15, r_mm=31.9, loc=(0.0, 0.0, 0.0))
    R.parent(st, lid, keep=False)
    st.location = (-0.055, 0.118, -2.71 * MM); st.rotation_euler = (math.pi, 0, 0)
    SK.lights_soft(target=(0, 0.1, 0.1), key=(0.9, 1.0, 1.1), key_power=55, fill_power=14, rim=True, top_power=20)
SK.run('b10_sticker', build, {
    'a': dict(loc=(0.52, 0.86, 0.38), target=(0.07, 0.12, 0.07), lens=52),
    'b': dict(loc=(-0.38, 0.64, 0.31), target=(0.0, 0.06, 0.10), lens=55),
})
