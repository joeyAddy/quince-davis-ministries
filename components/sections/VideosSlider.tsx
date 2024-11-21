'use client';

import * as React from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, PlayIcon } from 'lucide-react';
import ReactPlayer from 'react-player';

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
        {[
          'https://res.cloudinary.com/dxu0xbfen/video/upload/v1732137219/video1_dlappp.mp4',
          'https://res.cloudinary.com/dxu0xbfen/video/upload/v1732138247/video2_wpyhz8.mp4',
        ].map((video, index) => (
          <CarouselItem className="lg:h-[70vh] w-full bg-black" key={index}>
            <ReactPlayer
              className="rounded-full [&>video]:object-fill"
              controls
              width="100%"
              height="fit"
              style={{ aspectRatio: '16/9', objectFit: 'fill' }}
              url={video}
              playIcon={
                <div className="absolute top-[40%] left-[48%]">
                  <button className="rounded-full bg-green-600 p-7">
                    <PlayIcon className="text-white" />
                  </button>
                </div>
              }
              light={true}
            />
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
