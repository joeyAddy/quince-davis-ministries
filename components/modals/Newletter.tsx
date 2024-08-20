"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const NewsLetterModal = ({
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
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Subscribe to our news letter</DialogTitle>
          <DialogDescription>
            We&apos;ll keep you up to date with the latest developments in the
            ministry
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            placeholder="Enter your email"
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button
            onClick={handleRegisterToNewsLetter}
            className="bg-green-500 hover:bg-green-500/80"
          >
            Subscribe
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewsLetterModal;
