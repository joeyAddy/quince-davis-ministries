import React from "react";
import SectionTitle from "../SectionTitle";
import { ministers } from "@/constants";
import MinisterCard from "../cards/MinisterCard";
import { getTranslations } from "next-intl/server";

const OurTeam = async () => {
  const translations = await getTranslations();
  return (
    <div className="py-10 lg:py-20 px-6 md:px-12 lg:px-48">
      <SectionTitle
        title={translations("aboutUsPage.teamTitle")}
        subTitle={translations("aboutUsPage.teamSubTitle")}
        wrap={true}
        centered={true}
      />
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
