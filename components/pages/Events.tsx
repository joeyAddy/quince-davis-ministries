import EventCard from "@/components/cards/EventCard";
import PageHeader from "@/components/PageHeader";
import React from "react";
import { getTranslations } from "next-intl/server";
import { Event } from "@/constants";

const Events = async () => {
  const translations = await getTranslations();

  const eventTranslations = translations.raw("events");

  return (
    <div>
      <PageHeader title={translations("navigation.events")} />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-lg:w-full mx-auto container py-16">
        {eventTranslations.map((event: Event) => (
          <EventCard
            key={event.title}
            title={event.title}
            text={event.text}
            image={event.images[0]}
            date={`${event?.start ?? ""}${event?.end ? ` - ${event.end}` : ""}${
              event?.frequency ? ` ** ${event.frequency}` : ""
            }${event?.time ? ` - (${event.time})` : ""}`}
            id={event.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
