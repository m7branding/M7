"""Static creatives: Instagram/LinkedIn carousels (1080×1350) and stories (1080×1920)."""
import html
import random

from lib import furl, ambient, still_frame
import media
from reels import fit_title
from reels2 import accent

CW, CH = 1080, 1350
INF = 1e9
COLORS = ["var(--g-brand)", "linear-gradient(90deg,#ffe53a,#ff7a1a)", "linear-gradient(90deg,#a35bff,#ff4fd8)", "linear-gradient(90deg,#3affff,#18ff59)", "linear-gradient(90deg,#4d7cff,#3affff)", "linear-gradient(90deg,#ff7a1a,#ff4fd8)"]


def bg(seed, amb=None, pixels="sides", strength=0.8, aurora=0.13):
    return {"type": "bg", "seed": seed, "pixels": pixels, "ambient": ([{"src": amb, "t0": -10, "t1": INF, "opacity": strength, "fade": 0.01}] if amb else []), "auroraStrength": aurora}


def img(src_path, rect, radius=34, pos="50% 50%"):
    return {"type": "media", "src": furl(src_path), "t0": -1, "t1": INF, "rect": rect, "frame": "card", "enter": {"type": "none"}, "exit": {"type": "none"}, "kb": {"s0": 1.0, "s1": 1.0}, "fit": "cover", "pos": pos, "radius": radius, "float": 0}


def text(x, y, w, kicker=None, title=None, sub=None, size=90, sub_size=34, align="left", n=None):
    return {"type": "text", "t0": 0, "t1": INF, "x": x, "y": y, "w": w, "kicker": kicker, "title": title, "sub": sub, "size": size, "subSize": sub_size, "align": align, "n": n, "kgap": 24, "sgap": 22}


def counter(i, n, x=CW - 250, y=88):
    return {"type": "html", "x": x, "y": y, "w": 170, "html": f'<div style="display:inline-block;float:right;padding:12px 20px;border-radius:999px;background:rgba(10,10,14,.55);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.14);font-weight:700;font-size:24px;letter-spacing:.18em;color:var(--teal)"><b style="color:#fff">{i:02d}</b> / {n:02d}</div>'}


def swipe(y=CH - 112):
    return {"type": "html", "x": CW - 380, "y": y, "w": 300, "html": '<div style="text-align:right;font-weight:600;font-size:28px;letter-spacing:.06em;color:#fff;opacity:.85">Swipe <span style="color:var(--teal)">→</span></div>'}


def badge(x, y, size=96):
    return {"type": "badge", "x": x, "y": y, "size": size}


def esc(s):
    return html.escape(s or "")


def images_for(slug, n):
    """n distinct strong images: stills first, then film posters."""
    out = [s["path"] for s in media.stills(slug)]
    for f in media.films(slug):
        if len(out) >= n + 2:
            break
        if not f["portrait"] and f["w"] >= 1280:
            out.append(still_frame(f["path"], min(2.0, f["dur"] / 3)))
    return out


def wrap(s, maxc):
    words, lines, cur = (s or "").split(), [], ""
    for w in words:
        if len(cur) + len(w) + 1 > maxc and cur:
            lines.append(cur)
            cur = w
        else:
            cur = (cur + " " + w).strip()
    if cur:
        lines.append(cur)
    return "|".join(lines)


def carousel(slug, cp, seed=1):
    """7 slides: cover, de vraag, 3 visual slides, wat we deden, outro. Returns [spec,...]."""
    random.seed(seed)
    c = media.cases()[slug]
    slides = cp.get("carousel") or []
    ims = images_for(slug, 4)
    if not ims:
        return []
    while len(ims) < 4:
        ims.append(ims[len(ims) % max(1, len(ims))])
    N = 7
    specs = []
    pil = [("Film" if p == "Video" else p) for p in (cp.get("pillars") or media.pillars(slug))]
    # 1 cover
    s1 = slides[0] if slides else {"title": c["client"], "text": cp.get("hook", "")}
    amb = ambient(ims[0])
    L = [bg(seed, amb), img(ims[0], {"x": 60, "y": 60, "w": 960, "h": 720}),
         text(80, 838, 920, "Case", wrap(c["client"], 20), None, fit_title(wrap(c["client"], 20), 920, 104, 48)),
         text(80, 838 + 24 + 30 + fit_title(wrap(c["client"], 20), 920, 104, 48) * 1.05 * (wrap(c["client"], 20).count("|") + 1) + 6, 920, None, accent(wrap(cp.get("hook") or s1.get("text", ""), 26), seed), None, 52),
         {"type": "pill", "t0": 0, "t1": INF, "x": 80, "y": CH - 132, "items": pil[:3] or ["M7"], "size": 26},
         swipe(), counter(1, N)]
    specs.append(dict(w=CW, h=CH, layers=L))
    # 2 de vraag
    s2 = slides[1] if len(slides) > 1 else {"kicker": "De vraag", "title": c["title"]["nl"], "text": ""}
    t2 = s2.get("title", "")
    L = [bg(seed + 1, None, pixels="sides"),
         {"type": "html", "x": 80, "y": 170, "w": 300, "html": '<div class="g-brand" style="font-weight:800;font-size:220px;line-height:1">&ldquo;</div>'},
         text(80, 420, 920, s2.get("kicker", "De vraag"), accent(wrap(t2, 18), seed + 1), s2.get("text"), fit_title(wrap(t2, 18), 920, 92, 58), 36),
         counter(2, N), badge(CW - 156, CH - 156, 76)]
    specs.append(dict(w=CW, h=CH, layers=L))
    # 3-5 visuals
    for k in range(3):
        sk = slides[2 + k] if len(slides) > 2 + k else {"kicker": "", "title": "", "text": ""}
        im = ims[1 + k]
        amb = ambient(im)
        tt = sk.get("title", "")
        L = [bg(seed + 2 + k, amb), img(im, {"x": 60, "y": 60, "w": 960, "h": 800}),
             text(80, 912, 920, sk.get("kicker"), accent(wrap(tt, 22), seed + k + 2), sk.get("text"), fit_title(wrap(tt, 22), 920, 66, 44), 32),
             counter(3 + k, N)]
        specs.append(dict(w=CW, h=CH, layers=L))
    # 6 wat we deden: glass cards per pillar
    s6 = slides[5] if len(slides) > 5 else {"kicker": "Wat we deden", "title": " · ".join(pil), "text": ""}
    L = [bg(seed + 6, ambient(ims[0], 0.5), strength=0.6),
         text(80, 140, 920, s6.get("kicker", "Wat we deden"), None, s6.get("text"), 60, 36)]
    cards = pil[:4] or ["M7"]
    cw, chh, gap = 450, 250, 20
    for j, p in enumerate(cards):
        x = 80 + (j % 2) * (cw + gap)
        y = 520 + (j // 2) * (chh + gap)
        L.append({"type": "gcard", "t0": 0, "t1": INF, "rect": {"x": x, "y": y, "w": cw, "h": chh}, "bar": COLORS[(j + seed) % len(COLORS)], "kicker": f"0{j + 1}", "title": p, "titleSize": 58})
    L += [counter(6, N), badge(CW - 156, CH - 156, 76)]
    specs.append(dict(w=CW, h=CH, layers=L))
    # 7 outro
    L = [bg(seed + 7, None, pixels="sides", aurora=0.18), badge(CW / 2 - 150, 300, 300),
         text(80, 700, 920, None, "Welcome to our *world.*", None, 84, align="center"),
         {"type": "html", "x": 80, "y": 860, "w": 920, "html": '<div style="text-align:center;font-weight:600;font-size:36px;color:#fff;line-height:1.5">Branding. Websites. Apps.<br>Hosting. Marketing. AI.<br><span class="g-pixels" style="font-weight:800">We got you.</span></div>'},
         {"type": "html", "x": 80, "y": 1130, "w": 920, "html": '<div style="text-align:center;font-weight:600;font-size:28px;letter-spacing:.24em;color:var(--muted);text-transform:uppercase">m7branding.com</div>'},
         counter(7, N)]
    specs.append(dict(w=CW, h=CH, layers=L))
    return specs


# ---------------- stories (1080×1920) ----------------
SW, SH = 1080, 1920
OFFICE = "/home/user/M7/public/media/office/"

PILLAR_STORIES = [
    ("Branding", "Merken die blijven *hangen.*", ["bernheze-makelaars-rebranding", "sublime-branding", "silvr"]),
    ("Websites", "Sites die net zo hard werken als *jij.*", ["plenty-planet", "the-digital-clinic", "fairlink"]),
    ("Apps", "Software die mensen graag *gebruiken.*", ["monvy", "atl-plus", "designers-house"]),
    ("Hosting", "Snel. Veilig. Up-to-date. Wij houden 't *draaiende.*", ["teamtv", "huurfix", "repairlab"]),
    ("Marketing", "Gezien worden. Door de juiste *mensen.*", ["hela", "expociety-app", "boutique-hotels-gelderland"]),
    ("AI", "Slimmer werken met AI. Zonder *poespas.*", ["citex-ai", "aigora", "infrai"]),
]
STATS = [
    (250, "+", "klanten wereldwijd", "Van Nistelrode tot ver over de grens."),
    (75, "+", "WordPress-sites in beheer", "Updates, back-ups, security. Geregeld."),
    (50, "+", "Webflow-sites in beheer", "Webflow Professional Partner. Smooth."),
    (275, "+", "webdomeinen in beheer", "Jouw domein? In goede handen."),
    (35, "+", "rebrandings doorgevoerd", "Nieuw merk. Zelfde lef."),
    (3000, "+", "storingen opgelost", "Gaat er iets mis? We got you."),
]
MANIFESTO = [
    "Welcome to|our *world.*",
    "Branding.|Websites.|Apps.|Hosting.|Marketing.|*AI.*",
    "Brabants nuchter.|Digitaal *next level.*",
    "From *pixels*|to _stars._",
    "Uit Nistelrode.|Voor de *wereld.*",
    "Geen gedoe.|Wel *magic.*",
]


def story_project(slug, cp, seed):
    c = media.cases()[slug]
    ims = images_for(slug, 2)
    if not ims:
        return None
    pil = [("Film" if p == "Video" else p) for p in (cp.get("pillars") or media.pillars(slug))]
    hook = cp.get("hook") or c["title"]["nl"]
    L = [bg(seed, ambient(ims[0]), strength=0.9),
         {"type": "html", "x": 80, "y": 250, "w": 920, "html": '<div class="kicker"><span class="dash"></span><span>Nieuwe case</span></div>'},
         img(ims[0], {"x": 60, "y": 340, "w": 960, "h": 760}),
         text(80, 1150, 920, None, wrap(c["client"], 20), None, fit_title(wrap(c["client"], 20), 920, 110, 48)),
         text(80, 1150 + fit_title(wrap(c["client"], 20), 920, 110, 48) * 1.08 * (wrap(c["client"], 20).count("|") + 1) + 18, 920, None, accent(wrap(hook, 24), seed), None, 56),
         {"type": "pill", "t0": 0, "t1": INF, "x": 80, "y": 1500, "items": pil[:3] or ["M7"], "size": 28},
         badge(SW - 176, 230, 96)]
    return dict(w=SW, h=SH, layers=L)


def story_pillar(pillar, line, slugs, seed):
    tiles = []
    for s in slugs:
        if s in media.cases():
            ims = images_for(s, 1)
            if ims:
                tiles.append(ims[0])
    L = [bg(seed, ambient(tiles[0]) if tiles else None, strength=0.55),
         {"type": "html", "x": 80, "y": 250, "w": 920, "html": f'<div class="kicker"><span class="dash"></span><span>Wat we doen</span></div>'},
         text(80, 330, 920, None, f"*{pillar}.*", None, 150 if len(pillar) < 9 else 128),
         text(80, 540, 920, None, wrap(line, 22), None, 64)]
    for k, tsrc in enumerate(tiles[:3]):
        L.append(img(tsrc, {"x": 60 + k * 326, "y": 860, "w": 306, "h": 420}, radius=26))
    L += [{"type": "html", "x": 80, "y": 1340, "w": 920, "html": '<div style="font-weight:600;font-size:34px;color:#fff;line-height:1.5">Branding. Websites. Apps. Hosting. Marketing. AI.<br><span class="g-pixels" style="font-weight:800">We got you.</span></div>'},
          badge(SW - 176, 230, 96)]
    return dict(w=SW, h=SH, layers=L)


def story_stat(value, suffix, label, line, seed, animated=False):
    t0 = 0.3 if animated else -5
    L = [bg(seed, None, pixels="full" if seed % 2 else "sides", aurora=0.2),
         {"type": "html", "x": 80, "y": 300, "w": 920, "html": '<div class="kicker"><span class="dash"></span><span>M7 in cijfers</span></div>', "t0": t0},
         {"type": "stat", "t0": t0, "t1": INF, "x": 80, "y": 560, "w": 940, "value": value, "suffix": suffix, "label": label, "size": 300 if value < 1000 else 250, "labelSize": 58, "cls": ["g-pixels", "g-stars", "g-shop"][seed % 3]},
         text(80, 1080, 920, None, None, line, 40, 44) | {"t0": t0 + 0.9 if animated else 0},
         {"type": "ring", "t0": t0 + 0.2, "t1": INF, "cx": 860, "cy": 1430, "r": 120, "sw": 6, "draw": 1.6, "spin": 120},
         badge(SW - 176, 230, 96)]
    return dict(w=SW, h=SH, layers=L)


def story_review(rv, seed):
    q = rv["quote"]["nl"]
    who = rv.get("company") or "Google review"
    size = 56 if len(q) < 140 else 46 if len(q) < 230 else 40
    L = [bg(seed, None, aurora=0.16),
         {"type": "html", "x": 80, "y": 300, "w": 920, "html": '<div class="kicker"><span class="dash"></span><span>Klanten aan het woord</span></div>'},
         {"type": "html", "x": 80, "y": 400, "w": 300, "html": '<div class="g-brand" style="font-weight:800;font-size:260px;line-height:1">&ldquo;</div>'},
         {"type": "html", "x": 80, "y": 640, "w": 920, "html": f'<div style="font-weight:700;font-size:{size}px;line-height:1.28;letter-spacing:-.015em;color:#fff">{esc(q)}</div>'},
         {"type": "html", "x": 80, "y": 1420, "w": 920, "html": f'<div style="font-size:44px;letter-spacing:.12em;color:#ffd23a">★★★★★</div><div style="margin-top:14px;font-weight:700;font-size:34px;color:#fff">{esc(who)}</div><div style="margin-top:6px;font-weight:500;font-size:28px;color:var(--muted)">via Google</div>'},
         badge(SW - 176, 230, 96)]
    return dict(w=SW, h=SH, layers=L)


def story_manifesto(line, seed, animated=False):
    lines = line.count("|") + 1
    size = min(150 if lines <= 2 else 120, fit_title(line, 930, 150, 60))
    t0 = 0.25 if animated else -5
    y = max(380, int(SH / 2 - lines * size * 0.55))
    L = [bg(seed, None, pixels="sides", aurora=0.22),
         {"type": "text", "t0": t0, "t1": INF, "x": 80, "y": y, "w": 940, "title": line, "size": size, "stagger": 0.12, "lh": 1.0},
         {"type": "html", "x": 80, "y": 1500, "w": 920, "t0": t0 + 1.2, "html": '<div style="font-weight:600;font-size:28px;letter-spacing:.24em;color:var(--muted);text-transform:uppercase">m7branding.com</div>'},
         badge(SW - 176, 230, 96)]
    return dict(w=SW, h=SH, layers=L)


def story_interactive(kind, seed, slug=None):
    if kind == "poll":
        L = [bg(seed, None, aurora=0.2), text(80, 380, 920, "Even peilen", "Waar ben jij|aan *toe?*", None, 120),
             {"type": "html", "x": 80, "y": 760, "w": 920, "html": '<div style="font-weight:600;font-size:36px;color:var(--muted);line-height:1.45">Nieuw merk, nieuwe site, een app of slimmer met AI? Stem hieronder.</div>'}, badge(SW - 176, 230, 96)]
    elif kind == "quiz":
        ims = images_for(slug, 1)
        L = [bg(seed, ambient(ims[0]), strength=0.85), text(80, 300, 920, "Quiz", "Wat zie je *hier?*", None, 120),
             img(ims[0], {"x": 60, "y": 560, "w": 960, "h": 700}),
             {"type": "html", "x": 80, "y": 1300, "w": 920, "html": '<div style="font-weight:600;font-size:34px;color:#fff">Branding, website of app? Raad \'t hieronder.</div>'}, badge(SW - 176, 230, 96)]
    else:
        L = [bg(seed, None, aurora=0.2), text(80, 380, 920, "Vraag het M7", "Stel je|*vraag.*", None, 140),
             {"type": "html", "x": 80, "y": 760, "w": 920, "html": '<div style="font-weight:600;font-size:36px;color:var(--muted);line-height:1.45">Over branding, websites, apps, hosting, marketing of AI. Wij geven gewoon eerlijk antwoord.</div>'}, badge(SW - 176, 230, 96)]
    return dict(w=SW, h=SH, layers=L)


def story_office(fname, line, seed):
    from pathlib import Path
    p = Path(OFFICE + fname)
    L = [bg(seed, ambient(p), strength=0.9),
         img(p, {"x": 60, "y": 230, "w": 960, "h": 1200}),
         text(80, 1470, 920, "Bij M7", wrap(line, 26), None, 64),
         badge(SW - 176, 260, 96)]
    return dict(w=SW, h=SH, layers=L)
