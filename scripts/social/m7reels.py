"""M7's own reels: manifesto, new website, about, hosting, AI, logos, pixels-to-stars, masterpieces, process, brandbooks."""
import json
import re
import subprocess
from pathlib import Path

from lib import W, H, furl, pub, frames, ambient, still_frame, probe, WORK, HERE
import media
from reels import outro_layers, OUTRO, fit_title
from reels2 import B, montage, punch_block, kinetic_words, _bg, _wrap, accent, calm_reel

R18 = Path("/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r18")
TOP = ["monvy", "steddion-tools", "atl-plus", "buitenstate", "designers-house", "expociety-app", "repairlab", "teamtv", "bernheze-makelaars-rebranding", "mindyourpass", "fairlink", "silvr", "the-digital-clinic", "plenty-planet", "hela", "sublime-branding", "privacy-company"]


def best(slug, prefer_film=True):
    fl = [f for f in media.films(slug) if f["w"] >= 1000 and not f["portrait"]]
    st = media.stills(slug)
    if prefer_film and fl:
        return fl[0]
    return st[0] if st else (fl[0] if fl else None)


def clip(path):
    w, h, d = probe(Path(path))
    return {"src": str(path), "path": Path(path), "w": w, "h": h, "dur": d, "title": "", "portrait": h > w, "rank": 0}


def still(path):
    from lib import img_size
    w, h = img_size(Path(path))
    return {"src": str(path), "path": Path(path), "w": w, "h": h, "rank": 0}


def finish(layers, amb, t, seed, payoff="Welcome to our *world.*", meta_extra=None):
    layers.append({"type": "pixelwipe", "t": t - 0.05, "d": 0.6, "seed": seed})
    layers += outro_layers(t + 0.05, payoff)
    spec = {"w": W, "h": H, "fps": 30, "duration": round(t + OUTRO, 2), "layers": [_bg(seed, amb)] + layers}
    meta = {"style": "dynamic", "outro": t + 0.05}
    meta.update(meta_extra or {})
    return spec, meta


def welcome(seed=1):
    layers, amb, hits, cuts = [], [], [], []
    blk, h, t = kinetic_words(["Branding.", "Websites.", "Apps.", "Hosting.", "Marketing.", "*AI.*"], 0.05, beats=1, size=170)
    layers.append(blk)
    hits += h
    blk, h, t = punch_block(["We got|*you.*"], t, beats=3, size=170)
    layers.append(blk)
    hits += h
    items = [best(s) for s in TOP[:8]]
    labels = [media.cases()[s]["client"] for s in TOP[:8]]
    ls, a, cu, t = montage([i for i in items if i], t, beats_per_shot=2, labels=labels, seed=seed)
    layers += ls
    amb += a
    cuts += cu
    blk, h, t = punch_block(["Brabants nuchter.|Digitaal *next level.*"], t, beats=4, size=110)
    layers.append(blk)
    hits += h
    return finish(layers, amb, t, seed, meta_extra={"cuts": cuts, "hits": hits})


def site_reel(seed=2):
    """'Onze nieuwe website is live': real scroll recordings of the new m7branding site."""
    shots = []
    for name, url, n, y0, y1 in [("home", "http://localhost:3000/", 240, 0, 9000), ("world", "http://localhost:3000/world-of-m7", 200, 0, 7000), ("case", "http://localhost:3000/cases/monvy", 180, 0, 5200)]:
        d = R18 / "site" / name
        if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
            subprocess.run(["node", str(HERE / "capture_site.cjs"), url, str(d), str(n), "840", "1500", str(y0), str(y1)], check=True, capture_output=True)
        shots.append((name, {"dir": furl(d), "n": n, "fps": 30}))
    layers, amb, hits, cuts = [], [], [], []
    blk, h, t = punch_block(["Nieuwe site.|*Live.*"], 0.05, beats=4, size=170)
    layers.append(blk)
    hits += h
    labels = {"home": "Home", "world": "World of M7", "case": "Cases"}
    lines = {"home": "From pixels to stars.", "world": "Welcome to our world.", "case": "Elke klant z'n eigen verhaal."}
    rect = {"x": 120, "y": 250, "w": 840, "h": 1500}
    for i, (name, seq) in enumerate(shots):
        dur = seq["n"] / 30
        amb_img = Path(seq["dir"].replace("file://", "")) / "00001.jpg"
        layers.append({"type": "media", "seq": seq, "t0": t, "t1": t + dur, "rect": rect, "frame": "card", "radius": 44, "enter": {"type": "tilt" if i == 0 else "slideL", "d": 0.7}, "exit": {"type": "fade", "d": 0.3}, "kb": {"s0": 1, "s1": 1}, "float": 0.5})
        layers.append({"type": "pill", "t0": t + 0.3, "t1": t + dur - 0.1, "x": 150, "y": 1660, "items": [labels[name], lines[name]], "size": 28})
        amb.append({"src": ambient(amb_img, 0.6), "t0": t, "t1": t + dur})
        cuts.append(t)
        t += dur - 0.2
    blk, h, t = punch_block(["Neem een kijkje.|*m7branding.com*"], t + 0.1, beats=4, size=96)
    layers.append(blk)
    hits += h
    return finish(layers, amb, t, seed, meta_extra={"cuts": cuts, "hits": hits})


def about(seed=3):
    base = pub("/media")
    clips = [clip(base / "about/clips" / f) for f in ["kantoor.mp4", "team.mp4", "pauze.mp4", "uitje.mp4"] if (base / "about/clips" / f).exists()]
    photos = [still(base / "office" / f) for f in ["kantoor-buitenkant.webp", "kantoor-werkplekken.webp", "m7-logo-wand.webp", "lounge-biljart.webp"]]
    layers, amb, hits, cuts = [], [], [], []
    blk, h, t = kinetic_words(["Nistelrode.", "Brabant.", "De *wereld.*"], 0.05, beats=2, size=160)
    layers.append(blk)
    hits += h
    seq = []
    for i in range(max(len(clips), len(photos))):
        if i < len(photos):
            seq.append(photos[i])
        if i < len(clips):
            seq.append(clips[i])
    ls, a, cu, t = montage(seq[:7], t, beats_per_shot=3, seed=seed, counter=False)
    layers += ls
    amb += a
    cuts += cu
    layers.append({"type": "stat", "t0": t, "t1": t + 6 * B, "x": 80, "y": 640, "w": 940, "value": 250, "suffix": "+", "label": "klanten wereldwijd", "size": 280, "labelSize": 60})
    hits.append(t)
    t += 6 * B
    blk, h, t = punch_block(["Klein team.|*Grote wereld.*"], t, beats=4, size=120)
    layers.append(blk)
    hits += h
    return finish(layers, amb, t, seed, meta_extra={"cuts": cuts, "hits": hits})


def hosting(seed=4):
    base = pub("/media/hero/clips")
    bgclip = clip(base / "code-ui.mp4") if (base / "code-ui.mp4").exists() else None
    layers, amb, hits, cuts = [], [], [], []
    blk, h, t = punch_block(["Hosting|& *beheer.*"], 0.05, beats=4, size=170)
    layers.append(blk)
    hits += h
    if bgclip:
        amb.append({"src": ambient(still_frame(bgclip["path"], 1.0), 0.7), "t0": 0, "t1": 40})
    stats = [(75, "+", "WordPress-sites in beheer"), (50, "+", "Webflow-sites in beheer"), (275, "+", "webdomeinen in beheer"), (3000, "+", "storingen opgelost")]
    for k, (v, s, lab) in enumerate(stats):
        layers.append({"type": "stat", "t0": t, "t1": t + 4 * B, "x": 80, "y": 640, "w": 940, "value": v, "suffix": s, "label": lab, "size": 260 if v < 1000 else 230, "labelSize": 58, "cls": ["g-pixels", "g-stars", "g-shop", "g-pixels"][k]})
        hits.append(t)
        t += 4 * B
    blk, h, t = punch_block(["Snel. Veilig.|Up-to-*date.*"], t, beats=4, size=130)
    layers.append(blk)
    hits += h
    blk, h, t = punch_block(["We got|*you.*"], t, beats=3, size=170)
    layers.append(blk)
    hits += h
    layers.append({"type": "ticker", "t0": 0, "t1": t, "y": 1600, "size": 44, "words": ["Updates", "Back-ups", "Security", "Monitoring", "Support", "Webflow", "WordPress"], "speed": 150, "opacity": 0.45})
    return finish(layers, amb, t, seed, meta_extra={"cuts": cuts, "hits": hits})


def ai(seed=5):
    steps = ["Quick scan & kansen", "Strategie & roadmap", "Prototype & validatie", "Bouw & integratie", "Training & doorontwikkeling"]
    layers, amb, hits, cuts = [], [], [], []
    blk, h, t = punch_block(["AI?"], 0.05, beats=2, size=220)
    layers.append(blk)
    hits += h
    blk, h, t = punch_block(["Gewoon *slim*|gebruiken."], t, beats=4, size=140)
    layers.append(blk)
    hits += h
    for k, sname in enumerate(steps):
        layers.append({"type": "gcard", "t0": t, "t1": t + 3 * B + 0.1, "rect": {"x": 90, "y": 700, "w": 900, "h": 420}, "bar": ["var(--g-brand)", "var(--g-stars)", "var(--g-shop)", "var(--g-pixels)", "var(--g-brand)"][k], "kicker": f"Stap 0{k + 1}", "titleHtml": sname.replace(" & ", "<br>&amp; "), "titleSize": 76})
        hits.append(t)
        t += 3 * B
    items = [best(s) for s in ["citex-ai", "aigora", "infrai", "the-digital-clinic"] if s in media.cases()]
    labels = [media.cases()[s]["client"] for s in ["citex-ai", "aigora", "infrai", "the-digital-clinic"] if s in media.cases()]
    ls, a, cu, t = montage([i for i in items if i], t, beats_per_shot=3, labels=labels, seed=seed, counter=False)
    layers += ls
    amb += a
    cuts += cu
    blk, h, t = punch_block(["Slimmer werken.|Zonder *poespas.*"], t, beats=4, size=120)
    layers.append(blk)
    hits += h
    return finish(layers, amb, t, seed, meta_extra={"cuts": cuts, "hits": hits})


def logos(seed=6):
    import importlib.util
    src = (Path("/home/user/M7/src/content/logo-designs.ts")).read_text()
    rows = re.findall(r'\{ slug: "([^"]+)", name: "([^"]+)", image: img\("[^"]+"\), tile: tile\("[^"]+"\), w: \d+, h: \d+, bg: "([^"]+)"', src)
    layers, amb, hits = [], [], []
    blk, h, t = punch_block(["Logo's die we|*ontwierpen.*"], 0.05, beats=4, size=120)
    layers.append(blk)
    hits += h
    items = []
    for slug, name, bgc in rows[:24]:
        im = pub(f"/media/logos-designed/{slug}.webp")
        tl = pub(f"/media/logos-designed/{slug}-tile.webp")
        if not im.exists():
            continue
        items.append({"src": furl(im), "tile": furl(tl) if tl.exists() else None, "bg": bgc, "t0": t, "t1": t + B * 2})
        hits.append(t)
        t += B * 2
    layers.append({"type": "logoseq", "items": items, "w": 720, "h": 360, "cy": 900})
    blk, h, t = punch_block(["Jouw merk|*next?*"], t, beats=4, size=150)
    layers.append(blk)
    hits += h
    return finish(layers, amb, t, seed, meta_extra={"cuts": [], "hits": hits})


def pixels_to_stars(seed=7):
    layers, amb, hits = [], [], []
    blk, h, t = punch_block(["From|*pixels*"], 0.05, beats=2, size=190)
    layers.append(blk)
    hits += h
    items = [best(s, prefer_film=False) for s in TOP[:12]]
    ls, a, cu, t = montage([i for i in items if i], t, beats_per_shot=1, seed=seed, counter=False)
    layers += ls
    amb += a
    blk, h, t = punch_block(["to|_stars._"], t, beats=3, size=190)
    layers.append(blk)
    hits += h
    return finish(layers, amb, t, seed, meta_extra={"cuts": cu, "hits": hits})


def masterpieces(seed=8):
    layers, amb, hits = [], [], []
    blk, h, t = punch_block(["Top 10|*masterpieces.*"], 0.05, beats=4, size=140)
    layers.append(blk)
    hits += h
    top = TOP[:10]
    items = [best(s) for s in top]
    labels = [media.cases()[s]["client"] for s in top]
    ls, a, cu, t = montage(items, t, beats_per_shot=3, labels=labels, seed=seed, counter=True)
    layers += ls
    amb += a
    blk, h, t = punch_block(["En nog 100+|*meer.*"], t, beats=4, size=140)
    layers.append(blk)
    hits += h
    return finish(layers, amb, t, seed, meta_extra={"cuts": cu, "hits": hits})


def process(seed=9):
    steps = ["Kennismaking & strategie", "Sitemap & UX", "Design in Figma", "Development & content", "Lancering, hosting & support"]
    layers, amb, hits = [], [], []
    blk, h, t = punch_block(["Zo werken|*wij.*"], 0.05, beats=4, size=160)
    layers.append(blk)
    hits += h
    shots = [best(s) for s in ["plenty-planet", "the-digital-clinic", "fairlink", "repairlab", "huurfix"]]
    for k, sname in enumerate(steps):
        m = shots[k]
        if m:
            from reels2 import _shot
            lay, a = _shot(m, t, t + 5 * B, {"type": "rise", "d": 0.6}, y=760)
            lay["exit"] = {"type": "none"}
            layers.append(lay)
            amb.append(a)
        layers.append({"type": "gcard", "t0": t + 0.15, "t1": t + 5 * B, "rect": {"x": 90, "y": 1180, "w": 900, "h": 300}, "bar": ["var(--g-brand)", "var(--g-stars)", "var(--g-shop)", "var(--g-pixels)", "var(--g-brand)"][k], "kicker": f"Stap 0{k + 1}", "title": sname, "titleSize": 58 if len(sname) < 24 else 50})
        hits.append(t)
        t += 5 * B
    blk, h, t = punch_block(["Van schets|tot *live.*"], t, beats=4, size=150)
    layers.append(blk)
    hits += h
    return finish(layers, amb, t, seed, meta_extra={"cuts": [], "hits": hits})


def brandbooks(seed=10):
    """Calm: page-turn films through real brandbook pages."""
    items = []
    for s in ["silvr", "bernheze-makelaars-rebranding", "velorum", "sparked", "ecos", "thingsix"]:
        if s not in media.cases():
            continue
        fl = [f for f in media.films(s) if "Brandbook" in (f["title"] or "")]
        if fl:
            items.append(fl[0])
    return calm_reel(items[:6], seed=seed, shot=4.4, xf=1.0, title=("Brandbooks", "Echte pagina's.|Echt *merk.*"))


ALL = [("01-welcome-to-our-world", welcome), ("02-nieuwe-website-live", site_reel), ("03-uit-nistelrode", about), ("04-hosting-we-got-you", hosting), ("05-ai-zonder-poespas", ai), ("06-logos-die-we-ontwierpen", logos), ("07-from-pixels-to-stars", pixels_to_stars), ("08-top-10-masterpieces", masterpieces), ("09-zo-werken-wij", process), ("10-brandbooks-echte-paginas", brandbooks)]
