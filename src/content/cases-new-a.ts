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
      nl: "Voor TOY4Participation, een Europees project binnen het netwerk van ISSA, werkten we mee aan de branding en maakten we de website en een interactieve treasure hunt over kinderparticipatie: je ontdekt de hoofdstukken spelenderwijs op een kaart, deelt wat je zelf al doet en ontgrendelt aan het eind de schatkist. In negen talen.",
      en: "For TOY4Participation, a European project within the ISSA network, we contributed to the branding and created the website and an interactive treasure hunt about child participation: you explore the chapters playfully on a map, share what you already do and unlock the treasure chest at the end. In nine languages.",
    },
    sector: "educatie-scholen",
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "automation-funnels"],
    applications: ["huisstijl", "webflow-website", "meertalige-website", "keuzehulp-quiz", "salesfunnels"],
    tools: ["webflow", "sanity", "gsap", "lottie"],
    color: "#5EA6A3",
    challenge: {
      nl: "TOY4Participation is een Europees project binnen het netwerk van ISSA, de International Step by Step Association. Het zet zich in voor kinderparticipatie: ook de allerjongsten mogen meepraten over wat hen aangaat, in de kinderopvang en in Play Hubs in de buurt. Dat verhaal moest ouders en iedereen die met jonge kinderen werkt bereiken, in landen door heel Europa. En liefst zo dat ze meedoen, in plaats van alleen te lezen.",
      en: "TOY4Participation is a European project within the network of ISSA, the International Step by Step Association. It champions child participation: even the youngest children get a say in what affects them, in early childhood settings and in local Play Hubs. That story had to reach parents and everyone who works with young children, in countries across Europe. Ideally in a way that gets them to take part, not just read.",
    },
    approach: {
      nl: "We werkten mee aan de huisstijl van TOY4Participation en bouwden de website. Het hart is een interactieve treasure hunt die je spelenderwijs door de pagina's laat avonturen. Op een kaart volg je vier korte hoofdstukken: wat kinderparticipatie is, waarom het ertoe doet, hoe het eruitziet en wanneer het begint, en wat je misschien al doet zonder het zo te noemen. Per hoofdstuk kies je welke aanpak je al gebruikt en welke je wilt proberen. Rond je de tocht af, dan gaat de schatkist open: als dank download je de toolkit van TOY4Participation. Op de communitypagina zie je live welke aanpakken anderen al gebruiken en welke ze het liefst willen proberen, en een aparte pagina vertaalt het verhaal naar beleid. De quest draait op Astro met Sanity als CMS en animaties in GSAP en Lottie, en is te volgen in negen talen, van Bulgaars tot Oekraïens.",
      en: "We contributed to TOY4Participation's visual identity and built the website. At its heart is an interactive treasure hunt that takes you on a playful adventure through the pages. On a map you follow four short chapters: what child participation is, why it matters, what it looks like and when it begins, and what you may already be doing without calling it that. In each chapter you choose which practices you already use and which you want to try. Complete the hunt and the treasure chest opens: as a thank-you, you download the TOY4Participation toolkit. On the community page you see live which practices others already use and which they most want to try, and a separate page translates the story into policy. The quest runs on Astro with Sanity as its CMS and animations in GSAP and Lottie, and is available in nine languages, from Bulgarian to Ukrainian.",
    },
    result: {
      nl: "Een bijdrage aan het merk, een website en een meertalige treasure hunt die bezoekers spelenderwijs door het verhaal leidt, eindigt bij een schatkist en hun keuzes zichtbaar maakt voor de hele community.",
      en: "A contribution to the brand, a website and a multilingual treasure hunt that guides visitors playfully through the story, ends with a treasure chest and makes their choices visible to the whole community.",
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
      nl: "Voor CHAVORE, het ISSA-initiatief voor het mentale welzijn van jonge kinderen, bouwden we een interactieve treasure hunt: vijf korte hoofdstukken op een kaart, een community wall en een schatkist die aan het eind opengaat. Voor iedereen die met jonge kinderen werkt, in zes talen.",
      en: "For CHAVORE, the ISSA initiative for young children's mental well-being, we built an interactive treasure hunt: five short chapters on a map, a community wall and a treasure chest that opens at the end. For everyone who works with young children, in six languages.",
    },
    sector: "educatie-scholen",
    services: ["websites-webshops", "configurators-lead-tools-widgets", "automation-funnels"],
    applications: ["webflow-website", "meertalige-website", "keuzehulp-quiz", "salesfunnels"],
    tools: ["webflow", "sanity", "gsap"],
    color: "#F9B037",
    challenge: {
      nl: "CHAVORE (Romani voor 'kinderen') is een initiatief binnen ISSA voor de mentale gezondheid en het welzijn van kinderen van 0 tot 6 jaar, vooral in kwetsbare gemeenschappen zoals Roma. Partners in vijf landen werken eraan mee. De vraag: hoe breng je die kennis bij professionals, op een manier die blijft hangen?",
      en: "CHAVORE (Romani for 'children') is an ISSA initiative for the mental health and well-being of children aged 0 to 6, especially in vulnerable communities such as Roma. Partners in five countries take part. The question: how do you bring that knowledge to professionals in a way that sticks?",
    },
    approach: {
      nl: "We namen de treasure hunt van TOY4Participation als basis en maakten er een eigen quest van in de stijl van CHAVORE: Explore. Reflect. Unlock. Op een kaart avontuur je spelenderwijs door vijf hoofdstukken, van Learning Through Feelings tot Care for the Caregivers. In elk hoofdstuk kies je welke aanpak je al gebruikt en welke je wilt proberen of vaker wilt doen. Wie de tocht afrondt, ontgrendelt de schatkist: een gratis online training en materialen van CHAVORE. De keuzes van alle deelnemers komen samen op de community wall, met live tellers per aanpak. Zo werkt ook deze quest als engagement funnel. Hij is te volgen in het Engels, Albanees, Kroatisch, Hongaars, Slowaaks en Sloveens.",
      en: "We took the TOY4Participation treasure hunt as a starting point and turned it into a quest of its own in CHAVORE's style: Explore. Reflect. Unlock. On a map you adventure playfully through five chapters, from Learning Through Feelings to Care for the Caregivers. In each chapter you choose which practices you already use and which you would like to try or do more of. Complete the hunt and you unlock the treasure chest: a free self-paced CHAVORE training and resources. Everyone's choices come together on the community wall, with live counters per practice. This quest works as an engagement funnel too. It is available in English, Albanian, Croatian, Hungarian, Slovak and Slovenian.",
    },
    result: {
      nl: "Een korte, speelse quest die professionals laat nadenken over hun eigen praktijk, eindigt bij een schatkist vol materiaal en laat zien hoe anderen het aanpakken.",
      en: "A short, playful quest that gets professionals thinking about their own practice, ends with a treasure chest full of resources and shows how others approach it.",
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
      nl: "Voor logistiek dienstverlener IMPECO uit Duiven fristen we het merk op, brachten we twee afdelingen samen onder één merk en maakten we een jubileumlogo, drukwerk en een nieuwe website, die binnenkort live gaat. Met een dienstconfigurator in meerdere stappen, voor events en voor transport, die bezoekers naar een concrete aanvraag leidt.",
      en: "For logistics provider IMPECO from Duiven we refreshed the brand, brought two departments together under one brand and created an anniversary logo, print and a new website that goes live soon. With a multi-step service configurator, for events and for transport, that guides visitors to a concrete request.",
    },
    sector: "transport-logistiek",
    services: ["branding-rebranding", "grafisch-ontwerp-print", "websites-webshops", "configurators-lead-tools-widgets", "automation-funnels"],
    applications: ["rebranding", "logo-ontwerp", "huisstijl", "visitekaartjes-drukwerk", "webflow-website", "ux-ui-webdesign", "productconfigurator", "salesfunnels"],
    tools: ["webflow"],
    color: "#62238C",
    challenge: {
      nl: "IMPECO uit Duiven regelt complexe, vaak tijdkritische logistiek, wereldwijd en dag en nacht. Van sportevenementen en beurzen tot transport en opslag, met een 'no worries'-aanpak. Twee afdelingen, Sports & Events en Transport, moesten duidelijker onder één merk komen te staan.",
      en: "IMPECO from Duiven handles complex, often time-critical logistics, worldwide and around the clock. From sports events and trade fairs to transport and storage, with a 'no worries' approach. Two departments, Sports & Events and Transport, needed to sit more clearly under one brand.",
    },
    approach: {
      nl: "We gaven het merk een opfrisbeurt, zonder het herkenbare los te laten. Sports & Events en Transport kregen elk een eigen plek binnen één merk, met co-branding die de structuur laat zien. Voor het jubileum ontwierpen we een speciaal logo en we pakten het drukwerk aan. Daarna maakten we de nieuwe website in Webflow: de afdelingen onder één menu, elk met een eigen pagina, dienstpagina's met veelgestelde vragen en een contactpersoon, use-casepagina's zoals een groot evenement in het buitenland, nieuws, over IMPECO en een vaste knop om contact op te nemen. Het hart is een dienstconfigurator met logica, op de afdelingspagina's en onderaan elke dienstpagina. Voor Sports & Events is het een projectintake in zes stappen, van de diensten die je nodig hebt tot een overzicht om te controleren. Voor Transport is het een offerteaanvraag in vier stappen: het soort transport, de route en het volume, extra's en je gegevens. Zo stelt de flow per dienst de juiste vragen en eindigt hij in een concrete aanvraag.",
      en: "We gave the brand a refresh without losing what makes it recognisable. Sports & Events and Transport each got their own place within one brand, with co-branding that shows the structure. For the anniversary we designed a special logo, and we took care of the print. Then we made the new website in Webflow: the departments under one menu, each with a page of its own, service pages with FAQs and a contact person, use-case pages such as hosting a major event abroad, news, about IMPECO and a fixed button to get in touch. At its heart is a service configurator with built-in logic, on the department pages and at the bottom of every service page. For Sports & Events it is a six-step project intake, from the services you need to an overview to review. For Transport it is a four-step quote request: the type of transport, route and volume, add-ons and your details. That way the flow asks the right questions for each service and ends in a concrete request.",
    },
    result: {
      nl: "Een opgefrist merk met een duidelijke plek voor beide afdelingen, een jubileumlogo, nieuw drukwerk en een nieuwe website met een dienstconfigurator die elke aanvraag compleet maakt, voor events en voor transport. De site staat klaar en gaat binnenkort live.",
      en: "A refreshed brand with a clear place for both departments, an anniversary logo, new print and a new website with a service configurator that makes every request complete, for events and for transport. The site is ready and goes live soon.",
    },
    url: "https://impeco-staging.webflow.io",
  },
  {
    slug: "kds-stansvormen",
    client: "KDS Die-Cutting Technology",
    title: {
      nl: "KDS: een scherp merk voor de specialist in stansvormen",
      en: "KDS: a sharp brand for the die-cutting specialist",
    },
    summary: {
      nl: "Branding, drukwerk, een website en een offerteportaal voor KDS Die-Cutting Technology uit Weert, specialist in stansvormen voor de verpakkingsindustrie. In het portaal rekenen klanten hun aanvraag door op basis van een uitgebreide prijzensheet met klantcodes, en na hun orderbevestiging volgt een mail met pdf.",
      en: "Branding, print, a website and a quotation portal for KDS Die-Cutting Technology from Weert, specialist in cutting dies for the packaging industry. In the portal, customers calculate their request based on an extensive price sheet with customer codes, and confirming an order triggers an email with a PDF.",
    },
    sector: "industrie-techniek",
    services: ["branding-rebranding", "grafisch-ontwerp-print", "websites-webshops", "web-apps-portals-apps", "configurators-lead-tools-widgets", "automation-funnels"],
    applications: ["huisstijl", "visitekaartjes-drukwerk", "webflow-website", "klantportaal", "offerte-calculator", "workflow-automatisering"],
    tools: ["webflow", "wized"],
    color: "#D7203C",
    challenge: {
      nl: "KDS uit Weert maakt sinds 1977 stansvormen en alles wat erbij hoort, van stansvorm tot separatieset. Precisiewerk voor bedrijven die karton tot verpakking verwerken. Het merk mocht laten zien hoe scherp KDS werkt, en klanten moesten makkelijker een offerte kunnen aanvragen en hun zaken online regelen.",
      en: "Since 1977, KDS from Weert has made cutting dies and everything that goes with them, from die to separation set. Precision work for companies that turn cardboard into packaging. The brand had to show how sharp KDS works, and customers needed an easier way to request quotes and handle things online.",
    },
    approach: {
      nl: "We werkten de branding uit en vertaalden die naar drukwerk en een nieuwe website, met de producten onder de expertises stansen, uitbreken en separeren, een scrollanimatie van het werkproces, veelgestelde vragen en een terugbelformulier. Daarnaast bouwden we een offerteportaal waar klanten inloggen. In een calculatieaanvraag in stappen vullen ze per onderdeel de artikelcodes, formaten, lijnlengtes en de complexiteit in. Het portaal rekent dat door op basis van een uitgebreide prijzensheet met klantcodes. In hun dashboard zien klanten hun aanvragen terug en bevestigen ze een order, waarna ze automatisch een mail met pdf ontvangen.",
      en: "We developed the branding and carried it through to print and a new website, with the products under the core skills of cutting, stripping and separating, a scroll animation of the work process, FAQs and a call-back form. We also built a quotation portal where customers log in. In a step-by-step calculation request they enter the article codes, formats, line lengths and complexity for each part. The portal works it all out based on an extensive price sheet with customer codes. In their dashboard, customers see their requests and confirm an order, after which they automatically receive an email with a PDF.",
    },
    result: {
      nl: "Een strak merk, drukwerk in dezelfde lijn, een website in Webflow en een offerteportaal dat complexe calculaties voor klanten in een paar stappen regelt, van aanvraag tot orderbevestiging met mail en pdf.",
      en: "A sharp brand, print in the same style, a website in Webflow and a quotation portal that turns complex calculations into a few steps for customers, from request to order confirmation with email and PDF.",
    },
    url: "https://www.kds.eu",
  },
  {
    slug: "buitenstate-tools",
    client: "Buitenstate",
    title: {
      nl: "Buitenstate: van zoekersmatch tot woningswiper",
      en: "Buitenstate: from searcher match to home swiper",
    },
    summary: {
      nl: "Tools voor kopers, verkopers en makelaars van Buitenstate: bezichtiging plannen, 'Hoeveel zoekers zijn er voor mijn woning?', aanvragen voor een waardebepaling en een bouwkundige keuring, zoekopdrachten met matchmaking-e-mails via onze eigen mailserver, en delegatie van aanvragen naar de makelaars via het makelaars-CMS. En in ontwikkeling: een AI-woningswiper.",
      en: "Tools for Buitenstate's buyers, sellers and agents: booking a viewing, 'how many searchers are there for my home?', requests for a valuation and a structural survey, saved searches with matchmaking emails sent from our own mail server, and delegation of requests to the agents through the agents' CMS. And in development: an AI home swiper.",
    },
    sector: "vastgoed-makelaardij",
    services: ["configurators-lead-tools-widgets", "ai-consultancy", "automation-funnels", "web-apps-portals-apps"],
    applications: ["check-tools", "keuzehulp-quiz", "salesfunnels", "ai-integraties", "boekingswidget", "e-mailmarketing", "lead-nurturing", "api-koppelingen"],
    tools: ["webflow", "netlify"],
    color: "#3A4510",
    challenge: {
      nl: "Buitenstate is het platform voor landelijk wonen: vrijstaande woningen, boerderijen en landgoederen in het buitengebied, aangeboden door een selectie NVM-makelaars. Verkopers willen weten of er vraag is naar hun woning. Kopers zoeken vaak iets heel specifieks, dat zich slecht laat vangen in een paar filters. En elke aanvraag moet snel bij de juiste makelaar terechtkomen.",
      en: "Buitenstate is the platform for rural living: detached homes, farmhouses and estates in the countryside, offered by a selection of NVM estate agents. Sellers want to know whether there is demand for their home. Buyers are often looking for something very specific that a few filters can't capture. And every request has to reach the right agent quickly.",
    },
    approach: {
      nl: "We bouwden een reeks tools langs de hele klantreis. 'Hoeveel zoekers zijn er voor mijn woning?' is een zoekersmatch in vier stappen: provincie, zoekers, gegevens en resultaat. De verkoper krijgt daarna een mail met het aantal zoekers dat de tool voor zijn woning liet zien, en vraagt meteen een gratis waardebepaling aan. Kopers maken een zoekopdracht op locatie, prijs, perceel, woonoppervlakte, slaapkamers en type object, en krijgen matchmaking-e-mails met nieuw aanbod, ook uit stille verkoop. Die mails versturen we via onze eigen mailserver en automations, in dezelfde look and feel als de tools. Op elke woningpagina plan je een bezichtiging, en via de site vraag je ook een bouwkundige keuring aan. Achter de tools zit het makelaars-CMS, dat aanvragen delegeert naar de juiste Buitenstate-makelaar. In ontwikkeling is de woningswiper: je vertelt in je eigen woorden wat je zoekt, waarna AI passende woningen voorstelt om doorheen te swipen, à la Tinder. Elke woning krijgt een matchscore en laat zien op welke wensen hij matcht, en je houdt een top 10 over.",
      en: "We built a set of tools along the entire customer journey. 'How many searchers are there for my home?' is a four-step searcher match: province, searchers, details and result. The seller then gets an email with the number of searchers the tool showed for their home, and can request a free valuation right away. Buyers save a search by location, price, plot, living area, bedrooms and property type, and receive matchmaking emails with new listings, including off-market homes. We send those emails through our own mail server and automations, in the same look and feel as the tools. On every listing page you book a viewing, and through the site you can also request a structural survey. Behind the tools sits the agents' CMS, which delegates requests to the right Buitenstate agent. In development is the home swiper: you describe in your own words what you are looking for, and AI suggests matching homes to swipe through, Tinder-style. Every home gets a match score and shows which of your wishes it matches, and you end up with a top 10.",
    },
    result: {
      nl: "Tools die verkopers, kopers en makelaars verder helpen: inzicht in zoekers en een waardebepaling voor verkopers, matchmaking-e-mails in de stijl van Buitenstate voor kopers, en aanvragen die bij de juiste makelaar landen. Met de woningswiper als volgende stap.",
      en: "Tools that help sellers, buyers and agents along: insight into searchers and a valuation for sellers, matchmaking emails in Buitenstate's style for buyers, and requests that land with the right agent. With the home swiper as the next step.",
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
    services: ["web-apps-portals-apps", "branding-rebranding", "foto-video-3d-animatie", "websites-webshops"],
    applications: ["ledenportaal-loyaliteit", "ux-research", "logo-ontwerp", "huisstijl", "webflow-website", "hosting-onderhoud"],
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
    applications: ["huisstijl", "webflow-website", "ux-ui-webdesign", "landingspaginas", "meertalige-website", "workflow-automatisering"],
    tools: ["webflow", "hubspot"],
    color: "#45297A",
    challenge: {
      nl: "Het stroomnet staat onder druk, en voor energie-intensieve bedrijven is energie geen vanzelfsprekendheid meer. Steddion helpt vastgoedontwikkelaars, beheerders, huurders, beleggers en bouwers om daar zelf de regie over te nemen: van analyse en advies tot opwek, batterijopslag, laadinfrastructuur en beheer. Een technisch verhaal, dat helder en betrouwbaar moest overkomen.",
      en: "The grid is under pressure, and for energy-intensive businesses energy is no longer a given. Steddion helps property developers, managers, tenants, investors and builders take control themselves: from analysis and advice to generation, battery storage, charging infrastructure and management. A technical story that had to come across as clear and reliable.",
    },
    approach: {
      nl: "We zetten het merk Steddion neer en ontwierpen de website, in het Nederlands en het Engels. Vijf oplossingen, van analyseren en adviseren tot optimaliseren en groeien, en vijf doelgroepen, van vastgoedontwikkelaar tot bouwer, hebben elk een eigen, overzichtelijke plek. Voor de kennisbank Energy Insights bouwden we een scraper die realtime thema's en marktontwikkelingen ophaalt; bezoekers zoeken en filteren er op nieuws, projecten, blogs en video's. Daarnaast maakten we landingspagina's, zoals die voor de servicepakketten van Steddion Asset Care, met HubSpot-formulieren, en die voor transporteurs die een laadplein nodig hebben. En we maakten video's. Vanuit het menu stap je direct door naar de online tools van Steddion.",
      en: "We established the Steddion brand and designed the website, in Dutch and English. Five solutions, from analysing and advising to optimising and growing, and five audiences, from property developer to builder, each have their own clear place. For the Energy Insights knowledge base we built a scraper that collects themes and market developments in real time; visitors search and filter it by news, projects, blogs and videos. We also made landing pages, such as the one for the Steddion Asset Care service packages, with HubSpot forms, and one for transport companies that need a charging hub. And we made videos. From the menu you step straight through to Steddion's online tools.",
    },
    result: {
      nl: "Een herkenbaar merk, een tweetalige website die een ingewikkeld onderwerp rustig uitlegt, landingspagina's voor gerichte campagnes en een kennisbank die gevoed wordt met actuele marktontwikkelingen.",
      en: "A recognisable brand, a bilingual website that explains a complex subject calmly, landing pages for targeted campaigns and a knowledge base fed with current market developments.",
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
    tools: ["hubspot", "supabase"],
    color: "#45297A",
    challenge: {
      nl: "Bedrijven met vastgoed staan voor de vraag wat ze met energie moeten: zonnepanelen, een batterij, laadpunten, een energiemanagementsysteem (EMS)? En welke leverancier past erbij? Steddion wilde die eerste verkenning online mogelijk maken, en de aanvragen die daaruit komen netjes opvolgen.",
      en: "Businesses with property face the question of what to do about energy: solar panels, a battery, charging points, an energy management system (EMS)? And which supplier fits? Steddion wanted to make that first exploration possible online, and follow up properly on the requests it brings in.",
    },
    approach: {
      nl: "We bouwden twee tools, elk met een flow vol logica. Met de EMS-vergelijker beantwoord je twee vragen, over je sector en je installaties, en krijg je een selectie van passende EMS-leveranciers die je verder filtert. De EPC Energy Property Configurator begint met een intake van een minuut. Daarna vul je in drie stappen je situatie, je nieuwe energiebehoefte en de oplossingen in, bekijk je simulaties en zie je welke oplossing Steddion voorstelt, met een samenvatting aan het eind. Met een account bewaar je je projecten, mail je simulaties naar jezelf en deel je rapporten met je team. Beide tools zijn ingericht als leadfunnel en gekoppeld aan HubSpot, zodat aanvragen direct in het CRM terechtkomen.",
      en: "We built two tools, each with a flow full of logic. In the EMS comparison tool you answer two questions, about your sector and your installations, and get a selection of matching EMS suppliers that you can filter further. The EPC Energy Property Configurator starts with a one-minute intake. Then you fill in your situation, your new energy demand and the solutions in three steps, view simulations and see which solution Steddion proposes, with a summary at the end. With an account you save your projects, email simulations to yourself and share reports with your team. Both tools are set up as lead funnels and integrated with HubSpot, so requests land straight in the CRM.",
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
      nl: "Een verfijnd merk, een website, een tool waarin je ziet welke oplossingen bij jou passen, een subsidieflow met eigen landingspagina voor de Noord-Hollandse regeling en leadflows voor Plenty Planet, met een koppeling naar Odoo CRM. Daarbij visualisaties van projecten en de social media en organische content. Plenty Planet helpt organisaties met lokale energie: zonne-energie, opslag en slimme energie-integratie.",
      en: "A refined brand, a website, a tool that shows which solutions suit you, a subsidy flow with its own landing page for the North Holland scheme and lead flows for Plenty Planet, integrated with Odoo CRM. Plus project visualisations and the social media and organic content. Plenty Planet helps organisations with local energy: solar power, storage and smart energy integration.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "automation-funnels", "seo-aeo-geo", "content-marketing-online-ads", "foto-video-3d-animatie"],
    applications: ["huisstijl", "webflow-website", "productconfigurator", "website-widgets", "crm-implementatie", "salesfunnels", "seo", "geo", "contentstructuur", "landingspaginas", "check-tools", "social-media-marketing", "3d-visualisatie"],
    tools: ["webflow", "odoo", "gsap", "zapier"],
    color: "#82B444",
    challenge: {
      nl: "Plenty Planet helpt organisaties hun energievoorziening om te bouwen, van kostenrisico naar eigen infrastructuur: zonne-overkappingen op parkeerterreinen, zonneparken, zon op dak, batterijopslag, laadinfrastructuur en geïntegreerde energiesystemen, ook als antwoord op netcongestie. Natuurpositief, waar het kan. Grote projecten, die met een heldere eerste stap moeten beginnen.",
      en: "Plenty Planet helps organisations rebuild their energy supply, from a cost risk into infrastructure of their own: solar car parks, solar parks, rooftop solar, battery storage, charging infrastructure and integrated energy systems, also as an answer to grid congestion. Nature-positive where possible. Big projects that need to start with a clear first step.",
    },
    approach: {
      nl: "We verfijnden het merk met een vernieuwd kleurenpalet en beeldsysteem, en ontwierpen en bouwden de website in Webflow, met oplossingen, diensten en cases elk op een eigen plek. De content zetten we opnieuw neer, zodat oplossingen als laadinfrastructuur, energieopslag en netcongestie helder op een rij staan. Dat maakt de site prettiger in gebruik en beter vindbaar, in zoekmachines en op AI-platforms. In de configurator, een tool waarin een bezoeker ziet welke oplossingen bij hem passen, geeft hij stap voor stap zijn situatie en wensen door: de oplossing staat al ingevuld vanaf de pagina waar hij vandaan komt, en vragen over sector, type locatie, oppervlakte, uitdaging en planning bepalen een leadscore. Via een koppeling gaan die aanvragen direct naar Odoo CRM, met kans en prioriteit erbij. Voor de Noord-Hollandse regeling voor zonnepanelen boven parkeerterreinen bouwden we een subsidieflow met een eigen landingspagina: uitleg over de regeling, een teller tot de deadline, voor wie het relevant is, een brochure-opt-in en een subsidiecheck van vier vragen in een pop-up, met de uitslag per e-mail. Opt-ins voor de brochure en whitepapers ondersteunen de conversie. Daarnaast maken we uitgebreide visualisaties van projecten, en verzorgen we de social media en organische content.",
      en: "We refined the brand with a renewed colour palette and visual system, and designed and built the website in Webflow, with solutions, services and cases each in their own place. We restructured the content so that solutions such as charging infrastructure, energy storage and grid congestion are clearly laid out. That makes the site easier to use and easier to find, in search engines and on AI platforms. In the configurator, a tool that shows visitors which solutions suit them, they share their situation and wishes step by step: the solution is pre-filled from the page they came from, and questions about sector, type of location, surface area, challenge and timing determine a lead score. Through an integration, those requests go straight into Odoo CRM, with probability and priority attached. For the North Holland scheme for solar panels above car parks we built a subsidy flow with a landing page of its own: an explanation of the scheme, a countdown to the deadline, who it is relevant for, a brochure opt-in and a four-question subsidy check in a pop-up, with the outcome sent by email. Opt-ins for the brochure and whitepapers support conversion. We also create extensive project visualisations, and look after the social media and organic content.",
    },
    result: {
      nl: "Een merk en een schaalbare website die laten zien wat Plenty Planet doet in de energietransitie, met een configurator die aanvragen gekwalificeerd in Odoo CRM zet, en een subsidieflow voor Noord-Holland.",
      en: "A brand and a scalable website that show what Plenty Planet does in the energy transition, with a configurator that puts qualified requests into Odoo CRM, and a subsidy flow for North Holland.",
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
      nl: "Branding, website en doorlopende social media en organische content op LinkedIn voor Electriffy, dat zonne- en opslagprojecten ontwikkelt met een regeneratief doel, van Namibië tot Zambia.",
      en: "Branding, website and ongoing social media and organic content on LinkedIn for Electriffy, which develops solar and storage projects with a regenerative purpose, from Namibia to Zambia.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "websites-webshops", "content-marketing-online-ads"],
    applications: ["huisstijl", "ux-ui-webdesign", "social-media-marketing"],
    tools: ["linkedin"],
    color: "#4D36D2",
    challenge: {
      nl: "Electriffy ontwikkelt zonne- en opslagprojecten in zuidelijk Afrika, met een plan om stroom uit Namibië naar Zambia te brengen. Het gaat om meer dan megawatts: water, natuur en lokaal levensonderhoud horen bij het verhaal. Investeerders, overheden, industrie en lokale gemeenschappen moesten dat allemaal snappen, en het verhaal moest ook na de lancering blijven doorlopen.",
      en: "Electriffy develops solar and storage projects in southern Africa, with a plan to bring power from Namibia to Zambia. It is about more than megawatts: water, nature and local livelihoods are part of the story. Investors, governments, industry and local communities all had to understand that, and the story had to keep going after the launch.",
    },
    approach: {
      nl: "We ontwikkelden de branding en de website. De site legt stap voor stap uit wat Electriffy doet: de oplossingen (zon en batterijopslag, stroomafnamecontracten en projectontwikkeling), in welke regio's en hoe de regeneratieve aanpak samen met Your.Earth werkt. Elke doelgroep heeft een eigen route: investeerders en ontwikkelingsbanken, overheden en netbeheerders, industrie en datacenters, en grondeigenaren en lokale gemeenschappen. Verhalen verdiepen het project, en het contactformulier vraagt meteen waar je gesprek over gaat, zodat elke vraag bij de juiste persoon landt. Daarnaast verzorgen we de social media en de organische content van Electriffy op LinkedIn.",
      en: "We developed the branding and the website. The site explains step by step what Electriffy does: the solutions (solar and battery storage, power purchase agreements and project development), in which regions and how the regenerative approach works together with Your.Earth. Every audience has its own route: investors and development finance institutions, governments and utilities, industry and data centres, and landowners and local communities. Stories add depth to the project, and the contact form asks straight away what your conversation is about, so every question reaches the right person. We also take care of Electriffy's social media and organic content on LinkedIn.",
    },
    result: {
      nl: "Een merk en website die een groot, technisch project helder neerzetten voor elke doelgroep, en content op LinkedIn die het verhaal blijft vertellen.",
      en: "A brand and website that present a large, technical project clearly to every audience, and LinkedIn content that keeps telling the story.",
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
      nl: "Branding, website, een investeringsmodel-rekenmodule, een impactmodule per project en doorlopende social media en organische content op LinkedIn voor YOUR.earth, dat bijdragen van bedrijven investeert in natuurprojecten in het landschap waar die bedrijven zelf actief zijn.",
      en: "Branding, website, an investment model calculator, an impact module per project and ongoing social media and organic content on LinkedIn for YOUR.earth, which invests contributions from companies in nature projects in the landscapes where those companies operate.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "content-marketing-online-ads"],
    applications: ["huisstijl", "ux-ui-webdesign", "offerte-calculator", "website-widgets", "social-media-marketing"],
    tools: ["linkedin"],
    color: "#C7F161",
    challenge: {
      nl: "YOUR.earth wil natuur en bedrijfsleven verbinden. Bedrijven dragen bij, YOUR.earth verdubbelt elke euro en zet het geld als renteloze lening in voor projecten in het landschap waar die bedrijven actief zijn: van duintuinen en agroforestry in Nederland tot waterzekerheid in Namibië. Een nieuw model, dat geloofwaardig moest overkomen bij partners, co-investeerders en donateurs. Dat lukt alleen als je kunt laten zien wat een bijdrage oplevert en hoe dat wordt gemeten.",
      en: "YOUR.earth wants to connect nature and business. Companies contribute, YOUR.earth doubles every euro and deploys the money as interest-free loans for projects in the landscapes where those companies operate: from dune gardens and agroforestry in the Netherlands to water security in Namibia. A new model that had to come across as credible to partners, co-investors and donors. That only works if you can show what a contribution achieves and how it is measured.",
    },
    approach: {
      nl: "We maakten de branding en de website. Op de homepage beweegt een kaart mee terwijl je scrolt, langs de landschappen en projecten, en op de regiopagina zoom je zelf in op een interactieve kaart. Voor het model bouwden we een rekenmodule: vul een contract- of investeringswaarde in en je ziet direct wat de partnerbijdrage, de beoogde match en het totale budget voor natuurherstel worden. Uitgewerkte voorbeelden en veelgestelde vragen staan er direct onder. Elke projectpagina kreeg een impactmodule: wat er gebeurt, welke partners welke rol hebben, wat er wordt gemeten en hoe (van nulmeting en satellietbeelden tot eDNA en een jaarlijks rapport), en hoe het geld in lagen wordt opgebouwd en verdeeld. Partners, bijdragers en regio's hebben elk een eigen ingang, en het contactformulier vraagt meteen of je wilt doneren, bijdragen of partner worden. Daarnaast verzorgen we de social media en de organische content op LinkedIn.",
      en: "We created the branding and the website. On the homepage a map moves along as you scroll, past the landscapes and projects, and on the regions page you zoom in yourself on an interactive map. For the model we built a calculator: enter a contract or investment value and you instantly see the partner commitment, the target match and the total budget for nature restoration. Worked examples and frequently asked questions sit right below it. Every project page got an impact module: what happens, which partners play which role, what is measured and how (from baseline and satellite imagery to eDNA and an annual report), and how the money is built up in layers and allocated. Partners, contributors and regions each have their own way in, and the contact form asks straight away whether you want to donate, contribute or become a partner. We also take care of the social media and organic content on LinkedIn.",
    },
    result: {
      nl: "Een merk en website die een nieuw model voor natuurfinanciering concreet en narekenbaar maken, met de projecten en hun gemeten impact in de hoofdrol.",
      en: "A brand and website that make a new model for financing nature tangible and easy to check, with the projects and their measured impact in the lead role.",
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
      nl: "Branding, de volledige website met een investeerderspagina, een webinar en doorlopende social media en organische content op LinkedIn voor JALO Energy, dat in Almelo een biopelletfabriek ontwikkelt die duurzame warmte, CO₂-afvang en landschapsherstel verbindt.",
      en: "Branding, the complete website with an investor page, a webinar and ongoing social media and organic content on LinkedIn for JALO Energy, which is developing a biopellet plant in Almelo that connects renewable heat, CO₂ capture and landscape restoration.",
    },
    sector: "energie-duurzaamheid",
    services: ["branding-rebranding", "content-marketing-online-ads", "websites-webshops"],
    applications: ["huisstijl", "social-media-marketing", "ux-ui-webdesign"],
    tools: ["linkedin"],
    color: "#2E2963",
    challenge: {
      nl: "JALO ontwikkelt in Almelo een fabriek die van resthout biopellets en lokale warmte maakt, biogene CO₂ afvangt en bijdraagt aan herstel van het landschap. Eén fabriek, een hele keten. Dat verhaal moest kloppen voor investeerders, afnemers, boeren en de regio, en elk van hen moest ook makkelijk het gesprek met JALO kunnen beginnen.",
      en: "In Almelo, JALO is developing a plant that turns residual wood into biopellets and local heat, captures biogenic CO₂ and contributes to restoring the landscape. One plant, a whole chain. That story had to make sense to investors, buyers, farmers and the region, and each of them had to be able to start a conversation with JALO easily.",
    },
    approach: {
      nl: "We gaven JALO een eigen merk en bouwden de volledige website. Die legt het JALO-model stap voor stap uit: Nederpellets, lokale warmte, CO₂-verwijdering, techniek, grondstoffen en het landschapsprogramma met Your.Earth. Boeren hebben een eigen pagina over agroforestry, investeerders een eigen investeerderspagina waar ze een gesprek aanvragen, en een aparte pagina laat zien hoe resultaten worden aangetoond. Een pagina met bronnen en projectstatus maakt duidelijk wat een plan is en wat al is afgesproken. Nederpellets vraag je aan in twee stappen, en het contactformulier vraagt eerst waar je vraag over gaat. Daarnaast maakten we een webinarpagina met sprekers en slidedeck, en verzorgen we de social media en de organische content op LinkedIn.",
      en: "We gave JALO its own brand and built the complete website. It explains the JALO model step by step: Nederpellets, local heat, carbon removal, technology, feedstock and the landscape programme with Your.Earth. Farmers have their own page about agroforestry, investors have a dedicated investor page where they request a conversation, and a separate page shows how results will be demonstrated. A sources and project status page makes clear what is a plan and what has already been agreed. You request Nederpellets in two steps, and the contact form first asks what your question is about. We also created a webinar page with the speakers and slide deck, and we take care of the social media and organic content on LinkedIn.",
    },
    result: {
      nl: "Een merk, een volledige website met een eigen route per doelgroep, een webinar en social content die samen één helder verhaal vertellen over energie, CO₂ en landschap.",
      en: "A brand, a complete website with its own route for each audience, a webinar and social content that together tell one clear story about energy, CO₂ and landscape.",
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
      nl: "Branding, website en ansichtkaarten voor Fairlink, het platform dat werving over landsgrenzen eerlijker, veiliger en transparanter maakt, met een eigen route en een conditionele leadflow per doelgroep.",
      en: "Branding, website and postcards for Fairlink, the platform that makes cross-border recruitment fairer, safer and more transparent, with a dedicated route and a conditional lead flow for each audience.",
    },
    year: 2026,
    sector: "tech-saas-startups",
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "grafisch-ontwerp-print"],
    applications: ["huisstijl", "webflow-website", "website-widgets", "flyers-posters"],
    tools: ["webflow"],
    color: "#22393E",
    challenge: {
      nl: "Fairlink werkt aan veiligere en eerlijkere werving van arbeidsmigranten over de grens. Werknemers moeten hun rechten kennen, werkgevers en recruiters willen kunnen aantonen dat hun werving eerlijk verloopt, overheden en ngo's willen zien wat er in de keten gebeurt en partners willen arbeidsmigranten op een eerlijke manier bereiken. Veel doelgroepen, één ingewikkeld internationaal verhaal.",
      en: "Fairlink works towards safer and fairer recruitment of migrant workers across borders. Workers need to know their rights, employers and recruiters want to show that their recruitment is fair, governments and NGOs want to see what happens along the chain, and partners want to reach migrant workers in a fair way. Many audiences, one complex international story.",
    },
    approach: {
      nl: "We brachten dat verhaal terug tot de kern en bouwden er een merk omheen. Op de website in Webflow heeft elke doelgroep een eigen route: werknemers, werkgevers, overheden en partners, elk met een eigen pagina en eigen veelgestelde vragen. Wie een demo aanvraagt, kiest eerst wie hij is: recruiter, werkgever of partner. Daarna volgt een flow in vijf stappen met vragen die per doelgroep verschillen, van plaatsingen en compliance tot wervingsschaal, uitdagingen en het gewenste samenwerkingsmodel, met een eigen bevestiging aan het eind. Daarnaast ontwierpen we ansichtkaarten in dezelfde stijl.",
      en: "We brought that story back to its core and built a brand around it. On the Webflow website every audience has its own route: workers, employers, governments and partners, each with its own page and its own FAQs. Anyone requesting a demo first chooses who they are: recruiter, employer or partner. Then follows a five-step flow with questions that differ per audience, from placements and compliance to recruitment scale, challenges and the preferred partnership model, with a confirmation of its own at the end. We also designed postcards in the same style.",
    },
    result: {
      nl: "Een helder merk, een website met een eigen route per doelgroep, een leadflow die iedere doelgroep de juiste vragen stelt en ansichtkaarten die het verhaal ook op papier vertellen.",
      en: "A clear brand, a website with its own route for each audience, a lead flow that asks every audience the right questions and postcards that tell the story on paper too.",
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
      nl: "Website met activiteitenpagina's en filters, een vierseizoenenfunctie, een koppeling naar de externe boekingsmodule, een eigen openingstijdenplugin, lokale SEO-pagina's, een kennisbank en een AI-chat, en doorlopende social media en organische content voor Alpacafarm Vorstenbosch.",
      en: "A website with activity pages and filters, a four-seasons feature, an integration with the external booking module, a custom opening-hours plugin, local SEO pages, a knowledge base and an AI chat, and ongoing social media and organic content for Alpacafarm Vorstenbosch.",
    },
    sector: "travel-leisure",
    services: ["websites-webshops", "content-marketing-online-ads", "foto-video-3d-animatie", "configurators-lead-tools-widgets", "seo-aeo-geo", "ai-consultancy"],
    applications: [
      "ux-ui-webdesign",
      "wordpress-website",
      "social-media-marketing",
      "social-video",
      "website-widgets",
      "boekingswidget",
      "lokale-seo",
      "seo-content",
      "ai-chatbots",
    ],
    tools: ["wordpress", "elementor", "instagram", "facebook"],
    color: "#F39200",
    challenge: {
      nl: "Alpacafarm Vorstenbosch is een recreatieve alpacafarm in het Brabantse buitengebied, een paar kilometer van ons kantoor. Je kunt er wandelen met de alpaca's, high tea drinken of pizza eten tussen de dieren, kinderfeestjes en bedrijfsuitjes vieren, overnachten en alpaca's kopen, en er is een winkel. Bezoekers willen vooral snel weten wanneer ze langs kunnen komen, wat er te doen is en hoe ze boeken. En de openingstijden en activiteiten veranderen met de seizoenen mee.",
      en: "Alpacafarm Vorstenbosch is a recreational alpaca farm in the Brabant countryside, a few kilometres from our office. You can walk with the alpacas, have high tea or eat pizza among the animals, celebrate children's parties and company outings, stay the night and buy alpacas, and there is a shop. Visitors mostly want to know quickly when they can drop by, what there is to do and how to book. And the opening hours and activities change with the seasons.",
    },
    approach: {
      nl: "We bouwden de website in WordPress, met een duidelijke indeling in activiteiten, lunch en diner in de Alpacabar, overnachten, fokkerij, zakelijk en de winkel. De activiteiten staan centraal: elke activiteit heeft een eigen pagina met wat je gaat doen, de belangrijkste gegevens op een rij en eigen veelgestelde vragen, en het overzicht werkt met filters en laat apart zien wat nu niet beschikbaar is. De vierseizoenenfunctie wisselt de foto's per activiteit mee met het seizoen, zodat de site het hele jaar laat zien wat er nu te beleven is. Op de reserveerpagina kies je een activiteit en boek je direct via de gekoppelde externe boekingsmodule, voor activiteiten en voor horeca zoals lunch en high tea. Voor de openingstijden ontwikkelden we een eigen plugin met een beheerbare module: een maandkalender met per dag de tijden, gesloten en gedeeltelijk geopende dagen en bijzonderheden, die de farm zelf bijwerkt. Een centrale FAQ is ingedeeld per thema. Daarnaast maakten we lokale SEO-pagina's, voor bezoekers en bedrijven uit verschillende steden en regio's, en een kennisbank over alpaca's. We plaatsten een AI-chat van qbud.ai, waarin bezoekers meteen hun vraag kunnen stellen. De webshop van de Alpaca Boutique bouwden we apart, in WooCommerce. En we verzorgen de social media en de organische content: de feed, reels en alles wat erbij hoort, met de alpaca's als vanzelfsprekende sterren.",
      en: "We built the website in WordPress, clearly organised into activities, lunch and dinner in the Alpacabar, overnight stays, breeding, business and the shop. The activities take centre stage: every activity has its own page with what you will do, the key details at a glance and its own frequently asked questions, and the overview works with filters and shows separately what is not available right now. The four-seasons feature changes the photos for each activity with the season, so all year round the site shows what there is to experience right now. On the booking page you choose an activity and book straight away through the integrated external booking module, for activities as well as food and drink such as lunch and high tea. For the opening hours we developed a custom plugin with a manageable module: a monthly calendar showing the hours for each day, closed and partly open days and special notes, which the farm updates itself. A central FAQ is organised by theme. We also created local SEO pages, for visitors and companies from different cities and regions, and a knowledge base about alpacas. We added an AI chat by qbud.ai, where visitors can ask their question straight away. We built the Alpaca Boutique web shop separately, in WooCommerce. And we take care of the social media and organic content: the feed, reels and everything that goes with it, with the alpacas as the natural stars.",
    },
    result: {
      nl: "Een website waarop je meteen ziet wat er te doen is, wanneer je welkom bent en hoe je boekt, die met de seizoenen meebeweegt, met lokale pagina's en een kennisbank voor bezoekers uit de hele regio, en social media vol alpaca's, van feed tot reels.",
      en: "A website that shows right away what there is to do, when you're welcome and how to book, that moves with the seasons, with local pages and a knowledge base for visitors from across the region, and social media full of alpacas, from feed to reels.",
    },
    url: "https://alpacavorstenbosch.nl",
  },
  // Alpaca Boutique: eigen deel in de familie van Alpacafarm Vorstenbosch (case-families.json). Webshop live op alpaca-boutique.nl
  // (footer "Branding & Website by" M7). Jaar 2025: de WooCommerce-pagina's en eerste producten zijn in nov./dec. 2025 aangemaakt.
  {
    slug: "alpaca-boutique",
    client: "Alpacafarm Vorstenbosch",
    title: {
      nl: "Alpaca Boutique: de winkel van de farm, ook online",
      en: "Alpaca Boutique: the farm shop, online too",
    },
    summary: {
      nl: "De webshop van de Alpaca Boutique, de winkel van Alpacafarm Vorstenbosch, in WordPress en WooCommerce: van alpacawol en dekbedden tot knuffels en cadeaus, met een megamenu per categorie, zoeken en filters, productpagina's met veelgestelde vragen en digitale cadeaubonnen.",
      en: "The web shop for the Alpaca Boutique, the shop of Alpacafarm Vorstenbosch, in WordPress and WooCommerce: from alpaca wool and duvets to cuddly toys and gifts, with a mega menu per category, search and filters, product pages with FAQs and digital gift cards.",
    },
    year: 2025,
    sector: "food-retail",
    services: ["websites-webshops"],
    applications: ["webshop", "wordpress-website", "ux-ui-webdesign"],
    tools: ["wordpress", "woocommerce", "elementor"],
    cover: "/media/cases/alpaca-boutique/cover.webp",
    screens: { desktop: "/media/cases/alpaca-boutique/screen-desktop.webp", mobile: "/media/cases/alpaca-boutique/screen-mobile.webp" },
    color: "#231D45",
    challenge: {
      nl: "Op Alpacafarm Vorstenbosch staat ook een winkel, de Alpaca Boutique, vol producten van en over alpaca's: van alpacawol, dekbedden en plaids tot knuffels, sleutelhangers en cadeaus. Die winkel moest ook online open, zodat je thuis net zo makkelijk iets uitzoekt als in de boutique zelf.",
      en: "Alpacafarm Vorstenbosch also has a shop, the Alpaca Boutique, full of products from and about alpacas: from alpaca wool, duvets and throws to cuddly toys, key rings and gifts. That shop had to open online too, so that choosing something at home is just as easy as in the boutique itself.",
    },
    approach: {
      nl: "We bouwden de webshop van de Alpaca Boutique in WordPress met WooCommerce en Elementor. Een megamenu met zeven categorieën, van wonen en accessoires tot alpacawol en dekbedden, brengt je meteen bij het juiste product. De homepage toont de best-sellers en alle categorieën met een korte omschrijving, en verwijst naar de farm, voor wie de alpaca's ook in het echt wil zien. In de shop zoek je op productnaam en filter je op prijs en categorie. Op de productpagina kies je je uitvoering, zoals de maat van een dekbed, en vind je de omschrijving, de verzendinformatie en veelgestelde vragen over alpacawol, verzorging, levering en retourneren. Digitale cadeaubonnen maken het af.",
      en: "We built the Alpaca Boutique web shop in WordPress with WooCommerce and Elementor. A mega menu with seven categories, from home and accessories to alpaca wool and duvets, takes you straight to the right product. The homepage shows the best-sellers and every category with a short description, and points to the farm, for anyone who wants to see the alpacas in real life. In the shop you search by product name and filter by price and category. On the product page you choose your option, such as the size of a duvet, and find the description, the shipping information and FAQs about alpaca wool, care, delivery and returns. Digital gift cards complete it.",
    },
    result: {
      nl: "Een webshop in de stijl van de boutique, waarin je alpacaproducten thuis net zo makkelijk uitzoekt als in de winkel op de farm.",
      en: "A web shop in the style of the boutique, where choosing alpaca products at home is just as easy as in the shop on the farm.",
    },
    url: "https://www.alpaca-boutique.nl",
    narrative: {
      intro: {
        nl: "Wol, dekbedden, knuffels en cadeaus. De winkel van Alpacafarm Vorstenbosch heeft het allemaal, en met de webshop bestel je het ook gewoon thuis.",
        en: "Wool, duvets, cuddly toys and gifts. The shop at Alpacafarm Vorstenbosch has it all, and with the web shop you simply order it from home too.",
      },
      chapters: [
        {
          title: { nl: "Van de farm naar de webshop.", en: "From the farm to the web shop." },
          body: [
            {
              nl: "Naast de activiteiten heeft Alpacafarm Vorstenbosch een eigen winkel, de Alpaca Boutique. Voor die winkel bouwden we de webshop, in WordPress met WooCommerce, in dezelfde warme stijl als de boutique: donkerblauw met oudroze. Wie de alpaca's ook in het echt wil zien, vindt vanuit de shop meteen de weg naar de farm.",
              en: "Alongside the activities, Alpacafarm Vorstenbosch has a shop of its own, the Alpaca Boutique. For that shop we built the web shop, in WordPress with WooCommerce, in the same warm style as the boutique: dark blue with dusty pink. Anyone who wants to see the alpacas in real life finds the way to the farm straight from the shop.",
            },
          ],
        },
        {
          title: { nl: "Snel bij het juiste product.", en: "Quickly to the right product." },
          body: [
            {
              nl: "Een megamenu met zeven categorieën, van wonen en accessoires tot alpacawol en dekbedden, brengt je meteen waar je moet zijn. In de shop zoek je op naam en filter je op prijs en categorie.",
              en: "A mega menu with seven categories, from home and accessories to alpaca wool and duvets, takes you straight where you need to be. In the shop you search by name and filter by price and category.",
            },
            {
              nl: "Op de productpagina kies je je uitvoering, zoals de maat van een dekbed, en lees je alles over het product, de verzending en de vragen die klanten het vaakst stellen, van verzorging tot retourneren. En wie twijfelt, geeft een digitale cadeaubon.",
              en: "On the product page you choose your option, such as the size of a duvet, and read everything about the product, the shipping and the questions customers ask most, from care to returns. And if you can't decide, you give a digital gift card.",
            },
          ],
        },
      ],
    },
  },
];
