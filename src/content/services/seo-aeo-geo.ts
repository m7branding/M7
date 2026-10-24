import type { Application, Service } from "../types";

export const service: Service = {
  slug: "seo-aeo-geo",
  order: 5,
  title: { nl: "SEO, AEO & GEO", en: "SEO, AEO & GEO" },
  short: { nl: "SEO & AI-vindbaarheid", en: "SEO & AI search" },
  color: "#C8FF3D",
  icon: "search",
  mockup: "seo",
  tagline: { nl: "Found on Google. Quoted by AI.", en: "Found on Google. Quoted by AI." },
  intro: {
    nl: "Gevonden worden in Google én genoemd worden door ChatGPT, Perplexity en Google AI Overviews: wij maken je merk vindbaar in elke zoekmachine, klassiek en AI.",
    en: "Found on Google and mentioned by ChatGPT, Perplexity and Google AI Overviews: we make your brand discoverable in every search engine, classic and AI.",
  },
  description: {
    nl: "Zoeken verandert. Je klant typt nog steeds in Google, maar stelt zijn vraag net zo makkelijk aan ChatGPT, Perplexity of Gemini, en krijgt in Google steeds vaker een AI-samenvatting als eerste antwoord. Wie daar niet in voorkomt, valt buiten beeld. M7 combineert klassieke SEO met AEO (Answer Engine Optimization) en GEO (Generative Engine Optimization), zodat je merk gevonden, geciteerd en aanbevolen wordt.\n\nDe basis blijft hetzelfde: een technisch sterke website, content die echt antwoord geeft en autoriteit die je opbouwt met goede links en vermeldingen. Daarbovenop richten we structured data, entiteiten en een heldere kennisstructuur in die zoekmachines én taalmodellen begrijpen. Geen trucjes en geen garanties op posities, wel een aanpak die je vindbaarheid structureel versterkt.",
    en: "Search is changing. Your customer still types into Google, but just as easily asks ChatGPT, Perplexity or Gemini, and increasingly gets an AI summary as the first answer in Google. If you are not in there, you are out of sight. M7 combines classic SEO with AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization), so your brand gets found, cited and recommended.\n\nThe foundation stays the same: a technically strong website, content that truly answers questions and authority you build with good links and mentions. On top of that we set up structured data, entities and a clear knowledge structure that both search engines and language models understand. No tricks and no ranking guarantees, but an approach that structurally strengthens your visibility.",
  },
  highlights: [
    { value: "275+", label: { nl: "Webdomeinen in beheer", en: "Web domains under management" } },
    { value: "250+", label: { nl: "Klanten wereldwijd", en: "Clients worldwide" } },
    { value: "3", label: { nl: "Zoeklagen: SEO, AEO & GEO", en: "Search layers: SEO, AEO & GEO" } },
  ],
  terms: [
    "SEO",
    "AEO",
    "GEO",
    "Technische SEO",
    "Zoekwoordonderzoek",
    "On-page SEO",
    "Linkbuilding",
    "Lokale SEO",
    "Google Bedrijfsprofiel",
    "Structured data",
    "Schema markup",
    "JSON-LD",
    "llms.txt",
    "AI Overviews",
    "ChatGPT",
    "Perplexity",
    "Featured snippets",
    "People Also Ask",
    "Entity SEO",
    "E-E-A-T",
    "Core Web Vitals",
    "SEO-audit",
  ],
  tools: [
    "searchconsole",
    "bing",
    "semrush",
    "ahrefs",
    "screamingfrog",
    "pagespeed",
    "ga4",
    "lookerstudio",
    "googlebusiness",
    "schema",
    "yoast",
    "rankmath",
    "webflow",
    "openai",
    "perplexity",
    "gemini",
    "claude",
  ],
  process: [
    {
      title: { nl: "Audit & nulmeting", en: "Audit & baseline" },
      text: {
        nl: "We analyseren je techniek, content, links en posities, en toetsen hoe je merk nu naar voren komt in ChatGPT, Perplexity en AI Overviews.",
        en: "We analyse your technology, content, links and rankings, and check how your brand currently shows up in ChatGPT, Perplexity and AI Overviews.",
      },
    },
    {
      title: { nl: "Zoekwoorden & vragen", en: "Keywords & questions" },
      text: {
        nl: "Welke zoekwoorden en vragen gebruikt je doelgroep in Google en in AI-assistenten? We bepalen zoekintentie, kansen en topic clusters.",
        en: "Which keywords and questions does your audience use in Google and in AI assistants? We define search intent, opportunities and topic clusters.",
      },
    },
    {
      title: { nl: "Techniek & structuur", en: "Technology & structure" },
      text: {
        nl: "Core Web Vitals, indexatie, interne links, structured data in JSON-LD en llms.txt: we leggen een fundament dat machines moeiteloos begrijpen.",
        en: "Core Web Vitals, indexing, internal links, structured data in JSON-LD and llms.txt: we lay a foundation machines understand effortlessly.",
      },
    },
    {
      title: { nl: "Content & autoriteit", en: "Content & authority" },
      text: {
        nl: "Pillar pages, FAQ's, een answer hub en kwalitatieve links en vermeldingen die je expertise en betrouwbaarheid laten zien.",
        en: "Pillar pages, FAQs, an answer hub and quality links and mentions that show your expertise and trustworthiness.",
      },
    },
    {
      title: { nl: "Meten & bijsturen", en: "Measure & refine" },
      text: {
        nl: "Met Search Console, Bing Webmaster Tools, GA4 en Looker Studio volgen we posities, verkeer en AI-zichtbaarheid, en sturen we elke maand bij.",
        en: "With Search Console, Bing Webmaster Tools, GA4 and Looker Studio we track rankings, traffic and AI visibility, and refine every month.",
      },
    },
  ],
  seo: {
    title: {
      nl: "SEO, AEO en GEO: vindbaar in Google én in AI-zoekmachines",
      en: "SEO, AEO and GEO: discoverable in Google and in AI search engines",
    },
    sections: [
      {
        h: { nl: "SEO, AEO en GEO: wat is het verschil?", en: "SEO, AEO and GEO: what is the difference?" },
        body: {
          nl: "De drie termen vullen elkaar aan:\n- SEO (Search Engine Optimization) zorgt dat je pagina's goed scoren in de organische resultaten van Google en Bing\n- AEO (Answer Engine Optimization) richt zich op directe antwoorden: featured snippets, People Also Ask, voice search en antwoordblokken\n- GEO (Generative Engine Optimization) vergroot de kans dat AI-zoekmachines als ChatGPT, Perplexity, Gemini, Claude, Copilot en Google AI Overviews jouw merk noemen en als bron citeren\n\nSEO is daarbij het fundament. Veel AI-zoekfuncties baseren hun antwoorden op actuele webresultaten, dus een sterke organische basis vergroot ook je kans om in AI-antwoorden terecht te komen. AEO en GEO bouwen daarop voort met content en structuur die machines makkelijk kunnen begrijpen, samenvatten en citeren.",
          en: "The three terms complement each other:\n- SEO (Search Engine Optimization) makes your pages rank well in the organic results of Google and Bing\n- AEO (Answer Engine Optimization) focuses on direct answers: featured snippets, People Also Ask, voice search and answer boxes\n- GEO (Generative Engine Optimization) increases the chance that AI search engines such as ChatGPT, Perplexity, Gemini, Claude, Copilot and Google AI Overviews mention your brand and cite you as a source\n\nSEO is the foundation. Many AI search features base their answers on current web results, so a strong organic base also increases your chance of appearing in AI answers. AEO and GEO build on that with content and structure that machines can easily understand, summarise and cite.",
        },
      },
      {
        h: { nl: "Technische SEO: het fundament onder je vindbaarheid", en: "Technical SEO: the foundation under your visibility" },
        body: {
          nl: "Zonder goede techniek komt zelfs de beste content niet tot z'n recht. Bij een technische SEO-analyse kijken we onder meer naar:\n- Crawlbaarheid en indexatie (robots.txt, sitemaps, canonicals)\n- Core Web Vitals en laadsnelheid op mobiel\n- Sitestructuur, interne links en URL-opbouw\n- Structured data in JSON-LD volgens schema.org\n- Meertaligheid met hreflang\n- Redirects, foutpagina's en dubbele content\n\nOmdat we zelf websites bouwen in Webflow, WordPress en Next.js, lossen we technische problemen direct op in plaats van alleen een rapport op te leveren. Als Webflow Professional Partner kennen we bovendien de SEO-mogelijkheden van Webflow tot in detail.",
          en: "Without solid technology, even the best content cannot shine. In a technical SEO analysis we look at, among other things:\n- Crawlability and indexing (robots.txt, sitemaps, canonicals)\n- Core Web Vitals and mobile loading speed\n- Site structure, internal links and URL structure\n- Structured data in JSON-LD following schema.org\n- Multilingual setup with hreflang\n- Redirects, error pages and duplicate content\n\nBecause we build websites in Webflow, WordPress and Next.js ourselves, we fix technical issues directly instead of only delivering a report. As a Webflow Professional Partner we also know Webflow's SEO capabilities inside out.",
        },
      },
      {
        h: { nl: "Content die antwoord geeft", en: "Content that answers" },
        body: {
          nl: "Zoekmachines en AI-assistenten belonen content die een vraag snel, volledig en betrouwbaar beantwoordt. Daarom beginnen we met zoekwoord- en vragenonderzoek: wat vraagt je doelgroep in Google, in People Also Ask en aan AI-chatbots? Op basis daarvan bouwen we topic clusters met pillar pages, verdiepende artikelen en uitgebreide FAQ's.\n\nElke pagina krijgt een heldere structuur: een direct antwoord bovenaan, logische tussenkoppen, opsommingen en tabellen waar dat helpt. Dat vergroot de kans op featured snippets en maakt je content makkelijk citeerbaar voor AI. Met aandacht voor E-E-A-T (ervaring, expertise, autoriteit en betrouwbaarheid) laten we zien waarom jij de partij bent om op te vertrouwen: met auteurs, bronnen, cases en actuele informatie.",
          en: "Search engines and AI assistants reward content that answers a question quickly, completely and reliably. That is why we start with keyword and question research: what does your audience ask in Google, in People Also Ask and to AI chatbots? Based on that we build topic clusters with pillar pages, in-depth articles and extensive FAQs.\n\nEvery page gets a clear structure: a direct answer at the top, logical subheadings, lists and tables where they help. That increases the chance of featured snippets and makes your content easy for AI to cite. With attention to E-E-A-T (experience, expertise, authoritativeness and trustworthiness) we show why you are the party to trust: with authors, sources, cases and up-to-date information.",
        },
      },
      {
        h: { nl: "Zichtbaar worden in ChatGPT, Perplexity en AI Overviews", en: "Becoming visible in ChatGPT, Perplexity and AI Overviews" },
        body: {
          nl: "GEO draait om begrijpelijkheid en autoriteit. Taalmodellen noemen vooral merken die ze duidelijk kunnen plaatsen en die op betrouwbare plekken terugkomen. Onze GEO-aanpak bestaat onder meer uit:\n- Entity SEO: je merk, diensten en mensen eenduidig beschrijven, zodat zoekmachines en AI je herkennen\n- Uitgebreide structured data (Organization, Service, FAQPage, Article, Product)\n- Een llms.txt-bestand dat AI-systemen wegwijs maakt in je belangrijkste content\n- Een kennisbank of answer hub met heldere antwoorden op de vragen uit jouw vakgebied\n- Vermeldingen op relevante websites, platforms en reviewsites\n- Periodieke monitoring van hoe je merk in AI-antwoorden verschijnt\n\nWe passen deze aanpak ook zelf toe, onder meer met answers.m7branding.com, de answer hub van M7.",
          en: "GEO is about clarity and authority. Language models mainly mention brands they can clearly place and that appear in trustworthy places. Our GEO approach includes:\n- Entity SEO: describing your brand, services and people unambiguously, so search engines and AI recognise you\n- Extensive structured data (Organization, Service, FAQPage, Article, Product)\n- An llms.txt file that guides AI systems to your most important content\n- A knowledge base or answer hub with clear answers to the questions in your field\n- Mentions on relevant websites, platforms and review sites\n- Periodic monitoring of how your brand appears in AI answers\n\nWe apply this approach ourselves too, among other things with answers.m7branding.com, M7's own answer hub.",
        },
      },
      {
        h: { nl: "Waarom M7 voor SEO, AEO en GEO?", en: "Why M7 for SEO, AEO and GEO?" },
        body: {
          nl: "SEO raakt aan techniek, content, design en data, en juist die disciplines zitten bij M7 onder één dak. Onze developers lossen technische knelpunten op, onze copywriters schrijven content die mensen én machines begrijpen en onze designers zorgen dat je pagina's ook converteren. Zo gaat elke verbetering direct live, zonder overdracht tussen bureaus.\n\nWe zijn eerlijk over wat SEO kan: niemand kan posities in Google of vermeldingen in ChatGPT garanderen. Wel kunnen we je kansen structureel vergroten met een aanpak die werkt voor klassieke zoekmachines én voor de AI-zoekmachines van nu en straks. Met heldere rapportages uit Search Console, Bing Webmaster Tools en Looker Studio zie je precies hoe je vindbaarheid zich ontwikkelt.",
          en: "SEO touches technology, content, design and data, and those are exactly the disciplines M7 has under one roof. Our developers fix technical bottlenecks, our copywriters write content that both people and machines understand and our designers make sure your pages convert too. That way every improvement goes live right away, without handovers between agencies.\n\nWe are honest about what SEO can do: nobody can guarantee rankings in Google or mentions in ChatGPT. What we can do is structurally increase your chances with an approach that works for classic search engines and for the AI search engines of today and tomorrow. With clear reports from Search Console, Bing Webmaster Tools and Looker Studio you see exactly how your visibility develops.",
        },
      },
    ],
  },
  faqs: [
    {
      q: { nl: "Wat is het verschil tussen SEO, AEO en GEO?", en: "What is the difference between SEO, AEO and GEO?" },
      a: {
        nl: "SEO (Search Engine Optimization) richt zich op hogere posities in de organische zoekresultaten van Google en Bing. AEO (Answer Engine Optimization) richt zich op het leveren van het directe antwoord, zoals in featured snippets, People Also Ask en voice search. GEO (Generative Engine Optimization) richt zich op zichtbaarheid in AI-zoekmachines als ChatGPT, Perplexity, Gemini en Google AI Overviews. Ze bouwen op elkaar voort: SEO is het fundament, AEO en GEO maken je content geschikt voor antwoorden en AI.",
        en: "SEO (Search Engine Optimization) focuses on higher rankings in the organic search results of Google and Bing. AEO (Answer Engine Optimization) focuses on providing the direct answer, as in featured snippets, People Also Ask and voice search. GEO (Generative Engine Optimization) focuses on visibility in AI search engines such as ChatGPT, Perplexity, Gemini and Google AI Overviews. They build on each other: SEO is the foundation, AEO and GEO make your content fit for answers and AI.",
      },
    },
    {
      q: { nl: "Hoe word ik zichtbaar in ChatGPT?", en: "How do I become visible in ChatGPT?" },
      a: {
        nl: "Je kunt je niet aanmelden bij ChatGPT; zichtbaarheid verdien je. Voor actuele vragen zoekt ChatGPT op het web en noemt het vooral merken die het duidelijk kan plaatsen en die op meerdere betrouwbare plekken terugkomen. Wat helpt: een website die toegankelijk is voor AI-crawlers zoals OAI-SearchBot, content die vragen helder en feitelijk beantwoordt, structured data, een consistente merkbeschrijving op je eigen site en externe platforms, en vermeldingen op relevante websites. Een goede indexatie in Bing helpt ook, omdat ChatGPT voor zoekopdrachten onder meer gebruikmaakt van zoekpartners.",
        en: "You cannot sign up for ChatGPT; visibility is earned. For current questions ChatGPT searches the web and mainly mentions brands it can clearly place and that appear in several trustworthy places. What helps: a website accessible to AI crawlers such as OAI-SearchBot, content that answers questions clearly and factually, structured data, a consistent brand description on your own site and external platforms, and mentions on relevant websites. Good indexing in Bing helps too, as ChatGPT uses search partners among other sources for its searches.",
      },
    },
    {
      q: { nl: "Hoe kom ik in de AI Overviews van Google?", en: "How do I get into Google's AI Overviews?" },
      a: {
        nl: "AI Overviews gebruiken pagina's uit de Google-index. Er is geen aparte aanmelding of speciale markup voor nodig: volgens Google gelden dezelfde SEO-basisprincipes. Je vergroot je kans met pagina's die goed geïndexeerd zijn, een vraag direct en volledig beantwoorden, een heldere structuur hebben en vertrouwen uitstralen. Featured snippets en AI Overviews belonen grotendeels dezelfde kwaliteiten.",
        en: "AI Overviews use pages from the Google index. No separate sign-up or special markup is needed: according to Google, the same SEO fundamentals apply. You increase your chances with pages that are well indexed, answer a question directly and completely, have a clear structure and radiate trust. Featured snippets and AI Overviews largely reward the same qualities.",
      },
    },
    {
      q: { nl: "Is SEO nog zinvol nu steeds meer mensen met AI zoeken?", en: "Is SEO still worthwhile now that more people search with AI?" },
      a: {
        nl: "Ja. Google verwerkt nog altijd miljarden zoekopdrachten per dag, en AI-zoekmachines baseren hun antwoorden voor een groot deel op webcontent die goed vindbaar en goed gestructureerd is. Wat verandert, is hoe je content eruit moet zien: meer gericht op heldere antwoorden, autoriteit en structuur. Daarom combineren we SEO met AEO en GEO.",
        en: "Yes. Google still handles billions of searches every day, and AI search engines largely base their answers on web content that is easy to find and well structured. What changes is how your content should look: more focused on clear answers, authority and structure. That is why we combine SEO with AEO and GEO.",
      },
    },
    {
      q: { nl: "Wat kost SEO?", en: "How much does SEO cost?" },
      a: {
        nl: "Dat hangt af van je markt, concurrentie en ambitie. Een eenmalige SEO-audit met concreet verbeterplan is er vanaf enkele honderden tot een paar duizend euro. Doorlopende SEO, AEO en GEO met techniek, content en linkbuilding werkt meestal met een maandbudget vanaf enkele honderden euro's, oplopend bij meer content en meer concurrentie. Via onze configurator op letsgo.m7branding.com zie je direct indicatieve prijzen, of plan een kennismaking voor een voorstel op maat.",
        en: "It depends on your market, competition and ambition. A one-off SEO audit with a concrete improvement plan ranges from a few hundred to a few thousand euros. Ongoing SEO, AEO and GEO with technology, content and link building usually works with a monthly budget starting at a few hundred euros, increasing with more content and more competition. Our configurator at letsgo.m7branding.com shows indicative prices instantly, or book an intro call for a tailored proposal.",
      },
    },
    {
      q: { nl: "Hoe lang duurt het voordat SEO resultaat oplevert?", en: "How long does it take for SEO to deliver results?" },
      a: {
        nl: "Technische verbeteringen kunnen soms al binnen enkele weken effect hebben. Voor content en autoriteit moet je meestal rekenen op drie tot zes maanden voordat je duidelijke groei ziet, en in concurrerende markten langer. SEO is een investering die zich opstapelt: goede content en sterke links blijven waarde opleveren.",
        en: "Technical improvements can sometimes have an effect within a few weeks. For content and authority you should usually expect three to six months before you see clear growth, and longer in competitive markets. SEO is an investment that compounds: good content and strong links keep delivering value.",
      },
    },
    {
      q: { nl: "Kunnen jullie een nummer 1-positie in Google garanderen?", en: "Can you guarantee a number 1 position in Google?" },
      a: {
        nl: "Nee, en wees voorzichtig met bureaus die dat wel beloven. Google en AI-zoekmachines bepalen zelf hun rangschikking en passen hun algoritmes voortdurend aan. Wat je wel van ons krijgt: een transparante aanpak, heldere prioriteiten, eerlijke rapportages en verbeteringen die je kansen structureel vergroten.",
        en: "No, and be careful with agencies that do promise it. Google and AI search engines decide their own rankings and constantly adjust their algorithms. What you do get from us: a transparent approach, clear priorities, honest reporting and improvements that structurally increase your chances.",
      },
    },
    {
      q: { nl: "Wat is llms.txt en heb ik het nodig?", en: "What is llms.txt and do I need it?" },
      a: {
        nl: "llms.txt is een voorgesteld bestand in de root van je website dat taalmodellen in eenvoudige Markdown een overzicht geeft van je belangrijkste pagina's en informatie. Het is nog geen officiële standaard en niet elke AI-aanbieder gebruikt het. Omdat het weinig moeite kost en je content overzichtelijker maakt voor AI, nemen we het mee als onderdeel van een bredere GEO-aanpak, niet als wondermiddel.",
        en: "llms.txt is a proposed file in the root of your website that gives language models an overview of your most important pages and information in simple Markdown. It is not yet an official standard and not every AI provider uses it. Because it takes little effort and makes your content clearer for AI, we include it as part of a broader GEO approach, not as a silver bullet.",
      },
    },
    {
      q: { nl: "Wat is structured data en waarom is het belangrijk?", en: "What is structured data and why does it matter?" },
      a: {
        nl: "Structured data is code, meestal JSON-LD volgens schema.org, die zoekmachines precies vertelt wat er op een pagina staat: een organisatie, dienst, product, artikel, evenement of review. Het helpt zoekmachines en AI-systemen je content correct te interpreteren en kan zorgen voor rich results, zoals sterren, prijzen of breadcrumbs in de zoekresultaten.",
        en: "Structured data is code, usually JSON-LD following schema.org, that tells search engines exactly what is on a page: an organisation, service, product, article, event or review. It helps search engines and AI systems interpret your content correctly and can lead to rich results, such as stars, prices or breadcrumbs in the search results.",
      },
    },
    {
      q: { nl: "Wat is E-E-A-T?", en: "What is E-E-A-T?" },
      a: {
        nl: "E-E-A-T staat voor Experience, Expertise, Authoritativeness en Trustworthiness: ervaring, expertise, autoriteit en betrouwbaarheid. Google gebruikt deze begrippen in de richtlijnen voor zijn quality raters. Het is geen losse rankingfactor, maar wel een goede leidraad: laat zien wie je bent, waarom je verstand van zaken hebt en waarom je te vertrouwen bent, met auteursprofielen, cases, reviews, bronnen en actuele contactgegevens.",
        en: "E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness. Google uses these concepts in the guidelines for its quality raters. It is not a single ranking factor, but it is a good guideline: show who you are, why you know your stuff and why you can be trusted, with author profiles, cases, reviews, sources and up-to-date contact details.",
      },
    },
    {
      q: { nl: "Hoe meet je zichtbaarheid in AI-zoekmachines?", en: "How do you measure visibility in AI search engines?" },
      a: {
        nl: "We stellen een set kernvragen op die je doelgroep aan AI-assistenten stelt en controleren periodiek of en hoe je merk in de antwoorden van ChatGPT, Perplexity, Gemini en Google AI Overviews verschijnt. Daarnaast kijken we naar verwijzend verkeer uit AI-tools in GA4 en naar merkvermeldingen online. Het meten van AI-zichtbaarheid is nog volop in ontwikkeling, dus we combineren meerdere signalen in plaats van op één cijfer te vertrouwen.",
        en: "We define a set of key questions your audience asks AI assistants and periodically check whether and how your brand appears in the answers of ChatGPT, Perplexity, Gemini and Google AI Overviews. We also look at referral traffic from AI tools in GA4 and at brand mentions online. Measuring AI visibility is still evolving, so we combine several signals instead of relying on a single number.",
      },
    },
    {
      q: { nl: "Werkt SEO even goed op Webflow als op WordPress?", en: "Does SEO work as well on Webflow as on WordPress?" },
      a: {
        nl: "Ja. Webflow genereert schone code, levert snelle hosting en geeft volledige controle over meta-tags, redirects, sitemaps en structured data. WordPress is met plugins als Yoast SEO of Rank Math ook uitstekend te optimaliseren, mits hosting en plugins goed zijn ingericht. Als Webflow Professional Partner bouwen we veel in Webflow, maar we optimaliseren net zo goed WordPress- en Next.js-websites.",
        en: "Yes. Webflow generates clean code, provides fast hosting and gives full control over meta tags, redirects, sitemaps and structured data. WordPress can also be optimised very well with plugins such as Yoast SEO or Rank Math, provided hosting and plugins are set up properly. As a Webflow Professional Partner we build a lot in Webflow, but we optimise WordPress and Next.js websites just as well.",
      },
    },
  ],
  metaTitle: {
    nl: "SEO, AEO & GEO bureau | Vindbaar in Google én AI | M7",
    en: "SEO, AEO & GEO agency | Found on Google and in AI | M7",
  },
  metaDescription: {
    nl: "M7 maakt je vindbaar in Google, ChatGPT, Perplexity en AI Overviews: technische SEO, content, structured data, linkbuilding en lokale SEO.",
    en: "M7 makes you discoverable in Google, ChatGPT, Perplexity and AI Overviews: technical SEO, content, structured data, link building and local SEO.",
  },
  related: ["websites-webshops", "content-marketing-online-ads", "ai-consultancy"],
  configurator: ["seo", "tracking"],
};

export const applications: Application[] = [
  {
    slug: "seo",
    service: "seo-aeo-geo",
    title: { nl: "SEO (zoekmachineoptimalisatie)", en: "SEO (search engine optimisation)" },
    summary: {
      nl: "Duurzaam beter gevonden worden in Google en Bing, op de zoekwoorden die tellen.",
      en: "Sustainably better found in Google and Bing, for the keywords that count.",
    },
    intro: {
      nl: "Met doorlopende SEO werken we stap voor stap aan betere posities in Google en Bing voor de zoekwoorden die voor jouw bedrijf geld waard zijn. Techniek, content en autoriteit, samengebracht in één plan.",
      en: "With ongoing SEO we work step by step towards better rankings in Google and Bing for the keywords that are worth money to your business. Technology, content and authority, brought together in one plan.",
    },
    body: [
      {
        h: { nl: "Zoekwoorden met zakelijke waarde", en: "Keywords with business value" },
        body: {
          nl: "We kiezen zoekwoorden niet alleen op zoekvolume, maar op hoe goed ze passen bij wat je verkoopt en bij de intentie van de zoeker. Zo trek je bezoekers die klaar zijn om contact op te nemen, een offerte aan te vragen of te kopen.",
          en: "We do not choose keywords on search volume alone, but on how well they match what you sell and the searcher's intent. That way you attract visitors who are ready to get in touch, request a quote or buy.",
        },
      },
      {
        h: { nl: "Doorlopend verbeteren", en: "Continuous improvement" },
        body: {
          nl: "SEO is geen eenmalige klus. Elke maand werken we aan techniek, content en links, analyseren we resultaten in Search Console en GA4 en sturen we bij op wat werkt. Je krijgt een heldere rapportage met wat we hebben gedaan en wat de volgende stap is.",
          en: "SEO is not a one-off job. Every month we work on technology, content and links, analyse results in Search Console and GA4 and refine based on what works. You get a clear report on what we did and what the next step is.",
        },
      },
    ],
    deliverables: {
      nl: ["Zoekwoord- en concurrentieonderzoek", "SEO-strategie en roadmap", "On-page optimalisatie", "Technische verbeteringen", "Content- en linkbuildingplan", "Maandelijkse rapportage"],
      en: ["Keyword and competitor research", "SEO strategy and roadmap", "On-page optimisation", "Technical improvements", "Content and link building plan", "Monthly reporting"],
    },
    benefits: [
      { title: { nl: "Duurzaam", en: "Sustainable" }, text: { nl: "Verkeer dat blijft, ook zonder advertentiebudget.", en: "Traffic that stays, even without ad spend." } },
      { title: { nl: "Relevant", en: "Relevant" }, text: { nl: "Bezoekers met echte koopintentie.", en: "Visitors with real purchase intent." } },
      { title: { nl: "Transparant", en: "Transparent" }, text: { nl: "Heldere rapportages en prioriteiten.", en: "Clear reports and priorities." } },
    ],
    tools: ["semrush", "ahrefs", "searchconsole", "ga4", "screamingfrog"],
    related: ["technische-seo", "seo-content", "linkbuilding", "geo"],
    faqs: [
      {
        q: { nl: "Wat is SEO?", en: "What is SEO?" },
        a: {
          nl: "SEO staat voor Search Engine Optimization, in het Nederlands zoekmachineoptimalisatie. Het is het verbeteren van je website, content en autoriteit zodat je hoger verschijnt in de onbetaalde zoekresultaten van zoekmachines als Google en Bing.",
          en: "SEO stands for Search Engine Optimization. It is improving your website, content and authority so you appear higher in the unpaid search results of search engines such as Google and Bing.",
        },
      },
      {
        q: { nl: "Wat is het verschil tussen SEO en SEA?", en: "What is the difference between SEO and SEA?" },
        a: {
          nl: "SEA (Search Engine Advertising) zijn betaalde advertenties, bijvoorbeeld via Google Ads: direct zichtbaar, maar alleen zolang je betaalt. SEO richt zich op de organische resultaten: het kost meer tijd, maar levert blijvend verkeer op. Samen vormen ze vaak de sterkste combinatie.",
          en: "SEA (Search Engine Advertising) means paid ads, for example via Google Ads: visible immediately, but only as long as you pay. SEO focuses on organic results: it takes more time, but delivers lasting traffic. Together they are often the strongest combination.",
        },
      },
      {
        q: { nl: "Moet ik maandelijks blijven investeren in SEO?", en: "Do I need to keep investing in SEO every month?" },
        a: {
          nl: "Niet per se, maar het loont wel. Concurrenten en zoekmachines staan niet stil. Na een eerste optimalisatieslag kun je kiezen voor doorlopende begeleiding of voor periodieke audits en verbeterrondes.",
          en: "Not necessarily, but it does pay off. Competitors and search engines do not stand still. After an initial optimisation round you can choose ongoing support or periodic audits and improvement rounds.",
        },
      },
    ],
    metaDescription: {
      nl: "SEO laten doen door M7: zoekwoordonderzoek, on-page optimalisatie, techniek, content en linkbuilding voor duurzaam betere posities in Google en Bing.",
      en: "SEO by M7: keyword research, on-page optimisation, technology, content and link building for sustainably better rankings in Google and Bing.",
    },
  },
  {
    slug: "technische-seo",
    service: "seo-aeo-geo",
    title: { nl: "Technische SEO", en: "Technical SEO" },
    summary: {
      nl: "Een snelle, crawlbare website die zoekmachines en AI-crawlers moeiteloos begrijpen.",
      en: "A fast, crawlable website that search engines and AI crawlers understand effortlessly.",
    },
    intro: {
      nl: "Technische SEO zorgt dat zoekmachines en AI-crawlers je website goed kunnen vinden, lezen en indexeren. We optimaliseren snelheid, structuur, indexatie en code, zodat je content de kans krijgt die hij verdient.",
      en: "Technical SEO makes sure search engines and AI crawlers can find, read and index your website properly. We optimise speed, structure, indexing and code, so your content gets the chance it deserves.",
    },
    body: [
      {
        h: { nl: "Core Web Vitals en snelheid", en: "Core Web Vitals and speed" },
        body: {
          nl: "We meten en verbeteren Largest Contentful Paint, Interaction to Next Paint en Cumulative Layout Shift. Met geoptimaliseerde afbeeldingen, slimme caching, minder overbodige scripts en goede hosting laden je pagina's snel op elk apparaat.",
          en: "We measure and improve Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift. With optimised images, smart caching, fewer unnecessary scripts and good hosting your pages load fast on every device.",
        },
      },
      {
        h: { nl: "Indexatie en structuur", en: "Indexing and structure" },
        body: {
          nl: "Robots.txt, XML-sitemaps, canonicals, hreflang, redirects en interne links: we zorgen dat zoekmachines je belangrijkste pagina's vinden en begrijpen. Ook stellen we bewust in welke AI-crawlers je wel en niet toelaat, zodat je niet onbedoeld onzichtbaar bent voor AI-zoekmachines.",
          en: "Robots.txt, XML sitemaps, canonicals, hreflang, redirects and internal links: we make sure search engines find and understand your most important pages. We also deliberately configure which AI crawlers you allow, so you are not unintentionally invisible to AI search engines.",
        },
      },
    ],
    deliverables: {
      nl: ["Technische crawl en analyse", "Core Web Vitals-optimalisatie", "Indexatie- en sitemapcontrole", "Redirect- en canonicalbeleid", "Hreflang voor meertalige sites", "Robots.txt en AI-crawlerbeleid"],
      en: ["Technical crawl and analysis", "Core Web Vitals optimisation", "Indexing and sitemap review", "Redirect and canonical policy", "Hreflang for multilingual sites", "Robots.txt and AI crawler policy"],
    },
    benefits: [
      { title: { nl: "Sneller", en: "Faster" }, text: { nl: "Een betere ervaring voor bezoekers en zoekmachines.", en: "A better experience for visitors and search engines." } },
      { title: { nl: "Vindbaar", en: "Discoverable" }, text: { nl: "Al je belangrijke pagina's in de index.", en: "All your important pages in the index." } },
      { title: { nl: "Toekomstbestendig", en: "Future-proof" }, text: { nl: "Klaar voor klassieke en AI-crawlers.", en: "Ready for classic and AI crawlers." } },
    ],
    tools: ["screamingfrog", "searchconsole", "pagespeed", "bing", "cloudflare"],
    related: ["seo-audit", "website-migratie", "hosting-onderhoud", "structured-data"],
    faqs: [
      {
        q: { nl: "Wat zijn Core Web Vitals?", en: "What are Core Web Vitals?" },
        a: {
          nl: "Core Web Vitals zijn drie meetwaarden van Google voor gebruikerservaring: laadsnelheid (Largest Contentful Paint), reactiesnelheid (Interaction to Next Paint) en visuele stabiliteit (Cumulative Layout Shift). Ze maken deel uit van de signalen die Google gebruikt om pagina's te beoordelen.",
          en: "Core Web Vitals are three Google metrics for user experience: loading speed (Largest Contentful Paint), responsiveness (Interaction to Next Paint) and visual stability (Cumulative Layout Shift). They are part of the signals Google uses to assess pages.",
        },
      },
      {
        q: { nl: "Moet ik AI-crawlers toelaten op mijn website?", en: "Should I allow AI crawlers on my website?" },
        a: {
          nl: "Dat is een bewuste keuze. Wil je zichtbaar zijn in AI-zoekmachines, dan moet je hun zoekcrawlers toelaten. Je kunt wel onderscheid maken tussen crawlers voor zoekfuncties en crawlers voor het trainen van modellen. We helpen je een robots.txt in te richten die past bij jouw keuzes.",
          en: "That is a deliberate choice. If you want to be visible in AI search engines, you need to allow their search crawlers. You can distinguish between crawlers for search features and crawlers for model training. We help you set up a robots.txt that matches your choices.",
        },
      },
      {
        q: { nl: "Kan technische SEO zonder nieuwe website?", en: "Can technical SEO be done without a new website?" },
        a: {
          nl: "Meestal wel. De meeste verbeteringen voeren we door in je bestaande website. Alleen als het fundament echt verouderd is, adviseren we een rebuild of migratie, en dan begeleiden we die zonder verlies van vindbaarheid.",
          en: "Usually, yes. We implement most improvements in your existing website. Only if the foundation is truly outdated do we advise a rebuild or migration, and then we guide it without losing visibility.",
        },
      },
    ],
    metaDescription: {
      nl: "Technische SEO door M7: Core Web Vitals, indexatie, sitemaps, redirects, hreflang en AI-crawlerbeleid voor een website die zoekmachines begrijpen.",
      en: "Technical SEO by M7: Core Web Vitals, indexing, sitemaps, redirects, hreflang and AI crawler policy for a website search engines understand.",
    },
  },
  {
    slug: "aeo",
    service: "seo-aeo-geo",
    title: { nl: "AEO (Answer Engine Optimization)", en: "AEO (Answer Engine Optimization)" },
    summary: {
      nl: "Het directe antwoord zijn: in featured snippets, People Also Ask en voice search.",
      en: "Be the direct answer: in featured snippets, People Also Ask and voice search.",
    },
    intro: {
      nl: "Steeds meer zoekopdrachten eindigen met een direct antwoord. Met Answer Engine Optimization vergroten we de kans dat dat antwoord van jou komt: in featured snippets, People Also Ask, voice assistants en antwoordblokken.",
      en: "More and more searches end with a direct answer. With Answer Engine Optimization we increase the chance that the answer comes from you: in featured snippets, People Also Ask, voice assistants and answer boxes.",
    },
    body: [
      {
        h: { nl: "Vragen als vertrekpunt", en: "Questions as the starting point" },
        body: {
          nl: "We brengen in kaart welke vragen je doelgroep stelt, via People Also Ask, zoekwoordtools, je klantenservice en salesgesprekken. Elke vraag krijgt een helder, beknopt antwoord, gevolgd door verdieping voor wie meer wil weten.",
          en: "We map which questions your audience asks, through People Also Ask, keyword tools, your customer service and sales conversations. Every question gets a clear, concise answer, followed by depth for those who want to know more.",
        },
      },
      {
        h: { nl: "Structuur die machines begrijpen", en: "Structure machines understand" },
        body: {
          nl: "Directe antwoorden in de eerste zinnen, duidelijke tussenkoppen in vraagvorm, opsommingen, tabellen en FAQ-secties met structured data: zo maken we je content makkelijk te herkennen en te tonen als antwoord, in Google én in AI-assistenten.",
          en: "Direct answers in the first sentences, clear question-style subheadings, lists, tables and FAQ sections with structured data: that makes your content easy to recognise and display as an answer, in Google and in AI assistants.",
        },
      },
    ],
    deliverables: {
      nl: ["Vragenonderzoek (People Also Ask, voice)", "Antwoordgerichte contentstructuur", "FAQ-secties met structured data", "Optimalisatie voor featured snippets", "Herschrijven van bestaande pagina's", "Monitoring van snippetposities"],
      en: ["Question research (People Also Ask, voice)", "Answer-focused content structure", "FAQ sections with structured data", "Featured snippet optimisation", "Rewriting existing pages", "Snippet position monitoring"],
    },
    benefits: [
      { title: { nl: "Bovenaan", en: "On top" }, text: { nl: "Zichtbaar in het antwoordblok boven de resultaten.", en: "Visible in the answer box above the results." } },
      { title: { nl: "Autoriteit", en: "Authority" }, text: { nl: "Jij bent de bron die antwoord geeft.", en: "You are the source that provides the answer." } },
      { title: { nl: "AI-klaar", en: "AI-ready" }, text: { nl: "Dezelfde structuur helpt in AI-antwoorden.", en: "The same structure helps in AI answers." } },
    ],
    tools: ["semrush", "ahrefs", "searchconsole", "schema"],
    related: ["geo", "seo-content", "structured-data", "ai-chatbots"],
    faqs: [
      {
        q: { nl: "Wat is AEO?", en: "What is AEO?" },
        a: {
          nl: "AEO staat voor Answer Engine Optimization: het optimaliseren van je content zodat zoekmachines en assistenten jouw tekst gebruiken als direct antwoord op een vraag, bijvoorbeeld in een featured snippet, People Also Ask of een voice-antwoord.",
          en: "AEO stands for Answer Engine Optimization: optimising your content so search engines and assistants use your text as the direct answer to a question, for example in a featured snippet, People Also Ask or a voice answer.",
        },
      },
      {
        q: { nl: "Wat is een featured snippet?", en: "What is a featured snippet?" },
        a: {
          nl: "Een featured snippet is een uitgelicht antwoordblok bovenaan de zoekresultaten van Google, met een stukje tekst, lijst of tabel uit een webpagina en een link naar de bron. Google kiest zelf welke pagina daar verschijnt.",
          en: "A featured snippet is a highlighted answer box at the top of Google's search results, with a piece of text, list or table from a web page and a link to the source. Google decides which page appears there.",
        },
      },
      {
        q: { nl: "Kost AEO me geen klikken als mensen het antwoord al in Google zien?", en: "Does AEO not cost me clicks if people already see the answer in Google?" },
        a: {
          nl: "Bij eenvoudige vragen soms wel. Maar je merk wordt wel gezien als de bron, en bij complexere vragen klikken mensen juist door voor meer verdieping. Bovendien bouw je zo autoriteit op die ook helpt bij je zichtbaarheid in AI-zoekmachines.",
          en: "For simple questions, sometimes. But your brand is seen as the source, and for more complex questions people click through for more depth. Moreover, you build authority that also helps your visibility in AI search engines.",
        },
      },
    ],
    metaDescription: {
      nl: "AEO door M7: content die het directe antwoord geeft in featured snippets, People Also Ask en voice search, met heldere structuur en structured data.",
      en: "AEO by M7: content that gives the direct answer in featured snippets, People Also Ask and voice search, with clear structure and structured data.",
    },
  },
  {
    slug: "geo",
    service: "seo-aeo-geo",
    title: { nl: "GEO (Generative Engine Optimization)", en: "GEO (Generative Engine Optimization)" },
    summary: {
      nl: "Genoemd en geciteerd worden door ChatGPT, Perplexity, Gemini en Google AI Overviews.",
      en: "Get mentioned and cited by ChatGPT, Perplexity, Gemini and Google AI Overviews.",
    },
    intro: {
      nl: "Steeds meer mensen vragen een AI-assistent om advies voordat ze een bedrijf kiezen. Met Generative Engine Optimization vergroten we de kans dat ChatGPT, Perplexity, Gemini, Claude, Copilot en Google AI Overviews jouw merk noemen en naar je website verwijzen.",
      en: "More and more people ask an AI assistant for advice before choosing a company. With Generative Engine Optimization we increase the chance that ChatGPT, Perplexity, Gemini, Claude, Copilot and Google AI Overviews mention your brand and link to your website.",
    },
    body: [
      {
        h: { nl: "Begrijpelijk voor taalmodellen", en: "Understandable for language models" },
        body: {
          nl: "AI noemt vooral merken die het eenduidig kan plaatsen. We werken aan entity SEO, consistente merkinformatie op je website en externe platforms, uitgebreide structured data en een llms.txt-bestand, zodat AI-systemen helder kunnen zien wie je bent, wat je doet en voor wie.",
          en: "AI mainly mentions brands it can place unambiguously. We work on entity SEO, consistent brand information on your website and external platforms, extensive structured data and an llms.txt file, so AI systems can clearly see who you are, what you do and for whom.",
        },
      },
      {
        h: { nl: "Een answer hub als bron", en: "An answer hub as a source" },
        body: {
          nl: "Een kennisbank of answer hub met heldere, feitelijke antwoorden op de vragen uit jouw vakgebied is citeerbare content bij uitstek. We helpen je zo'n hub opzetten en vullen; M7 doet dat zelf ook met answers.m7branding.com. Daarnaast werken we aan vermeldingen op plekken die AI-systemen raadplegen, zoals vakmedia, reviewplatforms en relevante overzichtssites.",
          en: "A knowledge base or answer hub with clear, factual answers to the questions in your field is citable content par excellence. We help you set up and fill such a hub; M7 does the same with answers.m7branding.com. We also work on mentions in places AI systems consult, such as trade media, review platforms and relevant directories.",
        },
      },
    ],
    deliverables: {
      nl: ["Nulmeting van je AI-zichtbaarheid", "Entity- en merkinformatie-optimalisatie", "Structured data en llms.txt", "Answer hub of kennisbank", "Vermeldingen op relevante platforms", "Periodieke monitoring in AI-zoekmachines"],
      en: ["Baseline of your AI visibility", "Entity and brand information optimisation", "Structured data and llms.txt", "Answer hub or knowledge base", "Mentions on relevant platforms", "Periodic monitoring in AI search engines"],
    },
    benefits: [
      { title: { nl: "Aanbevolen", en: "Recommended" }, text: { nl: "Zichtbaar waar je klant om advies vraagt.", en: "Visible where your customer asks for advice." } },
      { title: { nl: "Vroeg erbij", en: "Early mover" }, text: { nl: "Bouw nu aan een nieuw zoekkanaal.", en: "Build on a new search channel now." } },
      { title: { nl: "Consistent", en: "Consistent" }, text: { nl: "Eén helder merkverhaal, op je site en daarbuiten.", en: "One clear brand story, on your site and beyond." } },
    ],
    tools: ["openai", "perplexity", "gemini", "claude", "schema", "semrush"],
    related: ["aeo", "structured-data", "seo-content", "ai-strategie"],
    faqs: [
      {
        q: { nl: "Wat is GEO precies?", en: "What exactly is GEO?" },
        a: {
          nl: "GEO staat voor Generative Engine Optimization: het optimaliseren van je website, content en online aanwezigheid zodat generatieve AI-zoekmachines je merk begrijpen, noemen en als bron citeren in hun antwoorden.",
          en: "GEO stands for Generative Engine Optimization: optimising your website, content and online presence so generative AI search engines understand your brand, mention it and cite it as a source in their answers.",
        },
      },
      {
        q: { nl: "Kan ik een vermelding in ChatGPT afdwingen?", en: "Can I force a mention in ChatGPT?" },
        a: {
          nl: "Nee. Organische vermeldingen in AI-antwoorden kun je niet kopen of afdwingen. Wat je wel kunt doen, is het AI-systemen zo makkelijk mogelijk maken om je te begrijpen en te vertrouwen. Daar richt onze GEO-aanpak zich op.",
          en: "No. Organic mentions in AI answers cannot be bought or forced. What you can do is make it as easy as possible for AI systems to understand and trust you. That is what our GEO approach focuses on.",
        },
      },
      {
        q: { nl: "Wat is een answer hub?", en: "What is an answer hub?" },
        a: {
          nl: "Een answer hub is een kennisbank met heldere antwoorden op veelgestelde vragen uit je vakgebied, elk op een eigen, goed gestructureerde pagina. Zo'n hub helpt bezoekers, en is tegelijk goed vindbaar voor zoekmachines en makkelijk citeerbaar voor AI. M7 heeft er zelf een op answers.m7branding.com.",
          en: "An answer hub is a knowledge base with clear answers to frequently asked questions in your field, each on its own well-structured page. Such a hub helps visitors, while being easy to find for search engines and easy to cite for AI. M7 runs one itself at answers.m7branding.com.",
        },
      },
    ],
    metaDescription: {
      nl: "GEO door M7: vergroot de kans dat ChatGPT, Perplexity, Gemini en Google AI Overviews je merk noemen, met entity SEO, structured data en een answer hub.",
      en: "GEO by M7: increase the chance that ChatGPT, Perplexity, Gemini and Google AI Overviews mention your brand, with entity SEO, structured data and an answer hub.",
    },
  },
  {
    slug: "lokale-seo",
    service: "seo-aeo-geo",
    title: { nl: "Lokale SEO & Google Bedrijfsprofiel", en: "Local SEO & Google Business Profile" },
    summary: {
      nl: "Gevonden worden door klanten in jouw regio, in Google Maps en de lokale resultaten.",
      en: "Get found by customers in your region, in Google Maps and local results.",
    },
    intro: {
      nl: "Zoekt iemand naar een bedrijf zoals het jouwe 'in de buurt'? Met lokale SEO zorgen we dat je zichtbaar bent in Google Maps, de lokale zoekresultaten en AI-antwoorden voor jouw regio, met een sterk Google Bedrijfsprofiel als basis.",
      en: "Is someone searching for a business like yours 'near me'? With local SEO we make you visible in Google Maps, local search results and AI answers for your region, with a strong Google Business Profile as the foundation.",
    },
    body: [
      {
        h: { nl: "Een Google Bedrijfsprofiel dat overtuigt", en: "A Google Business Profile that convinces" },
        body: {
          nl: "We optimaliseren je profiel volledig: categorieën, diensten, openingstijden, foto's, berichten en veelgestelde vragen. Daarnaast helpen we je met een slimme aanpak voor het verzamelen van en reageren op reviews.",
          en: "We fully optimise your profile: categories, services, opening hours, photos, posts and frequently asked questions. We also help you with a smart approach to collecting and responding to reviews.",
        },
      },
      {
        h: { nl: "Lokaal relevant op je website", en: "Locally relevant on your website" },
        body: {
          nl: "Locatiepagina's, LocalBusiness-structured data, consistente NAW-gegevens in online bedrijvengidsen en lokale links maken voor Google duidelijk waar je actief bent. Ideaal voor bedrijven met één vestiging, meerdere locaties of een duidelijk werkgebied.",
          en: "Location pages, LocalBusiness structured data, consistent name, address and phone details in online directories and local links make it clear to Google where you operate. Ideal for businesses with one location, multiple locations or a clear service area.",
        },
      },
    ],
    deliverables: {
      nl: ["Optimalisatie van je Google Bedrijfsprofiel", "Locatie- en regiopagina's", "LocalBusiness structured data", "Consistente NAW-gegevens in bedrijvengidsen", "Reviewstrategie", "Lokale linkbuilding"],
      en: ["Google Business Profile optimisation", "Location and region pages", "LocalBusiness structured data", "Consistent business details in directories", "Review strategy", "Local link building"],
    },
    benefits: [
      { title: { nl: "Dichtbij", en: "Close by" }, text: { nl: "Zichtbaar voor klanten in je regio.", en: "Visible to customers in your region." } },
      { title: { nl: "Vertrouwen", en: "Trust" }, text: { nl: "Reviews en foto's die overtuigen.", en: "Reviews and photos that convince." } },
      { title: { nl: "Direct contact", en: "Direct contact" }, text: { nl: "Bellen of route plannen in één klik.", en: "Call or get directions in one click." } },
    ],
    tools: ["googlebusiness", "searchconsole", "schema", "semrush", "trustpilot"],
    related: ["seo", "structured-data", "linkbuilding", "webflow-website"],
    faqs: [
      {
        q: { nl: "Wat is lokale SEO?", en: "What is local SEO?" },
        a: {
          nl: "Lokale SEO is het optimaliseren van je online aanwezigheid voor zoekopdrachten met een lokale intentie, zoals 'webdesigner Eindhoven' of 'loodgieter in de buurt'. Het draait om je Google Bedrijfsprofiel, lokale content op je website, reviews en consistente bedrijfsgegevens.",
          en: "Local SEO is optimising your online presence for searches with local intent, such as 'web designer Eindhoven' or 'plumber near me'. It revolves around your Google Business Profile, local content on your website, reviews and consistent business details.",
        },
      },
      {
        q: { nl: "Hoe kom ik hoger in Google Maps?", en: "How do I rank higher in Google Maps?" },
        a: {
          nl: "Google kijkt vooral naar relevantie, afstand en bekendheid. Je beïnvloedt dat met een volledig en actief profiel, de juiste categorieën, regelmatig nieuwe reviews met reacties, consistente bedrijfsgegevens en een website met sterke lokale signalen.",
          en: "Google mainly looks at relevance, distance and prominence. You influence that with a complete and active profile, the right categories, regular new reviews with responses, consistent business details and a website with strong local signals.",
        },
      },
      {
        q: { nl: "Kan ik lokaal gevonden worden in steden waar ik geen vestiging heb?", en: "Can I be found locally in cities where I have no office?" },
        a: {
          nl: "Gedeeltelijk. Met een werkgebied in je Google Bedrijfsprofiel en waardevolle regiopagina's op je website kun je zichtbaar worden in omliggende plaatsen. Nep-adressen raden we nadrukkelijk af: dat is in strijd met de richtlijnen van Google.",
          en: "Partly. With a service area in your Google Business Profile and valuable region pages on your website you can become visible in surrounding areas. We strongly advise against fake addresses: they violate Google's guidelines.",
        },
      },
    ],
    metaDescription: {
      nl: "Lokale SEO door M7: een sterk Google Bedrijfsprofiel, locatiepagina's, reviews en LocalBusiness structured data om gevonden te worden in je regio.",
      en: "Local SEO by M7: a strong Google Business Profile, location pages, reviews and LocalBusiness structured data to get found in your region.",
    },
  },
  {
    slug: "linkbuilding",
    service: "seo-aeo-geo",
    title: { nl: "Linkbuilding & digitale PR", en: "Link building & digital PR" },
    summary: {
      nl: "Autoriteit opbouwen met kwalitatieve links en vermeldingen die ertoe doen.",
      en: "Build authority with quality links and mentions that matter.",
    },
    intro: {
      nl: "Links van relevante, betrouwbare websites blijven een belangrijk signaal voor zoekmachines, en vermeldingen op gezaghebbende plekken helpen ook in AI-zoekmachines. We bouwen autoriteit op met een duurzame, white-hat aanpak.",
      en: "Links from relevant, trustworthy websites remain an important signal for search engines, and mentions in authoritative places also help in AI search engines. We build authority with a sustainable, white-hat approach.",
    },
    body: [
      {
        h: { nl: "Kwaliteit boven kwantiteit", en: "Quality over quantity" },
        body: {
          nl: "Geen linkfarms of goedkope pakketten, maar links uit relevante vakmedia, partners, brancheorganisaties en lokale platforms. We analyseren je huidige linkprofiel en dat van concurrenten, en kiezen de kansen die écht iets toevoegen.",
          en: "No link farms or cheap packages, but links from relevant trade media, partners, industry associations and local platforms. We analyse your current link profile and that of competitors, and choose the opportunities that truly add something.",
        },
      },
      {
        h: { nl: "Content die links verdient", en: "Content that earns links" },
        body: {
          nl: "De beste links verdien je met content die het delen waard is: onderzoek, tools, infographics, gidsen en expertbijdragen. We combineren contentcreatie met digitale PR om je merk op de juiste plekken onder de aandacht te brengen.",
          en: "The best links are earned with content worth sharing: research, tools, infographics, guides and expert contributions. We combine content creation with digital PR to put your brand in front of the right audiences.",
        },
      },
    ],
    deliverables: {
      nl: ["Linkprofielanalyse", "Concurrentie- en kansenanalyse", "Outreach naar relevante websites", "Linkwaardige content", "Digitale PR en expertbijdragen", "Rapportage op verkregen links"],
      en: ["Link profile analysis", "Competitor and opportunity analysis", "Outreach to relevant websites", "Linkable content", "Digital PR and expert contributions", "Reporting on acquired links"],
    },
    benefits: [
      { title: { nl: "Autoriteit", en: "Authority" }, text: { nl: "Een sterker domein in de ogen van zoekmachines.", en: "A stronger domain in the eyes of search engines." } },
      { title: { nl: "Relevant verkeer", en: "Relevant traffic" }, text: { nl: "Bezoekers via websites die je doelgroep leest.", en: "Visitors via websites your audience reads." } },
      { title: { nl: "Duurzaam", en: "Sustainable" }, text: { nl: "White-hat, zonder risico op penalty's.", en: "White-hat, without risking penalties." } },
    ],
    tools: ["ahrefs", "semrush", "searchconsole"],
    related: ["seo", "seo-content", "infographics", "geo"],
    faqs: [
      {
        q: { nl: "Is linkbuilding nog belangrijk?", en: "Is link building still important?" },
        a: {
          nl: "Ja. Links van relevante en betrouwbare websites blijven een signaal van autoriteit voor zoekmachines. Wel geldt meer dan ooit: kwaliteit en relevantie wegen zwaarder dan het aantal links.",
          en: "Yes. Links from relevant and trustworthy websites remain a signal of authority for search engines. More than ever, though, quality and relevance outweigh the number of links.",
        },
      },
      {
        q: { nl: "Wat is een goede backlink?", en: "What is a good backlink?" },
        a: {
          nl: "Een goede backlink komt van een relevante, betrouwbare website met echte bezoekers, staat in een logische context en is natuurlijk verdiend. Eén link uit een goed vakmedium is vaak meer waard dan tientallen links van onbekende sites.",
          en: "A good backlink comes from a relevant, trustworthy website with real visitors, sits in a logical context and is naturally earned. One link from a good trade publication is often worth more than dozens of links from unknown sites.",
        },
      },
      {
        q: { nl: "Kopen jullie links?", en: "Do you buy links?" },
        a: {
          nl: "Nee, we kopen geen links die in strijd zijn met de richtlijnen van Google. Betaalde samenwerkingen, zoals gesponsorde artikelen, kunnen prima, mits ze correct worden gemarkeerd. We bouwen liever aan autoriteit die blijft.",
          en: "No, we do not buy links that violate Google's guidelines. Paid partnerships, such as sponsored articles, are fine, provided they are correctly marked. We prefer to build authority that lasts.",
        },
      },
    ],
    metaDescription: {
      nl: "Linkbuilding en digitale PR door M7: kwalitatieve, relevante backlinks en vermeldingen met een duurzame white-hat aanpak die je autoriteit versterkt.",
      en: "Link building and digital PR by M7: quality, relevant backlinks and mentions with a sustainable white-hat approach that strengthens your authority.",
    },
  },
  {
    slug: "seo-content",
    service: "seo-aeo-geo",
    title: { nl: "SEO-content & copywriting", en: "SEO content & copywriting" },
    summary: {
      nl: "Content die scoort in Google, antwoord geeft in AI en converteert.",
      en: "Content that ranks in Google, answers in AI and converts.",
    },
    intro: {
      nl: "Goede SEO-content beantwoordt de vraag van je bezoeker beter dan wie dan ook. Onze copywriters schrijven pagina's, blogs en kennisbankartikelen die vindbaar zijn, citeerbaar voor AI en klinken als jouw merk.",
      en: "Good SEO content answers your visitor's question better than anyone else. Our copywriters write pages, blogs and knowledge base articles that are discoverable, citable for AI and sound like your brand.",
    },
    body: [
      {
        h: { nl: "Topic clusters en pillar pages", en: "Topic clusters and pillar pages" },
        body: {
          nl: "We bouwen inhoudelijke autoriteit op met topic clusters: een uitgebreide pillar page per hoofdonderwerp, ondersteund door verdiepende artikelen die logisch naar elkaar linken. Zo laat je zoekmachines zien dat je een onderwerp volledig beheerst.",
          en: "We build topical authority with topic clusters: an extensive pillar page per main topic, supported by in-depth articles that link to each other logically. That shows search engines you fully master a subject.",
        },
      },
      {
        h: { nl: "Mens eerst, machine ook", en: "Human first, machine too" },
        body: {
          nl: "We schrijven voor mensen, met een structuur die machines helpt: directe antwoorden, duidelijke koppen, opsommingen, bronnen en auteursinformatie. AI zetten we in als hulpmiddel bij onderzoek en structuur, niet als vervanging van expertise en een eigen stem.",
          en: "We write for people, with a structure that helps machines: direct answers, clear headings, lists, sources and author information. We use AI as an aid for research and structure, not as a replacement for expertise and a voice of your own.",
        },
      },
    ],
    deliverables: {
      nl: ["Contentstrategie en topic clusters", "Pillar pages en dienstpagina's", "Blogs en kennisbankartikelen", "FAQ's en antwoordblokken", "Optimalisatie van bestaande content", "Meta titles en descriptions"],
      en: ["Content strategy and topic clusters", "Pillar pages and service pages", "Blogs and knowledge base articles", "FAQs and answer blocks", "Optimisation of existing content", "Meta titles and descriptions"],
    },
    benefits: [
      { title: { nl: "Vindbaar", en: "Discoverable" }, text: { nl: "Geschreven rond echte zoekvragen.", en: "Written around real search queries." } },
      { title: { nl: "Overtuigend", en: "Convincing" }, text: { nl: "Teksten die aanzetten tot actie.", en: "Copy that drives action." } },
      { title: { nl: "Citeerbaar", en: "Citable" }, text: { nl: "Helder genoeg voor AI-antwoorden.", en: "Clear enough for AI answers." } },
    ],
    tools: ["semrush", "ahrefs", "searchconsole", "notion", "claude"],
    related: ["copywriting-blogs", "contentstrategie", "aeo", "tone-of-voice"],
    faqs: [
      {
        q: { nl: "Hoe lang moet een SEO-tekst zijn?", en: "How long should an SEO text be?" },
        a: {
          nl: "Er is geen ideaal aantal woorden. Een tekst moet zo lang zijn als nodig om de vraag van de zoeker volledig en helder te beantwoorden. Voor een korte vraag is dat een paar alinea's, voor een uitgebreid onderwerp een complete gids.",
          en: "There is no ideal word count. A text should be as long as needed to answer the searcher's question completely and clearly. For a short question that is a few paragraphs, for an extensive topic a complete guide.",
        },
      },
      {
        q: { nl: "Mag ik AI gebruiken voor SEO-content?", en: "Can I use AI for SEO content?" },
        a: {
          nl: "Google beoordeelt content op kwaliteit en behulpzaamheid, niet op hoe hij is gemaakt. Massaal gegenereerde content zonder toegevoegde waarde is wel in strijd met de richtlijnen. AI kan een goed hulpmiddel zijn, mits een expert de inhoud controleert, aanvult en er een eigen stem aan geeft.",
          en: "Google assesses content on quality and helpfulness, not on how it was made. Mass-generated content without added value does violate the guidelines. AI can be a good tool, provided an expert reviews and enriches the content and gives it a voice of its own.",
        },
      },
      {
        q: { nl: "Hoe vaak moet ik nieuwe content publiceren?", en: "How often should I publish new content?" },
        a: {
          nl: "Regelmaat helpt, maar kwaliteit gaat voor kwantiteit. Liever twee sterke artikelen per maand dan tien middelmatige. Ook het bijwerken van bestaande content levert vaak veel op.",
          en: "Consistency helps, but quality beats quantity. Better two strong articles a month than ten mediocre ones. Updating existing content often pays off well too.",
        },
      },
    ],
    metaDescription: {
      nl: "SEO-content door M7: topic clusters, pillar pages, blogs en FAQ's die scoren in Google, antwoord geven in AI-zoekmachines en klinken als jouw merk.",
      en: "SEO content by M7: topic clusters, pillar pages, blogs and FAQs that rank in Google, answer in AI search engines and sound like your brand.",
    },
  },
  {
    slug: "structured-data",
    service: "seo-aeo-geo",
    title: { nl: "Structured data & schema markup", en: "Structured data & schema markup" },
    summary: {
      nl: "JSON-LD die zoekmachines en AI precies vertelt wie je bent en wat je biedt.",
      en: "JSON-LD that tells search engines and AI exactly who you are and what you offer.",
    },
    intro: {
      nl: "Met structured data voeg je een laag betekenis toe aan je website. In JSON-LD volgens schema.org vertellen we zoekmachines en AI-systemen precies wat je organisatie, diensten, producten, artikelen en veelgestelde vragen zijn.",
      en: "With structured data you add a layer of meaning to your website. In JSON-LD following schema.org we tell search engines and AI systems exactly what your organisation, services, products, articles and frequently asked questions are.",
    },
    body: [
      {
        h: { nl: "Van rich results tot entiteiten", en: "From rich results to entities" },
        body: {
          nl: "Structured data kan zorgen voor rich results zoals sterren, prijzen, breadcrumbs en evenementen in Google. Minstens zo belangrijk: het helpt zoekmachines en AI je merk als entiteit te begrijpen en te verbinden met je diensten, mensen en locaties.",
          en: "Structured data can lead to rich results such as stars, prices, breadcrumbs and events in Google. Just as important: it helps search engines and AI understand your brand as an entity and connect it to your services, people and locations.",
        },
      },
      {
        h: { nl: "Schaalbaar in je CMS", en: "Scalable in your CMS" },
        body: {
          nl: "We bouwen structured data dynamisch in je CMS, of dat nu Webflow, WordPress of een headless oplossing met Next.js is. Nieuwe pagina's krijgen automatisch de juiste markup, gevalideerd met de Rich Results Test en de Schema Markup Validator.",
          en: "We build structured data dynamically into your CMS, whether that is Webflow, WordPress or a headless solution with Next.js. New pages automatically get the right markup, validated with the Rich Results Test and the Schema Markup Validator.",
        },
      },
    ],
    deliverables: {
      nl: ["Schema-strategie per paginatype", "Organization- en LocalBusiness-markup", "Service-, Product- en Article-markup", "FAQPage- en BreadcrumbList-markup", "Dynamische implementatie in je CMS", "Validatie en monitoring in Search Console"],
      en: ["Schema strategy per page type", "Organization and LocalBusiness markup", "Service, Product and Article markup", "FAQPage and BreadcrumbList markup", "Dynamic implementation in your CMS", "Validation and monitoring in Search Console"],
    },
    benefits: [
      { title: { nl: "Duidelijk", en: "Clear" }, text: { nl: "Zoekmachines en AI begrijpen je content beter.", en: "Search engines and AI understand your content better." } },
      { title: { nl: "Opvallend", en: "Eye-catching" }, text: { nl: "Kans op rich results in Google.", en: "A chance of rich results in Google." } },
      { title: { nl: "Schaalbaar", en: "Scalable" }, text: { nl: "Automatisch op elke nieuwe pagina.", en: "Automatic on every new page." } },
    ],
    tools: ["schema", "searchconsole", "webflow", "wordpress", "nextjs"],
    related: ["technische-seo", "geo", "aeo", "lokale-seo"],
    faqs: [
      {
        q: { nl: "Wat is JSON-LD?", en: "What is JSON-LD?" },
        a: {
          nl: "JSON-LD is het formaat waarin je structured data aan een pagina toevoegt, als los stukje code dat de zichtbare inhoud niet verandert. Het is het formaat dat Google aanbeveelt en het is eenvoudig te beheren en dynamisch te genereren.",
          en: "JSON-LD is the format used to add structured data to a page, as a separate piece of code that does not change the visible content. It is the format Google recommends and it is easy to manage and generate dynamically.",
        },
      },
      {
        q: { nl: "Levert structured data altijd rich results op?", en: "Does structured data always produce rich results?" },
        a: {
          nl: "Nee. Google bepaalt zelf of en wanneer rich results worden getoond, en voor sommige types gelden beperkingen. Zo toont Google FAQ-rich results inmiddels vooral voor overheids- en gezondheidswebsites. De markup helpt wel altijd om je content beter te laten begrijpen.",
          en: "No. Google decides whether and when rich results are shown, and some types have restrictions. For example, Google now shows FAQ rich results mainly for government and health websites. The markup always helps your content be better understood, though.",
        },
      },
      {
        q: { nl: "Kunnen jullie structured data toevoegen aan mijn bestaande website?", en: "Can you add structured data to my existing website?" },
        a: {
          nl: "Ja. We analyseren welke paginatypes je hebt, bepalen per type de juiste markup en implementeren die in je bestaande Webflow-, WordPress- of maatwerkwebsite.",
          en: "Yes. We analyse which page types you have, determine the right markup per type and implement it in your existing Webflow, WordPress or custom website.",
        },
      },
    ],
    metaDescription: {
      nl: "Structured data door M7: schema markup in JSON-LD voor organisatie, diensten, producten en artikelen. Beter begrepen door Google en AI-zoekmachines.",
      en: "Structured data by M7: schema markup in JSON-LD for organisation, services, products and articles. Better understood by Google and AI search engines.",
    },
  },
  {
    slug: "seo-audit",
    service: "seo-aeo-geo",
    title: { nl: "SEO-audit", en: "SEO audit" },
    summary: {
      nl: "Een helder beeld van je vindbaarheid in Google én AI, met een concreet actieplan.",
      en: "A clear picture of your visibility in Google and AI, with a concrete action plan.",
    },
    intro: {
      nl: "Waarom scoort je website niet zoals je zou willen? Met een SEO-audit analyseren we techniek, content, autoriteit en je zichtbaarheid in AI-zoekmachines, en vertalen we de bevindingen naar een geprioriteerd actieplan.",
      en: "Why is your website not performing the way you want? With an SEO audit we analyse technology, content, authority and your visibility in AI search engines, and translate the findings into a prioritised action plan.",
    },
    body: [
      {
        h: { nl: "Breed en diep", en: "Broad and deep" },
        body: {
          nl: "We crawlen je volledige website met Screaming Frog, analyseren data uit Search Console, GA4 en Bing Webmaster Tools en vergelijken je zichtbaarheid met concurrenten in Semrush of Ahrefs. Ook toetsen we hoe je merk naar voren komt in ChatGPT, Perplexity en Google AI Overviews.",
          en: "We crawl your entire website with Screaming Frog, analyse data from Search Console, GA4 and Bing Webmaster Tools and compare your visibility with competitors in Semrush or Ahrefs. We also check how your brand shows up in ChatGPT, Perplexity and Google AI Overviews.",
        },
      },
      {
        h: { nl: "Prioriteiten in plaats van een lijst", en: "Priorities instead of a list" },
        body: {
          nl: "Geen rapport van honderd pagina's vol waarschuwingen, maar een helder overzicht van wat het meeste oplevert voor de minste moeite. We lichten alles toe in een persoonlijk gesprek en voeren de verbeteringen desgewenst direct zelf door.",
          en: "Not a hundred-page report full of warnings, but a clear overview of what delivers the most for the least effort. We explain everything in a personal meeting and, if you wish, implement the improvements ourselves right away.",
        },
      },
    ],
    deliverables: {
      nl: ["Technische SEO-analyse", "Content- en zoekwoordanalyse", "Linkprofiel- en concurrentieanalyse", "Check op AI-zichtbaarheid", "Geprioriteerd actieplan", "Toelichting in een persoonlijk gesprek"],
      en: ["Technical SEO analysis", "Content and keyword analysis", "Link profile and competitor analysis", "AI visibility check", "Prioritised action plan", "Walkthrough in a personal meeting"],
    },
    benefits: [
      { title: { nl: "Inzicht", en: "Insight" }, text: { nl: "Je weet precies waar je staat.", en: "You know exactly where you stand." } },
      { title: { nl: "Prioriteit", en: "Priority" }, text: { nl: "Eerst wat het meeste oplevert.", en: "What delivers most comes first." } },
      { title: { nl: "Direct toepasbaar", en: "Ready to apply" }, text: { nl: "Concrete acties, geen vaag advies.", en: "Concrete actions, no vague advice." } },
    ],
    tools: ["screamingfrog", "searchconsole", "bing", "semrush", "ahrefs", "pagespeed"],
    related: ["technische-seo", "seo", "website-migratie", "geo"],
    faqs: [
      {
        q: { nl: "Wat kost een SEO-audit?", en: "How much does an SEO audit cost?" },
        a: {
          nl: "Een SEO-audit is er vanaf enkele honderden euro's voor een compacte website, oplopend tot een paar duizend euro voor grote of meertalige websites en webshops. In de configurator op letsgo.m7branding.com zie je direct een indicatie.",
          en: "An SEO audit starts at a few hundred euros for a compact website, rising to a few thousand euros for large or multilingual websites and web shops. The configurator at letsgo.m7branding.com shows an indication right away.",
        },
      },
      {
        q: { nl: "Hoe lang duurt een SEO-audit?", en: "How long does an SEO audit take?" },
        a: {
          nl: "Gemiddeld 1 tot 3 weken, afhankelijk van de omvang van je website en het aantal talen. Daarna bespreken we de bevindingen en het actieplan samen.",
          en: "On average 1 to 3 weeks, depending on the size of your website and the number of languages. Afterwards we go through the findings and action plan together.",
        },
      },
      {
        q: { nl: "Wanneer is een SEO-audit verstandig?", en: "When does an SEO audit make sense?" },
        a: {
          nl: "Bijvoorbeeld als je verkeer daalt, voor of na een websitemigratie of redesign, als je wilt weten waarom concurrenten beter scoren of als je wilt starten met SEO en eerst een nulmeting wilt.",
          en: "For example when your traffic drops, before or after a website migration or redesign, when you want to know why competitors rank better or when you want to start with SEO and need a baseline first.",
        },
      },
    ],
    metaDescription: {
      nl: "SEO-audit door M7: analyse van techniek, content, links en AI-zichtbaarheid, vertaald naar een helder en geprioriteerd actieplan.",
      en: "SEO audit by M7: analysis of technology, content, links and AI visibility, translated into a clear and prioritised action plan.",
    },
  },
];
