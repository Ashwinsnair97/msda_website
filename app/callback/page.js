import CallbackForm from "@/components/contact/CallbackForm";
import { Eyebrow } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Request a Callback",
  description: "Share your details with MSDA & CO to request a callback.",
};

export default function CallbackPage() {
  return (
    <main className="bg-main-background py-16 sm:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-3xl rounded border border-subtle-border bg-white p-6 sm:p-10">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-3 font-heading text-[length:var(--text-page-heading)] leading-tight text-primary">
            Request a Callback
          </h1>
          <p className="mt-4 text-base leading-relaxed text-secondary-text">
            Tell us how we can help. Required fields are marked with an asterisk.
          </p>
          <div className="mt-8">
            <CallbackForm />
          </div>
        </div>
      </div>
    </main>
  );
}
