import Events from "@/components/pages/Events";
import { unstable_setRequestLocale } from "next-intl/server";

export default function EventsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <Events />;
}
