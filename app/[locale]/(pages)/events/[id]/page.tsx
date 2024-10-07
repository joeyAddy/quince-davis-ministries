import { Event, events } from "@/constants";
import React from "react";
import Image from "next/image";
import EventRegistration from "@/components/forms/EventRegistration";
import PageHeader from "@/components/PageHeader";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/config";

export async function generateStaticParams() {
  // Generate params for every locale and event ID
  const params = locales.flatMap((locale) =>
    events.map((event) => ({
      locale,
      id: event.id.toString(),
    }))
  );
  return params;
}

const EventDetails = async ({
  params,
}: {
  params: { id: string; locale: string };
}) => {
  const { locale, id } = params;
  unstable_setRequestLocale(locale);

  const translations = await getTranslations();

  const event: Event = translations
    .raw("events")
    .find((event: Event) => event.id === parseInt(id as string));

  return (
    <div>
      <PageHeader
        title={event?.title!}
        previousPage={translations("navigation.events")}
      />
      <div className="max-lg:w-full mx-auto container py-16 space-y-10">
        <div className="relative h-1/2">
          <Image
            src={event?.images[0]!}
            alt="story image"
            height={1000}
            width={500}
            className="rounded-tr-3xl rounded-tl-3xl max-h-[70vh] w-full object-cover object-top"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h4 className="font-bold text-3xl">{event?.title}</h4>
              <p>{event?.text}</p>
              <div className="grid lg:grid-cols-2 gap-10">
                {event?.images &&
                  event.images.length > 1 &&
                  event.images.map((image) => (
                    <Image
                      key={image}
                      src={image}
                      alt="story image"
                      height={1000}
                      width={500}
                      className="rounded-lg object-cover object-top"
                    />
                  ))}
              </div>
            </div>
            {event?.galleryImages && (
              <div className="space-y-4">
                <h4 className="font-bold text-3xl">Event Gallery</h4>
                <p>
                  Here are images from God&apos;s wonders from previous events.
                </p>
                <div className="grid lg:grid-cols-3 gap-10">
                  {event.galleryImages.map((image) => (
                    <Image
                      key={image}
                      src={image}
                      alt="story image"
                      height={1000}
                      width={500}
                      className="rounded-lg h-56 object-cover object-top"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-1 space-y-10">
            <div className="">
              <div className="w-full bg-green-500 text-white rounded-tr-lg rounded-tl-lg py-4 text-xl text-center font-bold">
                Event Details
              </div>
              <div className="rounded-bl-lg rounded-br-lg border-t-0 border-dotted border-4 py-5 divide-y">
                <div className="flex items-center justify-between mx-4 lg:mx-10 py-4">
                  <p className="font-bold">Organizer:</p>
                  <span>Quince Davis Minstries</span>
                </div>
                {event?.start && (
                  <div className="flex items-center justify-between mx-4 lg:mx-10 py-4">
                    <p className="font-bold">Start:</p>
                    <span>{event.start}</span>
                  </div>
                )}
                {event?.end && (
                  <div className="flex items-center justify-between mx-4 lg:mx-10 py-4">
                    <p className="font-bold">End:</p>
                    <span>{event.end}</span>
                  </div>
                )}
                <div className="flex items-center justify-between mx-4 lg:mx-10 py-4">
                  <p className="font-bold">Frequency:</p>
                  <span>{event?.frequency}</span>
                </div>
                <div className="flex items-center justify-between mx-4 lg:mx-10 py-4">
                  <p className="font-bold">Time:</p>
                  <span>{event?.time}</span>
                </div>
              </div>
            </div>
            <EventRegistration event={event!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
