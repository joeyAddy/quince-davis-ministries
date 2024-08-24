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
    Autoplay({ delay: 5000, stopOnInteraction: true })
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
          <CarouselItem key={index} className="h-fit">
            <div className="p-4 lg:px-20 lg:pb-12">
              <TestimonialCard
                title={testimony.title}
                ministry={testimony.ministry}
                text={testimony.text}
                image={testimony.image}
              />
            </div>
            <div className="text-center text-sm text-muted-foreground flex justify-center space-x-2 items-center mt-5">
              {Array.from({ length: count }).map((_, index) => (
                <span
                  className={cn(
                    "transition-all duration-300 delay-150 size-3 md:size-4 bg-white border border-gray-200 rounded-full cursor-pointer",
                    index + 1 === current &&
                      "bg-green-500 border-none size-4 md:size-5"
                  )}
                  onClick={() => {
                    api?.scrollTo(index);
                  }}
                  key={index}
                />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="size-10 lg:size-20 max-md:hidden" />
      <CarouselNext className="size-10 lg:size-20 max-md:hidden" />
    </Carousel>
  );
};

export default TestimonialsSliders;
