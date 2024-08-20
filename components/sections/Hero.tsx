"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { FaHands } from "react-icons/fa";
import { Button } from "../ui/button";
import MobileNavbar from "../MobileNavbar";
import NewsLetterDrawer from "../modals/NewsLetterDrawer";
import Link from "next/link";

const Hero = () => {
  const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 3000);
  }, []);
  return (
    <section className="w-full md:h-[90vh] lg:h-[80vh] bg-black">
      <NewsLetterDrawer open={openModal} setOpen={setOpenModal} />

      <div className="bg-section bg-center w-full h-full max-md:px-6">
        <Navbar setOpenMobileNavbar={setOpenMobileNavbar} />
        <MobileNavbar
          setOpenMobileNavbar={setOpenMobileNavbar}
          openMobileNavbar={openMobileNavbar}
        />
        <div className="py-20 gap-y-5 flex flex-col items-center">
          <FaHands className="text-6xl text-white" />
          <p className="font-bold uppercase lg:text-3xl text-green-500 text-center">
            Quincy Davies Ministries
          </p>
          <h1 className="text-white font-extrabold text-3xl lg:text-5xl uppercase text-center">
            Welcome to Quincy Davis Ministry
          </h1>
          <p className="text-white text-xl max-md:w-full w-1/2 text-center">
            We are dedicated to serving you through a wide range of programmes
            and services designed to uplift and inspire
          </p>
          <Button
            asChild
            className="main-btn-bg mt-3 text-lg font-bold"
            size="lg"
          >
            <Link href="/about-us"> Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
