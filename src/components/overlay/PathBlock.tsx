import { Aurora } from "@/components/motion/Aurora";
import "./overlay.css";

/**
 * CTA-blok met de rustige paarse Aurora (zoals op de home): titel,
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
}: {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  text?: React.ReactNode;
  /** De knop(pen). */
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  reveal?: boolean;
}) {
  return (
    <div className={`pathblk${className ? ` ${className}` : ""}`} style={style} {...(reveal ? { "data-reveal": "up" } : {})}>
      <Aurora palette="violet" fallback="/media/bg/ai-waves.webp" />
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
