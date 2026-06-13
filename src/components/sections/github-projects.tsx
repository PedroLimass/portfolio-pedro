import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { githubProjects } from "@/data/github-projects";
import { GithubCard } from "@/components/github-card";
import { Reveal } from "@/components/reveal";

export async function GithubProjects({ locale }: { locale: Locale }) {
  const t = await getTranslations("projects");

  return (
    <section
      id="personal-projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6"
    >
      <Reveal>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t("personal")}
        </h2>
        <p className="mt-2 text-muted">{t("personalSubtitle")}</p>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {githubProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06}>
            <GithubCard project={project} locale={locale} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
