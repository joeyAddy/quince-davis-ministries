import Footer from "@/components/sections/Footer";
import { locales } from "@/i18n/config";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  locale: string;
}

export async function generateStaticParams() {
  // Generate pages for each supported locale
  return locales.map((locale) => ({
    locale,
  }));
}

const Layout = ({ children, locale }: LayoutProps) => {
  unstable_setRequestLocale(locale);

  return (
    <div>
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
