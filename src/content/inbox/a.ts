import type { SuppliedSet } from "../supplied-media";
import type { Case } from "../types";

/* ============================================================
   FigmaAssets (M7's eigen map met screenshots, brandbooks, video's
   en mockups), groep A. Nieuwe projecten in `cases`, aangeleverd
   beeld en films per case in `media` (bestanden:
   public/media/cases/<slug>/s-*.{webp,mp4}). Zie inbox/index.ts.
   Teksten beschrijven alleen wat het materiaal laat zien (concept
   tot M7 ze bevestigt). Geen jaartallen, cijfers of resultaten.
   ============================================================ */

const M = (slug: string, file: string) => `/media/cases/${slug}/${file}`;

export const inboxA: { cases: Case[]; media: Record<string, SuppliedSet> } = {
  cases: [
    {
      slug: "albertx",
      client: "AlbertX",
      title: {
        nl: "AlbertX: UI/UX voor een optimalisatieplatform op het Albertkanaal",
        en: "AlbertX: UI/UX for an optimisation platform on the Albert Canal",
      },
      summary: {
        nl: "UI/UX-designs voor AlbertX, een nieuw optimalisatieplatform voor containerbinnenvaartschepen (barges) op het Albertkanaal: capaciteit zoeken, aanbieden en reserveren in één omgeving.",
        en: "UI/UX designs for AlbertX, a new optimisation platform for container barges on the Albert Canal: searching, offering and booking capacity in one environment.",
      },
      sector: "transport-logistiek",
      services: ["web-apps-portals-apps"],
      applications: ["ux-ui-app-design"],
      tools: [],
      color: "#00D9EB",
      challenge: {
        nl: "AlbertX is een nieuw platform om het containervervoer met binnenvaartschepen op het Albertkanaal te optimaliseren. Het platform moest een interface krijgen waarin je in één oogopslag ziet welke capaciteit er beschikbaar is, en die meteen reserveert.",
        en: "AlbertX is a new platform for optimising container transport by barge on the Albert Canal. The platform needed an interface that shows at a glance which capacity is available, and lets you book it straight away.",
      },
      approach: {
        nl: "We ontwierpen de UI/UX van het platform, in de huisstijl van AlbertX: donkergrijs met cyaan. De navigatie leidt naar het dashboard, capaciteit aanbieden, capaciteit zoeken, mijn boekingen, rapportage en instellingen. Op de marktplaats zoek je capaciteit op twee manieren: met een specifieke zoekopdracht op basis van zoekcriteria, of met een doorlopende zoekopdracht die je met pushnotificaties op de hoogte houdt. Daaronder staan de aankomende capaciteitsslots in een tabel, met per slot de operator, de terminal, het type, de beschikbare capaciteit en de prijs per TEU, en een knop om direct te reserveren.",
        en: "We designed the UI/UX of the platform, in AlbertX's identity: dark grey with cyan. The navigation leads to the dashboard, offering capacity, searching capacity, my bookings, reporting and settings. In the marketplace you search for capacity in two ways: with a specific search based on criteria, or with a continuous search that keeps you posted through push notifications. Below that, the upcoming capacity slots sit in a table, with the operator, terminal, type, available capacity and price per TEU for each slot, and a button to book straight away.",
      },
      result: {
        nl: "Een platformontwerp waarin capaciteit zoeken, aanbieden en reserveren op één plek samenkomt.",
        en: "A platform design that brings searching, offering and booking capacity together in one place.",
      },
      cover: M("albertx", "s-fa-brandbook-01.webp"),
      shape: "wide",
    },
    {
      slug: "alpen-experience-hotel",
      client: "Alpen Experience Apart Hotel",
      title: {
        nl: "Alpen Experience: een nieuw logo met de bergen erin",
        en: "Alpen Experience: a new logo with the mountains in it",
      },
      summary: {
        nl: "Een nieuw logo en een nieuwe website voor Alpen Experience Apart Hotel: een gelaagd beeldmerk van bergtoppen in beige en bruin, vastgelegd in een brandbook.",
        en: "A new logo and a new website for Alpen Experience Apart Hotel: a layered mark of mountain peaks in beige and brown, captured in a brandbook.",
      },
      sector: "travel-leisure",
      services: ["branding-rebranding", "websites-webshops"],
      applications: ["logo-ontwerp", "brandbook", "ux-ui-webdesign"],
      tools: [],
      color: "#422B20",
      challenge: {
        nl: "Alpen Experience Apart Hotel kreeg een nieuw logo en een nieuwe website. Het logo moest de bergen direct oproepen, en werken op lichte en op donkere achtergronden.",
        en: "Alpen Experience Apart Hotel got a new logo and a new website. The logo had to evoke the mountains straight away, and work on light as well as dark backgrounds.",
      },
      approach: {
        nl: "We ontwierpen een beeldmerk van gelaagde bergtoppen, met daaronder de woordmerken 'Alpen Experience' en 'Apart Hotel' in rustige kapitalen. In het brandbook staan de varianten naast elkaar: in bruin op beige, in beige op bruin, in zwart en in warm oranje op zwart, met een preeg op papier als voorbeeld van de toepassing. Daarnaast maakten we de nieuwe website van het hotel.",
        en: "We designed a mark of layered mountain peaks, with the wordmarks 'Alpen Experience' and 'Apart Hotel' beneath it in calm capitals. The brandbook shows the variants side by side: brown on beige, beige on brown, black, and warm orange on black, with a letterpress on paper as an example of how it is applied. We also made the hotel's new website.",
      },
      result: {
        nl: "Een rustig, warm logo dat de bergen in één oogopslag laat zien, met varianten voor elke achtergrond, en een nieuwe website voor het hotel.",
        en: "A calm, warm logo that shows the mountains at a glance, with variants for every background, and a new website for the hotel.",
      },
      cover: M("alpen-experience-hotel", "s-fa-brandbook-03.webp"),
      shape: "wide",
    },
    {
      slug: "amainfilms",
      client: "Amain Films",
      title: {
        nl: "Amain Films: een merk en een website zo filmisch als het werk",
        en: "Amain Films: a brand and a website as cinematic as the work",
      },
      summary: {
        nl: "Branding en website voor Amain Films: een logo met drie pijlen en een donkere, filmische homepage met hun beelden, de apparatuur en een montagetijdlijn.",
        en: "Branding and website for Amain Films: a logo with three arrows and a dark, cinematic homepage with their footage, their equipment and an editing timeline.",
      },
      sector: "sport-media",
      services: ["branding-rebranding", "websites-webshops"],
      applications: ["logo-ontwerp", "huisstijl", "ux-ui-webdesign"],
      tools: [],
      color: "#E39345",
      challenge: {
        nl: "Amain Films maakt film en video, waar het verhaal zich ook afspeelt. Het merk en de website moesten dat werk laten spreken, en laten zien hoe en waarmee ze werken.",
        en: "Amain Films makes film and video, wherever the story takes place. The brand and the website had to let that work speak, and show how and with what they work.",
      },
      approach: {
        nl: "We ontwierpen het logo: AMAIN in kapitalen naast FILMS, met drie pijlen als beeldmerk, die groot terugkomen in de hero van de website. Op de donkere homepage krijgen de beelden van Amain Films de ruimte. Na 'Where creativity meets cinematic excellence' volgen de belofte om de grenzen van filmmaken op te zoeken, frame voor frame, een wereldbol voor 'we're there to capture it', de camera's en lenzen waarmee ze filmen, en een blok in de vorm van een montagetijdlijn, met colorgrading, footage en audio als sporen. Oranje accenten houden het geheel samen, en de navigatie leidt naar portfolio, service, het verhaal en reviews.",
        en: "We designed the logo: AMAIN in capitals next to FILMS, with three arrows as the mark, which return large in the website's hero. The dark homepage gives Amain Films' footage room to breathe. After 'Where creativity meets cinematic excellence' come the promise to push the boundaries of filmmaking, one frame at a time, a globe for 'we're there to capture it', the cameras and lenses they film with, and a block shaped like an editing timeline, with colour grading, footage and audio as tracks. Orange accents hold it all together, and the navigation leads to portfolio, service, their story and reviews.",
      },
      result: {
        nl: "Een merk en een filmische website waarop het werk van Amain Films voorop staat.",
        en: "A brand and a cinematic website that put Amain Films' work first.",
      },
      cover: M("amainfilms", "s-fa-design-01.webp"),
      shape: "wide",
    },
    {
      slug: "berkley-investments",
      client: "Berkley Investments",
      title: {
        nl: "Berkley Investments: vastgoed met maatschappelijke impact",
        en: "Berkley Investments: real estate with social impact",
      },
      summary: {
        nl: "Webdesign, een brochure en visualisaties van projecten voor Berkley Investments, een investeringsmaatschappij in vastgoed en energie: groen, goud en grote beelden van monumentale gebouwen.",
        en: "Web design, a brochure and project visualisations for Berkley Investments, an investment company in real estate and energy: green, gold and large images of monumental buildings.",
      },
      sector: "finance-fintech",
      services: ["websites-webshops", "grafisch-ontwerp-print", "foto-video-3d-animatie"],
      applications: ["ux-ui-webdesign", "brochures-magazines", "3d-visualisatie"],
      tools: [],
      color: "#01483A",
      challenge: {
        nl: "Berkley Investments investeert in vastgoed, zorgvastgoed en energie, met maatschappelijke impact als uitgangspunt. Die toon moest terugkomen in de website en in het drukwerk: degelijk, warm en zonder opsmuk.",
        en: "Berkley Investments invests in real estate, healthcare property and energy, with social impact as its starting point. That tone had to come through in the website and in print: solid, warm and without frills.",
      },
      approach: {
        nl: "We kozen voor diepgroen met goud, een klassieke schreefletter in kapitalen en veel ruimte voor fotografie van de gebouwen. Op de homepage staan de projecten als grote kaarten in een slider, gevolgd door een blok over energie. In de brochure krijgt het thema Social Impact een eigen spread, met foto's van de gebouwen en hun omgeving. Daarnaast maakten we uitgebreide visualisaties van projecten.",
        en: "We chose deep green with gold, a classic serif in capitals and plenty of room for photography of the buildings. On the homepage the projects appear as large cards in a slider, followed by a block on energy. In the brochure the theme of Social Impact gets a spread of its own, with photos of the buildings and their surroundings. We also created extensive visualisations of projects.",
      },
      result: {
        nl: "Een website en brochure die dezelfde rustige, monumentale uitstraling hebben als het vastgoed van Berkley.",
        en: "A website and brochure with the same calm, monumental look as Berkley's real estate.",
      },
      cover: M("berkley-investments", "s-fa-website-02.webp"),
      concept: true,
      shape: "wide",
    },
    {
      slug: "bctn-qhse",
      client: "BCTN",
      title: {
        nl: "BCTN QHSE: checklists op de terminal, rapport in de mailbox",
        en: "BCTN QHSE: checklists at the terminal, reports in the inbox",
      },
      summary: {
        nl: "Een volledig QHSE-platform voor de containerterminals van BCTN: checklists voor kranen en reachstackers, safety walks en Take 5, recente updates en een QHSE-rapport per terminal dat elke week automatisch wordt gemaild.",
        en: "A complete QHSE platform for BCTN's container terminals: checklists for cranes and reach stackers, safety walks and Take 5, recent updates and a QHSE report per terminal that is emailed automatically every week.",
      },
      sector: "transport-logistiek",
      services: ["web-apps-portals-apps", "automation-funnels"],
      applications: ["dashboards", "workflow-automatisering"],
      tools: [],
      color: "#206088",
      challenge: {
        nl: "Op de terminals worden machines gecontroleerd en veiligheidsrondes gelopen. Die controles moesten eenvoudig in te vullen zijn op de werkvloer, en het overzicht moest zonder extra werk binnenkomen.",
        en: "At the terminals, machines are checked and safety rounds are walked. Those checks had to be easy to fill in on the shop floor, and the overview had to arrive without extra work.",
      },
      approach: {
        nl: "We bouwden het volledige QHSE-platform. Het dashboard toont per onderdeel een tegel: Kraan, Reachstacker, Safety walk en Take 5, met daarnaast de recente updates, bijvoorbeeld over een nieuwe reachstacker. Een checklist begint met de machinecode en de urenstand en loopt dan in genummerde stappen; per punt kies je OK, Niet OK niet urgent of Niet OK urgent, met ruimte voor een toelichting. Elke week verstuurt het platform automatisch een QHSE-rapport per terminal, met het aantal ingevulde machinechecklists en safety walks en de punten die aandacht nodig hebben.",
        en: "We built the complete QHSE platform. The dashboard shows a tile per area: Crane, Reach stacker, Safety walk and Take 5, next to the recent updates, for instance about a new reach stacker. A checklist starts with the machine code and the hour reading and then runs in numbered steps; for each item you choose OK, Not OK non-urgent or Not OK urgent, with room for a note. Every week the platform automatically sends a QHSE report per terminal, with the number of completed machine checklists and safety walks and the items that need attention.",
      },
      result: {
        nl: "Controles die op de terminal zelf worden ingevuld, en een wekelijks overzicht per terminal dat vanzelf binnenkomt.",
        en: "Checks that are filled in at the terminal itself, and a weekly overview per terminal that arrives by itself.",
      },
      cover: M("bctn-qhse", "s-fa-checklist-rapport.webp"),
      shape: "wide",
    },
    {
      slug: "calendarlink",
      client: "CalendarLink",
      title: {
        nl: "CalendarLink: UX/UI-design van de app",
        en: "CalendarLink: UX/UI design of the app",
      },
      summary: {
        nl: "UX/UI-design van de nieuwe applicatie van CalendarLink: de flow om een event aan te maken, de eventpagina met 'Add to calendar', een persoonlijke uitnodiging en dezelfde stappen op mobiel.",
        en: "UX/UI design of CalendarLink's new application: the flow for creating an event, the event page with 'Add to calendar', a personal invitation and the same steps on mobile.",
      },
      sector: "tech-saas-startups",
      services: ["web-apps-portals-apps"],
      applications: ["ux-ui-app-design"],
      tools: [],
      color: "#2F80E6",
      challenge: {
        nl: "In de nieuwe applicatie van CalendarLink maak je een event dat bezoekers in hun eigen agenda zetten. Het aanmaken moest net zo eenvoudig voelen als het toevoegen: weinig velden, en direct zien hoe het eruitziet.",
        en: "In CalendarLink's new application you create an event that visitors add to their own calendar. Creating it had to feel just as easy as adding it: few fields, and seeing straight away what it looks like.",
      },
      approach: {
        nl: "We ontwierpen de UX/UI van de applicatie. Een nieuw event maak je in stappen: naam, datum, locatie, bezoekers en review, met naast het formulier steeds een voorbeeld van de eventpagina, op desktop en op mobiel. Je kiest merkkleuren, een achtergrond en een persoonlijke welkomstzin, zoals 'you're invited!' met de naam van de gast, en een beschrijving laat je desgewenst met AI genereren. De eventpagina toont datum, tijd en locatie op een kaart, met knoppen voor Google, Apple, Outlook en andere agenda's, en bezoekers kunnen zich abonneren op nieuwe events. Op mobiel volg je dezelfde stappen, met een keuze tussen een fysieke locatie en een online meeting, een kaart en een navigatieknop.",
        en: "We designed the UX/UI of the application. You create a new event in steps: name, date, location, visitors and review, with a preview of the event page next to the form throughout, on desktop and on mobile. You choose brand colours, a background and a personal welcome line, such as 'you're invited!' with the guest's name, and you can have a description generated with AI. The event page shows date, time and location on a map, with buttons for Google, Apple, Outlook and other calendars, and visitors can subscribe to new events. On mobile you follow the same steps, with a choice between a physical venue and a virtual meeting, a map and a navigate button.",
      },
      result: {
        nl: "Een event aanmaken dat voelt als invullen en meteen zien, op desktop en op mobiel.",
        en: "Creating an event that feels like filling in and seeing it at once, on desktop and on mobile.",
      },
      cover: M("calendarlink", "s-fa-design-01.webp"),
      shape: "wide",
    },
    {
      slug: "capilex",
      client: "Capilex",
      title: {
        nl: "Capilex: webdesign en branding voor compliance",
        en: "Capilex: web design and branding for compliance",
      },
      summary: {
        nl: "Webdesigns en branding voor Capilex, met geanimeerde illustraties van de functies: KBO-uittreksels opvragen, een identiteit verifiëren en een risicomatrix invullen.",
        en: "Web designs and branding for Capilex, with animated illustrations of its features: requesting company register (KBO) extracts, verifying an identity and completing a risk matrix.",
      },
      sector: "finance-fintech",
      services: ["websites-webshops", "branding-rebranding", "foto-video-3d-animatie"],
      applications: ["ux-ui-webdesign", "huisstijl", "motion-design"],
      tools: [],
      color: "#133968",
      challenge: {
        nl: "Capilex ondersteunt klantonderzoek en compliance, met functies als KBO-uittreksels, ID-verificatie en een risicomatrix. Zulke functies zijn lastig in woorden uit te leggen; laten zien werkt beter.",
        en: "Capilex supports customer due diligence and compliance, with features such as company register (KBO) extracts, ID verification and a risk matrix. Features like these are hard to explain in words; showing them works better.",
      },
      approach: {
        nl: "We werkten aan de webdesigns en de branding van Capilex, in donkerblauw met oranjerood als accent. De functies brachten we in beeld met korte animaties op basis van de interface, rustig en zonder overbodige details. Een cursor zoekt een bedrijf op via handelsnaam, KBO-nummer of vestigingsnummer, en het uittreksel verschijnt. Een ID-kaart wordt gescand, een selfie bevestigt de identiteit en de status springt op geverifieerd. Bij de risicomatrix gaan schakelaars om, zoals 'Is de klant UBO of PEP?', en volgt de risico-uitkomst.",
        en: "We worked on Capilex's web designs and branding, in dark blue with orange-red as the accent. We brought the features to life with short animations based on the interface, calm and without unnecessary detail. A cursor looks up a company by trade name, KBO number or establishment number, and the extract appears. An ID card is scanned, a selfie confirms the identity and the status switches to verified. In the risk matrix, toggles switch, such as 'Is the client a UBO or PEP?', and the risk outcome follows.",
      },
      result: {
        nl: "Webdesigns en een merkstijl waarin drie functies van Capilex elk in een paar seconden duidelijk worden.",
        en: "Web designs and a brand style in which three Capilex features each become clear in a few seconds.",
      },
      cover: M("capilex", "s-fa-id-verificatie.webp"),
      shape: "wide",
    },
    {
      slug: "carinspect",
      client: "AI Car Inspect",
      title: {
        nl: "AI Car Inspect: een auto inspecteren met je telefoon",
        en: "AI Car Inspect: inspecting a car with your phone",
      },
      summary: {
        nl: "Creatief concept en animatie voor AI Car Inspect: je loopt met je telefoon om de auto heen, en de inspectie scant zijde voor zijde en wiel voor wiel, met de voortgang in beeld.",
        en: "Creative concept and animation for AI Car Inspect: you walk around the car with your phone, and the inspection scans it side by side and wheel by wheel, with the progress on screen.",
      },
      sector: "automotive-mobiliteit",
      services: ["foto-video-3d-animatie"],
      applications: ["motion-design"],
      tools: [],
      color: "#11FD90",
      challenge: {
        nl: "AI Car Inspect laat de camera van je telefoon een auto inspecteren. Dat idee moest in één korte animatie duidelijk worden.",
        en: "AI Car Inspect lets your phone's camera inspect a car. That idea had to become clear in one short animation.",
      },
      approach: {
        nl: "We bedachten het creatieve concept en maakten de animatie. Je volgt een route om de auto. Bovenin het scherm staat welk deel je scant, zoals de passagierszijde of het linker voorwiel, met een percentage dat oploopt. Een groene laag kleurt het gescande deel in, en een label op de grond wijst het volgende deel aan. De telefoon staat centraal op een donkere achtergrond, met de naam AI Car Inspect ernaast en AI in een groen blok.",
        en: "We came up with the creative concept and made the animation. You follow a route around the car. At the top of the screen it shows which part you are scanning, such as the passenger side or the front-left wheel, with a percentage that counts up. A green layer fills in the scanned part, and a label on the ground points to the next part. The phone is centred on a dark background, with the name AI Car Inspect beside it and AI in a green block.",
      },
      result: {
        nl: "Een concept en animatie die in een paar seconden laten zien hoe een AI-inspectie met je telefoon werkt.",
        en: "A concept and animation that show in a few seconds how an AI inspection with your phone works.",
      },
      cover: M("carinspect", "s-fa-ai-inspectie-still.webp"),
      shape: "wide",
    },
    {
      slug: "consuluisse",
      client: "Consuluisse",
      title: {
        nl: "Consuluisse: twee richtingen voor een brugfinancier",
        en: "Consuluisse: two directions for a bridge financier",
      },
      summary: {
        nl: "Webdesign en website voor Consuluisse: twee uitwerkingen van de homepage, 'Fall' en 'Horizon', met dezelfde skyline, kernpijlers en het rode merkaccent.",
        en: "Web design and website for Consuluisse: two versions of the homepage, 'Fall' and 'Horizon', with the same skyline, core pillars and red brand accent.",
      },
      sector: "finance-fintech",
      services: ["websites-webshops"],
      applications: ["ux-ui-webdesign"],
      tools: [],
      color: "#EC282A",
      challenge: {
        nl: "Consuluisse biedt flexibele brugfinanciering, met als motto de brug tussen financiering en duurzame projecten. De website moest de vier kernpijlers van de dienstverlening direct laten zien.",
        en: "Consuluisse offers flexible bridge financing, bridging the gap between finance and sustainable projects. The website had to show the four core pillars of its services straight away.",
      },
      approach: {
        nl: "We maakten twee styleframes van de homepage. Beide openen met een skyline in herfstkleuren en de kop 'Bridging the gap between finance and sustainable projects', met knoppen naar de cases en de dienstverlening. 'Fall' zet de tekst links en de kernpijlers Snelheid, Betrouwbaarheid, Transparantie en Flexibiliteit in een raster op een lichte achtergrond. 'Horizon' centreert de kop en zet de vier pijlers op een rij in een donker blok. Rood komt terug in de knoppen en het logo, en de navigatie leidt naar Bridge Finance, cases, veelgestelde vragen, over ons en contact. Daarna werkten we het ontwerp uit tot de website.",
        en: "We made two style frames of the homepage. Both open with a skyline in autumn colours and the headline 'Bridging the gap between finance and sustainable projects', with buttons to the cases and the services. 'Fall' places the text on the left and the core pillars Speed, Reliability, Transparency and Flexibility in a grid on a light background. 'Horizon' centres the headline and lines up the four pillars in a dark block. Red returns in the buttons and the logo, and the navigation leads to Bridge Finance, cases, FAQs, about us and contact. We then developed the design into the website.",
      },
      result: {
        nl: "Twee uitgewerkte richtingen voor de homepage, als basis voor de website van Consuluisse.",
        en: "Two worked-out directions for the homepage, as the basis for the Consuluisse website.",
      },
      cover: M("consuluisse", "s-fa-styleframe-fall.webp"),
      shape: "wide",
    },
    {
      slug: "devakhandel",
      client: "De Vakhandel",
      title: {
        nl: "De Vakhandel: een webshop voor al het groenonderhoud",
        en: "De Vakhandel: a webshop for all green maintenance",
      },
      summary: {
        nl: "De webshop van De Vakhandel, leverancier voor tuin en groenonderhoud, praktisch opnieuw gebouwd in de bestaande WordPress- en WooCommerce-omgeving, met een volledig nieuwe front-end, UX en branding: megamenu's met alle categorieën, productpagina's met alles wat je wilt weten, een checkout in duidelijke stappen en conversieverbeteringen door de hele shop, voor particulieren en professionals.",
        en: "The webshop for De Vakhandel, a supplier for gardens and green maintenance, practically rebuilt within the existing WordPress and WooCommerce environment, with a completely new front end, UX and branding: mega menus with every category, product pages with everything you want to know, a checkout in clear steps and conversion improvements throughout the shop, for consumers and professionals.",
      },
      sector: "agrarisch-natuur",
      services: ["websites-webshops", "branding-rebranding", "automation-funnels"],
      applications: ["webshop", "ux-ui-webdesign", "rebranding", "conversie-optimalisatie"],
      tools: ["wordpress", "woocommerce", "elementor", "mollie"],
      color: "#2E4746",
      challenge: {
        nl: "De Vakhandel verkoopt een heel breed assortiment voor tuin en groenonderhoud, van afrasteringen, folies en meststoffen tot gewasbescherming, zaden, tuingereedschap en robotmaaiers, voor particulieren en professionals. In zo'n groot aanbod moesten klanten snel de juiste categorie en het juiste product vinden, en zonder twijfel kunnen afrekenen.",
        en: "De Vakhandel sells a very wide range for gardens and green maintenance, from fencing, sheeting and fertilisers to crop protection, seeds, garden tools and robotic mowers, for consumers and professionals. In a range that large, customers had to find the right category and the right product quickly, and be able to check out without hesitation.",
      },
      approach: {
        nl: "We bouwden de webshop praktisch opnieuw, in de bestaande omgeving van WordPress met WooCommerce en Elementor, met een volledig nieuwe front-end, UX en branding, en werkten aan conversie in de hele shop. Het megamenu zet per categorie een korte omschrijving, een uitgelicht product als tip van klanten en alle productgroepen met het aantal producten bij elkaar. De homepage toont acties, combinatiedeals en de populairste producten, met iconen per categorie. Op de productpagina staan prijs, voorraad en verzendmoment, reviews, de omschrijving en gebruiksaanwijzing, technische gegevens, de voordelen van bestellen bij De Vakhandel, producten om je bestelling compleet te maken en veelgestelde vragen. Live zoeken, filters per categorie, een winkelwagen die naast de pagina openschuift en een checkout in duidelijke stappen, met onder meer iDEAL via Mollie, maken het af. Professionals hebben een eigen ingang met een contactformulier.",
        en: "We practically rebuilt the webshop within the existing WordPress environment with WooCommerce and Elementor, with a completely new front end, UX and branding, and worked on conversion throughout the shop. For each category, the mega menu brings together a short description, a featured product recommended by customers and every product group with its number of products. The homepage shows offers, bundle deals and the most popular products, with an icon for each category. The product page holds the price, stock and dispatch time, reviews, the description and instructions for use, technical data, the benefits of ordering from De Vakhandel, products to complete your order and frequently asked questions. Live search, filters per category, a cart that slides open beside the page and a checkout in clear steps, including iDEAL via Mollie, complete it. Professionals have an entrance of their own with a contact form.",
      },
      result: {
        nl: "Een overzichtelijke webshop in een nieuwe look voor een groot assortiment, waarin particulieren en professionals snel vinden wat ze zoeken en zonder omwegen bestellen.",
        en: "A clear webshop with a new look for a large range, in which consumers and professionals quickly find what they are looking for and order without detours.",
      },
      url: "https://devakhandel.nl",
      cover: M("devakhandel", "s-fa-homepage.webp"),
      shape: "wide",
    },
    {
      slug: "digital-newsgroup-platform",
      client: "Digital Newsgroup",
      title: {
        nl: "Digital Newsgroup: het platform achter de persplaatsingen",
        en: "Digital Newsgroup: the platform behind the press placements",
      },
      summary: {
        nl: "De volledige UI/UX van het platform van Digital Newsgroup, dat live staat, in het groene thema van de nieuwe huisstijl en dezelfde look en feel als de DNG Shop: een dashboard met bestellingen en uitgaven, een marktplaats met domeinen en hun statistieken, een bestelflow per artikel en een wallet met je tegoed.",
        en: "The complete UI/UX of the Digital Newsgroup platform, which is live, in the green theme of the new identity and the same look and feel as the DNG Shop: a dashboard with orders and spending, a marketplace with domains and their statistics, an order flow per article and a wallet with your credit.",
      },
      sector: "zakelijke-dienstverlening",
      services: ["web-apps-portals-apps"],
      applications: ["ux-ui-app-design", "dashboards", "saas-platform"],
      tools: [],
      color: "#A9F573",
      challenge: {
        nl: "Klanten van Digital Newsgroup bestellen persplaatsingen voor meerdere projecten en websites tegelijk, in het platform van DNG. Dat platform moest dat overzichtelijk maken, net zo laagdrempelig zijn als de shop op de marketingwebsite en dezelfde nieuwe, groene look en feel krijgen.",
        en: "Digital Newsgroup's clients order press placements for several projects and websites at once, in DNG's platform. That platform had to keep it clear, be just as easy to use as the shop on the marketing website and get the same new, green look and feel.",
      },
      approach: {
        nl: "We ontwierpen de volledige UI/UX van het platform, in het groene thema. Het dashboard is licht, met de totalen bovenaan, recente bestellingen met hun status, de acties die op je wachten, zoals een blog schrijven of goedkeuren, en een grafiek van de uitgaven per maand. De marktplaats toont per domein de domain rating, het verkeer en de prijs, met filters om snel te selecteren. Bij het bestellen kies je per website of je zelf schrijft of een schrijver van Digital Newsgroup inzet, en bovenin zie je altijd je wallet met je tegoed.",
        en: "We designed the complete UI/UX of the platform, in the green theme. The dashboard is light, with totals at the top, recent orders with their status, the actions waiting for you, such as writing or approving a blog, and a chart of monthly spending. The marketplace shows each domain's domain rating, traffic and price, with filters for quick selection. When ordering, you choose per website whether to write yourself or use a Digital Newsgroup writer, and your wallet with your credit is always in view at the top.",
      },
      result: {
        nl: "Een live platform waarop klanten van Digital Newsgroup zelf kiezen, bestellen en volgen, in dezelfde groene stijl als het merk en de shop.",
        en: "A live platform where Digital Newsgroup's clients choose, order and track for themselves, in the same green style as the brand and the shop.",
      },
      cover: M("digital-newsgroup-platform", "s-fa-domeinkaarten.webp"),
      shape: "wide",
    },
    {
      slug: "ecocorridor-van-baarsen",
      client: "Van Baarsen",
      title: {
        nl: "Eco-corridor Van Baarsen: groen boven het bedrijfsterrein",
        en: "Van Baarsen eco corridor: green above the business site",
      },
      summary: {
        nl: "3D-renders van de ecocorridor op het terrein van Van Baarsen: een beplante loopbrug op stalen bokken, langs zonnedaken en over het laad- en losterrein heen.",
        en: "3D renders of the eco corridor on the Van Baarsen site: a planted walkway on steel trestles, along solar roofs and over the loading yard.",
      },
      sector: "energie-duurzaamheid",
      services: ["foto-video-3d-animatie"],
      applications: ["3d-visualisatie"],
      tools: [],
      color: "#9D142E",
      challenge: {
        nl: "Een groene corridor boven een werkend bedrijfsterrein is lastig voor te stellen op basis van een tekening. Hoe ziet het eruit vanaf de grond, tussen de vrachtwagens, en hoe vanuit de lucht?",
        en: "A green corridor above a working business site is hard to picture from a drawing. What does it look like from the ground, among the trucks, and what from the air?",
      },
      approach: {
        nl: "We maakten een reeks 3D-renders vanuit verschillende standpunten: vanaf de grond, vanuit de lucht, op het pad zelf, onder de overkapping en bij de entree. Vanaf de grond zie je de stalen bokken, de beplante bakken en de overkapping met zonnepanelen boven het laadterrein. Vanuit de lucht zie je hoe de corridor langs de daken slingert, en op het pad loop je tussen de beplanting.",
        en: "We made a series of 3D renders from different viewpoints: from the ground, from the air, on the path itself, under the canopy and at the entrance. From the ground you see the steel trestles, the planted beds and the solar canopy above the loading yard. From the air you see how the corridor winds along the roofs, and on the path you walk among the planting.",
      },
      result: {
        nl: "Een set beelden die het plan tastbaar maakt, van bovenaf, vanaf de grond en vanaf het pad.",
        en: "A set of images that makes the plan tangible, from above, from the ground and from the path.",
      },
      cover: M("ecocorridor-van-baarsen", "s-fa-render-01.webp"),
      shape: "wide",
    },
    {
      slug: "inzura",
      client: "INZURA",
      title: {
        nl: "INZURA: polissen, aanvragen en schades in één portaal",
        en: "INZURA: policies, applications and claims in one portal",
      },
      summary: {
        nl: "Concept en volledige UI/UX-design van INZURA, een portaal voor verzekeringen: polisdetails met premieberekening, nieuwe aanvragen met risicoscores, schadedossiers met chat, klantgegevens met validaties en instelbare herinneringen.",
        en: "Concept and complete UI/UX design of INZURA, an insurance portal: policy details with premium calculation, new applications with risk scores, claim files with chat, client details with validations and configurable reminders.",
      },
      sector: "finance-fintech",
      services: ["web-apps-portals-apps"],
      applications: ["ux-ui-app-design", "dashboards"],
      tools: [],
      color: "#1B3044",
      challenge: {
        nl: "In een verzekeringsportaal komt veel samen: objecten, premies, risicoscores, aanvragen, schades en controles op klantgegevens. Al die informatie moest overzichtelijk blijven voor wie er dagelijks mee werkt.",
        en: "A lot comes together in an insurance portal: properties, premiums, risk scores, applications, claims and client data checks. All that information had to stay clear for the people who work with it every day.",
      },
      approach: {
        nl: "We werkten het concept uit en ontwierpen de volledige UI/UX: een rustig portaal met een donkerblauwe navigatie en vier hoofdonderdelen, dashboard, klanten, polissen en schades. Een polis toont het object op de kaart met de kerngegevens, naast een opbouw van de premie en een knop om het polisblad aan te maken. Nieuwe aanvragen staan in een lijst met een risicoscore die je openklikt voor de achterliggende controles, zoals IBAN, KVK en KYC. Een schadedossier heeft foto's, documenten en een live chat. Bij de klant zie je in één blok welke validaties rond zijn en exporteer je de gegevens als pdf, en in de instellingen bepaal je wanneer herinneringen uitgaan en pas je de e-mailtemplates aan.",
        en: "We worked out the concept and designed the complete UI/UX: a calm portal with dark blue navigation and four main areas, dashboard, clients, policies and claims. A policy shows the property on the map with its key details, next to a breakdown of the premium and a button to create the policy schedule. New applications sit in a list with a risk score you can open for the underlying checks, such as IBAN, Chamber of Commerce and KYC. A claim file has photos, documents and a live chat. For each client one block shows which validations are complete and lets you export the details as a PDF, and in the settings you decide when reminders go out and edit the email templates.",
      },
      result: {
        nl: "Een portaal waarin polis, aanvraag en schade elk een eigen, overzichtelijke plek hebben.",
        en: "A portal in which policy, application and claim each have a clear place of their own.",
      },
      cover: M("inzura", "s-fa-design-01.webp"),
      shape: "wide",
    },
    {
      slug: "jesse-rommers",
      client: "Jesse Rommers",
      title: {
        nl: "Jesse Rommers: dakbedekking, van bovenaf bekeken",
        en: "Jesse Rommers: roofing, seen from above",
      },
      summary: {
        nl: "Nieuwe branding en een nieuwe website voor dakdekker Jesse Rommers: een schild als beeldmerk, in geel en zwart, en een donkere homepage met dronebeelden van daken.",
        en: "New branding and a new website for roofer Jesse Rommers: a shield as the mark, in yellow and black, and a dark homepage with drone shots of roofs.",
      },
      sector: "bouw-architectuur",
      services: ["branding-rebranding", "websites-webshops"],
      applications: ["logo-ontwerp", "huisstijl", "ux-ui-webdesign"],
      tools: [],
      color: "#FFDB4C",
      challenge: {
        nl: "Een dak zie je vanaf de straat nauwelijks, terwijl daar het vakwerk zit. Het nieuwe merk en de nieuwe website van Jesse Rommers moesten dat werk wel laten zien.",
        en: "You can barely see a roof from the street, yet that is where the craftsmanship is. Jesse Rommers' new brand and new website had to show that work.",
      },
      approach: {
        nl: "We ontwikkelden een nieuwe branding, met een schild als beeldmerk, in geel en zwart. Voor de website ontwierpen we een donkere homepage met de kop 'Meesters in professionele dakbedekking'. Daaronder staat een dronebeeld van een bedrijfspand, waarbij het dak los is uitgesneden en met een gele lijn is omlijnd. Daarna volgen de projecten als kaarten met foto. De navigatie leidt naar diensten, projecten, over ons en vacatures, met een WhatsApp-knop en een knop om een offerte op te vragen.",
        en: "We developed new branding, with a shield as the mark, in yellow and black. For the website we designed a dark homepage with the headline 'Masters in professional roofing'. Below it is a drone shot of a commercial building, with the roof cut out and traced with a yellow line. It is followed by the projects as cards with photos. The navigation leads to services, projects, about us and vacancies, with a WhatsApp button and a button to request a quote.",
      },
      result: {
        nl: "Een nieuw merk en een website die het dak in de hoofdrol zetten, in geel en zwart.",
        en: "A new brand and a website that give the roof the leading role, in yellow and black.",
      },
      cover: M("jesse-rommers", "s-fa-homepage-hero.webp"),
      shape: "wide",
    },
    {
      slug: "architectenbureau-koppens-branding",
      client: "Architectenbureau Koppens",
      title: {
        nl: "Koppens Architecten: een handtekening als beeldmerk",
        en: "Koppens Architecten: a signature as a logo",
      },
      summary: {
        nl: "Logo en brandbook voor Koppens Architecten: een beeldmerk met de handtekening van de oprichter en een rode lijn ernaast, met kleurpalet, logovarianten en losse merkelementen.",
        en: "Logo and brandbook for Koppens Architecten: a mark with the founder's signature and a red line beside it, with colour palette, logo variants and separate brand elements.",
      },
      sector: "bouw-architectuur",
      services: ["branding-rebranding"],
      applications: ["logo-ontwerp", "huisstijl", "brandbook"],
      tools: [],
      color: "#EF533A",
      challenge: {
        nl: "Koppens Architecten ontwerpt vanuit een conceptuele gedachte, waarbij de vorm de functie volgt. Het merk moest die rode draad zichtbaar maken, en werken op de gevel, op kantoor- en marketingartikelen en online.",
        en: "Koppens Architecten designs from a conceptual idea in which form follows function. The brand had to make that common thread visible, and work on the facade, on office and marketing items and online.",
      },
      approach: {
        nl: "In het beeldmerk is de handtekening van de oprichter in een uitgesneden stijl verwerkt; dezelfde handtekening komt vaak terug als watermerk op het werk van het bureau. Ernaast loopt een rode lijn, parallel aan het icoon: de conceptuele rode draad die tijdens het hele proces wordt vastgehouden. Samen staan het blok en de lijn voor solide architectuur, met de rode draad als maatstaf voor het eindresultaat. In het brandbook staan het logo op de verschillende achtergronden, het kleurpalet van rood, grijs, zand, donkergroen, zwart en wit, en de merkelementen die ook los te gebruiken zijn, zoals de handtekening zelf.",
        en: "The mark incorporates the founder's signature in a cut-out style; the same signature often appears as a watermark on the firm's work. A red line runs beside it, parallel to the icon: the conceptual common thread that is held on to throughout the process. Together, the block and the line stand for solid architecture, with the common thread as the measure of the end result. The brandbook shows the logo on the different backgrounds, the colour palette of red, grey, sand, dark green, black and white, and the brand elements that can also be used separately, such as the signature itself.",
      },
      result: {
        nl: "Een persoonlijk beeldmerk met een duidelijk verhaal, vastgelegd in een compact brandbook en doorgetrokken naar de website.",
        en: "A personal mark with a clear story, captured in a compact brandbook and carried through to the website.",
      },
      cover: M("architectenbureau-koppens-branding", "s-fa-brandbook-01.webp"),
      shape: "wide",
    },
  ],

  media: {
    /* ---------- Masterpieces ---------- */
    "atl-plus": {
      images: [],
      films: [
        { src: M("atl-plus", "s-fa-portal-leerlijn.mp4"), poster: M("atl-plus", "s-fa-portal-leerlijn.webp"), w: 1920, h: 1024, title: "Portaal: van het dashboard naar de leerlijn Hoogspringen" },
        { src: M("atl-plus", "s-fa-instructievideo.mp4"), poster: M("atl-plus", "s-fa-instructievideo.webp"), w: 1128, h: 1196, title: "Leerlijn Hordelopen: stap kiezen, instructievideo kijken" },
      ],
    },
    "bernheze-makelaars-rebranding": {
      lead: true,
      images: [
        { src: M("bernheze-makelaars-rebranding", "s-fa-brandbook-01.webp"), title: "Brandbook: het logo op de verschillende achtergronden" },
        { src: M("bernheze-makelaars-rebranding", "s-fa-brandbook-02.webp"), title: "Brandbook: kleuren" },
        { src: M("bernheze-makelaars-rebranding", "s-fa-brandbook-03.webp"), title: "Brandbook: typografie" },
        { src: M("bernheze-makelaars-rebranding", "s-fa-brandbook-04.webp"), title: "Brandbook: het verhaal achter het logo" },
        { src: M("bernheze-makelaars-rebranding", "s-fa-brandbook-05.webp"), title: "Brandbook: uitstraling" },
        { src: M("bernheze-makelaars-rebranding", "s-fa-brandbook-06.webp"), title: "Brandbook: merkkarakter" },
      ],
      films: [
        { src: M("bernheze-makelaars-rebranding", "s-fa-logo-animatie.mp4"), poster: M("bernheze-makelaars-rebranding", "s-fa-logo-animatie.webp"), w: 1920, h: 1080, title: "Logo-animatie (intro van de woningvideo's)" },
      ],
    },
    "bernheze-makelaars-video": {
      lead: true,
      hero: M("bernheze-makelaars-video", "s-fa-villa-vlijmen-drone.mp4"),
      images: [],
      films: [
        { src: M("bernheze-makelaars-video", "s-fa-villa-vlijmen-drone.mp4"), poster: M("bernheze-makelaars-video", "s-fa-villa-vlijmen-drone.webp"), w: 1600, h: 900, title: "Villa in Vlijmen, van bovenaf" },
        { src: M("bernheze-makelaars-video", "s-fa-villa-vlijmen.mp4"), poster: M("bernheze-makelaars-video", "s-fa-villa-vlijmen.webp"), w: 1440, h: 810, title: "Villa in Vlijmen: buiten en binnen" },
        { src: M("bernheze-makelaars-video", "s-fa-vosbergstraat-heesch.mp4"), poster: M("bernheze-makelaars-video", "s-fa-vosbergstraat-heesch.webp"), w: 1440, h: 810, title: "Woning aan de Vosbergstraat, Heesch" },
        { src: M("bernheze-makelaars-video", "s-fa-kraaienbos-vinkel.mp4"), poster: M("bernheze-makelaars-video", "s-fa-kraaienbos-vinkel.webp"), w: 1280, h: 720, title: "Woning aan het Kraaienbos, Vinkel" },
      ],
    },
    "designers-house": {
      lead: true,
      images: [
        { src: M("designers-house", "s-fa-uitnodiging-opening.webp"), title: "Uitnodiging voor de opening van de showroom" },
        { src: M("designers-house", "s-fa-brochure-showrooms.webp"), title: "Brochure: de showrooms" },
        { src: M("designers-house", "s-fa-brandbook-kleur-typografie.webp"), title: "Brandbook: kleur en typografie" },
        { src: M("designers-house", "s-fa-logo-opbouw.webp"), title: "Logo-opbouw op papier" },
      ],
      films: [
        { src: M("designers-house", "s-fa-memberportaal-aanmelden.mp4"), poster: M("designers-house", "s-fa-memberportaal-aanmelden.webp"), w: 1920, h: 1080, title: "Memberportaal: aanmelden" },
        { src: M("designers-house", "s-fa-brochure-opent.mp4"), poster: M("designers-house", "s-fa-brochure-opent.webp"), w: 1920, h: 1080, title: "Brochure: de omslag gaat open" },
        { src: M("designers-house", "s-fa-uitnodigingen.mp4"), poster: M("designers-house", "s-fa-uitnodigingen.webp"), w: 1920, h: 1080, title: "Uitnodigingen voor de opening" },
        { src: M("designers-house", "s-fa-briefpapier.mp4"), poster: M("designers-house", "s-fa-briefpapier.webp"), w: 1920, h: 1080, title: "Briefpapier en visitekaartjes" },
        { src: M("designers-house", "s-fa-partnerportaal-afspraak.mp4"), poster: M("designers-house", "s-fa-partnerportaal-afspraak.webp"), w: 1920, h: 1024, title: "Portaal: een afspraak maken" },
        { src: M("designers-house", "s-fa-social-reel.mp4"), poster: M("designers-house", "s-fa-social-reel.webp"), w: 666, h: 1096, title: "Social media: reel" },
      ],
    },
    "expociety-app": {
      images: [
        { src: M("expociety-app", "s-fa-app-trio.webp"), title: "App: home, eventoverzicht en uitnodigingen" },
        { src: M("expociety-app", "s-fa-app-screens.webp"), title: "App: event, uitnodigen, tickets en influencers kiezen" },
        { src: M("expociety-app", "s-fa-venue-landingspagina.webp"), title: "Website: landingspagina voor venues" },
      ],
      films: [
        { src: M("expociety-app", "s-fa-trailer-avond.mp4"), poster: M("expociety-app", "s-fa-trailer-avond.webp"), w: 1280, h: 720, title: "Trailer: een avond met Expociety" },
        { src: M("expociety-app", "s-fa-trailer-app.mp4"), poster: M("expociety-app", "s-fa-trailer-app.webp"), w: 1280, h: 720, title: "Trailer: de app in actie" },
      ],
    },
    "expociety-branding": {
      lead: true,
      images: [
        { src: M("expociety-branding", "s-fa-posters.webp"), title: "Posters" },
        { src: M("expociety-branding", "s-fa-billboard-metro.webp"), title: "Campagne: billboard in de metro" },
        { src: M("expociety-branding", "s-fa-campagne-influence.webp"), title: "Campagne" },
        { src: M("expociety-branding", "s-fa-brandbook-01.webp"), title: "Brandbook" },
        { src: M("expociety-branding", "s-fa-brandbook-02.webp"), title: "Brandbook: omslag" },
        { src: M("expociety-branding", "s-fa-brandbook-03.webp"), title: "Brandbook: archetype" },
        { src: M("expociety-branding", "s-fa-brandbook-04.webp"), title: "Brandbook: currency of pleasure" },
        { src: M("expociety-branding", "s-fa-brandbook-05.webp"), title: "Brandbook: over Expociety" },
        { src: M("expociety-branding", "s-fa-marketing-playbook.webp"), title: "Marketing playbook" },
        { src: M("expociety-branding", "s-fa-venues-brochure.webp"), title: "Informatiebrochure voor venues" },
        { src: M("expociety-branding", "s-fa-linkedin-banner.webp"), title: "LinkedIn-banner" },
      ],
      films: [],
    },
    "fairlink": {
      images: [
        { src: M("fairlink", "s-fa-design-01.webp"), title: "Website: hero met de app en de wereldkaart" },
        { src: M("fairlink", "s-fa-design-02.webp"), title: "Website: donkere variant van de homepage" },
        { src: M("fairlink", "s-fa-design-04.webp"), title: "Website: 'Enabling safe migrant working'" },
        { src: M("fairlink", "s-fa-design-03.webp"), title: "Website: voor werkgevers, werknemers en partners" },
        { src: M("fairlink", "s-fa-design-05.webp"), title: "Website: het verhaal achter Fairlink" },
        { src: M("fairlink", "s-fa-design-06.webp"), title: "Website: download de app" },
      ],
      films: [],
    },
    "hela": {
      images: [
        { src: M("hela", "s-fa-design-01.webp"), title: "Webdesign: banner Kruidenketchup" },
        { src: M("hela", "s-fa-design-02.webp"), title: "Webdesign: recepten" },
      ],
      films: [],
    },
    "infrai": {
      lead: true,
      images: [],
      films: [
        { src: M("infrai", "s-fa-commercial.mp4"), poster: M("infrai", "s-fa-commercial.webp"), w: 1920, h: 1080, title: "Commercial: community-driven AI city inspections" },
        { src: M("infrai", "s-fa-app-melding.mp4"), poster: M("infrai", "s-fa-app-melding.webp"), w: 780, h: 1688, title: "App: een melding maken met AI-herkenning" },
        { src: M("infrai", "s-fa-app-navigatie.mp4"), poster: M("infrai", "s-fa-app-navigatie.webp"), w: 780, h: 1688, title: "App: route plannen en navigeren met AR" },
      ],
    },

    /* ---------- Bestaande cases ---------- */
    "alpacafarm-vorstenbosch": {
      images: [],
      films: [
        { src: M("alpacafarm-vorstenbosch", "s-fa-reel-winter.mp4"), poster: M("alpacafarm-vorstenbosch", "s-fa-reel-winter.webp"), w: 666, h: 1100, title: "Instagram-reel: winter op de farm" },
      ],
    },
    "bctn": {
      images: [
        { src: M("bctn", "s-fa-brochures-covers.webp"), title: "Infobrochures: BCTN Portal en Endpoint API" },
        { src: M("bctn", "s-fa-brochure-portal.webp"), title: "Brochure BCTN Portal" },
        { src: M("bctn", "s-fa-brochure-api.webp"), title: "Brochure BCTN Endpoint API" },
      ],
      films: [],
    },
    "buitenstate-tools": {
      images: [
        { src: M("buitenstate-tools", "s-fa-matchmaker-swipen.webp"), title: "Matchmaker: swipen door passende objecten" },
        { src: M("buitenstate-tools", "s-fa-matchmaker-kaarten.webp"), title: "Matchmaker: kaarten met matchscore" },
        { src: M("buitenstate-tools", "s-fa-matchmaker-zoeken.webp"), title: "Matchmaker: je droomplek in eigen woorden" },
      ],
      films: [],
    },
    "bus-whisky": {
      images: [],
      films: [
        { src: M("bus-whisky", "s-fa-house-of-bus-intro.mp4"), poster: M("bus-whisky", "s-fa-house-of-bus-intro.webp"), w: 1920, h: 1080, title: "The House of BUS: intro van de serie" },
      ],
    },
    "digital-newsgroup-platform": {
      images: [
        { src: M("digital-newsgroup-platform", "s-fa-domeinkaarten.webp"), title: "Domeinen als kaarten" },
        { src: M("digital-newsgroup-platform", "s-fa-dashboard.webp"), title: "Dashboard" },
        { src: M("digital-newsgroup-platform", "s-fa-marketplace.webp"), title: "Marktplaats" },
        { src: M("digital-newsgroup-platform", "s-fa-bestelling-details.webp"), title: "Bestelling: details per artikel" },
        { src: M("digital-newsgroup-platform", "s-fa-schrijver-kiezen.webp"), title: "Kiezen wie het artikel schrijft" },
      ],
      films: [],
    },
    "ecos": {
      lead: true,
      images: [
        { src: M("ecos", "s-fa-fatherhood-posts.webp"), title: "Fatherhood Collaborative: social posts" },
        { src: M("ecos", "s-fa-tablet-cursus.webp"), title: "Cursuspagina op de tablet" },
        { src: M("ecos", "s-fa-brandbook-01.webp"), title: "Brand guidelines: ECOS Institute" },
        { src: M("ecos", "s-fa-brandbook-04.webp"), title: "Brand guidelines: het ECOSystem" },
        { src: M("ecos", "s-fa-brandbook-03.webp"), title: "Brand guidelines: Collaboratives als leden van het ECOSystem" },
        { src: M("ecos", "s-fa-brandbook-05.webp"), title: "Brand guidelines: endorsed brand architecture" },
        { src: M("ecos", "s-fa-brandbook-06.webp"), title: "Brand guidelines: vormen per Collaborative" },
        { src: M("ecos", "s-fa-brandbook-02.webp"), title: "Brand guidelines: kleurenpalet" },
      ],
      films: [
        { src: M("ecos", "s-fa-ecos-is-here.mp4"), poster: M("ecos", "s-fa-ecos-is-here.webp"), w: 1920, h: 1080, title: "Animatie: ECOS is here" },
      ],
    },
    "foodbars-gelderland": {
      lead: true,
      images: [
        { src: M("foodbars-gelderland", "s-fa-brandbook-01.webp"), title: "Brandbook: omslag" },
        { src: M("foodbars-gelderland", "s-fa-brandbook-02.webp"), title: "Brandbook: website" },
        { src: M("foodbars-gelderland", "s-fa-brandbook-03.webp"), title: "Brandbook: logo" },
        { src: M("foodbars-gelderland", "s-fa-brandbook-04.webp"), title: "Brandbook: kleuren en sfeer" },
        { src: M("foodbars-gelderland", "s-fa-brandbook-05.webp"), title: "Brandbook: de foodbars" },
        { src: M("foodbars-gelderland", "s-fa-brandbook-06.webp"), title: "Brandbook: Enjoy" },
        { src: M("foodbars-gelderland", "s-fa-brandbook-07.webp"), title: "Brandbook: onze events" },
        { src: M("foodbars-gelderland", "s-fa-brandbook-08.webp"), title: "Brandbook: faciliteiten" },
      ],
      films: [],
    },
    "gemeente-gouda": {
      lead: true,
      hero: M("gemeente-gouda", "s-fa-gouda-drone.mp4"),
      cover: M("gemeente-gouda", "s-fa-gouda-drone.webp"),
      images: [],
      films: [
        { src: M("gemeente-gouda", "s-fa-gouda-drone.mp4"), poster: M("gemeente-gouda", "s-fa-gouda-drone.webp"), w: 1280, h: 720, title: "Gouda van bovenaf" },
        { src: M("gemeente-gouda", "s-fa-gouda-preventieakkoord.mp4"), poster: M("gemeente-gouda", "s-fa-gouda-preventieakkoord.webp"), w: 1280, h: 720, title: "Het Preventieakkoord in de stad" },
      ],
    },
    "grid": {
      lead: true,
      images: [
        { src: M("grid", "s-fa-ads.webp"), title: "Advertenties: gratis laadpaal aanvragen" },
        { src: M("grid", "s-fa-homepage-hero.webp"), title: "Website: vind het beste oplaadpunt" },
        { src: M("grid", "s-fa-homepage-aanbod.webp"), title: "Website: laadpalen en business to business" },
        { src: M("grid", "s-fa-dc-hipower.webp"), title: "Productpagina DC HiPower" },
        { src: M("grid", "s-fa-dc-modellen.webp"), title: "Productpagina: DC-modellen en specificaties" },
      ],
      films: [],
    },
    "icewall": {
      lead: true,
      images: [
        { src: M("icewall", "s-fa-claim-your-place.webp"), title: "Claim your place on the wall" },
        { src: M("icewall", "s-fa-wall-sectoren.webp"), title: "De wall: kies een sector" },
      ],
      films: [
        { src: M("icewall", "s-fa-wall-interactie.mp4"), poster: M("icewall", "s-fa-wall-interactie.webp"), w: 1080, h: 1186, title: "Website: een fragment claimen op de wall" },
      ],
    },
    "jalo-energy": {
      images: [
        { src: M("jalo-energy", "s-fa-swipe-energiezekerheid.webp"), title: "Swipe-post: energiezekerheid" },
        { src: M("jalo-energy", "s-fa-brand-post.webp"), title: "Brand post: Energy Security" },
        { src: M("jalo-energy", "s-fa-swipe-slide-biomassa.webp"), title: "Swipe-post: energie uit lokale biomassa" },
      ],
      films: [],
    },
    "jmtuning": {
      lead: true,
      images: [
        { src: M("jmtuning", "s-fa-brandbook-01.webp"), title: "Logo in preeg" },
        { src: M("jmtuning", "s-fa-brandbook-02.webp"), title: "Brandbook: omslag" },
        { src: M("jmtuning", "s-fa-brandbook-03.webp"), title: "Brandbook: logovarianten" },
        { src: M("jmtuning", "s-fa-bedrijfskleding.webp"), title: "Bedrijfskleding" },
        { src: M("jmtuning", "s-fa-brandbook-04.webp"), title: "Brandbook: kleuren" },
        { src: M("jmtuning", "s-fa-brandbook-05.webp"), title: "Brandbook: typografie" },
        { src: M("jmtuning", "s-fa-brandbook-06.webp"), title: "Brandbook: beelden in de vorm van een uitlaat" },
        { src: M("jmtuning", "s-fa-brandbook-07.webp"), title: "Brandbook: projectpresentatie" },
        { src: M("jmtuning", "s-fa-brandbook-08.webp"), title: "Brandbook: uitlaatsysteem in detail" },
        { src: M("jmtuning", "s-fa-iconen.webp"), title: "Iconen per dienst" },
        { src: M("jmtuning", "s-fa-social-omslag.webp"), title: "Omslagfoto" },
      ],
      films: [],
    },
    "kds-stansvormen": {
      images: [
        { src: M("kds-stansvormen", "s-fa-rebranding-stansvorm.webp"), title: "Rebranding: de merkidentiteit naar het volgende niveau" },
        { src: M("kds-stansvormen", "s-fa-brandbook-01.webp"), title: "Brandbook: omslag" },
        { src: M("kds-stansvormen", "s-fa-brandbook-02.webp"), title: "Brandbook: logo" },
        { src: M("kds-stansvormen", "s-fa-brandbook-03.webp"), title: "Brandbook: logovarianten" },
        { src: M("kds-stansvormen", "s-fa-brandbook-04.webp"), title: "Brandbook: kleuren" },
        { src: M("kds-stansvormen", "s-fa-brandbook-05.webp"), title: "Brandbook: typografie" },
        { src: M("kds-stansvormen", "s-fa-brandbook-06.webp"), title: "Brandbook: gebruik van het logo" },
        { src: M("kds-stansvormen", "s-fa-brandbook-07.webp"), title: "Brandbook: het stanspatroon" },
        { src: M("kds-stansvormen", "s-fa-linkedin-banner.webp"), title: "LinkedIn-banner" },
      ],
      films: [],
    },
    "kippenkar": {
      images: [
        { src: M("kippenkar", "s-fa-optin-mail.webp"), title: "Automatische mail met de informatiebrochure" },
      ],
      films: [],
    },

    /* ---------- Nieuwe cases ---------- */
    "albertx": {
      images: [
        { src: M("albertx", "s-fa-brandbook-01.webp"), title: "AlbertX: Barge Better." },
        { src: M("albertx", "s-fa-design-01.webp"), title: "Platform: capaciteit zoeken" },
        { src: M("albertx", "s-fa-brandbook-02.webp"), title: "Logo in kleurvarianten" },
      ],
      films: [],
    },
    "alpen-experience-hotel": {
      images: [
        { src: M("alpen-experience-hotel", "s-fa-brandbook-03.webp"), title: "Logo in preeg" },
        { src: M("alpen-experience-hotel", "s-fa-brandbook-02.webp"), title: "Het beeldmerk in beige en bruin" },
        { src: M("alpen-experience-hotel", "s-fa-brandbook-04.webp"), title: "Variant op zwart" },
        { src: M("alpen-experience-hotel", "s-fa-brandbook-01.webp"), title: "Logo-brandbook" },
      ],
      films: [],
    },
    "amainfilms": {
      images: [
        { src: M("amainfilms", "s-fa-design-01.webp"), title: "Homepage: hero" },
        { src: M("amainfilms", "s-fa-design-02.webp"), title: "Homepage: één frame tegelijk" },
        { src: M("amainfilms", "s-fa-design-03.webp"), title: "Homepage: wereldwijd" },
        { src: M("amainfilms", "s-fa-design-04.webp"), title: "Homepage: de apparatuur" },
        { src: M("amainfilms", "s-fa-design-05.webp"), title: "Homepage: de montagetijdlijn" },
      ],
      films: [],
    },
    "architectenbureau-koppens-branding": {
      images: [
        { src: M("architectenbureau-koppens-branding", "s-fa-brandbook-01.webp"), title: "Brandbook: logo op de huiskleuren" },
        { src: M("architectenbureau-koppens-branding", "s-fa-brandbook-02.webp"), title: "Brandbook: kleurpalet" },
        { src: M("architectenbureau-koppens-branding", "s-fa-brandbook-03.webp"), title: "Brandbook: de handtekening en de rode draad" },
        { src: M("architectenbureau-koppens-branding", "s-fa-brandbook-04.webp"), title: "Brandbook: merkelementen" },
      ],
      films: [],
    },
    "berkley-investments": {
      images: [
        { src: M("berkley-investments", "s-fa-website-02.webp"), title: "Webdesign: Berkley" },
        { src: M("berkley-investments", "s-fa-website-01.webp"), title: "Webdesign: projecten en energie" },
        { src: M("berkley-investments", "s-fa-brochure-01.webp"), title: "Brochure: Social Impact" },
      ],
      films: [],
    },
    "bctn-qhse": {
      images: [
        { src: M("bctn-qhse", "s-fa-checklist-rapport.webp"), title: "Kraanchecklist en wekelijks QHSE-rapport" },
        { src: M("bctn-qhse", "s-fa-dashboard.webp"), title: "QHSE-dashboard" },
      ],
      films: [],
    },
    "calendarlink": {
      images: [
        { src: M("calendarlink", "s-fa-design-01.webp"), title: "Eventpagina met Add to calendar" },
        { src: M("calendarlink", "s-fa-design-02.webp"), title: "Persoonlijke uitnodiging" },
        { src: M("calendarlink", "s-fa-mobiel.webp"), title: "Mobiel: locatie kiezen en de eventpagina" },
        { src: M("calendarlink", "s-fa-design-03.webp"), title: "Stap 5: de eventpagina vormgeven" },
        { src: M("calendarlink", "s-fa-design-04.webp"), title: "Event beheren" },
        { src: M("calendarlink", "s-fa-design-05.webp"), title: "Stap 1: een nieuw event" },
      ],
      films: [],
    },
    "capilex": {
      images: [
        { src: M("capilex", "s-fa-id-verificatie.webp"), title: "ID-verificatie" },
        { src: M("capilex", "s-fa-kbo-uittreksel.webp"), title: "KBO-uittreksels" },
        { src: M("capilex", "s-fa-risicomatrix.webp"), title: "Risicomatrix" },
      ],
      films: [
        { src: M("capilex", "s-fa-productanimaties.mp4"), poster: M("capilex", "s-fa-productanimaties.webp"), w: 1280, h: 720, title: "Productanimaties: KBO, ID-verificatie en risicomatrix" },
      ],
    },
    "carinspect": {
      images: [
        { src: M("carinspect", "s-fa-ai-inspectie-still.webp"), title: "AI-inspectie van de passagierszijde" },
      ],
      films: [
        { src: M("carinspect", "s-fa-ai-inspectie.mp4"), poster: M("carinspect", "s-fa-ai-inspectie.webp"), w: 1920, h: 1080, title: "Demofilm: zijkant en wiel scannen" },
      ],
    },
    "consuluisse": {
      images: [
        { src: M("consuluisse", "s-fa-styleframe-fall.webp"), title: "Styleframe 'Fall'" },
        { src: M("consuluisse", "s-fa-styleframe-horizon.webp"), title: "Styleframe 'Horizon'" },
      ],
      films: [],
    },
    "devakhandel": {
      images: [
        { src: M("devakhandel", "s-fa-homepage.webp"), title: "Homepage" },
        { src: M("devakhandel", "s-fa-productpagina.webp"), title: "Productpagina" },
        { src: M("devakhandel", "s-fa-megamenu.webp"), title: "Megamenu met alle categorieën" },
        { src: M("devakhandel", "s-fa-over-ons.webp"), title: "De leverancier voor al uw groenonderhoud" },
        { src: M("devakhandel", "s-fa-professioneel.webp"), title: "Pagina voor professionals" },
      ],
      films: [],
    },
    "ecocorridor-van-baarsen": {
      images: [
        { src: M("ecocorridor-van-baarsen", "s-fa-render-01.webp"), title: "De corridor langs de zonnedaken" },
        { src: M("ecocorridor-van-baarsen", "s-fa-render-02.webp"), title: "Op het pad" },
        { src: M("ecocorridor-van-baarsen", "s-fa-render-03.webp"), title: "Vanaf de grond" },
        { src: M("ecocorridor-van-baarsen", "s-fa-render-04.webp"), title: "Vanuit de lucht" },
        { src: M("ecocorridor-van-baarsen", "s-fa-render-05.webp"), title: "Over het laadterrein" },
        { src: M("ecocorridor-van-baarsen", "s-fa-render-06.webp"), title: "Onder de overkapping" },
        { src: M("ecocorridor-van-baarsen", "s-fa-render-07.webp"), title: "De entree" },
      ],
      films: [],
    },
    "inzura": {
      images: [
        { src: M("inzura", "s-fa-design-01.webp"), title: "Polis met premieberekening" },
        { src: M("inzura", "s-fa-design-02.webp"), title: "Nieuwe aanvragen met risicoscore" },
        { src: M("inzura", "s-fa-design-03.webp"), title: "Schadedossier met live chat" },
        { src: M("inzura", "s-fa-design-04.webp"), title: "Klant met risicoanalyse" },
        { src: M("inzura", "s-fa-design-05.webp"), title: "Herinneringen instellen" },
      ],
      films: [],
    },
    "jesse-rommers": {
      images: [
        { src: M("jesse-rommers", "s-fa-homepage-hero.webp"), title: "Homepage: hero" },
        { src: M("jesse-rommers", "s-fa-homepage.webp"), title: "Homepage" },
      ],
      films: [],
    },
  },
};
