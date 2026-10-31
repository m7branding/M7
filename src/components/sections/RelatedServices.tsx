import { TLink } from "@/components/motion/TLink";
import { Mockup } from "@/components/mockups";
import { Showcase, hasShowcase } from "@/components/showcase";
import { Icon } from "@/components/ui/Icon";
import type { Locale, Service } from "@/content/types";
import { allServices } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import st from "./RelatedServices.module.css";
import { LazyStage, RelatedSlider } from "./RelatedSlider";

const L = {
  title: { nl: "Alles onder één dak", en: "All under one roof" },
  pairs: { nl: "Past goed bij", en: "Pairs well with" },
  inHouse: { nl: "Ook in huis", en: "Also in-house" },
  region: { nl: "Diensten die goed combineren", en: "Services that pair well" },
  slide: { nl: "van", en: "of" },
};

/**
 * Onderaan een dienstpagina: een rustige slider met compacte dienstkaarten,
 * elk met dezelfde geanimeerde showcase als de stapelkaarten op home.
 * Eerst de diensten die goed combineren (`service.related`), daarna de rest.
 */
export function RelatedServices({ service, locale }: { service: Service; locale: Locale }) {
  const d = getDict(locale);
  const all = allServices().filter((x) => x.slug !== service.slug);
  const related = service.related.map((r) => all.find((x) => x.slug === r)).filter((x): x is Service => !!x);
  const list = [...related, ...all.filter((x) => !related.includes(x))];

  return (
    <section className={`section ${st.section}`} aria-labelledby="related-title">
      <RelatedSlider
        label={tr(L.region, locale)}
        labels={{ prev: d.cta.prev, next: d.cta.next, of: tr(L.slide, locale) }}
        head={
          <div className="stack-sm">
            <p className="kicker" data-reveal="fade">
              {d.service.related}
            </p>
            <h2 className="h2" id="related-title" data-reveal="up">
              {tr(L.title, locale)}
            </h2>
          </div>
        }
      >
        {list.map((s) => {
          const title = tr(s.title, locale);
          return (
            <article key={s.slug} className={st.card} style={{ ["--accent" as string]: s.color }}>
              <div className={st.stage}>
                <LazyStage
                  fallback={
                    <span className={st.placeholder} aria-hidden="true">
                      <Icon name={s.icon} size={44} stroke={1.2} />
                    </span>
                  }
                >
                  {hasShowcase(s.slug) ? (
                    <Showcase slug={s.slug} />
                  ) : (
                    <div className={st.mockup}>
                      <Mockup kind={s.mockup} accent={s.color} />
                    </div>
                  )}
                </LazyStage>
              </div>
              <div className={st.body}>
                <p className={`${st.tag}${related.includes(s) ? ` ${st.tagOn}` : ""}`}>
                  <span className={st.tagDot} aria-hidden="true" />
                  {related.includes(s) ? `${tr(L.pairs, locale)} ${tr(service.short, locale)}` : tr(L.inHouse, locale)}
                </p>
                <h3 className={st.title}>
                  <TLink href={paths.service(s)} className={st.link} draggable={false}>
                    {title}
                  </TLink>
                </h3>
                <p className={st.intro}>{tr(s.intro, locale)}</p>
                <p className={st.foot}>
                  <span>
                    {d.cta.discover} {tr(s.short, locale)}
                  </span>
                  <span className={st.arrow} aria-hidden="true">
                    <Icon name="arrowRight" size={18} stroke={2} />
                  </span>
                </p>
              </div>
            </article>
          );
        })}
      </RelatedSlider>
    </section>
  );
}
