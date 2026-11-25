import CallbackForm from "@/components/contact/CallbackForm";
import FormPage from "@/components/forms/FormPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Request a Callback",
  description: `Share your details with ${site.name} to request a callback.`,
};

export default function CallbackPage() {
  return (
    <FormPage
      eyebrow="Get in touch"
      title="Request a Callback"
      intro="Tell us how we can help. Required fields are marked with an asterisk."
    >
      <CallbackForm />
    </FormPage>
  );
}
