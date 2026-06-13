import { getTranslations } from "next-intl/server";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="text-center text-sm text-muted sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("rights")}
          </p>
          <p className="mt-1 text-xs">{t("builtWith")}</p>
        </div>
        <div className="flex items-center gap-3">
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
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <MailIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
