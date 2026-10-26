import s from "./SteddionConfigurator.module.css";

type V = Record<string, string | number>;
const v = (o: V) => o as React.CSSProperties;

const STEPS = ["Pand", "Energieprofiel", "Maatregelen", "Simulatie", "Rapport"];
/* per stap: wanneer actief (a) en wanneer afgerond (d), in scroll-voortgang */
const STEP_T = [
  [-1, 0.12],
  [0.12, 0.26],
  [0.26, 0.45],
  [0.45, 0.65],
  [0.65, 0.9],
];

const MEASURES = [
  { t: "Zonnepanelen", d: "2,4 MWp · 5.400 m² dak", i: "sun", at: 0.27 },
  { t: "Batterij", d: "2 MWh · 1 MW vermogen", i: "bat", at: 0.32 },
  { t: "Laadplein e-trucks", d: "12 laadpunten", i: "plug", at: 0.37 },
  { t: "Slimme sturing", d: "EMS · peak shaving", i: "ems", at: 0.42 },
];

const KPIS = [
  { l: "Energiekosten", n: 38, pre: "−", u: "%" },
  { l: "CO₂-uitstoot", n: 46, pre: "−", u: "%" },
  { l: "Piekbelasting", n: 52, pre: "−", u: "%" },
  { l: "Zelfvoorzienend", n: 61, pre: "", u: "%" },
];

const FIELDS = [
  { l: "Naam", val: "Sanne de Vries" },
  { l: "Bedrijf", val: "Lindehof Logistiek Vastgoed" },
  { l: "E-mailadres", val: "sanne@voorbeeld.nl" },
  { l: "Wachtwoord", val: "••••••••••••", pw: true },
];

/* simulatie: 24 uur netbelasting (kW), y = 220 - kW / 12; netcapaciteit 1.500 kW → y 95 */
const BEFORE =
  "M40 168.3C43.8 168.6 55.3 169.6 62.9 170C70.6 170.4 78.2 170.8 85.8 170.8C93.5 170.8 101.1 170.8 108.8 170C116.4 169.2 124 168.9 131.7 165.8C139.3 162.8 146.9 160 154.6 151.7C162.2 143.3 169.9 128.1 177.5 115.8C185.1 103.6 192.8 89.4 200.4 78.3C208.1 67.2 215.7 55.8 223.3 49.2C231 42.5 238.6 39 246.2 38.3C253.9 37.6 261.5 41.8 269.2 45C276.8 48.2 284.4 54 292.1 57.5C299.7 61 307.4 66.3 315 65.8C322.6 65.4 330.3 59.2 337.9 55C345.6 50.8 353.2 42.2 360.8 40.8C368.5 39.4 376.1 41.8 383.8 46.7C391.4 51.5 399 62.6 406.7 70C414.3 77.4 421.9 89.4 429.6 90.8C437.2 92.2 444.9 86 452.5 78.3C460.1 70.7 467.8 53.1 475.4 45C483.1 36.9 490.7 30.7 498.3 30C506 29.3 513.6 30 521.2 40.8C528.9 51.7 536.5 77.6 544.2 95C551.8 112.4 559.4 133.2 567.1 145C574.7 156.8 586.2 162.4 590 165.8";
const AFTER =
  "M40 155C43.8 154.7 55.3 153.9 62.9 153.3C70.6 152.8 78.2 151.8 85.8 151.7C93.5 151.5 101.1 152.1 108.8 152.5C116.4 152.9 124 154.3 131.7 154.2C139.3 154 146.9 153.2 154.6 151.7C162.2 150.1 169.9 146.9 177.5 145C185.1 143.1 192.8 141.5 200.4 140C208.1 138.5 215.7 136.9 223.3 135.8C231 134.7 238.6 133.2 246.2 133.3C253.9 133.5 261.5 135.1 269.2 136.7C276.8 138.2 284.4 140.8 292.1 142.5C299.7 144.2 307.4 146.5 315 146.7C322.6 146.8 330.3 144.7 337.9 143.3C345.6 141.9 353.2 139.7 360.8 138.3C368.5 136.9 376.1 136 383.8 135C391.4 134 399 133.2 406.7 132.5C414.3 131.8 421.9 131.2 429.6 130.8C437.2 130.4 444.9 130.3 452.5 130C460.1 129.7 467.8 129.2 475.4 129.2C483.1 129.1 490.7 129.2 498.3 129.6C506 130 513.6 130.3 521.2 131.7C528.9 133 536.5 135 544.2 137.5C551.8 140 559.4 144 567.1 146.7C574.7 149.3 586.2 152.2 590 153.3";
const SOLAR =
  "M154.6 220C162.2 219.4 169.9 219.2 177.5 216.7C185.1 214.2 192.8 210.3 200.4 205C208.1 199.7 215.7 192.2 223.3 185C231 177.8 238.6 168.6 246.2 161.7C253.9 154.7 261.5 148.3 269.2 143.3C276.8 138.3 284.4 134.2 292.1 131.7C299.7 129.2 307.4 128.3 315 128.3C322.6 128.3 330.3 129.2 337.9 131.7C345.6 134.2 353.2 138.3 360.8 143.3C368.5 148.3 376.1 154.7 383.8 161.7C391.4 168.6 399 177.8 406.7 185C414.3 192.2 421.9 199.7 429.6 205C437.2 210.3 444.9 214.2 452.5 216.7C460.1 219.2 467.8 219.4 475.4 220Z";
const CLOSE = "L590 220L40 220Z";

function Icon({ i }: { i: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {i === "sun" && <path d="M4 15.5h16l-2.2-8H6.2zM12 7.5v8M5.1 11.5h13.8M9 19.5h6M12 15.5v4" />}
      {i === "bat" && <path d="M5 7h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM21 10.5v3M11.5 9l-2 3.2h3L10.5 15" />}
      {i === "plug" && <path d="M6 20V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14M4.5 20h12M15 9h1.6a1.6 1.6 0 0 1 1.6 1.6v4.2a1.2 1.2 0 0 0 2.4 0V8l-2-2M11 8.5l-2 3h3l-2 3" />}
      {i === "ems" && <path d="M4 7h9M17 7h3M4 17h3M11 17h9M15 5v4M9 15v4M4 12h5M13 12h7" />}
    </svg>
  );
}

/** Kleine steddion-woordmerk (eigen tekening): gele zon-boog + lowercase woord. */
function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`${s.mark} ${className ?? ""}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 16.5a8 8 0 0 1 16 0zM3.5 20.5h17" />
      </svg>
      steddion
    </span>
  );
}

/**
 * Steddion: Energy Property Configurator als begeleide demo.
 * Scroll: het app-venster kantelt binnen (stap 1 pand + 2 energieprofiel),
 * de maatregelen klikken één voor één aan (zonnepanelen verschijnen op het dak,
 * batterij, laadplein, slimme sturing), het scherm scrolt naar de simulatie
 * (netbelasting voor/na tekent zich, KPI's tellen op), daarna het leadformulier
 * met account aanmaken en tot slot schuift het energierapport (PDF) naar voren.
 */
export function SteddionConfigurator() {
  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />

      <div className={s.win}>
        <div className={s.chrome}>
          <i />
          <span className={s.url}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z" />
            </svg>
            tools.steddion.com/configurator
          </span>
        </div>

        <header className={s.head}>
          <Wordmark />
          <span className={s.appName}>Energy Property Configurator</span>
          <ol className={s.steps}>
            {STEPS.map((t, n) => (
              <li key={t} style={v({ "--a": STEP_T[n][0], "--d": STEP_T[n][1] })}>
                <i>{n + 1}</i>
                {t}
              </li>
            ))}
          </ol>
        </header>

        <div className={s.body}>
          <div className={s.page}>
            {/* rij A: pand + energieprofiel */}
            <section className={s.rowA}>
              <div className={`${s.card} ${s.pand}`}>
                <p className={s.kicker}>Stap 1 · Pand</p>
                <h3>Over je pand</h3>
                <label className={s.field}>
                  <span>Adres</span>
                  <b className={s.input}>Logistiekpark 12, Tilburg</b>
                </label>
                <label className={s.field}>
                  <span>Type pand</span>
                  <b className={`${s.input} ${s.select}`}>Distributiecentrum</b>
                </label>
                <div className={s.pair}>
                  <label className={s.field}>
                    <span>Vloeroppervlak</span>
                    <b className={s.input}>24.000 m²</b>
                  </label>
                  <label className={s.field}>
                    <span>Netaansluiting</span>
                    <b className={s.input}>1.500 kVA</b>
                  </label>
                </div>
              </div>

              <div className={`${s.card} ${s.scene}`}>
                <svg className={s.iso} viewBox="40 10 390 262" aria-hidden="true">
                  <defs>
                    <pattern id="stdPanels" width="13" height="9.4" patternUnits="userSpaceOnUse">
                      <rect width="12" height="8.4" rx="0.6" fill="#3a2167" />
                      <rect width="12" height="1.4" fill="#6a5495" />
                    </pattern>
                    <pattern id="stdDoors" width="16" height="44" patternUnits="userSpaceOnUse">
                      <rect x="3" y="17" width="10.5" height="27" fill="#d4cde1" />
                    </pattern>
                    <pattern id="stdBays" width="20" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0.5 0V40" stroke="#c2bad3" strokeWidth="1.4" />
                    </pattern>
                  </defs>
                  {/* plaat */}
                  <path d="M52.8 129L269.3 254L416.5 169L416.5 177L269.3 262L52.8 137Z" fill="#cfc8dd" />
                  <path d="M200 44L416.5 169L269.3 254L52.8 129Z" fill="#ece9f3" />
                  {/* laadplein: vakken op de grond */}
                  <g transform="matrix(0.866 0.5 -0.866 0.5 200 44)">
                    <rect className={s.bays} x="66" y="132" width="122" height="30" fill="url(#stdBays)" />
                  </g>
                  {/* gebouw */}
                  <path d="M127.2 72L270.1 154.5L270.1 198.5L127.2 116Z" fill="#fdfcff" />
                  <path d="M270.1 154.5L349.8 108.5L349.8 152.5L270.1 198.5Z" fill="#dad3e7" />
                  <path d="M206.9 26L349.8 108.5L270.1 154.5L127.2 72Z" fill="#e4e0ec" />
                  <g transform="matrix(0.866 0.5 0 1 127.2 72)">
                    <rect x="6" y="0" width="156" height="44" fill="url(#stdDoors)" />
                  </g>
                  <g transform="matrix(0.866 0.5 -0.866 0.5 206.9 26)">
                    <rect className={s.panels} x="9" y="8" width="147" height="76" fill="url(#stdPanels)" />
                  </g>
                  {/* batterij */}
                  <g className={s.battery}>
                    <path d="M84.8 104.5L110.8 119.5L110.8 135.5L84.8 120.5Z" fill="#583e87" />
                    <path d="M110.8 119.5L126.4 110.5L126.4 126.5L110.8 135.5Z" fill="#372162" />
                    <path d="M100.4 95.5L126.4 110.5L110.8 119.5L84.8 104.5Z" fill="#7d69a2" />
                    <path d="M99 114.5l-3 5h4l-3 5" fill="none" stroke="#f9c142" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  {/* laadpalen */}
                  <g className={s.chargers}>
                    <path d="M160.2 147v-13M177.5 157v-13M194.8 167v-13M212.1 177v-13M229.5 187v-13M246.8 197v-13" stroke="#45297a" strokeWidth="3.4" strokeLinecap="round" />
                    <path d="M160.2 134h0M177.5 144h0M194.8 154h0M212.1 164h0M229.5 174h0M246.8 184h0" stroke="#f9c142" strokeWidth="4.6" strokeLinecap="round" />
                  </g>
                  {/* energiestromen (slimme sturing) */}
                  <g className={s.flows} fill="none" strokeLinecap="round">
                    <path d="M238 84C190 58 128 70 108 96" />
                    <path d="M118 128C140 150 180 150 203 152" />
                    <path d="M262 92C300 110 300 150 262 176" />
                  </g>
                </svg>

                <div className={s.profile}>
                  <p className={s.kicker}>Stap 2 · Energieprofiel</p>
                  <dl>
                    <dt>Jaarverbruik</dt>
                    <dt>Piekvraag</dt>
                    <dd>3,1 GWh</dd>
                    <dd>1.840 kW</dd>
                  </dl>
                </div>
                <span className={s.congestion}>
                  <i />
                  Netcongestie · geen extra capaciteit
                </span>
              </div>
            </section>

            {/* rij B: maatregelen */}
            <section className={s.rowB}>
              <p className={s.rowHead}>
                <span className={s.kicker}>Stap 3 · Maatregelen</span>
                <span className={s.count}>
                  <b /> van 4 geselecteerd
                </span>
              </p>
              <ul className={s.measures}>
                {MEASURES.map((m) => (
                  <li key={m.t} style={v({ "--at": m.at })}>
                    <span className={s.mIcon}>
                      <Icon i={m.i} />
                    </span>
                    <span className={s.toggle} />
                    <b>{m.t}</b>
                    <small>{m.d}</small>
                  </li>
                ))}
              </ul>
            </section>

            {/* rij C: simulatie */}
            <section className={`${s.card} ${s.sim}`}>
              <div className={s.simHead}>
                <p className={s.kicker}>Stap 4 · Simulatie</p>
                <span className={s.demo}>Demo-waarden</span>
                <h3>Netbelasting op een piekdag</h3>
                <ul className={s.legend}>
                  <li className={s.lgBefore}>Huidig</li>
                  <li className={s.lgAfter}>Met maatregelen</li>
                  <li className={s.lgSolar}>Zon-opwek</li>
                </ul>
              </div>
              <svg className={s.chart} viewBox="0 0 600 240" aria-hidden="true">
                <defs>
                  <linearGradient id="stdAfterFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#45297a" stopOpacity="0.28" />
                    <stop offset="1" stopColor="#45297a" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="stdOver">
                    <rect x="0" y="0" width="600" height="95" />
                  </clipPath>
                </defs>
                <path className={s.gridLines} d="M40 20H590M40 70H590M40 120H590M40 170H590M40 220H590" />
                <path className={s.solar} d={SOLAR} />
                <path className={s.over} d={BEFORE + CLOSE} clipPath="url(#stdOver)" />
                <path className={s.afterArea} d={AFTER + CLOSE} />
                <path className={s.before} d={BEFORE} pathLength={1} />
                <path className={s.after} d={AFTER} pathLength={1} />
                <path className={s.cap} d="M40 95H590" />
                <g className={s.capLabel}>
                  <rect x="44" y="83" width="152" height="24" rx="12" />
                  <text x="120" y="99">Netcapaciteit 1.500 kW</text>
                </g>
                <g className={s.shave}>
                  <path d="M498 36V122" />
                  <path d="M492 114l6 8 6-8" />
                  <rect x="508" y="62" width="74" height="24" rx="12" />
                  <text x="545" y="78">−52% piek</text>
                </g>
                <g className={s.axis}>
                  <text x="40" y="236">00:00</text>
                  <text x="315" y="236">12:00</text>
                  <text x="590" y="236">24:00</text>
                </g>
              </svg>
              <ul className={s.kpis}>
                {KPIS.map((k, n) => (
                  <li key={k.l} style={v({ "--n": n, "--to": k.n })}>
                    <span>{k.l}</span>
                    <b data-pre={k.pre} data-u={k.u} />
                    <i />
                  </li>
                ))}
              </ul>
            </section>

            <section className={s.cta}>
              <p>
                <b>Je volledige energierapport</b>
                Terugverdientijd, subsidies en advies over netcongestie
              </p>
              <span className={s.ctaBtn}>Rapport ontvangen</span>
            </section>

          </div>

          {/* leadformulier + account */}
          <div className={s.scrim} />
          <div className={s.modal}>
            <p className={s.kicker}>Stap 5 · Rapport</p>
            <h3>Ontvang je energierapport</h3>
            <p className={s.sub}>Maak gratis een account aan en download je rapport als PDF.</p>
            {FIELDS.map((f, n) => (
              <label key={f.l} className={s.field} style={v({ "--f": n })}>
                <span>{f.l}</span>
                <b className={`${s.input} ${s.typed}`}>
                  <em className={f.pw ? s.pw : undefined}>{f.val}</em>
                </b>
              </label>
            ))}
            <p className={s.terms}>
              <i />
              Ik ga akkoord met de algemene voorwaarden
            </p>
            <span className={s.submit}>
              <span>Account aanmaken</span>
              <span className={s.done}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12.5l4.2 4.2L19 7" pathLength={1} />
                </svg>
                Account aangemaakt
              </span>
            </span>
          </div>

          <div className={s.toast}>
            <i>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12.5l4.2 4.2L19 7" />
              </svg>
            </i>
            <p>
              <b>Welkom, Sanne</b>
              Rapport verstuurd naar sanne@voorbeeld.nl
            </p>
          </div>
          <span className={s.cursor} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M5 3l14 8.2-6.1 1.3 3.6 6.6-2.7 1.4-3.6-6.6L5.6 18z" />
            </svg>
          </span>
        </div>
      </div>

      {/* energierapport (PDF) */}
      <article className={s.report}>
        <header className={s.rHead}>
          <Wordmark className={s.markLight} />
          <span className={s.rDate}>26 okt 2026</span>
          <h4>Energierapport</h4>
          <p>Distributiecentrum · 24.000 m² · Logistiekpark 12, Tilburg</p>
        </header>
        <div className={s.rBody}>
          <div className={s.score}>
            <span className={s.ring}>
              <b>82</b>
              <small>/100</small>
            </span>
            <p>
              <span>Energiescore</span>
              <b>+41 punten</b>
              met 4 maatregelen
            </p>
          </div>
          <div className={s.rCharts}>
            <figure>
              <figcaption>Netbelasting piekdag</figcaption>
              <svg viewBox="30 20 570 205" aria-hidden="true">
                <path d="M40 95H590" className={s.rCap} />
                <path d={BEFORE} className={s.rBefore} />
                <path d={AFTER + CLOSE} className={s.rAfterArea} />
                <path d={AFTER} className={s.rAfter} />
              </svg>
            </figure>
            <figure className={s.donut}>
              <figcaption>Zelfvoorzienend</figcaption>
              <span>
                <b>61%</b>
              </span>
            </figure>
          </div>
          <dl className={s.rRows}>
            <dt>Besparing energiekosten</dt>
            <dd>€ 214.000 / jaar</dd>
            <dt>Terugverdientijd</dt>
            <dd>6,8 jaar</dd>
            <dt>CO₂-reductie</dt>
            <dd>1.120 ton / jaar</dd>
          </dl>
          <p className={s.advice}>
            <b>Volgende stap</b>
            Plan een energiediagnose op locatie met een Steddion-adviseur.
          </p>
          <p className={s.rFoot}>Opgesteld voor Sanne de Vries · pagina 1 van 12</p>
        </div>
        <span className={s.pdf}>PDF</span>
      </article>
    </div>
  );
}
