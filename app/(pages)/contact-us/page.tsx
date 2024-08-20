"use client";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      <PageHeader title="Contact us" />

      <div className="grid lg:grid-cols-3 gap-10 mx-6 md:mx-12 lg:mx-48 py-10">
        <div className="rounded-lg flex flex-col items-center justify-center text-white bg-section space-y-4 p-10">
          <FaLocationDot className="size-10 text-white" />
          <h5 className="text-2xl font-bold">Out Location</h5>
          <p className="text-center">
            Quincy Davies Ministries e.V @Unperfekhaus Essen
            Friedrich-Ebert-Straße 18-20, 45127 Essen
          </p>
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center text-white bg-section space-y-4 p-10">
          <FaLocationDot className="size-10 text-white" />
          <h5 className="text-2xl font-bold">Phone number</h5>
          <p className="text-center">
            (+55) 654 - 545 - 5418 <br /> (+55) 654 - 545 - 1235
          </p>
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center text-white bg-section space-y-4 p-10">
          <FaLocationDot className="size-10 text-white" />
          <h5 className="text-2xl font-bold">Email address</h5>
          <p className="text-center">
            info@example.com <br /> info@zegen.com
          </p>
        </div>
      </div>

      <div className="flex rounded-lg shadow-2xl mx-6 md:mx-12 lg:mx-48 my-20 pr-0">
        <form
          onSubmit={handleSubmit}
          className="p-4 lg:p-10 space-y-4 lg:space-y-8 flex-1"
        >
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
          <Textarea
            placeholder="Type your message here."
            value={formData.message}
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              });
            }}
          />
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-500/80 capitalize font-bold"
            size="lg"
          >
            Register
          </Button>
        </form>
        <div className="bg-[url(/assets/images/contact-form-bg.jpg)] bg-center bg-cover w-1/3 rounded-tr-lg rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default ContactUs;
