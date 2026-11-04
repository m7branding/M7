"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/content/types";

const LocaleCtx = createContext<Locale>("nl");

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleCtx.Provider value={locale}>{children}</LocaleCtx.Provider>;
}

export const useLocale = () => useContext(LocaleCtx);
