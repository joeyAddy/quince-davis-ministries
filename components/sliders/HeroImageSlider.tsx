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
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroImageSlider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
              src={image}
              alt="background"
              height={1000}
              width={1920}
              className="max-xl:h-[97dvh] h-[97dvh] object-cover object-top"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="max-lg:hidden">
        <span
          onClick={() => api?.scrollNext()}
          className="absolute z-[50] top-1/2 right-20 rounded-full p-5 bg-black/50 cursor-pointer"
        >
          <ChevronRight className="text-white" />
        </span>
        <span
          onClick={() => api?.scrollPrev()}
          className="absolute z-[50] top-1/2 left-20 rounded-full p-5 bg-black/50 cursor-pointer"
        >
          <ChevronLeft className="text-white" />
        </span>
      </div>
      <div className="py-2 text-center text-sm text-muted-foreground flex justify-center space-x-2 items-center -mt-20 absolute left-[42%] md:left-[45%] lg:left-[48%] z-50">
        {Array.from({ length: count }).map((_, index) => (
          <span
            className={cn(
              'transition-all duration-300 delay-150 size-4 bg-white/60 border border-gray-200/70 rounded-full cursor-pointer',
              index + 1 === current && 'bg-green-500/60 border-none size-5',
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

export default HeroImageSlider;
