"""Round 14 interaction shots: real recordings of a site's interactions (CAPTURE: r14/cap/<slug>/flows.json,
1440x900 desktop / 390x844 mobile mp4 with cursor) played as the screen content of one device in a hero / reel shot."""
import os, json
import numpy as np
import cv2

HERE = os.path.dirname(os.path.abspath(__file__))
CAP = os.path.join(os.path.dirname(os.path.dirname(HERE)), 'r14', 'cap')
# what reads best in a few seconds on a device screen, best first (plain scrolls are what the other shots do already)
PREF = ['configurator-intake', 'configurator-phases', 'configurator', 'finder', 'intake-steps', 'search', 'shop-filters',
        'tool-fill', 'funnel-steps', 'form-fill', 'form-step', 'mega-menu', 'ems-compare', 'repair-options', 'map', 'dealer-map',
        'calendar', 'tabs', 'accordion', 'pricing-hover', 'nav-dropdown', 'menu-open', 'cards-hover', 'slider',
        'section-hover', 'product-hover', 'hero-hover']
# what a film title says (Dutch, short and factual: it is the alt text)
TITLE = {'configurator-intake': 'Configurator: intake in een paar vragen', 'configurator-phases': 'Configurator: fases doorlopen',
         'configurator': 'Productconfigurator: maten en opties kiezen', 'finder': 'Zoeker: model kiezen en resultaat',
         'intake-steps': 'Online intake: stappen doorlopen', 'search': 'Zoeken met suggesties', 'shop-filters': 'Filters in de shop',
         'tool-fill': 'Tool invullen', 'funnel-steps': 'Stappen in de funnel', 'form-fill': 'Formulier invullen',
         'form-step': 'Formulier in stappen', 'mega-menu': 'Megamenu openen', 'ems-compare': 'EMS-vergelijker',
         'repair-options': 'Reparatie-opties kiezen', 'map': 'Interactieve kaart', 'dealer-map': 'Dealerkaart',
         'calendar': 'Beschikbaarheid in de kalender', 'tabs': 'Tabbladen wisselen', 'accordion': 'Veelgestelde vragen uitklappen',
         'pricing-hover': 'Prijzen en pakketten', 'nav-dropdown': 'Navigatie met uitklapmenu', 'menu-open': 'Menu op mobiel',
         'cards-hover': 'Kaarten met hover-effect', 'slider': 'Slider doorbladeren', 'section-hover': 'Interactieve secties',
         'product-hover': 'Producten met hover-effect', 'hero-hover': 'Interactieve hero'}


# reviewed by eye (first + middle frame, r14/flowcheck): text cut at the top / bottom of the viewport, content under
# the sticky nav, an empty menu, a popup: never shown (round 14 rule "niet afgesneden")
REJECT = {('buitenstate', 'map-desktop'), ('buitenstate-tools', 'form-fill-desktop'), ('bus-whisky', 'menu-open-mobile'),
          ('cryptocointalk', 'nav-dropdown-desktop'), ('cryptocointalk', 'menu-open-mobile'), ('db-kiepers', 'menu-open-mobile'),
          ('digital-newsgroup', 'accordion-desktop'), ('digital-newsgroup', 'menu-open-mobile'), ('digital-newsgroup', 'slider-desktop'),
          ('ecos', 'menu-open-mobile'), ('edgeway-commodities', 'menu-open-mobile'), ('electriffy', 'cards-hover-desktop'),
          ('esmailly-bouw', 'slider-desktop'), ('foodbars-gelderland', 'menu-open-mobile'), ('grid', 'cards-hover-desktop'),
          ('grid', 'slider-desktop'), ('huurfix', 'form-fill-desktop'), ('jurgh-detailing', 'slider-desktop'),
          ('kds-stansvormen', 'accordion-desktop'), ('kds-stansvormen', 'cards-hover-desktop'), ('kippenkar', 'cards-hover-desktop'),
          ('kippenkar', 'slider-desktop'), ('monvy', 'pricing-hover-desktop'), ('monvy', 'cards-hover-desktop'),
          ('nexis-group', 'accordion-desktop'), ('nktv', 'slider-desktop'), ('outplay', 'menu-open-mobile'),
          ('plenty-planet', 'cards-hover-desktop'), ('repairlab', 'repair-options-desktop'), ('repairlab', 'menu-open-mobile'),
          ('silvr', 'menu-open-mobile'), ('sparta-blue-hydrogen', 'form-fill-desktop'), ('sparta-blue-hydrogen', 'menu-open-mobile'),
          ('speedbar', 'menu-open-mobile'), ('steddion-tools', 'ems-compare-mobile'), ('steddion', 'menu-open-mobile'),
          ('the-digital-clinic', 'cards-hover-desktop'), ('the-sandt', 'tabs-desktop'),
          ('chavore', 'scroll-desktop'), ('toy4participation', 'scroll-desktop')}
# one cut line of text at the very top: hide it under the browser bar (css px), the bottom continues in the page colour
TRIM = {('misterglass', 'configurator-desktop'): 26}
# the motion detector missed these (they clearly move: typing in fields)
ALLOW = {('huurfix', 'tool-fill-desktop')}


def key(slug, x):
    return (slug, os.path.basename(x['file'])[:-4])


def prep(frame, x):
    """A recording frame as screen content (RGB uint8), with the reviewed top trim."""
    t = x.get('trim_top') or 0
    if not t: return frame
    k = int(round(t * frame.shape[1] / x['size'][0]))
    pad = np.repeat(np.median(frame[-6:], axis=(0,)).astype(np.uint8)[None], k, 0)
    return np.concatenate([frame[k:], pad], 0)


def load(slug):
    f = os.path.join(CAP, slug, 'flows.json')
    if not os.path.exists(f): return []
    try:
        xs = json.load(open(f))
    except Exception:
        return []                                                  # still being written by CAPTURE
    out = []
    for x in xs:
        p = os.path.join(CAP, slug, x.get('file', ''))
        if not os.path.exists(p) or x.get('kind') == 'scroll' or x.get('kind') not in PREF: continue
        if key(slug, x) in REJECT: continue
        m = x.get('motion') or {}
        if m and m.get('first') is None and key(slug, x) not in ALLOW: continue        # nothing moves
        if key(slug, x) in TRIM: x = dict(x, trim_top=TRIM[key(slug, x)])
        c = cv2.VideoCapture(p); n = int(c.get(cv2.CAP_PROP_FRAME_COUNT)); c.release()
        if n < 30: continue                                        # incomplete file
        out.append(dict(x, path=p))
    return sorted(out, key=lambda x: PREF.index(x['kind']))


def window(x, L, max_speed=1.5):
    """(t0, t1) of the recording shown over a shot of L seconds: from just before the first motion to just after
    the last, sped up to at most max_speed; shorter interactions play at real speed (the last frame holds)."""
    m = x.get('motion') or {}
    first = m.get('first') if m.get('first') is not None else 0.6
    last = m.get('last') if m.get('last') is not None else x['duration']
    t0 = max(0.0, first - 0.45)
    t1 = min(x['duration'] - 0.05, last + 0.35)
    if t1 - t0 > L * max_speed: t1 = t0 + L * max_speed
    if t1 - t0 < L: t1 = min(x['duration'] - 0.05, t0 + L)
    return round(t0, 3), round(t1, 3)


class Reader:
    """Frames of a recording by time (s), decoded lazily and in order; seeks back by reopening."""

    def __init__(self, path):
        self.path = path; self.cap = None; self.idx = -1; self.cur = None
        c = cv2.VideoCapture(path); self.fps = c.get(cv2.CAP_PROP_FPS) or 30.0
        self.n = int(c.get(cv2.CAP_PROP_FRAME_COUNT)); c.release()

    def get(self, t):
        k = int(min(max(round(t * self.fps), 0), max(self.n - 1, 0)))
        if self.cap is None or k < self.idx:
            if self.cap is not None: self.cap.release()
            self.cap = cv2.VideoCapture(self.path); self.idx = -1
        while self.idx < k:
            ok, fr = self.cap.read()
            if not ok: break
            self.idx += 1; self.cur = fr
        return cv2.cvtColor(self.cur, cv2.COLOR_BGR2RGB)
