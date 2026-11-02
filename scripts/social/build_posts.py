"""Build all static creatives (stories, carousels) as batch jobs and render them.
python build_posts.py stories|carousels [--test]"""
import json
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import posts  # noqa: E402
import run  # noqa: E402
import lib  # noqa: E402

OUT = run.OUT
HERE = Path(__file__).resolve().parent


def story_jobs(test=False):
    copy = run.load_copy()
    plist = run.projects()
    revs = [r for r in json.load(open(run.R18 / "reviews.json")) if r.get("source") == "google" and r.get("rating") == 5 and len(r["quote"]["nl"]) <= 330]
    revs.sort(key=lambda r: len(r["quote"]["nl"]))
    jobs = []
    n = 0

    def add(spec, name):
        nonlocal n
        n += 1
        if spec:
            jobs.append({"spec": spec, "out": str(OUT / "stories" / f"{n:02d}-{name}.jpg"), "t": 8})

    # 20 project stories (masterpieces first, then strong others)
    picks = [p["slug"] for p in plist if p.get("rank")][:20]
    for k, s in enumerate(picks):
        add(posts.story_project(s, copy.get(s, {}), 100 + k), f"case-{s}")
    for k, (pil, line, slugs) in enumerate(posts.PILLAR_STORIES):
        add(posts.story_pillar(pil, line, slugs, 200 + k), f"dienst-{pil.lower()}")
    for k, (v, suf, lab, line) in enumerate(posts.STATS):
        add(posts.story_stat(v, suf, lab, line, 300 + k), f"cijfer-{v}")
    for k, rv in enumerate(revs[:6]):
        add(posts.story_review(rv, 400 + k), f"review-{k + 1}")
    for k, m in enumerate(posts.MANIFESTO):
        add(posts.story_manifesto(m, 500 + k), f"manifest-{k + 1}")
    add(posts.story_interactive("poll", 600), "poll-waar-ben-jij-aan-toe")
    add(posts.story_interactive("quiz", 601, "sublime-branding"), "quiz-wat-zie-je-hier")
    add(posts.story_interactive("ask", 602), "vraag-het-m7")
    for k, (f, line) in enumerate([("kantoor-buitenkant.webp", "Thuisbasis: Nistelrode."), ("kantoor-werkplekken.webp", "Hier gebeurt het. Elke dag."), ("lounge-biljart.webp", "Even een potje. Dan weer door.")]):
        add(posts.story_office(f, line, 700 + k), f"kantoor-{k + 1}")
    if test:
        keep = [0, 20, 26, 32, 38, 44, 45, 47]
        jobs = [jobs[i] for i in keep if i < len(jobs)]
    return jobs


def carousel_jobs(only=None):
    copy = run.load_copy()
    jobs = []
    for k, p in enumerate(run.projects()):
        s = p["slug"]
        if only and s not in only:
            continue
        specs = posts.carousel(s, copy.get(s, {}), seed=k + 1)
        for i, sp in enumerate(specs):
            jobs.append({"spec": sp, "out": str(OUT / "carousels" / "projects" / f"{k + 1:03d}-{s}" / f"{i + 1:02d}.jpg"), "t": 8})
    return jobs


def render(jobs, chunk=60):
    for i in range(0, len(jobs), chunk):
        jp = lib.WORK / f"jobs-{i}.json"
        jp.parent.mkdir(parents=True, exist_ok=True)
        jp.write_text(json.dumps(jobs[i:i + chunk]))
        r = subprocess.run(["node", str(HERE / "batch.cjs"), str(jp)], capture_output=True, text=True)
        print(r.stdout.strip(), r.stderr[-500:])


if __name__ == "__main__":
    what = sys.argv[1]
    test = "--test" in sys.argv
    if what == "stories":
        render(story_jobs(test))
    elif what == "carousels":
        only = sys.argv[sys.argv.index("--only") + 1].split(",") if "--only" in sys.argv else None
        render(carousel_jobs(only))
