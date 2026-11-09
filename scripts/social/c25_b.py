"""Round 25 (car-b): eight swipe carousels and three single-image posts in the approved round-24 system.

Topics (all copy from the site's own content, see the captions' `sources`):
  webshop, klantportaal, automation, ai-ontwikkelen, aeo, lokale-seo, hosting, consent-mode
  posts: post-webshop, post-klantportaal, post-hosting

The system is social24's: dark site background, one soft teal glow, the M7 badge top left on x = 88, Montserrat, a bold
title at y 260 with muted body under it, real M7 visuals on the same left edge running off the bottom and/or the right
(crop boxes keep every UI whole; the page around it runs off), the site's pill CTA on the closing slide.

  python c25_b.py stills [ids...]     layout check into the work folder
  python c25_b.py render [ids...]     final PNGs into <S>/r25/deliver/carousels/<id>/
  python c25_b.py captions            caption JSON per item into <S>/r25/deliver/captions/
"""
import json
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
import social24 as s24  # noqa: E402
from social24 import CW, KX, MUTED, c_body, c_rows, c_title, pill, slide, url_line  # noqa: E402

S = s24.S
WORK = Path("/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r25w-car-b")
OUT = S / "r25" / "deliver"
MC = s24.MEDIA / "cases"
CAP = S / "r21" / "cap"
HUB = WORK / "cap"          # own captures of answers.m7branding.com (M7's answer hub), viewed only, nothing typed or sent


def setup():
    s24.WORK = WORK
    s24.OUT = OUT
    s24.install()


# ---------------------------------------------------------------- material
def prep(name, src, box=None, frame_t=None):
    """A real visual as a jpg in the work folder: optional crop box (x, y, w, h) in source pixels; a video gives one frame."""
    p = WORK / "img" / f"{name}.jpg"
    if not p.exists():
        p.parent.mkdir(parents=True, exist_ok=True)
        src = Path(src)
        if src.suffix == ".mp4":
            tmp = WORK / "img" / f"{name}-src.png"
            s24.ff("-ss", f"{frame_t:.2f}", "-i", src, "-frames:v", "1", tmp)
            src = tmp
        im = Image.open(src).convert("RGB")
        if box:
            x, y, w, h = box
            im = im.crop((x, y, x + w, y + h))
        im.save(p, quality=93)
        if src.name.endswith("-src.png"):
            src.unlink()
    return p


def vis(src, y, w, x=KX, radius=24, bg="#0b0b0e", pos="50% 0%", shadow=None):
    """c_img with the rect taken from the image's own aspect (nothing cropped by the card), left edge on x."""
    iw, ih = Image.open(src).size
    return s24.c_img(src, {"x": x, "y": y, "w": w, "h": round(w * ih / iw)}, radius=radius, bg=bg, pos=pos, shadow=shadow)


def close(title, body, size=72, body_y=470):
    """The closing slide: question, short body, the site's pill CTA and the url."""
    return slide([c_title(title, size=size), c_body(body, body_y),
                  pill("Plan een kennismaking", KX, body_y + 230, t0=0.0), url_line(KX, body_y + 400, t0=0.0)], glow_at=(540, 900), a=0.12)


def note(lines, y=1120):
    return c_body(lines, y, size=26, color="#77777f")


# ---------------------------------------------------------------- the carousels
def carousels():
    C = {}

    # 1. Webshop (Shopify & WooCommerce): websites-webshops.ts `webshop`; cases hela, digital-newsgroup, cryptocointalk,
    #    alpaca-boutique (none is a concept case)
    hela_mac = MC / "hela" / "m-mac.webp"                               # 2400x1600; at 1193 wide the frame cuts between
                                                                        # "Recepten" and "Over" (no nav item is cut)
    hela_pdp = prep("hela-pdp", CAP / "hela" / "flow-21-product-allergenen-desktop.mp4", (215, 0, 2665, 1800), 0.6)
    dng = prep("dng-shop", MC / "digital-newsgroup" / "screen-desktop.webp", (90, 1130, 1350, 1120))   # three site cards whole
    cct = prep("cct-pricing", MC / "cryptocointalk" / "r-flow-2.mp4", (250, 0, 1670, 1080), 1.0)       # the whole monitor
    alp = MC / "alpaca-boutique" / "cover.webp"                         # 1600x1000; at 1047 wide only the page margin runs off
    C["webshop"] = [
        slide([c_title(["Een webshop die", "*verkoopt*"], size=76), c_body(["Van productpagina tot iDEAL-checkout."], 470),
               vis(hela_mac, 620, 1193, bg="#1c1c1f")]),
        slide([c_title(["Shopify of", "WooCommerce?"], size=68),
               c_body(["Shopify is de snelste route naar een", "stabiele, schaalbare shop met een sterke", "checkout en weinig onderhoud.", "",
                       "WooCommerce geeft je volledige vrijheid", "en sluit direct aan op een bestaande", "WordPress-website.", "",
                       "We adviseren op basis van je assortiment,", "groeiplannen, budget en koppelingen."], 450)]),
        slide([c_title(["Gekoppeld aan", "je voorraad"], size=68),
               c_body(["De shop van Hela is gekoppeld aan PS in", "Food en Business Central, voor voorraad", "en magazijn. Ook productinformatie en",
                       "allergenen komen via een koppeling binnen."], 450),
               vis(hela_pdp, 700, 1083, bg="#ffffff")]),
        slide([c_title(["Soepel afrekenen"], size=68), c_body(["Via Mollie of Stripe bied je onder meer:"], 380),
               c_rows(["iDEAL", "Creditcard", "Apple Pay en Google Pay", "Bancontact", "Klarna"], 470),
               c_body(["We richten alles in en testen de volledige", "checkout voor livegang."], 1040)]),
        slide([c_title(["Plaatsingen kopen", "als in een webshop"], size=68),
               c_body(["Voor Digital Newsgroup: een lichte shop", "zonder login of account. Een API haalt alle", "websites en hun domain ratings op."], 450),
               vis(dng, 690, 1080, bg="#ffffff")]),
        slide([c_title(["Abonnementen", "in WooCommerce"], size=68),
               c_body(["Bij CryptoCoinTalk geeft een abonnement", "toegang tot de University. Funnels", "stimuleren leden om naar een hoger",
                       "abonnement te gaan."], 450),
               vis(cct, 740, 1100, bg="#e4e4e6")]),
        slide([c_title(["De winkel van de", "farm, ook online"], size=68),
               c_body(["Voor de Alpaca Boutique: een megamenu", "met zeven categorieën, zoeken en filters,", "en digitale cadeaubonnen."], 450),
               vis(alp, 730, 1047, bg="#2a1f3d")]),
        close(["Klaar voor een", "shop die verkoopt?"], ["We kiezen samen het platform dat het", "beste bij je past."]),
    ]

    # 2. Klantportaal: web-apps-portals-apps.ts `klantportaal`; the site's own visual for it is the JURGH portal design
    #    (application-visuals.ts); cases the-digital-clinic, kds-stansvormen, bernheze-makelaars-taxatieportaal
    jp1 = prep("jurgh-portal-dashboard", MC / "jurgh-detailing" / "s-portal-1.webp", (58, 505, 2282, 1805))   # the browser
    jp2 = prep("jurgh-portal-detail", MC / "jurgh-detailing" / "s-portal-2.webp", (58, 180, 2282, 2050))      # window only
    tdc = prep("tdc-intake", MC / "the-digital-clinic" / "r-flow-1.mp4", (250, 0, 1670, 1080), 7.2)
    C["klantportaal"] = [
        slide([c_title(["Klanten regelen", "het *zelf*"], size=76),
               c_body(["Offertes, facturen, orders en documenten,", "24/7 in een eigen omgeving."], 470),
               vis(jp1, 680, 1000, bg="#f4f2ef")]),
        slide([c_title(["Wat is een", "klantportaal?"], size=68),
               c_body(["Een website is openbaar en informeert", "bezoekers. Een klantportaal is een", "beveiligde omgeving achter een login,",
                       "waarin elke klant zijn eigen gegevens,", "documenten en acties ziet.", "",
                       "Vaak koppelen we beide, zodat klanten", "vanaf je website direct inloggen."], 450)]),
        slide([c_title(["Selfservice die", "tijd bespaart"], size=68),
               c_body(["Klanten accepteren offertes digitaal,", "downloaden facturen, betalen direct en", "volgen de status van hun aanvraag."], 450),
               vis(jp2, 690, 1000, bg="#f4f2ef")]),
        slide([c_title(["Gekoppeld aan", "je systemen"], size=68),
               c_body(["We koppelen het portaal met je CRM, ERP", "of boekhouding, zoals Odoo, HubSpot of", "Exact Online, zodat gegevens automatisch",
                       "synchroniseren.", "",
                       "Met rollen en rechten bepaal je wie wat", "ziet. Tweestapsverificatie en versleutelde", "opslag houden gegevens veilig."], 450)]),
        slide([c_title(["Drie soorten", "gebruikers"], size=68),
               c_body(["Voor The Digital Clinic bouwden we een", "portaal met eigen omgevingen voor cliënt,", "huisarts en apotheek, van intake en",
                       "behandeling tot chat en levering."], 450),
               vis(tdc, 720, 1100, bg="#e4e4e6")]),
        slide([c_title(["Van offerte", "tot taxatie"], size=68),
               c_body(["In het offerteportaal van KDS rekenen", "klanten hun aanvraag door op basis van", "een prijzensheet met klantcodes. Na hun",
                       "orderbevestiging volgt een mail met pdf.", "",
                       "In het taxatieportaal van Bernheze", "Makelaars leveren klanten per dossier", "hun bestanden aan, met een check of",
                       "alles compleet is."], 450)]),
        close(["Wat regelen jouw", "klanten straks zelf?"], ["We beginnen met een analyse van je", "processen en gebruikersrollen."]),
    ]

    # 3. Automation: automation-funnels.ts `workflow-automatisering` + `crm-implementatie`; cases bctn-qhse, plenty-planet,
    #    steddion-tools, silvr
    bctn = prep("bctn-report", MC / "bctn-qhse" / "s-fa-checklist-rapport.webp", (1090, 120, 1310, 1380))     # the weekly report
    pp = prep("plenty-intake", CAP / "plenty-planet" / "flow-31-intake-configurator-desktop.mp4", (200, 0, 2680, 1800), 4.6)
    sted = prep("sted-teruglevering", s24.STED, (700, 360, 1720, 1100), 7.6)   # from just above the modal: the whole modal fits
    silvr = prep("silvr-kenteken", CAP / "silvr" / "flow-21-journey-desktop.mp4", (760, 320, 1360, 800), 3.9)   # step 2/5 card, cursor below it
    C["automation"] = [
        slide([c_title(["Je tools werken", "*samen*"], size=76),
               c_body(["Automatisering en CRM-koppelingen,", "met voorbeelden uit ons werk."], 470),
               vis(bctn, 660, 1050, bg="#2a3a4a")]),
        slide([c_title(["Van formulier", "tot factuur"], size=68),
               c_body(["Een aanvraag op je website wordt", "automatisch:"], 450),
               c_rows(["Een lead in je CRM", "Een taak voor sales", "Een bericht in Slack", "Een concept-offerte"], 600),
               c_body(["We brengen je processen in kaart en", "automatiseren eerst wat de meeste tijd kost."], 1060)]),
        slide([c_title(["Leads met een", "score in Odoo"], size=68),
               c_body(["In de configurator van Plenty Planet", "bepalen vragen over sector, locatie en", "planning een leadscore. Aanvragen gaan",
                       "direct naar Odoo CRM, met prioriteit."], 450),
               vis(pp, 740, 1080, bg="#ffffff")]),
        slide([c_title(["Van tool", "naar HubSpot"], size=68),
               c_body(["De tools die we voor Steddion bouwden,", "zijn ingericht als leadfunnel. Aanvragen", "komen direct in HubSpot terecht."], 450),
               vis(sted, 690, 1085, bg="#5d5670")]),
        slide([c_title(["Direct door", "naar Teamleader"], size=68),
               c_body(["Bij Silvr loopt elke aanvraag via onze", "eigen koppeling door naar Teamleader,", "met verrijkte leadgegevens en",
                       "persoonlijke e-mailopvolging."], 450),
               vis(silvr, 740, 1180, bg="#3a3f5c")]),
        slide([c_title(["Betrouwbaar en", "beheersbaar"], size=68),
               c_body(["We bouwen scenario's met foutafhandeling,", "logging en meldingen, zodat je weet dat", "alles blijft draaien.", "",
                       "Voor gevoelige data of hoge volumes", "zetten we n8n self-hosted in, met je data", "binnen de EU."], 450)]),
        close(["Wat kost jou nu", "de meeste tijd?"], ["Zodat je team zich kan richten op", "werk dat er echt toe doet."]),
    ]

    # 4. Ontwikkelen met AI: ai-consultancy.ts `ai-integraties`, `ai-agents`, `ai-chatbots`; cases buitenstate-tools (the
    #    AI house swiper, in development), monvy (supportbot on ChatGPT), alpacafarm-vorstenbosch (qbud.ai chat, placed by M7)
    mm_zoek = MC / "buitenstate-tools" / "s-fa-matchmaker-zoeken.webp"          # 1163x888, the whole tool
    mm_swipe = prep("matchmaker-swipen", MC / "buitenstate-tools" / "s-fa-matchmaker-swipen.webp", (57, 78, 1180, 989))
    monvy = MC / "monvy" / "s-fa-design-01.webp"                                 # 2400x1019; at 2024 wide the frame cuts in
                                                                                 # the gap after the second column
    C["ai-ontwikkelen"] = [
        slide([c_title(["AI in je eigen", "*software*"], size=76),
               c_body(["AI-integraties, AI-agents en chatbots:", "wat ze doen en hoe we ze bouwen."], 470),
               vis(mm_zoek, 640, 1018, bg="#f3f1e8")]),
        slide([c_title(["AI-integraties"], size=68),
               c_body(["We integreren taalmodellen via de API's", "van OpenAI, Claude en Gemini in je", "bestaande software, webapp of website.", "",
                       "Denk aan een zoekfunctie die vragen in", "gewone taal begrijpt, samenvattingen van", "dossiers of het classificeren van tickets.", "",
                       "Met RAG en een vectordatabase werkt het", "model met jouw actuele data."], 380)]),
        slide([c_title(["Zoeken in je", "eigen woorden"], size=68),
               c_body(["Voor Buitenstate ontwikkelen we een", "woningswiper. Je vertelt wat je zoekt, AI", "stelt passende woningen voor, elk met een",
                       "matchscore. Nu nog in ontwikkeling."], 450),
               vis(mm_swipe, 740, 1000, bg="#f3f1e8")]),
        slide([c_title(["AI-agents"], size=68),
               c_body(["Digitale collega's die zelfstandig taken", "uitvoeren in je bestaande tools:"], 380),
               c_rows(["Aanvragen verwerken", "Gegevens verrijken", "Documenten opstellen", "Collega's inschakelen"], 520),
               c_body(["Jij bepaalt wat een agent zelf mag doen", "en waar een mens akkoord geeft. Elke actie", "wordt gelogd."], 980)]),
        slide([c_title(["AI-chatbots"], size=68),
               c_body(["Een assistent die antwoord geeft op basis", "van jouw eigen kennis, in jouw tone of", "voice en met bronvermelding.", "",
                       "Weet hij iets niet, dan zegt hij dat eerlijk", "en schakelt hij door naar een collega.", "",
                       "Op de site van Alpacafarm Vorstenbosch", "plaatsten we een AI-chat van qbud.ai."], 380)]),
        slide([c_title(["Een supportbot", "in je platform"], size=68),
               c_body(["In het platform voor cashflowbeheer dat", "we voor Monvy ontwierpen en bouwden, zit", "een supportbot op basis van ChatGPT."], 450),
               vis(monvy, 700, 2024, bg="#f7f8fa")]),
        close(["Waar helpt AI", "in jouw product?"], ["Na een korte technische verkenning", "ontvang je een voorstel op maat."]),
    ]

    # 5. AEO: seo-aeo-geo.ts `aeo` (+ the service chapters and the `geo` application on answers.m7branding.com);
    #    case the-sandt; M7's own answer hub (captured from answers.m7branding.com, viewed only)
    hub_q = prep("hub-answer", HUB / "answers-seo.png", (340, 124, 1470, 1316))        # question, direct answer, first subhead
    hub_home = prep("hub-home", HUB / "answers-home.png", (680, 0, 1520, 940))          # hero, search and three questions
    sandt_faq = s24.still("sandt-faq", s24.SANDT, 9.0, "scale=1500:-2:flags=lanczos")
    C["aeo"] = [
        slide([c_title(["Het directe", "*antwoord* zijn"], size=76),
               c_body(["In featured snippets, People Also Ask", "en voice search."], 470),
               vis(hub_q, 650, 1040, bg="#f4f4f5")]),
        slide([c_title(["Wat is AEO?"], size=68),
               c_body(["Answer Engine Optimization: je content zo", "optimaliseren dat zoekmachines en", "assistenten jouw tekst gebruiken als direct",
                       "antwoord op een vraag.", "",
                       "Zoals in een featured snippet, People Also", "Ask of een voice-antwoord."], 380)]),
        slide([c_title(["Wat is een", "featured snippet?"], size=68),
               c_body(["Een uitgelicht antwoordblok bovenaan de", "zoekresultaten van Google, met tekst, een", "lijst of tabel uit een webpagina en een",
                       "link naar de bron.", "", "Google kiest zelf welke pagina daar", "verschijnt."], 450)]),
        slide([c_title(["Vragen als", "vertrekpunt"], size=68),
               c_body(["We brengen in kaart welke vragen je", "doelgroep stelt, via People Also Ask,", "zoekwoordtools, je klantenservice en",
                       "salesgesprekken.", "", "Elke vraag krijgt een helder, beknopt", "antwoord, gevolgd door verdieping voor",
                       "wie meer wil weten."], 450)]),
        slide([c_title(["Structuur die", "machines begrijpen"], size=68),
               c_rows(["Een direct antwoord bovenaan", "Tussenkoppen in vraagvorm", "Opsommingen en tabellen", "FAQ's met structured data"], 470),
               c_body(["Zo is je content makkelijk te herkennen", "als antwoord, in Google én in AI-assistenten."], 950)]),
        slide([c_title(["Voorbeeld:", "The Sandt"], size=68),
               c_body(["Een FAQ per onderwerp, met gestructureerde", "FAQ-data. Google noemt The Sandt als bron", "in zijn AI-antwoorden."], 450),
               s24.c_img(sandt_faq, {"x": 300, "y": 800, "w": 1500, "h": 938}, bg="#ffffff"),
               s24.c_img(s24.AI, {"x": KX, "y": 680, "w": 1000, "h": round(668 * 1000 / 1420)}, radius=20, bg="#202124",
                         shadow="0 50px 120px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.12)")]),
        slide([c_title(["We doen het", "zelf ook"], size=68),
               c_body(["Een answer hub met heldere antwoorden", "op veelgestelde vragen, elk op een eigen", "pagina. Die van ons staat op",
                       "answers.m7branding.com."], 450),
               vis(hub_home, 712, 1032, bg="#0b1530")]),
        close(["Welke vragen stelt", "jouw klant?"], ["We brengen ze in kaart en geven elke", "vraag een helder antwoord."]),
    ]

    # 6. Lokale SEO & Google Bedrijfsprofiel: seo-aeo-geo.ts `lokale-seo`; case alpacafarm-vorstenbosch
    alp_ipad = prep("alpacafarm-ipad", MC / "alpacafarm-vorstenbosch" / "m-ipad.webp", (330, 150, 2070, 1350))   # whole iPad
    alp_cal = prep("alpacafarm-kalender", MC / "alpacafarm-vorstenbosch" / "r-flow-1.mp4", (0, 0, 1500, 1080), 3.0)
    C["lokale-seo"] = [
        slide([c_title(["Gevonden worden", "in je *regio*"], size=76),
               c_body(["Met lokale SEO en een sterk", "Google Bedrijfsprofiel."], 470),
               vis(alp_ipad, 660, 1100, bg="#0d0d0f")]),
        slide([c_title(["Wat is lokale SEO?"], size=68),
               c_body(["Je online aanwezigheid optimaliseren voor", "zoekopdrachten met een lokale intentie,", "zoals 'webdesigner Eindhoven' of",
                       "'loodgieter in de buurt'.", "",
                       "Het draait om je Google Bedrijfsprofiel,", "lokale content op je website, reviews en", "consistente bedrijfsgegevens."], 380)]),
        slide([c_title(["Een profiel dat", "overtuigt"], size=68),
               c_body(["We optimaliseren je Google Bedrijfsprofiel", "volledig:"], 450),
               c_rows(["Categorieën en diensten", "Openingstijden", "Foto's en berichten", "Veelgestelde vragen"], 600),
               c_body(["Met een slimme aanpak voor het verzamelen", "van en reageren op reviews."], 1060)]),
        slide([c_title(["Hoger in", "Google Maps"], size=68),
               c_body(["Google kijkt vooral naar relevantie,", "afstand en bekendheid.", "",
                       "Je beïnvloedt dat met een volledig en", "actief profiel, de juiste categorieën,", "regelmatig nieuwe reviews met reacties,",
                       "consistente bedrijfsgegevens en een", "website met sterke lokale signalen."], 450)]),
        slide([c_title(["Lokaal relevant op", "je website"], size=68),
               c_body(["Locatiepagina's, LocalBusiness-structured", "data, consistente NAW-gegevens in", "bedrijvengidsen en lokale links maken voor",
                       "Google duidelijk waar je actief bent.", "",
                       "Ideaal voor bedrijven met één vestiging,", "meerdere locaties of een duidelijk", "werkgebied."], 450)]),
        slide([c_title(["Voorbeeld:", "Alpacafarm"], size=68),
               c_body(["Lokale pagina's voor bezoekers en bedrijven", "uit verschillende steden en regio's, en een", "openingskalender die de farm zelf bijwerkt."], 450),
               vis(alp_cal, 690, 1005, bg="#ececec")]),
        slide([c_title(["Lokaal zonder", "vestiging?"], size=68),
               c_body(["Gedeeltelijk. Met een werkgebied in je", "Google Bedrijfsprofiel en waardevolle", "regiopagina's kun je ook in omliggende",
                       "plaatsen zichtbaar worden.", "",
                       "Nep-adressen raden we nadrukkelijk af: dat", "is in strijd met de richtlijnen van Google."], 450)]),
        close(["Zichtbaar voor", "klanten in je regio?"], ["We beginnen bij een sterk Google", "Bedrijfsprofiel als basis."]),
    ]

    # 7. Hosting & onderhoud (webplans) + domeinbeheer, DNS & e-mail: websites-webshops.ts `hosting-onderhoud`,
    #    `domeinbeheer`; case atl-plus (we also run its sign-up environment and website)
    atl = prep("atl-devices", MC / "atl-plus" / "m-cover.webp", (300, 140, 1840, 1260))           # laptop and phone whole
    C["hosting"] = [
        slide([c_title(["Je website in", "goede *handen*"], size=76),
               c_body(["Hosting en onderhoud in één webplan."], 470),
               vis(atl, 670, 1020, bg="#e9e9eb")]),
        slide([c_title(["Voorkomen is beter", "dan herstellen"], size=68),
               c_body(["Veel storingen en hacks zijn te voorkomen", "met goed onderhoud.", "",
                       "We houden CMS, thema's en plugins", "up-to-date, testen updates voordat ze live", "gaan, maken automatische back-ups en",
                       "monitoren je site op uptime en beveiliging."], 450)]),
        slide([c_title(["Meer dan 3.000", "storingen verholpen"], size=68),
               c_body(["Gaat er toch iets mis? Dan lossen we", "het snel op."], 450)]),
        slide([c_title(["Wat er in een", "webplan zit"], size=68),
               c_rows(["Snelle hosting met SSL", "Automatische back-ups", "Updates van CMS en plugins", "Uptime- en beveiligingsmonitoring",
                       "Support bij storingen"], 470, size=42)]),
        slide([c_title(["Een webplan dat", "bij je past"], size=68),
               c_body(["Een Webflow-site vraagt minder technisch", "onderhoud dan een WordPress-webshop met", "tientallen plugins. Daarom stemmen we je",
                       "webplan af op je platform en wensen.", "",
                       "Optioneel met uren voor aanpassingen,", "doorontwikkeling en SEO-verbeteringen."], 450)]),
        slide([c_title(["Domein, DNS", "en e-mail"], size=68),
               c_body(["We registreren je domeinen op naam van", "je organisatie en houden verlengingen in", "de gaten. Inmiddels beheren we meer dan",
                       "275 webdomeinen.", "",
                       "Met SPF, DKIM en DMARC verkleinen we de", "kans dat je mail in de spam belandt."], 450)]),
        close(["Je hosting naar", "M7 verhuizen?"], ["We verhuizen je website, e-mail en domein", "en plannen de overstap zorgvuldig."]),
    ]

    # 8. Cookie compliance & Consent Mode v2, a development in our market: websites-webshops.ts `cookie-compliance`,
    #    automation-funnels.ts `tracking-analytics` (FAQ: Google asks for it since March 2024 in the EEA). Text only, like
    #    the approved accessibility carousel.
    C["consent-mode"] = [
        slide([c_title(["Consent", "*Mode v2*"], size=84),
               c_body(["Wat Google sinds 2024 verwacht,", "en wat het betekent voor je website."], 500)], glow_at=(780, 1050), a=0.11),
        slide([c_title(["Wat is Consent", "Mode v2?"], size=68),
               c_body(["Een manier om de cookiekeuze van je", "bezoeker door te geven aan Google,", "zoals Analytics en Ads. Die passen hun",
                       "gedrag daarop aan."], 450)]),
        slide([c_title(["Wat Google sinds", "2024 vraagt"], size=68),
               c_body(["Google vraagt het sinds maart 2024 van wie", "in de EER meet en adverteert.", "",
                       "Zonder Consent Mode v2 kun je in de EER", "minder gebruikmaken van remarketing en", "gepersonaliseerde advertenties."], 450)]),
        slide([c_title(["Eerst kijken wat er", "nu gebeurt"], size=68),
               c_body(["We scannen je website op cookies en", "scripts van derden: wat wordt er geplaatst,", "door wie en vóór of ná toestemming?", "",
                       "Vaak vinden we oude pixels, vergeten tags", "of embeds zoals YouTube en Google Maps die", "zonder toestemming gegevens doorsturen."], 450)]),
        slide([c_title(["Een eerlijke", "banner"], size=68),
               c_body(["Weigeren is net zo makkelijk als", "accepteren, met heldere categorieën en", "een cookieverklaring die klopt.", "",
                       "Via Google Tag Manager laden scripts pas", "na toestemming, en Consent Mode v2 geeft", "de keuze van je bezoeker door aan Google."], 450)]),
        slide([c_title(["Toestemming", "nodig?"], size=68),
               c_body(["Voor functionele cookies niet.", "",
                       "Voor analytische cookies met weinig impact", "op privacy gelden in Nederland soepelere", "regels, mits je ze privacyvriendelijk instelt.", "",
                       "Voor marketing- en trackingcookies heb je", "wel vooraf toestemming nodig."], 450),
               note(["We zijn geen juristen. Voor juridische vragen", "werken we graag samen met jouw jurist."], 1150)]),
        close(["Kloppen jouw", "cookies al?"], ["We scannen je website en zetten de", "knelpunten op een rij."], size=76),
    ]
    return C


def posts():
    """Single-image posts: one strong line from the site's copy, one real visual."""
    P = {}
    hela = prep("hela-desk", MC / "hela" / "r-07-d15-mac-phone-desk-b.webp", (560, 300, 1440, 1033))       # laptop and phone
    P["post-webshop"] = [slide([c_title(["Een goede shop", "verkoopt ook als", "jij slaapt."], size=76),
                                c_body(["Webshops in Shopify en WooCommerce."], 550), vis(hela, 680, 1060, bg="#2a2a2c")])]
    jp2 = WORK / "img" / "jurgh-portal-detail.jpg"
    P["post-klantportaal"] = [slide([c_title(["Minder mail en", "telefoon voor jou."], size=76),
                                     c_body(["Meer gemak en vertrouwen voor je klant,", "in een eigen klantportaal."], 470),
                                     vis(jp2, 680, 1000, bg="#f4f2ef")])]
    atl = prep("atl-desk", MC / "atl-plus" / "r-13-d15-mac-phone-desk-b.webp", (300, 300, 1700, 1033))     # the whole laptop
    P["post-hosting"] = [slide([c_title(["Wij houden je site", "in de gaten,", "jij onderneemt."], size=76),
                                c_body(["Hosting en onderhoud in één webplan."], 550), vis(atl, 680, 1100, bg="#1e1e20")])]
    return P



# ---------------------------------------------------------------- captions (copy from the site, nothing invented)
WS = "src/content/services/websites-webshops.ts"
WA = "src/content/services/web-apps-portals-apps.ts"
AF = "src/content/services/automation-funnels.ts"
AI_ = "src/content/services/ai-consultancy.ts"
SEO = "src/content/services/seo-aeo-geo.ts"
CAPTIONS = {
    "webshop": dict(
        type="carousel", topic="Webshop (Shopify & WooCommerce)",
        instagram="Een webshop die verkoopt, van productpagina tot iDEAL-checkout.\n"
                  "Shopify of WooCommerce? We adviseren op basis van je assortiment, groeiplannen en budget.\n"
                  "Met voorbeelden van Hela, Digital Newsgroup, CryptoCoinTalk en de Alpaca Boutique.\n"
                  "Meer op m7branding.com\n"
                  "#webshop #shopify #woocommerce #ecommerce #webdesign",
        linkedin="Een goede shop verkoopt ook als jij slaapt.\n\n"
                 "We bouwen webshops in Shopify en WooCommerce die er premium uitzien, snel laden en soepel afrekenen. "
                 "Inclusief betalingen via Mollie of Stripe, verzending, btw en koppelingen met je voorraad en boekhouding.\n\n"
                 "Shopify is de snelste route naar een stabiele, schaalbare shop met weinig onderhoud. WooCommerce geeft je volledige "
                 "vrijheid en sluit direct aan op een bestaande WordPress-website.\n\n"
                 "In deze carousel: de shop van Hela, gekoppeld aan PS in Food en Business Central, de shop van Digital Newsgroup zonder "
                 "login of account, de abonnementen van CryptoCoinTalk en de webshop van de Alpaca Boutique.\n\n"
                 "Meer op m7branding.com\n\n#webshop #ecommerce",
        sources=[f"{WS} applications[webshop]: title, summary, intro, body (Shopify of WooCommerce?, Ingericht op conversie), "
                 "faqs (betaalmethoden, koppeling boekhouding/voorraad)",
                 f"{WS} service: description (Dan kiezen we samen het platform dat het beste bij je past)",
                 "src/content/cases-new-b.ts hela: approach (WooCommerce, PS in Food, Business Central, productinformatie, allergenen)",
                 "src/content/cases-new-b.ts digital-newsgroup: title, approach (shop zonder login of account, API, domain ratings)",
                 "src/content/cases-new-b.ts cryptocointalk: approach, result (abonnementen, University, funnels)",
                 "src/content/cases-new-a.ts alpaca-boutique: title, summary, approach (megamenu, zeven categorieën, filters, cadeaubonnen)"]),
    "klantportaal": dict(
        type="carousel", topic="Klantportaal",
        instagram="Een eigen online omgeving waar klanten zelf regelen wat ze nodig hebben.\n"
                  "Offertes, facturen, orders en documenten, 24/7, gekoppeld aan je CRM, ERP of boekhouding.\n"
                  "Met voorbeelden van The Digital Clinic, KDS en Bernheze Makelaars.\n"
                  "Meer op m7branding.com\n"
                  "#klantportaal #webapp #maatwerk #selfservice #ux",
        linkedin="Minder mail en telefoon voor jou, meer gemak en vertrouwen voor je klant.\n\n"
                 "Met een klantportaal geef je klanten 24/7 toegang tot hun offertes, facturen, orders, documenten en tickets. "
                 "Ze accepteren offertes digitaal, downloaden facturen, betalen direct en volgen de status van hun aanvraag.\n\n"
                 "We koppelen het portaal met je CRM, ERP of boekhouding, zoals Odoo, HubSpot of Exact Online. Met rollen, rechten en "
                 "tweestapsverificatie blijven gegevens veilig.\n\n"
                 "Voorbeelden uit ons werk: het portaal van The Digital Clinic met eigen omgevingen voor cliënt, huisarts en apotheek, "
                 "het offerteportaal van KDS en het taxatieportaal van Bernheze Makelaars.\n\n"
                 "Meer op m7branding.com",
        sources=[f"{WA} applications[klantportaal]: summary, intro, body (Selfservice die tijd bespaart, Gekoppeld aan je systemen), "
                 "deliverables (Analyse van processen en gebruikersrollen), faqs (verschil met een website)",
                 "src/content/application-visuals.ts klantportaal: the site's visual for this application (jurgh-detailing/s-portal-1.webp)",
                 "src/content/cases.ts the-digital-clinic: approach, result (drie soorten gebruikers; van intake en behandeling tot chat en levering)",
                 "src/content/cases-new-a.ts kds-stansvormen: summary, approach (offerteportaal, prijzensheet met klantcodes, mail met pdf)",
                 "src/content/cases-archive.ts bernheze-makelaars-taxatieportaal: summary (dossiers, bestanden aanleveren, check op compleetheid)"]),
    "automation": dict(
        type="carousel", topic="Workflow-automatisering en CRM-koppelingen",
        instagram="Je tools werken samen, en jij hoeft niets meer over te typen.\n"
                  "Van formulier tot factuur in Make, Zapier of n8n, met leads die direct in je CRM landen.\n"
                  "Met voorbeelden van BCTN, Plenty Planet, Steddion en Silvr.\n"
                  "Meer op m7branding.com\n"
                  "#automatisering #crm #workflow #make #n8n",
        linkedin="Hoeveel tijd gaat er elke week op aan gegevens overtypen, bestanden verplaatsen en mailtjes doorsturen?\n\n"
                 "Met workflow-automatisering in Make, Zapier of n8n laten we je tools samenwerken. Een aanvraag op je website wordt "
                 "automatisch een lead in je CRM, een taak voor sales, een bericht in Slack en een concept-offerte in je boekhoudpakket.\n\n"
                 "Een paar voorbeelden: het QHSE-platform van BCTN mailt elke week automatisch een rapport per terminal. De configurator "
                 "van Plenty Planet zet aanvragen met een leadscore in Odoo CRM. De tools van Steddion sturen aanvragen naar HubSpot, en "
                 "bij Silvr loopt elke aanvraag via onze eigen koppeling door naar Teamleader.\n\n"
                 "We bouwen met foutafhandeling, logging en meldingen, zodat je weet dat alles blijft draaien.\n\n"
                 "Meer op m7branding.com\n\n#automatisering #crm",
        sources=[f"{AF} applications[workflow-automatisering]: summary, intro, body (Van formulier tot factuur, Betrouwbaar en beheersbaar)",
                 f"{AF} applications[crm-implementatie]: intro, body (Inrichting, migratie en adoptie)",
                 f"{AF} service: intro (CRM-koppelingen en automatiseringen)",
                 "src/content/inbox/a.ts bctn-qhse: summary (QHSE-rapport per terminal, elke week automatisch gemaild); "
                 "src/content/application-visuals.ts workflow-automatisering (bctn-qhse/s-fa-checklist-rapport.webp)",
                 "src/content/cases-new-a.ts plenty-planet: approach (leadscore, koppeling naar Odoo CRM met kans en prioriteit)",
                 "src/content/cases-new-a.ts steddion-tools: summary, approach (leadfunnel, gekoppeld aan HubSpot)",
                 "src/content/cases-new-b.ts silvr: summary, approach (eigen koppeling met Teamleader, verrijkte leadgegevens, e-mailopvolging)"]),
    "ai-ontwikkelen": dict(
        type="carousel", topic="Ontwikkelen met AI: AI-integraties, AI-agents en AI-chatbots",
        instagram="AI ingebouwd in je eigen platform, portaal of app, via OpenAI, Claude of Gemini.\n"
                  "Plus agents die taken uitvoeren in je tools, en chatbots die antwoorden op basis van jouw kennis.\n"
                  "Met de woningswiper die we voor Buitenstate ontwikkelen, en de supportbot in Monvy.\n"
                  "Meer op m7branding.com\n"
                  "#ai #aiintegratie #aiagents #chatbot #softwareontwikkeling",
        linkedin="AI precies waar je gebruikers al werken.\n\n"
                 "We integreren taalmodellen via de API's van OpenAI, Claude en Gemini in je bestaande software, webapp of website. "
                 "Denk aan een zoekfunctie die vragen in gewone taal begrijpt, samenvattingen van dossiers of het classificeren van tickets.\n\n"
                 "AI-agents voeren zelfstandig taken uit in je bestaande tools. Jij bepaalt wat een agent zelf mag doen en waar een mens "
                 "akkoord geeft. AI-chatbots antwoorden op basis van jouw eigen kennis, en zeggen het eerlijk als ze iets niet weten.\n\n"
                 "Uit ons werk: voor Buitenstate ontwikkelen we een woningswiper die woningen voorstelt op basis van wat je in je eigen "
                 "woorden zoekt. In het platform van Monvy zit een supportbot op basis van ChatGPT.\n\n"
                 "Meer op m7branding.com\n\n#ai #softwareontwikkeling",
        sources=[f"{AI_} applications[ai-integraties]: title, summary, intro, body (Slimme functies in je eigen product, Solide gebouwd), faqs (kosten: voorstel op maat)",
                 f"{AI_} applications[ai-agents]: summary, intro, body (Jij houdt de regie)",
                 f"{AI_} applications[ai-chatbots]: intro, body (Antwoorden uit jouw eigen kennis)",
                 "src/content/cases-new-a.ts buitenstate-tools: summary, approach (AI-woningswiper, matchscore, in ontwikkeling)",
                 "src/content/cases.ts monvy: approach (supportbot op basis van ChatGPT)",
                 "src/content/cases-new-a.ts alpacafarm-vorstenbosch: approach (AI-chat van qbud.ai geplaatst)"]),
    "aeo": dict(
        type="carousel", topic="AEO (Answer Engine Optimization)",
        instagram="Steeds meer zoekopdrachten eindigen met een direct antwoord.\n"
                  "Met AEO vergroten we de kans dat dat antwoord van jou komt: in featured snippets, People Also Ask en voice search.\n"
                  "We doen het zelf ook, op answers.m7branding.com.\n"
                  "Meer op m7branding.com\n"
                  "#aeo #seo #featuredsnippets #contentstrategie #zoekmachineoptimalisatie",
        linkedin="Steeds meer zoekopdrachten eindigen met een direct antwoord.\n\n"
                 "Met Answer Engine Optimization vergroten we de kans dat dat antwoord van jou komt: in featured snippets, People Also Ask, "
                 "voice assistants en antwoordblokken.\n\n"
                 "We brengen in kaart welke vragen je doelgroep stelt en geven elke vraag een helder, beknopt antwoord, met directe "
                 "antwoorden bovenaan, tussenkoppen in vraagvorm en FAQ-secties met structured data.\n\n"
                 "Voor The Sandt bouwden we de content zo op dat Google The Sandt als bron noemt in zijn AI-antwoorden. En onze eigen "
                 "answer hub staat op answers.m7branding.com.\n\n"
                 "Meer op m7branding.com\n\n#aeo #seo",
        sources=[f"{SEO} applications[aeo]: summary, intro, body (Vragen als vertrekpunt, Structuur die machines begrijpen), "
                 "faqs (Wat is AEO?, Wat is een featured snippet?)",
                 f"{SEO} applications[geo]: body (Een answer hub als bron: answers.m7branding.com), faqs (Wat is een answer hub?)",
                 f"{SEO} service: chapters (Zichtbaar worden in ChatGPT, Perplexity en AI Overviews: answers.m7branding.com als eigen answer hub)",
                 "src/content/cases-new-b.ts the-sandt: approach, result (AEO en GEO, gestructureerde FAQ-data, als bron genoemd in AI-antwoorden van Google)",
                 "visuals: own capture of answers.m7branding.com (viewed only)"]),
    "lokale-seo": dict(
        type="carousel", topic="Lokale SEO & Google Bedrijfsprofiel",
        instagram="Gevonden worden door klanten in jouw regio, in Google Maps en de lokale resultaten.\n"
                  "Met een sterk Google Bedrijfsprofiel als basis, en locatiepagina's die laten zien waar je actief bent.\n"
                  "Met Alpacafarm Vorstenbosch als voorbeeld.\n"
                  "Meer op m7branding.com\n"
                  "#lokaleseo #googlebedrijfsprofiel #googlemaps #seo #lokaalgevonden",
        linkedin="Zoekt iemand naar een bedrijf zoals het jouwe 'in de buurt'?\n\n"
                 "Met lokale SEO zorgen we dat je zichtbaar bent in Google Maps, de lokale zoekresultaten en AI-antwoorden voor jouw regio, "
                 "met een sterk Google Bedrijfsprofiel als basis.\n\n"
                 "Google kijkt vooral naar relevantie, afstand en bekendheid. Je beïnvloedt dat met een volledig en actief profiel, "
                 "reviews met reacties, consistente bedrijfsgegevens en een website met sterke lokale signalen.\n\n"
                 "Voor Alpacafarm Vorstenbosch maakten we lokale pagina's voor bezoekers en bedrijven uit verschillende steden en regio's.\n\n"
                 "Meer op m7branding.com\n\n#lokaleseo #googlebedrijfsprofiel",
        sources=[f"{SEO} applications[lokale-seo]: title, summary, intro, body (Een Google Bedrijfsprofiel dat overtuigt, "
                 "Lokaal relevant op je website), faqs (Wat is lokale SEO?, Hoe kom ik hoger in Google Maps?, steden zonder vestiging)",
                 "src/content/application-visuals.ts lokale-seo (alpacafarm-vorstenbosch)",
                 "src/content/cases-new-a.ts alpacafarm-vorstenbosch: summary, approach (lokale SEO-pagina's, openingstijdenplugin met maandkalender)"]),
    "hosting": dict(
        type="carousel", topic="Hosting & onderhoud (webplans), domeinbeheer, DNS & e-mail",
        instagram="Met een webplan van M7 is je website in goede handen.\n"
                  "Hosting, SSL, updates, back-ups, monitoring en support, plus je domeinen, DNS en zakelijke e-mail.\n"
                  "Meer dan 3.000 storingen verholpen, meer dan 275 webdomeinen in beheer.\n"
                  "Meer op m7branding.com\n"
                  "#hosting #websiteonderhoud #webflow #wordpress #domeinbeheer",
        linkedin="Voorkomen is beter dan herstellen.\n\n"
                 "Veel storingen en hacks zijn te voorkomen met goed onderhoud. We houden CMS, thema's en plugins up-to-date, testen updates "
                 "voordat ze live gaan, maken automatische back-ups en monitoren je site op uptime en beveiliging. Inmiddels hebben we meer "
                 "dan 3.000 storingen verholpen.\n\n"
                 "We stemmen je webplan af op je platform en wensen, en beheren ook je domeinen, DNS en zakelijke e-mail: meer dan 275 "
                 "webdomeinen inmiddels.\n\n"
                 "Hosting, domein, e-mail en web bij één team.\n\n"
                 "Meer op m7branding.com",
        sources=[f"{WS} applications[hosting-onderhoud]: title, summary, intro, body (Voorkomen is beter dan herstellen, Een webplan dat "
                 "bij je past), deliverables, benefits (Zorgeloos, Eén aanspreekpunt), faqs (hosting verhuizen)",
                 f"{WS} applications[domeinbeheer]: title, intro, body (Overzicht en controle: 275 webdomeinen; E-mail die aankomt), faqs (SPF, DKIM en DMARC)",
                 f"{WS} service: highlights (3.000+ storingen opgelost, 275+ webdomeinen in beheer)",
                 "src/content/cases-new-a.ts atl-plus: approach (beheer van de aanmeldomgeving en de website); "
                 "src/content/application-visuals.ts hosting-onderhoud (atl-plus)"]),
    "consent-mode": dict(
        type="carousel", topic="Cookie compliance & Consent Mode v2 (marktontwikkeling)",
        instagram="Sinds 2024 verwacht Google Consent Mode v2 voor advertentiefuncties in de EER.\n"
                  "Wat het is, wat het betekent voor je website, en hoe een eerlijke cookiebanner werkt.\n"
                  "Meer op m7branding.com\n"
                  "#consentmode #cookies #avg #googleads #tracking",
        linkedin="Sinds 2024 verwacht Google Consent Mode v2 voor advertentiefuncties in de EER.\n\n"
                 "Met Consent Mode v2 geef je de cookiekeuze van je bezoeker door aan Google-diensten zoals Analytics en Ads. Google vraagt "
                 "het sinds maart 2024 van adverteerders die in de EER meten en adverteren.\n\n"
                 "We scannen je website op cookies en scripts van derden, richten een banner in waarin weigeren net zo makkelijk is als "
                 "accepteren, en laten scripts via Google Tag Manager pas na toestemming laden.\n\n"
                 "We zijn geen juristen. Voor juridische vragen werken we graag samen met jouw jurist of privacyadviseur.\n\n"
                 "Meer op m7branding.com\n\n#consentmode #privacy",
        sources=[f"{WS} applications[cookie-compliance]: title, summary, intro, body (Eerst kijken wat er nu gebeurt, Een banner die "
                 "eerlijk is en werkt: Consent Mode v2, sinds 2024 voor advertentiefuncties in de EER), faqs (toestemming per cookie, "
                 "Wat is Consent Mode v2?, juridisch advies)",
                 f"{AF} applications[tracking-analytics]: faqs (Consent Mode v2: Google vraagt het sinds maart 2024 in de EER)"]),
    "post-webshop": dict(
        type="post", topic="Webshop",
        instagram="Een goede shop verkoopt ook als jij slaapt.\n"
                  "Met heldere productpagina's, slimme filters en een checkout zonder drempels.\n"
                  "Meer op m7branding.com\n"
                  "#webshop #shopify #woocommerce #ecommerce",
        linkedin="Een goede shop verkoopt ook als jij slaapt.\n\n"
                 "We ontwerpen productpagina's met heldere usp's, reviews en sterke beelden, slimme filters en een checkout zonder drempels. "
                 "In Shopify of WooCommerce, met betalingen via Mollie of Stripe en koppelingen met je voorraad en boekhouding.\n\n"
                 "Meer op m7branding.com",
        sources=[f"{WS} applications[webshop]: body (Ingericht op conversie), intro",
                 "visual: public/media/cases/hela (case hela, src/content/cases-new-b.ts)"]),
    "post-klantportaal": dict(
        type="post", topic="Klantportaal",
        instagram="Minder mail en telefoon voor jou, meer gemak en vertrouwen voor je klant.\n"
                  "Een klantportaal geeft klanten 24/7 toegang tot hun offertes, facturen, orders en documenten.\n"
                  "Meer op m7branding.com\n"
                  "#klantportaal #webapp #selfservice",
        linkedin="Minder mail en telefoon voor jou, meer gemak en vertrouwen voor je klant.\n\n"
                 "In een klantportaal accepteren klanten offertes digitaal, downloaden ze facturen, betalen ze direct en volgen ze de status "
                 "van hun aanvraag. Gekoppeld aan je CRM, ERP of boekhouding.\n\n"
                 "Meer op m7branding.com",
        sources=[f"{WA} applications[klantportaal]: intro, body (Selfservice die tijd bespaart, Gekoppeld aan je systemen)",
                 "visual: public/media/cases/jurgh-detailing/s-portal-2.webp (portal design, see application-visuals.ts klantportaal)"]),
    "post-hosting": dict(
        type="post", topic="Hosting & onderhoud",
        instagram="Wij houden je site in de gaten, jij onderneemt.\n"
                  "Hosting, updates, back-ups, monitoring en support in één webplan.\n"
                  "Meer op m7branding.com\n"
                  "#hosting #websiteonderhoud #webplan",
        linkedin="Wij houden je site in de gaten, jij onderneemt.\n\n"
                 "Met een webplan van M7 zorgen we voor snelle en veilige hosting, SSL, updates, back-ups en monitoring, en staan we klaar "
                 "als je hulp nodig hebt of iets wilt aanpassen.\n\n"
                 "Meer op m7branding.com",
        sources=[f"{WS} applications[hosting-onderhoud]: benefits (Zorgeloos), intro, summary",
                 "visual: public/media/cases/atl-plus (case atl-plus, src/content/cases-new-a.ts: beheer van de website)"]),
}


def write_captions():
    d = OUT / "captions"
    d.mkdir(parents=True, exist_ok=True)
    for n, c in CAPTIONS.items():
        files = sorted(str(f.relative_to(OUT)) for f in (OUT / "carousels" / n).glob(f"m7-{n}-*.png"))
        doc = {"id": n, "type": c["type"], "files": files, "topic": c["topic"], "instagram": c["instagram"],
               "linkedin": c["linkedin"], "sources": c["sources"]}
        (d / f"{n}.json").write_text(json.dumps(doc, ensure_ascii=False, indent=1) + "\n")
        print("caption", n, len(files), "files")


CAROUSELS = carousels
POSTS = posts


# ---------------------------------------------------------------- run
if __name__ == "__main__":
    setup()
    args = sys.argv[1:]
    what = args[0] if args else "stills"
    only = args[1:]
    if what == "captions":
        write_captions()
    if what in ("stills", "render"):
        items = {**CAROUSELS(), **POSTS()}
        for n, c in items.items():
            if not only or n in only:
                print(n, "->", s24.render_carousel(n, c, stills_only=(what == "stills")), flush=True)
