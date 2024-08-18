import Link from "next/link";
import React from "react";
import { GrStarOutline } from "react-icons/gr";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="relative max-md:h-[730px] md:h-[600px] lg:h-[400px] overflow-hidden">
        <div className="parallax-footer bg-fixed bg-center bg-cover h-full w-full"></div>
        <div className="absolute inset-0 flex flex-col gap-10 text-white">
          <div className="max-lg:block max-lg:space-y-8 flex items-start justify-between container pt-14">
            <div className="max-lg:block max-lg:space-y-8 flex gap-20 flex-1">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-1 bg-green-500 w-12" />
                  <h4 className="font-bold text-3xl">About</h4>
                </div>
                <p className="max-lg:w-full w-64">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  expedita nulla et, minima accusantium, eaque, inventore
                  maiores ullam dolor error unde voluptatum necessitatibus
                  doloremque deserunt quam rem magni velit quibusdam.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-1 bg-green-500 w-12" />
                  <h4 className="font-bold text-3xl whitespace-nowrap">
                    Quick links
                  </h4>
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/about-us"
                      className="flex items-center space-x-3 color-hover-transition"
                    >
                      <GrStarOutline />
                      <span>About us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="flex items-center space-x-3 color-hover-transition"
                    >
                      <GrStarOutline />
                      <span>Contact us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4 flex flex-col w-fit">
              <div className="flex items-center space-x-2">
                <div className="h-1 bg-green-500 w-12" />
                <h4 className="font-bold text-3xl whitespace-nowrap">
                  Newsletter
                </h4>
              </div>
              <p className="max-lg:w-full w-64">
                Sign up for our weekly newsletter to stay updated on all news
                and events
              </p>
              <div className="flex">
                <Input
                  className="rounded-none rounded-tl-lg rounded-bl-lg h-12 text-black"
                  type="email"
                  placeholder="Email"
                />
                <Button className="bg-yellow-500 hover:bg-yellow-500/80 h-12 rounded-none rounded-tr-lg rounded-br-lg">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-black/80 w-full text-center py-5">
            <p>Copyrights © {currentYear} Name ♥</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
