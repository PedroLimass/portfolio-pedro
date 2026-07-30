export interface StackGroup {
  key: "frontend" | "architecture" | "backend" | "devops";
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    key: "frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "JavaScript",
      "Angular",
      "React Native",
      "HTML5",
      "CSS3",
      "Chakra UI",
      "Styled Components",
      "Tailwind CSS",
    ],
  },
  {
    key: "architecture",
    items: [
      "Frontend Architecture",
      "Micro Frontends",
      "Module Federation",
      "Design Systems",
      "Style Dictionary",
      "Storybook",
      "Jest",
      "Vitest",
      "Testing Library",
      "TDD",
      "Code Review",
      "Accessibility",
    ],
  },
  {
    key: "backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Django REST Framework",
      "REST APIs",
      "Swagger / OpenAPI",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    key: "devops",
    items: ["Docker", "Nginx", "Git", "GitHub Actions", "Axios", "Fetch API"],
  },
];
