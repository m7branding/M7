"""Preview of the neutral / navy backdrop set: T1 + T2 for a few projects x every variant (assigned one framed),
3 frames of animation A on navy and near-black, and full-size edge crops on the darkest variants."""
import sys, os, json, math, time
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
from PIL import Image, ImageDraw, ImageFont
import numpy as np
import tcomp as C, proj as P, backdrops as BD

R12 = C.R12; W_ = os.path.join(R12, 'work')
slugs = sys.argv[1].split(',')
ASSIGN = json.load(open(os.path.join(R12, 'bg-assign.json')))
PR = P.projects()
F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 17)
FB = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-SemiBold.otf', 20)
VS = list(BD.VARIANTS)
TW, TH = 300, 200


def sheet(t):
    meta = json.load(open(os.path.join(C.TPL, t, 'meta.json')))
    pp = C.load_prepared(os.path.join(C.TPL, t, 'cache', 'still.npz'))
    bgs = {v: BD.backdrop(v, meta['camera'], pp['W'], pp['H'], alpha=pp['a']) for v in VS}
    sh = Image.new('RGB', (190 + len(VS) * (TW + 6), 40 + len(slugs) * (TH + 8)), (22, 22, 24)); d = ImageDraw.Draw(sh)
    for j, v in enumerate(VS):
        d.text((190 + j * (TW + 6), 10), v, font=F, fill=(220, 220, 224))
    for i, s in enumerate(slugs):
        p = PR[s]; y = 40 + i * (TH + 8)
        d.text((8, y + 80), s, font=FB, fill=(240, 240, 240)); d.text((8, y + 108), f"site lum {ASSIGN[s]['site_lum']}", font=F, fill=(160, 160, 165))
        fg = C.foreground(pp, P.displays_for(p, sorted({x['role'] for x in pp['screens']})))
        for j, v in enumerate(VS):
            im = Image.fromarray(C.over(pp, fg, bg=bgs[v])).resize((TW, TH), Image.LANCZOS)
            x = 190 + j * (TW + 6); sh.paste(im, (x, y))
            if ASSIGN[s]['variant'] == v:
                d.rectangle([x - 3, y - 3, x + TW + 2, y + TH + 2], outline=(255, 210, 60), width=3)
        if t == 't2_closeup' and s == slugs[0]:
            for v in ('near-black', 'navy-nebula', 'anthracite'):
                Image.fromarray(C.over(pp, fg, bg=bgs[v])).save(os.path.join(W_, f'edge_{t}_{s}_{v}.png'))
        if t == 't1_gravity' and s == slugs[0]:
            for v in ('near-black', 'navy-glow', 'white-leaves'):
                Image.fromarray(C.over(pp, fg, bg=bgs[v])).save(os.path.join(W_, f'edge_{t}_{s}_{v}.png'))
    out = os.path.join(R12, f'preview-bg-{t}.jpg'); sh.save(out, quality=86); print(out, sh.size)


def video_frames(pairs):
    t = 'v_a_gravity'
    meta = json.load(open(os.path.join(C.TPL, t, 'meta.json'))); N = meta['frames']; Ftot = 2 * N - 2
    rows = []
    for s, v in pairs:
        p = PR[s]; cells = []
        for f in (0, 60, 118):
            u = f if f < N else Ftot - f
            pp = C.load_prepared(os.path.join(C.TPL, t, 'cache', f'f_{u:04d}.npz'))
            ds = P.displays_for(p, sorted({x['role'] for x in pp['screens']}), video=True)
            for r, dd in ds.items():
                vis = (dd.H - dd.top) * dd.cscale
                amp = max(0.0, min(dd.max_offset - dd.offset, (1.6 if dd.W > 2000 else 2.2) * vis))
                dd.offset = dd.offset + amp * (1 - math.cos(2 * math.pi * f / Ftot)) / 2
            bg = BD.backdrop(v, meta['cameras'][f'f_{u:04d}'], pp['W'], pp['H'], alpha=pp['a'], phase=f / Ftot)
            cells.append(Image.fromarray(C.over(pp, C.foreground(pp, ds, aniso=3), bg=bg)).resize((640, 360), Image.LANCZOS))
        rows.append((f'{s} / {v}', cells))
    sh = Image.new('RGB', (3 * 650 + 10, len(rows) * 400 + 10), (22, 22, 24)); d = ImageDraw.Draw(sh)
    for i, (lab, cells) in enumerate(rows):
        d.text((10, 10 + i * 400), lab + '   (frames 0, 60, 118 of 158)', font=F, fill=(230, 230, 230))
        for j, im in enumerate(cells): sh.paste(im, (10 + j * 650, 34 + i * 400))
    out = os.path.join(R12, 'preview-bg-video.jpg'); sh.save(out, quality=86); print(out, sh.size)


if __name__ == '__main__':
    t0 = time.time()
    sheet('t1_gravity'); sheet('t2_closeup')
    video_frames([(slugs[0], 'navy-nebula'), (slugs[1], 'near-black'), (slugs[2], 'navy-glow')])
    print('done', round(time.time() - t0))
