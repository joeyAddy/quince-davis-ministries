"use client";

import React, { useState } from "react";
import Navbar from "../Navbar";
import { FaHands } from "react-icons/fa";
import { Button } from "../ui/button";
import MobileNavbar from "../MobileNavbar";

const Hero = () => {
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  return (
    <section className="w-full md:h-[90vh] lg:h-[80vh] bg-black">
      <div className="bg-section bg-center w-full h-full max-md:px-6">
        <Navbar setOpenMobileNavbar={setOpenMobileNavbar} />
        <MobileNavbar
          setOpenMobileNavbar={setOpenMobileNavbar}
          openMobileNavbar={openMobileNavbar}
        />
        <div className="py-20 gap-y-4 flex flex-col items-center">
          <FaHands className="text-6xl text-white" />
          <p className="font-bold uppercase lg:text-3xl text-green-500 text-center">
            Quincy Davies Ministries
          </p>
          <h1 className="text-white font-extrabold text-3xl lg:text-5xl uppercase text-center">
            Lorem, ipsum dolor sit amet
          </h1>
          <p className="text-white text-xl max-md:w-full w-1/2 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem impedit dolores facere quis? Natus ipsa velit minus,
            dolore saepe voluptas ut.
          </p>
          <Button className="main-btn-bg mt-3 text-lg font-bold" size="lg">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
