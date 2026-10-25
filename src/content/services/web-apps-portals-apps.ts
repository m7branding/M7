import type { Application, Service } from "../types";

export const service: Service = {
  slug: "web-apps-portals-apps",
  order: 3,
  title: { nl: "Web-apps, Portalen & Apps", en: "Web Apps, Portals & Apps" },
  short: { nl: "Apps & portalen", en: "Apps & portals" },
  color: "#3DF5FF",
  icon: "apps",
  mockup: "app",
  tagline: { nl: "Software people love to use.", en: "Software people love to use." },
  intro: {
    nl: "Van klantportaal en SaaS-platform tot mobiele app voor iOS en Android: wij ontwerpen en bouwen software die je processen versnelt en die je gebruikers graag gebruiken.",
    en: "From customer portal and SaaS platform to mobile app for iOS and Android: we design and build software that speeds up your processes and that your users love to use.",
  },
  description: {
    nl: "Soms past je idee of proces niet in een standaardpakket. Dan bouwen we software die precies doet wat jij nodig hebt: een klantportaal waarin klanten zelf offertes en facturen regelen, een SaaS-platform met abonnementen, een dashboard dat al je data samenbrengt of een mobiele app voor iOS en Android die je klanten elke dag gebruiken.\n\nM7 combineert sterk UX/UI-design met moderne techniek als Next.js, Supabase, React Native en Flutter. We koppelen met je bestaande systemen, zoals Odoo, HubSpot en Exact Online, bouwen betalingen in via Stripe of Mollie en publiceren je app in de App Store en Google Play. We werken in korte sprints met een werkende demo na elke sprint, zodat je altijd weet waar je staat.",
    en: "Sometimes your idea or process does not fit an off-the-shelf package. Then we build software that does exactly what you need: a customer portal where clients handle quotes and invoices themselves, a SaaS platform with subscriptions, a dashboard that brings all your data together or a mobile app for iOS and Android that your customers use every day.\n\nM7 combines strong UX/UI design with modern technology such as Next.js, Supabase, React Native and Flutter. We connect to your existing systems, such as Odoo, HubSpot and Exact Online, build in payments via Stripe or Mollie and publish your app in the App Store and Google Play. We work in short sprints with a working demo after every sprint, so you always know where you stand.",
  },
  highlights: [
    { value: "250+", label: { nl: "Klanten wereldwijd", en: "Clients worldwide" } },
    { value: "1", label: { nl: "Codebase voor iOS én Android", en: "Codebase for iOS and Android" } },
    { value: "A–Z", label: { nl: "Van idee en design tot App Store en support", en: "From idea and design to App Store and support" } },
  ],
  terms: [
    "Web-app",
    "Klantportaal",
    "Offerteportaal",
    "SaaS",
    "Mobiele app",
    "iOS",
    "Android",
    "React Native",
    "Expo",
    "Flutter",
    "Next.js",
    "Supabase",
    "Dashboards",
    "UX/UI design",
    "Prototype",
    "API-koppelingen",
    "Ledenportaal",
    "Loyaliteitsprogramma",
    "Stripe & Mollie",
    "MVP",
    "Pushnotificaties",
    "App Store & Google Play",
  ],
  tools: [
    "figma",
    "nextjs",
    "react",
    "typescript",
    "supabase",
    "postgresql",
    "nodejs",
    "expo",
    "flutter",
    "firebase",
    "stripe",
    "mollie",
    "vercel",
    "github",
    "appstore",
    "googleplay",
    "odoo",
    "hubspot",
    "make",
    "clickup",
  ],
  process: [
    {
      title: { nl: "Discovery & scoping", en: "Discovery & scoping" },
      text: {
        nl: "We brengen doelen, gebruikers, processen en bestaande systemen in kaart en bepalen samen de scope en prioriteiten.",
        en: "We map goals, users, processes and existing systems and define the scope and priorities together.",
      },
    },
    {
      title: { nl: "UX/UI & prototype", en: "UX/UI & prototype" },
      text: {
        nl: "User flows, wireframes en een klikbaar prototype in Figma. Zo test je het idee voordat er een regel code geschreven is.",
        en: "User flows, wireframes and a clickable prototype in Figma. That way you test the idea before a single line of code is written.",
      },
    },
    {
      title: { nl: "Development in sprints", en: "Development in sprints" },
      text: {
        nl: "We bouwen in korte sprints met een overzichtelijk kanbanbord en een werkende demo na elke sprint. Je ziet je product groeien.",
        en: "We build in short sprints with a clear kanban board and a working demo after every sprint. You see your product grow.",
      },
    },
    {
      title: { nl: "Testen & lancering", en: "Testing & launch" },
      text: {
        nl: "Geautomatiseerde en handmatige tests, een bètaronde met echte gebruikers en publicatie in de stores of op je eigen domein.",
        en: "Automated and manual tests, a beta round with real users and publication in the stores or on your own domain.",
      },
    },
    {
      title: { nl: "Support & doorontwikkeling", en: "Support & iteration" },
      text: {
        nl: "Monitoring, updates en beveiliging, plus nieuwe features op basis van data en feedback van je gebruikers.",
        en: "Monitoring, updates and security, plus new features based on data and feedback from your users.",
      },
    },
  ],
  chapters: [
    {
      kicker: { nl: "Fit beats fancy.", en: "Fit beats fancy." },
      h: {
        nl: "Maatwerk of standaardsoftware: wanneer laat je een app bouwen?",
        en: "Custom or off-the-shelf: when should you have software built?",
      },
      body: {
        nl: "Eerlijk is eerlijk: niet elk probleem vraagt om maatwerk. Als een standaardpakket je proces goed afdekt, is dat vaak de snelste en voordeligste keuze. En soms is een slimme [[workflow-automatisering|automatisering]] tussen je bestaande tools al genoeg. Dan bouwen we geen nieuwe software, maar leggen we de verbindingen.\n\nMaatwerk wordt interessant als je deze signalen herkent:\n- Je team typt dezelfde gegevens over in twee of drie systemen\n- Een cruciaal proces draait op een spreadsheet die maar één collega echt snapt\n- Klanten mailen of bellen voor dingen die ze prima zelf zouden kunnen regelen\n- Je werkwijze is juist je onderscheid, en geen standaardpakket kan daarin mee\n- Je hebt een idee voor een product of dienst dat nog niet bestaat\n\nDe vraag is dus niet 'kan het?', maar 'levert het genoeg op?'. Dat zoeken we samen uit in een scopingsessie, waarin we je processen, gebruikers en systemen naast elkaar leggen. Soms is het antwoord een klantportaal, soms een koppeling en soms gewoon een beter ingericht [[crm-implementatie|CRM]]. We verkopen je liever het juiste antwoord dan het grootste project.",
        en: "Let's be honest: not every problem calls for custom software. If an off-the-shelf package covers your process well, that is often the fastest and most affordable choice. And sometimes a smart [[workflow-automatisering|automation]] between your existing tools is enough. Then we do not build new software, we build the connections.\n\nCustom work becomes interesting when you recognise these signs:\n- Your team retypes the same data into two or three systems\n- A critical process runs on a spreadsheet that only one colleague truly understands\n- Customers email or call about things they could easily handle themselves\n- Your way of working is exactly what sets you apart, and no standard package can keep up\n- You have an idea for a product or service that does not exist yet\n\nSo the question is not 'can it be done?', but 'is it worth it?'. We work that out together in a scoping session, where we put your processes, users and systems side by side. Sometimes the answer is a customer portal, sometimes an integration and sometimes simply a better configured [[crm-implementatie|CRM]]. We would rather sell you the right answer than the biggest project.",
      },
      quote: {
        nl: "Een spreadsheet die maar één collega snapt, is geen systeem. Het is een risico met tabbladen.",
        en: "A spreadsheet that only one colleague understands is not a system. It is a risk with tabs.",
      },
    },
    {
      kicker: { nl: "Less, but better.", en: "Less, but better." },
      h: {
        nl: "De fouten die we het vaakst zien bij apps en portalen",
        en: "The mistakes we see most often with apps and portals",
      },
      body: {
        nl: "De meeste softwareprojecten lopen niet vast op techniek. Ze lopen vast op keuzes die in het begin te snel zijn gemaakt. De klassiekers:\n- Alles in versie één willen. Elke extra feature kost bouwtijd, testtijd en onderhoud, ook als niemand hem gebruikt\n- Bouwen zonder prototype. Een klikbaar ontwerp in Figma laat snel zien wat je anders pas na weken code ontdekt\n- Koppelingen vergeten. Een portaal dat niet praat met je boekhouding of CRM, levert vooral extra werk op\n- Geen eigenaar van de code. Staat de repository niet op jouw naam, dan zit je vast aan één partij\n- Geen plan na de lancering. Besturingssystemen, frameworks en app stores veranderen, dus software vraagt onderhoud\n\nEn dan is er nog de stille fout: denken dat gebruikers vanzelf komen. Een SaaS-platform of app heeft een heldere [[landingspaginas|landingspagina]] nodig en een plan voor [[seo-aeo-geo|vindbaarheid]], anders is het een winkel zonder uithangbord. Hetzelfde geldt voor je eigen team bij een intern portaal: zonder korte uitleg en een goede eerste indruk blijft iedereen stiekem in die oude spreadsheet werken.\n\nWie dit vooraf meeneemt, bespaart zich later een hoop uitleg, herbouw en budget.",
        en: "Most software projects do not get stuck on technology. They get stuck on choices made too quickly at the start. The classics:\n- Wanting everything in version one. Every extra feature costs build time, test time and maintenance, even if nobody uses it\n- Building without a prototype. A clickable design in Figma quickly shows what you would otherwise only discover after weeks of code\n- Forgetting integrations. A portal that does not talk to your accounting or CRM mostly creates extra work\n- Not owning the code. If the repository is not in your name, you are tied to one party\n- No plan after launch. Operating systems, frameworks and app stores keep changing, so software needs maintenance\n\nAnd then there is the quiet mistake: assuming users will turn up by themselves. A SaaS platform or app needs a clear [[landingspaginas|landing page]] and a plan for [[seo-aeo-geo|findability]], otherwise it is a shop without a sign. The same goes for your own team with an internal portal: without a short introduction and a good first impression, everyone quietly keeps working in that old spreadsheet.\n\nTake this into account early and you save yourself a lot of explaining, rebuilding and budget later on.",
      },
      quote: {
        nl: "De duurste feature is degene die niemand gebruikt.",
        en: "The most expensive feature is the one nobody uses.",
      },
    },
    {
      kicker: { nl: "Start small. Learn fast.", en: "Start small. Learn fast." },
      h: {
        nl: "Wat een app- of portaalproject van jou vraagt",
        en: "What an app or portal project asks of you",
      },
      body: {
        nl: "Over geld praten we in het voorstel. Hier gaat het over iets wat vaak vergeten wordt: jouw tijd en aandacht. Software bouw je samen, en dat merk je.\n\nReken op deze rollen aan jouw kant:\n- Een vaste product owner die knopen doorhakt en prioriteiten bewaakt\n- Feedback na elke sprintdemo, liefst binnen een paar dagen\n- Een handvol echte gebruikers voor de bètaronde\n- Teksten, beelden en gegevens die in het product moeten\n\nDat klinkt als werk, en dat is het ook. Maar het is precies het verschil tussen software die je team omarmt en software die stilletjes in een la verdwijnt. Daarom houden we het behapbaar: korte sprints, een helder kanbanbord en een MVP als eerste doel. Klein beginnen, leren, bijsturen. Gewoon doen.\n\nNa de livegang houdt het niet op. Een portaal of app hangt vaak samen met de rest van je marketing: [[marketing-automatisering-funnels|onboarding-mails en funnels]] die nieuwe gebruikers op weg helpen, of een [[ai-chatbots|AI-assistent]] die de eerste vragen opvangt. Omdat we design, development en marketing onder één dak doen, hoef jij niet tussen bureaus te pendelen en hoeft niemand jouw verhaal drie keer opnieuw te horen.",
        en: "We talk about money in the proposal. This is about something people often forget: your time and attention. Software is built together, and you will notice.\n\nExpect these roles on your side:\n- A dedicated product owner who makes decisions and guards priorities\n- Feedback after every sprint demo, ideally within a few days\n- A handful of real users for the beta round\n- Copy, images and data that need to go into the product\n\nThat sounds like work, and it is. But it is exactly the difference between software your team embraces and software that quietly ends up in a drawer. That is why we keep it manageable: short sprints, a clear kanban board and an MVP as the first goal. Start small, learn, adjust. Just get on with it.\n\nIt does not stop at launch. A portal or app often ties in with the rest of your marketing: [[marketing-automatisering-funnels|onboarding emails and funnels]] that help new users get going, or an [[ai-chatbots|AI assistant]] that handles the first questions. Because we do design, development and marketing under one roof, you do not have to shuttle between agencies and nobody needs to hear your story three times.",
      },
    },
  ],
  seo: {
    title: {
      nl: "Web-app, klantportaal of mobiele app laten ontwikkelen: zo pak je het slim aan",
      en: "Having a web app, customer portal or mobile app built: the smart way",
    },
    sections: [
      {
        h: { nl: "Web-app, portaal of mobiele app: wat heb je nodig?", en: "Web app, portal or mobile app: what do you need?" },
        body: {
          nl: "Niet elk idee hoort in de App Store. Een web-app draait in de browser, werkt op elk apparaat en is ideaal voor portalen, dashboards en SaaS-platformen waar mensen achter een laptop zitten. Een mobiele app voor iOS en Android is sterk als je gebruikers onderweg wilt bereiken: met pushnotificaties, camera, locatie of offline gebruik. Een Progressive Web App (PWA) zit daar tussenin. Dat is een web-app die je op je beginscherm zet en die aanvoelt als een app.\n\nWe beginnen dus niet bij techniek, maar bij een simpele vraag: wat moeten je gebruikers kunnen, en hoe vaak doen ze dat? Op basis daarvan kiezen we de vorm die het meeste oplevert voor je budget. Vaak is de slimste route een web-app als basis, met later een mobiele app op dezelfde backend en database. Eerst lopen, dan rennen. En nooit een app bouwen alleen omdat de concurrent er ook een heeft.",
          en: "Not every idea belongs in the App Store. A web app runs in the browser, works on any device and is ideal for portals, dashboards and SaaS platforms where people sit behind a laptop. A mobile app for iOS and Android is strong when you want to reach users on the go: with push notifications, camera, location or offline use. A Progressive Web App (PWA) sits in between. That is a web app you add to your home screen and that feels like an app.\n\nSo we do not start with technology, but with a simple question: what do your users need to do, and how often do they do it? Based on that we choose the form that delivers the most for your budget. Often the smartest route is a web app as the foundation, with a mobile app later on the same backend and database. Walk first, then run. And never build an app just because your competitor has one.",
        },
      },
      {
        h: { nl: "Wat kun je laten bouwen?", en: "What can you have built?" },
        body: {
          nl: "Kort gezegd: software die een concreet probleem oplost. Geen speeltje, maar gereedschap. Een greep uit wat we bouwen:\n- Klantportalen waarin klanten offertes accepteren, facturen downloaden en orders volgen\n- Offerte- en facturatieportalen die praten met je boekhouding\n- SaaS-platformen met abonnementen, teams en gebruikersbeheer\n- Mobiele apps voor iOS en Android, van service-app tot community\n- Dashboards en interne tools die processen versnellen\n- Leden- en loyaliteitsportalen voor verenigingen, bonden en merken\n\nElk project is maatwerk, maar we vinden het wiel niet elke keer opnieuw uit. Inloggen, rollen en rechten, betalingen, notificaties en koppelingen bouwen we op bewezen bouwstenen. Dat scheelt tijd en geld, en die steken we liever in het stuk dat jou onderscheidt. Want daar draait het om: niemand kiest voor jouw portaal vanwege een mooi inlogscherm.",
          en: "In short: software that solves a concrete problem. Not a toy, a tool. A selection of what we build:\n- Customer portals where clients accept quotes, download invoices and track orders\n- Quote and invoicing portals that talk to your accounting\n- SaaS platforms with subscriptions, teams and user management\n- Mobile apps for iOS and Android, from service app to community\n- Dashboards and internal tools that speed up processes\n- Member and loyalty portals for associations, federations and brands\n\nEvery project is custom, but we do not reinvent the wheel each time. Login, roles and permissions, payments, notifications and integrations are built on proven building blocks. That saves time and money, which we would rather spend on the part that sets you apart. Because that is what counts: nobody chooses your portal for its lovely login screen.",
        },
      },
      {
        h: { nl: "Moderne techniek die van jou blijft", en: "Modern technology that stays yours" },
        body: {
          nl: "We bouwen met een moderne, breed gedragen stack. Niet omdat het hip is, maar omdat je product dan snel en veilig is en je niet vastzit aan één bureau. Ook niet aan ons:\n- Next.js, React en TypeScript voor web-apps en portalen\n- Supabase en PostgreSQL voor database, authenticatie en opslag\n- React Native met Expo of Flutter voor iOS en Android\n- Stripe en Mollie voor betalingen en abonnementen\n- Vercel en Cloudflare voor snelle, schaalbare hosting\n\nDe broncode staat in een repository waar jij eigenaar van bent, en we documenteren de architectuur. Wil je later uitbreiden, opschalen of een eigen developmentteam laten aansluiten? Dan kan dat. Beveiliging en privacy plakken we er niet achteraf op: we werken met rollen en rechten, versleutelde verbindingen en waar mogelijk hosting binnen de EU, in lijn met de AVG. Sommigen noemen dat toekomstbestendig. Wij noemen het gewoon netjes werken.",
          en: "We build with a modern, widely supported stack. Not because it is trendy, but because it keeps your product fast and secure and stops you being locked in to one agency. Including us:\n- Next.js, React and TypeScript for web apps and portals\n- Supabase and PostgreSQL for database, authentication and storage\n- React Native with Expo or Flutter for iOS and Android\n- Stripe and Mollie for payments and subscriptions\n- Vercel and Cloudflare for fast, scalable hosting\n\nThe source code lives in a repository you own, and we document the architecture. Want to extend, scale or bring in your own development team later? You can. Security and privacy are not bolted on afterwards: we work with roles and permissions, encrypted connections and EU hosting where possible, in line with the GDPR. Some call that future-proof. We call it doing the job properly.",
        },
      },
      {
        h: { nl: "Koppelingen met je bestaande systemen", en: "Integrations with your existing systems" },
        body: {
          nl: "Een app of portaal wordt pas echt waardevol als het samenwerkt met wat je al hebt. Anders bouw je er een eiland bij, en daar heb je er waarschijnlijk al genoeg van. We koppelen met CRM- en ERP-pakketten als Odoo, HubSpot, Teamleader en Pipedrive, met boekhoudsoftware als Exact Online en met webshops, betaalproviders en marketingtools.\n\nDat doen we met maatwerk API-koppelingen en webhooks, of met automatiseringsplatformen als Make en n8n als dat sneller en voordeliger is. Klantgegevens, orders, facturen en statusupdates lopen dan vanzelf tussen je systemen heen en weer. Geen dubbel typwerk, minder fouten en altijd actuele data. Daarbovenop kunnen we [[ai-integraties|AI-functies]] inbouwen, zoals een slimme zoekfunctie, automatische samenvattingen of een assistent die vragen van gebruikers beantwoordt. Zo groeit je software mee met je organisatie, in plaats van dat je organisatie zich moet aanpassen aan je software.",
          en: "An app or portal only becomes truly valuable when it works with what you already have. Otherwise you are just adding another island, and you probably have enough of those. We connect with CRM and ERP packages such as Odoo, HubSpot, Teamleader and Pipedrive, with accounting software such as Exact Online and with web shops, payment providers and marketing tools.\n\nWe do that with custom API integrations and webhooks, or with automation platforms such as Make and n8n when that is faster and more cost-effective. Customer data, orders, invoices and status updates then move between your systems by themselves. No double typing, fewer errors and always up-to-date data. On top of that we can build in [[ai-integraties|AI features]], such as smart search, automatic summaries or an assistant that answers user questions. That way your software grows with your organisation, instead of your organisation having to adapt to your software.",
        },
      },
      {
        h: { nl: "Zo werken we: van MVP tot doorontwikkeling", en: "How we work: from MVP to continuous development" },
        body: {
          nl: "Softwareprojecten lopen mis als er maanden gebouwd wordt zonder dat iemand iets ziet. Daarom werken we agile, in korte sprints, met een overzichtelijk kanbanbord waarop je altijd ziet wat er gebeurt. Na elke sprint krijg je een werkende demo. Zo geef je vroeg feedback en sturen we samen bij, in plaats van dat je aan het eind schrikt.\n\nVaak adviseren we te starten met een MVP: de kleinste versie waarmee je echte gebruikers bedient. Je valideert je idee snel en investeert pas verder als je weet dat het werkt. Testen doen we doorlopend, met geautomatiseerde tests, handmatige controles en een bètaronde met echte gebruikers. Na de lancering, in de browser of in de App Store en Google Play, blijven we je partner voor onderhoud, beveiliging, monitoring en nieuwe features. Eén compact team voor design, development en support. Geen estafette tussen drie partijen, en dus ook geen vertaalverlies.",
          en: "Software projects go wrong when months of building go by without anyone seeing anything. That is why we work agile, in short sprints, with a clear kanban board where you can always see what is happening. After every sprint you get a working demo. So you give feedback early and we adjust course together, instead of you getting a surprise at the end.\n\nWe often advise starting with an MVP: the smallest version that serves real users. You validate your idea quickly and only invest further once you know it works. Testing is continuous, with automated tests, manual checks and a beta round with real users. After launch, in the browser or in the App Store and Google Play, we stay on as your partner for maintenance, security, monitoring and new features. One compact team for design, development and support. No relay race between three parties, so nothing gets lost in translation.",
        },
      },
    ],
  },
  faqs: [
    {
      q: { nl: "Wat kost het om een web-app of app te laten ontwikkelen?", en: "How much does it cost to develop a web app or app?" },
      a: {
        nl: "Dat hangt af van functionaliteit, het aantal schermen, koppelingen en platformen. Een compact portaal of MVP met een afgebakende scope is er vanaf enkele duizenden euro's; uitgebreide platformen met veel koppelingen, rollen en een mobiele app vragen een groter budget, vaak gefaseerd in sprints. Via onze configurator op letsgo.m7branding.com zie je indicatieve prijzen; na een scopingsessie ontvang je een voorstel op maat.",
        en: "It depends on functionality, the number of screens, integrations and platforms. A compact portal or MVP with a defined scope starts at a few thousand euros; extensive platforms with many integrations, roles and a mobile app require a larger budget, often phased in sprints. Our configurator at letsgo.m7branding.com shows indicative prices; after a scoping session you receive a tailored proposal.",
      },
    },
    {
      q: { nl: "Hoe lang duurt het ontwikkelen van een app of portaal?", en: "How long does it take to develop an app or portal?" },
      a: {
        nl: "Een MVP of compact portaal staat gemiddeld in 6 tot 12 weken live. Uitgebreidere platformen en apps bouwen we gefaseerd: na de eerste release ontwikkelen we in sprints door op basis van feedback en data. In de scopingsessie maken we een realistische planning.",
        en: "An MVP or compact portal typically goes live in 6 to 12 weeks. More extensive platforms and apps are built in phases: after the first release we keep developing in sprints based on feedback and data. In the scoping session we create a realistic timeline.",
      },
    },
    {
      q: { nl: "Web-app, native app of PWA: wat moet ik kiezen?", en: "Web app, native app or PWA: which should I choose?" },
      a: {
        nl: "Een web-app is ideaal voor portalen, dashboards en SaaS: één versie voor alle apparaten, zonder app stores. Een mobiele app is de juiste keuze als je pushnotificaties, camera, locatie, offline gebruik of een plek op het beginscherm van je klant nodig hebt. Een PWA is een tussenvorm voor wie snel en voordelig een app-gevoel wil. We adviseren op basis van je gebruikers en doelen.",
        en: "A web app is ideal for portals, dashboards and SaaS: one version for all devices, without app stores. A mobile app is the right choice if you need push notifications, camera, location, offline use or a spot on your customer's home screen. A PWA is a middle ground for those who want an app-like feel quickly and affordably. We advise based on your users and goals.",
      },
    },
    {
      q: { nl: "React Native of Flutter: wat is beter?", en: "React Native or Flutter: which is better?" },
      a: {
        nl: "Allebei zijn uitstekende frameworks om met één codebase apps voor iOS en Android te bouwen. React Native met Expo is sterk als je ook een web-app in React of Next.js hebt, omdat kennis en code deels gedeeld worden. Flutter blinkt uit in zeer custom interfaces en animaties. We kiezen op basis van je product, team en toekomstplannen.",
        en: "Both are excellent frameworks for building iOS and Android apps from one codebase. React Native with Expo is strong if you also have a web app in React or Next.js, because knowledge and code can be partly shared. Flutter excels at highly custom interfaces and animations. We choose based on your product, team and future plans.",
      },
    },
    {
      q: { nl: "Ben ik eigenaar van de broncode en de data?", en: "Do I own the source code and the data?" },
      a: {
        nl: "Ja. De broncode komt in een repository waar jij eigenaar van bent en de data staat in een database op jouw naam. Je kunt dus altijd doorontwikkelen, ook met een ander team. We leveren documentatie mee, zodat een eventuele overdracht soepel verloopt.",
        en: "Yes. The source code goes into a repository you own and the data lives in a database in your name. So you can always continue development, even with another team. We include documentation, so any handover goes smoothly.",
      },
    },
    {
      q: { nl: "Publiceren jullie de app in de App Store en Google Play?", en: "Do you publish the app in the App Store and Google Play?" },
      a: {
        nl: "Ja. We verzorgen de volledige publicatie: store-teksten, screenshots, privacy-labels, testversies via TestFlight en de review door Apple en Google. De app staat op je eigen Apple Developer- en Google Play Console-account, zodat hij van jou is. We helpen je bij het aanmaken van die accounts.",
        en: "Yes. We handle the full publication: store copy, screenshots, privacy labels, test builds via TestFlight and the review by Apple and Google. The app lives on your own Apple Developer and Google Play Console accounts, so it is yours. We help you set up those accounts.",
      },
    },
    {
      q: { nl: "Kan de software koppelen met Odoo, HubSpot of Exact Online?", en: "Can the software connect to Odoo, HubSpot or Exact Online?" },
      a: {
        nl: "Ja. We koppelen met vrijwel elk systeem dat een API heeft, zoals Odoo, HubSpot, Exact Online, Teamleader, Pipedrive, Shopify en Mollie. Afhankelijk van volume en complexiteit bouwen we een maatwerk koppeling of gebruiken we Make of n8n.",
        en: "Yes. We connect with virtually any system that has an API, such as Odoo, HubSpot, Exact Online, Teamleader, Pipedrive, Shopify and Mollie. Depending on volume and complexity we build a custom integration or use Make or n8n.",
      },
    },
    {
      q: { nl: "Is een portaal of app veilig en AVG-proof?", en: "Is a portal or app secure and GDPR-compliant?" },
      a: {
        nl: "Veiligheid en privacy nemen we vanaf het ontwerp mee: versleutelde verbindingen, rollen en rechten, tweestapsverificatie, logging en waar mogelijk hosting binnen de EU. We denken mee over dataminimalisatie en verwerkersovereenkomsten, zodat je product in lijn is met de AVG. Voor juridisch advies verwijzen we je naar een specialist.",
        en: "We build in security and privacy from the design stage: encrypted connections, roles and permissions, two-factor authentication, logging and EU hosting where possible. We help think through data minimisation and data processing agreements, so your product is in line with the GDPR. For legal advice we refer you to a specialist.",
      },
    },
    {
      q: { nl: "Wat is een MVP en waarom zou ik daarmee starten?", en: "What is an MVP and why should I start with one?" },
      a: {
        nl: "Een MVP (minimum viable product) is de kleinste versie van je product waarmee je echte gebruikers bedient. Je valideert je idee snel, leert wat gebruikers echt willen en investeert pas verder als je weet dat het werkt. We bouwen een MVP op dezelfde stack als een volwaardig product, zodat je daarna gewoon doorbouwt.",
        en: "An MVP (minimum viable product) is the smallest version of your product that serves real users. You validate your idea quickly, learn what users really want and only invest further once you know it works. We build an MVP on the same stack as a full product, so you can simply keep building afterwards.",
      },
    },
    {
      q: { nl: "Wat gebeurt er na de lancering?", en: "What happens after launch?" },
      a: {
        nl: "Software heeft onderhoud nodig: updates van frameworks en besturingssystemen, beveiliging, monitoring en hosting. Met een support- en onderhoudsafspraak regelen we dat voor je, met daarnaast ruimte voor doorontwikkeling. De kosten hangen af van de omvang van je product en hoeveel je wilt blijven bouwen.",
        en: "Software needs maintenance: framework and operating system updates, security, monitoring and hosting. With a support and maintenance agreement we take care of that, with room for further development on top. Costs depend on the size of your product and how much you want to keep building.",
      },
    },
    {
      q: { nl: "Kunnen jullie betalingen en abonnementen inbouwen?", en: "Can you build in payments and subscriptions?" },
      a: {
        nl: "Ja. Via Stripe of Mollie bouwen we eenmalige betalingen, abonnementen, proefperiodes, SEPA-incasso en automatische facturen in, met iDEAL, creditcard en andere populaire methoden. Voor digitale aankopen in mobiele apps houden we rekening met de regels van Apple en Google.",
        en: "Yes. Via Stripe or Mollie we build in one-off payments, subscriptions, trial periods, SEPA direct debit and automatic invoices, with iDEAL, credit card and other popular methods. For digital purchases in mobile apps we take Apple's and Google's rules into account.",
      },
    },
    {
      q: { nl: "Hoe verloopt de samenwerking tijdens het project?", en: "How does the collaboration work during the project?" },
      a: {
        nl: "Je hebt een vast aanspreekpunt en toegang tot een kanbanbord waarop je de voortgang volgt. We werken in korte sprints en laten na elke sprint een werkende demo zien. Zo geef je vroeg feedback, stellen we samen prioriteiten bij en weet je altijd waar je staat.",
        en: "You have a dedicated point of contact and access to a kanban board where you follow progress. We work in short sprints and show a working demo after each one. That way you give feedback early, we adjust priorities together and you always know where you stand.",
      },
    },
  ],
  metaTitle: {
    nl: "Web-app, klantportaal & app laten ontwikkelen | M7",
    en: "Web app, customer portal & mobile app development | M7",
  },
  metaDescription: {
    nl: "M7 ontwerpt en bouwt web-apps, klantportalen, SaaS-platformen en mobiele apps voor iOS en Android, met koppelingen naar Odoo, HubSpot en Exact.",
    en: "M7 designs and builds web apps, customer portals, SaaS platforms and mobile apps for iOS and Android, with integrations for Odoo, HubSpot and Exact.",
  },
  related: ["configurators-lead-tools-widgets", "ai-consultancy", "marketing-automatisering-funnels"],
  configurator: ["webapps", "apps", "crm"],
};

export const applications: Application[] = [
  {
    slug: "klantportaal",
    service: "web-apps-portals-apps",
    title: { nl: "Klantportaal", en: "Customer portal" },
    summary: {
      nl: "Een eigen online omgeving waar klanten zelf regelen wat ze nodig hebben.",
      en: "A dedicated online environment where customers take care of things themselves.",
    },
    intro: {
      nl: "Met een klantportaal geef je klanten 24/7 toegang tot hun offertes, facturen, orders, documenten en tickets. Minder mail en telefoon voor jou, meer gemak en vertrouwen voor je klant.",
      en: "With a customer portal you give clients 24/7 access to their quotes, invoices, orders, documents and tickets. Less email and phone for you, more convenience and trust for your customer.",
    },
    body: [
      {
        h: { nl: "Selfservice die tijd bespaart", en: "Self-service that saves time" },
        body: {
          nl: "Klanten willen zelf kunnen zien hoe het met hun order of dossier staat. In een klantportaal accepteren ze offertes digitaal, downloaden ze facturen, betalen ze direct via iDEAL of creditcard en volgen ze de status van hun aanvraag. Jouw team hoeft minder uit te zoeken en houdt tijd over voor het werk dat ertoe doet.",
          en: "Customers want to see for themselves how their order or case is progressing. In a customer portal they accept quotes digitally, download invoices, pay instantly via iDEAL or credit card and track the status of their request. Your team spends less time looking things up and has more time for work that matters.",
        },
      },
      {
        h: { nl: "Gekoppeld aan je systemen", en: "Connected to your systems" },
        body: {
          nl: "Een portaal staat niet op zichzelf. We koppelen het met je CRM, ERP of boekhouding, zoals Odoo, HubSpot of Exact Online, zodat gegevens automatisch synchroniseren. Met rollen en rechten bepaal je wie wat ziet, en met tweestapsverificatie en versleutelde opslag blijven gevoelige gegevens veilig.",
          en: "A portal does not stand alone. We connect it to your CRM, ERP or accounting, such as Odoo, HubSpot or Exact Online, so data synchronises automatically. With roles and permissions you decide who sees what, and with two-factor authentication and encrypted storage sensitive data stays safe.",
        },
      },
    ],
    deliverables: {
      nl: ["Analyse van processen en gebruikersrollen", "UX/UI-design van het portaal", "Inlog met rollen, rechten en 2FA", "Offerte-, factuur- en documentmodules", "Online betalen via Mollie of Stripe", "Koppelingen met CRM, ERP of boekhouding"],
      en: ["Analysis of processes and user roles", "UX/UI design of the portal", "Login with roles, permissions and 2FA", "Quote, invoice and document modules", "Online payments via Mollie or Stripe", "Integrations with CRM, ERP or accounting"],
    },
    benefits: [
      { title: { nl: "Minder handwerk", en: "Less manual work" }, text: { nl: "Klanten regelen zelf wat jij nu uitzoekt.", en: "Customers handle what you now look up." } },
      { title: { nl: "Tevreden klanten", en: "Happy customers" }, text: { nl: "Altijd inzicht, ook buiten kantoortijd.", en: "Always insight, even outside office hours." } },
      { title: { nl: "Altijd actueel", en: "Always current" }, text: { nl: "Data synchroniseert automatisch met je systemen.", en: "Data syncs automatically with your systems." } },
    ],
    tools: ["nextjs", "supabase", "mollie", "stripe", "odoo", "hubspot"],
    related: ["api-koppelingen", "dashboards", "crm-implementatie", "workflow-automatisering"],
    faqs: [
      {
        q: { nl: "Wat is het verschil tussen een klantportaal en een website?", en: "What is the difference between a customer portal and a website?" },
        a: {
          nl: "Een website is openbaar en informeert bezoekers. Een klantportaal is een beveiligde omgeving achter een login, waarin elke klant zijn eigen gegevens, documenten en acties ziet. Vaak koppelen we beide, zodat klanten vanaf je website direct inloggen.",
          en: "A website is public and informs visitors. A customer portal is a secure environment behind a login, where each customer sees their own data, documents and actions. We often connect the two, so customers log in straight from your website.",
        },
      },
      {
        q: { nl: "Kan een klantportaal offertes en facturen uit mijn boekhouding tonen?", en: "Can a customer portal show quotes and invoices from my accounting?" },
        a: {
          nl: "Ja. Via een koppeling met bijvoorbeeld Exact Online of Odoo verschijnen offertes en facturen automatisch in het portaal. Klanten accepteren en betalen direct online, en de status loopt terug naar je administratie.",
          en: "Yes. Through an integration with, for example, Exact Online or Odoo, quotes and invoices appear in the portal automatically. Customers accept and pay online right away, and the status flows back to your administration.",
        },
      },
      {
        q: { nl: "Hoe veilig is een klantportaal?", en: "How secure is a customer portal?" },
        a: {
          nl: "We bouwen met versleutelde verbindingen, rollen en rechten, tweestapsverificatie en logging, en hosten waar mogelijk binnen de EU. Zo blijven gegevens van je klanten beschermd en sluit het portaal aan op de AVG.",
          en: "We build with encrypted connections, roles and permissions, two-factor authentication and logging, and host within the EU where possible. That keeps your customers' data protected and aligns the portal with the GDPR.",
        },
      },
    ],
    metaDescription: {
      nl: "Klantportaal laten bouwen: offertes, facturen, orders en documenten op één veilige plek, gekoppeld aan Odoo, HubSpot of Exact Online.",
      en: "Customer portal development: quotes, invoices, orders and documents in one secure place, connected to Odoo, HubSpot or Exact Online.",
    },
  },
  {
    slug: "saas-platform",
    service: "web-apps-portals-apps",
    title: { nl: "SaaS-platform", en: "SaaS platform" },
    summary: {
      nl: "Van idee tot schaalbaar softwareproduct met abonnementen en gebruikersbeheer.",
      en: "From idea to scalable software product with subscriptions and user management.",
    },
    intro: {
      nl: "Heb je een idee voor software die je als dienst wilt aanbieden? We ontwerpen en bouwen SaaS-platformen met een multi-tenant architectuur, abonnementen, gebruikersbeheer en een interface waar je gebruikers graag mee werken.",
      en: "Have an idea for software you want to offer as a service? We design and build SaaS platforms with a multi-tenant architecture, subscriptions, user management and an interface your users enjoy working with.",
    },
    body: [
      {
        h: { nl: "Gebouwd om te schalen", en: "Built to scale" },
        body: {
          nl: "Een SaaS-product moet vandaag werken voor tien klanten en morgen voor duizenden. We bouwen op een moderne, bewezen stack met Next.js, TypeScript en Supabase of PostgreSQL, met een architectuur die meegroeit. Denk aan teams en organisaties, rollen en rechten, onboarding-flows, notificaties en een beheeromgeving voor jou als aanbieder.",
          en: "A SaaS product has to work for ten customers today and thousands tomorrow. We build on a modern, proven stack with Next.js, TypeScript and Supabase or PostgreSQL, with an architecture that grows along. Think of teams and organisations, roles and permissions, onboarding flows, notifications and an admin environment for you as the provider.",
        },
      },
      {
        h: { nl: "Abonnementen en betalingen ingebouwd", en: "Subscriptions and payments built in" },
        body: {
          nl: "Met Stripe Billing of Mollie regelen we abonnementen, proefperiodes, upgrades, facturen en automatische incasso. Gekoppeld aan e-mailflows voor onboarding en activatie en aan analytics, zodat je ziet hoe gebruikers je product gebruiken en waar groei zit.",
          en: "With Stripe Billing or Mollie we handle subscriptions, trial periods, upgrades, invoices and automatic direct debit. Connected to email flows for onboarding and activation and to analytics, so you see how users use your product and where the growth is.",
        },
      },
    ],
    deliverables: {
      nl: ["Productstrategie en scope", "UX/UI-design en design system", "Multi-tenant architectuur met rollen", "Abonnementen en facturatie via Stripe of Mollie", "Admin-omgeving en analytics", "Hosting, monitoring en doorontwikkeling"],
      en: ["Product strategy and scope", "UX/UI design and design system", "Multi-tenant architecture with roles", "Subscriptions and billing via Stripe or Mollie", "Admin environment and analytics", "Hosting, monitoring and ongoing development"],
    },
    benefits: [
      { title: { nl: "Schaalbaar", en: "Scalable" }, text: { nl: "Een architectuur die meegroeit met je klanten.", en: "An architecture that grows with your customers." } },
      { title: { nl: "Terugkerende omzet", en: "Recurring revenue" }, text: { nl: "Abonnementen en facturatie volledig geautomatiseerd.", en: "Subscriptions and billing fully automated." } },
      { title: { nl: "Eigen IP", en: "Your own IP" }, text: { nl: "De code en het product zijn van jou.", en: "The code and product are yours." } },
    ],
    tools: ["nextjs", "typescript", "supabase", "postgresql", "stripe", "vercel"],
    related: ["mvp-ontwikkeling", "ux-ui-app-design", "dashboards", "ai-integraties"],
    faqs: [
      {
        q: { nl: "Wat kost het om een SaaS-platform te laten bouwen?", en: "How much does it cost to build a SaaS platform?" },
        a: {
          nl: "Dat hangt sterk af van de functionaliteit. We starten bij voorkeur met een MVP, zodat je investering beperkt blijft tot de kern en je snel kunt valideren. In de configurator op letsgo.m7branding.com zie je indicatieve prijzen; na een scopingsessie ontvang je een voorstel op maat.",
          en: "It depends heavily on the functionality. We prefer to start with an MVP, so your investment is limited to the core and you can validate quickly. The configurator at letsgo.m7branding.com shows indicative prices; after a scoping session you receive a tailored proposal.",
        },
      },
      {
        q: { nl: "Wie is eigenaar van de code van mijn SaaS?", en: "Who owns the code of my SaaS?" },
        a: {
          nl: "Jij. De broncode staat in een repository waar jij eigenaar van bent, inclusief documentatie. Zo kun je later investeerders aantrekken, een eigen team opbouwen of met ons doorontwikkelen.",
          en: "You do. The source code lives in a repository you own, including documentation. That way you can attract investors later, build your own team or keep developing with us.",
        },
      },
      {
        q: { nl: "Kunnen jullie AI-functies in mijn SaaS bouwen?", en: "Can you build AI features into my SaaS?" },
        a: {
          nl: "Ja. We integreren modellen van onder meer OpenAI en Anthropic voor slimme zoekfuncties, samenvattingen, tekstgeneratie of een assistent in je product, met aandacht voor kosten, privacy en betrouwbaarheid.",
          en: "Yes. We integrate models from providers such as OpenAI and Anthropic for smart search, summaries, text generation or an assistant in your product, with attention to cost, privacy and reliability.",
        },
      },
    ],
    metaDescription: {
      nl: "SaaS-platform laten ontwikkelen door M7: schaalbare multi-tenant architectuur, abonnementen via Stripe of Mollie, sterk UX/UI-design en eigen IP.",
      en: "SaaS platform development by M7: scalable multi-tenant architecture, subscriptions via Stripe or Mollie, strong UX/UI design and your own IP.",
    },
  },
  {
    slug: "mobiele-app",
    service: "web-apps-portals-apps",
    title: { nl: "Mobiele app (iOS & Android)", en: "Mobile app (iOS & Android)" },
    summary: {
      nl: "Eén app voor iOS en Android, van ontwerp tot App Store.",
      en: "One app for iOS and Android, from design to App Store.",
    },
    intro: {
      nl: "We ontwikkelen mobiele apps voor iOS en Android met React Native (Expo) of Flutter. Eén codebase, soepele prestaties en een ontwerp dat voelt alsof het er altijd al hoorde. Inclusief publicatie in de App Store en Google Play.",
      en: "We develop mobile apps for iOS and Android with React Native (Expo) or Flutter. One codebase, smooth performance and a design that feels like it always belonged there. Including publication in the App Store and Google Play.",
    },
    body: [
      {
        h: { nl: "Cross-platform zonder concessies", en: "Cross-platform without compromise" },
        body: {
          nl: "Met React Native en Expo of Flutter bouwen we één app die op beide platformen draait, met toegang tot camera, locatie, pushnotificaties, biometrische login en offline gebruik. Dat scheelt ontwikkeltijd en onderhoudskosten ten opzichte van twee losse native apps, terwijl gebruikers een snelle, soepele app ervaren.",
          en: "With React Native and Expo or Flutter we build one app that runs on both platforms, with access to camera, location, push notifications, biometric login and offline use. That saves development time and maintenance costs compared to two separate native apps, while users enjoy a fast, smooth app.",
        },
      },
      {
        h: { nl: "Van testversie tot de stores", en: "From test build to the stores" },
        body: {
          nl: "We testen de app tijdens de ontwikkeling met echte gebruikers via TestFlight en interne testtracks. Daarna verzorgen we de publicatie: store-teksten, screenshots, privacy-labels en de review door Apple en Google. Na lancering blijven we betrokken met updates, monitoring en nieuwe features.",
          en: "During development we test the app with real users via TestFlight and internal test tracks. Then we handle publication: store copy, screenshots, privacy labels and the review by Apple and Google. After launch we stay involved with updates, monitoring and new features.",
        },
      },
    ],
    deliverables: {
      nl: ["App-concept en user flows", "UI-design voor iOS en Android", "Ontwikkeling in React Native (Expo) of Flutter", "Backend, API en beheeromgeving", "Pushnotificaties en analytics", "Publicatie in App Store en Google Play"],
      en: ["App concept and user flows", "UI design for iOS and Android", "Development in React Native (Expo) or Flutter", "Backend, API and admin environment", "Push notifications and analytics", "Publication in the App Store and Google Play"],
    },
    benefits: [
      { title: { nl: "Eén codebase", en: "One codebase" }, text: { nl: "iOS en Android tegelijk, lagere kosten.", en: "iOS and Android at once, lower costs." } },
      { title: { nl: "Native gevoel", en: "Native feel" }, text: { nl: "Snel, soepel en vertrouwd voor gebruikers.", en: "Fast, smooth and familiar for users." } },
      { title: { nl: "Direct bij je klant", en: "Right with your customer" }, text: { nl: "Op het beginscherm, met pushnotificaties.", en: "On the home screen, with push notifications." } },
    ],
    tools: ["expo", "flutter", "supabase", "firebase", "appstore", "googleplay"],
    related: ["ux-ui-app-design", "mvp-ontwikkeling", "api-koppelingen", "ledenportaal-loyaliteit"],
    faqs: [
      {
        q: { nl: "Wat kost een app laten maken?", en: "How much does it cost to have an app made?" },
        a: {
          nl: "Dat hangt af van het aantal schermen, functies als betalingen of offline gebruik, de backend en koppelingen. Een compacte app op basis van een heldere scope is beter te begroten dan je misschien denkt. In de configurator op letsgo.m7branding.com zie je indicatieve prijzen.",
          en: "It depends on the number of screens, features such as payments or offline use, the backend and integrations. A compact app based on a clear scope is easier to budget than you might think. The configurator at letsgo.m7branding.com shows indicative prices.",
        },
      },
      {
        q: { nl: "Moet ik kiezen tussen iOS en Android?", en: "Do I have to choose between iOS and Android?" },
        a: {
          nl: "Nee. Met React Native of Flutter bouwen we één app voor beide platformen. Zo bereik je al je gebruikers zonder dubbele ontwikkelkosten.",
          en: "No. With React Native or Flutter we build one app for both platforms. That way you reach all your users without doubling development costs.",
        },
      },
      {
        q: { nl: "Wie zet de app in de App Store en Google Play?", en: "Who puts the app in the App Store and Google Play?" },
        a: {
          nl: "Dat doen wij, onder je eigen Apple Developer- en Google Play Console-account, zodat de app op jouw naam staat. We helpen bij het aanmaken van de accounts en begeleiden de review.",
          en: "We do, under your own Apple Developer and Google Play Console accounts, so the app is in your name. We help create the accounts and guide the review.",
        },
      },
    ],
    metaDescription: {
      nl: "App laten maken voor iOS en Android: React Native (Expo) of Flutter, sterk UI-design, backend en publicatie in de App Store en Google Play.",
      en: "App development for iOS and Android: React Native (Expo) or Flutter, strong UI design, backend and publication in the App Store and Google Play.",
    },
  },
  {
    slug: "dashboards",
    service: "web-apps-portals-apps",
    title: { nl: "Dashboards & interne tools", en: "Dashboards & internal tools" },
    summary: {
      nl: "Al je cijfers en processen overzichtelijk op één scherm.",
      en: "All your numbers and processes clearly on one screen.",
    },
    intro: {
      nl: "Stop met exporteren, plakken en zoeken in spreadsheets. We bouwen dashboards en interne tools die data uit je systemen samenbrengen en processen eenvoudiger maken, realtime en op maat van jouw team.",
      en: "Stop exporting, pasting and searching through spreadsheets. We build dashboards and internal tools that bring together data from your systems and simplify processes, in real time and tailored to your team.",
    },
    body: [
      {
        h: { nl: "Inzicht in realtime", en: "Real-time insight" },
        body: {
          nl: "We koppelen bronnen als je CRM, webshop, boekhouding, planning en marketingtools en tonen de cijfers die ertoe doen: omzet, pipeline, voorraad, projecturen of klanttevredenheid. Met filters per team, regio of periode zie je in één oogopslag waar je staat en waar je moet bijsturen.",
          en: "We connect sources such as your CRM, web shop, accounting, planning and marketing tools and show the numbers that matter: revenue, pipeline, stock, project hours or customer satisfaction. With filters per team, region or period you see at a glance where you stand and where to adjust.",
        },
      },
      {
        h: { nl: "Van dashboard naar werkende tool", en: "From dashboard to working tool" },
        body: {
          nl: "Vaak wil je niet alleen kijken, maar ook handelen. Daarom bouwen we interne tools waarin je team direct werkt: planningen, goedkeuringsflows, voorraadbeheer of serviceaanvragen. Gekoppeld aan je bestaande systemen en, waar het helpt, aangevuld met automatiseringen via Make of n8n.",
          en: "Often you do not just want to look, but also act. That is why we build internal tools your team works in directly: planning, approval flows, stock management or service requests. Connected to your existing systems and, where it helps, supplemented with automations via Make or n8n.",
        },
      },
    ],
    deliverables: {
      nl: ["KPI-sessie en overzicht van databronnen", "Koppelingen met je databronnen", "UX/UI-design van het dashboard", "Realtime grafieken, filters en exports", "Rollen en rechten per gebruiker", "Interne workflows en automatiseringen"],
      en: ["KPI session and data source overview", "Integrations with your data sources", "UX/UI design of the dashboard", "Real-time charts, filters and exports", "Roles and permissions per user", "Internal workflows and automations"],
    },
    benefits: [
      { title: { nl: "Overzicht", en: "Overview" }, text: { nl: "Alle relevante cijfers op één plek.", en: "All relevant numbers in one place." } },
      { title: { nl: "Sneller beslissen", en: "Faster decisions" }, text: { nl: "Actuele data in plaats van verouderde exports.", en: "Current data instead of outdated exports." } },
      { title: { nl: "Minder spreadsheets", en: "Fewer spreadsheets" }, text: { nl: "Processen in één tool, zonder knip- en plakwerk.", en: "Processes in one tool, without copy-pasting." } },
    ],
    tools: ["nextjs", "supabase", "postgresql", "lookerstudio", "make", "n8n"],
    related: ["tracking-analytics", "api-koppelingen", "klantportaal", "workflow-automatisering"],
    faqs: [
      {
        q: { nl: "Waarom een maatwerk dashboard in plaats van Looker Studio of Power BI?", en: "Why a custom dashboard instead of Looker Studio or Power BI?" },
        a: {
          nl: "Standaard BI-tools zijn prima voor rapportages. Een maatwerk dashboard is interessant als je data uit veel systemen combineert, gebruikers direct moeten kunnen handelen of je het dashboard aan klanten wilt tonen. We adviseren eerlijk wat het slimst is.",
          en: "Standard BI tools are fine for reporting. A custom dashboard makes sense when you combine data from many systems, users need to take action directly or you want to show the dashboard to customers. We give honest advice on what is smartest.",
        },
      },
      {
        q: { nl: "Welke systemen kunnen jullie koppelen aan een dashboard?", en: "Which systems can you connect to a dashboard?" },
        a: {
          nl: "Vrijwel alles met een API of export: CRM's als HubSpot en Pipedrive, ERP's als Odoo, boekhoudpakketten, webshops, Google Analytics, advertentieplatformen en spreadsheets.",
          en: "Virtually anything with an API or export: CRMs such as HubSpot and Pipedrive, ERPs such as Odoo, accounting packages, web shops, Google Analytics, ad platforms and spreadsheets.",
        },
      },
      {
        q: { nl: "Is mijn data veilig in een dashboard?", en: "Is my data safe in a dashboard?" },
        a: {
          nl: "Ja. We werken met beveiligde inlog, rollen en rechten per gebruiker en versleutelde verbindingen, zodat iedereen alleen ziet wat voor hem of haar bedoeld is.",
          en: "Yes. We work with secure login, roles and permissions per user and encrypted connections, so everyone only sees what is meant for them.",
        },
      },
    ],
    metaDescription: {
      nl: "Dashboard of interne tool laten bouwen: realtime inzicht uit je CRM, webshop en boekhouding, met rollen, filters en slimme automatiseringen.",
      en: "Custom dashboard or internal tool development: real-time insight from your CRM, web shop and accounting, with roles, filters and smart automations.",
    },
  },
  {
    slug: "ux-ui-app-design",
    service: "web-apps-portals-apps",
    title: { nl: "UX/UI app design", en: "UX/UI app design" },
    summary: {
      nl: "Interfaces die intuïtief werken en er premium uitzien.",
      en: "Interfaces that work intuitively and look premium.",
    },
    intro: {
      nl: "Een app of portaal staat of valt met de gebruikservaring. We ontwerpen interfaces voor web-apps, portalen en mobiele apps die logisch werken, er premium uitzien en je gebruikers moeiteloos naar hun doel brengen.",
      en: "An app or portal stands or falls with its user experience. We design interfaces for web apps, portals and mobile apps that work logically, look premium and take your users to their goal effortlessly.",
    },
    body: [
      {
        h: { nl: "Onderzoek, flows en prototypes", en: "Research, flows and prototypes" },
        body: {
          nl: "We starten bij de gebruiker: wie is het, wat wil die bereiken en waar loopt die nu tegenaan? Met user flows, wireframes en klikbare prototypes in Figma testen we ideeën voordat er een regel code geschreven is. Dat voorkomt dure aanpassingen later en zorgt dat je bouwt wat gebruikers echt nodig hebben.",
          en: "We start with the user: who are they, what do they want to achieve and where do they get stuck today? With user flows, wireframes and clickable prototypes in Figma we test ideas before a single line of code is written. That prevents costly changes later and ensures you build what users really need.",
        },
      },
      {
        h: { nl: "Design systems waar developers blij van worden", en: "Design systems developers love" },
        body: {
          nl: "We leveren een compleet design system met componenten, states, tokens en documentatie. Daardoor bouwen developers sneller en consistenter, en blijft je product ook na tien nieuwe features herkenbaar en overzichtelijk. Ontworpen voor iOS, Android en web, met aandacht voor toegankelijkheid en dark mode.",
          en: "We deliver a complete design system with components, states, tokens and documentation. That lets developers build faster and more consistently, and keeps your product recognisable and clear even after ten new features. Designed for iOS, Android and web, with attention to accessibility and dark mode.",
        },
      },
    ],
    deliverables: {
      nl: ["Gebruikersonderzoek en interviews", "User flows en informatiearchitectuur", "Wireframes en klikbaar prototype", "UI-design voor web, iOS en Android", "Design system met componenten en tokens", "Usability-tests en iteraties"],
      en: ["User research and interviews", "User flows and information architecture", "Wireframes and clickable prototype", "UI design for web, iOS and Android", "Design system with components and tokens", "Usability tests and iterations"],
    },
    benefits: [
      { title: { nl: "Intuïtief", en: "Intuitive" }, text: { nl: "Gebruikers snappen het zonder uitleg.", en: "Users get it without explanation." } },
      { title: { nl: "Lagere ontwikkelkosten", en: "Lower development costs" }, text: { nl: "Fouten vinden in Figma, niet in code.", en: "Find mistakes in Figma, not in code." } },
      { title: { nl: "Consistent", en: "Consistent" }, text: { nl: "Een design system dat meegroeit met je product.", en: "A design system that grows with your product." } },
    ],
    tools: ["figma", "miro", "hotjar", "lottie"],
    related: ["ux-ui-webdesign", "mobiele-app", "mvp-ontwikkeling", "huisstijl"],
    faqs: [
      {
        q: { nl: "Kan ik alleen het design laten maken en zelf laten bouwen?", en: "Can I order just the design and have it built elsewhere?" },
        a: {
          nl: "Ja. We leveren een developer-ready Figma-bestand met design system, specificaties en prototypes, en ondersteunen je eigen developers bij de overdracht.",
          en: "Yes. We deliver a developer-ready Figma file with design system, specifications and prototypes, and support your own developers during the handover.",
        },
      },
      {
        q: { nl: "Hoe testen jullie of een ontwerp werkt?", en: "How do you test whether a design works?" },
        a: {
          nl: "Met klikbare prototypes laten we echte gebruikers taken uitvoeren. Al met een handvol testers vind je de grootste knelpunten, die we direct in het ontwerp oplossen.",
          en: "With clickable prototypes we have real users complete tasks. Even a handful of testers reveals the biggest pain points, which we fix in the design right away.",
        },
      },
      {
        q: { nl: "Ontwerpen jullie ook voor bestaande apps?", en: "Do you also design for existing apps?" },
        a: {
          nl: "Zeker. We starten met een UX-audit van je huidige app of portaal en verbeteren stap voor stap, of ontwerpen een complete redesign als dat meer oplevert.",
          en: "Definitely. We start with a UX audit of your current app or portal and improve step by step, or design a complete redesign if that delivers more.",
        },
      },
    ],
    metaDescription: {
      nl: "UX/UI design voor apps en portalen: gebruikersonderzoek, klikbare prototypes in Figma en een design system voor web, iOS en Android.",
      en: "UX/UI design for apps and portals: user research, clickable prototypes in Figma and a design system for web, iOS and Android.",
    },
  },
  {
    slug: "ledenportaal-loyaliteit",
    service: "web-apps-portals-apps",
    title: { nl: "Ledenportaal & loyaliteitsprogramma", en: "Member portal & loyalty programme" },
    summary: {
      nl: "Een digitale thuisbasis voor je leden, fans of vaste klanten.",
      en: "A digital home base for your members, fans or loyal customers.",
    },
    intro: {
      nl: "Of je nu een vereniging, bond, community of merk met trouwe klanten bent: met een ledenportaal of loyaliteitsapp bind je mensen aan je organisatie. Met persoonlijke content, spaarpunten, beloningen, evenementen en betalingen op één plek.",
      en: "Whether you are an association, federation, community or brand with loyal customers: a member portal or loyalty app ties people to your organisation. With personal content, points, rewards, events and payments in one place.",
    },
    body: [
      {
        h: { nl: "Alles voor je leden op één plek", en: "Everything for your members in one place" },
        body: {
          nl: "In een ledenportaal regelen leden zelf hun inschrijving, contributie, gegevens en voorkeuren. Ze vinden er exclusieve content, nieuws, documenten en evenementen, en melden zich direct aan. Voor jou betekent dat minder administratie en een actuele ledenadministratie, gekoppeld aan je CRM of boekhouding.",
          en: "In a member portal, members handle their registration, fees, details and preferences themselves. They find exclusive content, news, documents and events, and sign up instantly. For you that means less admin and an up-to-date member database, connected to your CRM or accounting.",
        },
      },
      {
        h: { nl: "Loyaliteit die voelt als een beloning", en: "Loyalty that feels like a reward" },
        body: {
          nl: "Met een loyaliteitsprogramma spaar je punten, ontgrendel je niveaus of verzilver je beloningen, in een app of web-app in je eigen merk. Pushnotificaties, persoonlijke aanbiedingen en een digitale klantenkaart maken het makkelijk om terug te komen. En jij leert je klanten beter kennen.",
          en: "With a loyalty programme customers collect points, unlock tiers or redeem rewards, in an app or web app in your own brand. Push notifications, personal offers and a digital loyalty card make it easy to come back. And you get to know your customers better.",
        },
      },
    ],
    deliverables: {
      nl: ["Concept en spelregels voor het programma", "Ledenportaal of loyaliteitsapp in je huisstijl", "Inlog, profielen en voorkeuren", "Contributie en betalingen via Mollie of Stripe", "Punten, beloningen en digitale pas", "Koppeling met CRM en e-mailmarketing"],
      en: ["Concept and rules for the programme", "Member portal or loyalty app in your brand style", "Login, profiles and preferences", "Fees and payments via Mollie or Stripe", "Points, rewards and digital pass", "Integration with CRM and email marketing"],
    },
    benefits: [
      { title: { nl: "Sterkere binding", en: "Stronger loyalty" }, text: { nl: "Leden en klanten komen vaker terug.", en: "Members and customers come back more often." } },
      { title: { nl: "Minder administratie", en: "Less admin" }, text: { nl: "Leden regelen zelf hun gegevens en betalingen.", en: "Members manage their own details and payments." } },
      { title: { nl: "Meer inzicht", en: "More insight" }, text: { nl: "Je weet wat je leden en klanten waarderen.", en: "You know what your members and customers value." } },
    ],
    tools: ["nextjs", "expo", "supabase", "mollie", "stripe", "hubspot"],
    related: ["mobiele-app", "klantportaal", "e-mailmarketing", "marketing-automation"],
    faqs: [
      {
        q: { nl: "Is een ledenportaal geschikt voor sportbonden en verenigingen?", en: "Is a member portal suitable for sports federations and associations?" },
        a: {
          nl: "Ja. Juist voor bonden en verenigingen scheelt een ledenportaal veel administratie: van inschrijvingen en contributie tot evenementen, opleidingen en communicatie met leden.",
          en: "Yes. Especially for federations and associations, a member portal saves a lot of admin: from registrations and fees to events, courses and member communication.",
        },
      },
      {
        q: { nl: "Kan een loyaliteitsprogramma koppelen met mijn webshop of kassasysteem?", en: "Can a loyalty programme connect to my web shop or POS system?" },
        a: {
          nl: "Ja. Via koppelingen met onder meer Shopify, WooCommerce of je kassasysteem worden aankopen automatisch omgezet in punten of beloningen, online en in de winkel.",
          en: "Yes. Through integrations with Shopify, WooCommerce or your POS system, among others, purchases are automatically converted into points or rewards, online and in store.",
        },
      },
      {
        q: { nl: "Hoe innen we contributie of abonnementsgelden?", en: "How do we collect membership fees or subscriptions?" },
        a: {
          nl: "Via Mollie of Stripe met iDEAL, creditcard of automatische incasso. Herinneringen en facturen gaan automatisch, en de betaalstatus is direct zichtbaar in je ledenadministratie.",
          en: "Via Mollie or Stripe with iDEAL, credit card or direct debit. Reminders and invoices go out automatically, and the payment status is instantly visible in your member database.",
        },
      },
    ],
    metaDescription: {
      nl: "Ledenportaal of loyaliteitsprogramma laten bouwen: inschrijvingen, contributie, punten en beloningen in een web-app of mobiele app in je eigen merk.",
      en: "Member portal or loyalty programme development: registrations, fees, points and rewards in a web app or mobile app in your own brand.",
    },
  },
  {
    slug: "api-koppelingen",
    service: "web-apps-portals-apps",
    title: { nl: "API-koppelingen & integraties", en: "API integrations" },
    summary: {
      nl: "Je systemen laten samenwerken, zonder dubbel werk.",
      en: "Make your systems work together, without duplicate work.",
    },
    intro: {
      nl: "Klantgegevens overtypen, orders handmatig doorzetten, facturen exporteren: dat kan slimmer. We koppelen je website, webshop, app of portaal met systemen als Odoo, HubSpot, Exact Online, Teamleader en Pipedrive, zodat data automatisch stroomt.",
      en: "Retyping customer data, manually forwarding orders, exporting invoices: there is a smarter way. We connect your website, web shop, app or portal with systems such as Odoo, HubSpot, Exact Online, Teamleader and Pipedrive, so data flows automatically.",
    },
    body: [
      {
        h: { nl: "Van no-code tot maatwerk", en: "From no-code to custom" },
        body: {
          nl: "Niet elke koppeling vraagt maatwerk. Voor veel processen zijn Make, Zapier of n8n snel en betaalbaar. Gaat het om grote volumes, complexe logica of bedrijfskritische processen? Dan bouwen we een maatwerk integratie met eigen API's, webhooks en foutafhandeling. We kiezen wat duurzaam werkt.",
          en: "Not every integration needs custom code. For many processes Make, Zapier or n8n are fast and affordable. Dealing with large volumes, complex logic or business-critical processes? Then we build a custom integration with dedicated APIs, webhooks and error handling. We choose what works sustainably.",
        },
      },
      {
        h: { nl: "Betrouwbaar en gemonitord", en: "Reliable and monitored" },
        body: {
          nl: "Een koppeling is pas goed als je er niet meer aan hoeft te denken. We bouwen logging, retries en meldingen in, zodat fouten direct zichtbaar zijn en snel opgelost worden. Met heldere documentatie weet je precies welke data waarheen gaat, en dat is ook voor de AVG prettig.",
          en: "An integration is only good when you no longer have to think about it. We build in logging, retries and alerts, so errors are visible immediately and resolved quickly. With clear documentation you know exactly which data goes where, which also helps with the GDPR.",
        },
      },
    ],
    deliverables: {
      nl: ["Inventarisatie van systemen en datastromen", "Integratie-architectuur en datamapping", "Koppelingen via API, webhooks of Make/n8n", "Synchronisatie van klanten, orders en facturen", "Logging, monitoring en foutmeldingen", "Documentatie en beheer"],
      en: ["Inventory of systems and data flows", "Integration architecture and data mapping", "Integrations via API, webhooks or Make/n8n", "Synchronisation of customers, orders and invoices", "Logging, monitoring and error alerts", "Documentation and management"],
    },
    benefits: [
      { title: { nl: "Geen dubbel werk", en: "No duplicate work" }, text: { nl: "Gegevens één keer invoeren, overal beschikbaar.", en: "Enter data once, available everywhere." } },
      { title: { nl: "Minder fouten", en: "Fewer errors" }, text: { nl: "Geen typefouten of vergeten orders meer.", en: "No more typos or forgotten orders." } },
      { title: { nl: "Realtime data", en: "Real-time data" }, text: { nl: "Alle systemen altijd up-to-date.", en: "All systems always up to date." } },
    ],
    tools: ["odoo", "hubspot", "make", "n8n", "zapier", "nodejs"],
    related: ["workflow-automatisering", "crm-implementatie", "klantportaal", "ai-integraties"],
    faqs: [
      {
        q: { nl: "Met welke systemen kunnen jullie koppelen?", en: "Which systems can you connect to?" },
        a: {
          nl: "Vrijwel elk systeem met een API: Odoo, HubSpot, Exact Online, Teamleader, Pipedrive, Shopify, WooCommerce, Mollie, Stripe en nog veel meer. Heeft een systeem geen API, dan zoeken we naar alternatieven zoals exports of webhooks.",
          en: "Virtually any system with an API: Odoo, HubSpot, Exact Online, Teamleader, Pipedrive, Shopify, WooCommerce, Mollie, Stripe and many more. If a system has no API, we look for alternatives such as exports or webhooks.",
        },
      },
      {
        q: { nl: "Wat is beter: Make of Zapier, of een maatwerk koppeling?", en: "Which is better: Make or Zapier, or a custom integration?" },
        a: {
          nl: "Make, Zapier en n8n zijn ideaal voor snelle, overzichtelijke koppelingen. Bij grote volumes, complexe logica of strenge eisen aan betrouwbaarheid is maatwerk vaak goedkoper en robuuster op de lange termijn. We adviseren per situatie.",
          en: "Make, Zapier and n8n are ideal for quick, straightforward integrations. With large volumes, complex logic or strict reliability requirements, custom code is often cheaper and more robust in the long run. We advise case by case.",
        },
      },
      {
        q: { nl: "Wat gebeurt er als een koppeling faalt?", en: "What happens when an integration fails?" },
        a: {
          nl: "We bouwen automatische retries en meldingen in. Gaat er iets mis, dan krijgen wij of jouw team direct een seintje en raakt er geen data kwijt. Met een supportafspraak lossen we het snel op.",
          en: "We build in automatic retries and alerts. If something goes wrong, we or your team are notified right away and no data gets lost. With a support agreement we fix it quickly.",
        },
      },
    ],
    metaDescription: {
      nl: "API-koppelingen laten bouwen: verbind je website, webshop of app met Odoo, HubSpot, Exact Online en meer via maatwerk of Make en n8n.",
      en: "API integration development: connect your website, web shop or app with Odoo, HubSpot, Exact Online and more via custom code or Make and n8n.",
    },
  },
  {
    slug: "mvp-ontwikkeling",
    service: "web-apps-portals-apps",
    title: { nl: "MVP-ontwikkeling", en: "MVP development" },
    summary: {
      nl: "Snel valideren met een werkend product, in plaats van eindeloos plannen.",
      en: "Validate fast with a working product, instead of endless planning.",
    },
    intro: {
      nl: "Een MVP (minimum viable product) is de kleinste versie van je product waarmee je echte gebruikers bedient en van ze leert. We helpen je scherp kiezen, ontwerpen en bouwen in korte sprints, zodat je zo snel mogelijk live bent.",
      en: "An MVP (minimum viable product) is the smallest version of your product that serves real users and lets you learn from them. We help you make sharp choices, design and build in short sprints, so you go live as soon as possible.",
    },
    body: [
      {
        h: { nl: "Scherp kiezen is het halve werk", en: "Sharp choices are half the work" },
        body: {
          nl: "In een scopingsessie bepalen we samen welk probleem je oplost, voor wie, en welke features écht nodig zijn voor versie één. Alles wat niet bijdraagt aan die eerste validatie zetten we op de roadmap. Zo blijft je investering beperkt en je focus scherp.",
          en: "In a scoping session we decide together which problem you solve, for whom, and which features are truly needed for version one. Everything that does not contribute to that first validation goes on the roadmap. That keeps your investment limited and your focus sharp.",
        },
      },
      {
        h: { nl: "Gebouwd om door te groeien", en: "Built to keep growing" },
        body: {
          nl: "Een MVP is geen wegwerpproduct. We bouwen op dezelfde moderne stack als volwaardige producten, zoals Next.js, Supabase en React Native, zodat je na validatie gewoon doorbouwt. Met analytics en feedbackmomenten in de app weet je precies wat gebruikers doen en wat de volgende sprint moet opleveren.",
          en: "An MVP is not a throwaway product. We build on the same modern stack as full products, such as Next.js, Supabase and React Native, so you can simply keep building after validation. With analytics and in-app feedback moments you know exactly what users do and what the next sprint should deliver.",
        },
      },
    ],
    deliverables: {
      nl: ["Scopingsessie en prioritering van features", "Klikbaar prototype voor validatie", "MVP als web-app of mobiele app", "Analytics en feedbackmomenten", "Lancering en eerste gebruikers", "Roadmap voor doorontwikkeling"],
      en: ["Scoping session and feature prioritisation", "Clickable prototype for validation", "MVP as a web app or mobile app", "Analytics and feedback moments", "Launch and first users", "Roadmap for further development"],
    },
    benefits: [
      { title: { nl: "Snel live", en: "Live fast" }, text: { nl: "Leren van echte gebruikers, niet van aannames.", en: "Learn from real users, not assumptions." } },
      { title: { nl: "Beperkt risico", en: "Limited risk" }, text: { nl: "Investeer pas verder als het werkt.", en: "Only invest further once it works." } },
      { title: { nl: "Investeerdersklaar", en: "Investor-ready" }, text: { nl: "Een werkend product zegt meer dan een pitchdeck.", en: "A working product says more than a pitch deck." } },
    ],
    tools: ["figma", "nextjs", "supabase", "expo", "vercel", "clickup"],
    related: ["saas-platform", "ux-ui-app-design", "mobiele-app", "ai-strategie"],
    faqs: [
      {
        q: { nl: "Hoe lang duurt het bouwen van een MVP?", en: "How long does it take to build an MVP?" },
        a: {
          nl: "Afhankelijk van de scope meestal 6 tot 12 weken, van scopingsessie tot lancering. Hoe scherper de keuzes vooraf, hoe sneller je live bent.",
          en: "Depending on the scope, usually 6 to 12 weeks, from scoping session to launch. The sharper the choices upfront, the faster you go live.",
        },
      },
      {
        q: { nl: "Wat kost een MVP laten bouwen?", en: "How much does it cost to build an MVP?" },
        a: {
          nl: "Dat hangt af van het type product en de features in versie één. Een compact MVP is er vanaf enkele duizenden euro's. In de configurator op letsgo.m7branding.com zie je indicatieve prijzen, en na de scopingsessie ontvang je een voorstel op maat.",
          en: "It depends on the type of product and the features in version one. A compact MVP starts at a few thousand euros. The configurator at letsgo.m7branding.com shows indicative prices, and after the scoping session you receive a tailored proposal.",
        },
      },
      {
        q: { nl: "Kan een MVP later uitgroeien tot een volledig product?", en: "Can an MVP grow into a full product later?" },
        a: {
          nl: "Ja, daar bouwen we hem ook voor. Omdat we vanaf dag één een schaalbare stack gebruiken, breid je je MVP stap voor stap uit tot een volwaardig platform of app.",
          en: "Yes, that is exactly what we build it for. Because we use a scalable stack from day one, you expand your MVP step by step into a full platform or app.",
        },
      },
    ],
    metaDescription: {
      nl: "MVP laten ontwikkelen door M7: scherpe scope, klikbaar prototype en een werkend product op een schaalbare stack. Snel valideren met echte gebruikers.",
      en: "MVP development by M7: sharp scope, clickable prototype and a working product on a scalable stack. Validate fast with real users.",
    },
  },
];
