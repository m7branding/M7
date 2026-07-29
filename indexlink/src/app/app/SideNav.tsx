"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { group: "Overview", items: [
    { href: "/app", ico: "◆", label: "Command Center" },
    { href: "/app/brain", ico: "◈", label: "Company Brain" },
  ]},
  { group: "Studios", items: [
    { href: "/app/visibility", ico: "01", label: "Visibility" },
    { href: "/app/conversion", ico: "02", label: "Conversion" },
    { href: "/app/action", ico: "03", label: "Action" },
  ]},
  { group: "Insight", items: [
    { href: "/app/analytics", ico: "∿", label: "Analytics" },
  ]},
];

export function SideNav() {
  const pathname = usePathname();
  return (
    <nav className="side-nav">
      {NAV.map((g) => (
        <div key={g.group}>
          <div className="side-label">{g.group}</div>
          {g.items.map((it) => {
            const active = it.href === "/app" ? pathname === "/app" : pathname.startsWith(it.href);
            return (
              <Link key={it.href} href={it.href} className={`side-link ${active ? "active" : ""}`}>
                <span className="ico">{it.ico}</span>
                {it.label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
