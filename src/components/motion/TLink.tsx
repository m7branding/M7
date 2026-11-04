"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { localize } from "@/lib/i18n";
import { useLocale } from "./LocaleProvider";

type Props = Omit<React.ComponentProps<typeof Link>, "href"> & { href: string };

/**
 * Link die interne (NL) paden automatisch lokaliseert.
 * De page-transition (vegen) wordt globaal afgehandeld in <PageTransition>.
 */
export const TLink = forwardRef<HTMLAnchorElement, Props>(function TLink({ href, ...rest }, ref) {
  const locale = useLocale();
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    // Eigen (sub)domeinen openen in hetzelfde tabblad, de rest in een nieuw tabblad
    const isWeb = href.startsWith("http") && !/^https?:\/\/([a-z0-9-]+\.)?m7branding\.com/i.test(href);
    return (
      <a
        ref={ref}
        href={href}
        {...(isWeb ? { target: "_blank", rel: "noopener" } : {})}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }
  return <Link ref={ref} href={localize(href, locale)} {...rest} />;
});
