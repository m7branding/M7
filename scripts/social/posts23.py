"""Round 23: minimal story posts that explain one service application each, with a real use case running off the frame.

Owner brief (Dutch): "hele minimalistische story posts ... specifieke diensten en toepassingen laten zien / kort bondig
uitleggen. Dit moet echt niet AI achtig zijn en er heel minimalistisch uitzien, met eventueel een uit het beeld lopende
use case mockup."

So, deliberately plain: the dark M7 stage, a small white M7 mark, the application's name, one sentence from the
website's own copy (src/content/services/*.ts), the client's name, and one real piece of work that runs off the edge of
the frame (a browser window, a phone, a UI card, a brandbook band). No eyebrows, no gradient words, no glow, no
numbered markers, no outro animation. Motion: the text rises softly, the mockup arrives with a calm focus pull and the
recording inside it plays.

Every post: 1080x1920, 60 fps, 8 s, the calm music bed, plus a PNG still.

  python posts23.py all          render all posts (mp4 + png)
  python posts23.py stills 1 3   stills only (layout check) into the work folder
"""
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, str(Path(__file__).resolve().parent))
import audio  # noqa: E402
import stories22 as s22  # noqa: E402

S = s22.S
WORK = Path("/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r23w")
DELIVER = S / "r23" / "deliver" / "story-posts"
CAP = S / "r21" / "cap"
MEDIA = s22.MEDIA
FONT = S / "r13" / "brand" / "_fonts" / "Montserrat" / "Montserrat-500.ttf"
W, H, FPS, DUR = 1080, 1920, 60, 8.0
KX = 88
INK, MUTED, DIM = "#f6f6f8", "#9b9ba4", "#77777f"

M7P = [
    "M58.168 49.8125L75.7011 11.1482H62.3291L58.2315 0H88.6286L88.5968 10.7616L70.3649 49.8125H58.168Z",
    "M75.7 11.1482H62.328L58.2305 0H64.2673L75.7 11.1482Z",
    "M88.5972 10.7615L70.3653 49.8126L75.7014 11.1482L69.8398 0H88.629L88.5972 10.7615Z",
    "M70.3649 49.8109H58.168L75.7011 11.1465L70.3649 49.8109Z",
    "M0 0.119141H16.4012L27.729 32.6887H27.8682L39.2655 0.119141H55.5972V50.0311H44.7557V11.7512H44.6168L31.6905 50.0311H23.4202L10.9805 11.7512H10.8415V50.0311H0V0.119141Z",
]


# ---------------------------------------------------------------- material: frames with the device chrome baked in
def ff(*args):
    subprocess.run(["ffmpeg", "-nostdin", "-y", "-loglevel", "error", *map(str, args)], check=True)


def frames_dir(name):
    d = WORK / "frames" / name
    done = d.exists() and any(d.glob("*.jpg"))
    d.mkdir(parents=True, exist_ok=True)
    return d, done


def browser_bar(w, url, h=50):
    """A quiet browser bar: three muted dots and the address in a pill (left aligned: the window runs off the right)."""
    im = Image.new("RGB", (w, h), "#1c1c21")
    dr = ImageDraw.Draw(im)
    for i in range(3):
        cx = 26 + i * 20
        dr.ellipse((cx - 6, h / 2 - 6, cx + 6, h / 2 + 6), fill="#3a3a41")
    font = ImageFont.truetype(str(FONT), 17)
    tw = dr.textlength(url, font=font)
    x0, y0 = 104, (h - 30) / 2
    dr.rounded_rectangle((x0, y0, x0 + tw + 36, y0 + 30), radius=15, fill="#2a2a30")
    dr.text((x0 + 18, h / 2), url, font=font, fill="#a6a6ae", anchor="lm")
    dr.line((0, h - 1, w, h - 1), fill="#2c2c32")
    p = WORK / f"bar-{w}.png"
    im.save(p)
    return p


def browser_frames(name, src, url, w, crop_x=0.0, t0=0.0, dur=8.0):
    """A desktop capture (2880x1800) cropped from crop_x (fraction) and scaled to width w, with the browser bar on top."""
    d, done = frames_dir(name)
    if not done:
        bar = browser_bar(w, url)
        vf = (f"[0:v]crop=iw*{1 - crop_x:.4f}:ih:iw*{crop_x:.4f}:0,scale={w}:-2:flags=lanczos,pad={w}:ih+50:0:50:color=0x1c1c21[v];"
              f"[v][1:v]overlay=0:0")
        ff("-ss", f"{t0:.2f}", "-t", f"{dur:.2f}", "-i", src, "-i", bar, "-filter_complex", vf, "-q:v", "2", d / "%05d.jpg")
    return d


def crop_frames(name, src, box, w, t0=0.0, dur=8.0):
    """A region of a capture (x, y, w, h in source px), scaled to width w (a UI card)."""
    d, done = frames_dir(name)
    if not done:
        x, y, cw, ch = box
        ff("-ss", f"{t0:.2f}", "-t", f"{dur:.2f}", "-i", src, "-vf", f"crop={cw}:{ch}:{x}:{y},scale={w}:-2:flags=lanczos", "-q:v", "2", d / "%05d.jpg")
    return d


def phone_frames(name, src, screen_w=560, bezel=18, t0=0.0, dur=8.0):
    """A mobile capture (390x844 @2x) inside a plain dark phone: bezel, rounded screen, the island. The outer corners are
    rounded by the card radius in the engine."""
    d, done = frames_dir(name)
    sh = round(screen_w * 1688 / 780 / 2) * 2
    ow, oh = screen_w + 2 * bezel, sh + 2 * bezel
    if not done:
        k = 4                                  # supersampled mask for smooth inner corners
        m = Image.new("L", (ow * k, oh * k), 255)
        ImageDraw.Draw(m).rounded_rectangle((bezel * k, bezel * k, (bezel + screen_w) * k, (bezel + sh) * k), radius=58 * k, fill=0)
        isl_w, isl_h, isl_y = 112, 32, bezel + 12
        ImageDraw.Draw(m).rounded_rectangle(((ow - isl_w) / 2 * k, isl_y * k, (ow + isl_w) / 2 * k, (isl_y + isl_h) * k), radius=isl_h / 2 * k, fill=255)
        m = m.resize((ow, oh), Image.LANCZOS)
        over = Image.new("RGBA", (ow, oh), (11, 11, 13, 255))
        over.putalpha(m)
        # the island is black, not bezel grey
        ImageDraw.Draw(over).rounded_rectangle(((ow - isl_w) / 2, isl_y, (ow + isl_w) / 2, isl_y + isl_h), radius=isl_h / 2, fill=(0, 0, 0, 255))
        p = WORK / f"phone-{ow}x{oh}.png"
        over.save(p)
        vf = f"[0:v]scale={screen_w}:{sh}:flags=lanczos,pad={ow}:{oh}:{bezel}:{bezel}:color=0x0b0b0d[v];[v][1:v]overlay=0:0"
        ff("-ss", f"{t0:.2f}", "-t", f"{dur:.2f}", "-i", src, "-i", p, "-filter_complex", vf, "-q:v", "2", d / "%05d.jpg")
    return d, (ow, oh)


def pan_frames(name, still, box, w, h, dur=8.0):
    """A slow, eased horizontal pan over a region of a still (a brandbook photo), as a frame sequence."""
    d, done = frames_dir(name)
    if not done:
        x, y, cw, ch = box
        vf = (f"crop={cw}:{ch}:{x}:{y},scale=-2:{h}:flags=lanczos,"
              f"crop={w}:{h}:'(iw-{w})*(0.5-0.5*cos(PI*min(t/{dur:.2f},1)))':0")
        ff("-loop", "1", "-framerate", FPS, "-t", f"{dur:.2f}", "-i", still, "-vf", vf, "-q:v", "2", d / "%05d.jpg")
    return d


# ---------------------------------------------------------------- layers
def mark(t0=0.1):
    svg = (f'<svg width="62" height="36" viewBox="0 0 89 51" aria-hidden="true"><g fill="#f6f6f8">'
           + "".join(f'<path d="{p}"/>' for p in M7P) + "</g></svg>")
    return {"type": "html", "x": KX, "y": 250, "w": 120, "t0": t0, "t1": 1e9, "html": svg}


def heading(lines, y=332, size=70):
    return dict(type="xtext", lines=[{"t": s} for s in lines], t0=0.25, t1=1e9, x=KX, y=y, w=W - 2 * KX, size=size, weight=800,
                ls=-0.03, lh=1.08, st=0.05, d=1.1, blur=5)


def body(lines, y, size=38):
    return dict(type="xtext", lines=[{"t": s} for s in lines], t0=0.8, t1=1e9, x=KX, y=y, w=W - 2 * KX, size=size, weight=500,
                color=MUTED, ls=-0.005, lh=1.42, st=0.025, d=1.1, blur=4)


def caption(text, x, y):
    return dict(type="xtext", lines=[{"t": text}], t0=1.35, t1=1e9, x=x, y=y, w=900, size=26, weight=600, color=DIM, ls=0.0, lh=1.2,
                st=0.0, d=1.0, blur=3)


def screen(seq, rect, radius=22, rate=1.0, kb=None, shadow=None, bg="#0b0b0e", t0=1.0):
    m = {"type": "media", "t0": t0, "t1": DUR + 1, "rect": rect, "frame": "card",
            "radius": radius, "float": 0, "fit": "cover", "pos": "50% 0%",
            "enter": {"type": "focus", "d": 1.4, "ease": "inOutSine", "blur": 14, "s0": 1.0, "fade": 1.7},
            "exit": {"type": "none"}, "kb": kb or {"s0": 1.0, "s1": 1.0},
            "shadow": shadow or "0 40px 90px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.07)", "bg": bg}
    if seq is not None:
        m["seq"] = s22.seq_dir(seq, FPS) | {"rate": rate}
    return m


def still_card(src, rect, radius=22, kb=None, bg="#202124", t0=1.0):
    m = screen(None, rect, radius, kb=kb, bg=bg, t0=t0)
    m["src"] = s22.furl(src)
    return m


# ---------------------------------------------------------------- the posts
def posts():
    P = {}
    # 1. Productconfigurator: Steddion's Energy Property Configurator (pand type, profile, the usage graph) in a browser
    #    window that runs off the right.
    rate = 1.35
    d = browser_frames("steddion", CAP / "steddion-tools" / "flow-1-intake-desktop.mp4", "tools.steddion.com/configurator", 1330,
                       crop_x=0.125, t0=1.6, dur=(DUR - 1.0) * rate + 0.2)   # crop between the logo and the tool name
    P[1] = dict(slug="productconfigurator", seed=5, still=7.4, layers=[
        mark(), heading(["Productconfigurator"]),
        body(["Klanten stellen zelf hun product samen", "en zien direct resultaat en prijs."], 438),
        caption("Steddion", KX, 760),
        screen(d, {"x": 130, "y": 806, "w": 1330, "h": 1000}, rate=rate),
    ])

    # 2. Check-tools & quickscans: Plenty Planet's Subsidiecheck Solar Carport, the modal itself as a card off the right.
    rate = 1.3
    d = crop_frames("plentyplanet", CAP / "plenty-planet" / "flow-32-subsidiecheck-desktop.mp4", (500, 132, 1880, 1536), 1100,
                    t0=4.6, dur=(DUR - 1.0) * rate + 0.2)
    P[2] = dict(slug="check-tools", seed=17, still=7.2, layers=[
        mark(), heading(["Check-tools &", "quickscans"]),
        body(["Je bezoeker beantwoordt een paar vragen", "en krijgt direct inzicht."], 514),
        caption("Plenty Planet", KX, 760),
        screen(d, {"x": 150, "y": 806, "w": 1100, "h": 898}, radius=52, rate=rate, bg="#ffffff"),
    ])

    # 3. Boekings- & afsprakenwidget: Repairlab on a phone that runs off the bottom (repair, step, date, time slot).
    d, (pw, ph) = phone_frames("repairlab", CAP / "repairlab" / "flow-33-afspraak-mobile.mp4", t0=0.0, dur=6.0)
    P[3] = dict(slug="boekingswidget", seed=29, still=7.0, layers=[
        mark(), heading(["Boekings- &", "afsprakenwidget"]),
        body(["Klanten plannen zelf een afspraak in,", "direct gekoppeld aan je agenda."], 514),
        caption("Repairlab", KX, 760),
        screen(d, {"x": W - KX - pw, "y": 806, "w": pw, "h": ph}, radius=74, rate=0.88, bg="#0b0b0d"),
    ])

    # 4. Brandbook & merkrichtlijnen: the real Bernheze Makelaars brandbook, a light band from edge to edge, panning slowly.
    book = S / "r20" / "src" / "book-bernheze-makelaars-rebranding" / "still.jpg"
    d = pan_frames("bernheze", book, (0, 880, 3000, 860), W, 760, dur=DUR - 1.0 + 0.1)
    P[4] = dict(slug="brandbook", seed=41, still=4.6, layers=[
        mark(), heading(["Brandbook &", "merkrichtlijnen"]),
        body(["Alle merkregels helder vastgelegd,", "zodat iedereen on-brand werkt."], 514),
        caption("Bernheze Makelaars", KX, 760),
        screen(d, {"x": 0, "y": 806, "w": W, "h": 760}, radius=0, shadow="none", bg="#e6e6e6"),
    ])

    # 5. GEO: the AI answer that cites The Sandt (the site's own SEO showcase image), off the right, the cited source
    #    outlined once.
    ai = MEDIA / "showcase" / "thesandt" / "ai-answer.webp"
    k = 1300 / 1420
    y = 806
    P[5] = dict(slug="geo", seed=53, still=6.0, layers=[
        mark(), heading(["Generative Engine", "Optimization"]),
        body(["Genoemd en geciteerd worden door", "ChatGPT, Perplexity, Gemini en", "Google AI Overviews."], 514),
        caption("The Sandt", KX, 760),
        still_card(ai, {"x": 150, "y": y, "w": 1300, "h": round(668 * k)}, radius=24, kb={"s0": 1.0, "s1": 1.0, "x0": 0, "x1": -1.6, "ease": "inOutSine"}),
        dict(type="xring", x=150 + round(648 * k), y=y + round(174 * k), w=round(350 * k), h=round(41 * k), r=round(20 * k), sw=3, t0=2.8, d=1.3, t1=1e9),
    ])
    # the GEO body runs three lines: move its card and caption down by one line
    for l in P[5]["layers"]:
        if l.get("type") == "media":
            l["rect"]["y"] += 52
        elif l.get("type") == "xring":
            l["y"] += 52
        elif l.get("type") == "xtext" and l["y"] == 760:
            l["y"] += 52
    return P


def spec_of(p):
    return {"w": W, "h": H, "fps": FPS, "duration": DUR, "crf": 17, "layers": [{"type": "plain", "color": "#030304"}] + p["layers"]}


def build(n, p, stills_only=False):
    spec = spec_of(p)
    name = f"m7-post-{n:02d}-{p['slug']}"
    if stills_only:
        return s22.render(spec, WORK / "stills" / f"{name}.jpg", still=[p["still"], 2.0])
    wav = WORK / f"{name}.wav"
    audio.write(wav, audio.song(DUR, "calm", cuts=[], outro=None, hits=[], seed=p["seed"]), lufs=-17)
    tmp = WORK / f"{name}.mp4"
    s22.render(spec, tmp, wav=wav)
    shutil.move(str(tmp), DELIVER / f"{name}.mp4")
    s22.render(spec, DELIVER / f"{name}.png", still=p["still"])
    wav.unlink(missing_ok=True)
    return DELIVER / f"{name}.mp4"


if __name__ == "__main__":
    s22.WORK = WORK                  # own work folder: the page, renderer and specs of round 22 stay untouched
    s22.setup()
    args = sys.argv[1:]
    only = bool(args) and args[0] == "stills"
    if only:
        args = args[1:]
    allp = posts()
    ids = sorted(allp) if (not args or args == ["all"]) else [int(a) for a in args]
    DELIVER.mkdir(parents=True, exist_ok=True)
    for i in ids:
        print("post", i, allp[i]["slug"], flush=True)
        print(" ->", build(i, allp[i], stills_only=only), flush=True)
