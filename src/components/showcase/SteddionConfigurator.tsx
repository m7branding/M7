import s from "./SteddionConfigurator.module.css";
import { poppins } from "./fonts";

type V = Record<string, string | number>;
const v = (o: V) => o as React.CSSProperties;

const P = "/media/showcase/steddion";

/* Verwacht verbruiksprofiel (etmaal), gemiddelde werkdag, overgenomen uit de echte configurator.
   Waarden in grafiek-eenheden van de tool (132 eenheden = volle hoogte, 200 kW-lijn op 101,8). */
const SIT = [11.7, 11.7, 11.7, 11.7, 14.2, 16.3, 22.9, 32.6, 43.3, 46.3, 42.2, 38.7, 35.1, 33.6, 33.6, 33.6, 37.2, 34.6, 21.9, 16.8, 13.7, 12.2, 11.7, 11.7];
/* met nieuwe behoefte: e-truck laadt 's nachts (20u – 5u) */
const NEW = [34.1, 34.1, 34.1, 34.1, 37.2, 16.3, 22.9, 32.6, 43.3, 46.3, 42.2, 38.7, 35.1, 33.6, 33.6, 33.6, 37.2, 34.6, 21.9, 16.8, 36.6, 34.6, 34.1, 34.1];
/* met oplossing: eigen zonverbruik (schatting), zelfde schaal */
const GREEN = [0, 0, 0, 0, 0, 0, 0, 8, 15.1, 20, 23.4, 25.8, 26.9, 26.9, 25.8, 23.4, 20, 15.1, 8, 0, 0, 0, 0, 0];

/* "Met oplossing" uit de samenvatting, originele schaal van de tool (basislijn y = 71) */
const SOL_P = [15.9, 15.9, 15.9, 15.9, 17.3, 7.6, 10.6, 11.4, 13.1, 12.2, 8.7, 6, 3.8, 3.1, 3.7, 4.7, 8, 9, 6.5, 7.8, 17, 16.1, 15.9, 15.9];
const SOL_G = [0, 0, 0, 0, 0, 0, 0, 3.7, 7, 9.3, 10.9, 12, 12.5, 12.5, 12, 10.9, 9.3, 7, 3.7, 0, 0, 0, 0, 0];
const MINI_P = SOL_P.map((h, i) => `M${18.5 + i * 11} ${(71 - h).toFixed(1)}h10v${h}h-10z`).join("");
const MINI_G = SOL_G.map((g, i) => (g ? `M${18.5 + i * 11} ${(71 - SOL_P[i] - g).toFixed(1)}h10v${g - 0.6}h-10z` : "")).join("");

/* ---------- isometrische scène: geometrie 1-op-1 uit de configurator (viewBox 800 × 600) ---------- */
const PLATE_LINES = Array.from({ length: 15 }, (_, i) => {
  const dx = 19.392 * i;
  const dy = 9.696 * i;
  return `M${(361.2 + dx).toFixed(1)} ${(151.8 + dy).toFixed(1)}L${(46.3 + dx).toFixed(1)} ${(309.3 + dy).toFixed(1)}`;
}).join("");
const shift = (d: string, j: number) =>
  d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, x, y) => `${(+x + 27.15 * j).toFixed(1)} ${(+y + 13.575 * j).toFixed(1)}`);
const DOCK_F = [0, 1, 2, 3].map((j) => shift("M230.2 290.7L247.6 299.4L247.6 313.3L230.2 304.6ZM247.6 299.4L248.4 299L248.4 312.9L247.6 313.3Z", j)).join("");
const DOCK_T = [0, 1, 2, 3].map((j) => shift("M230.9 290.3L248.4 299L247.6 299.4L230.2 290.7Z", j)).join("");
/* zonnepanelen: middelpunten op het dak (ruit 25 × 12,5) */
const PANELS = [
  [383.5, 201.2],
  [398.1, 193.9],
  [398.1, 208.5],
  [412.6, 201.2],
  [427.1, 208.5],
  [441.7, 215.7],
  [456.2, 223],
  [470.8, 230.3],
  [485.3, 237.5],
  [499.9, 244.8],
];
const WHEELS =
  "M177.5 316.1L177.3 315.3L176.6 314.5L175.6 313.9L174.6 313.5L173.9 313.6L173.6 314.2L173.9 314.9L174.6 315.7L175.6 316.4L176.6 316.7L177.3 316.6Z" +
  "M182.4 318.5L182.1 317.8L181.4 316.9L180.4 316.3L179.5 316L178.8 316.1L178.5 316.6L178.8 317.3L179.5 318.2L180.4 318.8L181.4 319.1L182.1 319Z" +
  "M210.3 332.5L210 331.7L209.3 330.9L208.4 330.2L207.4 329.9L206.7 330L206.4 330.5L206.7 331.3L207.4 332.1L208.4 332.8L209.3 333.1L210 333Z" +
  "M216.1 335.4L215.9 334.6L215.1 333.8L214.2 333.2L213.2 332.8L212.5 332.9L212.2 333.4L212.5 334.2L213.2 335L214.2 335.7L215.1 336L215.9 335.9Z";
const RAYS = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4;
  const c = Math.cos(a);
  const sn = Math.sin(a);
  return `M${(489.5 + c * 11.2).toFixed(1)} ${(165.9 + sn * 11.2).toFixed(1)}L${(489.5 + c * 14.9).toFixed(1)} ${(165.9 + sn * 14.9).toFixed(1)}`;
}).join("");

function Scene() {
  return (
    <svg className={s.scene} viewBox="20 -19 650 624" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <clipPath id="stdGround">
          <path d="M220.9 299.6L355.2 366.7L534.4 277.2L534.4 120L220.9 120Z" />
        </clipPath>
      </defs>

      {/* grondplaat */}
      <g className={s.plate}>
        <path d="M361.2 151.8L641 291.7L326.1 449.2L46.3 309.3Z" fill="#ece9f3" stroke="#d9d2e8" />
        <path d={PLATE_LINES} stroke="#ddd6ea" strokeWidth="0.5" />
      </g>

      {/* netaansluiting */}
      <g className={s.pole}>
        <path d="M337.9 161.2L361.2 172.9L361.2 190.6L337.9 179Z" fill="#5a4d86" />
        <path d="M361.2 172.9L384.5 161.2L384.5 179L361.2 190.6Z" fill="#6f6299" />
        <path d="M361.2 149.6L384.5 161.2L361.2 172.9L337.9 161.2Z" fill="#9a8fc0" />
        <path d="M361.2 161.2V142.2M349.6 140.2L372.9 151.8" stroke="#4a3d72" strokeWidth="2" />
        <path d="M349.6 138.2h0M361.2 144h0M372.9 149.8h0" stroke="#f8b949" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* pand: rijst op uit de grond */}
      <g clipPath="url(#stdGround)">
        <g className={s.building}>
          <path d="M220.9 269.1L355.2 336.3L355.2 366.7L220.9 299.6Z" fill="#5a4d86" />
          <path d="M355.2 336.3L534.4 246.7L534.4 277.2L355.2 366.7Z" fill="#7a5db8" />
          <path d="M400 179.6L534.4 246.7L355.2 336.3L220.9 269.1Z" fill="#fff" />
          <path d={DOCK_F} fill="#b3a9cc" />
          <path d={DOCK_T} fill="#cfc8e0" />
        </g>
      </g>

      {/* zon-pv op het dak */}
      <g className={s.panels}>
        {PANELS.map(([x, y], i) => (
          <path key={i} style={v({ "--i": i })} d={`M${x} ${y - 6.25}l12.5 6.25l-12.5 6.25l-12.5 -6.25z`} />
        ))}
      </g>

      {/* batterij (BESS) */}
      <g className={s.bess}>
        <path d="M162.7 252.6L191.8 267.2L191.8 279.2L162.7 264.7Z" fill="#d4a93a" />
        <path d="M191.8 267.2L209.2 258.4L209.2 270.5L191.8 279.2Z" fill="#e8bf52" />
        <path d="M180.1 243.9L209.2 258.4L191.8 267.2L162.7 252.6Z" fill="#f8b949" />
        <path d="M175.9 247.6L180.1 249.8L180.1 252L175.9 249.9ZM190.4 254.9L194.7 257L194.7 259.3L190.4 257.2Z" fill="#332a52" />
        <path d="M180.1 245.5L184.4 247.6L184.4 249.9L180.1 252L175.9 249.9L175.9 247.6ZM194.7 252.8L198.9 254.9L198.9 257.2L194.7 259.3L190.4 257.2L190.4 254.9Z" fill="#45396c" />
        <path d="M164.6 259.3L189.8 271.9L189.8 270L164.6 257.4Z" fill="#27ae60" />
      </g>

      {/* e-truck rijdt binnen */}
      <g className={s.truck}>
        <path d="M186.9 304.9L235.4 329.1L215 339.3L166.6 315.1Z" fill="#e4dff0" stroke="#b9aed6" strokeWidth="0.8" strokeDasharray="2 2" />
        <g className={s.truckBody}>
          <path d="M171.4 301.5L204.6 318.1L204.6 328.8L171.4 312.2Z" fill="#cfc8e0" />
          <path d="M204.6 318.1L218.5 311.1L218.5 321.8L204.6 328.8Z" fill="#e4dff0" />
          <path d="M185.4 294.5L218.5 311.1L204.6 318.1L171.4 301.5Z" fill="#fff" />
          <path d="M172.4 308.4L203.6 324L203.6 323L172.4 307.3Z" fill="#f8b949" />
          <path d="M208.5 325L209.6 325.6L209.6 327.7L208.5 327.1ZM209.6 325.6L215.8 322.5L215.8 324.6L209.6 327.7ZM214.7 321.9L215.8 322.5L209.6 325.6L208.5 325Z" fill="#332d4b" />
          <path d="M205.7 320.2L217 325.8L217 335.7L205.7 330.1Z" fill="#45297a" />
          <path d="M217 325.8L230.9 318.9L230.9 328.7L217 335.7Z" fill="#5a3d99" />
          <path d="M219.7 313.2L230.9 318.9L217 325.8L205.7 320.2Z" fill="#7a5db8" />
          <path d="M229.6 324.4L218.3 330L218.3 326.2L229.6 320.5ZM210 327.2L215.8 330.1L215.8 326.5L210 323.6Z" fill="#3a3358" />
          <path d="M229.6 328.2L227.5 329.2L227.5 328.3L229.6 327.3ZM220.5 332.7L218.3 333.8L218.3 332.9L220.5 331.8Z" fill="#fff3c4" />
          <path d={WHEELS} fill="#1f1b33" stroke="#4a4466" strokeWidth="0.6" />
        </g>
      </g>

      {/* zon */}
      <g className={s.sun}>
        <circle cx="489.5" cy="165.9" r="9" fill="#f8b949" />
        <path className={s.rays} d={RAYS} stroke="#f8b949" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* energiestromen */}
      <path className={`${s.flow} ${s.fSolar}`} d="M489.5 165.9L377.6 255.4" />
      <path className={`${s.flow} ${s.fGreen}`} d="M377.6 255.4V275.7" />
      <path className={`${s.flow} ${s.fPurple}`} d="M186 261.2L377.6 275.7" />
      <path className={`${s.flow} ${s.fBlue}`} d="M361.2 166.3L377.6 275.7" />

      {/* plus-hotspots */}
      <g className={`${s.add} ${s.addPv}`}>
        <circle className={s.addPulse} r="11" />
        <circle className={s.addRing} r="11" />
        <path d="M-5 0h10M0 -5v10" stroke="#d4a93a" strokeWidth="2" strokeLinecap="round" />
        <text y="23">Zon-PV</text>
      </g>
      <g className={`${s.add} ${s.addBess}`}>
        <circle className={s.addPulse} r="11" />
        <circle className={s.addRing} r="11" />
        <path d="M-5 0h10M0 -5v10" stroke="#d4a93a" strokeWidth="2" strokeLinecap="round" />
        <text y="23">BESS</text>
      </g>
    </svg>
  );
}

/**
 * Steddion: de echte Energy Property Configurator (tools.steddion.com), 1-op-1 nagebouwd.
 * Scroll: het browservenster schuift omhoog en de scène bouwt zich op (grondplaat, pand rijst op,
 * netaansluiting, zon). Fase 2 "Nieuwe e-behoefte": een e-truck rijdt binnen en het verbruiksprofiel
 * groeit 's nachts. Fase 3 "Oplossingen": de cursor vraagt de "Mogelijke oplossing van Steddion" op,
 * de modal legt de dimensionering uit, daarna tegelen de zonnepanelen op het dak, zakt de batterij
 * op z'n plek, lopen de energiestromen en tellen zelfvoorziening en vermeden CO₂ op.
 * Tot slot: account aanmaken (project bewaard) en de samenvatting "Jouw energieontwerp" met leadformulier.
 */
export function SteddionConfigurator() {
  return (
    <div className={`${s.root} ${poppins.variable}`}>
      <div className={s.stage}>
        <div className={s.win}>
          <div className={s.chrome}>
            <span className={s.url}>tools.steddion.com/configurator</span>
          </div>

          <div className={s.app}>
            {/* merkbalk */}
            <header className={s.brand}>
              <img className={s.logo} src={`${P}/logo.svg`} alt="" width={184} height={30} loading="lazy" decoding="async" />
              <span className={s.menu}>Energy Property Configurator</span>
              <span className={s.project}>Nieuw project</span>
              <span className={s.login}>Inloggen</span>
            </header>

            {/* bewaar-banner: lila → groen na account aanmaken */}
            <div className={s.banner}>
              <span>Maak een account aan om dit project automatisch te bewaren.</span>
              <span className={s.bannerBtn}>Account aanmaken</span>
              <i className={s.bannerX} />
              <p className={s.bannerOk}>Je project is bewaard in je account — wijzigingen worden vanaf nu automatisch opgeslagen.</p>
            </div>

            <div className={s.body}>
              <aside className={s.side}>
                <div className={s.phases}>
                  <i className={s.phaseOn} />
                  <span data-n="1">Mijn situatie</span>
                  <span data-n="2">Nieuwe e-behoefte</span>
                  <span data-n="3">Oplossingen</span>
                </div>

                <div className={s.slot}>
                  {/* 1 · Mijn situatie */}
                  <div className={`${s.panel} ${s.p1}`} data-intro="Breng je huidige situatie en energiebehoefte in kaart. Hieruit volgt het verbruiksprofiel — nog zonder kosten.">
                    <div className={s.section}>
                      <p className={s.sectionHead}>Verbruik &amp; teruglevering</p>
                      <p className={s.fieldLabel}>Verbruiksprofiel</p>
                      <p className={s.profile}>
                        <b>Groot distributiecentrum</b>
                        {"10.000 m² · 07:00–18:00 (11u), 5 dagen/week\nGasverwarming · gemiddelde verbruiksintensiteit\nPiek 101 kW · 360 MWh/jaar"}
                      </p>
                    </div>
                  </div>

                  {/* 2 · Nieuwe e-behoefte */}
                  <div className={`${s.panel} ${s.p2}`} data-intro="Voeg nieuwe laadbehoefte toe die er bovenop komt (bv. extra EV-trucks). Zon-PV en batterijopslag voeg je toe bij stap 3.">
                    <p className={s.subTitle}>Laadbehoefte &amp; momenten (1)</p>
                    <div className={s.need}>
                      <p className={s.needHead}>Trucks</p>
                      <p className={s.needRow} data-v="1">Aantal</p>
                      <p className={`${s.needRow} ${s.needWin}`} data-v="20u – 5u">Laadvenster</p>
                      <p className={s.track} />
                    </div>
                  </div>

                  {/* 3 · Oplossingen */}
                  <div className={`${s.panel} ${s.p3}`} data-intro="Voeg oplossingen toe voor je nieuwe behoeften. Vanaf hier rekenen we investering, besparing en terugverdientijd uit.">
                    <p className={s.suggest}>
                      <span>Mogelijke oplossing van Steddion</span>
                      <span>Mogelijke oplossing 1</span>
                    </p>
                    <div className={`${s.prov} ${s.provPv}`}>
                      <p className={s.provTitle}>Zon-PV</p>
                      <p className={s.provSub} data-on="200 kWp totaal">
                        Voeg zonnepanelen toe
                      </p>
                      <span className={s.provAdd}>Toevoegen</span>
                      <i className={s.provDel} />
                    </div>
                    <div className={`${s.prov} ${s.provBess}`}>
                      <p className={s.provTitle}>Opslag (BESS)</p>
                      <p className={s.provSub} data-on="175 kW · 350 kWh">
                        Voeg batterijopslag toe
                      </p>
                      <span className={s.provAdd}>Toevoegen</span>
                      <i className={s.provDel} />
                    </div>
                  </div>
                </div>

                {/* verwacht verbruiksprofiel: groeit, krijgt nachtladen erbij en kleurt groen met zon */}
                <div className={s.chart}>
                  <div className={s.chartHead}>
                    <p className={s.chartTitle}>Verwacht verbruiksprofiel (etmaal)</p>
                    <span className={s.season}>Zonnige zomerdag</span>
                    <span className={`${s.season} ${s.seasonOn}`}>Donkere winterdag</span>
                  </div>
                  <p className={s.select}>Gemiddelde werkdag</p>
                  <div className={s.plot}>
                    <i className={s.limit} />
                    {SIT.map((a, i) => (
                      <i key={i} className={s.bar} style={v({ "--i": i, "--a": a, "--b": NEW[i], "--g": GREEN[i] })} />
                    ))}
                  </div>
                  <p className={s.axis}>0u 6u 12u 18u 24u</p>
                  <p className={s.legend}>
                    <span>Afname van net</span>
                    <span>Tekort</span>
                    <span>200 kW levering</span>
                  </p>
                </div>
              </aside>

              <div className={s.canvas}>
                <div className={s.switches}>
                  <div className={`${s.io} ${s.ioIn}`}>
                    <p className={s.ioLabel} data-sub="IN — afname">
                      Gecontracteerd vermogen
                    </p>
                    <p className={s.ioCtrl}>
                      <b>200</b>
                    </p>
                  </div>
                  <span className={s.pand}>Pand</span>
                  <div className={`${s.io} ${s.ioOut}`}>
                    <p className={s.ioLabel} data-sub="OUT — invoeding">
                      Teruglevering
                    </p>
                    <p className={s.ioCtrl}>
                      <b>200</b>
                    </p>
                    <i className={s.ioOk} />
                  </div>
                </div>
                <Scene />
              </div>
            </div>

            {/* resultatenbalk */}
            <div className={s.bar0}>
              <i className={s.barTab} />
              <span className={s.reset}>Reset</span>
              <div className={s.metrics}>
                <div className={s.setA}>
                  <span className={s.metric} data-l="Piekvraag">
                    101 kW
                  </span>
                  <span className={s.metric} data-l="Gem. vraag">
                    54 kW
                  </span>
                  <span className={`${s.metric} ${s.mJv}`} data-l="Jaarverbruik" />
                </div>
                <div className={s.setB}>
                  <span className={`${s.metric} ${s.mZv}`} data-l="Zelfvoorziening (jaar)" />
                  <span className={`${s.metric} ${s.mCo}`} data-l="Vermeden CO₂" />
                </div>
              </div>
              <span className={s.sims} />
              <span className={s.cta}>
                <span>Naar nieuwe e-behoefte</span>
                <span>Naar oplossingen</span>
                <span>Naar samenvatting</span>
              </span>
            </div>

            <i className={s.dim} />
          </div>
        </div>

        {/* modal: Mogelijke oplossing van Steddion */}
        <div className={s.modal}>
          <p className={s.mHead}>Mogelijke oplossing van Steddion</p>
          <div className={s.mBody}>
            <p className={s.mIntro}>Deze situatie is opgeslagen bij Simulaties, zodat je &rsquo;m later kunt terugvinden of vergelijken.</p>
            <div className={s.mItem}>
              <p data-d="0 kWp → 200 kWp">Zon-PV</p>
              <p>
                We dimensioneren zon op eigen gebruik: wat je overdag opwekt, gebruik je op dat moment zelf. Om dat verbruik van april tot en met september op een gemiddelde werkdag te dekken is 200 kWp nodig.
              </p>
            </div>
            <div className={s.mItem}>
              <p data-d="0 kWh → 350 kWh (175 kW)">Batterijopslag (BESS)</p>
              <p>Op een zonnige zomerdag laad je 319 kWh uit je zonoverschot en zet je &rsquo;s avonds en &rsquo;s nachts 601 kWh nuttig in. Daarop is de batterij afgestemd: 350 kWh, 175 kW.</p>
            </div>
          </div>
          <p className={s.mFoot}>
            <span className={s.mOk}>Begrepen, verder</span>
          </p>
        </div>

        {/* account aanmaken */}
        <div className={s.acct}>
          <p className={s.aHead}>Account aanmaken</p>
          <div className={s.aBody}>
            <p className={s.aLabel}>E-mailadres</p>
            <p className={`${s.input} ${s.aMail}`} data-v="sanne@voorbeeld.nl" />
            <p className={s.aLabel}>Wachtwoord</p>
            <p className={`${s.input} ${s.aPw}`} data-v="••••••••••" />
            <p className={s.consent}>Ik ga akkoord met het privacybeleid van Steddion.</p>
            <p className={s.aBtn}>Account aanmaken</p>
            <p className={s.aOk}>Project bewaard in je account</p>
          </div>
        </div>

        {/* samenvatting: Jouw energieontwerp + leadformulier */}
        <article className={s.report}>
          <h4 className={s.rTitle}>Jouw energieontwerp</h4>
          <div className={s.rGrid}>
            <p className={s.rCard}>
              <b>Zon-PV</b>
              {"200 kWp · oost-west\n171.000 kWh/jaar"}
            </p>
            <p className={s.rCard}>
              <b>BESS</b>
              {"350 kWh\n175 kW"}
            </p>
          </div>
          <div className={s.rChart}>
            <p className={s.chartTitle}>Met oplossing</p>
            <svg viewBox="10 16 280 58" aria-hidden="true">
              <path d="M18 71.5H282" stroke="#d9d2e8" />
              <path d={MINI_P} fill="#7a5db8" />
              <path d={MINI_G} fill="#a3d9a5" />
              <path d="M18 23.7H282" stroke="#f8b949" strokeWidth="1.2" strokeDasharray="4 3" />
            </svg>
            <p className={s.rLegend}>
              <span>Afname van net</span>
              <span>Eigen zonverbruik (schatting)</span>
            </p>
          </div>
          <dl className={s.rTotals}>
            <dt>Zelfvoorziening (jaargemiddeld)</dt>
            <dd className={s.accent}>30%</dd>
            <dt>Vermeden CO₂</dt>
            <dd>68 ton/jaar</dd>
          </dl>
          <p className={s.rAsk}>Wil je een gedetailleerd advies of een concrete offerte?</p>
          <div className={s.rForm}>
            <p className={`${s.input} ${s.lead}`} data-ph="Naam *" data-v="Sanne de Vries" style={v({ "--f": 0 })} />
            <p className={`${s.input} ${s.lead}`} data-ph="Bedrijf *" data-v="Lindehof Logistiek" style={v({ "--f": 1 })} />
            <p className={`${s.input} ${s.lead}`} data-ph="E-mail *" data-v="sanne@voorbeeld.nl" style={v({ "--f": 2 })} />
            <p className={`${s.input} ${s.lead}`} data-ph="Telefoon" data-v="" style={v({ "--f": 9 })} />
          </div>
          <p className={s.send}>Verstuur configuratie</p>
          <p className={s.sent}>Bedankt! We hebben je configuratie ontvangen en nemen zo snel mogelijk contact op.</p>
        </article>

        <i className={s.cursor} />
      </div>
    </div>
  );
}
