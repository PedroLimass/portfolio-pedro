import { getTranslations } from "next-intl/server";
import { stackGroups } from "@/data/stack";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";

export async function Stack() {
  const t = await getTranslations("stack");

  return (
    <section
      id="stack"
      className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6"
    >
      <Reveal>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-muted">{t("subtitle")}</p>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {stackGroups.map((group, i) => (
          <Reveal key={group.key} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent">
                {t(`groups.${group.key}`)}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
