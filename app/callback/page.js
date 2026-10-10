import CallbackForm from "../../components/contact/CallbackForm";

export const metadata = {
  title: "Request a Callback | MSDA & CO",
  description: "Share your details with MSDA & CO to request a callback.",
};

export default function CallbackPage() {
  return (
    <main className="bg-main-background py-16 sm:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-3xl rounded border border-subtle-border bg-white p-6 sm:p-10">
          <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-tight text-primary sm:text-5xl">
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
