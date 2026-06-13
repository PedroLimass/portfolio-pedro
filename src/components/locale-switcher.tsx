"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const labels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function switchTo(next: Locale) {
    router.replace(
      // @ts-expect-error -- params are compatible with the current pathname
      { pathname, params },
      { locale: next },
    );
  }

  return (
    <div
      className="flex items-center rounded-lg border border-border p-0.5"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={locale === l}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
            locale === l
              ? "bg-gradient-accent text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
