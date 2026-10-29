import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalText, parseLegal } from "@/components/legal/LegalText";
import { TLink } from "@/components/motion/TLink";
import { PageHero } from "@/components/sections/PageHero";
import { legalDocs } from "@/content/legal";
import { LOCALES, type Locale } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type P = { params: { lang: Locale; doc: string } };

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((lang) => Object.keys(legalDocs).map((doc) => ({ lang, doc })));
}

export function generateMetadata({ params }: P): Metadata {
  const doc = legalDocs[params.doc];
  if (!doc) return {};
  return buildMetadata({
    locale: params.lang,
    path: `/${params.doc}`,
    title: `${tr(doc.title, params.lang)} | M7`,
    description: tr(doc.description, params.lang),
    noindex: true,
  });
}

export default function LegalPage({ params }: P) {
  const doc = legalDocs[params.doc];
  if (!doc) notFound();
  const locale = params.lang;
  const nl = locale === "nl";
  const d = getDict(locale);
  const blocks = parseLegal(tr(doc.body, locale));
  const toc = blocks.flatMap((b) => (b.t === "h2" ? [{ id: b.id, text: b.text }] : []));
  const others = Object.entries(legalDocs).filter(([slug]) => slug !== params.doc);

  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: tr(doc.title, locale), path: `/${params.doc}` },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={tr(doc.updated, locale)}
        title={tr(doc.title, locale)}
      />
      <section className="section section--tight">
        <div className={`container legal${toc.length >= 4 ? " legal--toc" : ""}`}>
          {toc.length >= 4 ? (
            <nav className="legal__toc" aria-label={nl ? "Inhoud" : "Contents"}>
              <p className="legal__toc-title">{nl ? "Inhoud" : "Contents"}</p>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} data-no-transition="">
                      {t.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          <div className="legal__main">
            <LegalText blocks={blocks} locale={locale} />
            <aside className="legal__more" aria-label={nl ? "Andere documenten" : "Other documents"}>
              <p className="legal__toc-title">{nl ? "Ook handig" : "Also useful"}</p>
              <ul>
                {others.map(([slug, o]) => (
                  <li key={slug}>
                    <TLink href={`/${slug}`} className="link-dash">
                      {tr(o.title, locale)}
                    </TLink>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
