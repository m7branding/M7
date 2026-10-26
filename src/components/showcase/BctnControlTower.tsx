import s from "./BctnControlTower.module.css";

type V = Record<string, string | number>;
const v = (o: V) => o as React.CSSProperties;

const SOURCES = [
  { n: "ERP", t: "gesynchroniseerd 2 min geleden", i: "erp", at: 0.1 },
  { n: "Mailbox", t: "1.284 e-mails geanalyseerd", i: "mail", at: 0.15 },
  { n: "Terminal-data", t: "6 terminals live", i: "term", at: 0.2 },
];

const KPIS = [
  { l: "Open alerts", to: 14, d: "+3 sinds 08:00", c: "red" },
  { l: "Deadlines vandaag", to: 5, d: "2 retour · 3 levering", c: "amber" },
  { l: "Ontbrekende referenties", to: 7, d: "uit 41 boekingen", c: "blue" },
];

/* containerlijst; `fix` = moment waarop de AI-taak is afgehandeld */
const ROWS = [
  { id: "MSKU 482193-0", ty: "40' HC", k: "Van Dijk Foods", t: "Nijmegen", a: "Retourdeadline over 2 dagen", c: "amber", fix: 0.79, ok: "Retour ingepland" },
  { id: "TGHU 730551-8", ty: "20' DV", k: "Brouwer Textiel", t: "Den Bosch", a: "Referentie ontbreekt", c: "amber" },
  { id: "HLXU 248807-2", ty: "40' DV", k: "Kempen Bouwstoffen", t: "Veghel", a: "Schade gemeld + foto", c: "red", photo: true },
  { id: "CMAU 615402-9", ty: "40' HC", k: "Noordhaven Trading", t: "Alblasserdam", a: "Zegelnummer ontbreekt", c: "amber" },
  { id: "MSCU 903316-7", ty: "45' HC", k: "De Lage Velden", t: "Nijmegen", a: "Demurrage-risico", c: "red", fix: 0.73, ok: "Klant geïnformeerd" },
  { id: "OOLU 157624-0", ty: "20' RF", k: "Maaskant Retail", t: "Den Bosch", a: "Gereed voor levering", c: "ok" },
  { id: "BMOU 556201-8", ty: "20' DV", k: "Noordhaven Trading", t: "Veghel", a: "Douane in behandeling", c: "blue" },
  { id: "TCNU 384410-3", ty: "40' HC", k: "Van Dijk Foods", t: "Alblasserdam", a: "Klaar voor transport", c: "ok" },
];

/* AI-taken: verschijnen in volgorde van ontdekking (from) en sorteren zich daarna in vier stappen
   op prioriteit (d = verschuiving per stap, j = taak die in die stap "opgetild" omhoog springt):
   [C A D B E] → [A C D B E] → [A E C D B] → [A E B C D] → [A E B D C] */
const TASKS = [
  { t: "Schade HLXU 248807-2 afhandelen", src: "E-mail 09:12", m: "Kempen Bouwstoffen · foto bijgevoegd", c: "red", from: 1, d: [-1, 0, 0, 0], at: 0.4, draft: true },
  { t: "Demurrage-risico MSCU 903316-7", src: "ERP", m: "vrije dagen verlopen morgen", c: "red", from: 4, d: [0, -3, 0, 0], j: 2, at: 0.52, done: 0.72 },
  { t: "Retour MSKU 482193-0 inplannen", src: "ERP", m: "retourdeadline do 29 okt", c: "amber", from: 3, d: [0, 1, -2, 0], j: 3, at: 0.48, done: 0.78 },
  { t: "Zegelnummer CMAU 615402-9 aanvullen", src: "Terminal-data", m: "Alblasserdam · gate-in 07:58", c: "amber", from: 2, d: [0, 1, 1, -1], at: 0.44 },
  { t: "Referentie Brouwer Textiel opvragen", src: "E-mail 08:47", m: "PO-nummer ontbreekt in boeking", c: "amber", from: 0, d: [1, 1, 1, 1], at: 0.36 },
];

/* antwoord per regel, zodat het regel voor regel kan "typen" */
const MAIL = [
  "Beste Mark,",
  "Dank voor je melding en de foto's. De schade aan HLXU 248807-2",
  "is vastgelegd bij gate-in in Veghel; de inspectie staat gepland",
  "op dinsdag 27 oktober om 10:00. Het inspectierapport met de",
  "vervolgstappen voor de claim ontvang je uiterlijk donderdag.",
  "Met vriendelijke groet,",
  "Lotte · Customer Service BCTN",
];

function SrcIcon({ i }: { i: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {i === "erp" && <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />}
      {i === "mail" && <path d="M3.5 6h17v12h-17zM3.5 6.5l8.5 6.5 8.5-6.5" />}
      {i === "term" && <path d="M3 20h18M5 20V9h6v11M13 20v-6h6v6M8 9V4h9l2 3M17 4v10" />}
    </svg>
  );
}

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 2.5l1.9 5.6 5.6 1.9-5.6 1.9L11 17.5l-1.9-5.6L3.5 10l5.6-1.9zM18.5 14.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z" />
    </svg>
  );
}

/**
 * BCTN: AI Customer Service Control Tower.
 * Scroll: het donkere dashboard kantelt binnen, ERP / mailbox / terminal-data
 * synchroniseren, een AI-scanlijn loopt door de containerlijst en zet alerts
 * (retourdeadline, referentie, zegel, schade, demurrage). Rechts verschijnen
 * AI-taken met hun bron, ze sorteren zich op prioriteit en worden afgevinkt.
 * Tot slot schuift een door AI opgesteld antwoord naar voren dat zichzelf typt.
 */
export function BctnControlTower() {
  return (
    <div className={s.root}>
      <div className={s.radar} aria-hidden="true">
        <i />
      </div>

      <div className={s.win}>
        <nav className={s.rail} aria-hidden="true">
          <span className={s.railLogo} />
          <svg viewBox="0 0 24 120">
            <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6zM4 33h16v10H4zM8 33v10M12 33v10M16 33v10M8.5 63a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M5 73c1-3.5 4-5 7-5s6 1.5 7 5M4 87h16v12H4zM4 87.5l8 6 8-6M5 123V111M10 123v-8M15 123v-12M20 123v-5" />
          </svg>
        </nav>

        <header className={s.head}>
          <span className={s.logo}>BCTN</span>
          <h3>Customer Service Control Tower</h3>
          <span className={s.ai}>
            <Sparkle />
            AI
          </span>
          <span className={s.now}>Ma 26 okt · 09:41</span>
          <span className={s.avatar}>LK</span>
        </header>

        <div className={s.sources}>
          <span className={s.srcLabel}>Bronnen</span>
          {SOURCES.map((x) => (
            <span key={x.n} className={s.src} style={v({ "--at": x.at })}>
              <SrcIcon i={x.i} />
              <b>{x.n}</b>
              <i />
              {x.t}
            </span>
          ))}
        </div>

        <div className={s.main}>
          <ul className={s.kpis}>
            {KPIS.map((k, n) => (
              <li key={k.l} className={s[k.c]} style={v({ "--n": n, "--to": k.to })}>
                <span>{k.l}</span>
                <b />
                <small>{k.d}</small>
              </li>
            ))}
          </ul>

          <div className={s.tools}>
            <span className={s.tabOn}>Alle 38</span>
            <span>Alerts</span>
            <span>Deadlines</span>
            <span>Referenties</span>
            <span className={s.search}>Zoek container, klant of referentie</span>
          </div>

          <div className={s.table}>
            <p className={s.th}>
              <span>Container</span>
              <span>Klant</span>
              <span>Terminal</span>
              <span>Signaal</span>
            </p>
            <ol className={s.rows}>
              {ROWS.map((r, n) => (
                <li key={r.id} className={s[r.c]} style={v({ "--n": n, "--fix": r.fix ?? 9 })}>
                  <b>
                    {r.id}
                    <small>{r.ty}</small>
                  </b>
                  <span>{r.k}</span>
                  <span>{r.t}</span>
                  <em className={s.tag}>
                    {r.a}
                    {r.photo && <i className={s.photo} />}
                  </em>
                  {r.ok && <em className={`${s.tag} ${s.fixed}`}>{r.ok}</em>}
                </li>
              ))}
            </ol>
            <span className={s.scan} aria-hidden="true" />
          </div>
        </div>

        <aside className={s.panel}>
          <div className={s.pHead}>
            <span className={s.pIcon}>
              <Sparkle />
            </span>
            <p>
              <b>AI to-do&apos;s</b>
              Customer service · vandaag
            </p>
            <span className={s.state}>
              <em>Analyseren…</em>
              <em>Geprioriteerd</em>
            </span>
          </div>
          <ol className={s.tasks}>
            {TASKS.map((t, n) => (
              <li
                key={t.t}
                className={`${s[t.c]} ${t.draft ? s.isDraft : ""}`}
                style={v({
                  "--from": t.from,
                  "--d1": t.d[0],
                  "--d2": t.d[1],
                  "--d3": t.d[2],
                  "--d4": t.d[3],
                  "--j2": t.j === 2 ? 1 : 0,
                  "--j3": t.j === 3 ? 1 : 0,
                  "--u": t.from === 0 ? 1 : 0,
                  "--at": t.at,
                  "--done": t.done ?? 9,
                  zIndex: t.j ? 9 : 5 - n,
                })}
              >
                <i className={s.check} />
                <b>{t.t}</b>
                <p>
                  <span className={s.via}>{t.src}</span>
                  {t.m}
                </p>
                <em className={s.rank}>{n + 1}</em>
                {t.draft && <span className={s.draftTag}>Concept klaar</span>}
              </li>
            ))}
          </ol>
          <div className={s.summary}>
            <p className={s.sumHead}>
              <Sparkle />
              AI-samenvatting
            </p>
            <p>
              3 containers lopen risico op extra kosten, 2 klanten wachten op antwoord. Grootste impact: demurrage MSCU 903316-7.
            </p>
            <small>Op basis van 1.284 e-mails · 312 ERP-orders · 6 terminals</small>
          </div>
        </aside>
      </div>

      {/* door AI opgesteld antwoord */}
      <article className={s.mail}>
        <div className={s.mBar}>
          <span className={s.mAi}>
            <Sparkle />
            AI-concept
          </span>
          <p>
            <b>Concept klaar</b> · controleer en verstuur
          </p>
          <span className={s.mEdit}>Bewerken</span>
          <span className={s.mSend}>Versturen</span>
        </div>
        <dl className={s.mMeta}>
          <dt>Aan</dt>
          <dd>m.jansen@voorbeeld.nl</dd>
          <dt>Onderwerp</dt>
          <dd>Re: Schade container HLXU 248807-2</dd>
        </dl>
        <p className={s.mSrc}>
          Bronnen
          <span>E-mail 09:12</span>
          <span>ERP-order 4471182</span>
          <span>Terminal Veghel</span>
        </p>
        <div className={s.mBody}>
          {MAIL.map((l, n) => (
            <p key={n} style={v({ "--l": n })}>
              <span>{l}</span>
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
