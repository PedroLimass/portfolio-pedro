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
  "retail-consumer-apps": {
    pt: () => import("./retail-consumer-apps/pt.mdx"),
    en: () => import("./retail-consumer-apps/en.mdx"),
  },
  "lift-learning-fintech": {
    pt: () => import("./lift-learning-fintech/pt.mdx"),
    en: () => import("./lift-learning-fintech/en.mdx"),
  },
};
