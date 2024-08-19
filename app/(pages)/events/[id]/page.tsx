import PageHeader from "@/components/PageHeader";
import { events } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EventDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const event = events.find((event) => event.id === parseInt(id as string));

  return (
    <div>
      <PageHeader title={event?.title!} previousPage="Events" />
      <div className="max-lg:w-full mx-auto container py-16 space-y-10">
        <div className="relative h-1/2">
          <Image
            src={event?.image!}
            alt="story image"
            height={1000}
            width={500}
            className="rounded-tr-lg rounded-tl-lg max-h-[70vh] w-full object-cover object-center"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h4 className="font-bold text-3xl">{event?.title}</h4>
              <p>{event?.text}</p>
              <div className="grid lg:grid-cols-2 gap-10">
                <Image
                  src={event?.image!}
                  alt="story image"
                  height={1000}
                  width={500}
                  className="rounded-lg object-cover object-center"
                />{" "}
                <Image
                  src={event?.image!}
                  alt="story image"
                  height={1000}
                  width={500}
                  className="rounded-lg object-cover object-center"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-3xl">Event Gallery</h4>
              <p>
                Here are images from of God&apos;s wonders from the previous
                programmes.
              </p>
              <div className="grid lg:grid-cols-3 gap-10">
                <Image
                  src={event?.image!}
                  alt="story image"
                  height={1000}
                  width={500}
                  className="rounded-lg object-cover object-center"
                />{" "}
                <Image
                  src={event?.image!}
                  alt="story image"
                  height={1000}
                  width={500}
                  className="rounded-lg object-cover object-center"
                />
                <Image
                  src={event?.image!}
                  alt="story image"
                  height={1000}
                  width={500}
                  className="rounded-lg object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-10">
            <div className="">
              <div className="w-full bg-green-500 text-white rounded-tr-lg rounded-tl-lg py-4 text-xl text-center font-bold">
                Event Details
              </div>
              <div className="rounded-bl-lg rounded-br-lg border-t-0 border-dotted border-4 py-5 divide-y">
                <div className="flex items-center justify-between mx-10 py-4">
                  <p className="font-bold">Organizer:</p>
                  <span>Quince Davis Minstries</span>
                </div>
                <div className="flex items-center justify-between mx-10 py-4">
                  <p className="font-bold">Start:</p>
                  <span>January</span>
                </div>
                <div className="flex items-center justify-between mx-10 py-4">
                  <p className="font-bold">End:</p>
                  <span>February</span>
                </div>
                <div className="flex items-center justify-between mx-10 py-4">
                  <p className="font-bold">Time:</p>
                  <span>3:00pm</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-full bg-green-500 text-white rounded-tr-lg rounded-tl-lg py-4 text-xl text-center font-bold">
                Event Registration
              </div>
              <div className="rounded-bl-lg rounded-br-lg border-t-0 border-dotted border-4 p-10 space-y-8">
                <Input type="name" placeholder="Name" className="h-12" />
                <Input type="email" placeholder="Email" className="h-12" />
                <Input type="phone" placeholder="Phone" className="h-12" />
                <Button
                  className="bg-green-500 hover:bg-green-500/80 capitalize font-bold"
                  size="lg"
                >
                  Learn more about{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

// Generate static parameters for all events
export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}
