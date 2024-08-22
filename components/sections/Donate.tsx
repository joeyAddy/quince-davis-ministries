"use client";

import { HeartHandshakeIcon } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Donate = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!contentRef.current) return;

    const contents = gsap.utils.toArray(contentRef.current.children);

    contents.forEach((content) => {
      return gsap.fromTo(
        content as gsap.TweenTarget,
        {
          y: 150,
          opacity: 0,
          ease: "power1.inOut",
        },
        {
          y: 0,
          opacity: 1,
          ease: "power1.inOut",
          delay: 1,
          duration: 2,
          stagger: {
            amount: 0.1,
            ease: "power1.inOut",
            axis: "y",
          },
          scrollTrigger: {
            trigger: content as gsap.DOMTarget,
            start: "bottom 180%",
            end: "top 20%",
          },
        }
      );
    });
  }, []);
  return (
    <div className="relative max-lg:h-[600px] lg:h-[500px] overflow-hidden">
      <div className="parallax-donate bg-fixed bg-center bg-cover h-full w-full"></div>
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white"
      >
        <span className="rounded-full bg-green-500 p-5 border-[20px] border-green-900/50 animate-pulse">
          <HeartHandshakeIcon className="size-12 text-white animate-none" />
        </span>
        <h3 className="max-lg:text-3xl text-5xl font-bold w-2/3 text-center">
          <span> &quot;</span>Pray! And listen to God! You can do this alone,
          but find somebody to do it with you<span>&quot;</span>
        </h3>
        <p className="dancing-script-regular text-2xl">
          Help someone to find someone
        </p>
        <Button
          variant="outline"
          className="bg-transparent text-white hover:bg-gray-500 hover:text-white font-bold uppercase border-yellow-500 mt-3"
          size="lg"
          asChild
        >
          <Link href="/donate">Donate now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Donate;
