import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeftIcon } from "@/components/icons";

export default async function NotFoundPage() {
  const t = await getTranslations("notFound");

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-gradient font-mono text-6xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-2 text-muted">{t("description")}</p>
      <Link
        href="/"
        className="bg-gradient-accent mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <ArrowLeftIcon className="size-4" />
        {t("back")}
      </Link>
    </div>
  );
}
