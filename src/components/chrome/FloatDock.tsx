"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/motion/LocaleProvider";
import { LiveDot } from "@/components/overlay/LiveDot";
import { launchOverlay } from "@/components/overlay/OverlayButton";
import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/Social";
import { localize } from "@/lib/i18n";
import "./floatdock.css";

const COPY = {
  label: { nl: "Snel contact", en: "Quick contact" },
  intake: { nl: "Korte intake", en: "Quick intake" },
  wa: { nl: "WhatsApp ons", en: "WhatsApp us" },
  waText: { nl: "Hoi M7! Ik heb een vraag over een project.", en: "Hi M7! I have a question about a project." },
  mail: { nl: "Mail ons", en: "Email us" },
  contact: { nl: "Stuur een bericht", en: "Send a message" },
};

/** Na ~6 s of na ~60% van een scherm scrollen (wat eerst komt). */
const DELAY_MS = 6000;
const SCROLL_RATIO = 0.6;
const HINT_KEY = "m7-dock-hint";
/** Elementen die de dock niet mag overlappen (zolang ze in beeld zijn). */
const AVOID = ".hero__rail, [data-dock-avoid]";

/**
 * Zwevende dock rechtsonder: raket → korte intake, WhatsApp (of, zonder
 * nummer, een bericht-knop naar de contactpagina). Verschijnt rustig na een
 * paar seconden of na wat scrollen; verdwijnt bij de footer en zodra er een
 * overlay, het menu, een doelgroep-paneel of de cookiebanner open is (CSS).
 */
export function FloatDock({ whatsapp, email }: { whatsapp: string; email: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const L = (t: { nl: string; en: string }) => t[locale];
  const [armed, setArmed] = useState(false);
  const [covered, setCovered] = useState(false);
  const [hint, setHint] = useState(false);
  const hinted = useRef(false);

  // Verschijnen: tijd óf scroll
  useEffect(() => {
    if (armed) return;
    const t = window.setTimeout(() => setArmed(true), DELAY_MS);
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * SCROLL_RATIO) setArmed(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, [armed]);

  // Uit beeld bij de footer (die heeft zelf intake/support-links) en zolang
  // iets anders rechtsonder staat, zoals de social-rail in de home-hero
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll(`.ftr, ${AVOID}`));
    if (!els.length) return;
    const hit = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? hit.add(e.target) : hit.delete(e.target)));
        setCovered(hit.size > 0);
      },
      { rootMargin: "0px 0px -64px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      setCovered(false);
    };
  }, [pathname]);

  // Eenmalig (per sessie, alleen met muis) even het label van de raket tonen
  useEffect(() => {
    if (!armed || hinted.current) return;
    hinted.current = true;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    try {
      if (window.sessionStorage.getItem(HINT_KEY)) return;
      window.sessionStorage.setItem(HINT_KEY, "1");
    } catch {
      /* private mode: gewoon tonen */
    }
    const t1 = window.setTimeout(() => setHint(true), 900);
    const t2 = window.setTimeout(() => setHint(false), 4600);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [armed]);

  const wa = whatsapp.replace(/[^\d]/g, "");
  // tijdens het prerenderen is het NL-pad intern /nl/contact, in de browser /contact: eerst gelijktrekken
  const publicPath = pathname.replace(/^\/nl(?=\/|$)/, "") || "/";
  const onContact = publicPath === localize("/contact", locale);
  const intakeHref = localize("/contact#intake", locale);
  const shown = armed && !covered;

  const onIntake = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setHint(false);
    launchOverlay("intake", e.currentTarget);
  };

  return (
    <aside className="fdock" data-shown={shown ? "" : undefined} aria-label={L(COPY.label)} aria-hidden={shown ? undefined : true}>
      <div className="fdock__pill">
        <span className="fdock__live" aria-hidden="true">
          <LiveDot size={7} />
        </span>
        <a
          href={intakeHref}
          className={`fdock__btn fdock__btn--intake${hint ? " is-hint" : ""}`}
          onClick={onIntake}
          aria-haspopup="dialog"
          aria-label={L(COPY.intake)}
          data-no-transition=""
          tabIndex={shown ? undefined : -1}
        >
          <span className="fdock__ico fdock__ico--rocket">
            <Icon name="rocket" size={22} stroke={1.8} />
          </span>
          <span className="fdock__tip" aria-hidden="true">
            {L(COPY.intake)}
          </span>
        </a>
        {wa ? (
          <a
            href={`https://wa.me/${wa}?text=${encodeURIComponent(L(COPY.waText))}`}
            className="fdock__btn fdock__btn--wa"
            target="_blank"
            rel="noopener"
            aria-label={L(COPY.wa)}
            tabIndex={shown ? undefined : -1}
          >
            <span className="fdock__ico">
              <SocialIcon name="whatsapp" size={22} />
            </span>
            <span className="fdock__tip" aria-hidden="true">
              {L(COPY.wa)}
            </span>
          </a>
        ) : (
          <a
            href={onContact ? `mailto:${email}` : localize("/contact", locale)}
            className="fdock__btn fdock__btn--msg"
            aria-label={onContact ? L(COPY.mail) : L(COPY.contact)}
            tabIndex={shown ? undefined : -1}
          >
            <span className="fdock__ico">
              {onContact ? (
                <Icon name="mail" size={20} stroke={1.8} />
              ) : (
                <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H11l-4.2 3.2a.5.5 0 0 1-.8-.4v-2.8h0a1.5 1.5 0 0 1-1.5-1.5v-8.5Z" />
                  <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" strokeWidth="2.4" />
                </svg>
              )}
            </span>
            <span className="fdock__tip" aria-hidden="true">
              {onContact ? L(COPY.mail) : L(COPY.contact)}
            </span>
          </a>
        )}
      </div>
    </aside>
  );
}
