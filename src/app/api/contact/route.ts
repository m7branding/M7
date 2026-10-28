import { NextResponse } from "next/server";
import { site } from "@/content/site";

/**
 * Contactformulier én de korte intake (`type: "intake"`, met `answers`).
 * Stuurt de aanvraag door naar CONTACT_WEBHOOK_URL (bv. een Make-, n8n- of
 * Odoo-webhook). Zonder webhook geeft de API 503 terug en tonen formulier
 * en intake een mailto-fallback.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  const email = String(body.email || "");
  const validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  // Terugbelverzoek uit de intake: naam + telefoon volstaat (e-mail optioneel)
  const callback = body.type === "intake" && body.callback === true;
  const reachable = callback ? String(body.phone || "").replace(/[^\d]/g, "").length >= 8 : validEmail;
  if (!body.name || !reachable || !body.message) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }
  if (!site.forms.contactWebhook) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }
  const res = await fetch(site.forms.contactWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, source: "m7branding.com", receivedAt: new Date().toISOString() }),
  }).catch(() => null);
  return NextResponse.json({ ok: !!res?.ok }, { status: res?.ok ? 200 : 502 });
}
