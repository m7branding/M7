"""Batch runner. Usage: python run.py <job> [--part i/n] [--only slug,slug]
jobs: clean | dynamic | services | calm | m7
Output: $SOCIAL_OUT (default scratch r18/out)."""
import json
import os
import shutil
import sys
import time
import traceback
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import lib  # noqa: E402
import media  # noqa: E402
import reels  # noqa: E402
import make  # noqa: E402

R18 = Path("/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r18")
OUT = Path(os.environ.get("SOCIAL_OUT", R18 / "out"))


def load_copy():
    out = {}
    for f in sorted((R18 / "copy").glob("projects-*.json")):
        try:
            for e in json.load(open(f)):
                out[e["slug"]] = e
        except Exception:
            pass
    return out


def projects():
    return json.load(open(R18 / "projects.json"))


def pushed():
    f = R18 / "pushed.txt"
    return {l.split("\t")[0] for l in f.read_text().splitlines()} if f.exists() else set()


def arg(name, default=None):
    if name in sys.argv:
        return sys.argv[sys.argv.index(name) + 1]
    return default


def main():
    job = sys.argv[1]
    part = arg("--part", "1/1")
    i, n = map(int, part.split("/"))
    only = arg("--only")
    copy = load_copy()
    plist = projects()
    log = open(R18 / f"run-{job}-{i}.log", "a")
    if job == "clean":
        items = [(k, p["slug"]) for k, p in enumerate(plist)]
        if only:
            items = [x for x in items if x[1] in only.split(",")]
        items = [x for j, x in enumerate(items) if j % n == i - 1]
        for k, slug in items:
            out = OUT / "reels" / "01-project-clean" / f"{k + 1:03d}-{slug}.mp4"
            if out.exists() or f"reels/01-project-clean/{out.name}" in pushed():
                continue
            t = time.time()
            try:
                spec = reels.clean_reel(slug, copy.get(slug), seed=k + 1)
                if not spec:
                    print("SKIP no media", slug, file=log, flush=True)
                    continue
                cuts = [l["t0"] for l in spec["layers"] if l["type"] == "media"][1:]
                outro = [l["t0"] for l in spec["layers"] if l["type"] == "outro"][0]
                make.reel(spec, {"style": "clean", "cuts": cuts, "outro": outro}, out, seed=k + 3)
                print(f"OK {slug} {time.time() - t:.0f}s", file=log, flush=True)
            except Exception as e:
                print("FAIL", slug, repr(e)[:400], file=log, flush=True)
                traceback.print_exc(file=log)
            finally:
                shutil.rmtree(lib.WORK / "frames", ignore_errors=True)
    elif job in ("dynamic", "services", "calm", "m7"):
        tasks = build_tasks(job, copy, plist)
        tasks = [x for j, x in enumerate(tasks) if j % n == i - 1]
        for name, fn in tasks:
            out = OUT / "reels" / name
            if out.exists() or f"reels/{name}" in pushed():
                continue
            t = time.time()
            try:
                res = fn()
                if not res:
                    print("SKIP", name, file=log, flush=True)
                    continue
                spec, meta = res
                make.reel(spec, meta, out, seed=hash(name) % 997)
                print(f"OK {name} {time.time() - t:.0f}s", file=log, flush=True)
            except Exception as e:
                print("FAIL", name, repr(e)[:400], file=log, flush=True)
                traceback.print_exc(file=log)
            finally:
                shutil.rmtree(lib.WORK / "frames", ignore_errors=True)


SERVICES = [
    ("Branding", "branding-rebranding", "Merken die blijven hangen.", ["Strak. Herkenbaar.", "Elk detail on brand.", "Gewoon goed."]),
    ("Websites", "websites-webshops", "Sites die net zo hard werken als jij.", ["Snel. Clean. Vindbaar.", "Webflow of WordPress.", "Live. Done."]),
    ("Apps", "web-apps-portals-apps", "Software die mensen graag gebruiken.", ["Portalen. Dashboards. Apps.", "Klik. Klaar.", "Alles in control."]),
    ("Hosting", "hosting-onderhoud", "Wij houden 't draaiende.", ["Updates. Back-ups.", "Security. Support.", "We got you."]),
    ("Marketing", "content-marketing-online-ads", "Gezien worden. Door de juiste mensen.", ["Content. Ads. SEO.", "Scroll-stoppers.", "On brand. On point."]),
    ("AI", "ai-consultancy", "Slimmer werken met AI.", ["Eerst een quick scan.", "Dan bouwen.", "Zonder poespas."]),
]


def build_tasks(job, copy, plist):
    import reels2
    import m7reels
    tasks = []
    if job == "dynamic":
        for k, p in enumerate(plist):
            if not p.get("rank"):
                continue
            s = p["slug"]
            tasks.append((f"02-project-dynamic/{p['rank']:02d}-{s}.mp4", (lambda s=s, k=k: reels2.dynamic_project(s, copy.get(s, {}), seed=k + 11))))
    elif job == "services":
        for k, (pil, svc, hook, punches) in enumerate(SERVICES):
            def slugs_for(svc=svc):
                out = []
                for p in plist:
                    sv = set(p["services"] + sum([x["services"] for x in p["parts"]], []))
                    ap = set(p["applications"] + sum([x["applications"] for x in p["parts"]], []))
                    if svc in sv or svc in ap:
                        out.append(p["slug"])
                return out[:6]
            tasks.append((f"03-dienst-dynamic/{k + 1:02d}-{pil.lower()}.mp4", (lambda pil=pil, hook=hook, punches=punches, f=slugs_for, k=k: reels2.service_reel(pil, hook, punches, f(), seed=k + 31))))
    elif job == "calm":
        import glob
        def pick(pattern, n=6, prefer=None):
            out = []
            order = [p["slug"] for p in plist]
            for s in order:
                fs = sorted(glob.glob(f"/home/user/M7/public/media/cases/{s}/{pattern}"))
                if fs:
                    out.append(fs[0])
                if len(out) >= n:
                    break
            return out
        def stills(paths):
            return [m7reels.still(x) for x in paths]
        def films(paths):
            return [m7reels.clip(x) for x in paths]
        def home_flows(n=6):
            out = []
            for p in plist:
                f = [x for x in media.films(p["slug"]) if x["title"].lower().startswith("home") and x["w"] >= 1600]
                if f:
                    out.append(f[0])
                if len(out) >= n:
                    break
            return out
        studio = [m7reels.clip(f"/home/user/M7/public/media/hero/clips/{c}.mp4") for c in ["studio", "schets-motion", "wireframe", "code-ui", "foto-web"]]
        tasks += [
            ("04-calm/01-screens.mp4", lambda: reels2.calm_reel(stills(pick("r-65-device-1.webp")), seed=41)),
            ("04-calm/02-brandbooks.mp4", lambda: reels2.calm_reel(stills(pick("r-64-brandbook-open.webp")), seed=42)),
            ("04-calm/03-interfaces-in-beweging.mp4", lambda: reels2.calm_reel(home_flows(), seed=43)),
            ("04-calm/04-merken-op-de-muur.mp4", lambda: reels2.calm_reel(stills(pick("r-60-brand-wall.webp")), seed=44)),
            ("04-calm/05-studio.mp4", lambda: reels2.calm_reel(studio, seed=45)),
            ("04-calm/06-details.mp4", lambda: reels2.calm_reel(stills(pick("r-*macro*.webp")), seed=46)),
        ]
    elif job == "m7":
        for name, fn in m7reels.ALL:
            tasks.append((f"05-m7/{name}.mp4", fn))
    return tasks


if __name__ == "__main__":
    main()
