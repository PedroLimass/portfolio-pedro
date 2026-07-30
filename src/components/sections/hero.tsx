import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { site } from "@/data/site";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
} from "@/components/icons";

export async function Hero({ locale }: { locale: Locale }) {
  const t = await getTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div className="glow left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-accent" />
      <div className="glow right-0 top-40 h-56 w-56 bg-accent-2" />

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 sm:pt-32">
        <p className="flex items-center gap-2 font-mono text-sm text-muted">
          <MapPinIcon className="size-4 text-accent" />
          {t("location")}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          {t("greeting")} <span className="text-gradient">{t("name")}</span>
        </h1>

        <p className="mt-4 max-w-3xl text-lg font-medium leading-snug text-foreground sm:text-xl">
          {t("role")}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t("pitch")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="bg-gradient-accent inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t("cta.projects")}
            <ArrowRightIcon className="size-4" />
          </Link>
          <a
            href={site.cv[locale]}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <DownloadIcon className="size-4" />
            {t("cta.cv")}
          </a>
          <div className="ml-1 flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
