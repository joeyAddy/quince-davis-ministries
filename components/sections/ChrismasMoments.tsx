import React from "react";
import { Button } from "../ui/button";
import { TbChristmasTree } from "react-icons/tb";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { Crown } from "lucide-react";

const ChrismasMoments = () => {
  return (
    <div className="py-10 lg:py-20 px-6 md:px-12 lg:px-48 flex gap-10 max-lg:flex-col">
      <div className="lg:flex-[0.4] lg:max-w-[40%]">
        <Image
          src="/assets/images/chrismas-tree.jpg"
          alt="story image"
          height={1500}
          width={1000}
          className="h-[600px] object-cover w-full"
        />
      </div>
      <div className="space-y-6 flex-[0.6]">
        <SectionTitle
          title="Christmas"
          subTitle="Christmas Moments with Quincy Davies and The Gospellier"
          wrap={true}
          className="items-start"
        />
        <p>
          The Christmas Moment is a special occasion that takes place during the
          holiday season. Reserve our Christmas Moment with Quincy Bell & Davies
          Gospellier for your end-of-year events, including company parties,
          Christmas church celebrations, and Easter festival seasons.
        </p>
        <p className="dancing-script-regular">
          We will create a special Christmas Moment for you with our services.
        </p>
        <div className="md:flex gap-10 max-md:space-y-6">
          <div className="space-y-6">
            <div className="flex items-center justify-center size-12 bg-green-500 rounded-full">
              <Crown className="size-6 text-white" />
            </div>
            <h3 className="font-bold text-xl">Celebrate the King of Kings</h3>
            <p>
              The very birth of our Lord is the greatest gift we were given.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-center size-12 bg-green-500 rounded-full">
              <Crown className="size-6 text-white" />
            </div>
            <h3 className="font-bold text-xl">Celebrate the King of Kings</h3>
            <p>
              The very birth of our Lord is the greatest gift we were given.
            </p>
          </div>
        </div>
        <Button
          className="bg-green-500 text-white hover:bg-green-500/70 font-bold capitalize rounded-3xl"
          size="lg"
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default ChrismasMoments;
