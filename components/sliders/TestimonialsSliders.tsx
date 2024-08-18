import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "@/constants";

const TestimonialsSliders = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
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
    </Carousel>
  );
};

export default TestimonialsSliders;
