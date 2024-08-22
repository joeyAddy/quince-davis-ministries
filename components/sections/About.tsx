"use client";

import React, { useRef } from "react";
import SectionTitle from "../SectionTitle";
import StoryCard from "../cards/StoryCard";
import { IoHeartOutline } from "react-icons/io5";
import { FaBible } from "react-icons/fa";
import { Crown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      ".title",
      {
        opacity: 0,
        y: 150,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.inOut",
        duration: 1,
      }
    );
  }, []);
  return (
    <div className="py-20 px-6 md:px-12 lg:px-48">
      <div className="title">
        <SectionTitle title="Who we are" subTitle="Our Story" />
      </div>
      <div
        ref={contentRef}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-lg:w-full mx-auto mt-8"
      >
        <StoryCard
          title="All our heart"
          text="We give love with a big heart filled with the love of God shared abroad in our heart"
          image="/assets/images/all our heart.jpg"
          icon={<IoHeartOutline className="size-7 text-green-500" />}
        />
        <StoryCard
          title="Study the bible"
          text="We cherish the word of God and do all we can to help you know more about God and get closer to him."
          image="/assets/images/bible.jpg"
          icon={<FaBible className="size-7 text-green-500" />}
        />
        <StoryCard
          title="Experience Heaven"
          text="God is right here with us, Heaven is a prayer away, a word close by and a gathering with fellow brethren."
          image="/assets/images/heaven.jpg"
          icon={<Crown className="size-7 text-green-500" />}
        />
      </div>
    </div>
  );
};

export default About;
