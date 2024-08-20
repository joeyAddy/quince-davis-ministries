import PageHeader from "@/components/PageHeader";
import OurTeam from "@/components/sections/OurTeam";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <PageHeader title="About us" />

      <div className="mt-20 lg:flex gap-10 mx-6 md:mx-12 lg:mx-48">
        <div className="space-y-6 flex-[0.5]">
          <SectionTitle
            title="About us"
            subTitle="We are Taking Small Steps to Spread the Goodnews"
            className="!items-start w-fit"
            wrap={true}
          />
          <p>
            The power of music in spiritual devotion has been profound
            throughout history. Unlike anything else on Earth, music transcends
            human creation—it originates from a higher realm, designed with a
            singular purpose: worship. It remains untouched by earthly
            manipulation, uniquely crafted from heavenly inspiration. At Quincy
            Davies Ministries, we are dedicated to fostering spiritual intimacy
            through worship. With over two decades of experience in gospel and
            church music, Dan Davies Oduro—a certified Bachelor of Arts in
            Music—and his wife, Quincy Bell Davies, serve as anointed vessels.
            They have passionately led congregations into the presence of God
            through music, ministering at numerous services, events, crusades,
            and conferences. Our mission is clear: to heal broken hearts, offer
            hope to the lost, and ultimately, save souls through our
            spirit-filled music and personal testimonies. As disciples of Jesus
            Christ, we evangelize through gospel worship leadership, directing,
            training, coaching, and teaching. We are committed to providing
            enduring solutions for effective worship music within the body
            of Christ today.
          </p>
          <div className="grid lg:grid-cols-2 gap-10">
            <Image
              src="/assets/images/heaven.jpg"
              alt="About image"
              height={1000}
              width={500}
              className="max-h-40"
            />
            <Image
              src="/assets/images/heaven.jpg"
              alt="About image"
              height={1000}
              width={500}
              className="max-h-40"
            />
          </div>
        </div>
        <div className="flex-[0.5] relative">
          <div className="lg:h-[95%] bg-center bg-cover flex-[0.5] bg-[url(/assets/images/heaven.jpg)] relative"></div>
          <div className="rounded-lg lg:absolute p-5 text-white left-10 bottom-0 w-full h-fit bg-green-500 max-lg:mt-10">
            <p>
              The name of the Lord is a strong tower; the righteous runs in and
              is saved.
            </p>
          </div>
        </div>
      </div>

      <OurTeam />
    </div>
  );
};

export default AboutUs;
