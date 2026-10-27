import { siInstagram, siYoutube } from "simple-icons";
import s from "./SocialAds.module.css";

const AF = "/media/showcase/alpacafarm";
const ADS = "/media/showcase/ads";

const img = (src: string, pos?: string) => (
  <img src={src} alt="" loading="lazy" decoding="async" style={pos ? { objectPosition: pos } : undefined} />
);

/* Vervolg van het echte profielraster van @alpacafarmvorstenbosch (onder de eerste rij uit de screenshot). */
const GRID = [
  { src: "fence", pos: "62% 50%" },
  { src: "pizza", pos: "36% 50%" },
  { src: "feed", pos: "68% 50%" },
  { src: "bauble", pos: "50% 50%" },
  { src: "hosts", pos: "50% 30%" },
  { src: "xmas-crowd", pos: "50% 50%" },
];


/**
 * Content marketing & online ads.
 * Een iPhone met het echte Instagram-profiel van Alpacafarm Vorstenbosch komt omhoog en scrolt
 * rustig door; een echte post en een aflevering van hun YouTube-serie zweven eromheen.
 * Daarna wijkt de telefoon (met de kaartjes) naar buiten, schuift een tweede telefoon (dark mode)
 * aan de binnenkant omhoog en scrolt de feed naar de gesponsorde GRID-advertentie, die als
 * rustig eindbeeld voorin blijft staan.
 */
export function SocialAds() {
  return (
    <div className={s.root}>
      <i className={`${s.glow} ${s.glowA}`} aria-hidden="true" />
      <i className={`${s.glow} ${s.glowB}`} aria-hidden="true" />

      <div className={s.scene} aria-hidden="true">
        {/* ---------- Telefoon 1: echt profiel ---------- */}
        <div className={`${s.dev} ${s.p1}`}>
          <div className={`${s.phone} ${s.ti}`}>
            <div className={s.screen}>
              <div className={s.sb}>9:41</div>
              <div className={s.prof}>
                <img className={s.head} src={`${AF}/profile-head.webp`} width={554} height={1076} alt="" decoding="async" />
                <ul className={s.grid}>
                  {GRID.map((t) => (
                    <li key={t.src}>{img(`${AF}/${t.src}.webp`, t.pos)}</li>
                  ))}
                </ul>
              </div>
              <div className={s.tab}>{img(`${AF}/profile-tabbar.webp`)}</div>
            </div>
            <i className={s.shade} />
          </div>
        </div>

        {/* ---------- Echte post die uit het profiel komt ---------- */}
        <figure className={s.card}>
          {img(`${AF}/walk.webp`, "72% 50%")}
          <figcaption>
            <b>Wandelen met alpaca&apos;s</b>
            <span>1.284</span>
          </figcaption>
        </figure>

        {/* ---------- YouTube-serie ---------- */}
        <div className={s.yt}>
          <div className={s.thumb}>
            {img(`${AF}/lounge.webp`, "50% 62%")}
            <span className={s.ytTag}>
              <small>De Alpaca Vlog</small>Afl. 3
            </span>
            <span className={s.ytPlay} />
            <span className={s.ytTime}>12:48</span>
            <span className={s.ytBar} />
          </div>
          <div className={s.ytInfo}>
            <i className={s.av}>{img(`${AF}/avatar.webp`)}</i>
            <span>
              <b>De Alpaca Vlog · Aflevering 3</b>
              <small>Alpacafarm Vorstenbosch · 3 dagen geleden</small>
            </span>
            <svg viewBox="0 0 24 24" className={s.ytLogo}>
              <path d={siYoutube.path} />
            </svg>
          </div>
        </div>

        {/* ---------- Telefoon 2: feed met de gesponsorde GRID-post ---------- */}
        <div className={`${s.dev} ${s.p2}`}>
          <div className={`${s.phone} ${s.graphite}`}>
            <div className={s.screen}>
              <div className={s.sb}>9:41</div>
              <div className={s.feed}>
                <div className={s.top}>
                  <svg viewBox="0 0 24 24">
                    <path d={siInstagram.path} />
                  </svg>
                </div>
                <article className={s.post}>
                  <header className={s.ph}>
                    <i className={`${s.av} ${s.ring}`}>{img(`${AF}/avatar.webp`)}</i>
                    <span>
                      <b>alpacafarmvorstenbosch</b>
                      <small>Vorstenbosch, Noord-Brabant</small>
                    </span>
                  </header>
                  <div className={`${s.media} ${s.beat}`}>{img(`${AF}/xmas-lounge.webp`, "50% 40%")}</div>
                  <div className={`${s.actions} ${s.liked}`} />
                  <p className={s.likes}>1.517 vind-ik-leuks</p>
                  <p className={s.cap}>
                    <b>alpacafarmvorstenbosch</b> Kerstsfeer in de Alpacalounge: high tea en pizza tussen de alpaca&apos;s. Reserveren via de
                    link in onze bio.
                  </p>
                  <p className={s.when}>3 dagen geleden</p>
                </article>
                <article className={s.ad}>
                  <header className={s.ph}>
                    <i className={`${s.av} ${s.gridAv}`} />
                    <span>
                      <b>GRID</b>
                      <small>Gesponsord</small>
                    </span>
                  </header>
                  <div className={s.adImg}>{img(`${ADS}/grid-laadpaal.webp`)}</div>
                  <p className={s.cta}>Aanvragen</p>
                  <div className={s.actions} />
                  <p className={s.likes}>862 vind-ik-leuks</p>
                  <p className={s.cap}>
                    <b>GRID</b> Vraag nu geheel gratis en vrijblijvend een publiek laadpunt bij je woning aan.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Campagne-chip ---------- */}
        <p className={s.chip}>
          <i className={s.live} />
          <span>
            Campagne actief<small>Instagram + Facebook</small>
          </span>
        </p>
      </div>
    </div>
  );
}
