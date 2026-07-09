# M7 — Online Experience

Een **next-level, interactieve service-catalogus** waarmee klanten zelf hun
dienstverlening samenstellen. Dark M7-huisstijl met geanimeerd sterren-/pixelveld,
lichte gradients, abstracte iconen en pill-CTA's met de M7-signatuur (circulaire
teal pijl).

De experience is een **multi-step flow**: een cinematisch introscherm met het
M7-logo, een primaire CTA en langzaam voorbij slidende dienst-/tool-labels (rij 1
naar rechts, rij 2 naar links) in een donkere gradient. Daarna een korte intake en
vervolgens één categorie per stap — met sticky stap-rail, voortgangsbalk en een
uitklapbaar overzicht ("Jouw samenstelling") onderin. Per categorie tonen we
herkenbare **brand-iconen** voor de ingezette tools (WordPress, Webflow, Figma,
Adobe, Shopify, WooCommerce, Stripe, Zapier, Make, Airtable, Memberstack, Wized,
Google Analytics/Tag Manager/Search Console, Meta/LinkedIn/TikTok/Reddit, iOS &
Android, Notion, HubSpot e.a.) plus de **Webflow Professional Partner**-badge.

Gebouwd met **Next.js (App Router) + TypeScript**. Geen database of externe
dependencies nodig — volledig self-contained en klaar om te hosten of te embedden.

## Wat zit erin

Een intake-flow (_waar sta je nu?_ + _wat wil je bereiken?_) die een genummerd,
aanbevolen pad door de catalogus uitzet, met conditionele cross-sell. Categorieën:

- **Branding** — nieuwe/rebranding/co-branding, volledig brandbook, logo-export,
  e-mailhandtekening, 3D mock-ups, illustraties
- **Print** — visitekaartjes, flyers, brochures, promo, uitnodigingen
- **Websites** — WordPress/Webflow builds, CMS met custom velden, content-model,
  styleframing, animaties/Lottie, AI-beeld, dynamische blokken & pop-ups, migratie
- **Webshops** — WooCommerce/Shopify, EU-VAT, custom checkout, PDF-facturen
- **Web-apps & portalen** — klant-/offerte-/loyaliteitsportalen, Stripe, automations
- **Apps** — UI/UX, kanban/sprintmanagement, testing, ontwikkeling
- **Organisch** — posts, reels, AI-renders (schets→beeld), AI-animaties, video, podcast
- **Paid Ads** — Meta/LinkedIn/Reddit/TikTok, account-inrichting, strategie
- **SEO / AEO** — content, optimalisatie, linkbuilding, JSON-LD, GEO/AI-answers
- **Tracking** — GA4/server-side, dashboards, cookie-consent & compliance
- **Funnels** — configuratoren, offerte-flows, opt-ins, e-mailreeksen, audience-sync
- **CRM & Integraties** — Odoo/HubSpot/Pipedrive/Teamleader/Notion, custom API's
- **Hosting** & **Support** — webhosting en webplans

Live totalen (indicatieve vanafprijzen: eenmalig + doorlopend), gegroepeerde
samenvatting en offerte-/kennismakingsaanvraag via e-mail.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Bouwen / deployen

```bash
npm run build && npm run start
```

Deploybaar op Vercel, Netlify of elke Node-host. Voor een **statische export**
(handig om te embedden op WordPress/Webflow of via een CDN te hosten): zet
`output: "export"` aan in `next.config.js` en gebruik `npm run build`.

## Embedden op je eigen site

De experience is bedoeld om als **iframe-widget** op je eigen site te staan
(Webflow, WordPress of elk ander platform). De app staat framing toe voor elk
domein via een `Content-Security-Policy: frame-ancestors *`-header
(zie `next.config.js`).

1. **Host de experience** ergens met een vaste URL — bijvoorbeeld op een
   subdomein als `https://experience.m7branding.com/` (Vercel: voeg dit domein
   toe onder Settings → Domains), of gebruik je Vercel-productie-URL.
2. **Plak dit blok** in een HTML/Embed-element op je site (Webflow: "Embed" ·
   WordPress: "Custom HTML"-blok) en vervang de URL in `src`:

   ```html
   <div style="position:relative;width:100%;height:100vh;min-height:640px;overflow:hidden;border-radius:16px;">
     <iframe
       src="https://experience.m7branding.com/"
       title="M7 — Stel je online experience samen"
       loading="lazy"
       allow="clipboard-write; fullscreen"
       referrerpolicy="no-referrer-when-downgrade"
       style="position:absolute;inset:0;width:100%;height:100%;border:0;"
     ></iframe>
   </div>
   ```

Een volledig voorbeeldbestand staat in [`embed-example.html`](./embed-example.html).
Wil je 'm liever zonder Node-host embedden? Zet dan `output: "export"` aan
(zie hierboven) en upload de `out/`-map naar je eigen server/CDN; verwijs de
iframe daar dan naartoe.

## Structuur

```
src/
  app/
    layout.tsx        # root layout (Poppins) + globals
    page.tsx          # rendert de experience
    globals.css       # globale basis
    experience.css    # M7-huisstijl + alle experience-styling
  components/experience/
    Configurator.tsx  # de multi-step flow: intro, intake, stappen, drawer, modal (client)
    Starfield.tsx     # geanimeerd sterren-/pixel-canvas
    CategoryIcon.tsx  # abstracte iconen per categorie
    Logo.tsx          # M7 wit wordmark (inline SVG)
    BrandIcon.tsx     # brand-/tool-iconen + Webflow Professional Partner-badge
  lib/
    catalog.ts        # catalogus-data, intake, prijzen, tools & aanbevelingslogica
public/
  m7-wordmark.svg     # M7 wit logo
  brand/              # M7 brandmark-varianten (teal/pink/cyan)
```

## Aanpassen

- **Diensten & prijzen**: `src/lib/catalog.ts` (alle categorieën, pakketten,
  opties, doelen en cross-sell-regels op één plek).
- **Huisstijl**: de kleur-tokens bovenin `src/app/experience.css` (`--exp-a1`
  teal, `--exp-gold`, `--exp-green`, enz.).
- **Contact**: het e-mailadres staat in `Configurator.tsx` (`INTRO_MAILTO`) en de
  offerte-submit.
