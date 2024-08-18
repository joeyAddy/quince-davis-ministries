import Image from "next/image";
import React from "react";

interface StoryCardProps {
  image: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}

const StoryCard = ({ image, title, text, icon }: StoryCardProps) => {
  return (
    <div className="rounded-lg shadow-lg p-6 flex flex-col gap-y-4">
      <div className="relative h-2/3">
        <Image
          src={image}
          alt="story image"
          height={1000}
          width={500}
          className="max-h-full"
        />
        <div className="px-3 pt-4 pb-1 absolute bottom-0 mx-auto right-[42%] size-fit bg-white rounded-tr-full rounded-tl-full">
          {icon}
        </div>
      </div>
      <h4 className="font-bold text-center text-xl">{title}</h4>
      <p className="text-center -mt-2">{text}</p>
    </div>
  );
};

export default StoryCard;
