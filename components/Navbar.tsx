import { Menu } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { CgClose } from 'react-icons/cg';
import LocaleSwitcher from './LocationSwitcher';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const Navbar = ({
  setOpenMobileNavbarDropdown,
  openMobileNavbarDropdown,
  locale,
}: {
  openMobileNavbarDropdown: boolean;
  setOpenMobileNavbarDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  locale: string;
}) => {
  const translations = useTranslations();
  const handleOpenMobileNavbarDropdown = () => {
    setOpenMobileNavbarDropdown(!openMobileNavbarDropdown);
  };

  return (
    <nav
      className={cn(
        'px-6 lg:px-20 xl:px-32 mx-3 md:mx-12 max-w-full max-lg:bg-white flex items-center justify-between md:py-2 space-x-5 bg-white !text-black max-lg:py-2 mt-6 rounded-3xl',
        openMobileNavbarDropdown && '!pb-5',
      )}
    >
      <div className="flex flex-row-reverse items-center">
        <Link href="/">
          <Image
            src={
              'https://res.cloudinary.com/dxu0xbfen/image/upload/v1732137642/QDM_MINISTRY_LOGO_BLACK_tzny44.png'
            }
            alt="logo"
            width={100}
            height={100}
            className={cn('object-cover max-md:size-14 size-16 min-w-10')}
          />
        </Link>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            'lg:hidden focus:bg-transparent -ml-3 lg:hover:bg-gray-500/80 ',
          )}
          onClick={handleOpenMobileNavbarDropdown}
        >
          {openMobileNavbarDropdown ? <CgClose className="size-5" /> : <Menu />}
        </Button>
      </div>
      <div className="flex gap-16 items-center justify-center flex-1">
        <ul
          className={`max-lg:hidden flex lg:gap-10 xl:gap-16 gap-6 capitalize text-sm font-semibold items-center ${
            locale === 'ge' && 'gap-6'
          }`}
        >
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/">{translations('navigation.home')}</Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/programmes">{translations('navigation.events')}</Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/services">{translations('navigation.services')}</Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/contact-us">
              {translations('navigation.contactUs')}
            </Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <Link href="/about-us">{translations('navigation.aboutUs')}</Link>
          </li>
          <li className="hover:text-green-500 whitespace-nowrap">
            <LocaleSwitcher />
          </li>
        </ul>
      </div>
      <Button
        className="main-btn-bg px-5 capitalize text-xs lg:text-sm font-bold max-xl:!h-8 rounded-3xl"
        asChild
      >
        <Link href="/support-us">{translations('support.buttonText')}</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
