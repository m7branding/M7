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
  doc: "M7 3h7l5 5v13H7zM14 3v5h5",
  check: "M5 12.5l4.5 4.5L19 7",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3.2 2",
  close: "M6 6l12 12M18 6L6 18",
  arrow: "M5 12h14M13 6l6 6-6 6",
  shield: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2.2 2.2L15.5 10",
};

function Ico({ d, className }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

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
  { name: "Noordkap Finance", ref: "FO-2024-031", tag: "Factoringofferte ontvangen", tone: "b", time: "5 uur geleden" },
  { name: "Van Dijk Installaties", ref: "F-2024-097", tag: "Factuur verlopen", tone: "o", time: "8 uur geleden" },
  { name: "Hofman Media", ref: "F-2024-118", tag: "Factuur betaald", tone: "g", time: "Zojuist" },
];

/** Rollend cijfer (CSS-only): --d = doelcijfer, --o = volgorde voor de stagger. */
function Roll({ d, o }: { d: number; o: number }) {
  return <span className={s.roll} style={{ ["--d" as string]: d, ["--o" as string]: o }} />;
}

/**
 * Monvy: het dashboard van het debiteuren- en financieringsplatform op een
 * iPad Pro. De tablet kantelt in perspectief binnen en komt tot rust; de
 * staafgrafieken groeien, de KPI's rollen op, gebeurtenissen schuiven binnen,
 * een betaalmelding popt op en de cursor klikt op Factoring, waarna het
 * paneel met de factoringofferte openschuift.
 */
export function MonvyApp() {
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
                <div className={s.user}>
                  <span className={s.avatar}>SV</span>
                  <b>Welkom, Sanne</b>
                  <Ico d={I.chev} className={s.chev} />
                </div>
                <div className={s.notif}>
                  7 nieuwe notificaties<i />
                </div>
                <ul className={s.menu}>
                  {MENU.map(([label, d], n) => (
                    <li key={label} className={n === 0 ? s.isDash : n === 5 ? s.isFactor : undefined}>
                      <Ico d={d} />
                      {label}
                    </li>
                  ))}
                </ul>
                <div className={s.settings}>
                  <Ico d={I.settings} />
                  Instellingen
                  <Ico d={I.logout} className={s.logout} />
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
                        <div key={b.m} className={s.bar} style={{ ["--i" as string]: i }}>
                          <span className={s.b} style={{ ["--s" as string]: b.b }} />
                          {b.g > 0 && <span className={s.g} style={{ ["--s" as string]: b.g }} />}
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
                        <div key={b.m} className={s.bar} style={{ ["--i" as string]: i + 2 }}>
                          {b.seg.map(([c, h], j) => (
                            <span key={j} className={s[c]} style={{ ["--s" as string]: h }} />
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
                    <article key={e.ref} className={s.ev} style={{ ["--i" as string]: i }}>
                      <div className={s.evTop}>
                        <b>{e.name}</b>
                        <span>
                          <Ico d={I.doc} />
                          {e.ref}
                        </span>
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

              <div className={s.scrim} />

              {/* ---------- toast ---------- */}
              <div className={s.toast}>
                <span className={s.tick}>
                  <Ico d={I.check} />
                </span>
                <span>
                  <b>Factuur F-2024-118 betaald</b>
                  €4.840 ontvangen van Hofman Media
                </span>
              </div>

              {/* ---------- factoringpaneel ---------- */}
              <section className={s.panel}>
                <header className={s.pHead}>
                  <span className={s.pChip}>
                    <Ico d={I.factor} />
                  </span>
                  Factoring
                  <Ico d={I.close} className={s.pClose} />
                </header>
                <h4 className={s.pTitle}>Factoringofferte</h4>
                <p className={s.pSub}>Factuur F-2024-121 · De Groot Bouw B.V.</p>
                <div className={s.pAmount}>
                  <small>Je ontvangt</small>
                  <strong>
                    €<Roll d={1} o={0} />
                    <Roll d={8} o={1} />.<Roll d={2} o={2} />
                    <Roll d={5} o={3} />
                    <Roll d={0} o={4} />
                  </strong>
                  <span>
                    <Ico d={I.clock} />
                    binnen 24 uur op je rekening
                  </span>
                </div>
                <ol className={s.steps}>
                  <li>
                    <i>
                      <Ico d={I.check} />
                    </i>
                    Aangevraagd
                  </li>
                  <li>
                    <i>
                      <Ico d={I.check} />
                    </i>
                    Goedgekeurd
                  </li>
                  <li>
                    <i>
                      <Ico d={I.clock} />
                    </i>
                    Uitbetaling
                  </li>
                </ol>
                <dl className={s.pRows}>
                  <dt>Factuurbedrag</dt>
                  <dd>€19.210</dd>
                  <dt>Bevoorschotting</dt>
                  <dd>95%</dd>
                  <dt>Looptijd</dt>
                  <dd>max. 60 dagen</dd>
                  <dt>Partner</dt>
                  <dd>Noordkap Finance</dd>
                </dl>
                <span className={s.pBtn}>
                  Offerte accepteren
                  <Ico d={I.arrow} />
                </span>
                <p className={s.pNote}>
                  <Ico d={I.shield} />
                  Geen vaste kosten, per factuur te kiezen
                </p>
              </section>

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
