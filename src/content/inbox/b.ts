import type { SuppliedSet } from "../supplied-media";
import type { Case } from "../types";

/* ============================================================
   FigmaAssets (M7's eigen map met screenshots, brandbooks, video's
   en mockups), groep B. Nieuwe projecten in `cases`, aangeleverd
   beeld en films per case in `media` (bestanden:
   public/media/cases/<slug>/s-*.{webp,mp4}). Zie inbox/index.ts.
   ============================================================ */

export const inboxB: { cases: Case[]; media: Record<string, SuppliedSet> } = {
  cases: [
    {
      slug: "monvy-branding",
      client: "Monvy",
      title: {
        nl: "Monvy: het merk achter het platform",
        en: "Monvy: the brand behind the platform",
      },
      summary: {
        nl: "Het brandbook van Monvy: logo en logovarianten, het beeldmerk, Poppins als huisletter, het merkkarakter en de tone of voice. Doorgezet in visitekaartjes, briefpapier en een brochure over het platform.",
        en: "Monvy's brandbook: logo and logo variants, the brand mark, Poppins as the house typeface, the brand character and the tone of voice. Carried through to business cards, letterhead and a brochure about the platform.",
      },
      sector: "tech-saas-startups",
      services: ["branding-rebranding", "grafisch-ontwerp-print"],
      applications: ["brandbook", "huisstijl", "tone-of-voice", "visitekaartjes-drukwerk", "brochures-magazines"],
      tools: [],
      logo: "/media/cases/monvy/logo-white.svg",
      cover: "/media/cases/monvy-branding/s-fa-brandbook-08.webp",
      color: "#005F9C",
      challenge: {
        nl: "Monvy wil ondernemers één plek geven voor facturen, betalingen en financiering. Daar hoort een merk bij dat vertrouwen geeft, en dat iedereen die met Monvy werkt op dezelfde manier kan toepassen: op papier, op de website en in het platform.",
        en: "Monvy wants to give businesses one place for invoices, payments and financing. That calls for a brand people trust, and one that everyone who works with Monvy can apply in the same way: on paper, on the website and in the platform.",
      },
      approach: {
        nl: "We legden het merk vast in een brandbook. De naam komt uit het Frans: mon en vy, 'mijn' en 'leven'. Het brandbook beschrijft het logo en de varianten op blauw, donkergrijs en wit, het beeldmerk als losse vorm en Poppins als huisletter in vier gewichten. Het merkkarakter vatten we samen in drie woorden: clever, no nonsense en trustful, met de Ruler als archetype. De tone of voice ligt vast op drie schalen: formeel of casual, jong of gevestigd, eenvoudig of complex. Daarna zetten we de huisstijl door in visitekaartjes, briefpapier en een brochure die het platform en zijn functies laat zien.",
        en: "We captured the brand in a brandbook. The name comes from French: mon and vy, 'my' and 'life'. The brandbook describes the logo and its variants on blue, dark grey and white, the brand mark as a standalone shape and Poppins as the house typeface in four weights. We summed up the brand character in three words: clever, no nonsense and trustful, with the Ruler as its archetype. The tone of voice is set on three scales: formal or casual, youthful or established, simple or complex. We then carried the identity through to business cards, letterhead and a brochure that shows the platform and its features.",
      },
      result: {
        nl: "Een merk met vaste afspraken over logo, kleur, typografie en toon, dat op papier en in het platform hetzelfde verhaal vertelt.",
        en: "A brand with clear rules for logo, colour, typography and tone, telling the same story on paper and in the platform.",
      },
      url: "https://monvy.com",
      shape: "wide",
    },
    {
      slug: "plenty-planet-content",
      client: "Plenty Planet",
      title: {
        nl: "Plenty Planet: energieverhalen voor LinkedIn",
        en: "Plenty Planet: energy stories for LinkedIn",
      },
      summary: {
        nl: "Posts, carrousels en korte video's voor LinkedIn in de huisstijl van Plenty Planet, over solar carparks, energie opslaan en later gebruiken, en bodem- en waterstress.",
        en: "Posts, carousels and short videos for LinkedIn in Plenty Planet's identity, about solar carparks, storing energy to use later, and soil and water stress.",
      },
      sector: "energie-duurzaamheid",
      services: ["content-marketing-online-ads", "foto-video-3d-animatie"],
      applications: ["social-media-marketing", "social-video"],
      tools: [],
      cover: "/media/cases/plenty-planet-content/s-fa-posts.webp",
      color: "#82B444",
      challenge: {
        nl: "Plenty Planet werkt aan grote energieprojecten: solar carparks, batterijopslag en laadinfrastructuur. Op LinkedIn moest dat verhaal kort en visueel worden, voor organisaties die hun energievoorziening anders willen regelen.",
        en: "Plenty Planet works on large energy projects: solar carparks, battery storage and charging infrastructure. On LinkedIn that story had to become short and visual, for organisations that want to arrange their energy supply differently.",
      },
      approach: {
        nl: "We maakten posts en carrousels in de huisstijl van Plenty Planet: een heldere kop, één boodschap per slide en het beeldmerk als afsluiter. De thema's: waarom juist nu solar carparks, zonne-energie opwekken en later gebruiken, en bodem- en waterstress als economisch risico. Daarnaast zijn er korte verticale video's met zonnepanelen, opslag en laadpunten in beeld, met ondertitels in de groene merkkleur.",
        en: "We created posts and carousels in Plenty Planet's identity: a clear headline, one message per slide and the brand mark as the closing touch. The themes: why solar carparks now, generating solar energy and using it later, and soil and water stress as an economic risk. There are also short vertical videos showing solar panels, storage and charging points, with subtitles in the green brand colour.",
      },
      result: {
        nl: "Een herkenbare reeks LinkedIn-content die de thema's van Plenty Planet in korte, visuele stappen uitlegt.",
        en: "A recognisable series of LinkedIn content that explains Plenty Planet's themes in short, visual steps.",
      },
      url: "https://www.plentyplanet.com",
      concept: true,
      shape: "wide",
    },
    /* ================= Nieuwe projecten (FigmaAssets, groep B) ================= */
    {
      slug: "laserlux",
      client: "LaserLux",
      title: {
        nl: "LaserLux: jouw lijnen, in materiaal vastgelegd",
        en: "LaserLux: your lines, captured in material",
      },
      summary: {
        nl: "Logo en brandbook voor LaserLux, een bedrijf in lasergraveren en -snijden: het beeldmerk, de logovarianten, oranje en zwart als merkkleuren, de typografie en de toon.",
        en: "Logo and brandbook for LaserLux, a laser engraving and cutting company: the brand mark, the logo variants, orange and black as brand colours, the typography and the tone.",
      },
      sector: "industrie-techniek",
      services: ["branding-rebranding"],
      applications: ["logo-ontwerp", "brandbook", "huisstijl", "tone-of-voice"],
      tools: [],
      cover: "/media/cases/laserlux/s-fa-brandbook-02.webp",
      color: "#E09952",
      challenge: {
        nl: "LaserLux graveert en snijdt met de laser in verschillende materialen. De vraag aan de klant is eenvoudig: wil je jouw woorden, vormen en lijnen harder vastleggen dan op papier of op je computer? Daar hoorde een merk bij dat net zo precies is als het werk zelf.",
        en: "LaserLux engraves and cuts a range of materials with a laser. The question to the customer is simple: do you want to capture your words, shapes and lines more permanently than on paper or on your computer? That called for a brand as precise as the work itself.",
      },
      approach: {
        nl: "We ontwierpen het logo met een eigen beeldmerk en de ondertitel 'lasergraveren en -snijden', met varianten op oranje, zwart en wit. In het brandbook legden we de visie vast, de logovarianten, de merkkleuren, de typografie en de toon, met als belofte: jouw lijnen, in materiaal vastgelegd. Beeld van de laser aan het werk laat zien waar het merk over gaat.",
        en: "We designed the logo with its own brand mark and the subline 'laser engraving and cutting', with variants on orange, black and white. In the brandbook we set down the vision, the logo variants, the brand colours, the typography and the tone, with the promise: your lines, captured in material. Imagery of the laser at work shows what the brand is about.",
      },
      result: {
        nl: "Een warm, technisch merk met vaste afspraken over logo, kleur, typografie en toon.",
        en: "A warm, technical brand with clear rules for logo, colour, typography and tone.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "loftdeur",
      client: "Loftdeur",
      title: {
        nl: "Loftdeur: stalen deuren, overzichtelijk online",
        en: "Loftdeur: steel doors, clearly laid out online",
      },
      summary: {
        nl: "Webshopontwerp voor Loftdeur, met stalen binnen-, taats- en schuifdeuren: vier productlijnen naast elkaar, populaire deuren met prijs en een menu met alle productgroepen in beeld.",
        en: "Webshop design for Loftdeur, with steel interior, pivot and sliding doors: four product lines side by side, popular doors with prices and a menu that shows every product group.",
      },
      sector: "interieur-architectuur",
      services: ["websites-webshops"],
      applications: ["webshop", "ux-ui-webdesign"],
      tools: [],
      cover: "/media/cases/loftdeur/s-fa-webshop-01.webp",
      color: "#B4A88B",
      challenge: {
        nl: "Loftdeur verkoopt stalen deuren in veel uitvoeringen: binnendeuren, taatsdeuren, schuifdeuren en deuren op maat. Wie zo'n deur zoekt, moet snel zien welke lijn bij hem past en wat die kost.",
        en: "Loftdeur sells steel doors in many versions: interior doors, pivot doors, sliding doors and made-to-measure doors. Anyone looking for such a door needs to see quickly which line suits them and what it costs.",
      },
      approach: {
        nl: "We ontwierpen de webshop rond de vier productlijnen, Smartline, Slimline, Colorline en Expertline, elk met een eigen kaart: sfeerbeeld, de belangrijkste kenmerken en een vanaf-prijs. Daaronder staan de populaire deuren met prijs. Het menu opent op een overzicht met per categorie de productgroepen in beeld, met een uitgelichte deur ernaast.",
        en: "We designed the webshop around the four product lines, Smartline, Slimline, Colorline and Expertline, each with its own card: a lifestyle image, the key features and a starting price. Below them sit the popular doors with their prices. The menu opens onto an overview showing the product groups per category, with a featured door alongside.",
      },
      result: {
        nl: "Een rustige, lichte webshop waarin je per lijn en per categorie snel bij de juiste deur komt.",
        en: "A calm, light webshop in which you quickly reach the right door by line and by category.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "mp-car-care",
      client: "MP Car Care",
      title: {
        nl: "MP Car Care: detailing in het donker uitgelicht",
        en: "MP Car Care: detailing, lit up in the dark",
      },
      summary: {
        nl: "Webdesign voor MP Car Care, een car detailing shop in Breda: een donkerblauwe pagina met de auto's groot in beeld en een klassieker op een zwarte achtergrond als hero.",
        en: "Web design for MP Car Care, a car detailing shop in Breda: a dark blue page with the cars shown large and a classic car on a black background as the hero.",
      },
      sector: "automotive-mobiliteit",
      services: ["websites-webshops"],
      applications: ["ux-ui-webdesign"],
      tools: [],
      cover: "/media/cases/mp-car-care/s-fa-design-01.webp",
      color: "#0F1821",
      challenge: {
        nl: "Bij car detailing draait alles om afwerking en details. De website van MP Car Care moest dat zelf ook uitstralen: rustig, donker en met de auto's als hoofdrolspeler.",
        en: "Car detailing is all about finish and detail. MP Car Care's website had to radiate that too: calm, dark and with the cars in the leading role.",
      },
      approach: {
        nl: "We ontwierpen een donkerblauwe pagina met een sierlijke serif voor de koppen en goud als accent. De hero zet de shop en Breda centraal, met daaronder een strook met werk in de studio. Voor de hero maakten we ook een versie met een klassieker die uit het donker oplicht.",
        en: "We designed a dark blue page with an elegant serif for the headings and gold as an accent. The hero puts the shop and Breda centre stage, followed by a strip of work in the studio. For the hero we also made a version with a classic car emerging from the dark.",
      },
      result: {
        nl: "Een ingetogen ontwerp waarin het werk van MP Car Care voor zichzelf spreekt.",
        en: "A restrained design in which MP Car Care's work speaks for itself.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "mainsail",
      client: "Mainsail",
      title: {
        nl: "Mainsail: een merk voor Metalvisor",
        en: "Mainsail: a brand for Metalvisor",
      },
      summary: {
        nl: "Logo's, beeldstijl, een landingspagina en een brochurecover voor Mainsail en Metalvisor, de hypervisor voor mission critical workloads.",
        en: "Logos, visual style, a landing page and a brochure cover for Mainsail and Metalvisor, the hypervisor for mission-critical workloads.",
      },
      sector: "tech-saas-startups",
      services: ["branding-rebranding", "websites-webshops", "grafisch-ontwerp-print"],
      applications: ["logo-ontwerp", "huisstijl", "ux-ui-webdesign", "landingspaginas", "brochures-magazines"],
      tools: [],
      cover: "/media/cases/mainsail/s-fa-visual-style.webp",
      color: "#1273E8",
      challenge: {
        nl: "Mainsail ontwikkelt Metalvisor, een hypervisor voor mission critical workloads, tot aan de tactical edge. Diepe techniek voor een publiek dat veel ziet. Merk en website moesten het product helder en zelfverzekerd neerzetten.",
        en: "Mainsail develops Metalvisor, a hypervisor for mission-critical workloads, right up to the tactical edge. Deep technology for an audience that sees a lot. Brand and website had to present the product clearly and confidently.",
      },
      approach: {
        nl: "We werkten het merk uit voor Mainsail en Metalvisor samen: de twee logo's naast elkaar op wit, donker en blauw, met varianten voor het Metalvisor-beeldmerk. De beeldstijl combineert helder blauw met diagonale lijnen en fotografie. Op de landingspagina staan de boodschap en een isometrische chip centraal. Voor de brochure ontwierpen we een donkerblauwe cover met een golvend draadmodel.",
        en: "We developed the brand for Mainsail and Metalvisor together: the two logos side by side on white, dark and blue, with variants for the Metalvisor brand mark. The visual style combines bright blue with diagonal lines and photography. The landing page puts the message and an isometric chip centre stage. For the brochure we designed a dark blue cover with a rolling wireframe landscape.",
      },
      result: {
        nl: "Een strak, technisch merk dat op het scherm en op papier hetzelfde verhaal vertelt.",
        en: "A clean, technical brand that tells the same story on screen and on paper.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "megensbouw",
      client: "MegensBouw",
      title: {
        nl: "MegensBouw: een bedrijfspand in 3D, voordat het er staat",
        en: "MegensBouw: a commercial building in 3D, before it is built",
      },
      summary: {
        nl: "3D-renders van een bedrijfspand met kantoor en laaddocks voor MegensBouw: vanaf de straat, bij het hek en van bovenaf, in het licht van verschillende momenten van de dag.",
        en: "3D renders of a commercial building with offices and loading docks for MegensBouw: from the street, by the fence and from above, in the light of different times of day.",
      },
      sector: "bouw-architectuur",
      services: ["foto-video-3d-animatie"],
      applications: ["3d-visualisatie"],
      tools: [],
      cover: "/media/cases/megensbouw/s-fa-render-01.webp",
      color: "#4C413D",
      challenge: {
        nl: "Een nieuw bedrijfspand bestaat eerst alleen op tekening. MegensBouw wilde laten zien hoe het gebouw er straks echt uitziet, met de gevels, de laaddocks en de omgeving erbij.",
        en: "A new commercial building first exists only on paper. MegensBouw wanted to show what the building will really look like, with the facades, the loading docks and the surroundings included.",
      },
      approach: {
        nl: "Vanuit de bouwtekeningen maakten we 3D-renders van het pand. We lieten het gebouw zien vanaf verschillende standpunten: frontaal vanaf de straat, schuin langs het hek, bij de laaddocks en van bovenaf. Vrachtwagens, auto's, mensen en bomen maken het beeld levendig, en strijklicht van een laagstaande zon geeft de gevels diepte.",
        en: "Working from the construction drawings, we made 3D renders of the building. We showed it from several viewpoints: head-on from the street, at an angle along the fence, at the loading docks and from above. Trucks, cars, people and trees bring the image to life, and raking light from a low sun gives the facades depth.",
      },
      result: {
        nl: "Een reeks fotorealistische beelden van een pand dat er nog niet staat.",
        en: "A series of photorealistic images of a building that has yet to be built.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "munjz-connect",
      client: "Munjz Connect",
      title: {
        nl: "Munjz Connect: facilitair beheer, per branche en per rol",
        en: "Munjz Connect: facility management, by industry and by role",
      },
      summary: {
        nl: "Webdesign voor Munjz Connect, software voor facilitair en vastgoedbeheer: een homepage met het product in beeld, een overzicht van oplossingen per branche en menu's per oplossing en functie.",
        en: "Web design for Munjz Connect, software for facility and property management: a homepage that shows the product, an overview of solutions by industry and menus per solution and feature.",
      },
      sector: "tech-saas-startups",
      services: ["websites-webshops"],
      applications: ["ux-ui-webdesign"],
      tools: [],
      cover: "/media/cases/munjz-connect/s-fa-design-01.webp",
      color: "#1878E8",
      challenge: {
        nl: "Munjz Connect is één platform voor commercieel en residentieel facilitair beheer. Dezelfde software moet aanspreken bij een kantoor, een ziekenhuis, een school of een hotel, en bij de facility manager net zo goed als bij de IT-manager.",
        en: "Munjz Connect is one platform for commercial and residential facility management. The same software has to appeal to an office, a hospital, a school or a hotel, and to the facility manager as much as to the IT manager.",
      },
      approach: {
        nl: "We ontwierpen de website rond die twee ingangen: per branche en per rol. Een schakelaar op de oplossingenpagina wisselt tussen beide. Per branche is er een kaart met een eigen sfeerbeeld. De homepage toont het product in een dashboard en op de laptop, met tabbladen voor beheren, onderhouden, volgen en rapporteren. De menu's openen op overzichtelijke panelen, met aparte kaarten voor commercieel en residentieel beheer.",
        en: "We designed the website around those two entry points: by industry and by role. A toggle on the solutions page switches between them. Each industry gets a card with its own image. The homepage shows the product in a dashboard and on a laptop, with tabs for manage, maintain, track and report. The menus open onto clear panels, with separate cards for commercial and residential management.",
      },
      result: {
        nl: "Een heldere SaaS-website waarop elke bezoeker snel zijn eigen ingang vindt.",
        en: "A clear SaaS website on which every visitor quickly finds their own way in.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "pwt-gears",
      client: "PWT Gears",
      title: {
        nl: "PWT Gears: het verhaal van één tandwiel",
        en: "PWT Gears: the story of a single gear",
      },
      summary: {
        nl: "Doorlopende social media en organische content voor PWT Gears (P. van der Wegen) uit Tilburg, zoals een swipe-post die van een onrustige wereld via de mijnbouw inzoomt op dat ene kritieke onderdeel dat moet blijven draaien, en posttemplates in de eigen blauwe stijl.",
        en: "Ongoing social media and organic content for PWT Gears (P. van der Wegen) in Tilburg, such as a swipe post that zooms in from an unsettled world, via mining, to the one critical component that has to keep turning, and post templates in its own blue style.",
      },
      sector: "industrie-techniek",
      services: ["content-marketing-online-ads"],
      applications: ["social-media-marketing"],
      tools: [],
      cover: "/media/cases/pwt-gears/s-fa-carousel.webp",
      color: "#005D82",
      challenge: {
        nl: "PWT Gears, de tandwielfabrikant P. van der Wegen in Tilburg en onderdeel van de PWT Group, maakt tandwielen, rondsels en tandwielkasten voor zware industrie, van mijnbouw en cement tot staal en de maritieme sector. Een technisch product, dat online pas gaat leven als je laat zien waarom het ertoe doet. En dat verhaal moet je niet één keer vertellen, maar steeds opnieuw.",
        en: "PWT Gears, the gear manufacturer P. van der Wegen in Tilburg and part of the PWT Group, makes gears, pinions and gearboxes for heavy industry, from mining and cement to steel and the maritime sector. A technical product that only comes alive online when you show why it matters. And that story isn't told once, but again and again.",
      },
      approach: {
        nl: "We verzorgen de social media en de organische content van PWT Gears. Een voorbeeld is een swipe-post in acht slides, die we schreven en ontwierpen. Het verhaal begint breed, bij een wereld die onrustiger wordt, en zoomt in: wat betekent dat voor de industrie, voor de mijnbouw, en voor het ene onderdeel waar alles van afhangt: the gear. Het eindigt bij PWT Gears: quality isn't optional, we build for continuity. Daarnaast maakten we posttemplates in dezelfde blauwe stijl, met het gebouw en het logo als beeld, in het Engels en het Nederlands.",
        en: "We take care of PWT Gears' social media and organic content. One example is an eight-slide swipe post that we wrote and designed. The story starts wide, with a world that is becoming more unsettled, and zooms in: what does that mean for industry, for mining, and for the one component everything depends on: the gear. It ends with PWT Gears: quality isn't optional, we build for continuity. We also made post templates in the same blue style, with the building and the logo as imagery, in English and Dutch.",
      },
      result: {
        nl: "Doorlopende social content die een technisch product een verhaal geeft, in een herkenbare eigen stijl en in twee talen.",
        en: "Ongoing social content that gives a technical product a story, in a recognisable style of its own and in two languages.",
      },
      shape: "wide",
    },
    {
      slug: "porsche-centrum-amsterdam",
      client: "Porsche Centrum Amsterdam",
      title: {
        nl: "Porsche Centrum Amsterdam: de Secret Rooftop Party in beeld",
        en: "Porsche Centrum Amsterdam: the Secret Rooftop Party on film",
      },
      summary: {
        nl: "Een aftermovie voor Porsche Centrum Amsterdam: gasten, auto's, muziek en hapjes op het dak, in twintig seconden.",
        en: "An aftermovie for Porsche Centrum Amsterdam: guests, cars, music and food on the roof, in twenty seconds.",
      },
      sector: "automotive-mobiliteit",
      services: ["foto-video-3d-animatie"],
      applications: ["bedrijfsfilm", "social-video"],
      tools: [],
      cover: "/media/cases/porsche-centrum-amsterdam/s-fa-still-01.webp",
      color: "#A42828",
      challenge: {
        nl: "Porsche Centrum Amsterdam organiseerde een Secret Rooftop Party. De sfeer van die middag moest in een korte film te voelen zijn.",
        en: "Porsche Centrum Amsterdam hosted a Secret Rooftop Party. The atmosphere of that afternoon had to come across in a short film.",
      },
      approach: {
        nl: "We filmden de middag en monteerden er een aftermovie van: de aankomst langs de Porsches, de weg naar boven, gasten op het dak, een saxofonist, sushi en een klassieke 356 in de zon. Korte shots, warm licht en veel beweging, met het logo van Porsche Centrum Amsterdam als afsluiter.",
        en: "We filmed the afternoon and edited it into an aftermovie: the arrival past the Porsches, the way up, guests on the roof, a saxophonist, sushi and a classic 356 in the sun. Short shots, warm light and plenty of movement, closing with the Porsche Centrum Amsterdam logo.",
      },
      result: {
        nl: "Een korte, zonnige film die de middag in één keer terugbrengt.",
        en: "A short, sunny film that brings the afternoon back in one go.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "privacy-company",
      client: "Privacy Company",
      title: {
        nl: "Privacy Company: website en vacatureportaal",
        en: "Privacy Company: website and vacancy portal",
      },
      summary: {
        nl: "De website van Privacy Company, met adviesdiensten, trainingen, blogs en een vacatureportaal waar je direct solliciteert. In het Nederlands en het Engels.",
        en: "The website of Privacy Company, with advisory services, training courses, blogs and a vacancy portal where you apply directly. In Dutch and English.",
      },
      sector: "zakelijke-dienstverlening",
      services: ["websites-webshops"],
      applications: ["webflow-website", "meertalige-website"],
      tools: ["webflow"],
      url: "https://www.privacycompany.eu/nl",
      color: "#DB7257",
      challenge: {
        nl: "Privacy Company adviseert organisaties over privacy en de AVG, geeft trainingen en maakt software voor privacy management. De website moest al die kanten een duidelijke plek geven en tegelijk nieuwe collega's aantrekken.",
        en: "Privacy Company advises organisations on privacy and the GDPR, runs training courses and makes privacy management software. The website had to give each of those a clear place, and attract new colleagues at the same time.",
      },
      approach: {
        nl: "We maakten de website in een warm verloop van oranje naar perzik op lichtgrijs, met koppen die een schreefletter en een schreefloze letter mengen. De homepage leidt naar de adviesdiensten, de trainingen, de blogs en de software, met klantervaringen en logo's van klanten. Het vacatureportaal zet de open vacatures op een rij. Per vacature lees je wat je gaat doen en wat je meebrengt, en solliciteer je meteen via een formulier: naam, e-mail, LinkedIn of cv, en een motivatie. Privacy Nexus, de software van Privacy Company, kreeg een eigen website in dezelfde lijn.",
        en: "We made the website in a warm gradient from orange to peach on light grey, with headings that mix a serif and a sans-serif. The homepage leads to the advisory services, the training courses, the blogs and the software, with client stories and client logos. The vacancy portal lists the open positions. Each vacancy explains what you will do and what you bring, and you apply straight away through a form: name, email, LinkedIn or CV, and a motivation. Privacy Nexus, Privacy Company's software, got its own website in the same line.",
      },
      result: {
        nl: "Eén plek voor advies, trainingen en software, met een vacatureportaal waar solliciteren een paar velden is.",
        en: "One place for advice, training and software, with a vacancy portal where applying takes a few fields.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "privacy-nexus",
      client: "Privacy Nexus",
      title: {
        nl: "Privacy Nexus: website voor privacy management",
        en: "Privacy Nexus: website for privacy management",
      },
      summary: {
        nl: "De website van Privacy Nexus, de software voor privacy management van Privacy Company: product, tarieven, blog, changelog en een gratis proefaccount. In het Nederlands en het Engels.",
        en: "The website of Privacy Nexus, Privacy Company's privacy management software: product, pricing, blog, changelog and a free trial account. In Dutch and English.",
      },
      sector: "tech-saas-startups",
      services: ["websites-webshops"],
      applications: ["webflow-website", "meertalige-website"],
      tools: ["webflow"],
      url: "https://www.privacynexus.io/nl",
      color: "#623AD5",
      challenge: {
        nl: "Met Privacy Nexus regelt een organisatie haar AVG-compliance en toont ze die aan. De website moest laten zien dat dat eenvoudig kan, ook voor collega's zonder juridische achtergrond, en bezoekers naar een gratis proefaccount leiden.",
        en: "With Privacy Nexus an organisation manages its GDPR compliance and demonstrates it. The website had to show that this can be simple, also for colleagues without a legal background, and lead visitors to a free trial account.",
      },
      approach: {
        nl: "We maakten de website in een paars verloop, met zwevende stukjes interface zoals een wereldkaart en voortgangsringen. Illustraties van mensen die samen een berg op gaan of samen fietsen begeleiden de onderwerpen 'Vliegende start', 'Maak samenwerken makkelijker' en 'Laat zien dat je controle hebt'. Klantlogo's staan op lila tegels, blogs en klantervaringen krijgen zwart-witfoto's, en onderaan start je met je naam en e-mailadres een proefaccount. Een banner met het woordmerk en 'by Privacy Company' hoort bij dezelfde lijn.",
        en: "We made the website in a purple gradient, with floating pieces of interface such as a world map and progress rings. Illustrations of people climbing a mountain together or riding a tandem accompany the topics 'Flying start', 'Make collaboration easier' and 'Show that you are in control'. Client logos sit on lilac tiles, blogs and client stories get black-and-white photos, and at the bottom you start a trial account with your name and email address. A banner with the wordmark and 'by Privacy Company' belongs to the same line.",
      },
      result: {
        nl: "Een website die privacy management bereikbaar laat voelen en bezoekers rechtstreeks naar een proefaccount brengt.",
        en: "A website that makes privacy management feel within reach and takes visitors straight to a trial account.",
      },
      cover: "/media/cases/privacy-nexus/s-fa-privacynexus-banner.webp",
      concept: true,
      shape: "wide",
    },
    {
      slug: "samdesk",
      client: "Samdesk",
      title: {
        nl: "Samdesk: een demo waarin elke minuut telt",
        en: "Samdesk: a demo where every minute counts",
      },
      summary: {
        nl: "Een demopresentatie voor Samdesk, dat wereldwijd verstoringen en crises in realtime signaleert: titelslides met meldingen als losse kaarten, radarpulsen en een stad in 3D waarin het signaal opvalt tussen de ruis.",
        en: "A demo presentation for Samdesk, which detects disruptions and crises worldwide in real time: title slides with alerts as separate cards, radar pulses and a city in 3D where the signal stands out from the noise.",
      },
      sector: "tech-saas-startups",
      services: ["grafisch-ontwerp-print"],
      applications: ["presentaties-pitchdecks"],
      tools: [],
      color: "#29B365",
      challenge: {
        nl: "Samdesk signaleert verstoringen en crises over de hele wereld in realtime, met big data en AI. Voor demo's met nieuwe klanten zocht Samdesk een presentatie die meteen laat voelen waarom snelheid telt.",
        en: "Samdesk detects disruptions and crises all over the world in real time, using big data and AI. For demos with new clients, Samdesk wanted a presentation that makes you feel straight away why speed matters.",
      },
      approach: {
        nl: "We bouwden de presentatie op een donkere stadskaart. De titelslide zet 'In times of crisis every minute counts.' naast een koerier op een groen vlak, met meldingen als losse kaarten, zoals een ongeluk en een explosie, en rode radarpulsen op de kaart. In 'Signal vs Noise' kantelt de stad in 3D: één melding licht op tussen de rest, reizigers staan er als groene labels in. De presentatie draagt het logo van Samdesk naast dat van de prospect; dat laatste hebben we hier vervaagd.",
        en: "We built the presentation on a dark city map. The title slide puts 'In times of crisis every minute counts.' next to a courier on a green shape, with alerts as separate cards, such as an accident and an explosion, and red radar pulses on the map. In 'Signal vs Noise' the city tilts into 3D: one alert lights up among the rest, with travellers shown as green labels. The presentation carries Samdesk's logo next to that of the prospect; we have blurred the latter here.",
      },
      result: {
        nl: "Een demo die in een paar slides laat zien waar Samdesk om draait: snel zien wat er gebeurt, tussen alle ruis door.",
        en: "A demo that shows in a few slides what Samdesk is about: seeing quickly what is happening, through all the noise.",
      },
      cover: "/media/cases/samdesk/s-fa-slide-01.webp",
      concept: true,
      shape: "wide",
    },
    {
      slug: "pysport",
      client: "PySport",
      title: {
        nl: "PySport: één logo voor de community, de conferentie en de playground",
        en: "PySport: one logo for the community, the conference and the playground",
      },
      summary: {
        nl: "Logo voor PySport, met varianten voor PySport Conference en PySport Playground, en een conferentiebanner met het logo op fotografie.",
        en: "Logo for PySport, with variants for PySport Conference and PySport Playground, and a conference banner with the logo on photography.",
      },
      sector: "sport-media",
      services: ["branding-rebranding"],
      applications: ["logo-ontwerp", "huisstijl"],
      tools: [],
      cover: "/media/cases/pysport/s-fa-conference-banner.webp",
      color: "#4BA3DA",
      challenge: {
        nl: "PySport brengt sport en Python samen, met een conferentie en een playground. Daar hoorde één herkenbaar logo bij dat in alle onderdelen werkt.",
        en: "PySport brings sport and Python together, with a conference and a playground. That called for one recognisable logo that works across every part.",
      },
      approach: {
        nl: "We ontwierpen een beeldmerk in lagen van blauw dat uitloopt in een zachte kleurovergang, met een strak, vriendelijk woordmerk ernaast. Onder het woordmerk komt de naam van het onderdeel: conference of playground. Op de conferentiebanner staat het logo in wit op een donkerblauw getinte foto van de zaal.",
        en: "We designed a brand mark in layers of blue that runs into a soft colour gradient, with a clean, friendly wordmark beside it. Beneath the wordmark goes the name of the part: conference or playground. On the conference banner the logo sits in white on a dark blue tinted photo of the venue.",
      },
      result: {
        nl: "Een logofamilie waarmee PySport overal hetzelfde gezicht laat zien.",
        en: "A logo family that gives PySport the same face everywhere.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "thingsix",
      client: "ThingsIX",
      title: {
        nl: "ThingsIX: een merk voor een gedecentraliseerd netwerk",
        en: "ThingsIX: a brand for a decentralised network",
      },
      summary: {
        nl: "Logo en brandbook voor ThingsIX, een gedecentraliseerd LoRaWAN-netwerk: het beeldmerk, groen op zwart, Manrope en Inter als letters, een archetype en een bestelflow voor de evaluatiekit.",
        en: "Logo and brandbook for ThingsIX, a decentralised LoRaWAN network: the brand mark, green on black, Manrope and Inter as typefaces, an archetype and an order flow for the evaluation kit.",
      },
      sector: "tech-saas-startups",
      services: ["branding-rebranding", "websites-webshops"],
      applications: ["logo-ontwerp", "brandbook", "huisstijl", "ux-ui-webdesign"],
      tools: [],
      cover: "/media/cases/thingsix/s-fa-brandbook-01.webp",
      color: "#2FF7A6",
      challenge: {
        nl: "ThingsIX is een gedecentraliseerd LoRaWAN-netwerk dat dataleveranciers beloont voor betrouwbare data aan eindgebruikers. Een technisch en abstract idee, dat een merk nodig had met een eigen, herkenbaar beeld.",
        en: "ThingsIX is a decentralised LoRaWAN network that rewards data providers for delivering reliable data to end users. A technical and abstract idea that needed a brand with its own recognisable look.",
      },
      approach: {
        nl: "We ontwierpen een beeldmerk van vier ruiten en legden het merk vast in een brandbook: de logovarianten op zwart, groen en licht, signaalgroen als kleur, Manrope en Inter als letters en een archetype dat de toon bepaalt. Golvende velden van stippen geven het netwerk een beeld. Voor de bestelling van de evaluatiekit ontwierpen we een eenvoudig formulier, met de doos in 3D ernaast.",
        en: "We designed a brand mark of four diamonds and captured the brand in a brandbook: the logo variants on black, green and light, signal green as the colour, Manrope and Inter as typefaces and an archetype that sets the tone. Rolling fields of dots give the network an image. For ordering the evaluation kit we designed a simple form, with the box in 3D alongside.",
      },
      result: {
        nl: "Een donker, technisch merk met één heldere kleur, van logo tot bestelflow.",
        en: "A dark, technical brand with one bright colour, from logo to order flow.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "tristo",
      client: "Tristo",
      title: {
        nl: "Tristo: werk en begeleiding voor statushouders",
        en: "Tristo: work and guidance for status holders",
      },
      summary: {
        nl: "Een herovideo voor de website, een brochure en visitekaartjes voor Tristo in Helmond, dat werk en begeleiding biedt aan statushouders.",
        en: "A hero video for the website, a brochure and business cards for Tristo in Helmond, which offers work and guidance to status holders.",
      },
      sector: "zakelijke-dienstverlening",
      services: ["foto-video-3d-animatie", "grafisch-ontwerp-print"],
      applications: ["bedrijfsfilm", "brochures-magazines", "visitekaartjes-drukwerk"],
      tools: [],
      cover: "/media/cases/tristo/s-fa-print.webp",
      color: "#0D3E33",
      challenge: {
        nl: "Tristo biedt werk en begeleiding aan statushouders. Dat verhaal gaat over mensen en over echt werk, en moest ook zo in beeld komen: op de website en op papier.",
        en: "Tristo offers work and guidance to status holders. That story is about people and about real work, and it had to be shown that way too: on the website and on paper.",
      },
      approach: {
        nl: "We filmden bij Tristo in Helmond en maakten er een herovideo voor de website van: het pand met de gevelreclame, het magazijn met heftrucks en pallets en de medewerkers aan het werk in hun groene polo's. In dezelfde lijn ontwierpen we de brochure, met een portret op de cover, en visitekaartjes in donkergroen en oranje.",
        en: "We filmed at Tristo in Helmond and turned it into a hero video for the website: the building with its signage, the warehouse with forklifts and pallets and the employees at work in their green polos. In the same style we designed the brochure, with a portrait on the cover, and business cards in dark green and orange.",
      },
      result: {
        nl: "Beeld dat laat zien wie er bij Tristo werken en wat ze doen, op het scherm en op papier.",
        en: "Visuals that show who works at Tristo and what they do, on screen and on paper.",
      },
      url: "https://www.tristo.nl",
      concept: true,
      shape: "wide",
    },
    {
      slug: "wizardframe",
      client: "WizardFrame",
      title: {
        nl: "WizardFrame: beeld, geluid en design in één frame",
        en: "WizardFrame: image, sound and design in one frame",
      },
      summary: {
        nl: "Logo, brandbook en een online configurator voor WizardFrame, een designframe waarin beeldscherm, geluid en techniek samenkomen. Plus een uitlegbeeld en de herovideo voor de website.",
        en: "Logo, brandbook and an online configurator for WizardFrame, a design frame that brings screen, sound and technology together. Plus an explainer visual and the hero video for the website.",
      },
      sector: "interieur-architectuur",
      services: ["branding-rebranding", "configurators-lead-tools-widgets", "foto-video-3d-animatie"],
      applications: ["logo-ontwerp", "brandbook", "huisstijl", "productconfigurator", "bedrijfsfilm"],
      tools: [],
      cover: "/media/cases/wizardframe/s-fa-brandbook-02.webp",
      color: "#211A33",
      challenge: {
        nl: "WizardFrame integreert beeld, geluid, techniek en design in één frame of wall. Een product dat je op maat samenstelt, en dat dus een merk vraagt met allure en een configurator die het samenstellen eenvoudig maakt.",
        en: "WizardFrame integrates image, sound, technology and design in one frame or wall. A product you put together to measure, which calls for a brand with allure and a configurator that makes putting it together easy.",
      },
      approach: {
        nl: "We ontwierpen het logo, met een variant voor WizardWall, en legden het merk vast in een brandbook: diep paars met goud, de productlijnen WizardFrame, AtelierFrame, BoardFrame en OutdoorFrame, en de materiaal- en meubelpartners. Een uitlegbeeld laat zien wat er in het frame zit. Het brandbook staat ook als business case klaar om te downloaden. De productconfigurator is een flow met logica: in vier stappen kies je het type, residentieel of hospitality, het model en de opties, en controleer je het overzicht: geluidspakket, kleur en extra's als ambient light of een HDMI-poort, met een beeld dat direct meeverandert.",
        en: "We designed the logo, with a variant for WizardWall, and captured the brand in a brandbook: deep purple with gold, the product lines WizardFrame, AtelierFrame, BoardFrame and OutdoorFrame, and the material and furniture partners. An explainer visual shows what is inside the frame. The brandbook is also available to download as a business case. The product configurator is a flow with built-in logic: in four steps you choose the type, residential or hospitality, the model and the options, and check the overview: sound package, colour and extras such as ambient light or an HDMI port, with an image that changes along with you.",
      },
      result: {
        nl: "Een luxe merk en een configurator waarmee je je eigen frame samenstelt en direct ziet.",
        en: "A luxurious brand and a configurator that lets you put together your own frame and see it straight away.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "wrap-720s",
      client: "Duff Brothers",
      title: {
        nl: "McLaren 720S: een wrap voor The Challenge 2023",
        en: "McLaren 720S: a wrap for The Challenge 2023",
      },
      summary: {
        nl: "Een volledige wrap voor een McLaren 720S, met de Duff Brothers, het logo van The Challenge 2023 en de partners, uitgewerkt voor voor, achter en beide zijkanten.",
        en: "A full wrap for a McLaren 720S, with the Duff Brothers, The Challenge 2023 logo and the partners, worked out for the front, rear and both sides.",
      },
      sector: "automotive-mobiliteit",
      services: ["grafisch-ontwerp-print"],
      applications: ["beurs-signing"],
      tools: [],
      cover: "/media/cases/wrap-720s/s-fa-wrap-views.webp",
      color: "#CB7C40",
      challenge: {
        nl: "Een oranje McLaren 720S ging als de auto van de Duff Brothers mee in The Challenge 2023. De wrap moest opvallen, het team neerzetten en ruimte geven aan alle partners.",
        en: "An orange McLaren 720S joined The Challenge 2023 as the Duff Brothers' car. The wrap had to stand out, present the team and make room for every partner.",
      },
      approach: {
        nl: "We bouwden de wrap rond de foto's van het team in Schotse outfit, met het groene logo van The Challenge 2023 als blikvanger. Op de motorkap staat 'We are who we are', op de flanken lopen de foto's over in een Schotse vlag en een tartanpatroon. De logo's van de partners kregen elk een vaste plek. We werkten het ontwerp uit voor alle vier de aanzichten.",
        en: "We built the wrap around photos of the team in Scottish outfits, with the green The Challenge 2023 logo as the eye-catcher. The bonnet carries 'We are who we are', and on the flanks the photos blend into a Scottish flag and a tartan pattern. Each partner logo got a fixed place. We worked out the design for all four views.",
      },
      result: {
        nl: "Een wrap die van elke kant herkenbaar is, met team en partners goed in beeld.",
        en: "A wrap that is recognisable from every side, with team and partners clearly in view.",
      },
      concept: true,
      shape: "wide",
    },

    /* ================= Terug (eerder verwijderd wegens te weinig beeld) ================= */
    {
      slug: "mission-critical-nutrition",
      client: "Mission Critical Nutrition",
      title: {
        nl: "Mission Critical Nutrition: OMNI-1 online",
        en: "Mission Critical Nutrition: OMNI-1 online",
      },
      summary: {
        nl: "Webdesign voor Mission Critical Nutrition en OMNI-1, een supplement voor militairen en tactische professionals: een donkere, groene homepage met het product, de werking in grafieken en een aanvraag voor de brochure.",
        en: "Web design for Mission Critical Nutrition and OMNI-1, a supplement for the military and tactical professionals: a dark, green homepage with the product, how it works in charts and a request for the brochure.",
      },
      sector: "food-retail",
      services: ["websites-webshops"],
      applications: ["ux-ui-webdesign"],
      tools: [],
      cover: "/media/cases/mission-critical-nutrition/s-fa-design-01.webp",
      color: "#B8E400",
      challenge: {
        nl: "Mission Critical Nutrition ontwikkelde OMNI-1, een supplement voor wie onder zware omstandigheden moet presteren. De website moest het product serieus en overtuigend neerzetten voor een kritisch, professioneel publiek.",
        en: "Mission Critical Nutrition developed OMNI-1, a supplement for people who have to perform under tough conditions. The website had to present the product seriously and convincingly to a critical, professional audience.",
      },
      approach: {
        nl: "We ontwierpen een homepage in donker groen en zwart met limoengroen als accent. De hero zet de flessen OMNI-1 groot in beeld, met energie, vitamines en hydratatie als kernwoorden. Twee grafieken laten het verschil zien tussen een snelle piek en een gelijkmatige afgifte. Bezoekers vragen accreditatie of de brochure aan via een formulier.",
        en: "We designed a homepage in dark green and black with lime green as the accent. The hero shows the OMNI-1 bottles large, with energy, vitamins and hydration as key words. Two charts show the difference between a quick spike and an even release. Visitors request accreditation or the brochure through a form.",
      },
      result: {
        nl: "Een stoer, rustig ontwerp dat het product en de werking helder uitlegt.",
        en: "A tough yet calm design that clearly explains the product and how it works.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "phoenix-green-hydrogen",
      client: "Phoenix",
      title: {
        nl: "Phoenix: groene waterstof, van Texas naar Europa",
        en: "Phoenix: green hydrogen, from Texas to Europe",
      },
      summary: {
        nl: "Webdesign, presentatiebeeld, geanimeerde kaarten en een 3D-vlucht over Phoenix One, voor Phoenix: een partner in duurzame waterstof.",
        en: "Web design, presentation visuals, animated maps and a 3D flight over Phoenix One, for Phoenix: a partner in sustainable hydrogen.",
      },
      sector: "energie-duurzaamheid",
      services: ["websites-webshops", "grafisch-ontwerp-print", "foto-video-3d-animatie"],
      applications: ["ux-ui-webdesign", "presentaties-pitchdecks", "motion-design", "3d-visualisatie"],
      tools: [],
      cover: "/media/cases/phoenix-green-hydrogen/s-fa-slide-01.webp",
      color: "#3AD9A0",
      challenge: {
        nl: "Phoenix wil groene waterstof maken met wind- en zonne-energie en die vanuit Texas naar Europa brengen. Een groot plan op een plek die nog leeg is. Het moest voorstelbaar worden: hoe ziet het eruit, en hoe loopt de route?",
        en: "Phoenix aims to produce green hydrogen with wind and solar energy and bring it from Texas to Europe. A big plan in a place that is still empty. It had to become imaginable: what does it look like, and how does the route run?",
      },
      approach: {
        nl: "We begonnen met schetsen van de sitemap en ontwierpen de website in donkerblauw met mintgroen: een hero met windmolens, de projecten en de missie. Voor de presentatie maakten we de cover en kaartbeelden. Geanimeerde kaarten volgen de route: van de Phoenix-site via Corpus Christi over de oceaan naar Rotterdam en Antwerpen, en van daar het achterland in. Een 3D-vlucht over Phoenix One laat de wegen, windmolens en zonnevelden zien.",
        en: "We started by sketching the sitemap and designed the website in dark blue with mint green: a hero with wind turbines, the projects and the mission. For the presentation we made the cover and map visuals. Animated maps follow the route: from the Phoenix site via Corpus Christi across the ocean to Rotterdam and Antwerp, and from there into the hinterland. A 3D flight over Phoenix One shows the roads, wind turbines and solar fields.",
      },
      result: {
        nl: "Beeld en beweging die een plan op de tekentafel tastbaar maken, op de website en in de presentatie.",
        en: "Visuals and motion that make a plan on the drawing board tangible, on the website and in the presentation.",
      },
      concept: true,
      shape: "wide",
    },
    {
      slug: "velorum",
      client: "Velorum",
      title: {
        nl: "Velorum: trusted security, independent by design",
        en: "Velorum: trusted security, independent by design",
      },
      summary: {
        nl: "Logo, brandbook en website voor Velorum, dat cryptografische en securityoplossingen adviseert en bouwt: een vinkje in drie lagen, diep blauw en een rustige website rond een wereldbol van punten.",
        en: "Logo, brandbook and website for Velorum, which advises on and builds cryptographic and security solutions: a three-layer check mark, deep blue and a calm website around a globe of dots.",
      },
      sector: "tech-saas-startups",
      services: ["branding-rebranding", "websites-webshops"],
      applications: ["logo-ontwerp", "brandbook", "huisstijl", "ux-ui-webdesign"],
      tools: [],
      cover: "/media/cases/velorum/s-fa-brandbook-02.webp",
      color: "#1A2E5C",
      challenge: {
        nl: "Velorum adviseert en bouwt cryptografische en securityoplossingen voor organisaties die aantoonbaar vertrouwen, aansluiting op regelgeving en autonomie op de lange termijn nodig hebben. Een merk in security moet vooral één ding uitstralen: betrouwbaarheid.",
        en: "Velorum advises on and builds cryptographic and security solutions for organisations that need verifiable trust, regulatory alignment and long-term autonomy. A brand in security has to radiate one thing above all: reliability.",
      },
      approach: {
        nl: "We ontwierpen een beeldmerk als vinkje in drie lagen, met de payoff 'Trusted security. Independent by design.' Het brandbook legt de logovarianten vast, een palet van diep blauw tot zacht grijs en Inter als letter. De website opent met een wereldbol van punten, gevolgd door de diensten consultancy en automation, de cases, veelgestelde vragen en een contactformulier. Een LinkedIn-cover zet de payoff boven dezelfde wereldbol.",
        en: "We designed a brand mark as a three-layer check mark, with the payoff 'Trusted security. Independent by design.' The brandbook sets down the logo variants, a palette from deep blue to soft grey and Inter as the typeface. The website opens with a globe of dots, followed by the consultancy and automation services, the cases, frequently asked questions and a contact form. A LinkedIn cover places the payoff above the same globe.",
      },
      result: {
        nl: "Een sober, betrouwbaar merk dat online en op LinkedIn hetzelfde zegt.",
        en: "A sober, reliable brand that says the same thing online and on LinkedIn.",
      },
      concept: true,
      shape: "wide",
    },
  ],
  media: {
    /* ---------- MindYourPass (+ Ads + Mockups) ---------- */
    "mindyourpass": {
      images: [
        { src: "/media/cases/mindyourpass/s-fa-ads-grid.webp", title: "MindYourPass — Social ads" },
        { src: "/media/cases/mindyourpass/s-fa-flyer.webp", title: "MindYourPass — Flyer, voor- en achterkant" },
        { src: "/media/cases/mindyourpass/s-fa-logs-laptop.webp", title: "MindYourPass — Logs per webapplicatie" },
        { src: "/media/cases/mindyourpass/s-fa-storage-vs-computation.webp", title: "MindYourPass — Storage-based vs. computation-based" },
        { src: "/media/cases/mindyourpass/s-fa-hybrid-solution.webp", title: "MindYourPass — Hybride oplossing" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-01.webp", title: "MindYourPass — Brandbook" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-02.webp", title: "MindYourPass — Logovarianten" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-03.webp", title: "MindYourPass — Kleurenpalet" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-04.webp", title: "MindYourPass — Kleuren en CTA's" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-05.webp", title: "MindYourPass — Mock-ups en visuals" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-06.webp", title: "MindYourPass — Meten, verbeteren, afdwingen" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-07.webp", title: "MindYourPass — Iconen" },
      ],
      films: [
        { src: "/media/cases/mindyourpass/s-fa-control-center.mp4", poster: "/media/cases/mindyourpass/s-fa-control-center.webp", w: 1920, h: 1280, title: "Control center en beveiligingsniveaus" },
        { src: "/media/cases/mindyourpass/s-fa-journey-insights.mp4", poster: "/media/cases/mindyourpass/s-fa-journey-insights.webp", w: 1920, h: 1060, title: "The Password Journey: van meten naar inzicht" },
        { src: "/media/cases/mindyourpass/s-fa-journey-improve.mp4", poster: "/media/cases/mindyourpass/s-fa-journey-improve.webp", w: 1920, h: 1060, title: "The Password Journey: verbeteren en afdwingen" },
      ],
    },

    /* ---------- Monvy (platform) ---------- */
    "monvy": {
      images: [
        { src: "/media/cases/monvy/s-fa-laptop-factoring.webp", title: "Monvy — Factuurfinanciering op de laptop" },
        { src: "/media/cases/monvy/s-fa-slide-01.webp", title: "Monvy — Het platform op de iPad" },
        { src: "/media/cases/monvy/s-fa-design-01.webp", title: "Monvy — Opvolgingen als board" },
        { src: "/media/cases/monvy/s-fa-design-02.webp", title: "Monvy — Assistent-calls bij een opvolging" },
        { src: "/media/cases/monvy/s-fa-design-03.webp", title: "Monvy — Workflow voor een factuur" },
        { src: "/media/cases/monvy/s-fa-slide-02.webp", title: "Monvy — De complete opvolging" },
        { src: "/media/cases/monvy/s-fa-slide-03.webp", title: "Monvy — Opvolging pauzeren" },
        { src: "/media/cases/monvy/s-fa-design-04.webp", title: "Monvy — Factuurfinanciering" },
        { src: "/media/cases/monvy/s-fa-design-05.webp", title: "Monvy — Onboarding: betalingen regelen" },
        { src: "/media/cases/monvy/s-fa-design-06.webp", title: "Monvy — Uitleg in het dashboard" },
      ],
      films: [],
    },

    /* ---------- Monvy Branding (split van monvy) ---------- */
    "monvy-branding": {
      cover: "/media/cases/monvy-branding/s-fa-brandbook-08.webp",
      images: [
        { src: "/media/cases/monvy-branding/s-fa-brandbook-08.webp", title: "Monvy — Visitekaartjes en briefpapier" },
        { src: "/media/cases/monvy-branding/s-fa-print.webp", title: "Monvy — Brochure en visitekaartjes" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-01.webp", title: "Monvy — Logo" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-02.webp", title: "Monvy — mon + vy" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-03.webp", title: "Monvy — Beeldmerk" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-04.webp", title: "Monvy — Typografie: Poppins" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-05.webp", title: "Monvy — Merkkarakter" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-06.webp", title: "Monvy — Tone of voice" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-07.webp", title: "Monvy — Archetype: The Ruler" },
      ],
      films: [],
    },
    /* ---------- Nexis ---------- */
    "nexis-group": {
      images: [],
      films: [
        { src: "/media/cases/nexis-group/s-fa-website-scroll.mp4", poster: "/media/cases/nexis-group/s-fa-website-scroll.webp", w: 1920, h: 1024, title: "Website: van hero tot product" },
        { src: "/media/cases/nexis-group/s-fa-demo-aanvraag.mp4", poster: "/media/cases/nexis-group/s-fa-demo-aanvraag.webp", w: 1920, h: 1024, title: "Leadwidget: in vier stappen naar een demo" },
      ],
    },

    /* ---------- Plenty Planet ---------- */
    "plenty-planet": {
      images: [
        { src: "/media/cases/plenty-planet/s-fa-whitepaper.webp", title: "Plenty Planet — Brochure" },
        { src: "/media/cases/plenty-planet/s-fa-wireframe.webp", title: "Plenty Planet — Wireframe oplossingspagina met meescrollende widget" },
      ],
      films: [
        // Several/Screen Recording 2026-09-01
        { src: "/media/cases/plenty-planet/s-fa-website-hero.mp4", poster: "/media/cases/plenty-planet/s-fa-website-hero.webp", w: 1920, h: 1028, title: "Website: hero, oplossingen en diensten" },
        { src: "/media/cases/plenty-planet/s-fa-website-cases.mp4", poster: "/media/cases/plenty-planet/s-fa-website-cases.webp", w: 1920, h: 1028, title: "Website: de cases-slider" },
      ],
    },
    "plenty-planet-content": {
      cover: "/media/cases/plenty-planet-content/s-fa-posts.webp",
      images: [
        { src: "/media/cases/plenty-planet-content/s-fa-posts.webp", title: "Plenty Planet — LinkedIn-posts" },
        { src: "/media/cases/plenty-planet-content/s-fa-swipe-cover.webp", title: "Plenty Planet — Swipe-post: strategic independence" },
        { src: "/media/cases/plenty-planet-content/s-fa-carousel.webp", title: "Plenty Planet — Carrousel: bodem en waterstress" },
      ],
      films: [
        { src: "/media/cases/plenty-planet-content/s-fa-social-video.mp4", poster: "/media/cases/plenty-planet-content/s-fa-social-video.webp", w: 540, h: 960, title: "Korte video voor LinkedIn" },
      ],
    },

    /* ---------- Repairlab ---------- */
    "repairlab": {
      images: [
        { src: "/media/cases/repairlab/s-fa-brandbook-02.webp", title: "Repairlab — Merkpersoonlijkheid" },
        { src: "/media/cases/repairlab/s-fa-brandbook-03.webp", title: "Repairlab — Tone of voice in vier dimensies" },
        { src: "/media/cases/repairlab/s-fa-brandbook-04.webp", title: "Repairlab — Wie we zijn, en wie niet" },
        { src: "/media/cases/repairlab/s-fa-brandbook-05.webp", title: "Repairlab — De metafoor" },
      ],
      films: [],
    },
    "repairlab-content": {
      lead: true,
      images: [
        { src: "/media/cases/repairlab-content/s-fa-print-set.webp", title: "Repairlab — Flyer, advertentie en poster" },
        { src: "/media/cases/repairlab-content/s-fa-car-wrap.webp", title: "Repairlab — Belettering van de Twingo" },
        { src: "/media/cases/repairlab-content/s-fa-print-ad.webp", title: "Repairlab — Printadvertentie" },
        { src: "/media/cases/repairlab-content/s-fa-poster-find-my.webp", title: "Repairlab — Poster: 'Zoek mijn iPhone' uitschakelen" },
        { src: "/media/cases/repairlab-content/s-fa-flyer-screenprotector.webp", title: "Repairlab — Flyer: Keep your phone fit" },
      ],
      films: [],
    },

    /* ---------- SUBLIME ---------- */
    "sublime-branding": {
      lead: true,
      cover: "/media/cases/sublime-branding/s-fa-flyer-porsche.webp",
      images: [
        { src: "/media/cases/sublime-branding/s-fa-flyer-porsche.webp", title: "SUBLIME — Flyer op de motorkap" },
        { src: "/media/cases/sublime-branding/s-fa-laptop-road.webp", title: "SUBLIME CARS — Website op de laptop" },
        { src: "/media/cases/sublime-branding/s-fa-routebook-mockup.webp", title: "Super Food Rally 2.0 — Routeboek" },
        { src: "/media/cases/sublime-branding/s-fa-phone-instagram.webp", title: "SUBLIME — Instagram" },
        { src: "/media/cases/sublime-branding/s-fa-laptop-car.webp", title: "SUBLIME CARS — Homepage" },
        { src: "/media/cases/sublime-branding/s-fa-routebook-01.webp", title: "Routeboek — Cover" },
        { src: "/media/cases/sublime-branding/s-fa-laptop-interior.webp", title: "SUBLIME CARS — Autopagina" },
        { src: "/media/cases/sublime-branding/s-fa-flyer-windshield.webp", title: "SUBLIME — Flyer achter de ruit" },
        { src: "/media/cases/sublime-branding/s-fa-routebook-02.webp", title: "Routeboek — Route deel 2" },
        { src: "/media/cases/sublime-branding/s-fa-routebook-03.webp", title: "Routeboek — Route deel 3" },
        { src: "/media/cases/sublime-branding/s-fa-phone-facebook.webp", title: "SUBLIME — Social profiel" },
        { src: "/media/cases/sublime-branding/s-fa-instagram-post.webp", title: "SUBLIME — Instagram-post: evenementen" },
        { src: "/media/cases/sublime-branding/s-fa-badges.webp", title: "Super Food Rally 2.0 en het SUBLIME-embleem" },
        { src: "/media/cases/sublime-branding/s-fa-design-01.webp", title: "SUBLIME CARS — Autopagina, volledig ontwerp" },
      ],
      films: [],
    },

    /* ---------- Silvr ---------- */
    "silvr": {
      images: [
        { src: "/media/cases/silvr/s-fa-brandbook-01.webp", title: "Silvr — Brandbook: always stay ahead" },
        { src: "/media/cases/silvr/s-fa-brandbook-02.webp", title: "Silvr — Logovarianten" },
        { src: "/media/cases/silvr/s-fa-brandbook-06.webp", title: "Silvr — Merkbeeld" },
        { src: "/media/cases/silvr/s-fa-brandbook-03.webp", title: "Silvr — Kleurpalet" },
        { src: "/media/cases/silvr/s-fa-brandbook-04.webp", title: "Silvr — Typografie" },
        { src: "/media/cases/silvr/s-fa-brandbook-05.webp", title: "Silvr — Beeldmerk als grafisch element" },
        { src: "/media/cases/silvr/s-fa-email-voorstel.webp", title: "Silvr — Mail: je persoonlijke voorstel" },
      ],
      films: [],
    },

    /* ---------- Sparta (alleen beeldpagina's uit de presentatie) ---------- */
    "sparta-blue-hydrogen": {
      images: [
        { src: "/media/cases/sparta-blue-hydrogen/s-fa-slide-01.webp", title: "Sparta II — Presentatie: cover" },
        { src: "/media/cases/sparta-blue-hydrogen/s-fa-slide-02.webp", title: "Sparta II — Toepassingen in de industrie" },
        { src: "/media/cases/sparta-blue-hydrogen/s-fa-slide-03.webp", title: "Sparta II — Logo op merkblauw" },
      ],
      films: [],
    },

    /* ---------- The Digital Clinic ---------- */
    "the-digital-clinic": {
      images: [
        { src: "/media/cases/the-digital-clinic/s-fa-design-01.webp", title: "The Digital Clinic — Webdesign: hero" },
        { src: "/media/cases/the-digital-clinic/s-fa-packaging.webp", title: "The Digital Clinic — Verpakking" },
        { src: "/media/cases/the-digital-clinic/s-fa-design-02.webp", title: "The Digital Clinic — Homepage" },
        { src: "/media/cases/the-digital-clinic/s-fa-design-03.webp", title: "The Digital Clinic — Contact" },
      ],
      films: [],
    },

    /* ---------- The Sandt (online brochure The Diamond House, zonder cijfers) ---------- */
    "the-sandt": {
      images: [
        { src: "/media/cases/the-sandt/s-fa-design-01.webp", title: "The Sandt — Brochure The Diamond House: opening" },
        { src: "/media/cases/the-sandt/s-fa-design-02.webp", title: "The Sandt — Brochure: beeld van het project" },
        { src: "/media/cases/the-sandt/s-fa-brochure-covers.webp", title: "The Sandt — Brochurecovers" },
        { src: "/media/cases/the-sandt/s-fa-design-03.webp", title: "The Sandt — Brochure: The Bahamas" },
        { src: "/media/cases/the-sandt/s-fa-design-04.webp", title: "The Sandt — Brochure: omgevingsanalyse" },
        { src: "/media/cases/the-sandt/s-fa-design-05.webp", title: "The Sandt — Brochure: bouwtekeningen en rapporten" },
      ],
      films: [],
    },

    /* ---------- Several/ (opnames; Hela en KDS zijn cases van groep A) ---------- */
    "hela": {
      images: [],
      films: [
        { src: "/media/cases/hela/s-fa-helascroll.mp4", poster: "/media/cases/hela/s-fa-helascroll.webp", w: 1904, h: 988, title: "Webshop: door de consumentenpagina" },
      ],
    },
    "kds-stansvormen": {
      images: [],
      films: [
        { src: "/media/cases/kds-stansvormen/s-fa-kds-mobile.mp4", poster: "/media/cases/kds-stansvormen/s-fa-kds-mobile.webp", w: 948, h: 1920, title: "Website op mobiel" },
      ],
    },
    "aigora": {
      images: [],
      films: [
        // Several/Screen Recording 2026-10-04 at 1.26.16 PM
        { src: "/media/cases/aigora/s-fa-datasets-carousel.mp4", poster: "/media/cases/aigora/s-fa-datasets-carousel.webp", w: 1910, h: 1528, title: "Website: de bouwstenen van een dataset" },
      ],
    },

    /* ---------- Maarschall ---------- */
    "maarschall": {
      images: [
        { src: "/media/cases/maarschall/s-fa-design-01.webp", title: "Maarschall — Webdesign: The ultimate titanium exhaust" },
        { src: "/media/cases/maarschall/s-fa-design-02.webp", title: "Maarschall — Kies een afdeling" },
      ],
      films: [],
    },

    /* ---------- MisterGlass ---------- */
    "misterglass": {
      images: [
        { src: "/media/cases/misterglass/s-fa-brandbook-mockup-01.webp", title: "MisterGlass — Brandbook: logo en negatief" },
        { src: "/media/cases/misterglass/s-fa-brandbook-mockup-02.webp", title: "MisterGlass — Brandbook: typografie" },
        { src: "/media/cases/misterglass/s-fa-brandbook-01.webp", title: "MisterGlass — Brandbook" },
        { src: "/media/cases/misterglass/s-fa-brandbook-02.webp", title: "MisterGlass — Logo" },
        { src: "/media/cases/misterglass/s-fa-brandbook-03.webp", title: "MisterGlass — Logo op glas" },
        { src: "/media/cases/misterglass/s-fa-brandbook-04.webp", title: "MisterGlass — Kleurpalet" },
        { src: "/media/cases/misterglass/s-fa-brandbook-05.webp", title: "MisterGlass — Archetype: Regular Guy + Innocent" },
        { src: "/media/cases/misterglass/s-fa-brandbook-06.webp", title: "MisterGlass — Beeldtaal" },
        { src: "/media/cases/misterglass/s-fa-posters.webp", title: "MisterGlass — Posters" },
        { src: "/media/cases/misterglass/s-fa-logo-exploration.webp", title: "MisterGlass — Logo-exploratie" },
      ],
      films: [],
    },

    /* ---------- NKTV ---------- */
    "nktv": {
      images: [
        { src: "/media/cases/nktv/s-fa-brandbook-01.webp", title: "NKTV — Logo op achtergronden" },
        { src: "/media/cases/nktv/s-fa-brandbook-02.webp", title: "NKTV — Logo en woordmerk" },
        { src: "/media/cases/nktv/s-fa-brandbook-03.webp", title: "NKTV — Merkkleuren" },
        { src: "/media/cases/nktv/s-fa-brandbook-04.webp", title: "NKTV — Typografie" },
        { src: "/media/cases/nktv/s-fa-brandbook-05.webp", title: "NKTV — Basisuitstraling" },
      ],
      films: [],
    },

    /* ---------- Nova (alles Nova Funeral Cars) ---------- */
    "nova-funeral-cars": {
      images: [
        { src: "/media/cases/nova-funeral-cars/s-fa-print-a4.webp", title: "Nova Funeral Cars — Flyers A4" },
        { src: "/media/cases/nova-funeral-cars/s-fa-flyer-mockup.webp", title: "Nova Funeral Cars — Flyer: a ride in style" },
        { src: "/media/cases/nova-funeral-cars/s-fa-print-ads.webp", title: "Nova Funeral Cars — Advertentie en A5-flyer" },
      ],
      films: [],
    },

    /* ---------- OUTPLAY ---------- */
    "outplay": {
      images: [
        { src: "/media/cases/outplay/s-fa-brandbook-01.webp", title: "OUTPLAY — Outdoor Play Labs" },
        { src: "/media/cases/outplay/s-fa-brandbook-02.webp", title: "OUTPLAY — Logo en woordmerk" },
        { src: "/media/cases/outplay/s-fa-brandbook-03.webp", title: "OUTPLAY — Kleurpalet" },
        { src: "/media/cases/outplay/s-fa-brandbook-04.webp", title: "OUTPLAY — Illustraties" },
        { src: "/media/cases/outplay/s-fa-brandbook-05.webp", title: "OUTPLAY — Iconen" },
        { src: "/media/cases/outplay/s-fa-brandbook-06.webp", title: "OUTPLAY — Toepassing" },
        { src: "/media/cases/outplay/s-fa-brandbook-07.webp", title: "OUTPLAY — Digitale mock-ups" },
      ],
      films: [],
    },

    /* ---------- RSI: veel scherper dan de bestaande 691px-beelden ---------- */
    "rsi-3d-sportvelden": {
      lead: true,
      cover: "/media/cases/rsi-3d-sportvelden/s-fa-playce-air-03.webp",
      images: [
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-field-hockey-alberta-03.webp", title: "Field Hockey Alberta — Veld met logo" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-playce-air-02.webp", title: "Playce Air — Sporthal onder een luchtdak" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-field-hockey-alberta-01.webp", title: "Field Hockey Alberta — Kooi van bovenaf" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-playce-air-01.webp", title: "Playce Air — Speelveld" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-field-hockey-alberta-02.webp", title: "Field Hockey Alberta — In het park" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-playce-air-03.webp", title: "Playce Air — Vloerbelijning" },
      ],
      films: [],
    },

    /* ---------- SolidLayer ---------- */
    "solidlayer": {
      images: [
        { src: "/media/cases/solidlayer/s-fa-brandbook-01.webp", title: "SolidLayer — Brandbook: trust the layer" },
        { src: "/media/cases/solidlayer/s-fa-brandbook-02.webp", title: "SolidLayer — Logo" },
        { src: "/media/cases/solidlayer/s-fa-brandbook-03.webp", title: "SolidLayer — Logovarianten" },
        { src: "/media/cases/solidlayer/s-fa-brandbook-04.webp", title: "SolidLayer — Kleurpalet" },
        { src: "/media/cases/solidlayer/s-fa-brandbook-05.webp", title: "SolidLayer — Typografie: Roboto Mono" },
      ],
      films: [],
    },

    /* ---------- Sparked ---------- */
    "sparked": {
      images: [
        { src: "/media/cases/sparked/s-fa-brandbook-02.webp", title: "Sparked — Logo: People Driven" },
        { src: "/media/cases/sparked/s-fa-brandbook-06.webp", title: "Sparked — Jouw moment. Onze passie." },
        { src: "/media/cases/sparked/s-fa-brandbook-01.webp", title: "Sparked — Visie" },
        { src: "/media/cases/sparked/s-fa-brandbook-03.webp", title: "Sparked — Logovarianten" },
        { src: "/media/cases/sparked/s-fa-brandbook-04.webp", title: "Sparked — Merkkleuren" },
        { src: "/media/cases/sparked/s-fa-brandbook-05.webp", title: "Sparked — Typografie" },
      ],
      films: [],
    },

    /* ---------- The Filmcar ---------- */
    "the-filmcar": {
      hero: "/media/cases/the-filmcar/s-fa-rolling-shots.mp4",
      images: [
        { src: "/media/cases/the-filmcar/s-fa-design-02.webp", title: "The Filmcar — Webdesign: Shots like never before" },
        { src: "/media/cases/the-filmcar/s-fa-design-01.webp", title: "The Filmcar — Webdesign: tweede richting" },
      ],
      films: [
        { src: "/media/cases/the-filmcar/s-fa-rolling-shots.mp4", poster: "/media/cases/the-filmcar/s-fa-rolling-shots.webp", w: 1920, h: 1080, title: "Hero-video van de website: rolling shots" },
      ],
    },

    /* ---------- YOUR.earth ---------- */
    "your-earth": {
      lead: true,
      images: [
        { src: "/media/cases/your-earth/s-fa-brandbook-01.webp", title: "YOUR.earth — Website op de laptop" },
        { src: "/media/cases/your-earth/s-fa-brandbook-02.webp", title: "YOUR.earth — Website op mobiel" },
        { src: "/media/cases/your-earth/s-fa-brandbook-03.webp", title: "YOUR.earth — Visitekaartjes" },
        { src: "/media/cases/your-earth/s-fa-brandbook-04.webp", title: "YOUR.earth — Brandbook" },
        { src: "/media/cases/your-earth/s-fa-brandbook-05.webp", title: "YOUR.earth — Logoconstructie" },
        { src: "/media/cases/your-earth/s-fa-brandbook-06.webp", title: "YOUR.earth — Kleurpalet" },
        { src: "/media/cases/your-earth/s-fa-brandbook-07.webp", title: "YOUR.earth — Typografie" },
        { src: "/media/cases/your-earth/s-fa-brandbook-08.webp", title: "YOUR.earth — Every landscape has a plan" },
      ],
      films: [],
    },

    /* ---------- Jalo (opname uit Several/, zonder de pagina's met investeringscijfers) ---------- */
    "jalo-energy": {
      images: [],
      films: [
        // Several/Screen Recording 2026-09-10 at 3.43.16 PM: 0,3–5 s + 7,3–12,9 s
        { src: "/media/cases/jalo-energy/s-fa-website-hero-pellets.mp4", poster: "/media/cases/jalo-energy/s-fa-website-hero-pellets.webp", w: 1656, h: 1032, title: "Website: Energy that goes further en Nederpellets" },
      ],
    },

    /* ================= Media van de nieuwe en teruggekeerde projecten ================= */
    "laserlux": {
      cover: "/media/cases/laserlux/s-fa-brandbook-02.webp",
      images: [
        { src: "/media/cases/laserlux/s-fa-brandbook-02.webp", title: "LaserLux — Jouw lijnen. In materiaal vastgelegd." },
        { src: "/media/cases/laserlux/s-fa-brandbook-01.webp", title: "LaserLux — Logo" },
        { src: "/media/cases/laserlux/s-fa-brandbook-04.webp", title: "LaserLux — Logovarianten" },
        { src: "/media/cases/laserlux/s-fa-brandbook-03.webp", title: "LaserLux — Visie" },
        { src: "/media/cases/laserlux/s-fa-brandbook-05.webp", title: "LaserLux — Merkkleuren" },
        { src: "/media/cases/laserlux/s-fa-brandbook-06.webp", title: "LaserLux — Typografie" },
      ],
      films: [],
    },
    "loftdeur": {
      cover: "/media/cases/loftdeur/s-fa-webshop-01.webp",
      images: [
        { src: "/media/cases/loftdeur/s-fa-webshop-01.webp", title: "Loftdeur — Vier productlijnen" },
        { src: "/media/cases/loftdeur/s-fa-webshop-02.webp", title: "Loftdeur — Menu met productgroepen" },
        { src: "/media/cases/loftdeur/s-fa-webshop-03.webp", title: "Loftdeur — Populair op dit moment" },
      ],
      films: [],
    },
    "mp-car-care": {
      cover: "/media/cases/mp-car-care/s-fa-design-01.webp",
      images: [
        { src: "/media/cases/mp-car-care/s-fa-design-01.webp", title: "MP Car Care — Webdesign" },
        { src: "/media/cases/mp-car-care/s-fa-hero-classic.webp", title: "MP Car Care — Hero met klassieker" },
      ],
      films: [],
    },
    "mainsail": {
      cover: "/media/cases/mainsail/s-fa-visual-style.webp",
      images: [
        { src: "/media/cases/mainsail/s-fa-visual-style.webp", title: "Mainsail — Beeldstijl" },
        { src: "/media/cases/mainsail/s-fa-brochure-cover.webp", title: "Metalvisor — Brochurecover" },
        { src: "/media/cases/mainsail/s-fa-logo.webp", title: "Mainsail en Metalvisor — Logo's" },
        { src: "/media/cases/mainsail/s-fa-design-01.webp", title: "Mainsail — Landingspagina" },
      ],
      films: [],
    },
    "megensbouw": {
      cover: "/media/cases/megensbouw/s-fa-render-01.webp",
      images: [
        { src: "/media/cases/megensbouw/s-fa-render-01.webp", title: "MegensBouw — Gevel met laaddocks" },
        { src: "/media/cases/megensbouw/s-fa-render-02.webp", title: "MegensBouw — Entree en laaddock" },
        { src: "/media/cases/megensbouw/s-fa-render-06.webp", title: "MegensBouw — Van bovenaf" },
        { src: "/media/cases/megensbouw/s-fa-render-03.webp", title: "MegensBouw — Frontaal vanaf de straat" },
        { src: "/media/cases/megensbouw/s-fa-render-04.webp", title: "MegensBouw — Langs het hek" },
        { src: "/media/cases/megensbouw/s-fa-render-05.webp", title: "MegensBouw — Bij de laaddeur" },
        { src: "/media/cases/megensbouw/s-fa-render-07.webp", title: "MegensBouw — Parkeerplaats" },
      ],
      films: [],
    },
    "munjz-connect": {
      cover: "/media/cases/munjz-connect/s-fa-design-02.webp",
      images: [
        { src: "/media/cases/munjz-connect/s-fa-design-02.webp", title: "Munjz Connect — Homepage" },
        { src: "/media/cases/munjz-connect/s-fa-design-01.webp", title: "Munjz Connect — Oplossingen per branche" },
        { src: "/media/cases/munjz-connect/s-fa-design-03.webp", title: "Munjz Connect — Beheren, onderhouden, volgen, rapporteren" },
        { src: "/media/cases/munjz-connect/s-fa-design-04.webp", title: "Munjz Connect — Menu: features" },
      ],
      films: [],
    },
    "pwt-gears": {
      cover: "/media/cases/pwt-gears/s-fa-carousel.webp",
      images: [
        { src: "/media/cases/pwt-gears/s-fa-carousel.webp", title: "PWT Gears — Swipe-post: The world is on fire" },
        { src: "/media/cases/pwt-gears/s-fa-templates.webp", title: "PWT Gears — Templates" },
      ],
      films: [],
    },
    "porsche-centrum-amsterdam": {
      hero: "/media/cases/porsche-centrum-amsterdam/s-fa-aftermovie.mp4",
      cover: "/media/cases/porsche-centrum-amsterdam/s-fa-still-01.webp",
      images: [
        { src: "/media/cases/porsche-centrum-amsterdam/s-fa-still-01.webp", title: "Porsche Centrum Amsterdam — Een 356 op het dak" },
        { src: "/media/cases/porsche-centrum-amsterdam/s-fa-still-02.webp", title: "Porsche Centrum Amsterdam — Secret Rooftop Party" },
        { src: "/media/cases/porsche-centrum-amsterdam/s-fa-still-03.webp", title: "Porsche Centrum Amsterdam — Detail" },
      ],
      films: [
        { src: "/media/cases/porsche-centrum-amsterdam/s-fa-aftermovie.mp4", poster: "/media/cases/porsche-centrum-amsterdam/s-fa-aftermovie.webp", w: 1920, h: 1080, title: "Aftermovie: Secret Rooftop Party" },
      ],
    },
    "privacy-nexus": {
      images: [
        { src: "/media/cases/privacy-nexus/s-fa-privacynexus-banner.webp", title: "PrivacyNexus by Privacy Company: banner" },
      ],
      films: [],
    },
    "samdesk": {
      images: [
        { src: "/media/cases/samdesk/s-fa-slide-01.webp", title: "Titelslide: In times of crisis every minute counts" },
        { src: "/media/cases/samdesk/s-fa-slide-02.webp", title: "Signal vs Noise: de stad in 3D" },
        { src: "/media/cases/samdesk/s-fa-slide-03.webp", title: "Titelslide met melding en radarpuls" },
      ],
      films: [],
    },
    "pysport": {
      cover: "/media/cases/pysport/s-fa-conference-banner.webp",
      images: [
        { src: "/media/cases/pysport/s-fa-logos.webp", title: "PySport — Logo en PySport Playground" },
        { src: "/media/cases/pysport/s-fa-conference-banner.webp", title: "PySport Conference — Banner" },
      ],
      films: [],
    },
    "thingsix": {
      cover: "/media/cases/thingsix/s-fa-brandbook-01.webp",
      images: [
        { src: "/media/cases/thingsix/s-fa-brandbook-01.webp", title: "ThingsIX — Brandbook" },
        { src: "/media/cases/thingsix/s-fa-brandbook-02.webp", title: "ThingsIX — Logovarianten" },
        { src: "/media/cases/thingsix/s-fa-brandbook-05.webp", title: "ThingsIX — Het netwerk in beeld" },
        { src: "/media/cases/thingsix/s-fa-brandbook-03.webp", title: "ThingsIX — Kleuren" },
        { src: "/media/cases/thingsix/s-fa-brandbook-04.webp", title: "ThingsIX — Typografie: Manrope en Inter" },
        { src: "/media/cases/thingsix/s-fa-brandbook-06.webp", title: "ThingsIX — Archetype" },
        { src: "/media/cases/thingsix/s-fa-logo.webp", title: "ThingsIX — Logo" },
        { src: "/media/cases/thingsix/s-fa-design-01.webp", title: "ThingsIX — Bestelflow evaluatiekit" },
      ],
      films: [],
    },
    "tristo": {
      hero: "/media/cases/tristo/s-fa-hero-video.mp4",
      cover: "/media/cases/tristo/s-fa-still-02.webp",
      images: [
        { src: "/media/cases/tristo/s-fa-print.webp", title: "Tristo — Brochure en visitekaartje" },
        { src: "/media/cases/tristo/s-fa-still-01.webp", title: "Tristo — Het pand in Helmond" },
        { src: "/media/cases/tristo/s-fa-still-02.webp", title: "Tristo — Aan het werk" },
      ],
      films: [
        { src: "/media/cases/tristo/s-fa-hero-video.mp4", poster: "/media/cases/tristo/s-fa-hero-video.webp", w: 1920, h: 1080, title: "Herovideo voor de website" },
      ],
    },
    "wizardframe": {
      cover: "/media/cases/wizardframe/s-fa-brandbook-02.webp",
      images: [
        { src: "/media/cases/wizardframe/s-fa-brandbook-02.webp", title: "WizardFrame — WizardWall" },
        { src: "/media/cases/wizardframe/s-fa-uitleg.webp", title: "WizardFrame — Wat er in het frame zit" },
        { src: "/media/cases/wizardframe/s-fa-brandbook-01.webp", title: "WizardFrame — Brandbook" },
        { src: "/media/cases/wizardframe/s-fa-brandbook-03.webp", title: "WizardFrame — Beeld, geluid, tech en design" },
        { src: "/media/cases/wizardframe/s-fa-brandbook-04.webp", title: "WizardFrame — Alles in één designframe" },
        { src: "/media/cases/wizardframe/s-fa-brandbook-05.webp", title: "WizardFrame — Productlijnen" },
      ],
      films: [
        { src: "/media/cases/wizardframe/s-fa-configurator.mp4", poster: "/media/cases/wizardframe/s-fa-configurator.webp", w: 1130, h: 1204, title: "Configurator: type, model, opties en overzicht" },
        { src: "/media/cases/wizardframe/s-fa-hero.mp4", poster: "/media/cases/wizardframe/s-fa-hero.webp", w: 1280, h: 720, title: "Herovideo van de website" },
      ],
    },
    "wrap-720s": {
      cover: "/media/cases/wrap-720s/s-fa-wrap-views.webp",
      images: [
        { src: "/media/cases/wrap-720s/s-fa-wrap-views.webp", title: "McLaren 720S — De wrap van alle kanten" },
        { src: "/media/cases/wrap-720s/s-fa-wrap-front.webp", title: "McLaren 720S — Voorkant: We are who we are" },
        { src: "/media/cases/wrap-720s/s-fa-wrap-side.webp", title: "McLaren 720S — Zijkant" },
      ],
      films: [],
    },
    "mission-critical-nutrition": {
      cover: "/media/cases/mission-critical-nutrition/s-fa-design-01.webp",
      images: [
        { src: "/media/cases/mission-critical-nutrition/s-fa-design-01.webp", title: "Mission Critical Nutrition — Homepage: OMNI-1" },
        { src: "/media/cases/mission-critical-nutrition/s-fa-design-02.webp", title: "Mission Critical Nutrition — De werking in grafieken" },
        { src: "/media/cases/mission-critical-nutrition/s-fa-logo.webp", title: "Mission Critical Nutrition — Logo" },
      ],
      films: [],
    },
    "phoenix-green-hydrogen": {
      hero: "/media/cases/phoenix-green-hydrogen/s-fa-phoenix-one-road.mp4",
      cover: "/media/cases/phoenix-green-hydrogen/s-fa-slide-01.webp",
      images: [
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-slide-01.webp", title: "Phoenix One — Presentatie: cover" },
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-design-01.webp", title: "Phoenix — Website: hero" },
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-render-wind-solar.webp", title: "Phoenix — Wind en zon" },
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-design-02.webp", title: "Phoenix — Website: projecten en missie" },
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-slide-02.webp", title: "Phoenix — Presentatie: van de site naar de kust" },
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-sketch-sitemap.webp", title: "Phoenix — Schetsen van de sitemap" },
      ],
      films: [
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-phoenix-one-road.mp4", poster: "/media/cases/phoenix-green-hydrogen/s-fa-phoenix-one-road.webp", w: 1920, h: 1080, title: "Phoenix One in 3D: de toegangsweg" },
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-phoenix-one-solar.mp4", poster: "/media/cases/phoenix-green-hydrogen/s-fa-phoenix-one-solar.webp", w: 1920, h: 1080, title: "Phoenix One in 3D: de zonnevelden" },
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-map-texas.mp4", poster: "/media/cases/phoenix-green-hydrogen/s-fa-map-texas.webp", w: 960, h: 1080, title: "Kaart: van de site naar Corpus Christi" },
        { src: "/media/cases/phoenix-green-hydrogen/s-fa-map-europe.mp4", poster: "/media/cases/phoenix-green-hydrogen/s-fa-map-europe.webp", w: 1920, h: 1080, title: "Kaart: via Rotterdam en Antwerpen het achterland in" },
      ],
    },
    "velorum": {
      cover: "/media/cases/velorum/s-fa-brandbook-02.webp",
      images: [
        { src: "/media/cases/velorum/s-fa-brandbook-02.webp", title: "Velorum — Logovarianten" },
        { src: "/media/cases/velorum/s-fa-mark.webp", title: "Velorum — Beeldmerk" },
        { src: "/media/cases/velorum/s-fa-brandbook-01.webp", title: "Velorum — Brandbook" },
        { src: "/media/cases/velorum/s-fa-brandbook-03.webp", title: "Velorum — Kleurpalet" },
        { src: "/media/cases/velorum/s-fa-brandbook-04.webp", title: "Velorum — Typografie: Inter" },
        { src: "/media/cases/velorum/s-fa-brandbook-05.webp", title: "Velorum — Logo-uitleg" },
        { src: "/media/cases/velorum/s-fa-linkedin-cover.webp", title: "Velorum — LinkedIn-cover" },
      ],
      films: [
        { src: "/media/cases/velorum/s-fa-website-scroll.mp4", poster: "/media/cases/velorum/s-fa-website-scroll.webp", w: 1780, h: 1138, title: "Website: van de hero naar contact" },
      ],
    },
  },
};
