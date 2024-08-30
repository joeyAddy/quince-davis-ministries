"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { Crown, Heart } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ChrismasMoments = () => {
  const contentRef = useRef<HTMLDivElement>(null);

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
        }
      );
    }

    gsap.fromTo(
      ".moment-image",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".moment-image",
          start: "top bottom",
          end: "bottom -200",
        },
      }
    );
  }, []);
  return (
    <div className="py-10 lg:py-20 px-6 md:px-12 lg:px-48 flex gap-10 max-lg:flex-col">
      <div className="lg:flex-[0.4] lg:max-w-[40%] moment-image">
        <Image
          src="/assets/images/chrismas-tree.jpg"
          alt="story image"
          height={1500}
          width={1000}
          className="h-[600px] object-cover w-full"
        />
      </div>
      <div className="space-y-6 flex-[0.6]" ref={contentRef}>
        <SectionTitle
          title="Christmas"
          subTitle="Christmas Moments with Quincy Davies and The Gospellier"
          wrap={true}
          className="items-start"
        />
        <p>
          The Christmas Moment is a special occasion that takes place during the
          holiday season. Reserve our Christmas Moment with Quincy Bell & Davies
          Gospellier for your end-of-year events, including company parties,
          Christmas church celebrations, and Easter festival seasons.
        </p>
        <p className="dancing-script-regular">
          We will create a special Christmas Moment for you with our services.
        </p>
        <div className="md:flex gap-10 max-md:space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-center size-12 bg-green-500 rounded-full">
              <Heart className="size-6 text-white" />
            </div>
            <h3 className="font-bold text-xl">Sing for Joy</h3>
            <p>For God so loved the word that he gave.</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-center size-12 bg-green-500 rounded-full">
              <Crown className="size-6 text-white" />
            </div>
            <h3 className="font-bold text-xl">Celebrate the King of Kings</h3>
            <p>
              The very birth of our Lord is the greatest gift we were given.
            </p>
          </div>
        </div>
        <Button
          className="bg-green-500 text-white hover:bg-green-500/70 font-bold capitalize rounded-3xl"
          size="lg"
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default ChrismasMoments;
