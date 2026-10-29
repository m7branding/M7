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
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Occasionfoto's in één vaste stijl", en: "Used car photos in one consistent style" },
            text: {
              nl: "Een vaste fotoset per auto met dezelfde hoeken en achtergrond, die je verkopers zelf met een telefoon kunnen schieten. Zo oogt je hele voorraad als één verzorgde showroom.",
              en: "A fixed photo set per car with the same angles and background, which your sales staff can shoot themselves on a phone. That way your whole stock looks like one well-kept showroom.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Inruilcheck met kenteken", en: "Trade-in check by registration" },
            text: {
              nl: "Klanten vullen kenteken, kilometerstand en een paar foto's in en vragen een inruilvoorstel aan. Je verkoper krijgt een complete aanvraag en belt terug met een echt bod.",
              en: "Customers enter their registration, mileage and a few photos and request a trade-in offer. Your salesperson gets a complete enquiry and calls back with a real offer.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
          },
          {
            title: { nl: "Monteurs werven met eigen beeld", en: "Recruiting mechanics with real footage" },
            text: {
              nl: "Een werkenbij-pagina en korte video's uit je eigen werkplaats laten monteurs en APK-keurmeesters zien hoe het bij jou is. Dat zegt meer dan 'wij zoeken een enthousiaste collega'.",
              en: "A careers page and short videos from your own workshop show mechanics and inspectors what it is like to work for you. That says more than 'we are looking for an enthusiastic colleague'.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Alle leads in één CRM", en: "Every lead in one CRM" },
            text: {
              nl: "Aanvragen via je website, AutoScout24, Marktplaats en WhatsApp komen op één plek binnen, met een vaste opvolging. Geen proefritaanvraag meer die dagen in een vergeten mailbox ligt.",
              en: "Enquiries from your website, AutoScout24, Marktplaats and WhatsApp land in one place, with a fixed follow-up. No more test drive requests sitting in a forgotten inbox for days.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
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
          {
            q: { nl: "Hoe vind ik als garage of autobedrijf goede monteurs?", en: "How does a garage or car business find good mechanics?" },
            a: {
              nl: "Laat zien hoe het werk bij jou echt is, want goede monteurs kunnen kiezen. Een werkenbij-pagina met foto's en korte video's uit je eigen werkplaats, eerlijke info over uren, opleiding en gereedschap, en een sollicitatie die in twee minuten op een telefoon lukt. Met [[employer-branding|employer branding]] en gerichte campagnes op Instagram, Facebook en TikTok bereik je ook vakmensen in je regio die niet actief zoeken. Je eigen monteurs zijn daarbij je beste ambassadeurs.",
              en: "Show what the work is really like with you, because good mechanics can choose. A careers page with photos and short videos from your own workshop, honest info about hours, training and tools, and an application that takes two minutes on a phone. With [[employer-branding|employer branding]] and targeted campaigns on Instagram, Facebook and TikTok you also reach skilled people in your area who are not actively looking. Your own mechanics are your best ambassadors.",
            },
          },
          {
            q: { nl: "Hoe voorkom ik dat aanvragen uit verschillende kanalen blijven liggen?", en: "How do I stop enquiries from different channels slipping through?" },
            a: {
              nl: "Door alles op één plek te laten binnenkomen. Leads van je website, de grote autoportalen, WhatsApp en de telefoon komen in één [[crm-implementatie|CRM]], met per aanvraag een eigenaar en een vaste opvolgtermijn. Blijft iets liggen, dan krijgt de verkoper of de verkoopleider automatisch een seintje. Zo zie je ook welk kanaal echt verkopen oplevert, en waar je advertentiegeld beter niet meer heen kan.",
              en: "By having everything come in in one place. Leads from your website, the big car portals, WhatsApp and the phone go into one [[crm-implementatie|CRM]], with an owner and a fixed follow-up time for each enquiry. If something is left too long, the salesperson or sales manager gets an automatic nudge. You also see which channel actually brings in sales, and where your ad money is better not spent.",
            },
          },
          {
            q: { nl: "Hoe lang duurt het om een nieuwe website voor een autobedrijf te bouwen?", en: "How long does it take to build a new website for a car business?" },
            a: {
              nl: "Dat hangt vooral af van de koppelingen en de hoeveelheid maatwerk. Een site met je occasionfeed, een afsprakenmodule en pagina's per dienst is meestal binnen een paar weken tot een paar maanden live. We beginnen met een kennismaking en een duidelijke planning, zodat je weet wanneer wat klaar is. In de configurator op letsgo.m7branding.com zie je vooraf al een indicatie van wat een [[websites-webshops|website]] kost.",
              en: "That mainly depends on the integrations and the amount of custom work. A site with your used car feed, a booking module and pages per service is usually live within a few weeks to a few months. We start with an introductory meeting and a clear plan, so you know when each part will be ready. The configurator at letsgo.m7branding.com gives you an early indication of what a [[websites-webshops|website]] costs.",
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
          {
            title: { nl: "Website die je vakwerk laat zien", en: "A website that shows your craft" },
            text: {
              nl: "Een rustige site met grote beelden van eigen werk, een pagina per behandeling en één duidelijke aanvraagknop. Zoals de donkere, luxe website die we voor JURGH Detailing bouwden.",
              en: "A calm site with large images of your own work, a page per treatment and one clear enquiry button. Like the dark, luxurious website we built for JURGH Detailing.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Onderhoudsherinnering na de coating", en: "Maintenance reminders after coating" },
            text: {
              nl: "Na een coating of PPF krijgt de klant automatisch verzorgtips en op tijd een seintje voor de onderhoudsbeurt. Zo komt hij terug zonder dat jij een lijstje bijhoudt.",
              en: "After a coating or PPF job, the customer automatically gets care tips and a timely nudge for the maintenance session. They come back without you keeping a list.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Wrap vooraf zien in 3D", en: "See the wrap in 3D first" },
            text: {
              nl: "Een render van de auto of bus in de nieuwe kleur of met belettering, vanuit elke hoek. Zo zegt de klant ja voordat er een meter folie op zit.",
              en: "A render of the car or van in the new colour or with graphics, from every angle. That way the customer says yes before a single metre of film goes on.",
            },
            service: "foto-video-3d-animatie",
            application: "3d-visualisatie",
          },
          {
            title: { nl: "Beletteringsontwerp voor zakelijke klanten", en: "Vehicle graphics for business clients" },
            text: {
              nl: "Geen ontwerper in huis? Wij maken het beletteringsontwerp voor de bedrijfsbussen van je zakelijke klanten, drukklaar volgens jouw folie- en printspecificaties.",
              en: "No designer in-house? We design the vehicle graphics for your business clients' vans, print-ready to your film and print specifications.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
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
          {
            q: { nl: "Hoe krijg ik meer Google-reviews voor mijn detailingstudio?", en: "How do I get more Google reviews for my detailing studio?" },
            a: {
              nl: "Vraag erom op het moment dat de klant het blijst is: als hij zijn auto glimmend ophaalt. Een automatische [[e-mailmarketing|mail of WhatsApp]] een dag later, met een directe link naar je Google-profiel, maakt het makkelijk. Reageer op elke review, ook op de kritische, want toekomstige klanten lezen mee. Samen met [[lokale-seo|lokale SEO]] helpt dat om op te vallen als iemand in je regio naar 'auto detailing' zoekt.",
              en: "Ask at the moment the customer is happiest: when they collect their gleaming car. An automatic [[e-mailmarketing|email or WhatsApp message]] a day later, with a direct link to your Google profile, makes it easy. Reply to every review, including the critical ones, because future customers read along. Together with [[lokale-seo|local SEO]] that helps you stand out when someone in your area searches for 'car detailing'.",
            },
          },
          {
            q: { nl: "Kunnen klanten een detailingbehandeling online boeken?", en: "Can customers book a detailing treatment online?" },
            a: {
              nl: "Ja, al vraagt detailing om een slimmere agenda dan een kapsalon. Een volledige lakcorrectie neemt soms een hele dag of langer in beslag, een handwas een uur. In een [[boekingswidget|boekingsmodule]] koppel je per behandeling de juiste duur en capaciteit, en vraag je bij grotere klussen een aanbetaling. Voor coatings en PPF laat je eerst een korte inspectie of fotoaanvraag doen, zodat de planning klopt.",
              en: "Yes, although detailing needs a smarter calendar than a hair salon. A full paint correction can take a whole day or more, a hand wash an hour. In a [[boekingswidget|booking module]] you link the right duration and capacity to each treatment, and ask for a deposit on bigger jobs. For coatings and PPF you start with a short inspection or photo request, so the schedule is right.",
            },
          },
          {
            q: { nl: "Hoe laat ik als wrapstudio zien hoe een wrap eruit gaat zien?", en: "How can a wrap studio show what a wrap will look like?" },
            a: {
              nl: "Met een visualisatie voordat er geplakt wordt. Een [[3d-visualisatie|3D-render]] of een nauwkeurige mockup op een foto van de auto of bus laat kleur, afwerking en belettering zien vanuit verschillende hoeken. Dat voorkomt twijfel achteraf en maakt het makkelijker om een zakelijke klant met een heel wagenpark over de streep te trekken. Die beelden gebruik je daarna ook weer op je website en socials.",
              en: "With a visualisation before anything goes on. A [[3d-visualisatie|3D render]] or an accurate mock-up on a photo of the car or van shows colour, finish and graphics from different angles. That prevents second thoughts afterwards and makes it easier to win over a business client with a whole fleet. You can then reuse those visuals on your website and socials.",
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
          {
            title: { nl: "Productfeed voor Google Shopping", en: "Product feed for Google Shopping" },
            text: {
              nl: "Een opgeschoonde feed met merk, type en passende modellen in de titel, zodat je onderdelen in Google Shopping verschijnen bij precies de juiste zoekopdracht.",
              en: "A cleaned-up feed with brand, type and compatible models in the title, so your parts appear in Google Shopping for exactly the right search.",
            },
            service: "content-marketing-online-ads",
            application: "google-ads",
          },
          {
            title: { nl: "Pagina's per merk en model", en: "Pages per make and model" },
            text: {
              nl: "Landingspagina's als 'uitlaat Golf 8 GTI' of 'chiptuning BMW 320d', opgebouwd uit je productdata. Zo vang je de zoekopdrachten van liefhebbers die precies weten wat ze willen.",
              en: "Landing pages like 'Golf 8 GTI exhaust' or 'BMW 320d remap', built from your product data. That way you catch searches from enthusiasts who know exactly what they want.",
            },
            service: "seo-aeo-geo",
            application: "seo",
          },
          {
            title: { nl: "Soundchecks en montagevideo's", en: "Sound clips and fitting videos" },
            text: {
              nl: "Korte video's van de klank van een nieuwe uitlaat of de montage van een set velgen, voor je productpagina's, YouTube en Instagram. Liefhebbers willen horen en zien wat ze kopen.",
              en: "Short videos of the sound of a new exhaust or a set of wheels being fitted, for your product pages, YouTube and Instagram. Enthusiasts want to hear and see what they are buying.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "B2B-portaal voor garages", en: "B2B portal for garages" },
            text: {
              nl: "Garages en dealers bestellen tegen hun eigen inkoopprijzen, zien voorraad en levertijden en downloaden montagehandleidingen, allemaal in één portaal.",
              en: "Garages and dealers order at their own trade prices, see stock and delivery times and download fitting instructions, all in one portal.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
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
          {
            q: { nl: "Hoe wordt mijn onderdelenwebshop beter gevonden in Google?", en: "How can my car parts web shop get found more easily in Google?" },
            a: {
              nl: "Begin bij de techniek, want een groot assortiment met filters levert snel duizenden bijna dezelfde pagina's op. Met [[technische-seo|technische SEO]] bepalen we welke filterpagina's Google wel en niet hoeft te zien, en houden we je site snel. Daarna bouwen we pagina's per merk, model en productgroep die aansluiten op hoe liefhebbers zoeken. Met [[structured-data|structured data]] snapt Google ook prijs, voorraad en merk, wat helpt in Shopping en in de gewone zoekresultaten.",
              en: "Start with the technical side, because a large range with filters quickly produces thousands of near-identical pages. With [[technische-seo|technical SEO]] we decide which filter pages Google does and does not need to see, and keep your site fast. Then we build pages per make, model and product group that match how enthusiasts search. With [[structured-data|structured data]] Google also understands price, stock and brand, which helps in Shopping and in the regular results.",
            },
          },
          {
            q: { nl: "Kunnen garages en dealers zakelijk bij ons bestellen?", en: "Can garages and dealers order from us on trade terms?" },
            a: {
              nl: "Ja. In een [[klantportaal|B2B-portaal]] logt een garage in en ziet hij zijn eigen prijzen, kortingen en levertijden. Hij bestelt op artikel- of OE-nummer, ziet zijn orderhistorie en downloadt facturen en montagehandleidingen. Gekoppeld aan je voorraad of ERP komt elke bestelling direct op de juiste plek, zonder overtypen. Zo bedien je particulieren en vakhandel vanuit één systeem.",
              en: "Yes. In a [[klantportaal|B2B portal]] a garage logs in and sees its own prices, discounts and delivery times. It orders by part or OE number, sees its order history and downloads invoices and fitting instructions. Connected to your stock or ERP, every order lands in the right place straight away, without retyping. That way you serve consumers and the trade from one system.",
            },
          },
          {
            q: { nl: "Hoe laat ik de klank en afwerking van een uitlaat goed overkomen online?", en: "How do I get the sound and finish of an exhaust across online?" },
            a: {
              nl: "Met beeld en geluid in plaats van alleen specificaties. Korte [[social-video|video's]] van een koude start en een rondje over de weg laten horen wat een systeem doet, en scherpe [[productfotografie|productfotografie]] toont de lasnaden en de afwerking van dichtbij. Zet die video's direct op de productpagina, naast de pastcheck. Dan heeft een koper alles op één plek en hoeft hij niet op YouTube naar andermans opname te zoeken.",
              en: "With images and sound rather than specs alone. Short [[social-video|videos]] of a cold start and a drive show what a system sounds like, and sharp [[productfotografie|product photography]] shows the welds and finish up close. Put those videos straight on the product page, next to the fit check. Then a buyer has everything in one place and does not need to look on YouTube for someone else's recording.",
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
            service: "automation-funnels",
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
          {
            title: { nl: "Huren en betalen in één flow", en: "Rent and pay in one flow" },
            text: {
              nl: "Beschikbaarheid per voertuig en periode, een prijs inclusief extra's en direct betalen via iDEAL of creditcard. De bevestiging met ophaalinfo gaat daarna vanzelf de deur uit.",
              en: "Availability per vehicle and period, a price including extras and instant payment by iDEAL or credit card. The confirmation with pick-up info then goes out automatically.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Landingspagina per model of doelgroep", en: "A landing page per model or audience" },
            text: {
              nl: "Aparte pagina's voor private lease, zzp'ers of één specifiek model, elk met de juiste calculator en een advertentie die er rechtstreeks naartoe wijst.",
              en: "Separate pages for private lease, freelancers or one specific model, each with the right calculator and an ad that points straight to it.",
            },
            service: "websites-webshops",
            application: "landingspaginas",
          },
          {
            title: { nl: "Verhuur lokaal vindbaar", en: "Rentals found locally" },
            text: {
              nl: "Een pagina en Google Bedrijfsprofiel per vestiging, zodat je opduikt bij zoekopdrachten als 'bus huren Oss' of 'camper huren Brabant'. Verhuur wordt vaak dicht bij huis gezocht.",
              en: "A page and Google Business Profile for each branch, so you show up for searches like 'van hire Oss' or 'motorhome rental Brabant'. Rentals are usually searched for close to home.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Huurdersvragen ook 's avonds beantwoord", en: "Renter questions answered after hours" },
            text: {
              nl: "Een AI-assistent die vragen over kilometers, borg, verzekering en ophalen beantwoordt uit je eigen voorwaarden, en doorzet naar je team als het om schade of een uitzondering gaat.",
              en: "An AI assistant that answers questions about mileage, deposits, insurance and pick-up from your own terms, and passes things on to your team when it comes to damage or exceptions.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
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
          {
            q: { nl: "Hoe word ik als auto- of camperverhuurder beter lokaal gevonden?", en: "How does a car or motorhome rental company get found locally?" },
            a: {
              nl: "Wie een bus, auto of camper huurt, zoekt meestal dicht bij huis. Een compleet Google Bedrijfsprofiel per vestiging, met openingstijden, foto's van je voertuigen en reviews met een antwoord, is de basis. Daarnaast een pagina per voertuigtype en per plaats waar je klanten vandaan komen, bijvoorbeeld in Noord-Brabant. Met [[lokale-seo|lokale SEO]] sluit je aan op zoekopdrachten als 'verhuisbus huren' of 'camper huren' met de woonplaats erbij.",
              en: "People renting a van, car or motorhome usually search close to home. A complete Google Business Profile for each branch, with opening hours, photos of your vehicles and reviews with replies, is the foundation. Add a page per vehicle type and per town your customers come from, for example in North Brabant. With [[lokale-seo|local SEO]] you match searches like 'moving van hire' or 'motorhome rental' plus the town name.",
            },
          },
          {
            q: { nl: "Kan een chatbot vragen van huurders en leaserijders afhandelen?", en: "Can a chatbot handle questions from renters and lease drivers?" },
            a: {
              nl: "Voor de standaardvragen wel. Een [[ai-chatbots|AI-assistent]] die werkt met je eigen voorwaarden, tarieven en praktische info beantwoordt vragen over borg, kilometers, tanken of laden en ophaaltijden, ook buiten kantoortijd. Gaat het om schade, een geschil of een uitzondering, dan zet hij het gesprek door naar een medewerker, met de vraag er al bij. We testen vooraf grondig wat hij zegt, zodat hij niets belooft wat jij niet waarmaakt.",
              en: "For the standard questions, yes. An [[ai-chatbots|AI assistant]] that works from your own terms, rates and practical info answers questions about deposits, mileage, refuelling or charging and pick-up times, outside office hours too. When it comes to damage, a dispute or an exception, it hands the conversation to a staff member with the question already attached. We test thoroughly in advance what it says, so it never promises something you cannot deliver.",
            },
          },
          {
            q: { nl: "Hoe pak je de marketing van een camper- of caravanbedrijf aan?", en: "How should a motorhome or caravan business approach marketing?" },
            a: {
              nl: "Met het seizoen mee. In de wintermaanden oriënteren mensen zich en vergelijken ze modellen, in het voorjaar beslissen ze. Een [[landingspaginas|landingspagina]] per model met een rondleidingsvideo, de indeling en een duidelijke prijs of huurprijs doet dan veel werk. Daar sturen we [[meta-ads|Meta Ads]] en Google-campagnes naartoe, met meer budget in de weken dat mensen echt kiezen.",
              en: "Follow the season. In the winter months people orient themselves and compare models; in spring they decide. A [[landingspaginas|landing page]] per model with a walk-through video, the layout and a clear price or rental rate does a lot of work. We point [[meta-ads|Meta Ads]] and Google campaigns to it, with more budget in the weeks when people actually choose.",
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
          {
            title: { nl: "Respectvolle foto's van je voertuigen", en: "Respectful photos of your vehicles" },
            text: {
              nl: "Rustige fotografie van je rouwauto's, trouwauto's of oldtimers, in één stijl en met oog voor detail. Beeld dat past bij het moment waarvoor mensen je inschakelen.",
              en: "Calm photography of your hearses, wedding cars or classic cars, in one style and with an eye for detail. Imagery that suits the moment people book you for.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Trouwseizoen ruim op tijd vullen", en: "Filling wedding season in good time" },
            text: {
              nl: "Campagnes op Instagram en Facebook in de maanden dat stellen hun dag plannen, met beelden van je auto's en een directe link naar de beschikbaarheid.",
              en: "Campaigns on Instagram and Facebook in the months when couples plan their day, with images of your cars and a direct link to availability.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Huisstijl met ingetogen klasse", en: "An identity with quiet class" },
            text: {
              nl: "Een logo, kleuren en drukwerk die waardig en tijdloos zijn, van de website tot het kaartje dat de chauffeur na afloop overhandigt.",
              en: "A logo, colours and printed matter that are dignified and timeless, from the website to the card the driver hands over afterwards.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Ritplanning zonder dubbele boekingen", en: "Trip planning without double bookings" },
            text: {
              nl: "Eén overzicht van voertuigen, chauffeurs en ritten, waar nieuwe aanvragen direct in komen. Handig als je zowel uitvaarten als trouwerijen en zakelijke ritten rijdt.",
              en: "One overview of vehicles, drivers and trips, where new requests come straight in. Handy when you drive funerals as well as weddings and business trips.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
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
          {
            q: { nl: "Hoe vul je de agenda voor trouwauto's en oldtimers buiten het trouwseizoen?", en: "How do you fill the calendar for wedding and classic cars outside wedding season?" },
            a: {
              nl: "Door te laten zien dat je auto's ook bij andere momenten passen. Denk aan gala's en eindfeesten, jubilea, fotoshoots, bedrijfsevents en een rit als cadeau. Een [[landingspaginas|landingspagina]] per gelegenheid, met passende foto's en pakketten, wordt gevonden door mensen die precies daarnaar zoeken. Zo verdeel je de vraag beter over het jaar.",
              en: "By showing that your cars suit other occasions too. Think of proms and gala nights, anniversaries, photo shoots, company events and a ride as a gift. A [[landingspaginas|landing page]] per occasion, with matching photos and packages, gets found by people searching for exactly that. That way demand is spread more evenly across the year.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat uitvaartondernemers je snel kunnen bereiken?", en: "How do you make sure funeral directors can reach you quickly?" },
            a: {
              nl: "Maak contact op elke pagina vindbaar, met je telefoonnummer bovenaan en een kort aanvraagformulier dat alleen vraagt wat je echt nodig hebt: datum, tijd, locatie en voertuig. Met [[workflow-automatisering|automatische bevestigingen]] weet de uitvaartondernemer direct dat zijn aanvraag binnen is, ook 's avonds. Voor vaste opdrachtgevers kan een eenvoudig portaal handig zijn waarin ze zelf ritten aanvragen en de status zien.",
              en: "Make contact easy to find on every page, with your phone number at the top and a short request form that only asks for what you really need: date, time, location and vehicle. With [[workflow-automatisering|automatic confirmations]] the funeral director knows straight away that the request has arrived, in the evening too. For regular clients, a simple portal where they request trips themselves and see the status can be useful.",
            },
          },
          {
            q: { nl: "Hoe laat je een limousine- of chauffeursservice premium overkomen?", en: "How do you make a limousine or chauffeur service come across as premium?" },
            a: {
              nl: "Premium zit in de details: een ingetogen [[huisstijl|huisstijl]], verzorgde chauffeurs op de foto en voertuigen die van alle kanten goed in beeld staan. Laat je auto's zien in de omgeving waar ze thuishoren, bij een hotel, een kerk of een gala, met goede [[productfotografie|fotografie]]. Houd de website rustig en de aanvraag simpel. Wie een limousine boekt, verwacht vooral dat alles gewoon klopt.",
              en: "Premium lives in the details: a restrained [[huisstijl|visual identity]], well-groomed drivers in the photos and vehicles shown well from every angle. Show your cars in the setting where they belong, at a hotel, a church or a gala, with good [[productfotografie|photography]]. Keep the website calm and the booking simple. Anyone who books a limousine mainly expects everything to just be right.",
            },
          },
          {
            q: { nl: "Moet je als rouwvervoerder actief zijn op social media?", en: "Should a funeral car service be active on social media?" },
            a: {
              nl: "Niet op dezelfde manier als een trouwautoverhuurder. Rouwvervoer leent zich niet voor vrolijke posts, maar een rustige aanwezigheid op LinkedIn helpt wel om contact te houden met uitvaartondernemers, je belangrijkste opdrachtgevers. Denk aan een nieuw voertuig, een opleiding van je chauffeurs of een woord van dank aan een samenwerkingspartner. Voor trouwauto's en oldtimers werkt [[social-media-marketing|social media]] juist goed, met beelden van mooie dagen.",
              en: "Not in the same way as a wedding car rental. Funeral transport does not lend itself to cheerful posts, but a quiet presence on LinkedIn does help you keep in touch with funeral directors, your main clients. Think of a new vehicle, training for your drivers or a word of thanks to a partner. For wedding and classic cars, [[social-media-marketing|social media]] works well, with images of beautiful days.",
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
            title: { nl: "Clubapp met afmelden en pushberichten", en: "A club app with sign-offs and alerts" },
            text: {
              nl: "Leden melden zich af, reserveren een baan en krijgen een seintje bij een afgelasting, gekoppeld aan je ledenadministratie.",
              en: "Members sign off, book a court and get a heads-up when a match is cancelled, linked to your membership administration.",
            },
            service: "web-apps-portals-apps",
            application: "ledenportaal-loyaliteit",
          },
          {
            title: { nl: "Ledenwerving rond de seizoensstart", en: "Member drive at season start" },
            text: {
              nl: "Een paar weken gerichte posts en advertenties voor gezinnen in de buurt, met beelden van je eigen leden en één link naar de proeftraining.",
              en: "A few weeks of targeted posts and ads for families nearby, with images of your own members and one link to the trial session.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Vrijwilligersrooster dat zichzelf vult", en: "A volunteer rota that fills itself" },
            text: {
              nl: "Bar-, kantine- en scheidsrechtersdiensten waarop leden zich zelf inschrijven, met een automatische herinnering de dag ervoor. Het bestuur hoeft niet meer elke week rond te bellen.",
              en: "Bar, canteen and refereeing shifts that members sign up for themselves, with an automatic reminder the day before. The board no longer has to ring round every week.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Opgefrist clublogo, met respect", en: "A refreshed club crest, with respect" },
            text: {
              nl: "Een vernieuwd logo dat de historie van je club eert, klaar voor shirts, vlaggen, socials en het jubileumboek. Herkenbaar voor oud-leden, fris voor nieuwe.",
              en: "A refreshed crest that honours your club's history, ready for shirts, flags, socials and the anniversary book. Recognisable to long-time members, fresh for new ones.",
            },
            service: "branding-rebranding",
            application: "rebranding",
          },
          {
            title: { nl: "Sponsors op LED-bord en kantinescherm", en: "Sponsors on LED boards and canteen screens" },
            text: {
              nl: "Korte animaties van je sponsors voor het LED-bord, de kantinetv en je socials. Extra zichtbaarheid die je gewoon kunt meenemen in je sponsorpakketten.",
              en: "Short animations of your sponsors for the LED board, the canteen TV and your socials. Extra visibility you can simply include in your sponsor packages.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
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
          {
            q: { nl: "Hoe pak je een nieuw clublogo aan zonder de leden kwijt te raken?", en: "How do you approach a new club crest without losing your members?" },
            a: {
              nl: "Door de geschiedenis serieus te nemen en leden vroeg te betrekken. Vaak zit de kracht in een paar elementen, zoals de kleuren, een dier of het oprichtingsjaar, die je behoudt en strakker maakt. We laten een paar richtingen zien, toetsen ze bij een kleine groep en leggen bij de presentatie uit waarom het logo is wat het is. Met een doordachte [[rebranding|rebranding]] voelt het nieuwe logo als een opgepoetste versie van het oude, niet als een vreemde.",
              en: "By taking the history seriously and involving members early. The strength often lies in a few elements, such as the colours, an animal or the founding year, which you keep and sharpen. We show a few directions, test them with a small group and explain at the presentation why the crest is what it is. With a well-considered [[rebranding|rebrand]] the new crest feels like a polished version of the old one, not a stranger.",
            },
          },
          {
            q: { nl: "Hoe regel je bardiensten en vrijwilligerstaken digitaal?", en: "How do you organise bar shifts and volunteer tasks digitally?" },
            a: {
              nl: "Met een overzicht waarin leden zelf een dienst kiezen, en een systeem dat de rest onthoudt. Een dag van tevoren gaat er een herinnering uit, en staat er een gat in het rooster, dan krijgen een paar leden automatisch een verzoek. Veel clubs hebben al software waar dit in kan; dan koppelen we die aan je site en app. Met wat [[workflow-automatisering|slimme automatisering]] staat de vrijwilligerscoördinator niet meer elke zaterdag zelf achter de bar omdat iemand het vergeten is.",
              en: "With an overview where members pick a shift themselves, and a system that remembers the rest. A reminder goes out the day before, and if there is a gap in the rota, a few members automatically get a request. Many clubs already have software that can do this; then we connect it to your site and app. With a bit of [[workflow-automatisering|smart automation]] the volunteer coordinator no longer ends up behind the bar every Saturday because someone forgot.",
            },
          },
          {
            q: { nl: "Hoe houd je een clubwebsite betaalbaar en actueel?", en: "How do you keep a club website affordable and up to date?" },
            a: {
              nl: "Kies een basis die vrijwilligers zelf kunnen bijhouden, en automatiseer wat elke week terugkomt, zoals programma en uitslagen. Begin compact en breid uit als de club dat wil, in plaats van alles in één keer. Met [[hosting-onderhoud|hosting en onderhoud]] blijft de techniek veilig en bijgewerkt, zonder dat het bestuur zich er druk om hoeft te maken. Wat het kost, hangt af van de koppelingen en wensen; dat bespreken we vooraf eerlijk.",
              en: "Choose a foundation volunteers can maintain themselves, and automate what comes back every week, such as fixtures and results. Start compact and expand when the club wants to, rather than doing everything at once. With [[hosting-onderhoud|hosting and maintenance]] the technology stays secure and up to date, without the board having to worry about it. What it costs depends on the integrations and wishes; we discuss that honestly up front.",
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
            service: "automation-funnels",
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
          {
            title: { nl: "Gevonden op 'sportschool in de buurt'", en: "Found for 'gym near me'" },
            text: {
              nl: "Een compleet Google Bedrijfsprofiel, reviews met een antwoord en pagina's per lesvorm, zodat je opduikt bij zoekopdrachten als 'yoga Uden' of 'personal trainer Den Bosch'.",
              en: "A complete Google Business Profile, reviews with replies and pages per class type, so you show up for searches like 'yoga Uden' or 'personal trainer Den Bosch'.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Video's van je trainers en lessen", en: "Videos of your trainers and classes" },
            text: {
              nl: "Korte clips van een les, een oefening of een trainer die iets uitlegt. Echte beelden uit je eigen zaal laten nieuwe leden zien waar ze terechtkomen.",
              en: "Short clips of a class, an exercise or a trainer explaining something. Real footage from your own gym shows new members where they will end up.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Ledenapp in je eigen stijl", en: "A member app in your own style" },
            text: {
              nl: "Reserveren, inchecken, schema's en je abonnement in één app met je eigen logo en kleuren, gekoppeld aan de ledensoftware die je al gebruikt.",
              en: "Booking, check-in, workout plans and your membership in one app with your own logo and colours, connected to the membership software you already use.",
            },
            service: "web-apps-portals-apps",
            application: "ledenportaal-loyaliteit",
          },
          {
            title: { nl: "Website met rooster en eerlijke prijzen", en: "A website with timetable and honest prices" },
            text: {
              nl: "Een snelle site met je lesrooster, heldere abonnementsprijzen en één duidelijke knop voor een proefles. Nieuwe lessen of tarieven zet je er zelf op.",
              en: "A fast site with your class timetable, clear membership prices and one obvious button for a trial session. New classes or rates you add yourself.",
            },
            service: "websites-webshops",
            application: "webflow-website",
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
          {
            q: { nl: "Hoe word je als sportschool of yogastudio beter gevonden in je eigen plaats?", en: "How does a gym or yoga studio get found more easily in its own town?" },
            a: {
              nl: "Wie wil gaan sporten, zoekt bijna altijd dichtbij: 'sportschool Oss', 'pilates Uden' of gewoon 'yoga in de buurt'. Een compleet Google Bedrijfsprofiel met actuele foto's, openingstijden en reviews is dan je etalage. Op je website helpt een pagina per lesvorm en per locatie, met je plaatsnaam erin. Met [[lokale-seo|lokale SEO]] zorgen we dat je zichtbaar bent op het moment dat iemand besluit dat het nu echt tijd is.",
              en: "People who want to start exercising almost always search close by: 'gym Oss', 'pilates Uden' or simply 'yoga near me'. A complete Google Business Profile with up-to-date photos, opening hours and reviews is your shop window. On your website, a page per class type and per location helps, with your town name in it. With [[lokale-seo|local SEO]] we make sure you are visible at the moment someone decides it really is time.",
            },
          },
          {
            q: { nl: "Moet je de prijzen van je abonnementen op de website zetten?", en: "Should you put your membership prices on the website?" },
            a: {
              nl: "In de meeste gevallen wel. Mensen vergelijken, en wie geen prijs ziet, gaat vaak eerst bij de buren kijken. Laat duidelijk zien wat er in elk abonnement zit, zodat kiezen makkelijk is, en zet de proefles er prominent bij. Met [[conversie-optimalisatie|conversie-optimalisatie]] testen we hoe je prijzen en pakketten het best presenteert. Werk je met maatwerk, zoals bij personal training, dan helpt een vanafprijs al veel.",
              en: "In most cases, yes. People compare, and anyone who cannot see a price often checks the competition first. Show clearly what each membership includes, so choosing is easy, and put the trial session front and centre. With [[conversie-optimalisatie|conversion optimisation]] we test how best to present your prices and packages. If you work with tailored offers, as in personal training, a 'from' price already helps a lot.",
            },
          },
          {
            q: { nl: "Is een eigen app zinvol voor een sportschool?", en: "Is an app of your own worthwhile for a gym?" },
            a: {
              nl: "Soms wel. Veel boekingssoftware voor sportscholen biedt al een app die je in je eigen stijl kunt zetten, en dat is vaak een prima start. Een eigen [[ledenportaal-loyaliteit|ledenapp]] wordt interessant als je iets wilt bieden wat die standaardapp niet kan, zoals eigen trainingsschema's, challenges of een loyaliteitsprogramma. We kijken eerst wat je software al kan, zodat je niet betaalt voor iets wat je al hebt.",
              en: "Sometimes. A lot of gym booking software already offers an app you can brand in your own style, and that is often a fine start. A custom [[ledenportaal-loyaliteit|member app]] becomes interesting when you want to offer something the standard app cannot, such as your own training plans, challenges or a loyalty programme. We first look at what your software can already do, so you do not pay for something you already have.",
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
            service: "automation-funnels",
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
          {
            title: { nl: "Een eventmerk dat elk jaar meegaat", en: "An event brand that lasts every year" },
            text: {
              nl: "Een logo en beeldstijl voor je evenement die je elk jaar fris maakt met een nieuw jaartal, thema of kleur, zonder opnieuw te beginnen.",
              en: "A logo and visual style for your event that you refresh every year with a new year, theme or colour, without starting from scratch.",
            },
            service: "branding-rebranding",
            application: "logo-ontwerp",
          },
          {
            title: { nl: "Welke afstand past bij jou?", en: "Which distance suits you?" },
            text: {
              nl: "Twijfelaars beantwoorden een paar vragen over hun trainingsniveau en komen uit bij de afstand of categorie die past, met een directe link naar inschrijven.",
              en: "Undecided participants answer a few questions about their training level and land on the distance or category that suits them, with a direct link to sign up.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Eventapp met live uitslagen", en: "An event app with live results" },
            text: {
              nl: "Startnummer, tijdschema, parcourskaart en live uitslagen op de telefoon van deelnemers en publiek, waar mogelijk gekoppeld aan je tijdregistratie.",
              en: "Bib number, schedule, course map and live results on participants' and spectators' phones, connected to your timing provider where possible.",
            },
            service: "web-apps-portals-apps",
            application: "mobiele-app",
          },
          {
            title: { nl: "Advertenties naar de deadline toe", en: "Ads that build towards the deadline" },
            text: {
              nl: "Campagnes op Instagram en Facebook met beelden van vorig jaar, die meer budget krijgen naarmate een prijsstap of de inschrijfdeadline dichterbij komt.",
              en: "Campaigns on Instagram and Facebook with footage from last year, which get more budget as a price step or the entry deadline gets closer.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
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
          {
            q: { nl: "Hoe vind je sponsors voor een sportevenement?", en: "How do you find sponsors for a sports event?" },
            a: {
              nl: "Door te laten zien wat een partner concreet krijgt. Een heldere [[presentaties-pitchdecks|sponsorpresentatie]] met je deelnemers en bezoekers, je bereik online en de plekken waar een merk zichtbaar wordt, maakt het gesprek makkelijker. Gebruik daarbij alleen cijfers uit je eigen inschrijvingen en kanalen, dan klopt het verhaal ook. Beelden van vorige edities, zoals een aftermovie of [[social-video|korte video's]], laten een sponsor voelen hoe het is om erbij te zijn.",
              en: "By showing what a partner concretely gets. A clear [[presentaties-pitchdecks|sponsor presentation]] with your participants and visitors, your online reach and the places where a brand becomes visible makes the conversation easier. Only use figures from your own registrations and channels, so the story holds up. Footage from previous editions, such as an aftermovie or [[social-video|short videos]], lets a sponsor feel what it is like to be part of it.",
            },
          },
          {
            q: { nl: "Heeft ons evenement een eigen app nodig?", en: "Does our event need its own app?" },
            a: {
              nl: "Vaak niet. Een goede mobiele website met tijdschema, parcours en uitslagen doet voor de meeste evenementen wat nodig is, en hoeft niet gedownload te worden. Een [[mobiele-app|app]] wordt interessant bij live tracking van deelnemers, pushberichten op de dag zelf of een evenement dat elk jaar groter wordt. We denken eerlijk mee, want een app die één dag per jaar wordt gebruikt, moet die dag wel echt iets toevoegen.",
              en: "Often not. A good mobile website with schedule, course and results does what most events need, and nobody has to download it. An [[mobiele-app|app]] becomes interesting with live participant tracking, push notifications on the day itself or an event that grows every year. We give honest advice, because an app that is used one day a year has to really add something on that day.",
            },
          },
          {
            q: { nl: "Wanneer begin je met de promotie van een evenement?", en: "When should you start promoting an event?" },
            a: {
              nl: "Eerder dan je denkt. Voor de meeste loop- en fietsevenementen begint de aanloop maanden van tevoren, in een vaste volgorde: eerst je deelnemers van vorig jaar, dan een early-bird, daarna campagnes en herinneringen voor elke deadline. Met een [[contentstrategie|contentplanning]] weet je per week wat er online gaat en wie het maakt. Zo voorkom je dat alle promotie in de laatste drie weken valt, als de meeste mensen hun plannen al gemaakt hebben.",
              en: "Earlier than you think. For most running and cycling events the run-up starts months in advance, in a fixed order: first last year's participants, then an early-bird, then campaigns and reminders before each deadline. With a [[contentstrategie|content plan]] you know week by week what goes online and who makes it. That way you avoid cramming all promotion into the last three weeks, when most people have already made their plans.",
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
          {
            title: { nl: "Van gratis kijker naar abonnee", en: "From free viewer to subscriber" },
            text: {
              nl: "Een funnel met gratis content, een proefperiode, slimme mails en een betaalpagina zonder drempels, zodat meer kijkers of lezers betalende abonnee worden.",
              en: "A funnel with free content, a trial period, smart emails and a frictionless payment page, so more viewers or readers become paying subscribers.",
            },
            service: "automation-funnels",
            application: "salesfunnels",
          },
          {
            title: { nl: "Een merk voor je kanaal of podcast", en: "A brand for your channel or podcast" },
            text: {
              nl: "Een naam, logo en beeldtaal die werken als klein rondje in een app én op een groot scherm, van podcastcover tot studiodecor.",
              en: "A name, logo and visual style that work as a small circle in an app and on a big screen, from podcast cover to studio set.",
            },
            service: "branding-rebranding",
            application: "logo-ontwerp",
          },
          {
            title: { nl: "Clips en ondertitels met AI", en: "Clips and subtitles with AI" },
            text: {
              nl: "AI die van een wedstrijd of aflevering een eerste selectie clips, ondertitels en samenvattingen maakt. Je redactie kiest en verfijnt, in plaats van uren te scrollen.",
              en: "AI that turns a match or episode into a first selection of clips, subtitles and summaries. Your editors choose and refine, instead of scrolling for hours.",
            },
            service: "ai-consultancy",
            application: "ai-content",
          },
          {
            title: { nl: "Snel en stabiel op drukke dagen", en: "Fast and stable on busy days" },
            text: {
              nl: "Hosting, caching en monitoring die zijn ingericht op wedstrijddagen en piekmomenten, zodat je site of platform snel blijft als iedereen tegelijk kijkt.",
              en: "Hosting, caching and monitoring set up for match days and peak moments, so your site or platform stays fast when everyone is watching at once.",
            },
            service: "websites-webshops",
            application: "hosting-onderhoud",
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
          {
            q: { nl: "Hoe zet je kijkers of lezers om in betalende abonnees?", en: "How do you turn viewers or readers into paying subscribers?" },
            a: {
              nl: "Geef genoeg weg om te laten zien wat je waard bent, en maak de stap naar betalen klein. Een vaste verhouding tussen gratis en betaalde content, een proefperiode en een betaalpagina die op een telefoon in een minuut klaar is, helpen daarbij. Met een [[salesfunnels|funnel]] en goede [[e-mailmarketing|e-mailflows]] volg je nieuwe gebruikers op met hun favoriete club, sport of rubriek. En meet waar mensen afhaken, want daar zit de winst.",
              en: "Give away enough to show what you are worth, and make the step to paying small. A fixed balance between free and paid content, a trial period and a payment page that takes a minute on a phone all help. With a [[salesfunnels|funnel]] and good [[e-mailmarketing|email flows]] you follow up new users with their favourite club, sport or section. And measure where people drop off, because that is where the gains are.",
            },
          },
          {
            q: { nl: "Kun je AI inzetten voor sportcontent zonder dat het nep voelt?", en: "Can you use AI for sports content without it feeling fake?" },
            a: {
              nl: "Ja, als je AI het saaie werk laat doen en mensen het verhaal. Denk aan clips voorselecteren, ondertitels en transcripties maken, een eerste versie van een samenvatting schrijven of content vertalen. De redactie houdt de regie en controleert alles voordat het online gaat. Met [[ai-content|AI-contentproductie]] richten we zo'n werkwijze in, met duidelijke afspraken over wat AI wel en niet doet. Zo win je tijd zonder aan geloofwaardigheid in te leveren.",
              en: "Yes, if AI does the boring work and people tell the story. Think of pre-selecting clips, creating subtitles and transcripts, writing a first draft of a summary or translating content. The editorial team stays in charge and checks everything before it goes live. With [[ai-content|AI content production]] we set up that kind of workflow, with clear agreements on what AI does and does not do. That way you save time without giving up credibility.",
            },
          },
          {
            q: { nl: "Hoe maak je van een sportmerk of esportsteam een herkenbaar merk?", en: "How do you turn a sports brand or esports team into a recognisable brand?" },
            a: {
              nl: "Door consequent te zijn, overal waar fans je zien: shirt, stream, socials, merchandise en website. Een sterk logo dat ook als klein icoon werkt, een vaste set kleuren en letters en een [[huisstijl|huisstijl]] met templates maken dat makkelijk. Met [[motion-design|motion design]] krijgen je intro's, overlays en scoregraphics dezelfde uitstraling. Fans herkennen je dan in een fractie van een seconde, ook tussen al het andere in hun feed.",
              en: "By being consistent everywhere fans see you: jersey, stream, socials, merchandise and website. A strong logo that also works as a small icon, a fixed set of colours and typefaces and a [[huisstijl|visual identity]] with templates make that easy. With [[motion-design|motion design]] your intros, overlays and score graphics get the same look. Fans then recognise you in a split second, even among everything else in their feed.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat je platform een drukke wedstrijddag aankan?", en: "How do you make sure your platform can handle a busy match day?" },
            a: {
              nl: "Door vooraf te testen wat er gebeurt als iedereen tegelijk komt. Goede caching, een CDN voor beeld en video, en hosting die automatisch kan opschalen vangen het grootste deel van een piek op. Monitoring laat zien waar het knelt voordat gebruikers het merken. Met [[hosting-onderhoud|hosting en onderhoud]] houden we dat in de gaten, en plannen we updates niet op de zaterdagmiddag van de derby.",
              en: "By testing in advance what happens when everyone arrives at once. Good caching, a CDN for images and video, and hosting that can scale automatically absorb most of a peak. Monitoring shows where things get tight before users notice. With [[hosting-onderhoud|hosting and maintenance]] we keep an eye on that, and we do not schedule updates for the Saturday afternoon of the derby.",
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
              nl: "Trainers en officials schrijven zich in voor cursussen, volgen lesmateriaal en zien wanneer hun licentie verloopt, met op tijd een automatische herinnering.",
              en: "Coaches and officials sign up for courses, follow learning materials and see when their licence expires, with an automatic reminder in good time.",
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
          {
            title: { nl: "Sportverhalen op film", en: "Stories of sport on film" },
            text: {
              nl: "Korte films over sporters, trainers en vrijwilligers die laten zien waarom sport ertoe doet, voor campagnes, subsidieaanvragen, jaarverslagen en socials.",
              en: "Short films about athletes, coaches and volunteers that show why sport matters, for campaigns, funding applications, annual reports and socials.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
          {
            title: { nl: "Sport- en clubzoeker op postcode", en: "Sport and club finder by postcode" },
            text: {
              nl: "Een paar vragen over leeftijd, interesse en woonplaats leiden naar een passende sport en de dichtstbijzijnde club, met een directe link naar een proefles.",
              en: "A few questions about age, interests and home town lead to a suitable sport and the nearest club, with a direct link to a trial session.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Heldere antwoorden op regelvragen", en: "Clear answers to rules questions" },
            text: {
              nl: "Duidelijke pagina's over spelregels, licenties en lidmaatschap, zodat Google en AI-assistenten jouw site als bron gebruiken in plaats van een oud forumbericht.",
              en: "Clear pages about rules, licences and membership, so Google and AI assistants use your site as the source instead of an old forum post.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
          {
            title: { nl: "Nieuwsbrief per doelgroep", en: "A newsletter per audience" },
            text: {
              nl: "Aparte mailings voor bestuurders, trainers en scheidsrechters, gevoed uit je ledenadministratie, zodat iedereen alleen krijgt wat voor hem relevant is.",
              en: "Separate mailings for board members, coaches and referees, fed from your membership administration, so everyone only gets what is relevant to them.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
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
          {
            q: { nl: "Hoe bereik je als bond of sportbedrijf mensen die nog niet sporten?", en: "How does a federation or sports company reach people who do not exercise yet?" },
            a: {
              nl: "Begin bij hun drempels, niet bij je aanbod. Mensen die niet sporten, twijfelen over tijd, kosten, niveau of het idee dat ze er niet bij horen. Een [[keuzehulp-quiz|keuzehulp]] die met een paar vragen een passende sport en een club in de buurt voorstelt, haalt veel van die twijfel weg. Korte [[social-video|video's]] met herkenbare mensen, geen topsporters, doen de rest.",
              en: "Start with their barriers, not your offer. People who do not exercise hesitate about time, cost, level or the feeling that they do not belong. A [[keuzehulp-quiz|product finder]] that suggests a suitable sport and a nearby club after a few questions removes much of that doubt. Short [[social-video|videos]] featuring relatable people, not top athletes, do the rest.",
            },
          },
          {
            q: { nl: "Moet de website van een sportbond voldoen aan toegankelijkheidsregels?", en: "Does a sports federation website have to meet accessibility rules?" },
            a: {
              nl: "Voor overheidsorganisaties, zoals een sportbedrijf dat onder de gemeente valt, is digitale toegankelijkheid wettelijk verplicht. Voor bonden en stichtingen is dat niet altijd zo, maar wel verstandig, zeker als je met publiek geld werkt en iedereen wilt laten sporten. Denk aan goede contrasten, duidelijke koppen, bediening met het toetsenbord en leesbare documenten in plaats van gescande pdf's. In ons [[ux-ui-webdesign|webdesign]] houden we rekening met de WCAG-richtlijnen, zodat je site voor zoveel mogelijk mensen werkt.",
              en: "For government organisations, such as a sports company that is part of the municipality, digital accessibility is a legal requirement. For federations and foundations that is not always the case, but it is wise, especially if you work with public money and want everyone to be able to take part. Think of good contrast, clear headings, keyboard navigation and readable documents instead of scanned PDFs. In our [[ux-ui-webdesign|web design]] we take the WCAG guidelines into account, so your site works for as many people as possible.",
            },
          },
          {
            q: { nl: "Hoe maak je een jaarverslag of beleidsplan dat mensen echt lezen?", en: "How do you make an annual report or policy plan people actually read?" },
            a: {
              nl: "Door te beginnen bij de lezer: een clubbestuurder, wethouder of sponsor wil in twee minuten de kern weten. Zet de belangrijkste cijfers en verhalen vooraan, maak er [[infographics|infographics]] van en bewaar de details voor de bijlagen. Een verzorgd [[brochures-magazines|jaarverslag]] met foto's van echte sporters en vrijwilligers leest prettiger dan veertig pagina's tekst. En een online versie met een korte samenvatting deel je makkelijker.",
              en: "By starting with the reader: a club board member, alderman or sponsor wants the essence in two minutes. Put the key figures and stories up front, turn them into [[infographics|infographics]] and save the details for the appendices. A well-designed [[brochures-magazines|annual report]] with photos of real athletes and volunteers reads more pleasantly than forty pages of text. And an online version with a short summary is easier to share.",
            },
          },
          {
            q: { nl: "Kunnen sportaccommodaties zalen en velden online laten reserveren?", en: "Can sports venues let people book halls and pitches online?" },
            a: {
              nl: "Ja. Verenigingen, scholen en particulieren zien in een [[boekingswidget|reserveringsmodule]] welke zalen, velden of banen vrij zijn, en boeken direct, eventueel met online betaling. Vaste huurders krijgen hun eigen tarieven en terugkerende reserveringen. Dat scheelt je beheerder een hoop mail en telefoon, en je bezetting zie je in één oogopslag. Waar mogelijk koppelen we het aan je bestaande planning of toegangssysteem.",
              en: "Yes. Clubs, schools and individuals see in a [[boekingswidget|booking module]] which halls, pitches or courts are free, and book straight away, with online payment if you like. Regular tenants get their own rates and recurring bookings. That saves your facility manager a lot of email and phone calls, and you see your occupancy at a glance. Where possible we connect it to your existing planning or access system.",
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
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Product-UI stap voor stap beter", en: "Product UI, better step by step" },
            text: {
              nl: "Eerst een designsysteem met componenten die overal hetzelfde werken, daarna verbeteringen scherm voor scherm, te beginnen waar gebruikers nu vastlopen.",
              en: "First a design system with components that work the same everywhere, then screen-by-screen improvements, starting where users get stuck today.",
            },
            service: "web-apps-portals-apps",
            application: "ux-ui-app-design",
          },
          {
            title: { nl: "Productvideo van een minuut", en: "A one-minute product video" },
            text: {
              nl: "Een animatie met echte schermen uit je product, die in een minuut laat zien welk probleem je oplost. Voor je homepage, demo-mails en LinkedIn.",
              en: "An animation with real screens from your product that shows in one minute which problem you solve. For your homepage, demo emails and LinkedIn.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "LinkedIn-campagnes voor je ideale klant", en: "LinkedIn campaigns for your ideal customer" },
            text: {
              nl: "Advertenties gericht op functie, branche en bedrijfsgrootte, met content die past bij waar iemand staat: eerst uitleg, later een demo of trial.",
              en: "Ads targeted by job title, industry and company size, with content that matches where someone is: explanation first, a demo or trial later.",
            },
            service: "content-marketing-online-ads",
            application: "linkedin-ads",
          },
          {
            title: { nl: "AI-functies in je eigen product", en: "AI features in your own product" },
            text: {
              nl: "Samenvatten, classificeren of slim zoeken in je eigen software, zo gebouwd dat het past bij je data, je architectuur en je privacyafspraken met klanten.",
              en: "Summarising, classifying or smart search in your own software, built to fit your data, your architecture and your privacy agreements with customers.",
            },
            service: "ai-consultancy",
            application: "ai-integraties",
          },
          {
            title: { nl: "ROI-calculator voor je sales", en: "An ROI calculator for sales" },
            text: {
              nl: "Prospects vullen een paar eigen cijfers in en zien wat je software hen aan tijd of kosten kan schelen. Sales krijgt een lead met de berekening erbij.",
              en: "Prospects enter a few of their own figures and see how much time or money your software could save them. Sales gets a lead with the calculation attached.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
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
          {
            q: { nl: "Wanneer is een rebranding verstandig voor een SaaS-bedrijf?", en: "When does a rebrand make sense for a SaaS company?" },
            a: {
              nl: "Als je merk niet meer past bij wat je product is geworden. Dat gebeurt vaak na een paar jaar: je begon als tool voor één niche en bent nu een platform voor grotere klanten, of je gaat de grens over en je naam werkt niet in het Engels. Een [[rebranding|rebranding]] begint bij je positionering, niet bij een nieuw logo. We kijken wat je aan herkenning moet behouden, en zorgen dat website, product en salesmateriaal in één keer meegaan.",
              en: "When your brand no longer fits what your product has become. That often happens after a few years: you started as a tool for one niche and are now a platform for larger customers, or you are expanding abroad and your name does not work in English. A [[rebranding|rebrand]] starts with your positioning, not a new logo. We look at what recognition you need to keep, and make sure website, product and sales material move along in one go.",
            },
          },
          {
            q: { nl: "Werkt adverteren op LinkedIn voor B2B-software?", en: "Does LinkedIn advertising work for B2B software?" },
            a: {
              nl: "Vaak wel, omdat je heel precies kunt richten op functie, branche en bedrijfsgrootte. Klikken zijn er wel duurder dan op veel andere kanalen, dus de content moet raak zijn. We werken in lagen: eerst uitleg of een nuttige gids voor een brede groep, daarna een demo of trial voor wie interesse toonde. Met [[linkedin-ads|LinkedIn Ads]] en goede [[tracking-analytics|tracking]] zie je welke campagnes echt pipeline opleveren, en niet alleen likes.",
              en: "Often, yes, because you can target very precisely by job title, industry and company size. Clicks are more expensive than on many other channels, though, so the content has to land. We work in layers: first an explanation or useful guide for a broad group, then a demo or trial for those who showed interest. With [[linkedin-ads|LinkedIn Ads]] and solid [[tracking-analytics|tracking]] you see which campaigns actually build pipeline, not just likes.",
            },
          },
          {
            q: { nl: "Hoe voeg je AI toe aan je SaaS-product zonder hype?", en: "How do you add AI to your SaaS product without the hype?" },
            a: {
              nl: "Begin bij een taak waar je gebruikers nu tijd aan kwijt zijn, niet bij de technologie. Samenvatten, classificeren, zoeken in documenten of een eerste versie van een tekst maken zijn vaak goede kandidaten. Daarna kijken we naar je data, de kosten per gebruik en de afspraken die je met klanten hebt over privacy en opslag. Met [[ai-integraties|AI-integraties]] bouwen we het in kleine stappen, zodat je meet of het echt gebruikt wordt voordat je verder gaat.",
              en: "Start with a task your users currently spend time on, not with the technology. Summarising, classifying, searching documents or drafting a first version of a text are often good candidates. Then we look at your data, the cost per use and the agreements you have with customers on privacy and storage. With [[ai-integraties|AI integrations]] we build it in small steps, so you measure whether it is actually used before going further.",
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
          {
            title: { nl: "Tracking vanaf dag één", en: "Tracking from day one" },
            text: {
              nl: "Een nette set-up van analytics en events, zodat je vanaf de lancering ziet waar bezoekers vandaan komen, wat ze doen en waar ze afhaken.",
              en: "A clean set-up of analytics and events, so from launch you see where visitors come from, what they do and where they drop off.",
            },
            service: "automation-funnels",
            application: "tracking-analytics",
          },
          {
            title: { nl: "Testcampagne op een klein budget", en: "A test campaign on a small budget" },
            text: {
              nl: "Een paar kleine campagnes op Instagram en Facebook om boodschap en doelgroep te testen, met een vast weekbudget en een eerlijke blik op wat werkt.",
              en: "A few small campaigns on Instagram and Facebook to test message and audience, with a fixed weekly budget and an honest look at what works.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "AI slim inzetten met een klein team", en: "Using AI smartly with a small team" },
            text: {
              nl: "Waar scheelt AI je echt tijd, van support tot content en code? Een korte sessie en een praktische roadmap, zodat je kleine team meer gedaan krijgt.",
              en: "Where does AI really save you time, from support to content and code? A short session and a practical roadmap, so your small team gets more done.",
            },
            service: "ai-consultancy",
            application: "ai-strategie",
          },
          {
            title: { nl: "Uitlegvideo voor je pitch", en: "An explainer for your pitch" },
            text: {
              nl: "Een korte animatie die je idee in een minuut uitlegt, voor je landingspagina, een crowdfundingcampagne of de eerste minuut van je pitch.",
              en: "A short animation that explains your idea in a minute, for your landing page, a crowdfunding campaign or the first minute of your pitch.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
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
          {
            q: { nl: "Hoe houd je branding en website betaalbaar als startup?", en: "How do you keep branding and a website affordable as a startup?" },
            a: {
              nl: "Door in fases te werken. Eerst een [[logo-ontwerp|logo]] en een basishuisstijl, plus een compacte [[webflow-website|website]] die je zelf kunt aanpassen terwijl je propositie nog verschuift. Uitgebreide brandbooks, extra pagina's en maatwerk komen later, als je weet wat werkt. Wat het precies kost, hangt af van je wensen; in de configurator op letsgo.m7branding.com zie je vooraf al een indicatie.",
              en: "By working in phases. First a [[logo-ontwerp|logo]] and a basic identity, plus a compact [[webflow-website|website]] you can adjust yourself while your proposition is still shifting. Extensive brand books, extra pages and custom work come later, once you know what works. The exact cost depends on your wishes; the configurator at letsgo.m7branding.com gives you an early indication.",
            },
          },
          {
            q: { nl: "Hoe meet je als startup of je marketing werkt?", en: "How does a startup measure whether its marketing works?" },
            a: {
              nl: "Kies een paar cijfers die er nu toe doen, en meet die goed. Denk aan aanmeldingen voor de wachtlijst, demo-aanvragen, activatie na de eerste week en de kosten per nieuwe klant. Met een nette [[tracking-analytics|tracking]] en een simpel dashboard zie je per kanaal wat het oplevert. Liever vijf cijfers die je elke week bekijkt dan vijftig waar niemand naar omkijkt.",
              en: "Pick a few numbers that matter now, and measure them properly. Think of waiting list sign-ups, demo requests, activation after the first week and the cost per new customer. With clean [[tracking-analytics|tracking]] and a simple dashboard you see what each channel delivers. Better five numbers you check every week than fifty nobody looks at.",
            },
          },
          {
            q: { nl: "Moet je als startup al met AI aan de slag?", en: "Should a startup already be working with AI?" },
            a: {
              nl: "Ja, maar praktisch. Met een klein team is AI vaak de snelste manier om meer gedaan te krijgen: supportvragen, eerste versies van content, research en hulp bij code. Begin met een paar concrete taken en spreek af wat wel en niet in AI-tools mag, zeker als het om klantdata gaat. Met een korte [[ai-strategie|AI-roadmap]] weet je waar je begint en wat het oplevert.",
              en: "Yes, but practically. With a small team, AI is often the fastest way to get more done: support questions, first drafts of content, research and help with code. Start with a few concrete tasks and agree what can and cannot go into AI tools, especially when customer data is involved. With a short [[ai-strategie|AI roadmap]] you know where to start and what it delivers.",
            },
          },
          {
            q: { nl: "Wat moet er in een pitchdeck voor investeerders?", en: "What should go into an investor pitch deck?" },
            a: {
              nl: "Het probleem, je oplossing, voor wie het is, hoe groot de markt is, hoe je geld verdient, wat je al hebt bereikt, je team en wat je vraagt. Meer hoeft niet, in tien tot vijftien slides. Investeerders kijken er vaak maar een paar minuten naar, dus elke slide moet één ding duidelijk maken. We ontwerpen het [[presentaties-pitchdecks|pitchdeck]] in je eigen stijl en zo dat je het per gesprek zelf kunt aanpassen.",
              en: "The problem, your solution, who it is for, how big the market is, how you make money, what you have already achieved, your team and what you are asking for. No more is needed, in ten to fifteen slides. Investors often look at it for only a few minutes, so every slide has to make one thing clear. We design the [[presentaties-pitchdecks|pitch deck]] in your own style and so you can adapt it yourself for each meeting.",
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
          {
            title: { nl: "Website die vertrouwen wekt", en: "A website that earns trust" },
            text: {
              nl: "Diensten in heldere pakketten, certificeringen die je echt hebt en klantverhalen, op een snelle, veilige site. Zo ziet een IT-beslisser in één bezoek wat je doet.",
              en: "Services in clear packages, certifications you actually hold and customer stories, on a fast, secure site. That way an IT decision-maker sees what you do in one visit.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Kennisartikelen die gevonden worden", en: "Knowledge articles that get found" },
            text: {
              nl: "Artikelen over NIS2, back-ups of phishing in gewone taal, die beantwoorden waar ondernemers op zoeken en je expertise laten zien in Google en AI-tools.",
              en: "Articles about NIS2, backups or phishing in plain language, answering what business owners search for and showing your expertise in Google and AI tools.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Uitlegvideo zonder vakjargon", en: "An explainer without jargon" },
            text: {
              nl: "Een korte animatie die managed services, zero trust of je back-upaanpak uitlegt in gewone taal, voor je site, salesgesprekken en LinkedIn.",
              en: "A short animation that explains managed services, zero trust or your backup approach in plain language, for your site, sales meetings and LinkedIn.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "Leads opvolgen per onderwerp", en: "Following up leads by topic" },
            text: {
              nl: "Wie de quickscan deed of een whitepaper downloadde, krijgt een paar nuttige mails over precies dat onderwerp, met een seintje naar sales bij concrete interesse.",
              en: "Anyone who did the quick scan or downloaded a white paper gets a few useful emails on exactly that topic, with a nudge to sales when interest becomes concrete.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
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
          {
            q: { nl: "Hoe schrijf je over NIS2 en compliance zonder je klant te overspoelen?", en: "How do you write about NIS2 and compliance without overwhelming your customer?" },
            a: {
              nl: "Begin bij de vraag die de ondernemer heeft: geldt dit voor mij, en wat moet ik nu doen? Een korte uitleg in gewone taal, een checklist en een duidelijke volgende stap werken beter dan een juridische samenvatting van twintig pagina's. Met [[seo-content|SEO-content]] zorgen we dat die artikelen gevonden worden op het moment dat iemand ernaar zoekt. Verwijs voor de juridische details naar de officiële bronnen, dan blijf jij de praktische gids.",
              en: "Start with the question the business owner has: does this apply to me, and what do I need to do now? A short explanation in plain language, a checklist and a clear next step work better than a twenty-page legal summary. With [[seo-content|SEO content]] we make sure those articles get found when someone searches for them. Point to the official sources for the legal details, so you remain the practical guide.",
            },
          },
          {
            q: { nl: "Werkt een whitepaper of e-book nog voor IT-leadgeneratie?", en: "Does a white paper or e-book still work for IT lead generation?" },
            a: {
              nl: "Ja, als hij specifiek en echt nuttig is. 'De ultieme gids voor IT' wordt weinig gedownload, 'Back-ups voor accountantskantoren: zo test je of je herstel werkt' wel. Vraag alleen de gegevens die je echt nodig hebt, en volg op met [[lead-nurturing|lead nurturing]]: een paar mails die verder bouwen op het onderwerp, met een seintje naar sales als iemand concreet wordt. Zo wordt een download een gesprek, en geen adres in een lijst.",
              en: "Yes, if it is specific and genuinely useful. 'The ultimate guide to IT' rarely gets downloaded; 'Backups for accounting firms: how to test that your restore works' does. Only ask for the details you really need, and follow up with [[lead-nurturing|lead nurturing]]: a few emails that build on the topic, with a nudge to sales when someone gets concrete. That way a download becomes a conversation, not an address on a list.",
            },
          },
          {
            q: { nl: "Hoe vindt een IT-bedrijf nieuwe engineers en consultants?", en: "How does an IT company find new engineers and consultants?" },
            a: {
              nl: "Door te laten zien aan welke techniek ze werken, met wie en hoe het team in elkaar zit. Goede IT'ers worden vaak benaderd, dus een vacature die klinkt als alle andere valt weg. Met [[employer-branding|employer branding]] maken we een werkenbij-pagina met echte verhalen van je engineers, eerlijke info over certificeringen en doorgroei, en campagnes op de kanalen waar zij zitten. Een kort sollicitatieformulier zonder motivatiebrief helpt ook.",
              en: "By showing what technology they will work on, with whom and how the team is set up. Good IT people get approached a lot, so a vacancy that sounds like all the others disappears. With [[employer-branding|employer branding]] we create a careers page with real stories from your engineers, honest info about certifications and growth, and campaigns on the channels where they are. A short application form without a cover letter helps too.",
            },
          },
          {
            q: { nl: "Hoe zet je een AI-chatbot veilig in voor je servicedesk?", en: "How do you deploy an AI chatbot safely for your service desk?" },
            a: {
              nl: "Laat hem alleen antwoorden uit je eigen, gecontroleerde kennisbank, en niet zelf improviseren. Bepaal vooraf welke vragen hij afhandelt en wanneer hij doorzet naar een medewerker, bijvoorbeeld bij storingen of alles wat met toegang en wachtwoorden te maken heeft. Let op waar de data wordt verwerkt en wat er wordt gelogd, in lijn met de AVG. Met een goed ingerichte [[ai-chatbots|AI-assistent]] ontlast je je servicedesk zonder je klanten in een doolhof te zetten.",
              en: "Let it answer only from your own, verified knowledge base, without improvising. Decide in advance which questions it handles and when it hands over to a staff member, for example with outages or anything related to access and passwords. Pay attention to where data is processed and what is logged, in line with the GDPR. With a well-configured [[ai-chatbots|AI assistant]] you take pressure off your service desk without sending your customers into a maze.",
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
          {
            title: { nl: "Talent werven in de Brainport-regio", en: "Recruiting talent in the Brainport region" },
            text: {
              nl: "Een werkgeversverhaal dat engineers laat zien aan welke techniek ze werken en met wie, voor je werkenbij-site, campagnes en je stand op de carrièrebeurs.",
              en: "An employer story that shows engineers what technology they will work on and with whom, for your careers site, campaigns and your stand at the career fair.",
            },
            service: "branding-rebranding",
            application: "employer-branding",
          },
          {
            title: { nl: "Kennispagina's voor technische inkopers", en: "Knowledge pages for technical buyers" },
            text: {
              nl: "Pagina's per toepassing en specificatie die beantwoorden wat engineers en inkopers zoeken, zodat je gevonden wordt in Google en in AI-tools.",
              en: "Pages per application and specification that answer what engineers and buyers search for, so you get found in Google and in AI tools.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Configurator voor productvarianten", en: "A configurator for product variants" },
            text: {
              nl: "Klanten stellen een systeem samen uit modules en opties en sturen een aanvraag met de juiste specificaties. Geen heen-en-weer meer over wat technisch past.",
              en: "Customers build a system from modules and options and send an enquiry with the right specifications. No more back-and-forth about what technically fits.",
            },
            service: "configurators-lead-tools-widgets",
            application: "productconfigurator",
          },
          {
            title: { nl: "Beursleads direct opvolgen", en: "Following up trade show leads" },
            text: {
              nl: "Contacten van de beurs komen meteen in je CRM, met een opvolgreeks die op het juiste moment een demo, case of whitepaper aanbiedt.",
              en: "Contacts from the trade show go straight into your CRM, with a follow-up sequence that offers a demo, case or white paper at the right moment.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
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
          {
            q: { nl: "Hoe vind je als hightechbedrijf in de regio Eindhoven technisch talent?", en: "How does a high-tech company in the Eindhoven region find technical talent?" },
            a: {
              nl: "In de Brainport-regio concurreer je met grote namen om dezelfde engineers. Je wint het niet op salaris alleen, maar op het verhaal: aan welke techniek werk je, hoeveel invloed heb je en met wie werk je samen. Met [[employer-branding|employer branding]] maken we dat zichtbaar, met echte verhalen van je engineers, beelden uit je lab of werkplaats en vacatureteksten zonder clichés. Een kleiner bedrijf heeft daarin vaak meer te vertellen dan het zelf denkt.",
              en: "In the Brainport region you compete with big names for the same engineers. You do not win on salary alone, but on the story: what technology you work on, how much influence you have and who you work with. With [[employer-branding|employer branding]] we make that visible, with real stories from your engineers, footage from your lab or workshop and job ads without clichés. A smaller company often has more to tell than it thinks.",
            },
          },
          {
            q: { nl: "Hoe laat je klanten een product met veel varianten samenstellen?", en: "How do you let customers configure a product with many variants?" },
            a: {
              nl: "Met een configurator die de technische regels kent. De klant kiest stap voor stap modules en opties, en ziet alleen combinaties die echt kunnen. Aan het eind ligt er een aanvraag met de juiste specificaties, in plaats van een mail vol vragen. Een [[productconfigurator|productconfigurator]] koppelen we waar mogelijk aan je ERP of CPQ, en als beeld helpt, laat een [[3d-configurator|3D-configurator]] het product live meeveranderen.",
              en: "With a configurator that knows the technical rules. The customer chooses modules and options step by step, and only sees combinations that actually work. At the end there is an enquiry with the right specifications, instead of an email full of questions. We connect a [[productconfigurator|product configurator]] to your ERP or CPQ where possible, and if visuals help, a [[3d-configurator|3D configurator]] updates the product live.",
            },
          },
          {
            q: { nl: "Hoe volg je contacten na een beurs goed op?", en: "How do you follow up properly on contacts after a trade show?" },
            a: {
              nl: "Snel en persoonlijk. Leg op de beurs al vast wie je sprak en waar het over ging, bijvoorbeeld met een eenvoudig formulier op een tablet. Die gegevens komen direct in je [[crm-implementatie|CRM]], en binnen een paar dagen krijgt iedereen een mail die past bij het gesprek. Daarna volgt een korte [[lead-nurturing|opvolgreeks]] met een demo, case of whitepaper. Zo wordt het stapeltje visitekaartjes geen stapeltje vergeten kansen.",
              en: "Quickly and personally. Capture at the show who you spoke to and what it was about, for example with a simple form on a tablet. Those details go straight into your [[crm-implementatie|CRM]], and within a few days everyone gets an email that matches the conversation. Then a short [[lead-nurturing|follow-up sequence]] offers a demo, case or white paper. That way the pile of business cards does not become a pile of forgotten opportunities.",
            },
          },
          {
            q: { nl: "Hoe vertel je een deeptechverhaal aan investeerders?", en: "How do you tell a deep tech story to investors?" },
            a: {
              nl: "Begin bij het probleem en de impact, niet bij de natuurkunde. Een investeerder moet in een paar slides snappen welke markt je openbreekt, waarom jouw technologie dat kan en hoe ver je bent. Beeld doet hier veel: een [[3d-visualisatie|render]] of animatie laat zien wat een tekst niet uitlegt. We bouwen het [[presentaties-pitchdecks|pitchdeck]] zo dat de techniek klopt voor experts, maar ook landt bij wie geen ingenieur is.",
              en: "Start with the problem and the impact, not the physics. An investor has to understand in a few slides which market you are opening up, why your technology can do it and how far along you are. Visuals do a lot here: a [[3d-visualisatie|render]] or animation shows what text cannot explain. We build the [[presentaties-pitchdecks|pitch deck]] so the technology is right for experts, but also lands with people who are not engineers.",
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
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Promovideo voor de App Store", en: "Promo video for the App Store" },
            text: {
              nl: "Een korte animatie van je app in actie, met echte schermen en één heldere boodschap, voor de stores, je website en social.",
              en: "A short animation of your app in action, with real screens and one clear message, for the stores, your website and social.",
            },
            service: "foto-video-3d-animatie",
            application: "motion-design",
          },
          {
            title: { nl: "App-icoon en storebeelden die opvallen", en: "Standout app icon and store visuals" },
            text: {
              nl: "Een herkenbaar app-icoon en heldere screenshots met korte teksten voor de App Store en Google Play, want daar beslist iemand in een paar seconden.",
              en: "A recognisable app icon and clear screenshots with short captions for the App Store and Google Play, because that is where people decide in seconds.",
            },
            service: "grafisch-ontwerp-print",
            application: "illustraties-iconen",
          },
          {
            title: { nl: "Gebruikersvragen beantwoord met AI", en: "User questions answered with AI" },
            text: {
              nl: "Een assistent in je app of helpcentrum die vragen beantwoordt uit je eigen documentatie, en een ticket aanmaakt als hij het antwoord niet weet.",
              en: "An assistant in your app or help centre that answers questions from your own documentation, and creates a ticket when it does not know the answer.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
          {
            title: { nl: "Campagnes die installs opleveren", en: "Campaigns that drive installs" },
            text: {
              nl: "Advertenties op TikTok, Instagram of Google met korte video's van je app in gebruik, gemeten op installs én op wat gebruikers daarna doen.",
              en: "Ads on TikTok, Instagram or Google with short videos of your app in use, measured on installs and on what users do afterwards.",
            },
            service: "content-marketing-online-ads",
            application: "tiktok-ads",
          },
          {
            title: { nl: "Eén merk van icoon tot e-mail", en: "One brand from icon to email" },
            text: {
              nl: "Een logo, kleuren en interfacestijl die als één geheel voelen, van het icoon op je telefoon tot de mails en meldingen die je platform verstuurt.",
              en: "A logo, colours and interface style that feel like one whole, from the icon on your phone to the emails and notifications your platform sends.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
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
          {
            q: { nl: "Hoe krijg je de eerste gebruikers voor een nieuwe app?", en: "How do you get the first users for a new app?" },
            a: {
              nl: "Begin klein en persoonlijk. Zoek een groep die het probleem echt heeft, zoals een vereniging, een beroepsgroep of een community, en help die eerst. Een [[landingspaginas|landingspagina]] met een wachtlijst verzamelt geïnteresseerden voor de lancering. Daarna test je met kleine campagnes, bijvoorbeeld met [[tiktok-ads|TikTok Ads]], welke boodschap aanslaat. Honderd tevreden gebruikers die het doorvertellen, zijn meer waard dan tienduizend downloads die na een dag weer weg zijn.",
              en: "Start small and personal. Find a group that really has the problem, such as an association, a profession or a community, and help them first. A [[landingspaginas|landing page]] with a waiting list collects interested people before launch. After that, small campaigns, for example with [[tiktok-ads|TikTok Ads]], let you test which message lands. A hundred happy users who spread the word are worth more than ten thousand downloads that are gone again after a day.",
            },
          },
          {
            q: { nl: "Hoe word je beter gevonden in de App Store en Google Play?", en: "How do you get found more easily in the App Store and Google Play?" },
            a: {
              nl: "Met de basis van app store optimization: een titel en ondertitel met de woorden waarop mensen zoeken, een heldere beschrijving en screenshots die in één oogopslag laten zien wat je app doet. Een herkenbaar [[illustraties-iconen|app-icoon]] valt op tussen de rest. Reviews en beoordelingen tellen zwaar mee, dus vraag erom op een goed moment in de app, bijvoorbeeld na een geslaagde actie. En test af en toe andere screenshots, want kleine verschillen maken hier veel uit.",
              en: "With the basics of app store optimisation: a title and subtitle with the words people search for, a clear description and screenshots that show at a glance what your app does. A recognisable [[illustraties-iconen|app icon]] stands out from the rest. Reviews and ratings count heavily, so ask for them at a good moment in the app, for example after a successful action. And test different screenshots now and then, because small differences matter a lot here.",
            },
          },
          {
            q: { nl: "Hoe zorg je dat een app of platform veilig met gebruikersdata omgaat?", en: "How do you make sure an app or platform handles user data safely?" },
            a: {
              nl: "Door privacy en beveiliging vanaf het begin mee te nemen, niet achteraf. Verzamel alleen wat je echt nodig hebt, werk met duidelijke rollen en rechten en kies hosting die past bij de AVG, bij voorkeur binnen de EU. Bij [[saas-platform|platformontwikkeling]] leggen we vast wie waar bij kan en wat er wordt gelogd. Voor gevoelige toepassingen raden we een beveiligingstest door een gespecialiseerde partij aan voordat je live gaat.",
              en: "By building privacy and security in from the start, not afterwards. Only collect what you really need, work with clear roles and permissions and choose hosting that fits the GDPR, preferably within the EU. In [[saas-platform|platform development]] we define who can access what and what gets logged. For sensitive applications we recommend a security test by a specialised party before you go live.",
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
          {
            title: { nl: "Recepten met jouw product in de hoofdrol", en: "Recipes starring your product" },
            text: {
              nl: "Recepten en korte video's waarin je product de hoofdrol speelt, voor je site, social en de nieuwsbrief. Zo zien klanten meteen wat ze ermee kunnen.",
              en: "Recipes and short videos in which your product plays the lead, for your site, social and newsletter. Customers see straight away what they can do with it.",
            },
            service: "content-marketing-online-ads",
            application: "contentstrategie",
          },
          {
            title: { nl: "Vindbaar op je productcategorie", en: "Found for your product category" },
            text: {
              nl: "Productpagina's en verhalen die gevonden worden door mensen die al zoeken, op termen als 'speciaalkoffie bestellen', 'streekproducten Brabant' of 'craft gin'.",
              en: "Product pages and stories that get found by people already searching, on terms like 'speciality coffee online', 'regional produce Brabant' or 'craft gin'.",
            },
            service: "seo-aeo-geo",
            application: "seo",
          },
          {
            title: { nl: "Verkooppuntenkaart op je site", en: "A stockist map on your site" },
            text: {
              nl: "Een kaart met winkels en horeca waar je product te koop is, die je zelf bijhoudt. Bezoekers vinden zo het dichtstbijzijnde adres, en retailers zien je als partner.",
              en: "A map of shops and restaurants where your product is sold, which you keep up to date yourself. Visitors find the nearest address, and retailers see you as a partner.",
            },
            service: "configurators-lead-tools-widgets",
            application: "website-widgets",
          },
          {
            title: { nl: "Koffie of bier op abonnement", en: "Coffee or beer on subscription" },
            text: {
              nl: "Een abonnement met automatische mails rond verzending, een nieuwe smaak of een seizoensbrouwsel, zodat vaste klanten vanzelf blijven terugkomen.",
              en: "A subscription with automatic emails around shipping, a new flavour or a seasonal brew, so regular customers keep coming back by themselves.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
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
          {
            q: { nl: "Hoe verkoop je als foodproducent ook direct aan consumenten?", en: "How can a food producer also sell directly to consumers?" },
            a: {
              nl: "Met een eigen [[webshop|webshop]] naast je verkoop via winkels en horeca. Dat geeft je marge, directe feedback en een band met je fans. Let wel op je retailers: houd je prijzen in lijn en bied online vooral wat in de winkel lastig te vinden is, zoals grotere verpakkingen, cadeaupakketten of een abonnement. Met [[e-mailmarketing|e-mailflows]] rond nieuwe smaken en seizoenen houd je die klanten daarna vast.",
              en: "With a [[webshop|web shop]] of your own alongside your sales through shops and restaurants. That gives you margin, direct feedback and a bond with your fans. Do mind your retailers: keep your prices in line and offer online mainly what is hard to find in store, such as larger packs, gift boxes or a subscription. With [[e-mailmarketing|email flows]] around new flavours and seasons you then keep those customers.",
            },
          },
          {
            q: { nl: "Hoe laat je consumenten weten waar je product te koop is?", en: "How do you tell consumers where your product is sold?" },
            a: {
              nl: "Met een verkooppuntenkaart op je website, die je zelf bijwerkt als er een winkel of restaurant bij komt. Bezoekers vullen hun postcode in en zien het dichtstbijzijnde adres. Zo'n [[website-widgets|widget]] helpt ook je retailers, want je stuurt klanten naar hun deur. Meld nieuwe verkooppunten ook op social en in je nieuwsbrief, zodat het nieuws niet alleen op de kaart staat.",
              en: "With a stockist map on your website, which you update yourself when a shop or restaurant is added. Visitors enter their postcode and see the nearest address. That kind of [[website-widgets|widget]] helps your retailers too, because you send customers to their door. Announce new stockists on social and in your newsletter as well, so the news is not only on the map.",
            },
          },
          {
            q: { nl: "Wat heb je nodig voor een goede foodfotoshoot?", en: "What do you need for a good food photo shoot?" },
            a: {
              nl: "Een duidelijk lijstje: welke producten, welke beelden voor welke plek en welke sfeer. Packshots op wit voor retailers en je webshop vragen een andere aanpak dan sfeerbeelden aan tafel of buiten. Styling en verse ingrediënten maken het verschil, en een vaste lichtopzet zorgt dat je assortiment er als één familie uitziet. Met [[productfotografie|productfotografie]] heb je na één dag vaak beeld voor maanden, ook voor nieuwe varianten later.",
              en: "A clear list: which products, which images for which purpose and which mood. Packshots on white for retailers and your web shop need a different approach from lifestyle shots at the table or outdoors. Styling and fresh ingredients make the difference, and a fixed lighting set-up makes your range look like one family. With [[productfotografie|product photography]] one day often gives you images for months, also for new variants later.",
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
              nl: "Eén herkenbare stijl op je gevel, papieren zakken, prijskaartjes, bestelbus en website, zodat je zaak in de straat en online als één geheel voelt.",
              en: "One recognisable style on your shopfront, paper bags, price tags, delivery van and website, so your shop feels like one whole in the street and online.",
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
          {
            title: { nl: "Seizoensposters en etalage", en: "Seasonal posters and window displays" },
            text: {
              nl: "Posters, raamstickers en folders voor de kerstbestelling, het barbecueseizoen of de nieuwe lunchkaart, in je eigen stijl en drukklaar aangeleverd.",
              en: "Posters, window stickers and leaflets for Christmas orders, barbecue season or the new lunch menu, in your own style and delivered print-ready.",
            },
            service: "grafisch-ontwerp-print",
            application: "flyers-posters",
          },
          {
            title: { nl: "Digitale spaarkaart", en: "A digital loyalty card" },
            text: {
              nl: "Een digitale spaarkaart of klantenpas met punten en acties, in plaats van stempelkaartjes die in een la verdwijnen. Jij ziet eindelijk wie je vaste klanten zijn.",
              en: "A digital loyalty card or customer pass with points and offers, instead of stamp cards that disappear into a drawer. You finally see who your regulars are.",
            },
            service: "web-apps-portals-apps",
            application: "ledenportaal-loyaliteit",
          },
          {
            title: { nl: "Feestdagbestellingen automatisch bevestigd", en: "Holiday orders confirmed automatically" },
            text: {
              nl: "Een bevestiging, een herinnering aan het afhaalmoment en een seintje als iets uitverkocht is, allemaal automatisch. Rond de feestdagen scheelt dat jou en je personeel veel telefoontjes.",
              en: "A confirmation, a reminder of the pick-up time and a heads-up when something sells out, all automatic. Around the holidays that saves you and your staff a lot of calls.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Je ambacht in beeld", en: "Your craft on camera" },
            text: {
              nl: "Korte video's van het bakken, uitbenen of kaas keren, vroeg in de ochtend in je eigen werkplaats. Dat is het verhaal waarvoor klanten bij jou komen.",
              en: "Short videos of baking, butchering or turning cheeses, early in the morning in your own workshop. That is the story customers come to you for.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
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
          {
            q: { nl: "Werkt een digitale spaarkaart voor een bakkerij of slagerij?", en: "Does a digital loyalty card work for a bakery or butcher?" },
            a: {
              nl: "Vaak wel, mits het simpel blijft. Een klant wil aan de kassa niet eerst een app downloaden en een account maken. Een pas in de wallet van je telefoon of een spaarprogramma gekoppeld aan je kassasysteem werkt dan prettiger. Met een [[ledenportaal-loyaliteit|digitale spaarkaart]] beloon je vaste klanten en weet je ook wie ze zijn, zodat je ze bijvoorbeeld op tijd kunt herinneren aan de kerstbestelling.",
              en: "Often, yes, as long as it stays simple. A customer at the till does not want to download an app and create an account first. A pass in their phone's wallet or a loyalty scheme linked to your till system works more smoothly. With a [[ledenportaal-loyaliteit|digital loyalty card]] you reward regulars and also know who they are, so you can, for example, remind them of the Christmas order in good time.",
            },
          },
          {
            q: { nl: "Wat moet er op de website van een bakkerij, slagerij of delicatessenzaak?", en: "What should a bakery, butcher or deli website include?" },
            a: {
              nl: "Vooral wat klanten willen weten voordat ze komen: openingstijden, ook op feestdagen, je assortiment en specialiteiten, de bestelservice en waar je kunt parkeren. Vermeld ook hoe klanten informatie over allergenen krijgen. Echte foto's van je winkel en je mensen doen meer dan stockbeelden van croissants. Een [[webflow-website|website]] die je zelf bijhoudt, maakt het makkelijk om de weekactie of het kerstassortiment snel online te zetten.",
              en: "Mainly what customers want to know before they come: opening hours, including holidays, your range and specialities, the ordering service and where to park. Also mention how customers can get allergen information. Real photos of your shop and your people do more than stock images of croissants. A [[webflow-website|website]] you update yourself makes it easy to put the weekly offer or the Christmas range online quickly.",
            },
          },
          {
            q: { nl: "Hoe laat je je ambacht zien op social media?", en: "How do you show your craft on social media?" },
            a: {
              nl: "Door mensen mee te nemen achter de toonbank. Het eerste brood uit de oven, de slager die een rollade bindt of de kaasspecialist die een kaas aansnijdt: dat zijn beelden die niemand wegscrolt. [[social-video|Korte video's]] van een paar seconden zijn genoeg, gefilmd met een telefoon in goed licht. Met een vast ritme, bijvoorbeeld twee keer per week, wordt het een gewoonte in plaats van een extra klus.",
              en: "By taking people behind the counter. The first loaf out of the oven, the butcher tying a roast or the cheesemonger cutting a wheel: those are images nobody scrolls past. [[social-video|Short videos]] of a few seconds are enough, filmed on a phone in good light. With a steady rhythm, for example twice a week, it becomes a habit instead of an extra chore.",
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
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Website met je arrangementen", en: "A website with your packages" },
            text: {
              nl: "Je arrangementen, seizoensmenu's en foto's van echte events op een site die je zelf bijhoudt, met een aanvraagformulier dat meteen de juiste vragen stelt.",
              en: "Your packages, seasonal menus and photos of real events on a site you update yourself, with an enquiry form that asks the right questions straight away.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Gevonden op 'foodtruck huren'", en: "Found for 'food truck hire'" },
            text: {
              nl: "Pagina's per type feest en regio, zodat organisatoren je vinden als ze zoeken op 'foodtruck huren' of 'catering bruiloft' met hun plaats erbij.",
              en: "Pages per type of party and region, so organisers find you when they search for 'food truck hire' or 'wedding catering' plus their town.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Een naam en logo die blijven hangen", en: "A name and logo that stick" },
            text: {
              nl: "Een korte naam en een logo dat op twintig meter afstand leesbaar is, op je truck, je schort en het kleine rondje op Instagram.",
              en: "A short name and a logo that is legible from twenty metres away, on your truck, your apron and the little circle on Instagram.",
            },
            service: "branding-rebranding",
            application: "logo-ontwerp",
          },
          {
            title: { nl: "Overzicht van events en personeel", en: "An overview of events and staff" },
            text: {
              nl: "Eén overzicht van bevestigde events, menu's, aantallen en wie er werkt, gevoed door je aanvraagformulier. Geen briefjes meer op het dashboard van de truck.",
              en: "One overview of confirmed events, menus, numbers and who is working, fed by your enquiry form. No more notes stuck to the dashboard of the truck.",
            },
            service: "web-apps-portals-apps",
            application: "dashboards",
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
          {
            q: { nl: "Hoe word je als cateraar of foodtruck gevonden in je regio?", en: "How does a caterer or food truck get found in its region?" },
            a: {
              nl: "Organisatoren zoeken vaak op een combinatie van gelegenheid en plaats: 'catering bedrijfsfeest Den Bosch' of 'foodtruck huren Eindhoven'. Een pagina per type event en per regio, met foto's van eerdere klussen in de buurt, sluit daarop aan. Daarnaast is een compleet Google Bedrijfsprofiel met reviews belangrijk. Met [[lokale-seo|lokale SEO]] word je gevonden door mensen in je eigen werkgebied, en niet door iemand die net te ver weg woont.",
              en: "Organisers often search for a combination of occasion and place: 'company party catering Den Bosch' or 'food truck hire Eindhoven'. A page per type of event and per region, with photos of previous jobs nearby, matches that. A complete Google Business Profile with reviews matters too. With [[lokale-seo|local SEO]] you get found by people within your own service area, not by someone who lives just too far away.",
            },
          },
          {
            q: { nl: "Hoe houd je overzicht als de aanvragen binnenstromen?", en: "How do you keep track when enquiries come pouring in?" },
            a: {
              nl: "Laat elke aanvraag op dezelfde plek binnenkomen, met datum, aantal gasten, locatie en menu al ingevuld. In een eenvoudig [[dashboards|planningsoverzicht]] zie je welke data vol zitten, wat er bevestigd is en wie er moet werken. Met [[workflow-automatisering|automatische bevestigingen]] en herinneringen weet de klant ook waar hij aan toe is. Zo voorkom je dubbele boekingen op die ene drukke zaterdag in juni.",
              en: "Have every enquiry come in in the same place, with date, number of guests, venue and menu already filled in. In a simple [[dashboards|planning overview]] you see which dates are full, what is confirmed and who needs to work. With [[workflow-automatisering|automatic confirmations]] and reminders the customer knows where they stand too. That way you avoid double bookings on that one busy Saturday in June.",
            },
          },
          {
            q: { nl: "Hoe vraag je reviews na een event en wat doe je ermee?", en: "How do you ask for reviews after an event, and what do you do with them?" },
            a: {
              nl: "Vraag het een dag na het feest, als de herinnering nog vers is, met een directe link naar je Google-profiel. Een korte automatische [[e-mailmarketing|mail]] regelt dat, zodat je het in de drukte van het seizoen niet vergeet. Zet de mooiste reviews op je website, bij het arrangement waar ze over gaan. Een organisator die twijfelt, leest liever wat een ander bruidspaar zegt dan wat jij over jezelf zegt.",
              en: "Ask the day after the party, while the memory is fresh, with a direct link to your Google profile. A short automatic [[e-mailmarketing|email]] takes care of it, so you do not forget in the rush of the season. Put the best reviews on your website, next to the package they are about. An organiser who is hesitating would rather read what another couple says than what you say about yourself.",
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
          {
            title: { nl: "Klantenkaart online en in de winkel", en: "A loyalty card online and in store" },
            text: {
              nl: "Een digitaal loyaliteitsprogramma dat online en aan de kassa werkt, gekoppeld aan je kassasysteem. Zo weet je eindelijk wie je vaste klanten zijn en wat ze kopen.",
              en: "A digital loyalty programme that works online and at the till, linked to your point-of-sale system. You finally know who your regulars are and what they buy.",
            },
            service: "web-apps-portals-apps",
            application: "ledenportaal-loyaliteit",
          },
          {
            title: { nl: "Nieuwsbrief met events in de winkel", en: "A newsletter with in-store events" },
            text: {
              nl: "Een nieuwsbrief met nieuwe collecties, workshops en events in de winkel, met aparte mails voor vaste klanten en voor nieuwe inschrijvers.",
              en: "A newsletter with new collections, workshops and in-store events, with separate emails for regular customers and for new subscribers.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Sfeerbeelden van je winkel", en: "Atmosphere shots of your store" },
            text: {
              nl: "Foto's van je winkel, je producten en de mensen erachter, in één stijl voor je webshop, Instagram en je Google Bedrijfsprofiel.",
              en: "Photos of your store, your products and the people behind them, in one style for your web shop, Instagram and your Google Business Profile.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Lokale campagnes rond je winkel", en: "Local campaigns around your store" },
            text: {
              nl: "Advertenties voor mensen binnen een paar kilometer van je winkel, rond een nieuwe collectie of je volgende event, zodat online aandacht leidt naar je deur.",
              en: "Ads for people within a few kilometres of your store, around a new collection or your next event, so online attention leads to your door.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
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
          {
            q: { nl: "Hoe zorg je dat elke vestiging van een keten hetzelfde merk uitstraalt?", en: "How do you make every branch of a chain carry the same brand?" },
            a: {
              nl: "Met heldere afspraken en goede templates. Een praktisch [[brandbook|brandbook]] legt vast hoe logo, kleuren, foto's en toon werken, met voorbeelden van wat wel en niet kan. Daarnaast helpen kant-en-klare sjablonen voor posters, social posts en prijskaartjes, zodat een filiaalmanager zelf iets maakt dat klopt. Zo blijft het merk herkenbaar, ook als elke vestiging zijn eigen lokale acties doet.",
              en: "With clear agreements and good templates. A practical [[brandbook|brand book]] sets out how logo, colours, photos and tone work, with examples of what does and does not work. Ready-made templates for posters, social posts and price tags help too, so a store manager can create something that is right. That way the brand stays recognisable, even when each branch runs its own local promotions.",
            },
          },
          {
            q: { nl: "Heeft een winkel een loyaliteitsprogramma nodig?", en: "Does a shop need a loyalty programme?" },
            a: {
              nl: "Niet altijd, maar het kan veel opleveren als je vaste klanten hebt die vaak terugkomen. Het grootste voordeel is vaak niet de korting, maar dat je weet wie je klanten zijn en ze persoonlijk kunt uitnodigen. Een [[ledenportaal-loyaliteit|loyaliteitsprogramma]] gekoppeld aan je kassa en webshop werkt online en in de winkel hetzelfde. Begin simpel, met een paar voordelen die klanten echt waarderen, en bouw uit als het aanslaat.",
              en: "Not always, but it can deliver a lot if you have regulars who come back often. The biggest benefit is often not the discount, but knowing who your customers are and being able to invite them personally. A [[ledenportaal-loyaliteit|loyalty programme]] linked to your till and web shop works the same online and in store. Start simple, with a few perks customers really value, and expand when it catches on.",
            },
          },
          {
            q: { nl: "Hoe trek je met online campagnes meer mensen naar je winkel?", en: "How do you draw more people into your store with online campaigns?" },
            a: {
              nl: "Door lokaal te adverteren met een reden om te komen: een nieuwe collectie, een workshop, een event of een product dat je alleen in de winkel hebt. Met [[meta-ads|Meta Ads]] bereik je mensen in een straal rond je winkel, en met [[google-ads|Google Ads]] mensen die al zoeken naar wat je verkoopt. Koppel dat aan een goed Google Bedrijfsprofiel met route en openingstijden, zodat de stap naar je deur klein is.",
              en: "By advertising locally with a reason to come: a new collection, a workshop, an event or a product you only have in store. With [[meta-ads|Meta Ads]] you reach people within a radius of your shop, and with [[google-ads|Google Ads]] people who are already searching for what you sell. Combine that with a good Google Business Profile with directions and opening hours, so the step to your door is small.",
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
            service: "automation-funnels",
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
          {
            title: { nl: "Overstappen zonder je posities te verliezen", en: "Switching platforms without losing rankings" },
            text: {
              nl: "Van WooCommerce naar Shopify of andersom, met redirects, productdata en reviews netjes meeverhuisd, zodat je zo min mogelijk vindbaarheid verliest.",
              en: "From WooCommerce to Shopify or the other way round, with redirects, product data and reviews moved over neatly, so you lose as little visibility as possible.",
            },
            service: "websites-webshops",
            application: "website-migratie",
          },
          {
            title: { nl: "Productfoto's in één vaste stijl", en: "Product photos in one consistent style" },
            text: {
              nl: "Packshots, detailfoto's en sfeerbeelden in één vaste stijl, zodat je hele catalogus er verzorgd uitziet en klanten minder twijfelen over wat ze krijgen.",
              en: "Packshots, detail shots and lifestyle images in one consistent style, so your whole catalogue looks well cared for and customers have fewer doubts about what they get.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Categoriepagina's die gevonden worden", en: "Category pages that get found" },
            text: {
              nl: "Snelle, goed gestructureerde categorie- en filterpagina's met structured data, zodat Google je assortiment begrijpt en de juiste pagina's laat zien.",
              en: "Fast, well-structured category and filter pages with structured data, so Google understands your range and shows the right pages.",
            },
            service: "seo-aeo-geo",
            application: "technische-seo",
          },
          {
            title: { nl: "Een merk dat niet op prijs concurreert", en: "A brand beyond the lowest price" },
            text: {
              nl: "Voor D2C-merken: een scherp verhaal en een herkenbare stijl, van website tot unboxing, zodat klanten voor jou kiezen en niet alleen voor de laagste prijs.",
              en: "For D2C brands: a sharp story and a recognisable style, from website to unboxing, so customers choose you and not just the lowest price.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
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
          {
            q: { nl: "Shopify of WooCommerce: wat past bij mijn webshop?", en: "Shopify or WooCommerce: which suits my web shop?" },
            a: {
              nl: "Allebei prima platforms, met een ander karakter. Shopify is overzichtelijk, stabiel en snel live, met vaste maandkosten en apps voor extra functies. WooCommerce draait op WordPress, geeft meer vrijheid in maatwerk en content, maar vraagt meer onderhoud. We kijken naar je assortiment, je koppelingen en wie de [[webshop|webshop]] dagelijks beheert, en adviseren wat het beste past. Geen voorkeur uit gewoonte, wel een eerlijke keuze.",
              en: "Both are fine platforms, with a different character. Shopify is clear, stable and quick to launch, with fixed monthly costs and apps for extra features. WooCommerce runs on WordPress and gives more freedom in custom work and content, but needs more maintenance. We look at your range, your integrations and who manages the [[webshop|web shop]] day to day, and advise what fits best. No preference out of habit, just an honest choice.",
            },
          },
          {
            q: { nl: "Hoe migreer je een webshop zonder je Google-posities kwijt te raken?", en: "How do you migrate a web shop without losing your Google rankings?" },
            a: {
              nl: "Door het te behandelen als een verhuizing met een inventarislijst. Eerst brengen we alle bestaande URL's, producten, categorieën en reviews in kaart. Bij de [[website-migratie|migratie]] krijgt elke oude pagina een redirect naar de juiste nieuwe, en nemen we titels, teksten en structured data mee. Na livegang controleren we met [[technische-seo|technische SEO]] of Google alles goed oppakt. Een kleine dip in de eerste weken is normaal; met een goede voorbereiding beperk je de kans op een grote val.",
              en: "By treating it like a house move with an inventory list. First we map all existing URLs, products, categories and reviews. During the [[website-migratie|migration]] every old page gets a redirect to the right new one, and we carry over titles, copy and structured data. After launch we use [[technische-seo|technical SEO]] checks to see whether Google picks everything up properly. A small dip in the first weeks is normal; good preparation limits the risk of a big drop.",
            },
          },
          {
            q: { nl: "Hoe bouw je als D2C-merk een merk dat niet alleen op prijs concurreert?", en: "How does a D2C brand build a brand that does not compete on price alone?" },
            a: {
              nl: "Door een reden te geven om voor jou te kiezen die niets met korting te maken heeft. Een duidelijk verhaal over waar je product vandaan komt, voor wie het is en wat je anders doet, vertaald in een [[merkstrategie|merkstrategie]] die je overal terugziet. De unboxing is daarbij je eerste fysieke contact met de klant: een doordacht [[verpakkingsontwerp|verpakkingsontwerp]] maakt dat moment het delen waard. Wie je merk herkent, vergelijkt minder snel op prijs.",
              en: "By giving a reason to choose you that has nothing to do with discounts. A clear story about where your product comes from, who it is for and what you do differently, translated into a [[merkstrategie|brand strategy]] you see everywhere. The unboxing is your first physical contact with the customer: well-considered [[verpakkingsontwerp|packaging design]] makes that moment worth sharing. People who recognise your brand are less quick to compare on price.",
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
            service: "automation-funnels",
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
          {
            title: { nl: "Klantportaal voor stukken en rapportages", en: "A client portal for documents and reports" },
            text: {
              nl: "Klanten uploaden stukken, keuren jaarrekeningen goed en vinden hun rapportages op één veilige plek, in plaats van in een mailbox vol bijlagen.",
              en: "Clients upload documents, approve annual accounts and find their reports in one secure place, instead of in an inbox full of attachments.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
          {
            title: { nl: "Echte gezichten, geen stockfoto's", en: "Real faces, not stock photos" },
            text: {
              nl: "Portretten van je adviseurs en een korte kantoorfilm, zodat ondernemers zien met wie ze straks aan tafel zitten. Een accountant kies je ook op klik.",
              en: "Portraits of your advisers and a short office film, so business owners see who they will be sitting down with. People choose an accountant on rapport too.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
          {
            title: { nl: "Website met diensten per doelgroep", en: "A website with services per audience" },
            text: {
              nl: "Een overzichtelijke site met pagina's voor zzp'ers, mkb en specifieke branches, een heldere uitleg van je werkwijze en tarieven en een kort intakeformulier.",
              en: "A clear site with pages for freelancers, SMEs and specific industries, a plain explanation of how you work and charge, and a short intake form.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Check: eenmanszaak of bv?", en: "Check: sole trader or company?" },
            text: {
              nl: "Een korte check die ondernemers helpt bij vragen als 'eenmanszaak of bv?' of 'moet ik btw rekenen?', met de uitkomst als opstap naar een gesprek.",
              en: "A short check that helps business owners with questions like 'sole trader or limited company?' or 'do I need to charge VAT?', with the outcome as a step towards a conversation.",
            },
            service: "configurators-lead-tools-widgets",
            application: "check-tools",
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
          {
            q: { nl: "Hoe trek je als accountantskantoor nieuwe klanten aan in de regio?", en: "How does an accounting firm attract new clients in its region?" },
            a: {
              nl: "Veel ondernemers zoeken een accountant dichtbij, iemand die ze kunnen bellen en die de lokale markt kent. Een compleet Google Bedrijfsprofiel met reviews, een pagina per vestiging en pagina's per doelgroep, zoals 'boekhouder voor zzp'ers in Oss' of 'accountant agrarisch Uden', sluiten daarop aan. Met [[lokale-seo|lokale SEO]] word je gevonden op het moment dat iemand een nieuwe accountant zoekt. Een goede doorverwijzing blijft goud waard, maar ook dan zoeken mensen je eerst even op.",
              en: "Many business owners look for an accountant nearby, someone they can call who knows the local market. A complete Google Business Profile with reviews, a page per office and pages per audience, such as 'bookkeeper for freelancers in Oss' or 'agricultural accountant Uden', match that. With [[lokale-seo|local SEO]] you get found at the moment someone is looking for a new accountant. A good referral is still worth its weight in gold, but even then people look you up first.",
            },
          },
          {
            q: { nl: "Kunnen klanten hun stukken en jaarrekeningen in een eigen portaal vinden?", en: "Can clients find their documents and annual accounts in a portal of their own?" },
            a: {
              nl: "Ja. Veel praktijksoftware heeft al een klantomgeving, en die koppelen we dan aan je website en processen. Zijn er wensen die standaardsoftware niet dekt, dan bouwen we een [[klantportaal|klantportaal]] op maat: stukken aanleveren, akkoord geven, rapportages inzien en berichten uitwisselen op één veilige plek. Belangrijk is dat het voor klanten simpel blijft, ook voor wie er maar één keer per jaar inlogt.",
              en: "Yes. A lot of practice software already has a client environment, and then we connect it to your website and processes. If you have wishes standard software does not cover, we build a custom [[klantportaal|client portal]]: submitting documents, giving approval, viewing reports and exchanging messages in one secure place. What matters is that it stays simple for clients, including those who log in only once a year.",
            },
          },
          {
            q: { nl: "Wat kan AI concreet doen voor een administratiekantoor?", en: "What can AI concretely do for a bookkeeping office?" },
            a: {
              nl: "Vooral het sorteerwerk. Een [[ai-agents|AI-agent]] herkent binnenkomende facturen, bonnetjes en vragen, zet ze klaar bij de juiste medewerker en maakt een eerste concept voor een antwoord. Een medewerker controleert altijd voordat er iets naar een klant gaat. Maak wel afspraken over welke gegevens waar worden verwerkt, in lijn met de AVG. Zo wint je team tijd voor het advieswerk waar klanten echt voor komen.",
              en: "Mainly the sorting work. An [[ai-agents|AI agent]] recognises incoming invoices, receipts and questions, gets them ready for the right staff member and drafts a first reply. A staff member always checks before anything goes to a client. Do agree on which data is processed where, in line with the GDPR. That way your team gains time for the advisory work clients really come for.",
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
          {
            title: { nl: "Rechtsvragen in gewone taal", en: "Legal questions in plain language" },
            text: {
              nl: "Artikelen over ontslag, erfrecht of het oprichten van een bv die de eerste vragen beantwoorden, zodat iemand al wat rustiger bij je aan tafel komt.",
              en: "Articles about dismissal, inheritance law or setting up a company that answer the first questions, so someone arrives at your table a little calmer.",
            },
            service: "content-marketing-online-ads",
            application: "copywriting-blogs",
          },
          {
            title: { nl: "Online intake die goed doorverwijst", en: "An online intake that routes correctly" },
            text: {
              nl: "Een intakeformulier dat de situatie uitvraagt en de aanvraag automatisch bij de juiste specialist of vestiging neerlegt, met een bevestiging voor de cliënt.",
              en: "An intake form that asks about the situation and automatically routes the request to the right specialist or office, with a confirmation for the client.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Website met rust en overzicht", en: "A website with calm and clarity" },
            text: {
              nl: "Heldere ingangen voor particulieren en ondernemers, een goede zoekfunctie en per rechtsgebied de juiste contactpersoon, op een site die ook op een telefoon rustig blijft.",
              en: "Clear entry points for individuals and businesses, good search and the right contact person per area of law, on a site that stays calm on a phone too.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Portretten en een kantoorfilm", en: "Portraits and an office film" },
            text: {
              nl: "Professionele portretten en een korte film van je kantoor en mensen, zodat de eerste kennismaking al online begint en niet pas bij de receptie.",
              en: "Professional portraits and a short film of your office and people, so the first introduction starts online, not at the reception desk.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
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
          {
            q: { nl: "Hoe trek je als advocaten- of notariskantoor jonge juristen aan?", en: "How does a law or notary firm attract young lawyers?" },
            a: {
              nl: "Door eerlijk te laten zien hoe het werk eruitziet: welke zaken, hoeveel begeleiding, hoe je met werkdruk omgaat en welke ruimte er is om te groeien. Jonge juristen vergelijken kantoren kritisch en lezen tussen de regels door. Met [[employer-branding|employer branding]] maken we een werkenbij-pagina met verhalen van je eigen kandidaat-notarissen of advocaat-stagiairs, en vacatureteksten die niet klinken als een standaardtemplate. Een snelle, persoonlijke reactie op een sollicitatie doet de rest.",
              en: "By honestly showing what the work looks like: which cases, how much guidance, how you handle workload and what room there is to grow. Young lawyers compare firms critically and read between the lines. With [[employer-branding|employer branding]] we create a careers page with stories from your own trainee notaries or associates, and job ads that do not sound like a standard template. A quick, personal reply to an application does the rest.",
            },
          },
          {
            q: { nl: "Mag een advocaat of notaris online adverteren?", en: "Are lawyers and notaries allowed to advertise online?" },
            a: {
              nl: "Ja, binnen de regels van je beroepsgroep, zoals die van de NOvA voor advocaten en de KNB voor notarissen. Reclame moet onder meer eerlijk en niet misleidend zijn, en je blijft zelf verantwoordelijk voor wat je belooft. Binnen die grenzen werkt [[google-ads|Google Ads]] goed voor rechtsgebieden waarop mensen met een concrete vraag zoeken, zoals echtscheiding of een testament. We stemmen de teksten met je af en houden ze zakelijk en feitelijk.",
              en: "Yes, within the rules of your profession, such as those of the Dutch Bar Association for lawyers and the Royal Dutch Association of Civil-law Notaries for notaries. Advertising must, among other things, be honest and not misleading, and you remain responsible for what you promise. Within those limits, [[google-ads|Google Ads]] works well for areas of law people search for with a concrete question, such as divorce or a will. We agree the copy with you and keep it businesslike and factual.",
            },
          },
          {
            q: { nl: "Hoe ga je als juridisch kantoor zorgvuldig om met privacy op je website?", en: "How does a legal firm handle privacy carefully on its website?" },
            a: {
              nl: "Vraag in formulieren alleen wat je echt nodig hebt om iemand terug te bellen, en laat gevoelige details pas later en via een veilig kanaal delen. Losse bijlagen via gewone e-mail zijn voor dossierstukken geen goed idee. Een beveiligd [[klantportaal|cliëntportaal]] voor het uitwisselen van documenten, met inloggen in twee stappen, is dan een stuk netter. En zorg voor een duidelijke privacyverklaring en cookie-instellingen die doen wat ze beloven.",
              en: "In forms, ask only for what you really need to call someone back, and have sensitive details shared later through a secure channel. Loose attachments via ordinary email are not a good idea for case files. A secure [[klantportaal|client portal]] for exchanging documents, with two-step login, is a lot tidier. And make sure you have a clear privacy statement and cookie settings that do what they promise.",
            },
          },
          {
            q: { nl: "Wat moet er op de website van een mediator of juridisch adviseur?", en: "What should a mediator's or legal adviser's website include?" },
            a: {
              nl: "Vooral rust en duidelijkheid. Leg uit hoe je werkt, hoe een traject verloopt, wat het ongeveer kost en wanneer iemand bij jou aan het goede adres is. Een persoonlijke foto en een paar zinnen over jezelf zijn belangrijk, want mensen kiezen een mediator op vertrouwen. Een compacte [[webflow-website|website]] met een agendalink voor een kennismakingsgesprek is vaak genoeg. Liever vijf heldere pagina's dan twintig die niemand leest.",
              en: "Above all calm and clarity. Explain how you work, how a process unfolds, roughly what it costs and when someone has come to the right place. A personal photo and a few lines about yourself matter, because people choose a mediator on trust. A compact [[webflow-website|website]] with a calendar link for an introductory call is often enough. Better five clear pages than twenty nobody reads.",
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
          {
            title: { nl: "Positionering in één zin", en: "Positioning in one sentence" },
            text: {
              nl: "Een scherpe keuze voor wie je werkt en wat je anders doet, vertaald naar een propositie die je op een verjaardag in één zin uitlegt.",
              en: "A sharp choice about who you work for and what you do differently, turned into a proposition you can explain in one sentence at a birthday party.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Genoemd in AI-antwoorden", en: "Mentioned in AI answers" },
            text: {
              nl: "Artikelen, cases en een 'over'-pagina die AI-assistenten snappen, zodat je meer kans maakt genoemd te worden als iemand ChatGPT om een adviseur in jouw vak vraagt.",
              en: "Articles, cases and an 'about' page that AI assistants understand, so you stand a better chance of being mentioned when someone asks ChatGPT for an adviser in your field.",
            },
            service: "seo-aeo-geo",
            application: "geo",
          },
          {
            title: { nl: "Opvolging na een webinar of download", en: "Follow-up after a webinar or download" },
            text: {
              nl: "Wie je gids downloadde of een webinar volgde, krijgt een paar goede mails die laten zien hoe je denkt, met een agendalink voor een kennismaking.",
              en: "Anyone who downloaded your guide or attended a webinar gets a few good emails that show how you think, with a calendar link for an introductory call.",
            },
            service: "automation-funnels",
            application: "lead-nurturing",
          },
          {
            title: { nl: "AI in je eigen adviespraktijk", en: "AI in your own advisory practice" },
            text: {
              nl: "Een praktische workshop over AI voor analyses, rapportages en voorstellen, zodat jij en je team tijd winnen zonder dat de kwaliteit eronder lijdt.",
              en: "A practical workshop on AI for analyses, reports and proposals, so you and your team save time without the quality suffering.",
            },
            service: "ai-consultancy",
            application: "ai-workshops",
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
          {
            q: { nl: "Hoe word je als adviseur genoemd door ChatGPT of Google AI?", en: "How does an adviser get mentioned by ChatGPT or Google's AI?" },
            a: {
              nl: "Zekerheid bestaat niet, maar je kunt de kans wel vergroten. AI-assistenten halen hun antwoorden uit bronnen die helder, specifiek en betrouwbaar zijn. Denk aan artikelen die één vraag goed beantwoorden, cases met een concrete aanpak, een duidelijke 'over'-pagina en vermeldingen op andere sites in je vakgebied. Met [[geo|GEO]] zorgen we dat je content zo is opgebouwd dat zoekmachines en AI-tools snappen wie je bent en waar je goed in bent.",
              en: "There are no guarantees, but you can increase your chances. AI assistants draw their answers from sources that are clear, specific and trustworthy. Think of articles that answer one question well, cases with a concrete approach, a clear 'about' page and mentions on other sites in your field. With [[geo|GEO]] we make sure your content is structured so that search engines and AI tools understand who you are and what you are good at.",
            },
          },
          {
            q: { nl: "Hoe maak je een propositie die opdrachtgevers meteen snappen?", en: "How do you create a proposition clients understand straight away?" },
            a: {
              nl: "Door te kiezen, en dat is voor veel adviseurs het lastigste deel. Voor wie werk je, welk probleem los je op en waarom ben jij daar beter in dan de rest? Als dat in één zin past, kun je het overal herhalen: op je website, je LinkedIn-profiel en in je offerte. In een [[merkstrategie|positioneringstraject]] werken we dat samen uit, in een paar sessies met een helder resultaat. Het betekent geen nee tegen ander werk, alleen ja tegen het juiste.",
              en: "By choosing, and for many advisers that is the hardest part. Who do you work for, which problem do you solve and why are you better at it than the rest? If that fits in one sentence, you can repeat it everywhere: on your website, your LinkedIn profile and in your proposal. In a [[merkstrategie|positioning process]] we work that out together, in a few sessions with a clear outcome. It does not mean saying no to other work, just yes to the right work.",
            },
          },
          {
            q: { nl: "Hoe zet je AI in als consultant zonder je vak uit handen te geven?", en: "How do you use AI as a consultant without handing over your craft?" },
            a: {
              nl: "Gebruik AI voor het voorwerk en houd het oordeel bij jezelf. Denk aan het samenvatten van interviews, een eerste opzet voor een rapport, het ordenen van data of het voorbereiden van een workshop. Spreek af welke klantinformatie wel en niet in een AI-tool mag. In een [[ai-workshops|AI-workshop]] oefenen we met jouw eigen werk, zodat je team na afloop weet wat het morgen anders doet.",
              en: "Use AI for the groundwork and keep the judgement to yourself. Think of summarising interviews, a first outline for a report, organising data or preparing a workshop. Agree which client information can and cannot go into an AI tool. In an [[ai-workshops|AI workshop]] we practise with your own work, so your team knows afterwards what it will do differently tomorrow.",
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
            service: "automation-funnels",
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
          {
            title: { nl: "Vacaturesite voor snel solliciteren", en: "A job site for quick applications" },
            text: {
              nl: "Een snelle site met filters op functie, regio en uren, vacatures die automatisch uit je ATS komen en een sollicitatie die op een telefoon in twee minuten klaar is.",
              en: "A fast site with filters on role, region and hours, vacancies that flow in automatically from your ATS and an application that takes two minutes on a phone.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Een eigen gezicht tussen alle bureaus", en: "Standing out among the agencies" },
            text: {
              nl: "Waarom kiest een kandidaat of werkgever voor jouw bureau? Een scherpe positionering per vakgebied of regio maakt je herkenbaar tussen alle andere.",
              en: "Why would a candidate or employer choose your agency? A sharp positioning per field or region makes you recognisable among all the others.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Welke functie past bij mij?", en: "Which role suits me?" },
            text: {
              nl: "Een korte vragenlijst waarmee kandidaten ontdekken welke functies bij hen passen, met een profiel dat direct in je CRM komt bij de juiste consultant.",
              en: "A short questionnaire that helps candidates discover which roles suit them, with a profile that goes straight into your CRM for the right consultant.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "AI die cv's samenvat", en: "AI that summarises CVs" },
            text: {
              nl: "Een AI-agent die cv's samenvat en naast vacatures legt, als voorstel voor je consultant. De mens beslist, en zo richten we het ook in.",
              en: "An AI agent that summarises CVs and compares them with vacancies, as a suggestion for your consultant. A person decides, and that is how we set it up.",
            },
            service: "ai-consultancy",
            application: "ai-agents",
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
          {
            q: { nl: "Mag je AI gebruiken bij het selecteren van kandidaten?", en: "Can you use AI when selecting candidates?" },
            a: {
              nl: "Dat kan, maar met zorg. De Europese AI-verordening merkt AI-systemen voor werving en selectie aan als hoog risico, met extra eisen aan transparantie en menselijk toezicht. Laat AI daarom ondersteunen, bijvoorbeeld met samenvattingen of een eerste ordening, en laat een mens beslissen. Wees open naar kandidaten over hoe je werkt en check de details met je jurist of privacyfunctionaris. Met een [[ai-agents|AI-agent]] die zo is ingericht, win je tijd en houd je zelf de regie.",
              en: "You can, but with care. The European AI Act classifies AI systems for recruitment and selection as high risk, with extra requirements for transparency and human oversight. So let AI support, for example with summaries or a first sort, and let a person decide. Be open with candidates about how you work and check the details with your lawyer or privacy officer. With an [[ai-agents|AI agent]] set up that way, you save time and stay in control.",
            },
          },
          {
            q: { nl: "Hoe onderscheidt een uitzend- of recruitmentbureau zich van de concurrentie?", en: "How does a staffing or recruitment agency stand out from the competition?" },
            a: {
              nl: "Door te kiezen waar je echt goed in bent: een vakgebied, een regio of een type kandidaat. 'Wij verbinden mensen en werk' zegt bijna elk bureau, 'Wij vinden monteurs en technici in Noord-Brabant' blijft hangen. Met een scherpe [[merkstrategie|positionering]] en een website die dat laat zien, met echte plaatsingen en gezichten, word je de logische keuze in je niche.",
              en: "By choosing what you are truly good at: a field, a region or a type of candidate. 'We connect people and work' is what almost every agency says; 'We find mechanics and technicians in North Brabant' sticks. With a sharp [[merkstrategie|positioning]] and a website that shows it, with real placements and faces, you become the obvious choice in your niche.",
            },
          },
          {
            q: { nl: "Hoe bereikt een arbodienst of HR-dienstverlener werkgevers?", en: "How does an occupational health or HR service provider reach employers?" },
            a: {
              nl: "Met kennis die werkgevers helpt bij hun dagelijkse vragen: verzuim, re-integratie, de Wet verbetering poortwachter of een lastig gesprek met een medewerker. Heldere [[seo-content|kennisartikelen]] worden gevonden op het moment dat een ondernemer ermee zit. Met [[linkedin-ads|LinkedIn Ads]] bereik je daarnaast gericht HR-managers en directeuren in je regio. Een nuttige checklist of webinar is vaak een betere eerste stap dan een offerteaanvraag.",
              en: "With knowledge that helps employers with their day-to-day questions: absenteeism, reintegration, the Dutch Gatekeeper Improvement Act or a difficult conversation with an employee. Clear [[seo-content|knowledge articles]] get found at the moment a business owner is dealing with it. With [[linkedin-ads|LinkedIn Ads]] you also reach HR managers and directors in your region in a targeted way. A useful checklist or webinar is often a better first step than a quote request.",
            },
          },
          {
            q: { nl: "Hoe maak je solliciteren zo makkelijk mogelijk?", en: "How do you make applying as easy as possible?" },
            a: {
              nl: "Vraag aan het begin zo weinig mogelijk: naam, telefoonnummer en eventueel een cv of LinkedIn-profiel. Een motivatiebrief kan later, in het gesprek. Zorg dat het formulier op een telefoon werkt en dat de kandidaat direct een bevestiging krijgt met wat er nu gebeurt. Met [[conversie-optimalisatie|conversie-optimalisatie]] meten we waar mensen afhaken en testen we verbeteringen, zodat je minder kandidaten halverwege het formulier kwijtraakt.",
              en: "Ask for as little as possible at the start: name, phone number and possibly a CV or LinkedIn profile. A cover letter can come later, in the conversation. Make sure the form works on a phone and that the candidate gets an immediate confirmation of what happens next. With [[conversie-optimalisatie|conversion optimisation]] we measure where people drop off and test improvements, so you lose fewer candidates halfway through the form.",
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
              nl: "Opdrachtgevers zien openstaande, geïnde en lopende dossiers in één rustig overzicht, met de volgende stap erbij. Geen handmatige rapportages meer.",
              en: "Clients see outstanding, collected and running cases in one calm overview, with the next step alongside. No more manual reports.",
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
          {
            title: { nl: "Betalingsherinneringen die werken", en: "Payment reminders that work" },
            text: {
              nl: "Een reeks herinneringen per mail en sms in heldere taal, op vaste momenten en met een betaallink, die vanzelf stopt zodra er betaald is.",
              en: "A series of email and text reminders in plain language, at fixed moments and with a payment link, that stops by itself as soon as payment comes in.",
            },
            service: "automation-funnels",
            application: "workflow-automatisering",
          },
          {
            title: { nl: "Uitleg die ondernemers vinden", en: "Explanations business owners find" },
            text: {
              nl: "Heldere artikelen over aanmanen, incassokosten en de veertiendagenbrief, die ondernemers in Google en AI-tools vinden op het moment dat ze met een onbetaalde factuur zitten.",
              en: "Clear articles about reminders, collection costs and the Dutch fourteen-day letter, which business owners find in Google and AI tools when they are stuck with an unpaid invoice.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Twee routes op één website", en: "Two routes on one website" },
            text: {
              nl: "Een duidelijke ingang voor opdrachtgevers die een vordering willen overdragen, en één voor debiteuren die willen betalen, een regeling willen of een vraag hebben.",
              en: "A clear entrance for clients who want to hand over a claim, and one for debtors who want to pay, arrange a payment plan or ask a question.",
            },
            service: "websites-webshops",
            application: "ux-ui-webdesign",
          },
          {
            title: { nl: "Incassokosten berekenen", en: "Calculating collection costs" },
            text: {
              nl: "Een rekenhulp die laat zien welke incassokosten volgens de wettelijke staffel gelden, met een directe link om de vordering aan je bureau over te dragen.",
              en: "A calculator that shows which collection costs apply under the statutory scale, with a direct link to hand the claim over to your agency.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
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
          {
            q: { nl: "Hoe automatiseer je betalingsherinneringen zonder klanten kwijt te raken?", en: "How do you automate payment reminders without losing customers?" },
            a: {
              nl: "Met een vriendelijke toon en een slimme volgorde. Eerst een korte herinnering met betaallink, daarna een duidelijkere aanmaning, en bij consumenten de wettelijk verplichte veertiendagenbrief voordat er incassokosten bij mogen. Met [[workflow-automatisering|automatische herinneringen]] gaat dat op vaste momenten, en stopt de reeks zodra er betaald is of een regeling loopt. Zo blijft de relatie goed en hoeft niemand met de hand lijstjes af te werken.",
              en: "With a friendly tone and a smart sequence. First a short reminder with a payment link, then a clearer reminder, and for consumers the legally required fourteen-day letter before collection costs may be added. With [[workflow-automatisering|automatic reminders]] that happens at fixed moments, and the sequence stops as soon as payment comes in or a payment plan is running. That way the relationship stays good and nobody has to work through lists by hand.",
            },
          },
          {
            q: { nl: "Hoe vindt een ondernemer met onbetaalde facturen jouw incassobureau?", en: "How does a business owner with unpaid invoices find your collection agency?" },
            a: {
              nl: "Op het moment dat hij ermee zit, en dan zoekt hij naar uitleg en een oplossing. Artikelen over aanmanen, incassokosten en wat je kunt doen als een klant niet betaalt, beantwoorden die vragen en laten zien dat je er verstand van hebt. Met [[seo-content|SEO-content]] word je daarop gevonden, in Google en in AI-tools. Voor zoekopdrachten met een directe vraag, zoals 'incassobureau inschakelen', kan [[google-ads|Google Ads]] dat aanvullen.",
              en: "At the moment they are dealing with it, and then they look for explanations and a solution. Articles about reminders, collection costs and what to do when a customer does not pay answer those questions and show you know your stuff. With [[seo-content|SEO content]] you get found on them, in Google and in AI tools. For searches with a direct need, such as 'hire a collection agency', [[google-ads|Google Ads]] can complement that.",
            },
          },
          {
            q: { nl: "Hoe ga je als incassobureau zorgvuldig om met gegevens van debiteuren?", en: "How does a collection agency handle debtor data carefully?" },
            a: {
              nl: "Door alleen te verwerken wat nodig is, en het goed te beveiligen. In een [[klantportaal|debiteurenportaal]] logt iemand veilig in en ziet hij alleen zijn eigen dossier. Medewerkers krijgen rechten die passen bij hun rol, en er wordt vastgelegd wie wat heeft ingezien of aangepast. Berichten zijn feitelijk en noemen geen gevoelige details in een onderwerpregel of sms. Zo werk je volgens de AVG en neem je debiteuren serieus.",
              en: "By processing only what is necessary, and securing it properly. In a [[klantportaal|debtor portal]] someone logs in securely and sees only their own case. Staff get permissions that match their role, and there is a record of who viewed or changed what. Messages are factual and do not mention sensitive details in a subject line or text message. That way you work in line with the GDPR and take debtors seriously.",
            },
          },
          {
            q: { nl: "Kan een AI-assistent vragen van debiteuren beantwoorden?", en: "Can an AI assistant answer questions from debtors?" },
            a: {
              nl: "Voor veelgestelde vragen wel: hoe kan ik betalen, kan het in termijnen, waarom is dit bedrag hoger dan de factuur? Een [[ai-chatbots|AI-assistent]] beantwoordt die vragen uit je eigen informatie, ook 's avonds, wanneer veel mensen pas tijd hebben. Bij een betwisting, een persoonlijke situatie of signalen van schulden zet hij het gesprek door naar een medewerker, en verwijst hij waar nodig naar schuldhulpverlening. Zo blijft het menselijk waar het moet.",
              en: "For frequently asked questions, yes: how can I pay, can I pay in instalments, why is this amount higher than the invoice? An [[ai-chatbots|AI assistant]] answers those questions from your own information, in the evening too, when many people finally have time. With a dispute, a personal situation or signs of debt problems, it hands the conversation to a staff member and points to debt counselling where needed. That way it stays human where it matters.",
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
