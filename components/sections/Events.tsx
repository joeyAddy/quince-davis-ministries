import React from "react";
import SectionTitle from "../SectionTitle";
import EventCard from "../cards/EventCard";
import { IoHeartOutline } from "react-icons/io5";
import { FaBible } from "react-icons/fa";
import { ChevronRight, Crown } from "lucide-react";
import { events } from "@/constants";
import Link from "next/link";

const Events = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-48">
      <SectionTitle
        title="Events"
        subTitle="Special programmes and upcomming events"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-lg:w-full mx-auto mt-8">
        {events.slice(0, 3).map((event) => (
          <EventCard
            key={event.title}
            title={event.title}
            text={event.text}
            image={event.image}
            date={event.date}
            id={event.id}
          />
        ))}
      </div>
      <div className="w-full text-right mt-8 flex space-x-1 items-center justify-end">
        <Link
          href="/events"
          className="text-yellow-500 font-semibold underline underline-offset-4"
        >
          See more
        </Link>
        <ChevronRight className="text-yellow-500 size-4" />
      </div>
    </div>
  );
};

export default Events;
