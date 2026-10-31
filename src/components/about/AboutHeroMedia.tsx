import { HeroMedia, type HeroMediaLabels, type HeroSlide } from "@/components/hero/HeroMedia";

export type { HeroSlide };

/**
 * Achtergrond van de over-ons-hero: de gedeelde HeroMedia (roulerende clips of
 * kantoorfoto's met Ken Burns) met de `ah__*`-klassen uit about.css.
 */
export function AboutHeroMedia(props: {
  slides: HeroSlide[];
  seconds: number;
  maxSeconds: number;
  labels: HeroMediaLabels;
  children: React.ReactNode;
}) {
  return <HeroMedia b="ah" {...props} />;
}
