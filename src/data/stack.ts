export interface StackGroup {
  key: "frontend" | "architecture" | "backend" | "devops";
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    key: "frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Emotion / Styled",
      "Chakra UI",
      "React Native",
    ],
  },
  {
    key: "architecture",
    items: [
      "Micro Frontends",
      "Module Federation",
      "Design Systems",
      "Style Dictionary",
      "Storybook",
      "Jest",
      "Vitest",
      "Testing Library",
    ],
  },
  {
    key: "backend",
    items: [
      "Node.js",
      "Fastify",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "JWT / RBAC",
    ],
  },
  {
    key: "devops",
    items: [
      "Docker",
      "Nginx",
      "Git",
      "GitHub Actions",
      "Swagger / OpenAPI",
      "Vite",
    ],
  },
];
