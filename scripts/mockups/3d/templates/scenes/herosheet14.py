"""Contact sheet of rendered heroes: 3 desktop frames + 1 mobile frame per case (skips files written < 2 min ago)."""
import sys, os, io, subprocess, time, json
from PIL import Image, ImageDraw, ImageFont
OUT = sys.argv[1]; dst = sys.argv[2]; slugs = sys.argv[3].split(',')
F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 13)
def grab(f, t, w):
    r = subprocess.run(['ffmpeg', '-loglevel', 'error', '-ss', str(t), '-i', f, '-frames:v', '1', '-vf', f'scale={w}:-1', '-f', 'image2pipe',
                        '-vcodec', 'png', '-'], capture_output=True)
    return Image.open(io.BytesIO(r.stdout)).convert('RGB') if r.stdout else None
rows = []
for s in slugs:
    d = os.path.join(OUT, s, 'r-hero.mp4'); m = os.path.join(OUT, s, 'r-hero-m.mp4')
    if not os.path.exists(d) or time.time() - os.path.getmtime(d) < 120: continue
    ims = [grab(d, t, 400) for t in (0.0, 4.2, 7.6)] + [grab(m, 4.2, 126)] if os.path.exists(m) else []
    ims = [i for i in ims if i is not None]
    rows.append((f"{s}  {os.path.getsize(d) // 1024} KB / {os.path.getsize(m) // 1024 if os.path.exists(m) else 0} KB", ims))
W = 3 * 405 + 135; sh = Image.new('RGB', (W * 2, ((len(rows) + 1) // 2) * 248 + 10), (24, 24, 26)); dr = ImageDraw.Draw(sh)
for i, (lab, ims) in enumerate(rows):
    x0 = (i % 2) * W + 5; y0 = (i // 2) * 248 + 5
    dr.text((x0, y0), lab, font=F, fill=(230, 230, 230)); x = x0
    for im in ims: sh.paste(im, (x, y0 + 18)); x += im.width + 5
sh.save(dst, quality=82); print('rows', len(rows))
