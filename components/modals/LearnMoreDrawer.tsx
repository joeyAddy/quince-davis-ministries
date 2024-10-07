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
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { Textarea } from "../ui/textarea";
import { useTranslations } from "next-intl";

const LearnMoreDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const translations = useTranslations();

  const services = translations.raw("services");
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = () => setOpen(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      sender: {
        name: formData.name,
        address: formData.email,
      },
      receipient: [
        {
          name: "quincy Davis Ministries",
          address: "chatwithjohnjoseph@gmail.com",
        },
      ],
      message: formData.message,
      subject: formData.subject,
    };

    try {
      const response = await axios.post("/api/email", { ...data });
      console.log("EMAIL SENDING RESPONSE", response);
      toast.success("Email sent successfully! We will get back to you soon.");
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
            {translations("drawer.learnMore.title")}
          </DrawerTitle>

          <DrawerDescription className="text-center">
            {" "}
            {translations("drawer.learnMore.description")}
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full max-md:px-10 md:w-2/3 lg:w-1/2 mx-auto space-y-4 text-center">
          <Input
            id="name"
            name={formData.name}
            placeholder={translations("drawer.learnMore.name")}
            className="w-full"
            onChange={handleChange}
          />
          <Input
            id="email"
            name={formData.email}
            placeholder={translations("drawer.learnMore.email")}
            className="w-full"
            onChange={handleChange}
          />

          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, subject: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={translations("drawer.learnMore.service")}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{translations("navigation.services")}</SelectLabel>
                {services.map((service) => (
                  <SelectItem key={service.title} value={service.title}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea
            placeholder={translations("drawer.learnMore.message")}
            value={formData.message}
            className="w-full"
            onChange={(e) => {
              setFormData({
                ...formData,
                message: e.target.value,
              });
            }}
          />
          <Button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-500/80"
          >
            {isLoading ? (
              <FaSpinner className="text-center animate-spin" />
            ) : (
              translations("drawer.learnMore.subscribeButtonText")
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
              {translations("drawer.learnMore.cancelButtonText")}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LearnMoreDrawer;
