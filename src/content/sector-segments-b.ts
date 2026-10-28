import type { SectorSlug } from "./registry";
import type { SectorSegment, T } from "./types";

/* ============================================================
   Doelgroepen per sector (deel B): tabs met eigen FAQ's onder
   "Veelgestelde vragen" en het raster met soorten bedrijven.
   Wordt in content/index.ts samengevoegd met sectors.ts.
   ============================================================ */

export const SEGMENTS_B: Partial<Record<SectorSlug, { segments: SectorSegment[]; audiences: T[] }>> = {
  /* ---------- Bouw & Architectuur ---------- */
  "bouw-architectuur": {
    segments: [
      {
        name: { nl: "Bouwbedrijven", en: "Construction firms" },
        intro: {
          nl: "Voor aannemers, bouwbedrijven, renovatie-, onderhouds- en restauratiebedrijven, GWW-bedrijven en bouwgroepen, van familiebedrijf met een vaste ploeg tot bouwer met meerdere vestigingen.",
          en: "For contractors, builders, renovation, maintenance and restoration firms, civil engineering contractors and construction groups, from a family business with a steady crew to a builder with several branches.",
        },
        types: [
          { nl: "Aannemers", en: "Contractors" },
          { nl: "Bouwbedrijven", en: "Construction companies" },
          { nl: "Renovatiebedrijven", en: "Renovation companies" },
          { nl: "Onderhoudsbedrijven", en: "Maintenance companies" },
          { nl: "Restauratiebedrijven", en: "Restoration companies" },
          { nl: "GWW-bedrijven", en: "Civil engineering contractors" },
          { nl: "Bouwgroepen", en: "Construction groups" },
        ],
        useCases: [
          {
            title: { nl: "Projectpagina's per plaats en type werk", en: "Project pages by town and job type" },
            text: {
              nl: "Een aanbouw in Uden, een renovatie in Schijndel: elk project een eigen pagina met foto's en een korte toelichting. Zo vinden opdrachtgevers je precies waar ze zoeken.",
              en: "An extension in Uden, a renovation in Schijndel: every project gets its own page with photos and a short write-up. That way clients find you exactly where they are searching.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Huisstijl van bouwbord tot bus", en: "Identity from site board to van" },
            text: {
              nl: "Eén herkenbare stijl die werkt op steigerdoek, bouwbord, bus, werkkleding en offerte. Leesbaar van afstand en robuust op de bouwplaats.",
              en: "One recognisable style that works on scaffold banners, site boards, vans, workwear and quotes. Legible from a distance and sturdy on site.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Dronevideo van ruwbouw tot oplevering", en: "Drone video from shell to handover" },
            text: {
              nl: "Een drone-shot of timelapse van paal tot pannen laat zien hoe je werkt. Sterk voor je website, LinkedIn en de buurt rond het project.",
              en: "A drone shot or timelapse from foundations to roof tiles shows how you work. Strong for your website, LinkedIn and the neighbours around the project.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
          {
            title: { nl: "Vakmensen werven via social media", en: "Recruiting tradespeople through social media" },
            text: {
              nl: "Korte, eerlijke vacatures met echte collega's in beeld, daar waar timmerlieden en uitvoerders 's avonds scrollen. Solliciteren kan in een paar minuten, cv optioneel.",
              en: "Short, honest vacancies featuring real colleagues, right where carpenters and site managers scroll in the evening. Applying takes a few minutes, CV optional.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat hoort er bij een goede huisstijl voor een bouwbedrijf?", en: "What belongs in a good visual identity for a construction company?" },
            a: {
              nl: "Meer dan een logo. Een bouwbedrijf is zichtbaar op plekken waar andere bedrijven nooit komen: bouwborden, steigerdoeken, bussen, werkkleding en de keet op de bouwplaats. Een sterke [[huisstijl|huisstijl]] moet daar net zo goed werken als op je website, offertes en LinkedIn. We ontwerpen dus met dat hele palet in gedachten: goed leesbaar van afstand, robuust op een modderige steiger en herkenbaar in één oogopslag. Verzorgd, zonder dat het gaat schreeuwen.",
              en: "More than a logo. A construction company shows up in places other businesses never do: site hoardings, scaffold banners, vans, workwear and the site cabin. A strong [[huisstijl|visual identity]] has to work there as well as on your website, quotes and LinkedIn. So we design with that whole range in mind: legible from a distance, sturdy on a muddy scaffold and recognisable at a glance. Smart, without shouting.",
            },
          },
          {
            q: { nl: "Hoe vind ik via mijn website nieuwe vakmensen voor de bouwplaats?", en: "How do I find new tradespeople for the building site through my website?" },
            a: {
              nl: "Timmerlieden en uitvoerders lezen geen lange vacatureteksten achter een bureau. Ze scrollen op hun telefoon, 's avonds of in de schaftkeet. Dus maken we vacatures voor de bouwplaats kort en eerlijk, met echte collega's in beeld en een sollicitatie die in een paar minuten klaar is, desnoods zonder cv. Met [[employer-branding|employer branding]] en korte video's van het werk zelf, verspreid via social media, bereik je ook mensen die nu nog niet actief zoeken.",
              en: "Carpenters and site managers do not read long job ads at a desk. They scroll on their phones, in the evening or in the site cabin at break time. So we keep construction vacancies short and honest, with real colleagues in the picture and an application that takes a few minutes, CV optional. With [[employer-branding|employer branding]] and short videos of the actual work, shared on social media, you also reach people who are not actively looking yet.",
            },
          },
          {
            q: { nl: "Hoe zorg ik dat opdrachtgevers mij als aannemer lokaal vinden?", en: "How do I make sure clients find me locally as a contractor?" },
            a: {
              nl: "Wie 'aannemer in de buurt' of 'verbouwing Oss' zoekt, wil een bedrijf dat dichtbij zit en dit soort werk al eens gedaan heeft. Lokale SEO voor aannemers draait daarom om twee dingen: een sterk Google Bedrijfsprofiel met reviews en foto's, en projectpagina's per plaats en type werk. Een aanbouw in Uden, een renovatie in Schijndel. Zo laat je zien wat je kunt, precies waar mensen zoeken. Met [[lokale-seo|lokale SEO]] bouwen we dat stap voor stap op.",
              en: "Someone searching for 'builder near me' or 'renovation Oss' wants a company that is close by and has done this kind of work before. Local SEO for contractors therefore comes down to two things: a strong Google Business Profile with reviews and photos, and project pages per town and type of work. An extension in Uden, a renovation in Schijndel. That way you show what you can do, right where people are searching. With [[lokale-seo|local SEO]] we build that up step by step.",
            },
          },
          {
            q: { nl: "Is het zinvol om lopende bouwprojecten online te laten zien?", en: "Is it worth showing ongoing construction projects online?" },
            a: {
              nl: "Zeker. Een opgeleverd project is mooi, maar het proces vertelt meer over je vakmanschap. Een korte update vanaf de steiger, een drone-shot van de ruwbouw of een timelapse van paal tot pannen laat zien hoe je werkt. Dat waarderen opdrachtgevers, omwonenden en sollicitanten. Wij maken de [[dronevideo|drone-opnames]] en [[bedrijfsfilm|video's]], en zetten een simpele werkwijze op waarmee je team zelf ook goede content aanlevert. Geen filmploeg nodig voor elke stort.",
              en: "Definitely. A finished project looks good, but the process says more about your craftsmanship. A quick update from the scaffold, a drone shot of the shell or a timelapse from foundations to roof tiles shows how you work. Clients, neighbours and job applicants all appreciate that. We shoot the [[dronevideo|drone footage]] and [[bedrijfsfilm|videos]], and set up a simple routine so your team can supply good content themselves. No film crew needed for every concrete pour.",
            },
          },
        ],
      },
      {
        name: { nl: "Afbouw", en: "Finishing trades" },
        intro: {
          nl: "Voor afbouwbedrijven zoals stukadoors, schilders, tegelzetters, vloerenleggers, plafond- en wandmonteurs en kozijnspecialisten, voor particulieren én aannemers.",
          en: "For finishing contractors such as plasterers, painters, tilers, floor layers, ceiling and partition installers and window frame specialists, working for homeowners and contractors alike.",
        },
        types: [
          { nl: "Afbouwbedrijven", en: "Finishing contractors" },
          { nl: "Stukadoorsbedrijven", en: "Plastering companies" },
          { nl: "Schildersbedrijven", en: "Painting companies" },
          { nl: "Tegelzetbedrijven", en: "Tiling companies" },
          { nl: "Vloerenspecialisten", en: "Flooring specialists" },
          { nl: "Plafond- en wandmonteurs", en: "Ceiling and partition installers" },
          { nl: "Kozijnspecialisten", en: "Window frame specialists" },
        ],
        useCases: [
          {
            title: { nl: "Offertecalculator per vierkante meter", en: "Quote calculator per square metre" },
            text: {
              nl: "Bezoekers vullen oppervlakte, afwerking en ondergrond in en zien direct een prijsindicatie. Jij krijgt een aanvraag met de gegevens die je nodig hebt.",
              en: "Visitors enter the surface area, finish and substrate and see a price indication straight away. You receive an enquiry with the details you need.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Voor-en-na portfolio per type werk", en: "Before-and-after portfolio per type of work" },
            text: {
              nl: "Een strakke stucmuur in strijklicht of een naadloze tegelvloer verkoopt zichzelf, mits goed gefotografeerd. Gebundeld per type werk op je site en Instagram.",
              en: "A flawless plastered wall in raking light or a seamless tiled floor sells itself, provided it is photographed well. Bundled per type of work on your site and Instagram.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Een eigen pagina per dienst", en: "A dedicated page per service" },
            text: {
              nl: "Spachtelputz, buitenschilderwerk of een gietvloer: elke dienst een eigen pagina met eigen foto's en een duidelijke vervolgstap. Zo word je gevonden op de klussen die je echt wilt doen.",
              en: "Microcement, exterior painting or a poured floor: every service gets its own page with your own photos and a clear next step. That way you are found for the jobs you actually want.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Google Ads voor rustige weken", en: "Google Ads for quieter weeks" },
            text: {
              nl: "Gericht adverteren op de klussen die je wilt doen, precies in de periodes dat de planning wat leger is. Aan of uit wanneer het jou uitkomt.",
              en: "Targeted ads for the jobs you want, exactly when your schedule has gaps. On or off whenever it suits you.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat levert een offertecalculator op voor een afbouwbedrijf?", en: "What does a quote calculator do for a finishing company?" },
            a: {
              nl: "Vooral rust aan de telefoon. Met een [[offerte-calculator|offertecalculator]] vullen bezoekers zelf de vierkante meters, het type afwerking en de staat van de ondergrond in. Ze zien direct een prijsindicatie en jij krijgt een aanvraag met de gegevens die je nodig hebt, vaak inclusief foto's. Prijsjagers haken eerder af, serieuze klanten komen beter voorbereid binnen. Jij bepaalt de rekenregels en marges, en past ze aan wanneer materiaalprijzen weer eens veranderen.",
              en: "Mostly, fewer phone calls about the basics. With a [[offerte-calculator|quote calculator]] visitors enter the square metres, type of finish and condition of the surface themselves. They see a price indication straight away and you receive an enquiry with the details you need, often including photos. Bargain hunters drop out sooner, serious clients arrive better prepared. You set the pricing rules and margins, and adjust them whenever material prices shift again.",
            },
          },
          {
            q: {
              nl: "Hoe krijg ik meer aanvragen voor stucwerk, schilderwerk of tegelwerk in mijn regio?",
              en: "How do I get more enquiries for plastering, painting or tiling in my area?",
            },
            a: {
              nl: "Mensen zoeken heel concreet: 'stukadoor Veghel', 'spachtelputz badkamer' of 'schilder buitenwerk prijs'. Geef elke dienst daarom een eigen pagina, met foto's van je eigen werk, een eerlijke uitleg en een duidelijke vervolgstap. Combineer dat met een verzorgd Google Bedrijfsprofiel en reviews, en eventueel [[google-ads|Google Ads]] om rustigere periodes op te vullen. Zo word je gevonden op de klussen die je echt wilt doen, niet alleen op 'klusjesman'.",
              en: "People search very specifically: 'plasterer Veghel', 'microcement bathroom' or 'exterior painter price'. So give every service its own page, with photos of your own work, an honest explanation and a clear next step. Combine that with a well-kept Google Business Profile and reviews, and perhaps [[google-ads|Google Ads]] to fill quieter periods. That way you are found for the jobs you actually want, not just for 'handyman'.",
            },
          },
          {
            q: { nl: "Hoe laat ik de kwaliteit van mijn afwerking goed zien?", en: "How do I show the quality of my finishing work?" },
            a: {
              nl: "Afbouw is detailwerk, en details zie je pas op een goede foto. Een strakke stucmuur in strijklicht, een naadloze tegelvloer of een kozijn dat precies aansluit: dat verkoopt zichzelf, mits het goed in beeld is. We fotograferen projecten of leren je team hoe je met de telefoon een nette voor-en-na maakt. Op je website en Instagram bundelen we dat tot een portfolio per type werk, zodat klanten direct zien wat ze kunnen verwachten.",
              en: "Finishing is detail work, and details only show in a good photo. A flawless plastered wall in raking light, a seamless tiled floor or a window frame that fits perfectly sells itself, provided it is captured well. We photograph projects or teach your team to shoot a tidy before-and-after with a phone. On your website and Instagram we bundle that into a portfolio per type of work, so clients see right away what to expect.",
            },
          },
          {
            q: {
              nl: "Werken jullie ook voor afbouwbedrijven die vooral voor aannemers werken?",
              en: "Do you also work for finishing companies that mainly work for contractors?",
            },
            a: {
              nl: "Ja, en dan verandert het verhaal. Een aannemer of projectontwikkelaar wil vooral weten of je capaciteit hebt, op tijd levert en netjes werkt. Dat laat je zien met referentieprojecten, certificeringen en een website die zakelijk en betrouwbaar overkomt. Een strakke [[presentaties-pitchdecks|bedrijfspresentatie]] voor aanbestedingen en een actief LinkedIn-profiel doen in die markt vaak meer dan een Instagramfeed vol voor-en-na's.",
              en: "Yes, and the story changes. A contractor or developer mainly wants to know whether you have capacity, deliver on time and work tidily. You show that with reference projects, certifications and a website that feels businesslike and reliable. A sharp [[presentaties-pitchdecks|company presentation]] for tenders and an active LinkedIn profile often do more in that market than an Instagram feed full of before-and-afters.",
            },
          },
        ],
      },
      {
        name: { nl: "Installatie & techniek", en: "Building services" },
        intro: {
          nl: "Voor installatiebedrijven, elektrotechnische installateurs, loodgieters, dakdekkers en specialisten in klimaat, ventilatie en zonne-energie, in woningbouw, utiliteitsbouw en renovatie.",
          en: "For installation companies, electrical installers, plumbers, roofers and specialists in HVAC, ventilation and solar energy, in housing, commercial construction and renovation.",
        },
        types: [
          { nl: "Installatiebedrijven", en: "Installation companies" },
          { nl: "Elektrotechnische installateurs", en: "Electrical installers" },
          { nl: "Loodgietersbedrijven", en: "Plumbing companies" },
          { nl: "Dakdekkersbedrijven", en: "Roofing companies" },
          { nl: "Klimaat- en ventilatiebedrijven", en: "HVAC and ventilation companies" },
          { nl: "Zonnepaneleninstallateurs", en: "Solar panel installers" },
        ],
        useCases: [
          {
            title: { nl: "Energieconfigurator voor woning of pand", en: "Energy configurator for home or building" },
            text: {
              nl: "Klanten vullen hun situatie in en zien welke combinatie van zonnepanelen, batterij of warmtepomp past. Jij krijgt een aanvraag met verbruik en wensen erbij.",
              en: "Customers enter their situation and see which combination of solar panels, battery or heat pump fits. You receive an enquiry with usage and wishes included.",
            },
            service: "configurators-lead-tools-widgets",
            application: "productconfigurator",
          },
          {
            title: { nl: "Referentiepresentatie voor hoofdaannemers", en: "Reference presentation for main contractors" },
            text: {
              nl: "Referentieprojecten, certificeringen en capaciteit in een strakke presentatie. Handig bij aanbestedingen en bij het eerste gesprek met een aannemer of corporatie.",
              en: "Reference projects, certifications and capacity in a sharp presentation. Useful for tenders and for the first meeting with a contractor or housing association.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Animatie die een installatie uitlegt", en: "Animation that explains an installation" },
            text: {
              nl: "Hoe werkt een warmtepomp met boilervat, of ventilatie met warmteterugwinning? Een korte animatie legt het uit zonder vakjargon.",
              en: "How does a heat pump with a hot water tank work, or ventilation with heat recovery? A short animation explains it without jargon.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "Monteurs en leerlingen werven", en: "Recruiting engineers and apprentices" },
            text: {
              nl: "Laat zien hoe een werkdag eruitziet, wat je leert en met wie je werkt. Met een werkenbij-pagina die net zo nuchter is als je ploeg.",
              en: "Show what a working day looks like, what people learn and who they work with. With a careers page as down-to-earth as your crew.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
        ],
        faqs: [
          {
            q: {
              nl: "Hoe laat ik als installateur zien dat we ook grote bouwprojecten aankunnen?",
              en: "How do I show as an installer that we can handle large construction projects?",
            },
            a: {
              nl: "Een hoofdaannemer of woningcorporatie kijkt anders dan een particulier. Die wil weten of je capaciteit hebt, of je certificeringen op orde zijn en hoe je samenwerkt op de bouwplaats. Laat dat zien met referentieprojecten per type werk, een overzicht van je erkenningen en een korte uitleg van je werkwijze, van werkvoorbereiding tot oplevering. Een strakke [[presentaties-pitchdecks|bedrijfspresentatie]] voor aanbestedingen en een zakelijke route op je website maken het af.",
              en: "A main contractor or housing association looks at you differently than a homeowner. They want to know whether you have capacity, whether your certifications are in order and how you work together on site. Show that with reference projects per type of work, an overview of your accreditations and a short explanation of how you work, from preparation to handover. A sharp [[presentaties-pitchdecks|company presentation]] for tenders and a business route on your website finish it off.",
            },
          },
          {
            q: { nl: "Wat heb ik aan een energieconfigurator op mijn website?", en: "What does an energy configurator on my website do for me?" },
            a: {
              nl: "Veel klanten weten niet of zonnepanelen, een thuisbatterij of een warmtepomp bij hun woning of pand past, en wat dat ongeveer oplevert. Met een [[productconfigurator|configurator]] vullen ze hun situatie in en zien ze een eerste voorstel, met de aannames erbij. Jij krijgt een aanvraag met verbruik, dakoppervlak en wensen, in plaats van een vage vraag om 'informatie'. Voor Steddion maakten we zo'n Energy Property Configurator voor zakelijke panden.",
              en: "Many customers do not know whether solar panels, a home battery or a heat pump suits their home or building, and roughly what it delivers. With a [[productconfigurator|configurator]] they enter their situation and see an initial proposal, with the assumptions shown. You receive an enquiry with usage, roof area and wishes, instead of a vague request for 'information'. We built an Energy Property Configurator like this for Steddion, aimed at commercial buildings.",
            },
          },
          {
            q: { nl: "Hoe vind ik monteurs en leerlingen voor mijn installatiebedrijf?", en: "How do I find engineers and apprentices for my installation company?" },
            a: {
              nl: "Goede monteurs hebben werk genoeg, dus je moet laten zien waarom het bij jou beter is. Denk aan eerlijke verhalen van collega's, duidelijkheid over opleiding en doorgroeien, en beelden van echte klussen in plaats van stockfoto's met een helm. Met [[employer-branding|employer branding]] en [[social-video|korte video's]] op social media bereik je ook mensen die nu nog bij een ander werken, of scholieren die twijfelen over een BBL-traject. Solliciteren moet daarna in een paar minuten kunnen.",
              en: "Good engineers have plenty of work, so you need to show why your company is better. Think honest stories from colleagues, clarity about training and progression, and footage of real jobs instead of stock photos with a hard hat. With [[employer-branding|employer branding]] and [[social-video|short videos]] on social media you also reach people who currently work elsewhere, or students unsure about an apprenticeship. After that, applying should take just a few minutes.",
            },
          },
          {
            q: {
              nl: "Hoe word ik gevonden als iemand een dakdekker of installateur in de buurt zoekt?",
              en: "How do I get found when someone searches for a roofer or installer nearby?",
            },
            a: {
              nl: "Die zoekopdrachten zijn vaak urgent: een lekkage, een kapotte cv-ketel, een groep die eruit blijft springen. Dan kiest iemand het bedrijf dat dichtbij zit, snel bereikbaar is en goede reviews heeft. Zorg voor een compleet Google Bedrijfsprofiel, een pagina per dienst en per plaats in je werkgebied en een telefoonnummer dat op mobiel direct belt. Met [[lokale-seo|lokale SEO]] bouwen we dat stap voor stap op, zonder dunne kopieerpagina's.",
              en: "Those searches are often urgent: a leak, a broken boiler, a circuit that keeps tripping. Then people pick the company that is close by, easy to reach and well reviewed. Make sure you have a complete Google Business Profile, a page per service and per town in your area and a phone number that dials straight from a mobile. With [[lokale-seo|local SEO]] we build that up step by step, without thin copy-paste pages.",
            },
          },
        ],
      },
      {
        name: { nl: "Architectenbureaus", en: "Architecture firms" },
        intro: {
          nl: "Voor architectenbureaus, landschapsarchitecten, stedenbouwkundigen, bouwkundige tekenbureaus en constructie- en bouwadviesbureaus die hun ontwerpen en kennis het podium willen geven dat ze verdienen.",
          en: "For architecture firms, landscape architects, urban planners, architectural drafting offices and structural and building consultancies who want to give their designs and expertise the stage they deserve.",
        },
        types: [
          { nl: "Architectenbureaus", en: "Architecture firms" },
          { nl: "Landschapsarchitecten", en: "Landscape architects" },
          { nl: "Stedenbouwkundige bureaus", en: "Urban planning firms" },
          { nl: "Bouwkundige tekenbureaus", en: "Architectural drafting offices" },
          { nl: "Constructiebureaus", en: "Structural engineering firms" },
          { nl: "Bouwadviesbureaus", en: "Building consultancies" },
        ],
        useCases: [
          {
            title: { nl: "Een beeldgedreven website met projecten", en: "An image-led website with projects" },
            text: {
              nl: "Grote projectbeelden, een korte toelichting op opgave en keuzes, en een rustige structuur. Zo spreekt je architectuur, en ziet een opdrachtgever snel hoe je werkt.",
              en: "Large project images, a short note on the brief and the choices, and a calm structure. Your architecture does the talking, and a client quickly sees how you work.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Renders en animaties van je ontwerp", en: "Renders and animations of your design" },
            text: {
              nl: "Op basis van je eigen modellen maken we beelden voor de opdrachtgever, de welstandscommissie of een informatieavond. Zo ziet iedereen hetzelfde gebouw voor zich.",
              en: "Based on your own models we create visuals for the client, the design review panel or an information evening. That way everyone pictures the same building.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Presentatie voor welstand en buurt", en: "Presentation for review panel and neighbours" },
            text: {
              nl: "Plek, opgave, keuzes en resultaat in een verhaal dat ook een leek kan volgen. Werkt bij een pitch net zo goed als op de buurtavond.",
              en: "Site, brief, choices and result in a story a layperson can follow. It works as well in a pitch as at the neighbourhood evening.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Antwoorden op vragen van particulieren", en: "Answers to private clients' questions" },
            text: {
              nl: "'Wat kost een architect?' of 'Heb ik een vergunning nodig?': heldere antwoorden in jouw woorden. Dat maakt je vindbaar in Google en AI-assistenten.",
              en: "'What does an architect cost?' or 'Do I need a permit?': clear answers in your own words. That makes you findable on Google and in AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe ziet een goede website voor een architectenbureau eruit?", en: "What does a good website for an architecture firm look like?" },
            a: {
              nl: "Rustig, beeldgedreven en goed geordend. Je projecten zijn het verhaal, dus die krijgen ruimte: grote beelden, een korte toelichting op de opgave en de keuzes die je maakte. Voor Architectenbureau Koppens bouwden we zo'n website, met de projecten en hun visie op energieneutraal bouwen in de hoofdrol. Daarnaast wil een opdrachtgever snel zien hoe je werkt en wat een eerste gesprek inhoudt. Mooi mag, vindbaar moet.",
              en: "Calm, image-led and well organised. Your projects are the story, so they get room: large images, a short note on the brief and the choices you made. We built a website like that for Architectenbureau Koppens, with their projects and their vision of energy-neutral building in the lead role. Beyond that, a client wants to see quickly how you work and what a first meeting involves. Beautiful is welcome, findable is a must.",
            },
          },
          {
            q: { nl: "Hoe vinden particuliere opdrachtgevers mijn architectenbureau?", en: "How do private clients find my architecture firm?" },
            a: {
              nl: "Particulieren beginnen vaak met een vraag, niet met een naam. 'Wat kost een architect voor een verbouwing?' of 'Heb ik een vergunning nodig voor een aanbouw?'. Wie die vragen helder beantwoordt op zijn eigen website, wordt beter gevonden in Google en maakt meer kans om genoemd te worden door AI-assistenten. We schrijven die [[seo-content|content]] samen met jou, in jouw woorden, en koppelen hem aan projecten uit je eigen regio. Zo komt de vraag bij de juiste architect terecht.",
              en: "Private clients often start with a question, not a name. 'What does an architect cost for a renovation?' or 'Do I need a permit for an extension?'. If you answer those questions clearly on your own website, you are easier to find on Google and more likely to be mentioned by AI assistants. We write that [[seo-content|content]] together with you, in your words, and link it to projects in your own region. That way the question finds its way to the right architect.",
            },
          },
          {
            q: {
              nl: "Hoe presenteer ik een ontwerp aan een opdrachtgever of welstandscommissie?",
              en: "How do I present a design to a client or design review panel?",
            },
            a: {
              nl: "Met beelden die het ontwerp laten zien zoals jij het voor je ziet, in een verhaal dat ook een leek kan volgen. We maken renders en korte animaties op basis van je eigen modellen, en zetten ze in een heldere presentatie: de plek, de opgave, de keuzes en het resultaat. Zo'n [[presentaties-pitchdecks|presentatie]] werkt bij een eerste kennismaking net zo goed als bij de welstandscommissie of op een informatieavond voor de buurt.",
              en: "With visuals that show the design the way you see it, in a story a layperson can follow. We create renders and short animations from your own models and put them in a clear presentation: the site, the brief, the choices and the result. A [[presentaties-pitchdecks|presentation]] like that works as well at a first meeting as it does before a design review panel or at a neighbourhood information evening.",
            },
          },
          {
            q: { nl: "Hoe leg ik opgeleverde projecten goed vast?", en: "How do I capture completed projects properly?" },
            a: {
              nl: "Plan de fotografie bewust, en niet pas als de bewoners er al een jaar wonen. Kies het juiste licht en seizoen, en een moment waarop het gebouw schoon en leeg is of juist net in gebruik. Architectuurfotografie vraagt om rechte lijnen en rust in beeld, aangevuld met [[dronevideo|drone-opnames]] die laten zien hoe het gebouw in zijn omgeving staat. Spreek vooraf met de opdrachtgever af wat je mag publiceren, dan kun je het beeld daarna overal gebruiken.",
              en: "Plan the photography deliberately, not once the residents have lived there for a year. Choose the right light and season, and a moment when the building is clean and empty or just coming into use. Architectural photography calls for straight lines and calm images, complemented by [[dronevideo|drone footage]] that shows how the building sits in its surroundings. Agree upfront with the client what you may publish, so you can use the images everywhere afterwards.",
            },
          },
        ],
      },
      {
        name: { nl: "Prefab & modulair bouwen", en: "Prefab & modular building" },
        intro: {
          nl: "Voor prefab-woningbouwers, modulaire en systeembouwers, houtskeletbouwers en makers van tiny houses, mantelzorgwoningen en tijdelijke huisvesting.",
          en: "For prefab home builders, modular and system builders, timber frame builders and makers of tiny houses, granny annexes and temporary housing.",
        },
        types: [
          { nl: "Prefab-woningbouwers", en: "Prefab home builders" },
          { nl: "Modulaire bouwers", en: "Modular builders" },
          { nl: "Systeembouwers", en: "System builders" },
          { nl: "Houtskeletbouwers", en: "Timber frame builders" },
          { nl: "Tiny house-bouwers", en: "Tiny house builders" },
          { nl: "Bouwers van mantelzorgwoningen", en: "Granny annexe builders" },
          { nl: "Leveranciers van tijdelijke huisvesting", en: "Temporary housing suppliers" },
        ],
        useCases: [
          {
            title: { nl: "3D-configurator voor woningtypes", en: "3D configurator for home types" },
            text: {
              nl: "Kopers kiezen een model, indeling, gevel en opties en zien het resultaat direct in 3D. Jij krijgt een aanvraag met de complete configuratie.",
              en: "Buyers choose a model, layout, facade and options and see the result in 3D straight away. You receive an enquiry with the complete configuration.",
            },
            service: "configurators-lead-tools-widgets",
            application: "3d-configurator",
          },
          {
            title: { nl: "Een landingspagina per doelgroep", en: "A landing page per audience" },
            text: {
              nl: "Een particulier met een kavel, een gemeente met een woningopgave of een corporatie die snel wil bouwen: elk een eigen pagina met hun vragen en voorbeeldprojecten.",
              en: "A homeowner with a plot, a municipality with a housing target or a housing association that wants to build fast: each gets a page with their questions and example projects.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Animatie van fabriek tot fundering", en: "Animation from factory to foundation" },
            text: {
              nl: "Laat zien hoe een woning in de fabriek ontstaat en daarna in korte tijd op de bouwplaats staat. Dat neemt twijfel over kwaliteit weg.",
              en: "Show how a home takes shape in the factory and then goes up on site in a short time. That removes doubts about quality.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "Beursstand en woningbrochure in één lijn", en: "Trade-show stand and home brochure aligned" },
            text: {
              nl: "Op woonbeurzen en vakbeurzen val je op met een stand en brochure in dezelfde stijl. Met een QR-code die meteen naar de configurator leidt.",
              en: "At home shows and trade fairs you stand out with a stand and brochure in the same style. With a QR code that leads straight to the configurator.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
        ],
        faqs: [
          {
            q: {
              nl: "Hoe overtuig ik kopers dat prefab net zo goed is als traditioneel bouwen?",
              en: "How do I convince buyers that prefab is as good as traditional building?",
            },
            a: {
              nl: "Door het niet te beweren, maar te laten zien. Neem mensen mee in het proces: de fabriek, de materialen, de controles en het moment dat de modules op de fundering worden gezet. Een korte [[bedrijfsfilm|bedrijfsfilm]] of timelapse zegt daarover meer dan een brochure vol superlatieven. Vertel eerlijk wat er wel en niet kan qua maatwerk, laat opgeleverde woningen en echte bewoners zien en verwijs naar je energielabels en garanties zoals ze werkelijk zijn.",
              en: "By not claiming it, but showing it. Take people through the process: the factory, the materials, the checks and the moment the modules are placed on the foundation. A short [[bedrijfsfilm|company film]] or timelapse says more about that than a brochure full of superlatives. Be honest about what is and is not possible in terms of customisation, show completed homes and real residents, and refer to your energy labels and warranties as they actually are.",
            },
          },
          {
            q: {
              nl: "Wat levert een 3D-configurator op voor een prefab- of modulaire bouwer?",
              en: "What does a 3D configurator offer a prefab or modular builder?",
            },
            a: {
              nl: "Een woning met tientallen keuzes is lastig uit te leggen in een pdf. In een [[3d-configurator|3D-configurator]] kiest een koper zelf het model, de indeling, de gevel en de opties, en ziet hij meteen wat dat betekent. Koppel je er een prijsindicatie aan, dan weet hij ook waar hij financieel staat. Jij krijgt aanvragen met een complete configuratie, en je verkopers hebben een demo-tool die altijd actueel is, op een beurs of aan de keukentafel.",
              en: "A home with dozens of choices is hard to explain in a PDF. In a [[3d-configurator|3D configurator]] buyers choose the model, layout, facade and options themselves, and see right away what that means. Add a price indication and they also know where they stand financially. You receive enquiries with a complete configuration, and your sales team has a demo tool that is always up to date, at a trade show or at the kitchen table.",
            },
          },
          {
            q: {
              nl: "Hoe bereik ik gemeenten en woningcorporaties als modulaire bouwer?",
              en: "How do I reach municipalities and housing associations as a modular builder?",
            },
            a: {
              nl: "Beslissers bij gemeenten en corporaties zoeken oplossingen voor een woningopgave, vaak met weinig tijd en veel stakeholders. Geef ze een eigen route op je website met referentieprojecten, doorlooptijden zoals je ze echt haalt en antwoorden op vragen over vergunningen, plaatsing en herplaatsing. Een heldere [[presentaties-pitchdecks|presentatie]] helpt bij overleg en aanbestedingen. Met [[linkedin-ads|LinkedIn Ads]] zet je je projecten gericht onder de aandacht van wethouders, projectleiders en vastgoedmanagers.",
              en: "Decision-makers at municipalities and housing associations are looking for answers to a housing challenge, often with little time and many stakeholders. Give them their own route on your website with reference projects, lead times as you actually achieve them and answers on permits, placement and relocation. A clear [[presentaties-pitchdecks|presentation]] helps in meetings and tenders. With [[linkedin-ads|LinkedIn Ads]] you put your projects in front of aldermen, project leaders and property managers.",
            },
          },
          {
            q: {
              nl: "Hoe word ik gevonden op zoektermen als 'tiny house kopen' of 'mantelzorgwoning plaatsen'?",
              en: "How do I get found for searches like 'buy a tiny house' or 'place a granny annexe'?",
            },
            a: {
              nl: "Mensen die zo zoeken, zitten vaak nog vol vragen. Mag het op mijn grond, heb ik een vergunning nodig, wat kost het inclusief fundering en aansluitingen, en hoe lang duurt het? Beantwoord die vragen eerlijk op je eigen website, per onderwerp een pagina, met voorbeelden uit je eigen projecten. Die [[seo-content|content]] helpt in Google en maakt meer kans om door AI-assistenten genoemd te worden. Regels verschillen per gemeente, dus verwijs waar nodig naar het loket.",
              en: "People searching like that usually still have plenty of questions. Is it allowed on my land, do I need a permit, what does it cost including foundation and connections, and how long does it take? Answer those questions honestly on your own website, one page per topic, with examples from your own projects. That [[seo-content|content]] helps on Google and is more likely to be mentioned by AI assistants. Rules differ per municipality, so refer people to the local council where needed.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Aannemers", en: "Contractors" },
      { nl: "Bouwbedrijven", en: "Construction companies" },
      { nl: "Renovatiebedrijven", en: "Renovation companies" },
      { nl: "Onderhoudsbedrijven", en: "Maintenance companies" },
      { nl: "Restauratiebedrijven", en: "Restoration companies" },
      { nl: "GWW-bedrijven", en: "Civil engineering contractors" },
      { nl: "Afbouwbedrijven", en: "Finishing contractors" },
      { nl: "Stukadoorsbedrijven", en: "Plastering companies" },
      { nl: "Schildersbedrijven", en: "Painting companies" },
      { nl: "Tegelzetbedrijven", en: "Tiling companies" },
      { nl: "Vloerenspecialisten", en: "Flooring specialists" },
      { nl: "Kozijnspecialisten", en: "Window frame specialists" },
      { nl: "Installatiebedrijven", en: "Installation companies" },
      { nl: "Elektrotechnische installateurs", en: "Electrical installers" },
      { nl: "Dakdekkersbedrijven", en: "Roofing companies" },
      { nl: "Klimaat- en ventilatiebedrijven", en: "HVAC and ventilation companies" },
      { nl: "Architectenbureaus", en: "Architecture firms" },
      { nl: "Landschapsarchitecten", en: "Landscape architects" },
      { nl: "Stedenbouwkundige bureaus", en: "Urban planning firms" },
      { nl: "Constructiebureaus", en: "Structural engineering firms" },
      { nl: "Bouwadviesbureaus", en: "Building consultancies" },
      { nl: "Prefab-woningbouwers", en: "Prefab home builders" },
      { nl: "Modulaire bouwers", en: "Modular builders" },
      { nl: "Houtskeletbouwers", en: "Timber frame builders" },
    ],
  },

  /* ---------- Industrie & Techniek ---------- */
  "industrie-techniek": {
    segments: [
      {
        name: { nl: "Maakindustrie", en: "Manufacturing" },
        intro: {
          nl: "Voor maakbedrijven, metaal- en kunststofbewerkers, plaatwerkers, toeleveranciers en producenten van eigen producten, van job shop tot serieproductie.",
          en: "For manufacturers, metal and plastics processors, sheet metal shops, subcontractors and makers of their own products, from job shop to series production.",
        },
        types: [
          { nl: "Maakbedrijven", en: "Manufacturing companies" },
          { nl: "Metaalbewerkingsbedrijven", en: "Metalworking companies" },
          { nl: "Plaatbewerkers", en: "Sheet metal fabricators" },
          { nl: "Staal- en constructiebedrijven", en: "Steel construction companies" },
          { nl: "Kunststofverwerkers", en: "Plastics processors" },
          { nl: "Toeleveranciers", en: "Subcontract manufacturers" },
        ],
        useCases: [
          {
            title: { nl: "Offertetool met tekening-upload", en: "Quote tool with drawing upload" },
            text: {
              nl: "Klanten uploaden hun STEP-, DXF- of pdf-tekening, kiezen materiaal en aantallen en zien waar het kan een prijsindicatie. Je werkvoorbereiding krijgt een complete aanvraag in plaats van drie mailtjes.",
              en: "Customers upload their STEP, DXF or PDF drawing, choose material and quantities and, where possible, see a price indication. Your work planners get a complete request instead of three follow-up emails.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Een pagina per bewerking", en: "A page for every process" },
            text: {
              nl: "Lasersnijden, kanten of CNC-frezen: elke techniek krijgt een eigen pagina met materialen, toleranties en voorbeelden. Zo vinden inkopers je op de specifieke term waar ze op zoeken.",
              en: "Laser cutting, press braking or CNC milling: every technique gets its own page with materials, tolerances and examples. That way buyers find you on the exact term they search for.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Fotosessie in je eigen werkplaats", en: "A photo shoot in your own workshop" },
            text: {
              nl: "Echte onderdelen, draaiende machines en vakmensen aan het werk, in goed licht. Bruikbaar op je website, in offertes, op LinkedIn en in vacatures.",
              en: "Real parts, running machines and skilled people at work, in good light. Ready for your website, quotes, LinkedIn and job ads.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Werkenbij-pagina voor operators en lassers", en: "Careers page for operators and welders" },
            text: {
              nl: "Goede vakmensen vind je zelden via een vacaturesite alleen. Een eerlijke werkenbij-pagina met collega's in beeld laat zien waarom het bij jou goed werken is.",
              en: "You rarely find good tradespeople through a job board alone. An honest careers page featuring real colleagues shows why your company is a good place to work.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe laat ik als toeleverancier zien wat we kunnen?", en: "How do I show what we can do as a subcontractor?" },
            a: {
              nl: "Inkopers en engineers willen snel weten of je bij hun vraag past. Laat daarom zien wat je doet en waarmee: bewerkingen, materialen, toleranties, seriegroottes, machinepark en certificeringen. Liefst per techniek een eigen pagina, met foto's van echte onderdelen en een korte case. Dat klinkt droog, maar het is precies wat iemand zoekt die vanmiddag nog een leverancier moet vinden. Een goede [[productfotografie|fotosessie]] in je eigen werkplaats maakt het af.",
              en: "Buyers and engineers want to know quickly whether you fit their requirement. So show what you do and with what: processes, materials, tolerances, batch sizes, machinery and certifications. Ideally each technique gets its own page, with photos of real parts and a short case. It sounds dry, but it is exactly what someone needs who has to find a supplier by this afternoon. A good [[productfotografie|photo shoot]] in your own workshop finishes it off.",
            },
          },
          {
            q: {
              nl: "Kunnen klanten via de website een offerte aanvragen met hun tekening erbij?",
              en: "Can customers request a quote through the website and attach their drawing?",
            },
            a: {
              nl: "Ja. Een goed aanvraagformulier laat klanten tekeningen en 3D-bestanden uploaden, zoals STEP, DXF of pdf, en vraagt meteen naar materiaal, aantallen en gewenste levertijd. Zo hoeft je werkvoorbereiding niet eerst drie keer terug te mailen. De aanvraag kan rechtstreeks in je CRM of ERP landen. Voor standaardproducten gaat een [[productconfigurator|configurator]] met prijsindicatie nog een stap verder, maar ook een slim formulier scheelt al veel heen-en-weer.",
              en: "Yes. A good request form lets customers upload drawings and 3D files, such as STEP, DXF or PDF, and asks straight away for material, quantities and desired lead time. That saves your work planners three rounds of follow-up emails. The request can land directly in your CRM or ERP. For standard products a [[productconfigurator|configurator]] with a price indication goes one step further, but even a smart form saves a lot of back and forth.",
            },
          },
          {
            q: {
              nl: "Hoe maken jullie foto's en video in onze productie zonder dat alles stilligt?",
              en: "How do you shoot photos and video in our production without bringing it to a halt?",
            },
            a: {
              nl: "Door het samen goed te plannen. We spreken vooraf af welke machines, mensen en producten in beeld moeten en wanneer dat het minst stoort. We werken met een compacte crew, houden ons aan je veiligheidsregels en lopen niet in de weg. Vaak filmen we juist tijdens de productie, omdat draaiende machines en vakmensen aan het werk het mooiste beeld geven. Het resultaat gebruik je voor je website, een [[bedrijfsfilm|bedrijfsfilm]], beurzen en vacatures.",
              en: "By planning it well together. We agree upfront which machines, people and products need to be in shot and when it causes the least disruption. We work with a compact crew, follow your safety rules and stay out of the way. Often we film during production on purpose, because running machines and skilled people at work make the best footage. You use the result for your website, a [[bedrijfsfilm|corporate film]], trade shows and job ads.",
            },
          },
          {
            q: { nl: "Hoe word ik gevonden op specialistische zoektermen?", en: "How do I get found for specialist search terms?" },
            a: {
              nl: "Wie 'lasersnijden RVS kleine series' of 'CNC-frezen aluminium prototype' zoekt, weet meestal precies wat hij wil. Die zoekopdrachten hebben weinig volume, maar wel veel koopintentie. We brengen in kaart welke termen bij jouw bewerkingen horen en schrijven pagina's die daar inhoudelijk antwoord op geven, met specificaties en voorbeelden. Met [[technische-seo|technische SEO]] zorgen we dat Google en AI-assistenten die pagina's ook goed kunnen lezen. Geen trucjes, gewoon vakkennis die vindbaar is.",
              en: "Someone searching for 'laser cutting stainless steel small batches' or 'CNC milling aluminium prototype' usually knows exactly what they want. Those searches have little volume but plenty of buying intent. We map which terms belong to your processes and write pages that answer them properly, with specifications and examples. With [[technische-seo|technical SEO]] we make sure Google and AI assistants can read those pages well. No tricks, just expertise that can be found.",
            },
          },
        ],
      },
      {
        name: { nl: "Machinebouw", en: "Machine building" },
        intro: {
          nl: "Voor machinebouwers, apparatenbouwers, OEM'ers en leveranciers van productielijnen, robotica en industriële automatisering.",
          en: "For machine builders, equipment manufacturers, OEMs and suppliers of production lines, robotics and industrial automation.",
        },
        types: [
          { nl: "Machinebouwers", en: "Machine builders" },
          { nl: "Apparatenbouwers", en: "Equipment manufacturers" },
          { nl: "OEM'ers", en: "OEMs" },
          { nl: "Automatiseringsbedrijven", en: "Industrial automation companies" },
          { nl: "Robotica-integrators", en: "Robotics integrators" },
          { nl: "Food- en procestechniekbedrijven", en: "Food and process engineering companies" },
          { nl: "Agritechbedrijven", en: "Agritech companies" },
        ],
        useCases: [
          {
            title: { nl: "3D-configurator voor machine-opties", en: "3D configurator for machine options" },
            text: {
              nl: "Klanten en dealers stellen zelf uitvoering, afmetingen en opties samen en zien direct wat dat betekent. Jij krijgt een aanvraag met de complete configuratie.",
              en: "Customers and dealers choose the version, dimensions and options themselves and see right away what that means. You receive an enquiry with the complete configuration.",
            },
            service: "configurators-lead-tools-widgets",
            application: "3d-configurator",
          },
          {
            title: { nl: "Procesanimatie van één minuut", en: "A one-minute process animation" },
            text: {
              nl: "Een korte animatie laat zien wat de machine doet en welk probleem hij oplost. Werkt op je website, op het beursscherm en in het salesgesprek.",
              en: "A short animation shows what the machine does and which problem it solves. It works on your website, on the trade-show screen and in sales meetings.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "Serviceportaal met onderdelen en handleidingen", en: "Service portal with parts and manuals" },
            text: {
              nl: "Per machine de handleidingen, onderhoudshistorie en reserveonderdelen op één plek. Storingen melden klanten met foto en serienummer erbij.",
              en: "Manuals, service history and spare parts per machine, all in one place. Customers report faults with a photo and serial number attached.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Beursstand met opvolging achteraf", en: "Trade-show stand with follow-up" },
            text: {
              nl: "Een stand die van ver opvalt, een QR-code naar de juiste productpagina en een bedankmail na afloop. Zo levert de beurs meer op dan een stapel visitekaartjes.",
              en: "A stand that stands out from afar, a QR code to the right product page and a thank-you email afterwards. That way the show delivers more than a pile of business cards.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe leg ik een complexe machine uit aan iemand die geen engineer is?", en: "How do I explain a complex machine to someone who is not an engineer?" },
            a: {
              nl: "Begin bij het probleem dat de machine oplost, niet bij de specificaties. De operationeel directeur wil weten wat het oplevert, de engineer duikt daarna wel in de details. Een korte [[motion-design|animatie]] die het proces in een minuut laat zien, doet vaak meer dan tien pagina's tekst. Daaronder zet je de techniek overzichtelijk per toepassing. Zo bedien je beide lezers, zonder dat een van de twee afhaakt.",
              en: "Start with the problem the machine solves, not the specifications. The operations director wants to know what it delivers; the engineer will dive into the details afterwards. A short [[motion-design|animation]] that shows the process in a minute often does more than ten pages of text. Below that, you lay out the technology clearly per application. That way you serve both readers without losing either of them.",
            },
          },
          {
            q: { nl: "Wat heeft een machinebouwer aan een 3D-configurator?", en: "What does a machine builder gain from a 3D configurator?" },
            a: {
              nl: "Een machine met tientallen opties is lastig te verkopen vanuit een pdf. Met een [[3d-configurator|3D-configurator]] kiest de klant zelf uitvoering, afmetingen en opties, en ziet hij direct wat dat betekent. Voor je verkopers en dealers is het een demo-tool die altijd actueel is, op een beurs of bij de klant op locatie. Jij krijgt aanvragen binnen met een complete configuratie, in plaats van een vage vraag om 'meer informatie'.",
              en: "A machine with dozens of options is hard to sell from a PDF. With a [[3d-configurator|3D configurator]] customers choose the version, dimensions and options themselves, and see right away what that means. For your sales team and dealers it is a demo tool that is always up to date, at a trade show or on site with the customer. You receive enquiries with a complete configuration, instead of a vague request for 'more information'.",
            },
          },
          {
            q: { nl: "Kunnen jullie een portaal bouwen voor service, onderdelen en handleidingen?", en: "Can you build a portal for service, spare parts and manuals?" },
            a: {
              nl: "Ja. In een [[klantportaal|klantportaal]] ziet een klant per machine de handleidingen, onderhoudshistorie en bijbehorende onderdelen, en bestelt hij reserveonderdelen zonder te bellen. Storingen meld je met foto's en serienummer erbij, zodat je servicedienst meteen weet waar het om gaat. Het portaal kan gegevens halen uit je ERP of servicesysteem. Zo blijft de klantrelatie ook ná de verkoop iets opleveren, en krijgt je binnendienst een stuk minder telefoontjes.",
              en: "Yes. In a [[klantportaal|customer portal]] customers see the manuals, service history and matching parts per machine, and order spare parts without picking up the phone. Faults can be reported with photos and the serial number, so your service team knows right away what is going on. The portal can pull data from your ERP or service system. That way the customer relationship keeps paying off after the sale, and your inside sales team gets far fewer calls.",
            },
          },
          {
            q: { nl: "Hoe haal ik meer uit een vakbeurs?", en: "How do I get more out of a trade show?" },
            a: {
              nl: "Door de beurs niet als losse dag te zien. Vooraf nodig je klanten uit met een gerichte mail en een landingspagina. Op de stand trekt een draaiende machine of een 3D-animatie op een groot scherm de aandacht, en scant een bezoeker een QR-code om informatie mee te nemen. Achteraf volgt automatisch een bedankmail met precies wat hij bekeek. Wij ontwerpen de [[beurs-signing|beursstand]] en regelen de opvolging, zodat je na afloop meer hebt dan een stapel visitekaartjes.",
              en: "By not treating it as a one-day event. Beforehand, you invite customers with a targeted email and a landing page. On the stand, a running machine or a 3D animation on a big screen draws attention, and visitors scan a QR code to take information with them. Afterwards, a thank-you email with exactly what they looked at goes out automatically. We design the [[beurs-signing|trade-show stand]] and set up the follow-up, so you leave with more than a pile of business cards.",
            },
          },
        ],
      },
      {
        name: { nl: "Installatietechniek", en: "Installation services" },
        intro: {
          nl: "Voor installatiebedrijven, elektrotechnische bedrijven, klimaat- en warmtepompspecialisten en installateurs van zonnepanelen en laadpalen, voor particulier en zakelijk.",
          en: "For installation companies, electrical contractors, HVAC and heat pump specialists, and installers of solar panels and EV chargers, serving homes and businesses.",
        },
        types: [
          { nl: "Installatiebedrijven", en: "Installation companies" },
          { nl: "Elektrotechnische bedrijven", en: "Electrical contractors" },
          { nl: "Klimaattechniekbedrijven", en: "HVAC companies" },
          { nl: "Warmtepompspecialisten", en: "Heat pump specialists" },
          { nl: "Zonne-energiebedrijven", en: "Solar energy companies" },
          { nl: "Laadpaalinstallateurs", en: "EV charger installers" },
          { nl: "Industriële onderhoudsbedrijven", en: "Industrial maintenance companies" },
        ],
        useCases: [
          {
            title: { nl: "Keuzehulp voor warmtepomp of zonnepanelen", en: "Product finder for heat pumps or solar" },
            text: {
              nl: "Een paar vragen over bouwjaar, isolatie en verbruik leveren een eerste advies op. Jij krijgt een aanvraag die al half gekwalificeerd is.",
              en: "A few questions about build year, insulation and usage lead to initial advice. You receive an enquiry that is already half-qualified.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Storingsmelding die direct ingepland wordt", en: "Fault reports that go straight into planning" },
            text: {
              nl: "Klanten melden een storing met foto's en het type installatie, en via een automatisering staat het meteen in je planning. De klant krijgt een bevestiging, je monteur weet wat hij mee moet nemen.",
              en: "Customers report a fault with photos and the type of installation, and an automation puts it straight into your schedule. The customer gets a confirmation, your engineer knows what to bring.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Bedrijfsbussen als rijdende reclame", en: "Company vans as moving advertising" },
            text: {
              nl: "Belettering in je huisstijl die op elk type bus klopt. Simpel, leesbaar en herkenbaar, ook op de oprit van de klant.",
              en: "Vehicle graphics in your identity that fit every van model. Simple, legible and recognisable, on the customer's driveway too.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
          {
            title: { nl: "Lokaal gevonden in je werkgebied", en: "Found locally in your service area" },
            text: {
              nl: "Pagina's per plaats en dienst, een verzorgd Google Bedrijfsprofiel en reviews. Zo vindt iemand die 'airco installateur Oss' zoekt jou, en niet een landelijke prijsvechter.",
              en: "Pages per town and service, a well-kept Google Business Profile and reviews. That way someone searching for 'air conditioning installer Oss' finds you, not a national discounter.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
        ],
        faqs: [
          {
            q: {
              nl: "Hoe krijg ik meer aanvragen voor warmtepompen, zonnepanelen of laadpalen?",
              en: "How do I get more enquiries for heat pumps, solar panels or EV chargers?",
            },
            a: {
              nl: "Veel particulieren weten niet wat er bij hun huis past. Een [[keuzehulp-quiz|keuzehulp]] stelt een paar vragen over bouwjaar, isolatie en verbruik en geeft een eerste advies, met een aanvraag als logische volgende stap. Jij krijgt leads die al half gekwalificeerd zijn, inclusief de gegevens die je normaal aan de telefoon uitvraagt. Combineer dat met lokale vindbaarheid en eerlijke uitleg over kosten en subsidies, en mensen kiezen sneller voor een installateur uit de buurt.",
              en: "Many homeowners do not know what suits their house. A [[keuzehulp-quiz|product finder]] asks a few questions about build year, insulation and usage and gives initial advice, with an enquiry as the logical next step. You receive leads that are already half-qualified, including the details you would normally ask for on the phone. Combine that with local visibility and honest explanations of costs and subsidies, and people are quicker to choose an installer nearby.",
            },
          },
          {
            q: { nl: "Kunnen klanten online onderhoud plannen of een storing melden?", en: "Can customers schedule maintenance or report a fault online?" },
            a: {
              nl: "Ja. Met een online formulier of [[boekingswidget|afsprakenwidget]] plant een klant zelf een onderhoudsbeurt, of meldt hij een storing met foto's en het type installatie erbij. Via een koppeling of [[workflow-automatisering|automatisering]] komt dat direct in je planning, en krijgt de klant een bevestiging en herinnering. Dat scheelt je kantoor veel telefoontjes in de piek van het stookseizoen, en je monteur weet vooraf welk onderdeel hij mee moet nemen.",
              en: "Yes. With an online form or [[boekingswidget|appointment widget]] customers book a service visit themselves, or report a fault with photos and the type of installation. Through an integration or [[workflow-automatisering|automation]] it goes straight into your planning, and the customer gets a confirmation and a reminder. That saves your office a lot of calls at the peak of the heating season, and your engineer knows in advance which part to bring.",
            },
          },
          {
            q: { nl: "Hoe maak ik van mijn bedrijfsbussen rijdende reclame?", en: "How do I turn my company vans into moving advertising?" },
            a: {
              nl: "Je bussen rijden elke dag door je werkgebied, dus ze zien meer mensen dan menig billboard. Belettering werkt het best als het simpel is: je logo, wat je doet in een paar woorden en je website. Geen tien telefoonnummers en een opsomming van alle merken die je voert. We ontwerpen de [[beurs-signing|belettering]] in je huisstijl, passend op het type bus, zodat je vloot er netjes en herkenbaar bij staat. Ook op de oprit van de klant.",
              en: "Your vans drive through your service area every day, so they reach more people than many billboards. Vehicle graphics work best when they are simple: your logo, what you do in a few words and your website. Not ten phone numbers and a list of every brand you carry. We design the [[beurs-signing|vehicle graphics]] in your identity, fitted to the van model, so your fleet looks tidy and recognisable. On the customer's driveway too.",
            },
          },
        ],
      },
      {
        name: { nl: "Engineering & advies", en: "Engineering & consulting" },
        intro: {
          nl: "Voor ingenieursbureaus, engineeringbedrijven, technische adviesbureaus, inspectie- en testbedrijven en technische detacheerders.",
          en: "For engineering firms, design engineering companies, technical consultancies, inspection and testing companies and technical staffing agencies.",
        },
        types: [
          { nl: "Ingenieursbureaus", en: "Engineering firms" },
          { nl: "Engineeringbedrijven", en: "Design engineering companies" },
          { nl: "Technische adviesbureaus", en: "Technical consultancies" },
          { nl: "Inspectie- en testbedrijven", en: "Inspection and testing companies" },
          { nl: "Technische detacheerders", en: "Technical staffing agencies" },
        ],
        useCases: [
          {
            title: { nl: "Kennis vertaald naar sterke content", en: "Expertise turned into strong content" },
            text: {
              nl: "Eén project of technisch inzicht, uitgewerkt tot artikel, LinkedIn-post en whitepaper. Zo wordt je kennis zichtbaar voor opdrachtgevers én zoekmachines.",
              en: "One project or technical insight, turned into an article, a LinkedIn post and a white paper. That makes your expertise visible to clients and search engines alike.",
            },
            service: "content-marketing-online-ads",
            application: "contentstrategie",
          },
          {
            title: { nl: "Twee routes: opdrachtgever en engineer", en: "Two routes: client and engineer" },
            text: {
              nl: "Eén website met een eigen route voor opdrachtgevers en voor kandidaten, elk in hun eigen taal. Niemand hoeft door het verhaal van de ander heen te lezen.",
              en: "One website with a separate route for clients and for candidates, each in their own language. Nobody has to read through the other group's story.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "LinkedIn-campagnes op functie en branche", en: "LinkedIn campaigns by role and industry" },
            text: {
              nl: "Je projectverhalen gericht bij technisch managers en inkopers in je niche. Met inzicht in wat elke campagne oplevert.",
              en: "Your project stories in front of technical managers and buyers in your niche. With clear insight into what each campaign brings in.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "Rapporten die prettig leesbaar zijn", en: "Reports that are easy to read" },
            text: {
              nl: "Inspectie- of adviesrapporten met een heldere opbouw en grafieken die de kern laten zien. Je team werkt vanuit een vast sjabloon.",
              en: "Inspection or advisory reports with a clear structure and charts that show the key points. Your team works from a fixed template.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe verkoop je kennis als je geen tastbaar product hebt?", en: "How do you sell expertise when you have no tangible product?" },
            a: {
              nl: "Door die kennis zichtbaar te maken. Een ingenieursbureau wint vertrouwen met projecten die laten zien welk probleem je oploste en hoe, met artikelen die een lastig vraagstuk helder uitleggen en met mensen die zichtbaar zijn als specialist. Die [[contentstrategie|content]] werkt dubbel: opdrachtgevers lezen hem, en zoekmachines en AI-assistenten gebruiken hem als bron. We helpen met de structuur, het schrijven en het hergebruiken van één verhaal op je website, LinkedIn en in een whitepaper.",
              en: "By making that expertise visible. An engineering firm earns trust with projects that show which problem you solved and how, with articles that explain a tricky issue clearly and with people who are visible as specialists. That [[contentstrategie|content]] works twice: clients read it, and search engines and AI assistants use it as a source. We help with the structure, the writing and reusing one story across your website, LinkedIn and a white paper.",
            },
          },
          {
            q: {
              nl: "Hoe trek ik als technisch detacheerder zowel opdrachtgevers als engineers aan?",
              en: "How do I attract both clients and engineers as a technical staffing agency?",
            },
            a: {
              nl: "Door twee duidelijke routes te maken op één website. Opdrachtgevers zoeken snelheid, expertise en betrouwbaarheid, engineers willen interessante projecten, ontwikkeling en een eerlijk salaris. Beide verdienen hun eigen taal en hun eigen pagina's. Met [[employer-branding|employer branding]] laat je zien hoe het is om bij jou te werken, en vacatures kunnen eventueel vanuit je ATS of recruitmentsysteem worden ingeladen. Zo hoeft niemand door het verhaal van de ander heen te lezen.",
              en: "By building two clear routes on one website. Clients look for speed, expertise and reliability; engineers want interesting projects, development and a fair salary. Both deserve their own language and their own pages. With [[employer-branding|employer branding]] you show what it is like to work for you, and vacancies can be pulled in from your ATS or recruitment system if needed. That way nobody has to read through the other group's story.",
            },
          },
          {
            q: { nl: "Werkt LinkedIn-marketing voor een ingenieursbureau?", en: "Does LinkedIn marketing work for an engineering firm?" },
            a: {
              nl: "Voor veel technische B2B-bedrijven is LinkedIn de plek waar beslissers en specialisten echt zitten. Je kunt gericht adverteren op functie, branche en bedrijfsgrootte, en dat is in een nichemarkt veel waard. Maar het begint bij inhoud: een project, een technisch inzicht of een collega die vertelt wat hij doet. Met [[linkedin-ads|LinkedIn Ads]] krijg je die verhalen vervolgens bij de juiste mensen. Garanties geven we niet, wel inzicht in wat het oplevert.",
              en: "For many technical B2B companies LinkedIn is where the decision-makers and specialists actually are. You can target by job title, industry and company size, which is valuable in a niche market. But it starts with substance: a project, a technical insight or a colleague explaining what they do. You then use [[linkedin-ads|LinkedIn Ads]] to get those stories in front of the right people. No guarantees, but clear insight into what it brings in.",
            },
          },
        ],
      },
      {
        name: { nl: "Technische groothandel", en: "Technical wholesale" },
        intro: {
          nl: "Voor technische groothandels, distributeurs, importeurs en leveranciers van onderdelen, gereedschap, bevestigingsmaterialen en industriële benodigdheden.",
          en: "For technical wholesalers, distributors, importers and suppliers of components, tools, fasteners and industrial supplies.",
        },
        types: [
          { nl: "Technische groothandels", en: "Technical wholesalers" },
          { nl: "Distributeurs en importeurs", en: "Distributors and importers" },
          { nl: "Onderdelenleveranciers", en: "Component suppliers" },
          { nl: "Gereedschapsleveranciers", en: "Tool suppliers" },
          { nl: "Leveranciers van bevestigingsmaterialen", en: "Fastener suppliers" },
          { nl: "Leveranciers van industriële benodigdheden", en: "Industrial supply companies" },
        ],
        useCases: [
          {
            title: { nl: "B2B-webshop met klantprijzen", en: "B2B web shop with customer pricing" },
            text: {
              nl: "Klantspecifieke prijzen, staffelkortingen en bestellen op rekening, gekoppeld aan je ERP waar dat kan. Vaste klanten bestellen zelf en je binnendienst houdt tijd over.",
              en: "Customer-specific prices, volume discounts and ordering on account, connected to your ERP where possible. Regular customers order themselves and your inside sales team gains time.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Bestelportaal met facturen en nabestellen", en: "Ordering portal with invoices and reorders" },
            text: {
              nl: "Klanten zien hun bestelhistorie, bestellen met één klik opnieuw en downloaden zelf facturen en pakbonnen. Met eigen logins en rechten per collega.",
              en: "Customers see their order history, reorder in one click and download invoices and delivery notes themselves. With personal logins and permissions per colleague.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Productdata die zoekmachines begrijpen", en: "Product data search engines understand" },
            text: {
              nl: "Specificaties, normen en maten als gestructureerde data. Zo vinden monteurs en inkopers het juiste artikel, ook via AI-assistenten.",
              en: "Specifications, standards and sizes as structured data. That way engineers and buyers find the right item, including through AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "structured-data",
          },
          {
            title: { nl: "Koppeling met ERP of PIM", en: "Integration with ERP or PIM" },
            text: {
              nl: "Voorraad, prijzen en productinformatie komen uit één bron en staan automatisch op de site. Geen dubbel werk, en geen artikel dat online op voorraad lijkt terwijl het schap leeg is.",
              en: "Stock, prices and product information come from one source and appear on the site automatically. No double work, and no item that looks in stock online while the shelf is empty.",
            },
            service: "web-apps-portals-apps",
            application: "api-koppelingen",
          },
        ],
        faqs: [
          {
            q: { nl: "Heb ik een B2B-webshop nodig of is een online catalogus genoeg?", en: "Do I need a B2B web shop or is an online catalogue enough?" },
            a: {
              nl: "Dat hangt af van hoe je klanten bestellen. Bestellen ze vaak dezelfde artikelen, dan is een B2B-webshop met klantspecifieke prijzen, staffelkortingen en bestellen op rekening een flinke tijdwinst, voor hen en voor je binnendienst. Draait het meer om advies, dan is een goede catalogus met een snelle offerte-aanvraag soms slimmer. Een [[webshop|webshop]] kan koppelen met je ERP, bijvoorbeeld Exact of AFAS, zodat voorraad en prijzen kloppen. Dat zoeken we vooraf samen uit.",
              en: "That depends on how your customers order. If they often reorder the same items, a B2B web shop with customer-specific prices, volume discounts and ordering on account saves a lot of time, for them and for your inside sales team. If it is more about advice, a good catalogue with a quick quote request is sometimes smarter. A [[webshop|web shop]] can connect to your ERP, for example Exact or AFAS, so stock and prices stay accurate. We work that out together upfront.",
            },
          },
          {
            q: { nl: "Hoe maak ik duizenden artikelen met specificaties overzichtelijk?", en: "How do I make thousands of products with specifications easy to navigate?" },
            a: {
              nl: "Met een goede datastructuur en filters die aansluiten bij hoe je klant zoekt: op maat, materiaal, norm of toepassing. Productdata komt idealiter uit één bron, zoals je ERP of een PIM, zodat je het niet op drie plekken bijhoudt. Met [[structured-data|structured data]] begrijpen Google en AI-assistenten bovendien beter welke specificaties bij welk artikel horen. Zo vindt een monteur op zijn telefoon in een paar tikken dat ene ringetje, in plaats van een dikke catalogus door te bladeren.",
              en: "With a good data structure and filters that match how your customers search: by size, material, standard or application. Ideally product data comes from one source, such as your ERP or a PIM, so you are not maintaining it in three places. With [[structured-data|structured data]] Google and AI assistants also understand better which specifications belong to which product. That way an engineer on a phone finds that one washer in a few taps, instead of leafing through a thick catalogue.",
            },
          },
          {
            q: {
              nl: "Kunnen vaste klanten zelf bestellen, nabestellen en facturen inzien?",
              en: "Can regular customers order, reorder and view invoices themselves?",
            },
            a: {
              nl: "Ja, in een eigen [[klantportaal|klantportaal]]. Klanten zien hun bestelhistorie, bestellen met één klik opnieuw, downloaden facturen en pakbonnen en volgen de status van hun levering. Meerdere collega's bij één klant kunnen elk een eigen login krijgen, met rechten per persoon, zodat de inkoper goedkeurt wat de monteur in zijn mandje zet. Dat scheelt je binnendienst een hoop mailtjes met 'kun je die factuur nog even sturen'.",
              en: "Yes, in their own [[klantportaal|customer portal]]. Customers see their order history, reorder with one click, download invoices and delivery notes and track the status of their deliveries. Several colleagues at one customer can each have their own login with personal permissions, so the buyer approves what the engineer puts in the basket. That saves your inside sales team a lot of 'could you resend that invoice' emails.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Maakbedrijven", en: "Manufacturing companies" },
      { nl: "Machinebouwers", en: "Machine builders" },
      { nl: "Apparatenbouwers", en: "Equipment manufacturers" },
      { nl: "Metaalbewerkingsbedrijven", en: "Metalworking companies" },
      { nl: "Plaatbewerkers", en: "Sheet metal fabricators" },
      { nl: "Staal- en constructiebedrijven", en: "Steel construction companies" },
      { nl: "Kunststofverwerkers", en: "Plastics processors" },
      { nl: "Toeleveranciers", en: "Subcontract manufacturers" },
      { nl: "Automatiseringsbedrijven", en: "Industrial automation companies" },
      { nl: "Robotica-integrators", en: "Robotics integrators" },
      { nl: "Installatiebedrijven", en: "Installation companies" },
      { nl: "Elektrotechnische bedrijven", en: "Electrical contractors" },
      { nl: "Klimaattechniekbedrijven", en: "HVAC companies" },
      { nl: "Zonne-energiebedrijven", en: "Solar energy companies" },
      { nl: "Ingenieursbureaus", en: "Engineering firms" },
      { nl: "Technische adviesbureaus", en: "Technical consultancies" },
      { nl: "Inspectie- en testbedrijven", en: "Inspection and testing companies" },
      { nl: "Technische detacheerders", en: "Technical staffing agencies" },
      { nl: "Technische groothandels", en: "Technical wholesalers" },
      { nl: "Distributeurs en importeurs", en: "Distributors and importers" },
      { nl: "Food- en procestechniekbedrijven", en: "Food and process engineering companies" },
      { nl: "Agritechbedrijven", en: "Agritech companies" },
      { nl: "Industriële onderhoudsbedrijven", en: "Industrial maintenance companies" },
    ],
  },

  /* ---------- Zorg & Welzijn ---------- */
  "zorg-welzijn": {
    segments: [
      {
        name: { nl: "Praktijken", en: "Practices" },
        intro: {
          nl: "Voor fysiotherapeuten, oefentherapeuten, diëtisten, logopedisten, podotherapeuten, tandartsen en andere eerstelijnspraktijken, van solopraktijk tot gezondheidscentrum.",
          en: "For physiotherapists, exercise therapists, dietitians, speech therapists, podiatrists, dentists and other primary care practices, from solo practice to health centre.",
        },
        types: [
          { nl: "Fysiotherapiepraktijken", en: "Physiotherapy practices" },
          { nl: "Oefentherapiepraktijken", en: "Exercise therapy practices" },
          { nl: "Huisartsenpraktijken", en: "GP practices" },
          { nl: "Tandartspraktijken", en: "Dental practices" },
          { nl: "Diëtistenpraktijken", en: "Dietitian practices" },
          { nl: "Logopediepraktijken", en: "Speech therapy practices" },
          { nl: "Podotherapeuten", en: "Podiatrists" },
          { nl: "Verloskundigenpraktijken", en: "Midwifery practices" },
        ],
        useCases: [
          {
            title: { nl: "Praktijkwebsite die vragen vooraf beantwoordt", en: "A practice website that answers questions upfront" },
            text: {
              nl: "Klachten, vergoedingen, verwijzing, parkeren en wachttijd: wat nu aan de balie gevraagd wordt, staat helder online. Met een afspraakknop op elke pagina.",
              en: "Complaints, insurance cover, referrals, parking and waiting times: what people now ask at the desk is clearly online. With a booking button on every page.",
            },
            service: "websites-webshops",
            application: "wordpress-website",
          },
          {
            title: { nl: "Gevonden in je eigen wijk", en: "Found in your own neighbourhood" },
            text: {
              nl: "Een compleet Google Bedrijfsprofiel, reviews en een pagina per locatie. Zo vindt iemand die 'fysio in de buurt' zoekt jouw praktijk.",
              en: "A complete Google Business Profile, reviews and a page per location. That way someone searching for 'physio near me' finds your practice.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Landingspagina voor een nieuwe specialisatie", en: "Landing page for a new specialisation" },
            text: {
              nl: "Bekkenfysiotherapie, sportfysio of implantologie krijgt een eigen pagina in gewone taal. Voor patiënten én voor verwijzers zoals huisartsen.",
              en: "Pelvic floor physio, sports physio or implantology gets its own page in plain language. For patients and for referrers such as GPs.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Korte video van praktijk en team", en: "Short video of practice and team" },
            text: {
              nl: "Een rustige video waarin je laat zien wie er achter de balie en aan de behandeltafel staat. Nieuwe patiënten weten zo bij wie ze terechtkomen.",
              en: "A calm video showing who is behind the desk and at the treatment table. New patients know who they will be seeing.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet er op de website van een fysiotherapiepraktijk staan?", en: "What should be on a physiotherapy practice's website?" },
            a: {
              nl: "Vooral de antwoorden op vragen die nu aan de balie of telefoon gesteld worden. Welke klachten behandel je, heb ik een verwijzing nodig, wat vergoedt mijn verzekering, waar kan ik parkeren en hoe snel kan ik terecht? Daarnaast wil een patiënt zien bij wie hij terechtkomt: echte foto's van je team, geen stockmodel dat glimlacht naar een fitnessbal. Een duidelijke knop om een afspraak te maken staat op elke pagina. Dat geldt net zo goed voor de diëtist of logopedist.",
              en: "Mainly the answers to questions that are now asked at the desk or on the phone. Which complaints do you treat, do I need a referral, what does my insurance cover, where can I park and how soon can I come in? Patients also want to see who they will be seeing: real photos of your team, not a stock model smiling at a gym ball. A clear button to book an appointment sits on every page. The same goes for the dietitian or speech therapist.",
            },
          },
          {
            q: {
              nl: "Hoe word ik als praktijk beter gevonden in mijn eigen wijk of dorp?",
              en: "How does my practice become easier to find in my own neighbourhood or village?",
            },
            a: {
              nl: "Mensen zoeken dichtbij: 'fysio in de buurt' of 'tandarts Uden nieuwe patiënten'. Begin met een compleet Google Bedrijfsprofiel, met openingstijden, foto's en reviews waarop je netjes reageert. Zorg daarnaast voor een pagina per locatie als je er meer hebt, en voor heldere informatie over specialisaties. Met [[lokale-seo|lokale SEO]] bouwen we dat zorgvuldig op. En neemt je praktijk geen nieuwe patiënten aan, zet dat er dan eerlijk bij. Dat scheelt iedereen een telefoontje.",
              en: "People search close to home: 'physio near me' or 'dentist Uden accepting new patients'. Start with a complete Google Business Profile, with opening hours, photos and reviews you respond to properly. Add a page per location if you have more than one, and clear information about specialisations. With [[lokale-seo|local SEO]] we build that up carefully. And if your practice is not taking new patients, say so honestly. That saves everyone a phone call.",
            },
          },
          {
            q: { nl: "Hoe trek ik patiënten aan voor een nieuwe specialisatie?", en: "How do I attract patients for a new specialisation?" },
            a: {
              nl: "Een nieuwe specialisatie, zoals bekkenfysiotherapie, sportfysiotherapie of implantologie in de tandartspraktijk, verdient een eigen [[landingspaginas|landingspagina]]. Leg in gewone taal uit voor wie het is, wat een behandeling inhoudt en hoe verwijzing werkt. Dat helpt patiënten én verwijzers zoals huisartsen. Met een paar goede artikelen en eventueel een lokale campagne op Google of social media laat je de buurt weten dat het er is. Rustig en informatief, want zorg verkoop je niet met schreeuwerige acties.",
              en: "A new specialisation, such as pelvic floor physiotherapy, sports physiotherapy or implantology at a dental practice, deserves its own [[landingspaginas|landing page]]. Explain in plain language who it is for, what treatment involves and how referrals work. That helps patients and referrers such as GPs. With a few good articles and perhaps a local campaign on Google or social media, you let the neighbourhood know it exists. Calm and informative, because you do not sell care with loud promotions.",
            },
          },
          {
            q: { nl: "Kan de website samenwerken met ons praktijkinformatiesysteem?", en: "Can the website work with our practice management system?" },
            a: {
              nl: "Vaak wel, maar het hangt af van het systeem. Veel praktijksoftware biedt een eigen module voor online afspraken of aanmelden, die we netjes in je website inpassen. Sommige pakketten hebben een koppeling of API waarmee meer mogelijk is. Medische gegevens laten we waar ze horen: in je beveiligde systeem, niet in een gewoon websiteformulier. We kijken vooraf wat jouw leverancier toestaat, zodat je patiënten niets belooft wat technisch niet kan.",
              en: "Often, yes, but it depends on the system. Many practice software packages offer their own module for online booking or registration, which we fit neatly into your website. Some have an integration or API that allows more. Medical data stays where it belongs: in your secure system, not in an ordinary website form. We check upfront what your supplier allows, so you do not promise patients things that cannot be done technically.",
            },
          },
        ],
      },
      {
        name: { nl: "Klinieken", en: "Clinics" },
        intro: {
          nl: "Voor privéklinieken, zelfstandige behandelcentra, cosmetische en esthetische klinieken, oogklinieken, haarklinieken en tandheelkundige centra.",
          en: "For private clinics, independent treatment centres, cosmetic and aesthetic clinics, eye clinics, hair clinics and dental centres.",
        },
        types: [
          { nl: "Privéklinieken", en: "Private clinics" },
          { nl: "Cosmetische klinieken", en: "Cosmetic clinics" },
          { nl: "Zelfstandige behandelcentra", en: "Independent treatment centres" },
          { nl: "Oogklinieken", en: "Eye clinics" },
          { nl: "Haarklinieken", en: "Hair clinics" },
          { nl: "Tandheelkundige centra", en: "Dental centres" },
          { nl: "Orthodontiepraktijken", en: "Orthodontic practices" },
          { nl: "Mondhygiënisten", en: "Dental hygienists" },
        ],
        useCases: [
          {
            title: { nl: "Behandelpagina's met eerlijke informatie", en: "Treatment pages with honest information" },
            text: {
              nl: "Per behandeling het traject, de herstelperiode, de risico's en een kostenindicatie. Rustig vormgegeven, zodat vertrouwen ontstaat voordat iemand een consult boekt.",
              en: "For every treatment the process, recovery time, risks and a cost indication. Calmly designed, so trust builds before anyone books a consultation.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Intake en opvolging via een CRM", en: "Intake and follow-up through a CRM" },
            text: {
              nl: "Elke aanvraag krijgt direct een bevestiging en je team een taak. Wie na een consult twijfelt, krijgt een vriendelijke herinnering.",
              en: "Every enquiry gets an instant confirmation and your team gets a task. Anyone hesitating after a consultation gets a friendly reminder.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
          },
          {
            title: { nl: "Feitelijke campagnes binnen de regels", en: "Factual campaigns within the rules" },
            text: {
              nl: "Advertenties die uitleggen wat een behandeling is, zonder beloftes over het resultaat. Afgestemd op de voorwaarden van Google en Meta.",
              en: "Ads that explain what a treatment is, without promises about results. Aligned with Google and Meta's policies.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
          {
            title: { nl: "Online een consult inplannen", en: "Book a consultation online" },
            text: {
              nl: "Een kennismakingsconsult boeken zonder te bellen, gekoppeld aan de agenda van je kliniek waar dat kan. Met automatische bevestiging en herinnering.",
              en: "Book an introductory consultation without calling, linked to your clinic's calendar where possible. With automatic confirmation and reminder.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
        ],
        faqs: [
          {
            q: { nl: "Mag ik als kliniek online adverteren voor behandelingen?", en: "Can my clinic advertise treatments online?" },
            a: {
              nl: "Meestal wel, maar met beleid. Er gelden regels voor reclame in de zorg, en platforms als Google en Meta hebben eigen voorwaarden voor medische en cosmetische advertenties. Wij houden de boodschap feitelijk: wat de behandeling is, voor wie hij geschikt is en wat het traject inhoudt, zonder beloftes over resultaten. Campagnes via [[google-ads|Google Ads]] of [[meta-ads|Meta Ads]] richten we daarop in. Voor de juridische toets schakel je je eigen adviseur of beroepsvereniging in.",
              en: "Usually yes, but with care. There are rules for healthcare advertising, and platforms such as Google and Meta have their own policies for medical and cosmetic ads. We keep the message factual: what the treatment is, who it suits and what the process involves, without promises about results. We set up campaigns on [[google-ads|Google Ads]] or [[meta-ads|Meta Ads]] accordingly. For the legal check, consult your own advisor or professional association.",
            },
          },
          {
            q: { nl: "Hoe bouw ik vertrouwen op voordat iemand een consult boekt?", en: "How do I build trust before someone books a consultation?" },
            a: {
              nl: "Wie een behandeling overweegt, leest zich vaak weken in. Help daarbij met eerlijke informatie: hoe het traject verloopt, wat de risico's en de herstelperiode zijn, en wat het ongeveer kost. Laat je behandelaars zien met hun achtergrond en registraties, en gebruik video om de kliniek en het team voor te stellen. Ervaringen van patiënten werken, mits met toestemming en zonder overdreven claims. Een rustig, verzorgd [[ux-ui-webdesign|webdesign]] maakt de rest af.",
              en: "People considering a treatment often read up for weeks. Help them with honest information: how the process works, what the risks and recovery time are, and roughly what it costs. Show your practitioners with their background and registrations, and use video to introduce the clinic and team. Patient experiences work, provided they come with consent and without exaggerated claims. A calm, polished [[ux-ui-webdesign|web design]] does the rest.",
            },
          },
          {
            q: {
              nl: "Hoe zorg ik dat aanvragen via de website goed worden opgevolgd?",
              en: "How do I make sure enquiries from the website are followed up properly?",
            },
            a: {
              nl: "Een aanvraag die drie dagen blijft liggen, is vaak een patiënt die naar een andere kliniek gaat. Met een slim intakeformulier, een [[crm-implementatie|CRM]] en een paar automatische stappen gaat dat beter: de aanvrager krijgt direct een bevestiging, je team een taak, en wie na een consult nog twijfelt een vriendelijke herinnering. Gevoelige gegevens vragen we alleen uit als het echt nodig is, en we richten alles zorgvuldig en AVG-bewust in.",
              en: "An enquiry left for three days is often a patient heading to another clinic. With a smart intake form, a [[crm-implementatie|CRM]] and a few automated steps it goes better: the enquirer gets an instant confirmation, your team gets a task, and anyone still hesitating after a consultation gets a friendly reminder. We only ask for sensitive data when it is truly needed, and we set everything up carefully and GDPR-aware.",
            },
          },
        ],
      },
      {
        name: { nl: "GGZ & coaching", en: "Mental health & coaching" },
        intro: {
          nl: "Voor psychologen, psychotherapeuten, GGZ-praktijken, jeugdhulpaanbieders, relatietherapeuten en coaches, van vrijgevestigd tot multidisciplinair team.",
          en: "For psychologists, psychotherapists, mental health practices, youth care providers, relationship therapists and coaches, from independent practitioner to multidisciplinary team.",
        },
        types: [
          { nl: "Psychologenpraktijken", en: "Psychology practices" },
          { nl: "GGZ-instellingen", en: "Mental health organisations" },
          { nl: "Psychotherapeuten", en: "Psychotherapists" },
          { nl: "Jeugdzorgorganisaties", en: "Youth care organisations" },
          { nl: "Relatietherapeuten", en: "Relationship therapists" },
          { nl: "Coaches en therapeuten", en: "Coaches and therapists" },
        ],
        useCases: [
          {
            title: { nl: "Laagdrempelige keuzehulp voor hulpvragers", en: "A low-threshold guide for people seeking help" },
            text: {
              nl: "Een paar rustige vragen die helpen bij 'past deze hulp bij mij?'. Zonder diagnose, wel met een duidelijke volgende stap.",
              en: "A few calm questions that help with 'is this the right help for me?'. No diagnosis, but a clear next step.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Wachttijd zelf actueel houden", en: "Keep your waiting time up to date" },
            text: {
              nl: "Je past de wachttijd per behandelsoort of locatie in een paar seconden zelf aan. Met een alternatief erbij als het even duurt.",
              en: "You update the waiting time per treatment type or location yourself in seconds. With an alternative alongside when the wait is long.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Artikelen over je eigen specialisme", en: "Articles about your own specialism" },
            text: {
              nl: "Over burn-out, angst of rouw, in warme en gewone taal. Dat helpt cliënten op weg en maakt je vindbaar in Google en AI-assistenten.",
              en: "On burnout, anxiety or grief, in warm and everyday language. It helps clients along and makes you findable on Google and in AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Verwijzerspagina voor huisartsen", en: "Referrer page for GPs" },
            text: {
              nl: "Eén heldere pagina voor huisartsen en praktijkondersteuners met je aanbod, doelgroep en wachttijd. Zo verwijzen ze makkelijker door.",
              en: "One clear page for GPs and practice nurses with your services, target group and waiting time. That makes referring easier.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe maak ik de drempel lager voor mensen die hulp zoeken?", en: "How do I lower the threshold for people looking for help?" },
            a: {
              nl: "Wie hulp zoekt, heeft vaak al lang getwijfeld. Je website moet dan geruststellen, niet overweldigen. Schrijf in warme, gewone taal, laat zien wie de behandelaars zijn en leg stap voor stap uit wat er na aanmelding gebeurt. Een korte [[keuzehulp-quiz|keuzehulp]] kan helpen bij de vraag 'past deze hulp bij mij?', zonder dat het een diagnose wordt. En bied meerdere manieren om contact op te nemen, want niet iedereen durft meteen te bellen.",
              en: "People looking for help have often hesitated for a long time. Your website should reassure them, not overwhelm them. Write in warm, everyday language, show who the practitioners are and explain step by step what happens after registering. A short [[keuzehulp-quiz|decision aid]] can help with the question 'is this the right help for me?', without turning into a diagnosis. And offer several ways to get in touch, because not everyone dares to call straight away.",
            },
          },
          {
            q: { nl: "Moet ik mijn wachttijd op de website zetten?", en: "Should I put my waiting time on the website?" },
            a: {
              nl: "Ja, als je hem actueel kunt houden. Mensen willen weten waar ze aan toe zijn, en een eerlijke wachttijd voorkomt teleurstelling en onnodige aanmeldingen. We bouwen het zo dat je de wachttijd zelf in een paar seconden aanpast, eventueel per behandelsoort of locatie. Is de wachttijd lang, geef dan meteen een alternatief: overbruggingszorg, de huisarts of een crisislijn. Zo laat je niemand met lege handen staan.",
              en: "Yes, if you can keep it up to date. People want to know where they stand, and an honest waiting time prevents disappointment and unnecessary registrations. We build it so you can update the waiting time yourself in seconds, per type of treatment or location if needed. If the wait is long, offer an alternative right away: interim support, the GP or a crisis line. That way nobody is left empty-handed.",
            },
          },
          {
            q: { nl: "Hoe vind ik als zelfstandig psycholoog of coach nieuwe cliënten?", en: "How do I find new clients as an independent psychologist or coach?" },
            a: {
              nl: "Vooral door vindbaar en herkenbaar te zijn op je eigen specialisme. Schrijf over de thema's waar je goed in bent, zoals burn-out, angst of rouw, en beantwoord de vragen die cliënten je in de eerste sessie stellen. Die [[seo-content|content]] helpt in Google en bij AI-assistenten. Verwijzers zijn minstens zo belangrijk: maak een heldere pagina voor huisartsen en praktijkondersteuners met je aanbod en wachttijd. Voor coaches werkt LinkedIn vaak goed, mits je laat zien wie je bent.",
              en: "Mainly by being findable and recognisable in your own specialism. Write about the themes you are good at, such as burnout, anxiety or grief, and answer the questions clients ask in the first session. That [[seo-content|content]] helps on Google and with AI assistants. Referrers matter just as much: make a clear page for GPs and practice nurses with your services and waiting time. For coaches, LinkedIn often works well, as long as you show who you are.",
            },
          },
          {
            q: { nl: "Is een online aanmeldformulier veilig genoeg?", en: "Is an online registration form secure enough?" },
            a: {
              nl: "Dat kan, als je het goed inricht. Vraag in een eerste formulier alleen wat nodig is om contact op te nemen, en bewaar gevoelige informatie niet in je gewone mailbox of websitedatabase. Voor de echte intake gebruik je bij voorkeur de beveiligde omgeving van je dossier- of e-healthsysteem. Wij zorgen voor een versleutelde verbinding, een duidelijke privacytekst en een formulier dat zorgvuldig met persoonsgegevens omgaat. Voor de juridische details schakel je je eigen privacyadviseur in.",
              en: "It can be, if you set it up properly. In a first form, ask only for what you need to get in touch, and do not store sensitive information in your regular mailbox or website database. For the actual intake, preferably use the secure environment of your record or e-health system. We take care of an encrypted connection, a clear privacy statement and a form that handles personal data carefully. For the legal details, consult your own privacy advisor.",
            },
          },
        ],
      },
      {
        name: { nl: "Zorginstellingen", en: "Care organisations" },
        intro: {
          nl: "Voor thuiszorgorganisaties, verpleeg- en verzorgingshuizen, gehandicaptenzorg, zorgboerderijen, beschermd wonen en welzijnsstichtingen, van kleinschalig initiatief tot regionale zorggroep.",
          en: "For home care organisations, nursing and care homes, disability care, care farms, supported living and wellbeing foundations, from small-scale initiative to regional care group.",
        },
        types: [
          { nl: "Thuiszorgorganisaties", en: "Home care organisations" },
          { nl: "Verpleeg- en verzorgingshuizen", en: "Nursing and care homes" },
          { nl: "Gehandicaptenzorg", en: "Disability care providers" },
          { nl: "Aanbieders van beschermd wonen", en: "Supported living providers" },
          { nl: "Zorgboerderijen", en: "Care farms" },
          { nl: "Welzijnsstichtingen", en: "Wellbeing foundations" },
          { nl: "Gezondheidscentra", en: "Health centres" },
        ],
        useCases: [
          {
            title: { nl: "Een pagina per locatie", en: "A page per location" },
            text: {
              nl: "Elke locatie een eigen pagina met aanbod, foto's en contactpersoon, in een vaste opzet. Locatiemanagers werken hun eigen pagina bij, zonder dat de rest van de site in gevaar komt.",
              en: "Every location gets its own page with services, photos and a contact person, in a fixed layout. Location managers update their own page without putting the rest of the site at risk.",
            },
            service: "websites-webshops",
            application: "wordpress-website",
          },
          {
            title: { nl: "Keuzehulp voor cliënt en familie", en: "Decision aid for clients and families" },
            text: {
              nl: "Een paar vragen leiden naar wonen, thuiszorg of dagbesteding, in begrijpelijke taal. Ook voor de familie die het namens iemand uitzoekt.",
              en: "A few questions lead to housing, home care or day activities, in plain language. Also for family members looking into it on someone's behalf.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Eerlijke video van een gewone dag", en: "An honest video of an ordinary day" },
            text: {
              nl: "Een rustige film over het leven op de locatie, gemaakt met toestemming en met respect voor het ritme van de bewoners.",
              en: "A calm film about life at the location, made with consent and with respect for the residents' daily rhythm.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
          {
            title: { nl: "Campagnes voor zij-instromers", en: "Campaigns for career changers" },
            text: {
              nl: "Verhalen van collega's die dezelfde overstap maakten, verspreid via social media. Zo bereik je mensen die nog niet aan de zorg dachten.",
              en: "Stories from colleagues who made the same switch, shared on social media. That way you reach people who had not yet considered care work.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
        ],
        faqs: [
          {
            q: {
              nl: "Hoe help ik cliënten en familie de weg te vinden in ons zorgaanbod?",
              en: "How do I help clients and families find their way through our care services?",
            },
            a: {
              nl: "Zorgaanbod is vaak ingewikkeld georganiseerd, maar de bezoeker heeft één simpele vraag: wat kan ik hier krijgen voor mijn moeder, mijn kind of mezelf? Richt je de website in vanuit die vraag in plaats van vanuit je organogram, dan scheelt dat veel gezoek. Een [[keuzehulp-quiz|keuzehulp]] van een paar vragen leidt mensen naar wonen, thuiszorg of dagbesteding, en uitleg op taalniveau B1 maakt het voor iedereen begrijpelijk. Ook voor de schoonzoon die het namens de familie uitzoekt.",
              en: "Care services are often organised in complicated ways, but visitors have one simple question: what can I get here for my mother, my child or myself? If you structure the website around that question instead of your org chart, it saves a lot of searching. A [[keuzehulp-quiz|decision aid]] of a few questions guides people to housing, home care or day activities, and plain-language explanations make it clear for everyone. Including the son-in-law sorting it out on behalf of the family.",
            },
          },
          {
            q: { nl: "Hoe laat ik zien hoe het wonen op onze locaties echt is?", en: "How do I show what living at our locations is really like?" },
            a: {
              nl: "Met echte beelden van echte mensen, met hun toestemming natuurlijk. Een rustige video van een dag op de locatie, foto's van de kamers, de tuin en de huiskamer, en een bewoner of medewerker die vertelt hoe het is. Dat zegt meer dan elke folder. We maken dit soort [[bedrijfsfilm|video]] en fotografie met respect voor privacy en het ritme van de bewoners. Familie die een plek zoekt, krijgt zo een eerlijk beeld nog voordat ze op bezoek komt.",
              en: "With real images of real people, with their consent of course. A calm video of a day at the location, photos of the rooms, the garden and the living room, and a resident or employee telling what it is like. That says more than any leaflet. We shoot this kind of [[bedrijfsfilm|video]] and photography with respect for privacy and the residents' daily rhythm. Families looking for a place get an honest picture before they even visit.",
            },
          },
          {
            q: { nl: "Hoe pak je een website aan voor een organisatie met veel locaties?", en: "How do you approach a website for an organisation with many locations?" },
            a: {
              nl: "Met een stevige basis en ruimte per locatie. Elke locatie krijgt een eigen pagina met adres, aanbod, foto's, contactpersoon en actueel nieuws, in een vaste opzet zodat het overzichtelijk blijft. Locatiemanagers kunnen hun eigen pagina bijwerken, met rechten zodat niemand per ongeluk de hele site aanpast. Met [[lokale-seo|lokale SEO]] per vestiging word je ook gevonden door mensen die zoeken op 'thuiszorg in Boxmeer' of 'dagbesteding Oss'.",
              en: "With a solid foundation and room for each location. Every location gets its own page with address, services, photos, contact person and current news, in a fixed layout so it stays clear. Location managers can update their own page, with permissions so nobody accidentally edits the whole site. With [[lokale-seo|local SEO]] per branch you are also found by people searching for 'home care in Boxmeer' or 'day activities Oss'.",
            },
          },
          {
            q: { nl: "Hoe bereik ik zij-instromers en leerlingen voor de zorg?", en: "How do I reach career changers and trainees for care work?" },
            a: {
              nl: "Zij-instromers twijfelen vaak: kan ik dit wel, en hoe combineer ik leren met werken? Geef daar eerlijk antwoord op, met verhalen van collega's die dezelfde overstap maakten. Een aparte pagina over leer-werktrajecten, een korte video en een sollicitatie zonder drempels werken beter dan een standaard vacaturetekst. Via [[social-media-marketing|social media]] bereik je mensen die nog niet aan de zorg dachten, maar er misschien heel goed in zijn.",
              en: "Career changers often hesitate: can I do this, and how do I combine learning with working? Answer that honestly, with stories from colleagues who made the same switch. A separate page about work-study programmes, a short video and a low-threshold application work better than a standard job ad. Through [[social-media-marketing|social media]] you reach people who had not considered care yet, but might be very good at it.",
            },
          },
        ],
      },
      {
        name: { nl: "E-health", en: "Health tech" },
        intro: {
          nl: "Voor e-healthbedrijven, healthtech-startups, makers van zorgapps en zorgsoftware, en zorgorganisaties die zelf een digitaal product ontwikkelen.",
          en: "For e-health companies, healthtech startups, makers of care apps and care software, and care organisations developing their own digital product.",
        },
        types: [
          { nl: "E-healthbedrijven", en: "E-health companies" },
          { nl: "Healthtech-startups", en: "Healthtech startups" },
          { nl: "Makers van zorgapps", en: "Care app developers" },
          { nl: "Leveranciers van zorgsoftware", en: "Healthcare software vendors" },
          { nl: "Zorginnovatieteams", en: "Healthcare innovation teams" },
        ],
        useCases: [
          {
            title: { nl: "Van prototype naar MVP", en: "From prototype to MVP" },
            text: {
              nl: "Eerst een klikbaar prototype, dan een MVP die je test met patiënten en zorgverleners. Zo bouw je wat echt gebruikt wordt.",
              en: "First a clickable prototype, then an MVP you test with patients and care professionals. That way you build what actually gets used.",
            },
            service: "web-apps-portals-apps",
            application: "mvp-ontwikkeling",
          },
          {
            title: { nl: "Koppelingen met bestaande zorgsystemen", en: "Integrations with existing care systems" },
            text: {
              nl: "Via API's en, waar beschikbaar, standaarden als FHIR praat je platform met de dossier- en planningssystemen die zorgorganisaties al gebruiken.",
              en: "Through APIs and, where available, standards such as FHIR, your platform talks to the record and scheduling systems care organisations already use.",
            },
            service: "web-apps-portals-apps",
            application: "api-koppelingen",
          },
          {
            title: { nl: "Eén verhaal voor zorg en investeerder", en: "One story for care and investors" },
            text: {
              nl: "Eén kernverhaal, vertaald naar wat zorgverleners, verzekeraars en investeerders willen horen. Zonder wonderclaims.",
              en: "One core story, translated into what care professionals, insurers and investors want to hear. No miracle claims.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Pitchdeck voor je volgende ronde", en: "Pitch deck for your next round" },
            text: {
              nl: "Probleem, oplossing, markt en team in een handvol heldere slides. Ook bruikbaar richting zorginkopers en partners.",
              en: "Problem, solution, market and team in a handful of clear slides. Also useful for healthcare purchasers and partners.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat komt er kijken bij het bouwen van een zorgapp of e-healthplatform?", en: "What is involved in building a care app or e-health platform?" },
            a: {
              nl: "Meer dan bij een gewone app. Je bouwt voor patiënten én zorgverleners, met hoge eisen aan gebruiksgemak, beveiliging en privacy. Wij beginnen klein, met een klikbaar prototype en een [[mvp-ontwikkeling|MVP]] dat je met echte gebruikers test. Let ook op regelgeving: heeft je software een medisch doel, dan kan de MDR van toepassing zijn, en dat laat je vooraf toetsen. Voor The Digital Clinic ontwierpen en bouwden we zo in sprints een platform met portaal en koppelingen.",
              en: "More than for an ordinary app. You are building for patients and care professionals, with high demands on usability, security and privacy. We start small, with a clickable prototype and an [[mvp-ontwikkeling|MVP]] you test with real users. Keep an eye on regulation too: if your software has a medical purpose, the MDR may apply, so have that assessed upfront. For The Digital Clinic we designed and built a platform with a portal and integrations in sprints this way.",
            },
          },
          {
            q: { nl: "Kan een zorgplatform koppelen met bestaande systemen?", en: "Can a care platform connect to existing systems?" },
            a: {
              nl: "Vaak wel. Zorgorganisaties werken met dossiersystemen, planningssoftware en meetapparatuur, en je platform wordt pas echt nuttig als het daarmee praat. Via [[api-koppelingen|API-koppelingen]] en, waar beschikbaar, zorgstandaarden zoals FHIR wisselen we gegevens veilig uit. Hoeveel er mogelijk is, hangt af van wat de andere partij openstelt. Dat zoeken we vroeg in het project uit, zodat je niet halverwege voor een dichte deur staat.",
              en: "Often, yes. Care organisations work with record systems, scheduling software and measuring devices, and your platform only becomes truly useful when it talks to them. Through [[api-koppelingen|API integrations]] and, where available, healthcare standards such as FHIR, we exchange data securely. How much is possible depends on what the other party opens up. We find that out early in the project, so you do not hit a locked door halfway through.",
            },
          },
          {
            q: {
              nl: "Hoe vertel ik het verhaal van een zorginnovatie aan zorgverleners, verzekeraars en investeerders?",
              en: "How do I tell the story of a care innovation to professionals, insurers and investors?",
            },
            a: {
              nl: "Elk publiek wil iets anders horen. Zorgverleners willen weten of het hun werk makkelijker maakt, verzekeraars kijken naar effect en kosten, investeerders naar de markt en het team. Met een heldere [[merkstrategie|positionering]] leg je de kern één keer goed vast, en vertaal je die per doelgroep. Een korte uitlegvideo, een sterk pitchdeck en een website met aparte routes doen de rest. Zonder wonderclaims, want in de zorg prikken mensen daar snel doorheen.",
              en: "Each audience wants to hear something different. Care professionals want to know if it makes their work easier, insurers look at impact and costs, investors at the market and the team. With clear [[merkstrategie|positioning]] you nail down the core once and translate it per audience. A short explainer video, a strong pitch deck and a website with separate routes do the rest. No miracle claims, because in healthcare people see through those quickly.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Fysiotherapiepraktijken", en: "Physiotherapy practices" },
      { nl: "Oefentherapiepraktijken", en: "Exercise therapy practices" },
      { nl: "Huisartsenpraktijken", en: "GP practices" },
      { nl: "Tandartspraktijken", en: "Dental practices" },
      { nl: "Orthodontiepraktijken", en: "Orthodontic practices" },
      { nl: "Mondhygiënisten", en: "Dental hygienists" },
      { nl: "Diëtistenpraktijken", en: "Dietitian practices" },
      { nl: "Logopediepraktijken", en: "Speech therapy practices" },
      { nl: "Podotherapeuten", en: "Podiatrists" },
      { nl: "Verloskundigenpraktijken", en: "Midwifery practices" },
      { nl: "Gezondheidscentra", en: "Health centres" },
      { nl: "Psychologenpraktijken", en: "Psychology practices" },
      { nl: "GGZ-instellingen", en: "Mental health organisations" },
      { nl: "Coaches en therapeuten", en: "Coaches and therapists" },
      { nl: "Privéklinieken", en: "Private clinics" },
      { nl: "Cosmetische klinieken", en: "Cosmetic clinics" },
      { nl: "Zelfstandige behandelcentra", en: "Independent treatment centres" },
      { nl: "Thuiszorgorganisaties", en: "Home care organisations" },
      { nl: "Verpleeg- en verzorgingshuizen", en: "Nursing and care homes" },
      { nl: "Gehandicaptenzorg", en: "Disability care providers" },
      { nl: "Jeugdzorgorganisaties", en: "Youth care organisations" },
      { nl: "Zorgboerderijen", en: "Care farms" },
      { nl: "Welzijnsstichtingen", en: "Wellbeing foundations" },
      { nl: "E-healthbedrijven", en: "E-health companies" },
    ],
  },

  /* ---------- Finance & Fintech ---------- */
  "finance-fintech": {
    segments: [
      {
        name: { nl: "Financieel advies", en: "Financial advice" },
        intro: {
          nl: "Voor hypotheekadviseurs, financieel planners, pensioenadviseurs en onafhankelijke adviespraktijken, zelfstandig of aangesloten bij een formule.",
          en: "For mortgage advisors, financial planners, pension advisors and independent advisory practices, whether independent or part of a franchise.",
        },
        types: [
          { nl: "Hypotheekadviseurs", en: "Mortgage advisors" },
          { nl: "Financieel planners", en: "Financial planners" },
          { nl: "Pensioenadviseurs", en: "Pension advisors" },
          { nl: "Onafhankelijke adviespraktijken", en: "Independent advisory practices" },
          { nl: "Franchisekantoren van adviesformules", en: "Advisory franchise offices" },
        ],
        useCases: [
          {
            title: { nl: "Indicatieve rekentool met afspraakknop", en: "Indicative calculator with booking button" },
            text: {
              nl: "Bezoekers rekenen een eerste indicatie uit met duidelijke aannames en plannen daarna een kennismaking. Geen advies, wel een goede start van het gesprek.",
              en: "Visitors calculate an initial indication with clear assumptions and then book an introductory meeting. Not advice, but a good start to the conversation.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "Een pagina per klantsituatie", en: "A page for every client situation" },
            text: {
              nl: "Starters, scheiden, ondernemers met wisselend inkomen of oversluiten: elke situatie een eigen pagina. Zo vindt iemand precies het antwoord op zijn vraag.",
              en: "First-time buyers, divorce, self-employed with variable income or remortgaging: every situation gets its own page. That way people find exactly the answer to their question.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Een eigen merk naast de ketens", en: "Your own brand next to the chains" },
            text: {
              nl: "Een eigen toon en echte foto's van jou en je team. Zo voelt je kantoor als een adviseur die je kent, niet als een formule.",
              en: "Your own tone and real photos of you and your team. Your office feels like an advisor people know, not like a franchise.",
            },
            service: "branding-rebranding",
            application: "tone-of-voice",
          },
          {
            title: { nl: "Warme opvolging van twijfelaars", en: "Warm follow-up for those still deciding" },
            text: {
              nl: "Wie nog niet klaar is voor een gesprek, krijgt een paar nuttige mails over zijn situatie. Op het juiste moment volgt de afspraak vanzelf.",
              en: "Anyone not ready for a meeting yet gets a few useful emails about their situation. At the right moment, the appointment follows naturally.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe krijg ik als hypotheekadviseur meer aanvragen via mijn website?", en: "How do I get more enquiries through my website as a mortgage advisor?" },
            a: {
              nl: "Door per situatie te laten zien dat je de vraag snapt. Een starter, iemand die gaat scheiden, een ondernemer met wisselend inkomen of een vijftiger die wil oversluiten: elk heeft eigen vragen en verdient een eigen pagina. Daar zet je een heldere uitleg, een indicatieve [[check-tools|rekentool]] en een makkelijke manier om een kennismaking te plannen. Met lokale vindbaarheid op 'hypotheekadviseur' plus je plaatsnaam maak je het geheel af.",
              en: "By showing per situation that you understand the question. A first-time buyer, someone going through a divorce, a self-employed person with variable income or a fifty-something looking to remortgage: each has their own questions and deserves their own page. Add a clear explanation, an indicative [[check-tools|calculator]] and an easy way to book an introductory meeting. Local visibility for 'mortgage advisor' plus your town finishes it off.",
            },
          },
          {
            q: { nl: "Waar let je op bij een rekentool op de website van een adviseur?", en: "What should you watch out for with a calculator on an advisor's website?" },
            a: {
              nl: "Een rekentool geeft een indicatie, geen advies, en dat moet de bezoeker ook zo ervaren. We maken duidelijk welke aannames erin zitten, houden rekenregels en rentes eenvoudig actueel en zetten de uitkomst nooit neer als belofte. De teksten stemmen we af op jouw compliance-afspraken. Een goede tool eindigt met een logische volgende stap: een gesprek met jou. Zo krijg je bezoekers die al over hun situatie hebben nagedacht, en dat maakt het eerste gesprek een stuk prettiger.",
              en: "A calculator gives an indication, not advice, and visitors should experience it that way. We make clear which assumptions are built in, keep calculation rules and rates easy to update and never present the outcome as a promise. We align the copy with your compliance arrangements. A good tool ends with a logical next step: a conversation with you. That way you get visitors who have already thought about their situation, which makes the first meeting a lot easier.",
            },
          },
          {
            q: { nl: "Hoe onderscheid ik me van landelijke ketens en franchiseformules?", en: "How do I stand out from national chains and franchise brands?" },
            a: {
              nl: "Niet door groter te doen dan je bent, maar door te laten zien wie je bent. Een klant kiest een adviseur die hij vertrouwt, en dat begint bij een gezicht, een stem en een herkenbare stijl. Met een eigen [[tone-of-voice|tone of voice]] en echte foto's van jou en je team voelt je website persoonlijk. Lokale verhalen, video's waarin je een lastige vraag uitlegt en reviews van echte klanten doen de rest. Klein zijn kan juist je kracht zijn.",
              en: "Not by acting bigger than you are, but by showing who you are. Clients choose an advisor they trust, and that starts with a face, a voice and a recognisable style. With your own [[tone-of-voice|tone of voice]] and real photos of you and your team, your website feels personal. Local stories, videos where you explain a tricky question and reviews from real clients do the rest. Being small can actually be your strength.",
            },
          },
        ],
      },
      {
        name: { nl: "Verzekeringen", en: "Insurance" },
        intro: {
          nl: "Voor verzekeraars, volmachtbedrijven, assurantiekantoren en gespecialiseerde intermediairs, voor particuliere en zakelijke verzekeringen.",
          en: "For insurers, managing general agents, insurance brokers and specialist intermediaries, for personal and commercial insurance.",
        },
        types: [
          { nl: "Verzekeraars", en: "Insurers" },
          { nl: "Volmachtbedrijven", en: "Managing general agents" },
          { nl: "Assurantiekantoren", en: "Insurance brokers" },
          { nl: "Verzekeringsadviseurs", en: "Insurance advisors" },
          { nl: "Gespecialiseerde intermediairs", en: "Specialist intermediaries" },
        ],
        useCases: [
          {
            title: { nl: "Premie berekenen en direct aanvragen", en: "Calculate a premium and apply" },
            text: {
              nl: "In een paar stappen een premie-indicatie, gevolgd door een aanvraag die de gegevens al heeft. Complexe zakelijke risico's gaan naar een adviseur.",
              en: "A premium indication in a few steps, followed by an application that already holds the details. Complex commercial risks go to an advisor.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Dekking uitgelegd in één oogopslag", en: "Cover explained at a glance" },
            text: {
              nl: "Infographics en vergelijkingstabellen laten zien wat wel en niet gedekt is. Met voorbeelden uit het echte leven in plaats van polistaal.",
              en: "Infographics and comparison tables show what is and is not covered. With real-life examples instead of policy jargon.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
          {
            title: { nl: "Mails op natuurlijke momenten", en: "Emails at natural moments" },
            text: {
              nl: "Een verhuizing, een nieuwe auto of de start van een bedrijf: dan stuur je een relevante check. Niet iedereen dezelfde nieuwsbrief.",
              en: "A house move, a new car or starting a business: that is when you send a relevant check. Not the same newsletter to everyone.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Een route per doelgroep", en: "A route for every audience" },
            text: {
              nl: "Particulier, zzp of mkb: elke doelgroep krijgt een eigen route met uitleg in gewone taal. Zo hoeft niemand door polissen te bladeren die niet voor hem bedoeld zijn.",
              en: "Consumers, freelancers or SMEs: every audience gets its own route with plain-language explanations. Nobody has to wade through policies not meant for them.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe maak je verzekeringen online begrijpelijk?", en: "How do you make insurance understandable online?" },
            a: {
              nl: "Door te beginnen bij de situatie van de klant, niet bij de polisvoorwaarden. Wat gebeurt er als je fiets gestolen wordt, als je bus stilstaat of als je arbeidsongeschikt raakt? Leg dekking en uitsluitingen uit in gewone taal, met voorbeelden. [[infographics|Infographics]] en vergelijkingstabellen maken verschillen tussen pakketten in één oogopslag duidelijk. En een korte [[keuzehulp-quiz|keuzehulp]] helpt mensen die niet weten welke verzekering ze nodig hebben.",
              en: "By starting with the customer's situation, not the policy conditions. What happens if your bike is stolen, your van breaks down or you become unable to work? Explain cover and exclusions in plain language, with examples. [[infographics|Infographics]] and comparison tables show the differences between packages at a glance. And a short [[keuzehulp-quiz|product finder]] helps people who do not know which insurance they need.",
            },
          },
          {
            q: {
              nl: "Kan een klant online een premie berekenen en direct een aanvraag doen?",
              en: "Can customers calculate a premium online and apply straight away?",
            },
            a: {
              nl: "Ja, als de rekenregels helder zijn. We bouwen een premieberekening die in een paar stappen tot een indicatie komt, gevolgd door een aanvraagformulier dat de gegevens al heeft. Voor complexere zakelijke risico's leidt de route naar een adviseur in plaats van een directe afsluiting. De aanvraag kan doorlopen naar je polisadministratie of CRM, afhankelijk van wat dat systeem toestaat. Zo blijft de klant in één flow en hoeft je binnendienst niets over te typen.",
              en: "Yes, as long as the rating rules are clear. We build a premium calculation that reaches an indication in a few steps, followed by an application form that already holds the details. For more complex commercial risks the route leads to an advisor rather than a direct sale. The application can flow into your policy administration or CRM, depending on what that system allows. The customer stays in one flow and your back office does not have to retype anything.",
            },
          },
          {
            q: { nl: "Hoe houden we contact met klanten zonder dat het spam wordt?", en: "How do we stay in touch with customers without it becoming spam?" },
            a: {
              nl: "Door alleen te mailen als het iets toevoegt. Verzekeringen hebben natuurlijke momenten: een verhuizing, een nieuwe auto, gezinsuitbreiding, de start van een bedrijf of de jaarlijkse verlenging. Met [[marketing-automation|marketing automation]] stuur je op zulke momenten een relevante tip of check, in plaats van iedereen dezelfde nieuwsbrief. Klanten waarderen dat, en jij ziet eerder dat iemand onderverzekerd is of een dekking mist.",
              en: "By only emailing when it adds something. Insurance has natural moments: a house move, a new car, a growing family, starting a business or the annual renewal. With [[marketing-automation|marketing automation]] you send a relevant tip or check at those moments, instead of the same newsletter to everyone. Customers appreciate that, and you spot sooner when someone is underinsured or missing cover.",
            },
          },
        ],
      },
      {
        name: { nl: "Fintech", en: "Fintech" },
        intro: {
          nl: "Voor fintech-startups en scale-ups, betaal- en lendingplatforms, beleggings- en spaarapps, insurtech, regtech en makers van financiële software.",
          en: "For fintech startups and scale-ups, payment and lending platforms, investing and savings apps, insurtech, regtech and makers of financial software.",
        },
        types: [
          { nl: "Fintech-startups", en: "Fintech startups" },
          { nl: "Fintech-scale-ups", en: "Fintech scale-ups" },
          { nl: "Betaalplatforms", en: "Payment platforms" },
          { nl: "Beleggings- en spaarapps", en: "Investing and savings apps" },
          { nl: "Insurtechbedrijven", en: "Insurtech companies" },
          { nl: "Regtechbedrijven", en: "Regtech companies" },
          { nl: "Leveranciers van financiële software", en: "Financial software vendors" },
        ],
        useCases: [
          {
            title: { nl: "Onboarding die veilig voelt", en: "Onboarding that feels secure" },
            text: {
              nl: "Uitleggen waarom je iets vraagt, laten zien hoeveel stappen er nog komen en de voortgang bewaren. Elke overbodige stap kost aanmeldingen.",
              en: "Explain why you ask for something, show how many steps are left and save progress. Every unnecessary step costs sign-ups.",
            },
            service: "web-apps-portals-apps",
            application: "ux-ui-app-design",
          },
          {
            title: { nl: "Pitchdeck voor je investeringsronde", en: "Pitch deck for your funding round" },
            text: {
              nl: "Een helder verhaal in een handvol slides, met een uitstraling die professioneel oogt. De inhoud overtuigt, het ontwerp zorgt dat hij gelezen wordt.",
              en: "A clear story in a handful of slides, with a look that feels professional. The substance convinces, the design makes sure it gets read.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Antwoorden die AI-assistenten oppikken", en: "Answers AI assistants pick up" },
            text: {
              nl: "Feitelijke uitleg over hoe je product werkt en wat het kost, zo opgebouwd dat Google en AI-assistenten het begrijpen.",
              en: "Factual explanations of how your product works and what it costs, structured so Google and AI assistants understand them.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
          {
            title: { nl: "Productwebsite met heldere prijzen", en: "Product website with clear pricing" },
            text: {
              nl: "Een snelle site met uitleg per functie, eerlijke prijzen en een duidelijke aanmeldroute. Je team past hem zelf aan als het product verandert.",
              en: "A fast site with explanations per feature, honest pricing and a clear sign-up route. Your team updates it themselves when the product changes.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe ontwerp je een onboarding die veilig voelt én snel gaat?", en: "How do you design onboarding that feels secure and is quick?" },
            a: {
              nl: "Door uit te leggen waarom je iets vraagt. Identificatie en klantonderzoek zijn voor veel financiële diensten verplicht, maar gebruikers haken af als ze niet snappen waarom ze hun paspoort moeten scannen. Een goede [[ux-ui-app-design|UX]] laat zien hoeveel stappen er nog komen, bewaart de voortgang en geeft heldere foutmeldingen. Identiteitsverificatie kan via een gespecialiseerde partij worden ingebouwd. We testen de flow met echte gebruikers, want elke overbodige stap kost aanmeldingen.",
              en: "By explaining why you ask for something. Identification and customer due diligence are mandatory for many financial services, but users drop out if they do not understand why they have to scan their passport. Good [[ux-ui-app-design|UX]] shows how many steps are left, saves progress and gives clear error messages. Identity verification can be built in through a specialist provider. We test the flow with real users, because every unnecessary step costs sign-ups.",
            },
          },
          {
            q: { nl: "Wat heb je qua merk en materiaal nodig voor een investeringsronde?", en: "What brand and materials do you need for an investment round?" },
            a: {
              nl: "Minder dan je denkt, maar het moet wel kloppen. Een helder verhaal over het probleem, je oplossing en waarom jullie het team zijn om het te bouwen. Een [[presentaties-pitchdecks|pitchdeck]] dat dat verhaal in een handvol slides vertelt, een website die professioneel oogt en een productdemo of klikbaar prototype. Een uitgewerkt merk helpt, want investeerders zien veel decks voorbijkomen. Maar uiteindelijk overtuigt de inhoud, en daar beginnen we ook mee.",
              en: "Less than you might think, but it has to add up. A clear story about the problem, your solution and why your team is the one to build it. A [[presentaties-pitchdecks|pitch deck]] that tells that story in a handful of slides, a website that looks professional and a product demo or clickable prototype. A well-developed brand helps, because investors see a lot of decks. But in the end the substance convinces, and that is where we start too.",
            },
          },
          {
            q: { nl: "Hoe word je als fintech vindbaar in Google en AI-assistenten?", en: "How does a fintech become findable in Google and AI assistants?" },
            a: {
              nl: "Door de vragen te beantwoorden die je doelgroep stelt voordat ze een product kiest. Hoe werkt een betaalverzoek, wat kost een zakelijke rekening, wat is het verschil tussen sparen en beleggen? Heldere, feitelijke antwoorden met [[structured-data|structured data]] worden beter begrepen door Google en maken meer kans om door AI-assistenten gebruikt te worden. Met [[aeo|AEO]] richten we die content daar specifiek op in. Garanties op posities geven we niet, wel een aanpak die je kunt meten.",
              en: "By answering the questions your audience asks before choosing a product. How does a payment request work, what does a business account cost, what is the difference between saving and investing? Clear, factual answers with [[structured-data|structured data]] are better understood by Google and more likely to be used by AI assistants. With [[aeo|AEO]] we tailor that content specifically for them. We do not guarantee positions, but we do give you an approach you can measure.",
            },
          },
        ],
      },
      {
        name: { nl: "Vermogensbeheer", en: "Wealth management" },
        intro: {
          nl: "Voor vermogensbeheerders, private banks, family offices, beleggingsfondsen en beleggingsadviseurs, voor particuliere en institutionele beleggers.",
          en: "For wealth managers, private banks, family offices, investment funds and investment advisors, serving private and institutional investors.",
        },
        types: [
          { nl: "Vermogensbeheerders", en: "Wealth managers" },
          { nl: "Private banks", en: "Private banks" },
          { nl: "Family offices", en: "Family offices" },
          { nl: "Beleggingsfondsen", en: "Investment funds" },
          { nl: "Beleggingsadviseurs", en: "Investment advisors" },
        ],
        useCases: [
          {
            title: { nl: "Klantportaal met portefeuille-overzicht", en: "Client portal with portfolio overview" },
            text: {
              nl: "Beveiligd inloggen met tweestapsverificatie, met portefeuille, rapportages en documenten op één plek.",
              en: "Secure login with two-factor authentication, with portfolio, reports and documents in one place.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Factsheet en kwartaalrapportage als sjabloon", en: "Factsheet and quarterly report template" },
            text: {
              nl: "Een vaste opbouw met heldere grafieken en ruimte voor de verplichte informatie. Je team vult elk kwartaal alleen de cijfers aan.",
              en: "A fixed structure with clear charts and room for the mandatory information. Your team only fills in the figures each quarter.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
          {
            title: { nl: "Positionering zonder rendementsbeloftes", en: "Positioning without promising returns" },
            text: {
              nl: "Je filosofie, je mensen en je manier van werken centraal. Rustig en zelfverzekerd, met de disclaimers van je compliance-team op de juiste plek.",
              en: "Your philosophy, your people and your way of working at the centre. Calm and confident, with your compliance team's disclaimers in the right place.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "LinkedIn-content voor vermogende ondernemers", en: "LinkedIn content for wealthy entrepreneurs" },
            text: {
              nl: "Gerichte campagnes voor ondernemers en family offices, met inhoud in plaats van beloftes. Een marktvisie of uitleg over vermogensoverdracht doet meer dan een glimmende advertentie.",
              en: "Targeted campaigns for entrepreneurs and family offices, with substance instead of promises. A market view or an explanation of wealth transfer does more than a glossy ad.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe positioneer je een vermogensbeheerder zonder rendement te beloven?", en: "How do you position a wealth manager without promising returns?" },
            a: {
              nl: "Door te laten zien hoe je werkt, niet wat het oplevert. Je beleggingsfilosofie, de mensen achter de portefeuilles, je manier van rapporteren en hoe je met risico omgaat: daarop kiezen klanten een vermogensbeheerder. Met een doordachte [[merkstrategie|positionering]] en een rustige, zelfverzekerde uitstraling wek je vertrouwen zonder overdreven claims. Rendementen uit het verleden presenteren we alleen zoals de regels dat vragen, met de disclaimers die jouw compliance-team aanlevert.",
              en: "By showing how you work, not what it will deliver. Your investment philosophy, the people behind the portfolios, how you report and how you handle risk: that is what clients choose a wealth manager on. With well-considered [[merkstrategie|positioning]] and a calm, confident look you build trust without exaggerated claims. We only present past returns in the way the rules require, with the disclaimers your compliance team supplies.",
            },
          },
          {
            q: { nl: "Kunnen klanten hun portefeuille in een eigen omgeving bekijken?", en: "Can clients view their portfolio in their own environment?" },
            a: {
              nl: "Ja. In een beveiligd [[klantportaal|klantportaal]] zien klanten hun portefeuille, rapportages en documenten, met tweestapsverificatie en duidelijke rechten. Gegevens kunnen via een koppeling uit je portefeuillesysteem of van de depotbank komen, afhankelijk van wat die aanbieden. Met overzichtelijke [[dashboards|dashboards]] maak je spreiding, rendement en kosten begrijpelijk, ook voor klanten die niet dagelijks met beleggen bezig zijn. Dat scheelt je relatiebeheerders vragen en maakt je dienstverlening zichtbaar.",
              en: "Yes. In a secure [[klantportaal|client portal]] clients see their portfolio, reports and documents, with two-factor authentication and clear permissions. Data can come through an integration from your portfolio system or the custodian, depending on what they offer. With clear [[dashboards|dashboards]] you make allocation, returns and costs understandable, even for clients who do not think about investing every day. That saves your relationship managers questions and makes your service visible.",
            },
          },
          {
            q: { nl: "Hoe ziet een goede factsheet of kwartaalrapportage eruit?", en: "What does a good factsheet or quarterly report look like?" },
            a: {
              nl: "Rustig, consistent en snel te scannen. Een belegger wil in een halve minuut zien hoe het ervoor staat, en daarna pas de details. We ontwerpen een vaste opbouw met heldere [[infographics|grafieken]], een korte toelichting in gewone taal en ruimte voor de verplichte informatie. Als sjabloon, zodat je team elk kwartaal alleen nog de cijfers aanvult. Waar het kan, vullen we grafieken automatisch vanuit je data. Het resultaat werkt als pdf, in print en op je website.",
              en: "Calm, consistent and quick to scan. Investors want to see how things stand in half a minute, and only then the details. We design a fixed structure with clear [[infographics|charts]], a short explanation in plain language and room for the mandatory information. As a template, so your team only has to fill in the figures each quarter. Where possible, charts are filled automatically from your data. The result works as a PDF, in print and on your website.",
            },
          },
        ],
      },
      {
        name: { nl: "Financiering", en: "Lending & financing" },
        intro: {
          nl: "Voor kredietverstrekkers, leasemaatschappijen, crowdfundingplatforms, factoringbedrijven en financieringsadviseurs voor het mkb.",
          en: "For lenders, leasing companies, crowdfunding platforms, factoring companies and SME financing advisors.",
        },
        types: [
          { nl: "Kredietverstrekkers", en: "Lenders" },
          { nl: "Banken", en: "Banks" },
          { nl: "Leasemaatschappijen", en: "Leasing companies" },
          { nl: "Crowdfundingplatforms", en: "Crowdfunding platforms" },
          { nl: "Factoringbedrijven", en: "Factoring companies" },
          { nl: "Financieringsadviseurs", en: "Financing advisors" },
          { nl: "Incasso- en creditmanagementbureaus", en: "Debt collection and credit management agencies" },
        ],
        useCases: [
          {
            title: { nl: "Aanvraagportaal in behapbare stappen", en: "Application portal in manageable steps" },
            text: {
              nl: "Cijfers en documenten uploaden in een portaal, voortgang opslaan en de status van de aanvraag volgen. Je team hoeft niet achter ontbrekende stukken aan te bellen.",
              en: "Upload figures and documents in a portal, save progress and follow the status of the application. Your team no longer has to chase missing paperwork.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Quickscan voor financieringskans", en: "Quick scan for financing prospects" },
            text: {
              nl: "Een paar vragen geven een eerste indicatie of financiering kansrijk is. De stap naar een echte aanvraag wordt kleiner.",
              en: "A few questions give an initial indication of whether financing is likely. The step to a real application gets smaller.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "Aanvragen automatisch in je CRM", en: "Applications straight into your CRM" },
            text: {
              nl: "Aanvragen, documenten en statusupdates gaan automatisch naar je CRM of acceptatieomgeving. Met logging, zodat je terugziet wie wat deed.",
              en: "Applications, documents and status updates flow automatically into your CRM or credit environment. With logging, so you can trace who did what.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Zichtbaar als de vraag acuut is", en: "Visible when the need is urgent" },
            text: {
              nl: "Zoekt een ondernemer op 'machine financieren' of 'werkkapitaal voor groei', dan sta je erbij met Google Ads. Precies op het moment dat hij een oplossing zoekt.",
              en: "When an entrepreneur searches for 'financing a machine' or 'working capital for growth', Google Ads puts you right there. At the exact moment they need a solution.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
        ],
        faqs: [
          {
            q: {
              nl: "Hoe zet je een financieringsaanvraag online zonder dat mensen afhaken?",
              en: "How do you put a financing application online without people dropping out?",
            },
            a: {
              nl: "Door hem op te knippen in behapbare stappen. Eerst een paar simpele vragen die direct laten zien of financiering kansrijk is, daarna pas de cijfers en documenten. Laat aanvragers hun voortgang opslaan en later verdergaan, want niemand heeft zijn jaarcijfers meteen bij de hand. In een [[klantportaal|portaal]] uploaden ze stukken en zien ze de status van hun aanvraag. Zo houd je overzicht en hoeft je team niet achter ontbrekende documenten aan te bellen.",
              en: "By breaking it into manageable steps. First a few simple questions that show right away whether financing is likely, and only then the figures and documents. Let applicants save their progress and continue later, because nobody has their annual accounts to hand right away. In a [[klantportaal|portal]] they upload documents and see the status of their application. You keep the overview and your team does not have to chase missing paperwork by phone.",
            },
          },
          {
            q: {
              nl: "Kan de aanvraag direct in ons acceptatiesysteem of CRM terechtkomen?",
              en: "Can the application go straight into our credit or CRM system?",
            },
            a: {
              nl: "Dat kan meestal. Via [[api-koppelingen|API-koppelingen]] of [[workflow-automatisering|automatisering]] sturen we aanvragen, documenten en statusupdates door naar je CRM of acceptatieomgeving. Hoe ver dat gaat, hangt af van wat je systemen toelaten. Soms is een volledige koppeling slim, soms is een automatische melding met een nette samenvatting al een flinke stap vooruit. We bouwen het met aandacht voor beveiliging en logging, zodat je altijd terugziet wie wat heeft gedaan.",
              en: "Usually, yes. Through [[api-koppelingen|API integrations]] or [[workflow-automatisering|automation]] we pass applications, documents and status updates to your CRM or credit environment. How far that goes depends on what your systems allow. Sometimes a full integration makes sense, sometimes an automatic notification with a neat summary is already a big step forward. We build it with attention to security and logging, so you can always trace who did what.",
            },
          },
          {
            q: { nl: "Hoe bereik ik ondernemers die financiering zoeken?", en: "How do I reach entrepreneurs looking for financing?" },
            a: {
              nl: "Ondernemers zoeken vaak op hun probleem: 'machine financieren', 'werkkapitaal voor groei' of 'bus leasen of kopen'. Content die die vragen eerlijk beantwoordt, ook wanneer jouw product níet past, bouwt vertrouwen en vindbaarheid op. Met [[google-ads|Google Ads]] ben je zichtbaar op het moment dat de vraag acuut is, en via LinkedIn bereik je ondernemers en financieel managers die verder vooruitkijken. Een check-tool die een eerste indicatie geeft, maakt de stap naar een aanvraag kleiner.",
              en: "Entrepreneurs often search for their problem: 'financing a machine', 'working capital for growth' or 'lease or buy a van'. Content that answers those questions honestly, including when your product is not a fit, builds trust and findability. With [[google-ads|Google Ads]] you are visible when the need is urgent, and on LinkedIn you reach entrepreneurs and finance managers who plan further ahead. A check tool that gives an initial indication makes the step to applying smaller.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Hypotheekadviseurs", en: "Mortgage advisors" },
      { nl: "Financieel planners", en: "Financial planners" },
      { nl: "Pensioenadviseurs", en: "Pension advisors" },
      { nl: "Verzekeringsadviseurs", en: "Insurance advisors" },
      { nl: "Assurantiekantoren", en: "Insurance brokers" },
      { nl: "Verzekeraars", en: "Insurers" },
      { nl: "Volmachtbedrijven", en: "Managing general agents" },
      { nl: "Banken", en: "Banks" },
      { nl: "Private banks", en: "Private banks" },
      { nl: "Vermogensbeheerders", en: "Wealth managers" },
      { nl: "Family offices", en: "Family offices" },
      { nl: "Beleggingsfondsen", en: "Investment funds" },
      { nl: "Fintech-startups", en: "Fintech startups" },
      { nl: "Betaalplatforms", en: "Payment platforms" },
      { nl: "Kredietverstrekkers", en: "Lenders" },
      { nl: "Leasemaatschappijen", en: "Leasing companies" },
      { nl: "Crowdfundingplatforms", en: "Crowdfunding platforms" },
      { nl: "Factoringbedrijven", en: "Factoring companies" },
      { nl: "Insurtechbedrijven", en: "Insurtech companies" },
      { nl: "Regtechbedrijven", en: "Regtech companies" },
      { nl: "Leveranciers van financiële software", en: "Financial software vendors" },
      { nl: "Incasso- en creditmanagementbureaus", en: "Debt collection and credit management agencies" },
    ],
  },

  /* ---------- Travel & Leisure ---------- */
  "travel-leisure": {
    segments: [
      {
        name: { nl: "Hotels & B&B's", en: "Hotels & B&Bs" },
        intro: {
          nl: "Voor hotels, boutique hotels, B&B's, hostels, pensions en gastenverblijven, van vijf kamers tot een kleine hotelgroep.",
          en: "For hotels, boutique hotels, B&Bs, hostels, guesthouses and holiday lodgings, from five rooms to a small hotel group.",
        },
        types: [
          { nl: "Hotels", en: "Hotels" },
          { nl: "Boutique hotels", en: "Boutique hotels" },
          { nl: "B&B's", en: "B&Bs" },
          { nl: "Hostels", en: "Hostels" },
          { nl: "Pensions", en: "Guesthouses" },
          { nl: "Gastenverblijven", en: "Holiday lodgings" },
        ],
        useCases: [
          {
            title: { nl: "Meertalige hotelwebsite die direct boekt", en: "Multilingual hotel website that books direct" },
            text: {
              nl: "Grote foto's per kamertype, eerlijke info en een boekknop die je nooit hoeft te zoeken. In de talen van je gasten.",
              en: "Large photos per room type, honest information and a book button you never have to look for. In your guests' languages.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
          {
            title: { nl: "E-mailflows voor en na verblijf", en: "Email flows before and after the stay" },
            text: {
              nl: "Praktische info voor aankomst, een reviewverzoek na vertrek en later een seizoensaanbod. Automatisch op basis van de boeking.",
              en: "Practical info before arrival, a review request after departure and a seasonal offer later on. Automatically, based on the booking.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Boekingswidget voor kamers en arrangementen", en: "Booking widget for rooms and packages" },
            text: {
              nl: "Een boekingsmodule op je eigen site, gekoppeld aan je reserveringssysteem waar dat kan. Zo boeken gasten vaker direct bij jou.",
              en: "A booking module on your own site, connected to your reservation system where possible. That way more guests book directly with you.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Omgevingstips die gasten vinden", en: "Local tips guests can find" },
            text: {
              nl: "Wandelroutes, restaurants en uitjes in de buurt als artikelen op je eigen site. Goed voor Google, AI-assistenten en gasten die al aan het plannen zijn.",
              en: "Walking routes, restaurants and outings nearby as articles on your own site. Good for Google, AI assistants and guests who are already planning.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat maakt een hotelwebsite echt goed?", en: "What makes a hotel website truly good?" },
            a: {
              nl: "Snelheid, sfeer en een boekknop die je nooit hoeft te zoeken. Gasten bekijken je kamers op hun telefoon, vaak met een boekingsplatform open in een ander tabblad. Geef ze dan grote foto's per kamertype, eerlijke informatie over ontbijt, parkeren en inchecken, en tips voor de omgeving die laten zien dat je de streek kent. Een [[meertalige-website|meertalige website]] en een boekingsflow zonder omwegen maken het verschil tussen 'mooi' en 'geboekt'.",
              en: "Speed, atmosphere and a book button you never have to look for. Guests browse your rooms on their phones, often with a booking platform open in another tab. So give them large photos per room type, honest information about breakfast, parking and check-in, and local tips that show you know the area. A [[meertalige-website|multilingual website]] and a booking flow without detours make the difference between 'lovely' and 'booked'.",
            },
          },
          {
            q: { nl: "Hoe zorg ik dat gasten terugkomen?", en: "How do I get guests to come back?" },
            a: {
              nl: "Door contact te houden zonder op te dringen. Met een paar slimme [[e-mailmarketing|e-mailflows]] stuur je voor aankomst praktische info en een tip voor een diner in de buurt, na vertrek een bedankje met de vraag om een review, en later een seizoensaanbieding voor wie terug wil komen. Dat gaat automatisch, op basis van hun boeking. Gasten die zich welkom voelden, boeken een volgende keer liever direct bij jou. Mits ze daar toestemming voor gaven, uiteraard.",
              en: "By staying in touch without being pushy. With a few smart [[e-mailmarketing|email flows]] you send practical info and a tip for dinner nearby before arrival, a thank-you with a review request after departure, and later a seasonal offer for those who want to return. It all runs automatically, based on their booking. Guests who felt welcome would rather book directly with you next time. Provided they opted in, of course.",
            },
          },
          {
            q: { nl: "Hoe verkoop ik arrangementen en extra's online?", en: "How do I sell packages and extras online?" },
            a: {
              nl: "Door ze een eigen plek te geven in plaats van ze weg te stoppen onder 'overig'. Een fietsarrangement, een romantisch weekend of een vergaderpakket verdient een eigen [[landingspaginas|landingspagina]] met foto's, inhoud en een directe boekoptie. Extra's zoals ontbijt op bed of een late check-out bied je slim aan tijdens of na de boeking. Cadeaubonnen online verkopen kan ook. Zo verdien je meer per gast, zonder dat het als opdringerig voelt.",
              en: "By giving them their own place instead of hiding them under 'other'. A cycling package, a romantic weekend or a meeting package deserves its own [[landingspaginas|landing page]] with photos, details and a direct booking option. Extras such as breakfast in bed or a late check-out are offered smartly during or after booking. Selling gift vouchers online is possible too. That way you earn more per guest, without it feeling pushy.",
            },
          },
        ],
      },
      {
        name: { nl: "Vakantieparken & campings", en: "Holiday parks & campsites" },
        intro: {
          nl: "Voor campings, vakantieparken, glampings, groepsaccommodaties, minicampings en verhuurders van vakantiehuizen en chalets.",
          en: "For campsites, holiday parks, glamping sites, group accommodation, small farm campsites and rental companies for holiday homes and chalets.",
        },
        types: [
          { nl: "Vakantieparken", en: "Holiday parks" },
          { nl: "Campings", en: "Campsites" },
          { nl: "Glampings", en: "Glamping sites" },
          { nl: "Minicampings", en: "Small farm campsites" },
          { nl: "Groepsaccommodaties", en: "Group accommodation" },
          { nl: "Vakantiehuisverhuurders", en: "Holiday home rental companies" },
          { nl: "Jachthavens", en: "Marinas" },
        ],
        useCases: [
          {
            title: { nl: "Interactieve parkplattegrond met beschikbaarheid", en: "Interactive park map with availability" },
            text: {
              nl: "Gasten klikken op een plek of chalet en zien ligging, foto's en beschikbaarheid. Gekoppeld aan je reserveringssysteem waar dat kan.",
              en: "Guests click on a pitch or chalet and see its location, photos and availability. Linked to your reservation system where possible.",
            },
            service: "configurators-lead-tools-widgets",
            application: "website-widgets",
          },
          {
            title: { nl: "Digitale gastengids zonder download", en: "Digital guest guide without a download" },
            text: {
              nl: "Openingstijden, activiteiten en broodjes bestellen in één gids, in meerdere talen. Als web-app, of als echte app als je verder wilt.",
              en: "Opening hours, activities and ordering bread rolls in one guide, in several languages. As a web app, or a full app if you want to go further.",
            },
            service: "web-apps-portals-apps",
            application: "mobiele-app",
          },
          {
            title: { nl: "Campagnes voor voor- en naseizoen", en: "Campaigns for the shoulder seasons" },
            text: {
              nl: "Gericht op stellen, wandelaars en fietsers die juist dan op pad willen. Met beelden van je park in de lente en de herfst.",
              en: "Aimed at couples, walkers and cyclists who like to travel precisely then. With images of your park in spring and autumn.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Dronevideo van park en omgeving", en: "Drone video of park and surroundings" },
            text: {
              nl: "Bos, water, velden en voorzieningen in één vloeiend shot. Laat gasten zien waar ze terechtkomen, nog voor ze boeken.",
              en: "Woods, water, fields and facilities in one smooth shot. Shows guests where they will be staying before they book.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe help ik gasten de juiste plek of accommodatie te kiezen?", en: "How do I help guests choose the right pitch or accommodation?" },
            a: {
              nl: "Met een interactieve parkplattegrond en goede filters. Gasten willen zien waar de plek ligt ten opzichte van het sanitair, de speeltuin of juist de rust van de bosrand. Per accommodatietype horen foto's, een plattegrond en een eerlijke beschrijving. Gekoppeld aan je reserveringssysteem zie je direct wat beschikbaar is. Een korte [[keuzehulp-quiz|keuzehulp]] helpt twijfelaars: met of zonder kinderen, hond mee, luxe of basic? Zo boekt iedereen de plek die bij hem past.",
              en: "With an interactive park map and good filters. Guests want to see where a pitch is in relation to the toilet block, the playground or the quiet edge of the woods. Each accommodation type needs photos, a floor plan and an honest description. Linked to your reservation system, availability shows right away. A short [[keuzehulp-quiz|quiz]] helps those in doubt: kids or no kids, bringing the dog, luxury or basic? That way everyone books the spot that suits them.",
            },
          },
          {
            q: { nl: "Hoe vul ik het voor- en naseizoen beter?", en: "How do I fill the shoulder seasons better?" },
            a: {
              nl: "Door je te richten op mensen die juist dan op pad willen: stellen zonder schoolgaande kinderen, wandelaars, fietsers en vriendengroepen. Maak arrangementen die bij die periode passen en vertel erover met beelden van je park in de lente of de herfst. Met [[meta-ads|Meta Ads]] bereik je die doelgroep gericht, en via e-mail informeer je eerdere gasten als eerste. Het blijft een kwestie van testen wat werkt, maar dan wel met cijfers in plaats van gevoel.",
              en: "By targeting people who like to travel precisely then: couples without school-age children, walkers, cyclists and groups of friends. Create packages that suit that time of year and tell the story with images of your park in spring or autumn. With [[meta-ads|Meta Ads]] you reach that audience in a targeted way, and by email you let previous guests know first. It is still a matter of testing what works, but with figures instead of gut feeling.",
            },
          },
          {
            q: { nl: "Is een digitale gastengids of app handig voor een park?", en: "Is a digital guest guide or app useful for a holiday park?" },
            a: {
              nl: "Vaak wel. Gasten willen tijdens hun verblijf snel weten hoe laat het zwembad opengaat, wat er te doen is als het regent en of de broodjes voor morgen al besteld kunnen worden. Een digitale gastengids als web-app werkt zonder download, in meerdere talen, en je team werkt hem eenvoudig bij. Wil je verder, met bestellen, activiteiten boeken of pushberichten, dan is een [[mobiele-app|app]] een optie. We kijken eerst wat je gasten echt gebruiken.",
              en: "Often, yes. During their stay, guests want to know quickly when the pool opens, what to do when it rains and whether tomorrow's bread rolls can already be ordered. A digital guest guide as a web app works without a download, in several languages, and is easy for your team to update. If you want to go further, with ordering, activity bookings or push notifications, an [[mobiele-app|app]] is an option. We first look at what your guests actually use.",
            },
          },
        ],
      },
      {
        name: { nl: "Reisorganisaties", en: "Tour operators" },
        intro: {
          nl: "Voor reisorganisaties, touroperators, reisbureaus, specialisten in groeps-, maatwerk- en avonturenreizen en zakelijke reisorganisaties.",
          en: "For travel companies, tour operators, travel agencies, specialists in group, tailor-made and adventure travel, and business travel organisers.",
        },
        types: [
          { nl: "Reisorganisaties", en: "Travel companies" },
          { nl: "Touroperators", en: "Tour operators" },
          { nl: "Reisbureaus", en: "Travel agencies" },
          { nl: "Groepsreisorganisaties", en: "Group travel organisers" },
          { nl: "Specialisten in maatwerkreizen", en: "Tailor-made travel specialists" },
          { nl: "Zakelijke reisorganisaties", en: "Business travel organisers" },
        ],
        useCases: [
          {
            title: { nl: "Reisplanner voor maatwerkreizen", en: "Trip planner for tailor-made travel" },
            text: {
              nl: "Klanten kiezen bestemmingen, accommodatieniveau en reisduur en zien een eerste prijsindicatie. Je reisadviseur krijgt een aanvraag met alle wensen erin.",
              en: "Customers choose destinations, accommodation level and duration and see an initial price indication. Your travel advisor receives an enquiry with every wish included.",
            },
            service: "configurators-lead-tools-widgets",
            application: "productconfigurator",
          },
          {
            title: { nl: "Reisverhalen die naar boekingen leiden", en: "Travel stories that lead to bookings" },
            text: {
              nl: "Blogs over de beste reistijd, de mooiste route of wat je moet inpakken, die eindigen bij jouw reis daarheen.",
              en: "Blogs about the best time to go, the most beautiful route or what to pack, ending at your trip there.",
            },
            service: "content-marketing-online-ads",
            application: "copywriting-blogs",
          },
          {
            title: { nl: "Aanbod rechtstreeks uit je reserveringssysteem", en: "Offers straight from your reservation system" },
            text: {
              nl: "Reizen, prijzen en vertrekdata komen via een koppeling op de site, zodat alles altijd klopt. Geen handwerk bij elke prijswijziging.",
              en: "Trips, prices and departure dates reach the site through an integration, so everything is always correct. No manual work with every price change.",
            },
            service: "web-apps-portals-apps",
            application: "api-koppelingen",
          },
          {
            title: { nl: "Technische SEO voor groot aanbod", en: "Technical SEO for a large offering" },
            text: {
              nl: "Honderden reispagina's die goed vindbaar blijven en elkaar niet in de weg zitten. Met filters waarin Google niet verdwaalt.",
              en: "Hundreds of trip pages that stay findable without competing with each other. With filters Google does not get lost in.",
            },
            service: "seo-aeo-geo",
            application: "technische-seo",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe maak je een reiswebsite met veel aanbod overzichtelijk?", en: "How do you keep a travel website with a large offering easy to navigate?" },
            a: {
              nl: "Met een structuur die aansluit bij hoe reizigers dromen en zoeken: op bestemming, type reis, reisduur en budget. Goede filters en een zoekfunctie die tikfouten vergeeft, helpen daarbij. Reisinformatie, prijzen en vertrekdata kunnen vaak via een koppeling uit je reserveringssysteem komen, zodat de site altijd klopt. Met [[technische-seo|technische SEO]] zorgen we dat al die pagina's goed vindbaar blijven en elkaar niet in de weg zitten. Overzicht voor de reiziger, rust voor je team.",
              en: "With a structure that matches how travellers dream and search: by destination, type of trip, duration and budget. Good filters and a search that forgives typos help. Trip details, prices and departure dates can often come from your reservation system through an integration, so the site is always accurate. With [[technische-seo|technical SEO]] we make sure all those pages stay findable and do not compete with each other. Clarity for the traveller, peace of mind for your team.",
            },
          },
          {
            q: { nl: "Kan een klant online zelf een maatwerkreis samenstellen?", en: "Can customers put together a tailor-made trip online themselves?" },
            a: {
              nl: "Ja, tot op zekere hoogte. Met een reisplanner of [[productconfigurator|configurator]] kiest de klant bestemmingen, accommodatieniveau, activiteiten en reisduur, en ziet hij een eerste prijsindicatie. Het resultaat is geen kant-en-klare boeking, maar een aanvraag met precies de wensen die je reisadviseur nodig heeft. Dat scheelt een lange mailwisseling en maakt het eerste gesprek concreter. Bovendien vinden reizigers het gewoon leuk om alvast aan hun droomreis te puzzelen.",
              en: "Yes, up to a point. With a trip planner or [[productconfigurator|configurator]] customers choose destinations, accommodation level, activities and duration, and see an initial price indication. The result is not a finished booking, but an enquiry with exactly the wishes your travel advisor needs. That saves a long email exchange and makes the first conversation more concrete. And travellers simply enjoy piecing together their dream trip.",
            },
          },
          {
            q: { nl: "Hoe zorg ik dat mijn reisverhalen ook nieuwe boekingen opleveren?", en: "How do I make my travel stories bring in new bookings?" },
            a: {
              nl: "Door verhalen en aanbod aan elkaar te knopen. Een blog over de mooiste route door de Dolomieten wordt pas echt waardevol als hij eindigt bij je wandelreis daar. Schrijf vanuit de vragen die reizigers echt stellen, zoals de beste reistijd, wat je moet inpakken of hoe je er komt. Zulke [[copywriting-blogs|reisverhalen]] helpen in Google en maken meer kans om door AI-assistenten aangehaald te worden. En ze laten zien dat je de bestemming écht kent.",
              en: "By linking stories and offers together. A blog about the most beautiful route through the Dolomites only becomes truly valuable when it ends at your walking holiday there. Write from the questions travellers actually ask, such as the best time to go, what to pack or how to get there. [[copywriting-blogs|Travel stories]] like that help on Google and are more likely to be cited by AI assistants. And they show you really know the destination.",
            },
          },
        ],
      },
      {
        name: { nl: "Recreatie & attracties", en: "Attractions & activities" },
        intro: {
          nl: "Voor attractieparken, dierenparken, musea, escape rooms, outdoor- en activiteitenaanbieders, wellnesscentra en andere dagjes uit.",
          en: "For theme parks, zoos, museums, escape rooms, outdoor and activity providers, wellness centres and other days out.",
        },
        types: [
          { nl: "Attractieparken", en: "Theme parks" },
          { nl: "Dierenparken", en: "Zoos and wildlife parks" },
          { nl: "Musea", en: "Museums" },
          { nl: "Escape rooms", en: "Escape rooms" },
          { nl: "Outdoor- en activiteitenbedrijven", en: "Outdoor and activity companies" },
          { nl: "Wellnesscentra", en: "Wellness centres" },
        ],
        useCases: [
          {
            title: { nl: "Ticketflow zonder afhakers", en: "A ticket flow people finish" },
            text: {
              nl: "We meten waar bezoekers afhaken bij het kopen van een ticket of tijdslot en verbeteren dat stap voor stap.",
              en: "We measure where visitors drop out when buying a ticket or time slot and improve it step by step.",
            },
            service: "automation-funnels",
            application: "conversie-optimalisatie",
          },
          {
            title: { nl: "Korte video's voor TikTok en Instagram", en: "Short videos for TikTok and Instagram" },
            text: {
              nl: "Een gil in de achtbaan, een giraf die om de hoek kijkt: korte beelden die laten zien hoe leuk het is.",
              en: "A scream on the rollercoaster, a giraffe peeking round the corner: short clips that show how much fun it is.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Groepscalculator voor scholen en bedrijven", en: "Group calculator for schools and companies" },
            text: {
              nl: "Schoolreisjes, bedrijfsuitjes en verenigingen kiezen zelf programma en aantal en zien direct een prijsindicatie. Jij krijgt complete aanvragen voor de rustige dagen.",
              en: "School trips, company outings and clubs choose a programme and group size and see a price indication straight away. You receive complete enquiries for the quieter days.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Meer bereik rond schoolvakanties", en: "More reach around school holidays" },
            text: {
              nl: "TikTok- en Meta-campagnes in de weken dat gezinnen een dagje uit plannen. Met een budget dat je per periode op- en afschaalt.",
              en: "TikTok and Meta campaigns in the weeks families plan a day out. With a budget you scale up or down per period.",
            },
            service: "content-marketing-online-ads",
            application: "tiktok-ads",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe verkoop ik meer tickets via mijn eigen website?", en: "How do I sell more tickets through my own website?" },
            a: {
              nl: "Maak kopen net zo makkelijk als kijken. Een bezoeker die op zijn telefoon besluit om morgen te gaan, wil in een paar tikken een ticket of tijdslot kiezen en betalen. Dat vraagt om een snelle site, duidelijke prijzen en een ticketflow zonder omwegen, eventueel gekoppeld aan je bestaande ticketsysteem. Met [[conversie-optimalisatie|conversie-optimalisatie]] meten we waar mensen afhaken en verbeteren we dat stap voor stap. Online kopen scheelt bovendien rijen bij de kassa.",
              en: "Make buying as easy as browsing. A visitor deciding on their phone to come tomorrow wants to pick a ticket or time slot and pay in a few taps. That calls for a fast site, clear prices and a ticket flow without detours, connected to your existing ticketing system if needed. With [[conversie-optimalisatie|conversion optimisation]] we measure where people drop out and improve it step by step. Online sales also shorten the queue at the till.",
            },
          },
          {
            q: { nl: "Wat doe je als dagattractie met TikTok en Instagram?", en: "What should a day attraction do with TikTok and Instagram?" },
            a: {
              nl: "Laten zien hoe leuk het is, in een paar seconden. Korte video's van de beleving werken beter dan gepolijste reclame: een gil in de achtbaan, een slimme puzzel in de escape room, een giraf die net om de hoek kijkt. We maken [[social-video|social video]] en helpen je team om zelf content te maken. Met [[tiktok-ads|TikTok Ads]] vergroot je het bereik rond vakanties en weekenden. En deel gerust wat bezoekers zelf posten, met hun toestemming.",
              en: "Show how much fun it is, in a few seconds. Short videos of the experience work better than polished advertising: a scream on the rollercoaster, a clever puzzle in the escape room, a giraffe peeking round the corner. We make [[social-video|social video]] and help your team create content themselves. With [[tiktok-ads|TikTok Ads]] you boost reach around holidays and weekends. And feel free to share what visitors post themselves, with their permission.",
            },
          },
          {
            q: { nl: "Hoe vul ik doordeweekse dagen en daluren?", en: "How do I fill weekdays and off-peak hours?" },
            a: {
              nl: "Met doelgroepen die juist dan kunnen: scholen, bedrijven, verenigingen en senioren. Geef schoolreisjes, bedrijfsuitjes en groepsbezoeken elk een eigen pagina met programma, prijsindicatie en een makkelijk aanvraagformulier. Een [[offerte-calculator|prijscalculator]] voor groepen voorkomt veel heen-en-weer mailen. Combineer dat met gerichte campagnes en een nieuwsbrief met daltarieven of speciale avonden. Zo spreid je de drukte en maak je beter gebruik van je capaciteit.",
              en: "With audiences who are free precisely then: schools, companies, clubs and seniors. Give school trips, company outings and group visits each their own page with a programme, a price indication and an easy enquiry form. A [[offerte-calculator|price calculator]] for groups prevents a lot of back-and-forth emailing. Combine that with targeted campaigns and a newsletter featuring off-peak rates or special evenings. That way you spread the crowds and make better use of your capacity.",
            },
          },
        ],
      },
      {
        name: { nl: "Horeca & events", en: "Hospitality & events" },
        intro: {
          nl: "Voor restaurants, cafés, strandpaviljoens, partycentra, cateraars en vergader- en eventlocaties, van dorpsrestaurant tot grote evenementenlocatie.",
          en: "For restaurants, cafés, beach clubs, party venues, caterers and meeting and event venues, from village restaurant to large event location.",
        },
        types: [
          { nl: "Restaurants", en: "Restaurants" },
          { nl: "Cafés", en: "Cafés" },
          { nl: "Strandpaviljoens", en: "Beach clubs" },
          { nl: "Partycentra", en: "Party venues" },
          { nl: "Vergader- en eventlocaties", en: "Meeting and event venues" },
          { nl: "Cateraars", en: "Caterers" },
        ],
        useCases: [
          {
            title: { nl: "Menukaart als tekst, niet als pdf", en: "Your menu as text, not a PDF" },
            text: {
              nl: "Een menu dat je zelf in een minuut aanpast, met allergeneninformatie erbij. Goed leesbaar op de telefoon en voor Google.",
              en: "A menu you update yourself in a minute, with allergen information included. Easy to read on a phone and for Google.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Offertecalculator voor zalen en feesten", en: "Quote calculator for rooms and parties" },
            text: {
              nl: "Organisatoren kiezen zelf aantal gasten, datum en arrangement. Jij krijgt een complete aanvraag in plaats van een mailwisseling.",
              en: "Organisers choose the number of guests, date and package themselves. You receive a complete enquiry instead of an email exchange.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Google Bedrijfsprofiel dat klopt", en: "A Google Business Profile that's right" },
            text: {
              nl: "Openingstijden, menu, foto's en reserveringslink op orde, en een reactie op elke review. Daar kijken gasten als eerste naar.",
              en: "Opening hours, menu, photos and booking link in order, and a response to every review. That is where guests look first.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Digitale brochure voor zakelijke events", en: "Digital brochure for corporate events" },
            text: {
              nl: "Zalen, opstellingen en arrangementen in een strakke brochure die intern rondgestuurd kan worden. Handig voor zakelijke klanten die eerst moeten overleggen.",
              en: "Rooms, layouts and packages in a sharp brochure that can be passed around internally. Handy for corporate clients who need to consult first.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
        ],
        faqs: [
          {
            q: { nl: "Moet mijn menukaart echt geen pdf meer zijn?", en: "Should my menu really not be a PDF any more?" },
            a: {
              nl: "Liever niet. Een pdf leest lastig op een telefoon, laadt traag en is voor Google en AI-assistenten slecht te begrijpen. Zet je menu als gewone tekst op je website, met allergeneninformatie en eventueel foto's van je signatuurgerechten. Dan pas je het zelf in een minuut aan als de kaart wisselt. Gasten die zoeken op 'vegetarisch restaurant' of 'brunch in de buurt' vinden je zo makkelijker. En je kok hoeft niet meer te wachten op een nieuwe pdf.",
              en: "Preferably not. A PDF is hard to read on a phone, loads slowly and is difficult for Google and AI assistants to understand. Put your menu on your website as plain text, with allergen information and perhaps photos of your signature dishes. Then you can update it yourself in a minute when the menu changes. Guests searching for 'vegetarian restaurant' or 'brunch nearby' will find you more easily. And your chef no longer has to wait for a new PDF.",
            },
          },
          {
            q: { nl: "Hoe verkoop ik zalen, feesten en zakelijke events online?", en: "How do I sell function rooms, parties and corporate events online?" },
            a: {
              nl: "Met pagina's die een organisator alles geven wat hij voor een offerte nodig heeft: zalen met capaciteit en opstellingen, mogelijke arrangementen, foto's van eerdere events en een prijsindicatie. Een [[offerte-calculator|offertecalculator]] laat bezoekers zelf aantal gasten, datum en arrangement kiezen, zodat jij een complete aanvraag krijgt. Een strakke digitale brochure helpt bij zakelijke klanten die intern moeten overleggen. En opvolging per mail zorgt dat een aanvraag niet stil blijft liggen.",
              en: "With pages that give an organiser everything they need for a quote: rooms with capacity and layouts, possible packages, photos of past events and a price indication. A [[offerte-calculator|quote calculator]] lets visitors choose the number of guests, date and package themselves, so you receive a complete enquiry. A sharp digital brochure helps with corporate clients who need to consult internally. And email follow-up makes sure an enquiry does not go quiet.",
            },
          },
          {
            q: {
              nl: "Hoe vinden mensen mijn restaurant als ze 'restaurant in de buurt' zoeken?",
              en: "How do people find my restaurant when they search for 'restaurant near me'?",
            },
            a: {
              nl: "Vooral via je Google Bedrijfsprofiel. Zorg dat openingstijden, menu, foto's en de reserveringslink kloppen, en reageer op reviews, ook op de kritische. Je website ondersteunt dat met duidelijke informatie over je keuken, de sfeer en je ligging. Met [[lokale-seo|lokale SEO]] bouwen we beide netjes op. Mooie, eerlijke foto's van gerechten en interieur maken daarbij veel verschil, want mensen eten ook met hun ogen. Zeker om half zes, als er nog geen plan voor het avondeten is.",
              en: "Mainly through your Google Business Profile. Make sure opening hours, menu, photos and the booking link are correct, and respond to reviews, including the critical ones. Your website backs that up with clear information about your cuisine, atmosphere and location. With [[lokale-seo|local SEO]] we build up both properly. Attractive, honest photos of dishes and the interior make a real difference, because people eat with their eyes. Especially at half past five with no dinner plans yet.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Hotels", en: "Hotels" },
      { nl: "Boutique hotels", en: "Boutique hotels" },
      { nl: "B&B's", en: "B&Bs" },
      { nl: "Hostels", en: "Hostels" },
      { nl: "Vakantieparken", en: "Holiday parks" },
      { nl: "Campings", en: "Campsites" },
      { nl: "Glampings", en: "Glamping sites" },
      { nl: "Groepsaccommodaties", en: "Group accommodation" },
      { nl: "Vakantiehuisverhuurders", en: "Holiday home rental companies" },
      { nl: "Reisorganisaties", en: "Travel companies" },
      { nl: "Touroperators", en: "Tour operators" },
      { nl: "Reisbureaus", en: "Travel agencies" },
      { nl: "Attractieparken", en: "Theme parks" },
      { nl: "Dierenparken", en: "Zoos and wildlife parks" },
      { nl: "Musea", en: "Museums" },
      { nl: "Escape rooms", en: "Escape rooms" },
      { nl: "Outdoor- en activiteitenbedrijven", en: "Outdoor and activity companies" },
      { nl: "Wellnesscentra", en: "Wellness centres" },
      { nl: "Restaurants", en: "Restaurants" },
      { nl: "Strandpaviljoens", en: "Beach clubs" },
      { nl: "Partycentra", en: "Party venues" },
      { nl: "Vergader- en eventlocaties", en: "Meeting and event venues" },
      { nl: "Cateraars", en: "Caterers" },
      { nl: "Jachthavens", en: "Marinas" },
    ],
  },
};
