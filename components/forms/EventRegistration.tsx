"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Event } from "@/constants";

const EventRegistration = ({ event }: { event: Event }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      sender: {
        name: formData.name,
        address: formData.email,
      },
      receipient: [
        {
          name: "Quincy Davies Ministries",
          address: "chatwithjohnjoseph@gmail.com",
        },
      ],
      message: `I need more information about ${event?.title}`,
      subject: `Quincy Davies Ministries - ${event?.title}`,
    };

    try {
      const response = await axios.post("/api/email", { ...data });
      console.log("EMAIL SENDING RESPONSE", response);
      toast.success("Email sent successfully! We will get back to you soon.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="">
      <div className="w-full bg-green-500 text-white rounded-tr-lg rounded-tl-lg py-4 text-xl text-center font-bold">
        Event Registration
      </div>
      <form
        onSubmit={handleSubmit}
        className="rounded-bl-lg rounded-br-lg border-t-0 border-dotted border-4 p-4 lg:p-10 space-y-4 lg:space-y-8"
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
        <Button
          type="submit"
          className="bg-green-500 hover:bg-green-500/80 capitalize font-bold"
          size="lg"
        >
          {isLoading ? (
            <FaSpinner className="text-center animate-spin" />
          ) : (
            "Learn more"
          )}
        </Button>
      </form>
    </div>
  );
};

export default EventRegistration;
