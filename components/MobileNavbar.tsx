import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { CgClose } from "react-icons/cg";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MobileNavbar = ({
  openMobileNavbarDropdown,
  setOpenMobileNavbarDropdown,
}: {
  openMobileNavbarDropdown: boolean;
  setOpenMobileNavbarDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
            Home
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/events">
            Events
          </Link>
        </li>
        <li className="hover:text-green-500">
          <Link onClick={handleCloseMobileNavbar} href="/services">
            Services
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
    </div>
  );
};

export default MobileNavbar;
