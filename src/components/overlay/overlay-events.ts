"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

/**
 * Site-brede overlays (supportticket, korte intake). Openen kan via:
 * - openOverlay("support") vanuit een knop (custom event)
 * - een deep link met hash: /contact#intake, /#support, /letsgo#intake
 */
export type OverlayName = "support" | "intake";

const EVENT = "m7:overlay";

export function openOverlay(name: OverlayName) {
  window.dispatchEvent(new CustomEvent<OverlayName>(EVENT, { detail: name }));
}

/** Haal #support / #intake weer uit de URL zonder te navigeren of te scrollen. */
function clearHash(name: OverlayName) {
  if (window.location.hash !== `#${name}`) return;
  try {
    window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
  } catch {
    /* geen history API: laat de hash staan */
  }
}

/**
 * Lichte 'poortwachter': true zodra een overlay voor het eerst gevraagd wordt
 * (knop of hash). Daarna pas laden we de (zwaardere) modal-code.
 */
export function useOverlayRequested(name: OverlayName) {
  const [requested, setRequested] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (requested) return;
    const check = () => {
      if (window.location.hash === `#${name}`) setRequested(true);
    };
    const onOpen = (e: Event) => {
      if ((e as CustomEvent<OverlayName>).detail === name) setRequested(true);
    };
    check();
    window.addEventListener(EVENT, onOpen);
    window.addEventListener("hashchange", check);
    return () => {
      window.removeEventListener(EVENT, onOpen);
      window.removeEventListener("hashchange", check);
    };
  }, [requested, name, pathname]);
  return requested;
}

/** Host-kant: open/dicht-state die luistert naar events, hash en navigatie. */
export function useOverlayHost(name: OverlayName, initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);
  const pathname = usePathname();

  useEffect(() => {
    const onOpen = (e: Event) => {
      if ((e as CustomEvent<OverlayName>).detail === name) setOpen(true);
    };
    const onHash = () => {
      if (window.location.hash === `#${name}`) setOpen(true);
    };
    const onNavigate = () => setOpen(false);
    window.addEventListener(EVENT, onOpen);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("m7:navigate", onNavigate);
    return () => {
      window.removeEventListener(EVENT, onOpen);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("m7:navigate", onNavigate);
    };
  }, [name]);

  // Ook na een client-side navigatie naar bv. /contact#intake
  useEffect(() => {
    if (window.location.hash === `#${name}`) setOpen(true);
  }, [pathname, name]);

  const close = useCallback(() => {
    setOpen(false);
    clearHash(name);
  }, [name]);

  return { open, close };
}

/** Kleine sessionStorage-helpers (kan falen in private mode: dan gewoon niets). */
export function loadDraft<T>(key: string): T | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}
export function saveDraft(key: string, value: unknown) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* negeren */
  }
}
export function clearDraft(key: string) {
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    /* negeren */
  }
}

export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

/** "www.site.nl/pagina" → "https://www.site.nl/pagina". Leeg blijft leeg. */
export function normalizeUrl(v: string) {
  const s = v.trim();
  if (!s) return "";
  return /^https?:\/\//i.test(s) ? s : `https://${s}`;
}
export function isValidUrl(v: string) {
  const s = normalizeUrl(v);
  if (!s) return true;
  try {
    const u = new URL(s);
    return /\./.test(u.hostname) && !/\s/.test(s);
  } catch {
    return false;
  }
}
export const isValidPhone = (v: string) => !v.trim() || v.replace(/[^\d]/g, "").length >= 8;
