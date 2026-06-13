import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { professionalProjects } from "@/data/projects";
import { caseContent } from "@/content/projects";
import { Tag } from "@/components/tag";
import { ArrowLeftIcon } from "@/components/icons";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    professionalProjects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = professionalProjects.find((p) => p.slug === slug);

  if (!project || !hasLocale(routing.locales, locale)) {
    return {};
  }

  return {
    title: project.title[locale],
    description: project.summary[locale],
  };
}

export default async function ProjectCasePage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const project = professionalProjects.find((p) => p.slug === slug);
  const loadContent = caseContent[slug]?.[locale];

  if (!project || !loadContent) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("projects");
  const { default: CaseContent } = await loadContent();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-accent"
      >
        <ArrowLeftIcon className="size-4" />
        {t("backToProjects")}
      </Link>

      <header className="mt-8">
        <p className="font-mono text-sm text-accent">{project.company}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title[locale]}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {project.summary[locale]}
        </p>

        <dl className="mt-8 grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t("role")}
            </dt>
            <dd className="mt-1 text-sm font-medium">{project.role[locale]}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t("period")}
            </dt>
            <dd className="mt-1 text-sm font-medium">
              {project.period[locale]}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t("stack")}
            </dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <div className="prose-case mt-10">
        <CaseContent />
      </div>
    </article>
  );
}
