"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import EventCard from "../cards/EventCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslations } from "next-intl";
import { Event } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const translations = useTranslations("");
  const title = useTranslations("homePageTitles");

  useGSAP(() => {
    gsap.fromTo(
      ".events-title",
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
          trigger: ".events-title",
          start: "top bottom",
          end: "bottom -200",
        },
      }
    );
    gsap.fromTo(
      ".events-content",
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
        scrollTrigger: {
          trigger: ".events-content",
          start: "top bottom",
          end: "bottom -200",
        },
      }
    );
  }, []);
  return (
    <div className="py-10 lg:py-20 px-6 md:px-12 lg:px-48">
      <div className="events-title">
        <SectionTitle
          title={title("events.title")}
          subTitle={title("events.text")}
          wrap={true}
          centered={true}
        />
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-lg:w-full mx-auto mt-8 events-content">
        {translations
          .raw("events")
          .slice(0, 3)
          .map((event: Event) => (
            <EventCard
              key={event.title}
              title={event.title}
              text={event.text}
              image={event.images[0]}
              date={`${event.frequency} - (${event?.time})`}
              id={event.id}
            />
          ))}
      </div>
      <div className="w-full text-right mt-8 flex space-x-1 items-center justify-end">
        <Link
          href="/events"
          className="text-yellow-500 font-semibold underline underline-offset-4"
        >
          {translations("seeMore")}
        </Link>
        <ChevronRight className="text-yellow-500 size-4" />
      </div>
    </div>
  );
};

export default Events;
