import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { allServices } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { baseUrl, clientIp, limited } from "@/lib/mail/guard";
import { mailConfig, sendMail } from "@/lib/mail/resend";
import { leadToClient, leadToTeam, type Lead } from "@/lib/mail/templates";

/**
 * Contactformulier én de korte intake (`type: "intake"`, met `answers`).
 *
 * Met RESEND_API_KEY:
 *  1. de lead gaat als overzichtelijke mail naar hello@ (MAIL_TO), reply-to = de klant;
 *  2. de klant krijgt een bevestiging in M7-huisstijl, met Martijn in cc (MAIL_CC).
 * Met CONTACT_WEBHOOK_URL gaat de aanvraag daarnaast naar een webhook (bv. Make, n8n of Odoo).
 * Zonder beide geeft de API 503 terug en tonen formulier en intake een mailto-fallback.
 */

const str = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const key = (...parts: string[]) => createHash("sha256").update(parts.join("|")).digest("hex").slice(0, 40);

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

  const cfg = mailConfig();
  const webhook = site.forms.contactWebhook;
  if (!cfg.enabled && !webhook) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let mailed = false;
  if (cfg.enabled) {
    if (limited(`lead:${clientIp(req)}`, 6, 10 * 60_000)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }
    const page = str(body.page, 500);
    let path = "";
    try {
      path = page ? new URL(page).pathname : "";
    } catch {}
    const locale = body.locale === "en" || (!body.locale && /^\/en(\/|$)/.test(path)) ? "en" : "nl";
    const slugs = (Array.isArray(body.interest) ? body.interest : typeof body.interest === "string" && body.interest ? [body.interest] : [])
      .map((x) => str(x, 80))
      .filter(Boolean)
      .slice(0, 20);
    const services = allServices();
    const lead: Lead = {
      kind: body.type === "intake" ? (callback ? "callback" : "intake") : "contact",
      name: str(body.name, 120),
      company: str(body.company, 160) || undefined,
      role: str(body.role, 120) || undefined,
      email: validEmail ? email.trim().slice(0, 200) : undefined,
      phone: str(body.phone, 40) || undefined,
      moment: str(body.moment, 120) || undefined,
      interest: slugs.map((s) => {
        const svc = services.find((x) => x.slug === s);
        return svc ? tr(svc.title, locale) : s;
      }),
      message: str(body.message, 8000),
      page: page || undefined,
      locale,
    };
    const base = baseUrl(req);
    const id = key(lead.kind, lead.email || lead.phone || "", lead.name, lead.message);

    const team = leadToTeam(lead, base);
    mailed = await sendMail({
      to: cfg.leadsTo,
      replyTo: lead.email ? [lead.email] : undefined,
      ...team,
      idempotencyKey: `lead-team-${id}`,
      tags: [{ name: "form", value: lead.kind }],
    });

    // Bevestiging aan de klant (max. 3 per adres per uur, tegen misbruik van het formulier)
    if (lead.email && !limited(`to:${lead.email.toLowerCase()}`, 3, 60 * 60_000)) {
      const client = leadToClient(lead, base, { ccMartijn: cfg.cc.some((c) => /^martijn@/i.test(c)) });
      await sendMail({
        to: [lead.email],
        cc: cfg.cc,
        replyTo: [site.email],
        ...client,
        idempotencyKey: `lead-client-${id}`,
        tags: [{ name: "form", value: `${lead.kind}_confirm` }],
      });
    }
  }

  let hooked = false;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, source: "m7branding.com", receivedAt: new Date().toISOString() }),
    }).catch(() => null);
    hooked = !!res?.ok;
  }

  const ok = mailed || hooked;
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}
