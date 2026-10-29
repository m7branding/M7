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
          {
            title: { nl: "Kopersportaal voor nieuwbouwprojecten", en: "Buyer portal for new-build projects" },
            text: {
              nl: "Kopers kiezen hun meer- en minderwerk online, zien de planning en vinden tekeningen en documenten op één plek. Je kopersbegeleider hoeft niet meer elke vraag apart per mail te beantwoorden.",
              en: "Buyers choose their extras and omissions online, see the schedule and find drawings and documents in one place. Your buyer liaison no longer has to answer every question by separate email.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Aanvragen direct bij de juiste calculator", en: "Enquiries straight to the right estimator" },
            text: {
              nl: "Een aanvraag voor een verbouwing komt binnen met foto's, adres en wensen, en gaat automatisch naar de juiste calculator. De klant krijgt meteen een bevestiging met wat er nu gaat gebeuren.",
              en: "A renovation enquiry comes in with photos, address and wishes, and goes automatically to the right estimator. The customer immediately gets a confirmation explaining what happens next.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Inschrijvingen die prettig lezen", en: "Tender documents that read well" },
            text: {
              nl: "Een plan van aanpak voor een aanbesteding met een heldere opbouw, sterke projectbeelden en schema's die de kern laten zien. Zo valt je inschrijving op door inhoud én verzorging.",
              en: "A tender plan with a clear structure, strong project images and diagrams that show the key points. That way your bid stands out for both its substance and its presentation.",
            },
            service: "grafisch-ontwerp-print",
          },
          {
            title: { nl: "AI die bestekken doorleest", en: "AI that reads specifications for you" },
            text: {
              nl: "Een AI-agent zet de eisen, risico's en afwijkingen uit een bestek of uitvraag op een rij. Je calculator en werkvoorbereider houden het laatste woord, maar beginnen niet meer bij nul.",
              en: "An AI agent lists the requirements, risks and deviations in a specification or tender request. Your estimator and planner keep the final say, but no longer start from scratch.",
            },
            service: "ai-consultancy",
            application: "ai-agents",
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
          {
            q: {
              nl: "Wat kost een website voor een bouwbedrijf, en hoe lang duurt het?",
              en: "What does a website for a construction company cost, and how long does it take?",
            },
            a: {
              nl: "Dat hangt vooral af van wat erop moet. Een compacte site met projecten, diensten en een goed aanvraagformulier is iets anders dan een site met meerdere vestigingen, een werkenbij-deel en een kopersportaal. Een compacte [[websites-webshops|website]] staat gemiddeld in 4 tot 6 weken online, en met koppelingen of een portaal duurt het langer. Indicatieve prijzen zie je alvast in onze configurator op letsgo.m7branding.com, en na een korte intake krijg je een voorstel op maat.",
              en: "That mainly depends on what it needs to do. A compact site with projects, services and a good enquiry form is different from a site with several branches, a careers section and a buyer portal. A compact [[websites-webshops|website]] is typically online in 4 to 6 weeks, while integrations or a portal take longer. You can already see indicative prices in our configurator at letsgo.m7branding.com, and after a short intake you receive a tailored proposal.",
            },
          },
          {
            q: { nl: "Hoe laat ik in een aanbesteding zien wat ons onderscheidt?", en: "How do I show what sets us apart in a tender?" },
            a: {
              nl: "Door het de beoordelaars makkelijk te maken. Zij lezen vaak tientallen inschrijvingen, dus een plan van aanpak met een heldere opbouw, korte alinea's en schema's die de kern laten zien valt op. Onderbouw wat je belooft met referentieprojecten, foto's van vergelijkbaar werk en een planning die realistisch is. Wij zorgen voor de vormgeving, [[infographics|schema's]] en een vaste opmaak in je huisstijl, zodat je team niet bij elke inschrijving opnieuw begint. De inhoud blijft van jullie, want niemand kent je werk beter.",
              en: "By making it easy for the assessors. They often read dozens of bids, so a plan with a clear structure, short paragraphs and diagrams that show the key points stands out. Back up what you promise with reference projects, photos of similar work and a realistic schedule. We take care of the design, the [[infographics|diagrams]] and a fixed layout in your house style, so your team does not start from scratch with every bid. The content stays yours, because nobody knows your work better.",
            },
          },
          {
            q: { nl: "Kunnen kopers van een nieuwbouwproject online hun meerwerk kiezen?", en: "Can buyers in a new-build project choose their extras online?" },
            a: {
              nl: "Ja. In een [[klantportaal|kopersportaal]] kiezen kopers per woning hun meer- en minderwerk, met foto's, prijzen en sluitingsdata erbij. Ze zien de planning, vinden hun tekeningen en documenten en krijgen een seintje als er iets verandert. Je kopersbegeleider houdt overzicht en hoeft niet meer alles per mail af te stemmen. Of het portaal kan koppelen met je bestaande software, zoeken we vooraf samen uit.",
              en: "Yes. In a [[klantportaal|buyer portal]] buyers choose their extras and omissions per home, with photos, prices and deadlines. They see the schedule, find their drawings and documents and get a notification when something changes. Your buyer liaison keeps the overview and no longer has to settle everything by email. We check together upfront whether the portal can connect to your existing software.",
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
          {
            title: { nl: "Een huisstijl die past bij vakwerk", en: "An identity that matches your craftsmanship" },
            text: {
              nl: "Een verzorgd logo en een rustige huisstijl op bus, werkkleding, offerte en website. Wie strak stuct of tegelt, mag er ook strak uitzien, zeker als je voor aannemers en architecten werkt.",
              en: "A polished logo and a calm identity on your van, workwear, quotes and website. If your plastering or tiling is flawless, your company may look the part too, especially when you work for contractors and architects.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Aanvragen met foto's erbij", en: "Enquiries with photos attached" },
            text: {
              nl: "Klanten sturen bij hun aanvraag meteen foto's van de muur, vloer of het kozijn mee, plus de maten en de gewenste afwerking. Zo zie je vooraf wat er speelt en rijd je minder vaak voor niets naar een opname.",
              en: "Customers send photos of the wall, floor or window frame with their enquiry, plus the measurements and the finish they want. You see upfront what is involved and make fewer wasted trips to take a look.",
            },
            service: "websites-webshops",
          },
          {
            title: { nl: "Reviews vragen na oplevering", en: "Review requests after completion" },
            text: {
              nl: "Een paar dagen na de laatste klus krijgt de klant automatisch een vriendelijk bericht met een directe link naar je Google-profiel. Zo groeit je aantal reviews zonder dat je er zelf aan hoeft te denken.",
              en: "A few days after the job is done, the customer automatically gets a friendly message with a direct link to your Google profile. Your number of reviews grows without you having to remember it.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Offerteteksten sneller met AI", en: "Faster quote texts with AI" },
            text: {
              nl: "Een AI-assistent zet je opnamenotities en foto's om in een nette offertetekst met de juiste werkomschrijving. Jij controleert de prijzen en verstuurt, in plaats van 's avonds nog te zitten typen.",
              en: "An AI assistant turns your site-visit notes and photos into a tidy quote text with the right job description. You check the prices and send it, instead of sitting there typing in the evening.",
            },
            service: "ai-consultancy",
            application: "ai-agents",
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
          {
            q: { nl: "Hoe krijg ik meer goede reviews zonder erom te zeuren?", en: "How do I get more good reviews without nagging?" },
            a: {
              nl: "Vraag het op het juiste moment, en maak het makkelijk. Vlak na de oplevering is een klant het meest tevreden, dus dan stuur je een kort bericht met een directe link naar je Google-profiel. Met een eenvoudige [[marketing-automation|automatisering]] gaat dat vanzelf, gekoppeld aan je planning of facturatie. Reageer daarna op elke review, ook op de kritische, want toekomstige klanten lezen je antwoorden net zo goed. Reviews kopen doen we niet, want dat valt altijd een keer door de mand.",
              en: "Ask at the right moment, and make it easy. Customers are most satisfied right after the job is finished, so that is when you send a short message with a direct link to your Google profile. With a simple [[marketing-automation|automation]] that happens on its own, linked to your planning or invoicing. Then respond to every review, including the critical ones, because future customers read your replies too. We do not buy reviews, because that always backfires at some point.",
            },
          },
          {
            q: { nl: "Kunnen klanten foto's meesturen met een offerteaanvraag?", en: "Can customers send photos with a quote request?" },
            a: {
              nl: "Ja, en dat scheelt je veel ritten. Een goed aanvraagformulier vraagt om een paar foto's van de muur, vloer of het kozijn, plus de afmetingen en de gewenste afwerking. Zo zie je vooraf of er eerst gerepareerd moet worden, of het een klus is die je wilt doen en welk materiaal je nodig hebt. Op je [[websites-webshops|website]] bouwen we dat formulier zo dat het op een telefoon net zo makkelijk werkt als op een laptop. De foto's komen netjes bij de aanvraag in je mail of CRM terecht.",
              en: "Yes, and it saves you a lot of trips. A good enquiry form asks for a few photos of the wall, floor or window frame, plus the dimensions and the finish wanted. That way you see upfront whether repairs are needed first, whether it is a job you want and which materials you need. On your [[websites-webshops|website]] we build that form so it works as easily on a phone as on a laptop. The photos arrive neatly with the enquiry in your inbox or CRM.",
            },
          },
          {
            q: {
              nl: "Heb ik als zzp'er of klein afbouwbedrijf wel een eigen website nodig?",
              en: "Do I really need my own website as a sole trader or small finishing company?",
            },
            a: {
              nl: "Als je planning altijd vol zit via mond-tot-mondreclame, misschien niet meteen. Maar wie je naam hoort, zoekt je bijna altijd even op. Een compacte website met je werk, je werkgebied en een manier om contact op te nemen, laat dan zien dat je serieus bent. Hij geeft je bovendien een vaste plek voor reviews en foto's, in plaats van alles los op social media. Een compacte site staat gemiddeld in 4 tot 6 weken online, en je kunt hem later uitbreiden met bijvoorbeeld een [[offerte-calculator|offertecalculator]].",
              en: "If word of mouth always keeps your schedule full, perhaps not straight away. But anyone who hears your name will almost always look you up. A compact website with your work, your service area and a way to get in touch shows you are serious. It also gives you a permanent home for reviews and photos, instead of everything scattered across social media. A compact site is typically online in 4 to 6 weeks, and you can expand it later with, for example, a [[offerte-calculator|quote calculator]].",
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
          {
            title: { nl: "Gevonden bij spoed in je regio", en: "Found for urgent jobs in your area" },
            text: {
              nl: "Een pagina per dienst en plaats, een compleet Google Bedrijfsprofiel en een belknop die op mobiel direct werkt. Voor wie met een lekkage of storing zit en nú iemand zoekt in Oss, Uden of Veghel.",
              en: "A page per service and town, a complete Google Business Profile and a call button that works straight from a mobile. For people with a leak or breakdown who need someone right now in their area.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Onderhoudscontracten met automatische herinnering", en: "Service contracts with automatic reminders" },
            text: {
              nl: "Klanten met een onderhoudscontract krijgen op tijd een seintje en plannen hun beurt zelf in. Je planning vult zich gelijkmatig over het jaar, in plaats van iedereen tegelijk in oktober.",
              en: "Customers with a service contract get a timely reminder and book their visit themselves. Your schedule fills evenly across the year, instead of everyone at once in October.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Een zakelijke en een particuliere route", en: "A business route and a private route" },
            text: {
              nl: "Particulieren zoeken een warmtepomp of laadpaal, aannemers en corporaties een betrouwbare partner voor grote projecten. Op je website krijgt elk een eigen route, met eigen voorbeelden en een eigen contactpersoon.",
              en: "Homeowners look for a heat pump or EV charger, contractors and housing associations for a reliable partner on large projects. On your website each gets their own route, with their own examples and contact person.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "AI-assistent voor je servicedesk", en: "AI assistant for your service desk" },
            text: {
              nl: "Een assistent die vragen over storingscodes, onderhoud en garantie beantwoordt vanuit je eigen handleidingen en voorwaarden, ook 's avonds. Bij spoed of twijfel gaat de vraag door naar een collega.",
              en: "An assistant that answers questions about error codes, maintenance and warranty from your own manuals and terms, in the evening too. In an emergency or when in doubt, the question goes to a colleague.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
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
          {
            q: { nl: "Hoe voorkom ik dat ons kantoor in de drukte vastloopt op telefoontjes?", en: "How do I stop our office getting swamped by calls at busy times?" },
            a: {
              nl: "Door de meest gestelde vragen al online te beantwoorden, en melden en plannen zo veel mogelijk door de klant zelf te laten doen. Een storingsformulier met foto's, een [[boekingswidget|afsprakenwidget]] voor onderhoud en een pagina met uitleg over storingscodes vangen al veel af. Klanten met een onderhoudscontract plan je bovendien gespreid in, met een automatische herinnering. Wie dan toch belt, krijgt een collega aan de lijn die tijd heeft voor het lastige werk.",
              en: "By answering the most common questions online, and letting customers report and schedule as much as possible themselves. A fault form with photos, an [[boekingswidget|appointment widget]] for maintenance and a page explaining error codes already take a lot of pressure off. Customers with a service contract can also be scheduled evenly, with an automatic reminder. Anyone who still calls reaches a colleague who has time for the tricky cases.",
            },
          },
          {
            q: { nl: "Is een AI-chatbot zinvol voor een installatiebedrijf?", en: "Does an AI chatbot make sense for an installation company?" },
            a: {
              nl: "Soms wel. Een [[ai-chatbots|AI-assistent]] die is gevoed met je eigen handleidingen, storingscodes en voorwaarden, kan 's avonds en in het weekend veel standaardvragen beantwoorden. Denk aan 'wat betekent deze foutcode', 'wanneer is mijn onderhoud' of 'valt dit onder de garantie'. Bij twijfel of spoed verwijst hij door naar je team of het storingsnummer. We beginnen klein, testen met echte vragen en breiden pas uit als het goed werkt.",
              en: "Sometimes, yes. An [[ai-chatbots|AI assistant]] fed with your own manuals, error codes and terms can answer many standard questions in the evening and at weekends. Think 'what does this error code mean', 'when is my service due' or 'is this covered by the warranty'. When in doubt or in an emergency, it refers people to your team or the emergency number. We start small, test with real questions and only expand once it works well.",
            },
          },
          {
            q: { nl: "Hoe leg ik een warmtepomp of ventilatiesysteem uit zonder vakjargon?", en: "How do I explain a heat pump or ventilation system without jargon?" },
            a: {
              nl: "Begin bij wat de klant merkt: een comfortabel huis, frisse lucht en minder gasverbruik. Leg daarna in een paar stappen uit hoe het werkt, met een korte [[motion-design|animatie]] of een duidelijke tekening in plaats van een technische folder. Wees eerlijk over wat er eerst bij een woning moet gebeuren, zoals isolatie of andere radiatoren. Dat voorkomt teleurstelling achteraf en levert betere aanvragen op.",
              en: "Start with what the customer notices: a comfortable home, fresh air and less gas use. Then explain in a few steps how it works, with a short [[motion-design|animation]] or a clear drawing instead of a technical leaflet. Be honest about what a home needs first, such as insulation or different radiators. That prevents disappointment afterwards and leads to better enquiries.",
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
          {
            title: { nl: "Een merk dat je ontwerpvisie uitdraagt", en: "A brand that carries your design vision" },
            text: {
              nl: "Een logo, typografie en toon die net zo doordacht zijn als je gebouwen. Ingetogen waar het moet, eigenzinnig waar het kan, van website en projectbord tot presentatie.",
              en: "A logo, typography and tone as considered as your buildings. Restrained where needed, distinctive where possible, from website and site board to presentation.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Projectboek of monografie in print", en: "Project book or monograph in print" },
            text: {
              nl: "Een selectie van je beste werk als boek of magazine, voor relaties, jubilea en selecties. Met ruimte voor beeld, plattegronden en het verhaal achter elk ontwerp.",
              en: "A selection of your best work as a book or magazine, for clients, anniversaries and selection procedures. With room for images, floor plans and the story behind each design.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
          {
            title: { nl: "Eén project, content voor weken", en: "One project, content for weeks" },
            text: {
              nl: "Een opgeleverd project wordt een LinkedIn-post, een korte video en een artikel op je site. Opdrachtgevers en vakgenoten zien je werk, zonder dat het je wekelijks uren kost.",
              en: "One completed project becomes a LinkedIn post, a short video and an article on your site. Clients and peers see your work, without it costing you hours every week.",
            },
            service: "content-marketing-online-ads",
            application: "contentstrategie",
          },
          {
            title: { nl: "AI-workshop voor je ontwerpteam", en: "AI workshop for your design team" },
            text: {
              nl: "Een praktische sessie over AI in het dagelijkse werk: sfeerbeelden in de schetsfase, projectomschrijvingen en verslagen. Met heldere afspraken over wat wel en niet kan met vertrouwelijke plannen.",
              en: "A practical session on AI in everyday work: mood images in the sketch phase, project descriptions and minutes. With clear agreements on what is and is not acceptable with confidential plans.",
            },
            service: "ai-consultancy",
            application: "ai-workshops",
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
          {
            q: { nl: "Hoe trek ik grotere of zakelijke opdrachtgevers aan?", en: "How do I attract larger or commercial clients?" },
            a: {
              nl: "Zakelijke opdrachtgevers, ontwikkelaars en overheden kijken naar aantoonbare ervaring met vergelijkbare opgaven. Orden je projecten daarom ook per type, zoals zorg, onderwijs, wonen of transformatie, met per project de opgave, je rol en het resultaat. Een verzorgd [[brochures-magazines|projectboek]] en een sterke [[presentaties-pitchdecks|presentatie]] helpen bij selecties, aanbestedingen en pitches. Op LinkedIn laat je zien hoe je denkt, met korte verhalen over de keuzes in je projecten.",
              en: "Commercial clients, developers and public bodies look for proven experience with similar briefs. So also organise your projects by type, such as healthcare, education, housing or transformation, with the brief, your role and the result for each. A polished [[brochures-magazines|project book]] and a strong [[presentaties-pitchdecks|presentation]] help in selection procedures, tenders and pitches. On LinkedIn you show how you think, with short stories about the choices in your projects.",
            },
          },
          {
            q: { nl: "Hoe vertaal ik onze ontwerpvisie naar een merk?", en: "How do I translate our design philosophy into a brand?" },
            a: {
              nl: "Begin bij wat je bureau anders maakt: je kijk op plek, materiaal, duurzaamheid of de manier waarop je met opdrachtgevers samenwerkt. Dat verhaal leggen we eerst vast in een korte [[merkstrategie|positionering]], en pas daarna in logo, typografie en beeld. Voor architecten werkt een ingetogen [[huisstijl|huisstijl]] vaak het best, omdat je projecten de hoofdrol spelen. Maar ingetogen is iets anders dan inwisselbaar, en daar zit het werk.",
              en: "Start with what makes your practice different: your view on place, materials, sustainability or the way you work with clients. We first capture that story in a short [[merkstrategie|positioning]], and only then in logo, typography and imagery. For architects a restrained [[huisstijl|visual identity]] often works best, because your projects play the lead. But restrained is not the same as interchangeable, and that is where the work lies.",
            },
          },
          {
            q: { nl: "Wat hebben jullie nodig om renders van ons ontwerp te maken?", en: "What do you need to make renders of our design?" },
            a: {
              nl: "Het liefst je eigen 3D- of BIM-model, aangevuld met tekeningen, materiaalkeuzes en een paar referentiebeelden van de sfeer die je zoekt. Uit dat model maken we [[3d-visualisatie|renders]] en desgewenst een korte animatie of rondgang. Hoe verder het ontwerp is uitgewerkt, hoe minder we hoeven aan te nemen. In een vroege fase werken we juist losser, met sfeerbeelden die ruimte laten voor het gesprek met je opdrachtgever.",
              en: "Ideally your own 3D or BIM model, along with drawings, material choices and a few reference images of the atmosphere you are after. From that model we create [[3d-visualisatie|renders]] and, if you like, a short animation or walkthrough. The further the design has been developed, the less we need to assume. In an early phase we deliberately work more loosely, with mood images that leave room for the conversation with your client.",
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
          {
            title: { nl: "Antwoorden op kavel- en vergunningsvragen", en: "Answers to plot and permit questions" },
            text: {
              nl: "Mag het op mijn grond, heb ik een vergunning nodig en wat komt er nog bij de prijs? Per vraag een eerlijke pagina met voorbeelden uit je eigen projecten, vindbaar in Google en AI-assistenten.",
              en: "Is it allowed on my land, do I need a permit and what is not included in the price? An honest page per question with examples from your own projects, findable on Google and in AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Van configuratie naar koopgesprek", en: "From configuration to sales meeting" },
            text: {
              nl: "Wie een woning configureert maar nog niet belt, krijgt een paar nuttige mails over kavels, financiering en levertijden. Je verkoper ziet wie terugkomt en belt op het goede moment.",
              en: "Anyone who configures a home but does not call yet gets a few useful emails about plots, financing and lead times. Your sales team sees who comes back and calls at the right moment.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "Kopersportaal van bestelling tot plaatsing", en: "Buyer portal from order to placement" },
            text: {
              nl: "Kopers volgen hun woning van productie tot plaatsing, met planning, keuzes, tekeningen en documenten op één plek. Minder losse mails voor je projectleider, meer rust voor de koper.",
              en: "Buyers follow their home from production to placement, with schedule, choices, drawings and documents in one place. Fewer stray emails for your project manager, more peace of mind for the buyer.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Een merk dat kwaliteit uitstraalt", en: "A brand that signals quality" },
            text: {
              nl: "Prefab heeft bij sommige kopers nog het imago van een noodoplossing. Een doordachte positionering en verzorgde uitstraling laten zien dat het om een volwaardig, comfortabel huis gaat.",
              en: "Among some buyers, prefab still has the image of a stopgap. Considered positioning and a polished look show that this is a fully-fledged, comfortable home.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
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
          {
            q: { nl: "Wat kost een 3D-configurator en hoe lang duurt het om hem te bouwen?", en: "What does a 3D configurator cost and how long does it take to build?" },
            a: {
              nl: "Een [[3d-configurator|3D-configurator]] is maatwerk. De investering hangt vooral af van het aantal woningtypes, opties en materialen, en van de vraag of er al bruikbare 3D-modellen zijn. Een configurator met 3D, complexe logica of koppelingen duurt doorgaans 8 tot 16 weken. Begin je liever kleiner, dan is een 2D-keuzehulp met prijsindicatie een goede eerste stap. Na een korte intake krijg je een heldere indicatie.",
              en: "A [[3d-configurator|3D configurator]] is custom work. The investment depends mainly on the number of home types, options and materials, and on whether usable 3D models already exist. A configurator with 3D, complex logic or integrations typically takes 8 to 16 weeks. If you would rather start smaller, a 2D product finder with a price indication is a good first step. After a short intake you receive a clear indication.",
            },
          },
          {
            q: { nl: "Hoe volg ik mensen op die wel configureren maar nog niet kopen?", en: "How do I follow up with people who configure a home but do not buy yet?" },
            a: {
              nl: "Een woning koop je niet op een dinsdagavond. Wie een configuratie opslaat, zit vaak nog met vragen over een kavel, financiering of levertijd. Met [[lead-nurturing|lead nurturing]] stuur je in de weken daarna een paar nuttige mails die precies die vragen beantwoorden, met voorbeelden van opgeleverde woningen. Je verkoper ziet wie terugkomt en welke opties iemand bekeek, en belt op het moment dat een gesprek zinvol is. Opdringerig is het niet, zolang elke mail iets toevoegt.",
              en: "Nobody buys a home on a Tuesday evening. People who save a configuration often still have questions about a plot, financing or lead time. With [[lead-nurturing|lead nurturing]] you send a few useful emails over the following weeks that answer exactly those questions, with examples of completed homes. Your sales team sees who comes back and which options they looked at, and calls when a conversation makes sense. It is not pushy, as long as every email adds something.",
            },
          },
          {
            q: { nl: "Hoe houd ik kopers op de hoogte tijdens productie en plaatsing?", en: "How do I keep buyers informed during production and placement?" },
            a: {
              nl: "Tussen tekenen en sleuteloverdracht zit vaak een flinke tijd, en stilte maakt kopers onrustig. Een [[klantportaal|kopersportaal]] met de planning, gemaakte keuzes, tekeningen en documenten geeft houvast. Een korte update met foto's uit de fabriek op belangrijke momenten doet daarbij wonderen, en kan grotendeels automatisch. Zo hoeft je projectleider niet elke vraag apart te beantwoorden, en weet de koper altijd waar hij staat.",
              en: "There is often a long gap between signing and handing over the keys, and silence makes buyers uneasy. A [[klantportaal|buyer portal]] with the schedule, the choices made, drawings and documents gives them something to hold on to. A short update with photos from the factory at key moments works wonders, and can largely be automated. That way your project manager does not have to answer every question separately, and buyers always know where they stand.",
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
          {
            title: { nl: "Meertalige site voor exportmarkten", en: "Multilingual site for export markets" },
            text: {
              nl: "Duitse, Belgische of Scandinavische inkopers lezen liever in hun eigen taal. Per markt goede vertalingen en vindbaarheid op de lokale zoektermen, niet alleen een vertaalknop.",
              en: "German, Belgian or Scandinavian buyers prefer to read in their own language. Proper translations per market and visibility for local search terms, not just a translate button.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
          {
            title: { nl: "Offertes opvolgen zonder Excel-lijstje", en: "Quote follow-up without a spreadsheet" },
            text: {
              nl: "Verstuurde offertes staan in je CRM, met een automatische herinnering voor je verkoper als een klant niet reageert. Zo blijft er geen aanvraag liggen in de drukte van de werkvloer.",
              en: "Sent quotes sit in your CRM, with an automatic reminder for your sales rep when a customer does not respond. That way no enquiry gets lost in the bustle of the shop floor.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
          },
          {
            title: { nl: "Capabilities-brochure voor inkopers", en: "Capabilities brochure for buyers" },
            text: {
              nl: "Bewerkingen, machinepark, materialen en certificeringen in een overzichtelijke brochure. Handig om na een kennismaking te mailen of mee te nemen naar een beurs of leveranciersdag.",
              en: "Processes, machinery, materials and certifications in a clear brochure. Handy to email after a first meeting or to bring to a trade show or supplier day.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
          {
            title: { nl: "AI die aanvragen voorbereidt", en: "AI that prepares enquiries" },
            text: {
              nl: "Een AI-agent leest aanvraagmails en bijlagen, haalt materiaal, aantallen en gewenste levertijd eruit en zet alles klaar voor je werkvoorbereider. Die controleert en rekent, maar typt niets meer over.",
              en: "An AI agent reads enquiry emails and attachments, extracts material, quantities and the requested lead time and prepares everything for your work planner. They check and calculate, but no longer retype anything.",
            },
            service: "ai-consultancy",
            application: "ai-agents",
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
          {
            q: { nl: "Hoe zorg ik dat offertes niet blijven liggen?", en: "How do I make sure quotes do not get forgotten?" },
            a: {
              nl: "In een drukke productie schiet opvolging er snel bij in. Met een [[crm-implementatie|CRM]] zie je welke offertes uitstaan, wat ze waard zijn en wanneer je iets moet doen. Een automatische herinnering voor je verkoper, of een vriendelijke mail aan de klant na een week of twee, zorgt dat je niet afhankelijk bent van iemands geheugen. Het CRM kan vaak gekoppeld worden aan je ERP of calculatiepakket, zodat je niets dubbel invoert.",
              en: "In a busy production environment, follow-up easily slips. With a [[crm-implementatie|CRM]] you see which quotes are outstanding, what they are worth and when action is needed. An automatic reminder for your sales rep, or a friendly email to the customer after a week or two, means you do not depend on anyone's memory. The CRM can often be linked to your ERP or estimating software, so nothing is entered twice.",
            },
          },
          {
            q: { nl: "Wat kan AI concreet doen voor een maakbedrijf?", en: "What can AI concretely do for a manufacturing company?" },
            a: {
              nl: "Vooral het repeterende werk rond de productie verlichten. Denk aan aanvraagmails en bijlagen uitlezen en klaarzetten voor de werkvoorbereiding, productteksten en datasheets opstellen, of een interne assistent die antwoord geeft uit je eigen werkinstructies. Met een [[ai-agents|AI-agent]] gebeurt dat binnen je bestaande systemen, met een mens die controleert. We beginnen met één proces dat veel tijd kost, meten wat het oplevert en bouwen pas daarna verder.",
              en: "Mainly taking repetitive work around production off your hands. Think of reading enquiry emails and attachments and preparing them for work planning, drafting product texts and datasheets, or an internal assistant that answers from your own work instructions. With an [[ai-agents|AI agent]] this happens within your existing systems, with a person checking the output. We start with one process that takes a lot of time, measure what it delivers and only then build further.",
            },
          },
          {
            q: { nl: "Hoe laat ik certificeringen en kwaliteit overtuigend zien?", en: "How do I present certifications and quality convincingly?" },
            a: {
              nl: "Een rij logo's onderaan de pagina zegt een inkoper weinig. Leg liever kort uit wat een certificering voor de klant betekent: welke processen geborgd zijn, hoe je meet en wat er gebeurt als iets afwijkt. Laat je meetkamer, controles en traceerbaarheid zien met echte foto's. Zet de certificaten zelf als download klaar, zodat een inkoper ze direct in zijn leveranciersdossier kan opnemen. Een overzichtelijke [[brochures-magazines|brochure]] met dezelfde informatie helpt na een eerste gesprek.",
              en: "A row of logos at the bottom of the page tells a buyer very little. Instead, briefly explain what a certification means for the customer: which processes are assured, how you measure and what happens when something deviates. Show your measuring room, inspections and traceability with real photos. Offer the certificates themselves as downloads, so a buyer can add them straight to their supplier file. A clear [[brochures-magazines|brochure]] with the same information helps after a first meeting.",
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
          {
            title: { nl: "Meertalige productsite voor dealers", en: "Multilingual product site for dealers" },
            text: {
              nl: "Productpagina's, specificaties en downloads in de talen van je markten, beheerd vanuit één plek. Dealers vinden altijd de actuele brochure en specsheet, in hun eigen taal.",
              en: "Product pages, specifications and downloads in your markets' languages, managed from one place. Dealers always find the current brochure and spec sheet in their own language.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
          {
            title: { nl: "Lead scoring voor lange salestrajecten", en: "Lead scoring for long sales cycles" },
            text: {
              nl: "Een machine koop je niet in een week. Lead scoring laat zien welke contacten terugkomen naar je specificaties, demovideo's en prijspagina, zodat sales belt als de interesse echt groeit.",
              en: "Nobody buys a machine in a week. Lead scoring shows which contacts keep coming back to your specifications, demo videos and pricing page, so sales calls when interest is genuinely growing.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "Toepassingspagina's per branche", en: "Application pages per industry" },
            text: {
              nl: "Dezelfde machine in de voedingsmiddelenindustrie, de verpakkingsbranche of de landbouw: per toepassing een pagina met het probleem, de oplossing en een praktijkvoorbeeld. Zo vinden prospects je op hun eigen vraag.",
              en: "The same machine in food processing, packaging or agriculture: a page per application with the problem, the solution and a real example. That way prospects find you through their own question.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "AI-assistent voor service en onderdelen", en: "AI assistant for service and parts" },
            text: {
              nl: "Een assistent die antwoord geeft uit je eigen handleidingen en onderdelenlijsten, voor klanten in het portaal of voor servicemonteurs onderweg. Bij twijfel gaat de vraag naar een collega.",
              en: "An assistant that answers from your own manuals and parts lists, for customers in the portal or for service engineers on the road. When in doubt, the question goes to a colleague.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
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
          {
            q: { nl: "Hoe bouw ik een website die werkt voor dealers in meerdere landen?", en: "How do I build a website that works for dealers in several countries?" },
            a: {
              nl: "Met één centrale basis en ruimte per land. Productinformatie, specificaties en downloads beheer je op één plek en verschijnen in elke taal, terwijl dealers of vestigingen hun eigen contactgegevens en nieuws krijgen. Een dealerzoeker op de kaart helpt eindklanten bij de juiste partner. Met een goede [[meertalige-website|meertalige website]] voorkom je dat er per land een eigen, verouderde versie ontstaat. En je dealers hoeven niet meer te mailen om de nieuwste brochure.",
              en: "With one central foundation and room for each country. Product information, specifications and downloads are managed in one place and appear in every language, while dealers or branches get their own contact details and news. A dealer locator on a map helps end customers find the right partner. With a good [[meertalige-website|multilingual website]] you avoid every country ending up with its own outdated version. And your dealers no longer have to email for the latest brochure.",
            },
          },
          {
            q: { nl: "Hoe houd ik een prospect warm tijdens een lang verkooptraject?", en: "How do I keep a prospect engaged during a long sales process?" },
            a: {
              nl: "Door op de juiste momenten iets nuttigs te sturen, en niet elke week 'even te checken'. Een casestudy uit hun branche, een video van de machine in bedrijf of een uitnodiging voor een demo: met [[lead-nurturing|lead nurturing]] gaat dat automatisch, afgestemd op wat iemand al bekeek. Lead scoring laat je verkopers zien wie terugkomt naar specificaties of prijzen, zodat ze bellen als de interesse echt groeit. Het blijft mensenwerk, maar dan met beter getimede gesprekken.",
              en: "By sending something useful at the right moments, not 'just checking in' every week. A case study from their industry, a video of the machine in operation or an invitation to a demo: with [[lead-nurturing|lead nurturing]] this happens automatically, matched to what someone has already viewed. Lead scoring shows your sales team who keeps returning to specifications or pricing, so they call when interest is genuinely growing. It is still people's work, just with better-timed conversations.",
            },
          },
          {
            q: { nl: "Hoeveel tijd kost een uitlegvideo of 3D-animatie van een machine?", en: "How long does an explainer video or 3D animation of a machine take?" },
            a: {
              nl: "Voor een uitlegvideo van 60 tot 90 seconden reken je doorgaans op 3 tot 6 weken, inclusief script, ontwerp, animatie, voice-over en feedbackrondes. Heb je bruikbare CAD- of 3D-bestanden, dan dienen die vaak als basis en scheelt dat tijd. Een machine filmen in bedrijf gaat sneller, maar vraagt om een moment waarop hij draait en er goed uitziet. Vaak combineren we beide: echte beelden voor het vertrouwen, [[3d-visualisatie|3D]] voor wat je normaal niet ziet.",
              en: "For an explainer video of 60 to 90 seconds you can usually expect 3 to 6 weeks, including script, design, animation, voice-over and feedback rounds. If you have usable CAD or 3D files, they often serve as the basis, which saves time. Filming a machine in operation is quicker, but needs a moment when it is running and looks its best. We often combine both: real footage for trust, [[3d-visualisatie|3D]] for what you normally cannot see.",
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
          {
            title: { nl: "Klantportaal met installaties en keuringen", en: "Customer portal with installations and inspections" },
            text: {
              nl: "Zakelijke klanten zien per locatie hun installaties, onderhoudsrapporten en keuringsdata, en melden storingen met foto. Handig voor facilitair managers met tientallen panden.",
              en: "Business customers see their installations, maintenance reports and inspection dates per site, and report faults with a photo. Handy for facility managers with dozens of buildings.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Werkenbij-video met echte monteurs", en: "Careers video with real engineers" },
            text: {
              nl: "Een korte video van een werkdag op de bus of in een technische ruimte, met collega's die zelf vertellen. Voor je werkenbij-pagina, social media en de open dag.",
              en: "A short video of a working day on the road or in a plant room, with colleagues telling it in their own words. For your careers page, social media and the open day.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
          {
            title: { nl: "Laadpalen en zonnepanelen voor bedrijven", en: "EV chargers and solar for businesses" },
            text: {
              nl: "Een VvE, een bedrijventerrein of een wagenpark heeft andere vragen dan een particulier. Per doelgroep een eigen landingspagina met voorbeelden en een duidelijke aanvraagroute.",
              en: "A homeowners' association, a business park or a fleet has different questions than a homeowner. A dedicated landing page per audience with examples and a clear enquiry route.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Eén merk na een overname", en: "One brand after an acquisition" },
            text: {
              nl: "Na een overname of fusie rijden er bussen in drie verschillende stijlen rond. Een heldere merkkeuze en een gefaseerde rebranding brengen het samen, van bus en werkkleding tot offerte.",
              en: "After an acquisition or merger, vans in three different styles are on the road. A clear brand choice and a phased rebrand bring it all together, from vans and workwear to quotes.",
            },
            service: "branding-rebranding",
            application: "rebranding",
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
          {
            q: { nl: "Kunnen zakelijke klanten hun installaties en keuringen online inzien?", en: "Can business customers view their installations and inspections online?" },
            a: {
              nl: "Ja, in een [[klantportaal|klantportaal]]. Per locatie zien ze welke installaties er staan, wanneer het laatste onderhoud was, welke keuringen eraan komen en welke rapporten erbij horen. Storingen melden ze met foto's en locatie, zodat je monteur weet wat hij aantreft. Gegevens kunnen uit je planningssoftware of servicesysteem komen, afhankelijk van wat dat toestaat. Voor facilitair managers met veel panden scheelt dat een hoop mail, en voor hen is het een goede reden om klant te blijven.",
              en: "Yes, in a [[klantportaal|customer portal]]. Per site they see which installations are in place, when the last maintenance took place, which inspections are coming up and which reports belong to them. They report faults with photos and location, so your engineer knows what to expect. Data can come from your planning software or service system, depending on what it allows. For facility managers with many buildings that saves a lot of email, and it gives them a good reason to stay with you.",
            },
          },
          {
            q: { nl: "We hebben een overname gedaan: hoe brengen we de merken samen?", en: "We have made an acquisition: how do we bring the brands together?" },
            a: {
              nl: "Bepaal eerst welke kant je op wilt: één nieuw merk, het sterkste merk als paraplu, of de namen naast elkaar met een gezamenlijke afzender. Dat hangt af van hoe bekend elk bedrijf in zijn regio is en wat klanten en personeel ermee verbinden. Met een doordachte [[rebranding|rebranding]] vertaal je die keuze naar logo, bussen, werkkleding, website en offertes, gefaseerd zodat je niet alles in één week hoeft te vervangen. En vergeet de eigen mensen niet: zij dragen het nieuwe merk als eerste.",
              en: "First decide which way you want to go: one new brand, the strongest brand as an umbrella, or the names side by side with a shared endorsement. That depends on how well known each company is in its region and what customers and staff associate with it. With a well-considered [[rebranding|rebrand]] you translate that choice into logo, vans, workwear, website and quotes, in phases so you do not have to replace everything in one week. And do not forget your own people: they are the first to carry the new brand.",
            },
          },
          {
            q: { nl: "Hoe bereik ik zakelijke klanten voor laadpalen of zonnepanelen?", en: "How do I reach business customers for EV chargers or solar panels?" },
            a: {
              nl: "Zakelijke klanten kijken anders dan particulieren: naar terugverdientijd, netcapaciteit, onderhoud en wie het beheer doet. Maak voor elke doelgroep, zoals VvE's, bedrijventerreinen of wagenparken, een eigen [[landingspaginas|landingspagina]] met voorbeelden en de vragen die zij stellen. Via [[linkedin-ads|LinkedIn Ads]] bereik je facilitair managers en ondernemers gericht. Een korte check die een eerste indicatie geeft, maakt de stap naar een gesprek kleiner. En wees eerlijk over wat er bij netcongestie wel en niet kan.",
              en: "Business customers look at different things than homeowners: payback time, grid capacity, maintenance and who manages it all. Give each audience, such as homeowners' associations, business parks or fleets, its own [[landingspaginas|landing page]] with examples and the questions they ask. With [[linkedin-ads|LinkedIn Ads]] you reach facility managers and business owners in a targeted way. A short check that gives an initial indication makes the step to a conversation smaller. And be honest about what is and is not possible where the grid is congested.",
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
          {
            title: { nl: "Kennis die AI-assistenten als bron gebruiken", en: "Expertise AI assistants use as a source" },
            text: {
              nl: "Heldere uitleg over normen, onderzoeken en vergunningstrajecten, zo opgebouwd dat Google en AI-assistenten je als bron gebruiken. Kennis die nu alleen in je rapporten staat, wordt zo vindbaar.",
              en: "Clear explanations of standards, surveys and permit procedures, structured so Google and AI assistants use you as a source. Knowledge that now only lives in your reports becomes findable.",
            },
            service: "seo-aeo-geo",
            application: "geo",
          },
          {
            title: { nl: "Positionering voor een specialistisch bureau", en: "Positioning for a specialist firm" },
            text: {
              nl: "Wat maakt jullie anders dan het ingenieursbureau verderop? Een scherpe positionering en een huisstijl die vakmanschap uitstraalt, zodat opdrachtgevers je in één keer kunnen plaatsen.",
              en: "What makes you different from the engineering firm down the road? Sharp positioning and an identity that conveys expertise, so clients can place you at a glance.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Online dashboard voor opdrachtgevers", en: "Online dashboard for clients" },
            text: {
              nl: "Meetdata, inspectieresultaten en projectstatus in een online dashboard, in plaats van een maandelijkse pdf. Opdrachtgevers zien zelf wat er speelt en jij beantwoordt minder losse vragen.",
              en: "Measurement data, inspection results and project status in an online dashboard, instead of a monthly PDF. Clients see for themselves what is going on and you answer fewer separate questions.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
          {
            title: { nl: "AI die rapportconcepten voorbereidt", en: "AI that prepares draft reports" },
            text: {
              nl: "Een AI-agent zet inspectienotities, foto's en meetwaarden om in een eerste rapportopzet in jullie vaste format. De engineer controleert, vult aan en tekent, maar begint niet meer met een leeg document.",
              en: "An AI agent turns inspection notes, photos and readings into a first report draft in your standard format. The engineer checks, adds and signs off, but no longer starts with a blank document.",
            },
            service: "ai-consultancy",
            application: "ai-agents",
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
          {
            q: {
              nl: "Hoe word ik gevonden op specialistische vragen, ook in AI-assistenten?",
              en: "How do I get found for specialist questions, including in AI assistants?",
            },
            a: {
              nl: "Opdrachtgevers beginnen steeds vaker met een vraag aan Google of een AI-assistent, zoals 'wat houdt een constructieve keuring in' of 'wanneer heb ik een geluidsonderzoek nodig'. Wie daar helder, feitelijk en met bronvermelding antwoord op geeft, wordt vaker gevonden en genoemd. Met [[geo|GEO]] en [[aeo|AEO]] bouwen we je kennispagina's zo op dat ze goed te lezen zijn voor mensen én taalmodellen. Garanties op vermeldingen geeft niemand, maar je maakt ze een stuk waarschijnlijker als je vakkennis goed op je eigen site staat.",
              en: "Clients increasingly start with a question to Google or an AI assistant, such as 'what does a structural inspection involve' or 'when do I need a noise assessment'. Those who answer clearly, factually and with sources are found and mentioned more often. With [[geo|GEO]] and [[aeo|AEO]] we structure your knowledge pages so they read well for people and language models alike. Nobody can guarantee mentions, but you make them a lot more likely when your expertise is properly published on your own site.",
            },
          },
          {
            q: { nl: "Kunnen opdrachtgevers meetdata of projectstatus online inzien?", en: "Can clients view measurement data or project status online?" },
            a: {
              nl: "Ja. In plaats van een maandelijkse pdf bouwen we een [[dashboards|dashboard]] of klantomgeving waarin opdrachtgevers meetwaarden, inspectieresultaten, documenten en de status van hun project zien. De data komt uit je eigen systemen, meetapparatuur of spreadsheets, afhankelijk van wat er beschikbaar is. Met rechten per gebruiker bepaal je wie wat ziet. Dat scheelt je team vragen, en het laat je werk zien op het moment dat het gebeurt.",
              en: "Yes. Instead of a monthly PDF, we build a [[dashboards|dashboard]] or client environment where clients see readings, inspection results, documents and the status of their project. The data comes from your own systems, measuring equipment or spreadsheets, depending on what is available. With permissions per user you decide who sees what. That saves your team questions, and it shows your work as it happens.",
            },
          },
          {
            q: { nl: "Kan AI helpen bij het schrijven van rapporten en offertes?", en: "Can AI help with writing reports and proposals?" },
            a: {
              nl: "Ja, als hulpmiddel en niet als vervanger van de engineer. Een [[ai-agents|AI-agent]] kan inspectienotities, foto's en meetwaarden omzetten in een eerste opzet in jullie vaste format, of standaardteksten voor een offerte klaarzetten. De specialist controleert, vult aan en blijft eindverantwoordelijk. We kijken vooraf welke gegevens wel en niet naar een AI-dienst mogen, en richten het zo in dat vertrouwelijke projectinformatie veilig blijft.",
              en: "Yes, as a tool rather than a replacement for the engineer. An [[ai-agents|AI agent]] can turn inspection notes, photos and readings into a first draft in your standard format, or prepare standard texts for a proposal. The specialist checks, adds and remains responsible. We assess upfront which data may and may not go to an AI service, and set it up so confidential project information stays secure.",
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
          {
            title: { nl: "Productfoto's in één consistente stijl", en: "Product photos in one consistent style" },
            text: {
              nl: "Duizenden artikelen met leveranciersfoto's in tien verschillende stijlen ogen rommelig. Een vaste fotostijl voor je eigen assortiment en zorgvuldige nabewerking maken je webshop rustig en betrouwbaar.",
              en: "Thousands of items with supplier photos in ten different styles look messy. A fixed photo style for your own range and careful retouching make your web shop calm and trustworthy.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Keuzehulp voor het juiste artikel", en: "Product finder for the right item" },
            text: {
              nl: "Welke plug bij welke ondergrond, welke slang bij welke druk? Een keuzehulp stelt een paar vragen en wijst het passende artikel aan, ook voor klanten met minder ervaring.",
              en: "Which anchor for which substrate, which hose for which pressure? A product finder asks a few questions and points to the right item, even for less experienced customers.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Nabestelmails en heractivatie", en: "Reorder reminders and reactivation" },
            text: {
              nl: "Klanten die een verbruiksartikel regelmatig bestellen, krijgen op tijd een herinnering met een nabestellink. Wie een tijd niets bestelde, krijgt een persoonlijk bericht van zijn vaste contactpersoon.",
              en: "Customers who regularly order a consumable get a timely reminder with a reorder link. Those who have not ordered for a while get a personal message from their regular contact.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Productteksten met AI, op basis van specs", en: "AI product texts based on specs" },
            text: {
              nl: "Duizenden artikelen zonder goede omschrijving? AI schrijft op basis van je productdata een eerste tekst per artikel, in je eigen toon. Je team controleert steekproefsgewijs en de specificaties blijven leidend.",
              en: "Thousands of items without a proper description? AI writes a first text per item based on your product data, in your own tone. Your team spot-checks the output and the specifications remain leading.",
            },
            service: "ai-consultancy",
            application: "ai-content",
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
          {
            q: { nl: "Hoe krijg ik duizenden productomschrijvingen op orde?", en: "How do I get thousands of product descriptions in order?" },
            a: {
              nl: "Begin bij de data, niet bij de teksten. Zorg dat specificaties, maten en normen per artikel compleet en eenduidig zijn, het liefst in één bron zoals je ERP of een PIM. Daarna kan [[ai-content|AI]] op basis van die data een eerste omschrijving per artikel schrijven, in je eigen toon en per productgroep afgestemd. Je team controleert steekproefsgewijs en verbetert de belangrijkste groepen met de hand. Zo kom je veel verder dan wanneer je alles handmatig schrijft, zonder verzonnen specificaties.",
              en: "Start with the data, not the texts. Make sure specifications, sizes and standards per item are complete and consistent, ideally in one source such as your ERP or a PIM. Then [[ai-content|AI]] can write a first description per item based on that data, in your own tone and tailored per product group. Your team spot-checks and improves the most important groups by hand. That gets you much further than writing everything manually, without invented specifications.",
            },
          },
          {
            q: { nl: "Kunnen we vaste klanten automatisch herinneren aan nabestellen?", en: "Can we automatically remind regular customers to reorder?" },
            a: {
              nl: "Ja. Op basis van de bestelhistorie zie je wanneer een klant een verbruiksartikel ongeveer weer nodig heeft, en stuur je op tijd een herinnering met een directe nabestellink. Met [[marketing-automation|marketing automation]] gaat dat vanzelf, gekoppeld aan je webshop of ERP. Klanten die een tijd niets bestelden, krijgen een persoonlijk bericht van hun vaste contactpersoon. Geen spam, maar de service die je binnendienst anders aan de telefoon zou geven.",
              en: "Yes. Based on order history you can see roughly when a customer will need a consumable again, and send a timely reminder with a direct reorder link. With [[marketing-automation|marketing automation]] that happens on its own, linked to your web shop or ERP. Customers who have not ordered for a while get a personal message from their regular contact. Not spam, but the service your inside sales team would otherwise provide by phone.",
            },
          },
          {
            q: { nl: "Hoe lang duurt het om een B2B-webshop met ERP-koppeling te bouwen?", en: "How long does it take to build a B2B web shop with an ERP integration?" },
            a: {
              nl: "Dat hangt vooral af van je assortiment, de kwaliteit van je productdata en wat je ERP aan [[api-koppelingen|koppelingen]] biedt. Een shop met een overzichtelijk assortiment en een standaardkoppeling is sneller live dan een shop met tienduizenden artikelen, klantprijzen en meerdere magazijnen. We beginnen daarom met een korte inventarisatie van data en systemen, en bouwen daarna gefaseerd: eerst bestellen voor vaste klanten, daarna uitbreiden. Na de scopingsessie krijg je een realistische planning.",
              en: "That mainly depends on your product range, the quality of your product data and the [[api-koppelingen|integrations]] your ERP offers. A shop with a manageable range and a standard integration goes live sooner than one with tens of thousands of items, customer pricing and several warehouses. So we start with a short inventory of data and systems, then build in phases: first ordering for regular customers, then expanding. After the scoping session you receive a realistic planning.",
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
          {
            title: { nl: "Online aanmelden en afspraken maken", en: "Register and book appointments online" },
            text: {
              nl: "Patiënten melden zich aan of plannen een vervolgafspraak zonder te bellen, via de module van je praktijksoftware of een widget die erop aansluit. Je balie houdt tijd over voor de mensen in de wachtkamer.",
              en: "Patients register or book a follow-up appointment without calling, through your practice software's module or a widget that connects to it. Your front desk has more time for the people in the waiting room.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Eén huisstijl voor je gezondheidscentrum", en: "One identity for your health centre" },
            text: {
              nl: "Fysio, diëtist en huisarts onder één dak, maar elk met een eigen logo? Eén heldere huisstijl met ruimte per discipline maakt het centrum herkenbaar, van gevelbord tot afsprakenkaartje.",
              en: "Physio, dietitian and GP under one roof, but each with their own logo? One clear identity with room for each discipline makes the centre recognisable, from facade sign to appointment card.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Welkomstmail voor nieuwe patiënten", en: "Welcome email for new patients" },
            text: {
              nl: "Na aanmelding automatisch een mail met wat iemand meeneemt, waar hij kan parkeren en hoe het eerste bezoek verloopt. Praktisch en geruststellend, zonder medische gegevens in een gewone mail.",
              en: "After registering, an automatic email explaining what to bring, where to park and how the first visit works. Practical and reassuring, without medical data in an ordinary email.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Wachtkamerscherm en folders in één stijl", en: "Waiting room screen and leaflets aligned" },
            text: {
              nl: "Informatie over behandelingen, vergoedingen en preventie op het wachtkamerscherm, in folders en op je website, steeds in dezelfde rustige stijl. Zo leest iedereen hetzelfde, waar hij ook kijkt.",
              en: "Information on treatments, insurance cover and prevention on the waiting room screen, in leaflets and on your website, always in the same calm style. Everyone reads the same message wherever they look.",
            },
            service: "grafisch-ontwerp-print",
            application: "flyers-posters",
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
          {
            q: { nl: "Hoe ga ik als praktijk om met online reviews?", en: "How should my practice handle online reviews?" },
            a: {
              nl: "Reageer op elke review, kort en vriendelijk, maar ga nooit in op de behandeling zelf. Je beroepsgeheim geldt ook online, dus bevestig niet eens dat iemand patiënt is. Bij kritiek nodig je de schrijver uit om contact op te nemen met de praktijk. Vraag tevreden patiënten gerust om een review, bijvoorbeeld met een kaartje of een link in een afsluitende mail, maar beloon het niet. Een goed bijgehouden Google-profiel helpt je [[lokale-seo|lokale vindbaarheid]], en je antwoorden laten zien hoe je met mensen omgaat.",
              en: "Respond to every review, briefly and kindly, but never discuss the treatment itself. Patient confidentiality applies online too, so do not even confirm that someone is a patient. When there is criticism, invite the writer to contact the practice. Feel free to ask satisfied patients for a review, for example with a card or a link in a closing email, but do not reward it. A well-kept Google profile helps your [[lokale-seo|local visibility]], and your replies show how you treat people.",
            },
          },
          {
            q: {
              nl: "We zijn een gezondheidscentrum met meerdere disciplines. Eén website of meerdere?",
              en: "We are a health centre with several disciplines. One website or several?",
            },
            a: {
              nl: "Meestal één, met een duidelijke eigen plek per discipline. Patiënten zoeken vaak eerst op de zorg die ze nodig hebben, en ontdekken daarna dat de diëtist of podotherapeut in hetzelfde gebouw zit. Eén site met een gezamenlijke [[huisstijl|huisstijl]] versterkt dat, en is makkelijker te onderhouden dan vijf losse sites. Elke praktijk houdt een eigen pagina met team, aanbod en afspraakknop, en waar nodig een eigen domeinnaam die naar die pagina verwijst.",
              en: "Usually one, with a clear place of its own for each discipline. Patients often search first for the care they need, then discover that the dietitian or podiatrist is in the same building. One site with a shared [[huisstijl|visual identity]] reinforces that, and it is easier to maintain than five separate sites. Each practice keeps its own page with team, services and booking button, and where needed its own domain name pointing to that page.",
            },
          },
          {
            q: { nl: "Wat kost een nieuwe praktijkwebsite en hoe lang duurt het?", en: "What does a new practice website cost and how long does it take?" },
            a: {
              nl: "Dat hangt af van het aantal locaties, disciplines en koppelingen, zoals een module voor online afspraken. Een compacte [[websites-webshops|website]] staat gemiddeld in 4 tot 6 weken online, mits teksten en foto's op tijd klaar zijn. Daar helpen we graag bij, want echte foto's van je team maken veel verschil. Indicatieve prijzen zie je in onze configurator op letsgo.m7branding.com, en na een korte kennismaking krijg je een voorstel op maat.",
              en: "That depends on the number of locations, disciplines and integrations, such as an online booking module. A compact [[websites-webshops|website]] is typically online in 4 to 6 weeks, provided texts and photos are ready on time. We are happy to help with that, because real photos of your team make a big difference. You can see indicative prices in our configurator at letsgo.m7branding.com, and after a short introduction you receive a tailored proposal.",
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
          {
            title: { nl: "Een merk dat rust en vakmanschap uitstraalt", en: "A brand that radiates calm and expertise" },
            text: {
              nl: "Een kliniek kies je niet op prijs alleen. Een verzorgde positionering en huisstijl, met echte foto's van je behandelaars en ruimtes, wekken vertrouwen nog voordat iemand binnenstapt.",
              en: "People do not choose a clinic on price alone. Polished positioning and identity, with real photos of your practitioners and rooms, build trust before anyone walks in.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Kliniek en behandelaars op video", en: "Clinic and practitioners on video" },
            text: {
              nl: "Een korte video van de kliniek, met behandelaars die uitleggen hoe een consult verloopt. Wie twijfelt, weet zo precies wat hem te wachten staat, nog voor hij een afspraak maakt.",
              en: "A short video of the clinic, with practitioners explaining how a consultation works. Anyone in doubt knows exactly what to expect, before they even book.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
          {
            title: { nl: "Behandelinformatie die gevonden wordt", en: "Treatment information that gets found" },
            text: {
              nl: "Mensen vragen Google of een AI-assistent wat een ooglaserbehandeling of haartransplantatie inhoudt. Heldere, feitelijke pagina's per behandeling maken de kans groter dat jouw kliniek het antwoord is.",
              en: "People ask Google or an AI assistant what laser eye surgery or a hair transplant involves. Clear, factual pages per treatment make it more likely that your clinic is the answer.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
          {
            title: { nl: "Een brochure voor na het consult", en: "A brochure for after the consultation" },
            text: {
              nl: "Een verzorgde brochure per behandeling met het traject, de nazorg en de contactgegevens. Rustig om thuis nog eens na te lezen, samen met een partner of familielid.",
              en: "A polished brochure per treatment covering the process, aftercare and contact details. Something to read again calmly at home, together with a partner or family member.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
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
          {
            q: { nl: "Hoe ga ik om met voor-en-nafoto's op mijn website?", en: "How should I handle before-and-after photos on my website?" },
            a: {
              nl: "Zorgvuldig. Gebruik alleen foto's van echte patiënten met hun uitdrukkelijke, schriftelijke toestemming, en spreek af waar en hoe lang je ze toont. Laat ze zien zoals ze zijn, zonder nabewerking die het resultaat mooier maakt, en vermeld dat resultaten per persoon verschillen. Voor sommige behandelingen gelden extra regels voor reclame, dus laat de juridische kant toetsen door je eigen adviseur of beroepsvereniging. Wij zorgen voor een rustige, respectvolle presentatie in je [[ux-ui-webdesign|webdesign]].",
              en: "Carefully. Only use photos of real patients with their explicit written consent, and agree where and for how long you show them. Show them as they are, without retouching that improves the result, and state that results vary from person to person. Some treatments have additional advertising rules, so have the legal side checked by your own advisor or professional association. We take care of a calm, respectful presentation in your [[ux-ui-webdesign|web design]].",
            },
          },
          {
            q: { nl: "Hoe trek ik patiënten uit een groter gebied of uit het buitenland aan?", en: "How do I attract patients from a wider area or from abroad?" },
            a: {
              nl: "Wie verder reist voor een behandeling, wil vooral zekerheid: wie behandelt me, hoe verloopt het traject en hoe vaak moet ik terugkomen? Beantwoord die vragen per behandeling, met informatie over reizen, verblijf en nazorg op afstand. Een [[meertalige-website|meertalige website]] helpt als je patiënten uit België, Duitsland of verder ontvangt. Met heldere pagina's per behandeling en [[aeo|AEO]] word je ook gevonden door mensen die hun vraag aan een AI-assistent stellen.",
              en: "People who travel further for a treatment mainly want certainty: who will treat me, how does the process work and how often do I need to come back? Answer those questions per treatment, with information about travel, accommodation and remote aftercare. A [[meertalige-website|multilingual website]] helps if you welcome patients from Belgium, Germany or further afield. With clear pages per treatment and [[aeo|AEO]] you are also found by people who put their question to an AI assistant.",
            },
          },
          {
            q: { nl: "Hoe onderscheid ik mijn kliniek zonder te schreeuwen?", en: "How do I make my clinic stand out without shouting?" },
            a: {
              nl: "Door rust en vakmanschap uit te stralen in alles wat je doet. Een doordachte [[merkstrategie|positionering]] maakt duidelijk waar je in gespecialiseerd bent en voor wie, zodat je niet met elke kliniek op prijs concurreert. Echte foto's van je behandelaars en ruimtes, een verzorgde website en een brochure die je na het consult meegeeft, maken dat verhaal tastbaar. Kortingsacties en wonderbeloftes laat je liever achterwege. In de zorg werkt vertrouwen beter dan urgentie.",
              en: "By radiating calm and expertise in everything you do. Well-considered [[merkstrategie|positioning]] makes clear what you specialise in and for whom, so you are not competing with every clinic on price. Real photos of your practitioners and rooms, a polished website and a brochure you hand out after the consultation make that story tangible. Leave out discount campaigns and miracle promises. In healthcare, trust works better than urgency.",
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
          {
            title: { nl: "Een warme, eigen huisstijl", en: "A warm identity of your own" },
            text: {
              nl: "Geen stockfoto van een zonsondergang, maar een rustige stijl en echte foto's die passen bij hoe je werkt. Zo voelt een eerste kennismaking al vertrouwd, nog voordat iemand belt.",
              en: "No stock sunset, but a calm style and real photos that match how you work. That way a first introduction already feels familiar, before anyone even calls.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Kennismakingsgesprek online inplannen", en: "Book an introductory call online" },
            text: {
              nl: "Wie nog twijfelt, plant liever een vrijblijvend kennismakingsgesprek dan dat hij belt. Een eenvoudige afsprakenwidget met bevestiging en herinnering maakt die eerste stap klein.",
              en: "People who are still unsure would rather book a no-obligation introductory call than phone. A simple booking widget with confirmation and reminder keeps that first step small.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Rustige posts waarin mensen zich herkennen", en: "Calm posts people recognise themselves in" },
            text: {
              nl: "Korte posts en video's over thema's als stress, piekeren of rouw, in je eigen woorden. Voor coaches op LinkedIn of Instagram een manier om zichtbaar te zijn zonder te verkopen.",
              en: "Short posts and videos on themes such as stress, worrying or grief, in your own words. For coaches on LinkedIn or Instagram, a way to be visible without selling.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Aanmelding die veilig doorloopt", en: "Registration that flows through securely" },
            text: {
              nl: "Een eerste aanmelding met alleen de gegevens die nodig zijn, die automatisch klaarstaat in je planning of beveiligde omgeving, waar je systeem dat toelaat. Geen gevoelige informatie in een gewone mailbox.",
              en: "A first registration with only the necessary details, automatically ready in your planning or secure environment, where your system allows it. No sensitive information in an ordinary inbox.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
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
          {
            q: {
              nl: "Mag ik als psycholoog of coach reviews of ervaringen van cliënten gebruiken?",
              en: "Can I use reviews or client experiences as a psychologist or coach?",
            },
            a: {
              nl: "Wees daar terughoudend mee. In de GGZ is alleen al het feit dat iemand cliënt is gevoelige informatie, en je beroepscode kan er regels over hebben. Gebruik ervaringen alleen met uitdrukkelijke toestemming, liefst geanonimiseerd, en reageer op online reviews zonder iets over de behandeling of de persoon te bevestigen. Vaak werkt het beter om te laten zien wie jij bent en hoe je werkt, met een korte video of een [[tone-of-voice|persoonlijke toon]] op je website. Check bij twijfel je beroepsvereniging.",
              en: "Be cautious. In mental healthcare, even the fact that someone is a client is sensitive information, and your professional code may have rules about it. Only use experiences with explicit consent, preferably anonymised, and respond to online reviews without confirming anything about the treatment or the person. It often works better to show who you are and how you work, with a short video or a [[tone-of-voice|personal tone]] on your website. If in doubt, check with your professional association.",
            },
          },
          {
            q: { nl: "Hoe zet ik mijn praktijk neer zonder stockfoto's van zonsondergangen?", en: "How do I present my practice without stock photos of sunsets?" },
            a: {
              nl: "Met beelden die laten zien waar en bij wie iemand straks zit. Een paar rustige foto's van je praktijkruimte, de wachtkamer en jezelf zeggen meer dan een strand bij zonsondergang. Daarbij hoort een [[huisstijl|huisstijl]] die past bij je manier van werken: warm, nuchter of juist zakelijk. We regelen een korte fotosessie in je eigen ruimte, zonder poses die niet bij je passen. Mensen kiezen een behandelaar bij wie ze zich veilig voelen, en dat begint bij herkenning.",
              en: "With images that show where and with whom someone will be sitting. A few calm photos of your practice room, the waiting room and yourself say more than a beach at sunset. Add a [[huisstijl|visual identity]] that suits the way you work: warm, down-to-earth or more businesslike. We arrange a short photo shoot in your own space, without poses that do not suit you. People choose a practitioner they feel safe with, and that starts with recognition.",
            },
          },
          {
            q: { nl: "Werkt social media voor een coach of therapeut?", en: "Does social media work for a coach or therapist?" },
            a: {
              nl: "Voor coaches vaak wel, voor therapeuten met meer voorzichtigheid. Het werkt als je laat zien hoe je denkt en werkt, met herkenbare thema's in gewone taal, en niet als je elke week een aanbieding post. LinkedIn past goed bij loopbaan- en leiderschapscoaches, Instagram bij thema's als stress of zelfvertrouwen. Een vaste [[contentstrategie|contentstrategie]] met een haalbaar ritme voorkomt dat het een tweede baan wordt. Ga nooit in op persoonlijke hulpvragen in de reacties, maar verwijs naar een veilig contactkanaal.",
              en: "For coaches often yes, for therapists with more care. It works when you show how you think and work, with recognisable themes in plain language, not when you post an offer every week. LinkedIn suits career and leadership coaches, Instagram suits themes such as stress or self-confidence. A fixed [[contentstrategie|content strategy]] with a manageable rhythm stops it becoming a second job. Never respond to personal requests for help in the comments, but refer people to a secure contact channel.",
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
          {
            title: { nl: "Werkenbij-site met echte collega's", en: "Careers site with real colleagues" },
            text: {
              nl: "Vacatures per locatie en functie, verhalen van collega's en een sollicitatie die in een paar minuten klaar is. Gekoppeld aan je recruitmentsysteem waar dat kan.",
              en: "Vacancies per location and role, stories from colleagues and an application that takes a few minutes. Connected to your recruitment system where possible.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Folders in begrijpelijke taal", en: "Leaflets in plain language" },
            text: {
              nl: "Informatie over wonen, zorg en kosten in eenvoudige taal, met pictogrammen waar dat helpt. Als folder voor de familie aan de keukentafel én als pagina op je website.",
              en: "Information about housing, care and costs in plain language, with icons where they help. As a leaflet for the family at the kitchen table and as a page on your website.",
            },
            service: "grafisch-ontwerp-print",
            application: "flyers-posters",
          },
          {
            title: { nl: "Medewerkersapp voor de werkvloer", en: "Staff app for frontline teams" },
            text: {
              nl: "Nieuws, protocollen, contactgegevens en een link naar je roostersysteem op één plek, op de telefoon. Zo mist niemand belangrijke informatie omdat hij nooit zijn mail opent.",
              en: "News, protocols, contact details and a link to your rostering system in one place, on the phone. Nobody misses important information because they never open their email.",
            },
            service: "web-apps-portals-apps",
            application: "mobiele-app",
          },
          {
            title: { nl: "Aanmeldingen direct bij het juiste team", en: "Registrations straight to the right team" },
            text: {
              nl: "Een aanmelding voor thuiszorg, dagbesteding of wonen komt automatisch bij het juiste team of de juiste locatie terecht. De aanvrager krijgt direct een bevestiging met wat er nu gebeurt.",
              en: "A registration for home care, day activities or housing automatically reaches the right team or location. The applicant immediately gets a confirmation explaining what happens next.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
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
          {
            q: { nl: "Hoe zorg ik dat iedereen onze informatie begrijpt?", en: "How do I make sure everyone understands our information?" },
            a: {
              nl: "Schrijf op taalniveau B1: korte zinnen, gewone woorden en één boodschap per alinea. Dat is geen versimpeling, het leest gewoon prettiger, ook voor hoogopgeleiden met haast. Gebruik pictogrammen en foto's waar ze helpen, en zorg dat de website goed werkt met een schermlezer of vergroting. Zet dezelfde informatie ook in een heldere [[flyers-posters|folder]] voor wie liever op papier leest, zoals veel ouderen en hun familie. We schrijven en ontwerpen het samen met jullie, en testen het waar het kan met echte lezers.",
              en: "Write in plain language: short sentences, everyday words and one message per paragraph. That is not dumbing down, it simply reads more easily, even for highly educated people in a hurry. Use icons and photos where they help, and make sure the website works well with a screen reader or zoom. Put the same information in a clear [[flyers-posters|leaflet]] for those who prefer paper, like many older people and their families. We write and design it together with you, and test it with real readers where possible.",
            },
          },
          {
            q: { nl: "Hoe houden we medewerkers zonder vaste werkplek goed op de hoogte?", en: "How do we keep staff without a fixed workstation properly informed?" },
            a: {
              nl: "Niet via een mailbox die bijna niemand opent. Een eenvoudige medewerkersapp of intranet op de telefoon brengt nieuws, protocollen, contactgegevens en links naar je rooster samen op één plek. Pushberichten gebruik je alleen voor wat echt belangrijk is, anders worden ze genegeerd. Een [[mobiele-app|app]] of web-app kan inloggen via je bestaande accounts, zodat er geen extra wachtwoord bij komt. We beginnen klein, met de informatie waar collega's nu het vaakst naar zoeken.",
              en: "Not through an inbox hardly anyone opens. A simple staff app or intranet on the phone brings news, protocols, contact details and links to your rosters together in one place. Use push notifications only for what really matters, or they will be ignored. An [[mobiele-app|app]] or web app can use sign-in with your existing accounts, so there is no extra password. We start small, with the information colleagues search for most often now.",
            },
          },
          {
            q: {
              nl: "Hoe pak je een website aan voor een kleinschalig zorginitiatief of zorgboerderij?",
              en: "How do you approach a website for a small-scale care initiative or care farm?",
            },
            a: {
              nl: "Klein en persoonlijk, net als je zorg. Laat zien waar je zit, wie er werken, hoe een dag eruitziet en voor wie je plek bedoeld is, met echte foto's van het erf, de dieren of de huiskamer. Leg in gewone taal uit hoe aanmelden werkt en welke financiering mogelijk is, zoals de Wmo, de Wlz of een pgb, en verwijs naar de officiële bronnen. Een compacte [[wordpress-website|website]] die je zelf bijhoudt, is vaak genoeg. Zo vinden verwijzers, cliënten en familie je, en weten ze meteen of het past.",
              en: "Small and personal, just like your care. Show where you are, who works there, what a day looks like and who your place is meant for, with real photos of the farmyard, the animals or the living room. Explain in plain language how registration works and which funding may apply, such as the Wmo, the Wlz or a personal budget, and refer to the official sources. A compact [[wordpress-website|website]] you maintain yourself is often enough. That way referrers, clients and families find you and know right away whether it is a fit.",
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
              nl: "Eén kernverhaal, vertaald naar wat zorgverleners, verzekeraars en investeerders willen horen. Zonder wonderclaims, want in de zorg prikken mensen daar snel doorheen.",
              en: "One core story, translated into what care professionals, insurers and investors want to hear. No miracle claims, because people in healthcare see through those quickly.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Pitchdeck voor je volgende ronde", en: "Pitch deck for your next round" },
            text: {
              nl: "Probleem, oplossing, markt, tractie en team in een handvol heldere slides. Ook bruikbaar richting zorginkopers, verzekeraars en partners.",
              en: "Problem, solution, market, traction and team in a handful of clear slides. Also useful for healthcare purchasers, insurers and partners.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Productwebsite met een route per doelgroep", en: "Product website with a route per audience" },
            text: {
              nl: "Patiënten, zorgverleners en zorginkopers krijgen elk een eigen route, met hun eigen vragen en in hun eigen taal. Je team past de site zelf aan als het product doorontwikkelt.",
              en: "Patients, care professionals and healthcare purchasers each get their own route, with their own questions and in their own language. Your team updates the site themselves as the product evolves.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Onboarding die zorgverleners afmaken", en: "Onboarding care professionals complete" },
            text: {
              nl: "Zorgverleners hebben weinig tijd. Een heldere eerste ervaring, korte uitleg in de app en een paar goed getimede mails zorgen dat ze na de demo ook echt aan de slag gaan.",
              en: "Care professionals have little time. A clear first experience, short in-app guidance and a few well-timed emails make sure they actually get started after the demo.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Uitlegvideo die het product laat zien", en: "Explainer video that shows the product" },
            text: {
              nl: "Een korte animatie die in een minuut laat zien welk probleem je oplost en hoe het werkt. Voor je website, demo's, congressen en gesprekken met zorginkopers.",
              en: "A short animation that shows in one minute which problem you solve and how it works. For your website, demos, conferences and meetings with healthcare purchasers.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "AI-functies verantwoord inbouwen", en: "Building in AI features responsibly" },
            text: {
              nl: "Samenvattingen, slim zoeken of hulp bij verslaglegging, met taalmodellen ingebouwd in je eigen product. Met vooraf heldere afspraken over data, privacy en wat de zorgverlener zelf controleert.",
              en: "Summaries, smart search or help with reporting, with language models built into your own product. With clear agreements upfront on data, privacy and what the care professional checks themselves.",
            },
            service: "ai-consultancy",
            application: "ai-integraties",
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
          {
            q: { nl: "Hoe krijg ik zorgverleners zover dat ze mijn product echt gebruiken?", en: "How do I get care professionals to actually use my product?" },
            a: {
              nl: "Door het ze zo makkelijk mogelijk te maken, want zorgverleners hebben weinig tijd en weinig geduld met software die extra klikken kost. Test vroeg met echte gebruikers, schrap wat niet nodig is en zorg voor een eerste ervaring die in een paar minuten iets oplevert. Korte uitleg in de app, een paar goed getimede mails en een vast aanspreekpunt helpen bij de start. Meet daarna welke functies echt gebruikt worden, en verbeter op basis daarvan. Een goede [[ux-ui-app-design|UX]] doet hier meer dan een extra feature.",
              en: "By making it as easy as possible for them, because care professionals have little time and little patience for software that adds clicks. Test early with real users, cut what is not needed and make sure the first experience delivers something within a few minutes. Short in-app guidance, a few well-timed emails and a fixed point of contact help at the start. Then measure which features are really used, and improve based on that. Good [[ux-ui-app-design|UX]] does more here than an extra feature.",
            },
          },
          {
            q: { nl: "Kan ik AI verantwoord inzetten in een zorgproduct?", en: "Can I use AI responsibly in a care product?" },
            a: {
              nl: "Ja, als je het zorgvuldig inricht. Denk aan samenvattingen van verslagen, slimmer zoeken in informatie of hulp bij administratie, waarbij de zorgverlener altijd controleert en beslist. Bepaal vooraf welke gegevens naar een taalmodel mogen, waar die data blijft en hoe je dat aan gebruikers uitlegt. Heeft een functie invloed op diagnose of behandeling, dan kan de MDR van toepassing zijn, en ook de Europese AI-verordening stelt eisen. Met [[ai-integraties|AI-integraties]] bouwen we het in je product, met de juridische toets bij je eigen specialist.",
              en: "Yes, if you set it up carefully. Think of summarising reports, smarter searching through information or help with administration, with the care professional always checking and deciding. Decide upfront which data may go to a language model, where that data stays and how you explain this to users. If a feature affects diagnosis or treatment, the MDR may apply, and the European AI Act sets requirements too. With [[ai-integraties|AI integrations]] we build it into your product, with the legal review done by your own specialist.",
            },
          },
          {
            q: { nl: "Hoe lang duurt het om een MVP van een zorgapp te bouwen?", en: "How long does it take to build an MVP of a care app?" },
            a: {
              nl: "Een [[mvp-ontwikkeling|MVP]] of compact portaal staat gemiddeld in 6 tot 12 weken live, afhankelijk van de functies, koppelingen en eisen aan beveiliging. In de zorg komt daar vaak tijd bij voor privacy, een DPIA en het testen met zorgverleners, en dat wil je niet afraffelen. We beginnen met een scopingsessie en een klikbaar prototype, zodat je snel iets hebt om mee te testen of te pitchen. Daarna bouwen we in sprints door op basis van feedback en data.",
              en: "An [[mvp-ontwikkeling|MVP]] or compact portal is typically live in 6 to 12 weeks, depending on the features, integrations and security requirements. In healthcare, extra time is often needed for privacy, a DPIA and testing with care professionals, and you do not want to rush that. We start with a scoping session and a clickable prototype, so you quickly have something to test or pitch with. After that we keep building in sprints based on feedback and data.",
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
          {
            title: { nl: "Kennismaking direct online inplannen", en: "Book an introduction directly online" },
            text: {
              nl: "Een oriënterend gesprek plannen in je agenda, op kantoor, aan de keukentafel of via video. Met een bevestiging en een kort lijstje van wat iemand alvast kan klaarleggen.",
              en: "Book an exploratory meeting straight into your calendar, at the office, at the kitchen table or by video. With a confirmation and a short list of what to have ready.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Video's waarin je een lastige vraag uitlegt", en: "Videos explaining a tricky question" },
            text: {
              nl: "Wat betekent een scheiding voor je hypotheek? Twee minuten aan tafel waarin jij het uitlegt, doet meer voor vertrouwen dan een pagina tekst. Voor je site, YouTube en LinkedIn.",
              en: "What does a divorce mean for your mortgage? Two minutes at the table with you explaining it does more for trust than a page of text. For your site, YouTube and LinkedIn.",
            },
            service: "foto-video-3d-animatie",
          },
          {
            title: { nl: "Documenten veilig laten aanleveren", en: "Secure document upload for clients" },
            text: {
              nl: "Loonstroken, WOZ-beschikking en ID uploaden in een beveiligde omgeving, met een checklist die laat zien wat nog ontbreekt. Geen documenten meer via WhatsApp of gewone mail.",
              en: "Payslips, property valuation notice and ID uploaded in a secure environment, with a checklist showing what is still missing. No more documents via WhatsApp or ordinary email.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Lokaal gevonden naast de ketens", en: "Found locally, next to the chains" },
            text: {
              nl: "Een compleet Google Bedrijfsprofiel, reviews en een pagina per vestiging. Zo vindt iemand die 'hypotheekadviseur Oss' zoekt een kantoor om de hoek, en niet alleen een landelijke keten.",
              en: "A complete Google Business Profile, reviews and a page per office. That way someone searching for a mortgage advisor in their town finds an office around the corner, not just a national chain.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
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
          {
            q: { nl: "Hoe ontvang ik documenten van klanten veilig?", en: "How do I receive documents from clients securely?" },
            a: {
              nl: "Niet via WhatsApp of een gewone mailbox. In een beveiligde [[klantportaal|klantomgeving]] uploaden klanten loonstroken, WOZ-beschikkingen en identiteitsbewijzen, met een checklist die laat zien wat er nog ontbreekt. Vaak kan dat via de module van je adviessoftware, die we netjes in je website inpassen, of via een eigen portaal als je meer wilt. Zorg voor tweestapsverificatie, duidelijke bewaartermijnen en een privacyverklaring die klopt. Zo werk je AVG-bewust, en hoef je niet drie keer om dezelfde loonstrook te vragen.",
              en: "Not via WhatsApp or an ordinary inbox. In a secure [[klantportaal|client environment]] clients upload payslips, property valuations and ID, with a checklist showing what is still missing. Often that can be done through your advisory software's module, which we fit neatly into your website, or through a custom portal if you want more. Make sure there is two-factor authentication, clear retention periods and an accurate privacy statement. That way you work GDPR-aware, and you do not have to ask for the same payslip three times.",
            },
          },
          {
            q: { nl: "Werkt video voor een financieel adviseur?", en: "Does video work for a financial advisor?" },
            a: {
              nl: "Vaak beter dan je denkt. Klanten kiezen een adviseur die ze vertrouwen, en in een video zien ze meteen hoe je praat en uitlegt. Begin met de vragen die je elke week krijgt, zoals wat een scheiding betekent voor je hypotheek of hoe pensioen werkt als ondernemer, en leg ze in twee minuten rustig uit, zonder te verkopen. Op een contentdag nemen we in één keer een reeks [[social-video|korte video's]] op voor je website, YouTube en LinkedIn. Houd daarbij wel de regels voor financiële communicatie in het oog.",
              en: "Often better than you think. Clients choose an advisor they trust, and in a video they immediately see how you speak and explain. Start with the questions you get every week, such as what a divorce means for your mortgage or how pensions work for business owners, and explain them calmly in two minutes, without selling. On a content day we record a series of [[social-video|short videos]] in one go for your website, YouTube and LinkedIn. Do keep the rules for financial communication in mind.",
            },
          },
          {
            q: { nl: "Hoe lang duurt het voordat mijn website meer aanvragen oplevert?", en: "How long before my website brings in more enquiries?" },
            a: {
              nl: "Dat hangt af van waar je begint. Een [[check-tools|rekentool]] of een betere afspraakknop kan vrij snel verschil maken, omdat je bestaande bezoekers dan makkelijker contact opnemen. Voor vindbaarheid met nieuwe content en lokale SEO reken je meestal op drie tot zes maanden voordat je duidelijke groei ziet, en in een concurrerende markt als hypotheken soms langer. Wil je eerder zichtbaar zijn, dan kan Google Ads de tussentijd overbruggen. We meten vanaf de start wat er binnenkomt, zodat je ziet wat werkt.",
              en: "That depends on where you start. A [[check-tools|calculator]] or a better booking button can make a difference fairly quickly, because existing visitors find it easier to get in touch. For visibility through new content and local SEO you should usually expect three to six months before you see clear growth, and sometimes longer in a competitive market like mortgages. If you want to be visible sooner, Google Ads can bridge the gap. We measure what comes in from the start, so you can see what works.",
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
          {
            title: { nl: "Mijn-omgeving met polissen en schade", en: "Personal environment for policies and claims" },
            text: {
              nl: "Klanten zien hun polissen, geven zelf een verhuizing of nieuw kenteken door en melden schade met foto's erbij. Je binnendienst houdt tijd over voor klanten die echt advies nodig hebben.",
              en: "Customers see their policies, report a house move or new registration number themselves and file claims with photos attached. Your back office has more time for customers who really need advice.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Een toon die vertrouwd en nuchter klinkt", en: "A tone that sounds trustworthy and grounded" },
            text: {
              nl: "Verzekeren gaat over zekerheid, dus je toon moet helder en menselijk zijn. Eén tone of voice voor website, polisbrief en schademail, zodat klanten overal dezelfde adviseur horen.",
              en: "Insurance is about certainty, so your tone should be clear and human. One tone of voice for website, policy letters and claims emails, so customers hear the same advisor everywhere.",
            },
            service: "branding-rebranding",
            application: "tone-of-voice",
          },
          {
            title: { nl: "Vindbaar op vragen van ondernemers", en: "Findable for business owners' questions" },
            text: {
              nl: "'Welke verzekeringen heb ik nodig als zzp'er?' of 'Is mijn bus verzekerd als een collega rijdt?' Heldere antwoorden op je eigen site maken je vindbaar in Google en AI-assistenten.",
              en: "'Which insurance do I need as a freelancer?' or 'Is my van covered when a colleague drives?' Clear answers on your own site make you findable on Google and in AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
          {
            title: { nl: "LinkedIn voor zakelijke verzekeringen", en: "LinkedIn for commercial insurance" },
            text: {
              nl: "Campagnes gericht op ondernemers, directeuren en HR-managers in je regio of branche, met inhoud over risico's die ze herkennen. Zo word je de specialist die ze bellen bij de verlenging.",
              en: "Campaigns aimed at business owners, directors and HR managers in your region or industry, with content on risks they recognise. That way you become the specialist they call at renewal time.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
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
          {
            q: {
              nl: "Kunnen klanten zelf hun polissen inzien, wijzigingen doorgeven en schade melden?",
              en: "Can customers view their policies, make changes and report claims themselves?",
            },
            a: {
              nl: "Ja, in een eigen [[klantportaal|klantomgeving]]. Klanten zien hun polissen en voorwaarden, geven zelf een verhuizing of nieuw kenteken door en melden schade met foto's, ook 's avonds op hun telefoon. Hoe ver dat gaat, hangt af van wat je polisadministratie aan koppelingen biedt. Soms is een volledige integratie slim, soms is een goed formulier dat netjes in je systeem landt al een flinke stap. Je binnendienst houdt zo tijd over voor klanten die echt advies nodig hebben.",
              en: "Yes, in their own [[klantportaal|customer environment]]. Customers see their policies and terms, report a house move or a new registration number themselves and file claims with photos, even in the evening on their phone. How far that goes depends on the integrations your policy administration system offers. Sometimes a full integration makes sense, sometimes a good form that lands neatly in your system is already a big step. Your back office then has more time for customers who really need advice.",
            },
          },
          {
            q: {
              nl: "Hoe laat ik als assurantiekantoor zien dat ik meer doe dan een vergelijkingssite?",
              en: "How do I show as an insurance broker that I do more than a comparison site?",
            },
            a: {
              nl: "Door te laten zien wat een vergelijkingssite niet doet: meedenken, controleren of iemand niet dubbel of te weinig verzekerd is, en helpen als het misgaat. Vertel dat met echte, geanonimiseerde voorbeelden van schades waarbij je advies het verschil maakte. Een heldere [[tone-of-voice|tone of voice]] en echte foto's van je team maken je kantoor herkenbaar. Wees ook duidelijk over hoe je beloond wordt, want openheid wekt vertrouwen. Lokaal gevonden worden op 'verzekeringsadviseur' plus je plaatsnaam maakt het af.",
              en: "By showing what a comparison site does not do: think along, check whether someone is double-insured or underinsured, and help when things go wrong. Tell that with real, anonymised examples of claims where your advice made the difference. A clear [[tone-of-voice|tone of voice]] and real photos of your team make your office recognisable. Be clear about how you are paid too, because openness builds trust. Being found locally for 'insurance advisor' plus your town finishes it off.",
            },
          },
          {
            q: { nl: "Hoe bereik ik ondernemers voor zakelijke verzekeringen?", en: "How do I reach business owners for commercial insurance?" },
            a: {
              nl: "Ondernemers denken pas aan verzekeringen bij een concrete aanleiding: een eerste personeelslid, een nieuwe bus, een grotere opdracht of een schade bij een collega-ondernemer. Schrijf content rond die momenten en zorg dat die gevonden wordt in Google en AI-assistenten. Met [[linkedin-ads|LinkedIn Ads]] bereik je ondernemers, directeuren en HR-managers gericht op branche en regio. Een korte check die laat zien welke risico's iemand mogelijk mist, maakt de stap naar een gesprek klein. Zo word je de specialist die ze bellen bij de verlenging.",
              en: "Business owners only think about insurance when something concrete happens: a first employee, a new van, a bigger contract or a claim at a fellow business. Write content around those moments and make sure it is found on Google and in AI assistants. With [[linkedin-ads|LinkedIn Ads]] you reach business owners, directors and HR managers by industry and region. A short check that shows which risks someone may be missing makes the step to a conversation small. That way you become the specialist they call at renewal time.",
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
          {
            title: { nl: "Een merk dat vertrouwen wekt", en: "A brand that earns trust" },
            text: {
              nl: "Een nieuwe naam toevertrouwen met je geld is een flinke stap. Een doordachte naam, logo en huisstijl die professioneel en toegankelijk ogen, zonder de clichés van de grote banken.",
              en: "Trusting a new name with your money is a big step. A considered name, logo and identity that look professional and approachable, without the clichés of the big banks.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Activatieflows na de aanmelding", en: "Activation flows after sign-up" },
            text: {
              nl: "Wie zich aanmeldt maar zijn account niet afmaakt of nooit een eerste transactie doet, krijgt een gerichte mail of push met precies de stap die ontbreekt. Gemeten per stap.",
              en: "Users who sign up but do not complete their account or never make a first transaction get a targeted email or push with exactly the missing step. Measured step by step.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Supportassistent op je eigen helpcenter", en: "Support assistant on your own help centre" },
            text: {
              nl: "Een AI-assistent die productvragen beantwoordt vanuit je eigen helpcenter, ook 's nachts. Bij alles wat over een specifieke rekening of transactie gaat, verwijst hij naar een collega.",
              en: "An AI assistant that answers product questions from your own help centre, at night too. For anything about a specific account or transaction, it refers people to a colleague.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
          {
            title: { nl: "Uitleganimaties van je product", en: "Explainer animations of your product" },
            text: {
              nl: "Een korte animatie die laat zien hoe betalen, beleggen of aanvragen in je app werkt. Voor je website, de app stores en campagnes, en makkelijk bij te werken als de interface verandert.",
              en: "A short animation showing how paying, investing or applying works in your app. For your website, the app stores and campaigns, and easy to update when the interface changes.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
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
          {
            q: { nl: "Hoe zorg ik dat gebruikers na de aanmelding ook echt actief worden?", en: "How do I make sure users become active after signing up?" },
            a: {
              nl: "Door te meten waar ze blijven hangen en precies daar te helpen. Veel gebruikers maken hun account niet af, koppelen hun rekening niet of doen nooit een eerste transactie. Met [[marketing-automation|marketing automation]] stuur je op basis van gedrag een korte mail of pushbericht met de stap die ontbreekt, in plaats van een algemene nieuwsbrief. Combineer dat met [[tracking-analytics|tracking]] per stap, zodat je ziet welke verbetering effect heeft. Kleine aanpassingen in de flow doen vaak meer dan een nieuwe campagne.",
              en: "By measuring where they get stuck and helping exactly there. Many users do not complete their account, do not link their bank account or never make a first transaction. With [[marketing-automation|marketing automation]] you send a short email or push notification based on behaviour, with the missing step, instead of a general newsletter. Combine that with [[tracking-analytics|tracking]] per step, so you can see which improvement has an effect. Small changes to the flow often do more than a new campaign.",
            },
          },
          {
            q: { nl: "Kan een AI-chatbot klantvragen beantwoorden bij een financiële dienst?", en: "Can an AI chatbot answer customer questions for a financial service?" },
            a: {
              nl: "Voor algemene vragen vaak wel: hoe werkt een functie, wat kost een abonnement, waar vind ik mijn jaaroverzicht? Een [[ai-chatbots|AI-assistent]] die is gevoed met je eigen helpcenter beantwoordt die vragen ook buiten kantoortijden. Bij alles wat over een specifieke rekening, transactie of advies gaat, verwijst hij door naar een collega. We leggen vooraf vast welke onderwerpen hij wel en niet behandelt, testen met echte vragen en houden bij wat hij antwoordt. Zo blijft het binnen de regels en je eigen compliance-afspraken.",
              en: "For general questions, often yes: how does a feature work, what does a subscription cost, where do I find my annual statement? An [[ai-chatbots|AI assistant]] fed with your own help centre answers those questions outside office hours too. For anything about a specific account, transaction or advice, it refers people to a colleague. We define upfront which topics it does and does not handle, test with real questions and keep track of what it answers. That keeps it within the rules and your own compliance arrangements.",
            },
          },
          {
            q: { nl: "Hoe kies ik een naam en merk voor een nieuwe fintech?", en: "How do I choose a name and brand for a new fintech?" },
            a: {
              nl: "Begin bij wat je belooft en voor wie, en pas daarna bij de naam. Een goede naam is kort, uit te spreken in je belangrijkste markten en nog vrij als domein en merk. Laat dat laatste altijd checken, want een naamswijziging na de lancering is duur. Met [[naamgeving|naamgeving]] en een [[huisstijl|huisstijl]] die professioneel en toegankelijk oogt, wek je vertrouwen zonder de clichés van de grote banken. Denk ook vroeg na over hoe het merk werkt in je app, want daar zien gebruikers het het vaakst.",
              en: "Start with what you promise and to whom, and only then think about the name. A good name is short, pronounceable in your key markets and still available as a domain and trademark. Always have that last part checked, because renaming after launch is costly. With [[naamgeving|naming]] and a [[huisstijl|visual identity]] that looks professional and approachable, you build trust without the clichés of the big banks. Think early about how the brand works in your app too, because that is where users see it most.",
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
              nl: "Beveiligd inloggen met tweestapsverificatie, met portefeuille, rapportages en documenten op één plek. De gegevens komen uit je portefeuillesysteem of van de depotbank, waar die dat aanbieden.",
              en: "Secure login with two-factor authentication, with portfolio, reports and documents in one place. The data comes from your portfolio system or the custodian, where they offer it.",
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
          {
            title: { nl: "Een website die rust en kwaliteit uitstraalt", en: "A website that radiates calm and quality" },
            text: {
              nl: "Je filosofie, team en werkwijze in een rustig, verzorgd ontwerp, met ruimte voor de verplichte informatie zonder dat het een juridisch document wordt. Snel, veilig en meertalig waar nodig.",
              en: "Your philosophy, team and approach in a calm, polished design, with room for the mandatory information without it becoming a legal document. Fast, secure and multilingual where needed.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Een kwartaalbericht dat gelezen wordt", en: "A quarterly update people actually read" },
            text: {
              nl: "Een korte marktvisie per mail, in gewone taal en met één heldere grafiek. Afgestemd op het type klant, zodat een family office iets anders leest dan een particuliere belegger.",
              en: "A short market view by email, in plain language and with one clear chart. Tailored to the type of client, so a family office reads something different from a private investor.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Portretten van de mensen achter de portefeuilles", en: "Portraits of the people behind the portfolios" },
            text: {
              nl: "Klanten vertrouwen hun vermogen toe aan mensen, niet aan een logo. Rustige portretten en beelden van je kantoor laten zien met wie ze straks aan tafel zitten.",
              en: "Clients entrust their wealth to people, not to a logo. Calm portraits and images of your office show who they will be sitting down with.",
            },
            service: "foto-video-3d-animatie",
          },
          {
            title: { nl: "Gevonden op vragen over vermogen", en: "Found for questions about wealth" },
            text: {
              nl: "'Wat doet een vermogensbeheerder?' of 'Hoe regel ik vermogensoverdracht naar mijn kinderen?' Feitelijke antwoorden op je eigen site, vindbaar in Google en AI-assistenten.",
              en: "'What does a wealth manager do?' or 'How do I arrange a wealth transfer to my children?' Factual answers on your own site, findable on Google and in AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "geo",
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
          {
            q: {
              nl: "Hoe houd ik vermogende klanten op de hoogte zonder dat het een reclamefolder wordt?",
              en: "How do I keep wealthy clients informed without it becoming a sales leaflet?",
            },
            a: {
              nl: "Met inhoud, in een vast ritme. Een korte marktvisie per kwartaal, uitleg bij een opvallende ontwikkeling en af en toe een persoonlijk bericht van de relatiebeheerder doen meer dan een glimmende nieuwsbrief. Met [[e-mailmarketing|e-mailmarketing]] stem je de inhoud af op het type klant, zodat een ondernemer iets anders leest dan een stichting of family office. Houd de toon rustig en feitelijk, met de disclaimers van je compliance-team op de juiste plek. Meet wat er gelezen wordt, en schrap wat niemand opent.",
              en: "With substance, in a fixed rhythm. A short quarterly market view, an explanation of a notable development and the occasional personal message from the relationship manager do more than a glossy newsletter. With [[e-mailmarketing|email marketing]] you tailor the content to the type of client, so a business owner reads something different from a foundation or family office. Keep the tone calm and factual, with your compliance team's disclaimers in the right place. Measure what gets read, and drop what nobody opens.",
            },
          },
          {
            q: {
              nl: "Hoe word ik gevonden door ondernemers die hun bedrijf verkopen of vermogen overdragen?",
              en: "How do I get found by business owners selling their company or passing on their wealth?",
            },
            a: {
              nl: "Die groep zoekt zelden op 'vermogensbeheerder', maar wel op hun situatie: wat te doen na de verkoop van een bedrijf, hoe je vermogen overdraagt aan de volgende generatie of wat een family office doet. Beantwoord die vragen helder op je eigen site, zonder advies te beloven dat je online niet kunt geven. Met [[geo|GEO]] richten we die content zo in dat AI-assistenten hem goed kunnen gebruiken. Gerichte LinkedIn-content bereikt daarnaast ondernemers in de fase waarin ze nadenken over de toekomst.",
              en: "That group rarely searches for 'wealth manager', but they do search for their situation: what to do after selling a business, how to pass wealth on to the next generation or what a family office does. Answer those questions clearly on your own site, without promising advice you cannot give online. With [[geo|GEO]] we structure that content so AI assistants can use it well. Targeted LinkedIn content also reaches business owners at the stage when they are thinking about the future.",
            },
          },
          {
            q: {
              nl: "Wat kost een klantportaal voor vermogensbeheer en hoe lang duurt de bouw?",
              en: "What does a client portal for wealth management cost and how long does it take?",
            },
            a: {
              nl: "Dat hangt vooral af van de koppelingen. Haal je gegevens uit je portefeuillesysteem of van de depotbank, dan bepaalt wat die aanbieden een groot deel van het werk. Een compact [[klantportaal|portaal]] met inloggen, documenten en een overzicht staat gemiddeld in 6 tot 12 weken live. Uitgebreidere [[dashboards|dashboards]] en rapportages bouwen we daarna gefaseerd. Na een scopingsessie krijg je een realistische planning en een voorstel op maat, met beveiliging en tweestapsverificatie vanaf de eerste versie.",
              en: "That mainly depends on the integrations. If you pull data from your portfolio system or the custodian, what they offer determines a large part of the work. A compact [[klantportaal|portal]] with login, documents and an overview is typically live in 6 to 12 weeks. More extensive [[dashboards|dashboards]] and reports are built in phases afterwards. After a scoping session you receive a realistic planning and a tailored proposal, with security and two-factor authentication from the first version.",
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
          {
            title: { nl: "Uitleg die ondernemers verder helpt", en: "Explanations that help business owners" },
            text: {
              nl: "Leasen of kopen, factoring of een rekening-courant? Eerlijke uitleg per financieringsvorm, ook wanneer jouw product niet past. Dat bouwt vertrouwen en vindbaarheid op.",
              en: "Lease or buy, factoring or an overdraft facility? Honest explanations per type of financing, including when your product is not the right fit. That builds trust and findability.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Een merk voor een nieuwe financier", en: "A brand for a new lender" },
            text: {
              nl: "Als alternatieve financier laat je zien dat je betrouwbaar én bereikbaar bent. Een heldere positionering en huisstijl die ondernemers aanspreken, zonder bankjargon.",
              en: "As an alternative lender you show that you are reliable and approachable. Clear positioning and an identity that speak to business owners, without banking jargon.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Van aanvraag tot uitbetaling in één beeld", en: "From application to payout in one visual" },
            text: {
              nl: "Een heldere infographic laat zien welke stappen een aanvraag doorloopt, wat er nodig is en hoe lang elke stap ongeveer duurt. Dat neemt onzekerheid weg en scheelt vragen.",
              en: "A clear infographic shows which steps an application goes through, what is needed and roughly how long each step takes. That removes uncertainty and saves questions.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
          {
            title: { nl: "AI die aanvraagdossiers voorbereidt", en: "AI that prepares application files" },
            text: {
              nl: "Een AI-agent controleert of een dossier compleet is, haalt de kerncijfers uit jaarstukken en zet een samenvatting klaar voor de acceptant. De beoordeling blijft mensenwerk.",
              en: "An AI agent checks whether a file is complete, extracts the key figures from annual accounts and prepares a summary for the credit analyst. The assessment remains people's work.",
            },
            service: "ai-consultancy",
            application: "ai-agents",
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
          {
            q: { nl: "Kan AI helpen bij het beoordelen van financieringsaanvragen?", en: "Can AI help assess financing applications?" },
            a: {
              nl: "Als voorbereiding, ja. Een [[ai-agents|AI-agent]] kan controleren of een dossier compleet is, de kerncijfers uit jaarstukken en bankafschriften halen en een samenvatting klaarzetten. Dat scheelt je acceptanten veel uitzoekwerk. De beoordeling zelf en het besluit blijven bij mensen, en dat is ook wat toezichthouders en klanten verwachten. We richten het zo in dat gevoelige gegevens veilig blijven en dat altijd te herleiden is waar een getal vandaan komt.",
              en: "As preparation, yes. An [[ai-agents|AI agent]] can check whether a file is complete, extract the key figures from annual accounts and bank statements and prepare a summary. That saves your credit analysts a lot of digging. The assessment itself and the decision stay with people, which is also what regulators and customers expect. We set it up so sensitive data stays secure and it is always traceable where a figure came from.",
            },
          },
          {
            q: { nl: "Hoe leg ik verschillende financieringsvormen begrijpelijk uit?", en: "How do I explain different types of financing clearly?" },
            a: {
              nl: "Begin bij de vraag van de ondernemer, niet bij je productnamen. Wil hij een machine aanschaffen, een seizoen overbruggen of sneller betaald krijgen van zijn klanten? Leg per situatie uit welke vormen er zijn, wat ze ongeveer inhouden en wanneer ze wel of niet passen. Een [[infographics|infographic]] van het aanvraagproces en een korte vergelijking per vorm maken het overzichtelijk. Wees in algemene zin eerlijk over voorwaarden en kosten, en verwijs voor de details naar een gesprek.",
              en: "Start with the business owner's question, not with your product names. Do they want to buy a machine, bridge a season or get paid faster by their customers? Explain per situation which options exist, roughly what they involve and when they do or do not fit. An [[infographics|infographic]] of the application process and a short comparison per type make it clear. Be honest about conditions and costs in general terms, and refer to a conversation for the details.",
            },
          },
          {
            q: { nl: "Hoe onderscheid ik me als alternatieve financier van de bank?", en: "How do I stand out from the bank as an alternative lender?" },
            a: {
              nl: "Door te laten zien waar je anders in bent: snelheid, flexibiliteit, kennis van een branche of persoonlijk contact. Maak dat concreet, met het proces zoals het echt verloopt en voorbeelden van situaties waarin je kon helpen, zonder klantnamen of cijfers die je niet mag delen. Een heldere [[merkstrategie|positionering]] en een toon zonder bankjargon helpen ondernemers je te plaatsen. Boekhouders en financieringsadviseurs zijn vaak je beste bron van aanvragen, dus geef hen een eigen route op je website.",
              en: "By showing where you are different: speed, flexibility, knowledge of an industry or personal contact. Make that concrete, with the process as it actually works and examples of situations where you were able to help, without client names or figures you may not share. Clear [[merkstrategie|positioning]] and a tone without banking jargon help business owners place you. Accountants and financing advisors are often your best source of applications, so give them their own route on your website.",
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
          {
            title: { nl: "Sfeerfotografie per kamer en seizoen", en: "Atmospheric photos per room and season" },
            text: {
              nl: "Licht, textuur en het uitzicht vanuit bed: goede foto's per kamertype laten gasten voelen hoe het is om er te slapen. Met beeld van het ontbijt, de tuin en de omgeving erbij.",
              en: "Light, texture and the view from the bed: good photos per room type let guests feel what it is like to sleep there. With images of breakfast, the garden and the surroundings too.",
            },
            service: "foto-video-3d-animatie",
          },
          {
            title: { nl: "Een eigen pagina per arrangement", en: "A dedicated page per package" },
            text: {
              nl: "Een fietsarrangement door de Maashorst, een wellnessweekend of een vergaderpakket, met foto's, inhoud en een directe boekoptie. Vindbaar voor wie precies dat zoekt, en makkelijk te delen in campagnes.",
              en: "A cycling package through the countryside, a wellness weekend or a meeting package, with photos, details and a direct booking option. Findable for people looking for exactly that, and easy to share in campaigns.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Instagram met echte gastmomenten", en: "Instagram with real guest moments" },
            text: {
              nl: "Het ontbijt op het terras, de open haard in november, de fietsen klaar bij de deur. Korte posts en reels die laten zien hoe een verblijf voelt, in een vast en haalbaar ritme.",
              en: "Breakfast on the terrace, the fireplace in November, bikes ready by the door. Short posts and reels that show how a stay feels, in a fixed and manageable rhythm.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Een eigen merk naast de platforms", en: "Your own brand next to the platforms" },
            text: {
              nl: "Op boekingsplatforms lijkt elk hotel op elkaar. Een eigen naam, logo en stijl die je verhaal vertellen, zorgen dat gasten je onthouden en je de volgende keer direct opzoeken.",
              en: "On booking platforms, every hotel looks alike. Your own name, logo and style that tell your story make sure guests remember you and look you up directly next time.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
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
          {
            q: { nl: "Hoe ga ik om met reviews op Google en boekingsplatforms?", en: "How do I deal with reviews on Google and booking platforms?" },
            a: {
              nl: "Reageer op elke review, persoonlijk en binnen een paar dagen, ook op de kritische. Toekomstige gasten lezen je antwoorden net zo goed als de review zelf, en een rustige, eerlijke reactie zegt veel over je gastvrijheid. Vraag tevreden gasten na hun verblijf om een review met een korte, automatische mail. Met [[lokale-seo|lokale SEO]] zorgen we dat je Google-profiel compleet is, met actuele foto's, voorzieningen en een directe boeklink. Zo ziet een gast meteen dat hij ook gewoon bij jou kan boeken.",
              en: "Respond to every review, personally and within a few days, including the critical ones. Future guests read your replies as closely as the review itself, and a calm, honest response says a lot about your hospitality. Ask satisfied guests for a review after their stay with a short, automated email. With [[lokale-seo|local SEO]] we make sure your Google profile is complete, with current photos, facilities and a direct booking link. That way guests see right away that they can simply book with you too.",
            },
          },
          {
            q: { nl: "Welke foto's heb ik nodig voor mijn hotel- of B&B-website?", en: "Which photos do I need for my hotel or B&B website?" },
            a: {
              nl: "Per kamertype een paar beelden die laten zien hoe het er echt uitziet: het bed, de badkamer, het uitzicht en een detail dat de sfeer bepaalt. Daarnaast het ontbijt, de gemeenschappelijke ruimtes, de tuin en de omgeving. Fotografeer bij goed daglicht en liefst in meerdere seizoenen, zodat je in de winter niet met zomerse foto's werkt. Wij verzorgen de fotografie en, als het past, een korte [[bedrijfsfilm|sfeervideo]]. Echte beelden verkopen beter dan stockfoto's, en voorkomen teleurstelling bij aankomst.",
              en: "For each room type, a few images that show what it really looks like: the bed, the bathroom, the view and a detail that sets the mood. Then breakfast, the shared spaces, the garden and the surroundings. Shoot in good daylight and ideally across several seasons, so you are not using summer photos in winter. We take care of the photography and, if it fits, a short [[bedrijfsfilm|mood video]]. Real images sell better than stock photos, and prevent disappointment on arrival.",
            },
          },
          {
            q: { nl: "Hoe trek ik zakelijke gasten en groepen naar mijn hotel?", en: "How do I attract business guests and groups to my hotel?" },
            a: {
              nl: "Zakelijke gasten en organisatoren zoeken andere dingen dan een stel op weekendje weg: goede wifi, een werkplek, parkeren, vergaderruimte en een factuur op naam van het bedrijf. Geef hen een eigen route op je website met die informatie en een makkelijk aanvraagformulier voor groepen. Een [[landingspaginas|landingspagina]] per doelgroep, zoals vergaderen, teamuitjes of overnachten bij een evenement in de buurt, werkt goed in Google en op LinkedIn. Een digitale brochure helpt organisatoren die intern moeten overleggen.",
              en: "Business guests and organisers look for different things than a couple on a weekend away: good wifi, a workspace, parking, meeting space and an invoice in the company's name. Give them their own route on your website with that information and an easy enquiry form for groups. A [[landingspaginas|landing page]] per audience, such as meetings, team outings or staying over for a nearby event, works well on Google and LinkedIn. A digital brochure helps organisers who need to consult internally.",
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
          {
            title: { nl: "Meertalig voor Duitse en Belgische gasten", en: "Multilingual for German and Belgian guests" },
            text: {
              nl: "Duitse, Belgische en Nederlandse gasten zoeken elk in hun eigen taal en met hun eigen woorden. Goede vertalingen en vindbaarheid per markt, met dezelfde beschikbaarheid eronder.",
              en: "German, Belgian and Dutch guests each search in their own language and with their own words. Good translations and visibility per market, with the same availability underneath.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
          {
            title: { nl: "Pagina's per activiteit en thema", en: "Pages per activity and theme" },
            text: {
              nl: "Kamperen met de hond, glamping met kinderen of wandelen in de Peel: elke vraag een eigen pagina die eindigt bij de passende accommodatie. Vindbaar in Google en AI-assistenten.",
              en: "Camping with the dog, glamping with kids or hiking in the area: every question gets its own page, ending at the right accommodation. Findable on Google and in AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Vroegboekmails voor vaste gasten", en: "Early-booking emails for returning guests" },
            text: {
              nl: "Vaste gasten horen als eerste wanneer de nieuwe prijzen online staan, met hun favoriete plek of chalet als suggestie. Automatisch, op basis van hun eerdere boeking.",
              en: "Returning guests are the first to hear when new prices go online, with their favourite pitch or chalet as a suggestion. Automatically, based on their previous booking.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Parkkaart en bewegwijzering in één stijl", en: "Park map and signage in one style" },
            text: {
              nl: "Een heldere parkkaart, routebordjes en informatieborden die passen bij je website en folder. Gasten vinden sneller hun weg, en je park voelt als één geheel.",
              en: "A clear park map, direction signs and information boards that match your website and leaflet. Guests find their way faster, and your park feels like one whole.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
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
          {
            q: { nl: "Hoe bereik ik gasten uit Duitsland en België?", en: "How do I reach guests from Germany and Belgium?" },
            a: {
              nl: "Door ze in hun eigen taal en op hun eigen manier aan te spreken. Duitse en Belgische gasten zoeken met andere woorden en hebben andere vragen dan Nederlandse. Een goede [[meertalige-website|meertalige website]] met vertalingen die zijn afgestemd op elke markt, en niet alleen een vertaalknop, is de basis. Daarna kun je per land gericht adverteren in de periodes dat daar vakanties worden gepland. Let ook op de schoolvakanties per land en deelstaat, want die verschillen flink.",
              en: "By speaking to them in their own language and in their own way. German and Belgian guests search with different words and have different questions than Dutch guests. A good [[meertalige-website|multilingual website]] with translations tailored to each market, not just a translate button, is the basis. Then you can advertise per country in the periods when holidays are being planned there. Keep the school holidays per country and region in mind too, because they differ considerably.",
            },
          },
          {
            q: { nl: "Hoe zorg ik dat vaste gasten volgend jaar weer boeken?", en: "How do I make sure returning guests book again next year?" },
            a: {
              nl: "Houd contact op de momenten die ertoe doen: een bedankmail na het verblijf, een seintje als de nieuwe prijzen online staan en een herinnering met hun favoriete plek of chalet als suggestie. Met [[e-mailmarketing|e-mailflows]] gaat dat automatisch, op basis van hun eerdere boeking. Vaste gasten waarderen het om als eerste te kunnen kiezen, en jij vult je populairste plekken vroeg. Natuurlijk alleen voor gasten die daar toestemming voor gaven.",
              en: "Stay in touch at the moments that matter: a thank-you email after the stay, a heads-up when new prices go online and a reminder with their favourite pitch or chalet as a suggestion. With [[e-mailmarketing|email flows]] this happens automatically, based on their previous booking. Returning guests appreciate getting first pick, and you fill your most popular spots early. Only for guests who opted in, of course.",
            },
          },
          {
            q: { nl: "Wat kost een nieuwe website voor een camping of vakantiepark?", en: "What does a new website for a campsite or holiday park cost?" },
            a: {
              nl: "Dat hangt vooral af van het aantal accommodatietypes, talen en koppelingen, zoals met je reserveringssysteem of een interactieve plattegrond. Een compacte [[websites-webshops|website]] staat gemiddeld in 4 tot 6 weken online. Met meerdere talen, een parkkaart en een gastengids wordt het een groter traject, dat we vaak in fases bouwen: eerst de site en de boekingsroute, daarna de extra's. Indicatieve prijzen zie je in onze configurator op letsgo.m7branding.com. Plan het liefst ruim voor het hoogseizoen, zodat alles staat als gasten gaan boeken.",
              en: "That mainly depends on the number of accommodation types, languages and integrations, such as with your reservation system or an interactive park map. A compact [[websites-webshops|website]] is typically online in 4 to 6 weeks. With several languages, a park map and a guest guide it becomes a larger project, which we often build in phases: first the site and booking route, then the extras. You can see indicative prices in our configurator at letsgo.m7branding.com. Ideally plan well ahead of high season, so everything is ready when guests start booking.",
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
          {
            title: { nl: "Bestemmingsvideo's die verlangen opwekken", en: "Destination videos that spark wanderlust" },
            text: {
              nl: "Korte, verticale video's van routes, accommodaties en lokale momenten, voor Instagram, TikTok en je reispagina's. Gemaakt van eigen beeld of materiaal van je lokale partners.",
              en: "Short, vertical videos of routes, accommodation and local moments, for Instagram, TikTok and your trip pages. Made from your own footage or material from your local partners.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Reisbrochure en reisdocumenten in je stijl", en: "Travel brochure and documents in your style" },
            text: {
              nl: "Een inspirerende brochure voor wie op papier wil dromen, en reisdocumenten die er net zo verzorgd uitzien. Eén herkenbare lijn van de eerste indruk tot het vertrek.",
              en: "An inspiring brochure for those who like to dream on paper, and travel documents that look just as polished. One recognisable line from first impression to departure.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
          {
            title: { nl: "Van droom naar boeking", en: "From dream to booking" },
            text: {
              nl: "Wie een reis bekijkt of een brochure downloadt, krijgt in de weken daarna inspiratie en praktische tips over die bestemming. Je reisadviseur belt als iemand echt interesse toont.",
              en: "Anyone who views a trip or downloads a brochure gets inspiration and practical tips about that destination over the following weeks. Your travel advisor calls when someone shows real interest.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "AI-assistent voor reisvragen", en: "AI assistant for travel questions" },
            text: {
              nl: "Een assistent die vragen over bestemmingen, reisduur, wat er is inbegrepen en praktische zaken beantwoordt vanuit je eigen reisinformatie. Voor boekingen en maatwerk verwijst hij naar je reisadviseurs.",
              en: "An assistant that answers questions about destinations, trip length, what is included and practical matters from your own travel information. For bookings and tailor-made trips, it refers people to your travel advisors.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
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
          {
            q: { nl: "Hoe volg ik mensen op die een reis bekijken maar nog niet boeken?", en: "How do I follow up with people who view a trip but do not book yet?" },
            a: {
              nl: "Een reis boek je zelden bij het eerste bezoek. Wie een brochure downloadt, een reis opslaat of een aanvraag start, help je met [[lead-nurturing|lead nurturing]] in de weken daarna verder: inspiratie over de bestemming, praktische tips over de beste reistijd en een voorbeeld van een reisschema. Je reisadviseur ziet wie terugkomt en belt op het moment dat een gesprek zinvol is. Belangrijk is dat iedere mail iets toevoegt, en dat mensen zich makkelijk weer kunnen afmelden.",
              en: "People rarely book a trip on their first visit. Those who download a brochure, save a trip or start an enquiry can be helped further over the following weeks with [[lead-nurturing|lead nurturing]]: inspiration about the destination, practical tips on the best time to travel and an example itinerary. Your travel advisor sees who comes back and calls when a conversation makes sense. What matters is that every email adds something, and that people can easily unsubscribe.",
            },
          },
          {
            q: { nl: "Kan een AI-chatbot reizigers helpen op onze website?", en: "Can an AI chatbot help travellers on our website?" },
            a: {
              nl: "Voor veel vragen wel. Een [[ai-chatbots|AI-assistent]] die is gevoed met je eigen reisinformatie, beantwoordt vragen over bestemmingen, reisduur, wat er is inbegrepen en praktische zaken, ook 's avonds als je kantoor dicht is. Bij boekingen, maatwerk of twijfel verwijst hij naar je reisadviseurs, met de vraag van de klant erbij. Voor actuele zaken zoals reisadviezen en visa verwijst hij naar de officiële bronnen in plaats van zelf te antwoorden. We testen met echte vragen voordat hij live gaat.",
              en: "For many questions, yes. An [[ai-chatbots|AI assistant]] fed with your own travel information answers questions about destinations, trip length, what is included and practical matters, even in the evening when your office is closed. For bookings, tailor-made trips or anything uncertain, it refers people to your travel advisors, passing on the customer's question. For current matters such as travel advice and visas, it points to the official sources instead of answering itself. We test with real questions before it goes live.",
            },
          },
          {
            q: { nl: "Hoe zet ik video in als reisorganisatie?", en: "How should a tour operator use video?" },
            a: {
              nl: "Laat zien wat een reiziger gaat beleven, niet alleen hoe mooi het uitzicht is. Korte, verticale [[social-video|video's]] van een route, een accommodatie of een moment met een lokale gids werken op Instagram, TikTok en op je reispagina's. Je hoeft niet overal zelf heen: met goede afspraken met lokale partners en een duidelijke briefing komt er bruikbaar beeld binnen, dat wij monteren tot een consistente reeks. Houd het eerlijk, want een reiziger die krijgt wat hij zag, boekt de volgende keer weer bij jou.",
              en: "Show what a traveller will experience, not just how beautiful the view is. Short, vertical [[social-video|videos]] of a route, an accommodation or a moment with a local guide work on Instagram, TikTok and your trip pages. You do not have to go everywhere yourself: with good agreements with local partners and a clear brief, usable footage comes in, which we edit into a consistent series. Keep it honest, because a traveller who gets what they saw will book with you again.",
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
          {
            title: { nl: "Alles voor vandaag, snel op de telefoon", en: "Everything for today, quickly on a phone" },
            text: {
              nl: "Openingstijden, prijzen, tijdsloten en de verwachte drukte, snel te vinden op de telefoon. Met een duidelijke koopknop en praktische info over parkeren en bereikbaarheid.",
              en: "Opening hours, prices, time slots and expected crowds, quick to find on a phone. With a clear buy button and practical info about parking and getting there.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Gevonden op een regenachtige dag", en: "Found on a rainy day" },
            text: {
              nl: "Pagina's voor 'uitje met kinderen bij regen' of 'escape room voor een teamuitje' laten zien dat je precies dat biedt. Vindbaar in Google, Google Maps en AI-assistenten.",
              en: "Pages for 'rainy day out with kids' or 'escape room for a team outing' show that you offer exactly that. Findable on Google, Google Maps and in AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Jaarkaart als lidmaatschap", en: "An annual pass as a membership" },
            text: {
              nl: "Jaarkaarthouders zien hun pas op de telefoon, reserveren tijdsloten en horen als eerste over evenementen. Zo voelt een jaarkaart als lidmaatschap en blijven bezoekers betrokken.",
              en: "Annual pass holders see their pass on their phone, reserve time slots and are the first to hear about events. The pass feels like a membership and visitors stay engaged.",
            },
            service: "web-apps-portals-apps",
            application: "ledenportaal-loyaliteit",
          },
          {
            title: { nl: "Naam en beeld voor een nieuwe attractie", en: "Name and visuals for a new attraction" },
            text: {
              nl: "Een nieuwe achtbaan, escape room of tentoonstelling verdient een eigen naam en beeld die passen bij je park of museum. Van logo en borden tot de campagne bij de opening.",
              en: "A new rollercoaster, escape room or exhibition deserves its own name and visuals that fit your park or museum. From logo and signs to the opening campaign.",
            },
            service: "branding-rebranding",
            application: "naamgeving",
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
          {
            q: {
              nl: "Hoe word ik gevonden door gezinnen die op het laatste moment een uitje zoeken?",
              en: "How do I get found by families looking for a last-minute day out?",
            },
            a: {
              nl: "Die beslissing valt vaak op de ochtend zelf, op een telefoon, met zoektermen als 'uitje met kinderen bij regen' of 'dagje uit in de buurt'. Zorg dat je Google-profiel compleet is met actuele openingstijden, foto's en een ticketlink, en dat je website snel laadt. Maak pagina's die precies die vragen beantwoorden, zoals binnenactiviteiten, leeftijden en toegankelijkheid. Met [[lokale-seo|lokale SEO]] bouwen we dat op, zodat je meer kans maakt om ook in Google Maps en AI-assistenten te verschijnen. Een duidelijke koopknop doet de rest.",
              en: "That decision is often made the same morning, on a phone, with searches like 'rainy day out with kids' or 'day out nearby'. Make sure your Google profile is complete with current opening hours, photos and a ticket link, and that your website loads quickly. Create pages that answer exactly those questions, such as indoor activities, ages and accessibility. With [[lokale-seo|local SEO]] we build that up, so you stand a better chance of appearing in Google Maps and AI assistants too. A clear buy button does the rest.",
            },
          },
          {
            q: { nl: "Is een app of jaarkaartomgeving zinvol voor een attractie?", en: "Is an app or annual pass environment worthwhile for an attraction?" },
            a: {
              nl: "Bij veel vaste bezoekers vaak wel. Jaarkaarthouders willen hun pas op de telefoon, tijdsloten reserveren en als eerste horen wat er nieuw is. Een [[ledenportaal-loyaliteit|ledenomgeving]] of web-app maakt van een jaarkaart een soort lidmaatschap, met ruimte voor voordeel bij partners of speciale avonden. Een volledige app in de stores is niet altijd nodig: een web-app werkt zonder download en is sneller gebouwd. We kijken eerst wat je bezoekers echt gebruiken, en koppelen waar dat kan met je ticketsysteem.",
              en: "With many regular visitors, often yes. Annual pass holders want their pass on their phone, to reserve time slots and to be the first to hear what is new. A [[ledenportaal-loyaliteit|member environment]] or web app turns an annual pass into a kind of membership, with room for partner perks or special evenings. A full app in the stores is not always necessary: a web app works without a download and is quicker to build. We first look at what your visitors actually use, and connect to your ticketing system where possible.",
            },
          },
          {
            q: { nl: "Hoe pak ik de lancering van een nieuwe attractie of tentoonstelling aan?", en: "How do I approach the launch of a new attraction or exhibition?" },
            a: {
              nl: "Begin ruim van tevoren, met een eigen naam en beeld die passen bij je park of museum. Bouw de aandacht op met een teaser, beelden van de bouw of de inrichting, en een landingspagina waar mensen zich aanmelden voor nieuws of als eerste een ticket kopen. Rond de opening zet je [[social-video|social video]], campagnes en pers in, en daarna laten de eerste bezoekers het zelf zien. Wij helpen met [[naamgeving|naamgeving]], beeld en de campagne, zodat alles als één verhaal voelt.",
              en: "Start well in advance, with a name and visuals of its own that fit your park or museum. Build anticipation with a teaser, footage of construction or installation, and a landing page where people sign up for news or buy the first tickets. Around the opening you use [[social-video|social video]], campaigns and press, and afterwards the first visitors show it off themselves. We help with [[naamgeving|naming]], visuals and the campaign, so everything feels like one story.",
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
          {
            title: { nl: "Food- en interieurfotografie", en: "Food and interior photography" },
            text: {
              nl: "Je signatuurgerechten, het interieur en het team in goed licht. Voor je website, Google-profiel, menukaart en social media, zodat gasten zien wat ze kunnen verwachten.",
              en: "Your signature dishes, the interior and the team in good light. For your website, Google profile, menu and social media, so guests see what to expect.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Een nieuwsbrief die tafels vult", en: "A newsletter that fills tables" },
            text: {
              nl: "Een nieuwe kaart, een wijnavond of het terras dat opengaat: een korte mail aan gasten die zich aanmeldden. Met een reserveringslink erbij, zodat reserveren één klik is.",
              en: "A new menu, a wine evening or the terrace opening: a short email to guests who signed up. With a booking link included, so reserving takes just one click.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Reels van keuken en terras", en: "Reels from the kitchen and terrace" },
            text: {
              nl: "Korte video's van het opmaken van een bord, de eerste zonnige middag op het terras of de opbouw van een feest. Op één contentdag gemaakt, en weken bruikbaar.",
              en: "Short videos of a dish being plated, the first sunny afternoon on the terrace or a party being set up. Shot on one content day, and usable for weeks.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Een eigen gezicht voor je zaak", en: "A distinct look for your venue" },
            text: {
              nl: "Een logo, menukaart, gevelbord en website die samen één sfeer neerzetten. Van dorpscafé tot strandpaviljoen: gasten herkennen je, ook in een volle Instagramfeed.",
              en: "A logo, menu, facade sign and website that together create one atmosphere. From village café to beach club: guests recognise you, even in a busy Instagram feed.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
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
          {
            q: { nl: "Hoe krijg ik meer reserveringen via mijn eigen website?", en: "How do I get more reservations through my own website?" },
            a: {
              nl: "Maak reserveren de makkelijkste stap op elke pagina. Een duidelijke knop bovenaan, een reserveringsmodule die op de telefoon goed werkt en de informatie die gasten vooraf willen weten, zoals de kaart, allergenen, parkeren en of honden welkom zijn. Koppel de module aan je bestaande reserveringssysteem, zodat je niets dubbel bijhoudt. Met een korte [[e-mailmarketing|nieuwsbrief]] nodig je gasten die zich aanmeldden uit voor een nieuwe kaart of een speciale avond. Werk je nu via platforms die per reservering rekenen, dan scheelt dat bovendien commissie.",
              en: "Make booking the easiest step on every page. A clear button at the top, a reservation module that works well on a phone and the information guests want upfront, such as the menu, allergens, parking and whether dogs are welcome. Connect the module to your existing reservation system, so you are not keeping track twice. With a short [[e-mailmarketing|newsletter]] you invite guests who signed up for a new menu or a special evening. If you currently use platforms that charge per reservation, it also saves you commission.",
            },
          },
          {
            q: { nl: "Wat moet ik met Instagram en TikTok als restaurant of eventlocatie?", en: "What should a restaurant or event venue do with Instagram and TikTok?" },
            a: {
              nl: "Laten zien hoe het voelt om er te zijn. Korte video's van een bord dat wordt opgemaakt, de bar op vrijdagavond of een zaal die klaarstaat voor een feest werken beter dan gepolijste reclame. Met [[social-media-marketing|social media marketing]] zetten we een haalbaar ritme op, en op een contentdag maken we in één keer beeld voor weken. Reageer op berichten en deel wat gasten zelf posten, met hun toestemming. Voor zakelijke events werkt LinkedIn vaak beter dan Instagram.",
              en: "Show what it feels like to be there. Short videos of a dish being plated, the bar on a Friday night or a room ready for a party work better than polished advertising. With [[social-media-marketing|social media marketing]] we set up a manageable rhythm, and on a content day we shoot material for weeks in one go. Reply to messages and share what guests post themselves, with their permission. For corporate events, LinkedIn often works better than Instagram.",
            },
          },
          {
            q: { nl: "Hoe zorg ik dat mijn zaak er online net zo goed uitziet als in het echt?", en: "How do I make my venue look as good online as it does in real life?" },
            a: {
              nl: "Met echte foto's en een herkenbare stijl. Gasten beslissen vaak op basis van een paar beelden in Google of op Instagram, dus goede [[productfotografie|food- en interieurfotografie]] is geen luxe. Fotografeer je signatuurgerechten, het interieur in het licht van je drukste moment en het team aan het werk. Zorg daarnaast dat logo, menukaart, gevelbord en website één sfeer neerzetten. Zo herkent een gast je online meteen, en voelt de eerste keer binnenstappen al een beetje vertrouwd.",
              en: "With real photos and a recognisable style. Guests often decide based on a few images on Google or Instagram, so good [[productfotografie|food and interior photography]] is not a luxury. Photograph your signature dishes, the interior in the light of your busiest moment and the team at work. Also make sure your logo, menu, facade sign and website create one atmosphere. That way guests recognise you online right away, and walking in for the first time already feels a little familiar.",
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
