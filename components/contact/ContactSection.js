import { Reveal } from "@/components/animations";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { mailtoHref, site } from "@/data/site";

// Text colours come from the section tone; only behaviour that differs
// between a dark and a light band is listed here.
const tones = {
  inverse: {
    emailHover: "hover:text-fg",
    primaryButton: "inverse",
    secondaryButton: "inverse-secondary",
  },
  page: {
    emailHover: "hover:text-accent",
    primaryButton: "primary",
    secondaryButton: "secondary",
  },
};

// Closing call-to-action shared by every page; anchored at #contact.
export default function ContactSection({ eyebrow, title, intro, tone = "inverse" }) {
  const styles = tones[tone];

  return (
    <Section id="contact" tone={tone} className="scroll-mt-24 py-12 text-fg sm:py-16">
      <div className="site-container grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <Reveal>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            className="max-w-3xl"
            introClassName="max-w-2xl"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-start gap-5 lg:items-end">
          <div className="lg:text-right">
            <p className="text-sm font-medium text-fg">Write to us</p>
            <a
              href={mailtoHref}
              className={`focus-ring mt-1 inline-block text-base text-fg-muted transition-colors ${styles.emailHover}`}
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
        </Reveal>
      </div>
    </Section>
  );
}
