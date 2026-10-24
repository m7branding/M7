"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function Newsletter({ label, question, placeholder, thanks }: { label: string; question: string; placeholder: string; thanks: string }) {
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setState("busy");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="news">
      <span className="news__label">{label}</span>
      <span className="news__q">{question}</span>
      {state === "done" ? (
        <span className="news__thanks">{thanks}</span>
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
          <button type="submit" aria-label={placeholder} disabled={state === "busy"}>
            <Icon name="arrowUpRight" size={18} stroke={2.4} />
          </button>
        </form>
      )}
    </div>
  );
}
