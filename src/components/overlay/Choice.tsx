"use client";

/* Gedeelde bouwstenen voor de support- en intake-flow:
   grote keuzekaarten, compacte chips en formuliervelden. */

export function Check({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/** Grote, goed tikbare keuzekaart (single of multi). */
export function ChoiceCard({
  selected,
  onSelect,
  icon,
  title,
  desc,
  accent,
  badge,
  shortcut,
  layout = "row",
  autoFocus,
  className,
}: {
  selected: boolean;
  onSelect: () => void;
  icon?: React.ReactNode;
  title: React.ReactNode;
  desc?: React.ReactNode;
  /** Accentkleur (bv. de kleur van een dienst). */
  accent?: string;
  badge?: React.ReactNode;
  /** Sneltoets (1–9), wordt als klein label getoond. */
  shortcut?: number;
  layout?: "row" | "tile";
  autoFocus?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`ov-choice ov-choice--${layout}${selected ? " is-on" : ""}${className ? ` ${className}` : ""}`}
      aria-pressed={selected}
      onClick={onSelect}
      style={accent ? ({ ["--acc" as string]: accent } as React.CSSProperties) : undefined}
      {...(autoFocus ? { "data-autofocus": "" } : {})}
    >
      {icon ? <span className="ov-choice__icon">{icon}</span> : null}
      <span className="ov-choice__txt">
        <span className="ov-choice__title">
          {title}
          {badge ? <span className="ov-choice__badge">{badge}</span> : null}
        </span>
        {desc ? <span className="ov-choice__desc">{desc}</span> : null}
      </span>
      <span className="ov-choice__mark" aria-hidden="true">
        {shortcut && !selected ? <span className="ov-choice__key">{shortcut}</span> : <Check />}
      </span>
    </button>
  );
}

/** Compacte chip: vinkje (multi), rondje (single/segment) of een eigen icoon. */
export function ChoiceChip({
  selected,
  onSelect,
  children,
  accent,
  icon,
  radio,
}: {
  selected: boolean;
  onSelect: () => void;
  children: React.ReactNode;
  accent?: string;
  /** Eigen icoon (bv. van een dienst); wordt een vinkje zodra gekozen. */
  icon?: React.ReactNode;
  /** Enkele keuze: rond bolletje i.p.v. vinkje. */
  radio?: boolean;
}) {
  const box = radio ? "ov-chip__box ov-chip__box--radio" : icon ? "ov-chip__box ov-chip__box--icon" : "ov-chip__box";
  return (
    <button
      type="button"
      className={`ov-chip${selected ? " is-on" : ""}`}
      aria-pressed={selected}
      onClick={onSelect}
      style={accent ? ({ ["--acc" as string]: accent } as React.CSSProperties) : undefined}
    >
      <span className={box} aria-hidden="true">
        {radio ? <span className="ov-chip__dot" /> : icon && !selected ? icon : <Check size={12} />}
      </span>
      {children}
    </button>
  );
}

/** Label + veld + hint/fout, met de juiste aria-koppelingen. */
export function Field({
  id,
  label,
  optional,
  hint,
  error,
  children,
  className,
}: {
  id: string;
  label: React.ReactNode;
  optional?: string;
  hint?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`ov-field${error ? " is-invalid" : ""}${className ? ` ${className}` : ""}`}>
      <label htmlFor={id} className="ov-field__label">
        {label}
        {optional ? <span className="ov-field__opt">{optional}</span> : null}
      </label>
      {children}
      {error ? (
        <p className="ov-field__err" id={`${id}-err`}>
          {error}
        </p>
      ) : hint ? (
        <p className="ov-field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}

/** aria-props voor een input binnen <Field>. */
export const aria = (id: string, error?: string, hint?: boolean) => ({
  id,
  "aria-invalid": error ? true : undefined,
  "aria-describedby": error ? `${id}-err` : hint ? `${id}-hint` : undefined,
});
