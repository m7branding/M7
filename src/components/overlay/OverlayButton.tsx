"use client";

import { useLocale } from "@/components/motion/LocaleProvider";
import { BtnInner, btnClass } from "@/components/ui/Button";
import { localize } from "@/lib/i18n";
import { openOverlay, type OverlayName } from "./overlay-events";

/**
 * Open een overlay. Zit de knop in een native <dialog> (bv. het doelgroep-
 * paneel), dan sluiten we die eerst: een dialog ligt in de 'top layer' en
 * zou de overlay anders afdekken.
 */
export function launchOverlay(target: OverlayName, from?: Element | null) {
  const dlg = from?.closest<HTMLDialogElement>("dialog[open]");
  if (dlg) {
    dlg.close();
    window.setTimeout(() => openOverlay(target), 160);
    return;
  }
  openOverlay(target);
}

/**
 * Knop die een site-brede overlay opent (#support / #intake).
 *
 * `look="btn"` geeft exact de M7 pill-CTA (zelfde markup als <Btn>) en is
 * progressief: het is een echte link naar /contact#intake (EN /en/contact#intake),
 * zodat crawlers en bezoekers zonder JS gewoon op de contactpagina landen
 * (daar opent de hash de overlay). Met JS opent een klik de overlay ter plekke.
 * Geef `href={false}` voor een kale <button>, of een eigen (NL-)pad.
 */
export function OverlayButton({
  target,
  look,
  size,
  variant,
  className,
  href,
  children,
}: {
  target: OverlayName;
  look?: "btn" | "plain";
  size?: "sm";
  variant?: "contact" | "light";
  className?: string;
  /** Fallback-link (NL-pad, wordt gelokaliseerd). Standaard bij look="btn": /contact#<target>. */
  href?: string | false;
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const isBtn = look === "btn";
  const cls = isBtn ? btnClass({ variant, size, className }) : className;
  const inner = isBtn ? <BtnInner size={size}>{children}</BtnInner> : children;
  const link = href === false ? null : href ?? (isBtn ? `/contact#${target}` : null);

  if (link) {
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Nieuw tabblad / middelklik: gewoon de link volgen
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      launchOverlay(target, e.currentTarget);
    };
    return (
      <a
        href={localize(link, locale)}
        className={cls}
        onClick={onClick}
        aria-haspopup="dialog"
        data-overlay={target}
        // geen page transition: de klik opent de overlay op de huidige pagina
        data-no-transition=""
      >
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={(e) => launchOverlay(target, e.currentTarget)} aria-haspopup="dialog" data-overlay={target}>
      {inner}
    </button>
  );
}

/**
 * De primaire CTA ("Lanceer vandaag jouw project"): opent de korte intake.
 * Zonder JS een gewone link naar /contact#intake.
 */
export function IntakeCta({
  children,
  size,
  variant,
  className,
}: {
  children: React.ReactNode;
  size?: "sm";
  variant?: "contact" | "light";
  className?: string;
}) {
  return (
    <OverlayButton target="intake" look="btn" size={size} variant={variant} className={className}>
      {children}
    </OverlayButton>
  );
}
