"""reels15 — round 15: showreels cut from finished footage (no new renders), one moment per project.

  python reels15.py build <reel>      r13/reels/<reel>{,-m,-p}.mp4 + <reel>{,-p}.webp from r15/r3d/reels/<reel>.json
  python reels15.py sheet <reel>      r15/r3d/reels/sheet-<reel>.jpg

<reel>.json: {"title": {nl, en}, "clips": [ ... ]}, every clip one project:
  video: {slug, src, t, dur, psrc?, pt?, px?}   src / psrc relative to public/media/cases (r-flow, r-hero, s-*, v-*);
         t may run past the end of a looping hero (it wraps); without psrc the portrait cut is a 9:16 crop around px.
  still: {slug, img, dur, bg?}                  M7's own campaign / social image, whole, on a calm backdrop, slow push.
Hard cuts, no text overlays; the last XF s dissolve into the first frame so the reel loops.
Used for: masterpieces (the /cases hero, MASTERPIECES only), apps (app / portal / tool footage only), content
(campaign and social work only).
"""
import sys, os, json, subprocess, shutil
import numpy as np
from PIL import Image, ImageFilter
HERE = os.path.dirname(os.path.abspath(__file__))
S = os.environ.get('M7_SCRATCH') or os.path.dirname(os.path.dirname(HERE))     # work root (r13 / r15 live here)
CASES = os.path.join(os.environ.get('M7_ROOT') or '/home/user/M7', 'public', 'media', 'cases')
RD = os.path.join(S, 'r15', 'r3d', 'reels')
OUTD = os.path.join(S, 'r13', 'reels')
FPS = 30
XF = 0.5
BUDGET = {'': 9.5, '-m': 4.0, '-p': 4.0}      # MB


def run(cmd):
    subprocess.run(cmd, check=True)


def dur_of(f):
    return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f],
                                capture_output=True, text=True).stdout)


def seg_video(src, t, d, W, H, out, px=None, zoom=None):
    """zoom = (z, cx, cy): a fixed punch-in on the device (crop 1/z of the frame around cx, cy) before scaling."""
    f = os.path.join(CASES, src); D = dur_of(f)
    n = int(round(d * FPS))
    pre = ''
    if zoom:
        z, cx, cy = zoom
        pre = (f"crop=iw/{z}:ih/{z}:max(0\\,min(iw-iw/{z}\\,iw*{cx}-iw/{z}/2)):max(0\\,min(ih-ih/{z}\\,ih*{cy}-ih/{z}/2)),")
    if px is None:
        vf = f'scale={W}:{H}:force_original_aspect_ratio=increase:flags=lanczos,crop={W}:{H}'
    else:
        cw = f'min(iw\\,ih*{W}/{H})'
        vf = f"crop={cw}:ih:max(0\\,min(iw-{cw}\\,iw*{px}-{cw}/2)):0,scale={W}:{H}:flags=lanczos"
    t = t % D
    loop = ['-stream_loop', '2'] if t + d > D - 0.02 else []
    run(['ffmpeg', '-y', '-loglevel', 'error'] + loop + ['-ss', f'{t:.3f}', '-i', f, '-vf', f'fps={FPS},{pre}{vf},setsar=1',
         '-frames:v', str(n), '-an', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '10', '-pix_fmt', 'yuv420p', out])


def seg_still(img, d, W, H, out, bg=(22, 22, 24), fill=False):
    """The image whole (never cropped), centred on a calm backdrop with a soft shadow; a slow 4% push.
    fill=True (a finished photo / render): it covers the frame instead (centre crop)."""
    im = Image.open(os.path.join(CASES, img)).convert('RGB')
    s = max(W / im.width, H / im.height) if fill else min(W * (0.92 if W < H else 0.80) / im.width, H * 0.80 / im.height)
    S2 = 2      # supersampled canvas for a smooth push
    cw, ch = W * S2, H * S2
    lw, lh = round(im.width * s * S2), round(im.height * s * S2)
    can = Image.new('RGB', (cw, ch), bg)
    if not fill:
        sh = Image.new('L', (cw, ch), 0); sd = Image.new('L', (lw, lh), 120)
        sh.paste(sd, ((cw - lw) // 2, (ch - lh) // 2 + 18 * S2)); sh = sh.filter(ImageFilter.GaussianBlur(28 * S2))
        can.paste(Image.new('RGB', (cw, ch), (0, 0, 0)), (0, 0), sh)
    can.paste(im.resize((lw, lh), Image.LANCZOS), ((cw - lw) // 2, (ch - lh) // 2))
    n = int(round(d * FPS))
    enc = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS),
                            '-i', '-', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '10', '-pix_fmt', 'yuv420p', out], stdin=subprocess.PIPE)
    for k in range(n):
        z = 1.0 + 0.04 * k / max(1, n - 1)
        a = 1 / z; x0 = cw / 2 - cw / 2 * a; y0 = ch / 2 - ch / 2 * a
        fr = can.transform((W, H), Image.AFFINE, (a * cw / W, 0, x0, 0, a * ch / H, y0), resample=Image.BICUBIC)
        enc.stdin.write(fr.tobytes())
    enc.stdin.close(); enc.wait()


def assemble(parts, out, budget):
    lst = out + '.txt'
    open(lst, 'w').write(''.join(f"file '{p}'\n" for p in parts))
    full = out + '.full.mkv'
    run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', lst, '-c', 'copy', full])
    L = dur_of(full)
    fc = (f'[0]split[a][b];[a]trim=start={XF},setpts=PTS-STARTPTS[m];[b]trim=0:{XF},setpts=PTS-STARTPTS[h];'
          f'[m][h]xfade=transition=fade:duration={XF}:offset={L - 2 * XF:.3f},format=yuv420p[v]')
    for crf in (22, 24, 26, 28, 30):
        run(['ffmpeg', '-y', '-loglevel', 'error', '-i', full, '-filter_complex', fc, '-map', '[v]', '-r', str(FPS),
             '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf), '-g', str(FPS * 2), '-bf', '3', '-pix_fmt', 'yuv420p',
             '-movflags', '+faststart', '-an', out])
        if os.path.getsize(out) <= budget * 1048576: break
    os.remove(full); os.remove(lst)
    return crf, os.path.getsize(out), dur_of(out)


def build(name):
    spec = json.load(open(os.path.join(RD, name + '.json')))
    clips = spec['clips']
    tmp = os.path.join(RD, 'seg-' + name); os.makedirs(tmp, exist_ok=True)
    land, port = [], []
    for i, c in enumerate(clips):
        a = os.path.join(tmp, f'{i:02d}-l.mkv'); b = os.path.join(tmp, f'{i:02d}-p.mkv')
        if c.get('img'):
            bg = tuple(int(c.get('bg', '#161618').lstrip('#')[j:j + 2], 16) for j in (0, 2, 4))
            seg_still(c['img'], c['dur'], 1920, 1080, a, bg, c.get('fill', False)); seg_still(c.get('pimg', c['img']), c['dur'], 720, 1280, b, bg, c.get('pfill', c.get('fill', False)))
        else:
            zm = tuple(c['zoom']) if c.get('zoom') else None
            seg_video(c['src'], c['t'], c['dur'], 1920, 1080, a, zoom=zm)
            if c.get('psrc'): seg_video(c['psrc'], c.get('pt', c['t']), c['dur'], 720, 1280, b, zoom=tuple(c['pzoom']) if c.get('pzoom') else None)
            else: seg_video(c['src'], c['t'], c['dur'], 720, 1280, b, px=c.get('px', 0.5), zoom=zm)
        land.append(a); port.append(b)
    res = {'': assemble(land, os.path.join(OUTD, name + '.mp4'), BUDGET['']),
           '-p': assemble(port, os.path.join(OUTD, name + '-p.mp4'), BUDGET['-p'])}
    m = os.path.join(OUTD, name + '-m.mp4')
    for crf in (23, 25, 27, 29):
        run(['ffmpeg', '-y', '-loglevel', 'error', '-i', os.path.join(OUTD, name + '.mp4'), '-vf', 'scale=1280:720:flags=lanczos',
             '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf), '-g', str(FPS * 2), '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', m])
        if os.path.getsize(m) <= BUDGET['-m'] * 1048576: break
    res['-m'] = (crf, os.path.getsize(m), dur_of(m))
    for sfx in ('', '-p'):
        run(['ffmpeg', '-y', '-loglevel', 'error', '-i', os.path.join(OUTD, f'{name}{sfx}.mp4'), '-frames:v', '1',
             '-c:v', 'libwebp', '-quality', '82', os.path.join(OUTD, f'{name}{sfx}.webp')])
    shutil.rmtree(tmp)
    cases = list(dict.fromkeys(c['slug'] for c in clips))
    json.dump(dict(title=spec['title'], cases=cases, duration=round(res[''][2], 1),
                   out={k: dict(crf=v[0], bytes=v[1], dur=round(v[2], 2)) for k, v in res.items()}),
              open(os.path.join(RD, name + '.built.json'), 'w'), indent=1, ensure_ascii=False)
    return res


def sheet(name):
    import io
    from PIL import ImageDraw, ImageFont
    F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 13)
    clips = json.load(open(os.path.join(RD, name + '.json')))['clips']
    land = os.path.join(OUTD, name + '.mp4'); port = os.path.join(OUTD, name + '-p.mp4')
    t = 0.0; cells = []
    for c in clips:
        mid = max(0.05, t + c['dur'] / 2 - XF)
        ims = []
        for f, w in ((land, 320), (port, 101)):
            r = subprocess.run(['ffmpeg', '-loglevel', 'error', '-ss', f'{mid:.2f}', '-i', f, '-frames:v', '1', '-vf', f'scale={w}:-1',
                                '-f', 'image2pipe', '-vcodec', 'png', '-'], capture_output=True)
            ims.append(Image.open(io.BytesIO(r.stdout)).convert('RGB'))
        cells.append((c['slug'], ims)); t += c['dur']
    cols = 5; cw = 320 + 101 + 14; ch = 180 + 24
    sh = Image.new('RGB', (cols * cw + 6, ((len(cells) + cols - 1) // cols) * ch + 6), (24, 24, 26)); d = ImageDraw.Draw(sh)
    for i, (s, ims) in enumerate(cells):
        x = (i % cols) * cw + 4; y = (i // cols) * ch + 4
        d.text((x, y), f'{i + 1}. {s}', font=F, fill=(230, 230, 230))
        sh.paste(ims[0], (x, y + 18)); sh.paste(ims[1].crop((0, 0, 101, 180)), (x + 324, y + 18))
    sh.save(os.path.join(RD, f'sheet-{name}.jpg'), quality=84)


def preview(name):
    """Mid frame of every clip (landscape + portrait) before building: checks framing / punch-ins."""
    from PIL import ImageDraw, ImageFont
    F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 13)
    clips = json.load(open(os.path.join(RD, name + '.json')))['clips']
    tmp = os.path.join(RD, 'pv-' + name); os.makedirs(tmp, exist_ok=True)
    cells = []
    for i, c in enumerate(clips):
        cc = dict(c, dur=0.1, t=c.get('t', 0) + c['dur'] / 2)
        a = os.path.join(tmp, f'{i}-l.mkv'); b = os.path.join(tmp, f'{i}-p.mkv')
        if c.get('img'):
            seg_still(c['img'], 0.1, 1920, 1080, a, fill=c.get('fill', False)); seg_still(c.get('pimg', c['img']), 0.1, 720, 1280, b, fill=c.get('pfill', c.get('fill', False)))
        else:
            zm = tuple(c['zoom']) if c.get('zoom') else None
            seg_video(cc['src'], cc['t'], 0.1, 1920, 1080, a, zoom=zm)
            if c.get('psrc'): seg_video(c['psrc'], c.get('pt', c['t']) + c['dur'] / 2, 0.1, 720, 1280, b, zoom=tuple(c['pzoom']) if c.get('pzoom') else None)
            else: seg_video(cc['src'], cc['t'], 0.1, 720, 1280, b, px=c.get('px', 0.5), zoom=zm)
        ims = []
        for f, w in ((a, 384), (b, 122)):
            r = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', f, '-frames:v', '1', '-vf', f'scale={w}:-1', '-f', 'image2pipe', '-vcodec', 'png', '-'], capture_output=True)
            import io; ims.append(Image.open(io.BytesIO(r.stdout)).convert('RGB'))
        cells.append((f"{i + 1}. {c['slug']}", ims))
    cols = 4; cw = 384 + 122 + 16; ch = 217 + 22
    sh = Image.new('RGB', (cols * cw + 6, ((len(cells) + cols - 1) // cols) * ch + 6), (24, 24, 26)); d = ImageDraw.Draw(sh)
    for i, (l, ims) in enumerate(cells):
        x = (i % cols) * cw + 4; y = (i // cols) * ch + 4
        d.text((x, y), l, font=F, fill=(230, 230, 230)); sh.paste(ims[0], (x, y + 18)); sh.paste(ims[1].crop((0, 0, 122, 217)), (x + 390, y + 18))
    sh.save(os.path.join(RD, f'pv-{name}.jpg'), quality=84); shutil.rmtree(tmp)


if __name__ == '__main__':
    cmd, name = sys.argv[1], sys.argv[2]
    if cmd == 'build':
        for k, v in build(name).items(): print(name + k, 'crf', v[0], f'{v[1] / 1048576:.2f} MB', f'{v[2]:.1f} s', flush=True)
    elif cmd == 'sheet':
        sheet(name)
    elif cmd == 'preview':
        preview(name)
