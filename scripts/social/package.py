"""Assemble the social package: themed carousels, animated stories, LinkedIn documents, captions,
reel covers, posting plan and README.  python package.py themes|animstories|docs"""
import csv
import json
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import lib  # noqa: E402
import media  # noqa: E402
import posts  # noqa: E402
import themes  # noqa: E402
import texts  # noqa: E402
import run  # noqa: E402
import make  # noqa: E402
from build_posts import render as render_stills  # noqa: E402

OUT = run.OUT
HERE = Path(__file__).resolve().parent


def theme_specs():
    copy = run.load_copy()
    plist = run.projects()
    # pillar → projects that have the pillar label (copy) or the service, masterpieces first
    by = {p: [] for p in themes.PROCESS}
    used = set()
    # first pass: projects whose MAIN pillar is this one; second pass: any mention. No project twice.
    for rank_pass in (0, 1):
        for x in by:
            for p in plist:
                if len(by[x]) >= 4 or p["slug"] in used:
                    continue
                pil = copy.get(p["slug"], {}).get("pillars") or media.pillars(p["slug"])
                if (rank_pass == 0 and pil[:1] == [x]) or (rank_pass == 1 and x in pil):
                    by[x].append(p["slug"])
                    used.add(p["slug"])
    hosting = [p["slug"] for p in plist if "hosting-onderhoud" in (p["applications"] + sum([x["applications"] for x in p["parts"]], []))][:4] or ["teamtv", "huurfix", "repairlab"]
    by["Hosting"] = hosting
    # AI: projects where AI is really part of the work (case text), not only a service tag
    by["AI"] = [x for x in ["citex-ai", "aigora", "infrai", "monvy"] if x in media.cases()]
    out = {"01-welcome-to-our-world": themes.welcome_carousel(copy)}
    for k, p in enumerate(["Branding", "Websites", "Apps", "Hosting", "Marketing", "AI"]):
        out[f"{k + 2:02d}-{p.lower()}"] = themes.pillar_carousel(p, by[p], copy, 800 + k * 20)
    out["08-hosting-in-cijfers"] = themes.hosting_carousel()
    out["09-top-10-masterpieces"] = themes.masterpieces_carousel(copy, plist)
    out["10-over-m7"] = themes.about_carousel()
    return out, by


def do_themes():
    specs, _ = theme_specs()
    jobs = []
    for name, slides in specs.items():
        for i, sp in enumerate(slides):
            jobs.append({"spec": sp, "out": str(OUT / "carousels" / "themes" / name / f"{i + 1:02d}.jpg"), "t": 8})
    render_stills(jobs)


def do_animstories():
    import audio
    items = [(f"manifest-{k + 1}", posts.story_manifesto(m, 500 + k, animated=True)) for k, m in enumerate(posts.MANIFESTO)]
    items += [(f"cijfer-{v}", posts.story_stat(v, s, lab, line, 300 + k, animated=True)) for k, (v, s, lab, line) in enumerate(posts.STATS[:4])]
    for name, spec in items:
        out = OUT / "stories" / "geanimeerd" / f"{name}.mp4"
        if out.exists():
            continue
        spec["duration"] = 6.0
        spec["fps"] = 30
        wav = lib.WORK / "audio" / f"{name}.wav"
        wav.parent.mkdir(parents=True, exist_ok=True)
        x = audio.song(6.0, "calm", cuts=[], outro=None, seed=hash(name) % 97)
        audio.write(wav, x)
        lib.render(spec, out, audio=wav)


def pdf(images, out):
    from PIL import Image
    ims = [Image.open(p).convert("RGB") for p in images]
    out.parent.mkdir(parents=True, exist_ok=True)
    ims[0].save(out, save_all=True, append_images=ims[1:], resolution=144)


def cover(mp4, out, t=1.7):
    out.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", str(t), "-i", str(mp4), "-frames:v", "1", "-q:v", "2", str(out)], check=True)


def do_docs():
    copy = run.load_copy()
    plist = run.projects()
    cap_rows = []
    # ---- project captions + LinkedIn docs
    for k, p in enumerate(plist):
        s = p["slug"]
        cp = copy.get(s, {})
        tag = f"{k + 1:03d}-{s}"
        cdir = OUT / "carousels" / "projects" / tag
        slides = sorted(cdir.glob("*.jpg"))
        ig = (cp.get("ig_caption") or "").strip()
        hashtags = " ".join(cp.get("hashtags") or ["#M7", "#welcometoourworld"])
        (OUT / "captions" / "projects").mkdir(parents=True, exist_ok=True)
        (OUT / "captions" / "projects" / f"{tag}.txt").write_text(f"{ig}\n\n{hashtags}\n")
        ld = OUT / "linkedin" / "projects" / tag
        ld.mkdir(parents=True, exist_ok=True)
        (ld / "post.txt").write_text((cp.get("linkedin") or "").strip() + "\n")
        if slides:
            pdf(slides, ld / f"{s}-carousel.pdf")
        for kind, path in [("reel-clean", f"reels/01-project-clean/{tag}.mp4"), ("carousel", f"carousels/projects/{tag}/")]:
            cap_rows.append({"id": f"{kind}:{s}", "type": kind, "file": path, "caption": ig, "hashtags": hashtags, "linkedin": f"linkedin/projects/{tag}/post.txt"})
        if p.get("rank"):
            cap_rows.append({"id": f"reel-dynamic:{s}", "type": "reel-dynamic", "file": f"reels/02-project-dynamic/{p['rank']:02d}-{s}.mp4", "caption": ig, "hashtags": hashtags, "linkedin": ""})
    # ---- M7 / service / calm reels
    for name, cap in texts.M7_REELS.items():
        cap_rows.append({"id": f"reel-m7:{name}", "type": "reel-m7", "file": f"reels/05-m7/{name}.mp4", "caption": cap, "hashtags": texts.TAGS, "linkedin": ""})
    for k, (name, cap) in enumerate(texts.SERVICE_REELS.items()):
        cap_rows.append({"id": f"reel-dienst:{name}", "type": "reel-dienst", "file": f"reels/03-dienst-dynamic/{k + 1:02d}-{name}.mp4", "caption": cap, "hashtags": texts.TAGS, "linkedin": ""})
    for name, cap in texts.CALM_REELS.items():
        cap_rows.append({"id": f"reel-calm:{name}", "type": "reel-calm", "file": f"reels/04-calm/{name}.mp4", "caption": cap, "hashtags": texts.TAGS, "linkedin": ""})
    # ---- themes: captions, LinkedIn post + PDF
    for name, t in texts.THEMES.items():
        tdir = OUT / "carousels" / "themes" / name
        slides = sorted(tdir.glob("*.jpg"))
        ld = OUT / "linkedin" / "themes" / name
        ld.mkdir(parents=True, exist_ok=True)
        (ld / "post.txt").write_text(t["li"] + "\n")
        if slides:
            pdf(slides, ld / f"m7-{name}.pdf")
        (OUT / "captions" / "themes").mkdir(parents=True, exist_ok=True)
        (OUT / "captions" / "themes" / f"{name}.txt").write_text(t["ig"] + "\n\n" + texts.TAGS + "\n")
        cap_rows.append({"id": f"carousel-theme:{name}", "type": "carousel-theme", "file": f"carousels/themes/{name}/", "caption": t["ig"], "hashtags": texts.TAGS, "linkedin": f"linkedin/themes/{name}/post.txt"})
    # reel captions as text files too
    (OUT / "captions" / "reels").mkdir(parents=True, exist_ok=True)
    for r in cap_rows:
        if r["type"].startswith("reel-") and r["type"] not in ("reel-clean", "reel-dynamic"):
            (OUT / "captions" / "reels" / (r["id"].split(":", 1)[1] + ".txt")).write_text(r["caption"] + "\n\n" + r["hashtags"] + "\n")
    with open(OUT / "captions" / "alle-captions.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["id", "type", "file", "caption", "hashtags", "linkedin"])
        w.writeheader()
        w.writerows(cap_rows)
    # ---- reel covers
    for mp4 in sorted((OUT / "reels").glob("*/*.mp4")):
        cover(mp4, OUT / "reels" / "covers" / mp4.parent.name / (mp4.stem + ".jpg"), 1.7 if "clean" in mp4.parent.name else 2.2)
    # ---- posting plan
    plan(copy, plist)


def plan(copy, plist):
    _, by = theme_specs()
    idx = {p["slug"]: k for k, p in enumerate(plist)}
    tag = lambda s: f"{idx[s] + 1:03d}-{s}"
    rank = {p["slug"]: p.get("rank") for p in plist}
    used_clean, used_car, used_li = set(), set(), set()
    rows = []
    pushed_set = run.pushed()
    def exists(rel):
        rel = rel.rstrip("/")
        return (OUT / rel).exists() or rel in pushed_set or any(p.startswith(rel + "/") for p in pushed_set)
    def add(week, day, ch, fmt, title, file, cap):
        if not exists(file):
            return
        rows.append({"week": week, "dag": day, "kanaal": ch, "format": fmt, "titel": title, "bestand": file, "caption": cap})
    def clean(week, day, s):
        used_clean.add(s)
        if not exists(f"reels/01-project-clean/{tag(s)}.mp4"):
            return
        add(week, day, "Instagram", "Reel", f"{media.cases()[s]['client']}: clean case-reel", f"reels/01-project-clean/{tag(s)}.mp4", f"captions/projects/{tag(s)}.txt")
    def car(week, day, s):
        used_car.add(s)
        add(week, day, "Instagram", "Carousel", f"{media.cases()[s]['client']}: case-carousel", f"carousels/projects/{tag(s)}/", f"captions/projects/{tag(s)}.txt")
    def li(week, day, s):
        used_li.add(s)
        add(week, day, "LinkedIn", "Document-post (pdf)", f"{media.cases()[s]['client']}: case", f"linkedin/projects/{tag(s)}/{s}-carousel.pdf", f"linkedin/projects/{tag(s)}/post.txt")
    def dyn(week, day, s):
        add(week, day, "Instagram", "Reel", f"{media.cases()[s]['client']}: dynamic reel", f"reels/02-project-dynamic/{rank[s]:02d}-{s}.mp4", f"captions/projects/{tag(s)}.txt")
    def m7(week, day, name, title):
        add(week, day, "Instagram", "Reel", title, f"reels/05-m7/{name}.mp4", f"captions/reels/{name}.txt")
    def theme(week, day, name, title, linkedin_day=None):
        add(week, day, "Instagram", "Carousel", title, f"carousels/themes/{name}/", f"captions/themes/{name}.txt")
        if linkedin_day:
            add(week, linkedin_day, "LinkedIn", "Document-post (pdf)", title, f"linkedin/themes/{name}/m7-{name}.pdf", f"linkedin/themes/{name}/post.txt")
    stories = sorted(p.name for p in (OUT / "stories").glob("*.jpg"))
    sidx = [0]
    def story(week, day, n=1):
        for _ in range(n):
            if sidx[0] < len(stories):
                nm = stories[sidx[0]].rsplit(".", 1)[0]
                kind = next((k for k in texts.STORY_TIPS if nm[3:].startswith(k)), "manifest")
                add(week, day, "Instagram", "Story", nm, f"stories/{stories[sidx[0]]}", "Tip: " + texts.STORY_TIPS[kind])
                sidx[0] += 1
    # week 1: launch
    m7(1, "ma", "01-welcome-to-our-world", "Welcome to our world (manifest)")
    theme(1, "di", "01-welcome-to-our-world", "Welcome to our world: wat we doen", linkedin_day="di")
    m7(1, "do", "02-nieuwe-website-live", "Onze nieuwe website is live")
    add(1, "do", "LinkedIn", "Video-post", "Onze nieuwe website is live", "reels/05-m7/02-nieuwe-website-live.mp4", "captions/reels/02-nieuwe-website-live.txt")
    theme(1, "vr", "10-over-m7", "Over M7: Brabants nuchter, digitaal next level", linkedin_day="vr")
    add(1, "za", "Instagram", "Reel", "Calm: screens", "reels/04-calm/01-screens.mp4", "captions/reels/01-screens.txt")
    for d in ["ma", "wo", "vr"]:
        story(1, d, 2)
    # weeks 2-7: one pillar per week
    calm = ["02-brandbooks", "03-interfaces-in-beweging", "04-merken-op-de-muur", "05-studio", "06-details", "02-brandbooks"]
    for w, p in enumerate(["Branding", "Websites", "Apps", "Hosting", "Marketing", "AI"], start=2):
        k = w - 2
        add(w, "ma", "Instagram", "Reel", f"{p}: dienst-reel", f"reels/03-dienst-dynamic/{k + 1:02d}-{p.lower()}.mp4", f"captions/reels/{p.lower()}.txt")
        theme(w, "di", f"{k + 2:02d}-{p.lower()}", f"{p}: thema-carousel", linkedin_day="di")
        cand = [s for s in by[p] if s in idx]
        dyn_c = [s for s in cand if rank.get(s)]
        if p == "Hosting":
            m7(w, "do", "04-hosting-we-got-you", "Hosting & beheer: we got you")
            theme(w, "vr", "08-hosting-in-cijfers", "M7 in cijfers", linkedin_day="do")
        elif p == "AI":
            m7(w, "do", "05-ai-zonder-poespas", "AI zonder poespas")
        elif dyn_c:
            dyn(w, "do", dyn_c[0])
        rest = [s for s in cand if s not in used_car]
        if rest and p != "Hosting":
            car(w, "vr", rest[0])
            li(w, "do", rest[0])
        rest2 = [s for s in cand if s not in used_clean]
        if rest2:
            clean(w, "za", rest2[-1])
        add(w, "zo", "Instagram", "Reel", f"Calm: {calm[k]}", f"reels/04-calm/{calm[k]}.mp4", f"captions/reels/{calm[k]}.txt")
        for d in ["ma", "wo", "vr"]:
            story(w, d, 2)
    # week 8-11: logos & brandbooks, masterpieces, behind the scenes, pixels to stars
    m7(8, "ma", "06-logos-die-we-ontwierpen", "Logo's die we ontwierpen")
    m7(8, "do", "10-brandbooks-echte-paginas", "Brandbooks met echte pagina's")
    m7(9, "ma", "08-top-10-masterpieces", "Top 10 masterpieces")
    theme(9, "di", "09-top-10-masterpieces", "Top 10 masterpieces: carousel", linkedin_day="di")
    m7(10, "ma", "03-uit-nistelrode", "Uit Nistelrode. Voor de wereld.")
    m7(10, "do", "09-zo-werken-wij", "Zo werken wij")
    m7(11, "ma", "07-from-pixels-to-stars", "From pixels to stars")
    dyn_left = [p["slug"] for p in plist if p.get("rank")]
    done_dyn = {r["bestand"] for r in rows}
    dyn_left = [s for s in dyn_left if f"reels/02-project-dynamic/{rank[s]:02d}-{s}.mp4" not in done_dyn]
    for w in range(8, 13):
        for d in (["do"] if w in (9, 11, 12) else []) + (["za"] if w >= 8 else []):
            if dyn_left:
                dyn(w, d, dyn_left.pop(0))
        for d in ["di", "vr"]:
            nxt = [p["slug"] for p in plist if p["slug"] not in used_car]
            if nxt and not (w == 9 and d == "di"):
                car(w, d, nxt[0])
        for d in ["di", "do"]:
            nxt = [p["slug"] for p in plist if p["slug"] not in used_li]
            if nxt and not (w == 9 and d == "di"):
                li(w, d, nxt[0])
        for d in ["ma", "wo", "vr"]:
            story(w, d, 2)
    # week 13+: evergreen rotation until every project has had its moment
    w = 13
    while True:
        left_clean = [p["slug"] for p in plist if p["slug"] not in used_clean]
        left_car = [p["slug"] for p in plist if p["slug"] not in used_car]
        left_li = [p["slug"] for p in plist if p["slug"] not in used_li]
        if not (left_clean or left_car or left_li or dyn_left):
            break
        for d in ["ma", "do", "za"]:
            if dyn_left and d == "do":
                dyn(w, d, dyn_left.pop(0))
            elif left_clean:
                clean(w, d, left_clean.pop(0))
        for d in ["di", "vr"]:
            if left_car:
                car(w, d, left_car.pop(0))
        for d in ["di", "do"]:
            if left_li:
                li(w, d, left_li.pop(0))
        if sidx[0] < len(stories):
            story(w, "wo", 2)
        w += 1
    order = {d: i for i, d in enumerate(["ma", "di", "wo", "do", "vr", "za", "zo"])}
    rows.sort(key=lambda r: (r["week"], order[r["dag"]], r["kanaal"]))
    with open(OUT / "posting-plan.csv", "w", newline="") as f:
        wri = csv.DictWriter(f, fieldnames=["week", "dag", "kanaal", "format", "titel", "bestand", "caption"])
        wri.writeheader()
        wri.writerows(rows)
    json.dump(rows, open(OUT / "posting-plan.json", "w"), ensure_ascii=False, indent=1)
    phases = {1: "Launch: Welcome to our world + de nieuwe website", 2: "Branding-week", 3: "Websites-week", 4: "Apps-week", 5: "Hosting-week", 6: "Marketing-week", 7: "AI-week", 8: "Logo's & brandbooks", 9: "Masterpieces", 10: "Achter de schermen", 11: "From pixels to stars", 12: "From pixels to stars (2)"}
    md = ["# Posting plan M7", "",
          "**Doel:** mensen meenemen in wat we kunnen. Laten zien, niet teveel lullen.",
          "",
          "**Opbouw:**",
          "1. **Week 1** is de launch, met Welcome to our world en de nieuwe site.",
          "2. **Weken 2–7** hebben elk een eigen dienst: Branding, Websites, Apps, Hosting, Marketing en AI.",
          "3. **Weken 8–12** gaan over logo's en brandbooks, de masterpieces, achter de schermen en from pixels to stars.",
          "4. **Daarna** volgt een evergreen-rotatie: 3 reels, 2 swipes en 2 LinkedIn-posts per week, tot elk project geweest is.",
          "",
          "**Ritme:** Instagram rond 12:00 of 19:30. LinkedIn dinsdag en donderdag rond 8:00. Stories 's ochtends.",
          "",
          "Week 1 = de week waarin de nieuwe website live gaat. Bestanden staan relatief aan de map `social/`.", ""]
    cur = None
    for r in rows:
        if r["week"] != cur:
            cur = r["week"]
            md += ["", f"## Week {cur}" + (f": {phases[cur]}" if cur in phases else " (evergreen)"), "", "| Dag | Kanaal | Format | Wat | Bestand | Caption |", "|---|---|---|---|---|---|"]
        md.append(f"| {r['dag']} | {r['kanaal']} | {r['format']} | {r['titel']} | `{r['bestand']}` | `{r['caption']}` |")
    (OUT / "posting-plan.md").write_text("\n".join(md) + "\n")
    shutil.copy(HERE / "README_PACKAGE.md", OUT / "README.md")
    print("plan rows", len(rows), "weeks", max(r["week"] for r in rows))


if __name__ == "__main__":
    {"themes": do_themes, "animstories": do_animstories, "docs": do_docs}[sys.argv[1]]()
