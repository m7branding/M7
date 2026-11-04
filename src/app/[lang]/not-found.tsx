import { Starfield } from "@/components/motion/Starfield";
import { TLink } from "@/components/motion/TLink";
import { M7Lined } from "@/components/brand/M7Logo";

export default function NotFound() {
  return (
    <section className="nf">
      <Starfield density={1} sparkles={24} />
      <M7Lined className="nf__logo" />
      <div className="nf__inner">
        <p className="kicker kicker--center">404</p>
        <h1 className="h1">Lost in space.</h1>
        <p className="lead">Deze pagina bestaat niet (meer). This page doesn&apos;t exist (anymore).</p>
        <TLink href="/" className="btn">
          <span>Home</span>
          <span className="btn__dot" aria-hidden="true">
            ↗
          </span>
        </TLink>
      </div>
    </section>
  );
}
