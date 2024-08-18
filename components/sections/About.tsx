import React from "react";
import SectionTitle from "../SectionTitle";
import StoryCard from "../cards/StoryCard";
import { IoHeartOutline } from "react-icons/io5";
import { FaBible } from "react-icons/fa";
import { Crown } from "lucide-react";

const About = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-48">
      <SectionTitle title="About us" subTitle="Our Story" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-lg:w-full mx-auto mt-8">
        <StoryCard
          title="All our heart"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          image="/assets/images/all our heart.jpg"
          icon={<IoHeartOutline className="size-7 text-green-500" />}
        />
        <StoryCard
          title="Study the bible"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          image="/assets/images/bible.jpg"
          icon={<FaBible className="size-7 text-green-500" />}
        />
        <StoryCard
          title="Experience Heaven"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          image="/assets/images/heaven.jpg"
          icon={<Crown className="size-7 text-green-500" />}
        />
      </div>
    </div>
  );
};

export default About;
