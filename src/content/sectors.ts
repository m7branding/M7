import type { Sector } from "./types";

/* ============================================================
   Sectoren — één entry per slug in SECTOR_SLUGS (registry.ts),
   `image` is het brede beeld op de sectorpagina: vervang de
   tijdelijke beelden door eigen werk uit die sector zodra het er is.
   in dezelfde volgorde. Verwijzingen naar diensten en
   toepassingen zijn getypeerd: een slug die niet bestaat breekt
   de build.
   ============================================================ */

export const sectors: Sector[] = [
  /* ---------- Automotive & Mobiliteit ---------- */
  {
    slug: "automotive-mobiliteit",
    title: { nl: "Automotive & Mobiliteit", en: "Automotive & Mobility" },
    short: { nl: "Automotive", en: "Automotive" },
    icon: "car",
    image: "/media/sectors/automotive.webp",
    imagePosition: "50% 50%",
    quote: { nl: "People buy with their eyes. So we make it shine.", en: "People buy with their eyes. So we make it shine." },
    intro: {
      nl: "Van detailing en exclusieve car care tot dealers en mobiliteitsdiensten: wij geven automotive merken een online beleving die net zo strak is als het product.",
      en: "From detailing and exclusive car care to dealers and mobility services: we give automotive brands an online experience as sharp as the product itself.",
    },
    description: {
      nl: "In automotive koop je met je ogen. Klanten vergelijken online, kijken naar beeld en video en willen direct weten wat iets kost of wanneer ze terechtkunnen. M7 bouwt merken, websites en tools die die beleving vertalen naar aanvragen: van een premium huisstijl voor een detailingstudio tot een website voor rouwvervoer met een ingetogen, respectvolle uitstraling.\n\nWe combineren design met techniek. Denk aan productconfigurators waarmee klanten zelf bijvoorbeeld een uitlaatsysteem samenstellen, online boekingstools voor behandelingen en afspraken, en 3D-visualisaties en drone-video die je product of locatie laten schitteren. Met lokale SEO en gerichte campagnes zorgen we dat de juiste klanten je vinden.",
      en: "In automotive, people buy with their eyes. Customers compare online, look at images and video and want to know right away what something costs or when they can come in. M7 builds brands, websites and tools that turn that experience into enquiries: from a premium identity for a detailing studio to a website for funeral car services with a restrained, respectful look.\n\nWe combine design with technology. Think of product configurators that let customers build, for example, their own exhaust system, online booking tools for treatments and appointments, and 3D visuals and drone video that make your product or location shine. With local SEO and targeted campaigns we make sure the right customers find you.",
    },
    challenges: [
      {
        title: { nl: "Premium uitstraling online", en: "A premium look online" },
        text: {
          nl: "Je werk is high-end, maar je website laat dat niet zien. Wij combineren sterke branding met fotografie, video en 3D tot een online beleving die past bij je prijsniveau.",
          en: "Your work is high-end, but your website does not show it. We combine strong branding with photography, video and 3D into an online experience that matches your price point.",
        },
      },
      {
        title: { nl: "Complexe producten en opties", en: "Complex products and options" },
        text: {
          nl: "Uitvoeringen, varianten, onderdelen en pakketten zijn lastig uit te leggen. Met een configurator of offertecalculator stellen klanten zelf hun keuze samen en krijg jij complete aanvragen binnen.",
          en: "Trims, variants, parts and packages are hard to explain. With a configurator or quote calculator customers put together their own choice and you receive complete enquiries.",
        },
      },
      {
        title: { nl: "Planning en afspraken", en: "Scheduling and appointments" },
        text: {
          nl: "Telefoon en mail kosten veel tijd. Met een online boekingswidget plannen klanten zelf een behandeling, proefrit of afspraak in, gekoppeld aan je agenda.",
          en: "Phone calls and emails take a lot of time. With an online booking widget customers schedule a treatment, test drive or appointment themselves, synced with your calendar.",
        },
      },
      {
        title: { nl: "Lokaal gevonden worden", en: "Getting found locally" },
        text: {
          nl: "Klanten zoeken dicht bij huis. Met lokale SEO en een geoptimaliseerd Google Bedrijfsprofiel ben je zichtbaar op het moment dat ze zoeken.",
          en: "Customers search close to home. With local SEO and an optimised Google Business Profile you are visible at the moment they search.",
        },
      },
    ],
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie", "seo-aeo-geo", "content-marketing-online-ads"],
    applications: ["productconfigurator", "3d-configurator", "offerte-calculator", "boekingswidget", "webflow-website", "huisstijl", "productfotografie", "dronevideo", "3d-visualisatie", "lokale-seo"],
    faqs: [
      {
        q: { nl: "Werken jullie voor automotive bedrijven van elke omvang?", en: "Do you work for automotive companies of every size?" },
        a: {
          nl: "Ja. Van een zelfstandige detailer of car care specialist tot dealers, importeurs en mobiliteitsdiensten. We stemmen de aanpak en het budget af op je situatie en ambitie.",
          en: "Yes. From an independent detailer or car care specialist to dealers, importers and mobility services. We tailor the approach and budget to your situation and ambition.",
        },
      },
      {
        q: { nl: "Kunnen jullie een productconfigurator voor auto-onderdelen bouwen?", en: "Can you build a product configurator for car parts?" },
        a: {
          nl: "Zeker. We bouwen configurators waarmee klanten bijvoorbeeld een uitlaatsysteem, velgen of een behandelpakket samenstellen, met live prijsberekening en een aanvraag die direct in je mailbox of CRM terechtkomt.",
          en: "Definitely. We build configurators that let customers put together, for example, an exhaust system, wheels or a treatment package, with live pricing and an enquiry that lands straight in your inbox or CRM.",
        },
      },
      {
        q: { nl: "Maken jullie ook foto's en video's van voertuigen?", en: "Do you also shoot photos and videos of vehicles?" },
        a: {
          nl: "Ja. We verzorgen productfotografie, bedrijfsfilms, drone-opnames en 3D-visualisaties, zodat je voertuigen, werkplaats en resultaten op hun best in beeld komen.",
          en: "Yes. We handle product photography, corporate films, drone footage and 3D visuals, so your vehicles, workshop and results are shown at their best.",
        },
      },
      {
        q: { nl: "Kunnen klanten online een afspraak inplannen?", en: "Can customers book an appointment online?" },
        a: {
          nl: "Ja. We integreren een boekingswidget in je website, gekoppeld aan je agenda, met automatische bevestigingen en herinneringen per e-mail of WhatsApp.",
          en: "Yes. We integrate a booking widget into your website, synced with your calendar, with automatic confirmations and reminders by email or WhatsApp.",
        },
      },
    ],
    metaTitle: {
      nl: "Branding & websites voor automotive | M7",
      en: "Branding & websites for automotive | M7",
    },
    metaDescription: {
      nl: "M7 bouwt merken, websites, configurators en content voor automotive en mobiliteit: van detailing en car care tot dealers en mobiliteitsdiensten.",
      en: "M7 builds brands, websites, configurators and content for automotive and mobility: from detailing and car care to dealers and mobility services.",
    },
  },

  /* ---------- Sport & Media ---------- */
  {
    slug: "sport-media",
    title: { nl: "Sport & Media", en: "Sports & Media" },
    short: { nl: "Sport", en: "Sports" },
    icon: "trophy",
    image: "/media/sectors/sport-media.webp",
    imagePosition: "50% 45%",
    quote: { nl: "Every match deserves a stage.", en: "Every match deserves a stage." },
    intro: {
      nl: "Sportclubs, bonden, evenementen en mediaplatformen: wij bouwen merken, apps en content die fans, leden en sponsors met elkaar verbinden.",
      en: "Sports clubs, federations, events and media platforms: we build brands, apps and content that connect fans, members and sponsors.",
    },
    description: {
      nl: "Sport draait om beleving, en die beleving speelt zich steeds meer online af. Fans willen wedstrijden terugkijken, leden willen alles in één app regelen en sponsors willen zichtbaarheid die ze kunnen meten. M7 helpt sportorganisaties en mediabedrijven die verwachtingen waar te maken, van een videoplatform voor sportclubs tot websites en campagnes voor de atletieksport.\n\nWe combineren branding en web- en appontwikkeling met video, motion design en social content. Zo bouwen we platformen waar leden en fans graag terugkomen, en content die op elk kanaal energie uitstraalt. Met e-mailmarketing en automatisering houd je je community betrokken, het hele seizoen door.",
      en: "Sport is all about experience, and that experience increasingly happens online. Fans want to rewatch matches, members want to arrange everything in one app and sponsors want visibility they can measure. M7 helps sports organisations and media companies live up to those expectations, from a video platform for sports clubs to websites and campaigns for athletics.\n\nWe combine branding and web and app development with video, motion design and social content. That is how we build platforms that members and fans love coming back to, and content that radiates energy on every channel. With email marketing and automation you keep your community engaged all season long.",
    },
    challenges: [
      {
        title: { nl: "Fans en leden binden", en: "Engaging fans and members" },
        text: {
          nl: "Aandacht is vluchtig. Met een ledenportaal, app of communityplatform bied je een plek waar fans en leden steeds terugkomen.",
          en: "Attention is fleeting. With a member portal, app or community platform you offer a place fans and members keep coming back to.",
        },
      },
      {
        title: { nl: "Video op schaal", en: "Video at scale" },
        text: {
          nl: "Wedstrijden, highlights en analyses vragen om een robuust platform. Wij ontwerpen en bouwen videoplatformen en apps die werken op elk apparaat.",
          en: "Matches, highlights and analyses call for a robust platform. We design and build video platforms and apps that work on every device.",
        },
      },
      {
        title: { nl: "Content die meebeweegt", en: "Content that keeps pace" },
        text: {
          nl: "Elk weekend nieuwe momenten, elke dag nieuwe kanalen. Met social video, motion design en templates maak je snel content die past bij je merk.",
          en: "New moments every weekend, new channels every day. With social video, motion design and templates you quickly create content that fits your brand.",
        },
      },
      {
        title: { nl: "Sponsors zichtbaar maken", en: "Giving sponsors visibility" },
        text: {
          nl: "Partners willen bereik en beleving. We integreren sponsors slim in je platform, content en campagnes, met inzicht in hoe ze in beeld komen.",
          en: "Partners want reach and experience. We integrate sponsors smartly into your platform, content and campaigns, with insight into how they are seen.",
        },
      },
    ],
    services: ["web-apps-portals-apps", "branding-rebranding", "foto-video-3d-animatie", "content-marketing-online-ads", "websites-webshops", "automation-funnels"],
    applications: ["saas-platform", "mobiele-app", "ledenportaal-loyaliteit", "webflow-website", "social-video", "bedrijfsfilm", "motion-design", "social-media-marketing", "e-mailmarketing"],
    faqs: [
      {
        q: { nl: "Kunnen jullie een videoplatform voor sportclubs bouwen?", en: "Can you build a video platform for sports clubs?" },
        a: {
          nl: "Ja. We ontwerpen en ontwikkelen platformen waarop clubs en teams video kunnen uploaden, analyseren en delen, met accounts, abonnementen en een app voor iOS en Android.",
          en: "Yes. We design and develop platforms where clubs and teams can upload, analyse and share video, with accounts, subscriptions and an app for iOS and Android.",
        },
      },
      {
        q: { nl: "Werken jullie ook voor amateurclubs en verenigingen?", en: "Do you also work for amateur clubs and associations?" },
        a: {
          nl: "Zeker. Van een frisse huisstijl en een website die vrijwilligers zelf kunnen bijhouden tot een ledenportaal: we zoeken een oplossing die past bij je budget.",
          en: "Absolutely. From a fresh identity and a website volunteers can update themselves to a member portal: we find a solution that fits your budget.",
        },
      },
      {
        q: { nl: "Maken jullie ook content voor social media?", en: "Do you also create content for social media?" },
        a: {
          nl: "Ja. We produceren social video, motion graphics en templates voor wedstrijddagen, transfers en sponsoruitingen, en kunnen ook je campagnes draaien.",
          en: "Yes. We produce social video, motion graphics and templates for match days, transfers and sponsor content, and can run your campaigns too.",
        },
      },
      {
        q: { nl: "Kunnen sponsors een plek krijgen op het platform?", en: "Can sponsors get a place on the platform?" },
        a: {
          nl: "Ja. We ontwerpen ruimte voor partners in je website, app en content, bijvoorbeeld met sponsorpagina's, branded content of advertentieposities.",
          en: "Yes. We design space for partners in your website, app and content, for example with sponsor pages, branded content or ad placements.",
        },
      },
    ],
    metaTitle: {
      nl: "Branding, apps & video voor sport en media | M7",
      en: "Branding, apps & video for sports and media | M7",
    },
    metaDescription: {
      nl: "M7 bouwt merken, websites, apps, videoplatformen en social content voor sportclubs, bonden, evenementen en mediabedrijven.",
      en: "M7 builds brands, websites, apps, video platforms and social content for sports clubs, federations, events and media companies.",
    },
  },

  /* ---------- Tech, SaaS & Startups ---------- */
  {
    slug: "tech-saas-startups",
    title: { nl: "Tech, SaaS & Startups", en: "Tech, SaaS & Startups" },
    short: { nl: "Tech", en: "Tech" },
    icon: "rocket",
    image: "/media/sectors/tech-saas.webp",
    imagePosition: "50% 40%",
    quote: { nl: "Great tech deserves a brand that explains itself.", en: "Great tech deserves a brand that explains itself." },
    intro: {
      nl: "Van eerste MVP tot schaalbaar SaaS-platform: wij helpen techbedrijven en startups met een merk, product en marketing die klaar zijn voor groei.",
      en: "From first MVP to scalable SaaS platform: we help tech companies and startups with a brand, product and marketing that are ready for growth.",
    },
    description: {
      nl: "Als techbedrijf of startup moet je snel schakelen. Je product moet werken, je merk moet vertrouwen wekken bij klanten en investeerders, en je marketing moet leads opleveren voordat het budget op is. M7 is je partner voor al die onderdelen: van naamgeving en merkstrategie tot UX/UI-design, MVP-ontwikkeling en een website die je product helder uitlegt.\n\nWe werken onder meer voor SaaS-bedrijven, cybersecuritypartijen en ontwikkelaars van online inspectie-apps. Omdat strategie, design en development bij ons aan één tafel zitten, bouwen we producten die er goed uitzien én technisch kloppen. En met funnels, LinkedIn-campagnes en AI-integraties helpen we je groeien, zonder dat je team in hetzelfde tempo hoeft mee te groeien.",
      en: "As a tech company or startup you have to move fast. Your product has to work, your brand has to earn the trust of customers and investors, and your marketing has to deliver leads before the budget runs out. M7 is your partner for all of it: from naming and brand strategy to UX/UI design, MVP development and a website that explains your product clearly.\n\nWe work with SaaS companies, cyber security firms and developers of online inspection apps, among others. Because strategy, design and development sit at one table with us, we build products that look great and are technically sound. And with funnels, LinkedIn campaigns and AI integrations we help you grow, without your team having to grow at the same pace.",
    },
    challenges: [
      {
        title: { nl: "Snel naar de markt", en: "Fast time to market" },
        text: {
          nl: "Tijd is je schaarste resource. Met een strak MVP-traject valideer je je idee snel bij echte gebruikers, op een basis die later kan opschalen.",
          en: "Time is your scarcest resource. With a focused MVP project you validate your idea quickly with real users, on a foundation that can scale later.",
        },
      },
      {
        title: { nl: "Complex product, simpel verhaal", en: "Complex product, simple story" },
        text: {
          nl: "Technische producten zijn lastig uit te leggen. Wij vertalen je oplossing naar een helder merk, een overtuigende website en een pitchdeck dat blijft hangen.",
          en: "Technical products are hard to explain. We translate your solution into a clear brand, a convincing website and a pitch deck that sticks.",
        },
      },
      {
        title: { nl: "Vertrouwen opbouwen", en: "Building trust" },
        text: {
          nl: "Zeker in security en B2B-software kiezen klanten op betrouwbaarheid. Een professioneel merk en een doordachte UX zorgen dat je volwassen en betrouwbaar overkomt.",
          en: "Especially in security and B2B software, customers choose on reliability. A professional brand and well-considered UX make you come across as mature and trustworthy.",
        },
      },
      {
        title: { nl: "Schaalbare leadgeneratie", en: "Scalable lead generation" },
        text: {
          nl: "Groei vraagt om een voorspelbare stroom leads. Met salesfunnels, LinkedIn Ads, SEO en marketing automation bouwen we een systeem dat meegroeit.",
          en: "Growth calls for a predictable flow of leads. With sales funnels, LinkedIn Ads, SEO and marketing automation we build a system that grows with you.",
        },
      },
    ],
    services: ["branding-rebranding", "web-apps-portals-apps", "websites-webshops", "automation-funnels", "seo-aeo-geo", "ai-consultancy"],
    applications: ["mvp-ontwikkeling", "saas-platform", "ux-ui-app-design", "naamgeving", "merkstrategie", "webflow-website", "presentaties-pitchdecks", "salesfunnels", "linkedin-ads", "ai-integraties"],
    faqs: [
      {
        q: { nl: "Kunnen jullie een MVP voor mijn startup bouwen?", en: "Can you build an MVP for my startup?" },
        a: {
          nl: "Ja. We helpen je de kern van je product scherp te krijgen, ontwerpen de UX/UI en bouwen een werkende MVP met moderne technologie zoals Next.js en Supabase, die later kan doorgroeien naar een volwaardig platform.",
          en: "Yes. We help you sharpen the core of your product, design the UX/UI and build a working MVP with modern technology such as Next.js and Supabase, which can later grow into a full platform.",
        },
      },
      {
        q: { nl: "Waarom een Webflow-website voor een SaaS-bedrijf?", en: "Why a Webflow website for a SaaS company?" },
        a: {
          nl: "Met Webflow beheert je marketingteam zelf pagina's, blogs en landingspagina's, zonder developers nodig te hebben. Als Webflow Professional Partner bouwen we snelle, SEO-vriendelijke sites die meegroeien met je product.",
          en: "With Webflow your marketing team manages pages, blogs and landing pages itself, without needing developers. As a Webflow Professional Partner we build fast, SEO-friendly sites that grow with your product.",
        },
      },
      {
        q: { nl: "Helpen jullie ook met een pitchdeck voor investeerders?", en: "Do you also help with a pitch deck for investors?" },
        a: {
          nl: "Zeker. We ontwerpen pitchdecks die je verhaal helder en visueel sterk neerzetten, in lijn met je merk en product.",
          en: "Definitely. We design pitch decks that present your story clearly and with visual impact, in line with your brand and product.",
        },
      },
      {
        q: { nl: "Werken jullie met startups met een beperkt budget?", en: "Do you work with startups on a limited budget?" },
        a: {
          nl: "Ja. We denken mee over fasering: eerst wat nodig is om te lanceren en te valideren, daarna uitbreiden. Zo investeer je stap voor stap.",
          en: "Yes. We help you phase the work: first what is needed to launch and validate, then expand. That way you invest step by step.",
        },
      },
      {
        q: { nl: "Kunnen jullie AI in ons product integreren?", en: "Can you integrate AI into our product?" },
        a: {
          nl: "Ja. We integreren AI-functies via de API's van OpenAI, Claude of Gemini, bijvoorbeeld voor slimme zoekfuncties, samenvattingen of een assistent in je platform.",
          en: "Yes. We integrate AI features through the APIs of OpenAI, Claude or Gemini, for example for smart search, summaries or an assistant inside your platform.",
        },
      },
    ],
    metaTitle: {
      nl: "Branding, websites & apps voor tech en SaaS | M7",
      en: "Branding, websites & apps for tech and SaaS | M7",
    },
    metaDescription: {
      nl: "M7 helpt tech, SaaS en startups met naamgeving, branding, MVP-ontwikkeling, UX/UI, Webflow-websites en leadgeneratie. Klaar voor groei.",
      en: "M7 helps tech, SaaS and startups with naming, branding, MVP development, UX/UI, Webflow websites and lead generation. Ready for growth.",
    },
  },

  /* ---------- Food & Retail ---------- */
  {
    slug: "food-retail",
    title: { nl: "Food & Retail", en: "Food & Retail" },
    short: { nl: "Food & retail", en: "Food & retail" },
    icon: "basket",
    quote: { nl: "Made with love. Sold with a plan.", en: "Made with love. Sold with a plan." },
    intro: {
      nl: "Van bakker, slager en foodproducent tot winkelketen, concept store en webshop: wij zorgen dat je product er online net zo goed uitziet als in de vitrine, en dat bestellen een paar klikken is.",
      en: "From baker, butcher and food producer to retail chain, concept store and web shop: we make sure your product looks as good online as it does in the display case, and that ordering takes just a few clicks.",
    },
    description: {
      nl: "In food en retail kopen mensen met hun ogen, en vaak ook met hun buik. Een foto van een verse taart, een verpakking die opvalt of een etalage met karakter: in een paar seconden is de keuze gemaakt. M7 bouwt merken, verpakkingen, websites en webshops die dat moment pakken, van een huisstijl voor een ambachtelijke bakkerij en een etiket voor een nieuwe foodstartup tot een webshop voor glas op maat en een reparatiezaak met online afspraken.\n\nWe kijken verder dan mooi. Met vooraf bestellen en afhalen, een offertecalculator voor catering of een configurator voor maatwerk maak je kopen makkelijk. Productfotografie en korte video laten zien wat je verkoopt, lokale SEO zorgt dat de buurt je vindt en met Google Ads, Meta Ads en e-mailmarketing breng je klanten binnen én terug. Van één winkel tot een keten met filialen, en van foodtruck tot groothandel.",
      en: "In food and retail, people buy with their eyes, and often with their stomach too. A photo of a fresh cake, packaging that stands out or a shop window with character: the choice is made in seconds. M7 builds brands, packaging, websites and web shops that seize that moment, from a visual identity for an artisan bakery and a label for a new food startup to a web shop for made-to-measure glass and a repair shop with online appointments.\n\nWe look beyond pretty. With ordering ahead and collection, a quote calculator for catering or a configurator for custom work, you make buying easy. Product photography and short video show what you sell, local SEO makes sure the neighbourhood finds you, and with Google Ads, Meta Ads and email marketing you bring customers in and back again. From one shop to a chain with branches, and from food truck to wholesaler.",
    },
    challenges: [
      {
        title: { nl: "Opvallen in schap en scherm", en: "Standing out on shelf and screen" },
        text: {
          nl: "Klanten vergelijken in seconden, in de winkel en online. Een herkenbaar merk, een verpakking die opvalt en goede productbeelden maken het verschil tussen doorlopen en kopen.",
          en: "Customers compare in seconds, in store and online. A recognisable brand, packaging that stands out and good product images make the difference between walking on and buying.",
        },
      },
      {
        title: { nl: "Bestellen moet simpel", en: "Ordering should be simple" },
        text: {
          nl: "Vooraf bestellen, afhalen, bezorgen of maatwerk: als het online ingewikkeld is, pakt de klant de telefoon of haakt hij af. Met een slimme webshop, calculator of configurator is bestellen een paar klikken.",
          en: "Ordering ahead, collection, delivery or custom work: if it is complicated online, customers pick up the phone or give up. With a smart web shop, calculator or configurator, ordering takes a few clicks.",
        },
      },
      {
        title: { nl: "Gevonden worden in de buurt", en: "Getting found nearby" },
        text: {
          nl: "Veel foodzaken en winkels draaien op de buurt. Met lokale SEO en een verzorgd Google Bedrijfsprofiel ben je zichtbaar als iemand zoekt naar 'bakker in de buurt' of 'cadeauwinkel in Oss'.",
          en: "Many food businesses and shops run on their neighbourhood. With local SEO and a well-kept Google Business Profile you are visible when someone searches for 'bakery near me' or 'gift shop in Oss'.",
        },
      },
      {
        title: { nl: "Klanten laten terugkomen", en: "Bringing customers back" },
        text: {
          nl: "Een eerste aankoop is mooi, een vaste klant is beter. Met e-mail, social en slimme acties blijf je in beeld tussen twee bezoeken of bestellingen door.",
          en: "A first purchase is nice, a regular customer is better. With email, social and smart offers you stay top of mind between visits or orders.",
        },
      },
    ],
    services: ["branding-rebranding", "websites-webshops", "grafisch-ontwerp-print", "foto-video-3d-animatie", "seo-aeo-geo", "content-marketing-online-ads"],
    applications: ["webshop", "huisstijl", "verpakkingsontwerp", "productfotografie", "lokale-seo", "social-media-marketing", "google-ads", "e-mailmarketing", "offerte-calculator", "boekingswidget"],
    faqs: [
      {
        q: { nl: "Werken jullie voor kleine foodzaken én grotere retailers?", en: "Do you work for small food businesses as well as larger retailers?" },
        a: {
          nl: "Ja. Van een ambachtelijke bakker of slager met één winkel tot foodproducenten, winkelketens en webshops met duizenden producten. Voor een zelfstandige zaak beginnen we vaak klein, met een [[huisstijl|huisstijl]], een heldere website en een goed [[lokale-seo|Google Bedrijfsprofiel]]. Grotere retailers helpen we met webshops, koppelingen, campagnes en merkrichtlijnen voor alle vestigingen. We stemmen de aanpak en het budget af op waar je nu staat, en bouwen zo dat je later makkelijk kunt uitbreiden.",
          en: "Yes. From an artisan baker or butcher with one shop to food producers, retail chains and web shops with thousands of products. For an independent shop we often start small, with a [[huisstijl|visual identity]], a clear website and a solid [[lokale-seo|Google Business Profile]]. Larger retailers we help with web shops, integrations, campaigns and brand guidelines for every location. We tailor the approach and budget to where you are now, and build it so you can easily expand later.",
        },
      },
      {
        q: { nl: "Welk platform is het beste voor mijn webshop?", en: "Which platform is best for my web shop?" },
        a: {
          nl: "Dat hangt af van je assortiment, groeiplannen en bestaande systemen. Shopify is sterk in gebruiksgemak en snelle groei, WooCommerce biedt veel flexibiliteit en Webflow is ideaal voor een compact assortiment met een premium merkbeleving. Verkoop je ook in een fysieke winkel, dan kijken we hoe goed je kassasysteem koppelt. We adviseren eerlijk wat bij je past, ook als dat betekent dat je huidige [[webshop|webshop]] nog prima voldoet.",
          en: "It depends on your product range, growth plans and existing systems. Shopify is strong on ease of use and rapid growth, WooCommerce offers a lot of flexibility and Webflow is ideal for a compact range with a premium brand experience. If you also sell in a physical shop, we check how well your till system connects. We give honest advice on what suits you, even if that means your current [[webshop|web shop]] is still perfectly fine.",
        },
      },
      {
        q: { nl: "Kunnen jullie mijn webshop migreren zonder vindbaarheid te verliezen?", en: "Can you migrate my web shop without losing search visibility?" },
        a: {
          nl: "We migreren zorgvuldig, met redirects, behoud van de URL-structuur waar mogelijk en technische SEO-checks voor en na livegang. Productdata, klantaccounts en reviews nemen we mee waar het platform dat toelaat. Na de overstap houden we Search Console en je verkeer een paar weken goed in de gaten, zodat we snel kunnen bijsturen. Zo blijft je opgebouwde vindbaarheid zo goed mogelijk behouden. Meer daarover lees je bij [[website-migratie|website migratie]].",
          en: "We migrate carefully, with redirects, keeping the URL structure where possible and technical SEO checks before and after launch. Product data, customer accounts and reviews come along wherever the platform allows it. After the switch we keep a close eye on Search Console and your traffic for a few weeks, so we can adjust quickly. That way your search visibility is preserved as well as possible. Read more under [[website-migratie|website migration]].",
        },
      },
      {
        q: { nl: "Moet mijn webshop voldoen aan de European Accessibility Act?", en: "Does my web shop need to comply with the European Accessibility Act?" },
        a: {
          nl: "Voor veel webshops gelden sinds juni 2025 de toegankelijkheidseisen van de European Accessibility Act; micro-ondernemingen zijn grotendeels uitgezonderd. Twijfel je of het voor jou geldt, check dat dan even bij je branchevereniging of een jurist. Wij bouwen en verbeteren [[webshop|webshops]] met toegankelijkheid als uitgangspunt, zoals voldoende contrast, toetsenbordnavigatie, duidelijke formulieren en alt-teksten bij productfoto's. Los van de regels maakt dat bestellen voor iedereen makkelijker.",
          en: "Since June 2025 the accessibility requirements of the European Accessibility Act apply to many web shops; microenterprises are largely exempt. If you are unsure whether it applies to you, check with your trade association or a legal adviser. We build and improve [[webshop|web shops]] with accessibility as a starting point, such as sufficient contrast, keyboard navigation, clear forms and alt text on product photos. Rules aside, it makes ordering easier for everyone.",
        },
      },
      {
        q: { nl: "Verzorgen jullie ook de marketing van mijn winkel of webshop?", en: "Do you also handle marketing for my shop or web shop?" },
        a: {
          nl: "Ja. Van Google Shopping en Meta Ads tot e-mailflows, social media en lokale SEO: we zorgen voor een stroom bezoekers en houden klanten betrokken na hun eerste aankoop. Voor een foodzaak of winkel ligt de nadruk vaak op de buurt en op terugkerende klanten, voor een webshop op het rendement per campagne. We beginnen met goede tracking, zodat je ziet wat elke euro oplevert. Daarna schuiven we budget naar wat werkt, met [[google-ads|Google Ads]] en [[e-mailmarketing|e-mailmarketing]].",
          en: "Yes. From Google Shopping and Meta Ads to email flows, social media and local SEO: we drive a flow of visitors and keep customers engaged after their first purchase. For a food business or shop the focus is often on the neighbourhood and returning customers, for a web shop on the return per campaign. We start with proper tracking, so you can see what every euro delivers. Then we shift budget to what works, with [[google-ads|Google Ads]] and [[e-mailmarketing|email marketing]].",
        },
      },
    ],
    metaTitle: {
      nl: "Branding, webshops & marketing voor food en retail | M7",
      en: "Branding, web shops & marketing for food and retail | M7",
    },
    metaDescription: {
      nl: "M7 helpt bakkers, slagers, foodproducenten, cateraars, winkels en webshops met huisstijl, verpakking, webshops, lokale SEO, fotografie en campagnes.",
      en: "M7 helps bakers, butchers, food producers, caterers, shops and web shops with visual identity, packaging, web shops, local SEO, photography and campaigns.",
    },
  },

  /* ---------- Zakelijke dienstverlening ---------- */
  {
    slug: "zakelijke-dienstverlening",
    title: { nl: "Zakelijke dienstverlening", en: "Business Services" },
    short: { nl: "Dienstverlening", en: "Services" },
    icon: "briefcase",
    image: "/media/sectors/business.webp",
    imagePosition: "50% 40%",
    quote: { nl: "Serious business doesn't have to look boring.", en: "Serious business doesn't have to look boring." },
    intro: {
      nl: "Adviseurs, accountants, incassobureaus en andere dienstverleners: wij maken je expertise zichtbaar en je processen slimmer.",
      en: "Consultants, accountants, collection agencies and other service providers: we make your expertise visible and your processes smarter.",
    },
    description: {
      nl: "In de zakelijke dienstverlening verkoop je vertrouwen en expertise. Klanten moeten in één oogopslag zien waar je goed in bent, en verwachten daarna een vlotte, digitale samenwerking. M7 helpt dienstverleners met een merk en website die professionaliteit uitstralen, en met content en SEO die laten zien dat je weet waar je het over hebt.\n\nDaarnaast maken we je dienstverlening digitaal: van een klantportaal voor debiteurenbeheer tot dashboards, CRM-implementaties en automatiseringen die handwerk wegnemen. Met AI-agents en slimme workflows verwerk je aanvragen, documenten en opvolging sneller, zodat je team meer tijd heeft voor advies en klantcontact.",
      en: "In business services you sell trust and expertise. Clients need to see at a glance what you are good at, and then expect a smooth, digital collaboration. M7 helps service providers with a brand and website that radiate professionalism, and with content and SEO that show you know what you are talking about.\n\nOn top of that we digitise your services: from a client portal for debtor management to dashboards, CRM implementations and automations that remove manual work. With AI agents and smart workflows you handle requests, documents and follow-up faster, so your team has more time for advice and client contact.",
    },
    challenges: [
      {
        title: { nl: "Expertise zichtbaar maken", en: "Making expertise visible" },
        text: {
          nl: "Dienstverlening is onzichtbaar. Met een scherp merk, sterke content en SEO laat je zien waarom klanten juist voor jou moeten kiezen.",
          en: "Services are invisible. With a sharp brand, strong content and SEO you show why clients should choose you.",
        },
      },
      {
        title: { nl: "Veel handmatig werk", en: "Lots of manual work" },
        text: {
          nl: "Aanvragen, documenten en opvolging kosten veel tijd. Met workflow-automatisering en AI-agents wordt repetitief werk een flow die vanzelf loopt.",
          en: "Requests, documents and follow-up take a lot of time. With workflow automation and AI agents, repetitive work becomes a flow that runs by itself.",
        },
      },
      {
        title: { nl: "Klanten digitaal bedienen", en: "Serving clients digitally" },
        text: {
          nl: "Klanten willen altijd inzicht in hun dossier. Met een klantportaal delen ze documenten, volgen ze de status en communiceren ze veilig met je team.",
          en: "Clients want insight into their file at any time. With a client portal they share documents, track status and communicate securely with your team.",
        },
      },
      {
        title: { nl: "Leads goed opvolgen", en: "Following up leads properly" },
        text: {
          nl: "Een aanvraag die blijft liggen, is een gemiste klant. Met een goed ingericht CRM en lead nurturing volg je elke kans op het juiste moment op.",
          en: "An enquiry left waiting is a missed client. With a well-configured CRM and lead nurturing you follow up every opportunity at the right moment.",
        },
      },
    ],
    services: ["branding-rebranding", "websites-webshops", "web-apps-portals-apps", "automation-funnels", "seo-aeo-geo", "ai-consultancy"],
    applications: ["klantportaal", "dashboards", "crm-implementatie", "workflow-automatisering", "lead-nurturing", "ai-agents", "webflow-website", "huisstijl", "seo-content", "linkedin-ads"],
    faqs: [
      {
        q: { nl: "Kunnen jullie een klantportaal bouwen voor onze dienstverlening?", en: "Can you build a client portal for our services?" },
        a: {
          nl: "Ja. We bouwen portalen waarin klanten veilig inloggen, documenten uitwisselen, de status van hun dossier volgen en betalingen of afspraken regelen, bijvoorbeeld voor debiteurenbeheer of advieswerk.",
          en: "Yes. We build portals where clients log in securely, exchange documents, track the status of their file and handle payments or appointments, for example for debtor management or advisory work.",
        },
      },
      {
        q: { nl: "Hoe gaan jullie om met vertrouwelijke klantgegevens?", en: "How do you handle confidential client data?" },
        a: {
          nl: "Zorgvuldig. We werken met beveiligde verbindingen, rollen en rechten, logging en hosting bij betrouwbare partijen, en houden bij elke keuze rekening met de AVG.",
          en: "Carefully. We work with secure connections, roles and permissions, logging and hosting with reliable providers, and take the GDPR into account in every choice.",
        },
      },
      {
        q: { nl: "Welk CRM past bij een dienstverlener?", en: "Which CRM suits a service provider?" },
        a: {
          nl: "Dat hangt af van je processen en team. We werken onder meer met HubSpot, Odoo, Pipedrive en Teamleader, en adviseren welk systeem het beste aansluit bij je manier van werken.",
          en: "It depends on your processes and team. We work with HubSpot, Odoo, Pipedrive and Teamleader, among others, and advise which system best fits the way you work.",
        },
      },
      {
        q: { nl: "Hoe kan AI mijn kantoor helpen?", en: "How can AI help my firm?" },
        a: {
          nl: "Bijvoorbeeld door inkomende e-mails en documenten te sorteren, conceptantwoorden en samenvattingen voor te bereiden of interne kennis direct doorzoekbaar te maken. Je team houdt altijd de controle.",
          en: "For example by sorting incoming emails and documents, preparing draft replies and summaries or making internal knowledge instantly searchable. Your team always stays in control.",
        },
      },
    ],
    metaTitle: {
      nl: "Websites, portalen & automatisering voor dienstverleners | M7",
      en: "Websites, portals & automation for business services | M7",
    },
    metaDescription: {
      nl: "M7 helpt zakelijke dienstverleners met branding, websites, klantportalen, CRM en automatisering. Expertise zichtbaar, processen slimmer ingericht.",
      en: "M7 helps business service providers with branding, websites, client portals, CRM and automation. Expertise made visible, processes made smarter.",
    },
  },

  /* ---------- Bouw & Architectuur ---------- */
  {
    slug: "bouw-architectuur",
    title: { nl: "Bouw & Architectuur", en: "Construction & Architecture" },
    short: { nl: "Bouw", en: "Construction" },
    icon: "building",
    image: "/media/cases/koppens.webp",
    imagePosition: "50% 50%",
    quote: { nl: "Built on detail, from blueprint to browser.", en: "Built on detail, from blueprint to browser." },
    intro: {
      nl: "Aannemers, afbouwers, installateurs, architecten en prefab-bouwers: wij laten zien wat je bouwt en hoe je werkt, van de eerste schets tot de laatste kitnaad.",
      en: "Contractors, finishing trades, installers, architects and prefab builders: we show what you build and how you work, from the first sketch to the final sealant joint.",
    },
    description: {
      nl: "In de bouw verkoop je vertrouwen. Een opdrachtgever wil zien dat je dit soort werk eerder deed, dat je op tijd oplevert en dat je ploeg netjes werkt. Toch laten veel bouwbedrijven, installateurs en architecten online maar een fractie zien van wat ze kunnen. M7 helpt bouwers, afbouwers, installateurs, architecten en prefab-bouwers aan een uitstraling die net zo degelijk is als hun werk.\n\nWe maken websites met projectportfolio's, 3D-visualisaties en animaties van ontwerpen, drone-opnames van de bouwplaats en video's die vakmanschap laten zien. Daaromheen ontwerpen we huisstijlen die werken op steigerdoek, bouwbord en bus, en bouwen we offertecalculators en configurators die complete aanvragen opleveren. Met lokale SEO en employer branding vinden opdrachtgevers én vakmensen je makkelijker.",
      en: "In construction you sell trust. A client wants to see that you have done this kind of work before, that you deliver on time and that your crew works tidily. Yet many builders, installers and architects show only a fraction of what they can do online. M7 helps builders, finishing trades, installers, architects and prefab builders with a presence as solid as their work.\n\nWe create websites with project portfolios, 3D visuals and animations of designs, drone footage of the building site and videos that show craftsmanship. Around that we design identities that work on scaffold banners, site boards and vans, and build quote calculators and configurators that deliver complete enquiries. With local SEO and employer branding, both clients and tradespeople find you more easily.",
    },
    challenges: [
      {
        title: { nl: "Laten zien wat er nog niet staat", en: "Showing what is not there yet" },
        text: {
          nl: "Een ontwerp op tekening is lastig voor te stellen. Met 3D-visualisaties en animaties zien opdrachtgevers, omwonenden en de gemeente het eindresultaat.",
          en: "A design on paper is hard to imagine. With 3D visuals and animations clients, neighbours and the municipality see the end result.",
        },
      },
      {
        title: { nl: "Vakmanschap dat online verdwijnt", en: "Craftsmanship that disappears online" },
        text: {
          nl: "Je beste werk zit in een map op de telefoon van de uitvoerder. Een sterk projectportfolio met goede foto's en drone-beelden laat het spreken.",
          en: "Your best work sits in a folder on the site manager's phone. A strong project portfolio with good photos and drone footage lets it speak.",
        },
      },
      {
        title: { nl: "Aanvragen die niet compleet zijn", en: "Enquiries that are incomplete" },
        text: {
          nl: "Nabellen voor maten, foto's en wensen kost tijd. Met een offertecalculator of configurator krijg je aanvragen met alles erin.",
          en: "Calling back for measurements, photos and wishes takes time. With a quote calculator or configurator you receive enquiries with everything included.",
        },
      },
      {
        title: { nl: "Vakmensen vinden", en: "Finding tradespeople" },
        text: {
          nl: "Timmerlieden, monteurs en uitvoerders zijn schaars. Employer branding en korte video's van het echte werk laten zien waarom het bij jou goed werken is.",
          en: "Carpenters, engineers and site managers are scarce. Employer branding and short videos of the real work show why your company is a good place to work.",
        },
      },
    ],
    services: [
      "websites-webshops",
      "foto-video-3d-animatie",
      "configurators-lead-tools-widgets",
      "branding-rebranding",
      "grafisch-ontwerp-print",
      "seo-aeo-geo",
    ],
    applications: [
      "3d-visualisatie",
      "dronevideo",
      "bedrijfsfilm",
      "motion-design",
      "webflow-website",
      "huisstijl",
      "employer-branding",
      "offerte-calculator",
      "3d-configurator",
      "beurs-signing",
      "presentaties-pitchdecks",
      "lokale-seo",
    ],
    /* Mockups in de dienstentegels: eigen werk dat bij bouw past (vastgoedwerk staat bij Vastgoed & Makelaardij) */
    visuals: {
      "websites-webshops": {
        kind: "browser",
        src: "/media/sector-tiles/plenty-planet-site.webp",
        url: "plentyplanet.com",
        scroll: true,
        label: "Plenty Planet",
      },
      /* Luchtbeeld van een bedrijventerrein met zon op het dak */
      "foto-video-3d-animatie": { kind: "video", src: "/media/showcase/plentyplanet/greencorridor3.webp", label: "Plenty Planet" },
      /* Energy Property Configurator: energieontwerp voor een pand */
      "configurators-lead-tools-widgets": { kind: "browser", src: "/media/sector-tiles/steddion-configurator.webp", url: "tools.steddion.com/configurator", label: "Steddion" },
      /* Brandbook: logoconcept en logovarianten */
      "branding-rebranding": {
        kind: "book",
        left: "/media/showcase/designershouse/brandbook-05.webp",
        right: "/media/showcase/designershouse/brandbook-16.webp",
        label: "DesignersHouse",
      },
      /* Gevelsigning op het gebouw (mock-up uit het brandbook) */
      "grafisch-ontwerp-print": { kind: "photo", src: "/media/showcase/designershouse/brandbook-24.webp", label: "DesignersHouse" },
      "seo-aeo-geo": { kind: "photo", src: "/media/cases/koppens.webp", label: "Architectenbureau Koppens" },
    },
    faqs: [
      {
        q: { nl: "Maken jullie 3D-visualisaties van bouwprojecten?", en: "Do you create 3D visuals of construction projects?" },
        a: {
          nl: "Ja. Op basis van tekeningen of CAD- en BIM-modellen maken we realistische renders en animaties van exterieurs en interieurs. Die gebruik je voor de verkoop, in presentaties voor opdrachtgevers en welstand, of bij participatietrajecten met de buurt. We werken in fases: eerst het grote beeld, later de details. Zo betaal je niet voor beelden van een ontwerp dat nog verandert. Meer over de aanpak lees je bij [[3d-visualisatie|3D-visualisatie]].",
          en: "Yes. Based on drawings or CAD and BIM models we create realistic renders and animations of exteriors and interiors. You use them for sales, in presentations to clients and design review panels, or in public consultation with the neighbourhood. We work in phases: the big picture first, details later. That way you do not pay for images of a design that is still changing. Read more about the approach under [[3d-visualisatie|3D visualisation]].",
        },
      },
      {
        q: { nl: "Kunnen jullie drone-opnames maken van een bouwlocatie?", en: "Can you shoot drone footage of a building site?" },
        a: {
          nl: "Ja. We maken drone-foto's en -video's van bouwlocaties, lopende projecten en opgeleverde gebouwen, binnen de geldende regels voor dronevluchten. Rond bebouwd gebied en in gecontroleerd luchtruim vraagt dat soms extra voorbereiding of toestemming, en dat regelen we vooraf. Een vaste reeks opnames vanaf hetzelfde punt levert bovendien een mooie timelapse op, van eerste paal tot oplevering. Meer daarover lees je bij [[dronevideo|dronevideo]].",
          en: "Yes. We shoot drone photos and videos of building sites, ongoing projects and completed buildings, within the applicable drone regulations. Near built-up areas and in controlled airspace that sometimes requires extra preparation or permission, which we arrange beforehand. A fixed series of shots from the same spot also makes a great timelapse, from first pile to handover. Read more under [[dronevideo|drone video]].",
        },
      },
      {
        q: { nl: "Verzorgen jullie ook bouwborden, steigerdoeken en belettering?", en: "Do you also design site boards, scaffold banners and vehicle graphics?" },
        a: {
          nl: "Zeker. We ontwerpen bouwborden, steigerdoeken, belettering voor bussen, werkkleding en beursmaterialen in je huisstijl, en regelen desgewenst ook de productie. Het belangrijkste is dat het van afstand leesbaar is en in één oogopslag herkenbaar. Een bouwbord heeft een paar seconden, dus we houden het simpel: wie bouwt hier, wat komt er en waar vind je meer. Meer over [[beurs-signing|signing]] lees je hier.",
          en: "Definitely. We design site boards, scaffold banners, van graphics, workwear and trade-show materials in your identity, and can take care of production too. What matters most is that it is legible from a distance and recognisable at a glance. A site board gets a few seconds, so we keep it simple: who is building here, what is coming and where to find out more. Read more about [[beurs-signing|signage]] here.",
        },
      },
      {
        q: { nl: "Werken jullie voor bouwbedrijven van elke omvang?", en: "Do you work for construction companies of every size?" },
        a: {
          nl: "Ja. We werken voor zelfstandige vakmensen en kleine afbouwbedrijven, voor familiebedrijven met een vaste ploeg en voor bouwers en installateurs met meerdere vestigingen. De aanpak en het budget stemmen we af op wat je nodig hebt. Voor de één is een strakke website met lokale vindbaarheid genoeg, de ander wil een configurator, een employer-brandingcampagne en een complete huisstijl. We beginnen altijd met een eerlijk gesprek over wat het moet opleveren.",
          en: "Yes. We work for independent tradespeople and small finishing companies, for family businesses with a steady crew and for builders and installers with several branches. We tailor the approach and budget to what you need. For one company a sharp website with local visibility is enough, another wants a configurator, an employer branding campaign and a complete identity. We always start with an honest conversation about what it needs to deliver.",
        },
      },
    ],
    metaTitle: {
      nl: "Branding, 3D & websites voor bouw en architectuur | M7",
      en: "Branding, 3D & websites for construction & architecture | M7",
    },
    metaDescription: {
      nl: "M7 helpt aannemers, installateurs, architecten en prefab-bouwers met websites, 3D-visualisaties, drone-video, configurators en een sterke huisstijl.",
      en: "M7 helps contractors, installers, architects and prefab builders with websites, 3D visuals, drone video, configurators and a strong visual identity.",
    },
  },

  /* ---------- Industrie & Techniek ---------- */
  {
    slug: "industrie-techniek",
    title: { nl: "Industrie & Techniek", en: "Industry & Engineering" },
    short: { nl: "Industrie", en: "Industry" },
    icon: "factory",
    image: "/media/sectors/industrie.webp",
    imagePosition: "50% 38%",
    quote: { nl: "Complex products, made simple to choose.", en: "Complex products, made simple to choose." },
    intro: {
      nl: "Maakbedrijven, machinebouwers en technische dienstverleners: wij vertalen complexe techniek naar een helder verhaal, sterke beelden en slimme tools.",
      en: "Manufacturers, machine builders and technical service providers: we translate complex engineering into a clear story, strong visuals and smart tools.",
    },
    description: {
      nl: "Technische bedrijven maken vaak indrukwekkende producten, maar laten dat online nauwelijks zien. Websites zijn verouderd, productinformatie zit verstopt in pdf's en offertes vragen veel handwerk. M7 helpt industriële en technische bedrijven hun kennis en kwaliteit zichtbaar te maken, in Nederland en internationaal.\n\nWe bouwen meertalige websites, productconfigurators en 3D-visualisaties waarmee klanten complexe producten begrijpen en zelf samenstellen. Met klantportalen en API-koppelingen met je ERP of CRM stroomlijnen we orders en service. En met employer branding, beursmaterialen en LinkedIn-campagnes trek je zowel nieuwe klanten als technisch talent aan.",
      en: "Technical companies often make impressive products, but barely show it online. Websites are outdated, product information is hidden in PDFs and quotes take a lot of manual work. M7 helps industrial and engineering companies make their knowledge and quality visible, in the Netherlands and internationally.\n\nWe build multilingual websites, product configurators and 3D visuals that help customers understand complex products and configure them themselves. With client portals and API connections to your ERP or CRM we streamline orders and service. And with employer branding, trade-show materials and LinkedIn campaigns you attract both new customers and technical talent.",
    },
    challenges: [
      {
        title: { nl: "Complexe producten uitleggen", en: "Explaining complex products" },
        text: {
          nl: "Technische specificaties zijn moeilijk te doorgronden. Met 3D-visualisaties, animaties en infographics maak je in één oogopslag duidelijk hoe je product werkt.",
          en: "Technical specifications are hard to grasp. With 3D visuals, animations and infographics you show at a glance how your product works.",
        },
      },
      {
        title: { nl: "Maatwerk en offertes", en: "Custom work and quotes" },
        text: {
          nl: "Elke order is anders. Met een productconfigurator of 3D-configurator stellen klanten zelf hun product samen en ontvang jij complete, kloppende aanvragen.",
          en: "Every order is different. With a product configurator or 3D configurator customers configure their own product and you receive complete, accurate enquiries.",
        },
      },
      {
        title: { nl: "Internationale markten", en: "International markets" },
        text: {
          nl: "Je klanten zitten over de hele wereld. Een meertalige website met internationale SEO maakt je vindbaar en begrijpelijk in elke markt.",
          en: "Your customers are all over the world. A multilingual website with international SEO makes you findable and understandable in every market.",
        },
      },
      {
        title: { nl: "Technisch talent vinden", en: "Finding technical talent" },
        text: {
          nl: "Goede vakmensen zijn schaars. Met employer branding en gerichte campagnes laat je zien waarom zij juist bij jou willen werken.",
          en: "Skilled engineers are scarce. With employer branding and targeted campaigns you show why they should want to work for you.",
        },
      },
    ],
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie", "web-apps-portals-apps", "content-marketing-online-ads"],
    applications: ["productconfigurator", "3d-configurator", "3d-visualisatie", "meertalige-website", "klantportaal", "api-koppelingen", "employer-branding", "beurs-signing", "infographics", "linkedin-ads"],
    faqs: [
      {
        q: { nl: "Kunnen jullie onze CAD-modellen gebruiken voor 3D-visualisaties?", en: "Can you use our CAD models for 3D visuals?" },
        a: {
          nl: "Ja. We werken met bestaande CAD- of 3D-bestanden en zetten die om naar renders, animaties of een interactieve 3D-configurator voor je website.",
          en: "Yes. We work with existing CAD or 3D files and turn them into renders, animations or an interactive 3D configurator for your website.",
        },
      },
      {
        q: { nl: "Kan een configurator gekoppeld worden aan ons ERP of CRM?", en: "Can a configurator be connected to our ERP or CRM?" },
        a: {
          nl: "In de meeste gevallen wel. Via API-koppelingen sturen we configuraties, prijzen en aanvragen door naar je ERP of CRM, zoals Odoo of HubSpot, zodat je team direct verder kan.",
          en: "In most cases, yes. Through API connections we pass configurations, prices and enquiries on to your ERP or CRM, such as Odoo or HubSpot, so your team can pick them up right away.",
        },
      },
      {
        q: { nl: "Maken jullie meertalige websites voor internationale markten?", en: "Do you build multilingual websites for international markets?" },
        a: {
          nl: "Ja. We bouwen meertalige websites met aandacht voor vertalingen, internationale SEO en de juiste technische instellingen per taal en land.",
          en: "Yes. We build multilingual websites with attention to translations, international SEO and the right technical settings per language and country.",
        },
      },
      {
        q: { nl: "Helpen jullie ook bij het werven van technisch personeel?", en: "Do you also help recruit technical staff?" },
        a: {
          nl: "Ja. Met employer branding, een werkenbij-website, bedrijfsfilms en gerichte campagnes op social media en LinkedIn helpen we je vakmensen aan te trekken.",
          en: "Yes. With employer branding, a careers website, corporate films and targeted campaigns on social media and LinkedIn we help you attract skilled professionals.",
        },
      },
    ],
    metaTitle: {
      nl: "Branding, websites & configurators voor industrie | M7",
      en: "Branding, websites & configurators for industry | M7",
    },
    metaDescription: {
      nl: "M7 helpt industriële en technische bedrijven met branding, meertalige websites, productconfigurators, 3D-visualisaties en employer branding.",
      en: "M7 helps industrial and engineering companies with branding, multilingual websites, product configurators, 3D visuals and employer branding.",
    },
  },

  /* ---------- Zorg & Welzijn ---------- */
  {
    slug: "zorg-welzijn",
    title: { nl: "Zorg & Welzijn", en: "Healthcare & Wellbeing" },
    short: { nl: "Zorg", en: "Healthcare" },
    icon: "heart",
    image: "/media/sectors/zorg.webp",
    imagePosition: "50% 50%",
    quote: { nl: "Care starts with clarity.", en: "Care starts with clarity." },
    intro: {
      nl: "Zorgaanbieders, praktijken en welzijnsorganisaties: wij bouwen toegankelijke websites, apps en merken die vertrouwen geven en mensen op weg helpen.",
      en: "Care providers, practices and wellbeing organisations: we build accessible websites, apps and brands that inspire trust and help people on their way.",
    },
    description: {
      nl: "In zorg en welzijn draait communicatie om vertrouwen, duidelijkheid en toegankelijkheid. Cliënten en patiënten willen snel vinden wat ze zoeken, eenvoudig een afspraak maken en zich gehoord voelen. Tegelijk zoeken zorgorganisaties naar manieren om personeel aan te trekken en de administratieve druk te verlagen. M7 helpt praktijken, klinieken en welzijnsorganisaties met een warme, professionele uitstraling en websites die voor iedereen werken.\n\nWe ontwerpen met toegankelijkheid als uitgangspunt, bouwen portalen en apps voor cliënten en zorgverleners en integreren boekingstools en keuzehulpen die mensen de weg wijzen. Met employer branding helpen we je zorgprofessionals te werven, en met een AI-assistent beantwoord je praktische vragen zorgvuldig en op elk moment van de dag.",
      en: "In healthcare and wellbeing, communication is about trust, clarity and accessibility. Clients and patients want to find what they need quickly, book an appointment easily and feel heard. At the same time care organisations are looking for ways to attract staff and reduce the administrative burden. M7 helps practices, clinics and wellbeing organisations with a warm, professional presence and websites that work for everyone.\n\nWe design with accessibility as a starting point, build portals and apps for clients and care professionals and integrate booking tools and decision aids that point people in the right direction. With employer branding we help you recruit care professionals, and with an AI assistant you answer practical questions carefully, at any time of day.",
    },
    challenges: [
      {
        title: { nl: "Toegankelijk voor iedereen", en: "Accessible for everyone" },
        text: {
          nl: "Je doelgroep is divers, van jong tot oud en met verschillende beperkingen. Wij ontwerpen volgens de WCAG-richtlijnen, met heldere taal, goed contrast en eenvoudige navigatie.",
          en: "Your audience is diverse, from young to old and with different impairments. We design to WCAG guidelines, with plain language, good contrast and simple navigation.",
        },
      },
      {
        title: { nl: "Afspraken en intake", en: "Appointments and intake" },
        text: {
          nl: "Telefonisch plannen kost veel tijd. Met online boeken, digitale intakeformulieren en een keuzehulp verlaag je de drempel en ontlast je de balie.",
          en: "Scheduling by phone takes a lot of time. With online booking, digital intake forms and a decision aid you lower the threshold and relieve your front desk.",
        },
      },
      {
        title: { nl: "Personeel werven", en: "Recruiting staff" },
        text: {
          nl: "Zorgprofessionals zijn schaars. Met employer branding, een werkenbij-website en gerichte campagnes laat je zien waarom het fijn werken is bij jouw organisatie.",
          en: "Care professionals are scarce. With employer branding, a careers website and targeted campaigns you show why your organisation is a great place to work.",
        },
      },
      {
        title: { nl: "Privacy en zorgvuldigheid", en: "Privacy and care" },
        text: {
          nl: "Je werkt met gevoelige gegevens. We bouwen portalen en tools met aandacht voor beveiliging, de AVG en een zorgvuldige omgang met persoonsgegevens.",
          en: "You work with sensitive data. We build portals and tools with attention to security, the GDPR and careful handling of personal data.",
        },
      },
    ],
    services: ["branding-rebranding", "websites-webshops", "web-apps-portals-apps", "seo-aeo-geo", "content-marketing-online-ads", "ai-consultancy"],
    applications: ["ux-ui-webdesign", "wordpress-website", "klantportaal", "mobiele-app", "boekingswidget", "keuzehulp-quiz", "lokale-seo", "employer-branding", "ai-chatbots"],
    faqs: [
      {
        q: { nl: "Bouwen jullie toegankelijke websites voor de zorg?", en: "Do you build accessible websites for healthcare?" },
        a: {
          nl: "Ja. We ontwerpen en bouwen volgens de WCAG-richtlijnen, met aandacht voor leesbaarheid, contrast, toetsenbordnavigatie en begrijpelijke taal, zodat je website voor zoveel mogelijk mensen werkt.",
          en: "Yes. We design and build to WCAG guidelines, with attention to legibility, contrast, keyboard navigation and plain language, so your website works for as many people as possible.",
        },
      },
      {
        q: { nl: "Kunnen cliënten online een afspraak maken?", en: "Can clients book an appointment online?" },
        a: {
          nl: "Ja. We integreren een boekingswidget of koppelen met je bestaande planningssysteem, inclusief automatische bevestigingen en herinneringen.",
          en: "Yes. We integrate a booking widget or connect to your existing scheduling system, including automatic confirmations and reminders.",
        },
      },
      {
        q: { nl: "Is een AI-chatbot geschikt voor een zorgorganisatie?", en: "Is an AI chatbot suitable for a care organisation?" },
        a: {
          nl: "Voor praktische vragen zeker, zoals openingstijden, vergoedingen, de route of de werkwijze van je praktijk. Bij medische vragen verwijst de assistent altijd door naar een zorgverlener. We richten de chatbot zorgvuldig en AVG-bewust in.",
          en: "For practical questions, certainly, such as opening hours, reimbursements, directions or how your practice works. For medical questions the assistant always refers to a care professional. We set up the chatbot carefully and GDPR-aware.",
        },
      },
      {
        q: { nl: "Helpen jullie bij het werven van zorgpersoneel?", en: "Do you help recruit care staff?" },
        a: {
          nl: "Ja. Met employer branding, een werkenbij-website, video en campagnes op social media helpen we je zorgprofessionals aan te trekken die bij je organisatie passen.",
          en: "Yes. With employer branding, a careers website, video and social media campaigns we help you attract care professionals who fit your organisation.",
        },
      },
    ],
    metaTitle: {
      nl: "Toegankelijke websites & branding voor de zorg | M7",
      en: "Accessible websites & branding for healthcare | M7",
    },
    metaDescription: {
      nl: "M7 bouwt toegankelijke websites, portalen, apps en merken voor zorg en welzijn. Met online boeken, employer branding en aandacht voor privacy.",
      en: "M7 builds accessible websites, portals, apps and brands for healthcare and wellbeing. With online booking, employer branding and attention to privacy.",
    },
  },

  /* ---------- Finance & Fintech ---------- */
  {
    slug: "finance-fintech",
    title: { nl: "Finance & Fintech", en: "Finance & Fintech" },
    short: { nl: "Finance", en: "Finance" },
    icon: "coin",
    image: "/media/sectors/business.webp",
    imagePosition: "50% 55%",
    quote: { nl: "Trust is designed, one detail at a time.", en: "Trust is designed, one detail at a time." },
    intro: {
      nl: "Financieel adviseurs, verzekeraars en fintechs: wij bouwen merken, platformen en tools die complexe financiële zaken helder en betrouwbaar maken.",
      en: "Financial advisors, insurers and fintechs: we build brands, platforms and tools that make complex financial matters clear and trustworthy.",
    },
    description: {
      nl: "Geld is een vertrouwenszaak. Of je nu financieel advies geeft, verzekeringen aanbiedt of een fintechplatform bouwt: klanten moeten zich veilig voelen en snappen wat ze krijgen. M7 helpt financiële organisaties met een merk dat betrouwbaarheid uitstraalt, en met interfaces die ingewikkelde informatie begrijpelijk maken.\n\nWe ontwerpen en bouwen klantportalen, dashboards en SaaS-platformen met aandacht voor beveiliging en gebruiksgemak. Met rekentools, check-tools en calculators geef je bezoekers direct inzicht in hun situatie en krijg je beter gekwalificeerde leads. En met API-koppelingen, infographics en AEO zorgen we dat je informatie overal klopt en goed vindbaar is, ook in AI-zoekmachines.",
      en: "Money is a matter of trust. Whether you give financial advice, offer insurance or build a fintech platform: customers need to feel safe and understand what they are getting. M7 helps financial organisations with a brand that radiates reliability, and with interfaces that make complex information understandable.\n\nWe design and build client portals, dashboards and SaaS platforms with attention to security and ease of use. With calculators and check tools you give visitors instant insight into their situation and receive better-qualified leads. And with API connections, infographics and AEO we make sure your information is consistent everywhere and easy to find, including in AI search engines.",
    },
    challenges: [
      {
        title: { nl: "Vertrouwen winnen", en: "Winning trust" },
        text: {
          nl: "Klanten vertrouwen hun geld niet zomaar toe. Een professioneel merk, heldere communicatie en een doordachte UX zorgen voor een betrouwbare eerste indruk.",
          en: "Customers do not hand over their money lightly. A professional brand, clear communication and well-considered UX create a trustworthy first impression.",
        },
      },
      {
        title: { nl: "Complexe informatie begrijpelijk maken", en: "Making complex information understandable" },
        text: {
          nl: "Rentes, voorwaarden en scenario's zijn lastig te volgen. Met calculators, infographics en dashboards maak je financiële informatie visueel en concreet.",
          en: "Interest rates, terms and scenarios are hard to follow. With calculators, infographics and dashboards you make financial information visual and concrete.",
        },
      },
      {
        title: { nl: "Veilige digitale omgevingen", en: "Secure digital environments" },
        text: {
          nl: "Financiële data vraagt om strenge beveiliging. We bouwen portalen en platformen met rollen en rechten, logging en moderne authenticatie.",
          en: "Financial data calls for strict security. We build portals and platforms with roles and permissions, logging and modern authentication.",
        },
      },
      {
        title: { nl: "Kwalitatieve leads", en: "Qualified leads" },
        text: {
          nl: "Niet elke aanvraag is een goede match. Check-tools en rekenmodules kwalificeren bezoekers vooraf, zodat je adviseurs hun tijd aan de juiste gesprekken besteden.",
          en: "Not every enquiry is a good match. Check tools and calculators qualify visitors upfront, so your advisors spend their time on the right conversations.",
        },
      },
    ],
    services: ["branding-rebranding", "web-apps-portals-apps", "websites-webshops", "configurators-lead-tools-widgets", "seo-aeo-geo", "automation-funnels"],
    applications: ["klantportaal", "dashboards", "saas-platform", "ux-ui-app-design", "offerte-calculator", "check-tools", "api-koppelingen", "merkstrategie", "infographics", "aeo"],
    faqs: [
      {
        q: { nl: "Kunnen jullie een rekentool voor onze website bouwen?", en: "Can you build a calculator for our website?" },
        a: {
          nl: "Ja. We bouwen calculators en check-tools, bijvoorbeeld voor leningen, premies, besparingen of financiële scenario's, met een heldere uitkomst en direct de mogelijkheid om een aanvraag te doen of een afspraak te plannen.",
          en: "Yes. We build calculators and check tools, for example for loans, premiums, savings or financial scenarios, with a clear outcome and a direct option to submit a request or book an appointment.",
        },
      },
      {
        q: { nl: "Hoe zorgen jullie voor de beveiliging van financiële platformen?", en: "How do you secure financial platforms?" },
        a: {
          nl: "We werken met beveiligde verbindingen, moderne authenticatie zoals tweestapsverificatie, rollen en rechten, logging en betrouwbare hosting. Waar nodig stemmen we af met je security- of compliance-team.",
          en: "We work with secure connections, modern authentication such as two-factor authentication, roles and permissions, logging and reliable hosting. Where needed we coordinate with your security or compliance team.",
        },
      },
      {
        q: { nl: "Werken jullie ook voor fintech-startups?", en: "Do you also work with fintech startups?" },
        a: {
          nl: "Zeker. We helpen fintechs met naamgeving, branding, UX/UI-design en de ontwikkeling van een MVP of platform, zodat je product vanaf de lancering vertrouwen uitstraalt.",
          en: "Definitely. We help fintechs with naming, branding, UX/UI design and developing an MVP or platform, so your product radiates trust from launch.",
        },
      },
      {
        q: { nl: "Wat betekent de European Accessibility Act voor financiële dienstverleners?", en: "What does the European Accessibility Act mean for financial service providers?" },
        a: {
          nl: "Sinds juni 2025 gelden Europese toegankelijkheidseisen voor onder meer bankdiensten voor consumenten. Ook als je er niet direct onder valt, is een toegankelijke website verstandig. We ontwerpen en bouwen met de WCAG-richtlijnen als uitgangspunt; voor de juridische toetsing schakel je je eigen adviseur in.",
          en: "Since June 2025 European accessibility requirements apply to, among others, consumer banking services. Even if you are not directly covered, an accessible website is a smart choice. We design and build with WCAG guidelines as a starting point; for the legal assessment, consult your own advisor.",
        },
      },
    ],
    metaTitle: {
      nl: "Branding, portalen & tools voor finance en fintech | M7",
      en: "Branding, portals & tools for finance and fintech | M7",
    },
    metaDescription: {
      nl: "M7 helpt financiële dienstverleners en fintechs met een betrouwbaar merk, veilige klantportalen, dashboards en rekentools die leads opleveren.",
      en: "M7 helps financial service providers and fintechs with a trustworthy brand, secure client portals, dashboards and calculators that generate leads.",
    },
  },

  /* ---------- Travel & Leisure ---------- */
  {
    slug: "travel-leisure",
    title: { nl: "Travel & Leisure", en: "Travel & Leisure" },
    short: { nl: "Travel", en: "Travel" },
    icon: "plane",
    image: "/media/sectors/travel.webp",
    imagePosition: "50% 50%",
    quote: { nl: "Make them want to go before they've even booked.", en: "Make them want to go before they've even booked." },
    intro: {
      nl: "Hotels, reisorganisaties, recreatie en hospitality: wij bouwen merken, websites en boekingservaringen die mensen laten wegdromen én direct laten boeken.",
      en: "Hotels, travel companies, recreation and hospitality: we build brands, websites and booking experiences that make people dream away and book right away.",
    },
    description: {
      nl: "In travel en leisure begint de reis online. Gasten oriënteren zich via Google, social media en steeds vaker via AI-assistenten, en boeken waar de beleving het sterkst en het proces het makkelijkst is. M7 helpt hospitality- en reisbedrijven die eerste indruk onweerstaanbaar te maken, van sfeervolle websites tot reis- en boekingsplatformen.\n\nWe combineren beeld en techniek: drone-video en social content die je locatie laten zien, meertalige websites voor internationale gasten en boekingswidgets die direct boeken eenvoudig maken. Met Meta Ads, TikTok en lokale SEO bereik je de juiste reizigers, en met GEO werk je aan zichtbaarheid in de antwoorden van AI-zoekmachines. Een AI-assistent beantwoordt vragen van gasten in hun eigen taal, dag en nacht.",
      en: "In travel and leisure the journey starts online. Guests orient themselves via Google, social media and increasingly via AI assistants, and book where the experience is strongest and the process easiest. M7 helps hospitality and travel businesses make that first impression irresistible, from atmospheric websites to travel and booking platforms.\n\nWe combine visuals and technology: drone video and social content that show off your location, multilingual websites for international guests and booking widgets that make direct booking easy. With Meta Ads, TikTok and local SEO you reach the right travellers, and with GEO you work on visibility in the answers of AI search engines. An AI assistant answers guests' questions in their own language, day and night.",
    },
    challenges: [
      {
        title: { nl: "Meer directe boekingen", en: "More direct bookings" },
        text: {
          nl: "Boekingsplatformen rekenen flinke commissies. Met een eigen website, een soepele boekingswidget en gerichte campagnes stimuleer je directe boekingen.",
          en: "Booking platforms charge hefty commissions. With your own website, a smooth booking widget and targeted campaigns you encourage direct bookings.",
        },
      },
      {
        title: { nl: "Beleving overbrengen", en: "Conveying the experience" },
        text: {
          nl: "Gasten kiezen op gevoel. Drone-video, sfeervolle fotografie en social video laten zien wat ze kunnen verwachten, nog voordat ze er zijn.",
          en: "Guests choose on feeling. Drone video, atmospheric photography and social video show what they can expect, before they even arrive.",
        },
      },
      {
        title: { nl: "Internationale gasten", en: "International guests" },
        text: {
          nl: "Je bezoekers spreken verschillende talen. Een meertalige website en een AI-assistent zorgen dat iedere gast zich welkom voelt.",
          en: "Your visitors speak different languages. A multilingual website and an AI assistant make every guest feel welcome.",
        },
      },
      {
        title: { nl: "Zichtbaar in zoekmachines én AI", en: "Visible in search engines and AI" },
        text: {
          nl: "Reizigers zoeken via Google, Maps en AI-assistenten. Met lokale SEO en GEO word je gevonden waar en wanneer zij zoeken.",
          en: "Travellers search via Google, Maps and AI assistants. With local SEO and GEO you are found where and when they search.",
        },
      },
    ],
    services: ["websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie", "content-marketing-online-ads", "seo-aeo-geo", "branding-rebranding"],
    applications: ["boekingswidget", "meertalige-website", "webflow-website", "dronevideo", "social-video", "meta-ads", "tiktok-ads", "lokale-seo", "geo", "ai-chatbots"],
    faqs: [
      {
        q: { nl: "Kunnen jullie een boekingssysteem in mijn website integreren?", en: "Can you integrate a booking system into my website?" },
        a: {
          nl: "Ja. We integreren een boekingswidget of koppelen met je bestaande reserveringssysteem of channel manager, zodat gasten direct via je eigen website kunnen boeken.",
          en: "Yes. We integrate a booking widget or connect to your existing reservation system or channel manager, so guests can book directly via your own website.",
        },
      },
      {
        q: { nl: "Hoe krijg ik meer directe boekingen?", en: "How do I get more direct bookings?" },
        a: {
          nl: "Met een snelle, overtuigende website, een eenvoudig boekingsproces, aantrekkelijk beeld en campagnes die gasten naar je eigen kanaal leiden. E-mailmarketing voor terugkerende gasten helpt daar extra bij.",
          en: "With a fast, convincing website, a simple booking process, attractive visuals and campaigns that lead guests to your own channel. Email marketing for returning guests helps even more.",
        },
      },
      {
        q: { nl: "Maken jullie ook drone- en sfeervideo's van onze locatie?", en: "Do you also shoot drone and mood videos of our location?" },
        a: {
          nl: "Ja. We verzorgen drone-opnames, fotografie en korte social video's die de sfeer van je locatie, kamers en omgeving overbrengen.",
          en: "Yes. We handle drone footage, photography and short social videos that capture the atmosphere of your location, rooms and surroundings.",
        },
      },
      {
        q: { nl: "Wat is GEO en waarom is het belangrijk voor travel?", en: "What is GEO and why does it matter for travel?" },
        a: {
          nl: "GEO (generative engine optimization) draait om zichtbaarheid in de antwoorden van AI-assistenten zoals ChatGPT, Gemini en Perplexity. Reizigers vragen deze tools steeds vaker om tips en aanbevelingen, dus wil je dat je accommodatie of reis daar goed vindbaar is.",
          en: "GEO (generative engine optimization) is about visibility in the answers of AI assistants such as ChatGPT, Gemini and Perplexity. Travellers increasingly ask these tools for tips and recommendations, so you want your accommodation or trip to be easy to find there.",
        },
      },
    ],
    metaTitle: {
      nl: "Websites & boekingstools voor travel en leisure | M7",
      en: "Websites & booking tools for travel and leisure | M7",
    },
    metaDescription: {
      nl: "M7 bouwt websites, boekingswidgets, drone-video en campagnes voor hotels, reisorganisaties en recreatie. Gericht op beleving en directe boekingen.",
      en: "M7 builds websites, booking widgets, drone video and campaigns for hotels, travel companies and recreation. Built for experience and direct bookings.",
    },
  },
];
