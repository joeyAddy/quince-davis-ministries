import { LocateFixed, LocateIcon, Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaMailBulk } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaMapLocation,
  FaX,
  FaYoutube,
} from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = ({
  isHome = true,
  setOpenMobileNavbar,
}: {
  isHome?: boolean;
  setOpenMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleOpenMobileNavbar = () => {
    setOpenMobileNavbar(true);
  };
  return (
    <nav className="divide-y divide-gray-600/50">
      {isHome && (
        <header
          className="hidden lg:flex max-lg:flex-col justify-between
    items-center lg:px-48"
        >
          <div className="flex justify-center max-lg:border-b border-gray-500/50  max-lg:self-center max-lg:w-full max-lg:py-5">
            <p className="text-white flex gap-2 items-center">
              <FaMapLocation /> Address
            </p>
          </div>
          <div className="flex [&>span]:text-white [&>span]:px-4 [&>span]:py-5 [&>span]:border-l last-of-type:[&>span]:border-r [&>span]:border-gray-500/50">
            <span className="hover:text-green-500">
              <FaFacebook />
            </span>
            <span className="hover:text-green-500">
              <FaX />
            </span>
            <span className="hover:text-green-500">
              <FaInstagram />
            </span>
            <span className="hover:text-green-500">
              <FaMailBulk />
            </span>
            <span className="hover:text-green-500">
              <FaYoutube />
            </span>
          </div>
        </header>
      )}
      <div
        className={cn(
          "px-6 md:px-12 lg:px-48 max-lg:bg-white flex items-center justify-between md:py-2",
          !isHome && "bg-white"
        )}
      >
        <div className="flex flex-row-reverse items-center">
          <Link href="/">
            <Image
              src={
                isHome
                  ? "/assets/images/QDM MINISTRY LOGO GOLD.png"
                  : "/assets/images/QDM MINISTRY LOGO BLACK.png"
              }
              alt="logo"
              width={100}
              height={100}
              className={cn(
                "object-scale-down max-lg:size-16",
                !isHome && "size-16"
              )}
            />
          </Link>
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "lg:hidden lg:text-white focus:bg-transparent lg:focus:text-white lg:hover:bg-gray-500/80 lg:hover:text-white",
              !isHome && "text-black hover:text-black"
            )}
            onClick={handleOpenMobileNavbar}
          >
            <Menu />
          </Button>
        </div>
        <div className="flex gap-16 items-center">
          <ul
            className={cn(
              "max-lg:hidden flex gap-16 uppercase text-sm font-semibold",
              isHome ? "text-white" : "text-black"
            )}
          >
            <li className="hover:text-green-500 whitespace-nowrap">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-green-500 whitespace-nowrap">
              <Link href="/events">Events</Link>
            </li>
            <li className="hover:text-green-500 whitespace-nowrap">
              <Link href="/contact-us">Contact us</Link>
            </li>
            <li className="hover:text-green-500 whitespace-nowrap">
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
          <Button
            size="lg"
            className="main-btn-bg px-5 uppercase text-xs lg:text-sm font-bold max-xl:!h-8"
            asChild
          >
            <Link href="/donate">Donate now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
