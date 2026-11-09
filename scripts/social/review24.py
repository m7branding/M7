"""Review page for round 24: story posts v2, the two story series and the three swipe carousels (720p previews; the full
files go to the private delivery repo under social/story-posts-v2/, social/story-series/ and social/carousels/)."""
import glob
import os
import subprocess

S = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad"
SRC = f"{S}/r24/deliver"
DST = "/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/m7-round24"

POSTS = [("01-productconfigurator", "Productconfigurator"), ("02-check-tools", "Check-tools & quickscans"),
         ("03-boekingswidget", "Boekings- & afsprakenwidget"), ("04-brandbook", "Brandbook & merkrichtlijnen"), ("05-geo", "GEO")]
SERIES = [
    ("Zo werkt een productconfigurator", "Zes stories achter elkaar, met de Energy Property Configurator van Steddion.",
     ["a1-configurator-intro", "a2-configurator-stap-1", "a3-configurator-stap-2", "a4-configurator-stap-3", "a5-configurator-stap-4", "a6-configurator-cta"]),
    ("Een afspraak maken in drie stappen", "Vijf stories achter elkaar, met de boekingsflow van Repairlab.",
     ["b1-afspraak-intro", "b2-afspraak-stap-1", "b3-afspraak-stap-2", "b4-afspraak-stap-3", "b5-afspraak-cta"]),
]
CAROUSELS = [("geo", "Gevonden worden in AI-antwoorden", "Een ontwikkeling in de markt: GEO."),
             ("toegankelijkheid", "European Accessibility Act", "Een ontwikkeling in de markt: sinds 28 juni 2025."),
             ("check-tools", "Eerst waarde geven, dan pas vragen", "Een toepassing uitgelegd, met de subsidiecheck van Plenty Planet.")]


def video(src, rel):
    out = f"{DST}/{rel}"
    if not os.path.exists(out):
        subprocess.run(["ffmpeg", "-nostdin", "-v", "error", "-y", "-i", src, "-vf", "scale=720:1280", "-c:v", "libx264", "-preset", "slow",
                        "-crf", "25", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", out], check=True)
    return rel


def image(src, rel):
    out = f"{DST}/{rel}"
    if not os.path.exists(out):
        subprocess.run(["ffmpeg", "-nostdin", "-v", "error", "-y", "-i", src, "-vf", "scale=720:900", "-q:v", "3", out], check=True)
    return rel


os.makedirs(f"{DST}/v", exist_ok=True)
os.makedirs(f"{DST}/c", exist_ok=True)
files = []
vcard = lambda rel, cap: f'<figure class="clip"><video src="{rel}" controls playsinline preload="metadata"></video><figcaption>{cap}</figcaption></figure>'

posts = []
for key, name in POSTS:
    rel = video(f"{SRC}/story-posts-v2/m7-{key}.mp4", f"v/m7-{key}.mp4")
    files.append(rel)
    posts.append(vcard(rel, name))

series_html = []
for title, lead, keys in SERIES:
    cards = []
    for i, key in enumerate(keys, 1):
        rel = video(f"{SRC}/story-series/m7-{key}.mp4", f"v/m7-{key}.mp4")
        files.append(rel)
        cards.append(vcard(rel, f"{i} van {len(keys)}"))
    series_html.append(f'<section class="block"><h3>{title}</h3><p class="lead">{lead}</p><div class="row">{"".join(cards)}</div></section>')

car_html = []
for key, title, lead in CAROUSELS:
    slides = sorted(glob.glob(f"{SRC}/carousels/{key}/*.png"))
    imgs = []
    for i, s in enumerate(slides, 1):
        rel = image(s, f"c/{os.path.basename(s)[:-4]}.jpg")
        files.append(rel)
        imgs.append(f'<img src="{rel}" alt="{title}, slide {i} van {len(slides)}" width="720" height="900" loading="lazy">')
    car_html.append(f'<section class="block"><h3>{title}</h3><p class="lead">{lead} {len(slides)} slides, swipe opzij.</p>'
                    f'<div class="swipe" tabindex="0" aria-label="{title}">{"".join(imgs)}</div></section>')

page = f'''<title>M7 Social Posts</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap">
<style>
/* One dark look on purpose (M7 brand). Sections stack; story rows wrap, carousels scroll sideways with snap. */
:root {{ --bg:#030304; --surface:#101014; --line:rgba(255,255,255,.1); --text:#f6f6f8; --muted:#a7a7b0; --teal:#3affff; --font:"Montserrat",system-ui,-apple-system,"Segoe UI",sans-serif; color-scheme:dark }}
* {{ box-sizing:border-box }} html {{ background:var(--bg) }}
body {{ margin:0; background:var(--bg); color:var(--text); font:500 15px/1.55 var(--font); -webkit-font-smoothing:antialiased }}
.wrap {{ max-width:1400px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); padding-block:44px 64px }}
h1 {{ font-weight:800; font-size:clamp(32px,5vw,58px); letter-spacing:-.04em; line-height:1.02; margin:0 0 12px; text-wrap:balance }}
h1 span {{ -webkit-background-clip:text; background-clip:text; color:transparent; background-image:linear-gradient(95deg,#3affff,#22ffb4 45%,#18ff59) }}
h2 {{ font-weight:800; font-size:clamp(24px,3vw,34px); letter-spacing:-.02em; margin:52px 0 6px }}
h3 {{ font-weight:700; font-size:20px; margin:0 0 2px }}
.lead {{ color:var(--muted); max-width:74ch; margin:0 0 14px }}
.block {{ margin-top:26px }}
.grid, .row {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 200px), 1fr)); gap:14px }}
.clip {{ margin:0; background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:10px; min-width:0 }}
video {{ width:100%; max-width:100%; aspect-ratio:9/16; object-fit:cover; border-radius:10px; background:#000; display:block }}
figcaption {{ margin:9px 4px 1px; font-size:14px; font-weight:700 }}
.swipe {{ display:flex; gap:12px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:10px; border-radius:14px }}
.swipe img {{ flex:none; width:min(78vw, 360px); height:auto; aspect-ratio:4/5; border-radius:12px; scroll-snap-align:start; border:1px solid var(--line); background:#000 }}
footer {{ color:var(--muted); font-size:13px; margin-top:40px; max-width:80ch }}
video:focus-visible, .swipe:focus-visible {{ outline:2px solid var(--teal); outline-offset:3px }}
</style>
<div class="wrap">
<h1>Story posts, series en <span>carousels</span>.</h1>
<p class="lead">Ronde 24. Het M7-logo met de gradient-ring, geen labels boven de beelden, de mockups lopen onder en/of rechts uit beeld, en een heel lichte glow op de achtergrond. Alle teksten komen van de website.</p>
<h2>Story posts</h2>
<p class="lead">Eén toepassing per post, met een echt project.</p>
<div class="grid">{"".join(posts)}</div>
<h2>Story series</h2>
<p class="lead">Stapsgewijs, om achter elkaar te posten.</p>
{"".join(series_html)}
<h2>Carousels</h2>
<p class="lead">Voor de feed, 1080×1350.</p>
{"".join(car_html)}
<footer>Previews. De echte bestanden (stories 1080×1920, 60 fps; carousels 1080×1350 png) staan in de private repo m7-assets-inbox, branch social-pack, onder <code>social/story-posts-v2/</code>, <code>social/story-series/</code> en <code>social/carousels/</code>.</footer>
</div>'''
open(f"{DST}/index.html", "w").write(page)
print(DST, len(files))
