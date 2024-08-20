"use client";

import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Quote } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Donate = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    donation: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <PageHeader title="Donate" />

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
              Your support can make an immense difference in these initiatives.
              By contributing to Quincy Davies Ministries (QDM) Foundation, you
              join us in directly impacting lives and communities across Africa.
              Together, we can provide sustenance, healthcare, and educational
              opportunities that are crucial for the well-being and future of
              these deserving individuals. Your donation, no matter the size,
              will help us continue this vital work and bring hope and
              transformation where it is needed most. today.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <SectionTitle
            title="Donate here"
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

          <form
            onSubmit={handleSubmit}
            className="p-4 lg:p-10 border space-y-4 lg:space-y-8 flex-1"
          >
            <Input
              type="text"
              name="donation"
              placeholder="Your donation"
              required
              className="h-12"
              value={formData.donation}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="h-12"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-12"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="tel"
              name="phone"
              required
              placeholder="Phone"
              className="h-12"
              value={formData.phone}
              onChange={handleChange}
            />

            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-500/80 capitalize font-bold"
              size="lg"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
