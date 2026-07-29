import Link from "next/link";
import { Logo, Emblem } from "@/components/Logo";
import { StencilCanvas } from "@/components/StencilCanvas";
import "./landing.css";

const JOURNEY = [
  "Connect",
  "Understand",
  "Choose themes",
  "Co-create",
  "Publish",
  "Convert",
  "Activate",
  "Learn",
];

export default function Landing() {
  return (
    <main>
      <nav className="nav">
        <Link href="/">
          <Logo size={20} />
        </Link>
        <div className="nav-links">
          <a href="#visibility">Visibility</a>
          <a href="#conversion">Conversion</a>
          <a href="#action">Action</a>
          <a href="#domains">Your domain</a>
        </div>
        <div className="nav-actions">
          <Link href="/app" className="btn btn-ghost btn-sm">
            Log in
          </Link>
          <Link href="/onboarding" className="btn btn-primary btn-sm">
            Start free
          </Link>
        </div>
      </nav>

      <header className="hero stencil-fade">
        <StencilCanvas density={1.1} />
        <div className="hero-inner">
          <span className="chip chip-signal rise">
            <span className="dot pulse" /> Visibility · Conversion · Action — one loop
          </span>
          <h1 className="rise rise-1">
            Turn company knowledge into a{" "}
            <span className="accent">growth hub</span> that works for you
          </h1>
          <p className="sub rise rise-2">
            IndexLink builds your branded SEO &amp; GEO hub on your own subdomain. AI
            researches real demand, interviews your team to co-create specific
            content, matches every page with a conversion funnel, and proposes
            outreach you approve.
          </p>
          <div className="hero-cta rise rise-3">
            <Link href="/onboarding" className="btn btn-primary">
              Build your hub — free
            </Link>
            <a href="#visibility" className="btn btn-ghost">
              See how it works
            </a>
          </div>
          <div className="hero-domain rise rise-4">
            <span className="mono">
              <span className="you">yourcompany</span>.indexlink.io
            </span>
            <span style={{ padding: "0 12px", color: "var(--ink-20)" }}>→</span>
            <span className="mono" style={{ paddingRight: 14 }}>
              insights.<span className="you">yourcompany</span>.com
            </span>
          </div>
        </div>
      </header>

      <section className="pillars" id="visibility">
        <div className="section-head">
          <span className="eyebrow">The system</span>
          <h2>Three studios, one connected journey</h2>
          <p className="muted">
            Not another AI blog generator. A closed loop: verified company knowledge,
            dynamic collaboration, content-specific conversion, and audience action.
          </p>
        </div>
        <div className="pillar-grid">
          <div className="pillar card" id="visibility-card">
            <span className="index">01 — VISIBILITY</span>
            <h3>Evidence-backed content that earns discovery</h3>
            <p>
              AI researches search demand, answer-engine gaps, and market signals —
              then interviews you with dynamic questions so every page is specific
              to your company, never generic.
            </p>
            <ul>
              <li><span className="dot" /> Company brain built from your sources</li>
              <li><span className="dot" /> Theme &amp; opportunity scoring</li>
              <li><span className="dot" /> Guided content workshops</li>
              <li><span className="dot" /> Publishes to your subdomain hub</li>
            </ul>
          </div>
          <div className="pillar card" id="conversion">
            <span className="index">02 — CONVERSION</span>
            <h3>Value funnels matched to every page</h3>
            <p>
              Assessments, calculators, checklists, intakes and guides — with
              on-brand 3D mockups. AI suggests which funnel belongs on which page
              and adapts its fields to the visitor&apos;s question.
            </p>
            <ul>
              <li><span className="dot" /> Funnel library with smart matching</li>
              <li><span className="dot" /> Auto-generated 3D asset mockups</li>
              <li><span className="dot" /> Adaptive context fields</li>
              <li><span className="dot" /> Leads captured with full context</li>
            </ul>
          </div>
          <div className="pillar card" id="action">
            <span className="index">03 — ACTION</span>
            <h3>Approved outreach to living segments</h3>
            <p>
              Smart tags and explainable segments form automatically from captured
              intent. The system proposes campaigns and tasks — you review, approve,
              and send.
            </p>
            <ul>
              <li><span className="dot" /> Explainable smart segments</li>
              <li><span className="dot" /> Campaign proposals, human-approved</li>
              <li><span className="dot" /> Email, call &amp; WhatsApp tasks</li>
              <li><span className="dot" /> Outcomes feed the learning loop</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="journey stencil-fade">
        <div className="section-head">
          <span className="eyebrow">The journey</span>
          <h2>From connection to compounding growth</h2>
        </div>
        <div className="journey-steps">
          {JOURNEY.map((step, i) => (
            <div className="journey-step" key={step}>
              <div className="journey-num">{String(i + 1).padStart(2, "0")}</div>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="domains" id="domains">
        <div className="section-head">
          <span className="eyebrow">Your domain, your asset</span>
          <h2>Start free on a subdomain, go whitelabel when you grow</h2>
          <p className="muted">
            Your hub is a company-owned asset. Launch instantly, then connect your
            own branded subdomain with a guided DNS wizard — no migration, no rebuild.
          </p>
        </div>
        <div className="domain-cards">
          <div className="domain-card card">
            <span className="chip">Free — launch today</span>
            <div className="mono-line">
              <b>yourcompany</b>.indexlink.io
            </div>
            <h3>Instant hub on IndexLink</h3>
            <p>
              Pick a name, connect your sources, publish. TLS, schema, sitemaps and
              separate analytics are set up automatically.
            </p>
          </div>
          <div className="domain-card card">
            <span className="chip chip-signal">Growth — whitelabel</span>
            <div className="mono-line">
              insights.<b>yourcompany</b>.com
            </div>
            <h3>Your own branded subdomain</h3>
            <p>
              One CNAME record, verified by our DNS wizard. Keep all authority and
              tracking under your brand as your traffic and content volume grow.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band stencil-dark">
        <StencilCanvas density={0.8} dark />
        <div className="cta-band-inner">
          <Emblem size={54} color="#ffffff" />
          <h2>Your expertise is your best growth channel.</h2>
          <p>
            Set up your company brain and publish your first evidence-backed page
            this week — free on your IndexLink subdomain.
          </p>
          <Link href="/onboarding" className="btn btn-primary">
            Start building free
          </Link>
        </div>
      </section>

      <footer className="footer">
        <Logo size={16} />
        <span>© 2026 IndexLink — visibility, conversion &amp; action.</span>
      </footer>
    </main>
  );
}
