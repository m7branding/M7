"""Round 20: clean, full-screen reels for every project and every part of a project, plus new clean stories.

Same look as round 19 style A (pure): full-bleed portrait mockups, soft crossfades, no text. The intro is the M7
technical drawing that resolves into the filled emblem (about 1 s) and fades; glass service labels at the bottom;
the M7 logo outro. Logos are shown in a realistic open brandbook on a plain surface (no wall logos, no shadows).

Reel kinds per project part:
  web     the real site or app, scrolling on portrait device scenes (portrait.py)
  design  real designs (Figma exports) on portrait device scenes (book20.py dev)
  brand   the open brandbook: real brandbook pages, or M7's brand sheets of the real logo + palette (book20.py book)
  story   one reel per client that runs through all its parts (brand, then web, then design)

  python clean20.py plan                 list the reels
  python clean20.py reels --part 1/3     render (skips finished and pushed ones)
  python clean20.py stories              the clean stories (jpg)
"""
import hashlib
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import lib  # noqa: E402
import audio  # noqa: E402
import run  # noqa: E402
from clean19 import media, outro, mark, FULL  # noqa: E402

S = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad"
R = Path(S) / "r20"
OUT = R / "out"
SH = R / "shots"
SRC = R / "src"
VENV = f"{S}/r11/venv/bin/python"
HERE = Path(__file__).resolve().parent
PORTRAIT, B20 = str(HERE / "portrait.py"), str(HERE / "book20.py")
SCENES = f"{S}/r12/scenes"
W, H = 1080, 1920
SEG, XF = 3.3, 0.8
COPY = run.load_copy()
SOURCES = json.load(open(R / "sources.json"))
HOSTS = json.load(open(f"{S}/r18/projects.json"))
CASES = Path("/home/user/M7/public/media/cases")


def venv(*a):
    r = subprocess.run([VENV, *map(str, a)], cwd=SCENES, capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError(f"{a[:3]}: {r.stderr[-1500:]}")
    return r.stdout


def h(s):
    return int(hashlib.md5(s.encode()).hexdigest()[:8], 16)


JOB = {"name": "solo"}       # the reel being rendered: its shots live in their own folder


def seq(d, n):
    return {"dir": lib.furl(d), "n": n, "fps": 30}


# ---------------------------------------------------------------- shots
WEB_VARIANTS = [
    [("d09_ipad_keyboard__p", "push_in"), ("d02_mac_top__p", "glide_r"), ("d11_ui_panels__p", "lift"), ("d19_studio_front__p", "pull_out")],
    [("d19_studio_front__p", "push_in"), ("d09_ipad_keyboard__p", "glide_l"), ("d02_mac_top__p", "lift"), ("d11_ui_panels__p", "pull_out")],
    [("d02_mac_top__p", "push_in"), ("d11_ui_panels__p", "glide_l"), ("d19_studio_front__p", "lift"), ("d09_ipad_keyboard__p", "pull_out")],
    [("d11_ui_panels__p", "push_in"), ("d19_studio_front__p", "glide_r"), ("d09_ipad_keyboard__p", "lift"), ("d02_mac_top__p", "pull_out")],
]


PHONE_VARIANT = [("d05_phone_lean__a", "p_push"), ("d04_phone_trio__a", "p_glide"), ("d07_phone_stone__a", "p_lift"), ("d16_phone_plinth__a", "p_pull")]
MOBILE_ONLY = set(json.load(open(R / "mobile_only.json")))


def web_shot(slug, t, move, secs):
    n = int(round(secs * 30))
    d = SH / JOB["name"] / f"web-{slug}-{t}-{move}-{secs}"
    if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
        venv(PORTRAIT, "shot", slug, t, move, secs, d, "--scroll", "1")
    return seq(d, n), d


def book_src(slug):
    d = SRC / f"book-{slug}"
    if not (d / "geo.json").exists():
        gen = not SOURCES[slug]["book"]
        venv(B20, "book", slug, d, *(["--gen"] if gen else []))
    return d / "still.jpg", json.load(open(d / "geo.json"))


def _mid(b):
    return (b[0] + b[2]) / 2, (b[1] + b[3]) / 2


def book_moves(geo):
    """Camera windows (centre x, centre y, width) over the 3000x2000 open book; 9:16, never wider than the spread."""
    l1, r1 = geo["l1"], geo["r1"]
    (lx, ly), (rx, ry) = _mid(l1), _mid(r1)
    y = (ly + ry) / 2
    uv = lambda page, k: geo[f"{page}_uv"][k]
    if geo.get("gen"):          # M7 brand sheets: big logo left on l1, colour columns on r1
        lg, cl = uv("l1", "0.25,0.5"), uv("r1", "0.25,0.5")
        det_l = ((lg[0] + 60, lg[1], 720), (lg[0], lg[1], 580))
        det_r = ((cl[0], cl[1], 660), (cl[0] + 260, cl[1], 660))
    else:                       # a real brandbook spread: stay on the page centres
        det_l = ((lx - 80, ly, 760), (lx + 40, ly, 620))
        det_r = ((rx + 120, ry, 700), (rx - 120, ry, 700))
    return {
        "open": ((lx + 160, y, 1080), (lx + 40, y, 900)),           # push in on the left page
        "pan": ((lx + 120, y, 820), (rx - 120, y, 820)),             # glide over the spread
        "detail_l": det_l,
        "detail_r": det_r,
    }


def book_shot(slug, kind, secs):
    still, geo = book_src(slug)
    a, b = book_moves(geo)[kind]
    n = int(round(secs * 30))
    d = SH / JOB["name"] / f"book-{slug}-{kind}-{secs}"
    if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
        venv(B20, "pan", still, secs, d, ",".join(map(str, a)), ",".join(map(str, b)))
    return seq(d, n), d


DEV_TPL = ["d19_studio_front__p", "d09_ipad_keyboard__p", "d02_mac_top__p", "d19_studio_front__p"]
DEV_FOCUS = {"d19_studio_front__p": (750, 1340), "d09_ipad_keyboard__p": (720, 1390), "d02_mac_top__p": (650, 1130)}  # device centres
DEV_MOVES = {  # (dx, dy, width) relative to the device centre, start -> end; 9:16 windows over the 1440x2560 scene
    "push_in": ((0, -20, 1340), (0, -20, 1100)),
    "glide_r": ((-80, 0, 1160), (80, 0, 1160)),
    "lift": ((0, 70, 1180), (0, -70, 1180)),
    "pull_out": ((0, -20, 1080), (0, -20, 1340)),
}


def designs(slug):
    """The project's real design exports, as picked (and checked for personal data) in round 16."""
    plan = json.load(open(f"{S}/r16/r3d/dev_plan.json")).get(slug, [])
    first = []
    for e in plan:
        for x in (e["src"].values() if isinstance(e["src"], dict) else [e["src"]]):
            if x not in first:
                first.append(x)
    return first   # only the designs vetted in round 16: other exports may show names or portraits


def dev_src(slug, t, i):
    out = SRC / f"dev-{slug}-{t}-{i}.jpg"
    if not out.exists():
        venv(B20, "dev", slug, t, out, "--i", i)
    return out


def dev_shot(slug, i, move, secs):
    t = DEV_TPL[i % len(DEV_TPL)]
    still = dev_src(slug, t, i)
    fx, fy = DEV_FOCUS[t]
    a, b = [(fx + dx, fy + dy, w) for dx, dy, w in DEV_MOVES[move]]
    n = int(round(secs * 30))
    d = SH / JOB["name"] / f"dev-{slug}-{i}-{move}-{secs}"
    if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
        venv(B20, "pan", still, secs, d, ",".join(map(str, a)), ",".join(map(str, b)))
    return seq(d, n), d


# ---------------------------------------------------------------- reels
def pillars(slug):
    p = [("Film" if x == "Video" else x) for x in (COPY.get(slug, {}).get("pillars") or SOURCES.get(slug, {}).get("pillars") or [])]
    return p


def labels(slug, kind):
    p = pillars(slug)
    if kind == "brand":
        L = ["Branding"] + [x for x in p if x == "Print"]
    elif kind in ("web", "design"):
        L = [x for x in p if x not in ("Branding", "Print", "Film", "3D", "Motion")] or (["Apps"] if kind == "design" else ["Websites"])
    else:
        L = p
    return L[:3]


def shots_for(slug, kind, k=4):
    """[(callable -> (seq, dir))] for one part and kind."""
    secs = round(SEG + XF + 0.1, 2)
    if kind == "web":
        v = PHONE_VARIANT if slug in MOBILE_ONLY else WEB_VARIANTS[h(slug) % len(WEB_VARIANTS)]
        return [(lambda t=t, m=m: web_shot(slug, t, m, secs)) for t, m in v[:k]]
    if kind == "brand":
        return [(lambda q=q: book_shot(slug, q, secs)) for q in ("open", "pan", "detail_l", "detail_r")[:k]]
    if kind == "design":
        mv = ["push_in", "glide_r", "lift", "pull_out"]
        n = max(1, len(designs(slug)))
        return [(lambda i=i: dev_shot(slug, i, mv[i], secs)) for i in range(min(k, 4 if n > 1 else 3))]
    raise ValueError(kind)


def plan():
    jobs = []
    for host in HOSTS:
        parts = [host["slug"]] + [p["slug"] for p in (host.get("parts") or [])]
        story = []
        real_book = any((SOURCES.get(s) or {}).get("book") for s in parts)
        gen_done = False
        for s in parts:
            src = SOURCES.get(s)
            if not src:
                continue
            # one brandbook per client: the real one when a part has it, M7's brand sheets otherwise
            brand = src["book"] or (src["gen"] and not real_book and not gen_done)
            gen_done = gen_done or (brand and not src["book"])
            ks = (["brand"] if brand else []) + (["web"] if src["web"] else []) + (["design"] if src["dev"] else [])
            for k in ks:
                # M7's brand sheets show the client's brand, not one part: name them after the client
                nm = f"{host['slug']}-brand" if (k == "brand" and not src["book"]) else f"{s}-{k}"
                jobs.append({"host": host["slug"], "slug": s, "kind": k, "name": nm})
                story.append((s, k))
        if len(story) >= 2:
            jobs.append({"host": host["slug"], "slug": host["slug"], "kind": "story", "name": f"{host['slug']}-story", "items": story})
    return jobs


def out_path(job):
    return OUT / "reels-v2" / job["host"] / f"{job['name']}.mp4"


def pushed():
    p = R / "pushed.txt"
    return {ln.split("\t")[0] for ln in p.read_text().splitlines()} if p.exists() else set()


def bright(d):
    from PIL import Image, ImageStat
    f = sorted(Path(d).glob("*.jpg"))[0]
    im = Image.open(f).convert("L")
    w, hh = im.size
    return ImageStat.Stat(im.crop((w * 0.25, hh * 0.38, w * 0.75, hh * 0.56))).mean[0]


def reel(job):
    JOB["name"] = job["name"]
    if job["kind"] == "story":
        calls, lab = [], []
        per = 2 if len(job["items"]) <= 2 else 1
        for s, k in job["items"]:
            calls += shots_for(s, k, per)
            lab += labels(s, k)
        if len(calls) < 4:   # a two-part client: top up from the first part
            s, k = job["items"][0]
            calls += shots_for(s, k, 4)[per:per + 4 - len(calls)]
        calls = calls[:5]
        lab = list(dict.fromkeys(lab))[:3]
    else:
        calls, lab = shots_for(job["slug"], job["kind"]), labels(job["slug"], job["kind"])
    layers, cuts, dirs = [], [], []
    t = 0.0
    secs = round(SEG + XF + 0.1, 2)
    soft = {"type": "softfade", "d": XF, "ease": "inOutSine"}
    for i, c in enumerate(calls):
        sq, d = c()
        dirs.append(d)
        layers.append(media(sq, t, t + secs, {"type": "none"} if i == 0 else soft, {"type": "none"}))
        cuts.append(t)
        t += SEG
    end = t + XF
    light = bright(dirs[0]) > 140   # black emblem on light scenes, white on dark; a soft frost calms what runs underneath
    layers.append({"type": "m7lines", "t0": 0.12, "dur": 2.45, "size": 480, "cy": H * 0.46, "frost": True,
                   "ink": "#0B0B0D" if light else "#FFFFFF", "frostLight": 1.1 if light else 0.7, "frostBlur": 26})
    layers.append({"type": "glasslabels", "t0": 2.55, "t1": min(end - 0.3, 2.55 + 4.4), "items": lab, "mode": "pills", "y": H - 330})
    layers += outro(end - 0.35)
    dur = end - 0.35 + 3.3
    spec = {"w": W, "h": H, "fps": 30, "duration": round(dur, 2), "crf": 18, "layers": [{"type": "plain", "color": "#030304"}] + layers}
    style = "calm" if job["kind"] == "brand" else "clean"
    wav = R / "work" / f"{job['name']}.wav"
    wav.parent.mkdir(parents=True, exist_ok=True)
    x = audio.song(dur, style, cuts=cuts[1:] if style != "calm" else [], outro=end - 0.1, hits=[], seed=h(job["name"]) % 997)
    audio.write(wav, x)
    out = out_path(job)
    tmp = out.with_suffix(".tmp.mp4")
    lib.render(spec, tmp, audio=wav)
    wav.unlink(missing_ok=True)
    poster(tmp, out.with_suffix(".jpg"))
    tmp.rename(out)
    shutil.rmtree(SH / job["name"], ignore_errors=True)
    return out


def poster(mp4, jpg):
    """A 4-frame contact strip for the review page (kept locally; the mp4 goes to the private repo)."""
    P = R / "posters" / jpg.parent.name / jpg.name
    P.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(mp4), "-vf", "select='eq(n\\,45)+eq(n\\,140)+eq(n\\,240)+eq(n\\,340)',scale=270:480,tile=4x1", "-frames:v", "1", "-q:v", "4", str(P)], check=False)


def run_reels(part=None):
    jobs = plan()
    # longest first is not needed; interleave kinds so every worker gets a mix
    if part:
        i, n = map(int, part.split("/"))
        jobs = jobs[i - 1::n]
    done = pushed()
    for j in jobs:
        o = out_path(j)
        rel = str(o.relative_to(OUT))
        if o.exists() or rel in done:
            continue
        try:
            print("reel", j["name"], flush=True)
            print(" ->", reel(j), flush=True)
        except Exception as e:  # keep the worker going; failures are listed in the log
            print("FAIL", j["name"], str(e)[-600:], flush=True)


# ---------------------------------------------------------------- stories
STORY_WEB = [("d19_studio_front__p", "mid"), ("d09_ipad_keyboard__p", "close"), ("d02_mac_top__p", "close"), ("d11_ui_panels__p", "close"), ("d01_desk_studio__p", "mid"), ("d03_flatlay__p", "close")]
M7P = ["M58.168 49.8125L75.7011 11.1482H62.3291L58.2315 0H88.6286L88.5968 10.7616L70.3649 49.8125H58.168Z", "M75.7 11.1482H62.328L58.2305 0H64.2673L75.7 11.1482Z",
       "M88.5972 10.7615L70.3653 49.8126L75.7014 11.1482L69.8398 0H88.629L88.5972 10.7615Z", "M70.3649 49.8109H58.168L75.7011 11.1465L70.3649 49.8109Z",
       "M0 0.119141H16.4012L27.729 32.6887H27.8682L39.2655 0.119141H55.5972V50.0311H44.7557V11.7512H44.6168L31.6905 50.0311H23.4202L10.9805 11.7512H10.8415V50.0311H0V0.119141Z"]


def emblem(ink, y=150, size=104):
    """The small M7 emblem, top centre: flat, no shadow."""
    return {"type": "html", "x": (W - size) // 2, "y": y, "w": size,
            "html": f'<svg viewBox="0 0 89 51" width="{size}" fill="{ink}">' + "".join(f'<path d="{p}"/>' for p in M7P) + "</svg>"}


def crop_still(src, box, out):
    """One 9:16 frame from a big still (book or design scene): box = centre x, centre y, width."""
    from PIL import Image, ImageFilter
    im = Image.open(src).convert("RGB")
    cx, cy, w = box
    hh = w * H / W
    x0 = min(max(cx - w / 2, 0), im.width - w)
    y0 = min(max(cy - hh / 2, 0), im.height - hh)
    fr = im.resize((W, H), Image.LANCZOS, box=(x0, y0, x0 + w, y0 + hh))
    if w < W * 0.95:
        fr = fr.filter(ImageFilter.UnsharpMask(radius=1.0, percent=40, threshold=2))
    fr.save(out, quality=94)
    return out


def story_image(slug, kind, k):
    d = R / "story-src"
    d.mkdir(parents=True, exist_ok=True)
    if kind == "web":
        t, mv = STORY_WEB[(h(slug) + k) % len(STORY_WEB)]
        if slug in MOBILE_ONLY:
            t, mv = PHONE_VARIANT[(h(slug) + k) % len(PHONE_VARIANT)][0], "wide"
        out = d / f"web-{slug}-{t}-{mv}.jpg"
        if not out.exists():
            venv(PORTRAIT, "still", slug, t, out, "--s", "0.3", "--move", mv)
        return out
    if kind == "brand":
        still, geo = book_src(slug)
        mv = book_moves(geo)
        if geo.get("gen"):
            q = ["detail_l", "detail_r", "pan"][(h(slug) + k) % 3]
            box = mv[q][1] if q != "pan" else ((mv["pan"][0][0] + mv["pan"][1][0]) / 2, mv["pan"][0][1], 860)
        else:
            q = ["l1", "r1"][(h(slug) + k) % 2]
            box = (*_mid(geo[q]), 1120)
        return crop_still(still, box, d / f"brand-{slug}-{q}.jpg")
    if kind == "design":
        i = (h(slug) + k) % max(1, len(designs(slug)))
        t = DEV_TPL[i % len(DEV_TPL)]
        still = dev_src(slug, t, i)
        fx, fy = DEV_FOCUS[t]
        return crop_still(still, (fx, fy, 1240), d / f"design-{slug}-{i}.jpg")
    raise ValueError(kind)


def story_plan(n=50):
    """Every client once (best ranked first, kinds balanced), then a second kind for the top clients, up to n."""
    hosts = sorted(HOSTS, key=lambda x: (x.get("rank") if x.get("rank") is not None else 999, x["slug"]))
    jobs = [j for j in plan() if j["kind"] != "story"]
    by_host = {}
    for j in jobs:
        by_host.setdefault(j["host"], []).append(j)
    picks, count = [], {"brand": 0, "web": 0, "design": 0}
    for rnd in range(3):
        for hst in hosts:
            js = by_host.get(hst["slug"], [])
            if len(js) <= rnd:
                continue
            js = sorted(js, key=lambda j: count[j["kind"]])    # the kind we have least of so far
            j = js[0]
            by_host[hst["slug"]] = [x for x in by_host[hst["slug"]] if x is not j]
            picks.append(j)
            count[j["kind"]] += 1
            if len(picks) >= n:
                return picks
    return picks


def stories(n=50):
    from PIL import Image, ImageStat
    jobs = []
    for i, j in enumerate(story_plan(n)):
        try:
            img = story_image(j["slug"], j["kind"], i)
        except Exception as e:
            print("FAIL story", j["name"], str(e)[-300:])
            continue
        g = Image.open(img).convert("L")
        top = ImageStat.Stat(g.crop((W * 0.4, 120, W * 0.6, 230))).mean[0]
        L = [{"type": "media", "src": lib.furl(img), "t0": -1, "t1": 1e9, "rect": FULL, "frame": "full", "radius": 0, "float": 0,
              "enter": {"type": "none"}, "exit": {"type": "none"}, "kb": {"s0": 1, "s1": 1}, "fit": "cover"},
             emblem("#0B0B0D" if top > 140 else "#FFFFFF"),
             {"type": "glasslabels", "t0": 0, "t1": 1e9, "items": labels(j["slug"], j["kind"]), "mode": "pills", "y": H - 360}]
        jobs.append({"spec": {"w": W, "h": H, "layers": L}, "out": str(OUT / "stories-v2" / f"story-{i + 1:02d}-{j['slug']}-{j['kind']}.jpg"), "t": 5})
    jp = R / "stories-jobs.json"
    jp.write_text(json.dumps(jobs))
    r = subprocess.run(["node", str(HERE / "batch.cjs"), str(jp)], capture_output=True, text=True)
    print(r.stdout.strip(), r.stderr[-400:])


if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "plan":
        js = plan()
        from collections import Counter
        print(len(js), Counter(j["kind"] for j in js))
        for j in js:
            print(j["host"], j["name"], j.get("items", ""))
    elif cmd == "reels":
        run_reels(sys.argv[sys.argv.index("--part") + 1] if "--part" in sys.argv else None)
    elif cmd == "stories":
        stories(int(sys.argv[2]) if len(sys.argv) > 2 else 50)
    elif cmd == "story-plan":
        for j in story_plan():
            print(j["name"])
    elif cmd == "one":
        j = next(x for x in plan() if x["name"] == sys.argv[2])
        print(reel(j))
