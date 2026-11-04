import { TLink } from "@/components/motion/TLink";
import type { Application, Locale, Sector, Service } from "@/content/types";
import { applicationsFor, getService } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { Icon } from "./Icon";

export function AppCard({ a, locale, index = 0, showService = false }: { a: Application; locale: Locale; index?: number; showService?: boolean }) {
  const s = getService(a.service)!;
  return (
    <TLink href={paths.application(a)} className="app-card" style={{ ["--accent" as string]: s.color, ["--i" as string]: index }}>
      <span className="app-card__top">
        {showService ? (
          <span className="app-card__svc">
            <span className="chip__dot" />
            {tr(s.short, locale)}
          </span>
        ) : (
          <span className="app-card__num">{String(index + 1).padStart(2, "0")}</span>
        )}
        <span className="app-card__arrow">
          <Icon name="arrowUpRight" size={18} stroke={2.2} />
        </span>
      </span>
      <span className="app-card__title">{tr(a.title, locale)}</span>
      <span className="app-card__text">{tr(a.summary, locale)}</span>
    </TLink>
  );
}

export function ServiceCard({ s, locale, index = 0 }: { s: Service; locale: Locale; index?: number }) {
  return (
    <TLink href={paths.service(s)} className="svc-card" style={{ ["--accent" as string]: s.color, ["--i" as string]: index }}>
      <span className="svc-card__icon">
        <Icon name={s.icon} size={26} stroke={1.5} />
      </span>
      <span className="svc-card__title">{tr(s.title, locale)}</span>
      <span className="svc-card__text">{tr(s.intro, locale)}</span>
      <span className="svc-card__foot">
        {applicationsFor(s.slug).length} {locale === "nl" ? "toepassingen" : "applications"}
        <Icon name="arrowRight" size={18} />
      </span>
    </TLink>
  );
}

export function SectorCard({ s, locale, index = 0 }: { s: Sector; locale: Locale; index?: number }) {
  return (
    <TLink href={paths.sector(s)} className="sector-card" style={{ ["--i" as string]: index }}>
      <span className="sector-card__icon">
        <Icon name={s.icon} size={28} stroke={1.5} />
      </span>
      <span className="sector-card__title">{tr(s.title, locale)}</span>
      <span className="sector-card__text">{tr(s.intro, locale)}</span>
      <span className="sector-card__arrow">
        <Icon name="arrowUpRight" size={20} stroke={2} />
      </span>
    </TLink>
  );
}

export function SectionHead({
  kicker,
  title,
  text,
  center,
  children,
  id,
}: {
  kicker?: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}${children ? " section-head--split" : ""}`}>
      <div className="stack-sm">
        {kicker ? (
          <p className={`kicker${center ? " kicker--center" : ""}`} data-reveal="fade">
            {kicker}
          </p>
        ) : null}
        <h2 className="h2" id={id} data-reveal="up">
          {title}
        </h2>
        {text ? (
          <p className="lead" data-reveal="up" style={{ ["--d" as string]: "0.1s", maxWidth: 720, marginInline: center ? "auto" : undefined }}>
            {text}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
