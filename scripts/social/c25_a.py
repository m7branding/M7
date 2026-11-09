"""Round 25, agent car-a: seven carousels (1080x1350) and three single-image posts, in the approved round-24 style.

Built on social24.py (imported, not edited): the same slide(), c_title(), c_body(), c_rows(), c_img(), pill(), url_line()
and render_carousel(). Copy only from the site's own content (services/branding-rebranding.ts, sectors*.ts, the cases,
the werkproces page); visuals only real M7 work from public/media and the round-20/21 material.

  python c25_a.py check                 width check of every text line (no render)
  python c25_a.py stills [ids...]       render into the work folder (QA)
  python c25_a.py deliver [ids...]      render into <S>/r25/deliver/carousels/<id>/ and write the captions
"""
import json
import shutil
import sys
from pathlib import Path

from PIL import Image, ImageFont

sys.path.insert(0, str(Path(__file__).resolve().parent))
import social24 as s24  # noqa: E402
from social24 import CW, KX, c_body, c_img, c_rows, c_title, pill, slide, url_line  # noqa: E402

S = s24.S                                                       # shared scratchpad (r20, r21, r25 deliver)
WORKDIR = Path("/tmp/claude-0/-home-user/34406e25-4e0d-5d51-9717-27228f2c0db3/scratchpad/r25w-car-a")
OUT = S / "r25" / "deliver"
MEDIA = s24.MEDIA
CASES = MEDIA / "cases"
SHOW = MEDIA / "showcase"
BOOKS = S / "r20" / "src"
FONT_VF = s24.REPO / "src" / "fonts" / "montserrat-latin-wght-normal.woff2"
MAXW = CW - 2 * KX                                              # 904: the text column


def setup():
    s24.WORK = WORKDIR
    s24.OUT = OUT
    s24.install()


# ---------------------------------------------------------------- visuals
def size(p):
    with Image.open(p) as im:
        return im.size


def crop(name, src, box, w=None):
    """A crop of a real image (to keep a page's important text inside the visible part of the frame)."""
    p = WORKDIR / "src" / f"{name}.jpg"
    if not p.exists():
        p.parent.mkdir(parents=True, exist_ok=True)
        im = Image.open(src).convert("RGB").crop(box)
        if w and im.width > w:
            im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        im.save(p, quality=93)
    return p


def vis(src, y, w=1240, h=None, x=KX, **kw):
    """The visual on the left text edge, at its own aspect ratio unless h is given; runs off the right and/or bottom."""
    iw, ih = size(src)
    return c_img(src, {"x": x, "y": y, "w": w, "h": h or round(w * ih / iw)}, **kw)


def closing(title, body, tsize=76):
    return slide([c_title(title, size=tsize), c_body(body, 470), pill("Plan een kennismaking", KX, 700, t0=0.0), url_line(KX, 870, t0=0.0)],
                 glow_at=(540, 900), a=0.12)


# frequently used material
BERN = CASES / "bernheze-makelaars-rebranding"
DH = CASES / "designers-house"
ECOS = CASES / "ecos"
PP = CASES / "plenty-planet"


# ---------------------------------------------------------------- 1. merkstrategie
def c_merkstrategie():
    # crops keep each page's text (the wheel's labels, "House", the ECOS body) inside the visible part of the frame
    wheel = crop("bernheze-archetypes", BERN / "s-fa-brandbook-06.webp", (60, 40, 2400, 1350))
    logo = crop("dh-logo-opbouw", DH / "s-fa-logo-opbouw.webp", (72, 0, 2400, 1599))
    arch = crop("ecos-architectuur", ECOS / "s-fa-brandbook-05.webp", (60, 0, 1920, 1080))
    return [
        slide([c_title(["Merkstrategie &", "*positionering*"]), c_body(["Waarom kiest je klant voor jou?"], 470),
               vis(BERN / "r-06-b06-wall-logo-c.webp", 640, bg="#1d2c25")]),
        slide([c_title(["Een logo zonder", "strategie is een gok"], size=68),
               c_body(["Zelfs bij een compact traject doen we een", "korte strategische sessie, zodat het logo",
                       "vertelt wat jouw merk moet uitstralen."], 450),
               vis(logo, 700, w=1080, bg="#3f3f3f")]),
        slide([c_title(["Van onderbuik naar", "heldere keuzes"], size=68),
               c_body(["Veel bedrijven weten intuïtief waarom", "klanten voor hen kiezen, maar hebben het", "nooit scherp geformuleerd.", "",
                       "In interactieve sessies brengen we je markt,", "concurrenten en doelgroep in kaart, en", "vertalen we dat naar een positionering",
                       "die onderscheidend én geloofwaardig is."], 450)]),
        slide([c_title(["Wat we samen bepalen"], size=64), c_body(["Zodat elke keuze in design, copy en", "marketing klopt."], 380),
               c_rows(["Positionering", "Merkbelofte", "Kernwaarden", "Merkpersoonlijkheid"], 560, size=52, rowH=118)]),
        slide([c_title(["Voorbeeld:", "Bernheze Makelaars"], size=68),
               c_body(["Na een paar sessies over merkarchetypes", "kwamen we uit bij de heerser. Zonder", "poespas laat het merk ervaring, kwaliteit",
                       "en autoriteit zien."], 450),
               vis(wheel, 780, w=1052, bg="#ffffff")]),
        slide([c_title(["Merkarchitectuur"], size=68),
               c_body(["Voor ECOS begonnen we bij de vraag hoe", "ECOS en de Collaboratives zich tot elkaar", "verhouden. Daaruit volgde een",
                       "co-brandingsysteem, vastgelegd in", "een brandbook."], 380),
               vis(arch, 780, w=1100, bg="#efe9df")]),
        slide([c_title(["Een merkplatform", "op één pagina"], size=68),
               c_body(["Compact en duidelijk genoeg voor je", "salesgesprek, je vacaturetekst en je", "volgende campagne.", "",
                       "Zo vertelt je hele team hetzelfde verhaal."], 450)]),
        closing(["Waar sta", "jij voor?"], ["Een merkstrategie geeft richting aan", "alles wat je doet."]),
    ]


# ---------------------------------------------------------------- 2. rebranding, step by step (the branding service's process)
def c_rebranding():
    book = crop("bernheze-brandbook", BOOKS / "book-bernheze-makelaars-rebranding" / "still.jpg", (60, 160, 3000, 2000))
    return [
        slide([c_title(["Een rebranding", "in vijf *stappen*"]), c_body(["Van merkanalyse tot lancering, met", "beelden van Bernheze Makelaars."], 470),
               vis(BERN / "r-05-d03-flatlay-b.webp", 690, bg="#1d2c25")]),
        slide([c_title(["1. Inventarisatie", "& merkanalyse"], size=68),
               c_body(["We duiken in je bedrijf, markt, concurrenten", "en doelgroep. Wat maakt jou écht anders,", "en waar zit de kans?"], 450),
               vis(BERN / "01.webp", 690, w=1240, h=700, pos="50% 70%", bg="#d9d4cc")]),
        slide([c_title(["2. Strategie &", "positionering"], size=68),
               c_body(["Merkbelofte, kernwaarden, persoonlijkheid", "en tone of voice. Het fundament waarop", "elke keuze daarna rust.", "",
                       "Evolutie of revolutie? We kijken eerst wat", "er al werkt. Een kleur, vorm of naam die", "waarde heeft opgebouwd, gooi je niet", "zomaar weg."], 450)]),
        slide([c_title(["3. Concept & design"], size=68),
               c_body(["Logo, kleuren, typografie en beeldtaal,", "in realistische mock-ups, zodat je je", "merk direct ziet leven."], 380),
               vis(BERN / "r-60-brand-wall.webp", 610, bg="#e9e9e7")]),
        slide([c_title(["4. Uitwerking", "& brandbook"], size=68),
               c_body(["Alle bestanden, templates en richtlijnen", "in een helder brandbook. Klaar voor web,", "print, social en signing."], 450),
               vis(book, 690, w=1100, bg="#e6e6e6")]),
        slide([c_title(["5. Lancering", "& activatie"], size=68),
               c_body(["Website, socials, drukwerk en campagnes", "in de nieuwe stijl. Zo sta je op de", "lanceringsdag overal in één keer goed."], 450),
               vis(BERN / "03.webp", 690, w=640, bg="#c9c3b8")]),
        slide([c_title(["Subtiel maar", "effectief"], size=68),
               c_body(["Bij Bernheze Makelaars fristen we een merk", "op dat al 20 jaar stond.", "",
                       "In de nieuwe stijl ontwierpen we de", "te-koopborden, visitekaartjes, briefpapier,", "presentatiekits, roll-upbanners en flyers.", "",
                       "Het fundament voor de website, de", "investment memorandums, de video's en", "het taxatieportaal die volgden."], 450)]),
        closing(["Toe aan een", "volgende fase?"], ["Van een subtiele refresh tot een", "volledig nieuwe identiteit."]),
    ]


# ---------------------------------------------------------------- 3. brandbook
def c_brandbook():
    book = crop("dh-brandbook", DH / "s-fa-brandbook-kleur-typografie.webp", (0, 300, 2400, 1599))   # less empty table above the book
    return [
        slide([c_title(["Wat staat er in", "een *brandbook*?"]), c_body(["Alle merkregels helder vastgelegd,", "zodat iedereen on-brand werkt."], 470),
               vis(book, 700, bg="#2a2826")]),
        slide([c_title(["Een merk slijt", "in kleine stapjes"], size=68),
               c_body(["Een iets andere kleur op de beursvloer,", "een eigen lettertype in de offerte, een", "uitgerekt logo op een banner.", "",
                       "Een helder brandbook voorkomt dat,", "ook als er andere mensen, bureaus of", "drukkers met je merk werken."], 450)]),
        slide([c_title(["Wat erin staat"], size=68),
               c_rows(["Merkverhaal en kernwaarden", "Logogebruik en vrije ruimte", "Kleur en typografie", "Beeldtaal en iconografie",
                       "Tone of voice", "Voorbeelden voor web, social en print"], 400, size=42)]),
        slide([c_title(["Richtlijnen die", "mensen echt lezen"], size=68),
               c_body(["Visueel, met goede en foute voorbeelden", "en direct downloadbare assets."], 450),
               vis(BERN / "r-61-brand-booklet.webp", 620, w=1100, bg="#e4e4e2")]),
        slide([c_title(["Kleur en typografie"], size=64),
               c_body(["Kleurcodes in RGB, HEX, CMYK en Pantone,", "en een vaste hiërarchie in lettertypes."], 380),
               vis(PP / "r-63-brand-sheet-colours.webp", 600, w=1150, bg="#ffffff")]),
        slide([c_title(["Brandbook of", "stijlgids?"], size=68),
               c_body(["Een stijlgids beschrijft vooral de visuele", "regels. Een brandbook gaat breder en", "bevat ook het merkverhaal, de kernwaarden",
                       "en de tone of voice."], 450)]),
        slide([c_title(["Als PDF of als", "online merkportaal"], size=68),
               c_body(["Liever geen PDF? We bouwen je brandbook", "ook als online merkportaal in Webflow,", "altijd actueel en met één klik deelbaar",
                       "met partners."], 450)]),
        closing(["Werkt iedereen al", "on-brand?"], ["We inventariseren je huidige merkgebruik", "en leggen alles vast in een helder document."], tsize=72),
    ]


# ---------------------------------------------------------------- 4. sector: vastgoed & makelaardij
def c_vastgoed():
    return [
        slide([c_title(["Vastgoed &", "*makelaardij*"]), c_body(["Wat we doen voor makelaars, taxateurs,", "ontwikkelaars en vastgoedbeheerders."], 470),
               vis(CASES / "buitenstate" / "r-02-d01-desk-studio-b.webp", 690, bg="#d8d6d0")]),
        slide([c_title(["Vertrouwen", "en beeld"], size=68),
               c_body(["In vastgoed draait alles om vertrouwen en", "om beeld. Een verkoper kiest de makelaar",
                       "die zijn woning het best in de markt zet.", "", "Een belegger wil in één oogopslag zien", "wat een object waard is."], 450)]),
        slide([c_title(["Verkopers", "overtuigen"], size=68),
               c_body(["Een sterk merk, echte verkoopverhalen en", "een online waardecheck maken jou de", "logische keuze. Zoals de zoekersmatch",
                       "die we voor Buitenstate bouwden."], 450),
               vis(CASES / "buitenstate-tools" / "r-03-d09-ipad-keyboard-a-ui.webp", 740, bg="#e4e4e2")]),
        slide([c_title(["Verkopen wat er", "nog niet staat"], size=68),
               c_body(["Met een projectwebsite en 3D-visualisaties", "zien kopers hun toekomstige woning."], 450),
               vis(BERN / "v-05-laptop-closeup.webp", 640, w=1300, bg="#e9e9e9")]),
        slide([c_title(["Veel informatie,", "weinig tijd"], size=68),
               c_body(["Een investment memorandum met kaarten", "en kerncijfers laat de kern snel zien.", "Zoals voor Bernheze Makelaars."], 450),
               vis(SHOW / "bernheze" / "im-cover.webp", 720, w=455, radius=14, bg="#ffffff"),
               vis(SHOW / "bernheze" / "im-p08.webp", 720, w=455, x=KX + 475, radius=14, bg="#ffffff")]),
        slide([c_title(["Wat we bouwen"], size=68),
               c_rows(["Makelaarswebsites", "Projectwebsites voor nieuwbouw", "Online waardechecks", "Huisstijlen en brochures",
                       "3D-visualisaties en drone"], 400)]),
        slide([c_title(["Dubbel werk", "in systemen"], size=68),
               c_body(["Aanbod, aanvragen en opvolging zitten in", "verschillende systemen. Met koppelingen en", "automatisering komt het op één plek samen.", "",
                       "Bij Bernheze Makelaars komt het aanbod", "binnen via koppelingen met Realworks."], 450)]),
        closing(["Een kantoor met", "een eigen gezicht?"], ["Zo val je op tussen ketens en formules,", "en onthoudt een verkoper jouw naam."], tsize=72),
    ]


# ---------------------------------------------------------------- 5. sector: energie & duurzaamheid
def c_energie():
    # device renders cropped so the whole laptop + phone / the whole iPad stay in view; the scene runs off the edges
    site = crop("pp-site", PP / "m-cover.webp", (288, 120, 2400, 1500))
    ipad = crop("steddion-ipad", CASES / "steddion-tools" / "m-ipad.webp", (300, 120, 2400, 1600))
    return [
        slide([c_title(["Energie &", "*duurzaamheid*"]), c_body(["Duurzame techniek begrijpelijk, vindbaar", "en aantrekkelijk maken."], 470),
               vis(SHOW / "plentyplanet" / "greencorridor3.webp", 690, bg="#4b5a3a")]),
        slide([c_title(["Duurzame energie", "zie je niet"], size=68),
               c_body(["Maar je moet het wel uitleggen. Een klant", "wil weten wat het oplevert, wat het kost en",
                       "of zijn dak, pand of parkeerterrein", "geschikt is."], 450)]),
        slide([c_title(["Jij snapt het,", "je klant vaak niet"], size=68),
               c_body(["kWp, BESS, terugleverkosten. Met heldere", "pagina's maak je van techniek een", "beslissing die iemand durft te nemen."], 450),
               vis(site, 690, w=1150, bg="#141416")]),
        slide([c_title(["Het rekenwerk", "uit handen"], size=68),
               c_body(["In de Energy Property Configurator van", "Steddion vult een vastgoedeigenaar het", "verbruik en de laadbehoefte van een pand in.",
                       "Hij ziet een mogelijke oplossing met", "zonnepanelen en batterijopslag."], 450),
               vis(ipad, 770, w=1120, bg="#141416")]),
        slide([c_title(["Laten zien wat", "er komt"], size=68),
               c_body(["Een zonnepark bestaat eerst alleen op", "tekening. Voor Plenty Planet maakten we een", "3D-visualisatie van de Green Eco Corridor."], 450),
               vis(SHOW / "plentyplanet" / "greenecocorridor.webp", 690, bg="#4b5a3a")]),
        slide([c_title(["Opvallen in een", "drukke markt"], size=68),
               c_body(["Een eigen merk, echte projectfoto's en", "lokale SEO maken het verschil tussen een", "prijsvergelijking en een klant die voor",
                       "jou kiest."], 450),
               vis(CASES / "jalo-energy" / "r-60-brand-wall.webp", 720, bg="#e2e2e0")]),
        closing(["Een verhaal dat", "mensen snappen?"], ["We maken duurzame techniek begrijpelijk,", "vindbaar en aantrekkelijk."]),
    ]


# ---------------------------------------------------------------- 6. sector: automotive & mobiliteit
def c_automotive():
    # the "Filter op merk" catalogue on a display: cropped so the model cards stay in view, the monitor runs off the edge
    cat = crop("maarschall-catalogus", CASES / "maarschall" / "r-flow-2.webp", (290, 0, 1920, 1080))
    return [
        slide([c_title(["Automotive &", "*mobiliteit*"]), c_body(["Een online beleving die net zo strak is", "als het product."], 470),
               vis(CASES / "jurgh-detailing" / "r-cover.webp", 660, bg="#1b1b1f")]),
        slide([c_title(["Je koopt", "met je ogen"], size=68),
               c_body(["Klanten vergelijken online, kijken naar", "beeld en video en willen direct weten",
                       "wat iets kost of wanneer ze terechtkunnen."], 450)]),
        slide([c_title(["Premium uitstraling", "online"], size=68),
               c_body(["Sterke branding met fotografie, video", "en 3D, passend bij je prijsniveau. Zoals", "de website van JURGH Detailing."], 450),
               vis(CASES / "jurgh-detailing" / "r-03-f04-ipad-float-a.webp", 690, bg="#141416")]),
        slide([c_title(["Complexe producten", "en opties"], size=68),
               c_body(["Bij Maarschall filter je op merk, kies je", "je automodel en vraag je een offerte aan.", "De gekozen dealer krijgt de aanvraag", "meteen per mail."], 450),
               vis(cat, 690, w=1100, bg="#e9e9e9")]),
        slide([c_title(["Een merk dat de", "lucht in schoot"], size=68),
               c_body(["Voor SUBLIME maakten we een logo, een", "zwart-witte huisstijl en merkproducten,", "tot kauwgomverpakkingen aan toe. De",
                       "achterban op social media groeide naar", "meer dan 25.000 mensen."], 450),
               vis(CASES / "sublime-branding" / "s-fa-instagram-post.webp", 790, w=720, bg="#1a1a1a")]),
        slide([c_title(["Een nieuwe naam,", "een waardig merk"], size=68),
               c_body(["Van Budget Hearses naar Nova Funeral", "Cars: een nieuwe naam, een brandbook,", "een ingetogen website, drukwerk en", "een beursstand."], 450),
               vis(CASES / "nova-funeral-cars" / "r-03-f04-ipad-float-a.webp", 720, bg="#0f1a2c")]),
        slide([c_title(["Planning en", "afspraken"], size=68),
               c_body(["Telefoon en mail kosten veel tijd. Met een", "online boekingswidget plannen klanten zelf",
                       "een behandeling, proefrit of afspraak in,", "gekoppeld aan je agenda."], 450)]),
        closing(["Net zo strak", "als je product?"], ["Van zelfstandige detailer tot dealer,", "importeur en mobiliteitsdienst."]),
    ]


# ---------------------------------------------------------------- 7. werkproces (the five beats of /werkproces)
BEATS = ["Luisteren", "Plannen", "Maken", "Lanceren", "Doorgroeien"]


def c_werkproces():
    # the proposal overview for Buitenstate: every box (and the client logo) stays in view
    plan = crop("buitenstate-proposal", CASES / "buitenstate" / "03.webp", (40, 20, 1600, 897))
    return [
        slide([c_title(["Ons", "*werkproces*"]), c_body(["Elke dienst heeft z'n eigen route, maar je", "weet altijd waar je aan toe bent."], 470),
               c_rows(BEATS, 650, size=52, rowH=118)]),
        slide([c_title(["1. Luisteren"], size=68),
               c_body(["We beginnen bij je doel, je klant en je", "markt. Eerst luisteren, dan pas maken."], 380),
               vis(MEDIA / "office" / "meetingroom.webp", 600, w=1240, h=820, pos="50% 60%", bg="#3a3a3a")]),
        slide([c_title(["2. Plannen"], size=68),
               c_body(["Een helder plan met keuzes en scope,", "zodat niemand halverwege verrast wordt."], 380),
               vis(plan, 640, w=1011, bg="#ffffff")]),
        slide([c_title(["3. Maken"], size=68),
               c_body(["Ontwerpen en bouwen in overzichtelijke", "rondes. Jij kijkt mee en stuurt bij."], 380),
               vis(PP / "s-fa-wireframe.webp", 580, w=1000, bg="#f4f4f4")]),
        slide([c_title(["4. Lanceren"], size=68),
               c_body(["Testen, livegang en een nette overdracht.", "Geen losse eindjes."], 380),
               vis(PP / "v-04-display-and-phone.webp", 620, w=1300, bg="#ececec")]),
        slide([c_title(["5. Doorgroeien"], size=68),
               c_body(["Meten, verbeteren en uitbouwen, met één", "vast aanspreekpunt. Na de lancering zijn we", "niet ineens onbereikbaar."], 380)]),
        closing(["Elke dienst,", "een eigen route"], ["Kies je dienst en zie stap voor stap", "hoe we samen tot resultaat komen."]),
    ]


# ---------------------------------------------------------------- single-image posts (one slide each)
def posts():
    return {
        # chapters[1].quote of the branding service, with a line from seo.sections[0]
        "post-merkstrategie": [slide([
            c_title(["Zonder strategie is", "elke ontwerpkeuze", "een smaakdiscussie."], size=72),
            c_body(["Pas als helder is waar je voor staat, krijgt", "je merk een gezicht en een stem."], 540),
            vis(CASES / "icewall" / "r-06-b06-wall-logo-b.webp", 760, w=1000, bg="#0b1220")])],
        # chapters[2].quote, with a line from chapters[2].body
        "post-rebranding": [slide([
            c_title(["Een nieuwe huisstijl", "op een oude website", "is een nieuw pak met", "versleten schoenen."], size=68),
            c_body(["Daarom plannen we de uitrol meteen mee,", "zodat alles tegelijk klopt."], 600),
            vis(BERN / "r-04-d18-mac-profile-b-ui.webp", 770, w=1000, bg="#101012")])],
        # automotive-mobiliteit: description
        "post-automotive": [slide([
            c_title(["In automotive koop", "je met je ogen."], size=76),
            c_body(["Daarom bouwen we merken, websites en", "tools die je beleving vertalen naar", "aanvragen."], 470),
            vis(CASES / "maarschall" / "r-07-d14-billboard-c.webp", 680, w=1100, bg="#1a1b1f")])],
    }


def carousels():
    return {
        "merkstrategie": c_merkstrategie(),
        "rebranding-traject": c_rebranding(),
        "brandbook": c_brandbook(),
        "sector-vastgoed": c_vastgoed(),
        "sector-energie": c_energie(),
        "sector-automotive": c_automotive(),
        "werkproces": c_werkproces(),
    }


# ---------------------------------------------------------------- captions (copy from the site; nothing invented)
BR = "src/content/services/branding-rebranding.ts"
CAPTIONS = {
    "merkstrategie": dict(
        topic="Merkstrategie & positionering (application merkstrategie), met Bernheze Makelaars, DesignersHouse en ECOS",
        instagram="Een logo zonder strategie is een gok.\nWe bepalen samen je positionering, merkbelofte, kernwaarden en persoonlijkheid, zodat elke keuze in design, copy en marketing klopt.\nSwipe voor de aanpak, met Bernheze Makelaars en ECOS als voorbeeld.\nMeer op m7branding.com\n#merkstrategie #positionering #branding #merkidentiteit #m7branding",
        linkedin="Veel bedrijven weten intuïtief waarom klanten voor hen kiezen, maar hebben het nooit scherp geformuleerd.\n\nIn interactieve sessies brengen we je markt, concurrenten en doelgroep in kaart. Daaruit volgt een positionering die onderscheidend én geloofwaardig is, vastgelegd in een compact merkplatform op één pagina.\n\nVoor Bernheze Makelaars kwamen we na een paar sessies over merkarchetypes uit bij de heerser: zonder poespas laat het merk ervaring, kwaliteit en autoriteit zien. Voor ECOS bepaalden we hoe ECOS en de Collaboratives zich tot elkaar verhouden.\n\nZonder strategie is elke ontwerpkeuze een smaakdiscussie.\n\nPlan een kennismaking via m7branding.com\n#merkstrategie #branding",
        sources=[f"{BR}: applications[merkstrategie].title, summary, intro, body[0..1], benefits, faqs[0]",
                 f"{BR}: service.chapters[1].quote",
                 "src/content/cases-archive.ts: bernheze-makelaars-rebranding.approach",
                 "src/content/cases-new-a.ts: ecos.approach",
                 "src/content/cases-supplied.ts: designers-house (visual: logo construction)"]),
    "rebranding-traject": dict(
        topic="Een rebrandingtraject stap voor stap (service.process + application rebranding), met Bernheze Makelaars",
        instagram="Een rebranding in vijf stappen, van inventarisatie en merkanalyse tot lancering en activatie.\nMet beelden uit de rebranding van Bernheze Makelaars, een merk dat al 20 jaar stond.\nSubtiel maar effectief.\nMeer op m7branding.com\n#rebranding #branding #huisstijl #brandbook #m7branding",
        linkedin="Groeit je bedrijf harder dan je merk? Met een rebranding laten we je uitstraling weer aansluiten bij je ambitie.\n\nZo pakken we het aan: inventarisatie en merkanalyse, strategie en positionering, concept en design, uitwerking en brandbook, en lancering en activatie.\n\nWe kijken eerst wat er al werkt. Een kleur, vorm of naam die waarde heeft opgebouwd, gooi je niet zomaar weg.\n\nBij Bernheze Makelaars fristen we een merk op dat al 20 jaar stond: een nieuw logo, een brandbook en drukwerk van te-koopbord tot visitekaartje. Het fundament voor de website, de investment memorandums, de video's en het taxatieportaal die volgden.\n\nPlan een kennismaking via m7branding.com\n#rebranding #branding",
        sources=[f"{BR}: service.process[0..4] (title, text)",
                 f"{BR}: applications[rebranding].intro, summary, body[0..1]",
                 f"{BR}: service.seo.sections[1].body (evolutie, waarde opgebouwd)",
                 "src/content/cases-archive.ts: bernheze-makelaars-rebranding.title, summary, challenge, result"]),
    "brandbook": dict(
        topic="Wat er in een brandbook staat (application brandbook: deliverables, body, faqs)",
        instagram="Wat staat er in een brandbook?\nMerkverhaal en kernwaarden, logogebruik, kleur en typografie, beeldtaal, tone of voice en voorbeelden voor web, social en print.\nZo werkt iedereen on-brand, ook andere bureaus en drukkers.\nMeer op m7branding.com\n#brandbook #merkrichtlijnen #huisstijl #branding #m7branding",
        linkedin="Een merk slijt in honderd kleine uitzonderingen: een iets andere kleur op de beursvloer, een eigen lettertype in de offerte, een uitgerekt logo op een banner.\n\nEen helder brandbook voorkomt dat. We schrijven richtlijnen die mensen echt lezen: visueel, met goede en foute voorbeelden en direct downloadbare assets.\n\nEen brandbook gaat breder dan een stijlgids. Naast de visuele regels staan ook het merkverhaal, de kernwaarden en de tone of voice erin. Als PDF, of als online merkportaal in Webflow dat altijd actueel is.\n\nMeer op m7branding.com\n#brandbook #branding",
        sources=[f"{BR}: applications[brandbook].title, summary, intro, body[0..1], deliverables, faqs[0], faqs[2]",
                 f"{BR}: service.chapters[1].body (honderd kleine uitzonderingen)",
                 f"{BR}: service.faqs[5].a (kleurcodes RGB, HEX, CMYK, Pantone)"]),
    "sector-vastgoed": dict(
        topic="Sector Vastgoed & Makelaardij: wat M7 doet voor makelaars, ontwikkelaars en beheerders (Buitenstate, Bernheze Makelaars)",
        instagram="In vastgoed draait alles om vertrouwen en om beeld.\nVoor makelaars, taxateurs, ontwikkelaars en beheerders bouwen we websites, waardechecks, brochures en 3D-visualisaties.\nMet werk voor Buitenstate en Bernheze Makelaars.\nMeer op m7branding.com\n#vastgoed #makelaar #makelaardij #webdesign #m7branding",
        linkedin="In vastgoed draait alles om vertrouwen en om beeld. Een verkoper kiest de makelaar die zijn woning het best in de markt zet, een belegger wil in één oogopslag zien wat een object waard is.\n\nWe bouwen makelaarswebsites waarop aanbod via een koppeling vanzelf kan verschijnen, projectwebsites voor nieuwbouw en tools zoals een online waardecheck of de zoekersmatch die we voor Buitenstate bouwden.\n\nVoor Bernheze Makelaars ontwerpen we investment memorandums in de huisstijl, met kaarten van de ligging en de bereikbaarheid.\n\nMeer over vastgoed en makelaardij op m7branding.com\n#vastgoed #makelaardij",
        sources=["src/content/sectors-new-b.ts: vastgoed-makelaardij.title, intro, description, challenges[0..3], segments[0].useCases[4].title",
                 "src/content/cases-new-a.ts: buitenstate-tools.approach (zoekersmatch)",
                 "src/content/cases-archive.ts: bernheze-makelaars-website.summary/approach (nieuwbouwpagina's, Realworks), bernheze-makelaars-investment-memorandums"]),
    "sector-energie": dict(
        topic="Sector Energie & Duurzaamheid (Plenty Planet, Steddion, JALO Energy)",
        instagram="Duurzame energie zie je niet, maar je moet het wel uitleggen.\nWe maken duurzame techniek begrijpelijk, vindbaar en aantrekkelijk, met werk voor Plenty Planet, Steddion en JALO Energy.\nMeer op m7branding.com\n#energietransitie #duurzaamheid #zonneenergie #branding #m7branding",
        linkedin="Duurzame energie zie je niet, maar je moet het wel uitleggen. Een klant wil weten wat het oplevert, wat het kost en of zijn dak, pand of parkeerterrein geschikt is.\n\nVoor Plenty Planet bouwden we de website over solar car parks, zonneparken en batterijopslag, en maakten we een 3D-visualisatie van de Green Eco Corridor.\n\nIn de Energy Property Configurator van Steddion vult een vastgoedeigenaar het verbruik en de laadbehoefte van een pand in en ziet hij een mogelijke oplossing met zonnepanelen en batterijopslag.\n\nMeer over energie en duurzaamheid op m7branding.com\n#energie #duurzaamheid",
        sources=["src/content/sectors-new-c.ts: energie-duurzaamheid.title, intro, description, challenges[0], challenges[2], challenges[3], quote",
                 "src/content/cases-new-a.ts: plenty-planet, steddion-tools, jalo-energy"]),
    "sector-automotive": dict(
        topic="Sector Automotive & Mobiliteit (JURGH Detailing, Maarschall, SUBLIME, Nova Funeral Cars)",
        instagram="In automotive koop je met je ogen.\nVan JURGH Detailing en Maarschall tot SUBLIME en Nova Funeral Cars: merken, websites en tools die net zo strak zijn als het product.\nMeer op m7branding.com\n#automotive #cardetailing #branding #webdesign #m7branding",
        linkedin="In automotive koop je met je ogen. Klanten vergelijken online, kijken naar beeld en video en willen direct weten wat iets kost of wanneer ze terechtkunnen.\n\nVoor JURGH Detailing bouwden we een premium website met een aanvraagflow per dienst en pakket. Bij Maarschall filter je op merk, kies je je automodel en landt een offerteaanvraag meteen bij de gekozen dealer.\n\nVoor Nova Funeral Cars ging het van Budget Hearses naar een nieuwe naam en een waardig merk. En voor SUBLIME maakten we een merk dat de lucht in schoot.\n\nMeer over automotive en mobiliteit op m7branding.com\n#automotive #branding",
        sources=["src/content/sectors.ts: automotive-mobiliteit.title, intro, description, challenges[0..2], faqs[0]",
                 "src/content/cases.ts: jurgh-detailing, nova-funeral-cars",
                 "src/content/cases-new-b.ts: maarschall.approach",
                 "src/content/cases-archive.ts: sublime-branding.title, approach, result (25.000+)"]),
    "werkproces": dict(
        topic="Hoe M7 werkt: de vijf vaste stappen van /werkproces",
        instagram="Of we nu een logo tekenen, een webshop bouwen of een AI-agent inrichten: de basis is steeds hetzelfde.\nLuisteren, plannen, maken, lanceren en doorgroeien.\nMeer op m7branding.com/werkproces\n#werkproces #branding #webdesign #webdevelopment #m7branding",
        linkedin="Elke dienst heeft z'n eigen route, maar je weet altijd waar je aan toe bent.\n\nWe beginnen bij je doel, je klant en je markt. Daarna volgt een helder plan met keuzes en scope, zodat niemand halverwege verrast wordt. We ontwerpen en bouwen in overzichtelijke rondes, jij kijkt mee en stuurt bij. Dan testen, livegang en een nette overdracht. En daarna meten, verbeteren en uitbouwen, met één vast aanspreekpunt.\n\nEerst luisteren, dan pas maken. En na de lancering zijn we niet ineens onbereikbaar.\n\nBekijk het werkproces per dienst op m7branding.com/werkproces\n#werkproces",
        sources=["src/app/[lang]/werkproces/page.tsx: COPY.nl.title, lead, beats[0..4], rhythmText",
                 "src/app/[lang]/werkproces/page.tsx: generateMetadata description (closing slide)"]),
    "post-merkstrategie": dict(
        topic="Statement: zonder strategie is elke ontwerpkeuze een smaakdiscussie",
        instagram="Zonder strategie is elke ontwerpkeuze een smaakdiscussie.\nPas als helder is waar je voor staat, krijgt je merk een gezicht en een stem.\nMeer op m7branding.com\n#merkstrategie #branding #positionering #m7branding",
        linkedin="Zonder strategie is elke ontwerpkeuze een smaakdiscussie.\n\nBranding begint bij strategie. Waar sta je voor? Voor wie ben je er? En waarom zou iemand voor jou kiezen en niet voor de concurrent met een vergelijkbaar aanbod?\n\nPas als dat helder is, krijgt je merk een gezicht en een stem: logo, kleuren, typografie, beeldtaal en tone of voice.\n\nMeer op m7branding.com\n#merkstrategie #branding",
        sources=[f"{BR}: service.chapters[1].quote", f"{BR}: service.seo.sections[0].body",
                 "src/content/cases-new-b.ts: icewall (visual: merkstrategie, concept, branding)"]),
    "post-rebranding": dict(
        topic="Statement: een nieuwe huisstijl op een oude website is een nieuw pak met versleten schoenen",
        instagram="Een nieuwe huisstijl op een oude website is een nieuw pak met versleten schoenen.\nDaarom plannen we de uitrol meteen mee, zodat alles tegelijk klopt.\nMeer op m7branding.com\n#rebranding #branding #huisstijl #website #m7branding",
        linkedin="Een nieuwe huisstijl op een oude website is een nieuw pak met versleten schoenen.\n\nEen merk moet na de lancering de wereld in. Daarom plannen we de uitrol meteen mee: je website en webshop in de nieuwe stijl, fotografie en video die passen bij je beeldtaal, en drukwerk, signing, voertuigen en beursmateriaal.\n\nZo sta je op de lanceringsdag overal in één keer goed.\n\nMeer op m7branding.com\n#rebranding #branding",
        sources=[f"{BR}: service.chapters[2].quote, chapters[2].body",
                 "src/content/cases-archive.ts: bernheze-makelaars-website (visual)"]),
    "post-automotive": dict(
        topic="Statement: in automotive koop je met je ogen",
        instagram="In automotive koop je met je ogen.\nDaarom bouwen we merken, websites en tools die je beleving vertalen naar aanvragen. Zoals voor Maarschall.\nMeer op m7branding.com\n#automotive #branding #webdesign #m7branding",
        linkedin="In automotive koop je met je ogen. Klanten vergelijken online, kijken naar beeld en video en willen direct weten wat iets kost.\n\nM7 bouwt merken, websites en tools die die beleving vertalen naar aanvragen. Voor Maarschall Titanium ontwikkelden we de branding en een donkere, krachtige website waarop liefhebbers hun auto snel terugvinden, met offerteaanvragen die direct bij de gekozen dealer landen.\n\nMeer op m7branding.com\n#automotive #webdesign",
        sources=["src/content/sectors.ts: automotive-mobiliteit.description",
                 "src/content/cases-new-b.ts: maarschall.summary, approach, result"]),
}


def write_captions(names):
    d = OUT / "captions"
    d.mkdir(parents=True, exist_ok=True)
    for name in names:
        c = CAPTIONS[name]
        files = sorted(str(p.relative_to(OUT)) for p in (OUT / "carousels" / name).glob("*.png"))
        doc = {"id": name, "type": "post" if name.startswith("post-") else "carousel", "files": files, "topic": c["topic"],
               "instagram": c["instagram"], "linkedin": c["linkedin"], "sources": c["sources"]}
        (d / f"{name}.json").write_text(json.dumps(doc, ensure_ascii=False, indent=1) + "\n")
        print("captions", name, len(files), "files")


# ---------------------------------------------------------------- checks
_fonts = {}


def font(sz, wt):
    k = (sz, wt)
    if k not in _fonts:
        f = ImageFont.truetype(str(FONT_VF), sz)
        f.set_variation_by_axes([wt])
        _fonts[k] = f
    return _fonts[k]


def text_w(t, sz, wt, ls):
    t = t.replace("*", "")
    return font(sz, wt).getlength(t) + ls * sz * len(t)


def check(items):
    bad = 0
    for name, slides in items.items():
        for i, layers in enumerate(slides, 1):
            for L in layers:
                if L["type"] == "xtext":
                    for ln in L["lines"]:
                        w = text_w(ln["t"], L["size"], L["weight"], L["ls"])
                        n = len(ln["t"].replace("*", ""))
                        lim = 44 if L["size"] <= 36 else (22 if L["size"] >= 64 else 99)
                        if L["w"] > 800 and (L["x"] + w > CW - KX + 2 or n > lim):
                            bad += 1
                            print(f"OVER {name}-{i:02d}: {w:.0f}px {n}ch @{L['size']} '{ln['t']}'")
                elif L["type"] == "xrows":
                    for t in L["items"]:
                        w = text_w(t, L["size"], 700, -0.02)
                        if w > L["w"]:
                            bad += 1
                            print(f"OVER {name}-{i:02d}: {w:.0f}px rows '{t}'")
    print("width check:", "ok" if not bad else f"{bad} lines too wide")
    return bad


def render(items, stills_only):
    for name, slides in items.items():
        out = s24.render_carousel(name, slides, stills_only)
        print(name, "->", out, flush=True)


if __name__ == "__main__":
    args = sys.argv[1:]
    what = args[0] if args else "check"
    only = args[1:]
    items = {**carousels(), **posts()}
    if only:
        items = {k: v for k, v in items.items() if k in only}
    check(items)
    if what in ("stills", "deliver"):
        setup()
        render(items, what == "stills")
        if what == "deliver":
            write_captions(items)
