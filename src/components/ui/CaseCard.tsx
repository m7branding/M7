import { TLink } from "@/components/motion/TLink";
import type { Case, Locale } from "@/content/types";
import { getService } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";

/** Case-cover: echt beeld of een gegenereerde cover in de case-kleur. */
export function CaseCover({ c, sizes = "(max-width: 760px) 100vw, 50vw" }: { c: Case; sizes?: string }) {
  if (c.cover) {
    return <img src={c.cover} alt={c.client} loading="lazy" decoding="async" sizes={sizes} />;
  }
  return (
    <span className="case-gen" style={{ ["--cc" as string]: c.color }} aria-hidden="true">
      <span className="case-gen__orb" />
      <span className="case-gen__frame">
        <i />
        <i />
        <i />
        <b />
      </span>
      <strong>{c.client}</strong>
    </span>
  );
}

export function CaseCard({
  c,
  locale,
  label,
  size = "md",
  index = 0,
}: {
  c: Case;
  locale: Locale;
  label: string;
  size?: "lg" | "md";
  index?: number;
}) {
  // alle diensten in de HTML (het filter op /cases licht de gekozen dienst uit); standaard zichtbaar: de eerste twee
  const services = c.services.map((s) => getService(s)).filter(Boolean);
  return (
    <TLink
      href={paths.case(c)}
      className={`case-card case-card--${size} case-card--${c.shape || "square"}`}
      data-cursor={label}
      style={{ ["--cc" as string]: c.color, ["--d" as string]: `${(index % 3) * 0.08}s` }}
      data-reveal="up"
    >
      <span className="case-card__media">
        <CaseCover c={c} />
      </span>
      <span className="case-card__body">
        <span className="case-card__meta">
          {c.year ? `${c.client} · ${c.year}` : c.client}
        </span>
        <span className="case-card__title">{tr(c.title, locale)}</span>
        <span className="case-card__tags">
          {services.map((s, i) => (
            <span
              key={s!.slug}
              className={`case-card__tag${i >= 2 ? " is-extra" : ""}`}
              data-svc={s!.slug}
              style={{ ["--accent" as string]: s!.color }}
            >
              <span className="chip__dot" />
              {tr(s!.short, locale)}
            </span>
          ))}
        </span>
      </span>
    </TLink>
  );
}

/** Uitgelichte case + masonry van de rest. */
export function CasesMasonry({ list, locale, label }: { list: Case[]; locale: Locale; label: string }) {
  if (!list.length) return null;
  const [first, ...rest] = list;
  return (
    <div className="masonry-wrap">
      <CaseCard c={first} locale={locale} label={label} size="lg" />
      {rest.length ? (
        <div className="masonry">
          {rest.map((c, i) => (
            <CaseCard key={c.slug} c={c} locale={locale} label={label} index={i} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
