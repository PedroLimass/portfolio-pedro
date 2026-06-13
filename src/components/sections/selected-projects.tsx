import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { professionalProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ArrowRightIcon } from "@/components/icons";

export async function SelectedProjects({ locale }: { locale: Locale }) {
  const t = await getTranslations("projects");
  const featured = professionalProjects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6"
    >
      <Reveal>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-muted">{t("subtitle")}</p>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} locale={locale} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          {t("viewAll")}
          <ArrowRightIcon className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
