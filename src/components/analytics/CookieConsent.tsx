"use client";

import { useEffect, useState } from "react";
import { TLink } from "@/components/motion/TLink";

type Labels = { text: string; accept: string; decline: string; more: string };

const GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
};
const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

/** Minimalistische consent-banner (Google Consent Mode v2). */
export function CookieConsent({ labels, enabled, moreHref = "/cookies" }: { labels: Labels; enabled: boolean; moreHref?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    try {
      if (!localStorage.getItem("m7-consent")) {
        const t = window.setTimeout(() => setShow(true), 2600);
        return () => window.clearTimeout(t);
      }
    } catch {}
  }, [enabled]);

  const choose = (granted: boolean) => {
    const v = granted ? GRANTED : DENIED;
    try {
      localStorage.setItem("m7-consent", JSON.stringify(v));
    } catch {}
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    g?.("consent", "update", v);
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="consent" role="dialog" aria-live="polite" aria-label="Cookies">
      <p>
        {labels.text}{" "}
        <TLink href={moreHref} className="consent__more">
          {labels.more}
        </TLink>
      </p>
      <div className="consent__actions">
        <button type="button" className="consent__btn" onClick={() => choose(false)}>
          {labels.decline}
        </button>
        <button type="button" className="consent__btn consent__btn--primary" onClick={() => choose(true)}>
          {labels.accept}
        </button>
      </div>
    </div>
  );
}
