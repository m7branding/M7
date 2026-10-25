import type { Application, Service } from "../types";

export const service: Service = {
  slug: "configurators-lead-tools-widgets",
  order: 9,
  title: { nl: "Configurators, Lead Tools & Widgets", en: "Configurators, Lead Tools & Widgets" },
  short: { nl: "Configurators", en: "Configurators" },
  color: "#7A6BFF",
  icon: "sliders",
  mockup: "configurator",
  tagline: { nl: "Click. Configure. Convert.", en: "Click. Configure. Convert." },
  intro: {
    nl: "Productconfigurators, offertecalculators, keuzehulpen en slimme widgets die bezoekers helpen kiezen en jou complete, gekwalificeerde aanvragen opleveren, direct in je CRM.",
    en: "Product configurators, quote calculators, product finders and smart widgets that help visitors choose and bring you complete, qualified enquiries, straight into your CRM.",
  },
  description: {
    nl: "Een contactformulier vraagt bezoekers om moeite te doen. Een goede configurator of calculator geeft ze eerst iets terug: inzicht, een prijsindicatie of een persoonlijk advies. Ondertussen verzamel jij precies de informatie die je salesteam nodig heeft. Van een 3D-productconfigurator tot een subsidiecheck, quiz of boekingswidget: wij ontwerpen en bouwen interactieve tools die werken op je bestaande website.\n\nOnze eigen configurator op letsgo.m7branding.com is een live voorbeeld: bezoekers stellen hun project samen en zien direct een indicatieve prijs. Achter elke tool zit dezelfde aanpak: heldere logica, een soepele UX en koppelingen met je CRM, e-mail automation en betaalsystemen, zodat elke aanvraag automatisch op de juiste plek landt.",
    en: "A contact form asks visitors to make an effort. A good configurator or calculator gives something back first: insight, a price indication or personal advice. Meanwhile, you collect exactly the information your sales team needs. From a 3D product configurator to a subsidy check, quiz or booking widget: we design and build interactive tools that work on your existing website.\n\nOur own configurator at letsgo.m7branding.com is a live example: visitors put together their project and instantly see an indicative price. Every tool follows the same approach: clear logic, a smooth UX and integrations with your CRM, email automation and payment systems, so every enquiry automatically lands in the right place.",
  },
  highlights: [
    { value: "250+", label: { nl: "Klanten wereldwijd", en: "Clients worldwide" } },
    { value: "Live", label: { nl: "Eigen configurator: letsgo.m7branding.com", en: "Our own configurator: letsgo.m7branding.com" } },
    { value: "24/7", label: { nl: "Aanvragen, ook buiten kantoortijd", en: "Enquiries, even after hours" } },
  ],
  terms: [
    "Productconfigurator",
    "3D-configurator",
    "Offertecalculator",
    "Prijscalculator",
    "Keuzehulp",
    "Quiz",
    "Subsidiecheck",
    "Quickscan",
    "Boekingswidget",
    "Afsprakenplanner",
    "Website-widgets",
    "Pop-ups",
    "Lead capture",
    "Leadgeneratie",
    "CRM-koppeling",
    "E-mail automation",
    "PDF-offerte",
    "Live prijsberekening",
    "Embed",
    "Three.js",
  ],
  tools: [
    "react",
    "nextjs",
    "threejs",
    "blender",
    "webflow",
    "wordpress",
    "shopify",
    "supabase",
    "stripe",
    "mollie",
    "odoo",
    "hubspot",
    "pipedrive",
    "make",
    "n8n",
    "ga4",
    "gtm",
    "calendly",
  ],
  process: [
    {
      title: { nl: "Doel & scope", en: "Goal & scope" },
      text: {
        nl: "Wat moet de tool opleveren: leads, bestellingen, afspraken of inzicht? We bepalen doelgroep, benodigde data en de koppelingen die nodig zijn.",
        en: "What should the tool deliver: leads, orders, appointments or insight? We define the audience, the data required and the integrations needed.",
      },
    },
    {
      title: { nl: "Logica & flow", en: "Logic & flow" },
      text: {
        nl: "We vertalen je productkennis, prijsregels of scorecriteria naar een heldere beslisboom en een gebruikersflow die logisch voelt.",
        en: "We translate your product knowledge, pricing rules or scoring criteria into a clear decision tree and a user flow that feels logical.",
      },
    },
    {
      title: { nl: "Design & prototype", en: "Design & prototype" },
      text: {
        nl: "Een klikbaar prototype in Figma, in je huisstijl. Zo test je de ervaring voordat er een regel code geschreven is.",
        en: "A clickable prototype in Figma, in your identity. You test the experience before a single line of code is written.",
      },
    },
    {
      title: { nl: "Development & koppelingen", en: "Development & integrations" },
      text: {
        nl: "We bouwen de tool en koppelen hem aan je CRM, e-mail automation, betaalsysteem en website. Inclusief tests op elk apparaat.",
        en: "We build the tool and connect it to your CRM, email automation, payment system and website. Including testing on every device.",
      },
    },
    {
      title: { nl: "Lancering & optimalisatie", en: "Launch & optimisation" },
      text: {
        nl: "Live, met tracking in GA4. We meten waar bezoekers afhaken en verbeteren de tool op basis van echte data.",
        en: "Live, with tracking in GA4. We measure where visitors drop off and improve the tool based on real data.",
      },
    },
  ],
  chapters: [
    {
      kicker: { nl: "Start with the question.", en: "Start with the question." },
      h: {
        nl: "Configurator, calculator of keuzehulp: hoe kies je?",
        en: "Configurator, calculator or product finder: how do you choose?",
      },
      body: {
        nl: "De vraag is niet welke tool het indrukwekkendst is. De vraag is waar je klant nu op vastloopt. Daar volgt de rest uit:\n- Twijfelt je klant tussen te veel opties? Dan helpt een keuzehulp die de keuze in een paar vragen versmalt.\n- Wil je klant vooral weten wat het kost? Dan is een offerte- of prijscalculator de kortste weg.\n- Heeft je product veel varianten die je moet zien om ze te snappen? Dan wordt het een productconfigurator, eventueel in 3D.\n- Wil je klant eerst weten of hij ergens recht op heeft, of ergens klaar voor is? Dan past een check-tool of quickscan.\n- Is de volgende stap altijd een gesprek? Dan eindigt de flow in een boekingswidget.\n\nKijk daarnaast naar je eigen salesgesprekken. Welke vragen stel je elke keer opnieuw? Die vormen vaak al de helft van de tool. En weet je niet precies waar bezoekers nu afhaken, dan begint het bij [[tracking-analytics|goede tracking]], niet bij een nieuwe tool.\n\nEen veelgemaakte denkfout is alles in één tool willen proppen. Een configurator die ook adviseert, rekent, afspraken plant en een nieuwsbrief verkoopt, doet uiteindelijk niets echt goed. Begin bij één doel. Uitbreiden kan altijd, en dan weet je tenminste wat je uitbreidt. Twijfel je tussen twee richtingen? Dan zetten we ze in de kennismaking efkes naast elkaar.",
        en: "The question is not which tool is the most impressive. The question is where your customer gets stuck today. Everything else follows from that:\n- Is your customer torn between too many options? A product finder narrows the choice down in a few questions.\n- Does your customer mainly want to know what it costs? Then a quote or price calculator is the shortest route.\n- Does your product have lots of variants you need to see to understand? Then it becomes a product configurator, possibly in 3D.\n- Does your customer first need to know whether they qualify for something, or are ready for it? Then a check tool or quick scan fits.\n- Is the next step always a conversation? Then the flow ends in a booking widget.\n\nAlso take a look at your own sales conversations. Which questions do you ask every single time? They often make up half the tool already. And if you don't know exactly where visitors drop off right now, start with [[tracking-analytics|proper tracking]], not with a new tool.\n\nA common mistake is trying to cram everything into one tool. A configurator that also advises, calculates, books appointments and sells a newsletter ends up doing nothing particularly well. Start with one goal. You can always expand, and then at least you know what you are expanding. Torn between two directions? We'll happily put them side by side in the intro call.",
      },
      quote: {
        nl: "Begin bij waar je klant vastloopt, niet bij wat er technisch allemaal kan.",
        en: "Start where your customer gets stuck, not with everything that is technically possible.",
      },
    },
    {
      kicker: { nl: "Pretty is not a funnel.", en: "Pretty is not a funnel." },
      h: {
        nl: "Veelgemaakte fouten bij configurators en lead tools",
        en: "Common mistakes with configurators and lead tools",
      },
      body: {
        nl: "De meeste lead tools mislukken niet spectaculair. Ze worden simpelweg niet ingevuld. Meestal komt dat door een van deze vijf dingen:\n- Te veel vragen voordat er iets terugkomt. Elke extra stap kost bezoekers. Geef eerst waarde en vraag pas daarna om een e-mailadres.\n- Vakjargon. Jij weet wat een RAL-kleur of een U-waarde is, je bezoeker misschien niet. Schrijf de vragen zoals je klant praat.\n- Een uitkomst die niks zegt. 'Bedankt, we nemen contact op' is geen resultaat. Een prijsindicatie, een advies of een score wel.\n- Niemand die opvolgt. Een lead die een paar dagen in een inbox ligt, is afgekoeld. Koppel de tool aan je CRM en een slimme [[marketing-automatisering-funnels|opvolgflow]].\n- Niet meten. Zonder data weet je niet of mensen afhaken bij vraag twee of bij het formulier aan het eind.\n\nEn dan is er nog de tool die na de lancering nooit meer wordt aangeraakt. Prijzen veranderen, het assortiment verandert, de tool niet. Zo wordt je slimste verkoper ongemerkt je minst betrouwbare.\n\nHet goede nieuws: dit is allemaal te voorkomen. Met een klikbaar prototype vooraf, eerlijke tests en een beheeromgeving waarin je zelf prijzen en opties bijwerkt. Niet spannend, wel effectief.",
        en: "Most lead tools don't fail spectacularly. They just don't get filled in. Usually it comes down to one of these five things:\n- Too many questions before anything comes back. Every extra step costs you visitors. Give value first, and only then ask for an email address.\n- Jargon. You know what a RAL colour or a U-value is, your visitor might not. Write the questions the way your customer talks.\n- An outcome that says nothing. 'Thanks, we'll be in touch' is not a result. A price indication, a recommendation or a score is.\n- Nobody following up. A lead that sits in an inbox for a few days has gone cold. Connect the tool to your CRM and a smart [[marketing-automatisering-funnels|follow-up flow]].\n- Not measuring. Without data you can't tell whether people drop off at question two or at the form at the end.\n\nAnd then there is the tool nobody touches again after launch. Prices change, the range changes, the tool doesn't. That is how your smartest salesperson quietly becomes your least reliable one.\n\nThe good news: all of this can be avoided. With a clickable prototype upfront, honest testing and an admin where you update prices and options yourself. Not exciting, but it works.",
      },
      quote: {
        nl: "Een configurator die niemand invult, is gewoon een hele dure pagina.",
        en: "A configurator nobody fills in is just a very expensive page.",
      },
    },
    {
      kicker: { nl: "Your knowledge, our build.", en: "Your knowledge, our build." },
      h: {
        nl: "Wat vraagt een configurator van jou?",
        en: "What does a configurator ask of you?",
      },
      body: {
        nl: "Een configurator bouwen wij. Maar de kennis erin komt van jou. Dat is geen bijzaak, het is vaak het grootste deel van het werk. Reken op deze ingrediënten:\n- Productdata: opties, varianten en combinaties die wel of juist niet kunnen\n- Prijsregels: hoe een prijs is opgebouwd en wat een bezoeker mag zien\n- Beeld: foto's, renders of 3D-modellen. Heb je die nog niet, dan maken we ze, bijvoorbeeld met [[3d-visualisatie|3D-visualisatie]]\n- Iemand aan jouw kant die de logica controleert en de leads opvolgt\n\nHoe sneller die informatie op tafel ligt, hoe sneller je live bent. In de praktijk is het bouwen zelden wat het langst duurt. Het verzamelen van alle productdata vaak wel. Een tip: begin met het deel van je assortiment dat het vaakst wordt aangevraagd. De rest volgt later.\n\nNa de lancering begint het andere deel van het werk: bezoekers naar je tool krijgen. Een configurator die diep in je menu verstopt zit, doet weinig. Geef hem een prominente plek op je [[websites-webshops|website]], laat je advertenties er rechtstreeks naartoe wijzen en zorg dat de pagina gevonden wordt. Zo wordt de tool geen los speeltje, maar een vast onderdeel van hoe je verkoopt.",
        en: "We build the configurator. But the knowledge inside it comes from you. That is not a side issue, it is often the biggest part of the work. Expect these ingredients:\n- Product data: options, variants and the combinations that do or don't work\n- Pricing rules: how a price is built up and what a visitor is allowed to see\n- Visuals: photos, renders or 3D models. Don't have them yet? We make them, for example with [[3d-visualisatie|3D visualisation]]\n- Someone on your side who checks the logic and follows up the leads\n\nThe sooner that information is on the table, the sooner you go live. In practice, building is rarely what takes longest. Gathering all the product data often is. A tip: start with the part of your range that gets the most enquiries. The rest can follow later.\n\nAfter launch, the other half of the job begins: getting visitors to your tool. A configurator tucked away deep in your menu won't do much. Give it a prominent spot on your [[websites-webshops|website]], point your ads straight at it and make sure the page can be found. That way the tool isn't a loose gadget, but a fixed part of how you sell.",
      },
    },
  ],
  seo: {
    title: {
      nl: "Configurators, calculators en lead tools laten bouwen",
      en: "Custom configurators, calculators and lead tools",
    },
    sections: [
      {
        h: { nl: "Wat is een configurator of interactieve lead tool?", en: "What is a configurator or interactive lead tool?" },
        body: {
          nl: "Een configurator of lead tool is een stukje website waar bezoekers zelf iets doen. Ze stellen een product samen, rekenen een prijs uit, laten zich adviseren of checken waar ze staan. Denk aan een productconfigurator met opties en varianten, een prijscalculator die meteen een indicatie geeft, een keuzehulp die het juiste product aanwijst of een quickscan met een persoonlijke uitslag.\n\nHet verschil met een contactformulier? Een formulier vraagt iets. Een goede tool geeft eerst iets terug: inzicht, een prijs of een advies. Dat maakt de stap naar contact een stuk kleiner.\n\nEn jij krijgt er ook iets voor terug: een aanvraag met precies de informatie die je nodig hebt, zoals gekozen opties, budget, wensen of een score. Je salesteam hoeft minder na te bellen met de vraag wat de klant nu eigenlijk zocht, en kan meteen gericht opvolgen. Bonus: elke ingevulde tool vertelt je iets over wat klanten echt belangrijk vinden. Gratis marktonderzoek, eigenlijk.",
          en: "A configurator or lead tool is a part of your website where visitors do something themselves. They put a product together, work out a price, get advice or check where they stand. Think of a product configurator with options and variants, a price calculator that gives an instant indication, a product finder that points to the right product or a quick scan with a personal result.\n\nThe difference with a contact form? A form asks for something. A good tool gives something back first: insight, a price or a recommendation. That makes the step towards getting in touch a lot smaller.\n\nAnd you get something in return too: an enquiry with exactly the information you need, such as chosen options, budget, wishes or a score. Your sales team spends less time calling back to ask what the customer was actually after, and can follow up in a targeted way straight away. Bonus: every completed tool tells you something about what customers really value. Free market research, really.",
        },
      },
      {
        h: { nl: "Welke tools bouwen we?", en: "Which tools do we build?" },
        body: {
          nl: "Elke tool begint bij twee vragen: wat wil jij bereiken, en wat wil je klant weten? Daar volgt het type uit. De meest gevraagde:\n- Productconfigurators, ook in 3D, voor producten met veel opties en varianten\n- Offerte- en prijscalculators met live prijsberekening en automatische PDF-offerte\n- Keuzehulpen en quizzen die bezoekers naar het juiste product of pakket leiden\n- Check-tools zoals een subsidiecheck, scan of quickscan met persoonlijk resultaat\n- Boekings- en afsprakenwidgets, gekoppeld aan je agenda\n- Interactieve widgets en pop-ups die op het juiste moment iets nuttigs bieden, in plaats van alleen in de weg te zitten\n\nVaak werken ze samen. Een keuzehulp eindigt in een configurator, een calculator in een afspraak voor een adviesgesprek. Benieuwd hoe dat voelt? Onze eigen configurator op letsgo.m7branding.com staat live, dus probeer gerust. En of een tool voor jou zinvol is, zeggen we eerlijk in de kennismaking. Soms is het antwoord: nu nog niet.",
          en: "Every tool starts with two questions: what do you want to achieve, and what does your customer want to know? The type follows from there. The most requested:\n- Product configurators, including 3D, for products with many options and variants\n- Quote and price calculators with live pricing and automatic PDF quotes\n- Product finders and quizzes that guide visitors to the right product or package\n- Check tools such as a subsidy check, scan or quick scan with a personal result\n- Booking and appointment widgets, connected to your calendar\n- Interactive widgets and pop-ups that offer something useful at the right moment, instead of just getting in the way\n\nThey often work together. A product finder ends in a configurator, a calculator in a booking for a consultation. Curious how that feels? Our own configurator at letsgo.m7branding.com is live for anyone to try. And whether a tool makes sense for you is something we'll tell you honestly in the intro call. Sometimes the answer is: not yet.",
        },
      },
      {
        h: { nl: "Van klik naar CRM: koppelingen en automatisering", en: "From click to CRM: integrations and automation" },
        body: {
          nl: "Een mooie tool waarvan de data daarna in een mailbox verstoft, is een dure hobby. Een lead tool wordt pas waardevol als de informatie op de juiste plek landt. Daarom koppelen we elke tool aan wat je al gebruikt:\n- Je CRM, zoals Odoo, HubSpot, Pipedrive of Teamleader\n- E-mail automation voor de bevestiging en een opvolgflow\n- Automatische PDF-offertes of rapporten in je huisstijl\n- Betalingen en aanbetalingen via Stripe of Mollie\n- Koppelingen via API of met Make, n8n of Zapier\n\nHet resultaat is een funnel zonder overtypwerk. De bezoeker vult de tool in en krijgt direct een persoonlijke uitkomst. De lead staat met alle details in je CRM. Je salesteam krijgt een seintje. Met tracking in GA4 en Google Tag Manager zie je hoeveel bezoekers starten, waar ze afhaken en hoeveel aanvragen de tool oplevert. Dan weet je wat je tool waard is, in plaats van dat je het hoopt.",
          en: "A beautiful tool whose data then gathers dust in a mailbox is an expensive hobby. A lead tool only becomes valuable when the information lands in the right place. That is why we connect every tool to what you already use:\n- Your CRM, such as Odoo, HubSpot, Pipedrive or Teamleader\n- Email automation for the confirmation and a follow-up flow\n- Automatic PDF quotes or reports in your identity\n- Payments and deposits via Stripe or Mollie\n- Integrations via API or with Make, n8n or Zapier\n\nThe result is a funnel without retyping. The visitor completes the tool and instantly gets a personal outcome. The lead lands in your CRM with every detail. Your sales team gets a nudge. With tracking in GA4 and Google Tag Manager you see how many visitors start, where they drop off and how many enquiries the tool brings in. So you know what your tool is worth, instead of just hoping.",
        },
      },
      {
        h: { nl: "Werkt het op mijn website?", en: "Will it work on my website?" },
        body: {
          nl: "Bijna altijd wel. We bouwen tools die je als embed plaatst op WordPress, Webflow, Shopify of een eigen platform, of die als losse applicatie op een subdomein draaien. Voor zwaardere configurators werken we vaak met React en Next.js, met Three.js voor 3D en Supabase voor data en beheer.\n\nDaarbij letten we op wat bezoekers niet zien, maar wel merken:\n- Snel laden en soepel werken op mobiel\n- Duidelijk en toegankelijk, ook voor wie niet technisch is\n- AVG-proof, met toestemming voor marketing en veilige opslag\n- Beheer, zodat je zelf prijzen, vragen en opties aanpast\n\nAls Webflow Professional Partner kennen we Webflow van binnen en van buiten. Maar we zijn niet getrouwd met één platform. We kiezen de techniek die past bij je tool, je website en je team, niet bij onze eigen voorkeur.",
          en: "Almost always, yes. We build tools you embed on WordPress, Webflow, Shopify or a custom platform, or that run as a standalone application on a subdomain. For heavier configurators we often work with React and Next.js, with Three.js for 3D and Supabase for data and management.\n\nAlong the way we pay attention to what visitors don't see, but do notice:\n- Fast loading and smooth performance on mobile\n- Clear and accessible, even for non-technical users\n- GDPR-compliant, with marketing consent and secure storage\n- An admin, so you change prices, questions and options yourself\n\nAs a Webflow Professional Partner we know Webflow inside out. But we are not married to one platform. We choose the technology that suits your tool, your website and your team, not our own preference.",
        },
      },
      {
        h: { nl: "Waarom M7 voor configurators en lead tools?", en: "Why M7 for configurators and lead tools?" },
        body: {
          nl: "Een goede configurator vraagt drie vakken tegelijk: UX en design, development en marketing. Bij M7 zitten die gewoon aan één tafel. Geen overdracht tussen drie bureaus, wel korte lijnen. Daardoor bouwen we tools die er goed uitzien, technisch kloppen en passen in je funnel, van de advertentie die bezoekers binnenhaalt tot de opvolgmail na hun aanvraag.\n\nWe eten ook zelf van de pot die we koken. Op letsgo.m7branding.com stellen bezoekers hun project samen en zien ze meteen een prijsindicatie. Wat we daarvan leren, nemen we mee in elk project.\n\nOnze aanpak is nuchter: klein beginnen waar het kan, meten wat werkt en uitbreiden waar het iets oplevert. Zo groeit je tool mee met je bedrijf. Vanuit Nistelrode, in de regio Eindhoven, werken we voor bedrijven in Nederland, België en daarbuiten.",
          en: "A good configurator needs three disciplines at once: UX and design, development and marketing. At M7 they simply sit at one table. No hand-offs between three agencies, just short lines. That is how we build tools that look good, are technically sound and fit your funnel, from the ad that brings visitors in to the follow-up email after their enquiry.\n\nWe also eat our own cooking. At letsgo.m7branding.com visitors put together their project and instantly see a price indication. What we learn from that goes into every project.\n\nOur approach is down-to-earth: start small where possible, measure what works and expand where it pays off. That way your tool grows with your business. From Nistelrode, in the Eindhoven region, we work for companies in the Netherlands, Belgium and beyond.",
        },
      },
    ],
  },
  faqs: [
    {
      q: { nl: "Wat kost een configurator, calculator of keuzehulp laten maken?", en: "How much does a configurator, calculator or product finder cost?" },
      a: {
        nl: "Dat hangt af van de complexiteit. Een eenvoudige keuzehulp, quiz of calculator met CRM-koppeling start vanaf enkele duizenden euro's. Een uitgebreide productconfigurator met 3D, live prijsberekening, PDF-offertes en meerdere koppelingen is een groter maatwerktraject. In onze configurator op letsgo.m7branding.com zie je direct een indicatie, of plan een kennismaking voor een voorstel op maat.",
        en: "It depends on the complexity. A simple product finder, quiz or calculator with CRM integration starts from a few thousand euros. An extensive product configurator with 3D, live pricing, PDF quotes and multiple integrations is a larger custom project. Our configurator at letsgo.m7branding.com shows an indication instantly, or book an intro call for a tailored proposal.",
      },
    },
    {
      q: { nl: "Wat is het verschil tussen een configurator, een calculator en een keuzehulp?", en: "What is the difference between a configurator, a calculator and a product finder?" },
      a: {
        nl: "Met een configurator stelt de bezoeker zelf een product samen uit opties. Een calculator rekent op basis van een paar invoervelden een prijs, besparing of terugverdientijd uit. Een keuzehulp stelt vragen en adviseert welk product of pakket het beste past. Vaak combineren we ze in één flow.",
        en: "With a configurator the visitor builds a product from options. A calculator works out a price, saving or payback period from a few inputs. A product finder asks questions and recommends which product or package fits best. We often combine them in one flow.",
      },
    },
    {
      q: { nl: "Kan een configurator op mijn bestaande website draaien?", en: "Can a configurator run on my existing website?" },
      a: {
        nl: "Ja. We bouwen tools die je als embed plaatst op WordPress, Webflow, Shopify of een eigen platform. Een tool kan ook als losse applicatie op een subdomein draaien, zoals onze eigen configurator op letsgo.m7branding.com.",
        en: "Yes. We build tools you embed on WordPress, Webflow, Shopify or a custom platform. A tool can also run as a standalone application on a subdomain, like our own configurator at letsgo.m7branding.com.",
      },
    },
    {
      q: { nl: "Hoe lang duurt het om een configurator te bouwen?", en: "How long does it take to build a configurator?" },
      a: {
        nl: "Een keuzehulp, check-tool of eenvoudige calculator is meestal binnen 3 tot 6 weken live. Een productconfigurator met complexe logica, koppelingen of 3D duurt doorgaans 8 tot 16 weken, afhankelijk van het aantal opties en hoe snel de productdata beschikbaar is.",
        en: "A product finder, check tool or simple calculator is usually live within 3 to 6 weeks. A product configurator with complex logic, integrations or 3D typically takes 8 to 16 weeks, depending on the number of options and how quickly product data is available.",
      },
    },
    {
      q: { nl: "Koppelt de tool met mijn CRM?", en: "Does the tool integrate with my CRM?" },
      a: {
        nl: "Ja. We koppelen met onder meer Odoo, HubSpot, Pipedrive, Teamleader en ActiveCampaign, via een directe API-koppeling of met Make, n8n of Zapier. Elke lead komt met alle antwoorden en keuzes in je CRM terecht.",
        en: "Yes. We integrate with Odoo, HubSpot, Pipedrive, Teamleader and ActiveCampaign, among others, via a direct API connection or with Make, n8n or Zapier. Every lead arrives in your CRM with all answers and choices.",
      },
    },
    {
      q: { nl: "Kan de configurator automatisch een offerte of PDF maken?", en: "Can the configurator automatically generate a quote or PDF?" },
      a: {
        nl: "Ja. Na het invullen kan de tool een PDF-offerte of samenvatting in je huisstijl genereren, die automatisch naar de klant wordt gemaild en in je CRM wordt opgeslagen. Je bepaalt zelf of dat direct gebeurt of pas na een controle door je team.",
        en: "Yes. Once completed, the tool can generate a PDF quote or summary in your identity, emailed automatically to the customer and stored in your CRM. You decide whether that happens instantly or only after a check by your team.",
      },
    },
    {
      q: { nl: "Levert een configurator gegarandeerd meer leads op?", en: "Is a configurator guaranteed to generate more leads?" },
      a: {
        nl: "Garanties geven we niet, want resultaten hangen af van je aanbod, je verkeer en je opvolging. Wel geeft een goede tool bezoekers meer reden om hun gegevens achter te laten, en komen aanvragen completer binnen. We meten alles, zodat je ziet wat de tool oplevert en waar het beter kan.",
        en: "We do not give guarantees, because results depend on your offer, your traffic and your follow-up. A good tool does give visitors more reason to leave their details, and enquiries come in more complete. We measure everything, so you see what the tool delivers and where it can improve.",
      },
    },
    {
      q: { nl: "Kan ik prijzen, vragen en opties zelf aanpassen?", en: "Can I change prices, questions and options myself?" },
      a: {
        nl: "Ja. Afhankelijk van de tool beheer je prijzen en opties in een eigen beheeromgeving, in je CMS, in een Google Sheet of rechtstreeks vanuit je ERP zoals Odoo. Zo hoef je ons niet te bellen voor elke prijswijziging.",
        en: "Yes. Depending on the tool, you manage prices and options in a dedicated admin, in your CMS, in a Google Sheet or directly from your ERP, such as Odoo. That way you do not need to call us for every price change.",
      },
    },
    {
      q: { nl: "Hoe zit het met privacy en de AVG?", en: "What about privacy and GDPR?" },
      a: {
        nl: "We verzamelen alleen de gegevens die nodig zijn, vragen expliciet toestemming voor marketing, slaan data veilig op (waar mogelijk binnen de EU) en sluiten aan op je cookiebanner en Google Consent Mode. Zo blijft je tool netjes binnen de AVG.",
        en: "We only collect the data that is needed, ask explicit consent for marketing, store data securely (within the EU where possible) and connect to your cookie banner and Google Consent Mode. That keeps your tool properly within GDPR.",
      },
    },
    {
      q: { nl: "Werkt een 3D-configurator ook op mobiel?", en: "Does a 3D configurator work on mobile?" },
      a: {
        nl: "Ja. We optimaliseren 3D-modellen en textures zodat de configurator ook op smartphones soepel draait. Voor oudere apparaten bouwen we een lichtere weergave in, zodat iedereen de configurator kan gebruiken.",
        en: "Yes. We optimise 3D models and textures so the configurator runs smoothly on smartphones too. For older devices we build in a lighter view, so everyone can use the configurator.",
      },
    },
    {
      q: { nl: "Kunnen bezoekers direct betalen of een aanbetaling doen?", en: "Can visitors pay or make a deposit straight away?" },
      a: {
        nl: "Ja. Via Stripe of Mollie verwerk je online betalingen en aanbetalingen met onder meer iDEAL, creditcard en Bancontact. Ideaal voor bestellingen, reserveringen of een aanbetaling op maatwerk.",
        en: "Yes. Through Stripe or Mollie you process online payments and deposits with iDEAL, credit card and Bancontact, among others. Ideal for orders, reservations or a deposit on custom work.",
      },
    },
    {
      q: { nl: "Onderhouden en verbeteren jullie de tool na livegang?", en: "Do you maintain and improve the tool after launch?" },
      a: {
        nl: "Ja. We bieden onderhoud, hosting en doorontwikkeling. Op basis van data uit GA4 en je CRM stellen we verbeteringen voor, zoals een kortere flow, betere vragen of een A/B-test op de uitkomstpagina.",
        en: "Yes. We offer maintenance, hosting and further development. Based on data from GA4 and your CRM we suggest improvements, such as a shorter flow, better questions or an A/B test on the results page.",
      },
    },
  ],
  metaTitle: {
    nl: "Configurators, calculators & lead tools laten maken | M7",
    en: "Product configurators, calculators & lead tools | M7",
  },
  metaDescription: {
    nl: "Productconfigurators (ook 3D), offertecalculators, keuzehulpen, check-tools en widgets door M7. Gekoppeld aan je CRM en te plaatsen op elke website.",
    en: "Product configurators (incl. 3D), quote calculators, product finders, check tools and widgets by M7. Connected to your CRM and embeddable on any website.",
  },
  related: ["web-apps-portals-apps", "marketing-automatisering-funnels", "websites-webshops"],
  configurator: ["funnels", "webapps"],
};

export const applications: Application[] = [
  {
    slug: "productconfigurator",
    service: "configurators-lead-tools-widgets",
    title: { nl: "Productconfigurator", en: "Product configurator" },
    summary: {
      nl: "Laat klanten hun product samenstellen en zie direct resultaat en prijs.",
      en: "Let customers build their product and see the result and price instantly.",
    },
    intro: {
      nl: "Met een productconfigurator stellen klanten zelf hun ideale product samen: kleur, maat, materiaal, opties en accessoires. Ze zien direct het resultaat en de prijs, en jij ontvangt een complete, foutloze aanvraag of bestelling.",
      en: "With a product configurator customers build their ideal product themselves: colour, size, material, options and accessories. They instantly see the result and the price, and you receive a complete, error-free enquiry or order.",
    },
    body: [
      {
        h: { nl: "Complex aanbod, simpele keuzes", en: "Complex offering, simple choices" },
        body: {
          nl: "Veel producten hebben tientallen opties en combinaties die niet allemaal samengaan. We vertalen je productlogica naar een stapsgewijze flow die alleen geldige keuzes toont, met live prijsberekening en duidelijke uitleg per stap. Zo voorkom je verkeerde bestellingen en eindeloos heen-en-weer mailen.",
          en: "Many products have dozens of options and combinations that do not all go together. We translate your product logic into a step-by-step flow that only shows valid choices, with live pricing and clear explanations at every step. That prevents wrong orders and endless back-and-forth emails.",
        },
      },
      {
        h: { nl: "Van configuratie naar order", en: "From configuration to order" },
        body: {
          nl: "Na het samenstellen kan de klant direct bestellen, een offerte aanvragen of een PDF van de configuratie downloaden. De gegevens gaan automatisch naar je CRM, ERP of webshop, zoals Odoo, HubSpot, Pipedrive of Shopify, inclusief alle gekozen opties.",
          en: "After configuring, the customer can order straight away, request a quote or download a PDF of the configuration. The data goes automatically to your CRM, ERP or web shop, such as Odoo, HubSpot, Pipedrive or Shopify, including every chosen option.",
        },
      },
    ],
    deliverables: {
      nl: ["Analyse van productlogica en opties", "UX-flow en klikbaar prototype", "Configurator met live prijsberekening", "Visuele preview in 2D of 3D", "PDF-samenvatting of offerte", "Koppeling met CRM, ERP of webshop"],
      en: ["Analysis of product logic and options", "UX flow and clickable prototype", "Configurator with live pricing", "Visual preview in 2D or 3D", "PDF summary or quote", "Integration with CRM, ERP or web shop"],
    },
    benefits: [
      { title: { nl: "Minder fouten", en: "Fewer errors" }, text: { nl: "Alleen geldige combinaties, complete aanvragen.", en: "Only valid combinations, complete enquiries." } },
      { title: { nl: "Meer inzicht", en: "More clarity" }, text: { nl: "Klanten zien direct wat ze krijgen en wat het kost.", en: "Customers instantly see what they get and what it costs." } },
      { title: { nl: "Efficiënt", en: "Efficient" }, text: { nl: "Minder handwerk voor je salesteam.", en: "Less manual work for your sales team." } },
    ],
    tools: ["react", "nextjs", "supabase", "shopify", "odoo", "hubspot"],
    related: ["3d-configurator", "offerte-calculator", "webshop", "api-koppelingen"],
    faqs: [
      {
        q: { nl: "Voor welke producten is een configurator geschikt?", en: "Which products suit a configurator?" },
        a: {
          nl: "Voor elk product met meerdere opties of maatwerk: meubels, kozijnen, machines, voertuigonderdelen, kleding, installaties of B2B-producten met veel varianten. Hoe complexer je aanbod, hoe meer een configurator je klant en je salesteam helpt.",
          en: "For any product with multiple options or customisation: furniture, window frames, machinery, vehicle parts, clothing, installations or B2B products with many variants. The more complex your offering, the more a configurator helps your customer and your sales team.",
        },
      },
      {
        q: { nl: "Kan ik zelf opties en prijzen beheren?", en: "Can I manage options and prices myself?" },
        a: {
          nl: "Ja. Je beheert opties, afbeeldingen en prijzen in een eigen beheeromgeving, een Google Sheet of rechtstreeks vanuit je ERP. Wijzigingen zijn direct zichtbaar in de configurator.",
          en: "Yes. You manage options, images and prices in a dedicated admin, a Google Sheet or directly from your ERP. Changes appear in the configurator immediately.",
        },
      },
      {
        q: { nl: "Kan de configurator ook direct bestellingen verwerken?", en: "Can the configurator process orders directly?" },
        a: {
          nl: "Ja. We koppelen de configurator aan je webshop in Shopify of WooCommerce, of verwerken betalingen rechtstreeks via Stripe of Mollie. De configuratie gaat mee in de order, zodat productie precies weet wat er gemaakt moet worden.",
          en: "Yes. We connect the configurator to your web shop in Shopify or WooCommerce, or process payments directly through Stripe or Mollie. The configuration travels with the order, so production knows exactly what to make.",
        },
      },
    ],
    metaDescription: {
      nl: "Productconfigurator laten bouwen door M7: klanten stellen hun product samen met live prijsberekening, PDF-offerte en koppeling met CRM of webshop.",
      en: "Product configurator by M7: customers build their product with live pricing, PDF quotes and integration with your CRM or web shop.",
    },
  },
  {
    slug: "offerte-calculator",
    service: "configurators-lead-tools-widgets",
    title: { nl: "Offerte- & prijscalculator", en: "Quote & price calculator" },
    summary: {
      nl: "Een directe prijsindicatie voor je bezoeker, een warme lead voor jou.",
      en: "An instant price indication for your visitor, a warm lead for you.",
    },
    intro: {
      nl: "Prijs is vaak de eerste vraag van een potentiële klant. Met een offerte- of prijscalculator geef je direct een indicatie op basis van een paar slimme vragen, en ontvang je een aanvraag met alle details die je nodig hebt voor een scherpe offerte.",
      en: "Price is often a prospect's first question. With a quote or price calculator you give an instant indication based on a few smart questions, and receive an enquiry with all the details you need for an accurate quote.",
    },
    body: [
      {
        h: { nl: "Transparant, zonder je marge weg te geven", en: "Transparent, without giving away your margin" },
        body: {
          nl: "Je bepaalt zelf hoe precies de calculator rekent: een exacte prijs, een bandbreedte of een vanaf-prijs. We vertalen je rekenregels, staffels en toeslagen naar heldere logica, zodat de uitkomst aansluit op wat je salesteam later offreert.",
          en: "You decide how precisely the calculator works: an exact price, a range or a starting price. We translate your pricing rules, volume tiers and surcharges into clear logic, so the outcome matches what your sales team quotes later.",
        },
      },
      {
        h: { nl: "Automatisch een PDF-offerte", en: "An automatic PDF quote" },
        body: {
          nl: "Na het invullen genereert de calculator desgewenst automatisch een PDF-offerte in je huisstijl, mailt die naar de klant en zet de lead met alle antwoorden in je CRM. Met een opvolgflow via e-mail automation blijft de lead warm tot je salesteam belt.",
          en: "Once completed, the calculator can automatically generate a PDF quote in your identity, email it to the customer and add the lead with all answers to your CRM. A follow-up flow via email automation keeps the lead warm until your sales team calls.",
        },
      },
    ],
    deliverables: {
      nl: ["Uitwerking van rekenregels en staffels", "Calculator met live prijsberekening", "Automatische PDF-offerte in huisstijl", "Bevestigingsmail en opvolgflow", "Koppeling met CRM (Odoo, HubSpot, Pipedrive)", "Conversietracking in GA4"],
      en: ["Pricing rules and volume tiers worked out", "Calculator with live pricing", "Automatic on-brand PDF quote", "Confirmation email and follow-up flow", "CRM integration (Odoo, HubSpot, Pipedrive)", "Conversion tracking in GA4"],
    },
    benefits: [
      { title: { nl: "Sneller schakelen", en: "Faster response" }, text: { nl: "Je bezoeker hoeft niet te wachten op een eerste prijs.", en: "Your visitor does not have to wait for a first price." } },
      { title: { nl: "Betere leads", en: "Better leads" }, text: { nl: "Aanvragen met wensen en budget al ingevuld.", en: "Enquiries with wishes and budget already filled in." } },
      { title: { nl: "Altijd actief", en: "Always on" }, text: { nl: "Je calculator rekent ook buiten kantoortijd.", en: "Your calculator works after hours too." } },
    ],
    tools: ["react", "nextjs", "odoo", "hubspot", "pipedrive", "make"],
    related: ["productconfigurator", "crm-implementatie", "salesfunnels", "keuzehulp-quiz"],
    faqs: [
      {
        q: { nl: "Kijken mijn concurrenten niet mee met een prijscalculator?", en: "Won't competitors see my prices in a calculator?" },
        a: {
          nl: "Dat kan, maar je bepaalt zelf hoeveel je laat zien. Veel bedrijven tonen een bandbreedte of vanaf-prijs en vragen contactgegevens voordat de volledige offerte wordt verstuurd. Zo combineer je transparantie met controle.",
          en: "They could, but you decide how much to show. Many companies display a range or starting price and ask for contact details before the full quote is sent. That combines transparency with control.",
        },
      },
      {
        q: { nl: "Kan de calculator rekenen met mijn bestaande prijslijst?", en: "Can the calculator use my existing price list?" },
        a: {
          nl: "Ja. We halen prijzen uit je bestaande bron, zoals een Google Sheet, Odoo of een eigen beheeromgeving. Zo hoef je je prijzen maar op één plek bij te houden.",
          en: "Yes. We pull prices from your existing source, such as a Google Sheet, Odoo or a dedicated admin. That way you only maintain your prices in one place.",
        },
      },
      {
        q: { nl: "Wat als een aanvraag niet in de calculator past?", en: "What if an enquiry does not fit the calculator?" },
        a: {
          nl: "Voor uitzonderingen bouwen we altijd een uitweg in, zoals een optie voor iets anders of een veld voor toelichting. Zo mis je geen bijzondere aanvragen.",
          en: "We always build in a way out for exceptions, such as an 'other' option or a field for extra details. That way you never miss an unusual enquiry.",
        },
      },
    ],
    metaDescription: {
      nl: "Offerte- of prijscalculator laten maken door M7: directe prijsindicatie, automatische PDF-offerte en elke lead met alle details in je CRM.",
      en: "Quote or price calculator by M7: instant price indication, automatic PDF quote and every lead with full details in your CRM.",
    },
  },
  {
    slug: "keuzehulp-quiz",
    service: "configurators-lead-tools-widgets",
    title: { nl: "Keuzehulp & quiz", en: "Product finder & quiz" },
    summary: {
      nl: "Bezoekers vinden in een paar vragen wat bij ze past.",
      en: "Visitors find what suits them in just a few questions.",
    },
    intro: {
      nl: "Te veel keuze zorgt voor twijfel. Een keuzehulp of quiz stelt bezoekers een paar gerichte vragen en geeft een persoonlijk advies: het juiste product, pakket of de juiste dienst. Ondertussen leer jij wat je bezoekers echt zoeken.",
      en: "Too much choice creates doubt. A product finder or quiz asks visitors a few targeted questions and gives personal advice: the right product, package or service. Meanwhile, you learn what your visitors are really looking for.",
    },
    body: [
      {
        h: { nl: "Persoonlijk advies op schaal", en: "Personal advice at scale" },
        body: {
          nl: "We vertalen de vragen die je verkopers stellen naar een korte, interactieve flow met een beslisboom erachter. Elke uitkomst leidt naar een passend advies met een duidelijke volgende stap: bestellen, een afspraak plannen of een offerte aanvragen.",
          en: "We translate the questions your sales people ask into a short, interactive flow with a decision tree behind it. Every outcome leads to fitting advice with a clear next step: order, book an appointment or request a quote.",
        },
      },
      {
        h: { nl: "Segmentatie voor je marketing", en: "Segmentation for your marketing" },
        body: {
          nl: "De antwoorden zijn goud waard. We koppelen ze aan je CRM en e-mailplatform, zodat je leads automatisch segmenteert en opvolgt met content die past bij hun situatie. Zo wordt een quiz het startpunt van je funnel.",
          en: "The answers are pure gold. We connect them to your CRM and email platform, so you automatically segment leads and follow up with content that fits their situation. That turns a quiz into the starting point of your funnel.",
        },
      },
    ],
    deliverables: {
      nl: ["Vragenlijst en beslisboom", "Interactieve quiz- of keuzehulpflow", "Persoonlijke uitkomstpagina's", "Lead capture met AVG-proof toestemming", "Koppeling met CRM en e-mailplatform", "Tracking en rapportage per vraag"],
      en: ["Questionnaire and decision tree", "Interactive quiz or product finder flow", "Personal results pages", "Lead capture with GDPR-compliant consent", "Integration with CRM and email platform", "Tracking and reporting per question"],
    },
    benefits: [
      { title: { nl: "Minder twijfel", en: "Less doubt" }, text: { nl: "Bezoekers krijgen een helder, persoonlijk advies.", en: "Visitors get clear, personal advice." } },
      { title: { nl: "Rijkere leads", en: "Richer leads" }, text: { nl: "Je weet wat een lead zoekt voordat je belt.", en: "You know what a lead wants before you call." } },
      { title: { nl: "Laagdrempelig", en: "Low threshold" }, text: { nl: "Een quiz voelt als hulp, niet als formulier.", en: "A quiz feels like help, not a form." } },
    ],
    tools: ["react", "typeform", "webflow", "hubspot", "ga4"],
    related: ["check-tools", "lead-nurturing", "conversie-optimalisatie", "e-mailmarketing"],
    faqs: [
      {
        q: { nl: "Hoeveel vragen mag een keuzehulp hebben?", en: "How many questions should a product finder have?" },
        a: {
          nl: "Zo weinig als mogelijk, zo veel als nodig. Vaak werken 4 tot 8 vragen goed. We testen de flow en kijken in de data waar mensen afhaken, zodat we gericht kunnen optimaliseren.",
          en: "As few as possible, as many as needed. Often 4 to 8 questions work well. We test the flow and look at the data to see where people drop off, so we can optimise in a targeted way.",
        },
      },
      {
        q: { nl: "Moeten bezoekers hun e-mailadres invullen?", en: "Do visitors have to enter their email address?" },
        a: {
          nl: "Dat kies je zelf. Je kunt het resultaat direct tonen en daarna om contactgegevens vragen, of het uitgebreide advies per e-mail versturen. Het eerste levert vaak meer gebruik op, het tweede meer leads. We adviseren wat past bij je doel.",
          en: "That is up to you. You can show the result straight away and ask for contact details afterwards, or send the full advice by email. The first often drives more usage, the second more leads. We advise on what fits your goal.",
        },
      },
      {
        q: { nl: "Kan een quiz in mijn bestaande website?", en: "Can a quiz go into my existing website?" },
        a: {
          nl: "Ja. We plaatsen de keuzehulp als embed op WordPress, Webflow of Shopify, of als losse pagina die je ook in campagnes kunt gebruiken.",
          en: "Yes. We place the product finder as an embed on WordPress, Webflow or Shopify, or as a standalone page you can also use in campaigns.",
        },
      },
    ],
    metaDescription: {
      nl: "Keuzehulp of quiz laten maken door M7: bezoekers krijgen persoonlijk advies, jij ontvangt rijke leads, gekoppeld aan je CRM en e-mailplatform.",
      en: "Product finder or quiz by M7: visitors get personal advice, you get rich leads, connected to your CRM and email platform.",
    },
  },
  {
    slug: "check-tools",
    service: "configurators-lead-tools-widgets",
    title: { nl: "Check-tools & quickscans", en: "Check tools & quick scans" },
    summary: {
      nl: "Subsidiecheck, scan of quickscan: direct inzicht voor je bezoeker.",
      en: "Subsidy check, scan or quick scan: instant insight for your visitor.",
    },
    intro: {
      nl: "Met een check-tool beantwoordt je bezoeker een paar vragen en krijgt direct inzicht: kom ik in aanmerking voor subsidie, hoe scoort mijn bedrijf, wat levert dit op? Een waardevolle tool voor je bezoeker en een sterke leadmagneet voor jou.",
      en: "With a check tool your visitor answers a few questions and gets instant insight: am I eligible for a subsidy, how does my company score, what will this deliver? A valuable tool for your visitor and a strong lead magnet for you.",
    },
    body: [
      {
        h: { nl: "Eerst waarde geven, dan pas vragen", en: "Give value first, then ask" },
        body: {
          nl: "Een subsidiecheck, besparingsscan, volwassenheidsscan of quickscan geeft bezoekers een concreet, persoonlijk resultaat. Dat maakt het een stuk logischer om contactgegevens achter te laten dan bij een standaard contactformulier. We bouwen de scorelogica op basis van jouw expertise en criteria.",
          en: "A subsidy check, savings scan, maturity scan or quick scan gives visitors a concrete, personal result. That makes leaving contact details far more logical than with a standard contact form. We build the scoring logic based on your expertise and criteria.",
        },
      },
      {
        h: { nl: "Een rapport als resultaat", en: "A report as the result" },
        body: {
          nl: "De uitkomst verschijnt direct op het scherm en desgewenst als gepersonaliseerd PDF-rapport in de mailbox. De lead komt met alle antwoorden en de score in je CRM terecht, zodat je salesteam weet waar het gesprek over moet gaan.",
          en: "The outcome appears on screen instantly and, if you like, as a personalised PDF report in the inbox. The lead lands in your CRM with all answers and the score, so your sales team knows what the conversation should be about.",
        },
      },
    ],
    deliverables: {
      nl: ["Vragen- en scoremodel", "Check-tool of quickscan-flow", "Resultaatpagina met persoonlijk advies", "Gepersonaliseerd PDF-rapport", "Koppeling met CRM en e-mail automation", "Landingspagina voor campagnes"],
      en: ["Question and scoring model", "Check tool or quick scan flow", "Results page with personal advice", "Personalised PDF report", "Integration with CRM and email automation", "Landing page for campaigns"],
    },
    benefits: [
      { title: { nl: "Sterke leadmagneet", en: "Strong lead magnet" }, text: { nl: "Een concreet resultaat in ruil voor contactgegevens.", en: "A concrete result in exchange for contact details." } },
      { title: { nl: "Gekwalificeerd", en: "Qualified" }, text: { nl: "Je weet vooraf of een lead bij je past.", en: "You know upfront whether a lead is a fit." } },
      { title: { nl: "Expertise zichtbaar", en: "Expertise on show" }, text: { nl: "Je laat zien wat je weet, zonder verkooppraatje.", en: "You show what you know, without a sales pitch." } },
    ],
    tools: ["nextjs", "supabase", "odoo", "make", "ga4"],
    related: ["keuzehulp-quiz", "offerte-calculator", "marketing-automation", "landingspaginas"],
    faqs: [
      {
        q: { nl: "Wat is een subsidiecheck-tool?", en: "What is a subsidy check tool?" },
        a: {
          nl: "Een tool waarin bezoekers vragen over hun situatie beantwoorden en direct zien voor welke regelingen ze mogelijk in aanmerking komen. Het definitieve oordeel ligt bij de subsidieverstrekker; de check geeft een eerste indicatie en een concrete reden om contact op te nemen.",
          en: "A tool where visitors answer questions about their situation and instantly see which schemes they may be eligible for. The final decision lies with the funding body; the check gives a first indication and a concrete reason to get in touch.",
        },
      },
      {
        q: { nl: "Kan de scorelogica later worden aangepast?", en: "Can the scoring logic be changed later?" },
        a: {
          nl: "Ja. Regelingen, criteria en prijzen veranderen. We bouwen de logica zo dat je vragen, drempels en adviezen eenvoudig kunt bijwerken, zelf of met onze hulp.",
          en: "Yes. Schemes, criteria and prices change. We build the logic so you can easily update questions, thresholds and advice, yourself or with our help.",
        },
      },
      {
        q: { nl: "Hoe zorgen we dat mensen de check-tool vinden?", en: "How do we make sure people find the check tool?" },
        a: {
          nl: "Met een eigen landingspagina, een prominente plek op je website en campagnes via Google Ads, LinkedIn of je nieuwsbrief. Omdat de tool direct waarde biedt, is het een sterke propositie om mee te adverteren.",
          en: "With a dedicated landing page, a prominent spot on your website and campaigns via Google Ads, LinkedIn or your newsletter. Because the tool offers instant value, it is a strong proposition to advertise with.",
        },
      },
    ],
    metaDescription: {
      nl: "Check-tool of quickscan laten maken door M7: subsidiecheck, scan of besparingscheck met persoonlijk resultaat, PDF-rapport en CRM-koppeling.",
      en: "Check tool or quick scan by M7: subsidy check, scan or savings check with a personal result, PDF report and CRM integration.",
    },
  },
  {
    slug: "boekingswidget",
    service: "configurators-lead-tools-widgets",
    title: { nl: "Boekings- & afsprakenwidget", en: "Booking & appointment widget" },
    summary: {
      nl: "Afspraken, demo's of reserveringen direct inplannen op je website.",
      en: "Schedule appointments, demos or reservations right on your website.",
    },
    intro: {
      nl: "Waarom heen en weer mailen over een tijdstip? Met een boekingswidget plannen klanten zelf een afspraak, demo, proefrit, intake of reservering in, direct gekoppeld aan je agenda, je CRM en desgewenst een online betaling.",
      en: "Why email back and forth about a time slot? With a booking widget customers schedule an appointment, demo, test drive, intake or reservation themselves, directly connected to your calendar, your CRM and, if you like, an online payment.",
    },
    body: [
      {
        h: { nl: "Van standaard tool tot maatwerk", en: "From standard tool to custom build" },
        body: {
          nl: "Soms is een goed ingerichte tool als Calendly genoeg, soms heb je meer nodig: meerdere locaties, medewerkers, ruimtes of specifieke regels voor beschikbaarheid. We adviseren wat past en bouwen of integreren een widget die volledig aansluit op je huisstijl en website.",
          en: "Sometimes a well-configured tool like Calendly is enough, sometimes you need more: multiple locations, staff, rooms or specific availability rules. We advise on what fits and build or integrate a widget that matches your identity and website completely.",
        },
      },
      {
        h: { nl: "Minder no-shows, meer overzicht", en: "Fewer no-shows, more overview" },
        body: {
          nl: "Automatische bevestigingen en herinneringen via e-mail, sms of WhatsApp helpen no-shows te beperken. Een aanbetaling via Stripe of Mollie maakt een afspraak bovendien concreter. Elke boeking komt automatisch in je agenda en CRM terecht.",
          en: "Automatic confirmations and reminders via email, text message or WhatsApp help reduce no-shows. A deposit via Stripe or Mollie also makes an appointment more concrete. Every booking lands in your calendar and CRM automatically.",
        },
      },
    ],
    deliverables: {
      nl: ["Advies en inrichting van de boekingsflow", "Boekingswidget in huisstijl", "Agendasynchronisatie (Google, Outlook)", "Bevestigingen en herinneringen", "Optioneel: online (aan)betaling", "Koppeling met CRM"],
      en: ["Advice and setup of the booking flow", "On-brand booking widget", "Calendar sync (Google, Outlook)", "Confirmations and reminders", "Optional: online payment or deposit", "CRM integration"],
    },
    benefits: [
      { title: { nl: "Altijd boekbaar", en: "Always bookable" }, text: { nl: "Klanten plannen in wanneer het hen uitkomt.", en: "Customers book whenever suits them." } },
      { title: { nl: "Minder administratie", en: "Less admin" }, text: { nl: "Geen heen-en-weer gemail over tijdstippen.", en: "No back-and-forth emails about time slots." } },
      { title: { nl: "Professioneel", en: "Professional" }, text: { nl: "Een soepele ervaring in je eigen stijl.", en: "A smooth experience in your own style." } },
    ],
    tools: ["calendly", "react", "stripe", "mollie", "hubspot", "twilio"],
    related: ["website-widgets", "workflow-automatisering", "klantportaal", "crm-implementatie"],
    faqs: [
      {
        q: { nl: "Kan de widget koppelen met Google Agenda of Outlook?", en: "Can the widget connect to Google Calendar or Outlook?" },
        a: {
          nl: "Ja. De widget synchroniseert met Google Agenda en Outlook, zodat alleen echt beschikbare tijden worden getoond en nieuwe afspraken direct in je agenda staan.",
          en: "Yes. The widget syncs with Google Calendar and Outlook, so only truly available times are shown and new appointments appear in your calendar instantly.",
        },
      },
      {
        q: { nl: "Kan ik online betalingen ontvangen bij een boeking?", en: "Can I take online payments with a booking?" },
        a: {
          nl: "Ja. Via Stripe of Mollie ontvang je een volledige betaling of aanbetaling, met onder meer iDEAL, creditcard en Bancontact.",
          en: "Yes. Through Stripe or Mollie you receive a full payment or deposit, with iDEAL, credit card and Bancontact, among others.",
        },
      },
      {
        q: { nl: "Is Calendly niet genoeg?", en: "Isn't Calendly enough?" },
        a: {
          nl: "Voor veel situaties wel, en dan richten we het graag voor je in. Bij meerdere locaties, teams, ruimtes of complexe regels bouwen we maatwerk dat precies past bij je proces.",
          en: "For many situations it is, and then we are happy to set it up for you. With multiple locations, teams, rooms or complex rules we build a custom solution that fits your process exactly.",
        },
      },
    ],
    metaDescription: {
      nl: "Boekings- of afsprakenwidget door M7: klanten plannen zelf afspraken, demo's of reserveringen in, gekoppeld aan je agenda, CRM en betalingen.",
      en: "Booking or appointment widget by M7: customers schedule appointments, demos or reservations themselves, connected to your calendar, CRM and payments.",
    },
  },
  {
    slug: "website-widgets",
    service: "configurators-lead-tools-widgets",
    title: { nl: "Interactieve website-widgets & pop-ups", en: "Interactive website widgets & pop-ups" },
    summary: {
      nl: "Slimme elementen die bezoekers activeren en leads opleveren.",
      en: "Smart elements that engage visitors and generate leads.",
    },
    intro: {
      nl: "Kleine interacties kunnen een groot verschil maken. We ontwerpen en bouwen interactieve widgets voor je website: van slimme pop-ups en slide-ins tot rekenmodules, vergelijkers, kaarten, sliders en lead capture-elementen die passen bij je merk.",
      en: "Small interactions can make a big difference. We design and build interactive widgets for your website: from smart pop-ups and slide-ins to calculators, comparison tools, maps, sliders and lead capture elements that match your brand.",
    },
    body: [
      {
        h: { nl: "Relevant in plaats van irritant", en: "Relevant instead of annoying" },
        body: {
          nl: "Een pop-up die direct bij binnenkomst je scherm blokkeert, werkt vaak averechts. We zetten triggers in op het juiste moment, zoals scrolldiepte, exit-intent of een specifieke pagina, en bieden iets waardevols: een gids, korting, check of afspraak. Altijd in lijn met je huisstijl en de AVG.",
          en: "A pop-up that blocks your screen the moment you arrive often backfires. We use triggers at the right moment, such as scroll depth, exit intent or a specific page, and offer something valuable: a guide, discount, check or appointment. Always in line with your identity and GDPR.",
        },
      },
      {
        h: { nl: "Overal te plaatsen", en: "Works anywhere" },
        body: {
          nl: "Onze widgets werken als embed op WordPress, Webflow, Shopify of een eigen platform, en zijn licht, snel en mobielvriendelijk. Met tracking in GA4 en Google Tag Manager zie je precies hoe vaak ze gebruikt worden en wat ze opleveren.",
          en: "Our widgets work as embeds on WordPress, Webflow, Shopify or a custom platform, and are lightweight, fast and mobile-friendly. With tracking in GA4 and Google Tag Manager you see exactly how often they are used and what they deliver.",
        },
      },
    ],
    deliverables: {
      nl: ["Concept en interactieontwerp", "Widgets en pop-ups op maat", "Triggers en targetingregels", "Embed voor WordPress, Webflow of Shopify", "Koppeling met CRM of e-mailplatform", "Tracking via GA4 en GTM"],
      en: ["Concept and interaction design", "Custom widgets and pop-ups", "Triggers and targeting rules", "Embed for WordPress, Webflow or Shopify", "Integration with CRM or email platform", "Tracking via GA4 and GTM"],
    },
    benefits: [
      { title: { nl: "Meer interactie", en: "More engagement" }, text: { nl: "Bezoekers doen iets in plaats van alleen te lezen.", en: "Visitors do something instead of just reading." } },
      { title: { nl: "Merkconform", en: "On-brand" }, text: { nl: "Ontworpen in je eigen huisstijl.", en: "Designed in your own identity." } },
      { title: { nl: "Meetbaar", en: "Measurable" }, text: { nl: "Je ziet precies wat elke widget oplevert.", en: "You see exactly what each widget delivers." } },
    ],
    tools: ["react", "webflow", "wordpress", "gtm", "ga4", "gsap"],
    related: ["boekingswidget", "conversie-optimalisatie", "ai-chatbots", "lottie-animaties"],
    faqs: [
      {
        q: { nl: "Vertragen widgets mijn website niet?", en: "Won't widgets slow down my website?" },
        a: {
          nl: "Niet als ze goed gebouwd zijn. We houden widgets licht, laden ze pas wanneer ze nodig zijn en testen de impact met PageSpeed Insights, zodat je website snel blijft.",
          en: "Not if they are built well. We keep widgets lightweight, load them only when needed and test the impact with PageSpeed Insights, so your website stays fast.",
        },
      },
      {
        q: { nl: "Zijn pop-ups niet slecht voor SEO?", en: "Aren't pop-ups bad for SEO?" },
        a: {
          nl: "Opdringerige pop-ups die op mobiel de inhoud afschermen, schaden de gebruikservaring, en Google is daar kritisch op. We ontwerpen pop-ups en slide-ins die de content niet blokkeren en pas verschijnen op een logisch moment.",
          en: "Intrusive pop-ups that cover content on mobile harm the user experience, and Google is critical of them. We design pop-ups and slide-ins that do not block content and only appear at a logical moment.",
        },
      },
      {
        q: { nl: "Kunnen jullie een widget maken die nog niet bestaat?", en: "Can you build a widget that does not exist yet?" },
        a: {
          nl: "Ja, dat is precies wat we graag doen. Beschrijf wat je bezoekers moeten kunnen doen, dan ontwerpen en bouwen we een widget op maat.",
          en: "Yes, that is exactly what we love to do. Describe what your visitors should be able to do, and we will design and build a custom widget.",
        },
      },
    ],
    metaDescription: {
      nl: "Interactieve website-widgets en pop-ups door M7: slimme triggers, lead capture en rekenmodules, op WordPress, Webflow of Shopify.",
      en: "Interactive website widgets and pop-ups by M7: smart triggers, lead capture and calculators, on WordPress, Webflow or Shopify.",
    },
  },
  {
    slug: "3d-configurator",
    service: "configurators-lead-tools-widgets",
    title: { nl: "3D-configurator", en: "3D configurator" },
    summary: {
      nl: "Je product realistisch in 3D, live aan te passen in de browser.",
      en: "Your product in realistic 3D, customisable live in the browser.",
    },
    intro: {
      nl: "Met een 3D-configurator draaien, zoomen en personaliseren klanten je product live in de browser. Elke keuze voor kleur, materiaal of onderdeel is direct zichtbaar, zonder app en zonder honderden productfoto's.",
      en: "With a 3D configurator customers rotate, zoom and personalise your product live in the browser. Every choice of colour, material or part is visible instantly, with no app and without hundreds of product photos.",
    },
    body: [
      {
        h: { nl: "Zien is kiezen", en: "Seeing is choosing" },
        body: {
          nl: "Een 3D-configurator maakt complexe of kostbare producten tastbaar, nog voordat ze bestaan. Denk aan een titanium uitlaatconfigurator voor een automotive merk, waarin bezoekers via een flow als 'Vind jouw uitlaat' hun model kiezen en de passende uitlaat in 3D bekijken. Of aan meubels, machines, fietsen, kozijnen en keukens.",
          en: "A 3D configurator makes complex or high-value products tangible, even before they exist. Think of a titanium exhaust configurator for an automotive brand, where visitors use a 'Find your exhaust' flow to pick their model and view the matching exhaust in 3D. Or of furniture, machinery, bikes, window frames and kitchens.",
        },
      },
      {
        h: { nl: "Snel, licht en op elk apparaat", en: "Fast, light and on any device" },
        body: {
          nl: "We optimaliseren 3D-modellen in Blender en bouwen de configurator met Three.js en React, zodat hij soepel draait op desktop én mobiel. Bestaande CAD-bestanden kunnen vaak als basis dienen. We combineren de configurator met live prijsberekening, een PDF-samenvatting en koppelingen met je CRM of webshop.",
          en: "We optimise 3D models in Blender and build the configurator with Three.js and React, so it runs smoothly on desktop and mobile. Existing CAD files can often serve as a starting point. We combine the configurator with live pricing, a PDF summary and integrations with your CRM or web shop.",
        },
      },
    ],
    deliverables: {
      nl: ["Optimalisatie van 3D-modellen (CAD naar web)", "Materialen, kleuren en belichting", "3D-configurator in de browser (WebGL)", "Live prijsberekening en opties", "Screenshot of PDF van de configuratie", "Koppeling met CRM of webshop"],
      en: ["3D model optimisation (CAD to web)", "Materials, colours and lighting", "In-browser 3D configurator (WebGL)", "Live pricing and options", "Screenshot or PDF of the configuration", "Integration with CRM or web shop"],
    },
    benefits: [
      { title: { nl: "Wow-factor", en: "Wow factor" }, text: { nl: "Een ervaring die bezoekers bijblijft.", en: "An experience visitors remember." } },
      { title: { nl: "Minder twijfel", en: "Less doubt" }, text: { nl: "Klanten zien precies wat ze bestellen.", en: "Customers see exactly what they order." } },
      { title: { nl: "Geen fotoshoot per variant", en: "No photo shoot per variant" }, text: { nl: "Elke variant is direct als render beschikbaar.", en: "Every variant is instantly available as a render." } },
    ],
    tools: ["threejs", "blender", "react", "nextjs", "spline"],
    related: ["productconfigurator", "3d-visualisatie", "webshop", "productfotografie"],
    faqs: [
      {
        q: { nl: "Heb ik 3D-modellen van mijn product nodig?", en: "Do I need 3D models of my product?" },
        a: {
          nl: "Het helpt, maar het hoeft niet. Bestaande CAD-bestanden (zoals STEP, OBJ of FBX) optimaliseren we voor het web. Zijn er geen modellen, dan maken we ze in Blender op basis van technische tekeningen en foto's.",
          en: "It helps, but it is not required. We optimise existing CAD files (such as STEP, OBJ or FBX) for the web. If there are no models, we create them in Blender based on technical drawings and photos.",
        },
      },
      {
        q: { nl: "Werkt een 3D-configurator op mobiel?", en: "Does a 3D configurator work on mobile?" },
        a: {
          nl: "Ja. We optimaliseren polygonen, textures en laadtijd zodat de configurator ook op smartphones soepel draait, met een lichtere weergave als terugvaloptie voor oudere apparaten.",
          en: "Yes. We optimise polygons, textures and load time so the configurator runs smoothly on smartphones too, with a lighter view as a fallback for older devices.",
        },
      },
      {
        q: { nl: "Wat kost een 3D-configurator?", en: "How much does a 3D configurator cost?" },
        a: {
          nl: "Een 3D-configurator is maatwerk. De investering hangt vooral af van het aantal onderdelen, materialen en opties, en van de vraag of er al bruikbare 3D-modellen zijn. Reken op een groter traject dan een 2D-configurator; na een korte intake krijg je een heldere indicatie.",
          en: "A 3D configurator is custom work. The investment depends mainly on the number of parts, materials and options, and on whether usable 3D models already exist. Expect a larger project than a 2D configurator; after a short intake you receive a clear indication.",
        },
      },
    ],
    metaDescription: {
      nl: "3D-configurator laten bouwen door M7: je product realistisch in 3D, live aan te passen in de browser, met prijsberekening en CRM-koppeling.",
      en: "3D configurator by M7: your product in realistic 3D, customisable live in the browser, with live pricing and CRM integration.",
    },
  },
];
