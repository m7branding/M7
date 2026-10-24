import { TLink } from "@/components/motion/TLink";
import { Icon } from "./Icon";

/** De M7 pill-CTA met circulaire pijl. */
export function Btn({
  href,
  children,
  variant,
  size,
  className,
  magnetic = true,
  type,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "contact" | "light";
  size?: "sm";
  className?: string;
  magnetic?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
}) {
  const cls = ["btn", variant && `btn--${variant}`, size && `btn--${size}`, className].filter(Boolean).join(" ");
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn__dot" aria-hidden="true">
        <Icon name="arrowUpRight" size={size === "sm" ? 16 : 19} stroke={2.4} />
        <Icon name="arrowUpRight" size={size === "sm" ? 16 : 19} stroke={2.4} />
      </span>
    </>
  );
  if (href) {
    return (
      <TLink href={href} className={cls} {...(magnetic ? { "data-magnetic": "" } : {})}>
        {inner}
      </TLink>
    );
  }
  return (
    <button type={type || "button"} className={cls} onClick={onClick} {...(magnetic ? { "data-magnetic": "" } : {})}>
      {inner}
    </button>
  );
}
