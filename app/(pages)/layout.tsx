"use client";

import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import React, { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);

  return (
    <div>
      <Navbar setOpenMobileNavbar={setOpenMobileNavbar} isHome={false} />
      <MobileNavbar
        setOpenMobileNavbar={setOpenMobileNavbar}
        openMobileNavbar={openMobileNavbar}
      />
      <main className="min-h-[60vh] container py-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
