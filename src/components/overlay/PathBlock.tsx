import { Aurora, type AuroraPalette } from "@/components/motion/Aurora";
import "./overlay.css";

/**
 * CTA-blok met de rustige Aurora (standaard paars, zoals op de home): titel,
 * één korte regel en een inline knop. Gebruikt voor de Diensten & Tarieven
 * Catalogus en de korte intake (contactpagina én /letsgo).
 */
export function PathBlock({
  kicker,
  title,
  text,
  children,
  className,
  style,
  reveal,
  palette = "violet",
}: {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  text?: React.ReactNode;
  /** De knop(pen). */
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  reveal?: boolean;
  /** Kleur van de Aurora; elke andere dan violet krijgt een eigen accent (data-palette). */
  palette?: AuroraPalette;
}) {
  return (
    <div
      className={`pathblk${className ? ` ${className}` : ""}`}
      style={style}
      data-palette={palette}
      {...(reveal ? { "data-reveal": "up" } : {})}
    >
      <Aurora palette={palette} fallback={palette === "violet" ? "/media/bg/ai-waves.webp" : undefined} />
      <div className="pathblk__inner">
        <div className="pathblk__copy">
          {kicker ? <p className="pathblk__kicker">{kicker}</p> : null}
          <h2 className="pathblk__title">{title}</h2>
          {text ? <p className="pathblk__text">{text}</p> : null}
        </div>
        <div className="pathblk__cta">{children}</div>
      </div>
    </div>
  );
}
