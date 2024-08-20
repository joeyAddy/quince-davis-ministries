import React from "react";
import SectionTitle from "../SectionTitle";
import { ministers } from "@/constants";
import MinisterCard from "../cards/MinisterCard";

const OurTeam = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-48">
      <SectionTitle title="Our team" subTitle="The hands that hold us up" />
      <div className="grid gap-6 md:grid-cols-2 max-lg:w-full mx-auto mt-8">
        {ministers.map((minister) => (
          <MinisterCard
            key={minister.title}
            title={minister.title}
            image={minister.image}
            text={minister.text}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
