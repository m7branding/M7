"use client";

import { useState } from "react";
import { Btn } from "@/components/ui/Button";
import type { Dict } from "@/lib/dict";

/** Contactformulier → /api/contact (webhook naar Make/n8n/Odoo of mailto-fallback). */
export function ContactForm({ services, labels }: { services: { value: string; label: string }[]; labels: Dict["contact"] }) {
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [mailto, setMailto] = useState("mailto:hello@m7branding.com");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string | string[]> = {
      ...(Object.fromEntries(fd.entries()) as Record<string, string>),
      interest: fd.getAll("interest") as string[],
    };
    setMailto(
      `mailto:hello@m7branding.com?subject=${encodeURIComponent(`Kennismaking ${data.company || data.name || ""}`)}&body=${encodeURIComponent(
        `${data.message || ""}\n\n${data.name || ""}\n${data.email || ""}\n${data.phone || ""}\n${(data.interest as string[]).join(", ")}`,
      )}`,
    );
    setState("busy");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.href }),
      });
      if (!res.ok) throw new Error();
      setState("done");
      form.reset();
      const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      g?.("event", "generate_lead", { form: "contact" });
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className="form-done">
        <img src="/brand/check.svg" alt="" width={40} height={32} />
        <p className="h3">{labels.sent}</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <label className="field">
          <span>{labels.name} *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>{labels.company}</span>
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>{labels.email} *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span>{labels.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <fieldset className="field field--chips">
        <legend>{labels.interest}</legend>
        <div className="chips">
          {services.map((s) => (
            <label key={s.value} className="chip chip--check">
              <input type="checkbox" name="interest" value={s.value} />
              <span>{s.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="field">
        <span>{labels.message} *</span>
        <textarea name="message" rows={5} required />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden="true" />
      <div className="form__foot">
        <Btn type="submit">{state === "busy" ? labels.sending : labels.send}</Btn>
        {state === "error" ? (
          <p className="form__error">
            {labels.error}{" "}
            <a href={mailto} className="link-dash">
              hello@m7branding.com
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}
