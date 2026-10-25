import type { Application, Service } from "../types";

export const service: Service = {
  slug: "marketing-automatisering-funnels",
  order: 4,
  title: { nl: "Marketing, Automatiseringen & Funnels", en: "Marketing, Automation & Funnels" },
  short: { nl: "Marketing", en: "Marketing" },
  color: "#FFC23D",
  icon: "flow",
  mockup: "flow",
  tagline: { nl: "Marketing that works while you sleep.", en: "Marketing that works while you sleep." },
  intro: {
    nl: "Van eerste klik tot vaste klant: wij bouwen funnels, e-mailflows, CRM-koppelingen en automatiseringen die je leads opvolgen, ook als jij even niet kijkt.",
    en: "From first click to loyal customer: we build funnels, email flows, CRM integrations and automations that follow up your leads, even when you are not looking.",
  },
  description: {
    nl: "Goede marketing stopt niet zodra iemand op je website landt. Het verschil zit in wat daarna gebeurt: de juiste opvolging op het juiste moment, een CRM dat klopt en data waarop je durft te sturen. M7 verbindt je website, formulieren, e-mailtool, CRM en advertentieplatformen tot één slim systeem dat leads warm maakt en je salesteam veel handwerk bespaart.\n\nWe werken met de tools die bij jouw organisatie passen, van HubSpot, ActiveCampaign en Klaviyo tot Odoo, Pipedrive, Make en n8n. Geen black box, maar heldere flows, betrouwbare tracking en dashboards waarop je precies ziet wat je marketing oplevert. En omdat strategie, design en techniek bij ons aan één tafel zitten, ziet elke funnel er ook nog eens goed uit.",
    en: "Good marketing does not stop the moment someone lands on your website. The difference lies in what happens next: the right follow-up at the right moment, a CRM you can rely on and data you dare to steer by. M7 connects your website, forms, email tool, CRM and ad platforms into one smart system that warms up leads and saves your sales team a lot of manual work.\n\nWe work with the tools that fit your organisation, from HubSpot, ActiveCampaign and Klaviyo to Odoo, Pipedrive, Make and n8n. No black box, but clear flows, reliable tracking and dashboards that show exactly what your marketing delivers. And because strategy, design and technology sit at one table with us, every funnel looks great too.",
  },
  highlights: [
    { value: "250+", label: { nl: "Klanten wereldwijd", en: "Clients worldwide" } },
    { value: "24/7", label: { nl: "Flows die altijd doorlopen", en: "Flows that never stop running" } },
    { value: "1", label: { nl: "Team voor marketing, web & data", en: "Team for marketing, web & data" } },
  ],
  terms: [
    "Marketing automation",
    "E-mailmarketing",
    "E-mailflows",
    "Salesfunnels",
    "Leadgeneratie",
    "Opt-ins",
    "Landingspagina's",
    "Lead magnets",
    "CRM implementatie",
    "Lead scoring",
    "Lead nurturing",
    "Workflow-automatisering",
    "Make",
    "Zapier",
    "n8n",
    "GA4",
    "Google Tag Manager",
    "Server-side tagging",
    "Consent Mode v2",
    "Looker Studio",
    "A/B testen",
    "Conversie-optimalisatie",
    "Audience sync",
  ],
  tools: [
    "hubspot",
    "activecampaign",
    "klaviyo",
    "mailchimp",
    "brevo",
    "odoo",
    "pipedrive",
    "teamleader",
    "make",
    "zapier",
    "n8n",
    "ga4",
    "gtm",
    "lookerstudio",
    "cookiebot",
    "hotjar",
    "airtable",
    "notion",
    "typeform",
    "calendly",
  ],
  process: [
    {
      title: { nl: "Analyse & klantreis", en: "Audit & customer journey" },
      text: {
        nl: "We brengen je huidige tools, data en klantreis in kaart. Waar haken leads af en waar laat je tijd of omzet liggen?",
        en: "We map your current tools, data and customer journey. Where do leads drop off and where are you leaving time or revenue on the table?",
      },
    },
    {
      title: { nl: "Strategie & blauwdruk", en: "Strategy & blueprint" },
      text: {
        nl: "Funnels, segmenten, lead scoring en datastromen in één heldere blauwdruk, met KPI's waarop we samen sturen.",
        en: "Funnels, segments, lead scoring and data flows in one clear blueprint, with KPIs we steer by together.",
      },
    },
    {
      title: { nl: "Bouw & koppelingen", en: "Build & integrations" },
      text: {
        nl: "We richten je CRM en e-mailtool in, bouwen landingspagina's en flows en koppelen alles met Make, Zapier, n8n of API's.",
        en: "We set up your CRM and email tool, build landing pages and flows and connect everything with Make, Zapier, n8n or APIs.",
      },
    },
    {
      title: { nl: "Tracking & testen", en: "Tracking & testing" },
      text: {
        nl: "GA4, Tag Manager, Consent Mode v2 en conversies worden waterdicht ingericht. Elke flow testen we end-to-end vóór livegang.",
        en: "GA4, Tag Manager, Consent Mode v2 and conversions are set up watertight. We test every flow end-to-end before going live.",
      },
    },
    {
      title: { nl: "Livegang & optimalisatie", en: "Launch & optimisation" },
      text: {
        nl: "Na lancering volgen we de resultaten in je dashboard en verbeteren we continu met A/B-tests, nieuwe segmenten en extra flows.",
        en: "After launch we track results in your dashboard and keep improving with A/B tests, new segments and additional flows.",
      },
    },
  ],
  chapters: [
    {
      kicker: { nl: "First things first.", en: "First things first." },
      h: {
        nl: "Waar begin je met marketing automation?",
        en: "Where do you start with marketing automation?",
      },
      body: {
        nl: "De grootste valkuil is meteen alles willen. Lead scoring, tien segmenten en een flow voor elke denkbare situatie. Op papier prachtig, in de praktijk een doolhof waar niemand meer de weg in weet. Begin liever met de flows die je direct tijd of omzet opleveren:\n- Een welkomstreeks voor nieuwe inschrijvers of klanten\n- Opvolging na een offerteaanvraag, zodat geen enkele aanvraag blijft liggen\n- Een reviewverzoek of herhaalaankoop-mail na een afgeronde opdracht\n- Een seintje aan sales als een bekend contact je prijspagina bezoekt\n\nVoordat er ook maar één flow draait, kijken we naar je basis. Klopt je contactdata? Weet je waar je leads vandaan komen? Is toestemming netjes geregeld? Een flow is zo goed als de gegevens die erin gaan.\n\nDaarna zorgen we voor instroom. Een slimme [[keuzehulp-quiz|keuzehulp]] of [[offerte-calculator|offertecalculator]] op je site levert vaak rijkere leads op dan een standaard contactformulier, omdat je meteen weet waar iemand naar zoekt. Dat maakt je opvolging persoonlijker zonder extra handwerk. Pas als de basis staat en de eerste flows iets opleveren, bouwen we verder. Stap voor stap, op basis van wat de cijfers laten zien.",
        en: "The biggest pitfall is wanting everything at once. Lead scoring, ten segments and a flow for every situation imaginable. Beautiful on paper, in practice a maze nobody can find their way through. Better to start with the flows that save you time or bring in revenue straight away:\n- A welcome series for new subscribers or customers\n- Follow-up after a quote request, so no request is left lying around\n- A review request or repeat purchase email after a completed job\n- A nudge to sales when a known contact visits your pricing page\n\nBefore a single flow goes live, we look at your foundations. Is your contact data correct? Do you know where your leads come from? Is consent properly arranged? A flow is only as good as the data that goes into it.\n\nThen we take care of the inflow. A smart [[keuzehulp-quiz|product finder]] or [[offerte-calculator|quote calculator]] on your site often delivers richer leads than a standard contact form, because you immediately know what someone is looking for. That makes your follow-up more personal without extra manual work. Only once the foundations are in place and the first flows deliver do we build further. Step by step, based on what the numbers show.",
      },
      quote: {
        nl: "Wie chaos automatiseert, krijgt vooral snellere chaos.",
        en: "Automate chaos and you mostly get faster chaos.",
      },
    },
    {
      kicker: { nl: "Fix the leaks first.", en: "Fix the leaks first." },
      h: {
        nl: "Waarom je funnel lekt, en hoe je erachter komt waar",
        en: "Why your funnel leaks, and how to find out where",
      },
      body: {
        nl: "Als een funnel niet levert, is de reflex vaak: meer budget naar [[content-marketing-online-ads|advertenties]]. Begrijpelijk, maar meestal zit het probleem verderop. Dit zijn de lekken die we het vaakst tegenkomen:\n- Advertenties die naar je homepage leiden in plaats van naar een gerichte landingspagina\n- Een formulier dat naar je schoenmaat vraagt, terwijl een naam en e-mailadres genoeg zijn\n- Een lead magnet die vooral interessant is voor jezelf\n- Opvolging die pas dagen later komt, als de interesse al is afgekoeld\n- Marketing en sales die het niet eens zijn over wat een goede lead eigenlijk is\n- Tracking die half werkt, waardoor je toch weer op gevoel stuurt\n\nHet goede nieuws: lekken zijn te vinden. We meten elke stap van je funnel, kijken met heatmaps en sessie-opnames waar mensen twijfelen en testen verbeteringen met A/B-tests. Soms levert een kortere vraag of een snellere opvolgmail meer op dan extra mediabudget.\n\nPas als de funnel dicht is, wordt meer verkeer echt interessant, betaald of via [[seo-aeo-geo|organische vindbaarheid]]. Dan stroomt het niet meer weg, maar landt het op een plek waar iets mee gebeurt.",
        en: "When a funnel underperforms, the reflex is often: more budget for [[content-marketing-online-ads|ads]]. Understandable, but the problem usually sits further down. These are the leaks we come across most often:\n- Ads that lead to your homepage instead of a focused landing page\n- A form that asks for your shoe size, when a name and email address would do\n- A lead magnet that is mainly interesting to yourself\n- Follow-up that only arrives days later, when the interest has already cooled\n- Marketing and sales who disagree on what a good lead actually is\n- Tracking that half works, so you end up steering on gut feeling after all\n\nThe good news: leaks can be found. We measure every step of your funnel, use heatmaps and session recordings to see where people hesitate and test improvements with A/B tests. Sometimes a shorter question or a faster follow-up email delivers more than extra media budget.\n\nOnly once the funnel is sealed does more traffic become truly interesting, paid or through [[seo-aeo-geo|organic visibility]]. Then it no longer drains away, but lands somewhere it actually leads to something.",
      },
      quote: {
        nl: "Meer verkeer naar een lekke funnel sturen is dweilen met de kraan open, maar dan met advertentiebudget.",
        en: "Pouring more traffic into a leaky funnel is just a pricier way to fill a bucket with a hole in it.",
      },
    },
    {
      kicker: { nl: "No black box.", en: "No black box." },
      h: {
        nl: "Wat marketing automation van je vraagt, en wat je terugkrijgt",
        en: "What marketing automation asks of you, and what you get back",
      },
      body: {
        nl: "Marketing automation heet automatisch, maar dat betekent niet dat je er nooit meer naar hoeft te kijken. Zie het als een goed afgestelde machine: hij draait dag en nacht, maar af en toe wil je even onder de motorkap kijken.\n\nDit vraagt het van jou:\n- Content voor je flows: e-mails, een lead magnet en een paar goede cases. Daar denken we graag in mee, inclusief [[copywriting-blogs|copywriting]]\n- Eén eigenaar van het CRM, die bewaakt dat de data klopt en het team erin blijft werken\n- Een vast moment om het dashboard te bekijken en te bespreken wat je ziet\n- Flows bijwerken als je aanbod, prijzen of team verandert\n\nWat je terugkrijgt: leads die niet meer tussen wal en schip vallen, een salesteam dat minder hoeft over te typen en cijfers waarop je durft te sturen.\n\nEn het houdt niet op bij e-mail. Je funnel kan doorlopen in een [[klantportaal]] waar klanten zelf hun offerte accepteren, of in een [[ai-agents|AI-agent]] die leads kwalificeert en de eerste vragen beantwoordt. Omdat marketing, web, apps en AI bij ons aan één tafel zitten, bouwen we dat als één geheel. Jij vertelt waar je naartoe wilt, wij zorgen dat de systemen dezelfde kant op werken.",
        en: "Marketing automation is called automatic, but that does not mean you never have to look at it again. Think of it as a well-tuned machine: it runs day and night, but every now and then you want to look under the bonnet.\n\nThis is what it asks of you:\n- Content for your flows: emails, a lead magnet and a few good cases. We are happy to help with that, including [[copywriting-blogs|copywriting]]\n- One owner of the CRM, who makes sure the data is right and the team keeps using it\n- A fixed moment to look at the dashboard and discuss what you see\n- Updating flows when your offer, prices or team change\n\nWhat you get back: leads that no longer fall through the cracks, a sales team that has less retyping to do and numbers you dare to steer by.\n\nAnd it does not stop at email. Your funnel can continue in a [[klantportaal|customer portal]] where clients accept their quote themselves, or in an [[ai-agents|AI agent]] that qualifies leads and answers the first questions. Because marketing, web, apps and AI sit at one table with us, we build it as one whole. You tell us where you want to go, we make sure the systems all pull in the same direction.",
      },
    },
  ],
  seo: {
    title: {
      nl: "Marketing automation, funnels en CRM laten inrichten door een full-service bureau",
      en: "Marketing automation, funnels and CRM set up by a full-service agency",
    },
    sections: [
      {
        h: { nl: "Wat is marketing automation precies?", en: "What exactly is marketing automation?" },
        body: {
          nl: "Marketing automation betekent: automatisch de juiste boodschap naar de juiste persoon sturen, op het juiste moment, op basis van gedrag en gegevens. Denk aan een welkomstreeks na een inschrijving, een herinnering bij een verlaten winkelmand of een seintje aan sales zodra een lead klaar is voor een gesprek. Het systeem doet het herhalende werk. Jij houdt tijd over voor de gesprekken die ertoe doen.\n\nBij ons begint het nooit bij de tool, maar bij je klantreis. Welke vragen heeft je klant in elke fase? Welke informatie helpt hem verder? En wanneer is een telefoontje beter dan de zoveelste e-mail? Pas als dat helder is, bouwen we de flows, segmenten en triggers die daarbij horen. Want een welkomstmail die drie weken na de inschrijving binnenkomt, is als 'houdoe' zeggen tegen iemand die net binnenstapt. Goed ingerichte automatisering voelt niet als spam, maar als goede service.",
          en: "Marketing automation means automatically sending the right message to the right person at the right moment, based on behaviour and data. Think of a welcome series after a sign-up, a reminder for an abandoned cart or a nudge to sales as soon as a lead is ready for a conversation. The system does the repetitive work. You keep time for the conversations that matter.\n\nWith us it never starts with the tool, but with your customer journey. What questions does your customer have at each stage? What information helps them move forward? And when is a phone call better than yet another email? Only once that is clear do we build the flows, segments and triggers that go with it. Because a welcome email that arrives three weeks after sign-up is like saying goodbye to someone who has just walked in. Well-built automation does not feel like spam, it feels like good service.",
        },
      },
      {
        h: { nl: "Van funnel tot vaste klant", en: "From funnel to loyal customer" },
        body: {
          nl: "Een goede funnel neemt bezoekers stap voor stap mee van interesse naar actie. Zonder duwen, wel met richting. Een typische opzet die we bouwen:\n- Aandacht: campagnes op Google, Meta of LinkedIn die naar een gerichte landingspagina leiden\n- Interesse: een opt-in met een lead magnet die echt iets waard is, zoals een gids, checklist, quiz of calculator\n- Overweging: een nurturing-reeks met cases, uitleg en eerlijke antwoorden op bezwaren\n- Actie: een duidelijke call-to-action, zoals een afspraak via Calendly of een offerteaanvraag\n- Behoud: onboarding, cross-sell en reviewverzoeken na de aankoop\n\nElke stap meten we. Zo zie je precies waar bezoekers afhaken en waar de meeste winst zit. Je eerste versie hoeft niet perfect te zijn, hij moet vooral live staan. Daarna schaven we bij, tot je funnel een voorspelbare bron van nieuwe klanten is in plaats van een gok per maand.",
          en: "A good funnel takes visitors step by step from interest to action. No pushing, but with a clear direction. A typical setup we build:\n- Attention: campaigns on Google, Meta or LinkedIn that lead to a focused landing page\n- Interest: an opt-in with a lead magnet that is actually worth something, such as a guide, checklist, quiz or calculator\n- Consideration: a nurturing series with cases, explanations and honest answers to objections\n- Action: a clear call to action, such as a Calendly booking or a quote request\n- Retention: onboarding, cross-sell and review requests after purchase\n\nWe measure every step. That way you see exactly where visitors drop off and where the biggest gains are. Your first version does not need to be perfect, it mainly needs to be live. Then we refine it, until your funnel is a predictable source of new customers instead of a monthly gamble.",
        },
      },
      {
        h: { nl: "CRM en workflows die je team ontlasten", en: "CRM and workflows that lighten your team's load" },
        body: {
          nl: "Een CRM is pas waardevol als je team het echt gebruikt. Een duur systeem waar niemand in kijkt, is een adresboek met een abonnement. Daarom kiezen we samen het systeem dat past bij je verkoopproces, of dat nu HubSpot, Pipedrive, Teamleader, Odoo of een flexibele oplossing in Notion of Airtable is. Daarna richten we pipelines, velden, rechten en rapportages in en migreren we je bestaande data.\n\nMet Make, Zapier of n8n koppelen we je CRM aan de rest van je tools: formulieren, offertes, boekhouding, Slack en je webshop. Nieuwe leads komen automatisch op de juiste plek, taken worden vanzelf aangemaakt en niemand hoeft nog gegevens over te typen. Het resultaat: minder fouten, snellere opvolging en een helder overzicht van elke klant, van eerste contact tot herhaalaankoop. En een salesteam dat weer tijd heeft om te verkopen.",
          en: "A CRM is only valuable if your team actually uses it. An expensive system nobody looks at is an address book with a subscription. That is why we choose the system that fits your sales process together, whether that is HubSpot, Pipedrive, Teamleader, Odoo or a flexible solution in Notion or Airtable. Then we set up pipelines, fields, permissions and reports and migrate your existing data.\n\nWith Make, Zapier or n8n we connect your CRM to the rest of your tools: forms, quotes, accounting, Slack and your web shop. New leads land in the right place automatically, tasks are created by themselves and nobody has to retype data anymore. The result: fewer mistakes, faster follow-up and a clear overview of every customer, from first contact to repeat purchase. And a sales team that has time to sell again.",
        },
      },
      {
        h: { nl: "Tracking en data die je kunt vertrouwen", en: "Tracking and data you can trust" },
        body: {
          nl: "Zonder betrouwbare data is elke marketingbeslissing een gok met een mooi dashboard eromheen. Door adblockers, browserbeperkingen en privacywetgeving mis je al snel een deel van je metingen. Wij richten je tracking daarom toekomstbestendig in:\n- Google Analytics 4 met heldere conversies en events\n- Google Tag Manager, waar zinvol met server-side tagging\n- Consent Mode v2 en een cookiebanner die aansluit op de AVG\n- Enhanced Conversions en de Meta Conversions API voor betere campagnedata\n- Audience sync van je CRM naar Google, Meta en LinkedIn\n- Looker Studio-dashboards met de KPI's die er voor jou toe doen\n\nZo stuur je op feiten in plaats van onderbuikgevoel, en krijgen je advertentieplatformen betere signalen terug. Dat helpt je campagnes om beter te leren wie je ideale klant is. En jij weet eindelijk welke euro iets oplevert en welke vooral gezellig meedeed.",
          en: "Without reliable data every marketing decision is a gamble with a nice dashboard around it. Ad blockers, browser restrictions and privacy legislation quickly cost you part of your measurements. That is why we set up your tracking in a future-proof way:\n- Google Analytics 4 with clear conversions and events\n- Google Tag Manager, with server-side tagging where it makes sense\n- Consent Mode v2 and a cookie banner aligned with the GDPR\n- Enhanced Conversions and the Meta Conversions API for better campaign data\n- Audience sync from your CRM to Google, Meta and LinkedIn\n- Looker Studio dashboards with the KPIs that matter to you\n\nThat way you steer by facts instead of gut feeling, and your ad platforms get better signals back. That helps your campaigns learn who your ideal customer is. And you finally know which euro earns its keep and which one just came along for the ride.",
        },
      },
      {
        h: { nl: "Waarom M7 voor marketing en automatisering?", en: "Why M7 for marketing and automation?" },
        body: {
          nl: "M7 is een compact team van creatieve en technische specialisten. Marketeers, designers en developers werken samen aan je funnel. De landingspagina, de e-mailflow, de CRM-koppeling en de tracking komen dus uit één hand en sluiten op elkaar aan. Geen losse bureaus die naar elkaar wijzen zodra er een koppeling hapert, en geen e-mailflow die er anders uitziet dan je website.\n\nWe denken mee als partner, niet als leverancier van losse uurtjes. We starten klein waar dat kan, bouwen uit wat werkt en documenteren alles, zodat je team zelf verder kan. Geen black box en geen afhankelijkheid waar je niet om hebt gevraagd. Van een eerste welkomstflow voor een startup tot een complete marketing- en salesmachine voor een gevestigde organisatie. Vanuit de regio Eindhoven, voor klanten dichtbij en ver daarbuiten. Het liefst met een kop koffie erbij, al werkt een videocall ook prima.",
          en: "M7 is a compact team of creative and technical specialists. Marketers, designers and developers work on your funnel together. So the landing page, email flow, CRM integration and tracking come from one source and fit together. No separate agencies pointing at each other the moment an integration falters, and no email flow that looks different from your website.\n\nWe think along as a partner, not as a supplier of loose hours. We start small where possible, expand what works and document everything, so your team can carry on independently. No black box and no dependency you never asked for. From a first welcome flow for a startup to a complete marketing and sales machine for an established organisation. Based in the Eindhoven region, for clients nearby and far beyond. Ideally over a cup of coffee, though a video call works fine too.",
        },
      },
    ],
  },
  faqs: [
    {
      q: { nl: "Wat is marketing automation?", en: "What is marketing automation?" },
      a: {
        nl: "Marketing automation is software die marketingtaken automatisch uitvoert op basis van gedrag en gegevens van je contacten. Denk aan een welkomstreeks na een inschrijving, opvolging na een offerteaanvraag of een seintje aan sales als een lead actief wordt. Zo krijgt elke lead persoonlijke, tijdige opvolging zonder dat je team alles handmatig hoeft te doen.",
        en: "Marketing automation is software that performs marketing tasks automatically based on the behaviour and data of your contacts. Think of a welcome series after a sign-up, follow-up after a quote request or a nudge to sales when a lead becomes active. That way every lead gets personal, timely follow-up without your team doing everything by hand.",
      },
    },
    {
      q: { nl: "Wat kost marketing automation?", en: "How much does marketing automation cost?" },
      a: {
        nl: "Dat hangt af van de omvang. Een basisopzet met een ingerichte e-mailtool, een welkomstflow en een formulierkoppeling is er vanaf enkele honderden tot een paar duizend euro. Een complete inrichting met CRM, lead scoring, meerdere flows en tracking is uitgebreider. Daarnaast betaal je de licentiekosten van de tools zelf. Via onze configurator op letsgo.m7branding.com zie je direct indicatieve prijzen, of plan een kennismaking voor een voorstel op maat.",
        en: "It depends on the scope. A basic setup with a configured email tool, a welcome flow and a form integration ranges from a few hundred to a few thousand euros. A complete setup with CRM, lead scoring, multiple flows and tracking is more extensive. On top of that you pay the licence fees of the tools themselves. Our configurator at letsgo.m7branding.com shows indicative prices instantly, or book an intro call for a tailored proposal.",
      },
    },
    {
      q: { nl: "Welk CRM past bij mij?", en: "Which CRM is right for me?" },
      a: {
        nl: "Dat hangt af van je verkoopproces, teamgrootte en budget. HubSpot is sterk als je marketing en sales in één platform wilt. Pipedrive is overzichtelijk voor salesteams die vooral in deals en pipelines denken. Teamleader combineert CRM met projecten en facturatie en is populair in de Benelux. Odoo is ideaal als je ook voorraad, boekhouding of productie in één systeem wilt. Voor kleinere teams kan een flexibele opzet in Notion of Airtable al volstaan. We adviseren op basis van je proces, niet op basis van een tool.",
        en: "It depends on your sales process, team size and budget. HubSpot is strong if you want marketing and sales in one platform. Pipedrive is clear for sales teams that think mainly in deals and pipelines. Teamleader combines CRM with projects and invoicing and is popular in the Benelux. Odoo is ideal if you also want inventory, accounting or production in one system. For smaller teams a flexible setup in Notion or Airtable may already be enough. We advise based on your process, not on a tool.",
      },
    },
    {
      q: { nl: "Welke e-mailmarketingtool kan ik het beste kiezen?", en: "Which email marketing tool should I choose?" },
      a: {
        nl: "Mailchimp is laagdrempelig om mee te starten. Brevo is betaalbaar, Europees en combineert e-mail met sms en transactionele mails. ActiveCampaign blinkt uit in geavanceerde automatisering met een ingebouwd CRM. Klaviyo is de favoriet voor webshops, dankzij diepe koppelingen met Shopify en WooCommerce. We kijken naar je doelen, volumes en bestaande systemen en adviseren de tool die daar het best bij past.",
        en: "Mailchimp is easy to get started with. Brevo is affordable, European and combines email with SMS and transactional mail. ActiveCampaign excels at advanced automation with a built-in CRM. Klaviyo is the favourite for web shops, thanks to deep integrations with Shopify and WooCommerce. We look at your goals, volumes and existing systems and recommend the tool that fits best.",
      },
    },
    {
      q: { nl: "Wat is een salesfunnel en heb ik er een nodig?", en: "What is a sales funnel and do I need one?" },
      a: {
        nl: "Een salesfunnel is de route die een bezoeker aflegt van eerste kennismaking tot klant: bijvoorbeeld advertentie, landingspagina, opt-in, e-mailreeks en afspraak. Elk bedrijf heeft er eigenlijk al een, alleen vaak onbewust en met lekken. Door je funnel bewust in te richten en te meten, zie je waar je mensen verliest en kun je gericht verbeteren.",
        en: "A sales funnel is the route a visitor takes from first contact to customer: for example ad, landing page, opt-in, email series and appointment. Every business already has one, though often unconsciously and with leaks. By deliberately designing and measuring your funnel, you see where you lose people and can improve in a targeted way.",
      },
    },
    {
      q: { nl: "Wat is het verschil tussen Make, Zapier en n8n?", en: "What is the difference between Make, Zapier and n8n?" },
      a: {
        nl: "Alle drie koppelen ze apps aan elkaar zonder maatwerksoftware. Zapier is het eenvoudigst en heeft de meeste kant-en-klare integraties. Make biedt een visuele editor met veel controle over complexe scenario's, vaak tegen lagere kosten bij grotere volumes. n8n is open source en kan op je eigen server draaien, ideaal voor gevoelige data of als je alles binnen de EU wilt houden. We kiezen per project wat het best past.",
        en: "All three connect apps without custom software. Zapier is the simplest and has the most ready-made integrations. Make offers a visual editor with a lot of control over complex scenarios, often at lower cost for larger volumes. n8n is open source and can run on your own server, ideal for sensitive data or if you want to keep everything within the EU. We choose per project what fits best.",
      },
    },
    {
      q: { nl: "Hoe lang duurt het om marketing automation in te richten?", en: "How long does it take to set up marketing automation?" },
      a: {
        nl: "Een eerste flow, zoals een welkomstreeks of offerte-opvolging, staat vaak binnen 2 tot 4 weken live. Een complete inrichting met CRM, meerdere flows, lead scoring en tracking duurt meestal 6 tot 12 weken, afhankelijk van het aantal koppelingen, de hoeveelheid content en je bestaande data.",
        en: "A first flow, such as a welcome series or quote follow-up, is often live within 2 to 4 weeks. A complete setup with CRM, multiple flows, lead scoring and tracking usually takes 6 to 12 weeks, depending on the number of integrations, the amount of content and your existing data.",
      },
    },
    {
      q: { nl: "Is marketing automation AVG-proof?", en: "Is marketing automation GDPR-compliant?" },
      a: {
        nl: "Dat kan, mits het goed is ingericht. We werken met duidelijke toestemming en double opt-in, een eenvoudige afmeldmogelijkheid, alleen de data die je echt nodig hebt en tools met een verwerkersovereenkomst. Waar gewenst kiezen we voor Europese hosting, zoals Brevo of een self-hosted n8n-omgeving. Voor juridische vragen adviseren we om ook je eigen privacyjurist te betrekken.",
        en: "It can be, provided it is set up properly. We work with clear consent and double opt-in, an easy unsubscribe option, only the data you actually need and tools that offer a data processing agreement. Where desired we choose European hosting, such as Brevo or a self-hosted n8n environment. For legal questions we advise involving your own privacy lawyer as well.",
      },
    },
    {
      q: { nl: "Wat is server-side tagging en heb ik dat nodig?", en: "What is server-side tagging and do I need it?" },
      a: {
        nl: "Bij server-side tagging gaan meetgegevens eerst naar je eigen tagging-server en pas daarna, gefilterd, naar tools als GA4, Google Ads en Meta. Dat geeft je meer controle over welke data je deelt, kan zorgen voor completere metingen en ontlast je website. Het is vooral interessant als je flink in advertenties investeert of een webshop hebt. Toestemming van de bezoeker blijft daarbij uiteraard leidend.",
        en: "With server-side tagging, measurement data first goes to your own tagging server and only then, filtered, to tools like GA4, Google Ads and Meta. That gives you more control over which data you share, can lead to more complete measurements and lightens the load on your website. It is especially relevant if you invest significantly in ads or run a web shop. Visitor consent of course remains leading.",
      },
    },
    {
      q: { nl: "Kunnen jullie werken met mijn bestaande tools?", en: "Can you work with my existing tools?" },
      a: {
        nl: "Ja, en dat heeft vaak de voorkeur. We bekijken eerst wat je al gebruikt en wat goed werkt. Vaak halen we met betere inrichting en slimme koppelingen veel meer uit je huidige stack, voordat er een nieuwe tool nodig is. Via API's, webhooks, Make, Zapier of n8n koppelen we vrijwel elk systeem.",
        en: "Yes, and that is often preferred. We first look at what you already use and what works well. Often better configuration and smart integrations get much more out of your current stack before a new tool is needed. Through APIs, webhooks, Make, Zapier or n8n we can connect almost any system.",
      },
    },
    {
      q: { nl: "Hoe meet ik wat marketing automation oplevert?", en: "How do I measure what marketing automation delivers?" },
      a: {
        nl: "We leggen vooraf vast welke KPI's ertoe doen, zoals aantal leads, conversie per funnelstap, gegenereerde afspraken, omzet per flow en kosten per lead. Met GA4, je CRM en een Looker Studio-dashboard zie je die cijfers in één overzicht, zodat je weet welke campagnes en flows het meeste opleveren.",
        en: "We define upfront which KPIs matter, such as number of leads, conversion per funnel step, booked appointments, revenue per flow and cost per lead. With GA4, your CRM and a Looker Studio dashboard you see those figures in one overview, so you know which campaigns and flows deliver the most.",
      },
    },
    {
      q: { nl: "Kan ik mijn klantdata gebruiken voor betere advertenties?", en: "Can I use my customer data for better ads?" },
      a: {
        nl: "Ja, met audience sync. We synchroniseren segmenten uit je CRM of e-mailtool, met toestemming en gehasht, naar Google Ads, Meta en LinkedIn. Zo kun je bestaande klanten uitsluiten, warme leads opnieuw bereiken of lookalike-doelgroepen bouwen. In combinatie met conversie-API's krijgen je campagnes betere data om op te optimaliseren.",
        en: "Yes, with audience sync. We sync segments from your CRM or email tool, with consent and hashed, to Google Ads, Meta and LinkedIn. That lets you exclude existing customers, re-engage warm leads or build lookalike audiences. Combined with conversion APIs, your campaigns get better data to optimise on.",
      },
    },
  ],
  metaTitle: {
    nl: "Marketing automation, funnels & CRM laten inrichten | M7",
    en: "Marketing automation, funnels & CRM set up | M7",
  },
  metaDescription: {
    nl: "M7 bouwt marketing die doorloopt: funnels, e-mailflows, CRM implementatie, workflow-automatisering met Make of n8n en tracking die klopt.",
    en: "M7 builds marketing that keeps running: funnels, email flows, CRM implementation, workflow automation with Make or n8n and tracking you can trust.",
  },
  related: ["content-marketing-online-ads", "configurators-lead-tools-widgets", "ai-consultancy"],
  configurator: ["funnels", "tracking", "crm"],
};

export const applications: Application[] = [
  {
    slug: "marketing-automation",
    service: "marketing-automatisering-funnels",
    title: { nl: "Marketing automation", en: "Marketing automation" },
    summary: {
      nl: "Persoonlijke opvolging op basis van gedrag, volledig op de automatische piloot.",
      en: "Personal follow-up based on behaviour, fully on autopilot.",
    },
    intro: {
      nl: "Met marketing automation stuur je elke lead de juiste boodschap op het juiste moment, zonder dat je er elke dag naar om hoeft te kijken. We ontwerpen en bouwen flows op basis van gedrag, interesses en de fase waarin iemand zit.",
      en: "With marketing automation you send every lead the right message at the right moment, without having to look after it every day. We design and build flows based on behaviour, interests and the stage someone is in.",
    },
    body: [
      {
        h: { nl: "Slim reageren op gedrag", en: "Smart responses to behaviour" },
        body: {
          nl: "Een download, een bezoek aan je prijspagina, een geopende offerte of juist weken stilte: elk signaal kan een volgende stap in gang zetten. We bouwen flows die reageren op wat je klant doet, met vertakkingen voor verschillende doelgroepen, producten en interesses.",
          en: "A download, a visit to your pricing page, an opened quote or weeks of silence: every signal can trigger a next step. We build flows that respond to what your customer does, with branches for different audiences, products and interests.",
        },
      },
      {
        h: { nl: "Marketing en sales op één lijn", en: "Marketing and sales aligned" },
        body: {
          nl: "Automation werkt het best als marketing en sales dezelfde data zien. We koppelen je automationplatform aan je CRM, zodat sales precies weet welke lead warm is, welke content iemand al heeft bekeken en wanneer het tijd is om contact op te nemen.",
          en: "Automation works best when marketing and sales see the same data. We connect your automation platform to your CRM, so sales knows exactly which lead is warm, which content someone has already viewed and when it is time to get in touch.",
        },
      },
    ],
    deliverables: {
      nl: ["Klantreis en flowontwerp", "Inrichting van je automationplatform", "Segmenten, tags en triggers", "Gepersonaliseerde flows en templates", "Koppeling met CRM en website", "Rapportage en optimalisatie"],
      en: ["Customer journey and flow design", "Setup of your automation platform", "Segments, tags and triggers", "Personalised flows and templates", "Integration with CRM and website", "Reporting and optimisation"],
    },
    benefits: [
      { title: { nl: "Tijdwinst", en: "Time saved" }, text: { nl: "Herhalend werk loopt vanzelf door.", en: "Repetitive work runs by itself." } },
      { title: { nl: "Persoonlijk", en: "Personal" }, text: { nl: "Elke lead krijgt relevante opvolging.", en: "Every lead gets relevant follow-up." } },
      { title: { nl: "Schaalbaar", en: "Scalable" }, text: { nl: "Meer leads zonder extra handwerk.", en: "More leads without extra manual work." } },
    ],
    tools: ["hubspot", "activecampaign", "brevo", "klaviyo", "make"],
    related: ["e-mailmarketing", "lead-nurturing", "crm-implementatie", "ai-agents"],
    faqs: [
      {
        q: { nl: "Welk marketing automation platform raden jullie aan?", en: "Which marketing automation platform do you recommend?" },
        a: {
          nl: "Dat hangt af van je situatie. HubSpot is sterk als all-in-one voor marketing en sales, ActiveCampaign biedt krachtige automatisering tegen een scherpe prijs, Klaviyo is ideaal voor webshops en Brevo is een betaalbare Europese optie. We adviseren onafhankelijk op basis van je doelen en bestaande systemen.",
          en: "It depends on your situation. HubSpot is strong as an all-in-one for marketing and sales, ActiveCampaign offers powerful automation at a sharp price, Klaviyo is ideal for web shops and Brevo is an affordable European option. We advise independently based on your goals and existing systems.",
        },
      },
      {
        q: { nl: "Is marketing automation ook geschikt voor kleine bedrijven?", en: "Is marketing automation suitable for small businesses?" },
        a: {
          nl: "Zeker. Juist kleine teams winnen er veel tijd mee. We starten vaak met één of twee flows met directe impact, zoals een welkomstreeks of automatische offerte-opvolging, en bouwen uit wat werkt.",
          en: "Definitely. Small teams in particular save a lot of time with it. We often start with one or two high-impact flows, such as a welcome series or automatic quote follow-up, and expand what works.",
        },
      },
      {
        q: { nl: "Voelt automatisering niet onpersoonlijk?", en: "Does automation not feel impersonal?" },
        a: {
          nl: "Niet als het goed gebeurt. Met slimme segmentatie, een persoonlijke toon, een echte afzender en goede timing voelt een geautomatiseerde mail vaak persoonlijker dan een algemene nieuwsbrief.",
          en: "Not when done right. With smart segmentation, a personal tone, a real sender and good timing, an automated email often feels more personal than a generic newsletter.",
        },
      },
    ],
    metaDescription: {
      nl: "Marketing automation door M7: flows op basis van gedrag, slimme segmenten en een koppeling met je CRM, in HubSpot, ActiveCampaign, Klaviyo of Brevo.",
      en: "Marketing automation by M7: behaviour-based flows, smart segments and CRM integration, in HubSpot, ActiveCampaign, Klaviyo or Brevo.",
    },
  },
  {
    slug: "e-mailmarketing",
    service: "marketing-automatisering-funnels",
    title: { nl: "E-mailmarketing & e-mailflows", en: "Email marketing & email flows" },
    summary: {
      nl: "Nieuwsbrieven en flows die gelezen worden én omzet opleveren.",
      en: "Newsletters and flows that get read and drive revenue.",
    },
    intro: {
      nl: "E-mail blijft een van de krachtigste kanalen, omdat je je eigen publiek bereikt zonder algoritme ertussen. We zetten je e-mailmarketing op van strategie tot template, in Mailchimp, Brevo, ActiveCampaign of Klaviyo.",
      en: "Email remains one of the most powerful channels, because you reach your own audience without an algorithm in between. We set up your email marketing from strategy to template, in Mailchimp, Brevo, ActiveCampaign or Klaviyo.",
    },
    body: [
      {
        h: { nl: "Flows die altijd doorlopen", en: "Flows that always keep running" },
        body: {
          nl: "Welkomstreeks, verlaten winkelmand, na de aankoop, verjaardag, win-back of reviewverzoek: geautomatiseerde flows leveren dag en nacht waarde op. We bedenken, schrijven, ontwerpen en testen ze, zodat ze direct live kunnen.",
          en: "Welcome series, abandoned cart, post-purchase, birthday, win-back or review request: automated flows deliver value day and night. We plan, write, design and test them, so they can go live right away.",
        },
      },
      {
        h: { nl: "Ontwerp én deliverability", en: "Design and deliverability" },
        body: {
          nl: "Een mooie mail heeft alleen zin als hij in de inbox belandt. We richten SPF, DKIM en DMARC correct in, bouwen responsive templates in je huisstijl en houden je lijst schoon en AVG-proof met double opt-in en duidelijke voorkeuren.",
          en: "A beautiful email only makes sense if it lands in the inbox. We set up SPF, DKIM and DMARC correctly, build responsive templates in your brand style and keep your list clean and GDPR-compliant with double opt-in and clear preferences.",
        },
      },
    ],
    deliverables: {
      nl: ["E-mailstrategie en contentkalender", "Responsive templates in je huisstijl", "Geautomatiseerde flows", "Inschrijfformulieren en double opt-in", "SPF-, DKIM- en DMARC-inrichting", "Rapportage op opens, kliks en omzet"],
      en: ["Email strategy and content calendar", "Responsive templates in your brand style", "Automated flows", "Sign-up forms and double opt-in", "SPF, DKIM and DMARC setup", "Reporting on opens, clicks and revenue"],
    },
    benefits: [
      { title: { nl: "Eigen kanaal", en: "Owned channel" }, text: { nl: "Je bereikt je publiek zonder algoritme.", en: "You reach your audience without an algorithm." } },
      { title: { nl: "Altijd aan", en: "Always on" }, text: { nl: "Flows werken 24/7 voor je.", en: "Flows work for you 24/7." } },
      { title: { nl: "Meetbaar", en: "Measurable" }, text: { nl: "Je ziet precies wat elke mail oplevert.", en: "You see exactly what every email delivers." } },
    ],
    tools: ["mailchimp", "brevo", "activecampaign", "klaviyo", "figma"],
    related: ["marketing-automation", "lead-nurturing", "copywriting-blogs", "webshop"],
    faqs: [
      {
        q: { nl: "Hoe voorkom ik dat mijn e-mails in de spam belanden?", en: "How do I keep my emails out of the spam folder?" },
        a: {
          nl: "Met een correcte technische inrichting (SPF, DKIM en DMARC), een schone lijst met alleen mensen die toestemming gaven, relevante content en een gezonde verzendfrequentie. We monitoren je afleverbaarheid en sturen bij waar nodig.",
          en: "With a correct technical setup (SPF, DKIM and DMARC), a clean list of only people who gave consent, relevant content and a healthy sending frequency. We monitor your deliverability and adjust where needed.",
        },
      },
      {
        q: { nl: "Mag ik iedereen een nieuwsbrief sturen?", en: "Can I send a newsletter to anyone?" },
        a: {
          nl: "Nee. Voor commerciële e-mail heb je in principe toestemming nodig. Bestaande klanten mag je onder voorwaarden mailen over vergelijkbare eigen producten, mits ze zich eenvoudig kunnen afmelden. We richten je formulieren en lijsten zo in dat je dit goed geregeld hebt; bij twijfel adviseren we juridisch advies.",
          en: "No. For commercial email you generally need consent. Existing customers may, under conditions, be emailed about similar products of your own, provided they can easily unsubscribe. We set up your forms and lists so this is properly arranged; when in doubt we recommend legal advice.",
        },
      },
      {
        q: { nl: "Schrijven en ontwerpen jullie ook de e-mails?", en: "Do you also write and design the emails?" },
        a: {
          nl: "Ja. Onze copywriters en designers maken mails in je tone of voice en huisstijl, en leveren herbruikbare templates zodat je team zelf nieuwsbrieven kan samenstellen.",
          en: "Yes. Our copywriters and designers create emails in your tone of voice and brand style, and deliver reusable templates so your team can put together newsletters themselves.",
        },
      },
    ],
    metaDescription: {
      nl: "E-mailmarketing door M7: strategie, templates en geautomatiseerde flows in Mailchimp, Brevo, ActiveCampaign of Klaviyo, met goede deliverability.",
      en: "Email marketing by M7: strategy, templates and automated flows in Mailchimp, Brevo, ActiveCampaign or Klaviyo, with solid deliverability.",
    },
  },
  {
    slug: "salesfunnels",
    service: "marketing-automatisering-funnels",
    title: { nl: "Salesfunnels & opt-ins", en: "Sales funnels & opt-ins" },
    summary: {
      nl: "Van advertentie tot afspraak: funnels die bezoekers stap voor stap overtuigen.",
      en: "From ad to appointment: funnels that convince visitors step by step.",
    },
    intro: {
      nl: "Een salesfunnel leidt je bezoeker in logische stappen naar actie. We bouwen landingspagina's, opt-ins en lead magnets die converteren, gekoppeld aan je e-mailtool, CRM en advertentiecampagnes.",
      en: "A sales funnel leads your visitor to action in logical steps. We build landing pages, opt-ins and lead magnets that convert, connected to your email tool, CRM and ad campaigns.",
    },
    body: [
      {
        h: { nl: "Lead magnets die werken", en: "Lead magnets that work" },
        body: {
          nl: "Een gids, checklist, webinar, quiz of prijscalculator: we bedenken een aanbod dat waardevol genoeg is om er een e-mailadres voor achter te laten, en ontwerpen het in je huisstijl. Na de opt-in neemt een opvolgflow het direct over.",
          en: "A guide, checklist, webinar, quiz or price calculator: we come up with an offer valuable enough to leave an email address for, and design it in your brand style. After the opt-in, a follow-up flow takes over immediately.",
        },
      },
      {
        h: { nl: "Gebouwd om te testen", en: "Built to test" },
        body: {
          nl: "We bouwen funnels in Webflow of WordPress met een flexibel componentensysteem, zodat varianten snel te maken en te testen zijn. Elke stap is meetbaar, van klik op de advertentie tot geboekte afspraak.",
          en: "We build funnels in Webflow or WordPress with a flexible component system, so variants are quick to create and test. Every step is measurable, from ad click to booked appointment.",
        },
      },
    ],
    deliverables: {
      nl: ["Funnelstrategie en klantreis", "Landingspagina's en opt-in pagina's", "Lead magnet (gids, checklist of quiz)", "Bedankpagina's en opvolgflow", "Koppeling met CRM en e-mailtool", "Conversietracking per stap"],
      en: ["Funnel strategy and customer journey", "Landing pages and opt-in pages", "Lead magnet (guide, checklist or quiz)", "Thank-you pages and follow-up flow", "Integration with CRM and email tool", "Conversion tracking per step"],
    },
    benefits: [
      { title: { nl: "Gericht", en: "Focused" }, text: { nl: "Eén doel per pagina, zonder afleiding.", en: "One goal per page, without distraction." } },
      { title: { nl: "Meetbaar", en: "Measurable" }, text: { nl: "Je ziet per stap waar winst zit.", en: "You see per step where the gains are." } },
      { title: { nl: "Herbruikbaar", en: "Reusable" }, text: { nl: "Eén funnel, inzetbaar voor elke campagne.", en: "One funnel, usable for every campaign." } },
    ],
    tools: ["webflow", "wordpress", "typeform", "calendly", "activecampaign", "ga4"],
    related: ["landingspaginas", "keuzehulp-quiz", "google-ads", "conversie-optimalisatie"],
    faqs: [
      {
        q: { nl: "Wat is het verschil tussen een landingspagina en een funnel?", en: "What is the difference between a landing page and a funnel?" },
        a: {
          nl: "Een landingspagina is één pagina met één doel. Een funnel is het hele traject eromheen: de advertentie die ernaartoe leidt, de opt-in, de bedankpagina en de opvolging per e-mail of door sales.",
          en: "A landing page is one page with one goal. A funnel is the entire journey around it: the ad that leads to it, the opt-in, the thank-you page and the follow-up via email or sales.",
        },
      },
      {
        q: { nl: "Welke lead magnet past bij mijn bedrijf?", en: "Which lead magnet suits my business?" },
        a: {
          nl: "Dat hangt af van je doelgroep en wat ze nodig hebben om een volgende stap te zetten. B2B-bedrijven scoren vaak met gidsen, checklists en calculators; consumentenmerken met quizzen, kortingen of keuzehulpen. We bedenken samen een aanbod dat echt waarde heeft.",
          en: "It depends on your audience and what they need to take the next step. B2B companies often do well with guides, checklists and calculators; consumer brands with quizzes, discounts or product finders. Together we come up with an offer that has real value.",
        },
      },
      {
        q: { nl: "Werkt een funnel ook voor B2B?", en: "Does a funnel work for B2B too?" },
        a: {
          nl: "Zeker. In B2B zijn verkooptrajecten vaak langer, dus nurturing en goede overdracht aan sales zijn extra belangrijk. Denk aan LinkedIn Ads, een waardevolle whitepaper, een nurturing-reeks en een afspraak via je agenda.",
          en: "Definitely. In B2B, sales cycles are often longer, so nurturing and a good handover to sales matter even more. Think of LinkedIn Ads, a valuable white paper, a nurturing series and a booking via your calendar.",
        },
      },
    ],
    metaDescription: {
      nl: "Salesfunnels laten bouwen door M7: landingspagina's, opt-ins en lead magnets gekoppeld aan je CRM, e-mailtool en campagnes. Meetbaar per stap.",
      en: "Sales funnels by M7: landing pages, opt-ins and lead magnets connected to your CRM, email tool and campaigns. Measurable at every step.",
    },
  },
  {
    slug: "crm-implementatie",
    service: "marketing-automatisering-funnels",
    title: { nl: "CRM implementatie", en: "CRM implementation" },
    summary: {
      nl: "Het juiste CRM, goed ingericht en gekoppeld aan al je tools.",
      en: "The right CRM, properly set up and connected to all your tools.",
    },
    intro: {
      nl: "Een CRM is het kloppend hart van je marketing en sales. We helpen je kiezen tussen onder meer HubSpot, Pipedrive, Teamleader en Odoo, richten het in op jouw proces en zorgen dat je team er vanaf dag één mee werkt.",
      en: "A CRM is the beating heart of your marketing and sales. We help you choose between HubSpot, Pipedrive, Teamleader, Odoo and more, set it up around your process and make sure your team works with it from day one.",
    },
    body: [
      {
        h: { nl: "Advies dat past bij je proces", en: "Advice that fits your process" },
        body: {
          nl: "Elk CRM heeft z'n sterke punten. HubSpot blinkt uit in marketing en sales samen, Pipedrive in overzichtelijke pipelines, Teamleader in CRM met projecten en facturatie en Odoo als volledig ERP. Voor kleinere teams kan een slimme opzet in Notion of Airtable volstaan. We adviseren op basis van je proces, budget en groeiplannen.",
          en: "Every CRM has its strengths. HubSpot excels at marketing and sales combined, Pipedrive at clear pipelines, Teamleader at CRM with projects and invoicing and Odoo as a full ERP. For smaller teams a smart setup in Notion or Airtable can be enough. We advise based on your process, budget and growth plans.",
        },
      },
      {
        h: { nl: "Inrichting, migratie en adoptie", en: "Setup, migration and adoption" },
        body: {
          nl: "We richten pipelines, velden, automatiseringen en dashboards in, migreren je bestaande klantdata en koppelen je CRM aan website, e-mail en boekhouding. Met een praktische training en heldere documentatie zorgen we dat je team het systeem ook echt gebruikt.",
          en: "We set up pipelines, fields, automations and dashboards, migrate your existing customer data and connect your CRM to your website, email and accounting. With practical training and clear documentation we make sure your team actually uses the system.",
        },
      },
    ],
    deliverables: {
      nl: ["CRM-selectie en advies", "Inrichting van pipelines en velden", "Datamigratie en opschoning", "Koppelingen met website, e-mail en boekhouding", "Dashboards en rapportages", "Training en documentatie"],
      en: ["CRM selection and advice", "Setup of pipelines and fields", "Data migration and clean-up", "Integrations with website, email and accounting", "Dashboards and reports", "Training and documentation"],
    },
    benefits: [
      { title: { nl: "Overzicht", en: "Overview" }, text: { nl: "Alle klantinformatie op één plek.", en: "All customer information in one place." } },
      { title: { nl: "Opvolging", en: "Follow-up" }, text: { nl: "Geen lead of deal meer uit beeld.", en: "No lead or deal slips out of sight." } },
      { title: { nl: "Inzicht", en: "Insight" }, text: { nl: "Rapportages op pipeline en omzet.", en: "Reports on pipeline and revenue." } },
    ],
    tools: ["hubspot", "pipedrive", "teamleader", "odoo", "notion", "airtable"],
    related: ["workflow-automatisering", "api-koppelingen", "marketing-automation", "dashboards"],
    faqs: [
      {
        q: { nl: "Wat kost een CRM implementatie?", en: "How much does a CRM implementation cost?" },
        a: {
          nl: "Een basisinrichting van een CRM met pipelines, velden en een formulierkoppeling is er vanaf enkele honderden tot een paar duizend euro. Met datamigratie, meerdere koppelingen, automatiseringen en training wordt het uitgebreider. De licentiekosten van het CRM komen daar los bij. In de configurator op letsgo.m7branding.com zie je direct een indicatie.",
          en: "A basic CRM setup with pipelines, fields and a form integration ranges from a few hundred to a few thousand euros. With data migration, multiple integrations, automations and training it becomes more extensive. CRM licence fees come on top. The configurator at letsgo.m7branding.com shows an indication right away.",
        },
      },
      {
        q: { nl: "Kunnen jullie mijn data uit Excel of een ander CRM overzetten?", en: "Can you migrate my data from Excel or another CRM?" },
        a: {
          nl: "Ja. We schonen je data op, ontdubbelen contacten, mappen velden naar de nieuwe structuur en migreren alles zorgvuldig, inclusief notities en dealhistorie waar mogelijk.",
          en: "Yes. We clean your data, deduplicate contacts, map fields to the new structure and migrate everything carefully, including notes and deal history where possible.",
        },
      },
      {
        q: { nl: "Is HubSpot gratis?", en: "Is HubSpot free?" },
        a: {
          nl: "HubSpot heeft een gratis CRM met basisfuncties voor contacten, deals en formulieren. Voor uitgebreide automatisering, rapportages en sales-tools heb je een betaald abonnement nodig. We helpen je bepalen welke versie je echt nodig hebt.",
          en: "HubSpot has a free CRM with basic features for contacts, deals and forms. For advanced automation, reporting and sales tools you need a paid plan. We help you determine which version you actually need.",
        },
      },
    ],
    metaDescription: {
      nl: "CRM implementatie door M7: advies, inrichting, datamigratie en koppelingen voor HubSpot, Pipedrive, Teamleader, Odoo, Notion of Airtable.",
      en: "CRM implementation by M7: advice, setup, data migration and integrations for HubSpot, Pipedrive, Teamleader, Odoo, Notion or Airtable.",
    },
  },
  {
    slug: "workflow-automatisering",
    service: "marketing-automatisering-funnels",
    title: { nl: "Workflow-automatisering", en: "Workflow automation" },
    summary: {
      nl: "Make, Zapier of n8n: je tools werken samen, jij hoeft niets meer over te typen.",
      en: "Make, Zapier or n8n: your tools work together, nobody has to retype anything.",
    },
    intro: {
      nl: "Hoeveel tijd gaat er elke week op aan gegevens overtypen, bestanden verplaatsen en mailtjes doorsturen? Met workflow-automatisering in Make, Zapier of n8n laten we je tools samenwerken, zodat je team zich kan richten op werk dat er echt toe doet.",
      en: "How much time goes into retyping data, moving files and forwarding emails every week? With workflow automation in Make, Zapier or n8n we make your tools work together, so your team can focus on work that really matters.",
    },
    body: [
      {
        h: { nl: "Van formulier tot factuur", en: "From form to invoice" },
        body: {
          nl: "Een aanvraag op je website wordt automatisch een lead in je CRM, een taak voor sales, een bericht in Slack en een concept-offerte in je boekhoudpakket. We brengen je processen in kaart en automatiseren eerst de stappen die het meeste tijd kosten.",
          en: "A request on your website automatically becomes a lead in your CRM, a task for sales, a message in Slack and a draft quote in your accounting software. We map your processes and automate the most time-consuming steps first.",
        },
      },
      {
        h: { nl: "Betrouwbaar en beheersbaar", en: "Reliable and manageable" },
        body: {
          nl: "We bouwen scenario's met foutafhandeling, logging en meldingen, zodat je weet dat alles blijft draaien. Voor gevoelige data of hoge volumes zetten we n8n self-hosted in, met je data binnen de EU. Waar het waarde toevoegt, voegen we AI-stappen toe voor classificeren, samenvatten of verrijken.",
          en: "We build scenarios with error handling, logging and alerts, so you know everything keeps running. For sensitive data or high volumes we deploy self-hosted n8n, with your data within the EU. Where it adds value, we add AI steps for classifying, summarising or enriching.",
        },
      },
    ],
    deliverables: {
      nl: ["Procesanalyse en automatiseringskansen", "Scenario's in Make, Zapier of n8n", "API- en webhookkoppelingen", "Foutafhandeling en monitoring", "AI-stappen waar zinvol", "Documentatie en overdracht"],
      en: ["Process analysis and automation opportunities", "Scenarios in Make, Zapier or n8n", "API and webhook integrations", "Error handling and monitoring", "AI steps where useful", "Documentation and handover"],
    },
    benefits: [
      { title: { nl: "Minder handwerk", en: "Less manual work" }, text: { nl: "Meer tijd voor je eigenlijke vak.", en: "More time for your actual work." } },
      { title: { nl: "Minder fouten", en: "Fewer mistakes" }, text: { nl: "Geen overtypfouten of vergeten stappen.", en: "No typos or forgotten steps." } },
      { title: { nl: "Schaalbaar", en: "Scalable" }, text: { nl: "Groeien zonder extra administratie.", en: "Grow without extra admin." } },
    ],
    tools: ["make", "zapier", "n8n", "airtable", "slack", "googlesheets"],
    related: ["crm-implementatie", "api-koppelingen", "ai-agents", "ai-integraties"],
    faqs: [
      {
        q: { nl: "Welke processen kun je automatiseren?", en: "Which processes can be automated?" },
        a: {
          nl: "Vrijwel elk terugkerend proces met vaste stappen: leadverwerking, offertes, onboarding van klanten, facturatie, rapportages, social posts, voorraadmeldingen en interne notificaties. We beginnen met de processen die het vaakst voorkomen en de meeste tijd kosten.",
          en: "Almost any recurring process with fixed steps: lead handling, quotes, customer onboarding, invoicing, reporting, social posts, stock alerts and internal notifications. We start with the processes that occur most often and take the most time.",
        },
      },
      {
        q: { nl: "Wat kost workflow-automatisering?", en: "How much does workflow automation cost?" },
        a: {
          nl: "Een eenvoudige koppeling tussen twee tools is er vanaf enkele honderden euro's. Complexere scenario's met meerdere systemen, logica en foutafhandeling kosten meer. Daarnaast betaal je een abonnement voor Make of Zapier, of hostingkosten voor n8n.",
          en: "A simple integration between two tools starts at a few hundred euros. More complex scenarios with multiple systems, logic and error handling cost more. On top of that you pay a subscription for Make or Zapier, or hosting costs for n8n.",
        },
      },
      {
        q: { nl: "Wat gebeurt er als een automatisering faalt?", en: "What happens if an automation fails?" },
        a: {
          nl: "We bouwen foutafhandeling en meldingen in, zodat een mislukte stap niet ongemerkt blijft. Bij een beheerafspraak monitoren wij de scenario's en lossen we problemen op voordat ze impact hebben.",
          en: "We build in error handling and alerts, so a failed step never goes unnoticed. With a maintenance agreement we monitor the scenarios and solve issues before they have an impact.",
        },
      },
    ],
    metaDescription: {
      nl: "Workflow-automatisering door M7: koppel je tools met Make, Zapier of n8n en bespaar tijd op handwerk. Betrouwbaar, gedocumenteerd en schaalbaar.",
      en: "Workflow automation by M7: connect your tools with Make, Zapier or n8n and save time on manual work. Reliable, documented and scalable.",
    },
  },
  {
    slug: "lead-nurturing",
    service: "marketing-automatisering-funnels",
    title: { nl: "Lead scoring & nurturing", en: "Lead scoring & nurturing" },
    summary: {
      nl: "Leads warm maken en sales pas inschakelen als iemand er klaar voor is.",
      en: "Warm up leads and bring in sales only when someone is ready.",
    },
    intro: {
      nl: "Niet elke lead is meteen klaar om te kopen. Met lead nurturing bouw je stap voor stap vertrouwen op, en met lead scoring weet sales precies wanneer het tijd is om de telefoon te pakken.",
      en: "Not every lead is ready to buy right away. With lead nurturing you build trust step by step, and with lead scoring sales knows exactly when it is time to pick up the phone.",
    },
    body: [
      {
        h: { nl: "Punten voor profiel en gedrag", en: "Points for profile and behaviour" },
        body: {
          nl: "We kennen punten toe op basis van wie iemand is (functie, branche, bedrijfsgrootte) en wat iemand doet (pagina's bekijken, mails openen, een demo aanvragen). Bij een drempelwaarde krijgt sales automatisch een seintje, met alle context erbij.",
          en: "We assign points based on who someone is (role, industry, company size) and what someone does (viewing pages, opening emails, requesting a demo). At a threshold, sales automatically gets a notification, with all the context included.",
        },
      },
      {
        h: { nl: "Content voor elke fase", en: "Content for every stage" },
        body: {
          nl: "Een nurturing-reeks werkt alleen met relevante content. We bepalen per fase welke cases, uitleg, video's en antwoorden op bezwaren je lead verder helpen, en schrijven en ontwerpen de mails die daarbij horen.",
          en: "A nurturing series only works with relevant content. We determine per stage which cases, explanations, videos and answers to objections help your lead move forward, and write and design the emails that go with it.",
        },
      },
    ],
    deliverables: {
      nl: ["Lead scoring-model", "Definities van MQL en SQL", "Nurturing-reeksen per segment", "Content per funnelfase", "Automatische sales-notificaties", "Rapportage op leadkwaliteit"],
      en: ["Lead scoring model", "MQL and SQL definitions", "Nurturing series per segment", "Content per funnel stage", "Automatic sales notifications", "Reporting on lead quality"],
    },
    benefits: [
      { title: { nl: "Focus", en: "Focus" }, text: { nl: "Sales besteedt tijd aan de warmste leads.", en: "Sales spends time on the warmest leads." } },
      { title: { nl: "Vertrouwen", en: "Trust" }, text: { nl: "Leads leren je kennen in hun eigen tempo.", en: "Leads get to know you at their own pace." } },
      { title: { nl: "Geen verlies", en: "Nothing lost" }, text: { nl: "Geen lead verdwijnt onopgemerkt.", en: "No lead disappears unnoticed." } },
    ],
    tools: ["hubspot", "activecampaign", "pipedrive", "brevo"],
    related: ["marketing-automation", "crm-implementatie", "e-mailmarketing", "linkedin-ads"],
    faqs: [
      {
        q: { nl: "Wat is het verschil tussen een MQL en een SQL?", en: "What is the difference between an MQL and an SQL?" },
        a: {
          nl: "Een MQL (Marketing Qualified Lead) toont interesse en past bij je doelgroep, maar is nog niet klaar voor een verkoopgesprek. Een SQL (Sales Qualified Lead) is door sales beoordeeld en klaar voor een concreet voorstel. We leggen samen met je team vast wanneer een lead van de ene naar de andere fase gaat.",
          en: "An MQL (Marketing Qualified Lead) shows interest and fits your audience, but is not yet ready for a sales conversation. An SQL (Sales Qualified Lead) has been assessed by sales and is ready for a concrete proposal. Together with your team we define when a lead moves from one stage to the next.",
        },
      },
      {
        q: { nl: "Hoe lang duurt een nurturing-traject?", en: "How long does a nurturing journey take?" },
        a: {
          nl: "Dat hangt af van je verkoopcyclus. Bij een eenvoudig product kan het een paar dagen zijn, in B2B soms enkele maanden. We stemmen het ritme en de inhoud af op hoe jouw klanten beslissen.",
          en: "It depends on your sales cycle. For a simple product it can be a few days, in B2B sometimes several months. We match the rhythm and content to how your customers make decisions.",
        },
      },
      {
        q: { nl: "Heb ik veel content nodig voor lead nurturing?", en: "Do I need a lot of content for lead nurturing?" },
        a: {
          nl: "Minder dan je denkt. Vaak heb je al waardevolle content in de vorm van cases, blogs, presentaties of veelgestelde vragen. We hergebruiken wat er is en vullen gericht aan waar gaten zitten.",
          en: "Less than you think. Often you already have valuable content in the form of cases, blogs, presentations or FAQs. We reuse what exists and fill gaps in a targeted way.",
        },
      },
    ],
    metaDescription: {
      nl: "Lead scoring en lead nurturing door M7: warme leads herkennen, relevante opvolging per fase en automatische seintjes aan sales.",
      en: "Lead scoring and lead nurturing by M7: recognise warm leads, relevant follow-up per stage and automatic notifications to sales.",
    },
  },
  {
    slug: "tracking-analytics",
    service: "marketing-automatisering-funnels",
    title: { nl: "Tracking & analytics", en: "Tracking & analytics" },
    summary: {
      nl: "GA4, Tag Manager, server-side tagging en dashboards die kloppen.",
      en: "GA4, Tag Manager, server-side tagging and dashboards that add up.",
    },
    intro: {
      nl: "Weet jij welke campagne je klanten oplevert? We richten GA4, Google Tag Manager en Consent Mode v2 waterdicht in, zetten waar zinvol server-side tagging op en bouwen Looker Studio-dashboards waarop je in één oogopslag ziet hoe je marketing presteert.",
      en: "Do you know which campaign brings in your customers? We set up GA4, Google Tag Manager and Consent Mode v2 watertight, add server-side tagging where it makes sense and build Looker Studio dashboards that show at a glance how your marketing performs.",
    },
    body: [
      {
        h: { nl: "Meten wat ertoe doet", en: "Measure what matters" },
        body: {
          nl: "We beginnen met een meetplan: welke doelen en conversies zijn belangrijk voor jouw bedrijf? Daarna richten we events, conversies en e-commerce tracking in en koppelen we GA4 aan Google Ads, Search Console en je CRM, zodat je de hele route van klik tot klant ziet.",
          en: "We start with a measurement plan: which goals and conversions matter to your business? Then we set up events, conversions and e-commerce tracking and connect GA4 to Google Ads, Search Console and your CRM, so you see the full route from click to customer.",
        },
      },
      {
        h: { nl: "Privacybewust én compleet", en: "Privacy-conscious and complete" },
        body: {
          nl: "Met Consent Mode v2, een correct ingestelde cookiebanner en server-side tagging houd je je metingen zo compleet mogelijk, met respect voor privacy. Via Enhanced Conversions, de Meta Conversions API en audience sync krijgen je advertentieplatformen betere data terug om op te optimaliseren.",
          en: "With Consent Mode v2, a correctly configured cookie banner and server-side tagging you keep your measurements as complete as possible, while respecting privacy. Through Enhanced Conversions, the Meta Conversions API and audience sync your ad platforms receive better data to optimise on.",
        },
      },
    ],
    deliverables: {
      nl: ["Meetplan en KPI-definitie", "GA4- en Tag Manager-inrichting", "Consent Mode v2 en cookiebanner", "Server-side tagging", "Conversie-API's en audience sync", "Looker Studio-dashboard"],
      en: ["Measurement plan and KPI definition", "GA4 and Tag Manager setup", "Consent Mode v2 and cookie banner", "Server-side tagging", "Conversion APIs and audience sync", "Looker Studio dashboard"],
    },
    benefits: [
      { title: { nl: "Betrouwbaar", en: "Reliable" }, text: { nl: "Data waarop je kunt bouwen.", en: "Data you can build on." } },
      { title: { nl: "Privacybewust", en: "Privacy-conscious" }, text: { nl: "Meten met respect voor je bezoeker.", en: "Measuring with respect for your visitor." } },
      { title: { nl: "Inzicht", en: "Insight" }, text: { nl: "Eén dashboard voor al je kanalen.", en: "One dashboard for all your channels." } },
    ],
    tools: ["ga4", "gtm", "lookerstudio", "cookiebot", "googlecloud", "meta"],
    related: ["dashboards", "google-ads", "meta-ads", "conversie-optimalisatie"],
    faqs: [
      {
        q: { nl: "Wat is Consent Mode v2?", en: "What is Consent Mode v2?" },
        a: {
          nl: "Consent Mode v2 is een manier om de cookiekeuze van je bezoeker door te geven aan Google-tags. Google vraagt het sinds maart 2024 van adverteerders die in de EER meten en adverteren, om functies als remarketing en conversiemeting te blijven gebruiken. We koppelen het aan je cookiebanner en controleren of alles correct doorkomt.",
          en: "Consent Mode v2 is a way to pass your visitor's cookie choice on to Google tags. Since March 2024 Google has required it from advertisers measuring and advertising in the EEA, in order to keep using features such as remarketing and conversion measurement. We connect it to your cookie banner and check that everything comes through correctly.",
        },
      },
      {
        q: { nl: "Kunnen jullie mijn huidige GA4-inrichting controleren?", en: "Can you review my current GA4 setup?" },
        a: {
          nl: "Ja. Met een tracking-audit controleren we je GA4, Tag Manager, conversies, consent-instellingen en koppelingen. Je krijgt een overzicht van wat goed gaat, wat ontbreekt en wat er beter kan.",
          en: "Yes. With a tracking audit we review your GA4, Tag Manager, conversions, consent settings and integrations. You get an overview of what works, what is missing and what can be improved.",
        },
      },
      {
        q: { nl: "Wat zie ik in een Looker Studio-dashboard?", en: "What do I see in a Looker Studio dashboard?" },
        a: {
          nl: "Precies de cijfers die voor jou belangrijk zijn, uit GA4, Google Ads, Search Console, Meta en je CRM, in één overzicht. Denk aan verkeer, leads, conversies, kosten per lead en omzet per kanaal, automatisch bijgewerkt.",
          en: "Exactly the figures that matter to you, from GA4, Google Ads, Search Console, Meta and your CRM, in one overview. Think of traffic, leads, conversions, cost per lead and revenue per channel, updated automatically.",
        },
      },
    ],
    metaDescription: {
      nl: "Tracking en analytics door M7: GA4, Google Tag Manager, server-side tagging, Consent Mode v2 en Looker Studio-dashboards waarop je kunt sturen.",
      en: "Tracking and analytics by M7: GA4, Google Tag Manager, server-side tagging, Consent Mode v2 and Looker Studio dashboards you can steer by.",
    },
  },
  {
    slug: "conversie-optimalisatie",
    service: "marketing-automatisering-funnels",
    title: { nl: "Conversie-optimalisatie (CRO)", en: "Conversion rate optimisation (CRO)" },
    summary: {
      nl: "Meer resultaat uit hetzelfde verkeer, met data en A/B-tests.",
      en: "More results from the same traffic, with data and A/B tests.",
    },
    intro: {
      nl: "Meer bezoekers is mooi, maar meer klanten uit je huidige bezoekers is vaak sneller en goedkoper. Met conversie-optimalisatie vinden we de drempels in je website en funnels en testen we verbeteringen op basis van data.",
      en: "More visitors is nice, but more customers from your current visitors is often faster and cheaper. With conversion rate optimisation we find the friction in your website and funnels and test improvements based on data.",
    },
    body: [
      {
        h: { nl: "Onderzoek vóór aannames", en: "Research before assumptions" },
        body: {
          nl: "We combineren GA4-data, heatmaps en sessie-opnames uit Hotjar, formulieranalyse en gebruikersfeedback. Zo zien we waar bezoekers twijfelen, afhaken of iets niet vinden, en welke verbeteringen de meeste impact kunnen hebben.",
          en: "We combine GA4 data, heatmaps and session recordings from Hotjar, form analysis and user feedback. That shows us where visitors hesitate, drop off or cannot find something, and which improvements can have the most impact.",
        },
      },
      {
        h: { nl: "Testen, leren, verbeteren", en: "Test, learn, improve" },
        body: {
          nl: "Elke hypothese testen we waar mogelijk met een A/B-test: koppen, call-to-actions, formulieren, prijspresentatie of complete pagina's. Omdat we zelf ontwerpen en bouwen, gaat het van inzicht naar live variant zonder wachttijd bij een ander bureau.",
          en: "We test every hypothesis with an A/B test where possible: headlines, calls to action, forms, pricing presentation or complete pages. Because we design and build ourselves, it goes from insight to live variant without waiting on another agency.",
        },
      },
    ],
    deliverables: {
      nl: ["CRO-audit en analyse", "Heatmaps en sessie-opnames", "Hypotheses en testroadmap", "A/B-tests en varianten", "UX- en copyverbeteringen", "Rapportage en learnings"],
      en: ["CRO audit and analysis", "Heatmaps and session recordings", "Hypotheses and test roadmap", "A/B tests and variants", "UX and copy improvements", "Reporting and learnings"],
    },
    benefits: [
      { title: { nl: "Rendement", en: "Return" }, text: { nl: "Meer klanten uit je bestaande verkeer.", en: "More customers from your existing traffic." } },
      { title: { nl: "Onderbouwd", en: "Evidence-based" }, text: { nl: "Beslissingen op data, niet op smaak.", en: "Decisions based on data, not taste." } },
      { title: { nl: "Doorlopend", en: "Ongoing" }, text: { nl: "Elke test maakt je website slimmer.", en: "Every test makes your website smarter." } },
    ],
    tools: ["hotjar", "ga4", "gtm", "figma", "webflow"],
    related: ["ux-ui-webdesign", "landingspaginas", "tracking-analytics", "salesfunnels"],
    faqs: [
      {
        q: { nl: "Hoeveel verkeer heb ik nodig voor A/B-testen?", en: "How much traffic do I need for A/B testing?" },
        a: {
          nl: "Voor betrouwbare A/B-tests heb je voldoende conversies per variant nodig. Heb je minder verkeer, dan zetten we vooral in op kwalitatief onderzoek, zoals heatmaps, sessie-opnames en gebruikersfeedback, en op bewezen verbeteringen.",
          en: "Reliable A/B tests need enough conversions per variant. If you have less traffic, we focus mainly on qualitative research, such as heatmaps, session recordings and user feedback, and on proven improvements.",
        },
      },
      {
        q: { nl: "Wat is een goede conversieratio?", en: "What is a good conversion rate?" },
        a: {
          nl: "Dat verschilt sterk per branche, product, prijs en verkeersbron. Vergelijken met gemiddelden zegt daarom weinig. We meten je eigen nulmeting en werken stap voor stap aan verbetering ten opzichte daarvan.",
          en: "It varies greatly by industry, product, price and traffic source, so comparing with averages says little. We measure your own baseline and work step by step on improving from there.",
        },
      },
      {
        q: { nl: "Hoe lang duurt een A/B-test?", en: "How long does an A/B test take?" },
        a: {
          nl: "Meestal minimaal twee volledige weken, zodat verschillen tussen weekdagen en weekenden meetellen. We laten een test lopen tot er een betrouwbare uitkomst is, in plaats van te vroeg conclusies te trekken.",
          en: "Usually at least two full weeks, so differences between weekdays and weekends are taken into account. We run a test until there is a reliable outcome, instead of drawing conclusions too early.",
        },
      },
    ],
    metaDescription: {
      nl: "Conversie-optimalisatie door M7: CRO-audit, heatmaps, A/B-tests en UX-verbeteringen die meer klanten halen uit je bestaande verkeer.",
      en: "Conversion rate optimisation by M7: CRO audit, heatmaps, A/B tests and UX improvements that get more customers from your existing traffic.",
    },
  },
];
