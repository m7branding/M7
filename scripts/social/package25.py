"""Round 25: assemble the social package for Instagram and LinkedIn.

- LinkedIn document posts: every carousel as one PDF (1080x1350 pages), from the PNG slides.
- A posting calendar (Instagram + LinkedIn) from the captions in r25/deliver/captions/*.json, as CSV and JSON, with the
  repo paths of the files (social/<...> in m7branding/m7-assets-inbox, branch social-pack).

  python package25.py pdfs        LinkedIn PDFs for all carousels in r25/deliver/carousels (+ the round-24 ones, re-rendered)
  python package25.py calendar    calendar.csv / calendar.json in r25/deliver/plan/
"""
import csv
import datetime as dt
import json
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))

S = Path("/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad")
D = S / "r25" / "deliver"
TMP = Path("/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r25w-pack")
R24 = ("geo", "toegankelijkheid", "check-tools")


def pdf(slides, out):
    pages = [Image.open(p).convert("RGB") for p in slides]
    out.parent.mkdir(parents=True, exist_ok=True)
    pages[0].save(out, "PDF", save_all=True, append_images=pages[1:], resolution=144, quality=92)
    return out


def pdfs():
    # the three approved round-24 carousels were pushed (local PNGs gone): render them again into a temp folder
    import social24 as s24
    s24.WORK = TMP / "work"
    s24.OUT = TMP
    s24.install()
    for name, slides in s24.carousels().items():
        if name in R24 and not (TMP / "carousels" / name).exists():
            s24.render_carousel(name, slides)
    made = []
    for root in (TMP / "carousels", D / "carousels"):
        for d in sorted(p for p in root.glob("*") if p.is_dir()):
            slides = sorted(d.glob("*.png"))
            if slides:
                made.append(pdf(slides, D / "linkedin" / f"m7-{d.name}.pdf"))
    for m in made:
        print(m.name, f"{m.stat().st_size / 1e6:.1f} MB")


def repo_path(rel):
    """Paths in the captions are relative to r25/deliver (new work) or already 'social/...' (earlier rounds)."""
    return rel if rel.startswith("social/") else f"social/{rel}"


def calendar(start=dt.date(2026, 11, 16), weeks=12):
    caps = {p.stem: json.loads(p.read_text()) for p in sorted((D / "captions").glob("*.json"))}
    car = [c for c in caps.values() if c["type"] == "carousel"]
    reels = [c for c in caps.values() if c["type"] == "reel"]
    posts = [c for c in caps.values() if c["type"] == "post"]
    # alternate topics: new premium reels first, then round-22 reels; carousels in a mixed topic order
    reels.sort(key=lambda c: (0 if any("reels-premium" in f for f in c["files"]) else 1, c["id"]))
    order = ["geo", "merkstrategie", "webshop", "check-tools", "sector-vastgoed", "automation", "toegankelijkheid", "rebranding-traject",
             "klantportaal", "aeo", "sector-energie", "ai-ontwikkelen", "brandbook", "lokale-seo", "hosting", "werkproces", "consent-mode"]
    car.sort(key=lambda c: next((i for i, k in enumerate(order) if c["id"].endswith(k)), 99))
    rows = []

    def add(day, time, platform, item, kind):
        files = [repo_path(f) for f in item["files"]]
        if platform == "LinkedIn" and kind == "carousel":
            files = [f"social/linkedin/m7-{item['id'].replace('carousel-', '')}.pdf"]
        rows.append({"datum": day.isoformat(), "tijd": time, "platform": platform, "type": kind, "id": item["id"], "onderwerp": item["topic"],
                     "bestanden": " | ".join(files), "tekst": item["instagram" if platform == "Instagram" else "linkedin"]})

    ci = ri = pi = 0
    for w in range(weeks):
        mon = start + dt.timedelta(weeks=w)
        tue, wed, thu, sat = (mon + dt.timedelta(days=k) for k in (1, 2, 3, 5))
        if ci < len(car):
            add(tue, "19:30", "Instagram", car[ci], "carousel")
            add(wed, "08:30", "LinkedIn", car[ci], "carousel")
            ci += 1
        if ri < len(reels):
            add(thu, "19:30", "Instagram", reels[ri], "reel")
            add(thu, "08:30", "LinkedIn", reels[ri], "reel")
            ri += 1
        if w % 2 == 0 and pi < len(posts):
            add(sat, "10:00", "Instagram", posts[pi], "post")
            pi += 1
        elif ri < len(reels):
            add(sat, "10:00", "Instagram", reels[ri], "reel")
            ri += 1
    out = D / "plan"
    out.mkdir(parents=True, exist_ok=True)
    with open(out / "kalender.csv", "w", newline="", encoding="utf-8") as f:
        wr = csv.DictWriter(f, fieldnames=list(rows[0]), delimiter=";")
        wr.writeheader()
        wr.writerows(rows)
    (out / "kalender.json").write_text(json.dumps(rows, ensure_ascii=False, indent=1))
    left = {"carousels": [c["id"] for c in car[ci:]], "reels": [c["id"] for c in reels[ri:]], "posts": [c["id"] for c in posts[pi:]]}
    (out / "reserve.json").write_text(json.dumps(left, ensure_ascii=False, indent=1))
    print(len(rows), "planned;", "reserve:", {k: len(v) for k, v in left.items()})
    return rows, left


if __name__ == "__main__":
    what = sys.argv[1] if len(sys.argv) > 1 else "calendar"
    if what == "pdfs":
        pdfs()
    else:
        calendar()
