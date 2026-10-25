/* ============================================================
   Home-secties, in de volgorde van het Figma-ontwerp.
   ============================================================ */

import { M7Emblem } from "@/components/brand/M7Logo";
import { Aurora } from "@/components/motion/Aurora";
import { Counter } from "@/components/motion/Counter";
import { GlowField } from "@/components/motion/GlowField";
import { PixelGrid } from "@/components/motion/PixelGrid";
import { ScrollSequence } from "@/components/motion/ScrollSequence";
import { SplitText } from "@/components/motion/SplitText";
import { Starfield } from "@/components/motion/Starfield";
import { TLink } from "@/components/motion/TLink";
import { Mockup } from "@/components/mockups";
import { ServiceMedia } from "@/components/mockups/ServiceMedia";
import { Btn } from "@/components/ui/Button";
import { CaseCover } from "@/components/ui/CaseCard";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
import { SocialIcon } from "@/components/ui/Social";
import { clients, site, stats } from "@/content/site";
import type { Case, Locale } from "@/content/types";
import { allApplications, allCases, allServices, applicationsFor, featuredCases } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { HeroScene } from "./HeroScene";
import { ProcessTabs } from "./ProcessTabs";
import { Testimonials } from "./Testimonials";

/* ---------------- Hero ---------------- */
export function HomeHero({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg">
        <GlowField
          blobs={[
            { x: "50%", y: "70%", c: "rgba(255,255,255,.07)", s: "90vmax", o: 0.9, dur: 14 },
            { x: "18%", y: "30%", c: "rgba(58,255,255,.10)", s: "50vmax", dur: 18, delay: -4 },
            { x: "85%", y: "25%", c: "rgba(255,190,40,.07)", s: "46vmax", dur: 20, delay: -8 },
          ]}
        />
        <Starfield density={0.7} sparkles={16} />
        <div className="hero__pixels">
          <PixelGrid variant="sides" />
        </div>
      </div>

      <div className="hero__inner container">
        <h1 id="hero-title" className="h-hero hero__title">
          <SplitText
            parts={[
              { t: d.home.heroTitleA + " " },
              { t: d.home.heroPixels, c: "g-pixels" },
              { t: " " + d.home.heroTo + " " },
              { t: d.home.heroStars, c: "g-stars" },
              { t: "." },
            ]}
            delay={0.15}
          />
        </h1>
        <p className="lead hero__sub" data-reveal="up" style={{ ["--d" as string]: "0.55s" }}>
          {d.home.heroSub}
        </p>
        <span className="hero__line" aria-hidden="true" data-reveal="fade" style={{ ["--d" as string]: "0.8s" }} />
        <div className="hero__cta" data-reveal="up" style={{ ["--d" as string]: "0.9s" }}>
          <Btn href={site.letsgo}>{d.cta.launch}</Btn>
        </div>
        <div className="hero__visual" data-reveal="fade" style={{ ["--d" as string]: "0.3s" }}>
          <HeroScene>
            <ScrollSequence
              src="/media/sequences/hero"
              mode="leave"
              align="bottom"
              eager
              className="hero__seq"
              alt={locale === "nl" ? "Website en app van M7 op twee telefoons" : "Website and app by M7 on two phones"}
            />
          </HeroScene>
        </div>
      </div>

      <a className="partner" href={site.partner.url} target="_blank" rel="noopener" data-reveal="up" style={{ ["--d" as string]: "1.1s" }}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M17.8 7.2s-2.1 6.6-2.3 7.2c-.1-.8-1.5-11.5-1.5-11.5-3.5 0-5.3 2.5-6.3 5.1 0 0-2.4 6.3-2.6 6.8 0-.5-.4-6.7-.4-6.7C4.5 5 2.3 3 0 3l2.6 16.2c3.4 0 5.2-2.3 6.2-4.9 0 0 2-5.3 2.1-5.6 0 .4 1.5 10.5 1.5 10.5 3.4 0 5.2-2.2 6.2-4.6L24 3c-3.4 0-5.2 2.3-6.2 4.2Z" />
        </svg>
        <span>{site.partner.label}</span>
      </a>

      <nav className="hero__rail" aria-label="Social">
        {[
          { k: "facebook", url: site.socials.facebook },
          { k: "instagram", url: site.socials.instagram },
          { k: "linkedin", url: site.socials.linkedin },
          ...(site.whatsapp ? [{ k: "whatsapp", url: `https://wa.me/${site.whatsapp.replace(/\D/g, "")}` }] : []),
          { k: "youtube", url: site.socials.youtube },
        ].map(({ k, url }) => (
          <a key={k} href={url} target="_blank" rel="noopener" aria-label={k}>
            <SocialIcon name={k} size={19} />
          </a>
        ))}
      </nav>
    </section>
  );
}

/* ---------------- Klantlogo's ---------------- */
export function LogoMarquee() {
  return (
    <section className="logos" aria-label="Klanten">
      <Marquee speed={46}>
        {clients.map((c) =>
          c.logo ? (
            <img key={c.name} src={c.logo} alt={c.name} style={{ width: c.width, height: "auto" }} className="logos__img" loading="lazy" />
          ) : (
            <span key={c.name} className="logos__word">
              {c.name}
            </span>
          ),
        )}
      </Marquee>
    </section>
  );
}

/* ---------------- One-stop-shop + folders (kapstok) ---------------- */
export function OneStop({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <section className="section onestop" aria-labelledby="onestop-title">
      <div className="container">
        <div className="section-head section-head--center">
          <SplitText
            as="h2"
            id="onestop-title"
            className="h2"
            parts={[{ t: d.home.oneStopA + " " }, { t: d.home.oneStopB, c: "g-shop" }, { t: " " + d.home.oneStopC }]}
          />
          <p className="body onestop__text" data-reveal="up" style={{ ["--d" as string]: "0.2s" }}>
            {d.home.oneStopText}
          </p>
        </div>
        <FolderGrid locale={locale} />
      </div>
    </section>
  );
}

export function FolderGrid({ locale }: { locale: Locale }) {
  return (
    <ul className="folders" data-stagger="">
      {allServices().map((s) => {
        const apps = applicationsFor(s.slug).slice(0, 3);
        return (
          <li key={s.slug} style={{ ["--accent" as string]: s.color }}>
            <TLink href={paths.service(s)} className="folder" data-cursor={tr(s.short, locale)}>
              <span className="folder__papers" aria-hidden="true">
                {apps.map((a, i) => (
                  <span key={a.slug} className="folder__paper" style={{ ["--p" as string]: i }}>
                    {tr(a.title, locale)}
                  </span>
                ))}
              </span>
              <span className="folder__front">
                <span className="folder__icon">
                  <Icon name={s.icon} size={30} stroke={1.5} />
                </span>
                <span className="folder__label">{tr(s.title, locale)}</span>
                <span className="folder__count">{applicationsFor(s.slug).length}</span>
              </span>
            </TLink>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------------- Peiler-kaarten (zoals in het design: tekst | mockup, afwisselend) ---------------- */
export function PillarStack({ locale, from = 0, to }: { locale: Locale; from?: number; to?: number }) {
  const d = getDict(locale);
  const all = allServices();
  const list = all.slice(from, to ?? all.length);
  return (
    <section className="pillars" aria-label={d.nav.services}>
      <div className="container">
        {list.map((s, n) => {
          const i = from + n;
          const title = tr(s.title, locale);
          return (
            <article
              key={s.slug}
              className={`pillar${i % 2 ? " pillar--flip" : ""}`}
              style={{ ["--accent" as string]: s.color, ["--i" as string]: n }}
            >
              <div className="pillar__card">
                <div className="pillar__text">
                  <h2 className="pillar__title">
                    <TLink href={paths.service(s)}>{title}</TLink>
                  </h2>
                  <p className="pillar__body">{tr(s.description, locale).split("\n\n")[0]}</p>
                  <div className="pillar__cta">
                    <Btn href={site.letsgo}>{d.cta.launch}</Btn>
                    <TLink href={paths.service(s)} className="link-dash">
                      {d.cta.discover} {tr(s.short, locale)}
                    </TLink>
                  </div>
                </div>
                <div className={`pillar__visual${s.media?.type === "sequence" ? " pillar__visual--seq" : ""}`}>
                  {s.media ? <ServiceMedia media={s.media} alt={title} /> : <Mockup kind={s.mockup} accent={s.color} />}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Masterpieces: kolommen die eindeloos scrollen ---------------- */
export function Masterpieces({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const all = allCases();
  // Wall met echte projectbeelden (covers + galerij), zoals in het design
  const tiles: { c: Case; img: string }[] = all.flatMap((c) =>
    [c.cover, ...(c.gallery || [])].filter((x): x is string => !!x && !x.includes("titanium")).map((img) => ({ c, img })),
  );
  const cols: { c: Case; img: string }[][] = [[], [], [], []];
  tiles.forEach((t, i) => cols[i % 4].push(t));
  return (
    <section className="section masters" aria-labelledby="masters-title">
      <div className="masters__pixels">
        <PixelGrid variant="top" />
      </div>
      <div className="container section-head section-head--center">
        <SplitText as="h2" id="masters-title" className="h2" parts={d.home.masterpieces} />
        <p data-reveal="up" style={{ ["--d" as string]: "0.2s", marginTop: 22 }}>
          <TLink href={paths.cases} className="link-dash">
            {d.cta.viewAllProjects} <span className="count-badge">{all.length}</span>
          </TLink>
        </p>
      </div>
      <div className="masters__wall" data-reveal="fade">
        {cols.map((col, ci) => (
          <div key={ci} className={`masters__col${ci % 2 ? " is-rev" : ""}`} style={{ ["--speed" as string]: `${38 + ci * 6}s` }}>
            {[0, 1].map((dup) => (
              <div key={dup} className="masters__group" aria-hidden={dup === 1}>
                {col.map(({ c, img }) => (
                  <TLink key={img + dup} href={paths.case(c)} className="masters__tile" data-cursor={d.cta.viewCase} tabIndex={dup ? -1 : 0}>
                    <img src={img} alt={c.client} loading="lazy" decoding="async" sizes="25vw" />
                    <span className="masters__label">
                      <strong>{c.client}</strong>
                      <small>{tr(c.summary, locale).slice(0, 70)}…</small>
                    </span>
                  </TLink>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
export function Experience({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  return (
    <section className="section experience" aria-labelledby="exp-title">
      <div className="experience__map" aria-hidden="true">
        <img src="/media/bg/world-dots.webp" alt="" loading="lazy" />
        <span className="experience__ping" style={{ left: "49.5%", top: "33%" }} />
        <span className="experience__ping" style={{ left: "24%", top: "40%", animationDelay: "1.2s" }} />
        <span className="experience__ping" style={{ left: "78%", top: "46%", animationDelay: "2.1s" }} />
        <span className="experience__ping" style={{ left: "54%", top: "62%", animationDelay: "3s" }} />
      </div>
      <div className="container section-head section-head--center">
        <SplitText as="h2" id="exp-title" className="h2" parts={`${d.home.experienceA} ${d.home.experienceB}`} />
        <p className="lead" data-reveal="up" style={{ ["--d" as string]: "0.2s", marginTop: 18 }}>
          {d.home.experienceSub}
        </p>
      </div>
      <Testimonials locale={locale} />
    </section>
  );
}

/* ---------------- Cijfers ---------------- */
export function StatsBand({ locale }: { locale: Locale }) {
  return (
    <section className="stats" aria-label="M7 in cijfers">
      <Marquee speed={36}>
        {stats.map((s) => (
          <div key={s.label.nl} className="stat">
            <strong>
              <Counter value={s.value} suffix={s.suffix} locale={locale} />
            </strong>
            <span>{s.label[locale]}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

/* ---------------- How the juices flow ---------------- */
export function Juices({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const picks = ["branding-rebranding", "websites-webshops", "web-apps-portals-apps", "ai-consultancy"] as const;
  const tabs = picks.map((slug) => {
    const s = allServices().find((x) => x.slug === slug)!;
    return {
      key: slug,
      label: tr(s.short, locale),
      color: s.color,
      steps: s.process.map((p) => ({ title: tr(p.title, locale), text: tr(p.text, locale) })),
    };
  });
  return (
    <section className="section juices" aria-labelledby="juices-title">
      <div className="juices__grid-bg" aria-hidden="true" />
      <div className="container">
        <ProcessTabs title={d.home.juices} tabs={tabs} prev={d.cta.prev} next={d.cta.next} />
      </div>
    </section>
  );
}

/* ---------------- Bento: case, AI, kennisbank, FAQ ---------------- */
export function Bento({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const monvy = featuredCases().find((c) => c.slug === "monvy") || featuredCases()[0];
  return (
    <section className="section bento" aria-label="Highlights">
      <div className="container bento__grid">
        <TLink href={paths.case(monvy)} className="bento__case" data-cursor={d.cta.viewCase} data-reveal="up">
          <span className="bento__case-media">
            <CaseCover c={monvy} />
            <span className="bento__arrow">
              <Icon name="arrowUpRight" size={22} stroke={2.2} />
            </span>
          </span>
          <span className="bento__case-body">
            <span className="bento__kicker">{d.home.project}</span>
            <span className="bento__case-title">{tr(monvy.title, locale)}</span>
          </span>
        </TLink>

        <div className="bento__ai" data-reveal="up" style={{ ["--d" as string]: "0.1s" }}>
          <Aurora palette="violet" fallback="/media/bg/ai-waves.webp" />
          <div className="bento__ai-inner">
            <h3 className="bento__ai-title">
              {d.home.aiA} <span className="c-ai">AI</span>.
            </h3>
            <Btn href={paths.service("ai-consultancy")}>{d.cta.launch}</Btn>
          </div>
        </div>

        <a className="bento__small" href={site.answers.url} target="_blank" rel="noopener" data-reveal="up" style={{ ["--d" as string]: "0.15s" }}>
          <span className="bento__small-head">
            <span className="bento__kicker">{d.home.blog}</span>
            <span className="bento__dot">
              <Icon name="arrowUpRight" size={16} stroke={2.4} />
            </span>
          </span>
          <span className="bento__rule" />
          <span className="bento__small-title">{d.home.blogQ}</span>
          <span className="bento__bar" />
        </a>

        <TLink href={paths.service("websites-webshops") + "#faq"} className="bento__small" data-reveal="up" style={{ ["--d" as string]: "0.2s" }}>
          <span className="bento__small-head">
            <span className="bento__kicker">{d.home.faq}</span>
            <span className="bento__dot">
              <Icon name="arrowUpRight" size={16} stroke={2.4} />
            </span>
          </span>
          <span className="bento__small-title">{d.home.faqQ}</span>
          <span className="bento__bar" />
        </TLink>
      </div>
    </section>
  );
}

/* ---------------- Ready to level up (op elke pagina) ---------------- */
export function LevelUp({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const apps = allApplications();
  const half = Math.ceil(apps.length / 2);
  const rows = [apps.slice(0, half), apps.slice(half)];
  const svcColor = Object.fromEntries(allServices().map((s) => [s.slug, s.color]));
  return (
    <section className="levelup" aria-labelledby="levelup-title">
      <div className="levelup__panel container">
        <div className="levelup__bg">
          <GlowField
            blobs={[
              { x: "50%", y: "0%", c: "rgba(255,210,58,.10)", s: "60vmax", dur: 16 },
              { x: "10%", y: "100%", c: "rgba(58,255,255,.08)", s: "50vmax", dur: 20, delay: -5 },
              { x: "90%", y: "100%", c: "rgba(139,61,255,.10)", s: "50vmax", dur: 18, delay: -9 },
            ]}
            spot="rgba(255,210,58,0.06)"
          />
          <Starfield density={0.5} sparkles={10} />
          <span className="levelup__float f1">
            <Icon name="pen" size={56} stroke={1.2} />
          </span>
          <span className="levelup__float f2">
            <Icon name="grid" size={44} stroke={1.2} />
          </span>
          <span className="levelup__float f3">
            <M7Emblem />
          </span>
        </div>
        <div className="levelup__head">
          <SplitText
            as="h2"
            id="levelup-title"
            className="h2"
            parts={[{ t: d.home.levelA + " " }, { t: d.home.levelB, c: "g-level" }, { t: " " + d.home.levelC }]}
          />
          <p className="lead" data-reveal="up" style={{ ["--d" as string]: "0.2s" }}>
            {d.home.levelSub}
          </p>
        </div>
        <div className="levelup__chips">
          {rows.map((row, ri) => (
            <Marquee key={ri} speed={row.length * (11 + ri)} reverse={ri === 1}>
              {row.map((a) => (
                <TLink key={a.slug} href={paths.application(a)} className="chip" style={{ ["--accent" as string]: svcColor[a.service] }}>
                  {tr(a.title, locale)}
                </TLink>
              ))}
            </Marquee>
          ))}
        </div>
        <div className="levelup__cta" data-reveal="up">
          <Btn href={site.letsgo}>{d.cta.launch}</Btn>
        </div>
      </div>
    </section>
  );
}
