# M7 social pakket

**Welcome to our world.** Dit pakket is in de stijl van de nieuwe website:
- zwart, met ademende pixels en een zachte aurora in de kleur van elk project;
- glazen kaarten en gradient-woorden;
- de M7-badge met de cyaan-groene ring als afsluiter.

De teksten zijn nuchter en Brabants: kort, met een touch of magic en korte Engelse woorden ertussendoor.

## Wat zit erin

| Map | Wat | Formaat |
|---|---|---|
| `reels/01-project-clean/` | Per project een cleane reel: footage eerst, de titel kort in beeld, eindigend met de M7-outro (logo tekent zich, ring sluit, "Welcome to our world.") | 1080×1920, 30 fps, MP4 met audio |
| `reels/02-project-dynamic/` | De masterpieces als dynamische reels: een hook, cuts op de beat, punchlines tussen de shots, outro | idem |
| `reels/03-dienst-dynamic/` | Per dienst: Branding, Websites, Apps, Hosting, Marketing, AI | idem |
| `reels/04-calm/` | Rustig en clean, puur beeld: screens, brandbooks, interfaces, merken aan de muur, studio, details | idem |
| `reels/05-m7/` | M7 zelf: manifest, nieuwe website live, uit Nistelrode, hosting, AI, logo's, from pixels to stars, top 10, zo werken wij, brandbooks | idem |
| `reels/covers/` | Coverbeeld per reel, voor een strak grid | 1080×1920 JPG |
| `stories/` | 50 stories: cases, diensten, cijfers, reviews, manifest, poll, quiz, vraag, kantoor | 1080×1920 JPG |
| `stories/geanimeerd/` | 10 geanimeerde versies (manifest en cijfers) | MP4, 6 s |
| `carousels/projects/` | Per project een swipe van 7 slides: cover, de vraag, 3× beeld, wat we deden, outro | 1080×1350 JPG |
| `carousels/themes/` | 10 thema-swipes: welcome, de zes diensten, M7 in cijfers, top 10, over M7 | 1080×1350 JPG |
| `linkedin/projects/` | Per project een LinkedIn-post (`post.txt`) en de swipe als PDF voor een document-post | PDF + tekst |
| `linkedin/themes/` | 10 thema-posts met PDF | PDF + tekst |
| `captions/` | Instagram-captions per project, reel en thema, plus `alle-captions.csv` voor je planningstool | TXT/CSV |
| `posting-plan.csv` / `.json` / `posting-plan.md` | Het plan, week voor week | |
| `tone-of-voice.md` | Hoe we klinken en de spelregels | |

## Muziek en geluid
Alle audio is eigen werk: gesynthetiseerd, zonder samples, dus rechtenvrij.
- Cleane reels hebben een zachte pulse met pads en bells.
- Dynamische reels hebben een four-on-the-floor op 124 BPM.
- Calm-reels hebben alleen pads en bells.
- Op elke cut zit een whoosh, en op het moment dat de ring sluit klinkt de M7-stinger: riser, boom, bell-akkoord en shimmer.
- Alles is genormaliseerd op -14 LUFS, de Instagram-standaard.

Wil je liever een trending sound? Zet het eigen geluid in Instagram op 0% en kies muziek uit de bibliotheek.

## Posten
- Volg `posting-plan.md`. De opbouw:
  1. Week 1 is de launch: "Welcome to our world" en de nieuwe website.
  2. Weken 2–7 hebben elk een dienst (Branding, Websites, Apps, Hosting, Marketing, AI).
  3. Weken 8–12 gaan over logo's en brandbooks, de masterpieces, achter de schermen en "from pixels to stars".
  4. Daarna een evergreen-rotatie tot elk project geweest is.
- **Tijden:**
  - Instagram: rond 12:00 of 19:30.
  - LinkedIn: dinsdag en donderdag rond 8:00.
  - Stories: 's ochtends.
- **Story-stickers:**
  - Case-stories: link-sticker naar de case.
  - Poll: vier opties (Nieuw merk / Nieuwe site / App / Slimmer met AI).
  - Quiz: Branding / Website / App, met Branding als goed antwoord. Het is drukwerk uit het merk van SUBLIME.
  - Vraag: vragen-sticker.
- **Taggen:** tag de klant als die op Instagram of LinkedIn zit.

## Even checken voor je post
- **Concept-cases.** Teksten over nieuwe projecten uit de FigmaAssets-map zijn op de website nog "concepttekst". Lees die captions even na voor je ze plaatst.
- **Feiten.** Alle feiten komen uit de cases op de site; er is niets verzonnen. Cijfers die je in captions ziet (bijvoorbeeld bij Kippenkar of SUBLIME) staan zo in de case.
- **Labels.** Een paar projecten met alleen video- of 3D-werk hebben het label Film, Video, Motion of 3D. Er was geen vast label voor.
- **Samdesk.** Het logo van de prospect is overal vervaagd.

## Opnieuw maken of aanpassen
De studio staat in de website-repo: `scripts/social/` (zie de README daar). Teksten aanpassen kan in `r18/copy/*.json` of in `texts.py`; daarna render je opnieuw.
