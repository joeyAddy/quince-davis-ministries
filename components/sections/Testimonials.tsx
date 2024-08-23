import React from "react";
import SectionTitle from "../SectionTitle";
import TestimonialsSliders from "../sliders/TestimonialsSliders";

const Testimonials = () => {
  return (
    <div className="py-10 lg:py-20 px-6 md:px-12 lg:px-48">
      <div className="title-testimonials">
        <SectionTitle
          title="Testimonials"
          subTitle="What people think about us"
          wrap={true}
          centered={true}
        />
      </div>
      <div className="max-lg:w-full lg:w-5/6 mx-auto mt-8 testimonials">
        <TestimonialsSliders />
      </div>
    </div>
  );
};

export default Testimonials;
