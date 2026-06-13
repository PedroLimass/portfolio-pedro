import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { professionalProjects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects"];
  const projectRoutes = professionalProjects.map(
    (project) => `/projects/${project.slug}`,
  );

  return [...routes, ...projectRoutes].flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [
            l === "pt" ? "pt-BR" : l,
            `${site.url}/${l}${route}`,
          ]),
        ),
      },
    })),
  );
}
