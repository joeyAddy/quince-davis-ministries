import React from "react";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center text-center">
      <p className="uppercase text-green-500 font-semibold">{title}</p>
      <h2 className="text-4xl font-bold">{subTitle}</h2>
      <div className="h-1 bg-green-500 w-20 mt-3" />
    </div>
  );
};

export default SectionTitle;
