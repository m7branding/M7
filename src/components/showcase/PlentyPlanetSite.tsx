import { Fragment } from "react";
import { museoModerno } from "./fonts";
import s from "./PlentyPlanetSite.module.css";

const P = "/media/showcase/plentyplanet";

/** Pijl-icoon uit hun knoppen (12×12, schuin omhoog). */
function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.4649 1.12902L10.7241 1.12891M10.7241 1.12891V9.27063M10.7241 1.12891L1.12988 10.7231"
        stroke="currentColor"
        strokeWidth="1.93832"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Groene pijlcirkel op de oplossingskaarten (ArrowUp.svg). */
function ArrowUp() {
  return (
    <svg className={s.arrowUp} viewBox="0 0 42 42" aria-hidden="true">
      <rect width="42" height="42" rx="21" fill="#78B04D" />
      <path
        d="M14.7782 12.9807L27.6884 12.9805M27.6884 12.9805V25.707M27.6884 12.9805L12.6914 27.9775"
        stroke="#fff"
        strokeWidth="2.18696"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Chevron() {
  return (
    <svg className={s.chev} viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SOLAR =
  "Grootschalige zonneparken die duurzame energie produceren en bijdragen aan een toekomstbestendige energievoorziening.";

const CARDS = [
  {
    title: "Solar Car Parks",
    text: "Transformeer parkeerterreinen tot energiehubs met zonne-overkappingen die duurzame energie opwekken, bescherming bieden en eenvoudig kunnen worden geïntegreerd met EV-laadinfrastructuur.",
    img: "card-carpark",
  },
  { title: "Solar Parks", text: SOLAR, img: "card-solarpark" },
  { title: "Battery Storage", text: SOLAR, img: "card-battery" },
  { title: "Solar on Roof", text: SOLAR, img: "card-roof" },
];

const QUOTE: [string, boolean?][] = [
  ["Plenty"],
  ["Planet"],
  ["helpt"],
  ["organisaties"],
  ["hun"],
  ["energievoorziening"],
  ["transformeren"],
  ["van"],
  ["een"],
  ["afhankelijk"],
  ["kostenrisico"],
  ["naar"],
  ["een"],
  ["strategische", true],
  ["infrastructuur", true],
  [","],
  ["door"],
  ["lokale"],
  ["energieproductie,"],
  ["opslag"],
  ["en"],
  ["slimme"],
  ["energie-integratie."],
];

const CHIPS = ["Natuurpositief", "Geïntegreerde laadinfra", "Financieren met voorspelbare maandlast", "5 jaar terugverdientijd"];

/** Groen vinkje uit hun whitepaper-blok. */
function Check() {
  return (
    <svg className={s.check} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#69A739" />
      <path d="M4.6 8.2 7 10.5l4.4-4.6" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const H1 = ["Strategische", "autonomie", "begint", "bij"];
const WORDS = ["energie", "decarbonisatie", "natuurpositieve oplossingen"];

/**
 * Plenty Planet: hun echte homepage (plentyplanet.com) op een HDR-scherm in
 * Studio Display-stijl. Het scherm komt rustig omhoog en draait recht, gaat aan op
 * de hero-video, de menubalk zakt in en de kop verschijnt woord voor woord.
 * Daarna scrollt de site langzaam en ononderbroken door tot het eind: het statement
 * kleurt in, de vier oplossingskaarten schuiven gestaffeld omhoog en het
 * whitepaper-blok komt in beeld. Een cursor zweeft naar "Contact".
 */
export function PlentyPlanetSite() {
  return (
    <div className={`${s.root} ${museoModerno.variable}`}>
      <div className={s.spill} aria-hidden="true" />
      <div className={`${s.spill} ${s.spillWhite}`} aria-hidden="true" />
      <div className={s.floor} aria-hidden="true" />

      <div className={s.scene} aria-hidden="true">
        <div className={s.display}>
          <span className={s.halo} />
          <div className={s.stand} />

          <div className={s.frame}>
            <div className={s.screen}>
              <div className={s.page}>
                {/* hero met video */}
                <div className={s.hero}>
                  <div className={s.heroCard}>
                    <video
                      className={s.video}
                      src={`${P}/hero.mp4`}
                      poster={`${P}/hero-poster.webp`}
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-hidden="true"
                    />
                    <div className={s.heroOverlay}>
                      <div className={s.h1}>
                        {H1.map((w, i) => (
                          <Fragment key={w}>
                            <span className={s.w} style={{ ["--i" as string]: i }}>
                              {w}
                            </span>{" "}
                          </Fragment>
                        ))}
                        <br />
                        <span className={`${s.w} ${s.rot}`} style={{ ["--i" as string]: 4 }}>
                          {WORDS.map((w, n) => (
                            <span key={w} style={{ ["--n" as string]: n }}>
                              {w}
                            </span>
                          ))}
                        </span>
                      </div>
                      <p className={s.sub}>
                        Ontdek hoe organisaties hun energievoorziening opnieuw ontwerpen met zonne-energie, opslag en slimme
                        energie-infrastructuur.
                      </p>
                      <div className={s.ctas}>
                        <span className={s.btn}>
                          Neem contact op
                          <span className={s.btnIcon}>
                            <Arrow />
                          </span>
                        </span>
                        <span className={`${s.btn} ${s.btnGhost}`}>
                          Bekijk onze oplossingen
                          <span className={s.btnIcon}>
                            <Arrow />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* statement */}
                <div className={s.about}>
                  <img className={s.emblem} src={`${P}/pp-emblem.svg`} alt="" loading="lazy" decoding="async" />
                  <p className={s.quote}>
                    {QUOTE.map(([w, hot], i) => (
                      <Fragment key={i}>
                        {i > 0 && !w.startsWith(",") ? " " : null}
                        <span className={hot ? s.hot : undefined} style={{ ["--i" as string]: i }}>
                          {w}
                        </span>
                      </Fragment>
                    ))}
                  </p>
                </div>

                {/* oplossingen */}
                <div className={s.solutions}>
                  {CARDS.map((c, n) => (
                    <div key={c.title} className={s.card} style={{ ["--n" as string]: n }}>
                      <div className={s.cardTop}>
                        <b>{c.title}</b>
                        <ArrowUp />
                      </div>
                      <p>{c.text}</p>
                      <span className={s.cardImg}>
                        <img src={`${P}/${c.img}.webp`} alt="" loading="lazy" decoding="async" />
                      </span>
                    </div>
                  ))}
                </div>

                {/* whitepaper: de site scrollt hier nog langzaam naartoe terwijl de kaart vaststaat */}
                <div className={s.wp}>
                  <img className={s.wpImg} src={`${P}/brochure.webp`} alt="" loading="lazy" decoding="async" />
                  <div className={s.wpText}>
                    <b className={s.wpH}>Van parkeerterrein naar energiecentrale: de kracht van solar car parks</b>
                    <p>{CARDS[0].text}</p>
                    <ul className={s.chips}>
                      {CHIPS.map((c) => (
                        <li key={c}>
                          <Check />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className={s.form}>
                      <span className={s.input}>Vul je e-mailadres in...</span>
                      <span className={s.btn}>Download whitepaper</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* zwevende menubalk */}
              <header className={s.nav}>
                <img className={s.logo} src={`${P}/pp-logo.svg`} alt="" loading="lazy" decoding="async" />
                <span className={s.menu}>
                  <span className={s.drop}>
                    Diensten
                    <Chevron />
                  </span>
                  <span className={s.drop}>
                    Oplossingen
                    <Chevron />
                  </span>
                  <span className={s.link}>Cases</span>
                  <span className={s.link}>Over ons</span>
                  <span className={s.contact}>
                    Contact
                    <span className={s.btnIcon}>
                      <Arrow />
                    </span>
                  </span>
                </span>
              </header>

              <svg className={s.cursor} viewBox="0 0 17 24">
                <path d="M1.2 1.2v18.6l4.9-4.6 3.4 7.6 3.1-1.4-3.4-7.4h6.9z" />
              </svg>

              <span className={s.off} />
            </div>
            {/* glas over beeld én rand: vaste reflectie plus een trage lichtschittering */}
            <span className={s.glass} />
            <span className={s.glare} />
          </div>
        </div>
      </div>
    </div>
  );
}
