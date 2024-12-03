'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { emailUrl } from '@/constants';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const translations = useTranslations();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
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

    setIsLoading(true);

    const data = {
      sender: 'info',
      receipient: [
        {
          name: 'Quincy Davies Ministries',
          address: 'info@quincydaviesministries.com',
        },
      ],
      message: formData.message,
      subject: formData.subject,
    };

    try {
      const response = await axios.post(emailUrl, { ...data });
      console.log('EMAIL SENDING RESPONSE', response);
      toast.success('Email sent successfully! We will get back to you soon.');
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
    <form
      onSubmit={handleSubmit}
      className="p-4 lg:p-10 space-y-4 lg:space-y-8 flex-1"
    >
      <Input
        type="text"
        name="name"
        placeholder={translations('contactUsPage.form.name')}
        required
        className="h-12"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder={translations('contactUsPage.form.email')}
        required
        className="h-12"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="subject"
        name="subject"
        placeholder={translations('contactUsPage.form.subject')}
        required
        className="h-12"
        value={formData.subject}
        onChange={handleChange}
      />
      <Textarea
        placeholder={translations('contactUsPage.form.message')}
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
        {isLoading ? (
          <FaSpinner className="text-center animate-spin" />
        ) : (
          translations('contactUsPage.form.buttonText')
        )}
      </Button>
    </form>
  );
};

export default ContactUsForm;
