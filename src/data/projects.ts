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
      pt: "Evolução de uma aplicação de serviços financeiros com arquitetura de Micro Frontends, Design System e foco em escalabilidade, consistência visual e qualidade em produção.",
      en: "Evolution of a financial services application with Micro Frontend architecture, Design System and a strong focus on scalability, visual consistency and production quality.",
    },
    company: "Zappts",
    role: {
      pt: "Senior Frontend Engineer",
      en: "Senior Frontend Engineer",
    },
    period: {
      pt: "Nov 2025 — Atual",
      en: "Nov 2025 — Present",
    },
    tags: [
      "React.js",
      "TypeScript",
      "Module Federation",
      "Design Systems",
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
      pt: "Sustentação e evolução de uma plataforma web de saúde com fluxos críticos de agendamento, validações complexas e prevenção de regressões em produção.",
      en: "Support and evolution of a healthcare web platform with critical scheduling workflows, complex validations and regression prevention in production.",
    },
    company: "Fin-X",
    role: {
      pt: "Frontend Software Engineer — Consultor",
      en: "Frontend Software Engineer — Consultant",
    },
    period: {
      pt: "Nov 2024 — Abr 2026",
      en: "Nov 2024 — Apr 2026",
    },
    tags: [
      "Vue.js",
      "TypeScript",
      "Angular",
      "REST APIs",
      "Form Validation",
      "Production Debugging",
    ],
    featured: true,
  },
  {
    slug: "retail-consumer-apps",
    title: {
      pt: "Aplicações web e mobile para varejo e consumo",
      en: "Web and mobile apps for retail and consumer brands",
    },
    summary: {
      pt: "Desenvolvimento e manutenção de aplicações web e mobile para clientes como Burger King, Popeyes e C&A, com componentes reutilizáveis, APIs REST e layouts responsivos.",
      en: "Development and maintenance of web and mobile applications for clients such as Burger King, Popeyes and C&A, with reusable components, REST APIs and responsive layouts.",
    },
    company: "Zappts",
    role: {
      pt: "Frontend Engineer",
      en: "Frontend Engineer",
    },
    period: {
      pt: "Jun 2021 — Out 2024",
      en: "Jun 2021 — Oct 2024",
    },
    tags: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Axios",
      "Fetch API",
      "Responsive Design",
      "TDD",
    ],
    featured: true,
  },
  {
    slug: "lift-learning-fintech",
    title: {
      pt: "Editor de tabelas web — LIFT Learning (Banco Central)",
      en: "Web table editor — LIFT Learning (Central Bank)",
    },
    summary: {
      pt: "Aplicação fintech construída do zero no programa LIFT Learning (Fenasbac + Banco Central), com experiência interativa de manipulação de tabelas e entrega fullstack.",
      en: "Fintech application built from the ground up in the LIFT Learning program (Fenasbac + Central Bank), with an interactive table manipulation experience and full-stack delivery.",
    },
    company: "Math Analytics",
    role: {
      pt: "Full-Stack Software Engineer",
      en: "Full-Stack Software Engineer",
    },
    period: {
      pt: "Mar 2022 — Set 2022",
      en: "Mar 2022 — Sep 2022",
    },
    tags: [
      "React.js",
      "TypeScript",
      "Chakra UI",
      "Python",
      "Django REST Framework",
    ],
    featured: false,
  },
];
