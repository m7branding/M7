import { siClaude, siGoogle, siGooglegemini, siOpenai } from "simple-icons";
import s from "./SandtAnswers.module.css";

const v = (o: Record<string, string | number>) => o as React.CSSProperties;

/* Bing staat niet in simple-icons: eenvoudig gestileerd "b"-merkje */
const BING = "M6 2.6 10.2 4v11.6l5-2.9-2.5-1.2-1.5-3.8 7.8 2.7v4.1L10.2 21.4 6 19z";

const ENGINES = [
  { k: "gpt", name: "ChatGPT", d: siOpenai.path, x: 17.5, y: 42.5, z: 7.8, depth: 1.1 },
  { k: "google", name: "Google", d: siGoogle.path, x: 89.5, y: 3.4, z: 6.6, depth: 0.6 },
  { k: "gemini", name: "Gemini", d: siGooglegemini.path, x: 92, y: 16.5, z: 5.8, depth: 0.9 },
  { k: "claude", name: "Claude", d: siClaude.path, x: 6, y: 52, z: 7, depth: 1.4 },
  { k: "bing", name: "Bing", d: BING, x: 11, y: 60, z: 6, depth: 1.8 },
];

const Sandt = () => <span className={s.emblem}>S</span>;

/**
 * The Sandt in AI-antwoorden: de vraag wordt getypt, Google bouwt een
 * AI-overzicht op (skelet → antwoord) waarin The Sandt als bron oplicht,
 * daarna schuift een ChatGPT-antwoord ervoor dat thesandt.com citeert.
 * Rondom zweven de AI-engines met een zachte parallax; na het vastzetten
 * drijft de camera rustig door tot het eind.
 */
export function SandtAnswers() {
  return (
    <div className={s.root}>
      <div className={s.sea} aria-hidden="true" />
      <div className={s.rig}>
        {/* ---------- Zoekbalk ---------- */}
        <div className={s.search}>
          <svg className={s.g} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <clipPath id="sandt-g">
                <path d={siGoogle.path} />
              </clipPath>
            </defs>
            <g clipPath="url(#sandt-g)">
              <rect width="24" height="24" fill="#4285f4" />
              <path d="M12 12-16.2 1.7V-20h56.4v21.7z" fill="#ea4335" />
              <path d="M12 12-16.2 1.7v20.6z" fill="#fbbc05" />
              <path d="M12 12l21.2 21.2V40h-49.4V22.3z" fill="#34a853" />
            </g>
          </svg>
          <span className={s.query}>
            <span className={s.typed}>Hoe investeer ik in vastgoed in het Caribisch gebied?</span>
            <span className={s.caret} />
          </span>
          <span className={s.mode}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={siGooglegemini.path} fill="currentColor" />
            </svg>
            AI-modus
          </span>
        </div>

        {/* ---------- Google AI-overzicht ---------- */}
        <div className={s.overview}>
          <div className={s.ovHead}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <defs>
                <linearGradient id="sandt-spark" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#4f8df5" />
                  <stop offset=".55" stopColor="#9b72cb" />
                  <stop offset="1" stopColor="#d96570" />
                </linearGradient>
              </defs>
              <path d={siGooglegemini.path} fill="url(#sandt-spark)" />
            </svg>
            AI-overzicht
          </div>
          <div className={s.answer}>
            <div className={s.skeleton} aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className={s.shot}>
              <img src="/media/showcase/thesandt/ai-answer.webp" width={1420} height={668} alt="" loading="lazy" decoding="async" />
              <span className={`${s.mark} ${s.mark1}`} />
              <span className={`${s.mark} ${s.mark2}`} />
              <span className={s.ring} />
              <span className={s.source}>
                <Sandt />
                Bron: The Sandt
              </span>
            </div>
          </div>
        </div>

        {/* ---------- ChatGPT ---------- */}
        <div className={s.chat}>
          <div className={s.chHead}>
            ChatGPT
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="m4.5 6.5 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className={s.ask}>Hoe investeer ik in vastgoed in het Caribisch gebied?</p>
          <div className={s.reply}>
            <p>Er zijn grofweg drie routes, elk met een eigen risicoprofiel:</p>
            <ol>
              <li>
                <b>Vastgoedobligaties</b>: via aanbieders als The Sandt beleg je in Caribische projecten zoals The Diamond House.{" "}
                <span className={`${s.cite} ${s.citeOn}`}>
                  <Sandt />
                  thesandt.com
                </span>
              </li>
              <li>
                <b>Zelf kopen</b>: een appartement of villa als verhuur- of vakantiewoning, bijvoorbeeld op Curaçao.{" "}
                <span className={s.cite}>
                  2
                </span>
              </li>
              <li>
                <b>Spreiden</b>: lees altijd het informatiememorandum en beleg niet meer dan je kunt missen.{" "}
                <span className={s.cite}>thesandt.com +1</span>
              </li>
            </ol>
            <span className={s.sources}>
              <span className={s.favs}>
                <Sandt />
                <i />
              </span>
              Bronnen
            </span>
          </div>
        </div>

        {/* ---------- Zwevende AI-engines ---------- */}
        {ENGINES.map((e, n) => (
          <span
            key={e.k}
            className={`${s.engine} ${s[e.k]}`}
            style={v({ "--x": e.x, "--y": e.y, "--z": e.z, "--depth": e.depth, "--n": n })}
            data-engine={e.name}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {e.k === "gemini" ? (
                <>
                  <defs>
                    <linearGradient id="sandt-gem" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#4f8df5" />
                      <stop offset=".55" stopColor="#9b72cb" />
                      <stop offset="1" stopColor="#d96570" />
                    </linearGradient>
                  </defs>
                  <path d={e.d} fill="url(#sandt-gem)" />
                </>
              ) : e.k === "bing" ? (
                <>
                  <defs>
                    <linearGradient id="sandt-bing" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#37c6d0" />
                      <stop offset="1" stopColor="#2a72e0" />
                    </linearGradient>
                  </defs>
                  <path d={e.d} fill="url(#sandt-bing)" />
                </>
              ) : (
                <path d={e.d} fill="currentColor" />
              )}
            </svg>
          </span>
        ))}

        <div className={s.badge}>
          <span className={s.tick}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3.5 8.4 6.6 11.4 12.5 4.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>
            Genoemd in
            <b>5 AI-engines</b>
          </span>
        </div>
      </div>
    </div>
  );
}
