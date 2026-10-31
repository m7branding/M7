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
      nl: "Gebouwen die zuinig zijn met energie en er ook nog prachtig uitzien. Voor Architectenbureau Koppens maakten we een website met dezelfde zorg als hun ontwerpen.",
      en: "Buildings that are frugal with energy and look beautiful too. For Architectenbureau Koppens we made a website with the same care as their designs.",
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
  "the-digital-clinic": {
    intro: {
      nl: "Haaruitval is persoonlijk, en niet iedereen praat er makkelijk over. The Digital Clinic regelt de hele behandeling online, en dat vroeg om een platform waarin cliënt, huisarts en apotheek elkaar vinden.",
      en: "Hair loss is personal, and not everyone finds it easy to talk about. The Digital Clinic handles the entire treatment online, which called for a platform where client, GP and pharmacy find each other.",
    },
    chapters: [
      {
        title: { nl: "Drie rollen, één plek.", en: "Three roles, one place." },
        body: [
          {
            nl: "The Digital Clinic biedt een volledig online behandeling tegen haaruitval: intake, behandeling op recept en levering aan huis, samen met een huisarts en een apotheek. Losse tools zouden dat proces versnipperen. Er was een eigen platform nodig, waarin iedereen zijn eigen rol heeft.",
            en: "The Digital Clinic offers fully online hair-loss treatment: intake, prescription treatment and home delivery, together with a GP and a pharmacy. Loose tools would fragment that process. It needed a platform of its own, where everyone has their own role.",
          },
        ],
      },
      {
        title: { nl: "Gebouwd in sprints.", en: "Built in sprints." },
        body: [
          {
            nl: "We ontwierpen en bouwden de website en het platform in sprints, met Next.js en Supabase en koppelingen naar bestaande systemen. Het platform kent drie soorten gebruikers: de cliënt, de huisarts en de apotheek. Ook de regie over het project lag bij ons, van planning tot oplevering.",
            en: "We designed and built the website and the platform in sprints, with Next.js and Supabase and integrations with existing systems. The platform has three types of user: the client, the GP and the pharmacy. We also ran the project itself, from planning to delivery.",
          },
        ],
      },
      {
        title: { nl: "Van intake tot voordeur.", en: "From intake to front door." },
        body: [
          {
            nl: "De website laat in vier stappen zien hoe het werkt: een online intake, een behandeling op basis van je profiel, discrete levering en een portaal voor je abonnement. Cliënten doen hun intake online en beheren daarna alles in hun persoonlijke omgeving. Daar chatten ze ook met het team als ze een vraag hebben.",
            en: "The website shows how it works in four steps: an online intake, a treatment based on your profile, discreet delivery and a portal for your subscription. Clients complete their intake online and then manage everything in their personal environment. That is also where they chat with the team when they have a question.",
          },
        ],
      },
      {
        title: { nl: "Weten wat werkt.", en: "Knowing what works." },
        body: [
          {
            nl: "Daarnaast verzorgden we de marketing en de tracking, zodat helder is waar cliënten vandaan komen. Zo heeft The Digital Clinic één centrale omgeving voor cliënten, huisarts, apotheek en team, en een website die de online behandeling helder uitlegt.",
            en: "We also took care of marketing and tracking, so it is clear where clients come from. The Digital Clinic now has one central environment for clients, GP, pharmacy and team, and a website that explains the online treatment clearly.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Zorg op afstand moet juist dichtbij voelen.", en: "Care at a distance should feel close." },
      { nl: "Elke gebruiker een eigen rol. Eén platform dat ze verbindt.", en: "Every user their own role. One platform connecting them." },
    ],
  },
  "nova-funeral-cars": {
    intro: {
      nl: "Een rouwauto rijdt op een van de zwaarste dagen in iemands leven. Voor het bedrijf dat die auto's levert, maakten we een merk vol rust en respect, met een nieuwe naam: Nova.",
      en: "A hearse drives on one of the hardest days of someone's life. For the company that supplies those cars, we created a brand full of calm and respect, with a new name: Nova.",
    },
    chapters: [
      {
        title: { nl: "Een naam die niet meer paste.", en: "A name that no longer fit." },
        body: [
          {
            nl: "Nova Funeral Cars uit Oss levert rouwauto's aan uitvaartondernemers. Het bedrijf heette eerst Budget Hearses, terwijl het aanbod draait om elegantie en prestige. Het onderwerp is gevoelig, en vraagt om rust, respect en duidelijkheid.",
            en: "Nova Funeral Cars from Oss supplies hearses to funeral directors. The company used to be called Budget Hearses, while its range is all about elegance and prestige. The subject is sensitive, and calls for calm, respect and clarity.",
          },
        ],
      },
      {
        title: { nl: "Van Budget Hearses naar Nova.", en: "From Budget Hearses to Nova." },
        body: [
          {
            nl: "We begonnen bij de naam: Nova, met Nova Funeral Cars en Nova Special Cars als twee lijnen. Het nieuwe merk legden we vast in een brandbook. Ingetogen, met veel ruimte en zonder opsmuk, zoals het onderwerp vraagt.",
            en: "We started with the name: Nova, with Nova Funeral Cars and Nova Special Cars as two lines. We captured the new brand in a brandbook. Understated, spacious and without frills, as the subject demands.",
          },
        ],
      },
      {
        title: { nl: "Elk voertuig in het juiste licht.", en: "Every vehicle in the right light." },
        body: [
          {
            nl: "De website is sober vormgegeven, met een heldere structuur per voertuig en in meerdere talen. De fotografie maakten we zelf, zodat elke auto rustig en tot in detail in beeld komt.",
            en: "The website has a sober design, with a clear structure per vehicle and in several languages. We did the photography ourselves, so every car is shown calmly and in detail.",
          },
          {
            nl: "Wie zich aanmeldt, krijgt automatisch een e-mail zodra er nieuwe voorraad binnenkomt. Zo missen uitvaartondernemers geen nieuw aanbod.",
            en: "Anyone who signs up automatically gets an email as soon as new stock arrives. That way funeral directors never miss a new vehicle.",
          },
        ],
      },
      {
        title: { nl: "Ook op de beursvloer.", en: "On the trade-fair floor too." },
        body: [
          {
            nl: "Voor beurzen ontwierpen we de stand, en daarnaast flyers in dezelfde stijl. Zo heeft Nova een waardig merk dat overal hetzelfde uitstraalt, van website tot beursstand.",
            en: "For trade fairs we designed the booth, plus flyers in the same style. Nova now has a dignified brand that looks the same everywhere, from website to booth.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goede naam zegt wat je bent, niet wat je kost.", en: "A good name says what you are, not what you cost." },
      { nl: "Ingetogen is ook een keuze. Vaak de sterkste.", en: "Restraint is a choice too. Often the strongest one." },
    ],
  },
  "misterglass": {
    intro: {
      nl: "Glas op maat bestellen klinkt ingewikkeld. Bij MisterGlass kies je je glas, vul je de maten in en zie je meteen wat het kost. Wij maakten het merk en de webshop die het zo eenvoudig houden.",
      en: "Ordering made-to-measure glass sounds complicated. At MisterGlass you choose your glass, enter the dimensions and see the price straight away. We created the brand and the web shop that keep it that simple.",
    },
    chapters: [
      {
        title: { nl: "Maatwerk zonder drempel.", en: "Made to measure, no hurdles." },
        body: [
          {
            nl: "MisterGlass verkoopt glas op maat online: enkel glas, isolatieglas en triple glas, maar ook interieurglas, spiegels en glasbeslag. Voor vakmensen en voor particulieren. Maatwerk online verkopen vraagt om een merk dat vertrouwen geeft en een webshop die het de klant makkelijk maakt.",
            en: "MisterGlass sells made-to-measure glass online: single glazing, insulated and triple glazing, but also interior glass, mirrors and glass fittings. For professionals and private customers alike. Selling custom products online takes a brand people trust and a web shop that makes life easy for the customer.",
          },
        ],
      },
      {
        title: { nl: "Eerst een gezicht.", en: "First, a face." },
        body: [
          {
            nl: "We begonnen bij het merk: een nieuw logo en een huisstijl, vastgelegd in een brandbook. Fris, helder en zonder poespas, zoals goed glas hoort te zijn.",
            en: "We started with the brand: a new logo and visual identity, captured in a brandbook. Fresh, clear and no-nonsense, the way good glass should be.",
          },
        ],
      },
      {
        title: { nl: "Samenstellen, opmeten, bestellen.", en: "Configure, measure, order." },
        body: [
          {
            nl: "Daarna ontwikkelden we de webshop in WooCommerce. Bestellen gaat in drie stappen: je stelt je glassoort en vorm samen, bepaalt de afmetingen en kiest een levertijd die je uitkomt. Een prijscalculator per product rekent direct mee, en via Mollie reken je af met iDEAL.",
            en: "Then we developed the web shop in WooCommerce. Ordering takes three steps: you choose your type of glass and shape, set the dimensions and pick a delivery time that suits you. A price calculator per product works it out as you go, and Mollie handles checkout with iDEAL.",
          },
          {
            nl: "Campagnes op Google en Meta brengen gericht verkeer naar de shop. Video maakt het verhaal compleet.",
            en: "Campaigns on Google and Meta bring targeted traffic to the shop. Video completes the story.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Hoe complexer het product, hoe simpeler de bestelling moet voelen.", en: "The more complex the product, the simpler ordering should feel." },
    ],
  },
  "toy4participation": {
    intro: {
      nl: "Ook de allerjongsten mogen meepraten over wat hen aangaat. TOY4Participation wilde dat verhaal niet alleen vertellen, maar mensen er zelf aan laten meedoen.",
      en: "Even the youngest children deserve a say in what affects them. TOY4Participation didn't just want to tell that story, but to get people to take part in it.",
    },
    chapters: [
      {
        title: { nl: "Meedoen in plaats van lezen.", en: "Taking part, not just reading." },
        body: [
          {
            nl: "TOY4Participation is een Europees project binnen het netwerk van ISSA, de International Step by Step Association. Het zet zich in voor kinderparticipatie, in de kinderopvang en in Play Hubs in de buurt. Dat verhaal moest ouders van jonge kinderen bereiken, het liefst zo dat ze ook echt meedoen.",
            en: "TOY4Participation is a European project within the network of ISSA, the International Step by Step Association. It champions child participation, in early childhood settings and in local Play Hubs. That story had to reach parents of young children, ideally in a way that gets them to join in.",
          },
        ],
      },
      {
        title: { nl: "Een merk om mee te spelen.", en: "A brand to play with." },
        body: [
          {
            nl: "We gaven TOY4Participation een eigen huisstijl, met fris turquoise, warme gele vormen en beelden van kinderen in actie. Daarna bouwden we de website in Webflow.",
            en: "We gave TOY4Participation its own visual identity, with fresh turquoise, warm yellow shapes and images of children in action. Then we built the website in Webflow.",
          },
        ],
      },
      {
        title: { nl: "Een speurtocht op de kaart.", en: "A treasure hunt on the map." },
        body: [
          {
            nl: "Het hart is een interactieve quest. Op een kaart volg je korte hoofdstukken: wat kinderparticipatie is, waarom het ertoe doet, hoe het eruitziet en wat je misschien al doet zonder het zo te noemen. Onderweg deel je je eigen ervaringen.",
            en: "At its heart is an interactive quest. On a map you follow short chapters: what child participation is, why it matters, what it looks like and what you may already be doing without calling it that. Along the way you share your own experiences.",
          },
          {
            nl: "Die ervaringen komen samen op een community wall, waar je ziet wat anderen al doen en wat ze willen proberen. Zo werkt de quest als engagement funnel, van eerste klik tot actieve deelnemer, in meerdere talen.",
            en: "Those experiences come together on a community wall, where you see what others already do and what they would like to try. That makes the quest an engagement funnel, from first click to active participant, in several languages.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Wat je zelf doet, onthoud je beter.", en: "What you do yourself, you remember." },
      { nl: "Een funnel kan ook een speurtocht zijn.", en: "A funnel can be a treasure hunt too." },
    ],
  },
  "chavore": {
    intro: {
      nl: "CHAVORE betekent 'kinderen' in het Romani. Voor dit ISSA-initiatief maakten we een korte speurtocht die professionals laat stilstaan bij hun eigen praktijk.",
      en: "CHAVORE means 'children' in Romani. For this ISSA initiative we built a short treasure hunt that makes professionals stop and reflect on their own practice.",
    },
    chapters: [
      {
        title: { nl: "Kennis die blijft hangen.", en: "Knowledge that sticks." },
        body: [
          {
            nl: "CHAVORE zet zich in voor de mentale gezondheid en het welzijn van kinderen van 0 tot 6 jaar, vooral in kwetsbare gemeenschappen zoals Roma. Partners in vijf landen werken eraan mee. De vraag was hoe je die kennis bij professionals brengt, op een manier die blijft hangen.",
            en: "CHAVORE works for the mental health and well-being of children aged 0 to 6, especially in vulnerable communities such as Roma. Partners in five countries are involved. The question was how to bring that knowledge to professionals in a way that sticks.",
          },
        ],
      },
      {
        title: { nl: "Een bekende basis, een eigen stijl.", en: "A familiar base, its own style." },
        body: [
          {
            nl: "We namen de online ervaring van TOY4Participation als basis en maakten er een speurtocht van in de stijl van CHAVORE. Licht, warm en met oranje en geel als kleuren. Zo bouwden we voort op iets dat werkt, zonder dat het een kopie werd.",
            en: "We took the TOY4Participation online experience as a base and turned it into a treasure hunt in CHAVORE's own style. Light, warm and coloured in orange and yellow. That way we built on something that works, without it becoming a copy.",
          },
        ],
      },
      {
        title: { nl: "Elk hoofdstuk een keuze.", en: "Every chapter a choice." },
        body: [
          {
            nl: "Op een kaart volg je vijf korte hoofdstukken, van Learning Through Feelings tot Care for the Caregivers. Bij elk hoofdstuk kies je welke aanpak je wilt proberen of vaker wilt doen. De antwoorden komen samen in een community-deel, zodat je ziet hoe anderen het aanpakken.",
            en: "On a map you follow five short chapters, from Learning Through Feelings to Care for the Caregivers. In each one you choose which practices you would like to try or do more of. The answers come together in a community section, so you see how others approach it.",
          },
          {
            nl: "De quest is te volgen in het Engels en in de talen van de partnerlanden. Kort, speels en met ruimte om na te denken over je eigen werk.",
            en: "The quest is available in English and in the languages of the partner countries. Short, playful and with room to think about your own work.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Kort en speels werkt ook bij serieuze onderwerpen.", en: "Short and playful works for serious subjects too." },
    ],
  },
  "issa": {
    intro: {
      nl: "Initiatieven, nieuws, events, een conferentie, een kennisbank en een ledennetwerk. ISSA heeft veel te vertellen, en al die inhoud verdiende één logisch thuis.",
      en: "Initiatives, news, events, a conference, a knowledge hub and a member network. ISSA has a lot to say, and all that content deserved one logical home.",
    },
    chapters: [
      {
        title: { nl: "Een netwerk vol beweging.", en: "A network in motion." },
        body: [
          {
            nl: "ISSA, de International Step by Step Association, verbindt organisaties en professionals in Europa en Centraal-Azië. Samen werken ze aan betere zorg en educatie voor jonge kinderen. Er gebeurt veel, en de website moest dat overzichtelijk laten zien.",
            en: "ISSA, the International Step by Step Association, connects organisations and professionals across Europe and Central Asia. Together they work on better care and education for young children. A lot is going on, and the website had to show it clearly.",
          },
        ],
      },
      {
        title: { nl: "Een vaste plek voor de basis.", en: "A fixed place for the essentials." },
        body: [
          {
            nl: "We maakten de website in Webflow, met een heldere structuur voor de vaste onderdelen van het netwerk. Wie ISSA is, de initiatieven, samen leren via de kennisbank en de conferentie, en lid worden.",
            en: "We built the website in Webflow, with a clear structure for the network's core parts. Who ISSA is, the initiatives, learning together through the knowledge hub and the conference, and becoming a member.",
          },
        ],
      },
      {
        title: { nl: "Wat er nu speelt, vooraan.", en: "What's happening now, up front." },
        body: [
          {
            nl: "Nieuws en events staan vooraan, zodat bezoekers meteen zien wat er in het netwerk speelt. Van een webinar tot de ISSA-conferentie, alles is met een paar klikken te vinden. Zo heeft het hele netwerk één overzichtelijke website, met ruimte voor de vele initiatieven van ISSA.",
            en: "News and events come first, so visitors see straight away what is happening in the network. From a webinar to the ISSA conference, everything is a few clicks away. The whole network now has one clear website, with room for ISSA's many initiatives.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Veel inhoud vraagt niet om meer pagina's, maar om een betere structuur.", en: "Lots of content doesn't need more pages. It needs better structure." },
    ],
  },
  "ecos": {
    intro: {
      nl: "Binnen ECOS ontstaan steeds nieuwe samenwerkingen, elk met een eigen thema. De vraag was hoe je ze allemaal herkenbaar maakt, zonder dat je vergeet waar ze bij horen.",
      en: "New collaborations keep emerging within ECOS, each with its own theme. The question was how to make every one recognisable without losing sight of where they belong.",
    },
    chapters: [
      {
        title: { nl: "Familie, geen kopieën.", en: "Family, not copies." },
        body: [
          {
            nl: "Het ECOS Institute is het leer- en samenwerkingsplatform van ISSA, met cursussen, een community en samenwerkingsverbanden rond jonge kinderen. Daarbinnen ontstaan Collaboratives: groepen partners die samen aan één thema werken. Elke Collaborative wil een eigen gezicht, en toch moet je zien dat hij bij ECOS hoort.",
            en: "The ECOS Institute is ISSA's platform for learning and collaboration, with courses, a community and partnerships around young children. Within it, Collaboratives emerge: groups of partners working together on one theme. Each Collaborative wants its own face, yet it should be clear that it belongs to ECOS.",
          },
        ],
      },
      {
        title: { nl: "Eerst de verhouding.", en: "First, the relationship." },
        body: [
          {
            nl: "We begonnen bij de merkstrategie: hoe verhouden ECOS en de Collaboratives zich tot elkaar? Daaruit volgde een co-brandingsysteem, vastgelegd in algemene richtlijnen en een brandbook. Zo weet elke nieuwe Collaborative waar hij vrij is en waar hij aansluit.",
            en: "We started with brand strategy: how do ECOS and the Collaboratives relate to each other? That led to a co-branding system, captured in general guidelines and a brandbook. Every new Collaborative now knows where it is free and where it falls in line.",
          },
        ],
      },
      {
        title: { nl: "Fatherhood gaat voorop.", en: "Fatherhood leads the way." },
        body: [
          {
            nl: "De Fatherhood Collaborative werkten we als eerste helemaal uit, als voorbeeld voor wat volgt. Daarnaast ontwierpen we de website van het ECOS Institute: licht, warm en met geel als accent. Animatievideo's vertellen het verhaal in beweging.",
            en: "We worked out the Fatherhood Collaborative in full first, as an example for what follows. We also designed the ECOS Institute website: light, warm and accented in yellow. Animated videos tell the story in motion.",
          },
          {
            nl: "Zo ligt er een merkfundament waar nieuwe Collaboratives op kunnen aansluiten, met een volledig uitgewerkt voorbeeld erbij. Een nieuwe Collaborative hoeft dus niet bij nul te beginnen.",
            en: "The result is a brand foundation that new Collaboratives can build on, with a fully worked-out example to follow. A new Collaborative never has to start from scratch.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goed merksysteem geeft vrijheid binnen duidelijke lijnen.", en: "A good brand system gives freedom within clear lines." },
    ],
  },
  "outplay": {
    intro: {
      nl: "Buiten spelen helpt kinderen leren, groeien en zich thuis voelen. OUTPLAY onderzoekt dat in heel Europa, en had één gezicht nodig dat in elk land hetzelfde verhaal vertelt.",
      en: "Outdoor play helps children learn, grow and feel they belong. OUTPLAY explores that across Europe, and needed one face that tells the same story in every country.",
    },
    chapters: [
      {
        title: { nl: "Eén project, veel landen.", en: "One project, many countries." },
        body: [
          {
            nl: "OUTPLAY is een Erasmus+-project, medegefinancierd door de Europese Unie, met partners uit meerdere landen en ISSA als een van hen. Het onderzoekt hoe buiten spelen kinderen van 3 tot 10 jaar helpt bij leren, bij hun sociale en emotionele ontwikkeling en bij het gevoel erbij te horen. Met materiaal voor leerkrachten, pilots op scholen en Outdoor Play Labs in de buurt.",
            en: "OUTPLAY is an Erasmus+ project, co-funded by the European Union, with partners from several countries and ISSA among them. It explores how outdoor play supports children aged 3 to 10 in learning, in their social and emotional development and in feeling they belong. With resources for educators, pilots in schools and community Outdoor Play Labs.",
          },
        ],
      },
      {
        title: { nl: "Alles in één brandbook.", en: "Everything in one brandbook." },
        body: [
          {
            nl: "We legden het merk vast in een brandbook: de kleuren, de typografie en hoe je het merk toepast. Zo kan elke partner, in elk land, met hetzelfde merk aan de slag. En vertelt OUTPLAY overal hetzelfde, herkenbare verhaal.",
            en: "We captured the brand in a brandbook: the colours, the typography and how to apply it. That way every partner, in every country, works with the same brand. And OUTPLAY tells the same recognisable story everywhere.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een merk dat reist, heeft duidelijke afspraken nodig.", en: "A brand that travels needs clear rules." },
    ],
  },
  "impeco": {
    intro: {
      nl: "Van een spoedzending binnen Nederland tot logistiek voor een evenement aan de andere kant van de wereld. IMPECO regelt het dag en nacht, met een 'no worries'-aanpak die je ook aan het merk mocht zien.",
      en: "From an urgent shipment within the Netherlands to logistics for an event on the other side of the world. IMPECO handles it day and night, with a 'no worries' approach that deserved to show in the brand.",
    },
    chapters: [
      {
        title: { nl: "Twee afdelingen, één verhaal.", en: "Two departments, one story." },
        body: [
          {
            nl: "IMPECO uit Duiven regelt complexe, vaak tijdkritische logistiek, wereldwijd. Van sportevenementen en beurzen tot transport en opslag. De twee afdelingen, Sports & Events en Transport, moesten duidelijker onder één merk komen te staan.",
            en: "IMPECO from Duiven handles complex, often time-critical logistics worldwide. From sports events and trade fairs to transport and storage. Its two departments, Sports & Events and Transport, needed to sit more clearly under one brand.",
          },
        ],
      },
      {
        title: { nl: "Opfrissen, niet weggooien.", en: "Refresh, don't replace." },
        body: [
          {
            nl: "We gaven het merk een opfrisbeurt, zonder het herkenbare los te laten. Sports & Events en Transport kregen elk een eigen plek binnen één merk, met co-branding die de structuur laat zien. Voor het jubileum ontwierpen we een speciaal logo, en ook het drukwerk pakten we aan.",
            en: "We gave the brand a refresh without letting go of what makes it recognisable. Sports & Events and Transport each got their own place within one brand, with co-branding that shows the structure. For the anniversary we designed a special logo, and we took on the print as well.",
          },
        ],
      },
      {
        title: { nl: "Van bezoek naar aanvraag.", en: "From visit to request." },
        body: [
          {
            nl: "Daarna ontwierpen we de nieuwe website in Webflow, in diep paars en met beelden van het werk achter de schermen. 'Moving Goods, Powering Experiences' zet de toon, en daaronder staan Sports & Events en Transport naast elkaar. Per dienst leidt een aanvraagflow bezoekers naar een concrete aanvraag.",
            en: "Then we designed the new website in Webflow, in deep purple with images of the work behind the scenes. 'Moving Goods, Powering Experiences' sets the tone, with Sports & Events and Transport side by side below it. For each service, a request flow guides visitors to a concrete request.",
          },
        ],
      },
    ],
    statements: [
      { nl: "No worries begint bij een duidelijk merk.", en: "No worries starts with a clear brand." },
    ],
  },
  "kds-stansvormen": {
    intro: {
      nl: "Als karton verandert in een verpakking, komt er een stansvorm aan te pas. KDS uit Weert maakt ze al sinds 1977, en verdiende een merk dat net zo scherp is als hun werk.",
      en: "When cardboard turns into packaging, a cutting die is involved. KDS from Weert has been making them since 1977, and deserved a brand as sharp as its work.",
    },
    chapters: [
      {
        title: { nl: "Precisiewerk uit Weert.", en: "Precision work from Weert." },
        body: [
          {
            nl: "KDS maakt stansvormen en alles wat erbij hoort, van stansvorm tot separatieset, voor bedrijven die karton tot verpakking verwerken. Het merk mocht laten zien hoe scherp KDS werkt. En klanten moesten makkelijker een offerte kunnen aanvragen en hun zaken online regelen.",
            en: "KDS makes cutting dies and everything that goes with them, from die to separation set, for companies that turn cardboard into packaging. The brand had to show how sharply KDS works. And customers needed an easier way to request quotes and handle things online.",
          },
        ],
      },
      {
        title: { nl: "Scherp tot in de rand.", en: "Sharp to the edge." },
        body: [
          {
            nl: "We werkten de branding uit en vertaalden die naar drukwerk en een nieuwe website in Webflow. Donker en strak, met rood als accent. De producten en de expertises stansen, uitbreken en separeren staan helder op een rij.",
            en: "We developed the branding and carried it through to print and a new website in Webflow. Dark and clean, with red as the accent. The products and the core skills of cutting, stripping and separating are laid out clearly.",
          },
        ],
      },
      {
        title: { nl: "Offertes zonder omweg.", en: "Quotes without detours." },
        body: [
          {
            nl: "Daarnaast bouwden we een offerte- en klantportaal. Klanten vragen er een offerte aan en loggen in op hun eigen omgeving. Zo heeft KDS een strak merk, drukwerk in dezelfde lijn, een heldere website en een portaal voor offertes en klanten.",
            en: "We also built a quote and customer portal. Customers request quotes there and log in to their own environment. KDS now has a sharp brand, print in the same style, a clear website and a portal for quotes and customers.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Precisie zit niet alleen in staal. Ook in typografie.", en: "Precision isn't only in steel. It's in typography too." },
    ],
  },
  "buitenstate-tools": {
    intro: {
      nl: "Een verkoper wil weten of er vraag is naar zijn woning. Een koper zoekt iets dat zich niet in een paar filters laat vangen. Voor Buitenstate bouwden we tools die ze allebei verder helpen.",
      en: "A seller wants to know if there is demand for their home. A buyer is looking for something a few filters can't capture. For Buitenstate we built tools that help both of them along.",
    },
    chapters: [
      {
        title: { nl: "Twee kanten van de markt.", en: "Two sides of the market." },
        body: [
          {
            nl: "Buitenstate is het platform voor landelijk wonen, met aanbod van een selectie NVM-makelaars. Verkopers willen weten of er belangstelling is voor hun woning. Kopers zoeken vaak iets heel specifieks, dat zich slecht laat vangen in een rij vinkjes.",
            en: "Buitenstate is the platform for rural living, with listings from a select group of NVM estate agents. Sellers want to know if there is interest in their home. Buyers are often after something very specific, which a row of checkboxes struggles to capture.",
          },
        ],
      },
      {
        title: { nl: "Inzicht voor verkopers.", en: "Insight for sellers." },
        body: [
          {
            nl: "Met 'Zoekers voor mijn woning' ziet een verkoper hoeveel actieve zoekers er in zijn regio zijn. Daarna vraagt hij meteen een gratis waardebepaling aan bij een Buitenstate-makelaar. Zo werkt de tool als leadfunnel voor verkopers van landelijke woningen.",
            en: "With 'Zoekers voor mijn woning' a seller sees how many active searchers there are in their region. They can then request a free valuation from a Buitenstate agent right away. That makes the tool a lead funnel for sellers of rural homes.",
          },
        ],
      },
      {
        title: { nl: "Swipen naar je plek.", en: "Swipe to your place." },
        body: [
          {
            nl: "Bij Woning Swipe vertel je in je eigen woorden wat je zoekt. AI vertaalt die vrije zoekvraag naar passende woningen, waar je doorheen swipet. Dat voelt meer als bladeren dan als een formulier invullen.",
            en: "With Woning Swipe you describe in your own words what you are looking for. AI turns that free-text request into matching homes for you to swipe through. It feels more like browsing than filling in a form.",
          },
          {
            nl: "Het AI-zoekprofiel houdt het aanbod daarna voor je in de gaten. Komt er iets passends langs, dan krijg je meteen een melding, met een matchscore per woning.",
            en: "After that, the AI search profile keeps an eye on the listings for you. When something suitable comes along you get a notification straight away, with a match score for each home.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goede zoekvraag past niet in een filter.", en: "A good search doesn't fit in a filter." },
      { nl: "Laat AI het zoekwerk doen. De keuze blijft aan jou.", en: "Let AI do the searching. The choice stays yours." },
    ],
  },
  "zuyver-jeeps": {
    intro: {
      nl: "Handgebouwde custom Jeeps uit Nederland, op weg naar Noord-Amerika. Voor ZUYVER moest de eerste indruk meteen raak zijn.",
      en: "Hand-built custom Jeeps from the Netherlands, heading for North America. For ZUYVER, the first impression had to land straight away.",
    },
    chapters: [
      {
        title: { nl: "Een nieuw merk, een kritisch publiek.", en: "A new brand, a critical crowd." },
        body: [
          {
            nl: "ZUYVER brengt de custom Jeeps die het team van BRUTE met de hand bouwt naar de Noord-Amerikaanse markt. Een nieuw merk in een markt vol liefhebbers, die precies weten waar ze naar kijken. Dan moet de website vanaf de eerste seconde kloppen.",
            en: "ZUYVER brings the custom Jeeps hand-built by the BRUTE team to the North American market. A new brand in a market full of enthusiasts who know exactly what they're looking at. So the website has to be right from the very first second.",
          },
        ],
      },
      {
        title: { nl: "De auto in de hoofdrol.", en: "The car takes the lead." },
        body: [
          {
            nl: "We ontwierpen en bouwden de website: donker en strak, met de auto's in de hoofdrol en een directe weg naar contact. In aanloop naar de lancering staat er een coming soon-versie live, met de belofte 'Born in Holland'. Zo staat het merk er al, nog voor de officiële start.",
            en: "We designed and built the website: dark and clean, with the cars in the lead role and a direct route to contact. In the run-up to launch, a coming-soon version is live, carrying the promise 'Born in Holland'. That way the brand is already standing before the official start.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Soms zegt een coming soon-pagina meer dan een hele site.", en: "Sometimes a coming-soon page says more than a whole site." },
    ],
  },
  "atl-plus": {
    intro: {
      nl: "Hoe leer je een jonge atleet de juiste afzet, een goede startpositie of een vast pasritme tussen de horden? Met ATL+ zie je het stap voor stap, in heldere video's.",
      en: "How do you teach a young athlete the right take-off, a solid starting position or a steady stride pattern between hurdles? With ATL+ you see it step by step, in clear videos.",
    },
    chapters: [
      {
        title: { nl: "Kennis op één plek.", en: "Expertise in one place." },
        body: [
          {
            nl: "De Atletiekunie wil clubs sterker maken en trainers helpen met goede trainingsmethodieken. Daarvoor is een visuele ontwikkelmethodiek bedacht: per atletiekonderdeel een leerlijn in duidelijke stappen. Die kennis moest op één plek komen, voor iedereen die met atletiektalent werkt.",
            en: "The Atletiekunie, the Dutch athletics federation, wants to strengthen clubs and help coaches with effective training methods. For that, a visual development method was created: a learning pathway in clear steps for each athletics event. That knowledge had to come together in one place, for everyone working with athletics talent.",
          },
        ],
      },
      {
        title: { nl: "Onderzoek voor het ontwerp.", en: "Research before design." },
        body: [
          {
            nl: "We begonnen met UX-onderzoek, inclusief groepssessies. Daarna gaven we ATL+ een eigen logo en huisstijl, in blauw met oranje als accent. Het platform bouwden we in Webflow.",
            en: "We started with UX research, including group sessions. Then we gave ATL+ its own logo and visual identity, in blue with orange as the accent. We built the platform in Webflow.",
          },
        ],
      },
      {
        title: { nl: "Elke stap in beeld.", en: "Every step on screen." },
        body: [
          {
            nl: "Elke leerlijn is opgedeeld in genummerde stappen, van de basis tot wedstrijdtechniek, met bij elke stap een instructievideo. Van de afzet met een staande landing tot de acceleratie naar de eerste horde. Met een gratis account bekijk je alles.",
            en: "Every learning pathway is split into numbered steps, from the basics to competition technique, with an instruction video for each step. From the take-off with a standing landing to the acceleration towards the first hurdle. A free account gives you access to everything.",
          },
          {
            nl: "De instructievideo's namen we zelf op en monteerden we zelf. Ook het beheer van de aanmeldomgeving en de website ligt bij ons.",
            en: "We recorded and edited the instruction videos ourselves. We also manage the sign-up environment and the website.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Techniek leer je door te kijken. Dus maakten we het kijken makkelijk.", en: "You learn technique by watching. So we made watching easy." },
    ],
  },
  "steddion": {
    intro: {
      nl: "Het stroomnet staat onder druk, en voor veel bedrijven is energie geen vanzelfsprekendheid meer. Steddion helpt ze de regie terug te pakken, en wij hielpen Steddion dat helder te vertellen.",
      en: "The grid is under pressure, and for many businesses energy is no longer a given. Steddion helps them take back control, and we helped Steddion tell that story clearly.",
    },
    chapters: [
      {
        title: { nl: "Een technisch verhaal, rustig verteld.", en: "A technical story, calmly told." },
        body: [
          {
            nl: "Steddion helpt vastgoedontwikkelaars, beheerders, huurders, beleggers en bouwers met hun energie. Van analyse en advies tot opwek, batterijopslag, laadinfrastructuur en beheer. Dat is veel, en het moest helder en betrouwbaar overkomen.",
            en: "Steddion helps property developers, managers, tenants, investors and builders with their energy. From analysis and advice to generation, battery storage, charging infrastructure and management. That is a lot, and it had to come across as clear and reliable.",
          },
        ],
      },
      {
        title: { nl: "Elke doelgroep een eigen ingang.", en: "A way in for every audience." },
        body: [
          {
            nl: "We zetten het merk Steddion neer en ontwierpen de website in Webflow, in diep paars met geel als accent. De oplossingen en de doelgroepen hebben elk een eigen, overzichtelijke plek. Zo vindt een beheerder net zo snel zijn antwoord als een belegger.",
            en: "We established the Steddion brand and designed the website in Webflow, in deep purple with yellow as the accent. The solutions and the audiences each have their own clear place. A property manager finds their answer as quickly as an investor does.",
          },
        ],
      },
      {
        title: { nl: "Kennis die bijblijft.", en: "Knowledge that keeps up." },
        body: [
          {
            nl: "Voor de kennisbank Energy Insights bouwden we een scraper die realtime thema's en marktontwikkelingen ophaalt. Zo blijft de kennisbank gevoed met wat er in de markt speelt. Daarnaast maakten we landingspagina's en video's.",
            en: "For the Energy Insights knowledge base we built a scraper that collects themes and market developments in real time. That keeps the knowledge base fed with what is happening in the market. We also made landing pages and videos.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een rustige website brengt orde in een drukke markt.", en: "A calm website brings order to a busy market." },
    ],
  },
  "steddion-tools": {
    intro: {
      nl: "Zonnepanelen, een batterij, laadpunten of een energiemanagementsysteem? Met twee online tools van Steddion verken je zelf wat bij jouw pand past, nog voor het eerste gesprek.",
      en: "Solar panels, a battery, charging points or an energy management system? With two online tools from Steddion you explore what suits your building yourself, before the first conversation.",
    },
    chapters: [
      {
        title: { nl: "Zelf verkennen.", en: "Explore it yourself." },
        body: [
          {
            nl: "Bedrijven met vastgoed staan voor de vraag wat ze met energie moeten, en welke leverancier daarbij past. Steddion wilde die eerste verkenning online mogelijk maken. En de aanvragen die daaruit komen netjes opvolgen.",
            en: "Businesses with property face the question of what to do about energy, and which supplier fits. Steddion wanted to make that first exploration possible online. And to follow up properly on the requests it brings in.",
          },
        ],
      },
      {
        title: { nl: "Je pand op het scherm.", en: "Your building on screen." },
        body: [
          {
            nl: "In de EPC Energy Property Configurator vul je je pand en je verbruik in. Je bekijkt simulaties en je nieuwe energiebehoefte, en ziet welke oplossing Steddion voorstelt. Aan het eind staat alles in een samenvatting bij elkaar.",
            en: "In the EPC Energy Property Configurator you enter your building and your consumption. You view simulations and your new energy demand, and see which solution Steddion proposes. At the end, everything comes together in a summary.",
          },
          {
            nl: "Met de EMS-vergelijker vind je leveranciers van energiemanagementsystemen die bij jouw situatie passen. Een paar vragen, en je ziet welke opties er zijn.",
            en: "The EMS comparison tool helps you find energy management system suppliers that suit your situation. A few questions, and you see which options there are.",
          },
        ],
      },
      {
        title: { nl: "Recht in HubSpot.", en: "Straight into HubSpot." },
        body: [
          {
            nl: "Beide tools zijn ingericht als leadfunnel en gekoppeld aan HubSpot. Aanvragen komen direct in het CRM terecht, zodat het team ze meteen kan opvolgen.",
            en: "Both tools are set up as lead funnels and integrated with HubSpot. Requests land straight in the CRM, so the team can follow up right away.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goede configurator is het eerste adviesgesprek.", en: "A good configurator is the first consultation." },
    ],
  },
  "plenty-planet": {
    intro: {
      nl: "Een parkeerterrein dat stroom opwekt, een dak dat meer doet dan de regen tegenhouden. Plenty Planet helpt organisaties aan hun eigen energie, en dat begint met een heldere eerste stap.",
      en: "A car park that generates power, a roof that does more than keep the rain out. Plenty Planet helps organisations produce their own energy, and that starts with a clear first step.",
    },
    chapters: [
      {
        title: { nl: "Van kostenpost naar infrastructuur.", en: "From cost to infrastructure." },
        body: [
          {
            nl: "Plenty Planet helpt organisaties hun energievoorziening om te bouwen: zonne-overkappingen op parkeerterreinen, zonneparken, zon op dak, batterijopslag en laadinfrastructuur. Natuurpositief, waar het kan. Grote projecten, die om een overzichtelijk begin vragen.",
            en: "Plenty Planet helps organisations rebuild their energy supply: solar car parks, solar parks, rooftop solar, battery storage and charging infrastructure. Nature-positive where possible. Big projects that call for a manageable start.",
          },
        ],
      },
      {
        title: { nl: "Groen, in elk opzicht.", en: "Green, in every sense." },
        body: [
          {
            nl: "We werkten de branding uit en ontwierpen en bouwden de website in Webflow. Oplossingen, diensten en cases hebben elk een eigen plek, zodat een bezoeker snel ziet wat er voor zijn situatie kan. Groen voert de boventoon, met grote beelden van installaties in het landschap.",
            en: "We developed the branding and designed and built the website in Webflow. Solutions, services and cases each have their own place, so visitors quickly see what is possible for their situation. Green sets the tone, with large images of installations in the landscape.",
          },
        ],
      },
      {
        title: { nl: "Van configurator naar CRM.", en: "From configurator to CRM." },
        body: [
          {
            nl: "Met de configurator geeft een bezoeker stap voor stap zijn situatie en wensen door. Via een koppeling gaan die aanvragen direct naar Odoo CRM. Zo ligt bij elk eerste gesprek de juiste informatie al op tafel.",
            en: "With the configurator, visitors share their situation and wishes step by step. Through an integration, those requests go straight into Odoo CRM. So the right information is already on the table at every first conversation.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Grote projecten beginnen met een kleine, duidelijke stap.", en: "Big projects start with a small, clear step." },
    ],
  },
  "electriffy": {
    intro: {
      nl: "Zonne-energie in Namibië, met een plan om die stroom naar Zambia te brengen. Electriffy ontwikkelt projecten met een regeneratief doel, en had een merk nodig dat dat grote verhaal begrijpelijk maakt.",
      en: "Solar power in Namibia, with a plan to bring that electricity to Zambia. Electriffy develops projects with a regenerative purpose, and needed a brand that makes that big story easy to grasp.",
    },
    chapters: [
      {
        title: { nl: "Meer dan megawatts.", en: "More than megawatts." },
        body: [
          {
            nl: "Electriffy ontwikkelt zonne- en opslagprojecten in zuidelijk Afrika. Maar water, natuur en lokaal levensonderhoud horen net zo goed bij het verhaal. Investeerders, overheden, industrie en lokale gemeenschappen moesten dat allemaal snappen.",
            en: "Electriffy develops solar and storage projects in southern Africa. But water, nature and local livelihoods are just as much part of the story. Investors, governments, industry and local communities all had to understand that.",
          },
        ],
      },
      {
        title: { nl: "Een merk dat verder kijkt.", en: "A brand that looks further." },
        body: [
          {
            nl: "We ontwikkelden de branding, met paars als merkkleur en grote beelden van zon en landschap. De website opent met 'Go beyond energy', en dat is precies de belofte. Het gaat om stroom, en om alles wat die stroom mogelijk maakt.",
            en: "We developed the branding, with purple as the brand colour and large images of sun and landscape. The website opens with 'Go beyond energy', and that is exactly the promise. It is about power, and about everything that power makes possible.",
          },
        ],
      },
      {
        title: { nl: "Stap voor stap uitgelegd.", en: "Explained step by step." },
        body: [
          {
            nl: "De site legt uit wat Electriffy doet: zon en batterijopslag, stroomafnamecontracten en projectontwikkeling. Daarna voor wie, in welke regio's en hoe de regeneratieve aanpak samen met YOUR.earth werkt. Zo staat een groot, technisch project helder neer voor iedereen die erbij betrokken is.",
            en: "The site explains what Electriffy does: solar and battery storage, power purchase agreements and project development. Then for whom, in which regions and how the regenerative approach works together with YOUR.earth. That way a large, technical project is clear to everyone involved.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een groot project verdient een eenvoudig verhaal.", en: "A big project deserves a simple story." },
    ],
  },
  "your-earth": {
    intro: {
      nl: "Bedrijven dragen bij, YOUR.earth verdubbelt elke euro en investeert hem in het landschap waar die bedrijven zelf actief zijn. Een nieuw model, dat geloofwaardig moest overkomen.",
      en: "Companies contribute, YOUR.earth doubles every euro and invests it in the landscape where those companies operate. A new model that had to come across as credible.",
    },
    chapters: [
      {
        title: { nl: "Geen sponsoring, maar een model.", en: "Not sponsorship, but a model." },
        body: [
          {
            nl: "YOUR.earth zet het geld als renteloze lening in voor projecten in het landschap: van duintuinen en agroforestry in Nederland tot waterzekerheid in Namibië. Het is geen gift, maar een model met afspraken en metingen. Dat moest je in één bezoek begrijpen.",
            en: "YOUR.earth deploys the money as interest-free loans for projects in the landscape: from dune gardens and agroforestry in the Netherlands to water security in Namibia. It isn't a donation, but a model with agreements and measurements. You had to understand that in a single visit.",
          },
        ],
      },
      {
        title: { nl: "De kaart als verteller.", en: "The map tells the story." },
        body: [
          {
            nl: "We maakten de branding en de website: donkerblauw met fel limoengroen. Een kaart laat de projecten per landschap zien, en terwijl je scrolt, zie je waar het geld terechtkomt.",
            en: "We created the branding and the website: dark blue with bright lime green. A map shows the projects per landscape, and as you scroll, you see where the money goes.",
          },
        ],
      },
      {
        title: { nl: "Gemeten, niet beloofd.", en: "Measured, not promised." },
        body: [
          {
            nl: "De site legt stap voor stap uit hoe het model werkt en hoe resultaten worden gemeten. Zo staan de projecten zelf in de hoofdrol, en wordt een nieuw model voor natuurfinanciering concreet.",
            en: "The site explains step by step how the model works and how results are measured. That puts the projects themselves in the lead role, and makes a new model for financing nature concrete.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Vertrouwen bouw je met uitleg, niet met grote woorden.", en: "Trust is built with explanation, not big words." },
    ],
  },
  "jalo-energy": {
    intro: {
      nl: "Resthout wordt warmte, CO₂ wordt afgevangen en het landschap krijgt er iets voor terug. JALO ontwikkelt in Almelo één fabriek met een hele keten erachter, en dat verhaal moest voor iedereen kloppen.",
      en: "Residual wood becomes heat, CO₂ is captured and the landscape gets something back. In Almelo, JALO is developing one plant with an entire chain behind it, and that story had to add up for everyone.",
    },
    chapters: [
      {
        title: { nl: "Eén fabriek, een hele keten.", en: "One plant, a whole chain." },
        body: [
          {
            nl: "JALO ontwikkelt in Almelo een fabriek die van resthout biopellets en lokale warmte maakt, biogene CO₂ afvangt en bijdraagt aan herstel van het landschap. Investeerders, afnemers, boeren en de regio kijken er elk anders naar. Het verhaal moest voor allemaal kloppen.",
            en: "In Almelo, JALO is developing a plant that turns residual wood into biopellets and local heat, captures biogenic CO₂ and helps restore the landscape. Investors, buyers, farmers and the region each see it differently. The story had to work for all of them.",
          },
        ],
      },
      {
        title: { nl: "Het model in delen.", en: "The model, piece by piece." },
        body: [
          {
            nl: "We gaven JALO een eigen merk en bouwden de website. Die legt het JALO-model in delen uit: Nederpellets, lokale warmte, CO₂-verwijdering en het landschapsprogramma met YOUR.earth. Boeren, investeerders en wie meer wil weten over de techniek vinden elk een eigen pagina.",
            en: "We gave JALO its own brand and built the website. It explains the JALO model piece by piece: Nederpellets, local heat, carbon removal and the landscape programme with YOUR.earth. Farmers, investors and anyone curious about the technology each find a page of their own.",
          },
        ],
      },
      {
        title: { nl: "Ook buiten de website.", en: "Beyond the website." },
        body: [
          {
            nl: "Daarnaast maakten we social content en een webinar. Zo vertellen merk, website, social en webinar samen één helder verhaal over energie, CO₂ en landschap.",
            en: "We also created social content and a webinar. Together, brand, website, social and webinar tell one clear story about energy, CO₂ and landscape.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een ingewikkelde keten vraagt om een simpele volgorde.", en: "A complex chain needs a simple order." },
    ],
  },
  "edgeway-commodities": {
    intro: {
      nl: "Traders, quants en leiders voor de wereldwijde handel in grondstoffen en energie. EdgeWay Commodities vindt ze, als kleine en persoonlijke speler tussen grote namen.",
      en: "Traders, quants and leaders for global commodity and energy markets. EdgeWay Commodities finds them, as a small, personal player among big names.",
    },
    chapters: [
      {
        title: { nl: "Boutique tussen de grote namen.", en: "Boutique among the big names." },
        body: [
          {
            nl: "EdgeWay Commodities zoekt talent voor handelshuizen, hedgefondsen en energiebedrijven. Persoonlijk, met de telefoon als belangrijkste gereedschap en veel kennis van de markt. Het merk moest die boutique-aanpak uitstralen, en de diensten moesten samenkomen in één logisch verhaal.",
            en: "EdgeWay Commodities finds talent for trading houses, hedge funds and energy companies. Personally, with the phone as its main tool and deep knowledge of the market. The brand had to convey that boutique approach, and the services had to come together in one logical story.",
          },
        ],
      },
      {
        title: { nl: "Drie diensten, één lijn.", en: "Three services, one line." },
        body: [
          {
            nl: "Het merk en de Webflow-site ontstonden in één beweging. Diep blauw, een klassieke schreefletter en een pijl die omhoog wijst. De drie diensten, Search, Intelligence en Advisory, krijgen elk een eigen blok.",
            en: "The brand and the Webflow site took shape in one go. Deep blue, a classic serif and an arrow pointing upwards. The three services, Search, Intelligence and Advisory, each get their own block.",
          },
        ],
      },
      {
        title: { nl: "Elke markt een eigen pagina.", en: "Every market its own page." },
        body: [
          {
            nl: "Elke markt, van Power & Renewables tot Metals, heeft een eigen pagina. Zo vindt een bezoeker snel zijn eigen markt terug, en ziet hij meteen dat EdgeWay die markt kent.",
            en: "Every market, from Power & Renewables to Metals, has its own page. Visitors quickly find their own market, and see straight away that EdgeWay knows it.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een klein bureau mag groots ogen, zolang het persoonlijk blijft.", en: "A small firm can look big, as long as it stays personal." },
    ],
  },
  "fairlink": {
    intro: {
      nl: "Wie voor werk de grens over gaat, betaalt soms hoge wervingskosten en weet niet altijd wat zijn rechten zijn. Fairlink maakt werving over de grens eerlijker, en wij gaven dat verhaal een helder merk.",
      en: "People who cross borders for work sometimes pay high recruitment fees and don't always know their rights. Fairlink makes cross-border recruitment fairer, and we gave that story a clear brand.",
    },
    chapters: [
      {
        title: { nl: "Werknemer, werkgever, overheid.", en: "Worker, employer, government." },
        body: [
          {
            nl: "Fairlink werkt aan veiligere en eerlijkere werving van arbeidsmigranten. Werknemers moeten hun rechten kennen, werkgevers willen aantonen dat hun werving eerlijk verloopt en overheden en ngo's willen zien wat er in de keten gebeurt. Een ingewikkeld, internationaal verhaal.",
            en: "Fairlink works towards safer and fairer recruitment of migrant workers. Workers need to know their rights, employers want to prove their recruitment is fair, and governments and NGOs want to see what happens along the chain. A complicated, international story.",
          },
        ],
      },
      {
        title: { nl: "Terug naar de kern.", en: "Back to the core." },
        body: [
          {
            nl: "We brachten dat verhaal terug tot de kern en bouwden er een merk omheen: rustig, betrouwbaar en menselijk. Daarna volgde de website in Webflow.",
            en: "We brought that story back to its core and built a brand around it: calm, trustworthy and human. Then came the website in Webflow.",
          },
          {
            nl: "Op de website heeft elke doelgroep een eigen route. Werknemers lezen over hun rechten en krijgen eenvoudige uitleg, werkgevers zien hoe ze grip houden op werving in andere landen en overheden vinden wat zij nodig hebben.",
            en: "On the website, every audience has its own route. Workers read about their rights and get simple guidance, employers see how to stay in control of recruitment in other countries, and governments find what they need.",
          },
        ],
      },
      {
        title: { nl: "Ook op papier.", en: "On paper too." },
        body: [
          {
            nl: "Daarnaast ontwierpen we ansichtkaarten in dezelfde stijl. Zo vertelt Fairlink zijn verhaal ook buiten het scherm, op iets dat je kunt vasthouden en doorgeven.",
            en: "We also designed postcards in the same style. That way Fairlink tells its story off-screen too, on something you can hold and pass on.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Hoe zwaarder het onderwerp, hoe helderder de taal.", en: "The heavier the subject, the clearer the language." },
    ],
  },
  "alpacafarm-vorstenbosch": {
    intro: {
      nl: "Wandelen met alpaca's, high tea tussen de dieren, pizza op de farm. Bij Alpacafarm Vorstenbosch, een paar kilometer van ons kantoor, is genoeg te doen. Online moest dat net zo gezellig voelen.",
      en: "Walking with alpacas, high tea among the animals, pizza on the farm. Alpacafarm Vorstenbosch, a few kilometres from our office, has plenty going on. Online, it had to feel just as welcoming.",
    },
    chapters: [
      {
        title: { nl: "Eerst de openingstijden.", en: "Opening hours first." },
        body: [
          {
            nl: "Bezoekers willen vooral snel weten wanneer ze langs kunnen komen en wat er te doen is. Dus bouwden we de website met een openingstijdenwidget die meteen laat zien wanneer de farm open is. Activiteiten, de Alpacabar en overnachten hebben elk een eigen plek.",
            en: "Visitors mostly want to know quickly when they can drop by and what there is to do. So we built the website with an opening-hours widget that shows straight away when the farm is open. Activities, the Alpacabar and overnight stays each have their own place.",
          },
        ],
      },
      {
        title: { nl: "De alpaca's als sterren.", en: "The alpacas as the stars." },
        body: [
          {
            nl: "We verzorgden de complete social media: de hele feed, reels en alles wat erbij hoort. Daarin spelen de alpaca's vanzelf de hoofdrol. Een goed moment met een nieuwsgierige alpaca zegt meer dan een lange tekst.",
            en: "We took care of the complete social media: the whole feed, reels and everything around it. The alpacas naturally play the lead role. A good moment with a curious alpaca says more than a long caption.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Soms is de beste content gewoon een nieuwsgierige alpaca.", en: "Sometimes the best content is simply a curious alpaca." },
    ],
  },
  "hela": {
    intro: {
      nl: "Satésaus, ketchup, dressings en kaassaus. Hela maakt eten lekkerder, en wij zorgden dat je dat online al bijna proeft.",
      en: "Satay sauce, ketchup, dressings and cheese sauce. Hela makes food taste better, and we made sure you can almost taste it online.",
    },
    chapters: [
      {
        title: { nl: "Smakelijk, ook op een scherm.", en: "Tasty, even on a screen." },
        body: [
          {
            nl: "Hela is de smaakmaker met sauzen, ketchups en dressings, voor thuis en voor de foodprofessional. Het assortiment moest online net zo smakelijk ogen als op tafel. En bestellen moest makkelijk zijn.",
            en: "Hela is the flavour maker behind sauces, ketchups and dressings, for home cooks and food professionals. The range had to look as tasty online as it does on the table. And ordering had to be easy.",
          },
        ],
      },
      {
        title: { nl: "Een webshop vol recepten.", en: "A web shop full of recipes." },
        body: [
          {
            nl: "We bouwden een website met webshop in WordPress en WooCommerce, in het Nederlands, Engels en Frans. Naast de shop vind je recepten die laten zien wat een flinke scheut Hela met een simpele maaltijd doet. Foodprofessionals hebben een eigen ingang.",
            en: "We built a website with a web shop in WordPress and WooCommerce, in Dutch, English and French. Alongside the shop you'll find recipes that show what a generous splash of Hela does for a simple meal. Food professionals have their own way in.",
          },
        ],
      },
      {
        title: { nl: "Elke fles op zijn best.", en: "Every bottle at its best." },
        body: [
          {
            nl: "Voor het assortiment maakten we productshots, geanimeerde packshots en 3D-renders. Zo staat elke fles strak en herkenbaar in beeld, van de klassieke ketchup tot de nieuwste smaak.",
            en: "For the range we created product shots, animated packshots and 3D renders. Every bottle is shown sharp and recognisable, from the classic ketchup to the latest flavour.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Goede productbeelden maken trek.", en: "Good product shots make you hungry." },
    ],
  },
  "pine-street-school": {
    intro: {
      nl: "Van Nistelrode naar Lower Manhattan. Voor twee scholen in New York maakten we websites waarop ouders snel vinden wat ze zoeken.",
      en: "From Nistelrode to Lower Manhattan. For two schools in New York we created websites where parents quickly find what they need.",
    },
    chapters: [
      {
        title: { nl: "Twee scholen, veel vragen.", en: "Two schools, many questions." },
        body: [
          {
            nl: "Pine Street School is een meertalige IB World School in Lower Manhattan, van de allerkleinsten tot en met grade 8. Battery Park Montessori, aan de Hudson, is een drietalige Montessorischool voor kinderen van 1 tot 5 jaar. Ouders willen alles weten over het onderwijs, toelating, lesgeld en het schoolleven.",
            en: "Pine Street School is a multilingual IB World School in Lower Manhattan, from the very youngest through grade 8. Battery Park Montessori, on the Hudson, is a trilingual Montessori school for children aged 1 to 5. Parents want to know everything about the education, admissions, tuition and school life.",
          },
        ],
      },
      {
        title: { nl: "Eén familie, twee gezichten.", en: "One family, two faces." },
        body: [
          {
            nl: "We werkten de branding van beide scholen uit en bouwden de websites in Webflow, op een gedeelde basis. Zo zijn ze familie van elkaar en heeft elke school toch een eigen uitstraling. Pine Street School kreeg diep groen, een klassieke letter en warme foto's uit de klas.",
            en: "We developed the branding for both schools and built the websites in Webflow, on a shared foundation. That makes them family, while each school keeps its own look. Pine Street School got deep green, a classic typeface and warm photos from the classroom.",
          },
        ],
      },
      {
        title: { nl: "Een menu dat meedenkt.", en: "A menu that thinks ahead." },
        body: [
          {
            nl: "De navigatie doet meer dan een gewoon menu. Je zoekt direct, en snelle links brengen je in een paar klikken bij toelating, rondleidingen of het lesprogramma. Bij elk onderdeel staat een korte uitleg, zodat je weet waar je terechtkomt.",
            en: "The navigation does more than an ordinary menu. You can search right away, and quick links take you to admissions, tours or the curriculum in a few clicks. Every section comes with a short description, so you know where you'll land.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goed menu beantwoordt de vraag voordat je hem stelt.", en: "A good menu answers the question before you ask it." },
    ],
  },
  "icewall": {
    intro: {
      nl: "Een eindige kaart vol fragmenten, en wie er vroeg bij is, claimt er een. Icewall had een sterk idee. Wij gaven het een concept, een merk en een website.",
      en: "A finite map full of fragments, and those who arrive early claim one. Icewall had a strong idea. We gave it a concept, a brand and a website.",
    },
    chapters: [
      {
        title: { nl: "Eerst het concept.", en: "Concept first." },
        body: [
          {
            nl: "Icewall zocht een merk met een duidelijk concept: waar sta je voor, voor wie ben je er en hoe ziet dat eruit? We werkten eerst de merkstrategie en het concept uit. Pas daarna begon het ontwerp.",
            en: "Icewall wanted a brand with a clear concept: what do you stand for, who are you for and what does that look like? We worked out the brand strategy and the concept first. Only then did the design begin.",
          },
        ],
      },
      {
        title: { nl: "Een wereld van fragmenten.", en: "A world of fragments." },
        body: [
          {
            nl: "Daarna ontwierpen we de branding en vertaalden we alles naar een website. Donker, met een gloeiende aarde en een kaart die je zelf verkent. In drie stappen zie je hoe het werkt: ontdekken, een fragment claimen en een spoor achterlaten voor wie na je komt.",
            en: "Then we designed the branding and translated it all into a website. Dark, with a glowing earth and a map you explore yourself. Three steps show how it works: discover, claim a fragment and leave a mark for those who come after you.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een sterk concept maakt elke volgende keuze makkelijker.", en: "A strong concept makes every next decision easier." },
    ],
  },
  "calvin-vlaanderen": {
    intro: {
      nl: "Calvin Vlaanderen rijdt in het MXGP, het wereldkampioenschap motorcross. Fans en partners willen weten waar hij rijdt en hoe het ging, en dat verdiende een website op volle snelheid.",
      en: "Calvin Vlaanderen races in MXGP, the motocross world championship. Fans and partners want to know where he's racing and how it went, and that deserved a website at full throttle.",
    },
    chapters: [
      {
        title: { nl: "Initialen en een racenummer.", en: "Initials and a race number." },
        body: [
          {
            nl: "De branding draait om CV10: Calvins initialen en zijn racenummer. Rood, wit en stoer, zoals een racer hoort te zijn. Een merk dat je in één oogopslag herkent, ook in volle vaart.",
            en: "The branding revolves around CV10: Calvin's initials and his race number. Red, white and bold, the way a racer should be. A brand you recognise at a glance, even at full speed.",
          },
        ],
      },
      {
        title: { nl: "Van kalender tot uitslag.", en: "From calendar to results." },
        body: [
          {
            nl: "De website bouwden we in Webflow, met nieuws, een racekalender, een over-pagina, de partners en een link naar de shop. Bij elke wedstrijd zie je waar Calvin eindigde. En bovenaan staat waar hij de volgende keer aan de start staat.",
            en: "We built the website in Webflow, with news, a race calendar, an about page, the partners and a link to the shop. For every race you see where Calvin finished. And at the top you see where he lines up next.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Snel herkenbaar, ook in een stofwolk.", en: "Instantly recognisable, even in a cloud of dust." },
    ],
  },
  "silvr": {
    intro: {
      nl: "Je omzet is er, je geld nog niet. Bij Silvr verkoop je je bedrijfsauto, huur je hem direct terug en rijd je gewoon door. Een nieuw concept, met een merk dat we vanaf de naam opbouwden.",
      en: "The revenue is there, the cash isn't yet. With Silvr you sell your company vehicle, lease it straight back and keep driving. A new concept, with a brand we built from the name up.",
    },
    chapters: [
      {
        title: { nl: "Geen geldprobleem, een timingprobleem.", en: "A timing problem, not money." },
        body: [
          {
            nl: "Soms wordt een factuur pas over weken betaald, terwijl het geld nu nodig is. Silvr lost dat op zonder lening en zonder BKR-registratie. Een nieuw concept, dus het merk moest meteen duidelijk maken hoe het werkt.",
            en: "Sometimes an invoice won't be paid for weeks, while the money is needed now. Silvr solves that without a loan and without a credit registration. A new concept, so the brand had to make clear straight away how it works.",
          },
        ],
      },
      {
        title: { nl: "Verzilveren als rode draad.", en: "Cashing in, as a thread." },
        body: [
          {
            nl: "We begonnen bij de naam: Silvr, met verzilveren als rode draad in alles wat het merk zegt. Daarna volgden de logo's en een brandbook. Van de kop op de homepage tot de eerste vraag in de aanvraag: je verzilvert je voertuig.",
            en: "We started with the name: Silvr, built on 'verzilveren', the Dutch for cashing in, which runs through everything the brand says. Then came the logos and a brandbook. From the homepage headline to the first question of the application: you cash in your vehicle.",
          },
        ],
      },
      {
        title: { nl: "Vijf stappen naar Teamleader.", en: "Five steps to Teamleader." },
        body: [
          {
            nl: "De website bouwden we in Webflow. De aanvraagflow in vijf stappen begint bij de vraag welk voertuig je wilt verzilveren: een auto, bestelwagen, vrachtwagen of camper. Elke aanvraag loopt direct door naar Teamleader, zodat het team meteen aan de slag kan.",
            en: "We built the website in Webflow. The five-step application starts by asking which vehicle you want to cash in: a car, van, truck or camper. Every application goes straight into Teamleader, so the team can get to work right away.",
          },
          {
            nl: "Een explainervideo legt het concept uit, voor wie liever kijkt dan leest. Zo snap je een nieuw idee in één keer.",
            en: "An explainer video covers the concept, for those who'd rather watch than read. It turns a new idea into something you understand in one go.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goede naam legt het concept al half uit.", en: "A good name already explains half the concept." },
    ],
  },
  "bus-whisky": {
    intro: {
      nl: "Whisky van gerst van de eigen boerderij, gestookt in Loosbroek, op een steenworp van ons kantoor. Achter elke fles van BUS Whisky zit een verhaal, en dat verdiende een eigen serie.",
      en: "Whisky made from barley grown on the distillery's own farm, distilled in Loosbroek, a stone's throw from our office. Every bottle of BUS Whisky has a story behind it, and that story deserved a series of its own.",
    },
    chapters: [
      {
        title: { nl: "Een verhaal in elke fles.", en: "A story in every bottle." },
        body: [
          {
            nl: "BUS Whisky maakt Nederlandse whisky van gerst van de eigen boerderij, in een stokerij die op hernieuwbare energie draait. Van het veld tot de fles gebeurt alles dichtbij. Dat verhaal wilden ze vaker en beter vertellen.",
            en: "BUS Whisky makes Dutch whisky from barley grown on its own farm, in a distillery that runs on renewable energy. From field to bottle, everything happens close to home. They wanted to tell that story more often, and better.",
          },
        ],
      },
      {
        title: { nl: "Van stokerij naar YouTube.", en: "From distillery to YouTube." },
        body: [
          {
            nl: "We maakten een YouTube-serie voor BUS Whisky en zetten content marketing in om die verhalen bij de juiste mensen te krijgen. Zo vertelt BUS Whisky zijn verhaal ook buiten de stokerij, aan iedereen die wil weten waar zijn whisky vandaan komt.",
            en: "We made a YouTube series for BUS Whisky and used content marketing to get those stories to the right people. That way BUS Whisky tells its story beyond the distillery, to anyone who wants to know where their whisky comes from.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goed verhaal rijpt, net als whisky.", en: "A good story matures, just like whisky." },
    ],
  },
  "the-sandt": {
    intro: {
      nl: "Investeerders kijken scherp naar risico, rendement en transparantie. The Sandt Investment Engineers vroeg om een verhaal dat overal klopt: op de website, in de brochure en in de antwoorden van AI-zoekmachines.",
      en: "Investors look closely at risk, return and transparency. The Sandt Investment Engineers needed a story that holds up everywhere: on the website, in the brochure and in the answers of AI search engines.",
    },
    chapters: [
      {
        title: { nl: "Elk woord onderbouwd.", en: "Every word backed up." },
        body: [
          {
            nl: "The Sandt ontwerpt investeringsoplossingen in vastgoed, met vastgoedobligaties onder Nederlandse regie. Investeerders willen precies weten waar hun geld naartoe gaat. Het verhaal moest dus helder en goed onderbouwd zijn.",
            en: "The Sandt designs property investment solutions, with real estate bonds under Dutch management. Investors want to know exactly where their money goes. So the story had to be clear and well substantiated.",
          },
        ],
      },
      {
        title: { nl: "Per investeerder een eigen weg.", en: "A path for every investor." },
        body: [
          {
            nl: "De website in Webflow zet de investeringsmogelijkheden per type investeerder op een rij, van particulier tot family office, en toont het trackrecord. Donkerblauw en goud, met de gebouwen zelf groot in beeld.",
            en: "The Webflow website lays out the investment options per type of investor, from private individual to family office, and shows the track record. Dark blue and gold, with the buildings themselves shown large.",
          },
          {
            nl: "Op de landingspagina Onderbouwd Investeren vraag je de brochure aan in een paar velden. Per mail krijg je een persoonlijke toegangslink, zodat de brochure precies bij de juiste persoon terechtkomt.",
            en: "On the Onderbouwd Investeren landing page you request the brochure in a few fields. You then receive a personal access link by email, so the brochure reaches exactly the right person.",
          },
        ],
      },
      {
        title: { nl: "Klaar voor AI-zoekmachines.", en: "Ready for AI search." },
        body: [
          {
            nl: "We bouwden de content zo op dat AI-zoekmachines The Sandt als bron kunnen noemen. Duidelijke vragen, duidelijke antwoorden en een structuur die machines net zo goed lezen als mensen. Dat is AEO en GEO in de praktijk.",
            en: "We structured the content so AI search engines can cite The Sandt as a source. Clear questions, clear answers and a structure machines read as easily as people do. That is AEO and GEO in practice.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Schrijf voor mensen, structureer voor machines.", en: "Write for people, structure for machines." },
    ],
  },
  "aigora": {
    intro: {
      nl: "Aigora levert data uit de praktijk aan teams in life sciences en medtech. Een vak vol precisie, en dat mocht je ook aan het merk zien.",
      en: "Aigora supplies real-world data to life sciences and medtech teams. A field built on precision, and the brand had to show it.",
    },
    chapters: [
      {
        title: { nl: "Een merk dat staat.", en: "A brand that holds." },
        body: [
          {
            nl: "Aigora wilde een merk dat staat, en dat iedereen op dezelfde manier toepast. We ontwikkelden de branding en legden alles vast in een brandbook. Zo weet iedereen hoe het merk eruitziet en hoe je het gebruikt.",
            en: "Aigora wanted a brand that holds, and that everyone applies the same way. We developed the branding and captured everything in a brandbook. Now everyone knows what the brand looks like and how to use it.",
          },
        ],
      },
      {
        title: { nl: "Helder voor twee werelden.", en: "Clear for two worlds." },
        body: [
          {
            nl: "Daarna volgde de website, licht en rustig, in dezelfde lijn als het merk. Life sciences en medtech hebben elk een eigen ingang. Een aanvraagformulier vraagt meteen naar je datawensen.",
            en: "Then came the website, light and calm, in the same style as the brand. Life sciences and medtech each have their own way in. An enquiry form asks about your data requirements right away.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Richtlijnen zijn geen keurslijf. Ze zorgen dat het merk overal hetzelfde zegt.", en: "Guidelines aren't a straitjacket. They make the brand say the same thing everywhere." },
    ],
  },
  "digital-newsgroup": {
    intro: {
      nl: "Backlinks en PR-publicaties bestellen, net zo makkelijk als een paar schoenen. Voor Digital Newsgroup bouwden we de shop die dat mogelijk maakt.",
      en: "Ordering backlinks and PR placements as easily as a pair of shoes. For Digital Newsgroup we built the shop that makes it possible.",
    },
    chapters: [
      {
        title: { nl: "Een database vol publicaties.", en: "A database full of publishers." },
        body: [
          {
            nl: "Digital Newsgroup (DNG) is een internationaal linkbuildingbureau met eigen software en een grote database met blogs en nieuwssites. Klanten moesten dat aanbod makkelijk kunnen doorzoeken. En ze moesten direct kunnen bestellen.",
            en: "Digital Newsgroup (DNG) is an international link-building agency with its own software and a large database of blogs and news sites. Customers needed to search that offer easily. And they needed to order straight away.",
          },
        ],
      },
      {
        title: { nl: "Fris, met een groene vonk.", en: "Fresh, with a green spark." },
        body: [
          {
            nl: "We gaven het merk een frisse uitstraling: donker, met fel limoengroen als accent. Die stijl loopt door in de shop, die we bouwden in WordPress met WooCommerce.",
            en: "We gave the brand a fresh look: dark, with bright lime green as the accent. That style carries through to the shop, which we built in WordPress with WooCommerce.",
          },
        ],
      },
      {
        title: { nl: "Kiezen zoals in een webshop.", en: "Choose like in any web shop." },
        body: [
          {
            nl: "In de shop filter je op categorie en zie je per site de belangrijkste cijfers, zoals domain authority en organisch verkeer, met de prijs ernaast. Je bestelt meteen, en de contentdetails vul je later in. Zo kies je backlinks zoals je dat van elke webshop gewend bent.",
            en: "In the shop you filter by category and see the key figures for each site, such as domain authority and organic traffic, with the price alongside. You order right away and fill in the content details later. Choosing backlinks works just like any web shop you're used to.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een ingewikkeld aanbod wordt simpel als je het als een winkel inricht.", en: "A complicated offer becomes simple when you set it up like a shop." },
    ],
  },
  "martello": {
    intro: {
      nl: "Martello adviseert besturen, investeerders en directies waar strategie, kapitaal, klimaat en reputatie samenkomen. Zo'n bureau verdient een merk en een website die één verhaal vertellen.",
      en: "Martello advises boards, investors and leadership teams where strategy, capital, climate and reputation meet. A firm like that deserves a brand and a website that tell one story.",
    },
    chapters: [
      {
        title: { nl: "Eén team, vijf vakgebieden.", en: "One team, five disciplines." },
        body: [
          {
            nl: "Martello werkt met één senior team op elke opdracht, zonder laag ertussen. Van strategie en communicatie tot kapitaal, klimaat en training. Martello zocht een herkenbaar merk en een website die laat zien waar het bedrijf voor staat.",
            en: "Martello puts one senior team on every assignment, with no layer in between. From strategy and communications to capital, climate and training. Martello wanted a recognisable brand and a website that shows what the firm stands for.",
          },
        ],
      },
      {
        title: { nl: "Verleden, heden, toekomst.", en: "Past, present, future." },
        body: [
          {
            nl: "We ontwikkelden de branding en maakten de website in dezelfde lijn: diep groen, een rustige letter en een cursief accent. De opening zet de toon met drie korte zinnen over verleden, heden en toekomst. Daaronder staan de vijf vakgebieden overzichtelijk naast elkaar.",
            en: "We developed the branding and created the website in the same style: deep green, a calm typeface and an italic accent. The opening sets the tone with three short lines about past, present and future. Below it, the five disciplines sit clearly side by side.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een senior merk hoeft niet hard te praten.", en: "A senior brand doesn't need to raise its voice." },
    ],
  },
  "huurfix": {
    intro: {
      nl: "Betaal je te veel huur, dan wil je dat weten. Maar gedoe met je verhuurder, daar zit niemand op te wachten. Huurfix regelt het voor je, en wij zorgden dat dat aanbod simpel en betrouwbaar overkomt.",
      en: "If you're paying too much rent, you want to know. But nobody wants a fight with their landlord. Huurfix sorts it out for you, and we made sure that offer comes across as simple and trustworthy.",
    },
    chapters: [
      {
        title: { nl: "Pas betalen als het lukt.", en: "Pay only when it works." },
        body: [
          {
            nl: "Bij Huurfix neemt een jurist het contact met je verhuurder en de procedure bij de Huurcommissie over. Je betaalt pas achteraf, op no cure no pay-basis. Een sterk aanbod, maar alleen als mensen het ook geloven.",
            en: "At Huurfix, a legal specialist takes over contact with your landlord and the procedure at the Rent Tribunal. You only pay afterwards, on a no cure, no pay basis. A strong offer, but only if people believe it.",
          },
        ],
      },
      {
        title: { nl: "Een gezicht en een check.", en: "A face and a check." },
        body: [
          {
            nl: "Na de branding volgde een tweetalige website in Webflow, in het Nederlands en Engels. Licht en warm, met geel als accent en de jurist zelf in beeld, zodat je weet met wie je te maken hebt.",
            en: "After the branding came a bilingual website in Webflow, in Dutch and English. Light and warm, with yellow as the accent and the legal specialist himself in view, so you know who you're dealing with.",
          },
          {
            nl: "Alles op de site leidt naar de gratis huurprijscheck. Je vult je postcode en huisnummer in, en de aanvraag loopt verder.",
            en: "Everything on the site leads to the free rent check. You enter your postcode and house number, and the application takes it from there.",
          },
        ],
      },
      {
        title: { nl: "Zelf verder, in dezelfde stijl.", en: "Carrying on, in the same style." },
        body: [
          {
            nl: "Daarnaast maakten we templates voor social media en een e-book. Zo kan Huurfix zelf verder met content, in dezelfde stijl als de website.",
            en: "We also made social media templates and an e-book. That way Huurfix can keep creating content itself, in the same style as the website.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een sterk aanbod werkt pas als je het in één keer snapt.", en: "A strong offer only works if you get it in one go." },
    ],
  },
  "cryptocointalk": {
    intro: {
      nl: "Een realistische kijk op crypto, voor beginners en gevorderde traders. Bij CryptoCoinTalk moest de manier waarop abonnementen werkten op de schop, en het platform kon wel een frisse start gebruiken.",
      en: "A realistic take on crypto, for beginners and experienced traders. At CryptoCoinTalk, the way subscriptions worked needed an overhaul, and the platform could use a fresh start.",
    },
    chapters: [
      {
        title: { nl: "Toe aan een frisse start.", en: "Ready for a fresh start." },
        body: [
          {
            nl: "CryptoCoinTalk helpt traders en investeerders met cursussen, een community en educatie. Het abonnementsmodel was niet meer helder genoeg. En ook het platform, de website en het merk konden een opfrisbeurt gebruiken.",
            en: "CryptoCoinTalk helps traders and investors with courses, a community and education. The subscription model was no longer clear enough. And the platform, the website and the brand could all use a refresh.",
          },
        ],
      },
      {
        title: { nl: "Abonnementen die kloppen.", en: "Subscriptions that make sense." },
        body: [
          {
            nl: "We richtten de abonnementen opnieuw in en gaven het platform een UI/UX-redesign. Van de gratis cursus tot de trade- en investeringscursus: je ziet beter wat je krijgt en waar je bent.",
            en: "We restructured the subscriptions and gave the platform a UI/UX redesign. From the free course to the trading and investing courses, you see more clearly what you get and where you are.",
          },
        ],
      },
      {
        title: { nl: "Opgefrist, van merk tot site.", en: "Refreshed, from brand to site." },
        body: [
          {
            nl: "We fristen de branding op en bouwden een nieuwe website in dezelfde lijn: wit, donkerblauw en groen, met de cursussen helder op een rij. Zo vormen platform, merk en website weer één geheel.",
            en: "We refreshed the branding and built a new website in the same style: white, dark blue and green, with the courses clearly laid out. Platform, brand and website form one whole again.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een helder abonnement is ook goede UX.", en: "A clear subscription is good UX too." },
    ],
  },
  "solidlayer": {
    intro: {
      nl: "Data die de Europese Unie nooit verlaat, juridisch en fysiek. SolidLayer bouwt aan soevereine infrastructuur, en had een merk nodig dat vanaf dag één solide overkomt.",
      en: "Data that never leaves the European Union, legally or physically. SolidLayer builds sovereign infrastructure, and needed a brand that feels solid from day one.",
    },
    chapters: [
      {
        title: { nl: "Soeverein van opzet.", en: "Sovereign by structure." },
        body: [
          {
            nl: "SolidLayer bouwt aan veilige, soevereine infrastructuur, zoals een CDN dat volledig binnen de EU blijft. Het motto is 'Sovereign by structure'. Een nieuw merk in een technische markt, dat meteen vertrouwen moest wekken.",
            en: "SolidLayer builds secure, sovereign infrastructure, such as a CDN that stays entirely within the EU. Its motto is 'Sovereign by structure'. A new brand in a technical market that had to earn trust straight away.",
          },
        ],
      },
      {
        title: { nl: "Europa op de kaart.", en: "Europe on the map." },
        body: [
          {
            nl: "We ontwikkelden de branding en legden die vast in een compact brandbook. Daarna ontwierpen en bouwden we de website: donkerblauw, met een felgroene kaart van Europa waarover het netwerk oplicht. Zo zie je in één beeld waar je data blijft.",
            en: "We developed the branding and captured it in a compact brandbook. Then we designed and built the website: dark blue, with a bright green map of Europe on which the network lights up. One image shows you where your data stays.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een stevig merk begint bij een eenvoudige structuur.", en: "A solid brand starts with a simple structure." },
    ],
  },
  "agroforestry-wur": {
    intro: {
      nl: "Bomen, struiken en landbouw die samen een veerkrachtiger systeem vormen. Wageningen University & Research onderzoekt het al jaren, en al die kennis verdiende één plek.",
      en: "Trees, shrubs and farming working together as a more resilient system. Wageningen University & Research has studied it for years, and all that knowledge deserved one home.",
    },
    chapters: [
      {
        title: { nl: "Van niche naar praktijk.", en: "From niche to practice." },
        body: [
          {
            nl: "WUR onderzoekt samen met partners hoe agroforestry in de praktijk werkt. In het publiek-private project 'Agroforestry in diverse vormen van niche naar gevestigde praktijk' komt al dat onderzoek samen. Die kennis moest goed vindbaar worden, voor boeren, beleidsmakers en iedereen die ermee aan de slag wil.",
            en: "WUR works with partners to research how agroforestry works in practice. The public-private project 'Agroforestry in diverse forms, from niche to established practice' brings all that research together. The knowledge had to be easy to find, for farmers, policymakers and anyone who wants to get started.",
          },
        ],
      },
      {
        title: { nl: "Op type en op thema.", en: "By type and by theme." },
        body: [
          {
            nl: "We ontwierpen de website in Webflow en zetten die over naar WordPress. De kennisbank deelden we in op type, zoals factsheets, rapporten, tools en video's. En op thema: voedselbossen, veehouderij, akkerbouw, internationaal en beleid.",
            en: "We designed the website in Webflow and moved it to WordPress. We organised the knowledge base by type, such as factsheets, reports, tools and videos. And by theme: food forests, livestock farming, arable farming, international and policy.",
          },
          {
            nl: "Zo vind je snel een praktijkgids voor dierhouders of een verkenning voor de akkerbouw. Van afgeronde projecten tot lopend onderzoek, alles staat op één plek.",
            en: "That way you quickly find a practical guide for livestock farmers or an exploration for arable farming. From completed projects to ongoing research, it's all in one place.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Onderzoek is pas af als iemand het kan vinden.", en: "Research is only finished when someone can find it." },
    ],
  },
  "grid": {
    intro: {
      nl: "Laadpunten vinden, de goedkoopste pomp kiezen en een laadpaal bestellen. GRID doet het allemaal, en dat moest online een duidelijk thuis krijgen.",
      en: "Finding charging points, choosing the cheapest pump and ordering a charger. GRID does it all, and that needed a clear home online.",
    },
    chapters: [
      {
        title: { nl: "Een app en een winkel.", en: "An app and a shop." },
        body: [
          {
            nl: "Met de GRID-app vind je laadpunten en tankstations, plan je je route en zie je waar laden of tanken het voordeligst is. Daarnaast levert GRID laadpalen, laadkabels en snelladers, voor particulieren en bedrijven. Twee werelden die online bij elkaar moesten komen.",
            en: "With the GRID app you find charging points and fuel stations, plan your route and see where charging or refuelling is cheapest. GRID also supplies chargers, charging cables and fast chargers, for consumers and businesses. Two worlds that had to come together online.",
          },
        ],
      },
      {
        title: { nl: "Website en shop, één familie.", en: "Site and shop, one family." },
        body: [
          {
            nl: "We bouwden de website in Webflow en de marketplace shop.grid.com in WordPress met WooCommerce. Licht, met groen als merkkleur, en aparte ingangen voor particulieren en zakelijk. Van laadkabel tot DC-snellader bestel je alles op één plek.",
            en: "We built the website in Webflow and the shop.grid.com marketplace in WordPress with WooCommerce. Light, with green as the brand colour, and separate entrances for consumers and businesses. From charging cable to DC fast charger, you order everything in one place.",
          },
        ],
      },
      {
        title: { nl: "Eén boodschap per banner.", en: "One message per banner." },
        body: [
          {
            nl: "Voor campagnes maakten we advertentiebanners, zoals die voor het gratis aanvragen van een publiek laadpunt bij je woning. Eén boodschap, één actie, en meteen duidelijk wat je moet doen.",
            en: "For campaigns we made ad banners, such as the one for requesting a free public charging point near your home. One message, one action, and instantly clear what to do.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Elektrisch rijden is al nieuw genoeg. De website hoeft het niet ingewikkelder te maken.", en: "Electric driving is new enough. The website shouldn't make it harder." },
    ],
  },
  "verichecks": {
    intro: {
      nl: "Eerst checken, dan zakendoen. VeriChecks uit Brussel helpt bedrijven met verificatie en compliance, een serieus onderwerp dat toch toegankelijk moest voelen.",
      en: "Check first, then do business. VeriChecks from Brussels helps companies with verification and compliance, a serious subject that still had to feel approachable.",
    },
    chapters: [
      {
        title: { nl: "Serieus, maar niet zwaar.", en: "Serious, not heavy." },
        body: [
          {
            nl: "VeriChecks doet verificatie- en compliancechecks: van zakelijke checks tot achtergrondcontroles bij nieuwe medewerkers, leveranciers en klanten. Daar komt veel bij kijken. Het merk moest betrouwbaar zijn, zonder af te schrikken.",
            en: "VeriChecks runs verification and compliance checks: from business checks to background screening of new employees, suppliers and customers. There's a lot involved. The brand had to be trustworthy without being intimidating.",
          },
        ],
      },
      {
        title: { nl: "Drie stappen naar zekerheid.", en: "Three steps to certainty." },
        body: [
          {
            nl: "Merk en website maakten we in één lijn, de site in Webflow: licht, helder en met blauw als basis. In drie stappen zie je hoe het werkt: klanten toevoegen, één voor één of in bulk, de juiste checks kiezen en de resultaten overzichtelijk terugzien.",
            en: "We created brand and website as one, the site in Webflow: light, clear and based on blue. Three steps show how it works: add clients, one by one or in bulk, choose the right checks and review the results in a clear overview.",
          },
          {
            nl: "Elke toepassing krijgt een eigen uitleg, van screening bij werving tot due diligence. Zo herkent elke bezoeker zijn eigen situatie.",
            en: "Every use case gets its own explanation, from screening during recruitment to due diligence. That way every visitor recognises their own situation.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Vertrouwen moet je kunnen aantonen. Ook op je eigen website.", en: "Trust should be provable. On your own website too." },
    ],
  },
  "nexis-group": {
    intro: {
      nl: "Bloeddruk, hartslag en zuurstofsaturatie, gemeten bij de patiënt thuis en automatisch zichtbaar voor het zorgteam. Nexis Telebox maakt het mogelijk, en de website moest dat in één keer uitleggen.",
      en: "Blood pressure, heart rate and oxygen saturation, measured at the patient's home and automatically visible to the care team. Nexis Telebox makes it possible, and the website had to explain that in one go.",
    },
    chapters: [
      {
        title: { nl: "Thuis gemeten, in het dashboard.", en: "Measured at home, seen on screen." },
        body: [
          {
            nl: "Met Nexis Telebox meten patiënten thuis hun waarden, en via 4G komen de metingen automatisch in het dashboard van het zorgteam. Ziekenhuizen en klinieken moesten in één keer snappen wat het is, voor wie het is en hoe het in hun bestaande systemen past.",
            en: "With Nexis Telebox, patients take their measurements at home, and via 4G the readings arrive automatically in the care team's dashboard. Hospitals and clinics had to understand in one go what it is, who it is for and how it fits their existing systems.",
          },
        ],
      },
      {
        title: { nl: "De vragen van de bezoeker leiden.", en: "The visitor's questions lead." },
        body: [
          {
            nl: "We ontwierpen de website in Webflow en zetten die over naar WordPress, in het Nederlands en Engels. De opbouw volgt de vragen van de bezoeker: waarom nu, wat is het, voor wie is het en hoe werkt het? Rustige beelden van patiënten thuis en een duidelijke weg naar een demo maken het af.",
            en: "We designed the website in Webflow and moved it to WordPress, in Dutch and English. The structure follows the visitor's questions: why now, what is it, who is it for and how does it work? Calm images of patients at home and a clear path to a demo complete it.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een technisch zorgproduct verdient een menselijke website.", en: "A technical care product deserves a human website." },
    ],
  },
  "sparta-blue-hydrogen": {
    intro: {
      nl: "Waterstof leg je niet in één zin uit. Sparta Blue Hydrogen wilde een merk en een website die professioneel overkomen en het verhaal helder vertellen.",
      en: "Hydrogen isn't something you explain in one sentence. Sparta Blue Hydrogen wanted a brand and a website that come across as professional and tell the story clearly.",
    },
    chapters: [
      {
        title: { nl: "Een opstap naar een schonere industrie.", en: "A stepping stone to cleaner industry." },
        body: [
          {
            nl: "Sparta richt zich op koolstofarme waterstof, gemaakt uit aardgas met afvang en opslag van CO₂. Een pragmatische stap in de energietransitie, met een technisch verhaal. Dat verhaal moest professioneel en helder overkomen.",
            en: "Sparta focuses on low-carbon hydrogen, made from natural gas with carbon capture and storage. A pragmatic step in the energy transition, with a technical story. That story had to come across as professional and clear.",
          },
        ],
      },
      {
        title: { nl: "Wit, blauw en Europa.", en: "White, blue and Europe." },
        body: [
          {
            nl: "Van branding tot website kwam alles uit onze studio. Wit en blauw, met een klassieke letter en een kaart van Europa als terugkerend beeld. De visie op betaalbare, koolstofarme waterstof krijgt de ruimte, zonder dat de lezer verdwaalt in jargon.",
            en: "From branding to website, it all came out of our studio. White and blue, with a classic typeface and a map of Europe as a recurring image. The vision of affordable, low-carbon hydrogen gets room to breathe, without the reader getting lost in jargon.",
          },
        ],
      },
    ],
    statements: [
      { nl: "De eerste zin moet het zware werk doen.", en: "The first sentence has to do the heavy lifting." },
    ],
  },
  "db-kiepers": {
    intro: {
      nl: "Zand, puin en granulaat, geleverd met eigen kiepwagens en containerauto's, dag en nacht. DB Kiepers heeft de hele keten in handen, en dat mocht je zien: online en op de weg.",
      en: "Sand, rubble and aggregate, delivered by its own tipper trucks and container lorries, day and night. DB Kiepers controls the whole chain, and that deserved to show: online and on the road.",
    },
    chapters: [
      {
        title: { nl: "De hele keten in eigen hand.", en: "The whole chain in-house." },
        body: [
          {
            nl: "DB Kiepers levert gecertificeerde bouwstoffen en verzorgt zelf het transport. Dat maakt ze anders dan een gewone transporteur of een gewone leverancier. Die combinatie verdiende een premium uitstraling.",
            en: "DB Kiepers supplies certified building materials and handles the transport itself. That sets them apart from an ordinary haulier or an ordinary supplier. That combination deserved a premium look.",
          },
        ],
      },
      {
        title: { nl: "Premium, ook in de bouw.", en: "Premium, even in construction." },
        body: [
          {
            nl: "Op basis van de nieuwe branding zetten we de website in Webflow neer. Transport en grondstoffen staan helder naast elkaar, en cases laten zien aan welke projecten DB Kiepers levert, zoals de verbreding van de A27.",
            en: "On the back of the new branding, we set up the website in Webflow. Transport and raw materials sit clearly side by side, and case studies show which projects DB Kiepers supplies, such as the widening of the A27 motorway.",
          },
        ],
      },
      {
        title: { nl: "Het merk rijdt mee.", en: "The brand rides along." },
        body: [
          {
            nl: "We ontwierpen ook de stickering voor de trucks. Zo rijdt het merk overal mee, van de bouwplaats tot de snelweg. Van homepage tot vrachtwagen ziet DB Kiepers er hetzelfde uit.",
            en: "We also designed the livery for the trucks. That way the brand travels everywhere, from building site to motorway. From homepage to lorry, DB Kiepers looks the same.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een vrachtwagen is ook een billboard.", en: "A truck is a billboard too." },
    ],
  },
  "jmtuning": {
    intro: {
      nl: "Titanium voor supercars, maatwerk voor liefhebbers en een online platform vol uitlaatonderdelen. JMTuning in Schagen huisvest het allemaal onder één dak, en dat moest online overzichtelijk blijven.",
      en: "Titanium for supercars, custom work for enthusiasts and an online platform full of exhaust parts. JMTuning in Schagen houses it all under one roof, and online it had to stay clear.",
    },
    chapters: [
      {
        title: { nl: "Vier afdelingen, één dak.", en: "Four departments, one roof." },
        body: [
          {
            nl: "JMTuning is gespecialiseerd in uitlaten, met eigen productie. Onder één dak zitten de titanium uitlaten van Maarschall, maatwerk van JM Custom Exhausts, BLAST en RVSuitlaatdelen.nl, een online platform voor uitlaatonderdelen. Hoe laat je die naast elkaar bestaan zonder dat het rommelig wordt?",
            en: "JMTuning specialises in exhausts, with its own production. Under one roof sit Maarschall's titanium exhausts, custom work by JM Custom Exhausts, BLAST and RVSuitlaatdelen.nl, an online platform for exhaust parts. How do you let them live side by side without it getting messy?",
          },
        ],
      },
      {
        title: { nl: "Een familie met eigen accenten.", en: "A family with its own accents." },
        body: [
          {
            nl: "We begonnen bij de merkstrategie en brachten de afdelingen onder in één merkfamilie. Elke afdeling kreeg een eigen accent, en samen blijven ze herkenbaar als JMTuning.",
            en: "We started with brand strategy and brought the departments together in one brand family. Each department got its own accent, and together they remain recognisable as JMTuning.",
          },
        ],
      },
      {
        title: { nl: "Eerst kiezen, dan binnen.", en: "Choose first, then step inside." },
        body: [
          {
            nl: "De website in Webflow werkt als voordeur. Je kiest een afdeling en komt direct op de juiste plek, of je nu een titanium systeem zoekt of een los onderdeel. Zo komt elke bezoeker snel bij de juiste specialist uit.",
            en: "The website in Webflow works as a front door. You pick a department and land in the right place straight away, whether you're after a titanium system or a single part. Every visitor quickly reaches the right specialist.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een merkfamilie werkt als iedereen zijn eigen stem houdt.", en: "A brand family works when everyone keeps their own voice." },
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
            nl: "Eerst kwam de branding, daarna de website in Webflow. Zwart als basis, rood als accent en veel ruimte voor beelden uit de werkplaats. Onder de opening vertellen vier blokken waar een Maarschall-uitlaat voor staat: een persoonlijke sound, handwerk, eigen ontwikkeling en titanium uit de lucht- en ruimtevaart.",
            en: "Branding came first, then the website in Webflow. Black as the base, red as the accent and plenty of room for images from the workshop. Below the opening, four blocks explain what a Maarschall exhaust stands for: a personal sound, handcraft, in-house development and titanium with roots in aerospace.",
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
  "the-filmcar": {
    intro: {
      nl: "Een auto vol camera's die meerijdt met alles wat beweegt. The Filmcar maakt rolling shots voor producties, en de website moest net zo strak in beeld staan.",
      en: "A car full of cameras that runs alongside anything that moves. The Filmcar shoots rolling shots for productions, and the website had to look just as sharp.",
    },
    chapters: [
      {
        title: { nl: "Alleen de auto, of alles.", en: "Just the car, or everything." },
        body: [
          {
            nl: "The Filmcar levert rolling shots met een eigen camera-auto en crew. Productiebedrijven huren alleen de auto, of besteden de hele productie uit. Dat verschil moest meteen duidelijk zijn, net als de weg naar een offerte.",
            en: "The Filmcar delivers rolling shots with its own camera car and crew. Production companies either hire just the car or outsource the whole production. That difference had to be clear straight away, as did the route to a quote.",
          },
        ],
      },
      {
        title: { nl: "Het systeem in de hoofdrol.", en: "The system takes centre stage." },
        body: [
          {
            nl: "In Webflow bouwden we een site waarin geel de toon zet. Het systeem, de auto en het portfolio krijgen elk de ruimte. Zo zie je wat The Filmcar kan, voordat je één vraag hoeft te stellen.",
            en: "In Webflow we built a site where yellow sets the tone. The system, the car and the portfolio each get room to breathe. You see what The Filmcar can do before you need to ask a single question.",
          },
        ],
      },
      {
        title: { nl: "Een offerte in stappen.", en: "A quote, step by step." },
        body: [
          {
            nl: "De offerteaanvraag loopt in stappen. Je kiest alleen de auto of de hele productie, daarna de apparatuur, de crew en hoe lang je de auto nodig hebt. Zo komt elke aanvraag compleet binnen.",
            en: "The quote request runs in steps. You choose just the car or the full production, then the equipment, the crew and how long you need the car. Every request arrives complete.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goed formulier stelt de vragen die de crew anders zelf moet stellen.", en: "A good form asks the questions the crew would otherwise have to ask." },
    ],
  },
  "boutique-hotels-gelderland": {
    intro: {
      nl: "Een hotel op de Veluwe, een villa in het stadse groen, een kerk waar je een feest viert. Boutique Hotels Gelderland brengt bijzondere locaties samen, elk met een eigen karakter.",
      en: "A hotel on the Veluwe, a villa in a green corner of town, a church where you throw a party. Boutique Hotels Gelderland brings special venues together, each with its own character.",
    },
    chapters: [
      {
        title: { nl: "Karakter, maar één gevoel.", en: "Character, but one feeling." },
        body: [
          {
            nl: "Boutique Hotels Gelderland brengt locaties samen als Hotel de Wereld, Villa Ruimzicht, Villa Wanrooy en The Church. Monumentale panden, elk met een eigen karakter, maar met één gevoel en één serviceniveau. Dat moest je in het merk en op de website terugzien.",
            en: "Boutique Hotels Gelderland brings together venues such as Hotel de Wereld, Villa Ruimzicht, Villa Wanrooy and The Church. Listed buildings, each with its own character, but with one feeling and one level of service. That had to show in the brand and on the website.",
          },
        ],
      },
      {
        title: { nl: "Begin bij je plan.", en: "Start with your plan." },
        body: [
          {
            nl: "Merk en website, gebouwd in Webflow, kregen een warme en ingetogen uitstraling, met zand en goud als kleuren. Je zoekt op wat je wilt organiseren, van teambuilding en workshops tot vergaderen of trouwen. Per locatie zie je wat er kan.",
            en: "Brand and website, built in Webflow, got a warm and understated look, in sand and gold. You search by what you want to organise, from team building and workshops to meetings or a wedding. For each venue you see what's possible.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Elk pand een eigen verhaal. Eén merk dat ze bij elkaar houdt.", en: "Every building its own story. One brand that holds them together." },
    ],
  },
  "foodbars-gelderland": {
    intro: {
      nl: "Lunch, borrel, diner of een bruiloft. Foodbars Gelderland brengt vier foodbars onder één vlag, en wij maakten er één merk van.",
      en: "Lunch, drinks, dinner or a wedding. Foodbars Gelderland brings four food bars under one flag, and we turned them into one brand.",
    },
    chapters: [
      {
        title: { nl: "Vier zaken, één vlag.", en: "Four venues, one flag." },
        body: [
          {
            nl: "Foodbars Gelderland bestaat uit LEV. Foodbar, LEV. by Mike, Gastrobar de Wereld en JANS'. Van high tea tot walking dinner en van zakelijke borrel tot bruiloft. Elke zaak heeft zijn eigen sfeer, en toch moesten ze samen één merk vormen.",
            en: "Foodbars Gelderland is made up of LEV. Foodbar, LEV. by Mike, Gastrobar de Wereld and JANS'. From high tea to walking dinner and from business drinks to weddings. Each venue has its own atmosphere, yet together they had to form one brand.",
          },
        ],
      },
      {
        title: { nl: "Genieten, vieren, zakendoen.", en: "Enjoy, celebrate, do business." },
        body: [
          {
            nl: "Na de branding bouwden we een website in Webflow met drie ingangen: Enjoy, Celebrate en Business. Je zoekt direct op het soort event, zoals een high tea, een borrel of een verjaardag. Per foodbar zie je wat er kan.",
            en: "After the branding we built a Webflow site with three entrances: Enjoy, Celebrate and Business. You search straight away by type of event, such as high tea, drinks or a birthday. For each food bar you see what's on offer.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Eén merk, vier keer anders lekker.", en: "One brand, four different flavours." },
    ],
  },
  "speedbar": {
    intro: {
      nl: "Een aerobar die voor elke renner apart wordt gemaakt. Dankzij 3D-printtechniek is Speedbar nu ook bereikbaar voor fietsers buiten de profwereld, en zo'n product verkoop je niet met een standaard bestelknop.",
      en: "An aerobar made individually for every rider. Thanks to 3D printing, Speedbar is now within reach of cyclists outside the pro peloton, and a product like that isn't sold with a standard buy button.",
    },
    chapters: [
      {
        title: { nl: "Op maat voor elke renner.", en: "Made for every rider." },
        body: [
          {
            nl: "Speedbar maakt aerobars voor tijdritfietsen, voor elke renner op maat. Het product komt uit de profwereld en is dankzij 3D-printtechniek nu ook voor andere fietsers bereikbaar. Dat vraagt om een online presentatie met dezelfde precisie.",
            en: "Speedbar makes aerobars for time-trial bikes, custom-fitted to every rider. The product comes from the pro world and, thanks to 3D printing, is now within reach of other cyclists too. That calls for an online presentation with the same precision.",
          },
        ],
      },
      {
        title: { nl: "Samenstellen in stappen.", en: "Building it, step by step." },
        body: [
          {
            nl: "Het hart van de Webflow-site is een configurator waarin je in een paar stappen je Speedbar PRO samenstelt en je aanvraag doet. Comfort, sterkte en veiligheid worden helder uitgelegd, zodat je weet waarom elk detail ertoe doet.",
            en: "At the heart of the Webflow site is a configurator in which you put together your Speedbar PRO in a few steps and submit your request. Comfort, strength and safety are clearly explained, so you know why every detail matters.",
          },
        ],
      },
      {
        title: { nl: "Ook in bewegend beeld.", en: "In motion, too." },
        body: [
          {
            nl: "Daarnaast maakten we een videodocumentaire over Speedbar. Bewegend beeld laat zien wat een productfoto niet kan vertellen.",
            en: "We also made a video documentary about Speedbar. Moving images show what a product photo can't tell.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Maatwerk verdient een aanvraag die meedenkt.", en: "Custom work deserves a request form that thinks along." },
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
      nl: "Een kippenverblijf op wielen, waarmee boeren hun eigen eieren produceren en verkopen. Zo'n stevig product vroeg om een site die minstens zo goed in elkaar zit.",
      en: "A chicken house on wheels that lets farmers produce and sell their own eggs. A product that sturdy called for a site that's just as well built.",
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
  "genson-grm": {
    intro: {
      nl: "Planning, medewerkers, huisvesting en check-in en check-out, in één tool. Voor Genson Quality Plants bouwden we GRM, afgestemd op hoe zij werken.",
      en: "Planning, staff, housing and check-in and check-out, in one tool. For Genson Quality Plants we built GRM, tailored to the way they work.",
    },
    chapters: [
      {
        title: { nl: "Op maat, niet uit de doos.", en: "Tailored, not off the shelf." },
        body: [
          {
            nl: "Genson Quality Plants zocht een eigen tool om de inzet van mensen en middelen te plannen en te beheren. Geen pakket uit de doos, maar iets dat aansluit op hoe zij werken.",
            en: "Genson Quality Plants wanted its own tool to plan and manage people and resources. Not a package off the shelf, but something that fits the way they work.",
          },
        ],
      },
      {
        title: { nl: "Van wireframe tot werkende tool.", en: "From wireframe to working tool." },
        body: [
          {
            nl: "We begonnen met IT-advies en wireframes, en gingen via klikbare prototypes naar het UI/UX-design en de bouw. Zo lag er bij elke stap iets om op te reageren, voordat er een regel code werd geschreven.",
            en: "We started with IT advice and wireframes, then moved through clickable prototypes to UI/UX design and the build. That way there was something to react to at every step, before a line of code was written.",
          },
        ],
      },
      {
        title: { nl: "Alles op één planbord.", en: "Everything on one board." },
        body: [
          {
            nl: "GRM kreeg modules voor planning, weekschema's, medewerkers, huisvesting met een beddenplanner, een planbord, check-in en check-out en een omzetoverzicht. In de beddenplanner zie je per kamer wie er verblijft. Grafieken en tabellen laten in één oogopslag zien hoe het ervoor staat.",
            en: "GRM got modules for planning, weekly schedules, staff, housing with a bed planner, a planning board, check-in and check-out and a revenue overview. The bed planner shows who's staying in each room. Charts and tables show at a glance how things stand.",
          },
        ],
      },
    ],
    statements: [
      { nl: "De beste tool past zich aan de werkvloer aan, niet andersom.", en: "The best tool adapts to the work floor, not the other way round." },
    ],
  },
  "expociety-app": {
    intro: {
      nl: "Een venue organiseert een event, influencers komen en delen het met hun volgers. Expociety brengt die twee bij elkaar, in een app die iedereen snapt.",
      en: "A venue hosts an event, influencers show up and share it with their followers. Expociety brings the two together, in an app anyone can use.",
    },
    chapters: [
      {
        title: { nl: "Twee kanten, één ecosysteem.", en: "Two sides, one ecosystem." },
        body: [
          {
            nl: "Expociety wilde een digitaal ecosysteem waarin influencers en venues makkelijk samenwerken rond events. De app moest werken voor gebruikers met elke technische achtergrond. Met een onboarding die soepel loopt.",
            en: "Expociety wanted a digital ecosystem where influencers and venues easily work together around events. The app had to work for users of every technical background. With an onboarding that runs smoothly.",
          },
        ],
      },
      {
        title: { nl: "Begrijpen wie het gebruikt.", en: "Understanding who uses it." },
        body: [
          {
            nl: "We begonnen met een analyse van gebruikersbehoeften en trends, en schreven user stories. Daarop ontwierpen we een interface met een heldere navigatie. Een kaart toont events in de buurt, filters helpen je zoeken en bij elk event zie je wie er is uitgenodigd.",
            en: "We started with an analysis of user needs and trends, and wrote user stories. On that basis we designed an interface with clear navigation. A map shows events nearby, filters help you search and for every event you see who has been invited.",
          },
        ],
      },
      {
        title: { nl: "Van ontwerp tot App Store.", en: "From design to App Store." },
        body: [
          {
            nl: "Daarna bouwden we de iOS-app: events aanmaken, beheren en promoten, influencers uitnodigen, samenwerken, analytics-dashboards en veilige communicatie. Na uitgebreid testen op stabiliteit, veiligheid en prestaties ging de app live in de App Store.",
            en: "Then we built the iOS app: creating, managing and promoting events, inviting influencers, collaborating, analytics dashboards and secure messaging. After thorough testing for stability, security and performance, the app went live in the App Store.",
          },
          {
            nl: "De architectuur is gebouwd om mee te groeien. Zo blijft de app met nieuwe updates doorgroeien.",
            en: "The architecture is built to grow. So the app keeps evolving with every new update.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goede onboarding voelt niet als uitleg.", en: "Good onboarding doesn't feel like instructions." },
    ],
  },
  "expociety-branding": {
    intro: {
      nl: "Influencers, venues en events die je niet wilt missen. Expociety had een merk nodig met net zoveel energie als de avonden die het mogelijk maakt.",
      en: "Influencers, venues and events you don't want to miss. Expociety needed a brand with as much energy as the nights it makes happen.",
    },
    chapters: [
      {
        title: { nl: "Opvallen in een drukke markt.", en: "Standing out in a busy market." },
        body: [
          {
            nl: "Expociety brengt influencers en venues samen voor bijzondere events. Het merk moest die verbindende energie uitstralen. En het moest opvallen in een markt waar iedereen om aandacht vraagt.",
            en: "Expociety brings influencers and venues together for special events. The brand had to radiate that connecting energy. And it had to stand out in a market where everyone is asking for attention.",
          },
        ],
      },
      {
        title: { nl: "Een ring die samenkomt.", en: "A ring that comes together." },
        body: [
          {
            nl: "We vertaalden de visie en waarden van Expociety naar een complete identiteit. Een logo als een ring van stippen, een kleurverloop van diep paars naar fel roze en moderne, toegankelijke typografie. Alles legden we vast in een brandbook, zodat het merk overal hetzelfde verhaal vertelt.",
            en: "We translated Expociety's vision and values into a complete identity. A logo shaped like a ring of dots, a gradient from deep purple to bright pink and modern, accessible typography. We captured it all in a brandbook, so the brand tells the same story everywhere.",
          },
        ],
      },
      {
        title: { nl: "Van brandbook tot giveaway.", en: "From brandbook to giveaway." },
        body: [
          {
            nl: "Daarna zetten we het merk door: in de website, op social media, in een giveaway-campagne en in animaties. Beelden met 'Discover, Connect, Influence' en 'Unlock your influence' zetten de toon. Ook de app ontwierpen en bouwden we, zodat merk en product één verhaal vertellen.",
            en: "Then we carried the brand through: on the website, on social media, in a giveaway campaign and in animations. Visuals with 'Discover, Connect, Influence' and 'Unlock your influence' set the tone. We also designed and built the app, so brand and product tell one story.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een merk voor events mag zelf ook een beetje feest zijn.", en: "A brand for events should feel a bit like a party itself." },
    ],
  },
  "teamtv-pricing-table": {
    intro: {
      nl: "Meerdere pakketten, verschillende valuta, maandelijks of jaarlijks betalen. Voor TeamTV maakten we een prijstabel die al die keuzes overzichtelijk houdt.",
      en: "Several plans, different currencies, monthly or annual billing. For TeamTV we made a pricing table that keeps all those choices clear.",
    },
    chapters: [
      {
        title: { nl: "Veel informatie, één overzicht.", en: "Lots of information, one overview." },
        body: [
          {
            nl: "TeamTV is specialist in video-analyse voor sportclubs. Elk pakket heeft een eigen set functies, en clubs komen uit verschillende landen. Alles over prijzen in één helder overzicht krijgen, dat was de opgave.",
            en: "TeamTV specialises in video analysis for sports clubs. Every plan has its own set of features, and clubs come from different countries. Getting everything about pricing into one clear overview was the brief.",
          },
        ],
      },
      {
        title: { nl: "Schakelaars en vraagtekens.", en: "Toggles and question marks." },
        body: [
          {
            nl: "We ontwierpen en bouwden een uitgebreide prijsmatrix. Inklapbare lijsten laten per pakket zien wat erin zit, en met schakelaars wissel je van valuta en betaalperiode. Eigen iconen en tooltips bij de vraagtekens geven uitleg waar dat nodig is.",
            en: "We designed and built an extensive pricing matrix. Collapsible lists show what each plan includes, and toggles switch currency and billing period. Custom icons and tooltips on the question marks explain where needed.",
          },
          {
            nl: "De Webflow-front-end integreerden we in de WordPress-website, met subtiele hover- en scrollinteracties. De prijstabel werd een van de belangrijkste leadpagina's in de online funnel van TeamTV.",
            en: "We integrated the Webflow front end into the WordPress website, with subtle hover and scroll interactions. The pricing table became one of the most important lead pages in TeamTV's online funnel.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een prijstabel is geen bijzaak. Vaak is het de laatste stap voor een ja.", en: "A pricing table is no afterthought. It's often the last step before a yes." },
    ],
  },
  "bctn": {
    intro: {
      nl: "Containerterminals die dag en nacht draaien, en vrachtwagens die precies op tijd moeten komen en gaan. Bij BCTN begon het met één app, en werden we de innovatiepartner.",
      en: "Container terminals that run day and night, and trucks that have to arrive and leave right on time. At BCTN it started with one app, and we became the innovation partner.",
    },
    chapters: [
      {
        title: { nl: "Eén app als begin.", en: "One app to start with." },
        body: [
          {
            nl: "BCTN is een van de grootste inlandnetwerken van containerterminals in de Benelux. In 2018 vroeg BCTN ons te helpen bij de invoering van een nieuwe truck-app. Die legt vertrek-, aankomst-, los- en afkoppeltijden bij klanten vast.",
            en: "BCTN is one of the largest inland container terminal networks in the Benelux. In 2018 BCTN asked us to help introduce a new truck app. It records departure, arrival, unloading and uncoupling times at customers' sites.",
          },
        ],
      },
      {
        title: { nl: "Verder kijken dan het project.", en: "Looking beyond the project." },
        body: [
          {
            nl: "We keken verder dan die ene app en dachten mee over de IT-strategie. Zo werden we de externe innovatiecoördinator van BCTN. We hielpen het IT-serviceframework en de innovatiestrategie opnieuw vorm te geven.",
            en: "We looked beyond that one app and helped shape the IT strategy. That's how we became BCTN's external innovation coordinator. We helped redesign the IT service framework and the innovation strategy.",
          },
        ],
      },
      {
        title: { nl: "Van speedgate tot e-CMR.", en: "From speedgate to e-CMR." },
        body: [
          {
            nl: "We leidden de ontwikkeling van hardware- en softwaresystemen, zoals de speedgates, de truck-app, het portaal en de e-CMR. We schoven aan bij belangrijke interne overleggen, zoals het managementteam. En we bleven betrokken bij de ontwikkeling van de terminals in Nederland en België.",
            en: "We led the development of hardware and software systems, such as the speedgates, the truck app, the portal and the e-CMR. We joined key internal meetings, including the management team. And we stayed involved in developing the terminals in the Netherlands and Belgium.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Innovatie werkt pas als het past in een wereld die nooit stilstaat.", en: "Innovation only works when it fits a world that never stops." },
    ],
  },
  "taylor": {
    intro: {
      nl: "Zonne-micro-elektronica klinkt ingewikkeld, en dat is het ook. Taylor Technologies wilde het toch simpel kunnen uitleggen, aan klanten en aan R&D-partners.",
      en: "Solar micro-electronics sounds complicated, and it is. Taylor Technologies still wanted to explain it simply, to clients and R&D partners alike.",
    },
    chapters: [
      {
        title: { nl: "Voor klant en partner.", en: "For clients and partners." },
        body: [
          {
            nl: "Taylor Technologies ontwikkelt zonne-micro-elektronica en levert die aan engineeringbedrijven. Om zowel B2B-klanten als R&D-partners aan te trekken, wilde Taylor een nieuwe huisstijl en een nieuwe website.",
            en: "Taylor Technologies develops solar micro-electronics and supplies them to engineering companies. To attract both B2B clients and R&D partners, Taylor wanted a new visual identity and a new website.",
          },
        ],
      },
      {
        title: { nl: "Helder en minimalistisch.", en: "Clear and minimal." },
        body: [
          {
            nl: "In een paar creatieve rondes maakten we de huisstijl helder en minimalistisch: donkerblauw en geel, met veel rust. Eigen iconen vertalen de techniek naar beelden die je in één keer leest.",
            en: "In a few creative rounds we made the identity clear and minimal: dark blue and yellow, with plenty of calm. Custom icons translate the technology into images you read at a glance.",
          },
        ],
      },
      {
        title: { nl: "De techniek in stukjes.", en: "Technology in bite-sized pieces." },
        body: [
          {
            nl: "Voor de website betrokken we het managementteam in een agile, co-creatief proces, om de technologie op te knippen in begrijpelijke stukjes. Eerst wireframes om structuur en logica te checken, daarna styleframes om de stijl te kiezen. Met een CMS passen de beheerders de inhoud zelf aan.",
            en: "For the website we involved the management team in an agile, co-creative process, to break the technology down into understandable pieces. Wireframes first to check structure and logic, then style frames to choose the look. With a CMS, the site's editors update the content themselves.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Eerst begrijpen, dan pas vormgeven.", en: "Understand first, design second." },
    ],
  },
  "bernheze-makelaars-rebranding": {
    intro: {
      nl: "Een huisstijl die al twintig jaar een vertrouwd beeld was, en toch toe aan vernieuwing. Voor Bernheze Makelaars zochten we de kleine verandering met het grote effect.",
      en: "An identity that had been a familiar sight for twenty years, yet was ready for renewal. For Bernheze Makelaars we looked for the small change with the big effect.",
    },
    chapters: [
      {
        title: { nl: "Respect voor wat er staat.", en: "Respect for what's there." },
        body: [
          {
            nl: "Bernheze Makelaars vroeg ons om een complete rebranding van een huisstijl die al twintig jaar een vertrouwd beeld was. Dat vraagt om structuur, en om respect voor wat er al staat. Zeker met meerdere stakeholders aan tafel.",
            en: "Bernheze Makelaars asked us for a complete rebrand of an identity that had been familiar for twenty years. That calls for structure, and for respect for what's already there. Especially with several stakeholders at the table.",
          },
        ],
      },
      {
        title: { nl: "De heerser, zonder poespas.", en: "The ruler, without fuss." },
        body: [
          {
            nl: "Met het managementteam begonnen we bij de oorspronkelijke identiteit, de visie, de missie en de kernwaarden. Na een paar sessies over merkarchetypes kwamen we uit bij 'de heerser': zonder poespas laat het merk ervaring, kwaliteit en autoriteit zien. Via styleframes en meerdere feedbackrondes kwamen we tot een nieuw logo.",
            en: "With the management team we started from the original identity, the vision, the mission and the core values. After a few sessions on brand archetypes we arrived at 'the ruler': without fuss, the brand shows experience, quality and authority. Through style frames and several feedback rounds we arrived at a new logo.",
          },
        ],
      },
      {
        title: { nl: "Van te-koopbord tot portaal.", en: "From for-sale sign to portal." },
        body: [
          {
            nl: "Kleuren, typografie, iconen en beeldgebruik legden we vast in een brandbook. In de nieuwe stijl ontwierpen we de te-koopborden, visitekaartjes, briefpapier, presentatiekits, roll-upbanners, flyers en investment memorandums.",
            en: "We captured colours, typography, icons and imagery in a brandbook. In the new style we designed the for-sale signs, business cards, stationery, presentation kits, roll-up banners, flyers and investment memorandums.",
          },
          {
            nl: "Daarna bouwden we de website, met een eigen plek voor elke afdeling en een waardebepalingsportaal voor klanten. Zo staat het merk online net zo stevig als op straat.",
            en: "Then we built the website, with a place for every department and a valuation portal for clients. The brand now stands as firmly online as it does on the street.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een subtiele verandering kan het grootste verschil maken.", en: "A subtle change can make the biggest difference." },
    ],
  },
  "bernheze-makelaars-video": {
    intro: {
      nl: "Een foto zegt meer dan duizend woorden, laat staan video. Voor Bernheze Makelaars filmen we de meest exclusieve villa's die ze verkopen.",
      en: "A picture says more than a thousand words, let alone video. For Bernheze Makelaars we film the most exclusive villas they sell.",
    },
    chapters: [
      {
        title: { nl: "Laten zien in plaats van vertellen.", en: "Show, don't tell." },
        body: [
          {
            nl: "Bernheze Makelaars vroeg ons om hun meest exclusieve woningen beter te presenteren. Dus praatten we niet te lang, maar lieten we zien wat we kunnen. Samen plannen we draaidagen op locatie bij de villa's.",
            en: "Bernheze Makelaars asked us to present their most exclusive homes better. So we didn't talk for long, we showed what we could do. Together we plan shoot days on location at the villas.",
          },
        ],
      },
      {
        title: { nl: "Vanaf de grond en de lucht.", en: "From the ground and the air." },
        body: [
          {
            nl: "We filmen met een gestabiliseerde handcamera en een drone. Zo zie je de villa, de tuin en de omgeving in één vloeiende beweging. Daarna steken we veel tijd in de montage, en kiezen we per woning muziek die bij de stijl past.",
            en: "We film with a stabilised handheld camera and a drone. That way you see the villa, the garden and the surroundings in one fluid movement. Then we put a lot of time into the edit, and choose music that suits the style of each home.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Elke woning heeft een eigen ritme. De montage volgt het.", en: "Every home has its own rhythm. The edit follows it." },
    ],
  },
  "sublime-branding": {
    intro: {
      nl: "SUBLIME staat voor, nou ja, het woord zegt genoeg. Een community van supercareigenaren die wilde groeien, met een merk dat tot in de kauwgomverpakking klopt.",
      en: "SUBLIME stands for, well, the word says it all. A community of supercar owners that wanted to grow, with a brand that's right down to the chewing-gum wrapper.",
    },
    chapters: [
      {
        title: { nl: "Een community met ambitie.", en: "A community with ambition." },
        body: [
          {
            nl: "SUBLIME bracht Nederlandse supercareigenaren samen en wilde verder groeien, met events en een nieuw online businessmodel. Daarvoor was een merk nodig dat opvalt tussen de auto's die het zelf in de schijnwerpers zet.",
            en: "SUBLIME brought Dutch supercar owners together and wanted to grow further, with events and a new online business model. That needed a brand that stands out among the very cars it puts in the spotlight.",
          },
        ],
      },
      {
        title: { nl: "Geen detail bleef liggen.", en: "No detail left behind." },
        body: [
          {
            nl: "We ontwikkelden een herkenbaar logo en een zwart-witte huisstijl, met rood als accent. Daarna volgden merkproducten en content om met de eigenaren in contact te komen. Beachflags, banners, nummerplaten en stickers, tot eigen kauwgomverpakkingen en polsbandjes voor de deelnemers.",
            en: "We developed a recognisable logo and a black-and-white identity, with red as the accent. Then came branded products and content to connect with the owners. Beach flags, banners, number plates and stickers, right down to custom chewing-gum packaging and wristbands for participants.",
          },
          {
            nl: "Ook de aankondigingen voor events, zoals een dag met karting en een toerrit, kregen dezelfde strakke stijl. Mede dankzij dat materiaal groeide de achterban op social media snel.",
            en: "Event announcements, such as a day of karting and a scenic drive, got the same sharp style. Partly thanks to that material, the following on social media grew fast.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een merk zit in de kleinste dingen. Zelfs in kauwgom.", en: "A brand lives in the smallest things. Even in chewing gum." },
    ],
  },
  "sublime-video": {
    intro: {
      nl: "Supercars op een rij, een drone erboven en twee camera's aan de grond. Voor SUBLIME maakten we content die het gevoel van een event echt overbrengt.",
      en: "Supercars lined up, a drone overhead and two cameras on the ground. For SUBLIME we made content that truly captures the feeling of an event.",
    },
    chapters: [
      {
        title: { nl: "Het gevoel overbrengen.", en: "Capturing the feeling." },
        body: [
          {
            nl: "SUBLIME bouwde een community van Nederlandse supercareigenaren op. Om het merk te laten groeien en meer eigenaren te bereiken, was content nodig die het SUBLIME-gevoel echt overbrengt. Dat gevoel zit in geluid, beweging en de mensen eromheen.",
            en: "SUBLIME built a community of Dutch supercar owners. To grow the brand and reach more owners, it needed content that truly conveys the SUBLIME feeling. That feeling lives in sound, movement and the people around the cars.",
          },
        ],
      },
      {
        title: { nl: "Vier camera's, één verhaal.", en: "Four cameras, one story." },
        body: [
          {
            nl: "Met een eigen mediateam filmden we de events met twee grondcamera's en twee drones. Zo maakten we veel online content en promotievideo's, die SUBLIME op social media deelde. De video's droegen bij aan een sterk gevoel van saamhorigheid en aan de kaartverkoop voor de events.",
            en: "With our own media team we filmed the events using two ground cameras and two drones. That gave us lots of online content and promo videos, which SUBLIME shared on social media. The videos added to a strong sense of togetherness and to ticket sales for the events.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Het mooiste shot zie je vaak vanuit de lucht.", en: "The best shot is often the one from above." },
    ],
  },
  "nktv": {
    intro: {
      nl: "De landelijke vereniging van korfbaltrainers was toe aan een nieuw gezicht. Wij gaven het NKTV een nieuw logo, een huisstijl en een website.",
      en: "The national association of korfball coaches was ready for a new face. We gave NKTV a new logo, a visual identity and a website.",
    },
    chapters: [
      {
        title: { nl: "Fris, oranje en herkenbaar.", en: "Fresh, orange and recognisable." },
        body: [
          {
            nl: "Het NKTV wilde een nieuwe huisstijl en een nieuwe website. We vernieuwden het logo, in oranje en zwart met een ring eromheen, en werkten de huisstijl uit. Alles legden we vast in een brandbook.",
            en: "NKTV wanted a new visual identity and a new website. We renewed the logo, in orange and black with a ring around it, and developed the identity. We captured it all in a brandbook.",
          },
        ],
      },
      {
        title: { nl: "Zelf aan het stuur.", en: "In the driver's seat." },
        body: [
          {
            nl: "Daarna ontwierpen en bouwden we de website, met een CMS dat de vereniging zelf beheert. In relatief korte tijd stond er zo een complete nieuwe identiteit, plus een website om mee verder te gaan.",
            en: "Then we designed and built the website, with a CMS the association manages itself. In a relatively short time there was a complete new identity, plus a website to carry on with.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een vereniging verdient een merk waar leden graag achter staan.", en: "An association deserves a brand its members are glad to stand behind." },
    ],
  },
  "trt-tv": {
    intro: {
      nl: "Paardensportvideo's van hoge kwaliteit, voor kijkers over de hele wereld. TRT TV had een platform nodig dat alles regelt, van betalen tot kijken.",
      en: "High-quality equestrian videos, for viewers all over the world. TRT TV needed a platform that handles everything, from payment to playback.",
    },
    chapters: [
      {
        title: { nl: "Van betalen tot kijken.", en: "From payment to playback." },
        body: [
          {
            nl: "TRT TV brengt hoogwaardig geproduceerde paardensportvideo's naar de wereld. Daarvoor moest er een platform komen met een betaalomgeving, gebruikersbeheer en een plek om alle video's te beheren.",
            en: "TRT TV brings professionally produced equestrian videos to the world. That called for a platform with a payment environment, user management and a place to manage all the videos.",
          },
        ],
      },
      {
        title: { nl: "Full-stack gebouwd.", en: "Built full-stack." },
        body: [
          {
            nl: "We ontwierpen het platform en bouwden het full-stack, met een betaalomgeving, gebruikersbeheer en een CMS. In een donkere, rustige interface staan de series centraal. Gebruikers slaan video's op in hun eigen collectie en geven losse video's een beoordeling.",
            en: "We designed the platform and built it full-stack, with a payment environment, user management and a CMS. In a dark, calm interface the series take centre stage. Users save videos to their own collection and rate individual videos.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goed platform valt niet op. De video's wel.", en: "A good platform doesn't stand out. The videos do." },
    ],
  },
  "rsi-3d-sportvelden": {
    intro: {
      nl: "Een sportveld dat je al ziet voordat de eerste schop de grond in gaat. Voor Recreational Systems International maken we 3D-renders en animaties van nieuwe velden.",
      en: "A sports field you can see before the first spade goes into the ground. For Recreational Systems International we create 3D renders and animations of new fields.",
    },
    chapters: [
      {
        title: { nl: "Ontwerpen die leven.", en: "Designs that come alive." },
        body: [
          {
            nl: "Recreational Systems International ontwerpt en ontwikkelt sportvelden, internationaal. Ze wilden hun ontwerpen meer laten leven, om sportinstellingen en clubs te overtuigen. Een schets op papier vraagt nu eenmaal veel verbeelding.",
            en: "Recreational Systems International designs and develops sports fields internationally. They wanted their designs to come to life, to win over sports organisations and clubs. A sketch on paper simply asks a lot of the imagination.",
          },
        ],
      },
      {
        title: { nl: "Van schets naar render.", en: "From sketch to render." },
        body: [
          {
            nl: "We brainstormen mee over nieuwe concepten en maken van projectschetsen presenteerbare 3D-renders en animaties. Van een overdekte multisporthal tot een kooiveld met kunstgras. Zo werden we de vaste partner van RSI voor 3D-visualisaties, en zien we onze ontwerpen echt gebouwd worden, onder meer in Canada en Europa.",
            en: "We help brainstorm new concepts and turn project sketches into presentable 3D renders and animations. From a covered multi-sport hall to a caged artificial-turf pitch. That's how we became RSI's regular partner for 3D visualisation, and we see our designs actually being built, in Canada and Europe among other places.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Wie het veld al ziet, zegt makkelijker ja.", en: "Once you can see the pitch, saying yes gets easier." },
    ],
  },
  "tue-dcmt": {
    intro: {
      nl: "Een tafel vol blokjes die samen een stad vormen, waaraan iedereen kan meeplannen. Het Dynamic Campus Mapping Team van de TU Eindhoven bedacht het. Wij maakten het begrijpelijk.",
      en: "A table full of blocks that together form a city, where everyone can help plan. The Dynamic Campus Mapping Team at TU Eindhoven came up with it. We made it understandable.",
    },
    chapters: [
      {
        title: { nl: "Slimme techniek, lastig uit te leggen.", en: "Clever tech, hard to explain." },
        body: [
          {
            nl: "Het Dynamic Campus Mapping Team, een spin-off van de Smart Cities-guild van de TU Eindhoven, maakte een tastbare, interactieve matrix. Die maakt stedelijke planning met veel partijen toegankelijker en speelser. Alleen: die technologie is lastig uit te leggen.",
            en: "The Dynamic Campus Mapping Team, a spin-off of TU Eindhoven's Smart Cities guild, created a tangible, interactive matrix. It makes urban planning with many stakeholders more accessible and more playful. The catch: the technology is hard to explain.",
          },
        ],
      },
      {
        title: { nl: "Stap voor stap in 3D.", en: "Step by step in 3D." },
        body: [
          {
            nl: "We bouwden een 3D-model van de matrix en maakten een conceptvideo met 3D-animatie die het hele idee stap voor stap uitlegt. Je ziet de gebouwen op het gekleurde raster en het scherm erboven met de gegevens. Zo begrijpt iedereen aan tafel waar het over gaat.",
            en: "We built a 3D model of the matrix and made a concept video with 3D animation that explains the whole idea step by step. You see the buildings on the coloured grid and the screen above showing the data. That way everyone at the table understands what it's about.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goede animatie maakt van een idee iets wat je kunt aanwijzen.", en: "A good animation turns an idea into something you can point at." },
    ],
  },
  "intrador": {
    intro: {
      nl: "Een inspectie-app voor machinedealers, met AI en machine learning die de gegevens van inspecteurs controleren. Knap, maar niet in één zin uit te leggen. Daarom maakten we er animaties van.",
      en: "An inspection app for machinery dealers, with AI and machine learning that validate inspectors' data. Clever, but not something you explain in one sentence. So we turned it into animations.",
    },
    chapters: [
      {
        title: { nl: "Het begon op papier.", en: "It started on paper." },
        body: [
          {
            nl: "Intrador is een Nederlandse tech-start-up met een inspectie-app voor machinedealers wereldwijd. We ontwierpen en maakten meerdere animaties die de technologie en de functies concreet maken. Het begon met een schets: de app, de database, de GPS-locatie en de modellen die alles controleren.",
            en: "Intrador is a Dutch tech start-up with an inspection app for machinery dealers worldwide. We designed and produced several animations that make the technology and features concrete. It started with a sketch: the app, the database, the GPS location and the models that check everything.",
          },
        ],
      },
      {
        title: { nl: "Een vaste partner in beeld.", en: "A regular partner on screen." },
        body: [
          {
            nl: "Daarna volgden ontwerp en animatie, tot de eindmontage. Jarenlang waren we de vaste partner van Intrador voor video en animatie in B2B-marketing en bedrijfspresentaties.",
            en: "Design and animation followed, through to the final edit. For years we were Intrador's regular partner for video and animation in B2B marketing and company presentations.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Wat je niet kunt zien, kun je wel laten zien.", en: "What you can't see, you can still show." },
    ],
  },
  "hylofit": {
    intro: {
      nl: "Hardware en een app die de hartslag van paard én ruiter meten. Voor Hylofit uit New York maakten we één video die overtuigt en tegelijk uitlegt.",
      en: "Hardware and an app that measure the heart rate of horse and rider. For Hylofit from New York we made one video that persuades and explains at the same time.",
    },
    chapters: [
      {
        title: { nl: "Nieuw in een traditionele wereld.", en: "New in a traditional world." },
        body: [
          {
            nl: "Hylofit ontwikkelde een systeem dat de hartslag van paard en ruiter meet, voor inzicht in rijprestaties. Geavanceerd, zeker in de vrij traditionele paardenwereld. De vraag was dus tweeledig: overtuigen én uitleggen.",
            en: "Hylofit developed a system that measures the heart rate of horse and rider, for insight into riding performance. Advanced, especially in the fairly traditional equestrian world. So the brief was twofold: persuade and explain.",
          },
        ],
      },
      {
        title: { nl: "Promo en handleiding in één.", en: "Promo and manual in one." },
        body: [
          {
            nl: "We maakten één video die allebei doet. Eerst de sterke punten van het product, daarna een heldere instructie om Hylofit stap voor stap in te stellen. Met echte beelden en 2D- en 3D-animaties, en een eindresultaat waar we trots op zijn.",
            en: "We made one video that does both. First the product's strengths, then a clear walkthrough for setting up Hylofit step by step. With real footage and 2D and 3D animation, and an end result we're proud of.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een goede uitleg is ook goede reclame.", en: "A good explanation is good advertising too." },
    ],
  },
  "repairlab-content": {
    intro: {
      nl: "Na het nieuwe merk moest Repairlab ook online te zien zijn, overal waar klanten scrollen. Zwart, wit en een korte boodschap: meer had het niet nodig.",
      en: "After the new brand, Repairlab had to show up online too, wherever customers scroll. Black, white and a short message: it needed nothing more.",
    },
    chapters: [
      {
        title: { nl: "Het merk de feed in.", en: "Taking the brand into the feed." },
        body: [
          {
            nl: "Na het brandingtraject voor Repairlab moest het nieuwe merk ook online zichtbaar worden. Op Instagram, op LinkedIn, overal waar klanten scrollen. Herkenbaar in een fractie van een seconde.",
            en: "After the branding project for Repairlab, the new brand had to become visible online too. On Instagram, on LinkedIn, wherever customers scroll. Recognisable in a split second.",
          },
        ],
      },
      {
        title: { nl: "Vlak, zwart-wit en direct.", en: "Flat, black-and-white and direct." },
        body: [
          {
            nl: "We maakten een collectie banners en posts, van Instagram-swipeposts tot LinkedIn-covers. De basis is steeds hetzelfde: vlakke achtergronden in zwart en wit en een simpele, directe boodschap. Zo sluit elke post aan op de nieuwe huisstijl.",
            en: "We created a collection of banners and posts, from Instagram carousel posts to LinkedIn covers. The basis is always the same: flat black and white backgrounds and a simple, direct message. Every post fits the new identity.",
          },
        ],
      },
    ],
    statements: [
      { nl: "In een feed wint de kortste boodschap.", en: "In a feed, the shortest message wins." },
    ],
  },
  "sparked": {
    intro: {
      nl: "Gastvrijheid draait om mensen en emotie. Voor Sparked maakten we een merk met een vonk, en een brandbook waarmee het hele team verder kan.",
      en: "Hospitality is about people and emotion. For Sparked we created a brand with a spark, and a brandbook the whole team can work with.",
    },
    chapters: [
      {
        title: { nl: "Een merk met een vonk.", en: "A brand with a spark." },
        body: [
          {
            nl: "Sparked is een Nederlands bedrijf in hospitalitydiensten. Alles draait om gastvrijheid, mensen en emotie. Het merk moest dus een sprankje laten zien, en in het logo zit letterlijk een bliksemschicht.",
            en: "Sparked is a Dutch hospitality services company. Everything revolves around hospitality, people and emotion. So the brand had to show a spark, and the logo literally contains a lightning bolt.",
          },
        ],
      },
      {
        title: { nl: "Meer dan een logo.", en: "More than a logo." },
        body: [
          {
            nl: "We ontwikkelden een identiteit die verder gaat dan een logo en wat kleuren. In het brandbook staat alles over de identiteit, en over hoe Sparked met klanten communiceert. Van de tone of voice tot zinnen als 'Jouw moment. Onze passie.'",
            en: "We developed an identity that goes beyond a logo and a few colours. The brandbook covers everything about the identity, and about how Sparked communicates with clients. From the tone of voice to lines like 'Your moment. Our passion.'",
          },
        ],
      },
    ],
    statements: [
      { nl: "Gastvrijheid begint bij hoe je praat.", en: "Hospitality starts with how you speak." },
    ],
  },
  "happy-horse-sales": {
    intro: {
      nl: "Happy horses deserve happy owners. Happy Horse Sales verkoopt dressuurpaarden met oog voor de match tussen koper en paard, en wilde elk paard zo eerlijk en mooi mogelijk laten zien.",
      en: "Happy horses deserve happy owners. Happy Horse Sales sells dressage horses with an eye for the match between buyer and horse, and wanted to show every horse as honestly and beautifully as possible.",
    },
    chapters: [
      {
        title: { nl: "Verhalen en paarden.", en: "Stories and horses." },
        body: [
          {
            nl: "Bij Happy Horse Sales draait het om verhalen en paarden. Ze geloven in kwalitatieve verkoop, met een goede match tussen koper en paard. Dus moest elk paard eerlijk en mooi in beeld komen.",
            en: "At Happy Horse Sales it's all about stories and horses. They believe in quality sales, with a good match between buyer and horse. So every horse had to be shown honestly and beautifully.",
          },
        ],
      },
      {
        title: { nl: "Het paard centraal.", en: "The horse at the centre." },
        body: [
          {
            nl: "We ontwierpen het logo en een moderne, lichte website die de paarden en hun verhaal centraal zet. Via een CMS beheert Happy Horse Sales de collectie zelf. Zo helpt de site kopers de juiste match te vinden.",
            en: "We designed the logo and a modern, light website that puts the horses and their stories first. Through a CMS, Happy Horse Sales manages the collection itself. The site helps buyers find the right match.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Eerlijk in beeld is ook mooi in beeld.", en: "Honest on screen is beautiful on screen." },
    ],
  },
  "smarthome-services": {
    intro: {
      nl: "Je komt thuis, het licht gaat aan, je playlist start en de grill warmt alvast op. Smarthome Services maakt het mogelijk. Wij maakten het begrijpelijk.",
      en: "You come home, the lights switch on, your playlist starts and the grill is already warming up. Smarthome Services makes it happen. We made it easy to understand.",
    },
    chapters: [
      {
        title: { nl: "Slim klinkt abstract.", en: "Smart sounds abstract." },
        body: [
          {
            nl: "Smarthome Services installeert slimme IoT-producten voor thuis. Maar een slim huis klinkt abstract. Ze wilden potentiële klanten laten zien wat het in het echt betekent.",
            en: "Smarthome Services installs smart IoT products for the home. But a smart home sounds abstract. They wanted to show potential customers what it means in real life.",
          },
        ],
      },
      {
        title: { nl: "Scenario's in plaats van specificaties.", en: "Scenarios, not specifications." },
        body: [
          {
            nl: "We ontwierpen en bouwden een informatie- en belevingsplatform met echte scenario's. Neem de voordeur: je komt binnen, de verlichting gaat vanzelf aan, je Spotify-playlist start en de grill warmt alvast op. Eigen infographics leggen elke stap uit.",
            en: "We designed and built an information and experience platform around real scenarios. Take the front door: you walk in, the lights come on by themselves, your Spotify playlist starts and the grill warms up. Custom infographics explain every step.",
          },
          {
            nl: "Met een CMS houdt het team de site zelf bij. Zo werkt de website als leadkanaal voor Smarthome Services.",
            en: "With a CMS, the team keeps the site up to date itself. The website works as a lead channel for Smarthome Services.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Laat zien wat het doet, niet wat het is.", en: "Show what it does, not what it is." },
    ],
  },
  "supernova-techniek": {
    intro: {
      nl: "Elektrotechniek uit Amsterdam, met een website die er professioneel uitziet en toch net even anders is. Supernova Techniek durfde voor paars te gaan.",
      en: "Electrical engineering from Amsterdam, with a website that looks professional and is still just a little different. Supernova Techniek dared to go purple.",
    },
    chapters: [
      {
        title: { nl: "Professioneel én opvallend.", en: "Professional and striking." },
        body: [
          {
            nl: "Supernova Techniek is een Amsterdams bedrijf in elektrotechniek. Ze wilden een website die er niet alleen professioneel uitziet, maar ook opvalt. Voor zakelijke partners én voor nieuwe medewerkers.",
            en: "Supernova Techniek is an Amsterdam electrical engineering company. They wanted a website that doesn't just look professional, but also stands out. For business partners and for new employees alike.",
          },
        ],
      },
      {
        title: { nl: "Een uitgesproken paars.", en: "A bold purple." },
        body: [
          {
            nl: "We gingen uit van de kernwaarden en de propositie, bepaalden de tone of voice en kwamen uit op een professioneel maar uitgesproken paars webdesign. Vacatures en projecten hebben een eigen plek. Via een CMS beheert Supernova de inhoud zelf.",
            en: "We started from the core values and the proposition, defined the tone of voice and arrived at a professional yet outspoken purple web design. Vacancies and projects have their own place. Through a CMS, Supernova manages the content itself.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Opvallen mag, als het klopt met wie je bent.", en: "Standing out is fine, as long as it's true to who you are." },
    ],
  },
  "esmailly-bouw": {
    intro: {
      nl: "Renovatie en nieuwbouw, groot of klein, rond Amsterdam en Utrecht. Esmailly Bouw wilde een website die laat zien wie ze zijn en wat ze kunnen.",
      en: "Renovation and new builds, big or small, around Amsterdam and Utrecht. Esmailly Bouw wanted a website that shows who they are and what they can do.",
    },
    chapters: [
      {
        title: { nl: "Twee duidelijke keuzes.", en: "Two clear choices." },
        body: [
          {
            nl: "Esmailly Bouw doet renovatie- en bouwprojecten, zakelijk en rond huis. We ontwierpen en bouwden de site in Webflow: rustig, licht en in zandtinten, met veel ruimte voor beeld. Bovenaan staan twee duidelijke keuzes: een project starten of het werk bekijken.",
            en: "Esmailly Bouw takes on renovation and building projects, commercial and residential. We designed and built the site in Webflow: calm, light and in sandy tones, with plenty of room for imagery. At the top are two clear choices: start a project or view the work.",
          },
        ],
      },
      {
        title: { nl: "Details die je voelt.", en: "Details you can feel." },
        body: [
          {
            nl: "Eigen laad- en hoveranimaties maken de site net wat levendiger. Een offerteformulier vraagt meteen naar een foto van de locatie en de gewenste periode. Met een CMS en SEO-optimalisatie heeft Esmailly Bouw een professioneel online thuis.",
            en: "Custom loading and hover animations make the site that bit more alive. A quote form asks straight away for a photo of the location and the preferred timing. With a CMS and SEO optimisation, Esmailly Bouw has a professional home online.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een bouwbedrijf mag online net zo strak afwerken als op de bouwplaats.", en: "A builder's website should be finished as neatly as its work on site." },
    ],
  },
  "perfect-people": {
    intro: {
      nl: "Arbeid voor de agrarische sector, van werving tot volledige bemiddeling. Perfect People wilde een compleet nieuwe website die hen neerzet als strategische partner.",
      en: "Labour for the agricultural sector, from recruitment to full placement. Perfect People wanted a completely new website that presents them as a strategic partner.",
    },
    chapters: [
      {
        title: { nl: "Meer dan bemiddelen.", en: "More than placement." },
        body: [
          {
            nl: "Perfect People is een full-service arbeidsbemiddelaar voor de agrarische sector. Ze wilden een compleet nieuwe website. Eén die laat zien dat ze een strategische partner zijn op het gebied van arbeid.",
            en: "Perfect People is a full-service labour agency for the agricultural sector. They wanted a completely new website. One that shows they are a strategic partner when it comes to labour.",
          },
        ],
      },
      {
        title: { nl: "Fris, groen en zelf te beheren.", en: "Fresh, green and easy to manage." },
        body: [
          {
            nl: "We ontwierpen en bouwden de site in Webflow: fris en groen, met beelden uit de sector zelf. We richtten het Webflow CMS in, zodat het team de inhoud zelf bijhoudt.",
            en: "We designed and built the site in Webflow: fresh and green, with imagery from the sector itself. We set up the Webflow CMS so the team keeps the content up to date themselves.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Een nieuwe website is een nieuwe kans om te zeggen wie je bent.", en: "A new website is a new chance to say who you are." },
    ],
  },
  "cj-privacy-legal": {
    intro: {
      nl: "Juridisch advies hoeft er niet grijs uit te zien. Voor CJ Privacy & Legal Consultancy ontwierpen we een kleurrijk logo en een huisstijl om zich mee te presenteren.",
      en: "Legal advice doesn't have to look grey. For CJ Privacy & Legal Consultancy we designed a colourful logo and an identity to present themselves with.",
    },
    chapters: [
      {
        title: { nl: "Kleur in een serieus vak.", en: "Colour in a serious field." },
        body: [
          {
            nl: "CJ Privacy & Legal Consultancy is een Nederlands juridisch adviesbureau. Het zocht een logo en een huisstijl om zich mee te presenteren. Wij kozen voor kleur, met een beeldmerk dat uit kleurvlakken is opgebouwd.",
            en: "CJ Privacy & Legal Consultancy is a Dutch legal advisory firm. It was looking for a logo and an identity to present itself with. We chose colour, with a symbol built from blocks of colour.",
          },
        ],
      },
      {
        title: { nl: "Tot op het visitekaartje.", en: "Down to the business card." },
        body: [
          {
            nl: "We ontwierpen het logo en legden de bijbehorende stijl vast in een brandbook. Tot en met de toepassing op visitekaartjes, in turquoise en oranje. Zo kan het bureau er zelf mee verder.",
            en: "We designed the logo and captured the matching style in a brandbook. Right down to the business cards, in turquoise and orange. That way the firm can carry on with it independently.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Serieus advies mag er best vrolijk uitzien.", en: "Serious advice can look cheerful too." },
    ],
  },
  "gemeente-gouda": {
    intro: {
      nl: "Nieuw beleid wordt meestal zonder veel glans gepresenteerd. Voor het Goudse Preventieakkoord mocht dat anders.",
      en: "New policy is usually presented without much shine. For Gouda's Prevention Agreement, things could be different.",
    },
    chapters: [
      {
        title: { nl: "Beleid met een gezicht.", en: "Policy with a face." },
        body: [
          {
            nl: "Gouda introduceerde begin 2021 samen met lokale partners het Preventieakkoord, om de gezondheid van inwoners te verbeteren. Een belangrijk akkoord, met veel partijen. Dat verdiende een video die mensen ook echt willen kijken.",
            en: "In early 2021 Gouda introduced the Prevention Agreement together with local partners, to improve residents' health. An important agreement, with many parties involved. It deserved a video people actually want to watch.",
          },
        ],
      },
      {
        title: { nl: "Gouda in beeld.", en: "Gouda on screen." },
        body: [
          {
            nl: "We produceerden een promotievideo met de hoogtepunten van het akkoord en quotes van partners zoals de GGD en Sport.Gouda. Met dronebeelden van de stad, ondertiteling en eigen animaties die laten zien wie er aan het woord is. Zo komen het akkoord en de partners helder en aantrekkelijk in beeld.",
            en: "We produced a promotional video with the highlights of the agreement and quotes from partners such as the GGD public health service and Sport.Gouda. With drone footage of the city, subtitles and custom animations showing who is speaking. The agreement and its partners come across clearly and attractively.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Beleid om te onthouden.", en: "Policy worth remembering." },
    ],
  },
  "giarte-tableau-dashboards": {
    intro: {
      nl: "Hoe tevreden zijn de mensen bij grote internationale bedrijven over hun IT? Voor Giarte Media Group bouwden we mee aan dashboards die het realtime laten zien.",
      en: "How satisfied are people at large international companies with their IT? For Giarte Media Group we helped build dashboards that show it in real time.",
    },
    chapters: [
      {
        title: { nl: "Tevredenheid in cijfers.", en: "Satisfaction in numbers." },
        body: [
          {
            nl: "Giarte helpt grote internationale bedrijven met IT-strategie en communicatie. Om een slimme IT-transformatie te ondersteunen, wilde Giarte realtime laten zien hoe tevreden de gebruikers van hun klanten over IT zijn.",
            en: "Giarte helps large international companies with IT strategy and communication. To support a smart IT transformation, Giarte wanted to show in real time how satisfied their clients' users are with IT.",
          },
        ],
      },
      {
        title: { nl: "Per klant op maat.", en: "Tailored to each client." },
        body: [
          {
            nl: "We hielpen bij het opbouwen van realtime dashboards in Tableau en de data warehousing erachter. Elk dashboard is afgestemd op de wensen van een grote klant, met onder meer een kaart die de cijfers per land laat zien. Zo komt de IT-tevredenheid per klant helder in beeld.",
            en: "We helped build real-time dashboards in Tableau and the data warehousing behind them. Each dashboard is tailored to the wishes of a major client, including a map showing the figures per country. That puts IT satisfaction per client clearly in view.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Data wordt pas waardevol als je het in één blik snapt.", en: "Data only becomes valuable when you get it at a glance." },
    ],
  },
  "audi-s5-coupe": {
    intro: {
      nl: "Een witte Audi S5 Coupé met een V8 die je hoort voordat je hem ziet. Daar hoort een montage bij die geluid en beweging recht doet.",
      en: "A white Audi S5 Coupé with a V8 you hear before you see it. That calls for an edit that does justice to sound and motion.",
    },
    chapters: [
      {
        title: { nl: "Rolling shots in Eindhoven.", en: "Rolling shots in Eindhoven." },
        body: [
          {
            nl: "Samen met onze filmcrew planden we draaidagen in Eindhoven, voor rolling shots van de auto in beweging. Strak in beeld, van dichtbij en op snelheid.",
            en: "Together with our film crew we planned shoot days in Eindhoven, for rolling shots of the car in motion. Sharp, up close and at speed.",
          },
        ],
      },
      {
        title: { nl: "Geluid en beeld samen.", en: "Sound and picture together." },
        body: [
          {
            nl: "In de montage brachten we uitlaatgeluid, beeld en muziek samen, zodat ze elkaar versterken. Het resultaat is een strak verpakte montage, met kippenvel als doel.",
            en: "In the edit we brought exhaust sound, picture and music together, so they reinforce each other. The result is a tightly packaged edit, with goosebumps as the goal.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Goed geluid is het halve beeld.", en: "Good sound is half the picture." },
    ],
  },
  "gender-reveal-rotterdam": {
    intro: {
      nl: "Een gender reveal aan het water in Rotterdam. Zo'n moment beleef je maar één keer, dus wil je het goed vastleggen.",
      en: "A gender reveal by the water in Rotterdam. A moment like that only happens once, so you want to capture it well.",
    },
    chapters: [
      {
        title: { nl: "Eén moment, één kans.", en: "One moment, one chance." },
        body: [
          {
            nl: "Bij een gender reveal is er geen tweede take. Alles draait om dat ene moment, en de plek aan het water maakte het extra bijzonder. We wilden het vastleggen zoals het voelde.",
            en: "At a gender reveal there's no second take. Everything revolves around that one moment, and the waterfront location made it extra special. We wanted to capture it the way it felt.",
          },
        ],
      },
      {
        title: { nl: "Drone en stabilizer.", en: "Drone and stabiliser." },
        body: [
          {
            nl: "We filmden de dag met een drone en een stabilizer, zodat je de plek en de mensen allebei goed ziet. Daarna monteerden we alles tot een aftermovie die het moment en de plek aan het water mooi vastlegt.",
            en: "We filmed the day with a drone and a stabiliser, so you see both the place and the people. Then we edited it all into an aftermovie that beautifully captures the moment and the waterfront setting.",
          },
        ],
      },
    ],
    statements: [
      { nl: "Sommige momenten verdienen meer dan een filmpje op je telefoon.", en: "Some moments deserve more than a clip on your phone." },
    ],
  },
};
