# M7 — Website & Online Experience

Eén repo, twee ervaringen:

| Domein | Route in deze app | Wat |
| --- | --- | --- |
| **m7branding.com** | `/` (NL) en `/en` (EN) | De nieuwe website: premium, interactief, cross-referenced content model |
| **letsgo.m7branding.com** | `/letsgo` | De interactieve configurator (service-catalogus met indicatieve prijzen) |

De middleware stuurt bezoekers van `letsgo.*` automatisch naar de configurator, dus beide domeinen
kunnen aan **hetzelfde Vercel-project** gekoppeld worden.

Gebouwd met **Next.js 14 (App Router) + TypeScript**, volledig statisch gegenereerd (± 260 pagina's),
met Lenis (smooth scroll), simple-icons (tool-iconen) en lottie-web (eigen Lottie-animaties).

---

## Snel starten

```bash
npm install
cp .env.example .env.local   # vul GA4-ID, Search Console, webhooks in
npm run dev                  # http://localhost:3000  ·  configurator: /letsgo
npm run build && npm start   # productie
```

---

## Content bewerken (alles staat in `src/content/`)

Het content model is **getypeerd en cross-referenced via slugs**. Verwijs je naar een slug die niet
bestaat (een tikfout in een dienst, toepassing, sector of tool), dan faalt de build. Zo lopen links nooit dood.

| Bestand | Wat staat erin |
| --- | --- |
| `registry.ts` | **De ruggengraat**: alle diensten (kapstok), toepassingen per dienst en sectoren |
| `services/<dienst>.ts` | Per peiler: titel, tagline, intro, highlights, **termen**, **tools**, werkwijze, **SEO-tekst**, **FAQ** + alle **toepassingen** van die dienst |
| `sectors.ts` | Sectoren met uitdagingen, gekoppelde diensten/toepassingen en FAQ |
| `cases.ts` | Projecten, gekoppeld aan diensten, toepassingen, sector, tools en review |
| `reviews.ts` | Reviews per dienst (concept-reviews hebben `draft: true`) |
| `tools.ts` | Alle tools/platformen met iconen (simple-icons) of monogram |
| `team.ts` | Teamleden + foto's |
| `site.ts` | Bedrijfsgegevens, socials, cijfers, klantlogo's, integraties |
| `legal.ts` | Privacybeleid, algemene voorwaarden, cookies |
| `src/lib/dict.ts` | Vaste UI-teksten (NL + EN) |

Alle teksten zijn `{ nl, en }`. NL is leidend, EN de vertaling.

### Afgeleide cross-references (automatisch)

Je koppelt iets maar op één plek; de rest volgt vanzelf (`src/lib/content.ts`):

- Een case met `services: ["websites-webshops"]` verschijnt in de projecten-masonry van die dienst,
  op de bijbehorende toepassingspagina's, in de sector en in het cases-filter.
- Reviews met `services: [...]` verschijnen op die dienstpagina's.
- Een sector met `services`/`applications` verschijnt als "Voor welke sectoren" op die pagina's.
- Toepassingen verschijnen in de mega-menu's, folders, sliders, de CTA-marquee, sitemap en llms.txt.
- Het aantal cases tussen haakjes in het menu (`Cases (13)`) telt automatisch.

### Een toepassing toevoegen

1. Voeg de slug toe onder de juiste dienst in `registry.ts`.
2. Schrijf de content in `services/<dienst>.ts` (TypeScript helpt je met alle velden).
3. Klaar: pagina, sitemap, menu's, sliders en JSON-LD worden automatisch gegenereerd.

### Eigen beelden, Lottie & video

- **Case-beelden**: zet ze in `public/media/cases/` en verwijs met `cover` / `gallery`.
  Zonder beeld genereert de site een cover in de case-kleur.
- **Klantlogo's**: `public/media/clients/` + `clients` in `site.ts` (zonder logo → woordmerk).
- **Eigen animatie per peiler of toepassing** i.p.v. de code-mockup:
  ```ts
  media: { type: "lottie", src: "/media/lottie/branding.json" }
  // of { type: "video", src: "/media/video/web.mp4", poster: "..." }
  // of { type: "image", src: "/media/....webp" }
  ```
  Lottie wordt pas geladen als hij in beeld komt en pauzeert buiten beeld.

### Inline dienst-labels

Noem je in een tekst een dienst of toepassing, zet hem dan tussen dubbele haken. Dan wordt het
een klikbaar label met het icoon en de kleur van de dienst:

```ts
"... dan laat je de [[seo-aeo-geo|vindbaarheid]] meteen meenemen."
"... met een [[webflow-website]] die je zelf beheert."   // zonder label: de naam van de toepassing
```

Werkt in alle lopende teksten (hoofdstukken, SEO-tekst, FAQ, cases, sectoren). Een slug die niet
bestaat wordt gewone tekst. In llms.txt en JSON-LD komt alleen het label terecht.

### Extra content op dienstpagina's (`chapters`)

Per dienst rustige content-secties die tussen de blokken van de pagina komen (na de toepassingen,
na de werkwijze, na de reviews, de rest voor de SEO-tekst). Schrijf ze in de nuchtere M7-toon:

```ts
chapters: [
  {
    kicker: { nl: "Words before pixels.", en: "Words before pixels." }, // korte Engelse quote
    h: { nl: "Wat moet je zelf aanleveren?", en: "What do you need to provide?" },
    body: { nl: "Alinea's met \n\n, lijstjes met '- ' en [[slug]]-labels.", en: "..." },
    quote: { nl: "Optionele pull-quote.", en: "Optional pull quote." },
  },
],
```

### Case-pagina's: het verhaal (`story`)

Een case bouw je op uit blokken, in elke volgorde en zo vaak als je wilt:

| Blok | Wat het doet |
| --- | --- |
| `intro` | groot statement over het project (woord voor woord reveal) |
| `text` | kop links, tekst rechts (met `[[slug]]`-labels en optionele quote) |
| `masonry` | schermvullende galerij, beelden in hun eigen verhouding |
| `media` | breed beeld of video dat bij het scrollen omhoog schuift en openvouwt, optioneel met quote |
| `split` | beeld naast tekst (`reverse` draait het om) |
| `quote` | grote quote van de klant, met naam, rol en foto |
| `timeline` | mijlpalen (met `date`) of een checklist van wat we opleverden |
| `results` | de `results`-cijfers groot in beeld |

Daarnaast optioneel:

- `hero: { image | video, poster, position }`: schermvullende hero (2rem ingesprongen, afgeronde
  hoeken, donkere overlay). Zonder `hero` gebruikt de pagina de `cover`.
- `reveal: { video | image }`: video die direct na de hero omhoog schuift en meegroeit.

Zonder `story` bouwt de pagina zelf een verhaal uit `challenge`, `approach`, `result`, de beelden,
de review en de toepassingen. Zie de case `teamtv` in `cases.ts` voor een compleet voorbeeld.

### Sectorpagina's

`image`, `imagePosition` en `quote` per sector: het brede beeld na de hero dat bij het scrollen
openvouwt, met de quote erop. Voor Zorg en Travel staan tijdelijke beelden, vervang ze door eigen werk.

### Scroll-animaties (zoals op /home-2)

De 3D-renders van `/home-2` (hero-telefoons en de mockup in de zwarte sectie) draaien hier als
**scroll-sequence**: losse WebP-frames die op een canvas met de scroll worden afgespeeld. Dat is
ca. 3× lichter dan de oorspronkelijke "movie-to-lottie"-JSON's en scherper op retina.

- Hero: speelt af terwijl je de hero uit scrollt, blijft iets achter (parallax) en kantelt met de muis.
- Peilerkaart / dienst-hero: speelt af terwijl de kaart door het beeld gaat.
- Frames laden progressief (eerst elke 8e, dan steeds fijner); mobiel en "data besparen" krijgen
  een lichtere set. Zwart wegvallen gaat via `mix-blend-mode: lighten`, dus render op zwart.

Een nieuwe render toevoegen (MP4/MOV of movie-to-lottie JSON, vereist `ffmpeg`):

```bash
node scripts/sequence.mjs ~/Downloads/branding-render.mp4 branding
# → public/media/sequences/branding/{lg,sm}/0000.webp … + manifest.json
```

En koppel hem aan een peiler of toepassing:

```ts
media: { type: "sequence", src: "/media/sequences/branding" }
```

Tip: ±3–5 seconden op 24–30 fps, 16:9, product gecentreerd op een zwarte achtergrond.

---

## Wat er in zit

### Pagina's (NL + EN, vertaalde URL's)

| NL | EN |
| --- | --- |
| `/` | `/en` |
| `/diensten`, `/diensten/[dienst]`, `/diensten/[dienst]/[toepassing]` | `/en/services/...` |
| `/toepassingen` (zoek- en filterbaar) | `/en/applications` |
| `/sectoren`, `/sectoren/[sector]` | `/en/sectors/...` |
| `/cases` (filter op dienst/sector), `/cases/[case]` | `/en/cases/...` |
| `/over-m7` · `/contact` | `/en/about` · `/en/contact` |
| `/privacybeleid` · `/algemene-voorwaarden` · `/cookies` | `/en/privacy-policy` · ... |

### Motion & interactie

- **Preloader** (1× per sessie): het M7-logo tekent zichzelf (*lined*) → vult zich (*emblem*) →
  de gradient-ring sluit (*badge*), met "Welcome to the world of brands and digital solutions."
  Daarna veegt het doek omhoog met een teal→groene rand. Pure CSS, dus direct vanaf de eerste paint.
- **Page transitions**: gelaagde "vegen" over elke interne link; de nieuwe route is al voorgeladen,
  dus het voelt alsof er geen laadtijd is. Inhoud "landt" zacht na de veeg.
- **Smooth scroll** (Lenis), split-text reveals, stagger-reveals, rustige lichtstreep-hover op knoppen,
  een subtiel sterretje als cursor dat bij links uitgroeit tot een lichtblauwe ring (met labels).
- **Levende achtergronden**: WebGL "aurora" (zijdezachte banen die langzaam ademen en op de muis
  reageren — o.a. de AI-kaart), ademende radial gradients met muis-spotlight, twinkelende sterren
  en het pixel-raster uit het design, ingetogen, met rustige golven en zacht oplichtend rond de muis.
- **Logo**: in de nav tekent het M7-logo bij hover zichzelf als lijntekening; in de footer speelt
  de reveal van de preloader elke keer dat je hem bereikt; in het menu staat een M7 van pixels en sterren.
- **Scroll-animaties van /home-2**: 3D-renders als frame-sequence die met de scroll meespeelt
  (hero + Websites & Webshops), zie "Scroll-animaties" hierboven.
- **10 unieke geanimeerde mockups** (één per peiler, puur code, schaalt via container queries):
  logo-constructie, website die zichzelf bouwt, facturen-app, workflow-nodes, SERP + AI-antwoord,
  social feed + ROAS, viewfinder + 3D + tijdlijn, openvouwende brochure, configurator, AI-chat + agent.
- **Folders** onder de hero (de kapstok): bij hover schuiven de toepassingen als papiertjes omhoog.
- **Full-screen menu**: gelaagd gordijn, grote links met hover-gradient, live previews per item
  (diensten, sectoren, cases met beeld, team, contact), mobiel als accordeon.
- Alles respecteert `prefers-reduced-motion` en pauzeert buiten beeld.

### SEO, AEO & GEO

- Statisch gegenereerd, canonical + **hreflang** (nl/en/x-default) op elke pagina.
- **JSON-LD**: Organization/ProfessionalService, WebSite, BreadcrumbList, Service (met offer catalog),
  **FAQPage** op elke dienst, toepassing en sector, CreativeWork per case, ItemList op overzichten.
- Uitgebreide **FAQ** (`<details>`: crawlbaar zonder JS) + **SEO-tekst** onderaan elke dienst.
- `sitemap.xml` (met alternates), `robots.txt` (AI-crawlers expliciet welkom),
  **`/llms.txt`** en **`/llms-full.txt`** (complete AI-vriendelijke index incl. alle FAQ's).
- Dynamische **Open Graph-afbeeldingen** in M7-stijl: `/og?title=...`.

### Integraties

- **Google Analytics 4** (zelfde property als de huidige site) of **GTM**, met **Consent Mode v2**
  en een eigen minimalistische cookiebanner. SPA page views worden per navigatie verstuurd.
  Ook de letsgo-configurator gebruikt dezelfde property.
- **Search Console**: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (of DNS-verificatie) + sitemap.
- **AnswerLink / answers.m7branding.com**: gekoppeld in menu, footer, FAQ-blokken ("Meer antwoorden"),
  bento-kaart, contactpagina, JSON-LD `sameAs` en llms.txt. Per dienst kun je een `answersPath`
  zetten voor een deeplink. Een eventueel AnswerLink embed-script laad je via `NEXT_PUBLIC_ANSWERLINK_SCRIPT`.
- **Formulieren** (contact + nieuwsbrief) posten naar `CONTACT_WEBHOOK_URL` / `NEWSLETTER_WEBHOOK_URL`
  (bv. Make → Odoo/HubSpot/Mailchimp). Zonder webhook tonen ze een mailto-fallback.

---

## Deployen (Vercel)

1. Importeer de repo in Vercel (framework: Next.js).
2. Zet de environment variables uit `.env.example`.
3. Koppel **m7branding.com** (+ `www`) én **letsgo.m7branding.com** aan hetzelfde project.
4. Search Console: dien `https://m7branding.com/sitemap.xml` in.

---

## Structuur

```
src/
  app/
    [lang]/            website (NL/EN): layout, home, diensten, toepassingen, sectoren, cases, over, contact, juridisch
    letsgo/            de configurator (eigen root layout)
    api/               contact- en nieuwsbrief-webhooks
    sitemap.ts · robots.ts · llms.txt · llms-full.txt · og/
  components/
    brand/             M7-logo's (lined / emblem / badge)
    chrome/            header, mega-menu, full-screen menu, footer, nieuwsbrief
    motion/            preloader, page transitions, Lenis, reveals, cursor, aurora, glowfield, sterren, pixelgrid, scroll-sequence
    mockups/           10 geanimeerde peiler-mockups + hero-telefoons + Lottie/video-player
    sections/          home-secties, page hero, filters, slider, formulieren
    ui/                knoppen, kaarten, FAQ, tools, breadcrumbs, marquee, iconen
    analytics/ seo/    GA4/GTM + consent, JSON-LD
    experience/        de letsgo-configurator
  content/             ← alle content (zie hierboven)
  lib/                 i18n, query-laag, paden, SEO-helpers, llms.txt
  styles/              tokens, base, motion, chrome, secties, mockups, pagina's
  middleware.ts        NL/EN-routing + letsgo-host
public/media/sequences/  scroll-animaties (frames + manifest), gemaakt met scripts/sequence.mjs
scripts/sequence.mjs     zet een render (video of movie-to-lottie JSON) om naar een scroll-sequence
```

## Nog aan te vullen

- GA4-ID, Search Console-verificatie, telefoonnummer, KvK en webhooks (`.env.example`).
- Socials in `site.ts` (Instagram is geverifieerd, controleer de rest).
- Teamnamen en -rollen in `team.ts`.
- Echte reviews in `reviews.ts` (concepten zijn gemarkeerd en verborgen in productie).
- Case-teksten met `concept: true` aanvullen met echte projectinfo, en beelden voor cases zonder cover.
- Juridische teksten in `legal.ts`.
