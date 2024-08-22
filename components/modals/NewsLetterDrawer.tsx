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

const NewsLetterDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState("");

  const handleRegisterToNewsLetter = () => {
    setOpen(!open);
  };

  const handleOpenChange = () => setOpen(false);

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent>
        <DrawerHeader className="lg:mx-auto lg:w-1/2">
          <DrawerTitle className="text-center">
            Subscribe to our news letter
          </DrawerTitle>

          <DrawerDescription className="text-center">
            {" "}
            We&apos;ll keep you up to date with the latest developments in the
            ministry
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full max-md:px-10 md:w-2/3 lg:w-1/2 mx-auto space-y-4 text-center">
          <Input id="email" placeholder="Enter your email" className="w-full" />
          <Button
            onClick={handleRegisterToNewsLetter}
            className="w-full bg-green-500 hover:bg-green-500/80"
          >
            Subscribe
          </Button>{" "}
        </div>
        <DrawerFooter>
          <DrawerClose asChild className="w-fit mx-auto">
            <Button
              onClick={() => setOpen(false)}
              size="sm"
              variant="destructive"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NewsLetterDrawer;
