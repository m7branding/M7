"""Round 21 shots: a 3D scene (any template camera, portrait or not) with the project's real screens, played as a
cinematic camera move: push, pull, truck, crane, arc with a little roll that settles. The screen content scrolls,
or plays a real recorded interaction (cursor, menus, configurators). Floating 3D cards of the f-templates can carry
brand cards (logo, palette) instead of UI snippets. Never upscaled: the crop window is always >= the output size.
Runs in the Blender venv from the live scenes dir.

  python shots21.py <json spec> <outdir>
  spec: {slug, t, secs, content: scroll|static|flow, flow_kind?, cam: {z: [z0, z1], d0: [dx, dy], d1: [dx, dy],
         r: [r0, r1], ease}, cards?: {snip_role: png}, still?: s (one frame only, for stories)}
"""
import os, sys, json, math
sys.path = [x for x in sys.path if os.path.abspath(x or '.') != os.path.dirname(os.path.abspath(__file__))]
SC = '/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r12/scenes'
sys.path.insert(0, os.path.join(os.path.dirname(SC), 'lib')); sys.path.insert(0, SC)
import numpy as np
import cv2
from PIL import Image
import video13 as V
import batch13 as B13
import proj as P
import flows as FL

S = '/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad'
R15 = os.path.join(S, 'r15', 'cap')
OW, OH = 1080, 1920
EASE = {
    'inOutSine': lambda s: 0.5 - 0.5 * math.cos(math.pi * s),
    'outCubic': lambda s: 1 - (1 - s) ** 3,
    'inOutQuart': lambda s: 8 * s ** 4 if s < 0.5 else 1 - (-2 * s + 2) ** 4 / 2,
    'drift': lambda s: 0.55 * s + 0.45 * (0.5 - 0.5 * math.cos(math.pi * s)),      # never stops dead
}


def base_st(slug, t):
    plan = json.load(open(os.path.join(S, 'r13/plan.json'))).get(slug, {})
    base = t.split('__')[0]
    for st in plan.get('stills', []):
        if st['t'].split('__')[0] == base:
            return dict(st, t=t)
    return dict(t=t, fam='light', bg='light-grey')


def roles_of(t):
    m = json.load(open(os.path.join(S, 'r12/tpl', t, 'meta.json')))
    return [x['role'] for x in m['screens'].values()]


def pick_flow(slug, t, kind=None, device=None):
    """A reviewed recording for this template's main screen (desktop on a mac/display/tablet, mobile on a phone)."""
    roles = roles_of(t)
    fls = FL.load(slug)
    if kind: fls = [x for x in fls if x['kind'] == kind] + [x for x in fls if x['kind'] != kind]
    for x in fls:
        if device and x['device'] != device: continue
        cand = ('phone_a', 'phone_b') if x['device'] == 'mobile' else ('studio', 'studio_b', 'mac', 'mac_b', 'tablet')
        role = next((r for r in cand if r in roles), None)
        if role: return x, role
    return None, None


def patch_cards(cards):
    """Fill the f-templates' floating cards with our own images (brand cards) instead of UI snippets."""
    import compositor as C  # noqa: F401  (pipeline module, loaded by batch13)
    orig = B13.snip_displays

    def snip_displays(slug, st, pp, meta):
        slots = B13.snip_slots(pp, meta)
        if not slots: return {}, {}
        out, edges = {}, {}
        for r, a in slots.items():
            src = cards.get(r) or next(iter(cards.values()))
            W = 1600; H = int(round(W / a))
            if src.endswith('.png'):                             # a real UI snippet: contain on its page colour
                im = Image.open(src).convert('RGBA')
                bg = Image.new('RGBA', im.size, (255, 255, 255, 255)); bg.alpha_composite(im); im = bg.convert('RGB')
                k = min(W * 0.9 / im.width, H * 0.86 / im.height)
                im = im.resize((max(1, int(im.width * k)), max(1, int(im.height * k))), Image.LANCZOS)
                card = Image.new('RGB', (W, H), (255, 255, 255)); card.paste(im, ((W - im.width) // 2, (H - im.height) // 2))
                arr = np.asarray(card)
            else:                                                # brand card art, made at this aspect: cover
                im = Image.open(src).convert('RGB')
                k = max(W / im.width, H / im.height)
                im = im.resize((max(W, int(im.width * k)), max(H, int(im.height * k))), Image.LANCZOS)
                x0 = (im.width - W) // 2; y0 = (im.height - H) // 2
                arr = np.asarray(im.crop((x0, y0, x0 + W, y0 + H)))
            out[r] = B13.C.Display(W, H, arr, 0, None)
            edges['cedge_' + r.split('_')[1]] = tuple(int(v) for v in arr[2, 2])
        return out, edges
    B13.snip_displays = snip_displays
    return orig


def make(spec):
    slug, t = spec['slug'], spec['t']
    V.MW, V.MH = OW, OH
    cs = B13.cases()
    p = P.projects().get(slug)
    caps = P.captures(p) if p else {}
    brand = B13.brand_for(slug, cs[slug], caps)
    st = base_st(slug, t)
    if spec.get('fam'): st = dict(st, fam=spec['fam'], bg=spec.get('bg', st.get('bg')))
    sp = dict(st=st, move='ease', scroll=spec.get('content') == 'scroll')
    if spec.get('content') == 'flow':
        if spec.get('flow'):            # an r15 2x virtual-time take (2880x1800 desktop, 780x1688 mobile), by file name
            xs = json.load(open(os.path.join(R15, slug, 'flows.json')))
            x = dict(next(f for f in xs if f['file'] == spec['flow']), path=os.path.join(R15, slug, spec['flow']))
            roles = roles_of(t)
            cand = ('phone_a', 'phone_b') if x['device'] == 'mobile' else ('studio', 'studio_b', 'mac', 'mac_b', 'tablet')
            role = next((r for r in cand if r in roles), None)
            if role is None: raise SystemExit(f'{slug}: {t} has no {x["device"]} screen')
            t0 = float(spec.get('ft0', 0.0)); t1 = min(x['duration'] - 0.04, t0 + spec['secs'] * float(spec.get('speed', 1.0)))
        else:
            x, role = pick_flow(slug, t, spec.get('flow_kind'), spec.get('device'))
            if x is None: raise SystemExit(f'{slug}: no recording fits {t}')
            t0, t1 = FL.window(x, spec['secs'])
        sp['flow'] = dict(path=x['path'], kind=x.get('kind', 'flow'), device=x['device'], role=role, t0=t0, t1=t1, size=x['size'], trim_top=x.get('trim_top') or 0)
    if spec.get('cards'): patch_cards(spec['cards'])
    sh = V.Shot(slug, cs[slug], caps, brand, sp, {})
    return sh


class Cam:
    """A camera path over the composited scene: window centre relative to the subject (in window units), zoom
    (1 = the widest 9:16 crop that fits), roll in degrees. The crop never gets smaller than the output."""

    def __init__(self, pp, cam):
        W, H = pp['W'], pp['H']
        (cx, cy, bw, bh), _ = V.subject(pp)
        self.W, self.H, self.cx, self.cy = W, H, cx, cy
        self.w1 = min(W, H * OW / OH)                     # widest 9:16 window
        zmax = self.w1 / OW                               # beyond this we would upscale
        self.c = cam
        self.z = [min(max(z, 1.0), max(1.0, zmax)) for z in cam.get('z', [1.0, 1.1])]
        self.d0, self.d1 = cam.get('d0', [0, 0]), cam.get('d1', [0, 0])
        self.r = cam.get('r', [0, 0])
        self.ease = EASE[cam.get('ease', 'drift')]

    def at(self, s):
        e = self.ease(min(max(s, 0.0), 1.0))
        z = self.z[0] * (self.z[1] / self.z[0]) ** e
        w = self.w1 / z; h = w * OH / OW
        dx = self.d0[0] + (self.d1[0] - self.d0[0]) * e; dy = self.d0[1] + (self.d1[1] - self.d0[1]) * e
        th = math.radians(self.r[0] + (self.r[1] - self.r[0]) * e)
        # keep the rotated window inside the image
        bw = w * abs(math.cos(th)) + h * abs(math.sin(th)); bh = w * abs(math.sin(th)) + h * abs(math.cos(th))
        if bw > self.W or bh > self.H:                    # too much roll for this zoom: scale the window down to fit
            k = min(self.W / bw, self.H / bh); w *= k; h *= k; bw *= k; bh *= k
        cx = min(max(self.cx + dx * w, bw / 2), self.W - bw / 2)
        cy = min(max(self.cy + dy * h, bh / 2), self.H - bh / 2)
        return cx, cy, w, th

    def warp(self, img, s):
        cx, cy, w, th = self.at(s)
        k = w / OW
        if k > 1.05:
            img = cv2.GaussianBlur(img, (0, 0), 0.42 * (k - 1.0) ** 0.5 * 1.6)
        c, sn = math.cos(th), math.sin(th)
        A = np.array([[k * c, -k * sn], [k * sn, k * c]])
        b = np.array([cx, cy]) - A @ np.array([OW / 2, OH / 2])
        M = np.hstack([A, b[:, None]]).astype(np.float64)
        return cv2.warpAffine(img, M, (OW, OH), flags=cv2.INTER_CUBIC | cv2.WARP_INVERSE_MAP, borderMode=cv2.BORDER_REFLECT)


class Still:
    """A static composite (a design project's Figma export on the scene) with the Shot interface we use."""

    def __init__(self, spec):
        import dev16 as D
        t = spec['t']
        plan = D.plan()[spec['slug']]
        first = []
        for e in plan:
            for x in (e['src'].values() if isinstance(e['src'], dict) else [e['src']]):
                if x not in first: first.append(x)
        src = first[int(spec.get('i', 0)) % len(first)]
        e = next(x for x in plan if src in (x['src'].values() if isinstance(x['src'], dict) else [x['src']]))
        e = {k: v for k, v in e.items() if k in ('tint', 'blur', 'mode', 'y0', 'x0', 'crop')}
        if spec.get('tint'): e['tint'] = spec['tint']
        roles = [r for r in roles_of(t) if not r.startswith(('snip', 'phone'))] or roles_of(t)[:1]
        e = dict(e, t=t, src={r: src for r in roles})
        self.img = np.asarray(D.comp(spec['slug'], e).convert('RGB')).astype(np.float32)
        self.S = dict(pp=B13.prepared(t))

    def image(self, s):
        return self.img


def run(spec, outd):
    sh = Still(spec) if spec.get('content') == 'design' else make(spec)
    cam = Cam(sh.S['pp'], spec.get('cam', {}))
    os.makedirs(outd, exist_ok=True)
    if spec.get('still') is not None:
        s = float(spec['still'])
        fr = cam.warp(sh.image(s), s)
        Image.fromarray(np.clip(fr, 0, 255).astype(np.uint8)).save(os.path.join(outd, 'still.jpg'), quality=95)
        return 1
    n = int(round(spec['secs'] * 30))
    for i in range(n):
        s = i / max(1, n - 1)
        fr = cam.warp(sh.image(s), s)
        Image.fromarray(np.clip(fr, 0, 255).astype(np.uint8)).save(os.path.join(outd, f'{i + 1:05d}.jpg'), quality=93)
    return n


if __name__ == '__main__':
    spec = json.loads(sys.argv[1]) if sys.argv[1].startswith('{') else json.load(open(sys.argv[1]))
    print('frames', run(spec, sys.argv[2]))
