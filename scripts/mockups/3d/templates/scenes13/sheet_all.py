"""Checkpoint sheet: every template composition (pv or final still) with a real project + brand, varied backgrounds."""
import sys, os, json, glob
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'lib'))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'scenes'))
from PIL import Image, ImageDraw, ImageFont
import tcomp as C, proj as P
import batch13 as B13
out = sys.argv[1]; pattern = sys.argv[2] if len(sys.argv) > 2 else '[bdt][0-9]*'
DEV = ['huurfix', 'atl-plus', 'steddion', 'impeco', 'kippenkar', 'electriffy', 'silvr', 'plenty-planet', 'the-sandt', 'jurgh-detailing',
       'edgeway-commodities', 'pine-street-school', 'buitenstate', 'outplay', 'calvin-vlaanderen', 'jalo-energy', 'boutique-hotels-gelderland']
BRD = ['jurgh-detailing', 'atl-plus', 'kippenkar', 'bernheze-makelaars-rebranding', 'nktv', 'sublime-branding', 'sparked', 'happy-horse-sales']
SOC = ['sublime-branding', 'jurgh-detailing', 'atl-plus']
FAMS = ['light', 'dark', 'brand', 'light', 'navy', 'brand', 'dark', 'light']
cs = B13.cases(); lib = B13.library(final=False, portrait=bool(os.environ.get('R13_PORTRAIT')))
F = ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', 15)
cells = []; i_dev = i_brd = 0
for k, (t, L) in enumerate(sorted(lib.items())):
    if 'social' in L['roles']:
        slug = SOC[k % len(SOC)]
    elif L['prints'] and not L['roles']:
        slug = BRD[i_brd % len(BRD)]; i_brd += 1
    elif L['prints']:
        slug = ['jurgh-detailing', 'atl-plus', 'kippenkar', 'bernheze-makelaars-rebranding'][k % 4]
    else:
        slug = DEV[i_dev % len(DEV)]; i_dev += 1
    fam = os.environ.get('FORCE_FAM') or FAMS[k % len(FAMS)]
    st = dict(t=t, fam=fam)
    if L['transparent']:
        opts = B13.FAM_TO_BG[fam]; st['bg'] = opts[k % len(opts)]
    else:
        st['tint'] = os.environ.get('FORCE_TINT') or (None if fam == 'brand' else B13.NEUTRAL[fam][k % len(B13.NEUTRAL[fam])])
    p = P.projects().get(slug); caps = P.captures(p) if p else {}
    try:
        im = B13.render_still(slug, cs[slug], st, caps, B13.brand_for(slug, cs[slug], caps), {}, {})
    except Exception as e:
        import traceback; traceback.print_exc(); print('ERR', t, e); continue
    im.thumbnail((470, 470) if im.width >= im.height else (300, 533)); cells.append((im, f"{t}  ·  {slug}  ·  {st.get('bg') or st.get('tint') or 'brand-dark'}  [{L['base']}]"))
    print(t, slug, flush=True)
cols = 5; cw = 480; chh = max(c[0].height for c in cells) + 24
sh = Image.new('RGB', (cols * cw + 10, ((len(cells) + cols - 1) // cols) * chh + 10), (24, 24, 26)); d = ImageDraw.Draw(sh)
for i, (im, lab) in enumerate(cells):
    x = 10 + (i % cols) * cw; y = 10 + (i // cols) * chh; sh.paste(im, (x, y)); d.text((x, y + im.height + 3), lab, font=F, fill=(220, 220, 224))
sh.save(out, quality=84); print(out, len(cells))
