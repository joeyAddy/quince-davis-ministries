'use client';

import * as React from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { heroImages } from '@/constants';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ChristmasMomentSlider = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        loop: true,
      }}
      // @ts-ignore
      plugins={[plugin.current]}
      className="!size-full testimonials"
    >
      <CarouselContent>
        {heroImages.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src="/assets/images/christmas-moments.jpg"
              alt="story image"
              height={1500}
              width={1000}
              className="h-[600px] md:object-cover w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="max-lg:hidden">
        <span
          onClick={() => api?.scrollNext()}
          className="absolute z-[50] top-1/2 right-10 rounded-full p-3 hover:scale-110 transition duration-300 bg-black/50 cursor-pointer"
        >
          <ChevronRight className="text-white" />
        </span>
        <span
          onClick={() => api?.scrollPrev()}
          className="absolute z-[50] top-1/2 left-10 rounded-full p-3 hover:scale-110 transition duration-300 bg-black/50 cursor-pointer"
        >
          <ChevronLeft className="text-white" />
        </span>
      </div>
    </Carousel>
  );
};

export default ChristmasMomentSlider;
