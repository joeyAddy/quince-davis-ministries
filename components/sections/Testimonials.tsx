"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import TestimonialsSliders from "../sliders/TestimonialsSliders";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".testimonials-title",
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
          trigger: ".testimonials-title",
          start: "top bottom",
          end: "bottom -200",
        },
      }
    );

    gsap.fromTo(
      ".testimonials-content",
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
          trigger: ".testimonials-content",
          start: "top bottom",
          end: "bottom -200",
        },
      }
    );
  }, []);
  return (
    <div className="py-10 lg:py-20 px-6 md:px-12 lg:px-48">
      <div className="testimonials-title">
        <SectionTitle
          title="Testimonials"
          subTitle="What people think about us"
          wrap={true}
          centered={true}
        />
      </div>
      <div className="max-lg:w-full lg:w-5/6 mx-auto mt-8 testimonials-content h-fit">
        <TestimonialsSliders />
      </div>
    </div>
  );
};

export default Testimonials;
