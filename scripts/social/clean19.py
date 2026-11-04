"""Round 19: clean, full-screen style samples. Full-bleed portrait 3D mockups (template portrait cameras with the
project's real screens), no text: a 1-second M7 technical-lines intro, glass service labels, the M7 logo outro.

  python clean19.py reels|stories|carousels|all
"""
import json
import os
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import lib  # noqa: E402
import audio  # noqa: E402
import run  # noqa: E402

S = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad"
OUT = Path(S) / "r19" / "out"
SHOTS = Path(S) / "r19" / "shots"
VENV = f"{S}/r11/venv/bin/python"
PORTRAIT = str(Path(__file__).resolve().parent / "portrait.py")
W, H = 1080, 1920
COPY = run.load_copy()


def pillars(slug, n=3):
    p = [("Film" if x == "Video" else x) for x in (COPY.get(slug, {}).get("pillars") or [])]
    return p[:n] or ["Branding"]


def shot(slug, t, move, secs, scroll=True, w=W, h=H):
    d = SHOTS / f"{slug}-{t}-{move}-{secs}-{w}x{h}"
    n = int(round(secs * 30))
    if not (d.exists() and len(list(d.glob("*.jpg"))) >= n):
        subprocess.run([VENV, PORTRAIT, "shot", slug, t, move, str(secs), str(d), "--scroll", "1" if scroll else "0", "--w", str(w), "--h", str(h)],
                       cwd=f"{S}/r12/scenes", check=True, capture_output=True)
    return {"dir": lib.furl(d), "n": n, "fps": 30}


def still(slug, t, out, s=0.35, w=W, h=H, move="close"):
    out = Path(out)
    if not out.exists():
        out.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run([VENV, PORTRAIT, "still", slug, t, str(out), "--s", str(s), "--w", str(w), "--h", str(h), "--move", move], cwd=f"{S}/r12/scenes", check=True, capture_output=True)
    return out


FULL = {"x": 0, "y": 0, "w": W, "h": H}


def media(seq, t0, t1, enter, exit, rect=FULL):
    return {"type": "media", "seq": seq, "t0": t0, "t1": t1, "rect": rect, "frame": "full", "radius": 0, "float": 0,
            "enter": enter, "exit": exit, "kb": {"s0": 1, "s1": 1}, "fit": "cover"}


def outro(t0, glow="58,255,255"):
    return [{"type": "plain", "t0": t0, "fade": 0.5, "glow": glow, "glowY": 44},
            {"type": "outro", "t0": t0 + 0.25, "payoff": "", "url": "", "dimMax": 0.0, "cy": 860, "size": 380}]


STYLES = {
    # A: pure. Soft crossfades with a whisper of scale, pills centred.
    "a-pure": dict(slug="monvy", shots=[("d09_ipad_keyboard__p", "push_in"), ("d02_mac_top__p", "glide_r"), ("d11_ui_panels__p", "lift"), ("d19_studio_front__p", "pull_out")],
                   seg=3.3, xf=0.8, enter={"type": "softfade", "d": 0.8, "ease": "inOutSine"}, labels="pills", music="clean"),
    # B: cinematic. Longer shots, blur dissolves, fine grain and vignette, one glass bar.
    "b-cinematic": dict(slug="hela", shots=[("d19_studio_front__p", "push"), ("d09_ipad_keyboard__p", "glide_l"), ("b06_wall_logo__p", "push"), ("d02_mac_top__p", "pull_out")],
                        seg=3.8, xf=1.0, enter={"type": "blur", "d": 1.0, "ease": "inOutSine"}, labels="bar", music="calm", grade=True),
    # C: precision. Shorter shots, a clean hairline wipe, small chips left.
    "c-precision": dict(slug="the-digital-clinic", shots=[("d02_mac_top__p", "push_in"), ("d19_studio_front__p", "glide_r"), ("d09_ipad_keyboard__p", "lift"), ("d11_ui_panels__p", "close"), ("b06_wall_logo__p", "push")],
                        seg=2.6, xf=0.55, enter={"type": "wipeL", "d": 0.55, "ease": "inOutCubic"}, labels="chips", music="dynamic"),
}


def reel(name, st):
    slug = st["slug"]
    layers, cuts = [], []
    t = 0.0
    n = len(st["shots"])
    for i, (tp, mv) in enumerate(st["shots"]):
        secs = st["seg"] + st["xf"] + 0.1
        seq = shot(slug, tp, mv, round(secs, 2), scroll=not tp.startswith("b0"))
        en = {"type": "none"} if i == 0 else st["enter"]
        layers.append(media(seq, t, t + secs, en, {"type": "none"}))
        if st["enter"]["type"] == "wipeL" and i > 0:
            layers.append({"type": "hairline", "t": t, "d": st["xf"]})
        cuts.append(t)
        t += st["seg"]
    end = t + st["xf"]
    if st.get("grade"):
        layers.append({"type": "grade", "grain": 0.08, "vignette": 0.4, "rate": 8})
    layers.append({"type": "m7lines", "t0": 0.12, "dur": 1.3, "size": 480, "cy": H * 0.46})
    layers.append({"type": "glasslabels", "t0": 1.35, "t1": min(end - 0.3, 1.35 + 4.2), "items": pillars(slug), "mode": st["labels"], "y": H - 330})
    layers += outro(end - 0.35)
    dur = end - 0.35 + 3.3
    spec = {"w": W, "h": H, "fps": 30, "duration": round(dur, 2), "crf": 18, "layers": [{"type": "plain", "color": "#030304"}] + layers}
    wav = Path(S) / "r19" / f"{name}.wav"
    x = audio.song(dur, st["music"], cuts=cuts[1:] if st["music"] != "calm" else [], outro=end - 0.1, hits=[], seed=19 + len(name))
    audio.write(wav, x)
    out = OUT / "reels" / f"reel-{name}-{slug}.mp4"
    lib.render(spec, out, audio=wav)
    wav.unlink(missing_ok=True)
    return out


STORY = {
    "a-pure": dict(slug="repairlab", t="d19_studio_front__p", labels="pills", move="mid"),
    "b-cinematic": dict(slug="plenty-planet", t="d09_ipad_keyboard__p", labels="bar", grade=True),
    "c-precision": dict(slug="fairlink", t="d01_desk_studio__p", labels="chips"),
}


def mark(y=150, size=110):
    """Small M7 emblem, top centre (no text)."""
    return {"type": "html", "x": (W - size) // 2, "y": y, "w": size, "html": f'<svg viewBox="0 0 89 51" width="{size}" fill="#fff" style="filter:drop-shadow(0 4px 18px rgba(0,0,0,.35))">' + "".join(f'<path d="{p}"/>' for p in M7P) + "</svg>"}


M7P = ["M58.168 49.8125L75.7011 11.1482H62.3291L58.2315 0H88.6286L88.5968 10.7616L70.3649 49.8125H58.168Z", "M75.7 11.1482H62.328L58.2305 0H64.2673L75.7 11.1482Z",
       "M88.5972 10.7615L70.3653 49.8126L75.7014 11.1482L69.8398 0H88.629L88.5972 10.7615Z", "M70.3649 49.8109H58.168L75.7011 11.1465L70.3649 49.8109Z",
       "M0 0.119141H16.4012L27.729 32.6887H27.8682L39.2655 0.119141H55.5972V50.0311H44.7557V11.7512H44.6168L31.6905 50.0311H23.4202L10.9805 11.7512H10.8415V50.0311H0V0.119141Z"]


def stories():
    jobs = []
    for name, st in STORY.items():
        img = still(st["slug"], st["t"], SHOTS / f"story-{st['slug']}-{st['t']}-{st.get('move', 'close')}.jpg", s=0.25, move=st.get("move", "close"))
        L = [{"type": "media", "src": lib.furl(img), "t0": -1, "t1": 1e9, "rect": FULL, "frame": "full", "radius": 0, "float": 0, "enter": {"type": "none"}, "exit": {"type": "none"}, "kb": {"s0": 1, "s1": 1}, "fit": "cover"}]
        if st.get("grade"):
            L.append({"type": "grade", "grain": 0.12, "vignette": 0.42})
        L += [mark(), {"type": "glasslabels", "t0": 0, "t1": 1e9, "items": pillars(st["slug"]), "mode": st["labels"], "y": H - 360}]
        jobs.append({"spec": {"w": W, "h": H, "layers": L}, "out": str(OUT / "stories" / f"story-{name}-{st['slug']}.jpg"), "t": 5})
    return jobs


CAROUSEL = {
    "a-pure": dict(slug="huurfix", ts=["d19_studio_front__p", "d11_ui_panels__p", "d01_desk_studio__p", "d03_flatlay__p"], labels="pills"),
    "b-cinematic": dict(slug="bernheze-makelaars-rebranding", ts=["d19_studio_front__p", "d01_desk_studio__p", "d03_flatlay__p", "b06_wall_logo__p"], labels="bar", grade=True),
    "c-precision": dict(slug="expociety-app", ts=["d19_studio_front__p", "d02_mac_top__p", "d09_ipad_keyboard__p", "d11_ui_panels__p", "d01_desk_studio__p"], labels="chips"),
}
CW, CH = 1080, 1350


def carousels():
    jobs = []
    for name, st in CAROUSEL.items():
        slug = st["slug"]
        slides = []
        for k, tp in enumerate(st["ts"]):
            mv = "wide" if tp.startswith(("d19", "d01")) else "close"
            img = still(slug, tp, SHOTS / f"car-{slug}-{tp}-{mv}.jpg", s=0.3, w=CW, h=CH, move=mv)
            L = [{"type": "media", "src": lib.furl(img), "t0": -1, "t1": 1e9, "rect": {"x": 0, "y": 0, "w": CW, "h": CH}, "frame": "full", "radius": 0, "float": 0, "enter": {"type": "none"}, "exit": {"type": "none"}, "kb": {"s0": 1, "s1": 1}, "fit": "cover"}]
            if st.get("grade"):
                L.append({"type": "grade", "grain": 0.1, "vignette": 0.4})
            if k == 0:
                L += [dict(mark(110, 96), x=(CW - 96) // 2), {"type": "glasslabels", "t0": 0, "t1": 1e9, "items": pillars(slug), "mode": st["labels"], "y": CH - 190, "size": 26}]
            slides.append({"w": CW, "h": CH, "layers": L})
        # last slide: the M7 badge on black with a soft glow (no text)
        slides.append({"w": CW, "h": CH, "layers": [{"type": "plain", "glow": "58,255,255", "glowY": 48}, {"type": "badge", "x": CW / 2 - 140, "y": CH / 2 - 160, "size": 280}]})
        for i, sp in enumerate(slides):
            jobs.append({"spec": sp, "out": str(OUT / "carousels" / f"carousel-{name}-{slug}" / f"{i + 1:02d}.jpg"), "t": 5})
    return jobs


def render_stills(jobs):
    jp = Path(S) / "r19" / "jobs.json"
    jp.write_text(json.dumps(jobs))
    r = subprocess.run(["node", str(Path(__file__).resolve().parent / "batch.cjs"), str(jp)], capture_output=True, text=True)
    print(r.stdout.strip(), r.stderr[-400:])


if __name__ == "__main__":
    what = sys.argv[1]
    if what in ("stories", "all"):
        render_stills(stories())
    if what in ("carousels", "all"):
        render_stills(carousels())
    if what in ("reels", "all"):
        for name, st in STYLES.items():
            if len(sys.argv) > 2 and name not in sys.argv[2:]:
                continue
            print(reel(name, st))
