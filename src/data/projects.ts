import type { Locale } from "@/i18n/routing";

type Localized = Record<Locale, string>;

export interface ProfessionalProject {
  slug: string;
  title: Localized;
  summary: Localized;
  company: string;
  role: Localized;
  period: Localized;
  tags: string[];
  featured: boolean;
}

export const professionalProjects: ProfessionalProject[] = [
  {
    slug: "financial-micro-frontends",
    title: {
      pt: "Plataforma financeira com Micro Frontends",
      en: "Financial platform with Micro Frontends",
    },
    summary: {
      pt: "Evolução de uma aplicação para instituição financeira com arquitetura de Micro Frontends, Design System e foco em escalabilidade e qualidade de código.",
      en: "Evolution of a financial institution application with Micro Frontend architecture, Design System and a strong focus on scalability and code quality.",
    },
    company: "Zappts",
    role: {
      pt: "Desenvolvedor Front-end Sênior",
      en: "Senior Front-end Developer",
    },
    period: {
      pt: "Nov 2025 — Atual",
      en: "Nov 2025 — Present",
    },
    tags: [
      "React",
      "TypeScript",
      "Module Federation",
      "Design System",
      "Style Dictionary",
      "Storybook",
      "Jest",
    ],
    featured: true,
  },
  {
    slug: "healthcare-platform",
    title: {
      pt: "Plataforma de saúde com regras de negócio complexas",
      en: "Healthcare platform with complex business rules",
    },
    summary: {
      pt: "Sustentação e evolução de um produto crítico do setor de saúde, com correção de bugs em produção, validações complexas e prevenção de regressões.",
      en: "Support and evolution of a critical healthcare product, fixing production bugs, handling complex validations and preventing regressions.",
    },
    company: "Fin-X",
    role: {
      pt: "Desenvolvedor Front-end (consultoria)",
      en: "Front-end Developer (consulting)",
    },
    period: {
      pt: "Nov 2024 — Abr 2026",
      en: "Nov 2024 — Apr 2026",
    },
    tags: ["Vue.js", "JavaScript", "REST APIs", "Debugging", "Code Review"],
    featured: true,
  },
  {
    slug: "voors-people-management",
    title: {
      pt: "Voors — plataforma de gestão de pessoas",
      en: "Voors — people management platform",
    },
    summary: {
      pt: "Desenvolvimento de interfaces responsivas para plataforma de gestão de pessoas, traduzindo UI/UX em componentes reutilizáveis com React e Tailwind.",
      en: "Built responsive interfaces for a people management platform, translating UI/UX designs into reusable components with React and Tailwind.",
    },
    company: "VIASOFT",
    role: {
      pt: "Desenvolvedor Front-end",
      en: "Front-end Developer",
    },
    period: {
      pt: "Nov 2024 — Nov 2025",
      en: "Nov 2024 — Nov 2025",
    },
    tags: ["React", "Tailwind CSS", "REST APIs", "UI/UX", "Performance"],
    featured: true,
  },
  {
    slug: "detran-integration",
    title: {
      pt: "Aplicação de integração com o Detran",
      en: "Detran (traffic authority) integration application",
    },
    summary: {
      pt: "Desenvolvimento de aplicação integrada ao Detran ao longo de 3+ anos, com React 18, TypeScript, testes com Jest e documentação no Storybook.",
      en: "Developed an application integrated with Brazil's traffic authority over 3+ years, using React 18, TypeScript, Jest tests and Storybook docs.",
    },
    company: "Zappts",
    role: {
      pt: "Desenvolvedor Front-end",
      en: "Front-end Developer",
    },
    period: {
      pt: "Jun 2021 — Out 2024",
      en: "Jun 2021 — Oct 2024",
    },
    tags: ["React 18", "TypeScript", "Emotion", "Storybook", "Jest", "Swagger"],
    featured: false,
  },
];
