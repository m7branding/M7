"""Review page for round 25: the social package for Instagram and LinkedIn (carousels you can swipe, single posts, premium
project reels, the captions per item and the posting calendar). Previews only; the full files go to the private delivery repo."""
import glob
import html
import json
import os
import subprocess
from pathlib import Path

S = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad"
D = f"{S}/r25/deliver"
TMP = "/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r25w-pack/carousels"
DST = "/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/m7-round25"

caps = {Path(p).stem: json.load(open(p)) for p in sorted(glob.glob(f"{D}/captions/*.json"))}
esc = lambda s: html.escape(s or "")


def jpg(src, rel, w=720, h=900):
    out = f"{DST}/{rel}"
    if not os.path.exists(out):
        subprocess.run(["ffmpeg", "-nostdin", "-v", "error", "-y", "-i", src, "-vf", f"scale={w}:{h}", "-q:v", "3", out], check=True)
    return rel


def mp4(src, rel):
    out = f"{DST}/{rel}"
    if not os.path.exists(out):
        subprocess.run(["ffmpeg", "-nostdin", "-v", "error", "-y", "-i", src, "-vf", "scale=720:1280", "-c:v", "libx264", "-preset", "slow",
                        "-crf", "25", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", out], check=True)
    return rel


def texts(c):
    if not c:
        return ""
    return (f'<details><summary>Teksten</summary><div class="tx"><h4>Instagram</h4><p>{esc(c["instagram"])}</p>'
            f'<h4>LinkedIn</h4><p>{esc(c["linkedin"])}</p></div></details>')


os.makedirs(f"{DST}/c", exist_ok=True)
os.makedirs(f"{DST}/v", exist_ok=True)
files = []

# carousels: new ones first, then the three approved round-24 ones
car_dirs = sorted(d for d in glob.glob(f"{D}/carousels/*") if not os.path.basename(d).startswith("post-")) + sorted(glob.glob(f"{TMP}/*"))
car_html = []
for d in car_dirs:
    cid = os.path.basename(d)
    c = caps.get(f"carousel-{cid}") or caps.get(cid)
    imgs = []
    slides = sorted(glob.glob(f"{d}/*.png"))
    for i, s in enumerate(slides, 1):
        rel = jpg(s, f"c/{os.path.basename(s)[:-4]}.jpg")
        files.append(rel)
        imgs.append(f'<img src="{rel}" alt="{esc(c["topic"] if c else cid)}, slide {i}" width="720" height="900" loading="lazy">')
    title = c["topic"] if c else cid
    car_html.append(f'<section class="block"><h3>{esc(title)}</h3><p class="meta">{len(slides)} slides · Instagram-carrousel en LinkedIn-pdf</p>'
                    f'<div class="swipe" tabindex="0" aria-label="{esc(title)}">{"".join(imgs)}</div>{texts(c)}</section>')

post_html = []
for d in sorted(glob.glob(f"{D}/carousels/post-*")):
    pid = os.path.basename(d)
    c = caps.get(pid) or caps.get(f"post-{pid}")
    for s in sorted(glob.glob(f"{d}/*.png")):
        rel = jpg(s, f"c/{os.path.basename(s)[:-4]}.jpg")
        files.append(rel)
        post_html.append(f'<figure class="card"><img src="{rel}" alt="{esc(c["topic"] if c else pid)}" width="720" height="900" loading="lazy">'
                         f'<figcaption>{esc(c["topic"] if c else pid)}</figcaption>{texts(c)}</figure>')

reel_html = []
for s in sorted(glob.glob(f"{D}/reels-premium/*.mp4")):
    rid = os.path.basename(s)[:-4]
    c = next((v for v in caps.values() if v["type"] == "reel" and any(rid in f for f in v["files"])), None)
    rel = mp4(s, f"v/{rid}.mp4")
    files.append(rel)
    reel_html.append(f'<figure class="card"><video src="{rel}" controls playsinline preload="metadata"></video>'
                     f'<figcaption>{esc(c["topic"] if c else rid)}</figcaption>{texts(c)}</figure>')

cal = json.load(open(f"{D}/plan/kalender.json")) if os.path.exists(f"{D}/plan/kalender.json") else []
cal_rows = "".join(f'<tr><td>{r["datum"]}</td><td>{r["tijd"]}</td><td>{r["platform"]}</td><td>{r["type"]}</td><td>{esc(r["onderwerp"])}</td></tr>' for r in cal)

page = f'''<title>M7 Social Pakket</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap">
<style>
/* One dark look on purpose (M7 brand). Sections stack; carousels scroll sideways with snap; cards wrap in a grid. */
:root {{ --bg:#030304; --surface:#101014; --line:rgba(255,255,255,.1); --text:#f6f6f8; --muted:#a7a7b0; --teal:#3affff; --font:"Montserrat",system-ui,-apple-system,"Segoe UI",sans-serif; color-scheme:dark }}
* {{ box-sizing:border-box }} html {{ background:var(--bg) }}
body {{ margin:0; background:var(--bg); color:var(--text); font:500 15px/1.55 var(--font); -webkit-font-smoothing:antialiased }}
.wrap {{ max-width:1400px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); padding-block:44px 64px }}
h1 {{ font-weight:800; font-size:clamp(32px,5vw,58px); letter-spacing:-.04em; line-height:1.02; margin:0 0 12px; text-wrap:balance }}
h1 span {{ -webkit-background-clip:text; background-clip:text; color:transparent; background-image:linear-gradient(95deg,#3affff,#22ffb4 45%,#18ff59) }}
h2 {{ font-weight:800; font-size:clamp(24px,3vw,34px); letter-spacing:-.02em; margin:56px 0 6px }}
h3 {{ font-weight:700; font-size:20px; margin:0 }}
h4 {{ margin:10px 0 4px; font-size:13px; color:var(--muted); font-weight:700 }}
.lead {{ color:var(--muted); max-width:76ch; margin:0 0 14px }}
.meta {{ color:var(--muted); font-size:13px; margin:2px 0 10px }}
.block {{ margin-top:30px }}
.swipe {{ display:flex; gap:12px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:10px }}
.swipe img {{ flex:none; width:min(76vw, 320px); height:auto; aspect-ratio:4/5; border-radius:12px; scroll-snap-align:start; border:1px solid var(--line); background:#000 }}
.grid {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 220px), 1fr)); gap:14px }}
.card {{ margin:0; background:var(--surface); border:1px solid var(--line); border-radius:16px; padding:10px; min-width:0 }}
.card img, .card video {{ width:100%; max-width:100%; height:auto; border-radius:10px; display:block; background:#000 }}
.card video {{ aspect-ratio:9/16; object-fit:cover }}
figcaption {{ margin:9px 4px 2px; font-size:14px; font-weight:700 }}
details {{ margin-top:8px; max-width:80ch }}
summary {{ cursor:pointer; color:var(--teal); font-weight:700; font-size:13px }}
.tx p {{ white-space:pre-line; margin:0; color:#d8d8de; font-size:14px }}
.tablewrap {{ overflow-x:auto; border:1px solid var(--line); border-radius:12px }}
table {{ border-collapse:collapse; width:100%; font-size:14px; font-variant-numeric:tabular-nums }}
th, td {{ text-align:left; padding:8px 12px; border-bottom:1px solid var(--line); white-space:nowrap }}
th {{ color:var(--muted); font-weight:700; font-size:12px; letter-spacing:.04em }}
footer {{ color:var(--muted); font-size:13px; margin-top:40px; max-width:80ch }}
.swipe:focus-visible, summary:focus-visible, video:focus-visible {{ outline:2px solid var(--teal); outline-offset:3px }}
</style>
<div class="wrap">
<h1>Social pakket voor <span>Instagram en LinkedIn</span>.</h1>
<p class="lead">Carrousels (op LinkedIn als pdf-documentpost), losse posts, premium projectreels, de teksten per post en een postingkalender. Alle teksten komen van de website.</p>
<h2>Carrousels</h2>
<p class="lead">Swipe opzij. Onder elke carrousel staan de teksten voor Instagram en LinkedIn.</p>
{"".join(car_html)}
<h2>Losse posts</h2>
<div class="grid">{"".join(post_html)}</div>
<h2>Premium projectreels</h2>
<div class="grid">{"".join(reel_html)}</div>
<h2>Postingkalender</h2>
<p class="lead">{len(cal)} posts. Elke week op Instagram een carrousel, een reel en om de week een losse post; op LinkedIn dezelfde carrousel als pdf en een reel. Tijden zijn een voorstel; Metricool kan ze aanpassen naar de beste tijden.</p>
<div class="tablewrap"><table><thead><tr><th>Datum</th><th>Tijd</th><th>Platform</th><th>Type</th><th>Onderwerp</th></tr></thead><tbody>{cal_rows}</tbody></table></div>
<footer>Previews. De echte bestanden staan in de private repo m7-assets-inbox, branch social-pack, onder <code>social/carousels/</code>, <code>social/linkedin/</code> (pdf), <code>social/reels-premium/</code>, <code>social/captions/</code> en <code>social/plan/</code> (kalender als csv).</footer>
</div>'''
open(f"{DST}/index.html", "w").write(page)
print(DST, len(files))
