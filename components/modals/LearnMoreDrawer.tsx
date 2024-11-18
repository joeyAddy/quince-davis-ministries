'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { emailUrl, Service } from '@/constants';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'; // Import Dialog components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const LearnMoreModal = ({
  open,
  setOpen,
  isChristmasMoment = false,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isChristmasMoment?: boolean;
}) => {
  const translations = useTranslations();
  const services: Service[] = translations.raw('services');

  let defaultOption: Service | undefined = undefined;

  if (isChristmasMoment) {
    const christmasMoment = services.find((service) =>
      service.title.includes('christmas'),
    );
    defaultOption = christmasMoment;
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleOpenChange = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      sender: 'info',
      receipient: [
        {
          name: 'Quincy Davies Ministries',
          address: 'info@quincydaviesministries.com',
        },
      ],
      message:
        `Hi, here is my email so you can contact me: ${formData.email}` +
        formData.message,
      subject: formData.subject,
    };

    try {
      const response = await axios.post(emailUrl, { ...data });
      console.log('EMAIL SENDING RESPONSE', response);
      toast.success('Email sent successfully! We will get back to you soon.');
      setOpen(false);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      toast.error('Something went wrong. Please try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog defaultOpen={false} open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{translations('drawer.learnMore.title')}</DialogTitle>
          <DialogDescription>
            {translations('drawer.learnMore.description')}
          </DialogDescription>
        </DialogHeader>

        <div className="w-full mx-auto space-y-4 text-center">
          <Input
            id="name"
            name="name"
            value={formData.name}
            placeholder={translations('drawer.learnMore.name')}
            className="w-full"
            onChange={handleChange}
          />
          <Input
            id="email"
            name="email"
            value={formData.email}
            placeholder={translations('drawer.learnMore.email')}
            className="w-full"
            onChange={handleChange}
          />

          <Select
            defaultValue={defaultOption?.title}
            onValueChange={(value) =>
              setFormData({ ...formData, subject: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={translations('drawer.learnMore.service')}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{translations('navigation.services')}</SelectLabel>

                {services.map((service) => (
                  <SelectItem key={service.title} value={service.title}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea
            placeholder={translations('drawer.learnMore.message')}
            value={formData.message}
            className="w-full"
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
          />
          <Button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-500/80"
          >
            {isLoading ? (
              <FaSpinner className="text-center animate-spin" />
            ) : (
              translations('drawer.learnMore.subscribeButtonText')
            )}
          </Button>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <DialogClose asChild>
              <Button className="mx-auto" type="button" variant="destructive">
                {translations('drawer.newsLetter.cancelButtonText')}
              </Button>
            </DialogClose>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreModal;
