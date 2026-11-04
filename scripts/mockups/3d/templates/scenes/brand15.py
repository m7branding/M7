"""brand15 — round 15: calm 3D presentations of the real brand boards (brandboards15.py).

  python brand15.py test <template> <pv|still> <slug> [tint]     r15/r3d/test-<template>.jpg
  python brand15.py render [slugs|all]                            r13/out/<slug>/r-6x-brand-*.webp (+ install)
  python brand15.py sheet                                         r15/r3d/sheet-brand3d.jpg

Per case two presentations: the logo-variants board on a wall (g01) and an open booklet whose spread shows the logo
and the colour/type pages (g02). Backdrops are neutral (warm light grey or anthracite); never a navy for a non-blue
brand, never an invented print.
"""
import sys, os, json, hashlib, shutil
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'lib')); sys.path.insert(0, HERE)
import numpy as np
from PIL import Image
import tcomp as C, backdrops as BD
import batch13 as B13
import brandboards15 as BB

S = BB.S
OUTD = os.path.join(S, 'r15', 'r3d')
LIGHT = ['#E4E2DE', '#DDDCD8', '#E9E7E3']
DARK = ['#2A2A2C', '#232325', '#303032']
SHOTS = [('g01_board_wall__a', 'g02_booklet__a'), ('g01_board_wall__b', 'g02_booklet__b'),
         ('g01_board_wall__a', 'g02_booklet__b'), ('g01_board_wall__b', 'g02_booklet__a')]


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def boards(slug):
    d = os.path.join(BB.OUT, slug)
    return dict(board=os.path.join(d, 'logos.png'), page_l=os.path.join(d, 'page-logos.png'),
                page_r=os.path.join(d, 'page-colours.png'), bcover=os.path.join(d, 'page-cover.png'))


def comp(t, base, slug, tint):
    tdir, meta = C.load_template(t)
    if base == 'still':
        pp = B13.prepared(t)
    else:
        fr = C.Frame(tdir, base, meta)
        pp = C.prepare(fr, exposure=meta.get('exposure', 0.0), look=meta.get('look', 'AgX - Medium High Contrast'))
    bl = BD.lin(tint)
    tints = {}
    for i, tr in enumerate(pp.get('tints') or []):
        f = 1.0 if i == 0 else (0.86 if bl.mean() > 0.3 else 1.3)
        tints[tr['role']] = np.clip(bl * f, 0, 1)
    pp = B13.upright(t, pp)
    bd = boards(slug); prints = {}
    for pr in pp['prints']:
        r0 = pr['role'].split('#')[0]
        if r0 in bd:
            im = Image.open(bd[r0]).convert('RGB')
            if pr.get('swap'): im = im.transpose(Image.ROTATE_90)
            prints[pr['role']] = C.PrintDesign(np.asarray(im))
        else:
            prints[pr['role']] = C.PrintDesign(np.full((148, 422, 3), 246, np.uint8))     # page block edge: plain paper
    dev = C.develop_set(pp, tints or None, prints)
    return Image.fromarray(C.over(pp, C.foreground(pp, {}, 0.25, 6, dev=dev), bg=None))


def plan(slug):
    k = h(slug)
    pair = SHOTS[k % len(SHOTS)]
    dark = (k >> 4) % 3 == 0          # mostly light, calm; a third on anthracite
    out = []
    for i, t in enumerate(pair):
        fam = (DARK if (dark if i == 0 else not dark and (k >> 6) % 2) else LIGHT)
        out.append((t, fam[(k >> (8 + i)) % len(fam)]))
    return out


def flat(slug):
    """The flat boards themselves (r-62 logo variants, r-63 colours & type), 2000 px wide, into the gallery."""
    od = os.path.join(B13.OUT, slug); sd = os.path.join(B13.SITE, slug); os.makedirs(od, exist_ok=True)
    names = []
    for j, f in enumerate(('logos.png', 'colours.png')):
        im = Image.open(os.path.join(BB.OUT, slug, f)).convert('RGB').resize((2000, 1125), Image.LANCZOS)
        n = f"r-6{2 + j}-brand-sheet-{f[:-4]}.webp"; im.save(os.path.join(od, n), quality=90, method=6); names.append(n)
        shutil.copy2(os.path.join(od, n), os.path.join(sd, n))
    return names


def render(slug, with_flat=True):
    if not os.path.exists(boards(slug)['board']): return slug, 'no boards'
    od = os.path.join(B13.OUT, slug); sd = os.path.join(B13.SITE, slug)
    os.makedirs(od, exist_ok=True)
    names = []
    for i, (t, tint) in enumerate(plan(slug)):
        im = comp(t, 'still', slug, tint)
        w = 2000; im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        n = f"r-6{i}-brand-{'wall' if t.startswith('g01') else 'booklet'}.webp"
        im.save(os.path.join(od, n), quality=86, method=6); names.append(n)
    for n in names: shutil.copy2(os.path.join(od, n), os.path.join(sd, n))
    if with_flat: names += flat(slug)       # the flat boards, in the gallery right after the presentations
    return slug, names


def sheet():
    from PIL import ImageDraw, ImageFont
    F = BB.inter('Medium', 14)
    sl = sorted(d for d in os.listdir(BB.OUT) if os.path.isdir(os.path.join(BB.OUT, d)))
    cw, ch = 420, 280
    rows = []
    for s in sl:
        fs = sorted(f for f in os.listdir(os.path.join(B13.SITE, s)) if f.startswith('r-6') and '-brand-' in f and 'sheet' not in f)
        if fs: rows.append((s, fs))
    sh = Image.new('RGB', (4 * (cw + 6) + 10, ((len(rows) + 1) // 2) * (ch + 22) + 6), (30, 30, 32)); d = ImageDraw.Draw(sh)
    for i, (s, fs) in enumerate(rows):
        x0 = (i % 2) * 2 * (cw + 6) + 5; y0 = (i // 2) * (ch + 22) + 3
        d.text((x0, y0), s, font=F, fill=(230, 230, 230))
        for j, f in enumerate(fs[:2]):
            im = Image.open(os.path.join(B13.SITE, s, f)); im.thumbnail((cw, ch)); sh.paste(im, (x0 + j * (cw + 6), y0 + 18))
    sh.save(os.path.join(OUTD, 'sheet-brand3d.jpg'), quality=84)


if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'test':
        t, base, slug = sys.argv[2:5]; tint = sys.argv[5] if len(sys.argv) > 5 else LIGHT[0]
        comp(t, base, slug, tint).save(os.path.join(OUTD, f'test-{t}.jpg'), quality=86)
    elif cmd == 'render':
        sel = sorted(d for d in os.listdir(BB.OUT) if os.path.isdir(os.path.join(BB.OUT, d))) if len(sys.argv) < 3 or sys.argv[2] == 'all' else sys.argv[2].split(',')
        for s in sel: print('brand3d', *render(s), flush=True)
    elif cmd == 'flat':
        sel = sorted(d for d in os.listdir(BB.OUT) if os.path.isdir(os.path.join(BB.OUT, d))) if len(sys.argv) < 3 or sys.argv[2] == 'all' else sys.argv[2].split(',')
        for s in sel: print('flat', s, flat(s), flush=True)
    elif cmd == 'sheet':
        sheet()
