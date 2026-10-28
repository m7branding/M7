import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { support } from "@/content/support";

/**
 * Supportticket (modal in de footer / op de contactpagina, #support).
 * Stuurt het ticket door naar SUPPORT_WEBHOOK_URL (bv. een Make-, n8n- of
 * helpdesk-webhook), met CONTACT_WEBHOOK_URL als terugval. De webhook regelt
 * de mail naar support@m7branding.com (`to`). Zonder webhook geeft de API 503
 * terug en toont de modal een mailto-fallback met het ticket ingevuld.
 */

const KINDS = ["problem", "request", "question"] as const;
const URGENCIES = ["low", "today", "urgent"] as const;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (body.fax) return NextResponse.json({ ok: true }); // honeypot

  const kind = str(body.kind, 20);
  const email = str(body.email, 200);
  const ticket = {
    ref: str(body.ref, 40),
    kind,
    kindLabel: str(body.kindLabel, 80),
    urgency: URGENCIES.includes(body.urgency as (typeof URGENCIES)[number]) ? (body.urgency as string) : undefined,
    requestTypes: Array.isArray(body.requestTypes) ? body.requestTypes.map((x) => str(x, 40)).filter(Boolean).slice(0, 10) : undefined,
    url: str(body.url, 500) || undefined,
    message: str(body.message, 5000),
    name: str(body.name, 120),
    company: str(body.company, 160),
    email,
    phone: str(body.phone, 40) || undefined,
    website: str(body.website, 300) || undefined,
    locale: str(body.locale, 5) || "nl",
    page: str(body.page, 500) || undefined,
  };

  if (
    !KINDS.includes(kind as (typeof KINDS)[number]) ||
    !ticket.name ||
    !ticket.company ||
    !EMAIL_RE.test(email) ||
    ticket.message.length < 3 ||
    (kind === "problem" && !ticket.urgency)
  ) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const webhook = process.env.SUPPORT_WEBHOOK_URL || site.forms.contactWebhook;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const urgent = kind === "problem" && ticket.urgency === "urgent";
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "support",
      to: support.email,
      replyTo: email,
      subject: `[Support] ${urgent ? "SPOED · " : ""}${ticket.kindLabel || kind} · ${ticket.company}${ticket.ref ? ` (${ticket.ref})` : ""}`,
      ...ticket,
      source: "m7branding.com",
      receivedAt: new Date().toISOString(),
    }),
  }).catch(() => null);
  return NextResponse.json({ ok: !!res?.ok }, { status: res?.ok ? 200 : 502 });
}
