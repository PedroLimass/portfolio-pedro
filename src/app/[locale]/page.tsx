import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { GithubProjects } from "@/components/sections/github-projects";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Contact } from "@/components/sections/contact";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <About />
      <SelectedProjects locale={locale} />
      <Experience locale={locale} />
      <Stack />
      <GithubProjects locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
