import s from "./PlentyPlanetSite.module.css";

const P = "/media/showcase/plentyplanet";

/** Beeldmerk: een planeet met een blad dat eruit groeit. */
function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10" cy="14" r="8" fill="#7fbf4d" />
      <path d="M11 13c0-6.2 4.1-10.4 11-10.4 0 6.6-4.2 10.4-11 10.4Z" fill="currentColor" />
      <path d="M12.2 11.8 18.6 5.6" stroke="#7fbf4d" strokeWidth="1.1" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const CARDS = [
  { img: "ecocorridor4", tag: "Corridor", title: "Een groene route over het terrein", pos: "30% 60%" },
  { img: "greencorridor3", tag: "Beplanting", title: "Cortenstaal, planten en paden in één lijn", pos: "18% 78%", zoom: true },
  { img: "greenecocorridor", tag: "Masterplan", title: "Verbonden met de hele omgeving", pos: "50% 50%" },
];

/**
 * Plenty Planet: hun website op een HDR-scherm (Studio Display-stijl).
 * Het scherm komt omhoog en draait recht terwijl de kaart in beeld schuift,
 * gaat aan en de site scrollt mee met de pagina: hero met Ken Burns,
 * intro, uitgelicht project en een groene band. Een cursor beweegt rustig
 * naar de CTA; vooraan zweeft de mobiele versie op een telefoon.
 */
export function PlentyPlanetSite() {
  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />
      <div className={s.floor} aria-hidden="true" />

      <div className={s.scene} aria-hidden="true">
        <div className={s.display}>
          <div className={s.stand}>
            <span className={s.neck} />
            <span className={s.foot} />
          </div>

          <div className={s.frame}>
            <div className={s.screen}>
              <div className={s.page}>
                {/* hero */}
                <section className={s.hero}>
                  <img className={s.heroImg} src={`${P}/greencorridor3.webp`} alt="" loading="lazy" decoding="async" />
                  <div className={s.heroCopy}>
                    <span className={s.eyebrow}>
                      <i />
                      Uitgelicht project · Green Eco Corridor
                    </span>
                    <h3 className={s.h1}>
                      Bedrijventerreinen die weer <em>ademen.</em>
                    </h3>
                    <p className={s.lead}>
                      Wij brengen groen terug op bedrijventerreinen: van eerste schets tot een levende corridor tussen de gebouwen.
                    </p>
                    <div className={s.btns}>
                      <span className={s.btn}>Bekijk het project</span>
                      <span className={s.ghost}>Onze aanpak</span>
                    </div>
                  </div>
                  <span className={s.scrollHint} />
                </section>

                {/* intro */}
                <section className={s.intro}>
                  <div>
                    <span className={s.kicker}>Wie we zijn</span>
                    <h4 className={s.h2}>
                      Van grijs naar groen, <em>samen</em> met de mensen die er werken.
                    </h4>
                  </div>
                  <div className={s.introSide}>
                    <p>
                      Plenty Planet ontwerpt groene verbindingen voor bedrijventerreinen. Corridors, daktuinen en beplanting die ruimte
                      geven aan mensen, planten en dieren.
                    </p>
                    <ol className={s.steps}>
                      <li>
                        <b>01</b>Ontwerp
                      </li>
                      <li>
                        <b>02</b>Aanleg
                      </li>
                      <li>
                        <b>03</b>Beheer
                      </li>
                    </ol>
                  </div>
                </section>

                {/* projecten */}
                <section className={s.projects}>
                  <div className={s.projHead}>
                    <div>
                      <span className={s.kicker}>Uitgelicht project</span>
                      <h4 className={s.h3}>Green Eco Corridor</h4>
                    </div>
                    <span className={s.more}>Alle projecten →</span>
                  </div>
                  <div className={s.cards}>
                    {CARDS.map((c, i) => (
                      <article key={c.title} className={`${s.card} ${i === 0 ? s.cardHot : ""}`}>
                        <span className={s.thumb}>
                          <img
                            src={`${P}/${c.img}.webp`}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className={c.zoom ? s.zoom : undefined}
                            style={{ objectPosition: c.pos }}
                          />
                        </span>
                        <span className={s.tag}>{c.tag}</span>
                        <b className={s.cardTitle}>{c.title}</b>
                      </article>
                    ))}
                  </div>
                </section>

                {/* band */}
                <section className={s.band}>
                  <div className={s.bandCopy}>
                    <span className={s.kicker}>Onze aanpak</span>
                    <h4 className={s.h3}>Groen dat verbindt.</h4>
                    <p>Een verhoogde wandelroute van cortenstaal en beplanting, dwars over het terrein en tussen daken vol zonnepanelen.</p>
                    <span className={s.btn}>Lees meer</span>
                  </div>
                  <span className={s.bandImg}>
                    <img src={`${P}/greenecocorridor.webp`} alt="" loading="lazy" decoding="async" />
                  </span>
                </section>
              </div>

              <nav className={s.nav}>
                <span className={s.logo}>
                  <Mark className={s.mark} />
                  plenty planet
                </span>
                <span className={s.links}>
                  <span className={s.linkHot}>Projecten</span>
                  <span>Aanpak</span>
                  <span>Over ons</span>
                  <span>Contact</span>
                </span>
                <span className={s.cta}>Plan een kennismaking</span>
              </nav>

              <svg className={s.cursor} viewBox="0 0 16 22">
                <path d="M1.5 1.5v16.2l4.3-4 3 6.6 2.7-1.2-3-6.5h6z" />
              </svg>

              <span className={s.power}>
                <Mark className={s.splash} />
                <span className={s.boot} />
              </span>
              <span className={s.glass} />
            </div>
          </div>
        </div>
      </div>

      {/* mobiele versie */}
      <div className={s.phone} aria-hidden="true">
        <div className={s.phScreen}>
          <div className={s.phPage}>
            <div className={s.phHero}>
              <img src={`${P}/ecocorridor4.webp`} alt="" loading="lazy" decoding="async" />
              <div className={s.phCopy}>
                <b>
                  Bedrijventerreinen die weer <em>ademen.</em>
                </b>
                <span className={s.btn}>Bekijk het project</span>
              </div>
            </div>
            <div className={s.phIntro}>
              <span className={s.kicker}>Wie we zijn</span>
              <b>Van grijs naar groen, samen met de mensen die er werken.</b>
            </div>
            <span className={s.phThumb}>
              <img src={`${P}/greencorridor3.webp`} alt="" loading="lazy" decoding="async" />
            </span>
          </div>
          <div className={s.phNav}>
            <span className={s.logo}>
              <Mark className={s.mark} />
              plenty planet
            </span>
            <span className={s.burger} />
          </div>
          <span className={s.phStatus}>
            9:41
            <i />
          </span>
          <span className={s.island} />
          <span className={s.glass} />
        </div>
      </div>
    </div>
  );
}
