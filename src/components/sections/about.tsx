import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/reveal";

export async function About() {
  const t = await getTranslations("about");

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-muted">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </Reveal>
    </section>
  );
}
