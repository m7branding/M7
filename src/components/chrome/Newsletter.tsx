"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

/** Nieuwsbrief → /api/newsletter. Met Resend: double opt-in ("check je inbox"); anders direct op de lijst. */
export function Newsletter({
  label,
  question,
  placeholder,
  thanks,
  confirm,
}: {
  label: string;
  question: string;
  placeholder: string;
  thanks: string;
  confirm?: string;
}) {
  const [state, setState] = useState<"idle" | "busy" | "done" | "confirm" | "error">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("busy");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: fd.get("email"), url: fd.get("url") || "", locale: document.documentElement.lang === "en" ? "en" : "nl" }),
      });
      const data = (await res.json().catch(() => ({}))) as { confirm?: boolean };
      setState(res.ok ? (data.confirm && confirm ? "confirm" : "done") : "error");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="news">
      <span className="news__label">{label}</span>
      <span className="news__q">{question}</span>
      {state === "done" || state === "confirm" ? (
        <span className="news__thanks" role="status">
          {state === "confirm" ? confirm : thanks}
        </span>
      ) : state === "error" ? (
        <a className="news__thanks" href="mailto:hello@m7branding.com?subject=Nieuwsbrief">
          hello@m7branding.com
        </a>
      ) : (
        <form className="news__form" onSubmit={submit}>
          <label htmlFor="news-email" className="visually-hidden">
            {placeholder}
          </label>
          <input id="news-email" name="email" type="email" required placeholder={placeholder} autoComplete="email" />
          {/* honeypot: mensen zien dit veld niet */}
          <input name="url" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="visually-hidden" />
          <button type="submit" aria-label={placeholder} disabled={state === "busy"}>
            <Icon name="arrowUpRight" size={18} stroke={2.4} />
          </button>
        </form>
      )}
    </div>
  );
}
