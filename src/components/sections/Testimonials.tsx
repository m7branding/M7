import type { Locale } from "@/content/types";
import { publishedReviews } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { TestimonialSlider } from "./TestimonialSlider";

/** Server-wrapper: vertaalt de reviews en geeft ze aan de slider. */
export function Testimonials({ locale, service }: { locale: Locale; service?: string }) {
  const d = getDict(locale);
  const list = publishedReviews().filter((r) => !service || r.services.includes(service as never));
  const items = (list.length ? list : publishedReviews()).map((r) => ({
    id: r.id,
    author: r.author,
    role: `${tr(r.role, locale)} ${locale === "nl" ? "bij" : "of"} ${r.company}`,
    avatar: r.avatar,
    quote: tr(r.quote, locale),
    draft: !!r.draft,
  }));
  const avatars = ["/media/people/client-2.webp", "/media/people/client-3.webp", "/media/people/client-4.webp", "/media/people/client-5.webp", "/media/people/client-6.webp"];
  return <TestimonialSlider items={items} avatars={avatars} labels={{ prev: d.cta.prev, next: d.cta.next, more: d.cta.readMore, less: d.cta.readLess, draft: d.misc.showDrafts }} />;
}
