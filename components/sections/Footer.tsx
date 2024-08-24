"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GrStarOutline } from "react-icons/gr";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      sender: {
        name: "quincy Davis Ministries",
        address: "chatwithjohnjoseph@gmail.com",
      },
      receipient: [
        {
          name: email,
          address: email,
        },
      ],
      message: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="background-color: #28a745; padding: 20px; text-align: center;">
            <img src="https://res.cloudinary.com/dw9oa2vpq/image/upload/v1724494518/QDM/QDM_MINISTRY_LOGO_GOLD_u21sxd.png" alt="QDM Logo" style="max-width: 150px; margin-bottom: 10px;" />
            <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Thank You for Subscribing!</h1>
          </div>
          <div style="padding: 30px; text-align: center;">
            <p style="font-size: 16px; color: #333333;">Hello,</p>
            <p style="font-size: 16px; color: #333333;">
              We're thrilled to have you on board. You've successfully subscribed to our newsletter, and you'll be the first to know about our latest updates, special offers, and exciting news.
            </p>
            <p style="font-size: 16px; color: #333333;">Stay tuned!</p>
            <p style="font-size: 16px; color: #333333;">Best regards,<br />The Quincy Davies Minstries Team</p>
          </div>
          <div style="background-color: #28a745; padding: 10px; text-align: center;">
            <p style="font-size: 14px; color: #ffffff;">&copy; 2024 Quincy Davies Minstries. All rights reserved.</p>
          </div>
        </div>
      </div>
    `,
      subject: "Thank You for Subscribing!",
    };

    try {
      const response = await axios.post("/api/email", { ...data });
      console.log("EMAIL SENDING RESPONSE", response);
      toast.success("Email sent successfully! We will get back to you soon.");

      const inHouseEmailData = {
        sender: {
          name: email,
          address: email,
        },
        receipient: [
          {
            name: "quincy Davis Ministries",
            address: "chatwithjohnjoseph@gmail.com",
          },
        ],
        message: ` ${email} Just subscribed to news letter`,
        subject: `Quincy Davis Ministries - New subscriber`,
      };
      await axios.post("/api/email", {
        ...inHouseEmailData,
      });
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      toast.error("Something went wrong. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer>
      <div className="relative max-md:h-[730px] md:h-[600px] lg:h-[400px] overflow-hidden">
        <div className="parallax-footer bg-fixed bg-center bg-cover h-full w-full"></div>
        <div className="absolute inset-0 flex flex-col gap-10 text-white">
          <div className="max-lg:block max-lg:space-y-8 flex items-start justify-between container pt-14">
            <div className="max-lg:block max-lg:space-y-8 flex gap-20 flex-1">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-1 bg-green-500 w-12" />
                  <h4 className="font-bold text-3xl">About</h4>
                </div>
                <p className="max-lg:w-full w-64">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  expedita nulla et, minima accusantium, eaque, inventore
                  maiores ullam dolor error unde voluptatum necessitatibus
                  doloremque deserunt quam rem magni velit quibusdam.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-1 bg-green-500 w-12" />
                  <h4 className="font-bold text-3xl whitespace-nowrap">
                    Quick links
                  </h4>
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/about-us"
                      className="flex items-center space-x-3 color-hover-transition"
                    >
                      <GrStarOutline />
                      <span>About us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="flex items-center space-x-3 color-hover-transition"
                    >
                      <GrStarOutline />
                      <span>Contact us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4 flex flex-col w-fit">
              <div className="flex items-center space-x-2">
                <div className="h-1 bg-green-500 w-12" />
                <h4 className="font-bold text-3xl whitespace-nowrap">
                  Newsletter
                </h4>
              </div>
              <p className="max-lg:w-full w-64">
                Sign up for our weekly newsletter to stay updated on all news
                and events
              </p>
              <div className="flex">
                <Input
                  className="rounded-none rounded-tl-lg rounded-bl-lg h-12 text-black"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Button
                  onClick={handleSubmit}
                  className="bg-yellow-500 hover:bg-yellow-500/80 h-12 rounded-none rounded-tr-lg rounded-br-lg"
                >
                  {isLoading ? (
                    <FaSpinner className="text-center animate-spin" />
                  ) : (
                    "Sign up"
                  )}
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-black/80 w-full text-center py-5">
            <p>Copyrights © {currentYear} Name ♥</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
