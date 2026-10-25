import { ScrollShowcase } from "@/components/motion/ScrollShowcase";
import { SplitText } from "@/components/motion/SplitText";
import { ChapterBlock } from "@/components/ui/Chapter";
import { RichText } from "@/components/ui/RichText";
import type { Case, Locale, StoryBlock } from "@/content/types";
import { tr } from "@/lib/i18n";

/** Rendert het verhaal van een case: tekst, masonry, beeld/video, quotes, split en tijdlijn. */
export function CaseStory({ blocks, c, locale }: { blocks: StoryBlock[]; c: Case; locale: Locale }) {
  return (
    <>
      {blocks.map((b, i) => (
        <Block key={i} b={b} c={c} locale={locale} i={i} />
      ))}
    </>
  );
}

function Block({ b, c, locale, i }: { b: StoryBlock; c: Case; locale: Locale; i: number }) {
  switch (b.type) {
    case "intro":
      return (
        <section className="section story-intro">
          <div className="container story-intro__inner">
            {b.kicker ? (
              <p className="chapter__kicker" data-reveal="fade">
                {tr(b.kicker, locale)}
              </p>
            ) : null}
            <SplitText as="p" className="story-intro__text" parts={tr(b.text, locale)} />
          </div>
        </section>
      );

    case "text":
      return <ChapterBlock c={b} locale={locale} id={`story-${i}`} />;

    case "masonry":
      return (
        <section className="story-masonry" aria-label={`${c.client}: beelden`}>
          <div className={`masonry${b.images.length <= 4 ? " masonry--2" : ""}`}>
            {b.images.map((img, k) => (
              <figure key={img.src + k} className="masonry__item" data-reveal="clip" style={{ ["--d" as string]: `${(k % 3) * 0.08}s` }}>
                <img src={img.src} alt={img.alt ? tr(img.alt, locale) : `${c.client} ${k + 1}`} loading="lazy" />
                {img.caption ? <figcaption>{tr(img.caption, locale)}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>
      );

    case "media":
      return (
        <section className="story-media">
          <ScrollShowcase image={b.image} video={b.video} poster={b.poster} position={b.position} alt={c.client} quote={b.quote ? tr(b.quote, locale) : undefined} />
        </section>
      );

    case "quote":
      return (
        <section className="section story-quote">
          <figure className="container story-quote__inner">
            <span className="story-quote__mark" aria-hidden="true">
              “
            </span>
            <SplitText as="p" className="story-quote__text" parts={tr(b.text, locale)} />
            {b.cite ? (
              <figcaption className="story-quote__cite" data-reveal="fade" style={{ ["--d" as string]: "0.3s" }}>
                {b.avatar ? <img src={b.avatar} alt="" width={48} height={48} loading="lazy" /> : null}
                <span>
                  <strong>{b.cite}</strong>
                  {b.role ? <span>{tr(b.role, locale)}</span> : null}
                </span>
              </figcaption>
            ) : null}
          </figure>
        </section>
      );

    case "split":
      return (
        <section className="section story-split">
          <div className={`container story-split__grid${b.reverse ? " is-reverse" : ""}`}>
            <figure className="story-split__img" data-reveal="clip">
              <img src={b.image} alt={tr(b.h, locale)} loading="lazy" />
            </figure>
            <div className="story-split__text">
              {b.kicker ? (
                <p className="chapter__kicker" data-reveal="fade">
                  {tr(b.kicker, locale)}
                </p>
              ) : null}
              <h2 className="h3 chapter__title" data-reveal="up">
                {tr(b.h, locale)}
              </h2>
              <div data-reveal="up">
                <RichText text={tr(b.body, locale)} className="body" locale={locale} />
              </div>
            </div>
          </div>
        </section>
      );

    case "timeline": {
      const checklist = b.style === "checklist" || !b.items.some((it) => it.date);
      return (
        <section className="section story-tl">
          <div className="container">
            {b.title ? (
              <h2 className="h3 chapter__title story-tl__title" data-reveal="up">
                {tr(b.title, locale)}
              </h2>
            ) : null}
            {checklist ? (
              <ul className="checklist" data-stagger="">
                {b.items.map((it, k) => (
                  <li key={k}>
                    <span className="checklist__ic" aria-hidden="true">
                      <img src="/brand/check.svg" alt="" width={16} height={13} />
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
        <section className="section section--tight">
          <div className="container">
            <dl className="svc-hero__stats case-results" data-stagger="">
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
