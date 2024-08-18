import React from "react";
import SectionTitle from "../SectionTitle";
import TestimonialsSliders from "../sliders/TestimonialsSliders";

const Testimonials = () => {
  return (
    <div className="pt-20 px-6 md:px-12 lg:px-48">
      <SectionTitle
        title="Testimonials"
        subTitle="What people think about us"
      />
      <div className="max-lg:w-full lg:w-5/6 mx-auto mt-8">
        <TestimonialsSliders />
      </div>
    </div>
  );
};

export default Testimonials;
