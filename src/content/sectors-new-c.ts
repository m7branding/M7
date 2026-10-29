import type { Sector } from "./types";

/* ============================================================
   Nieuwe sectoren (deel C). Volledige entries, inclusief
   doelgroepen (segments) en soorten bedrijven (audiences).
   Wordt in content/index.ts samengevoegd met sectors.ts.

   Echte M7-projecten die hier genoemd worden (alleen feitelijk):
   Plenty Planet (website, 3D Green Eco Corridor), Steddion
   (Energy Property Configurator), GRID (social ads publiek
   laadpunt), Alpacafarm Vorstenbosch (content, social, website)
   en BCTN (concept AI Customer Service Control Tower).
   ============================================================ */

export const NEW_SECTORS_C: Sector[] = [
  /* ---------- Energie & Duurzaamheid ---------- */
  {
    slug: "energie-duurzaamheid",
    title: { nl: "Energie & Duurzaamheid", en: "Energy & Sustainability" },
    short: { nl: "Energie", en: "Energy" },
    icon: "leaf",
    /* 3D-render van de Green Eco Corridor (Plenty Planet), 1600 × 893 */
    image: "/media/showcase/plentyplanet/greencorridor3.webp",
    imagePosition: "50% 50%",
    quote: { nl: "Clean energy deserves a story people actually get.", en: "Clean energy deserves a story people actually get." },
    intro: {
      nl: "Van zonneparken en batterijopslag tot installateurs, energieadviseurs en coöperaties: wij maken duurzame techniek begrijpelijk, vindbaar en aantrekkelijk.",
      en: "From solar parks and battery storage to installers, energy advisors and cooperatives: we make sustainable technology understandable, findable and appealing.",
    },
    description: {
      nl: "Duurzame energie zie je niet, maar je moet het wel uitleggen. Een klant wil weten wat het oplevert, wat het kost en of zijn dak, pand of parkeerterrein geschikt is. Ondertussen veranderen de regels, zoals het einde van de salderingsregeling, en zit het stroomnet op veel plekken vol. M7 helpt energiebedrijven, installateurs en adviseurs om dat verhaal helder te vertellen. Voor Plenty Planet bouwden we de website over solar car parks, zonneparken en batterijopslag, en maakten we een 3D-visualisatie van de Green Eco Corridor.\n\nDaarnaast bouwen we tools die het rekenwerk overnemen. In de Energy Property Configurator van Steddion vult een vastgoedeigenaar het verbruik en de laadbehoefte van een pand in en ziet hij een mogelijke oplossing met zonnepanelen en batterijopslag. Voor GRID maakten we social ads waarmee bewoners gratis een publiek laadpunt bij hun woning kunnen aanvragen. Met lokale SEO, een offertecalculator en gerichte campagnes zorgen we dat installateurs aanvragen krijgen die kloppen, in plaats van een inbox vol 'wat kost dat ongeveer?'.",
      en: "You cannot see sustainable energy, but you do have to explain it. A customer wants to know what it delivers, what it costs and whether their roof, building or car park is suitable. Meanwhile the rules keep changing, such as the end of net metering in the Netherlands, and the power grid is full in many places. M7 helps energy companies, installers and advisors tell that story clearly. For Plenty Planet we built the website about solar car parks, solar parks and battery storage, and created a 3D visual of the Green Eco Corridor.\n\nWe also build tools that take over the maths. In Steddion's Energy Property Configurator, a property owner enters a building's consumption and charging needs and sees a possible solution with solar panels and battery storage. For GRID we created social ads that let residents request a free public charging point near their home. With local SEO, a quote calculator and targeted campaigns we make sure installers get enquiries that are complete, instead of an inbox full of 'roughly how much would that cost?'.",
    },
    challenges: [
      {
        title: { nl: "Techniek die lastig uit te leggen is", en: "Technology that is hard to explain" },
        text: {
          nl: "kWp, BESS, terugleverkosten: jij snapt het, je klant vaak niet. Met heldere pagina's, een animatie of een keuzehulp maak je van techniek een beslissing die iemand durft te nemen.",
          en: "kWp, BESS, feed-in charges: you get it, your customer often does not. With clear pages, an animation or a product finder you turn technology into a decision someone dares to make.",
        },
      },
      {
        title: { nl: "Offertes die veel tijd kosten", en: "Quotes that take a lot of time" },
        text: {
          nl: "Elke aanvraag begint met vijf vragen terug. Een offertecalculator of quickscan vraagt dak, verbruik en wensen vooraf uit, zodat je aanvragen krijgt waar je meteen mee verder kunt.",
          en: "Every enquiry starts with five questions back. A quote calculator or quick scan asks about the roof, consumption and wishes up front, so you receive enquiries you can work with straight away.",
        },
      },
      {
        title: { nl: "Opvallen in een drukke markt", en: "Standing out in a crowded market" },
        text: {
          nl: "Er zijn veel installateurs en de meeste websites lijken op elkaar. Een eigen merk, echte projectfoto's en lokale SEO maken het verschil tussen een prijsvergelijking en een klant die voor jou kiest.",
          en: "There are a lot of installers and most websites look alike. A distinct brand, real project photos and local SEO make the difference between a price comparison and a customer who chooses you.",
        },
      },
      {
        title: { nl: "Projecten laten zien voordat ze er staan", en: "Showing projects before they exist" },
        text: {
          nl: "Een zonnepark of batterijsysteem bestaat eerst alleen op tekening. Met 3D-visualisaties en dronebeelden laat je gemeenten, investeerders en omwonenden zien wat er komt en hoe het in de omgeving past.",
          en: "A solar park or battery system starts out on paper only. With 3D visuals and drone footage you show municipalities, investors and local residents what is coming and how it fits into its surroundings.",
        },
      },
    ],
    services: ["websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie", "content-marketing-online-ads", "seo-aeo-geo", "branding-rebranding"],
    applications: ["offerte-calculator", "check-tools", "productconfigurator", "keuzehulp-quiz", "webflow-website", "landingspaginas", "3d-visualisatie", "dronevideo", "meta-ads", "lokale-seo"],
    /* Mockups in de dienstentegels: eigen werk uit energie (overige diensten: standaard) */
    visuals: {
      "websites-webshops": { kind: "browser", src: "/media/sector-tiles/plenty-planet-site.webp", url: "plentyplanet.com", scroll: true, label: "Plenty Planet" },
      "configurators-lead-tools-widgets": { kind: "browser", src: "/media/sector-tiles/steddion-configurator.webp", url: "tools.steddion.com/configurator", label: "Steddion" },
      "foto-video-3d-animatie": { kind: "video", src: "/media/showcase/plentyplanet/greenecocorridor.webp", label: "Plenty Planet" },
      "content-marketing-online-ads": { kind: "phone", src: "/media/showcase/ads/grid-laadpaal.webp", label: "GRID" },
    },
    faqs: [
      {
        q: { nl: "Bouwen jullie websites voor installateurs van zonnepanelen en warmtepompen?", en: "Do you build websites for solar panel and heat pump installers?" },
        a: {
          nl: "Ja. We bouwen websites die laten zien wat je doet, in welke regio je werkt en wat klanten van je kunnen verwachten, met echte projectfoto's en reviews. Een offertecalculator of quickscan zorgt dat aanvragen compleet binnenkomen.",
          en: "Yes. We build websites that show what you do, which region you work in and what customers can expect, with real project photos and reviews. A quote calculator or quick scan makes sure enquiries come in complete.",
        },
      },
      {
        q: { nl: "Kunnen jullie een configurator voor energieoplossingen bouwen?", en: "Can you build a configurator for energy solutions?" },
        a: {
          nl: "Ja. Voor Steddion bouwden we de Energy Property Configurator, waarin vastgoedeigenaren het verbruik en de laadbehoefte van een pand invullen en een mogelijke oplossing met zon-PV en batterijopslag zien. Zo'n tool stemmen we af op jouw producten en rekenregels.",
          en: "Yes. For Steddion we built the Energy Property Configurator, where property owners enter a building's consumption and charging needs and see a possible solution with solar PV and battery storage. We tailor a tool like that to your products and calculation rules.",
        },
      },
      {
        q: { nl: "Maken jullie 3D-visualisaties van zonneparken en energieprojecten?", en: "Do you create 3D visuals of solar parks and energy projects?" },
        a: {
          nl: "Ja. Voor Plenty Planet maakten we een 3D-visualisatie van de Green Eco Corridor. Op basis van tekeningen of modellen maken we renders en animaties voor vergunningstrajecten, investeerders en informatieavonden.",
          en: "Yes. For Plenty Planet we created a 3D visual of the Green Eco Corridor. Based on drawings or models we create renders and animations for permit procedures, investors and information evenings.",
        },
      },
      {
        q: { nl: "Werken jullie ook voor energiecoöperaties en lokale initiatieven?", en: "Do you also work for energy cooperatives and local initiatives?" },
        a: {
          nl: "Zeker. We helpen coöperaties met een heldere website, ledenwerving en communicatie over projecten, met een aanpak en budget die passen bij een organisatie die vaak op vrijwilligers draait.",
          en: "Definitely. We help cooperatives with a clear website, member recruitment and project communication, with an approach and budget that suit an organisation that often runs on volunteers.",
        },
      },
      {
        q: { nl: "Hoe voorkom je greenwashing in je communicatie?", en: "How do you avoid greenwashing in your communication?" },
        a: {
          nl: "Door concreet te blijven. We schrijven geen vage claims als 'klimaatneutraal' zonder onderbouwing, maar laten zien wat je echt doet, met feiten die je kunt aantonen. Dat is eerlijker, en het overtuigt ook beter.",
          en: "By staying concrete. We do not write vague claims like 'climate neutral' without evidence, but show what you actually do, with facts you can back up. That is more honest, and it is more convincing too.",
        },
      },
    ],
    metaTitle: {
      nl: "Websites & leadtools voor energie en duurzaamheid | M7",
      en: "Websites & lead tools for energy and sustainability | M7",
    },
    metaDescription: {
      nl: "M7 bouwt websites, configurators, 3D-visualisaties en campagnes voor zonneparken, batterijopslag, installateurs, energieadviseurs en coöperaties.",
      en: "M7 builds websites, configurators, 3D visuals and campaigns for solar parks, battery storage, installers, energy advisors and cooperatives.",
    },
    segments: [
      {
        name: { nl: "Zon & opslag", en: "Solar & storage" },
        intro: {
          nl: "Voor ontwikkelaars van zonneparken en solar carports, aanbieders van batterijopslag en bedrijven die grote daken, parkeerterreinen en bedrijventerreinen verduurzamen.",
          en: "For developers of solar parks and solar carports, battery storage providers and companies that make large roofs, car parks and business parks more sustainable.",
        },
        types: [
          { nl: "Zonneparkontwikkelaars", en: "Solar park developers" },
          { nl: "Solar carport-specialisten", en: "Solar carport specialists" },
          { nl: "Batterijopslagbedrijven", en: "Battery storage companies" },
          { nl: "Zakelijke zonne-energiebedrijven", en: "Commercial solar companies" },
        ],
        useCases: [
          {
            title: { nl: "Website voor investeerders en grondeigenaren", en: "A website for investors and landowners" },
            text: {
              nl: "Een website die in één keer uitlegt wat je ontwikkelt, waar en voor wie, met projecten en een duidelijke contactroute. Zoals de website die we voor Plenty Planet bouwden over solar car parks en batterijopslag.",
              en: "A website that explains in one go what you develop, where and for whom, with projects and a clear route to contact. Like the website we built for Plenty Planet about solar car parks and battery storage.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "3D-visualisatie van een park of carport", en: "3D visual of a park or carport" },
            text: {
              nl: "Laat zien hoe een zonnepark of solar carport eruit komt te zien, nog voordat de eerste paal de grond in gaat. Handig voor vergunningen, draagvlak en verkoop.",
              en: "Show what a solar park or solar carport will look like before the first post goes into the ground. Useful for permits, public support and sales.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Quickscan: is mijn terrein geschikt?", en: "Quick scan: is my site suitable?" },
            text: {
              nl: "Een bedrijf vult locatie, oppervlak en verbruik in en krijgt een eerste indicatie. Jij krijgt een warme lead met de gegevens die je nodig hebt.",
              en: "A company enters location, surface area and consumption and gets a first indication. You get a warm lead with the details you need.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "LinkedIn-campagne richting vastgoed en industrie", en: "LinkedIn campaign aimed at property and industry" },
            text: {
              nl: "Bereik vastgoedeigenaren, facilitair managers en directeuren van bedrijven met een groot dak of parkeerterrein, met content die uitlegt wat zon en opslag voor hen doen.",
              en: "Reach property owners, facility managers and directors of companies with a large roof or car park, with content that explains what solar and storage can do for them.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "Een merk dat vertrouwen geeft", en: "A brand that earns trust" },
            text: {
              nl: "Investeerders, gemeenten en grondeigenaren moeten je serieus nemen voordat er één paneel ligt. Een helder merk en een strakke huisstijl geven dat vertrouwen, van pitchdeck tot bouwbord.",
              en: "Investors, municipalities and landowners need to take you seriously before a single panel is installed. A clear brand and a consistent visual identity give that trust, from pitch deck to site hoarding.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Pitchdeck voor een energieproject", en: "Pitch deck for an energy project" },
            text: {
              nl: "Locatie, netaansluiting, vergunningen, planning en business case van een zonnepark of batterijproject in een presentatie die rustig opbouwt. Bruikbaar bij investeerders, banken en de gemeenteraad.",
              en: "Location, grid connection, permits, planning and business case of a solar park or battery project in a presentation that builds up calmly. Ready for investors, banks and the council.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Projectpagina voor omwonenden", en: "Project page for local residents" },
            text: {
              nl: "Per project een pagina met wat er komt, de planning, de datum van de informatieavond en een vast aanspreekpunt. Zo lopen vragen niet via de buurtapp of de lokale krant.",
              en: "A page per project with what is coming, the planning, the date of the information evening and a fixed point of contact. That way questions do not end up in the neighbourhood group chat or the local paper.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Zichtbaar in AI-antwoorden", en: "Visible in AI answers" },
            text: {
              nl: "Beslissers vragen ChatGPT of Perplexity steeds vaker wat een solar carport kost of hoe opslag helpt bij netcongestie. Met heldere kennispagina's vergroot je de kans dat jij daar als bron verschijnt.",
              en: "Decision-makers increasingly ask ChatGPT or Perplexity what a solar carport costs or how storage helps with grid congestion. With clear knowledge pages you increase the chance that you appear there as a source.",
            },
            service: "seo-aeo-geo",
            application: "geo",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe leg je batterijopslag uit aan een zakelijke klant?", en: "How do you explain battery storage to a business customer?" },
            a: {
              nl: "Begin bij zijn probleem, niet bij de batterij. Het ene bedrijf wil uitbreiden, maar krijgt door netcongestie geen zwaardere aansluiting. Het andere betaalt veel voor pieken in zijn verbruik. Leg uit hoe opslag dat oplost, met een eenvoudige animatie van stroom die overdag wordt opgeslagen en later wordt gebruikt. Een [[check-tools|quickscan]] op basis van verbruik en aansluiting maakt het daarna concreet. Zo praat je eerst over de situatie van de klant, en pas daarna over kilowatturen.",
              en: "Start with their problem, not the battery. One company wants to expand but cannot get a bigger grid connection because of congestion. Another pays a lot for peaks in its consumption. Explain how storage solves that, with a simple animation of power being stored during the day and used later. A [[check-tools|quick scan]] based on consumption and connection then makes it concrete. That way you talk about the customer's situation first, and about kilowatt-hours later.",
            },
          },
          {
            q: { nl: "Wat moet er op de website van een zonneparkontwikkelaar staan?", en: "What should be on a solar park developer's website?" },
            a: {
              nl: "Vooral antwoorden voor drie groepen: grondeigenaren, gemeenten en investeerders. Grondeigenaren willen weten wat het oplevert en hoe lang een contract loopt. Gemeenten en omwonenden willen weten hoe je met de omgeving omgaat. Investeerders zoeken ervaring en lopende projecten. Geef elke groep een eigen route, met projectpagina's, een kaart en een vaste contactpersoon. Voor Plenty Planet bouwden we een [[websites-webshops|website]] over solar car parks, zonneparken en batterijopslag.",
              en: "Mainly answers for three groups: landowners, municipalities and investors. Landowners want to know what it pays and how long a contract runs. Municipalities and local residents want to know how you treat the surroundings. Investors look for experience and current projects. Give each group its own route, with project pages, a map and a fixed contact person. For Plenty Planet we built a [[websites-webshops|website]] about solar car parks, solar parks and battery storage.",
            },
          },
          {
            q: { nl: "Helpt een 3D-visualisatie bij vergunning en draagvlak?", en: "Does a 3D visual help with permits and public support?" },
            a: {
              nl: "Vaak wel. Omwonenden reageren op wat ze zich voorstellen, en dat is meestal erger dan de werkelijkheid. Een realistische [[3d-visualisatie]] vanaf de weg, het fietspad of de achtertuin laat zien hoe een park of carport echt in het landschap ligt, inclusief groen en afscherming. Dat maakt een informatieavond een stuk rustiger. Voor Plenty Planet maakten we bijvoorbeeld een 3D-visualisatie van de Green Eco Corridor. Een vergunning regelt het niet voor je, maar het gesprek wordt wel eerlijker.",
              en: "Often, yes. Residents react to what they imagine, and that is usually worse than reality. A realistic [[3d-visualisatie|3D visual]] from the road, the cycle path or a back garden shows how a park or carport really sits in the landscape, including greenery and screening. That makes an information evening a lot calmer. For Plenty Planet, for example, we created a 3D visual of the Green Eco Corridor. It will not get you the permit by itself, but it does make the conversation more honest.",
            },
          },
          {
            q: { nl: "Hoe vinden bedrijven met een groot dak of parkeerterrein ons?", en: "How do companies with a large roof or car park find us?" },
            a: {
              nl: "Via de zoektermen die ze zelf gebruiken, zoals 'zonnepanelen op parkeerplaats', 'solar carport bedrijf' of 'batterij bij netcongestie'. Schrijf per toepassing een pagina die de vraag echt beantwoordt, met voorbeelden en een eerlijke uitleg van de aanpak. Steeds vaker stellen beslissers die vraag ook aan ChatGPT of Perplexity. Met [[seo]] en [[geo|GEO]] zorgen we dat je in Google en in AI-antwoorden opduikt. LinkedIn werkt daarnaast goed om facilitair managers en vastgoedeigenaren direct te bereiken.",
              en: "Through the search terms they use themselves, such as 'solar panels on car park', 'solar carport company' or 'battery for grid congestion'. Write a page per application that really answers the question, with examples and an honest explanation of the approach. Decision-makers increasingly ask ChatGPT or Perplexity the same thing. With [[seo|SEO]] and [[geo|GEO]] we make sure you show up in Google and in AI answers. LinkedIn also works well to reach facility managers and property owners directly.",
            },
          },
          {
            q: { nl: "Hoe vind je grondeigenaren voor een zonnepark of batterijproject?", en: "How do you find landowners for a solar park or battery project?" },
            a: {
              nl: "Door hun vragen eerder te beantwoorden dan de concurrent. Een agrariër of bedrijf met restgrond wil weten wat het ongeveer oplevert, hoe lang een contract loopt en wat er na afloop met de grond gebeurt. Zet dat eerlijk op een eigen [[landingspaginas|landingspagina]], met een eenvoudig formulier om een perceel aan te melden. Met gerichte [[meta-ads|Meta Ads]] en [[linkedin-ads|LinkedIn Ads]] in de zoekgebieden bereik je eigenaren voordat iemand anders ze belt.",
              en: "By answering their questions before your competitors do. A farmer or company with spare land wants to know roughly what it pays, how long a contract runs and what happens to the land afterwards. Put that honestly on a dedicated [[landingspaginas|landing page]], with a simple form to register a plot. With targeted [[meta-ads|Meta Ads]] and [[linkedin-ads|LinkedIn Ads]] in your search areas you reach owners before someone else calls them.",
            },
          },
          {
            q: { nl: "Wat hoort er in een pitchdeck voor een energieproject?", en: "What belongs in a pitch deck for an energy project?" },
            a: {
              nl: "Het verhaal in de volgorde waarin een investeerder denkt: de locatie, de status van netaansluiting en vergunning, de techniek, de planning, het team en de business case, met de risico's eerlijk erbij. Laat zoveel mogelijk zien in plaats van vertellen, met een kaart, een render en een paar duidelijke grafieken. Een goed [[presentaties-pitchdecks|pitchdeck]] werkt ook als je er zelf niet bij bent, want het wordt na het gesprek doorgestuurd. Wij ontwerpen het zo dat je het per project snel aanpast.",
              en: "The story in the order an investor thinks: the location, the status of grid connection and permit, the technology, the planning, the team and the business case, with the risks honestly included. Show rather than tell as much as possible, with a map, a render and a few clear charts. A good [[presentaties-pitchdecks|pitch deck]] also works when you are not in the room, because it gets forwarded after the meeting. We design it so you can quickly adapt it per project.",
            },
          },
          {
            q: { nl: "Hoe houd je omwonenden op de hoogte tijdens de bouw?", en: "How do you keep local residents informed during construction?" },
            a: {
              nl: "Met één vaste plek waar alles klopt. Een [[landingspaginas|projectpagina]] met de planning, de werkzaamheden van deze week, verwachte hinder en een aanspreekpunt voorkomt veel ergernis. Stuur geïnteresseerden een korte update per mail als er iets verandert. [[dronevideo|Dronebeelden]] van de voortgang laten zien dat het werk opschiet en hoe het park in het landschap komt te liggen. Zo blijft het gesprek met de buren rustig, ook als er een keer iets tegenzit.",
              en: "With one fixed place where everything is correct. A [[landingspaginas|project page]] with the planning, this week's works, expected disruption and a point of contact prevents a lot of irritation. Send interested people a short email update when something changes. [[dronevideo|Drone footage]] of the progress shows the work is moving and how the park will sit in the landscape. That keeps the conversation with the neighbours calm, even when something does not go to plan.",
            },
          },
        ],
      },
      {
        name: { nl: "Installateurs", en: "Installers" },
        intro: {
          nl: "Voor installateurs van zonnepanelen, warmtepompen, thuisbatterijen en laadpalen, installatiebedrijven en isolatiespecialisten die meer en betere aanvragen willen uit hun eigen regio.",
          en: "For installers of solar panels, heat pumps, home batteries and EV chargers, installation companies and insulation specialists who want more and better enquiries from their own region.",
        },
        types: [
          { nl: "Zonnepaneleninstallateurs", en: "Solar panel installers" },
          { nl: "Warmtepompinstallateurs", en: "Heat pump installers" },
          { nl: "Laadpaalinstallateurs", en: "EV charger installers" },
          { nl: "Installatiebedrijven", en: "Installation companies" },
          { nl: "Isolatiebedrijven", en: "Insulation companies" },
        ],
        useCases: [
          {
            title: { nl: "Offertecalculator voor zonnepanelen en thuisbatterij", en: "Quote calculator for solar panels and home batteries" },
            text: {
              nl: "De klant kiest daktype, ligging en verbruik en ziet direct een indicatie. Jij krijgt een aanvraag met alles erin, zonder eerst drie keer te bellen.",
              en: "The customer chooses roof type, orientation and consumption and sees an estimate straight away. You get an enquiry with everything in it, without three phone calls first.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Lokale SEO per werkgebied", en: "Local SEO per service area" },
            text: {
              nl: "Gevonden worden op 'zonnepanelen installateur' of 'warmtepomp laten plaatsen' met je plaatsnaam erbij, dankzij een sterk Google Bedrijfsprofiel en pagina's per regio.",
              en: "Get found for 'solar panel installer' or 'heat pump installation' plus your town, thanks to a strong Google Business Profile and pages per region.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Een website die vertrouwen wekt", en: "A website that builds trust" },
            text: {
              nl: "Eigen projecten, je team, reviews en een helder stappenplan van schouw tot oplevering. Zo ziet een bezoeker dat je een vakman bent en geen callcenter.",
              en: "Your own projects, your team, reviews and a clear step-by-step plan from site survey to completion. That way a visitor sees you are a craftsman, not a call centre.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Offertes automatisch opvolgen", en: "Following up quotes automatically" },
            text: {
              nl: "Niet iedereen tekent meteen. Een paar nuttige mails over subsidie, planning en ervaringen van andere klanten houden je in beeld tot de klant er klaar voor is.",
              en: "Not everyone signs straight away. A few useful emails about subsidies, planning and other customers' experiences keep you in view until the customer is ready.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "Google Ads in het stookseizoen", en: "Google Ads in the heating season" },
            text: {
              nl: "Wie in oktober 'warmtepomp laten plaatsen' zoekt, wil een installateur in de buurt. Met Google Ads op je eigen werkgebied sta je in beeld op het moment dat de vraag er is.",
              en: "Someone searching for 'heat pump installation' in October wants an installer nearby. With Google Ads targeted at your own service area you are visible at the moment the need is there.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
          {
            title: { nl: "Video's van echte klussen", en: "Videos of real jobs" },
            text: {
              nl: "Een warmtepomp die in één dag wordt geplaatst of panelen op een lastig dak: korte video's van je eigen klussen laten zien hoe netjes je team werkt. Dat overtuigt meer dan een stockfoto.",
              en: "A heat pump installed in a single day or panels on a tricky roof: short videos of your own jobs show how neatly your team works. That convinces more than a stock photo.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Werken-bij voor monteurs", en: "Careers page for technicians" },
            text: {
              nl: "Goede monteurs zijn schaars. Een werken-bij pagina met echte collega's, de bus, het gereedschap en de opleiding laat zien waarom het bij jou goed werken is. Solliciteren kan in een paar minuten.",
              en: "Good technicians are scarce. A careers page with real colleagues, the van, the tools and the training shows why yours is a good place to work. Applying takes a few minutes.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "AI-assistent voor klantvragen", en: "AI assistant for customer questions" },
            text: {
              nl: "Vragen over subsidie, het geluid van een warmtepomp of de planning beantwoord op basis van je eigen informatie, ook 's avonds. Lastige of persoonlijke vragen gaan door naar je adviseur.",
              en: "Questions about subsidies, heat pump noise or scheduling answered from your own information, in the evening too. Tricky or personal questions go straight to your advisor.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat maakt een goede website voor een zonnepaneleninstallateur?", en: "What makes a good website for a solar panel installer?" },
            a: {
              nl: "Vertrouwen en snelheid. Bezoekers willen zien dat je echt bestaat: foto's van eigen installaties, je team, je werkgebied en reviews. Daarna willen ze snel weten wat het ongeveer kost, dus een [[offerte-calculator|offertecalculator]] met een indicatie werkt beter dan alleen 'neem contact op'. Leg ook uit wat er na de aanvraag gebeurt: schouw, offerte, installatie en aanmelding. Wie weet wat er komt, haakt minder snel af. En zorg dat alles soepel werkt op een telefoon.",
              en: "Trust and speed. Visitors want to see that you really exist: photos of your own installations, your team, your service area and reviews. Then they want to know quickly what it roughly costs, so a [[offerte-calculator|quote calculator]] with an estimate works better than just 'get in touch'. Also explain what happens after the enquiry: site survey, quote, installation and registration. People who know what is coming are less likely to drop out. And make sure everything works smoothly on a phone.",
            },
          },
          {
            q: { nl: "Hoe krijg ik als installateur meer aanvragen voor warmtepompen?", en: "How do I get more heat pump enquiries as an installer?" },
            a: {
              nl: "Neem eerst de twijfels weg. Is mijn huis geschikt? Hybride of volledig elektrisch? Kom ik in aanmerking voor de ISDE-subsidie? Een [[keuzehulp-quiz|keuzehulp]] met een paar vragen over bouwjaar, isolatie en verwarming geeft een eerlijk advies en levert een aanvraag op met de juiste gegevens. Schrijf daarnaast pagina's die die vragen beantwoorden, dan vinden mensen je al terwijl ze nog oriënteren. Advertenties in het najaar, als iedereen aan de stookkosten denkt, doen de rest.",
              en: "First take away the doubts. Is my house suitable? Hybrid or fully electric? Am I eligible for the Dutch ISDE subsidy? A [[keuzehulp-quiz|product finder]] with a few questions about construction year, insulation and heating gives honest advice and produces an enquiry with the right details. Also write pages that answer those questions, so people find you while they are still exploring. Ads in autumn, when everyone is thinking about heating costs, do the rest.",
            },
          },
          {
            q: { nl: "Hoe ga ik in mijn communicatie om met het einde van de salderingsregeling?", en: "How should I handle the end of net metering in my communication?" },
            a: {
              nl: "Eerlijk en zonder paniek. Klanten lezen koppen als 'zonnepanelen niet meer rendabel' en gaan twijfelen. Leg rustig uit wat er verandert, wat dat betekent voor iemand die nu panelen neemt en waar een thuisbatterij of slim verbruik wel en niet helpt. Een rekenvoorbeeld zegt meer dan een slogan. Wij schrijven die [[seo-content|content]] zo dat hij ook gevonden wordt op de vragen die mensen nu in Google en ChatGPT typen. Zo word je de installateur die uitlegt in plaats van verkoopt.",
              en: "Honestly and without panic. Customers read headlines like 'solar panels no longer worth it' and start to doubt. Calmly explain what is changing, what it means for someone getting panels now, and where a home battery or smart usage does and does not help. A worked example says more than a slogan. We write that [[seo-content|content]] so it also gets found for the questions people are typing into Google and ChatGPT right now. That makes you the installer who explains rather than sells.",
            },
          },
          {
            q: { nl: "Is adverteren zinvol voor laadpalen en thuisbatterijen?", en: "Is advertising worthwhile for EV chargers and home batteries?" },
            a: {
              nl: "Ja, als je het product koppelt aan een moment. Iemand die net een elektrische auto heeft besteld, zoekt een laadpaal. Iemand die schrikt van zijn terugleverkosten, kijkt naar een batterij. Met [[google-ads|Google Ads]] vang je die zoekvragen op, met [[meta-ads|Meta Ads]] bereik je mensen in je werkgebied die er nog niet actief naar zoeken. Voor GRID maakten we social ads waarmee bewoners gratis een publiek laadpunt bij hun woning kunnen aanvragen. Eén duidelijke actie in de advertentie doet het meeste werk.",
              en: "Yes, if you link the product to a moment. Someone who has just ordered an electric car is looking for a charger. Someone shocked by their feed-in charges is looking at a battery. With [[google-ads|Google Ads]] you catch those searches, with [[meta-ads|Meta Ads]] you reach people in your area who are not actively searching yet. For GRID we created social ads that let residents request a free public charging point near their home. One clear action in the ad does most of the work.",
            },
          },
          {
            q: { nl: "Hoe vind ik als installatiebedrijf goede monteurs?", en: "How do I find good technicians as an installation company?" },
            a: {
              nl: "Door te laten zien hoe het werk bij jou echt is, want vakmensen kiezen een werkgever en geen vacaturetekst. Laat collega's vertellen over hun klussen, de bus, de opleiding en de sfeer in het team. Maak solliciteren kort, zonder verplicht cv, en reageer snel. Met [[employer-branding|employer branding]], een paar [[social-video|korte video's]] en gerichte [[meta-ads|Meta Ads]] in je regio bereik je ook monteurs die niet actief zoeken, maar wel openstaan voor iets nieuws.",
              en: "By showing what the work with you is really like, because skilled people choose an employer, not a job ad. Let colleagues talk about their jobs, the van, the training and the team spirit. Keep applying short, without a mandatory CV, and respond quickly. With [[employer-branding|employer branding]], a few [[social-video|short videos]] and targeted [[meta-ads|Meta Ads]] in your region you also reach technicians who are not actively looking but are open to something new.",
            },
          },
          {
            q: { nl: "Hoe belangrijk zijn Google-reviews voor een installateur?", en: "How important are Google reviews for an installer?" },
            a: {
              nl: "Erg belangrijk. Bij een investering in zonnepanelen of een warmtepomp kijkt bijna iedereen eerst naar ervaringen van anderen, en reviews tellen mee voor je zichtbaarheid in Google Maps. Vraag erom op het moment dat de klant tevreden is, bijvoorbeeld een paar dagen na de oplevering, met een directe link. Met een [[workflow-automatisering|automatische flow]] gebeurt dat bij elke klus zonder dat iemand eraan hoeft te denken. Reageer op elke review, ook op de kritische, rustig en concreet.",
              en: "Very important. When investing in solar panels or a heat pump, nearly everyone first looks at other people's experiences, and reviews count towards your visibility in Google Maps. Ask for them when the customer is happy, for example a few days after completion, with a direct link. With an [[workflow-automatisering|automated flow]] that happens on every job without anyone having to remember. Reply to every review, including the critical ones, calmly and concretely.",
            },
          },
          {
            q: { nl: "Kan een chatbot vragen over subsidie en terugverdientijd beantwoorden?", en: "Can a chatbot answer questions about subsidies and payback time?" },
            a: {
              nl: "Ja, als je hem goed afbakent. Een [[ai-chatbots|AI-chatbot]] die alleen antwoordt op basis van je eigen pagina's en actuele subsidie-informatie, helpt bezoekers ook buiten kantoortijd op weg. Laat hem geen harde beloftes doen over opbrengst of terugverdientijd, maar laat hem verwijzen naar je calculator of een adviseur. Subsidieregels veranderen regelmatig, dus houd de bron actueel. Zo beantwoordt de bot de standaardvragen en houdt je adviseur tijd voor de echte gesprekken.",
              en: "Yes, if you scope it well. An [[ai-chatbots|AI chatbot]] that only answers from your own pages and up-to-date subsidy information helps visitors outside office hours too. Do not let it make firm promises about yield or payback time; have it refer to your calculator or an advisor instead. Subsidy rules change regularly, so keep the source up to date. That way the bot handles the standard questions and your advisor has time for the real conversations.",
            },
          },
        ],
      },
      {
        name: { nl: "Energieadvies & vastgoed", en: "Energy advice & property" },
        intro: {
          nl: "Voor energieadviseurs, energielabel-adviseurs, verduurzamingsadviseurs en bedrijven die woningen, bedrijfspanden en vastgoedportefeuilles helpen verduurzamen.",
          en: "For energy advisors, energy label assessors, sustainability advisors and companies that help make homes, commercial buildings and property portfolios more sustainable.",
        },
        types: [
          { nl: "Energieadviseurs", en: "Energy advisors" },
          { nl: "Energielabel-adviseurs", en: "Energy label assessors" },
          { nl: "Verduurzamingsadviesbureaus", en: "Building sustainability consultancies" },
          { nl: "Energiemanagementbedrijven", en: "Energy management companies" },
        ],
        useCases: [
          {
            title: { nl: "Energieconfigurator voor panden", en: "Energy configurator for buildings" },
            text: {
              nl: "Een vastgoedeigenaar vult verbruik en laadbehoefte in en ziet een mogelijke oplossing, zoals in de Energy Property Configurator die we voor Steddion bouwden.",
              en: "A property owner enters consumption and charging needs and sees a possible solution, like in the Energy Property Configurator we built for Steddion.",
            },
            service: "configurators-lead-tools-widgets",
            application: "productconfigurator",
          },
          {
            title: { nl: "Quickscan verduurzaming", en: "Sustainability quick scan" },
            text: {
              nl: "Een paar vragen over bouwjaar, installaties en verbruik, en de bezoeker ziet waar de grootste winst zit. Jij krijgt een aanvraag waar je iets mee kunt.",
              en: "A few questions about construction year, installations and consumption, and the visitor sees where the biggest gains are. You get an enquiry you can actually work with.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "Klantomgeving met rapporten en advies", en: "Client area with reports and advice" },
            text: {
              nl: "Klanten vinden hun energielabel, adviesrapport en maatregelen terug in één omgeving, in plaats van in een mailbox vol bijlagen.",
              en: "Clients find their energy label, advice report and measures in one place, instead of in an inbox full of attachments.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Vindbaar op adviesvragen", en: "Findable for advice questions" },
            text: {
              nl: "Pagina's die vragen als 'energielabel aanvragen' of 'bedrijfspand verduurzamen' echt beantwoorden, zodat mensen die een adviseur zoeken bij jou uitkomen.",
              en: "Pages that properly answer questions like 'request an energy label' or 'make a commercial building sustainable', so people looking for an advisor end up with you.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Website die advies begrijpelijk maakt", en: "A website that makes advice clear" },
            text: {
              nl: "Wat is maatwerkadvies, wanneer heb je een energielabel nodig en hoe gaat een opname? Een website die dat in gewone taal uitlegt, met op elke pagina een knop om direct een afspraak te plannen.",
              en: "What is tailored energy advice, when do you need an energy label and how does an assessment work? A website that explains it in plain language, with a button on every page to book an appointment straight away.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Adviesrapport dat klanten wél lezen", en: "An advice report clients actually read" },
            text: {
              nl: "Een rapport met een heldere samenvatting, infographics en een stappenplan per maatregel. Zo weet een eigenaar wat hij eerst moet doen, in plaats van een pdf van veertig pagina's weg te klikken.",
              en: "A report with a clear summary, infographics and a step-by-step plan per measure. That way an owner knows what to do first, instead of closing a forty-page PDF.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
          {
            title: { nl: "Van aanvraag tot rapport in één CRM", en: "From enquiry to report in one CRM" },
            text: {
              nl: "Aanvragen, opnames, rapporten en vervolgopdrachten in één systeem, met automatische bevestigingen en herinneringen. Handig als je met meerdere adviseurs werkt en er niets tussen wal en schip mag vallen.",
              en: "Enquiries, assessments, reports and follow-up jobs in one system, with automatic confirmations and reminders. Handy when you work with several advisors and nothing should slip through the cracks.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
          },
          {
            title: { nl: "AI die rapportteksten voorbereidt", en: "AI that drafts report texts" },
            text: {
              nl: "AI zet de notities en gegevens van een opname om in een eerste concepttekst die de adviseur controleert en aanvult. Minder typwerk, meer tijd voor het advies zelf en het gesprek met de klant.",
              en: "AI turns the notes and data from an assessment into a first draft that the advisor checks and completes. Less typing, more time for the advice itself and the conversation with the client.",
            },
            service: "ai-consultancy",
            application: "ai-integraties",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe werkt een energieconfigurator voor vastgoed?", en: "How does an energy configurator for property work?" },
            a: {
              nl: "De eigenaar vult stap voor stap de gegevens van zijn pand in, zoals het verbruiksprofiel, de laadbehoefte voor auto's en zijn wensen. De configurator rekent daarmee een mogelijke oplossing uit, bijvoorbeeld met zonnepanelen en batterijopslag, en laat zien wat dat doet met afname en teruglevering. Voor Steddion bouwden we zo'n [[productconfigurator|configurator]]: de Energy Property Configurator. De eigenaar heeft een eerste beeld, de adviseur een aanvraag met de juiste gegevens. Dat is een beter begin dan een leeg contactformulier.",
              en: "The owner enters the details of their building step by step, such as the consumption profile, the charging needs for cars and their wishes. The configurator uses that to calculate a possible solution, for example with solar panels and battery storage, and shows what it does to grid consumption and feed-in. For Steddion we built a [[productconfigurator|configurator]] like that: the Energy Property Configurator. The owner gets a first picture, the advisor an enquiry with the right details. That is a better start than an empty contact form.",
            },
          },
          {
            q: { nl: "Hoe word ik als energieadviseur gevonden op 'energielabel aanvragen'?", en: "How do I get found as an energy advisor for 'request an energy label'?" },
            a: {
              nl: "Met een pagina per dienst en per regio, want mensen zoeken lokaal en concreet: 'energielabel aanvragen Eindhoven' of 'maatwerkadvies woning'. Zet op die pagina's hoe de prijs tot stand komt, hoe snel je kunt komen en wat de klant moet voorbereiden. Een compleet Google Bedrijfsprofiel met reviews helpt enorm. Met [[lokale-seo|lokale SEO]] bouwen we dat stap voor stap op. En met een [[boekingswidget|afsprakenwidget]] staat de opname direct in je agenda.",
              en: "With a page per service and per region, because people search locally and specifically: 'energy label Eindhoven' or 'tailored home energy advice'. Put on those pages how the price is set, how soon you can come and what the customer needs to prepare. A complete Google Business Profile with reviews helps a lot. With [[lokale-seo|local SEO]] we build that up step by step. And with an [[boekingswidget|appointment widget]] the assessment lands straight in your calendar.",
            },
          },
          {
            q: { nl: "Kunnen onze klanten hun adviezen en rapporten online terugvinden?", en: "Can our clients find their advice and reports online?" },
            a: {
              nl: "Ja. In een [[klantportaal]] staan het energielabel, het adviesrapport en de voorgestelde maatregelen per pand bij elkaar. Voor vastgoedeigenaren met meerdere panden is dat extra handig: één overzicht met de status per gebouw. Klanten kunnen er ook vragen stellen of een vervolgopdracht aanvragen. Dat scheelt jou zoekwerk en mailtjes met 'kun je dat rapport nog eens sturen?'. We koppelen het portaal waar mogelijk aan de software waarmee je nu al werkt.",
              en: "Yes. In a [[klantportaal|client portal]] the energy label, the advice report and the proposed measures are kept together per building. For property owners with several buildings that is extra handy: one overview with the status per building. Clients can also ask questions there or request a follow-up job. That saves you searching and emails saying 'could you send that report again?'. Where possible we connect the portal to the software you already use.",
            },
          },
          {
            q: { nl: "Hoe maak je een adviesrapport dat klanten echt lezen?", en: "How do you make an advice report clients actually read?" },
            a: {
              nl: "Zet het belangrijkste vooraan: een samenvatting van één pagina met de huidige situatie, de drie maatregelen met de meeste winst en een logische volgorde. Daarna volgt de onderbouwing voor wie verder wil lezen. Met [[infographics]] en een vast sjabloon ziet de klant in één oogopslag waar hij staat. Zet het rapport ook in een [[klantportaal]], zodat een eigenaar met meerdere panden alles op één plek terugvindt.",
              en: "Put the most important part first: a one-page summary with the current situation, the three measures with the biggest gains and a logical order. Then the reasoning follows for those who want to read on. With [[infographics]] and a fixed template, the client sees at a glance where they stand. Put the report in a [[klantportaal|client portal]] too, so an owner with several buildings finds everything in one place.",
            },
          },
          {
            q: { nl: "Kan AI helpen bij het opstellen van energieadviezen?", en: "Can AI help with writing energy advice reports?" },
            a: {
              nl: "Ja, als voorbereiding. AI kan opnamegegevens en notities omzetten in een eerste concepttekst, of een technisch rapport samenvatten in gewone taal voor de klant. De berekeningen blijven in de software waarmee je erkend werkt, en de adviseur controleert en tekent altijd zelf. Begin met één type rapport en meet hoeveel tijd het scheelt. Met [[ai-integraties|AI-integraties]] en een heldere [[ai-strategie|AI-strategie]] past het in je bestaande werkwijze.",
              en: "Yes, as preparation. AI can turn assessment data and notes into a first draft, or summarise a technical report in plain language for the client. The calculations stay in the certified software you already use, and the advisor always checks and signs off personally. Start with one type of report and measure how much time it saves. With [[ai-integraties|AI integrations]] and a clear [[ai-strategie|AI strategy]] it fits into your existing way of working.",
            },
          },
          {
            q: { nl: "Hoe bereik je vastgoedeigenaren en VvE's met verduurzamingsvragen?", en: "How do you reach property owners and owners' associations with sustainability questions?" },
            a: {
              nl: "Door in te spelen op wat nu op hun bord ligt, zoals de labelplicht voor kantoren, een meerjarenonderhoudsplan of een bank die naar het energielabel vraagt. Schrijf daar praktische artikelen en checklists over, zodat ze je vinden zodra ze gaan zoeken. Professionele eigenaren en beheerders bereik je goed via LinkedIn, VvE-besturen vaker via Google. Met [[seo-content|SEO-content]] en [[linkedin-ads|LinkedIn Ads]] word je de adviseur die ze bellen als het concreet wordt.",
              en: "By responding to what is currently on their desk, such as the energy label requirement for offices, a long-term maintenance plan or a bank asking about the energy label. Write practical articles and checklists about that, so they find you as soon as they start searching. Professional owners and managers are easy to reach through LinkedIn, owners' association boards more often through Google. With [[seo-content|SEO content]] and [[linkedin-ads|LinkedIn Ads]] you become the advisor they call when things get concrete.",
            },
          },
        ],
      },
      {
        name: { nl: "Coöperaties & infrastructuur", en: "Cooperatives & infrastructure" },
        intro: {
          nl: "Voor energiecoöperaties, lokale energie-initiatieven, laadpuntexploitanten, warmtenetten en andere partijen die energie dichter bij bewoners en bedrijven brengen.",
          en: "For energy cooperatives, local energy initiatives, charge point operators, district heating networks and others that bring energy closer to residents and businesses.",
        },
        types: [
          { nl: "Energiecoöperaties", en: "Energy cooperatives" },
          { nl: "Lokale energie-initiatieven", en: "Local energy initiatives" },
          { nl: "Laadpuntexploitanten", en: "Charge point operators" },
          { nl: "Warmtenetbedrijven", en: "District heating companies" },
        ],
        useCases: [
          {
            title: { nl: "Campagne voor laadpuntaanvragen", en: "Campaign for charging point requests" },
            text: {
              nl: "Een heldere advertentie met één actie: vraag een laadpunt aan. Zoals de social ads die we voor GRID maakten, voor het gratis aanvragen van een publiek laadpunt bij je woning.",
              en: "A clear ad with one action: request a charging point. Like the social ads we created for GRID, for requesting a free public charging point near your home.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Leden en participanten werven", en: "Recruiting members and participants" },
            text: {
              nl: "Een landingspagina per project die uitlegt wat er gebeurt, wat meedoen oplevert en hoe je je aanmeldt.",
              en: "A landing page per project that explains what is happening, what taking part brings and how to sign up.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Ledenomgeving", en: "Member area" },
            text: {
              nl: "Leden zien hun participaties, berichten en de stukken voor de ledenvergadering op één plek, en wijzigen zelf hun gegevens.",
              en: "Members see their shares, updates and the documents for the general meeting in one place, and update their own details.",
            },
            service: "web-apps-portals-apps",
            application: "ledenportaal-loyaliteit",
          },
          {
            title: { nl: "Uitleganimatie", en: "Explainer animation" },
            text: {
              nl: "Hoe werkt een warmtenet of een buurtbatterij? Een korte animatie legt het uit zonder dat iemand een folder hoeft te lezen.",
              en: "How does a district heating network or a neighbourhood battery work? A short animation explains it without anyone having to read a leaflet.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "Naam en huisstijl voor een coöperatie", en: "Name and identity for a cooperative" },
            text: {
              nl: "Een naam en beeld waar het dorp zich in herkent, die werken op de website, een bouwbord en een flyer in de bus. Lokaal en betrouwbaar, zonder dat het voelt als een groot energiebedrijf.",
              en: "A name and look the village recognises itself in, that work on the website, a site sign and a leaflet through the door. Local and trustworthy, without feeling like a big energy company.",
            },
            service: "branding-rebranding",
            application: "naamgeving",
          },
          {
            title: { nl: "Flyer en uitnodiging huis-aan-huis", en: "Door-to-door leaflet and invitation" },
            text: {
              nl: "Niet iedereen leest je website. Een flyer met een heldere uitnodiging voor de informatieavond, een QR-code naar de projectpagina en een poster in het dorpshuis bereiken ook de buren die nooit online zoeken.",
              en: "Not everyone reads your website. A leaflet with a clear invitation to the information evening, a QR code to the project page and a poster in the community centre also reach the neighbours who never search online.",
            },
            service: "grafisch-ontwerp-print",
            application: "flyers-posters",
          },
          {
            title: { nl: "Nieuwsbrief tot de inschrijving opent", en: "Newsletter until registration opens" },
            text: {
              nl: "Geïnteresseerden krijgen automatisch een bevestiging, af en toe een update over vergunning en bouw, en een seintje zodra de inschrijving voor participaties of een laadpunt opengaat.",
              en: "Interested people automatically receive a confirmation, the occasional update on permit and construction, and a heads-up as soon as registration for shares or a charging point opens.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Adrescheck: kan ik meedoen?", en: "Address check: can I join?" },
            text: {
              nl: "Een bewoner vult zijn postcode in en ziet of zijn straat in het plangebied van het warmtenet of de laadpunten ligt, wat de volgende stap is en wanneer er een informatieavond is. Jij ziet waar de interesse zit.",
              en: "A resident enters their postcode and sees whether their street is in the plan area for the heat network or charging points, what the next step is and when there is an information evening. You see where the interest is.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe werf je leden of participanten voor een energiecoöperatie?", en: "How do you recruit members or participants for an energy cooperative?" },
            a: {
              nl: "Door het lokaal en concreet te maken. Mensen doen mee aan 'het zonnedak op de sporthal' of 'de molen bij het dorp', niet aan 'de energietransitie'. Geef elk project een eigen [[landingspaginas|landingspagina]] met beeld, uitleg in gewone taal en een eenvoudige manier om je aan te melden. Vertel wie erachter zitten, want vertrouwen in de buren werkt beter dan elke slogan. Met lokale social campagnes en een nieuwsbrief houd je geïnteresseerden betrokken tot de inschrijving opent.",
              en: "By making it local and concrete. People join 'the solar roof on the sports hall' or 'the wind turbine by the village', not 'the energy transition'. Give each project its own [[landingspaginas|landing page]] with visuals, plain-language explanation and a simple way to sign up. Tell people who is behind it, because trust in your neighbours works better than any slogan. With local social campaigns and a newsletter you keep interested people engaged until registration opens.",
            },
          },
          {
            q: { nl: "Hoe krijg je bewoners zover dat ze een laadpunt aanvragen?", en: "How do you get residents to request a charging point?" },
            a: {
              nl: "Maak de stap zo klein mogelijk. Eén duidelijke boodschap, één knop en een formulier dat in een minuut is ingevuld. Voor GRID maakten we social ads met precies die insteek: geheel gratis en vrijblijvend een publiek laadpunt bij je woning aanvragen. Richt de campagne op de straten en wijken waar je wilt plaatsen en laat zien hoe zo'n laadpunt eruitziet. Met [[meta-ads|Meta Ads]] kun je een campagne nauwkeurig op een gebied richten.",
              en: "Make the step as small as possible. One clear message, one button and a form that takes a minute to fill in. For GRID we created social ads with exactly that approach: request a public charging point near your home, completely free and without obligation. Aim the campaign at the streets and neighbourhoods where you want to install, and show what a charging point looks like. With [[meta-ads|Meta Ads]] you can target a campaign precisely at an area.",
            },
          },
          {
            q: { nl: "Hoe communiceer je over netcongestie zonder mensen af te schrikken?", en: "How do you communicate about grid congestion without scaring people off?" },
            a: {
              nl: "Door uit te leggen wat het is en wat iemand er zelf aan kan doen. Netcongestie klinkt als een probleem waar je niets aan kunt veranderen. Maar slim laden, opslag en samenwerking op een bedrijventerrein helpen wel. Een korte [[motion-design|animatie]] van een vol stroomnet op een drukke dag maakt het in een halve minuut duidelijk. Daarna volgt een pagina met concrete opties per situatie. Zo voelt het niet als slecht nieuws, maar als een vraagstuk waar je samen aan werkt.",
              en: "By explaining what it is and what people can do about it themselves. Grid congestion sounds like a problem you cannot change. But smart charging, storage and cooperation on a business park do help. A short [[motion-design|animation]] of a full grid on a busy day makes it clear in half a minute. Then follow up with a page of concrete options per situation. That way it does not feel like bad news, but like a challenge you tackle together.",
            },
          },
          {
            q: { nl: "Hoe organiseer je een goede informatieavond over een energieproject?", en: "How do you organise a good information evening about an energy project?" },
            a: {
              nl: "Nodig breed uit en maak het concreet. Gebruik een [[flyers-posters|flyer]] in de bus, lokale social posts en een aanmeldpagina, zodat je weet hoeveel mensen er komen. Laat op de avond zien wat er echt komt, bijvoorbeeld met een [[3d-visualisatie]] vanaf een bekende plek in het dorp, en vertel wat er met vragen en zorgen gebeurt. Zet de presentatie en de antwoorden achteraf online, voor wie er niet bij kon zijn.",
              en: "Invite widely and make it concrete. Use a [[flyers-posters|leaflet]] through the door, local social posts and a sign-up page, so you know how many people are coming. On the evening, show what is really coming, for example with a [[3d-visualisatie|3D visual]] from a familiar spot in the village, and explain what happens with questions and concerns. Put the presentation and the answers online afterwards, for those who could not make it.",
            },
          },
          {
            q: { nl: "Hoe communiceer je over een warmtenet zonder dat bewoners afhaken?", en: "How do you communicate about a heat network without residents dropping out?" },
            a: {
              nl: "Door de vragen te beantwoorden die bewoners echt hebben: wat kost het mij, wat merk ik ervan in huis, hoe lang duurt de aanleg en wat als ik niet meedoe? Wees eerlijk over wat nog niet vaststaat. Een korte [[motion-design|animatie]] legt uit hoe een warmtenet werkt, een [[check-tools|adrescheck]] laat zien wat het voor jouw straat betekent. Een vaste pagina met vragen en antwoorden, die je na elke bijeenkomst bijwerkt, voorkomt dat geruchten het verhaal overnemen.",
              en: "By answering the questions residents actually have: what will it cost me, what will I notice at home, how long will installation take and what if I do not take part? Be honest about what has not been decided yet. A short [[motion-design|animation]] explains how a heat network works, an [[check-tools|address check]] shows what it means for your street. A fixed questions-and-answers page that you update after every meeting keeps rumours from taking over the story.",
            },
          },
          {
            q: { nl: "Kan een coöperatie met vrijwilligers de website zelf bijhouden?", en: "Can a cooperative run by volunteers keep the website up to date itself?" },
            a: {
              nl: "Ja, als je het simpel houdt. We bouwen een [[webflow-website|website]] met een overzichtelijk beheer, waarin vrijwilligers nieuws, projecten en agenda-items plaatsen zonder technische kennis. Met vaste sjablonen ziet elke pagina er goed uit, wie hem ook maakt. We leggen het uit in een korte sessie. Hosting, updates en beveiliging regelen we met [[hosting-onderhoud|hosting en onderhoud]], zodat niemand in het bestuur daar wakker van hoeft te liggen.",
              en: "Yes, if you keep it simple. We build a [[webflow-website|website]] with a clear back end, where volunteers post news, projects and calendar items without technical knowledge. With fixed templates every page looks good, whoever makes it. We explain it in a short session. Hosting, updates and security are covered with [[hosting-onderhoud|hosting and maintenance]], so nobody on the board has to lose sleep over it.",
            },
          },
        ],
      },
      {
        name: { nl: "Circulair & duurzaam ondernemen", en: "Circular & sustainable business" },
        intro: {
          nl: "Voor duurzaamheidsconsultancies, CSRD- en ESG-adviseurs, circulaire bedrijven, recyclers en refurbishers die laten zien wat ze echt doen, zonder groene praatjes.",
          en: "For sustainability consultancies, CSRD and ESG advisors, circular businesses, recyclers and refurbishers who want to show what they really do, without green waffle.",
        },
        types: [
          { nl: "Duurzaamheidsconsultancies", en: "Sustainability consultancies" },
          { nl: "CSRD- en ESG-adviseurs", en: "CSRD and ESG advisors" },
          { nl: "Circulaire bedrijven", en: "Circular businesses" },
          { nl: "Recycling- en refurbishbedrijven", en: "Recycling and refurbishment companies" },
        ],
        useCases: [
          {
            title: { nl: "Een merk zonder groene praatjes", en: "A brand without green waffle" },
            text: {
              nl: "Een positionering die vertelt wat je doet en kunt aantonen, in plaats van 'groen' en 'duurzaam' op elke pagina.",
              en: "A positioning that says what you do and can prove, instead of 'green' and 'sustainable' on every page.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Impact in infographics", en: "Impact in infographics" },
            text: {
              nl: "Cijfers uit je impactrapport of CO2-footprint helder in beeld, voor je website, rapportage en LinkedIn.",
              en: "Figures from your impact report or carbon footprint shown clearly, for your website, reporting and LinkedIn.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
          {
            title: { nl: "Webshop voor circulaire producten", en: "Web shop for circular products" },
            text: {
              nl: "Refurbished, gerecycled of als dienst: een webshop die herkomst, staat en garantie per product helder maakt.",
              en: "Refurbished, recycled or as a service: a web shop that makes origin, condition and warranty clear for each product.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Kennis delen op LinkedIn", en: "Sharing expertise on LinkedIn" },
            text: {
              nl: "Als adviseur win je klanten met kennis. Artikelen en campagnes op LinkedIn bereiken de beslissers die met rapportage-eisen en klantvragen over CO2 zitten.",
              en: "As an advisor you win clients with expertise. Articles and campaigns on LinkedIn reach the decision-makers dealing with reporting requirements and customer questions about carbon.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "Kennisbank over CSRD en CO2", en: "Knowledge base on CSRD and carbon" },
            text: {
              nl: "Heldere antwoorden op vragen als 'moet ik CSRD-rapporteren?' of 'hoe breng ik mijn CO2-uitstoot in kaart?', zo opgebouwd dat Google en AI-assistenten ze makkelijk als antwoord kunnen gebruiken.",
              en: "Clear answers to questions like 'do I have to report under the CSRD?' or 'how do I map my carbon emissions?', structured so Google and AI assistants can easily use them as an answer.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
          {
            title: { nl: "Dashboard met impactdata", en: "Dashboard with impact data" },
            text: {
              nl: "Ingezameld materiaal, hergebruikte producten of bespaarde CO2 per klant in één dashboard. Handig voor je eigen rapportage, en klanten zien wat hun bijdrage oplevert.",
              en: "Collected material, reused products or carbon saved per customer in one dashboard. Useful for your own reporting, and customers see what their contribution delivers.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
          {
            title: { nl: "Calculator voor terugname of inruil", en: "Take-back or trade-in calculator" },
            text: {
              nl: "Een bedrijf geeft aantallen en type apparatuur, meubilair of materiaal op en ziet wat terugname of inruil ongeveer oplevert. Jij krijgt een aanvraag met de gegevens die je nodig hebt.",
              en: "A company enters the quantities and type of equipment, furniture or material and sees roughly what take-back or trade-in delivers. You get an enquiry with the details you need.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Film van je werkplaats", en: "A film of your workshop" },
            text: {
              nl: "Laat zien wat er gebeurt met een ingeleverd product: demonteren, testen, opknappen en opnieuw verkopen. Een korte film van je eigen werkplaats maakt circulair concreet voor inkopers die twijfelen.",
              en: "Show what happens to a returned product: dismantling, testing, refurbishing and selling it again. A short film of your own workshop makes circularity concrete for buyers who have doubts.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe communiceer je duurzaamheid zonder aan greenwashing te doen?", en: "How do you communicate sustainability without greenwashing?" },
            a: {
              nl: "Wees concreet en houd het bij wat je kunt aantonen. Claims als 'klimaatneutraal' of 'groen' zonder onderbouwing kunnen je in de problemen brengen: de regels voor duurzaamheidsclaims zijn strenger geworden en de ACM let erop. Zeg liever wat je precies doet, bijvoorbeeld welk materiaal je hergebruikt en hoe je dat controleert. Laat ook zien waar je nog niet bent. Dat is eerlijker en het overtuigt beter. We helpen je met een [[merkstrategie]] en [[tone-of-voice]] die daarop gebouwd zijn.",
              en: "Be concrete and stick to what you can prove. Claims like 'climate neutral' or 'green' without evidence can get you into trouble: the rules on sustainability claims have become stricter and regulators are watching. Instead, say exactly what you do, for example which material you reuse and how you check it. Also show where you are not there yet. That is more honest and more convincing. We help you with a [[merkstrategie|brand strategy]] and [[tone-of-voice|tone of voice]] built on that.",
            },
          },
          {
            q: { nl: "Hoe vindt een duurzaamheidsadviseur klanten met vragen over CSRD en CO2?", en: "How does a sustainability advisor find clients with questions about CSRD and carbon?" },
            a: {
              nl: "Door de vragen te beantwoorden die bedrijven nu hebben. Veel ondernemers krijgen van grote klanten of de bank vragen over hun CO2-uitstoot, of weten niet zeker of rapportage-eisen zoals de CSRD voor hen gelden. Schrijf daar heldere artikelen en handleidingen over en zorg dat ze gevonden worden in Google en AI-zoekmachines. Met [[seo-content|SEO-content]] en [[linkedin-ads|LinkedIn Ads]] bereik je de financieel directeur of duurzaamheidsmanager die iemand zoekt die het overzicht houdt. Kennis delen levert hier gewoon klanten op.",
              en: "By answering the questions companies have right now. Many business owners get questions about their carbon emissions from large customers or the bank, or are unsure whether reporting requirements such as the CSRD apply to them. Write clear articles and guides about that and make sure they are found in Google and AI search. With [[seo-content|SEO content]] and [[linkedin-ads|LinkedIn Ads]] you reach the finance director or sustainability manager looking for someone to keep track of it all. Sharing knowledge simply brings in clients here.",
            },
          },
          {
            q: { nl: "Hoe verkoop je refurbished of circulaire producten online?", en: "How do you sell refurbished or circular products online?" },
            a: {
              nl: "Door twijfel weg te nemen. Een koper van refurbished wil weten in welke staat het product is, wat er is vervangen en hoe lang de garantie loopt. Werk met duidelijke kwaliteitsklassen, echte foto's van het product en een eerlijke uitleg van het proces. Bij product-als-dienst of een terugnameregeling helpt een korte uitleg in stappen. We bouwen een [[webshop]] die dat allemaal overzichtelijk maakt, met de koppelingen naar je voorraad en logistiek die je nodig hebt.",
              en: "By removing doubt. A buyer of refurbished goods wants to know what condition the product is in, what has been replaced and how long the warranty runs. Work with clear quality grades, real photos of the product and an honest explanation of the process. For product-as-a-service or a take-back scheme, a short step-by-step explanation helps. We build a [[webshop|web shop]] that makes all of that clear, with the links to your stock and logistics that you need.",
            },
          },
          {
            q: { nl: "Hoe maak je een impact- of duurzaamheidsverslag dat gelezen wordt?", en: "How do you make an impact or sustainability report people read?" },
            a: {
              nl: "Begin met de kern op één of twee pagina's: wat je hebt gedaan, wat het heeft opgeleverd en waar je nog niet bent. Breng de belangrijkste cijfers in beeld met [[infographics]] en bewaar de volledige tabellen voor de bijlage. Maak er ook een webversie van, zodat je onderdelen kunt delen op LinkedIn en in offertes. Een verzorgd [[brochures-magazines|rapport]] laat zien dat je het serieus neemt, zonder het mooier te maken dan het is.",
              en: "Start with the core on one or two pages: what you did, what it delivered and where you are not there yet. Visualise the key figures with [[infographics]] and keep the full tables for the appendix. Make a web version too, so you can share parts of it on LinkedIn and in proposals. A well-designed [[brochures-magazines|report]] shows you take it seriously, without making it look better than it is.",
            },
          },
          {
            q: { nl: "Hoe overtuig je zakelijke kopers dat refurbished betrouwbaar is?", en: "How do you convince business buyers that refurbished is reliable?" },
            a: {
              nl: "Door het proces te laten zien en de afspraken helder te maken. Een inkoper wil weten hoe je test, welke onderdelen je vervangt, welke garantie je geeft en hoe levering en service geregeld zijn. Leg dat vast op een duidelijke pagina, met kwaliteitsklassen en een korte [[bedrijfsfilm|film]] uit je werkplaats. Voor vaste klanten werkt een eigen bestelomgeving met hun prijzen goed. Zo wordt refurbished geen gok, maar een bewuste keuze.",
              en: "By showing the process and making the agreements clear. A buyer wants to know how you test, which parts you replace, what warranty you give and how delivery and service work. Set that out on a clear page, with quality grades and a short [[bedrijfsfilm|film]] from your workshop. For regular customers, a dedicated ordering environment with their own prices works well. That way refurbished is not a gamble, but a conscious choice.",
            },
          },
          {
            q: { nl: "Kunnen klanten hun eigen impact of CO2-besparing online inzien?", en: "Can customers view their own impact or carbon savings online?" },
            a: {
              nl: "Ja. In een [[dashboards|dashboard]] of klantomgeving ziet een klant per periode wat er is ingezameld, hergebruikt of bespaard, met de bijbehorende certificaten of verwerkingsbewijzen. De data komt via [[api-koppelingen]] uit je eigen systemen, dus je houdt niets dubbel bij. Klanten gebruiken die cijfers vaak in hun eigen duurzaamheidsrapportage, en dat maakt jou een partner in plaats van een leverancier. Zorg wel dat de rekenmethode klopt en uitlegbaar is.",
              en: "Yes. In a [[dashboards|dashboard]] or client area a customer sees per period what was collected, reused or saved, with the related certificates or proof of processing. The data comes from your own systems through [[api-koppelingen|API integrations]], so you do not keep anything twice. Customers often use those figures in their own sustainability reporting, which makes you a partner instead of a supplier. Do make sure the calculation method is correct and explainable.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Zonneparkontwikkelaars", en: "Solar park developers" },
      { nl: "Solar carport-specialisten", en: "Solar carport specialists" },
      { nl: "Batterijopslagbedrijven", en: "Battery storage companies" },
      { nl: "Zakelijke zonne-energiebedrijven", en: "Commercial solar companies" },
      { nl: "Ontwikkelaars van energiehubs", en: "Energy hub developers" },
      { nl: "Zonnepaneleninstallateurs", en: "Solar panel installers" },
      { nl: "Warmtepompinstallateurs", en: "Heat pump installers" },
      { nl: "Laadpaalinstallateurs", en: "EV charger installers" },
      { nl: "Thuisbatterij-specialisten", en: "Home battery specialists" },
      { nl: "Installatiebedrijven", en: "Installation companies" },
      { nl: "Isolatiebedrijven", en: "Insulation companies" },
      { nl: "Energieadviseurs", en: "Energy advisors" },
      { nl: "Energielabel-adviseurs", en: "Energy label assessors" },
      { nl: "Verduurzamingsadviesbureaus", en: "Building sustainability consultancies" },
      { nl: "Energiemanagementbedrijven", en: "Energy management companies" },
      { nl: "Energiecoöperaties", en: "Energy cooperatives" },
      { nl: "Lokale energie-initiatieven", en: "Local energy initiatives" },
      { nl: "Laadpuntexploitanten", en: "Charge point operators" },
      { nl: "Warmtenetbedrijven", en: "District heating companies" },
      { nl: "Groene energieleveranciers", en: "Green energy suppliers" },
      { nl: "Duurzaamheidsconsultancies", en: "Sustainability consultancies" },
      { nl: "CSRD- en ESG-adviseurs", en: "CSRD and ESG advisors" },
      { nl: "Circulaire bedrijven", en: "Circular businesses" },
      { nl: "Recycling- en refurbishbedrijven", en: "Recycling and refurbishment companies" },
    ],
  },
  /* ---------- Educatie & Scholen ---------- */
  {
    slug: "educatie-scholen",
    title: { nl: "Educatie & Scholen", en: "Education & Schools" },
    short: { nl: "Educatie", en: "Education" },
    icon: "cap",
    quote: { nl: "Every good lesson starts with being understood.", en: "Every good lesson starts with being understood." },
    intro: {
      nl: "Basisscholen, middelbare scholen, mbo en hbo, opleiders, kinderopvang en lesscholen: wij bouwen websites, leerplatformen en campagnes die ouders, leerlingen en cursisten helpen kiezen.",
      en: "Primary and secondary schools, vocational and higher education, training providers, childcare and lesson schools: we build websites, learning platforms and campaigns that help parents, students and learners choose.",
    },
    description: {
      nl: "Kiezen voor een school, opleiding of cursus is een grote beslissing, en die begint bijna altijd online. Ouders vergelijken scholen op de website, scholieren scrollen op hun telefoon door opleidingen en professionals zoeken op 'cursus projectmanagement' of 'online opleiding'. Tegelijk heb je te maken met veel doelgroepen, beperkte budgetten en regels rond privacy en beeldgebruik. M7 helpt onderwijsinstellingen en opleiders om helder te communiceren en gevonden te worden, zonder dat het een reclamefolder wordt.\n\nWe bouwen schoolwebsites die het team zelf bijhoudt, opleidingssites met een duidelijk aanbod en inschrijving, en e-learning platformen en digitale leeromgevingen op maat. Met video, social campagnes rond open dagen en SEO zorgen we dat de juiste leerlingen, studenten en cursisten je vinden. En met een frisse huisstijl voelen website, schoolgids en open dag weer als één geheel.",
      en: "Choosing a school, programme or course is a big decision, and it almost always starts online. Parents compare schools on their websites, teenagers scroll through programmes on their phones and professionals search for 'project management course' or 'online training'. At the same time you deal with many audiences, tight budgets and rules on privacy and the use of images. M7 helps schools and training providers communicate clearly and get found, without turning it into an advertising brochure.\n\nWe build school websites the team updates itself, course sites with a clear offer and enrolment, and custom e-learning platforms and digital learning environments. With video, social campaigns around open days and SEO we make sure the right pupils, students and learners find you. And with a fresh visual identity, website, prospectus and open day feel like one whole again.",
    },
    challenges: [
      {
        title: { nl: "Veel doelgroepen tegelijk", en: "Many audiences at once" },
        text: {
          nl: "Ouders, leerlingen, personeel, nieuwe collega's en partners zoeken allemaal iets anders op je website. Een heldere structuur met een eigen route per doelgroep voorkomt dat iedereen verdwaalt.",
          en: "Parents, pupils, staff, new colleagues and partners are all looking for something different on your website. A clear structure with a separate route per audience stops everyone getting lost.",
        },
      },
      {
        title: { nl: "Werven in een krappe markt", en: "Recruiting in a tight market" },
        text: {
          nl: "In veel regio's is het knokken om elke aanmelding, en om goed personeel. Met campagnes rond open dagen, social video en employer branding val je op bij de juiste mensen.",
          en: "In many regions every enrolment is hard-won, and so is good staff. With campaigns around open days, social video and employer branding you stand out to the right people.",
        },
      },
      {
        title: { nl: "Leren gaat steeds vaker online", en: "Learning moves online" },
        text: {
          nl: "Cursisten willen leren wanneer het hun uitkomt. Een e-learning platform of digitale leeromgeving moet net zo makkelijk werken als de apps die ze dagelijks gebruiken.",
          en: "Learners want to study when it suits them. An e-learning platform or digital learning environment has to be as easy to use as the apps they use every day.",
        },
      },
      {
        title: { nl: "Privacy en toegankelijkheid", en: "Privacy and accessibility" },
        text: {
          nl: "Je werkt met gegevens en foto's van kinderen en jongeren, en je site moet voor iedereen bruikbaar zijn. We bouwen met privacy als uitgangspunt en volgen de toegankelijkheidsrichtlijnen (WCAG).",
          en: "You work with data and photos of children and young people, and your site has to be usable for everyone. We build with privacy as a starting point and follow the accessibility guidelines (WCAG).",
        },
      },
    ],
    services: ["websites-webshops", "web-apps-portals-apps", "branding-rebranding", "content-marketing-online-ads", "seo-aeo-geo", "foto-video-3d-animatie"],
    applications: ["wordpress-website", "webflow-website", "landingspaginas", "saas-platform", "ux-ui-app-design", "huisstijl", "social-media-marketing", "tiktok-ads", "seo", "bedrijfsfilm"],
    faqs: [
      {
        q: { nl: "Kunnen leraren en medewerkers de schoolwebsite zelf bijhouden?", en: "Can teachers and staff update the school website themselves?" },
        a: {
          nl: "Ja. We bouwen in WordPress of Webflow met een overzichtelijk beheer, zodat nieuws, agenda en documenten zonder technische kennis te plaatsen zijn. We leggen het ook even uit, met koffie.",
          en: "Yes. We build in WordPress or Webflow with a clear back end, so news, calendar items and documents can be posted without technical knowledge. We also walk you through it, over coffee.",
        },
      },
      {
        q: { nl: "Bouwen jullie ook e-learning platformen?", en: "Do you also build e-learning platforms?" },
        a: {
          nl: "Ja. Van een leeromgeving met modules, voortgang en certificaten tot een platform waarop je cursussen verkoopt. We kijken eerst of een bestaand systeem volstaat. Zo niet, dan bouwen we maatwerk.",
          en: "Yes. From a learning environment with modules, progress tracking and certificates to a platform where you sell courses. We first check whether an existing system will do. If not, we build it custom.",
        },
      },
      {
        q: { nl: "Hoe gaan jullie om met privacy en foto's van leerlingen?", en: "How do you handle privacy and photos of pupils?" },
        a: {
          nl: "Zorgvuldig. We gebruiken alleen beeld waarvoor toestemming is, bouwen formulieren en platformen volgens de AVG en verzamelen niet meer gegevens dan nodig.",
          en: "Carefully. We only use images for which consent has been given, build forms and platforms in line with the GDPR and collect no more data than necessary.",
        },
      },
      {
        q: { nl: "Helpen jullie met werving voor open dagen?", en: "Do you help with recruitment for open days?" },
        a: {
          nl: "Ja. We maken campagnes, landingspagina's en social video rond open dagen en meeloopdagen, met een aanmeldformulier en automatische herinneringen.",
          en: "Yes. We create campaigns, landing pages and social video around open days and taster days, with a sign-up form and automatic reminders.",
        },
      },
      {
        q: { nl: "Werken jullie ook voor kinderopvang, muziekscholen en rijscholen?", en: "Do you also work for childcare, music schools and driving schools?" },
        a: {
          nl: "Zeker. Voor kleinere lesscholen en opvanglocaties ligt de nadruk vaak op lokaal gevonden worden en makkelijk een proefles of rondleiding boeken.",
          en: "Definitely. For smaller lesson schools and childcare locations the focus is often on getting found locally and making it easy to book a trial lesson or tour.",
        },
      },
    ],
    metaTitle: {
      nl: "Websites & e-learning voor scholen en opleiders | M7",
      en: "Websites & e-learning for schools and training providers | M7",
    },
    metaDescription: {
      nl: "M7 bouwt schoolwebsites, e-learning platformen, campagnes en video voor scholen, mbo en hbo, opleiders, kinderopvang en muziek-, dans- en rijscholen.",
      en: "M7 builds school websites, e-learning platforms, campaigns and video for schools, colleges, training providers, childcare and music, dance and driving schools.",
    },
    segments: [
      {
        name: { nl: "Scholen & schoolbesturen", en: "Schools & school boards" },
        intro: {
          nl: "Voor basisscholen, middelbare scholen, scholen voor speciaal onderwijs en schoolbesturen of onderwijsstichtingen met meerdere scholen onder één dak.",
          en: "For primary schools, secondary schools, special education schools and school boards or education foundations with several schools under one roof.",
        },
        types: [
          { nl: "Basisscholen", en: "Primary schools" },
          { nl: "Middelbare scholen", en: "Secondary schools" },
          { nl: "Scholen voor speciaal onderwijs", en: "Special education schools" },
          { nl: "Schoolbesturen en onderwijsstichtingen", en: "School boards and education foundations" },
        ],
        useCases: [
          {
            title: { nl: "Schoolwebsite die het team zelf bijhoudt", en: "A school website the team updates itself" },
            text: {
              nl: "Nieuws, agenda, vakanties en documenten op één plek, makkelijk te beheren door de administratie of de directie.",
              en: "News, calendar, holidays and documents in one place, easy for the office or the head to manage.",
            },
            service: "websites-webshops",
            application: "wordpress-website",
          },
          {
            title: { nl: "Eén huisstijl voor het hele bestuur", en: "One identity for the whole board" },
            text: {
              nl: "Herkenbaar als stichting, met ruimte voor de naam, de kleur en het eigen karakter van elke school. Met sjablonen voor brieven, presentaties en social media die iedereen kan gebruiken.",
              en: "Recognisable as one foundation, with room for each school's name, colour and character. With templates for letters, presentations and social media that anyone can use.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Een schoolgids die je wél leest", en: "A prospectus people actually read" },
            text: {
              nl: "Een schoolgids met rust, structuur en beeld, als toegankelijke pdf en op papier.",
              en: "A school prospectus with calm, structure and imagery, as an accessible PDF and on paper.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
          {
            title: { nl: "Sfeerfilm voor nieuwe ouders", en: "A film for new parents" },
            text: {
              nl: "Een korte film die laat zien hoe een dag op school voelt. Dat zegt ouders meer dan een missie op de homepage.",
              en: "A short film that shows what a day at school feels like. That tells parents more than a mission statement on the homepage.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
          {
            title: { nl: "Open dag-campagne in de wijk", en: "Open day campaign in the neighbourhood" },
            text: {
              nl: "Lokale advertenties en posts met echte momenten uit de klas, gericht op ouders in de buurt, met één link naar het aanmelden voor een rondleiding of de open dag.",
              en: "Local ads and posts with real classroom moments, aimed at parents nearby, with one link to sign up for a tour or the open day.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Werken-bij voor leerkrachten", en: "Careers page for teachers" },
            text: {
              nl: "Het lerarentekort voel je in bijna elke regio. Een werken-bij pagina met verhalen van collega's, de sfeer in het team en praktische info over begeleiding helpt nieuwe leerkrachten voor jouw school te kiezen.",
              en: "The teacher shortage is felt in almost every region. A careers page with stories from colleagues, the team spirit and practical information about support helps new teachers choose your school.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Vindbaar voor ouders in de buurt", en: "Findable for parents nearby" },
            text: {
              nl: "Ouders die net verhuisd zijn, zoeken op 'basisschool' plus de wijk of plaats. Met een compleet Google Bedrijfsprofiel per school en heldere pagina's kom je bij hen in beeld.",
              en: "Parents who have just moved search for 'primary school' plus the neighbourhood or town. With a complete Google Business Profile per school and clear pages you show up for them.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Kennismaking zelf inplannen", en: "Booking an introduction online" },
            text: {
              nl: "Ouders kiezen zelf een moment voor een rondleiding of kennismakingsgesprek, met een bevestiging en een herinnering. De administratie hoeft geen afspraken meer heen en weer te mailen.",
              en: "Parents choose a time for a tour or introductory meeting themselves, with a confirmation and a reminder. The school office no longer has to email back and forth about appointments.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet er op een goede schoolwebsite staan?", en: "What should a good school website include?" },
            a: {
              nl: "Kijk door de ogen van een ouder die twijfelt tussen drie scholen. Die wil zien hoe het voelt op je school, wat je anders doet, hoe schooltijden en opvang geregeld zijn en hoe hij een rondleiding plant. Huidige ouders zoeken vooral de agenda, de vakanties en het ziekmeldformulier. Geef beide groepen een eigen route. Wij bouwen een [[wordpress-website|schoolwebsite]] die het team zelf bijhoudt, met een agenda en nieuws die niet na drie maanden stilvallen.",
              en: "Look through the eyes of a parent choosing between three schools. They want to see what your school feels like, what you do differently, how school hours and childcare are arranged and how to book a tour. Current parents mainly look for the calendar, the holidays and the sick-note form. Give both groups their own route. We build a [[wordpress-website|school website]] the team updates itself, with a calendar and news that do not grind to a halt after three months.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat een schoolwebsite toegankelijk is?", en: "How do you make a school website accessible?" },
            a: {
              nl: "Door het vanaf het begin mee te nemen in ontwerp en bouw. Denk aan voldoende kleurcontrast, teksten in begrijpelijke taal, knoppen die met het toetsenbord werken en alt-teksten bij foto's. Ook pdf's zoals de schoolgids moeten leesbaar zijn voor een screenreader. Veel ouders lezen je site op een telefoon of in een tweede taal, dus eenvoud helpt iedereen. We werken volgens de WCAG-richtlijnen en leveren een [[ux-ui-webdesign|ontwerp]] waar je later nog op kunt bouwen.",
              en: "By including it in design and build from the start. Think of enough colour contrast, texts in plain language, buttons that work with a keyboard and alt texts on photos. PDFs such as the prospectus also need to be readable by a screen reader. Many parents read your site on a phone or in a second language, so simplicity helps everyone. We work to the WCAG guidelines and deliver a [[ux-ui-webdesign|design]] you can keep building on later.",
            },
          },
          {
            q: { nl: "Hoe pak je een huisstijl aan voor een schoolbestuur met meerdere scholen?", en: "How do you approach a visual identity for a school board with several schools?" },
            a: {
              nl: "Vaak met een familie: één herkenbare basis voor het bestuur, en ruimte voor kleur, naam en beeld per school. Zo blijft elke school zichzelf, terwijl ouders en medewerkers zien dat ze bij dezelfde stichting horen. Dat scheelt ook kosten, want sjablonen voor brieven, presentaties en social media maak je maar één keer. In een [[brandbook]] leggen we vast hoe het werkt, zodat het over een paar jaar nog steeds klopt.",
              en: "Often with a family approach: one recognisable base for the board, with room for colour, name and imagery per school. Each school stays itself, while parents and staff see they belong to the same foundation. It also saves money, because templates for letters, presentations and social media only need to be made once. In a [[brandbook|brand book]] we record how it all works, so it still holds up in a few years.",
            },
          },
          {
            q: { nl: "Hoe trek je meer aanmeldingen voor groep 1 of de brugklas?", en: "How do you attract more enrolments for reception or first year?" },
            a: {
              nl: "Begin op tijd en ga waar ouders zijn. Ouders van peuters oriënteren zich vaak ruim van tevoren, ouders van groep 8 vooral rond de open dagen in de winter. Een korte sfeerfilm, social posts met echte momenten uit de klas en lokale advertenties rond het open huis werken goed. Stuur alles naar één [[landingspaginas|landingspagina]] waar ouders direct een rondleiding plannen. Met de toestemming voor beeldgebruik netjes geregeld, uiteraard.",
              en: "Start early and go where parents are. Parents of toddlers often look around well in advance, parents of children in their final primary year mainly around the winter open days. A short film, social posts with real classroom moments and local ads around the open day work well. Send everything to one [[landingspaginas|landing page]] where parents can book a tour straight away. With consent for using images properly arranged, of course.",
            },
          },
          {
            q: { nl: "Hoe vind je als school nieuwe leerkrachten via je website?", en: "How does a school find new teachers through its website?" },
            a: {
              nl: "Door te laten zien hoe het is om bij jullie te werken, niet alleen welke vacatures er zijn. Een leerkracht wil weten hoe het team is, hoe je nieuwe collega's begeleidt, hoe groot de klassen zijn en wat de school bijzonder maakt. Laat collega's daar zelf over vertellen, in tekst of een korte video. Met [[employer-branding|employer branding]] en een overzichtelijke werken-bij pagina op de site van het bestuur trek je ook zij-instromers en pas afgestudeerden aan.",
              en: "By showing what it is like to work with you, not just which vacancies are open. A teacher wants to know what the team is like, how you support new colleagues, how big the classes are and what makes the school special. Let colleagues talk about that themselves, in text or a short video. With [[employer-branding|employer branding]] and a clear careers page on the board's website you also attract career changers and recent graduates.",
            },
          },
          {
            q: { nl: "Is WordPress of Webflow beter voor een schoolwebsite?", en: "Is WordPress or Webflow better for a school website?" },
            a: {
              nl: "Dat hangt af van wat je nodig hebt. [[wordpress-website|WordPress]] is bij veel medewerkers bekend en heeft veel uitbreidingen, bijvoorbeeld voor formulieren of een agenda, maar vraagt regelmatig onderhoud. [[webflow-website|Webflow]] is strak en snel, vraagt weinig technisch onderhoud en het beheer is ook voor niet-techneuten goed te doen. We kijken samen naar het aantal scholen, wie de site bijhoudt en welke koppelingen nodig zijn, en adviseren dan eerlijk.",
              en: "That depends on what you need. [[wordpress-website|WordPress]] is familiar to many staff and has lots of extensions, for example for forms or a calendar, but needs regular maintenance. [[webflow-website|Webflow]] is clean and fast, needs little technical maintenance and the back end is easy for non-technical people too. We look together at the number of schools, who updates the site and which integrations are needed, and then give honest advice.",
            },
          },
          {
            q: { nl: "Hoe houd je een schoolwebsite actueel zonder extra werk?", en: "How do you keep a school website up to date without extra work?" },
            a: {
              nl: "Maak duidelijke afspraken en beperk het aantal plekken waar informatie staat. Wijs per onderdeel iemand aan, zoals nieuws, agenda en vacatures, en zet vaste gegevens als vakanties en schooltijden op één plek, zodat ze overal automatisch kloppen. Gebruik voor het dagelijkse nieuws aan ouders de ouderapp die je al hebt, en houd de website voor wat nieuwe ouders willen weten. Met [[hosting-onderhoud|hosting en onderhoud]] zorgen wij dat de techniek bijblijft.",
              en: "Make clear agreements and limit the number of places where information lives. Appoint someone per section, such as news, calendar and vacancies, and keep fixed details like holidays and school hours in one place, so they are correct everywhere automatically. Use the parent app you already have for daily news to parents, and keep the website for what new parents want to know. With [[hosting-onderhoud|hosting and maintenance]] we make sure the technology keeps up.",
            },
          },
        ],
      },
      {
        name: { nl: "Mbo & hoger onderwijs", en: "Vocational & higher education" },
        intro: {
          nl: "Voor mbo-instellingen, hogescholen, vakscholen en private academies die studenten werven, opleidingen helder presenteren en in hun regio zichtbaar willen zijn.",
          en: "For vocational colleges, universities of applied sciences, trade schools and private academies that recruit students, present programmes clearly and want to be visible in their region.",
        },
        types: [
          { nl: "Mbo-instellingen", en: "Vocational colleges (MBO)" },
          { nl: "Hogescholen", en: "Universities of applied sciences" },
          { nl: "Vakscholen", en: "Trade schools" },
          { nl: "Private hogescholen en academies", en: "Private colleges and academies" },
        ],
        useCases: [
          {
            title: { nl: "Opleidingspagina's die gevonden worden", en: "Programme pages that get found" },
            text: {
              nl: "Per opleiding een pagina die vertelt wat je leert, wat je ermee kunt en hoe je je aanmeldt, vindbaar in Google en AI-zoekmachines.",
              en: "A page per programme that says what you learn, what you can do with it and how to apply, findable in Google and AI search.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Campagnes op TikTok en Instagram", en: "Campaigns on TikTok and Instagram" },
            text: {
              nl: "Scholieren bereik je waar ze zijn, met korte video's van echte studenten en docenten.",
              en: "Reach school leavers where they are, with short videos of real students and teachers.",
            },
            service: "content-marketing-online-ads",
            application: "tiktok-ads",
          },
          {
            title: { nl: "Studiekeuzetest", en: "Study choice quiz" },
            text: {
              nl: "Een paar vragen over interesses en talenten, en de scholier ziet welke opleidingen passen, met een link naar de open dag.",
              en: "A few questions about interests and talents, and the student sees which programmes fit, with a link to the open day.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Aanmeldflow met herinneringen", en: "Sign-up flow with reminders" },
            text: {
              nl: "Na aanmelding voor de open dag automatisch een bevestiging, een herinnering en een bedankmail met de volgende stap.",
              en: "After signing up for the open day, an automatic confirmation, a reminder and a thank-you email with the next step.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Een route per doelgroep", en: "A route per audience" },
            text: {
              nl: "Scholieren, ouders, werkenden die zich willen omscholen en bedrijven met stageplekken zoeken elk iets anders. Een website met een eigen route per groep brengt iedereen snel bij de juiste opleiding of informatie.",
              en: "School leavers, parents, working people looking to retrain and companies offering placements all look for something different. A website with its own route per group gets everyone quickly to the right programme or information.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Video uit het praktijklokaal", en: "Video from the practical classroom" },
            text: {
              nl: "Laat zien waar studenten echt mee werken: de werkplaats, het skillslab of de keuken. Korte video's uit de praktijk maken een opleiding tastbaar, op de opleidingspagina en op social media.",
              en: "Show what students really work with: the workshop, the skills lab or the kitchen. Short videos from practice make a programme tangible, on the programme page and on social media.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Positionering voor een academie", en: "Positioning for an academy" },
            text: {
              nl: "Een private academie of nieuwe opleiding moet zich onderscheiden van de grote instellingen. Een scherpe positionering en huisstijl laten zien voor wie je bent en waarom iemand voor jou kiest.",
              en: "A private academy or new programme has to stand out from the large institutions. Sharp positioning and a clear identity show who you are for and why someone should choose you.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "AI-assistent voor studievragen", en: "AI assistant for study questions" },
            text: {
              nl: "Vragen over toelatingseisen, aanmelddeadlines of de open dag beantwoord op basis van je eigen informatie, ook 's avonds. Persoonlijke vragen gaan door naar de studievoorlichter.",
              en: "Questions about entry requirements, application deadlines or the open day answered from your own information, in the evening too. Personal questions go through to the student adviser.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe bereik je scholieren die een opleiding zoeken?", en: "How do you reach school leavers looking for a programme?" },
            a: {
              nl: "Niet met een folder, wel via hun eigen kanalen. Scholieren oriënteren zich op TikTok, Instagram en YouTube, en vragen het steeds vaker aan ChatGPT. Korte video's waarin echte studenten vertellen wat ze doen, werken beter dan een gepolijste reclame. Zet campagnes op rond open dagen en de aanmeldperiode, en stuur naar een pagina per opleiding. Met [[tiktok-ads|TikTok Ads]] en [[social-video|social video]] maken we content die scholieren niet meteen wegswipen.",
              en: "Not with a brochure, but through their own channels. School leavers look around on TikTok, Instagram and YouTube, and increasingly ask ChatGPT. Short videos in which real students talk about what they do work better than polished advertising. Run campaigns around open days and the application period, and link to a page per programme. With [[tiktok-ads|TikTok Ads]] and [[social-video|social video]] we create content students do not swipe away straight away.",
            },
          },
          {
            q: { nl: "Hoe maak je opleidingspagina's die goed scoren in Google?", en: "How do you create programme pages that rank well in Google?" },
            a: {
              nl: "Schrijf vanuit de vragen van de scholier en zijn ouders: wat leer je, hoe ziet een week eruit, welk werk kun je ermee en wat zijn de toelatingseisen? Gebruik de woorden die zij gebruiken, zoals 'opleiding verpleegkunde mbo', in plaats van een interne opleidingsnaam. Zorg dat elke pagina technisch klopt, met gestructureerde gegevens over de opleiding. Met [[seo-content|SEO-content]] en [[structured-data|structured data]] word je gevonden in Google en in de antwoorden van AI-assistenten.",
              en: "Write from the questions of the student and their parents: what do you learn, what does a week look like, what jobs can it lead to and what are the entry requirements? Use the words they use, such as 'vocational nursing course', instead of an internal programme name. Make sure each page is technically sound, with structured data about the programme. With [[seo-content|SEO content]] and [[structured-data|structured data]] you get found in Google and in the answers of AI assistants.",
            },
          },
          {
            q: { nl: "Kan een studiekeuzetest helpen bij werving?", en: "Can a study choice quiz help with recruitment?" },
            a: {
              nl: "Ja, als hij eerlijk is. Een [[keuzehulp-quiz|studiekeuzetest]] met vragen over interesses, sterke punten en hoe iemand graag leert, helpt twijfelaars op weg en laat de opleidingen zien die echt passen. De uitkomst linkt direct naar de opleidingspagina en de open dag. Scholieren delen zo'n test ook met vrienden, wat extra bereik oplevert. En jij leert welke opleidingen leven en met welke vragen scholieren zitten.",
              en: "Yes, if it is honest. A [[keuzehulp-quiz|study choice quiz]] with questions about interests, strengths and how someone likes to learn helps people who are unsure and shows the programmes that genuinely fit. The result links straight to the programme page and the open day. Students also share a quiz like that with friends, which adds reach. And you learn which programmes are popular and what questions students have.",
            },
          },
          {
            q: { nl: "Hoe houd je aanmelders vast tussen open dag en start?", en: "How do you keep applicants engaged between open day and the start?" },
            a: {
              nl: "Met contact op de juiste momenten. Na de open dag een bedankmail met de volgende stap, voor de intake een herinnering met praktische info, en in de zomer een paar berichten die laten voelen dat ze welkom zijn. Zo verklein je de kans dat iemand op het laatste moment afhaakt. Die flows zetten we op met [[e-mailmarketing]] en koppelen we waar mogelijk aan je aanmeldsysteem. Persoonlijk, zonder dat iemand alles met de hand hoeft te sturen.",
              en: "With contact at the right moments. After the open day a thank-you email with the next step, before the intake a reminder with practical info, and in summer a few messages that make them feel welcome. That reduces the chance of someone dropping out at the last minute. We set up those flows with [[e-mailmarketing|email marketing]] and, where possible, connect them to your enrolment system. Personal, without anyone having to send it all by hand.",
            },
          },
          {
            q: { nl: "Hoe bereik je werkenden die zich willen omscholen of bijscholen?", en: "How do you reach working people who want to retrain or upskill?" },
            a: {
              nl: "Anders dan scholieren. Werkenden zoeken gericht, vaak 's avonds, op termen als 'deeltijdopleiding' of 'omscholen naar de zorg', en willen snel weten hoeveel tijd het kost, wanneer de lessen zijn en of het te combineren is met werk. Geef deeltijd en korte trajecten eigen pagina's met die antwoorden. Met [[google-ads|Google Ads]] en [[seo-content|SEO-content]] vang je die zoekvragen op, met [[linkedin-ads|LinkedIn Ads]] bereik je professionals op functie en regio.",
              en: "Differently from school leavers. Working people search in a targeted way, often in the evening, for terms like 'part-time course' or 'retrain for healthcare', and want to know quickly how much time it takes, when classes are and whether it can be combined with work. Give part-time and short programmes their own pages with those answers. With [[google-ads|Google Ads]] and [[seo-content|SEO content]] you catch those searches, with [[linkedin-ads|LinkedIn Ads]] you reach professionals by job title and region.",
            },
          },
          {
            q: { nl: "Kan een AI-chatbot vragen van aankomende studenten beantwoorden?", en: "Can an AI chatbot answer questions from prospective students?" },
            a: {
              nl: "Ja, voor de vragen die steeds terugkomen. Een [[ai-chatbots|AI-chatbot]] die antwoordt op basis van je eigen opleidingsinformatie, helpt scholieren en ouders op momenten dat de voorlichting dicht is. Baken goed af waar hij wel en niet over gaat, laat hem bij twijfel doorverwijzen en vraag geen persoonsgegevens die je niet nodig hebt. Controleer de antwoorden regelmatig, zeker rond aanmelddeadlines. Zo houden je voorlichters tijd voor de gesprekken die ertoe doen.",
              en: "Yes, for the questions that keep coming back. An [[ai-chatbots|AI chatbot]] that answers from your own programme information helps students and parents when the information desk is closed. Scope clearly what it does and does not cover, have it refer on when in doubt and do not ask for personal data you do not need. Check the answers regularly, especially around application deadlines. That way your advisers keep time for the conversations that matter.",
            },
          },
          {
            q: { nl: "Hoe valt een private academie op naast grote hogescholen?", en: "How does a private academy stand out next to large universities?" },
            a: {
              nl: "Door specifiek te zijn over wat je anders doet. Kleine groepen, docenten uit de praktijk, een flexibel rooster of een opleiding die nergens anders zo bestaat: zeg het concreet en laat het zien. Ervaringen van oud-studenten en beelden van echte lessen overtuigen meer dan algemene beloftes. Met een heldere [[merkstrategie]] en [[seo-content|SEO-content]] per opleiding word je gevonden door precies de mensen die iets anders zoeken dan het standaardaanbod.",
              en: "By being specific about what you do differently. Small groups, lecturers from the field, a flexible timetable or a programme that does not exist in this form anywhere else: say it concretely and show it. Experiences from alumni and images of real lessons convince more than general promises. With a clear [[merkstrategie|brand strategy]] and [[seo-content|SEO content]] per programme you get found by exactly the people looking for something other than the standard offer.",
            },
          },
        ],
      },
      {
        name: { nl: "Opleiders & e-learning", en: "Training & e-learning" },
        intro: {
          nl: "Voor trainingsinstituten, bedrijfsopleiders, e-learningaanbieders, taalscholen en sportbonden die trainers en kaderleden opleiden, online of in een mix van klas en scherm.",
          en: "For training institutes, corporate trainers, e-learning providers, language schools and sports federations that train coaches and officials, online or in a mix of classroom and screen.",
        },
        types: [
          { nl: "Trainingsinstituten", en: "Training institutes" },
          { nl: "E-learningaanbieders", en: "E-learning providers" },
          { nl: "Bedrijfsopleiders", en: "Corporate training providers" },
          { nl: "Taalscholen", en: "Language schools" },
          { nl: "Sportbonden (opleidingen)", en: "Sports federations (education)" },
        ],
        useCases: [
          {
            title: { nl: "E-learning platform op maat", en: "Custom e-learning platform" },
            text: {
              nl: "Modules, voortgang, toetsen en certificaten in één platform, in je eigen huisstijl en met een betaalmodule als je cursussen verkoopt.",
              en: "Modules, progress, tests and certificates in one platform, in your own branding and with payments if you sell courses.",
            },
            service: "web-apps-portals-apps",
            application: "saas-platform",
          },
          {
            title: { nl: "Digitale leeromgeving voor een sportbond", en: "Digital learning environment for a sports federation" },
            text: {
              nl: "Trainers en scheidsrechters volgen hun opleiding online, met video, opdrachten en een overzicht van hun licenties en bijscholingen.",
              en: "Coaches and referees follow their training online, with video, assignments and an overview of their licences and refresher courses.",
            },
            service: "web-apps-portals-apps",
            application: "ledenportaal-loyaliteit",
          },
          {
            title: { nl: "Cursusaanbod met inschrijving en betaling", en: "Course listings with enrolment and payment" },
            text: {
              nl: "Een overzicht van data, locaties en beschikbare plekken, met direct inschrijven en betalen via iDEAL.",
              en: "An overview of dates, locations and available places, with direct enrolment and payment.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Incompany-leads opvolgen", en: "Following up in-company leads" },
            text: {
              nl: "Een HR-manager die een brochure downloadt, krijgt nuttige mails tot hij een incompany-traject wil bespreken.",
              en: "An HR manager who downloads a brochure receives useful emails until they want to discuss an in-company programme.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "Lesvideo's en animaties", en: "Lesson videos and animations" },
            text: {
              nl: "Korte uitlegvideo's en animaties die een lastig onderwerp in een paar minuten helder maken. Ze vormen de basis van je online modules en werken ook als promotie voor de cursus.",
              en: "Short explainer videos and animations that make a difficult topic clear in a few minutes. They form the basis of your online modules and also work as promotion for the course.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "Vindbaar per cursus", en: "Findable per course" },
            text: {
              nl: "Een pagina per cursus met inhoud, duur, erkenning en startdata, technisch goed opgebouwd. Zo word je gevonden op 'cursus' plus je vakgebied of plaats, in Google en in AI-antwoorden.",
              en: "A page per course with content, duration, accreditation and start dates, technically well built. That way you get found for 'course' plus your field or town, in Google and in AI answers.",
            },
            service: "seo-aeo-geo",
            application: "seo",
          },
          {
            title: { nl: "Cursusmateriaal sneller met AI", en: "Course material faster with AI" },
            text: {
              nl: "AI helpt bij een eerste opzet van toetsvragen, samenvattingen, ondertitels of vertalingen van een module. Een trainer controleert en verbetert, zodat de kwaliteit blijft kloppen.",
              en: "AI helps with a first draft of test questions, summaries, subtitles or translations of a module. A trainer checks and improves it, so the quality stays right.",
            },
            service: "ai-consultancy",
            application: "ai-content",
          },
          {
            title: { nl: "LinkedIn richting HR en L&D", en: "LinkedIn aimed at HR and L&D" },
            text: {
              nl: "Bereik HR-managers en L&D-adviseurs met praktische content over je trainingen en incompany-trajecten, gericht op functie, branche en regio. Met een download die leidt tot een gesprek.",
              en: "Reach HR managers and L&D advisers with practical content about your training and in-company programmes, targeted by job title, industry and region. With a download that leads to a conversation.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
        ],
        faqs: [
          {
            q: { nl: "Moet ik een e-learning platform laten bouwen of een bestaand systeem gebruiken?", en: "Should I have an e-learning platform built or use an existing system?" },
            a: {
              nl: "Dat hangt af van wat je wilt. Voor een paar cursussen met video en een toets is een bestaand leerplatform vaak prima, en sneller live. Wil je cursussen onder je eigen merk verkopen, met abonnementen, koppelingen met je CRM of een leerroute die echt anders werkt, dan wordt maatwerk interessant. We zetten de opties eerlijk naast elkaar. Kiezen we voor bouwen, dan begint het met een [[mvp-ontwikkeling|MVP]] waarmee je snel van echte cursisten leert.",
              en: "That depends on what you want. For a few courses with video and a test, an existing learning platform is often fine, and quicker to launch. If you want to sell courses under your own brand, with subscriptions, links to your CRM or a learning path that genuinely works differently, custom development becomes interesting. We compare the options honestly. If we decide to build, we start with an [[mvp-ontwikkeling|MVP]] so you learn from real learners quickly.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat cursisten een online opleiding ook afmaken?", en: "How do you make sure learners actually finish an online course?" },
            a: {
              nl: "Met korte lessen, duidelijke voortgang en af en toe een duwtje. Niemand kijkt graag een uur naar een webinar-opname. Werk met blokken van een paar minuten, een voortgangsbalk en een certificaat aan het eind. Herinneringen per mail of pushbericht als iemand een week niets heeft gedaan, helpen ook. In de [[ux-ui-app-design|UX/UI]] van het platform zit vaak het verschil tussen een cursus die wordt afgemaakt en een login die wordt vergeten.",
              en: "With short lessons, clear progress and the occasional nudge. Nobody enjoys watching an hour-long webinar recording. Work with blocks of a few minutes, a progress bar and a certificate at the end. Reminders by email or push notification when someone has done nothing for a week also help. The [[ux-ui-app-design|UX/UI]] of the platform is often the difference between a course that gets finished and a login that gets forgotten.",
            },
          },
          {
            q: { nl: "Kan een sportbond trainers en scheidsrechters online opleiden?", en: "Can a sports federation train coaches and referees online?" },
            a: {
              nl: "Ja, en dat werkt goed omdat veel kaderleden het naast hun werk doen. In een digitale leeromgeving volgen ze de theorie met video en opdrachten, en houden ze bij welke praktijkonderdelen en bijscholingen ze hebben gedaan. De bond ziet per lid de voortgang en welke licenties bijna verlopen. We bouwen zo'n omgeving als [[ledenportaal-loyaliteit|ledenportaal]] en koppelen hem waar mogelijk aan de ledenadministratie. Zo hoeft een trainer niet met drie logins te jongleren.",
              en: "Yes, and it works well because many volunteers do it alongside their jobs. In a digital learning environment they follow the theory with video and assignments, and keep track of the practical parts and refresher courses they have done. The federation sees each member's progress and which licences are about to expire. We build that kind of environment as a [[ledenportaal-loyaliteit|member portal]] and connect it to the membership database where possible. That way a coach does not have to juggle three logins.",
            },
          },
          {
            q: { nl: "Hoe word je als opleider gevonden op 'cursus' plus je vakgebied?", en: "How do you get found as a training provider for 'course' plus your field?" },
            a: {
              nl: "Met een pagina per cursus die meer is dan een datum en een prijs. Zoekers willen weten wat ze leren, voor wie het is, hoe lang het duurt, of het erkend is en wat eerdere deelnemers ervan vonden. Schrijf dat uit en zorg dat de pagina technisch goed in elkaar zit. Met [[seo]] word je gevonden op zoekopdrachten als 'cursus leidinggeven' of 'opleiding HR online'. [[google-ads|Google Ads]] helpt om in drukke periodes, zoals rond september en januari, extra zichtbaar te zijn.",
              en: "With a page per course that is more than a date and a price. Searchers want to know what they will learn, who it is for, how long it takes, whether it is accredited and what previous participants thought. Write that out and make sure the page is technically sound. With [[seo|SEO]] you get found for searches like 'leadership course' or 'online HR training'. [[google-ads|Google Ads]] helps you stay extra visible in busy periods, such as around September and January.",
            },
          },
          {
            q: { nl: "Hoe maak je van een klassikale training een goede online cursus?", en: "How do you turn a classroom training into a good online course?" },
            a: {
              nl: "Niet door de training op te nemen en online te zetten. Knip de stof op in korte blokken, wissel uitleg af met opdrachten en een korte toets, en bewaar het oefenen voor een live sessie of praktijkdag. Een [[motion-design|animatie]] maakt een lastig onderwerp vaak sneller duidelijk dan een uur praten. Test de eerste module met een paar cursisten en verbeter daarna. In een goed ontworpen [[ux-ui-app-design|leeromgeving]] weet een cursist altijd waar hij is en wat de volgende stap is.",
              en: "Not by recording the training and putting it online. Cut the material into short blocks, alternate explanation with assignments and a short test, and save the practising for a live session or practical day. An [[motion-design|animation]] often makes a difficult topic clear faster than an hour of talking. Test the first module with a few learners and improve it afterwards. In a well-designed [[ux-ui-app-design|learning environment]] a learner always knows where they are and what the next step is.",
            },
          },
          {
            q: { nl: "Hoe verkoop je incompany-trainingen aan bedrijven?", en: "How do you sell in-company training to businesses?" },
            a: {
              nl: "Met vertrouwen en maatwerk. Een HR-manager wil weten hoe je een traject afstemt op de organisatie, wie de trainers zijn, hoe het praktisch werkt en hoe je meet of het iets heeft opgeleverd. Zet dat op een duidelijke pagina, met een brochure om te downloaden en een verzorgde [[presentaties-pitchdecks|presentatie]] voor het gesprek. Met [[linkedin-ads|LinkedIn Ads]] bereik je de juiste functies, met [[lead-nurturing]] blijf je in beeld tot het budget er is.",
              en: "With trust and a tailored approach. An HR manager wants to know how you adapt a programme to the organisation, who the trainers are, how it works in practice and how you measure whether it delivered anything. Put that on a clear page, with a brochure to download and a polished [[presentaties-pitchdecks|presentation]] for the meeting. With [[linkedin-ads|LinkedIn Ads]] you reach the right job titles, with [[lead-nurturing|lead nurturing]] you stay in view until the budget is there.",
            },
          },
          {
            q: { nl: "Kan AI helpen bij het maken van cursusmateriaal?", en: "Can AI help with creating course material?" },
            a: {
              nl: "Ja, als hulpmiddel. AI kan een eerste versie maken van toetsvragen, samenvattingen, oefencasussen, ondertitels of een vertaling, waarna een trainer met kennis van zaken het controleert en aanscherpt. Let op auteursrecht en zet geen persoonsgegevens van cursisten in tools die je niet vertrouwt. Begin met één module en kijk hoeveel tijd het echt scheelt. In een [[ai-workshops|AI-workshop]] leert je team hoe ze [[ai-content|AI voor content]] verantwoord inzetten.",
              en: "Yes, as a tool. AI can create a first version of test questions, summaries, practice cases, subtitles or a translation, after which a trainer who knows the subject checks and sharpens it. Watch out for copyright and do not put learners' personal data into tools you do not trust. Start with one module and see how much time it really saves. In an [[ai-workshops|AI workshop]] your team learns how to use [[ai-content|AI for content]] responsibly.",
            },
          },
        ],
      },
      {
        name: { nl: "Kinderopvang", en: "Childcare" },
        intro: {
          nl: "Voor kinderdagverblijven, buitenschoolse opvang, peuteropvang en gastouderbureaus die ouders willen laten zien hoe hun kind de dag doorbrengt, en die pedagogisch medewerkers zoeken.",
          en: "For day nurseries, out-of-school care, preschool playgroups and childminding agencies that want to show parents how their child spends the day, and that are looking for childcare staff.",
        },
        types: [
          { nl: "Kinderdagverblijven", en: "Day nurseries" },
          { nl: "Buitenschoolse opvang (BSO)", en: "Out-of-school care" },
          { nl: "Peuteropvang", en: "Preschool playgroups" },
          { nl: "Gastouderbureaus", en: "Childminding agencies" },
        ],
        useCases: [
          {
            title: { nl: "Rondleiding online plannen", en: "Booking a tour online" },
            text: {
              nl: "Ouders kiezen zelf een moment voor een rondleiding, met een bevestiging en een herinnering.",
              en: "Parents choose a time for a tour themselves, with a confirmation and a reminder.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Vindbaar per locatie", en: "Findable per location" },
            text: {
              nl: "Een pagina en een Google Bedrijfsprofiel per locatie, voor zoekopdrachten als 'kinderopvang' plus de wijk of plaats.",
              en: "A page and a Google Business Profile per location, for searches like 'childcare' plus the neighbourhood or town.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Werken-bij voor pedagogisch medewerkers", en: "Careers site for childcare staff" },
            text: {
              nl: "Laat zien hoe het is om bij jullie te werken, met echte collega's en een vacaturepagina waarop solliciteren makkelijk gaat.",
              en: "Show what it is like to work with you, with real colleagues and a vacancy page that makes applying easy.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Social content met toestemming", en: "Social content with consent" },
            text: {
              nl: "Sfeervolle posts over spelen, buiten zijn en de seizoenen, zonder herkenbare kinderen of alleen met toestemming van de ouders. Zo blijft je feed warm en veilig.",
              en: "Atmospheric posts about play, outdoor time and the seasons, without recognisable children or only with parents' consent. That keeps your feed warm and safe.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Website met info per locatie", en: "Website with info per location" },
            text: {
              nl: "Per locatie de groepen, openingstijden, foto's van de ruimtes en of er plek is, met een heldere uitleg over kinderopvangtoeslag. Ouders vinden in één keer wat ze zoeken.",
              en: "Per location the groups, opening hours, photos of the rooms and whether there is a place, with a clear explanation of the childcare allowance. Parents find what they are looking for in one go.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Rekenhulp voor de netto kosten", en: "Calculator for the net costs" },
            text: {
              nl: "Ouders vullen opvangdagen en een paar gegevens in en zien een indicatie van wat opvang hen per maand kost na toeslag. Dat neemt een grote twijfel weg, nog voordat ze bellen.",
              en: "Parents enter childcare days and a few details and see an estimate of what childcare costs them per month after the allowance. That removes a big doubt before they even call.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Van inschrijving tot plaatsing", en: "From registration to placement" },
            text: {
              nl: "Een inschrijving via de website komt direct in je planning, en ouders krijgen automatisch een bevestiging en updates over de plaatsing. Minder lijstjes, minder gemiste aanmeldingen.",
              en: "A registration through the website goes straight into your planning, and parents automatically receive a confirmation and updates about the placement. Fewer lists, fewer missed registrations.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Sfeerfilm van een dag op de groep", en: "A film of a day in the group" },
            text: {
              nl: "De ruimtes, de pedagogisch medewerkers, het dagritme en de buitenspeelplaats in een korte film. Gefilmd met oog voor privacy, zodat je hem overal kunt gebruiken.",
              en: "The rooms, the childcare staff, the daily rhythm and the outdoor play area in a short film. Filmed with privacy in mind, so you can use it everywhere.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe kiezen ouders een kinderopvang, en wat betekent dat voor je website?", en: "How do parents choose childcare, and what does that mean for your website?" },
            a: {
              nl: "Ouders kiezen met hun buikgevoel, onderbouwd met praktische zaken. Ze willen zien hoe een groep eruitziet, wie de medewerkers zijn, wat de openingstijden en kosten zijn en of er plek is. Zet die info overzichtelijk per locatie op de site, met sfeerfoto's en een duidelijke knop voor een rondleiding. Met een [[boekingswidget]] kiezen ouders zelf een moment. En vergeet de uitleg over kinderopvangtoeslag niet, want daar vraagt bijna iedereen naar.",
              en: "Parents choose with their gut, backed by practical matters. They want to see what a group looks like, who the staff are, what the opening hours and costs are and whether there is a place. Put that information clearly on the site per location, with atmospheric photos and an obvious button to book a tour. With a [[boekingswidget|booking widget]] parents choose a time themselves. And do not forget to explain the childcare allowance, because nearly everyone asks about it.",
            },
          },
          {
            q: { nl: "Hoe vind je pedagogisch medewerkers via je website en social media?", en: "How do you find childcare staff through your website and social media?" },
            a: {
              nl: "Door te laten zien hoe het werk echt is. Een vacaturetekst vol 'enthousiaste teamplayer' zegt weinig. Korte video's of foto's van collega's, een eerlijke beschrijving van een werkdag, roosters en doorgroeimogelijkheden zeggen veel meer. Bouw een werken-bij pagina waar solliciteren in een paar minuten kan, zonder verplicht cv als dat niet nodig is. Met [[employer-branding|employer branding]] en gerichte [[meta-ads|Meta Ads]] rond je locaties bereik je ook mensen die niet actief zoeken.",
              en: "By showing what the job is really like. A vacancy text full of 'enthusiastic team player' says little. Short videos or photos of colleagues, an honest description of a working day, schedules and growth opportunities say far more. Build a careers page where applying takes a few minutes, without a mandatory CV if you do not need one. With [[employer-branding|employer branding]] and targeted [[meta-ads|Meta Ads]] around your locations you also reach people who are not actively looking.",
            },
          },
          {
            q: { nl: "Mag je foto's van kinderen op je website en social media zetten?", en: "Can you put photos of children on your website and social media?" },
            a: {
              nl: "Alleen met toestemming van de ouders, en die vraag je vooraf en per doel. Veel opvangorganisaties werken daarom met beeld waarop kinderen niet herkenbaar zijn: handjes in de verf, een rugje bij de zandbak, de ruimte zelf. Dat kan heel sfeervol zijn. Voor campagnes kun je een fotoshoot doen met kinderen van wie de ouders uitdrukkelijk meedoen. We denken mee over een [[contentstrategie]] die werkt zonder dat de privacy in het gedrang komt.",
              en: "Only with the parents' consent, which you ask for in advance and per purpose. That is why many childcare organisations use images in which children cannot be recognised: little hands in paint, a back by the sandpit, the room itself. That can be very atmospheric. For campaigns you can do a photo shoot with children whose parents explicitly agree to take part. We help you with a [[contentstrategie|content strategy]] that works without compromising privacy.",
            },
          },
          {
            q: { nl: "Wat kost een website voor een kinderopvangorganisatie?", en: "What does a website for a childcare organisation cost?" },
            a: {
              nl: "Dat hangt vooral af van het aantal locaties, de functies en de koppelingen. Een compacte site voor één locatie is iets anders dan een site met tien locaties, een wachtlijst en een koppeling met je planningssysteem. Na een korte kennismaking krijg je een heldere offerte, zodat je vooraf weet waar je aan toe bent. Een compacte [[webflow-website|website]] staat gemiddeld in 4 tot 6 weken online, een uitgebreidere site met koppelingen duurt langer.",
              en: "That mainly depends on the number of locations, the features and the integrations. A compact site for one location is different from a site with ten locations, a waiting list and a link to your planning system. After a short introduction you get a clear quote, so you know where you stand in advance. A compact [[webflow-website|website]] is typically online in 4 to 6 weeks, a more extensive site with integrations takes longer.",
            },
          },
          {
            q: { nl: "Hoe laat je ouders zien hoe het eraan toegaat op de groep?", en: "How do you show parents what a day in the group is like?" },
            a: {
              nl: "Met beeld en een paar eerlijke details. Een korte [[bedrijfsfilm|sfeerfilm]] van de ruimtes en het dagritme, foto's van de buitenspeelplaats en een voorstelrondje van het team zeggen meer dan een pedagogisch beleidsplan. Vertel in gewone taal hoe een dag verloopt, hoe het wennen gaat en hoe je ouders op de hoogte houdt. Het beleidsplan zet je er gewoon bij, voor wie het wil lezen.",
              en: "With visuals and a few honest details. A short [[bedrijfsfilm|film]] of the rooms and the daily rhythm, photos of the outdoor play area and an introduction to the team say more than a pedagogical policy plan. Explain in plain language how a day goes, how settling in works and how you keep parents informed. The policy plan simply goes alongside, for those who want to read it.",
            },
          },
          {
            q: { nl: "Hoe ga je op je website om met een wachtlijst?", en: "How do you deal with a waiting list on your website?" },
            a: {
              nl: "Eerlijk en duidelijk. Laat per locatie en groep zien of er plek is, of hoe de wachtlijst ervoor staat, zodat ouders niet voor niets bellen. Houd inschrijven toch makkelijk en vertel wat er daarna gebeurt. Met een [[workflow-automatisering|automatische flow]] krijgen ouders een bevestiging en een bericht zodra er iets verandert. Wijs ook op andere locaties in de buurt, als je die hebt.",
              en: "Honestly and clearly. Show per location and group whether there is a place, or how the waiting list looks, so parents do not call for nothing. Keep registering easy anyway and explain what happens next. With an [[workflow-automatisering|automated flow]] parents receive a confirmation and a message as soon as something changes. Point to other locations nearby too, if you have them.",
            },
          },
        ],
      },
      {
        name: { nl: "Muziek, dans & rijles", en: "Music, dance & driving" },
        intro: {
          nl: "Voor muziekscholen, dansscholen, rijscholen, bijlesinstituten en zwemscholen die vooral lokaal werken en willen dat nieuwe leerlingen makkelijk een proefles boeken.",
          en: "For music schools, dance schools, driving schools, tutoring centres and swimming schools that mainly work locally and want new pupils to book a trial lesson easily.",
        },
        types: [
          { nl: "Muziekscholen", en: "Music schools" },
          { nl: "Dansscholen", en: "Dance schools" },
          { nl: "Rijscholen", en: "Driving schools" },
          { nl: "Bijlesinstituten", en: "Tutoring centres" },
          { nl: "Zwemscholen", en: "Swimming schools" },
        ],
        useCases: [
          {
            title: { nl: "Proefles online boeken", en: "Booking a trial lesson online" },
            text: {
              nl: "Leerlingen kiezen zelf een tijd voor een proefles of intake, zonder heen-en-weer appen.",
              en: "Pupils choose a time for a trial lesson or intake themselves, without back-and-forth messaging.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Lespakketten vergelijken", en: "Comparing lesson packages" },
            text: {
              nl: "Een leerling kiest een pakket, ziet wat erin zit en wat het kost, en vraagt het direct aan.",
              en: "A pupil chooses a package, sees what is included and what it costs, and requests it straight away.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Lokaal gevonden worden", en: "Getting found locally" },
            text: {
              nl: "'Rijschool Oss' of 'gitaarles Den Bosch': met lokale SEO en reviews kom je in beeld als iemand in de buurt zoekt.",
              en: "'Driving school near me' or 'guitar lessons' plus a town: with local SEO and reviews you show up when someone nearby is searching.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Korte video van een les", en: "Short video of a lesson" },
            text: {
              nl: "Een dansles, een eerste rijles of een optreden in vijftien seconden: zo laat je zien hoe het voelt.",
              en: "A dance class, a first driving lesson or a performance in fifteen seconds: that is how you show what it feels like.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Website met lesrooster en tarieven", en: "Website with timetable and prices" },
            text: {
              nl: "Lessen, niveaus, leeftijden en tarieven overzichtelijk bij elkaar, met een rooster dat je zelf bijwerkt en een knop voor een proefles op elke pagina.",
              en: "Classes, levels, ages and prices clearly together, with a timetable you update yourself and a trial lesson button on every page.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Logo en huisstijl met karakter", en: "A logo and identity with character" },
            text: {
              nl: "Een dansschool voelt anders dan een rijschool. Een eigen logo en huisstijl die klopt op de lesauto, het bord bij de deur, het rooster en Instagram, maakt je herkenbaar in de buurt.",
              en: "A dance school feels different from a driving school. Your own logo and identity, consistent on the lesson car, the sign by the door, the timetable and Instagram, makes you recognisable locally.",
            },
            service: "branding-rebranding",
            application: "logo-ontwerp",
          },
          {
            title: { nl: "Campagne bij de start van het seizoen", en: "Campaign at the start of the season" },
            text: {
              nl: "Lokale advertenties in augustus en januari, als ouders en volwassenen een nieuwe hobby of cursus zoeken. Gericht op de buurt rond je school, met een proefles als eerste stap.",
              en: "Local ads in August and January, when parents and adults look for a new hobby or course. Aimed at the area around your school, with a trial lesson as the first step.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Herinneringen en lesupdates", en: "Reminders and lesson updates" },
            text: {
              nl: "Bevestigingen, een herinnering voor de proefles en een bericht als een les uitvalt gaan automatisch. Na de proefles volgt een vriendelijke mail met de volgende stap.",
              en: "Confirmations, a reminder for the trial lesson and a message when a class is cancelled go out automatically. After the trial lesson a friendly email follows with the next step.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe krijgt een rijschool meer leerlingen via internet?", en: "How does a driving school get more pupils online?" },
            a: {
              nl: "Door te laten zien wat een leerling wil weten: wat kost het in totaal, hoe snel kan ik beginnen en hoe gaat het examen? Zet pakketten overzichtelijk op je site, met een eerlijke uitleg over hoeveel lessen de meeste leerlingen nodig hebben. Reviews van geslaagde leerlingen doen veel. En omdat iedereen zoekt op 'rijschool' plus zijn woonplaats, is [[lokale-seo|lokale SEO]] onmisbaar. Een [[boekingswidget|knop voor een proefles]] maakt de eerste stap klein.",
              en: "By showing what a pupil wants to know: what does it cost in total, how soon can I start and how does the test work? Put packages clearly on your site, with an honest explanation of how many lessons most pupils need. Reviews from pupils who passed do a lot. And because everyone searches for 'driving school' plus their town, [[lokale-seo|local SEO]] is essential. A [[boekingswidget|trial lesson button]] keeps the first step small.",
            },
          },
          {
            q: { nl: "Hoe vul je de lessen van een muziek- of dansschool?", en: "How do you fill the classes of a music or dance school?" },
            a: {
              nl: "Met een proefles die makkelijk te boeken is en content die laat zien hoe leuk het is. Ouders en volwassen leerlingen willen weten welke lessen er zijn, op welke dagen, voor welke leeftijd en wat het kost. Een overzichtelijk lesrooster met een knop voor een proefles doet meer dan een lange tekst. Korte video's van lessen en optredens werken goed op Instagram en TikTok. Rond de start van het seizoen en in januari helpen lokale [[meta-ads|advertenties]] om de laatste plekken te vullen.",
              en: "With a trial lesson that is easy to book and content that shows how much fun it is. Parents and adult pupils want to know which classes there are, on which days, for which age and what it costs. A clear timetable with a trial lesson button does more than a long text. Short videos of classes and performances work well on Instagram and TikTok. Around the start of the season and in January, local [[meta-ads|ads]] help fill the last places.",
            },
          },
          {
            q: { nl: "Kan ik inschrijvingen en betalingen voor lessen online regelen?", en: "Can I handle enrolments and payments for lessons online?" },
            a: {
              nl: "Ja. Leerlingen kiezen een lesvorm, dag en tijd, schrijven zich in en betalen direct, per maand via automatische incasso of met een lessenkaart. Jij krijgt een overzicht per groep en hoeft geen Excel-lijstjes meer bij te houden. Vaak kan dat met een bestaand systeem dat we netjes in je website inbouwen. Soms is een eigen [[boekingswidget]] of een [[api-koppelingen|koppeling]] handiger. We kiezen wat past bij de grootte van je school.",
              en: "Yes. Pupils choose a type of lesson, day and time, enrol and pay straight away, monthly by direct debit or with a lesson card. You get an overview per group and no longer have to keep spreadsheets. Often this works with an existing system that we neatly build into your website. Sometimes a custom [[boekingswidget|booking widget]] or an [[api-koppelingen|integration]] is more practical. We choose what suits the size of your school.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat een proefles ook een vaste leerling oplevert?", en: "How do you turn a trial lesson into a regular pupil?" },
            a: {
              nl: "Door direct na de proefles op te volgen. Stuur dezelfde dag een korte, persoonlijke mail met hoe het ging, welk lespakket of welke groep past en hoe je je inschrijft. Een herinnering een paar dagen later helpt wie nog twijfelt. Met [[e-mailmarketing]] en een [[boekingswidget]] die aan elkaar gekoppeld zijn, gaat dat automatisch, terwijl het persoonlijk blijft voelen. Vraag ook wat iemand tegenhoudt, daar leer je veel van.",
              en: "By following up right after the trial lesson. Send a short, personal email the same day with how it went, which package or group fits and how to enrol. A reminder a few days later helps anyone still in doubt. With [[e-mailmarketing|email marketing]] and a [[boekingswidget|booking widget]] linked together, that happens automatically while it still feels personal. Also ask what is holding someone back; you learn a lot from that.",
            },
          },
          {
            q: { nl: "Wat moet er op de website van een zwemschool of bijlesinstituut?", en: "What should a swimming school or tutoring centre have on its website?" },
            a: {
              nl: "Antwoorden op de vragen waarvoor ouders anders bellen. Bij een zwemschool zijn dat de diploma's, de wachttijd, de lestijden per bad en wat het kost. Bij bijles gaat het om de vakken en niveaus, hoe begeleiding werkt, wie de begeleiders zijn en hoe je de voortgang bijhoudt. Zet dat overzichtelijk op een [[webflow-website|website]] met een duidelijke knop voor aanmelden of een intake. Reviews van ouders doen de rest.",
              en: "Answers to the questions parents would otherwise call about. For a swimming school that means the certificates, the waiting time, lesson times per pool and what it costs. For tutoring it is about subjects and levels, how support works, who the tutors are and how you track progress. Put that clearly on a [[webflow-website|website]] with an obvious button to enrol or book an intake. Reviews from parents do the rest.",
            },
          },
          {
            q: { nl: "Heeft een kleine lesschool een eigen huisstijl nodig?", en: "Does a small lesson school need its own visual identity?" },
            a: {
              nl: "Je hebt geen dik merkboek nodig, wel een herkenbaar gezicht. Een goed [[logo-ontwerp|logo]], een paar vaste kleuren en lettertypes en sjablonen voor social posts en het lesrooster zijn vaak genoeg. Zorg dat het overal hetzelfde is: op de lesauto, het bord bij de deur, je website en Instagram. Zo onthouden mensen je, en dat is in een buurt met drie rijscholen of dansscholen precies wat je wilt. Een compacte [[huisstijl]] groeit later makkelijk mee.",
              en: "You do not need a thick brand book, but you do need a recognisable face. A good [[logo-ontwerp|logo]], a few fixed colours and fonts and templates for social posts and the timetable are often enough. Make sure it is the same everywhere: on the lesson car, the sign by the door, your website and Instagram. That is how people remember you, which is exactly what you want in an area with three driving or dance schools. A compact [[huisstijl|visual identity]] easily grows with you later.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Basisscholen", en: "Primary schools" },
      { nl: "Middelbare scholen", en: "Secondary schools" },
      { nl: "Scholen voor speciaal onderwijs", en: "Special education schools" },
      { nl: "Schoolbesturen en onderwijsstichtingen", en: "School boards and education foundations" },
      { nl: "Internationale scholen", en: "International schools" },
      { nl: "Mbo-instellingen", en: "Vocational colleges (MBO)" },
      { nl: "Hogescholen", en: "Universities of applied sciences" },
      { nl: "Vakscholen", en: "Trade schools" },
      { nl: "Private hogescholen en academies", en: "Private colleges and academies" },
      { nl: "Trainingsinstituten", en: "Training institutes" },
      { nl: "E-learningaanbieders", en: "E-learning providers" },
      { nl: "Bedrijfsopleiders", en: "Corporate training providers" },
      { nl: "Taalscholen", en: "Language schools" },
      { nl: "Sportbonden (opleidingen)", en: "Sports federations (education)" },
      { nl: "Kinderdagverblijven", en: "Day nurseries" },
      { nl: "Buitenschoolse opvang (BSO)", en: "Out-of-school care" },
      { nl: "Peuteropvang", en: "Preschool playgroups" },
      { nl: "Gastouderbureaus", en: "Childminding agencies" },
      { nl: "Muziekscholen", en: "Music schools" },
      { nl: "Dansscholen", en: "Dance schools" },
      { nl: "Rijscholen", en: "Driving schools" },
      { nl: "Bijlesinstituten", en: "Tutoring centres" },
      { nl: "Huiswerkbegeleiding", en: "Homework support centres" },
      { nl: "Zwemscholen", en: "Swimming schools" },
    ],
  },
  /* ---------- Gemeentes & Overheden ---------- */
  {
    slug: "gemeentes-overheden",
    title: { nl: "Gemeentes & Overheden", en: "Municipalities & Government" },
    short: { nl: "Overheid", en: "Government" },
    icon: "landmark",
    quote: { nl: "Clear for everyone. That is the whole point.", en: "Clear for everyone. That is the whole point." },
    intro: {
      nl: "Gemeenten, provincies, waterschappen en publieke organisaties: wij maken websites, campagnes en beeld die voor iedere inwoner helder, toegankelijk en vindbaar zijn.",
      en: "Municipalities, provinces, water boards and public organisations: we create websites, campaigns and visuals that are clear, accessible and findable for every resident.",
    },
    description: {
      nl: "Bij de overheid is communicatie geen marketing, maar dienstverlening. Een inwoner wil snel weten hoe hij iets aanvraagt, wat er in zijn wijk verandert of waar hij met een vraag terechtkan. En dat moet werken voor iedereen: op een oude telefoon, met een screenreader of voor wie moeite heeft met lezen. M7 helpt gemeenten en publieke organisaties met toegankelijke websites, heldere campagnes en beeld dat ingewikkelde plannen begrijpelijk maakt.\n\nWe bouwen websites en campagnesites volgens de toegankelijkheidsrichtlijnen (WCAG) waar overheden aan moeten voldoen, schrijven in begrijpelijke taal en gaan zorgvuldig om met privacy. Voor participatie en ruimtelijke plannen maken we 3D-visualisaties, uitlegvideo's en infographics, zodat inwoners kunnen meepraten over iets wat er nog niet staat. En we denken mee over AI, bijvoorbeeld een assistent die vragen van inwoners beantwoordt, binnen de kaders van privacy en informatiebeveiliging. Loopt een opdracht via een aanbesteding of offerteaanvraag? Dan sluiten we aan op de procedure en de eisen die daarbij horen.",
      en: "In government, communication is not marketing but public service. A resident wants to know quickly how to apply for something, what is changing in their neighbourhood or where to go with a question. And it has to work for everyone: on an old phone, with a screen reader or for people who struggle with reading. M7 helps municipalities and public organisations with accessible websites, clear campaigns and visuals that make complex plans understandable.\n\nWe build websites and campaign sites to the accessibility guidelines (WCAG) that public bodies must meet, write in plain language and handle privacy with care. For public participation and spatial plans we create 3D visuals, explainer videos and infographics, so residents can have their say about something that does not exist yet. And we help you think about AI, for example an assistant that answers residents' questions, within the boundaries of privacy and information security. Does a project run through a public tender or request for quotation? Then we follow the procedure and the requirements that come with it.",
    },
    challenges: [
      {
        title: { nl: "Toegankelijk voor iedereen", en: "Accessible for everyone" },
        text: {
          nl: "Overheidswebsites moeten voldoen aan de WCAG-richtlijnen en een toegankelijkheidsverklaring hebben. Wij nemen toegankelijkheid mee vanaf het eerste ontwerp, niet als controle achteraf.",
          en: "Government websites must meet the WCAG guidelines and have an accessibility statement. We include accessibility from the very first design, not as a check afterwards.",
        },
      },
      {
        title: { nl: "Ingewikkelde plannen uitleggen", en: "Explaining complex plans" },
        text: {
          nl: "Woningbouw, energietransitie, een nieuwe weg: plannen zijn abstract tot je ze ziet. Met 3D, animatie en infographics maak je ze begrijpelijk, ook voor wie geen bouwtekeningen leest.",
          en: "Housing, the energy transition, a new road: plans are abstract until you see them. With 3D, animation and infographics you make them understandable, also for people who do not read technical drawings.",
        },
      },
      {
        title: { nl: "Iedere inwoner bereiken", en: "Reaching every resident" },
        text: {
          nl: "Jongeren, ouderen, nieuwkomers en ondernemers lezen niet allemaal dezelfde krant. Met campagnes op de juiste kanalen en in begrijpelijke taal bereik je ook wie de gemeentelijke website nooit bezoekt.",
          en: "Young people, older residents, newcomers and business owners do not all read the same paper. With campaigns on the right channels and in plain language you also reach people who never visit the council website.",
        },
      },
      {
        title: { nl: "Privacy en informatiebeveiliging", en: "Privacy and information security" },
        text: {
          nl: "Inwoners moeten erop kunnen vertrouwen dat hun gegevens veilig zijn. We bouwen volgens de AVG, meten waar het kan zonder trackingcookies en werken binnen jullie kaders voor informatiebeveiliging.",
          en: "Residents need to be able to trust that their data is safe. We build in line with the GDPR, measure without tracking cookies where possible and work within your information security framework.",
        },
      },
    ],
    services: ["websites-webshops", "content-marketing-online-ads", "foto-video-3d-animatie", "grafisch-ontwerp-print", "branding-rebranding", "ai-consultancy"],
    applications: ["wordpress-website", "landingspaginas", "ux-ui-webdesign", "website-migratie", "social-media-marketing", "3d-visualisatie", "motion-design", "infographics", "huisstijl", "ai-chatbots"],
    faqs: [
      {
        q: { nl: "Voldoen jullie websites aan de toegankelijkheidseisen voor overheden?", en: "Do your websites meet the accessibility requirements for public bodies?" },
        a: {
          nl: "We ontwerpen en bouwen volgens WCAG 2.1 niveau AA, de norm waar overheidswebsites aan moeten voldoen, en testen tussentijds met toetsenbord, screenreader en contrastcontroles. Voor de toegankelijkheidsverklaring laat je de site doorgaans onderzoeken door een onafhankelijke partij. Wij zorgen dat hij daar klaar voor is en lossen eventuele bevindingen op.",
          en: "We design and build to WCAG 2.1 level AA, the standard government websites must meet, and test along the way with keyboard, screen reader and contrast checks. For the accessibility statement the site is usually audited by an independent party. We make sure it is ready for that audit and fix any findings.",
        },
      },
      {
        q: { nl: "Doen jullie mee aan aanbestedingen?", en: "Do you take part in public tenders?" },
        a: {
          nl: "Ja, waar het past. Bij een aanbesteding of meervoudig onderhandse offerteaanvraag leveren we een plan van aanpak en offerte volgens de gevraagde eisen. Kleinere opdrachten kunnen ook direct, binnen de inkoopregels van jullie organisatie.",
          en: "Yes, where it fits. For a public tender or a multiple-quote procedure we deliver a plan of approach and a quote that follow the stated requirements. Smaller assignments can also be awarded directly, within your organisation's procurement rules.",
        },
      },
      {
        q: { nl: "Maken jullie ook campagnes en uitlegvideo's voor inwoners?", en: "Do you also create campaigns and explainer videos for residents?" },
        a: {
          nl: "Ja. Van een campagne over afval scheiden of een nieuwe regeling tot een animatie bij een omgevingsvisie. We schrijven in begrijpelijke taal en kiezen de kanalen die je doelgroep echt gebruikt.",
          en: "Yes. From a campaign about recycling or a new scheme to an animation for a spatial vision. We write in plain language and choose the channels your audience actually uses.",
        },
      },
      {
        q: { nl: "Hoe gaan jullie om met privacy en cookies?", en: "How do you handle privacy and cookies?" },
        a: {
          nl: "We verzamelen niet meer dan nodig, werken volgens de AVG en kiezen waar het kan voor statistieken zonder trackingcookies. Zo heb je inzicht in het gebruik van je site, zonder inwoners te volgen.",
          en: "We collect no more than necessary, work in line with the GDPR and, where possible, choose analytics without tracking cookies. That gives you insight into how your site is used, without following residents around.",
        },
      },
      {
        q: { nl: "Kunnen jullie ruimtelijke plannen visualiseren voor participatie?", en: "Can you visualise spatial plans for public participation?" },
        a: {
          nl: "Ja. Op basis van tekeningen en modellen maken we 3D-visualisaties en animaties van woningbouw, openbare ruimte of infrastructuur, voor informatieavonden, websites en social media.",
          en: "Yes. Based on drawings and models we create 3D visuals and animations of housing, public space or infrastructure, for information evenings, websites and social media.",
        },
      },
    ],
    metaTitle: {
      nl: "Toegankelijke websites & campagnes voor overheden | M7",
      en: "Accessible websites & campaigns for government | M7",
    },
    metaDescription: {
      nl: "M7 maakt toegankelijke websites (WCAG), campagnes, 3D-visualisaties en uitlegvideo's voor gemeenten, provincies, waterschappen en publieke organisaties.",
      en: "M7 creates accessible websites (WCAG), campaigns, 3D visuals and explainer videos for municipalities, provinces, water boards and public organisations.",
    },
    segments: [
      {
        name: { nl: "Gemeenten", en: "Municipalities" },
        intro: {
          nl: "Voor gemeenten, gemeentelijke samenwerkingsverbanden, citymarketing en afdelingen communicatie, ruimte en economie die inwoners en ondernemers helder en toegankelijk willen informeren.",
          en: "For municipalities, inter-municipal partnerships, city marketing and communication, planning and economic departments that want to inform residents and businesses clearly and accessibly.",
        },
        types: [
          { nl: "Gemeenten", en: "Municipalities" },
          { nl: "Gemeentelijke samenwerkingsverbanden", en: "Inter-municipal partnerships" },
          { nl: "Citymarketingorganisaties", en: "City marketing organisations" },
          { nl: "Centrummanagementorganisaties", en: "Town centre management organisations" },
        ],
        useCases: [
          {
            title: { nl: "Toegankelijke project- of campagnesite", en: "Accessible project or campaign site" },
            text: {
              nl: "Een eigen site voor een gebiedsontwikkeling of campagne, toegankelijk gebouwd en makkelijk bij te houden door de afdeling communicatie.",
              en: "A dedicated site for an area development or campaign, built to be accessible and easy for the communications team to update.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Campagne voor inwoners", en: "Campaign for residents" },
            text: {
              nl: "Van afval scheiden tot een nieuwe regeling: korte, heldere berichten op de kanalen die inwoners echt gebruiken.",
              en: "From recycling to a new scheme: short, clear messages on the channels residents actually use.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Citymarketing en gebiedsmerk", en: "City marketing and place brand" },
            text: {
              nl: "Een verhaal en beeldtaal voor je stad of dorp, waarin inwoners, ondernemers en bezoekers zich herkennen.",
              en: "A story and visual language for your town or village that residents, businesses and visitors recognise themselves in.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Uitlegvideo bij nieuw beleid", en: "Explainer video for new policy" },
            text: {
              nl: "Een korte animatie die in een minuut uitlegt wat er verandert en wat een inwoner moet doen.",
              en: "A short animation that explains in a minute what is changing and what a resident needs to do.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "Antwoorden die inwoners vinden", en: "Answers residents can find" },
            text: {
              nl: "Inwoners zoeken 'paspoort aanvragen' of 'grofvuil ophalen' in Google, of vragen het aan een AI-assistent. Met heldere pagina's en structured data maak je het officiële antwoord makkelijker te vinden.",
              en: "Residents search for 'apply for a passport' or 'bulky waste collection' in Google, or ask an AI assistant. With clear pages and structured data you make the official answer easier to find.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
          {
            title: { nl: "AI-workshop voor gemeenteteams", en: "AI workshop for council teams" },
            text: {
              nl: "Wat mag, wat kan en waar levert AI echt tijd op? Een praktische workshop voor teams als communicatie of klantcontact, met afspraken over privacy en informatiebeveiliging.",
              en: "What is allowed, what is possible and where does AI really save time? A practical workshop for teams such as communications or customer contact, with agreements on privacy and information security.",
            },
            service: "ai-consultancy",
            application: "ai-workshops",
          },
          {
            title: { nl: "Centrumsite met winkels en agenda", en: "Town centre site with shops and events" },
            text: {
              nl: "Winkels, horeca, evenementen en parkeren in één site voor het centrum, waarop ondernemers zelf hun gegevens en acties bijwerken. Vindbaar voor wie zoekt op winkelen of uitgaan in jouw plaats.",
              en: "Shops, restaurants, events and parking in one site for the town centre, where businesses update their own details and offers. Findable for people searching for shopping or going out in your town.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Bewonersbrief en flyer op B1-niveau", en: "Plain-language letters and leaflets" },
            text: {
              nl: "Een brief of flyer voor een wijk die in één oogopslag zegt wat er verandert, wanneer en waar je terechtkunt. Met een QR-code naar de projectpagina voor wie meer wil weten.",
              en: "A letter or leaflet for a neighbourhood that says at a glance what is changing, when, and where to go with questions. With a QR code to the project page for those who want to know more.",
            },
            service: "grafisch-ontwerp-print",
            application: "flyers-posters",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe maak je een website voor een gemeente toegankelijk?", en: "How do you make a municipal website accessible?" },
            a: {
              nl: "Door toegankelijkheid in elke stap mee te nemen: ontwerp, techniek en tekst. Denk aan voldoende contrast, koppen in de juiste volgorde, formulieren die met het toetsenbord werken, ondertiteling bij video en teksten op B1-niveau. Gemeenten moeten voldoen aan WCAG 2.1 niveau AA en een toegankelijkheidsverklaring publiceren in het register van DigiToegankelijk. We bouwen een [[wordpress-website|website]] die daarop is ingericht en testen tussentijds, zodat het onafhankelijke onderzoek achteraf geen verrassingen oplevert.",
              en: "By including accessibility in every step: design, technology and copy. Think of sufficient contrast, headings in the right order, forms that work with a keyboard, captions on video and texts at B1 reading level. Dutch municipalities must meet WCAG 2.1 level AA and publish an accessibility statement in the DigiToegankelijk register. We build a [[wordpress-website|website]] set up for that and test along the way, so the independent audit afterwards brings no surprises.",
            },
          },
          {
            q: { nl: "Hoe bereik je inwoners die de gemeentelijke website nooit bezoeken?", en: "How do you reach residents who never visit the council website?" },
            a: {
              nl: "Door naar hen toe te gaan. Jongeren zitten op Instagram en TikTok, veel ouderen lezen nog het huis-aan-huisblad en ondernemers zie je op LinkedIn en bij de ondernemersvereniging. Kies per doelgroep het kanaal en pas de boodschap daarop aan, in plaats van één persbericht overal neer te zetten. Korte video's en beeld doen het beter dan lappen tekst. Met [[social-media-marketing|social media]] en een doordachte [[contentstrategie]] bereik je inwoners in een specifieke wijk of leeftijdsgroep, netjes binnen de privacyregels.",
              en: "By going to them. Young people are on Instagram and TikTok, many older residents still read the free local paper and business owners can be found on LinkedIn and at the business association. Choose the channel per audience and adapt the message to it, instead of putting one press release everywhere. Short videos and visuals work better than walls of text. With [[social-media-marketing|social media]] and a well-thought-out [[contentstrategie|content strategy]] you reach residents in a specific neighbourhood or age group, neatly within the privacy rules.",
            },
          },
          {
            q: { nl: "Hoe pak je citymarketing aan voor een gemeente of kern?", en: "How do you approach city marketing for a municipality or village?" },
            a: {
              nl: "Begin bij wat er al is, niet bij een nieuw logo. Wat maakt je stad of dorp anders, waar zijn inwoners trots op en wat zoeken bezoekers, nieuwe bewoners en bedrijven? Daarop bouw je een verhaal en een beeldtaal die ondernemers en organisaties zelf ook kunnen gebruiken. Zo wordt het een merk van de hele plaats, niet alleen van het gemeentehuis. Met een [[merkstrategie]] en een flexibele [[huisstijl]] maken we dat concreet, met sjablonen die partners zonder ontwerper kunnen inzetten.",
              en: "Start with what is already there, not with a new logo. What makes your town or village different, what are residents proud of and what are visitors, new residents and businesses looking for? On that you build a story and a visual language that businesses and organisations can use themselves. That way it becomes a brand of the whole place, not just of the town hall. With a [[merkstrategie|brand strategy]] and a flexible [[huisstijl|visual identity]] we make it concrete, with templates partners can use without a designer.",
            },
          },
          {
            q: { nl: "Hoe leg je nieuw beleid of een regeling uit zonder ambtelijke taal?", en: "How do you explain new policy or a scheme without official jargon?" },
            a: {
              nl: "Door vanuit de inwoner te schrijven. Wat verandert er voor mij, wat moet ik doen en wanneer? Zet dat bovenaan, in korte zinnen, en bewaar de juridische details voor wie verder leest. Een korte [[motion-design|animatie]] of infographic helpt mensen die liever kijken dan lezen. Toets teksten op B1-niveau en, als het kan, bij een paar inwoners. Dat voelt als extra werk, maar het scheelt een hoop telefoontjes bij het klantcontactcentrum.",
              en: "By writing from the resident's point of view. What changes for me, what do I need to do and when? Put that at the top, in short sentences, and save the legal details for those who read on. A short [[motion-design|animation]] or infographic helps people who prefer watching to reading. Check texts against B1 reading level and, if possible, with a few residents. It feels like extra work, but it saves a lot of calls to the contact centre.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat inwoners het juiste antwoord vinden in Google en AI-assistenten?", en: "How do you make sure residents find the right answer in Google and AI assistants?" },
            a: {
              nl: "Door per veelgestelde vraag één duidelijke pagina te maken, met het antwoord bovenaan en de details eronder. Gebruik de woorden die inwoners gebruiken, zoals 'verhuizing doorgeven' in plaats van een interne productnaam, en houd de informatie actueel. Met [[structured-data|structured data]] begrijpen zoekmachines en AI-assistenten beter wat er op de pagina staat. Zo vergroot je met [[aeo|AEO]] de kans dat het officiële antwoord van de gemeente wordt getoond, in plaats van een verouderd forumbericht.",
              en: "By creating one clear page per frequently asked question, with the answer at the top and the details below. Use the words residents use, such as 'report a change of address' instead of an internal product name, and keep the information up to date. With [[structured-data|structured data]] search engines and AI assistants better understand what is on the page. With [[aeo|AEO]] you increase the chance that the council's official answer is shown, instead of an outdated forum post.",
            },
          },
          {
            q: { nl: "Hoe begin je als gemeente verantwoord met AI?", en: "How does a municipality start using AI responsibly?" },
            a: {
              nl: "Met afspraken voordat je met tools begint. Bepaal welke gegevens nooit in een AI-tool mogen, welke toepassingen wel mogen en wie de uitkomsten controleert. Kies daarna een paar kleine, zichtbare toepassingen, zoals concepten voor nieuwsberichten of het samenvatten van openbare stukken. In een [[ai-workshops|AI-workshop]] leren teams wat kan en wat niet. Met een [[ai-strategie|AI-strategie]] maken we een plan dat past binnen jullie kaders voor privacy en informatiebeveiliging.",
              en: "With agreements before you start with tools. Decide which data may never go into an AI tool, which uses are allowed and who checks the results. Then choose a few small, visible uses, such as drafts for news items or summarising public documents. In an [[ai-workshops|AI workshop]] teams learn what is and is not possible. With an [[ai-strategie|AI strategy]] we make a plan that fits within your privacy and information security framework.",
            },
          },
          {
            q: { nl: "Hoe maak je een centrumwebsite waar ondernemers zelf aan bijdragen?", en: "How do you build a town centre website that businesses contribute to themselves?" },
            a: {
              nl: "Maak het voor ondernemers net zo makkelijk als een social post plaatsen. Elke ondernemer krijgt een eigen inlog om openingstijden, acties en evenementen bij te werken, en centrummanagement houdt een oogje in het zeil. Met een vaste opmaak blijft de site rustig en herkenbaar. Een [[webflow-website|website]] met een goed ingericht CMS en [[lokale-seo|lokale SEO]] op zoektermen als 'winkelen in' plus je plaats maakt het centrum ook online een bestemming.",
              en: "Make it as easy for businesses as posting on social media. Each business gets its own login to update opening hours, offers and events, while town centre management keeps an eye on things. With a fixed layout the site stays calm and recognisable. A [[webflow-website|website]] with a well-structured CMS and [[lokale-seo|local SEO]] for search terms like 'shopping in' plus your town makes the centre a destination online too.",
            },
          },
        ],
      },
      {
        name: { nl: "Provincies & waterschappen", en: "Provinces & water boards" },
        intro: {
          nl: "Voor provincies, waterschappen, omgevingsdiensten en veiligheidsregio's met grote projecten, veel belanghebbenden en een verhaal dat verder gaat dan één gemeente.",
          en: "For provinces, water boards, environmental agencies and safety regions with large projects, many stakeholders and a story that goes beyond a single municipality.",
        },
        types: [
          { nl: "Provincies", en: "Provinces" },
          { nl: "Waterschappen", en: "Water boards" },
          { nl: "Omgevingsdiensten", en: "Environmental agencies" },
          { nl: "Veiligheidsregio's", en: "Safety regions" },
        ],
        useCases: [
          {
            title: { nl: "3D-visualisatie van een infra- of dijkproject", en: "3D visual of an infrastructure or dyke project" },
            text: {
              nl: "Laat omwonenden zien hoe een dijk, fietsroute of natuurgebied eruit komt te zien, gezien vanuit hun eigen straat.",
              en: "Show local residents what a dyke, cycle route or nature area will look like, seen from their own street.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Dronebeelden van een projectgebied", en: "Drone footage of a project area" },
            text: {
              nl: "Overzicht van een gebied voor en tijdens de uitvoering, voor projectsites, informatieavonden en social media.",
              en: "An overview of an area before and during the works, for project sites, information evenings and social media.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
          {
            title: { nl: "Begroting of jaarverslag in infographics", en: "Budget or annual report in infographics" },
            text: {
              nl: "Cijfers over waterkwaliteit, investeringen, dijkversterking of veiligheid in één oogopslag te begrijpen, voor de website, het jaarverslag en presentaties aan bestuur en inwoners.",
              en: "Figures on water quality, investments, dyke reinforcement or safety understandable at a glance, for the website, the annual report and presentations to the board and residents.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
          {
            title: { nl: "Projectwebsite met actuele updates", en: "Project website with current updates" },
            text: {
              nl: "Een site waarop planning, hinder en contactpersonen altijd actueel zijn, zodat omwonenden weten waar ze aan toe zijn.",
              en: "A site where planning, disruption and contact persons are always up to date, so residents know where they stand.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Campagne over water en klimaat", en: "Campaign on water and climate" },
            text: {
              nl: "Van droogte en hevige buien tot 'wat mag er door de wc': korte campagnes die inwoners laten zien wat ze zelf kunnen doen, op het moment dat het speelt.",
              en: "From drought and heavy downpours to 'what can go down the toilet': short campaigns that show residents what they can do themselves, at the moment it matters.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "AI die meldingen sorteert", en: "AI that sorts incoming reports" },
            text: {
              nl: "Meldingen en vragen van inwoners en bedrijven worden automatisch gelezen, gesorteerd en bij het juiste team gezet, met een conceptantwoord dat een medewerker controleert.",
              en: "Reports and questions from residents and businesses are automatically read, sorted and assigned to the right team, with a draft reply that a staff member checks.",
            },
            service: "ai-consultancy",
            application: "ai-integraties",
          },
          {
            title: { nl: "Brandbook voor een groot programma", en: "Brand book for a large programme" },
            text: {
              nl: "Een dijkversterking of regionaal programma met veel partners krijgt vaak een eigen naam en beeld. Een brandbook met sjablonen zorgt dat iedereen dat consequent gebruikt.",
              en: "A dyke reinforcement or regional programme with many partners often gets its own name and look. A brand book with templates makes sure everyone uses it consistently.",
            },
            service: "branding-rebranding",
            application: "brandbook",
          },
          {
            title: { nl: "Openbaar dashboard met actuele data", en: "Public dashboard with live data" },
            text: {
              nl: "Waterstanden, luchtkwaliteit of de voortgang van projecten als toegankelijk dashboard op de website, gevoed met jullie eigen data en met een tekstversie voor wie geen grafiek kan lezen.",
              en: "Water levels, air quality or project progress as an accessible dashboard on the website, fed with your own data and with a text version for people who cannot read a chart.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe leg je een infrastructuur- of dijkproject uit aan omwonenden?", en: "How do you explain an infrastructure or dyke project to local residents?" },
            a: {
              nl: "Laat zien wat er verandert vanuit hun eigen perspectief. Een kaart met bouwtekeningen is voor de meeste mensen lastig te lezen. Een [[3d-visualisatie]] vanaf de straat, de dijk of de fietsroute laat in één beeld zien wat er komt. Combineer dat met een projectpagina die planning, verwachte hinder en een vast aanspreekpunt geeft, en houd die actueel. Dat neemt niet alle zorgen weg, maar mensen weten wel waar ze aan toe zijn.",
              en: "Show what changes from their own perspective. A map with technical drawings is hard for most people to read. A [[3d-visualisatie|3D visual]] from the street, the dyke or the cycle route shows in one image what is coming. Combine that with a project page that gives the planning, expected disruption and a fixed point of contact, and keep it up to date. It will not take away every concern, but people do know where they stand.",
            },
          },
          {
            q: { nl: "Hoe maak je een begroting of jaarverslag leesbaar voor inwoners?", en: "How do you make a budget or annual report readable for residents?" },
            a: {
              nl: "Door de hoofdlijnen eruit te lichten en in beeld te brengen. Waar komt het geld vandaan, waar gaat het naartoe en wat merkt een inwoner daarvan? Een paar duidelijke [[infographics]] en een korte samenvatting in begrijpelijke taal doen meer dan honderd pagina's tabellen. Het volledige document blijft beschikbaar voor wie wil, liefst als toegankelijke webpagina in plaats van alleen een pdf. Zo leg je verantwoording af en wordt het ook nog gelezen.",
              en: "By picking out the main points and visualising them. Where does the money come from, where does it go and what does a resident notice of it? A few clear [[infographics]] and a short summary in plain language do more than a hundred pages of tables. The full document stays available for those who want it, ideally as an accessible web page rather than only a PDF. That way you account for your choices and people actually read it.",
            },
          },
          {
            q: { nl: "Kunnen jullie dronebeelden maken van een projectgebied?", en: "Can you shoot drone footage of a project area?" },
            a: {
              nl: "Ja. Met [[dronevideo|dronebeelden]] laat je de schaal en samenhang van een gebied zien: een dijktraject, een natuurgebied of een nieuwe wijk in aanbouw. Door op vaste momenten te filmen, ontstaat een tijdlijn van de uitvoering die je op je projectsite en social media kunt delen. We houden rekening met de regels voor dronevluchten en de privacy van omwonenden, en stemmen locaties en momenten vooraf met je af.",
              en: "Yes. With [[dronevideo|drone footage]] you show the scale and coherence of an area: a stretch of dyke, a nature area or a new neighbourhood under construction. By filming at set moments you build a timeline of the works that you can share on your project site and social media. We take the rules for drone flights and the privacy of local residents into account, and agree locations and timing with you in advance.",
            },
          },
          {
            q: { nl: "Hoe geef je een programma met veel partners één herkenbaar gezicht?", en: "How do you give a programme with many partners one recognisable face?" },
            a: {
              nl: "Met een eigen naam en beeldtaal die boven de logo's van de partners staat, en duidelijke afspraken over het gebruik. Een praktisch [[brandbook]] met sjablonen voor presentaties, brieven, bouwborden en social posts maakt het makkelijk om het goed te doen. Eén centrale projectwebsite voorkomt dat elke partner zijn eigen versie van het verhaal vertelt. Zo herkennen inwoners het programma, wie er op dat moment ook aan het werk is.",
              en: "With its own name and visual language that sits above the partners' logos, and clear agreements on how to use it. A practical [[brandbook|brand book]] with templates for presentations, letters, site hoardings and social posts makes it easy to get it right. One central project website prevents every partner from telling their own version of the story. That way residents recognise the programme, no matter who is doing the work at that moment.",
            },
          },
          {
            q: { nl: "Kunnen jullie een toegankelijk dashboard met open data bouwen?", en: "Can you build an accessible dashboard with open data?" },
            a: {
              nl: "Ja. We bouwen [[dashboards]] die data via [[api-koppelingen]] uit jullie eigen systemen of open databronnen halen en automatisch bijwerken. Toegankelijkheid nemen we vanaf het ontwerp mee: voldoende contrast, bediening met het toetsenbord en bij elke grafiek een tabel of korte tekst met de kern. Zo kan iedereen de informatie gebruiken, ook met een screenreader. We beginnen met de cijfers waar inwoners en bestuur het vaakst naar vragen.",
              en: "Yes. We build [[dashboards]] that pull data from your own systems or open data sources through [[api-koppelingen|API integrations]] and update automatically. We include accessibility from the design stage: sufficient contrast, keyboard operation and a table or short text with the key point for every chart. That way everyone can use the information, including with a screen reader. We start with the figures residents and the board ask about most.",
            },
          },
          {
            q: { nl: "Hoe maak je inwoners bewust van wat ze zelf kunnen doen bij droogte of wateroverlast?", en: "How do you make residents aware of what they can do themselves during drought or flooding?" },
            a: {
              nl: "Door het moment te benutten en één concrete actie te geven. In een droge zomer of na een flinke bui is de aandacht er vanzelf. Een korte boodschap over wat iemand nu kan doen, zoals een regenton plaatsen of een tegel uit de tuin halen, werkt beter dan een algemene oproep. Met [[social-media-marketing|social media]] en een korte [[motion-design|animatie]] bereik je inwoners in het gebied waar het speelt, met een link naar meer informatie.",
              en: "By using the moment and giving one concrete action. In a dry summer or after a heavy downpour the attention is there anyway. A short message about what someone can do now, such as installing a water butt or removing a paving tile from the garden, works better than a general appeal. With [[social-media-marketing|social media]] and a short [[motion-design|animation]] you reach residents in the area where it matters, with a link to more information.",
            },
          },
        ],
      },
      {
        name: { nl: "Publieke organisaties", en: "Public organisations" },
        intro: {
          nl: "Voor uitvoeringsorganisaties, zelfstandige bestuursorganen, woningcorporaties, bibliotheken en andere publieke instellingen die een grote en diverse groep mensen goed willen bedienen.",
          en: "For government agencies, independent public bodies, housing associations, libraries and other public institutions that want to serve a large and diverse group of people well.",
        },
        types: [
          { nl: "Uitvoeringsorganisaties", en: "Government agencies" },
          { nl: "Zelfstandige bestuursorganen", en: "Independent public bodies" },
          { nl: "Woningcorporaties", en: "Housing associations" },
          { nl: "Bibliotheken", en: "Libraries" },
        ],
        useCases: [
          {
            title: { nl: "Rebranding van een publieke organisatie", en: "Rebranding a public organisation" },
            text: {
              nl: "Een nieuwe naam of huisstijl na een fusie of koerswijziging, ingevoerd zonder verwarring bij klanten en medewerkers.",
              en: "A new name or identity after a merger or change of course, introduced without confusing customers or staff.",
            },
            service: "branding-rebranding",
            application: "rebranding",
          },
          {
            title: { nl: "Eigen omgeving voor huurders of klanten", en: "Personal area for tenants or customers" },
            text: {
              nl: "Zaken online regelen, van een reparatieverzoek tot het wijzigen van gegevens, in een toegankelijke en veilige omgeving.",
              en: "Arranging things online, from a repair request to updating details, in an accessible and secure environment.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Website migreren zonder dat iemand verdwaalt", en: "Migrating a website without anyone getting lost" },
            text: {
              nl: "Honderden pagina's en documenten overzetten naar een nieuw platform, met een redirect voor elke oude link en een structuur die bezoekers wél begrijpen.",
              en: "Moving hundreds of pages and documents to a new platform, with a redirect for every old link and a structure visitors actually understand.",
            },
            service: "websites-webshops",
            application: "website-migratie",
          },
          {
            title: { nl: "Een jaarverslag dat gelezen wordt", en: "An annual report people read" },
            text: {
              nl: "Een jaarverslag als toegankelijke webpagina én als verzorgde pdf, met de hoofdlijnen in begrijpelijke taal en infographics voor wie snel wil scannen.",
              en: "An annual report as an accessible web page and as a polished PDF, with the main points in plain language and infographics for those who want to scan quickly.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
          {
            title: { nl: "Digitale assistent voor huurders en klanten", en: "Digital assistant for tenants and customers" },
            text: {
              nl: "Vragen over huur, reparaties, openingstijden of een aanvraag beantwoord op basis van je eigen informatie. Wordt het persoonlijk, dan verwijst de assistent door naar een medewerker.",
              en: "Questions about rent, repairs, opening hours or an application answered from your own information. When it gets personal, the assistant refers people to a staff member.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
          {
            title: { nl: "Doorlichting van je huidige website", en: "An audit of your current website" },
            text: {
              nl: "Wat wordt er gevonden en gebruikt, wat is verouderd en waar zitten knelpunten in toegankelijkheid en techniek? Een heldere analyse als basis voor keuzes en een eventuele migratie.",
              en: "What gets found and used, what is outdated and where are the bottlenecks in accessibility and technology? A clear analysis as the basis for decisions and a possible migration.",
            },
            service: "seo-aeo-geo",
            application: "seo-audit",
          },
          {
            title: { nl: "Werken-bij met maatschappelijke impact", en: "Careers with social impact" },
            text: {
              nl: "Vakmensen, consulenten en ICT'ers kiezen vaak bewust voor werk met betekenis. Laat met verhalen van collega's zien wat je organisatie doet voor huurders, klanten of de stad.",
              en: "Tradespeople, consultants and IT staff often deliberately choose work that matters. Use stories from colleagues to show what your organisation does for tenants, customers or the city.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Uitlegvideo over een aanvraag", en: "Explainer video about an application" },
            text: {
              nl: "Hoe werkt een aanvraag, wat gebeurt er daarna en hoe lang duurt het? Een korte animatie maakt het proces duidelijk en scheelt veel vragen bij de klantenservice.",
              en: "How does an application work, what happens next and how long does it take? A short animation makes the process clear and saves a lot of questions to customer service.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe pak je een rebranding aan bij een publieke organisatie?", en: "How do you approach a rebrand at a public organisation?" },
            a: {
              nl: "Zorgvuldig en in fases. Bij een fusie of nieuwe koers wil je duidelijkheid, maar inwoners en klanten moeten je nog steeds herkennen en vinden. Begin met een heldere [[merkstrategie]], betrek medewerkers op tijd en maak een plan voor alles wat moet veranderen: website, formulieren, brieven en bebording. Een [[rebranding]] hoeft niet alles in één keer om te gooien. Soms past een evolutie van wat er is beter bij een organisatie die vertrouwen moet uitstralen.",
              en: "Carefully and in phases. After a merger or change of course you want clarity, but residents and customers still need to recognise and find you. Start with a clear [[merkstrategie|brand strategy]], involve staff early and plan everything that has to change: website, forms, letters and signage. A [[rebranding]] does not have to turn everything upside down at once. Sometimes an evolution of what is already there suits an organisation that needs to inspire trust better.",
            },
          },
          {
            q: { nl: "Kunnen huurders of klanten hun zaken online regelen in een eigen omgeving?", en: "Can tenants or customers arrange things online in their own area?" },
            a: {
              nl: "Ja. In een [[klantportaal]] doet een huurder een reparatieverzoek met foto, wijzigt hij zijn gegevens of bekijkt hij zijn betalingen, wanneer het hem uitkomt. Dat scheelt je klantenservice telefoontjes en mails. We bouwen zo'n omgeving toegankelijk, met een veilige inlog, en koppelen hem via [[api-koppelingen|API's]] aan de systemen die je al gebruikt. Belangrijk: wie liever belt of langskomt, moet dat gewoon kunnen blijven doen.",
              en: "Yes. In a [[klantportaal|customer portal]] a tenant submits a repair request with a photo, updates their details or checks their payments, whenever it suits them. That saves your customer service calls and emails. We build that kind of environment to be accessible, with a secure login, and connect it through [[api-koppelingen|APIs]] to the systems you already use. Important: people who prefer to call or visit should simply be able to keep doing so.",
            },
          },
          {
            q: { nl: "Hoe migreer je een grote website zonder dat bezoekers verdwalen?", en: "How do you migrate a large website without visitors getting lost?" },
            a: {
              nl: "Door eerst op te ruimen en dan pas te verhuizen. Veel publieke websites hebben honderden pagina's en pdf's, waarvan een deel verouderd is. We brengen in kaart wat bezocht wordt, wat weg kan en wat beter kan, en zetten voor elke oude URL een redirect naar de nieuwe plek. Zo blijven links in brieven, zoekmachines en bladwijzers werken. Met een zorgvuldige [[website-migratie]] verhuis je zonder dat inwoners op een foutpagina belanden, en word je meteen een stuk toegankelijker.",
              en: "By tidying up first and only then moving. Many public websites have hundreds of pages and PDFs, some of them outdated. We map what is visited, what can go and what can be improved, and set up a redirect from every old URL to its new place. That keeps links in letters, search engines and bookmarks working. With a careful [[website-migratie|website migration]] you move without residents landing on an error page, and become a lot more accessible at the same time.",
            },
          },
          {
            q: { nl: "Hoe vindt een woningcorporatie of uitvoeringsorganisatie nieuw personeel?", en: "How does a housing association or government agency find new staff?" },
            a: {
              nl: "Door het maatschappelijke verhaal concreet te maken. Een monteur, wijkconsulent of developer wil weten wat hij bijdraagt, met wie hij werkt en hoe een gewone werkweek eruitziet. Laat collega's dat zelf vertellen, met foto's of korte video's uit de praktijk. Schrijf vacatures in gewone taal en houd solliciteren kort. Met [[employer-branding|employer branding]] en een overzichtelijke werken-bij omgeving val je op naast commerciële werkgevers.",
              en: "By making the social story concrete. A maintenance technician, neighbourhood consultant or developer wants to know what they contribute, who they work with and what an ordinary working week looks like. Let colleagues tell that themselves, with photos or short videos from practice. Write vacancies in plain language and keep applying short. With [[employer-branding|employer branding]] and a clear careers environment you stand out next to commercial employers.",
            },
          },
          {
            q: { nl: "Hoe vergroot een bibliotheek het bereik van haar activiteiten?", en: "How does a library increase the reach of its activities?" },
            a: {
              nl: "Door activiteiten te laten zien waar mensen al kijken. Een overzichtelijke agenda op de website, met filters op doelgroep en locatie, is de basis. Daaromheen helpen een vaste [[social-media-marketing|social media]]-planning, lokale advertenties voor specifieke doelgroepen en een [[e-mailmarketing|nieuwsbrief]] die mensen zelf op interesse samenstellen. Samen met scholen, buurthuizen en de gemeente bereik je ook mensen die niet uit zichzelf naar de bibliotheek komen.",
              en: "By showing activities where people are already looking. A clear calendar on the website, with filters by audience and location, is the basis. Around that, a regular [[social-media-marketing|social media]] plan, local ads for specific audiences and a [[e-mailmarketing|newsletter]] people tailor to their interests all help. Together with schools, community centres and the municipality you also reach people who would not come to the library on their own.",
            },
          },
          {
            q: { nl: "Waar begin je als je website verouderd is, maar een migratie te groot voelt?", en: "Where do you start when your website is outdated but a migration feels too big?" },
            a: {
              nl: "Met een goede [[seo-audit|doorlichting]]. Bekijk welke pagina's echt bezocht worden, welke informatie verouderd of dubbel is en waar de grootste knelpunten in toegankelijkheid zitten. Vaak blijkt een flink deel van de site weg te kunnen. Daarna maak je een plan in fases: eerst de onderwerpen waarvoor de meeste bezoekers komen, dan de rest. Zo wordt een [[website-migratie]] een overzichtelijk project in plaats van een berg.",
              en: "With a proper [[seo-audit|audit]]. Look at which pages are actually visited, which information is outdated or duplicated and where the biggest accessibility problems are. Often a large part of the site turns out to be removable. Then make a phased plan: first the topics most visitors come for, then the rest. That turns a [[website-migratie|website migration]] into a manageable project instead of a mountain.",
            },
          },
        ],
      },
      {
        name: { nl: "Regio & economie", en: "Region & economy" },
        intro: {
          nl: "Voor regionale ontwikkelingsmaatschappijen, economic boards, regiomarketing, VVV's en ondernemersfondsen die bedrijven, talent en bezoekers naar hun regio willen halen.",
          en: "For regional development agencies, economic boards, regional marketing, tourist offices and business improvement funds that want to attract companies, talent and visitors to their region.",
        },
        types: [
          { nl: "Regionale ontwikkelingsmaatschappijen", en: "Regional development agencies" },
          { nl: "Economic boards", en: "Economic boards" },
          { nl: "Regiomarketingorganisaties", en: "Regional marketing organisations" },
          { nl: "VVV's en toeristische organisaties", en: "Tourist offices and tourism organisations" },
          { nl: "Ondernemersfondsen", en: "Business improvement funds" },
        ],
        useCases: [
          {
            title: { nl: "Een regiomerk", en: "A regional brand" },
            text: {
              nl: "Een verhaal over de regio dat bedrijven, kennisinstellingen en overheden samen kunnen vertellen.",
              en: "A story about the region that businesses, knowledge institutions and government can tell together.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Meertalige site voor investeerders en talent", en: "Multilingual site for investors and talent" },
            text: {
              nl: "Informatie over vestigen, werken en wonen in de regio, in het Nederlands en het Engels.",
              en: "Information about setting up, working and living in the region, in Dutch and English.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
          {
            title: { nl: "LinkedIn-campagne richting bedrijven en talent", en: "LinkedIn campaign aimed at companies and talent" },
            text: {
              nl: "Bereik beslissers en specialisten buiten je regio met verhalen van bedrijven die er al zitten.",
              en: "Reach decision-makers and specialists outside your region with stories from companies already based there.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "Regiofilm met dronebeelden", en: "Regional film with drone footage" },
            text: {
              nl: "De regio vanuit de lucht en van dichtbij, voor beurzen, websites en social media.",
              en: "The region from the air and up close, for trade fairs, websites and social media.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
          {
            title: { nl: "Vindbaar voor bezoekers en vestigers", en: "Findable for visitors and new businesses" },
            text: {
              nl: "Pagina's over uitjes, routes, evenementen en vestigen in de regio, geschreven op de vragen die mensen aan Google en ChatGPT stellen, zoals 'weekendje weg in Brabant'.",
              en: "Pages about days out, routes, events and setting up in the region, written around the questions people ask Google and ChatGPT, such as 'weekend away in Brabant'.",
            },
            service: "seo-aeo-geo",
            application: "geo",
          },
          {
            title: { nl: "Gezamenlijke beursstand", en: "Joint trade fair stand" },
            text: {
              nl: "Een stand op een vakbeurs of vastgoedbeurs waarop de regio en de deelnemende bedrijven samen één verhaal vertellen, met beeld dat van een afstand te lezen is.",
              en: "A stand at a trade or property fair where the region and the participating companies tell one story together, with visuals that can be read from a distance.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
          {
            title: { nl: "Agendawidget voor partners", en: "Events widget for partners" },
            text: {
              nl: "Een agenda- of routewidget die partners op hun eigen website plaatsen, zodat evenementen en arrangementen uit de regio overal actueel zijn, zonder dat iemand iets dubbel invoert.",
              en: "An events or routes widget that partners place on their own websites, so events and packages from the region are up to date everywhere, without anyone entering things twice.",
            },
            service: "configurators-lead-tools-widgets",
            application: "website-widgets",
          },
          {
            title: { nl: "Nieuwsbrief voor partners en ondernemers", en: "Newsletter for partners and businesses" },
            text: {
              nl: "Een vaste nieuwsbrief over projecten, regelingen en bijeenkomsten, met aparte onderdelen voor ondernemers, onderwijs en overheid. Iedereen krijgt wat voor hem relevant is.",
              en: "A regular newsletter about projects, schemes and meetings, with separate sections for businesses, education and government. Everyone gets what is relevant to them.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe bouw je een sterk regiomerk?", en: "How do you build a strong regional brand?" },
            a: {
              nl: "Samen met de mensen die het moeten dragen. Een regiomerk werkt pas als bedrijven, onderwijs, overheden en inwoners het herkennen en gebruiken. Begin met gesprekken en onderzoek naar wat de regio echt onderscheidt, en kies daarna een paar heldere verhaallijnen. De beeldtaal moet flexibel zijn, zodat een techbedrijf en een VVV hem allebei kunnen inzetten. Met een [[merkstrategie]] en een praktisch [[brandbook]] zorgen we dat het merk niet in een la verdwijnt.",
              en: "Together with the people who have to carry it. A regional brand only works when businesses, education, government and residents recognise and use it. Start with conversations and research into what really sets the region apart, then choose a few clear storylines. The visual language has to be flexible, so a tech company and a tourist office can both use it. With a [[merkstrategie|brand strategy]] and a practical [[brandbook|brand book]] we make sure the brand does not end up in a drawer.",
            },
          },
          {
            q: { nl: "Hoe trek je bedrijven en talent naar je regio?", en: "How do you attract companies and talent to your region?" },
            a: {
              nl: "Met verhalen die laten zien hoe het is om er te werken en te wonen, verteld door mensen die het al doen. Een ondernemer die vertelt waarom hij juist hier zit, overtuigt meer dan een lijst met vestigingsvoordelen. Zet die verhalen op een [[meertalige-website|meertalige website]] met praktische info over vestigen, wonen en vacatures. Verspreid ze via [[linkedin-ads|LinkedIn]], beurzen en partners. Zo bouw je stap voor stap een beeld op dat blijft hangen.",
              en: "With stories that show what it is like to work and live there, told by people who already do. An entrepreneur explaining why they chose this region convinces more than a list of location benefits. Put those stories on a [[meertalige-website|multilingual website]] with practical info about setting up, housing and vacancies. Share them through [[linkedin-ads|LinkedIn]], trade fairs and partners. That way you build, step by step, an image that sticks.",
            },
          },
          {
            q: { nl: "Hoe laat je zien wat een regionaal programma of fonds doet?", en: "How do you show what a regional programme or fund does?" },
            a: {
              nl: "Door projecten en mensen centraal te zetten in plaats van vergaderingen en budgetten. Een korte film of fotoserie per project, een overzichtspagina met wat er is gebeurd en wie er meedoet, en een nieuwsbrief voor partners. Cijfers horen erbij, maar alleen als ze kloppen en iets betekenen. Met een heldere [[contentstrategie]] en [[bedrijfsfilm|video]] zie je als partner of inwoner waar het geld en de energie naartoe gaan.",
              en: "By putting projects and people at the centre instead of meetings and budgets. A short film or photo series per project, an overview page of what has happened and who is involved, and a newsletter for partners. Figures belong in it, but only if they are correct and mean something. With a clear [[contentstrategie|content strategy]] and [[bedrijfsfilm|video]], partners and residents can see where the money and the energy go.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat partners het regiomerk ook echt gebruiken?", en: "How do you make sure partners actually use the regional brand?" },
            a: {
              nl: "Door het ze makkelijk te maken. Een toolkit met logo's, sjablonen, een fotobank en kant-en-klare teksten verlaagt de drempel enorm. Zet alles op één downloadpagina en laat met voorbeelden zien hoe andere partners het gebruiken. Een kort [[brandbook]] werkt beter dan een dik document dat niemand opent. En vraag partners af en toe wat ze missen, zodat de [[huisstijl]] meegroeit met hoe ze hem echt gebruiken.",
              en: "By making it easy for them. A toolkit with logos, templates, a photo library and ready-made copy lowers the barrier enormously. Put everything on one download page and use examples to show how other partners use it. A short [[brandbook|brand book]] works better than a thick document nobody opens. And ask partners now and then what they are missing, so the [[huisstijl|visual identity]] grows with how they actually use it.",
            },
          },
          {
            q: { nl: "Hoe word je als VVV of regiomarketing gevonden door bezoekers?", en: "How does a tourist office or regional marketing organisation get found by visitors?" },
            a: {
              nl: "Met pagina's die de vragen van bezoekers beantwoorden, per thema en per plaats: fietsen, wandelen, overnachten, eten en evenementen. Bezoekers zoeken op 'wandelen in' of 'uitjes met kinderen' plus een regio, en vragen het steeds vaker aan een AI-assistent. Houd de informatie actueel en per seizoen. Met [[seo-content|SEO-content]] en [[geo|GEO]] vergroot je de kans dat Google en AI-assistenten jou als bron noemen, in plaats van een groot boekingsplatform.",
              en: "With pages that answer visitors' questions, by theme and by place: cycling, walking, accommodation, food and events. Visitors search for 'walks in' or 'days out with kids' plus a region, and increasingly ask an AI assistant. Keep the information current and seasonal. With [[seo-content|SEO content]] and [[geo|GEO]] you increase the chance that Google and AI assistants cite you as the source, rather than a large booking platform.",
            },
          },
          {
            q: { nl: "Hoe presenteer je de regio op een internationale beurs?", en: "How do you present the region at an international trade fair?" },
            a: {
              nl: "Met één helder verhaal waarin de regio voorop staat en de deelnemende bedrijven daaronder een plek krijgen. Zorg voor beeld dat van een afstand te lezen is, materiaal in het Engels en een presentatie die elke deelnemer kan gebruiken. Spreek vooraf af hoe je contacten opvolgt, want daar gaat het na de beurs vaak mis. We ontwerpen de [[beurs-signing|beursstand]], de [[presentaties-pitchdecks|presentatie]] en het materiaal als één geheel.",
              en: "With one clear story in which the region comes first and the participating companies get a place underneath. Make sure the visuals can be read from a distance, materials are in English and there is a presentation every participant can use. Agree in advance how you will follow up contacts, because that is often where things go wrong after the fair. We design the [[beurs-signing|stand]], the [[presentaties-pitchdecks|presentation]] and the materials as one whole.",
            },
          },
        ],
      },
      {
        name: { nl: "Sociaal domein & participatie", en: "Social domain & participation" },
        intro: {
          nl: "Voor sociale wijkteams, sociale werkbedrijven, schuldhulpverlening, jongerenwerk en participatietrajecten waarin inwoners hulp zoeken of willen meepraten.",
          en: "For community social teams, sheltered employment companies, debt counselling, youth work and participation processes in which residents seek help or want to have their say.",
        },
        types: [
          { nl: "Sociale wijkteams", en: "Community social teams" },
          { nl: "Sociale werkbedrijven", en: "Sheltered employment companies" },
          { nl: "Schuldhulpverlening", en: "Debt counselling services" },
          { nl: "Jongerenwerk", en: "Youth work organisations" },
        ],
        useCases: [
          {
            title: { nl: "Online participatie", en: "Online participation" },
            text: {
              nl: "Een projectpagina waarop inwoners plannen bekijken, reageren en zich aanmelden voor een bijeenkomst.",
              en: "A project page where residents view plans, respond and sign up for a meeting.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Wegwijzer: waar kan ik terecht?", en: "Signpost: where can I go?" },
            text: {
              nl: "Een paar eenvoudige vragen, en een inwoner ziet welke hulp of regeling bij zijn situatie past, met het juiste loket erbij.",
              en: "A few simple questions, and a resident sees which help or scheme fits their situation, with the right contact point.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "AI-assistent voor vragen van inwoners", en: "AI assistant for residents' questions" },
            text: {
              nl: "Een assistent die veelgestelde vragen beantwoordt op basis van je eigen informatie, met een duidelijke route naar een mens.",
              en: "An assistant that answers frequently asked questions based on your own information, with a clear route to a person.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
          {
            title: { nl: "Campagne in begrijpelijke taal", en: "Campaign in plain language" },
            text: {
              nl: "Boodschappen die aankomen bij mensen die het moeilijk hebben, zonder oordeel en zonder jargon.",
              en: "Messages that reach people who are struggling, without judgement and without jargon.",
            },
            service: "content-marketing-online-ads",
            application: "contentstrategie",
          },
          {
            title: { nl: "Korte video's voor jongeren", en: "Short videos for young people" },
            text: {
              nl: "Jongerenwerkers en jongeren zelf laten zien wat er in de wijk te doen is en waar je terechtkunt. Op de kanalen waar jongeren al zijn, zonder dat het klinkt als de gemeente.",
              en: "Youth workers and young people themselves show what there is to do in the neighbourhood and where to go for help. On the channels young people already use, without sounding like the council.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Positionering van een sociaal werkbedrijf", en: "Positioning a sheltered employment company" },
            text: {
              nl: "Een sociaal werkbedrijf levert vakwerk aan bedrijven. Een heldere positionering laat opdrachtgevers zien wat je kunt, en geeft medewerkers iets waar ze trots op zijn.",
              en: "A sheltered employment company delivers skilled work to businesses. Clear positioning shows clients what you can do, and gives employees something to be proud of.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Webshop voor werk uit eigen werkplaats", en: "Web shop for work from your workshop" },
            text: {
              nl: "Meubels, cadeaupakketten of kringloopvondsten uit eigen werkplaats online verkopen, met een verhaal over wie ze maakt. Bedrijven kunnen er ook relatiegeschenken bestellen.",
              en: "Sell furniture, gift boxes or second-hand finds from your own workshop online, with a story about who makes them. Businesses can order corporate gifts there too.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Iconen die zonder woorden uitleggen", en: "Icons that explain without words" },
            text: {
              nl: "Iconen en illustraties die laten zien waar je terechtkunt en wat je mee moet nemen. Handig voor mensen die minder goed lezen of de taal nog aan het leren zijn.",
              en: "Icons and illustrations that show where to go and what to bring. Useful for people who find reading hard or are still learning the language.",
            },
            service: "grafisch-ontwerp-print",
            application: "illustraties-iconen",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe organiseer je online participatie die inwoners echt gebruiken?", en: "How do you organise online participation that residents actually use?" },
            a: {
              nl: "Maak het concreet en klein. Een vraag als 'wat vindt u van de omgevingsvisie?' levert weinig op. 'Waar wilt u meer groen in deze straat?', met een kaart en een paar beelden, wel. Laat zien wat er met reacties gebeurt, ook als niet alles wordt overgenomen. Combineer online met een inloopavond, want niet iedereen doet het digitaal. Met een [[landingspaginas|projectpagina]] en een [[3d-visualisatie]] van de opties weten mensen waar ze over meepraten.",
              en: "Make it concrete and small. A question like 'what do you think of the spatial vision?' yields little. 'Where would you like more greenery in this street?', with a map and a few images, does. Show what happens with the responses, even if not everything is adopted. Combine online with a drop-in evening, because not everyone does it digitally. With a [[landingspaginas|project page]] and a [[3d-visualisatie|3D visual]] of the options, people know what they are giving their views on.",
            },
          },
          {
            q: { nl: "Hoe help je inwoners de weg te vinden in hulp en regelingen?", en: "How do you help residents find their way through support and schemes?" },
            a: {
              nl: "Door vanuit hun situatie te beginnen en niet vanuit de organisatie. Een inwoner weet niet of hij bij het wijkteam, de schuldhulp of het werkplein moet zijn. Een [[keuzehulp-quiz|keuzehulp]] met een paar eenvoudige vragen wijst de weg naar de juiste hulp, met contactgegevens erbij. Het is een wegwijzer, geen formele beslissing, en dat zeg je er ook duidelijk bij. Schrijf alles op B1-niveau en test het met mensen die er echt gebruik van maken.",
              en: "By starting from their situation, not from the organisation. A resident does not know whether to go to the community team, debt counselling or the employment office. A [[keuzehulp-quiz|signposting tool]] with a few simple questions points the way to the right help, with contact details included. It is a signpost, not a formal decision, and you say so clearly. Write everything at B1 reading level and test it with people who will actually use it.",
            },
          },
          {
            q: { nl: "Kan AI vragen van inwoners beantwoorden zonder privacyrisico's?", en: "Can AI answer residents' questions without privacy risks?" },
            a: {
              nl: "Dat kan, als je het goed afbakent. Een [[ai-chatbots|AI-assistent]] die alleen antwoordt op basis van je eigen, openbare informatie, geen persoonsgegevens vraagt of opslaat en bij twijfel doorverwijst naar een medewerker, is een verantwoorde eerste stap. Kies een oplossing die binnen de EU draait en leg vast hoe je de antwoorden controleert. Begin met één onderwerp, zoals afval of parkeren, en breid uit als het werkt. Met een [[ai-strategie|AI-strategie]] bepalen we samen waar het zinvol is en waar niet.",
              en: "It can, if you scope it well. An [[ai-chatbots|AI assistant]] that only answers from your own public information, does not ask for or store personal data and refers to a staff member when in doubt is a responsible first step. Choose a solution that runs within the EU and document how you check the answers. Start with one topic, such as waste collection or parking, and expand if it works. With an [[ai-strategie|AI strategy]] we decide together where it makes sense and where it does not.",
            },
          },
          {
            q: { nl: "Hoe bereik je mensen met geldzorgen zonder ze af te schrikken?", en: "How do you reach people with money worries without scaring them off?" },
            a: {
              nl: "Met een toon zonder oordeel en een eerste stap die klein voelt. Mensen met geldzorgen schamen zich vaak en stellen hulp uit. Een campagne die herkenning biedt, met gewone situaties en een rustige boodschap als 'je bent niet de enige', werkt beter dan waarschuwingen. Laat zien wat er gebeurt als je contact opneemt en maak het mogelijk om anoniem een vraag te stellen. Een doordachte [[contentstrategie]] en [[copywriting-blogs|teksten]] in begrijpelijke taal maken hier het verschil.",
              en: "With a non-judgemental tone and a first step that feels small. People with money worries are often ashamed and put off getting help. A campaign that offers recognition, with everyday situations and a calm message like 'you are not the only one', works better than warnings. Show what happens when you get in touch and make it possible to ask a question anonymously. A well-thought-out [[contentstrategie|content strategy]] and [[copywriting-blogs|copy]] in plain language make the difference here.",
            },
          },
          {
            q: { nl: "Hoe bereik je jongeren in de wijk?", en: "How do you reach young people in the neighbourhood?" },
            a: {
              nl: "Via hun eigen kanalen en het liefst via hun eigen mensen. Jongeren zitten op TikTok, Instagram en Snapchat en haken af bij alles wat klinkt als een folder van de gemeente. Laat jongerenwerkers en jongeren zelf aan het woord in [[social-video|korte video's]] en houd de toon luchtig en eerlijk. Ga zorgvuldig om met beeld van minderjarigen en vraag altijd toestemming. Met een kleine [[tiktok-ads|TikTok-campagne]] rond een activiteit vergroot je het bereik in de wijk.",
              en: "Through their own channels and preferably through their own people. Young people are on TikTok, Instagram and Snapchat and switch off at anything that sounds like a council leaflet. Let youth workers and young people speak for themselves in [[social-video|short videos]] and keep the tone light and honest. Handle images of minors with care and always ask for consent. With a small [[tiktok-ads|TikTok campaign]] around an activity you increase reach in the neighbourhood.",
            },
          },
          {
            q: { nl: "Hoe schrijf je voor mensen die minder goed lezen?", en: "How do you write for people who find reading difficult?" },
            a: {
              nl: "Kort, concreet en met één boodschap per stuk. Gebruik korte zinnen en gewone woorden, zet de belangrijkste actie bovenaan en laat de rest weg of zet het verderop. [[illustraties-iconen|Iconen]] en een korte video helpen mensen die liever kijken dan lezen. Test teksten bij de doelgroep zelf, want wat jij helder vindt, is dat niet altijd. Met goede [[copywriting-blogs|teksten]] op B1-niveau bereik je veel meer mensen, ook wie wel goed leest.",
              en: "Short, concrete and with one message per piece. Use short sentences and everyday words, put the most important action at the top and leave the rest out or move it further down. [[illustraties-iconen|Icons]] and a short video help people who prefer watching to reading. Test texts with the audience themselves, because what seems clear to you is not always clear to them. With good [[copywriting-blogs|copy]] at B1 reading level you reach far more people, including those who read well.",
            },
          },
          {
            q: { nl: "Hoe laat een sociaal werkbedrijf zien wat het kan voor opdrachtgevers?", en: "How does a sheltered employment company show clients what it can do?" },
            a: {
              nl: "Door zich te presenteren als vakbedrijf, met het sociale verhaal als extra en niet als enige argument. Een opdrachtgever wil weten welke diensten je levert, welke kwaliteit hij kan verwachten, hoe snel je kunt schakelen en hoe je werkt. Geef elke dienst een eigen pagina met echte foto's uit de werkplaats. Met een heldere [[merkstrategie|positionering]] en, voor producten, een [[webshop]] voor bedrijven en particulieren laat je zien dat sociaal en vakkundig prima samengaan.",
              en: "By presenting itself as a skilled business, with the social story as a bonus rather than the only argument. A client wants to know which services you provide, what quality to expect, how quickly you can respond and how you work. Give each service its own page with real photos from the workshop. With clear [[merkstrategie|positioning]] and, for products, a [[webshop|web shop]] for businesses and consumers, you show that social and skilled go together just fine.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Gemeenten", en: "Municipalities" },
      { nl: "Gemeentelijke samenwerkingsverbanden", en: "Inter-municipal partnerships" },
      { nl: "Citymarketingorganisaties", en: "City marketing organisations" },
      { nl: "Centrummanagementorganisaties", en: "Town centre management organisations" },
      { nl: "Provincies", en: "Provinces" },
      { nl: "Waterschappen", en: "Water boards" },
      { nl: "Omgevingsdiensten", en: "Environmental agencies" },
      { nl: "Veiligheidsregio's", en: "Safety regions" },
      { nl: "Rijksdiensten", en: "Central government agencies" },
      { nl: "Uitvoeringsorganisaties", en: "Government agencies" },
      { nl: "Zelfstandige bestuursorganen", en: "Independent public bodies" },
      { nl: "Woningcorporaties", en: "Housing associations" },
      { nl: "Bibliotheken", en: "Libraries" },
      { nl: "Culturele instellingen", en: "Cultural institutions" },
      { nl: "Regionale ontwikkelingsmaatschappijen", en: "Regional development agencies" },
      { nl: "Economic boards", en: "Economic boards" },
      { nl: "Regiomarketingorganisaties", en: "Regional marketing organisations" },
      { nl: "VVV's en toeristische organisaties", en: "Tourist offices and tourism organisations" },
      { nl: "Ondernemersfondsen", en: "Business improvement funds" },
      { nl: "Ondernemersverenigingen", en: "Business associations" },
      { nl: "Sociale wijkteams", en: "Community social teams" },
      { nl: "Sociale werkbedrijven", en: "Sheltered employment companies" },
      { nl: "Schuldhulpverlening", en: "Debt counselling services" },
      { nl: "Jongerenwerk", en: "Youth work organisations" },
    ],
  },
  /* ---------- Agrarisch & Natuur ---------- */
  {
    slug: "agrarisch-natuur",
    title: { nl: "Agrarisch & Natuur", en: "Agriculture & Nature" },
    short: { nl: "Agrarisch", en: "Agriculture" },
    icon: "sprout",
    quote: { nl: "Real products from real land. Let's show it.", en: "Real products from real land. Let's show it." },
    intro: {
      nl: "Boerderijen, tuinbouw, agritech, recreatieboerderijen en natuurorganisaties: wij laten zien wat er op het land gebeurt en zorgen dat klanten de weg naar je erf, webshop of showroom vinden.",
      en: "Farms, horticulture, agri-tech, recreational farms and nature organisations: we show what happens on the land and make sure customers find their way to your farmyard, web shop or showroom.",
    },
    description: {
      nl: "In de agrarische sector werk je met echte producten, echte dieren en echt land. Dat is precies wat consumenten, zakelijke afnemers en bezoekers willen zien. Toch is de website vaak het laatste waar tijd voor is, want de dieren en de oogst gaan voor. M7 helpt boeren, tuinders, agribedrijven en natuurorganisaties om hun verhaal goed te vertellen: van een boerderijwinkel met een webshop tot een agritechbedrijf dat over de grens wil groeien.\n\nVoor Alpacafarm Vorstenbosch maakten we content voor social media en werkten we aan de website, zodat bezoekers zien wat ze er kunnen beleven. We maken dronevideo's van land en kassen, productfotografie en verpakkingen voor streekproducten, en bouwen boekingswidgets voor rondleidingen, workshops of een verblijf op de boerderij. Met lokale SEO word je gevonden op zoekopdrachten als 'boerderijwinkel in de buurt' of 'uitje op de boerderij'.",
      en: "In agriculture you work with real products, real animals and real land. That is exactly what consumers, business buyers and visitors want to see. Yet the website is often the last thing anyone has time for, because the animals and the harvest come first. M7 helps farmers, growers, agri-businesses and nature organisations tell their story well: from a farm shop with a web shop to an agri-tech company that wants to grow across borders.\n\nFor Alpacafarm Vorstenbosch we created social media content and worked on the website, so visitors can see what there is to experience. We shoot drone videos of land and greenhouses, product photography and packaging for local produce, and build booking widgets for tours, workshops or a stay on the farm. With local SEO you get found for searches like 'farm shop near me' or 'farm day out'.",
    },
    challenges: [
      {
        title: { nl: "Weinig tijd voor marketing", en: "Little time for marketing" },
        text: {
          nl: "Het werk op het land gaat altijd voor. Daarom maken we het makkelijk: een website die je in een paar minuten bijwerkt en een contentplanning die past bij het seizoen.",
          en: "The work on the land always comes first. So we keep it easy: a website you can update in a few minutes and a content plan that follows the seasons.",
        },
      },
      {
        title: { nl: "Van erf naar online verkoop", en: "From farmyard to online sales" },
        text: {
          nl: "Klanten willen ook buiten openingstijden bestellen. Een webshop met ophaalmomenten, bezorging in de regio of een abonnement op een groente- of vleespakket maakt dat mogelijk.",
          en: "Customers want to order outside opening hours too. A web shop with pick-up slots, local delivery or a subscription to a vegetable or meat box makes that possible.",
        },
      },
      {
        title: { nl: "Laten zien waar het vandaan komt", en: "Showing where it comes from" },
        text: {
          nl: "Consumenten en afnemers willen weten hoe er wordt geteeld en voor dieren wordt gezorgd. Echte foto's, video en verhalen van het erf bouwen dat vertrouwen op.",
          en: "Consumers and buyers want to know how crops are grown and animals are cared for. Real photos, video and stories from the farm build that trust.",
        },
      },
      {
        title: { nl: "Innovatie uitleggen", en: "Explaining innovation" },
        text: {
          nl: "Agritech en nieuwe teeltmethoden zijn lastig te vatten. Met 3D, animatie en een heldere website begrijpen boeren, investeerders en buitenlandse kopers wat je doet.",
          en: "Agri-tech and new growing methods are hard to grasp. With 3D, animation and a clear website, farmers, investors and foreign buyers understand what you do.",
        },
      },
    ],
    services: ["websites-webshops", "content-marketing-online-ads", "foto-video-3d-animatie", "branding-rebranding", "grafisch-ontwerp-print", "configurators-lead-tools-widgets"],
    applications: ["webshop", "webflow-website", "meertalige-website", "social-media-marketing", "meta-ads", "dronevideo", "productfotografie", "verpakkingsontwerp", "huisstijl", "boekingswidget"],
    /* Mockup in de dienstentegels: eigen werk uit agrarisch (overige diensten: standaard) */
    visuals: {
      "content-marketing-online-ads": { kind: "phone", src: "/media/showcase/alpacafarm/profile-head.webp", label: "Alpacafarm Vorstenbosch" },
    },
    faqs: [
      {
        q: { nl: "Kunnen jullie een webshop bouwen voor onze boerderijwinkel?", en: "Can you build a web shop for our farm shop?" },
        a: {
          nl: "Ja. Met ophaalmomenten, bezorging in de regio, wisselend seizoensaanbod en betalen via iDEAL. We houden het beheer simpel, zodat je het aanbod tussen het werk door bijwerkt.",
          en: "Yes. With pick-up slots, local delivery, a changing seasonal range and online payment. We keep the back end simple, so you can update the range in between jobs.",
        },
      },
      {
        q: { nl: "Maken jullie dronevideo's van boerderijen, kassen en natuurgebieden?", en: "Do you shoot drone videos of farms, greenhouses and nature areas?" },
        a: {
          nl: "Ja. Dronebeelden laten de schaal en de omgeving van je bedrijf zien, voor je website, social media of een bedrijfsfilm. We plannen de opnames rond het seizoen en het weer.",
          en: "Yes. Drone footage shows the scale and surroundings of your business, for your website, social media or a corporate film. We plan the shoots around the season and the weather.",
        },
      },
      {
        q: { nl: "Werken jullie voor agritechbedrijven die internationaal verkopen?", en: "Do you work for agri-tech companies that sell internationally?" },
        a: {
          nl: "Zeker. We bouwen meertalige websites, maken 3D-visualisaties en animaties van machines en systemen, en ontwerpen beursstands en presentaties.",
          en: "Definitely. We build multilingual websites, create 3D visuals and animations of machines and systems, and design trade-show stands and presentations.",
        },
      },
      {
        q: { nl: "Kunnen bezoekers online een activiteit op de boerderij boeken?", en: "Can visitors book an activity on the farm online?" },
        a: {
          nl: "Ja. Met een boekingswidget kiezen bezoekers een activiteit, datum en aantal personen en betalen ze direct. Jij houdt overzicht over de planning en de capaciteit.",
          en: "Yes. With a booking widget visitors choose an activity, date and group size and pay straight away. You keep track of the schedule and capacity.",
        },
      },
      {
        q: { nl: "Hoeveel tijd kost social media ons?", en: "How much time will social media take us?" },
        a: {
          nl: "Minder dan je denkt, als je het slim aanpakt. We maken een planning per seizoen, jij deelt de momenten van het erf en wij maken er content van die bij je merk past. Voor Alpacafarm Vorstenbosch maakten we bijvoorbeeld content voor social media.",
          en: "Less than you think, if you are smart about it. We make a plan per season, you share the moments from the farm and we turn them into content that fits your brand. For Alpacafarm Vorstenbosch, for example, we created social media content.",
        },
      },
    ],
    metaTitle: {
      nl: "Websites, webshops & content voor agrarisch en natuur | M7",
      en: "Websites, web shops & content for agriculture and nature | M7",
    },
    metaDescription: {
      nl: "M7 bouwt websites, webshops, boekingswidgets en content voor boerderijen, boerderijwinkels, tuinbouw, agritech, recreatieboerderijen en natuurorganisaties.",
      en: "M7 builds websites, web shops, booking widgets and content for farms, farm shops, horticulture, agri-tech, recreational farms and nature organisations.",
    },
    segments: [
      {
        name: { nl: "Boerderijwinkels & streekproducten", en: "Farm shops & local produce" },
        intro: {
          nl: "Voor boerderijwinkels, streekproducenten, fruittelers, zuivelboerderijen en veehouders die rechtstreeks verkopen aan consumenten, restaurants of winkels in de regio.",
          en: "For farm shops, local food producers, fruit growers, dairy farms and livestock farmers who sell directly to consumers, restaurants or shops in the region.",
        },
        types: [
          { nl: "Boerderijwinkels", en: "Farm shops" },
          { nl: "Streekproducenten", en: "Local food producers" },
          { nl: "Fruittelers", en: "Fruit growers" },
          { nl: "Zuivelboerderijen", en: "Dairy farms" },
        ],
        useCases: [
          {
            title: { nl: "Webshop voor de boerderijwinkel", en: "Web shop for the farm shop" },
            text: {
              nl: "Bestellen met ophaalmomenten of bezorging in de regio, met seizoensaanbod dat je zelf bijwerkt.",
              en: "Ordering with pick-up slots or local delivery, with a seasonal range you update yourself.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Verpakking en etiket voor streekproducten", en: "Packaging and labels for local produce" },
            text: {
              nl: "Een etiket dat opvalt in het schap van de supermarkt of delicatessenzaak, met alle verplichte informatie netjes verwerkt.",
              en: "A label that stands out on the shelf of a supermarket or deli, with all the required information neatly included.",
            },
            service: "grafisch-ontwerp-print",
            application: "verpakkingsontwerp",
          },
          {
            title: { nl: "Gevonden worden in de buurt", en: "Getting found nearby" },
            text: {
              nl: "Een sterk Google Bedrijfsprofiel met openingstijden, foto's en reviews, voor zoekopdrachten als 'boerderijwinkel in de buurt'.",
              en: "A strong Google Business Profile with opening hours, photos and reviews, for searches like 'farm shop near me'.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Productfotografie die trek geeft", en: "Product photography that makes you hungry" },
            text: {
              nl: "Kaas, fruit, vlees of sap in beeld zoals het is: vers en eerlijk.",
              en: "Cheese, fruit, meat or juice shown as it is: fresh and honest.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Posts uit de stal en de boomgaard", en: "Posts from the barn and the orchard" },
            text: {
              nl: "De eerste aardbeien, kalfjes in de wei, kaas die rijpt: korte posts uit het dagelijks werk laten zien waar je product vandaan komt. Met een planning die het seizoen volgt.",
              en: "The first strawberries, calves in the meadow, cheese ripening: short posts from daily work show where your product comes from. With a plan that follows the seasons.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Weekmail met het verse aanbod", en: "Weekly email with fresh produce" },
            text: {
              nl: "Een korte mail met wat er deze week vers is, de ophaalmomenten en af en toe een recept. Zo komen vaste klanten terug zonder dat jij iedereen apart hoeft te appen.",
              en: "A short email with what is fresh this week, the pick-up times and the occasional recipe. That way regular customers come back without you having to message everyone separately.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Een merk voor je erf", en: "A brand for your farm" },
            text: {
              nl: "Een logo en huisstijl die het verhaal van je boerderij vertellen, van het bord aan de weg tot de etiketten, de webshop en de kratten op de markt.",
              en: "A logo and identity that tell your farm's story, from the sign by the road to the labels, the web shop and the crates at the market.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Bestelportaal voor horeca en winkels", en: "Ordering portal for restaurants and shops" },
            text: {
              nl: "Restaurants en delicatessenzaken bestellen zelf uit je actuele aanbod, met hun eigen prijzen en vaste leverdagen. Jij hoeft geen bestellingen meer uit appjes en voicemails te halen.",
              en: "Restaurants and delis order from your current range themselves, with their own prices and fixed delivery days. You no longer have to piece orders together from messages and voicemails.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe zet ik een webshop op voor mijn boerderijwinkel?", en: "How do I set up a web shop for my farm shop?" },
            a: {
              nl: "Begin klein, met wat je al verkoopt en hoe klanten het willen ophalen. De meeste boerderijwinkels starten met vaste ophaalmomenten en bezorging in de directe omgeving. Een [[webshop]] met een beperkt, wisselend assortiment, voorraad per product en betalen via iDEAL is daarvoor genoeg. Belangrijk is dat jij het zelf snel kunt bijwerken, want de oogst wacht niet op een webbouwer. Later kun je uitbreiden met pakketten, abonnementen of verkoop aan restaurants.",
              en: "Start small, with what you already sell and how customers want to collect it. Most farm shops start with fixed pick-up slots and delivery in the immediate area. A [[webshop|web shop]] with a limited, changing range, stock per product and online payment is enough for that. What matters is that you can update it quickly yourself, because the harvest does not wait for a web developer. Later you can expand with boxes, subscriptions or sales to restaurants.",
            },
          },
          {
            q: { nl: "Hoe word ik gevonden op 'boerderijwinkel in de buurt'?", en: "How do I get found for 'farm shop near me'?" },
            a: {
              nl: "Vooral via Google Maps. Een compleet Google Bedrijfsprofiel met de juiste categorie, openingstijden, foto's van je winkel en producten, en reviews die je beantwoordt, is de basis. Houd de openingstijden actueel, ook in het seizoen en rond feestdagen. Op je website helpt een pagina per productgroep of seizoen, met de plaatsen in de buurt erbij. Met [[lokale-seo|lokale SEO]] bouwen we dat goed op. Zet ook je eierautomaat of honingkastje erop, want ook daar zoeken mensen naar.",
              en: "Mainly through Google Maps. A complete Google Business Profile with the right category, opening hours, photos of your shop and products, and reviews you reply to is the foundation. Keep opening hours up to date, also during the season and around holidays. On your website a page per product group or season helps, mentioning the nearby towns. With [[lokale-seo|local SEO]] we build that up properly. Add your egg vending machine or honesty box too, because people search for those as well.",
            },
          },
          {
            q: { nl: "Wat maakt een goed etiket voor een streekproduct?", en: "What makes a good label for a local product?" },
            a: {
              nl: "Het moet in één oogopslag vertellen wat het is en waar het vandaan komt, en tegelijk alle verplichte informatie bevatten, zoals ingrediënten, allergenen, houdbaarheid en gewicht. Gebruik je eigen verhaal: de naam van het erf, een herkenbare kleur, een illustratie van het landschap. Dat onderscheidt je van het huismerk ernaast. We ontwerpen het [[verpakkingsontwerp|etiket]] zo dat het werkt op potten, flessen en dozen, en dat je drukker er zonder vragen mee aan de slag kan.",
              en: "It has to say at a glance what it is and where it comes from, while including all the required information, such as ingredients, allergens, best-before date and weight. Use your own story: the name of the farm, a recognisable colour, an illustration of the landscape. That sets you apart from the own-brand product next to it. We design the [[verpakkingsontwerp|label]] so it works on jars, bottles and boxes, and so your printer can get started without questions.",
            },
          },
          {
            q: { nl: "Kan ik groente- of vleespakketten als abonnement verkopen?", en: "Can I sell vegetable or meat boxes as a subscription?" },
            a: {
              nl: "Ja, en dat geeft rust in je planning. Klanten kiezen een pakket en een frequentie, betalen automatisch en halen op of krijgen het bezorgd. Jij weet vooraf hoeveel je nodig hebt. Een [[webshop]] met abonnementen regelt de betalingen, pauzes tijdens de vakantie en wijzigingen zonder dat jij lijstjes bijhoudt. Met een korte [[e-mailmarketing|mail]] over wat er deze week in het pakket zit, blijven klanten betrokken en nieuwsgierig.",
              en: "Yes, and it brings calm to your planning. Customers choose a box and a frequency, pay automatically and collect or have it delivered. You know in advance how much you need. A [[webshop|web shop]] with subscriptions handles payments, holiday pauses and changes without you keeping lists. With a short [[e-mailmarketing|email]] about what is in the box this week, customers stay engaged and curious.",
            },
          },
          {
            q: { nl: "Hoe verkoop ik mijn streekproducten aan restaurants en winkels?", en: "How do I sell my local produce to restaurants and shops?" },
            a: {
              nl: "Begin met persoonlijk contact en maak het daarna makkelijk om te blijven bestellen. Een verzorgde [[presentaties-pitchdecks|presentatie]] of productkaart met je verhaal, assortiment en levermogelijkheden helpt bij het eerste gesprek. Goede foto's van je producten doen de rest. Bestellen vaste afnemers regelmatig, dan bespaart een eenvoudig [[klantportaal|bestelportaal]] je veel heen-en-weer appen. Zo blijft het persoonlijk, zonder dat de administratie je avonden opslokt.",
              en: "Start with personal contact and then make it easy to keep ordering. A polished [[presentaties-pitchdecks|presentation]] or product sheet with your story, range and delivery options helps in the first conversation. Good photos of your products do the rest. If regular buyers order often, a simple [[klantportaal|ordering portal]] saves you a lot of back-and-forth messaging. That keeps it personal, without the admin eating up your evenings.",
            },
          },
          {
            q: { nl: "Wat moet ik posten als boer of streekproducent?", en: "What should I post as a farmer or local producer?" },
            a: {
              nl: "Vooral wat je toch al doet: de oogst, de dieren, het weer, de mensen achter het product en wat er deze week in de winkel ligt. Perfecte foto's zijn niet nodig, echte momenten werken beter. Maak met een simpele [[contentstrategie]] een planning per seizoen, zodat je weet wat je wanneer deelt. Met een kwartiertje per week en een vaste rubriek kom je al ver. Wil je meer bereik, dan helpt [[social-media-marketing|social media marketing]] met af en toe een advertentie in de regio.",
              en: "Mostly what you are already doing: the harvest, the animals, the weather, the people behind the product and what is in the shop this week. Perfect photos are not needed; real moments work better. Use a simple [[contentstrategie|content strategy]] to make a plan per season, so you know what to share when. A quarter of an hour a week and a regular feature already get you a long way. If you want more reach, [[social-media-marketing|social media marketing]] with the occasional local ad helps.",
            },
          },
          {
            q: { nl: "Heb ik als boerderijwinkel een eigen logo en huisstijl nodig?", en: "Does a farm shop need its own logo and visual identity?" },
            a: {
              nl: "Het helpt meer dan je denkt. Een herkenbaar logo en vaste kleuren zorgen dat mensen je bord aan de weg, je etiketten en je webshop met elkaar verbinden. Daardoor herkennen ze je product ook sneller in een delicatessenzaak of supermarkt. Het hoeft geen groot traject te zijn: een goed [[logo-ontwerp|logo]], een paar kleuren en een sjabloon voor etiketten zijn een prima start. Die [[huisstijl]] bouw je later uit als je groeit.",
              en: "It helps more than you think. A recognisable logo and fixed colours make people connect your roadside sign, your labels and your web shop. That also makes your product easier to spot in a deli or supermarket. It does not have to be a big project: a good [[logo-ontwerp|logo]], a few colours and a label template are a fine start. You expand that [[huisstijl|visual identity]] later as you grow.",
            },
          },
        ],
      },
      {
        name: { nl: "Tuinbouw & tuincentra", en: "Horticulture & garden centres" },
        intro: {
          nl: "Voor glastuinbouwbedrijven, boomkwekerijen, sierteeltbedrijven en tuincentra, van de teler die exporteert tot het tuincentrum om de hoek.",
          en: "For greenhouse growers, tree nurseries, ornamental plant growers and garden centres, from the grower who exports to the garden centre around the corner.",
        },
        types: [
          { nl: "Glastuinbouwbedrijven", en: "Greenhouse growers" },
          { nl: "Boomkwekerijen", en: "Tree nurseries" },
          { nl: "Sierteeltbedrijven", en: "Ornamental plant growers" },
          { nl: "Tuincentra", en: "Garden centres" },
        ],
        useCases: [
          {
            title: { nl: "Meertalige website voor export", en: "Multilingual website for export" },
            text: {
              nl: "Je assortiment en werkwijze helder in het Engels, Duits of andere talen, voor kopers over de grens.",
              en: "Your range and way of working clearly presented in English, German or other languages, for buyers abroad.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
          {
            title: { nl: "Dronevideo van de kassen", en: "Drone video of the greenhouses" },
            text: {
              nl: "De schaal en de techniek van je bedrijf in één beeld, voor website, beurs en werving.",
              en: "The scale and technology of your business in one shot, for your website, trade shows and recruitment.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
          {
            title: { nl: "Bestelportaal met actueel aanbod", en: "Ordering portal with current stock" },
            text: {
              nl: "Zakelijke klanten zien je actuele aanbod en bestellen online, gekoppeld aan je bedrijfssysteem.",
              en: "Business customers see your current availability and order online, linked to your business system.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Seizoenscampagnes voor het tuincentrum", en: "Seasonal campaigns for the garden centre" },
            text: {
              nl: "Voorjaar, moestuin, kerst: campagnes in de buurt van je winkel op het moment dat mensen eraan denken.",
              en: "Spring, vegetable gardens, Christmas: campaigns around your store at the moment people start thinking about it.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Webshop met afhalen in de winkel", en: "Web shop with in-store pick-up" },
            text: {
              nl: "Planten, potgrond en tuinmeubels online bestellen, met afhalen in de winkel of bezorging in de regio. Waar mogelijk gekoppeld aan je kassasysteem, zodat de voorraad klopt.",
              en: "Order plants, compost and garden furniture online, with in-store pick-up or local delivery. Linked to your till system where possible, so the stock is correct.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Werven voor de kas en de kwekerij", en: "Recruiting for the greenhouse and nursery" },
            text: {
              nl: "Teeltmedewerkers, seizoenskrachten en technici vind je met een werken-bij pagina die het echte werk laat zien: de kas, de techniek en het team. Ook in andere talen.",
              en: "Find growers, seasonal workers and technicians with a careers page that shows the real work: the greenhouse, the technology and the team. In other languages too.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Hoezen, labels en potstekers", en: "Sleeves, labels and plant tags" },
            text: {
              nl: "Een hoes of potsteker met verzorgingstips, een QR-code en je merk, zodat de klant in het tuincentrum ziet wie de plant heeft gekweekt en hoe hij hem gezond houdt.",
              en: "A sleeve or plant tag with care tips, a QR code and your brand, so the shopper in the garden centre sees who grew the plant and how to keep it healthy.",
            },
            service: "grafisch-ontwerp-print",
            application: "verpakkingsontwerp",
          },
          {
            title: { nl: "Plantenkeuzehulp", en: "Plant finder" },
            text: {
              nl: "Zon of schaduw, balkon of tuin, veel of weinig tijd: een keuzehulp die klanten naar de juiste planten leidt en ze daarna naar de winkel of webshop stuurt.",
              en: "Sun or shade, balcony or garden, lots of time or little: a finder that leads customers to the right plants and then sends them to the shop or web shop.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe presenteer je een kwekerij of glastuinbouwbedrijf aan buitenlandse kopers?", en: "How do you present a nursery or greenhouse business to foreign buyers?" },
            a: {
              nl: "Met een website die in hun taal laat zien wat je teelt, hoe je werkt en wat je levert. Kopers willen assortiment, beschikbaarheid, kwaliteit en certificeringen snel kunnen vinden. Goede foto's en een dronevideo van je bedrijf geven een eerste indruk van schaal en professionaliteit. Een [[meertalige-website|meertalige website]] die per land gevonden wordt, plus een verzorgde [[presentaties-pitchdecks|presentatie]] voor beurzen en gesprekken, houdt je verhaal overeind als je zelf niet aan tafel zit.",
              en: "With a website that shows, in their language, what you grow, how you work and what you supply. Buyers want to find range, availability, quality and certifications quickly. Good photos and a drone video of your business give a first impression of scale and professionalism. A [[meertalige-website|multilingual website]] that gets found in each country, plus a polished [[presentaties-pitchdecks|presentation]] for trade shows and meetings, keeps your story standing when you are not at the table yourself.",
            },
          },
          {
            q: { nl: "Kunnen zakelijke klanten online bestellen uit ons actuele aanbod?", en: "Can business customers order online from our current stock?" },
            a: {
              nl: "Ja. In een [[klantportaal]] zien vaste afnemers het actuele aanbod met hun eigen prijzen, plaatsen ze bestellingen en zien ze eerdere orders terug. Het aanbod komt via een [[api-koppelingen|koppeling]] uit je bedrijfssysteem, zodat je niets dubbel bijhoudt. Dat scheelt telefoontjes, mailtjes en fouten bij het overtypen. We beginnen met de belangrijkste functies en bouwen verder op basis van wat je klanten echt gebruiken.",
              en: "Yes. In a [[klantportaal|customer portal]] regular buyers see your current availability with their own prices, place orders and look back at previous orders. The availability comes from your business system through an [[api-koppelingen|integration]], so you do not keep anything twice. That saves calls, emails and typing errors. We start with the most important features and build on based on what your customers actually use.",
            },
          },
          {
            q: { nl: "Hoe trekt een tuincentrum meer bezoekers?", en: "How does a garden centre attract more visitors?" },
            a: {
              nl: "Door in te spelen op het seizoen en het moment. In het voorjaar denken mensen aan de moestuin, in het najaar aan bollen en rond december aan kerst. Laat met korte video's en social posts zien wat er nu te beleven valt, en zet rond die pieken lokale advertenties in. Een website met actuele workshops, evenementen en openingstijden doet de rest. Met [[social-media-marketing|social media]] en [[meta-ads|Meta Ads]] bereik je mensen in je regio op het moment dat ze zin krijgen in de tuin.",
              en: "By responding to the season and the moment. In spring people think about vegetable gardens, in autumn about bulbs and around December about Christmas. Use short videos and social posts to show what there is to see and do right now, and run local ads around those peaks. A website with current workshops, events and opening hours does the rest. With [[social-media-marketing|social media]] and [[meta-ads|Meta Ads]] you reach people in your area at the moment they feel like gardening.",
            },
          },
          {
            q: { nl: "Heeft een tuincentrum een webshop nodig?", en: "Does a garden centre need a web shop?" },
            a: {
              nl: "Niet altijd voor het hele assortiment, wel vaak voor een deel. Veel klanten willen thuis kijken, reserveren en dan ophalen, zeker in drukke weken in het voorjaar. Begin bijvoorbeeld met tuinmeubels, cadeaukaarten en seizoensproducten, met afhalen in de winkel en bezorging in de regio. Een [[webshop]] die waar mogelijk aan je voorraad is gekoppeld, voorkomt teleurstelling. Ook als iemand uiteindelijk in de winkel koopt, begint de keuze vaak online.",
              en: "Not always for the whole range, but often for part of it. Many customers want to browse at home, reserve and then collect, especially during busy weeks in spring. Start, for example, with garden furniture, gift cards and seasonal products, with in-store pick-up and local delivery. A [[webshop|web shop]] linked to your stock where possible prevents disappointment. Even when someone ends up buying in the store, the choice often starts online.",
            },
          },
          {
            q: { nl: "Hoe vind je personeel voor de kas of kwekerij?", en: "How do you find staff for the greenhouse or nursery?" },
            a: {
              nl: "Laat zien hoe het werk echt is en maak solliciteren makkelijk. Foto's en korte video's van de kas, de techniek en collega's zeggen meer dan een lijst eisen. Werk je met internationale medewerkers, zet de vacatures dan ook in hun taal op een [[meertalige-website|meertalige vacaturepagina]]. Met [[employer-branding|employer branding]] en gerichte advertenties in de regio bereik je ook mensen die nog niet aan de tuinbouw dachten.",
              en: "Show what the work is really like and make applying easy. Photos and short videos of the greenhouse, the technology and colleagues say more than a list of requirements. If you work with international staff, put the vacancies in their language too on a [[meertalige-website|multilingual careers page]]. With [[employer-branding|employer branding]] and targeted ads in the region you also reach people who had not thought about horticulture yet.",
            },
          },
          {
            q: { nl: "Hoe laat je als kweker je eigen merk zien bij de consument?", en: "How does a grower show its own brand to consumers?" },
            a: {
              nl: "Via het product zelf. Een hoes, label of potsteker met je naam, verzorgingstips en een QR-code naar een eigen [[landingspaginas|landingspagina]] verbindt de plant in het tuincentrum met jouw verhaal. Op die pagina vertel je hoe je teelt, geef je tips en verwijs je naar verkooppunten. Met goed [[verpakkingsontwerp]] en af en toe social content bouw je zo een merk op, ook als je niet zelf aan consumenten verkoopt.",
              en: "Through the product itself. A sleeve, label or plant tag with your name, care tips and a QR code to your own [[landingspaginas|landing page]] connects the plant in the garden centre to your story. On that page you explain how you grow, share tips and point to stockists. With good [[verpakkingsontwerp|packaging design]] and some social content you build a brand that way, even if you do not sell to consumers yourself.",
            },
          },
        ],
      },
      {
        name: { nl: "Recreatie & beleving", en: "Recreation & farm experiences" },
        intro: {
          nl: "Voor recreatieboerderijen, dierenboerderijen, pluktuinen, boerencampings en zorgboerderijen waar bezoekers iets willen beleven, van een rondleiding tot een kinderfeestje.",
          en: "For recreational farms, animal farms, pick-your-own gardens, farm campsites and care farms where visitors want to experience something, from a guided tour to a children's party.",
        },
        types: [
          { nl: "Recreatieboerderijen", en: "Recreational farms" },
          { nl: "Alpaca- en dierenboerderijen", en: "Alpaca and animal farms" },
          { nl: "Pluktuinen", en: "Pick-your-own gardens" },
          { nl: "Boerencampings", en: "Farm campsites" },
          { nl: "Zorgboerderijen", en: "Care farms" },
        ],
        useCases: [
          {
            title: { nl: "Activiteiten online boeken", en: "Booking activities online" },
            text: {
              nl: "Bezoekers kiezen een rondleiding, workshop of arrangement, met datum, aantal personen en directe betaling.",
              en: "Visitors choose a tour, workshop or package, with date, group size and direct payment.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Social media uit het dagelijks leven", en: "Social media from everyday farm life" },
            text: {
              nl: "Het erf, de dieren en de seizoenen als content, zoals de social media content die we voor Alpacafarm Vorstenbosch maakten.",
              en: "The farmyard, the animals and the seasons as content, like the social media content we created for Alpacafarm Vorstenbosch.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Korte video's van de beleving", en: "Short videos of the experience" },
            text: {
              nl: "Een wandeling, een kinderfeestje of een workshop in een paar seconden, zodat mensen zien wat ze kunnen verwachten.",
              en: "A walk, a children's party or a workshop in a few seconds, so people see what to expect.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Website met alle activiteiten", en: "A website with all activities" },
            text: {
              nl: "Arrangementen, openingstijden en route overzichtelijk bij elkaar, met een duidelijke knop om te boeken.",
              en: "Packages, opening hours and directions clearly together, with an obvious button to book.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Een pagina per uitje", en: "A page per day out" },
            text: {
              nl: "Van boerengolf tot kinderfeestje of pluktuin: een eigen pagina per activiteit, zodat je gevonden wordt op precies het uitje dat mensen in de buurt zoeken.",
              en: "From farm golf to a children's party or pick-your-own: a separate page per activity, so you get found for exactly the day out people nearby are looking for.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Groepsarrangement samenstellen", en: "Building a group package" },
            text: {
              nl: "Bedrijven, families en verenigingen stellen zelf een dagje samen: activiteit, lunch en aantal personen. Ze zien direct een prijsindicatie en jij krijgt een complete aanvraag.",
              en: "Companies, families and clubs put together their own day: activity, lunch and group size. They see a price estimate straight away and you receive a complete enquiry.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Folder en plattegrond van het erf", en: "Leaflet and map of the farm" },
            text: {
              nl: "Een folder met activiteiten voor campings en VVV's in de buurt, en een plattegrond van het erf die bezoekers meeneemt langs de dieren, de speeltuin en het terras.",
              en: "A leaflet with activities for nearby campsites and tourist offices, and a map of the farm that takes visitors past the animals, the playground and the terrace.",
            },
            service: "grafisch-ontwerp-print",
            application: "flyers-posters",
          },
          {
            title: { nl: "Na het bezoek: review en nieuwsbrief", en: "After the visit: review and newsletter" },
            text: {
              nl: "Na een bezoek automatisch een bedankje met een vraag om een review, en later een seintje als de lammetjes er zijn of de pluktuin weer opengaat.",
              en: "After a visit, an automatic thank-you with a request for a review, and later a heads-up when the lambs arrive or the pick-your-own garden reopens.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe vul je activiteiten en arrangementen via de website?", en: "How do you fill activities and packages through the website?" },
            a: {
              nl: "Maak boeken net zo makkelijk als kijken. Bezoekers zien wat er te doen is, wanneer, voor wie en wat het kost, en boeken met een paar klikken. Een [[boekingswidget]] met beschikbaarheid per activiteit, groepsgrootte en betalen via iDEAL voorkomt dubbele boekingen en appjes met 'is er zaterdag nog plek?'. Automatische bevestigingen met route en praktische info maken het compleet. Zo houd jij je handen vrij voor de dieren en de gasten.",
              en: "Make booking as easy as browsing. Visitors see what there is to do, when, for whom and what it costs, and book in a few clicks. A [[boekingswidget|booking widget]] with availability per activity, group size and online payment prevents double bookings and messages asking 'any room left on Saturday?'. Automatic confirmations with directions and practical info complete the picture. That keeps your hands free for the animals and the guests.",
            },
          },
          {
            q: { nl: "Werkt social media voor een recreatie- of dierenboerderij?", en: "Does social media work for a recreational or animal farm?" },
            a: {
              nl: "Ja, juist voor jou. Dieren, seizoenen en het leven op het erf zijn content waar mensen graag naar kijken. Het gaat niet om perfecte plaatjes, maar om echte momenten: een pasgeboren lammetje, de eerste wandeling van het jaar, het erf in kerstsfeer. Voor Alpacafarm Vorstenbosch maakten we content voor social media rond de alpaca's en de activiteiten op de farm. Met [[social-media-marketing|social media marketing]] en af en toe een advertentie in de regio vul je je agenda.",
              en: "Yes, especially for you. Animals, seasons and life on the farm are content people love to watch. It is not about perfect pictures, but about real moments: a newborn lamb, the first walk of the year, the farmyard in Christmas spirit. For Alpacafarm Vorstenbosch we created social media content around the alpacas and the activities on the farm. With [[social-media-marketing|social media marketing]] and the occasional local ad you fill your calendar.",
            },
          },
          {
            q: { nl: "Hoe word je gevonden op 'uitje op de boerderij' of 'kinderfeestje boerderij'?", en: "How do you get found for 'farm day out' or 'farm children's party'?" },
            a: {
              nl: "Met een pagina per activiteit die precies beantwoordt wat mensen zoeken: wat doe je, voor welke leeftijd, hoe lang duurt het, wat kost het en waar is het. Combineer dat met een compleet Google Bedrijfsprofiel en reviews van bezoekers. Veel mensen zoeken met hun regio erbij, dus noem de plaatsen in de buurt. Met [[lokale-seo|lokale SEO]] en [[seo-content|SEO-content]] kom je in beeld bij ouders, bedrijven en groepen die een uitje zoeken.",
              en: "With a page per activity that answers exactly what people are looking for: what do you do, for which age, how long does it take, what does it cost and where is it. Combine that with a complete Google Business Profile and reviews from visitors. Many people search with their region included, so mention the nearby towns. With [[lokale-seo|local SEO]] and [[seo-content|SEO content]] you show up for parents, companies and groups looking for a day out.",
            },
          },
          {
            q: { nl: "Hoe trek je bedrijfsuitjes en groepen naar de boerderij?", en: "How do you attract company outings and groups to the farm?" },
            a: {
              nl: "Geef groepen een eigen plek op je website, met arrangementen, capaciteit, eten en drinken, en wat er bij slecht weer gebeurt. Een [[offerte-calculator|arrangementencalculator]] laat organisatoren zelf een dag samenstellen en levert een complete aanvraag op. Zoektermen als 'bedrijfsuitje Brabant' of 'teamuitje op de boerderij' vang je goed op met [[google-ads|Google Ads]] en een pagina per arrangement. Foto's van echte groepen werken beter dan alleen de dieren.",
              en: "Give groups their own place on your website, with packages, capacity, food and drink, and what happens in bad weather. A [[offerte-calculator|package calculator]] lets organisers put together a day themselves and produces a complete enquiry. Search terms like 'company outing Brabant' or 'team day out on a farm' are well covered with [[google-ads|Google Ads]] and a page per package. Photos of real groups work better than just the animals.",
            },
          },
          {
            q: { nl: "Hoe krijg je meer reviews van bezoekers?", en: "How do you get more reviews from visitors?" },
            a: {
              nl: "Vraag erom op het juiste moment en maak het makkelijk. Een dag na het bezoek, als de herinnering nog vers is, werkt een korte mail met een directe link naar je Google-profiel goed. Een kaartje met een QR-code bij de uitgang helpt ook. Met [[e-mailmarketing]] gaat het verzoek automatisch na elke boeking. Reageer op reviews, want toekomstige bezoekers lezen mee, en reviews helpen je [[lokale-seo|lokale vindbaarheid]].",
              en: "Ask at the right moment and make it easy. A day after the visit, while the memory is fresh, a short email with a direct link to your Google profile works well. A card with a QR code at the exit helps too. With [[e-mailmarketing|email marketing]] the request goes out automatically after every booking. Reply to reviews, because future visitors read along, and reviews help your [[lokale-seo|local visibility]].",
            },
          },
          {
            q: { nl: "Hoe leg je op je website uit wat een zorgboerderij biedt?", en: "How do you explain on your website what a care farm offers?" },
            a: {
              nl: "Schrijf voor twee groepen: deelnemers en hun familie, en verwijzers zoals consulenten en begeleiders. De eerste groep wil weten hoe een dag eruitziet, welk werk er is en wie de begeleiders zijn. De tweede groep zoekt naar doelgroepen, begeleiding en hoe aanmelding en financiering in grote lijnen werken. Geef beide een eigen route op een rustige [[webflow-website|website]], met foto's van het erf en [[copywriting-blogs|teksten]] in gewone taal.",
              en: "Write for two groups: participants and their families, and referrers such as care coordinators and support workers. The first group wants to know what a day looks like, what work there is and who the supervisors are. The second group looks for target groups, support and how registration and funding broadly work. Give both their own route on a calm [[webflow-website|website]], with photos of the farm and [[copywriting-blogs|copy]] in plain language.",
            },
          },
        ],
      },
      {
        name: { nl: "Agritech & toelevering", en: "Agri-tech & suppliers" },
        intro: {
          nl: "Voor agritechbedrijven, landbouwmechanisatie, stalinrichters, veevoer- en toeleveranciers en loonwerkers die boeren en tuinders verder helpen met techniek, producten en diensten.",
          en: "For agri-tech companies, agricultural machinery dealers, livestock housing suppliers, feed and input suppliers and agricultural contractors that help farmers and growers with technology, products and services.",
        },
        types: [
          { nl: "Agritechbedrijven", en: "Agri-tech companies" },
          { nl: "Landbouwmechanisatiebedrijven", en: "Agricultural machinery dealers" },
          { nl: "Stalinrichters", en: "Livestock housing suppliers" },
          { nl: "Loonwerkbedrijven", en: "Agricultural contractors" },
        ],
        useCases: [
          {
            title: { nl: "3D-visualisatie van machines en systemen", en: "3D visuals of machines and systems" },
            text: {
              nl: "Laat zien hoe een machine, robot of stalsysteem werkt, ook als het nog in ontwikkeling is.",
              en: "Show how a machine, robot or housing system works, even while it is still in development.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Configurator voor stalinrichting of machines", en: "Configurator for livestock housing or machinery" },
            text: {
              nl: "Boeren stellen zelf hun opstelling samen en jij krijgt een aanvraag met de juiste maten en opties.",
              en: "Farmers put together their own set-up and you receive an enquiry with the right dimensions and options.",
            },
            service: "configurators-lead-tools-widgets",
            application: "productconfigurator",
          },
          {
            title: { nl: "Dashboard of app voor bedrijfsdata", en: "Dashboard or app for farm data" },
            text: {
              nl: "Sensordata, opbrengsten of diergegevens overzichtelijk voor de boer, op kantoor en in de stal.",
              en: "Sensor data, yields or animal data clearly presented for the farmer, in the office and in the barn.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
          {
            title: { nl: "Beursstand voor landbouwbeurzen", en: "Stand for agricultural trade shows" },
            text: {
              nl: "Een stand die opvalt op een drukke beurs, met beeld en boodschap die van een afstand te lezen zijn.",
              en: "A stand that stands out at a busy show, with imagery and a message that can be read from a distance.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
          {
            title: { nl: "Meertalige site voor dealers en export", en: "Multilingual site for dealers and export" },
            text: {
              nl: "Productinformatie, specificaties en dealerlocaties in meerdere talen, zodat boeren en dealers in andere landen je net zo goed begrijpen als klanten in Nederland.",
              en: "Product information, specifications and dealer locations in several languages, so farmers and dealers abroad understand you as well as customers at home.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
          {
            title: { nl: "Uitnodigen voor een demodag", en: "Invitations for a demo day" },
            text: {
              nl: "Een demodag of open huis vul je met gerichte advertenties voor boeren en loonwerkers in je regio, plus een aanmeldpagina met datum, programma en route.",
              en: "Fill a demo day or open house with targeted ads for farmers and contractors in your region, plus a sign-up page with date, programme and directions.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "App voor werkbonnen en uren", en: "App for job sheets and hours" },
            text: {
              nl: "Monteurs en loonwerkers geven werkbonnen, uren, percelen en foto's direct door vanaf het land of uit de stal, ook zonder bereik. Geen papier en geen overtypen op kantoor.",
              en: "Technicians and contractors submit job sheets, hours, fields and photos straight from the field or the barn, even without signal. No paper and no retyping at the office.",
            },
            service: "web-apps-portals-apps",
            application: "mobiele-app",
          },
          {
            title: { nl: "AI-assistent voor service en onderdelen", en: "AI assistant for service and parts" },
            text: {
              nl: "Monteurs en klanten vinden sneller het juiste onderdeel of de oplossing voor een storing, met een assistent die handleidingen en servicehistorie doorzoekt.",
              en: "Technicians and customers find the right part or the fix for a fault faster, with an assistant that searches manuals and service history.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe leg je een agritechproduct uit aan boeren?", en: "How do you explain an agri-tech product to farmers?" },
            a: {
              nl: "Praktisch en zonder hype. Een boer wil weten wat het oplevert in tijd, werk of opbrengst, hoe betrouwbaar het is en wat er gebeurt als het stuk gaat. Laat het product in actie zien op een echt bedrijf, met een boer die vertelt hoe het werkt. Een [[3d-visualisatie]] of [[motion-design|animatie]] helpt om de techniek binnenin te laten zien. Houd teksten nuchter en concreet. Boeren zijn kritische kopers, en dat is maar goed ook.",
              en: "Practically and without hype. A farmer wants to know what it saves in time, labour or yield, how reliable it is and what happens when it breaks down. Show the product in action on a real farm, with a farmer explaining how it works. A [[3d-visualisatie|3D visual]] or [[motion-design|animation]] helps show the technology inside. Keep the copy down-to-earth and concrete. Farmers are critical buyers, and rightly so.",
            },
          },
          {
            q: { nl: "Is een configurator handig voor stalinrichting of landbouwmachines?", en: "Is a configurator useful for livestock housing or farm machinery?" },
            a: {
              nl: "Ja, als je product veel varianten en opties heeft. In een [[productconfigurator]] kiest een boer zijn situatie, zoals het aantal dieren, de afmetingen van de stal of het type werktuig, en ziet hij welke opstelling past. Jij krijgt een aanvraag met de juiste gegevens, en je adviseur begint het gesprek waar het interessant wordt. Een [[3d-configurator]] maakt het nog duidelijker als het eindresultaat lastig voor te stellen is.",
              en: "Yes, if your product has many variants and options. In a [[productconfigurator|product configurator]] a farmer enters their situation, such as the number of animals, the dimensions of the barn or the type of implement, and sees which set-up fits. You get an enquiry with the right details, and your advisor starts the conversation where it gets interesting. A [[3d-configurator|3D configurator]] makes it even clearer when the end result is hard to picture.",
            },
          },
          {
            q: { nl: "Hoe vindt een loonwerker personeel en nieuwe klanten?", en: "How does an agricultural contractor find staff and new customers?" },
            a: {
              nl: "Met een website en social media die laten zien hoe het werk echt is: grote machines, vroeg op pad en werken in elk seizoen. Dat trekt precies het soort mensen dat je zoekt. Een werken-bij pagina met korte video's van collega's en een simpel sollicitatieformulier verlaagt de drempel. Voor klanten helpt een overzicht van je diensten per seizoen en een snelle manier om een klus aan te vragen. Met [[employer-branding|employer branding]] en [[social-video|social video]] laat je beide groepen zien wie je bent.",
              en: "With a website and social media that show what the work is really like: big machines, early starts and working in every season. That attracts exactly the kind of people you are looking for. A careers page with short videos of colleagues and a simple application form lowers the barrier. For customers, an overview of your services per season and a quick way to request a job helps. With [[employer-branding|employer branding]] and [[social-video|social video]] you show both groups who you are.",
            },
          },
          {
            q: { nl: "Hoe presenteer je een machine of stalsysteem op een landbouwbeurs?", en: "How do you present a machine or housing system at an agricultural show?" },
            a: {
              nl: "Laat het product het werk doen en zorg dat de boodschap van een afstand te lezen is. Eén heldere belofte op de stand, de machine zelf of een deel ervan, en op een scherm een [[3d-visualisatie]] of animatie van wat je binnenin niet ziet. Plan vaste demomomenten en zorg voor een simpele manier om contactgegevens vast te leggen. We ontwerpen de [[beurs-signing|beursstand]] en het materiaal zo dat je ze op meerdere beurzen kunt inzetten.",
              en: "Let the product do the work and make sure the message can be read from a distance. One clear promise on the stand, the machine itself or part of it, and on a screen a [[3d-visualisatie|3D visual]] or animation of what you cannot see inside. Plan fixed demo moments and have a simple way to capture contact details. We design the [[beurs-signing|stand]] and materials so you can use them at several shows.",
            },
          },
          {
            q: { nl: "Kan een app de werkbonnen en urenbriefjes van loonwerkers vervangen?", en: "Can an app replace contractors' job sheets and timesheets?" },
            a: {
              nl: "Ja, en dat scheelt aan het eind van de week veel uitzoekwerk. In een [[mobiele-app|app]] leggen medewerkers per klus de uren, het perceel, gebruikte middelen en foto's vast, ook als er in het veld geen bereik is. Kantoor ziet alles direct en kan sneller factureren, zeker als de app aan je administratie is gekoppeld. We beginnen met een [[mvp-ontwikkeling|MVP]] met de belangrijkste functies en bouwen verder op wat je mensen echt gebruiken.",
              en: "Yes, and it saves a lot of sorting out at the end of the week. In an [[mobiele-app|app]] staff record hours, the field, materials used and photos per job, even when there is no signal in the field. The office sees everything straight away and can invoice faster, especially when the app is linked to your accounts. We start with an [[mvp-ontwikkeling|MVP]] with the key features and build on what your people actually use.",
            },
          },
          {
            q: { nl: "Hoe ga je met een agritechbedrijf de grens over?", en: "How do you take an agri-tech company across the border?" },
            a: {
              nl: "Met meer dan een vertaling. Boeren in Duitsland of Frankrijk werken met andere regels, eenheden en gewoontes, en kopen vaak via een lokale dealer. Pas je teksten en voorbeelden daarop aan en geef dealers materiaal dat ze zelf kunnen gebruiken. Een [[meertalige-website|meertalige website]] met de juiste [[technische-seo|technische SEO]] zorgt dat zoekmachines per land de goede versie tonen. Zo word je in elk land gevonden in de taal van de klant.",
              en: "With more than a translation. Farmers in Germany or France work with different rules, units and habits, and often buy through a local dealer. Adapt your copy and examples to that and give dealers material they can use themselves. A [[meertalige-website|multilingual website]] with the right [[technische-seo|technical SEO]] makes sure search engines show the right version in each country. That way you get found in every country in the customer's language.",
            },
          },
        ],
      },
      {
        name: { nl: "Natuur & landschap", en: "Nature & landscape" },
        intro: {
          nl: "Voor natuurorganisaties, landschapsbeheerders, agrarische natuurcollectieven, hoveniers en groenvoorzieners die natuur en groen beheren, aanleggen of beschermen.",
          en: "For nature organisations, landscape managers, agricultural nature collectives, landscape gardeners and green space contractors that manage, create or protect nature and green spaces.",
        },
        types: [
          { nl: "Natuur- en landschapsorganisaties", en: "Nature and landscape organisations" },
          { nl: "Agrarische natuurcollectieven", en: "Agricultural nature collectives" },
          { nl: "Hoveniers", en: "Landscape gardeners" },
          { nl: "Groenvoorzieners", en: "Green space contractors" },
        ],
        useCases: [
          {
            title: { nl: "Donateurs en vrijwilligers werven", en: "Recruiting donors and volunteers" },
            text: {
              nl: "Een welkomstreeks voor nieuwe donateurs en vrijwilligers die laat zien wat hun steun doet.",
              en: "A welcome series for new donors and volunteers that shows what their support achieves.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Dronevideo van een natuurgebied", en: "Drone video of a nature area" },
            text: {
              nl: "Beheer en herstel van een gebied zichtbaar maken door de seizoenen heen, van boven en van dichtbij. Voor de website, donateurs, subsidiegevers en social media.",
              en: "Making the management and restoration of an area visible through the seasons, from above and up close. For the website, donors, funders and social media.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
          {
            title: { nl: "Infographics over natuur en beheer", en: "Infographics on nature and management" },
            text: {
              nl: "Wat er groeit, bloeit en terugkomt helder in beeld, voor jaarverslagen, subsidieverantwoording en social media.",
              en: "What grows, blooms and returns, shown clearly for annual reports, grant reporting and social media.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
          {
            title: { nl: "Prijsindicatie voor tuinaanleg", en: "Price estimate for garden landscaping" },
            text: {
              nl: "Een hovenier geeft een eerste indicatie op basis van oppervlak en wensen, en krijgt complete aanvragen binnen.",
              en: "A landscape gardener gives a first estimate based on surface area and wishes, and receives complete enquiries.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Portfolio-website voor de hovenier", en: "Portfolio website for a landscape gardener" },
            text: {
              nl: "Tuinen die je hebt ontworpen en aangelegd, met voor-en-na foto's en de plaats erbij, zodat klanten in hun eigen buurt zien wat je kunt.",
              en: "Gardens you have designed and built, with before-and-after photos and the location, so customers see what you can do in their own area.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Presentatie voor zakelijke opdrachtgevers", en: "Presentation for business clients" },
            text: {
              nl: "Groenvoorzieners die voor gemeenten, woningcorporaties en bedrijven werken, laten met een heldere presentatie en echte projecten zien hoe ze aanleg en onderhoud aanpakken.",
              en: "Green space contractors working for municipalities, housing associations and companies use a clear presentation and real projects to show how they handle landscaping and maintenance.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Wandelaars en leden betrekken", en: "Engaging walkers and members" },
            text: {
              nl: "Seizoensposts over wat er nu te zien is in het gebied, van broedvogels tot bloeiende heide, met een uitnodiging om lid, donateur of vrijwilliger te worden.",
              en: "Seasonal posts about what there is to see in the area right now, from nesting birds to flowering heathland, with an invitation to become a member, donor or volunteer.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Overzicht van beheer per perceel", en: "Overview of management per plot" },
            text: {
              nl: "Een agrarisch natuurcollectief ziet per perceel welke beheermaatregelen lopen, wat er is uitgevoerd en wat er gemeld moet worden. Minder Excel, meer overzicht voor deelnemers en coördinatoren.",
              en: "An agricultural nature collective sees per plot which management measures are running, what has been done and what needs reporting. Less Excel, more overview for participants and coordinators.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe werf je donateurs of vrijwilligers voor een natuurorganisatie?", en: "How do you recruit donors or volunteers for a nature organisation?" },
            a: {
              nl: "Laat zien wat hun bijdrage concreet doet: een stuk heide dat terugkomt, een poel waar weer kikkers zitten, een wandelpad dat open blijft. Mensen geven aan iets wat ze kunnen zien en bezoeken. Beeld uit het gebied, korte verhalen van vrijwilligers en een makkelijke manier om je aan te melden doen de rest. Na de aanmelding houdt een paar goede [[e-mailmarketing|mails]] mensen betrokken. Met [[social-media-marketing|social media]] bereik je ook de wandelaars die al van het gebied houden.",
              en: "Show what their contribution concretely does: a patch of heathland coming back, a pond with frogs in it again, a footpath that stays open. People give to something they can see and visit. Images from the area, short stories from volunteers and an easy way to sign up do the rest. After signing up, a few good [[e-mailmarketing|emails]] keep people engaged. With [[social-media-marketing|social media]] you also reach the walkers who already love the area.",
            },
          },
          {
            q: { nl: "Hoe krijgt een hovenier meer aanvragen voor tuinontwerp en tuinaanleg?", en: "How does a landscape gardener get more enquiries for garden design and landscaping?" },
            a: {
              nl: "Met beeld van eigen werk en een makkelijke eerste stap. Een portfolio met voor-en-na foto's per project, liefst met de plaats erbij, overtuigt meer dan tekst. Een [[offerte-calculator|prijsindicatie]] op basis van oppervlak, type bestrating en beplanting helpt klanten zien of ze in de buurt zitten. Met [[lokale-seo|lokale SEO]] word je gevonden op 'hovenier' plus de woonplaats. Plan campagnes in de late winter, als mensen hun tuin voor het voorjaar willen regelen.",
              en: "With images of your own work and an easy first step. A portfolio with before-and-after photos per project, ideally with the location, convinces more than text. A [[offerte-calculator|price estimate]] based on surface area, type of paving and planting helps customers see whether they are in the right ballpark. With [[lokale-seo|local SEO]] you get found for 'landscape gardener' plus their town. Plan campaigns in late winter, when people want to sort out their garden before spring.",
            },
          },
          {
            q: { nl: "Hoe laat je natuurbeheer zien zonder dat het een saai verslag wordt?", en: "How do you show nature management without it becoming a dull report?" },
            a: {
              nl: "Door het te vertellen als een verhaal over seizoenen en resultaten. Een dronevideo van hetzelfde gebied in voorjaar en najaar, een fotoserie van wat er terugkomt, een korte infographic over wat er is gedaan. Dat werkt voor donateurs, subsidiegevers en inwoners. Cijfers horen erbij, zolang ze kloppen. Met [[dronevideo|dronebeelden]] en [[infographics]] maak je zichtbaar wat er in het veld gebeurt, ook voor wie er zelf nooit komt.",
              en: "By telling it as a story of seasons and results. A drone video of the same area in spring and autumn, a photo series of what is coming back, a short infographic about what has been done. That works for donors, funders and residents. Figures belong in it, as long as they are correct. With [[dronevideo|drone footage]] and [[infographics]] you make visible what happens in the field, even for people who never go there themselves.",
            },
          },
          {
            q: { nl: "Hoe pakt een groenvoorziener zakelijke opdrachtgevers en aanbestedingen aan?", en: "How does a green space contractor approach business clients and tenders?" },
            a: {
              nl: "Met een professioneel en consequent beeld. Opdrachtgevers als gemeenten en woningcorporaties willen zien welke diensten je levert, met welk materieel en welke certificeringen, en voor wie je al werkt. Zet dat helder op je website, met projectpagina's van echte opdrachten. Voor aanbestedingen helpen een vaste [[huisstijl]] voor plannen van aanpak en een verzorgde [[presentaties-pitchdecks|presentatie]], zodat je inschrijving er net zo goed uitziet als je werk.",
              en: "With a professional and consistent image. Clients like municipalities and housing associations want to see which services you provide, with what equipment and certifications, and who you already work for. Put that clearly on your website, with project pages of real assignments. For tenders, a consistent [[huisstijl|visual identity]] for plans of approach and a polished [[presentaties-pitchdecks|presentation]] help, so your bid looks as good as your work.",
            },
          },
          {
            q: { nl: "Hoe laat je als hovenier je werk goed zien online?", en: "How does a landscape gardener show their work well online?" },
            a: {
              nl: "Met beeld, beeld en nog eens beeld. Fotografeer elk project voor, tijdens en na de aanleg, en liefst ook een jaar later, als alles is gegroeid. Zet per project een korte beschrijving met de plaats en de wensen van de klant op een [[webflow-website|portfoliowebsite]]. Deel dezelfde beelden op Instagram en Pinterest, waar mensen inspiratie voor hun tuin zoeken. Met [[social-media-marketing|social media]] laat je zien dat je meer bent dan iemand die stenen legt.",
              en: "With visuals, visuals and more visuals. Photograph each project before, during and after the work, and ideally a year later once everything has grown. Add a short description per project with the location and the client's wishes on a [[webflow-website|portfolio website]]. Share the same images on Instagram and Pinterest, where people look for garden inspiration. With [[social-media-marketing|social media]] you show you are more than someone who lays paving.",
            },
          },
          {
            q: { nl: "Kan een agrarisch natuurcollectief zijn administratie en communicatie digitaliseren?", en: "Can an agricultural nature collective digitalise its admin and communication?" },
            a: {
              nl: "Ja, stap voor stap. Begin met een overzicht van percelen, maatregelen en uitvoering in een [[dashboards|dashboard]], zodat coördinatoren niet meer met losse Excel-bestanden werken. Deelnemers kunnen in een eigen [[ledenportaal-loyaliteit|ledenomgeving]] hun gegevens en afspraken inzien en uitgevoerd werk melden. Een nieuwsbrief houdt iedereen op de hoogte. Waar mogelijk koppelen we aan de systemen die je al gebruikt, zodat niets dubbel hoeft.",
              en: "Yes, step by step. Start with an overview of plots, measures and completed work in a [[dashboards|dashboard]], so coordinators no longer work with loose Excel files. Participants can view their details and agreements and report completed work in their own [[ledenportaal-loyaliteit|member area]]. A newsletter keeps everyone informed. Where possible we connect to the systems you already use, so nothing needs to be done twice.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Boerderijwinkels", en: "Farm shops" },
      { nl: "Streekproducenten", en: "Local food producers" },
      { nl: "Fruittelers", en: "Fruit growers" },
      { nl: "Zuivelboerderijen", en: "Dairy farms" },
      { nl: "Veehouderijen", en: "Livestock farms" },
      { nl: "Akkerbouwbedrijven", en: "Arable farms" },
      { nl: "Glastuinbouwbedrijven", en: "Greenhouse growers" },
      { nl: "Boomkwekerijen", en: "Tree nurseries" },
      { nl: "Sierteeltbedrijven", en: "Ornamental plant growers" },
      { nl: "Tuincentra", en: "Garden centres" },
      { nl: "Recreatieboerderijen", en: "Recreational farms" },
      { nl: "Alpaca- en dierenboerderijen", en: "Alpaca and animal farms" },
      { nl: "Pluktuinen", en: "Pick-your-own gardens" },
      { nl: "Boerencampings", en: "Farm campsites" },
      { nl: "Zorgboerderijen", en: "Care farms" },
      { nl: "Agritechbedrijven", en: "Agri-tech companies" },
      { nl: "Landbouwmechanisatiebedrijven", en: "Agricultural machinery dealers" },
      { nl: "Stalinrichters", en: "Livestock housing suppliers" },
      { nl: "Veevoerbedrijven", en: "Animal feed companies" },
      { nl: "Loonwerkbedrijven", en: "Agricultural contractors" },
      { nl: "Natuur- en landschapsorganisaties", en: "Nature and landscape organisations" },
      { nl: "Agrarische natuurcollectieven", en: "Agricultural nature collectives" },
      { nl: "Hoveniers", en: "Landscape gardeners" },
      { nl: "Groenvoorzieners", en: "Green space contractors" },
    ],
  },
  /* ---------- Transport & Logistiek ---------- */
  {
    slug: "transport-logistiek",
    title: { nl: "Transport & Logistiek", en: "Transport & Logistics" },
    short: { nl: "Logistiek", en: "Logistics" },
    icon: "truck",
    quote: { nl: "Freight moves fast. Your brand should keep up.", en: "Freight moves fast. Your brand should keep up." },
    intro: {
      nl: "Transportbedrijven, logistieke dienstverleners, warehousing, terminals, koeriers en verhuizers: wij helpen je aan chauffeurs, klanten en slimmere processen.",
      en: "Transport companies, logistics service providers, warehousing, terminals, couriers and removal firms: we help you find drivers, customers and smarter processes.",
    },
    description: {
      nl: "In transport en logistiek draait alles om betrouwbaarheid. Klanten willen weten waar hun lading is, chauffeurs willen een werkgever die ze serieus neemt en planners willen minder mail en meer overzicht. Toch zijn veel websites in de sector een digitaal visitekaartje uit een vorig decennium. M7 helpt transportbedrijven en logistieke dienstverleners met een merk, een website en tools die net zo strak lopen als de planning.\n\nVoor containerterminaloperator BCTN ontwikkelden we het concept voor een AI Customer Service Control Tower: één scherm dat mailbox, ERP-orders en terminaldata samenbrengt, signalen omzet in geprioriteerde taken en conceptantwoorden klaarzet die een medewerker controleert en verstuurt. Daarnaast bouwen we werken-bij websites en vacaturecampagnes voor chauffeurs en logistiek personeel, klantportalen met orderstatus via API-koppelingen, en offertecalculators voor transport en verhuizingen.",
      en: "In transport and logistics everything revolves around reliability. Customers want to know where their cargo is, drivers want an employer who takes them seriously and planners want fewer emails and more overview. Yet many websites in the sector are a digital business card from a decade ago. M7 helps transport companies and logistics service providers with a brand, a website and tools that run as tightly as the planning.\n\nFor container terminal operator BCTN we developed the concept for an AI Customer Service Control Tower: one screen that brings together the mailbox, ERP orders and terminal data, turns signals into prioritised tasks and prepares draft replies that a staff member checks and sends. We also build careers websites and recruitment campaigns for drivers and logistics staff, customer portals with order status through API integrations, and quote calculators for transport and removals.",
    },
    challenges: [
      {
        title: { nl: "Chauffeurs en personeel vinden", en: "Finding drivers and staff" },
        text: {
          nl: "Vacatures voor chauffeurs, planners en orderpickers blijven vaak lang open. Met employer branding, een werken-bij website en gerichte campagnes bereik je ook mensen die niet actief zoeken.",
          en: "Vacancies for drivers, planners and order pickers often stay open for a long time. With employer branding, a careers website and targeted campaigns you also reach people who are not actively looking.",
        },
      },
      {
        title: { nl: "Klantenservice onder druk", en: "Customer service under pressure" },
        text: {
          nl: "Statusvragen, wijzigingen en schademeldingen komen binnen via mail en telefoon. AI en een klantportaal halen het zoekwerk weg, zodat je team zich op de uitzonderingen richt.",
          en: "Status questions, changes and damage reports come in by email and phone. AI and a customer portal take away the searching, so your team can focus on the exceptions.",
        },
      },
      {
        title: { nl: "Systemen die niet met elkaar praten", en: "Systems that do not talk to each other" },
        text: {
          nl: "TMS, WMS, ERP en mailbox staan vaak los van elkaar. Met API-koppelingen en dashboards krijg je één beeld, zonder overtypen.",
          en: "TMS, WMS, ERP and the mailbox are often separate. With API integrations and dashboards you get one picture, without retyping.",
        },
      },
      {
        title: { nl: "Opvallen tussen soortgenoten", en: "Standing out from the rest" },
        text: {
          nl: "Veel transportbedrijven lijken online op elkaar. Een eigen merk dat je specialisme laat zien, van website tot trailer, maakt het verschil bij klanten en sollicitanten.",
          en: "Many transport companies look alike online. A distinct brand that shows your specialism, from website to trailer, makes the difference with customers and applicants.",
        },
      },
    ],
    services: ["ai-consultancy", "websites-webshops", "branding-rebranding", "web-apps-portals-apps", "content-marketing-online-ads", "configurators-lead-tools-widgets"],
    applications: ["ai-agents", "ai-integraties", "klantportaal", "api-koppelingen", "dashboards", "employer-branding", "webflow-website", "meertalige-website", "meta-ads", "offerte-calculator"],
    /* Mockup in de dienstentegels: eigen werk uit logistiek (overige diensten: standaard) */
    visuals: {
      "ai-consultancy": { kind: "browser", src: "/media/sector-tiles/bctn-control-tower.webp", label: "BCTN" },
    },
    faqs: [
      {
        q: { nl: "Kunnen jullie een werken-bij website voor chauffeurs bouwen?", en: "Can you build a careers website for drivers?" },
        a: {
          nl: "Ja. Met echte verhalen van collega's, heldere info over ritten, roosters en materieel, en solliciteren in een paar minuten via de telefoon. Daar zetten we gerichte vacaturecampagnes omheen.",
          en: "Yes. With real stories from colleagues, clear info about routes, schedules and equipment, and applying in a few minutes on a phone. We run targeted recruitment campaigns around it.",
        },
      },
      {
        q: { nl: "Kan AI onze klantenservice in de logistiek ontlasten?", en: "Can AI take pressure off our logistics customer service?" },
        a: {
          nl: "Ja, als het goed is ingericht. Voor BCTN ontwikkelden we het concept voor een AI Customer Service Control Tower die mail, ERP en terminaldata combineert en conceptantwoorden klaarzet. Een medewerker controleert altijd voordat er iets wordt verstuurd.",
          en: "Yes, if it is set up well. For BCTN we developed the concept for an AI Customer Service Control Tower that combines email, ERP and terminal data and prepares draft replies. A staff member always checks before anything is sent.",
        },
      },
      {
        q: { nl: "Kunnen klanten hun zendingen volgen in een portaal?", en: "Can customers track their shipments in a portal?" },
        a: {
          nl: "Ja. We bouwen klantportalen waarin klanten orders, status en documenten zien, gekoppeld aan je TMS of WMS. Dat scheelt een hoop 'waar is mijn zending?'-mailtjes.",
          en: "Yes. We build customer portals where customers see orders, status and documents, linked to your TMS or WMS. That saves a lot of 'where is my shipment?' emails.",
        },
      },
      {
        q: { nl: "Koppelen jullie met ons TMS, WMS of ERP?", en: "Do you integrate with our TMS, WMS or ERP?" },
        a: {
          nl: "Als die systemen een API of exportmogelijkheid hebben, meestal wel. We brengen eerst in kaart welke data waar staat en bouwen dan de koppelingen die echt nodig zijn.",
          en: "If those systems offer an API or export option, usually yes. We first map which data lives where and then build the integrations that are actually needed.",
        },
      },
      {
        q: { nl: "Ontwerpen jullie ook truckbelettering?", en: "Do you also design truck graphics?" },
        a: {
          nl: "Ja. Belettering van trucks, trailers en bedrijfsbussen ontwerpen we in je huisstijl, zodat je vloot een rijdend visitekaartje wordt.",
          en: "Yes. We design graphics for trucks, trailers and vans in your visual identity, so your fleet becomes a business card on wheels.",
        },
      },
    ],
    metaTitle: {
      nl: "Websites, AI & werving voor transport en logistiek | M7",
      en: "Websites, AI & recruitment for transport and logistics | M7",
    },
    metaDescription: {
      nl: "M7 helpt transport, logistiek, warehousing, terminals en koeriers met websites, werken-bij campagnes, klantportalen en AI voor de klantenservice.",
      en: "M7 helps transport, logistics, warehousing, terminals and couriers with websites, recruitment campaigns, customer portals and AI for customer service.",
    },
    segments: [
      {
        name: { nl: "Wegtransport", en: "Road transport" },
        intro: {
          nl: "Voor transportbedrijven, internationale transporteurs, koel- en vriestransport en bulk- en tanktransport die chauffeurs zoeken en klanten willen laten zien waar ze goed in zijn.",
          en: "For transport companies, international hauliers, refrigerated transport and bulk and tanker transport firms that are looking for drivers and want to show customers what they are good at.",
        },
        types: [
          { nl: "Transportbedrijven", en: "Transport companies" },
          { nl: "Internationale transporteurs", en: "International hauliers" },
          { nl: "Koel- en vriestransporteurs", en: "Refrigerated transport companies" },
          { nl: "Bulk- en tanktransporteurs", en: "Bulk and tanker transport companies" },
        ],
        useCases: [
          {
            title: { nl: "Werkgeversmerk voor chauffeurs", en: "Employer brand for drivers" },
            text: {
              nl: "Laat zien waarom chauffeurs bij jou willen rijden: het materieel, de ritten, de sfeer en hoe je met je mensen omgaat.",
              en: "Show why drivers want to drive for you: the equipment, the routes, the atmosphere and how you treat your people.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Vacaturecampagne op social media", en: "Recruitment campaign on social media" },
            text: {
              nl: "Gerichte advertenties in de regio, met korte video's van collega's en solliciteren in een paar klikken.",
              en: "Targeted ads in the region, with short videos of colleagues and applying in a few clicks.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Vacaturepagina's die op een telefoon werken", en: "Vacancy pages that work on a phone" },
            text: {
              nl: "Een pagina per functie, snel te lezen in een pauze, met een formulier waarvoor je geen cv nodig hebt.",
              en: "A page per role, quick to read during a break, with a form that does not require a CV.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Truckbelettering in je huisstijl", en: "Truck graphics in your identity" },
            text: {
              nl: "Trucks en trailers als rijdend visitekaartje, herkenbaar op elke snelweg.",
              en: "Trucks and trailers as a business card on wheels, recognisable on every motorway.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet er op de vacaturewebsite van een transportbedrijf staan?", en: "What should a transport company's careers website include?" },
            a: {
              nl: "Alles wat een chauffeur wil weten voordat hij belt. Rijd je nationaal of internationaal, ben je elke avond thuis, in wat voor truck rijd je, hoe ziet het rooster eruit en wat verdien je ongeveer? Zet dat per functie op een heldere vacaturepagina, met foto's of video van je eigen materieel en collega's. Maak solliciteren kort: naam, telefoonnummer, rijbewijs, klaar. Een [[landingspaginas|vacaturepagina]] die op een telefoon in een pauze te lezen is, werkt beter dan een pdf.",
              en: "Everything a driver wants to know before calling. Is it national or international, are you home every night, what kind of truck do you drive, what does the schedule look like and roughly what do you earn? Put that on a clear vacancy page per role, with photos or video of your own equipment and colleagues. Keep applying short: name, phone number, licence, done. A [[landingspaginas|vacancy page]] that can be read on a phone during a break works better than a PDF.",
            },
          },
          {
            q: { nl: "Werken vacatureadvertenties op social media voor chauffeurs?", en: "Do recruitment ads on social media work for drivers?" },
            a: {
              nl: "Vaak wel, omdat je ook chauffeurs bereikt die niet actief zoeken maar wel openstaan voor iets anders. Richt je op de regio rond je vestiging en op interesses die bij het vak passen. Korte video's van een collega in de cabine doen meer dan een stockfoto van een vrachtwagen op een lege weg. Met [[meta-ads|Meta Ads]] en [[social-video|social video]] zetten we zo'n campagne op en meten we welke advertenties echt sollicitaties opleveren.",
              en: "Often they do, because you also reach drivers who are not actively looking but are open to something new. Target the region around your depot and interests that fit the trade. Short videos of a colleague in the cab do more than a stock photo of a truck on an empty road. With [[meta-ads|Meta Ads]] and [[social-video|social video]] we set up that kind of campaign and measure which ads actually bring in applications.",
            },
          },
          {
            q: { nl: "Hoe laat je zien dat je specialist bent in koel- of tanktransport?", en: "How do you show you specialise in refrigerated or tanker transport?" },
            a: {
              nl: "Door specifiek te zijn. Een verlader in de food of chemie zoekt een partner die zijn eisen kent: temperatuurregistratie, certificeringen, ADR en reiniging. Geef elk specialisme een eigen pagina met die details, voorbeelden van ladingen en de certificaten die je hebt. Dat helpt in Google en bij een inkoper die leveranciers vergelijkt. Met [[seo-content|SEO-content]] en een heldere [[merkstrategie|positionering]] word je de transporteur voor dat ene type lading, in plaats van een van de velen.",
              en: "By being specific. A shipper in food or chemicals is looking for a partner who knows their requirements: temperature logging, certifications, ADR and cleaning. Give each specialism its own page with those details, examples of loads and the certificates you hold. That helps in Google and with a buyer comparing suppliers. With [[seo-content|SEO content]] and clear [[merkstrategie|positioning]] you become the haulier for that one type of cargo, instead of one of many.",
            },
          },
          {
            q: { nl: "Is truckbelettering nog belangrijk nu alles online gaat?", en: "Do truck graphics still matter now that everything is online?" },
            a: {
              nl: "Zeker. Je trucks rijden elke dag langs veel mensen, onder wie toekomstige chauffeurs en klanten. Een rustig, herkenbaar ontwerp met je naam en website valt meer op dan een trailer vol tekst. Zorg dat het aansluit op je website en vacatures, zodat wie je op de weg ziet je online herkent. We ontwerpen [[beurs-signing|belettering]] in je [[huisstijl]] voor trucks, trailers en bedrijfsbussen, en leveren de bestanden kant-en-klaar aan bij je beletteraar.",
              en: "Definitely. Your trucks pass a lot of people every day, including future drivers and customers. A calm, recognisable design with your name and website stands out more than a trailer full of text. Make sure it matches your website and vacancies, so people who see you on the road recognise you online. We design [[beurs-signing|vehicle graphics]] in your [[huisstijl|visual identity]] for trucks, trailers and vans, and deliver print-ready files to your sign maker.",
            },
          },
        ],
      },
      {
        name: { nl: "Logistiek & warehousing", en: "Logistics & warehousing" },
        intro: {
          nl: "Voor logistieke dienstverleners, warehousing- en fulfilmentbedrijven en expediteurs die verladers en webshops willen overtuigen en hun processen willen koppelen.",
          en: "For logistics service providers, warehousing and fulfilment companies and freight forwarders that want to win over shippers and web shops and connect their processes.",
        },
        types: [
          { nl: "Logistieke dienstverleners", en: "Logistics service providers" },
          { nl: "Warehousingbedrijven", en: "Warehousing companies" },
          { nl: "Fulfilmentbedrijven", en: "Fulfilment companies" },
          { nl: "Expediteurs", en: "Freight forwarders" },
        ],
        useCases: [
          {
            title: { nl: "Klantportaal met voorraad en orders", en: "Customer portal with stock and orders" },
            text: {
              nl: "Klanten zien hun voorraad, openstaande orders en retouren zelf, zonder te mailen of te bellen.",
              en: "Customers see their own stock, open orders and returns, without emailing or calling.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Koppelingen met webshops en systemen", en: "Integrations with web shops and systems" },
            text: {
              nl: "Orders uit webshops en marktplaatsen automatisch in je WMS, en statusupdates automatisch terug.",
              en: "Orders from web shops and marketplaces flow into your WMS automatically, and status updates flow back.",
            },
            service: "web-apps-portals-apps",
            application: "api-koppelingen",
          },
          {
            title: { nl: "LinkedIn-campagne richting verladers", en: "LinkedIn campaign aimed at shippers" },
            text: {
              nl: "Bereik logistiek managers en inkopers met content over je specialismen en capaciteit.",
              en: "Reach logistics managers and buyers with content about your specialisms and capacity.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "Prijscalculator voor fulfilment", en: "Price calculator for fulfilment" },
            text: {
              nl: "Een webshop vult ordervolume, productformaat en opslag in en ziet een eerste indicatie.",
              en: "A web shop enters order volume, product size and storage needs and sees a first estimate.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe trek je als fulfilmentbedrijf nieuwe webshops aan?", en: "How does a fulfilment company attract new web shops?" },
            a: {
              nl: "Door de vragen van een webshopeigenaar direct te beantwoorden. Welke platforms koppel je, hoe snel gaat een order de deur uit, wat kost het per order en hoe gaat het met retouren? Een [[offerte-calculator|prijscalculator]] op basis van ordervolume, productformaat en opslag geeft een eerste indicatie en levert een aanvraag op met de juiste gegevens. Laat met logo's van koppelingen en een korte video van je warehouse zien hoe het werkt. Zo voelt overstappen een stuk minder spannend.",
              en: "By answering a web shop owner's questions straight away. Which platforms do you integrate with, how quickly does an order leave the building, what does it cost per order and how are returns handled? A [[offerte-calculator|price calculator]] based on order volume, product size and storage gives a first estimate and produces an enquiry with the right details. Show how it works with logos of your integrations and a short video of your warehouse. That makes switching feel a lot less daunting.",
            },
          },
          {
            q: { nl: "Kunnen klanten hun voorraad en orders realtime zien?", en: "Can customers see their stock and orders in real time?" },
            a: {
              nl: "Ja, als je WMS de gegevens kan delen. In een [[klantportaal]] zien klanten hun voorraad, openstaande orders, verzendstatus en retouren, zonder te mailen of te bellen. Via [[api-koppelingen]] komt de data rechtstreeks uit je systemen, dus niemand hoeft iets over te typen. Klanten kunnen er ook zelf documenten downloaden of een levering vooraanmelden. Dat geeft vertrouwen bij je klanten en rust bij je customer service.",
              en: "Yes, if your WMS can share the data. In a [[klantportaal|customer portal]] customers see their stock, open orders, shipping status and returns, without emailing or calling. Through [[api-koppelingen|API integrations]] the data comes straight from your systems, so nobody has to retype anything. Customers can also download documents or pre-notify a delivery themselves. That builds trust with your customers and brings calm to your customer service team.",
            },
          },
          {
            q: { nl: "Hoe word je gevonden door verladers die een logistieke partner zoeken?", en: "How do shippers looking for a logistics partner find you?" },
            a: {
              nl: "Verladers zoeken vaak heel specifiek, zoals 'warehousing gevaarlijke stoffen Brabant' of 'cross-docking Venlo'. Maak voor elke dienst en elk specialisme een pagina die die vraag beantwoordt, met capaciteit, certificeringen en locatie. Dat werkt in Google en steeds vaker ook in AI-assistenten. Daarnaast bereik je logistiek managers en inkopers goed via LinkedIn. Met [[seo]] en [[linkedin-ads|LinkedIn Ads]] bouw je zichtbaarheid op bij precies die mensen.",
              en: "Shippers often search very specifically, such as 'hazardous goods warehousing Brabant' or 'cross-docking Venlo'. Create a page for each service and specialism that answers that question, with capacity, certifications and location. That works in Google and increasingly in AI assistants too. You can also reach logistics managers and buyers well through LinkedIn. With [[seo|SEO]] and [[linkedin-ads|LinkedIn Ads]] you build visibility with exactly those people.",
            },
          },
        ],
      },
      {
        name: { nl: "Terminals & binnenvaart", en: "Terminals & inland shipping" },
        intro: {
          nl: "Voor containerterminals, binnenvaartbedrijven, rederijen en havenbedrijven met veel partijen, veel data en een klantenservice die altijd door moet lopen.",
          en: "For container terminals, inland shipping companies, shipping lines and port companies with many parties, lots of data and a customer service that has to keep running.",
        },
        types: [
          { nl: "Containerterminals", en: "Container terminals" },
          { nl: "Binnenvaartbedrijven", en: "Inland shipping companies" },
          { nl: "Rederijen", en: "Shipping lines" },
          { nl: "Havenbedrijven", en: "Port companies" },
        ],
        useCases: [
          {
            title: { nl: "AI Customer Service Control Tower", en: "AI Customer Service Control Tower" },
            text: {
              nl: "Mail, ERP-orders en terminaldata in één scherm, met AI die signalen prioriteert en conceptantwoorden klaarzet. Dit concept ontwikkelden we voor BCTN.",
              en: "Email, ERP orders and terminal data on one screen, with AI that prioritises signals and prepares draft replies. We developed this concept for BCTN.",
            },
            service: "ai-consultancy",
            application: "ai-agents",
          },
          {
            title: { nl: "AI-strategie voor operatie en klantenservice", en: "AI strategy for operations and customer service" },
            text: {
              nl: "Waar levert AI echt tijd op, en waar niet? We brengen het in kaart en maken een plan in behapbare stappen.",
              en: "Where does AI really save time, and where does it not? We map it out and make a plan in manageable steps.",
            },
            service: "ai-consultancy",
            application: "ai-strategie",
          },
          {
            title: { nl: "Dashboard met terminal- en orderdata", en: "Dashboard with terminal and order data" },
            text: {
              nl: "Containers, deadlines en uitzonderingen in één overzicht voor planning en klantenservice.",
              en: "Containers, deadlines and exceptions in one overview for planning and customer service.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
          {
            title: { nl: "Dronevideo van terminal of vloot", en: "Drone video of terminal or fleet" },
            text: {
              nl: "De schaal van je terminal of schepen in beeld, voor website, werving en presentaties.",
              en: "The scale of your terminal or vessels on screen, for your website, recruitment and presentations.",
            },
            service: "foto-video-3d-animatie",
            application: "dronevideo",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat doet een AI Customer Service Control Tower?", en: "What does an AI Customer Service Control Tower do?" },
            a: {
              nl: "Hij brengt alles samen wat een klantenservice nodig heeft: de mailbox, orders uit het ERP en data van de terminals. AI leest mee, herkent signalen zoals een ontbrekend zegelnummer of een naderende deadline, en zet ze als geprioriteerde taken klaar. Voor veelvoorkomende vragen ligt een conceptantwoord klaar dat een medewerker controleert en verstuurt. Voor BCTN ontwikkelden we dit concept. Lees meer over [[ai-agents|AI-agents]] en hoe ze in je processen passen.",
              en: "It brings together everything a customer service team needs: the mailbox, orders from the ERP and data from the terminals. AI reads along, spots signals such as a missing seal number or an approaching deadline, and lines them up as prioritised tasks. For common questions a draft reply is ready for a staff member to check and send. We developed this concept for BCTN. Read more about [[ai-agents|AI agents]] and how they fit into your processes.",
            },
          },
          {
            q: { nl: "Hoe begin je met AI in de klantenservice van een terminal of rederij?", en: "How do you start with AI in the customer service of a terminal or shipping line?" },
            a: {
              nl: "Klein en concreet. Kies één proces dat veel tijd kost en helder is, zoals statusvragen of het aanvullen van ontbrekende gegevens. Breng in kaart waar de informatie staat en wie wat controleert. Bouw dan een eerste versie waarin AI voorbereidt en een mens beslist. Werkt dat, dan breid je uit. Met een [[ai-strategie|AI-strategie]] en [[ai-integraties]] in je bestaande systemen voorkom je dat AI een los speeltje wordt naast het echte werk.",
              en: "Small and concrete. Pick one process that takes a lot of time and is clear-cut, such as status questions or filling in missing details. Map where the information lives and who checks what. Then build a first version in which AI prepares and a person decides. If that works, you expand. With an [[ai-strategie|AI strategy]] and [[ai-integraties|AI integrations]] in your existing systems you keep AI from becoming a separate toy next to the real work.",
            },
          },
          {
            q: { nl: "Hoe laat je de schaal van een terminal of vloot goed zien?", en: "How do you show the scale of a terminal or fleet properly?" },
            a: {
              nl: "Van boven en van dichtbij. Dronebeelden laten zien hoe groot een terminal is en hoe de stromen lopen. Beelden van de mensen op de kade, in de kraan of aan boord laten zien wie het werk doet. Die combinatie werkt voor klanten, voor nieuwe collega's en voor de omgeving. Met [[dronevideo]] en een [[bedrijfsfilm]] maken we beeld dat je jarenlang kunt gebruiken op je website, in presentaties en op beurzen.",
              en: "From above and up close. Drone footage shows how big a terminal is and how the flows run. Footage of the people on the quay, in the crane or on board shows who does the work. That combination works for customers, for new colleagues and for the local community. With [[dronevideo|drone video]] and a [[bedrijfsfilm|corporate film]] we create footage you can use for years on your website, in presentations and at trade shows.",
            },
          },
        ],
      },
      {
        name: { nl: "Koeriers & verhuizers", en: "Couriers & removals" },
        intro: {
          nl: "Voor koeriersdiensten, spoedkoeriers, last-mile bezorgers, verhuisbedrijven en self-storage die snel gevonden moeten worden en aanvragen direct willen inplannen.",
          en: "For courier services, same-day couriers, last-mile delivery firms, removal companies and self-storage businesses that need to be found fast and want to schedule requests straight away.",
        },
        types: [
          { nl: "Koeriersdiensten", en: "Courier services" },
          { nl: "Spoedkoeriers", en: "Same-day couriers" },
          { nl: "Verhuisbedrijven", en: "Removal companies" },
          { nl: "Self-storagebedrijven", en: "Self-storage companies" },
        ],
        useCases: [
          {
            title: { nl: "Verhuiscalculator", en: "Removals calculator" },
            text: {
              nl: "De klant vult woningtype, verdieping en afstand in en ziet een indicatie. Jij krijgt een aanvraag waarmee je meteen een offerte maakt.",
              en: "The customer enters home type, floor and distance and sees an estimate. You get an enquiry you can turn into a quote straight away.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Lokaal gevonden per stad", en: "Found locally in every town" },
            text: {
              nl: "Pagina's en een Google Bedrijfsprofiel voor elke plaats waar je werkt, voor zoekopdrachten als 'verhuisbedrijf' plus de stad.",
              en: "Pages and a Google Business Profile for every town you work in, for searches like 'removal company' plus the town.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Rit of verhuisdatum online boeken", en: "Booking a delivery or moving date online" },
            text: {
              nl: "Klanten kiezen zelf een datum of tijdslot, met een bevestiging en een herinnering.",
              en: "Customers choose a date or time slot themselves, with a confirmation and a reminder.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Google Ads op spoedvragen", en: "Google Ads for urgent requests" },
            text: {
              nl: "Wie 'spoedkoerier' zoekt, wil nu iemand. Met Google Ads sta je op dat moment in beeld.",
              en: "Someone searching for 'same-day courier' wants someone now. With Google Ads you are visible at that moment.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe krijgt een verhuisbedrijf meer offerteaanvragen online?", en: "How does a removal company get more quote requests online?" },
            a: {
              nl: "Door aanvragen makkelijk en concreet te maken. Een [[offerte-calculator|verhuiscalculator]] waarin de klant woningtype, aantal kamers, verdieping, afstand en extra's zoals inpakken of een verhuislift invult, geeft direct een indicatie. Jij krijgt een aanvraag met alles wat je nodig hebt, zonder eerst te bellen voor de basis. Combineer dat met reviews, foto's van je eigen team en materiaal, en duidelijke pagina's per regio. Dan kiest een klant voor vertrouwen, niet alleen voor de laagste prijs.",
              en: "By making requests easy and concrete. A [[offerte-calculator|removals calculator]] where the customer enters home type, number of rooms, floor, distance and extras such as packing or a furniture lift gives an estimate straight away. You get an enquiry with everything you need, without calling first for the basics. Combine that with reviews, photos of your own team and equipment, and clear pages per region. Then a customer chooses trust, not just the lowest price.",
            },
          },
          {
            q: { nl: "Hoe word je als koerier gevonden op 'spoedkoerier' in je regio?", en: "How does a courier get found for 'same-day courier' in their region?" },
            a: {
              nl: "Met snelheid in alles. Een pagina per stad of regio die meteen zegt hoe snel je kunt ophalen, een telefoonnummer bovenaan en een formulier dat in een minuut is ingevuld. Een sterk Google Bedrijfsprofiel met reviews helpt in Google Maps. Voor echte spoedvragen werkt [[google-ads|Google Ads]] goed, omdat je precies op het moment van zoeken in beeld komt. Met [[lokale-seo|lokale SEO]] bouw je daarnaast zichtbaarheid op die je niet per klik betaalt.",
              en: "With speed in everything. A page per town or region that immediately says how quickly you can collect, a phone number at the top and a form that takes a minute to fill in. A strong Google Business Profile with reviews helps in Google Maps. For truly urgent requests [[google-ads|Google Ads]] works well, because you appear exactly at the moment of searching. With [[lokale-seo|local SEO]] you also build visibility you do not pay for per click.",
            },
          },
          {
            q: { nl: "Kunnen klanten online een rit, verhuisdatum of opslagbox boeken?", en: "Can customers book a delivery, moving date or storage unit online?" },
            a: {
              nl: "Ja. Met een [[boekingswidget]] kiezen klanten een datum of tijdslot, geven ze adressen en details door en betalen ze eventueel direct een aanbetaling. Voor self-storage kan dat per boxformaat, met beschikbaarheid en huurperiode. Bevestigingen en herinneringen gaan automatisch, en de boeking komt in je planning terecht. Zo neem je de telefoon alleen nog op voor de vragen die echt een gesprek nodig hebben.",
              en: "Yes. With a [[boekingswidget|booking widget]] customers choose a date or time slot, enter addresses and details and, if you like, pay a deposit straight away. For self-storage that works per unit size, with availability and rental period. Confirmations and reminders go out automatically, and the booking lands in your planning. That way you only pick up the phone for the questions that really need a conversation.",
            },
          },
        ],
      },
      {
        name: { nl: "Wagenpark & lease", en: "Fleet & leasing" },
        intro: {
          nl: "Voor truck- en trailerverhuurders, leasemaatschappijen voor bedrijfswagens, fleetmanagementbedrijven en telematica-aanbieders die transportbedrijven helpen aan materieel en inzicht.",
          en: "For truck and trailer rental companies, commercial vehicle leasing companies, fleet management firms and telematics providers that help transport companies with equipment and insight.",
        },
        types: [
          { nl: "Truck- en trailerverhuurders", en: "Truck and trailer rental companies" },
          { nl: "Leasemaatschappijen voor bedrijfswagens", en: "Commercial vehicle leasing companies" },
          { nl: "Fleetmanagementbedrijven", en: "Fleet management companies" },
          { nl: "Telematica-aanbieders", en: "Telematics providers" },
        ],
        useCases: [
          {
            title: { nl: "Keuzehulp voor het juiste materieel", en: "Finder for the right equipment" },
            text: {
              nl: "Een paar vragen over lading, afstand en frequentie, en de klant ziet welke truck, trailer of bus past.",
              en: "A few questions about cargo, distance and frequency, and the customer sees which truck, trailer or van fits.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Fleetportaal voor klanten", en: "Fleet portal for customers" },
            text: {
              nl: "Contracten, onderhoud, schades en documenten per voertuig in één overzicht.",
              en: "Contracts, maintenance, damage and documents per vehicle in one overview.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "UX/UI voor een telematicaplatform", en: "UX/UI for a telematics platform" },
            text: {
              nl: "Veel data, helder gepresenteerd, zodat planners en fleetmanagers snel zien wat aandacht nodig heeft.",
              en: "Lots of data, clearly presented, so planners and fleet managers quickly see what needs attention.",
            },
            service: "web-apps-portals-apps",
            application: "ux-ui-app-design",
          },
          {
            title: { nl: "LinkedIn Ads richting fleetmanagers", en: "LinkedIn Ads aimed at fleet managers" },
            text: {
              nl: "Bereik inkopers en fleetmanagers bij transportbedrijven met content die hun vragen beantwoordt.",
              en: "Reach buyers and fleet managers at transport companies with content that answers their questions.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe leg je een fleetmanagement- of telematicaplatform helder uit?", en: "How do you explain a fleet management or telematics platform clearly?" },
            a: {
              nl: "Laat het scherm zien en vertel wat het oplost. Een fleetmanager wil weten wat het hem scheelt: minder zoeken naar papieren, eerder zien wanneer onderhoud nodig is, minder lege kilometers. Een korte demovideo of een interactieve rondleiding door het platform zegt meer dan een lijst met features. Is het platform zelf lastig te gebruiken, dan helpt een kritische blik op de [[ux-ui-app-design|UX/UI]]. Met [[motion-design|motion design]] maak je van een dashboard een verhaal.",
              en: "Show the screen and explain what it solves. A fleet manager wants to know what it saves them: less searching for paperwork, spotting earlier when maintenance is due, fewer empty kilometres. A short demo video or an interactive tour of the platform says more than a list of features. If the platform itself is hard to use, a critical look at the [[ux-ui-app-design|UX/UI]] helps. With [[motion-design|motion design]] you turn a dashboard into a story.",
            },
          },
          {
            q: { nl: "Kan een klant online zelf een truck, trailer of bus huren?", en: "Can a customer rent a truck, trailer or van online themselves?" },
            a: {
              nl: "Ja. In een online reserveringsproces kiest de klant het type materieel, de periode en extra's zoals een verzekering of koelunit, en ziet hij direct de beschikbaarheid en de prijs. Hij reserveert, betaalt een borg of aanbetaling en krijgt een bevestiging met de praktische info voor het ophalen. Met een [[boekingswidget]] die gekoppeld is aan je verhuursysteem klopt de planning, ook als er daarnaast nog telefonisch wordt geboekt.",
              en: "Yes. In an online booking flow the customer chooses the type of equipment, the period and extras such as insurance or a refrigeration unit, and immediately sees availability and price. They reserve, pay a deposit and receive a confirmation with the practical info for collection. With a [[boekingswidget|booking widget]] linked to your rental system the planning stays correct, even when bookings also come in by phone.",
            },
          },
          {
            q: { nl: "Hoe bereik je fleetmanagers en inkopers bij transportbedrijven?", en: "How do you reach fleet managers and buyers at transport companies?" },
            a: {
              nl: "Via de kanalen waar ze zakelijk actief zijn, met content die hun vragen beantwoordt. Op LinkedIn bereik je inkopers en fleetmanagers op functie en branche. Deel praktische kennis, zoals lease tegenover koop of de overstap naar elektrische trucks, in plaats van alleen aanbiedingen. Bied iets nuttigs aan, zoals een checklist, en volg geïnteresseerden op met relevante mails. Met [[linkedin-ads|LinkedIn Ads]] en [[lead-nurturing]] bouw je zo een stevige pijplijn op.",
              en: "Through the channels where they are active professionally, with content that answers their questions. On LinkedIn you reach buyers and fleet managers by job title and industry. Share practical knowledge, such as leasing versus buying or the switch to electric trucks, rather than only offers. Offer something useful, like a checklist, and follow up interested people with relevant emails. With [[linkedin-ads|LinkedIn Ads]] and [[lead-nurturing|lead nurturing]] you build a solid pipeline that way.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Transportbedrijven", en: "Transport companies" },
      { nl: "Internationale transporteurs", en: "International hauliers" },
      { nl: "Koel- en vriestransporteurs", en: "Refrigerated transport companies" },
      { nl: "Bulk- en tanktransporteurs", en: "Bulk and tanker transport companies" },
      { nl: "Zwaartransportbedrijven", en: "Heavy haulage companies" },
      { nl: "Logistieke dienstverleners", en: "Logistics service providers" },
      { nl: "Warehousingbedrijven", en: "Warehousing companies" },
      { nl: "Fulfilmentbedrijven", en: "Fulfilment companies" },
      { nl: "Expediteurs", en: "Freight forwarders" },
      { nl: "Douane-expediteurs", en: "Customs brokers" },
      { nl: "Containerterminals", en: "Container terminals" },
      { nl: "Binnenvaartbedrijven", en: "Inland shipping companies" },
      { nl: "Rederijen", en: "Shipping lines" },
      { nl: "Havenbedrijven", en: "Port companies" },
      { nl: "Koeriersdiensten", en: "Courier services" },
      { nl: "Spoedkoeriers", en: "Same-day couriers" },
      { nl: "Last-mile bezorgers", en: "Last-mile delivery companies" },
      { nl: "Verhuisbedrijven", en: "Removal companies" },
      { nl: "Self-storagebedrijven", en: "Self-storage companies" },
      { nl: "Truck- en trailerverhuurders", en: "Truck and trailer rental companies" },
      { nl: "Leasemaatschappijen voor bedrijfswagens", en: "Commercial vehicle leasing companies" },
      { nl: "Fleetmanagementbedrijven", en: "Fleet management companies" },
      { nl: "Telematica-aanbieders", en: "Telematics providers" },
    ],
  },
];
