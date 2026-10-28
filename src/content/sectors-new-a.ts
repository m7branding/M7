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
