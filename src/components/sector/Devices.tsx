import type { TileVisual } from "@/content/types";
import { aspectOf } from "./imageSize";

/* ============================================================
   Strakke device- en drukwerkframes voor de dienstentegels
   (stijl: src/styles/tiles.css). Puur CSS, geen client-JS.
   Elk frame staat in .sb-stage (een size-container) en is in
   cqw/cqh gemaakt, zodat het in elke tegelmaat "cover" blijft:
   groot, en waar nodig over de rand van de tegel.
   Verhoudingen komen uit het beeld zelf (imageSize.ts).
   ============================================================ */

type V = Record<string, string | number>;
const v = (o: V) => o as React.CSSProperties;

function Img({ src, position }: { src: string; position?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" loading="lazy" decoding="async" draggable={false} style={position ? { objectPosition: position } : undefined} />;
}

const ar = (src: string, fallback: number) => {
  const a = aspectOf(src);
  return a ? Number(a.toFixed(4)) : fallback;
};

/* ---------- browser ---------- */
function Browser({ src, url, scroll }: { src: string; url?: string; scroll?: boolean }) {
  return (
    <div className={`dv dv-browser${scroll ? " is-scroll" : ""}`} style={v({ "--ar": ar(src, 1.6) })}>
      <div className="dv-browser__bar">
        <span className="dv-browser__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="dv-browser__url">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 11h10v9H7zM9.5 11V8.5a2.5 2.5 0 0 1 5 0V11" />
          </svg>
          {url ? <span>{url}</span> : <i className="dv-browser__ph" />}
        </span>
      </div>
      <div className="dv-browser__screen dv-glass">
        <Img src={src} />
      </div>
    </div>
  );
}

/* ---------- tablet (liggend of staand, naar het beeld) ---------- */
function Tablet({ src }: { src: string }) {
  const a = ar(src, 1.333);
  return (
    <div className={`dv dv-tablet${a < 1 ? " is-portrait" : ""}`} style={v({ "--ar": a })}>
      <span className="dv-tablet__cam" />
      <div className="dv-tablet__screen dv-glass">
        <Img src={src} />
      </div>
    </div>
  );
}

/* ---------- telefoon ---------- */
function Phone({ src }: { src: string }) {
  return (
    <div className="dv dv-phone">
      <div className="dv-phone__screen dv-glass">
        <Img src={src} />
        <span className="dv-phone__island" />
      </div>
    </div>
  );
}

/* ---------- bestaande mockupfoto (case-cover) ---------- */
function Photo({ src, position }: { src: string; position?: string }) {
  return (
    <div className="dv dv-photo">
      <Img src={src} position={position} />
    </div>
  );
}

/* ---------- opengeslagen boek / rapport ---------- */
function Book({ left, right }: { left: string; right: string }) {
  const a = ar(left, 0.707);
  return (
    <div className={`dv dv-book${a > 1 ? " is-landscape" : ""}`} style={v({ "--ar": a })}>
      <div className="dv-book__spread">
        <div className="dv-book__page is-left">
          <Img src={left} />
        </div>
        <div className="dv-book__page is-right">
          <Img src={right} />
        </div>
      </div>
    </div>
  );
}

/* ---------- drukwerk: brochure voor/achter in een waaier + visitekaartje ---------- */
function Print({ front, back, card, cardBack }: { front: string; back?: string; card?: string; cardBack?: string }) {
  return (
    <div
      className={`dv dv-print${back ? "" : " is-single"}${card ? "" : " no-card"}`}
      style={v({ "--ar": ar(front, 0.707), "--car": card ? ar(card, 1.6) : 1.6 })}
    >
      {back ? (
        <div className="dv-print__sheet is-back">
          <Img src={back} />
        </div>
      ) : null}
      <div className="dv-print__sheet is-front">
        <Img src={front} />
      </div>
      {cardBack ? (
        <div className="dv-print__card is-under">
          <Img src={cardBack} />
        </div>
      ) : null}
      {card ? (
        <div className="dv-print__card">
          <Img src={card} />
        </div>
      ) : null}
    </div>
  );
}

/* ---------- videoframe 16:9 met een minimale spelerbalk ---------- */
function Video({ src }: { src: string }) {
  return (
    <div className="dv dv-video">
      <div className="dv-video__frame">
        <Img src={src} />
        <div className="dv-video__ui">
          <span className="dv-video__play">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13l10.5-6.5z" />
            </svg>
          </span>
          <span className="dv-video__time">0:24</span>
          <span className="dv-video__track">
            <i />
          </span>
        </div>
      </div>
    </div>
  );
}

/** De mockup voor één tegel. */
export function TileMockup({ visual }: { visual: TileVisual }) {
  switch (visual.kind) {
    case "browser":
      return <Browser src={visual.src} url={visual.url} scroll={visual.scroll} />;
    case "tablet":
      return <Tablet src={visual.src} />;
    case "phone":
      return <Phone src={visual.src} />;
    case "photo":
      return <Photo src={visual.src} position={visual.position} />;
    case "book":
      return <Book left={visual.left} right={visual.right} />;
    case "print":
      return <Print front={visual.front} back={visual.back} card={visual.card} cardBack={visual.cardBack} />;
    case "video":
      return <Video src={visual.src} />;
  }
}
