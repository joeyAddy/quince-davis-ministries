import ContactUsForm from "@/components/forms/ContactUsForm";
import PageHeader from "@/components/PageHeader";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

import { FaLocationDot } from "react-icons/fa6";

const ContactUs = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  const translations = await getTranslations();
  return (
    <div>
      <PageHeader title={translations("navigation.contactUs")} />

      <div className="grid lg:grid-cols-3 gap-10 mx-6 md:mx-12 lg:mx-48 py-10">
        <div className="rounded-lg flex flex-col items-center justify-center text-white bg-section space-y-4 p-10">
          <FaLocationDot className="size-10 text-white" />
          <h5 className="text-2xl font-bold">
            {translations("contactUsPage.location")}
          </h5>
          <p className="text-center">
            Quincy Davies Ministries e.V @Unperfekhaus Essen
            Friedrich-Ebert-Straße 18-20, 45127 Essen
          </p>
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center text-white bg-section space-y-4 p-10">
          <FaLocationDot className="size-10 text-white" />
          <h5 className="text-2xl font-bold">
            {" "}
            {translations("contactUsPage.phoneNumber")}
          </h5>
          <p className="text-center">+4915906607717</p>
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center text-white bg-section space-y-4 p-10">
          <FaLocationDot className="size-10 text-white" />
          <h5 className="text-2xl font-bold">
            {" "}
            {translations("contactUsPage.email")}
          </h5>
          <p className="text-center">
            info@example.com <br /> info@zegen.com
          </p>
        </div>
      </div>

      <div className="lg:flex rounded-lg shadow-2xl mx-6 md:mx-12 lg:mx-48 my-10 lg:my-20 pr-0">
        <ContactUsForm />
        <div className=" max-lg:hidden bg-[url(/assets/images/contact-form-bg.jpg)] bg-center bg-cover w-1/3 rounded-tr-lg rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default ContactUs;
