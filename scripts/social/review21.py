"""Review page for the round-21 pilot: five signature reels, each with its own direction, playable (720p previews;
the full 1080x1920 files are in the private delivery repo) with a short note on how each one is directed."""
import os
import subprocess

S = "/tmp/claude-0/-home-user-M7/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad"
SRC = f"{S}/r21/out"
DST = "/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/m7-signature"
REELS = [
    ("buitenstate/buitenstate-top", "Buitenstate · top reel", "Cinematisch, 60 fps", [
        "Intro: de eerste shot volledig geblurd, de M7-lijntekening in het wit tekent zich erover, dan scherpstellen",
        "Zoekers voor mijn woning: hover over de provincies, Utrecht kiezen, de teller loopt op (live opname)",
        "De camera volgt de cursor met motion blur, dicht op het scherm (4K-render, 1080×1920 in 60 fps)",
        "Objectpagina: titel, prijs en de makelaarskaart met 'Plan een bezichtiging', de foto's als zwevende kaarten",
        "De kaart van het object en hover states op de spotlight-kaarten van de homepage"]),
    ("steddion-tools/steddion-top", "Steddion · top reel", "Features voorop, 60 fps", [
        "Zelfde witte, geblurde intro",
        "Intake in macro: pandtype kiezen met hover states, de camera volgt de cursor",
        "Nieuwe energiebehoefte, profielen en de 3D-pandweergave terwijl er wordt geklikt",
        "Stacked view met de configurator-snippets, dan oplossingen en de samenvatting van dichtbij",
        "Kleurenwaaier en de EMS-vergelijker als afsluiter"]),
    ("buitenstate/buitenstate-signature-v2", "Buitenstate · v2", "Dichterbij, schoner", [
        "Nieuwe close-up camera: laptop-scherm met de navigatie vult het beeld, de laptop loopt er uit",
        "Stacked view: zoeknetwerk, spotlight, blog en de knop vallen één voor één op een stapel",
        "Close-up van twee leunende iPads, zoeken op een zwevende iPad, mobiel menu op drie telefoons",
        "Studio Display van dichtbij met de homepage",
        "Schone knoppen (geen witte randjes), vaste stapelvolgorde, motion blur op de snelle momenten"]),
    ("steddion-tools/steddion-signature-v2", "Steddion · v2", "Dichterbij, schoner", [
        "Macro van de intake terwijl die wordt ingevuld, nieuwe hoek",
        "Stacked view van de configurator: grafiek, zon-PV, pandtype, batterij en stap 1",
        "Close-up van de oplossingen-stap op het bureau, de samenvatting dicht op een laptop",
        "De kleurenwaaier zonder doorsnijdingen, de hoofdkleur bovenop",
        "Zwevende MacBook met brand-kaarten in 3D, dichterbij"]),
    ("monvy/monvy-signature", "Monvy", "Interactie voorop", [
        "Megamenu met echte cursor op een Studio Display, nieuwe 3/4-hoek, push-in met een kanteling die uitloopt",
        "Echte UI-kaarten (dashboard, pricing, CTA) stromen in een cascade uit het scherm",
        "Platform-design op een bureau-laptop van bovenaf, dan de kleurenwaaier onder het logo",
        "Het echte Monvy-brandbook, mobiel menu op een leunende telefoon",
        "Overgang: focus (scherpstellen)"]),
    ("steddion-tools/steddion-signature", "Steddion", "De configurator", [
        "Macro close-up van de intake terwijl die wordt ingevuld, dan uitzoomen",
        "Configurator-kaarten (pandtype, verbruiksgrafiek, 3D-pand) in een baan, de wereld draait mee",
        "Oplossingen-stap op een bureau-scène met tracking-shot",
        "Logo en kleuren, dan de EMS-vergelijker op een zwevende MacBook met 3D brand-kaarten",
        "Overgang: zoom-through"]),
    ("repairlab/repairlab-signature", "Repairlab", "De reparatieflow", [
        "Afspraak maken op een zwevende telefoon met logo- en kleurkaarten in 3D",
        "Merk- en devicekiezer met cursor op een laptop van onderaf",
        "Kaarten vallen als een stapel neer: merkkiezer, device-tegel, kalender, prijsregel",
        "M7-brand sheets met het echte logo, modellen en prijzen in macro",
        "Overgang: swipe omhoog"]),
    ("bernheze-makelaars-rebranding/bernheze-signature", "Bernheze Makelaars", "Merk voorop", [
        "Het echte brandbook, pan over de spread",
        "Logo en kleuren als rij, dan het afdelingsmenu op een iPad met toetsenbord",
        "Afdelingstegels en menu tillen los van het scherm",
        "De homepage op een zwevende Studio Display met het palet in 3D",
        "Overgang: iris"]),
    ("buitenstate/buitenstate-signature", "Buitenstate", "Landelijk wonen, zoeken", [
        "Twee leunende iPads met spotlight en zoeknetwerk",
        "Zoeken in het aanbod op een zwevende iPad, met echte UI-kaarten in 3D",
        "Spotlight, zoeknetwerk, blog en CTA als cascade",
        "Mobiel menu op drie telefoons, navigatie op een laptop van bovenaf",
        "Overgang: diagonale wipe. Geen brand-shot: het merk Buitenstate is niet van M7"]),
]
os.makedirs(f"{DST}/v", exist_ok=True)
cards, files = [], []
for path, client, angle, notes in REELS:
    src = f"{SRC}/{path}.mp4"
    rel = f"v/{os.path.basename(path)}.mp4"
    subprocess.run(["ffmpeg", "-nostdin", "-v", "error", "-y", "-i", src, "-vf", "scale=720:1280", "-c:v", "libx264", "-preset", "slow", "-crf", "24",
                    "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", f"{DST}/{rel}"], check=True)
    files.append(rel)
    li = "".join(f"<li>{n}</li>" for n in notes)
    cards.append(f'<article class="reel"><video src="{rel}" controls playsinline preload="metadata"></video>'
                 f'<div class="meta"><h2>{client}</h2><p class="angle">{angle}</p><ul>{li}</ul></div></article>')

page = f'''<title>M7 Signature Reels</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap">
<style>
/* Layout: five reels side by side (wrapping), each with its direction notes underneath. One dark look on purpose (M7). */
:root {{ --bg:#030304; --surface:#101014; --line:rgba(255,255,255,.1); --text:#f6f6f8; --muted:#a7a7b0; --teal:#3affff; --font:"Montserrat",system-ui,-apple-system,"Segoe UI",sans-serif; color-scheme:dark }}
* {{ box-sizing:border-box }} html {{ background:var(--bg) }}
body {{ margin:0; background:var(--bg); color:var(--text); font:500 15px/1.55 var(--font); -webkit-font-smoothing:antialiased }}
.wrap {{ max-width:1400px; margin:0 auto; padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); padding-block:44px 64px }}
.k {{ display:flex; align-items:center; gap:12px; font-weight:700; font-size:12px; letter-spacing:.3em; text-transform:uppercase }} .k::before {{ content:""; width:40px; border-top:2px dashed var(--teal) }}
h1 {{ font-weight:800; font-size:clamp(34px,5.5vw,64px); letter-spacing:-.04em; line-height:1; margin:14px 0 12px; text-wrap:balance }}
h1 span {{ -webkit-background-clip:text; background-clip:text; color:transparent; background-image:linear-gradient(95deg,#3affff,#22ffb4 45%,#18ff59) }}
.lead {{ color:var(--muted); max-width:74ch; margin:0 0 28px }}
.grid {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 250px), 1fr)); gap:16px }}
.reel {{ background:var(--surface); border:1px solid var(--line); border-radius:20px; padding:12px; min-width:0; display:grid; gap:12px; align-content:start }}
video {{ width:100%; aspect-ratio:9/16; object-fit:cover; border-radius:12px; background:#000; display:block }}
.meta h2 {{ margin:0; font-size:19px; font-weight:800; letter-spacing:-.01em }}
.angle {{ margin:2px 0 8px; color:var(--teal); font-weight:700; font-size:12px; letter-spacing:.14em; text-transform:uppercase }}
ul {{ margin:0; padding-left:18px; color:var(--muted); font-size:13.5px; display:grid; gap:4px }}
footer {{ color:var(--muted); font-size:13px; margin-top:30px; max-width:80ch }}
video:focus-visible {{ outline:2px solid var(--teal); outline-offset:2px }}
</style>
<div class="wrap">
<div class="k">M7 social · pilot ronde 21</div>
<h1>Elk project <span>z'n eigen reel.</span></h1>
<p class="lead"><b>Nieuw bovenaan: de top reels van Buitenstate en Steddion</b>: cinematischer, 60 fps, een camera die de cursor volgt met motion blur, echte hover states en features, en een witte intro over een geblurde achtergrond. Daarna Buitenstate v2 en Steddion v2, met jouw eerdere feedback verwerkt: kaarten en kleuren met een vaste stapelvolgorde (niets snijdt meer door elkaar), knoppen zonder witte randjes, motion blur op de snelle momenten, rustiger invliegen, en nieuwe close-up camera's zodat de schermen groot en duidelijk in beeld staan. Daaronder de eerste vijf pilots.</p>
<p class="lead">Vijf projecten, vijf regies. Elk met eigen camerahoeken (23 nieuwe staande hoeken in de 3D-scènes), eigen camerabewegingen, echte interacties op de schermen (cursor, menu's, configurator, afspraakflow), echte UI-snippets en brand assets die zweven en stapelen in 3D, een eigen overgang, tempo en muziek. De intro, de glazen labels en de outro blijven hetzelfde.</p>
<div class="grid">{"".join(cards)}</div>
<footer>Dit zijn previews in 720p. De echte bestanden (1080×1920, scherp, niets opgeschaald) staan in de private repo onder <code>social/reels-v3-pilot/</code>. Alles is echt werk: echte schermen en opnames, echte ontwerpen, echte brandbooks en geverifieerde kleuren.</footer>
</div>'''
open(f"{DST}/index.html", "w").write(page)
print(DST, files)
