import PageHeader from "@/components/PageHeader";
import OurTeam from "@/components/sections/OurTeam";
import SectionTitle from "@/components/SectionTitle";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";

const AboutUs = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  const translations = await getTranslations();
  return (
    <div>
      <PageHeader title={translations("navigation.aboutUs")} />

      <div className="mt-20 lg:flex gap-10 mx-6 md:mx-12 lg:mx-48">
        <div className="space-y-6 flex-[0.5]">
          <SectionTitle
            title={translations("aboutUsPage.title")}
            subTitle={translations("aboutUsPage.subTitle")}
            className="!items-start w-fit"
            wrap={true}
          />
          <p>{translations("aboutUsPage.description")}</p>
          <div className="grid lg:grid-cols-2 gap-10">
            <Image
              src="/assets/images/heaven.jpg"
              alt="About image"
              height={1000}
              width={500}
              className="max-h-40 max-lg:w-full"
            />
            <Image
              src="/assets/images/heaven.jpg"
              alt="About image"
              height={1000}
              width={500}
              className="max-h-40 max-lg:w-full"
            />
          </div>
        </div>
        <div className="flex-[0.5] relative">
          <div className="lg:h-[95%] bg-center bg-cover flex-[0.5] bg-[url(/assets/images/heaven.jpg)] relative"></div>
          <div className="rounded-lg lg:absolute p-5 text-white left-10 bottom-0 w-full h-fit bg-green-500 max-lg:mt-10">
            <p>{translations("aboutUsPage.scripture")}</p>
          </div>
        </div>
      </div>

      <OurTeam />
    </div>
  );
};

export default AboutUs;
