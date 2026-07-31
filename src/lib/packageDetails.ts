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
