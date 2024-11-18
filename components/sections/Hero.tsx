'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import MobileNavbar from '../MobileNavbar';
import NewsLetterDrawer from '../modals/NewsLetterDrawer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import HeroImageSlider from '../sliders/HeroImageSlider';
import { useLocale, useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [openMobileNavbarDropdown, setOpenMobileNavbarDropdown] =
    useState(false);
  const [openModal, setOpenModal] = useState(false);

  const locale = useLocale();

  const t = useTranslations('heroSection');

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 8000);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '.split-text',
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.7,
        stagger: 0.1,
        ease: 'power1.inOut',
      },
    );
    gsap.fromTo(
      '.para',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
        stagger: 0.1,
        ease: 'power1.inOut',
      },
    );

    gsap.fromTo(
      '.main-text',
      {
        opacity: 0,
        scale: 1.5,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 1,
        ease: 'power1.inOut',
      },
    );

    gsap.fromTo(
      '.summary-text',
      {
        opacity: 0,
        scale: 1.5,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 1.7,
        ease: 'power1.inOut',
      },
    );
  }, []);
  return (
    <section className="w-full h-dvh bg-black relative">
      <NewsLetterDrawer open={openModal} setOpen={setOpenModal} />

      <div className="h-[70vh] md:h-[75vh] lg:h-[80vh]">
        <HeroImageSlider />
      </div>

      <div className="w-full h-[102%] absolute top-0 right-0 bottom-0 left-0 bg-black/80 flex flex-col">
        <Navbar
          setOpenMobileNavbarDropdown={setOpenMobileNavbarDropdown}
          openMobileNavbarDropdown={openMobileNavbarDropdown}
          locale={locale}
        />
        <MobileNavbar
          setOpenMobileNavbarDropdown={setOpenMobileNavbarDropdown}
          openMobileNavbarDropdown={openMobileNavbarDropdown}
        />
        <div className="pt-16 h-1/2 md:py-20 max-md:gap-y-4 gap-y-6 flex flex-col items-center max-md:px-4 flex-1 justify-center">
          <h3 className="text-white font-extralight text-3xl lg:text-5xl uppercase text-center main-text leading-tight">
            {t('welcome')}
          </h3>
          <h1 className="text-white text-5xl lg:text-7xl font-extrabold text-center para uppercase leading-tight">
            Quincy Davies Ministries
          </h1>
          <p className="text-white max-d:text-base text-xl text-center summary-text">
            {t('summary')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
