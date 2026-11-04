"""Frame-by-frame animation rendering with the r3d develop step (AgX scene + exact screens) and an
ffmpeg ping-pong encode. Frames that already exist are skipped, so a run can be resumed."""
import os, sys, time, math, subprocess
import bpy
import r3d as R
import post


def smooth(t):
    t = min(max(t, 0.0), 1.0)
    return t * t * t * (t * (t * 6 - 15) + 10)   # smootherstep: zero velocity + acceleration at both ends


def lerp(a, b, t):
    return tuple(x + (y - x) * t for x, y in zip(a, b)) if isinstance(a, (tuple, list)) else a + (b - a) * t


def render_frames(name, n, setter, post_kw=None, frames_dir=None, log=None):
    """setter(i, t) poses the scene for frame i (t = smooth progress 0..1). Writes frames/<name>/f_####.png."""
    d = frames_dir or os.path.join(R.OUT, 'frames', name)
    os.makedirs(d, exist_ok=True)
    sc = bpy.context.scene
    sc.render.use_persistent_data = True
    t_all = time.time()
    for i in range(n):
        png = os.path.join(d, f'f_{i:04d}')
        if os.path.exists(png + '.png'):
            continue
        t = smooth(i / (n - 1))
        setter(i, t)
        bpy.context.view_layer.update()
        R.set_output(d, f'x_{i:04d}')
        t0 = time.time()
        bpy.ops.render.render(write_still=False)
        post.develop(os.path.join(d, f'x_{i:04d}_rgb.exr'), png, webp=False, **(post_kw or {}))
        for k in ('rgb', 'scr', 'emit'):
            try: os.remove(os.path.join(d, f'x_{i:04d}_{k}.exr'))
            except OSError: pass
        msg = f'[anim] {name} frame {i + 1}/{n} {time.time() - t0:.1f}s (total {time.time() - t_all:.0f}s)'
        print(msg, flush=True)
    return d


def encode_pingpong(frames_dir, out_mp4, fps=24, crf=22, poster_index=None, poster_webp=None, w=1920, hold=10):
    frames_dir = os.path.abspath(frames_dir)
    fs = sorted(f for f in os.listdir(frames_dir) if f.startswith('f_') and f.endswith('.png'))
    fwd = [fs[0]] * hold + fs + [fs[-1]] * hold   # short rests at both ends (velocity is zero there anyway)
    seq = fwd + fwd[-2:0:-1]
    sd = os.path.join(frames_dir, 'seq'); os.makedirs(sd, exist_ok=True)
    for f in os.listdir(sd): os.remove(os.path.join(sd, f))
    for k, f in enumerate(seq):
        os.symlink(os.path.join(frames_dir, f), os.path.join(sd, f's_{k:04d}.png'))
    cmd = ['ffmpeg', '-y', '-loglevel', 'error', '-framerate', str(fps), '-i', os.path.join(sd, 's_%04d.png'),
           '-vf', f'scale={w}:-2:flags=lanczos', '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf),
           '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', out_mp4]
    subprocess.run(cmd, check=True)
    if poster_webp is not None:
        from PIL import Image
        pi = poster_index if poster_index is not None else 0
        im = Image.open(os.path.join(frames_dir, fs[pi])).convert('RGB')
        if im.width != w: im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        im.save(poster_webp, quality=80, method=6)
    return out_mp4


def fadeable(ob):
    """Wrap every material of ob (and its children) in a mix with a Transparent BSDF; returns a setter(opacity)."""
    vals = []
    for o in [ob] + list(ob.children_recursive):
        if o.type != 'MESH': continue
        for sl in o.material_slots:
            m = sl.material
            if not m or m.get('_fade'): continue
            nt = m.node_tree; out = next(n for n in nt.nodes if n.type == 'OUTPUT_MATERIAL')
            src = out.inputs['Surface'].links[0].from_socket
            tr = nt.nodes.new('ShaderNodeBsdfTransparent'); mx = nt.nodes.new('ShaderNodeMixShader'); v = nt.nodes.new('ShaderNodeValue')
            nt.links.new(v.outputs[0], mx.inputs['Fac']); nt.links.new(tr.outputs['BSDF'], mx.inputs[1]); nt.links.new(src, mx.inputs[2])
            nt.links.new(mx.outputs['Shader'], out.inputs['Surface'])
            m['_fade'] = 1; vals.append(v)
    def set_opacity(a):
        for v in vals: v.outputs[0].default_value = a
    return set_opacity

