"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface TestimonialCardProps {
  image: string;
  title: string;
  text: string;
  ministry: string;
}

const TestimonialCard = ({
  image,
  title,
  text,
  ministry,
}: TestimonialCardProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout | null = null;

    const startScrolling = () => {
      if (!textRef.current) return;

      setIsScrolling(true);

      // Scroll to the bottom first with smooth behavior
      textRef.current.scrollTo({
        top: textRef.current.scrollHeight,
        behavior: "smooth",
      });

      // After reaching the bottom, start alternating between top and bottom
      setTimeout(() => {
        scrollInterval = setInterval(() => {
          if (!textRef.current) return;

          if (textRef.current.scrollTop === 0) {
            // Scroll to bottom with smooth behavior
            textRef.current.scrollTo({
              top: textRef.current.scrollHeight,
              behavior: "smooth",
            });
          } else {
            // Scroll to top with smooth behavior
            textRef.current.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }, 4000); // Adjust the interval timing as needed
      }, 1000); // Initial delay before alternating scrolling
    };

    const stopScrolling = () => {
      if (scrollInterval) clearInterval(scrollInterval);
      setIsScrolling(false);
    };

    const cardElement = textRef.current?.parentElement?.parentElement;

    if (cardElement) {
      cardElement.addEventListener("mouseenter", startScrolling);
      cardElement.addEventListener("focus", startScrolling);
      cardElement.addEventListener("touchstart", startScrolling);

      cardElement.addEventListener("mouseleave", stopScrolling);
      cardElement.addEventListener("blur", stopScrolling);
      cardElement.addEventListener("touchend", stopScrolling);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("mouseenter", startScrolling);
        cardElement.removeEventListener("focus", startScrolling);
        cardElement.removeEventListener("touchstart", startScrolling);

        cardElement.removeEventListener("mouseleave", stopScrolling);
        cardElement.removeEventListener("blur", stopScrolling);
        cardElement.removeEventListener("touchend", stopScrolling);
      }
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="max-lg:shadow-md rounded-3xl flex lg:gap-12 max-lg:flex-col lg:justify-start relative">
      <div>
        <Image
          src={image}
          alt="story image"
          height={1500}
          width={1000}
          className="lg:shadow-2xl h-[350px] md:h-[450px] lg:h-[600px] w-full lg:w-[850px] object-cover object-[top] max-lg:rounded-tr-3xl max-lg:rounded-tl-3xl lg:rounded-3xl"
        />
      </div>
      <div className="space-y-4 lg:py-10 lg:pr-12 max-lg:p-6 rounded-bl-3xl rounded-br-3xl lg:rounded-3xl lg:absolute bottom-20 -right-10 lg:w-4/5 bg-white lg:shadow-2xl p-10">
        <h4 className="font-bold text-xl">{ministry}</h4>
        <p
          className="-mt-2 max-h-20 lg:max-h-20 overflow-y-scroll"
          ref={textRef}
        >
          {text}
        </p>
        <h6 className="font-medium text-lg">{title}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;
