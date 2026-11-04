import { notFound } from "next/navigation";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Showcase, hasAnyShowcase } from "@/components/showcase";
import { SERVICE_SLUGS } from "@/content/registry";
import { getService } from "@/lib/content";

/**
 * Showcase-lab (alleen development): /lab?k=<dienst-slug>&sp=0.6&flip=1
 * - k: welke showcase (zonder k: alle tien onder elkaar, live op scroll)
 * - sp: scroll-voortgang vastzetten (0..1) voor screenshots
 * - flip: kaart gespiegeld (beeld links), zoals de oneven kaarten op home
 */
export default function Lab({ searchParams }: { searchParams: { k?: string; sp?: string; flip?: string } }) {
  if (process.env.NODE_ENV === "production") notFound();
  const keys = searchParams.k ? [searchParams.k] : [...SERVICE_SLUGS];
  const sp = searchParams.sp !== undefined ? Number(searchParams.sp) : undefined;
  return (
    <SmoothScroll>
      <section className="pillars" style={{ paddingBlock: searchParams.k ? 40 : "60vh" }}>
        <div className="container">
          {keys.map((k, n) => {
            if (!hasAnyShowcase(k)) return <p key={k}>Onbekende showcase: {k}</p>;
            const s = getService(k)!;
            const flip = searchParams.flip ? searchParams.flip === "1" : n % 2 === 1;
            return (
              <article key={k} className={`pillar${flip ? " pillar--flip" : ""}`} style={{ ["--accent" as string]: s.color, ["--i" as string]: n, position: searchParams.k ? "relative" : undefined }}>
                <div className="pillar__card">
                  <div className="pillar__text">
                    <h2 className="pillar__title">{s.title.nl}</h2>
                    <p className="pillar__body">{s.description.nl.split("\n\n")[0].slice(0, 260)}…</p>
                  </div>
                  <div className="pillar__visual pillar__visual--show">
                    <Showcase slug={k} flip={flip} sp={sp} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SmoothScroll>
  );
}
