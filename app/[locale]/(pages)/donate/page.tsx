import Donate from "@/components/pages/Donate"; // Ensure this component is purely client-side.
import { unstable_setRequestLocale } from "next-intl/server";

export default function DonatePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <Donate />;
}
