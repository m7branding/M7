import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { support } from "@/content/support";
import { baseUrl, clientIp, limited } from "@/lib/mail/guard";
import { mailConfig, sendMail } from "@/lib/mail/resend";
import { ticketToClient, ticketToTeam, type Ticket } from "@/lib/mail/templates";

/**
 * Supportticket (modal in de footer / op de contactpagina, #support).
 *
 * Met RESEND_API_KEY gaat het ticket als mail naar SUPPORT_MAIL_TO (standaard hello@),
 * reply-to = de klant, en krijgt de klant een bevestiging met Martijn in cc.
 * Met SUPPORT_WEBHOOK_URL (of CONTACT_WEBHOOK_URL) gaat het daarnaast naar een webhook
 * (bv. Make, n8n of een helpdesk). Zonder beide geeft de API 503 terug en toont de modal
 * een mailto-fallback met het ticket ingevuld.
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
    /** Leesbare samenvatting van het hele ticket (handig als mailtekst in Make/n8n). */
    summary: str(body.summary, 8000) || undefined,
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

  const cfg = mailConfig();
  const webhook = process.env.SUPPORT_WEBHOOK_URL || site.forms.contactWebhook;
  if (!cfg.enabled && !webhook) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const urgent = kind === "problem" && ticket.urgency === "urgent";
  const subject = `[Support] ${urgent ? "SPOED · " : ""}${ticket.kindLabel || kind} · ${ticket.company}${ticket.ref ? ` (${ticket.ref})` : ""}`;

  let mailed = false;
  if (cfg.enabled) {
    if (limited(`support:${clientIp(req)}`, 6, 10 * 60_000)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }
    const t: Ticket = { ...ticket, locale: ticket.locale === "en" ? "en" : "nl" };
    const base = baseUrl(req);
    const id = createHash("sha256").update([email, kind, ticket.message].join("|")).digest("hex").slice(0, 40);

    const team = ticketToTeam(t, base, subject);
    mailed = await sendMail({
      to: cfg.supportTo,
      replyTo: [email],
      ...team,
      idempotencyKey: `support-team-${id}`,
      tags: [{ name: "form", value: urgent ? "support_urgent" : "support" }],
    });
    if (!limited(`to:${email.toLowerCase()}`, 3, 60 * 60_000)) {
      const client = ticketToClient(t, base, { ccMartijn: cfg.cc.some((c) => /^martijn@/i.test(c)) });
      await sendMail({
        to: [email],
        cc: cfg.cc,
        replyTo: [site.email],
        ...client,
        idempotencyKey: `support-client-${id}`,
        tags: [{ name: "form", value: "support_confirm" }],
      });
    }
  }

  let hooked = false;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "support",
        to: support.email,
        replyTo: email,
        subject,
        ...ticket,
        source: "m7branding.com",
        receivedAt: new Date().toISOString(),
      }),
    }).catch(() => null);
    hooked = !!res?.ok;
  }

  const ok = mailed || hooked;
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}
