"""Which media to use for a project, ordered best first."""
import json
import re
from functools import lru_cache
from pathlib import Path

from lib import pub, probe, img_size

EXPORT = Path("/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r18/cases.json")


@lru_cache(None)
def cases():
    return {c["slug"]: c for c in json.load(open(EXPORT))}


def family(slug):
    c = cases()[slug]
    fam = [cases()[s] for s in (c.get("family") or [slug]) if s in cases()]
    return fam or [c]


def _film_rank(src: str, title: str = ""):
    f = src.rsplit("/", 1)[-1]
    if re.match(r"r-flow", f):
        return 0 if (title or "").lower().startswith("home") else 1
    if f.startswith("s-") and not f.startswith("s-fa-"):
        return 2
    if f.startswith("s-fa-"):
        return 3
    if f.startswith("v-"):
        return 3
    if f == "r-hero.mp4":
        return 4
    return 5


@lru_cache(None)
def films(slug):
    """Landscape/portrait films with probe data, best first."""
    seen, out = set(), []
    for c in family(slug):
        cand = list(c.get("films") or []) + list(c.get("storyFilms") or [])
        h = c.get("hero") or {}
        if h.get("kind") == "video" and h.get("src"):
            cand.insert(0, {"src": h["src"], "poster": h.get("poster"), "title": "hero"})
        hv = c.get("heroVideo") or {}
        if hv.get("src"):
            cand.append({"src": hv["src"], "poster": hv.get("poster"), "title": "render"})
        if hv.get("srcMobile"):
            cand.append({"src": hv["srcMobile"], "poster": hv.get("posterMobile"), "title": "render-m"})
        for f in cand:
            s = f.get("src")
            if not s or s in seen or not pub(s).exists():
                continue
            seen.add(s)
            w, hh, d = probe(pub(s))
            if not w or d < 2.5:
                continue
            out.append({"src": s, "path": pub(s), "w": w, "h": hh, "dur": d, "title": f.get("title") or "", "portrait": hh > w, "rank": _film_rank(s, f.get("title") or ""), "slug": c["slug"]})
    # hero first if explicitly chosen, then by rank, sharp before soft
    out.sort(key=lambda f: (0 if f["title"] == "hero" and f["w"] >= 1280 else 1, f["rank"], -f["w"]))
    return out


def _img_rank(src: str):
    f = src.rsplit("/", 1)[-1]
    if re.match(r"r-6[4-9]", f):
        return 0
    if re.match(r"r-6[0-3]", f):
        return 3
    if f.startswith("s-") or f.startswith("v-"):
        return 1
    if f.startswith("r-cover"):
        return 2
    if f.startswith("r-"):
        return 2
    return 4


@lru_cache(None)
def stills(slug, min_side=1400):
    seen, out = set(), []
    for c in family(slug):
        for s in (c.get("images") or []) + [c.get("cover") or ""]:
            if not s or s in seen or not s.startswith("/media/") or s.endswith(".svg"):
                continue
            p = pub(s)
            if not p.exists():
                continue
            seen.add(s)
            w, h = img_size(p)
            if max(w, h) < min_side:
                continue
            out.append({"src": s, "path": p, "w": w, "h": h, "rank": _img_rank(s), "slug": c["slug"]})
    # keep the site order within a rank (the site already puts the strongest first)
    out = sorted(enumerate(out), key=lambda x: (x[1]["rank"], x[0]))
    return [o for _, o in out]


def logo(slug):
    for c in family(slug):
        for n in ("logo-white.svg", "logo-white.png"):
            p = pub(f"/media/cases/{c['slug']}/{n}")
            if p.exists():
                return p
    return None


def pillars(slug):
    from lib import PILLAR
    seen = []
    for c in family(slug):
        for s in c.get("services") or []:
            p = PILLAR.get(s)
            if p and p not in seen:
                seen.append(p)
    return seen
