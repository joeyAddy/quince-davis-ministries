import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CgClose } from "react-icons/cg";

const Navbar = ({
  setOpenMobileNavbarDropdown,
  openMobileNavbarDropdown,
}: {
  openMobileNavbarDropdown: boolean;
  setOpenMobileNavbarDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleOpenMobileNavbarDropdown = () => {
    setOpenMobileNavbarDropdown(!openMobileNavbarDropdown);
  };
  return (
    <nav
      className={cn(
        "px-6 lg:px-32 mx-3 md:mx-12 max-w-full max-lg:bg-white flex items-center justify-between md:py-2 space-x-5 bg-white !text-black max-lg:py-2 mt-6 rounded-3xl",
        openMobileNavbarDropdown && "!pb-5"
      )}
    >
      <div className="flex flex-row-reverse items-center">
        <Link href="/">
          <Image
            src={"/assets/images/QDM MINISTRY LOGO BLACK.png"}
            alt="logo"
            width={100}
            height={100}
            className={cn("object-scale-down max-md:size-14 size-16")}
          />
        </Link>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "lg:hidden focus:bg-transparent -ml-3 lg:hover:bg-gray-500/80 "
          )}
          onClick={handleOpenMobileNavbarDropdown}
        >
          {openMobileNavbarDropdown ? <CgClose className="size-5" /> : <Menu />}
        </Button>
      </div>
      <div className="flex gap-16 items-center justify-center flex-1">
        <ul className="max-lg:hidden flex gap-16 capitalize text-sm font-semibold">
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/events">Events</Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/contact-us">Contact us</Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/about-us">About us</Link>
          </li>
        </ul>
      </div>
      <Button
        className="main-btn-bg px-5 capitalize text-xs lg:text-sm font-bold max-xl:!h-8 rounded-3xl"
        asChild
      >
        <Link href="/donate">Support us</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
