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
import { SplitText } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText);
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
    const split = new SplitText(".split-text", { type: "chars" });
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

    gsap.from(split.chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
      delay: 0.7,
    });
  }, []);
  return (
    <section className="w-full h-[50vh] md:h-[90vh] lg:h-[80vh] bg-black">
      <NewsLetterDrawer open={openModal} setOpen={setOpenModal} />

      <div className="bg-section bg-center w-full h-full">
        <Navbar setOpenMobileNavbar={setOpenMobileNavbar} />
        <MobileNavbar
          setOpenMobileNavbar={setOpenMobileNavbar}
          openMobileNavbar={openMobileNavbar}
        />
        <div className="pt-12 lg:py-20 max-md:gap-y-3 gap-y-6 flex flex-col items-center max-md:px-4">
          <FaHands className="max-md:text-4xl lg:text-6xl text-white hero-icon" />
          <p className="font-bold uppercase max-md:text-xs  lg:text-2xl text-green-500 text-center split-text">
            Quincy Davies Ministries
          </p>
          <h1 className="text-white font-extrabold max-md:text-lg text-3xl lg:text-5xl uppercase text-center main-text">
            Welcome to Quincy Davis Ministry
          </h1>
          <p className="text-white max-md:text-[14px] lg:text-xl max-md:w-full w-1/2 text-center para">
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
