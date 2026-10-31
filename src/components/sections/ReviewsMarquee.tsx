"use client";

import { useCallback, useState } from "react";
import { siGoogle } from "simple-icons";
import st from "./ReviewsMarquee.module.css";

export interface MarqueeReview {
  id: string;
  author: string;
  /** "CEO, TeamTV" of alleen het bedrijf. */
  meta: string;
  when?: string;
  avatar?: string;
  initials: string;
  paragraphs: string[];
  /** Taal van de tekst als die afwijkt van de pagina (bv. een Engelse Google-vertaling op een NL-pagina). */
  lang?: string;
  rating?: number;
  source?: "google";
  translated: boolean;
  draft: boolean;
}

interface Labels {
  region: string;
  more: string;
  less: string;
  draft: string;
  translated: string;
  google: string;
  googleReview: string;
  pause: string;
  play: string;
  stars: string;
}

/** Seconden per kaart: rustig tempo, ongeacht het aantal reviews. */
const SEC = 10;
/** Vanaf hoeveel tekens de quote ingekort wordt met "Lees verder". */
const LONG = 230;
const TINTS = ["#3affff", "#00ff19", "#8b3dff", "#ffd23a", "#ff4fd8", "#34f5f0"];

function GoogleG({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={siGoogle.path} />
    </svg>
  );
}

function Stars({ n, label }: { n: number; label: string }) {
  return (
    <span className={st.stars} role="img" aria-label={`${n} ${label}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" className={i < n ? st.on : undefined}>
          <path d="M12 2.8l2.75 5.6 6.15.9-4.45 4.35 1.05 6.15L12 16.9l-5.5 2.9 1.05-6.15L3.1 9.3l6.15-.9L12 2.8Z" />
        </svg>
      ))}
    </span>
  );
}

function Card({
  it,
  hidden,
  labels,
  onToggle,
}: {
  it: MarqueeReview;
  hidden: boolean;
  labels: Labels;
  onToggle: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const text = it.paragraphs.join(" ");
  const long = text.length > LONG;
  const tint = TINTS[[...it.id].reduce((a, c) => a + c.charCodeAt(0), 0) % TINTS.length];
  const toggle = () => {
    setOpen((o) => !o);
    onToggle(!open);
  };

  return (
    <figure className={`${st.card}${it.draft ? ` ${st.isDraft}` : ""}${open ? ` ${st.isOpen}` : ""}`} style={{ ["--tint" as string]: tint }}>
      <div className={st.top}>
        {it.draft ? <span className={st.draft}>{labels.draft}</span> : it.rating ? <Stars n={it.rating} label={labels.stars} /> : <span />}
        {it.source === "google" ? (
          <span className={st.src} title={labels.googleReview}>
            <GoogleG />
            <span className={st.srcLabel}>Google</span>
          </span>
        ) : null}
      </div>
      <blockquote className={`${st.quote}${long && !open ? ` ${st.clamped}` : ""}`} lang={it.lang}>
        {it.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>
      {long || it.translated ? (
        <div className={st.extra}>
          {long ? (
            <button type="button" className={st.more} onClick={toggle} aria-expanded={open} tabIndex={hidden ? -1 : undefined}>
              {open ? labels.less : labels.more}
            </button>
          ) : null}
          {it.translated ? <span className={st.note}>{labels.translated}</span> : null}
        </div>
      ) : null}
      <figcaption className={st.who}>
        {it.avatar ? (
          <img src={it.avatar} alt="" width={42} height={42} loading="lazy" decoding="async" className={st.avatar} />
        ) : (
          <span className={st.avatar} aria-hidden="true">
            {it.initials}
          </span>
        )}
        <span className={st.name}>
          <strong>{it.author}</strong>
          {it.meta || it.when ? <small>{[it.meta, it.when].filter(Boolean).join(" · ")}</small> : null}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Reviews als rustige, volledig brede marquee (één of twee rijen, om en om tegen elkaar in).
 * Pauzeert bij hover, focus, een opengeklapte review of via de pauzeknop.
 * Bij reduced motion: een gewone horizontale scrollrij zonder beweging.
 */
export function ReviewsMarquee({ rows, labels, google }: { rows: MarqueeReview[][]; labels: Labels; google?: string }) {
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(0);
  const onToggle = useCallback((open: boolean) => setHeld((h) => Math.max(0, h + (open ? 1 : -1))), []);

  return (
    <div className={`${st.root}${paused || held ? ` ${st.paused}` : ""}`}>
      <div className={st.rows} role="region" aria-label={labels.region}>
        {rows.map((row, ri) => (
          <div
            key={ri}
            className={`${st.row}${ri % 2 ? ` ${st.rev}` : ""}`}
            style={{ ["--dur" as string]: `${row.length * (SEC + ri)}s` }}
            data-lenis-prevent-horizontal=""
          >
            {[0, 1].map((copy) => (
              <ul key={copy} className={st.track} aria-hidden={copy ? true : undefined}>
                {row.map((it) => (
                  <li key={it.id} className={st.item}>
                    <Card it={it} hidden={copy === 1} labels={labels} onToggle={onToggle} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>
      <div className={`container ${st.foot}`}>
        {google ? (
          <a href={google} target="_blank" rel="noopener" className={st.google}>
            <span className={st.googleIcon}>
              <GoogleG size={13} />
            </span>
            {labels.google}
          </a>
        ) : (
          <span />
        )}
        <button type="button" className={st.toggle} onClick={() => setPaused((p) => !p)} aria-pressed={paused}>
          {paused ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 4.5v15l12.5-7.5L7 4.5Z" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 4.5h4v15H6zM14 4.5h4v15h-4z" />
            </svg>
          )}
          <span>{paused ? labels.play : labels.pause}</span>
        </button>
      </div>
    </div>
  );
}
