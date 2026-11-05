import { TLink } from "@/components/motion/TLink";
import { Icon } from "@/components/ui/Icon";
import "./ArrowLink.css";

type Props = Omit<React.ComponentProps<typeof TLink>, "children"> & { children: React.ReactNode };

/**
 * Tekstlink met een pijl in een rondje, voor "alle …"-links naast een sectiekop.
 * Bewust géén streepjeslijn (.link-dash): die hoort bij de eyebrow (.kicker) erboven,
 * dus een link in dezelfde stijl ernaast leest als een tweede eyebrow.
 */
export function ArrowLink({ children, className, ...rest }: Props) {
  return (
    <TLink className={`link-arrow${className ? ` ${className}` : ""}`} {...rest}>
      <span className="link-arrow__text">{children}</span>
      <span className="link-arrow__icon" aria-hidden="true">
        <Icon name="arrowRight" size={16} stroke={2} />
      </span>
    </TLink>
  );
}
