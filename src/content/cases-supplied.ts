import type { Case } from "./types";

/* ============================================================
   Cases die binnenkwamen met aangeleverde mockups (artifact "M7 Case
   Mockups" en portfolio-mockups v2). Citex AI en Eredivisietoppers
   beschrijven alleen wat de beelden laten zien (concept tot M7 ze
   bevestigt); de andere vier volgen de beschrijving van M7 zelf.
   Beeld en films: supplied-media.ts en portfolio-v2.ts.
   ============================================================ */

export const suppliedCases: Case[] = [
  {
    slug: "citex-ai",
    client: "Citex AI",
    title: {
      nl: "Citex AI: gebiedsdata van de stad in één dashboard",
      en: "Citex AI: a city's area data in one dashboard",
    },
    summary: {
      nl: "Dashboardontwerp voor Citex AI: per stadsdeel de KPI's en duurzaamheidsindicatoren naast een 3D-kaart van de stad, op een groot scherm en op de tablet.",
      en: "Dashboard design for Citex AI: per district, the KPIs and sustainability indicators next to a 3D map of the city, on a large screen and on a tablet.",
    },
    sector: "tech-saas-startups",
    services: ["web-apps-portals-apps"],
    applications: ["dashboards", "ux-ui-app-design"],
    tools: [],
    color: "#1A90C0",
    challenge: {
      nl: "Citex AI brengt informatie over de stad per gebied samen. Die moest in één oogopslag leesbaar zijn: hoe staat een stadsdeel ervoor, en waar op de kaart ligt het?",
      en: "Citex AI brings together information about the city, area by area. It had to be readable at a glance: how is a district doing, and where on the map is it?",
    },
    approach: {
      nl: "We ontwierpen een donker, rustig dashboard rond een 3D-kaart van de stad. Per gebied staan de KPI's en duurzaamheidsindicatoren direct naast de kaart, zodat cijfer en plek altijd bij elkaar horen.",
      en: "We designed a dark, calm dashboard around a 3D map of the city. For each area the KPIs and sustainability indicators sit right next to the map, so figure and place always belong together.",
    },
    result: {
      nl: "Een interface die veel gebiedsdata overzichtelijk maakt, op een groot scherm én op de tablet.",
      en: "An interface that makes a lot of area data easy to read, on a large screen and on a tablet.",
    },
    concept: true,
    shape: "wide",
  },
  {
    slug: "eredivisietoppers",
    client: "Eredivisietoppers",
    title: {
      nl: "Eredivisietoppers: spelerskaarten van de supermarkt naar je app",
      en: "Eredivisietoppers: player cards from the supermarket to your app",
    },
    summary: {
      nl: "App-presentatie en pitchdeck voor Eredivisietoppers: spelerskaarten van Eredivisie-spelers verzamelen, spelerspakketten openen, je droomopstelling bouwen en duels volgen in live verslagen.",
      en: "App presentation and pitch deck for Eredivisietoppers: collect player cards of Eredivisie players, open player packs, build your dream line-up and follow duels in live reports.",
    },
    sector: "sport-media",
    services: ["grafisch-ontwerp-print"],
    applications: ["presentaties-pitchdecks"],
    tools: [],
    color: "#E0306A",
    challenge: {
      nl: "Eredivisietoppers brengt het verzamelen van spelerskaarten naar een app. Dat idee moest in één presentatie tastbaar worden: wat verzamel je, hoe speel je ermee en waarom blijf je terugkomen?",
      en: "Eredivisietoppers takes collecting player cards into an app. That idea had to become tangible in a single presentation: what do you collect, how do you play with it and why do you keep coming back?",
    },
    approach: {
      nl: "We bouwden de presentatie op rond de momenten die het spel spannend maken: een pakket openen, de kaarten verzamelen, je opstelling kiezen en een duel live volgen. Elke slide toont het echte scherm uit de app, in de rode en roze huisstijl van Eredivisietoppers.",
      en: "We built the presentation around the moments that make the game exciting: opening a pack, collecting the cards, choosing your line-up and following a duel live. Every slide shows the real screen from the app, in Eredivisietoppers' red and pink identity.",
    },
    result: {
      nl: "Een app-presentatie die het concept laat zien zoals het voelt om het te spelen, op de iPad, op het grote scherm en geprint.",
      en: "An app presentation that shows the concept the way it feels to play it, on the iPad, on the big screen and in print.",
    },
    concept: true,
    shape: "wide",
  },
  {
    slug: "nova-special-cars",
    client: "Nova Special Cars",
    title: {
      nl: "Nova Special Cars: het zusterlabel in dezelfde premium lijn",
      en: "Nova Special Cars: the sister label in the same premium line",
    },
    summary: {
      nl: "Branding, drukwerk en een website met automatische voorraadupdates voor Nova Special Cars, het zusterbedrijf van Nova Funeral Cars. Onderdeel van de rebranding van Budget Hearses naar Nova.",
      en: "Branding, print and a website with automatic stock updates for Nova Special Cars, the sister company of Nova Funeral Cars. Part of the rebrand from Budget Hearses to Nova.",
    },
    sector: "automotive-mobiliteit",
    services: ["branding-rebranding", "websites-webshops", "grafisch-ontwerp-print", "automation-funnels"],
    applications: ["naamgeving", "huisstijl", "webflow-website", "visitekaartjes-drukwerk", "workflow-automatisering"],
    tools: ["webflow"],
    color: "#DAB671",
    challenge: {
      nl: "Onder de oude naam Budget Hearses oogde het bedrijf oranje, verouderd en goedkoop. Dat paste niet bij luxe voertuigen, van exclusieve personenbusjes tot rolstoeltoegankelijke oplossingen.",
      en: "Under the old name Budget Hearses, the company looked orange, dated and cheap. That did not fit luxury vehicles, from exclusive passenger vans to wheelchair-accessible solutions.",
    },
    approach: {
      nl: "Vanuit de nieuwe naam Nova kreeg Nova Special Cars dezelfde premium branding als Nova Funeral Cars, met eigen drukwerk. De website in Webflow toont het aanbod per voertuig en werkt de voorraad automatisch bij.",
      en: "From the new name Nova, Nova Special Cars received the same premium branding as Nova Funeral Cars, with its own print. The Webflow website shows the range per vehicle and updates the stock automatically.",
    },
    result: {
      nl: "Een luxe, prestigieus en vertrouwd merk, met een website waarop nieuwe voorraad vanzelf verschijnt.",
      en: "A luxurious, prestigious and trusted brand, with a website where new stock appears by itself.",
    },
    url: "https://www.novaspecialcars.eu",
    shape: "wide",
    narrative: {
      intro: {
        nl: "Van Budget Hearses naar Nova. Ook het zusterbedrijf kreeg een merk dat past bij luxe vervoer.",
        en: "From Budget Hearses to Nova. The sister company got a brand that fits luxury transport too.",
      },
      chapters: [
        {
          title: { nl: "Van oranje naar Nova.", en: "From orange to Nova." },
          body: [
            {
              nl: "Budget Hearses oogde oranje, verouderd en goedkoop. Met de nieuwe naam Nova kwam er een merk dat luxe, prestige en vertrouwen uitstraalt: Nova Funeral Cars voor rouwauto's, Nova Special Cars voor exclusieve personenbusjes en rolstoeltoegankelijke oplossingen.",
              en: "Budget Hearses looked orange, dated and cheap. The new name Nova brought a brand that radiates luxury, prestige and trust: Nova Funeral Cars for hearses, Nova Special Cars for exclusive passenger vans and wheelchair-accessible solutions.",
            },
          ],
        },
        {
          title: { nl: "Voorraad die zichzelf bijwerkt.", en: "Stock that updates itself." },
          body: [
            {
              nl: "De website in Webflow zet elk voertuig rustig en groot in beeld. Nieuwe voorraad komt er automatisch bij, zodat het aanbod altijd klopt. Het drukwerk volgt dezelfde lijn.",
              en: "The Webflow website shows every vehicle calmly and large. New stock is added automatically, so the range is always up to date. The print follows the same line.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "designers-house",
    client: "DesignersHouse",
    title: {
      nl: "DesignersHouse: van naam tot platform voor interieurprofessionals",
      en: "DesignersHouse: from name to platform for interior professionals",
    },
    summary: {
      nl: "Een groot brandingproject: concept en naam, logosprints, strategische branding en brand guidelines, een website met twee portalen, drukwerk en eventmaterialen, en contentmarketing op Instagram en LinkedIn.",
      en: "A major branding project: concept and name, logo sprints, strategic branding and brand guidelines, a website with two portals, print and event materials, and content marketing on Instagram and LinkedIn.",
    },
    sector: "interieur-architectuur",
    services: [
      "branding-rebranding",
      "websites-webshops",
      "web-apps-portals-apps",
      "grafisch-ontwerp-print",
      "content-marketing-online-ads",
      "foto-video-3d-animatie",
      "configurators-lead-tools-widgets",
      "automation-funnels",
    ],
    applications: [
      "merkstrategie",
      "naamgeving",
      "logo-ontwerp",
      "brandbook",
      "tone-of-voice",
      "webflow-website",
      "ledenportaal-loyaliteit",
      "brochures-magazines",
      "beurs-signing",
      "social-media-marketing",
      "motion-design",
      "ai-beeld-video",
      "boekingswidget",
      "workflow-automatisering",
    ],
    tools: ["webflow", "aftereffects"],
    color: "#D3C089",
    challenge: {
      nl: "DesignersHouse is de plek waar interieurprofessionals hun klanten meenemen in een totaalbeleving: een showroom met artikelen en materialen van topleveranciers, en ruimte voor ontvangsten, werkafspraken en presentaties. Het begon bij een idee, zonder naam en zonder merk.",
      en: "DesignersHouse is the place where interior professionals take their clients through a complete experience: a showroom with products and materials from top suppliers, and space for receptions, meetings and presentations. It started as an idea, without a name or a brand.",
    },
    approach: {
      nl: "We werkten van concept en naam via logosprints naar een strategisch merk, vastgelegd in brand guidelines. Daarna volgden de website, twee portalen (voor designers en voor showroompartners), veel drukwerk, brochures en eventmaterialen, en contentmarketing op Instagram en LinkedIn. De richtlijnen leggen kleuren, typografie, iconografie en tone of voice vast. Met After Effects en AI maakten we geanimeerde content en ultrarealistische renders van de ruimtes, nog voordat het concept werkelijkheid was. Het portaal draait op Memberstack, met registratie, inloggen, loyaliteitspunten, afgeschermde content en exclusieve materialen. En een boekingsflow met automatische e-mails en agenda-items, voor interieurprofessionals en hun klanten, volledig in de huisstijl.",
      en: "We worked from concept and name, through logo sprints, to a strategic brand set down in brand guidelines. Then came the website, two portals (for designers and for showroom partners), lots of print, brochures and event materials, and content marketing on Instagram and LinkedIn. The guidelines set out colours, typography, iconography and tone of voice. With After Effects and AI we created animated content and ultra-realistic renders of the rooms, before the concept was even a reality. The portal runs on Memberstack, with registration, login, loyalty points, gated content and exclusive materials. And a booking flow with automated emails and calendar items, for interior professionals and their clients, fully on brand.",
    },
    result: {
      nl: "Eén merk van idee tot showroom: online, in print, op events en op social media.",
      en: "One brand from idea to showroom: online, in print, at events and on social media.",
    },
    url: "https://www.designershouse.nl",
    shape: "wide",
    narrative: {
      intro: {
        nl: "Een plek voor interieurprofessionals en hun klanten. Bij DesignersHouse bouwden we alles: van de naam tot de portalen.",
        en: "A place for interior professionals and their clients. For DesignersHouse we built everything: from the name to the portals.",
      },
      chapters: [
        {
          title: { nl: "Eerst een naam.", en: "A name first." },
          body: [
            {
              nl: "Het begon bij een concept. We bedachten de naam, werkten in logosprints naar het beeldmerk en legden de strategische branding vast in brand guidelines. Zo staat elke volgende stap op hetzelfde fundament.",
              en: "It started with a concept. We came up with the name, worked through logo sprints towards the mark and set down the strategic branding in brand guidelines. That way every next step stands on the same foundation.",
            },
          ],
        },
        {
          title: { nl: "Online, in print, op events.", en: "Online, in print, at events." },
          body: [
            {
              nl: "De website in Webflow is de voordeur, met twee portalen erachter: één voor designers en één voor showroompartners. Daarnaast ontwierpen we veel drukwerk, brochures en eventmaterialen, en verzorgen we contentmarketing op Instagram en LinkedIn.",
              en: "The Webflow website is the front door, with two portals behind it: one for designers and one for showroom partners. We also designed lots of print, brochures and event materials, and run content marketing on Instagram and LinkedIn.",
            },
          ],
        },
        {
          title: { nl: "Kamer voor kamer.", en: "Room by room." },
          body: [
            {
              nl: "DesignersHouse brengt high-end interieurproducten van meer dan 18 partners samen, zodat architecten soepel en in samenwerking materialen kiezen, kamer voor kamer. Met After Effects en AI maakten we geanimeerde content en ultrarealistische renders van de ruimtes, nog voordat het concept werkelijkheid was.",
              en: "DesignersHouse brings together high-end interior products from more than 18 partners, so architects can source materials smoothly and collaboratively, room by room. With After Effects and AI we created animated content and ultra-realistic renders of the rooms, before the concept was even a reality.",
            },
            {
              nl: "Het portaal draait op Memberstack, met registratie, inloggen, loyaliteitspunten, afgeschermde content en exclusieve materialen. Een boekingsflow stuurt automatische e-mails en agenda-items, aan interieurprofessionals en aan hun klanten, volledig in de huisstijl.",
              en: "The portal runs on Memberstack, with registration, login, loyalty points, gated content and exclusive materials. A booking flow sends automated emails and calendar items, to interior professionals and to their clients, fully on brand.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "onderbouwd-investeren",
    client: "Onderbouwd Investeren",
    title: {
      nl: "Onderbouwd Investeren: een funnel voor investeerders van The Sandt",
      en: "Onderbouwd Investeren: an investor funnel for The Sandt",
    },
    summary: {
      nl: "Gerichte landingspagina, Google en LinkedIn Ads en een funnel voor investeerders, met een digitale brochure-aanvraag, conversieoptimalisatie en doorlopend zoekwoordonderzoek. Onderdeel van The Sandt.",
      en: "A targeted landing page, Google and LinkedIn Ads and an investor funnel, with a digital brochure request, conversion optimisation and ongoing keyword research. Part of The Sandt.",
    },
    sector: "vastgoed-makelaardij",
    services: ["websites-webshops", "content-marketing-online-ads", "automation-funnels", "seo-aeo-geo"],
    applications: ["landingspaginas", "webflow-website", "google-ads", "linkedin-ads", "salesfunnels", "conversie-optimalisatie", "seo"],
    tools: ["webflow"],
    color: "#BE8A33",
    challenge: {
      nl: "The Sandt biedt internationale vastgoedproducten onder Nederlandse regie. Voor investeerders was er een eigen ingang nodig: één plek die uitlegt wat The Sandt doet en die leidt naar een brochure-aanvraag.",
      en: "The Sandt offers international real-estate products under Dutch management. Investors needed their own entry point: one place that explains what The Sandt does and leads to a brochure request.",
    },
    approach: {
      nl: "We bouwden een gerichte landingspagina in Webflow met een digitale brochure-aanvraag (pdf) en zetten er Google en LinkedIn Ads op, als funnel voor investeerders. Met doorlopend zoekwoordonderzoek en conversieoptimalisatie scherpen we de campagnes en de pagina steeds verder aan.",
      en: "We built a targeted landing page in Webflow with a digital brochure request (PDF) and ran Google and LinkedIn Ads to it, as an investor funnel. Ongoing keyword research and conversion optimisation keep sharpening the campaigns and the page.",
    },
    result: {
      nl: "Een vaste route voor investeerders: van advertentie naar landingspagina naar brochure, en daarna het gesprek met The Sandt.",
      en: "A fixed route for investors: from ad to landing page to brochure, and then the conversation with The Sandt.",
    },
    url: "https://onderbouwdinvesteren.nl",
    shape: "wide",
  },
  {
    slug: "battery-park-montessori",
    client: "Battery Park Montessori",
    title: {
      nl: "Battery Park Montessori: een schoolsite met structuur",
      en: "Battery Park Montessori: a school site with structure",
    },
    summary: {
      nl: "Branding voor Green Ivy als organisatie en een rebranding van al hun scholen en websites, met een nieuwe sitemap en contentstructuur, interactieve navigatie, zoekfuncties, AEO en JSON-LD. Het zusterproject van Pine Street School.",
      en: "Branding for Green Ivy as an organisation and a rebrand of all its schools and websites, with a new sitemap and content structure, interactive navigation, search, AEO and JSON-LD. The sister project of Pine Street School.",
    },
    sector: "educatie-scholen",
    services: ["branding-rebranding", "websites-webshops", "seo-aeo-geo"],
    applications: ["rebranding", "huisstijl", "webflow-website", "ux-ui-webdesign", "contentstructuur", "aeo", "structured-data"],
    tools: ["webflow"],
    color: "#2B5A8A",
    challenge: {
      nl: "Battery Park Montessori, aan de Hudson in Lower Manhattan, is een drietalige Montessorischool voor kinderen van 1 tot 5 jaar. De school hoort bij Green Ivy, net als Pine Street School. Er was veel informatie voor ouders en leerlingen, maar zonder heldere structuur.",
      en: "Battery Park Montessori, on the Hudson in Lower Manhattan, is a trilingual Montessori school for children aged 1 to 5. The school is part of Green Ivy, like Pine Street School. There was a lot of information for parents and students, but no clear structure.",
    },
    approach: {
      nl: "We gaven Green Ivy als organisatie een merk en voerden een rebranding door voor al hun scholen en websites. De sitemap en contentstructuur gingen op de schop: een CMS-structuur, interactieve en sticky navigatie, zoekfuncties, een dynamische inhoudsopgave en AEO met JSON-LD-schema's.",
      en: "We gave Green Ivy as an organisation a brand and rebranded all of its schools and websites. The sitemap and content structure were rebuilt: a CMS structure, interactive and sticky navigation, search, a dynamic table of contents and AEO with JSON-LD schemas.",
    },
    result: {
      nl: "Gestructureerde schoolsites waarop ouders en leerlingen van de New Yorkse privéscholen snel vinden wat ze zoeken, ook via zoekmachines en AI-assistenten.",
      en: "Structured school sites where parents and students of the New York private schools quickly find what they need, also through search engines and AI assistants.",
    },
    url: "https://batteryparkmontessori.com",
    shape: "wide",
  },
];
