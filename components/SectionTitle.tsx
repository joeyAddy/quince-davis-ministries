import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  subTitle: string;
  className?: string; // optional class name for custom styles
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-y-2 items-center text-center",
        className
      )}
    >
      <p className="uppercase text-green-500 font-semibold">{title}</p>
      <h2 className="text-4xl font-bold whitespace-nowrap">{subTitle}</h2>
      <div className="h-1 bg-green-500 w-20 mt-3" />
    </div>
  );
};

export default SectionTitle;
