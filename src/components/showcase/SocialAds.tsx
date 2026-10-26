import type { CSSProperties } from "react";
import { siInstagram, siYoutube } from "simple-icons";
import s from "./SocialAds.module.css";

const ADS = "/media/showcase/ads";

/* ---------------------------------------------------------------
   Content. Elke post heeft een `art` (vlakke SVG-illustratie hieronder)
   en een optionele `src`: zet daar later een echte foto in
   (bijv. "/media/showcase/alpacafarm/wandelen.webp") en de illustratie
   wordt overal automatisch vervangen door de foto.
   --------------------------------------------------------------- */
type Art = "walk" | "meet" | "winter" | "cria" | "vlog";
type Post = { art: Art; src?: string; title: string; caption: string; likes: string; when: string };

const POSTS: Post[] = [
  {
    art: "walk",
    title: "Wandelen met alpaca's",
    caption: "Zondag weer wandelen met de kudde door het Brabantse groen. Reserveren kan via de link in onze bio.",
    likes: "1.284",
    when: "2 dagen geleden",
  },
  {
    art: "cria",
    title: "Welkom, kleine cria",
    caption: "Ons nieuwste kudde-lid is geboren. Help je mee een naam te kiezen?",
    likes: "2.031",
    when: "5 dagen geleden",
  },
  { art: "meet", title: "Meet & greet", caption: "Knuffelen, voeren en alles vragen wat je wilt weten.", likes: "946", when: "1 week geleden" },
  { art: "winter", title: "Winter op de farm", caption: "Warme chocomel, wollige vrienden en een sjaal om.", likes: "1.517", when: "2 weken geleden" },
];
const [WALK, CRIA, MEET, WINTER] = POSTS;
const VLOG: Post = {
  art: "vlog",
  title: "De Alpaca Vlog · Aflevering 3",
  caption: "Winterklaar maken met de kudde",
  likes: "",
  when: "3 dagen geleden",
};

const STORIES = [
  { name: "Jouw verhaal", own: true },
  { name: "alpacafarm…", alpaca: true },
  { name: "boerderijwinkel", bg: "linear-gradient(160deg, #e9c79a 0 45%, #9db48e 46%)" },
  { name: "wandelen.nl", bg: "linear-gradient(170deg, #b9d3df 0 52%, #8aa67f 53%)" },
  { name: "sanne.dv", bg: "radial-gradient(circle at 50% 40%, #d9a98a 0 22%, #6d4e3c 23% 60%, #c9b9a5 61%)" },
];

const FUR = {
  cream: { "--f": "#F3E7D2", "--fd": "#DCCAAA", "--fl": "#FFF9EF" },
  caramel: { "--f": "#C99566", "--fd": "#A97648", "--fl": "#E6C7A2" },
  choc: { "--f": "#8C6244", "--fd": "#6D4A31", "--fl": "#BC9473" },
  fawn: { "--f": "#D9AE83", "--fd": "#BD8F62", "--fl": "#F0D5B6" },
} as unknown as Record<string, CSSProperties>;

const v = (o: Record<string, string | number>) => o as CSSProperties;
const img = (src: string) => <img src={src} alt="" loading="lazy" decoding="async" />;

/** Foto als die er is, anders de vlakke illustratie. */
function Pic({ p }: { p: Post }) {
  if (p.src) return img(p.src);
  const box = p.art === "vlog" ? "0 0 160 90" : "0 0 100 100";
  return (
    <svg viewBox={box} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <use href={`#sa-${p.art}`} />
    </svg>
  );
}

/** Alpacakop als profielfoto. */
function Head() {
  return (
    <svg viewBox="64 0 46 46" aria-hidden="true">
      <use href="#sa-alpaca" width="120" height="140" style={FUR.cream} />
    </svg>
  );
}

function FeedPost({ p, beat }: { p: Post; beat?: boolean }) {
  return (
    <article className={s.post}>
      <header className={s.ph}>
        <i className={`${s.av} ${s.ring}`}>
          <Head />
        </i>
        <span>
          <b>alpacafarmvorstenbosch</b>
          <small>Vorstenbosch, Noord-Brabant</small>
        </span>
      </header>
      <div className={`${s.media} ${beat ? s.beat : ""}`}>
        <Pic p={p} />
      </div>
      <div className={s.actions} />
      <p className={s.likes}>{p.likes} vind-ik-leuks</p>
      <p className={s.cap}>
        <b>alpacafarmvorstenbosch</b> {p.caption}
      </p>
      <p className={s.when}>{p.when}</p>
    </article>
  );
}

/** Gesponsorde GRID-post (in de feed en als losse kaart die eruit tilt). */
function GridAd({ className }: { className: string }) {
  return (
    <div className={className}>
      <header className={s.ph}>
        <i className={`${s.av} ${s.gridAv}`} />
        <span>
          <b>GRID</b>
          <small>Gesponsord</small>
        </span>
      </header>
      <div className={s.adImg}>{img(`${ADS}/grid-laadpaal.webp`)}</div>
      <p className={s.cta}>Aanvragen</p>
    </div>
  );
}

/**
 * Content marketing & online ads.
 * Fase 1: een iPhone 15 Pro met de Instagram-feed van Alpacafarm Vorstenbosch
 * komt omhoog en scrolt; posts vliegen uit het scherm en zweven eromheen,
 * een aflevering van hun YouTube-serie schuift in beeld.
 * Fase 2: de eerste telefoon wijkt naar achteren, een tweede (dark mode)
 * schuift in, scrolt naar de gesponsorde GRID-advertentie, die uit de feed
 * loskomt terwijl de Major Capital-story het scherm overneemt.
 */
export function SocialAds() {
  return (
    <div className={s.root}>
      <Defs />
      <div className={s.glow} aria-hidden="true" />

      <div className={s.scene} aria-hidden="true">
        {/* ---------- Telefoon 1: Alpacafarm-feed ---------- */}
        <div className={`${s.phone} ${s.ti} ${s.p1}`}>
          <div className={s.screen}>
            <div className={s.sb}>9:41</div>
            <div className={s.feed1}>
              <div className={s.top}>
                <svg viewBox="0 0 24 24">
                  <path d={siInstagram.path} />
                </svg>
              </div>
              <ul className={s.stories}>
                {STORIES.map((st) => (
                  <li key={st.name} className={st.own ? s.own : ""}>
                    <i style={st.bg ? v({ "--av": st.bg }) : undefined}>{st.alpaca && <Head />}</i>
                    {st.name}
                  </li>
                ))}
              </ul>
              <FeedPost p={WALK} beat />
              <FeedPost p={CRIA} />
            </div>
          </div>
          <i className={s.shade} />
        </div>

        <span className={s.notif}>128</span>

        {/* ---------- Posts die uit de feed vliegen ---------- */}
        {[MEET, WINTER].map((p, n) => (
          <figure key={p.art} className={`${s.card} ${n ? s.cardB : s.cardA}`}>
            <Pic p={p} />
            <figcaption>
              <b>{p.title}</b>
              <span>{p.likes}</span>
            </figcaption>
          </figure>
        ))}

        <p className={s.comment}>
          <i />
          <span>
            <b>sanne.dv</b> Wat een schatjes! Zaterdag komen we wandelen.
            <small>12 min · Beantwoorden</small>
          </span>
        </p>

        {/* ---------- YouTube-serie ---------- */}
        <div className={s.yt}>
          <div className={s.thumb}>
            <Pic p={VLOG} />
            <span className={s.ytTag}>
              <small>De Alpaca Vlog</small>Afl. 3
            </span>
            <span className={s.ytPlay} />
            <span className={s.ytTime}>12:48</span>
            <span className={s.ytBar} />
          </div>
          <div className={s.ytInfo}>
            <i className={s.av}>
              <Head />
            </i>
            <span>
              <b>{VLOG.title}</b>
              <small>Alpacafarm Vorstenbosch · {VLOG.when}</small>
            </span>
            <svg viewBox="0 0 24 24" className={s.ytLogo}>
              <path d={siYoutube.path} />
            </svg>
          </div>
        </div>

        {/* ---------- Telefoon 2: GRID-advertentie en Major Capital-story ---------- */}
        <div className={s.p2}>
          <div className={`${s.phone} ${s.blue}`}>
            <div className={`${s.screen} ${s.dark}`}>
              <div className={s.sb}>9:41</div>
              <div className={s.feed2}>
                <div className={s.top}>
                  <svg viewBox="0 0 24 24">
                    <path d={siInstagram.path} />
                  </svg>
                </div>
                <FeedPost p={WINTER} />
                <GridAd className={s.adPost} />
                <div className={s.actions} />
                <p className={s.likes}>862 vind-ik-leuks</p>
                <p className={s.cap}>
                  <b>GRID</b> Vraag nu geheel gratis en vrijblijvend een publiek laadpunt bij je woning aan.
                </p>
              </div>
              <div className={s.story}>
                <div className={s.storyCard}>
                  {img(`${ADS}/majorcapital-story.webp`)}
                  <span className={s.bars} />
                  <header className={s.ph}>
                    <i className={`${s.av} ${s.mcAv}`} />
                    <span>
                      <b>Major Capital</b>
                      <small>Gesponsord</small>
                    </span>
                  </header>
                  <span className={s.more}>Meer informatie</span>
                </div>
                <p className={s.reply}>Stuur bericht</p>
              </div>
            </div>
          </div>
          <GridAd className={s.adCard} />
        </div>

        {/* ---------- Campagne-chips ---------- */}
        <p className={`${s.chip} ${s.c1}`}>
          <i className={s.live} />
          <span>
            Campagne actief<small>Feed + Stories</small>
          </span>
        </p>
        <p className={`${s.chip} ${s.c2}`}>
          <span>
            Bereik<small>Afgelopen 14 dagen</small>
          </span>
          <svg viewBox="0 0 60 24">
            <path d="M2 21C9 20 12 16.5 18 16.5S27 12 33 12.5 44 6 58 3" pathLength="100" />
          </svg>
        </p>
        <p className={`${s.chip} ${s.c3}`}>
          <span>
            CTR<small>Knop Aanvragen</small>
          </span>
          <i className={s.barsUp} />
        </p>
      </div>
    </div>
  );
}

/** Eenmalige SVG-defs: één alpaca, hergebruikt in alle scènes. */
function Defs() {
  const c = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
  return (
    <svg className={s.defs} aria-hidden="true">
      <defs>
        <linearGradient id="sa-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#BBD6E2" />
          <stop offset=".75" stopColor="#F3EAD9" />
        </linearGradient>
        <linearGradient id="sa-snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C9D7E1" />
          <stop offset=".8" stopColor="#F2EFEA" />
        </linearGradient>
        <symbol id="sa-alpaca" viewBox="0 0 120 140">
          <ellipse cx="52" cy="135" rx="38" ry="4" fill="#000" opacity=".07" />
          <path style={{ fill: "var(--fd)" }} d="M33 96h8.5v34a4.25 4.25 0 0 1-8.5 0Z M71 96h8.5v34a4.25 4.25 0 0 1-8.5 0Z" />
          <ellipse style={{ fill: "var(--f)" }} cx="15" cy="80" rx="6.5" ry="8.5" transform="rotate(-20 15 80)" />
          <path
            style={{ fill: "var(--f)" }}
            d="M15 87C13 71 27 63 45 63H70C85 63 93 73 91 87C89 101 79 108 64 108H37C23 108 16 100 15 87Z M65 84C62 64 65 46 70 26H93C94 46 92 66 91 84Z M22 98h9v35a4.5 4.5 0 0 1-9 0Z M60 98h9v35a4.5 4.5 0 0 1-9 0Z"
          />
          <path style={{ fill: "var(--fd)" }} d="M74 19C69.5 12.5 70.5 4.5 75 1C79 5.5 80.5 12.5 79 19Z M87 17C85.5 10 87.5 3 92.5 0C95 5 94.5 12 91 18Z" />
          <ellipse style={{ fill: "var(--f)" }} cx="84" cy="28" rx="14" ry="13.2" />
          <ellipse style={{ fill: "var(--fl)" }} cx="96.5" cy="33.5" rx="9" ry="7.5" />
          <path
            style={{ fill: "var(--fl)" }}
            d="M70.5 25c-3.5-6 .5-12.5 6-11.5c1.5-5 8.5-6.5 11.5-2c4.5-2 9.5 1.5 8.5 6.5c3 2.5 1.5 7.5-2 8c-7 2-17 1.5-24-1Z"
          />
          <path
            style={{ fill: "none", stroke: "var(--fl)", strokeWidth: 1.6, strokeLinecap: "round", opacity: 0.75 }}
            d="M28 75c4-3.5 9-3.5 13 0 M50 72c4-3.5 9-3.5 13 0 M36 90c4-3.5 9-3.5 13 0 M71 50c3-2.5 7-2.5 10 0"
          />
          <circle cx="89.5" cy="28.5" r="2.4" fill="#2B211A" />
          <ellipse cx="88.5" cy="35.5" rx="3.4" ry="2.1" fill="#E3937C" opacity=".45" />
          <path d="M102.5 31.8h2.6 M99.5 38c1.6 1.3 3.6 1.3 5.2 0" fill="none" stroke="#2B211A" strokeWidth="1.2" strokeLinecap="round" />
        </symbol>

        <symbol id="sa-walk" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="url(#sa-sky)" />
          <circle cx="78" cy="21" r="9" fill="#FBE4BC" />
          <path fill="#BCCDAA" d="M0 55C18 46 36 49 52 54S84 48 100 52V100H0Z" />
          <path fill="#86A07C" d="M6 57c-6 0-8-8-2.5-11c-.5-6.5 8-8.5 11-3.5c5.5-.5 7.5 7 3 10c-.5 3.5-4.5 5-11.5 4.5Z" />
          <path fill="#9DB48E" d="M0 67C26 60 58 63 100 59V100H0Z" />
          <path fill="#EBDCC0" d="M28 100C38 86 56 76 80 69H90C70 77 59 88 55 100Z" />
          <use href="#sa-alpaca" x="6" y="40" width="38" height="44.3" style={FUR.cream} />
          <use href="#sa-alpaca" x="42" y="31" width="47" height="54.8" style={FUR.caramel} />
        </symbol>
        <symbol id="sa-meet" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="#F2E2CA" />
          <circle cx="56" cy="36" r="32" fill="#F8EDDC" />
          <path fill="#A9BD98" d="M0 76H100V100H0Z" />
          <use href="#sa-alpaca" x="-14" y="8" width="90" height="105" style={FUR.caramel} />
          <path fill="#B07E4E" d="M0 66h100v5H0Z M0 82h100v5H0Z M8 60h6v40H8Z M60 60h6v40h-6Z M90 60h6v40h-6Z" />
          <path
            fill="#E9826A"
            d="M80 25.5c-3.2-2.7-6.4-4.8-6.4-7.8c0-1.9 1.5-3.3 3.2-3.3c1.4 0 2.6.8 3.2 2c.6-1.2 1.8-2 3.2-2c1.7 0 3.2 1.4 3.2 3.3c0 3-3.2 5.1-6.4 7.8Z"
          />
        </symbol>
        <symbol id="sa-winter" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="url(#sa-snow)" />
          <path fill="#7F9C8C" d="M86 72H76l6-10h-4l7-12h-3.5L88 38l6.5 12H91l7 12h-4l6 10H90v4h-4Z" />
          <path fill="#E4EBEF" d="M0 62C20 54 44 58 62 62S88 58 100 60V100H0Z" />
          <use href="#sa-alpaca" x="14" y="22" width="64" height="74.7" style={FUR.choc} />
          <path fill="#FFFFFF" d="M0 82C30 74 64 78 100 74V100H0Z" />
          <path fill="#E8834E" d="M56.2 46.6c4.3 2.6 9.2 2.6 12.6 0l.6 4.6c-4 3-9.4 3-13.6 0Z M59.5 50.5l-1.8 10.5 3.6.6 1.6-10.2Z" />
          <path
            fill="#FFFFFF"
            opacity=".9"
            d={[c(10, 14, 1.4), c(28, 8, 1), c(44, 18, 1.2), c(70, 10, 1.5), c(88, 22, 1), c(20, 34, 1.2), c(6, 48, 1), c(94, 40, 1.2)].join(" ")}
          />
        </symbol>
        <symbol id="sa-cria" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="url(#sa-sky)" />
          <circle cx="22" cy="20" r="8" fill="#FBE4BC" />
          <path fill="#B7CAA4" d="M0 58C24 50 50 52 70 57S92 54 100 55V100H0Z" />
          <path fill="#A2B993" d="M0 72C30 66 64 68 100 64V100H0Z" />
          <use href="#sa-alpaca" x="34" y="20" width="58" height="67.7" style={FUR.cream} />
          <use href="#sa-alpaca" x="8" y="50" width="30" height="35" style={FUR.fawn} />
          <path fill="#F4CF72" d={[c(14, 90, 1.3), c(48, 94, 1.3), c(80, 92, 1.3), c(64, 86, 1)].join(" ")} />
        </symbol>
        <symbol id="sa-vlog" viewBox="0 0 160 90">
          <rect width="160" height="90" fill="#B3C79F" />
          <circle cx="118" cy="34" r="38" fill="#C8D8B3" />
          <path fill="#8EA680" d="M0 72C40 66 100 69 160 64V90H0Z" />
          <use href="#sa-alpaca" x="78" y="6" width="74" height="86.3" style={FUR.cream} />
        </symbol>
      </defs>
    </svg>
  );
}
