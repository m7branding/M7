import { CaseChapter } from "@/components/case/CaseChapter";
import { CaseGallery } from "@/components/case/CaseGallery";
import { CaseMedia } from "@/components/case/CaseMedia";
import { CaseShowcase } from "@/components/case/CaseShowcase";
import { CaseStatement } from "@/components/case/CaseStatement";
import { ScrollWords } from "@/components/case/ScrollWords";
import { SplitText } from "@/components/motion/SplitText";
import { RichText } from "@/components/ui/RichText";
import type { Case, Locale } from "@/content/types";
import { tr } from "@/lib/i18n";
import type { CaseBlock } from "@/lib/story";

/** [[slug|label]] → label, [[slug]] → slug: de intro is platte tekst die woord voor woord oplicht. */
const plain = (s: string) => s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, a: string, b?: string) => b ?? a);

/**
 * Rendert het verhaal van een case in de cinematische opmaak: intro die oplicht op de scroll,
 * masonry-secties, grote hoofdstukken, schermvullende quotes/statements en beeld, de showcase,
 * beeld naast tekst, tijdlijn/checklist en de cijfers.
 */
export function CaseStory({ blocks, c, locale }: { blocks: CaseBlock[]; c: Case; locale: Locale }) {
  let gallery = 0;
  return (
    <>
      {blocks.map((b, i) => (
        <Block key={i} b={b} c={c} locale={locale} i={i} seed={b.type === "masonry" ? gallery++ : 0} />
      ))}
    </>
  );
}

function Block({ b, c, locale, i, seed }: { b: CaseBlock; c: Case; locale: Locale; i: number; seed: number }) {
  switch (b.type) {
    case "intro":
      return (
        <section className="cx-intro">
          <div className="container">
            <ScrollWords text={plain(tr(b.text, locale))} className="cx-intro__text" />
          </div>
        </section>
      );

    case "showcase":
      return <CaseShowcase slug={b.slug} color={c.color} label={locale === "nl" ? `${c.client}: geanimeerde showcase` : `${c.client}: animated showcase`} />;

    case "text":
      return <CaseChapter title={b.h} body={b.body} quote={b.quote} locale={locale} id={`story-${i}`} />;

    case "masonry":
      return <CaseGallery images={b.images} client={c.client} locale={locale} seed={seed} />;

    case "media":
      return <CaseMedia image={b.image} video={b.video} poster={b.poster} position={b.position} quote={b.quote ? tr(b.quote, locale) : undefined} alt={c.client} />;

    case "quote":
      return <CaseStatement text={b.text} cite={b.cite} role={b.role} avatar={b.avatar} color={c.color} locale={locale} />;

    case "split":
      return (
        <section className="cx-split">
          <div className={`container cx-split__grid${b.reverse ? " is-reverse" : ""}`}>
            <figure className="cx-split__img" data-reveal="cx">
              <img src={b.image} alt={tr(b.h, locale)} loading="lazy" decoding="async" />
            </figure>
            <div className="cx-split__text">
              <SplitText as="h2" className="cx-split__title" parts={tr(b.h, locale)} />
              <div data-reveal="up" style={{ ["--d" as string]: "0.2s" }}>
                <RichText text={tr(b.body, locale)} className="cx-chapter__text" locale={locale} />
              </div>
            </div>
          </div>
        </section>
      );

    case "timeline": {
      const checklist = b.style === "checklist" || !b.items.some((it) => it.date);
      return (
        <section className="cx-tl">
          <div className="container">
            {b.title ? <SplitText as="h2" className="cx-tl__title" parts={tr(b.title, locale)} /> : null}
            {checklist ? (
              <ul className="cx-list" data-stagger="">
                {b.items.map((it, k) => (
                  <li key={k}>
                    <span className="cx-list__n" aria-hidden="true">
                      {String(k + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong>{tr(it.label, locale)}</strong>
                      {it.text ? <span>{tr(it.text, locale)}</span> : null}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <ol className="tl" data-reveal="fade">
                {b.items.map((it, k) => (
                  <li key={k} style={{ ["--k" as string]: k }}>
                    <span className="tl__dot" aria-hidden="true" />
                    {it.date ? <span className="tl__date">{it.date}</span> : null}
                    <strong>{tr(it.label, locale)}</strong>
                    {it.text ? <p>{tr(it.text, locale)}</p> : null}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      );
    }

    case "results":
      return c.results?.length ? (
        <section className="cx-results">
          <div className="container">
            <dl className="cx-results__list" data-stagger="">
              {c.results.map((r) => (
                <div key={r.value}>
                  <dt>{r.value}</dt>
                  <dd>{tr(r.label, locale)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null;
  }
}
