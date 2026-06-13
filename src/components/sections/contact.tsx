import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "@/components/icons";

export async function Contact({ locale }: { locale: Locale }) {
  const t = await getTranslations("contact");

  const linkClass =
    "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent";

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
          <div className="glow -right-10 -top-10 h-48 w-48 bg-accent" />
          <div className="glow -bottom-10 -left-10 h-48 w-48 bg-accent-2" />

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-2 max-w-xl text-muted">{t("subtitle")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className={linkClass}>
              <MailIcon className="size-4" />
              {t("email")}
            </a>
            {locale === "pt" && (
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <WhatsappIcon className="size-4" />
                {t("whatsapp")}
              </a>
            )}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <LinkedinIcon className="size-4" />
              {t("linkedin")}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <GithubIcon className="size-4" />
              {t("github")}
            </a>
            <a href={site.cv[locale]} download className={linkClass}>
              <DownloadIcon className="size-4" />
              {t("cv")}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
