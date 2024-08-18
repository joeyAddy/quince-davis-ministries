import React from "react";
import { Button } from "../ui/button";
import { TbChristmasTree } from "react-icons/tb";

const ChrismasMoments = () => {
  return (
    <div className="relative max-lg:h-[850px] lg:h-[550px] overflow-hidden">
      <div className="parallax-chrismas bg-fixed bg-center bg-cover h-full w-full"></div>
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white">
        <span className="rounded-full bg-green-500 p-5 border-[20px] border-green-900/50 animate-pulse">
          <TbChristmasTree className="size-12 text-white animate-none" />
        </span>
        <h3 className="max-lg:text-3xl text-5xl font-bold w-2/3 text-center capitalize">
          Christmas Moments with Quincy Davies and The Gospellier
        </h3>
        <p className="dancing-script-regular text-2xl lg:line-clamp-3 w-10/12 lg:w-2/3 text-center">
          The Christmas Moment is a special occasion that takes place during the
          holiday season. Reserve our Christmas Moment with Quincy Bell & Davies
          Gospellier for your end-of-year events, including company parties,
          Christmas church celebrations, and Easter festival seasons.
        </p>
        <Button
          variant="outline"
          className="bg-transparent text-white hover:bg-gray-500 hover:text-white font-bold uppercase border-yellow-500 mt-3"
          size="lg"
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default ChrismasMoments;
