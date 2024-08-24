"use client";

import LearnMoreDrawer from "@/components/modals/LearnMoreDrawer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const Services = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <LearnMoreDrawer open={open} setOpen={setOpen} />
      <div>
        <PageHeader title="Services" />
        <div className="grid lg:grid-cols-4 gap-10 px-6 md:px-12 lg:px-48 py-10 md:py-12 lg:py-20">
          <div className="col-span-2 grid md:grid-cols-2 gap-10 max-h-fit h-fit">
            <Image
              src="/assets/images/him teaching/IMG_20230421_193411.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300"
            />
            <Image
              src="/assets/images/him teaching/IMG_20230421_193411.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300"
            />
            <Image
              src="/assets/images/him teaching/IMG_20230421_193411.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300"
            />
            <Image
              src="/assets/images/him teaching/IMG_20230421_193411.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300"
            />
            <Image
              src="/assets/images/him teaching/IMG_20230421_193411.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300"
            />
            <Image
              src="/assets/images/him teaching/IMG_20230421_193411.jpg"
              alt="service image"
              height={400}
              width={400}
              className="object-cover rounded-3xl hover:scale-110 transition ease-in-out delay-100 duration-300"
            />
          </div>
          <div className="space-y-5 col-span-2">
            <h3 className="font-bold text-3xl">The Services We Offer</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus quisquam blanditiis, libero earum obcaecati ipsam
              eius quidem saepe nam, expedita maiores laborum? Praesentium
              temporibus necessitatibus aliquam magnam fuga perferendis ut!
            </p>

            <ul className="list-disc ml-5 space-y-4">
              <li>
                <span className="font-bold">
                  Coaching and Training Sessions:
                </span>{" "}
                Take advantage of Quincy’s extensive experience in voice
                coaching, gained from working with Cheryl Porter. With a music
                degree and deep expertise, Davies ensures your talent is
                nurtured with the utmost care.
              </li>
              <li>
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
              </li>
            </ul>
            <div className="flex ">
              <Button
                className="bg-green-500 text-white hover:bg-green-500/70 font-bold capitalize rounded-3xl max-lg:mx-auto lg:ml-4"
                size="lg"
                onClick={() => setOpen(true)}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
