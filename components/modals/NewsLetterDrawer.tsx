"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useTranslations } from "next-intl";

const NewsLetterDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const translations = useTranslations();

  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = () => setOpen(false);

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

      setOpen(false);
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
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent>
        <DrawerHeader className="lg:mx-auto lg:w-1/2">
          <DrawerTitle className="text-center">
            {translations("drawer.newsLetter.title")}
          </DrawerTitle>

          <DrawerDescription className="text-center">
            {" "}
            {translations("drawer.newsLetter.description")}
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full max-md:px-10 md:w-2/3 lg:w-1/2 mx-auto space-y-4 text-center">
          <Input
            id="email"
            placeholder={translations("drawer.newsLetter.placeholder")}
            className="w-full"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-500/80"
          >
            {isLoading ? (
              <FaSpinner className="text-center animate-spin" />
            ) : (
              translations("drawer.newsLetter.subscribeButtonText")
            )}
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild className="w-fit mx-auto">
            <Button
              onClick={() => setOpen(false)}
              size="sm"
              variant="destructive"
            >
              {translations("drawer.newsLetter.cancelButtonText")}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NewsLetterDrawer;
