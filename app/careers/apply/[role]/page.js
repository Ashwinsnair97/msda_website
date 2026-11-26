import { notFound } from "next/navigation";
import { Suspense } from "react";
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

// The role comes from the URL, so it is read inside <Suspense>: the shared
// App Shell (the general application page, same layout with no role
// preselected) shows the instant you click Apply, and the role-specific
// version replaces it as soon as it resolves. Every listed role is
// prerendered, so on a full page load the role version arrives in the HTML.
export default function RoleApplicationPage({ params }) {
  return (
    <Suspense fallback={<ApplicationPage />}>
      <RoleApplication params={params} />
    </Suspense>
  );
}

async function RoleApplication({ params }) {
  const opening = findOpening((await params).role);
  if (!opening) {
    notFound();
  }
  return <ApplicationPage opening={opening} />;
}
