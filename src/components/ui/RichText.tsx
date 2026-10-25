import { TLink } from "@/components/motion/TLink";
import type { Locale } from "@/content/types";
import { REF_RE, resolveRef } from "@/lib/inline";
import { Icon } from "./Icon";

/** Tekst met inline dienst-labels: [[slug]] wordt een klikbaar label met het dienst-icoon. */
function Inline({ text, locale }: { text: string; locale?: Locale }) {
  if (!text.includes("[[")) return <>{text}</>;
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of Array.from(text.matchAll(REF_RE))) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    const ref = locale ? resolveRef(m[1], m[2], locale) : null;
    out.push(
      ref ? (
        <TLink key={i} href={ref.href} className="inlink" style={{ ["--accent" as string]: ref.color }}>
          <span className="inlink__ic" aria-hidden="true">
            <Icon name={ref.icon} size={13} stroke={2} />
          </span>
          {ref.label}
        </TLink>
      ) : (
        (m[2] ?? m[1])
      ),
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** Rendert platte content-tekst: alinea's (\n\n), lijsten ("- ") en inline labels ([[slug]]). */
export function RichText({ text, className, locale }: { text: string; className?: string; locale?: Locale }) {
  const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const list = (items: string[], key?: number) => (
    <ul key={key}>
      {items.map((l, j) => (
        <li key={j}>
          <Inline text={l.trim().slice(2)} locale={locale} />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`rich${className ? " " + className : ""}`}>
      {blocks.map((b, i) => {
        const lines = b.split("\n");
        const items = lines.filter((l) => l.trim().startsWith("- "));
        if (items.length && items.length === lines.length) return list(items, i);
        if (items.length) {
          const intro = lines.filter((l) => !l.trim().startsWith("- "));
          return (
            <div key={i}>
              {intro.map((l, j) => (
                <p key={j}>
                  <Inline text={l} locale={locale} />
                </p>
              ))}
              {list(items)}
            </div>
          );
        }
        return (
          <p key={i}>
            <Inline text={b} locale={locale} />
          </p>
        );
      })}
    </div>
  );
}
