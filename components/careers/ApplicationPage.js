import FormPage from "@/components/forms/FormPage";
import { GENERAL_APPLICATION } from "@/data/careers";
import ApplicationForm from "./ApplicationForm";

// Shared by /careers/apply (general application) and
// /careers/apply/[role] (a listed opening, preselected in the form).
export default function ApplicationPage({ opening }) {
  return (
    <FormPage
      eyebrow={opening ? `Careers · ${opening.title}` : "Careers"}
      title="Job application"
      intro="Share your details and latest CV with our team. Required fields are marked with an asterisk."
      back={{ href: "/careers#openings", label: "Back to careers" }}
    >
      <ApplicationForm defaultRole={opening?.id ?? GENERAL_APPLICATION} />
    </FormPage>
  );
}
