/* ============================================================
   Nieuwe cases (ronde 10, deel B): van Hela tot en met Speedbar.
   Teksten op basis van de scope die M7 aanleverde, aangevuld met
   wat publiek zichtbaar is op de live website van de klant.
   Geen jaartallen (onbekend), geen cijfers, geen quotes.
   Beelden (cover, galerij, screens) komen uit de mockup-pipeline
   via src/content/generated/case-media.ts.
   ============================================================ */

import type { Case } from "./types";

export const newCasesB: Case[] = [
  {
    slug: "hela",
    client: "Hela",
    title: {
      nl: "Hela: saus die je online al proeft",
      en: "Hela: sauce you can almost taste online",
    },
    summary: {
      nl: "Website en webshop voor sauzenmerk Hela, met productshots, geanimeerde packshots en 3D-renders die de flessen laten glimmen.",
      en: "Website and web shop for sauce brand Hela, with product shots, animated packshots and 3D renders that make the bottles shine.",
    },
    sector: "food-retail",
    services: ["websites-webshops", "foto-video-3d-animatie"],
    applications: ["wordpress-website", "webshop", "meertalige-website", "productfotografie", "3d-visualisatie", "motion-design"],
    tools: ["wordpress", "woocommerce", "elementor"],
    color: "#DA020F",
    challenge: {
      nl: "Hela is de smaakmaker met sauzen, ketchups en dressings, voor thuis en voor de foodprofessional. Het assortiment moest online net zo smakelijk ogen als op tafel, en bestellen moest makkelijk zijn.",
      en: "Hela is the flavour maker with sauces, ketchups and dressings, for the home kitchen and for food professionals. The range had to look just as tasty online as it does on the table, and ordering had to be easy.",
    },
    approach: {
      nl: "We bouwden een website met webshop in WordPress en WooCommerce, met recepten en een aparte ingang voor foodprofessionals. Voor het assortiment maakten we productshots, geanimeerde packshots en 3D-renders, zodat elke fles er strak en herkenbaar bij staat.",
      en: "We built a website with a web shop in WordPress and WooCommerce, with recipes and a separate entrance for food professionals. For the range we made product shots, animated packshots and 3D renders, so every bottle looks crisp and recognisable.",
    },
    result: {
      nl: "Een webshop in het Nederlands, Engels en Frans waar je recepten ontdekt en je favoriete saus zo bestelt, met productbeelden die passen bij een merk dat draait om lekker eten.",
      en: "A web shop in Dutch, English and French where you discover recipes and order your favourite sauce in no time, with product visuals that suit a brand built around good food.",
    },
    url: "https://hela.nl",
  },
  {
    slug: "pine-street-school",
    client: "Pine Street School & Battery Park Montessori",
    title: {
      nl: "Van Nistelrode naar Lower Manhattan: twee schoolwebsites",
      en: "From Nistelrode to Lower Manhattan: two school websites",
    },
    summary: {
      nl: "Branding en websites voor Pine Street School en Battery Park Montessori in New York, met een multifunctionele navigatie waarin ouders snel vinden wat ze zoeken. Voor Pine Street School: een contentrijke site met een schaalbare structuur voor SEO en AEO, en koppelingen met HubSpot en Calendly.",
      en: "Branding and websites for Pine Street School and Battery Park Montessori in New York, with multifunctional navigation that helps parents find what they need, fast. For Pine Street School: a content-rich site with a scalable structure for SEO and AEO, and HubSpot and Calendly integrations.",
    },
    sector: "educatie-scholen",
    services: ["branding-rebranding", "websites-webshops", "seo-aeo-geo", "automation-funnels", "configurators-lead-tools-widgets"],
    applications: ["huisstijl", "webflow-website", "ux-ui-webdesign", "contentstructuur", "seo", "aeo", "crm-implementatie", "boekingswidget"],
    tools: ["webflow", "hubspot", "calendly"],
    color: "#0A3C20",
    challenge: {
      nl: "Pine Street School is een meertalige IB World School in Lower Manhattan, van de allerkleinsten tot en met grade 8. Battery Park Montessori, aan de Hudson, is een drietalige Montessorischool voor kinderen van 1 tot 5 jaar. Twee scholen met veel informatie voor ouders, over het onderwijs, toelating, lesgeld en het schoolleven. Die moest makkelijk te vinden zijn.",
      en: "Pine Street School is a multilingual IB World School in Lower Manhattan, from the very youngest up to grade 8. Battery Park Montessori, on the Hudson, is a trilingual Montessori school for children aged 1 to 5. Two schools with a lot of information for parents, about the education, admissions, tuition and school life. It all had to be easy to find.",
    },
    approach: {
      nl: "Het werk is onderdeel van een bredere samenwerking, waarin we het digitale landschap van een grotere scholengroep opnieuw vormgeven. We werkten de branding van beide scholen uit en bouwden de websites in Webflow, op een gedeelde basis. De navigatie doet meer dan een gewoon menu: een interactief megamenu met zoeken en snelle links brengt je in een paar klikken bij toelating, rondleidingen of het lesprogramma. De contentrijke site van Pine Street School heeft daarnaast dynamische subnavigatie, instelbare zijbalken, CTA's en modulaire contentblokken, voor veel informatie over de vroege jaren, elementary en middle school, het lesprogramma, toelating, het schoolleven en de schoolgemeenschap. Een schaalbare contentstructuur helpt zoekmachines en AI-platforms de programma's, leeftijdsgroepen en toelatingsinformatie te begrijpen. Koppelingen met HubSpot en Calendly ondersteunen vragen van ouders, CRM-workflows en het inplannen van afspraken.",
      en: "The work is part of a wider collaboration in which we are redesigning the digital landscape of a larger school group. We worked out the branding for both schools and built the websites in Webflow, on a shared foundation. The navigation does more than an ordinary menu: an interactive mega menu with search and quick links gets you to admissions, tours or the curriculum in a few clicks. The content-rich Pine Street School site also has dynamic sub-navigation, configurable sidebars, CTAs and modular content blocks, for a wealth of information about the early years, elementary and middle school, academics, admissions, student life and the school community. A scalable content structure helps search engines and AI platforms understand the programmes, age groups and admissions information. HubSpot and Calendly integrations support enquiries from parents, CRM workflows and appointment scheduling.",
    },
    result: {
      nl: "Twee rustige, overzichtelijke schoolwebsites uit dezelfde familie, waarop ouders snel vinden wat ze zoeken en makkelijk een vraag stellen of een afspraak plannen.",
      en: "Two calm, well-organised school websites from the same family, where parents quickly find what they are looking for and can easily ask a question or book an appointment.",
    },
    url: "https://pinestreetschool.com",
  },
  // Geverifieerd via icewall.webflow.io (Webflow-showcaseprofiel van M7); live domein nog onbekend. Sector en kleur zijn een voorlopige keuze.
  {
    slug: "icewall",
    client: "Icewall",
    title: {
      nl: "Icewall: eerst het concept, dan de rest",
      en: "Icewall: concept first, then the rest",
    },
    summary: {
      nl: "Merkstrategie, concept, branding, art direction en een interactieve website voor Icewall, een digitale wereld van fragmenten: met een 2D-wereldkaart, een bestel- en claimflow en een roadmap voor wat nog komt.",
      en: "Brand strategy, concept, branding, art direction and an interactive website for Icewall, a digital world of fragments: with a 2D world map, an order and claim flow and a roadmap for what comes next.",
    },
    sector: "tech-saas-startups",
    services: ["branding-rebranding", "websites-webshops", "foto-video-3d-animatie", "automation-funnels", "ai-consultancy"],
    applications: ["merkstrategie", "huisstijl", "ux-ui-webdesign", "webflow-website", "motion-design", "e-mailmarketing", "roadmap-strategie"],
    tools: ["webflow", "stripe", "gsap", "lottie"],
    color: "#BAE6FF",
    challenge: {
      nl: "Icewall had een sterk idee: een eindige kaart vol digitale fragmenten, die je ontdekt en claimt. Daar hoorde een merk met een duidelijk concept bij: waar sta je voor, voor wie ben je er en hoe ziet dat eruit? En een website waarin je die wereld echt kunt verkennen.",
      en: "Icewall had a strong idea: a finite map full of digital fragments that you discover and claim. That called for a brand with a clear concept: what do you stand for, who are you there for and what does that look like? And a website where you can really explore that world.",
    },
    approach: {
      nl: "We werkten de merkstrategie en het concept uit, ontwierpen de branding en zetten de art direction neer, met eigen graphics en filmische animaties. Op de website verken je Icewall via een dynamische 2D-wereldkaart en ontdek je losse fragmenten. We bouwden ook de volledige bestel- en claimflow: een fragment kiezen, interactieve statussen, bevestigingen en automatische e-mails. Daarnaast maakten we de visuele en strategische roadmap voor wat nog komt: nieuwe eilanden die opengaan, digitale collectibles, communityfuncties en fysieke producten.",
      en: "We worked out the brand strategy and the concept, designed the branding and set the art direction, with custom graphics and cinematic animations. On the website you explore Icewall through a dynamic 2D world map and discover individual fragments. We also built the complete order and claim flow: choosing a fragment, interactive states, confirmations and automated emails. On top of that we created the visual and strategic roadmap for what comes next: new islands to unlock, digital collectibles, community features and physical products.",
    },
    result: {
      nl: "Een digitale wereld waarin merk, verhaal, interactie en techniek samen één ervaring vormen.",
      en: "A digital world where brand, story, interaction and technology form one experience.",
    },
  },
  {
    slug: "calvin-vlaanderen",
    client: "Calvin Vlaanderen",
    title: {
      nl: "CV10: een website op volle snelheid",
      en: "CV10: a website at full throttle",
    },
    summary: {
      nl: "Branding en de officiële website van motorcrosser Calvin Vlaanderen, met nieuws, racekalender, uitslagen en partners.",
      en: "Branding and the official website of motocross rider Calvin Vlaanderen, with news, race calendar, results and partners.",
    },
    sector: "sport-media",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "webflow-website"],
    tools: ["webflow"],
    color: "#CF000E",
    challenge: {
      nl: "Calvin Vlaanderen rijdt als professioneel motorcrosser in het MXGP, het wereldkampioenschap motorcross. Fans en partners willen weten waar hij rijdt en hoe het ging. Dat moest op één plek, in een stijl die bij een racer past.",
      en: "Calvin Vlaanderen races as a professional motocross rider in MXGP, the motocross world championship. Fans and partners want to know where he is racing and how it went. That had to be in one place, in a style that suits a racer.",
    },
    approach: {
      nl: "De branding draait om CV10: zijn initialen en zijn racenummer. De website bouwden we in Webflow, met nieuws, een racekalender met de uitslag per wedstrijd, een over-pagina, de partners en een link naar de shop.",
      en: "The branding revolves around CV10: his initials and his race number. We built the website in Webflow, with news, a race calendar with the result of every race, an about page, the partners and a link to the shop.",
    },
    result: {
      nl: "Een stoere website waarop je per wedstrijd ziet waar Calvin eindigde en waar hij de volgende keer aan de start staat.",
      en: "A bold website that shows where Calvin finished in every race and where he lines up next.",
    },
    url: "https://calvinvlaanderen.com",
  },
  {
    slug: "silvr",
    client: "Silvr",
    title: {
      nl: "Silvr: verzilver je bedrijfsauto",
      en: "Silvr: turn your company vehicle into cash",
    },
    summary: {
      nl: "Van naam tot website: een compleet merk voor autofinancieringsplatform Silvr, met een interactieve calculator in stappen die direct in Teamleader landt, persoonlijke e-mailopvolging en een explainervideo.",
      en: "From name to website: a complete brand for car financing platform Silvr, with an interactive step-by-step calculator that lands straight in Teamleader, personalised email follow-up and an explainer video.",
    },
    sector: "finance-fintech",
    services: ["branding-rebranding", "websites-webshops", "automation-funnels", "configurators-lead-tools-widgets", "foto-video-3d-animatie", "web-apps-portals-apps"],
    applications: ["naamgeving", "logo-ontwerp", "brandbook", "webflow-website", "offerte-calculator", "salesfunnels", "crm-implementatie", "lead-nurturing", "api-koppelingen"],
    tools: ["webflow", "teamleader", "gsap"],
    color: "#112032",
    challenge: {
      nl: "Soms is de omzet er wel, maar het geld nog niet: de factuur wordt pas over weken betaald. Bij Silvr verkoop je je bedrijfsvoertuig, huur je het direct terug en rijd je gewoon door. Geen lening en geen BKR-registratie. Een nieuw concept, dus er moest een nieuw merk komen dat meteen duidelijk maakt hoe het werkt.",
      en: "Sometimes the revenue is there but the cash isn't yet: the invoice only gets paid weeks later. With Silvr you sell your company vehicle, lease it straight back and simply keep driving. No loan and no credit registration. A new concept, so it needed a new brand that makes clear right away how it works.",
    },
    approach: {
      nl: "We begonnen bij de naam: Silvr, met verzilveren als rode draad in alles wat het merk zegt. Daarna volgden de logo's en een brandbook. De website bouwden we in Webflow, als één systeem van merk, techniek en conversie. De kern is een interactieve calculator in vijf stappen, die de aanvraag in realtime persoonlijk maakt en direct doorloopt naar Teamleader. Daar zorgen CRM-automatiseringen voor verrijkte leadgegevens en opvolging met persoonlijke e-mailreeksen, zodat het team meteen aan de slag kan. Een explainervideo legt het concept uit.",
      en: "We started with the name: Silvr, with turning value into cash (verzilveren, in Dutch) as the common thread in everything the brand says. The logos and a brandbook followed. We built the website in Webflow, as one system of brand, technology and conversion. At its core is an interactive five-step calculator that personalises the application in real time and goes straight into Teamleader. There, CRM automations enrich the lead data and follow up with personalised email sequences, so the team can get to work right away. An explainer video explains the concept.",
    },
    result: {
      nl: "Een merk met een naam die blijft hangen, een complete website en een aanvraag die in twee minuten is ingevuld en meteen bij het team in Teamleader staat.",
      en: "A brand with a name that sticks, a complete website and a request that takes two minutes to fill in and lands with the team in Teamleader straight away.",
    },
    url: "https://silvr.nl",
  },
  // TODO(M7): YouTube-kanaal van de serie niet gevonden; graag de link (niet embedden).
  {
    slug: "bus-whisky",
    client: "BUS Whisky",
    title: {
      nl: "BUS Whisky: Brabantse whisky op YouTube",
      en: "BUS Whisky: Brabant whisky on YouTube",
    },
    summary: {
      nl: "Een YouTube-serie en content marketing voor BUS Whisky, de whiskystokerij in Loosbroek, op een steenworp van ons kantoor.",
      en: "A YouTube series and content marketing for BUS Whisky, the whisky distillery in Loosbroek, a stone's throw from our office.",
    },
    sector: "food-retail",
    services: ["content-marketing-online-ads", "foto-video-3d-animatie"],
    applications: ["contentstrategie", "social-media-marketing"],
    tools: ["youtube"],
    color: "#C7A225",
    challenge: {
      nl: "BUS Whisky maakt Nederlandse whisky van gerst van de eigen boerderij, in een stokerij die op hernieuwbare energie draait. Achter elke fles zit dus een verhaal, en dat verhaal wilden ze vaker en beter vertellen.",
      en: "BUS Whisky makes Dutch whisky from barley grown on its own farm, in a distillery that runs on renewable energy. So there is a story behind every bottle, and they wanted to tell it more often and better.",
    },
    approach: {
      nl: "We maakten een YouTube-serie voor BUS Whisky en zetten content marketing in om die verhalen bij de juiste mensen te krijgen.",
      en: "We made a YouTube series for BUS Whisky and used content marketing to get those stories to the right people.",
    },
    result: {
      nl: "Een serie op YouTube en content die het verhaal van BUS Whisky blijft vertellen, ook buiten de stokerij.",
      en: "A series on YouTube and content that keeps telling the BUS Whisky story, beyond the distillery walls too.",
    },
    url: "https://buswhisky.com",
  },
  {
    slug: "the-sandt",
    client: "The Sandt",
    title: {
      nl: "The Sandt: onderbouwd investeren, ook in AI-antwoorden",
      en: "The Sandt: well-founded investing, in AI answers too",
    },
    summary: {
      nl: "Website, de landingspagina Onderbouwd Investeren en content die AI-zoekmachines kunnen citeren, voor The Sandt Investment Engineers.",
      en: "Website, the Onderbouwd Investeren landing page and content that AI search engines can cite, for The Sandt Investment Engineers.",
    },
    sector: "vastgoed-makelaardij",
    services: ["websites-webshops", "automation-funnels", "seo-aeo-geo"],
    applications: ["webflow-website", "landingspaginas", "salesfunnels", "aeo", "geo"],
    tools: ["webflow"],
    color: "#6A4231",
    challenge: {
      nl: "The Sandt Investment Engineers ontwerpt sinds 2015 investeringsoplossingen in vastgoed, met vastgoedobligaties onder Nederlandse regie. Investeerders letten steeds scherper op risico, rendement en transparantie. Het verhaal moest dus helder en goed onderbouwd zijn: op de website, in de brochure en in de antwoorden van AI-zoekmachines.",
      en: "Since 2015, The Sandt Investment Engineers has been designing real estate investment solutions, with real estate bonds under Dutch management. Investors look ever more closely at risk, return and transparency. So the story had to be clear and well-founded: on the website, in the brochure and in the answers of AI search engines.",
    },
    approach: {
      nl: "We bouwden de website van The Sandt in Webflow, met de investeringsmogelijkheden per type investeerder, van particulier tot family office, en het trackrecord. Daarnaast maakten we de landingspagina Onderbouwd Investeren: je vraagt de brochure aan in een paar velden en krijgt per mail een persoonlijke toegangslink. En we bouwden de content zo op dat AI-zoekmachines The Sandt als bron kunnen noemen (AEO en GEO).",
      en: "We built The Sandt's website in Webflow, with the investment options per type of investor, from private investor to family office, and the track record. We also made the Onderbouwd Investeren landing page: you request the brochure in a few fields and receive a personal access link by email. And we structured the content so AI search engines can name The Sandt as a source (AEO and GEO).",
    },
    result: {
      nl: "Een website en landingspagina die investeerders rustig en onderbouwd informeren, en een merk dat in de AI-antwoorden van Google als bron wordt genoemd.",
      en: "A website and landing page that inform investors calmly and with substance, and a brand that Google's AI answers cite as a source.",
    },
    url: "https://www.thesandt.nl",
  },
  // Geverifieerd via aigora.webflow.io (M7-credit; "real-world data for precision medicine R&D"); live domein nog onbekend. Sector en kleur graag checken.
  {
    slug: "aigora",
    client: "Aigora",
    title: {
      nl: "Aigora: merk, brandbook en website",
      en: "Aigora: brand, brandbook and website",
    },
    summary: {
      nl: "Branding, een brandbook en een website voor Aigora.",
      en: "Branding, a brandbook and a website for Aigora.",
    },
    sector: "tech-saas-startups",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "brandbook", "ux-ui-webdesign"],
    tools: [],
    color: "#71A5AF",
    challenge: {
      nl: "Aigora wilde een merk dat staat, en dat iedereen op dezelfde manier toepast.",
      en: "Aigora wanted a brand that stands firm, and that everyone applies the same way.",
    },
    approach: {
      nl: "We ontwikkelden de branding en legden alles vast in een brandbook, zodat iedereen het merk op dezelfde manier gebruikt. Daarna volgde de website.",
      en: "We developed the branding and captured it all in a brandbook, so everyone uses the brand the same way. Then came the website.",
    },
    result: {
      nl: "Een consistent merk met duidelijke richtlijnen en een website in dezelfde lijn.",
      en: "A consistent brand with clear guidelines and a website in the same line.",
    },
  },
  {
    slug: "digital-newsgroup",
    client: "Digital Newsgroup",
    title: {
      nl: "Digital Newsgroup: backlinks bestellen als in een webshop",
      en: "Digital Newsgroup: ordering backlinks like in a web shop",
    },
    summary: {
      nl: "Volledige rebranding van rood naar gifgroen en een laagdrempelige WooCommerce-webshop voor persplaatsingen, zonder login of account, met een adapter die alle websites, domain ratings, favicons en screenshots automatisch ophaalt.",
      en: "A full rebrand from red to acid green and an easy WooCommerce shop for press placements, with no login or account, plus an adapter that automatically fetches every website, domain rating, favicon and screenshot.",
    },
    sector: "zakelijke-dienstverlening",
    services: ["branding-rebranding", "websites-webshops", "web-apps-portals-apps"],
    applications: ["rebranding", "logo-ontwerp", "huisstijl", "webshop", "wordpress-website", "api-koppelingen"],
    tools: ["wordpress", "woocommerce", "elementor"],
    color: "#A9F573",
    challenge: {
      nl: "Digital Newsgroup (DNG) is een internationaal linkbuildingbureau met eigen software en een grote database met blogs en nieuwssites. Het oude merk was rood. Plaatsingen kopen kon alleen in de applicatie, met een login en een account.",
      en: "Digital Newsgroup (DNG) is an international link building agency with its own software and a large database of blogs and news sites. The old brand was red. Buying placements was only possible in the application, with a login and an account.",
    },
    approach: {
      nl: "We voerden een volledige rebranding door, van de oude rode huisstijl en het logo naar een gifgroene branding: actief en levendig. Daarna bouwden we shop.digitalnewsgroup.com in WordPress met WooCommerce: een lichte webshop voor persplaatsingen uit een selectie van de applicatie, zonder login of account. Een adapter haalt alle websites en hun domain ratings automatisch op, met favicon en screenshot.",
      en: "We carried out a full rebrand, from the old red identity and logo to an acid-green brand: active and lively. Then we built shop.digitalnewsgroup.com in WordPress with WooCommerce: a lightweight shop for press placements from a selection of the application, with no login or account. An adapter automatically fetches every website and its domain ratings, including favicon and screenshot.",
    },
    result: {
      nl: "Iedereen kan online laagdrempelig kennismaken met DNG en plaatsingen kopen zoals in elke webshop, in de nieuwe groene uitstraling.",
      en: "Anyone can get to know DNG online and buy placements like in any web shop, in the new green look.",
    },
    url: "https://shop.digitalnewsgroup.com",
  },
  // Geverifieerd: www.martello.global wordt beheerd vanuit de M7-editor. Tekst blijft bij de scope; sector en kleur graag checken.
  {
    slug: "martello",
    client: "Martello",
    title: {
      nl: "Martello: merk en website in één lijn",
      en: "Martello: brand and website in one line",
    },
    summary: {
      nl: "Branding en website voor Martello.",
      en: "Branding and website for Martello.",
    },
    sector: "zakelijke-dienstverlening",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "ux-ui-webdesign"],
    tools: [],
    color: "#103732",
    challenge: {
      nl: "Martello zocht een herkenbaar merk en een website die laat zien waar het bedrijf voor staat.",
      en: "Martello wanted a recognisable brand and a website that shows what the company stands for.",
    },
    approach: {
      nl: "We ontwikkelden de branding en maakten de website in dezelfde lijn.",
      en: "We developed the branding and made the website in the same line.",
    },
    result: {
      nl: "Een merk en een website die één verhaal vertellen.",
      en: "A brand and a website that tell one story.",
    },
    url: "https://www.martello.global",
  },
  {
    slug: "huurfix",
    client: "Huurfix",
    title: {
      nl: "Huurfix: huurverlaging zonder gedoe",
      en: "Huurfix: rent reduction without the hassle",
    },
    summary: {
      nl: "Branding, website, een onboardingflow gekoppeld aan Odoo CRM, klantcases met automatische berekening van de huurverlaging, social templates en een e-book voor Huurfix, dat huurders op no cure no pay-basis helpt aan huurverlaging.",
      en: "Branding, website, an onboarding flow integrated with Odoo CRM, customer cases that calculate the rent reduction automatically, social templates and an e-book for Huurfix, which helps tenants get their rent reduced on a no cure, no pay basis.",
    },
    sector: "zakelijke-dienstverlening",
    services: [
      "branding-rebranding",
      "websites-webshops",
      "automation-funnels",
      "configurators-lead-tools-widgets",
      "content-marketing-online-ads",
      "grafisch-ontwerp-print",
    ],
    applications: ["huisstijl", "webflow-website", "meertalige-website", "salesfunnels", "crm-implementatie", "marketing-automation", "check-tools", "social-media-marketing", "brochures-magazines"],
    tools: ["webflow", "odoo"],
    color: "#FFF200",
    challenge: {
      nl: "Betaal je te veel huur, dan wil je dat weten. Maar gedoe met je verhuurder of de Huurcommissie, daar zit niemand op te wachten. Huurfix regelt het voor je: een jurist neemt het contact en de procedure over, en je betaalt pas achteraf. Dat aanbod moest simpel en betrouwbaar overkomen.",
      en: "If you pay too much rent, you want to know. But hassle with your landlord or the Rent Tribunal is something nobody looks forward to. Huurfix sorts it out for you: a lawyer takes over the contact and the procedure, and you only pay afterwards. That offer had to come across as simple and trustworthy.",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow, in het Nederlands en Engels. Alles leidt naar de gratis huurprijscheck: postcode en huisnummer invullen en de aanvraag loopt verder. Die intake is een onboarding in meerdere stappen, gekoppeld aan Odoo CRM en opgesplitst in drie geautomatiseerde flows, elk met eigen CRM-logica, opvolgmails en afhandeling. Klantcases laten zien wat het oplevert: de site rekent de huurverlaging automatisch uit als percentage van de oorspronkelijke en de gecorrigeerde huurprijs, in het overzicht en op elke detailpagina. Daarnaast maakten we templates voor social media en een e-book.",
      en: "We developed the branding and built the website in Webflow, in Dutch and English. Everything leads to the free rent check: enter your postcode and house number and the request carries on from there. That intake is a multi-step onboarding flow, integrated with Odoo CRM and split into three automated flows, each with its own CRM logic, follow-up emails and handling. Customer cases show what it delivers: the site automatically calculates the rent reduction as a percentage, based on the original and the corrected rent, in the overview and on every detail page. We also made social media templates and an e-book.",
    },
    result: {
      nl: "Een merk en een website die vertrouwen geven. De check is in een paar minuten klaar, en aanvragen staan meteen gekwalificeerd en geordend in Odoo. En met de social templates en het e-book kan Huurfix zelf verder.",
      en: "A brand and a website that inspire trust. The check takes just a few minutes, and requests arrive in Odoo qualified and organised. And with the social templates and the e-book, Huurfix can carry on by itself.",
    },
    url: "https://www.huurfix.nl",
  },
  // Geverifieerd: cryptocointalk.nl (WordPress-auteur m7branding); scope klopt met de Google-review van Thijs Sijpestijn. Merkkleur graag checken.
  {
    slug: "cryptocointalk",
    client: "CryptoCoinTalk",
    title: {
      nl: "CryptoCoinTalk: abonnementen op de schop",
      en: "CryptoCoinTalk: subscriptions rebuilt",
    },
    summary: {
      nl: "Een nieuwe website, een opgefriste branding, een herzien abonnementssysteem en een UI/UX-redesign van het platform van CryptoCoinTalk.",
      en: "A new website, a refreshed brand, a reworked subscription system and a UI/UX redesign of the CryptoCoinTalk platform.",
    },
    sector: "finance-fintech",
    services: ["web-apps-portals-apps", "websites-webshops", "branding-rebranding"],
    applications: ["ux-ui-app-design", "ledenportaal-loyaliteit", "ux-ui-webdesign", "rebranding"],
    tools: [],
    color: "#00477F",
    challenge: {
      nl: "Bij CryptoCoinTalk moest de manier waarop de abonnementen werkten op de schop. En het platform, de website en het merk konden ook wel een opfrisbeurt gebruiken.",
      en: "At CryptoCoinTalk, the way the subscriptions worked needed an overhaul. And the platform, the website and the brand could do with a refresh too.",
    },
    approach: {
      nl: "We richtten de abonnementen opnieuw in, gaven het platform een UI/UX-redesign, fristen de branding op en bouwden een nieuwe website.",
      en: "We restructured the subscriptions, gave the platform a UI/UX redesign, refreshed the branding and built a new website.",
    },
    result: {
      nl: "Een vernieuwd platform met een helder abonnementsmodel, een opgefrist merk en een website in dezelfde lijn.",
      en: "A renewed platform with a clear subscription model, a refreshed brand and a website in the same line.",
    },
    url: "https://cryptocointalk.nl",
  },
  // Geverifieerd via solid-layer.webflow.io (Webflow-showcaseprofiel van M7); live domein nog onbekend.
  {
    slug: "solidlayer",
    client: "SolidLayer",
    title: {
      nl: "SolidLayer: een stevig fundament",
      en: "SolidLayer: a solid foundation",
    },
    summary: {
      nl: "Een complete merkidentiteit met een compact brandbook en een Webflow-website voor SolidLayer, rond één idee: trust the layer.",
      en: "A complete brand identity with a compact brandbook and a Webflow website for SolidLayer, built around one idea: trust the layer.",
    },
    sector: "tech-saas-startups",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "brandbook", "ux-ui-webdesign", "webflow-website"],
    tools: ["webflow"],
    color: "#26D382",
    challenge: {
      nl: "SolidLayer bouwt aan veilige, soevereine infrastructuur, onder het motto 'Sovereign by structure'. Een nieuw merk dat vanaf de eerste dag solide moest overkomen, zonder de gebruikelijke clichés uit de cybersecurity.",
      en: "SolidLayer is building secure, sovereign infrastructure, under the motto 'Sovereign by structure'. A new brand that had to come across as solid from day one, without the usual cybersecurity clichés.",
    },
    approach: {
      nl: "We ontwikkelden de branding rond één centraal idee: trust the layer. De visuele richting brengt cybersecurity, infrastructuur en Europese soevereiniteit samen in een strak, technisch merksysteem: monospace-typografie, details die aan een terminal doen denken, diep navy en signaalgroen als accent. Dat legden we vast in een eenvoudig brandbook. Daarna ontwierpen en bouwden we de website volledig op maat in Webflow, responsive en met verfijnde interacties en doelgerichte beweging. Een geanimeerde netwerkkaart van Europa opent met een eigen laadsequentie, met zacht pulserende knooppunten, subtiele verbindingslijnen en vloeiende overgangen.",
      en: "We developed the branding around one central idea: trust the layer. The visual direction brings cybersecurity, infrastructure and European sovereignty together in a clean, technical brand system: monospace typography, terminal-inspired details, deep navy and signal green as the accent. We captured it in a simple brandbook. Then we designed and built a fully custom, responsive website in Webflow, with refined interactions and purposeful motion. An animated network map of Europe opens with its own loading sequence, with softly pulsing nodes, subtle connection lines and smooth transitions.",
    },
    result: {
      nl: "Een merk dat doet wat de naam belooft: een stevige basis voor alles wat nog komt.",
      en: "A brand that does what the name promises: a solid base for everything still to come.",
    },
  },
  {
    slug: "agroforestry-wur",
    client: "Wageningen University & Research",
    title: {
      nl: "Agroforestry: alle kennis op één plek",
      en: "Agroforestry: all the knowledge in one place",
    },
    summary: {
      nl: "Een website met kennisbank voor het agroforestry-onderzoek van Wageningen University & Research: factsheets, rapporten, tools en video's, overzichtelijk bij elkaar.",
      en: "A website with a knowledge base for the agroforestry research of Wageningen University & Research: factsheets, reports, tools and videos, neatly in one place.",
    },
    sector: "agrarisch-natuur",
    services: ["websites-webshops"],
    applications: ["wordpress-website", "ux-ui-webdesign", "contentstructuur"],
    tools: ["webflow", "wordpress"],
    color: "#537021",
    challenge: {
      nl: "WUR onderzoekt al meer dan tien jaar met partners hoe bomen, struiken en landbouw samen een veerkrachtiger systeem vormen. In het publiek-private samenwerkingsproject 'Agroforestry in diverse vormen van niche naar gevestigde praktijk' komt al dat onderzoek samen. Die kennis moest goed vindbaar worden, voor boeren, beleidsmakers en iedereen die ermee aan de slag wil.",
      en: "For more than ten years, WUR and its partners have been researching how trees, shrubs and farming together form a more resilient system. All that research comes together in the public-private partnership project 'Agroforestry in diverse forms, from niche to established practice'. That knowledge had to become easy to find, for farmers, policymakers and anyone who wants to get started with it.",
    },
    approach: {
      nl: "We ontwierpen de website in Webflow en zetten die over naar WordPress. De kennisbank deelden we in op type (factsheets, rapporten en tools, video's) en op thema: voedselbossen, veehouderij, akkerbouw, internationaal en beleid.",
      en: "We designed the website in Webflow and moved it over to WordPress. We organised the knowledge base by type (factsheets, reports and tools, videos) and by theme: food forests, livestock farming, arable farming, international and policy.",
    },
    result: {
      nl: "Eén plek met alle onderzoeksresultaten van WUR over agroforestry, van afgeronde projecten tot het lopende onderzoek.",
      en: "One place with all of WUR's agroforestry research results, from completed projects to the research that is still under way.",
    },
    url: "https://agroforestryonderzoek.nl",
  },
  {
    slug: "grid",
    client: "GRID",
    title: {
      nl: "GRID: laden, tanken en bestellen",
      en: "GRID: charge, fuel and order",
    },
    summary: {
      nl: "Website, advertentiebanners en de webshop shop.grid.com voor GRID, de app en marketplace rond elektrisch rijden en laden.",
      en: "Website, ad banners and the shop.grid.com web shop for GRID, the app and marketplace for electric driving and charging.",
    },
    sector: "automotive-mobiliteit",
    services: ["websites-webshops", "content-marketing-online-ads"],
    applications: ["webflow-website", "webshop"],
    tools: ["webflow", "wordpress", "woocommerce", "elementor"],
    color: "#05CD8C",
    challenge: {
      nl: "Met de GRID-app vind je laadpunten en tankstations, plan je je route en zie je waar laden of tanken het voordeligst is. Daarnaast levert GRID laadpalen, laadkabels en snelladers, voor particulieren en bedrijven. Dat alles moest online een duidelijk thuis krijgen.",
      en: "With the GRID app you find charging points and fuel stations, plan your route and see where charging or refuelling is cheapest. GRID also supplies charging stations, charging cables and fast chargers, for consumers and businesses. All of that needed a clear home online.",
    },
    approach: {
      nl: "We bouwden de website in Webflow en de marketplace shop.grid.com in WordPress met WooCommerce, met aparte ingangen voor particulieren en zakelijk. Voor campagnes maakten we advertentiebanners, zoals die voor het gratis aanvragen van een publiek laadpunt bij je woning.",
      en: "We built the website in Webflow and the shop.grid.com marketplace in WordPress with WooCommerce, with separate entrances for consumers and businesses. For campaigns we made ad banners, such as the one for requesting a free public charging point near your home.",
    },
    result: {
      nl: "Een website en een shop die bij elkaar horen, waarin je van laadkabel tot DC-snellader bestelt, en banners met een duidelijke oproep.",
      en: "A website and a shop that belong together, where you can order anything from a charging cable to a DC fast charger, and banners with a clear call to action.",
    },
    url: "https://grid.com",
  },
  // Geverifieerd: verichecks.eu staat in het Webflow-showcaseprofiel van M7.
  {
    slug: "verichecks",
    client: "VeriChecks",
    title: {
      nl: "VeriChecks: eerst checken, dan zakendoen",
      en: "VeriChecks: check first, then do business",
    },
    summary: {
      nl: "Branding en website voor VeriChecks, het KYC- en complianceplatform voor verificatiechecks op bedrijven, medewerkers en leveranciers, met softwaremockups, eigen infographics en een SEO-structuur.",
      en: "Branding and website for VeriChecks, the KYC and compliance platform for verification checks on businesses, employees and suppliers, with software mockups, custom infographics and an SEO structure.",
    },
    sector: "tech-saas-startups",
    services: ["branding-rebranding", "websites-webshops", "grafisch-ontwerp-print", "seo-aeo-geo"],
    applications: ["huisstijl", "webflow-website", "infographics", "seo"],
    tools: ["webflow"],
    color: "#289ED0",
    challenge: {
      nl: "VeriChecks uit Brussel is een SaaS-platform voor KYC en compliance: van identiteitsverificatie en zakelijke checks tot achtergrondcontroles bij nieuwe medewerkers, leveranciers en klanten. Een serieus onderwerp, waarin vertrouwen alles is, dat toch helder en toegankelijk moest overkomen.",
      en: "Brussels-based VeriChecks is a SaaS platform for KYC and compliance: from identity verification and company checks to background checks on new employees, suppliers and customers. A serious subject, where trust is everything, that still had to come across as clear and approachable.",
    },
    approach: {
      nl: "We ontwikkelden de branding en ontwierpen en bouwden de website in Webflow, met een structuur die gericht is op conversie, sterke boodschappen, een verfijnde UI en subtiele animaties. Die legt in een paar stappen uit hoe het werkt: klanten toevoegen, de juiste checks kiezen en de resultaten overzichtelijk terugzien. Strakke softwaremockups en eigen infographics maken de KYC-workflows, onboardingstappen en complianceprocessen zichtbaar. En de site is geoptimaliseerd voor zoektermen als KYC-software, complianceplatform en identiteitsverificatie.",
      en: "We developed the branding and designed and built the website in Webflow, with a conversion-focused structure, strong messaging, a refined UI and subtle animations. It explains in a few steps how it works: add clients, choose the right checks and see the results in a clear overview. Sleek software mockups and custom infographics make the KYC workflows, onboarding steps and compliance processes visible. And the site is optimised for search terms such as KYC software, compliance platform and identity verification.",
    },
    result: {
      nl: "Een betrouwbaar merk en een website die het product en de toepassingen helder uitlegt, van screening bij werving tot due diligence.",
      en: "A trustworthy brand and a website that clearly explains the product and its uses, from pre-employment screening to due diligence.",
    },
    url: "https://verichecks.eu",
  },
  {
    slug: "nexis-group",
    client: "Nexis Group",
    title: {
      nl: "Nexis: de patiënt thuis, het zorgteam erbij",
      en: "Nexis: the patient at home, the care team close by",
    },
    summary: {
      nl: "Een tweetalige website voor Nexis Telebox, het systeem waarmee zorgteams patiënten thuis op afstand monitoren, met een leadwidget voor meerdere doelgroepen en 3D-productanimaties.",
      en: "A bilingual website for Nexis Telebox, the system that lets care teams monitor patients remotely at home, with a lead widget for multiple stakeholders and 3D product animations.",
    },
    sector: "zorg-welzijn",
    services: ["websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie", "seo-aeo-geo"],
    applications: ["wordpress-website", "meertalige-website", "ux-ui-webdesign", "website-widgets", "3d-visualisatie", "seo"],
    tools: ["webflow", "wordpress"],
    color: "#6A9FCE",
    challenge: {
      nl: "Met Nexis Telebox meten patiënten thuis onder meer hun bloeddruk, hartslag en zuurstofsaturatie. Via 4G komen de metingen automatisch in het dashboard van het zorgteam. Ziekenhuizen en klinieken moesten in één keer snappen wat het is, voor wie het is en hoe het in hun bestaande systemen past.",
      en: "With Nexis Telebox, patients measure things like blood pressure, heart rate and oxygen saturation at home. The readings go automatically via 4G to the care team's dashboard. Hospitals and clinics had to understand in one go what it is, who it is for and how it fits into their existing systems.",
    },
    approach: {
      nl: "We ontwierpen de website in Webflow en zetten die over naar WordPress, in het Nederlands en Engels. Snel, overzichtelijk en opgebouwd voor SEO. De opbouw volgt de vragen van de bezoeker: waarom nu, wat is het, voor wie is het en hoe werkt de oplossing? Zo wordt complexe techniek begrijpelijk voor iedereen die meebeslist. Een eigen leadwidget voor de verschillende doelgroepen stroomlijnt het beslisproces en verstuurt automatisch transactionele e-mails. Strakke 3D-productanimaties en device-mockups van de whitelabel-software maken het product tastbaar.",
      en: "We designed the website in Webflow and moved it over to WordPress, in Dutch and English. Fast, clear and structured for SEO. The structure follows the visitor's questions: why now, what is it, who is it for and how does the solution work? That makes complex technology understandable for everyone involved in the decision. A custom lead widget for the different stakeholders streamlines the decision process and sends automated transactional emails. Sleek 3D product animations and device mockups of the white-label software make the product tangible.",
    },
    result: {
      nl: "Een rustige, heldere website die een technisch zorgproduct begrijpelijk maakt, met een duidelijke weg naar een demo.",
      en: "A calm, clear website that makes a technical healthcare product easy to understand, with a clear path to a demo.",
    },
    url: "https://nexisgroup.nl",
  },
  // Geverifieerd via spartabluehydrogen.webflow.io (Webflow-showcaseprofiel van M7); live domein nog onbekend.
  {
    slug: "sparta-blue-hydrogen",
    client: "Sparta Blue Hydrogen",
    title: {
      nl: "Sparta Blue Hydrogen: merk en website",
      en: "Sparta Blue Hydrogen: brand and website",
    },
    summary: {
      nl: "Branding en website voor Sparta Blue Hydrogen.",
      en: "Branding and website for Sparta Blue Hydrogen.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "ux-ui-webdesign"],
    tools: [],
    color: "#2149AD",
    challenge: {
      nl: "Waterstof is geen onderwerp dat je in één zin uitlegt. Sparta Blue Hydrogen wilde een merk en een website die professioneel overkomen en het verhaal helder vertellen.",
      en: "Hydrogen is not a subject you explain in one sentence. Sparta Blue Hydrogen wanted a brand and a website that come across as professional and tell the story clearly.",
    },
    approach: {
      nl: "We ontwikkelden de branding en ontwierpen en bouwden de website.",
      en: "We developed the branding and designed and built the website.",
    },
    result: {
      nl: "Een sterk merk en een overzichtelijke website voor een speler in waterstof.",
      en: "A strong brand and a well-organised website for a hydrogen player.",
    },
  },
  {
    slug: "db-kiepers",
    client: "DB Kiepers",
    title: {
      nl: "DB Kiepers: premium transport, ook op de weg herkenbaar",
      en: "DB Kiepers: premium transport, recognisable on the road too",
    },
    summary: {
      nl: "Branding, website en ontwerpen voor de truckbelettering van DB Kiepers, transporteur en leverancier van bouwstoffen.",
      en: "Branding, website and truck livery designs for DB Kiepers, haulier and supplier of building materials.",
    },
    sector: "transport-logistiek",
    services: ["branding-rebranding", "websites-webshops", "grafisch-ontwerp-print"],
    applications: ["huisstijl", "webflow-website", "beurs-signing"],
    tools: ["webflow"],
    color: "#C74E47",
    challenge: {
      nl: "DB Kiepers levert gecertificeerde bouwstoffen zoals zand, puin en granulaat en verzorgt zelf het transport, met kiepwagens en containerauto's, 24/7. Ze hebben de hele keten in handen, en dat mocht je zien: op de website én op de weg.",
      en: "DB Kiepers supplies certified building materials such as sand, rubble and granulate and handles the transport itself, with tipper trucks and container trucks, 24/7. They control the whole chain, and that deserved to show: on the website and on the road.",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow, met transport, grondstoffen en cases van projecten. En we ontwierpen de stickering voor de trucks, zodat het merk overal meerijdt.",
      en: "We developed the branding and built the website in Webflow, with transport, raw materials and project cases. And we designed the truck livery, so the brand rides along everywhere.",
    },
    result: {
      nl: "Een premium uitstraling voor een bouwlogistiek bedrijf, van de homepage tot de vrachtwagen.",
      en: "A premium look for a construction logistics company, from the homepage to the truck.",
    },
    url: "https://dbkiepers.nl",
  },
  {
    slug: "jmtuning",
    client: "JMTuning",
    title: {
      nl: "JMTuning: één huis, vier afdelingen",
      en: "JMTuning: one house, four departments",
    },
    summary: {
      nl: "Website en branding voor uitlaatspecialist JMTuning uit Schagen, met een merkstructuur voor de afdelingen Maarschall, JM Custom Exhausts, BLAST en RVSuitlaatdelen.nl.",
      en: "Website and branding for exhaust specialist JMTuning from Schagen, with a brand structure for the Maarschall, JM Custom Exhausts, BLAST and RVSuitlaatdelen.nl departments.",
    },
    sector: "automotive-mobiliteit",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["merkstrategie", "huisstijl", "webflow-website"],
    tools: ["webflow"],
    color: "#1875FA",
    challenge: {
      nl: "JMTuning in Schagen is gespecialiseerd in uitlaten, met eigen productie. Onder één dak zitten meerdere afdelingen: de titanium uitlaten van Maarschall, maatwerk van JM Custom Exhausts, BLAST en RVSuitlaatdelen.nl, een online platform voor uitlaatonderdelen. Hoe laat je die naast elkaar bestaan zonder dat het rommelig wordt?",
      en: "JMTuning in Schagen specialises in exhausts, with in-house production. Several departments share one roof: Maarschall's titanium exhausts, custom work by JM Custom Exhausts, BLAST and RVSuitlaatdelen.nl, an online platform for exhaust parts. How do you let them live side by side without it getting messy?",
    },
    approach: {
      nl: "We brachten de afdelingen onder in één merkfamilie, met per afdeling een eigen accent. De website in Webflow werkt als voordeur: je kiest een afdeling en komt direct op de juiste plek.",
      en: "We brought the departments together in one brand family, with each department getting its own accent. The Webflow website works as the front door: you pick a department and land in the right place straight away.",
    },
    result: {
      nl: "Een overzichtelijk geheel waarin elke afdeling zichzelf kan zijn en bezoekers snel bij de juiste specialist uitkomen.",
      en: "A clear whole in which every department can be itself and visitors quickly end up with the right specialist.",
    },
    url: "https://www.jmtuning.nl",
  },
  // Voorheen ook "titanium-exhaust-configurator" (zelfde klant); die URL verwijst nu hierheen (next.config.js).
  {
    slug: "maarschall",
    client: "Maarschall",
    title: {
      nl: "Maarschall: titanium met een eigen sound",
      en: "Maarschall: titanium with its own sound",
    },
    summary: {
      nl: "Website en branding voor Maarschall Titanium: handgemaakte titanium uitlaatsystemen, met een uitlaatzoeker per merk en model.",
      en: "Website and branding for Maarschall Titanium: handmade titanium exhaust systems, with an exhaust finder by make and model.",
    },
    sector: "automotive-mobiliteit",
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets"],
    applications: ["huisstijl", "webflow-website", "productconfigurator"],
    tools: ["webflow"],
    cover: "/media/cases/titanium-exhaust.webp",
    gallery: ["/media/cases/titanium-phone.webp"],
    featured: true,
    color: "#FE0000",
    challenge: {
      nl: "Maarschall maakt handgemaakte, personaliseerbare titanium uitlaatsystemen voor onder meer McLaren, Ferrari, Lamborghini en Audi, en levert ook via resellers. Een topproduct voor liefhebbers, dat online dezelfde klasse moest uitstralen.",
      en: "Maarschall makes handmade, customisable titanium exhaust systems for McLaren, Ferrari, Lamborghini and Audi, among others, and also sells through resellers. A top product for enthusiasts, which had to show the same class online.",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow. Met 'Vind jouw uitlaat' kies je merk en model en zie je meteen welk systeem er is voor jouw auto.",
      en: "We developed the branding and built the website in Webflow. With 'Find your exhaust' you choose make and model and see right away which system is available for your car.",
    },
    result: {
      nl: "Een donkere, krachtige website waarop het vakmanschap voorop staat en liefhebbers hun uitlaat snel vinden.",
      en: "A dark, powerful website that puts the craftsmanship first and helps enthusiasts find their exhaust fast.",
    },
    url: "https://www.maarschall.com",
  },
  {
    slug: "the-filmcar",
    client: "The Filmcar",
    title: {
      nl: "The Filmcar: rolling shots, strak in beeld",
      en: "The Filmcar: rolling shots, nicely framed",
    },
    summary: {
      nl: "Een website voor The Filmcar, de camera-auto voor rolling shots, met een offerteaanvraag in een paar stappen.",
      en: "A website for The Filmcar, the camera car for rolling shots, with a quote request in a few steps.",
    },
    sector: "sport-media",
    services: ["websites-webshops"],
    applications: ["webflow-website", "ux-ui-webdesign"],
    tools: ["webflow"],
    color: "#FFB200",
    challenge: {
      nl: "The Filmcar levert rolling shots van alles wat beweegt, met een eigen camera-auto en crew. Productiebedrijven huren alleen de auto of besteden de hele productie uit. Dat verschil moest meteen duidelijk zijn, net als de weg naar een offerte.",
      en: "The Filmcar delivers rolling shots of anything that moves, with its own camera car and crew. Production companies either hire just the car or outsource the whole production. That difference had to be clear right away, and so did the route to a quote.",
    },
    approach: {
      nl: "We bouwden de website in Webflow, met het systeem, het portfolio en een offerteaanvraag in stappen: alleen de auto of de hele productie, de apparatuur, de crew en hoe lang je de auto nodig hebt.",
      en: "We built the website in Webflow, with the system, the portfolio and a step-by-step quote request: just the car or the whole production, the equipment, the crew and how long you need the car.",
    },
    result: {
      nl: "Een strakke website die laat zien wat The Filmcar kan, met een aanvraag waarop binnen 24 uur een offerte op maat volgt.",
      en: "A sleek website that shows what The Filmcar can do, with a request that is followed by a tailor-made quote within 24 hours.",
    },
    url: "https://www.thefilmcar.com",
  },
  {
    slug: "boutique-hotels-gelderland",
    client: "Boutique Hotels Gelderland",
    title: {
      nl: "Boutique Hotels Gelderland: locaties met een verhaal",
      en: "Boutique Hotels Gelderland: venues with a story",
    },
    summary: {
      nl: "Branding en website voor Boutique Hotels Gelderland: bijzondere hotels en locaties waar je overnacht, vergadert, trouwt of een feest viert.",
      en: "Branding and website for Boutique Hotels Gelderland: special hotels and venues where you stay, meet, get married or throw a party.",
    },
    sector: "travel-leisure",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "webflow-website"],
    tools: ["webflow"],
    color: "#D7BA8F",
    challenge: {
      nl: "Boutique Hotels Gelderland brengt bijzondere locaties samen, zoals Hotel de Wereld, Villa Ruimzicht, Villa Wanrooy en The Church. Monumentale panden, elk met een eigen karakter, maar met één gevoel en één serviceniveau. Dat moest je in het merk en op de website terugzien.",
      en: "Boutique Hotels Gelderland brings special venues together, such as Hotel de Wereld, Villa Ruimzicht, Villa Wanrooy and The Church. Monumental buildings, each with its own character, but with one feeling and one level of service. That had to show in the brand and on the website.",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow. Je zoekt op wat je wilt organiseren, van teambuilding tot trouwen, en vindt per locatie wat er kan.",
      en: "We developed the branding and built the website in Webflow. You search by what you want to organise, from team building to a wedding, and find what is possible at each venue.",
    },
    result: {
      nl: "Eén merk voor meerdere karaktervolle locaties, met een website die je van idee naar de juiste plek brengt.",
      en: "One brand for several characterful venues, with a website that takes you from idea to the right place.",
    },
    url: "https://www.boutiquehotelsgelderland.nl",
  },
  {
    slug: "foodbars-gelderland",
    client: "Foodbars Gelderland",
    title: {
      nl: "Foodbars Gelderland: ontspan, geniet en beleef",
      en: "Foodbars Gelderland: relax, enjoy, experience",
    },
    summary: {
      nl: "Branding en website voor Foodbars Gelderland: vier foodbars onder één vlag, voor lunch, borrel, diner en events.",
      en: "Branding and website for Foodbars Gelderland: four food bars under one flag, for lunch, drinks, dinner and events.",
    },
    sector: "travel-leisure",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "webflow-website"],
    tools: ["webflow"],
    color: "#526F5E",
    challenge: {
      nl: "Foodbars Gelderland bestaat uit LEV. Foodbar, LEV. by Mike, Gastrobar de Wereld en JANS'. Van high tea tot walking dinner en van zakelijke borrel tot bruiloft. Vier zaken onder één vlag: hoe maak je daar één merk van?",
      en: "Foodbars Gelderland is made up of LEV. Foodbar, LEV. by Mike, Gastrobar de Wereld and JANS'. From high tea to walking dinner and from business drinks to weddings. Four places under one flag: how do you turn that into one brand?",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow, ingedeeld in Enjoy, Celebrate en Business. Je zoekt direct op het soort event en ziet per foodbar wat er kan.",
      en: "We developed the branding and built the website in Webflow, organised into Enjoy, Celebrate and Business. You search straight away by type of event and see what is possible at each food bar.",
    },
    result: {
      nl: "Eén herkenbaar merk voor vier foodbars, en een website waarop je zo vindt waar je je lunch, feest of zakelijke borrel viert.",
      en: "One recognisable brand for four food bars, and a website where you quickly find the place for your lunch, party or business drinks.",
    },
    url: "https://foodbarsgelderland.nl",
  },
  {
    slug: "speedbar",
    client: "Speedbar",
    title: {
      nl: "Speedbar: maatwerk voor tijdritfietsers",
      en: "Speedbar: tailor-made for time trialists",
    },
    summary: {
      nl: "Website, een configurator met aanvraag in stappen en een videodocumentaire voor Speedbar, de op maat gemaakte aerobar voor tijdritten.",
      en: "Website, a step-by-step configurator and request flow, and a video documentary for Speedbar, the made-to-measure time trial aerobar.",
    },
    sector: "sport-media",
    services: ["websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie"],
    applications: ["webflow-website", "productconfigurator", "bedrijfsfilm"],
    tools: ["webflow"],
    color: "#3D4855",
    challenge: {
      nl: "Speedbar maakt aerobars voor tijdritfietsen, voor elke renner op maat. Dankzij 3D-printtechniek is het product nu ook bereikbaar voor fietsers buiten de profwereld. Zo'n persoonlijk product verkoop je niet met een standaard bestelknop.",
      en: "Speedbar makes aerobars for time trial bikes, made to measure for every rider. Thanks to 3D printing, the product is now within reach of cyclists outside the pro peloton too. A product that personal isn't sold with a standard order button.",
    },
    approach: {
      nl: "We bouwden de website in Webflow, met een configurator waarin je in een paar stappen je Speedbar PRO samenstelt en je aanvraag doet. Daarnaast maakten we een videodocumentaire.",
      en: "We built the website in Webflow, with a configurator where you put together your Speedbar PRO in a few steps and send your request. We also made a video documentary.",
    },
    result: {
      nl: "Een website die een product van topniveau net zo zorgvuldig presenteert als het gemaakt wordt, met een aanvraag die past bij maatwerk.",
      en: "A website that presents a top-level product as carefully as it is made, with a request flow that suits made-to-measure.",
    },
    url: "https://www.speedbar.nl",
  },
];
