import type { Application, Service } from "../types";

export const service: Service = {
  slug: "ai-consultancy",
  order: 10,
  title: { nl: "AI & Consultancy", en: "AI & Consultancy" },
  short: { nl: "AI", en: "AI" },
  color: "#B44DFF",
  icon: "ai",
  mockup: "ai",
  tagline: { nl: "Work smarter with AI.", en: "Work smarter with AI." },
  intro: {
    nl: "Slimmer en efficiënter werken met AI: van chatbots en AI-agents tot strategie en training. Wij maken AI praktisch, veilig en direct bruikbaar in jouw organisatie.",
    en: "Work smarter and more efficiently with AI: from chatbots and AI agents to strategy and training. We make AI practical, safe and immediately useful in your organisation.",
  },
  description: {
    nl: "AI is geen hype meer, maar gereedschap dat je team elke dag tijd kan besparen. Toch blijft het bij veel bedrijven bij losse experimenten met ChatGPT. M7 helpt je de stap te zetten naar AI die echt werkt: een assistent die klantvragen beantwoordt op basis van jouw eigen kennis, agents die repetitieve taken overnemen en slimme koppelingen met de software die je al gebruikt.\n\nWe combineren strategie met bouwen. Eerst bepalen we samen waar AI de meeste waarde oplevert en wat er nodig is op het gebied van data, privacy en de EU AI Act. Daarna ontwikkelen, koppelen en trainen we, zodat je team er met vertrouwen mee werkt. En omdat we ook websites, apps en marketing maken, past elke AI-oplossing gewoon bij je merk en je bestaande systemen.",
    en: "AI is no longer hype, but a tool that can save your team time every single day. Yet for many companies it never gets beyond loose experiments with ChatGPT. M7 helps you take the step to AI that actually works: an assistant that answers customer questions based on your own knowledge, agents that take over repetitive tasks and smart connections with the software you already use.\n\nWe combine strategy with building. First we decide together where AI adds the most value and what is needed in terms of data, privacy and the EU AI Act. Then we develop, integrate and train, so your team works with it confidently. And because we also build websites, apps and marketing, every AI solution simply fits your brand and your existing systems.",
  },
  highlights: [
    { value: "250+", label: { nl: "Klanten wereldwijd", en: "Clients worldwide" } },
    { value: "24/7", label: { nl: "Bereikbaar met een AI-assistent", en: "Available with an AI assistant" } },
    { value: "1", label: { nl: "Team voor AI, web & automatisering", en: "Team for AI, web & automation" } },
  ],
  terms: [
    "AI-strategie",
    "AI-roadmap",
    "AI-chatbot",
    "AI-assistent",
    "AI-agents",
    "Kennisbank-assistent",
    "RAG",
    "LLM",
    "Prompt engineering",
    "OpenAI API",
    "Claude API",
    "Gemini API",
    "AI-integratie",
    "Workflow-automatisering",
    "AI-workshops",
    "AI-content",
    "Voice AI",
    "AVG / GDPR",
    "EU AI Act",
    "Digitale strategie",
    "IT-projectmanagement",
    "IT-consultancy",
  ],
  tools: ["openai", "claude", "gemini", "perplexity", "midjourney", "runway", "elevenlabs", "huggingface", "langchain", "make", "n8n", "zapier", "notion", "supabase"],
  process: [
    {
      title: { nl: "Quick scan & kansen", en: "Quick scan & opportunities" },
      text: {
        nl: "We brengen je processen, data en tools in kaart en zoeken waar AI tijd bespaart of de kwaliteit verhoogt. Concreet, zonder buzzwords.",
        en: "We map your processes, data and tools and look for where AI saves time or raises quality. Concrete, without buzzwords.",
      },
    },
    {
      title: { nl: "Strategie & roadmap", en: "Strategy & roadmap" },
      text: {
        nl: "We prioriteren use cases op impact en haalbaarheid en maken heldere afspraken over data, privacy en de EU AI Act.",
        en: "We prioritise use cases by impact and feasibility and make clear agreements on data, privacy and the EU AI Act.",
      },
    },
    {
      title: { nl: "Prototype & validatie", en: "Prototype & validation" },
      text: {
        nl: "Snel een werkend prototype met jouw eigen data, zodat je ziet en voelt wat AI oplevert voordat je verder investeert.",
        en: "A working prototype with your own data, fast, so you see and feel what AI delivers before investing further.",
      },
    },
    {
      title: { nl: "Bouw & integratie", en: "Build & integration" },
      text: {
        nl: "We werken de oplossing volledig uit en koppelen die veilig aan je website, CRM, kennisbank of interne systemen.",
        en: "We build out the full solution and connect it securely to your website, CRM, knowledge base or internal systems.",
      },
    },
    {
      title: { nl: "Training & doorontwikkeling", en: "Training & continuous improvement" },
      text: {
        nl: "We trainen je team, bewaken de kwaliteit van de antwoorden en verbeteren de oplossing continu op basis van echt gebruik.",
        en: "We train your team, monitor the quality of the answers and keep improving the solution based on real-world use.",
      },
    },
  ],
  chapters: [
    {
      kicker: { nl: "Start with the boring stuff.", en: "Start with the boring stuff." },
      h: {
        nl: "Je eerste AI-toepassing kiezen",
        en: "Choosing your first AI use case",
      },
      body: {
        nl: "Veel bedrijven beginnen met AI bij de verkeerde vraag: wat kan AI allemaal? Het eerlijke antwoord is: heel veel. Alleen heb je daar op een dinsdagmiddag weinig aan.\n\nEen betere vraag: welk werk kost ons elke week tijd, gaat steeds ongeveer hetzelfde en draait om tekst of informatie? Daar zit je eerste use case. Een paar herkenbare kandidaten:\n- Steeds dezelfde klantvragen beantwoorden, via mail, telefoon of chat\n- Gegevens overtypen van mail of formulier naar je CRM, klassiek werk voor [[workflow-automatisering|workflow-automatisering]] met een slimme AI-stap erin\n- Offertes of rapportages opbouwen uit vaste bouwstenen\n- Collega's die elkaar steeds dezelfde interne vragen stellen\n\nKies er één. Liefst iets met duidelijke winst en beperkt risico. Een prototype met je eigen data laat dan snel zien of het werkt, voordat je verder investeert.\n\nWaar het vaak misgaat: meteen een groot programma optuigen, met vijf toepassingen tegelijk en een stuurgroep. Dan ben je maanden verder en heeft nog niemand iets gebruikt. Of, zoals we hier in Brabant zeggen: gewoon doen. Wel met een plan, en met iemand naast je die de valkuilen kent.",
        en: "Many companies start with AI by asking the wrong question: what can AI do? The honest answer is: a lot. Which isn't much use to you on a Tuesday afternoon.\n\nA better question: which work costs us time every week, goes roughly the same way every time and revolves around text or information? That is where your first use case lives. A few familiar candidates:\n- Answering the same customer questions over and over, by email, phone or chat\n- Retyping data from emails or forms into your CRM, classic territory for [[workflow-automatisering|workflow automation]] with a smart AI step added\n- Building quotes or reports from standard building blocks\n- Colleagues asking each other the same internal questions\n\nPick one. Ideally something with a clear gain and limited risk. A prototype with your own data then quickly shows whether it works, before you invest further.\n\nWhere it often goes wrong: setting up a big programme straight away, with five use cases at once and a steering committee. Months later, nobody has used anything yet. Our advice is refreshingly down-to-earth: just get started. With a plan, though, and with someone beside you who knows where the pitfalls are.",
      },
      quote: {
        nl: "Begin niet bij wat AI allemaal kan, maar bij het werk waar je team elke week tegenop ziet.",
        en: "Start not with everything AI can do, but with the work your team dreads every week.",
      },
    },
    {
      kicker: { nl: "No magic wand.", en: "No magic wand." },
      h: {
        nl: "Waarom AI-projecten stranden, en hoe je dat voorkomt",
        en: "Why AI projects stall, and how to prevent it",
      },
      body: {
        nl: "AI is geen toverstaf. Het is eerder een razendsnelle stagiair: leergierig, onvermoeibaar, en hij haalt nooit koffie. Maar geef je hem rommelige informatie en een vage opdracht, dan krijg je rommelig werk terug.\n\nDe valkuilen die we het vaakst tegenkomen:\n- Geen helder doel. 'Iets met AI' is geen opdracht. 'Vragen over levertijden sneller beantwoorden' wel.\n- Verouderde of verspreide kennis. Een assistent is zo goed als de documenten waar hij uit put. Opruimen hoort bij het project.\n- Geen eigenaar. Wie beoordeelt de antwoorden, en wie past de kennis aan als er iets verandert?\n- Een team dat niet wordt meegenomen. Een tool die mensen niet vertrouwen of niet snappen, blijft ongebruikt.\n- Geen menselijke controle waar het ertoe doet. Laat AI voorbereiden en laat een mens beslissen bij alles met impact.\n\nWat ook vaak vergeten wordt: AI praat namens je merk. Een chatbot die anders klinkt dan de rest van je communicatie, voelt als een vreemde achter de balie. Daarom nemen we je [[tone-of-voice|tone of voice]] mee in de instructies, zodat de assistent klinkt zoals jij. Of dat nu formeel is of juist lekker los.",
        en: "AI is not a magic wand. It is more like a lightning-fast intern: eager, tireless, and never makes coffee. But hand it messy information and a vague brief, and you get messy work back.\n\nThe pitfalls we run into most often:\n- No clear goal. 'Something with AI' is not a brief. 'Answering delivery time questions faster' is.\n- Outdated or scattered knowledge. An assistant is only as good as the documents it draws from. Tidying up is part of the project.\n- No owner. Who reviews the answers, and who updates the knowledge when something changes?\n- A team that isn't brought along. A tool people don't trust or understand stays unused.\n- No human oversight where it matters. Let AI prepare, and let a person decide on anything with impact.\n\nSomething else that is often forgotten: AI speaks on behalf of your brand. A chatbot that sounds different from the rest of your communication feels like a stranger behind the counter. That is why we build your [[tone-of-voice|tone of voice]] into the instructions, so the assistant sounds like you. Whether that is formal or nicely relaxed.",
      },
      quote: {
        nl: "Een AI-assistent is precies zo slim als de informatie die je hem geeft.",
        en: "An AI assistant is exactly as smart as the information you give it.",
      },
    },
    {
      kicker: { nl: "AI likes good company.", en: "AI likes good company." },
      h: {
        nl: "Wat AI van jou vraagt, en waar het op aansluit",
        en: "What AI asks of you, and what it connects to",
      },
      body: {
        nl: "Een AI-oplossing bouw je niet in een vacuüm. Hij moet ergens wonen en ergens mee praten: op je website, in je mailbox, in Teams of Slack, gekoppeld aan je CRM of je eigen software. Hoe beter die basis op orde is, hoe makkelijker AI erop aansluit. Draait je bedrijf op een eigen [[web-apps-portals-apps|portaal of app]], dan bouwen we AI daar direct in.\n\nVan jou vragen we vooral drie dingen:\n- Kennis: de documenten, antwoorden en afspraken waar de AI uit mag putten\n- Tijd om te testen: een paar collega's die het prototype echt gebruiken en eerlijk zeggen waar het schuurt\n- Een eigenaar: iemand die na de livegang de kwaliteit bewaakt en het vaste aanspreekpunt is\n\nEn dan is er nog de andere kant van AI. Steeds meer mensen stellen hun vragen niet alleen aan Google, maar ook aan ChatGPT, Perplexity of Gemini. Of jouw bedrijf in die antwoorden opduikt, hangt af van hoe je content en je website zijn ingericht. Dat vak heet [[geo|GEO]]. Het is het spiegelbeeld van dit verhaal: niet AI voor jou laten werken, maar zorgen dat AI jou kan vinden. Het een versterkt het ander.",
        en: "You don't build an AI solution in a vacuum. It has to live somewhere and talk to something: on your website, in your mailbox, in Teams or Slack, connected to your CRM or your own software. The better that foundation, the easier AI plugs into it. If your business runs on its own [[web-apps-portals-apps|portal or app]], we build AI straight into it.\n\nFrom you, we mainly need three things:\n- Knowledge: the documents, answers and agreements the AI is allowed to draw from\n- Time to test: a few colleagues who actually use the prototype and say honestly where it rubs\n- An owner: someone who keeps an eye on quality after launch and is the go-to contact\n\nThen there is the other side of AI. More and more people ask their questions not just to Google, but also to ChatGPT, Perplexity or Gemini. Whether your business shows up in those answers depends on how your content and website are set up. That discipline is called [[geo|GEO]]. It is the mirror image of this story: not getting AI to work for you, but making sure AI can find you. One strengthens the other.",
      },
    },
  ],
  seo: {
    title: {
      nl: "AI inzetten in je bedrijf, met een bureau dat ook bouwt",
      en: "Putting AI to work in your business, with an agency that also builds",
    },
    sections: [
      {
        h: { nl: "Wat kan AI concreet voor je bedrijf doen?", en: "What can AI actually do for your business?" },
        body: {
          nl: "AI is op zijn best bij werk dat veel tijd kost, steeds terugkomt en draait om tekst, kennis of data. Het soort klussen waar niemand ooit voor heeft gesolliciteerd. Denk aan:\n- Klantvragen 24/7 beantwoorden met een AI-chatbot op je website\n- Interne kennis direct vindbaar maken met een kennisbank-assistent\n- Offertes, samenvattingen en rapportages automatisch voorbereiden\n- Inkomende e-mails, formulieren en documenten lezen, sorteren en verwerken\n- Content maken in tekst, beeld, video en voice\n\nAI om de AI doen we niet. We kijken waar je team nu tijd verliest of waar klanten op een antwoord wachten, en zetten AI precies daar in. Dan houden je mensen tijd over voor het werk waarin zij het verschil maken: advies, creativiteit en persoonlijk contact.\n\nEn nee, je hebt geen eigen datateam nodig om verstandig te beginnen. Ook kleinere organisaties halen er winst uit. Eén goed gekozen eerste toepassing zegt meer dan een dik rapport.",
          en: "AI is at its best on work that takes a lot of time, keeps coming back and revolves around text, knowledge or data. The kind of tasks nobody ever applied for. Think of:\n- Answering customer questions 24/7 with an AI chatbot on your website\n- Making internal knowledge instantly findable with a knowledge base assistant\n- Preparing quotes, summaries and reports automatically\n- Reading, sorting and processing incoming emails, forms and documents\n- Creating content in text, images, video and voice\n\nWe don't do AI for the sake of AI. We look at where your team loses time today or where customers are waiting for an answer, and apply AI exactly there. That leaves your people time for the work where they make the difference: advice, creativity and personal contact.\n\nAnd no, you don't need your own data team to start sensibly. Smaller organisations benefit too. One well-chosen first use case says more than a thick report.",
        },
      },
      {
        h: { nl: "Chatbot, AI-agent of integratie: wat is het verschil?", en: "Chatbot, AI agent or integration: what is the difference?" },
        body: {
          nl: "Drie termen die vaak door elkaar lopen. Even op een rij.\n\nEen AI-chatbot of assistent voert een gesprek en beantwoordt vragen, bijvoorbeeld op basis van je website, handleidingen en veelgestelde vragen. Met RAG (retrieval-augmented generation) zoekt de assistent eerst in jouw eigen documenten en baseert hij zijn antwoord daarop, met bronvermelding. Minder verzinnen, meer onderbouwen.\n\nEen AI-agent gaat een stap verder: die doet ook echt iets. Hij leest bijvoorbeeld een aanvraag, zoekt gegevens op in je CRM, zet een conceptofferte klaar en vraagt een collega om akkoord. Met Make, n8n of Zapier koppelen we zo'n agent aan de tools die je al gebruikt.\n\nBij een AI-integratie bouwen we AI direct in je bestaande software, portaal of app, via de API's van OpenAI, Claude of Gemini. Denk aan een slimme zoekfunctie, automatische classificatie of een schrijfassistent in je eigen platform. Je gebruikers merken vooral dat alles handiger werkt.",
          en: "Three terms that often get mixed up. Here they are side by side.\n\nAn AI chatbot or assistant holds a conversation and answers questions, for example based on your website, manuals and FAQs. With RAG (retrieval-augmented generation) the assistant first searches your own documents and bases its answer on them, with sources. Less making things up, more backing things up.\n\nAn AI agent goes one step further: it actually does things. It might read a request, look up data in your CRM, prepare a draft quote and ask a colleague for approval. With Make, n8n or Zapier we connect such an agent to the tools you already use.\n\nWith an AI integration we build AI directly into your existing software, portal or app, through the APIs of OpenAI, Claude or Gemini. Think of a smart search function, automatic classification or a writing assistant inside your own platform. Your users mostly notice that everything just works more smoothly.",
        },
      },
      {
        h: { nl: "Veilig en verantwoord: AVG en de EU AI Act", en: "Safe and responsible: GDPR and the EU AI Act" },
        body: {
          nl: "AI werkt met data, en vaak met gevoelige data. Dus beginnen we niet bij de techniek, maar bij heldere afspraken:\n- Zakelijke API's waarbij je data standaard niet wordt gebruikt om modellen te trainen\n- Waar mogelijk opslag en verwerking binnen de EU\n- Alleen toegang tot de data die echt nodig is, met rollen en logging\n- Transparantie richting gebruikers: ze weten dat ze met AI communiceren\n- Menselijke controle bij beslissingen met impact\n\nDe EU AI Act stelt eisen aan onder meer transparantie, risicobeheersing en AI-geletterdheid binnen organisaties. Wij helpen je die te vertalen naar praktische keuzes in je oplossing en je werkwijze. Voor de juridische kant werken we graag samen met je eigen privacy- of juridisch adviseur. Wij zijn bouwers, geen advocaten, en dat houden we graag zo.\n\nZo combineer je de snelheid van AI met de zorgvuldigheid die je klanten van je verwachten.",
          en: "AI works with data, and often with sensitive data. So we don't start with the technology, but with clear agreements:\n- Business APIs where your data is not used to train models by default\n- Storage and processing within the EU wherever possible\n- Access only to the data that is truly needed, with roles and logging\n- Transparency towards users: they know they are communicating with AI\n- Human oversight for decisions with impact\n\nThe EU AI Act sets requirements for, among other things, transparency, risk management and AI literacy within organisations. We help you translate those into practical choices in your solution and your way of working. For the legal side, we are happy to work alongside your own privacy or legal advisor. We are builders, not lawyers, and we like to keep it that way.\n\nThat way you combine the speed of AI with the care your customers expect from you.",
        },
      },
      {
        h: { nl: "Meer dan techniek: strategie, training en projectmanagement", en: "More than technology: strategy, training and project management" },
        body: {
          nl: "Een AI-tool die niemand gebruikt, is een dure screensaver. Daarom combineren we bouwen met begeleiden. Met een AI-strategie en roadmap weet je welke stappen je zet en in welke volgorde. In praktische workshops leert je team prompten, de juiste tools kiezen en AI veilig gebruiken in het dagelijkse werk. Geen theorie voor de bühne, wel dingen die je morgen kunt gebruiken.\n\nOok bij bredere digitale vraagstukken denken we mee: van digitale strategie tot IT-consultancy en projectmanagement bij de invoering van nieuwe systemen. Je krijgt één aanspreekpunt dat zowel de business als de techniek snapt, en dat bewaakt dat planning, budget en kwaliteit kloppen.\n\nZo wordt digitalisering geen la vol losse tools en abonnementen, maar een geheel dat je organisatie echt vooruithelpt. We werken in overzichtelijke fases met duidelijke opleverpunten. Je weet dus altijd waar je staat en wat de volgende stap is.",
          en: "An AI tool nobody uses is an expensive screensaver. That is why we combine building with guidance. With an AI strategy and roadmap you know which steps to take and in what order. In practical workshops your team learns to prompt, choose the right tools and use AI safely in their daily work. No theory for show, just things you can use tomorrow.\n\nWe also help with broader digital questions: from digital strategy to IT consultancy and project management when introducing new systems. You get a single point of contact who understands both the business and the technology, and who makes sure planning, budget and quality stay on track.\n\nThat way digitalisation isn't a drawer full of loose tools and subscriptions, but a whole that genuinely moves your organisation forward. We work in clear phases with well-defined deliverables. So you always know where you stand and what the next step is.",
        },
      },
      {
        h: { nl: "Waarom M7 voor AI en consultancy?", en: "Why M7 for AI and consultancy?" },
        body: {
          nl: "M7 is een compact team van creatieve en technische specialisten. Geen theoretisch adviesbureau dat een rapport achterlaat, en geen softwarebouwer die alleen doet wat er in het ticket staat. We zitten daar precies tussenin: we bedenken, bouwen en implementeren. Omdat we dagelijks werken aan websites, apps, automatiseringen en marketing voor 250+ klanten, weten we hoe AI past in je klantreis en je bestaande systemen.\n\nWe zijn modelonafhankelijk. We werken met OpenAI, Claude, Gemini en open-source modellen, en kiezen per toepassing wat het beste werkt op kwaliteit, snelheid, kosten en privacy. Geen vaste favoriet, wel een eerlijke vergelijking.\n\nJe werkt direct met de mensen die aan je oplossing bouwen, en ook na de livegang blijven we betrokken voor beheer, monitoring en doorontwikkeling. Vanuit Nistelrode, in de regio Eindhoven, helpen we organisaties in heel Nederland, België en daarbuiten om slimmer te werken.",
          en: "M7 is a compact team of creative and technical specialists. Not a theoretical consultancy that leaves a report behind, and not a software house that only does what the ticket says. We sit right in between: we conceive, build and implement. Because we work every day on websites, apps, automations and marketing for 250+ clients, we know how AI fits into your customer journey and your existing systems.\n\nWe are model-agnostic. We work with OpenAI, Claude, Gemini and open-source models, and choose per use case what works best in terms of quality, speed, cost and privacy. No fixed favourite, just an honest comparison.\n\nYou work directly with the people building your solution, and after go-live we stay involved for maintenance, monitoring and further development. From Nistelrode, in the Eindhoven region, we help organisations throughout the Netherlands, Belgium and beyond to work smarter.",
        },
      },
    ],
  },
  faqs: [
    {
      q: { nl: "Wat kost een AI-chatbot?", en: "How much does an AI chatbot cost?" },
      a: {
        nl: "Dat hangt af van wat de chatbot moet kunnen. Een assistent die je website en veelgestelde vragen kent, is er al vanaf enkele duizenden euro's. Koppelingen met je CRM, orderstatus of interne systemen, meerdere kanalen en uitgebreide rapportages maken het een groter traject. Daarnaast betaal je doorlopend voor hosting en API-gebruik, afhankelijk van het aantal gesprekken.\n\nOp letsgo.m7branding.com zie je indicatieve prijzen voor onze diensten, of plan een kennismaking voor een voorstel op maat.",
        en: "It depends on what the chatbot needs to do. An assistant that knows your website and FAQs starts from a few thousand euros. Connections with your CRM, order status or internal systems, multiple channels and extensive reporting make it a larger project. On top of that you pay ongoing costs for hosting and API usage, depending on the number of conversations.\n\nAt letsgo.m7branding.com you can see indicative prices for our services, or book an intro call for a tailored proposal.",
      },
    },
    {
      q: { nl: "Is AI veilig voor mijn bedrijfsdata?", en: "Is AI safe for my business data?" },
      a: {
        nl: "Ja, als je het goed inricht. We werken met zakelijke API's van onder meer OpenAI, Anthropic (Claude) en Google, waarbij je data standaard niet wordt gebruikt om hun modellen te trainen. Waar mogelijk kiezen we voor verwerking binnen de EU, en de assistent krijgt alleen toegang tot de informatie die nodig is.\n\nVoor extra gevoelige data kunnen we ook werken met open-source modellen in een afgeschermde omgeving. We maken vooraf heldere afspraken over welke data waar naartoe gaat en sluiten waar nodig een verwerkersovereenkomst.",
        en: "Yes, if you set it up properly. We work with business APIs from OpenAI, Anthropic (Claude) and Google, among others, where your data is not used to train their models by default. Wherever possible we choose processing within the EU, and the assistant only gets access to the information it needs.\n\nFor extra sensitive data we can also work with open-source models in a shielded environment. We agree upfront on which data goes where and sign a data processing agreement where needed.",
      },
    },
    {
      q: { nl: "Wat is een AI-agent?", en: "What is an AI agent?" },
      a: {
        nl: "Een AI-agent is AI die niet alleen antwoordt, maar ook zelfstandig taken uitvoert. Een agent kan bijvoorbeeld een inkomende aanvraag lezen, informatie opzoeken in je CRM of documenten, een conceptantwoord of offerte klaarzetten en die ter controle aan een collega voorleggen. Je bepaalt zelf welke stappen de agent zelfstandig mag zetten en waar een mens akkoord geeft.",
        en: "An AI agent is AI that does not just answer, but also carries out tasks on its own. An agent can, for example, read an incoming request, look up information in your CRM or documents, prepare a draft reply or quote and put it in front of a colleague for review. You decide which steps the agent may take on its own and where a human gives approval.",
      },
    },
    {
      q: { nl: "Welk AI-model gebruiken jullie: ChatGPT, Claude of Gemini?", en: "Which AI model do you use: ChatGPT, Claude or Gemini?" },
      a: {
        nl: "Dat kiezen we per toepassing. We werken modelonafhankelijk met onder meer OpenAI (ChatGPT), Claude van Anthropic, Google Gemini en open-source modellen via Hugging Face. Het ene model is sterker met lange documenten, het andere sneller of voordeliger. We testen met jouw eigen data en kiezen wat het beste past bij kwaliteit, snelheid, kosten en privacy. Je zit daarbij niet vast aan één leverancier.",
        en: "We choose per use case. We are model-agnostic and work with OpenAI (ChatGPT), Claude by Anthropic, Google Gemini and open-source models via Hugging Face, among others. One model is stronger with long documents, another faster or more affordable. We test with your own data and choose what best fits quality, speed, cost and privacy. You are not locked in to a single vendor.",
      },
    },
    {
      q: { nl: "Wat is RAG en waarom is dat belangrijk?", en: "What is RAG and why does it matter?" },
      a: {
        nl: "RAG staat voor retrieval-augmented generation. De AI zoekt eerst de relevante stukken op in jouw eigen documenten, zoals handleidingen, beleid, productinformatie of eerdere offertes, en baseert het antwoord daarop. Dat maakt antwoorden actueler, specifieker en controleerbaar, omdat de assistent kan laten zien waar de informatie vandaan komt. Zo verklein je de kans dat AI dingen verzint.",
        en: "RAG stands for retrieval-augmented generation. The AI first looks up the relevant passages in your own documents, such as manuals, policies, product information or previous quotes, and bases its answer on them. That makes answers more current, more specific and verifiable, because the assistant can show where the information comes from. It reduces the chance of AI making things up.",
      },
    },
    {
      q: { nl: "Hoe gaan jullie om met de AVG en de EU AI Act?", en: "How do you handle the GDPR and the EU AI Act?" },
      a: {
        nl: "Die nemen we vanaf de eerste sessie mee. We kijken welke persoonsgegevens er worden verwerkt, waar die worden opgeslagen en wie er toegang toe heeft. Gebruikers weten altijd dat ze met AI communiceren, en bij beslissingen met impact blijft een mens betrokken. De EU AI Act vraagt daarnaast aandacht voor de risico's van een toepassing en voor AI-geletterdheid in je team.\n\nWe vertalen dit naar praktische keuzes in ontwerp en techniek. Voor juridisch advies schakelen we graag met je eigen adviseur.",
        en: "We include them from the very first session. We look at which personal data is processed, where it is stored and who has access to it. Users always know they are communicating with AI, and a human stays involved in decisions with impact. The EU AI Act also asks for attention to the risks of an application and to AI literacy within your team.\n\nWe translate this into practical choices in design and technology. For legal advice we are happy to coordinate with your own advisor.",
      },
    },
    {
      q: { nl: "Kan AI gekoppeld worden aan mijn bestaande software?", en: "Can AI be connected to my existing software?" },
      a: {
        nl: "In de meeste gevallen wel. Via API's, webhooks en tools als Make, n8n en Zapier koppelen we AI aan je website, CRM (zoals HubSpot, Odoo of Pipedrive), mailbox, kennisbank, Notion, Google Workspace of eigen software. Heeft je systeem geen open koppeling? Dan zoeken we samen naar een alternatief, zoals een export of een tussenlaag.",
        en: "In most cases, yes. Through APIs, webhooks and tools such as Make, n8n and Zapier we connect AI to your website, CRM (such as HubSpot, Odoo or Pipedrive), mailbox, knowledge base, Notion, Google Workspace or custom software. Does your system have no open interface? Then we look for an alternative together, such as an export or a middleware layer.",
      },
    },
    {
      q: { nl: "Hoe lang duurt het om een AI-oplossing te bouwen?", en: "How long does it take to build an AI solution?" },
      a: {
        nl: "Een eerste prototype met je eigen data staat vaak binnen enkele weken. Een afgebakende chatbot of automatisering is meestal in 2 tot 6 weken live. Uitgebreidere agents of integraties in bestaande software duren langer, afhankelijk van het aantal koppelingen, testrondes en de beschikbaarheid van data.",
        en: "A first prototype with your own data is often ready within a few weeks. A well-defined chatbot or automation usually goes live in 2 to 6 weeks. More extensive agents or integrations into existing software take longer, depending on the number of connections, test rounds and the availability of data.",
      },
    },
    {
      q: { nl: "Wat zijn de doorlopende kosten van AI?", en: "What are the ongoing costs of AI?" },
      a: {
        nl: "Naast de eenmalige ontwikkeling betaal je voor het gebruik van het AI-model (per verwerkte hoeveelheid tekst), hosting en eventueel beheer en doorontwikkeling. Voor veel mkb-toepassingen blijven de API-kosten beperkt, maar ze groeien mee met het gebruik. We geven vooraf een realistische inschatting en bouwen limieten en monitoring in, zodat je de kosten in de hand houdt.",
        en: "On top of the one-off development you pay for using the AI model (per amount of text processed), hosting and, optionally, maintenance and further development. For many SME use cases API costs stay modest, but they grow with usage. We give a realistic estimate upfront and build in limits and monitoring, so you stay in control of the costs.",
      },
    },
    {
      q: { nl: "Moet mijn team technisch zijn om met AI te werken?", en: "Does my team need to be technical to work with AI?" },
      a: {
        nl: "Nee. We bouwen oplossingen die werken via vertrouwde kanalen, zoals je website, Slack, Teams of je mailbox. In onze workshops leert je team stap voor stap hoe ze AI slim en veilig inzetten, ook zonder technische achtergrond.",
        en: "No. We build solutions that work through familiar channels, such as your website, Slack, Teams or your mailbox. In our workshops your team learns step by step how to use AI smartly and safely, even without a technical background.",
      },
    },
    {
      q: { nl: "Vervangt AI mijn medewerkers?", en: "Will AI replace my employees?" },
      a: {
        nl: "Wij zetten AI in om taken over te nemen, niet mensen. AI haalt repetitief werk weg, zodat je team meer tijd heeft voor advies, creativiteit en klantcontact. We ontwerpen elke oplossing zo dat je medewerkers de regie houden en AI hen ondersteunt.",
        en: "We use AI to take over tasks, not people. AI removes repetitive work, so your team has more time for advice, creativity and customer contact. We design every solution so your employees stay in control and AI supports them.",
      },
    },
    {
      q: { nl: "Waar begin ik als ik nog niet weet wat AI voor mijn bedrijf kan doen?", en: "Where do I start if I don't know yet what AI can do for my business?" },
      a: {
        nl: "Met een AI quick scan of workshop. In een of twee sessies brengen we je processen en ideeën in kaart, laten we zien wat er nu al kan en kiezen we samen de eerste use case met de meeste impact. Je gaat naar huis met een concreet plan, niet met een stapel buzzwords.",
        en: "With an AI quick scan or workshop. In one or two sessions we map your processes and ideas, show what is already possible today and choose the first use case with the most impact together. You walk away with a concrete plan, not a pile of buzzwords.",
      },
    },
  ],
  metaTitle: {
    nl: "AI & Consultancy | AI-chatbots, agents & integraties | M7",
    en: "AI & Consultancy | AI chatbots, agents & integrations | M7",
  },
  metaDescription: {
    nl: "M7 maakt AI praktisch: AI-chatbots, AI-agents, integraties met OpenAI, Claude en Gemini, AI-strategie en workshops. Veilig, AVG-bewust en op maat.",
    en: "M7 makes AI practical: AI chatbots, AI agents, integrations with OpenAI, Claude and Gemini, AI strategy and workshops. Safe, GDPR-aware and tailored.",
  },
  related: ["marketing-automatisering-funnels", "web-apps-portals-apps", "seo-aeo-geo"],
  configurator: ["crm", "funnels"],
};

export const applications: Application[] = [
  {
    slug: "ai-chatbots",
    service: "ai-consultancy",
    title: { nl: "AI-chatbots & assistenten", en: "AI chatbots & assistants" },
    summary: {
      nl: "Een slimme assistent die klanten en collega's direct antwoord geeft, op basis van jouw kennis.",
      en: "A smart assistant that gives customers and colleagues instant answers, based on your knowledge.",
    },
    intro: {
      nl: "Een AI-chatbot die écht weet waar hij het over heeft. We bouwen assistenten voor je website, klantenservice of intern gebruik, gevoed met je eigen documenten, producten en werkwijze.",
      en: "An AI chatbot that truly knows what it is talking about. We build assistants for your website, customer service or internal use, powered by your own documents, products and way of working.",
    },
    body: [
      {
        h: { nl: "Antwoorden uit jouw eigen kennis", en: "Answers from your own knowledge" },
        body: {
          nl: "Met RAG koppelen we de assistent aan je website, handleidingen, productdata, beleid of kennisbank. Hij zoekt eerst de juiste informatie op en formuleert daarna een helder antwoord, in jouw tone of voice en met bronvermelding. Weet de assistent iets niet, dan zegt hij dat eerlijk en schakelt hij door naar een collega.",
          en: "With RAG we connect the assistant to your website, manuals, product data, policies or knowledge base. It first looks up the right information and then writes a clear answer, in your tone of voice and with sources. If the assistant does not know something, it says so honestly and hands over to a colleague.",
        },
      },
      {
        h: { nl: "Voor klanten én voor je team", en: "For customers and for your team" },
        body: {
          nl: "Op je website beantwoordt de chatbot vragen, kwalificeert hij leads en plant hij afspraken in. Intern helpt een kennisbank-assistent nieuwe en ervaren medewerkers sneller de juiste procedure, prijs of documentatie te vinden. Beschikbaar via je website, WhatsApp, Slack of een eigen portaal.",
          en: "On your website the chatbot answers questions, qualifies leads and schedules appointments. Internally, a knowledge base assistant helps new and experienced employees find the right procedure, price or documentation faster. Available via your website, WhatsApp, Slack or your own portal.",
        },
      },
    ],
    deliverables: {
      nl: ["Analyse van vragen en kennisbronnen", "Conversatieontwerp en tone of voice", "RAG-koppeling met je eigen documenten", "Chatwidget in de stijl van je merk", "Doorschakeling naar een medewerker", "Dashboard met gesprekken en inzichten"],
      en: ["Analysis of questions and knowledge sources", "Conversation design and tone of voice", "RAG connection to your own documents", "Chat widget in your brand's style", "Handover to a human colleague", "Dashboard with conversations and insights"],
    },
    benefits: [
      { title: { nl: "Altijd bereikbaar", en: "Always available" }, text: { nl: "Klanten krijgen ook 's avonds en in het weekend direct antwoord.", en: "Customers get an instant answer, even in the evening and at weekends." } },
      { title: { nl: "Betrouwbaar", en: "Reliable" }, text: { nl: "Antwoorden op basis van jouw bronnen, niet van het hele internet.", en: "Answers based on your sources, not the entire internet." } },
      { title: { nl: "Ontlasting", en: "Relief" }, text: { nl: "Minder herhaalvragen, meer tijd voor complexe vragen.", en: "Fewer repeat questions, more time for complex ones." } },
    ],
    tools: ["openai", "claude", "langchain", "supabase", "n8n", "whatsapp"],
    related: ["ai-agents", "ai-integraties", "website-widgets", "aeo"],
    faqs: [
      {
        q: { nl: "Verzint een AI-chatbot geen antwoorden?", en: "Won't an AI chatbot make up answers?" },
        a: {
          nl: "Dat risico verkleinen we flink. De assistent baseert zijn antwoorden op jouw eigen bronnen, krijgt duidelijke instructies over wat hij wel en niet mag zeggen en verwijst door als hij het antwoord niet weet. Voor de livegang testen we uitgebreid met echte vragen.",
          en: "We reduce that risk considerably. The assistant bases its answers on your own sources, gets clear instructions on what it may and may not say and refers onward when it does not know the answer. Before going live we test extensively with real questions.",
        },
      },
      {
        q: { nl: "Kan de chatbot in meerdere talen antwoorden?", en: "Can the chatbot answer in multiple languages?" },
        a: {
          nl: "Ja. Moderne taalmodellen beheersen tientallen talen. De assistent antwoordt in de taal van de bezoeker, ook als je bronnen alleen in het Nederlands zijn.",
          en: "Yes. Modern language models handle dozens of languages. The assistant answers in the visitor's language, even if your sources are only in Dutch.",
        },
      },
      {
        q: { nl: "Hoe houd ik de kennis van de chatbot actueel?", en: "How do I keep the chatbot's knowledge up to date?" },
        a: {
          nl: "We koppelen de assistent aan je bronnen, zoals je website, CMS, Notion of gedeelde mappen. Pas je daar iets aan, dan wordt de kennis automatisch of met één klik bijgewerkt.",
          en: "We connect the assistant to your sources, such as your website, CMS, Notion or shared folders. When you change something there, the knowledge is updated automatically or with a single click.",
        },
      },
    ],
    metaDescription: {
      nl: "AI-chatbot laten maken door M7: een assistent voor je website, klantenservice of intern gebruik, gevoed met je eigen kennis en AVG-bewust ingericht.",
      en: "AI chatbot development by M7: an assistant for your website, customer service or internal use, powered by your own knowledge and set up GDPR-aware.",
    },
  },
  {
    slug: "ai-agents",
    service: "ai-consultancy",
    title: { nl: "AI-agents", en: "AI agents" },
    summary: {
      nl: "Digitale collega's die zelfstandig taken uitvoeren in je bestaande tools.",
      en: "Digital colleagues that carry out tasks independently in your existing tools.",
    },
    intro: {
      nl: "Een AI-agent beantwoordt niet alleen vragen, maar doet ook het werk. Denk aan aanvragen verwerken, gegevens verrijken, documenten opstellen en collega's op het juiste moment inschakelen.",
      en: "An AI agent does not just answer questions, it also does the work. Think of processing requests, enriching data, drafting documents and bringing in colleagues at the right moment.",
    },
    body: [
      {
        h: { nl: "Van repetitief werk naar een automatische flow", en: "From repetitive work to an automated flow" },
        body: {
          nl: "We analyseren welke taken in je organisatie steeds terugkomen en veel handwerk kosten. Daarna bouwen we een agent die die stappen uitvoert: e-mails en formulieren lezen, informatie opzoeken in je CRM of documenten, bepalen wat er moet gebeuren en de volgende actie in gang zetten.",
          en: "We analyse which tasks keep coming back in your organisation and take a lot of manual work. Then we build an agent that carries out those steps: reading emails and forms, looking up information in your CRM or documents, deciding what needs to happen and triggering the next action.",
        },
      },
      {
        h: { nl: "Jij houdt de regie", en: "You stay in control" },
        body: {
          nl: "Je bepaalt precies wat een agent zelfstandig mag doen en waar een mens akkoord geeft. Elke actie wordt gelogd, zodat je altijd terugziet wat er is gebeurd en waarom. Met Make, n8n of Zapier verbinden we de agent met de tools die je al gebruikt.",
          en: "You decide exactly what an agent may do on its own and where a human gives approval. Every action is logged, so you can always see what happened and why. With Make, n8n or Zapier we connect the agent to the tools you already use.",
        },
      },
    ],
    deliverables: {
      nl: ["Procesanalyse en selectie van taken", "Ontwerp van de agent en beslisregels", "Koppelingen met CRM, mail en documenten", "Goedkeuringsmomenten (human-in-the-loop)", "Logging en foutafhandeling", "Monitoring en doorontwikkeling"],
      en: ["Process analysis and task selection", "Agent design and decision rules", "Connections with CRM, email and documents", "Approval steps (human-in-the-loop)", "Logging and error handling", "Monitoring and further development"],
    },
    benefits: [
      { title: { nl: "Tijdwinst", en: "Time savings" }, text: { nl: "Handwerk wordt een flow die op de achtergrond draait.", en: "Manual work becomes a flow that runs in the background." } },
      { title: { nl: "Consistent", en: "Consistent" }, text: { nl: "Elke aanvraag wordt op dezelfde, juiste manier opgepakt.", en: "Every request is handled the same, correct way." } },
      { title: { nl: "Schaalbaar", en: "Scalable" }, text: { nl: "Meer volume zonder dat je team evenredig hoeft te groeien.", en: "More volume without your team having to grow at the same pace." } },
    ],
    tools: ["openai", "claude", "langchain", "n8n", "make", "zapier"],
    related: ["workflow-automatisering", "crm-implementatie", "ai-integraties", "api-koppelingen"],
    faqs: [
      {
        q: { nl: "Wat is het verschil tussen een AI-agent en gewone automatisering?", en: "What is the difference between an AI agent and regular automation?" },
        a: {
          nl: "Klassieke automatisering volgt vaste als-dan-regels. Een AI-agent begrijpt ook ongestructureerde input, zoals een vrij geschreven e-mail of een pdf, en kiest daar een passende vervolgstap bij. Vaak combineren we beide: vaste regels waar het kan, AI waar het nodig is.",
          en: "Classic automation follows fixed if-then rules. An AI agent also understands unstructured input, such as a free-form email or a PDF, and chooses a fitting next step. We often combine both: fixed rules where possible, AI where needed.",
        },
      },
      {
        q: { nl: "Kan een AI-agent fouten maken?", en: "Can an AI agent make mistakes?" },
        a: {
          nl: "Ja, net als mensen. Daarom bouwen we controles in: duidelijke grenzen, validatie van gegevens en goedkeuring door een medewerker bij belangrijke stappen. Zo profiteer je van de snelheid zonder de controle te verliezen.",
          en: "Yes, just like people. That is why we build in checks: clear boundaries, data validation and approval by an employee for important steps. That way you benefit from the speed without losing control.",
        },
      },
      {
        q: { nl: "Welke taken lenen zich goed voor een AI-agent?", en: "Which tasks are well suited to an AI agent?" },
        a: {
          nl: "Taken die vaak terugkomen, een duidelijk doel hebben en veel tekst of data bevatten. Denk aan leads kwalificeren, offerteaanvragen voorbereiden, facturen en documenten verwerken, tickets sorteren of rapportages samenstellen.",
          en: "Tasks that recur often, have a clear goal and involve a lot of text or data. Think of qualifying leads, preparing quote requests, processing invoices and documents, sorting tickets or compiling reports.",
        },
      },
    ],
    metaDescription: {
      nl: "AI-agents door M7: digitale collega's die taken uitvoeren in je CRM, mailbox en documenten. Gekoppeld via Make, n8n of Zapier, met menselijke controle.",
      en: "AI agents by M7: digital colleagues that carry out tasks in your CRM, mailbox and documents. Connected via Make, n8n or Zapier, with human oversight.",
    },
  },
  {
    slug: "ai-integraties",
    service: "ai-consultancy",
    title: { nl: "AI-integraties in je software", en: "AI integrations in your software" },
    summary: {
      nl: "AI ingebouwd in je eigen platform, portaal of app via OpenAI, Claude of Gemini.",
      en: "AI built into your own platform, portal or app via OpenAI, Claude or Gemini.",
    },
    intro: {
      nl: "Geen extra tool erbij, maar AI precies waar je gebruikers al werken. We integreren taalmodellen via de API's van OpenAI, Claude en Gemini in je bestaande software, webapp of website.",
      en: "No extra tool to learn, but AI exactly where your users already work. We integrate language models through the APIs of OpenAI, Claude and Gemini into your existing software, web app or website.",
    },
    body: [
      {
        h: { nl: "Slimme functies in je eigen product", en: "Smart features in your own product" },
        body: {
          nl: "Denk aan een zoekfunctie die vragen in gewone taal begrijpt, automatische samenvattingen van dossiers, het classificeren van inkomende tickets of een schrijfassistent die teksten in jouw stijl voorbereidt. Voor SaaS-platformen en portalen kan AI een onderscheidende feature zijn die het product voor gebruikers waardevoller maakt.",
          en: "Think of a search function that understands questions in plain language, automatic summaries of case files, classification of incoming tickets or a writing assistant that drafts texts in your style. For SaaS platforms and portals, AI can be a distinctive feature that makes the product more valuable for users.",
        },
      },
      {
        h: { nl: "Solide gebouwd, veilig gekoppeld", en: "Solidly built, securely connected" },
        body: {
          nl: "We bouwen integraties met aandacht voor prestaties, kosten en privacy. Met RAG en een vectordatabase, bijvoorbeeld in Supabase, werkt het model met jouw actuele data. We regelen rechten, limieten, logging en fallbacks, zodat je applicatie stabiel blijft, ook als een AI-dienst even hapert.",
          en: "We build integrations with attention to performance, cost and privacy. With RAG and a vector database, for example in Supabase, the model works with your current data. We take care of permissions, limits, logging and fallbacks, so your application stays stable, even when an AI service hiccups.",
        },
      },
    ],
    deliverables: {
      nl: ["Technisch ontwerp en modelkeuze", "API-integratie met OpenAI, Claude of Gemini", "RAG met vectordatabase op je eigen data", "Prompt- en output-ontwerp", "Beveiliging, logging en kostenbewaking", "Documentatie en overdracht"],
      en: ["Technical design and model selection", "API integration with OpenAI, Claude or Gemini", "RAG with a vector database on your own data", "Prompt and output design", "Security, logging and cost monitoring", "Documentation and handover"],
    },
    benefits: [
      { title: { nl: "Naadloos", en: "Seamless" }, text: { nl: "AI waar je gebruikers al werken, zonder extra tool.", en: "AI where your users already work, without an extra tool." } },
      { title: { nl: "Modelonafhankelijk", en: "Model-agnostic" }, text: { nl: "Wissel eenvoudig van model als er iets beters of voordeligers komt.", en: "Switch models easily when something better or cheaper comes along." } },
      { title: { nl: "Toekomstbestendig", en: "Future-proof" }, text: { nl: "Een architectuur die meegroeit met nieuwe AI-mogelijkheden.", en: "An architecture that grows with new AI capabilities." } },
    ],
    tools: ["openai", "claude", "gemini", "supabase", "nextjs", "huggingface"],
    related: ["saas-platform", "api-koppelingen", "klantportaal", "ai-chatbots"],
    faqs: [
      {
        q: { nl: "Kunnen jullie AI toevoegen aan software die al bestaat?", en: "Can you add AI to software that already exists?" },
        a: {
          nl: "Vaak wel. Als je software een API heeft of we toegang hebben tot de code, kunnen we AI-functies toevoegen. Werkt een ander bureau aan je platform? Dan stemmen we de integratie met hen af.",
          en: "Often, yes. If your software has an API or we have access to the code, we can add AI features. Is another agency working on your platform? Then we coordinate the integration with them.",
        },
      },
      {
        q: { nl: "Zit ik vast aan één AI-leverancier?", en: "Am I locked in to one AI vendor?" },
        a: {
          nl: "Nee. We bouwen een tussenlaag waardoor je relatief eenvoudig kunt wisselen tussen modellen van OpenAI, Anthropic, Google of open-source alternatieven.",
          en: "No. We build an abstraction layer so you can switch relatively easily between models from OpenAI, Anthropic, Google or open-source alternatives.",
        },
      },
      {
        q: { nl: "Wat kost een AI-integratie?", en: "How much does an AI integration cost?" },
        a: {
          nl: "Dat hangt af van de complexiteit en het aantal koppelingen. Een afgebakende AI-functie in een bestaande applicatie start vanaf enkele duizenden euro's. Na een korte technische verkenning ontvang je een voorstel op maat.",
          en: "It depends on the complexity and the number of connections. A well-defined AI feature in an existing application starts from a few thousand euros. After a short technical exploration you receive a tailored proposal.",
        },
      },
    ],
    metaDescription: {
      nl: "AI-integraties door M7: AI-functies in je eigen software, portaal of app via de API's van OpenAI, Claude en Gemini, met RAG op je eigen data.",
      en: "AI integrations by M7: AI features in your own software, portal or app via the OpenAI, Claude and Gemini APIs, with RAG on your own data.",
    },
  },
  {
    slug: "ai-strategie",
    service: "ai-consultancy",
    title: { nl: "AI-strategie & roadmap", en: "AI strategy & roadmap" },
    summary: {
      nl: "Een helder plan: waar levert AI waarde op en welke stap zet je eerst?",
      en: "A clear plan: where does AI add value and which step do you take first?",
    },
    intro: {
      nl: "Veel organisaties willen iets met AI, maar weten niet waar ze moeten beginnen. We brengen kansen, risico's en randvoorwaarden in kaart en vertalen die naar een concrete roadmap met prioriteiten.",
      en: "Many organisations want to do something with AI, but do not know where to start. We map opportunities, risks and preconditions and translate them into a concrete roadmap with priorities.",
    },
    body: [
      {
        h: { nl: "Van losse ideeën naar prioriteiten", en: "From loose ideas to priorities" },
        body: {
          nl: "In interviews en sessies inventariseren we processen, knelpunten en ideeën in je organisatie. Elke kans beoordelen we op impact, haalbaarheid, kosten en risico. Zo ontstaat een overzicht van quick wins en grotere projecten, en weet je precies waar je mee begint.",
          en: "In interviews and sessions we take stock of processes, bottlenecks and ideas in your organisation. We assess each opportunity on impact, feasibility, cost and risk. The result is an overview of quick wins and larger projects, so you know exactly where to start.",
        },
      },
      {
        h: { nl: "Randvoorwaarden goed geregeld", en: "Preconditions properly in place" },
        body: {
          nl: "Een goede AI-strategie gaat ook over data, beveiliging, beleid en mensen. We kijken naar de kwaliteit en beschikbaarheid van je data, naar de AVG en de EU AI Act, en naar wat je team nodig heeft om AI verantwoord te gebruiken. Het resultaat: een roadmap die je organisatie echt kan uitvoeren.",
          en: "A good AI strategy is also about data, security, policy and people. We look at the quality and availability of your data, at the GDPR and the EU AI Act, and at what your team needs to use AI responsibly. The result: a roadmap your organisation can actually execute.",
        },
      },
    ],
    deliverables: {
      nl: ["Interviews en AI quick scan", "Overzicht van use cases met prioriteit", "Analyse van data en systemen", "Aandachtspunten AVG en EU AI Act", "AI-gebruiksbeleid voor medewerkers", "Roadmap met fasering en begroting"],
      en: ["Interviews and AI quick scan", "Overview of prioritised use cases", "Analysis of data and systems", "GDPR and EU AI Act considerations", "AI usage policy for employees", "Roadmap with phasing and budget"],
    },
    benefits: [
      { title: { nl: "Focus", en: "Focus" }, text: { nl: "Je investeert eerst in de toepassingen met de meeste waarde.", en: "You invest first in the applications with the most value." } },
      { title: { nl: "Draagvlak", en: "Buy-in" }, text: { nl: "Management en team zijn het eens over de richting.", en: "Management and team agree on the direction." } },
      { title: { nl: "Verantwoord", en: "Responsible" }, text: { nl: "Privacy, beveiliging en regelgeving zijn vanaf het begin meegenomen.", en: "Privacy, security and regulation are covered from the start." } },
    ],
    tools: ["miro", "notion", "openai", "claude", "perplexity"],
    related: ["digitale-strategie", "ai-workshops", "ai-agents", "merkstrategie"],
    faqs: [
      {
        q: { nl: "Heb ik een AI-strategie nodig als ik gewoon wil beginnen?", en: "Do I need an AI strategy if I just want to get started?" },
        a: {
          nl: "Een uitgebreide strategie is niet altijd nodig. Soms is een korte quick scan genoeg om de eerste use case te kiezen. Voor organisaties met meerdere afdelingen of gevoelige data voorkomt een roadmap wel dat er versnipperde, onveilige experimenten ontstaan.",
          en: "An extensive strategy is not always necessary. Sometimes a short quick scan is enough to choose the first use case. For organisations with multiple departments or sensitive data, a roadmap does prevent fragmented, unsafe experiments.",
        },
      },
      {
        q: { nl: "Hoe lang duurt een AI-strategietraject?", en: "How long does an AI strategy project take?" },
        a: {
          nl: "Een quick scan duurt een tot twee weken. Een volledig traject met interviews, analyse en roadmap duurt gemiddeld 3 tot 6 weken.",
          en: "A quick scan takes one to two weeks. A full project with interviews, analysis and roadmap takes 3 to 6 weeks on average.",
        },
      },
      {
        q: { nl: "Helpen jullie ook met een AI-beleid voor medewerkers?", en: "Do you also help with an AI policy for employees?" },
        a: {
          nl: "Ja. We stellen een helder en praktisch gebruiksbeleid op: welke tools mogen, welke data wel en niet in AI-tools thuishoort en hoe je omgaat met de output. Zo weet iedereen waar hij aan toe is.",
          en: "Yes. We draw up a clear and practical usage policy: which tools are allowed, which data does and does not belong in AI tools and how to handle the output. That way everyone knows where they stand.",
        },
      },
    ],
    metaDescription: {
      nl: "AI-strategie en roadmap door M7: kansen en risico's in kaart, use cases geprioriteerd en AVG en EU AI Act meegenomen. Een plan dat je team kan uitvoeren.",
      en: "AI strategy and roadmap by M7: opportunities and risks mapped, use cases prioritised and GDPR and EU AI Act covered. A plan your team can execute.",
    },
  },
  {
    slug: "ai-workshops",
    service: "ai-consultancy",
    title: { nl: "AI-workshops & trainingen", en: "AI workshops & training" },
    summary: {
      nl: "Praktische trainingen waarmee je team morgen al slimmer werkt met AI.",
      en: "Practical training that helps your team work smarter with AI from tomorrow.",
    },
    intro: {
      nl: "Tools als ChatGPT, Claude en Gemini zijn pas waardevol als je team ze goed gebruikt. In praktische workshops leren medewerkers prompten, de juiste tools kiezen en AI veilig inzetten in hun eigen werk.",
      en: "Tools such as ChatGPT, Claude and Gemini are only valuable when your team uses them well. In practical workshops employees learn to prompt, choose the right tools and use AI safely in their own work.",
    },
    body: [
      {
        h: { nl: "Hands-on, met je eigen werk", en: "Hands-on, with your own work" },
        body: {
          nl: "Geen droge theorie, maar oefenen met echte taken uit jullie praktijk: e-mails en offertes schrijven, documenten samenvatten, research doen, beelden maken of data analyseren. Iedere deelnemer gaat naar huis met prompts en werkwijzen die direct bruikbaar zijn.",
          en: "No dry theory, but practising with real tasks from your daily work: writing emails and quotes, summarising documents, doing research, creating images or analysing data. Every participant leaves with prompts and methods they can use straight away.",
        },
      },
      {
        h: { nl: "Op maat voor elk niveau", en: "Tailored to every level" },
        body: {
          nl: "Van een inspiratiesessie voor het managementteam tot verdiepende trainingen voor marketing, sales, klantenservice of development. We besteden altijd aandacht aan veilig gebruik, privacy en de beperkingen van AI, en aan de AI-geletterdheid waar de EU AI Act aandacht voor vraagt.",
          en: "From an inspiration session for the management team to in-depth training for marketing, sales, customer service or development. We always cover safe use, privacy and the limitations of AI, as well as the AI literacy the EU AI Act calls for.",
        },
      },
    ],
    deliverables: {
      nl: ["Intake en afstemming op je team", "Workshop op locatie of online", "Praktijkoefeningen met eigen cases", "Promptbibliotheek voor je organisatie", "Richtlijnen voor veilig AI-gebruik", "Optioneel: follow-upsessie en coaching"],
      en: ["Intake and tailoring to your team", "Workshop on-site or online", "Hands-on exercises with your own cases", "Prompt library for your organisation", "Guidelines for safe AI use", "Optional: follow-up session and coaching"],
    },
    benefits: [
      { title: { nl: "Direct toepasbaar", en: "Immediately applicable" }, text: { nl: "Je team past de werkwijzen dezelfde week nog toe.", en: "Your team applies the methods the very same week." } },
      { title: { nl: "Veilig", en: "Safe" }, text: { nl: "Iedereen weet welke data wel en niet in AI-tools thuishoort.", en: "Everyone knows which data does and does not belong in AI tools." } },
      { title: { nl: "Enthousiasme", en: "Enthusiasm" }, text: { nl: "Van onzekerheid naar nieuwsgierigheid en eigen ideeën.", en: "From uncertainty to curiosity and ideas of their own." } },
    ],
    tools: ["openai", "claude", "gemini", "perplexity", "midjourney", "notion"],
    related: ["ai-strategie", "ai-content", "ai-chatbots"],
    faqs: [
      {
        q: { nl: "Voor wie zijn de AI-workshops geschikt?", en: "Who are the AI workshops for?" },
        a: {
          nl: "Voor iedereen die met AI aan de slag wil, van directie tot uitvoering. We stemmen niveau en voorbeelden af op de groep, of het nu gaat om beginners of medewerkers die al dagelijks met AI werken.",
          en: "For anyone who wants to get started with AI, from management to operations. We tailor the level and examples to the group, whether they are beginners or employees who already use AI daily.",
        },
      },
      {
        q: { nl: "Hoe lang duurt een workshop?", en: "How long does a workshop take?" },
        a: {
          nl: "Een inspiratiesessie duurt ongeveer twee uur, een praktische workshop een dagdeel tot een hele dag. Voor teams die verder willen, bieden we trainingsreeksen met follow-up.",
          en: "An inspiration session takes about two hours, a practical workshop half a day to a full day. For teams that want to go further, we offer training series with follow-up.",
        },
      },
      {
        q: { nl: "Kan de workshop bij ons op locatie?", en: "Can the workshop take place at our location?" },
        a: {
          nl: "Ja. We geven workshops bij jou op kantoor, bij ons in Nistelrode of online. Bij groepen op locatie zorgen we dat iedereen vooraf toegang heeft tot de juiste tools.",
          en: "Yes. We run workshops at your office, at ours in Nistelrode or online. For on-site groups we make sure everyone has access to the right tools beforehand.",
        },
      },
    ],
    metaDescription: {
      nl: "AI-workshops en trainingen door M7: je team leert prompten, de juiste AI-tools kiezen en AI veilig gebruiken. Praktisch, op maat, op locatie of online.",
      en: "AI workshops and training by M7: your team learns to prompt, choose the right AI tools and use AI safely. Practical, tailored, on-site or online.",
    },
  },
  {
    slug: "ai-content",
    service: "ai-consultancy",
    title: { nl: "AI-contentproductie", en: "AI content production" },
    summary: {
      nl: "Tekst, beeld, video en voice met AI, altijd in de stijl van je merk.",
      en: "Text, images, video and voice with AI, always in your brand's style.",
    },
    intro: {
      nl: "Met AI produceer je sneller en meer content, zonder in te leveren op kwaliteit. Wij combineren AI-tools met de blik van ervaren designers, copywriters en editors, zodat alles klopt met je merk.",
      en: "With AI you produce more content, faster, without compromising on quality. We combine AI tools with the eye of experienced designers, copywriters and editors, so everything is true to your brand.",
    },
    body: [
      {
        h: { nl: "Van tekst tot voice-over", en: "From text to voice-over" },
        body: {
          nl: "We zetten AI in voor blogs, productteksten en social posts, voor beelden en visuals met Midjourney, voor video en animatie met Runway en voor natuurlijke voice-overs in meerdere talen met ElevenLabs. Ideaal voor campagnes, uitlegvideo's, e-learning en het vertalen van bestaande content naar nieuwe markten.",
          en: "We use AI for blogs, product copy and social posts, for images and visuals with Midjourney, for video and animation with Runway and for natural voice-overs in multiple languages with ElevenLabs. Ideal for campaigns, explainer videos, e-learning and adapting existing content for new markets.",
        },
      },
      {
        h: { nl: "AI-snelheid, menselijke kwaliteit", en: "AI speed, human quality" },
        body: {
          nl: "Ongecontroleerde AI-content voelt al snel generiek. Daarom werken we met merkrichtlijnen, eigen prompts en stijlreferenties, en controleert een specialist elke output op juistheid, toon en merkconsistentie. Ook gebruiksrechten en transparantie over AI-gebruik nemen we mee.",
          en: "Unchecked AI content quickly feels generic. That is why we work with brand guidelines, custom prompts and style references, and a specialist checks every output for accuracy, tone and brand consistency. Usage rights and transparency about AI use are part of the process too.",
        },
      },
    ],
    deliverables: {
      nl: ["Contentplan en AI-workflow", "Teksten voor web, blogs en social", "AI-beelden en visuals in je huisstijl", "AI-video en animatie", "Voice-overs in meerdere talen", "Eindredactie en kwaliteitscontrole"],
      en: ["Content plan and AI workflow", "Copy for web, blogs and social", "AI images and visuals in your brand style", "AI video and animation", "Voice-overs in multiple languages", "Editing and quality control"],
    },
    benefits: [
      { title: { nl: "Sneller", en: "Faster" }, text: { nl: "Van idee tot publicatie in een fractie van de tijd.", en: "From idea to publication in a fraction of the time." } },
      { title: { nl: "Schaalbaar", en: "Scalable" }, text: { nl: "Meer varianten voor campagnes, kanalen en talen.", en: "More variants for campaigns, channels and languages." } },
      { title: { nl: "Merkvast", en: "On-brand" }, text: { nl: "AI-output die klinkt en eruitziet als jouw merk.", en: "AI output that sounds and looks like your brand." } },
    ],
    tools: ["midjourney", "runway", "elevenlabs", "openai", "claude", "photoshop"],
    related: ["ai-beeld-video", "copywriting-blogs", "social-video", "contentstrategie"],
    faqs: [
      {
        q: { nl: "Is AI-content wel goed voor SEO?", en: "Is AI content good for SEO?" },
        a: {
          nl: "Zoekmachines beoordelen content op kwaliteit en relevantie, niet op hoe hij gemaakt is. Daarom gebruiken we AI als versneller en zorgen specialisten voor expertise, feitencontrole en een eigen invalshoek. Zo maak je content die echt iets toevoegt voor je lezers.",
          en: "Search engines judge content on quality and relevance, not on how it was made. That is why we use AI as an accelerator, while specialists add expertise, fact-checking and an original angle. That way you create content that genuinely adds value for your readers.",
        },
      },
      {
        q: { nl: "Mag ik AI-beelden commercieel gebruiken?", en: "Can I use AI images commercially?" },
        a: {
          nl: "Bij de meeste betaalde AI-tools mag je de output commercieel gebruiken, maar de voorwaarden verschillen per tool. We kiezen tools en werkwijzen die passen bij jouw gebruik en vermijden herkenbare personen, merken en auteursrechtelijk beschermd werk.",
          en: "Most paid AI tools allow commercial use of their output, but the terms differ per tool. We choose tools and methods that suit your use and avoid recognisable people, brands and copyrighted work.",
        },
      },
      {
        q: { nl: "Kunnen jullie een voice-over in mijn eigen stem maken?", en: "Can you create a voice-over in my own voice?" },
        a: {
          nl: "Ja, met jouw uitdrukkelijke toestemming kunnen we met ElevenLabs een stemkloon maken, bijvoorbeeld voor e-learning of meertalige video's. Je kunt ook kiezen uit een bibliotheek met professionele AI-stemmen.",
          en: "Yes, with your explicit consent we can create a voice clone with ElevenLabs, for example for e-learning or multilingual videos. You can also choose from a library of professional AI voices.",
        },
      },
    ],
    metaDescription: {
      nl: "AI-contentproductie door M7: teksten, beelden, video en voice-overs met AI, gecontroleerd door specialisten en altijd in de stijl van je merk.",
      en: "AI content production by M7: copy, images, video and voice-overs made with AI, checked by specialists and always in your brand's style.",
    },
  },
  {
    slug: "digitale-strategie",
    service: "ai-consultancy",
    title: { nl: "Digitale strategie", en: "Digital strategy" },
    summary: {
      nl: "Eén plan voor je merk, website, tools en marketing, gericht op groei.",
      en: "One plan for your brand, website, tools and marketing, focused on growth.",
    },
    intro: {
      nl: "Losse tools, een verouderde website en marketing zonder richting? We maken een digitale strategie die je doelen vertaalt naar heldere keuzes in kanalen, systemen en investeringen.",
      en: "Loose tools, an outdated website and marketing without direction? We create a digital strategy that translates your goals into clear choices in channels, systems and investments.",
    },
    body: [
      {
        h: { nl: "Het grote plaatje, scherp in beeld", en: "The big picture, in sharp focus" },
        body: {
          nl: "We analyseren je huidige digitale landschap: website, CRM, marketingkanalen, data en interne tools. Waar zit dubbel werk, waar haken klanten af en waar liggen kansen? Op basis daarvan bepalen we samen waar je naartoe wilt en wat daarvoor nodig is.",
          en: "We analyse your current digital landscape: website, CRM, marketing channels, data and internal tools. Where is work duplicated, where do customers drop off and where are the opportunities? Based on that we decide together where you want to go and what it takes to get there.",
        },
      },
      {
        h: { nl: "Van strategie naar uitvoering", en: "From strategy to execution" },
        body: {
          nl: "Een strategie is pas waardevol als hij wordt uitgevoerd. Daarom krijg je een roadmap met concrete projecten, prioriteiten, KPI's en een realistische begroting. En omdat M7 ook bouwt, kunnen we de uitvoering direct oppakken: van rebranding en website tot automatisering en AI.",
          en: "A strategy is only valuable when it is executed. That is why you get a roadmap with concrete projects, priorities, KPIs and a realistic budget. And because M7 also builds, we can pick up the execution right away: from rebrand and website to automation and AI.",
        },
      },
    ],
    deliverables: {
      nl: ["Analyse van je digitale landschap", "Doelgroep- en klantreisanalyse", "Kanaal- en systeemadvies", "KPI's en meetplan", "Roadmap met prioriteiten", "Begroting en fasering"],
      en: ["Analysis of your digital landscape", "Audience and customer journey analysis", "Channel and systems advice", "KPIs and measurement plan", "Roadmap with priorities", "Budget and phasing"],
    },
    benefits: [
      { title: { nl: "Overzicht", en: "Overview" }, text: { nl: "Je ziet hoe merk, website, tools en marketing samenhangen.", en: "You see how brand, website, tools and marketing connect." } },
      { title: { nl: "Slimme investeringen", en: "Smart investments" }, text: { nl: "Budget gaat naar wat het meeste oplevert.", en: "Budget goes where it delivers the most." } },
      { title: { nl: "Uitvoerbaar", en: "Actionable" }, text: { nl: "Een plan waar je morgen mee aan de slag kunt.", en: "A plan you can start on tomorrow." } },
    ],
    tools: ["miro", "notion", "ga4", "lookerstudio", "hubspot"],
    related: ["ai-strategie", "merkstrategie", "contentstrategie", "tracking-analytics"],
    faqs: [
      {
        q: { nl: "Wat is het verschil tussen een digitale strategie en een marketingplan?", en: "What is the difference between a digital strategy and a marketing plan?" },
        a: {
          nl: "Een marketingplan richt zich op campagnes en kanalen. Een digitale strategie kijkt breder: ook naar je website, systemen, data, processen en hoe die samen je bedrijfsdoelen ondersteunen. Een marketingplan is vaak een onderdeel ervan.",
          en: "A marketing plan focuses on campaigns and channels. A digital strategy looks wider: also at your website, systems, data, processes and how they support your business goals together. A marketing plan is often part of it.",
        },
      },
      {
        q: { nl: "Voor wie is een digitale strategie geschikt?", en: "Who is a digital strategy for?" },
        a: {
          nl: "Voor organisaties die willen groeien, maar merken dat hun digitale middelen niet meer goed samenwerken. Bijvoorbeeld na een periode van snelle groei, na een fusie of wanneer je wilt opschalen naar nieuwe markten.",
          en: "For organisations that want to grow but notice their digital assets no longer work well together. For example after a period of rapid growth, after a merger or when you want to scale into new markets.",
        },
      },
      {
        q: { nl: "Moet ik na de strategie ook met M7 verder?", en: "Do I have to continue with M7 after the strategy?" },
        a: {
          nl: "Nee, de roadmap is van jou en is ook door een ander team uit te voeren. Wel is het een voordeel dat wij strategie, design en techniek onder één dak hebben, zodat je zonder vertaalverlies kunt doorpakken.",
          en: "No, the roadmap is yours and can be executed by another team too. It is an advantage, though, that we have strategy, design and technology under one roof, so you can move forward without anything getting lost in translation.",
        },
      },
    ],
    metaDescription: {
      nl: "Digitale strategie door M7: één plan voor je merk, website, systemen en marketing, met heldere prioriteiten, KPI's en een uitvoerbare roadmap.",
      en: "Digital strategy by M7: one plan for your brand, website, systems and marketing, with clear priorities, KPIs and an actionable roadmap.",
    },
  },
  {
    slug: "it-projectmanagement",
    service: "ai-consultancy",
    title: { nl: "IT-projectmanagement & consultancy", en: "IT project management & consultancy" },
    summary: {
      nl: "Grip op je IT-project: van softwareselectie en planning tot een soepele livegang.",
      en: "Control over your IT project: from software selection and planning to a smooth go-live.",
    },
    intro: {
      nl: "Een nieuw CRM, platform of maatwerkapplicatie invoeren is complex. Wij begeleiden je IT-project van begin tot eind, als onafhankelijk adviseur of als projectleider die alle partijen aanstuurt.",
      en: "Introducing a new CRM, platform or custom application is complex. We guide your IT project from start to finish, as an independent advisor or as a project lead who steers all parties.",
    },
    body: [
      {
        h: { nl: "Onafhankelijk advies en softwareselectie", en: "Independent advice and software selection" },
        body: {
          nl: "Welk systeem past bij je organisatie: standaardsoftware, een low-code oplossing of maatwerk? We vertalen je wensen naar heldere eisen, vergelijken opties en leveranciers en geven eerlijk advies. Daarbij kijken we ook naar koppelingen, beveiliging, schaalbaarheid en de totale kosten op termijn.",
          en: "Which system suits your organisation: off-the-shelf software, a low-code solution or custom development? We translate your wishes into clear requirements, compare options and vendors and give honest advice. We also look at integrations, security, scalability and the total cost over time.",
        },
      },
      {
        h: { nl: "Projectleiding die techniek en business verbindt", en: "Project management that bridges tech and business" },
        body: {
          nl: "Als projectmanager bewaken we planning, budget en kwaliteit, en zorgen we dat developers, leveranciers en je eigen team elkaar begrijpen. We werken agile met korte sprints en heldere demo's, zodat je regelmatig ziet wat er gebouwd wordt en tijdig kunt bijsturen.",
          en: "As project manager we keep an eye on planning, budget and quality, and make sure developers, vendors and your own team understand each other. We work agile with short sprints and clear demos, so you regularly see what is being built and can adjust in time.",
        },
      },
    ],
    deliverables: {
      nl: ["Behoefteanalyse en requirements", "Software- en leveranciersselectie", "Projectplan, planning en begroting", "Aansturing van developers en leveranciers", "Test- en acceptatiebegeleiding", "Implementatie, training en overdracht"],
      en: ["Needs analysis and requirements", "Software and vendor selection", "Project plan, schedule and budget", "Coordination of developers and vendors", "Testing and acceptance support", "Implementation, training and handover"],
    },
    benefits: [
      { title: { nl: "Grip", en: "Control" }, text: { nl: "Je weet altijd waar het project staat.", en: "You always know where the project stands." } },
      { title: { nl: "Minder risico", en: "Less risk" }, text: { nl: "Knelpunten worden vroeg gesignaleerd en aangepakt.", en: "Bottlenecks are spotted early and addressed." } },
      { title: { nl: "Eén aanspreekpunt", en: "One point of contact" }, text: { nl: "Iemand die zowel de business als de techniek begrijpt.", en: "Someone who understands both the business and the technology." } },
    ],
    tools: ["jira", "clickup", "notion", "miro", "github", "slack"],
    related: ["digitale-strategie", "crm-implementatie", "saas-platform", "website-migratie"],
    faqs: [
      {
        q: { nl: "Begeleiden jullie ook projecten die door een ander bureau worden gebouwd?", en: "Do you also manage projects built by another agency?" },
        a: {
          nl: "Ja. We kunnen optreden als jouw onafhankelijke projectmanager of technisch adviseur en de communicatie met externe developers en leveranciers voor je regelen.",
          en: "Yes. We can act as your independent project manager or technical advisor and handle communication with external developers and vendors on your behalf.",
        },
      },
      {
        q: { nl: "Werken jullie agile of volgens een vaste fasering?", en: "Do you work agile or in fixed phases?" },
        a: {
          nl: "Meestal agile, met korte sprints, regelmatige demo's en een geprioriteerde backlog. Bij projecten met vaste eisen of harde deadlines combineren we dat met een duidelijke fasering.",
          en: "Usually agile, with short sprints, regular demos and a prioritised backlog. For projects with fixed requirements or hard deadlines we combine that with clear phasing.",
        },
      },
      {
        q: { nl: "Wat kost IT-projectmanagement?", en: "How much does IT project management cost?" },
        a: {
          nl: "Dat hangt af van de omvang en duur van het project. We werken op basis van een vast aantal uren per week of een vaste prijs per fase. Na een kennismaking ontvang je een voorstel op maat.",
          en: "It depends on the size and duration of the project. We work with a fixed number of hours per week or a fixed price per phase. After an intro call you receive a tailored proposal.",
        },
      },
    ],
    metaDescription: {
      nl: "IT-projectmanagement en IT-consultancy door M7: softwareselectie, projectleiding en implementatie, met grip op planning, budget en kwaliteit.",
      en: "IT project management and IT consultancy by M7: software selection, project leadership and implementation, with control over planning, budget and quality.",
    },
  },
];
