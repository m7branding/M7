"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./overlay.css";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const EXIT_MS = 460;

/**
 * Basis voor de M7-modals: portal naar <body>, wazige backdrop,
 * focus trap, Esc om te sluiten, scroll lock (Lenis + native) en de rest
 * van de pagina tijdelijk `inert`. Rustige in- en uitfade.
 */
export function OverlayShell({
  open,
  onClose,
  labelledBy,
  variant,
  children,
  backdrop,
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  /** "dialog" = gecentreerde kaart, "full" = schermvullend. */
  variant: "dialog" | "full";
  children: React.ReactNode;
  /** Extra laag achter de inhoud (bv. Aurora). */
  backdrop?: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  // Mount → volgende frame zichtbaar (transitie); bij sluiten eerst uitfaden
  useEffect(() => {
    if (open) {
      setMounted(true);
      let r2 = 0;
      const r1 = requestAnimationFrame(() => {
        r2 = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(r1);
        cancelAnimationFrame(r2);
      };
    }
    setVisible(false);
    const t = window.setTimeout(() => setMounted(false), EXIT_MS);
    return () => window.clearTimeout(t);
  }, [open]);

  // Scroll lock + rest van de pagina inert
  useEffect(() => {
    if (!open || !mounted) return;
    const html = document.documentElement;
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    const sbw = window.innerWidth - html.clientWidth;
    const prev = { overflow: html.style.overflow, pr: html.style.paddingRight };
    lenis?.stop();
    html.style.overflow = "hidden";
    if (sbw > 0) html.style.paddingRight = `${sbw}px`;
    html.classList.add("ov-open");

    const inerted: HTMLElement[] = [];
    Array.from(document.body.children).forEach((el) => {
      if (!(el instanceof HTMLElement) || el === root.current || el.contains(root.current)) return;
      if (el.hasAttribute("inert") || el.tagName === "SCRIPT") return;
      el.setAttribute("inert", "");
      inerted.push(el);
    });

    return () => {
      html.style.overflow = prev.overflow;
      html.style.paddingRight = prev.pr;
      html.classList.remove("ov-open");
      inerted.forEach((el) => el.removeAttribute("inert"));
      // Het menu kan Lenis ook gestopt hebben; dan laten we hem met rust
      if (!html.classList.contains("menu-open")) lenis?.start();
    };
  }, [open, mounted]);

  // Focus: eerst naar [data-autofocus] of de titel, trap met Tab, Esc sluit
  useEffect(() => {
    if (!open || !mounted) return;
    const before = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => {
      const p = panel.current;
      if (!p) return;
      const target = p.querySelector<HTMLElement>("[data-autofocus]") || p.querySelector<HTMLElement>(FOCUSABLE) || p;
      target.focus({ preventScroll: true });
    }, 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items = Array.from(panel.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );
      if (!items.length) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (!panel.current.contains(active)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey, true);
      if (before && document.contains(before)) before.focus({ preventScroll: true });
    };
  }, [open, mounted]);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={root}
      className={`ov ov--${variant}`}
      data-state={visible ? "open" : "closed"}
      data-lenis-prevent=""
    >
      <div className="ov__backdrop" onClick={onClose} aria-hidden="true" />
      {backdrop}
      <div ref={panel} className="ov__panel" role="dialog" aria-modal="true" aria-labelledby={labelledBy} tabIndex={-1}>
        {children}
      </div>
    </div>,
    document.body,
  );
}
