import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface EventCardProps {
  image: string;
  title: string;
  text: string;
  date: string;
}

const EventCard = ({ image, title, text, date }: EventCardProps) => {
  return (
    <div className="rounded-lg shadow-lg flex flex-col gap-y-4 pb-6 min-h-[500px]">
      <div className="relative h-1/2">
        <Image
          src={image}
          alt="story image"
          height={1000}
          width={500}
          className="rounded-tr-lg rounded-tl-lg max-h-full"
        />
      </div>
      <div className="flex flex-col gap-4 h-1/2 pt-2">
        <Badge className="bg-green-500 text-white w-fit rounded-lg hover:bg-green-500 py-2 ml-6">
          {date}
        </Badge>
        <Link
          className="hover:text-green-500 font-bold text-xl px-6 border-l-4 border-dotted border-green-500"
          href={`/events/${title}`}
        >
          {title}
        </Link>
        <p className="w-full line-clamp-3 px-6">{text}</p>
        <Link
          href={`/events/${title}`}
          className="text-green-500 font-semibold underline underline-offset-4 w-fit pl-6 mt-auto"
        >
          Event details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
