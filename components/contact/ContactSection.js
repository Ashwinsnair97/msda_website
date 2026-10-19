import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { mailtoHref, site } from "@/data/site";

const tones = {
  dark: {
    section: "bg-primary text-white [--focus-ring-color:var(--copper-glow)]",
    label: "text-white",
    email: "text-on-dark-muted hover:text-white",
    primaryButton: "inverse",
    secondaryButton: "inverse-secondary",
  },
  light: {
    section: "bg-main-background text-primary",
    label: "text-primary",
    email: "text-secondary-text hover:text-accent",
    primaryButton: "primary",
    secondaryButton: "secondary",
  },
};

// Closing call-to-action shared by every page; anchored at #contact.
export default function ContactSection({ eyebrow, title, intro, tone = "dark" }) {
  const styles = tones[tone];

  return (
    <section id="contact" className={`scroll-mt-24 py-12 sm:py-16 ${styles.section}`}>
      <div className="site-container grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <SectionHeader
          tone={tone}
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          className="max-w-3xl"
          introClassName="max-w-2xl"
        />

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <div className="lg:text-right">
            <p className={`text-sm font-medium ${styles.label}`}>Write to us</p>
            <a
              href={mailtoHref}
              className={`focus-ring mt-1 inline-block text-base transition-colors ${styles.email}`}
            >
              {site.email}
            </a>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href={mailtoHref}
              variant={styles.primaryButton}
              className="w-full sm:w-auto"
              icon="→"
            >
              Contact Us
            </Button>
            <Button
              href={site.callbackHref}
              variant={styles.secondaryButton}
              className="w-full sm:w-auto"
            >
              Request a Callback
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
