import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface MinisterCardProps {
  image: string;
  title: string;
  text: string;
}

const MinisterCard = ({ image, title, text }: MinisterCardProps) => {
  return (
    <div className="shadow-lg flex flex-col">
      <div className="relative h-[500px]">
        <Image
          src={image}
          alt="story image"
          height={1000}
          width={500}
          className="size-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col items-center gap-4 py-6 bg-slate-900 text-white">
        <h4 className="hover:text-green-500 font-bold text-xl px-6">{title}</h4>
        <p className="w-full line-clamp-3 px-6 text-center">{text}</p>
      </div>
    </div>
  );
};

export default MinisterCard;
