import type { Application, Service } from "../types";

export const service: Service = {
  slug: "grafisch-ontwerp-print",
  order: 8,
  title: { nl: "Grafisch Ontwerp & Print Design", en: "Graphic & Print Design" },
  short: { nl: "Grafisch & Print", en: "Graphic & Print" },
  color: "#FF3DF2",
  icon: "pen",
  mockup: "print",
  tagline: { nl: "Design you can hold.", en: "Design you can hold." },
  intro: {
    nl: "Van visitekaartje tot verpakking en van pitch deck tot beursstand: wij ontwerpen grafisch werk dat klopt met je merk en drukklaar de deur uit gaat.",
    en: "From business card to packaging and from pitch deck to trade-show booth: we design graphic work that is true to your brand and leaves the studio print-ready.",
  },
  description: {
    nl: "Grafisch ontwerp is waar je merk tastbaar wordt. Een brochure die je met plezier doorbladert, een verpakking die opvalt in het schap, een beursstand die van afstand al vertelt wie je bent. M7 vertaalt je huisstijl naar print én digitale middelen die niet alleen mooi zijn, maar ook doen wat ze moeten doen: informeren, overtuigen en verkopen.\n\nWe denken mee over formaat, papier en afwerking, leveren alles drukklaar aan (CMYK, afloop, snijtekens, Pantone) en begeleiden desgewenst het complete drukproces. Eén aanspreekpunt, van eerste schets tot de doos drukwerk op je bureau.",
    en: "Graphic design is where your brand becomes tangible. A brochure people enjoy leafing through, packaging that stands out on the shelf, a trade-show booth that tells who you are from across the hall. M7 translates your identity into print and digital assets that are not only beautiful but also do their job: inform, persuade and sell.\n\nWe advise on format, paper and finishing, deliver everything print-ready (CMYK, bleed, crop marks, Pantone) and, if you like, manage the entire print process. One point of contact, from first sketch to the box of print on your desk.",
  },
  highlights: [
    { value: "250+", label: { nl: "Klanten wereldwijd", en: "Clients worldwide" } },
    { value: "1", label: { nl: "Team voor merk, print & web", en: "Team for brand, print & web" } },
    { value: "A–Z", label: { nl: "Van eerste schets tot drukwerk", en: "From first sketch to finished print" } },
  ],
  terms: [
    "Grafisch ontwerp",
    "Drukwerk",
    "Visitekaartjes",
    "Briefpapier",
    "Flyers",
    "Posters",
    "Brochures",
    "Magazines",
    "Jaarverslagen",
    "Verpakkingsontwerp",
    "Etiketten",
    "Beursstand",
    "Roll-up banners",
    "Signing",
    "Belettering",
    "Pitch decks",
    "Illustraties",
    "Iconen",
    "Infographics",
    "Drukklaar aanleveren",
    "CMYK & Pantone",
    "Duurzaam papier",
  ],
  tools: ["indesign", "illustrator", "photoshop", "figma", "canva", "lightroom", "blender", "cinema4d", "aftereffects", "midjourney"],
  process: [
    {
      title: { nl: "Briefing & inventarisatie", en: "Briefing & inventory" },
      text: {
        nl: "Doel, doelgroep, formaat, oplage, deadline en budget: we brengen in kaart wat het middel moet doen en waar het terechtkomt.",
        en: "Goal, audience, format, print run, deadline and budget: we map out what the piece needs to do and where it will end up.",
      },
    },
    {
      title: { nl: "Concept & ontwerp", en: "Concept & design" },
      text: {
        nl: "We werken een of meer ontwerprichtingen uit in je huisstijl, gepresenteerd in realistische mock-ups zodat je het resultaat al voor je ziet.",
        en: "We develop one or more design directions in your identity, presented in realistic mock-ups so you can picture the result straight away.",
      },
    },
    {
      title: { nl: "Uitwerking & correcties", en: "Refinement & corrections" },
      text: {
        nl: "Tekst, beeld en details vallen op hun plek. Met heldere correctierondes werken we toe naar het definitieve ontwerp.",
        en: "Copy, imagery and details fall into place. With clear correction rounds we work towards the final design.",
      },
    },
    {
      title: { nl: "Drukklaar maken", en: "Prepress" },
      text: {
        nl: "CMYK of Pantone, afloop, snijtekens, resolutie en kleurprofiel: we maken bestanden die je drukker zonder vragen verwerkt.",
        en: "CMYK or Pantone, bleed, crop marks, resolution and colour profile: we prepare files your printer can process without questions.",
      },
    },
    {
      title: { nl: "Productie & levering", en: "Production & delivery" },
      text: {
        nl: "Desgewenst regelen we het drukwerk, controleren we de proef en bewaken we kwaliteit en planning tot de levering.",
        en: "If you like, we arrange the printing, check the proof and safeguard quality and planning all the way to delivery.",
      },
    },
  ],
  chapters: [
    {
      kicker: { nl: "Paper still talks.", en: "Paper still talks." },
      h: {
        nl: "Heeft drukwerk nog zin? Wanneer print het wint van een scherm",
        en: "Is print still worth it? When paper beats a screen",
      },
      body: {
        nl: "Die vraag horen we regelmatig: is drukwerk niet een beetje van vroeger? Het eerlijke antwoord: nee, maar print moet wel iets doen wat een scherm niet kan. Iets wat je vasthoudt, onthoud je anders dan iets wat je wegscrolt. Een brochure op tafel, een verpakking die je openmaakt, een visitekaartje met een mooie structuur: op die momenten heeft iemand je merk letterlijk in handen.\n\nPrint wint vaak:\n- Op beurzen en evenementen, waar mensen iets mee naar huis willen nemen\n- Bij producten, waar de verpakking je stilste verkoper is\n- Bij publicaties die je rustig wilt lezen, zoals een jaarverslag of catalogus\n- Bij een eerste kennismaking, waar een stevig kaartje meer zegt dan een connectieverzoek\n\nHet slimste drukwerk staat bovendien niet los van online. Met een QR-code stuur je lezers naar een [[landingspaginas|landingspagina]] die speciaal voor die flyer of die beurs is gemaakt. Met UTM-tags zie je via [[tracking-analytics|tracking en analytics]] wat het oplevert. En wie zich daar aanmeldt, houd je daarna warm met [[e-mailmarketing|e-mailmarketing]]. Zo wordt papier het begin van een gesprek, in plaats van iets wat na afloop in de papierbak verdwijnt.",
        en: "We hear this question regularly: isn't print a bit old-fashioned? The honest answer: no, but print does have to do something a screen cannot. What you hold, you remember differently from what you scroll past. A brochure on the table, packaging you open, a business card with a lovely texture: in those moments someone literally has your brand in their hands.\n\nPrint often wins:\n- At trade shows and events, where people want to take something home\n- With products, where the packaging is your quietest salesperson\n- With publications people want to read at their own pace, such as an annual report or catalogue\n- At a first meeting, where a sturdy card says more than a connection request\n\nThe smartest print does not stand apart from online, either. A QR code sends readers to a [[landingspaginas|landing page]] made especially for that flyer or that trade show. With UTM tags you can see what it delivers through [[tracking-analytics|tracking and analytics]]. And anyone who signs up there, you keep warm with [[e-mailmarketing|email marketing]]. That way paper becomes the start of a conversation, rather than something that ends up in the recycling bin afterwards.",
      },
      quote: {
        nl: "Een mail verdwijnt met één veeg, een goed visitekaartje ligt na de beurs nog op het bureau.",
        en: "An email disappears with one swipe, a good business card is still on the desk after the trade show.",
      },
    },
    {
      kicker: { nl: "Measure twice, print once.", en: "Measure twice, print once." },
      h: {
        nl: "Veelgemaakte fouten in drukwerk, en hoe je ze voorkomt",
        en: "Common print mistakes, and how to avoid them",
      },
      body: {
        nl: "De meeste drukfouten ontstaan niet bij de drukker, maar veel eerder. Op je scherm ziet alles er strak uit. Pas als de doos opengaat, blijkt het logo wazig of oogt de merkkleur ineens grauw. Gelukkig zijn de meeste missers goed te voorkomen.\n\nDeze komen we het vaakst tegen:\n- Een logo dat van de website is geplukt, in een resolutie die voor print veel te laag is\n- Merkkleuren die alleen in RGB zijn vastgelegd, zonder CMYK- of Pantone-waarde\n- Te veel tekst op een te klein formaat, omdat alles erop moet\n- Kleine letters in lichtgrijs: mooi op je scherm, onleesbaar op papier\n- Belangrijke informatie te dicht bij de rand of precies in de vouw\n- Papier kiezen op prijs alleen, terwijl gewicht en structuur bepalen hoe je merk aanvoelt\n\nDe oplossing begint bij goede basisbestanden. Een [[huisstijl|huisstijl]] met vaste kleurwaarden voor scherm én druk, logo's in vectorformaat en heldere regels voor typografie scheelt bij elk volgend drukwerk tijd en gedoe. Werk je met fotografie, zorg dan voor beeld in hoge resolutie. Daarom leveren we [[productfotografie|productfoto's]] ook in printkwaliteit aan, niet alleen voor je webshop.\n\nTwijfel je over papier? Vraag om papierstalen. Voelen gaat sneller dan uitleggen.",
        en: "Most print mistakes do not happen at the printer, but much earlier. On your screen everything looks crisp. Only when the box is opened does it turn out the logo is blurry or the brand colour suddenly looks dull. Fortunately, most slip-ups are easy to prevent.\n\nThese are the ones we see most often:\n- A logo grabbed from the website, at a resolution far too low for print\n- Brand colours defined only in RGB, without a CMYK or Pantone value\n- Too much text on too small a format, because everything has to go on it\n- Small type in light grey: lovely on screen, unreadable on paper\n- Important information too close to the edge or right in the fold\n- Choosing paper on price alone, while weight and texture decide how your brand feels\n\nThe fix starts with good base files. A [[huisstijl|visual identity]] with fixed colour values for screen and print, logos in vector format and clear typography rules saves time and hassle on every future print job. Working with photography? Make sure your images are high resolution. That is why we also deliver [[productfotografie|product photos]] in print quality, not just for your web shop.\n\nNot sure about paper? Ask for paper samples. Feeling is faster than explaining.",
      },
      quote: {
        nl: "Papier is letterlijk het eerste wat iemand van je merk voelt.",
        en: "Paper is quite literally the first thing people feel of your brand.",
      },
    },
    {
      kicker: { nl: "Consistency is a habit.", en: "Consistency is a habit." },
      h: {
        nl: "Templates voor drukwerk: zelf aanpassen en toch on-brand blijven",
        en: "Print templates: edit it yourself and still stay on-brand",
      },
      body: {
        nl: "Niet elk stuk drukwerk hoeft een nieuw ontwerptraject te zijn. Een nieuwe datum op de flyer, een kaartje voor een nieuwe collega, een presentatie voor die ene klant: dat wil je snel zelf kunnen regelen. Liefst zonder dat je merk na een jaar op allerlei manieren de deur uitgaat.\n\nDaarom bouwen we bij grafisch werk vaak meteen de templates mee:\n- Een masterlayout voor presentaties in PowerPoint, Keynote, Google Slides of Figma\n- Canva-templates voor flyers en posts, waarin je tekst en beeld aanpast zonder de opmaak te slopen\n- Open InDesign-bestanden voor een volgende editie van je brochure of magazine\n- Een template voor visitekaartjes, zodat je alleen naam en functie hoeft door te geven\n\nTemplates werken het best als de basis klopt. Daarom leggen we de spelregels vast in een [[brandbook|brandbook]]. Dan weet iedereen welk lettertype waar hoort, hoeveel ruimte een logo nodig heeft en welke kleur je beter niet op welke achtergrond zet.\n\nEn omdat je merk niet alleen op papier leeft, sluiten we het grafische werk aan op de rest. Dezelfde iconen en illustraties komen terug in je [[ux-ui-webdesign|webdesign]], en een infographic uit je jaarverslag is zo omgebouwd tot een post voor [[social-media-marketing|social media]]. Zo blijft alles herkenbaar, wie het ook maakt.",
        en: "Not every print job needs a new design project. A new date on the flyer, a card for a new colleague, a presentation for that one client: you want to sort that out yourself, quickly. Preferably without your brand going out the door in all sorts of different ways a year later.\n\nThat is why we often build the templates right alongside the design work:\n- A master layout for presentations in PowerPoint, Keynote, Google Slides or Figma\n- Canva templates for flyers and posts, where you change text and images without breaking the layout\n- Open InDesign files for the next edition of your brochure or magazine\n- A business card template, so all you need to send is a name and job title\n\nTemplates work best when the foundation is right. That is why we capture the ground rules in a [[brandbook|brand book]]. Then everyone knows which typeface goes where, how much space a logo needs and which colour you had better not put on which background.\n\nAnd because your brand does not only live on paper, we connect the graphic work to everything else. The same icons and illustrations return in your [[ux-ui-webdesign|web design]], and an infographic from your annual report is quickly turned into a [[social-media-marketing|social media]] post. That way everything stays recognisable, whoever makes it.",
      },
    },
  ],
  seo: {
    title: {
      nl: "Grafisch ontwerp en drukwerk laten maken, van eerste schets tot drukklaar bestand",
      en: "Graphic design and print, from first sketch to print-ready file",
    },
    sections: [
      {
        h: { nl: "Wat doet een grafisch ontwerpbureau?", en: "What does a graphic design agency do?" },
        body: {
          nl: "Een grafisch ontwerpbureau vertaalt je merk en je boodschap naar dingen die je kunt zien, vasthouden en delen. Visitekaartjes en briefpapier, natuurlijk. Maar ook brochures, magazines, jaarverslagen, verpakkingen, beursstands, presentaties en infographics.\n\nGoed grafisch ontwerp is geen versiering. Het zorgt dat informatie snel te begrijpen is, dat je merk overal herkenbaar terugkomt en dat je lezer weet wat de volgende stap is. Een mooie folder waar niemand iets mee doet, is vooral mooi oud papier.\n\nWe werken vanuit je bestaande [[branding-rebranding|huisstijl]], of bouwen die eerst. Zo sluit elk middel aan op je website, je social media en je campagnes. Daarbij combineren we ontwerp met kennis van druktechnieken, papiersoorten en afwerkingen. Want wat op je scherm mooi oogt, moet er op papier net zo goed uitzien. En het moet ook nog betaalbaar te produceren zijn. Mooi en praktisch, daar draait het om.",
          en: "A graphic design agency translates your brand and your message into things you can see, hold and share. Business cards and letterheads, of course. But also brochures, magazines, annual reports, packaging, trade-show booths, presentations and infographics.\n\nGood graphic design is not decoration. It makes information quick to understand, keeps your brand recognisable everywhere and tells your reader what the next step is. A beautiful leaflet that nobody acts on is mostly beautiful scrap paper.\n\nWe work from your existing [[branding-rebranding|visual identity]], or build it first. That way every piece connects with your website, your social media and your campaigns. We combine design with knowledge of printing techniques, paper stocks and finishes. Because what looks good on your screen has to look just as good on paper. And it should be affordable to produce, too. Beautiful and practical, that is the point.",
        },
      },
      {
        h: { nl: "Drukklaar aanleveren: waar let je op?", en: "Print-ready files: what to look out for" },
        body: {
          nl: "Een prachtig ontwerp is weinig waard als het scheef, wazig of in de verkeerde kleur uit de pers komt. Daarom leveren we alles drukklaar aan, volgens de specificaties van je drukker:\n- Kleuren in CMYK, of in Pantone (PMS) voor steunkleuren die exact moeten kloppen\n- Minimaal 3 mm afloop rondom, plus snijtekens\n- Beelden in minimaal 300 dpi op werkelijk formaat\n- Lettertypes ingesloten of omgezet naar contouren\n- Export als PDF/X met het juiste kleurprofiel\n- Rekening houden met vouwlijnen, rugdikte en stansvormen\n\nVoordat iets de deur uitgaat, lopen we de bestanden na op de bekende valkuilen: een te lage resolutie, RGB-beelden die stiekem zijn blijven staan, tekst die te dicht op de snijlijn zit. Gaat het om een belangrijke oplage? Dan raden we een proefdruk aan, zodat je kleur en papier vooraf echt kunt zien en voelen. Wat je goedkeurt, is dan ook wat er geleverd wordt. Geen verrassingen bij het openen van de doos.",
          en: "A beautiful design is worth little if it comes off the press crooked, blurry or in the wrong colour. That is why we deliver everything print-ready, according to your printer's specifications:\n- Colours in CMYK, or in Pantone (PMS) for spot colours that must be exact\n- At least 3 mm bleed on all sides, plus crop marks\n- Images at a minimum of 300 dpi at actual size\n- Fonts embedded or converted to outlines\n- Export as PDF/X with the correct colour profile\n- Allowance for folds, spine width and die lines\n\nBefore anything leaves the studio, we check the files for the usual pitfalls: low resolution, RGB images that quietly slipped through, text sitting too close to the trim line. Is it an important print run? Then we recommend a hard proof, so you can really see and feel colour and paper beforehand. What you approve is then what gets delivered. No surprises when you open the box.",
        },
      },
      {
        h: { nl: "Van verpakking tot beursstand: ontwerpen in 3D", en: "From packaging to trade-show booth: designing in 3D" },
        body: {
          nl: "Sommige ontwerpen moet je in de ruimte zien om ze goed te beoordelen. Een verpakking heeft zes kanten, een beursstand meerdere wanden en een bedrijfsbus rondingen, deuren en ramen. Een plat ontwerp op je scherm vertelt dan maar de helft van het verhaal.\n\nBij verpakkingsontwerp werken we daarom direct op de stansvorm van je producent. Het resultaat visualiseren we als realistische 3D-mock-up in Blender. Zo zie je vooraf hoe je verpakking in het schap staat, hoe je stand eruitziet vanaf het gangpad en waar je belettering precies op het voertuig valt. Liever een verrassing op je scherm dan op de productievloer.\n\nBijkomend voordeel: die renders zijn meteen bruikbaar. Voor je [[webshop|webshop]], je social media en je campagnes, nog voordat het eerste exemplaar bestaat. En bij een presentatie aan je team of aan retailers kijkt iedereen naar hetzelfde eindresultaat. Dat scheelt een hoop 'ik had het me anders voorgesteld'.",
          en: "Some designs need to be seen in space to be judged properly. Packaging has six sides, a trade-show booth several walls and a company van curves, doors and windows. A flat design on your screen only tells half the story.\n\nThat is why, for packaging design, we work directly on your manufacturer's die line. We visualise the result as a realistic 3D mock-up in Blender. That way you see in advance how your packaging sits on the shelf, how your booth looks from the aisle and exactly where your graphics fall on the vehicle. Better a surprise on your screen than on the production floor.\n\nAn added bonus: those renders are ready to use straight away. For your [[webshop|web shop]], your social media and your campaigns, before the first unit even exists. And when you present to your team or to retailers, everyone looks at the same end result. That saves a lot of 'I imagined it differently'.",
        },
      },
      {
        h: { nl: "Duurzaam drukwerk", en: "Sustainable print" },
        body: {
          nl: "Print en duurzaamheid gaan prima samen, als je bewust kiest. We denken met je mee over:\n- Papier met FSC- of PEFC-keurmerk, of gerecycled papier\n- Een realistische oplage, zodat er geen dozen op zolder belanden\n- Formaten die efficiënt op een drukvel passen, met minder snijafval\n- Minder inkt, en afwerkingen die recycling niet in de weg zitten\n- Monomaterialen bij verpakkingen, zodat ze beter te recyclen zijn\n\nSoms is het slimste advies om iets juist níet te drukken. Een interactieve PDF, een online flipbook of een digitale visitekaart doet het werk misschien net zo goed. We kijken eerlijk wat bij je doel past, ook als dat minder drukwerk betekent. Eerlijk advies is ook duurzaam.\n\nWordt er wél gedrukt? Dan kiezen we een drukker die past bij je duurzaamheidsambities, en een papiersoort die bij je merk én je verhaal klopt.",
          en: "Print and sustainability go together fine, as long as you choose consciously. We help you think about:\n- FSC or PEFC certified paper, or recycled paper\n- A realistic print run, so no boxes end up in the attic\n- Formats that fit efficiently on a press sheet, with less trim waste\n- Less ink, and finishes that do not get in the way of recycling\n- Mono-materials for packaging, so it is easier to recycle\n\nSometimes the smartest advice is not to print at all. An interactive PDF, an online flipbook or a digital business card might do the job just as well. We look honestly at what suits your goal, even if that means less print. Honest advice is sustainable too.\n\nPrinting after all? Then we choose a printer that matches your sustainability ambitions, and a paper stock that suits both your brand and your story.",
        },
      },
      {
        h: { nl: "Waarom kiezen voor M7 voor grafisch ontwerp en print?", en: "Why choose M7 for graphic and print design?" },
        body: {
          nl: "M7 is een compact team van creatieve en technische specialisten, met branding, web, content en print onder één dak. Je drukwerk is bij ons dus nooit een losstaand klusje, maar een onderdeel van je complete merk. Je brochure klopt met je website, je beursstand met je LinkedIn-campagne en je verpakking met je webshop. Eén merk, één gevoel, op papier en op scherm.\n\nJe hebt één aanspreekpunt, van briefing tot levering. We denken mee over formaat, papier en afwerking, leveren drukklaar aan en begeleiden als je wilt het hele drukproces, inclusief proefdruk en kleurcontrole. Jij hoeft niet te weten wat een stansvorm is. Wij wel.\n\nWe werken vanuit Nistelrode, in de regio Eindhoven. Gemoedelijk in de omgang, scherp op de details, zoals dat in Brabant hoort. Voor startups, mkb en internationale merken, inmiddels meer dan 250 klanten wereldwijd.",
          en: "M7 is a compact team of creative and technical specialists, with branding, web, content and print under one roof. So your print is never a standalone job for us, but part of your complete brand. Your brochure matches your website, your booth matches your LinkedIn campaign and your packaging matches your web shop. One brand, one feel, on paper and on screen.\n\nYou have one point of contact, from briefing to delivery. We advise on format, paper and finishing, deliver print-ready files and, if you like, manage the entire print process, including hard proofs and colour checks. You do not need to know what a die line is. We do.\n\nWe work from Nistelrode, in the Eindhoven region. Easy-going to work with, sharp on the details. For startups, SMEs and international brands, with more than 250 clients worldwide to date.",
        },
      },
    ],
  },
  faqs: [
    {
      q: { nl: "Wat kost grafisch ontwerp of drukwerk laten ontwerpen?", en: "How much does graphic design or print design cost?" },
      a: {
        nl: "Dat hangt af van het middel en de omvang. Een visitekaartje, flyer of etiket binnen je bestaande huisstijl ontwerpen we vanaf een paar honderd euro. Een brochure, magazine, verpakkingslijn of beursstand is uitgebreider. Drukkosten komen daar los bij en hangen af van oplage, papier en afwerking. Via onze configurator op letsgo.m7branding.com zie je direct een indicatie, of vraag een voorstel op maat aan.",
        en: "It depends on the piece and its scope. A business card, flyer or label within your existing identity starts from a few hundred euros. A brochure, magazine, packaging range or trade-show booth is more extensive. Printing costs come on top and depend on print run, paper and finishing. Our configurator at letsgo.m7branding.com shows an indication instantly, or request a tailored proposal.",
      },
    },
    {
      q: { nl: "Regelen jullie ook het drukwerk?", en: "Do you also arrange the printing?" },
      a: {
        nl: "Ja, als je dat wilt. We vragen offertes aan, adviseren over papier en afwerking, controleren de proef en bewaken kwaliteit en planning tot de levering. Heb je al een vaste drukker? Dan leveren we de bestanden aan volgens zijn specificaties.",
        en: "Yes, if you want us to. We request quotes, advise on paper and finishing, check the proof and safeguard quality and planning until delivery. Already have a regular printer? Then we deliver files to their specifications.",
      },
    },
    {
      q: { nl: "Wat betekent drukklaar aanleveren?", en: "What does print-ready mean?" },
      a: {
        nl: "Drukklaar betekent dat je drukker het bestand zonder aanpassingen kan verwerken. Denk aan kleuren in CMYK of Pantone, minimaal 3 mm afloop, snijtekens, beelden in minimaal 300 dpi, ingesloten lettertypes en een PDF/X-export met het juiste kleurprofiel. Wij leveren standaard zo aan.",
        en: "Print-ready means your printer can process the file without any changes. Think of colours in CMYK or Pantone, at least 3 mm bleed, crop marks, images at a minimum of 300 dpi, embedded fonts and a PDF/X export with the correct colour profile. That is how we deliver by default.",
      },
    },
    {
      q: { nl: "Wat is het verschil tussen RGB, CMYK en Pantone?", en: "What is the difference between RGB, CMYK and Pantone?" },
      a: {
        nl: "RGB is de kleurruimte van schermen. CMYK is opgebouwd uit vier drukinkten (cyaan, magenta, geel en zwart) en wordt gebruikt voor het meeste drukwerk. Pantone is een gestandaardiseerd systeem van steunkleuren, ideaal als een merkkleur exact moet kloppen, bijvoorbeeld op verpakkingen of briefpapier. In je huisstijl leggen we alle drie de waarden vast.",
        en: "RGB is the colour space of screens. CMYK is built from four process inks (cyan, magenta, yellow and black) and is used for most print. Pantone is a standardised system of spot colours, ideal when a brand colour must be exact, for example on packaging or letterheads. We record all three values in your identity.",
      },
    },
    {
      q: { nl: "Hoe lang duurt het ontwerpen van drukwerk?", en: "How long does designing print take?" },
      a: {
        nl: "Een visitekaartje of flyer is meestal binnen een week klaar voor de drukker. Een brochure of presentatie duurt gemiddeld 2 tot 4 weken, een magazine, jaarverslag of verpakkingslijn 4 tot 8 weken. Drukken en leveren kost daarnaast vaak 3 tot 10 werkdagen, afhankelijk van oplage en afwerking.",
        en: "A business card or flyer is usually ready for the printer within a week. A brochure or presentation takes 2 to 4 weeks on average, a magazine, annual report or packaging range 4 to 8 weeks. Printing and delivery often add 3 to 10 working days, depending on print run and finishing.",
      },
    },
    {
      q: { nl: "Kunnen jullie werken met mijn bestaande huisstijl?", en: "Can you work with my existing visual identity?" },
      a: {
        nl: "Zeker. We werken met je huisstijl en richtlijnen, ook als die door een ander bureau zijn ontwikkeld. Ontbreekt er iets of is je huisstijl toe aan een opfrisbeurt? Dan adviseren we wat nodig is om alles consistent te houden.",
        en: "Definitely. We work with your identity and guidelines, even if another agency developed them. Is something missing or does your identity need a refresh? Then we advise on what is needed to keep everything consistent.",
      },
    },
    {
      q: { nl: "Ontwerpen jullie ook verpakkingen en etiketten?", en: "Do you also design packaging and labels?" },
      a: {
        nl: "Ja. We ontwerpen dozen, etiketten, labels, zakjes en sleeves, direct op de stansvorm van je producent. Je ziet je verpakking vooraf als realistische 3D-mock-up, die je ook kunt gebruiken voor je webshop en social media.",
        en: "Yes. We design boxes, labels, tags, pouches and sleeves, directly on your manufacturer's die line. You see your packaging beforehand as a realistic 3D mock-up, which you can also use for your web shop and social media.",
      },
    },
    {
      q: { nl: "Kan ik mijn drukwerk duurzaam laten produceren?", en: "Can my print be produced sustainably?" },
      a: {
        nl: "Ja. We adviseren over FSC- of PEFC-gecertificeerd en gerecycled papier, een realistische oplage, efficiënte formaten en afwerkingen die recycling niet in de weg zitten. Werkt een digitaal alternatief beter? Dan zeggen we dat ook eerlijk.",
        en: "Yes. We advise on FSC or PEFC certified and recycled paper, a realistic print run, efficient formats and finishes that do not get in the way of recycling. Would a digital alternative work better? Then we will honestly tell you.",
      },
    },
    {
      q: { nl: "Maken jullie ook presentaties in PowerPoint, Keynote of Google Slides?", en: "Do you create presentations in PowerPoint, Keynote or Google Slides?" },
      a: {
        nl: "Ja. We ontwerpen pitch decks en bedrijfspresentaties in PowerPoint, Keynote, Google Slides of Figma, inclusief een masterlayout zodat je team zelf on-brand presentaties kan maken.",
        en: "Yes. We design pitch decks and company presentations in PowerPoint, Keynote, Google Slides or Figma, including a master layout so your team can create on-brand presentations themselves.",
      },
    },
    {
      q: { nl: "Krijg ik de open bronbestanden?", en: "Do I receive the open source files?" },
      a: {
        nl: "Na oplevering ontvang je de drukklare PDF's en, waar afgesproken, de open bestanden in InDesign, Illustrator of Figma. Wil je zelf eenvoudig aanpassingen doen? Dan leveren we ook templates in Canva.",
        en: "On delivery you receive the print-ready PDFs and, where agreed, the open files in InDesign, Illustrator or Figma. Want to make simple changes yourself? Then we also deliver templates in Canva.",
      },
    },
    {
      q: { nl: "Hoeveel correctierondes zitten er bij een ontwerp?", en: "How many correction rounds are included?" },
      a: {
        nl: "Standaard rekenen we met twee correctierondes. Meer nodig? Dan stemmen we dat vooraf transparant af, zodat je nooit voor verrassingen komt te staan.",
        en: "By default we include two correction rounds. Need more? We agree on that transparently upfront, so you never face surprises.",
      },
    },
    {
      q: { nl: "Werken jullie alleen voor bedrijven in de regio Eindhoven?", en: "Do you only work for companies in the Eindhoven region?" },
      a: {
        nl: "Nee. We zitten in Nistelrode, in de regio Eindhoven, maar werken voor klanten door heel Nederland, België en daarbuiten. Drukwerk laten we leveren waar jij het nodig hebt.",
        en: "No. We are based in Nistelrode, in the Eindhoven region, but work for clients throughout the Netherlands, Belgium and beyond. We have print delivered wherever you need it.",
      },
    },
  ],
  metaTitle: {
    nl: "Grafisch ontwerp & drukwerk | Print, verpakking & signing | M7",
    en: "Graphic & print design | Print, packaging & signage | M7",
  },
  metaDescription: {
    nl: "Grafisch ontwerp door M7: visitekaartjes, brochures, verpakkingen, beursstands, pitch decks en infographics. Drukklaar aangeleverd, met drukwerkbegeleiding.",
    en: "Graphic design by M7: business cards, brochures, packaging, trade-show booths, pitch decks and infographics. Delivered print-ready, with print management.",
  },
  related: ["branding-rebranding", "foto-video-3d-animatie", "content-marketing-online-ads"],
  configurator: ["print", "branding"],
};

export const applications: Application[] = [
  {
    slug: "visitekaartjes-drukwerk",
    service: "grafisch-ontwerp-print",
    title: { nl: "Visitekaartjes & zakelijk drukwerk", en: "Business cards & stationery" },
    summary: {
      nl: "Visitekaartjes, briefpapier en enveloppen die je huisstijl voelbaar maken.",
      en: "Business cards, letterheads and envelopes that make your identity tangible.",
    },
    intro: {
      nl: "Een visitekaartje geef je in een seconde, maar de indruk blijft hangen. We ontwerpen je complete zakelijke drukwerk, van visitekaartjes en briefpapier tot enveloppen, stickers en notitieblokken, strak in lijn met je huisstijl.",
      en: "Handing over a business card takes a second, but the impression lasts. We design your complete business stationery, from business cards and letterheads to envelopes, stickers and notepads, perfectly in line with your identity.",
    },
    body: [
      {
        h: { nl: "Kleine formaten, grote indruk", en: "Small formats, big impression" },
        body: {
          nl: "Juist op klein formaat telt elk detail: typografie, witruimte en papierkeuze. We adviseren over papiersoort, grammage en afwerkingen zoals foliedruk, blinddruk, spot-lak of een gekleurde kern, zodat je kaartje opvalt in elke stapel.",
          en: "On small formats every detail counts: typography, white space and paper choice. We advise on paper stock, weight and finishes such as foil stamping, debossing, spot varnish or a coloured core, so your card stands out in any stack.",
        },
      },
      {
        h: { nl: "Print en digitaal in één lijn", en: "Print and digital aligned" },
        body: {
          nl: "We leveren ook een bijpassende e-mailhandtekening, een briefsjabloon in Word of Google Docs en een digitale visitekaart met QR-code. Zo straal je overal hetzelfde uit, op papier én in de inbox.",
          en: "We also deliver a matching email signature, a letter template in Word or Google Docs and a digital business card with QR code. That way you look the same everywhere, on paper and in the inbox.",
        },
      },
    ],
    deliverables: {
      nl: ["Ontwerp visitekaartjes (per medewerker)", "Briefpapier en vervolgvel", "Enveloppen, stickers en notitieblokken", "Briefsjabloon in Word of Google Docs", "E-mailhandtekening in huisstijl", "Drukklare PDF-bestanden"],
      en: ["Business card design (per employee)", "Letterhead and continuation sheet", "Envelopes, stickers and notepads", "Letter template in Word or Google Docs", "On-brand email signature", "Print-ready PDF files"],
    },
    benefits: [
      { title: { nl: "Professioneel", en: "Professional" }, text: { nl: "Een eerste indruk die vertrouwen wekt.", en: "A first impression that builds trust." } },
      { title: { nl: "Consistent", en: "Consistent" }, text: { nl: "Print en digitaal vertellen hetzelfde verhaal.", en: "Print and digital tell the same story." } },
      { title: { nl: "Zorgeloos", en: "Hassle-free" }, text: { nl: "Wij regelen ook het drukwerk, als je wilt.", en: "We also arrange the printing, if you like." } },
    ],
    tools: ["indesign", "illustrator", "photoshop", "canva"],
    related: ["huisstijl", "logo-ontwerp", "flyers-posters", "brochures-magazines"],
    faqs: [
      {
        q: { nl: "Wat kost het ontwerp van visitekaartjes?", en: "How much does business card design cost?" },
        a: {
          nl: "Het ontwerp van visitekaartjes binnen een bestaande huisstijl start vanaf een paar honderd euro. Drukkosten hangen af van oplage, papier en afwerking; we vragen graag een scherpe offerte voor je aan.",
          en: "Business card design within an existing identity starts from a few hundred euros. Printing costs depend on print run, paper and finishing; we are happy to request a competitive quote for you.",
        },
      },
      {
        q: { nl: "Welk papier is het beste voor visitekaartjes?", en: "Which paper is best for business cards?" },
        a: {
          nl: "Voor een stevig, premium gevoel adviseren we meestal 350 tot 450 grams papier. Ongestreken papier voelt natuurlijk aan en is goed beschrijfbaar; gestreken papier geeft intensere kleuren. We denken graag mee en laten je vooraf papierstalen zien.",
          en: "For a sturdy, premium feel we usually recommend 350 to 450 gsm paper. Uncoated paper feels natural and is easy to write on; coated paper gives more vivid colours. We are happy to advise and show you paper samples beforehand.",
        },
      },
      {
        q: { nl: "Kunnen jullie ook kaartjes voor nieuwe collega's maken?", en: "Can you also make cards for new colleagues?" },
        a: {
          nl: "Ja. We zetten een template klaar, zodat nieuwe visitekaartjes snel en consistent gemaakt zijn. Geef naam en functie door en wij leveren drukklaar aan.",
          en: "Yes. We set up a template, so new business cards are made quickly and consistently. Send us the name and job title and we deliver print-ready files.",
        },
      },
    ],
    metaDescription: {
      nl: "Visitekaartjes en zakelijk drukwerk laten ontwerpen door M7: briefpapier, enveloppen en e-mailhandtekening in je huisstijl. Drukklaar aangeleverd.",
      en: "Business cards and stationery designed by M7: letterheads, envelopes and email signature in your identity. Delivered print-ready.",
    },
  },
  {
    slug: "brochures-magazines",
    service: "grafisch-ontwerp-print",
    title: { nl: "Brochures, magazines & jaarverslagen", en: "Brochures, magazines & annual reports" },
    summary: {
      nl: "Publicaties die je met plezier doorbladert, van productbrochure tot jaarverslag.",
      en: "Publications people enjoy leafing through, from product brochure to annual report.",
    },
    intro: {
      nl: "Een goede brochure of magazine neemt je lezer mee. We ontwerpen productbrochures, catalogi, magazines, whitepapers en jaarverslagen met een sterke opmaak, een heldere hiërarchie en beeld dat je verhaal versterkt.",
      en: "A good brochure or magazine takes your reader on a journey. We design product brochures, catalogues, magazines, white papers and annual reports with strong layouts, a clear hierarchy and imagery that strengthens your story.",
    },
    body: [
      {
        h: { nl: "Opmaak met ritme", en: "Layouts with rhythm" },
        body: {
          nl: "We bouwen een flexibel grid en typografisch systeem, zodat elke pagina rust en ritme heeft. Lange teksten worden leesbaar met tussenkoppen, quotes, kaders en infographics. Cijfers in een jaarverslag worden overzichtelijke grafieken en tabellen.",
          en: "We build a flexible grid and typographic system, so every page has calm and rhythm. Long texts become readable with subheadings, pull quotes, boxes and infographics. Figures in an annual report become clear charts and tables.",
        },
      },
      {
        h: { nl: "Print, digitaal of allebei", en: "Print, digital or both" },
        body: {
          nl: "Je publicatie verschijnt in druk, als interactieve PDF of als online flipbook. We optimaliseren per kanaal: drukklaar met afloop en snijtekens voor de drukker, en compact met klikbare links voor e-mail en website. Ook meertalige edities zijn mogelijk.",
          en: "Your publication appears in print, as an interactive PDF or as an online flipbook. We optimise per channel: print-ready with bleed and crop marks for the printer, and compact with clickable links for email and website. Multilingual editions are possible too.",
        },
      },
    ],
    deliverables: {
      nl: ["Concept en opmaakgrid", "Opmaak van alle pagina's", "Grafieken, tabellen en infographics", "Beeldselectie en -bewerking", "Drukklare PDF en interactieve PDF", "Templates voor volgende edities"],
      en: ["Concept and layout grid", "Layout of all pages", "Charts, tables and infographics", "Image selection and editing", "Print-ready PDF and interactive PDF", "Templates for future editions"],
    },
    benefits: [
      { title: { nl: "Leesbaar", en: "Readable" }, text: { nl: "Heldere structuur, ook bij veel informatie.", en: "Clear structure, even with lots of information." } },
      { title: { nl: "Overtuigend", en: "Persuasive" }, text: { nl: "Beeld en tekst versterken elkaar.", en: "Imagery and copy reinforce each other." } },
      { title: { nl: "Herbruikbaar", en: "Reusable" }, text: { nl: "Templates maken een volgende editie sneller.", en: "Templates make the next edition faster." } },
    ],
    tools: ["indesign", "illustrator", "photoshop", "lightroom"],
    related: ["infographics", "copywriting-blogs", "productfotografie", "presentaties-pitchdecks"],
    faqs: [
      {
        q: { nl: "Wat kost een brochure laten ontwerpen?", en: "How much does brochure design cost?" },
        a: {
          nl: "Een compacte brochure van 4 tot 8 pagina's ontwerpen we vanaf enkele honderden euro's. Magazines, catalogi en jaarverslagen met veel pagina's, grafieken en beeld zijn uitgebreider; je krijgt vooraf een heldere offerte.",
          en: "A compact brochure of 4 to 8 pages starts from a few hundred euros. Magazines, catalogues and annual reports with many pages, charts and imagery are more extensive; you receive a clear quote upfront.",
        },
      },
      {
        q: { nl: "Kunnen jullie ook de teksten en fotografie verzorgen?", en: "Can you also handle copy and photography?" },
        a: {
          nl: "Ja. Onze copywriters schrijven of redigeren de teksten en we verzorgen product-, portret- en locatiefotografie. Zo komt alles uit één hand en klopt het geheel.",
          en: "Yes. Our copywriters write or edit the copy and we handle product, portrait and location photography. Everything comes from one team and the whole fits together.",
        },
      },
      {
        q: { nl: "Kunnen we volgende edities zelf aanpassen?", en: "Can we adapt future editions ourselves?" },
        a: {
          nl: "Ja. We leveren open InDesign-bestanden of een template in Canva of Figma, zodat je team zelf kleine aanpassingen of nieuwe edities kan maken.",
          en: "Yes. We deliver open InDesign files or a template in Canva or Figma, so your team can make small changes or new editions themselves.",
        },
      },
    ],
    metaDescription: {
      nl: "Brochure, magazine of jaarverslag laten ontwerpen door M7: sterke opmaak, infographics en beeld. Drukklaar of als interactieve PDF.",
      en: "Brochure, magazine or annual report design by M7: strong layouts, infographics and imagery. Print-ready or as an interactive PDF.",
    },
  },
  {
    slug: "flyers-posters",
    service: "grafisch-ontwerp-print",
    title: { nl: "Flyers, posters & folders", en: "Flyers, posters & leaflets" },
    summary: {
      nl: "Opvallend drukwerk dat in één blik vertelt waar het om gaat.",
      en: "Eye-catching print that tells what it is about at a glance.",
    },
    intro: {
      nl: "Een flyer of poster heeft maar een paar seconden om op te vallen. We ontwerpen flyers, posters, folders, ansichtkaarten en mailings met een duidelijke boodschap, een sterke blikvanger en een heldere call-to-action.",
      en: "A flyer or poster has only a few seconds to stand out. We design flyers, posters, leaflets, postcards and mailings with a clear message, a strong eye-catcher and a clear call to action.",
    },
    body: [
      {
        h: { nl: "Eén boodschap, direct duidelijk", en: "One message, instantly clear" },
        body: {
          nl: "We beginnen bij het doel: wat moet de lezer weten of doen? Daarna bouwen we de hiërarchie: kop, beeld, kernboodschap en actie. Met een QR-code naar een landingspagina koppel je print aan online en maak je het resultaat meetbaar.",
          en: "We start with the goal: what should the reader know or do? Then we build the hierarchy: headline, image, key message and action. A QR code to a landing page connects print to online and makes results measurable.",
        },
      },
      {
        h: { nl: "Van A6 tot A0", en: "From A6 to A0" },
        body: {
          nl: "Een handzame flyer, een gevouwen folder of een grote poster voor in de etalage: we ontwerpen op het juiste formaat met de juiste resolutie en zorgen dat je bestanden voldoen aan de eisen van je drukker. Social-versies maken we direct mee.",
          en: "A handy flyer, a folded leaflet or a large poster for the shop window: we design at the right size and resolution and make sure your files meet your printer's requirements. We create social versions right alongside.",
        },
      },
    ],
    deliverables: {
      nl: ["Flyer- of posterontwerp", "Folders en vouwfolders", "Varianten voor verschillende formaten", "QR-code naar landingspagina", "Social media-versies", "Drukklare bestanden"],
      en: ["Flyer or poster design", "Leaflets and folded brochures", "Variants for different sizes", "QR code to landing page", "Social media versions", "Print-ready files"],
    },
    benefits: [
      { title: { nl: "Opvallend", en: "Eye-catching" }, text: { nl: "Een ontwerp dat in een paar seconden overtuigt.", en: "A design that convinces in seconds." } },
      { title: { nl: "Meetbaar", en: "Measurable" }, text: { nl: "QR-codes en UTM-tags verbinden print met online.", en: "QR codes and UTM tags connect print to online." } },
      { title: { nl: "Snel geregeld", en: "Quickly sorted" }, text: { nl: "Ontwerp en drukwerk via één aanspreekpunt.", en: "Design and print through one point of contact." } },
    ],
    tools: ["indesign", "illustrator", "photoshop", "canva"],
    related: ["beurs-signing", "landingspaginas", "social-media-marketing", "illustraties-iconen"],
    faqs: [
      {
        q: { nl: "Hoe snel kan een flyer klaar zijn?", en: "How quickly can a flyer be ready?" },
        a: {
          nl: "Een flyer ontwerpen we meestal binnen een paar werkdagen, afhankelijk van je feedback. Inclusief drukken en levering reken je op ongeveer een tot twee weken; spoed is in overleg vaak mogelijk.",
          en: "We usually design a flyer within a few working days, depending on your feedback. Including printing and delivery, allow about one to two weeks; rush jobs are often possible by arrangement.",
        },
      },
      {
        q: { nl: "Welk formaat flyer werkt het best?", en: "Which flyer size works best?" },
        a: {
          nl: "A5 en A6 zijn populair om uit te delen of mee te sturen; A4 of een vouwfolder geeft ruimte voor meer informatie. We adviseren op basis van je doel en de manier waarop de flyer verspreid wordt.",
          en: "A5 and A6 are popular for handing out or enclosing; A4 or a folded leaflet leaves room for more information. We advise based on your goal and how the flyer will be distributed.",
        },
      },
      {
        q: { nl: "Kan ik het ontwerp later zelf aanpassen?", en: "Can I adapt the design myself later?" },
        a: {
          nl: "Ja. Op verzoek leveren we een template in Canva, zodat je zelf datums, prijzen of acties kunt aanpassen zonder dat de opmaak verloren gaat.",
          en: "Yes. On request we deliver a Canva template, so you can change dates, prices or offers yourself without losing the layout.",
        },
      },
    ],
    metaDescription: {
      nl: "Flyers, posters en folders laten ontwerpen door M7: opvallend drukwerk met een heldere boodschap, QR-code naar online en drukklare bestanden.",
      en: "Flyer, poster and leaflet design by M7: eye-catching print with a clear message, a QR code to online and print-ready files.",
    },
  },
  {
    slug: "verpakkingsontwerp",
    service: "grafisch-ontwerp-print",
    title: { nl: "Verpakkingsontwerp & etiketten", en: "Packaging design & labels" },
    summary: {
      nl: "Verpakkingen en etiketten die opvallen in het schap én online.",
      en: "Packaging and labels that stand out on the shelf and online.",
    },
    intro: {
      nl: "Je verpakking is je stilste verkoper. We ontwerpen dozen, etiketten, labels, zakjes en sleeves die je product laten opvallen, je verhaal vertellen en voldoen aan de praktische eisen van productie en regelgeving.",
      en: "Your packaging is your quietest salesperson. We design boxes, labels, tags, pouches and sleeves that make your product stand out, tell your story and meet the practical demands of production and regulations.",
    },
    body: [
      {
        h: { nl: "Ontworpen op de stansvorm", en: "Designed on the die line" },
        body: {
          nl: "We werken direct op de stansvorm (dieline) van je verpakkingsleverancier, zodat vouwlijnen, lijmranden en afloop exact kloppen. Daarbij houden we rekening met verplichte informatie zoals ingrediënten, EAN-barcodes, keurmerken en recyclinglogo's.",
          en: "We work directly on your packaging supplier's die line, so folds, glue flaps and bleed are exactly right. We also account for mandatory information such as ingredients, EAN barcodes, certification marks and recycling logos.",
        },
      },
      {
        h: { nl: "Eerst zien in 3D", en: "See it in 3D first" },
        body: {
          nl: "Voordat er geproduceerd wordt, zie je je verpakking als realistische 3D-mock-up, gemaakt in Blender. Ideaal om keuzes te maken, en direct bruikbaar voor je webshop, crowdfundingcampagne of social media, nog voordat de eerste doos gedrukt is.",
          en: "Before anything is produced, you see your packaging as a realistic 3D mock-up made in Blender. Ideal for making decisions, and ready to use for your web shop, crowdfunding campaign or social media before the first box is printed.",
        },
      },
    ],
    deliverables: {
      nl: ["Concept en verpakkingsontwerp", "Uitwerking op stansvorm (dieline)", "Etiketten en labels", "3D-mock-ups en productrenders", "Varianten per smaak, maat of productlijn", "Drukklare bestanden met Pantone-specificatie"],
      en: ["Concept and packaging design", "Artwork on die line", "Labels and tags", "3D mock-ups and product renders", "Variants per flavour, size or product line", "Print-ready files with Pantone specification"],
    },
    benefits: [
      { title: { nl: "Opvallend", en: "Stand-out" }, text: { nl: "Een verpakking die eruit springt in het schap.", en: "Packaging that pops on the shelf." } },
      { title: { nl: "Productieklaar", en: "Production-ready" }, text: { nl: "Exact op maat voor je producent.", en: "Made to measure for your manufacturer." } },
      { title: { nl: "Direct inzetbaar", en: "Ready to use" }, text: { nl: "3D-renders voor webshop en social.", en: "3D renders for web shop and social." } },
    ],
    tools: ["illustrator", "photoshop", "blender", "cinema4d", "indesign"],
    related: ["3d-visualisatie", "productfotografie", "huisstijl", "webshop"],
    faqs: [
      {
        q: { nl: "Wat kost een verpakkingsontwerp?", en: "How much does packaging design cost?" },
        a: {
          nl: "Een etiket of eenvoudig label ontwerpen we vanaf een paar honderd euro. Een complete verpakkingslijn met meerdere varianten, 3D-renders en productiebegeleiding is uitgebreider. Na een korte briefing krijg je een voorstel op maat.",
          en: "A label or simple tag starts from a few hundred euros. A complete packaging range with multiple variants, 3D renders and production support is more extensive. After a short briefing you receive a tailored proposal.",
        },
      },
      {
        q: { nl: "Regelen jullie ook de productie van de verpakking?", en: "Do you also arrange packaging production?" },
        a: {
          nl: "We leveren drukklaar aan bij je eigen verpakkingsleverancier, of zoeken samen met jou een geschikte producent. In beide gevallen controleren we de proef voordat er geproduceerd wordt.",
          en: "We deliver print-ready files to your own packaging supplier, or find a suitable manufacturer together with you. Either way, we check the proof before production starts.",
        },
      },
      {
        q: { nl: "Kunnen jullie duurzame verpakkingen ontwerpen?", en: "Can you design sustainable packaging?" },
        a: {
          nl: "Ja. We denken mee over materialen zoals FSC-gecertificeerd karton, monomaterialen die beter te recyclen zijn en een ontwerp met minder inkt en minder overbodige onderdelen.",
          en: "Yes. We advise on materials such as FSC certified board, mono-materials that are easier to recycle and a design with less ink and fewer unnecessary components.",
        },
      },
    ],
    metaDescription: {
      nl: "Verpakkingsontwerp en etiketten door M7: ontworpen op de stansvorm, vooraf te zien als 3D-mock-up en drukklaar met Pantone-specificatie.",
      en: "Packaging and label design by M7: designed on the die line, previewed as a 3D mock-up and print-ready with Pantone specification.",
    },
  },
  {
    slug: "beurs-signing",
    service: "grafisch-ontwerp-print",
    title: { nl: "Beursstands, signing & belettering", en: "Trade-show booths, signage & vehicle graphics" },
    summary: {
      nl: "Van roll-up banner tot gevelreclame en autobelettering: je merk op groot formaat.",
      en: "From roll-up banner to facade sign and vehicle wrap: your brand at large scale.",
    },
    intro: {
      nl: "Op een beurs, aan de gevel of op de weg: op groot formaat moet je merk in één oogopslag herkenbaar zijn. We ontwerpen beursstands, roll-up banners, beachflags, gevelreclame, raambelettering, bewegwijzering en autobelettering.",
      en: "At a trade show, on a facade or on the road: at large scale your brand must be recognisable at a glance. We design trade-show booths, roll-up banners, beach flags, facade signs, window graphics, wayfinding and vehicle graphics.",
    },
    body: [
      {
        h: { nl: "Ontworpen voor afstand", en: "Designed for distance" },
        body: {
          nl: "Groot formaat vraagt om andere keuzes: minder tekst, grotere typografie, sterk contrast en een boodschap die je op tien meter afstand nog leest. We ontwerpen op de werkelijke afmetingen van je stand, gevel of voertuig en houden rekening met naden, panelen en ramen.",
          en: "Large formats call for different choices: less text, bigger typography, strong contrast and a message you can still read from ten metres away. We design at the actual dimensions of your booth, facade or vehicle and account for seams, panels and windows.",
        },
      },
      {
        h: { nl: "Eerst in 3D, dan pas bestellen", en: "See it in 3D before you order" },
        body: {
          nl: "Je beursstand of belettering zie je eerst als 3D-visualisatie, zodat je weet hoe het er in het echt uitziet. Daarna leveren we de productiebestanden aan volgens de specificaties van je standbouwer of signbedrijf.",
          en: "You first see your booth or vehicle graphics as a 3D visualisation, so you know how it will look in real life. We then deliver the production files to the specifications of your booth builder or sign company.",
        },
      },
    ],
    deliverables: {
      nl: ["Ontwerp beursstand en achterwanden", "Roll-up banners en beachflags", "Gevelreclame en raambelettering", "Autobelettering en wrapping", "Bewegwijzering en interieurgraphics", "3D-visualisatie en productiebestanden"],
      en: ["Booth design and back walls", "Roll-up banners and beach flags", "Facade signs and window graphics", "Vehicle graphics and wraps", "Wayfinding and interior graphics", "3D visualisation and production files"],
    },
    benefits: [
      { title: { nl: "Zichtbaar", en: "Visible" }, text: { nl: "Herkenbaar van ver, overtuigend van dichtbij.", en: "Recognisable from afar, convincing up close." } },
      { title: { nl: "Zekerheid", en: "Certainty" }, text: { nl: "In 3D gezien voordat het geproduceerd wordt.", en: "Seen in 3D before it is produced." } },
      { title: { nl: "Eén lijn", en: "Aligned" }, text: { nl: "Stand, flyers en socials in dezelfde stijl.", en: "Booth, flyers and socials in the same style." } },
    ],
    tools: ["illustrator", "photoshop", "blender", "indesign"],
    related: ["flyers-posters", "3d-visualisatie", "huisstijl", "presentaties-pitchdecks"],
    faqs: [
      {
        q: { nl: "Hoe ver van tevoren moet ik een beursstand laten ontwerpen?", en: "How far in advance should I have a booth designed?" },
        a: {
          nl: "Begin bij voorkeur 6 tot 8 weken voor de beurs. Dan is er tijd voor ontwerp, feedback, productie en transport. Een roll-up banner of beachflag kan vaak binnen een tot twee weken.",
          en: "Ideally start 6 to 8 weeks before the show. That leaves time for design, feedback, production and transport. A roll-up banner or beach flag can often be done within one to two weeks.",
        },
      },
      {
        q: { nl: "Ontwerpen jullie ook belettering voor mijn bedrijfsauto?", en: "Do you design graphics for my company vehicle?" },
        a: {
          nl: "Ja. We ontwerpen de belettering of complete wrap op basis van het exacte model en bouwjaar van je voertuig en leveren de bestanden aan bij een gespecialiseerde signmaker. We denken graag mee over een geschikte partij.",
          en: "Yes. We design the graphics or a full wrap based on the exact model and year of your vehicle and deliver the files to a specialist sign maker. We are happy to help you find a suitable partner.",
        },
      },
      {
        q: { nl: "Maken jullie ook het overige beursmateriaal?", en: "Do you also create other trade-show materials?" },
        a: {
          nl: "Ja. Denk aan flyers, give-aways, presentaties op schermen, een beurslandingspagina met leadformulier en social posts om je bezoek aan te kondigen. Zo vertelt alles hetzelfde verhaal.",
          en: "Yes. Think of flyers, giveaways, on-screen presentations, a trade-show landing page with lead form and social posts announcing your attendance. That way everything tells the same story.",
        },
      },
    ],
    metaDescription: {
      nl: "Beursstand, roll-up banner, gevelreclame of autobelettering laten ontwerpen door M7. Eerst als 3D-visualisatie, daarna productieklaar aangeleverd.",
      en: "Trade-show booth, roll-up banner, facade sign or vehicle graphics designed by M7. First as a 3D visualisation, then delivered production-ready.",
    },
  },
  {
    slug: "presentaties-pitchdecks",
    service: "grafisch-ontwerp-print",
    title: { nl: "Presentaties & pitch decks", en: "Presentations & pitch decks" },
    summary: {
      nl: "Overtuigende decks in PowerPoint, Keynote, Google Slides of Figma.",
      en: "Persuasive decks in PowerPoint, Keynote, Google Slides or Figma.",
    },
    intro: {
      nl: "Een sterke presentatie helpt je investeerders, klanten of je eigen team te overtuigen. We ontwerpen pitch decks, salespresentaties en bedrijfspresentaties in PowerPoint, Keynote, Google Slides of Figma, plus templates waarmee je team zelf verder kan.",
      en: "A strong presentation helps you convince investors, customers or your own team. We design pitch decks, sales presentations and company presentations in PowerPoint, Keynote, Google Slides or Figma, plus templates your team can keep using.",
    },
    body: [
      {
        h: { nl: "Eerst het verhaal, dan de slides", en: "Story first, slides second" },
        body: {
          nl: "Een goed deck begint bij de verhaallijn: probleem, oplossing, bewijs en vraag. We helpen je die structuur scherp te krijgen en vertalen complexe informatie naar heldere visuals, grafieken en iconen. Eén boodschap per slide, geen muur van tekst.",
          en: "A good deck starts with the storyline: problem, solution, proof and ask. We help you sharpen that structure and translate complex information into clear visuals, charts and icons. One message per slide, no wall of text.",
        },
      },
      {
        h: { nl: "Templates die je team echt gebruikt", en: "Templates your team actually uses" },
        body: {
          nl: "We bouwen een masterlayout met slide-indelingen, kleuren en lettertypes al ingesteld, zodat iedereen in je organisatie on-brand presentaties maakt. Desgewenst voegen we subtiele animaties en video toe.",
          en: "We build a master layout with slide layouts, colours and fonts already set up, so everyone in your organisation creates on-brand presentations. If you like, we add subtle animations and video.",
        },
      },
    ],
    deliverables: {
      nl: ["Verhaallijn en slide-structuur", "Ontwerp van het complete deck", "Masterlayout in PowerPoint, Keynote, Google Slides of Figma", "Grafieken, iconen en visuals", "Optioneel: animaties en video", "PDF-versie om te delen"],
      en: ["Storyline and slide structure", "Design of the complete deck", "Master layout in PowerPoint, Keynote, Google Slides or Figma", "Charts, icons and visuals", "Optional: animations and video", "PDF version for sharing"],
    },
    benefits: [
      { title: { nl: "Overtuigend", en: "Persuasive" }, text: { nl: "Een helder verhaal dat blijft hangen.", en: "A clear story that sticks." } },
      { title: { nl: "On-brand", en: "On-brand" }, text: { nl: "Elke presentatie in je huisstijl.", en: "Every presentation in your identity." } },
      { title: { nl: "Tijdsbesparend", en: "Time-saving" }, text: { nl: "Met templates maak je nieuwe decks een stuk sneller.", en: "Templates make new decks a lot faster." } },
    ],
    tools: ["figma", "canva", "illustrator", "photoshop"],
    related: ["infographics", "huisstijl", "brochures-magazines", "motion-design"],
    faqs: [
      {
        q: { nl: "In welk programma maken jullie presentaties?", en: "Which software do you use for presentations?" },
        a: {
          nl: "In PowerPoint, Keynote, Google Slides, Figma of Canva. We kiezen samen op basis van wie de presentatie later bewerkt en hoe je hem deelt.",
          en: "In PowerPoint, Keynote, Google Slides, Figma or Canva. We choose together based on who will edit the presentation later and how you share it.",
        },
      },
      {
        q: { nl: "Wat kost een pitch deck laten ontwerpen?", en: "How much does pitch deck design cost?" },
        a: {
          nl: "Een pitch deck van 10 tot 20 slides kost van een paar honderd tot enkele duizenden euro's, afhankelijk van de hoeveelheid content, visuals en of we ook meedenken over de verhaallijn. Een herbruikbare template kun je los of in combinatie afnemen.",
          en: "A pitch deck of 10 to 20 slides ranges from a few hundred to a few thousand euros, depending on the amount of content, visuals and whether we also help with the storyline. A reusable template can be ordered separately or combined.",
        },
      },
      {
        q: { nl: "Helpen jullie ook met de inhoud van mijn pitch?", en: "Do you also help with the content of my pitch?" },
        a: {
          nl: "Ja. We helpen met structuur, kernboodschappen en copy, zodat je verhaal klopt en overtuigt. De cijfers en het businessmodel blijven natuurlijk van jou; wij zorgen dat ze helder overkomen.",
          en: "Yes. We help with structure, key messages and copy, so your story holds up and persuades. The numbers and business model remain yours, of course; we make sure they come across clearly.",
        },
      },
    ],
    metaDescription: {
      nl: "Pitch deck of presentatie laten ontwerpen door M7: een overtuigend verhaal en on-brand templates in PowerPoint, Keynote, Google Slides of Figma.",
      en: "Pitch deck or presentation design by M7: a persuasive story and on-brand templates in PowerPoint, Keynote, Google Slides or Figma.",
    },
  },
  {
    slug: "illustraties-iconen",
    service: "grafisch-ontwerp-print",
    title: { nl: "Illustraties & iconen", en: "Illustrations & icons" },
    summary: {
      nl: "Een eigen illustratiestijl en iconenset die je merk uniek maken.",
      en: "A custom illustration style and icon set that make your brand unique.",
    },
    intro: {
      nl: "Met eigen illustraties en iconen onderscheid je je van merken die allemaal dezelfde stockbeelden gebruiken. We ontwikkelen een illustratiestijl en iconenset die past bij je merk, voor website, app, print en animatie.",
      en: "With custom illustrations and icons you stand apart from brands that all use the same stock images. We develop an illustration style and icon set that fits your brand, for website, app, print and animation.",
    },
    body: [
      {
        h: { nl: "Een stijl, geen losse plaatjes", en: "A style, not loose pictures" },
        body: {
          nl: "We ontwikkelen eerst een herkenbare stijl: lijndikte, kleurgebruik, perspectief en detailniveau. Daardoor passen nieuwe illustraties en iconen later vanzelf bij de bestaande set, ook als je merk groeit.",
          en: "We first develop a recognisable style: line weight, use of colour, perspective and level of detail. That way new illustrations and icons fit right in with the existing set later on, even as your brand grows.",
        },
      },
      {
        h: { nl: "Klaar voor digitaal en beweging", en: "Ready for digital and motion" },
        body: {
          nl: "Iconen leveren we als geoptimaliseerde SVG voor web en app, ontworpen op een vast grid zodat ze scherp blijven op elk formaat. Illustraties maken we desgewenst geanimeerd als Lottie-bestand, voor een website die net even meer leeft.",
          en: "We deliver icons as optimised SVGs for web and app, designed on a fixed grid so they stay sharp at any size. If you like, we animate illustrations as Lottie files, for a website that feels just a little more alive.",
        },
      },
    ],
    deliverables: {
      nl: ["Illustratiestijl en stijlgids", "Custom iconenset op vast grid", "Spot- en hero-illustraties", "Bestanden in SVG, PNG en PDF", "Figma-bibliotheek met componenten", "Optioneel: Lottie-animaties"],
      en: ["Illustration style and style guide", "Custom icon set on a fixed grid", "Spot and hero illustrations", "Files in SVG, PNG and PDF", "Figma library with components", "Optional: Lottie animations"],
    },
    benefits: [
      { title: { nl: "Uniek", en: "Unique" }, text: { nl: "Beeld dat niemand anders heeft.", en: "Imagery nobody else has." } },
      { title: { nl: "Consistent", en: "Consistent" }, text: { nl: "Elke nieuwe illustratie past in de set.", en: "Every new illustration fits the set." } },
      { title: { nl: "Veelzijdig", en: "Versatile" }, text: { nl: "Van app-icoon tot beursstand.", en: "From app icon to trade-show booth." } },
    ],
    tools: ["illustrator", "figma", "photoshop", "aftereffects", "lottie"],
    related: ["infographics", "huisstijl", "lottie-animaties", "ux-ui-app-design"],
    faqs: [
      {
        q: { nl: "Waarom eigen iconen in plaats van een gratis iconenset?", en: "Why custom icons instead of a free icon set?" },
        a: {
          nl: "Een gratis set ziet er bij veel merken hetzelfde uit en mist vaak precies de iconen die jij nodig hebt. Eigen iconen sluiten aan op je huisstijl, zijn consistent en maken je website en app direct herkenbaarder.",
          en: "A free set looks the same across many brands and often lacks exactly the icons you need. Custom icons match your identity, are consistent and make your website and app instantly more recognisable.",
        },
      },
      {
        q: { nl: "Kunnen illustraties ook geanimeerd worden?", en: "Can illustrations be animated?" },
        a: {
          nl: "Ja. We animeren illustraties en iconen in After Effects en leveren ze als lichtgewicht Lottie-bestand voor web en app, of als video voor social en presentaties.",
          en: "Yes. We animate illustrations and icons in After Effects and deliver them as lightweight Lottie files for web and app, or as video for social and presentations.",
        },
      },
      {
        q: { nl: "Gebruiken jullie AI voor illustraties?", en: "Do you use AI for illustrations?" },
        a: {
          nl: "Soms gebruiken we AI om snel richtingen te verkennen. Het uiteindelijke werk tekenen we zelf als vector, zodat je een consistente, schaalbare set krijgt zonder onduidelijkheid over gebruiksrechten.",
          en: "We sometimes use AI to explore directions quickly. We draw the final work ourselves as vectors, so you get a consistent, scalable set without ambiguity about usage rights.",
        },
      },
    ],
    metaDescription: {
      nl: "Illustraties en iconen laten ontwerpen door M7: een eigen illustratiestijl en custom iconenset voor web, app, print en animatie.",
      en: "Illustration and icon design by M7: a custom illustration style and icon set for web, app, print and animation.",
    },
  },
  {
    slug: "infographics",
    service: "grafisch-ontwerp-print",
    title: { nl: "Infographics & datavisualisatie", en: "Infographics & data visualisation" },
    summary: {
      nl: "Complexe informatie in één oogopslag begrijpelijk.",
      en: "Complex information, understood at a glance.",
    },
    intro: {
      nl: "Cijfers, processen en ingewikkelde verhalen worden een stuk duidelijker als je ze ziet. We ontwerpen infographics, procesvisualisaties, grafieken en tijdlijnen voor rapporten, presentaties, websites en social media.",
      en: "Numbers, processes and complicated stories become a lot clearer when you can see them. We design infographics, process visuals, charts and timelines for reports, presentations, websites and social media.",
    },
    body: [
      {
        h: { nl: "Van data naar inzicht", en: "From data to insight" },
        body: {
          nl: "We beginnen bij de kernvraag: wat moet de lezer onthouden? Daarna kiezen we de juiste vorm, van grafiek en tijdlijn tot stroomschema of illustratie, en schrappen we alles wat afleidt. Het resultaat is een visual die klopt met de data en direct te begrijpen is.",
          en: "We start with the core question: what should the reader remember? Then we choose the right form, from chart and timeline to flow diagram or illustration, and cut everything that distracts. The result is a visual that is true to the data and instantly understandable.",
        },
      },
      {
        h: { nl: "Eén visual, veel kanalen", en: "One visual, many channels" },
        body: {
          nl: "Een infographic werkt in een jaarverslag, maar ook als social carrousel, in een blogartikel of als geanimeerde video. We leveren varianten per kanaal, zodat je één keer investeert en de visual overal kunt inzetten.",
          en: "An infographic works in an annual report, but also as a social carousel, in a blog article or as an animated video. We deliver variants per channel, so you invest once and can use the visual everywhere.",
        },
      },
    ],
    deliverables: {
      nl: ["Analyse van data en kernboodschap", "Infographic-ontwerp", "Grafieken, diagrammen en tijdlijnen", "Varianten voor print, web en social", "Optioneel: geanimeerde versie", "Bronbestanden in Illustrator of Figma"],
      en: ["Analysis of data and key message", "Infographic design", "Charts, diagrams and timelines", "Variants for print, web and social", "Optional: animated version", "Source files in Illustrator or Figma"],
    },
    benefits: [
      { title: { nl: "Begrijpelijk", en: "Understandable" }, text: { nl: "Complexe informatie in één oogopslag.", en: "Complex information at a glance." } },
      { title: { nl: "Deelbaar", en: "Shareable" }, text: { nl: "Visuals die mensen graag doorsturen.", en: "Visuals people like to pass on." } },
      { title: { nl: "Geloofwaardig", en: "Credible" }, text: { nl: "Data correct en overzichtelijk gepresenteerd.", en: "Data presented accurately and clearly." } },
    ],
    tools: ["illustrator", "figma", "indesign", "aftereffects"],
    related: ["brochures-magazines", "presentaties-pitchdecks", "motion-design", "seo-content"],
    faqs: [
      {
        q: { nl: "Wat kost een infographic?", en: "How much does an infographic cost?" },
        a: {
          nl: "Een enkele infographic start vanaf een paar honderd euro, afhankelijk van de hoeveelheid data en het detailniveau. Een reeks in een vaste stijl of een geanimeerde versie is uitgebreider.",
          en: "A single infographic starts from a few hundred euros, depending on the amount of data and level of detail. A series in a consistent style or an animated version is more extensive.",
        },
      },
      {
        q: { nl: "Moet ik de data zelf aanleveren?", en: "Do I need to supply the data myself?" },
        a: {
          nl: "Ja, de inhoud en cijfers komen van jou. Wij helpen ze te structureren, stellen kritische vragen waar iets onduidelijk is en kiezen de vorm die het verhaal het best vertelt.",
          en: "Yes, the content and figures come from you. We help structure them, ask critical questions where something is unclear and choose the form that tells the story best.",
        },
      },
      {
        q: { nl: "Helpen infographics bij SEO?", en: "Do infographics help with SEO?" },
        a: {
          nl: "Ze kunnen helpen. Een duidelijke infographic maakt een artikel waardevoller voor lezers en wordt makkelijker gedeeld. Met een goede alt-tekst en begeleidende tekst blijft de informatie ook leesbaar voor zoekmachines en AI.",
          en: "They can help. A clear infographic makes an article more valuable to readers and is shared more easily. With good alt text and accompanying copy, the information also stays readable for search engines and AI.",
        },
      },
    ],
    metaDescription: {
      nl: "Infographics en datavisualisatie door M7: complexe cijfers en processen helder in beeld voor rapporten, presentaties, web en social.",
      en: "Infographics and data visualisation by M7: complex figures and processes made clear for reports, presentations, web and social.",
    },
  },
];
