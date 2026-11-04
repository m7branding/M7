import type { Case } from "./types";

/* ============================================================
   Cases die binnenkwamen met aangeleverde mockups (artifact "M7 Case
   Mockups" en portfolio-mockups v2). Citex AI beschrijft alleen wat de
   beelden laten zien (concept tot M7 het bevestigt); Eredivisietoppers
   en de andere vier volgen de beschrijving van M7 zelf.
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
      nl: "Eredivisietoppers: een spaaractie met voetbalplaatjes, als creatief concept",
      en: "Eredivisietoppers: a football-card savings campaign, as a creative concept",
    },
    summary: {
      nl: "Pitchdeck en creatief concept voor Eredivisietoppers, een spaaractie met voetbalplaatjes bij een supermarkt: spelerskaarten verzamelen, pakjes openen, je opstelling bouwen en duels volgen in een app.",
      en: "Pitch deck and creative concept for Eredivisietoppers, a football-card savings campaign at a supermarket: collecting player cards, opening packs, building your line-up and following duels in an app.",
    },
    sector: "sport-media",
    services: ["grafisch-ontwerp-print", "web-apps-portals-apps", "foto-video-3d-animatie"],
    applications: ["presentaties-pitchdecks", "ux-ui-app-design", "motion-design"],
    tools: [],
    color: "#E0306A",
    challenge: {
      nl: "Eredivisietoppers is een concept voor een spaaractie met voetbalplaatjes bij een supermarkt, waarbij het verzamelen doorloopt in een app. Dat idee moest in één pitch tastbaar worden: wat verzamel je, hoe speel je ermee en waarom blijf je terugkomen?",
      en: "Eredivisietoppers is a concept for a football-card savings campaign at a supermarket, in which collecting carries on in an app. That idea had to become tangible in a single pitch: what do you collect, how do you play with it and why do you keep coming back?",
    },
    approach: {
      nl: "We ontwikkelden het concept en bouwden de pitchdeck op rond de momenten die het spannend maken: een pakje openen, in brons, zilver of goud, de kaarten verzamelen, je opstelling kiezen op een 3D-veld, met formatie en tactiek, en een duel live volgen, met doelpunten en blessures. De slides tonen de schermen van de app, in rood en roze op donkerblauw. Daarbij maakten we creatieve assets, zoals animaties van een pakje dat opengaat en van kaarten rond een telefoon, en een teaser voor social media.",
      en: "We developed the concept and built the pitch deck around the moments that make it exciting: opening a pack, in bronze, silver or gold, collecting the cards, choosing your line-up on a 3D pitch, with formation and tactics, and following a duel live, with goals and injuries. The slides show the app's screens, in red and pink on dark blue. Alongside it we made creative assets, such as animations of a pack being opened and of cards circling a phone, and a teaser for social media.",
    },
    result: {
      nl: "Een pitchdeck en concept die laten voelen hoe de spaaractie speelt: op de iPad, op het grote scherm en geprint.",
      en: "A pitch deck and concept that show how the savings campaign feels to play: on the iPad, on the big screen and in print.",
    },
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
    applications: ["naamgeving", "huisstijl", "webflow-website", "visitekaartjes-drukwerk", "workflow-automatisering", "e-mailmarketing"],
    tools: ["webflow"],
    color: "#DAB671",
    challenge: {
      nl: "Onder de oude naam Budget Hearses oogde het bedrijf oranje, verouderd en goedkoop. Dat paste niet bij luxe voertuigen, van exclusieve personenbusjes tot rolstoeltoegankelijke oplossingen.",
      en: "Under the old name Budget Hearses, the company looked orange, dated and cheap. That did not fit luxury vehicles, from exclusive passenger vans to wheelchair-accessible solutions.",
    },
    approach: {
      nl: "Vanuit de nieuwe naam Nova kreeg Nova Special Cars dezelfde premium branding als Nova Funeral Cars, met eigen drukwerk. De website in Webflow toont het aanbod per voertuig en werkt de voorraad automatisch bij. Wie zijn e-mailadres achterlaat, krijgt een branded melding zodra er nieuw aanbod binnenkomt.",
      en: "From the new name Nova, Nova Special Cars received the same premium branding as Nova Funeral Cars, with its own print. The Webflow website shows the range per vehicle and updates the stock automatically. Anyone who leaves their email address gets a branded alert as soon as new stock arrives.",
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
              nl: "De website in Webflow zet elk voertuig rustig en groot in beeld. Nieuwe voorraad komt er automatisch bij, zodat het aanbod altijd klopt, en wie zijn e-mailadres achterlaat, krijgt een branded melding zodra er iets nieuws binnenkomt. Het drukwerk volgt dezelfde lijn.",
              en: "The Webflow website shows every vehicle calmly and large. New stock is added automatically, so the range is always up to date, and anyone who leaves their email address gets a branded alert as soon as something new arrives. The print follows the same line.",
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
      nl: "Een groot brandingproject: concept en naam, logosprints, strategische branding en brand guidelines, een website met portalen voor members, showroompartners en de gastvrouw, afspraakflows met logica, drukwerk en eventmaterialen, visualisaties van de interieurs, en de social media en organische content die we verzorgen.",
      en: "A major branding project: concept and name, logo sprints, strategic branding and brand guidelines, a website with portals for members, showroom partners and the host team, appointment flows with logic, print and event materials, visualisations of the interiors, and the social media and organic content we look after.",
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
      "3d-visualisatie",
      "boekingswidget",
      "workflow-automatisering",
    ],
    tools: ["webflow", "aftereffects", "cloudflare", "instagram", "linkedin"],
    color: "#D3C089",
    challenge: {
      nl: "DesignersHouse is de plek waar interieurprofessionals hun klanten meenemen in een totaalbeleving: een showroom met artikelen en materialen van topleveranciers, en ruimte voor ontvangsten, werkafspraken en presentaties. Het begon bij een idee, zonder naam en zonder merk.",
      en: "DesignersHouse is the place where interior professionals take their clients through a complete experience: a showroom with products and materials from top suppliers, and space for receptions, meetings and presentations. It started as an idea, without a name or a brand.",
    },
    approach: {
      nl: "We werkten van concept en naam via logosprints naar een strategisch merk, vastgelegd in brand guidelines met kleuren, typografie, iconografie en tone of voice. Daarna volgden de website in Webflow, veel drukwerk, brochures en eventmaterialen. De site toont de faciliteiten, de showroompartners, projecten van designers en de evenementen. Achter de site draaien portalen op Memberstack. Interieurprofessionals registreren zich als member, sparen loyaliteitspunten, krijgen toegang tot afgeschermde content en plannen in drie stappen een bezoek: eerst de klant, als je wilt met een automatische bevestiging aan de klant, dan datum, tijd, showroom (residentieel, hospitality of beide) en onderwerp, en tot slot catering en de betrokken partners. Afspraken volg je als komend, bezig, geweest of geannuleerd. Showroompartners hebben een eigen portaal met een afsprakenkalender, een plek om materiaal aan te leveren, een Partner Drive en updates, en de gastvrouw beheert alle afspraken en plant ze ook namens partners. Wie binnenloopt, registreert zijn bezoek ter plekke, met de partners die hij die dag bezoekt. Een eigen afspraken-API zorgt voor de automatische e-mails en agenda-items, volledig in de huisstijl. Met After Effects en AI maakten we geanimeerde content en ultrarealistische visualisaties van de interieurs, nog voordat het concept werkelijkheid was. En op Instagram en LinkedIn verzorgen we de social media en organische content.",
      en: "We worked from concept and name, through logo sprints, to a strategic brand set down in brand guidelines covering colours, typography, iconography and tone of voice. Then came the Webflow website, lots of print, brochures and event materials. The site presents the facilities, the showroom partners, projects by designers and the events. Behind the site run portals on Memberstack. Interior professionals register as members, collect loyalty points, get access to gated content and book a visit in three steps: first the client, with an automatic confirmation to the client if they like, then date, time, showroom (residential, hospitality or both) and topic, and finally catering and the partners involved. Appointments can be followed as upcoming, in progress, past or cancelled. Showroom partners have a portal of their own with an appointment calendar, a place to deliver material, a Partner Drive and updates, and the host team manages all appointments and also books them on behalf of partners. Walk-in visitors register their visit on the spot, with the partners they are seeing that day. A dedicated appointments API takes care of the automated emails and calendar items, fully on brand. With After Effects and AI we created animated content and ultra-realistic visualisations of the interiors, before the concept was even a reality. And on Instagram and LinkedIn we look after the social media and organic content.",
    },
    result: {
      nl: "Eén merk van idee tot showroom: online, in print, op events en op social media, met portalen die afspraken tussen designers, hun klanten en de showroompartners in goede banen leiden.",
      en: "One brand from idea to showroom: online, in print, at events and on social media, with portals that keep appointments between designers, their clients and the showroom partners on track.",
    },
    url: "https://www.designershouse.nl",
    shape: "wide",
    narrative: {
      intro: {
        nl: "Een plek voor interieurprofessionals en hun klanten. Bij DesignersHouse bouwden we alles: van de naam tot de portalen. En op social media vertellen we het verhaal verder.",
        en: "A place for interior professionals and their clients. For DesignersHouse we built everything: from the name to the portals. And on social media we keep telling the story.",
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
              nl: "De website in Webflow is de voordeur, met de faciliteiten, de showroompartners, projecten van designers en de evenementen. Daarnaast ontwierpen we veel drukwerk, brochures en eventmaterialen, en verzorgen we de social media en organische content op Instagram en LinkedIn.",
              en: "The Webflow website is the front door, with the facilities, the showroom partners, projects by designers and the events. We also designed lots of print, brochures and event materials, and we look after the social media and organic content on Instagram and LinkedIn.",
            },
          ],
        },
        {
          title: { nl: "Afspraken die vanzelf lopen.", en: "Appointments that run themselves." },
          body: [
            {
              nl: "Achter de site draaien portalen op Memberstack. Members sparen loyaliteitspunten en plannen in drie stappen een bezoek: klant, datum en tijd, en showroom, met de betrokken partners erbij en desgewenst een bevestiging aan de klant.",
              en: "Behind the site run portals on Memberstack. Members collect loyalty points and book a visit in three steps: client, date and time, and showroom, with the partners involved and, if they like, a confirmation to the client.",
            },
            {
              nl: "Showroompartners hebben een eigen portaal met een afsprakenkalender, een plek om materiaal aan te leveren en updates, en de gastvrouw plant afspraken ook namens partners. Een eigen afspraken-API stuurt de e-mails en agenda-items, volledig in de huisstijl.",
              en: "Showroom partners have a portal of their own with an appointment calendar, a place to deliver material and updates, and the host team also books appointments on behalf of partners. A dedicated appointments API sends the emails and calendar items, fully on brand.",
            },
          ],
        },
        {
          title: { nl: "Kamer voor kamer.", en: "Room by room." },
          body: [
            {
              nl: "DesignersHouse brengt high-end interieurproducten van een vaste groep showroompartners samen, één per segment, zodat architecten soepel en in samenwerking materialen kiezen, kamer voor kamer. Met After Effects en AI maakten we geanimeerde content en ultrarealistische visualisaties van de interieurs, nog voordat het concept werkelijkheid was.",
              en: "DesignersHouse brings together high-end interior products from a fixed group of showroom partners, one per segment, so architects can source materials smoothly and collaboratively, room by room. With After Effects and AI we created animated content and ultra-realistic visualisations of the interiors, before the concept was even a reality.",
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
      nl: "Branding voor Green Ivy als organisatie en een rebranding van al hun scholen en websites, met een nieuwe sitemap en contentstructuur, interactieve navigatie, zoekfuncties, AEO en JSON-LD, en koppelingen met HubSpot en Calendly. Het zusterproject van Pine Street School.",
      en: "Branding for Green Ivy as an organisation and a rebrand of all its schools and websites, with a new sitemap and content structure, interactive navigation, search, AEO and JSON-LD, and HubSpot and Calendly integrations. The sister project of Pine Street School.",
    },
    sector: "educatie-scholen",
    services: ["branding-rebranding", "websites-webshops", "seo-aeo-geo", "automation-funnels", "configurators-lead-tools-widgets"],
    applications: ["rebranding", "huisstijl", "webflow-website", "ux-ui-webdesign", "contentstructuur", "aeo", "structured-data", "crm-implementatie", "boekingswidget"],
    tools: ["webflow", "hubspot", "calendly"],
    color: "#2B5A8A",
    challenge: {
      nl: "Battery Park Montessori, aan de Hudson in Lower Manhattan, is een drietalige Montessorischool voor kinderen van 1 tot 5 jaar. De school hoort bij Green Ivy, net als Pine Street School. Er was veel informatie voor ouders en leerlingen, maar zonder heldere structuur.",
      en: "Battery Park Montessori, on the Hudson in Lower Manhattan, is a trilingual Montessori school for children aged 1 to 5. The school is part of Green Ivy, like Pine Street School. There was a lot of information for parents and students, but no clear structure.",
    },
    approach: {
      nl: "We gaven Green Ivy als organisatie een merk en voerden een rebranding door voor al hun scholen en websites. De sitemap en contentstructuur gingen op de schop: een CMS-structuur, interactieve en sticky navigatie, zoekfuncties, een dynamische inhoudsopgave en AEO met JSON-LD-schema's. Net als bij Pine Street School ondersteunen koppelingen met HubSpot en Calendly vragen van ouders, CRM-workflows en het inplannen van afspraken.",
      en: "We gave Green Ivy as an organisation a brand and rebranded all of its schools and websites. The sitemap and content structure were rebuilt: a CMS structure, interactive and sticky navigation, search, a dynamic table of contents and AEO with JSON-LD schemas. As with Pine Street School, HubSpot and Calendly integrations support enquiries from parents, CRM workflows and appointment scheduling.",
    },
    result: {
      nl: "Gestructureerde schoolsites waarop ouders en leerlingen van de New Yorkse privéscholen snel vinden wat ze zoeken, ook via zoekmachines en AI-assistenten, en makkelijk een vraag stellen of een afspraak plannen.",
      en: "Structured school sites where parents and students of the New York private schools quickly find what they need, also through search engines and AI assistants, and can easily ask a question or book an appointment.",
    },
    url: "https://batteryparkmontessori.com",
    shape: "wide",
  },
];
