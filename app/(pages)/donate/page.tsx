"use client";

import PageHeader from "@/components/PageHeader";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import SectionTitle from "@/components/SectionTitle";

const Donate = () => {
  return (
    <div>
      <PageHeader title="Support us" />

      <div className="my-20 grid lg:grid-cols-3 gap-10 mx-6 md:mx-12 lg:mx-48">
        <div className="border p-6 lg:col-span-1 space-y-4">
          <h4 className="text-center font-bold text-2xl">Our campaign</h4>
          <div className="space-y-4">
            <Image
              src="/assets/images/foundation.jpeg"
              alt="About image"
              height={1000}
              width={500}
              className="max-h-56"
            />
            <h3 className="font-bold text-lg">Arms of Hope</h3>
            <p className="dancing-script-regular">
              <span className="inline-flex rotate-180">
                <Quote className="size-5" />
              </span>{" "}
              And He (Jesus) took the children in His arms, placed His hands on
              them, and blessed them{" "}
              <span className="inline-flex">
                <Quote className="size-5" />
              </span>
            </p>
            <hr />
            <p>
              In our steadfast pursuit of spreading the gospel, Quincy Davies
              Ministries (QDM) Foundation was established in 2019 with a
              heartfelt commitment to giving back to our community, especially
              the underprivileged in Africa, our beloved homeland. We are deeply
              passionate about providing vital assistance to families—widows,
              orphans, disabled children, and others—who struggle daily to meet
              their basic needs.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <SectionTitle
            title="Give to the cause of love"
            subTitle="Save Humanity, Save Life"
            className="!items-start w-fit"
            wrap={true}
          />
          <p>
            Join us in spreading hope and changing lives. Your generosity will
            help us reach more families in need and make a lasting impact.
            Together, let&apos;s fulfill the mission of love and compassion that
            Jesus exemplified. Visit our website to donate or learn more about
            how you can partner with us in this meaningful cause. Thank you for
            considering supporting Quincy Davies Ministries (QDM) Foundation.
            Together, we can make a difference that resonates far beyond
          </p>
          <p className="font-bold"> Our vision is clear:</p>
          <ol className="list-disc pl-5 [&>li]:mb-2">
            <li>
              ⁠We aim to ensure that the most impoverished communities have
              daily access to three nutritious meals.
            </li>
            <li>
              ⁠We strive to offer life-saving health support, particularly for
              vulnerable families such as widows and children.
            </li>
            <li>
              ⁠We are dedicated to sponsoring 5-10 students annually, enabling
              them to access full-time, quality education.
            </li>
          </ol>
          <p>
            Your support can make an immense difference in these initiatives. By
            contributing to Quincy Davies Ministries (QDM) Foundation, you join
            us in directly impacting lives and communities across Africa.
            Together, we can provide sustenance, healthcare, and educational
            opportunities that are crucial for the well-being and future of
            these deserving individuals. Your donation, no matter the size, will
            help us continue this vital work and bring hope and transformation
            where it is needed most. today.
          </p>

          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
              currency: "USD",
              intent: "capture",
            }}
          >
            <PayPalButtons
              style={{
                color: "gold",
                shape: "rect",
                label: "donate",
                height: 50,
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Donate;
