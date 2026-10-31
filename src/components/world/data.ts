/* ============================================================
   World of M7: wat er op de pagina staat, server-side samengesteld.
   Alleen M7's masterpieces (content/masterpieces.ts) komen erin.

   Alles is data: nieuwe interactiefilms (r-flow-*.mp4 in de manifest),
   brand sheets of een ander "mooiste moment" schuif je erin door hieronder
   een regel toe te voegen of te wijzigen; de scènes passen zich aan.
   - Elk pad wordt op de schijf gecontroleerd (onDisk): wat er (nog) niet
     staat, valt stil weg; de pagina verwijst nooit naar een gat.
   - Groepen ("Apps & portalen", "Branding", "Websites & platforms") volgen
     de diensten van de case (`services`) én moeten in de kern van de case
     (titel, samenvatting, aanpak, resultaat) terug te vinden zijn. Is dat
     bewijs dun, dan valt het project buiten die groep (zie GROUPS).
   - Getallen worden geteld, nooit ingevuld.
   ============================================================ */

import { masterpiecesReel } from "@/components/showreel/reels";
import { lightest, onDisk } from "@/components/showreel/onDisk";
import { MASTERPIECE_SLUGS } from "@/content/masterpieces";
import type { ServiceSlug } from "@/content/registry";
import type { Case, Locale, T } from "@/content/types";
import { allCases, getCase } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";

/** "monvy/r-hero.mp4" → "/media/cases/monvy/r-hero.mp4" (volledige paden blijven staan). */
const M = (p: string) => (p.startsWith("/") ? p : `/media/cases/${p}`);
/** Poster naast een film: zelfde naam, .webp. */
const posterOf = (src: string) => src.replace(/\.mp4$/, ".webp");

/* ================================================================
   1. Groepen: dienst + bewijs in de kern van de case
   ================================================================ */

export type GroupKey = "apps" | "branding" | "websites";

const GROUPS: Record<GroupKey, { title: T; service: ServiceSlug; evidence: RegExp; exclude: string[] }> = {
  apps: {
    title: { nl: "Apps & portalen", en: "Apps & portals" },
    service: "web-apps-portals-apps",
    evidence: /(\bapps?\b|web-?app|portaal|portal|dashboard|klantomgeving|platform)/i,
    exclude: [],
  },
  branding: {
    title: { nl: "Branding", en: "Branding" },
    service: "branding-rebranding",
    evidence: /(\bmerk\b|logo|huisstijl|brandbook|rebrand|identiteit|beeldmerk|woordmerk)/i,
    exclude: [],
  },
  websites: {
    title: { nl: "Websites & platforms", en: "Websites & platforms" },
    service: "websites-webshops",
    evidence: /(website|webshop|\bsite\b)/i,
    exclude: [],
  },
};

const core = (c: Case) => [c.title, c.summary, c.approach, c.result].map((t) => (t ? t.nl : "")).join(" ");

/** Hoort de case echt bij de groep? Dienst staat erop én de kern van de case zegt het ook. */
export function inGroup(c: Case, key: GroupKey) {
  const g = GROUPS[key];
  return c.services.includes(g.service) && !g.exclude.includes(c.slug) && g.evidence.test(core(c));
}

/* ================================================================
   2. Het materiaal per scène (hier aanvullen als er nieuw beeld komt)
   ================================================================ */

/**
 * Zwevende UI rond het device:
 * - phone: lange mobiele screenshot in een telefoonkader (scrollt mee met de pagina);
 * - screen: lange desktop-screenshot in een browservenster (scrollt mee);
 * - still: een render als zwevende kaart.
 * `at`: hoek rond de film (tl, tr, bl, br).
 */
export type SnipKind = "phone" | "screen" | "still";
type SnipIn = { kind: SnipKind; src: string; at: "tl" | "tr" | "bl" | "br" };

/** Apps & portalen: per app het mooiste moment (film) en losse UI eromheen. */
const APP_SPOTS: { slug: string; film: string; moment: T; snippets: SnipIn[] }[] = [
  {
    slug: "monvy",
    film: "monvy/s-monvy-10-monvy-platform-motion.mp4",
    moment: { nl: "Het platform in beweging", en: "The platform in motion" },
    snippets: [
      { kind: "screen", src: "monvy/screen-desktop.webp", at: "tl" },
      { kind: "phone", src: "monvy/screen-mobile.webp", at: "br" },
      { kind: "still", src: "monvy/s-monvy-04-monvy-dashboard-detail.webp", at: "tr" },
    ],
  },
  {
    slug: "atl-plus",
    film: "atl-plus/v-motion-02-phones-scroll.mp4",
    moment: { nl: "Door de leerlijnen", en: "Through the learning paths" },
    snippets: [
      { kind: "phone", src: "atl-plus/screen-mobile.webp", at: "br" },
      { kind: "still", src: "atl-plus/r-07-d20-gravity-alt-a-ui.webp", at: "tl" },
      { kind: "screen", src: "atl-plus/screen-desktop.webp", at: "tr" },
    ],
  },
  {
    slug: "infrai",
    film: "infrai/s-infra-citex-06-infraxpec-phones-float.mp4",
    moment: { nl: "De app in drie schermen", en: "The app across three screens" },
    snippets: [
      { kind: "still", src: "infrai/s-infra-citex-03-infraxpec-pavement-crack.webp", at: "tl" },
      { kind: "still", src: "infrai/s-infra-citex-05-infraxpec-ar-closeup.webp", at: "br" },
      { kind: "still", src: "infrai/s-infra-citex-02-infraxpec-suite-macbook.webp", at: "tr" },
    ],
  },
  {
    slug: "expociety-app",
    film: "expociety-app/s-expociety-10-expociety-ui-cards-motion.mp4",
    moment: { nl: "UI-kaarten die invliegen", en: "UI cards flying in" },
    snippets: [
      { kind: "phone", src: "expociety-app/screen-mobile.webp", at: "br" },
      { kind: "still", src: "expociety-app/s-expociety-04-expociety-iphone-closeup.webp", at: "tl" },
      { kind: "still", src: "expociety-app/s-expociety-07-exposuite-macbook.webp", at: "tr" },
    ],
  },
  {
    slug: "citex-ai",
    film: "citex-ai/s-infra-citex-11-citex-live-display.mp4",
    moment: { nl: "Het live dashboard", en: "The live dashboard" },
    snippets: [
      { kind: "still", src: "citex-ai/s-infra-citex-09-citex-ipad-kpi.webp", at: "tl" },
      { kind: "still", src: "citex-ai/s-infra-citex-10-citex-angled-closeup.webp", at: "br" },
    ],
  },
];

/** Branding: het brandbook dat je openslaat (bestaande showcase) hoort bij deze case. */
const BRANDBOOK = { slug: "designers-house", label: { nl: "brandbook dat openslaat", en: "brandbook that opens" } as T };

/**
 * Merkbeelden en brand sheets (aangeleverd): ze gaan vóór de merk-renders. Nieuwe brand sheets
 * komen hier bij, bv. { slug: "monvy", src: "monvy/b-sheet-01.webp", alt: { nl: "brand sheet", en: "brand sheet" } }.
 */
const BRAND_SHEETS: { slug: string; src: string; alt: T }[] = [
  { slug: "monvy", src: "monvy/s-monvy-05-monvy-brand-identity.webp", alt: { nl: "huisstijl in gebruik", en: "brand identity in use" } },
  { slug: "repairlab", src: "repairlab/s-projects-04-repairlab-identity.webp", alt: { nl: "huisstijl in gebruik", en: "brand identity in use" } },
  { slug: "fairlink", src: "fairlink/s-postcard-mark.webp", alt: { nl: "beeldmerk op een kaart", en: "brand mark on a card" } },
];

/** Brand sheets per case (public/media/cases/<slug>/), in deze volgorde in de merkenwand. */
const BRAND_BOARDS: { file: string; alt: T }[] = [
  { file: "r-62-brand-sheet-logos.webp", alt: { nl: "brand sheet met logovarianten", en: "brand sheet with logo variants" } },
  { file: "r-63-brand-sheet-colours.webp", alt: { nl: "brand sheet met kleuren en typografie", en: "brand sheet with colours and typography" } },
];

/** Merk-render (logo op een wand) uit de galerij van een case; de zwakkere sticker- en reliëfscènes zijn weg. */
const BRAND_RENDER = /\/r-\d+-b06-[^/]+\.webp$/;
const BRAND_ALT: T = { nl: "logo op een wand", en: "logo on a wall" };

/** Eredivisietoppers: de aangeleverde animaties, elk met een korte omschrijving van wat je ziet. */
const SPOTLIGHT = {
  slug: "eredivisietoppers",
  films: [
    { src: "eredivisietoppers/s-eredivisie-07-eredivisie-pack-opening.mp4", label: { nl: "Een pakje openen", en: "Opening a pack" } as T },
    { src: "eredivisietoppers/s-eredivisie-09-eredivisie-social-teaser.mp4", label: { nl: "Social teaser", en: "Social teaser" } as T },
    { src: "eredivisietoppers/s-eredivisie-08-eredivisie-phone-orbit.mp4", label: { nl: "Kaarten rond de telefoon", en: "Cards orbiting the phone" } as T },
  ],
};

/** Interactiefilms: titels uit de manifest zijn Nederlands; Engels hier. Onbekend → algemene naam. */
const FLOW_EN: Record<string, string> = {
  "Megamenu’s Features en Branches": "Mega menus for Features and Branches",
  "Mobiel menu met submenu": "Mobile menu with submenu",
  "Mobiel menu": "Mobile menu",
  "Navigatie met uitklapmenu’s": "Navigation with drop-down menus",
  "Energy Property Configurator: intake met gebouwtype": "Energy Property Configurator: intake by building type",
  "Configurator: fases doorlopen": "Configurator: stepping through the phases",
  "Veelgestelde vragen uitklappen": "Expanding the FAQ",
  "Toestel zoeken: live resultaten tijdens het typen": "Device search: live results as you type",
  "Aanvraag starten: kenteken invullen": "Starting a request: entering the licence plate",
  "Online intake haaruitval: de eerste vragen": "Online hair-loss intake: the first questions",
};
/** Menu's en navigatie zijn mooi, maar de echte flows (zoeken, configureren, aanvragen) gaan voor. */
const FLOW_GENERIC = /^(navigatie|mobiel menu|megamenu)/i;
/** Zoveel films in de rij. */
const FLOW_MAX = 12;

/** Zoveel projecten in de stapel "Websites & platforms". */
const SITES_MAX = 6;

/* ================================================================
   3. Samenstellen
   ================================================================ */

export interface Spot {
  slug: string;
  client: string;
  title: string;
  href: string;
  color: string;
}
export interface Snip {
  kind: SnipKind;
  src: string;
  at: SnipIn["at"];
  alt: string;
}
export interface AppScene extends Spot {
  film: { src: string; poster: string };
  moment: string;
  snippets: Snip[];
}
export interface Tile extends Spot {
  image: string;
  alt: string;
  video?: { src: string; srcMobile?: string; poster: string; posterMobile?: string };
}

const spotOf = (c: Case, locale: Locale): Spot => ({
  slug: c.slug,
  client: c.client,
  title: tr(c.title, locale),
  href: paths.case(c),
  color: c.color,
});

const masterCases = () => MASTERPIECE_SLUGS.map((s) => getCase(s)).filter((c): c is Case => Boolean(c));

const SNIP_ALT: Record<SnipKind, T> = {
  phone: { nl: "mobiele weergave", en: "mobile view" },
  screen: { nl: "desktopweergave", en: "desktop view" },
  still: { nl: "ontwerp in 3D", en: "design in 3D" },
};

const heroVideoOf = (c: Case) =>
  c.heroVideo?.src && onDisk(c.heroVideo.src) && onDisk(c.heroVideo.poster)
    ? {
        src: c.heroVideo.src,
        srcMobile: onDisk(c.heroVideo.srcMobile) ? c.heroVideo.srcMobile : undefined,
        poster: c.heroVideo.poster!,
        posterMobile: onDisk(c.heroVideo.srcMobile) && onDisk(c.heroVideo.posterMobile) ? c.heroVideo.posterMobile : undefined,
      }
    : undefined;

/** Eerste zwevende render uit de galerij (r-…-f0x-… of r-…-ui), voor de "floating UI". */
const floatOf = (c: Case) => (c.gallery ?? []).find((g) => /\/r-\d+-(f0\d-[^/]+|[^/]+-ui)\.webp$/.test(g) && onDisk(g));

export function worldData(locale: Locale) {
  const L = (t: T) => tr(t, locale);
  const all = allCases();
  const masters = masterCases();
  const used = new Set<string>();

  /* ---------- opening: reel + zwevende UI van de masterpieces ---------- */
  const reel = masterpiecesReel(locale);
  const floats = masters
    .flatMap((c) => {
      const f = floatOf(c);
      const phone = onDisk(`/media/cases/${c.slug}/screen-mobile.webp`) ? `/media/cases/${c.slug}/screen-mobile.webp` : undefined;
      return [
        f ? { kind: "still" as const, src: f, alt: `${c.client}: ${L(SNIP_ALT.still)}`, color: c.color } : null,
        phone ? { kind: "phone" as const, src: phone, alt: `${c.client}: ${L(SNIP_ALT.phone)}`, color: c.color } : null,
      ];
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  // om en om een render en een telefoon, uit verschillende projecten
  const stills = floats.filter((f) => f.kind === "still");
  const phones = floats.filter((f) => f.kind === "phone").reverse();
  const heroFloats = Array.from({ length: 8 }, (_, i) => (i % 2 ? phones[i >> 1] : stills[i >> 1])).filter(Boolean);

  /* ---------- 01 Apps & portalen ---------- */
  const apps: AppScene[] = APP_SPOTS.flatMap((s) => {
    const c = getCase(s.slug);
    const film = M(s.film);
    if (!c || !inGroup(c, "apps") || !onDisk(film) || !onDisk(posterOf(film))) return [];
    const snippets = s.snippets
      .map((x) => ({ ...x, src: M(x.src) }))
      .filter((x) => onDisk(x.src))
      .map((x) => ({ ...x, alt: `${c.client}: ${L(SNIP_ALT[x.kind])}` }));
    used.add(c.slug);
    return [{ ...spotOf(c, locale), film: { src: film, poster: posterOf(film) }, moment: L(s.moment), snippets }];
  });

  /* ---------- 02 Branding ---------- */
  const brandCase = getCase(BRANDBOOK.slug);
  const brandbook = brandCase && inGroup(brandCase, "branding") ? { ...spotOf(brandCase, locale), label: L(BRANDBOOK.label) } : null;
  if (brandbook) used.add(brandbook.slug);
  const brandMembers = masters.filter((c) => inGroup(c, "branding"));
  const sheets: Tile[] = BRAND_SHEETS.flatMap((b) => {
    const c = getCase(b.slug);
    const src = M(b.src);
    if (!c || !inGroup(c, "branding") || !onDisk(src)) return [];
    return [{ ...spotOf(c, locale), image: src, alt: `${c.client}: ${L(b.alt)}` }];
  });
  // brand sheets uit de render-pipeline: logovarianten en kleuren & typografie, alleen uit echte assets
  const boards: Tile[] = brandMembers.flatMap((c) =>
    BRAND_BOARDS.flatMap((b) => {
      const src = M(`${c.slug}/${b.file}`);
      return onDisk(src) ? [{ ...spotOf(c, locale), image: src, alt: `${c.client}: ${L(b.alt)}` }] : [];
    }),
  );
  const renders: Tile[] = brandMembers.flatMap((c) => {
    const g = (c.gallery ?? []).find((x) => BRAND_RENDER.test(x) && onDisk(x));
    if (!g) return [];
    return [{ ...spotOf(c, locale), image: g, alt: `${c.client}: ${L(BRAND_ALT)}` }];
  });
  // eerst elk merk één keer (sheets voorop), dan de rest; nooit twee keer hetzelfde beeld
  const pool = [...sheets, ...boards, ...renders];
  const firsts = pool.filter((t, i) => pool.findIndex((x) => x.slug === t.slug) === i);
  const brandWall = [...firsts, ...pool.filter((t) => !firsts.includes(t))].slice(0, 9);

  /* ---------- 03 Eredivisietoppers ---------- */
  const spotCase = getCase(SPOTLIGHT.slug);
  const spotFilms = SPOTLIGHT.films
    .map((f) => ({ src: M(f.src), poster: posterOf(M(f.src)), label: L(f.label) }))
    .filter((f) => onDisk(f.src) && onDisk(f.poster));
  const spotlight = spotCase && spotFilms.length ? { ...spotOf(spotCase, locale), films: spotFilms } : null;
  if (spotlight) used.add(spotlight.slug);

  /* ---------- 04 Interactie, van dichtbij (r-flow-films uit de manifest) ---------- */
  const flows = masters
    .flatMap((c, rank) =>
      (c.films ?? [])
        .filter((f) => /\/r-flow-\d+\.mp4$/.test(f.src) && onDisk(f.src) && onDisk(f.poster))
        .map((f) => {
          const nl = f.title ?? "";
          return {
            ...spotOf(c, locale),
            src: f.src,
            poster: f.poster,
            label: locale === "nl" ? nl : FLOW_EN[nl] ?? "Interaction film",
            generic: FLOW_GENERIC.test(nl),
            rank,
          };
        }),
    )
    // eerst de echte flows (in M7's volgorde), dan de menu's; per project hooguit één menu
    .sort((a, b) => Number(a.generic) - Number(b.generic) || a.rank - b.rank)
    .filter((f, i, list) => !f.generic || list.findIndex((x) => x.generic && x.slug === f.slug) === i)
    .slice(0, FLOW_MAX);

  /* ---------- 05 Websites & platforms: hero-film + zwevende UI ---------- */
  const sites: Tile[] = masters
    .filter((c) => !used.has(c.slug) && inGroup(c, "websites"))
    .flatMap((c) => {
      const v = heroVideoOf(c);
      if (!v) return [];
      const f = floatOf(c);
      return [{ ...spotOf(c, locale), image: f ?? v.poster, alt: `${c.client}: ${L(SNIP_ALT.still)}`, video: v }];
    })
    .slice(0, SITES_MAX);
  sites.forEach((s) => used.add(s.slug));

  /* ---------- finale: alle masterpieces ---------- */
  const tiles: Tile[] = masters.flatMap((c) => {
    // kleine tegels: de lichtste goede still van het project (cover, render-cover of hero-poster)
    const img = lightest([c.cover, `/media/cases/${c.slug}/r-cover.webp`, c.heroVideo?.poster]);
    if (!img) return [];
    return [{ ...spotOf(c, locale), image: img, alt: c.client, video: heroVideoOf(c) }];
  });
  // midden: het eerste masterpiece met een eigen hero-film; eromheen eerst de projecten
  // die nog in geen enkele scène stonden, zodat alle masterpieces op de pagina voorkomen
  const center = tiles.find((t) => t.video) ?? null;
  flows.forEach((f) => used.add(f.slug));
  const rest = tiles.filter((t) => t.slug !== center?.slug);
  const wall = [...rest.filter((t) => !used.has(t.slug)), ...rest.filter((t) => used.has(t.slug))];

  return {
    reel,
    heroFloats,
    groups: { apps: L(GROUPS.apps.title), branding: L(GROUPS.branding.title), websites: L(GROUPS.websites.title) },
    apps,
    brandbook,
    brandMembers: brandMembers.filter((c) => c.slug !== brandbook?.slug).map((c) => spotOf(c, locale)),
    brandWall,
    spotlight,
    flows,
    sites,
    center,
    wall,
    stats: {
      masterpieces: masters.length,
      cases: all.length,
    },
    /** Alle cases die op de pagina staan (voor de JSON-LD), in M7's volgorde. */
    shown: masters.map((c) => ({ name: `${c.client}: ${tr(c.title, locale)}`, path: paths.case(c) })),
  };
}

export type WorldData = ReturnType<typeof worldData>;
