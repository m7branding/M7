import type { SectorSlug } from "./registry";
import type { SectorSegment, T } from "./types";

/* ============================================================
   Doelgroepen per sector (deel A): tabs met eigen FAQ's onder
   "Veelgestelde vragen" en het raster met soorten bedrijven.
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
      { nl: "Detailingstudio's", en: "Detailing studios" },
      { nl: "Car care specialisten", en: "Car care specialists" },
      { nl: "Wrap- en PPF-studio's", en: "Wrap and PPF studios" },
      { nl: "Auto-onderdelenwebshops", en: "Car parts web shops" },
      { nl: "Tuningbedrijven", en: "Tuning companies" },
      { nl: "Chiptuners", en: "ECU remapping specialists" },
      { nl: "Uitlaatspecialisten", en: "Exhaust specialists" },
      { nl: "Velgenleveranciers", en: "Wheel suppliers" },
      { nl: "Leasemaatschappijen", en: "Leasing companies" },
      { nl: "Autoverhuurbedrijven", en: "Car rental companies" },
      { nl: "Aanbieders van deelmobiliteit", en: "Shared mobility providers" },
      { nl: "Laadpaalinstallateurs", en: "EV charger installers" },
      { nl: "Rouwvervoerders", en: "Funeral car services" },
      { nl: "Trouwautoverhuurders", en: "Wedding car rentals" },
      { nl: "Oldtimerspecialisten", en: "Classic car specialists" },
      { nl: "Motorzaken", en: "Motorcycle dealers" },
      { nl: "Camper- en caravanbedrijven", en: "Motorhome and caravan dealers" },
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
          nl: "Voor sportmediabedrijven, video- en streamingplatformen, sportapps, podcasts en magazines, en de product- en redactieteams die ze elke dag beter maken.",
          en: "For sports media companies, video and streaming platforms, sports apps, podcasts and magazines, and the product and editorial teams that improve them every day.",
        },
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
      { nl: "Toernooiorganisatoren", en: "Tournament organisers" },
      { nl: "Sportevenementen", en: "Sports events" },
      { nl: "Sportbonden", en: "Sports federations" },
      { nl: "Sportbedrijven van gemeenten", en: "Municipal sports companies" },
      { nl: "Sportmediabedrijven", en: "Sports media companies" },
      { nl: "Video- en streamingplatformen", en: "Video and streaming platforms" },
      { nl: "Sportapps", en: "Sports apps" },
      { nl: "Sportpodcasts en -magazines", en: "Sports podcasts and magazines" },
      { nl: "Sportmerken", en: "Sports brands" },
      { nl: "Esportsorganisaties", en: "Esports organisations" },
      { nl: "Sportaccommodaties", en: "Sports venues" },
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
      { nl: "Startups", en: "Startups" },
      { nl: "Scale-ups", en: "Scale-ups" },
      { nl: "Softwarebedrijven", en: "Software companies" },
      { nl: "App-ontwikkelaars", en: "App developers" },
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
      { nl: "Online marktplaatsen", en: "Online marketplaces" },
      { nl: "Platformbedrijven", en: "Platform companies" },
      { nl: "Edtech-bedrijven", en: "Edtech companies" },
      { nl: "HR-techbedrijven", en: "HR tech companies" },
      { nl: "Inspectie- en compliancesoftware", en: "Inspection and compliance software" },
      { nl: "Incubators en accelerators", en: "Incubators and accelerators" },
    ],
  },

  /* ---------- E-commerce & Retail ---------- */
  "food-retail": {
    segments: [
      {
        name: { nl: "Webshops", en: "Online stores" },
        intro: {
          nl: "Voor webshops, online retailers en D2C-merken, van startende webwinkel tot gevestigde e-commercespeler, en de marketeers en e-commercemanagers erachter.",
          en: "For online stores, online retailers and D2C brands, from new web shop to established e-commerce player, and the marketers and e-commerce managers behind them.",
        },
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
            q: { nl: "Welke e-mailflows moet elke webshop hebben?", en: "Which email flows should every web shop have?" },
            a: {
              nl: "Een paar flows doen het meeste werk. Een welkomstreeks voor nieuwe inschrijvers, een herinnering bij een verlaten winkelwagen, een bedankmail met tips na de aankoop, een reviewverzoek als het product er een tijdje is, en een mail voor klanten die al een tijd niets hebben gekocht. Die zetten we op in een tool als Klaviyo, gekoppeld aan je webshop. Daarna draait je [[e-mailmarketing]] grotendeels vanzelf, en verstuur je alleen nog campagnes als je iets te melden hebt.",
              en: "A handful of flows do most of the work. A welcome series for new subscribers, a reminder for an abandoned cart, a thank-you email with tips after purchase, a review request once the product has been in use for a while, and an email for customers who have not bought anything in some time. We set those up in a tool like Klaviyo, connected to your web shop. After that, your [[e-mailmarketing|email marketing]] largely runs by itself, and you only send campaigns when you have something to say.",
            },
          },
          {
            q: { nl: "Hoe schrijf je productteksten die gevonden worden, ook door AI?", en: "How do you write product copy that gets found, by AI too?" },
            a: {
              nl: "Schrijf voor de klant, niet voor de zoekmachine, en wees specifiek. Unieke teksten in plaats van de omschrijving van de leverancier, antwoorden op vragen die klanten echt stellen, en categoriepagina's met een korte, nuttige uitleg. Technisch helpt [[structured-data|structured data]]: daarmee lezen Google en AI-assistenten prijs, voorraad, reviews en kenmerken direct uit. Bij een groot assortiment kan AI helpen met eerste versies, maar een mens checkt of het klopt en klinkt als jouw merk.",
              en: "Write for the customer, not the search engine, and be specific. Unique copy instead of the supplier's description, answers to questions customers actually ask, and category pages with a short, useful introduction. On the technical side, [[structured-data|structured data]] helps: it lets Google and AI assistants read price, stock, reviews and attributes directly. With a large range, AI can help with first drafts, but a person checks that it is correct and sounds like your brand.",
            },
          },
        ],
      },
      {
        name: { nl: "Winkels & retail", en: "Shops & retail chains" },
        intro: {
          nl: "Voor winkeliers, speciaalzaken, winkelketens en franchiseformules die hun fysieke winkel en hun online kanaal willen laten samenwerken.",
          en: "For shopkeepers, specialist retailers, retail chains and franchise formats that want their physical store and online channel to work together.",
        },
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
            q: { nl: "Hoe geef je een winkelketen of franchise één herkenbaar merk?", en: "How do you give a retail chain or franchise one recognisable brand?" },
            a: {
              nl: "Met afspraken die mensen ook echt gebruiken. Een [[brandbook]] met logo, kleuren, typografie, beeldtaal en toon, plus kant-en-klare templates voor posters, socials en folders. Franchisenemers willen lokaal kunnen communiceren, en dat mag, binnen een kader dat het merk overeind houdt. We maken het zo praktisch dat een filiaalmanager er op maandagochtend zelf een actieposter mee maakt. Zo blijft het merk herkenbaar, van de gevel in Uden tot de Instagram-post in Utrecht.",
              en: "With guidelines people actually use. A [[brandbook|brand book]] with logo, colours, typography, imagery and tone, plus ready-made templates for posters, socials and leaflets. Franchisees want to communicate locally, and they can, within a framework that keeps the brand intact. We make it so practical that a store manager can create a promo poster with it on a Monday morning. That way the brand stays recognisable, from the shopfront in Uden to the Instagram post in Utrecht.",
            },
          },
          {
            q: { nl: "Verzorgen jullie ook winkelcommunicatie zoals folders en posters?", en: "Do you also handle in-store communication like leaflets and posters?" },
            a: {
              nl: "Ja. Van actieposters en etalagestickers tot folders, kortingskaarten en schapkaartjes: we ontwerpen het in je eigen stijl en leveren het drukklaar aan bij je drukker. Goede [[flyers-posters|flyers en posters]] zijn kort, leesbaar op een paar meter afstand en hebben één boodschap. Wie in de winkel staat, heeft geen tijd voor een alinea. We stemmen online en offline op elkaar af, zodat de actie op je poster ook op je website en in je socials terugkomt.",
              en: "Yes. From promotional posters and window stickers to leaflets, discount cards and shelf labels: we design it in your own style and deliver it print-ready to your printer. Good [[flyers-posters|flyers and posters]] are short, readable from a few metres away and carry one message. Someone standing in the shop has no time for a paragraph. We align online and offline, so the offer on your poster also appears on your website and socials.",
            },
          },
        ],
      },
      {
        name: { nl: "Reparatie & service", en: "Repair & service" },
        intro: {
          nl: "Voor reparatiewinkels en servicebedrijven: telefoon- en laptopreparatie, witgoedservice, fietsenmakers, horlogemakers en andere vakmensen die een kapot product weer aan de praat krijgen.",
          en: "For repair shops and service businesses: phone and laptop repair, appliance service, bike mechanics, watchmakers and other specialists who get a broken product working again.",
        },
        faqs: [
          {
            q: { nl: "Hoe leid je klanten op je website naar de juiste reparatie?", en: "How do you guide customers on your website to the right repair?" },
            a: {
              nl: "Laat ze kiezen, niet zoeken. Eerst het merk, dan het model, dan het probleem, en direct daarna de prijs en een tijdstip. Voor Repairlab bouwden we zo'n device-zoeker per merk en model met een heldere afspraakflow, zodat klanten in een paar klikken bij een reparatieafspraak uitkomen. Een [[boekingswidget|afspraakflow]] die aansluit op je planning scheelt telefoontjes met 'wat kost een nieuw scherm?' en geeft jou vooraf alle info die je nodig hebt.",
              en: "Let them choose rather than search. First the brand, then the model, then the problem, and straight after that the price and a time slot. For Repairlab we built a device finder per brand and model with a clear booking flow, so customers reach a repair appointment in a few clicks. A [[boekingswidget|booking flow]] that connects to your schedule saves calls asking 'what does a new screen cost?' and gives you all the info you need in advance.",
            },
          },
          {
            q: { nl: "Hoe word je als reparatiewinkel gevonden op 'reparatie + plaats'?", en: "How does a repair shop get found on 'repair + town'?" },
            a: {
              nl: "Met een pagina voor elke reparatie waar vaak op gezocht wordt, zoals 'iPhone scherm vervangen' of 'wasmachine reparatie', met prijs, duur en garantie. Koppel dat aan je vestigingen en de plaatsen waar je klanten vandaan komen. Een Google Bedrijfsprofiel met veel recente reviews doet de rest, want bij reparaties kijken mensen graag eerst naar de ervaringen van anderen. Met [[lokale-seo|lokale SEO]] bouwen we die structuur zo op dat hij makkelijk uit te breiden is als er nieuwe modellen bijkomen.",
              en: "With a page for every commonly searched repair, such as 'iPhone screen replacement' or 'washing machine repair', with price, duration and warranty. Link that to your locations and the towns your customers come from. A Google Business Profile with plenty of recent reviews does the rest, because with repairs people like to check other people's experiences first. With [[lokale-seo|local SEO]] we build that structure so it is easy to expand when new models come out.",
            },
          },
          {
            q: { nl: "Kan ik reparaties ook via opsturen aanbieden?", en: "Can I also offer mail-in repairs?" },
            a: {
              nl: "Ja, en zo vergroot je je werkgebied tot ver buiten je eigen stad. De klant meldt online het apparaat en het probleem aan, krijgt automatisch een verzendlabel en instructies, en ontvangt updates zodra het binnen is, gerepareerd en weer onderweg. Extra kosten of een afwijkende diagnose keurt hij online goed. Met [[workflow-automatisering]] loopt dat proces grotendeels vanzelf, gekoppeld aan je reparatiesysteem en verzendpartner. Jij hoeft alleen nog te doen waar je goed in bent: repareren.",
              en: "Yes, and it expands your service area well beyond your own town. The customer registers the device and the problem online, automatically gets a shipping label and instructions, and receives updates once it has arrived, been repaired and is on its way back. Extra costs or a different diagnosis are approved online. With [[workflow-automatisering|workflow automation]] that process largely runs by itself, connected to your repair system and shipping partner. You only have to do what you are good at: repairing.",
            },
          },
        ],
      },
      {
        name: { nl: "Maatwerkproducten", en: "Made to measure" },
        intro: {
          nl: "Voor leveranciers van producten op maat, zoals glas, raamdecoratie, meubels, keukens, drukwerk en gepersonaliseerde cadeaus, die maatwerk online verkopen zonder dat het ingewikkeld voelt.",
          en: "For suppliers of made-to-measure products, such as glass, window coverings, furniture, kitchens, print and personalised gifts, who sell custom work online without it feeling complicated.",
        },
        faqs: [
          {
            q: { nl: "Hoe voorkom je fouten in maatwerkbestellingen?", en: "How do you prevent errors in made-to-measure orders?" },
            a: {
              nl: "Door ze in de configurator zelf onmogelijk te maken. Stel minimale en maximale maten in, sluit combinaties uit die technisch niet kunnen en leg bij elke keuze kort uit hoe je goed meet, liefst met een tekening of filmpje. Een overzicht met visualisatie vlak voor het afrekenen geeft de klant nog één kans om te checken. Een goede [[productconfigurator]] werkt zo als je beste verkoper, die altijd even doorvraagt. Dat scheelt retouren, mailtjes en producten die precies twee centimeter te kort zijn.",
              en: "By making them impossible within the configurator itself. Set minimum and maximum sizes, rule out combinations that are technically impossible and briefly explain how to measure at each step, ideally with a drawing or short video. A summary with a visual just before checkout gives the customer one more chance to check. A good [[productconfigurator|product configurator]] works like your best salesperson, who always asks one more question. That saves returns, emails and products that are exactly two centimetres too short.",
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
            q: { nl: "Kan een configurator orders direct doorzetten naar productie?", en: "Can a configurator send orders straight to production?" },
            a: {
              nl: "Ja. Elke bestelling bevat al alle maten en keuzes, dus het zou zonde zijn om die nog over te typen. We zetten de order om in een werkbon, productielijst of bestand voor je machine, en sturen hem door naar je ERP of planningssysteem. Via [[api-koppelingen|API-koppelingen]] gaat dat automatisch, met een statusupdate naar de klant zodra er iets verandert. Zo wordt de kans op een typefout tussen webshop en werkplaats een stuk kleiner, en weet de klant waar hij aan toe is.",
              en: "Yes. Every order already contains all dimensions and choices, so it would be a shame to retype them. We turn the order into a work order, production list or file for your machine, and send it on to your ERP or planning system. Through [[api-koppelingen|API integrations]] that happens automatically, with status updates going to the customer whenever something changes. That makes typos between web shop and workshop far less likely, and the customer knows where they stand.",
            },
          },
          {
            q: { nl: "Hoe help je klanten kiezen uit veel materialen en kleuren?", en: "How do you help customers choose from lots of materials and colours?" },
            a: {
              nl: "Door eerst te vragen wat ze willen bereiken, en pas daarna welk materiaal. Een [[keuzehulp-quiz|keuzehulp]] met een paar vragen over gebruik, ruimte en budget brengt dertig opties terug tot drie die passen. Goede productfotografie van texturen en kleuren helpt, net als de mogelijkheid om stalen te bestellen. Wie stalen aanvraagt, is vaak al serieus, dus die volgen we een paar dagen later op met een mailtje. Zo wordt keuzestress een prettige keuze, en een aanvraag een bestelling.",
              en: "By first asking what they want to achieve, and only then which material. A [[keuzehulp-quiz|product finder]] with a few questions about use, space and budget narrows thirty options down to three that fit. Good product photography of textures and colours helps, as does the option to order samples. People who request samples are often serious already, so we follow up with an email a few days later. That way choice overload becomes a pleasant choice, and an enquiry becomes an order.",
            },
          },
        ],
      },
      {
        name: { nl: "Groothandel & B2B", en: "Wholesale & B2B" },
        intro: {
          nl: "Voor groothandels, distributeurs, importeurs en fabrikanten die zakelijke klanten online willen laten bestellen, met eigen prijzen, voorwaarden en accounts.",
          en: "For wholesalers, distributors, importers and manufacturers who want business customers to order online, with their own prices, terms and accounts.",
        },
        faqs: [
          {
            q: { nl: "Wat is het verschil tussen een B2B- en een B2C-webshop?", en: "What is the difference between a B2B and a B2C web shop?" },
            a: {
              nl: "Een zakelijke klant koopt anders. Hij heeft eigen prijsafspraken, bestelt vaak dezelfde artikelen in grote aantallen, wil op rekening kopen en heeft soms meerdere collega's die onder één account bestellen. Een B2B-[[webshop]] heeft daarom klantspecifieke prijzen, staffels, snel herbestellen, bestellen via artikelnummer of een geüploade lijst, en goedkeuringsstappen. Het hoeft er niet saai uit te zien, maar het moet vooral snel werken. Een inkoper wil zijn bestelling in vijf minuten rond hebben, niet in een uur.",
              en: "A business customer buys differently. They have their own price agreements, often order the same items in large quantities, want to buy on account and sometimes have several colleagues ordering under one account. A B2B [[webshop|web shop]] therefore has customer-specific prices, volume discounts, quick reordering, ordering by part number or uploaded list, and approval steps. It does not have to look dull, but above all it has to be fast. A buyer wants their order done in five minutes, not an hour.",
            },
          },
          {
            q: { nl: "Kan onze B2B-webshop koppelen met ons ERP?", en: "Can our B2B web shop connect to our ERP?" },
            a: {
              nl: "Meestal wel, en eigenlijk hoort dat ook. Voorraad, klantprijzen, orders en facturen moeten op één plek kloppen, en dat is meestal je ERP. Of je nu werkt met Exact, AFAS, Odoo of een ander pakket: we kijken welke koppelmogelijkheden er zijn en bouwen [[api-koppelingen]] die gegevens automatisch heen en weer sturen. Zo ziet een klant online dezelfde prijs als in zijn offerte, en hoeft je binnendienst orders niet meer met de hand in te voeren.",
              en: "Usually yes, and really it should. Stock, customer prices, orders and invoices need one single source of truth, and that is usually your ERP. Whether you use Exact, AFAS, Odoo or another package, we look at the available integration options and build [[api-koppelingen|integrations]] that sync data automatically. That way a customer sees the same price online as in their quote, and your inside sales team no longer has to enter orders by hand.",
            },
          },
          {
            q: { nl: "Hoe krijg je bestaande klanten zover dat ze online bestellen?", en: "How do you get existing customers to order online?" },
            a: {
              nl: "Door het makkelijker te maken dan bellen of mailen. Zet accounts klaar met de juiste prijzen en bestelhistorie, zodat klanten bij de eerste keer inloggen meteen hun vaste artikelen zien. Een korte uitleg per mail, een video van een minuut en een accountmanager die het bij het volgende bezoek even laat zien, doen meer dan een grote lancering. Met [[e-mailmarketing|e-mailflows]] volgen we klanten op die nog niet besteld hebben. En zie je wie afhaakt, dan weet je wat je kunt verbeteren.",
              en: "By making it easier than calling or emailing. Set up accounts with the right prices and order history in advance, so customers see their regular items as soon as they log in for the first time. A short explanation by email, a one-minute video and an account manager who shows it during the next visit do more than a big launch. With [[e-mailmarketing|email flows]] we follow up customers who have not ordered yet. And if you can see who drops off, you know what to improve.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Webshops", en: "Online stores" },
      { nl: "Online retailers", en: "Online retailers" },
      { nl: "D2C-merken", en: "D2C brands" },
      { nl: "Fashion- en lifestylewebshops", en: "Fashion and lifestyle web shops" },
      { nl: "Woon- en interieurwinkels", en: "Home and interior stores" },
      { nl: "Speciaalzaken", en: "Specialist retailers" },
      { nl: "Winkelketens", en: "Retail chains" },
      { nl: "Franchiseformules", en: "Franchise chains" },
      { nl: "Reparatiewinkels", en: "Repair shops" },
      { nl: "Telefoon- en laptopreparateurs", en: "Phone and laptop repairers" },
      { nl: "Fietsenwinkels", en: "Bike shops" },
      { nl: "Groothandels", en: "Wholesalers" },
      { nl: "Distributeurs", en: "Distributors" },
      { nl: "Importeurs", en: "Importers" },
      { nl: "Maatwerkleveranciers", en: "Made-to-measure suppliers" },
      { nl: "Glas- en raamdecoratiespecialisten", en: "Glass and window covering specialists" },
      { nl: "Meubelmakers", en: "Furniture makers" },
      { nl: "Cadeauwinkels", en: "Gift shops" },
      { nl: "Foodwebshops", en: "Food web shops" },
      { nl: "Cosmetica- en verzorgingsmerken", en: "Cosmetics and personal care brands" },
      { nl: "Dierenspeciaalzaken", en: "Pet shops" },
      { nl: "Abonnementsboxen", en: "Subscription boxes" },
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
          nl: "Voor adviesbureaus, consultants, interim-managers, coaches, trainers en zelfstandige professionals die hun kennis willen omzetten in een sterk merk en een vaste stroom opdrachten.",
          en: "For consultancies, consultants, interim managers, coaches, trainers and independent professionals who want to turn their knowledge into a strong brand and a steady flow of assignments.",
        },
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
          nl: "Voor recruitmentbureaus, uitzendbureaus, detacheerders, executive search en HR-dienstverleners die kandidaten en opdrachtgevers sneller bij elkaar willen brengen.",
          en: "For recruitment agencies, staffing agencies, secondment firms, executive search and HR service providers who want to bring candidates and clients together faster.",
        },
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
      { nl: "Recruitmentbureaus", en: "Recruitment agencies" },
      { nl: "Uitzendbureaus", en: "Staffing agencies" },
      { nl: "Detacheerders", en: "Secondment agencies" },
      { nl: "HR-dienstverleners", en: "HR service providers" },
      { nl: "Incassobureaus", en: "Debt collection agencies" },
      { nl: "Gerechtsdeurwaarders", en: "Bailiffs" },
      { nl: "Creditmanagementbureaus", en: "Credit management firms" },
      { nl: "Vertaalbureaus", en: "Translation agencies" },
      { nl: "Facilitaire dienstverleners", en: "Facility services providers" },
      { nl: "Arbodiensten", en: "Occupational health services" },
    ],
  },
};
