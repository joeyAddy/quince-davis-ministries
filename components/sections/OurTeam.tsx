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
      <div className="grid gap-6 md:grid-cols-2 max-lg:w-full justify-center mx-auto mt-8">
        {ministers.map((minister, index) => (
          <div
            key={minister.title}
            className={
              index === ministers.length - 1
                ? "md:col-span-2 md:grid gap-6 md:grid-cols-12 max-lg:w-full"
                : ""
            }
          >
            <MinisterCard
              title={minister.title}
              image={minister.image}
              text={minister.text}
              style={
                index === ministers.length - 1 ? "col-span-6 col-start-4" : ""
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
