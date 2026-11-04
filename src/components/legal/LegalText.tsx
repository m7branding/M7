import { TLink } from "@/components/motion/TLink";
import { site } from "@/content/site";
import { support } from "@/content/support";
import type { Locale } from "@/content/types";
import { ConsentReset } from "./ConsentReset";

/**
 * Rendert juridische teksten uit src/content/legal.ts.
 * Opmaak: "## kop", "### subkop", "1. genummerd", "- opsomming", "  - opsomming binnen een punt",
 * **vet**, [tekst](pad of url) en {{tokens}} voor bedrijfsgegevens.
 */

type Block =
  | { t: "h2"; text: string; id: string }
  | { t: "h3"; text: string; id: string }
  | { t: "p"; lines: string[] }
  | { t: "ol"; items: { text: string; sub: string[] }[] }
  | { t: "ul"; items: { text: string; sub: string[] }[] }
  | { t: "consent" };

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function fill(text: string) {
  return text
    .replaceAll("{{company}}", site.legalName)
    .replaceAll("{{street}}", site.address.street)
    .replaceAll("{{postal}}", site.address.postalCode)
    .replaceAll("{{city}}", site.address.city)
    .replaceAll("{{email}}", site.email)
    .replaceAll("{{support}}", support.email);
}

export function parseLegal(raw: string): Block[] {
  const out: Block[] = [];
  let list: { t: "ol" | "ul"; items: { text: string; sub: string[] }[] } | null = null;
  let para: Extract<Block, { t: "p" }> | null = null;
  const close = () => {
    list = null;
    para = null;
  };
  for (const line of fill(raw).split("\n")) {
    const l = line.trimEnd();
    if (!l.trim()) {
      close();
      continue;
    }
    if (l.trim() === "{{consent-reset}}") {
      close();
      out.push({ t: "consent" });
      continue;
    }
    const h = /^(#{2,3})\s+(.*)$/.exec(l);
    if (h) {
      close();
      out.push({ t: h[1]!.length === 2 ? ("h2" as const) : ("h3" as const), text: h[2]!, id: slugify(h[2]!) });
      continue;
    }
    const sub = /^\s{2,}-\s+(.*)$/.exec(l);
    if (sub && list && list.items.length) {
      list.items[list.items.length - 1]!.sub.push(sub[1]!);
      continue;
    }
    const ol = /^\d+\.\s+(.*)$/.exec(l);
    const ul = /^-\s+(.*)$/.exec(l);
    if (ol || ul) {
      const kind = ol ? "ol" : "ul";
      para = null;
      if (!list || list.t !== kind) {
        list = { t: kind, items: [] };
        out.push(list as Block);
      }
      list.items.push({ text: (ol ?? ul)![1]!, sub: [] });
      continue;
    }
    list = null;
    if (!para) {
      para = { t: "p", lines: [] };
      out.push(para);
    }
    para.lines.push(l);
  }
  return out;
}

/** **vet** en [tekst](href); interne paden lokaliseert TLink zelf. */
function Inline({ text }: { text: string; locale?: Locale }) {
  const parts: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) parts.push(<strong key={m.index}>{m[1]}</strong>);
    else {
      const href = m[3]!;
      parts.push(
        // "nl:/pad": altijd de Nederlandse pagina (bv. "de Nederlandse versie is leidend")
        href.startsWith("nl:/") ? (
          <a key={m.index} href={href.slice(3)} hrefLang="nl">
            {m[2]}
          </a>
        ) : href.startsWith("/") ? (
          <TLink key={m.index} href={href}>
            {m[2]}
          </TLink>
        ) : (
          <a key={m.index} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
            {m[2]}
          </a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export function LegalText({ blocks, locale }: { blocks: Block[]; locale: Locale }) {
  return (
    <div className="legal__text rich body">
      {blocks.map((b, i) => {
        if (b.t === "h2")
          return (
            <h2 key={i} id={b.id} className="legal__h2">
              {b.text}
            </h2>
          );
        if (b.t === "h3")
          return (
            <h3 key={i} id={b.id} className="legal__h3">
              {b.text}
            </h3>
          );
        if (b.t === "consent") return <ConsentReset key={i} locale={locale} />;
        if (b.t === "p")
          return (
            <p key={i}>
              {b.lines.map((l, j) => (
                <span key={j}>
                  {j > 0 ? <br /> : null}
                  <Inline text={l} locale={locale} />
                </span>
              ))}
            </p>
          );
        const Tag = b.t;
        return (
          <Tag key={i} className={`legal__${b.t}`}>
            {b.items.map((it, j) => (
              <li key={j}>
                <Inline text={it.text} locale={locale} />
                {it.sub.length ? (
                  <ul>
                    {it.sub.map((s, k) => (
                      <li key={k}>
                        <Inline text={s} locale={locale} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </Tag>
        );
      })}
    </div>
  );
}
