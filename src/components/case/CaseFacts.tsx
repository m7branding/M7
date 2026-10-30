import { TLink } from "@/components/motion/TLink";
import { ToolBadge } from "@/components/ui/ToolBadge";
import type { Application, Case, Locale, Sector } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { SpecChips } from "./SpecChips";

/** Hoeveel toepassingen er direct staan; de rest klapt open met "+N". */
const APPS_VISIBLE = 6;

/** Domein zonder www, of de tekst "Bekijk live" voor video-links e.d. */
function liveLabel(url: string, fallback: string) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return /(^|\.)(youtu\.be|youtube\.com|vimeo\.com)$/.test(host) ? fallback : host;
  } catch {
    return fallback;
  }
}

/**
 * Samenvatting + specificaties: links de samenvatting als lead, rechts een strak uitgelijnd
 * raster van label en waarde. Toepassingen als chips (lange lijsten ingekort met "+N"),
 * tools met hun badges.
 */
export function CaseFacts({ c, locale, sector, apps }: { c: Case; locale: Locale; sector?: Sector; apps: Application[] }) {
  const d = getDict(locale);
  const rows: { k: string; v: React.ReactNode; wide?: boolean }[] = [{ k: d.cases.client, v: c.client }];
  if (c.year) rows.push({ k: d.cases.year, v: c.year });
  if (sector) rows.push({ k: d.cases.sector, v: <TLink href={paths.sector(sector)} className="cx-specs__link">{tr(sector.title, locale)}</TLink> });
  if (apps.length)
    rows.push({
      k: d.nav.applications,
      wide: true,
      v: (
        <SpecChips max={APPS_VISIBLE} more={locale === "nl" ? "Toon alle toepassingen" : "Show all applications"} less={locale === "nl" ? "Toon minder" : "Show less"}>
          {apps.map((a) => (
            <TLink key={a.slug} href={paths.application(a)} className="cx-chip">
              {tr(a.title, locale)}
            </TLink>
          ))}
        </SpecChips>
      ),
    });
  if (c.tools.length)
    rows.push({
      k: d.service.tools,
      wide: true,
      v: (
        <div className="cx-specs__tools">
          {c.tools.map((t) => (
            <ToolBadge key={t} slug={t} />
          ))}
        </div>
      ),
    });
  if (c.url)
    rows.push({
      k: "Live",
      v: (
        <a href={c.url} target="_blank" rel="noopener" className="cx-specs__link cx-specs__live">
          {liveLabel(c.url, d.cases.visit)}
          <svg width="11" height="11" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M2.5 7.5 7.5 2.5M3.5 2.5h4v4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ),
    });

  return (
    <section className="cx-facts" aria-label={locale === "nl" ? "Over het project" : "About the project"}>
      <div className="container cx-facts__grid">
        <p className="cx-facts__lead" data-reveal="up">
          {tr(c.summary, locale)}
        </p>
        <dl className="cx-specs" data-stagger="">
          {rows.map((r) => (
            <div key={r.k} className={`cx-specs__row${r.wide ? " is-wide" : ""}`}>
              <dt>{r.k}</dt>
              <dd>{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
