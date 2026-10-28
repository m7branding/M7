import type { SectorSlug } from "./registry";
import type { SectorSegment, T } from "./types";

/* ============================================================
   Doelgroepen per sector (deel A): tabs met eigen FAQ's onder
   "Veelgestelde vragen", soorten bedrijven per doelgroep (types,
   zoekbaar), concrete use cases per dienst en het raster met
   soorten bedrijven (audiences = alle types samen).
   Wordt in content/index.ts samengevoegd met sectors.ts.
   ============================================================ */

export const SEGMENTS_A: Partial<Record<SectorSlug, { segments: SectorSegment[]; audiences: T[] }>> = {
  /* ---------- Automotive & Mobiliteit ---------- */
  "automotive-mobiliteit": {
    segments: [
      {
        name: { nl: "Dealers & garages", en: "Dealers & garages" },
        intro: {
          nl: "Voor autodealers, occasionhandelaren, garagebedrijven, APK-stations en werkplaatsen die meer verkoop- en onderhoudsaanvragen willen, van merkdealer tot zelfstandig autobedrijf.",
          en: "For car dealerships, used car dealers, garages, inspection stations and workshops that want more sales and service enquiries, from franchise dealer to independent car business.",
        },
        types: [
          { nl: "Autodealers", en: "Car dealerships" },
          { nl: "Merkdealers", en: "Franchise dealers" },
          { nl: "Occasionhandelaren", en: "Used car dealers" },
          { nl: "Garagebedrijven", en: "Garages" },
          { nl: "APK-stations", en: "Vehicle inspection stations" },
          { nl: "Bandenspecialisten", en: "Tyre specialists" },
          { nl: "Autoschadeherstellers", en: "Car body repair shops" },
          { nl: "Motorzaken", en: "Motorcycle dealers" },
        ],
        useCases: [
          {
            title: { nl: "Werkplaatsplanning online", en: "Online workshop booking" },
            text: {
              nl: "Klanten plannen APK, onderhoud of een bandenwissel zelf in met hun kenteken. De afspraak komt direct in je werkplaatsagenda, zonder belletjes heen en weer.",
              en: "Customers book inspections, servicing or a tyre change themselves using their registration number. The appointment goes straight into your workshop calendar, without calls back and forth.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Voorraad automatisch op je site", en: "Your stock on your site, automatically" },
            text: {
              nl: "Occasions komen via een feed uit je voorraadsysteem op de website, met foto's, filters en actuele prijzen. Verkocht is ook echt weg.",
              en: "Used cars flow from your inventory system onto the website, with photos, filters and current prices. Sold means actually gone.",
            },
            service: "web-apps-portals-apps",
            application: "api-koppelingen",
          },
          {
            title: { nl: "Advertenties die je voorraad tonen", en: "Ads that show your stock" },
            text: {
              nl: "Wie een auto bekeek, ziet die later terug op Instagram, Facebook of Google. Gekoppeld aan je voorraad, dus nooit reclame voor een auto die al weg is.",
              en: "Anyone who viewed a car sees it again later on Instagram, Facebook or Google. Linked to your stock, so you never advertise a car that has already gone.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "APK-herinnering die vanzelf gaat", en: "Inspection reminders that send themselves" },
            text: {
              nl: "Een automatische mail of WhatsApp als de APK of onderhoudsbeurt bijna verloopt, met een directe link om in te plannen.",
              en: "An automatic email or WhatsApp message when the inspection or service is almost due, with a direct link to book.",
            },
            service: "marketing-automatisering-funnels",
            application: "marketing-automation",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet een goede website voor een autobedrijf kunnen?", en: "What should a good website for a car business be able to do?" },
            a: {
              nl: "Twee dingen tegelijk: auto's verkopen en de werkplaats vullen. Dus een actueel occasion-aanbod dat automatisch binnenkomt via een feed uit je voorraadsysteem, met goede foto's en filters op merk, prijs en brandstof. Daarnaast duidelijke pagina's voor onderhoud, APK en schade, met een knop om direct een afspraak te maken. Wij bouwen zo'n [[websites-webshops|website]] zo dat je verkopers en je werkplaatschef er allebei blij van worden. En de klant ook, die vooral snel wil zien wat er staat.",
              en: "Two things at once: sell cars and fill the workshop. That means an up-to-date used car stock that flows in automatically from your inventory system, with good photos and filters on make, price and fuel type. Alongside that, clear pages for servicing, inspections and bodywork, with a button to book straight away. We build that kind of [[websites-webshops|website]] so your sales team and your workshop manager are both happy with it. And so is the customer, who mainly wants to see quickly what is on the forecourt.",
            },
          },
          {
            q: { nl: "Hoe word ik als garage beter gevonden in mijn regio?", en: "How can my garage get found more easily in my area?" },
            a: {
              nl: "Met lokale SEO voor je autobedrijf. Dat begint bij een compleet en actief Google Bedrijfsprofiel: openingstijden, foto's van je werkplaats en reviews die je ook beantwoordt. Daarna een eigen pagina per dienst, zoals APK, airco-onderhoud of banden wisselen, en voor de plaatsen waar je klanten vandaan komen. Zo sluit je aan op hoe mensen echt zoeken. Met [[lokale-seo|lokale SEO]] zorgen we dat je zichtbaar bent op het moment dat iemand een garage in de buurt zoekt.",
              en: "With local SEO for your car business. It starts with a complete and active Google Business Profile: opening hours, photos of your workshop and reviews you actually reply to. Then a separate page for each service, such as inspections, air conditioning service or tyre changes, and for the towns your customers come from. That matches how people really search. With [[lokale-seo|local SEO]] we make sure you are visible at the moment someone looks for a garage nearby.",
            },
          },
          {
            q: { nl: "Kunnen klanten APK en onderhoud online inplannen met hun kenteken?", en: "Can customers book inspections and servicing online with their registration number?" },
            a: {
              nl: "Ja. De klant vult zijn kenteken in, het formulier haalt merk, model en APK-datum op uit de open data van de RDW, en daarna kiest hij een dienst en een tijdstip. Dat scheelt overtypen en belletjes over het verkeerde type auto. We koppelen de [[boekingswidget]] aan je werkplaatsplanning of agenda. En met een automatische herinnering als de APK weer bijna verloopt, komt de klant vanzelf terug, zonder dat jij een lijstje hoeft bij te houden.",
              en: "Yes. The customer enters their registration number, the form pulls make, model and inspection due date from the open data of the RDW (the Dutch vehicle authority), and then they choose a service and a time slot. No retyping, and no calls about the wrong car type. We connect the [[boekingswidget|booking widget]] to your workshop planning or calendar. And with an automatic reminder when the inspection is almost due again, the customer comes back by themselves, without you keeping a list.",
            },
          },
          {
            q: { nl: "Hoe krijg ik meer inruil- en occasionaanvragen?", en: "How do I get more trade-in and used car enquiries?" },
            a: {
              nl: "Maak de eerste stap klein. Een inruilformulier met kenteken, kilometerstand en een paar foto's voelt een stuk lichter dan 'bel ons even'. Voor je aanbod werken advertenties die automatisch je voorraad laten zien goed, zodat iemand die een SUV bekeek die later weer tegenkomt in zijn tijdlijn. Met [[meta-ads|Meta Ads]] en Google zetten we dat op, gekoppeld aan je voorraadfeed. Elke aanvraag landt netjes bij je verkopers, met de gegevens die ze nodig hebben om meteen terug te bellen.",
              en: "Make the first step small. A trade-in form with registration, mileage and a few photos feels a lot lighter than 'give us a call'. For your stock, ads that automatically show your inventory work well, so someone who looked at an SUV sees it again later in their feed. We set that up with [[meta-ads|Meta Ads]] and Google, linked to your inventory feed. Every enquiry lands neatly with your sales team, with the details they need to call back straight away.",
            },
          },
        ],
      },
      {
        name: { nl: "Car care & detailing", en: "Car care & detailing" },
        intro: {
          nl: "Voor detailers, car care studio's, poetsbedrijven, coating- en PPF-specialisten en wrapstudio's die hun vakmanschap net zo verzorgd online willen laten zien als op de auto.",
          en: "For detailers, car care studios, valeting companies, coating and PPF specialists and wrap studios that want their craftsmanship to look as polished online as it does on the car.",
        },
        types: [
          { nl: "Detailingstudio's", en: "Detailing studios" },
          { nl: "Car care specialisten", en: "Car care specialists" },
          { nl: "Autopoetsbedrijven", en: "Car valeting companies" },
          { nl: "Coatingspecialisten", en: "Ceramic coating specialists" },
          { nl: "Wrap- en PPF-studio's", en: "Wrap and PPF studios" },
        ],
        useCases: [
          {
            title: { nl: "Premium huisstijl voor je studio", en: "A premium identity for your studio" },
            text: {
              nl: "Een rustig, sterk merk dat je overal terugziet: website, werkkleding, bus en het kaartje dat je na een behandeling in de auto legt.",
              en: "A calm, strong brand you see everywhere: website, workwear, van and the card you leave in the car after a treatment.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Voor-en-na dat overtuigt", en: "Before-and-after that convinces" },
            text: {
              nl: "Eerlijke voor-en-na beelden en korte verticale video's van een complete transformatie, voor je website, Instagram en TikTok.",
              en: "Honest before-and-after images and short vertical videos of a full transformation, for your website, Instagram and TikTok.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Prijsindicatie per autoklasse", en: "Price estimate per vehicle class" },
            text: {
              nl: "Klanten kiezen autoklasse, staat van de lak en pakket, en zien direct een vanafprijs. Jij krijgt een aanvraag met alles erin.",
              en: "Customers choose vehicle class, paint condition and package, and immediately see a starting price. You get an enquiry with everything in it.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Gevonden op 'coating' in je regio", en: "Found for 'coating' in your area" },
            text: {
              nl: "Pagina's per behandeling en een actief Google Bedrijfsprofiel, zodat je opduikt als iemand 'ceramic coating' of 'auto poetsen' met zijn woonplaats zoekt.",
              en: "Pages per treatment and an active Google Business Profile, so you show up when someone searches 'ceramic coating' or 'car detailing' plus their town.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe krijg je een huisstijl voor je detailingstudio die premium aanvoelt?", en: "How do you get a visual identity for your detailing studio that feels premium?" },
            a: {
              nl: "Premium zit in rust en consequentie, niet in zoveel mogelijk chroom. Een strak logo, een beperkt kleurenpalet, sterke typografie en vooral beeld van eigen werk. Die [[huisstijl]] laten we overal terugkomen: website, werkkleding, bedrijfsbus, visitekaartjes en het kaartje dat je na een behandeling in de auto achterlaat. Voor JURGH Detailing bouwden we bijvoorbeeld een donkere, luxe website met grote beelden en rustige animaties. Zo ziet een klant al voor de eerste afspraak dat je oog hebt voor detail.",
              en: "Premium comes from calm and consistency, not from as much chrome as possible. A clean logo, a limited colour palette, strong typography and above all images of your own work. We carry that [[huisstijl|visual identity]] through everything: website, workwear, company van, business cards and the card you leave in the car after a treatment. For JURGH Detailing, for example, we built a dark, luxurious website with large imagery and calm animations. That way a customer sees your eye for detail before the first appointment.",
            },
          },
          {
            q: { nl: "Hoe laat je het resultaat van polijsten of coaten goed zien?", en: "How do you show the result of polishing or coating properly?" },
            a: {
              nl: "Met voor-en-na beelden die eerlijk zijn: hetzelfde licht, dezelfde hoek, liefst met een swirl-lamp erbij. Een schuifje op je website waarmee bezoekers zelf het verschil zien, doet meer dan drie alinea's over lakcorrectie. Korte verticale video's van het moment dat het water van een verse coating parelt, werken goed op Instagram en TikTok. We maken die beelden met je op locatie, of laten je zien hoe je ze zelf goed vastlegt. Daar zetten we [[social-video|social video]] en fotografie voor in.",
              en: "With honest before-and-after images: same light, same angle, ideally with a swirl light. A slider on your website that lets visitors see the difference themselves does more than three paragraphs about paint correction. Short vertical videos of water beading off a fresh coating work well on Instagram and TikTok. We shoot those with you on location, or show you how to capture them well yourself. That is where [[social-video|social video]] and photography come in.",
            },
          },
          {
            q: { nl: "Moet ik mijn prijzen voor detailing online zetten?", en: "Should I put my detailing prices online?" },
            a: {
              nl: "Vaak wel, al is het een vanafprijs. Klanten willen weten of ze in de buurt zitten voordat ze je bellen. Het lastige is dat de prijs afhangt van de grootte en de staat van de auto. Daarvoor werkt een [[offerte-calculator|prijscalculator]] goed: autoklasse kiezen, staat van de lak aangeven, pakket selecteren, en je krijgt een indicatie plus een aanvraag met alles erin. Jij houdt ruimte voor maatwerk, de klant heeft een realistisch beeld. Dat scheelt gesprekken die nergens heen gaan.",
              en: "Usually yes, even if it is a 'from' price. Customers want to know if they are in the right ballpark before they call. The tricky part is that price depends on the size and condition of the car. A [[offerte-calculator|price calculator]] works well here: choose the vehicle class, indicate the paint condition, pick a package, and you get an estimate plus an enquiry with everything in it. You keep room for custom work, the customer gets a realistic picture. That saves conversations that go nowhere.",
            },
          },
          {
            q: { nl: "Werkt adverteren voor een detailingbedrijf of wrapstudio?", en: "Does advertising work for a detailing business or wrap studio?" },
            a: {
              nl: "Ja, als je het visueel aanpakt. Een detailer of wrapstudio verkoopt iets wat je moet zien, dus Instagram en Facebook passen goed, zeker met video van een complete transformatie. Op Google richt je je op mensen die al zoeken, zoals 'ceramic coating' of 'auto wrappen' met je regio erbij. We beginnen klein, meten wat aanvragen oplevert en schuiven het budget naar wat werkt. Met [[meta-ads|Meta Ads]] bereik je ook liefhebbers die nog niet weten dat ze je nodig hebben.",
              en: "Yes, if you take a visual approach. A detailer or wrap studio sells something you have to see, so Instagram and Facebook fit well, especially with video of a full transformation. On Google you target people who are already searching, such as 'ceramic coating' or 'car wrap' plus your area. We start small, measure which ads bring in enquiries and shift budget to what works. With [[meta-ads|Meta Ads]] you also reach enthusiasts who do not know yet that they need you.",
            },
          },
        ],
      },
      {
        name: { nl: "Onderdelen & tuning", en: "Parts & tuning" },
        intro: {
          nl: "Voor webshops in auto-onderdelen, tuners, chiptuners, uitlaat- en velgenspecialisten en leveranciers van performance parts die willen dat klanten zeker weten wat er op hun auto past.",
          en: "For car parts web shops, tuners, ECU remapping specialists, exhaust and wheel specialists and performance parts suppliers who want customers to know for sure what fits their car.",
        },
        types: [
          { nl: "Auto-onderdelenwebshops", en: "Car parts web shops" },
          { nl: "Tuningbedrijven", en: "Tuning companies" },
          { nl: "Chiptuners", en: "ECU remapping specialists" },
          { nl: "Uitlaatspecialisten", en: "Exhaust specialists" },
          { nl: "Velgenleveranciers", en: "Wheel suppliers" },
        ],
        useCases: [
          {
            title: { nl: "Pastcheck op merk en model", en: "Fit check by make and model" },
            text: {
              nl: "Klanten kiezen merk, model en bouwjaar of vullen hun kenteken in, en zien alleen nog onderdelen die echt passen. Dat scheelt retouren en mailtjes.",
              en: "Customers pick make, model and year or enter their registration, and only see parts that actually fit. That saves returns and emails.",
            },
            service: "configurators-lead-tools-widgets",
            application: "productconfigurator",
          },
          {
            title: { nl: "Vermogenscheck per motor", en: "Power check per engine" },
            text: {
              nl: "Bezoekers zien per merk, model en motor wat er met chiptuning mogelijk is, en plannen direct een afspraak in.",
              en: "Visitors see per make, model and engine what is possible with remapping, and book an appointment straight away.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "Webshop met slimme filters", en: "A web shop with smart filters" },
            text: {
              nl: "Zoeken op artikelnummer, OE-nummer of type, met voorraad en prijzen die automatisch bijwerken vanuit je leveranciers.",
              en: "Search by part number, OE number or type, with stock and prices that update automatically from your suppliers.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Renders van je onderdelen", en: "Renders of your parts" },
            text: {
              nl: "Strakke 3D-renders van uitlaten, velgen of bodykits, ook als het product nog niet klaar is voor een fotoshoot.",
              en: "Sharp 3D renders of exhausts, wheels or body kits, even when the product is not ready for a photo shoot yet.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
        ],
        faqs: [
          {
            q: { nl: "Kan een configurator laten zien welke velgen of onderdelen op mijn auto passen?", en: "Can a configurator show which wheels or parts fit my car?" },
            a: {
              nl: "Ja, en dat is precies waar veel retouren en mailtjes vandaan komen. In een [[productconfigurator]] kiest de klant eerst merk, model en bouwjaar, of vult hij zijn kenteken in. Daarna ziet hij alleen nog wat echt past, met de juiste maten en eventuele montage-opties. Voor Titanium Exhaust bouwden we zo'n configurator voor uitlaatsystemen: stap voor stap op merk, model en wensen, met een directe offerte-aanvraag. Het resultaat is een klant die zeker van zijn zaak is, en een aanvraag die klopt.",
              en: "Yes, and that is exactly where a lot of returns and emails come from. In a [[productconfigurator|product configurator]] the customer first chooses make, model and year, or enters their registration number. After that they only see what actually fits, with the right sizes and any fitting options. For Titanium Exhaust we built a configurator like that for exhaust systems: step by step by make, model and preferences, with a direct quote request. The result is a confident customer, and an enquiry that is correct.",
            },
          },
          {
            q: { nl: "Welke webshop past bij een groot assortiment auto-onderdelen?", en: "Which web shop suits a large range of car parts?" },
            a: {
              nl: "Eén die goed is in zoeken en filteren. Klanten zoeken op artikelnummer, OE-nummer, merk of type, en haken af als ze na twee pogingen nog niets vinden. Daarnaast wil je voorraad en prijzen automatisch laten bijwerken vanuit je leveranciers of ERP, want handmatig bijhouden is bij duizenden artikelen geen doen. We kiezen het platform op basis van je assortiment en systemen, en bouwen de [[webshop]] met slimme filters, snelle productpagina's en koppelingen die het saaie werk overnemen.",
              en: "One that is good at search and filtering. Customers search by part number, OE number, brand or type, and give up if they find nothing after two attempts. You also want stock and prices to update automatically from your suppliers or ERP, because keeping thousands of items up to date by hand is not realistic. We choose the platform based on your range and systems, and build the [[webshop|web shop]] with smart filters, fast product pages and integrations that take over the boring work.",
            },
          },
          {
            q: { nl: "Is een 3D-configurator de moeite waard voor tuningonderdelen?", en: "Is a 3D configurator worth it for tuning parts?" },
            a: {
              nl: "Soms wel, soms niet. Bij producten die vooral om de look draaien, zoals velgen, bodykits, spoilers of uitlaateinden, helpt het enorm als de klant ziet hoe het eruitziet en kan draaien en van kleur wisselen. Bij een luchtfilter of een set remblokken is goede fotografie genoeg. We kijken eerlijk naar wat het oplevert. Wordt het 3D, dan bouwen we een [[3d-configurator]] die ook op een telefoon soepel draait, want daar kijken de meeste liefhebbers 's avonds op de bank.",
              en: "Sometimes yes, sometimes no. For products that are mainly about looks, such as wheels, body kits, spoilers or exhaust tips, it helps a lot when customers can see, rotate and recolour the part. For an air filter or a set of brake pads, good photography is enough. We look honestly at what it will bring. If it does become 3D, we build a [[3d-configurator|3D configurator]] that runs smoothly on a phone, because that is where most enthusiasts browse in the evening.",
            },
          },
          {
            q: { nl: "Hoe krijgt een chiptuner of tuningbedrijf meer aanvragen?", en: "How does a chip tuner or tuning company get more enquiries?" },
            a: {
              nl: "Door de vraag te beantwoorden die iedereen heeft: wat levert het op voor mijn auto? Een vermogenscheck waarin bezoekers merk, model en motor kiezen en direct zien wat er mogelijk is, werkt als een magneet. Elke uitkomst kan ook een eigen pagina zijn die gevonden wordt in Google en in AI-zoekmachines. Zo'n [[check-tools|check-tool]] koppelen we aan je agenda of aanvraagformulier. Daarnaast helpt eerlijke uitleg over garantie en betrouwbaarheid, want daar twijfelen mensen het meest over.",
              en: "By answering the question everyone has: what will it do for my car? A power check where visitors pick make, model and engine and immediately see what is possible works like a magnet. Each result can also be its own page that gets found in Google and in AI search. We connect that kind of [[check-tools|check tool]] to your calendar or enquiry form. On top of that, honest explanations about warranty and reliability help, because that is where people hesitate most.",
            },
          },
        ],
      },
      {
        name: { nl: "Mobiliteit & lease", en: "Mobility & leasing" },
        intro: {
          nl: "Voor leasemaatschappijen, autoverhuurders, aanbieders van deelauto's en deelscooters, wagenparkbeheerders en bedrijven in laadinfra en elektrisch rijden.",
          en: "For leasing companies, car rental firms, car and scooter sharing providers, fleet managers and businesses in EV charging and electric driving.",
        },
        types: [
          { nl: "Leasemaatschappijen", en: "Leasing companies" },
          { nl: "Autoverhuurbedrijven", en: "Car rental companies" },
          { nl: "Aanbieders van deelmobiliteit", en: "Shared mobility providers" },
          { nl: "Wagenparkbeheerders", en: "Fleet management companies" },
          { nl: "Laadpaalinstallateurs", en: "EV charger installers" },
          { nl: "Camper- en caravanbedrijven", en: "Motorhome and caravan dealers" },
        ],
        useCases: [
          {
            title: { nl: "Leasecalculator met maandbedrag", en: "Lease calculator with monthly price" },
            text: {
              nl: "Bezoekers kiezen looptijd, kilometers en uitvoering en zien direct een indicatie van het maandbedrag. Jij krijgt een aanvraag die klaar is voor een offerte.",
              en: "Visitors choose term, mileage and trim and immediately see an indication of the monthly price. You get an enquiry that is ready for a quote.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Wagenparkportaal voor fleetmanagers", en: "Fleet portal for fleet managers" },
            text: {
              nl: "Contracten, onderhoud en schademeldingen in één overzicht, met berijders die zelf hun kilometerstand en schade doorgeven.",
              en: "Contracts, servicing and damage reports in one overview, with drivers submitting their own mileage and damage.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Leads opvolgen zonder belrondes", en: "Following up leads without call rounds" },
            text: {
              nl: "Wie een offerte opvroeg maar nog twijfelt, krijgt op het juiste moment een nuttige mail in plaats van drie telefoontjes.",
              en: "Anyone who requested a quote but is still hesitating gets a useful email at the right moment instead of three phone calls.",
            },
            service: "marketing-automatisering-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "Elektrisch rijden in een animatie", en: "Electric driving in one animation" },
            text: {
              nl: "Een korte animatie legt laden, bereik en kosten uit in gewone taal, voor je website, socials en de showroom.",
              en: "A short animation explains charging, range and costs in plain language, for your website, socials and the showroom.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe pak je leadgeneratie aan als leasemaatschappij?", en: "How should a leasing company approach lead generation?" },
            a: {
              nl: "Begin bij het getal waar iedereen op let: het maandbedrag. Een leasecalculator waarin bezoekers looptijd, kilometers en uitvoering kiezen, levert aanvragen op met alles wat je nodig hebt voor een offerte. Daaromheen landingspagina's per model of doelgroep, zoals zzp'ers of private lease, en advertenties die daar rechtstreeks naartoe wijzen. Wie nog twijfelt, volgen we op met [[lead-nurturing]]: nuttige mails op het juiste moment in plaats van drie keer bellen. Zo valt er minder tussen wal en schip.",
              en: "Start with the number everyone looks at: the monthly price. A lease calculator where visitors choose term, mileage and trim produces enquiries with everything you need for a quote. Around it, landing pages per model or audience, such as freelancers or private lease, and ads that point straight to them. Anyone still hesitating gets followed up with [[lead-nurturing|lead nurturing]]: useful emails at the right moment instead of three phone calls. That way fewer leads slip through the cracks.",
            },
          },
          {
            q: { nl: "Kunnen zakelijke klanten hun wagenpark zelf beheren in een portaal?", en: "Can business customers manage their fleet themselves in a portal?" },
            a: {
              nl: "Ja. In een [[klantportaal]] ziet een fleetmanager in één overzicht welke auto's er rijden, wanneer contracten aflopen en waar onderhoud of schade loopt. Berijders melden zelf schade of een kilometerstand, met foto's erbij. Dat scheelt jouw team een hoop mail en telefoon. We koppelen het portaal aan je bestaande systemen, zodat de gegevens kloppen zonder dubbel werk. En we ontwerpen het zo dat ook iemand die er twee keer per jaar inlogt snel vindt wat hij zoekt.",
              en: "Yes. In a [[klantportaal|client portal]] a fleet manager sees at a glance which cars are on the road, when contracts end and where servicing or damage claims are pending. Drivers report damage or mileage themselves, with photos attached. That saves your team a lot of email and phone calls. We connect the portal to your existing systems so the data is right without double entry. And we design it so that even someone who logs in twice a year quickly finds what they need.",
            },
          },
          {
            q: { nl: "Kunnen klanten bij ons online een auto of bus huren en direct betalen?", en: "Can customers rent a car or van from us online and pay straight away?" },
            a: {
              nl: "Zeker. Een goed reserveringssysteem laat beschikbaarheid per voertuig en periode zien, rekent de prijs inclusief extra's zoals kilometers of verzekering uit en laat de klant direct betalen via iDEAL of creditcard. Een borg of aanbetaling kan ook. Daarna volgen automatische bevestigingen met de praktische info voor het ophalen. Voor deelauto's of verhuur met sleutelkastjes kan het verder gaan, met een [[mobiele-app]] die samenwerkt met je slimme sloten, als die een koppeling bieden. We kijken samen wat nu nodig is en wat later kan.",
              en: "Definitely. A good reservation system shows availability per vehicle and period, calculates the price including extras such as mileage or insurance, and lets the customer pay straight away by iDEAL or credit card. A deposit is possible too. Automatic confirmations follow, with the practical info for pick-up. For car sharing or rentals with key boxes it can go further, with a [[mobiele-app|mobile app]] that works with your smart locks, as long as they offer an integration. We look together at what you need now and what can wait.",
            },
          },
          {
            q: { nl: "Hoe leg je elektrisch rijden en laden helder uit op je website?", en: "How do you explain electric driving and charging clearly on your website?" },
            a: {
              nl: "Door niet te beginnen bij kilowatts, maar bij de situatie van de klant. Heeft hij een eigen oprit? Hoeveel rijdt hij per dag? Zakelijk of privé? Een [[keuzehulp-quiz|keuzehulp]] met een paar van die vragen leidt naar de passende laadpaal, het juiste abonnement of de auto die bij hem past. Daarna helpen korte uitlegpagina's en een animatie meer dan een technisch datasheet. Zo voelt een overstap die voor veel mensen nog onbekend is, ineens een stuk overzichtelijker.",
              en: "By not starting with kilowatts, but with the customer's situation. Do they have a driveway? How far do they drive each day? Business or private? A [[keuzehulp-quiz|product finder]] with a few of those questions leads to the right charger, the right subscription or the car that suits them. After that, short explainer pages and an animation help more than a technical datasheet. That way a switch that still feels unfamiliar to many people suddenly becomes a lot clearer.",
            },
          },
        ],
      },
      {
        name: { nl: "Uitvaartvervoer & specials", en: "Funeral & special vehicles" },
        intro: {
          nl: "Voor rouwvervoerders, verhuurders van uitvaartauto's, trouwauto's en oldtimers, limousineservices en andere bedrijven met bijzondere voertuigen en een persoonlijke service.",
          en: "For funeral car services, rental companies for hearses, wedding cars and classic cars, limousine services and other businesses with special vehicles and a personal service.",
        },
        types: [
          { nl: "Rouwvervoerders", en: "Funeral car services" },
          { nl: "Trouwautoverhuurders", en: "Wedding car rentals" },
          { nl: "Oldtimerspecialisten", en: "Classic car specialists" },
          { nl: "Limousineservices", en: "Limousine services" },
        ],
        useCases: [
          {
            title: { nl: "Ingetogen website voor rouwvervoer", en: "A restrained website for funeral transport" },
            text: {
              nl: "Een sobere, heldere site met per voertuig de specificaties en een duidelijke weg naar contact, ook 's nachts.",
              en: "A sober, clear site with specifications per vehicle and a clear route to contact, at night too.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Trouwauto boeken op datum", en: "Booking a wedding car by date" },
            text: {
              nl: "Bruidsparen zien per auto of hun datum vrij is, kiezen een pakket en leggen de datum vast met een aanbetaling.",
              en: "Couples see per car whether their date is free, choose a package and secure the date with a deposit.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Gevonden op 'rouwauto huren'", en: "Found for 'hearse hire'" },
            text: {
              nl: "Pagina's per voertuig en regio, zodat uitvaartondernemers en families je vinden op de zoektermen die ze echt gebruiken.",
              en: "Pages per vehicle and region, so funeral directors and families find you on the search terms they actually use.",
            },
            service: "seo-aeo-geo",
            application: "seo",
          },
          {
            title: { nl: "Presentatiemap voor uitvaartondernemers", en: "Presentation folder for funeral directors" },
            text: {
              nl: "Een verzorgde brochure met je voertuigen en werkwijze, om achter te laten na een kennismaking.",
              en: "A well-made brochure with your vehicles and way of working, to leave behind after an introductory meeting.",
            },
            service: "grafisch-ontwerp-print",
            application: "brochures-magazines",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe maak je een website voor rouwvervoer die waardig overkomt?", en: "How do you make a website for funeral transport that feels dignified?" },
            a: {
              nl: "Met rust. Ingetogen kleuren, veel witruimte, heldere taal en sterke, respectvolle fotografie van de voertuigen. Geen schreeuwerige knoppen, wel een duidelijke weg naar contact, ook 's nachts. Voor Nova Funeral Cars maakten we een sobere website met een heldere structuur per voertuig, zodat uitvaartondernemers en families snel zien wat er mogelijk is. Het onderwerp vraagt om zorgvuldigheid in elk detail, van de woordkeuze tot de manier waarop een aanvraag wordt bevestigd.",
              en: "With calm. Restrained colours, plenty of white space, clear language and strong, respectful photography of the vehicles. No loud buttons, but a clear route to contact, at night too. For Nova Funeral Cars we made a sober website with a clear structure per vehicle, so funeral directors and families quickly see what is possible. The subject calls for care in every detail, from word choice to the way an enquiry is confirmed.",
            },
          },
          {
            q: { nl: "Hoe word je als rouwvervoerder gevonden door uitvaartondernemers?", en: "How does a funeral car service get found by funeral directors?" },
            a: {
              nl: "Uitvaartondernemers zijn vaak je belangrijkste opdrachtgevers, dus je communicatie moet ook voor hen werken. Een website met per voertuig de specificaties, de regio's waar je rijdt en hoe snel je beschikbaar bent, geeft ze wat ze nodig hebben. Met [[seo]] zorgen we dat je gevonden wordt op zoektermen als rouwauto huren of rouwvervoer in je regio. Daarnaast werkt een verzorgde brochure of presentatiemap goed bij een kennismaking. Persoonlijk contact blijft de basis, wij zorgen dat de rest daarbij past.",
              en: "Funeral directors are often your main clients, so your communication has to work for them too. A website with specifications per vehicle, the regions you cover and how quickly you are available gives them what they need. With [[seo|SEO]] we make sure you are found on searches like hearse hire or funeral transport in your area. A well-made brochure or presentation folder also works well at an introductory meeting. Personal contact remains the foundation; we make sure the rest fits with it.",
            },
          },
          {
            q: { nl: "Hoe verhuur je trouwauto's of oldtimers via je website?", en: "How do you rent out wedding cars or classic cars through your website?" },
            a: {
              nl: "Laat eerst zien wat je hebt, met foto's die het gevoel van de dag oproepen. Daarna wil een bruidspaar vooral weten: is de auto vrij op onze datum en wat kost het? Een [[boekingswidget]] met beschikbaarheid per auto, vaste pakketten en extra's zoals een chauffeur of versiering beantwoordt dat in één keer. Je kunt een aanbetaling vragen om de datum vast te leggen. En omdat het trouwseizoen piekt, plannen we campagnes ruim op tijd, als stellen nog aan het oriënteren zijn.",
              en: "First show what you have, with photos that capture the feeling of the day. After that, a couple mainly wants to know: is the car free on our date and what does it cost? A [[boekingswidget|booking widget]] with availability per car, fixed packages and extras like a chauffeur or decorations answers that in one go. You can ask for a deposit to lock in the date. And because wedding season peaks, we plan campaigns well in advance, while couples are still exploring.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Autodealers", en: "Car dealerships" },
      { nl: "Merkdealers", en: "Franchise dealers" },
      { nl: "Occasionhandelaren", en: "Used car dealers" },
      { nl: "Garagebedrijven", en: "Garages" },
      { nl: "APK-stations", en: "Vehicle inspection stations" },
      { nl: "Bandenspecialisten", en: "Tyre specialists" },
      { nl: "Autoschadeherstellers", en: "Car body repair shops" },
      { nl: "Motorzaken", en: "Motorcycle dealers" },
      { nl: "Detailingstudio's", en: "Detailing studios" },
      { nl: "Car care specialisten", en: "Car care specialists" },
      { nl: "Autopoetsbedrijven", en: "Car valeting companies" },
      { nl: "Coatingspecialisten", en: "Ceramic coating specialists" },
      { nl: "Wrap- en PPF-studio's", en: "Wrap and PPF studios" },
      { nl: "Auto-onderdelenwebshops", en: "Car parts web shops" },
      { nl: "Tuningbedrijven", en: "Tuning companies" },
      { nl: "Chiptuners", en: "ECU remapping specialists" },
      { nl: "Uitlaatspecialisten", en: "Exhaust specialists" },
      { nl: "Velgenleveranciers", en: "Wheel suppliers" },
      { nl: "Leasemaatschappijen", en: "Leasing companies" },
      { nl: "Autoverhuurbedrijven", en: "Car rental companies" },
      { nl: "Aanbieders van deelmobiliteit", en: "Shared mobility providers" },
      { nl: "Wagenparkbeheerders", en: "Fleet management companies" },
      { nl: "Laadpaalinstallateurs", en: "EV charger installers" },
      { nl: "Camper- en caravanbedrijven", en: "Motorhome and caravan dealers" },
      { nl: "Rouwvervoerders", en: "Funeral car services" },
      { nl: "Trouwautoverhuurders", en: "Wedding car rentals" },
      { nl: "Oldtimerspecialisten", en: "Classic car specialists" },
      { nl: "Limousineservices", en: "Limousine services" },
    ],
  },

  /* ---------- Sport & Media ---------- */
  "sport-media": {
    segments: [
      {
        name: { nl: "Clubs & verenigingen", en: "Clubs & associations" },
        intro: {
          nl: "Voor sportverenigingen en clubs, van voetbal, hockey en tennis tot atletiek en padel, met besturen en vrijwilligers die de club naast hun werk draaiende houden.",
          en: "For sports clubs and associations, from football, hockey and tennis to athletics and padel, with boards and volunteers who keep the club running alongside their day jobs.",
        },
        types: [
          { nl: "Voetbalverenigingen", en: "Football clubs" },
          { nl: "Hockeyclubs", en: "Hockey clubs" },
          { nl: "Tennis- en padelclubs", en: "Tennis and padel clubs" },
          { nl: "Atletiekverenigingen", en: "Athletics clubs" },
          { nl: "Wieler- en triathlonverenigingen", en: "Cycling and triathlon clubs" },
          { nl: "Zwem- en watersportverenigingen", en: "Swimming and water sports clubs" },
        ],
        useCases: [
          {
            title: { nl: "Clubsite die vrijwilligers bijhouden", en: "A club site volunteers can run" },
            text: {
              nl: "Programma, uitslagen en trainingstijden komen waar het kan automatisch binnen. De rest pas je zelf aan, zonder handleiding van veertig pagina's.",
              en: "Fixtures, results and training times come in automatically where possible. You update the rest yourself, without a forty-page manual.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Proeftraining in een paar klikken", en: "A trial session in a few clicks" },
            text: {
              nl: "Nieuwe leden kiezen een team of tijdstip en boeken direct een proeftraining, met een herinnering vooraf.",
              en: "New members choose a team or time slot and book a trial session straight away, with a reminder beforehand.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Sponsorpresentatie die verkoopt", en: "A sponsor deck that sells" },
            text: {
              nl: "Een heldere presentatie of brochure met je leden, je bereik en je pakketten, in de stijl van je club.",
              en: "A clear presentation or brochure with your members, your reach and your packages, in your club's style.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Clubapp met afmelden en pushberichten", en: "A club app with sign-offs and push alerts" },
            text: {
              nl: "Leden melden zich af, reserveren een baan en krijgen een seintje bij een afgelasting, gekoppeld aan je ledenadministratie.",
              en: "Members sign off, book a court and get a heads-up when a match is cancelled, linked to your membership administration.",
            },
            service: "web-apps-portals-apps",
            application: "ledenportaal-loyaliteit",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet er op een website voor een sportvereniging staan?", en: "What should a sports club website include?" },
            a: {
              nl: "Wat leden en ouders elke week zoeken: het programma, uitslagen, trainingstijden en waar ze moeten zijn. Daarnaast een duidelijke route om lid te worden of een proeftraining te doen, plus ruimte voor sponsors en vrijwilligerswerk. Waar het kan, halen we wedstrijdgegevens automatisch op uit je ledenadministratie of bondssysteem, zodat niemand op zondagavond nog uitslagen hoeft over te typen. We bouwen een [[webflow-website|website]] die vrijwilligers zelf bijhouden, ook als de websitecommissie volgend jaar weer anders is samengesteld.",
              en: "What members and parents look for every week: fixtures, results, training times and where they need to be. Alongside that, a clear route to join or book a trial session, plus room for sponsors and volunteering. Where possible, we pull match data automatically from your membership administration or federation system, so nobody has to retype results on a Sunday evening. We build a [[webflow-website|website]] that volunteers can update themselves, even when the website committee looks different again next year.",
            },
          },
          {
            q: { nl: "Hoe vinden we als club meer leden en vrijwilligers?", en: "How can our club find more members and volunteers?" },
            a: {
              nl: "Maak de drempel laag en de boodschap concreet. Een pagina waar je met een paar klikken een proeftraining boekt, werkt beter dan een pdf met contributietarieven. Voor vrijwilligers helpt het om taken klein te maken: 'twee keer per seizoen bardienst' klinkt anders dan 'wij zoeken vrijwilligers'. Met lokale [[social-media-marketing|social media]] en een paar gerichte campagnes rond de start van het seizoen bereik je gezinnen in de buurt. En laat vooral je leden zelf vertellen waarom het er leuk is.",
              en: "Keep the threshold low and the message concrete. A page where you book a trial session in a few clicks works better than a PDF of membership fees. For volunteers it helps to make tasks small: 'two bar shifts per season' sounds different from 'we are looking for volunteers'. With local [[social-media-marketing|social media]] and a few targeted campaigns around the start of the season you reach families nearby. And above all, let your members tell people why it is fun.",
            },
          },
          {
            q: { nl: "Helpen jullie met een sponsorbrochure of sponsorpresentatie?", en: "Can you help with a sponsorship brochure or presentation?" },
            a: {
              nl: "Ja. Een sponsor koopt geen bordje langs het veld, maar een plek in je community. Dat verhaal vertel je met een heldere [[presentaties-pitchdecks|sponsorpresentatie]] of brochure: wie je leden en bezoekers zijn, welke pakketten er zijn en wat een partner er concreet voor terugkrijgt, online en langs de lijn. We ontwerpen het in de stijl van je club en leveren het drukklaar of als presentatie aan. Zo staat je sponsorcommissie sterker aan tafel bij de lokale ondernemer.",
              en: "Yes. A sponsor is not buying a board along the pitch, but a place in your community. You tell that story with a clear [[presentaties-pitchdecks|sponsor presentation]] or brochure: who your members and visitors are, which packages exist and what a partner concretely gets in return, online and on the sidelines. We design it in your club's style and deliver it print-ready or as a presentation. That way your sponsorship committee stands stronger at the table with local businesses.",
            },
          },
          {
            q: { nl: "Heeft een vereniging een eigen app nodig?", en: "Does a club need its own app?" },
            a: {
              nl: "Niet altijd. Een goede mobiele website doet voor veel clubs al wat nodig is. Een eigen app wordt interessant als leden er echt iets in regelen: zich afmelden voor een wedstrijd, een baan reserveren, een pushbericht krijgen bij een afgelasting of een digitale ledenpas laten zien. Dan bouwen we een [[ledenportaal-loyaliteit|ledenportaal]] of app die aansluit op je ledenadministratie. We denken eerlijk mee, want een app die niemand opent, is vooral een kostenpost met een mooi icoontje.",
              en: "Not always. For many clubs a good mobile website already does what is needed. An app of your own becomes interesting when members actually arrange things in it: signing off for a match, booking a court, getting a push notification when a game is cancelled or showing a digital membership card. Then we build a [[ledenportaal-loyaliteit|member portal]] or app that connects to your membership administration. We give honest advice, because an app nobody opens is mainly a cost item with a nice icon.",
            },
          },
        ],
      },
      {
        name: { nl: "Fitness & sportscholen", en: "Gyms & fitness" },
        intro: {
          nl: "Voor sportscholen, fitnessclubs, boutique studio's, personal trainers en yoga-, pilates- en CrossFit-locaties die meer proeflessen en trouwe leden willen.",
          en: "For gyms, fitness clubs, boutique studios, personal trainers and yoga, pilates and CrossFit locations that want more trial sessions and loyal members.",
        },
        types: [
          { nl: "Sportscholen", en: "Gyms" },
          { nl: "Fitnessclubs", en: "Fitness clubs" },
          { nl: "Boutique fitnessstudio's", en: "Boutique fitness studios" },
          { nl: "Personal trainers", en: "Personal trainers" },
          { nl: "Yoga- en pilatesstudio's", en: "Yoga and pilates studios" },
          { nl: "CrossFit-boxen", en: "CrossFit boxes" },
        ],
        useCases: [
          {
            title: { nl: "Proeflescampagne in je buurt", en: "A trial session campaign nearby" },
            text: {
              nl: "Advertenties op Instagram en Facebook voor mensen binnen een paar kilometer, met één landingspagina en een formulier van drie velden.",
              en: "Ads on Instagram and Facebook for people within a few kilometres, with one landing page and a three-field form.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Lesrooster met direct reserveren", en: "Class timetable with instant booking" },
            text: {
              nl: "Een rooster dat altijd klopt, gekoppeld aan je boekingssoftware, waarin leden in een paar tikken een plek pakken.",
              en: "A timetable that is always right, linked to your booking software, where members grab a spot in a few taps.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Leden vasthouden met slimme flows", en: "Keeping members with smart flows" },
            text: {
              nl: "Een welkomstreeks, een berichtje als iemand een paar weken wegblijft en een felicitatie bij een mijlpaal, allemaal automatisch.",
              en: "A welcome series, a message when someone stays away for a few weeks and congratulations at a milestone, all automatic.",
            },
            service: "marketing-automatisering-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Een merk dat bij je studio past", en: "A brand that fits your studio" },
            text: {
              nl: "Een huisstijl, beeldtaal en toon die kloppen met je community, van de website tot de muur in je studio.",
              en: "An identity, imagery and tone that match your community, from the website to the wall of your studio.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe krijgt een sportschool meer proefles-aanvragen?", en: "How does a gym get more trial session sign-ups?" },
            a: {
              nl: "Met één duidelijke actie en weinig gedoe. Een landingspagina met een gratis of betaalde proefles, echte foto's van je ruimte en trainers, en een formulier van drie velden. Daar sturen we lokale campagnes op Instagram en Facebook naartoe, gericht op mensen in een straal rond je locatie. Met [[meta-ads|Meta Ads]] test je verschillende aanbiedingen en beelden en zie je wat aanmeldingen oplevert. En wie zich aanmeldt, krijgt automatisch een herinnering, zodat de proefles ook echt doorgaat.",
              en: "With one clear action and very little hassle. A landing page with a free or paid trial session, real photos of your space and trainers, and a three-field form. We point local campaigns on Instagram and Facebook to it, targeting people within a radius of your location. With [[meta-ads|Meta Ads]] you test different offers and images and see what brings in sign-ups. And anyone who signs up gets an automatic reminder, so the trial session actually happens.",
            },
          },
          {
            q: { nl: "Kunnen ons lesrooster en reserveringen op de website?", en: "Can our class timetable and bookings go on the website?" },
            a: {
              nl: "Ja. Werk je al met boekings- of ledensoftware, dan koppelen we die aan je website, zodat het rooster altijd actueel is en leden direct een plek reserveren. Heb je nog niets, dan kijken we samen wat past: een losse [[boekingswidget]] voor een studio met een paar lessen per dag, of een uitgebreider systeem met abonnementen en strippenkaarten. Vooral belangrijk is dat het op een telefoon in een paar tikken werkt, want daar wordt om tien voor zeven nog snel de laatste plek in de spinningles geboekt.",
              en: "Yes. If you already use booking or membership software, we connect it to your website so the timetable is always current and members reserve a spot straight away. If you have nothing yet, we look together at what fits: a simple [[boekingswidget|booking widget]] for a studio with a few classes a day, or a more extensive system with memberships and class passes. The key is that it works in a few taps on a phone, because that is where someone books the last spin class spot at ten to seven.",
            },
          },
          {
            q: { nl: "Hoe houd je sportschoolleden langer vast?", en: "How do you keep gym members for longer?" },
            a: {
              nl: "Door ze in de eerste weken goed op weg te helpen en daarna niet uit het oog te verliezen. Een welkomstreeks met tips en een persoonlijk schema, een berichtje als iemand een paar weken niet is geweest, een felicitatie bij een mijlpaal. Met [[marketing-automation]] gaat dat automatisch, op basis van incheckgegevens uit je systeem. Voor het lid voelt het als persoonlijke aandacht, terwijl je trainers gewoon kunnen doen waar ze goed in zijn: trainen.",
              en: "By helping them get started properly in the first weeks and not losing sight of them afterwards. A welcome series with tips and a personal plan, a message when someone has not been in for a few weeks, congratulations at a milestone. With [[marketing-automation|marketing automation]] that happens automatically, based on check-in data from your system. To the member it feels like personal attention, while your trainers can simply do what they are good at: training.",
            },
          },
          {
            q: { nl: "Hoe onderscheid je je als boutique studio of personal trainer?", en: "How do you stand out as a boutique studio or personal trainer?" },
            a: {
              nl: "Door helder te kiezen voor wie je er bent. Een studio voor drukke ondernemers vraagt een andere uitstraling dan een community-box waar iedereen elkaar bij naam kent. Dat vertalen we naar een [[huisstijl]], beeldtaal en toon die je overal terugziet: website, socials, kleding en de muur in je studio. Echte foto's van je eigen leden en trainers doen daarbij meer dan stockfoto's van modellen die nog nooit een kettlebell hebben vastgehouden.",
              en: "By choosing clearly who you are there for. A studio for busy professionals needs a different look from a community box where everyone knows each other by name. We translate that into a [[huisstijl|visual identity]], imagery and tone you see everywhere: website, socials, apparel and the wall of your studio. Real photos of your own members and trainers do more than stock images of models who have never held a kettlebell.",
            },
          },
        ],
      },
      {
        name: { nl: "Evenementen & wedstrijden", en: "Events & competitions" },
        intro: {
          nl: "Voor organisatoren van sportevenementen, hardloopwedstrijden, toernooien, wielerkoersen en sportieve publieksevenementen, van lokale loop tot internationaal toernooi.",
          en: "For organisers of sports events, running races, tournaments, cycling races and sporty public events, from a local run to an international tournament.",
        },
        types: [
          { nl: "Hardloopevenementen", en: "Running events" },
          { nl: "Wielertoertochten", en: "Cycling sportives" },
          { nl: "Toernooiorganisatoren", en: "Tournament organisers" },
          { nl: "Sportevenementen", en: "Sports events" },
        ],
        useCases: [
          {
            title: { nl: "Eventsite die de piek aankan", en: "An event site that handles the peak" },
            text: {
              nl: "Parcours, tijdschema, inschrijven en live uitslagen op één snelle site, desnoods in meerdere talen voor deelnemers uit het buitenland.",
              en: "Route, schedule, registration and live results on one fast site, in several languages for participants from abroad if needed.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
          {
            title: { nl: "Inschrijvingen vullen met e-mail", en: "Filling entries with email" },
            text: {
              nl: "Eerst de deelnemers van vorig jaar, dan een early-bird en herinneringen voor elke prijsstap, met praktische info voor wie al ingeschreven staat.",
              en: "Last year's participants first, then an early-bird and reminders before every price step, with practical info for those already registered.",
            },
            service: "marketing-automatisering-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Content op de dag zelf", en: "Content on the day itself" },
            text: {
              nl: "Korte clips van start, finish en publiek die je dezelfde dag nog post, en een aftermovie voor sponsors en volgend jaar.",
              en: "Short clips of the start, finish and crowd that you post the same day, plus an aftermovie for sponsors and next year.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Banners, startnummers en signing", en: "Banners, bibs and signage" },
            text: {
              nl: "Alles op en rond het parcours in één stijl, drukklaar aangeleverd, met je sponsors op de plekken waar de foto's worden gemaakt.",
              en: "Everything on and around the course in one style, delivered print-ready, with your sponsors where the photos are taken.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat heeft een website voor een sportevenement nodig?", en: "What does a website for a sports event need?" },
            a: {
              nl: "Vooral duidelijkheid voor deelnemers en publiek: afstanden of categorieën, het parcours, het tijdschema, bereikbaarheid en inschrijven. Op de dag zelf wil iedereen uitslagen en live updates, dus de site moet een piek in bezoekers aankunnen. Komen er deelnemers uit het buitenland, dan is een [[meertalige-website|meertalige website]] geen luxe. We koppelen je inschrijfsysteem of tijdregistratie waar dat kan, zodat startlijsten en uitslagen niet met de hand bijgewerkt hoeven te worden. Na afloop werkt de site door als aanloop naar volgend jaar.",
              en: "Above all clarity for participants and spectators: distances or categories, the route, the schedule, how to get there and how to enter. On the day itself everyone wants results and live updates, so the site has to handle a spike in visitors. If participants come from abroad, a [[meertalige-website|multilingual website]] is no luxury. Where possible we connect your registration system or timing provider, so start lists and results do not need updating by hand. Afterwards the site keeps working as the run-up to next year.",
            },
          },
          {
            q: { nl: "Hoe vul je de inschrijvingen voor een loop of toernooi?", en: "How do you fill the entries for a race or tournament?" },
            a: {
              nl: "Met een planning die al maanden voor de start begint. Een early-bird periode geeft mensen een reden om nu te beslissen. Deelnemers van vorig jaar zijn je warmste doelgroep, dus die bereik je eerst met [[e-mailmarketing]]. Daarna volgen social campagnes met beelden van de vorige editie en herinneringen als een prijsstap of deadline nadert. Wie zich inschrijft, houden we warm met trainingstips en praktische info. Zo komen deelnemers voorbereid en enthousiast aan de start, en vertellen ze het door.",
              en: "With a plan that starts months before race day. An early-bird period gives people a reason to decide now. Last year's participants are your warmest audience, so you reach them first with [[e-mailmarketing|email marketing]]. Then come social campaigns with footage from the previous edition and reminders as a price step or deadline approaches. Anyone who signs up stays engaged with training tips and practical info. That way participants arrive at the start prepared and enthusiastic, and they tell others.",
            },
          },
          {
            q: { nl: "Maken jullie aftermovies en content tijdens het evenement?", en: "Do you make aftermovies and content during the event?" },
            a: {
              nl: "Ja. Op de dag zelf leggen we vast wat je evenement bijzonder maakt: de start, de finish, het publiek en de kleine momenten ertussen. Een deel monteren we snel voor social, zodat je nog dezelfde dag kunt posten. Daarna volgt een aftermovie die je gebruikt voor sponsors en de inschrijving van volgend jaar. Met [[dronevideo|drone-opnames]] laat je de omvang van het parcours zien, waar het mag en veilig kan. Zo heb je na één dag beeld voor maanden.",
              en: "Yes. On the day itself we capture what makes your event special: the start, the finish, the crowd and the small moments in between. Part of it we edit quickly for social, so you can post the same day. After that comes an aftermovie you use for sponsors and next year's registration. With [[dronevideo|drone footage]] you show the scale of the course, where it is allowed and safe. That way one day gives you footage for months.",
            },
          },
          {
            q: { nl: "Verzorgen jullie ook de aankleding, zoals banners en signing?", en: "Do you also handle event dressing, such as banners and signage?" },
            a: {
              nl: "We ontwerpen alles wat op en rond het parcours te zien is: banners, spandoeken, startnummers, routebordjes, het podium en sponsorwanden. Alles vanuit één stijl, zodat het evenement op foto's en video direct herkenbaar is. We leveren de bestanden drukklaar aan volgens de specificaties van je drukker of standbouwer. Met doordachte [[beurs-signing|signing]] vinden deelnemers hun weg. En je sponsors komen terug op precies de plekken waar de meeste foto's worden gemaakt.",
              en: "We design everything you see on and around the course: banners, flags, race bibs, route signs, the podium and sponsor walls. All in one style, so the event is instantly recognisable in photos and video. We deliver the files print-ready to the specifications of your printer or stand builder. With well-planned [[beurs-signing|signage]] participants find their way. And your sponsors show up exactly where most photos are taken.",
            },
          },
        ],
      },
      {
        name: { nl: "Sportmedia & platformen", en: "Sports media & platforms" },
        intro: {
          nl: "Voor sportmediabedrijven, video- en streamingplatformen, sportapps, podcasts en magazines, esportsorganisaties en sportmerken met een eigen kanaal, en de product- en redactieteams die ze elke dag beter maken.",
          en: "For sports media companies, video and streaming platforms, sports apps, podcasts and magazines, esports organisations and sports brands with their own channel, and the product and editorial teams that improve them every day.",
        },
        types: [
          { nl: "Sportmediabedrijven", en: "Sports media companies" },
          { nl: "Video- en streamingplatformen", en: "Video and streaming platforms" },
          { nl: "Sportapps", en: "Sports apps" },
          { nl: "Sportpodcasts en -magazines", en: "Sports podcasts and magazines" },
          { nl: "Esportsorganisaties", en: "Esports organisations" },
          { nl: "Sportmerken", en: "Sports brands" },
        ],
        useCases: [
          {
            title: { nl: "UX voor coach, speler en fan", en: "UX for coach, player and fan" },
            text: {
              nl: "Per rol een duidelijke route door je platform, getest met echte gebruikers voordat er gebouwd wordt.",
              en: "A clear route through your platform for each role, tested with real users before anything gets built.",
            },
            service: "web-apps-portals-apps",
            application: "ux-ui-app-design",
          },
          {
            title: { nl: "Gevonden en geciteerd door AI", en: "Found and cited by AI" },
            text: {
              nl: "Artikelen en pagina's die vragen helder beantwoorden, met een structuur die Google en AI-assistenten begrijpen.",
              en: "Articles and pages that answer questions clearly, with a structure Google and AI assistants understand.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
          {
            title: { nl: "Van één aflevering tien posts", en: "Ten posts from one episode" },
            text: {
              nl: "Een vaste aanpak om podcasts, wedstrijden en artikelen om te zetten in clips en posts voor elk kanaal.",
              en: "A fixed approach for turning podcasts, matches and articles into clips and posts for every channel.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
          {
            title: { nl: "Herkenbare intro's en graphics", en: "Recognisable intros and graphics" },
            text: {
              nl: "Motion design voor je kanaal: intro's, lower thirds en scoregraphics die direct laten zien wie er uitzendt.",
              en: "Motion design for your channel: intros, lower thirds and score graphics that show instantly who is broadcasting.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe ontwerp je een sportplatform dat coaches, spelers en fans allemaal snappen?", en: "How do you design a sports platform that coaches, players and fans all understand?" },
            a: {
              nl: "Door per rol te kijken wat iemand komt doen. Een coach wil snel beelden analyseren, een speler wil zijn eigen acties terugzien en een fan wil gewoon kijken. Dat vraagt om duidelijke routes, slimme standaardinstellingen en een interface die ook langs de lijn op een telefoon werkt. Voor TeamTV ontwierpen we de UI/UX van de vernieuwde web-app, waarin streamen, analyseren en publiceren samenkomen. Met [[ux-ui-app-design|UX/UI-design]] testen we de belangrijkste stappen met echte gebruikers voordat er gebouwd wordt.",
              en: "By looking at what each role comes to do. A coach wants to analyse footage quickly, a player wants to see their own actions again and a fan just wants to watch. That calls for clear routes, smart defaults and an interface that also works on a phone on the sidelines. For TeamTV we designed the UI/UX of the renewed web app, where streaming, analysing and publishing come together. With [[ux-ui-app-design|UX/UI design]] we test the key steps with real users before anything gets built.",
            },
          },
          {
            q: { nl: "Hoe verdien je een sportplatform of sportapp terug?", en: "How does a sports platform or app pay for itself?" },
            a: {
              nl: "Er zijn een paar gangbare modellen, en vaak werkt een combinatie. Abonnementen voor clubs of individuele gebruikers, een gratis basisversie met betaalde extra's, of ruimte voor partners en adverteerders. Welke past, hangt af van wie de waarde ervaart en wie wil betalen, en dat zijn niet altijd dezelfde mensen. We bouwen het [[saas-platform|platform]] zo dat je met verschillende pakketten, proefperiodes en betaalmethoden kunt werken, en kunt bijsturen zodra je ziet wat aanslaat.",
              en: "There are a few common models, and a combination often works best. Subscriptions for clubs or individual users, a free basic version with paid extras, or space for partners and advertisers. Which fits depends on who experiences the value and who is willing to pay, and those are not always the same people. We build the [[saas-platform|platform]] so you can work with different plans, trial periods and payment methods, and adjust as soon as you see what catches on.",
            },
          },
          {
            q: { nl: "Hoe vergroot je het bereik van een sportpodcast, magazine of sportsite?", en: "How do you grow the reach of a sports podcast, magazine or sports site?" },
            a: {
              nl: "Door je content op meerdere plekken te laten werken. Van één podcastaflevering maak je korte clips voor social, een artikel voor je site en een item voor de nieuwsbrief. Artikelen die vragen helder beantwoorden, worden beter gevonden in Google en geciteerd door AI-assistenten. Daar helpt [[aeo|AEO]] bij: structuur, duidelijke antwoorden en gegevens die zoekmachines snappen. En een eigen nieuwsbrief maakt je minder afhankelijk van de algoritmes van anderen, die van het ene op het andere seizoen kunnen omslaan.",
              en: "By making your content work in more than one place. One podcast episode becomes short clips for social, an article for your site and an item for the newsletter. Articles that answer questions clearly are found more easily in Google and cited by AI assistants. [[aeo|AEO]] helps with that: structure, clear answers and data that search engines understand. And a newsletter of your own makes you less dependent on other people's algorithms, which can change from one season to the next.",
            },
          },
        ],
      },
      {
        name: { nl: "Bonden & organisaties", en: "Federations & bodies" },
        intro: {
          nl: "Voor sportbonden, sportfederaties, koepelorganisaties, sportbedrijven van gemeenten en stichtingen die sport en bewegen stimuleren.",
          en: "For sports federations, governing bodies, umbrella organisations, municipal sports companies and foundations that promote sport and physical activity.",
        },
        types: [
          { nl: "Sportbonden", en: "Sports federations" },
          { nl: "Sportbedrijven van gemeenten", en: "Municipal sports companies" },
          { nl: "Sportaccommodaties", en: "Sports venues" },
          { nl: "Sport- en beweegstichtingen", en: "Sport and activity foundations" },
        ],
        useCases: [
          {
            title: { nl: "Ingangen per doelgroep", en: "Entry points per audience" },
            text: {
              nl: "Een website waar clubs, trainers, scheidsrechters en sporters elk in twee klikken vinden wat ze zoeken.",
              en: "A website where clubs, coaches, referees and athletes each find what they need in two clicks.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Opleidingen en licenties in één portaal", en: "Courses and licences in one portal" },
            text: {
              nl: "Inschrijven, lesmateriaal en verloopdata van licenties op één plek, met automatische herinneringen.",
              en: "Registration, learning materials and licence expiry dates in one place, with automatic reminders.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Campagnetoolkit voor clubs", en: "Campaign toolkit for clubs" },
            text: {
              nl: "Kant-en-klare posts, posters en banners die clubs aanvullen met hun eigen logo, plus een planning van wat wanneer live gaat.",
              en: "Ready-made posts, posters and banners that clubs complete with their own logo, plus a schedule for what goes live when.",
            },
            service: "content-marketing-online-ads",
            application: "contentstrategie",
          },
          {
            title: { nl: "Cijfers en regels in beeld", en: "Figures and rules made visual" },
            text: {
              nl: "Infographics die ledencijfers, spelregels of beleid in één oogopslag uitleggen, voor je site, jaarverslag en socials.",
              en: "Infographics that explain membership figures, rules or policy at a glance, for your site, annual report and socials.",
            },
            service: "grafisch-ontwerp-print",
            application: "infographics",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe maak je een website voor een sportbond overzichtelijk?", en: "How do you make a sports federation website easy to navigate?" },
            a: {
              nl: "Een bond heeft veel doelgroepen tegelijk: clubs, leden, trainers, scheidsrechters, sporters, media en partners. Die zoeken allemaal iets anders. We beginnen daarom bij de taken die het vaakst voorkomen en bouwen de structuur daaromheen, met een goede zoekfunctie en duidelijke ingangen per doelgroep. Met doordacht [[ux-ui-webdesign|webdesign]] en aandacht voor toegankelijkheid vindt iedereen snel wat hij zoekt. En je bondsbureau krijgt minder mailtjes met de vraag waar dat ene formulier ook alweer staat.",
              en: "A federation has many audiences at once: clubs, members, coaches, referees, athletes, press and partners. They all look for something different. So we start with the most common tasks and build the structure around them, with good search and clear entry points per audience. With well-considered [[ux-ui-webdesign|web design]] and attention to accessibility everyone quickly finds what they need. And your office gets fewer emails asking where that one form was again.",
            },
          },
          {
            q: { nl: "Kan een bond opleidingen en licenties digitaal regelen?", en: "Can a federation manage courses and licences digitally?" },
            a: {
              nl: "Ja. In een portaal schrijven trainers en officials zich in voor cursussen, volgen ze lesmateriaal en zien ze welke licenties of bijscholingen nog nodig zijn. Clubs zien in één overzicht wie wat heeft afgerond. Dat bespaart het bondsbureau veel handwerk en lijstjes. We bouwen zo'n [[klantportaal|portaal]] gekoppeld aan je ledenadministratie, met rollen en rechten, zodat iedereen alleen ziet wat voor hem bedoeld is. Automatische herinneringen zorgen dat een verlopen licentie niet pas op de wedstrijddag opvalt.",
              en: "Yes. In a portal coaches and officials sign up for courses, follow learning materials and see which licences or refresher training they still need. Clubs see in one overview who has completed what. That saves the federation office a lot of manual work and spreadsheets. We build that kind of [[klantportaal|portal]] connected to your membership administration, with roles and permissions, so everyone only sees what is meant for them. Automatic reminders make sure an expired licence is not discovered on match day.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat clubs een landelijke campagne ook echt gebruiken?", en: "How do you make sure clubs actually use a national campaign?" },
            a: {
              nl: "Door het ze makkelijk te maken. Een campagne die alleen op het hoofdkanaal draait, mist de kracht van honderden clubs. Met een campagnetoolkit krijgen clubs kant-en-klare posts, posters en banners die ze aanvullen met hun eigen logo en gegevens. Daar hoort een korte handleiding bij, en een planning wanneer wat online gaat. Wij bedenken de [[contentstrategie]] en maken de templates. Zo spreekt de bond met één stem, terwijl de boodschap binnenkomt bij de club om de hoek.",
              en: "By making it easy for them. A campaign that only runs on the main channel misses the strength of hundreds of clubs. With a campaign toolkit clubs get ready-made posts, posters and banners they complete with their own logo and details. It comes with a short guide and a schedule for what goes live when. We develop the [[contentstrategie|content strategy]] and create the templates. That way the federation speaks with one voice, while the message lands at the club around the corner.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Voetbalverenigingen", en: "Football clubs" },
      { nl: "Hockeyclubs", en: "Hockey clubs" },
      { nl: "Tennis- en padelclubs", en: "Tennis and padel clubs" },
      { nl: "Atletiekverenigingen", en: "Athletics clubs" },
      { nl: "Wieler- en triathlonverenigingen", en: "Cycling and triathlon clubs" },
      { nl: "Zwem- en watersportverenigingen", en: "Swimming and water sports clubs" },
      { nl: "Sportscholen", en: "Gyms" },
      { nl: "Fitnessclubs", en: "Fitness clubs" },
      { nl: "Boutique fitnessstudio's", en: "Boutique fitness studios" },
      { nl: "Personal trainers", en: "Personal trainers" },
      { nl: "Yoga- en pilatesstudio's", en: "Yoga and pilates studios" },
      { nl: "CrossFit-boxen", en: "CrossFit boxes" },
      { nl: "Hardloopevenementen", en: "Running events" },
      { nl: "Wielertoertochten", en: "Cycling sportives" },
      { nl: "Toernooiorganisatoren", en: "Tournament organisers" },
      { nl: "Sportevenementen", en: "Sports events" },
      { nl: "Sportmediabedrijven", en: "Sports media companies" },
      { nl: "Video- en streamingplatformen", en: "Video and streaming platforms" },
      { nl: "Sportapps", en: "Sports apps" },
      { nl: "Sportpodcasts en -magazines", en: "Sports podcasts and magazines" },
      { nl: "Esportsorganisaties", en: "Esports organisations" },
      { nl: "Sportmerken", en: "Sports brands" },
      { nl: "Sportbonden", en: "Sports federations" },
      { nl: "Sportbedrijven van gemeenten", en: "Municipal sports companies" },
      { nl: "Sportaccommodaties", en: "Sports venues" },
      { nl: "Sport- en beweegstichtingen", en: "Sport and activity foundations" },
    ],
  },

  /* ---------- Tech, SaaS & Startups ---------- */
  "tech-saas-startups": {
    segments: [
      {
        name: { nl: "SaaS-bedrijven", en: "SaaS companies" },
        intro: {
          nl: "Voor SaaS-bedrijven, B2B-softwareleveranciers en scale-ups, en de founders, marketeers en productteams die zorgen voor meer demo's, trials en betalende klanten.",
          en: "For SaaS companies, B2B software vendors and scale-ups, and the founders, marketers and product teams working on more demos, trials and paying customers.",
        },
        types: [
          { nl: "SaaS-bedrijven", en: "SaaS companies" },
          { nl: "B2B-softwareleveranciers", en: "B2B software vendors" },
          { nl: "Softwarebedrijven", en: "Software companies" },
          { nl: "Scale-ups", en: "Scale-ups" },
          { nl: "HR-techbedrijven", en: "HR tech companies" },
          { nl: "Edtech-bedrijven", en: "Edtech companies" },
          { nl: "Inspectie- en compliancesoftware", en: "Inspection and compliance software" },
        ],
        useCases: [
          {
            title: { nl: "Website die demo's oplevert", en: "A website that books demos" },
            text: {
              nl: "Pagina's per use case, een eerlijke prijspagina en één duidelijke demoknop, op een site die je marketingteam zelf bijhoudt.",
              en: "Pages per use case, an honest pricing page and one clear demo button, on a site your marketing team runs itself.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Zichtbaar in AI-zoekmachines", en: "Visible in AI search" },
            text: {
              nl: "Vergelijkingspagina's, integratiepagina's en heldere uitleg waar ChatGPT, Perplexity en Gemini hun antwoorden uit halen.",
              en: "Comparison pages, integration pages and clear explanations that ChatGPT, Perplexity and Gemini draw their answers from.",
            },
            service: "seo-aeo-geo",
            application: "geo",
          },
          {
            title: { nl: "Trials die doorstromen naar betaald", en: "Trials that convert to paid" },
            text: {
              nl: "Onboardingmails die reageren op wat iemand in je product doet, met een seintje naar sales als iemand vastloopt.",
              en: "Onboarding emails that respond to what someone does in your product, with a nudge to sales when someone gets stuck.",
            },
            service: "marketing-automatisering-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Product-UI stap voor stap beter", en: "Product UI, better step by step" },
            text: {
              nl: "Een designsysteem en verbeteringen scherm voor scherm, te beginnen waar gebruikers vastlopen.",
              en: "A design system and screen-by-screen improvements, starting where users get stuck.",
            },
            service: "web-apps-portals-apps",
            application: "ux-ui-app-design",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe maak je een SaaS-website die demo-aanvragen oplevert?", en: "How do you build a SaaS website that generates demo requests?" },
            a: {
              nl: "Door in de eerste seconden duidelijk te maken voor wie je product is en welk probleem het oplost, in de taal van je klant in plaats van die van je developers. Daarna pagina's per use case of doelgroep, een eerlijke prijspagina, bewijs zoals klantverhalen en integraties, en één duidelijke volgende stap. Met [[conversie-optimalisatie]] testen we koppen, formulieren en de route naar een demo. Kleine verbeteringen in die route leveren vaak meer op dan extra verkeer.",
              en: "By making clear in the first few seconds who your product is for and which problem it solves, in your customer's language rather than your developers'. Then pages per use case or audience, an honest pricing page, proof such as customer stories and integrations, and one clear next step. With [[conversie-optimalisatie|conversion optimisation]] we test headlines, forms and the route to a demo. Small improvements to that route often deliver more than extra traffic.",
            },
          },
          {
            q: { nl: "Hoe word je als SaaS gevonden in Google én in AI-zoekmachines?", en: "How does a SaaS company get found in Google and in AI search?" },
            a: {
              nl: "Kopers van software stellen hun vragen steeds vaker aan ChatGPT, Perplexity of Gemini voordat ze een shortlist maken. Die tools halen hun antwoorden uit content die helder, specifiek en betrouwbaar is. Denk aan vergelijkingspagina's, pagina's per integratie, documentatie en eerlijke uitleg over wat je product wel en niet doet. Met [[geo|GEO]] en klassieke SEO zorgen we dat die content er is en technisch goed in elkaar zit, met structured data. Zo kom je in beeld op het moment dat iemand zich oriënteert.",
              en: "Software buyers increasingly ask ChatGPT, Perplexity or Gemini their questions before they make a shortlist. Those tools draw their answers from content that is clear, specific and trustworthy. Think comparison pages, pages per integration, documentation and honest explanations of what your product does and does not do. With [[geo|GEO]] and classic SEO we make sure that content exists and is technically sound, with structured data. That way you show up when someone is researching their options.",
            },
          },
          {
            q: { nl: "Hoe zet je meer trials om in betalende klanten?", en: "How do you turn more trials into paying customers?" },
            a: {
              nl: "Door gebruikers in de proefperiode snel naar het moment te helpen waarop ze snappen waarom je product goed is. Een onboardingreeks die reageert op wat iemand wel of nog niet heeft gedaan in je product, werkt veel beter dan dezelfde vijf mails voor iedereen. Zit iemand vast, dan krijgt hij een tip of gaat er een seintje naar sales. Met [[marketing-automation]] koppelen we productgebruik aan je e-mail en CRM. Zo help je meer trials over de streep, zonder dat sales iedereen hoeft na te bellen.",
              en: "By helping users reach the moment they understand why your product is good, quickly, during the trial. An onboarding series that responds to what someone has or has not done in your product works far better than the same five emails for everyone. If someone gets stuck, they get a tip or sales gets a nudge. With [[marketing-automation|marketing automation]] we connect product usage to your email and CRM. That way you help more trials over the line without sales calling every single one.",
            },
          },
          {
            q: { nl: "Kunnen jullie onze product-UI vernieuwen zonder alles om te gooien?", en: "Can you refresh our product UI without turning everything upside down?" },
            a: {
              nl: "Ja, en vaak is dat ook verstandiger. Bestaande gebruikers houden niet van een product dat ze ineens niet meer herkennen. We beginnen met een designsysteem: kleuren, typografie en componenten die overal hetzelfde werken. Daarna pakken we scherm voor scherm aan, te beginnen waar gebruikers vastlopen. Voor Sami ontwierpen we zowel de website als de product-interface, zodat merk en product één geheel vormen. Met [[ux-ui-app-design|UX/UI-design]] wordt het stap voor stap beter, zonder grote schok.",
              en: "Yes, and it is often the wiser choice. Existing users do not like a product they suddenly no longer recognise. We start with a design system: colours, typography and components that work the same everywhere. Then we tackle screen by screen, starting where users get stuck. For Sami we designed both the website and the product interface, so brand and product feel like one whole. With [[ux-ui-app-design|UX/UI design]] it gets better step by step, without a big shock.",
            },
          },
        ],
      },
      {
        name: { nl: "Startups", en: "Startups" },
        intro: {
          nl: "Voor startups en founders in de beginfase, van idee en pre-seed tot de eerste klanten, die met een beperkt budget toch professioneel de markt op willen.",
          en: "For early-stage startups and founders, from idea and pre-seed to first customers, who want to enter the market professionally on a limited budget.",
        },
        types: [
          { nl: "Startups", en: "Startups" },
          { nl: "Startups in de seedfase", en: "Seed-stage startups" },
          { nl: "Universitaire spin-offs", en: "University spin-offs" },
          { nl: "Incubators en accelerators", en: "Incubators and accelerators" },
        ],
        useCases: [
          {
            title: { nl: "Naam en merk vanaf nul", en: "Name and brand from scratch" },
            text: {
              nl: "Een naam die past en nog vrij is, met een logo en basishuisstijl die nu kloppen en later kunnen meegroeien.",
              en: "A name that fits and is still available, with a logo and basic identity that are right now and can grow later.",
            },
            service: "branding-rebranding",
            application: "naamgeving",
          },
          {
            title: { nl: "Landingspagina met wachtlijst", en: "Landing page with a waiting list" },
            text: {
              nl: "Test of er echt vraag is voordat je bouwt, met één pagina, een wachtlijst en een kleine campagne.",
              en: "Test whether there is real demand before you build, with one page, a waiting list and a small campaign.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Pitchdeck voor investeerders", en: "Pitch deck for investors" },
            text: {
              nl: "Een helder verhaal in tien tot vijftien slides, ontworpen in je eigen stijl en per gesprek makkelijk zelf aan te passen.",
              en: "A clear story in ten to fifteen slides, designed in your own style and easy to adapt yourself for each meeting.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Eerste versie van je product", en: "The first version of your product" },
            text: {
              nl: "Een MVP met alleen wat nu nodig is, zodat je snel leert van echte gebruikers in plaats van maanden te bouwen.",
              en: "An MVP with only what is needed now, so you learn quickly from real users instead of building for months.",
            },
            service: "web-apps-portals-apps",
            application: "mvp-ontwikkeling",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe kies je een goede naam voor je startup?", en: "How do you choose a good name for your startup?" },
            a: {
              nl: "Een goede naam is kort, makkelijk uit te spreken, past bij je verhaal en is nog vrij. Dat laatste valt vaak tegen: domeinnaam, social handles en het merkenregister. We beginnen bij je positionering, maken een lange lijst, schrappen streng en toetsen de favorieten op uitstraling en beschikbaarheid. De definitieve merkcheck laat je door een specialist doen. Voor Monvy bedachten we de naam en het merk vanaf nul. Met [[naamgeving]] krijg je een naam die ook past als je product over een paar jaar heel anders is.",
              en: "A good name is short, easy to pronounce, fits your story and is still available. That last part is often disappointing: domain name, social handles and the trademark register. We start with your positioning, make a long list, cut ruthlessly and test the favourites on feel and availability. The final trademark check is best done by a specialist. For Monvy we created the name and the brand from scratch. With [[naamgeving|naming]] you get a name that still fits when your product looks very different in a few years.",
            },
          },
          {
            q: { nl: "Wat heb je minimaal nodig om als startup te lanceren?", en: "What is the minimum you need to launch as a startup?" },
            a: {
              nl: "Minder dan je denkt. Een logo en een basishuisstijl die je consequent gebruikt, een website die in één scroll uitlegt wat je doet en voor wie, een manier om interesse te meten, zoals een wachtlijst of demoknop, en tracking zodat je weet wat werkt. Een dik brandbook of twintig pagina's content kan later. We maken een [[logo-ontwerp|logo]] en een compacte lanceringskit die nu klopt en later kan meegroeien. Liever lanceren met iets goeds dan wachten op iets perfects.",
              en: "Less than you think. A logo and a basic identity you use consistently, a website that explains in one scroll what you do and for whom, a way to measure interest, such as a waiting list or demo button, and tracking so you know what works. A thick brand book or twenty pages of content can wait. We create a [[logo-ontwerp|logo]] and a compact launch kit that is right for now and can grow later. Better to launch with something good than wait for something perfect.",
            },
          },
          {
            q: { nl: "Hoe test je een idee voordat je gaat bouwen?", en: "How do you test an idea before you start building?" },
            a: {
              nl: "Met zo weinig mogelijk code. Met een klikbaar prototype in Figma test je of mensen snappen wat je bedoelt, nog voordat er een regel is geprogrammeerd. Een [[landingspaginas|landingspagina]] met een wachtlijst en een kleine advertentiecampagne laat zien of er echt vraag is. Vijf gesprekken met potentiële klanten leren je vaak meer dan een maand bouwen. Daarna weet je wat er in de eerste versie moet, en vooral wat er nog niet in hoeft.",
              en: "With as little code as possible. A clickable prototype in Figma lets you test whether people understand what you mean, before a single line is written. A [[landingspaginas|landing page]] with a waiting list and a small ad campaign shows whether there is real demand. Five conversations with potential customers often teach you more than a month of building. After that you know what belongs in the first version, and above all what does not need to be in it yet.",
            },
          },
        ],
      },
      {
        name: { nl: "IT & cybersecurity", en: "IT & cyber security" },
        intro: {
          nl: "Voor IT-dienstverleners, managed service providers, cybersecuritybedrijven, hostingpartijen en systeemintegratoren die technische expertise begrijpelijk willen verkopen.",
          en: "For IT service providers, managed service providers, cyber security firms, hosting companies and system integrators who want to sell technical expertise in plain language.",
        },
        types: [
          { nl: "IT-dienstverleners", en: "IT service providers" },
          { nl: "Managed service providers", en: "Managed service providers" },
          { nl: "Cybersecuritybedrijven", en: "Cyber security firms" },
          { nl: "Hosting- en cloudbedrijven", en: "Hosting and cloud companies" },
          { nl: "Systeemintegratoren", en: "System integrators" },
        ],
        useCases: [
          {
            title: { nl: "Security-quickscan als binnenkomer", en: "A security quick scan as door-opener" },
            text: {
              nl: "Een ondernemer ziet in een paar minuten waar zijn risico's zitten, en jij krijgt een lead met de antwoorden erbij.",
              en: "A business owner sees in a few minutes where their risks lie, and you get a lead with their answers attached.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "Techniek in gewone taal", en: "Tech in plain language" },
            text: {
              nl: "Een tone of voice die geruststelt in plaats van dreigt, zodat sales, support en marketing hetzelfde verhaal vertellen.",
              en: "A tone of voice that reassures rather than threatens, so sales, support and marketing tell the same story.",
            },
            service: "branding-rebranding",
            application: "tone-of-voice",
          },
          {
            title: { nl: "LinkedIn-campagnes voor IT-beslissers", en: "LinkedIn campaigns for IT decision-makers" },
            text: {
              nl: "Advertenties gericht op functie, branche en bedrijfsgrootte, met content die echte vragen van IT-managers beantwoordt.",
              en: "Ads targeted by job title, industry and company size, with content that answers real questions from IT managers.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "AI-assistent voor je servicedesk", en: "AI assistant for your service desk" },
            text: {
              nl: "Een chatbot die veelgestelde vragen uit je eigen kennisbank beantwoordt en lastige meldingen doorzet naar je team.",
              en: "A chatbot that answers common questions from your own knowledge base and passes tricky tickets on to your team.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe leg je cybersecurity uit zonder mensen bang te maken of te vervelen?", en: "How do you explain cyber security without scaring or boring people?" },
            a: {
              nl: "Met een toon die geruststelt in plaats van dreigt, en voorbeelden uit het dagelijks leven in plaats van afkortingen. Mensen willen weten wat er kan gebeuren, wat het voor hen betekent en wat ze kunnen doen. Bij Monvy maakten we digitale veiligheid begrijpelijk en toegankelijk voor een breed publiek, van naam tot website. Met een heldere [[tone-of-voice]] weet je hele team hoe je over security praat, of het nu gaat om een salespitch, een blog of een melding in je product.",
              en: "With a tone that reassures rather than threatens, and everyday examples instead of acronyms. People want to know what could happen, what it means for them and what they can do. With Monvy we made digital security understandable and accessible for a broad audience, from the name to the website. With a clear [[tone-of-voice|tone of voice]] your whole team knows how to talk about security, whether it is a sales pitch, a blog or a notification in your product.",
            },
          },
          {
            q: { nl: "Hoe genereert een IT-bedrijf of MSP meer B2B-leads?", en: "How does an IT company or MSP generate more B2B leads?" },
            a: {
              nl: "Door eerst iets nuttigs te geven. Een korte [[check-tools|security-quickscan]] of IT-check waarin een ondernemer in een paar minuten ziet waar zijn risico's zitten, levert warmere leads op dan 'neem contact op'. Daaromheen content die echte vragen van IT-beslissers beantwoordt, en LinkedIn-campagnes gericht op functie, branche en bedrijfsgrootte. Elke lead komt in je CRM met de antwoorden erbij, zodat je accountmanager het gesprek begint met kennis van zaken in plaats van met een standaardpraatje.",
              en: "By giving something useful first. A short [[check-tools|security quick scan]] or IT check that shows a business owner where their risks lie in a few minutes produces warmer leads than 'get in touch'. Around it, content that answers real questions from IT decision-makers, and LinkedIn campaigns targeted by job title, industry and company size. Every lead lands in your CRM with their answers attached, so your account manager starts the conversation informed instead of with a standard pitch.",
            },
          },
          {
            q: { nl: "Hoe ziet een website eruit die vertrouwen wekt bij IT-beslissers?", en: "What does a website look like that earns the trust of IT decision-makers?" },
            a: {
              nl: "Rustig, concreet en zonder buzzwords. IT-managers en directeuren willen snel zien wat je doet, voor wat voor bedrijven, hoe je werkt en wat er gebeurt als het misgaat. Laat certificeringen en partnerschappen zien die je echt hebt, beschrijf je diensten in begrijpelijke pakketten en laat klanten aan het woord. Een snelle, veilige site helpt ook, want een IT-bedrijf met een trage website is als een slotenmaker met een klemmende voordeur. Daar zorgen we voor met goed [[ux-ui-webdesign|webdesign]].",
              en: "Calm, concrete and free of buzzwords. IT managers and directors want to see quickly what you do, for which kinds of companies, how you work and what happens when things go wrong. Show certifications and partnerships you actually hold, describe your services in clear packages and let customers do the talking. A fast, secure site helps too, because an IT company with a slow website is like a locksmith with a sticking front door. We take care of that with solid [[ux-ui-webdesign|web design]].",
            },
          },
        ],
      },
      {
        name: { nl: "Hightech & hardware", en: "High-tech & hardware" },
        intro: {
          nl: "Voor hightech-startups, deeptechbedrijven, IoT- en roboticabedrijven en ontwikkelaars van slimme apparaten, onder meer in de Brainport-regio rond Eindhoven.",
          en: "For high-tech startups, deep tech companies, IoT and robotics firms and developers of smart devices, including those in the Brainport region around Eindhoven.",
        },
        types: [
          { nl: "Hightech-startups", en: "High-tech startups" },
          { nl: "Deeptechbedrijven", en: "Deep tech companies" },
          { nl: "IoT-bedrijven", en: "IoT companies" },
          { nl: "Roboticabedrijven", en: "Robotics companies" },
          { nl: "Data- en AI-bedrijven", en: "Data and AI companies" },
        ],
        useCases: [
          {
            title: { nl: "Exploded views en productrenders", en: "Exploded views and product renders" },
            text: {
              nl: "3D-beelden die laten zien hoe je product werkt en in elkaar zit, ook voordat er een prototype klaarstaat.",
              en: "3D visuals that show how your product works and fits together, even before a prototype is ready.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Dashboard voor je apparaatdata", en: "A dashboard for your device data" },
            text: {
              nl: "Sensordata en meldingen overzichtelijk per rol, gekoppeld aan het dataplatform dat je al gebruikt.",
              en: "Sensor data and alerts laid out clearly per role, connected to the data platform you already use.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
          {
            title: { nl: "Beursstand met één boodschap", en: "A trade show stand with one message" },
            text: {
              nl: "Een stand, schermcontent en folder in één lijn, zodat bezoekers in een paar seconden snappen wat je doet.",
              en: "A stand, screen content and leaflet in one style, so visitors understand what you do within seconds.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
          {
            title: { nl: "Meertalig voor een internationale markt", en: "Multilingual for an international market" },
            text: {
              nl: "Een website in meerdere talen die net zo goed werkt voor een inkoper in Duitsland als voor een investeerder in de VS.",
              en: "A website in several languages that works just as well for a buyer in Germany as for an investor in the US.",
            },
            service: "websites-webshops",
            application: "meertalige-website",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe maak je een technisch hardwareproduct begrijpelijk?", en: "How do you make a technical hardware product easy to understand?" },
            a: {
              nl: "Laat het zien in plaats van het te beschrijven. Een [[3d-visualisatie]] of exploded view toont hoe je product in elkaar zit, ook als er nog geen prototype klaarstaat voor een fotoshoot. Een korte animatie legt in dertig seconden uit wat een datasheet in vier pagina's probeert te zeggen. Die beelden gebruik je op je website, in je pitchdeck, op beurzen en in salesgesprekken. Zo snappen een investeerder, inkoper en eindgebruiker het allemaal, elk op hun eigen niveau.",
              en: "Show it instead of describing it. A [[3d-visualisatie|3D visualisation]] or exploded view shows how your product is put together, even when there is no prototype ready for a photo shoot yet. A short animation explains in thirty seconds what a datasheet tries to say in four pages. You use those visuals on your website, in your pitch deck, at trade shows and in sales meetings. That way an investor, buyer and end user all get it, each at their own level.",
            },
          },
          {
            q: { nl: "Kan een dashboard of app de data van ons apparaat tonen?", en: "Can a dashboard or app show the data from our device?" },
            a: {
              nl: "Ja. Of het nu gaat om sensoren, machines of slimme apparaten: we bouwen [[dashboards]] en apps die de data overzichtelijk maken voor de mensen die ermee werken. Een operator wil andere dingen zien dan een manager of een eindklant. We koppelen via de API of het dataplatform dat je al gebruikt, ontwerpen per rol de juiste weergave en zorgen dat meldingen aankomen als er echt iets aan de hand is. Niet elk getal hoeft op het scherm, alleen de getallen die tot actie leiden.",
              en: "Yes. Whether it is sensors, machines or smart devices, we build [[dashboards]] and apps that make the data clear for the people who work with it. An operator wants to see different things from a manager or an end customer. We connect through the API or data platform you already use, design the right view per role and make sure alerts arrive when something is actually wrong. Not every number needs to be on screen, only the ones that lead to action.",
            },
          },
          {
            q: { nl: "Hoe presenteer je een hightech-product op een beurs?", en: "How do you present a high-tech product at a trade show?" },
            a: {
              nl: "Op een beurs heb je een paar seconden om iemand te laten stoppen. Een stand met één heldere boodschap, groot beeld en een bewegende demo of animatie op een scherm werkt beter dan een wand vol specificaties. Daarnaast wil je een korte presentatie en een folder of QR-code waarmee bezoekers later verder lezen. We ontwerpen de [[beurs-signing|beursstand en signing]], de schermcontent en het materiaal eromheen in één lijn. En we zorgen dat de opvolging na de beurs al klaarstaat.",
              en: "At a trade show you have a few seconds to make someone stop. A stand with one clear message, big visuals and a moving demo or animation on a screen works better than a wall full of specifications. You also want a short presentation and a leaflet or QR code so visitors can read on later. We design the [[beurs-signing|stand and signage]], the screen content and the material around it in one style. And we make sure the follow-up after the show is ready to go.",
            },
          },
        ],
      },
      {
        name: { nl: "Apps & platformen", en: "Apps & platforms" },
        intro: {
          nl: "Voor ondernemers en bedrijven die een app, online platform of marktplaats bouwen, van eerste versie tot doorontwikkeling, voor iOS, Android en het web.",
          en: "For entrepreneurs and companies building an app, online platform or marketplace, from first version to ongoing development, for iOS, Android and the web.",
        },
        types: [
          { nl: "App-ontwikkelaars", en: "App developers" },
          { nl: "Online marktplaatsen", en: "Online marketplaces" },
          { nl: "Platformbedrijven", en: "Platform companies" },
          { nl: "Community- en matchingplatformen", en: "Community and matching platforms" },
        ],
        useCases: [
          {
            title: { nl: "Native of web-app, eerlijk gekozen", en: "Native or web app, chosen honestly" },
            text: {
              nl: "We kiezen samen tussen web-app, PWA of native app voor iOS en Android, op basis van hoe je gebruikers het product echt gebruiken.",
              en: "Together we choose between a web app, PWA or native iOS and Android app, based on how your users will really use the product.",
            },
            service: "web-apps-portals-apps",
            application: "mobiele-app",
          },
          {
            title: { nl: "Marktplaats vindbaar per categorie", en: "A marketplace found per category" },
            text: {
              nl: "Pagina's per categorie en plaats die gevonden worden door mensen die al zoeken, ook als het advertentiebudget op is.",
              en: "Pages per category and location that get found by people already searching, even when the ad budget runs out.",
            },
            service: "seo-aeo-geo",
            application: "seo",
          },
          {
            title: { nl: "Nieuwe gebruikers echt activeren", en: "Really activating new users" },
            text: {
              nl: "Een reeks mails en pushberichten die nieuwe gebruikers naar hun eerste succes helpen, in plaats van één welkomstmail en daarna stilte.",
              en: "A series of emails and push messages that helps new users to their first success, instead of one welcome email followed by silence.",
            },
            service: "marketing-automatisering-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Promovideo voor de App Store", en: "Promo video for the App Store" },
            text: {
              nl: "Een korte animatie van je app in actie, voor de stores, je website en social.",
              en: "A short animation of your app in action, for the stores, your website and social.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat bepaalt de kosten van een app of platform?", en: "What determines the cost of an app or platform?" },
            a: {
              nl: "Vooral de hoeveelheid logica eronder, niet het aantal schermen. Hoeveel soorten gebruikers zijn er, met welke rechten? Moeten er betalingen in, koppelingen met andere systemen, meldingen of offline gebruik? Wordt het een web-app of een native [[mobiele-app]] voor iOS en Android? En vergeet wat er na de lancering komt niet: updates, hosting en doorontwikkeling. We maken eerst een scherpe scope met een duidelijke eerste versie, zodat je weet waar je aan begint voordat er gebouwd wordt.",
              en: "Mainly the amount of logic underneath, not the number of screens. How many types of users are there, with which permissions? Do you need payments, integrations with other systems, notifications or offline use? Will it be a web app or a native [[mobiele-app|mobile app]] for iOS and Android? And do not forget what comes after launch: updates, hosting and further development. We first define a sharp scope with a clear first version, so you know what you are getting into before anything gets built.",
            },
          },
          {
            q: { nl: "Web-app, native app of PWA: wat past bij ons idee?", en: "Web app, native app or PWA: which suits our idea?" },
            a: {
              nl: "Dat hangt af van hoe je gebruikers het product gebruiken. Gebeurt dat vooral achter een laptop, dan is een web-app vaak sneller en voordeliger te bouwen en te onderhouden. Heb je pushberichten, de camera, locatie of offline gebruik nodig, of wil je in de App Store staan, dan wordt native interessanter. Een PWA zit daartussen. Vaak kan één technische basis web en mobiel samen bedienen. Met [[api-koppelingen|een goede API]] eronder kun je later altijd nog een app toevoegen.",
              en: "That depends on how your users will use the product. If it is mainly used behind a laptop, a web app is often quicker and more affordable to build and maintain. If you need push notifications, the camera, location or offline use, or you want to be in the App Store, native becomes more interesting. A PWA sits in between. Often one technical foundation can serve web and mobile together. With [[api-koppelingen|a solid API]] underneath you can always add an app later.",
            },
          },
          {
            q: { nl: "Hoe krijg je een online marktplaats aan de praat?", en: "How do you get an online marketplace off the ground?" },
            a: {
              nl: "Het klassieke kip-en-eiprobleem: zonder aanbieders geen kopers, en andersom. Begin daarom smal, in één niche of regio, en zorg eerst dat één kant goed gevuld is, desnoods met de hand. Pagina's per categorie of plaats helpen om gevonden te worden door mensen die al zoeken. Met [[seo]] bouw je zo een stroom bezoekers op die niet stopt als het advertentiebudget op is. En meet vanaf dag één waar transacties stranden, want daar ligt je grootste winst.",
              en: "The classic chicken-and-egg problem: no buyers without sellers, and vice versa. So start narrow, in one niche or region, and first make sure one side is well stocked, by hand if necessary. Pages per category or location help you get found by people who are already searching. With [[seo|SEO]] you build a flow of visitors that does not stop when the ad budget runs out. And measure from day one where transactions stall, because that is where your biggest gains are.",
            },
          },
          {
            q: { nl: "Kunnen jullie een bestaande app of platform overnemen en doorontwikkelen?", en: "Can you take over and further develop an existing app or platform?" },
            a: {
              nl: "Vaak wel. We beginnen met een technische check: hoe zit de code in elkaar, hoe is het gehost, wat is er gedocumenteerd en waar zitten de risico's? Daarna krijg je een eerlijk advies: doorbouwen op wat er staat, delen vernieuwen of opnieuw beginnen. Dat laatste adviseren we alleen als het echt nodig is. Bij [[saas-platform|platformontwikkeling]] staat de code in een repository op jouw naam en documenteren we hoe het werkt. Zo ben je niet afhankelijk van één persoon die alles weet.",
              en: "Often, yes. We start with a technical check: how is the code put together, how is it hosted, what is documented and where are the risks? Then you get honest advice: build on what is there, renew parts or start over. We only recommend the last option when it is truly necessary. With our [[saas-platform|platform development]] the code lives in a repository in your name and we document how it works. That way you are not dependent on one person who knows everything.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "SaaS-bedrijven", en: "SaaS companies" },
      { nl: "B2B-softwareleveranciers", en: "B2B software vendors" },
      { nl: "Softwarebedrijven", en: "Software companies" },
      { nl: "Scale-ups", en: "Scale-ups" },
      { nl: "HR-techbedrijven", en: "HR tech companies" },
      { nl: "Edtech-bedrijven", en: "Edtech companies" },
      { nl: "Inspectie- en compliancesoftware", en: "Inspection and compliance software" },
      { nl: "Startups", en: "Startups" },
      { nl: "Startups in de seedfase", en: "Seed-stage startups" },
      { nl: "Universitaire spin-offs", en: "University spin-offs" },
      { nl: "Incubators en accelerators", en: "Incubators and accelerators" },
      { nl: "IT-dienstverleners", en: "IT service providers" },
      { nl: "Managed service providers", en: "Managed service providers" },
      { nl: "Cybersecuritybedrijven", en: "Cyber security firms" },
      { nl: "Hosting- en cloudbedrijven", en: "Hosting and cloud companies" },
      { nl: "Systeemintegratoren", en: "System integrators" },
      { nl: "Hightech-startups", en: "High-tech startups" },
      { nl: "Deeptechbedrijven", en: "Deep tech companies" },
      { nl: "IoT-bedrijven", en: "IoT companies" },
      { nl: "Roboticabedrijven", en: "Robotics companies" },
      { nl: "Data- en AI-bedrijven", en: "Data and AI companies" },
      { nl: "App-ontwikkelaars", en: "App developers" },
      { nl: "Online marktplaatsen", en: "Online marketplaces" },
      { nl: "Platformbedrijven", en: "Platform companies" },
      { nl: "Community- en matchingplatformen", en: "Community and matching platforms" },
    ],
  },

  /* ---------- Food & Retail ---------- */
  "food-retail": {
    segments: [
      {
        name: { nl: "Foodproducenten & merken", en: "Food producers & brands" },
        intro: {
          nl: "Voor foodproducenten, foodstartups, streekproducenten, koffiebranders, brouwerijen, distilleerderijen en foodgroothandels die hun product willen laten opvallen in het schap, bij de horeca en online.",
          en: "For food producers, food startups, regional producers, coffee roasters, breweries, distilleries and food wholesalers who want their product to stand out on the shelf, in hospitality and online.",
        },
        types: [
          { nl: "Foodproducenten", en: "Food producers" },
          { nl: "Foodstartups", en: "Food startups" },
          { nl: "Streekproducenten", en: "Regional food producers" },
          { nl: "Koffiebranders", en: "Coffee roasters" },
          { nl: "Brouwerijen en distilleerderijen", en: "Breweries and distilleries" },
          { nl: "Foodgroothandels", en: "Food wholesalers" },
        ],
        useCases: [
          {
            title: { nl: "Verpakking die opvalt in het schap", en: "Packaging that stands out on the shelf" },
            text: {
              nl: "Een verpakking en etiket die in één oogopslag vertellen wat je product is, met netjes ingepaste ruimte voor de verplichte informatie.",
              en: "Packaging and a label that tell at a glance what your product is, with room neatly built in for the mandatory information.",
            },
            service: "grafisch-ontwerp-print",
            application: "verpakkingsontwerp",
          },
          {
            title: { nl: "Productfoto's voor retail en online", en: "Product photos for retail and online" },
            text: {
              nl: "Packshots op wit en sfeerbeelden aan tafel, voor je webshop, je verkoopmap en de productdata die retailers van je vragen.",
              en: "Packshots on white and lifestyle shots at the table, for your web shop, your sales kit and the product data retailers ask for.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Een merkverhaal dat blijft hangen", en: "A brand story that sticks" },
            text: {
              nl: "Waar komt je product vandaan, wat maakt het anders en voor wie is het? Dat verhaal maken we scherp, zodat het overal hetzelfde klinkt.",
              en: "Where does your product come from, what makes it different and who is it for? We sharpen that story so it sounds the same everywhere.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Online bestellen voor horeca en winkels", en: "Online ordering for hospitality and shops" },
            text: {
              nl: "Vaste afnemers bestellen in een B2B-webshop met hun eigen prijzen en levermomenten, gekoppeld aan je voorraad of ERP.",
              en: "Regular customers order in a B2B web shop with their own prices and delivery days, connected to your stock or ERP.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe ontwerp je een verpakking die opvalt in het schap?", en: "How do you design packaging that stands out on the shelf?" },
            a: {
              nl: "Begin bij de seconde waarin iemand langs het schap loopt. Wat moet hij dan zien? Meestal één ding: wat het is en waarom het anders is. Een duidelijke merknaam, een sterke kleur of vorm en een rustige achterkant doen meer dan tien claims op de voorkant. In het [[verpakkingsontwerp|verpakkingsontwerp]] maken we netjes ruimte voor de verplichte informatie, zoals ingrediënten, allergenen en houdbaarheid. De juiste inhoud daarvan lever jij aan of laat je controleren. Wij zorgen dat het leesbaar is en past.",
              en: "Start with the second in which someone walks past the shelf. What should they see? Usually one thing: what it is and why it is different. A clear brand name, a strong colour or shape and a calm back do more than ten claims on the front. In the [[verpakkingsontwerp|packaging design]] we neatly make room for the mandatory information, such as ingredients, allergens and shelf life. You supply the correct content or have it checked. We make sure it is legible and fits.",
            },
          },
          {
            q: { nl: "Hoe krijg je je foodproduct binnen bij winkels en horeca?", en: "How do you get your food product into shops and restaurants?" },
            a: {
              nl: "Inkopers krijgen veel nieuwe producten aangeboden en hebben weinig tijd. Help ze met een korte verkooppresentatie of productsheet: wat het is, voor wie, wat de marge en houdbaarheid zijn, en hoe het in hun assortiment past. Goede [[productfotografie|productfotografie]] en een proefpakket dat er verzorgd uitziet doen de rest. We maken die [[presentaties-pitchdecks|presentatie]] in je eigen stijl, zodat je hem per gesprek zelf kunt aanpassen. Een plek in het schap kunnen we niet beloven, een sterk verhaal aan tafel wel.",
              en: "Buyers are offered lots of new products and have little time. Help them with a short sales presentation or product sheet: what it is, who it is for, what the margin and shelf life are, and how it fits their range. Good [[productfotografie|product photography]] and a sample pack that looks well cared for do the rest. We make that [[presentaties-pitchdecks|presentation]] in your own style, so you can adapt it yourself for each meeting. We cannot promise you a spot on the shelf, but we can promise a strong story at the table.",
            },
          },
          {
            q: { nl: "Kunnen horeca en winkels online bij ons bestellen?", en: "Can restaurants and shops order from us online?" },
            a: {
              nl: "Ja, en voor veel producenten en groothandels scheelt dat een hoop mail en telefoon. In een B2B-[[webshop|webshop]] logt een vaste klant in en ziet hij zijn eigen prijzen, staffels en levermomenten. Wat hij vorige week nam, bestelt hij in een paar klikken opnieuw. Met [[api-koppelingen|koppelingen]] naar je ERP, zoals Exact, AFAS of Odoo, komen orders en voorraad automatisch op de juiste plek. Het hoeft er niet saai uit te zien, maar het moet vooral snel werken.",
              en: "Yes, and for many producers and wholesalers it saves a lot of email and phone calls. In a B2B [[webshop|web shop]] a regular customer logs in and sees their own prices, volume discounts and delivery days. Last week's order is repeated in a few clicks. With [[api-koppelingen|integrations]] to your ERP, such as Exact, AFAS or Odoo, orders and stock end up in the right place automatically. It does not have to look dull, but above all it has to be fast.",
            },
          },
          {
            q: { nl: "Hoe vertel je het verhaal van je brouwerij of koffiebranderij?", en: "How do you tell the story of your brewery or coffee roastery?" },
            a: {
              nl: "Laat zien wat er achter de deur gebeurt. Het branden, brouwen of rijpen is vaak het mooiste wat je hebt, en precies dat ziet een klant nooit. Een korte [[bedrijfsfilm|bedrijfsfilm]] en eerlijke foto's van je mensen en je proces maken je merk tastbaar, op je website, bij een proeverij en op social. Een [[huisstijl|huisstijl]] die past bij je karakter houdt alles bij elkaar, van etiket tot bierviltje. Voor alcohol gelden extra reclameregels, zoals de Reclamecode voor Alcoholhoudende Dranken. Daar houden we samen rekening mee.",
              en: "Show what happens behind the door. Roasting, brewing or ageing is often the most beautiful thing you have, and it is exactly what customers never see. A short [[bedrijfsfilm|company film]] and honest photos of your people and process make your brand tangible, on your website, at a tasting and on social. A [[huisstijl|visual identity]] that suits your character holds everything together, from label to beer mat. Alcohol comes with extra advertising rules, such as the Dutch advertising code for alcoholic beverages. We take those into account together.",
            },
          },
        ],
      },
      {
        name: { nl: "Bakkers, slagers & foodwinkels", en: "Bakers, butchers & food shops" },
        intro: {
          nl: "Voor bakkerijen, slagerijen, delicatessenzaken, kaasspeciaalzaken, supermarkten en andere foodwinkels die de buurt naar binnen willen halen, van ambachtelijke bakker tot zelfstandige supermarktondernemer.",
          en: "For bakeries, butchers, delis, cheese shops, supermarkets and other food shops that want to bring the neighbourhood through the door, from artisan baker to independent supermarket owner.",
        },
        types: [
          { nl: "Bakkerijen", en: "Bakeries" },
          { nl: "Slagerijen", en: "Butcher shops" },
          { nl: "Delicatessenzaken", en: "Delicatessens" },
          { nl: "Kaasspeciaalzaken", en: "Cheese shops" },
          { nl: "Supermarkten", en: "Supermarkets" },
        ],
        useCases: [
          {
            title: { nl: "Vooraf bestellen en afhalen", en: "Order ahead and collect" },
            text: {
              nl: "Klanten bestellen taarten, vleesschotels of kerstpakketten online en kiezen zelf een afhaalmoment. Jij ziet per dag precies wat er klaargezet moet worden.",
              en: "Customers order cakes, meat platters or Christmas hampers online and choose their own pick-up time. You see exactly what needs to be ready each day.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Gevonden op 'bakker in de buurt'", en: "Found for 'bakery near me'" },
            text: {
              nl: "Een compleet Google Bedrijfsprofiel met kloppende openingstijden, verse foto's en reviews met een antwoord.",
              en: "A complete Google Business Profile with correct opening hours, fresh photos and reviews with replies.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Huisstijl van gevel tot broodzak", en: "Identity from shopfront to bread bag" },
            text: {
              nl: "Eén herkenbare stijl op je gevel, papieren zakken, prijskaartjes, bestelbus en website.",
              en: "One recognisable style on your shopfront, paper bags, price tags, delivery van and website.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "De weekactie op social", en: "The weekly offer on social" },
            text: {
              nl: "Korte posts en video's van wat er vandaag uit de oven of de vitrine komt, met de actie van de week erbij.",
              en: "Short posts and videos of what is coming out of the oven or the display case today, with the weekly offer alongside.",
            },
            service: "content-marketing-online-ads",
            application: "social-media-marketing",
          },
        ],
        faqs: [
          {
            q: { nl: "Kunnen klanten bij mijn bakkerij of slagerij online bestellen en afhalen?", en: "Can customers order online and collect from my bakery or butcher shop?" },
            a: {
              nl: "Ja. Klanten kiezen hun producten, een afhaaldag en een tijdvak, en betalen vooraf via iDEAL. Jij bepaalt de spelregels: tot hoe laat je bestellingen voor morgen aanneemt, hoeveel bestellingen er per tijdvak passen en welke producten alleen op bepaalde dagen kunnen. Elke ochtend heb je een overzicht van wat er klaargezet moet worden. Rond de feestdagen scheelt zo'n [[webshop|webshop]] een hoop rijen en volle voicemails. Met een paar automatische mails weet de klant precies wanneer hij kan komen.",
              en: "Yes. Customers choose their products, a pick-up day and a time slot, and pay in advance by iDEAL. You set the rules: how late you accept orders for tomorrow, how many orders fit in each slot and which products are only available on certain days. Every morning you have an overview of what needs to be ready. Around the holidays such a [[webshop|web shop]] saves a lot of queues and full voicemails. With a few automatic emails the customer knows exactly when to come by.",
            },
          },
          {
            q: { nl: "Hoe word je als bakker of slager beter lokaal gevonden?", en: "How does a baker or butcher get found more easily locally?" },
            a: {
              nl: "Vooral via Google Maps en je Google Bedrijfsprofiel. Zorg dat openingstijden kloppen, ook op feestdagen, zet er regelmatig verse foto's op en reageer op reviews, ook op die ene kritische. Op je website helpt een pagina per specialiteit, zoals 'taart bestellen', 'barbecuepakket' of 'kaasplank', met je plaatsnaam erbij. Met [[lokale-seo|lokale SEO]] sluit je aan op hoe mensen echt zoeken: 'bakker in de buurt' of 'slager in Uden'. Dan ben je zichtbaar precies op het moment dat iemand trek krijgt.",
              en: "Mainly through Google Maps and your Google Business Profile. Make sure your opening hours are right, including holidays, add fresh photos regularly and reply to reviews, including that one critical one. On your website, a page per speciality helps, such as 'order a cake', 'barbecue package' or 'cheese board', with your town name added. With [[lokale-seo|local SEO]] you match how people really search: 'bakery near me' or 'butcher in Uden'. Then you are visible exactly when someone gets hungry.",
            },
          },
          {
            q: { nl: "Wat levert een nieuwe huisstijl een bakkerij of foodwinkel op?", en: "What does a new visual identity do for a bakery or food shop?" },
            a: {
              nl: "Vooral herkenning en rust. Een goede [[huisstijl|huisstijl]] zorgt dat je gevel, je broodzakken, je prijskaartjes, je bestelbus en je Instagram als één zaak voelen. Dat maakt je herkenbaar in de straat en vertrouwd online. Het helpt ook bij je prijs: een verzorgde zaak oogt eerder ambachtelijk dan goedkoop. We houden het praktisch, met bestanden die je drukker en je [[verpakkingsontwerp|verpakkingsleverancier]] direct kunnen gebruiken. En we nemen je vakmanschap als uitgangspunt, niet de nieuwste trend.",
              en: "Above all recognition and calm. A good [[huisstijl|visual identity]] makes your shopfront, bread bags, price tags, delivery van and Instagram feel like one business. That makes you recognisable in the street and familiar online. It helps your pricing too: a well-kept shop comes across as artisan rather than cheap. We keep it practical, with files your printer and [[verpakkingsontwerp|packaging supplier]] can use straight away. And we take your craftsmanship as the starting point, not the latest trend.",
            },
          },
          {
            q: { nl: "Hoe pakt een zelfstandige supermarkt online marketing aan?", en: "How does an independent supermarket approach online marketing?" },
            a: {
              nl: "Lokaal en met een vast ritme. Werk je onder een formule, dan regelt die vaak de landelijke campagnes, maar de buurt bereik jij het best zelf. Denk aan een wekelijkse nieuwsbrief met je eigen aanbiedingen, posts over lokale producten en de mensen achter de toonbank, en een Google Bedrijfsprofiel dat altijd klopt. Met [[e-mailmarketing|e-mailmarketing]] en [[social-media-marketing|social media]] in een vaste weekplanning wordt het geen extra klus maar een gewoonte. Natuurlijk binnen de huisregels van je formule. Ben je helemaal zelfstandig, dan heb je nog meer ruimte voor een eigen gezicht.",
              en: "Locally and with a steady rhythm. If you operate under a franchise formula, it often handles the national campaigns, but you are best placed to reach the neighbourhood yourself. Think of a weekly newsletter with your own offers, posts about local products and the people behind the counter, and a Google Business Profile that is always correct. With [[e-mailmarketing|email marketing]] and [[social-media-marketing|social media]] in a fixed weekly schedule, it becomes a habit instead of an extra chore. Within your formula's house rules, of course. Fully independent? Then you have even more room for a face of your own.",
            },
          },
        ],
      },
      {
        name: { nl: "Foodtrucks & catering", en: "Food trucks & catering" },
        intro: {
          nl: "Voor foodtrucks, cateraars, bedrijfscateraars en maaltijdservices die hun agenda willen vullen met bruiloften, festivals, bedrijfsfeesten en vaste zakelijke klanten.",
          en: "For food trucks, caterers, corporate caterers and meal services that want to fill their calendar with weddings, festivals, company parties and regular business clients.",
        },
        types: [
          { nl: "Foodtrucks", en: "Food trucks" },
          { nl: "Cateraars", en: "Caterers" },
          { nl: "Bedrijfscateraars", en: "Corporate caterers" },
          { nl: "Maaltijdservices", en: "Meal services" },
        ],
        useCases: [
          {
            title: { nl: "Cateringofferte in een paar klikken", en: "A catering quote in a few clicks" },
            text: {
              nl: "Bezoekers kiezen aantal gasten, menu en datum en zien direct een prijsindicatie. Jij krijgt een complete aanvraag in je mailbox.",
              en: "Visitors choose the number of guests, menu and date and immediately see a price estimate. You get a complete enquiry in your inbox.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Een truck die je herkent", en: "A truck people recognise" },
            text: {
              nl: "Belettering, menubord en kleding in één stijl, zodat je op elk festivalterrein en elk bedrijfsterrein direct opvalt.",
              en: "Vehicle graphics, menu board and clothing in one style, so you stand out right away at every festival and business park.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
          {
            title: { nl: "Social video van de grill", en: "Social video from the grill" },
            text: {
              nl: "Korte verticale video's van sissende pannen en volle borden, die laten zien hoe je op een event te werk gaat.",
              en: "Short vertical videos of sizzling pans and full plates that show how you work at an event.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Vaste zakelijke klanten vasthouden", en: "Keeping regular business clients" },
            text: {
              nl: "Een maandelijkse mail met het nieuwe menu en op tijd een herinnering voor de bedrijfslunch of kerstborrel.",
              en: "A monthly email with the new menu and a timely reminder for the company lunch or Christmas drinks.",
            },
            service: "marketing-automatisering-funnels",
            application: "e-mailmarketing",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe krijg je als foodtruck meer boekingen voor feesten en events?", en: "How does a food truck get more bookings for parties and events?" },
            a: {
              nl: "Maak het boeken net zo makkelijk als het bestellen aan je luikje. Een website met je concept, foto's van eerdere events, de regio waar je rijdt en een [[offerte-calculator|prijsindicatie]] per aantal gasten beantwoordt de eerste vragen al. Laat ook zien welke data al vol zitten, dat scheelt mailtjes over een zaterdag die allang weg is. Daarnaast werkt [[social-video|social video]] goed: een paar seconden sissende grill zegt meer dan een menukaart. En vraag na elk feest om een review.",
              en: "Make booking as easy as ordering at your hatch. A website with your concept, photos from previous events, the area you cover and a [[offerte-calculator|price estimate]] per number of guests already answers the first questions. Show which dates are already taken too; that saves emails about a Saturday that went long ago. On top of that, [[social-video|social video]] works well: a few seconds of a sizzling grill says more than a menu. And ask for a review after every party.",
            },
          },
          {
            q: { nl: "Wat moet er op een website voor een cateraar staan?", en: "What should a caterer's website include?" },
            a: {
              nl: "Alles wat een organisator nodig heeft om een offerte aan te vragen. Je arrangementen met wat erin zit, voor hoeveel personen, een prijsindicatie en de mogelijkheden bij dieetwensen en allergieën. Foto's van echte buffetten en events, liefst op locaties die mensen herkennen. En een aanvraagformulier dat vraagt naar datum, aantal gasten, locatie en budget, zodat je in één keer een goede offerte maakt. Een [[webflow-website|website]] die je zelf bijhoudt, maakt het makkelijk om een nieuw seizoensmenu snel online te zetten.",
              en: "Everything an organiser needs to request a quote. Your packages with what is included, for how many people, a price estimate and the options for dietary requirements and allergies. Photos of real buffets and events, ideally at venues people recognise. And an enquiry form that asks for date, number of guests, venue and budget, so you can write a good quote in one go. A [[webflow-website|website]] you update yourself makes it easy to put a new seasonal menu online quickly.",
            },
          },
          {
            q: { nl: "Hoe valt mijn foodtruck op tussen de rest op een festival?", en: "How does my food truck stand out from the rest at a festival?" },
            a: {
              nl: "Op een festival staan soms tien trucks naast elkaar en beslist een bezoeker op twintig meter afstand. Dan moet in één oogopslag duidelijk zijn wat je verkoopt. Een korte naam, een sterke kleur en een menubord met vijf gerechten in plaats van vijftien werken beter dan een truck vol tekst. We ontwerpen de [[beurs-signing|belettering]], het menubord, de kleding en de social templates vanuit één [[huisstijl|huisstijl]]. Zo herkennen mensen je ook op Instagram, en volgend jaar op hetzelfde veld.",
              en: "At a festival, ten trucks may stand side by side and a visitor decides from twenty metres away. At that point it has to be clear at a glance what you sell. A short name, a strong colour and a menu board with five dishes instead of fifteen work better than a truck covered in text. We design the [[beurs-signing|vehicle graphics]], menu board, clothing and social templates from one [[huisstijl|visual identity]]. That way people recognise you on Instagram too, and next year on the same field.",
            },
          },
          {
            q: { nl: "Hoe win je vaste zakelijke cateringklanten?", en: "How do you win regular corporate catering clients?" },
            a: {
              nl: "Zakelijke klanten kiezen op betrouwbaarheid: komt het op tijd, klopt de factuur en kan het ook voor zestig mensen met drie dieetwensen? Laat dat zien met een aparte pagina voor bedrijven, met lunch- en borrelarrangementen, levertijden en een vaste contactpersoon. Bereik officemanagers met [[linkedin-ads|LinkedIn Ads]] in je regio, en houd bestaande klanten warm met een korte [[e-mailmarketing|nieuwsbrief]] rond de momenten die ertoe doen, zoals de kerstborrel of de zomerbarbecue. Een eerste proeflunch kan het ijs breken.",
              en: "Business clients choose on reliability: does it arrive on time, is the invoice right and can it be done for sixty people with three dietary requirements? Show that with a separate page for businesses, with lunch and drinks packages, delivery times and a fixed contact person. Reach office managers with [[linkedin-ads|LinkedIn Ads]] in your region, and keep existing clients engaged with a short [[e-mailmarketing|newsletter]] around the moments that matter, such as the Christmas drinks or the summer barbecue. A first trial lunch can break the ice.",
            },
          },
        ],
      },
      {
        name: { nl: "Winkels & concept stores", en: "Shops & concept stores" },
        intro: {
          nl: "Voor zelfstandige winkeliers, winkelketens, franchiseformules, concept stores en servicewinkels zoals reparatiezaken, die hun winkel en hun online kanaal willen laten samenwerken.",
          en: "For independent shopkeepers, retail chains, franchise formats, concept stores and service shops such as repair shops, who want their physical store and online channel to work together.",
        },
        types: [
          { nl: "Winkelketens", en: "Retail chains" },
          { nl: "Franchiseformules", en: "Franchise formats" },
          { nl: "Concept stores", en: "Concept stores" },
          { nl: "Cadeau- en lifestylewinkels", en: "Gift and lifestyle shops" },
          { nl: "Reparatiewinkels", en: "Repair shops" },
        ],
        useCases: [
          {
            title: { nl: "Online zien, in de winkel ophalen", en: "See it online, collect it in store" },
            text: {
              nl: "Een webshop die laat zien wat er in welke winkel op voorraad is, met click & collect en retourneren in de zaak.",
              en: "A web shop that shows what is in stock at which store, with click & collect and in-store returns.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Elke vestiging lokaal vindbaar", en: "Every location found locally" },
            text: {
              nl: "Een eigen pagina en een verzorgd Google Bedrijfsprofiel per winkel, in één keer goed opgezet voor alle vestigingen.",
              en: "A dedicated page and a well-kept Google Business Profile for every store, set up properly for all locations at once.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Merkrichtlijnen voor alle filialen", en: "Brand guidelines for every branch" },
            text: {
              nl: "Een praktisch brandbook met templates, zodat een filiaalmanager zelf een actieposter maakt die klopt met het merk.",
              en: "A practical brand book with templates, so a store manager can create a promo poster that matches the brand.",
            },
            service: "branding-rebranding",
            application: "brandbook",
          },
          {
            title: { nl: "Reparatie kiezen en inplannen", en: "Choosing and booking a repair" },
            text: {
              nl: "Merk, model en probleem kiezen, de prijs zien en direct een afspraak plannen, zoals we voor Repairlab bouwden.",
              en: "Choose brand, model and problem, see the price and book an appointment straight away, as we built for Repairlab.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe combineer je een fysieke winkel met online verkoop?", en: "How do you combine a physical store with online sales?" },
            a: {
              nl: "Door ze als één winkel te behandelen. Laat online zien wat er in welke winkel op voorraad is, bied click & collect of reserveren aan, en maak retourneren in de winkel mogelijk. Klanten oriënteren vaak online en kopen in de zaak, of andersom. Een [[webshop]] die gekoppeld is aan je kassasysteem houdt voorraad en prijzen gelijk, zodat je geen twee administraties bijhoudt. En je personeel in de winkel ziet ook wat er online besteld is, zodat iedereen hetzelfde verhaal vertelt.",
              en: "By treating them as one shop. Show online what is in stock at which store, offer click & collect or reservations, and make in-store returns possible. Customers often research online and buy in the store, or the other way round. A [[webshop|web shop]] connected to your point-of-sale system keeps stock and prices in sync, so you do not run two sets of books. And your store staff can see online orders too, so everyone tells the same story.",
            },
          },
          {
            q: { nl: "Hoe krijg je meer mensen in de winkel via Google?", en: "How do you get more people into your store through Google?" },
            a: {
              nl: "Met een compleet Google Bedrijfsprofiel per vestiging: openingstijden die kloppen, ook op feestdagen, actuele foto's, reviews met een antwoord en je assortiment erin. Daarnaast een eigen pagina per winkel op je website met adres, route, parkeren en wat je daar specifiek kunt doen. Met [[lokale-seo|lokale SEO]] verschijn je bij zoekopdrachten als 'fietsenwinkel in de buurt' of een productnaam met je stad erbij. Voor ketens zetten we dat in één keer netjes op voor alle vestigingen.",
              en: "With a complete Google Business Profile for each location: opening hours that are correct, including holidays, up-to-date photos, reviews with replies and your products listed. Plus a dedicated page per store on your website with address, directions, parking and what you can specifically do there. With [[lokale-seo|local SEO]] you appear for searches like 'bike shop near me' or a product name plus your town. For chains we set that up neatly for all locations at once.",
            },
          },
          {
            q: { nl: "Hoe vertaal je de sfeer van een concept store naar online?", en: "How do you translate the feel of a concept store to online?" },
            a: {
              nl: "Een concept store verkoopt een gevoel, niet alleen producten. Dat gevoel zit in de selectie, de inrichting en het verhaal achter de merken die je kiest. Online vertaal je dat met sfeerbeelden van je winkel, korte verhalen bij je producten en een rustige webshop die meer weg heeft van een magazine dan van een catalogus. Met een sterke [[huisstijl|huisstijl]] en goede [[productfotografie|productfotografie]] voelt je site als een verlengstuk van de winkel. En nodig online bezoekers uit voor events in de zaak.",
              en: "A concept store sells a feeling, not just products. That feeling lives in the selection, the interior and the story behind the brands you choose. Online, you translate it with atmospheric photos of your store, short stories with your products and a calm web shop that feels more like a magazine than a catalogue. With a strong [[huisstijl|visual identity]] and good [[productfotografie|product photography]] your site feels like an extension of the store. And invite online visitors to events in the shop.",
            },
          },
          {
            q: { nl: "Hoe leid je klanten op je website naar de juiste reparatie?", en: "How do you guide customers on your website to the right repair?" },
            a: {
              nl: "Laat ze kiezen, niet zoeken. Eerst het merk, dan het model, dan het probleem, en direct daarna de prijs en een tijdstip. Voor Repairlab bouwden we zo'n device-zoeker per merk en model met een heldere afspraakflow, zodat klanten in een paar klikken bij een reparatieafspraak uitkomen. Een [[boekingswidget|afspraakflow]] die aansluit op je planning scheelt telefoontjes met 'wat kost een nieuw scherm?' en geeft jou vooraf alle info die je nodig hebt.",
              en: "Let them choose rather than search. First the brand, then the model, then the problem, and straight after that the price and a time slot. For Repairlab we built a device finder per brand and model with a clear booking flow, so customers reach a repair appointment in a few clicks. A [[boekingswidget|booking flow]] that connects to your schedule saves calls asking 'what does a new screen cost?' and gives you all the info you need in advance.",
            },
          },
        ],
      },
      {
        name: { nl: "Webshops & e-commerce", en: "Web shops & e-commerce" },
        intro: {
          nl: "Voor webshops, online retailers, D2C-merken, foodwebshops en leveranciers van maatwerk, van startende webwinkel tot gevestigde e-commercespeler, en de marketeers en e-commercemanagers erachter.",
          en: "For web shops, online retailers, D2C brands, online food stores and made-to-measure suppliers, from new web shop to established e-commerce player, and the marketers and e-commerce managers behind them.",
        },
        types: [
          { nl: "Webshops", en: "Web shops" },
          { nl: "D2C-merken", en: "D2C brands" },
          { nl: "Foodwebshops", en: "Online food stores" },
          { nl: "Maatwerkleveranciers", en: "Made-to-measure suppliers" },
        ],
        useCases: [
          {
            title: { nl: "Shopping-campagnes die op marge sturen", en: "Shopping campaigns that steer on margin" },
            text: {
              nl: "Een opgeschoonde productfeed en Google Shopping-campagnes die sturen op winst in plaats van op klikken.",
              en: "A cleaned-up product feed and Google Shopping campaigns that steer on profit instead of clicks.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
          {
            title: { nl: "Maatwerk met een live prijs", en: "Made to measure with a live price" },
            text: {
              nl: "Klanten kiezen maten, materialen en opties en zien de prijs direct meebewegen, zoals in de webshop van MisterGlass.",
              en: "Customers choose dimensions, materials and options and see the price update instantly, as in the MisterGlass web shop.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Herhaalaankopen die vanzelf gaan", en: "Repeat orders that happen by themselves" },
            text: {
              nl: "Een seintje als de koffie, het hondenvoer of de verzorgingsproducten bijna op zijn, met één klik opnieuw bestellen.",
              en: "A reminder when the coffee, dog food or care products are almost finished, with one-click reordering.",
            },
            service: "marketing-automatisering-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Klantvragen direct beantwoord", en: "Customer questions answered instantly" },
            text: {
              nl: "Een AI-assistent die vragen over levering, retouren en producten beantwoordt, en lastige vragen netjes doorzet naar je team.",
              en: "An AI assistant that answers questions about delivery, returns and products, and neatly passes tricky questions on to your team.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe verhoog je de conversie van een webshop?", en: "How do you increase the conversion rate of a web shop?" },
            a: {
              nl: "Door te kijken waar bezoekers afhaken en daar te beginnen, in plaats van overal tegelijk te sleutelen. Vaak zit het in de basis: trage productpagina's, onduidelijke verzendkosten, te weinig productbeelden of een checkout met te veel stappen. Ook vertrouwen telt: reviews, heldere retourvoorwaarden en betaalmethoden die mensen kennen. Met [[conversie-optimalisatie]] testen we verbeteringen een voor een en meten we wat ze opleveren. Zo haal je meer uit de bezoekers die je al hebt.",
              en: "By looking at where visitors drop off and starting there, rather than tinkering with everything at once. Often it is the basics: slow product pages, unclear shipping costs, too few product images or a checkout with too many steps. Trust matters too: reviews, clear return policies and payment methods people recognise. With [[conversie-optimalisatie|conversion optimisation]] we test improvements one at a time and measure what they deliver. That way you get more out of the visitors you already have.",
            },
          },
          {
            q: { nl: "Hoe haal je meer uit Google Shopping?", en: "How do you get more out of Google Shopping?" },
            a: {
              nl: "Het begint bij je productfeed, niet bij je biedingen. Google moet precies snappen wat je verkoopt, dus titels met merk, type, maat en kleur, goede afbeeldingen, juiste categorieën en complete kenmerken. Een rommelige feed kost je vertoningen en geld. Daarna richten we de campagnes in op marge en niet alleen op omzet, zodat je adverteert met de producten die echt iets opleveren. Met [[google-ads|Google Ads]] en goede conversietracking stuur je op winst in plaats van op klikken.",
              en: "It starts with your product feed, not your bids. Google needs to understand exactly what you sell, so titles with brand, type, size and colour, good images, correct categories and complete attributes. A messy feed costs you impressions and money. Then we set up the campaigns around margin, not just revenue, so you advertise the products that actually make you money. With [[google-ads|Google Ads]] and solid conversion tracking you steer on profit instead of clicks.",
            },
          },
          {
            q: { nl: "Hoe toon je een prijs als die van tientallen opties afhangt?", en: "How do you show a price that depends on dozens of options?" },
            a: {
              nl: "Met prijsregels die je zelf beheert. Een basisprijs per vierkante meter of per stuk, toeslagen per optie, staffels bij grotere aantallen en een minimumprijs. De klant ziet de prijs live meebewegen bij elke keuze, zodat er aan het eind geen verrassingen zijn. Voor MisterGlass bouwden we een webshop met een prijscalculator per product. Met een [[offerte-calculator|prijscalculator]] en een beheeromgeving pas je prijzen aan als je inkoop verandert, zonder dat er een developer aan te pas komt.",
              en: "With pricing rules you manage yourself. A base price per square metre or per piece, surcharges per option, volume discounts and a minimum price. The customer sees the price update live with every choice, so there are no surprises at the end. For MisterGlass we built a web shop with a price calculator per product. With a [[offerte-calculator|price calculator]] and an admin panel you adjust prices when your purchasing costs change, without needing a developer.",
            },
          },
          {
            q: { nl: "Welke e-mailflows moet elke webshop hebben?", en: "Which email flows should every web shop have?" },
            a: {
              nl: "Een paar flows doen het meeste werk. Een welkomstreeks voor nieuwe inschrijvers, een herinnering bij een verlaten winkelwagen, een bedankmail met tips na de aankoop, een reviewverzoek als het product er een tijdje is, en een mail voor klanten die al een tijd niets hebben gekocht. Die zetten we op in een tool als Klaviyo, gekoppeld aan je webshop. Daarna draait je [[e-mailmarketing]] grotendeels vanzelf, en verstuur je alleen nog campagnes als je iets te melden hebt.",
              en: "A handful of flows do most of the work. A welcome series for new subscribers, a reminder for an abandoned cart, a thank-you email with tips after purchase, a review request once the product has been in use for a while, and an email for customers who have not bought anything in some time. We set those up in a tool like Klaviyo, connected to your web shop. After that, your [[e-mailmarketing|email marketing]] largely runs by itself, and you only send campaigns when you have something to say.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Foodproducenten", en: "Food producers" },
      { nl: "Foodstartups", en: "Food startups" },
      { nl: "Streekproducenten", en: "Regional food producers" },
      { nl: "Koffiebranders", en: "Coffee roasters" },
      { nl: "Brouwerijen en distilleerderijen", en: "Breweries and distilleries" },
      { nl: "Foodgroothandels", en: "Food wholesalers" },
      { nl: "Bakkerijen", en: "Bakeries" },
      { nl: "Slagerijen", en: "Butcher shops" },
      { nl: "Delicatessenzaken", en: "Delicatessens" },
      { nl: "Kaasspeciaalzaken", en: "Cheese shops" },
      { nl: "Supermarkten", en: "Supermarkets" },
      { nl: "Foodtrucks", en: "Food trucks" },
      { nl: "Cateraars", en: "Caterers" },
      { nl: "Bedrijfscateraars", en: "Corporate caterers" },
      { nl: "Maaltijdservices", en: "Meal services" },
      { nl: "Winkelketens", en: "Retail chains" },
      { nl: "Franchiseformules", en: "Franchise formats" },
      { nl: "Concept stores", en: "Concept stores" },
      { nl: "Cadeau- en lifestylewinkels", en: "Gift and lifestyle shops" },
      { nl: "Reparatiewinkels", en: "Repair shops" },
      { nl: "Webshops", en: "Web shops" },
      { nl: "D2C-merken", en: "D2C brands" },
      { nl: "Foodwebshops", en: "Online food stores" },
      { nl: "Maatwerkleveranciers", en: "Made-to-measure suppliers" },
    ],
  },

  /* ---------- Zakelijke dienstverlening ---------- */
  "zakelijke-dienstverlening": {
    segments: [
      {
        name: { nl: "Accountancy & administratie", en: "Accounting & bookkeeping" },
        intro: {
          nl: "Voor accountantskantoren, administratiekantoren, boekhouders, belastingadviseurs en salarisadministrateurs die klanten willen werven, binden en efficiënter bedienen.",
          en: "For accounting firms, bookkeeping offices, bookkeepers, tax advisers and payroll specialists who want to win, keep and serve clients more efficiently.",
        },
        types: [
          { nl: "Accountantskantoren", en: "Accounting firms" },
          { nl: "Administratiekantoren", en: "Bookkeeping offices" },
          { nl: "Boekhouders", en: "Bookkeepers" },
          { nl: "Belastingadviseurs", en: "Tax advisers" },
          { nl: "Salarisadministrateurs", en: "Payroll specialists" },
        ],
        useCases: [
          {
            title: { nl: "Stukken opvragen zonder nabellen", en: "Collecting documents without chasing" },
            text: {
              nl: "Klanten krijgen ruim voor de deadline een persoonlijk lijstje en een uploadlink, met vriendelijke herinneringen als er niets binnenkomt.",
              en: "Clients receive a personal checklist and upload link well before the deadline, with friendly reminders if nothing comes in.",
            },
            service: "marketing-automatisering-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Laten zien waar je goed in bent", en: "Showing what you are good at" },
            text: {
              nl: "Een positionering voor bijvoorbeeld zzp'ers, de bouw of agrarische ondernemers, vertaald naar een site met herkenbare voorbeelden.",
              en: "A positioning for, say, freelancers, construction or farming businesses, translated into a site with recognisable examples.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Antwoorden op belastingvragen", en: "Answers to tax questions" },
            text: {
              nl: "Korte, heldere artikelen rond aangifte, jaarafsluiting en nieuwe regels, die gevonden worden in Google en AI-assistenten.",
              en: "Short, clear articles around tax returns, year-end and new rules, that get found in Google and AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "AI die je mailbox voorsorteert", en: "AI that pre-sorts your inbox" },
            text: {
              nl: "Een AI-agent herkent facturen, vragen en aangeleverde stukken en zet ze klaar bij de juiste medewerker.",
              en: "An AI agent recognises invoices, questions and submitted documents and puts them ready for the right staff member.",
            },
            service: "ai-consultancy",
            application: "ai-agents",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe onderscheidt een accountantskantoor zich online?", en: "How does an accounting firm stand out online?" },
            a: {
              nl: "Door te kiezen. 'Wij helpen ondernemers met hun administratie' zegt bijna elk kantoor. Specialiseer je je in bijvoorbeeld zzp'ers, de bouw, agrarische bedrijven of startende ondernemers, laat dat dan zien. Een scherpe [[merkstrategie]] vertaalt dat naar een website met herkenbare voorbeelden, echte foto's van je team en taal zonder jargon. Klanten kiezen een accountant vaak op vertrouwen en klik. Laat dus zien wie er aan de andere kant van de tafel zit, niet alleen wat je doet.",
              en: "By choosing. 'We help entrepreneurs with their accounts' is what almost every firm says. If you specialise in, say, freelancers, construction, agriculture or start-ups, show it. A sharp [[merkstrategie|brand strategy]] turns that into a website with recognisable examples, real photos of your team and language without jargon. Clients often choose an accountant on trust and personal fit. So show who sits on the other side of the table, not just what you do.",
            },
          },
          {
            q: { nl: "Hoe automatiseer je het opvragen van stukken bij klanten?", en: "How do you automate collecting documents from clients?" },
            a: {
              nl: "Met een vaste flow per klant en per deadline. Ruim voor de aangifte of jaarafsluiting krijgt een klant automatisch een persoonlijk lijstje met wat er nog nodig is, plus een link om het veilig aan te leveren. Komt er niets binnen, dan volgt een vriendelijke herinnering, en daarna een seintje naar de verantwoordelijke medewerker. Met [[workflow-automatisering]] koppelen we dat aan je praktijksoftware. Zo hoeft niemand op kantoor nog achter bankafschriften aan te bellen in de laatste week voor de deadline.",
              en: "With a fixed flow per client and per deadline. Well before the tax return or year-end, a client automatically receives a personal list of what is still needed, plus a link to upload it securely. If nothing comes in, a friendly reminder follows, then a nudge to the responsible staff member. With [[workflow-automatisering|workflow automation]] we connect that to your practice software. That way nobody at the office has to chase bank statements by phone in the final week before the deadline.",
            },
          },
          {
            q: { nl: "Hoe vind je als accountantskantoor nieuwe collega's?", en: "How does an accounting firm find new colleagues?" },
            a: {
              nl: "Op dezelfde manier als klanten: met een eerlijk verhaal over wie je bent. Kandidaten willen weten hoe het er echt aan toegaat, wie hun collega's worden, hoe je omgaat met drukte in het seizoen en welke ruimte er is om te groeien. Met [[employer-branding]] maken we dat zichtbaar, met een werkenbij-pagina, video's van je eigen mensen en vacatureteksten die niet klinken als alle andere. Gerichte campagnes op LinkedIn en Instagram brengen dat verhaal bij de mensen die je zoekt.",
              en: "The same way you find clients: with an honest story about who you are. Candidates want to know what it is really like, who their colleagues will be, how you handle busy season and what room there is to grow. With [[employer-branding|employer branding]] we make that visible, with a careers page, videos of your own people and job ads that do not sound like all the others. Targeted campaigns on LinkedIn and Instagram bring that story to the people you are looking for.",
            },
          },
          {
            q: { nl: "Welke content werkt voor een administratie- of belastingkantoor?", en: "What content works for a bookkeeping or tax office?" },
            a: {
              nl: "Content die meebeweegt met het jaar van je klant. Rond de aangifte, de jaarafsluiting, nieuwe regels per januari en de start van een onderneming hebben mensen concrete vragen. Korte, heldere antwoorden daarop worden gevonden in Google en geciteerd door AI-assistenten. Met [[seo-content|SEO-content]] en een nieuwsbrief die op de juiste momenten uitgaat, laat je zien dat je de materie beheerst. En je klanten bellen minder met vragen die ze nu zelf kunnen nalezen.",
              en: "Content that moves with your client's year. Around tax returns, year-end, new rules every January and starting a business, people have concrete questions. Short, clear answers to them get found in Google and cited by AI assistants. With [[seo-content|SEO content]] and a newsletter that goes out at the right moments, you show you know your stuff. And your clients call less with questions they can now look up themselves.",
            },
          },
        ],
      },
      {
        name: { nl: "Juridisch & notariaat", en: "Legal & notary" },
        intro: {
          nl: "Voor advocatenkantoren, notariskantoren, juridisch adviseurs, mediators en bedrijfsjuristen die hun expertise toegankelijk willen maken voor particulieren en ondernemers.",
          en: "For law firms, notary offices, legal advisers, mediators and in-house lawyers who want to make their expertise accessible to individuals and businesses.",
        },
        types: [
          { nl: "Advocatenkantoren", en: "Law firms" },
          { nl: "Notariskantoren", en: "Notary offices" },
          { nl: "Juridisch adviseurs", en: "Legal advisers" },
          { nl: "Mediators", en: "Mediators" },
        ],
        useCases: [
          {
            title: { nl: "Gevonden per rechtsgebied en regio", en: "Found per area of law and region" },
            text: {
              nl: "Een pagina per rechtsgebied en vestiging die de vragen beantwoordt die mensen echt stellen.",
              en: "A page per area of law and office that answers the questions people actually ask.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Vaste prijs voor vaste diensten", en: "Fixed prices for standard services" },
            text: {
              nl: "Voor een testament, samenlevingscontract of statutenwijziging beantwoordt de klant een paar vragen en ziet hij direct wat het kost.",
              en: "For a will, cohabitation agreement or amendment to the articles, the client answers a few questions and sees the cost straight away.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Huisstijl met rust en gezag", en: "An identity with calm and authority" },
            text: {
              nl: "Een merk dat vakmanschap uitstraalt zonder stijf te worden, met echte portretten in plaats van een stockfoto van een hamer.",
              en: "A brand that conveys expertise without feeling stiff, with real portraits instead of a stock photo of a gavel.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Veilig dossiers delen", en: "Sharing files securely" },
            text: {
              nl: "Een portaal waarin cliënten documenten aanleveren, de voortgang volgen en berichten lezen, zonder bijlagen in losse mails.",
              en: "A portal where clients submit documents, follow progress and read messages, without attachments in loose emails.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe word je als advocaat of notaris gevonden op je rechtsgebied?", en: "How does a lawyer or notary get found for their area of practice?" },
            a: {
              nl: "Met een eigen pagina per rechtsgebied of dienst, zoals arbeidsrecht, echtscheiding, testament of oprichting bv, die de vragen beantwoordt die mensen echt stellen. Wie juridische hulp zoekt, zit vaak met een concreet probleem en wil eerst begrijpen waar hij staat. Met heldere, betrouwbare [[seo-content|SEO-content]] word je gevonden in Google en geciteerd door AI-assistenten. Combineer dat met lokale vindbaarheid per vestiging, want voor een notaris of advocaat kiezen mensen vaak iemand in de buurt.",
              en: "With a dedicated page per area of law or service, such as employment law, divorce, wills or incorporating a company, that answers the questions people really ask. Someone looking for legal help usually has a concrete problem and first wants to understand where they stand. With clear, trustworthy [[seo-content|SEO content]] you get found in Google and cited by AI assistants. Combine that with local visibility per office, because for a notary or lawyer people often choose someone nearby.",
            },
          },
          {
            q: { nl: "Kan een intake of offerte bij een notaris of advocaat online?", en: "Can an intake or quote from a notary or lawyer happen online?" },
            a: {
              nl: "Ja, en dat scheelt aan beide kanten tijd. Een online intake vraagt de basisgegevens en de situatie uit en stuurt de aanvraag naar de juiste specialist. Voor vaste diensten, zoals een testament, samenlevingscontract of statutenwijziging, werkt een [[offerte-calculator|online offerte]] goed: de klant beantwoordt een paar vragen en ziet direct wat het kost. Dat geeft de klant rust en je kantoor minder losse telefoontjes. Gevoelige details bespreek je daarna gewoon persoonlijk.",
              en: "Yes, and it saves time on both sides. An online intake collects the basic details and situation and routes the request to the right specialist. For standard services, such as a will, cohabitation agreement or amendment to articles of association, an [[offerte-calculator|online quote]] works well: the client answers a few questions and immediately sees the cost. That gives the client peace of mind and your office fewer stray phone calls. Sensitive details are then discussed in person, as usual.",
            },
          },
          {
            q: { nl: "Hoe straal je als juridisch kantoor vakmanschap uit zonder stijf te worden?", en: "How does a legal firm come across as expert without feeling stiff?" },
            a: {
              nl: "Door serieus te zijn over de inhoud en menselijk in de toon. Een [[huisstijl]] met rust en kwaliteit, goede portretten van je advocaten of notarissen in plaats van een stockfoto van een hamer, en teksten die een leek in één keer begrijpt. Juridische precisie en begrijpelijke taal gaan prima samen. Houd wel rekening met de regels van je beroepsgroep voor reclame en claims, daar letten we samen op. Zo voelt de eerste stap naar je kantoor lichter dan de kwestie waarmee iemand komt.",
              en: "By being serious about the substance and human in tone. A [[huisstijl|visual identity]] with calm and quality, good portraits of your lawyers or notaries instead of a stock photo of a gavel, and copy a layperson understands in one read. Legal precision and plain language go together just fine. Do keep your professional body's rules on advertising and claims in mind; we watch those together. That way the first step towards your firm feels lighter than the matter someone comes in with.",
            },
          },
        ],
      },
      {
        name: { nl: "Advies & consultancy", en: "Consulting & advisory" },
        intro: {
          nl: "Voor adviesbureaus, consultants, interim-managers, coaches, trainers en andere dienstverleners zoals vertaalbureaus en facilitaire bedrijven, die hun kennis en vakmanschap willen omzetten in een sterk merk en een vaste stroom opdrachten.",
          en: "For consultancies, consultants, interim managers, coaches, trainers and other service providers such as translation agencies and facility services firms, who want to turn their knowledge and craft into a strong brand and a steady flow of assignments.",
        },
        types: [
          { nl: "Adviesbureaus", en: "Consultancies" },
          { nl: "Managementconsultants", en: "Management consultants" },
          { nl: "Interim-managers", en: "Interim managers" },
          { nl: "Coaches en trainers", en: "Coaches and trainers" },
          { nl: "Vertaalbureaus", en: "Translation agencies" },
          { nl: "Facilitaire dienstverleners", en: "Facility services providers" },
        ],
        useCases: [
          {
            title: { nl: "Quickscan als binnenkomer", en: "A quick scan as door-opener" },
            text: {
              nl: "Een zelftest waarin een ondernemer ontdekt waar zijn kansen of risico's zitten, met de uitkomst als start van het eerste gesprek.",
              en: "A self-assessment in which a business owner discovers their opportunities or risks, with the outcome as the start of the first conversation.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "Zichtbaar met je expertise", en: "Visible with your expertise" },
            text: {
              nl: "Een contentstrategie met een paar vaste thema's en een ritme dat je volhoudt, op LinkedIn, je site en in je nieuwsbrief.",
              en: "A content strategy with a few fixed themes and a rhythm you can keep up, on LinkedIn, your site and in your newsletter.",
            },
            service: "content-marketing-online-ads",
            application: "contentstrategie",
          },
          {
            title: { nl: "Presentaties in je eigen stijl", en: "Presentations in your own style" },
            text: {
              nl: "Templates voor presentaties, offertes en rapporten, zodat ook een snelle offerte op vrijdagmiddag er professioneel uitziet.",
              en: "Templates for presentations, proposals and reports, so even a quick proposal on a Friday afternoon looks professional.",
            },
            service: "grafisch-ontwerp-print",
            application: "presentaties-pitchdecks",
          },
          {
            title: { nl: "Compacte site die je zelf bijhoudt", en: "A compact site you run yourself" },
            text: {
              nl: "Vijf pagina's die kloppen, een agendalink voor een kennismaking en ruimte om artikelen toe te voegen.",
              en: "Five pages that are right, a calendar link for an introductory call and room to add articles.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe genereer je leads als adviesbureau zonder koude acquisitie?", en: "How does a consultancy generate leads without cold outreach?" },
            a: {
              nl: "Door je kennis te laten werken voordat je iemand spreekt. Een quickscan of zelftest waarin een ondernemer ontdekt waar zijn kansen of risico's zitten, een praktische gids of een webinar: het zijn manieren om interesse te wekken met iets van waarde. Met een [[check-tools|quickscan]] krijg je bovendien direct context bij elke lead. Daarna volgt [[lead-nurturing|lead nurturing]]: een paar goede mails die laten zien hoe je denkt. Zo bel je straks iemand die al weet wie je bent.",
              en: "By letting your knowledge do the work before you speak to anyone. A quick scan or self-assessment in which a business owner discovers where their opportunities or risks lie, a practical guide or a webinar: they are ways to spark interest with something of value. A [[check-tools|quick scan]] also gives you immediate context for every lead. Then comes [[lead-nurturing|lead nurturing]]: a few good emails that show how you think. That way the person you call already knows who you are.",
            },
          },
          {
            q: { nl: "Heeft een zelfstandig consultant of coach een uitgebreide website nodig?", en: "Does an independent consultant or coach need an extensive website?" },
            a: {
              nl: "Meestal niet. Wat je nodig hebt, is een website die in een paar seconden duidelijk maakt voor wie je werkt, welk probleem je oplost en hoe iemand een kennismaking plant. Een sterke homepage, een pagina per dienst, een paar klantverhalen en een agendalink zijn vaak genoeg. Een [[webflow-website|Webflow-website]] houd je daarna zelf bij en breid je uit met artikelen. Liever vijf pagina's die kloppen dan twintig die je nooit bijwerkt. Je LinkedIn-profiel doet de rest van het werk.",
              en: "Usually not. What you need is a website that makes clear within seconds who you work for, which problem you solve and how someone books an introductory call. A strong homepage, a page per service, a few client stories and a calendar link are often enough. You can then update a [[webflow-website|Webflow website]] yourself and add articles over time. Better five pages that are right than twenty you never update. Your LinkedIn profile does the rest of the work.",
            },
          },
          {
            q: { nl: "Hoe bouw je als adviseur een merk rond je expertise?", en: "How do you build a brand around your expertise as an adviser?" },
            a: {
              nl: "Door een duidelijk standpunt in te nemen en dat consequent te laten zien. Waar ben je het oneens met de rest van je vakgebied? Welke aanpak is echt van jou? Dat vertalen we naar een [[contentstrategie]] met een paar vaste thema's, een ritme dat je volhoudt en vormen die bij je passen, zoals LinkedIn-posts, artikelen, een podcast of praatjes op events. Expertise wordt pas zichtbaar als je hem deelt. En iemand die al maanden je posts leest, belt makkelijker dan een vreemde.",
              en: "By taking a clear position and showing it consistently. Where do you disagree with the rest of your field? Which approach is truly yours? We turn that into a [[contentstrategie|content strategy]] with a few fixed themes, a rhythm you can keep up and formats that suit you, such as LinkedIn posts, articles, a podcast or talks at events. Expertise only becomes visible when you share it. And someone who has been reading your posts for months finds it easier to call than a stranger does.",
            },
          },
          {
            q: { nl: "Kunnen jullie presentaties en offertes in onze huisstijl maken?", en: "Can you create presentations and proposals in our house style?" },
            a: {
              nl: "Ja. Je presentatie en je offerte zijn vaak het eerste wat een opdrachtgever echt van je werk ziet. We ontwerpen [[presentaties-pitchdecks|presentaties]] en templates in PowerPoint, Keynote of Google Slides, plus offerte- en rapportsjablonen in Word of als automatisch gegenereerde pdf. Zo ziet alles er professioneel uit, ook als een collega op vrijdagmiddag nog snel iets in elkaar zet. Met slimme sjablonen pas je alleen de inhoud aan, de vormgeving blijft vanzelf goed staan.",
              en: "Yes. Your presentation and your proposal are often the first thing a client really sees of your work. We design [[presentaties-pitchdecks|presentations]] and templates in PowerPoint, Keynote or Google Slides, plus proposal and report templates in Word or as automatically generated PDFs. That way everything looks professional, even when a colleague puts something together late on a Friday afternoon. With smart templates you only change the content; the design stays right by itself.",
            },
          },
        ],
      },
      {
        name: { nl: "HR & recruitment", en: "HR & recruitment" },
        intro: {
          nl: "Voor recruitmentbureaus, uitzendbureaus, detacheerders, executive search, HR-dienstverleners en arbodiensten die kandidaten, werkgevers en medewerkers sneller bij elkaar willen brengen.",
          en: "For recruitment agencies, staffing agencies, secondment firms, executive search, HR service providers and occupational health services who want to bring candidates, employers and employees together faster.",
        },
        types: [
          { nl: "Recruitmentbureaus", en: "Recruitment agencies" },
          { nl: "Uitzendbureaus", en: "Staffing agencies" },
          { nl: "Detacheerders", en: "Secondment agencies" },
          { nl: "Executive search-bureaus", en: "Executive search firms" },
          { nl: "HR-dienstverleners", en: "HR service providers" },
          { nl: "Arbodiensten", en: "Occupational health services" },
        ],
        useCases: [
          {
            title: { nl: "Vacatures zichtbaar in Google", en: "Vacancies visible in Google" },
            text: {
              nl: "Vacatures die automatisch uit je ATS komen, met structured data zodat Google locatie, uren en salaris begrijpt.",
              en: "Vacancies that come in automatically from your ATS, with structured data so Google understands location, hours and salary.",
            },
            service: "seo-aeo-geo",
            application: "structured-data",
          },
          {
            title: { nl: "Kandidaten werven op social", en: "Recruiting candidates on social" },
            text: {
              nl: "Korte video's van het werk op TikTok en Instagram, met een sollicitatieformulier dat je in twee minuten invult.",
              en: "Short videos of the work on TikTok and Instagram, with an application form you complete in two minutes.",
            },
            service: "content-marketing-online-ads",
            application: "tiktok-ads",
          },
          {
            title: { nl: "Een talentpool in plaats van een archief", en: "A talent pool instead of an archive" },
            text: {
              nl: "Een CRM dat bijhoudt wie wat zoekt en kandidaten automatisch een seintje geeft bij een passende vacature.",
              en: "A CRM that tracks who is looking for what and automatically alerts candidates to a matching vacancy.",
            },
            service: "marketing-automatisering-funnels",
            application: "crm-implementatie",
          },
          {
            title: { nl: "Werkenbij-video met echte collega's", en: "Careers video with real colleagues" },
            text: {
              nl: "Een korte film waarin je eigen mensen vertellen hoe het werk echt is, voor je site en je campagnes.",
              en: "A short film in which your own people tell what the work is really like, for your site and your campaigns.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet een website voor een recruitment- of uitzendbureau kunnen?", en: "What should a website for a recruitment or staffing agency be able to do?" },
            a: {
              nl: "Vacatures die altijd actueel zijn, met goede filters op functie, regio en uren, en solliciteren in een paar minuten, ook op een telefoon. Die vacatures halen we automatisch op uit je ATS of vacaturefeed. Met [[structured-data|structured data]] snappen zoekmachines dat het om vacatures gaat, inclusief locatie, uren en salaris. Daarnaast heb je een aparte route voor opdrachtgevers, want een werkgever zoekt iets heel anders dan een kandidaat. En maak van de bedankpagina meer dan 'bedankt': laat zien wat de volgende stap is.",
              en: "Job listings that are always up to date, with good filters on role, region and hours, and applying in a few minutes, on a phone too. We pull those vacancies in automatically from your ATS or job feed. With [[structured-data|structured data]] search engines understand they are job postings, including location, hours and salary. You also need a separate route for clients, because an employer is looking for something very different from a candidate. And make the thank-you page more than 'thanks': show what happens next.",
            },
          },
          {
            q: { nl: "Hoe trek je meer kandidaten met vacaturecampagnes?", en: "How do you attract more candidates with recruitment campaigns?" },
            a: {
              nl: "Door kandidaten op te zoeken waar ze al zijn. Veel goede mensen zoeken niet actief, maar staan wel open voor iets nieuws als het langskomt op Instagram, Facebook of TikTok. Een korte video van het werk of van een toekomstige collega zegt daar meer dan een opsomming van eisen. Met [[tiktok-ads|TikTok Ads]] en Meta Ads sturen we ze naar een vacaturepagina met een kort sollicitatieformulier. Daarbij houden we rekening met de regels die platforms stellen aan vacatureadvertenties, zodat je campagne niet halverwege stilvalt.",
              en: "By finding candidates where they already are. Many good people are not actively looking, but are open to something new when it shows up on Instagram, Facebook or TikTok. A short video of the work or of a future colleague says more there than a list of requirements. With [[tiktok-ads|TikTok Ads]] and Meta Ads we send them to a job page with a short application form. We take into account the rules platforms set for job ads, so your campaign does not grind to a halt halfway.",
            },
          },
          {
            q: { nl: "Hoe houd je kandidaten en opdrachtgevers warm tussen twee vacatures?", en: "How do you keep candidates and clients engaged between vacancies?" },
            a: {
              nl: "Met een CRM dat bijhoudt wie wat zoekt, en automatische berichten die op het juiste moment komen. Een kandidaat die nu net niet past, krijgt een seintje bij een nieuwe vacature in zijn vakgebied. Een opdrachtgever krijgt af en toe een update over de markt of beschikbare profielen. Met [[crm-implementatie|een goed ingericht CRM]] en een paar slimme flows wordt je netwerk een talentpool in plaats van een archief. En je consultants hoeven niet zelf te onthouden wie ze in maart nog zouden terugbellen.",
              en: "With a CRM that keeps track of who is looking for what, and automatic messages that arrive at the right moment. A candidate who is not quite the right fit now gets a heads-up when a new vacancy opens in their field. A client gets an occasional update on the market or available profiles. With [[crm-implementatie|a well-configured CRM]] and a few smart flows your network becomes a talent pool instead of an archive. And your consultants no longer have to remember who they meant to call back in March.",
            },
          },
        ],
      },
      {
        name: { nl: "Incasso & debiteurenbeheer", en: "Collections & credit control" },
        intro: {
          nl: "Voor incassobureaus, gerechtsdeurwaarders, creditmanagementbureaus, factoringpartijen en financiële backoffices die met heldere communicatie en slimme portalen sneller betaald willen worden.",
          en: "For debt collection agencies, bailiffs, credit management firms, factoring companies and financial back offices that want to get paid faster through clear communication and smart portals.",
        },
        types: [
          { nl: "Incassobureaus", en: "Debt collection agencies" },
          { nl: "Gerechtsdeurwaarders", en: "Bailiffs" },
          { nl: "Creditmanagementbureaus", en: "Credit management firms" },
          { nl: "Factoringmaatschappijen", en: "Factoring companies" },
        ],
        useCases: [
          {
            title: { nl: "Zakelijk zonder dreigen", en: "Businesslike without threatening" },
            text: {
              nl: "Een tone of voice die zowel opdrachtgevers als debiteuren serieus neemt, van website tot betalingsherinnering.",
              en: "A tone of voice that takes both clients and debtors seriously, from website to payment reminder.",
            },
            service: "branding-rebranding",
            application: "tone-of-voice",
          },
          {
            title: { nl: "Debiteurenportaal met betaalregeling", en: "Debtor portal with payment plans" },
            text: {
              nl: "Inloggen met een dossiernummer, direct betalen via iDEAL of zelf een regeling voorstellen binnen jouw grenzen.",
              en: "Log in with a case number, pay straight away by iDEAL or propose a payment plan within your limits.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Dashboard voor opdrachtgevers", en: "A dashboard for clients" },
            text: {
              nl: "Openstaande, geïnde en lopende dossiers in één rustig overzicht, zonder handmatige rapportages.",
              en: "Outstanding, collected and running cases in one calm overview, without manual reports.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
          },
          {
            title: { nl: "Vragen van debiteuren direct beantwoord", en: "Debtor questions answered instantly" },
            text: {
              nl: "Een AI-assistent die vragen over betalen, termijnen en bezwaar beantwoordt, en doorschakelt naar een medewerker als het persoonlijk wordt.",
              en: "An AI assistant that answers questions about paying, instalments and disputes, and hands over to a staff member when it gets personal.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
        ],
        faqs: [
          {
            q: { nl: "Hoe straalt een incassobureau betrouwbaarheid uit zonder dreigend te klinken?", en: "How does a collection agency come across as reliable without sounding threatening?" },
            a: {
              nl: "Door te beseffen dat je twee doelgroepen hebt. Opdrachtgevers willen een partij die resultaat haalt en netjes met hun klanten omgaat. Debiteuren willen vooral duidelijkheid: wat moet ik betalen, waarom, en kan het ook in termijnen? Een [[tone-of-voice]] die zakelijk, respectvol en helder is, werkt voor allebei. Strenge brieven in hoofdletters leveren vooral stress op, geen betaling. Een rustige website en begrijpelijke berichten vergroten de kans dat iemand reageert in plaats van de envelop ongeopend te laten liggen.",
              en: "By recognising that you have two audiences. Clients want a partner that gets results and treats their customers properly. Debtors mainly want clarity: what do I owe, why, and can I pay in instalments? A [[tone-of-voice|tone of voice]] that is businesslike, respectful and clear works for both. Stern letters in capital letters mostly create stress, not payments. A calm website and understandable messages make it more likely that someone responds instead of leaving the envelope unopened.",
            },
          },
          {
            q: { nl: "Kunnen debiteuren online betalen of een betalingsregeling treffen?", en: "Can debtors pay online or set up a payment plan?" },
            a: {
              nl: "Ja. In een debiteurenportaal logt iemand in met zijn dossiernummer, ziet hij wat er openstaat en waarom, en betaalt hij direct via iDEAL. Lukt dat niet in één keer, dan stelt hij zelf een betalingsregeling voor binnen de grenzen die jij instelt. Dat scheelt telefoontjes en verlaagt de drempel om te reageren. We bouwen het [[klantportaal|portaal]] veilig, in heldere taal en gekoppeld aan je incassosoftware, zodat je medewerkers alle afspraken direct terugzien.",
              en: "Yes. In a debtor portal someone logs in with their case number, sees what is outstanding and why, and pays straight away by iDEAL. If paying in one go is not possible, they propose a payment plan themselves within the limits you set. That saves phone calls and lowers the threshold to respond. We build the [[klantportaal|portal]] securely, in plain language and connected to your collection software, so your staff see every arrangement right away.",
            },
          },
          {
            q: { nl: "Hoe geef je opdrachtgevers actueel inzicht in hun dossiers?", en: "How do you give clients up-to-date insight into their cases?" },
            a: {
              nl: "Met een dashboard waarin ze zelf zien wat er openstaat, wat er is geïnd, welke dossiers lopen en wat de volgende stap is. Voor Debiteurnet ontwierpen we een rustig dashboard waarin ondernemers offertes, facturen, opvolgingen en factoring in één overzicht zien. Met [[dashboards]] die aansluiten op je eigen systemen hoeft niemand meer handmatig rapportages samen te stellen of te mailen. Opdrachtgevers voelen zich beter geïnformeerd, en je accountmanagers besteden hun tijd aan het gesprek in plaats van aan Excel.",
              en: "With a dashboard where they see for themselves what is outstanding, what has been collected, which cases are running and what the next step is. For Debiteurnet we designed a calm dashboard where business owners see quotes, invoices, follow-ups and factoring in one overview. With [[dashboards]] connected to your own systems, nobody has to compile or email reports by hand anymore. Clients feel better informed, and your account managers spend their time on conversations instead of Excel.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Accountantskantoren", en: "Accounting firms" },
      { nl: "Administratiekantoren", en: "Bookkeeping offices" },
      { nl: "Boekhouders", en: "Bookkeepers" },
      { nl: "Belastingadviseurs", en: "Tax advisers" },
      { nl: "Salarisadministrateurs", en: "Payroll specialists" },
      { nl: "Advocatenkantoren", en: "Law firms" },
      { nl: "Notariskantoren", en: "Notary offices" },
      { nl: "Juridisch adviseurs", en: "Legal advisers" },
      { nl: "Mediators", en: "Mediators" },
      { nl: "Adviesbureaus", en: "Consultancies" },
      { nl: "Managementconsultants", en: "Management consultants" },
      { nl: "Interim-managers", en: "Interim managers" },
      { nl: "Coaches en trainers", en: "Coaches and trainers" },
      { nl: "Vertaalbureaus", en: "Translation agencies" },
      { nl: "Facilitaire dienstverleners", en: "Facility services providers" },
      { nl: "Recruitmentbureaus", en: "Recruitment agencies" },
      { nl: "Uitzendbureaus", en: "Staffing agencies" },
      { nl: "Detacheerders", en: "Secondment agencies" },
      { nl: "Executive search-bureaus", en: "Executive search firms" },
      { nl: "HR-dienstverleners", en: "HR service providers" },
      { nl: "Arbodiensten", en: "Occupational health services" },
      { nl: "Incassobureaus", en: "Debt collection agencies" },
      { nl: "Gerechtsdeurwaarders", en: "Bailiffs" },
      { nl: "Creditmanagementbureaus", en: "Credit management firms" },
      { nl: "Factoringmaatschappijen", en: "Factoring companies" },
    ],
  },
};
