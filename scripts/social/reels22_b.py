"""Round 22, group b: final-style reels (the approved Buitenstate / Steddion style) for DesignersHouse, Hela, IMPECO,
Fairlink and Nexis Group. Each reel has its own camera mix, shot order and layouts; real captures and real brand / print
assets only.

  S/r18/venv/bin/python reels22_b.py <slug-final ...>

On top of dir21 (imported, not changed):
- scene shots run through the group-b wrapper of shots21 (S/r22/work-b/tools/shots22b.py): projects missing from the
  r12 list (designers-house) get an address bar, 'bare' shows a recording without browser chrome (an Instagram reel on
  a phone), 'fill' puts a real capture on a template's other screens;
- k='pan': a slow 9:16 camera move over a real brand photo (a brandbook spread, a print piece);
- k='print': real print animations (M7's own brochure / invitation films) as framed cards on a brand-tone stage.
"""
import json
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
# round 22: the scratch dir r14 (with the verified palettes dir21 loads at import) was removed during this round; if it is
# missing, dir21 reads group b's copy of the entries it needs (the same values, for these five projects only).
import builtins  # noqa: E402
_PAL_B = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r22/work-b/palettes.json"
_open = builtins.open


def _open_pal(f, *a, **k):
    if str(f).endswith("r14/palette/palettes.json") and not Path(f).exists():
        f = _PAL_B
    return _open(f, *a, **k)


builtins.open = _open_pal
try:
    import dir21 as D21  # noqa: E402
finally:
    builtins.open = _open
from dir21 import *  # noqa: E402,F401,F403
from dir21 import (S, R, SH, OUT, W, H, XF, FPS, lib, audio, outro, venv, scene_shot, book_shot, frosted, gradient, media, card_from,  # noqa: E402
                   blur_ramp, blurred_first, bright, cam, CALM, deck, fan, row, palette, snip, asset, logo_html, swatch_html, B20)

WB = Path(S) / "r22" / "work-b"
D21.SHOTS = str(WB / "tools" / "shots22b.py")          # scene_shot() reads the module global at call time
INBOX = Path("/home/user/m7-assets-inbox")
CASES = Path("/home/user/M7/public/media/cases")
CAP21 = R / "cap"


# ---------------------------------------------------------------- extra shot kinds
def pan_shot(reel, key, src, a, b, secs):
    """A 9:16 camera move over a still (book20 pan): a, b = (cx, cy, w) on the source image."""
    fps = FPS["v"]
    d = SH / reel / key
    n = int(round(secs * fps))
    if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
        venv(B20, "pan", src, secs, d, ",".join(map(str, a)), ",".join(map(str, b)), "--fps", fps)
    return {"dir": lib.furl(d), "n": n, "fps": fps}, d


def clip_frames(reel, key, video, t0, secs, crop, w, rate=1.0):
    """Frames of a real film (crop x, y, w, h on the source), scaled to the card width, at the reel's frame rate."""
    fps = FPS["v"]
    d = SH / reel / key
    n = int(round(secs * fps))
    if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
        d.mkdir(parents=True, exist_ok=True)
        x, y, cw, ch = crop
        vf = f"crop={cw}:{ch}:{x}:{y},setpts=PTS/{rate},fps={fps},scale={w}:-2:flags=lanczos"
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", str(t0), "-i", str(video), "-t", str(secs * rate + 0.2), "-vf", vf,
                        "-q:v", "2", "-frames:v", str(n), str(d / "%05d.jpg")], check=True)
    got = len(list(d.glob("*.jpg")))
    return {"dir": lib.furl(d), "n": min(n, got), "fps": fps}, d


def card_layer(seq_or_src, t0, t1, rect, tin=0.0, radius=22, kb=None, enter=None):
    m = media(seq_or_src, t0 + tin, t1, enter or {"type": "lift", "d": 0.9, "ease": "outCubic", "dy": 40}, {"type": "none"}, kb=kb or {"s0": 1.0, "s1": 1.0})
    m.update({"rect": rect, "frame": "card", "radius": radius, "float": 0, "fit": "cover",
              "shadow": "0 40px 90px -20px rgba(0,0,0,0.55), 0 12px 30px -10px rgba(0,0,0,0.35)", "bg": "#1a1a1a"})
    return m


# ---------------------------------------------------------------- the build (dir21.build plus the extra kinds)
def build(name, R_):
    host = R_["host"]
    tx = R_["tx"]
    FPS["v"] = R_.get("fps", 30)
    layers, cuts, firstdir, prevdir = [], [], None, None
    T0 = 2.15 if R_.get("intro") in ("blur", "ramp") else 0.0
    ramp = R_.get("intro") == "ramp"
    t = T0
    shots = R_["shots"]
    for i, sh in enumerate(shots):
        secs = sh.get("secs", 3.6)
        span = secs + (XF if i < len(shots) - 1 else 0.35)
        key = f"{i + 1:02d}-{sh['k']}"
        en = (({"type": "focus", "d": 1.1, "ease": "inOutSine", "blur": 13, "s0": 1.03, "fade": 1.3} if ramp else {"type": "focus", "d": 0.95, "ease": "inOutCubic"})
              if T0 else {"type": "none"}) if i == 0 else dict({"type": sh.get("tx", tx), "d": XF, "ease": R_.get("txease", "inOutCubic")}, **R_.get("txcfg", {}))
        ex = {"type": "none"}
        if sh["k"] == "scene":
            seq, d = scene_shot(name, key, sh["spec"], round(span, 2))
            layers.append(media(seq, t, t + span, en, ex))
            prevdir = d
            for rv in sh.get("reveal", []):        # a clean 2D snippet revealed on the mockup, light shadow
                s_, w_ = rv["src"], rv["w"]
                h_ = round(w_ * s_["ah"] / s_["aw"])
                m = media(s_["src"], t + rv.get("tin", 0.8), t + min(span, rv.get("tout", secs)) - 0.05,
                          {"type": "lift", "d": 0.85, "ease": "outCubic", "dy": 24}, {"type": "fade", "d": 0.45, "ease": "inOutCubic"})
                m.update({"rect": {"x": round(rv.get("x", W / 2) - w_ / 2), "y": round(rv["y"] - h_ / 2), "w": w_, "h": h_}, "frame": "card",
                          "radius": rv.get("radius", 16), "float": 0, "fit": "contain" if s_.get("alpha") else "cover",
                          "shadow": "0 22px 60px rgba(0,0,0,0.22), 0 3px 10px rgba(0,0,0,0.10)", "bg": "transparent" if s_.get("alpha") else "#ffffff"})
                layers.append(m)
        elif sh["k"] == "book":
            seq, d = book_shot(name, key, sh["slug"], sh.get("gen", False), sh["a"], sh["b"], round(span, 2))
            layers.append(media(seq, t, t + span, en, ex))
            prevdir = d
        elif sh["k"] == "pan":
            seq, d = pan_shot(name, key, sh["src"], sh["a"], sh["b"], round(span, 2))
            layers.append(media(seq, t, t + span, en, ex))
            prevdir = d
        elif sh["k"] == "print":
            (SH / name).mkdir(parents=True, exist_ok=True)
            g = gradient(sh["bg"], sh.get("bg2", sh["bg"]), SH / name / f"{key}-bg.jpg")
            layers.append(media(lib.furl(g), t, t + span, en, ex, kb={"s0": 1.05, "s1": 1.0}))
            for j, c in enumerate(sh["cards"]):
                seq, d = clip_frames(name, f"{key}-c{j + 1}", c["video"], c["t0"], round(span - c.get("tin", 0), 2), c["crop"], c["w"], c.get("rate", 1.0))
                hh = round(c["w"] * c["crop"][3] / c["crop"][2])
                rect = {"x": round(c.get("x", W / 2) - c["w"] / 2), "y": round(c["y"] - hh / 2), "w": c["w"], "h": hh}
                layers.append(card_layer(seq, t, t + span, rect, tin=c.get("tin", 0.2 + 0.25 * j), radius=c.get("radius", 22)))
            prevdir = prevdir or None
        elif sh["k"] in ("float", "brand"):
            if sh.get("bg") == "frost":
                bgf = frosted(prevdir, SH / name / f"{key}-frost.jpg")
                layers.append(media(lib.furl(bgf), t, t + span, en, ex, kb={"s0": 1.08, "s1": 1.0}))
            else:
                (SH / name).mkdir(parents=True, exist_ok=True)
                g = gradient(sh["bg"], sh.get("bg2", sh["bg"]), SH / name / f"{key}-bg.jpg")
                layers.append(media(lib.furl(g), t, t + span, en, ex, kb={"s0": 1.04, "s1": 1.0}))
            cards, camv = sh["cards"]
            layers.append({"type": "float3d", "t0": t + (0.1 if i else 0), "t1": t + span - 0.05, "cards": cards, "camera": camv,
                           "persp": sh.get("persp", 1700), "exit": {"type": sh.get("exit", "scatter"), "d": 0.65}})
        cuts.append(t)
        if firstdir is None and sh["k"] in ("scene", "book", "pan"):
            firstdir = prevdir
        t += secs
    end = t + 0.35
    if T0 and ramp:
        rs = blur_ramp(firstdir, SH / name / "intro-ramp", T0 + 1.15, T0)
        layers.insert(0, media(rs, 0, T0 + 1.15, {"type": "none"}, {"type": "fade", "d": 1.0, "ease": "inOutSine"}, kb={"s0": 1.05, "s1": 1.0}))
        layers.append({"type": "m7lines", "t0": 0.2, "dur": 2.6, "size": R_.get("logo", 260), "cy": H * 0.47, "frost": False, "scrim": 0.0, "ink": "#FFFFFF"})
    lt0 = T0 + 0.6 if T0 else 2.55
    layers.append({"type": "glasslabels", "t0": lt0, "t1": min(end - 0.3, lt0 + 4.4), "items": R_["labels"], "mode": "pills", "y": H - 330})
    layers += outro(end - 0.35)
    dur = end - 0.35 + 3.3
    mbr = [[c - 0.05, c + XF + 0.1] for c in cuts[1:]] + ([[T0 - 0.1, T0 + 1.1]] if T0 else [])
    mbr += [[l["t0"], l["t0"] + 2.8] for l in layers if l.get("type") == "float3d"]
    mbr += [[end - 0.35, end + 1.6]]
    spec = {"w": W, "h": H, "fps": FPS["v"], "duration": round(dur, 2), "crf": 15 if FPS["v"] >= 60 else 16, "mb": R_.get("mb", 2 if FPS["v"] >= 60 else 3), "mbRanges": mbr,
            "layers": [{"type": "plain", "color": "#030304"}] + layers}
    style, seed = R_["music"]
    wav = R / "work" / f"{name}.wav"
    wav.parent.mkdir(parents=True, exist_ok=True)
    x = audio.song(dur, style, cuts=cuts[1:] if style != "calm" else [], outro=end - 0.1, hits=[], seed=seed)
    audio.write(wav, x)
    out = OUT / host / f"{name}.mp4"
    lib.render(spec, out, audio=wav)
    wav.unlink(missing_ok=True)
    return out


def logo_card(slug, file, bg, w=64):
    """A logo card from a real logo file of the case (for brands whose light logo needs its own dark field)."""
    return (f'<div style="position:absolute;inset:0;background:{bg};display:grid;place-items:center">'
            f'<img src="{lib.furl(CASES / slug / file)}" style="width:{w}%;max-height:46%;object-fit:contain"></div>')


def fan2(logo, cols, logo_y=520):
    """dir21.fan with a given logo card (calm: no spring)."""
    cols = list(reversed(cols))
    n = len(cols)
    spread = 16.0
    cards = [{"html": logo, "w": 780, "h": 430, "x": 540, "y": logo_y, "z": 120, "rx": 4, "radius": 30,
              "tin": 0.1, "din": 1.5, "from": {"y": -180, "z": -320, "rx": 18}}]
    for i, c in enumerate(cols):
        a = (i - (n - 1) / 2) * spread
        cards.append({"html": swatch_html(c), "w": 360, "h": 760, "x": 540, "y": 1330, "z": i * 2, "rz": a, "origin": "50% 94%",
                      "radius": 22, "tin": 0.45 + i * 0.11, "din": 1.3, "ease": "outQuint", "drift": 0.35,
                      "from": {"rz": -a, "y": 120, "z": -160, "rx": 0}})
    return cards, {"rx0": 8, "rx1": 3, "ry0": -5, "ry1": 5, "z0": -40, "z1": 40}


def column(items, seed=0):
    """Round 22: cards rising into a calm vertical column, slightly alternating left / right (no bounce)."""
    n = len(items)
    cards = []
    top, bot = 470, 1450
    for i, (s, w) in enumerate(items):
        k = i / max(1, n - 1)
        x = 540 + (60 if (i + seed) % 2 else -60)
        cards.append(card_from(s, w, x=x, y=top + (bot - top) * k, z=40 - i * 20, ry=(-5 if (i + seed) % 2 else 5), rx=2,
                               tin=0.12 + i * 0.3, din=1.2, ease="outCubic", zi=n - i, drift=0.2,
                               **{"from": {"y": 140, "z": -220, "rx": 8, "ry": 0}}))
    return cards, {"rx0": 3, "rx1": 1, "ry0": 2, "ry1": -2, "z0": -30, "z1": 30}


def row2(logo, cols):
    """dir21.row with a given logo card and a calm rise of the chips (no spring)."""
    n = len(cols)
    cards = [{"html": logo, "w": 860, "h": 480, "x": 540, "y": 760, "z": 60, "radius": 30, "tin": 0.1, "din": 1.25,
              "from": {"z": -420, "rx": 16, "y": 100}}]
    w, gap = 190, 18
    x0 = 540 - (n * w + (n - 1) * gap) / 2 + w / 2
    for i, c in enumerate(cols):
        cards.append({"html": swatch_html(c).replace("font-size:30px", "font-size:22px").replace("font-size:19px", "font-size:14px").replace("padding:0 26px 22px", "padding:0 14px 14px"),
                      "w": w, "h": 320, "x": x0 + i * (w + gap), "y": 1250, "z": 30, "radius": 18, "tin": 0.5 + i * 0.12, "din": 1.1,
                      "ease": "outCubic", "from": {"y": 160, "z": -80, "rx": 18}})
    return cards, {"rx0": 6, "rx1": 3, "ry0": 3, "ry1": -3, "z0": -30, "z1": 40}


def shelf(items, seed=0):
    """Round 22: a wide hero card on top, two product cards side by side under it, rising calmly (a shop shelf)."""
    (big, wb), *rest = items
    cards = [card_from(big, wb, x=540, y=640, z=30, rx=3, ry=-3, tin=0.12, din=1.2, ease="outCubic", drift=0.2,
                       **{"from": {"y": 120, "z": -260, "rx": 10}})]
    for i, (s, w) in enumerate(rest[:2]):
        x = 300 if i == 0 else 780
        cards.append(card_from(s, w, x=x, y=1290, z=60, ry=(5 if i == 0 else -5), rx=2, tin=0.5 + i * 0.22, din=1.1, ease="outCubic",
                               drift=0.2, zi=2 + i, **{"from": {"y": 160, "z": -200, "rx": 8}}))
    return cards, {"rx0": 4, "rx1": 2, "ry0": -2, "ry1": 2, "z0": -30, "z1": 30}


def scene(slug, t, flow, ft0, secs, camv, **kw):
    spec = dict(slug=slug, t=t, content="flow", flow=flow, ft0=ft0, cam=camv)
    spec.update({k: v for k, v in kw.items() if k not in ("reveal", "tx")})
    sh = dict(k="scene", secs=secs, spec=spec)
    for k in ("reveal", "tx"):
        if k in kw:
            sh[k] = kw[k]
    return sh


def follow(z, d0=(0, 0), d1=(0, 0), r=(0, 0), ease="drift", **over):
    return dict(cam(z, d0, d1, r, ease), **dict(CALM, **over))


# ---------------------------------------------------------------- the reels
def reels():
    dh = "designers-house"
    DHI = INBOX / "DesignersHouse"
    return {
        # DesignersHouse: brand first. The real brandbook spread (colour and typography), the live site on a close studio
        # display, M7's own print films (brochure, invitations) as a diptych, the partner portal's appointment flow on a
        # profile laptop (clicked through to the next step), the brand's Instagram reel on a phone, the partners.
        "designers-house-final": dict(host=dh, tx="softfade", txease="inOutSine", fps=60, intro="ramp", logo=260, music=("calm", 2201),
                                      labels=["Branding", "Websites", "Print"], shots=[
            dict(k="pan", secs=4.2, src=str(DHI / "16-brandbook-kleur-typografie.jpg"), a=(880, 853, 955), b=(1600, 880, 900)),
            scene(dh, "d19_studio_front__c1", "flow-21-home-desktop.mp4", 0.8, 5.0, follow((1.1, 1.3), (0, 0), (0, -0.01), (-0.4, 0.0), "inOutSine"), fam="dark"),
            dict(k="print", secs=4.8, bg="#1C1B1A", bg2="#3A3836", cards=[
                dict(video=str(DHI / "08-brochure-omslag-opent.mp4"), t0=2.2, crop=(320, 40, 1280, 1000), w=960, y=560, tin=0.25),
                dict(video=str(DHI / "03-uitnodigingen-tuimelen.mp4"), t0=1.6, crop=(240, 20, 1440, 1040), w=960, y=1380, tin=0.55)]),
            # the partner portal (M7's screen recording): date, time, showroom, topic, next step, the partners of step 3
            scene(dh, "d18_mac_profile__k1", "flow-23-afspraak-desktop.mp4", 0.2, 7.2, follow((1.45, 1.7), (0.02, 0.0), (-0.01, -0.01), (-0.5, 0.0)), fam="dark", speed=1.35),
            scene(dh, "d05_phone_lean__p", "flow-24-social-mobile.mp4", 3.8, 4.0, cam((1.15, 1.33), (0.0, 0.02), (0.0, 0.0), (1.0, 0.0), "inOutSine"), fam="dark", bare=True),
            scene(dh, "d15_mac_phone_desk__c1", "flow-22-partners-desktop.mp4", 4.6, 5.0, follow((1.1, 1.3), (0.0, 0.0), (0.0, -0.01), (0.4, 0.0)), fam="dark"),
            dict(k="pan", secs=3.0, src=str(DHI / "21-logo-opbouw-op-papier.jpg"), a=(1280, 853, 955), b=(1285, 860, 820)),
        ]),
        # Hela: the shop and its 3D bottles. The home on a top-down laptop over the brand red (the bottle turns with the
        # scroll), the shop's real product cards on a shelf, a product page clicked through to the allergens on the macro
        # laptop, the mobile home on stone, the B2B shop filter (the refreshed row revealed clean), the recipe filter
        # clicked through to a recipe on a studio display.
        "hela-final": dict(host="hela", tx="zoomthrough", txease="inOutSine", fps=60, intro="ramp", logo=260, music=("dynamic", 2202),
                           labels=["Websites", "Motion", "Apps"], shots=[
            scene("hela", "d02_mac_top__k1", "flow-24-home-3d-desktop.mp4", 2.1, 6.4, follow((1.45, 1.7), (0.0, 0.0), (0.0, -0.01), (0.6, 0.0)), fam="brand", speed=1.2),
            dict(k="float", secs=4.0, bg="#A0010C", bg2="#DA020F", cards=shelf([(snip("hela", "closeup-5-dressings-hero.png"), 940),
                                                                               (snip("hela", "snippet-2-productkaart.png"), 380),
                                                                               (snip("hela", "snippet-1-productkaart.png"), 380)])),
            scene("hela", "d13_macro_mac__k1", "flow-21-product-allergenen-desktop.mp4", 4.4, 6.2, follow((1.55, 1.85), (0.0, 0.0), (0.0, -0.02), (0.5, 0.0), "inOutSine"), fam="brand"),
            scene("hela", "d07_phone_stone__p", "flow-4-home-lottie-scroll-mobile.mp4", 0.2, 3.8, cam((1.12, 1.3), (0.0, 0.0), (0.0, 0.0), (-1.0, 0.0), "inOutSine"), fam="light"),
            # the B2B shop: filter Snacksaus, the range refreshes; the refreshed row revealed clean above the laptop
            scene("hela", "d18_mac_profile__q1", "flow-22-b2b-shop-filter-desktop.mp4", 0.8, 5.0, follow((1.1, 1.3), (-0.1, 0.18), (-0.1, 0.16), (-0.4, 0.0)), fam="dark", speed=1.4,
                  reveal=[dict(src=asset(CAP21 / "hela" / "crop-b2b-snacksaus.png"), w=900, y=520, tin=2.7)]),
            scene("hela", "d19_studio_front__q1", "flow-23-recepten-filter-desktop.mp4", 0.4, 5.4, follow((1.05, 1.3), (0.0, 0.0), (0.0, -0.01), (0.4, 0.0)), fam="light", speed=1.45),
        ]),
        # IMPECO (the new site on its staging domain): the home on a studio display, the Departments menu clicked through
        # to Sports & events; the refreshed brand (logo on its aubergine, the colours); the events configurator step by
        # step on the macro laptop; the configurator's own cards; the transport intake.
        "impeco-final": dict(host="impeco", tx="pushUp", txease="inOutSine", fps=60, intro="ramp", logo=260, music=("dynamic", 2203),
                             labels=["Websites", "Tools", "Branding"], shots=[
            scene("impeco", "d19_studio_front__k1", "flow-21-departments-desktop.mp4", 0.3, 6.4, follow((1.5, 1.8), (0.0, 0.0), (0.0, -0.02), (-0.5, 0.0), "inOutSine"), fam="brand", speed=1.15),
            dict(k="brand", secs=3.4, bg="#24122B", bg2="#5B2A7C", cards=row2(logo_html("impeco", bg="#2E1A33"), palette("impeco", 4))),
            scene("impeco", "d13_macro_mac__k1", "flow-22-events-configurator-desktop.mp4", 0.9, 8.6, follow((1.35, 1.6), (0.0, 0.0), (0.0, -0.01), (0.5, 0.0), "inOutSine"), fam="light", speed=1.5),
            dict(k="float", secs=3.6, bg="frost", cards=deck([(asset(CAP21 / "impeco" / "still-cfg-1b.png"), 860), (asset(CAP21 / "impeco" / "still-cfg-2b.png"), 820)], seed=1, calm=True)),
            scene("impeco", "d02_mac_top__c1", "flow-23-transport-configurator-desktop.mp4", 0.6, 5.2, follow((1.05, 1.3), (0.0, 0.0), (0.0, -0.01), (-0.4, 0.0)), fam="dark", speed=1.45),
        ]),
        # Fairlink: the persona lead flow in one take on a profile laptop over the brand teal (employer route, back, the
        # recruiter route with other questions), the real brand sheets in the brand book, the printed postcards and the
        # brand booklet, the home with its audiences, the palette fanning out under the logo.
        "fairlink-final": dict(host="fairlink", tx="blur", txease="inOutSine", fps=60, intro="ramp", logo=260, music=("clean", 2204),
                               labels=["Branding", "Tools", "Print"], shots=[
            # the persona flow in one take: Employer (its own questions and sectors), back, Recruiter (other questions)
            scene("fairlink", "d18_mac_profile__k1", "flow-21-persona-flow-desktop.mp4", 0.5, 8.6, follow((1.45, 1.7), (0.0, 0.0), (0.0, -0.01), (0.5, 0.0)), fam="brand", speed=1.5),
            dict(k="book", secs=3.8, slug="fairlink", a=("l1", 0.12, 0.0, 1050), b=("r1", -0.12, 0.0, 940)),
            dict(k="float", secs=4.0, bg="#162629", bg2="#2C4A50", cards=deck([(asset(CASES / "fairlink" / "r-61-brand-booklet.webp"), 880),
                                                                             (asset(CASES / "fairlink" / "s-postcard.webp"), 720),
                                                                             (asset(CASES / "fairlink" / "s-postcard-mark.webp"), 640)], seed=1, calm=True)),
            scene("fairlink", "d13_macro_mac__q1", "flow-22-home-desktop.mp4", 0.6, 5.0, follow((1.05, 1.3), (0.0, 0.0), (0.0, -0.01), (0.4, 0.0)), fam="dark"),
            dict(k="brand", secs=3.4, bg="#162629", bg2="#22393E", cards=fan2(logo_card("fairlink", "logo.svg", "#22393E"), palette("fairlink", 4))),
        ]),
        # Nexis Group: the conditional demo flow ("configurator") in two parts, on a profile laptop and on a close
        # studio display; the 3D device renders in a calm deck; the hardware tabs with the turning 3D devices on a floating
        # iPad with two device renders beside it; the mobile home between two live pages on three phones.
        "nexis-group-final": dict(host="nexis-group", tx="focus", txease="inOutCubic", fps=60, intro="ramp", logo=260, music=("clean", 2205),
                                  labels=["Websites", "Tools", "Motion"], shots=[
            # the demo flow, part 1: start, organisation type (Kliniek), the challenge question written for clinics
            scene("nexis-group", "d18_mac_profile__k1", "flow-21-demo-configurator-desktop.mp4", 0.4, 7.6, follow((1.45, 1.7), (0.0, 0.0), (0.0, -0.01), (0.5, 0.0)), fam="navy"),
            # part 2: what would make the difference for your clinic, number of patients, up to the last step (empty form)
            scene("nexis-group", "d19_studio_front__c1", "flow-21-demo-configurator-desktop.mp4", 8.6, 7.0, follow((1.05, 1.3), (0.0, 0.0), (0.0, -0.01), (0.4, 0.0)), fam="dark", speed=1.15),
            dict(k="float", secs=4.0, bg="frost", cards=deck([(snip("nexis-group", "closeup-6-tab-bloeddrukmeter.png"), 900), (snip("nexis-group", "closeup-4-3d-pulse-oximeter.png"), 680),
                                                              (snip("nexis-group", "closeup-5-3d-glucosemeter.png"), 600)], seed=0, calm=True)),
            # the hardware tabs on a floating iPad; the 3D renders of two devices float beside it
            scene("nexis-group", "f04_ipad_float__c1", "flow-22-tabs-3d-desktop.mp4", 0.6, 6.4, follow((1.0, 1.2), (0.0, 0.0), (0.0, -0.01), (-0.4, 0.0)), fam="navy", speed=1.3,
                  cards={"snip_1": str(D21.CAP15 / "nexis-group" / "closeup-2-3d-bloeddrukmeter.png"), "snip_2": str(D21.CAP15 / "nexis-group" / "closeup-1-3d-anyhub.png")}),
            # the mobile home in the middle of three phones; the other two show the live demo start and the product page
            scene("nexis-group", "d04_phone_trio__p", "flow-23-home-mobile.mp4", 0.2, 4.6, cam((1.22, 1.33), (0.0, 0.0), (0.0, -0.01), (0.0, 0.0), "inOutSine"), fam="navy",
                  fill={"phone_b": str(CAP21 / "nexis-group" / "still-m-demo.png"), "phone_c": str(CAP21 / "nexis-group" / "still-m-product.png")}),
        ]),
    }


if __name__ == "__main__":
    allr = reels()
    names = [n for n in allr if any(a == n or a in n for a in sys.argv[1:])]
    for n in names:
        print("reel", n, flush=True)
        print(" ->", build(n, allr[n]), flush=True)
