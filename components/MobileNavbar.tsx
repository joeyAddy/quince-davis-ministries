import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocaleSwitcher from "./LocationSwitcher";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const MobileNavbar = ({
  openMobileNavbarDropdown,
  setOpenMobileNavbarDropdown,
}: {
  openMobileNavbarDropdown: boolean;
  setOpenMobileNavbarDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const translations = useTranslations();

  const handleCloseMobileNavbar = () => {
    setOpenMobileNavbarDropdown(false);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMobileNavbarDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useGSAP(() => {
    if (!openMobileNavbarDropdown) return;
    gsap.fromTo(
      ".mobile-navbar",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
        duration: 0.05,
      }
    );
  }, [openMobileNavbarDropdown]);
  return (
    <div
      ref={dropdownRef}
      className={cn(
        "mobile-navbar shadow-2xl h-fit max-w-full z-50 bg-white flex-col gap-6 !absolute top-[80px] mx-3 md:mx-12  right-0 left-0 px-10 pt-10 pb-8 rounded-bl-3xl rounded-br-3xl",
        openMobileNavbarDropdown ? "flex" : "hidden"
      )}
    >
      <ul
        className="
              lg:hidden flex flex-col gap-4 capitalize text-sm font-semibold [&>li]:border-b [&>li]:pb-3 !text-black"
      >
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/">
            {translations("navigation.home")}
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/events">
            {translations("navigation.events")}
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/services">
            {translations("navigation.services")}
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/contact-us">
            {translations("navigation.contactUs")}
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/about-us">
            {translations("navigation.aboutUs")}
          </Link>
        </li>
        <li className="hover:text-green-500 whitespace-nowrap">
          <LocaleSwitcher />
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
