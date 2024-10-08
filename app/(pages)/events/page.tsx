import EventCard from "@/components/cards/EventCard";
import PageHeader from "@/components/PageHeader";
import { events } from "@/constants";
import React from "react";

const Events = () => {
  return (
    <div>
      <PageHeader title="Events" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-lg:w-full mx-auto container py-16">
        {events.map((event) => (
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
