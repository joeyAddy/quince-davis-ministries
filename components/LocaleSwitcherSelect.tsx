'use client';

import { useParams } from 'next/navigation';
import { ReactNode, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(locale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale },
      );
    });
  }

  return (
    <Select
      onValueChange={onSelectChange}
      defaultValue={defaultValue}
      disabled={isPending}
    >
      <SelectTrigger className="w-fit border-0">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  );
}
