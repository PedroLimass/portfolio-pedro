import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { experiences } from "@/data/experience";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { ExternalLinkIcon } from "@/components/icons";
import { Tag } from "@/components/tag";

export async function Experience({ locale }: { locale: Locale }) {
  const t = await getTranslations("experience");

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6"
    >
      <Reveal>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-muted">{t("subtitle")}</p>
      </Reveal>

      <ol className="relative mt-10 space-y-10 border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp, i) => (
          <Reveal key={`${exp.company}-${exp.period.en}`} delay={i * 0.05}>
            <li className="relative">
              <span
                className="bg-gradient-accent absolute -left-[31px] top-1.5 size-3 rounded-full ring-4 ring-background sm:-left-[39px]"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-bold">{exp.role[locale]}</h3>
                <span className="font-mono text-xs text-accent">
                  {exp.company}
                </span>
              </div>
              <p className="mt-0.5 font-mono text-xs text-muted">
                {exp.period[locale]}
              </p>
              <ul className="mt-3 max-w-2xl space-y-2">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight.en}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-accent"
                  >
                    {highlight[locale]}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tags.slice(0, 8).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-8">
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
        >
          {t("viewLinkedin")}
          <ExternalLinkIcon className="size-4" />
        </a>
      </Reveal>
    </section>
  );
}
