import ChrismasMoments from "@/components/sections/ChrismasMoments";
import Donate from "@/components/sections/Donate";
import Events from "@/components/sections/Events";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import { locales } from "@/i18n/config";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  // Generate pages for each supported locale
  return locales.map((locale) => ({
    locale,
  }));
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main className="max-w-full">
      <Hero />
      <Events />
      <Donate />
      <Testimonials />
      <ChrismasMoments />
      <Footer />
    </main>
  );
}
