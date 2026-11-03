import { site } from "@/content/site";
import { readOptin } from "@/lib/mail/guard";
import { subscribe } from "@/lib/mail/resend";
import { optinPage } from "@/lib/mail/templates";

/**
 * Bevestigingslink uit de double opt-in-mail. Controleert de handtekening en de geldigheid (14 dagen),
 * zet het adres in Resend en toont een korte bevestigingspagina in M7-stijl.
 * Staat NEWSLETTER_WEBHOOK_URL ook ingesteld, dan krijgt die de bevestigde inschrijving mee.
 */
export const dynamic = "force-dynamic";

const page = (html: string, status: number) =>
  new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex", "Cache-Control": "no-store" } });

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams;
  // De pagina komt van onze eigen site: logo en links mogen relatief
  const base = "";
  const opt = readOptin(q);
  if (!opt) return page(optinPage("invalid", base, q.get("l") === "en" ? "en" : "nl"), 400);

  const ok = await subscribe(opt.email);
  if (ok && site.forms.newsletterWebhook) {
    await fetch(site.forms.newsletterWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: opt.email, locale: opt.locale, doubleOptIn: true, source: "m7branding.com", confirmedAt: new Date().toISOString() }),
    }).catch(() => null);
  }
  return page(optinPage(ok ? "ok" : "error", base, opt.locale), ok ? 200 : 502);
}
