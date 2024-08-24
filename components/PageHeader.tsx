"use client";

import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const PageHeader = ({
  title,
  previousPage,
}: {
  title: string;
  previousPage?: string;
}) => {
  const [openMobileNavbarDropdown, setOpenMobileNavbarDropdown] =
    useState(false);
  return (
    <div className="bg-section bg-cover bg-center h-fit pb-10 w-full flex items-center text-white flex-col space-y-8">
      <div className="w-full">
        <Navbar
          setOpenMobileNavbarDropdown={setOpenMobileNavbarDropdown}
          openMobileNavbarDropdown={openMobileNavbarDropdown}
        />
        <MobileNavbar
          setOpenMobileNavbarDropdown={setOpenMobileNavbarDropdown}
          openMobileNavbarDropdown={openMobileNavbarDropdown}
        />
      </div>
      <div className="space-y-4">
        <p className="text-green-500">
          <Link href="/">Home</Link> -{" "}
          {previousPage ? previousPage + " - " : ""}
          <span className="text-white">{title}</span>
        </p>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
