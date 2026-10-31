"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import type { IntakeModalProps } from "@/components/intake/IntakeModal";
import type { SupportModalProps } from "@/components/support/SupportModal";
import { useOverlayRequested } from "./overlay-events";

/*
 * De modals zelf laden pas als ze nodig zijn (of als de browser even niets
 * te doen heeft), zodat ze de eerste paginalading niet zwaarder maken.
 */
const loadSupport = () => import("@/components/support/SupportModal").then((m) => m.SupportModal);
const loadIntake = () => import("@/components/intake/IntakeModal").then((m) => m.IntakeModal);
const SupportModal = dynamic(loadSupport, { ssr: false });
const IntakeModal = dynamic(loadIntake, { ssr: false });

function usePrefetch(load: () => Promise<unknown>) {
  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const run = () => void load().catch(() => {});
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(run, { timeout: 6000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(run, 3500);
    return () => window.clearTimeout(t);
  }, [load]);
}

export function SupportGate(props: SupportModalProps) {
  const requested = useOverlayRequested("support");
  usePrefetch(loadSupport);
  return requested ? <SupportModal {...props} initialOpen /> : null;
}

export function IntakeGate(props: IntakeModalProps) {
  const requested = useOverlayRequested("intake");
  usePrefetch(loadIntake);
  return requested ? <IntakeModal {...props} initialOpen /> : null;
}
