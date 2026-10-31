/* ============================================================
   Nieuwe cases (ronde 10, deel A): de projectlijst van de klant,
   van TOY4Participation tot en met Alpacafarm Vorstenbosch.
   Teksten = de scope uit de projectlijst + wat er op de live
   website van de klant staat. Geen jaartallen (onbekend), geen
   cijfers of resultaten die we niet kunnen onderbouwen.
   Beelden komen uit de mockup-pipeline (generated/case-media.ts).
   ============================================================ */

import type { Case } from "./types";

export const newCasesA: Case[] = [
  {
    slug: "toy4participation",
    client: "TOY4Participation",
    title: {
      nl: "TOY4Participation: van merk tot online quest",
      en: "TOY4Participation: from brand to online quest",
    },
    summary: {
      nl: "Voor TOY4Participation, een Europees project binnen het netwerk van ISSA, maakten we de branding, de website en een interactieve quest over kinderparticipatie, met een community wall waar deelnemers hun ervaringen delen.",
      en: "For TOY4Participation, a European project within the ISSA network, we created the branding, the website and an interactive quest about child participation, with a community wall where participants share their experiences.",
    },
    sector: "educatie-scholen",
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "automation-funnels"],
    applications: ["huisstijl", "webflow-website", "meertalige-website", "keuzehulp-quiz", "salesfunnels"],
    tools: ["webflow"],
    color: "#5EA6A3",
    challenge: {
      nl: "TOY4Participation is een Europees project binnen het netwerk van ISSA, de International Step by Step Association. Het zet zich in voor kinderparticipatie: ook de allerjongsten mogen meepraten over wat hen aangaat, in de kinderopvang en in Play Hubs in de buurt. Dat verhaal moest ouders van jonge kinderen bereiken. En liefst zo dat ze meedoen, in plaats van alleen te lezen.",
      en: "TOY4Participation is a European project within the network of ISSA, the International Step by Step Association. It champions child participation: even the youngest children get a say in what affects them, in early childhood settings and in local Play Hubs. That story had to reach parents of young children. Ideally in a way that gets them to take part, not just read.",
    },
    approach: {
      nl: "We gaven TOY4Participation een eigen huisstijl en bouwden de website. Het hart is een interactieve quest. Op een kaart volg je een paar korte hoofdstukken: wat is kinderparticipatie, waarom doet het ertoe en hoe ziet het er in het dagelijks leven uit? Onderweg deel je je eigen ervaringen. Die komen samen op een community wall, waar je ziet wat anderen al doen en wat ze graag willen proberen. Zo werkt de quest als engagement funnel: van eerste klik tot actieve deelnemer. De quest is in meerdere talen te volgen.",
      en: "We gave TOY4Participation its own visual identity and built the website. At its heart is an interactive quest. On a map you follow a few short chapters: what is child participation, why does it matter and what does it look like in everyday life? Along the way you share your own experiences. They come together on a community wall, where you see what others already do and what they would like to try. That makes the quest an engagement funnel: from first click to active participant. The quest is available in several languages.",
    },
    result: {
      nl: "Een eigen merk, een website en een meertalige quest die bezoekers stap voor stap meeneemt en hun ervaringen zichtbaar maakt op de community wall.",
      en: "A brand of its own, a website and a multilingual quest that takes visitors along step by step and makes their experiences visible on the community wall.",
    },
    url: "https://toy-treasure-hunt.reyn.eu",
  },
  {
    slug: "chavore",
    client: "CHAVORE",
    title: {
      nl: "CHAVORE: een speurtocht over het welzijn van jonge kinderen",
      en: "CHAVORE: a treasure hunt about young children's well-being",
    },
    summary: {
      nl: "Voor CHAVORE, het ISSA-initiatief voor het mentale welzijn van jonge kinderen, maakten we een speurtocht-variant van de online ervaring: een korte, meertalige quest voor iedereen die met jonge kinderen werkt.",
      en: "For CHAVORE, the ISSA initiative for young children's mental well-being, we built a treasure-hunt version of the online experience: a short, multilingual quest for everyone who works with young children.",
    },
    sector: "educatie-scholen",
    services: ["websites-webshops", "configurators-lead-tools-widgets", "automation-funnels"],
    applications: ["webflow-website", "meertalige-website", "keuzehulp-quiz", "salesfunnels"],
    tools: ["webflow"],
    color: "#F9B037",
    challenge: {
      nl: "CHAVORE (Romani voor 'kinderen') is een initiatief binnen ISSA voor de mentale gezondheid en het welzijn van kinderen van 0 tot 6 jaar, vooral in kwetsbare gemeenschappen zoals Roma. Partners in vijf landen werken eraan mee. De vraag: hoe breng je die kennis bij professionals, op een manier die blijft hangen?",
      en: "CHAVORE (Romani for 'children') is an ISSA initiative for the mental health and well-being of children aged 0 to 6, especially in vulnerable communities such as Roma. Partners in five countries take part. The question: how do you bring that knowledge to professionals in a way that sticks?",
    },
    approach: {
      nl: "We namen de online ervaring van TOY4Participation als basis en maakten er een speurtocht van in de stijl van CHAVORE. Een paar korte hoofdstukken op een kaart, met bij elk de vraag welke aanpak je wilt proberen of vaker wilt doen. De antwoorden komen samen in een community-deel, zodat je ziet hoe anderen het aanpakken. Zo werkt ook deze quest als engagement funnel. Hij is te volgen in het Engels en in de talen van de partnerlanden.",
      en: "We took the TOY4Participation online experience as a starting point and turned it into a treasure hunt in CHAVORE's style. A few short chapters on a map, each asking which practices you would like to try or do more of. The answers come together in a community section, so you see how others approach it. This quest works as an engagement funnel too. It is available in English and in the languages of the partner countries.",
    },
    result: {
      nl: "Een korte, speelse quest die professionals laat nadenken over hun eigen praktijk en hun ideeën laat delen met anderen.",
      en: "A short, playful quest that gets professionals thinking about their own practice and sharing their ideas with others.",
    },
    url: "https://chavore-quest.issa.nl/en",
  },
  {
    slug: "issa",
    client: "ISSA",
    title: {
      nl: "ISSA: één website voor een internationaal netwerk",
      en: "ISSA: one website for an international network",
    },
    summary: {
      nl: "De website van ISSA, de International Step by Step Association: het netwerk dat zich in Europa en Centraal-Azië inzet voor goede kansen voor jonge kinderen.",
      en: "The website of ISSA, the International Step by Step Association: the network working across Europe and Central Asia for better opportunities for young children.",
    },
    sector: "educatie-scholen",
    services: ["websites-webshops"],
    applications: ["webflow-website", "ux-ui-webdesign"],
    tools: ["webflow"],
    color: "#F9B022",
    challenge: {
      nl: "ISSA verbindt organisaties en professionals in Europa en Centraal-Azië die werken aan betere zorg en educatie voor jonge kinderen. Er gebeurt veel: initiatieven, nieuws, events, een jaarlijkse conferentie, een kennisbank en een ledennetwerk. Al die inhoud moest een logisch thuis krijgen.",
      en: "ISSA connects organisations and professionals across Europe and Central Asia who work on better care and education for young children. A lot is going on: initiatives, news, events, a conference, a knowledge hub and a member network. All that content needed a logical home.",
    },
    approach: {
      nl: "We maakten de website van ISSA, met een heldere structuur voor de vaste onderdelen van het netwerk: wie ISSA is, de initiatieven, samen leren via de kennisbank en de conferentie, en lid worden. Nieuws en events staan vooraan, zodat bezoekers meteen zien wat er in het netwerk speelt.",
      en: "We created the ISSA website, with a clear structure for the network's core parts: who ISSA is, the initiatives, collective learning through the knowledge hub and the conference, and joining. News and events come first, so visitors see straight away what is happening in the network.",
    },
    result: {
      nl: "Eén overzichtelijke website voor het hele netwerk, met ruimte voor de vele initiatieven, het nieuws en de events van ISSA.",
      en: "One clear website for the whole network, with room for ISSA's many initiatives, news and events.",
    },
    url: "https://issa.nl",
  },
  {
    slug: "ecos",
    client: "ECOS",
    title: {
      nl: "ECOS Collaboratives: één merk, veel samenwerkingen",
      en: "ECOS Collaboratives: one brand, many collaborations",
    },
    summary: {
      nl: "Voor ECOS, het instituut van ISSA voor iedereen die met jonge kinderen werkt, werkten we de co-branding van de ECOS Collaboratives uit: merkstrategie, richtlijnen in een brandbook, de Fatherhood Collaborative als eerste voorbeeld, webdesign en animatievideo's.",
      en: "For ECOS, ISSA's institute for everyone working with young children, we developed the co-branding of the ECOS Collaboratives: brand strategy, guidelines in a brandbook, the Fatherhood Collaborative as the first example, web design and animated videos.",
    },
    sector: "educatie-scholen",
    services: ["branding-rebranding", "websites-webshops", "foto-video-3d-animatie"],
    applications: ["merkstrategie", "brandbook", "huisstijl", "ux-ui-webdesign", "motion-design"],
    tools: [],
    color: "#F8B21E",
    challenge: {
      nl: "Het ECOS Institute is het leer- en samenwerkingsplatform van ISSA: cursussen, een community en samenwerkingsverbanden rond jonge kinderen. Binnen ECOS ontstaan Collaboratives, groepen partners die samen aan één thema werken. Elke Collaborative wil herkenbaar zijn, en toch moet je zien dat hij bij ECOS hoort.",
      en: "The ECOS Institute is ISSA's platform for learning and collaboration: courses, a community and partnerships around young children. Within ECOS, Collaboratives emerge: groups of partners working together on one theme. Each Collaborative wants to be recognisable, yet it should be clear that it belongs to ECOS.",
    },
    approach: {
      nl: "We begonnen bij de merkstrategie: hoe verhouden ECOS en de Collaboratives zich tot elkaar? Daaruit volgde een co-brandingsysteem, vastgelegd in algemene richtlijnen en een brandbook. De Fatherhood Collaborative werkten we als eerste helemaal uit, als voorbeeld voor wat volgt. Daarnaast ontwierpen we de website van het ECOS Institute en maakten we animatievideo's.",
      en: "We started with brand strategy: how do ECOS and the Collaboratives relate to each other? That led to a co-branding system, captured in general guidelines and a brandbook. We worked out the Fatherhood Collaborative in full first, as an example for what follows. We also designed the ECOS Institute website and made animated videos.",
    },
    result: {
      nl: "Een merkfundament waar nieuwe Collaboratives op kunnen aansluiten, een volledig uitgewerkt voorbeeld, een webdesign voor het ECOS Institute en animatievideo's.",
      en: "A brand foundation that new Collaboratives can build on, a fully worked-out example, a web design for the ECOS Institute and animated videos.",
    },
    url: "https://www.ecosinstitute.net",
  },
  {
    slug: "outplay",
    client: "OUTPLAY",
    title: {
      nl: "OUTPLAY: één merk voor buitenspelen in heel Europa",
      en: "OUTPLAY: one brand for outdoor play across Europe",
    },
    summary: {
      nl: "Een brandbook voor OUTPLAY, een Europees project over buitenspelen voor kinderen van 3 tot 10 jaar.",
      en: "A brandbook for OUTPLAY, a European project about outdoor play for children aged 3 to 10.",
    },
    sector: "educatie-scholen",
    services: ["branding-rebranding"],
    applications: ["brandbook", "huisstijl"],
    tools: [],
    color: "#4CAF6A",
    challenge: {
      nl: "OUTPLAY is een Erasmus+-project, medegefinancierd door de Europese Unie, met partners uit meerdere landen en ISSA als partner. Het onderzoekt hoe buiten spelen kinderen van 3 tot 10 jaar helpt bij leren, bij hun sociale en emotionele ontwikkeling en bij het gevoel erbij te horen. Met materiaal voor leerkrachten, pilots op scholen en Outdoor Play Labs in de buurt. Zo'n Europees concept heeft één herkenbaar gezicht nodig.",
      en: "OUTPLAY is an Erasmus+ project, co-funded by the European Union, with partners from several countries and ISSA among them. It explores how outdoor play supports children aged 3 to 10 in learning, in their social and emotional development and in feeling they belong. With resources for educators, pilots in schools and community Outdoor Play Labs. A European concept like that needs one recognisable face.",
    },
    approach: {
      nl: "We legden het merk OUTPLAY vast in een brandbook: de kleuren, de typografie en hoe je het merk toepast. Zo kan elke partner, in elk land, met hetzelfde merk aan de slag.",
      en: "We captured the OUTPLAY brand in a brandbook: the colours, the typography and how to apply the brand. That way every partner, in every country, works with the same brand.",
    },
    result: {
      nl: "Een brandbook waarmee OUTPLAY in alle partnerlanden hetzelfde, herkenbare verhaal vertelt.",
      en: "A brandbook that lets OUTPLAY tell the same recognisable story in every partner country.",
    },
    url: "https://issa.nl/initiatives/outplay-outdoorplaylabs",
  },
  {
    slug: "impeco",
    client: "IMPECO",
    title: {
      nl: "IMPECO: twee afdelingen, één sterk merk",
      en: "IMPECO: two departments, one strong brand",
    },
    summary: {
      nl: "Voor logistiek dienstverlener IMPECO uit Duiven fristen we het merk op, brachten we twee afdelingen samen onder één merk en maakten we een jubileumlogo, drukwerk, een nieuw webdesign en aanvraagflows voor leads.",
      en: "For logistics provider IMPECO from Duiven we refreshed the brand, brought two departments together under one brand and created an anniversary logo, print, a new web design and request flows for leads.",
    },
    sector: "transport-logistiek",
    services: ["branding-rebranding", "grafisch-ontwerp-print", "websites-webshops", "automation-funnels"],
    applications: ["rebranding", "logo-ontwerp", "huisstijl", "visitekaartjes-drukwerk", "webflow-website", "ux-ui-webdesign", "salesfunnels"],
    tools: ["webflow"],
    color: "#62238C",
    challenge: {
      nl: "IMPECO uit Duiven regelt complexe, vaak tijdkritische logistiek, wereldwijd en dag en nacht. Van sportevenementen en beurzen tot transport en opslag, met een 'no worries'-aanpak. Twee afdelingen, Sports & Events en Transport, moesten duidelijker onder één merk komen te staan.",
      en: "IMPECO from Duiven handles complex, often time-critical logistics, worldwide and around the clock. From sports events and trade fairs to transport and storage, with a 'no worries' approach. Two departments, Sports & Events and Transport, needed to sit more clearly under one brand.",
    },
    approach: {
      nl: "We gaven het merk een opfrisbeurt, zonder het herkenbare los te laten. Sports & Events en Transport kregen elk een eigen plek binnen één merk, met co-branding die de structuur laat zien. Voor het jubileum ontwierpen we een speciaal logo en we pakten het drukwerk aan. Daarna ontwierpen we de nieuwe website, met per dienst een aanvraagflow die bezoekers naar een concrete aanvraag leidt.",
      en: "We gave the brand a refresh without losing what makes it recognisable. Sports & Events and Transport each got their own place within one brand, with co-branding that shows the structure. For the anniversary we designed a special logo, and we took care of the print. Then we designed the new website, with a request flow per service that guides visitors to a concrete request.",
    },
    result: {
      nl: "Een opgefrist merk met een duidelijke plek voor beide afdelingen, een jubileumlogo, nieuw drukwerk en een webdesign met aanvraagflows per dienst.",
      en: "A refreshed brand with a clear place for both departments, an anniversary logo, new print and a web design with request flows per service.",
    },
    url: "https://www.impeco.nl",
  },
  {
    slug: "kds-stansvormen",
    client: "KDS Die-Cutting Technology",
    title: {
      nl: "KDS: een scherp merk voor de specialist in stansvormen",
      en: "KDS: a sharp brand for the die-cutting specialist",
    },
    summary: {
      nl: "Branding, drukwerk, een website en een offerte- en klantportaal voor KDS Die-Cutting Technology uit Weert, specialist in stansvormen voor de verpakkingsindustrie.",
      en: "Branding, print, a website and a quote and customer portal for KDS Die-Cutting Technology from Weert, specialist in cutting dies for the packaging industry.",
    },
    sector: "industrie-techniek",
    services: ["branding-rebranding", "grafisch-ontwerp-print", "websites-webshops", "web-apps-portals-apps"],
    applications: ["huisstijl", "visitekaartjes-drukwerk", "webflow-website", "klantportaal"],
    tools: ["webflow"],
    color: "#D7203C",
    challenge: {
      nl: "KDS uit Weert maakt sinds 1977 stansvormen en alles wat erbij hoort, van stansvorm tot separatieset. Precisiewerk voor bedrijven die karton tot verpakking verwerken. Het merk mocht laten zien hoe scherp KDS werkt, en klanten moesten makkelijker een offerte kunnen aanvragen en hun zaken online regelen.",
      en: "Since 1977, KDS from Weert has made cutting dies and everything that goes with them, from die to separation set. Precision work for companies that turn cardboard into packaging. The brand had to show how sharp KDS works, and customers needed an easier way to request quotes and handle things online.",
    },
    approach: {
      nl: "We werkten de branding uit en vertaalden die naar drukwerk en een nieuwe website, met de producten en de expertises stansen, uitbreken en separeren helder op een rij. Daarnaast bouwden we een offerte- en klantportaal, waar klanten een offerte aanvragen en inloggen op hun eigen omgeving.",
      en: "We developed the branding and carried it through to print and a new website, with the products and the core expertise of cutting, stripping and separating clearly laid out. We also built a quote and customer portal, where customers request quotes and log in to their own environment.",
    },
    result: {
      nl: "Een strak merk, drukwerk in dezelfde lijn, een website in Webflow en een portaal voor offertes en klanten.",
      en: "A sharp brand, print in the same style, a website in Webflow and a portal for quotes and customers.",
    },
    url: "https://www.kds.eu",
  },
  {
    slug: "buitenstate-tools",
    client: "Buitenstate",
    title: {
      nl: "Buitenstate: zoekers, swipes en matchscores",
      en: "Buitenstate: searchers, swipes and match scores",
    },
    summary: {
      nl: "Drie tools voor Buitenstate: 'Zoekers voor mijn woning' voor verkopers van landelijke woningen, Woning Swipe met AI-matchmaking op basis van een vrije zoekvraag, en een AI-zoekprofiel met realtime meldingen en matchscores.",
      en: "Three tools for Buitenstate: 'Zoekers voor mijn woning' (searchers for my home) for sellers of rural homes, Woning Swipe with AI matchmaking based on a free-text prompt, and an AI search profile with real-time notifications and match scores.",
    },
    sector: "vastgoed-makelaardij",
    services: ["configurators-lead-tools-widgets", "ai-consultancy", "automation-funnels"],
    applications: ["check-tools", "keuzehulp-quiz", "salesfunnels", "ai-integraties"],
    tools: ["webflow"],
    color: "#3A4510",
    challenge: {
      nl: "Buitenstate is het platform voor landelijk wonen: vrijstaande woningen, boerderijen en landgoederen in het buitengebied, aangeboden door een selectie NVM-makelaars. Verkopers willen weten of er vraag is naar hun woning. Kopers zoeken vaak iets heel specifieks, dat zich slecht laat vangen in een paar filters.",
      en: "Buitenstate is the platform for rural living: detached homes, farmhouses and estates in the countryside, offered by a selection of NVM estate agents. Sellers want to know whether there is demand for their home. Buyers are often looking for something very specific that a few filters can't capture.",
    },
    approach: {
      nl: "We bouwden drie tools. Met 'Zoekers voor mijn woning' ziet een verkoper hoeveel actieve zoekers er in zijn regio zijn, en vraagt hij meteen een gratis waardebepaling aan bij een Buitenstate-makelaar: een leadfunnel voor verkopers van landelijke woningen. Bij Woning Swipe vertel je in je eigen woorden wat je zoekt, waarna AI passende woningen voorstelt om doorheen te swipen. En het AI-zoekprofiel houdt het aanbod voor je in de gaten, met realtime meldingen en een matchscore per woning.",
      en: "We built three tools. With 'Zoekers voor mijn woning' a seller sees how many active searchers there are in their region and can request a free valuation from a Buitenstate agent right away: a lead funnel for sellers of rural homes. With Woning Swipe you describe in your own words what you are looking for, and AI suggests matching homes to swipe through. And the AI search profile keeps an eye on the listings for you, with real-time notifications and a match score per home.",
    },
    result: {
      nl: "Drie tools die verkopers en kopers persoonlijk verder helpen: een leadfunnel voor verkopers, AI-matchmaking via Woning Swipe en een zoekprofiel dat zelf meldt wanneer er iets passends langskomt.",
      en: "Three tools that help sellers and buyers in a personal way: a lead funnel for sellers, AI matchmaking through Woning Swipe and a search profile that tells you when something suitable comes along.",
    },
    url: "https://www.buitenstate.nl",
  },
  {
    slug: "zuyver-jeeps",
    client: "ZUYVER Jeeps",
    title: {
      nl: "ZUYVER: een website voor handgebouwde custom Jeeps",
      en: "ZUYVER: a website for hand-built custom Jeeps",
    },
    summary: {
      nl: "De website van ZUYVER Jeeps: custom Jeeps, met de hand gebouwd door het team van BRUTE. Born in Holland.",
      en: "The website of ZUYVER Jeeps: custom Jeeps, hand-built by the BRUTE team. Born in Holland.",
    },
    sector: "automotive-mobiliteit",
    services: ["websites-webshops"],
    applications: ["ux-ui-webdesign"],
    tools: [],
    color: "#020202",
    challenge: {
      nl: "ZUYVER brengt de handgebouwde custom Jeeps van BRUTE naar de Noord-Amerikaanse markt. Een nieuw merk in een markt vol liefhebbers, dus de eerste indruk moest meteen raak zijn.",
      en: "ZUYVER brings BRUTE's hand-built custom Jeeps to the North American market. A new brand in a market full of enthusiasts, so the first impression had to land straight away.",
    },
    approach: {
      nl: "We ontwierpen en bouwden de website: donker en strak, met de auto's in de hoofdrol en een directe weg naar contact. In aanloop naar de lancering staat er een coming soon-versie live die het merk alvast neerzet.",
      en: "We designed and built the website: dark and clean, with the cars in the lead role and a direct route to contact. In the run-up to launch, a coming-soon version is live that already puts the brand on the map.",
    },
    result: {
      nl: "Een website die ZUYVER vanaf dag één neerzet als Born in Holland, met de handgebouwde Jeeps centraal.",
      en: "A website that presents ZUYVER as Born in Holland from day one, with the hand-built Jeeps front and centre.",
    },
    url: "https://zuyverjeeps.com",
  },
  {
    slug: "atl-plus",
    client: "ATL+",
    title: {
      nl: "ATL+: atletiektechniek in heldere video's",
      en: "ATL+: athletics technique in clear videos",
    },
    summary: {
      nl: "Voor de Atletiekunie maakten we ATL+: het nationale e-learningplatform voor atletiek, met een visuele ontwikkelmethodiek, leerlijnen, instructievideo's en een persoonlijk dashboard. Van merk en UX-onderzoek tot video-opnames en beheer.",
      en: "For the Atletiekunie (the Dutch athletics federation) we created ATL+: the national e-learning platform for athletics, with a visual development method, learning pathways, instruction videos and a personal dashboard. From brand and UX research to video recording and management.",
    },
    sector: "sport-media",
    services: ["branding-rebranding", "web-apps-portals-apps", "foto-video-3d-animatie", "websites-webshops"],
    applications: ["logo-ontwerp", "huisstijl", "ux-research", "ledenportaal-loyaliteit", "webflow-website", "hosting-onderhoud"],
    tools: ["webflow"],
    color: "#DE4A19",
    challenge: {
      nl: "De Atletiekunie wil clubs sterker maken en trainers helpen met goede trainingsmethodieken. Daarvoor is een visuele ontwikkelmethodiek bedacht: per atletiekonderdeel een leerlijn in duidelijke stappen. Die kennis moest op één plek komen, voor iedereen die met atletiektalent werkt.",
      en: "The Atletiekunie wants to strengthen clubs and help coaches with effective training methods. For that, a visual development method was created: a learning pathway in clear steps for each athletics event. That knowledge had to come together in one place, for everyone working with athletics talent.",
    },
    approach: {
      nl: "We begonnen met UX-onderzoek, inclusief groepssessies. Daarna gaven we ATL+ samen met het team van de Atletiekunie een eigen merk en ontwikkelden we het platform: leerlijnen per onderdeel, stap voor stap uitgelegd met video, en een portaal met afgeschermde content. Je registreert je gratis en logt in op je eigen account. Het dashboard toont daarna e-learning op maat, en elke gebruiker krijgt de juiste rol of rollen. Meer dan 100 leervideo's, verdeeld over meer dan 10 leerlijnen, staan in het Webflow CMS, zodat het beheer overzichtelijk blijft. De instructievideo's namen we op en monteerden we zelf. Ook het beheer van de aanmeldomgeving en de website doen wij.",
      en: "We started with UX research, including group sessions. Then, together with the Atletiekunie team, we gave ATL+ its own brand and developed the platform: learning pathways per event, explained step by step on video, and a portal with gated content. You register for free and log in to your own account. The dashboard then shows personalised e-learning, and every user is given the right role or roles. More than 100 learning videos, spread across more than 10 learning pathways, live in the Webflow CMS, which keeps content management clear. We recorded and edited the instruction videos ourselves. We also manage the sign-up environment and the website.",
    },
    result: {
      nl: "Het nationale e-learningplatform voor atletiek: leerlijnen per onderdeel en instructievideo's, gratis toegankelijk met een eigen account en een persoonlijk dashboard.",
      en: "The national e-learning platform for athletics: learning pathways per event and instruction videos, free to access with your own account and a personal dashboard.",
    },
    url: "https://www.atlplus.nl",
  },
  {
    slug: "steddion",
    client: "Steddion",
    title: {
      nl: "Steddion: energiezekerheid, helder uitgelegd",
      en: "Steddion: energy security, clearly explained",
    },
    summary: {
      nl: "Branding, webdesign, een kennisbank met een realtime scraper voor thema's en marktontwikkelingen, landingspagina's en video's voor Steddion, dat bedrijven helpt de regie te nemen over hun energie.",
      en: "Branding, web design, a knowledge base with a real-time scraper for themes and market developments, landing pages and videos for Steddion, which helps businesses take control of their energy.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "websites-webshops", "automation-funnels", "foto-video-3d-animatie"],
    applications: ["huisstijl", "webflow-website", "ux-ui-webdesign", "landingspaginas", "workflow-automatisering"],
    tools: ["webflow"],
    color: "#45297A",
    challenge: {
      nl: "Het stroomnet staat onder druk, en voor energie-intensieve bedrijven is energie geen vanzelfsprekendheid meer. Steddion helpt vastgoedontwikkelaars, beheerders, huurders, beleggers en bouwers om daar zelf de regie over te nemen: van analyse en advies tot opwek, batterijopslag, laadinfrastructuur en beheer. Een technisch verhaal, dat helder en betrouwbaar moest overkomen.",
      en: "The grid is under pressure, and for energy-intensive businesses energy is no longer a given. Steddion helps property developers, managers, tenants, investors and builders take control themselves: from analysis and advice to generation, battery storage, charging infrastructure and management. A technical story that had to come across as clear and reliable.",
    },
    approach: {
      nl: "We zetten het merk Steddion neer en ontwierpen de website, met de oplossingen en de doelgroepen elk op een eigen, overzichtelijke plek. Voor de kennisbank Energy Insights bouwden we een scraper die realtime thema's en marktontwikkelingen ophaalt. Daarnaast maakten we landingspagina's en video's.",
      en: "We established the Steddion brand and designed the website, with the solutions and the audiences each in their own clear place. For the Energy Insights knowledge base we built a scraper that collects themes and market developments in real time. We also made landing pages and videos.",
    },
    result: {
      nl: "Een herkenbaar merk, een website die een ingewikkeld onderwerp rustig uitlegt en een kennisbank die gevoed wordt met actuele marktontwikkelingen.",
      en: "A recognisable brand, a website that explains a complex subject calmly and a knowledge base fed with current market developments.",
    },
    url: "https://www.steddion.com",
  },
  {
    slug: "steddion-tools",
    client: "Steddion",
    title: {
      nl: "De EMS-vergelijker en Energy Property Configurator van Steddion",
      en: "Steddion's EMS comparison tool and Energy Property Configurator",
    },
    summary: {
      nl: "Twee online tools voor Steddion: de EMS-vergelijker en de EPC Energy Property Configurator, ingericht als leadfunnel en gekoppeld aan HubSpot.",
      en: "Two online tools for Steddion: the EMS comparison tool and the EPC Energy Property Configurator, set up as lead funnels and integrated with HubSpot.",
    },
    sector: "energie-duurzaamheid",
    services: ["configurators-lead-tools-widgets", "automation-funnels"],
    applications: ["productconfigurator", "keuzehulp-quiz", "salesfunnels", "crm-implementatie"],
    tools: ["hubspot"],
    color: "#45297A",
    challenge: {
      nl: "Bedrijven met vastgoed staan voor de vraag wat ze met energie moeten: zonnepanelen, een batterij, laadpunten, een energiemanagementsysteem (EMS)? En welke leverancier past erbij? Steddion wilde die eerste verkenning online mogelijk maken, en de aanvragen die daaruit komen netjes opvolgen.",
      en: "Businesses with property face the question of what to do about energy: solar panels, a battery, charging points, an energy management system (EMS)? And which supplier fits? Steddion wanted to make that first exploration possible online, and follow up properly on the requests it brings in.",
    },
    approach: {
      nl: "We bouwden twee tools. Met de EMS-vergelijker vind je passende EMS-leveranciers voor jouw situatie. In de EPC Energy Property Configurator vul je je pand en je verbruik in, bekijk je simulaties en je nieuwe energiebehoefte en zie je welke oplossing Steddion voorstelt, met een samenvatting aan het eind. Beide tools zijn ingericht als leadfunnel en gekoppeld aan HubSpot, zodat aanvragen direct in het CRM terechtkomen.",
      en: "We built two tools. The EMS comparison tool helps you find EMS suppliers that suit your situation. In the EPC Energy Property Configurator you enter your building and consumption, view simulations and your new energy demand and see which solution Steddion proposes, with a summary at the end. Both tools are set up as lead funnels and integrated with HubSpot, so requests land straight in the CRM.",
    },
    result: {
      nl: "Twee tools waarmee bezoekers zelf verkennen wat er mogelijk is, met aanvragen die rechtstreeks in HubSpot binnenkomen.",
      en: "Two tools that let visitors explore what is possible for themselves, with requests coming straight into HubSpot.",
    },
    url: "https://tools.steddion.com/configurator",
  },
  {
    slug: "plenty-planet",
    client: "Plenty Planet",
    title: {
      nl: "Plenty Planet: merk, website en configurator voor lokale energie",
      en: "Plenty Planet: brand, website and configurator for local energy",
    },
    summary: {
      nl: "Een verfijnd merk, een website, een configurator en leadflows voor Plenty Planet, met een koppeling naar Odoo CRM. Plenty Planet helpt organisaties met lokale energie: zonne-energie, opslag en slimme energie-integratie.",
      en: "A refined brand, a website, a configurator and lead flows for Plenty Planet, integrated with Odoo CRM. Plenty Planet helps organisations with local energy: solar power, storage and smart energy integration.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "automation-funnels", "seo-aeo-geo"],
    applications: ["huisstijl", "webflow-website", "productconfigurator", "website-widgets", "crm-implementatie", "salesfunnels", "seo", "geo", "contentstructuur"],
    tools: ["webflow", "odoo", "gsap"],
    color: "#82B444",
    challenge: {
      nl: "Plenty Planet helpt organisaties hun energievoorziening om te bouwen, van kostenrisico naar eigen infrastructuur: zonne-overkappingen op parkeerterreinen, zonneparken, zon op dak, batterijopslag, laadinfrastructuur en geïntegreerde energiesystemen, ook als antwoord op netcongestie. Natuurpositief, waar het kan. Grote projecten, die met een heldere eerste stap moeten beginnen.",
      en: "Plenty Planet helps organisations rebuild their energy supply, from a cost risk into infrastructure of their own: solar car parks, solar parks, rooftop solar, battery storage, charging infrastructure and integrated energy systems, also as an answer to grid congestion. Nature-positive where possible. Big projects that need to start with a clear first step.",
    },
    approach: {
      nl: "We verfijnden het merk met een vernieuwd kleurenpalet en beeldsysteem, en ontwierpen en bouwden de website in Webflow, met oplossingen, diensten en cases elk op een eigen plek. De content zetten we opnieuw neer, zodat oplossingen als laadinfrastructuur, energieopslag en netcongestie helder op een rij staan. Dat maakt de site prettiger in gebruik en beter vindbaar, in zoekmachines en op AI-platforms. Interactieve calculators, leadflows en modulaire pop-ups helpen bezoekers bij een opstelling met zon en batterij, en opt-in-funnels met whitepapers ondersteunen de conversie. Met de configurator geeft een bezoeker stap voor stap zijn situatie en wensen door. Via een koppeling gaan die aanvragen direct naar Odoo CRM.",
      en: "We refined the brand with a renewed colour palette and visual system, and designed and built the website in Webflow, with solutions, services and cases each in their own place. We restructured the content so that solutions such as charging infrastructure, energy storage and grid congestion are clearly laid out. That makes the site easier to use and easier to find, in search engines and on AI platforms. Interactive calculators, lead flows and modular pop-ups guide visitors through a solar and battery setup, and opt-in funnels with whitepapers support conversion. With the configurator, visitors share their situation and wishes step by step. Through an integration, those requests go straight into Odoo CRM.",
    },
    result: {
      nl: "Een merk en een schaalbare website die laten zien wat Plenty Planet doet in de energietransitie, en een configurator die aanvragen rechtstreeks in Odoo CRM zet.",
      en: "A brand and a scalable website that show what Plenty Planet does in the energy transition, and a configurator that puts requests straight into Odoo CRM.",
    },
    url: "https://www.plentyplanet.com",
  },
  {
    slug: "electriffy",
    client: "Electriffy",
    title: {
      nl: "Electriffy: verder dan energie alleen",
      en: "Electriffy: going beyond energy",
    },
    summary: {
      nl: "Branding en website voor Electriffy, dat zonne- en opslagprojecten ontwikkelt met een regeneratief doel, van Namibië tot Zambia.",
      en: "Branding and website for Electriffy, which develops solar and storage projects with a regenerative purpose, from Namibia to Zambia.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "ux-ui-webdesign"],
    tools: [],
    color: "#4D36D2",
    challenge: {
      nl: "Electriffy ontwikkelt zonne- en opslagprojecten in zuidelijk Afrika, met een plan om stroom uit Namibië naar Zambia te brengen. Het gaat om meer dan megawatts: water, natuur en lokaal levensonderhoud horen bij het verhaal. Investeerders, overheden, industrie en lokale gemeenschappen moesten dat allemaal snappen.",
      en: "Electriffy develops solar and storage projects in southern Africa, with a plan to bring power from Namibia to Zambia. It is about more than megawatts: water, nature and local livelihoods are part of the story. Investors, governments, industry and local communities all had to understand that.",
    },
    approach: {
      nl: "We ontwikkelden de branding en de website. De site legt stap voor stap uit wat Electriffy doet: de oplossingen (zon en batterijopslag, stroomafnamecontracten en projectontwikkeling), voor wie, in welke regio's en hoe de regeneratieve aanpak samen met Your.Earth werkt.",
      en: "We developed the branding and the website. The site explains step by step what Electriffy does: the solutions (solar and battery storage, power purchase agreements and project development), for whom, in which regions and how the regenerative approach works together with Your.Earth.",
    },
    result: {
      nl: "Een merk en website die een groot, technisch project helder neerzetten voor iedereen die erbij betrokken is.",
      en: "A brand and website that present a large, technical project clearly to everyone involved.",
    },
    url: "https://electriffy.com",
  },
  {
    slug: "your-earth",
    client: "YOUR.earth",
    title: {
      nl: "YOUR.earth: waar natuur en bedrijfsleven samenkomen",
      en: "YOUR.earth: where nature and business become one",
    },
    summary: {
      nl: "Branding en website voor YOUR.earth, dat bijdragen van bedrijven investeert in natuurprojecten in het landschap waar die bedrijven zelf actief zijn.",
      en: "Branding and website for YOUR.earth, which invests contributions from companies in nature projects in the landscapes where those companies operate.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "ux-ui-webdesign"],
    tools: [],
    color: "#C7F161",
    challenge: {
      nl: "YOUR.earth wil natuur en bedrijfsleven verbinden. Bedrijven dragen bij, YOUR.earth verdubbelt elke euro en zet het geld als renteloze lening in voor projecten in het landschap waar die bedrijven actief zijn: van duintuinen en agroforestry in Nederland tot waterzekerheid in Namibië. Een nieuw model, dat geloofwaardig moest overkomen.",
      en: "YOUR.earth wants to connect nature and business. Companies contribute, YOUR.earth doubles every euro and deploys the money as interest-free loans for projects in the landscapes where those companies operate: from dune gardens and agroforestry in the Netherlands to water security in Namibia. A new model that had to come across as credible.",
    },
    approach: {
      nl: "We maakten de branding en de website. Een kaart laat de projecten per landschap zien, en de site legt stap voor stap uit hoe het model werkt en hoe resultaten worden gemeten.",
      en: "We created the branding and the website. A map shows the projects per landscape, and the site explains step by step how the model works and how results are measured.",
    },
    result: {
      nl: "Een merk en website die een nieuw model voor natuurfinanciering concreet maken, met de projecten zelf in de hoofdrol.",
      en: "A brand and website that make a new model for financing nature tangible, with the projects themselves in the lead role.",
    },
    url: "https://your.earth",
  },
  {
    slug: "jalo-energy",
    client: "JALO Energy",
    title: {
      nl: "JALO Energy: energie die verder gaat",
      en: "JALO Energy: energy that goes further",
    },
    summary: {
      nl: "Branding, social content, een webinar en de website voor JALO Energy, dat in Almelo een biopelletfabriek ontwikkelt die duurzame warmte, CO₂-afvang en landschapsherstel verbindt.",
      en: "Branding, social content, a webinar and the website for JALO Energy, which is developing a biopellet plant in Almelo that connects renewable heat, CO₂ capture and landscape restoration.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "content-marketing-online-ads", "websites-webshops"],
    applications: ["huisstijl", "social-media-marketing", "ux-ui-webdesign"],
    tools: [],
    color: "#2E2963",
    challenge: {
      nl: "JALO ontwikkelt in Almelo een fabriek die van resthout biopellets en lokale warmte maakt, biogene CO₂ afvangt en bijdraagt aan herstel van het landschap. Eén fabriek, een hele keten. Dat verhaal moest kloppen voor investeerders, afnemers, boeren en de regio.",
      en: "In Almelo, JALO is developing a plant that turns residual wood into biopellets and local heat, captures biogenic CO₂ and contributes to restoring the landscape. One plant, a whole chain. That story had to make sense to investors, buyers, farmers and the region.",
    },
    approach: {
      nl: "We gaven JALO een eigen merk en bouwden de website, die het JALO-model stap voor stap uitlegt: Nederpellets, lokale warmte, CO₂-verwijdering en het landschapsprogramma met Your.Earth. Daarnaast maakten we social content en een webinar.",
      en: "We gave JALO its own brand and built the website, which explains the JALO model step by step: Nederpellets, local heat, carbon removal and the landscape programme with Your.Earth. We also created social content and a webinar.",
    },
    result: {
      nl: "Een merk, website, social content en een webinar die samen één helder verhaal vertellen over energie, CO₂ en landschap.",
      en: "A brand, website, social content and a webinar that together tell one clear story about energy, CO₂ and landscape.",
    },
    url: "https://jaloenergy.com",
  },
  {
    slug: "edgeway-commodities",
    client: "EdgeWay Commodities",
    title: {
      nl: "EdgeWay Commodities: headhunting met een voorsprong",
      en: "EdgeWay Commodities: delivering an edge in commodity talent",
    },
    summary: {
      nl: "Branding en website voor EdgeWay Commodities, een boutique executive search-partner voor de wereldwijde handel in grondstoffen en energie.",
      en: "Branding and website for EdgeWay Commodities, a boutique executive search partner for global commodity and energy markets.",
    },
    sector: "zakelijke-dienstverlening",
    services: ["branding-rebranding", "websites-webshops"],
    applications: ["huisstijl", "webflow-website", "ux-ui-webdesign"],
    tools: ["webflow"],
    color: "#071B50",
    challenge: {
      nl: "EdgeWay Commodities zoekt talent voor handelshuizen, hedgefondsen en energiebedrijven in de wereldwijde grondstoffenmarkt: traders, quants en leiders. Een kleine, persoonlijke speler tussen grote namen. Het merk moest die boutique-aanpak uitstralen, en de diensten moesten samenkomen in één logisch verhaal.",
      en: "EdgeWay Commodities finds talent for trading houses, hedge funds and energy companies in global commodity markets: traders, quants and leaders. A small, personal player among big names. The brand had to convey that boutique approach, and the services had to come together in one logical story.",
    },
    approach: {
      nl: "We ontwikkelden de branding en bouwden de website in Webflow. De drie diensten, Search, Intelligence en Advisory, staan helder naast elkaar, en elke markt, van Power & Renewables tot Metals, heeft een eigen pagina. Zo vindt een bezoeker snel zijn eigen markt terug.",
      en: "We developed the branding and built the website in Webflow. The three services, Search, Intelligence and Advisory, sit clearly side by side, and every market, from Power & Renewables to Metals, has its own page. That way visitors quickly find their own market.",
    },
    result: {
      nl: "Een eigen uitstraling die past bij een boutique search-partner, en een website met een duidelijke structuur van diensten en markten.",
      en: "A look of its own that suits a boutique search partner, and a website with a clear structure of services and markets.",
    },
    url: "https://edgewaycommodities.com",
  },
  {
    slug: "fairlink",
    client: "Fairlink",
    title: {
      nl: "Fairlink: een helder merk voor eerlijke arbeidsmigratie",
      en: "Fairlink: a clear brand for fair labour migration",
    },
    summary: {
      nl: "Branding, website en ansichtkaarten voor Fairlink, het platform dat werving over landsgrenzen eerlijker, veiliger en transparanter maakt.",
      en: "Branding, website and postcards for Fairlink, the platform that makes cross-border recruitment fairer, safer and more transparent.",
    },
    sector: "tech-saas-startups",
    services: ["branding-rebranding", "websites-webshops", "grafisch-ontwerp-print"],
    applications: ["huisstijl", "webflow-website", "flyers-posters"],
    tools: ["webflow"],
    color: "#22393E",
    challenge: {
      nl: "Fairlink werkt aan veiligere en eerlijkere werving van arbeidsmigranten over de grens. Werknemers moeten hun rechten kennen, werkgevers willen kunnen aantonen dat hun werving eerlijk verloopt en overheden en ngo's willen zien wat er in de keten gebeurt. Drie doelgroepen, één ingewikkeld internationaal verhaal.",
      en: "Fairlink works towards safer and fairer recruitment of migrant workers across borders. Workers need to know their rights, employers want to show that their recruitment is fair, and governments and NGOs want to see what happens along the chain. Three audiences, one complex international story.",
    },
    approach: {
      nl: "We brachten dat verhaal terug tot de kern en bouwden er een merk omheen. Op de website heeft elke doelgroep een eigen route: werknemers, werkgevers en overheden. Daarnaast ontwierpen we ansichtkaarten in dezelfde stijl.",
      en: "We brought that story back to its core and built a brand around it. On the website every audience has its own route: workers, employers and governments. We also designed postcards in the same style.",
    },
    result: {
      nl: "Een helder merk, een website met een eigen route per doelgroep en ansichtkaarten die het verhaal ook op papier vertellen.",
      en: "A clear brand, a website with its own route for each audience and postcards that tell the story on paper too.",
    },
    url: "https://www.fairlink.io",
  },
  {
    slug: "alpacafarm-vorstenbosch",
    client: "Alpacafarm Vorstenbosch",
    title: {
      nl: "Alpacafarm Vorstenbosch: online net zo gezellig als op de farm",
      en: "Alpacafarm Vorstenbosch: as welcoming online as on the farm",
    },
    summary: {
      nl: "Website en complete social media voor Alpacafarm Vorstenbosch, van feed tot reels, plus een openingstijdenwidget op de website.",
      en: "Website and complete social media for Alpacafarm Vorstenbosch, from feed to reels, plus an opening-hours widget on the website.",
    },
    sector: "travel-leisure",
    services: ["websites-webshops", "content-marketing-online-ads", "foto-video-3d-animatie", "configurators-lead-tools-widgets"],
    applications: ["ux-ui-webdesign", "social-media-marketing", "social-video", "website-widgets"],
    tools: ["instagram"],
    color: "#F39200",
    challenge: {
      nl: "Alpacafarm Vorstenbosch is een recreatieve alpacafarm in het Brabantse buitengebied, een paar kilometer van ons kantoor. Je kunt er wandelen met de alpaca's, high tea drinken of pizza eten tussen de dieren, en er is een winkel. Bezoekers willen vooral snel weten wanneer ze langs kunnen komen en wat er te doen is.",
      en: "Alpacafarm Vorstenbosch is a recreational alpaca farm in the Brabant countryside, a few kilometres from our office. You can walk with the alpacas, have high tea or eat pizza among the animals, and there is a shop. Visitors mostly want to know quickly when they can drop by and what there is to do.",
    },
    approach: {
      nl: "We bouwden de website, met een openingstijdenwidget die bezoekers meteen laat zien wanneer de farm open is. En we verzorgden de complete social media: de hele feed, reels en alles wat erbij hoort, met de alpaca's als vanzelfsprekende sterren.",
      en: "We built the website, with an opening-hours widget that shows visitors at a glance when the farm is open. And we took care of the complete social media: the whole feed, reels and everything that goes with it, with the alpacas as the natural stars.",
    },
    result: {
      nl: "Een website waarop je meteen ziet wanneer je welkom bent, en social media vol alpaca's, van feed tot reels.",
      en: "A website that shows right away when you're welcome, and social media full of alpacas, from feed to reels.",
    },
    url: "https://alpacavorstenbosch.nl",
  },
];
