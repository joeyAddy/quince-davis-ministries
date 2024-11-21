'use client';

import LearnMoreDrawer from '@/components/modals/LearnMoreDrawer';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Service } from '@/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

const Services = () => {
  const translations = useTranslations();

  const [open, setOpen] = useState(false);

  const t = useTranslations();

  const services = t.raw('services');

  return (
    <>
      <LearnMoreDrawer open={open} setOpen={setOpen} />
      <div>
        <PageHeader title={translations('navigation.services')} />
        <div className="grid lg:grid-cols-4 gap-10 px-6 md:px-12 lg:px-48 py-10 md:py-12 lg:py-20">
          <div className="col-span-2 grid md:grid-cols-2 gap-10 max-h-fit h-fit">
            <Image
              src="https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137764/IMG_20230421_193411_hjql2h.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300 min-h-56"
            />
            <Image
              src="https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137650/IMG-20240420-WA0032_t8ech5.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300 min-h-56"
            />
            <Image
              src="https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137711/IMG_20230902_160831_kznlig.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300 min-h-56"
            />
            <Image
              src="https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137657/IMG_20230220_175945_rbk9gk.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300 min-h-56"
            />
            <Image
              src="https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137668/IMG_20231007_164207_shxag5.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300 min-h-56"
            />
            <Image
              src="https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137650/IMG-20240420-WA0033_z4da2r.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300 min-h-56"
            />
          </div>
          <div className="space-y-5 col-span-2">
            <h3 className="font-bold text-3xl">
              {translations('servicesPage.mainTitle')}
            </h3>
            <ul className="list-disc ml-5 space-y-6">
              {services.map((service: Service) => (
                <li key={service.title}>
                  <span className="font-bold">{service.title}:</span>{' '}
                  {service.text}
                </li>
              ))}
              {/* <li>
                <span className="font-bold">
                  Exclusive Collaboration and Outsourcing Opportunities:{" "}
                </span>
                Elevate your music with our well-established training programs,
                supported by our studio’s expert recording and production
                services.
              </li>
              <li>
                <span className="font-bold">Sound System and Instruments:</span>{" "}
                We provide instruments and sound systems for events of all
                sizes, from crusades to intimate gatherings. Strengthen your
                events with our musicians, bands, and top-quality sound
                equipment.
              </li>
              <li>
                <span className="font-bold">Quincy’s Corner:</span> Receive
                professional guidance and support through Quincy’s Corner, our
                counseling service. Quincy Bell, a certified psychotherapist, is
                available for sessions to help you navigate grief or mental
                health challenges.
              </li>
              <li>
                <span className="font-bold">
                  Christmas Moments with Quincy Davies and The Gospellier:
                </span>{" "}
                Celebrate the holiday season with our special Christmas Moments
                event. Reserve Quincy Bell & Davies Gospellier for your
                end-of-year festivities, including company parties, church
                celebrations, and Easter events.
              </li> */}
            </ul>
            <div className="flex ">
              <Button
                className="bg-green-500 text-white hover:bg-green-500/70 font-bold capitalize rounded-3xl max-lg:mx-auto lg:ml-4"
                size="lg"
                onClick={() => setOpen(true)}
              >
                {translations('servicesPage.buttonText')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
