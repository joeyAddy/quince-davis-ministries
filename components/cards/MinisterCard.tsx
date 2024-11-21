import Image from 'next/image';
import React from 'react';

interface MinisterCardProps {
  image: string;
  title: string;
  text: string;
  style?: string;
}

const MinisterCard = ({ image, title, text, style }: MinisterCardProps) => {
  return (
    <div className={`shadow-lg flex flex-col ${style}`}>
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
