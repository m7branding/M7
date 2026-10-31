import { TLink } from "@/components/motion/TLink";
import { Icon } from "./Icon";

type BtnLook = { variant?: "contact" | "light"; size?: "sm"; className?: string };

/** Klassen van de M7 pill-CTA (gedeeld met <OverlayButton look="btn">). */
export const btnClass = ({ variant, size, className }: BtnLook) =>
  ["btn", variant && `btn--${variant}`, size && `btn--${size}`, className].filter(Boolean).join(" ");

/** Binnenkant van de pill-CTA: label + circulaire pijl die doorschuift bij hover. */
export function BtnInner({ children, size }: { children: React.ReactNode; size?: "sm" }) {
  return (
    <>
      <span>{children}</span>
      <span className="btn__dot" aria-hidden="true">
        <Icon name="arrowUpRight" size={size === "sm" ? 16 : 19} stroke={2.4} />
        <Icon name="arrowUpRight" size={size === "sm" ? 16 : 19} stroke={2.4} />
      </span>
    </>
  );
}

/**
 * De M7 pill-CTA met circulaire pijl.
 * Voor de primaire "Lanceer vandaag jouw project"-knop: gebruik <IntakeCta>
 * (opent de korte intake, met /contact#intake als gewone link eronder).
 */
export function Btn({
  href,
  children,
  variant,
  size,
  className,
  type,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "contact" | "light";
  size?: "sm";
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}) {
  const cls = btnClass({ variant, size, className });
  const inner = <BtnInner size={size}>{children}</BtnInner>;
  if (href) {
    return (
      <TLink href={href} className={cls}>
        {inner}
      </TLink>
    );
  }
  return (
    <button type={type || "button"} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
