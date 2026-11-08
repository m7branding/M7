"""Round 22, group c: final-style reels (the approved Buitenstate/Steddion style) for Silvr, The Digital Clinic,
MindYourPass, Expociety (app) and Boutique Hotels Gelderland. Each reel has its own camera mix, shot order, floating
layout and transition, on the same frame: 60 fps, the blur-ramp intro with the small M7 lines, calm cursor-following
close-ups on the 4K templates, real recorded interactions (r21 takes, `S/r21/_lib/sites/<slug>22.js`), real brand
assets and brandbooks.

  python reels22_c.py <name ...>              build reels (e.g. silvr-final)
  python reels22_c.py preview <name> [i ...]  framing stills of the scene shots
  python reels22_c.py deliver <name ...>      copy to S/r22/deliver/reels-v4/<slug>/ and delete the shot frames
  (Blender venv) python reels22_c.py '<json spec>' <outdir>
                                              one scene shot through shots21, with two extras in the spec:
                                              tint/fam/bg (the set's colour, e.g. a verified brand dark) and
                                              app=<case media file> + crop (a real app design on a phone screen)
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path


def _shot22(js, outd):
    """Venv entry for scene shots (dir21.scene_shot calls this module instead of shots21 directly)."""
    import os
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import shots21 as SH
    spec = json.loads(js)
    over = {k: spec[k] for k in ("tint", "fam", "bg") if spec.get(k)}
    if over:
        _base = SH.base_st
        SH.base_st = lambda slug, t: dict(_base(slug, t), **over)
    if spec.get("app"):             # a real app design (case media) on the phone screen, no browser bar
        import dev16 as D
        D.plan = lambda: {spec["slug"]: [dict(t=spec["t"], src=spec["app"], crop=spec.get("crop"), n=0, **({"tint": over["tint"]} if "tint" in over else {}))]}
        spec["content"] = "design"
    print("frames", SH.run(spec, outd))


if __name__ == "__main__" and len(sys.argv) > 2 and sys.argv[1].lstrip().startswith("{"):
    _shot22(sys.argv[1], sys.argv[2])
    sys.exit(0)

sys.path.insert(0, str(Path(__file__).resolve().parent))

# The verified palettes of this group's clients (copied from S/r14/palette/palettes.json, the source dir21 reads at
# import). Only used when that file is missing (it was deleted from the shared scratch during round 22).
PAL_FALLBACK = {
    "silvr": {"logo": {"colors": ["#FFFFFF", "#D2D2D2"], "mono": False}, "neutrals": {"dark": "#112032", "light": "#FFFFFF"}, "fullBleed": None, "accent": []},
    "the-digital-clinic": {"logo": {"colors": ["#66C9BA", "#6286A9", "#5F4D9B", "#5C0F8B", "#1D1D1B"], "mono": False},
                           "neutrals": {"dark": "#1D1D1B", "light": "#F7F9FE"}, "fullBleed": None, "accent": ["#66C3B9", "#6286A9"]},
    "mindyourpass": {"logo": {"colors": ["#AED8E9", "#18344E", "#46A7CB"], "mono": False}, "neutrals": {"dark": "#18344E", "light": "#FFFFFF"},
                     "fullBleed": "#18344E", "accent": ["#46A7CB", "#69E398"]},
    "expociety-app": {"logo": {"colors": ["#4A2DFF", "#F02B88", "#141431"], "mono": False}, "neutrals": {"dark": "#141431", "light": "#FFFFFF"},
                      "fullBleed": "#141431", "accent": ["#F02B88", "#4A2DFF"]},
    "boutique-hotels-gelderland": {"logo": {"colors": ["#F2EBE2"], "mono": True}, "neutrals": {"dark": "#1C1C1C", "light": "#F2EBE2"},
                                   "fullBleed": None, "accent": ["#D7BA8F"]},
}
PAL_FALLBACK["expociety-branding"] = PAL_FALLBACK["expociety-app"]
_PALF = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r14/palette/palettes.json"
if not Path(_PALF).exists():
    import builtins
    import io
    _open = builtins.open
    builtins.open = lambda f, *a, **k: io.StringIO(json.dumps(PAL_FALLBACK)) if str(f) == _PALF else _open(f, *a, **k)
    try:
        import dir21  # noqa: E402
    finally:
        builtins.open = _open
from dir21 import *  # noqa: E402,F401,F403
import dir21  # noqa: E402

dir21.SHOTS = str(Path(__file__).resolve())       # scene shots go through _shot22 (tint / app-design extras)
CAP21 = R / "cap"
DELIVER = Path(S) / "r22" / "deliver" / "reels-v4"
CASES_ = Path("/home/user/M7/public/media/cases")


def snip21(slug, name):
    """A round-22 still (2x snippet or close-up) from the r21 capture dir, cleaned for floating like dir21.snip."""
    old = dir21.CAP15
    try:
        dir21.CAP15 = CAP21
        return snip(slug, name)
    finally:
        dir21.CAP15 = old


def media_asset(slug, name, crop=None, out_name=None, max_w=None):
    """A real case media file (brand sheet, ad creative, app design) as a floating card source; webp -> jpg/png,
    optionally cropped (x0, y0, x1, y1 in source px)."""
    from PIL import Image
    src = CASES_ / slug / name
    out = R / "snips" / slug / (out_name or (Path(name).stem + (("-" + "-".join(map(str, crop))) if crop else "") + ".png"))
    if not out.exists():
        out.parent.mkdir(parents=True, exist_ok=True)
        im = Image.open(src)
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        if crop:
            im = im.crop(tuple(crop))
        if max_w and im.width > max_w:
            im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
        im.save(out)
    from PIL import Image as _I
    im2 = _I.open(out)
    return {"src": lib.furl(out), "aw": im2.width, "ah": im2.height, "alpha": False}


# ---------------------------------------------------------------- calm layouts (no spring, little drift)
def calm_hero(items, spots=None, seed=0):
    """One big card in front, smaller ones settling around it; outCubic, no overshoot. spots: per extra card
    (x, y, z, ry, rz)."""
    (big, wb), *rest = items
    bx, by = (spots or {}).get("big", (540, 960)) if isinstance(spots, dict) else (540, 960)
    cards = [card_from(big, wb, x=bx, y=by, z=40, rx=4, ry=(-5 if seed % 2 else 5), tin=0.55, din=1.2, ease="outCubic", drift=0.12, zi=5,
                       **{"from": {"z": -260, "y": 90, "rx": 8}})]
    sp = (spots or {}).get("rest") if isinstance(spots, dict) else spots
    sp = sp or [(300, 520, -120, 7, -2.0), (790, 1380, -80, -7, 1.6), (780, 470, -160, -6, 1.2)]
    for i, (s, w) in enumerate(rest[:len(sp)]):
        x, y, z, ry, rz = sp[i]
        cards.append(card_from(s, w, x=x, y=y, z=z, ry=ry, rz=rz, rx=3, tin=0.12 + i * 0.22, din=1.1, ease="outCubic", drift=0.1,
                               zi=(6 + i if z > 40 else i), **{"from": {"y": (y - 960) * 0.25, "z": z - 200, "rx": 0}}))
    return cards, {"rx0": 4, "rx1": 2, "ry0": -2, "ry1": 2, "z0": -20, "z1": 30}


def calm_cascade(items, seed=0):
    """A diagonal run of cards, top-left to bottom-right (or mirrored), each landing softly in turn."""
    n = len(items)
    cards = []
    for i, (s, w) in enumerate(items):
        k = i / max(1, n - 1)
        x = 380 + 320 * k if seed % 2 == 0 else 700 - 320 * k
        cards.append(card_from(s, w, x=x, y=560 + 820 * k, z=-80 + 120 * k, rx=5, ry=(-9 if seed % 2 == 0 else 9), rz=(-1.2 if seed % 2 == 0 else 1.2),
                               tin=0.15 + i * 0.32, din=1.1, ease="outCubic", drift=0.12, zi=i,
                               **{"from": {"y": 110, "z": -220, "rx": 10}}))
    return cards, {"ry0": -3, "ry1": 3, "rx0": 3, "rx1": 1, "z0": -20, "z1": 30}


def scene(slug, t, flow, ft0, secs, z, d0=(0, 0), d1=(0, 0), r=(0, 0), ease="drift", reveal=None, **kw):
    """A cursor-following close-up of a recorded take on a template (the calm camera)."""
    spec = dict(slug=slug, t=t, content="flow", flow=flow, ft0=ft0, cam=dict(cam(z, d0, d1, r, ease), **CALM))
    spec.update(kw)
    sh = dict(k="scene", secs=secs, spec=spec)
    if reveal:
        sh["reveal"] = reveal
    return sh


def fcards(slug, t, **over):
    """The floating cards of an f-template: the brand set (logo cards, palette strip) with some slots replaced by real
    r22 snippets (snip_1='snippet-..png') or case media crops (a dict from media_asset)."""
    meta = json.load(open(f"{S}/r12/tpl/{t}/meta.json"))
    slots = {x["role"]: meta["glass"][x["type"]]["px"] for x in meta["screens"].values() if x["role"].startswith("snip_")}
    d, jobs = {}, []
    for role, (pw, ph) in sorted(slots.items()):      # dir21.card_pngs, with this group's own jobs file (no race)
        f = R / "cards" / f"{slug}-{t}-{role}.jpg"
        html = strip_html(palette(slug, 4)) if pw / ph > 2 else logo_html(slug)
        if not f.exists():
            jobs.append({"spec": {"w": pw, "h": ph, "layers": [{"type": "html", "x": 0, "y": 0, "w": pw, "html": f'<div style="position:relative;width:{pw}px;height:{ph}px">{html}</div>'}]},
                         "out": str(f), "t": 5})
        d[role] = str(f)
    if jobs:
        (R / "cards").mkdir(parents=True, exist_ok=True)
        jp = R / "cards" / "jobs-22c.json"
        jp.write_text(json.dumps(jobs))
        subprocess.run(["node", str(HERE / "batch.cjs"), str(jp)], capture_output=True, text=True, check=True)
    for k, v in over.items():
        d[k] = v["src"].replace("file://", "") if isinstance(v, dict) else str(CAP21 / slug / v)
    return d


sv, tc, mp, ex, bh = "silvr", "the-digital-clinic", "mindyourpass", "expociety-app", "boutique-hotels-gelderland"


def reels22(only=None):
    """The recipes; built lazily (only the requested ones), so a reel whose takes are not recorded yet does not
    break the others."""
    out = {}
    for name, fn in RECIPES.items():
        if only is None or name in only:
            out[name] = fn()
    return out


def r_silvr():
    # Silvr: the customer journey. The hero picks the vehicle and lands on the plate step (no plate typed: the site
    # offers no demo plate; its example plates are registered vehicles), the amount step of the same form (slider,
    # stops on the hover: step 5's layout breaks at 1440 px), the real brandbook, the five process cards stacking, the
    # snippets as a calm hero stack, the contract tabs, the vehicles swiped on a phone.
    return dict(host=sv, tx="blur", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("clean", 112),
                            labels=["Branding", "Websites", "Tools"], shots=[
            scene(sv, "d18_mac_profile__k1", "flow-21-journey-desktop.mp4", 0.3, 6.0, (1.55, 1.85), (0.02, 0.0), (0.0, -0.01), (0.5, 0.0), "inOutSine"),
            scene(sv, "d19_studio_front__k1", "flow-25-bedrag-desktop.mp4", 0.3, 5.0, (1.5, 1.8), (0.0, 0.0), (0.0, -0.01), (-0.4, 0.0)),
            dict(k="book", secs=3.6, slug=sv, a=("l1", 0.15, 0.0, 1000), b=("r1", 0.05, 0.0, 860)),
            scene(sv, "d13_macro_mac__k1", "flow-22-proces-desktop.mp4", 2.6, 6.0, (1.55, 1.8), (0.0, 0.0), (0.0, -0.02), (0.4, 0.0), "inOutSine"),
            dict(k="float", secs=3.6, bg="frost", cards=calm_hero([(snip21(sv, "snippet-24-proceskaart.png"), 880), (snip21(sv, "snippet-22-voertuigkaart.png"), 300),
                                                                    (snip21(sv, "snippet-23-voertuigkaart.png"), 300), (snip21(sv, "snippet-21-aanvraag-widget.png"), 660)],
                                                                   spots={"big": (540, 1010), "rest": [(290, 560, -140, 7, -2.0), (790, 600, -110, -7, 1.6), (560, 1450, 90, 0, -1.0)]})),
            scene(sv, "d02_mac_top__k1", "flow-23-contract-tabs-desktop.mp4", 0.4, 5.0, (1.5, 1.75), (0.02, 0.0), (0.0, -0.01), (0.5, 0.0)),
            scene(sv, "d16_phone_plinth__a", "flow-26-mobiel-mobile.mp4", 2.0, 4.0, (1.12, 1.3), (0.0, 0.03), (0.0, -0.02), (0, 0), "inOutSine"),
        ])


def r_tdc():
    # The Digital Clinic: website, public intake and the portal as the site presents it. The treatments menu on the
    # studio display, the intake steps and its first question (left empty) on the desk, the logo and the verified
    # gradient palette as a row, the numbered timeline in profile, the four service cards (intake, treatment,
    # delivery, portal) cascading, a medicine page on the iPad, the phone with the portal/intake cards and palette.
    return dict(host=tc, tx="focus", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("calm", 121),
                                         labels=["Websites", "Apps", "Automation"], shots=[
            scene(tc, "d19_studio_front__k1", "flow-21-menu-behandeling-desktop.mp4", 0.3, 4.6, (1.5, 1.8), (0.0, 0.0), (0.0, -0.01), (-0.5, 0.0), "inOutSine"),
            scene(tc, "d15_mac_phone_desk__k1", "flow-22-intake-desktop.mp4", 0.6, 6.6, (1.5, 1.75), (0.02, 0.0), (-0.01, -0.01), (0.4, 0.0)),
            dict(k="brand", secs=3.4, bg="#4A0C70", bg2="#5F4D9B", cards=row(tc, palette(tc, 5))),
            scene(tc, "d18_mac_profile__k1", "flow-23-stappen-desktop.mp4", 2.4, 5.8, (1.5, 1.75), (0.03, 0.01), (-0.02, -0.01), (-0.5, 0.1)),
            dict(k="float", secs=3.8, bg="frost", cards=calm_cascade([(snip21(tc, "snippet-21-stapkaart.png"), 470), (snip21(tc, "snippet-22-stapkaart.png"), 470),
                                                                       (snip21(tc, "snippet-23-stapkaart.png"), 470), (snip21(tc, "snippet-24-stapkaart.png"), 470)], seed=0)),
            scene(tc, "d09_ipad_keyboard__q1", "flow-24-medicijn-desktop.mp4", 0.3, 3.6, (1.18, 1.33), (0.0, 0.0), (0.0, -0.01), (0, 0), "inOutSine"),
            scene(tc, "f02_phone_float__p", "flow-26-mobiel-mobile.mp4", 1.2, 4.0, (1.18, 1.3), (0.0, 0.035), (0.0, 0.025), (-0.6, 0.0), tint="#2E0846",
                  cards=fcards(tc, "f02_phone_float__p", snip_1="snippet-24-stapkaart.png", snip_3="snippet-21-stapkaart.png")),
        ])


# MindYourPass: the six LinkedIn ad creatives of the ads grid (690 px tiles), crops of the real artwork
MYP_ADS = {f"ad{i + 1}": (x, y, x + 690, y + 690) for i, (x, y) in enumerate([(110, 110), (855, 110), (1600, 110), (110, 855), (855, 855), (1600, 855)])}
# Expociety: the four app screens of the app-screens board (Event details, Invite options, My tickets, Advanced invite)
EXPO_SCREENS = {"event": (170, 165, 570, 1034), "invite": (726, 217, 1126, 1158), "tickets": (1282, 165, 1682, 1034), "advanced": (1838, 217, 2238, 1088)}


def myp_ad(k):
    return media_asset("mindyourpass", "s-fa-ads-grid.webp", crop=MYP_ADS[k], out_name=f"ad-{k}.png")


def expo_screen(k):
    return media_asset("expociety-app", "s-fa-app-screens.webp", crop=EXPO_SCREENS[k], out_name=f"screen-{k}.png")


def r_myp():
    # MindYourPass: brand first. The real brandbook, the gemeenten page (BIO-norm, the risk figures) in macro, the
    # LinkedIn ads M7 makes for them as a calm deck, the Wachtwoordmanager 2.0 tabs from above, the mkb benchmark on
    # the studio display, the customer stories carousel with an ad revealed on the desk, the onderwijs page on a
    # leaning phone on the logo's light blue.
    return dict(host=mp, tx="softfade", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("clean", 133),
                labels=["Websites", "Branding", "Marketing"], shots=[
        dict(k="book", secs=3.8, slug=mp, a=("spread", -0.12, 0.0, 1100), b=("r1", -0.08, 0.0, 820)),
        scene(mp, "d13_macro_mac__k1", "flow-21-gemeenten-desktop.mp4", 0.9, 6.6, (1.55, 1.8), (0.0, 0.0), (0.0, -0.02), (0.5, 0.0), "inOutSine"),
        dict(k="float", secs=4.0, bg="#102538", bg2="#18344E", cards=deck([(myp_ad("ad2"), 600), (myp_ad("ad1"), 560), (myp_ad("ad5"), 540), (myp_ad("ad6"), 520)], seed=1, calm=True)),
        scene(mp, "d02_mac_top__k1", "flow-22-wachtwoordmanager-tabs-desktop.mp4", 0.3, 5.4, (1.5, 1.75), (0.02, 0.0), (0.0, -0.01), (-0.5, 0.0)),
        scene(mp, "d19_studio_front__k1", "flow-23-mkb-desktop.mp4", 2.4, 5.0, (1.5, 1.8), (0.0, 0.0), (0.0, -0.01), (0.4, 0.0), "inOutSine"),
        # (the onderwijs FAQ is not used: its first answer shows the Webflow placeholder text on the live site)
        scene(mp, "d15_mac_phone_desk__k1", "flow-25-klantverhalen-desktop.mp4", 0.2, 3.4, (1.5, 1.75), (0.0, 0.0), (0.0, -0.01), (0.4, 0.0),
              reveal=[dict(src=myp_ad("ad4"), w=520, y=1430, tin=1.2)]),
        scene(mp, "d05_phone_lean__p", "flow-26-mobiel-mobile.mp4", 2.6, 4.6, (1.18, 1.33), (0.0, 0.0), (0.0, -0.01), (0, 0), "inOutSine", tint="#AED8E9"),
    ])


def r_expo():
    # Expociety: the app, only on phones (no desktop screens, which stay dark for an app-only case). The app's site on
    # a phone on a plinth in the brand navy, the real app screens cascading on navy, the brandbook, the audiences on a
    # floating phone with the logo and palette, the palette fanned on the brand blue, the features on a leaning phone,
    # an app screen itself (My tickets) on the plinth in the brand blue.
    return dict(host=ex, tx="zoomthrough", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("dynamic", 147),
                labels=["Apps", "UI/UX", "Branding"], shots=[
        scene(ex, "d16_phone_plinth__a", "flow-21-hero-levelup-mobile.mp4", 0.6, 4.6, (1.12, 1.3), (0.0, 0.03), (0.0, -0.03), (0, 0), "inOutSine", tint="#141431"),
        dict(k="float", secs=4.0, bg="#141431", bg2="#141431", cards=calm_cascade([(expo_screen("event"), 400), (expo_screen("invite"), 400),
                                                                                    (expo_screen("tickets"), 400), (expo_screen("advanced"), 400)], seed=1)),
        dict(k="book", secs=3.8, slug="expociety-branding", a=("cover", -0.05, 0.0, 900), b=("l1", 0.1, 0.0, 860)),
        scene(ex, "f02_phone_float__p", "flow-22-doelgroepen-mobile.mp4", 0.2, 3.9, (1.15, 1.3), (0.0, 0.03), (0.0, 0.02), (0.6, 0.0), tint="#141431",
              cards=fcards(ex, "f02_phone_float__p")),
        dict(k="brand", secs=3.6, bg="#141431", bg2="#4A2DFF", cards=fan(ex, palette(ex, 4))),
        scene(ex, "d05_phone_lean__p", "flow-23-features-mobile.mp4", 4.6, 4.8, (1.18, 1.33), (0.0, 0.0), (0.0, -0.01), (0, 0), "inOutSine", tint="#141431"),
        dict(k="scene", secs=3.6, spec=dict(slug=ex, t="d16_phone_plinth__a", app="s-fa-app-screens.webp", crop=list(EXPO_SCREENS["tickets"]), tint="#4A2DFF",
                                            cam=cam((1.15, 1.3), (0.0, 0.04), (0.0, -0.02), (0, 0), "inOutSine"))),
    ])


def r_bhg():
    # Boutique Hotels Gelderland: brand-led. The logo on a dark wall, the occasion search (Trou… -> the Trouwen
    # occasion page) in macro, the brandbook (logo variants, colours and type), the 'organiseren' overview of all
    # occasions in profile, the occasion page's hero with four occasion tiles, the occasions on a phone on its plinth.
    return dict(host=bh, tx="focus", txout=False, txease="inOutSine", fps=60, intro="ramp", logo=260, music=("calm", 151),
                labels=["Branding", "Websites", "SEO"], shots=[
        dict(k="scene", secs=3.6, spec=dict(slug=bh, t="b06_wall_logo__p", content="static", cam=cam((1.0, 1.14), (0.0, 0.0), (0.0, 0.0), (0, 0), "inOutSine"))),
        scene(bh, "d13_macro_mac__k1", "flow-21-zoeken-trouwen-desktop.mp4", 0.3, 5.6, (1.55, 1.85), (0.0, 0.0), (0.0, -0.02), (0.5, 0.0), "inOutSine"),
        dict(k="book", secs=3.8, slug=bh, a=("l1", 0.0, 0.0, 1000), b=("r1", 0.08, 0.0, 820)),
        scene(bh, "d18_mac_profile__k1", "flow-23-organiseren-desktop.mp4", 1.6, 6.0, (1.5, 1.75), (0.03, 0.01), (-0.02, -0.01), (-0.5, 0.1)),
        dict(k="float", secs=3.8, bg="frost", cards=calm_hero([(asset(CAP21 / bh / "crop-trouwen-hero.jpg"), 1000), (snip21(bh, "snippet-22-gelegenheid.png"), 420),
                                                                (snip21(bh, "snippet-23-gelegenheid.png"), 420), (snip21(bh, "snippet-25-gelegenheid.png"), 420)],
                                                               spots={"big": (540, 1010), "rest": [(285, 500, -140, 7, -2.0), (800, 540, -110, -7, 1.6), (560, 1500, 90, 0, -1.0)]})),
        scene(bh, "d16_phone_plinth__a", "flow-26-mobiel-mobile.mp4", 1.2, 4.0, (1.12, 1.3), (0.0, 0.03), (0.0, -0.02), (0, 0), "inOutSine", tint="#1C1C1C"),
    ])


RECIPES = {"silvr-final": r_silvr, "the-digital-clinic-final": r_tdc, "mindyourpass-final": r_myp, "expociety-app-final": r_expo,
           "boutique-hotels-gelderland-final": r_bhg}


def deliver(name):
    rc = reels22([name])[name]
    slug = name[:-len("-final")] if name.endswith("-final") else rc["host"]
    src = OUT / rc["host"] / f"{name}.mp4"
    dst = DELIVER / slug / f"{slug}-final.mp4"
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    shutil.rmtree(SH / name, ignore_errors=True)
    return dst


def preview(name, idx=None, at=(0.15, 0.85)):
    """Framing check: single frames of the scene shots (planned camera, no cursor follow) into S/r22/preview/<name>/."""
    out = Path(S) / "r22" / "preview" / name
    out.mkdir(parents=True, exist_ok=True)
    for i, sh in enumerate(reels22([name])[name]["shots"]):
        if sh["k"] != "scene" or (idx and i + 1 not in idx):
            continue
        spec = sh["spec"]
        if isinstance(spec.get("cards"), str):
            spec = dict(spec, cards=card_pngs(spec["slug"], spec["t"], spec["cards"], spec.get("ui", ())))
        for s_ in at:
            d = out / f"{i + 1:02d}-{s_}"
            venv(dir21.SHOTS, json.dumps(dict(spec, secs=4.0, fps=30, still=s_)), d)
            shutil.move(str(d / "still.jpg"), str(out / f"{i + 1:02d}-{sh['spec']['t']}-{s_}.jpg"))
            shutil.rmtree(d, ignore_errors=True)
            print(" preview", i + 1, s_, flush=True)
    return out


if __name__ == "__main__":
    args = sys.argv[1:]
    if args and args[0] == "preview":
        print(preview(args[1], [int(x) for x in args[2:]] or None))
        sys.exit(0)
    if args and args[0] == "deliver":
        for n in args[1:]:
            print(" delivered", deliver(n), flush=True)
    else:
        for n in [n for n in RECIPES if any(a == n or a in n for a in args)]:
            print("reel", n, flush=True)
            print(" ->", build(n, reels22([n])[n]), flush=True)
