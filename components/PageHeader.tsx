import React from "react";

const PageHeader = ({
  title,
  previousPage,
}: {
  title: string;
  previousPage?: string;
}) => {
  return (
    <div className="bg-section bg-cover bg-center h-56 w-full flex items-center justify-center text-white flex-col space-y-4">
      <p className="text-green-500">
        Home - {previousPage ? previousPage + " - " : ""}
        <span className="text-white">{title}</span>
      </p>
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
};

export default PageHeader;
