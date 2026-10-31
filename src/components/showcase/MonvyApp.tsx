import s from "./MonvyApp.module.css";

/* kleine lijn-iconen (24-grid, stroke) */
const I = {
  dash: "M4 4h16v16H4zM4 9h16M10 9v11",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20c.6-3.4 3.7-5.6 7.5-5.6s6.9 2.2 7.5 5.6",
  quote: "M8.5 3.5h7v3h-7zM8.5 5H5.5v15.5h13V5h-3M9 11h6M9 15h4",
  invoice: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h4",
  follow: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM12 8.5v4",
  factor: "M19.5 12a7.5 7.5 0 0 1-12.8 5.3M4.5 12a7.5 7.5 0 0 1 12.8-5.3M18 3.5v3.6h-3.6M6 20.5v-3.6h3.6M12 9v6",
  capital: "M4 4v16h16M7.5 15l3.5-4 3 2.6 5-6",
  credit: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",
  settle: "M5 19L19 5M13.5 5H19v5.5M10.5 19H5v-5.5",
  settings: "M4 5h16v6H4zM4 13h16v6H4zM8 8h.01M8 16h.01",
  logout: "M13 4H5v16h8M10 12h11M17 8l4 4-4 4",
  chev: "M6 9l6 6 6-6",
  check: "M5 12.5l4.5 4.5L19 7",
};

function Ico({ d, className }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const v = (o: Record<string, string | number>) => o as React.CSSProperties;

/* lijn-icoon als data-URI (achtergrond/::after): scheelt een svg + path per icoon in de DOM */
const ico = (d: string, c = "#005f9c") =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${c}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='${d}'/></svg>`,
  )}")`;

const MENU: [string, string][] = [
  ["Dashboard", I.dash],
  ["Debiteuren", I.user],
  ["Offertes", I.quote],
  ["Facturen", I.invoice],
  ["Opvolgingen", I.follow],
  ["Factoring", I.factor],
  ["Werkkapitaal", I.capital],
  ["Kredieten", I.credit],
  ["Verrekeningen", I.settle],
];

/* hoogtes in cqw van het scherm (plotgebied 13,4cqw = €20k) */
const OFFERS = [
  { m: "Jul", g: 10.2, b: 3.4 },
  { m: "Aug", g: 6.8, b: 1.3 },
  { m: "Sep", g: 6.8, b: 2.5 },
  { m: "Okt", g: 1.8, b: 10.2 },
  { m: "Nov", g: 0, b: 5.4 },
  { m: "Dec", g: 0, b: 6.1 },
];
const INVOICES: { m: string; seg: [string, number][] }[] = [
  { m: "Jul", seg: [["r", 0.7], ["g", 8.6]] },
  { m: "Aug", seg: [["k", 0.7], ["y", 2.4], ["g", 5.6]] },
  { m: "Sep", seg: [["r", 1.2], ["o", 1], ["g", 7]] },
  { m: "Okt", seg: [["p", 1.2], ["o", 1.6], ["y", 3], ["g", 5]] },
];
const EVENTS = [
  { name: "Bakkerij Verhoeven", ref: "OF-2024-412", tag: "Offerte geaccepteerd", tone: "g", time: "2 uur geleden" },
  { name: "Van Dijk Techniek", ref: "F-2024-097", tag: "Factuur verlopen", tone: "o", time: "5 uur geleden" },
  { name: "Kroon Catering", ref: "F-2024-101", tag: "Aanmaning verstuurd", tone: "b", time: "8 uur geleden" },
];

/* opvolgingen-bord: kolom per fase; [factuur, debiteur, bedrag, dagen, actie] (fictief) */
type Card = [string, string, string, string, string];
const BOARD: { k: string; name: string; n: [number, number]; sum: [string, string]; cards: Card[] }[] = [
  {
    k: "paid",
    name: "Betaald",
    n: [2, 3],
    sum: ["€4.650", "€9.490"],
    cards: [
      ["F-2024-109", "Bakkerij Smits", "€1.250", "Ontvangen 4-11", "Betaald"],
      ["F-2024-104", "Studio Noord", "€3.400", "Ontvangen 1-11", "Betaald"],
    ],
  },
  {
    k: "rem",
    name: "1ste herinnering",
    n: [3, 2],
    sum: ["€10.735", "€5.895"],
    cards: [
      ["F-2024-121", "De Groot Bouw", "€2.115", "6 dagen te laat", "E-mail"],
      ["F-2024-123", "Leeuwen Logistiek", "€3.780", "4 dagen te laat", "AI-call"],
    ],
  },
  {
    k: "warn",
    name: "Aanmaning",
    n: [3, 3],
    sum: ["€11.240", "€11.240"],
    cards: [
      ["F-2024-097", "Van Dijk Techniek", "€5.600", "21 dagen te laat", "Brief"],
      ["F-2024-101", "Kroon Catering", "€1.980", "18 dagen te laat", "AI-call"],
      ["F-2024-099", "Atelier Meijer", "€3.660", "16 dagen te laat", "E-mail"],
    ],
  },
  {
    k: "def",
    name: "Ingebrekestelling",
    n: [2, 2],
    sum: ["€7.150", "€7.150"],
    cards: [
      ["F-2024-082", "Smit Transport", "€4.200", "38 dagen te laat", "Aangetekend"],
      ["F-2024-086", "Bloemsma Retail", "€2.950", "34 dagen te laat", "Aangetekend"],
    ],
  },
  {
    k: "debt",
    name: "Incasso",
    n: [2, 2],
    sum: ["€6.410", "€6.410"],
    cards: [
      ["F-2024-071", "Jansen Bouw", "€3.900", "52 dagen te laat", "Incassopartner"],
      ["F-2024-068", "Hoeve de Linde", "€2.510", "47 dagen te laat", "Incassopartner"],
    ],
  },
];

function Inv({ c, i, className }: { c: Card; i: number; className?: string }) {
  return (
    <article className={className ?? s.card} data-no={c[0]} data-amt={c[2]} data-r={i}>
      <span className={s.who}>{c[1]}</span>
      <footer data-d={c[3]}>
        <em data-c={c[4]} />
      </footer>
    </article>
  );
}

/** Rollend cijfer (CSS-only): --d = doelcijfer, --o = volgorde voor de stagger. */
function Roll({ d, o }: { d: number; o: number }) {
  return <span className={s.roll} style={v({ "--d": d, "--o": o })} />;
}

/**
 * Monvy: het debiteuren- en financieringsplatform op een iPad Pro. De tablet
 * komt rustig binnen, het dashboard bouwt op (staven groeien, KPI's rollen,
 * gebeurtenissen schuiven in). De cursor klikt in de zijbalk op Opvolgingen:
 * het opvolgingen-dashboard opent als bord met een kolom per fase (aantal +
 * openstaand bedrag). Een betaling komt binnen en de factuur schuift rustig
 * van "1ste herinnering" naar "Betaald", terwijl de camera langzaam meedrijft.
 */
export function MonvyApp() {
  const mover: Card = ["F-2024-118", "Hofman Media", "€4.840", "9 dagen te laat", "E-mail"];
  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />

      <div className={s.scene}>
        <div className={s.tablet}>
          <div className={s.frame}>
            <span className={s.cam} />
            <div className={s.screen}>
              {/* ---------- zijbalk ---------- */}
              <aside className={s.side}>
                <div className={s.brand}>
                  <svg className={s.logo} viewBox="0 0 40 40" aria-hidden="true">
                    <path d="M20 3.2L36.8 20 20 36.8 3.2 20z" />
                    <path d="M12.5 24v-6.5a2.5 2.5 0 0 1 5 0V24M17.5 17.5a2.5 2.5 0 0 1 5 0V26M22.5 17.5a2.5 2.5 0 0 1 5 0v5.5" />
                  </svg>
                  <span>monvy</span>
                </div>
                <div className={s.user} style={v({ "--ic": ico(I.chev, "#333333") })}>
                  <span className={s.avatar}>SV</span>
                  <b>Welkom, Sanne</b>
                </div>
                <div className={s.notif}>
                  7 nieuwe notificaties<i />
                </div>
                <ul className={s.menu}>
                  {MENU.map(([label, d], n) => (
                    <li
                      key={label}
                      className={n === 0 ? s.isDash : n === 4 ? s.isOpv : n > 4 ? s.below : undefined}
                      style={v({ "--ic": ico(d) })}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
                <div className={s.subMenu}>
                  <b>Overzicht</b>
                  <span>Alle opvolgingen</span>
                </div>
                <span className={s.rail} />
                <div className={s.settings} style={v({ "--ic": ico(I.settings), "--ic2": ico(I.logout, "#333333") })}>
                  Instellingen
                </div>
              </aside>

              {/* ---------- dashboard ---------- */}
              <main className={s.main}>
                <h3 className={s.title}>Dashboard</h3>

                <section className={`${s.kpi} ${s.kpiA}`}>
                  <header className={s.kHead}>
                    Mijn uitstaande offertes <b>17</b>
                  </header>
                  <ul className={s.legend}>
                    <li>Waarde uitstaande offertes</li>
                    <li>Waarde geclosed</li>
                  </ul>
                  <p className={s.value}>
                    €<Roll d={7} o={0} />
                    <Roll d={5} o={1} />k
                  </p>
                  <div className={s.chart}>
                    <span className={s.axis}>
                      <i>€20k</i>
                      <i>€15k</i>
                      <i>€10k</i>
                      <i>€5k</i>
                    </span>
                    <div className={s.plot}>
                      {OFFERS.map((b, i) => (
                        <div key={b.m} className={s.bar} style={v({ "--i": i })}>
                          <span className={s.b} style={v({ "--s": b.b })} />
                          {b.g > 0 && <span className={s.g} style={v({ "--s": b.g })} />}
                        </div>
                      ))}
                    </div>
                    <span className={s.months}>
                      {OFFERS.map((b) => (
                        <i key={b.m} className={b.m === "Nov" ? s.now : undefined}>
                          {b.m}
                        </i>
                      ))}
                    </span>
                    <span className={s.tip}>
                      Uitstaande offertes
                      <b>€15.250</b>
                    </span>
                  </div>
                </section>

                <section className={`${s.kpi} ${s.kpiB}`}>
                  <header className={s.kHead}>
                    Mijn openstaande facturen <b>53</b>
                  </header>
                  <p className={s.value}>
                    €<Roll d={2} o={1} />
                    <Roll d={4} o={2} />,<Roll d={5} o={3} />k
                  </p>
                  <div className={s.chart}>
                    <span className={s.axis}>
                      <i>€20k</i>
                      <i>€15k</i>
                      <i>€10k</i>
                      <i>€5k</i>
                    </span>
                    <div className={s.plot}>
                      {INVOICES.map((b, i) => (
                        <div key={b.m} className={s.bar} style={v({ "--i": i + 2 })}>
                          {b.seg.map(([c, h], j) => (
                            <span key={j} className={s[c]} style={v({ "--s": h })} />
                          ))}
                        </div>
                      ))}
                    </div>
                    <span className={s.months}>
                      {INVOICES.map((b) => (
                        <i key={b.m}>{b.m}</i>
                      ))}
                    </span>
                  </div>
                </section>

                <h4 className={s.evTitle}>
                  Recente gebeurtenissen <span className={s.live}>Live</span>
                </h4>
                <div className={s.events}>
                  {EVENTS.map((e, i) => (
                    <article key={e.ref} className={s.ev} style={v({ "--i": i })}>
                      <div className={s.evTop}>
                        <b>{e.name}</b>
                        <span>{e.ref}</span>
                      </div>
                      <em className={`${s.tag} ${s["t" + e.tone]}`}>{e.tag}</em>
                      <footer>
                        {e.time}
                        <i />
                      </footer>
                    </article>
                  ))}
                </div>
              </main>

              {/* ---------- opvolgingen: bord per fase ---------- */}
              <section className={s.follow}>
                <h3 className={s.fTitle}>
                  Opvolgingen <span>Overzicht</span>
                </h3>
                <div className={s.board}>
                  {BOARD.map((col, c) => (
                    <div key={col.k} className={`${s.col} ${s[col.k]}`} style={v({ "--c": c })}>
                      <header className={s.cHead}>
                        <b>{col.name}</b>
                        <i data-a={col.n[0]} data-b={col.n[1]} />
                        <small data-a={col.sum[0]} data-b={col.sum[1]} />
                      </header>
                      <div className={s.cards}>
                        {col.cards.map((card, r) => (
                          <Inv key={card[0]} c={card} i={r} />
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* de factuur die betaald wordt en naar "Betaald" schuift */}
                  <article className={s.mover} data-no={mover[0]} data-amt={mover[2]}>
                    <span className={s.who}>{mover[1]}</span>
                    <footer data-d={mover[3]} data-d2="Ontvangen 6-11">
                      <em data-c={mover[4]} data-c2="Betaald" />
                    </footer>
                  </article>
                </div>
              </section>

              {/* ---------- betaalmelding ---------- */}
              <div className={s.toast}>
                <span className={s.tick}>
                  <Ico d={I.check} />
                </span>
                <span>
                  <b>Betaling ontvangen</b>
                  €4.840 · Hofman Media
                </span>
              </div>

              {/* ---------- cursor ---------- */}
              <span className={s.ripple} />
              <svg className={s.cursor} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 2.5v16.2l4.3-4 2.9 6.6 2.7-1.2-2.9-6.5 5.9-.3z" />
              </svg>
            </div>
            <span className={s.glare} />
          </div>
        </div>
      </div>
    </div>
  );
}
