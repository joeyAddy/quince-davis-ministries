import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  localePrefix: 'always', // Ensures the locale is always prefixed in the URL
  locales: ['en', 'ge'], // Available locales
  defaultLocale: 'en', // Default locale
  pathnames: {
    '/': '/',
    '/programmes': '/programmes',
    '/programmes/[id]': '/programmes/[id]',
    '/support-us': '/support-us',
    '/services': '/services',
    '/contact-us': '/contact-us',
    '/about-us': '/about-us',
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
