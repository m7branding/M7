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
      nl: "Website en B2B- en B2C-webshop voor sauzenmerk Hela, met koppelingen voor voorraad en magazijn en voor productinformatie en allergenen, recepten voor betere vindbaarheid in zoekmachines en AI, en 3D-renders en geanimeerde packshots die de flessen laten glimmen.",
      en: "Website and B2B and B2C web shop for sauce brand Hela, with integrations for stock and warehouse and for product information and allergens, recipes for better findability in search engines and AI, and 3D renders and animated packshots that make the bottles shine.",
    },
    sector: "food-retail",
    services: ["websites-webshops", "foto-video-3d-animatie", "web-apps-portals-apps", "seo-aeo-geo"],
    applications: ["wordpress-website", "webshop", "meertalige-website", "api-koppelingen", "productfotografie", "3d-visualisatie", "lottie-animaties", "motion-design", "seo", "aeo", "geo", "structured-data"],
    tools: ["wordpress", "woocommerce", "elementor", "yoast", "lottie", "schema"],
    color: "#DA020F",
    challenge: {
      nl: "Hela is de smaakmaker met sauzen, ketchups, dressings en kruiden, voor thuis en voor de foodprofessional. Twee doelgroepen met elk hun eigen manier van bestellen, een groot assortiment met veel productinformatie, en recepten die laten zien wat je ermee doet. Online moest dat net zo smakelijk ogen als op tafel.",
      en: "Hela is the flavour maker with sauces, ketchups, dressings and seasonings, for the home kitchen and for food professionals. Two audiences, each with their own way of ordering, a large range with a lot of product information, and recipes that show what you can do with it. Online, all of that had to look just as tasty as it does on the table.",
    },
    approach: {
      nl: "We bouwden een website met webshop in WordPress en WooCommerce, in het Nederlands, Engels en Frans, met een eigen shop voor consumenten en een voor foodprofessionals. De shop is gekoppeld aan voorraad en magazijn en aan de productinformatie: elke productpagina toont ingrediënten, voedingswaarden, allergenen, verpakking en specificaties zoals artikelnummer en aantal per doos, en in de professionele shop filter je op allergieën. Recepten zijn gekoppeld aan de producten en te filteren op product, toepassing, gerecht en dieetwensen. Met gestructureerde receptgegevens zijn ze beter vindbaar in zoekmachines en AI-antwoorden, en ze maken de shop meer een beleving. Voor het assortiment maakten we productshots, geanimeerde packshots en 3D-renders, zodat elke fles strak en herkenbaar in beeld staat.",
      en: "We built a website with a web shop in WordPress and WooCommerce, in Dutch, English and French, with a shop for consumers and one for food professionals. The shop is integrated with stock and warehouse and with the product information: every product page shows ingredients, nutritional values, allergens, packaging and specifications such as article number and units per box, and in the professional shop you can filter by allergies. Recipes are linked to the products and can be filtered by product, application, dish and dietary needs. With structured recipe data they are easier to find in search engines and AI answers, and they make the shop more of an experience. For the range we made product shots, animated packshots and 3D renders, so every bottle looks crisp and recognisable.",
    },
    result: {
      nl: "Eén webshop voor thuis en voor de foodprofessional, in drie talen, met voorraad en productinformatie uit de koppelingen, recepten die je van inspiratie naar bestelling brengen, en productbeelden die passen bij een merk dat draait om lekker eten.",
      en: "One web shop for the home kitchen and for food professionals, in three languages, with stock and product information from the integrations, recipes that take you from inspiration to order, and product visuals that suit a brand built around good food.",
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
      nl: "Branding en websites voor Pine Street School en Battery Park Montessori in New York, met een multifunctionele navigatie waarin ouders snel vinden wat ze zoeken. Voor Pine Street School: een contentrijke site met een schaalbare structuur voor SEO en AEO. En op beide sites koppelingen met HubSpot en Calendly.",
      en: "Branding and websites for Pine Street School and Battery Park Montessori in New York, with multifunctional navigation that helps parents find what they need, fast. For Pine Street School: a content-rich site with a scalable structure for SEO and AEO. And HubSpot and Calendly integrations on both sites.",
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
      nl: "Het werk is onderdeel van een bredere samenwerking, waarin we het digitale landschap van een grotere scholengroep opnieuw vormgeven. We werkten de branding van beide scholen uit en bouwden de websites in Webflow, op een gedeelde basis. De navigatie doet meer dan een gewoon menu: een interactief megamenu met zoeken en snelle links brengt je in een paar klikken bij toelating, rondleidingen of het lesprogramma. De contentrijke site van Pine Street School heeft daarnaast dynamische subnavigatie, instelbare zijbalken, CTA's en modulaire contentblokken, voor veel informatie over de vroege jaren, elementary en middle school, het lesprogramma, toelating, het schoolleven en de schoolgemeenschap. Een schaalbare contentstructuur helpt zoekmachines en AI-platforms de programma's, leeftijdsgroepen en toelatingsinformatie te begrijpen. Op beide sites ondersteunen koppelingen met HubSpot en Calendly vragen van ouders, CRM-workflows en het inplannen van afspraken.",
      en: "The work is part of a wider collaboration in which we are redesigning the digital landscape of a larger school group. We worked out the branding for both schools and built the websites in Webflow, on a shared foundation. The navigation does more than an ordinary menu: an interactive mega menu with search and quick links gets you to admissions, tours or the curriculum in a few clicks. The content-rich Pine Street School site also has dynamic sub-navigation, configurable sidebars, CTAs and modular content blocks, for a wealth of information about the early years, elementary and middle school, academics, admissions, student life and the school community. A scalable content structure helps search engines and AI platforms understand the programmes, age groups and admissions information. On both sites, HubSpot and Calendly integrations support enquiries from parents, CRM workflows and appointment scheduling.",
    },
    result: {
      nl: "Twee rustige, overzichtelijke schoolwebsites uit dezelfde familie, waarop ouders snel vinden wat ze zoeken en makkelijk een vraag stellen of een afspraak plannen.",
      en: "Two calm, well-organised school websites from the same family, where parents quickly find what they are looking for and can easily ask a question or book an appointment.",
    },
    url: "https://pinestreetschool.com",
  },
  // Geverifieerd via icewall.global (live site, "Website by M7") en de explorer op app.icewall.global (2026-11-03). Sector en kleur zijn een voorlopige keuze.
  {
    slug: "icewall",
    client: "Icewall",
    title: {
      nl: "Icewall: eerst het concept, dan de rest",
      en: "Icewall: concept first, then the rest",
    },
    summary: {
      nl: "Merkstrategie, concept, branding, art direction, een website en een uitgebreide interactieve explorer voor Icewall, een digitale wereld van fragmenten: ijsfragmenten ontdekken en claimen, met een volledige Stripe-koppeling, automatische mailings en de voorbereiding op NFT's.",
      en: "Brand strategy, concept, branding, art direction, a website and an extensive interactive explorer for Icewall, a digital world of fragments: discovering and claiming ice fragments, with a full Stripe integration, automated emails and the groundwork for NFTs.",
    },
    sector: "tech-saas-startups",
    services: ["branding-rebranding", "websites-webshops", "web-apps-portals-apps", "foto-video-3d-animatie", "automation-funnels", "ai-consultancy"],
    applications: ["merkstrategie", "huisstijl", "ux-ui-webdesign", "webflow-website", "api-koppelingen", "motion-design", "e-mailmarketing", "roadmap-strategie"],
    tools: ["webflow", "nextjs", "stripe", "gsap", "lottie"],
    color: "#BAE6FF",
    challenge: {
      nl: "Icewall had een sterk idee: een eindige kaart vol digitale fragmenten, die je ontdekt en claimt. Daar hoorde een merk met een duidelijk concept bij: waar sta je voor, voor wie ben je er en hoe ziet dat eruit? En een explorer waarin je die wereld echt kunt verkennen, een fragment kiest, veilig betaalt en daarna netjes wordt meegenomen. Met de blik al op wat volgt: fragmenten die later digitale collectibles worden.",
      en: "Icewall had a strong idea: a finite map full of digital fragments that you discover and claim. That called for a brand with a clear concept: what do you stand for, who are you there for and what does that look like? And an explorer where you can really explore that world, choose a fragment, pay securely and are then guided onwards. With an eye on what comes next: fragments that later become digital collectibles.",
    },
    approach: {
      nl: "We werkten de merkstrategie en het concept uit, ontwierpen de branding en zetten de art direction neer, met eigen graphics en filmische animaties. De website vertelt het verhaal: het project, de community, de roadmap, de collectibles en het goede doel. De explorer is een interactieve, visuele kaart waarop je sleept, scrollt en zoomt, je eigen fragment terugvindt en ziet wat al geclaimd is. Daar claim je ook je fragment: kiezen, je gegevens invullen en afrekenen via een volledige Stripe-koppeling, waarna automatische mailings je bevestiging en je digitale bewijs sturen. Elk fragment krijgt een eigen verwijzingslink. Op de communitypagina lees je de berichten die founders achterlieten, als lijst of op de kaart. Daarnaast bereidden we de stap naar NFT's voor, met een eigen pagina voor de Mint Machine, en maakten we de visuele en strategische roadmap voor wat nog komt: nieuwe eilanden die opengaan, digitale collectibles, communityfuncties en fysieke producten.",
      en: "We worked out the brand strategy and the concept, designed the branding and set the art direction, with custom graphics and cinematic animations. The website tells the story: the project, the community, the roadmap, the collectibles and the charity. The explorer is an interactive, visual map where you drag, scroll and zoom, locate your own fragment and see what has already been claimed. That is also where you claim your fragment: choose it, enter your details and pay through a full Stripe integration, after which automated emails send your confirmation and your digital proof. Every fragment gets its own referral link. On the community page you read the messages founders left behind, as a list or on the map. We also prepared the step to NFTs, with a dedicated page for the Mint Machine, and created the visual and strategic roadmap for what comes next: new islands to unlock, digital collectibles, community features and physical products.",
    },
    result: {
      nl: "Een digitale wereld waarin merk, verhaal, interactie en techniek samen één ervaring vormen, van de eerste klik op de kaart tot betaling, bevestiging en de volgende stap richting NFT.",
      en: "A digital world where brand, story, interaction and technology form one experience, from the first click on the map to payment, confirmation and the next step towards NFTs.",
    },
    url: "https://icewall.global",
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
      nl: "Van naam tot website: een compleet merk voor autofinancieringsplatform Silvr, met een voertuigenslider op de homepage, een aanvraagflow in vijf stappen met kentekenkoppeling en bevestigingsmail, een eigen koppeling met Teamleader, persoonlijke e-mailopvolging, landingspagina's per situatie en een explainervideo.",
      en: "From name to website: a complete brand for car financing platform Silvr, with a vehicle slider on the homepage, a five-step application flow with a licence plate lookup and a confirmation email, a custom Teamleader integration, personalised email follow-up, landing pages per situation and an explainer video.",
    },
    sector: "finance-fintech",
    services: ["branding-rebranding", "websites-webshops", "automation-funnels", "configurators-lead-tools-widgets", "foto-video-3d-animatie"],
    applications: ["naamgeving", "logo-ontwerp", "brandbook", "webflow-website", "landingspaginas", "offerte-calculator", "salesfunnels", "crm-implementatie", "lead-nurturing", "api-koppelingen"],
    tools: ["webflow", "teamleader", "gsap"],
    color: "#112032",
    challenge: {
      nl: "Soms is de omzet er wel, maar het geld nog niet: de factuur wordt pas over weken betaald. Bij Silvr verkoop je je bedrijfsvoertuig, huur je het direct terug en rijd je gewoon door. Geen lening en geen BKR-registratie. Een nieuw concept, dus er moest een nieuw merk komen dat meteen duidelijk maakt hoe het werkt.",
      en: "Sometimes the revenue is there but the cash isn't yet: the invoice only gets paid weeks later. With Silvr you sell your company vehicle, lease it straight back and simply keep driving. No loan and no credit registration. A new concept, so it needed a new brand that makes clear right away how it works.",
    },
    approach: {
      nl: "We begonnen bij de naam: Silvr, met verzilveren als rode draad in alles wat het merk zegt. Daarna volgden de logo's en een brandbook. De website bouwden we in Webflow, als één systeem van merk, techniek en conversie. Op de homepage schuif je langs de voertuigen die je kunt verzilveren. De kern is een interactieve calculator in vijf stappen, die de aanvraag in realtime persoonlijk maakt en eindigt met een bevestigingsmail in de stijl van Silvr. Je vult je kenteken in, en via een koppeling met de open data van de RDW staan merk, model, kleur en bouwjaar er meteen bij. Via de koppeling die we met Teamleader bouwden, loopt elke aanvraag direct door naar het CRM. Daar zorgen CRM-automatiseringen voor verrijkte leadgegevens en opvolging met persoonlijke e-mailreeksen, zodat het team meteen aan de slag kan. Rond die flow staan pagina's voor elke situatie, van werkkapitaal voor zzp'ers tot salarissen betalen, voor wat je aan het eind van de looptijd doet, en een blog. Een explainervideo legt het concept uit.",
      en: "We started with the name: Silvr, with turning value into cash (verzilveren, in Dutch) as the common thread in everything the brand says. The logos and a brandbook followed. We built the website in Webflow, as one system of brand, technology and conversion. On the homepage you slide past the vehicles you can cash in. At its core is an interactive five-step calculator that personalises the application in real time and ends with a confirmation email in Silvr's style. You enter your licence plate, and through a link with the RDW's open vehicle data the make, model, colour and year of manufacture appear straight away. Through the integration we built with Teamleader, every application goes straight into the CRM. There, CRM automations enrich the lead data and follow up with personalised email sequences, so the team can get to work right away. Around that flow sit pages for every situation, from working capital for freelancers to paying salaries, pages on what you do at the end of the term, and a blog. An explainer video explains the concept.",
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
      nl: "Website, funnels waarin je de brochure met investeringsgegevens aanvraagt en daarna toegang krijgt tot de besloten For Your Eyes Only-omgeving, content die in de AI-antwoorden van Google als bron wordt genoemd en campagnes op Google en LinkedIn die we beheren, voor The Sandt Investment Engineers.",
      en: "Website, funnels in which you request the brochure with the investment details and then get access to the private For Your Eyes Only environment, content that Google's AI answers cite as a source, and Google and LinkedIn campaigns that we manage, for The Sandt Investment Engineers.",
    },
    sector: "vastgoed-makelaardij",
    services: ["websites-webshops", "automation-funnels", "seo-aeo-geo", "content-marketing-online-ads"],
    applications: [
      "webflow-website",
      "landingspaginas",
      "meertalige-website",
      "salesfunnels",
      "lead-nurturing",
      "aeo",
      "geo",
      "structured-data",
      "google-ads",
      "linkedin-ads",
    ],
    tools: ["webflow", "calendly", "googleads", "linkedin"],
    color: "#6A4231",
    challenge: {
      nl: "The Sandt Investment Engineers ontwerpt sinds 2015 investeringsoplossingen in vastgoed, met vastgoedobligaties onder Nederlandse regie. Investeerders letten steeds scherper op risico, rendement en transparantie. Het verhaal moest dus helder en goed onderbouwd zijn: op de website, in de brochure en in de antwoorden van AI-zoekmachines. En wie interesse heeft, moest stap voor stap van een eerste kennismaking naar een persoonlijk gesprek kunnen.",
      en: "Since 2015, The Sandt Investment Engineers has been designing real estate investment solutions, with real estate bonds under Dutch management. Investors look ever more closely at risk, return and transparency. So the story had to be clear and well-founded: on the website, in the brochure and in the answers of AI search engines. And anyone interested had to be able to move step by step from a first introduction to a personal conversation.",
    },
    approach: {
      nl: "We bouwden de website van The Sandt in Webflow, met een eigen pagina per type investeerder (particulier, professioneel en private / family office), het trackrecord, projectupdates en een FAQ die per onderwerp is ingedeeld, in meerdere talen via Weglot. Daaromheen zetten we funnels voor de brochureaanvraag. Op de landingspagina Onderbouwd Investeren vraag je de brochure aan in een paar velden. Het weggevertje is de brochure met de investeringsgegevens: je krijgt per mail een persoonlijke toegangslink en een downloadlink, en een relatiemanager volgt de aanvraag persoonlijk op. Daarna krijg je ook toegang tot de besloten For Your Eyes Only-omgeving, waar de eerst geblurde inzichten opengaan: plattegronden, rapporten, 3D-renders en een interactieve kaart van de projectlocatie. Elk type investeerder heeft een eigen brochureformulier, en particuliere en professionele investeerders komen elk in een eigen mailfunnel. De content bouwden we zo op dat AI-zoekmachines The Sandt als bron kunnen noemen (AEO en GEO), met gestructureerde FAQ-data. En we beheren de campagnes op Google en LinkedIn die investeerders naar die funnels brengen.",
      en: "We built The Sandt's website in Webflow, with a dedicated page per type of investor (private, professional and private / family office), the track record, project updates and an FAQ organised by topic, in several languages via Weglot. Around it we set up funnels for the brochure request. On the Onderbouwd Investeren landing page you request the brochure in a few fields. The giveaway is the brochure with the investment details: you receive a personal access link and a download link by email, and a relationship manager follows up on the request personally. After that you also get access to the private For Your Eyes Only environment, where the insights that were blurred at first open up: floor plans, reports, 3D renders and an interactive map of the project location. Each type of investor has its own brochure form, and private and professional investors each enter an email funnel of their own. We structured the content so AI search engines can name The Sandt as a source (AEO and GEO), with structured FAQ data. And we manage the Google and LinkedIn campaigns that bring investors into those funnels.",
    },
    result: {
      nl: "Een website die investeerders rustig en onderbouwd informeert, funnels die een brochureaanvraag stap voor stap opvolgen tot een persoonlijk gesprek, en campagnes op Google en LinkedIn die we doorlopend beheren. Plus een merk dat in de AI-antwoorden van Google als bron wordt genoemd.",
      en: "A website that informs investors calmly and with substance, funnels that follow up a brochure request step by step up to a personal conversation, and Google and LinkedIn campaigns that we manage on an ongoing basis. Plus a brand that Google's AI answers cite as a source.",
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
      nl: "Volledige rebranding van rood naar gifgroen en shop.digitalnewsgroup.com: de marketingwebsite met een laagdrempelige WooCommerce-shop voor persplaatsingen op een selectie aan sites, zonder login of account. De shop draait op een API die alle websites, domain ratings, favicons en screenshots ophaalt, in dezelfde nieuwe look en feel als het platform, waarvan we de volledige UI/UX ontwierpen.",
      en: "A full rebrand from red to acid green and shop.digitalnewsgroup.com: the marketing website with an easy WooCommerce shop for press placements on a selection of sites, with no login or account. The shop runs on an API that fetches every website, domain rating, favicon and screenshot, in the same new look and feel as the platform, whose complete UI/UX we designed.",
    },
    sector: "zakelijke-dienstverlening",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["rebranding", "logo-ontwerp", "huisstijl", "webshop", "wordpress-website", "meertalige-website", "api-koppelingen"],
    tools: ["wordpress", "woocommerce", "elementor", "stripe"],
    color: "#A9F573",
    challenge: {
      nl: "Digital Newsgroup (DNG) is een internationaal linkbuildingbureau met eigen software en een grote database met blogs en nieuwssites. Het oude merk was rood. Plaatsingen kopen kon alleen in de applicatie, met een login en een account.",
      en: "Digital Newsgroup (DNG) is an international link building agency with its own software and a large database of blogs and news sites. The old brand was red. Buying placements was only possible in the application, with a login and an account.",
    },
    approach: {
      nl: "We voerden een volledige rebranding door, van de oude rode huisstijl en het logo naar een gifgroene branding: actief en levendig. Daarna bouwden we shop.digitalnewsgroup.com in WordPress met WooCommerce: de marketingwebsite van DNG, met een lichte shop voor persplaatsingen op een selectie aan sites uit de applicatie, zonder login of account. Een API-koppeling haalt alle websites en hun domain ratings automatisch op, met favicon en screenshot. Je filtert op prijs, verkeer, domain rating, categorie en taal, elke website heeft een eigen pagina met de cijfers en voorwaarden, en bestellen gaat in drie stappen: websites kiezen, online betalen en je tekst aanleveren of laten schrijven. De shop is er in het Nederlands, Engels, Duits, Frans en Spaans, met een kennisbank vol SEO-begrippen. De nieuwe look en feel komt ook terug in het platform, dat live staat en waarvan we in een apart project de volledige UI/UX ontwierpen, in hetzelfde groene thema.",
      en: "We carried out a full rebrand, from the old red identity and logo to an acid-green brand: active and lively. Then we built shop.digitalnewsgroup.com in WordPress with WooCommerce: DNG's marketing website, with a lightweight shop for press placements on a selection of sites from the application, with no login or account. An API integration automatically fetches every website and its domain ratings, including favicon and screenshot. You filter by price, traffic, domain rating, category and language, every website has its own page with its figures and conditions, and ordering takes three steps: choose your websites, pay online and supply your text or have it written. The shop is available in Dutch, English, German, French and Spanish, with a knowledge base full of SEO terms. The new look and feel also returns in the platform, which is live and whose complete UI/UX we designed in a separate project, in the same green theme.",
    },
    result: {
      nl: "Iedereen kan online laagdrempelig kennismaken met DNG en plaatsingen kopen zoals in elke webshop, in de nieuwe groene uitstraling die ook in het platform terugkomt.",
      en: "Anyone can get to know DNG online and buy placements like in any web shop, in the new green look that also returns in the platform.",
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
      nl: "Branding, een nieuwe website rond de klantreis en de UI/UX van de web-app waarin huurders de huurprijscheck doen en hun bestanden aanleveren, gekoppeld aan Odoo CRM. Met klantcases die de huurverlaging automatisch uitrekenen, social templates en een e-book voor Huurfix, dat huurders op no cure no pay-basis helpt aan huurverlaging.",
      en: "Branding, a new website built around the customer journey and the UI/UX of the web app in which tenants take the rent check and deliver their files, integrated with Odoo CRM. With customer cases that calculate the rent reduction automatically, social templates and an e-book for Huurfix, which helps tenants get their rent reduced on a no cure, no pay basis.",
    },
    sector: "zakelijke-dienstverlening",
    services: [
      "branding-rebranding",
      "websites-webshops",
      "web-apps-portals-apps",
      "automation-funnels",
      "configurators-lead-tools-widgets",
      "content-marketing-online-ads",
      "grafisch-ontwerp-print",
    ],
    applications: ["huisstijl", "webflow-website", "meertalige-website", "ux-ui-app-design", "salesfunnels", "crm-implementatie", "marketing-automation", "check-tools", "social-media-marketing", "brochures-magazines"],
    tools: ["webflow", "odoo"],
    color: "#FFF200",
    challenge: {
      nl: "Betaal je te veel huur, dan wil je dat weten. Maar gedoe met je verhuurder of de Huurcommissie, daar zit niemand op te wachten. Huurfix regelt het voor je: een jurist neemt het contact en de procedure over, en je betaalt pas achteraf. Dat aanbod moest simpel en betrouwbaar overkomen, en de stap van check naar dossier moest net zo makkelijk zijn.",
      en: "If you pay too much rent, you want to know. But hassle with your landlord or the Rent Tribunal is something nobody looks forward to. Huurfix sorts it out for you: a lawyer takes over the contact and the procedure, and you only pay afterwards. That offer had to come across as simple and trustworthy, and the step from check to case file had to be just as easy.",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden een nieuwe website in Webflow, in het Nederlands en Engels, rond de klantreis van een huurder: hoe het werkt, prijzen, veelgestelde vragen, klantverhalen en een kennisbank. Alles leidt naar de gratis huurprijscheck. Voor die check ontwierpen we de UI/UX van de web-app: je vult je postcode en huisnummer in, bouwjaar, energielabel, oppervlakte en WOZ-waarde worden opgezocht, en vragen over de ruimtes, de keuken en het sanitair maken het beeld compleet. Daarna lever je in dezelfde app je huurcontract en andere bestanden aan, geef je je machtiging en ga je later verder waar je was gebleven. De intake is gekoppeld aan Odoo CRM en opgesplitst in drie geautomatiseerde flows, elk met eigen CRM-logica, opvolgmails en afhandeling. Klantcases laten zien wat het oplevert: de site rekent de huurverlaging automatisch uit als percentage van de oorspronkelijke en de gecorrigeerde huurprijs, in het overzicht en op elke detailpagina. Daarnaast maakten we templates voor social media en een e-book.",
      en: "We developed the branding and built a new website in Webflow, in Dutch and English, around a tenant's customer journey: how it works, pricing, FAQs, customer stories and a knowledge base. Everything leads to the free rent check. For that check we designed the UI/UX of the web app: you enter your postcode and house number, the year of construction, energy label, floor area and WOZ value are looked up, and questions about the rooms, the kitchen and the sanitary facilities complete the picture. Then, in the same app, you upload your tenancy agreement and other files, give your authorisation and pick up later where you left off. The intake is integrated with Odoo CRM and split into three automated flows, each with its own CRM logic, follow-up emails and handling. Customer cases show what it delivers: the site automatically calculates the rent reduction as a percentage, based on the original and the corrected rent, in the overview and on every detail page. We also made social media templates and an e-book.",
    },
    result: {
      nl: "Een merk, een website en een web-app die vertrouwen geven. De check is in een paar minuten klaar, bestanden komen op één plek binnen, en aanvragen staan gekwalificeerd en geordend in Odoo. En met de social templates en het e-book kan Huurfix zelf verder.",
      en: "A brand, a website and a web app that inspire trust. The check takes just a few minutes, files come in in one place, and requests arrive in Odoo qualified and organised. And with the social templates and the e-book, Huurfix can carry on by itself.",
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
      nl: "Uitgebreide UX, abonnementen in WordPress en WooCommerce met toegang tot de University, funnels via MailerLite en Zapier met kortingscodes richting een hoger abonnement, het volledige UI/UX-ontwerp van University 2.0, een opgefriste branding en een nieuwe website voor CryptoCoinTalk.",
      en: "Extensive UX, subscriptions in WordPress and WooCommerce with access to the University, funnels via MailerLite and Zapier with discount codes towards a higher subscription, the complete UI/UX design of University 2.0, a refreshed brand and a new website for CryptoCoinTalk.",
    },
    sector: "finance-fintech",
    services: ["web-apps-portals-apps", "websites-webshops", "automation-funnels", "branding-rebranding"],
    applications: [
      "ux-ui-app-design",
      "ledenportaal-loyaliteit",
      "ux-ui-webdesign",
      "wordpress-website",
      "webshop",
      "salesfunnels",
      "e-mailmarketing",
      "rebranding",
    ],
    tools: ["wordpress", "woocommerce", "elementor", "zapier"],
    color: "#00477F",
    challenge: {
      nl: "CryptoCoinTalk helpt beginnende en gevorderde traders en investeerders met cursussen, een educatiegroep en een community. De manier waarop de abonnementen werkten moest op de schop: leden moesten makkelijk toegang krijgen tot de University, en wie eenmaal lid was, moest de weg naar een uitgebreider abonnement vinden. En het platform, de website en het merk konden ook wel een opfrisbeurt gebruiken.",
      en: "CryptoCoinTalk helps beginner and experienced traders and investors with courses, an education group and a community. The way the subscriptions worked needed an overhaul: members had to get easy access to the University, and anyone who had joined had to find their way to a more extensive subscription. And the platform, the website and the brand could do with a refresh too.",
    },
    approach: {
      nl: "We gaven de hele klantreis een uitgebreide UX-slag, van de eerste gratis kennismaking tot het abonnement. De abonnementen bouwden we opnieuw op in WordPress met WooCommerce: de educatiegroep per maand, kwartaal, half jaar of jaar, met een gratis proefperiode, naast een gratis cursus, de tradecursus, de investeringscursus, 1-op-1-sessies en cadeaukaarten. Een abonnement geeft toegang tot de University, het leerplatform met cursussen, video's, livestreams, een tradingjournal en een portfolio. Daaromheen zetten we funnels via MailerLite en Zapier, met kortingsbonnen uit de logica van WooCommerce: e-mails die leden stimuleren om stap voor stap naar een hoger abonnement te gaan. Voor University 2.0 ontwierpen we de volledige UI/UX. Ook fristen we de branding op en bouwden we een nieuwe website in dezelfde lijn.",
      en: "We gave the entire customer journey an extensive UX overhaul, from the first free introduction to the subscription. We rebuilt the subscriptions in WordPress with WooCommerce: the education group per month, quarter, half year or year, with a free trial, alongside a free course, the trading course, the investing course, one-to-one sessions and gift cards. A subscription gives access to the University, the learning platform with courses, videos, livestreams, a trading journal and a portfolio. Around it we set up funnels via MailerLite and Zapier, with coupons from WooCommerce's logic: emails that encourage members to move step by step to a higher subscription. For University 2.0 we designed the complete UI/UX. We also refreshed the branding and built a new website in the same line.",
    },
    result: {
      nl: "Een helder abonnementsmodel met directe toegang tot de University, funnels die leden stimuleren om naar een hoger abonnement te gaan, een volledig UI/UX-ontwerp voor University 2.0, een opgefrist merk en een website in dezelfde lijn.",
      en: "A clear subscription model with direct access to the University, funnels that encourage members to move to a higher subscription, a complete UI/UX design for University 2.0, a refreshed brand and a website in the same line.",
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
      nl: "Webdesigns, onder meer voor de webshop shop.grid.com, advertentiecreaties en Meta-campagnes die we beheren, voor GRID, de app en marketplace rond elektrisch rijden en laden. Ook aan het design van grid.com werkten we mee.",
      en: "Web designs, including for the shop.grid.com web shop, ad creatives and Meta campaigns that we manage, for GRID, the app and marketplace for electric driving and charging. We also contributed to the design of grid.com.",
    },
    sector: "automotive-mobiliteit",
    services: ["websites-webshops", "content-marketing-online-ads"],
    applications: ["ux-ui-webdesign", "meta-ads"],
    tools: ["meta"],
    color: "#05CD8C",
    challenge: {
      nl: "Met de GRID-app vind je laadpunten en tankstations, plan je je route en zie je waar laden of tanken het voordeligst is. Daarnaast levert GRID laadpalen, laadkabels en snelladers, voor particulieren en bedrijven. Dat alles moest online een duidelijk thuis krijgen.",
      en: "With the GRID app you find charging points and fuel stations, plan your route and see where charging or refuelling is cheapest. GRID also supplies charging stations, charging cables and fast chargers, for consumers and businesses. All of that needed a clear home online.",
    },
    approach: {
      nl: "Voor GRID maakten we vooral webdesigns, onder meer voor de webshop shop.grid.com, en we werkten mee aan het design van grid.com. Voor campagnes maakten we advertentiecreaties, zoals de banners voor het gratis aanvragen van een publiek laadpunt bij je woning. En we beheren de advertenties van GRID op Meta.",
      en: "For GRID we mainly created web designs, including for the shop.grid.com web shop, and we contributed to the design of grid.com. For campaigns we made ad creatives, such as the banners for requesting a free public charging point near your home. And we manage GRID's advertising on Meta.",
    },
    result: {
      nl: "Webdesigns en advertentiecreaties in dezelfde lijn, van shop tot banner, en Meta-campagnes die we doorlopend beheren.",
      en: "Web designs and ad creatives in the same line, from shop to banner, and Meta campaigns that we manage on an ongoing basis.",
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
      nl: "Een meertalige website voor Nexis Telebox, het systeem waarmee zorgteams patiënten thuis op afstand monitoren, met een conditionele leadflow per type zorgorganisatie en 3D-animaties van de devices en hardware in tabs.",
      en: "A multilingual website for Nexis Telebox, the system that lets care teams monitor patients remotely at home, with a conditional lead flow for each type of care organisation and 3D animations of the devices and hardware in tabs.",
    },
    sector: "zorg-welzijn",
    services: ["websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie", "seo-aeo-geo"],
    applications: ["wordpress-website", "meertalige-website", "ux-ui-webdesign", "website-widgets", "keuzehulp-quiz", "3d-visualisatie", "seo"],
    tools: ["webflow", "wordpress", "zapier"],
    color: "#6A9FCE",
    challenge: {
      nl: "Met Nexis Telebox meten patiënten thuis onder meer hun bloeddruk, hartslag en zuurstofsaturatie. Via 4G komen de metingen automatisch in het dashboard van het zorgteam. Ziekenhuizen en klinieken moesten in één keer snappen wat het is, voor wie het is en hoe het in hun bestaande systemen past.",
      en: "With Nexis Telebox, patients measure things like blood pressure, heart rate and oxygen saturation at home. The readings go automatically via 4G to the care team's dashboard. Hospitals and clinics had to understand in one go what it is, who it is for and how it fits into their existing systems.",
    },
    approach: {
      nl: "We ontwierpen de website in Webflow en zetten die over naar WordPress, in het Nederlands en Engels, met een vertaalwidget voor Duits, Frans en Spaans. Snel, overzichtelijk en opgebouwd voor SEO. De opbouw volgt de vragen van de bezoeker: waarom nu, wat is het, voor wie is het en hoe werkt de oplossing? Zo wordt complexe techniek begrijpelijk voor iedereen die meebeslist. Een eigen leadflow, de Nexis Configurator, vraagt eerst wat voor organisatie je bent: ziekenhuis, kliniek, verpleeghuis of thuiszorgorganisatie. Daarna passen de vragen en antwoorden zich aan die keuze aan, over je grootste uitdaging en wat het meeste verschil zou maken, gevolgd door het aantal patiënten voor een eerste fase en je gegevens. De antwoorden gaan via Zapier mee naar het team, zodat de demo meteen over jouw situatie gaat. Op de homepage kies je in tabs een onderdeel van de hardware: de AnyHub, de bloeddrukmeter, de weegschaal, de pulse-oximeter of de glucosemeter. Elk apparaat draait er als 3D-animatie rond, en samen met device-mockups van de whitelabel-software maakt dat het product tastbaar.",
      en: "We designed the website in Webflow and moved it over to WordPress, in Dutch and English, with a translation widget for German, French and Spanish. Fast, clear and structured for SEO. The structure follows the visitor's questions: why now, what is it, who is it for and how does the solution work? That makes complex technology understandable for everyone involved in the decision. A custom lead flow, the Nexis Configurator, first asks what kind of organisation you are: hospital, clinic, nursing home or home care organisation. The questions and answers then adapt to that choice, covering your biggest challenge and what would make the most difference, followed by the number of patients for a first phase and your details. The answers go to the team via Zapier, so the demo is about your situation from the start. On the homepage you use tabs to pick a piece of the hardware: the AnyHub, the blood pressure monitor, the scales, the pulse oximeter or the glucose meter. Each device turns there as a 3D animation, and together with device mockups of the white-label software that makes the product tangible.",
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
      nl: "Website en branding voor Maarschall Titanium: handgemaakte titanium uitlaatsystemen, met een dynamische merkencatalogus en een archief van automodellen met AI-beelden van iedere auto, en offerteaanvragen die per mail bij de gekozen dealer landen.",
      en: "Website and branding for Maarschall Titanium: handmade titanium exhaust systems, with a dynamic catalogue of makes and an archive of car models with AI images of every car, and quote requests that reach the chosen dealer by email.",
    },
    sector: "automotive-mobiliteit",
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie"],
    applications: ["huisstijl", "webflow-website", "keuzehulp-quiz", "ai-beeld-video"],
    tools: ["webflow"],
    cover: "/media/cases/titanium-exhaust.webp",
    gallery: ["/media/cases/titanium-phone.webp"],
    featured: true,
    color: "#FE0000",
    challenge: {
      nl: "Maarschall maakt handgemaakte, personaliseerbare titanium uitlaatsystemen voor onder meer McLaren, Ferrari, Lamborghini, Porsche en Audi, en levert ook via resellers. Een topproduct voor liefhebbers, dat online dezelfde klasse moest uitstralen. En een aanvraag moest bij de juiste dealer terechtkomen.",
      en: "Maarschall makes handmade, customisable titanium exhaust systems for McLaren, Ferrari, Lamborghini, Porsche and Audi, among others, and also sells through resellers. A top product for enthusiasts, which had to show the same class online. And a request had to reach the right dealer.",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow. Het hart is een dynamische merkencatalogus: met 'Vind jouw uitlaat' filter je op merk en blader je door het archief van automodellen, elk met zijn bouwjaren. Iedere auto kreeg een eigen beeld, gemaakt met AI. Bij elk model vraag je een offerte aan en kies je een reseller, en die dealer krijgt de aanvraag meteen per mail.",
      en: "We developed the branding and built the website in Webflow. At its heart is a dynamic catalogue of makes: with 'Find your exhaust' you filter by make and browse the archive of car models, each with its model years. Every car got its own image, made with AI. For each model you request a quote and choose a reseller, and that dealer receives the request by email straight away.",
    },
    result: {
      nl: "Een donkere, krachtige website waarop het vakmanschap voorop staat, liefhebbers hun auto snel terugvinden en aanvragen direct bij de gekozen dealer landen.",
      en: "A dark, powerful website that puts the craftsmanship first, helps enthusiasts find their car fast and sends requests straight to the chosen dealer.",
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
      nl: "Een website voor The Filmcar, de camera-auto voor rolling shots, met een dienstconfigurator waarin je in een paar stappen je opname samenstelt en een offerte aanvraagt.",
      en: "A website for The Filmcar, the camera car for rolling shots, with a service configurator in which you put together your shoot in a few steps and request a quote.",
    },
    sector: "sport-media",
    services: ["websites-webshops", "configurators-lead-tools-widgets"],
    applications: ["webflow-website", "ux-ui-webdesign", "productconfigurator"],
    tools: ["webflow"],
    color: "#FFB200",
    challenge: {
      nl: "The Filmcar levert rolling shots van alles wat beweegt, met een eigen camera-auto en crew. Productiebedrijven huren alleen de auto of besteden de hele productie uit. Dat verschil moest meteen duidelijk zijn, net als de weg naar een offerte.",
      en: "The Filmcar delivers rolling shots of anything that moves, with its own camera car and crew. Production companies either hire just the car or outsource the whole production. That difference had to be clear right away, and so did the route to a quote.",
    },
    approach: {
      nl: "We bouwden de website in Webflow, met het systeem, het portfolio, de werkwijze in drie stappen en de terreinen waarop de auto filmt. De offerteaanvraag is een dienstconfigurator met logica, die vanaf elke pagina opent. Wie de hele productie wil uitbesteden, gaat meteen door naar contact. Wie alleen de auto huurt, kiest daarna de apparatuur, eigen camera of die van The Filmcar, de crew, van chauffeur tot focus puller en gimbal operator, en hoe lang de auto nodig is, van een halve dag tot drie dagen of langer.",
      en: "We built the website in Webflow, with the system, the portfolio, the three-step working method and the terrains the car films on. The quote request is a service configurator with built-in logic that opens from every page. Anyone who wants to outsource the whole production goes straight to contact. Anyone hiring just the car then chooses the equipment, their own camera or The Filmcar's, the crew, from driver to focus puller and gimbal operator, and how long they need the car, from half a day to three days or more.",
    },
    result: {
      nl: "Een strakke website die laat zien wat The Filmcar kan, met een configurator die elke aanvraag compleet maakt en waarop binnen 24 uur een offerte op maat volgt.",
      en: "A sleek website that shows what The Filmcar can do, with a configurator that makes every request complete and is followed by a tailor-made quote within 24 hours.",
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
      nl: "Branding en website voor Boutique Hotels Gelderland: bijzondere hotels en locaties waar je overnacht, vergadert, trouwt of een feest viert. Met een GEO- en SEO-geoptimaliseerde contentstructuur van 'organiseren'-pagina's, één voor elke gelegenheid.",
      en: "Branding and website for Boutique Hotels Gelderland: special hotels and venues where you stay, meet, get married or throw a party. With a GEO- and SEO-optimised content structure of 'organise' pages, one for every occasion.",
    },
    sector: "travel-leisure",
    services: ["branding-rebranding", "websites-webshops", "seo-aeo-geo"],
    applications: ["huisstijl", "webflow-website", "contentstructuur", "seo", "geo"],
    tools: ["webflow"],
    color: "#D7BA8F",
    challenge: {
      nl: "Boutique Hotels Gelderland brengt bijzondere locaties samen, zoals Hotel de Wereld, Villa Ruimzicht, Villa Wanrooy en The Church. Monumentale panden, elk met een eigen karakter, maar met één gevoel en één serviceniveau. Dat moest je in het merk en op de website terugzien. En wie zoekt naar een plek om te trouwen, te vergaderen of een feest te geven in Gelderland, in Google of in een AI-assistent, moest bij die locaties uitkomen.",
      en: "Boutique Hotels Gelderland brings special venues together, such as Hotel de Wereld, Villa Ruimzicht, Villa Wanrooy and The Church. Monumental buildings, each with its own character, but with one feeling and one level of service. That had to show in the brand and on the website. And anyone searching for a place to get married, hold a meeting or throw a party in Gelderland, in Google or in an AI assistant, had to end up at those venues.",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow. De kern is een GEO- en SEO-geoptimaliseerde contentstructuur rond 'organiseren': elke gelegenheid, van trouwen, vergaderen en teambuilding tot een heisessie, gala of afscheid, heeft een eigen pagina met dezelfde heldere opbouw. Je ziet in één keer bij welke locaties het kan, met per locatie het programma of arrangement. Met de zoekbalk 'Ik ben op zoek naar een locatie voor mijn...' kies je direct je gelegenheid, en elke locatiepagina linkt terug naar de gelegenheden waarvoor die geschikt is. Een pagina over de streken van Gelderland en een contactformulier per locatie maken het af.",
      en: "We developed the branding and built the website in Webflow. At its core is a GEO- and SEO-optimised content structure built around 'organising': every occasion, from weddings, meetings and team building to a brainstorm away-day, a gala or a farewell, has its own page with the same clear structure. You see at a glance which venues can host it, with the programme or package for each venue. With the search bar 'I'm looking for a venue for my...' you pick your occasion straight away, and every venue page links back to the occasions it suits. A page on the regions of Gelderland and a contact form per venue complete the picture.",
    },
    result: {
      nl: "Eén merk voor meerdere karaktervolle locaties, met een website die je van idee naar de juiste plek brengt en een contentstructuur waarmee zoekmachines en AI-assistenten elke gelegenheid aan de juiste locatie koppelen.",
      en: "One brand for several characterful venues, with a website that takes you from idea to the right place and a content structure that helps search engines and AI assistants match every occasion to the right venue.",
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
      nl: "Branding en website voor Foodbars Gelderland: vier foodbars onder één vlag, voor lunch, borrel, diner en events. Met een GEO- en SEO-geoptimaliseerde contentstructuur van 'organiseren'-pagina's, één voor elke gelegenheid.",
      en: "Branding and website for Foodbars Gelderland: four food bars under one flag, for lunch, drinks, dinner and events. With a GEO- and SEO-optimised content structure of 'organise' pages, one for every occasion.",
    },
    sector: "travel-leisure",
    services: ["branding-rebranding", "websites-webshops", "seo-aeo-geo"],
    applications: ["huisstijl", "webflow-website", "contentstructuur", "seo", "geo"],
    tools: ["webflow"],
    color: "#526F5E",
    challenge: {
      nl: "Foodbars Gelderland bestaat uit LEV. Foodbar in Doetinchem, LEV. by Mike in Winterswijk, Gastrobar de Wereld in Wageningen en JANS' in Arnhem. Van high tea tot walking dinner en van zakelijke borrel tot bruiloft. Vier zaken onder één vlag: hoe maak je daar één merk van? En hoe zorg je dat wie een high wine, jubileum of zakelijke borrel in Gelderland zoekt, in Google of in een AI-assistent, bij een van die vier uitkomt?",
      en: "Foodbars Gelderland is made up of LEV. Foodbar in Doetinchem, LEV. by Mike in Winterswijk, Gastrobar de Wereld in Wageningen and JANS' in Arnhem. From high tea to walking dinner and from business drinks to weddings. Four places under one flag: how do you turn that into one brand? And how do you make sure that anyone looking for a high wine, an anniversary party or business drinks in Gelderland, in Google or in an AI assistant, ends up at one of those four?",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow, ingedeeld in Enjoy, Celebrate en Business. Net als bij Boutique Hotels Gelderland is de kern een GEO- en SEO-geoptimaliseerde contentstructuur met 'organiseren'-pagina's: van lunch, high tea en walking dinner tot kookworkshop, bruiloft en vergadering heeft elke gelegenheid een eigen pagina. Daarop zie je welke foodbars het kunnen verzorgen en stuur je meteen een aanvraag, met de locatie van je keuze. Met de zoekbalk 'Ik ben op zoek naar een locatie voor mijn...' kies je direct je gelegenheid. Een eventagenda met filters op gepland, verlopen en thema laat zien wat er bij de foodbars te beleven valt.",
      en: "We developed the branding and built the website in Webflow, organised into Enjoy, Celebrate and Business. As with Boutique Hotels Gelderland, at its core is a GEO- and SEO-optimised content structure of 'organise' pages: from lunch, high tea and walking dinner to a cooking workshop, wedding or meeting, every occasion has its own page. There you see which food bars can host it and send an enquiry straight away, with the venue of your choice. With the search bar 'I'm looking for a venue for my...' you pick your occasion right away. An events calendar with filters for upcoming, past and theme shows what is happening at the food bars.",
    },
    result: {
      nl: "Eén herkenbaar merk voor vier foodbars, en een website waarop je zo vindt waar je je lunch, feest of zakelijke borrel viert, met een contentstructuur die elke gelegenheid vindbaar maakt.",
      en: "One recognisable brand for four food bars, and a website where you quickly find the place for your lunch, party or business drinks, with a content structure that makes every occasion easy to find.",
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
      nl: "Website, een productconfigurator met een meelopende prijs en aanvraag in stappen, een aparte route voor maatwerk en een videodocumentaire voor Speedbar, de op maat gemaakte aerobar voor tijdritten.",
      en: "Website, a product configurator with a running price and a step-by-step request, a separate route for custom work and a video documentary for Speedbar, the made-to-measure time trial aerobar.",
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
      nl: "We bouwden de website in Webflow, met twee routes. Voor de Speedbar PRO is er een configurator met logica: in drie stappen kies je de grip, de carbon basis en de interface, telkens standaard of op maat. De prijs loopt mee met elke keuze, en aan het eind zie je je Speedbar in een overzicht en doe je je aanvraag. Voor Speedbar Tailor Made, voor tijdrit, baan en triatlon, legt de site het bestelproces uit en vraag je contact aan. Elk onderdeel heeft een eigen productpagina. Daarnaast maakten we een videodocumentaire.",
      en: "We built the website in Webflow, with two routes. For the Speedbar PRO there is a configurator with built-in logic: in three steps you choose the grip, the carbon base and the interface, each standard or custom. The price follows every choice, and at the end you see your Speedbar in an overview and send your request. For Speedbar Tailor Made, for time trial, track and triathlon, the site explains the ordering process and you request contact. Every component has its own product page. We also made a video documentary.",
    },
    result: {
      nl: "Een website die een product van topniveau net zo zorgvuldig presenteert als het gemaakt wordt, met een configurator voor de PRO en een aanvraag die past bij maatwerk.",
      en: "A website that presents a top-level product as carefully as it is made, with a configurator for the PRO and a request flow that suits made-to-measure.",
    },
    url: "https://www.speedbar.nl",
  },
  // Nieuwe case (ronde 2): M7 werkte aan de website (landingspagina's) en beheert en optimaliseert de Google Ads (owner).
  // Beeld: live screenshots van de landingspagina /implantaten-esthetisch-duurzaam/ (2026-11-04). Geen resultaten of cijfers.
  {
    slug: "mondcleanic",
    client: "MondCleanic",
    title: {
      nl: "MondCleanic: van zoekopdracht naar afspraak",
      en: "MondCleanic: from search to appointment",
    },
    summary: {
      nl: "Werk aan de website, landingspagina's per behandeling en het beheer en de optimalisatie van de Google Ads-campagnes voor MondCleanic, het centrum voor algemene en specialistische mondzorg in Noordwijk.",
      en: "Work on the website, landing pages per treatment and the management and optimisation of the Google Ads campaigns for MondCleanic, the centre for general and specialist dental care in Noordwijk.",
    },
    sector: "zorg-welzijn",
    services: ["websites-webshops", "content-marketing-online-ads"],
    applications: ["landingspaginas", "google-ads"],
    tools: ["wordpress", "googleads"],
    cover: "/media/cases/mondcleanic/cover.webp",
    screens: { desktop: "/media/cases/mondcleanic/screen-desktop.webp", mobile: "/media/cases/mondcleanic/screen-mobile.webp" },
    color: "#A5CCE8",
    challenge: {
      nl: "MondCleanic in Noordwijk brengt algemene en specialistische mondzorg onder één dak: van controles en mondhygiëne tot implantaten, wortelkanaalbehandelingen en complexe zorg. Wie online zoekt naar zo'n behandeling, moet meteen landen op een pagina die over precies die behandeling gaat, en van daaruit makkelijk een afspraak kunnen maken.",
      en: "MondCleanic in Noordwijk brings general and specialist dental care under one roof: from check-ups and oral hygiene to implants, root canal treatments and complex care. Anyone searching online for such a treatment has to land straight on a page about exactly that treatment, and be able to book an appointment easily from there.",
    },
    approach: {
      nl: "We werkten aan de website van MondCleanic, die op WordPress draait, en maakten landingspagina's per behandeling, zoals voor implantaten, een klikgebit, vullingen en wortelkanaalbehandelingen, en voor de praktijk als geheel. Elke pagina volgt dezelfde heldere opbouw: een duidelijke belofte bovenaan, de redenen om voor MondCleanic te kiezen, de specialisten die de behandeling doen en op meerdere plekken een knop om een afspraak te maken. Daarnaast beheren we de Google Ads-campagnes van MondCleanic en optimaliseren we de advertenties doorlopend, zodat wie zoekt op de juiste pagina terechtkomt.",
      en: "We worked on MondCleanic's website, which runs on WordPress, and created landing pages per treatment, such as implants, implant-retained dentures, fillings and root canal treatments, and for the practice as a whole. Every page follows the same clear structure: a clear promise at the top, the reasons to choose MondCleanic, the specialists who carry out the treatment and, in several places, a button to book an appointment. We also manage MondCleanic's Google Ads campaigns and keep optimising the ads, so that people who search end up on the right page.",
    },
    result: {
      nl: "Landingspagina's die per behandeling het verhaal vertellen en naar een afspraak leiden, en Google Ads-campagnes die we doorlopend beheren en verbeteren.",
      en: "Landing pages that tell the story for each treatment and lead to an appointment, and Google Ads campaigns that we manage and improve on an ongoing basis.",
    },
    url: "https://www.mondcleanic.nl",
  },
];
