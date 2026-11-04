"""Shared helpers for the M7 social studio: media choice, frame extraction, ambient images, rendering."""
import hashlib
import json
import os
import random
import shutil
import subprocess
from pathlib import Path

from PIL import Image, ImageFilter, ImageEnhance

REPO = Path("/home/user/M7")
PUB = REPO / "public"
HERE = Path(__file__).resolve().parent
WORK = Path(os.environ.get("SOCIAL_WORK", "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r18/work"))
W, H, FPS = 1080, 1920, 30

PILLAR = {
    "branding-rebranding": "Branding", "websites-webshops": "Websites", "web-apps-portals-apps": "Apps",
    "automation-funnels": "Automation", "seo-aeo-geo": "SEO", "content-marketing-online-ads": "Marketing",
    "foto-video-3d-animatie": "Motion", "grafisch-ontwerp-print": "Print", "configurators-lead-tools-widgets": "Tools", "ai-consultancy": "AI",
}


def pub(p: str) -> Path:
    return PUB / p.lstrip("/")


def furl(p) -> str:
    return "file://" + str(p)


def probe(path: Path):
    out = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height:format=duration", "-of", "json", str(path)], capture_output=True, text=True).stdout
    j = json.loads(out or "{}")
    st = (j.get("streams") or [{}])[0]
    return st.get("width", 0), st.get("height", 0), float((j.get("format") or {}).get("duration") or 0)


def img_size(path: Path):
    try:
        with Image.open(path) as im:
            return im.size
    except Exception:
        return (0, 0)


def key(*parts) -> str:
    return hashlib.md5("|".join(map(str, parts)).encode()).hexdigest()[:10]


def frames(src: Path, start: float, dur: float, w: int, h: int, mode: str = "fit", rate: float = 1.0) -> dict:
    """Extract a segment as a jpg sequence. mode fit: scale to width w (height follows);
    cover: crop to w×h (centre). Returns {dir, n, fps}."""
    d = WORK / "frames" / key(src, start, dur, w, h, mode, rate)
    if d.exists() and any(d.iterdir()):
        n = len(list(d.glob("*.jpg")))
        return {"dir": furl(d), "n": n, "fps": FPS}
    d.mkdir(parents=True, exist_ok=True)
    if mode == "cover":
        vf = f"scale={w}:{h}:force_original_aspect_ratio=increase:flags=lanczos,crop={w}:{h}"
    else:
        vf = f"scale={w}:-2:flags=lanczos"
    if rate != 1.0:
        vf = f"setpts=PTS/{rate}," + vf
    vf = f"fps={FPS}," + vf
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", f"{start:.2f}", "-t", f"{dur / rate if rate != 1 else dur:.2f}", "-i", str(src), "-vf", vf, "-q:v", "2", "-threads", "2", str(d / "%05d.jpg")], check=True)
    n = len(list(d.glob("*.jpg")))
    return {"dir": furl(d), "n": n, "fps": FPS}


def still_frame(src: Path, t: float) -> Path:
    out = WORK / "stills" / (key(src, t) + ".jpg")
    if not out.exists():
        out.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", f"{t:.2f}", "-i", str(src), "-frames:v", "1", "-q:v", "2", str(out)], check=True)
    return out


def ambient(src: Path, darken: float = 0.78) -> str:
    """Small, heavily blurred, slightly saturated version for the full-screen glow behind a card."""
    out = WORK / "amb" / (key(src, darken) + ".jpg")
    if not out.exists():
        out.parent.mkdir(parents=True, exist_ok=True)
        im = Image.open(src).convert("RGB")
        im = im.resize((144, int(144 * im.height / im.width)), Image.LANCZOS)
        # cover crop to 9:16
        tw, th = 108, 192
        sc = max(tw / im.width, th / im.height)
        im = im.resize((max(tw, int(im.width * sc)), max(th, int(im.height * sc))), Image.LANCZOS)
        l, t = (im.width - tw) // 2, (im.height - th) // 2
        im = im.crop((l, t, l + tw, t + th)).filter(ImageFilter.GaussianBlur(9))
        im = ImageEnhance.Color(im).enhance(1.35)
        im = ImageEnhance.Brightness(im).enhance(darken)
        im.save(out, quality=88)
    return furl(out)


def render(spec: dict, out: Path, audio: Path | None = None, still=None):
    out.parent.mkdir(parents=True, exist_ok=True)
    sp = WORK / "specs" / (out.stem + ".json")
    sp.parent.mkdir(parents=True, exist_ok=True)
    sp.write_text(json.dumps(spec))
    cmd = ["node", str(HERE / "render.cjs"), str(sp), str(out)]
    if audio:
        cmd.append(str(audio))
    if still is not None:
        cmd += ["--still", ",".join(str(s) for s in (still if isinstance(still, (list, tuple)) else [still]))]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0 or "PAGEERROR" in r.stderr:
        raise RuntimeError(f"render failed {out}: {r.stderr[-2000:]}")
    return out


def cleanup_frames():
    shutil.rmtree(WORK / "frames", ignore_errors=True)
