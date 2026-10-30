"""Build UI card PNGs (white rounded panels) from crisp DPR-3 element captures of misterglass.nl."""
import os
from PIL import Image, ImageDraw
HERE = os.path.dirname(os.path.abspath(__file__)); R11 = os.path.dirname(HERE)
EL = os.path.join(R11, 'cap', 'el'); TEX = os.path.join(R11, 'tex')

def L(n): return Image.open(os.path.join(EL, n)).convert('RGB')

def trim(im, bg=(255, 255, 255), tol=6, pad=0):
    import numpy as np
    a = np.asarray(im).astype(int); d = np.abs(a - np.array(bg)).sum(-1) > tol
    ys, xs = np.where(d)
    return im.crop((max(0, xs.min() - pad), max(0, ys.min() - pad), min(im.width, xs.max() + 1 + pad), min(im.height, ys.max() + 1 + pad)))

def stack(parts, pad=90, gap=60, bg=(255, 255, 255), width=None):
    W = width or max(p.width for p, _ in parts) + 2 * pad
    H = sum(p.height for p, _ in parts) + gap * (len(parts) - 1) + 2 * pad
    c = Image.new('RGB', (W, H), bg); y = pad
    for p, align in parts:
        x = pad if align == 'l' else (W - p.width) // 2
        c.paste(p, (x, y)); y += p.height + gap
    return c

def save(im, n): im.save(os.path.join(TEX, n)); print(n, im.size)

if __name__ == '__main__':
    dims = trim(L('prod-dims.png')); _t = L('prod-totals.png'); tot = trim(_t.crop((0, 0, _t.width, _t.height - 75))); cart = trim(L('prod-cart.png'))
    var = trim(L('prod-variations.png')); price = trim(L('prod-price.png'))
    W = tot.width + 180
    # price calculator: dimensions + totals + add-to-cart
    save(stack([(dims, 'l'), (tot, 'l'), (cart, 'l')], pad=90, gap=80, width=W), 'card-calc.png')
    # configurator options (selects)
    save(stack([(var, 'l')], pad=90, width=var.width + 180), 'card-options.png')
    save(stack([(price, 'l')], pad=60, width=price.width + 120), 'card-price.png')
    save(stack([(cart, 'l')], pad=50), 'card-cart.png')
    # shop product card (Isolatieglas HR++ 1.0)
    sc = trim(L('shop-card1.png'))
    save(stack([(sc, 'c')], pad=70), 'card-product.png')
    sc2 = trim(L('shop-card2.png'))
    save(stack([(sc2, 'c')], pad=70), 'card-product2.png')
    # hero CTA (on its blue photo bg) and headline
    _c = L('home-cta.png'); save(_c.crop((30, 30, _c.width - 30, _c.height - 30)), 'card-cta.png')
    hl = L('home-headline.png'); save(hl, 'card-headline.png')
    web = Image.open(os.path.join(R11, 'cap', 'screens', 'web-home.png')).convert('RGB')
    save(web.crop((162, 450, 2718, 1742)), 'card-hero.png')
    # logo tile on the site's off-white
    lg = Image.open(os.path.join(EL, 'logo.png')).convert('RGBA')
    t = Image.new('RGBA', (lg.width + 260, lg.height + 220), (248, 248, 245, 255)); t.alpha_composite(lg, (130, 110)); save(t.convert('RGB'), 'card-logo.png')
    # review badge on the site's green top bar
    rv = Image.open(os.path.join(EL, 'review.png')).convert('RGBA')
    t = Image.new('RGBA', (rv.width + 160, rv.height + 110), (60, 116, 95, 255)); t.alpha_composite(rv, (80, 55)); save(t.convert('RGB'), 'card-review.png')
