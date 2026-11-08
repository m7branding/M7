"""Review page for round 22: the 15 final-style reels and the 10 M7 stories, as 720p previews (the full 1080x1920 60 fps
files go to the private delivery repo under social/reels-v4/ and social/stories-v3/)."""
import os
import subprocess

S = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad"
SRC = f"{S}/r22/deliver"
DST = "/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/m7-round22"

REELS = [
    ("monvy", "Monvy"), ("repairlab", "Repairlab"), ("bernheze-makelaars-rebranding", "Bernheze Makelaars"),
    ("the-sandt", "The Sandt"), ("plenty-planet", "Plenty Planet"), ("designers-house", "DesignersHouse"), ("hela", "Hela"),
    ("impeco", "IMPECO"), ("fairlink", "Fairlink"), ("nexis-group", "Nexis Group"), ("silvr", "Silvr"),
    ("the-digital-clinic", "The Digital Clinic"), ("mindyourpass", "MindYourPass"), ("expociety-app", "Expociety"),
    ("boutique-hotels-gelderland", "Boutique Hotels Gelderland"),
]
STORIES = [
    ("01-welkom", "Welkom"), ("02-diensten", "Diensten"), ("03-team", "Team"), ("04-kantoor", "Kantoor"),
    ("05-werkproces", "Werkproces"), ("06-websites", "Websites"), ("07-branding", "Branding"), ("08-tools", "Tools"),
    ("09-seo", "SEO, AEO & GEO"), ("10-kennismaking", "Kennismaking"),
]


def preview(src, rel):
    out = f"{DST}/{rel}"
    if not os.path.exists(out):
        subprocess.run(["ffmpeg", "-nostdin", "-v", "error", "-y", "-i", src, "-vf", "scale=720:1280", "-c:v", "libx264", "-preset", "slow",
                        "-crf", "25", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", out], check=True)
    return rel


os.makedirs(f"{DST}/v", exist_ok=True)
reel_cards, story_cards, files = [], [], []
for slug, name in REELS:
    rel = preview(f"{SRC}/reels-v4/{slug}/{slug}-final.mp4", f"v/{slug}-final.mp4")
    files.append(rel)
    reel_cards.append(f'<article class="reel"><video src="{rel}" controls playsinline preload="metadata"></video><h3>{name}</h3></article>')
for key, name in STORIES:
    rel = preview(f"{SRC}/stories-v3/m7-story-{key}.mp4", f"v/m7-story-{key}.mp4")
    files.append(rel)
    story_cards.append(f'<article class="reel"><video src="{rel}" controls playsinline preload="metadata"></video><h3>{name}</h3></article>')

page = f'''<title>M7 Reels & Stories</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap">
<style>
/* One dark look on purpose (M7 brand). Grid of 9:16 previews, wrapping. */
:root {{ --bg:#030304; --surface:#101014; --line:rgba(255,255,255,.1); --text:#f6f6f8; --muted:#a7a7b0; --teal:#3affff; --font:"Montserrat",system-ui,-apple-system,"Segoe UI",sans-serif; color-scheme:dark }}
* {{ box-sizing:border-box }} html {{ background:var(--bg) }}
body {{ margin:0; background:var(--bg); color:var(--text); font:500 15px/1.55 var(--font); -webkit-font-smoothing:antialiased }}
.wrap {{ max-width:1400px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); padding-block:44px 64px }}
.k {{ display:flex; align-items:center; gap:12px; font-weight:700; font-size:12px; letter-spacing:.3em; text-transform:uppercase }} .k::before {{ content:""; width:40px; border-top:2px dashed var(--teal) }}
h1 {{ font-weight:800; font-size:clamp(34px,5.5vw,64px); letter-spacing:-.04em; line-height:1; margin:14px 0 12px; text-wrap:balance }}
h1 span {{ -webkit-background-clip:text; background-clip:text; color:transparent; background-image:linear-gradient(95deg,#3affff,#22ffb4 45%,#18ff59) }}
h2 {{ font-weight:800; font-size:clamp(24px,3vw,34px); letter-spacing:-.02em; margin:44px 0 16px }}
.lead {{ color:var(--muted); max-width:74ch; margin:0 0 8px }}
.grid {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 220px), 1fr)); gap:14px }}
.reel {{ background:var(--surface); border:1px solid var(--line); border-radius:18px; padding:10px; min-width:0 }}
video {{ width:100%; aspect-ratio:9/16; object-fit:cover; border-radius:10px; background:#000; display:block }}
.reel h3 {{ margin:10px 4px 2px; font-size:15px; font-weight:700 }}
footer {{ color:var(--muted); font-size:13px; margin-top:34px; max-width:80ch }}
video:focus-visible {{ outline:2px solid var(--teal); outline-offset:2px }}
</style>
<div class="wrap">
<div class="k">M7 social · ronde 22</div>
<h1>15 reels in de <span>final-stijl</span>, 10 stories.</h1>
<p class="lead">Elke reel: de rustige intro met het kleine M7-logo, close-ups met een camera die de cursor volgt, flows die doorlopen tot de volgende stap, en waar M7 de branding deed het echte brandbook, drukwerk en de kleuren. Per project een eigen mix van devices, camerahoeken en volgorde.</p>
<h2>Reels</h2>
<div class="grid">{"".join(reel_cards)}</div>
<h2>Stories voor M7</h2>
<p class="lead">Minimalistisch en clean, met alleen echte M7-teksten en echt werk.</p>
<div class="grid">{"".join(story_cards)}</div>
<footer>Previews in 720p. De echte bestanden (1080×1920, 60 fps) staan in de private repo m7-assets-inbox, branch social-pack, onder <code>social/reels-v4/</code> en <code>social/stories-v3/</code>.</footer>
</div>'''
open(f"{DST}/index.html", "w").write(page)
print(DST, len(files))
