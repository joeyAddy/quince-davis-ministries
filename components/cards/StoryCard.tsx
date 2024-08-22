"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

interface StoryCardProps {
  image: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}

const StoryCard = ({ image, title, text, icon }: StoryCardProps) => {
  useGSAP(() => {
    gsap.fromTo(
      ".story-card",
      {
        y: 150,
        opacity: 0,
        ease: "power1.inOut",
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.inOut",
        delay: 2,
        duration: 1,
        scrollTrigger: {
          trigger: ".story-card",
          start: "bottom 180%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="rounded-lg shadow-lg p-6 flex flex-col gap-y-4 story-card">
      <div className="relative h-2/3">
        <Image
          src={image}
          alt="story image"
          height={1000}
          width={500}
          className="max-h-full"
        />
        <div className="px-3 pt-4 pb-1 absolute bottom-0 mx-auto right-[42%] size-fit bg-white rounded-tr-full rounded-tl-full">
          {icon}
        </div>
      </div>
      <h4 className="font-bold text-center text-xl">{title}</h4>
      <p className="text-center -mt-2">{text}</p>
    </div>
  );
};

export default StoryCard;
