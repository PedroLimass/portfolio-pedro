import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { professionalProjects } from "@/data/projects";
import { githubProjects } from "@/data/github-projects";
import { ProjectCard } from "@/components/project-card";
import { GithubCard } from "@/components/github-card";
import { Reveal } from "@/components/reveal";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return {
    title: t("listTitle"),
    description: t("listSubtitle"),
  };
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("projects");

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("listTitle")}
        </h1>
        <p className="mt-2 text-muted">{t("listSubtitle")}</p>
      </Reveal>

      <Reveal className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">
          {t("professional")}
        </h2>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {professionalProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} locale={locale} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h2 className="text-xl font-bold tracking-tight">{t("personal")}</h2>
        <p className="mt-1 text-sm text-muted">{t("personalSubtitle")}</p>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {githubProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <GithubCard project={project} locale={locale} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
