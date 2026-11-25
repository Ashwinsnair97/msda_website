import { notFound } from "next/navigation";
import ApplicationPage from "@/components/careers/ApplicationPage";
import { findOpening, openings } from "@/data/careers";
import { site } from "@/data/site";

// One prerendered page per listed opening; any other id is a 404.
export function generateStaticParams() {
  return openings.map((opening) => ({ role: opening.id }));
}

export async function generateMetadata({ params }) {
  const opening = findOpening((await params).role);
  return {
    title: opening ? `Apply: ${opening.title}` : "Job Application",
    description: `Apply to join ${site.name}. Share your details and CV with our team.`,
  };
}

export default async function RoleApplicationPage({ params }) {
  const opening = findOpening((await params).role);
  if (!opening) {
    notFound();
  }
  return <ApplicationPage opening={opening} />;
}
