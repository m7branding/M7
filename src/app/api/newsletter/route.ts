import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { baseUrl, clientIp, limited, optinParams } from "@/lib/mail/guard";
import { mailConfig, sendMail } from "@/lib/mail/resend";
import { optinMail } from "@/lib/mail/templates";

/**
 * Nieuwsbrief-aanmelding.
 *
 * Met RESEND_API_KEY: double opt-in. We sturen een bevestigingsmail in M7-huisstijl; pas na de klik
 * (/api/newsletter/confirm) komt het adres in Resend (Contacts, optioneel in RESEND_SEGMENT_ID).
 * Zonder Resend: door naar NEWSLETTER_WEBHOOK_URL (bv. Make → een ander mailprogramma).
 */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  if (body.url) return NextResponse.json({ ok: true, confirm: true }); // honeypot
  const email = String(body.email || "").trim().toLowerCase().slice(0, 200);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) return NextResponse.json({ ok: false }, { status: 422 });
  const locale = body.locale === "en" ? "en" : "nl";

  if (mailConfig().enabled) {
    if (limited(`news:${clientIp(req)}`, 5, 10 * 60_000)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    // Hetzelfde adres vaker dan 2× per uur: niets nieuws sturen, wel netjes "check je inbox" tonen.
    if (limited(`news-to:${email}`, 2, 60 * 60_000)) return NextResponse.json({ ok: true, confirm: true });
    const base = baseUrl(req);
    const m = optinMail(`${base}/api/newsletter/confirm?${optinParams(email, locale)}`, base, locale);
    const ok = await sendMail({ to: [email], ...m, tags: [{ name: "form", value: "newsletter_optin" }] });
    return NextResponse.json({ ok, confirm: true }, { status: ok ? 200 : 502 });
  }

  if (!site.forms.newsletterWebhook) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  const res = await fetch(site.forms.newsletterWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, locale, source: "m7branding.com", receivedAt: new Date().toISOString() }),
  }).catch(() => null);
  return NextResponse.json({ ok: !!res?.ok }, { status: res?.ok ? 200 : 502 });
}
