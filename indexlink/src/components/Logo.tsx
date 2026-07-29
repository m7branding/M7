import React from "react";
import { EMBLEM_PATHS, EMBLEM_VIEWBOX } from "./emblem-paths";

/**
 * IndexLink brand components, built from the official emblem vector
 * (public/brand/IL-Emblem-*.svg). Each woven segment is a separate
 * path so preloader / transition animations can stagger them.
 */

export function Emblem({
  size = 32,
  color = "currentColor",
  className,
  animated = false,
}: {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={EMBLEM_VIEWBOX}
      fill="none"
      aria-hidden="true"
    >
      {EMBLEM_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={color}
          className={animated ? "emblem-seg" : undefined}
          style={animated ? { animationDelay: `${i * 90}ms` } : undefined}
        />
      ))}
    </svg>
  );
}

export function Logo({
  size = 22,
  color = "var(--ink)",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: Math.round(size * 0.45),
        color,
      }}
    >
      <Emblem size={Math.round(size * 1.5)} color={color} />
      <span
        style={{
          fontWeight: 800,
          fontSize: size,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        indexLink
      </span>
    </span>
  );
}
