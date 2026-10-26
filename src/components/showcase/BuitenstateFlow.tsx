import { siHubspot } from "simple-icons";
import s from "./BuitenstateFlow.module.css";

const P = "/media/showcase/buitenstate";

/* zoekers rond de woning (offset t.o.v. de woning, in cqw), van binnen naar buiten */
const SEEKERS: [number, number][] = [
  [3.3, 0.2], [2.2, 2.9], [3.4, -2.5], [-3.3, -3], [0.5, -4.7], [-3.1, 3.7], [1.3, 5.2], [-5.5, 1.1],
  [7.2, 1.3], [-3, 6.8], [3.1, -6.8], [-5.4, 6], [-7.8, -2.2], [8, -3], [-6.5, -6.3], [7.1, 5.7],
  [8.6, -6.4], [-1.8, 9.8], [-0.6, -10], [2.8, -9.4], [4.8, 8.6], [-9.6, 2.9],
];

/* lijnen in rig-coördinaten (cqw): widget → HubSpot, HubSpot → workflow → telefoon */
const WA = "M58 30 C61.6 30 60.9 17 64.5 17";
const WB = "M73 29.5 V43";

const STEPS = ["Adres", "Type woning", "Contact", "Resultaat"];

const v = (o: Record<string, string | number>) => o as React.CSSProperties;

function Logo({ className }: { className: string }) {
  return (
    <span className={className}>
      <b>
        BUITEN
        <br />
        STATE
      </b>
      <i>makelaars</i>
    </span>
  );
}

const Check = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3.5 8.4 6.6 11.4 12.5 4.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Buitenstate Zoekersmatch: de widget pakt een adres, de kaart zoomt uit,
 * de straal groeit en zoekers ploppen op terwijl de teller naar 709 rolt.
 * Daarna loopt de stap-flow door naar het resultaat, gaat de lead over de
 * lijn naar HubSpot en vuurt de workflow de Zoekersmatch-mail af,
 * die op de telefoon binnenkomt.
 */
export function BuitenstateFlow() {
  return (
    <div className={s.root}>
      <div className={s.topo} aria-hidden="true" />
      <div className={s.rig}>
        <div className={s.glow} aria-hidden="true" />

        {/* verbindingen widget → CRM → mail */}
        <svg className={s.wires} viewBox="0 0 100 85" preserveAspectRatio="none" aria-hidden="true">
          <path className={`${s.wire} ${s.wA}`} pathLength={1} d={WA} />
          <path className={`${s.pulse} ${s.wA}`} pathLength={1} d={WA} />
          <path className={`${s.wire} ${s.wB}`} pathLength={1} d={WB} />
          <path className={`${s.pulse} ${s.wB}`} pathLength={1} d={WB} />
          <circle className={`${s.node} ${s.wA}`} cx="58" cy="30" r="0.7" />
          <circle className={`${s.node} ${s.wA}`} cx="64.5" cy="17" r="0.7" />
          <circle className={`${s.node} ${s.wB}`} cx="73" cy="29.5" r="0.7" />
        </svg>

        {/* ---------- Widget ---------- */}
        <span className={s.url}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4.5 7V5.2a3.5 3.5 0 0 1 7 0V7M3.5 7h9v6.5h-9z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          buitenstate.nl<em>/zoekers/zoekers-voor-mijn-woning</em>
        </span>
        <div className={s.widget}>
          <div className={s.wHead}>
            <Logo className={s.logo} />
            <div className={s.wTitle}>
              <b>Zoekersmatch</b>
              <span>Hoeveel kopers zoeken een woning zoals de jouwe?</span>
            </div>
            <span className={s.free}>Gratis · 1 min</span>
          </div>

          <div className={s.map}>
            <img className={s.mapImg} src={`${P}/map.svg`} alt="" loading="lazy" decoding="async" />
            <div className={s.radius}>
              <span className={s.ping} />
              <span className={s.km}>65 km</span>
            </div>
            {SEEKERS.map(([x, y], n) => (
              <span key={n} className={s.dot} style={v({ "--x": x, "--y": y, "--n": n })} />
            ))}
            <span className={s.pin}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.5 11.2 12 5l7.5 6.2V19a1 1 0 0 1-1 1h-4v-5h-5v5h-4a1 1 0 0 1-1-1z" fill="currentColor" />
              </svg>
            </span>
            <div className={s.count}>
              <span className={s.num} aria-hidden="true" />
              <b>actieve zoekers</b>
              <small>binnen 65 km · Nistelrode</small>
            </div>
          </div>

          <ol className={s.steps}>
            {STEPS.map((t, i) => (
              <li key={t} style={v({ "--i": i })}>
                <span className={s.bullet}>
                  <em>{i + 1}</em>
                  <Check />
                </span>
                {t}
              </li>
            ))}
          </ol>

          <div className={s.panes}>
            <div className={s.paneTrack}>
              <div className={s.pane}>
                <p className={s.q}>Wat is het adres van je woning?</p>
                <div className={s.field}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="10" r="2.2" fill="currentColor" />
                  </svg>
                  <span className={s.typed}>Heideweg 12, Nistelrode</span>
                  <span className={s.caret} />
                </div>
                <span className={s.btn}>Volgende</span>
              </div>
              <div className={s.pane}>
                <p className={s.q}>Wat voor woning heb je?</p>
                <div className={s.chips}>
                  <span className={s.on}>
                    <Check />
                    Woonboerderij
                  </span>
                  <span>Landhuis</span>
                  <span>Vrijstaand</span>
                  <span>Villa</span>
                </div>
                <span className={s.btn}>Volgende</span>
              </div>
              <div className={s.pane}>
                <p className={s.q}>Waar sturen we je overzicht naartoe?</p>
                <div className={s.duo}>
                  <span className={s.field}>Sanne de Vries</span>
                  <span className={s.field}>sanne@voorbeeld.nl</span>
                </div>
                <span className={s.btn}>Toon mijn zoekers</span>
              </div>
              <div className={`${s.pane} ${s.done}`}>
                <span className={s.ok}>
                  <Check />
                </span>
                <p>
                  <b>Je overzicht is onderweg</b>
                  Een makelaar uit de regio neemt vrijblijvend contact met je op.
                </p>
              </div>
            </div>
          </div>
          <p className={s.note}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4.5 7V5.2a3.5 3.5 0 0 1 7 0V7M3.5 7h9v6.5h-9z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            Je gegevens gaan alleen naar één makelaar in jouw regio.
          </p>
        </div>

        {/* ---------- CRM ---------- */}
        <div className={s.crm}>
          <div className={s.cHead}>
            <svg className={s.hs} viewBox="0 0 24 24" aria-hidden="true">
              <path d={siHubspot.path} fill="currentColor" />
            </svg>
            <b>HubSpot</b>
            <span>Contacten</span>
            <em className={s.newLead}>Nieuwe lead</em>
          </div>
          <div className={s.person}>
            <span className={s.avatar}>SV</span>
            <span>
              <b>Sanne de Vries</b>
              sanne@voorbeeld.nl · Nistelrode
            </span>
          </div>
          <dl className={s.props}>
            <div style={v({ "--n": 0 })}>
              <dt>Bron</dt>
              <dd>Zoekersmatch</dd>
            </div>
            <div style={v({ "--n": 1 })}>
              <dt>Lifecycle-fase</dt>
              <dd>
                <span className={s.tag}>Lead</span>
              </dd>
            </div>
            <div style={v({ "--n": 2 })}>
              <dt>Makelaar</dt>
              <dd>De Hoeve Makelaars</dd>
            </div>
            <div style={v({ "--n": 3 })}>
              <dt>Zoekers (65 km)</dt>
              <dd>709</dd>
            </div>
          </dl>
        </div>

        {/* ---------- Workflow ---------- */}
        <div className={s.flow}>
          <span className={s.bolt}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z" fill="currentColor" />
            </svg>
          </span>
          <span>
            <small>Workflow</small>
            Zoekersmatch-mail
          </span>
          <em className={s.sent}>
            <Check />
            verstuurd
          </em>
        </div>

        {/* ---------- Telefoon met de mail ---------- */}
        <div className={s.phone}>
          <div className={s.screen}>
            <span className={s.island} />
            <div className={s.status}>
              <b>9:41</b>
              <span className={s.bars} />
            </div>
            <div className={s.inbox}>
              <span className={s.from}>
                <span className={s.logoXs}>B</span>
                <span>
                  <b>Buitenstate</b>
                  Jouw Zoekersmatch: 709 zoekers
                </span>
              </span>
              <small>nu</small>
            </div>
            <div className={s.mail}>
              <div className={s.mHead}>
                <Logo className={s.logoMail} />
              </div>
              <div className={s.mBody}>
                <h4>Beste Sanne,</h4>
                <p>
                  Bedankt voor je aanvraag via de <b>Buitenstate Zoekersmatch</b>. Hieronder vind je een overzicht van wat je hebt ingevuld en wat je zag.
                </p>
                <div className={s.box}>
                  <small>Actieve zoekers rondom Nistelrode</small>
                  <strong>709</strong>
                  <span>binnen een straal van 65 km van jouw woning</span>
                </div>
                <small className={s.lbl}>Jouw gegevens</small>
                <dl className={s.rows}>
                  <dt>Naam</dt>
                  <dd>Sanne de Vries</dd>
                  <dt>E-mail</dt>
                  <dd className={s.link}>sanne@voorbeeld.nl</dd>
                  <dt>Adres</dt>
                  <dd>Heideweg 12, Nistelrode</dd>
                  <dt>Jouw makelaar</dt>
                  <dd className={s.mk}>De Hoeve Makelaars</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
