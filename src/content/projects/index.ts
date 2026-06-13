import type { ComponentType } from "react";
import type { Locale } from "@/i18n/routing";

type CaseModule = () => Promise<{ default: ComponentType }>;

export const caseContent: Record<string, Record<Locale, CaseModule>> = {
  "financial-micro-frontends": {
    pt: () => import("./financial-micro-frontends/pt.mdx"),
    en: () => import("./financial-micro-frontends/en.mdx"),
  },
  "healthcare-platform": {
    pt: () => import("./healthcare-platform/pt.mdx"),
    en: () => import("./healthcare-platform/en.mdx"),
  },
  "voors-people-management": {
    pt: () => import("./voors-people-management/pt.mdx"),
    en: () => import("./voors-people-management/en.mdx"),
  },
  "detran-integration": {
    pt: () => import("./detran-integration/pt.mdx"),
    en: () => import("./detran-integration/en.mdx"),
  },
};
