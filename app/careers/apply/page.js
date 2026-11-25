import ApplicationPage from "@/components/careers/ApplicationPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Job Application",
  description: `Apply to join ${site.name}. Share your details and CV with our team.`,
};

export default function GeneralApplicationPage() {
  return <ApplicationPage />;
}
