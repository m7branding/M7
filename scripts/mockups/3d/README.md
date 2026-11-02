# Realistische 3D-mockups (Blender / Cycles)

Fotorealistische stills en hero-video's van echte schermen op procedureel gemodelleerde Apple-toestellen
(MacBook Pro 14", iPhone 17 Pro, iPad Pro 13" + Pencil, Studio Display). Eerste toepassing: MisterGlass
(`public/media/cases/misterglass/r-*.webp`, `r-hero-*.mp4`). Geen modellen van derden, geen Apple-logo's;
omgevingen en materialen zijn CC0 van Poly Haven (zie `ASSETS.md`).

## Opzet (eenmalig)

```bash
cd scripts/mockups/3d
python3.13 -m venv venv && venv/bin/pip install bpy==5.2.3 numpy pillow OpenEXR
venv/bin/python scenes/fetch_assets.py          # HDRI's, texturen, planten -> assets/
```

## Per project

1. **Captures** (Playwright, apparaat-exacte viewports): `node cap/screens.js cap/screens` en
   `node cap/elements.js cap/el` (UI-fragmenten voor de zwevende kaarten). De URL's en selectors staan
   bovenin de scripts en zijn per project aan te passen.
2. **Texturen**: `venv/bin/python scenes/screens.py` en `venv/bin/python scenes/cards.py` -> `tex/`.
3. **Preview** (laag, ~20 s): `venv/bin/python scenes/s01_desk.py` -> `out/r-01-desk_pv.png`.
4. **Final**: `scenes/run_finals.sh s01_desk s02_macbook …` (3,5–11 min per still op 4 CPU-cores),
   video's met `scenes/run_videos.sh` (~30 min per video).
5. **Naar de site**: `venv/bin/python scenes/finalize.py --copy` en daarna
   `node scripts/mockups/write-manifest.mjs` (vanaf de repo-root). `r-*.webp` komt vooraan in de galerij,
   `r-hero*.mp4` wordt de case-hero (keuze per slug in `scripts/mockups/config.json` -> `heroVideo`).

Projectspecifiek zijn: de captures, `screens.py`/`cards.py` (welke uitsneden texturen en kaarten worden),
de textuurnamen in de scènebestanden en de merkkleuren in s04, s05, s09 en s10. `finalize.py` schrijft
nu naar `misterglass`; pas `DST` en `NAMES` aan voor een ander project.

## Sjablonen voor alle projecten (`templates/`)

Elke scène wordt **één keer** gerenderd; daarna worden de schermen van elk project er in numpy in gezet
(seconden per still, ~1–2 min per video). Belichting, reflecties, schaduwen en scherptediepte blijven echt.

- `templates/lib/tmpl.py` (Blender-kant): schermmateriaal = wit, alleen voor camerastralen, in light group
  `screen`, met shader-AOV's `scr_uv` (u, v, scherm-id) en `scr_cov`; wereldlicht in light group `env`.
  Uitvoer per frame: `_rgb` (Combined), `_scr` (wit scherm W), `_env`, `_uv`, `_cov` en bij transparante
  sjablonen `_sc` (Shadow Catcher). `masks.py` maakt de displaymaskers (afgeronde hoeken, Dynamic Island, notch).
- `templates/lib/tcomp.py` (compositor): `prepare()` ontwikkelt het sjabloon (AgX buiten het scherm) en slaat
  per schermpixel de displaycoördinaten + UV-afgeleiden op; `finish()` zet de inhoud erin: mip-mapped,
  anisotroop (OpenCV remap) en kleurexact (sRGB, met 25% van de glasreflectie), en legt transparante sjablonen
  op een neutrale of diepblauwe achtergrond (`templates/lib/backdrops.py`, zie hieronder) met de echte schaduw.
- `templates/lib/proj.py`: per project de schermbeelden (captures + iOS-statusbalk/Safari-pil,
  macOS-menubalk/werkbalk, iPadOS-balk) en welke capture op welk toestel komt (`ROLE_SOURCES`).
- Sjablonen: `t1_gravity` (zwevende, kantelende iPhones + iPad), `t2_closeup`, `t3_plinth` (MacBook op
  betonnen sokkel), `t4_float_ipad`, `t5_ipads_dark`; animaties `v_a_gravity` en `v_b_plinth` (unieke frames,
  ping-pong met cosinus-easing; de site scrolt per uitvoerframe).

```bash
cd scripts/mockups/3d/templates/scenes
../../venv/bin/python ../lib/masks.py                    # eenmalig
./run_tpl.sh t1_gravity t2_closeup t3_plinth t4_float_ipad t5_ipads_dark v_a_gravity v_b_plinth   # ~2,5 h CPU
../../venv/bin/python batch.py prep -j4                  # sjablonen ontwikkelen + cachen
R12_PROJECTS=/pad/naar/projects.json ../../venv/bin/python batch.py stills all -j4
R12_PROJECTS=/pad/naar/projects.json ../../venv/bin/python batch.py video all -j4
../../venv/bin/python batch.py fit all -j4             # WebP-kwaliteit per project zodat alles <= 1,6 MB blijft
../../venv/bin/python batch.py sheets all && ../../venv/bin/python batch.py install all
node ../../../write-manifest.mjs                         # vanaf de repo-root: node scripts/mockups/write-manifest.mjs
```

`projects.json`: `[{slug, client, color, captures, url?}]`; `captures` bevat `hero-desktop.png` (2880×1800),
`full-desktop.png` (1440 breed), `hero-mobile.png` (1170×2532), `full-mobile.png` (780 breed),
`hero-tablet.png` (2360×1640). Een voorbeeld zonder renderen: `scenes/t1_gravity.py` met `R12_PV=1`
(standaard) rendert een kleine preview in een paar seconden. De venv heeft daarnaast
`opencv-python-headless` nodig (`venv/bin/pip install opencv-python-headless`).
Rendertijd sjablonen (4 CPU-cores): stills 4–8 min elk, animatie A 80 frames × ~40 s, B 80 × ~35 s
(samen ~2,5 h). Compositen: ~25 s per project voor alle stills, ~60 s per video.
Per project: `r-01-gravity`, `r-02-closeup`, `r-03-plinth`, `r-04-floating-ipad`, `r-05-ipads` (.webp),
`r-cover.webp` (2400×1500) en `r-hero.mp4` + `r-hero.webp` (animatie A of B, afhankelijk van de merkkleur).

### Achtergronden (`templates/lib/backdrops.py`, ronde 12b)

T1, T2 en animatie A staan niet meer op een merkkleur maar op een klein, vast setje van 14 achtergronden:
licht (white #F2F2F0, light-grey #E3E4E6, mid-grey #CDCFD2, white-leaves, grey-plaster, white-linen, white-dune),
donker (graphite #2A2B2F, anthracite #1D1E21, near-black #0D0E10, anthracite-plaster, graphite-dune) en
diepblauw (navy-glow #070C1A, navy-nebula #060B18).

- Elke achtergrond wordt via de opgeslagen camera (`meta.json` → `camera` / `cameras`, schrijf die zonder te renderen met
  `R12_PV=0 R12_META_ONLY=1 ../../venv/bin/python t1_gravity.py`) op de echte vloer (z = 0) geprojecteerd: lichtpoel,
  texturen en bladschaduw staan in perspectief en krijgen echte parallax in de video.
- Bladschaduw: `scenes/gobo_leaves.py` rendert de gobo (CC0-planten) eenmalig naar `bgtex/leaves.png`.
  Pleister en linnen: Poly Haven `white_plaster_02`, `rough_linen` (CC0, alleen de diffuse kaart, hoogdoorlaat, ±2–3,5 %).
  Duin-banen en nevel: procedureel.
- Donker en blauw: lichtpoel onder de toestellen plus een brede, zwakke halo uit het toestel-silhouet (scheiding van
  space black zonder 'outer glow'). Statische fijne korrel in beeldruimte tegen banding (WebP en H.264).
- In animatie A drijven poel en nevel langzaam mee (naadloze loop).
- Toewijzing (`scenes/assign_bg.py` → `bg-assign.json`): de 40 % donkerste sites (luminantie van hero-desktop + hero-mobile)
  krijgen licht, de rest donker (35 %) of blauw (25 %); varianten per quotum langs de volgorde van het /cases-grid, zodat
  buren verschillen (volgorde: `work/grid_order.txt`, één slug per regel zoals op /cases: uitgelicht, met cover, zonder cover; zonder dat bestand de volgorde van projects.json). `batch.py` → `BG_OVERRIDE`: op T2 wordt near-black anthracite (de rand van de close-up-iPhone verdwijnt
  anders). Achtergronden per sjabloon worden gecachet in `tpl/<sjabloon>/bg/`.

## Ronde 13: sjabloonbibliotheek, unieke covers, hero-video's en showreels (`templates/`)

33 scènes (`templates/scenes13/d01_*.py` … `d20_*.py` toestellen, `b01_*.py` … `b13_*.py` branding) met 2–3 camera's
elk = 81 composities (+ de 5 uit ronde 12). Elke camera is een eigen sjabloon `<scène>__<camera>`
(`templates/lib/scenekit.py` → `run()`: één keer bouwen, per camera renderen; `R12_PV=1` geeft een snelle preview,
`R12_CAMS=a,c` beperkt de camera's). Nieuw in de compositor:

- **Herkleurbare oppervlakken** (`tmpl.tint_material`, AOV `tnt`): vloer/wand/sokkel neutraal gerenderd (albedo 0,8 met
  ontkleurde textuur), per project ingekleurd vóór AgX: licht (#ECEBE7 …), donker (#2A2B2F …), navy (#0B1426) of de
  verdiepte merkkleur (`designs.tint_dark`; felgeel/limoen → antraciet i.p.v. olijf).
- **Printvlakken** (`tmpl.print_material`, AOV `prn_uv` = u, v, id): visitekaartjes, briefpapier, envelop, posters, vlaggen,
  A-bord, brochure, sticker, blinddruk (reliëf) en een verhoogd 3D-logo op de wand. De ontwerpen (`templates/lib/designs.py`)
  gebruiken alleen het echte logo, de merkkleur en de URL; de fotoposter gebruikt een foto van de eigen site van de klant.
  Kleuren komen ná de view transform op het papier (kleurecht, zoals een foto van een print); het wandlogo gaat door AgX
  zodat het naadloos in de ingekleurde wand overloopt. `templates/lib/orient.py` kiest per printvlak en camera de
  leesrichting (4 rotaties × spiegeling): logo's en tekst staan altijd rechtop (binnen ±25°) en nooit gespiegeld.
- **Logo's** (`templates/lib/logos.py`): de BRAND-kits (logo-dark als vorm, het origineel in kleur waar dat niet
  wit-op-donker is), anders `public/media/cases/<slug>/logo*.svg|png`. SVG's worden met Chromium gerasterd
  (`templates/scenes13/logo_raster.js`).
- **Regels**: print-/briefpapierscènes alleen bij `branding-rebranding` of `grafisch-ontwerp-print`; logo-op-wand bij elk
  project met een echt logo; social posts alleen bij `content-marketing-online-ads`; schermen tonen alleen echte captures
  (geen lege schermen: een toestel zonder inhoud ligt omgekeerd of is dicht).

```bash
cd scripts/mockups/3d/templates/scenes13
./run_q.sh d01_desk_studio d02_mac_top … b13_social_phone   # finals, ~1,5–4 min per camera op 4 cores
cd ../scenes
../../venv/bin/python batch13.py plan                        # r13/plan.json: 18 stills per project + unieke covers
../../venv/bin/python batch13.py stills all -j2              # composieten + WebP binnen het budget (fit); ~5 GB RAM per worker
../../venv/bin/python batch13.py sheet all && ../../venv/bin/python batch13.py install all
../../venv/bin/python video13.py plan && ../../venv/bin/python video13.py hero all     # ~2 min per project, ~3 GB RAM
../../venv/bin/python reel13.py plan && ../../venv/bin/python reel13.py render && ../../venv/bin/python reel13.py install
node scripts/mockups/write-manifest.mjs                      # vanaf de repo-root
```

- **Stills** (`batch13.py`): per project tot 18 composities (toestel/branding afgewisseld, achtergrondfamilie per still
  gevarieerd), `r-01-…` t/m `r-18-…` (2000×1333) en `r-cover.webp` (1800×1125). De cover is per project een
  compositie die geen ander project als cover heeft (eerst de cases die hun r-cover in het /cases-grid tonen, in
  grid-volgorde). Budget: stills + cover ≤ 2,9 MB per project (`R13_STILLS_MB`). `PRESERVE`: MisterGlass houdt zijn
  eigen set uit ronde 11 en krijgt alleen brandingstills (r-11 …) erbij.
- **Hero-video** (`video13.py`): ~10 s, 3 shots (sterk toestelbeeld · branding of merkkleur · ander toestel), elk een
  trage 2.5D-camerabeweging over de hoge-resolutiecompositie (push, pull, drift, rise, sink), de site scrolt op de
  schermen, crossfades en een naadloze loop. Desktop 1600×900 (`r-hero.mp4` + `r-hero.webp`, onderwerp midden/rechts,
  rustig linksonder voor de titel), mobiel staand 720×1280 (`r-hero-m.mp4` + `r-hero-m.webp`, rond het hoofdtoestel).
  Geen twee projecten met dezelfde combinatie. Alleen het scherm wordt per frame opnieuw gesampled
  (`tcomp.StaticFrame`, ~0,3 s per frame).
- **Showreels** (`reel13.py`): 6 × ~30 s (`highlights`, `web`, `branding`, `apps`, `content`, `brand-colour`), korte
  shots op een ritme (1,2–2,8 s), harde cuts met af en toe een korte dissolve, loopt naadloos; geen tekst.
  1920×1080 (≤ 7,5 MB) + 1280×720 (≤ 3 MB) + WebP-poster in `public/media/showreels/`, lijst in
  `src/content/generated/showreels.ts`.
- `write-manifest.mjs` schrijft daarnaast `heroVideo.srcMobile` / `posterMobile` (`<naam>-m.mp4`) en `logo`
  (logo-white.svg|png, anders logo.svg|png).

Praktisch (ronde 13):
- 81 finals ≈ 1,5–4 min per camera op 4 cores (samen ~4 h); compositen daarna: stills ~1 min per project, hero ~2 min,
  showreel ~4–7 min. Een ontwikkeld sjabloon kost in het geheugen ~1–1,5 GB: `batch13.prepared()` houdt er maar 2 vast;
  meer workers dan het geheugen toelaat → de OOM-killer haalt een worker weg en `Pool` blijft hangen.
- `stills` en `hero` weigeren een sjabloon zonder finale render (geen previews van 480×320 op de site).
- Lage camera's staan op een sweep (`scenekit.cyc`, 20 m breed) of een vloer/wand van 20 m, zodat er nooit een
  horizon of ongekleurde wereld in beeld komt; het wandlogo (b06) ligt 0,3 mm voor de wand (geen zichtbare plaatrand).
- Showreels: slugs `highlights` (opent World of M7), `web`, `branding` (alleen printscènes, max. 2 camera's per scène),
  `apps`, `content`, `brand-colour`; per reel één camera per scène; gemengde reels openen op een sterk toestelbeeld
  (dat is ook de poster). Tussenbestand lossless x264 (geen rauwe dump van ~4,5 GB).
- Logo-only cases zonder site krijgen geen hero-video (hun eigen film/foto blijft de hero).
- Hero-video's en showreels beginnen (frame 0 = poster) midden in het eerste shot, nooit op de naad van de loop of in een
  dissolve; de loop blijft naadloos. Bestaande video's zijn zo geroteerd met `templates/scenes13/rotate_hero.sh` / `rotate_reels.py`
  (her-encode binnen hetzelfde budget, PSNR ~46 dB t.o.v. het origineel).
- Staande showreels `<slug>-p.mp4` + `-p.webp` (720×1280, ≤ 2,5 MB, `reel13.py portrait`): zelfde shots en timing; per shot
  de staande camera van dezelfde scène (`<scène>__p`, 1440×2560, voor b02, b05, b06, b08, d01, d02, d03, d09, d11, d19) of
  anders een uitsnede rond het hoofdonderwerp. In `generated/showreels.ts` als `srcPortrait` / `posterPortrait`.
  De `__p`-camera's doen niet mee in stills, covers of hero's (`batch13.library(portrait=False)`).
- Cases zonder live site maar met eigen schermbeelden in hun galerij (`projects.json`: `bare: true` = app-scherm zonder
  browserbalk, `role_src` = welk beeld op welk scherm, `roles` / `exclude_t` / `max_stills`): debiteurnet (portal),
  infrai (app-schermen), perfect-people (site-screenshot uit de eigen cover). Een sjabloon doet alleen mee als alle
  schermen echte inhoud krijgen (`proj.roles_ok`).

## Ronde 14: geen verzonnen print, geverifieerde paletten, botsingscontrole, "volgende case"-beelden

- **Retired** (niet meer gebruikt in stills, covers, hero's, reels): b01 kaartjes, b02 briefpapier, b03/b04 posters,
  b07 A-bord, b08 vlaggen, b09 brochure, b11 kaartjes + telefoon, b12 brief + MacBook, b13 social. Echte print, brand sheets
  en social posts komen later uit Figma. `templates/scenes/retire14.py` haalde de bestaande bestanden van de site
  (naar `r14/retired/`).
- **Paletten** (`r14/palette/palettes.json`, PALETTE-agent): achtergronden van toestelscènes zijn lichtgrijs, antraciet,
  bijna-zwart of diep navy; een verdiepte merkkleur alleen als de case een geverifieerde `fullBleed` heeft
  (`batch13.bleed()`), nooit `uiColor`/accent. `templates/scenes/plan14.py` maakt het plan.
- **Logoscènes in echte kleuren**: b05 blinddruk (kleurloos, losse kaart blanco), b06 verhoogd logo op de wand, b10
  sticker. `logos.variants()`: de versie voor lichte vlakken (origineel in kleur; logo's met witte letters niet) en voor
  donkere vlakken (zwart/antraciet/navy inkt wordt wit, merkkleuren blijven: RepairLab-stip, JURGH-balk; wit-op-donker
  originelen ongewijzigd; JURGH uit M7's eigen tegel `logos-designed/jurgh-tile.webp`). Ondergrond: `neutrals.light`/
  `neutrals.dark` van het palet of de geverifieerde fullBleed (op een licht merkvlak de versie voor licht).
  In b06 is ook de wand rond het bord een printvlak (vlakke kleur), zodat bord en wand één kleurpad delen (kleurecht, geen naad).
- **Botsingscontrole**: `R14_COLLIDE=1 R12_PV=1 python <scène>.py` bouwt de scène en test met BVH-bomen in wereldruimte
  of losse objecten elkaar doorsnijden (`r14/collide/<scène>.json`); contact met vloer/bureau/standaard is normaal.
  Gevonden en opgelost: d06 (twee iPhones door elkaar), b05 (kaart door het papier).
- **"Volgende case"** (`r-next.webp`, 2400×1100): 13 camera's `<scène>__n` die `scenekit.autoframe` plaatst (onderwerp
  midden-rechts, ~62 % van de hoogte, linker 40 % rustig), 64 samples; `templates/scenes/next14.py` kiest per case een
  compositie (niet die van de cover, niet gelijk aan de buur), donkere neutrale of navy achtergrond, links iets donkerder.
  `write-manifest.mjs` schrijft `next`.
- Staande camera's `__p` (portret-reels) en `__n` doen niet mee in stills/covers/hero's (`batch13.library(portrait=, nxt=)`).
- `designs.print_url()` blijft de centrale guard tegen staging-/hostingdomeinen.

### Ronde 14, fase 3: zwevende UI, interacties, schone schermen (`R14_PHASE3=1`)

Bron: CAPTURE-agent (`r14/cap/<slug>/`: `hero-*.png`, `screen-<n>-<device>.png`, `snippets/` + `snippets.json`,
`flows/` + `flows.json`, `qa.json`; `r14/cap/AUDIT.md` zegt per case welke oude capture kapot was).

- **Schone schermen** (`proj.r14_captures`): voor de bestanden die AUDIT.md per case als "Replace" noemt komen de nieuwe
  hero's in de plaats, en `full-desktop` / `full-mobile` worden de nieuwe viewport-schermen onder elkaar (plus
  `full-tablet` voor iPads). Toestellen op een offset beginnen dan precies bovenaan een scherm (`_breaks`), en twee
  toestellen in één compositie tonen twee verschillende schermen; panelen (d11) beginnen ook bovenaan een scherm.
- **Zwevende UI in 3D** (`templates/scenes13/f01-f04_*`, `_float.py`): toestel + 2-4 kaarten die uit het scherm komen;
  het voorvlak van elke kaart is een plat scherm (`snip_<k>`), de rand een tintvlak (`cedge_<k>`) in de paginakleur van
  het fragment. `lib/snips.py` kiest echte fragmenten van de site met een passende verhouding (geen hele viewports,
  liefst open menu's, formulieren, prijzen) en zet ze passend op de kaart; geen passend fragment = scène niet gebruikt.
- **Zwevende UI plat** (`lib/float2d.py`, still-optie `ui2d`): 2-3 fragmenten als scherpe kaarten over een bestaande
  toestelrender, half over de rand van het toestel (nooit meer dan ~40 % over het scherm), met twee zachte schaduwen
  (zweefhoogte) en optioneel een lichte perspectiefdraai. Alleen op composities met ruimte rond het scherm
  (`r14/bbox.json`).
- **Interacties** (`lib/flows.py`, `video13.flow_shot`): een opname van de site (mega-menu, dropdown, menu op mobiel,
  configurator, zoeken, filters, formulier) speelt als scherminhoud van één toestel; venster rond de eerste/laatste
  beweging, hooguit 1,5× versneld. In de hero is het eerste shot (ook de poster) de interactie; in de reels
  highlights/web/apps zijn 2-3 shots een interactie (3,2 s).
- **Interactiefilms** (`templates/scenes/flows14.py`): per case 1-2 films `r-flow-<n>.mp4` + poster `.webp` +
  `r-flows.json` (korte Nederlandse titel = alt-tekst). 1920×1080, 30 fps, geen audio, statische camera zodat de film
  loopt (naadloze opnames zoals ze zijn, de andere lossen op in het eerste beeld); scherm ~0,6-1,0× native, nooit een
  vlakke close-up. `write-manifest.mjs` neemt ze op als `films`.
- **Elke opname is met de hand gekeurd** (begin- en middenbeeld, boven- en onderrand; `flows.REJECT`): tekst die door de
  rand van de viewport of onder de sticky nav loopt, een lege menustand of een pop-up = nooit gebruikt (ook niet in
  hero's en reels). `flows.TRIM` verbergt één afgesneden regel onder de adresbalk (misterglass), `flows.ALLOW` neemt
  opnames mee waarvan de bewegingsdetectie het typen miste (huurfix).
- **Navy alleen voor blauwe merken** (`batch13.is_blue`): uiColor of geverifieerde fullBleed met tint 195-250° en
  verzadiging > 0,25 (niet speedbar, teamtv, electriffy: `NOT_BLUE`). Alle andere cases: donker en licht neutraal, plus
  het verdiepte merkveld bij een geverifieerde fullBleed. Geldt voor stills, logoscènes, zwevende UI, r-next, films en hero's.
- **Live sites van voorheen logo-cases** (`proj.R14_SYNTH`: teamtv, taylor, architectenbureau-koppens) zijn projecten met
  CAPTURE's opnames; zoveel offset-slots als er schone schermen zijn. teamtv: ~11 toestelstills + de 7 logostills.
- **Niet te hercapturen** (`proj.R14_NOROLES`): debiteurnet, infrai, zuyver-jeeps (één scherm) en perfect-people (wazige
  hero met pop-up) gebruiken geen toestelslots die een kapotte of dubbele schermafbeelding zouden tonen.
- Covers blijven staan zolang ze geldig zijn (`plan14`): nieuwe cases veroorzaken geen cascade van nieuwe covers.
- Hero's renderen via een bijna-lossless tussenbestand (mkv) in plaats van een raw dump (schijfruimte).

## Ronde 15

- **Zwakke logoscènes weg**: de blinddruk (b05, wit op wit) en de laptopsticker (b10, logo op een low-poly cirkel) zijn
  overal verwijderd en gepensioneerd (`plan14.RETIRED`). Van de wandlogo's (b06) blijven alleen die met een vectorlogo
  (of een raster vanaf 1000 px) en duidelijk contrast met de wand (`r15/r3d/logo_eval.py`; mediaan ≥ 3:1 en ≥ 70% van het
  logo op 3:1), plus een controle met het oog (te klein, te dun, dezelfde toon als de wand). Hero's en reels gebruiken geen
  logoscènes meer (`R15_NOLOGO`).
- **Brand sheets** (`templates/scenes/brandboards15.py`): borden van 2400×1350 uitsluitend uit echte bronnen: logo.svg /
  logo-white.svg van de case, het geverifieerde palet (palettes.json, swatches met hex en RGB) en het lettertype alleen als
  de computed CSS van de live site het noemt (een "Aa"-specimen alleen als het OFL-fontbestand er is). Logo op wit, op de
  merkkleur, op zwart en op een licht neutraal; een logo dat voor een donker veld getekend is komt nooit op wit. Cases met
  alleen een rasterlogo onder 1000 px worden overgeslagen. In de galerij als `r-62-brand-sheet-logos` en
  `r-63-brand-sheet-colours`.
- **3D-presentaties** van die borden (`brand15.py`, templates `scenes13/g01_board_wall.py` en `g02_booklet.py`): het bord
  aan een wand boven een dressoir, en een open A5-boekje waarvan de spread de borden toont (`r-60-brand-wall`,
  `r-61-brand-booklet`); neutrale achtergronden.
- **Reels uit bestaand materiaal** (`reels15.py`): één moment per project (r-hero, met hetzelfde moment uit r-hero-m in de
  staande versie; r-flow met een vaste uitsnede op het toestel; M7's eigen s-/v-films; campagnebeelden heel op een rustige
  achtergrond). Harde cuts, geen tekst, het einde lost op in beeld 1. `masterpieces` (de top-25 uit
  `src/content/masterpieces.ts`), `apps` (alleen app-, portal- en toolbeelden) en `content` (alleen campagne- en
  socialwerk). `reel13.py install` neemt ze op in `showreels.ts`.
- **Interactiefilms uit CAPTURE r15** (`flows15.py`): 2×-opnames op 30 fps met virtuele tijd; elke opname loopt al naadloos,
  de film speelt hem één keer. Floating-UI-stills uit de r15-close-ups en -snippets (`ui15.py`, `snips.load` leest
  `r15/cap/<slug>/stills.json` als `r15/<bestand>`).

## Ronde 16

- **Interactiefilms voor cases met een live site maar nog zonder film** (`flows16.py`, zelfde recorder en filmlook als
  ronde 15): opnames uit `r16/films/cap/<slug>/` (2×, 30 fps, virtuele tijd), de gekeurde keuze per case in
  `r16/films/pick.json` (overzichtsfilm eerst, titel begint met "Home" zodat de hero hem kiest). Opnames die niet in hun
  beginstand eindigen krijgen een overvloeier van 0,5 s naar beeld 1.
- `snips.load` leest naast `r15/cap` ook `r16/films/cap/<slug>/stills.json` (sleutels `r16/<bestand>`); `ui15.py` voegt
  daaruit zwevende-UI-stills toe zoals in ronde 15. Kaarten zijn hooguit 1100 css-px breed, dus brede sectie-close-ups
  worden eerst tot één leesbaar stuk bijgesneden.

### Ronde 16, R3D16: premium presentaties van M7's eigen materiaal (`r-64`, `r-65`, extra `r-flow`)

- **Brandbook met echte pagina's** (`templates/scenes13/g03_brandbook.py`, compositor `templates/scenes/book16.py`): een
  liggend, gebonden brandbook waarvan de pagina's de verhouding van de brandbook-slides hebben (`G03_ASPECT`: 16:9 →
  `g03_book169`, 1512×982 → `g03_book154`, A-formaat → `g03_book141`). Pagina's duiken in de rug (gebogen bovenkant
  over een paginablok), een gesloten exemplaar toont de cover, de rug en de rand van de omslag krijgen de kleur van de
  linkerrand van de cover; zacht raamlicht met bladschaduw (gobo) op een neutrale, herkleurbare vloer. Prints: `l1`/`r1`
  (de spread), `cover`, `edge#n`. Per case de keuze van de pagina's in `r16/r3d/book_picks.json` (`cover`, `l1`, `r1`,
  `l2`, `r2`, `bg`); alleen echte `s-fa-brandbook-NN`-pagina's, een kleine verhoudingsafwijking wordt met de eigen
  randkleur van de pagina opgevuld (nooit uitgerekt of in de inhoud bijgesneden). Still: camera `a`, 3000×2000 →
  `r-64-brandbook-open.webp` (2000 px).
- **Bladerfilm**: camera `v` (`G03_ANIM=1`) rendert alleen de omslag van één pagina (56 beelden, 30 fps): de pagina is
  tweezijdig (`print2_material`: voorkant `r1`, achterkant `l2` gespiegeld via Backfacing; onder de pagina ligt `r2`), de voorrand gaat bij het
  optillen voor en blijft bij het neerkomen achter, en raakt de pagina's eronder nooit. `book16.film_frames()` composiet
  elk beeld één keer voor alle cases, `film_encode()`: 1,2 s stil, de omslag, 1,8 s stil, een trage 2.5D-push van 3 % die
  weer terugkomt (de overvloeier van 0,5 s naar beeld 1 gebeurt op één schaal: naadloze loop). Uitvoer als **`r-flow-<n>.mp4`** + poster (titel "Brandbook: door de echte
  pagina's bladeren"), omdat `write-manifest.mjs` alleen `r-hero*`/`r-flow-*`-video's opneemt.
- **Ontwerpen op toestellen** (`templates/scenes/dev16.py`, plan `r16/r3d/dev_plan.json`): de `s-fa-design`/web-
  ontwerpen op de Studio Display (`d19_studio_front__c`) en een MacBook-close-up (`d13_macro_mac__a`), zonder
  browserbalk (geen URL geclaimd). Hoge pagina's: de sectie van één schermhoogte vanaf `y0` (standaard de hero);
  bredere: opgevuld met de eigen paginakleur (`pady`/`padx`) of gelijk aan beide kanten bijgesneden. Namen en
  portretfoto's in UI's worden vervaagd (`blur`: rechthoeken in bronpixels). `r-65-device-<n>.webp`, 2000 px.
- **Opnames als toestelfilm** (`templates/scenes/film16.py`, plan `r16/r3d/film_plan.json`): M7's eigen `s-fa-*.mp4`
  schermopnames op één toestel (flows15-look: 1920×1080, 30 fps, statische camera, 0,5 s overvloeier naar beeld 1).
  Een bestaande `r-flow` wordt nooit vervangen: de film krijgt het eerstvolgende vrije nummer en de titel gaat erbij in
  `r-flows.json`. Namen in de opname worden per regio/tijdvak vervaagd.

```bash
cd scripts/mockups/3d/templates/scenes13       # (scratch: r13/scenes)
G03_ASPECT=1.7778 G03_TAG=169 R12_PV=0 R12_CAMS=a ../../r11/venv/bin/python g03_brandbook.py         # ~9 min
G03_ANIM=1 G03_ASPECT=1.7778 G03_TAG=169 R12_PV=0 R12_SPP=24 ../../r11/venv/bin/python g03_brandbook.py
cd ../scenes                                    # (scratch: r12/scenes)
../../venv/bin/python book16.py still all       # r-64-brandbook-open.webp per case
../../venv/bin/python dev16.py render all       # r-65-device-<n>.webp
../../venv/bin/python film16.py render all      # r-flow-<n>.mp4 + .webp (opnames)
../../venv/bin/python book16.py film all 169    # bladerfilm r-flow-<n>.mp4 per case (vrije nummer)
```

Praktisch (R3D16): een still-camera kost ~9-13 min (3000×2000, 96 samples), de bladerfilm ~75-80 s per beeld
(2112×1188, 24 samples; samen ~70 min; kleur-passes als DWAA, ~7 MB per beeld). Alleen `g03_book169__v` is gerenderd:
de bladerfilms voor de 1512×982-boeken (expociety-branding, jmtuning, monvy-branding) en het A-formaat (foodbars)
vragen eerst `G03_ANIM=1 G03_TAG=154|141`. Cases met maar 4 pagina's (alpen-experience-hotel,
architectenbureau-koppens-branding) krijgen geen film (`nofilm`). Eén Blender tegelijk: wacht tot er geen
`venv/bin/python` meer draait en start onder `flock r17/blender.lock`.

