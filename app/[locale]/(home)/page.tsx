// pages/[locale]/(home)/page.tsx

import ChrismasMoments from "@/components/sections/ChrismasMoments";
import Donate from "@/components/sections/Donate";
import Events from "@/components/sections/Events";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import { locales } from "@/i18n/config";
import { unstable_setRequestLocale } from "next-intl/server";

// Define the pages you want to generate statically for each locale
const pages = ["", "events", "services", "contact-us", "about-us"];

export async function generateStaticParams() {
  // Generate params for each locale and each page
  const params = locales.flatMap((locale) =>
    pages.map((page) => ({
      locale,
      page,
    }))
  );

  return params;
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
