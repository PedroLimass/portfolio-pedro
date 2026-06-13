import type { Locale } from "@/i18n/routing";

type Localized = Record<Locale, string>;

export interface Experience {
  company: string;
  role: Localized;
  period: Localized;
  description: Localized;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Zappts",
    role: {
      pt: "Desenvolvedor Front-end Sênior",
      en: "Senior Front-end Developer",
    },
    period: { pt: "Nov 2025 — Atual", en: "Nov 2025 — Present" },
    description: {
      pt: "Aplicação para instituição financeira com Micro Frontends (Module Federation), Design System com Style Dictionary, Storybook e testes com Jest.",
      en: "Financial institution application with Micro Frontends (Module Federation), Design System with Style Dictionary, Storybook and Jest tests.",
    },
    tags: ["React", "TypeScript", "Module Federation", "Design System"],
  },
  {
    company: "Fin-X",
    role: {
      pt: "Desenvolvedor Front-end (consultoria)",
      en: "Front-end Developer (consulting)",
    },
    period: { pt: "Nov 2024 — Abr 2026", en: "Nov 2024 — Apr 2026" },
    description: {
      pt: "Sustentação e evolução de produto do setor de saúde: correção de bugs em produção, formulários e validações complexas, code review e pair programming.",
      en: "Support and evolution of a healthcare product: production bug fixing, complex forms and validations, code review and pair programming.",
    },
    tags: ["Vue.js", "JavaScript", "REST APIs"],
  },
  {
    company: "VIASOFT",
    role: { pt: "Desenvolvedor Front-end", en: "Front-end Developer" },
    period: { pt: "Nov 2024 — Nov 2025", en: "Nov 2024 — Nov 2025" },
    description: {
      pt: "Plataforma Voors de gestão de pessoas: interfaces responsivas com React e Tailwind, integração com APIs REST e otimização de performance.",
      en: "Voors people management platform: responsive interfaces with React and Tailwind, REST API integration and performance optimization.",
    },
    tags: ["React", "Tailwind CSS", "REST APIs"],
  },
  {
    company: "Zappts",
    role: { pt: "Desenvolvedor Front-end", en: "Front-end Developer" },
    period: { pt: "Jun 2021 — Out 2024", en: "Jun 2021 — Oct 2024" },
    description: {
      pt: "Aplicação integrada ao Detran com React 18, TypeScript e Emotion. Testes com Jest, documentação no Storybook e integração via Swagger. Evolução de júnior a pleno.",
      en: "Application integrated with Brazil's traffic authority using React 18, TypeScript and Emotion. Jest tests, Storybook docs and Swagger-based integration. Grew from junior to mid-level.",
    },
    tags: ["React 18", "TypeScript", "Emotion", "Storybook"],
  },
  {
    company: "Math Analytics",
    role: { pt: "Desenvolvedor Fullstack", en: "Fullstack Developer" },
    period: { pt: "Mar 2022 — Set 2022", en: "Mar 2022 — Sep 2022" },
    description: {
      pt: "Editor de tabelas web estilo Excel para o programa LIFT Learning (Fenasbac + Banco Central do Brasil), construído do zero com React e Chakra UI.",
      en: "Excel-like web table editor for the LIFT Learning program (Fenasbac + Central Bank of Brazil), built from scratch with React and Chakra UI.",
    },
    tags: ["React", "Chakra UI"],
  },
  {
    company: "Universidade de Brasília",
    role: { pt: "Desenvolvedor Fullstack", en: "Fullstack Developer" },
    period: { pt: "Jun 2020 — Dez 2020", en: "Jun 2020 — Dec 2020" },
    description: {
      pt: "Mia Ajuda: app mobile de impacto social conectando voluntários a pessoas em necessidade. Arquitetura e funcionalidades com React Native, Node.js e MongoDB.",
      en: "Mia Ajuda: social impact mobile app connecting volunteers to people in need. Architecture and features with React Native, Node.js and MongoDB.",
    },
    tags: ["React Native", "Node.js", "MongoDB"],
  },
];
