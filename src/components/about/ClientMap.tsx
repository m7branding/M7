import {
  COUNTRIES,
  HQ_ID,
  REGIONS,
  allClientPlaces,
  type ClientPlace,
  type RegionKey,
} from "@/content/client-locations";
import { site, stats } from "@/content/site";
import type { Locale, T } from "@/content/types";
import { tr } from "@/lib/i18n";
import { ClientMapStage, type LegendGroup, type MapArc, type MapHeat, type MapPin, type StageMap } from "./ClientMapStage";
import { NL_MAP, WORLD_MAP, inCloseUp, project } from "./clientMapGeo";
import st from "./ClientMap.module.css";

const PROVINCES: Record<NonNullable<ClientPlace["province"]>, T> = {
  NB: { nl: "Noord-Brabant", en: "North Brabant" },
  GE: { nl: "Gelderland", en: "Gelderland" },
  UT: { nl: "Utrecht", en: "Utrecht" },
  NH: { nl: "Noord-Holland", en: "North Holland" },
  ZH: { nl: "Zuid-Holland", en: "South Holland" },
  OV: { nl: "Overijssel", en: "Overijssel" },
  GR: { nl: "Groningen", en: "Groningen" },
  LI: { nl: "Limburg", en: "Limburg" },
  FR: { nl: "Friesland", en: "Friesland" },
  DR: { nl: "Drenthe", en: "Drenthe" },
  ZE: { nl: "Zeeland", en: "Zeeland" },
  FL: { nl: "Flevoland", en: "Flevoland" },
};

const COPY = {
  kicker: { nl: "Klanten wereldwijd", en: "Clients worldwide" },
  titleA: { nl: "Vanuit Nistelrode", en: "From Nistelrode" },
  titleB: { nl: "de wereld over.", en: "to the world." },
  lead: {
    nl: "Ons kantoor staat tussen de weilanden van Nistelrode, maar ons werk reist verder. We werken voor klanten in Brabant, de rest van Nederland en ver daarbuiten: van Antwerpen tot New York en van München tot Dubai. Afstand is zelden een probleem. Een videocall werkt prima, al is de koffie hier wel beter.",
    en: "Our office sits among the meadows of Nistelrode, but our work travels further. We work for clients in Brabant, the rest of the Netherlands and far beyond: from Antwerp to New York and from Munich to Dubai. Distance is rarely a problem. A video call works fine, although the coffee is better here.",
  },
  countries: { nl: "Landen", en: "Countries" },
  places: { nl: "Plaatsen op de kaart", en: "Places on the map" },
  overview: { nl: "Overzicht", en: "Overview" },
  world: { nl: "De wereld", en: "The world" },
  worldSub: { nl: "{c} landen op {n} continenten", en: "{c} countries on {n} continents" },
  closeUp: { nl: "Close-up", en: "Close-up" },
  netherlands: { nl: "Nederland", en: "The Netherlands" },
  nlSub: { nl: "{n} plaatsen, waarvan {nb} in Noord-Brabant", en: "{n} places, {nb} of them in North Brabant" },
  hq: { nl: "Nistelrode", en: "Nistelrode" },
  hqWorldSub: { nl: "+ {n} plaatsen in de close-up", en: "+ {n} places in the close-up" },
  legend: { nl: "Alle plaatsen op de kaart", en: "All places on the map" },
} satisfies Record<string, T>;

const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
const r2 = (v: number) => Math.round(v * 100) / 100;
/** Afstand over de bol (km), alleen voor de volgorde in de legenda. */
const km = (a: ClientPlace, b: ClientPlace) => {
  const rad = Math.PI / 180;
  const h =
    Math.sin(((b.lat - a.lat) * rad) / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(((b.lon - a.lon) * rad) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};

/** Gestippelde wereldkaart met klanten + close-up van Nederland. */
export function ClientMap({ locale }: { locale: Locale }) {
  const L = (t: T) => tr(t, locale);
  const places = allClientPlaces;
  const hq = places.find((p) => p.id === HQ_ID)!;
  const close = places.filter((p) => inCloseUp(p.lat, p.lon));
  const far = places.filter((p) => !inCloseUp(p.lat, p.lon));
  const dutch = places.filter((p) => p.country === "NL");
  const brabant = dutch.filter((p) => p.province === "NB").length;
  const countries = new Set(places.map((p) => p.country));
  const continents = new Set(Array.from(countries, (c) => REGIONS[COUNTRIES[c].region].continent));
  const clients = stats.find((s) => s.label.en === "Clients worldwide");

  const sub = (p: ClientPlace) =>
    p.province ? L(PROVINCES[p.province]) : p.countryOnly ? L(REGIONS[COUNTRIES[p.country].region].name) : L(COUNTRIES[p.country].name);
  const ping = (i: number) => r2((i * 2.39) % 6);

  /* ---------- wereld: alles buiten de close-up, dichtbij elkaar = één stip ---------- */
  const [hx, hy] = project(WORLD_MAP, hq.lat, hq.lon);
  const clusters: { members: ClientPlace[]; x: number; y: number }[] = [];
  for (const p of far) {
    const [x, y] = project(WORLD_MAP, p.lat, p.lon);
    const c = clusters.find((c) => Math.hypot(c.x - x, c.y - y) < 6);
    if (c) c.members.push(p);
    else clusters.push({ members: [p], x, y });
  }
  const maxW = Math.max(...clusters.map((c) => Math.hypot(c.x - hx, c.y - hy)));
  const worldPins: MapPin[] = [
    {
      id: `w-${hq.id}`,
      members: close.map((p) => p.id),
      x: r2(hx),
      y: r2(hy),
      title: `${L(COPY.hq)} · HQ`,
      sub: fill(L(COPY.hqWorldSub), { n: close.length - 1 }),
      hq: true,
      proxy: true,
      delay: 0.15,
      ping: 0,
    },
    ...clusters.map((c, i) => ({
      id: `w-${c.members[0].id}`,
      members: c.members.map((m) => m.id),
      x: r2(c.x),
      y: r2(c.y),
      title: c.members.map((m) => L(m.name)).join(" · "),
      sub: Array.from(new Set(c.members.map(sub))).join(" · "),
      delay: r2(0.5 + (Math.hypot(c.x - hx, c.y - hy) / maxW) * 1.5),
      ping: ping(i + 1),
    })),
  ];
  const arcs: MapArc[] = worldPins
    .filter((p) => !p.hq)
    .map((p) => {
      const dx = p.x - hx;
      const dy = p.y - hy;
      const dist = Math.hypot(dx, dy);
      const lift = Math.min(dist * 0.32, 90);
      // controlepunt: midden, loodrecht 'omhoog' getild (vluchtlijn-gevoel)
      let nx = -dy / dist;
      let ny = dx / dist;
      if (ny > 0) {
        nx = -nx;
        ny = -ny;
      }
      const cx = hx + dx / 2 + nx * lift;
      const cy = hy + dy / 2 + ny * lift;
      return { id: p.id, d: `M${r2(hx)} ${r2(hy)}Q${r2(cx)} ${r2(cy)} ${p.x} ${p.y}`, x1: r2(hx), y1: r2(hy), x2: p.x, y2: p.y };
    });
  const worldHeat: MapHeat[] = [{ x: r2(hx), y: r2(hy), r: 26, a: 1 }, ...worldPins.filter((p) => !p.hq).map((p) => ({ x: p.x, y: p.y, r: 15, a: 0.8 }))];

  /* ---------- close-up: Nederland + wat er binnen de uitsnede valt ---------- */
  const [nx0, ny0] = project(NL_MAP, hq.lat, hq.lon);
  const nlPts = close.map((p) => ({ p, xy: project(NL_MAP, p.lat, p.lon) }));
  const maxN = Math.max(...nlPts.map(({ xy }) => Math.hypot(xy[0] - nx0, xy[1] - ny0)));
  const nlPins: MapPin[] = nlPts.map(({ p, xy: [x, y] }, i) => ({
    id: `n-${p.id}`,
    members: [p.id],
    x: r2(x),
    y: r2(y),
    title: p.id === HQ_ID ? `${L(COPY.hq)} · HQ` : L(p.name),
    sub: p.id === HQ_ID ? `${site.address.street}, ${site.address.city}` : sub(p),
    hq: p.id === HQ_ID,
    nl: p.country === "NL",
    minor: !!p.minor,
    delay: p.id === HQ_ID ? 0.15 : r2(0.45 + (Math.hypot(x - nx0, y - ny0) / maxN) * 1.4),
    ping: ping(i),
  }));
  // kleine plaatsen liggen dicht op elkaar: kleinere, zachtere gloed zodat Brabant niet overstraalt
  const nlHeat: MapHeat[] = nlPins.map((p) => ({ x: p.x, y: p.y, r: p.hq ? 40 : p.minor ? 18 : 30, a: p.minor ? 0.45 : p.nl ? 0.85 : 0.6 }));

  const world: StageMap = {
    key: "world",
    src: WORLD_MAP.src,
    w: WORLD_MAP.w,
    h: WORLD_MAP.h,
    pins: worldPins,
    arcs,
    heat: worldHeat,
    hq: { x: r2(hx), y: r2(hy) },
    hqLabel: L(COPY.hq),
    hqSide: "ul",
  };
  const nl: StageMap = {
    key: "nl",
    src: NL_MAP.src,
    w: NL_MAP.w,
    h: NL_MAP.h,
    pins: nlPins,
    arcs: [],
    heat: nlHeat,
    hq: { x: r2(nx0), y: r2(ny0) },
    hqLabel: L(COPY.hq),
    hqSide: "dr",
  };

  /* ---------- legenda: per regio; Nederland als één chip (de close-up toont de rest) ---------- */
  const order: RegionKey[] = ["europe", "northAmerica", "southAmerica", "middleEast"];
  const legend: LegendGroup[] = order.map((key) => ({
    key,
    title: L(REGIONS[key].name),
    items: [
      ...(key === "europe"
        ? [
            {
              id: "group-nl",
              label: L(COPY.netherlands),
              count: dutch.length,
              target: "nl" as const,
              hidden: dutch.map((p) => L(p.name)).join(", "),
            },
          ]
        : []),
      ...places
        .filter((p) => p.country !== "NL" && COUNTRIES[p.country].region === key)
        .sort((a, b) => km(hq, a) - km(hq, b)) // van dichtbij naar ver weg
        .map((p) => ({
          id: p.id,
          label: L(p.name),
          target: p.id,
          hidden: p.countryOnly ? undefined : L(COUNTRIES[p.country].name),
        })),
    ],
  }));

  return (
    <section className={`section ${st.section}`} aria-labelledby="cmap-title">
      <div className="container">
        <div className={st.head}>
          <div className={`stack-sm ${st.headText}`}>
            <p className="kicker" data-reveal="fade">
              {L(COPY.kicker)}
            </p>
            <h2 className="h2" id="cmap-title" data-reveal="up">
              {L(COPY.titleA)} <span className="g-pixels">{L(COPY.titleB)}</span>
            </h2>
            <p className={`lead ${st.lead}`} data-reveal="up" style={{ ["--d" as string]: "0.1s" }}>
              {L(COPY.lead)}
            </p>
          </div>
          <dl className={st.stats} data-stagger="">
            <div>
              <dt>{countries.size}</dt>
              <dd>{L(COPY.countries)}</dd>
            </div>
            <div>
              <dt>{places.length}</dt>
              <dd>{L(COPY.places)}</dd>
            </div>
            {clients ? (
              <div>
                <dt>
                  {clients.value}
                  {clients.suffix}
                </dt>
                <dd>{L(clients.label)}</dd>
              </div>
            ) : null}
          </dl>
        </div>

        <ClientMapStage
          world={world}
          nl={nl}
          legend={legend}
          legendLabel={L(COPY.legend)}
          worldHead={{ kicker: L(COPY.overview), title: L(COPY.world), meta: fill(L(COPY.worldSub), { c: countries.size, n: continents.size }) }}
          nlHead={{ kicker: L(COPY.closeUp), title: L(COPY.netherlands), meta: fill(L(COPY.nlSub), { nb: brabant, n: dutch.length }) }}
        />
      </div>
    </section>
  );
}
