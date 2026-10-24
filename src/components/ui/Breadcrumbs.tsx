import { TLink } from "@/components/motion/TLink";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/content/types";
import { breadcrumbLd } from "@/lib/seo";

/** Kruimelpad + BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items, locale, label }: { items: { name: string; path: string }[]; locale: Locale; label: string }) {
  return (
    <>
      <nav className="crumbs" aria-label={label} data-reveal="fade">
        <ol>
          {items.map((it, i) => (
            <li key={it.path}>
              {i < items.length - 1 ? <TLink href={it.path}>{it.name}</TLink> : <span aria-current="page">{it.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(items, locale)} />
    </>
  );
}
