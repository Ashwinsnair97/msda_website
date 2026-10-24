import ContactSection from "@/components/contact/ContactSection";
import ApproachSection from "@/components/sections/ApproachSection";
import AnimatedPartnerCarousel from "@/components/partners/AnimatedPartnerCarousel";
import PartnerCard from "@/components/partners/PartnerCard";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { overviewPoints } from "@/data/about";
import { partners } from "@/data/partners";
import { site } from "@/data/site";
import { formatIndex } from "@/lib/format";

const ENABLE_PREMIUM_PARTNER_CAROUSEL = true;

export const metadata = {
  title: "About",
  description:
    `Meet the chartered accountants and specialists behind ${site.name}'s taxation, audit, corporate law and advisory practice.`,
};

export default function AboutPage() {
  return (
    <main className="bg-white font-body text-primary-text">
      <PageHero
        eyebrow="About the firm"
        title="Built on experience. Guided by professional expertise."
        intro={`${site.name} brings together experienced chartered accountants and specialists across taxation, audit, corporate law and advisory. Our multidisciplinary capabilities support businesses and individuals in navigating complex financial and regulatory requirements.`}
      >
        <p className="mt-5 text-[17px] font-medium leading-[1.6] text-primary">
          Practical guidance. Bespoke solutions. Professional perspective.
        </p>
      </PageHero>

      {/* <section className="bg-white pb-16 pt-20 lg:pb-[72px] lg:pt-[88px]">
        <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <SectionHeader
            title="A multidisciplinary approach to professional services."
            intro="Our practice brings together capabilities across accounting, taxation, audit, compliance and advisory, serving a diverse range of organisations and individuals."
            introClassName="max-w-[28rem]"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {overviewPoints.map((point, index) => (
              <div key={point.title} className="border-t border-subtle-border pt-5 sm:pt-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {formatIndex(index)}
                </span>
                <h3 className="mt-3 text-[19px] font-semibold leading-[1.35] text-primary">
                  {point.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-secondary-text">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <ApproachSection /> */}

      <section id="our-people" className="bg-white pb-16 pt-20 lg:pb-[80px] lg:pt-[104px]">
        <div className="site-container">
          <SectionHeader
            eyebrow="Our people"
            title="Experience across disciplines. Expertise in practice."
            intro="Our leadership brings together experience across taxation, audit, corporate law, international taxation and public sector advisory."
            titleClassName="max-w-[52rem]"
            introClassName="max-w-[48rem]"
          />

          <div className="mt-10">
            {ENABLE_PREMIUM_PARTNER_CAROUSEL ? (
              <AnimatedPartnerCarousel partners={partners} />
            ) : (
              <div className="grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {partners.map((partner) => (
                  <PartnerCard
                    key={partner.id}
                    variant="detailed"
                    name={partner.name}
                    designation={partner.designation}
                    practice={partner.practice}
                    image={partner.image}
                    imagePosition={partner.imagePosition}
                    description={partner.bio[0]}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactSection
        eyebrow="Let's talk"
        title="Let's start a conversation."
        intro="If you would like to discuss your professional requirements, our team is available to understand your needs and explore how we may be able to assist."
      />
    </main>
  );
}
