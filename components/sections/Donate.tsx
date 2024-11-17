"use client";

import { HeartHandshakeIcon } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslations } from "next-intl";
gsap.registerPlugin(ScrollTrigger);

const Donate = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const translations = useTranslations();

  useGSAP(() => {
    if (contentRef.current) {
      const content = gsap.utils.toArray(contentRef.current.children);
      gsap.fromTo(
        content as gsap.TweenTarget,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.7,
          ease: "power1.inOut",
          stagger: 0.5,
          scrollTrigger: {
            trigger: content as gsap.DOMTarget,
            start: "top bottom",
            end: "bottom -200",
          },
        },
      );
    }
  }, []);
  return (
    <div className="relative max-lg:h-[600px] lg:h-[500px] overflow-hidden w-full">
      <div className="parallax-donate bg-fixed bg-center bg-cover h-full w-full"></div>
      <div
        className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white"
        ref={contentRef}
      >
        <span className="rounded-full bg-green-500 p-5 border-[20px] border-green-900/50 animate-pulse">
          <HeartHandshakeIcon className="size-12 text-white animate-none" />
        </span>
        <h3 className="max-lg:text-3xl text-5xl font-bold w-2/3 text-center">
          <span> &quot;</span>
          {translations("support.title")}
          <span>&quot;</span>
        </h3>
        <p className="dancing-script-regular text-2xl">
          {translations("support.text")}
        </p>
        <Button
          variant="outline"
          className="bg-transparent text-white hover:bg-gray-500 hover:text-white font-bold capitalize border-yellow-500 mt-3 rounded-3xl"
          size="lg"
          asChild
        >
          <Link href="/donate"> {translations("support.buttonText")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default Donate;
