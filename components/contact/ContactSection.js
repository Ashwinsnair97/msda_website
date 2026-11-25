import { Reveal } from "@/components/animations";
import ContactTrigger from "@/components/layout/ContactTrigger";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

// Text colours come from the section tone; only behaviour that differs
// between a dark and a light band is listed here.
const tones = {
  inverse: {
    primaryButton: "inverse",
    secondaryButton: "inverse-secondary",
  },
  page: {
    primaryButton: "primary",
    secondaryButton: "secondary",
  },
};

// Closing call-to-action shared by every page; anchored at #contact.
export default function ContactSection({ eyebrow, title, intro, tone = "inverse" }) {
  const styles = tones[tone];

  return (
    <Section id="contact" tone={tone} className="scroll-mt-24 py-12 text-fg sm:py-16">
      <div className="site-container grid gap-10 lg:grid-cols-[65fr_35fr] lg:items-center">
        <Reveal>
          <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-start lg:items-end">
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href={site.callbackHref}
              variant={styles.secondaryButton}
              className="w-full sm:w-auto"
            >
              Request a callback
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
