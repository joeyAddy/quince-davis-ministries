"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { FaHands } from "react-icons/fa";
import { Button } from "../ui/button";
import MobileNavbar from "../MobileNavbar";
import NewsLetterDrawer from "../modals/NewsLetterDrawer";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroImageSlider from "../sliders/HeroImageSlider";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [openMobileNavbarDropdown, setOpenMobileNavbarDropdown] =
    useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 3000);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".split-text",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.7,
        stagger: 0.1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
        stagger: 0.1,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".main-text",
      {
        opacity: 0,
        scale: 1.5,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 1.5,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".hero-btn",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "bounce.inOut",
        delay: 2.5,
      }
    );

    gsap.fromTo(
      ".hero-icon",
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power1.inOut",
        delay: 0.5,
      }
    );
  }, []);
  return (
    <section className="w-full h-dvh bg-black relative">
      <NewsLetterDrawer open={openModal} setOpen={setOpenModal} />

      <div className="h-[70vh] md:h-[75vh] lg:h-[80vh]">
        <HeroImageSlider />
      </div>

      <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-black/80 flex flex-col">
        <Navbar
          setOpenMobileNavbarDropdown={setOpenMobileNavbarDropdown}
          openMobileNavbarDropdown={openMobileNavbarDropdown}
        />
        <MobileNavbar
          setOpenMobileNavbarDropdown={setOpenMobileNavbarDropdown}
          openMobileNavbarDropdown={openMobileNavbarDropdown}
        />
        <div className="pt-16 md:py-20 max-md:gap-y-4 gap-y-6 flex flex-col items-center max-md:px-4 flex-1 justify-center">
          <h3 className="text-white font-extralight text-3xl lg:text-5xl uppercase text-center main-text leading-tight">
            Welcome to
          </h3>
          <h1 className="text-white text-5xl lg:text-8xl font-extrabold text-center para uppercase leading-tight">
            Quincy Davis Ministry
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
