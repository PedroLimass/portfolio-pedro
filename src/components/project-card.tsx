import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { ProfessionalProject } from "@/data/projects";
import { ArrowRightIcon } from "./icons";
import { Tag } from "./tag";

interface ProjectCardProps {
  project: ProfessionalProject;
  locale: Locale;
}

export async function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = await getTranslations("projects");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="flex items-center justify-between gap-2 font-mono text-xs text-muted">
        <span>{project.company}</span>
        <span>{project.period[locale]}</span>
      </div>

      <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight group-hover:text-accent">
        {project.title[locale]}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.summary[locale]}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        {t("viewCase")}
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
