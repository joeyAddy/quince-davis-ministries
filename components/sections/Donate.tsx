import { HeartHandshakeIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Donate = () => {
  return (
    <div className="relative max-lg:h-[600px] lg:h-[500px] overflow-hidden">
      <div className="parallax-donate bg-fixed bg-center bg-cover h-full w-full"></div>
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white">
        <span className="rounded-full bg-green-500 p-5 border-[20px] border-green-900/50 animate-pulse">
          <HeartHandshakeIcon className="size-12 text-white animate-none" />
        </span>
        <h3 className="max-lg:text-3xl text-5xl font-bold w-2/3 text-center">
          <span> &quot;</span>Pray! And listen to God! You can do this alone,
          but find somebody to do it with you<span>&quot;</span>
        </h3>
        <p className="dancing-script-regular text-2xl">
          Help someone to find someone
        </p>
        <Button
          variant="outline"
          className="bg-transparent text-white hover:bg-gray-500 hover:text-white font-bold capitalize border-yellow-500 mt-3 rounded-3xl"
          size="lg"
          asChild
        >
          <Link href="/donate">Support Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Donate;
