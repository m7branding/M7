"""Reel builders (specs) for the M7 social studio."""
import math
import random

from lib import W, H, frames, ambient, still_frame, furl
import media

OUTRO = 3.6  # seconds


def fit_title(text, maxw=920, base=128, minsize=40):
    """Font size so the longest line fits (Montserrat 800 ~0.64 em per char)."""
    import re
    clean = re.sub(r"[*_~^]", "", text)
    longest = max(len(l) for l in clean.split("|"))
    size = min(base, int(maxw / max(1, longest * 0.64)))
    return max(minsize, size)


def card_rect(ar, kind="wide", y_center=900):
    if kind == "wide":
        w = 1020
        h = int(w / ar)
        return {"x": (W - w) // 2, "y": int(y_center - h / 2), "w": w, "h": h}
    if kind == "tall":  # 4:5
        w, h = 920, 1150
        return {"x": (W - w) // 2, "y": int(y_center - h / 2), "w": w, "h": h}
    if kind == "portrait":  # 9:16
        h = 1300
        w = int(h * 9 / 16)
        return {"x": (W - w) // 2, "y": int(y_center - h / 2), "w": w, "h": h}
    if kind == "square":
        w = 960
        return {"x": (W - w) // 2, "y": int(y_center - w / 2), "w": w, "h": w}


def film_layer(f, t0, t1, kind=None, y_center=900, enter=None, exit=None, start=None, sheen=False, kb=None, rate=1.0):
    dur = t1 - t0 + 0.2
    if start is None:
        start = 0.0 if f["dur"] < dur + 1 else min(1.0, f["dur"] - dur)
    dur = min(dur, max(0.5, f["dur"] - start - 0.05))
    ar = f["w"] / f["h"]
    if kind is None:
        kind = "portrait" if f["portrait"] else "wide"
    r = card_rect(ar, kind, y_center)
    mode = "fit" if kind == "wide" else "cover"
    seq = frames(f["path"], start, dur * rate, r["w"], r["h"], mode, rate=1.0)
    seq["rate"] = rate
    amb = ambient(still_frame(f["path"], start + min(1.0, dur / 2)))
    lay = {"type": "media", "seq": seq, "t0": t0, "t1": t1, "rect": r, "frame": "card", "enter": enter or {"type": "scale", "d": 0.9}, "exit": exit or {"type": "fade", "d": 0.35}, "kb": kb or {"s0": 1.0, "s1": 1.0}, "sheen": sheen}
    return lay, {"src": amb, "t0": t0, "t1": t1}


def still_layer(s, t0, t1, kind="tall", y_center=900, enter=None, exit=None, pan=True):
    ar = s["w"] / s["h"]
    if kind == "wide":
        r = card_rect(ar, "wide", y_center)
        kb = {"s0": 1.08, "s1": 1.0}
    else:
        r = card_rect(ar, kind, y_center)
        # wide image in a tall card: pan across it
        over = (ar / (r["w"] / r["h"]))
        span = max(0, (over - 1) / over * 50) if pan else 0
        d = random.choice([-1, 1])
        kb = {"s0": 1.04, "s1": 1.0, "x0": span * 0.5 * d, "x1": -span * 0.5 * d}
    lay = {"type": "media", "src": furl(s["path"]), "t0": t0, "t1": t1, "rect": r, "frame": "card", "enter": enter or {"type": "rise", "d": 1.0}, "exit": exit or {"type": "fade", "d": 0.35}, "kb": kb, "sheen": True, "sheenAt": 0.6}
    if kind != "wide":
        lay["fit"] = "cover"
        # the card shows the middle; with pan the image is wider than the card
        lay["pos"] = "50% 50%"
    return lay, {"src": ambient(s["path"]), "t0": t0, "t1": t1}


def outro_layers(t0, payoff="Welcome to our *world.*"):
    return [{"type": "outro", "t0": t0, "payoff": payoff, "url": "m7branding.com", "dimMax": 0.0, "cy": 820, "size": 400, "paySize": 78}]


def clean_reel(slug, copy=None, seed=1):
    """Clean reel: footage first, short title on the first shot, M7 outro at the end."""
    random.seed(seed)
    c = media.cases()[slug]
    fl = [f for f in media.films(slug) if not f["portrait"]]
    pf = [f for f in media.films(slug) if f["portrait"] and f["w"] >= 700]
    st = media.stills(slug)
    shots = []
    # choose up to 4 shots, alternating film / still
    queue_f, queue_s = list(fl), list(st)
    pattern = ["f", "s", "f", "s"] if queue_f else ["s", "s", "s", "s"]
    for p in pattern:
        if p == "f" and queue_f:
            shots.append(("f", queue_f.pop(0)))
        elif p == "f" and pf:
            shots.append(("pf", pf.pop(0)))
        elif queue_s:
            shots.append(("s", queue_s.pop(0)))
        elif queue_f:
            shots.append(("f", queue_f.pop(0)))
    shots = shots[:4]
    if not shots:
        return None
    seglen = 3.5 if len(shots) >= 4 else 4.2
    ov = 0.35
    layers = []
    amb = []
    enters = [{"type": "scale", "d": 1.1}, {"type": "ring", "d": 1.0, "ease": "inOutCubic"}, {"type": "tilt", "d": 1.0}, {"type": "rise", "d": 1.0}]
    t = 0.0
    for i, (k, m) in enumerate(shots):
        t0, t1 = t, t + seglen + ov
        en = enters[i % len(enters)]
        if k in ("f", "pf"):
            lay, a = film_layer(m, t0, t1, kind="portrait" if k == "pf" else "wide", y_center=930, enter=en, sheen=(i == 0))
        else:
            kind = "tall" if m["w"] / m["h"] > 0.9 else "portrait"
            lay, a = still_layer(m, t0, t1, kind=kind, y_center=930, enter=en)
        layers.append(lay)
        amb.append(a)
        t += seglen
    end = t + ov
    # title on shot 1
    cl = c["client"]
    sub = (copy or {}).get("sub") or " · ".join(media.pillars(slug)[:3])
    title_layers = [
        {"type": "text", "t0": 0.35, "t1": seglen - 0.1, "x": 80, "y": 250, "w": 920, "kicker": "Case", "title": _wrapc(cl), "size": fit_title(_wrapc(cl), 920, 112, 48), "sub": sub, "subSize": 36, "kgap": 26, "sgap": 18},
        {"type": "pill", "t0": 0.9, "t1": seglen - 0.05, "x": 80, "y": 1530, "items": [("Film" if p == "Video" else p) for p in ((copy or {}).get("pillars") or media.pillars(slug))][:3] or ["M7"], "size": 28},
    ]
    if shots[0][0] == "f" and fl:
        r = layers[0]["rect"]
        title_layers[1]["y"] = r["y"] + r["h"] + 80
    # pixel wipe into the last shot, ring accent behind the outro
    layers.append({"type": "pixelwipe", "t": seglen * (len(shots) - 1) + 0.15, "d": 0.75, "seed": seed})
    bg = {"type": "bg", "seed": seed, "pixels": "sides", "ambient": [dict(a, t1=a["t1"], opacity=0.85) for a in amb], "auroraStrength": 0.12}
    # the last shot fades out under the outro
    layers[-2]["exit"] = {"type": "fade", "d": 0.6}
    dur = end + OUTRO - 0.2
    spec = {"w": W, "h": H, "fps": 30, "duration": round(dur, 2), "layers": [bg] + layers + title_layers + outro_layers(end - 0.25)}
    return spec


def _wrapc(name, maxc=20):
    words, lines, cur = name.split(), [], ""
    for w in words:
        if len(cur) + len(w) + 1 > maxc and cur:
            lines.append(cur)
            cur = w
        else:
            cur = (cur + " " + w).strip()
    if cur:
        lines.append(cur)
    return "|".join(lines)
