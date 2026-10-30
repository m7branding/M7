import { SplitText } from "@/components/motion/SplitText";
import { GrowFrame } from "./GrowFrame";

/**
 * Eén schermvullend beeld of video (een render of de hero-video) dat bij het scrollen
 * openvouwt tot full-bleed en rustig uitzoomt, optioneel met een korte regel erover.
 * De video laadt pas in beeld (GrowFrame zet data-src) en blijft bij reduced motion op de poster.
 */
export function CaseMedia({
  image,
  video,
  poster,
  position,
  quote,
  alt,
}: {
  image?: string;
  video?: string;
  poster?: string;
  position?: string;
  quote?: string;
  alt: string;
}) {
  if (!image && !video) return null;
  const pos = position ? { objectPosition: position } : undefined;
  return (
    <section className="cx-media" aria-label={alt}>
      <GrowFrame className="cx-media__grow">
        {video ? (
          <video className="cx-media__el" data-src={video} poster={poster ?? image} muted loop playsInline preload="none" aria-label={alt} style={pos} />
        ) : (
          <img className="cx-media__el" src={image} alt={alt} loading="lazy" decoding="async" style={pos} />
        )}
        {quote ? <SplitText as="p" className="cx-media__quote" parts={quote} /> : null}
      </GrowFrame>
    </section>
  );
}
