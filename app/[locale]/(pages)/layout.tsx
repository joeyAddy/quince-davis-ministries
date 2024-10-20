import Footer from "@/components/sections/Footer";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

interface PagesLayoutProps {
  children: React.ReactNode;
}

const PagesLayout = async ({ children }: PagesLayoutProps) => {
  const locale = await getLocale(); // Get the locale from the router

  // Set the locale using next-intl's unstable_setRequestLocale function
  unstable_setRequestLocale(locale!);

  return (
    <div>
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default PagesLayout;
