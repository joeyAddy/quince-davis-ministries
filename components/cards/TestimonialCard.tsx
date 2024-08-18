import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  image: string;
  title: string;
  text: string;
  ministry: string;
}

const TestimonialCard = ({
  image,
  title,
  text,
  ministry,
}: TestimonialCardProps) => {
  return (
    <div className="rounded-lg shadow-lg flex gap-4 lg:gap-12 max-lg:flex-col">
      <div>
        <Image
          src={image}
          alt="story image"
          height={1000}
          width={1000}
          className="h-full lg:min-w-96 w-full lg:w-96 bg-center object-cover max-lg:rounded-tr-lg max-lg:rounded-tl-lg lg:rounded-tl-lg lg:rounded-bl-lg"
        />
      </div>
      <div className="space-y-4 lg:py-20 lg:pr-12 max-lg:p-6">
        <h4 className="font-bold text-xl">{title}</h4>
        <h6 className="font-medium text-lg">{ministry}</h6>
        <p className="-mt-2 line-clamp-6">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
