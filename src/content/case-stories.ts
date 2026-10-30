/* ============================================================
   Uitgewerkte projectverhalen per case (slug → verhaal), NL + EN.
   Los van cases*.ts zodat de basisgegevens kort blijven. Alleen wat klopt:
   geen verzonnen cijfers, resultaten, jaartallen of citaten van klanten.
   ============================================================ */

import type { CaseNarrative } from "./types";

export const caseNarratives: Record<string, CaseNarrative> = {
  "teamtv": {
    intro: {
      nl: "Sportclubs filmen hun wedstrijden, analyseren elke actie en delen de mooiste momenten. TeamTV maakt dat mogelijk, en de interface moest net zo hard groeien als het platform zelf.",
      en: "Sports clubs film their matches, analyse every move and share the best moments. TeamTV makes that possible, and the interface had to grow as fast as the platform itself.",
    },
    chapters: [
      {
        title: { nl: "Een platform in de groei.", en: "A platform on the move." },
        body: [
          {
            nl: "TeamTV is het videoplatform voor sportclubs: streamen, analyseren en publiceren op één plek. Er kwamen steeds meer functies bij, en elke nieuwe knop maakte het scherm een beetje drukker. De vraag was helder: moderner, rustiger en klaar voor alles wat nog komt.",
            en: "TeamTV is the video platform for sports clubs: streaming, analysing and publishing in one place. More and more features kept arriving, and every new button made the screen a little busier. The brief was clear: more modern, calmer and ready for whatever comes next.",
          },
        ],
      },
      {
        title: { nl: "Geen schermen, maar een systeem.", en: "Not screens, but a system." },
        body: [
          {
            nl: "We ontwierpen in Figma een designsysteem: componenten, kleuren, typografie en patronen die met elkaar kloppen. Zo bouwt het team van TeamTV nieuwe features met dezelfde bouwstenen, zonder dat de web-app een lappendeken wordt.",
            en: "We designed a system in Figma: components, colours, typography and patterns that belong together. That way the TeamTV team builds new features from the same building blocks, without the web app turning into a patchwork.",
          },
          {
            nl: "Streamen, analyseren en publiceren kregen elk een eigen, heldere route. De dashboards zetten statistieken en analyses rustig naast elkaar, op een groot scherm thuis en op een tablet langs de lijn.",
            en: "Streaming, analysing and publishing each got their own clear route. The dashboards lay out statistics and analysis calmly side by side, on a big screen at home and on a tablet by the pitch.",
          },
        ],
      },
      {
        title: { nl: "Van eerste klik tot inlog.", en: "From first click to login." },
        body: [
          {
            nl: "Naast de app vernieuwden we de marketingwebsite in Webflow, in dezelfde beeldtaal. Bezoekers zien wat TeamTV doet, vergelijken de pakketten voor hun club en loggen daarna in zonder breuk in stijl. Animaties laten het product al bewegen voordat je het zelf probeert.",
            en: "Alongside the app we renewed the marketing website in Webflow, in the same visual language. Visitors see what TeamTV does, compare plans for their club and then log in without any break in style. Animations show the product in motion before you even try it.",
          },
          {
            nl: "TeamTV heeft nu een interface die overzicht houdt, ook als er veel gebeurt. En een systeem waarin elke nieuwe functie voelt alsof hij er altijd al was.",
            en: "TeamTV now has an interface that keeps its overview, even when a lot is going on. And a system in which every new feature feels like it was always there.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een interface die rustig blijft, ook als het op het veld spannend wordt.", en: "An interface that stays calm, even when the match gets tense." },
      { nl: "Eerst het systeem. Dan de schermen.", en: "System first. Screens second." },
    ],
  },
  "monvy": {
    intro: {
      nl: "Facturen versturen, betalingen opvolgen en snel werkkapitaal regelen. Monvy brengt het samen op één plek, en dat vraagt om een merk dat vertrouwen geeft en software die het simpel houdt.",
      en: "Sending invoices, chasing payments and arranging working capital fast. Monvy brings it all together in one place, and that calls for a brand people trust and software that keeps it simple.",
    },
    chapters: [
      {
        title: { nl: "Eerst het gesprek.", en: "It starts with a conversation." },
        body: [
          {
            nl: "We begonnen met gesprekken over de visie van Monvy. Wat moet een ondernemer voelen als hij inlogt en zijn openstaande facturen ziet? Dat legden we vast in een brandbook, met Monvy als betrouwbare partner in financieel beheer en een tone of voice die informeert zonder afstand te nemen.",
            en: "We started by talking through Monvy's vision. What should a business owner feel when they log in and see their unpaid invoices? We captured it in a brandbook, positioning Monvy as a trusted partner in financial management, with a tone of voice that informs without keeping its distance.",
          },
        ],
      },
      {
        title: { nl: "Blauw, groen en heldere vormen.", en: "Blue, green and clear shapes." },
        body: [
          {
            nl: "Blauw en groen werden de merkkleuren, driehoeken en cirkels de merkvormen. De typografie is strak en goed leesbaar, want in een financieel platform moet je elk bedrag in één keer kunnen lezen. Die rust loopt door in elk scherm, van inloggen tot dashboard.",
            en: "Blue and green became the brand colours, triangles and circles the brand shapes. The typography is clean and highly legible, because in a financial platform every amount has to read right the first time. That calm carries through every screen, from login to dashboard.",
          },
        ],
      },
      {
        title: { nl: "Alles wat een factuur nodig heeft.", en: "Everything an invoice needs." },
        body: [
          {
            nl: "Daarna ontwierpen we de gebruikerservaring en bouwden we het platform. Een eenvoudig factuurproces, automatische opvolging van betalingen en aanvragen voor werkkapitaal, factoring en factuurfinanciering. Workflows bepalen per debiteur hoe de opvolging loopt, want niet elke klant verdient dezelfde herinnering.",
            en: "Then we designed the user experience and built the platform. A simple invoicing flow, automated payment follow-up and requests for working capital, factoring and invoice financing. Workflows set how follow-up runs for each debtor, because not every customer deserves the same reminder.",
          },
          {
            nl: "Eigen API-koppelingen met KVK, VIES en CreditSafe halen bedrijfsgegevens actueel binnen. Een supportbot op basis van ChatGPT helpt gebruikers op weg met hun vragen.",
            en: "Custom API integrations with KVK, VIES and CreditSafe pull in up-to-date company data. A support bot built on ChatGPT helps users along with their questions.",
          },
        ],
      },
      {
        title: { nl: "Eén plek voor je cashflow.", en: "One place for your cash flow." },
        body: [
          {
            nl: "Monvy heeft nu één merk en één platform waarin facturen, opvolging en financiering samenkomen. Ondernemers werken met actuele gegevens van hun klanten en zien in één oogopslag wat er openstaat.",
            en: "Monvy now has one brand and one platform where invoicing, follow-up and financing come together. Business owners work with up-to-date customer data and see at a glance what is still outstanding.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Vertrouwen begint bij een bedrag dat je in één keer leest.", en: "Trust starts with a figure you can read at a glance." },
      { nl: "Financieel ingewikkeld. Voor de gebruiker simpel.", en: "Complicated finance. Simple for the user." },
    ],
  },
  "repairlab": {
    intro: {
      nl: "Wij repareren. Jij blijft verbonden. Voor Repairlab, Apple Authorized Service Provider, maakten we die belofte zichtbaar: in het merk, op straat en online.",
      en: "We repair. You stay connected. For Repairlab, an Apple Authorized Service Provider, we made that promise visible: in the brand, on the street and online.",
    },
    chapters: [
      {
        title: { nl: "Premium, ook bij een barst.", en: "Premium, even with a crack." },
        body: [
          {
            nl: "Een kapot toestel is al vervelend genoeg. Repairlab wilde zich onderscheiden als premium reparatiepartner, met een merk dat rust en vertrouwen geeft. En met een website die klanten in een paar klikken naar de juiste reparatie brengt.",
            en: "A broken device is annoying enough. Repairlab wanted to stand out as a premium repair partner, with a brand that brings calm and confidence. And with a website that gets customers to the right repair in a few clicks.",
          },
        ],
      },
      {
        title: { nl: "Een merk met een rode draad.", en: "A brand with a red thread." },
        body: [
          {
            nl: "We gaven Repairlab een frisse identiteit in zwart en wit, met rood als scherp accent. Die stijl zetten we door in het drukwerk, van visitekaartje tot brochure. Ook de polo's, sweaters en de belettering van de bedrijfsauto kregen een plek in de huisstijl, zodat het merk overal hetzelfde verhaal vertelt.",
            en: "We gave Repairlab a fresh identity in black and white, with red as a sharp accent. We carried that style through to print, from business cards to brochure. Polo shirts, sweaters and the company car livery also found their place in the identity, so the brand tells the same story everywhere.",
          },
        ],
      },
      {
        title: { nl: "Kies je toestel, plan je afspraak.", en: "Pick your device, book your slot." },
        body: [
          {
            nl: "Op de site kies je eerst het merk: iPhone, MacBook, iPad of Apple Watch, maar ook Samsung, Huawei en andere merken. Daarna je model, en dan zie je welke reparaties er zijn. Een afspraakformulier in een paar stappen legt het type reparatie, de schade en je gegevens vast.",
            en: "On the site you first pick the brand: iPhone, MacBook, iPad or Apple Watch, but also Samsung, Huawei and others. Then your model, and you see which repairs are available. A booking form in a few steps captures the type of repair, the damage and your details.",
          },
          {
            nl: "We bouwden de website in Webflow en richtten hem in op lokale vindbaarheid, samen met het Google Bedrijfsprofiel. Want wie een kapot scherm heeft, zoekt dichtbij.",
            en: "We built the website in Webflow and set it up for local search, together with the Google Business Profile. Because anyone with a broken screen looks close to home.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Van kapot scherm naar afspraak, zonder gedoe.", en: "From cracked screen to booked repair, without the hassle." },
      { nl: "Premium zit in de details. Ook in een rode streep.", en: "Premium lives in the details. Even in a red stripe." },
    ],
  },
  "sami": {
    intro: {
      nl: "Inspecteren zonder dat er iemand langs hoeft te komen. Sami doet het online, en moest in één oogopslag laten zien wat het doet en waarom dat tijd scheelt.",
      en: "Inspections without anyone needing to visit. Sami does it online, and had to show at a glance what it does and why that saves time.",
    },
    chapters: [
      {
        title: { nl: "Nieuw, dus uitleggen.", en: "New, so it needs explaining." },
        body: [
          {
            nl: "Sami brengt inspecties, rapportages en opvolging samen in één online platform. Dat is nieuw, en wat nieuw is, moet je uitleggen. De website en het product moesten dat in één blik doen.",
            en: "Sami brings inspections, reporting and follow-up together in one online platform. That is new, and anything new needs explaining. The website and the product had to do it in a single glance.",
          },
        ],
      },
      {
        title: { nl: "Stap voor stap door de test.", en: "Step by step through the test." },
        body: [
          {
            nl: "In de product-interface loop je de inspectie stap voor stap door. Een voortgangsbalk laat zien waar je bent, een lijst vinkt de onderdelen af: geheugen, trilfunctie, camera en flitser, speaker en microfoon. Bij interactieve tests, zoals het scherm of de knoppen, vertelt de app precies wat je moet doen.",
            en: "In the product interface you go through the inspection step by step. A progress bar shows where you are, and a list ticks off each part: memory, vibration, camera and flash, speaker and microphone. For interactive tests, like the screen or the buttons, the app tells you exactly what to do.",
          },
          {
            nl: "Is er schade, dan meld je die daarna met één knop. Geen formulieren vol vakjargon, maar een route die je zonder uitleg volgt.",
            en: "If there is damage, you report it afterwards with a single button. No forms full of jargon, but a route you can follow without instructions.",
          },
        ],
      },
      {
        title: { nl: "Hetzelfde gevoel op elk scherm.", en: "The same feel on every screen." },
        body: [
          {
            nl: "We ontwierpen een heldere website in Webflow en een product-interface die op desktop, tablet en mobiel even prettig werkt. Licht, vriendelijk en met groen voor elke stap die goed gaat. Van eerste bezoek tot dagelijks gebruik voelt het als één product.",
            en: "We designed a clear website in Webflow and a product interface that works equally well on desktop, tablet and mobile. Light, friendly and with green for every step that goes right. From first visit to daily use, it feels like one product.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een test voelt minder als een test als je weet wat er komt.", en: "A test feels less like a test when you know what's coming." },
    ],
  },
  "jurgh-detailing": {
    intro: {
      nl: "Wie zijn auto naar JURGH brengt, verwacht perfectie tot in de lak. Wij zorgden dat het merk, de website en alles daarachter datzelfde niveau halen.",
      en: "Anyone who brings their car to JURGH expects perfection down to the paintwork. We made sure the brand, the website and everything behind it reach that same level.",
    },
    chapters: [
      {
        title: { nl: "Net zo verzorgd als de auto.", en: "As polished as the car." },
        body: [
          {
            nl: "JURGH Detailing werkt aan exclusieve auto's: glascoating, Paint Protection Film en full detailing. Die klanten kijken kritisch, ook online. En achter de schermen moest het net zo strak lopen, van offerteaanvraag tot werkorder.",
            en: "JURGH Detailing works on exclusive cars: ceramic coating, paint protection film and full detailing. Those clients have a critical eye, online too. And behind the scenes things had to run just as smoothly, from quote request to work order.",
          },
        ],
      },
      {
        title: { nl: "Het merk voorop.", en: "Brand first." },
        body: [
          {
            nl: "We begonnen bij de branding: een stevig woordmerk met een rode balk, dat op wit en op zwart overeind blijft. Daarna volgde de website, met grote beelden, rustige animaties en een directe knop naar een afspraak.",
            en: "We started with the branding: a strong wordmark with a red bar that holds its own on white and on black. Then came the website, with large imagery, calm animations and a direct button to book an appointment.",
          },
          {
            nl: "De foto's en video maakten we zelf. Zo zien de auto's er op de site net zo goed uit als in de studio.",
            en: "We shot the photos and video ourselves. That way the cars look as good on the site as they do in the studio.",
          },
        ],
      },
      {
        title: { nl: "Elke behandeling een eigen podium.", en: "Every treatment its own stage." },
        body: [
          {
            nl: "Glascoating en Paint Protection Film hebben elk een eigen pagina die uitlegt wat de behandeling doet. In het portfolio staan auto's als een Porsche 918 Spyder en een Aston Martin DB11 groot in beeld. En op de over-ons-pagina zie je wie er aan je auto werkt.",
            en: "Ceramic coating and paint protection film each have their own page explaining what the treatment does. The portfolio shows cars like a Porsche 918 Spyder and an Aston Martin DB11 in full size. And the about page shows who works on your car.",
          },
        ],
      },
      {
        title: { nl: "Achter de schermen net zo strak.", en: "Just as sharp behind the scenes." },
        body: [
          {
            nl: "Een offerteaanvraag loopt via een eigen flow, gekoppeld aan de offertesoftware van JURGH. Klanten hebben een eigen klantportaal, en automatiseringen zetten de werkorders klaar. Ook het drukwerk ontwierpen we in dezelfde stijl, zodat het merk klopt van website tot visitekaartje.",
            en: "A quote request runs through a dedicated flow, connected to JURGH's quoting software. Customers have their own portal, and automations prepare the work orders. We designed the print in the same style too, so the brand holds together from website to business card.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een premium merk houdt niet op bij de homepage.", en: "A premium brand doesn't stop at the homepage." },
      { nl: "Van offerte tot werkorder in één lijn.", en: "From quote to work order in one line." },
    ],
  },
  "debiteurnet": {
    intro: {
      nl: "Openstaande offertes, onbetaalde facturen, herinneringen die blijven liggen. Debiteurnet wilde ondernemers weer grip geven, met een portaal waarin alle cijfers en acties op één plek staan.",
      en: "Outstanding quotes, unpaid invoices, reminders that never get sent. Debiteurnet wanted to give business owners their grip back, with a portal that puts every figure and action in one place.",
    },
    chapters: [
      {
        title: { nl: "Grip op wat openstaat.", en: "A grip on what's outstanding." },
        body: [
          {
            nl: "Ondernemers verliezen tijd en overzicht als offertes en facturen overal verspreid liggen. Wie moet er nog betalen, welke offerte wacht op akkoord, wanneer gaat de volgende herinnering de deur uit? Het portaal moest die complexe data simpel maken.",
            en: "Business owners lose time and overview when quotes and invoices are scattered everywhere. Who still has to pay, which quote is waiting for approval, when does the next reminder go out? The portal had to make that complex data simple.",
          },
        ],
      },
      {
        title: { nl: "Een dashboard dat ademt.", en: "A dashboard that breathes." },
        body: [
          {
            nl: "We ontwierpen een rustig dashboard met heldere KPI's, grafieken en tabbladen. Bovenaan staan de bedragen die ertoe doen: uitstaande offertes en openstaande facturen. Daaronder grafieken per maand en een rij met de laatste gebeurtenissen.",
            en: "We designed a calm dashboard with clear KPIs, charts and tabs. At the top are the amounts that matter: outstanding quotes and open invoices. Below them, monthly charts and a row of the latest events.",
          },
        ],
      },
      {
        title: { nl: "Elke fase een eigen kolom.", en: "Every stage its own column." },
        body: [
          {
            nl: "De opvolging kreeg een eigen overzicht, met per fase een kolom: van ingebrekestelling tot incasso of betalingsregeling. Workflows en e-mailtemplates leggen vast hoe een herinnering verloopt, en factoring heeft een vaste plek in het menu.",
            en: "Follow-up got its own overview, with a column for each stage: from notice of default to collection or payment plan. Workflows and email templates set how a reminder runs, and factoring has a fixed place in the menu.",
          },
          {
            nl: "De frontend bouwden we als schaalbare web-app in React en Next.js. Zo zien ondernemers direct hoe het staat met uitstaande en geaccepteerde offertes, de gemiddelde doorlooptijd en de opvolging.",
            en: "We built the front end as a scalable web app in React and Next.js. Business owners see straight away where they stand with outstanding and accepted quotes, average lead time and follow-up.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Rust in een dashboard is geen luxe. Het is overzicht.", en: "Calm in a dashboard isn't a luxury. It's clarity." },
    ],
  },
  "architectenbureau-koppens": {
    intro: {
      nl: "Gebouwen die zuinig zijn met energie en er ook nog prachtig uitzien. Architectenbureau Koppens verdiende een website die net zo doordacht is als hun ontwerpen.",
      en: "Buildings that are frugal with energy and look beautiful too. Architectenbureau Koppens deserved a website as considered as their designs.",
    },
    chapters: [
      {
        title: { nl: "Een podium voor het portfolio.", en: "A stage for the portfolio." },
        body: [
          {
            nl: "Koppens ontwerpt met een duidelijke visie op energieneutraal bouwen. Hun projecten spreken voor zich, als je ze de ruimte geeft. De website moest dat podium bieden, zonder af te leiden van de architectuur.",
            en: "Koppens designs with a clear vision of energy-neutral building. Their projects speak for themselves, if you give them room. The website had to offer that stage without distracting from the architecture.",
          },
        ],
      },
      {
        title: { nl: "Ruimte om te kijken.", en: "Room to look." },
        body: [
          {
            nl: "We kozen voor grote projectbeelden en veel witruimte. Elk project heeft een heldere opbouw, van een moderne villa met zwembad tot de visie erachter. De site draait op WordPress met Elementor, zodat nieuwe projecten eenvoudig een plek krijgen.",
            en: "We chose large project images and generous white space. Every project follows a clear structure, from a modern villa with a pool to the vision behind it. The site runs on WordPress with Elementor, so new projects are easy to add.",
          },
        ],
      },
      {
        title: { nl: "Gevonden in de regio.", en: "Found close to home." },
        body: [
          {
            nl: "De content zetten we zo neer dat het bureau lokaal goed vindbaar is. Wie in de regio zoekt naar een architect voor energieneutraal bouwen, moet Koppens tegenkomen. Zo laat de site de architectuur spreken, voor bestaande en nieuwe opdrachtgevers.",
            en: "We set up the content so the firm ranks well locally. Anyone in the region looking for an architect for energy-neutral building should come across Koppens. That way the site lets the architecture speak, for existing and new clients alike.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Witruimte is ook architectuur.", en: "White space is architecture too." },
    ],
  },
  "buitenstate": {
    intro: {
      nl: "Vrijstaande woningen, boerderijen en landgoederen in het buitengebied, aangeboden door een selectie NVM-makelaars. Buitenstate werd de plek waar aanbod en inspiratie samenkomen, en waar je graag terugkomt.",
      en: "Detached homes, farmhouses and estates in the countryside, offered by a select group of NVM estate agents. Buitenstate became the place where listings and inspiration meet, and where people like to come back.",
    },
    chapters: [
      {
        title: { nl: "Meer dan een woningsite.", en: "More than a property site." },
        body: [
          {
            nl: "Wie landelijk wil wonen, zoekt niet alleen een huis. Je zoekt een plek, een landschap, een manier van leven. Buitenstate wilde aanbod en inspiratie op één plek bij elkaar brengen, en de aangesloten makelaars moesten hun aanbod en campagnes zelf kunnen beheren.",
            en: "People who want to live in the countryside aren't just looking for a house. They're looking for a place, a landscape, a way of life. Buitenstate wanted to bring listings and inspiration together in one place, and the member agents needed to manage their own listings and campaigns.",
          },
        ],
      },
      {
        title: { nl: "Verhalen uit het buitengebied.", en: "Stories from the countryside." },
        body: [
          {
            nl: "We bouwden in Webflow een metasearch-platform voor landelijke woningen, met een flexibel CMS voor aanbod, verhalen en uitgebreide blogs. Expertblogs nemen je mee naar West-Friesland, het rivierengebied of de Achterhoek, en in het magazine vertellen bewoners en makelaars hun verhaal. Video's maken de verhalen af.",
            en: "We built a meta-search platform for rural homes in Webflow, with a flexible CMS for listings, stories and long-form blogs. Expert blogs take you to West Friesland, the river region or the Achterhoek, and in the magazine residents and agents tell their stories. Videos complete the picture.",
          },
        ],
      },
      {
        title: { nl: "Een eigen cockpit voor makelaars.", en: "A cockpit for the agents." },
        body: [
          {
            nl: "Achter de schermen kregen de makelaars een eigen CMS, inclusief een tool om e-mailcampagnes te versturen. Een nieuwsbriefflow maakt van bezoekers abonnees, en funnels en automations volgen bezoekers en aanvragen op.",
            en: "Behind the scenes the agents got their own CMS, including a tool for sending email campaigns. A newsletter flow turns visitors into subscribers, and funnels and automations follow up on visitors and requests.",
          },
        ],
      },
      {
        title: { nl: "Van lezen naar doen.", en: "From reading to doing." },
        body: [
          {
            nl: "Tools op de site zetten bezoekers aan tot actie. Verkopers vragen een gratis waardebepaling aan of ontdekken hoeveel zoekers er zijn voor hun woning. Zo komen aanbod, verhalen, video en tools samen op één platform.",
            en: "Tools on the site prompt visitors to take action. Sellers request a free valuation or find out how many buyers are searching for a home like theirs. That way listings, stories, video and tools come together on one platform.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Landelijk wonen begint met een goed verhaal.", en: "Country living starts with a good story." },
      { nl: "Een platform waar je blijft lezen, ook als je nog niet verhuist.", en: "A platform you keep reading, even before you move." },
    ],
  },
  "maarschall": {
    intro: {
      nl: "Handgemaakt titanium, een eigen sound en een plek onder McLarens, Ferrari's en Lamborghini's. Maarschall verdiende een website die net zo hard binnenkomt als het geluid van de uitlaat.",
      en: "Handmade titanium, a signature sound and a place under McLarens, Ferraris and Lamborghinis. Maarschall deserved a website that hits as hard as the exhaust note.",
    },
    chapters: [
      {
        title: { nl: "Vakwerk voor liefhebbers.", en: "Craft for enthusiasts." },
        body: [
          {
            nl: "Maarschall maakt handgemaakte, personaliseerbare titanium uitlaatsystemen, voor onder meer McLaren, Ferrari, Lamborghini en Audi. Ze leveren zelf en via resellers. Een topproduct voor liefhebbers, dat online meteen dezelfde klasse moest laten zien.",
            en: "Maarschall makes handmade, customisable titanium exhaust systems for McLaren, Ferrari, Lamborghini and Audi, among others. They sell direct and through resellers. A top product for enthusiasts, which had to show the same class online from the very first second.",
          },
        ],
      },
      {
        title: { nl: "Zwart, rood en titanium.", en: "Black, red and titanium." },
        body: [
          {
            nl: "We ontwikkelden de branding en bouwden de website in Webflow. Zwart als basis, rood als accent en veel ruimte voor beelden uit de werkplaats. Onder de opening vertellen vier blokken waar een Maarschall-uitlaat voor staat: een persoonlijke sound, handwerk, eigen ontwikkeling en titanium uit de lucht- en ruimtevaart.",
            en: "We developed the branding and built the website in Webflow. Black as the base, red as the accent and plenty of room for images from the workshop. Below the opening, four blocks explain what a Maarschall exhaust stands for: a personal sound, handcraft, in-house development and titanium with roots in aerospace.",
          },
        ],
      },
      {
        title: { nl: "Vind jouw uitlaat.", en: "Find your exhaust." },
        body: [
          {
            nl: "Het hart van de site is 'Vind jouw uitlaat'. Je filtert op merk, kiest je model en bouwjaar en ziet meteen welk systeem er is voor jouw auto. Staat je auto er niet tussen, dan is contact één klik verder.",
            en: "The heart of the site is 'Find your exhaust'. You filter by make, choose your model and year and see straight away which system exists for your car. If your car isn't listed, getting in touch is one click away.",
          },
          {
            nl: "Zo staat het vakmanschap voorop en vinden liefhebbers hun uitlaat zonder te zoeken. Een donkere, krachtige site die past bij het product.",
            en: "That way the craftsmanship comes first and enthusiasts find their exhaust without searching. A dark, powerful site that suits the product.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Je moet de uitlaat bijna horen, alleen door naar de site te kijken.", en: "You should almost hear the exhaust, just by looking at the site." },
      { nl: "Klasse zie je ook aan wat je weglaat.", en: "Class also shows in what you leave out." },
    ],
  },
  "infrai": {
    intro: {
      nl: "Een scheur in de stoep, een kapotte lantaarnpaal, een verzakte weg. Met InfrAI inspecteren burgers en gemeentes samen de stad, in een app die je zonder handleiding snapt.",
      en: "A crack in the pavement, a broken lamppost, a sunken road. With InfrAI, citizens and municipalities inspect the city together, in an app you understand without a manual.",
    },
    chapters: [
      {
        title: { nl: "Twee gebruikers, één app.", en: "Two users, one app." },
        body: [
          {
            nl: "Burgers melden wat er mis is in de openbare ruimte, medewerkers van de gemeente pakken het op. Twee heel verschillende gebruikers in één app. Voor allebei moesten de functies meteen duidelijk zijn.",
            en: "Citizens report what is wrong in public space, municipal staff pick it up. Two very different users in one app. For both of them, the features had to make sense straight away.",
          },
        ],
      },
      {
        title: { nl: "Testen tot het klopt.", en: "Testing until it clicks." },
        body: [
          {
            nl: "We begonnen met strategisch onderzoek en schreven user stories en functionele eisen. Daarna ontwierpen en testten we in rondes, van eerste schetsen tot interactieve prototypes. Elke ronde leverde gerichte feedback op, en de interface werd er steeds beter van.",
            en: "We started with strategic research and wrote user stories and functional requirements. Then we designed and tested in rounds, from first sketches to interactive prototypes. Every round brought focused feedback, and the interface got better each time.",
          },
        ],
      },
      {
        title: { nl: "De straat als scherm.", en: "The street as a screen." },
        body: [
          {
            nl: "De app stelt een route samen langs meldingen in de buurt. Onderweg schakel je naar augmented reality en zie je de melding direct over de echte weg, stoep of lantaarnpaal. Je ziet hoe ernstig een schade is, hoe vaak anderen hem al bevestigden, en je bevestigt hem zelf met één knop.",
            en: "The app plans a route past reports in the neighbourhood. Along the way you switch to augmented reality and see the report right on top of the real road, pavement or lamppost. You see how serious the damage is, how often others have confirmed it, and you confirm it yourself with one tap.",
          },
          {
            nl: "Op de achtergrond helpt AI om meldingen te analyseren, te categoriseren en te prioriteren. Medewerkers zien alles terug in een dashboard met een kaart van de stad.",
            en: "In the background, AI helps analyse, categorise and prioritise reports. Staff see everything in a dashboard with a map of the city.",
          },
        ],
      },
      {
        title: { nl: "Tastbaar voor iedereen.", en: "Tangible for everyone." },
        body: [
          {
            nl: "De visuals en prototypes maakten de mogelijkheden van InfrAI tastbaar, voor de gemeente en voor de burger. Het resultaat is een app die prettig werkt voor wie iets meldt én voor wie het beheer doet.",
            en: "The visuals and prototypes made InfrAI's possibilities tangible, for the municipality and for citizens alike. The result is an app that works well for the person who reports something and for the person who manages it.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goede app heeft geen handleiding nodig. Ook niet op straat.", en: "A good app needs no manual. Not even out on the street." },
      { nl: "Eerst een prototype in je hand, dan pas code.", en: "First a prototype in your hand, then the code." },
    ],
  },
  "mindyourpass": {
    intro: {
      nl: "Sterke wachtwoorden die nergens worden opgeslagen, maar ontstaan op het moment dat je ze nodig hebt. Knap bedacht en lastig uit te leggen. Wij maakten het helder, van merk tot app.",
      en: "Strong passwords that aren't stored anywhere, but created the moment you need them. Clever to invent and hard to explain. We made it clear, from brand to app.",
    },
    chapters: [
      {
        title: { nl: "Onzichtbare veiligheid.", en: "Invisible security." },
        body: [
          {
            nl: "MindYourPass maakt met gepatenteerde technologie sterke wachtwoorden on-the-fly. Het is een complete beveiligingsoplossing voor organisaties, die verder gaat dan een wachtwoordmanager. Maar beveiliging zie je niet, en uitleg wordt al snel technisch.",
            en: "MindYourPass uses patented technology to generate strong passwords on the fly. It is a complete security solution for organisations that goes beyond a password manager. But you can't see security, and explanations quickly get technical.",
          },
        ],
      },
      {
        title: { nl: "Eerst de mensen, dan de flows.", en: "People first, then flows." },
        body: [
          {
            nl: "Samen met het managementteam brachten we de belangrijkste stakeholders in kaart. Daarop ontwierpen we de secties en flows van de website, met een eigen route voor privégebruikers en zakelijke klanten. Ondersteunende visuals laten zien hoe het werkt, zonder dat je de techniek hoeft te begrijpen.",
            en: "Together with the management team we mapped the key stakeholders. We designed the website's sections and flows around them, with a separate route for personal users and business customers. Supporting visuals show how it works, without you needing to understand the technology.",
          },
        ],
      },
      {
        title: { nl: "Inloggen zonder nadenken.", en: "Logging in without thinking." },
        body: [
          {
            nl: "Voor de browserplug-in en de native app ontwierpen we de complete UI/UX, in meer dan tien scenario's en userflows. Feedforward vertelt je wat er gaat gebeuren, feedback bevestigt wat er gebeurde, en soepele overgangen houden het rustig. Zo log je overal in met een sterk wachtwoord dat je zelf nooit hoeft te onthouden.",
            en: "For the browser plug-in and the native app we designed the complete UI/UX, across more than ten scenarios and user flows. Feedforward tells you what is about to happen, feedback confirms what just happened, and smooth transitions keep things calm. So you log in anywhere with a strong password you never have to remember.",
          },
        ],
      },
      {
        title: { nl: "Overal hetzelfde oog.", en: "The same eye everywhere." },
        body: [
          {
            nl: "We verzorgden ook de branding, met lichtblauw, mintgroen en het oog uit het logo als terugkerend beeld. Die stijl zetten we door in advertentiebanners, social posts en drukwerk. De website werd het belangrijkste informatiepunt voor nieuwe klanten en gebruikers, met downloads, veelgestelde vragen en prijzen.",
            en: "We also took care of the branding, with light blue, mint green and the eye from the logo as a recurring image. We carried that style through to ad banners, social posts and print. The website became the main information hub for new customers and users, with downloads, FAQs and pricing.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Veiligheid voelt pas veilig als je snapt hoe het werkt.", en: "Security only feels safe once you understand how it works." },
      { nl: "Wij maken het ontastbare tastbaar.", en: "We make the intangible tangible." },
    ],
  },
  "kippenkar": {
    intro: {
      nl: "Een kippenverblijf op wielen, waarmee boeren hun eigen eieren produceren en verkopen. De Kippenkar verdiende een website die net zo stevig in elkaar zit als de kar zelf.",
      en: "A chicken house on wheels that lets farmers produce and sell their own eggs. The Kippenkar deserved a website as solidly built as the wagon itself.",
    },
    chapters: [
      {
        title: { nl: "Tijd voor een facelift.", en: "Time for a facelift." },
        body: [
          {
            nl: "Jaren eerder bouwden we de eerste websites voor de Kippenkar van Wijkamp Farming Solutions. Inmiddels was de kar een succes, in varianten voor verschillende klanten. Het werd tijd voor een site die dat liet zien en die beter presteerde.",
            en: "Years earlier we built the first websites for the Kippenkar by Wijkamp Farming Solutions. By now the wagon had become a success, in variants for different customers. It was time for a site that showed it and performed better.",
          },
        ],
      },
      {
        title: { nl: "Elke kar, elke optie.", en: "Every wagon, every option." },
        body: [
          {
            nl: "Vanaf de tekentafel werkten we samen aan een high-end site in Webflow. In een uitgebreide CMS-structuur koppelden we elke variant aan zijn optionele accessoires, van zonnepaneel tot automatische uitloopdeur. Zo zien bezoekers precies wat er te configureren valt.",
            en: "Starting at the drawing table, we worked together on a high-end site in Webflow. In an extensive CMS structure we linked every variant to its optional accessories, from solar panel to automatic exit door. That way visitors see exactly what can be configured.",
          },
        ],
      },
      {
        title: { nl: "Drie talen, één opvolging.", en: "Three languages, one follow-up." },
        body: [
          {
            nl: "Een opt-in geeft toegang tot de productbrochures, en automatische, persoonlijke e-mails volgen elke aanvraag op. De site spreekt Nederlands, Duits en Engels, met de vertalingen op subdomeinen en SEO op elke pagina.",
            en: "An opt-in unlocks the product brochures, and automated, personal emails follow up every request. The site speaks Dutch, German and English, with the translations on subdomains and SEO on every page.",
          },
          {
            nl: "We verzorgden ook de branding, ontwierpen de digitale brochures en maakten video. Dealers loggen in op een eigen dealerportaal.",
            en: "We also took care of the branding, designed the digital brochures and made video. Dealers log in to their own dealer portal.",
          },
        ],
      },
      {
        title: { nl: "Raak vanaf dag één.", en: "On target from day one." },
        body: [
          {
            nl: "Op de eerste dag na de lancering kwamen er meer dan vijftig brochureaanvragen binnen. Sindsdien is de website het belangrijkste informatiepunt en leadkanaal van Wijkamp Farming Solutions.",
            en: "On the first day after launch, more than fifty brochure requests came in. Since then the website has been the main information hub and lead channel for Wijkamp Farming Solutions.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goed product verdient een site die net zo hard werkt.", en: "A good product deserves a site that works just as hard." },
      { nl: "Een brochure is pas het begin van het gesprek.", en: "A brochure is only the start of the conversation." },
    ],
  },
};
