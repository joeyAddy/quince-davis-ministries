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
    <div className="max-lg:shadow-md rounded-3xl flex lg:gap-12 max-lg:flex-col lg:justify-start relative">
      <div>
        <Image
          src={image}
          alt="story image"
          height={1500}
          width={1000}
          className="lg:shadow-2xl h-[350px] md:h-[450px] lg:h-[600px] w-full lg:w-[850px] object-cover object-[top] max-lg:rounded-tr-3xl max-lg:rounded-tl-3xl lg:rounded-3xl"
        />
      </div>
      <div className="space-y-4 lg:py-10 lg:pr-12 max-lg:p-6 rounded-bl-3xl rounded-br-3xl lg:rounded-3xl lg:absolute bottom-20 -right-10 lg:w-1/2 bg-white lg:shadow-2xl p-10 max-sm:h-[385px]">
        <h4 className="font-bold text-xl">{ministry}</h4>
        <p className="-mt-2 line-clamp-6">{text}</p>
        <h6 className="font-medium text-lg">{title}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;
