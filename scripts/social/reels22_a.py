"""Round 22, group a: final-style reels (the approved Buitenstate / Steddion "top" style) for Monvy, Repairlab,
Bernheze, The Sandt and Plenty Planet. Each reel has its own camera mix, shot order, layouts and transition; real
captures (60 fps takes with the cursor track in r21/cap/<slug>/), real brand assets and verified palettes only.

  S/r18/venv/bin/python reels22_a.py <slug|name ...>
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

# The verified palettes of this group's projects (src/content/palettes.ts / r14 palettes.json, as printed from
# dir21.PAL on 8 Nov). dir21 reads r14/palette/palettes.json at import; that shared file went missing during round 22,
# so if it is gone the import gets an empty dict and these entries are filled in (nothing else changes).
MYPAL = {
    "monvy": {"fullBleed": "#005F9C", "logo": {"colors": ["#005F9C", "#404040"], "mono": False}, "accent": ["#02FDA2"],
              "neutrals": {"dark": "#404040", "light": "#FFFFFF"}},
    "repairlab": {"fullBleed": None, "logo": {"colors": ["#000000", "#E30512"], "mono": True}, "accent": [],
                  "neutrals": {"dark": "#000000", "light": "#FFFFFF"}},
    "bernheze-makelaars-rebranding": {"fullBleed": "#1D2C25", "logo": {"colors": ["#FFFFFF"], "mono": True}, "accent": ["#5C846B"],
                                      "neutrals": {"dark": "#1D2C25", "light": "#F8F8F8"}},
    "the-sandt": {"fullBleed": "#1A1E40", "logo": {"colors": ["#011E41", "#6A4231"], "mono": False}, "accent": ["#BE8A33"],
                  "neutrals": {"dark": "#1A1E40", "light": "#FFFFFF"}},
    "plenty-planet": {"fullBleed": "#092540", "logo": {"colors": ["#092540", "#23AAD5", "#80C4E2", "#82B444"], "mono": False}, "accent": [],
                      "neutrals": {"dark": "#092540", "light": "#FFFFFF"}},
}


def _import_dir21():
    import builtins
    import io
    import os
    palf = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r14/palette/palettes.json"
    if os.path.exists(palf):
        import dir21
    else:
        _open = builtins.open
        builtins.open = lambda f, *a, **k: io.StringIO("{}") if str(f) == palf else _open(f, *a, **k)
        try:
            import dir21
        finally:
            builtins.open = _open
    for k, v in MYPAL.items():
        dir21.PAL.setdefault(k, v)
    return dir21


_import_dir21()
from dir21 import *  # noqa: F401,F403,E402
from dir21 import CALM, R, S, cam, build, deck, row, fan, palette, asset, snip, logo_html, swatch_html, card_from, card_pngs  # noqa: E402

A = Path(S) / "r22" / "a"                 # this group's derived assets (crops of real designs / prints)
CASES = Path("/home/user/M7/public/media/cases")
SHOW = Path("/home/user/M7/public/media/showcase")


def crop(src, box, name, slug):
    """A crop of a real design / print image (never altered otherwise), saved once as a high-quality JPEG."""
    from PIL import Image
    out = A / slug / f"{name}.jpg"
    if not out.exists():
        out.parent.mkdir(parents=True, exist_ok=True)
        Image.open(src).convert("RGB").crop(box).save(out, quality=95)
    return asset(out)


def still(src, name, slug, maxw=None):
    """A whole real image (webp etc.) as a JPEG card source."""
    from PIL import Image
    out = A / slug / f"{name}.jpg"
    if not out.exists():
        out.parent.mkdir(parents=True, exist_ok=True)
        im = Image.open(src).convert("RGB")
        if maxw and im.width > maxw:
            im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
        im.save(out, quality=95)
    return asset(out)


def apath(a):
    return a["src"].replace("file://", "")


def calm_cam(z, d0=(0, 0), d1=(0, 0), r=(0, 0), ease="drift", **kw):
    return dict(cam(z, d0, d1, r, ease), **dict(CALM, **kw))


# ---------------------------------------------------------------- Monvy
def monvy():
    m = "monvy"
    D = CASES / m
    kanban = crop(D / "s-fa-design-01.webp", (474, 110, 1930, 900), "design-kanban", m)
    chart = crop(D / "s-fa-design-04.webp", (540, 190, 2330, 770), "design-chart", m)
    flow = crop(D / "s-fa-design-03.webp", (834, 430, 2034, 952), "design-workflow", m)
    offer = crop(D / "s-fa-design-04.webp", (540, 790, 2330, 1010), "design-offerte", m)
    # platform first (menu -> module page -> its dashboard), then the brand (brandbook, logo + palette)
    return dict(host=m, tx="softfade", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("clean", 23),
                labels=["Apps", "Branding", "Websites"], shots=[
        dict(k="scene", secs=6.6, spec=dict(slug=m, t="d18_mac_profile__k1", content="flow", flow="flow-31-features-facturatie-desktop.mp4", ft0=0.5,
                                            cam=calm_cam((1.55, 1.8), (0.02, 0.0), (-0.01, -0.01), (-0.5, 0.0), "inOutSine"))),
        dict(k="float", secs=3.9, bg="frost", cards=deck([(kanban, 820), (chart, 780), (flow, 700), (offer, 740)], seed=3, calm=True)),
        dict(k="scene", secs=6.4, spec=dict(slug=m, t="d02_mac_top__k1", content="flow", flow="flow-31-features-facturatie-desktop.mp4", ft0=8.1,
                                            cam=calm_cam((1.5, 1.75), (0.0, 0.0), (0.0, -0.01), (0.5, 0.0)))),
        dict(k="scene", secs=3.8, spec=dict(slug=m, t="d05_phone_lean__p", content="flow", flow="flow-32-menu-mobile.mp4", ft0=0.4,
                                            cam=cam((1.16, 1.32), (0.0, -0.03), (0.0, 0.01), (1.0, 0.0), "inOutSine"))),
        dict(k="book", secs=3.6, slug="monvy-branding", a=("l1", 0.05, 0.0, 1060), b=("r1", 0.05, 0.0, 980)),
        dict(k="brand", secs=3.4, bg="#004B7C", bg2="#0A73B8", cards=row(m, palette(m, 4))),
    ])


# ---------------------------------------------------------------- Repairlab
def repairlab():
    rl = "repairlab"
    C, K = CASES / "repairlab-content", CASES / rl
    wrap = still(C / "s-fa-car-wrap.webp", "print-car-wrap", rl, maxw=1600)
    poster = still(C / "s-fa-poster-find-my.webp", "print-poster-find-my", rl, maxw=1200)
    flyer = still(C / "s-fa-flyer-screenprotector.webp", "print-flyer", rl, maxw=1200)
    kiosk = crop(K / "02.webp", (330, 154, 726, 978), "kiosk-servicedesk", rl)
    # the repair flow as one story over three devices: brand -> device (desk), model search -> prices (display),
    # the print / kiosk / wrap pile, the booking with date and slot (macro), the brand sheets, the booking on mobile
    return dict(host=rl, tx="blur", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("dynamic", 46),
                labels=["Websites", "Tools", "Branding"], shots=[
        dict(k="scene", secs=6.4, spec=dict(slug=rl, t="d19_studio_front__k1", content="flow", flow="flow-31-merk-model-prijzen-desktop.mp4", ft0=0.8,
                                            cam=calm_cam((1.55, 1.8), (0.0, 0.0), (0.0, -0.02), (0.4, 0.0), "inOutSine"))),
        dict(k="scene", secs=6.4, spec=dict(slug=rl, t="d15_mac_phone_desk__k1", content="flow", flow="flow-31-merk-model-prijzen-desktop.mp4", ft0=8.2,
                                            cam=calm_cam((1.5, 1.75), (0.02, 0.0), (-0.01, -0.01), (-0.5, 0.0)))),
        dict(k="float", secs=3.8, bg="#0B0B0C", bg2="#202022", cards=deck([(wrap, 880), (poster, 470), (kiosk, 396)], seed=1, calm=True)),
        dict(k="scene", secs=5.9, spec=dict(slug=rl, t="d13_macro_mac__k1", content="flow", flow="flow-32-reparatie-afspraak-desktop.mp4", ft0=1.0,
                                            cam=calm_cam((1.6, 1.85), (0.0, 0.0), (0.0, -0.02), (0.5, 0.0), "inOutSine"))),
        dict(k="scene", secs=6.4, spec=dict(slug=rl, t="d18_mac_profile__k1", content="flow", flow="flow-32-reparatie-afspraak-desktop.mp4", ft0=6.9,
                                            cam=calm_cam((1.55, 1.8), (0.02, 0.0), (-0.01, -0.01), (-0.5, 0.0)))),
        dict(k="book", secs=3.4, slug=rl, a=("spread", 0.0, -0.25, 1100), b=("r1", 0.1, 0.0, 760)),
    ])


# ---------------------------------------------------------------- Bernheze
def pages(items, seed=0):
    """Printed pages laid out on a table: the cover on top, inner pages fanned around it, each landing calmly (no
    spring), a light tilt back so they read as paper on a surface; the camera drifts slowly."""
    spots = [(300, 630, -7.0), (785, 675, 6.0), (320, 1175, 4.5), (770, 1230, -5.0), (540, 900, -1.5)]
    cards = []
    n = len(items)
    for i, (s, w) in enumerate(items):
        x, y, rz = spots[i] if i < n - 1 else spots[-1]
        top = i == n - 1
        c = card_from(s, w, x=x, y=y, z=(140 if top else 20 + i * 18), rz=rz, rx=10, tin=0.12 + i * 0.3, din=1.15, ease="outCubic", zi=i,
                      drift=0.12, radius=6, **{"from": {"y": -150, "z": 110, "rz": rz * 0.4, "rx": -2}})
        c["shadow"] = "0 40px 70px -20px rgba(0,0,0,0.55), 0 12px 24px -10px rgba(0,0,0,0.35)"
        cards.append(c)
    return cards, {"rx0": 6, "rx1": 3, "ry0": -2, "ry1": 2, "z0": -30, "z1": 30}


def social(items):
    """Social posts laid out side by side like a feed preview: one square cover on top, two portrait posts below,
    each fully readable, landing one by one without bounce; a slow, quiet camera."""
    spots = [(540, 640, 0.0, 620), (300, 1250, -3.5, 440), (780, 1270, 3.0, 450)]
    cards = []
    for i, (s, _) in enumerate(items):
        x, y, rz, w = spots[i]
        cards.append(card_from(s, w, x=x, y=y, z=20 + i * 30, rz=rz, rx=4, tin=0.15 + i * 0.35, din=1.1, ease="outCubic", zi=i,
                               drift=0.12, radius=20, **{"from": {"y": -140, "z": 90, "rz": rz * 0.5, "rx": -3}}))
    return cards, {"rx0": 5, "rx1": 3, "ry0": -2, "ry1": 2, "z0": -30, "z1": 20}


def bernheze():
    bz = "bernheze-makelaars-rebranding"
    IM = SHOW / "bernheze"
    cover = still(IM / "im-cover.webp", "im-cover", bz)
    p03 = still(IM / "im-p03.webp", "im-p03", bz)
    p04 = still(IM / "im-p04.webp", "im-p04", bz)
    p07 = still(IM / "im-p07.webp", "im-p07", bz)
    p09 = still(IM / "im-p09.webp", "im-p09", bz)          # (im-p05 holds financial figures: never used)
    return dict(host=bz, tx="focus", txout=False, txease="inOutQuart", fps=60, intro="ramp", logo=260, music=("calm", 53),
                labels=["Branding", "Websites", "Print"], shots=[
        dict(k="scene", secs=7.0, spec=dict(slug=bz, t="d13_macro_mac__k1", content="flow", flow="flow-31-afdelingen-desktop.mp4", ft0=0.5,
                                            cam=calm_cam((1.55, 1.8), (0.0, 0.0), (0.0, -0.02), (-0.5, 0.0), "inOutSine"))),
        dict(k="book", secs=3.8, slug=bz, a=("r1", -0.1, 0.0, 1060), b=("l1", 0.05, 0.0, 860)),
        dict(k="float", secs=4.4, bg="#16221C", bg2="#2A3F34", exit="drop", cards=pages([(p03, 400), (p07, 400), (p04, 400), (p09, 440), (cover, 600)])),
        dict(k="scene", secs=6.0, spec=dict(slug=bz, t="d18_mac_profile__k1", content="flow", flow="flow-31-afdelingen-desktop.mp4", ft0=7.5,
                                            cam=calm_cam((1.5, 1.75), (0.02, 0.0), (-0.01, -0.01), (0.5, 0.0)))),
        dict(k="brand", secs=3.4, bg="#1D2C25", bg2="#2A3F34", cards=fan(bz, palette(bz, 3))),
    ])


# ---------------------------------------------------------------- The Sandt (no branding by M7: no logo/palette cards)
def the_sandt():
    sd = "the-sandt"
    D = CASES / sd
    house = still(D / "s-fa-design-01.webp", "design-diamond-house", sd)
    renders = crop(D / "s-fa-design-02.webp", (112, 1120, 1720, 2165), "design-renders", sd)
    plan = still(D / "s-fa-design-05.webp", "design-bouwtekeningen", sd)
    covers = still(D / "s-fa-brochure-covers.webp", "print-brochure-covers", sd)
    ai = still(SHOW / "thesandt" / "ai-answer.webp", "aeo-ai-answer", sd)
    hero43 = crop(D / "s-fa-design-01.webp", (0, 0, 1827, 1370), "design-diamond-house-43", sd)      # floating cards of f01
    tabs = crop(D / "s-fa-design-03.webp", (0, 0, 1827, 600), "design-bahamas-tabs", sd)
    # the brochure funnel: the online brochure (chapters), what sits behind it (FYEO designs + the printed
    # brochures), the video tabs, the FYEO gate, the landing page (how it works) and the FAQ that AI engines cite
    return dict(host=sd, tx="zoomthrough", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("clean", 61),
                labels=["Websites", "Automation", "SEO"], shots=[
        dict(k="scene", secs=6.4, spec=dict(slug=sd, t="d18_mac_profile__k1", content="flow", flow="flow-31-brochure-desktop.mp4", ft0=0.4,
                                            cam=calm_cam((1.5, 1.75), (0.0, 0.0), (0.0, -0.01), (0.5, 0.0), "inOutSine"))),
        dict(k="float", secs=4.0, bg="#141834", bg2="#26305A", cards=deck([(house, 760), (renders, 720), (plan, 620), (covers, 760)], seed=1, calm=True)),
        dict(k="scene", secs=5.0, spec=dict(slug=sd, t="d19_studio_front__k1", content="flow", flow="flow-31-brochure-desktop.mp4", ft0=8.4,
                                            cam=calm_cam((1.5, 1.75), (0.02, 0.0), (-0.01, -0.01), (-0.5, 0.0)))),
        dict(k="scene", secs=3.8, spec=dict(slug=sd, t="f01_mac_float__p", content="flow", flow="flow-32-fyeo-desktop.mp4", ft0=0.3,
                                            cards={"snip_1": apath(covers), "snip_2": apath(hero43), "snip_3": apath(tabs)},
                                            cam=cam((1.22, 1.33), (0.0, 0.1), (0.0, 0.07), (0.6, 0.0), "inOutSine"))),
        dict(k="scene", secs=6.4, spec=dict(slug=sd, t="d13_macro_mac__k1", content="flow", flow="flow-33-landing-faq-desktop.mp4", ft0=5.2,
                                            cam=calm_cam((1.55, 1.8), (0.0, 0.0), (0.0, -0.02), (0.5, 0.0), "inOutSine")),
             reveal=[dict(src=ai, w=900, y=1480, tin=4.0)]),
    ])


# ---------------------------------------------------------------- Plenty Planet
def plenty():
    pp = "plenty-planet"
    C = CASES / "plenty-planet-content"
    post_a = crop(C / "s-fa-posts.webp", (92, 102, 1164, 1434), "social-post-carparks", pp)
    post_b = crop(C / "s-fa-posts.webp", (1236, 102, 2312, 1434), "social-post-zon", pp)
    slide = crop(C / "s-fa-carousel.webp", (862, 102, 1538, 966), "social-carousel-2", pp)
    swipe = still(C / "s-fa-swipe-cover.webp", "social-swipe-cover", pp)
    # website (call to action -> intake configurator), the social content, the subsidy check from its intro to the
    # last question and the form step, the brand sheets, the cases slider with the brand cards
    return dict(host=pp, tx="fade", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("clean", 72),
                labels=["Websites", "Tools", "Marketing"], shots=[
        dict(k="scene", secs=6.6, spec=dict(slug=pp, t="d19_studio_front__k1", content="flow", flow="flow-31-intake-configurator-desktop.mp4", ft0=0.5,
                                            cam=calm_cam((1.5, 1.8), (0.0, 0.0), (0.0, -0.02), (-0.5, 0.0), "inOutSine"))),
        dict(k="float", secs=3.8, bg="#D3DDE4", bg2="#EEF2F5", cards=social([(swipe, 0), (slide, 0), (post_b, 0)])),
        dict(k="scene", secs=6.6, spec=dict(slug=pp, t="d15_mac_phone_desk__k1", content="flow", flow="flow-32-subsidiecheck-desktop.mp4", ft0=1.0,
                                            cam=calm_cam((1.5, 1.75), (0.02, 0.0), (-0.01, -0.01), (0.5, 0.0)))),
        dict(k="scene", secs=6.6, spec=dict(slug=pp, t="d13_macro_mac__k1", content="flow", flow="flow-32-subsidiecheck-desktop.mp4", ft0=12.8,
                                            cam=calm_cam((1.6, 1.85), (0.0, 0.0), (0.0, -0.02), (-0.5, 0.0), "inOutSine"))),
        dict(k="book", secs=3.2, slug=pp, a=("r1", 0.1, 0.0, 1000), b=("l1", -0.05, 0.0, 860)),
        dict(k="scene", secs=3.8, spec=dict(slug=pp, t="f03_studio_float__p", content="flow", flow="flow-33-cases-slider-desktop.mp4", ft0=0.5,
                                            cards=dict(card_pngs(pp, "f03_studio_float__p", "brand"), snip_3=apath(post_b)),
                                            cam=cam((1.26, 1.33), (0.0, 0.11), (0.0, 0.09), (-0.6, 0.0), "inOutSine"))),
    ])


def preview_float(name, sh, ts=(1.0, 2.5, 3.8), out=None):
    """One-frame previews of a float/brand shot (engine stills) to check a layout before the full build."""
    import lib
    from dir21 import gradient, media, W, H
    from pathlib import Path as _P
    d = A / "preview"; d.mkdir(parents=True, exist_ok=True)
    g = gradient(sh["bg"], sh.get("bg2", sh["bg"]), d / f"{name}-bg.jpg")
    cards, camv = sh["cards"]
    span = sh["secs"] + 0.8
    spec = {"w": W, "h": H, "fps": 30, "duration": span, "layers": [{"type": "plain", "color": "#030304"},
            media(lib.furl(g), 0, span, {"type": "none"}, {"type": "none"}, kb={"s0": 1.04, "s1": 1.0}),
            {"type": "float3d", "t0": 0, "t1": span - 0.05, "cards": cards, "camera": camv, "persp": 1700, "exit": {"type": sh.get("exit", "scatter"), "d": 0.65}}]}
    return lib.render(spec, _P(out or d / f"{name}.jpg"), still=list(ts))


RECIPES = {"the-sandt": the_sandt, "plenty-planet": plenty, "monvy": monvy, "repairlab": repairlab, "bernheze-makelaars-rebranding": bernheze, "bernheze": bernheze}


if __name__ == "__main__":
    import time
    for a in sys.argv[1:]:
        slug = a.replace("-final", "")
        t0 = time.time()
        name = f"{slug}-final"
        print("reel", name, flush=True)
        print(" ->", build(name, RECIPES[slug]()), f"{time.time() - t0:.0f}s", flush=True)
