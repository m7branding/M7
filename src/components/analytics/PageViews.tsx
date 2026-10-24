"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

/** Stuurt een page_view bij elke client-side navigatie (SPA). */
export function PageViews({ id }: { id: string }) {
  const pathname = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    if (!g || !id) return;
    g("event", "page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
      send_to: id,
    });
  }, [pathname, search, id]);
  return null;
}
