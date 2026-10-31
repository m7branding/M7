import { SplitText } from "@/components/motion/SplitText";
import { GrowFrame } from "./GrowFrame";

/**
 * Eén schermvullend beeld of video (een render of de hero-video) dat bij het scrollen
 * openvouwt tot full-bleed en rustig uitzoomt, optioneel met een korte regel erover.
 * De video laadt pas in beeld (GrowFrame zet data-src) en blijft bij reduced motion op de poster.
 * Aangeleverde films: `fit="native"` houdt de eigen verhouding (geen uitsnede van ingebakken titels),
 * `fit="stage"` zet een staande film (bv. 4:5) gecentreerd op een donker podium.
 */
export function CaseMedia({
  image,
  video,
  poster,
  position,
  quote,
  alt,
  fit,
  ratio,
}: {
  image?: string;
  video?: string;
  poster?: string;
  position?: string;
  quote?: string;
  alt: string;
  fit?: "native" | "stage";
  ratio?: number;
}) {
  if (!image && !video) return null;
  const pos = position ? { objectPosition: position } : undefined;
  const frame = fit === "native" && ratio ? { ["--ar" as string]: String(ratio) } : undefined;
  return (
    <section className={`cx-media${fit ? ` cx-media--${fit}` : ""}`} aria-label={alt}>
      <GrowFrame className="cx-media__grow" style={frame}>
        {video ? (
          <video
            className="cx-media__el"
            data-src={video}
            poster={poster ?? image}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-label={alt}
            style={fit === "stage" && ratio ? { ...pos, aspectRatio: String(ratio) } : pos}
          />
        ) : (
          <img className="cx-media__el" src={image} alt={alt} loading="lazy" decoding="async" style={pos} />
        )}
        {quote ? <SplitText as="p" className="cx-media__quote" parts={quote} /> : null}
      </GrowFrame>
    </section>
  );
}
