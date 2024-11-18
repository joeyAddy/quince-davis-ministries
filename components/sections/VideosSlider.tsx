'use client';

import Video from 'next-video';
import getStarted from '@/videos/get-started.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const VideosSlider = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.video-title',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.events-title',
          start: 'top bottom',
          end: 'bottom -200',
        },
      },
    );
    gsap.fromTo(
      '.video-content',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.7,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.events-content',
          start: 'top bottom',
          end: 'bottom -200',
        },
      },
    );
  }, []);
  return (
    <div className="py-10 lg:py-20 px-6 md:px-12 lg:px-48 grid lg:grid-cols-2 gap-6 lg:gap-10 video-content">
      <div className="p-4 bg-black rounded-3xl shadow-2xl">
        <Video src={getStarted} />
      </div>
      <div className="p-4 bg-black rounded-3xl shadow-2xl">
        <Video src={getStarted} />
      </div>
    </div>
  );
};

export default VideosSlider;
