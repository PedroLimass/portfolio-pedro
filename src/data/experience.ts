import type { Locale } from "@/i18n/routing";

type Localized = Record<Locale, string>;

export interface Experience {
  company: string;
  role: Localized;
  period: Localized;
  highlights: Localized[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Zappts",
    role: {
      pt: "Senior Software Engineer",
      en: "Senior Software Engineer",
    },
    period: { pt: "Nov 2025 — Atual", en: "Nov 2025 — Present" },
    highlights: [
      {
        pt: "Desenvolvi e evoluí uma aplicação de serviços financeiros com React.js e TypeScript, com responsabilidade por interfaces escaláveis, componentes reutilizáveis, código de qualidade em produção e modernização contínua da arquitetura frontend.",
        en: "Developed and evolved a financial services application using React.js and TypeScript, with responsibility for scalable user interfaces, reusable components, production-quality code, and the continuous modernization of the frontend architecture.",
      },
      {
        pt: "Implementei uma arquitetura de Micro Frontends com Module Federation e contribuí para o Design System da aplicação com Style Dictionary, padrões de componentes reutilizáveis e documentação no Storybook, melhorando consistência visual e manutenibilidade da plataforma.",
        en: "Implemented a Micro Frontend architecture with Module Federation and contributed to the application’s Design System through Style Dictionary, reusable component patterns, and Storybook documentation, improving visual consistency and maintainability across the platform.",
      },
      {
        pt: "Construí e mantive testes automatizados com Jest, monitei coverage, integrei APIs REST documentadas com Swagger/OpenAPI e apoiei fluxos de entrega com Docker, Nginx, Git e lint — em colaboração com times de Produto, Backend, QA e Design.",
        en: "Built and maintained automated tests with Jest, monitored test coverage, integrated REST APIs documented with Swagger/OpenAPI, and supported delivery workflows using Docker, Nginx, Git, and linting while collaborating with Product, Backend, QA, and Design teams.",
      },
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Micro Frontends",
      "Module Federation",
      "Design Systems",
      "Style Dictionary",
      "Storybook",
      "Jest",
      "REST APIs",
      "Docker",
      "Nginx",
    ],
  },
  {
    company: "Fin-X",
    role: {
      pt: "Software Engineer",
      en: "Software Engineer",
    },
    period: { pt: "Nov 2024 — Nov 2025", en: "Nov 2024 — Nov 2025" },
    highlights: [
      {
        pt: "Mantive e evoluí uma plataforma web de saúde com regras de negócio complexas, sustentando fluxos críticos de agendamento e funcionalidades em produção com Vue.js, JavaScript, TypeScript, HTML e CSS.",
        en: "Maintained and evolved a healthcare web platform with complex business rules, supporting critical scheduling workflows and production functionality using Vue.js, JavaScript, TypeScript, HTML, and CSS.",
      },
      {
        pt: "Desenvolvi e refinei formulários, regras de validação, modais, interfaces responsivas e integrações com APIs REST, sustentando código legado e preservando a compatibilidade com o comportamento existente da aplicação.",
        en: "Developed and refined forms, validation rules, modals, responsive interfaces, and REST API integrations while sustaining legacy code and preserving compatibility with existing application behavior.",
      },
      {
        pt: "Investiguei e resolvi problemas em produção com debugging sistemático, reduzindo inconsistências operacionais e risco de regressão. Contribuí com code reviews, pair programming e refinamento técnico para melhorar qualidade de código e previsibilidade das entregas.",
        en: "Investigated and resolved production issues through systematic debugging, reducing operational inconsistencies and regression risk. Contributed through code reviews, pair programming, and technical refinement to improve code quality and delivery predictability.",
      },
    ],
    tags: [
      "Vue.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Form Validation",
      "Production Debugging",
      "Legacy Code",
      "Responsive Web",
    ],
  },
  {
    company: "Zappts",
    role: {
      pt: "Frontend Engineer",
      en: "Frontend Engineer",
    },
    period: { pt: "Jun 2021 — Out 2024", en: "Jun 2021 — Oct 2024" },
    highlights: [
      {
        pt: "Desenvolvi e mantive aplicações web e mobile para clientes dos setores de consumo e varejo, incluindo Burger King, Popeyes Louisiana Chicken e C&A, com React.js, JavaScript, TypeScript, HTML e CSS.",
        en: "Developed and maintained web and mobile applications for clients in consumer and retail sectors, including Burger King, Popeyes Louisiana Chicken, and C&A, using React.js, JavaScript, TypeScript, HTML, and CSS.",
      },
      {
        pt: "Construí componentes reutilizáveis, integrei APIs REST com Axios e Fetch API e implementei layouts responsivos para desktop, tablet e mobile, melhorando consistência de interface e eficiência de desenvolvimento.",
        en: "Built reusable components, integrated REST APIs with Axios and the Fetch API, and implemented responsive layouts for desktop, tablet, and mobile experiences, improving interface consistency and development efficiency.",
      },
      {
        pt: "Otimizei performance frontend, corrigi defeitos da aplicação e colaborei com designers, engenheiros backend e demais membros do time em cerimônias ágeis, refinamentos técnicos, entrega de funcionalidades e práticas de TDD.",
        en: "Optimized frontend performance, corrected application defects, and collaborated with designers, backend engineers, and other team members throughout agile ceremonies, technical refinements, feature delivery, and test-driven development activities.",
      },
    ],
    tags: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Axios",
      "Fetch API",
      "Responsive Design",
      "Performance",
      "TDD",
    ],
  },
  {
    company: "Math Analytics",
    role: {
      pt: "Full Stack Engineer",
      en: "Full Stack Engineer",
    },
    period: { pt: "Mar 2022 — Set 2022", en: "Mar 2022 — Sep 2022" },
    highlights: [
      {
        pt: "Contribuí no desenvolvimento de uma aplicação web de tecnologia financeira criada pelo programa LIFT Learning, iniciativa envolvendo Fenasbac e Banco Central do Brasil, focada em soluções inovadoras para o sistema financeiro brasileiro.",
        en: "Contributed to the development of a financial technology web application created through the LIFT Learning program, an initiative involving Fenasbac and the Central Bank of Brazil, focused on innovative solutions for Brazil’s financial system.",
      },
      {
        pt: "Construí a aplicação do zero conforme requisitos do cliente, implementando uma experiência interativa de manipulação de tabelas na web inspirada em planilhas, com React.js, TypeScript e Chakra UI.",
        en: "Built the application from the ground up according to client requirements, implementing an interactive web-based table manipulation experience inspired by spreadsheet capabilities using React.js, TypeScript, and Chakra UI.",
      },
      {
        pt: "Apoiei a entrega fullstack com Python e Django REST Framework e participei de planning, dailies e retrospectivas para coordenar implementação, validar requisitos e entregar funcionalidades no prazo do projeto.",
        en: "Supported full-stack delivery with Python and Django REST Framework and participated in planning, daily meetings, and retrospectives to coordinate implementation, validate product requirements, and deliver functionality within the expected project schedule.",
      },
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Chakra UI",
      "Python",
      "Django REST Framework",
      "REST APIs",
      "Frontend Architecture",
      "Data Tables",
      "Storybook",
      "Jest",
      "Docker",
    ],
  },
  {
    company: "Orc'estra Gamificação",
    role: {
      pt: "Project Manager",
      en: "Project Manager",
    },
    period: { pt: "Jan 2021 — Out 2021", en: "Jan 2021 — Oct 2021" },
    highlights: [
      {
        pt: "Gerenciei iniciativas de produtos digitais com responsabilidade por organização de projetos, planejamento de entregas, alinhamento de escopo, capacidade de recursos e coordenação do trabalho técnico em múltiplas frentes.",
        en: "Managed digital product initiatives with responsibility for project organization, delivery planning, scope alignment, resource capacity, and the coordination of technical work across multiple project activities.",
      },
      {
        pt: "Avaliei a viabilidade técnica de requisitos e apoiei decisões de priorização com base em recursos disponíveis, necessidades de produto, complexidade de implementação e restrições de entrega.",
        en: "Evaluated the technical feasibility of incoming requirements and supported prioritization decisions based on available resources, product needs, implementation complexity, and delivery constraints.",
      },
      {
        pt: "Melhorei a visibilidade das entregas e a consistência dos processos monitorando a execução, organizando atividades de desenvolvimento e apoiando times que trabalhavam com React.js, Node.js, Express.js, Chakra UI, Docker, JavaScript e TypeScript.",
        en: "Improved delivery visibility and process consistency by monitoring execution, organizing development activities, and supporting teams working with React.js, Node.js, Express.js, Chakra UI, Docker, JavaScript, and TypeScript.",
      },
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Chakra UI",
      "Docker",
      "JavaScript",
      "TypeScript",
      "Full-Stack",
      "REST APIs",
      "Project Management",
    ],
  },
  {
    company: "Universidade de Brasília",
    role: {
      pt: "Software Engineer",
      en: "Software Engineer",
    },
    period: { pt: "Jun 2020 — Dez 2020", en: "Jun 2020 — Dec 2020" },
    highlights: [
      {
        pt: "Desenvolvi um aplicativo mobile para conectar pessoas que solicitam ajuda a voluntários capazes de oferecer suporte material ou imaterial, contribuindo para um projeto de tecnologia com propósito social direto.",
        en: "Developed a mobile application designed to connect people requesting assistance with volunteers able to provide material or non-material support, contributing to a technology project with a direct social purpose.",
      },
      {
        pt: "Desenhei a arquitetura inicial da aplicação e implementei funcionalidades fullstack com React Native, React.js, Node.js, Express.js, MongoDB, PostgreSQL e Styled Components.",
        en: "Designed the application’s initial architecture and implemented full-stack functionality using React Native, React.js, Node.js, Express.js, MongoDB, PostgreSQL, and Styled Components.",
      },
      {
        pt: "Realizei testes, debugging e documentação técnica para apoiar estabilidade e manutenibilidade. A aplicação resultante, Mia Ajuda, foi publicada em https://miaajuda.netlify.app.",
        en: "Performed application testing, debugging, and technical documentation to support system stability and maintainability. The resulting Mia Ajuda application was published at https://miaajuda.netlify.app.",
      },
    ],
    tags: [
      "React Native",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Styled Components",
      "Full-Stack",
      "API Development",
      "Testing",
    ],
  },
];
