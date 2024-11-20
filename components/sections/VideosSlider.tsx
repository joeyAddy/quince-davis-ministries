'use client';

import * as React from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Video from 'next-video';
import video1 from '@/videos/video1.mp4';
import video2 from '@/videos/video2.mp4';

const VideoSlider = () => {
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
        {[video1, video2].map((video, index) => (
          <CarouselItem className="h-[70vh]" key={index}>
            <Video style={{ height: '100%' }} src={video} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div>
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

export default VideoSlider;
