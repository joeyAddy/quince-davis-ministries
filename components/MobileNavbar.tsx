import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { CgClose } from "react-icons/cg";
import { cn } from "@/lib/utils";

const MobileNavbar = ({
  openMobileNavbar,
  setOpenMobileNavbar,
}: {
  openMobileNavbar: boolean;
  setOpenMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCloseMobileNavbar = () => {
    setOpenMobileNavbar(false);
  };

  return (
    <div
      className={cn(
        "h-dvh w-full z-50 bg-gradient-to-t from-green-700 via-green-900 to-black space-y-6 flex-col gap-6 absolute top-0 right-0 left-0 px-10 pt-10",
        openMobileNavbar ? "flex" : "hidden"
      )}
    >
      <div className="flex items-center justify-between">
        <Image
          src="/assets/images/QDM MINISTRY LOGO GOLD.png"
          alt="logo"
          width={100}
          height={100}
          className="object-scale-down max-lg:size-20 -ml-5"
        />
        <Button
          size="icon"
          variant="ghost"
          className="text-white focus:text-white hover:bg-gray-500/80 hover:text-white focus:bg-transparent"
          onClick={handleCloseMobileNavbar}
        >
          <CgClose className="size-7" />
        </Button>
      </div>

      <ul
        className="
              lg:hidden flex flex-col gap-10 uppercase text-sm font-semibold text-white"
      >
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/">
            Home
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/events">
            Events
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/contact-us">
            Contact us
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/about-us">
            About us
          </Link>
        </li>
      </ul>
      <Button
        size="sm"
        className="main-btn-bg px-5 uppercase text-xs lg:text-sm font-bold max-xl:!h-8"
        asChild
        onClick={handleCloseMobileNavbar}
      >
        <Link href="/donate">Donate now</Link>
      </Button>
    </div>
  );
};

export default MobileNavbar;
