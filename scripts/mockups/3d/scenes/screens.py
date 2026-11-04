"""Compose device screen textures from website captures (PIL).
Writes RGBA textures for each device's whole FRONT GLASS (bezel black, alpha = lit display area)
into r11/tex/. Run: python3 screens.py"""
import os, sys, json
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageChops
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from lib.spec import IPHONE17PRO, MBP14, STUDIO, IPADPRO13, rrect, disp_mm
R11 = os.path.dirname(HERE); CAP = os.path.join(R11, 'cap'); TEX = os.path.join(R11, 'tex')
os.makedirs(TEX, exist_ok=True)
FONT = '/usr/share/fonts/opentype/inter/Inter-%s.otf'
def font(w, size): return ImageFont.truetype(FONT % w, int(size))

def shape_mask(size, outline_px, ss=4):
    """outline_px: list of (x,y) in px (y down). Anti-aliased L mask."""
    W, H = size
    m = Image.new('L', (W * ss, H * ss), 0)
    ImageDraw.Draw(m).polygon([(x * ss, y * ss) for x, y in outline_px], fill=255)
    return m.resize((W, H), Image.LANCZOS)

def rr_px(cx, cy, w, h, r, continuous=True, n=40):
    return [(cx + x, cy - y) for x, y in rrect(w, h, r, n=n, continuous=continuous)]

def load(p): return Image.open(p).convert('RGB')

# ------------------------------------------------------------------ UI chrome
def mac_toolbar(w, h, scale=2, url='misterglass.nl', dark=False):
    """Generic light browser toolbar (no brand marks): traffic lights, nav, URL field."""
    s = scale
    bar = Image.new('RGB', (w, h), (246, 246, 246))
    d = ImageDraw.Draw(bar)
    d.line([(0, h - 1), (w, h - 1)], fill=(214, 214, 214), width=max(1, s // 2 + 1))
    cy = h / 2
    for i, col in enumerate([(255, 95, 87), (254, 188, 46), (40, 200, 64)]):
        x = 20 * s + i * 20 * s; r = 6 * s
        d.ellipse([x - r, cy - r, x + r, cy + r], fill=col, outline=tuple(int(c * 0.86) for c in col), width=max(1, s // 2))
    # sidebar + back/forward glyphs
    x0 = 90 * s; g = (120, 120, 124)
    d.rounded_rectangle([x0, cy - 7 * s, x0 + 18 * s, cy + 7 * s], radius=3 * s, outline=g, width=int(1.4 * s))
    d.line([(x0 + 7 * s, cy - 7 * s), (x0 + 7 * s, cy + 7 * s)], fill=g, width=int(1.4 * s))
    for k, x in enumerate([x0 + 44 * s, x0 + 70 * s]):
        dx = -1 if k == 0 else 1
        d.line([(x + 3 * s * dx, cy - 6 * s), (x - 3 * s * dx, cy), (x + 3 * s * dx, cy + 6 * s)], fill=g if k == 0 else (190, 190, 194), width=int(1.8 * s), joint='curve')
    # url field
    fw = min(int(w * 0.42), 560 * s); fh = 30 * s
    fx = (w - fw) // 2
    d.rounded_rectangle([fx, cy - fh / 2, fx + fw, cy + fh / 2], radius=8 * s, fill=(232, 232, 235))
    f = font('Medium', 13 * s)
    tw = d.textlength(url, font=f)
    tx = fx + (fw - tw) / 2 + 6 * s
    # lock glyph
    lx = tx - 14 * s
    d.rounded_rectangle([lx - 4.5 * s, cy - 1 * s, lx + 4.5 * s, cy + 6 * s], radius=1.5 * s, fill=(110, 110, 114))
    d.arc([lx - 3 * s, cy - 7 * s, lx + 3 * s, cy + 2 * s], 180, 360, fill=(110, 110, 114), width=int(1.4 * s))
    d.text((tx, cy), url, font=f, fill=(40, 40, 42), anchor='lm')
    # right side: share + new tab + tabs glyphs
    xr = w - 26 * s
    d.line([(xr - 7 * s, cy), (xr + 7 * s, cy)], fill=g, width=int(1.6 * s)); d.line([(xr, cy - 7 * s), (xr, cy + 7 * s)], fill=g, width=int(1.6 * s))
    xr -= 34 * s
    d.rounded_rectangle([xr - 7 * s, cy - 4 * s, xr + 7 * s, cy + 8 * s], radius=2 * s, outline=g, width=int(1.4 * s))
    d.line([(xr, cy - 9 * s), (xr, cy + 2 * s)], fill=g, width=int(1.4 * s)); d.line([(xr - 4 * s, cy - 5 * s), (xr, cy - 9 * s), (xr + 4 * s, cy - 5 * s)], fill=g, width=int(1.4 * s))
    return bar

def status_icons(d, xr, cy, s, col):
    """iOS-like cellular / wifi / battery glyphs ending at xr (right edge)."""
    # battery
    bw, bh = 25 * s, 12 * s
    x1 = xr - 3 * s; x0 = x1 - bw
    d.rounded_rectangle([x0, cy - bh / 2, x1, cy + bh / 2], radius=3.6 * s, outline=col + (110,), width=int(1.1 * s))
    d.rounded_rectangle([x0 + 2 * s, cy - bh / 2 + 2 * s, x1 - 2 * s, cy + bh / 2 - 2 * s], radius=2 * s, fill=col + (255,))
    d.rounded_rectangle([x1 + 1 * s, cy - 2 * s, x1 + 2.6 * s, cy + 2 * s], radius=1 * s, fill=col + (110,))
    # wifi
    wx = x0 - 15 * s; wy = cy + 5 * s
    for i, rad in enumerate([11 * s, 7.2 * s, 3.4 * s]):
        if i < 2:
            d.arc([wx - rad, wy - rad, wx + rad, wy + rad], 225, 315, fill=col + (255,), width=int(2.3 * s))
        else:
            d.pieslice([wx - rad, wy - rad, wx + rad, wy + rad], 225, 315, fill=col + (255,))
    # cellular
    cx0 = wx - 34 * s
    for i in range(4):
        hh = (4 + i * 2.6) * s
        d.rounded_rectangle([cx0 + i * 5 * s, cy + 6 * s - hh, cx0 + i * 5 * s + 3.2 * s, cy + 6 * s], radius=1 * s, fill=col + (255,))

def iphone_display(web, url='misterglass.nl'):
    W, H = IPHONE17PRO['px']; sh = IPHONE17PRO['status_h']; s = 3
    img = Image.new('RGB', (W, H), web.getpixel((4, 4)))
    web = web.crop((0, 0, W, min(web.height, H - sh)))
    img.paste(web, (0, sh))
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
    col = (16, 16, 18)
    d.text((W * 0.165, 31 * s), '9:41', font=font('SemiBold', 17 * s), fill=col + (255,), anchor='mm')
    status_icons(d, W - 26 * s, 31 * s, s, col)
    img = Image.alpha_composite(img.convert('RGBA'), ov)
    # floating (Liquid-Glass-like) URL pill at the bottom
    pw, ph = 362 * s, 48 * s; px0 = (W - pw) // 2; py0 = H - 34 * s - ph
    blur = img.crop((px0 - 40, py0 - 40, px0 + pw + 40, py0 + ph + 40)).filter(ImageFilter.GaussianBlur(26))
    frost = Image.blend(blur.convert('RGB'), Image.new('RGB', blur.size, (250, 250, 252)), 0.72).convert('RGBA')
    m = shape_mask(blur.size, rr_px(blur.width / 2, blur.height / 2, pw, ph, ph / 2, continuous=False))
    sh_m = m.filter(ImageFilter.GaussianBlur(14)).point(lambda v: int(v * 0.22))
    shadow = Image.new('RGBA', blur.size, (0, 0, 0, 255)); shadow.putalpha(sh_m)
    tile = img.crop((px0 - 40, py0 - 40 + 6, px0 + pw + 40, py0 + ph + 40 + 6)); tile = Image.alpha_composite(tile, shadow)
    img.paste(tile, (px0 - 40, py0 - 40 + 6))
    img.paste(frost, (px0 - 40, py0 - 40), m)
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([px0, py0, px0 + pw, py0 + ph], radius=ph / 2, outline=(255, 255, 255, 200), width=2)
    d.text((W / 2, py0 + ph / 2), url, font=font('Medium', 15.5 * s), fill=(24, 24, 26), anchor='mm')
    d.text((px0 + 24 * s, py0 + ph / 2 - 3), 'aA', font=font('SemiBold', 14 * s), fill=(24, 24, 26), anchor='lm')
    cx = px0 + pw - 26 * s; cy = py0 + ph / 2
    d.arc([cx - 8 * s, cy - 8 * s, cx + 8 * s, cy + 8 * s], 300, 250, fill=(24, 24, 26), width=int(2 * s))
    d.polygon([(cx + 1 * s, cy - 11 * s), (cx + 6 * s, cy - 8 * s), (cx + 1 * s, cy - 4.5 * s)], fill=(24, 24, 26))
    # home indicator
    d.rounded_rectangle([W / 2 - 67 * s, H - 8 * s - 5 * s, W / 2 + 67 * s, H - 8 * s], radius=2.5 * s, fill=(12, 12, 14))
    return img.convert('RGB')

def mac_display(web, k=1.0):
    W, H = [round(v * k) for v in MBP14['px']]; mb, tb = round(MBP14['menubar_px'] * k), round(MBP14['toolbar_px'] * k)
    img = Image.new('RGB', (W, H), (0, 0, 0))
    img.paste(mac_toolbar(W, tb, round(2 * k)), (0, mb))
    img.paste(web.crop((0, 0, W, H - mb - tb)), (0, mb + tb))
    return img

def studio_display(web):
    W, H = STUDIO['px']; mb, tb = STUDIO['menubar_px'], STUDIO['toolbar_px']; s = 2
    img = Image.new('RGB', (W, H), (236, 236, 238))
    d = ImageDraw.Draw(img, 'RGBA')
    d.rectangle([0, 0, W, mb], fill=(232, 232, 235))
    d.text((W - 16 * s, mb / 2), 'do 30 okt  9:41', font=font('Medium', 13 * s), fill=(30, 30, 32), anchor='rm')
    status_icons(d, W - 150 * s, mb / 2, 0.9 * s, (30, 30, 32))
    img.paste(mac_toolbar(W, tb, 2), (0, mb))
    img.paste(web.crop((0, 0, W, H - mb - tb)), (0, mb + tb))
    return img

def ipad_display(web):
    W, H = IPADPRO13['px']; sb, tb = IPADPRO13['status_px'], IPADPRO13['toolbar_px']; s = 2
    img = Image.new('RGB', (W, H), (248, 248, 248))
    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
    d.text((22 * s, sb / 2 + 2), '9:41  do 30 okt', font=font('SemiBold', 12 * s), fill=(20, 20, 22, 255), anchor='lm')
    status_icons(d, W - 20 * s, sb / 2 + 2, 0.85 * s, (20, 20, 22))
    img = Image.alpha_composite(img.convert('RGBA'), ov).convert('RGB')
    bar = mac_toolbar(W, tb, 2)
    # iPad Safari has no traffic lights: cover them
    ImageDraw.Draw(bar).rectangle([0, 0, 82 * s, tb - 3], fill=(246, 246, 246))
    img.paste(bar, (0, sb))
    img.paste(web.crop((0, 0, W, H - sb - tb)), (0, sb + tb))
    return img

def browser_window(web, tb=104):
    W = web.width; H = web.height + tb
    img = Image.new('RGB', (W, H)); img.paste(mac_toolbar(W, tb, 2), (0, 0)); img.paste(web, (0, tb))
    a = shape_mask((W, H), rr_px(W / 2, H / 2, W, H, 22, continuous=False))
    img = img.convert('RGBA'); img.putalpha(a)
    ImageDraw.Draw(img).rounded_rectangle([0, 0, W - 1, H - 1], radius=22, outline=(0, 0, 0, 40), width=2)
    return img

# ------------------------------------------------------------------ glass textures
def glass_texture(display, glass_mm, disp_rect_mm, ppm, disp_r, extra=None, continuous=True):
    """display: PIL RGB display image. glass_mm: (w,h) of the glass panel. disp_rect_mm: (x0,y0,w,h) of the
    display inside the glass, measured from the glass top-left. Returns RGBA, alpha = lit display mask."""
    gw, gh = round(glass_mm[0] * ppm), round(glass_mm[1] * ppm)
    x0, y0, dw, dh = [v * ppm for v in disp_rect_mm]
    tex = Image.new('RGB', (gw, gh), (0, 0, 0))
    disp = display.resize((round(dw), round(dh)), Image.LANCZOS)
    tex.paste(disp, (round(x0), round(y0)))
    mask = shape_mask((gw, gh), rr_px(x0 + dw / 2, y0 + dh / 2, dw, dh, [v * ppm for v in disp_r] if isinstance(disp_r, tuple) else disp_r * ppm, continuous=continuous))
    if extra: mask = extra(mask, ppm, (x0, y0, dw, dh))
    black = Image.new('RGB', (gw, gh), (0, 0, 0))
    tex = Image.composite(tex, black, mask)
    tex = tex.convert('RGBA'); tex.putalpha(mask)
    return tex

def iphone_glass(display):
    S = IPHONE17PRO; gi = S['glass_inset']
    gw, gh = S['W'] - 2 * gi, S['H'] - 2 * gi
    dw, dh = disp_mm(S); ppm = S['px'][0] / dw
    def island(mask, ppm, rect):
        x0, y0, dw_, dh_ = rect; iw, ih, it = [v * ppm for v in S['island']]
        cx = x0 + dw_ / 2; cy = y0 + it + ih / 2
        isl = shape_mask(mask.size, rr_px(cx, cy, iw, ih, ih / 2, continuous=False))
        return ImageChops.subtract(mask, isl)
    return glass_texture(display, (gw, gh), ((gw - dw) / 2, (gh - dh) / 2, dw, dh), ppm, S['disp_r'], island)

def mac_glass(display):
    S = MBP14; gi = 0.6
    gw, gh = S['W'] - 2 * gi, S['lid_L'] - 2 * gi
    dw, dh = disp_mm(S); ppm = display.width / dw
    x0 = (gw - dw) / 2; y0 = S['bezel_top'] - gi
    def notch(mask, ppm, rect):
        x0_, y0_, dw_, dh_ = rect; nw, nh, nr = S['notch']
        cx = x0_ + dw_ / 2
        pts = rr_px(cx, y0_ - 10 * ppm + (nh * ppm + 10 * ppm) / 2, nw * ppm, nh * ppm + 10 * ppm, (0, 0, nr * ppm, nr * ppm), continuous=True)
        return ImageChops.subtract(mask, shape_mask(mask.size, pts))
    r = S['disp_r_top']
    return glass_texture(display, (gw, gh), (x0, y0, dw, dh), ppm, (r, r, 0.0, 0.0), notch)

def studio_glass(display):
    S = STUDIO; gi = 0.5
    gw, gh = S['W'] - 2 * gi, S['H'] - 2 * gi
    dw, dh = disp_mm(S); ppm = S['px'][0] / dw
    return glass_texture(display, (gw, gh), ((gw - dw) / 2, (gh - dh) / 2, dw, dh), ppm, 0.0)

def ipad_glass(display):
    S = IPADPRO13; gi = 0.5
    gw, gh = S['W'] - 2 * gi, S['H'] - 2 * gi
    dw, dh = disp_mm(S); ppm = S['px'][0] / dw
    tex = glass_texture(display, (gw, gh), ((gw - dw) / 2, (gh - dh) / 2, dw, dh), ppm, S['disp_r'])
    # front camera in the landscape top bezel
    d = ImageDraw.Draw(tex); cx = tex.width / 2; cy = ((gh - dh) / 2) * ppm / 2; r = 1.1 * ppm
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(14, 15, 20, 0))
    d.ellipse([cx - r * 0.45, cy - r * 0.45, cx + r * 0.45, cy + r * 0.45], fill=(22, 26, 40, 0))
    return tex

def save(img, name):
    p = os.path.join(TEX, name); img.save(p, optimize=False); print('wrote', name, img.size)

if __name__ == '__main__':
    SC = os.path.join(CAP, 'screens')
    pf = load(os.path.join(SC, 'iphone-product-full.png')); hf = load(os.path.join(SC, 'iphone-home-full.png'))
    WEBH = IPHONE17PRO['web_h']
    rects = json.load(open(os.path.join(SC, 'meta.json')))
    form_y = int(rects['iphone-product']['form'][1] * 3)
    phone_screens = {
        'product': pf.crop((0, 0, 1206, WEBH)),
        'config': pf.crop((0, form_y - 60, 1206, form_y - 60 + WEBH)),
        'config2': pf.crop((0, form_y + 1100, 1206, form_y + 1100 + WEBH)),
        'shop': hf.crop((0, 3330, 1206, 3330 + WEBH)),
        'home': hf.crop((0, 0, 1206, WEBH)),
    }
    for k, v in phone_screens.items():
        disp = iphone_display(v); disp.save(os.path.join(TEX, f'iphone-{k}-display.png'))
        save(iphone_glass(disp), f'iphone-{k}.png')
    for k in ['home', 'shop', 'product', 'config']:
        save(mac_glass(mac_display(load(os.path.join(SC, f'mbp-{k}.png')))), f'mbp-{k}.png')
        save(studio_glass(studio_display(load(os.path.join(SC, f'sd-{k}.png')))), f'studio-{k}.png')
        save(ipad_glass(ipad_display(load(os.path.join(SC, f'ipad-{k}.png')))), f'ipad-{k}.png')
    save(mac_glass(mac_display(load(os.path.join(SC, 'mbp3x-config.png')), k=1.5)), 'mbp3x-config.png')
    for k in ['home', 'shop', 'product', 'config']:
        save(browser_window(load(os.path.join(SC, f'web-{k}.png'))), f'browser-{k}.png')
