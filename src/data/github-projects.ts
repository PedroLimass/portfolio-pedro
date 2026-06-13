import type { Locale } from "@/i18n/routing";

type Localized = Record<Locale, string>;

export interface GithubProject {
  name: string;
  description: Localized;
  repo: string;
  demo?: string;
  tags: string[];
  area: "backend" | "frontend";
}

export const githubProjects: GithubProject[] = [
  {
    name: "api-solid-nodejs",
    description: {
      pt: "API REST estilo GymPass com Node.js, Fastify, Prisma e PostgreSQL. Princípios SOLID, autenticação JWT com RBAC e testes unitários + e2e.",
      en: "GymPass-style REST API with Node.js, Fastify, Prisma and PostgreSQL. SOLID principles, JWT auth with RBAC and unit + e2e tests.",
    },
    repo: "https://github.com/PedroLimass/api-solid-nodejs",
    tags: ["Node.js", "Fastify", "Prisma", "PostgreSQL", "Vitest", "CI"],
    area: "backend",
  },
  {
    name: "database-library",
    description: {
      pt: "Modelagem de biblioteca universitária em PostgreSQL: CTEs, window functions, triggers, procedures, JSONB e uma API REST em Node.js.",
      en: "University library modeling in PostgreSQL: CTEs, window functions, triggers, procedures, JSONB and a Node.js REST API.",
    },
    repo: "https://github.com/PedroLimass/database-library",
    tags: ["PostgreSQL", "SQL", "Node.js", "REST API"],
    area: "backend",
  },
  {
    name: "clean-code-ddd",
    description: {
      pt: "Domínio de fórum (perguntas e respostas) modelado com Domain-Driven Design e Clean Code: entidades, repositórios e casos de uso testados.",
      en: "Forum domain (Q&A) modeled with Domain-Driven Design and Clean Code: entities, repositories and fully tested use cases.",
    },
    repo: "https://github.com/PedroLimass/clean-code-ddd",
    tags: ["TypeScript", "DDD", "Clean Code", "Vitest"],
    area: "backend",
  },
  {
    name: "pokedex-bootcamp",
    description: {
      pt: "Pokédex com busca, filtros avançados e simulador de batalha. Refatorada de CRA/JS para Vite/TypeScript com React Query e cache em IndexedDB.",
      en: "Pokédex with search, advanced filters and a battle simulator. Refactored from CRA/JS to Vite/TypeScript with React Query and IndexedDB cache.",
    },
    repo: "https://github.com/PedroLimass/pokedex-bootcamp",
    tags: ["React", "TypeScript", "React Query", "Vite", "IndexedDB"],
    area: "frontend",
  },
  {
    name: "vue-tasks",
    description: {
      pt: "Gerenciador de tarefas com Vue 3, Composition API, Pinia e Vue Router. Autenticação por token, dark mode persistido e UI responsiva.",
      en: "Task manager with Vue 3, Composition API, Pinia and Vue Router. Token auth, persisted dark mode and responsive UI.",
    },
    repo: "https://github.com/PedroLimass/vue-tasks",
    tags: ["Vue 3", "Pinia", "TypeScript", "Tailwind CSS"],
    area: "frontend",
  },
  {
    name: "gallery-plus",
    description: {
      pt: "Galeria de fotos com álbuns, upload, filtros e busca. Interface simples e responsiva para organizar imagens.",
      en: "Photo gallery with albums, uploads, filters and search. Simple, responsive interface to organize images.",
    },
    repo: "https://github.com/PedroLimass/gallery-plus",
    tags: ["React", "TypeScript", "Upload", "UI"],
    area: "frontend",
  },
];
