import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { RichText } from "@/components/ui/RichText";
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
  return buildMetadata({ locale: params.lang, path: `/${params.doc}`, title: `${tr(doc.title, params.lang)} | M7`, description: tr(doc.body, params.lang).slice(0, 155), noindex: true });
}

export default function LegalPage({ params }: P) {
  const doc = legalDocs[params.doc];
  if (!doc) notFound();
  const locale = params.lang;
  const d = getDict(locale);
  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: tr(doc.title, locale), path: `/${params.doc}` },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={doc.updated}
        title={tr(doc.title, locale)}
      />
      <section className="section section--tight">
        <div className="container container--narrow legal">
          <RichText text={tr(doc.body, locale)} className="body" />
        </div>
      </section>
    </>
  );
}
