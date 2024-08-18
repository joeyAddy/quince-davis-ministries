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
          className="flex max-lg:flex-col justify-between
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
          "px-6 md:px-12 lg:px-48 flex items-center justify-between py-2",
          !isHome && "bg-white shadow-lg"
        )}
      >
        <div className="flex flex-row-reverse items-center">
          <Image
            src="/assets/images/QDM MINISTRY LOGO GOLD.png"
            alt="logo"
            width={100}
            height={100}
            className="object-scale-down max-lg:size-16"
          />
          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden text-white focus:bg-transparent focus:text-white hover:bg-gray-500/80 hover:text-white"
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
            <li className="hover:text-green-500">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href="/events">Events</Link>
            </li>
            <li className="hover:text-green-500">
              <Link href="/contact-us">Contact us</Link>
            </li>
            <li className="hover:text-green-500">
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