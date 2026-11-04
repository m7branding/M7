import s from "./BernhezePrint.module.css";

const P = "/media/showcase/bernheze";

type V = Record<string, string | number>;
const v = (o: V) => o as React.CSSProperties;

/* De bladen van het Investment Memorandum, van boven naar onder: kaft (1/2), 3/4, 5/6 en 7/8.
   Ze slaan na elkaar om (licht overlappend, als een waaier); daaronder ligt pagina 9. */
const LEAVES = [
  { n: 0, front: "im-cover", back: "im-p02" },
  { n: 1, front: "im-p03", back: "im-p04" },
  { n: 2, front: "im-p05", back: "im-p06" },
  { n: 3, front: "im-p07", back: "im-p08" },
];

function Img({ src }: { src: string }) {
  return <img src={`${P}/${src}.webp`} alt="" loading="lazy" decoding="async" />;
}

/**
 * Bernheze Makelaars: drukwerk op tafel. Het Investment Memorandum (Gezondheidscentrum Ceres)
 * ligt dicht met de kaft boven, draait langzaam bij en slaat open; de bladen waaieren door tot
 * de spread Locatie & Ligging / Bereikbaarheid (p. 8–9) plat openligt. Daarna schuiven de
 * brochure (voor- en achterplat) en het visitekaartje (voorkant, achterkant er half onder) erbij.
 * Na het vastzetten van de kaart drijft de camera rustig door over de kaartpagina's.
 */
export function BernhezePrint() {
  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />
      <div className={s.glowWarm} aria-hidden="true" />

      <div className={s.scene} aria-hidden="true">
        <div className={s.table}>
          {/* brochure: achterplat onder, voorplat erop */}
          <div className={`${s.sheet} ${s.achter}`}>
            <Img src="cover-back" />
          </div>
          <div className={`${s.sheet} ${s.voor}`}>
            <Img src="cover-front" />
          </div>

          {/* visitekaartje: achterkant half onder de voorkant */}
          <div className={`${s.card} ${s.cardBack}`}>
            <Img src="card-back" />
          </div>
          <div className={`${s.card} ${s.cardFront}`}>
            <Img src="card-front" />
          </div>

          {/* Investment Memorandum */}
          <div className={s.book}>
            <div className={s.bookShadow} />
            <div className={s.leftBlock} />
            <div className={s.right}>
              <div className={s.base}>
                <Img src="im-p09" />
              </div>
              {LEAVES.map((l) => (
                <div key={l.n} className={s.leaf} style={v({ "--n": l.n })}>
                  <div className={`${s.face} ${s.front}`}>
                    <Img src={l.front} />
                  </div>
                  <div className={`${s.face} ${s.back}`}>
                    <Img src={l.back} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
