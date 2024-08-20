import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface ServiceCardProps {
  image: string;
  title: string;
  text: string;
}

const ServiceCard = ({ image, title, text }: ServiceCardProps) => {
  return (
    <div className="rounded-lg shadow-lg flex flex-col gap-y-4 pb-6 min-h-[500px]">
      <div className="relative h-1/2">
        <Image
          src={image}
          alt="story image"
          height={1000}
          width={500}
          className="max-h-full min-h-[250px]"
        />
      </div>
      <div className="flex flex-col gap-4 h-1/2 pt-2">
        <h4 className="hover:text-green-500 font-bold text-xl px-6 border-l-4 border-dotted border-green-500">
          {title}
        </h4>
        <p className="w-full line-clamp-3 px-6">{text}</p>
        <Button
          variant="ghost"
          className="w-fit self-center underline underline-offset-4 hover:no-underline font-bold"
        >
          More details
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
