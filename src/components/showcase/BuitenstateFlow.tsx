import s from "./BuitenstateFlow.module.css";

const P = "/media/showcase/buitenstate";

const v = (o: Record<string, string | number>) => o as React.CSSProperties;

const STEPS = ["Provincie", "Zoekers", "Gegevens", "Resultaat"];

/* kaart met losse provincies (id per provincie) */
const MAP = `${P}/nl-provinces.svg`;
/* provincies waar de cursor overheen glijdt, in volgorde (klasse = eigen hover-timing) */
const HOVER: [string, string][] = [
  ["groningen", "gr"],
  ["drenthe", "dr"],
  ["overijssel", "ov"],
  ["gelderland", "ge"],
  ["noord-brabant", "nb"],
];

/* stap 3: label, placeholder (zoals op de site), ingevulde (fictieve) waarde, breedte in em, wide = hele rij */
const FIELDS: [string, string, string, number, boolean][] = [
  ["Voornaam", "Jan", "Sanne", 3.2, false],
  ["Achternaam", "Jansen", "de Vries", 4.4, false],
  ["E-mailadres", "jan@example.nl", "sanne@voorbeeld.nl", 9.6, true],
  ["Telefoonnummer", "06 12 34 56 78", "06 23 45 67 89", 7.6, true],
  ["Adres", "Kerkstraat 14", "Eikenlaan 7", 5.6, true],
  ["Postcode", "6841 AB", "5261 AB", 4.4, false],
  ["Woonplaats", "Arnhem", "Vught", 2.9, false],
];

const Pin = () => (
  <svg className={s.pinIco} viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 15.2s-4.6-4.7-4.6-8.4a4.6 4.6 0 0 1 9.2 0c0 3.7-4.6 8.4-4.6 8.4z" fill="#e0453a" />
    <circle cx="8" cy="6.6" r="1.7" fill="#fff" fillOpacity=".75" />
  </svg>
);

/**
 * Buitenstate Zoekersmatch, 1-op-1 naar de echte widget (buitenstate.nl/zoekers).
 * Opent op de interactieve provinciekaart: de cursor glijdt van Groningen naar het
 * zuiden, de provincies lichten één voor één op (hover) en Noord-Brabant wordt
 * gekozen. Dan zoomt de camera rustig uit en verschijnt de widget rond de kaart:
 * 1.447 zoekers in Noord-Brabant → gegevens invullen → zoekers rond het adres
 * binnen 50 km. De klik op "Vraag gratis waardebepaling aan" schiet als lead het
 * CRM in en de automatisering stuurt de bevestigingsmail met het aantal zoekers.
 */
export function BuitenstateFlow() {
  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />

      <div className={s.rig}>
      {/* ---------- De echte widget (camera: eerst ingezoomd op de kaart) ---------- */}
      <div className={s.cam}>
      <div className={s.widget}>
        <div className={s.head}>
          <img className={s.logo} src={`${P}/logo.svg`} alt="" loading="lazy" decoding="async" />
          <div>
            <b>Wie zoekt jouw landelijke woning?</b>
            <span>Buitenstate Zoekersmatch</span>
          </div>
        </div>

        <ol className={s.prog}>
          {STEPS.map((t, i) => (
            <li key={t}>
              <span className={s.circ}>{i + 1}</span>
              {t}
            </li>
          ))}
        </ol>

        <div className={s.body}>
          {/* stap 1: provincie */}
          <section className={`${s.panel} ${s.p1}`}>
            <b className={s.title}>Selecteer jouw provincie</b>
            <p className={s.sub}>Klik op de provincie waar jouw landelijke woning staat</p>
            <div className={s.map}>
              <img src={MAP} alt="" loading="lazy" decoding="async" />
              {/* hover-laag: dezelfde provincievormen (uit nl-provinces.svg), kleur per provincie via --sp */}
              <svg className={s.hl} viewBox="0 0 286 337" aria-hidden="true">
                {HOVER.map(([id, cls]) => (
                  <use key={id} href={`${MAP}#${id}`} className={`${s.pv} ${s[cls]}`} />
                ))}
              </svg>
              {/* labels boven de hover-laag (als beeld: svg-tekst in een geschaalde laag rendert onbetrouwbaar) */}
              <img className={s.lbls} src={`${P}/nl-labels.svg`} alt="" loading="lazy" decoding="async" />
              <img className={s.lblSel} src={`${P}/nl-label-brabant.svg`} alt="" loading="lazy" decoding="async" />
            </div>
            <div className={s.badgeRow}>
              <span className={s.badge}>Noord-Brabant</span>
            </div>
            <span className={`${s.btn} ${s.next}`}>Volgende stap →</span>
          </section>

          {/* stap 2: zoekers in de provincie */}
          <section className={`${s.panel} ${s.p2}`}>
            <b className={s.title}>Zo veel kopers zoeken al in jouw provincie</b>
            <p className={s.sub}>
              Dit is het aantal actieve zoekers in jouw provincie. Wil je weten hoeveel kopers er specifiek rondom jóuw woning zoeken? Vul straks je adres in.
            </p>
            <div className={s.hero}>
              <span className={s.eyebrow}>Actieve zoekers in</span>
              <b className={s.prov}>Noord-Brabant</b>
              <span className={`${s.count} ${s.c1}`} />
              <span className={s.heroSub}>
                potentiële kopers zoeken actief naar
                <br />
                een landelijke woning in deze provincie
              </span>
            </div>
            <p className={s.blurb}>
              In <strong>Noord-Brabant</strong> zijn op dit moment <strong>1.447 actieve zoekers</strong> op zoek naar een landelijke woning. Benieuwd hoeveel kopers er specifiek
              rondom <em>jouw</em> woning zoeken? Vul je gegevens in — we tonen direct de zoekers binnen een instelbare straal van jouw adres, plus de makelaar die jou het beste kan
              helpen.
            </p>
            <div className={s.row}>
              <span className={s.back}>← Terug</span>
              <span className={`${s.btn} ${s.go2}`}>Zoekers rond mijn adres bekijken →</span>
            </div>
          </section>

          {/* stap 3: gegevens */}
          <section className={`${s.panel} ${s.p3}`}>
            <b className={s.title}>Verfijn naar jouw adres</b>
            <p className={s.sub}>Vul je gegevens in — we tonen direct hoeveel zoekers er rondom jouw woning actief zijn én welke makelaar jou het beste kan helpen.</p>
            <div className={s.form}>
              {FIELDS.map(([label, ph, val, w, wide], i) => (
                <label key={label} className={wide ? s.wide : undefined} data-split={i === 4 ? "" : undefined}>
                  {label}
                  <span className={s.inp} data-ph={ph} style={v({ "--t": (0.574 + i * 0.0085).toFixed(4), "--w": `${w}em` })}>
                    <span className={s.typed}>{val}</span>
                  </span>
                </label>
              ))}
            </div>
            <div className={s.row}>
              <span className={s.back}>← Terug</span>
              <span className={`${s.btn} ${s.go3}`}>Zoekers rond mijn adres tonen →</span>
            </div>
          </section>

          {/* stap 4: resultaat rond het adres */}
          <section className={`${s.panel} ${s.p4}`}>
            <b className={s.title}>Zoekers rondom jouw woning</b>
            <p className={s.sub}>Dit zijn de actieve zoekers in de buurt van jouw adres. Stel hieronder zelf de straal in en ontdek wie er naar een woning zoals die van jou zoekt.</p>
            <div className={s.hero}>
              <span className={s.eyebrow}>Actieve zoekers rond</span>
              <b className={s.prov}>Vught</b>
              <span className={`${s.count} ${s.c2}`} />
              <span className={s.heroSub}>
                potentiële kopers zoeken actief naar
                <br />
                een landelijke woning
              </span>
            </div>
            <p className={s.blurb}>
              In jouw regio hebben wij op dit moment <strong>570 actieve zoekers</strong> in de Buitenstate database op zoek naar een landelijke woning rond <strong>Vught</strong>.
              Kom in contact met <strong>Buitenstate Makelaars</strong> en ontdek kosteloos wat jouw landelijke woning waard is voor deze mogelijke kopers!
            </p>
            <div className={s.radius}>
              <div className={s.rHead}>
                <span>
                  <Pin />
                  Zoekers binnen straal van jouw adres
                </span>
                <em>50 km</em>
              </div>
              <span className={s.slider} />
              <p className={s.rRes}>
                <b>570</b> actieve zoekers met een zoekopdracht binnen deze straal van jouw woning
                <small>Zoekers zoeken o.a. in: Breda (56), Eindhoven (23), Helmond (23), &apos;s-Hertogenbosch (20), Tilburg (18) +194 meer</small>
              </p>
            </div>
            <span className={s.cta}>Vraag gratis waardebepaling aan →</span>
            <div className={s.broker}>
              <span className={s.bAv}>
                <img src={`${P}/logo.svg`} alt="" loading="lazy" decoding="async" />
              </span>
              <span>
                <b>Buitenstate Makelaars</b>
                Regio Noord-Brabant
                <i>
                  <Pin />
                  Vught · ±4 km
                </i>
              </span>
            </div>
            <div className={s.row}>
              <span className={s.back}>← Terug</span>
            </div>
          </section>
        </div>

        <span className={s.cursor} aria-hidden="true">
          <svg viewBox="0 0 20 24">
            <path d="M2 1.5v17.2l4.3-4.1 3 6.6 3.1-1.4-3-6.4h6z" />
          </svg>
        </span>
      </div>
      </div>

      {/* ---------- Verbindingen ---------- */}
      <span className={`${s.wire} ${s.w1}`} aria-hidden="true">
        <i />
      </span>
      <span className={`${s.wire} ${s.w2}`} aria-hidden="true">
        <i />
      </span>

      {/* ---------- CRM ---------- */}
      <div className={s.crm}>
        <div className={s.cBar}>
          <img src={`${P}/logo.svg`} alt="" loading="lazy" decoding="async" />
          <b>CRM</b>
          <span>Aanvragen · Waardebepaling</span>
          <em>1 nieuw</em>
        </div>
        <div className={s.fresh}>
          <div className={s.lead}>
            <span className={s.av}>SV</span>
            <span className={s.who}>
              <b>Sanne de Vries</b>
              Eikenlaan 7, 5261 AB Vught
            </span>
            <span className={s.stamp}>
              <em>Nieuw</em>
              zojuist
            </span>
          </div>
          <dl className={s.facts}>
            <div>
              <dt>Bron</dt>
              <dd>Zoekersmatch</dd>
            </div>
            <div>
              <dt>Provincie</dt>
              <dd>Noord-Brabant</dd>
            </div>
            <div>
              <dt>Straal</dt>
              <dd>50 km</dd>
            </div>
            <div>
              <dt>Zoekers getoond</dt>
              <dd>570</dd>
            </div>
          </dl>
          <ol className={s.pipe}>
            <li>Nieuw</li>
            <li>Contact</li>
            <li>Taxatie</li>
            <li>Opdracht</li>
          </ol>
        </div>
        <div className={s.olds}>
          <div className={s.old}>
            <span className={s.av}>MB</span>
            <span className={s.who}>
              <b>Mark Bakker</b>
              Boxtel · Waardebepaling
            </span>
            <small>gisteren</small>
          </div>
          <div className={s.old}>
            <span className={s.av}>LV</span>
            <span className={s.who}>
              <b>Lotte Verbeek</b>
              Oisterwijk · Zoekersmatch
            </span>
            <small>ma 14:20</small>
          </div>
          <div className={s.old}>
            <span className={s.av}>JH</span>
            <span className={s.who}>
              <b>Joost Hendriks</b>
              Haaren · Waardebepaling
            </span>
            <small>vr 09:12</small>
          </div>
        </div>
      </div>

      {/* ---------- Automatisering ---------- */}
      <span className={s.chip}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" />
        </svg>
        Bevestigingsmail
        <em>verstuurd</em>
      </span>

      {/* ---------- E-mail ---------- */}
      <div className={s.mail}>
        <div className={s.mTop}>
          <img src={`${P}/logo.svg`} alt="" loading="lazy" decoding="async" />
          <span>
            <b>Buitenstate Makelaars</b>
            aan sanne@voorbeeld.nl
          </span>
          <small>nu</small>
        </div>
        <b className={s.subject}>Er zoeken 570 kopers rond jouw woning</b>
        <div className={s.mBody}>
          <div className={s.mCard}>
            <div className={s.mHead}>
              <img src={`${P}/logo.svg`} alt="" loading="lazy" decoding="async" />
              <span>
                <b>Bedankt voor je aanvraag</b>
                Buitenstate Zoekersmatch
              </span>
            </div>
            <b className={s.hi}>Beste Sanne,</b>
            <p>Je aanvraag voor een gratis waardebepaling is ontvangen. Dit zag je in de Zoekersmatch:</p>
            <div className={s.mHero}>
              <span>Actieve zoekers rond Vught</span>
              <strong>570</strong>
              <span>binnen 50 km van Eikenlaan 7</span>
            </div>
            <p>
              <b>Buitenstate Makelaars</b> neemt vrijblijvend contact met je op.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
