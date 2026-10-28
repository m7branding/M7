import { TLink } from "@/components/motion/TLink";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/content/types";
import { people } from "@/content/team";
import { Avatars } from "./Avatars";

type Kind = "ready" | "ask" | "process";

/** Korte regels bij de avatars; {a} en {b} zijn de eerste twee voornamen uit team.ts. */
const LINES: Record<Kind, Record<Locale, (a: string, b: string) => React.ReactNode>> = {
  ready: {
    nl: (a, b) => (
      <>
        <strong>
          {a}, {b}
        </strong>{" "}
        en de rest van het team staan voor je klaar.
      </>
    ),
    en: (a, b) => (
      <>
        <strong>
          {a}, {b}
        </strong>{" "}
        and the rest of the team are ready for you.
      </>
    ),
  },
  ask: {
    nl: (a, b) => (
      <>
        <strong>Staat je vraag er niet bij?</strong>
        <br />
        {a}, {b} en de rest denken mee.
      </>
    ),
    en: (a, b) => (
      <>
        <strong>Question not listed?</strong>
        <br />
        {a}, {b} and the rest are happy to help.
      </>
    ),
  },
  process: {
    nl: (a, b) => (
      <>
        <strong>Vragen over deze aanpak?</strong>
        <br />
        {a} en {b} denken graag met je mee.
      </>
    ),
    en: (a, b) => (
      <>
        <strong>Questions about this approach?</strong>
        <br />
        {a} and {b} are happy to think along.
      </>
    ),
  },
};

/**
 * Avatars van het team + een korte regel, bv. onder een CTA:
 * "Martijn, Noud en de rest van het team staan voor je klaar."
 * Namen en aantallen komen uit team.ts (niet hardcoded).
 */
export function TeamLine({
  locale,
  kind = "ready",
  show = 5,
  size = 40,
  ring,
  text,
  href,
  className,
}: {
  locale: Locale;
  kind?: Kind;
  /** Hoeveel gezichten we tonen; de rest wordt "+N". */
  show?: number;
  size?: number;
  ring?: string;
  /** Eigen regel in plaats van een van de standaardzinnen. */
  text?: React.ReactNode;
  /** Maak de hele regel een link (NL-pad, bv. paths.contact). */
  href?: string;
  className?: string;
}) {
  const list = people.slice(0, show).map((m) => ({ name: m.name, photo: m.avatar }));
  const more = people.length - list.length;
  const [a, b] = people;
  const line = text ?? LINES[kind][locale](a.first, b.first);
  if (href) {
    return (
      <TLink href={href} className={`av-line av-line--link${className ? ` ${className}` : ""}`}>
        <Avatars people={list} size={size} more={more} ring={ring} tips={false} decorative />
        <span>{line}</span>
        <span className="av-line__go" aria-hidden="true">
          <Icon name="arrowUpRight" size={16} stroke={2.2} />
        </span>
      </TLink>
    );
  }
  return (
    <p className={`av-line${className ? ` ${className}` : ""}`}>
      <Avatars people={list} size={size} more={more} ring={ring} />
      <span>{line}</span>
    </p>
  );
}
