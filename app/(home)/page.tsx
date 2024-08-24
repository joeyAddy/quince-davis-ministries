import ChrismasMoments from "@/components/sections/ChrismasMoments";
import Donate from "@/components/sections/Donate";
import Events from "@/components/sections/Events";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="max-w-full">
      <Hero />
      <Events />
      <Donate />
      <Testimonials />
      <ChrismasMoments />
      <Footer />
    </main>
  );
}
