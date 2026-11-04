import "./overlay.css";

/** Rustig 'ademende' groene status-dot (statisch bij prefers-reduced-motion). */
export function LiveDot({ size = 8, className }: { size?: number; className?: string }) {
  return (
    <span
      className={`live-dot${className ? ` ${className}` : ""}`}
      style={{ ["--live-size" as string]: `${size}px` }}
      aria-hidden="true"
    />
  );
}
