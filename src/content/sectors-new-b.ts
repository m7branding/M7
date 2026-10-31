import type { Sector } from "./types";

/* ============================================================
   Nieuwe sectoren (deel B). Volledige entries, inclusief
   doelgroepen (segments) en soorten bedrijven (audiences).
   Wordt in content/index.ts samengevoegd met sectors.ts.
   Vastgoed & Makelaardij en Interieur & Architectuur zijn
   afgesplitst van de oude sector "Bouw, Vastgoed & Architectuur".
   ============================================================ */

const SC = "/media/showcase";
const T = "/media/sector-tiles";

export const NEW_SECTORS_B: Sector[] = [
  /* ---------- Vastgoed & Makelaardij ---------- */
  {
    slug: "vastgoed-makelaardij",
    title: { nl: "Vastgoed & Makelaardij", en: "Real Estate & Brokerage" },
    short: { nl: "Vastgoed", en: "Real estate" },
    icon: "key",
    image: "/media/cases/buitenstate.webp",
    imagePosition: "50% 50%",
    quote: { nl: "Sell the place, not just the square metres.", en: "Sell the place, not just the square metres." },
    intro: {
      nl: "Makelaars, taxateurs, projectontwikkelaars en vastgoedbeheerders: wij laten je aanbod en je kantoor zien zoals ze verdienen, en zorgen dat verkopers, kopers en huurders je vinden.",
      en: "Estate agents, valuers, developers and property managers: we present your listings and your office the way they deserve, and make sure sellers, buyers and tenants find you.",
    },
    description: {
      nl: "In vastgoed draait alles om vertrouwen en om beeld. Een verkoper kiest de makelaar die zijn woning het best in de markt zet, een belegger wil in één oogopslag zien wat een object waard is en een huurder wil weten waar hij aan toe is. M7 helpt makelaars, taxateurs, ontwikkelaars en beheerders aan een merk, een website en materialen die daar antwoord op geven.\n\nWe bouwen makelaarswebsites waarop aanbod via een koppeling vanzelf kan verschijnen, projectwebsites voor nieuwbouw en slimme tools zoals een online waardecheck of een zoekersmatch-widget. We ontwerpen huisstijlen, brochures en investment memoranda, maken 3D-visualisaties en drone-opnames, en zorgen met lokale SEO en e-mailflows dat verkopers en kopers je vinden en terugkomen.",
      en: "In real estate everything comes down to trust and visuals. A seller chooses the agent who markets their home best, an investor wants to see at a glance what a property is worth and a tenant wants to know where they stand. M7 helps estate agents, valuers, developers and property managers with a brand, a website and materials that answer exactly that.\n\nWe build estate agent websites where listings can appear automatically through an integration, project websites for new builds and smart tools such as an online valuation check or a searcher match widget. We design identities, brochures and investment memoranda, create 3D visuals and drone footage, and use local SEO and email flows to make sure sellers and buyers find you and come back.",
    },
    challenges: [
      {
        title: { nl: "Verkopers overtuigen", en: "Winning over sellers" },
        text: {
          nl: "Kopers vinden het aanbod wel, maar verkopers zoeken een makelaar die ze vertrouwen. Een sterk merk, echte verkoopverhalen en een online waardecheck maken jou de logische keuze.",
          en: "Buyers find the listings anyway, but sellers look for an agent they trust. A strong brand, real sales stories and an online valuation check make you the obvious choice.",
        },
      },
      {
        title: { nl: "Verkopen wat er nog niet staat", en: "Selling what is not built yet" },
        text: {
          nl: "Een nieuwbouwproject op tekening is lastig voor te stellen. Met een projectwebsite, 3D-visualisaties en een interactieve situatiekaart zien kopers hun toekomstige woning.",
          en: "A new-build project on paper is hard to imagine. With a project website, 3D visuals and an interactive site plan buyers see their future home.",
        },
      },
      {
        title: { nl: "Veel informatie, weinig tijd", en: "Lots of information, little time" },
        text: {
          nl: "Beleggers en huurders willen snel de kern zien. Een heldere brochure of investment memorandum met kaarten en kerncijfers maakt het verschil.",
          en: "Investors and tenants want to see the essentials quickly. A clear brochure or investment memorandum with maps and key figures makes the difference.",
        },
      },
      {
        title: { nl: "Dubbel werk in systemen", en: "Double work across systems" },
        text: {
          nl: "Aanbod, aanvragen en opvolging zitten in verschillende systemen. Met koppelingen en automatisering komt het op één plek samen.",
          en: "Listings, enquiries and follow-up live in different systems. With integrations and automation it all comes together in one place.",
        },
      },
    ],
    services: [
      "websites-webshops",
      "automation-funnels",
      "grafisch-ontwerp-print",
      "branding-rebranding",
      "seo-aeo-geo",
      "foto-video-3d-animatie",
      "configurators-lead-tools-widgets",
    ],
    applications: [
      "webflow-website",
      "landingspaginas",
      "huisstijl",
      "brochures-magazines",
      "infographics",
      "3d-visualisatie",
      "dronevideo",
      "check-tools",
      "website-widgets",
      "api-koppelingen",
      "marketing-automation",
      "lokale-seo",
      "pagespeed-optimalisatie",
      "merkonderzoek",
    ],
    /* Mockups in de dienstentegels: eigen werk uit vastgoed (foto/video: standaard) */
    visuals: {
      "websites-webshops": { kind: "browser", src: `${T}/buitenstate-site.webp`, url: "buitenstate.nl", scroll: true, label: "Buitenstate" },
      /* Zoekersmatch-widget: lead-funnel richting CRM en e-mail */
      "automation-funnels": { kind: "tablet", src: `${T}/buitenstate-zoekers.webp`, label: "Buitenstate" },
      /* Investment Memorandum: Locatie & Ligging / Bereikbaarheid */
      "grafisch-ontwerp-print": { kind: "book", left: `${SC}/bernheze/im-p08.webp`, right: `${SC}/bernheze/im-p09.webp`, label: "Bernheze Makelaars" },
      "branding-rebranding": {
        kind: "print",
        front: `${SC}/bernheze/cover-front.webp`,
        back: `${SC}/bernheze/cover-back.webp`,
        card: `${SC}/bernheze/card-front.webp`,
        label: "Bernheze Makelaars",
      },
      "seo-aeo-geo": { kind: "browser", src: `${T}/sandt-chatgpt.webp`, url: "chatgpt.com", label: "The Sandt" },
      /* Energy Property Configurator: verduurzaming van een pand */
      "configurators-lead-tools-widgets": { kind: "browser", src: `${T}/steddion-configurator.webp`, url: "tools.steddion.com/configurator", label: "Steddion" },
    },
    faqs: [
      {
        q: {
          nl: "Kunnen jullie een makelaarswebsite koppelen aan Realworks of Kolibri?",
          en: "Can you connect an estate agent website to Realworks or Kolibri?",
        },
        a: {
          nl: "Dat kan vaak. Veel makelaarssystemen, zoals Realworks en Kolibri, bieden een koppeling of datafeed waarmee aanbod naar je eigen website kan. Welke route bij jouw pakket en abonnement past, zoeken we vooraf uit. Daarna zorgen we met een [[api-koppelingen|koppeling]] dat nieuwe woningen, prijswijzigingen en statussen vanzelf op je site verschijnen, in je eigen huisstijl in plaats van een standaardtemplate. Zo voer je het aanbod één keer in en houd je tijd over voor je klanten.",
          en: "Often, yes. Many estate agency systems, such as Realworks and Kolibri, offer an integration or data feed that can send listings to your own website. We check upfront which route fits your package and subscription. Then we use an [[api-koppelingen|integration]] so new homes, price changes and statuses appear on your site by themselves, in your own identity instead of a standard template. That way you enter listings once and keep time free for your clients.",
        },
      },
      {
        q: { nl: "Ontwerpen jullie ook brochures en investment memoranda?", en: "Do you also design brochures and investment memoranda?" },
        a: {
          nl: "Ja. Van een verkoopbrochure voor een karakteristieke woning tot een investment memorandum voor een bedrijfsobject. Voor Bernheze Makelaars ontwierpen we bijvoorbeeld een memorandum, een brochure en visitekaartjes in één lijn. We zorgen voor een heldere opbouw, kaarten en [[infographics|infographics]] die de kern snel laten zien, en een sjabloon zodat volgende objecten dezelfde uitstraling krijgen. De inhoud en cijfers leveren jullie aan, wij maken het leesbaar en mooi.",
          en: "Yes. From a sales brochure for a characterful home to an investment memorandum for a commercial property. For Bernheze Makelaars, for example, we designed a memorandum, a brochure and business cards in one consistent style. We take care of a clear structure, maps and [[infographics|infographics]] that show the essentials quickly, and a template so future properties get the same look. You supply the content and figures, we make it readable and good-looking.",
        },
      },
      {
        q: { nl: "Maken jullie ook 3D-visualisaties en drone-opnames van vastgoed?", en: "Do you also create 3D visuals and drone footage of property?" },
        a: {
          nl: "Ja. Voor nieuwbouw maken we [[3d-visualisatie|3D-visualisaties]], van vogelvlucht tot interieurrender, op basis van de tekeningen van de architect. Bestaand vastgoed leggen we vast met fotografie en [[dronevideo|drone-opnames]], binnen de regels voor dronevluchten. Bij landelijk en bedrijfsvastgoed laten luchtbeelden in één shot zien hoe een object ligt: percelen, ontsluiting en omgeving. Je krijgt de beelden in formaten voor je website, aanbodplatforms, brochures en social media.",
          en: "Yes. For new builds we create [[3d-visualisatie|3D visuals]], from aerial view to interior render, based on the architect's drawings. Existing property we capture with photography and [[dronevideo|drone footage]], within the drone regulations. For rural and commercial property, aerial images show in a single shot how a property lies: plots, access and surroundings. You receive the images in formats for your website, listing platforms, brochures and social media.",
        },
      },
      {
        q: { nl: "Werken jullie ook voor kleine makelaarskantoren?", en: "Do you also work for small estate agencies?" },
        a: {
          nl: "Zeker. Een zelfstandig kantoor met twee of drie mensen heeft vaak juist veel aan een sterk eigen merk, want daarmee onderscheid je je van ketens en formules. We beginnen met wat het meest oplevert, bijvoorbeeld een website met een duidelijke route voor verkopers en een online waardecheck. Huisstijl, brochures en campagnes volgen wanneer het past. De aanpak en het budget stemmen we af op je kantoor, je regio en je ambitie.",
          en: "Definitely. An independent office with two or three people often benefits most from a strong brand of its own, because that is how you stand out from chains and franchises. We start with what pays off most, for example a website with a clear route for sellers and an online valuation check. Identity, brochures and campaigns follow when the time is right. We tailor the approach and budget to your office, your region and your ambition.",
        },
      },
    ],
    metaTitle: {
      nl: "Websites, branding & brochures voor makelaars en vastgoed | M7",
      en: "Websites, branding & brochures for estate agents & real estate | M7",
    },
    metaDescription: {
      nl: "M7 helpt makelaars, taxateurs, projectontwikkelaars en vastgoedbeheerders met websites, waardechecks, brochures, 3D-visualisaties en lokale SEO.",
      en: "M7 helps estate agents, valuers, property developers and property managers with websites, valuation checks, brochures, 3D visuals and local SEO.",
    },
    segments: [
      {
        name: { nl: "Makelaardij", en: "Estate agents" },
        intro: {
          nl: "Voor makelaarskantoren, woningmakelaars, aankoopmakelaars en makelaarsketens, van zelfstandig kantoor tot regionale keten met meerdere vestigingen.",
          en: "For estate agencies, residential agents, buying agents and agency chains, from independent office to regional chain with several branches.",
        },
        types: [
          { nl: "Makelaarskantoren", en: "Estate agencies" },
          { nl: "Woningmakelaars", en: "Residential estate agents" },
          { nl: "Aankoopmakelaars", en: "Buying agents" },
          { nl: "Verkoopmakelaars", en: "Selling agents" },
          { nl: "Makelaarsketens", en: "Estate agency chains" },
        ],
        useCases: [
          {
            title: { nl: "Makelaarswebsite met automatisch aanbod", en: "Estate agent website with automatic listings" },
            text: {
              nl: "Aanbod kan via een koppeling of datafeed vanzelf op je site komen, bijvoorbeeld uit Realworks. Met daarnaast een duidelijke route voor verkopers.",
              en: "Listings can reach your site automatically through an integration or data feed, for example from Realworks. Alongside that, a clear route for sellers.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Online waardecheck voor verkopers", en: "Online valuation check for sellers" },
            text: {
              nl: "Een eerste indicatie van de woningwaarde, die eindigt bij de aanvraag van een waardebepaling aan huis. Zo begint het gesprek met een verkoper online.",
              en: "An initial indication of the home's value, ending with a request for a valuation visit. That way the conversation with a seller starts online.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "Pagina's per wijk en dorp", en: "Pages per neighbourhood and village" },
            text: {
              nl: "'Huis verkopen in Veghel' verdient een eigen pagina met lokale kennis en verkochte woningen. Zo laat je zien dat je de markt kent.",
              en: "'Selling a house in Veghel' deserves its own page with local knowledge and sold homes. It shows you know the market.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Twijfelende verkopers warm houden", en: "Keeping hesitant sellers warm" },
            text: {
              nl: "Wie nog niet zover is, krijgt een korte e-mailreeks met tips over verkopen. Tot het moment dat hij er klaar voor is.",
              en: "Anyone not ready yet gets a short email series with tips on selling. Until the moment they are.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "Een kantoor met een eigen gezicht", en: "An agency with its own face" },
            text: {
              nl: "Een huisstijl die klopt van het te-koopbord in de voortuin tot je e-mailhandtekening en brochure. Zo val je op tussen ketens en formules, en onthoudt een verkoper jouw naam.",
              en: "An identity that holds up from the for-sale sign in the front garden to your email signature and brochure. That way you stand out among chains and franchises, and sellers remember your name.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Woningvideo en dronebeelden", en: "Property video and drone footage" },
            text: {
              nl: "Een korte video door de woning en een paar luchtbeelden van tuin en omgeving, binnen de regels voor dronevluchten. Zo zien kopers de indeling en de ligging voordat ze een bezichtiging plannen.",
              en: "A short walkthrough video and a few aerial shots of garden and surroundings, within the drone regulations. That way buyers see the layout and location before they book a viewing.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
          {
            title: { nl: "Campagnes in je werkgebied", en: "Campaigns in your area" },
            text: {
              nl: "Advertenties op Facebook en Instagram voor mensen in je werkgebied, met een verkoopverhaal of de waardecheck als begin. Zo ben je al bekend voordat iemand een makelaar zoekt.",
              en: "Facebook and Instagram ads for people in your area, starting with a sales story or the valuation check. That way people know you before they start looking for an agent.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Woningteksten met AI als hulp", en: "Listing copy with AI as an assistant" },
            text: {
              nl: "Een eerste versie van de woningtekst op basis van de kenmerken en jouw aantekeningen, in de toon van je kantoor. Jij checkt de feiten en maakt hem af, AI doet het tikwerk.",
              en: "A first draft of the listing copy based on the features and your notes, in your agency's tone. You check the facts and finish it, AI does the typing.",
            },
            service: "ai-consultancy",
            application: "ai-content",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat maakt een goede website voor een makelaar?", en: "What makes a good website for an estate agent?" },
            a: {
              nl: "Een makelaarswebsite heeft twee soorten bezoekers: kopers die door het aanbod willen bladeren en verkopers die een makelaar zoeken. Die tweede groep vergeten veel sites. Wij zorgen voor snel, mooi aanbod én een duidelijke route voor verkopers: wie zijn jullie, wat kost het, wat hebben jullie verkocht en hoe vraag ik een waardebepaling aan. Met een eigen [[huisstijl|huisstijl]] en echte foto's van je team voelt het als jouw kantoor, niet als de zoveelste template.",
              en: "An estate agent's website has two kinds of visitors: buyers browsing listings and sellers looking for an agent. Many sites forget the second group. We make sure listings load fast and look good, and we build a clear route for sellers: who you are, what it costs, what you have sold and how to request a valuation. With your own [[huisstijl|visual identity]] and real photos of your team, it feels like your office, not yet another template.",
            },
          },
          {
            q: {
              nl: "Kan ons woningaanbod automatisch op de website komen, bijvoorbeeld via Realworks?",
              en: "Can our listings appear on the website automatically, for example via Realworks?",
            },
            a: {
              nl: "Vaak wel. Veel makelaarssystemen, waaronder Realworks, bieden mogelijkheden om aanbod via een koppeling of datafeed te delen. Een makelaarswebsite met een Realworks-koppeling is dus zeker een optie. Welke route bij jouw pakket en abonnement past, zoeken we vooraf uit, zodat je niet voor verrassingen komt te staan. Daarna bouwen we [[api-koppelingen|de koppeling]] zo dat nieuwe woningen, prijswijzigingen en 'verkocht onder voorbehoud' vanzelf op de site verschijnen. Dubbel invoeren is dan verleden tijd.",
              en: "Often, yes. Many estate agency systems, including Realworks, offer ways to share listings through an integration or data feed, so a website with a Realworks connection is certainly an option. We check upfront which route fits your package and subscription, so there are no surprises. Then we build [[api-koppelingen|the integration]] so new homes, price changes and 'sold subject to contract' appear on the site by themselves. No more entering everything twice.",
            },
          },
          {
            q: { nl: "Hoe krijg ik meer verkopers en aanvragen voor een waardebepaling?", en: "How do I get more sellers and valuation requests?" },
            a: {
              nl: "Verkopers zijn de leads waar een makelaarskantoor op draait, en ze nemen de tijd voor hun keuze. Geef ze dus iets om mee te beginnen. Een online [[check-tools|waardecheck]] geeft een eerste indicatie en eindigt bij de aanvraag van een waardebepaling aan huis. Daarnaast helpen pagina's per wijk of dorp, verkoopverhalen van echte klanten en campagnes gericht op eigenaren in je werkgebied. Wie nog niet klaar is, houd je met een korte e-mailreeks warm tot het wél zover is.",
              en: "Sellers are the leads an agency runs on, and they take their time deciding. So give them something to start with. An online [[check-tools|valuation check]] gives a first indication and ends with a request for a valuation at home. Pages per neighbourhood or village, sales stories from real clients and campaigns aimed at homeowners in your area help too. Anyone who is not ready yet stays warm with a short email series until they are.",
            },
          },
          {
            q: { nl: "Hoe word ik als makelaar beter vindbaar in mijn eigen regio?", en: "How do I become easier to find as an estate agent in my own region?" },
            a: {
              nl: "Begin bij de basis: een volledig en actief Google Bedrijfsprofiel, reviews waar je op reageert en een website die per plaats laat zien dat je de markt kent. Zoekopdrachten als 'makelaar Uden' of 'huis verkopen in Veghel' beantwoord je met eigen pagina's en lokale content, geen dunne kopieën. Met [[lokale-seo|lokale SEO]] en heldere antwoorden op veelgestelde vragen maak je bovendien meer kans om opgepikt te worden door AI-assistenten, die mensen steeds vaker om advies vragen.",
              en: "Start with the basics: a complete, active Google Business Profile, reviews you respond to and a website that shows per town that you know the market. Searches like 'estate agent Uden' or 'selling a house in Veghel' deserve their own pages with local content, not thin copies. With [[lokale-seo|local SEO]] and clear answers to common questions, you are also more likely to be picked up by the AI assistants people increasingly ask for advice.",
            },
          },
          {
            q: { nl: "Hoe onderscheid ik me van online makelaars en grote ketens?", en: "How do I stand out from online agents and large chains?" },
            a: {
              nl: "Door zichtbaar te maken wat een verkoper bij jou extra krijgt. Laat met echte verkoopverhalen zien hoe je een woning in de markt zet, hoe goed je de buurt kent en wie er belt als het spannend wordt. Een scherpe [[merkstrategie|positionering]] en een verzorgde presentatie, van fotografie tot brochure, maken dat verschil tastbaar. En wees helder over wat je dienstverlening inhoudt, dan vergelijkt een verkoper appels met appels.",
              en: "By making visible what a seller gets extra with you. Use real sales stories to show how you market a home, how well you know the area and who picks up the phone when things get tense. Sharp [[merkstrategie|positioning]] and polished presentation, from photography to brochure, make that difference tangible. And be clear about what your service includes, so sellers compare like with like.",
            },
          },
          {
            q: { nl: "Hebben woningvideo's en dronebeelden zin voor een gewone woning?", en: "Do property videos and drone shots make sense for an ordinary home?" },
            a: {
              nl: "Niet bij elke woning, en dat hoeft ook niet. Bij karakteristieke woningen, vrijstaande huizen met een grote tuin, landelijk wonen en nieuwbouw laat een korte video of een [[dronevideo|dronebeeld]] in één keer zien wat foto's lastig vangen: de indeling, de ligging en de omgeving. Voor een rijtjeshuis is een goede fotoserie met plattegrond vaak genoeg, eventueel aangevuld met een [[social-video|korte video]] voor social media. Drones zetten we alleen in binnen de regels, en met oog voor de privacy van de buren.",
              en: "Not for every home, and that is fine. For characterful homes, detached houses with a large garden, rural properties and new builds, a short video or [[dronevideo|drone shot]] shows in one go what photos struggle to capture: layout, location and surroundings. For a terraced house a good photo series with a floor plan is often enough, possibly with a [[social-video|short video]] for social media. We only fly drones within the rules, and with an eye on the neighbours' privacy.",
            },
          },
          {
            q: { nl: "Kunnen we AI gebruiken voor woningteksten en klantvragen?", en: "Can we use AI for listing copy and client questions?" },
            a: {
              nl: "Ja, als hulp, niet als vervanger van je vakkennis. AI maakt snel een eerste versie van een woningtekst of samenvatting in jouw toon, en een [[ai-chatbots|chatbot]] op je site kan praktische vragen beantwoorden over bezichtigingen of de gang van zaken bij verkoop. De feiten en beslissingen blijven bij jou, dus elke tekst gaat langs een makelaar voordat hij online staat. Zet geen persoonsgegevens van klanten in openbare AI-tools; met [[ai-content|een goed ingerichte werkwijze]] hoeft dat ook niet.",
              en: "Yes, as an assistant, not as a replacement for your expertise. AI quickly produces a first draft of listing copy or a summary in your tone, and a [[ai-chatbots|chatbot]] on your site can answer practical questions about viewings or how a sale works. The facts and decisions stay with you, so every text passes an agent before it goes online. Do not put clients' personal data into public AI tools; with [[ai-content|a well set-up workflow]] there is no need to.",
            },
          },
        ],
      },
      {
        name: { nl: "Vastgoed & projectontwikkeling", en: "Property & development" },
        intro: {
          nl: "Voor projectontwikkelaars, vastgoedbeleggers, vastgoedfondsen en nieuwbouwmakelaars, van een handvol nieuwbouwwoningen tot een complete gebiedsontwikkeling.",
          en: "For property developers, real estate investors, property funds and new-build agents, from a handful of new homes to a complete area development.",
        },
        types: [
          { nl: "Projectontwikkelaars", en: "Property developers" },
          { nl: "Gebiedsontwikkelaars", en: "Area developers" },
          { nl: "Bouwende ontwikkelaars", en: "Developer-builders" },
          { nl: "Vastgoedbeleggers", en: "Real estate investors" },
          { nl: "Vastgoedfondsen", en: "Property funds" },
          { nl: "Nieuwbouwmakelaars", en: "New-build estate agents" },
        ],
        useCases: [
          {
            title: { nl: "Projectwebsite voor nieuwbouw", en: "Project website for new builds" },
            text: {
              nl: "Woningtypes, plattegronden, prijzen en beschikbaarheid per bouwnummer, met een interactieve situatiekaart. Snel bij te werken als status of prijs verandert.",
              en: "Home types, floor plans, prices and availability per plot, with an interactive site plan. Quick to update when status or price changes.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "3D-visualisatie in fases", en: "3D visualisation in phases" },
            text: {
              nl: "Eerst een vogelvlucht en een straatbeeld, later de interieurrenders. Zo betaal je niet voor beelden van een ontwerp dat nog verandert.",
              en: "First an aerial view and a street view, interior renders later. That way you do not pay for images of a design that is still changing.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Investment memorandum als sjabloon", en: "Investment memorandum as a template" },
            text: {
              nl: "Huurstromen, kaarten en plattegronden in een document dat een belegger snel doorheeft. Volgende objecten presenteer je in dezelfde stijl.",
              en: "Rental income, maps and floor plans in a document an investor grasps quickly. Future properties follow in the same style.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
          {
            title: { nl: "Inschrijvers warm tot de verkoopstart", en: "Registrants engaged until the sales launch" },
            text: {
              nl: "Op vaste momenten nieuwe beelden, de prijslijst of een uitnodiging voor de informatieavond. Relevant voor het woningtype dat iemand zoekt.",
              en: "New visuals, the price list or an invitation to the information evening at set moments. Relevant to the home type each person is after.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Kopersportaal na de verkoop", en: "Buyer portal after the sale" },
            text: {
              nl: "Kopers vinden in één omgeving hun documenten, de bouwplanning, foto-updates van de bouwplaats en hun keuzes voor meer- en minderwerk. Dat scheelt de kopersbegeleider een hoop mails.",
              en: "Buyers find their documents, the construction schedule, photo updates from the site and their choices for upgrades and omissions in one place. That saves the buyer liaison a lot of emails.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Naam en merk voor je project", en: "Name and brand for your project" },
            text: {
              nl: "Een projectnaam, logo en beeldtaal die passen bij de plek en de doelgroep. Van bouwbord tot brochure en socials: één herkenbaar verhaal vanaf de eerste aankondiging.",
              en: "A project name, logo and visual language that suit the location and the audience. From site hoarding to brochure and socials: one recognisable story from the first announcement.",
            },
            service: "branding-rebranding",
            application: "naamgeving",
          },
          {
            title: { nl: "Campagne richting de verkoopstart", en: "Campaign towards the sales launch" },
            text: {
              nl: "Gerichte advertenties op Instagram en Facebook voor mensen die in de regio willen wonen, met inschrijven als doel. Zo bouw je een interesselijst op voordat de verkoop begint.",
              en: "Targeted Instagram and Facebook ads for people who want to live in the region, with registration as the goal. That way you build a list of interested buyers before sales open.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Woningzoeker op wens en budget", en: "Home finder by wishes and budget" },
            text: {
              nl: "Een paar vragen over budget, huishouden en wensen, en de bezoeker ziet welke woningtypes in het plan passen. Handig bij een project met veel varianten, en jij weet meteen wie waarnaar zoekt.",
              en: "A few questions about budget, household and wishes, and visitors see which home types in the scheme suit them. Handy for a project with many variants, and you instantly know who is looking for what.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat zet je op een projectwebsite voor nieuwbouw?", en: "What goes on a project website for a new-build development?" },
            a: {
              nl: "Alles wat een koper wil weten voordat hij een makelaar belt. Woningtypes met plattegronden en prijzen, de beschikbaarheid per bouwnummer, de omgeving, de planning en een duidelijke knop om je in te schrijven. Een goede projectwebsite voor nieuwbouw is snel aan te passen, want prijzen en status veranderen constant. Vaak bouwen we er een interactieve situatiekaart bij, zodat geïnteresseerden zelf door het plan klikken. Met een nieuwsbrief houd je ze tot de verkoopstart op de hoogte.",
              en: "Everything a buyer wants to know before calling an agent. Home types with floor plans and prices, availability per plot, the surroundings, the timeline and a clear button to register interest. A good new-build project website is easy to update, because prices and status change all the time. We often add an interactive site plan, so prospects can click through the scheme themselves. A newsletter keeps them informed right up to the sales launch.",
            },
          },
          {
            q: { nl: "Wanneer loont een 3D-visualisatie van een nieuwbouwproject?", en: "When is a 3D visualisation of a new-build project worth it?" },
            a: {
              nl: "Eigenlijk vanaf het moment dat je het project naar buiten brengt. Een sterk vogelvluchtbeeld helpt bij de gemeente en omwonenden, een sfeervol straatbeeld trekt inschrijvers en een interieurrender laat kopers voelen hoe de woonkamer het licht vangt. Een [[3d-visualisatie|3D-visualisatie]] van een nieuwbouwproject laat je dus het liefst in fases maken: eerst het grote beeld, later de details. Zo betaal je niet voor renders van een ontwerp dat nog drie keer verandert.",
              en: "Really from the moment you take the project public. A strong aerial view helps with the municipality and local residents, an atmospheric street view attracts registrations and an interior render lets buyers feel how the living room catches the light. So ideally you commission a [[3d-visualisatie|3D visualisation]] in phases: the big picture first, details later. That way you do not pay for renders of a design that will change three more times.",
            },
          },
          {
            q: { nl: "Ontwerpen jullie ook een investment memorandum?", en: "Do you also design investment memoranda?" },
            a: {
              nl: "Ja. Een investment memorandum moet veel informatie kwijt, van huurstromen en kaarten tot plattegronden en planning, en toch prettig leesbaar blijven voor een belegger met weinig tijd. Wij zorgen voor een heldere opbouw, [[infographics|infographics]] die cijfers snel duidelijk maken en beeld dat het object eer aandoet. Je krijgt een strak document als pdf of in print, plus een sjabloon waarmee je volgende objecten in dezelfde stijl presenteert. De cijfers zelf leveren jullie aan.",
              en: "Yes. An investment memorandum has to hold a lot of information, from rental income and maps to floor plans and timelines, and still read easily for an investor who is short on time. We take care of a clear structure, [[infographics|infographics]] that make figures quick to grasp and imagery that does the asset justice. You get a sharp document as a PDF or in print, plus a template so future properties are presented in the same style. The figures themselves come from you.",
            },
          },
          {
            q: { nl: "Hoe houd ik geïnteresseerden warm tot de verkoopstart?", en: "How do I keep prospects interested until the sales launch?" },
            a: {
              nl: "Tussen de eerste inschrijving en de verkoopstart zitten soms maanden. Blijft het stil, dan verlies je mensen aan een ander project. Met [[marketing-automation|marketing automation]] stuur je op vaste momenten een update: nieuwe beelden, de definitieve prijslijst, een uitnodiging voor de informatieavond. Inschrijvers geven vooraf aan welk woningtype ze zoeken, zodat de mails relevant blijven. En op de dag van de verkoopstart weet je precies wie je als eerste moet bellen.",
              en: "There can be months between the first registration and the sales launch. Stay silent and you lose people to another project. With [[marketing-automation|marketing automation]] you send updates at set moments: new visuals, the final price list, an invitation to the information evening. Registrants say upfront which home type they are after, so the emails stay relevant. And on launch day you know exactly who to call first.",
            },
          },
          {
            q: { nl: "Hoe kies je een naam en uitstraling voor een nieuwbouwproject?", en: "How do you choose a name and look for a new-build project?" },
            a: {
              nl: "Begin bij de plek en de mensen voor wie je bouwt: een rustig dorpsplan vraagt een ander verhaal dan stedelijke appartementen. Een goede projectnaam is makkelijk uit te spreken, roept het juiste beeld op en is nog vrij als domeinnaam en op social media. Met [[naamgeving|naamgeving]] en een [[huisstijl|beeldtaal]] die op bouwbord, website en brochure hetzelfde vertellen, wordt je project herkenbaar vanaf de eerste aankondiging. Laat daarnaast checken of de naam niet botst met een bestaand merk.",
              en: "Start with the place and the people you are building for: a quiet village scheme calls for a different story than urban apartments. A good project name is easy to say, evokes the right image and is still available as a domain name and on social media. With [[naamgeving|naming]] and a [[huisstijl|visual language]] that tell the same story on site hoarding, website and brochure, your project is recognisable from the first announcement. Also have it checked that the name does not clash with an existing trademark.",
            },
          },
          {
            q: { nl: "Hoe houd je omwonenden en de gemeente goed op de hoogte?", en: "How do you keep local residents and the municipality well informed?" },
            a: {
              nl: "Begin vroeg en wees concreet: wat komt er, hoe ziet het eruit, wanneer gebeurt wat en bij wie kun je terecht? Een projectpagina met planning en veelgestelde vragen, een informatieavond en heldere [[flyers-posters|bewonersbrieven]] voor wie niet online zit, vormen een goede basis. Met [[3d-visualisatie|3D-beelden]] vanaf straatniveau zien omwonenden wat er straks echt staat, en dat voorkomt vaak misverstanden. Eén vast aanspreekpunt maakt de rest makkelijker.",
              en: "Start early and be concrete: what is coming, what will it look like, what happens when and who can people talk to? A project page with a schedule and FAQs, an information evening and clear [[flyers-posters|letters to residents]] for those who are not online form a good basis. With [[3d-visualisatie|3D visuals]] from street level, residents see what will actually be there, which often prevents misunderstandings. One fixed point of contact makes the rest easier.",
            },
          },
          {
            q: { nl: "Wat heb je aan een kopersportaal bij nieuwbouw?", en: "What does a buyer portal add to a new-build project?" },
            a: {
              nl: "Overzicht, voor kopers en voor je eigen team. In een [[klantportaal|kopersportaal]] vinden kopers hun contractstukken, de planning, opties voor meer- en minderwerk en updates van de bouw, en stellen ze hun vragen op één plek. Je kopersbegeleider hoeft minder te mailen en niemand zoekt meer naar die ene bijlage van drie maanden geleden. Werk je met bestaande systemen voor verkoop of kopersbegeleiding, dan kijken we of een [[api-koppelingen|koppeling]] mogelijk is.",
              en: "Overview, for buyers and for your own team. In a [[klantportaal|buyer portal]] buyers find their contract documents, the schedule, options for upgrades and omissions and construction updates, and ask their questions in one place. Your buyer liaison sends fewer emails and nobody hunts for that one attachment from three months ago. If you work with existing systems for sales or buyer support, we check whether an [[api-koppelingen|integration]] is possible.",
            },
          },
        ],
      },
      {
        name: { nl: "Taxatie & advies", en: "Valuation & advice" },
        intro: {
          nl: "Voor taxatiebureaus, taxateurs in wonen en bedrijfsmatig vastgoed, vastgoedadviseurs, bouwkundig keurders en energieadviseurs.",
          en: "For valuation firms, residential and commercial property valuers, real estate advisors, building surveyors and energy advisors.",
        },
        types: [
          { nl: "Taxatiebureaus", en: "Valuation firms" },
          { nl: "Woningtaxateurs", en: "Residential valuers" },
          { nl: "Taxateurs bedrijfsmatig vastgoed", en: "Commercial property valuers" },
          { nl: "Vastgoedadviseurs", en: "Real estate advisors" },
          { nl: "Bouwkundig keurders", en: "Building surveyors" },
          { nl: "Energieadviseurs", en: "Energy advisors" },
        ],
        useCases: [
          {
            title: { nl: "Taxatierapport in een strakke opmaak", en: "A clean layout for valuation reports" },
            text: {
              nl: "Een vaste, heldere opmaak voor rapporten en adviezen, met kaarten en grafieken die snel leesbaar zijn. Als sjabloon voor je hele team.",
              en: "A fixed, clear layout for reports and advice, with maps and charts that read quickly. As a template for your whole team.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
          {
            title: { nl: "Taxatie aanvragen in een paar stappen", en: "Request a valuation in a few steps" },
            text: {
              nl: "Het type taxatie, het object en het doel in een paar vragen, met direct een prijsindicatie. Jij krijgt een complete opdracht binnen.",
              en: "The type of valuation, the property and the purpose in a few questions, with a price indication straight away. You receive a complete assignment.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Antwoorden op vragen over taxeren", en: "Answers to questions about valuations" },
            text: {
              nl: "'Wat kost een taxatie?' of 'Hoe lang is een taxatierapport geldig?': heldere antwoorden die Google en AI-assistenten oppikken.",
              en: "'What does a valuation cost?' or 'How long is a valuation report valid?': clear answers that Google and AI assistants pick up.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
          {
            title: { nl: "Status en afspraken automatisch bijgewerkt", en: "Status and appointments updated automatically" },
            text: {
              nl: "Na de aanvraag volgt automatisch een bevestiging, een afspraakvoorstel en een bericht zodra het rapport klaar is. Dat scheelt telefoontjes met 'hoe staat het ervoor?'.",
              en: "After the request comes an automatic confirmation, a proposed appointment and a message as soon as the report is ready. That saves a lot of 'how is it going?' calls.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Een pagina per type taxatie", en: "A page per type of valuation" },
            text: {
              nl: "Woningtaxatie, bedrijfsmatige taxatie, bouwkundige keuring en energielabel elk op een eigen pagina, met uitleg, doorlooptijd en een aanvraagknop. Bezoekers herkennen zo direct hun eigen vraag.",
              en: "Residential valuation, commercial valuation, building survey and energy label each on their own page, with an explanation, turnaround time and a request button. Visitors immediately recognise their own question.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Uitstraling die vertrouwen geeft", en: "A look that inspires trust" },
            text: {
              nl: "Een rustige huisstijl voor website, rapporten en e-mail die onafhankelijkheid en vakkennis uitstraalt. Geen poespas, wel herkenbaar, en net zo zorgvuldig als de rapporten die je oplevert.",
              en: "A calm identity for website, reports and email that conveys independence and expertise. No frills, but recognisable, and as careful as the reports you deliver.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Planning en opdrachten in één dashboard", en: "Planning and assignments in one dashboard" },
            text: {
              nl: "Alle opdrachten, inspecties en deadlines van je team in één overzicht, gevuld vanuit je bestaande systemen. Je ziet in één oogopslag wat er deze week moet gebeuren en waar het knelt.",
              en: "All your team's assignments, inspections and deadlines in one overview, fed from your existing systems. You see at a glance what needs doing this week and where things get tight.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
          {
            title: { nl: "Gevonden op 'taxatie aanvragen'", en: "Found for 'request a valuation'" },
            text: {
              nl: "Advertenties op zoekopdrachten als 'taxatie aanvragen' of 'bouwkundige keuring' in je werkgebied. Je bereikt mensen met een concrete vraag, precies op het moment dat ze een taxateur nodig hebben.",
              en: "Ads on searches like 'request a valuation' or 'building survey' in your area. You reach people with a concrete need, right at the moment they need a valuer.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe krijg ik als taxateur meer opdrachten via mijn website?", en: "How do I get more assignments through my website as a valuer?" },
            a: {
              nl: "Maak het aanvragen net zo makkelijk als het zoeken. Wie een taxateur nodig heeft voor een hypotheek, een aankoop of een bedrijfspand, wil snel weten wat het kost, hoe lang het duurt en wanneer je kunt komen. Zet dat per type taxatie helder op een pagina, met een [[offerte-calculator|aanvraagtool]] die meteen de juiste gegevens uitvraagt. Combineer dat met [[lokale-seo|lokale SEO]] op 'taxateur' plus de plaatsen in je werkgebied, en je wordt gevonden op het moment dat het telt.",
              en: "Make requesting as easy as searching. Anyone who needs a valuer for a mortgage, a purchase or a commercial building wants to know quickly what it costs, how long it takes and when you can come. Put that clearly on a page per type of valuation, with a [[offerte-calculator|request tool]] that asks for the right details straight away. Combine that with [[lokale-seo|local SEO]] for 'valuer' plus the towns in your area, and you are found at the moment it counts.",
            },
          },
          {
            q: { nl: "Kunnen jullie de opmaak van onze taxatierapporten en adviezen verzorgen?", en: "Can you design the layout of our valuation reports and advice?" },
            a: {
              nl: "Ja, binnen de kaders die voor jullie gelden. Voor sommige rapporten liggen model en inhoud vast, en die blijven leidend. Daaromheen is vaak veel winst te halen: een herkenbare voorkant, een heldere samenvatting, kaarten, foto's en [[infographics|infographics]] die de kern snel laten zien. Voor adviesrapporten en bedrijfsmatige taxaties is meestal meer vrijheid. We leveren een sjabloon waarmee je team zelf verder kan, zodat elk rapport er even verzorgd uitziet.",
              en: "Yes, within the frameworks that apply to you. For some reports the model and content are fixed, and those remain leading. Around that there is often a lot to gain: a recognisable cover, a clear summary, maps, photos and [[infographics|infographics]] that show the essentials quickly. Advisory reports and commercial valuations usually allow more freedom. We deliver a template your team can work with, so every report looks equally polished.",
            },
          },
          {
            q: { nl: "Hoe laat ik zien dat ons bureau onafhankelijk en betrouwbaar is?", en: "How do I show that our firm is independent and reliable?" },
            a: {
              nl: "Door het concreet te maken. Laat zien wie je taxateurs zijn, met hun registraties en specialisaties, en leg uit hoe je werkt: van opdracht tot rapport, en hoe je onafhankelijkheid borgt. Reviews van opdrachtgevers en een rustige, zakelijke uitstraling doen de rest. Met een heldere [[merkstrategie|positionering]] bepaal je waar je voor staat, bijvoorbeeld wonen, agrarisch of bedrijfsmatig vastgoed, zodat de juiste opdrachtgevers je vinden. Overdreven beloftes laten we weg, die passen niet bij het vak.",
              en: "By making it concrete. Show who your valuers are, with their registrations and specialisations, and explain how you work: from assignment to report, and how you safeguard independence. Client reviews and a calm, businesslike look do the rest. With clear [[merkstrategie|positioning]] you decide what you stand for, for example residential, agricultural or commercial property, so the right clients find you. We leave out exaggerated promises, they do not suit the profession.",
            },
          },
          {
            q: { nl: "Hoe word ik als energieadviseur of bouwkundig keurder beter gevonden?", en: "How can an energy advisor or building surveyor get found more easily?" },
            a: {
              nl: "Door per dienst en per plaats antwoord te geven op wat mensen zoeken, zoals 'energielabel aanvragen Oss' of 'bouwkundige keuring Den Bosch'. Een compleet [[lokale-seo|Google Bedrijfsprofiel]] met reviews helpt in de lokale resultaten. Schrijf daarnaast heldere [[seo-content|pagina's]] over de vragen die je elke week hoort, bijvoorbeeld wanneer een keuring verstandig is en wat er in het rapport staat. Die antwoorden maken bovendien meer kans om door AI-assistenten genoemd te worden.",
              en: "By answering what people search for per service and per town, such as 'energy label Oss' or 'building survey Den Bosch'. A complete [[lokale-seo|Google Business Profile]] with reviews helps in the local results. Also write clear [[seo-content|pages]] about the questions you hear every week, for example when a survey is sensible and what the report contains. Those answers also stand a better chance of being mentioned by AI assistants.",
            },
          },
          {
            q: { nl: "Hoe krijg ik meer opdrachten via makelaars en hypotheekadviseurs?", en: "How do I get more assignments through estate agents and mortgage advisors?" },
            a: {
              nl: "Maak het ze makkelijk: een vaste contactpersoon, een snel [[offerte-calculator|aanvraagformulier]] en heldere afspraken over doorlooptijd en communicatie met de klant. Een korte [[presentaties-pitchdecks|presentatie]] over je werkwijze en specialisaties helpt bij een eerste kennismaking, en via LinkedIn blijf je in beeld. Let wel op je onafhankelijkheid: voor veel taxaties gelden strikte regels over wie de opdracht geeft en welke banden je met andere partijen mag hebben. Zakelijke relaties zijn prima, zolang je oordeel onafhankelijk blijft.",
              en: "Make it easy for them: a fixed point of contact, a quick [[offerte-calculator|request form]] and clear agreements on turnaround and communication with the client. A short [[presentaties-pitchdecks|presentation]] about your approach and specialisms helps at a first meeting, and LinkedIn keeps you on their radar. Do mind your independence: many valuations come with strict rules on who commissions them and which ties you may have with other parties. Business relationships are fine, as long as your judgement stays independent.",
            },
          },
          {
            q: { nl: "Kunnen we AI gebruiken bij het schrijven van rapporten?", en: "Can we use AI when writing reports?" },
            a: {
              nl: "Als hulpmiddel wel, voor het oordeel niet. AI kan vaste passages voorbereiden, aantekeningen van een inspectie ordenen of een samenvatting voorstellen, maar de waardering en de conclusies blijven van de taxateur of adviseur. Check wat je beroepsregels en je register zeggen over het gebruik van zulke tools, en zet geen klantgegevens in openbare AI-diensten. Met een [[ai-integraties|AI-integratie]] in je eigen omgeving en een praktische [[ai-workshops|workshop]] voor je team gebruik je het veilig en met beleid.",
              en: "As an aid, yes; for the judgement, no. AI can prepare standard passages, organise inspection notes or suggest a summary, but the valuation and conclusions remain the valuer's or advisor's. Check what your professional rules and your register say about using such tools, and do not put client data into public AI services. With an [[ai-integraties|AI integration]] in your own environment and a practical [[ai-workshops|workshop]] for your team, you use it safely and sensibly.",
            },
          },
        ],
      },
      {
        name: { nl: "Vastgoedbeheer & verhuur", en: "Property management & lettings" },
        intro: {
          nl: "Voor vastgoedbeheerders, VvE-beheerders, verhuurmakelaars, woningcorporaties en verhuurders van woningen, kantoren en bedrijfsruimte.",
          en: "For property managers, owners' association managers, letting agents, housing associations and landlords of homes, offices and commercial space.",
        },
        types: [
          { nl: "Vastgoedbeheerders", en: "Property managers" },
          { nl: "VvE-beheerders", en: "Owners' association managers" },
          { nl: "Verhuurmakelaars", en: "Letting agents" },
          { nl: "Woningcorporaties", en: "Housing associations" },
          { nl: "Woningverhuurders", en: "Residential landlords" },
          { nl: "Verhuurders van bedrijfsruimte", en: "Commercial landlords" },
        ],
        useCases: [
          {
            title: { nl: "Huurdersportaal voor meldingen en documenten", en: "Tenant portal for requests and documents" },
            text: {
              nl: "Huurders melden reparaties met foto, volgen de status en vinden hun contract en huisregels op één plek. Dat scheelt je beheerteam veel telefoontjes.",
              en: "Tenants report repairs with a photo, follow the status and find their contract and house rules in one place. That saves your management team a lot of calls.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Huuraanbod met slimme inschrijving", en: "Rental listings with smart registration" },
            text: {
              nl: "Beschikbare woningen of units met filters, plattegrond en een inschrijfformulier dat meteen de juiste gegevens vraagt. Zo krijg je kandidaten die passen.",
              en: "Available homes or units with filters, floor plans and a registration form that asks for the right details straight away. That way you get candidates who fit.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Kandidaten automatisch opvolgen", en: "Following up candidates automatically" },
            text: {
              nl: "Kandidaten krijgen direct een bevestiging en een uitnodiging voor een bezichtiging. Je team ziet in het CRM wie waar in het proces staat.",
              en: "Candidates instantly receive a confirmation and an invitation to a viewing. Your team sees in the CRM who is where in the process.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
          },
          {
            title: { nl: "Heldere bewonerscommunicatie bij renovatie", en: "Clear resident communication during renovation" },
            text: {
              nl: "Brieven, folders en een projectpagina die bewoners in gewone taal uitleggen wat er gaat gebeuren en wanneer. Met één vast aanspreekpunt erbij.",
              en: "Letters, leaflets and a project page that explain to residents in plain language what will happen and when. With one fixed point of contact.",
            },
            service: "grafisch-ontwerp-print",
            application: "flyers-posters",
          },
          {
            title: { nl: "Storingschatbot buiten kantoortijd", en: "Out-of-hours fault chatbot" },
            text: {
              nl: "Een assistent die huurders helpt hun storing goed te omschrijven en bij spoed direct het juiste noodnummer geeft. Gewone meldingen staan maandagochtend netjes klaar voor je team.",
              en: "An assistant that helps tenants describe their fault properly and gives the right emergency number straight away when it is urgent. Regular reports are waiting neatly for your team on Monday morning.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
          {
            title: { nl: "Gevonden door huurders en eigenaren", en: "Found by tenants and owners" },
            text: {
              nl: "Pagina's voor zoekopdrachten als 'huurwoning Den Bosch' of 'VvE-beheer Brabant', plus een compleet Google Bedrijfsprofiel. Zo vinden zowel huurders als vastgoedeigenaren je zonder omweg.",
              en: "Pages for searches like 'rental home Den Bosch' or 'owners' association management Brabant', plus a complete Google Business Profile. That way both tenants and property owners find you directly.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Animatie bij een renovatie", en: "Animation for a renovation" },
            text: {
              nl: "Een korte animatie die bewoners stap voor stap laat zien wat er bij hun renovatie gebeurt. Begrijpelijk zonder vaktaal, en ook voor wie de brief niet leest of minder goed Nederlands spreekt.",
              en: "A short animation that shows residents step by step what will happen during their renovation. Clear without jargon, and also for those who do not read the letter or speak less Dutch.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "Huurcheck vooraf", en: "Rental check upfront" },
            text: {
              nl: "Een korte check op inkomen, huishouden en ingangsdatum laat zoekers zien of een woning bij ze past, voordat ze reageren. Dat scheelt je team kansloze aanvragen en de zoeker een teleurstelling.",
              en: "A short check on income, household and start date shows searchers whether a home suits them before they respond. That saves your team hopeless applications and spares the searcher a disappointment.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat heeft een vastgoedbeheerder aan een huurdersportaal?", en: "What does a property manager gain from a tenant portal?" },
            a: {
              nl: "Vooral rust en overzicht. In een [[klantportaal|huurdersportaal]] melden huurders een reparatie met foto's erbij, volgen ze de status en vinden ze zelf hun contract, huisregels en de contactgegevens van de opzichter. Je beheerteam hoeft minder te bellen en te mailen, en meldingen raken niet meer zoek in een gedeelde inbox. Werk je met beheersoftware, dan kan het portaal daar via een [[api-koppelingen|koppeling]] gegevens uit halen. Wat mogelijk is, hangt af van je pakket.",
              en: "Mostly peace and overview. In a [[klantportaal|tenant portal]] tenants report a repair with photos, follow its status and find their contract, house rules and the caretaker's details themselves. Your management team spends less time on calls and emails, and requests no longer get lost in a shared inbox. If you use property management software, the portal can pull data from it through an [[api-koppelingen|integration]]. What is possible depends on your package.",
            },
          },
          {
            q: {
              nl: "Hoe verhuur ik woningen of bedrijfsruimte sneller via mijn eigen website?",
              en: "How do I let homes or commercial space faster through my own website?",
            },
            a: {
              nl: "Door het aanbod net zo goed te presenteren als een verkoopobject. Goede foto's, een plattegrond, de huurprijs en servicekosten, de beschikbaarheid en de voorwaarden horen er gewoon bij. Filters helpen zoekers snel bij het juiste object. Een slim inschrijfformulier vraagt meteen naar inkomen, ingangsdatum en wensen, zodat je kandidaten makkelijk selecteert. Platforms zoals Funda kunnen daarnaast een extra kanaal zijn. Met een helder [[ux-ui-webdesign|webdesign]] wordt je eigen site de plek waar het gebeurt.",
              en: "By presenting rentals as well as you would a property for sale. Good photos, a floor plan, the rent and service charges, availability and conditions simply belong there. Filters help searchers find the right property quickly. A smart registration form asks straight away about income, start date and wishes, so you can select candidates easily. Platforms such as Funda can be an extra channel alongside. With clear [[ux-ui-webdesign|web design]] your own site becomes the place where it happens.",
            },
          },
          {
            q: {
              nl: "Hoe communiceer je als corporatie of beheerder helder bij een renovatie?",
              en: "How do you communicate clearly as a housing association or manager during a renovation?",
            },
            a: {
              nl: "Begin bij de vragen van bewoners: wat gaat er gebeuren, wanneer zijn wij aan de beurt, moeten we eruit en bij wie kunnen we terecht? Beantwoord die in gewone taal, op taalniveau B1, en houd het actueel. Een projectpagina met een planning per blok, aangevuld met [[flyers-posters|brieven en folders]] voor wie niet online zit, werkt goed. Een korte animatie maakt ingrijpend werk begrijpelijk. Eén vast aanspreekpunt voorkomt dat bewoners van het kastje naar de muur gaan.",
              en: "Start with the residents' questions: what will happen, when is it our turn, do we have to move out and who can we talk to? Answer them in plain language and keep it up to date. A project page with a schedule per block, backed by [[flyers-posters|letters and leaflets]] for people who are not online, works well. A short animation makes major work understandable. One fixed point of contact stops residents being sent from pillar to post.",
            },
          },
          {
            q: { nl: "Kunnen huurders 's avonds of in het weekend een storing melden?", en: "Can tenants report a fault in the evening or at the weekend?" },
            a: {
              nl: "Ja. Een online meldformulier werkt altijd, en een [[ai-chatbots|chatbot]] kan huurders helpen hun melding goed te omschrijven of eerst een paar simpele dingen te checken. Bij spoed, zoals een lekkage of een kapotte voordeur, verwijst hij direct naar het juiste noodnummer. Gewone meldingen staan netjes klaar voor je team op maandagochtend. Belangrijk is dat je vooraf afspreekt wat spoed is, zodat niemand met een probleem blijft zitten.",
              en: "Yes. An online report form always works, and a [[ai-chatbots|chatbot]] can help tenants describe the problem properly or check a few simple things first. For emergencies, such as a leak or a broken front door, it points straight to the right emergency number. Regular reports are waiting neatly for your team on Monday morning. The key is agreeing upfront what counts as urgent, so nobody is left stuck with a problem.",
            },
          },
          {
            q: { nl: "Hoe selecteer ik huurders eerlijk en zonder te discrimineren?", en: "How do I select tenants fairly and without discrimination?" },
            a: {
              nl: "Leg je selectiecriteria vooraf vast en maak ze openbaar, bijvoorbeeld bij elke woning op je website; de Wet goed verhuurderschap vraagt verhuurders om een transparante en niet-discriminerende werkwijze. Behandel elke kandidaat in dezelfde volgorde en op dezelfde manier, en vraag alleen de gegevens die je in die fase echt nodig hebt. Een [[check-tools|huurcheck]] en een slim inschrijfformulier helpen om dat consequent te doen. Laat je voorwaarden en formulieren daarnaast juridisch checken.",
              en: "Set your selection criteria in advance and make them public, for example with each property on your website; the Dutch Good Landlord Act requires landlords to work in a transparent and non-discriminatory way. Treat every candidate in the same order and in the same way, and only ask for the data you really need at that stage. A [[check-tools|rental check]] and a smart registration form help you do this consistently. Also have your terms and forms checked by a lawyer.",
            },
          },
          {
            q: { nl: "Wat moet een VvE-beheerder online regelen voor eigenaren?", en: "What should an owners' association manager arrange online for owners?" },
            a: {
              nl: "Eigenaren willen vooral inzicht: notulen, de begroting, de stand van het reservefonds en het meerjarenonderhoudsplan. Zet die stukken in een [[klantportaal|eigenarenportaal]], samen met een plek om schade te melden en de uitnodiging voor de ledenvergadering. Dat scheelt een hoop mails met bijlagen en vragen naar 'die ene versie'. Werk je met beheersoftware, dan kan het portaal daar via een [[api-koppelingen|koppeling]] gegevens uit halen, afhankelijk van je pakket.",
              en: "Owners mainly want insight: minutes, the budget, the state of the reserve fund and the long-term maintenance plan. Put those documents in an [[klantportaal|owners' portal]], together with a place to report damage and the invitation to the general meeting. That saves a lot of emails with attachments and questions about 'that one version'. If you use management software, the portal can pull data from it through an [[api-koppelingen|integration]], depending on your package.",
            },
          },
          {
            q: { nl: "Is een eigen website nodig naast Funda of Pararius?", en: "Do I need my own website alongside Funda or Pararius?" },
            a: {
              nl: "Platforms geven bereik, je eigen site geeft je controle. Op je eigen website bepaal je de presentatie, vraag je via een slim formulier direct de juiste gegevens uit en bouw je een lijst op van zoekers voor volgend aanbod. Het werkt het best als je aanbod één keer invoert en het via een [[api-koppelingen|koppeling]] op beide plekken verschijnt, als je systeem dat ondersteunt. Met [[landingspaginas|eigen aanbodpagina's]] voor bijzondere objecten of nieuwe projecten trek je bovendien huurders die gericht naar jou zoeken.",
              en: "Platforms bring reach, your own site gives you control. On your own website you decide the presentation, ask for the right details straight away with a smart form and build a list of searchers for future listings. It works best when you enter listings once and they appear in both places through an [[api-koppelingen|integration]], if your system supports it. With [[landingspaginas|dedicated listing pages]] for special properties or new projects you also attract tenants who search for you specifically.",
            },
          },
        ],
      },
      {
        name: { nl: "Bedrijfs- & agrarisch vastgoed", en: "Commercial & agricultural property" },
        intro: {
          nl: "Voor bedrijfsmakelaars, makelaars in agrarisch en landelijk vastgoed, beleggers in bedrijfsvastgoed en ontwikkelaars van bedrijventerreinen, van boerderij met grond tot logistiek pand.",
          en: "For commercial property agents, agents in agricultural and rural property, commercial property investors and business park developers, from a farm with land to a logistics building.",
        },
        types: [
          { nl: "Bedrijfsmakelaars", en: "Commercial property agents" },
          { nl: "Agrarische makelaars", en: "Agricultural estate agents" },
          { nl: "Makelaars in landelijk vastgoed", en: "Rural property agents" },
          { nl: "Beleggers in bedrijfsvastgoed", en: "Commercial property investors" },
          { nl: "Ontwikkelaars van bedrijventerreinen", en: "Business park developers" },
        ],
        useCases: [
          {
            title: { nl: "Dronebeelden van perceel en omgeving", en: "Drone footage of plot and surroundings" },
            text: {
              nl: "Een boerderij met grond of een bedrijfskavel aan de snelweg leg je het best vast vanuit de lucht. Ligging, ontsluiting en omvang in één shot.",
              en: "A farm with land or a business plot by the motorway is best captured from the air. Location, access and size in a single shot.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
          {
            title: { nl: "Objectbrochure met kaarten en kerncijfers", en: "Property brochure with maps and key figures" },
            text: {
              nl: "Kadaster, bereikbaarheid, huurders en kerncijfers overzichtelijk in één document. Voor Bernheze Makelaars ontwierpen we zo een memorandum voor een gezondheidscentrum.",
              en: "Land registry, accessibility, tenants and key figures clearly in one document. For Bernheze Makelaars we designed a memorandum like this for a health centre.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
          {
            title: { nl: "Zoekersmatch-widget voor landelijke woningen", en: "Searcher match widget for rural homes" },
            text: {
              nl: "Een widget die eigenaren laat zien hoeveel actieve zoekers er in hun regio zijn, en ze uitnodigt voor een waardebepaling. Zoals we voor Buitenstate bouwden.",
              en: "A widget that shows owners how many active searchers there are in their region, and invites them to request a valuation. Like the one we built for Buitenstate.",
            },
            service: "configurators-lead-tools-widgets",
            application: "website-widgets",
          },
          {
            title: { nl: "LinkedIn-campagnes richting ondernemers en beleggers", en: "LinkedIn campaigns for entrepreneurs and investors" },
            text: {
              nl: "Bedrijfsruimte of een beleggingsobject gericht onder de aandacht bij ondernemers, beleggers en vastgoedmanagers. Precies de mensen die zelden op een woningsite rondkijken.",
              en: "Commercial space or an investment property in front of entrepreneurs, investors and property managers. Exactly the people who rarely browse a housing site.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "Objectpagina met alle kerncijfers", en: "Property page with all key figures" },
            text: {
              nl: "Per object oppervlaktes, bestemming, bereikbaarheid en downloads op één heldere pagina, met kaart en plattegrond. Een ondernemer of belegger heeft zo in een paar minuten de kern te pakken.",
              en: "For each property the floor areas, zoning, accessibility and downloads on one clear page, with map and floor plan. An entrepreneur or investor grasps the essentials in a few minutes.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Zoekprofielen automatisch gematcht", en: "Search profiles matched automatically" },
            text: {
              nl: "Ondernemers en beleggers leggen hun zoekprofiel vast en krijgen automatisch bericht als er een passend object binnenkomt. Jij ziet in je CRM wie waarnaar zoekt, ook bij objecten die nooit openbaar worden.",
              en: "Entrepreneurs and investors save their search profile and are notified automatically when a matching property comes in. You see in your CRM who is looking for what, including for properties that never go public.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Gevonden op regio en objecttype", en: "Found by region and property type" },
            text: {
              nl: "Pagina's voor zoekopdrachten als 'bedrijfspand huren Oss' of 'agrarisch bedrijf te koop Brabant', met lokale kennis en actueel aanbod in plaats van dunne kopieën van dezelfde tekst.",
              en: "Pages for searches like 'commercial unit to let Oss' or 'farm for sale Brabant', with local knowledge and current listings instead of thin copies of the same text.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Digitale dataroom voor beleggers", en: "Digital data room for investors" },
            text: {
              nl: "Na het tekenen van een geheimhoudingsverklaring bekijken geïnteresseerden huurcontracten, rapporten en tekeningen in een beveiligde omgeving. Jij ziet wie wat heeft geopend, en er gaan geen bijlagen meer eindeloos rond.",
              en: "After signing a non-disclosure agreement, interested parties view leases, reports and drawings in a secure environment. You see who has opened what, and no attachments get forwarded endlessly.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet er in een brochure voor bedrijfsvastgoed?", en: "What belongs in a brochure for commercial property?" },
            a: {
              nl: "Alles wat een ondernemer of belegger nodig heeft om te beslissen of hij verder wil kijken. Denk aan oppervlaktes en indeling, huurinkomsten of vraagprijs, bestemming, kadastrale gegevens, bereikbaarheid en parkeren. Begin met een samenvatting op één pagina en werk daarna de details uit, met kaarten, plattegronden en [[infographics|infographics]]. Zo'n [[brochures-magazines|brochure]] of memorandum ontwerpen we als sjabloon, zodat elk volgend object er net zo verzorgd uitziet. De cijfers en stukken lever je zelf aan.",
              en: "Everything an entrepreneur or investor needs to decide whether to look further. Think floor areas and layout, rental income or asking price, zoning, land registry details, accessibility and parking. Start with a one-page summary and then work out the details, with maps, floor plans and [[infographics|infographics]]. We design a [[brochures-magazines|brochure]] or memorandum like this as a template, so every next property looks just as polished. You supply the figures and documents yourself.",
            },
          },
          {
            q: { nl: "Hoe presenteer je een agrarisch bedrijf of boerderij met grond online?", en: "How do you present an agricultural business or farm with land online?" },
            a: {
              nl: "Met de feiten én het verhaal. Een koper wil weten hoeveel hectare er is, welke gebouwen, welke vergunningen en welke bestemming. Tegelijk koopt hij een plek en een manier van leven. Combineer daarom een overzichtelijke objectpagina met kaarten en kerncijfers met sfeervolle foto's en [[dronevideo|drone-opnames]] die laten zien hoe de percelen liggen. Leg vergunningen en bijzonderheden helder uit, of verwijs naar de juiste stukken. Dan begint een bezichtiging met de juiste verwachtingen.",
              en: "With the facts and the story. A buyer wants to know how many hectares there are, which buildings, which permits and which zoning. At the same time they are buying a place and a way of life. So combine a clear property page with maps and key figures with atmospheric photos and [[dronevideo|drone footage]] showing how the plots lie. Explain permits and particulars clearly, or point to the right documents. Then viewings start with the right expectations.",
            },
          },
          {
            q: {
              nl: "Hoe vind ik als makelaar in landelijk vastgoed verkopers die nog niet actief zoeken?",
              en: "How do I find sellers of rural property who are not actively looking yet?",
            },
            a: {
              nl: "Geef ze een reden om nu al contact op te nemen. Een [[website-widgets|zoekers-widget]] laat eigenaren zien hoeveel actieve zoekers er in hun regio zijn, en nodigt ze uit voor een waardebepaling. Voor Buitenstate bouwden we zo'n Zoekersmatch. Verhalen over landelijk wonen, bedrijfsoverdracht of stoppen met boeren trekken eigenaren die er al over nadenken. Met een nieuwsbrief houd je ze vervolgens rustig op de hoogte, tot het moment dat ze willen verkopen.",
              en: "Give them a reason to get in touch now. A [[website-widgets|searcher widget]] shows owners how many active searchers there are in their region and invites them to request a valuation. We built a Zoekersmatch like this for Buitenstate. Stories about rural living, business succession or retiring from farming attract owners who are already thinking about it. A newsletter then keeps them informed at an easy pace, until the moment they want to sell.",
            },
          },
          {
            q: { nl: "Hoe bereik ik ondernemers die een bedrijfspand zoeken?", en: "How do I reach entrepreneurs looking for commercial premises?" },
            a: {
              nl: "Ondernemers zoeken vaak pas actief als het knelt, dus zorg dat je op dat moment vindbaar bent. Met [[google-ads|Google Ads]] en goede pagina's op zoektermen als 'bedrijfsruimte huren' plus plaatsnaam sta je in beeld bij wie nu zoekt. Via [[linkedin-ads|LinkedIn]] en een nieuwsbrief met nieuw aanbod blijf je zichtbaar bij ondernemers die over een jaar willen verhuizen. Ook accountants en ondernemersverenigingen in je regio zijn waardevolle doorverwijzers.",
              en: "Entrepreneurs often only search actively when space gets tight, so make sure you can be found at that moment. With [[google-ads|Google Ads]] and good pages for terms like 'commercial space to let' plus a town name, you show up for those searching now. Through [[linkedin-ads|LinkedIn]] and a newsletter with new listings you stay visible to entrepreneurs planning to move in a year's time. Accountants and business associations in your region are valuable referrers too.",
            },
          },
          {
            q: { nl: "Hoe deel je vertrouwelijke stukken veilig met beleggers?", en: "How do you share confidential documents safely with investors?" },
            a: {
              nl: "Niet als bijlage in een mail die eindeloos wordt doorgestuurd. Met een [[klantportaal|digitale dataroom]] geef je per persoon toegang, pas nadat een geheimhoudingsverklaring is getekend. Je kunt toegang laten verlopen, stukken van een watermerk voorzien en zien wie wat heeft geopend. Dat geeft rust aan de verkopende partij en houdt het proces overzichtelijk voor iedereen.",
              en: "Not as an attachment in an email that gets forwarded endlessly. With a [[klantportaal|digital data room]] you grant access per person, only after a non-disclosure agreement has been signed. You can let access expire, watermark documents and see who opened what. That reassures the selling party and keeps the process clear for everyone.",
            },
          },
          {
            q: { nl: "Hoe pak je de verkoop van een agrarisch bedrijf discreet aan?", en: "How do you handle the sale of a farm discreetly?" },
            a: {
              nl: "Veel agrarische ondernemers willen niet dat het hele dorp meekijkt, en dat is goed te regelen. Begin met een anonieme [[brochures-magazines|teaser]] zonder adres of herkenbare foto's, en deel die alleen met geselecteerde zoekers uit je bestand. Pas na interesse en een getekende geheimhoudingsverklaring volgen de details en een bezichtiging. Met goed bijgehouden [[marketing-automation|zoekprofielen]] weet je snel wie in aanmerking komt.",
              en: "Many farmers do not want the whole village watching, and that is easy to arrange. Start with an anonymous [[brochures-magazines|teaser]] without an address or recognisable photos, and share it only with selected searchers from your database. Details and a viewing follow only after interest and a signed non-disclosure agreement. With well-kept [[marketing-automation|search profiles]] you quickly know who qualifies.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Makelaarskantoren", en: "Estate agencies" },
      { nl: "Woningmakelaars", en: "Residential estate agents" },
      { nl: "Aankoopmakelaars", en: "Buying agents" },
      { nl: "Makelaarsketens", en: "Estate agency chains" },
      { nl: "Projectontwikkelaars", en: "Property developers" },
      { nl: "Gebiedsontwikkelaars", en: "Area developers" },
      { nl: "Vastgoedbeleggers", en: "Real estate investors" },
      { nl: "Vastgoedfondsen", en: "Property funds" },
      { nl: "Nieuwbouwmakelaars", en: "New-build estate agents" },
      { nl: "Taxatiebureaus", en: "Valuation firms" },
      { nl: "Woningtaxateurs", en: "Residential valuers" },
      { nl: "Taxateurs bedrijfsmatig vastgoed", en: "Commercial property valuers" },
      { nl: "Vastgoedadviseurs", en: "Real estate advisors" },
      { nl: "Bouwkundig keurders", en: "Building surveyors" },
      { nl: "Energieadviseurs", en: "Energy advisors" },
      { nl: "Vastgoedbeheerders", en: "Property managers" },
      { nl: "VvE-beheerders", en: "Owners' association managers" },
      { nl: "Verhuurmakelaars", en: "Letting agents" },
      { nl: "Woningcorporaties", en: "Housing associations" },
      { nl: "Bedrijfsmakelaars", en: "Commercial property agents" },
      { nl: "Agrarische makelaars", en: "Agricultural estate agents" },
      { nl: "Makelaars in landelijk vastgoed", en: "Rural property agents" },
      { nl: "Beleggers in bedrijfsvastgoed", en: "Commercial property investors" },
    ],
  },

  /* ---------- Interieur & Architectuur ---------- */
  {
    slug: "interieur-architectuur",
    title: { nl: "Interieur & Architectuur", en: "Interiors & Architecture" },
    short: { nl: "Interieur", en: "Interiors" },
    icon: "sofa",
    quote: { nl: "Design you can feel, before it is built.", en: "Design you can feel, before it is built." },
    intro: {
      nl: "Interieurarchitecten, interieurbouwers, showrooms, keukenzaken en projectinrichters: wij geven je ontwerpen en vakwerk een podium dat net zo verzorgd is als je interieurs.",
      en: "Interior architects, interior builders, showrooms, kitchen stores and contract interior companies: we give your designs and craftsmanship a stage as polished as your interiors.",
    },
    description: {
      nl: "In interieur verkoop je iets wat mensen moeten voelen: materiaal, licht, sfeer en vakmanschap. Op een scherm is dat lastig, en juist daar begint de klant tegenwoordig. M7 helpt interieurarchitecten, interieurbouwers, showrooms, keuken- en badkamerspecialisten en projectinrichters om die beleving online en op papier net zo sterk over te brengen als in het echt.\n\nWe ontwikkelen merken en brandbooks, zoals voor interieur experience center DesignersHouse, bouwen portfolio- en showroomwebsites en maken 3D-visualisaties van ruimtes die nog niet bestaan. Met configurators, keuzehulpen en een online afsprakenplanner komen klanten voorbereid binnen, en met lokale SEO en gerichte campagnes vinden particulieren én professionals je makkelijker.",
      en: "In interiors you sell something people need to feel: materials, light, atmosphere and craftsmanship. That is hard on a screen, and the screen is exactly where customers start these days. M7 helps interior architects, interior builders, showrooms, kitchen and bathroom specialists and contract interior companies convey that experience online and on paper as strongly as in real life.\n\nWe develop brands and brandbooks, such as for interior experience centre DesignersHouse, build portfolio and showroom websites and create 3D visuals of spaces that do not exist yet. With configurators, product finders and an online appointment planner customers arrive prepared, and with local SEO and targeted campaigns both consumers and professionals find you more easily.",
    },
    challenges: [
      {
        title: { nl: "Sfeer overbrengen op een scherm", en: "Conveying atmosphere on a screen" },
        text: {
          nl: "Materiaal, licht en detail voel je pas in het echt. Met goede fotografie, 3D-visualisaties en een rustig webdesign komt de beleving ook online over.",
          en: "You only feel materials, light and detail in real life. With good photography, 3D visuals and calm web design the experience comes across online too.",
        },
      },
      {
        title: { nl: "Elk project is anders", en: "Every project is different" },
        text: {
          nl: "Maatwerk past niet in één productfoto. Projectverhalen en een portfolio per type ruimte laten zien wat je kunt en hoe je denkt.",
          en: "Custom work does not fit in a single product shot. Project stories and a portfolio per type of space show what you can do and how you think.",
        },
      },
      {
        title: { nl: "Van inspiratie naar afspraak", en: "From inspiration to appointment" },
        text: {
          nl: "Mensen verzamelen maandenlang ideeën. Met een keuzehulp, configurator of afsprakenplanner maak je de stap naar een gesprek klein.",
          en: "People collect ideas for months. With a product finder, configurator or appointment planner you make the step to a conversation small.",
        },
      },
      {
        title: { nl: "Particulier én professional bedienen", en: "Serving consumers and professionals" },
        text: {
          nl: "Een eindklant zoekt inspiratie, een architect zoekt een betrouwbare partner. Je merk en website maken beide routes helder.",
          en: "An end customer looks for inspiration, an architect looks for a reliable partner. Your brand and website make both routes clear.",
        },
      },
    ],
    services: [
      "branding-rebranding",
      "websites-webshops",
      "foto-video-3d-animatie",
      "grafisch-ontwerp-print",
      "configurators-lead-tools-widgets",
      "seo-aeo-geo",
    ],
    applications: [
      "merkstrategie",
      "brandbook",
      "huisstijl",
      "ux-ui-webdesign",
      "webflow-website",
      "3d-visualisatie",
      "productfotografie",
      "3d-configurator",
      "keuzehulp-quiz",
      "boekingswidget",
      "brochures-magazines",
      "lokale-seo",
    ],
    /* Mockups in de dienstentegels: DesignersHouse (interieur experience center); overige diensten: standaard */
    visuals: {
      /* Brandbook: omslag met de showroom en het kleurenpalet */
      "branding-rebranding": {
        kind: "book",
        left: `${SC}/designershouse/brandbook-01.webp`,
        right: `${SC}/designershouse/brandbook-17.webp`,
        label: "DesignersHouse",
      },
      /* Stijlelementen en typografie uit het brandbook */
      "grafisch-ontwerp-print": {
        kind: "book",
        left: `${SC}/designershouse/brandbook-21.webp`,
        right: `${SC}/designershouse/brandbook-18.webp`,
        label: "DesignersHouse",
      },
    },
    faqs: [
      {
        q: { nl: "Maken jullie 3D-visualisaties van interieurs?", en: "Do you create 3D visuals of interiors?" },
        a: {
          nl: "Ja. Op basis van je plattegronden, ontwerpen of 3D-modellen maken we fotorealistische renders van ruimtes die nog niet bestaan. Materialen, licht en meubilair zie je zoals ze straks worden, zodat een opdrachtgever met vertrouwen kiest. Ook voor showrooms en collecties maken we sfeerbeelden voor je website, brochure en social media. Je eigen ontwerpsoftware blijft het werkpaard, wij maken er beelden van die verkopen. Meer daarover lees je bij [[3d-visualisatie|3D-visualisatie]].",
          en: "Yes. Based on your floor plans, designs or 3D models we create photorealistic renders of spaces that do not exist yet. Materials, light and furniture look the way they will, so a client can choose with confidence. For showrooms and collections we also create mood images for your website, brochure and social media. Your own design software stays the workhorse, we turn it into images that sell. Read more under [[3d-visualisatie|3D visualisation]].",
        },
      },
      {
        q: { nl: "Kunnen jullie een website bouwen voor een showroom of interieurwinkel?", en: "Can you build a website for a showroom or interior store?" },
        a: {
          nl: "Zeker. Een goede showroomwebsite laat collecties, merken en sfeer zien en heeft één duidelijk doel: een bezoek of adviesgesprek. Daarom zetten we openingstijden, route en een makkelijke afspraakmogelijkheid prominent in beeld. Wil je ook online verkopen, bijvoorbeeld accessoires of stalen, dan kan er een [[webshop|webshop]] bij. Je beheert alles zelf, zodat nieuwe collecties en acties snel online staan. Zo werkt je website als het visitekaartje van je showroom.",
          en: "Definitely. A good showroom website shows collections, brands and atmosphere and has one clear goal: a visit or an advice session. That is why we put opening hours, directions and an easy way to book an appointment front and centre. If you also want to sell online, accessories or samples for example, a [[webshop|web shop]] can be added. You manage everything yourself, so new collections and promotions are online quickly. Your website then works as the calling card of your showroom.",
        },
      },
      {
        q: { nl: "Werken jullie ook voor interieurprofessionals die vooral zakelijk werken?", en: "Do you also work for interior professionals with mainly business clients?" },
        a: {
          nl: "Ja. Projectinrichters, interieurbouwers en ontwerpers die voor architecten, aannemers of bedrijven werken, hebben een ander verhaal nodig dan een winkel voor particulieren. Daar draait het om referenties, werkwijze en betrouwbaarheid. We maken zakelijke websites, referentiepresentaties en LinkedIn-campagnes die laten zien wat je kunt. Voor DesignersHouse, een interieur experience center voor interieurprofessionals, bouwden we het hele merk vanuit die professional, van [[merkstrategie|merkstrategie]] tot brandbook.",
          en: "Yes. Contract interior companies, interior builders and designers who work for architects, contractors or businesses need a different story than a store for consumers. It is about references, approach and reliability. We create business websites, reference presentations and LinkedIn campaigns that show what you can do. For DesignersHouse, an interior experience centre for interior professionals, we built the entire brand around that professional, from [[merkstrategie|brand strategy]] to brandbook.",
        },
      },
      {
        q: { nl: "Ontwerpen jullie ook brandbooks en drukwerk voor interieurmerken?", en: "Do you also design brandbooks and print for interior brands?" },
        a: {
          nl: "Ja. Een interieurmerk leeft van details, dus die leggen we vast: logo, kleuren, typografie, beeldstijl en hoe dat terugkomt op gevel, showroom, offerte en social media. Voor DesignersHouse maakten we zo'n [[brandbook|brandbook]], van merkstrategie tot stijlelementen. Daarnaast ontwerpen we lookbooks, brochures, stalenkaarten en signing, en regelen we desgewenst het drukwerk. Zo voelt alles wat je klant in handen krijgt als één merk.",
          en: "Yes. An interior brand lives on details, so we capture them: logo, colours, typography, image style and how all of that returns on the facade, in the showroom, on quotes and on social media. For DesignersHouse we created such a [[brandbook|brandbook]], from brand strategy to style elements. We also design lookbooks, brochures, sample cards and signage, and can take care of the printing. That way everything your client holds in their hands feels like one brand.",
        },
      },
    ],
    metaTitle: {
      nl: "Branding, 3D & websites voor interieur en architectuur | M7",
      en: "Branding, 3D & websites for interiors & architecture | M7",
    },
    metaDescription: {
      nl: "M7 helpt interieurarchitecten, interieurbouwers, showrooms, keukenzaken en projectinrichters met branding, 3D-visualisaties, websites en configurators.",
      en: "M7 helps interior architects, interior builders, showrooms, kitchen stores and contract interior companies with branding, 3D visuals, websites and configurators.",
    },
    segments: [
      {
        name: { nl: "Interieurarchitecten", en: "Interior architects" },
        intro: {
          nl: "Voor interieurarchitecten, interieurontwerpers, stylisten en ontwerpstudio's, voor particuliere en zakelijke opdrachtgevers.",
          en: "For interior architects, interior designers, stylists and design studios, working for private and business clients.",
        },
        types: [
          { nl: "Interieurarchitecten", en: "Interior architects" },
          { nl: "Interieurontwerpers", en: "Interior designers" },
          { nl: "Interieurstylisten", en: "Interior stylists" },
          { nl: "Ontwerpstudio's", en: "Design studios" },
          { nl: "Lichtontwerpers", en: "Lighting designers" },
        ],
        useCases: [
          {
            title: { nl: "Portfolio met projectverhalen", en: "Portfolio with project stories" },
            text: {
              nl: "Per project de wens, het ontwerp, de materialen en het resultaat, in grote beelden. Zo zien opdrachtgevers hoe je denkt, niet alleen wat je maakte.",
              en: "Per project the wish, the design, the materials and the result, in large images. Clients see how you think, not just what you made.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "3D-visualisatie van je interieurontwerp", en: "3D visualisation of your interior design" },
            text: {
              nl: "Fotorealistische renders van ruimtes die nog niet bestaan. Opdrachtgevers zien materiaal, licht en sfeer voordat er iets besteld is.",
              en: "Photorealistic renders of spaces that do not exist yet. Clients see materials, light and atmosphere before anything is ordered.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Een merk dat bij je signatuur past", en: "A brand that matches your signature" },
            text: {
              nl: "Een huisstijl die jouw ontwerpstijl uitdraagt, van logo en typografie tot moodboard-sjablonen en offertes. Herkenbaar, zonder dat het je werk overschreeuwt.",
              en: "An identity that carries your design style, from logo and typography to moodboard templates and quotes. Recognisable, without shouting over your work.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Pinterest en Instagram met een plan", en: "Pinterest and Instagram with a plan" },
            text: {
              nl: "Inspirerende posts die naar je portfolio leiden, met een planning die naast je projecten vol te houden is.",
              en: "Inspiring posts that lead to your portfolio, with a schedule you can keep up alongside your projects.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Gevonden op 'interieurarchitect' in je regio", en: "Found as an interior architect locally" },
            text: {
              nl: "Een pagina per type project en regio, en projectverhalen met de woorden die opdrachtgevers zelf gebruiken. Zo vindt iemand in Den Bosch of Eindhoven jou, en niet alleen een woonblog.",
              en: "A page per type of project and region, and project stories in the words clients use themselves. That way someone in Den Bosch or Eindhoven finds you, not just a home decor blog.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Stijlquiz die eindigt in een gesprek", en: "Style quiz that starts a conversation" },
            text: {
              nl: "Een korte quiz die bezoekers helpt hun smaak, ruimte en budget te verwoorden, en eindigt bij een kennismaking. Leuk om te doen, en jij weet vooraf waar het gesprek over gaat.",
              en: "A short quiz that helps visitors put their taste, space and budget into words, and ends with an introductory meeting. Fun to do, and you know beforehand what the conversation will be about.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Ontwerpvoorstel als verzorgd document", en: "Design proposal as a polished document" },
            text: {
              nl: "Een vaste opmaak voor moodboard, materiaalstaat, plattegrond en renders in één document. Je voorstel ziet er net zo doordacht uit als je ontwerp, en je team werkt vanuit hetzelfde sjabloon.",
              en: "A fixed layout for moodboard, materials list, floor plan and renders in one document. Your proposal looks as considered as your design, and your team works from the same template.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "AI-workshop voor je studio", en: "AI workshop for your studio" },
            text: {
              nl: "Een praktische workshop over AI voor moodboards, eerste sfeerbeelden en teksten. Je team wint tijd op het voorwerk, zonder de eigen signatuur van je studio kwijt te raken.",
              en: "A practical workshop on AI for moodboards, first mood images and copy. Your team saves time on the groundwork without losing your studio's own signature.",
            },
            service: "ai-consultancy",
            application: "ai-workshops",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe ziet een goede website voor een interieurarchitect eruit?", en: "What does a good website for an interior architect look like?" },
            a: {
              nl: "Rustig, beeldgedreven en persoonlijk. Je projecten zijn het bewijs, dus die krijgen ruimte: grote foto's, een korte toelichting op de vraag van de klant en de keuzes die je maakte. Laat daarnaast zien hoe een traject verloopt, van kennismaking tot oplevering, en wat het ongeveer kost om te beginnen. Opdrachtgevers kiezen een ontwerper die ze vertrouwen, dus jouw gezicht en jouw verhaal mogen zichtbaar zijn. Een helder [[ux-ui-webdesign|webdesign]] laat het werk spreken.",
              en: "Calm, image-led and personal. Your projects are the proof, so they get room: large photos, a short note on the client's request and the choices you made. Also show how a project runs, from first meeting to completion, and roughly what it costs to get started. Clients choose a designer they trust, so your face and your story deserve to be visible. Clear [[ux-ui-webdesign|web design]] lets the work speak.",
            },
          },
          {
            q: { nl: "Wanneer loont een 3D-visualisatie van een interieurontwerp?", en: "When is a 3D visualisation of an interior design worth it?" },
            a: {
              nl: "Zodra een opdrachtgever moet kiezen tussen materialen, kleuren of indelingen die hij nog niet kan zien. Een moodboard geeft richting, maar een render laat zien hoe het eikenhout naast die natuursteen staat in het licht van een novembermiddag. Dat voorkomt twijfel en dure wijzigingen achteraf. Een [[3d-visualisatie|3D-visualisatie]] van een interieur gebruik je daarna ook in je portfolio en op social media, nog voordat het project is opgeleverd. Mits de opdrachtgever akkoord is, uiteraard.",
              en: "As soon as a client has to choose between materials, colours or layouts they cannot see yet. A moodboard sets the direction, but a render shows how that oak sits next to that natural stone in the light of a November afternoon. That prevents doubt and costly changes later. You can then use a [[3d-visualisatie|3D visualisation]] of an interior in your portfolio and on social media, even before the project is finished. Provided the client agrees, of course.",
            },
          },
          {
            q: {
              nl: "Hoe vind ik als interieurontwerper opdrachtgevers die bij mijn stijl passen?",
              en: "How do I find clients who match my style as an interior designer?",
            },
            a: {
              nl: "Door duidelijk te kiezen waar je voor staat. Een ontwerper die alles doet, is voor niemand de eerste keus. Met een scherpe [[merkstrategie|positionering]] bepaal je je stijl, je doelgroep en je type projecten, en dat laat je overal consequent zien. Schrijf over de vragen die opdrachtgevers je stellen, deel projecten op Instagram en Pinterest, en werk samen met aannemers, interieurbouwers en showrooms die jouw soort klanten al kennen. Zo komen de juiste aanvragen vaker binnen.",
              en: "By choosing clearly what you stand for. A designer who does everything is nobody's first choice. With sharp [[merkstrategie|positioning]] you define your style, your audience and your type of projects, and you show that consistently everywhere. Write about the questions clients ask you, share projects on Instagram and Pinterest, and team up with contractors, interior builders and showrooms that already know your kind of client. That way the right enquiries come in more often.",
            },
          },
          {
            q: { nl: "Mag ik foto's van opgeleverde projecten bij particulieren gebruiken?", en: "Can I use photos of completed projects in private homes?" },
            a: {
              nl: "Alleen als de opdrachtgever akkoord is, dus neem dat standaard op in je opdrachtbevestiging. Laat herkenbare details weg, zoals huisnummers, familiefoto's of een uitzicht dat het adres verraadt. Huur je een fotograaf in, spreek dan vooraf af waar je de beelden mag gebruiken, want het auteursrecht ligt in principe bij de maker. En noem de architect of interieurbouwer als die aan het project meewerkte; dat wordt gewaardeerd en levert soms een [[linkbuilding|link]] terug op.",
              en: "Only if the client agrees, so include it as standard in your engagement letter. Leave out recognisable details, such as house numbers, family photos or a view that gives away the address. If you hire a photographer, agree beforehand where you may use the images, because copyright in principle belongs to the maker. And credit the architect or interior builder if they worked on the project; it is appreciated and sometimes earns you a [[linkbuilding|link]] back.",
            },
          },
          {
            q: { nl: "Hoe laat ik zien wat een interieurontwerp kost zonder vaste prijslijst?", en: "How do I show what an interior design costs without a fixed price list?" },
            a: {
              nl: "Leg uit hoe je rekent, ook als elk project anders is: per uur, een vast bedrag per fase of een pakket voor bijvoorbeeld een advies aan huis. Een paar voorbeeldprojecten met de omvang en de aanpak geven bezoekers houvast. Met een [[offerte-calculator|prijsindicatie]] op basis van ruimte, oppervlakte en wensen krijgt iemand een eerste beeld, en jij een aanvraag van iemand die weet waar hij aan begint. Die openheid schept vertrouwen.",
              en: "Explain how you charge, even if every project is different: by the hour, a fixed amount per phase or a package for, say, a home consultation. A few example projects with their scope and approach give visitors something to hold on to. With a [[offerte-calculator|price indication]] based on space, floor area and wishes, someone gets a first idea, and you get an enquiry from someone who knows what they are starting. That openness builds trust.",
            },
          },
          {
            q: { nl: "Kan AI een interieurarchitect helpen, of maakt het ons overbodig?", en: "Can AI help an interior architect, or does it make us redundant?" },
            a: {
              nl: "Helpen kan zeker, overbodig maakt het je niet. AI is handig voor snelle moodboards, eerste sfeerbeelden, teksten en administratief werk, maar ruimtelijk inzicht, technische kennis en het gesprek met de opdrachtgever blijven mensenwerk. Let wel op wat je deelt: plattegronden en gegevens van klanten horen niet in openbare tools. In een [[ai-workshops|AI-workshop]] ontdek je met je team waar het tijd scheelt, en met [[ai-beeld-video|AI-beeld]] verken je sneller een richting.",
              en: "It can certainly help, and it will not make you redundant. AI is handy for quick moodboards, first mood images, copy and admin, but spatial insight, technical knowledge and the conversation with the client remain human work. Do watch what you share: clients' floor plans and data do not belong in public tools. In an [[ai-workshops|AI workshop]] you discover with your team where it saves time, and with [[ai-beeld-video|AI imagery]] you explore a direction faster.",
            },
          },
        ],
      },
      {
        name: { nl: "Interieurbouw & maatwerk", en: "Interior fit-out & joinery" },
        intro: {
          nl: "Voor interieurbouwers, meubelmakers, maatwerktimmerfabrieken, trappenbouwers en specialisten in kasten en wandmeubels op maat, voor particulieren en projecten.",
          en: "For interior fit-out companies, furniture makers, bespoke joinery workshops, staircase builders and specialists in made-to-measure wardrobes and wall units, for homes and projects.",
        },
        types: [
          { nl: "Interieurbouwers", en: "Interior fit-out companies" },
          { nl: "Meubelmakers", en: "Furniture makers" },
          { nl: "Maatwerktimmerfabrieken", en: "Bespoke joinery workshops" },
          { nl: "Trappenbouwers", en: "Staircase builders" },
          { nl: "Kastenmakers op maat", en: "Made-to-measure wardrobe makers" },
        ],
        useCases: [
          {
            title: { nl: "Configurator voor kasten op maat", en: "Configurator for made-to-measure wardrobes" },
            text: {
              nl: "Klanten kiezen afmetingen, indeling, fronten en afwerking en zien een prijsindicatie. Jij krijgt een aanvraag met maten, in plaats van 'kunt u eens langskomen?'.",
              en: "Customers choose dimensions, layout, fronts and finish and see a price indication. You receive an enquiry with measurements, instead of 'could you come round sometime?'.",
            },
            service: "configurators-lead-tools-widgets",
            application: "productconfigurator",
          },
          {
            title: { nl: "Detailfotografie van je vakwerk", en: "Detail photography of your craftsmanship" },
            text: {
              nl: "Een verborgen greep, een naadloze aansluiting, de nerf van het hout: close-ups die laten zien waarom maatwerk zijn prijs heeft.",
              en: "A hidden handle, a seamless joint, the grain of the wood: close-ups that show why custom work is worth its price.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Werkplaatsvideo voor nieuwe collega's", en: "Workshop video for new colleagues" },
            text: {
              nl: "Een korte film uit de werkplaats laat zien hoe het is om bij jou te werken. Vakmensen kiezen eerder voor een plek waar ze trots op kunnen zijn.",
              en: "A short film from the workshop shows what it is like to work for you. Craftspeople are quicker to choose a place they can be proud of.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Referentiemap voor architecten en ontwerpers", en: "Reference deck for architects and designers" },
            text: {
              nl: "Een strakke presentatie met projecten, materialen en werkwijze, die je na een eerste gesprek kunt sturen.",
              en: "A sharp presentation with projects, materials and approach that you can send after a first meeting.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Website met projecten per ruimte", en: "A website with projects by room" },
            text: {
              nl: "Keukens, kasten, trappen en complete interieurs als aparte categorieën, met projectverhalen en een aanvraagformulier dat meteen om maten en foto's van de ruimte vraagt.",
              en: "Kitchens, wardrobes, staircases and complete interiors as separate categories, with project stories and an enquiry form that asks for measurements and photos of the space straight away.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Gevonden op 'kast op maat'", en: "Found for 'made-to-measure wardrobe'" },
            text: {
              nl: "Pagina's voor zoekopdrachten als 'inbouwkast op maat Den Bosch' of 'trap renoveren Brabant', met echte projecten uit die omgeving en een Google Bedrijfsprofiel vol werkfoto's.",
              en: "Pages for searches like 'fitted wardrobe Den Bosch' or 'staircase renovation Brabant', with real projects from the area and a Google Business Profile full of work photos.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Offertes die niet blijven liggen", en: "Quotes that don't get forgotten" },
            text: {
              nl: "Na een offerte krijgt je verkoper automatisch een herinnering en de klant een vriendelijke mail. Zo blijft er geen aanvraag liggen in de drukte van de werkplaats.",
              en: "After a quote goes out, your salesperson gets an automatic reminder and the customer a friendly email. That way no enquiry gets lost in the bustle of the workshop.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
          },
          {
            title: { nl: "Werkplaatsverhalen op Instagram", en: "Workshop stories on Instagram" },
            text: {
              nl: "Van ruwe plaat tot opgeleverde kast: korte posts uit de werkplaats die laten zien hoe vakwerk ontstaat. Inspirerend voor klanten, en een mooi visitekaartje voor toekomstige collega's.",
              en: "From raw board to finished wardrobe: short posts from the workshop that show how craftsmanship comes about. Inspiring for customers, and a fine calling card for future colleagues.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe laat ik als interieurbouwer mijn maatwerk goed zien?", en: "How do I show my custom work as an interior builder?" },
            a: {
              nl: "Maatwerk is lastig te vangen in één productfoto, want elk project is anders. Werk daarom met projectverhalen: de wens van de klant, het ontwerp, de materialen en het eindresultaat, in goed licht gefotografeerd. Details als een verborgen greep of een naadloze aansluiting verdienen een eigen close-up. Op je website en op Instagram of Pinterest bouw je zo een portfolio op dat inspireert én laat zien waarom vakwerk zijn prijs heeft.",
              en: "Custom work is hard to capture in a single product shot, because every project is different. So work with project stories: the client's wish, the design, the materials and the end result, photographed in good light. Details like a hidden handle or a seamless joint deserve their own close-up. On your website and on Instagram or Pinterest you build a portfolio that inspires and shows why craftsmanship is worth its price.",
            },
          },
          {
            q: { nl: "Kan een klant online een kast of meubel op maat samenstellen?", en: "Can a customer put together a made-to-measure wardrobe or piece of furniture online?" },
            a: {
              nl: "Ja, binnen de grenzen die jij bepaalt. In een configurator kiest de klant afmetingen, indeling, fronten, grepen en afwerking, en ziet hij eventueel direct een prijsindicatie. Met een [[3d-configurator|3D-configurator]] draait hij het ontwerp zelfs rond. Het resultaat is een aanvraag met maten en keuzes, in plaats van 'kunt u eens langskomen?'. Voor echt maatwerk blijft het inmeten bij jou, maar het eerste gesprek begint een stuk concreter.",
              en: "Yes, within the limits you set. In a configurator customers choose dimensions, layout, fronts, handles and finish, and can see a price indication straight away. With a [[3d-configurator|3D configurator]] they can even turn the design around. The result is an enquiry with measurements and choices, instead of 'could you come round sometime?'. For true custom work the measuring stays with you, but the first conversation starts a lot more concretely.",
            },
          },
          {
            q: { nl: "Hoe vind ik vakmensen voor mijn werkplaats?", en: "How do I find skilled people for my workshop?" },
            a: {
              nl: "Meubelmakers en interieurbouwers zijn trots op hun vak, dus laat zien waar ze aan werken. Een korte video uit de werkplaats, verhalen van collega's en foto's van opgeleverde projecten zeggen meer dan een opsomming van eisen. Vertel eerlijk over de machines, de afwisseling en de ruimte om te leren. Met [[employer-branding|employer branding]] en een werkenbij-pagina die net zo verzorgd is als je interieurs, val je op bij vakmensen die nu nog ergens anders werken.",
              en: "Furniture makers and interior builders take pride in their craft, so show what they work on. A short video from the workshop, stories from colleagues and photos of finished projects say more than a list of requirements. Be honest about the machinery, the variety and the room to learn. With [[employer-branding|employer branding]] and a careers page as polished as your interiors, you stand out to craftspeople who currently work elsewhere.",
            },
          },
          {
            q: {
              nl: "Hoe werk ik als interieurbouwer goed samen met architecten en ontwerpers?",
              en: "How do I work well with architects and designers as an interior builder?",
            },
            a: {
              nl: "Door zichtbaar te maken wat je toevoegt. Architecten en ontwerpers zoeken een interieurbouwer die hun ontwerp begrijpt, meedenkt over details en betrouwbaar levert. Laat dat zien met referentieprojecten waarin het ontwerp en de uitvoering allebei de credits krijgen, en met een [[presentaties-pitchdecks|referentiepresentatie]] die je na een eerste gesprek kunt sturen. Een zakelijke route op je website en een actief LinkedIn-profiel helpen om in beeld te blijven bij de bureaus waar je graag mee werkt.",
              en: "By making your contribution visible. Architects and designers look for an interior builder who understands their design, thinks along about details and delivers reliably. Show that with reference projects in which both design and execution get credit, and with a [[presentaties-pitchdecks|reference presentation]] you can send after a first meeting. A business route on your website and an active LinkedIn profile help you stay on the radar of the studios you like to work with.",
            },
          },
          {
            q: { nl: "Hoe krijg ik aanvragen waar ik echt iets mee kan?", en: "How do I get enquiries I can actually work with?" },
            a: {
              nl: "Door vooraf de juiste vragen te stellen. Een [[landingspaginas|aanvraagpagina]] per producttype vraagt om maten, foto's van de ruimte, gewenste materialen, timing en een budgetindicatie, zodat je direct ziet of een klus bij je past. Een [[offerte-calculator|prijsindicatie]] op je site helpt bezoekers bovendien zelf in te schatten of maatwerk binnen hun budget valt. Dat scheelt ritjes voor niets en offertes die nergens heen gaan.",
              en: "By asking the right questions upfront. An [[landingspaginas|enquiry page]] per product type asks for measurements, photos of the space, preferred materials, timing and a budget indication, so you can see straight away whether a job suits you. A [[offerte-calculator|price indication]] on your site also helps visitors judge for themselves whether custom work fits their budget. That saves trips for nothing and quotes that go nowhere.",
            },
          },
          {
            q: { nl: "Hoe word ik als interieurbouwer of meubelmaker gevonden in mijn regio?", en: "How do I get found in my region as an interior builder or furniture maker?" },
            a: {
              nl: "Zorg dat Google weet wat je maakt en waar. Een compleet [[lokale-seo|Google Bedrijfsprofiel]] met regelmatig nieuwe projectfoto's en reviews helpt in de lokale resultaten. Maak daarnaast pagina's per product, zoals inbouwkasten, trappen of tafels op maat, en laat per project zien in welke plaats het staat, bijvoorbeeld Uden, Veghel of Den Bosch. Zo vind je klanten die liever een vakman uit de buurt hebben dan een kast uit een catalogus.",
              en: "Make sure Google knows what you make and where. A complete [[lokale-seo|Google Business Profile]] with regular new project photos and reviews helps in the local results. Also create pages per product, such as fitted wardrobes, staircases or made-to-measure tables, and show for each project which town it is in, for example Uden, Veghel or Den Bosch. That way you find customers who would rather have a local craftsman than a wardrobe from a catalogue.",
            },
          },
          {
            q: { nl: "Hoe val ik op tijdens een beurs of open dag in de werkplaats?", en: "How do I stand out at a trade fair or an open day in the workshop?" },
            a: {
              nl: "Laat vooral voelen wat je maakt: materialen om aan te raken, een half afgewerkt stuk dat het vakwerk laat zien en een korte video van de werkplaats op een scherm. Een [[beurs-signing|stand of signing]] in je eigen huisstijl maakt je herkenbaar tussen de rest. Vraag bezoekers via een tablet om hun gegevens en wensen, en volg ze daarna netjes op met [[lead-nurturing|een paar mails]]. Zo levert een drukke dag ook in de weken erna nog iets op.",
              en: "Above all, let people feel what you make: materials to touch, a half-finished piece that shows the craftsmanship and a short workshop video on a screen. A [[beurs-signing|stand or signage]] in your own identity makes you recognisable among the rest. Ask visitors for their details and wishes on a tablet, and follow them up properly afterwards with [[lead-nurturing|a few emails]]. That way a busy day keeps paying off in the weeks after.",
            },
          },
        ],
      },
      {
        name: { nl: "Showrooms & design-retail", en: "Showrooms & design retail" },
        intro: {
          nl: "Voor interieurwinkels, designshowrooms, meubel- en verlichtingswinkels, vloeren- en raamdecoratiezaken en interieur experience centers, met of zonder webshop.",
          en: "For interior stores, design showrooms, furniture and lighting stores, flooring and window decoration shops and interior experience centres, with or without a web shop.",
        },
        types: [
          { nl: "Interieurwinkels", en: "Interior stores" },
          { nl: "Designshowrooms", en: "Design showrooms" },
          { nl: "Meubelwinkels", en: "Furniture stores" },
          { nl: "Verlichtingswinkels", en: "Lighting stores" },
          { nl: "Vloeren- en raamdecoratiezaken", en: "Flooring and window decoration shops" },
          { nl: "Interieur experience centers", en: "Interior experience centres" },
        ],
        useCases: [
          {
            title: { nl: "Showroomwebsite die bezoek oplevert", en: "Showroom website that drives visits" },
            text: {
              nl: "Collecties, merken en sfeer online, met openingstijden, route en een knop om een adviesgesprek te plannen. Het doel is de voordeur, niet de pageview.",
              en: "Collections, brands and atmosphere online, with opening hours, directions and a button to book an advice session. The goal is the front door, not the page view.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Afspraak plannen in de showroom", en: "Book an appointment at the showroom" },
            text: {
              nl: "Bezoekers plannen zelf een adviesmoment, zodat er iemand klaarstaat met tijd en de juiste stalen.",
              en: "Visitors book an advice slot themselves, so someone is ready with time and the right samples.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Merkbeleving van gevel tot brandbook", en: "Brand experience from facade to brandbook" },
            text: {
              nl: "Een merk dat op de gevel, in de showroom en online hetzelfde verhaal vertelt. Voor DesignersHouse legden we dat vast in een compleet brandbook.",
              en: "A brand that tells the same story on the facade, in the showroom and online. For DesignersHouse we captured that in a complete brandbook.",
            },
            service: "branding-rebranding",
            application: "brandbook",
          },
          {
            title: { nl: "Lokale campagnes voor showroombezoek", en: "Local campaigns for showroom visits" },
            text: {
              nl: "Gerichte advertenties voor mensen in je regio die bezig zijn met verbouwen of verhuizen. Met een duidelijke reden om langs te komen.",
              en: "Targeted ads for people in your area who are busy renovating or moving. With a clear reason to drop by.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Gevonden op merk en product", en: "Found by brand and product" },
            text: {
              nl: "Pagina's per merk en categorie, zoals 'designbank' of een bekende lampenserie, zodat mensen die online zoeken bij jouw showroom uitkomen in plaats van bij een grote webshop.",
              en: "Pages per brand and category, such as 'design sofa' or a well-known lamp series, so people searching online end up at your showroom instead of a big web shop.",
            },
            service: "seo-aeo-geo",
            application: "seo",
          },
          {
            title: { nl: "Videotour door je showroom", en: "A video tour of your showroom" },
            text: {
              nl: "Een rustige videotour en sfeerfoto's van je eigen opstellingen, in plaats van de merkbeelden die iedere dealer gebruikt. Zo ziet een bezoeker hoe het bij jou voelt, nog voordat hij binnenloopt.",
              en: "A calm video tour and mood photos of your own displays, instead of the brand images every dealer uses. That way visitors see how your place feels before they walk in.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
          {
            title: { nl: "Nieuwsbrief per doelgroep", en: "A newsletter per audience" },
            text: {
              nl: "Nieuwe collecties, events en een uitnodiging om langs te komen, apart voor particulieren en professionals. Een architect wil iets anders lezen dan iemand die een nieuwe bank zoekt.",
              en: "New collections, events and an invitation to drop by, separately for consumers and professionals. An architect wants to read something different from someone looking for a new sofa.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Signing en stalenkaarten", en: "Signage and sample cards" },
            text: {
              nl: "Bewegwijzering, productkaartjes en stalenkaarten in je eigen huisstijl. Kleine dingen, maar ze zorgen dat je showroom aanvoelt als één merk in plaats van een verzameling leveranciers.",
              en: "Wayfinding, product cards and sample cards in your own identity. Small things, but they make your showroom feel like one brand instead of a collection of suppliers.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat maakt een goede showroom website?", en: "What makes a good showroom website?" },
            a: {
              nl: "Een showroom website heeft één hoofddoel: mensen naar binnen krijgen. Laat dus zien welke collecties en merken je hebt, hoe de showroom voelt en waarom een bezoek de moeite waard is. Openingstijden, route en parkeren staan direct in beeld, en een [[boekingswidget|afspraakwidget]] maakt een adviesgesprek plannen makkelijk. Goede fotografie van je eigen ruimte werkt beter dan merkfoto's die iedereen gebruikt. En nieuwe collecties en events zet je zelf snel online.",
              en: "A showroom website has one main goal: getting people through the door. So show which collections and brands you carry, how the showroom feels and why a visit is worth it. Opening hours, directions and parking are visible straight away, and an [[boekingswidget|appointment widget]] makes booking an advice session easy. Good photography of your own space works better than brand photos everyone uses. And you put new collections and events online yourself, quickly.",
            },
          },
          {
            q: { nl: "Heb ik als interieurwinkel een webshop nodig?", en: "Do I need a web shop as an interior store?" },
            a: {
              nl: "Niet altijd. Voor maatwerk, grote meubels en vloeren wil een klant meestal eerst voelen, zien en advies krijgen. Dan is een sterke showroomsite met een afspraakmogelijkheid slimmer. Accessoires, verlichting, stalen of cadeaubonnen verkopen daarentegen prima online. Een [[webshop|webshop]] voor dat deel van je assortiment kan dan naast de showroom draaien, eventueel gekoppeld aan je kassasysteem of voorraad, als dat systeem het toelaat. We kijken samen wat voor jouw winkel het meeste oplevert.",
              en: "Not always. For custom work, large furniture and flooring, customers usually want to feel, see and get advice first. Then a strong showroom site with an appointment option is smarter. Accessories, lighting, samples or gift vouchers, on the other hand, sell fine online. A [[webshop|web shop]] for that part of your range can run alongside the showroom, possibly connected to your till system or stock, if that system allows it. We work out together what pays off most for your store.",
            },
          },
          {
            q: { nl: "Hoe trek ik interieurprofessionals naar mijn showroom?", en: "How do I attract interior professionals to my showroom?" },
            a: {
              nl: "Door te laten zien wat je voor hen doet. Architecten, stylisten en interieurbouwers zoeken een plek waar ze met hun klant terechtkunnen, met goede stalen, ruimte om te overleggen en mensen die meedenken. DesignersHouse bouwde zijn hele merk rond die gedachte, en wij legden dat vast in hun [[brandbook|brandbook]]. Geef professionals een eigen pagina, nodig ze uit voor events en presentaties, en blijf zichtbaar met [[linkedin-ads|LinkedIn]] en een nieuwsbrief met nieuwe collecties.",
              en: "By showing what you do for them. Architects, stylists and interior builders look for a place where they can bring their clients, with good samples, room to talk and people who think along. DesignersHouse built its entire brand around that idea, and we captured it in their [[brandbook|brandbook]]. Give professionals their own page, invite them to events and presentations, and stay visible with [[linkedin-ads|LinkedIn]] and a newsletter featuring new collections.",
            },
          },
          {
            q: { nl: "Hoe concurreer ik met grote webshops die dezelfde merken verkopen?", en: "How do I compete with big web shops selling the same brands?" },
            a: {
              nl: "Niet op prijs alleen, maar op wat een webshop niet kan: advies, beleving en service. Laat zien wat je extra doet, zoals stalen meegeven, inmeten, bezorgen en monteren, en wie er in je showroom klaarstaat. Met een scherpe [[merkstrategie|positionering]] en [[lokale-seo|lokale vindbaarheid]] trek je de klant die waarde hecht aan dat verschil. En laat online zien wat er in de showroom staat, zodat mensen weten dat de rit de moeite waard is.",
              en: "Not on price alone, but on what a web shop cannot do: advice, experience and service. Show what you do extra, such as lending samples, measuring up, delivery and installation, and who is ready to help in your showroom. With sharp [[merkstrategie|positioning]] and [[lokale-seo|local visibility]] you attract the customer who values that difference. And show online what is on display in the showroom, so people know the trip is worth it.",
            },
          },
          {
            q: { nl: "Mag ik merkfoto's en productteksten van leveranciers gebruiken?", en: "Can I use suppliers' brand photos and product copy?" },
            a: {
              nl: "Vaak wel, binnen de afspraken in je dealerovereenkomst of de persmap van het merk; check die altijd even. Slim is het alleen niet als enige bron: als honderd dealers dezelfde tekst gebruiken, heeft Google weinig reden om juist jouw pagina te tonen. Schrijf daarom [[seo-content|eigen teksten]] over hoe je een product adviseert en combineert, en vul merkbeelden aan met [[productfotografie|eigen foto's]] uit je showroom. Dat onderscheidt je, voor Google en voor je klant.",
              en: "Often yes, within the terms of your dealer agreement or the brand's press kit; always check them. It is just not smart as your only source: if a hundred dealers use the same text, Google has little reason to show your page in particular. So write [[seo-content|your own copy]] about how you advise on and combine a product, and supplement brand images with [[productfotografie|your own photos]] from the showroom. That sets you apart, for Google and for your customers.",
            },
          },
          {
            q: { nl: "Hoe trek ik meer bezoekers naar een showroomevent of opening?", en: "How do I attract more visitors to a showroom event or opening?" },
            a: {
              nl: "Geef mensen een concrete reden en een vast moment. Een [[landingspaginas|aanmeldpagina]] met tijdsloten, een uitnodiging via je nieuwsbrief en een korte [[meta-ads|campagne]] in je regio zorgen voor aanmeldingen. Een herinnering een dag van tevoren voorkomt lege plekken, en na afloop stuur je deelnemers een bedankje met de collectie of een voorstel voor een vervolgafspraak. Nodig professionals apart uit, bijvoorbeeld voor een preview, dan heb je voor beide groepen tijd.",
              en: "Give people a concrete reason and a fixed moment. A [[landingspaginas|registration page]] with time slots, an invitation in your newsletter and a short [[meta-ads|campaign]] in your region bring in sign-ups. A reminder the day before prevents empty spots, and afterwards you send attendees a thank-you with the collection or a suggested follow-up appointment. Invite professionals separately, for example for a preview, so you have time for both groups.",
            },
          },
          {
            q: { nl: "Kan ik online laten zien wat er in de showroom staat?", en: "Can I show online what is on display in the showroom?" },
            a: {
              nl: "Ja, en voor veel bezoekers is dat precies de reden om te komen. Werk je met een kassa- of voorraadsysteem, dan kan je website via een [[api-koppelingen|koppeling]] tonen welke modellen in de showroom staan, als dat systeem het toelaat. Anders houd je een overzicht bij in je CMS, met een label als 'te zien in de showroom'. Combineer het met een knop om een [[boekingswidget|adviesgesprek]] te plannen, dan staat het juiste model klaar als iemand komt.",
              en: "Yes, and for many visitors that is exactly the reason to come. If you use a till or stock system, your website can show which models are on display through an [[api-koppelingen|integration]], if that system allows it. Otherwise you keep an overview in your CMS, with a label such as 'on display in the showroom'. Combine it with a button to book an [[boekingswidget|advice session]], so the right model is ready when someone comes in.",
            },
          },
        ],
      },
      {
        name: { nl: "Keuken & badkamer", en: "Kitchens & bathrooms" },
        intro: {
          nl: "Voor keukenzaken, badkamerspecialisten, sanitairshowrooms, tegelhandels en keuken- en badkamermonteurs, van zelfstandige vakzaak tot formule met meerdere vestigingen.",
          en: "For kitchen stores, bathroom specialists, sanitaryware showrooms, tile shops and kitchen and bathroom fitters, from independent specialist to chain with several branches.",
        },
        types: [
          { nl: "Keukenzaken", en: "Kitchen stores" },
          { nl: "Badkamerspecialisten", en: "Bathroom specialists" },
          { nl: "Sanitairshowrooms", en: "Sanitaryware showrooms" },
          { nl: "Tegelhandels", en: "Tile shops" },
          { nl: "Keukenmonteurs", en: "Kitchen fitters" },
          { nl: "Badkamerrenovatiebedrijven", en: "Bathroom renovation companies" },
        ],
        useCases: [
          {
            title: { nl: "Keuzehulp voor keuken of badkamer", en: "Guide for choosing a kitchen or bathroom" },
            text: {
              nl: "Stijl, budget, indeling en wensen in een paar vragen. De klant komt voorbereid naar de showroom, en jij weet waar je aan begint.",
              en: "Style, budget, layout and wishes in a few questions. The customer arrives at the showroom prepared, and you know where you stand.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Sfeerbeelden van keukens die nog niet staan", en: "Visuals of kitchens not yet installed" },
            text: {
              nl: "Fotorealistische renders van nieuwe showroomopstellingen of collecties, voor je website, folder en social media.",
              en: "Photorealistic renders of new showroom displays or collections, for your website, leaflet and social media.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Gevonden in je eigen regio", en: "Found in your own region" },
            text: {
              nl: "Een pagina per vestiging en een sterk Google Bedrijfsprofiel, zodat je opvalt bij mensen die op 'keuken kopen' of 'badkamer renoveren' in de buurt zoeken.",
              en: "A page per branch and a strong Google Business Profile, so you stand out to people searching nearby for a new kitchen or bathroom renovation.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Opvolging na een showroombezoek", en: "Follow-up after a showroom visit" },
            text: {
              nl: "Na het eerste gesprek automatisch het ontwerp, een paar inspiratiemails en een uitnodiging voor een vervolgafspraak. Een keuken koop je niet in één dag.",
              en: "After the first meeting, the design, a few inspiration emails and an invitation for a follow-up appointment go out automatically. Nobody buys a kitchen in a day.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "Website per vestiging en collectie", en: "A website per branch and collection" },
            text: {
              nl: "Collecties, projecten bij klanten thuis en een pagina per vestiging, met overal een knop om een afspraak te plannen. Prijsklassen en levertijden staan er eerlijk bij.",
              en: "Collections, projects in customers' homes and a page per branch, with a button to book an appointment everywhere. Price ranges and lead times are stated honestly.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Google Ads in het verbouwseizoen", en: "Google Ads in renovation season" },
            text: {
              nl: "Advertenties op zoekopdrachten als 'nieuwe keuken kopen' of 'badkamer renoveren' in je regio. Je schroeft het budget op wanneer het rustig is, en terug als de planning vol zit.",
              en: "Ads on searches like 'buy a new kitchen' or 'bathroom renovation' in your region. You turn the budget up when it is quiet, and down when the schedule is full.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
          {
            title: { nl: "Een vakzaak met een eigen verhaal", en: "A specialist with its own story" },
            text: {
              nl: "Waarom kies je voor jouw zaak en niet voor een grote keten? Een scherpe positionering en huisstijl maken dat verschil zichtbaar, van showroom en bedrijfsbus tot folder en website.",
              en: "Why choose your store over a big chain? Sharp positioning and a distinctive identity make that difference visible, from showroom and company van to leaflet and website.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Inspiratieboek voor in de showroom", en: "Inspiration book for the showroom" },
            text: {
              nl: "Een folder voor de brievenbus en een inspiratieboek met je eigen projecten en collecties. Iets om mee naar huis te nemen en samen op de bank door te bladeren.",
              en: "A leaflet for the letterbox and an inspiration book with your own projects and collections. Something to take home and leaf through together on the sofa.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe krijg ik meer showroomafspraken voor keukens of badkamers?", en: "How do I get more showroom appointments for kitchens or bathrooms?" },
            a: {
              nl: "Maak de stap naar een afspraak zo klein mogelijk. Een [[keuzehulp-quiz|keuzehulp]] laat bezoekers in een paar vragen hun stijl, budget en wensen ontdekken, en eindigt bij een afspraak die ze direct online plannen. Jij weet dan vooraf waar het gesprek over gaat. Daarnaast helpen echte projectfoto's, eerlijke informatie over prijsklassen en levertijden, en lokale vindbaarheid per vestiging. Campagnes rond verhuis- en verbouwseizoenen vullen de agenda op momenten dat het rustiger is.",
              en: "Make the step to an appointment as small as possible. A [[keuzehulp-quiz|product finder]] lets visitors discover their style, budget and wishes in a few questions, and ends with an appointment they book online straight away. You know beforehand what the conversation will be about. Real project photos, honest information on price ranges and lead times, and local visibility per branch help too. Campaigns around moving and renovation seasons fill the diary when it is quieter.",
            },
          },
          {
            q: { nl: "Wat heb ik aan 3D-visualisaties als keuken- of badkamerzaak?", en: "What do 3D visualisations do for a kitchen or bathroom store?" },
            a: {
              nl: "Je ontwerpsoftware maakt al tekeningen voor de klant, maar voor je marketing wil je beelden met meer sfeer. Met een [[3d-visualisatie|3D-visualisatie]] laat je een nieuwe collectie of showroomopstelling zien in een mooi licht, nog voordat hij er staat. Denk aan een keuken in een landelijke woonkamer of een badkamer met een inloopdouche in natuursteen. Die beelden gebruik je op je website, in een folder en op social media, zonder dure fotoshoot op locatie.",
              en: "Your design software already produces drawings for the customer, but for marketing you want images with more atmosphere. With a [[3d-visualisatie|3D visualisation]] you show a new collection or showroom display in a beautiful light, even before it is installed. Think of a kitchen in a country-style living room or a bathroom with a natural stone walk-in shower. You use those images on your website, in a leaflet and on social media, without an expensive location shoot.",
            },
          },
          {
            q: { nl: "Hoe volg ik klanten op die na een showroombezoek nog twijfelen?", en: "How do I follow up customers who are still hesitating after a showroom visit?" },
            a: {
              nl: "Een keuken of badkamer is een grote aankoop, en de meeste mensen bezoeken meerdere zaken. Wie na het gesprek niets meer hoort, kiest vaak voor de zaak die wel iets liet horen. Met [[lead-nurturing|automatische opvolging]] krijgt de klant zijn ontwerp nog eens toegestuurd, een paar mails met inspiratie en praktische tips, en een uitnodiging voor een vervolgafspraak. In een [[crm-implementatie|CRM]] zie je wie waar staat, zodat je verkopers op het juiste moment bellen.",
              en: "A kitchen or bathroom is a big purchase, and most people visit several stores. Anyone who hears nothing after the meeting often picks the store that did get in touch. With [[lead-nurturing|automated follow-up]] customers receive their design again, a few emails with inspiration and practical tips, and an invitation for a follow-up appointment. In a [[crm-implementatie|CRM]] you see who is where, so your sales team calls at the right moment.",
            },
          },
          {
            q: { nl: "Moet ik prijzen van keukens of badkamers op mijn website zetten?", en: "Should I put kitchen or bathroom prices on my website?" },
            a: {
              nl: "Een exacte prijs is bij maatwerk lastig, maar helemaal niets zeggen werkt meestal tegen je. Wie geen enkel idee van de prijs krijgt, haakt af of komt met verkeerde verwachtingen binnen. Laat daarom prijsklassen zien, voorbeeldprojecten met een vanafprijs of een [[offerte-calculator|prijsindicatie]] op basis van een paar keuzes. Zo komen er mensen naar je showroom die weten wat ze kunnen verwachten.",
              en: "An exact price is tricky with custom work, but saying nothing at all usually works against you. People who get no idea of the price drop out or walk in with the wrong expectations. So show price ranges, example projects with a starting price or a [[offerte-calculator|price indication]] based on a few choices. That way the people who come to your showroom know what to expect.",
            },
          },
          {
            q: { nl: "Hoe word ik als badkamerspecialist gevonden op 'badkamer renoveren'?", en: "How does a bathroom specialist get found for 'bathroom renovation'?" },
            a: {
              nl: "Met pagina's die aansluiten op hoe mensen zoeken: per dienst, zoals een complete renovatie, een inloopdouche of een nieuw toilet, en per plaats in je werkgebied, zoals Oss, Uden of Den Bosch. Voeg aan elk project de plaats en een paar goede foto's toe, en vraag tevreden klanten om een review op je [[lokale-seo|Google Bedrijfsprofiel]]. Met heldere [[seo-content|antwoorden]] op vragen als 'hoe lang duurt een badkamerrenovatie?' word je ook gevonden door mensen die nog aan het oriënteren zijn.",
              en: "With pages that match how people search: per service, such as a complete renovation, a walk-in shower or a new toilet, and per town in your area, such as Oss, Uden or Den Bosch. Add the town and a few good photos to every project, and ask happy customers for a review on your [[lokale-seo|Google Business Profile]]. With clear [[seo-content|answers]] to questions like 'how long does a bathroom renovation take?' you are also found by people who are still exploring.",
            },
          },
          {
            q: { nl: "Hoe laat ik projecten bij klanten thuis goed zien?", en: "How do I show projects in customers' homes properly?" },
            a: {
              nl: "Vraag bij de oplevering of je mag terugkomen voor foto's, en leg dat vast. Fotografeer bij goed daglicht en laat details zien, zoals een greeploos front, een nis in de douche of de aansluiting van het werkblad. Een korte [[social-video|video]] of een voor-en-naserie van een badkamerrenovatie doet het vaak goed op social media. Laat adres en persoonlijke spullen uit beeld, dan voelen klanten zich ook prettig bij het delen.",
              en: "Ask at handover whether you can come back for photos, and put it in writing. Shoot in good daylight and show details, such as a handleless front, a niche in the shower or how the worktop meets the wall. A short [[social-video|video]] or a before-and-after series of a bathroom renovation often does well on social media. Keep the address and personal belongings out of shot, so customers feel comfortable sharing too.",
            },
          },
          {
            q: { nl: "Hoe vind ik goede keukenmonteurs en badkamerinstallateurs?", en: "How do I find good kitchen fitters and bathroom installers?" },
            a: {
              nl: "Vakmensen kiezen een werkgever op sfeer, gereedschap, planning en collega's, dus laat dat zien. Een werkenbij-pagina met foto's en korte video's van je team op locatie zegt meer dan een lijst met eisen, en met [[employer-branding|employer branding]] maak je dat verhaal sterk. Met een [[meta-ads|vacaturecampagne]] in je regio bereik je ook mensen die niet actief zoeken. Houd solliciteren kort: een telefoonnummer en een paar vragen zijn genoeg voor een eerste gesprek.",
              en: "Tradespeople choose an employer on atmosphere, equipment, scheduling and colleagues, so show that. A careers page with photos and short videos of your team on site says more than a list of requirements, and [[employer-branding|employer branding]] makes that story strong. With a [[meta-ads|recruitment campaign]] in your region you also reach people who are not actively looking. Keep applying short: a phone number and a few questions are enough for a first conversation.",
            },
          },
        ],
      },
      {
        name: { nl: "Projectinrichting", en: "Contract interiors" },
        intro: {
          nl: "Voor projectinrichters, kantoor- en winkelinrichters, horeca- en hotelinrichters, standbouwers en leveranciers van projectmeubilair.",
          en: "For contract interior companies, office and retail fit-out specialists, hospitality and hotel fit-out companies, exhibition stand builders and contract furniture suppliers.",
        },
        types: [
          { nl: "Projectinrichters", en: "Contract interior companies" },
          { nl: "Kantoorinrichters", en: "Office fit-out companies" },
          { nl: "Winkelinrichters", en: "Retail fit-out companies" },
          { nl: "Horeca- en hotelinrichters", en: "Hospitality and hotel fit-out companies" },
          { nl: "Standbouwers", en: "Exhibition stand builders" },
          { nl: "Leveranciers van projectmeubilair", en: "Contract furniture suppliers" },
        ],
        useCases: [
          {
            title: { nl: "Projectportfolio per sector", en: "Project portfolio by sector" },
            text: {
              nl: "Kantoren, winkels, horeca en zorg: per sector projecten met de opgave, de oplossing en goede foto's. Zo herkent een opdrachtgever direct zijn eigen vraag.",
              en: "Offices, retail, hospitality and care: projects per sector with the brief, the solution and good photos. A client recognises their own question right away.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Renders voor je pitch", en: "Renders for your pitch" },
            text: {
              nl: "Laat een opdrachtgever de nieuwe werkplek, winkel of lobby zien voordat de eerste wand staat. Dat maakt keuzes makkelijker en je voorstel concreet.",
              en: "Show a client the new workplace, store or lobby before the first wall goes up. That makes choices easier and your proposal concrete.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Pitchdeck en aanbestedingsdocument", en: "Pitch deck and tender document" },
            text: {
              nl: "Werkwijze, referenties en planning in een document dat er net zo verzorgd uitziet als je interieurs.",
              en: "Approach, references and planning in a document that looks as polished as your interiors.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "LinkedIn voor facility managers en architecten", en: "LinkedIn for facility managers and architects" },
            text: {
              nl: "Gerichte campagnes met je projecten voor facility managers, retailers en architecten die een inrichter zoeken.",
              en: "Targeted campaigns featuring your projects for facility managers, retailers and architects looking for a fit-out partner.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "Positionering per markt", en: "Positioning per market" },
            text: {
              nl: "Kantoor, retail, horeca of zorg: een heldere positionering en huisstijl laten zien waar je echt goed in bent. Een opdrachtgever zoekt een specialist voor zijn vraag, geen alleskunner.",
              en: "Office, retail, hospitality or care: clear positioning and identity show what you are really good at. A client looks for a specialist for their question, not a jack of all trades.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Leads en lopende offertes in beeld", en: "Leads and open quotes in view" },
            text: {
              nl: "Een CRM waarin aanvragen, lopende offertes en vervolgafspraken samenkomen, met automatische herinneringen voor je team. Grote trajecten lopen soms maanden, dan wil je niets laten liggen.",
              en: "A CRM that brings enquiries, open quotes and follow-up appointments together, with automatic reminders for your team. Large projects can take months, so you do not want anything to slip.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
          },
          {
            title: { nl: "Gevonden op 'kantoorinrichting' in je regio", en: "Found for 'office fit-out' in your region" },
            text: {
              nl: "Pagina's voor zoekopdrachten als 'kantoorinrichting Eindhoven' of 'horeca-inrichting op maat', met projecten die erbij passen. Zo vinden facility managers en ondernemers je ook buiten je netwerk.",
              en: "Pages for searches like 'office fit-out Eindhoven' or 'bespoke hospitality interiors', with matching projects. That way facility managers and business owners find you beyond your own network too.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Projectportaal voor opdrachtgevers", en: "Project portal for clients" },
            text: {
              nl: "Een omgeving waar opdrachtgevers tekeningen, planning, materiaalkeuzes en opleverpunten terugvinden, altijd in de laatste versie. Handig bij projecten met veel partijen, en nog meer mails.",
              en: "An environment where clients find drawings, the schedule, material choices and snagging items, always in the latest version. Handy for projects with many parties, and even more emails.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe win ik als projectinrichter vaker een pitch of aanbesteding?", en: "How do I win pitches or tenders more often as a contract interior company?" },
            a: {
              nl: "Garanties bestaan niet, maar je kunt het de beoordelaar wel makkelijk maken. Een helder [[presentaties-pitchdecks|pitchdeck]] met je werkwijze, planning en referenties uit dezelfde sector laat zien dat je de opgave snapt. Met [[3d-visualisatie|renders]] van het voorgestelde interieur ziet de opdrachtgever het resultaat al voor zich, wat keuzes en draagvlak intern makkelijker maakt. Zorg dat alles in één lijn is vormgegeven: als je documenten verzorgd zijn, vertrouwt men eerder dat je interieurs dat ook zijn.",
              en: "There are no guarantees, but you can make the assessor's job easy. A clear [[presentaties-pitchdecks|pitch deck]] with your approach, schedule and references from the same sector shows you understand the brief. With [[3d-visualisatie|renders]] of the proposed interior the client can already picture the result, which makes choices and internal support easier. Make sure everything is designed in one style: if your documents are polished, people are more likely to trust your interiors will be too.",
            },
          },
          {
            q: { nl: "Hoe laat ik projecten zien als een opdrachtgever liever geen publiciteit wil?", en: "How do I show projects when a client prefers no publicity?" },
            a: {
              nl: "Vraag het altijd vooraf, en bied tussenvormen aan. Soms mag je het project tonen zonder naam van de opdrachtgever, of alleen details en materialen, of pas na een bepaalde periode. Goede [[productfotografie|fotografie]] van details, zoals een maatwerk balie, akoestische wandpanelen of een bijzondere lichtlijn, vertelt vaak al genoeg over je vakmanschap. Leg dit standaard vast in je offerte, dan voorkom je dat mooie projecten in de la blijven liggen.",
              en: "Always ask beforehand, and offer middle ground. Sometimes you can show the project without the client's name, or only details and materials, or only after a certain period. Good [[productfotografie|photography]] of details, such as a bespoke reception desk, acoustic wall panels or a striking light line, often says enough about your craftsmanship. Make it a standard clause in your quote, so good projects do not end up in a drawer.",
            },
          },
          {
            q: { nl: "Hoe bereik ik facility managers, retailers en architecten?", en: "How do I reach facility managers, retailers and architects?" },
            a: {
              nl: "Die beslissers zitten vooral op LinkedIn en lezen vakmedia, dus daar moet je zichtbaar zijn. Deel projecten met een korte uitleg van de opgave, inzichten over bijvoorbeeld hybride werken of winkelbeleving, en collega's die vertellen wat ze doen. Met een doordachte [[contentstrategie|contentstrategie]] hergebruik je één project op je website, LinkedIn en in een nieuwsbrief. [[linkedin-ads|LinkedIn Ads]] richten zich daarna op functie, branche en regio, zodat je verhalen bij de juiste mensen terechtkomen.",
              en: "Those decision-makers are mostly on LinkedIn and read trade media, so that is where you need to be visible. Share projects with a short note on the brief, insights on topics like hybrid working or retail experience, and colleagues explaining what they do. With a well-thought-out [[contentstrategie|content strategy]] you reuse one project on your website, LinkedIn and in a newsletter. [[linkedin-ads|LinkedIn Ads]] then target by role, industry and region, so your stories reach the right people.",
            },
          },
          {
            q: { nl: "Hoe laat ik duurzaam en circulair inrichten zien zonder greenwashing?", en: "How do I show sustainable and circular fit-outs without greenwashing?" },
            a: {
              nl: "Door concreet te zijn en alleen te claimen wat je kunt onderbouwen. Noem welke materialen je hergebruikt, welke keurmerken een product echt heeft en wat er na de gebruiksduur met het meubilair gebeurt, liefst per project. De ACM heeft een leidraad voor duurzaamheidsclaims, en vage termen als 'groen' of 'circulair' zonder uitleg zijn daarin een risico. Met [[copywriting-blogs|heldere teksten]] en [[infographics|infographics]] maak je je aanpak zichtbaar zonder te overdrijven.",
              en: "By being concrete and only claiming what you can back up. State which materials you reuse, which certifications a product actually has and what happens to the furniture at the end of its life, ideally per project. The Dutch competition authority ACM has guidelines on sustainability claims, and vague terms like 'green' or 'circular' without explanation are a risk under them. With [[copywriting-blogs|clear copy]] and [[infographics|infographics]] you make your approach visible without exaggerating.",
            },
          },
          {
            q: { nl: "Hoe pak je een rebranding aan zonder lopende projecten te verstoren?", en: "How do you rebrand without disrupting ongoing projects?" },
            a: {
              nl: "Gefaseerd, en in een duidelijke volgorde. Eerst de strategie en de nieuwe huisstijl, dan website, offertes en presentaties, en daarna zaken als bedrijfsbussen, werkkleding en signing op natuurlijke vervangmomenten. Een [[brandbook|brandbook]] met sjablonen zorgt dat je team en partners het nieuwe merk meteen goed gebruiken. Zo voer je een [[rebranding|rebranding]] door zonder dat een opdrachtgever midden in een project ineens met een ander bedrijf lijkt te praten.",
              en: "In phases, and in a clear order. First the strategy and the new identity, then website, quotes and presentations, and after that things like company vans, workwear and signage at natural replacement moments. A [[brandbook|brand book]] with templates makes sure your team and partners use the new brand properly from day one. That way you roll out a [[rebranding|rebrand]] without a client suddenly feeling they are dealing with a different company mid-project.",
            },
          },
          {
            q: { nl: "Hoe houden we opdrachtgevers op de hoogte tijdens een inrichtingsproject?", en: "How do we keep clients informed during a fit-out project?" },
            a: {
              nl: "Met een vast ritme en één plek voor alle informatie. In een [[klantportaal|projectportaal]] vindt de opdrachtgever de planning, tekeningen, materiaalkeuzes en openstaande beslissingen, en ziet hij foto's van de voortgang. Met [[workflow-automatisering|automatische updates]] op vaste momenten hoeft niemand eraan te denken. Eén vast aanspreekpunt aan jouw kant maakt het af, zeker als er naast jullie ook een architect en installateur rondlopen.",
              en: "With a fixed rhythm and one place for all information. In a [[klantportaal|project portal]] the client finds the schedule, drawings, material choices and open decisions, and sees photos of progress. With [[workflow-automatisering|automatic updates]] at set moments nobody has to remember to send them. One fixed point of contact on your side completes it, especially when an architect and installer are also involved.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Interieurarchitecten", en: "Interior architects" },
      { nl: "Interieurontwerpers", en: "Interior designers" },
      { nl: "Interieurstylisten", en: "Interior stylists" },
      { nl: "Ontwerpstudio's", en: "Design studios" },
      { nl: "Interieurbouwers", en: "Interior fit-out companies" },
      { nl: "Meubelmakers", en: "Furniture makers" },
      { nl: "Maatwerktimmerfabrieken", en: "Bespoke joinery workshops" },
      { nl: "Trappenbouwers", en: "Staircase builders" },
      { nl: "Interieurwinkels", en: "Interior stores" },
      { nl: "Designshowrooms", en: "Design showrooms" },
      { nl: "Meubelwinkels", en: "Furniture stores" },
      { nl: "Verlichtingswinkels", en: "Lighting stores" },
      { nl: "Interieur experience centers", en: "Interior experience centres" },
      { nl: "Keukenzaken", en: "Kitchen stores" },
      { nl: "Badkamerspecialisten", en: "Bathroom specialists" },
      { nl: "Sanitairshowrooms", en: "Sanitaryware showrooms" },
      { nl: "Tegelhandels", en: "Tile shops" },
      { nl: "Projectinrichters", en: "Contract interior companies" },
      { nl: "Kantoorinrichters", en: "Office fit-out companies" },
      { nl: "Winkelinrichters", en: "Retail fit-out companies" },
      { nl: "Horeca- en hotelinrichters", en: "Hospitality and hotel fit-out companies" },
      { nl: "Standbouwers", en: "Exhibition stand builders" },
    ],
  },
];
