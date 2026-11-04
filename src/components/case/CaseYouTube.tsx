"use client";

import { useState } from "react";
import { GrowFrame } from "./GrowFrame";

/**
 * De video van het project (YouTube) als schermvullende sectie die meegroeit. Eerst alleen de
 * poster (lokaal, geen verzoek naar YouTube); pas na een klik laadt de speler via
 * youtube-nocookie.com en start hij meteen.
 */
export function CaseYouTube({ id, poster, title, label }: { id: string; poster?: string; title: string; label: string }) {
  const [on, setOn] = useState(false);
  return (
    <section className="cx-media cx-yt" aria-label={title}>
      <GrowFrame className="cx-media__grow">
        {on ? (
          <iframe
            className="cx-yt__frame"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="cx-yt__poster" onClick={() => setOn(true)} aria-label={`${label}: ${title}`}>
            {poster ? <img className="cx-media__el" src={poster} alt="" loading="lazy" decoding="async" /> : null}
            <span className="cx-yt__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            </span>
            <span className="cx-yt__label">{label}</span>
          </button>
        )}
      </GrowFrame>
    </section>
  );
}
