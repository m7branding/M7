"""Dynamic, service, calm and M7 reels."""
import random

from lib import W, H, furl, pub, frames, ambient, still_frame
import media
from reels import film_layer, still_layer, outro_layers, fit_title, OUTRO

BPM = 124
B = 60 / BPM  # beat


def _bg(seed, amb, pixels="sides", strength=0.85):
    return {"type": "bg", "seed": seed, "pixels": pixels, "ambient": [dict(a, opacity=strength) for a in amb], "auroraStrength": 0.14}


def _shot(m, t0, t1, enter, y=930, kind=None):
    if "dur" in m:  # film
        return film_layer(m, t0, t1, kind=kind or ("portrait" if m["portrait"] else "wide"), y_center=y, enter=enter)
    k = kind or ("tall" if m["w"] / m["h"] > 0.9 else "portrait")
    return still_layer(m, t0, t1, kind=k, y_center=y, enter=enter)


ENTERS = [{"type": "zoom", "d": 0.5}, {"type": "slideL", "d": 0.45, "ease": "outExpo"}, {"type": "ring", "d": 0.6, "ease": "inOutCubic"}, {"type": "tilt", "d": 0.55}, {"type": "slideR", "d": 0.45, "ease": "outExpo"}, {"type": "scale", "d": 0.5}]


def montage(items, t, beats_per_shot=4, labels=None, y=930, seed=1, counter=True):
    """items: media dicts. Returns (layers, ambients, cuts, t_end). Shots are cut on the beat."""
    layers, amb, cuts = [], [], []
    n = len(items)
    cnt = []
    for i, m in enumerate(items):
        t0 = t
        t1 = t + beats_per_shot * B + 0.12
        lay, a = _shot(m, t0, t1, ENTERS[(i + seed) % len(ENTERS)], y=y)
        lay["exit"] = {"type": "none"}
        layers.append(lay)
        amb.append(a)
        cuts.append(t0)
        if labels and labels[i]:
            r = lay["rect"]
            layers.append({"type": "pill", "t0": t0 + 0.15, "t1": t1 - 0.05, "x": r["x"] + 10, "y": min(1560, r["y"] + r["h"] + 46), "items": [labels[i]], "size": 30})
        cnt.append({"n": f"{i + 1:02d}", "t0": t0, "t1": t1})
        layers.append({"type": "flash", "t": t0, "d": 0.12, "max": 0.22})
        t += beats_per_shot * B
    if counter and n > 1:
        layers.append({"type": "counter", "x": 80, "y": 250, "total": f"{n:02d}", "items": cnt})
    return layers, amb, cuts, t


def punch_block(lines, t, beats=2, y=820, size=150, mode="slam"):
    items = []
    hits = []
    for ln in lines:
        items.append({"text": ln, "t0": t, "t1": t + beats * B, "zoom": 0.05})
        hits.append(t)
        t += beats * B
    return {"type": "punch", "mode": mode, "y": y, "size": size, "items": items}, hits, t


def dynamic_project(slug, copy, seed=1):
    random.seed(seed)
    c = media.cases()[slug]
    fl = [f for f in media.films(slug) if f["w"] >= 1000]
    st = media.stills(slug)
    pool = []
    for i in range(6):
        if i % 2 == 0 and fl:
            pool.append(fl.pop(0))
        elif st:
            pool.append(st.pop(0))
        elif fl:
            pool.append(fl.pop(0))
    pool = pool[:5]
    if len(pool) < 3:
        return None
    layers, amb, cuts, hits = [], [], [], []
    t = 0.0
    # hook: word by word on the pixels, client name above
    hook_w = accent(_wrap(copy.get("hook") or c["client"], 14), seed)
    hook_beats = 5
    layers.append({"type": "text", "t0": 0.1, "t1": hook_beats * B - 0.05, "x": 80, "y": 620, "w": 920, "kicker": c["client"], "title": hook_w, "size": fit_title(hook_w, 920, 124, 60), "stagger": 0.11, "kgap": 30})
    hits += [0.1]
    t = hook_beats * B
    punches = list(copy.get("punch") or [])[:3]
    plan = [(pool[0], None), (pool[1], None), ("P", 0), (pool[2], None)] + ([(pool[3], None)] if len(pool) > 3 else []) + ([("P", 1)] if len(punches) > 1 else []) + ([(pool[4], None)] if len(pool) > 4 else []) + ([("P", 2)] if len(punches) > 2 else [])
    k = 0
    for item, pi in plan:
        if item == "P":
            if pi < len(punches):
                blk, h, t = punch_block([accent(_wrap(punches[pi], 12), seed + pi + 1)], t, beats=3, size=fit_title(_wrap(punches[pi], 12), 960, 150, 80))
                layers.append(blk)
                hits += h
            continue
        ls, a, cu, t = montage([item], t, beats_per_shot=4, labels=None, seed=seed + k, counter=False)
        layers += ls
        amb += a
        cuts += cu
        k += 1
    # pillars ticker under the last shots
    pil = copy.get("pillars") or media.pillars(slug)
    layers.append({"type": "ticker", "t0": hook_beats * B, "t1": t, "y": 1620, "size": 46, "words": pil + ["We got you"], "speed": 140, "opacity": 0.55})
    end = t
    layers.append({"type": "pixelwipe", "t": end - 0.05, "d": 0.6, "seed": seed})
    layers += outro_layers(end + 0.05)
    spec = {"w": W, "h": H, "fps": 30, "duration": round(end + OUTRO, 2), "layers": [_bg(seed, amb)] + layers}
    return spec, {"cuts": cuts[1:], "hits": hits, "outro": end + 0.05, "style": "dynamic"}


def _wrap(s, maxc=14):
    """Insert | line breaks so lines stay short (for big kinetic type)."""
    words, lines, cur = s.split(), [], ""
    for w in words:
        if len(cur) + len(w) + 1 > maxc and cur:
            lines.append(cur)
            cur = w
        else:
            cur = (cur + " " + w).strip()
    if cur:
        lines.append(cur)
    return "|".join(lines)


def service_reel(pillar, hook, punches, slugs, seed=1, outro_payoff="Welcome to our *world.*"):
    """A service (Branding, Websites, ...): kinetic hook, a montage of clients, punchlines, outro."""
    items, labels = [], []
    for s in slugs:
        fl = [f for f in media.films(s) if f["w"] >= 1000 and not f["portrait"]]
        st = media.stills(s)
        m = (fl[0] if fl and (len(items) % 2 == 0 or not st) else (st[0] if st else None))
        if m:
            items.append(m)
            labels.append(media.cases()[s]["client"])
    layers, amb, cuts, hits = [], [], [], []
    # 1) the pillar word, then the hook
    layers.append({"type": "punch", "mode": "slam", "y": 760, "size": 190, "items": [{"text": pillar, "t0": 0.05, "t1": 3 * B, "zoom": 0.08}]})
    hits.append(0.05)
    t = 3 * B
    layers.append({"type": "text", "t0": t, "t1": t + 5 * B, "x": 80, "y": 640, "w": 920, "kicker": pillar, "title": accent(_wrap(hook, 16), seed), "size": fit_title(_wrap(hook, 16), 920, 118, 70), "stagger": 0.1})
    hits.append(t)
    t += 5 * B
    # 2) montage, 2 shots, punch, 2 shots, punch, ...
    groups = [items[i:i + 2] for i in range(0, len(items), 2)]
    lgroups = [labels[i:i + 2] for i in range(0, len(labels), 2)]
    for gi, (g, lg) in enumerate(zip(groups, lgroups)):
        ls, a, cu, t = montage(g, t, beats_per_shot=4, labels=lg, seed=seed + gi, counter=False)
        layers += ls
        amb += a
        cuts += cu
        if gi < len(punches):
            blk, h, t = punch_block([accent(_wrap(punches[gi], 12), seed + gi + 1)], t, beats=3, size=fit_title(_wrap(punches[gi], 12), 960, 150, 80))
            layers.append(blk)
            hits += h
    layers.append({"type": "ticker", "t0": 8 * B, "t1": t, "y": 1640, "size": 44, "words": ["Branding", "Websites", "Apps", "Hosting", "Marketing", "AI"], "speed": 150, "opacity": 0.5})
    end = t
    layers.append({"type": "pixelwipe", "t": end - 0.05, "d": 0.6, "seed": seed})
    layers += outro_layers(end + 0.05, outro_payoff)
    spec = {"w": W, "h": H, "fps": 30, "duration": round(end + OUTRO, 2), "layers": [_bg(seed, amb)] + layers}
    return spec, {"cuts": cuts[1:], "hits": hits, "outro": end + 0.05, "style": "dynamic"}


def calm_reel(items, seed=1, shot=4.6, xf=1.2, title=None):
    """Pure footage: long shots, slow push/pan, long crossfades, only the M7 outro."""
    layers, amb, cuts = [], [], []
    t = 0.0
    for i, m in enumerate(items):
        t0, t1 = t, t + shot + xf
        lay, a = _shot(m, t0, t1, {"type": "fade", "d": xf, "ease": "inOutSine"}, y=930)
        lay["exit"] = {"type": "fade", "d": xf, "ease": "inOutSine"}
        lay["sheen"] = False
        layers.append(lay)
        amb.append(a)
        cuts.append(t0)
        t += shot
    end = t + xf * 0.5
    if title:
        layers.append({"type": "text", "t0": 0.6, "t1": shot - 0.2, "x": 80, "y": 230, "w": 920, "kicker": title[0], "title": title[1], "size": 76, "stagger": 0.12})
    layers += outro_layers(end - 0.3)
    spec = {"w": W, "h": H, "fps": 30, "duration": round(end + OUTRO - 0.3, 2), "layers": [_bg(seed, amb, strength=0.9)] + layers}
    return spec, {"cuts": cuts[1:], "hits": [], "outro": end - 0.3, "style": "calm"}


def kinetic_words(words, t, beats=1, y=800, size=170):
    """One word per beat (slam), e.g. Branding. Websites. Apps."""
    items, hits = [], []
    for w in words:
        items.append({"text": w, "t0": t, "t1": t + beats * B, "zoom": 0.04})
        hits.append(t)
        t += beats * B
    return {"type": "punch", "mode": "slam", "y": y, "size": size, "items": items}, hits, t


GRADS = ["*", "*", "_", "*", "_"]


def accent(text, seed=0):
    """Give the last word a brand gradient (pixels mostly, now and then stars/shop)."""
    import re
    if any(ch in text for ch in "*_~^"):
        return text
    g = GRADS[seed % len(GRADS)]
    m = re.match(r"^(.*[ |])?([^ |]+)$", text.strip())
    if not m:
        return text
    head = m.group(1) or ""
    return f"{head}{g}{m.group(2)}{g}"
