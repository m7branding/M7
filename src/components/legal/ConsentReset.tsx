"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/content/types";

const KEY = "m7-consent";

/** Toont de huidige cookiekeuze en laat je die opnieuw maken (de banner verschijnt weer). */
export function ConsentReset({ locale }: { locale: Locale }) {
  const nl = locale === "nl";
  const [state, setState] = useState<"unknown" | "granted" | "denied" | "none">("unknown");

  useEffect(() => {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || "null") as { analytics_storage?: string } | null;
      setState(!v ? "none" : v.analytics_storage === "granted" ? "granted" : "denied");
    } catch {
      setState("none");
    }
  }, []);

  const reset = () => {
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* geen storage: niets te wissen */
    }
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    g?.("consent", "update", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
    // opnieuw laden: de banner vraagt dan opnieuw om je keuze
    window.location.reload();
  };

  const label =
    state === "granted"
      ? nl
        ? "Je hebt analytische cookies geaccepteerd."
        : "You have accepted analytics cookies."
      : state === "denied"
        ? nl
          ? "Je hebt analytische cookies geweigerd."
          : "You have declined analytics cookies."
        : state === "none"
          ? nl
            ? "Je hebt nog geen keuze gemaakt."
            : "You haven't made a choice yet."
          : " ";

  return (
    <div className="legal__consent">
      <p className="legal__consent-state" aria-live="polite">
        <span className={`legal__consent-dot is-${state}`} aria-hidden="true" />
        {label}
      </p>
      <button type="button" className="btn btn--sm" onClick={reset}>
        <span>{nl ? "Cookie-instellingen wijzigen" : "Change cookie settings"}</span>
      </button>
    </div>
  );
}
