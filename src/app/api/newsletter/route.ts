import { NextResponse } from "next/server";
import { site } from "@/content/site";

/** Nieuwsbrief-aanmelding → NEWSLETTER_WEBHOOK_URL (bv. Make → Mailchimp/Brevo). */
export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({ email: "" }));
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email))) return NextResponse.json({ ok: false }, { status: 422 });
  if (!site.forms.newsletterWebhook) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  const res = await fetch(site.forms.newsletterWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source: "m7branding.com", receivedAt: new Date().toISOString() }),
  }).catch(() => null);
  return NextResponse.json({ ok: !!res?.ok }, { status: res?.ok ? 200 : 502 });
}
