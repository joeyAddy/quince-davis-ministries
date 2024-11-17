import Events from "@/components/pages/Events";
import { locales } from "@/i18n/config";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  // Generate pages for each supported locale
  return locales.map((locale) => ({
    locale,
  }));
}

export default function EventsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <Events />;
}
