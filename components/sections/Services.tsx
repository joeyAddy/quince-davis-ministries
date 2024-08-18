import React from "react";
import SectionTitle from "../SectionTitle";
import { services } from "@/constants";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  return (
    <div className="relative max-lg:h-[600px] lg:h-[800px] overflow-hidden">
      <div className="parallax-services bg-fixed bg-center bg-cover h-full w-full"></div>
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-white">
        <div className="flex container items-center gap-6">
          <SectionTitle
            title="Services"
            subTitle="Services we offer"
            className="!items-start w-fit"
          />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui
            obcaecati, dicta quaerat architecto officia ipsum distinctio in
            quia! Asperiores harum perspiciatis a earum nulla veritatis
            necessitatibus pariatur. Ex, nostrum. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Molestias, unde! Iste ducimus optio
            magnam, ratione commodi, ea, totam velit non error laudantium
            nostrum? Nihil, animi magni dolor dolore nulla doloribus!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 container">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              text={service.text}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
