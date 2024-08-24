import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface EventCardProps {
  image: string;
  title: string;
  text: string;
  date: string;
  id: number;
}

const EventCard = ({ image, title, text, date, id }: EventCardProps) => {
  return (
    <div className="rounded-3xl shadow-lg flex flex-col gap-y-4 pb-6 min-h-[500px] hover:scale-105 transition-all ease-in-out duration-300 delay-100">
      <div className="relative h-1/2">
        <Image
          src={image}
          alt="story image"
          height={1000}
          width={500}
          className="rounded-tr-3xl rounded-tl-3xl max-h-full h-[310px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 h-1/2 pt-2">
        <Badge className="bg-green-500 text-white w-fit max-w-full rounded-lg hover:bg-green-500 py-2 mx-6">
          {date}
        </Badge>
        <Link
          className="hover:text-green-500 font-bold text-xl px-6 border-l-4 border-dotted border-green-500"
          href={`/events/${id}`}
        >
          {title}
        </Link>
        <p className="w-full line-clamp-3 px-6">{text}</p>
        <Link
          href={`/events/${id}`}
          className="text-green-500 font-semibold underline underline-offset-4 w-fit pl-6 mt-auto"
        >
          Event details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
