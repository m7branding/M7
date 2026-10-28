"use client";

import { Icon } from "@/components/ui/Icon";
import { openOverlay, type OverlayName } from "./overlay-events";

/**
 * Knop die een site-brede overlay opent (#support / #intake).
 * `look="btn"` geeft exact de M7 pill-CTA (zelfde markup als <Btn>).
 */
export function OverlayButton({
  target,
  look,
  size,
  className,
  children,
}: {
  target: OverlayName;
  look?: "btn" | "plain";
  size?: "sm";
  className?: string;
  children: React.ReactNode;
}) {
  const onClick = () => openOverlay(target);
  if (look === "btn") {
    const cls = ["btn", size && `btn--${size}`, className].filter(Boolean).join(" ");
    return (
      <button type="button" className={cls} onClick={onClick} aria-haspopup="dialog">
        <span>{children}</span>
        <span className="btn__dot" aria-hidden="true">
          <Icon name="arrowUpRight" size={size === "sm" ? 16 : 19} stroke={2.4} />
          <Icon name="arrowUpRight" size={size === "sm" ? 16 : 19} stroke={2.4} />
        </span>
      </button>
    );
  }
  return (
    <button type="button" className={className} onClick={onClick} aria-haspopup="dialog">
      {children}
    </button>
  );
}
