import { redirect } from "next/navigation";
import { businessConfig } from "@/config/business";

/** The root URL simply forwards to the configured business's review page. */
export default function Home() {
  redirect(`/review/${businessConfig.slug}`);
}
