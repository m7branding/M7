"""Themed carousels (1080×1350) for Instagram + LinkedIn documents."""
from pathlib import Path

import media
from posts import CW, CH, INF, COLORS, bg, img, text, counter, swipe, badge, images_for, wrap, esc
from reels import fit_title
from reels2 import accent

PROCESS = {
    "Branding": ["Inventarisatie & merkanalyse", "Strategie & positionering", "Concept & design", "Uitwerking & brandbook", "Lancering & activatie"],
    "Websites": ["Kennismaking & strategie", "Sitemap & UX", "Design in Figma", "Development & content", "Lancering, hosting & support"],
    "Apps": ["Discovery & scoping", "UX/UI & prototype", "Development in sprints", "Testen & lancering", "Support & doorontwikkeling"],
    "Hosting": ["Snelle, veilige hosting", "SSL & monitoring", "Updates & back-ups", "Support als je ons nodig hebt", "Aanpassen? Even bellen."],
    "Marketing": ["Analyse & doelen", "Strategie & mediaplan", "Inrichting & creatie", "Livegang & optimalisatie", "Rapportage & opschalen"],
    "AI": ["Quick scan & kansen", "Strategie & roadmap", "Prototype & validatie", "Bouw & integratie", "Training & doorontwikkeling"],
}
PILLAR_LINE = {
    "Branding": ("Merken die blijven *hangen.*", "Van merkanalyse tot brandbook. Strak, herkenbaar en on brand op elk kanaal."),
    "Websites": ("Sites die net zo hard werken als *jij.*", "Webflow of WordPress. Snel, vindbaar, en makkelijk zelf te beheren."),
    "Apps": ("Software die mensen graag *gebruiken.*", "Portalen, dashboards en apps. Van prototype tot live, in sprints."),
    "Hosting": ("Wij houden 't *draaiende.*", "Webplans met hosting, SSL, updates, back-ups, monitoring en support."),
    "Marketing": ("Gezien worden. Door de juiste *mensen.*", "Content, ads en SEO die passen bij je merk. Meten, bijsturen, opschalen."),
    "AI": ("Slimmer werken met AI. Zonder *poespas.*", "Eerst een quick scan, dan een roadmap, dan bouwen. Praktisch en eerlijk."),
}


def cover(seed, kicker, title, sub, amb=None, n=0, N=0):
    if "|" not in title:
        title = wrap(title, 15)
    sz = fit_title(title, 920, 130, 60)
    L = [bg(seed, amb, aurora=0.2, strength=0.55), badge(80, 120, 110),
         text(80, 420, 920, kicker, title, sub, sz, 38), swipe()]
    if N:
        L.append(counter(n, N))
    return dict(w=CW, h=CH, layers=L)


def project_slide(seed, slug, label, line, n, N, imgpath=None):
    ims = [imgpath] if imgpath else images_for(slug, 1)
    if not ims:
        return None
    from lib import ambient
    c = media.cases()[slug]
    L = [bg(seed, ambient(ims[0])), img(ims[0], {"x": 60, "y": 60, "w": 960, "h": 820}),
         text(80, 930, 920, label, wrap(c["client"], 22), line, fit_title(wrap(c["client"], 22), 920, 76, 44), 32),
         counter(n, N)]
    return dict(w=CW, h=CH, layers=L)


def steps_slide(seed, kicker, steps, n, N):
    L = [bg(seed, None, aurora=0.16), text(80, 120, 920, kicker, "Zo werken *wij.*", None, 84)]
    for j, s in enumerate(steps[:5]):
        L.append({"type": "gcard", "t0": 0, "t1": INF, "rect": {"x": 80, "y": 330 + j * 186, "w": 920, "h": 166}, "bar": COLORS[j % len(COLORS)], "kicker": f"Stap 0{j + 1}", "title": s, "titleSize": 44})
    L.append(counter(n, N))
    return dict(w=CW, h=CH, layers=L)


def stat_slide(seed, value, suffix, label, line, n, N, cls="g-pixels"):
    L = [bg(seed, None, pixels="full" if seed % 2 else "sides", aurora=0.2),
         {"type": "html", "x": 80, "y": 140, "w": 920, "html": '<div class="kicker"><span class="dash"></span><span>M7 in cijfers</span></div>'},
         {"type": "stat", "t0": -5, "t1": INF, "x": 80, "y": 360, "w": 940, "value": value, "suffix": suffix, "label": label, "size": 280 if value < 1000 else 240, "labelSize": 56, "cls": cls},
         text(80, 900, 920, None, None, line, 40, 40), counter(n, N), badge(CW - 156, CH - 156, 76)]
    return dict(w=CW, h=CH, layers=L)


def outro(seed, n, N, cta="Jouw merk *next?*"):
    L = [bg(seed, None, pixels="sides", aurora=0.18), badge(CW / 2 - 140, 250, 280),
         text(80, 610, 920, None, cta, None, min(96, fit_title(cta, 900, 96, 50)), align="center"),
         {"type": "html", "x": 80, "y": 790, "w": 920, "html": '<div style="text-align:center;font-weight:600;font-size:36px;color:#fff;line-height:1.5">Branding. Websites. Apps.<br>Hosting. Marketing. AI.<br><span class="g-pixels" style="font-weight:800">We got you.</span></div>'},
         {"type": "html", "x": 80, "y": 1060, "w": 920, "html": '<div style="text-align:center;font-weight:700;font-size:34px;color:#fff">Welcome to our <span class="g-pixels">world.</span></div><div style="margin-top:22px;text-align:center;font-weight:600;font-size:28px;letter-spacing:.24em;color:var(--muted);text-transform:uppercase">m7branding.com</div>'},
         counter(n, N)]
    return dict(w=CW, h=CH, layers=L)


def pillar_carousel(pillar, slugs, copy, seed):
    title, sub = PILLAR_LINE[pillar]
    pro = [s for s in slugs if s in media.cases() and images_for(s, 1)][:4]
    N = 2 + len(pro) + 1 + 1
    from lib import ambient
    first = images_for(pro[0], 1)[0] if pro else None
    out = [cover(seed, pillar, title, sub, ambient(first, 0.5) if first else None, 1, N)]
    for k, s in enumerate(pro):
        cp = copy.get(s, {})
        sl = project_slide(seed + k + 1, s, pillar, cp.get("hook") or "", 2 + k, N)
        if sl:
            out.append(sl)
    out.append(steps_slide(seed + 9, pillar, PROCESS[pillar], len(out) + 1, N))
    out.append(outro(seed + 10, len(out) + 1, N))
    # renumber counters
    return _renumber(out)


def _renumber(slides):
    N = len(slides)
    for i, s in enumerate(slides):
        for L in s["layers"]:
            if L.get("type") == "html" and "/ " in L.get("html", "") and "letter-spacing:.18em" in L.get("html", ""):
                L.update(counter(i + 1, N))
    return slides


def welcome_carousel(copy, seed=900):
    pillars = [("Branding", "bernheze-makelaars-rebranding"), ("Websites", "plenty-planet"), ("Apps", "monvy"), ("Hosting", "teamtv"), ("Marketing", "hela"), ("AI", "citex-ai")]
    out = [cover(seed, "Welcome to our world", "Branding. Websites.|Apps. Hosting.|Marketing. *AI.*", "Eén team voor je merk, je site, je software en je groei. Brabants nuchter. Digitaal next level.", None, 1, 8)]
    for k, (p, s) in enumerate(pillars):
        out.append(project_slide(seed + k + 1, s, p, PILLAR_LINE[p][1], k + 2, 8))
    out.append(outro(seed + 9, 8, 8, "We got *you.*"))
    return _renumber([o for o in out if o])


def hosting_carousel(seed=950):
    stats = [(75, "+", "WordPress-sites in beheer", "Updates, back-ups en security. Geregeld.", "g-pixels"), (50, "+", "Webflow-sites in beheer", "Webflow Professional Partner. Smooth.", "g-stars"), (275, "+", "webdomeinen in beheer", "Jouw domein? In goede handen.", "g-shop"), (3000, "+", "storingen opgelost", "Gaat er iets mis? We got you.", "g-pixels")]
    out = [cover(seed, "Hosting & beheer", "Wij houden 't|*draaiende.*", "Webplans met snelle, veilige hosting, SSL, updates, back-ups, monitoring en support.", None, 1, 6)]
    for k, (v, s, lab, line, cls) in enumerate(stats):
        out.append(stat_slide(seed + k, v, s, lab, line, k + 2, 6, cls))
    out.append(outro(seed + 8, 6, 6, "Ook zorgeloos *live?*"))
    return _renumber(out)


def masterpieces_carousel(copy, plist, seed=980):
    top = [p["slug"] for p in plist if p.get("rank")][:10]
    out = [cover(seed, "Top 10", "Onze|*masterpieces.*", "Tien projecten waar we trots op zijn. Swipe en kijk mee.", None, 1, 12)]
    for k, s in enumerate(top):
        cp = copy.get(s, {})
        out.append(project_slide(seed + k + 1, s, f"#{k + 1:02d} · " + " · ".join((cp.get("pillars") or media.pillars(s))[:2]), cp.get("hook") or "", k + 2, 12))
    out.append(outro(seed + 20, 12, 12))
    return _renumber([o for o in out if o])


def about_carousel(seed=990):
    off = Path("/home/user/M7/public/media/office/")
    from lib import ambient
    slides = [cover(seed, "Over M7", "Brabants nuchter.|Digitaal *next level.*", "Een creative agency uit Nistelrode. Sinds 2020. Voor klanten over de hele wereld.", ambient(off / "kantoor-buitenkant.webp", 0.5), 1, 6)]
    for k, (f, kick, title, line) in enumerate([
        ("kantoor-buitenkant.webp", "Thuisbasis", "Nistelrode.", "Midden in Brabant. Hier schetsen, bouwen en lanceren we."),
        ("kantoor-werkplekken.webp", "Het team", "Creatief én technisch.", "Designers, developers en marketeers onder één dak. Kort lijntje, snel schakelen."),
        ("lounge-biljart.webp", "De vibe", "Hard werken. Even ontspannen.", "Een potje biljart of padel hoort erbij. Daarna weer door."),
    ]):
        slides.append(dict(w=CW, h=CH, layers=[bg(seed + k, ambient(off / f)), img(off / f, {"x": 60, "y": 60, "w": 960, "h": 820}), text(80, 930, 920, kick, accent(wrap(title, 20), k), line, fit_title(wrap(title, 20), 920, 70, 44), 32), counter(k + 2, 6)]))
    slides.append(stat_slide(seed + 7, 250, "+", "klanten wereldwijd", "Webflow Professional Partner. Van Nistelrode tot ver over de grens.", 5, 6))
    slides.append(outro(seed + 8, 6, 6, "Welcome to our *world.*"))
    return _renumber(slides)
