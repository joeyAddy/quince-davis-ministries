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
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
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
    <section className="w-full h-[70vh] md:h-[75vh] lg:h-[80vh] bg-black relative">
      <NewsLetterDrawer open={openModal} setOpen={setOpenModal} />

      <div className="h-[70vh] md:h-[75vh] lg:h-[80vh]">
        <HeroImageSlider />
      </div>

      <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-black/80">
        <Navbar setOpenMobileNavbar={setOpenMobileNavbar} />
        <MobileNavbar
          setOpenMobileNavbar={setOpenMobileNavbar}
          openMobileNavbar={openMobileNavbar}
        />
        <div className="pt-16 md:py-20 max-md:gap-y-4 gap-y-6 flex flex-col items-center max-md:px-4">
          <FaHands className="max-md:text-4xl text-6xl text-white hero-icon" />
          <h2 className="uppercase max-md:text-xs md:text-xl lg:text-2xl relative z-20 font-bold text-center text-black dark:text-white font-sans">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className=""> Welcome to Quincy Davis Ministry</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500">
                <span className=""> Welcome to Quincy Davis Ministry</span>
              </div>
            </div>
          </h2>
          <h1 className="text-white font-extrabold text-3xl lg:text-5xl uppercase text-center main-text">
            Welcome to Quincy Davis Ministry
          </h1>
          <p className="text-white lg:text-xl max-md:w-full w-1/2 text-center para">
            We are dedicated to serving you through a wide range of programmes
            and services designed to uplift and inspire
          </p>
          <Button
            asChild
            className="main-btn-bg mt-3 max-md:w-fit text-lg max-md:text-base font-bold max-md:h-10 hero-btn"
            size="lg"
          >
            <Link href="/about-us"> Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
