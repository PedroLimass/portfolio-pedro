import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import type { GithubProject } from "@/data/github-projects";
import { ExternalLinkIcon, GithubIcon } from "./icons";
import { Tag } from "./tag";

interface GithubCardProps {
  project: GithubProject;
  locale: Locale;
}

export async function GithubCard({ project, locale }: GithubCardProps) {
  const t = await getTranslations("projects");

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-mono text-sm font-bold">{project.name}</h3>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
            project.area === "backend"
              ? "bg-accent-soft text-accent"
              : "border border-border text-muted"
          }`}
        >
          {project.area}
        </span>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description[locale]}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          <GithubIcon className="size-4" />
          {t("viewRepo")}
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-accent"
          >
            <ExternalLinkIcon className="size-4" />
            {t("viewDemo")}
          </a>
        )}
      </div>
    </div>
  );
}
