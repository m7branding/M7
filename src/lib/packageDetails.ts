// ============================================================
// M7 — Uitgebreide toelichting per pakket (achter het (i)-icoon).
// Per pakket beschrijven we in commerciële én technische termen wát we
// precies doen en waaróm je dit zou afnemen. Pakketten zonder eigen tekst
// vallen terug op een nette, samengestelde omschrijving.
// ============================================================

import type { Category, Pkg, PkgDetails } from "./catalog";

export const PKG_DETAILS: Record<string, PkgDetails> = {
  // ===================================================== BRANDING
  "brand-essentials": {
    what:
      "We ontwerpen het fundament van je visuele identiteit: een logo met alle benodigde varianten (staand, liggend, beeldmerk, mono), een kleurenpalet met vastgelegde hex-, RGB- en CMYK-waarden en een typografische set met duidelijke hiërarchie. Dat leggen we vast in beknopte richtlijnen en leveren we op als compleet export-pakket in SVG, PNG, EPS en PDF.",
    why:
      "Zonder vastgelegde basis gaat je merk zwerven: elke offerte, post en presentatie ziet er net anders uit en dat kost herkenbaarheid. Met deze set kan iedereen — jouw team, je drukker, je bureau — direct het juiste bestand pakken. Het is de goedkoopste manier om er meteen professioneel uit te zien.",
    includes: [
      "Logo-ontwerp met 2 conceptrichtingen en 2 iteratierondes",
      "Kleurenpalet met primaire, secundaire en functionele kleuren",
      "Typografie-set met koppen, broodtekst en accenten",
      "Beknopt richtlijnendocument (PDF)",
      "Export-package voor web, print en social",
    ],
    tech: [
      "Vectorbestanden in SVG en EPS, rasterbestanden in PNG met transparantie",
      "Kleurwaarden voor RGB (scherm), CMYK (drukwerk) en Pantone op aanvraag",
      "Fontlicenties lopen op naam van jouw organisatie",
    ],
  },
  "brand-startup": {
    what:
      "Een volledige merkontwikkeling vanaf nul. We beginnen met positionering en archetype, bepalen naming en tone of voice en vertalen dat naar een complete visuele taal: logo, kleur, typografie, iconografie en brand patterns. Alles komt samen in een brandbook waarmee je merk consistent uit te rollen is.",
    why:
      "Een startup krijgt maar één keer de kans op een eerste indruk bij investeerders, klanten en toekomstige medewerkers. Een doordacht merk laat je groter en betrouwbaarder ogen dan je bent, en voorkomt dat je over twee jaar alles opnieuw moet doen. Het scheelt bovendien enorm veel discussietijd intern.",
    includes: [
      "Positionering, kernwaarden en merk-archetype",
      "Naming-traject of naam-validatie",
      "Volledige visuele identiteit incl. patterns en iconografie",
      "Tone of voice met schrijfvoorbeelden",
      "Brandbook als PDF en online",
    ],
    tech: [
      "Werkbestanden in Figma, gedeeld met jouw team",
      "Beeldmerk getest op klein formaat (favicon, app-icoon, social avatar)",
      "Toegankelijke kleurcombinaties, gecontroleerd op WCAG-contrast",
    ],
  },
  "brand-rebrand": {
    what:
      "We analyseren wat er in je huidige merk werkt en wat niet, en bouwen van daaruit een vernieuwde identiteit. Dat gaat over meer dan een nieuw logo: we herijken positionering, verfrissen de visuele taal en maken een migratieplan zodat oud en nieuw niet maandenlang door elkaar lopen.",
    why:
      "Merken verouderen, doelgroepen verschuiven en na een fusie of koerswijziging klopt het beeld vaak niet meer met het verhaal. Een rebranding herstelt die aansluiting zonder de opgebouwde herkenning weg te gooien. Je behoudt wat waardevol is en laat los wat je remt.",
    includes: [
      "Merkaudit van huidige uitingen en positionering",
      "Herijkte positionering en visuele identiteit",
      "Migratieplan met prioriteiten per drager",
      "Interne presentatie om je team mee te nemen",
    ],
  },
  "brand-book-plus": {
    what:
      "Een uitgebreid brandbook dat verder gaat dan logogebruik: layoutprincipes, grid, fotografie- en illustratiestijl, do's-and-don'ts, voorbeelden per drager en een communication guide met schrijfregels. Bedoeld als naslagwerk voor iedereen die iets voor je merk maakt.",
    why:
      "Zodra meerdere mensen of bureaus aan je merk werken, is een gedeeld naslagwerk het verschil tussen consistentie en chaos. Het bespaart tijd bij elke briefing en voorkomt eindeloze correctierondes. Nieuwe collega's zijn er in een uur mee weg.",
    includes: [
      "Layout- en gridprincipes met voorbeelden",
      "Fotografie- en illustratierichtlijnen",
      "Communication guide met tone of voice en schrijfregels",
      "Do's-and-don'ts per merkelement",
    ],
  },
  "brand-mockups": {
    what:
      "We zetten je identiteit op realistische mock-ups: gevel, bedrijfskleding, verpakking, drukwerk, social en schermen. Zo zie je je merk in de echte wereld in plaats van als los logo op een witte pagina.",
    why:
      "Mock-ups maken een merk tastbaar en verkopen het intern. Ze helpen bij besluitvorming, zijn direct bruikbaar op je website en in presentaties, en laten leveranciers precies zien wat de bedoeling is.",
  },
  "brand-illustration": {
    what:
      "Een eigen illustratie- of iconenstijl die alleen van jou is: consistente lijndikte, kleurgebruik en opbouw, uitgewerkt in een set die je eindeloos kunt uitbreiden.",
    why:
      "Stock-iconen maken je merk inwisselbaar. Een eigen stijl geeft je website, presentaties en documenten direct herkenbaarheid en werkt als visuele handtekening.",
  },
  "brand-logo-export": {
    what:
      "We leveren je bestaande of nieuwe logo uit in elk formaat dat je ooit nodig hebt: vector, raster, transparant, mono, inverted, favicon en social-avatars — netjes benoemd en gemapt.",
    why:
      "Negen van de tien merkfouten ontstaan doordat iemand niet het juiste bestand kon vinden. Eén map met logische naamgeving lost dat permanent op.",
  },
  "brand-email-sig": {
    what:
      "Een e-mailhandtekening in je huisstijl die in Outlook, Gmail en Apple Mail hetzelfde blijft, met uitrolinstructies of een centrale installatie voor je hele team.",
    why:
      "Je organisatie verstuurt duizenden mails per maand — dat is je meest gebruikte merkdrager. Eén consistente handtekening is gratis zichtbaarheid en oogt direct verzorgd.",
  },

  // ===================================================== PRINT
  "print-cards": {
    what:
      "Ontwerp van dubbelzijdige visitekaartjes in je huisstijl, drukklaar aangeleverd met bleed, snijmarges en het juiste kleurprofiel. Desgewenst adviseren we over papiersoort, dikte en afwerking zoals soft-touch, spot-UV of preegdruk.",
    why:
      "Een kaartje is vaak het enige fysieke ding dat na een gesprek achterblijft. De kwaliteit ervan zegt onbewust iets over de kwaliteit van je werk.",
    tech: ["Aangeleverd als PDF/X met 3 mm bleed", "CMYK-profiel afgestemd op je drukker", "Optioneel per medewerker gepersonaliseerd"],
  },
  "print-flyer": {
    what:
      "Een compacte flyer met een duidelijke hiërarchie: één boodschap, één call-to-action. Enkel- of dubbelzijdig, in het formaat dat bij je verspreiding past.",
    why:
      "Voor lokale acties, beurzen en deur-tot-deur werkt print nog steeds. Mits het ontwerp binnen twee seconden duidelijk maakt wat je aanbiedt.",
  },
  "print-brochure": {
    what:
      "Een brochure van 16 tot 20 pagina's waarin je diensten, historie en werkwijze samenkomen. We verzorgen het grid, de opmaak, de beeldselectie en de print-ready oplevering.",
    why:
      "Bij grotere aankopen willen mensen iets kunnen vasthouden en doorgeven binnen hun organisatie. Een goede brochure doet werk in vergaderingen waar jij niet bij bent.",
  },
  "print-promo": {
    what:
      "Ontwerp van posters, promotiedrukwerk en merchandise — van A3-poster tot bedrukte kleding of relatiegeschenk, met de juiste aanleverbestanden per leverancier.",
    why:
      "Promotiemateriaal is zichtbaarheid die blijft rondgaan. Op-merk uitgevoerd voelt het als een cadeau in plaats van als reclame.",
  },
  "print-rollup": {
    what:
      "Ontwerp voor een roll-upbanner (85×200 of 100×200 cm) waarbij de boodschap vanaf vier meter afstand leesbaar is. We houden rekening met de dode zone onderin die door de cassette en het publiek wordt afgedekt.",
    why:
      "Op een beurs heb je drie seconden om iemand te laten stoppen. Een roll-up met te veel tekst wordt genegeerd; eentje met één sterke claim werkt als magneet.",
    tech: ["Ontwerp op ware grootte met bleed volgens leverancier", "Belangrijke inhoud boven 60 cm", "Aangeleverd in CMYK met ingesloten fonts"],
  },
  "print-flag": {
    what:
      "Ontwerp voor beachflags, mastvlaggen of gevelvlaggen. Elk vlagtype heeft een eigen vorm en zichtzone, dus we passen de compositie per model aan in plaats van één ontwerp uit te rekken.",
    why:
      "Vlaggen bewegen en trekken daardoor het oog — ideaal om je locatie, evenement of bouwplaats van veraf zichtbaar te maken. Ze zijn goedkoop, herbruikbaar en jarenlang inzetbaar.",
    tech: ["Enkel- of dubbelzijdig (doorschijnend vs. geblokt)", "Rekening met zoom, tunnel en hijsrand", "Bestanden per fabrikantsjabloon"],
  },
  "print-banner": {
    what:
      "Ontwerp voor spandoeken, bouwhekbanners en gevelbanners op groot formaat, inclusief advies over materiaal (zeil, mesh of vinyl), ogen en bevestiging.",
    why:
      "Grootformaat is de goedkoopste vorm van buitenreclame per zichtbeurt. Mits de tekst kort genoeg is om vanuit een rijdende auto te lezen.",
    tech: ["Ontwerp op schaal met correcte resolutie voor het kijkafstandsprofiel", "Mesh bij windbelasting", "Zoom en ringen ingetekend"],
  },
  "print-standbuild": {
    what:
      "Ontwerp van je beursstand of ruimtelijke signing: standwanden, balies, displays en bewegwijzering, aangeleverd volgens de specificaties van jouw standbouwer.",
    why:
      "Een stand die klopt met je merk zorgt dat bezoekers je al herkennen voordat ze bij je staan. Het verschil tussen een generieke systeemwand en een doordachte stand is direct zichtbaar in het aantal gesprekken.",
  },
  "print-vehicle": {
    what:
      "Ontwerp van autobelettering op het officiële voertuigsjabloon — van subtiele signing op de zijkant tot een full wrap, snijklaar aangeleverd voor je belettingsbedrijf.",
    why:
      "Een bedrijfsbus rijdt dagelijks langs duizenden mensen in precies jouw werkgebied. Goed uitgevoerde belettering is een van de goedkoopste vormen van lokale bekendheid.",
  },
  "print-invite": {
    what:
      "Ontwerp van uitnodigingen voor events, openingen of lanceringen — digitaal, print of allebei, optioneel gekoppeld aan een RSVP-flow op je site.",
    why:
      "De uitnodiging bepaalt de verwachting van je event. Een verzorgde uitnodiging verhoogt de opkomst en zet meteen de juiste toon.",
  },

  // ===================================================== WEBSITES
  "web-essential": {
    what:
      "Een compacte website van maximaal vijf pagina's, volledig op maat ontworpen — geen template. Je krijgt een CMS met custom velden zodat je teksten, beelden en blokken zelf beheert, plus basis-SEO, toegankelijkheid en een eerste contentopzet die we samen aanscherpen.",
    why:
      "Voor veel bedrijven is de website het eerste en enige verkoopgesprek dat 24/7 doorloopt. Een strak vormgegeven, snelle site met een duidelijke call-to-action levert meer aanvragen op dan een uitgebreide site die traag en rommelig is. Klein beginnen kan prima — als het fundament maar goed staat.",
    includes: [
      "Ontwerp in Figma met 2 iteratierondes",
      "Bouw op WordPress, Webflow of custom CMS",
      "CMS met custom velden voor zelfbeheer",
      "Meta-titels, -beschrijvingen en sitemap",
      "Eerste contentdraft voor alle pagina's",
    ],
    tech: [
      "Responsive vanaf 320 px, getest op de gangbare browsers",
      "Core Web Vitals als uitgangspunt (beeldcompressie, lazy loading, moderne formats)",
      "Semantische HTML met correcte kopstructuur en alt-teksten",
    ],
  },
  "web-pro": {
    what:
      "Een volwaardige site tot twaalf pagina's met een uitgewerkt content-model: we bepalen eerst welke content dynamisch moet zijn (diensten, cases, vestigingen, blog) en bouwen daar collecties voor. Inclusief sitemap, URL-schema, scroll- en hover-interacties en een geanimeerd fullscreen-menu.",
    why:
      "Zodra je site groeit, is losse pagina's bijbouwen niet houdbaar: je krijgt inconsistente opmaak en een onvindbare structuur. Een content-model zorgt dat elke nieuwe dienst of case automatisch overal correct verschijnt. Dat scheelt je jarenlang beheertijd én het is meteen beter voor SEO.",
    includes: [
      "Content-model, sitemap en URL-schema",
      "Dynamische collecties met filter- en overzichtspagina's",
      "Scroll-, hover- en load-interacties",
      "CMS-training en go-live begeleiding",
    ],
    tech: [
      "Herbruikbare componenten zodat nieuwe pagina's snel te bouwen zijn",
      "301-redirectplan bij vervanging van een bestaande site",
      "Schema.org-markup voor organisatie, diensten en breadcrumbs",
    ],
  },
  "web-premium": {
    what:
      "Maatwerk zonder plafond: dynamische sector- en doelgroeppagina's die uit één sjabloon worden gegenereerd, Lottie- en scroll-animaties, AI-infographics, hero-video en zelf samen te stellen landingsblokken. Er gaat een volwaardige styleframing-fase aan vooraf waarin we de visuele richting vastleggen.",
    why:
      "Als je meerdere doelgroepen, sectoren of proposities bedient, wil je voor elk daarvan een eigen landingspagina zonder tien keer hetzelfde te bouwen. Dat vergroot je organische bereik en je advertentierelevantie tegelijk. En het niveau van afwerking maakt je merk zichtbaar duurder dan de concurrentie.",
    includes: [
      "Styleframing-fase met visuele richting",
      "Dynamisch gegenereerde sector- of doelgroeppagina's",
      "Lottie-, scroll- en cursor-animaties",
      "Zelf samen te stellen landingsblokken",
    ],
  },
  "web-styleframing": {
    what:
      "Een aparte ontwerpfase waarin we twee tot drie visuele richtingen uitwerken op echte schermen, inclusief typografie, kleurgebruik, beeldbehandeling en motion-principes. Je kiest de richting voordat er ook maar iets gebouwd wordt.",
    why:
      "De duurste fout in een webproject is halverwege de bouw van richting veranderen. Styleframing haalt die discussie naar voren, waar hij nog goedkoop is.",
  },
  "web-content": {
    what:
      "Wij schrijven de teksten voor je site: wervend, gestructureerd en met zoekwoorden verwerkt op de plekken waar ze tellen. Inclusief metateksten en call-to-actions per pagina.",
    why:
      "Content is bij bijna elk project de vertragende factor. Uitbesteden betekent dat je site op tijd live gaat én dat de teksten vanaf dag één op vindbaarheid en conversie zijn geschreven.",
  },
  "web-animations": {
    what:
      "Scroll-, hover- en laadanimaties die de aandacht sturen: elementen die inschuiven op het juiste moment, parallax-diepte en microinteracties op knoppen en formulieren.",
    why:
      "Beweging bepaalt waar iemand kijkt. Goed getimede animatie verlengt de tijd op de pagina en laat je site duurder aanvoelen — zolang het niet in de weg zit.",
    tech: ["Volledig uitgezet bij prefers-reduced-motion", "GPU-vriendelijke transformaties zodat scrollen soepel blijft"],
  },
  "web-media": {
    what:
      "Een beeldpakket voor je site: fotoselectie of AI-gegenereerd beeld, bijpassende illustraties en optioneel een hero-video, allemaal geoptimaliseerd voor snelle laadtijden.",
    why:
      "Stockbeeld dat je concurrent ook gebruikt ondermijnt je verhaal. Eigen of op maat gegenereerd beeld maakt je site direct geloofwaardiger.",
  },
  "web-landingblocks": {
    what:
      "Een set herbruikbare contentblokken waarmee jij zelf nieuwe landingspagina's samenstelt — kies een blok, vul in, publiceer. De styling ligt vast, dus het blijft altijd kloppen.",
    why:
      "Marketingteams willen snel kunnen inspelen op een campagne of beurs. Met blokken doe je dat in een half uur in plaats van met een offerte-aanvraag.",
  },
  "web-popups": {
    what:
      "Dynamische pop-ups die jij zelf beheert: inhoud, timing, zichtbaarheid per pagina en hoe vaak iemand ze te zien krijgt. Optioneel met animatie of confetti bij een geslaagde actie.",
    why:
      "Een goed getimede pop-up is een van de effectiefste manieren om nieuwsbriefinschrijvingen of aanvragen te verhogen. Zelf kunnen instellen betekent dat je hem ook weer uit kunt zetten wanneer het genoeg is.",
  },
  "web-contentmodel": {
    what:
      "We ontwerpen de informatie-architectuur van je site: welke content bestaat er, hoe verhoudt die zich tot elkaar, welke velden hoort erbij en welk URL-schema past daarbij. Het resultaat is een blauwdruk voor je CMS.",
    why:
      "Een goede structuur is onzichtbaar maar bepaalt alles: hoe makkelijk je beheert, hoe goed Google je begrijpt en hoe snel je kunt uitbreiden. Achteraf herstructureren kost een veelvoud.",
  },
  "web-migration": {
    what:
      "Bij een platformwissel analyseren we je bestaande URL's, verkeer en posities, en stellen we een volledig 301-redirectplan op. Na livegang monitoren we indexatie en crawlfouten en sturen we bij.",
    why:
      "De klassieke fout bij een nieuwe website is dat het organische verkeer wegvalt omdat oude URL's doodlopen. Een redirectplan behoudt de autoriteit die je in jaren hebt opgebouwd.",
    tech: ["Volledige URL-inventarisatie via crawl en Search Console", "Redirects op serverniveau, geen meta-refresh", "Monitoring van 404's en indexdekking na livegang"],
  },
  "web-golive": {
    what:
      "Persoonlijke CMS-training voor jouw team, begeleiding rond de livegang en desgewenst een staging-omgeving waarin je veilig kunt oefenen voordat er iets zichtbaar wordt.",
    why:
      "Een site die je niet durft aan te raken, veroudert. Een uur training zorgt dat je zelf verder kunt en scheelt tientallen supportvragen.",
  },
  "web-preloader": {
    what:
      "Een geanimeerde intro die tijdens het laden je logo of merkvorm opbouwt en vloeiend overgaat in de eerste sectie. We tonen hem één keer per sessie, zodat terugkerende bezoekers niet wachten.",
    why:
      "De eerste seconde bepaalt de toon. Een pre-loader maakt van laadtijd merkbeleving in plaats van een leeg scherm — en verbergt de laatste laadmilliseconden van zware hero-secties.",
    tech: ["Lichtgewicht in SVG, CSS of Lottie", "Session-storage zodat hij maar één keer speelt", "Uitgezet bij reduced motion"],
  },
  "web-multisite": {
    what:
      "Meerdere sites, labels, afdelingen of vestigingen op één technisch fundament, met een switcher waarmee bezoekers wisselen tussen bijvoorbeeld afdeling of regio. Componenten zijn gedeeld, terwijl kleur, content en publicatierechten per onderdeel verschillen.",
    why:
      "Losse sites per afdeling betekenen losse kosten, losse updates en langzaam uiteenlopende huisstijlen. Eén fundament houdt beheer en kosten in de hand terwijl elk onderdeel toch een eigen gezicht houdt.",
    includes: [
      "Gedeelde componentenbibliotheek",
      "Afdeling-/vestigingsswitcher in de navigatie",
      "Per onderdeel eigen kleuraccent en content",
      "Rollen en publicatierechten per team",
    ],
  },
  "web-multilang": {
    what:
      "Meertaligheid met een nette URL-structuur (/nl/, /en/ of aparte domeinen), correct ingerichte hreflang-tags en vertaalbare CMS-velden. Optioneel starten we met machinevertaling die jij daarna redigeert.",
    why:
      "Half vertaalde sites schaden je vindbaarheid meer dan ze opleveren. Goed ingerichte meertaligheid opent nieuwe markten zonder je Nederlandse posities in gevaar te brengen.",
  },
  "web-motion": {
    what:
      "Scroll-gestuurde secties, parallax-diepte, cursor-interacties en Lottie-animaties die vanuit After Effects als vectoranimatie in je site komen — scherp op elk scherm en klein in bestandsgrootte.",
    why:
      "Motion is het verschil tussen een site die informeert en een site die indruk maakt. Het houdt bezoekers langer vast en communiceert vakmanschap zonder één woord.",
  },
  "web-portal-login": {
    what:
      "Een besloten deel van je site met accounts en rollen, waar je documenten, prijzen of trainingen achter een login zet. Inclusief uitnodigingsflow en wachtwoordherstel.",
    why:
      "Zodra je iets exclusiefs te bieden hebt — dealerprijzen, handleidingen, klantdossiers — wordt je site meer dan een folder. Het verhoogt de waarde van je relatie en levert bruikbare gebruiksdata op.",
  },
  "web-jobs": {
    what:
      "Een werkenbij-module waarin je zelf vacatures plaatst, met filters op afdeling, locatie en uren, een sollicitatieformulier met bijlage en JobPosting-schema zodat je vacatures in Google for Jobs verschijnen.",
    why:
      "Recruitmentbureaus zijn duur. Vacatures die zelf vindbaar zijn in Google leveren directe sollicitanten op — en je kunt ze binnen vijf minuten plaatsen in plaats van via een aanvraag.",
  },
  "web-locations": {
    what:
      "Vestigingen als CMS-collectie met een kaart, zoeken op postcode, openingstijden, routelink en LocalBusiness-schema per locatie.",
    why:
      "Voor lokale zoekopdrachten is een eigen pagina per vestiging het krachtigste dat je kunt hebben. Bezoekers vinden bovendien sneller wat ze zoeken, wat scheelt in telefoontjes.",
  },
  "web-accessibility": {
    what:
      "Een toegankelijkheidsaudit tegen WCAG 2.2 niveau AA en het doorvoeren van de fixes: contrast, zichtbare focus-states, toetsenbordnavigatie, correcte semantiek en ARIA-labels waar nodig.",
    why:
      "Ongeveer één op de vijf mensen ondervindt drempels op een gemiddelde website. Toegankelijkheid vergroot je bereik, is beter voor SEO en wordt voor steeds meer organisaties een harde eis in aanbestedingen.",
  },
  "web-speed": {
    what:
      "Een gerichte snelheidsslag: we meten Core Web Vitals, optimaliseren beeld en fonts, ruimen renderblokkerende scripts op en leveren een voor- en nameting op zodat de winst zichtbaar is.",
    why:
      "Elke seconde extra laadtijd kost conversie, en snelheid weegt mee in je ranking. Het is de goedkoopste conversieverbetering die er is: je verandert niets aan je aanbod, alleen aan de wachttijd.",
  },
  "web-designsystem": {
    what:
      "Een componentenbibliotheek met design tokens die aan je huisstijl hangen, gedocumenteerd zodat jouw team er zelf mee kan werken. Elk component bestaat één keer en wordt overal hergebruikt.",
    why:
      "Zonder systeem groeit elke site richting inconsistentie en wordt elke wijziging duurder. Met een design system bouw je nieuwe pagina's in een uur en verander je je merkkleur op één plek.",
  },

  // ===================================================== WEBSHOP
  "shop-start": {
    what:
      "Een complete webshop tot vijftig producten op WooCommerce of Shopify. We bouwen conversiegerichte productpagina's, een logische categoriestructuur, betaalmethodes en verzendregels, en zetten de basis-SEO goed neer zodat je producten gevonden worden.",
    why:
      "De meeste shops verliezen omzet op de basis: onduidelijke productpagina's, te veel klikken naar de kassa en verzendkosten die pas op het laatst zichtbaar worden. Wij richten die basis in volgens wat aantoonbaar werkt, zodat je vanaf dag één verkoopt in plaats van eerst maanden moet leren.",
    includes: ["Ontwerp en bouw van shop en productsjablonen", "Categorie- en filterstructuur", "Betaal- en verzendmethodes ingericht", "Basis-SEO en sitemap"],
    tech: ["WooCommerce op WordPress of Shopify", "Productimport via CSV-sjabloon", "Testorders in sandbox voor livegang"],
  },
  "shop-pro": {
    what:
      "Een onbeperkt schaalbare shop met de techniek helemaal op orde: EU-VAT-controle, een geavanceerde custom checkout, kortingscodes en campagnes, PDF-facturen in je huisstijl en vendor-based pricing voor verschillende klantgroepen.",
    why:
      "Zodra je serieus verkoopt, lopen standaardshops vast op btw-regels, uitzonderingen in prijzen en handmatige administratie. Dit pakket haalt dat handwerk weg en voorkomt fiscale fouten die achteraf duur zijn om recht te zetten.",
    tech: ["VIES-validatie van btw-nummers voor B2B", "OSS-drempels per land", "Checkout-aanpassingen zonder de update-paden te breken"],
  },
  "shop-scale": {
    what:
      "Een marktplaats- of internationale opzet: meerdere vendors, headless of performance-build, koppelingen met ERP en PIM, en multi-currency met landspecifieke prijzen en belastingregels.",
    why:
      "Bij dit volume is snelheid geld en is handmatig beheer onmogelijk. Een headless front-end met een goede datastroom naar je backoffice betaalt zichzelf terug in conversie en in bespaarde uren.",
  },
  "shop-productstructuur": {
    what:
      "We werken je categorie- en filterboom uit, bepalen welke eigenschappen varianten worden en welke filters, en leggen het URL- en breadcrumbschema vast. Je krijgt een importsjabloon waarin je je productdata gestructureerd aanlevert.",
    why:
      "Een verkeerde productstructuur merk je pas als je duizend producten hebt en niets meer te vinden is. Vooraf ordenen kost een fractie van wat achteraf herstructureren kost — en het is direct merkbaar in je vindbaarheid en conversie.",
    tech: ["Attributen versus varianten expliciet gescheiden", "Filterbare eigenschappen voorbereid op facetnavigatie", "URL-schema zonder dubbele content"],
  },
  "shop-pim": {
    what:
      "Een centrale productdatabase (een echt PIM of een goed ingerichte Airtable) waar alle productinformatie vandaan komt. Vanuit die bron synchroniseren we automatisch naar je shop, en we richten bulkverrijking, vertalingen en leveranciersfeeds in.",
    why:
      "Zodra je op meerdere kanalen verkoopt of met leveranciersdata werkt, wordt losse productinvoer in de shop onhoudbaar. Eén bron betekent dat een prijswijziging op één plek gebeurt en overal doorwerkt — en dat je nooit meer verouderde specs op je site hebt.",
    tech: ["Sync via API of scheduled jobs met foutlogging", "Veldmapping per kanaal", "Versiebeheer op productdata"],
  },
  "shop-configurator": {
    what:
      "Een stap-voor-stap configurator waarin de klant zelf een product samenstelt, met live prijsberekening en een visuele preview van de keuze. De volledige configuratie gaat mee in de order zodat productie precies weet wat er gemaakt moet worden.",
    why:
      "Maatwerkproducten verkopen slecht via een standaard productpagina, omdat de klant zich geen voorstelling kan maken en jij eindeloos moet mailen over opties. Een configurator neemt dat gesprek over en filtert bovendien de serieuze aanvragen eruit.",
  },
  "shop-b2b": {
    what:
      "Zakelijke klanten krijgen hun eigen prijzen: klantgroepen met afgesproken tarieven, staffel- en volumekortingen, bestellen op rekening met PO-nummer, een snelbestellijst en herhaalorders in één klik.",
    why:
      "B2B-klanten willen niet zoeken — ze willen hun vaste artikelen snel opnieuw bestellen tegen hun eigen prijs. Wie dat online goed regelt, ziet orders verschuiven van de telefoon naar de shop, en dat scheelt direct in verkoopuren.",
  },
  "shop-vendor": {
    what:
      "Een omgeving per vendor of dealer waarin zij zelf producten en voorraad beheren, met commissie- en uitbetalingsoverzicht en automatische ordersplitsing per leverancier.",
    why:
      "Als je assortiment van meerdere partijen komt, wil je niet de tussenpersoon zijn die alles handmatig doorstuurt. Een vendorportaal maakt je schaalbaar zonder dat je team meegroeit.",
  },
  "shop-checkout": {
    what:
      "Een checkout die op maat is gemaakt: one-page of stapsgewijs, met adres-autocomplete en validatie, bezorg- en afhaalopties duidelijk in beeld en een order-bump vlak voor het betalen.",
    why:
      "Gemiddeld haakt zeven op de tien bezoekers af in de winkelwagen of checkout. Elke stap en elk verplicht veld dat je weghaalt, verdient zich direct terug. Een order-bump verhoogt bovendien je gemiddelde orderwaarde zonder extra advertentiebudget.",
    tech: ["Adresvalidatie via postcode-API", "Minimale verplichte velden", "Meetbaar gemaakt per checkout-stap"],
  },
  "shop-upsell": {
    what:
      "Upsell- en cross-sellblokken op de juiste momenten: 'vaak samen gekocht' op de productpagina, upgrade-suggesties, cross-sells in winkelwagen en checkout en een post-purchase aanbod op de bedankpagina.",
    why:
      "Een bestaande koper overtuigen kost bijna niets vergeleken met een nieuwe bezoeker werven. Goede upsells verhogen je orderwaarde met tientallen procenten zonder dat je advertentiebudget meebeweegt.",
  },
  "shop-bundles": {
    what:
      "Vaste en zelf samen te stellen bundels met een eigen bundelprijs, staffelkorting per aantal en correcte voorraadafboeking per bundelonderdeel.",
    why:
      "Bundels verhogen je orderwaarde en helpen je langzaam lopende producten mee te verkopen. Bovendien maken ze prijsvergelijking met concurrenten lastiger.",
  },
  "shop-promo": {
    what:
      "Een actie-engine waarmee je zelf kortingscodes en automatische acties instelt — per periode, klantgroep of productselectie — inclusief actiebanners en een aftelklok, allemaal beheerbaar vanuit het CMS.",
    why:
      "Acties moeten binnen een uur kunnen draaien, niet binnen een sprint. Zelf kunnen instellen betekent dat je kunt inspelen op Black Friday, een beurs of een overvolle voorraad zonder ontwikkelaar.",
  },
  "shop-popups": {
    what:
      "Slimme pop-ups met regels: een exit-intent aanbod, een drempelmelding ('nog €12 tot gratis verzending') en varianten per pagina of bezoekerstype, meetbaar gemaakt zodat je weet wat werkt.",
    why:
      "Bezoekers die op het punt staan te vertrekken zijn goedkoop terug te winnen. Eén goed getimede pop-up levert vaak meer op dan een maand extra advertentiebudget.",
  },
  "shop-notifications": {
    what:
      "Meldingen die je klant helpen beslissen: voorraad- en levertijdinformatie, een 'laat me weten'-melding bij uitverkochte producten, een verzendbalk met bezorgbelofte en een site-brede aankondigingsbalk.",
    why:
      "Urgentie werkt alleen als hij klopt. Echte voorraad- en levertijdinformatie verlaagt twijfel en het aantal 'waar blijft mijn bestelling'-mails tegelijk.",
  },
  "shop-search": {
    what:
      "Een zoekfunctie die suggesties toont tijdens het typen, typefouten opvangt en resultaten combineert met facetfilters. Inclusief synoniemen, merchandisingregels en een rapport van wat bezoekers zoeken.",
    why:
      "Bezoekers die de zoekfunctie gebruiken converteren meestal een veelvoud van de rest — mits ze iets vinden. Het zoekrapport laat bovendien precies zien welke producten je mist in je assortiment.",
  },
  "shop-reviews": {
    what:
      "Reviews van een extern platform (Kiyoh, Trustpilot of Google) op je productpagina's, inclusief sterren in de zoekresultaten via rich snippets, klantfoto's en een automatische reviewuitnodiging na levering.",
    why:
      "Sociale bewijskracht is bij online aankopen doorslaggevend, en sterren in Google verhogen je doorklikratio zichtbaar. Automatische uitnodigingen zorgen dat je stroom aan reviews niet opdroogt.",
  },
  "shop-loyalty": {
    what:
      "Een spaarprogramma met punten, klantniveaus met eigen voordelen en een referral-mechanisme waarmee klanten nieuwe klanten aanbrengen. Het saldo is zichtbaar in het klantaccount.",
    why:
      "Herhaalaankopen zijn goedkoper dan nieuwe klanten werven. Een loyaltyprogramma verhoogt zowel de frequentie als de klantwaarde, en geeft je een reden om contact te houden.",
  },
  "shop-subscriptions": {
    what:
      "Abonnementsproducten met bezorgfrequentie, automatische incasso of herhaalbetaling, zelfservice om te pauzeren of te wijzigen en een flow voor herinneringen en mislukte betalingen.",
    why:
      "Terugkerende omzet maakt je bedrijf voorspelbaar en direct meer waard. Voor verbruiksartikelen is een abonnement bovendien vaak gemakkelijker voor de klant dan telkens opnieuw bestellen.",
  },
  "shop-wishlist": {
    what:
      "Een verlanglijst per account, de mogelijkheid om winkelwagens te bewaren en te delen, en een herinnering bij prijsdaling. Meteen de basis voor je verlaten-winkelwagenflow.",
    why:
      "Veel bezoekers zijn nog niet klaar om te kopen. Wie je ze laat bewaren, houdt het contact vast in plaats van het te verliezen aan de volgende tab.",
  },
  "shop-payments": {
    what:
      "We sluiten je betaalprovider aan — Mollie, Stripe of Adyen — inclusief API-keys en webhooks, activeren de betaalmethodes per land en testen zowel test- als live-transacties. Terugbetalingen kun je daarna vanuit de shop doen.",
    why:
      "Een verkeerd geconfigureerde webhook betekent bestellingen die wel betaald zijn maar niet binnenkomen. Dit netjes inrichten voorkomt precies het soort fout dat je pas ontdekt als een klant belt.",
    tech: ["Webhooks met retry en logging", "Betaalmethodes per land en valuta", "Refund-flow getest inclusief deelbetalingen"],
  },
  "shop-bnpl": {
    what:
      "Achteraf betalen via Klarna, in3 of Riverty: we begeleiden de aanvraag en aansluiting, stellen risico- en landregels in en plaatsen de betaalbadges op product- en checkoutpagina.",
    why:
      "Achteraf betalen verhoogt de conversie meetbaar, vooral bij hogere orderbedragen. Het verschil zit hem in de zichtbaarheid: badges op de productpagina werken beter dan pas in de kassa.",
  },
  "shop-analytics": {
    what:
      "Volledige e-commerce tracking in GA4: alle events van productweergave tot aankoop, de winkelwagen- en checkouttrechter, omzet uitgesplitst naar kanaal, campagne en product, met Consent Mode en klaar voor server-side meting.",
    why:
      "Zonder e-commerce tracking weet je wel hoeveel je omzet, maar niet waar het vandaan komt of waar het misgaat. Met deze inrichting kun je per stap zien hoeveel omzet je laat liggen — en dat is meestal de goedkoopste groei die er is.",
    tech: ["GA4 recommended e-commerce events", "Datalayer-implementatie in de shop", "Consent Mode v2 gekoppeld aan je CMP"],
  },
  "shop-feeds": {
    what:
      "Een productfeed voor Google Shopping en Meta, met feedregels, categorie-mapping en filters, gesynchroniseerde voorraad en prijzen, en het oplossen van afkeuringen in Merchant Center.",
    why:
      "Shopping-advertenties zijn voor de meeste shops het best presterende kanaal, maar ze staan of vallen met feedkwaliteit. Afgekeurde producten kosten je onzichtbaar omzet zolang niemand ernaar kijkt.",
  },
  "shop-billing": {
    what:
      "Koppeling met je boekhouding (Moneybird, Exact of e-Boekhouden): automatische facturen en creditnota's, betaalstatus terug in de shop en een PDF-factuur in je eigen huisstijl.",
    why:
      "Handmatig facturen overtypen is niet alleen tijdrovend, het is ook de plek waar fouten insluipen. Een koppeling levert je per maand uren op en maakt je administratie op elk moment actueel.",
  },
  "shop-erp": {
    what:
      "Een koppeling tussen shop en ERP waarbij producten, prijzen en voorraad synchroon lopen en orders automatisch doorstromen naar je backoffice, met foutafhandeling en logging.",
    why:
      "Voorraad die niet klopt kost je twee keer: nee-verkopen én bestellingen die je niet kunt leveren. Eén waarheid over voorraad lost dat structureel op.",
  },
  "shop-shipping": {
    what:
      "Verzendlogica van winkelwagen tot voordeur: koppeling met Sendcloud, MyParcel, DHL of PostNL, verzendregels op gewicht, zone en orderwaarde, afhaalpunten en bezorgmomenten, en automatische track-and-tracemails.",
    why:
      "Verzendkosten en levertijd zijn de meestgenoemde reden om af te haken. Als de juiste opties en kosten meteen kloppen, verlies je minder orders én minder tijd aan statusvragen.",
  },
  "shop-returns": {
    what:
      "Een retourportaal waarin klanten zelf een retour aanmelden, retourlabels automatisch worden aangemaakt en statussen en terugbetalingen worden bijgehouden. Retourredenen komen in een rapport.",
    why:
      "Retouren verwerken via de mail kost onevenredig veel tijd. Zelfservice verlaagt die last, en de retourredenen laten zien welke productinformatie op je site tekortschiet.",
  },
  "shop-tax": {
    what:
      "Correcte btw-instelling per land en productgroep, OSS-drempels voor EU-verkoop, VIES-validatie van btw-nummers voor B2B en in- of exclusief prijzen per klantgroep.",
    why:
      "Btw-fouten worden pas zichtbaar bij de aangifte of controle, en dan gaan ze over alle orders met terugwerkende kracht. Dit vooraf goed zetten is puur risicobeperking.",
  },
  "shop-mail": {
    what:
      "Alle transactionele mails in je huisstijl — order, verzending, retour — plus marketingflows zoals verlaten winkelwagen, reviewverzoek en herhaalaankoop, gekoppeld aan Klaviyo, Mailchimp of ActiveCampaign.",
    why:
      "Transactionele mails worden bijna altijd geopend; dat is je best gelezen kanaal en meestal het lelijkste. On-brand mails met een slimme flow eronder halen daar omzet uit in plaats van alleen bevestigingen te sturen.",
  },
  "shop-marketplace": {
    what:
      "Koppeling met bol., Amazon of andere marktplaatsen via Channable of een directe API: assortiment en prijzen worden uitgestuurd, orders komen centraal binnen en voorraad wordt over kanalen bewaakt.",
    why:
      "Marktplaatsen brengen bereik dat je zelf niet snel opbouwt. De valkuil is dubbele verkoop bij dezelfde voorraad — een goede koppeling voorkomt precies dat.",
  },
  "shop-compliance": {
    what:
      "Consent-banner gekoppeld aan je tracking, de verplichte pagina's (algemene voorwaarden, retourbeleid, privacy) netjes opgezet, betaal- en keurmerklogo's op de juiste plek en een toegankelijkheidscheck op de kernflow.",
    why:
      "Voor webshops is dit deels wettelijk verplicht en deels conversieverhogend: keurmerken en duidelijke voorwaarden nemen twijfel weg bij mensen die je nog niet kennen.",
  },

  // ===================================================== WEB-APPS & APPS
  "wapp-portal": {
    what:
      "Een besloten klant- of dealerportaal met accounts, rollen en rechten, waarin je documenten, dossiers, prijzen of statussen deelt. Volledig in je huisstijl en gekoppeld aan de systemen die je al gebruikt.",
    why:
      "Een portaal haalt terugkerende vragen weg bij je team en geeft klanten 24/7 toegang tot wat ze nodig hebben. Het verhoogt bovendien de overstapdrempel: wie in jouw omgeving werkt, vertrekt minder snel.",
    tech: ["Authenticatie via Memberstack, Auth0 of eigen implementatie", "Rollen en rechten per gebruikersgroep", "Audit-logging op gevoelige acties"],
  },
  "wapp-flow": {
    what:
      "Een web-app op maat voor een specifiek proces: aanvragen, offertes, planning, keuringen of orders — met formulieren, statussen, notificaties en een dashboard.",
    why:
      "Excel-bestanden en mailwisselingen zijn gratis tot ze het niet meer zijn. Een app die precies jouw proces volgt, bespaart uren per week en maakt fouten zichtbaar voordat ze doorwerken.",
  },
  "wapp-loyalty": {
    what:
      "Een spaar- of klantenprogramma als eigen omgeving, met punten, beloningen, ledenprofielen en rapportage over gebruik.",
    why:
      "Een eigen programma geeft je directe data over je beste klanten en een reden om regelmatig contact te hebben — zonder afhankelijk te zijn van een platform.",
  },
  "mob-strategy": {
    what:
      "Een strategiefase voor je app: doelgroepen, kernfunctionaliteit, technische keuzes (native, cross-platform of PWA), storekosten en een realistische roadmap met kostenraming.",
    why:
      "De meeste mislukte apps zijn gebouwd voordat iemand had bepaald wat succes betekent. Een paar weken denkwerk voorkomt maanden bouwen aan het verkeerde.",
  },
  "mob-uiux": {
    what:
      "Volledig UI/UX-ontwerp voor iOS en Android volgens de richtlijnen van beide platforms, met een klikbaar prototype waarmee je de app kunt testen voordat er één regel code is.",
    why:
      "Ontwerp aanpassen is goedkoop, code aanpassen niet. Met een prototype haal je gebruikersfeedback op in de fase waarin je er nog iets mee kunt.",
  },
  "mob-build": {
    what:
      "Bouw en publicatie van je app voor iOS en Android, inclusief store-listing, screenshots, review-begeleiding en een releaseproces voor updates.",
    why:
      "De storepublicatie is berucht om afwijzingen op details. Wij regelen dat traject zodat je lancering niet twee weken uitloopt op een formaliteit.",
  },

  // ===================================================== VIDEO & ANIMATIE
  "vid-brandfilm": {
    what:
      "Een bedrijfsvideo van ongeveer twee minuten: we schrijven concept en script, maken een storyboard, draaien op locatie met regie en verzorgen montage, kleurcorrectie en sounddesign. Je krijgt hem uitgeleverd in 16:9, 1:1 en 9:16 met ondertiteling.",
    why:
      "Mensen lezen je 'over ons'-pagina niet, maar kijken wel twee minuten. Een goede bedrijfsvideo verkoopt je sfeer, je mensen en je vakmanschap in één keer — en is jarenlang inzetbaar op je site, in sales en bij werving.",
    includes: ["Concept, script en storyboard", "Draaidag met regie en cameraploeg", "Montage, kleurcorrectie en sounddesign", "Ondertiteling en meerdere beeldverhoudingen"],
    tech: ["Opname in minimaal 4K zodat uitsneden scherp blijven", "Losse SRT-bestanden naast ingebrande ondertiteling", "Webgeoptimaliseerde export naast de mastervariant"],
  },
  "vid-explainer-real": {
    what:
      "Een explainer met realistische scènes: opgenomen met echte acteurs of volledig AI-gegenereerd met synthetische personen en omgevingen. Eén heldere boodschap, een script dat naar de call-to-action leidt en een voice-over in de taal die je wilt.",
    why:
      "Complexe diensten verkopen slecht in tekst. Een explainer laat in negentig seconden zien wat je doet, waardoor je verkoopgesprekken korter worden en je website minder afhakers heeft. De AI-route maakt dit haalbaar zonder dure productie.",
    tech: ["AI-gegenereerde personen consistent gehouden over scènes heen", "Lipsync bij voice-over in meerdere talen", "Rechtenvrije of eigen muziek"],
  },
  "vid-explainer-anim": {
    what:
      "Een geanimeerde explainer in een illustratiestijl die op je huisstijl is gebaseerd: script, storyboard, styleframes, motion graphics, voice-over, muziek en sounddesign.",
    why:
      "Animatie kan dingen tonen die je niet kunt filmen — processen, data, abstracte diensten. Bovendien veroudert een animatie minder snel dan beelden van een kantoor of team dat verandert.",
  },
  "vid-3d": {
    what:
      "3D-modellering en fotorealistische renders van producten, objecten of vastgoed, desgewenst opgebouwd uit je bouwtekeningen of CAD-bestanden, met realistische materialen en belichting. Je krijgt zowel stills als bewegende renders.",
    why:
      "Je kunt niet fotograferen wat nog niet bestaat. Met 3D verkoop je een product of gebouw voordat het er is, in elke kleur of uitvoering, en zonder de kosten van een fotoshoot per variant.",
    includes: ["3D-model op basis van tekeningen of CAD", "Materialen, belichting en omgeving", "Stills in hoge resolutie", "Bewegende render of camerabeweging"],
    tech: ["Aanlevering in DWG, IFC, STEP of SKP", "Renders in 4K, stills tot printresolutie", "Varianten in kleur of uitvoering uit hetzelfde model"],
  },
  "vid-intro-outro": {
    what:
      "Een geanimeerde logo-intro van drie tot zes seconden en een outro met call-to-action en contactgegevens, als losse bestanden zodat je ze zelf voor elke video hergebruikt.",
    why:
      "Een vaste kop en staart maken losse video's herkenbaar als één merk. Het is een eenmalige investering die je bij elke volgende video terugverdient.",
  },
  "vid-custom-anim": {
    what:
      "Losse animaties op maat: bewegende iconen, grafieken of infographics, uitgeleverd als Lottie-bestand voor je website of als video met transparante achtergrond. Bronbestand krijg je mee.",
    why:
      "Een geanimeerde uitleg of grafiek houdt aandacht vast waar een statisch plaatje wordt weggescrold. Als Lottie blijven ze scherp op elk scherm en wegen ze nauwelijks iets.",
  },
  "vid-exploded": {
    what:
      "Een exploded-view animatie waarin je product uit elkaar valt en weer samenkomt, met callouts die onderdelen en specificaties benoemen, opgebouwd uit je CAD- of technische tekeningen.",
    why:
      "Voor techniek en maakindustrie is dit de snelste manier om kwaliteit en opbouw te laten zien. Wat in een gesprek tien minuten uitleg kost, is in twintig seconden duidelijk.",
  },
  "vid-product": {
    what:
      "Een korte, strakke productanimatie van tien tot twintig seconden met studiobelichting of styling in scène, loopbaar zodat hij als website-hero kan draaien. Meerdere kleurvarianten uit hetzelfde model of dezelfde opname.",
    why:
      "Bewegend beeld op je homepage vergroot de tijd die iemand blijft en laat je product premium ogen. Een loop van een paar seconden is daarvoor genoeg.",
  },
  "vid-subtitles": {
    what:
      "Ondertiteling per video, ingebrand of als los SRT-bestand, in je eigen typografie, met vertaling naar extra talen indien gewenst.",
    why:
      "Het overgrote deel van social video wordt zonder geluid bekeken. Zonder ondertiteling gooi je dus het grootste deel van je bereik weg — en met vertaling open je meteen nieuwe markten.",
  },
  "vid-snippets": {
    what:
      "Acht tot twaalf korte snippets gesneden uit bestaand materiaal, verticaal opgemaakt voor Reels, Shorts en TikTok, met hooks, captions en ondertiteling.",
    why:
      "Uit één draaidag haal je maandenlang content. Snippets zijn de goedkoopste manier om consistent zichtbaar te blijven zonder elke week opnieuw te filmen.",
  },
  "vid-ads": {
    what:
      "Drie advertentievarianten met verschillende hooks, per platform op maat gesneden, met ondertiteling en een eindkaart met call-to-action — opgezet om tegen elkaar te testen.",
    why:
      "In advertenties bepaalt de creative het grootste deel van je resultaat, meer dan targeting of budget. Meerdere hooks testen is de snelste route naar een lagere kosten-per-lead.",
  },
  "vid-shootday": {
    what: "Een extra draaidag met cameraploeg en apparatuur, tot acht uur op locatie. Alle ruwe beelden worden gearchiveerd zodat je er later nog uit kunt putten.",
    why: "Meerdere locaties of afdelingen in één project vragen simpelweg meer draaitijd. Een extra dag levert bovendien voorraad op voor toekomstige content.",
  },
  "vid-drone": {
    what: "Luchtbeelden in 4K door een gecertificeerde dronepiloot, inclusief het regelen van de benodigde vluchtvergunning.",
    why: "Eén luchtshot laat de schaal van je locatie, project of terrein zien op een manier die vanaf de grond onmogelijk is. Het tilt de productiewaarde van een video direct op.",
  },
  "vid-voiceover": {
    what: "Een professionele voice-over met stemcasting uit meerdere opties, opgenomen in studio, ook in andere talen beschikbaar.",
    why: "De stem bepaalt de toon van je video. Een professionele opname klinkt onmiddellijk anders dan een telefoonopname en houdt de aandacht langer vast.",
  },
  "vid-edit": {
    what: "Montage van je eigen opnames: selectie, opbouw, kleurcorrectie, audio-opschoning, titels en ondertiteling.",
    why: "Als je zelf materiaal hebt maar het blijft liggen, is montage het ontbrekende stuk. Vaak zit er meer in je archief dan je denkt.",
  },

  // ===================================================== ORGANISCH
  "org-social-basic": {
    what:
      "Een doorlopend social-abonnement waarin wij maandelijks je content maken en klaarzetten: statische posts en carrousels in je huisstijl, met copy en hashtags, ter review voordat er iets online gaat.",
    why:
      "Consistentie verslaat perfectie op social. Het probleem is bijna nooit het idee maar de uitvoering elke week. Uitbesteden zorgt dat je zichtbaar blijft, ook in drukke maanden.",
  },
  "org-social-reels": {
    what:
      "Het middenpakket met naast statische content ook reels en korte animaties per maand: concept, montage, ondertiteling en publicatieklaar aangeleverd.",
    why:
      "Reels krijgen structureel meer bereik dan statische posts, ook bij kleine accounts. Wie alleen statisch post, betaalt dat in zichtbaarheid.",
  },
  "org-social-pro": {
    what:
      "Het uitgebreide pakket met meer volume, meer bewegend beeld en een maandelijkse contentkalender, afgestemd op je campagnes en actualiteiten.",
    why:
      "Bij dit volume word je een kanaal in plaats van een account. Dat is het punt waarop social daadwerkelijk aanvragen gaat opleveren in plaats van alleen likes.",
  },
  "org-airender": {
    what:
      "AI-renders op basis van jouw schetsen of tekeningen: fotorealistisch of gestileerd, per stuk af te nemen. Ook voor producten die nog niet bestaan.",
    why:
      "Beeld maken van iets dat nog niet gebouwd is, was voorheen een dure 3D-klus. Met AI-renders kun je een idee binnen dagen visueel testen bij je markt.",
  },
  "org-aimotion": {
    what: "AI-motion op bestaande beelden: subtiele beweging of cinematic camerabewegingen, geschikt voor hero's en advertenties.",
    why: "Een stilstaand beeld dat licht beweegt trekt aantoonbaar meer aandacht in de tijdlijn, tegen een fractie van de kosten van een filmproductie.",
  },
  "org-podcast": {
    what:
      "Podcastproductie per aflevering: opname in onze studio of op locatie, montage, audio-opschoning en het uitsnijden van social snippets.",
    why:
      "Een podcast bouwt autoriteit op bij een publiek dat je anders nooit twintig minuten aandacht geeft. De snippets eruit voeden bovendien maandenlang je social kanalen.",
  },

  // ===================================================== PAID ADS
  "ads-google": {
    what:
      "Adverteren op Google waar de vraag al bestaat. Zoekwoordenonderzoek zit standaard in dit plan: we bepalen op welke termen je wilt verschijnen, richten Search- en Performance Max-campagnes in met AI-driven biedstrategieën, koppelen je conversies en optimaliseren doorlopend op zoektermen en uitsluitingen.",
    why:
      "Iemand die zoekt heeft al een probleem en zoekt een oplossing — dat is de warmste doelgroep die er is. Het verschil tussen een middelmatig en een goed ingericht account zit vrijwel volledig in zoekwoordbeheer en conversiemeting, en daar zit onze aandacht.",
    includes: ["Zoekwoordenonderzoek en campagnestructuur", "Search en Performance Max ingericht", "Conversies gekoppeld en gevalideerd", "Maandelijkse optimalisatie en rapportage"],
    tech: ["Slimme biedstrategieën op basis van conversiewaarde", "Zoektermen-analyse met uitsluitingslijsten", "Advertentie-extensies volledig ingevuld"],
  },
  "ads-linkedin": {
    what:
      "LinkedIn-campagnes inclusief het maken van creatives en/of funnels. We targeten op functietitel, bedrijf, sector en bedrijfsgrootte, kiezen tussen Lead Gen Forms of een eigen landingspagina en testen boodschap en beeld tegen elkaar.",
    why:
      "Nergens anders bereik je zo precies de beslisser die je zoekt. LinkedIn is duurder per klik, maar bij zakelijke diensten met hoge klantwaarde verdient één deal de campagne meestal al terug.",
    tech: ["Insight Tag en conversietracking ingericht", "Matched Audiences voor retargeting en ABM", "Formulieren gekoppeld aan je CRM"],
  },
  "ads-meta": {
    what:
      "Campagnes op Facebook en Instagram inclusief het maken van creatives en/of funnels. We richten Business Manager, pixel en Conversions API in, bouwen doelgroepen, lookalikes en retargeting en leveren zowel statische als video-creatives.",
    why:
      "Meta is het kanaal om vraag te créëren bij mensen die je nog niet zochten. Dat werkt alleen met genoeg goede creatives — en dat is precies wat de meeste adverteerders tekortkomen.",
    tech: ["Conversions API naast de browserpixel voor betrouwbaar meten", "Creatives per plaatsing bijgesneden", "Retargeting op basis van sitegedrag en video-kijkduur"],
  },
  "ads-other": {
    what:
      "Adverteren op kanalen buiten de gebaande paden: Reddit, TikTok, Pinterest, YouTube of digital out-of-home. We bepalen samen welk kanaal bij je doelgroep past en maken de creatives specifiek voor dat platform.",
    why:
      "Op minder verzadigde kanalen zijn de kosten per bereik vaak veel lager. Het vraagt wel creatives die bij het platform passen — een LinkedIn-advertentie op TikTok werkt gegarandeerd niet.",
  },
  "ads-keywords": {
    what:
      "Een volledig zoekwoordenonderzoek met actuele zoekvolumes en concurrentiecijfers, geclusterd op zoekintentie en funnel-fase, inclusief uitsluitingslijsten. Bij het Google Ads-plan zit dit standaard inbegrepen.",
    why:
      "Zonder actuele volumes gok je waar je budget heen gaat. Een goed onderzoek laat zien welke termen commercieel interessant zijn en welke je juist moet uitsluiten om verspilling te voorkomen — dat scheelt vaak tientallen procenten aan advertentiebudget.",
  },
  "ads-keywords-mnd": {
    what:
      "Maandelijkse zoektermenanalyse waarbij we nieuwe kansen toevoegen, verspilling uitsluiten en biedingen per zoekwoordgroep bijstellen. Ook los af te nemen naast een SEO-traject.",
    why:
      "Zoekgedrag verandert continu en advertentieplatforms verbreden je bereik automatisch. Zonder maandelijkse controle betaal je ongemerkt voor zoekopdrachten die nooit klant worden.",
  },
  "ads-creatives": {
    what:
      "Elke maand zes tot tien nieuwe statische advertentiebeelden, met varianten per doelgroep en funnel-fase, inclusief copy en haakjes, gebaseerd op wat in de data presteert.",
    why:
      "Advertenties slijten: dezelfde creative wordt na een paar weken minder effectief. Een vaste stroom nieuwe beelden houdt je kosten per resultaat stabiel in plaats van langzaam oplopend.",
  },
  "ads-video-creatives": {
    what:
      "Twee tot vier videoadvertenties per maand, uitgeleverd in 9:16 en 1:1, standaard met ondertiteling en met hooks die specifiek op de eerste drie seconden zijn getest.",
    why:
      "Video presteert op vrijwel elk platform beter dan statisch, maar alleen als de eerste seconden pakken. Daar leggen we de nadruk, want daar valt negentig procent van je publiek af.",
  },
  "ads-audit": {
    what:
      "Een doorlichting van je bestaande advertentieaccount: structuur, conversiemeting, biedstrategie, zoektermen en creatives, met een rapport waarin verspilling en gemiste kansen op prioriteit staan.",
    why:
      "Bijna elk account dat wij openen bevat budget dat naar niets loopt: kapotte conversies, verkeerde matchtypes of campagnes die elkaar beconcurreren. De audit verdient zich meestal binnen een maand terug.",
  },

  // ===================================================== SEO / AEO
  "seo-boost": {
    what:
      "Een eenmalige optimalisatieslag: meta-titels en -beschrijvingen herschreven, zoekwoordonderzoek, mediacompressie en een technische SEO-scan met de belangrijkste fixes.",
    why:
      "Veel sites laten laaghangend fruit liggen: ontbrekende metateksten, zware afbeeldingen en technische fouten die indexatie remmen. Dit is de snelste manier om zichtbaar terrein te winnen zonder maandelijkse verplichting.",
  },
  "seo-growth": {
    what:
      "Doorlopende SEO met twee blogs of landingspagina's per maand, gebaseerd op thema's en actualiteiten die we via webscraping signaleren. Drafts worden ter review klaargezet; jij houdt de regie over publicatie. Daarnaast optimaliseren we bestaande pagina's en de interne linkstructuur.",
    why:
      "SEO is een sneeuwbal: elke maand content bouwt op de vorige voort en je autoriteit groeit cumulatief. Stoppen kost je die opbouw, en concurrenten die wél doorgaan lopen je voorbij.",
  },
  "seo-authority": {
    what:
      "Het zwaarste SEO-pakket: vier contentstukken per maand, linkbuilding en digital PR, concurrentie-monitoring en elk kwartaal een strategische herijking.",
    why:
      "In competitieve markten win je niet op content alleen — autoriteit via externe links is de doorslaggevende factor. Dit pakket is bedoeld voor wie echt bovenaan wil staan en daar de tijd voor neemt.",
  },
  "aeo-answers": {
    what:
      "Optimalisatie om geciteerd te worden dóór AI-antwoordmachines. We bouwen een FAQ-hub met cross-referenced vragen, zetten JSON-LD-schema's op (FAQ, Article, Organization, Product), richten robots.txt en llms.txt in en stemmen content af op hoe ChatGPT, Gemini en Perplexity bronnen selecteren. Prijs op aanvraag, omdat de scope sterk verschilt per site.",
    why:
      "Steeds meer mensen krijgen hun antwoord zonder ooit op een zoekresultaat te klikken. Wie in die antwoorden genoemd wordt, houdt zichtbaarheid; wie er niet in staat, verdwijnt langzaam uit beeld. Dit is de vroege fase waarin je nog voorsprong kunt pakken.",
    tech: ["Gestructureerde data volgens schema.org", "llms.txt en crawler-richtlijnen voor AI-bots", "Entiteiten en bronvermeldingen consistent gemaakt"],
  },

  // ===================================================== TRACKING
  "trk-foundation": {
    what:
      "De eenmalige inrichting van je meetbasis: Search Console geverifieerd met sitemap, een Google Analytics 4-property met datastream, een Google Tag Manager-container met je basis-events, de Meta Pixel en een cookie-consent-oplossing gekoppeld aan Consent Mode. Daarna houden we maandelijks in de gaten of alle meetpunten blijven werken.",
    why:
      "Zonder deze drie — Search Console, GA4 en Tag Manager — vlieg je blind. Je weet niet welke pagina's bezoekers trekken, waar ze afhaken of welk kanaal je aanvragen oplevert. Het is de goedkoopste stap met de grootste impact, want alles wat je daarna doet kun je pas beoordelen als je het kunt meten.",
    includes: [
      "Search Console: verificatie, sitemap en dekkingscontrole",
      "GA4: property, datastream, basisconversies",
      "Google Tag Manager: container, triggers en variabelen",
      "Meta Pixel en cookie-consent gekoppeld",
      "Maandelijkse controle of alles blijft meten",
    ],
    tech: ["Tags volledig via GTM zodat je site schoon blijft", "Consent Mode v2 gekoppeld aan je CMP", "Interne verkeer uitgesloten van rapportage"],
  },
  "trk-server": {
    what:
      "Bovenop de meetbasis houden we je websitegebruik maandelijks bij: we monitoren de cijfers, signaleren meetfouten en wegvallende data en sturen bij. Technisch versterken we de meting met server-side tracking (sGTM), de Meta Conversions API, enhanced conversions en custom events. Je krijgt maandelijks een beknopt overzicht.",
    why:
      "Meetopstellingen gaan stuk: een formulier wordt vervangen, een tag valt weg, een update breekt een event. Zonder maandelijkse controle ontdek je dat pas als je een kwartaalrapport maakt en de data niet meer klopt. Server-side meten vangt bovendien op wat browsers en ad-blockers tegenhouden.",
    tech: ["Server-side GTM-container met eigen subdomein", "Meta Conversions API naast de browserpixel", "Enhanced conversions voor betere matching"],
  },
  "trk-insights": {
    what:
      "Naast monitoring zetten we Microsoft Clarity in: sessie-opnames en heatmaps van échte bezoekers. Elke maand analyseren we die sessies en leveren we een klein rapportje met inzichten — waar mensen vastlopen, wat ze negeren en welke pagina's frustratie opleveren. Aangevuld met een Looker Studio-dashboard, attributiemodellen en funnel- en cohortanalyse.",
    why:
      "Cijfers vertellen je dát mensen afhaken, opnames laten zien wáárom. Dat is het verschil tussen gissen en gericht verbeteren. Eén rage-click-patroon op een knop die niet werkt, kan maandenlang omzet hebben gekost zonder dat het in de statistieken opviel.",
    includes: [
      "Microsoft Clarity ingericht en gekoppeld aan GA4",
      "Maandelijkse analyse van sessie-opnames en heatmaps",
      "Kort rapport met concrete verbeterpunten per pagina",
      "Looker Studio-dashboard op maat",
      "Funnel-, cohort- en attributieanalyse",
    ],
    tech: ["Clarity is gratis in licentie; wij verzorgen inrichting en analyse", "Opnames gemaskeerd waar persoonsgegevens in beeld komen", "Segmenten op apparaat, kanaal en landingspagina"],
  },
  "trk-partner": {
    what:
      "Alles uit Insights Pro, aangevuld met een maandelijkse meeting — bij ons, bij jou of online — waarin we onze ideeën, suggesties en tips persoonlijk doornemen. We bepalen samen de prioriteiten voor de komende maand en je hebt een vaste data-analist als aanspreekpunt.",
    why:
      "Een rapport dat niemand bespreekt, verandert niets. In een uur samen kijken ontstaan de beslissingen die er echt toe doen, omdat wij de cijfers kennen en jij de context van je markt. Dat combineren levert veel meer op dan beide los.",
  },
  "trk-keywords": {
    what:
      "Een zoekwoordenonderzoek met actuele zoekvolumes en concurrentiecijfers, geclusterd op zoekintentie, met een overzicht van de kansen die je nu laat liggen. Direct bruikbaar voor zowel SEO als advertenties.",
    why:
      "Je weet pas of je content op de juiste onderwerpen zit als je de actuele volumes kent. Vaak blijkt dat het zwaartepunt van de vraag ergens anders ligt dan waar je site over gaat — dat inzicht verandert je hele contentplan.",
  },
  "trk-keywords-mnd": {
    what:
      "Maandelijkse update van je zoekvolumes en posities, met nieuwe en opkomende zoektermen, gesignaleerde seizoenspatronen en aangedragen contentkansen.",
    why:
      "Zoekgedrag verschuift met het seizoen en met de markt. Wie dat maandelijks volgt, publiceert op het moment dat de vraag stijgt in plaats van erna.",
  },
  "trk-competition": {
    what:
      "Een analyse van drie tot vijf concurrenten, zowel op internet als op social media: hun website en content, op welke zoekwoorden ze scoren, welke advertenties ze draaien, hoe vaak ze posten, hun tone of voice en hun engagement. Je krijgt een rapport met inzichten en concrete aanbevelingen.",
    why:
      "Je hoeft het wiel niet opnieuw uit te vinden — je concurrenten hebben al betaald voor de experimenten. Zien waar zij op inzetten laat je zowel hun succesformules kopiëren als de gaten vinden die zij laten liggen.",
    includes: ["Web: content, zoekwoorden, posities en advertenties", "Social: frequentie, formats, tone of voice en engagement", "Positioneringsvergelijking", "Rapport met aanbevelingen op prioriteit"],
  },
  "trk-strategy": {
    what:
      "Elk kwartaal een strategiesessie met een strateeg en data-analist, gevoed door doorlopende concurrentie- en marktmonitoring. We bepalen prioriteiten en een roadmap voor het volgende kwartaal en leggen besluiten en acties vast.",
    why:
      "Zonder vast moment om terug te kijken blijft marketing hollen van campagne naar campagne. Eén sessie per kwartaal houdt je bezig met wat werkt in plaats van met wat toevallig langskomt.",
  },
  "trk-cookiebanner": {
    what:
      "Een volwaardige cookiebanner via Consent Studio (Nederlandse partij) of Usercentrics Cookiebot, in je eigen huisstijl, met automatische cookie-scan, een altijd actuele cookieverklaring, koppeling aan Consent Mode v2 in Tag Manager en consent-logging voor de bewaarplicht.",
    why:
      "Een zelfgebouwd bannertje voldoet meestal niet: je moet kunnen aantonen wát iemand wanneer heeft toegestaan, en je scripts moeten daadwerkelijk pas ná toestemming laden. Een professionele CMP regelt dat aantoonbaar en houdt zich automatisch bij aan veranderende regels.",
    tech: ["Consent Mode v2 zodat GA4 geanonimiseerd blijft meten zonder toestemming", "Automatische maandelijkse cookie-scan", "Licentiekosten van de CMP-leverancier zijn niet inbegrepen"],
  },

  // ===================================================== FUNNELS
  "fun-calc": {
    what: "Een rekentool of prijsindicator op je site waarmee bezoekers zelf een indicatie krijgen op basis van hun situatie, met de ingevulde gegevens als lead in je mailbox of CRM.",
    why: "Prijs is de meestgestelde vraag en tegelijk de reden dat mensen niet bellen. Een indicatie geven filtert je aanvragen én verhoogt het aantal, omdat mensen weten waar ze aan toe zijn.",
  },
  "fun-quote": {
    what: "Een offerte-aanvraagflow met logische vervolgvragen, waarbij de bezoeker stap voor stap zijn situatie beschrijft en jij een compleet ingevulde aanvraag ontvangt.",
    why: "Onvolledige aanvragen kosten twee tot drie mails heen en weer voordat je kunt offreren. Een goede flow levert je meteen alles wat je nodig hebt en verkort je doorlooptijd zichtbaar.",
  },
  "fun-config": {
    what: "Een configurator waarmee bezoekers een product of dienst samenstellen, met live prijsopbouw en een samenvatting die als aanvraag binnenkomt.",
    why: "Zelf samenstellen verhoogt de betrokkenheid en de kans dat iemand doorzet. Bovendien weet je precies wat de klant wil voordat het eerste gesprek begint.",
  },
  "fun-ebook": {
    what: "Een downloadbare gids of whitepaper met landingspagina, formulier en automatische aflevering per mail, gekoppeld aan je mailinglijst.",
    why: "Niet iedereen is klaar om te kopen, maar wel om iets te leren. Een download maakt van anonieme bezoekers bekende contacten die je daarna kunt opvolgen.",
  },
  "fun-email": {
    what: "Een geautomatiseerde e-mailflow die nieuwe contacten opvolgt met een reeks berichten, afgestemd op wat ze hebben gedaan of gedownload.",
    why: "De meeste leads kopen niet meteen. Een flow houdt het contact warm zonder dat iemand er handmatig achteraan moet — en verhoogt de conversie van je bestaande leads meetbaar.",
  },
  "fun-audience": {
    what: "Doelgroepsegmentatie waarbij bezoekers op basis van hun keuzes verschillende content, aanbiedingen of vervolgstappen te zien krijgen.",
    why: "Eén boodschap voor iedereen raakt niemand echt. Segmenteren maakt je aanbod relevanter en verhoogt daarmee zowel je conversie als de kwaliteit van je leads.",
  },

  // ===================================================== CRM
  "crm-setup": {
    what: "Inrichting van je CRM (HubSpot, Pipedrive, Teamleader of Odoo): pijplijnen, velden, gebruikers, rechten en de eerste automatiseringen, plus import van je bestaande contacten.",
    why: "Een CRM dat niet aansluit op je verkoopproces wordt niet gebruikt, en een CRM dat niet gebruikt wordt is een dure adressenlijst. Goede inrichting bepaalt of je team het omarmt of ontwijkt.",
  },
  "crm-api": {
    what: "Koppelingen tussen je systemen via API's, Make of Zapier: website, CRM, boekhouding, planning en mail die elkaar automatisch voeden, inclusief foutafhandeling en logging.",
    why: "Elk handmatig overtypen van gegevens is tijd én een kans op fouten. Systemen die met elkaar praten leveren per week uren op en houden je data overal actueel.",
  },
  "crm-manage": {
    what: "Doorlopend beheer van je CRM en integraties: nieuwe automatiseringen, aanpassingen aan je proces, monitoring van koppelingen en ondersteuning voor je team.",
    why: "Processen veranderen en koppelingen breken bij updates. Vast beheer voorkomt dat je stilstaat op het moment dat je systeem het meest nodig hebt.",
  },

  // ===================================================== AI
  "ai-scan": {
    what:
      "We lichten je huidige processen door en brengen in kaart waar AI daadwerkelijk tijd oplevert. De kansen rangschikken we op tijdwinst en haalbaarheid, met advies over tooling, kosten en privacy. Je krijgt een rapport met een roadmap voor zes tot twaalf maanden en we presenteren het aan je team.",
    why:
      "De meeste organisaties beginnen bij de tool in plaats van bij het probleem, en houden er na drie maanden weer mee op. Door eerst te kijken waar je uren echt weglopen, investeer je in de twee of drie toepassingen die wél blijven hangen.",
    includes: ["Interviews met sleutelrollen", "Procesinventarisatie met tijdsbesteding", "Kansen gescoord op impact en haalbaarheid", "Adviesrapport met roadmap en kostenraming"],
  },
  "ai-knowledge": {
    what:
      "We richten je eigen AI-kennisomgeving in: projecten en een knowledge base gevuld met jouw handleidingen, offertes, beleidsstukken en procedures, zodat de AI antwoordt op basis van jóuw documenten met bronvermelding. Inclusief toegang en rollen per team en een instructie-set die de output on-brand houdt.",
    why:
      "Een algemene chatbot kent jouw prijzen, procedures en afspraken niet en verzint dus. Met je eigen kennisomgeving krijgen medewerkers antwoorden die kloppen, met de bron erbij — dat scheelt zoektijd en voorkomt dat mensen elkaar blijven vragen wat er ook alweer was afgesproken.",
    includes: [
      "Inventarisatie en opschoning van je documentatie",
      "Projecten en knowledge base ingericht",
      "Instructies en tone of voice vastgelegd",
      "Rollen en toegangsrechten per team",
      "Training zodat je team ermee aan de slag kan",
    ],
    tech: ["Werkt met ChatGPT-projecten, Claude Projects of een eigen RAG-opzet", "Bronvermelding bij elk antwoord", "Afspraken over wat wel en niet als bron wordt opgenomen"],
  },
  "ai-automation": {
    what:
      "We automatiseren terugkerende processen met AI-stappen erin: van inkomende mail naar een gestructureerde aanvraag, van aanvraag naar conceptofferte, van data naar rapportage. Gebouwd in Make, Zapier of eigen code, met foutafhandeling, logging en altijd een menselijke controle op het juiste moment.",
    why:
      "AI wordt pas waardevol als het niet meer afhangt van iemand die eraan denkt het te gebruiken. Automatisering haalt handwerk structureel weg en levert per proces vaak meerdere uren per week op — bij gelijkblijvende kwaliteit, omdat de check blijft bestaan.",
    tech: ["Make, Zapier of eigen serverless functies", "Logging en alerting bij fouten", "Menselijke goedkeuringsstap op onomkeerbare acties"],
  },
  "ai-workshop": {
    what:
      "Een dagdeel op locatie of online voor maximaal twaalf personen, waarin je team leert werken met ChatGPT, Claude en Gemini. We behandelen prompting-technieken aan de hand van jullie eigen praktijkcases, leveren een promptbibliotheek op en maken afspraken over veilig gebruik.",
    why:
      "Het verschil tussen iemand die AI 'wel eens probeert' en iemand die het goed gebruikt, is een factor in productiviteit. Eén dagdeel training verdient zich meestal binnen twee weken terug, en voorkomt tegelijk dat er bedrijfsgevoelige informatie in de verkeerde tool belandt.",
  },
  "ai-image": {
    what:
      "Een doorlopend abonnement waarin we elke maand nieuw AI-beeld in jouw huisstijl maken: product-, sfeer- en campagnebeeld, met een vaste stijlreferentie zodat alles consistent blijft. Retouche en upscaling zitten erbij. De prijs stellen we op aanvraag vast, omdat volume en complexiteit sterk verschillen.",
    why:
      "Stockbeeld dat je concurrent ook gebruikt kost je onderscheidend vermogen, en een fotoshoot per campagne is voor de meeste bedrijven te duur en te traag. Met AI-beeld heb je binnen dagen origineel materiaal dat wél bij je merk past.",
  },
  "ai-policy": {
    what:
      "Een gebruiksbeleid voor AI binnen je organisatie: wat mag wel en niet met bedrijfsdata, welke tools zijn goedgekeurd, hoe ga je om met klantgegevens, en welke AVG- en AI-Act-punten raken jou. Inclusief dataverwerkingsafspraken per tool.",
    why:
      "Je medewerkers gebruiken AI al, met of zonder beleid. Zonder afspraken belandt vertrouwelijke informatie in tools waar je geen zicht op hebt. Beleid maakt gebruik veilig in plaats van dat het het verbiedt.",
  },
  "ai-agent": {
    what:
      "Een chat-assistent op je website, getraind op je eigen content, die bezoekers 24/7 antwoord geeft en netjes doorverwijst naar een mens bij twijfel. Gesprekken en veelgestelde vragen worden inzichtelijk gemaakt, en de assistent staat volledig in je huisstijl.",
    why:
      "Bezoekers stellen buiten kantoortijd hun vragen en haken af als er niemand is. Een assistent vangt dat op en laat je bovendien precies zien welke vragen mensen hebben — informatie die je ook direct in je content kunt verwerken.",
  },
  "ai-content": {
    what:
      "Een contentmotor met vaste prompts en sjablonen per contentsoort, met je tone of voice vastgelegd in de instructies. Concepten worden klaargezet ter review; menselijke eindredactie blijft de norm.",
    why:
      "AI-content zonder sturing klinkt naar niemand. Met vastgelegde stem en structuur versnel je het schrijfwerk aanzienlijk terwijl het herkenbaar jouw merk blijft — en je publiceert nooit iets dat niemand heeft gelezen.",
  },
  "ai-session": {
    what: "Een sessie van twee uur met een AI-specialist over concrete vragen uit je eigen praktijk, met een beknopt verslag en vervolgstappen.",
    why: "Soms zit je vast op één specifieke vraag en heb je geen heel traject nodig. Twee uur gericht sparren brengt je vaak verder dan weken zelf uitzoeken.",
  },
  "ai-prompt-pack": {
    what: "Vijfentwintig tot veertig kant-en-klare prompts voor de functies binnen jouw organisatie, getest op je eigen cases, in een onderhoudbaar document of Notion-pagina.",
    why: "Prompts die aantoonbaar werken zijn direct herbruikbaar door je hele team. Het scheelt iedereen de leercurve en zorgt dat de output onderling consistent blijft.",
  },

  // ===================================================== HOSTING
  "host-domain-dns": {
    what: "Domeinregistratie of -verhuizing en volledige DNS-inrichting: A-, CNAME-, MX-, SPF-, DKIM- en DMARC-records correct gezet, met SSL geactiveerd.",
    why: "DNS is onzichtbaar tot het misgaat, en dan ligt je mail of je site plat. Correct ingerichte mailrecords zorgen bovendien dat je berichten niet in de spamfolder belanden.",
  },
  "host-mailboxes": {
    what: "Zakelijke mailboxen op je eigen domein, ingericht en gekoppeld aan de apparaten van je team, met aliassen, doorstuurregels en spamfilter.",
    why: "Een gmail-adres voor je bedrijf kost je geloofwaardigheid bij precies de klanten die je wilt hebben. Eigen mail op je domein is een kleine stap met een groot effect.",
  },
  "host-basic": {
    what: "Managed hosting met dagelijkse back-ups, monitoring, SSL, updates en een SLA op bereikbaarheid.",
    why: "Goedkope hosting kost je uiteindelijk meer: trage laadtijden drukken je conversie en ranking, en zonder back-ups is een fout onherstelbaar.",
  },
  "host-premium": {
    what: "Zwaardere hosting met meer resources, staging-omgeving, CDN en uitgebreidere monitoring, geschikt voor drukbezochte sites en webshops.",
    why: "Bij hogere bezoekersaantallen is snelheid direct omzet. Een staging-omgeving betekent bovendien dat je nooit meer op de live site hoeft te experimenteren.",
  },
  "host-taylored": {
    what: "Een op maat ingerichte hostingomgeving voor specifieke eisen: eigen server, verhoogde beveiliging, compliance-eisen of een bijzondere technische stack.",
    why: "Sommige organisaties hebben eisen die standaard pakketten niet dekken. Dan is maatwerk goedkoper dan een pakket dat net niet past en constant workarounds vraagt.",
  },
  "host-automation": {
    what: "Automatisering rondom je hosting: geautomatiseerde deploys, back-uptests, uptime-alerts en periodieke rapportage over performance en beveiliging.",
    why: "Een back-up die nooit is teruggezet, is geen back-up. Automatisering en periodieke controle zorgen dat je zekerheden ook echt zekerheden zijn.",
  },

  // ===================================================== SUPPORT
  "sup-mini": {
    what: "Het instapabonnement: updates, monitoring en beveiligingspatches, zonder vaste ontwikkeluren.",
    why: "Een site zonder onderhoud is een kwestie van tijd voordat er iets breekt of gehackt wordt. Dit is de minimale verzekering daartegen.",
  },
  "sup-solid": {
    what: "Onderhoud plus één uur ontwikkeltijd per maand voor kleine aanpassingen, tekstwijzigingen en vragen.",
    why: "Kleine wijzigingen blijven anders eindeloos liggen omdat het niet de moeite is om er een offerte voor te vragen. Met vaste uren gebeurt het gewoon.",
  },
  "sup-build": {
    what: "Drie uur per maand voor doorontwikkeling: nieuwe secties, aanpassingen en verbeteringen, bovenop het reguliere onderhoud.",
    why: "Websites die maandelijks een beetje beter worden, presteren na een jaar aanzienlijk beter dan sites die na livegang stil blijven staan.",
  },
  "sup-craft": {
    what: "Vijf uur per maand met prioriteit op je verzoeken, geschikt voor organisaties die regelmatig content en functionaliteit toevoegen.",
    why: "Op dit niveau kun je echt plannen: een nieuwe landingspagina per maand of een doorlopende reeks verbeteringen, zonder telkens te moeten afstemmen over budget.",
  },
  "sup-forge": {
    what: "Acht uur per maand, genoeg voor een vaste stroom aan verbeteringen en kleine features naast het onderhoud.",
    why: "Wie zijn site als groeikanaal gebruikt in plaats van als visitekaartje, heeft structureel ontwikkelcapaciteit nodig. Dit is het punt waarop dat begint.",
  },
  "sup-scale": {
    what: "Twaalf uur per maand met vaste inplanning, geschikt voor sites en portalen die continu doorontwikkeld worden.",
    why: "Bij dit volume werk je feitelijk met een vast ontwikkelteam, zonder de kosten en het risico van iemand in dienst nemen.",
  },
  "sup-apex": {
    what: "Zestien uur per maand met prioriteitsafhandeling en vaste overlegmomenten.",
    why: "Voor organisaties waarbij de website of applicatie een kernonderdeel van de bedrijfsvoering is en stilstand direct geld kost.",
  },
  "sup-custom": {
    what: "Meer dan zestien uur per maand, volledig op maat ingericht met eigen SLA, vaste contactpersonen en afgesproken responstijden.",
    why: "Bij bedrijfskritische toepassingen wil je geen wachtrij. Een eigen SLA legt vast wanneer wij er zijn en wat je van ons kunt verwachten.",
  },
};

/** Compose een nette fallback voor pakketten zonder eigen tekst. */
export function detailsFor(pkg: Pkg, cat: Category): PkgDetails {
  const d = PKG_DETAILS[pkg.id];
  if (d) return d;
  return {
    what: `${pkg.tagline} We richten dit volledig voor je in binnen ${cat.label.toLowerCase()}: ${pkg.features
      .slice(0, 3)
      .join(", ")
      .toLowerCase()}. Alles wordt opgeleverd in je eigen huisstijl en afgestemd op de rest van je online aanwezigheid.`,
    why: `${cat.blurb} Dit onderdeel zorgt dat je die basis ook daadwerkelijk benut in plaats van dat het bij goede bedoelingen blijft.`,
  };
}
