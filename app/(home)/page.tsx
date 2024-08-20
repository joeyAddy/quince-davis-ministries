"use client";

import NewsLetterModal from "@/components/modals/Newletter";
import About from "@/components/sections/About";
import ChrismasMoments from "@/components/sections/ChrismasMoments";
import Donate from "@/components/sections/Donate";
import Events from "@/components/sections/Events";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import OurTeam from "@/components/sections/OurTeam";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 3000);
  }, []);
  return (
    <main className="">
      <NewsLetterModal open={openModal} setOpen={setOpenModal} />
      <Hero />
      <About />
      <Donate />
      <Testimonials />
      <ChrismasMoments />
      <Events />
      <Services />
      <OurTeam />
      <Footer />
    </main>
  );
}
