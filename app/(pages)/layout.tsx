import Footer from "@/components/sections/Footer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
