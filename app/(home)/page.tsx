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

export default function Home() {
  return (
    <main className="max-w-full">
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
