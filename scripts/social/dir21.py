"""Round 21: one signature reel per project, each with its own direction: its own camera angles (new portrait
cameras per scene), its own camera moves, real recorded interactions on the screens (cursor, menus, configurators),
real UI snippets and brand assets (logo, verified palette) floating and stacking in 3D, its own transition family,
pacing and music. Same frame as round 20: the M7 emblem intro, glass service labels, the M7 outro.

  python dir21.py <project ...|pilot>
"""
import hashlib
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import lib  # noqa: E402
import audio  # noqa: E402
from clean19 import outro  # noqa: E402

S = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad"
R = Path(S) / "r21"
SH = R / "shots"
OUT = R / "out"
VENV = f"{S}/r11/venv/bin/python"
HERE = Path(__file__).resolve().parent
SHOTS, B20 = str(HERE / "shots21.py"), str(HERE / "book20.py")
SCENES = f"{S}/r12/scenes"
CAP15 = Path(S) / "r15" / "cap"
CASES = Path("/home/user/M7/public/media/cases")
PAL = json.load(open(f"{S}/r14/palette/palettes.json"))
W, H = 1080, 1920
XF = 0.7


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


def venv(*a):
    r = subprocess.run([VENV, *map(str, a)], cwd=SCENES, capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError(f"{a[:3]}: {r.stderr[-1500:]}")
    return r.stdout


# ---------------------------------------------------------------- assets
def snip(slug, name):
    """A reviewed r15 2x close-up / snippet: (file url, w, h, has_alpha)."""
    from PIL import Image
    p = CAP15 / slug / name
    im = Image.open(p)
    return {"src": lib.furl(p), "aw": im.width, "ah": im.height, "alpha": im.mode in ("RGBA", "LA")}


def palette(slug, n=5):
    p = PAL[slug]
    cols = [p.get("fullBleed")] + list(p["logo"]["colors"]) + list(p.get("accent") or []) + [p["neutrals"].get("dark"), p["neutrals"].get("light")]
    out = []
    for c in cols:                     # skip near-duplicates (#FFFFFF next to #F8F8F8 reads as the same chip)
        if c and all(sum((a - b) ** 2 for a, b in zip(rgb(c), rgb(x))) > 18 ** 2 for x in out):
            out.append(c.upper())
    return out[:n]


def rgb(hx):
    hx = hx.lstrip("#")
    return tuple(int(hx[i:i + 2], 16) for i in (0, 2, 4))


def light(hx):
    r, g, b = rgb(hx)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b > 150


def swatch_html(hx):
    r, g, b = rgb(hx)
    edge = "box-shadow:inset 0 0 0 1px rgba(0,0,0,0.08);" if light(hx) else ""
    return (f'<div style="position:absolute;inset:0;background:#fff;display:flex;flex-direction:column">'
            f'<div style="flex:1;background:{hx};{edge}"></div>'
            f'<div style="height:24%;padding:0 26px 22px;display:flex;flex-direction:column;justify-content:flex-end;font-family:Montserrat,sans-serif;color:#111">'
            f'<div style="font-weight:700;font-size:30px;letter-spacing:.02em">{hx}</div>'
            f'<div style="font-weight:500;font-size:19px;color:#7a7a80;margin-top:4px;letter-spacing:.04em">RGB {r} {g} {b}</div></div></div>')


def logo_html(slug, bg=None):
    p = PAL[slug]
    mono_white = p["logo"]["colors"] == ["#FFFFFF"]
    # a white-only logo sits on the brand's accent (contrast with a backdrop in the main colour)
    bg = bg or (((p.get("accent") or [None])[0] or p.get("fullBleed")) if mono_white else "#FFFFFF")
    f = "logo-white.svg" if (mono_white or not light(bg)) else "logo.svg"
    return (f'<div style="position:absolute;inset:0;background:{bg};display:grid;place-items:center">'
            f'<img src="{lib.furl(CASES / slug / f)}" style="width:64%;max-height:46%;object-fit:contain"></div>')


def gradient(c1, c2, out):
    """A soft radial gradient in the brand colour (the stage behind floating brand cards)."""
    import numpy as np
    from PIL import Image
    if Path(out).exists():
        return out
    y, x = np.mgrid[0:H, 0:W].astype(np.float32)
    d = np.sqrt(((x - W * 0.5) / (W * 1.2)) ** 2 + ((y - H * 0.38) / (H * 0.8)) ** 2)
    k = np.clip(d / 0.7, 0, 1)[..., None]
    a, b = np.array(rgb(c2), np.float32), np.array(rgb(c1), np.float32)
    im = a * (1 - k) + b * k + np.random.default_rng(1).normal(0, 1.2, (H, W, 1))     # fine noise: no banding
    Image.fromarray(np.clip(im, 0, 255).astype(np.uint8)).save(out, quality=95)
    return out


def strip_html(cols):
    cells = "".join(f'<div style="flex:1;background:{c};display:flex;align-items:flex-end;padding:0 0 26px 24px;font:700 34px Montserrat,sans-serif;'
                    f'color:{"#111" if light(c) else "#fff"};{"box-shadow:inset 0 0 0 1px rgba(0,0,0,.08);" if light(c) else ""}">{c}</div>' for c in cols)
    return f'<div style="position:absolute;inset:0;display:flex;background:#fff">{cells}</div>'


def card_pngs(slug, t, mode, ui=()):
    """Art for the floating cards of an f-template scene: brand (logo card + palette strip) or real UI snippets."""
    meta = json.load(open(f"{S}/r12/tpl/{t}/meta.json"))
    slots = {x["role"]: meta["glass"][x["type"]]["px"] for x in meta["screens"].values() if x["role"].startswith("snip_")}
    out, jobs = {}, []
    ui = list(ui)
    for role, (pw, ph) in sorted(slots.items()):
        if mode == "ui" and ui:
            out[role] = str(CAP15 / slug / ui.pop(0))
            continue
        f = R / "cards" / f"{slug}-{t}-{role}.jpg"
        html = strip_html(palette(slug, 4)) if pw / ph > 2 else logo_html(slug)
        jobs.append({"spec": {"w": pw, "h": ph, "layers": [{"type": "html", "x": 0, "y": 0, "w": pw, "html": f'<div style="position:relative;width:{pw}px;height:{ph}px">{html}</div>'}]},
                     "out": str(f), "t": 5})
        out[role] = str(f)
    if jobs:
        (R / "cards").mkdir(parents=True, exist_ok=True)
        jp = R / "cards" / "jobs.json"
        jp.write_text(json.dumps(jobs))
        subprocess.run(["node", str(HERE / "batch.cjs"), str(jp)], capture_output=True, text=True, check=True)
    return out


# ---------------------------------------------------------------- float layouts (3D cards, engine float3d)
def card_from(s, w, **kw):
    hgt = round(w * s["ah"] / s["aw"])
    c = {"src": s["src"], "w": w, "h": hgt, "fit": "contain" if s.get("alpha") else "cover", "radius": 20 if s.get("alpha") else 18}
    if s.get("alpha"):
        c["bg"] = kw.pop("bg", "#FFFFFF")
    c.update(kw)
    return c


def cascade(items, seed=0):
    n = len(items)
    cards = []
    for i, (s, w) in enumerate(items):
        k = i / max(1, n - 1)
        cards.append(card_from(s, w, x=330 + 420 * k, y=560 + 820 * k, z=-160 + 320 * k, rx=9, ry=-17, rz=-2.5,
                               tin=0.15 + i * 0.24, din=1.25, from_={}))
        cards[-1]["from"] = {"y": 300, "z": -700, "rx": 34, "ry": -8}
        cards[-1].pop("from_", None)
    return cards, {"ry0": -6, "ry1": 5, "rx0": 3, "rx1": -2, "z0": -40, "z1": 60}


def stack(items, seed=0):
    rz = [-5, 3.5, -2, 1.2, 0]
    cards = []
    for i, (s, w) in enumerate(items):
        cards.append(card_from(s, w, x=540 + (i - (len(items) - 1) / 2) * 26, y=930 + (i - (len(items) - 1) / 2) * 34, z=i * 46,
                               rz=rz[i % len(rz)], tin=0.12 + i * 0.36, din=1.2, ease="spring",
                               **{"from": {"y": -1150, "rz": (14 if i % 2 else -14), "z": 200, "rx": -20}}))
    return cards, {"rx0": 14, "rx1": 6, "ry0": -8, "ry1": 6, "z0": -80, "z1": 40}


def orbit(items, seed=0):
    pos = [(285, 640, -220, 16), (800, 760, 140, -14), (300, 1300, 80, 12), (790, 1290, -120, -16), (540, 980, 260, 0)]
    cards = []
    for i, (s, w) in enumerate(items):
        x, y, z, ry = pos[i % len(pos)]
        cards.append(card_from(s, w, x=x, y=y, z=z, ry=ry, rx=4, tin=0.1 + i * 0.22, din=1.4,
                               **{"from": {"x": (x - 540) * 0.9, "y": (y - 960) * 0.6, "z": -900, "s": 0.8, "rx": 0, "ry": ry * 1.5}}))
    return cards, {"ry0": -14, "ry1": 14, "rx0": 2, "rx1": -2, "z0": -60, "z1": 80}


def hero2(items, seed=0):
    (big, wb), *rest = items
    cards = [card_from(big, wb, x=540, y=900, z=-60, rx=6, ry=-8, tin=0.1, din=1.3, **{"from": {"z": -800, "y": 160, "rx": 20}})]
    spots = [(250, 1360, 230, -10, 8), (840, 520, 200, 12, -6)]
    for i, (s, w) in enumerate(rest[:2]):
        x, y, z, ry, rz = spots[i]
        cards.append(card_from(s, w, x=x, y=y, z=z, ry=ry, rz=rz, tin=0.65 + i * 0.3, din=1.15,
                               **{"from": {"x": (540 - x) * 0.8, "y": (900 - y) * 0.8, "z": -300, "s": 0.6, "rx": 0}}))
    return cards, {"ry0": 6, "ry1": -6, "rx0": 4, "rx1": -1, "z0": 0, "z1": 90}


def fan(slug, cols, logo_y=520):
    """The verified palette as a fan deck (cards pivot on their foot), the logo card above it."""
    cols = list(reversed(cols))       # the brand's main colour ends on top of the deck
    n = len(cols)
    spread = 16.0
    cards = [{"html": logo_html(slug), "w": 780, "h": 430, "x": 540, "y": logo_y, "z": 120, "rx": 4, "radius": 30,
              "tin": 0.1, "din": 1.2, "from": {"y": -260, "z": -500, "rx": 30}}]
    for i, c in enumerate(cols):
        a = (i - (n - 1) / 2) * spread
        cards.append({"html": swatch_html(c), "w": 360, "h": 760, "x": 540, "y": 1330, "z": i * 2, "rz": a, "origin": "50% 94%",
                      "radius": 22, "tin": 0.45 + i * 0.11, "din": 1.3, "ease": "outQuint", "drift": 0.35,
                      "from": {"rz": -a, "y": 120, "z": -160, "rx": 0}})
    return cards, {"rx0": 8, "rx1": 3, "ry0": -5, "ry1": 5, "z0": -40, "z1": 40}


def row(slug, cols):
    """Palette chips rising in a row under a big logo card."""
    n = len(cols)
    cards = [{"html": logo_html(slug), "w": 860, "h": 480, "x": 540, "y": 760, "z": 60, "radius": 30, "tin": 0.1, "din": 1.25,
              "from": {"z": -700, "rx": 24, "y": 120}}]
    w = 172
    gap = 16
    x0 = 540 - (n * w + (n - 1) * gap) / 2 + w / 2
    for i, c in enumerate(cols):
        cards.append({"html": swatch_html(c).replace("font-size:30px", "font-size:21px").replace("font-size:19px", "font-size:14px").replace("padding:0 26px 22px", "padding:0 14px 14px"),
                      "w": w, "h": 300, "x": x0 + i * (w + gap), "y": 1240, "z": 30, "radius": 18, "tin": 0.55 + i * 0.12, "din": 1.0,
                      "ease": "spring", "from": {"y": 340, "z": -100, "rx": 40}})
    return cards, {"rx0": 10, "rx1": 4, "ry0": 4, "ry1": -4, "z0": -30, "z1": 50}


LAYOUTS = {"cascade": cascade, "stack": stack, "orbit": orbit, "hero2": hero2}


# ---------------------------------------------------------------- shots
def scene_shot(reel, key, spec, secs):
    if isinstance(spec.get("cards"), str):
        spec = dict(spec, cards=card_pngs(spec["slug"], spec["t"], spec["cards"], spec.get("ui", ())))
    d = SH / reel / key
    n = int(round(secs * 30))
    if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
        venv(SHOTS, json.dumps(dict(spec, secs=secs)), d)
    return {"dir": lib.furl(d), "n": n, "fps": 30}, d


def book_shot(reel, key, slug, gen, a, b, secs):
    src = R.parent / "r20" / "src" / f"book-{slug}"
    if not (src / "geo.json").exists():
        venv(B20, "book", slug, src, *(["--gen"] if gen else []))
    geo = json.load(open(src / "geo.json"))
    d = SH / reel / key
    n = int(round(secs * 30))
    if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
        A, B = [resolve_book(geo, p) for p in (a, b)]
        venv(B20, "pan", src / "still.jpg", secs, d, ",".join(map(str, A)), ",".join(map(str, B)))
    return {"dir": lib.furl(d), "n": n, "fps": 30}, d


def resolve_book(geo, p):
    """('l1'|'r1'|'spread', du, dv, w) -> window centre + width on the book still."""
    page, du, dv, w = p
    if page == "spread":
        x = (geo["l1"][0] + geo["r1"][2]) / 2; y = (geo["l1"][1] + geo["l1"][3]) / 2; pw = geo["r1"][2] - geo["l1"][0]; ph = geo["l1"][3] - geo["l1"][1]
    else:
        b = geo[page]; x = (b[0] + b[2]) / 2; y = (b[1] + b[3]) / 2; pw = b[2] - b[0]; ph = b[3] - b[1]
    return (round(x + du * pw), round(y + dv * ph), w)


def frosted(d, out, darken=0.78):
    """The last frame of a shot, frosted: the backdrop behind floating cards (depth of field)."""
    from PIL import Image, ImageFilter, ImageEnhance, ImageStat
    f = sorted(Path(d).glob("*.jpg"))[-1]
    im = Image.open(f).convert("RGB").filter(ImageFilter.GaussianBlur(42))
    lum = ImageStat.Stat(im.convert("L")).mean[0]
    im = ImageEnhance.Brightness(im).enhance(darken if lum > 90 else 1.0)
    im.save(out, quality=92)
    return out


def bright(d):
    from PIL import Image, ImageStat
    f = sorted(Path(d).glob("*.jpg"))[0]
    im = Image.open(f).convert("L")
    return ImageStat.Stat(im.crop((W * 0.25, H * 0.38, W * 0.75, H * 0.56))).mean[0]


def media(src_or_seq, t0, t1, enter, exit_, kb=None):
    m = {"type": "media", "t0": t0, "t1": t1, "rect": {"x": 0, "y": 0, "w": W, "h": H}, "frame": "full", "radius": 0, "float": 0,
         "enter": enter, "exit": exit_, "kb": kb or {"s0": 1, "s1": 1}, "fit": "cover"}
    if isinstance(src_or_seq, dict):
        m["seq"] = src_or_seq
    else:
        m["src"] = src_or_seq
    return m


# ---------------------------------------------------------------- the reels
def build(name, R_):
    host = R_["host"]
    tx = R_["tx"]
    layers, cuts, firstdir, prevdir = [], [], None, None
    t = 0.0
    shots = R_["shots"]
    for i, sh in enumerate(shots):
        secs = sh.get("secs", 3.6)
        span = secs + (XF if i < len(shots) - 1 else 0.35)
        key = f"{i + 1:02d}-{sh['k']}"
        en = {"type": "none"} if i == 0 else {"type": tx, "d": XF, "ease": R_.get("txease", "inOutCubic")}
        ex = {"type": tx, "d": XF, "ease": R_.get("txease", "inOutCubic")} if (i < len(shots) - 1 and R_.get("txout")) else {"type": "none"}
        if sh["k"] == "scene":
            seq, d = scene_shot(name, key, sh["spec"], round(span, 2))
            layers.append(media(seq, t, t + span, en, ex))
            prevdir = d
        elif sh["k"] == "book":
            seq, d = book_shot(name, key, sh["slug"], sh.get("gen", False), sh["a"], sh["b"], round(span, 2))
            layers.append(media(seq, t, t + span, en, ex))
            prevdir = d
        elif sh["k"] in ("float", "brand"):
            if sh.get("bg") == "frost":
                bgf = frosted(prevdir, SH / name / f"{key}-frost.jpg")
                layers.append(media(lib.furl(bgf), t, t + span, en, ex, kb={"s0": 1.08, "s1": 1.0}))
            else:
                (SH / name).mkdir(parents=True, exist_ok=True)
                g = gradient(sh["bg"], sh.get("bg2", sh["bg"]), SH / name / f"{key}-bg.jpg")
                layers.append(media(lib.furl(g), t, t + span, en, ex, kb={"s0": 1.04, "s1": 1.0}))
            cards, camv = sh["cards"]
            fl = {"type": "float3d", "t0": t + (0.1 if i else 0), "t1": t + span - 0.05, "cards": cards, "camera": camv, "persp": sh.get("persp", 1700),
                  "exit": {"type": sh.get("exit", "scatter"), "d": 0.65}}
            layers.append(fl)
            if prevdir is None:
                prevdir = None
        cuts.append(t)
        if firstdir is None and sh["k"] in ("scene", "book"):
            firstdir = prevdir
        t += secs
    end = t + 0.35
    lt = bright(firstdir) > 118 if firstdir else False      # a light screen behind the emblem: black ink
    layers.append({"type": "m7lines", "t0": 0.12, "dur": 2.45, "size": 480, "cy": H * 0.46, "frost": True,
                   "ink": "#0B0B0D" if lt else "#FFFFFF", "frostLight": 1.12 if lt else 0.58, "frostBlur": 28})
    layers.append({"type": "glasslabels", "t0": 2.55, "t1": min(end - 0.3, 2.55 + 4.4), "items": R_["labels"], "mode": "pills", "y": H - 330})
    layers += outro(end - 0.35)
    dur = end - 0.35 + 3.3
    spec = {"w": W, "h": H, "fps": 30, "duration": round(dur, 2), "crf": 16, "layers": [{"type": "plain", "color": "#030304"}] + layers}
    style, seed = R_["music"]
    wav = R / "work" / f"{name}.wav"
    wav.parent.mkdir(parents=True, exist_ok=True)
    x = audio.song(dur, style, cuts=cuts[1:] if style != "calm" else [], outro=end - 0.1, hits=[], seed=seed)
    audio.write(wav, x)
    out = OUT / host / f"{name}.mp4"
    lib.render(spec, out, audio=wav)
    wav.unlink(missing_ok=True)
    return out


def cam(z, d0=(0, 0), d1=(0, 0), r=(0, 0), ease="drift"):
    return {"z": list(z), "d0": list(d0), "d1": list(d1), "r": list(r), "ease": ease}


def reels():
    m, st, rl, bz, bs = "monvy", "steddion-tools", "repairlab", "bernheze-makelaars-rebranding", "buitenstate"
    return {
        # Monvy: interaction-led. Mega menu with the cursor on a 3/4 display, real UI cards cascade out of the screen,
        # the platform design on a profile laptop, the palette fans open under the logo, the real brandbook, mobile menu.
        "monvy-signature": dict(host=m, tx="focus", txout=False, music=("clean", 21), labels=["Websites", "Apps", "Branding"], shots=[
            dict(k="scene", secs=4.0, spec=dict(slug=m, t="d19_studio_front__q1", content="flow", flow="flow-1-mega-menu-desktop.mp4", ft0=1.4,
                                                cam=cam((1.05, 1.26), (0.05, 0.0), (-0.02, -0.03), (-2.0, 0.0)))),
            dict(k="float", secs=3.6, bg="frost", cards=cascade([(snip(m, "closeup-1-hero-dashboard.png"), 760), (snip(m, "snippet-2-pricing-card.png"), 470),
                                                                   (snip(m, "snippet-3-card.png"), 500), (snip(m, "snippet-1-cta-button.png"), 620)])),
            dict(k="scene", secs=3.4, spec=dict(slug=m, t="d15_mac_phone_desk__q1", content="design", i=0, cam=cam((1.06, 1.24), (-0.05, 0.02), (0.04, 0.0), (1.2, -0.4)))),
            dict(k="brand", secs=3.6, bg="#005F9C", bg2="#0A73B8", cards=fan("monvy", palette("monvy"))),
            dict(k="book", secs=3.4, slug="monvy-branding", a=("spread", -0.18, 0.0, 980), b=("l1", 0.05, 0.0, 760)),
            dict(k="scene", secs=3.4, spec=dict(slug=m, t="d05_phone_lean__p", content="flow", flow="flow-3-menu-mobile.mp4", ft0=0.6,
                                                cam=cam((1.34, 1.2), (0.0, 0.04), (0.0, 0.0), (0, 0), "outCubic"))),
        ]),
        # Steddion: the configurator. A macro close-up of the intake while it is filled in, then the configurator's
        # own cards in orbit, the solutions step on a desk scene (truck), the EMS comparison on a floating MacBook.
        "steddion-signature": dict(host=st, tx="zoomthrough", txout=True, music=("dynamic", 33), labels=["Tools", "Websites", "Branding"], shots=[
            dict(k="scene", secs=4.2, spec=dict(slug=st, t="d13_macro_mac__p", content="flow", flow="flow-1-intake-desktop.mp4", ft0=0.8,
                                                cam=cam((1.3, 1.06), (0.04, -0.04), (0.0, 0.0), (0, 0), "inOutQuart"))),
            dict(k="float", secs=3.6, bg="frost", cards=orbit([(snip(st, "snippet-1-keuzekaart.png"), 420), (snip(st, "closeup-3-jouw-situatie-grafiek.png"), 520),
                                                                 (snip(st, "snippet-8-chip.png"), 400), (snip(st, "closeup-5-3d-pand-pv-batterij.png"), 470),
                                                                 (snip(st, "snippet-3-stapknop.png"), 420)])),
            dict(k="scene", secs=3.6, spec=dict(slug=st, t="d15_mac_phone_desk__p", content="flow", flow="flow-3-oplossingen-desktop.mp4", ft0=1.0,
                                                cam=cam((1.3, 1.34), (-0.07, 0.0), (0.06, -0.02), (0, 0)))),
            dict(k="brand", secs=3.4, bg="#45297A", bg2="#5B3A98", cards=row("steddion", palette("steddion", 4))),
            dict(k="scene", secs=3.6, spec=dict(slug=st, t="f01_mac_float__p", content="flow", flow="flow-5-ems-vergelijker-desktop.mp4", ft0=1.2,
                                                cards="brand", cam=cam((1.0, 1.14), (0.0, 0.03), (0.0, -0.01), (-1.4, 0.4)))),
        ]),
        # Repairlab: the repair flow. Phone first (booking on mobile), the brand/device picker with the cursor on a
        # low-angle laptop, the tool's cards drop in as a deck, the brand sheets, prices on the macro close-up.
        "repairlab-signature": dict(host=rl, tx="pushUp", txout=True, txease="inOutQuart", music=("clean", 45), labels=["Websites", "Tools", "Branding"], shots=[
            dict(k="scene", secs=3.8, spec=dict(slug=rl, t="f02_phone_float__p", content="flow", flow="flow-5-afspraakflow-mobile.mp4", ft0=0.4,
                                                cards="brand", cam=cam((1.04, 1.2), (0.0, 0.02), (0.0, -0.02), (0, 0)))),
            dict(k="scene", secs=3.6, spec=dict(slug=rl, t="d18_mac_profile__q1", content="flow", flow="flow-1-merk-device-kiezer-desktop.mp4", ft0=1.6,
                                                cam=cam((1.12, 1.24), (0.06, 0.03), (-0.04, -0.01), (1.6, 0.0)))),
            dict(k="float", secs=3.8, bg="frost", exit="drop", cards=stack([(snip(rl, "closeup-1-merkkiezer.png"), 820), (snip(rl, "snippet-2-device-tegel.png"), 420),
                                                                              (snip(rl, "snippet-6-kalender.png"), 470), (snip(rl, "snippet-7-prijsregel-hover.png"), 760)])),
            dict(k="book", secs=3.4, slug=rl, gen=True, a=("l1", -0.2, 0.0, 700), b=("r1", -0.25, 0.0, 700)),
            dict(k="scene", secs=3.6, spec=dict(slug=rl, t="d13_macro_mac__q1", content="flow", flow="flow-2-model-reparaties-desktop.mp4", ft0=0.8,
                                                cam=cam((1.06, 1.24), (0.0, 0.0), (0.03, -0.04), (0, 0), "inOutSine"))),
        ]),
        # Bernheze: brand-led. The logo on its green, the colours as a row, the real brandbook, then the site: the
        # department menu on an iPad stand, close-ups lifting off, the floating MacBook with the palette in 3D.
        "bernheze-signature": dict(host=bz, tx="iris", txout=False, txease="inOutCubic", music=("calm", 52), labels=["Branding", "Websites", "Print"], shots=[
            dict(k="book", secs=3.8, slug=bz, a=("spread", 0.22, 0.0, 1040), b=("l1", 0.12, 0.02, 760)),
            dict(k="brand", secs=3.6, bg="#1D2C25", bg2="#2A3F34", cards=row(bz, palette(bz, 4))),
            dict(k="scene", secs=3.8, spec=dict(slug=bz, t="d09_ipad_keyboard__q1", content="flow", flow="flow-1-afdeling-menu-desktop.mp4", ft0=0.6,
                                                cam=cam((1.34, 1.22), (0.0, -0.03), (0.0, 0.0), (0, 0), "outCubic"))),
            dict(k="float", secs=3.4, bg="frost", cards=hero2([(snip(bz, "closeup-2-afdelingstegels.png"), 860), (snip(bz, "closeup-1-menu-open.png"), 380),
                                                                 (snip(bz, "snippet-1-dropdown-trigger.png"), 440)])),
            dict(k="scene", secs=3.8, spec=dict(slug=bz, t="f03_studio_float__p", content="flow", flow="flow-2-home-scroll-desktop.mp4", ft0=1.0,
                                                cards="brand", cam=cam((1.2, 1.0), (0.0, -0.02), (0.0, 0.0), (0.8, 0.0), "inOutSine"))),
        ]),
        # Buitenstate: the platform for rural living. Two iPads leaning (the spotlight and search network), the search
        # on a floating iPad, the site's cards in a cascade, the mobile menu on stone, the navigation on a desk.
        "buitenstate-signature": dict(host=bs, tx="diag", txout=False, txease="inOutCubic", music=("clean", 64), labels=["Websites", "Tools", "AI"], shots=[
            dict(k="scene", secs=4.0, spec=dict(slug=bs, t="d17_ipads_lean__q1", content="flow", flow="flow-2-home-scroll-desktop.mp4", ft0=2.0,
                                                cam=cam((1.22, 1.34), (0.06, 0.0), (-0.04, -0.02), (-1.2, 0.0)))),
            dict(k="scene", secs=3.6, spec=dict(slug=bs, t="f04_ipad_float__p", content="flow", flow="flow-3-zoeken-desktop.mp4", ft0=0.3,
                                                cards="ui", ui=["closeup-3-zoeknetwerk.png", "snippet-1-cta-button.png"], cam=cam((1.18, 1.04), (0.0, 0.03), (0.0, 0.0), (0, 0), "outCubic"))),
            dict(k="float", secs=3.6, bg="frost", cards=cascade([(snip(bs, "closeup-2-spotlight.png"), 780), (snip(bs, "closeup-3-zoeknetwerk.png"), 700),
                                                                   (snip(bs, "snippet-2-card.png"), 620), (snip(bs, "snippet-1-cta-button.png"), 600)])),
            dict(k="scene", secs=3.4, spec=dict(slug=bs, t="d04_phone_trio__p", content="flow", flow="flow-4-menu-mobile.mp4", ft0=0.5,
                                                cam=cam((1.24, 1.34), (0.0, 0.0), (0.02, -0.03), (2.0, 0.0)))),
            dict(k="scene", secs=3.6, spec=dict(slug=bs, t="d02_mac_top__q1", content="flow", flow="flow-1-mega-menu-desktop.mp4", ft0=1.2,
                                                cam=cam((1.24, 1.06), (-0.04, 0.02), (0.0, 0.0), (0, 0), "inOutSine"))),
        ]),
    }


if __name__ == "__main__":
    allr = reels()
    names = list(allr) if sys.argv[1] == "pilot" else [n for n in allr if any(a in n for a in sys.argv[1:])]
    for n in names:
        print("reel", n, flush=True)
        print(" ->", build(n, allr[n]), flush=True)
