"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Emblem } from "./Logo";

/**
 * In-app page transition: content rises in on every route change and a
 * miniature emblem "weave" flashes in the corner — the moving-data-points
 * brand motif carried into navigation.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [flash, setFlash] = useState(false);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setFlash(true);
    const t = setTimeout(() => setFlash(false), 700);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div key={pathname} className="page-transition">
      {flash && (
        <div className="transition-emblem" aria-hidden="true">
          <Emblem size={30} color="var(--signal)" animated />
        </div>
      )}
      {children}
    </div>
  );
}
