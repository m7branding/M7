/* ============================================================
   Resend: transactionele mail (leads, bevestigingen, support) en
   de nieuwsbrieflijst (contacts + optioneel een segment).
   Alles via de REST API, zonder extra dependency. De sleutel staat
   alleen server-side in RESEND_API_KEY (zie .env.example).
   ============================================================ */

import { site } from "@/content/site";

const API = process.env.RESEND_API_BASE || "https://api.resend.com";

const list = (v: string | undefined, fallback: string[]) =>
  v === undefined ? fallback : v.split(",").map((s) => s.trim()).filter(Boolean);

/** Waar alles naartoe gaat. Elke waarde is te overschrijven met een env var. */
export function mailConfig() {
  return {
    enabled: !!process.env.RESEND_API_KEY,
    /** Afzender; het domein moet in Resend geverifieerd zijn. */
    from: process.env.MAIL_FROM || `M7 Branding <${site.email}>`,
    /** Leads uit het contactformulier en de intake. */
    leadsTo: list(process.env.MAIL_TO, [site.email]),
    /** Supporttickets (standaard ook hello@, zodat er niets op een lege inbox belandt). */
    supportTo: list(process.env.SUPPORT_MAIL_TO, [site.email]),
    /** In cc van de bevestiging aan de klant. Leeg zetten = geen cc. */
    cc: list(process.env.MAIL_CC, ["martijn@m7branding.com"]),
    /** Optioneel segment in Resend voor de nieuwsbrief (Contacts → Segments). */
    segmentId: process.env.RESEND_SEGMENT_ID || "",
  };
}

type Res = { ok: boolean; status: number; data: Record<string, unknown> };

async function call(path: string, init: { method: string; body?: unknown; headers?: Record<string, string> }): Promise<Res> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, status: 0, data: { message: "RESEND_API_KEY ontbreekt" } };
  try {
    const res = await fetch(API + path, {
      method: init.method,
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...init.headers },
      body: init.body === undefined ? undefined : JSON.stringify(init.body),
      cache: "no-store",
    });
    const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    if (!res.ok) console.error(`[resend] ${init.method} ${path} → ${res.status}`, data?.message || data?.name || "");
    return { ok: res.ok, status: res.status, data };
  } catch (e) {
    console.error(`[resend] ${init.method} ${path} mislukt`, (e as Error).message);
    return { ok: false, status: 0, data: {} };
  }
}

export interface Mail {
  to: string[];
  subject: string;
  html: string;
  text: string;
  cc?: string[];
  replyTo?: string[];
  /** Zelfde sleutel binnen 24 uur = Resend verstuurt niet dubbel (dubbelklik, retry). */
  idempotencyKey?: string;
  tags?: { name: string; value: string }[];
}

export async function sendMail(m: Mail): Promise<boolean> {
  const { from } = mailConfig();
  const r = await call("/emails", {
    method: "POST",
    headers: m.idempotencyKey ? { "Idempotency-Key": m.idempotencyKey.slice(0, 256) } : undefined,
    body: {
      from,
      to: m.to,
      cc: m.cc?.length ? m.cc : undefined,
      reply_to: m.replyTo?.length ? m.replyTo : undefined,
      subject: m.subject,
      html: m.html,
      text: m.text,
      tags: m.tags,
    },
  });
  return r.ok;
}

/**
 * Zet iemand op de nieuwsbrieflijst (na de double opt-in).
 * Contacts zijn in Resend globaal; bestaat het adres al, dan zetten we het weer op "ingeschreven".
 * Met RESEND_SEGMENT_ID komt het contact ook in dat segment, zodat je daar je broadcasts naartoe stuurt.
 */
export async function subscribe(email: string, props: { firstName?: string } = {}): Promise<boolean> {
  const body: Record<string, unknown> = { email, unsubscribed: false };
  if (props.firstName) body.first_name = props.firstName;
  let r = await call("/contacts", { method: "POST", body });
  if (!r.ok && (r.status === 409 || r.status === 422 || r.status === 400)) {
    // waarschijnlijk bestaat het contact al: weer inschrijven
    r = await call(`/contacts/${encodeURIComponent(email)}`, { method: "PATCH", body: { unsubscribed: false } });
  }
  if (!r.ok) return false;
  const { segmentId } = mailConfig();
  if (segmentId) {
    const id = typeof r.data.id === "string" ? r.data.id : encodeURIComponent(email);
    await call(`/contacts/${id}/segments/${encodeURIComponent(segmentId)}`, { method: "POST" });
  }
  return true;
}
