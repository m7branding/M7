"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

interface Item {
  id: string;
  author: string;
  role: string;
  avatar?: string;
  quote: string;
  draft: boolean;
}

/** Review-slider uit het design: zwevende avatars, glazen kaart, pijlen. */
export function TestimonialSlider({
  items,
  avatars,
  labels,
}: {
  items: Item[];
  avatars: string[];
  labels: { prev: string; next: string; more: string; less: string; draft: string };
}) {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const it = items[i];

  useEffect(() => setOpen(false), [i]);
  useEffect(() => {
    if (items.length < 2) return;
    const t = window.setInterval(() => setI((x) => (x + 1) % items.length), 9000);
    return () => window.clearInterval(t);
  }, [items.length, i]);

  if (!it) return null;
  const long = it.quote.length > 260;

  return (
    <div className="tslider">
      <div className="tslider__avatars" aria-hidden="true">
        {avatars.map((a, k) => (
          <img key={a} src={a} alt="" className={`tslider__av av${k + 1}`} loading="lazy" />
        ))}
      </div>
      <div className="tslider__stage container">
        <button type="button" className="tslider__arrow" onClick={() => setI((i - 1 + items.length) % items.length)} aria-label={labels.prev}>
          <Icon name="chevronDown" size={20} stroke={2.4} className="rot-90" />
        </button>
        <figure className="tslider__card" key={it.id}>
          {it.draft ? <span className="review__draft">{labels.draft}</span> : null}
          {it.avatar ? <img src={it.avatar} alt="" className="tslider__me" width={56} height={56} /> : <span className="tslider__me tslider__me--init">{it.author[0]}</span>}
          <figcaption>
            <strong>{it.author}</strong>
            <small>{it.role}</small>
          </figcaption>
          <blockquote className={long && !open ? "is-clamped" : ""}>{it.quote}</blockquote>
          {long ? (
            <button type="button" className="link-dash tslider__more" onClick={() => setOpen((o) => !o)}>
              {open ? labels.less : labels.more}
            </button>
          ) : null}
        </figure>
        <button type="button" className="tslider__arrow" onClick={() => setI((i + 1) % items.length)} aria-label={labels.next}>
          <Icon name="chevronDown" size={20} stroke={2.4} className="rot-270" />
        </button>
      </div>
      {items.length > 1 ? (
        <div className="tslider__dots">
          {items.map((x, k) => (
            <button key={x.id} type="button" className={k === i ? "is-on" : ""} onClick={() => setI(k)} aria-label={`${k + 1}`} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
