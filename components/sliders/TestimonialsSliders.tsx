"use client";

import * as React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const TestimonialsSliders = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      // @ts-ignore
      plugins={[plugin.current]}
      className="w-full testimonials"
    >
      <CarouselContent>
        {testimonials.map((testimony, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <TestimonialCard
                title={testimony.title}
                ministry={testimony.ministry}
                text={testimony.text}
                image={testimony.image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="py-2 text-center text-sm text-muted-foreground flex justify-center space-x-2 items-center max-md:-mt-5">
        {Array.from({ length: count }).map((_, index) => (
          <span
            className={cn(
              "transition-all duration-300 delay-150 size-4 bg-white border border-gray-200 rounded-full cursor-pointer",
              index + 1 === current && "bg-green-500 border-none size-5"
            )}
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default TestimonialsSliders;
