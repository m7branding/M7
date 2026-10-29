import type { Sector } from "./types";

/* ============================================================
   Nieuwe sectoren (deel A). Volledige entries, inclusief
   doelgroepen (segments) en soorten bedrijven (audiences).
   Wordt in content/index.ts samengevoegd met sectors.ts.
   ============================================================ */

export const NEW_SECTORS_A: Sector[] = [
  /* ---------- Fashion & Beauty ---------- */
  {
    slug: "fashion-beauty",
    title: { nl: "Fashion & Beauty", en: "Fashion & Beauty" },
    short: { nl: "Fashion & beauty", en: "Fashion & beauty" },
    icon: "hanger",
    quote: { nl: "Beauty is in the details. So is a good website.", en: "Beauty is in the details. So is a good website." },
    intro: {
      nl: "Van boutique en modemerk tot kapsalon, nagelstudio en skincarelabel: wij maken merken, websites en boekingsflows die net zo verzorgd zijn als jouw werk.",
      en: "From boutique and fashion label to hair salon, nail studio and skincare brand: we create brands, websites and booking flows as polished as your work.",
    },
    description: {
      nl: "In fashion en beauty draait veel om uitstraling. Klanten scrollen door Instagram, bekijken je werk, lezen reviews en willen daarna in een paar tikken een afspraak maken of iets bestellen. M7 bouwt merken en websites die dat gevoel vasthouden: van een webshop voor een kledingboutique en een huisstijl voor een juwelier tot een website voor een kapsalon of nagelstudio waar klanten zelf online hun afspraak boeken.\n\nWe combineren stijl met slimme techniek. Denk aan online boeken met een aanbetaling en automatische herinneringen tegen no-shows, productfotografie en korte video voor social, lokale SEO zodat de buurt je vindt, en campagnes op Instagram, TikTok en Google. Voor cosmeticamerken en esthetische klinieken letten we extra op wat je wel en niet mag beloven. Eerlijk is in deze branche niet alleen netjes, het is ook gewoon slim.",
      en: "In fashion and beauty, a lot comes down to how things look. Customers scroll through Instagram, look at your work, read reviews and then want to book an appointment or order something in a few taps. M7 builds brands and websites that hold on to that feeling: from a web shop for a clothing boutique and a visual identity for a jeweller to a website for a hair salon or nail studio where clients book their own appointments online.\n\nWe combine style with smart technology. Think online booking with a deposit and automatic reminders against no-shows, product photography and short video for social, local SEO so the neighbourhood finds you, and campaigns on Instagram, TikTok and Google. For cosmetics brands and aesthetic clinics we pay extra attention to what you can and cannot promise. In this industry, honest is not just decent, it is simply smart.",
    },
    challenges: [
      {
        title: { nl: "Je werk zichtbaar maken", en: "Making your work visible" },
        text: {
          nl: "Vakmanschap zie je pas als je het laat zien. Met sterke fotografie, korte video en een rustige website komt je werk net zo goed over als in de stoel of de paskamer.",
          en: "Craftsmanship only shows when you show it. With strong photography, short video and a calm website, your work comes across as well as it does in the chair or the fitting room.",
        },
      },
      {
        title: { nl: "Afspraken en no-shows", en: "Appointments and no-shows" },
        text: {
          nl: "Bellen tussen twee klanten door kost tijd, en een lege stoel kost geld. Met online boeken, een aanbetaling en automatische herinneringen houd je je agenda vol en je handen vrij.",
          en: "Phone calls between two clients take time, and an empty chair costs money. With online booking, a deposit and automatic reminders you keep your calendar full and your hands free.",
        },
      },
      {
        title: { nl: "Opvallen op Instagram en in de buurt", en: "Standing out on Instagram and nearby" },
        text: {
          nl: "Iedereen in je vak post mooie plaatjes. Een herkenbaar merk, een vaste contentaanpak en lokale SEO zorgen dat mensen jou kiezen, en niet alleen liken.",
          en: "Everyone in your field posts nice pictures. A recognisable brand, a steady content approach and local SEO make sure people choose you, not just like you.",
        },
      },
      {
        title: { nl: "Eerlijk over resultaten", en: "Honest about results" },
        text: {
          nl: "Voor cosmetica en behandelingen gelden regels voor claims en reclame. Wij schrijven teksten en campagnes die overtuigen zonder beloftes die je niet kunt waarmaken.",
          en: "Cosmetics and treatments come with rules for claims and advertising. We write copy and campaigns that convince without promises you cannot keep.",
        },
      },
    ],
    services: ["branding-rebranding", "websites-webshops", "configurators-lead-tools-widgets", "foto-video-3d-animatie", "content-marketing-online-ads", "seo-aeo-geo"],
    applications: ["huisstijl", "webshop", "boekingswidget", "productfotografie", "social-video", "social-media-marketing", "meta-ads", "lokale-seo", "verpakkingsontwerp", "e-mailmarketing"],
    faqs: [
      {
        q: { nl: "Werken jullie voor zowel kleine salons als grotere fashion- en beautymerken?", en: "Do you work for both small salons and larger fashion and beauty brands?" },
        a: {
          nl: "Ja. Van een zelfstandige kapper of nagelstylist met één stoel tot modemerken, winkelketens en cosmeticalabels met een eigen webshop. Voor een salon of studio beginnen we vaak met een [[huisstijl|huisstijl]], een heldere website met online boeken en een goed [[lokale-seo|Google Bedrijfsprofiel]]. Grotere merken helpen we met webshops, campagnes, content en merkrichtlijnen. We stemmen de aanpak en het budget af op waar je nu staat, en bouwen zo dat je later kunt uitbreiden, bijvoorbeeld met een tweede vestiging of een eigen productlijn.",
          en: "Yes. From an independent hairdresser or nail technician with one chair to fashion labels, retail chains and cosmetics brands with their own web shop. For a salon or studio we often start with a [[huisstijl|visual identity]], a clear website with online booking and a solid [[lokale-seo|Google Business Profile]]. Larger brands we help with web shops, campaigns, content and brand guidelines. We tailor the approach and budget to where you are now, and build it so you can expand later, for example with a second location or your own product line.",
        },
      },
      {
        q: { nl: "Kunnen klanten bij mijn salon online een afspraak boeken?", en: "Can clients book an appointment at my salon online?" },
        a: {
          nl: "Ja. Werk je al met salonsoftware, zoals een kassa- of agendasysteem met een eigen boekingsmodule, dan bouwen we die netjes in je website in, in jouw stijl. Heb je nog niets, dan kijken we samen wat past. Belangrijk is dat boeken op een telefoon in een paar tikken lukt: behandeling kiezen, medewerker kiezen, tijd kiezen, klaar. Met een [[boekingswidget|boekingswidget]] en automatische herinneringen per mail of sms boeken klanten ook 's avonds op de bank, als jij allang klaar bent.",
          en: "Yes. If you already use salon software, such as a till or calendar system with its own booking module, we build it neatly into your website, in your style. If you have nothing yet, we look together at what fits. What matters is that booking on a phone takes just a few taps: choose a treatment, choose a stylist, choose a time, done. With a [[boekingswidget|booking widget]] and automatic reminders by email or text, clients can book in the evening on the sofa, long after you have finished for the day.",
        },
      },
      {
        q: { nl: "Hoe gaan jullie om met regels voor claims in cosmetica en beauty?", en: "How do you handle the rules for claims in cosmetics and beauty?" },
        a: {
          nl: "Zorgvuldig. Voor cosmetica gelden Europese regels voor claims: wat je belooft, moet kloppen en onderbouwd zijn. Voor medische en esthetische behandelingen zijn de regels nog strenger, en Google en Meta hebben eigen voorwaarden voor zulke advertenties. Wij schrijven [[tone-of-voice|teksten]] die laten zien wat een product of behandeling is en voor wie het geschikt is, zonder wondermiddelen of garanties. Twijfel je over een specifieke claim, leg die dan voor aan een specialist. Eerlijk adverteren houdt je account online en je klanten tevreden.",
          en: "Carefully. Cosmetics are subject to European rules on claims: what you promise must be accurate and substantiated. For medical and aesthetic treatments the rules are stricter still, and Google and Meta have their own policies for such ads. We write [[tone-of-voice|copy]] that shows what a product or treatment is and who it suits, without miracle cures or guarantees. If you are unsure about a specific claim, run it past a specialist. Honest advertising keeps your ad account online and your customers happy.",
        },
      },
      {
        q: { nl: "Maken jullie ook foto's en video's van ons werk en onze collectie?", en: "Do you also shoot photos and videos of our work and collection?" },
        a: {
          nl: "Ja. We fotograferen collecties, sieraden en producten, en filmen in je salon of winkel voor website en social. Voor fashion denken we aan lookbooks en productfoto's in een vaste stijl, zodat je webshop rustig oogt. Voor salons werken korte video's van een behandeling of een kapsel van begin tot eind goed op Instagram en TikTok. Met [[productfotografie|productfotografie]] en [[social-video|social video]] heb je na één shootdag beeld voor weken. Modellen of klanten in beeld? Dan regelen we vooraf netjes hun toestemming.",
          en: "Yes. We photograph collections, jewellery and products, and film in your salon or shop for your website and social. For fashion we think of lookbooks and product photos in a consistent style, so your web shop looks calm. For salons, short videos of a treatment or a haircut from start to finish work well on Instagram and TikTok. With [[productfotografie|product photography]] and [[social-video|social video]], one shoot day gives you visuals for weeks. Models or clients on camera? Then we arrange their consent properly in advance.",
        },
      },
    ],
    metaTitle: {
      nl: "Websites, branding & online boeken voor fashion en beauty | M7",
      en: "Websites, branding & online booking for fashion and beauty | M7",
    },
    metaDescription: {
      nl: "M7 bouwt merken, webshops en websites met online boeken voor modezaken, kapsalons, beautysalons, nagelstudio's, juweliers, cosmeticamerken en klinieken.",
      en: "M7 builds brands, web shops and websites with online booking for fashion stores, hair salons, beauty salons, nail studios, jewellers, cosmetics brands and clinics.",
    },
    segments: [
      {
        name: { nl: "Mode & sieraden", en: "Fashion & jewellery" },
        intro: {
          nl: "Voor modemerken, kledingboutiques, schoenenwinkels, bruidsmodezaken, juweliers en sieraden- en accessoiremerken die hun collectie online net zo mooi willen laten zien als in de winkel.",
          en: "For fashion labels, clothing boutiques, shoe shops, bridal stores, jewellers and jewellery and accessory brands that want their collection to look as good online as it does in store.",
        },
        types: [
          { nl: "Modemerken", en: "Fashion labels" },
          { nl: "Kledingboutiques", en: "Clothing boutiques" },
          { nl: "Kledingwebshops", en: "Online clothing stores" },
          { nl: "Schoenenwinkels", en: "Shoe shops" },
          { nl: "Bruidsmodezaken", en: "Bridal shops" },
          { nl: "Juweliers", en: "Jewellers" },
          { nl: "Sieradenmerken", en: "Jewellery brands" },
        ],
        useCases: [
          {
            title: { nl: "Webshop voor je collectie", en: "A web shop for your collection" },
            text: {
              nl: "Een kledingwebshop met maatadvies, filters op maat en kleur en productfoto's die laten zien hoe iets valt.",
              en: "An online clothing store with size advice, filters on size and colour and product photos that show how something fits.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Lookbook en productfoto's", en: "Lookbook and product photos" },
            text: {
              nl: "Een vaste fotostijl voor elke nieuwe collectie, van packshot tot sfeerbeeld, zodat je webshop en Instagram één geheel vormen.",
              en: "A consistent photo style for every new collection, from packshot to lifestyle shot, so your web shop and Instagram feel like one.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Pasafspraak of ringadvies plannen", en: "Booking a fitting or ring consultation" },
            text: {
              nl: "Bruiden en klanten plannen online een pasafspraak of ringadvies, met hun wensen alvast ingevuld.",
              en: "Brides and clients book a fitting or ring consultation online, with their wishes filled in beforehand.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Campagnes voor elke nieuwe collectie", en: "Campaigns for every new collection" },
            text: {
              nl: "Advertenties op Instagram en Facebook die je nieuwe collectie laten zien aan bezoekers die al keken, en aan nieuwe mensen met dezelfde smaak.",
              en: "Instagram and Facebook ads that show your new collection to visitors who already browsed, and to new people with similar taste.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Een eigen gezicht voor je label", en: "A distinct identity for your label" },
            text: {
              nl: "Naam, logo, kleuren en beeldstijl die passen bij je collectie, tot op de hangtag en de draagtas. Zo herkent een klant je label in de winkel, in de webshop en op Instagram.",
              en: "Name, logo, colours and image style that suit your collection, right down to the swing tag and the carrier bag. That way customers recognise your label in store, in your web shop and on Instagram.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Sieraad zelf samenstellen", en: "Design your own piece of jewellery" },
            text: {
              nl: "Klanten kiezen metaal, steen, maat en gravure en zien direct hoe hun ring of hanger eruitziet, met een prijsindicatie erbij. Jij krijgt een aanvraag die je zo kunt uitwerken.",
              en: "Customers choose metal, stone, size and engraving and instantly see how their ring or pendant looks, with a price indication. You receive an enquiry you can work out straight away.",
            },
            service: "configurators-lead-tools-widgets",
            application: "productconfigurator",
          },
          {
            title: { nl: "Vindbaar op categorie en merk", en: "Found by category and brand" },
            text: {
              nl: "Eigen pagina's voor zoekopdrachten als 'trouwringen' of 'linnen jurken', en voor de merken die je verkoopt. Met goede teksten en een snelle site begrijpt Google je collectie, ook als die elk seizoen wisselt.",
              en: "Dedicated pages for searches like 'wedding rings' or 'linen dresses', and for the brands you stock. With good copy and a fast site, Google understands your collection, even when it changes every season.",
            },
            service: "seo-aeo-geo",
            application: "seo",
          },
          {
            title: { nl: "E-mails na de eerste bestelling", en: "Emails after the first order" },
            text: {
              nl: "Een welkomstreeks, een seintje bij een achtergelaten winkelmandje en een mail zodra de nieuwe collectie binnen is. Het loopt vanzelf, in de stijl van je merk.",
              en: "A welcome series, a nudge about an abandoned basket and an email as soon as the new collection arrives. It runs by itself, in your brand's style.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat maakt een goede webshop voor kleding?", en: "What makes a good online clothing store?" },
            a: {
              nl: "Vooral dat mensen durven te bestellen. Dus duidelijke maattabellen per merk of model, foto's van voren, van achteren en aan een model, en een korte omschrijving van stof, pasvorm en hoe het valt. Filters op maat, kleur en prijs helpen bij een grotere collectie. Heldere verzend- en retourvoorwaarden geven vertrouwen. En hoe beter je maatinformatie, hoe kleiner de kans dat iets terugkomt. In een [[webshop|webshop]] op Shopify of WooCommerce bouwen we dat zo, dat je zelf makkelijk een nieuwe collectie toevoegt.",
              en: "Above all, that people dare to order. So clear size charts per brand or style, photos from the front, from the back and on a model, and a short description of fabric, fit and drape. Filters on size, colour and price help with a larger collection. Clear shipping and returns policies build trust. And the better your size information, the smaller the chance something comes back. In a [[webshop|web shop]] on Shopify or WooCommerce we build it so you can easily add a new collection yourself.",
            },
          },
          {
            q: { nl: "Hoe combineer je een boutique met een webshop zonder dubbel werk?", en: "How do you combine a boutique with a web shop without double work?" },
            a: {
              nl: "Door één voorraad te gebruiken voor winkel en webshop. Koppel je kassasysteem aan je webshop, dan verkoop je online geen jurk die vanochtend in de winkel is meegegaan. Klanten zien wat er in de boutique hangt, kunnen iets reserveren om te passen en ruilen in de winkel. Met [[api-koppelingen|koppelingen]] tussen kassa, webshop en eventueel je leverancier hoeft niemand nog voorraad over te typen. Zo blijft er tijd over voor waar een boutique om draait: persoonlijk advies.",
              en: "By using one stock for both shop and web shop. Connect your till system to your web shop and you never sell a dress online that left the shop this morning. Customers see what is hanging in the boutique, can reserve something to try on and exchange items in store. With [[api-koppelingen|integrations]] between till, web shop and possibly your supplier, nobody has to retype stock anymore. That leaves time for what a boutique is all about: personal advice.",
            },
          },
          {
            q: { nl: "Hoe straal je als juwelier of sieradenmerk vertrouwen en luxe uit?", en: "How does a jeweller or jewellery brand convey trust and luxury?" },
            a: {
              nl: "Met rust, ruimte en heel goede [[productfotografie|foto's]]. Sieraden zijn klein en glimmend, en dat is lastig te fotograferen. Scherpe macrobeelden, een consistente achtergrond en een foto aan de hand of hals laten zien hoe groot iets echt is. Daaromheen een [[huisstijl|huisstijl]] met een ingetogen palet en sterke typografie, en duidelijke info over materialen, keurmerken en garantie. Bij hogere bedragen wil een klant ook weten dat hij met een echte zaak te maken heeft: laat je atelier, je team en je adres zien.",
              en: "With calm, space and very good [[productfotografie|photos]]. Jewellery is small and shiny, which makes it tricky to photograph. Sharp macro shots, a consistent background and a photo on a hand or neck show how big something really is. Around that, a [[huisstijl|visual identity]] with a restrained palette and strong typography, plus clear information on materials, hallmarks and warranty. With higher amounts, customers also want to know they are dealing with a real business: show your workshop, your team and your address.",
            },
          },
          {
            q: { nl: "Hoe krijgt een bruidsmodezaak meer pasafspraken?", en: "How does a bridal shop get more fitting appointments?" },
            a: {
              nl: "Bruiden oriënteren zich lang en vooral online, vaak maanden voor de grote dag. Laat je collectie zien met goede foto's per jurk of designer, en vertel hoe een pasafspraak bij jou verloopt en wie er mee mag. Daarna willen ze vooral snel een moment vastleggen. Een [[boekingswidget|boekingswidget]] met beschikbare tijden en een paar vragen vooraf, zoals trouwdatum, stijl en budget, geeft jou een goede voorbereiding. Met [[meta-ads|Meta Ads]] komt je collectie langs bij mensen in je regio, ook bij wie je site al bezocht.",
              en: "Brides research for a long time and mostly online, often months before the big day. Show your collection with good photos per dress or designer, and explain how a fitting at your shop works and who can come along. After that, they mainly want to lock in a moment quickly. A [[boekingswidget|booking widget]] with available times and a few questions upfront, such as wedding date, style and budget, gives you good preparation. With [[meta-ads|Meta Ads]] your collection shows up for people in your region, including those who already visited your site.",
            },
          },
          {
            q: { nl: "Hoe beperk je retouren in een kledingwebshop?", en: "How do you reduce returns in an online clothing store?" },
            a: {
              nl: "Retouren horen bij online mode, en klanten hebben bij een online aankoop in de regel veertien dagen bedenktijd. Je kunt wel zorgen dat minder mensen gokken op hun maat: vermeld per artikel de pasvorm, de lengte van het model en de maat die het draagt, en laat kleuren zien zoals ze echt zijn. Vraag bij elke retour naar de reden en kijk welke artikelen opvallen. Vaak zit de oplossing in een betere maattabel of [[productfotografie|eerlijkere foto's]].",
              en: "Returns come with selling fashion online, and customers generally have fourteen days to change their mind after an online purchase. What you can do is make sure fewer people gamble on their size: state each item's fit, the model's height and the size they are wearing, and show colours as they really are. Ask for the reason with every return and look at which items stand out. The fix is often a better size chart or [[productfotografie|more honest photos]].",
            },
          },
          {
            q: { nl: "Hoe trek je meer mensen naar je boutique of juwelierszaak?", en: "How do you get more people into your boutique or jewellery shop?" },
            a: {
              nl: "Begin bij Google, want daar zoeken mensen op 'kledingwinkel' of 'juwelier' in Den Bosch, Oss of Eindhoven. Een compleet [[lokale-seo|Google Bedrijfsprofiel]] met actuele foto's, openingstijden en reviews brengt je in beeld op het moment dat iemand wil gaan winkelen. Laat online zien wat er nu in de winkel hangt of ligt, en geef mensen een reden om langs te komen, zoals een personal shopping-afspraak of een avond rond de nieuwe collectie. Met [[meta-ads|advertenties]] in een straal rond je winkel bereik je de buurt gericht.",
              en: "Start with Google, because that is where people search for 'clothing store' or 'jeweller' in Den Bosch, Oss or Eindhoven. A complete [[lokale-seo|Google Business Profile]] with fresh photos, opening hours and reviews puts you in view at the moment someone wants to go shopping. Show online what is in store right now, and give people a reason to drop by, such as a personal shopping appointment or an evening around the new collection. With [[meta-ads|ads]] in a radius around your shop you reach the neighbourhood in a targeted way.",
            },
          },
          {
            q: { nl: "Hoe zet je een nieuw modelabel of sieradenmerk in de markt?", en: "How do you launch a new fashion label or jewellery brand?" },
            a: {
              nl: "Begin klein en scherp: voor wie maak je het, wat maakt jouw ontwerpen anders en waarom nu? Die keuzes leggen we vast in een [[merkstrategie|merkstrategie]] en vertalen we naar een naam, logo, webshop en beeldstijl die hetzelfde vertellen. Bouw voor de lancering alvast een wachtlijst op met een teaser op Instagram en TikTok, zodat er op dag één mensen klaarstaan. Daarna draait het om volhouden: per collectie een vast ritme van beeld, mails en posts.",
              en: "Start small and sharp: who do you make it for, what makes your designs different and why now? We capture those choices in a [[merkstrategie|brand strategy]] and translate them into a name, logo, web shop and image style that tell the same story. Before launch, build a waiting list with a teaser on Instagram and TikTok, so people are ready on day one. After that it is about keeping it up: a steady rhythm of visuals, emails and posts for every collection.",
            },
          },
        ],
      },
      {
        name: { nl: "Beautysalons & studio's", en: "Beauty salons & studios" },
        intro: {
          nl: "Voor schoonheidssalons, nagelstudio's, wimper- en browstudio's, pedicurepraktijken en make-up artists die hun agenda vol willen hebben en hun werk online net zo verzorgd willen laten zien als in de stoel.",
          en: "For beauty salons, nail studios, lash and brow studios, pedicure practices and make-up artists who want a full calendar and want their work to look as polished online as it does in the chair.",
        },
        types: [
          { nl: "Schoonheidssalons", en: "Beauty salons" },
          { nl: "Nagelstudio's", en: "Nail studios" },
          { nl: "Wimper- en browstudio's", en: "Lash and brow studios" },
          { nl: "Pedicurepraktijken", en: "Pedicure practices" },
          { nl: "Make-up artists", en: "Make-up artists" },
        ],
        useCases: [
          {
            title: { nl: "Online boeken met aanbetaling", en: "Online booking with a deposit" },
            text: {
              nl: "Klanten kiezen behandeling, stylist en tijd, betalen een aanbetaling en krijgen automatisch een herinnering. Dat scheelt no-shows en appjes.",
              en: "Clients choose a treatment, stylist and time, pay a deposit and automatically get a reminder. That saves no-shows and messages.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Gevonden op 'nagelstudio in de buurt'", en: "Found for 'nail salon near me'" },
            text: {
              nl: "Een verzorgd Google Bedrijfsprofiel met foto's van je werk, actuele reviews en een pagina per behandeling.",
              en: "A well-kept Google Business Profile with photos of your work, recent reviews and a page per treatment.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Reels van je werk", en: "Reels of your work" },
            text: {
              nl: "Korte video's van een behandeling van begin tot eind, in een vaste stijl die je zelf kunt volhouden.",
              en: "Short videos of a treatment from start to finish, in a consistent style you can keep up yourself.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Klanten laten terugkomen", en: "Bringing clients back" },
            text: {
              nl: "Een automatisch berichtje als het tijd is voor een nieuwe set, een opvulbeurt of de volgende behandeling, met een directe boekingslink.",
              en: "An automatic message when it is time for a new set, an infill or the next treatment, with a direct booking link.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Huisstijl die bij je salon past", en: "An identity that fits your salon" },
            text: {
              nl: "Logo, kleuren en beeldstijl die terugkomen op je website, Instagram, prijslijst en cadeaubonnen. Rustig en luxe of juist vrolijk en vlot: als het maar klopt met hoe het bij jou voelt.",
              en: "Logo, colours and image style that return on your website, Instagram, price list and gift vouchers. Calm and luxurious or bright and breezy: as long as it matches how your place feels.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Website met behandelingen en prijzen", en: "A website with treatments and prices" },
            text: {
              nl: "Per behandeling uitleg, duur en prijs, foto's van je eigen werk en overal een boekingsknop. Een nieuwe behandeling of prijs pas je zelf aan, zonder dat je iemand hoeft te bellen.",
              en: "For each treatment an explanation, duration and price, photos of your own work and a booking button everywhere. You add a new treatment or change a price yourself, without having to call anyone.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Rustige dagen opvullen met ads", en: "Filling quiet days with ads" },
            text: {
              nl: "Een kalme dinsdag? Een korte campagne op Instagram en Facebook voor mensen in je buurt, met een directe boekingslink. Aan te zetten wanneer jij het nodig hebt, en weer uit als de agenda vol zit.",
              en: "A quiet Tuesday? A short Instagram and Facebook campaign for people nearby, with a direct booking link. Switched on when you need it, and off again once the calendar is full.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Prijslijst, cadeaubon en afsprakenkaartje", en: "Price list, gift voucher and appointment card" },
            text: {
              nl: "Een prijslijst aan de muur, cadeaubonnen en afsprakenkaartjes in dezelfde stijl als je website. Klein drukwerk, maar klanten nemen het mee naar huis en geven het door.",
              en: "A price list on the wall, gift vouchers and appointment cards in the same style as your website. Small print items, but clients take them home and pass them on.",
            },
            service: "grafisch-ontwerp-print",
            application: "visitekaartjes-drukwerk",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet een website voor een beautysalon of nagelstudio kunnen?", en: "What should a website for a beauty salon or nail studio be able to do?" },
            a: {
              nl: "Drie dingen: laten zien wat je doet, wat het kost en wanneer iemand terechtkan. Dus een overzicht van behandelingen met prijzen en duur, foto's van je eigen werk in plaats van stockfoto's, en een knop om [[boekingswidget|direct te boeken]]. Op een telefoon moet dat in een paar tikken lukken, want daar scrollt je klant door je werk. Een [[webflow-website|website]] die je zelf bijhoudt, maakt het makkelijk om prijzen of een nieuwe behandeling aan te passen. En koppel je Instagram, zodat je nieuwste werk vanzelf meekomt.",
              en: "Three things: show what you do, what it costs and when someone can come in. So an overview of treatments with prices and duration, photos of your own work instead of stock images, and a button to [[boekingswidget|book straight away]]. On a phone that has to take just a few taps, because that is where your client scrolls through your work. A [[webflow-website|website]] you update yourself makes it easy to change prices or add a new treatment. And connect your Instagram, so your latest work appears automatically.",
            },
          },
          {
            q: { nl: "Hoe voorkom je no-shows in je salon?", en: "How do you prevent no-shows in your salon?" },
            a: {
              nl: "Helemaal voorkomen lukt niet, beperken wel. Stuur automatisch een herinnering een dag van tevoren, met een knop om te verzetten in plaats van stilletjes weg te blijven. Vraag bij nieuwe klanten of lange behandelingen een aanbetaling, en zet je annuleringsvoorwaarden duidelijk in de boekingsbevestiging. Met een [[boekingswidget|boekingswidget]] en een paar slimme [[workflow-automatisering|automatiseringen]] gaat dat vanzelf. Ondersteunt je systeem een wachtlijst, dan bied je een vrijgekomen plek automatisch aan. Zo blijft de stoel minder vaak leeg.",
              en: "You cannot prevent them entirely, but you can limit them. Send an automatic reminder the day before, with a button to reschedule instead of quietly staying away. Ask new clients or those booking long treatments for a deposit, and state your cancellation policy clearly in the booking confirmation. With a [[boekingswidget|booking widget]] and a few smart [[workflow-automatisering|automations]] that happens by itself. If your system supports a waiting list, a freed-up slot is offered automatically. That way the chair stays empty less often.",
            },
          },
          {
            q: { nl: "Hoe word je als nagelstudio of wimperstylist beter gevonden?", en: "How does a nail studio or lash stylist get found more easily?" },
            a: {
              nl: "Via twee routes: Google en Instagram. In Google zoeken mensen op 'nagelstudio in de buurt' of 'wimperextensions' met hun plaatsnaam. Met [[lokale-seo|lokale SEO]], een compleet Google Bedrijfsprofiel en een pagina per behandeling sluit je daarop aan. Op [[social-media-marketing|Instagram en TikTok]] kiezen mensen op stijl, dus daar laat je consequent je eigen werk zien, met goed licht en een herkenbare look. Vraag tevreden klanten om een review, en reageer erop. Die combinatie helpt dat iemand jou kiest in plaats van de studio twee straten verderop.",
              en: "Through two routes: Google and Instagram. On Google, people search for 'nail salon near me' or 'lash extensions' plus their town. With [[lokale-seo|local SEO]], a complete Google Business Profile and a page per treatment you match those searches. On [[social-media-marketing|Instagram and TikTok]] people choose on style, so that is where you consistently show your own work, with good light and a recognisable look. Ask happy clients for a review, and reply to it. That combination helps someone choose you over the studio two streets away.",
            },
          },
          {
            q: { nl: "Hoe geef je je salon een eigen gezicht?", en: "How do you give your salon its own identity?" },
            a: {
              nl: "Door te kiezen voor wie je er bent. Een salon voor snelle, betaalbare behandelingen tussen het werk door vraagt een andere uitstraling dan een rustige plek voor een uur ontspanning. Dat vertalen we naar een [[huisstijl|huisstijl]] die je overal terugziet: logo, kleuren, website, Instagram, cadeaubonnen en de prijslijst aan de muur. Ook je [[tone-of-voice|tone of voice]] hoort erbij, van je bio tot je boekingsbevestiging. Zo herkennen klanten je meteen, ook als ze je naam even kwijt zijn.",
              en: "By choosing who you are there for. A salon for quick, affordable treatments between work calls for a different look than a calm place for an hour of relaxation. We translate that into a [[huisstijl|visual identity]] you see everywhere: logo, colours, website, Instagram, gift vouchers and the price list on the wall. Your [[tone-of-voice|tone of voice]] belongs to it too, from your bio to your booking confirmation. That way clients recognise you instantly, even if your name has slipped their mind.",
            },
          },
          {
            q: { nl: "Mag ik foto's van klanten op Instagram of mijn website zetten?", en: "Can I post photos of clients on Instagram or my website?" },
            a: {
              nl: "Alleen met toestemming, en die vraag je het liefst vooraf en duidelijk: waarvoor gebruik je de foto en waar komt hij te staan? Een herkenbare foto is een persoonsgegeven, dus leg vast dat iemand ja heeft gezegd, bijvoorbeeld in je boekingssysteem of met een kort formulier. Ook bij een close-up van nagels of wimpers is het netjes om het even te vragen. En trekt iemand later zijn toestemming in, haal de foto dan weg van je website en [[social-media-marketing|socials]].",
              en: "Only with consent, and ideally you ask beforehand and clearly: what will the photo be used for and where will it appear? A recognisable photo counts as personal data, so record that someone said yes, for example in your booking system or with a short form. Even with a close-up of nails or lashes it is good manners to ask. And if someone withdraws their consent later, remove the photo from your website and [[social-media-marketing|socials]].",
            },
          },
          {
            q: { nl: "Hoe verkoop ik als salon meer producten en cadeaubonnen?", en: "How can my salon sell more products and gift vouchers?" },
            a: {
              nl: "Maak het makkelijk om na de behandeling verder te gaan. Een korte [[e-mailmarketing|mail]] met verzorgingstips en de producten die je gebruikte, werkt vaak beter dan alleen een volle schap bij de kassa. Cadeaubonnen verkoop je online, zodat iemand om tien uur 's avonds nog een last-minute cadeau kan versturen. En met een kleine [[webshop|webshop]] voor nazorgproducten verdien je ook op momenten dat de stoel leeg is.",
              en: "Make it easy to carry on after the treatment. A short [[e-mailmarketing|email]] with aftercare tips and the products you used often works better than just a full shelf by the till. Sell gift vouchers online, so someone can still send a last-minute present at ten in the evening. And with a small [[webshop|web shop]] for aftercare products you earn money even when the chair is empty.",
            },
          },
          {
            q: { nl: "Wat kost een website voor een schoonheidssalon of nagelstudio?", en: "What does a website for a beauty salon or nail studio cost?" },
            a: {
              nl: "Dat hangt af van wat je nodig hebt. Een compacte [[webflow-website|website]] met behandelingen, prijzen en een koppeling met je boekingssysteem is een ander project dan een site met webshop, meerdere vestigingen en een fotoshoot. Na een korte kennismaking krijg je vooraf een heldere offerte, zodat je weet waar je aan toe bent. Reken daarnaast op vaste maandkosten voor [[hosting-onderhoud|hosting en onderhoud]] en eventueel je boekingssoftware.",
              en: "That depends on what you need. A compact [[webflow-website|website]] with treatments, prices and a link to your booking system is a different project from a site with a web shop, several locations and a photo shoot. After a short introduction you receive a clear quote upfront, so you know where you stand. On top of that, expect fixed monthly costs for [[hosting-onderhoud|hosting and maintenance]] and possibly your booking software.",
            },
          },
        ],
      },
      {
        name: { nl: "Kappers & barbers", en: "Hairdressers & barbers" },
        intro: {
          nl: "Voor kapsalons, barbershops, kapperketens en zelfstandige kappers die minder tijd aan de telefoon willen kwijt zijn en meer vaste klanten in de stoel willen.",
          en: "For hair salons, barbershops, salon chains and independent hairdressers who want to spend less time on the phone and have more regular clients in the chair.",
        },
        types: [
          { nl: "Kapsalons", en: "Hair salons" },
          { nl: "Barbershops", en: "Barbershops" },
          { nl: "Kapperketens", en: "Salon chains" },
          { nl: "Zelfstandige kappers", en: "Independent hairdressers" },
        ],
        useCases: [
          {
            title: { nl: "Website met online afspraken", en: "A website with online appointments" },
            text: {
              nl: "Behandelingen, prijzen en je team overzichtelijk op een rij, met een boekingsknop die gekoppeld is aan je salonsoftware.",
              en: "Treatments, prices and your team clearly laid out, with a booking button linked to your salon software.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Een look die blijft hangen", en: "A look that sticks" },
            text: {
              nl: "Een logo en huisstijl met karakter, van de gevel en de kapmantels tot je Instagram en cadeaubonnen.",
              en: "A logo and identity with character, from the shopfront and capes to your Instagram and gift vouchers.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Gevonden op 'kapper in de buurt'", en: "Found for 'hairdresser near me'" },
            text: {
              nl: "Een compleet Google Bedrijfsprofiel met foto's, reviews en de juiste openingstijden, plus een pagina per behandeling.",
              en: "A complete Google Business Profile with photos, reviews and the right opening hours, plus a page per treatment.",
            },
            service: "seo-aeo-geo",
            application: "lokale-seo",
          },
          {
            title: { nl: "Vacaturecampagne voor kappers", en: "A recruitment campaign for hairdressers" },
            text: {
              nl: "Advertenties op Instagram en Facebook met een korte video uit je salon en solliciteren in twee minuten.",
              en: "Instagram and Facebook ads with a short video from your salon and a two-minute application.",
            },
            service: "content-marketing-online-ads",
            application: "meta-ads",
          },
          {
            title: { nl: "Seintje voor de volgende knipbeurt", en: "A nudge for the next haircut" },
            text: {
              nl: "Komt een vaste klant langer niet dan normaal, dan krijgt hij automatisch een berichtje met een directe boekingslink. Vriendelijk, op het juiste moment en zonder dat iemand lijstjes bijhoudt.",
              en: "If a regular stays away longer than usual, they automatically get a message with a direct booking link. Friendly, well timed and without anyone keeping lists.",
            },
            service: "automation-funnels",
            application: "marketing-automation",
          },
          {
            title: { nl: "Video's van fades en kleurwerk", en: "Videos of fades and colour work" },
            text: {
              nl: "Korte video's van een strakke fade, een kleurbehandeling of een complete make-over, gefilmd in je eigen salon. Gemaakt voor TikTok en Instagram, en in een paar seconden zie je wat je kunt.",
              en: "Short videos of a sharp fade, a colour treatment or a complete makeover, filmed in your own salon. Made for TikTok and Instagram, showing in a few seconds what you can do.",
            },
            service: "foto-video-3d-animatie",
            application: "social-video",
          },
          {
            title: { nl: "Prijsindicatie voor kleur of bruidskapsel", en: "Price indication for colour or bridal hair" },
            text: {
              nl: "Kleurbehandelingen en bruidskapsels hangen af van lengte, dikte en wensen. Een korte calculator geeft vooraf een eerlijke indicatie, zodat er bij het afrekenen geen verrassingen zijn.",
              en: "Colour treatments and bridal styling depend on length, thickness and wishes. A short calculator gives an honest indication upfront, so there are no surprises at the till.",
            },
            service: "configurators-lead-tools-widgets",
            application: "offerte-calculator",
          },
          {
            title: { nl: "Gevel, raam en spiegel in stijl", en: "Shopfront, window and mirror in style" },
            text: {
              nl: "Een gevel die opvalt in de winkelstraat, belettering op het raam en stickers voor de spiegels. Zo maakt je barbershop al reclame voordat iemand binnenstapt.",
              en: "A shopfront that stands out on the high street, lettering on the window and decals for the mirrors. That way your barbershop advertises itself before anyone walks in.",
            },
            service: "grafisch-ontwerp-print",
            application: "beurs-signing",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat moet een website voor een kapsalon of barbershop kunnen?", en: "What should a website for a hair salon or barbershop be able to do?" },
            a: {
              nl: "Vooral snel antwoord geven en boeken makkelijk maken. Een prijslijst die klopt, foto's van je salon en van echt werk, je team met wie wat doet, en openingstijden die je ook rond de feestdagen bijwerkt. De boekingsknop staat overal in beeld, want wie op je site komt, wil meestal gewoon een afspraak. Werk je met salonsoftware, dan bouwen we de boekingsmodule netjes in je [[webflow-website|website]] in, zodat de agenda altijd klopt. En een barbershop mag er gerust anders uitzien dan een dameskapsalon.",
              en: "Above all, answer questions quickly and make booking easy. A price list that is correct, photos of your salon and of real work, your team and who does what, and opening hours you also update around the holidays. The booking button is visible everywhere, because anyone visiting your site usually just wants an appointment. If you use salon software, we build its booking module neatly into your [[webflow-website|website]], so the calendar is always right. And a barbershop can easily look different from a ladies' salon.",
            },
          },
          {
            q: { nl: "Hoe krijg je als kapper meer vaste klanten?", en: "How does a hairdresser get more regular clients?" },
            a: {
              nl: "Door de volgende afspraak vanzelfsprekend te maken. Bied aan het eind van een afspraak meteen een nieuwe aan, en stuur iedereen die dat niet deed na een paar weken automatisch een berichtje met een boekingslink. Een kleine attentie na de vijfde knipbeurt voelt persoonlijk, ook als het automatisch gaat. Met [[marketing-automation|marketing automation]] gekoppeld aan je salonsoftware gebeurt dat zonder dat iemand lijstjes bijhoudt. En vraag vaste klanten om een review: dat helpt nieuwe klanten over de streep.",
              en: "By making the next appointment the obvious step. Offer a new one at the end of each visit, and automatically send anyone who did not book a message with a booking link after a few weeks. A small treat after the fifth haircut feels personal, even when it is automated. With [[marketing-automation|marketing automation]] linked to your salon software, that happens without anyone keeping lists. And ask regulars for a review: it helps new clients decide.",
            },
          },
          {
            q: { nl: "Hoe vind je als salon nieuwe kappers?", en: "How does a salon find new hairdressers?" },
            a: {
              nl: "Op dezelfde manier als klanten: door te laten zien hoe het bij jou is. Kappers kiezen een salon op sfeer, collega's, opleiding en de ruimte om te groeien. Laat dat zien op een eigen werkenbij-pagina, met foto's en korte video's van je team in plaats van een opsomming van eisen. Met [[meta-ads|Meta Ads]] en [[tiktok-ads|TikTok Ads]] bereik je kappers in je regio, binnen de regels die platforms aan vacatures stellen. Houd solliciteren kort: naam, nummer en een paar foto's van eigen werk zijn genoeg voor een eerste gesprek.",
              en: "The same way you find clients: by showing what it is like at your place. Hairdressers choose a salon on atmosphere, colleagues, training and room to grow. Show that on a dedicated careers page, with photos and short videos of your team instead of a list of requirements. With [[meta-ads|Meta Ads]] and [[tiktok-ads|TikTok Ads]] you reach hairdressers in your region, within the rules platforms set for job ads. Keep applying short: a name, a number and a few photos of their own work are enough for a first conversation.",
            },
          },
          {
            q: { nl: "Hoe pak je het online aan met meerdere salons?", en: "How do you handle online marketing with several salons?" },
            a: {
              nl: "Met één merk en een eigen plek per vestiging. Elke salon krijgt een pagina met adres, team, openingstijden en een boekingsknop die direct naar de agenda van die vestiging gaat. Met [[lokale-seo|lokale SEO]] en een apart Google Bedrijfsprofiel per salon vindt iemand in Veghel de salon in Veghel, en niet die in Den Bosch. Een [[brandbook|brandbook]] met templates voor social en posters houdt de uitstraling overal gelijk, terwijl elk team lokaal zijn eigen gezicht kan laten zien.",
              en: "With one brand and a dedicated place for each location. Every salon gets a page with address, team, opening hours and a booking button that goes straight to that location's calendar. With [[lokale-seo|local SEO]] and a separate Google Business Profile per salon, someone in Veghel finds the salon in Veghel, not the one in Den Bosch. A [[brandbook|brand book]] with templates for social and posters keeps the look consistent everywhere, while each team can still show its own local face.",
            },
          },
          {
            q: { nl: "Hoe krijg je als kapsalon meer Google-reviews?", en: "How does a hair salon get more Google reviews?" },
            a: {
              nl: "Door het op het juiste moment te vragen, en het makkelijk te maken. Stuur na de afspraak [[workflow-automatisering|automatisch]] een kort berichtje met een directe link naar je reviewpagina, als de klant nog blij is met zijn nieuwe kapsel. Reageer op elke review, ook op de kritische, want toekomstige klanten lezen mee. Beloningen voor reviews laat je weg: Google staat dat niet toe, en een eerlijk [[lokale-seo|Google Bedrijfsprofiel]] werkt op den duur het best.",
              en: "By asking at the right moment, and making it easy. [[workflow-automatisering|Automatically]] send a short message after the appointment with a direct link to your review page, while the client is still happy with their new cut. Reply to every review, including the critical ones, because future clients read along. Skip rewards for reviews: Google does not allow them, and an honest [[lokale-seo|Google Business Profile]] works best in the long run.",
            },
          },
          {
            q: { nl: "Is TikTok of Instagram de moeite waard voor een kapper?", en: "Are TikTok and Instagram worth it for a hairdresser?" },
            a: {
              nl: "Vaak wel, want haar is visueel en een make-over in vijftien seconden is precies wat mensen daar zoeken. Instagram werkt als portfolio waar klanten je stijl bekijken, TikTok helpt om nieuwe mensen te bereiken. Het lukt alleen als je het volhoudt, dus film tijdens het werk een paar vaste formats en plan je posts vooruit met een eenvoudige [[contentstrategie|contentplanning]]. Met één shootdag voor [[social-video|korte video's]] heb je materiaal voor weken.",
              en: "Often, yes, because hair is visual and a fifteen-second makeover is exactly what people look for there. Instagram works as a portfolio where clients check your style, TikTok helps you reach new people. It only works if you keep it up, so film a few fixed formats while you work and plan your posts ahead with a simple [[contentstrategie|content plan]]. With one shoot day for [[social-video|short videos]] you have material for weeks.",
            },
          },
          {
            q: { nl: "Hoe pak je een nieuwe naam of salonovername online aan?", en: "How do you handle a new name or salon takeover online?" },
            a: {
              nl: "Vertel je vaste klanten het op tijd, in de salon en per mail, zodat niemand denkt dat je zaak verdwenen is. Werk je bestaande Google Bedrijfsprofiel bij in plaats van een nieuw aan te maken, dan blijven je reviews meestal behouden. Gaat je website over naar een nieuwe naam of domein, zorg dan voor [[website-migratie|nette doorverwijzingen]], zodat je vindbaarheid niet opnieuw begint. En een [[rebranding|rebranding]] voer je het liefst in één keer door: gevel, website, socials en cadeaubonnen tegelijk.",
              en: "Tell your regulars in good time, in the salon and by email, so nobody thinks your business has disappeared. Update your existing Google Business Profile instead of creating a new one, and your reviews will usually stay. If your website moves to a new name or domain, set up [[website-migratie|proper redirects]], so your visibility does not start from scratch. And ideally you roll out a [[rebranding|rebrand]] in one go: shopfront, website, socials and gift vouchers at the same time.",
            },
          },
        ],
      },
      {
        name: { nl: "Cosmetica & skincare", en: "Cosmetics & skincare" },
        intro: {
          nl: "Voor cosmeticamerken, skincarelabels, parfummerken en haarverzorgingsmerken, van startend label met één serum tot merk met een eigen webshop en verkooppunten in salons en winkels.",
          en: "For cosmetics brands, skincare labels, fragrance brands and hair care brands, from a new label with a single serum to a brand with its own web shop and stockists in salons and shops.",
        },
        types: [
          { nl: "Cosmeticamerken", en: "Cosmetics brands" },
          { nl: "Skincaremerken", en: "Skincare brands" },
          { nl: "Parfummerken", en: "Fragrance brands" },
          { nl: "Haarverzorgingsmerken", en: "Hair care brands" },
        ],
        useCases: [
          {
            title: { nl: "Verpakking en etiket met uitstraling", en: "Packaging and labels with presence" },
            text: {
              nl: "Potjes, doosjes en etiketten die premium aanvoelen, met netjes ingepaste ruimte voor de ingrediëntenlijst en de verplichte teksten.",
              en: "Jars, boxes and labels that feel premium, with room neatly built in for the ingredient list and mandatory text.",
            },
            service: "grafisch-ontwerp-print",
            application: "verpakkingsontwerp",
          },
          {
            title: { nl: "Productfoto's met textuur", en: "Product photos with texture" },
            text: {
              nl: "Packshots, swatches en close-ups van texturen die laten zien hoe een product eruitziet en aanvoelt.",
              en: "Packshots, swatches and close-ups of textures that show how a product looks and feels.",
            },
            service: "foto-video-3d-animatie",
            application: "productfotografie",
          },
          {
            title: { nl: "Keuzehulp per huidtype", en: "Product finder per skin type" },
            text: {
              nl: "Een paar vragen over huidtype en wensen, en de bezoeker ziet welke producten bij hem passen. Zonder medische beloftes.",
              en: "A few questions about skin type and wishes, and the visitor sees which products suit them. Without medical promises.",
            },
            service: "configurators-lead-tools-widgets",
            application: "keuzehulp-quiz",
          },
          {
            title: { nl: "Ads met eerlijke claims", en: "Ads with honest claims" },
            text: {
              nl: "Campagnes op Instagram en TikTok met teksten die overtuigen en binnen de regels voor cosmeticaclaims blijven.",
              en: "Campaigns on Instagram and TikTok with copy that convinces and stays within the rules for cosmetic claims.",
            },
            service: "content-marketing-online-ads",
            application: "tiktok-ads",
          },
          {
            title: { nl: "Merkstrategie voor een nieuw label", en: "Brand strategy for a new label" },
            text: {
              nl: "Voor wie is je merk, welk probleem los je op en waarom zou iemand je zijn huid toevertrouwen? Die keuzes leggen we vast voordat er ook maar één potje ontworpen wordt.",
              en: "Who is your brand for, which problem do you solve and why would someone trust you with their skin? We pin those choices down before a single jar is designed.",
            },
            service: "branding-rebranding",
            application: "merkstrategie",
          },
          {
            title: { nl: "Webshop met routine per huidtype", en: "Web shop with skin-type routines" },
            text: {
              nl: "Productpagina's met ingrediënten, gebruiksadvies en een complete routine, plus bundels of abonnementen als dat bij je merk past. Rustig, overzichtelijk en snel op een telefoon.",
              en: "Product pages with ingredients, usage advice and a complete routine, plus bundles or subscriptions if they suit your brand. Calm, clear and fast on a phone.",
            },
            service: "websites-webshops",
            application: "webshop",
          },
          {
            title: { nl: "Herhaalaankoop op het juiste moment", en: "Repeat purchases at the right moment" },
            text: {
              nl: "Een serum is na een paar weken op. Een automatische mail rond dat moment, met gebruikstips en een directe bestellink, helpt om van een eerste koper een vaste klant te maken.",
              en: "A serum runs out after a few weeks. An automatic email around that time, with usage tips and a direct order link, helps turn a first-time buyer into a regular.",
            },
            service: "automation-funnels",
            application: "e-mailmarketing",
          },
          {
            title: { nl: "Antwoorden op ingrediëntvragen", en: "Answers to ingredient questions" },
            text: {
              nl: "Pagina's die vragen beantwoorden als 'wat doet niacinamide?' of 'in welke volgorde gebruik ik serum en crème?'. Heldere uitleg waarmee je gevonden wordt in Google en meer kans maakt om door AI-assistenten genoemd te worden.",
              en: "Pages that answer questions like 'what does niacinamide do?' or 'in which order do I use serum and cream?'. Clear explanations that help you get found on Google and improve your chances of being mentioned by AI assistants.",
            },
            service: "seo-aeo-geo",
            application: "aeo",
          },
        ],
        faqs: [
          {
            q: { nl: "Wat mag je wel en niet beloven over een cosmeticaproduct?", en: "What can and can't you promise about a cosmetic product?" },
            a: {
              nl: "Een cosmeticaproduct verzorgt, reinigt of verfraait, het geneest niet. Claims als 'geneest acne' of 'herstelt je huid permanent' horen daar dus niet bij. Voor cosmetica gelden Europese regels: wat je belooft, moet waar en onderbouwd zijn, bijvoorbeeld met testresultaten. Ook 'vrij van'-claims en vergelijkingen moeten eerlijk zijn. Wij schrijven [[tone-of-voice|teksten]] die laten zien wat je product doet en voor wie het is, zonder te overdrijven. Laat twijfelgevallen checken door de verantwoordelijke persoon voor je product of een specialist in cosmeticawetgeving.",
              en: "A cosmetic product cares for, cleans or beautifies; it does not cure. So claims like 'cures acne' or 'permanently repairs your skin' do not belong there. Cosmetics are subject to European rules: what you promise must be true and substantiated, for example with test results. 'Free from' claims and comparisons must be fair too. We write [[tone-of-voice|copy]] that shows what your product does and who it is for, without exaggerating. Have doubtful cases checked by the responsible person for your product or a specialist in cosmetics law.",
            },
          },
          {
            q: { nl: "Hoe bouw je een skincaremerk op met een eigen webshop?", en: "How do you build a skincare brand with its own web shop?" },
            a: {
              nl: "Begin bij een duidelijk verhaal: voor wie is je merk, welk probleem pak je aan en waarom zou iemand jou vertrouwen met zijn huid? Dat vertaal je naar een [[merkstrategie|merkstrategie]], verpakking en webshop die hetzelfde vertellen. In de webshop helpen ingrediëntenlijsten, gebruiksadvies en een routine per huidtype meer dan grote woorden. Verzorging raakt op, dus richt [[e-mailmarketing|e-mailflows]] in voor herhaalaankopen en tips na de eerste bestelling. Zo groeit je merk op vaste klanten, niet alleen op advertenties.",
              en: "Start with a clear story: who is your brand for, which problem do you tackle and why would someone trust you with their skin? Translate that into a [[merkstrategie|brand strategy]], packaging and web shop that all tell the same story. In the web shop, ingredient lists, usage advice and a routine per skin type help more than big words. Skincare runs out, so set up [[e-mailmarketing|email flows]] for repeat purchases and tips after the first order. That way your brand grows on regular customers, not just on ads.",
            },
          },
          {
            q: { nl: "Hoe krijg je je cosmeticamerk in salons en winkels?", en: "How do you get your cosmetics brand into salons and shops?" },
            a: {
              nl: "Salons en winkels kiezen merken die ze makkelijk kunnen verkopen. Help ze daarbij met een verzorgde presentatie of brochure, duidelijke marges en voorwaarden, en kant-en-klaar materiaal: displays, testers, posters en posts voor hun eigen socials. Een B2B-omgeving waarin ze online nabestellen tegen hun eigen prijzen maakt het nog makkelijker. We ontwerpen het [[brochures-magazines|verkoopmateriaal]] en bouwen de [[webshop|bestelomgeving]], zodat je merk in de salon net zo sterk staat als online. En een tevreden salon vertelt het door aan collega's.",
              en: "Salons and shops choose brands they can sell easily. Help them with a well-made presentation or brochure, clear margins and terms, and ready-made material: displays, testers, posters and posts for their own socials. A B2B environment where they reorder online at their own prices makes it even easier. We design the [[brochures-magazines|sales material]] and build the [[webshop|ordering platform]], so your brand stands as strong in the salon as it does online. And a happy salon tells its colleagues.",
            },
          },
          {
            q: { nl: "Wat moet er op het etiket van een cosmeticaproduct staan?", en: "What has to be on the label of a cosmetic product?" },
            a: {
              nl: "In de EU schrijft de cosmeticaverordening een vaste set gegevens voor, zoals de naam en het adres van de verantwoordelijke persoon, de inhoud, de houdbaarheid of de periode na openen, het batchnummer, waarschuwingen en de ingrediëntenlijst. Sommige teksten moeten in de taal van het land waar je verkoopt. Dat is veel informatie op een klein potje, dus daar ontwerpen we vanaf het begin ruimte voor in je [[verpakkingsontwerp|verpakking en etiket]]. De inhoud laat je controleren door de verantwoordelijke persoon voor je product.",
              en: "In the EU, the Cosmetics Regulation prescribes a fixed set of details, such as the name and address of the responsible person, the contents, the durability or period after opening, the batch number, warnings and the ingredient list. Some texts have to be in the language of the country where you sell. That is a lot of information on a small jar, so we design room for it from the start in your [[verpakkingsontwerp|packaging and label]]. Have the content checked by the responsible person for your product.",
            },
          },
          {
            q: { nl: "Mag ik influencers inzetten voor mijn cosmeticamerk?", en: "Can I work with influencers for my cosmetics brand?" },
            a: {
              nl: "Ja, maar duidelijk als reclame. In Nederland geldt de Reclamecode Social Media & Influencer Marketing: een betaalde of gesponsorde post moet herkenbaar zijn als reclame, ook als de influencer het product gratis kreeg. Voor wat zij zeggen gelden bovendien dezelfde regels voor claims als voor je eigen teksten. Geef makers daarom een korte briefing met do's en don'ts, en kies voor je [[social-media-marketing|social media]] mensen bij wie je doelgroep echt meekijkt.",
              en: "Yes, but clearly as advertising. In the Netherlands the Advertising Code for Social Media & Influencer Marketing applies: a paid or sponsored post must be recognisable as an ad, even if the influencer got the product for free. The same rules for claims also apply to what they say as to your own copy. So give creators a short brief with dos and don'ts, and for your [[social-media-marketing|social media]] choose people your audience actually follows.",
            },
          },
          {
            q: { nl: "Eigen webshop of verkopen via marktplaatsen en drogisterijen?", en: "Your own web shop, or selling via marketplaces and drugstores?" },
            a: {
              nl: "Meestal allebei, maar met een duidelijke rol per kanaal. Marktplaatsen en winkels geven bereik, je eigen [[webshop|webshop]] geeft je marge, klantgegevens en de ruimte om je verhaal te vertellen. Zorg dat je merk overal hetzelfde oogt, met dezelfde beelden en productteksten. En gebruik je webshop om klanten aan je te binden, bijvoorbeeld met [[e-mailmarketing|e-mailflows]] voor nabestellingen.",
              en: "Usually both, but with a clear role for each channel. Marketplaces and shops bring reach, your own [[webshop|web shop]] gives you margin, customer data and room to tell your story. Make sure your brand looks the same everywhere, with the same images and product copy. And use your web shop to build loyalty, for example with [[e-mailmarketing|email flows]] for reorders.",
            },
          },
          {
            q: { nl: "Hoe maak je productfoto's van crèmes en serums die opvallen?", en: "How do you make product photos of creams and serums stand out?" },
            a: {
              nl: "Laat zien wat mensen online niet kunnen ruiken of voelen: textuur, kleur en hoe een product op de huid ligt. Combineer rustige packshots voor je webshop met swatches, close-ups en beelden met handen of ingrediënten voor social, allemaal in één vaste stijl. Met [[productfotografie|productfotografie]] op één shootdag heb je beeld voor webshop, ads en verkooppunten. Is je verpakking nog niet geproduceerd, dan geeft een [[3d-visualisatie|3D-render]] je alvast beeld voor de lancering.",
              en: "Show what people cannot smell or touch online: texture, colour and how a product sits on the skin. Combine calm packshots for your web shop with swatches, close-ups and shots with hands or ingredients for social, all in one consistent style. With [[productfotografie|product photography]] on one shoot day you have visuals for your web shop, ads and stockists. If your packaging has not been produced yet, a [[3d-visualisatie|3D render]] already gives you visuals for the launch.",
            },
          },
        ],
      },
      {
        name: { nl: "Esthetische klinieken", en: "Aesthetic clinics" },
        intro: {
          nl: "Voor esthetische klinieken, huidklinieken, laserklinieken en cosmetisch artsen die vertrouwen willen opbouwen met eerlijke informatie, en die binnen de regels voor medische reclame willen blijven.",
          en: "For aesthetic clinics, skin clinics, laser clinics and cosmetic doctors who want to build trust with honest information and stay within the rules for medical advertising.",
        },
        types: [
          { nl: "Esthetische klinieken", en: "Aesthetic clinics" },
          { nl: "Huidklinieken", en: "Skin clinics" },
          { nl: "Laserklinieken", en: "Laser clinics" },
          { nl: "Cosmetisch artsen", en: "Cosmetic doctors" },
        ],
        useCases: [
          {
            title: { nl: "Eerst een consult, online gepland", en: "A consultation first, booked online" },
            text: {
              nl: "Bezoekers plannen online een consult, met een paar vragen vooraf, zodat de behandelaar goed voorbereid is.",
              en: "Visitors book a consultation online, with a few questions beforehand, so the practitioner is well prepared.",
            },
            service: "configurators-lead-tools-widgets",
            application: "boekingswidget",
          },
          {
            title: { nl: "Eerlijke uitleg per behandeling", en: "Honest explanation per treatment" },
            text: {
              nl: "Pagina's die uitleggen hoe een behandeling verloopt, wat de risico's en de hersteltijd zijn en voor wie hij niet geschikt is.",
              en: "Pages that explain how a treatment works, what the risks and recovery time are and who it is not suitable for.",
            },
            service: "seo-aeo-geo",
            application: "seo-content",
          },
          {
            title: { nl: "Een rustig, betrouwbaar merk", en: "A calm, trustworthy brand" },
            text: {
              nl: "Een huisstijl die medisch vakmanschap uitstraalt zonder kil te worden, met echte portretten van je behandelaars.",
              en: "An identity that conveys medical expertise without feeling cold, with real portraits of your practitioners.",
            },
            service: "branding-rebranding",
            application: "huisstijl",
          },
          {
            title: { nl: "Aanvragen netjes opgevolgd", en: "Enquiries properly followed up" },
            text: {
              nl: "Een CRM en een paar automatische stappen, zodat elke aanvraag snel een bevestiging krijgt en niemand tussen wal en schip valt.",
              en: "A CRM and a few automated steps, so every enquiry gets a quick confirmation and nobody slips through the cracks.",
            },
            service: "automation-funnels",
            application: "crm-implementatie",
          },
          {
            title: { nl: "Website met je behandelaars voorop", en: "A website that puts practitioners first" },
            text: {
              nl: "Per behandeling staat wie hem uitvoert, met opleiding en registraties, en hoe een consult verloopt. Vertrouwen begint bij weten wie je behandelt, dus dat staat niet weggestopt onder 'over ons'.",
              en: "Each treatment shows who performs it, with their training and registrations, and how a consultation works. Trust starts with knowing who treats you, so that is not tucked away under 'about us'.",
            },
            service: "websites-webshops",
            application: "webflow-website",
          },
          {
            title: { nl: "Rustige film over kliniek en team", en: "A calm film about clinic and team" },
            text: {
              nl: "Een korte bedrijfsfilm die laat zien hoe je kliniek eruitziet en wie er werken. Feitelijk en persoonlijk, zonder voor-en-nabeloftes, en bruikbaar op je website en in de bevestiging van een consult.",
              en: "A short corporate film that shows what your clinic looks like and who works there. Factual and personal, without before-and-after promises, and useful on your website and in a consultation confirmation.",
            },
            service: "foto-video-3d-animatie",
            application: "bedrijfsfilm",
          },
          {
            title: { nl: "Chatbot voor praktische vragen", en: "Chatbot for practical questions" },
            text: {
              nl: "Een assistent op je site die vragen over openingstijden, voorbereiding en nazorg beantwoordt op basis van jouw eigen informatie. Medische vragen verwijst hij netjes door naar een behandelaar.",
              en: "An assistant on your site that answers questions about opening hours, preparation and aftercare based on your own information. Medical questions are politely passed on to a practitioner.",
            },
            service: "ai-consultancy",
            application: "ai-chatbots",
          },
          {
            title: { nl: "Cliëntomgeving met veilige intake", en: "Client portal with secure intake" },
            text: {
              nl: "Cliënten vullen vooraf hun intake en medische voorgeschiedenis in en vinden daarna hun nazorginstructies terug. Veilig verwerkt en alleen zichtbaar voor wie het nodig heeft, niet in een gewone mailbox.",
              en: "Clients complete their intake and medical history beforehand and find their aftercare instructions afterwards. Processed securely and only visible to those who need it, not sitting in an ordinary inbox.",
            },
            service: "web-apps-portals-apps",
            application: "klantportaal",
          },
        ],
        faqs: [
          {
            q: { nl: "Mag een esthetische kliniek reclame maken voor botox en fillers?", en: "Can an aesthetic clinic advertise Botox and fillers?" },
            a: {
              nl: "Voor botox niet. Het is een receptgeneesmiddel, en daarvoor is publieksreclame in Nederland verboden. Je kunt wel zakelijk informeren over je behandelingen, maar de grens tussen informatie en reclame is dun. Ook voor fillers gelden regels, en Google en Meta hebben strenge voorwaarden voor medische en cosmetische advertenties. Wij houden [[seo-content|teksten]] en campagnes feitelijk, zonder voor-en-nabeloftes of kortingsacties op behandelingen. Laat je aanpak daarnaast toetsen door een jurist die thuis is in medische reclame.",
              en: "For Botox, no. It is a prescription-only medicine, and public advertising for those is prohibited in the Netherlands. You can provide factual information about your treatments, but the line between information and advertising is thin. Fillers come with rules too, and Google and Meta have strict policies for medical and cosmetic ads. We keep [[seo-content|copy]] and campaigns factual, without before-and-after promises or discounts on treatments. Also have your approach checked by a lawyer who knows medical advertising.",
            },
          },
          {
            q: { nl: "Hoe bouw je vertrouwen op als esthetische kliniek?", en: "How does an aesthetic clinic build trust?" },
            a: {
              nl: "Door te laten zien wie er behandelt en hoe je werkt. Mensen willen weten of hun behandelaar arts of verpleegkundige is, met welke opleiding en BIG-registratie. Leg per behandeling uit wat er gebeurt, wat de risico's en de hersteltijd zijn en wanneer je iemand een behandeling afraadt. Dat laatste wekt juist vertrouwen. Een rustige [[huisstijl|huisstijl]], echte foto's van je kliniek en een korte [[bedrijfsfilm|film]] over je team maken de drempel lager. Ervaringen van cliënten gebruik je alleen met toestemming en zonder overdreven claims.",
              en: "By showing who treats and how you work. People want to know whether their practitioner is a doctor or nurse, with which training and BIG registration (the Dutch register for healthcare professionals). Explain per treatment what happens, what the risks and recovery time are and when you would advise someone against it. That last part builds trust. A calm [[huisstijl|visual identity]], real photos of your clinic and a short [[bedrijfsfilm|film]] about your team lower the threshold. Client experiences are only used with consent and without exaggerated claims.",
            },
          },
          {
            q: { nl: "Hoe word je gevonden op behandelingen zonder te overdrijven?", en: "How do you get found for treatments without exaggerating?" },
            a: {
              nl: "Met content die de vragen beantwoordt die mensen echt hebben, in plaats van beloftes. Wie 'pigmentvlekken laten behandelen' of 'laserontharing' zoekt, wil weten hoe het werkt, hoeveel sessies meestal nodig zijn, wat het kost en wat de risico's zijn. Een heldere pagina per behandeling met die antwoorden maakt meer kans om gevonden te worden in Google en geciteerd door AI-assistenten. Met [[seo-content|SEO-content]] en [[lokale-seo|lokale SEO]] voor je vestiging trek je bezoekers die goed geïnformeerd een consult boeken. Dat zijn vaak ook de prettigste gesprekken.",
              en: "With content that answers the questions people really have, instead of promises. Anyone searching for 'pigmentation treatment' or 'laser hair removal' wants to know how it works, how many sessions are usually needed, what it costs and what the risks are. A clear page per treatment with those answers stands a better chance of being found in Google and cited by AI assistants. With [[seo-content|SEO content]] and [[lokale-seo|local SEO]] for your location you attract visitors who book a consultation well informed. Those are often the most pleasant conversations too.",
            },
          },
          {
            q: { nl: "Mag ik voor-en-nafoto's gebruiken op mijn website of social media?", en: "Can I use before-and-after photos on my website or social media?" },
            a: {
              nl: "Wees daar heel voorzichtig mee. Voor medische en esthetische behandelingen gelden strenge reclameregels, en platforms als Meta en Google hebben eigen voorwaarden die zulke beelden in advertenties vaak niet toestaan. Gebruik je ze toch, bijvoorbeeld op je eigen site, dan alleen met schriftelijke toestemming, onbewerkt, met uitleg over het aantal behandelingen en de vermelding dat resultaten per persoon verschillen. Laat je aanpak toetsen door een jurist die thuis is in medische reclame, en kies bij twijfel voor [[seo-content|heldere uitleg]] in plaats van beeld.",
              en: "Be very careful with them. Medical and aesthetic treatments come with strict advertising rules, and platforms such as Meta and Google have their own policies that often do not allow such images in ads. If you do use them, for example on your own site, then only with written consent, unedited, with an explanation of the number of treatments and a note that results vary from person to person. Have your approach checked by a lawyer who knows medical advertising, and when in doubt choose [[seo-content|clear explanation]] over images.",
            },
          },
          {
            q: { nl: "Mag ik medische gegevens uitvragen via een online formulier?", en: "Can I collect medical information through an online form?" },
            a: {
              nl: "Dat kan, maar gezondheidsgegevens zijn onder de AVG bijzondere persoonsgegevens, dus de lat ligt hoog. Vraag alleen wat je echt nodig hebt, zorg voor een beveiligde verbinding en opslag, en laat de gegevens niet in een gewone mailbox belanden. Met leveranciers die gegevens voor je verwerken sluit je een verwerkersovereenkomst. Een [[klantportaal|beveiligde cliëntomgeving]] of een formulier dat rechtstreeks in je dossiersysteem terechtkomt, is daarom een betere route dan een standaard contactformulier.",
              en: "You can, but under the GDPR health data is a special category of personal data, so the bar is high. Only ask for what you really need, make sure connection and storage are secure, and do not let the data end up in an ordinary inbox. With suppliers who process data on your behalf you sign a data processing agreement. A [[klantportaal|secure client portal]] or a form that feeds straight into your records system is therefore a better route than a standard contact form.",
            },
          },
          {
            q: { nl: "Hoe vul je de agenda zonder kortingsacties op behandelingen?", en: "How do you fill your calendar without discounting treatments?" },
            a: {
              nl: "Door mensen goed te informeren en daarna netjes op te volgen. Wie een behandeling overweegt, wil eerst begrijpen wat er gebeurt, wat het kost en of het bij hem past: heldere pagina's en een laagdrempelig consult zeggen dan meer dan een actie. Na een consult houd je contact met een rustige [[lead-nurturing|opvolging]] per mail, als iemand daar toestemming voor gaf. Met [[google-ads|Google Ads]] binnen de voorwaarden voor zorgadvertenties sta je in beeld bij mensen die al actief zoeken.",
              en: "By informing people well and following up properly. Anyone considering a treatment first wants to understand what happens, what it costs and whether it suits them: clear pages and an easy first consultation say more than a promotion. After a consultation you stay in touch with calm [[lead-nurturing|follow-up]] by email, if the person agreed to that. With [[google-ads|Google Ads]] within the policies for healthcare ads you show up for people who are already actively searching.",
            },
          },
          {
            q: { nl: "Kunnen we een AI-chatbot inzetten zonder medisch advies te geven?", en: "Can we use an AI chatbot without giving medical advice?" },
            a: {
              nl: "Ja, als je de grenzen vooraf scherp trekt. Een [[ai-chatbots|chatbot]] die alleen put uit jouw eigen informatie, beantwoordt praktische vragen over voorbereiding, nazorg, prijzen en openingstijden, en verwijst bij alles wat medisch is door naar een behandelaar. Laat hem geen gezondheidsgegevens opslaan zonder dat dat goed geregeld is, en vermeld duidelijk dat iemand met een AI-assistent praat. Zo ontlast hij je balie, zonder op de stoel van de arts te gaan zitten.",
              en: "Yes, if you draw the boundaries sharply upfront. A [[ai-chatbots|chatbot]] that draws only on your own information answers practical questions about preparation, aftercare, prices and opening hours, and refers anything medical to a practitioner. Do not let it store health data unless that is properly arranged, and make it clear that people are talking to an AI assistant. That way it takes pressure off your front desk without taking the doctor's seat.",
            },
          },
        ],
      },
    ],
    audiences: [
      { nl: "Modemerken", en: "Fashion labels" },
      { nl: "Kledingboutiques", en: "Clothing boutiques" },
      { nl: "Kledingwebshops", en: "Online clothing stores" },
      { nl: "Schoenenwinkels", en: "Shoe shops" },
      { nl: "Bruidsmodezaken", en: "Bridal shops" },
      { nl: "Juweliers", en: "Jewellers" },
      { nl: "Sieradenmerken", en: "Jewellery brands" },
      { nl: "Schoonheidssalons", en: "Beauty salons" },
      { nl: "Nagelstudio's", en: "Nail studios" },
      { nl: "Wimper- en browstudio's", en: "Lash and brow studios" },
      { nl: "Pedicurepraktijken", en: "Pedicure practices" },
      { nl: "Make-up artists", en: "Make-up artists" },
      { nl: "Kapsalons", en: "Hair salons" },
      { nl: "Barbershops", en: "Barbershops" },
      { nl: "Kapperketens", en: "Salon chains" },
      { nl: "Zelfstandige kappers", en: "Independent hairdressers" },
      { nl: "Cosmeticamerken", en: "Cosmetics brands" },
      { nl: "Skincaremerken", en: "Skincare brands" },
      { nl: "Parfummerken", en: "Fragrance brands" },
      { nl: "Haarverzorgingsmerken", en: "Hair care brands" },
      { nl: "Esthetische klinieken", en: "Aesthetic clinics" },
      { nl: "Huidklinieken", en: "Skin clinics" },
      { nl: "Laserklinieken", en: "Laser clinics" },
      { nl: "Cosmetisch artsen", en: "Cosmetic doctors" },
    ],
  },
];
