"""Copy final renders to the site + build the contact sheet. usage: python3 finalize.py [--copy]"""
import os, sys, shutil, glob
from PIL import Image, ImageDraw, ImageFont
R11 = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(R11, 'out'); DST = os.path.join(R11, '..', '..', '..', 'public', 'media', 'cases', 'misterglass')
NAMES = ['r-01-desk', 'r-02-macbook', 'r-03-phone-card', 'r-04-floating-ui', 'r-05-iso', 'r-06-ipad-top',
         'r-07-browsers', 'r-08-macro', 'r-09-iphones', 'r-10-glass']
VIDS = ['r-hero-a', 'r-hero-b']
items = [n for n in NAMES if os.path.exists(os.path.join(OUT, n + '.webp'))]
posters = [v for v in VIDS if os.path.exists(os.path.join(OUT, v + '.webp'))]
if '--copy' in sys.argv:
    for n in items: shutil.copy2(os.path.join(OUT, n + '.webp'), os.path.join(DST, n + '.webp'))
    for v in posters:
        shutil.copy2(os.path.join(OUT, v + '.webp'), os.path.join(DST, v + '.webp'))
        if os.path.exists(os.path.join(OUT, v + '.mp4')): shutil.copy2(os.path.join(OUT, v + '.mp4'), os.path.join(DST, v + '.mp4'))
    print('copied', items, posters)
# contact sheet: 3 columns, each cell 800 px wide, label underneath
F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 22)
cells = []
for n in items + posters:
    im = Image.open(os.path.join(OUT, n + '.webp')).convert('RGB')
    kb = os.path.getsize(os.path.join(OUT, n + '.webp')) // 1024
    lab = f'{n}.webp  {im.width}x{im.height}  {kb} KB'
    if n in posters and os.path.exists(os.path.join(OUT, n + '.mp4')):
        lab = f'{n}.mp4 poster  ({os.path.getsize(os.path.join(OUT, n + ".mp4")) / 1048576:.1f} MB video)'
    im.thumbnail((800, 640)); cells.append((im, lab))
cols = 3; cw, chh = 820, 700
rows = (len(cells) + cols - 1) // cols
sheet = Image.new('RGB', (cols * cw + 20, rows * chh + 20), (24, 24, 26))
d = ImageDraw.Draw(sheet)
for i, (im, lab) in enumerate(cells):
    x = 20 + (i % cols) * cw; y = 20 + (i // cols) * chh
    sheet.paste(im, (x, y)); d.text((x, y + im.height + 10), lab, font=F, fill=(220, 220, 224))
sheet.save(os.path.join(R11, 'r3d-sheet.jpg'), quality=86)
print('sheet', sheet.size, len(cells))
