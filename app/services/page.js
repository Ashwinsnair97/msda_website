import ContactSection from "@/components/contact/ContactSection";
import ApproachSection from "@/components/sections/ApproachSection";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { clientSegments, services } from "@/data/services";
import { mailtoHref, site } from "@/data/site";
import { formatIndex } from "@/lib/format";

export const metadata = {
  title: "Services",
  description:
    `Audit and assurance, direct and indirect taxation, international taxation and FEMA, corporate law, virtual CFO, transaction advisory and accounting outsourcing from ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <main className="bg-white font-body text-primary-text">
      <PageHero
        eyebrow="Our services"
        title="Expertise for every stage of your business."
        intro={`From business structuring and statutory compliance to audit, taxation and transaction advisory, ${site.name} provides professional support tailored to your requirements.`}
      >
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="#practice-areas" icon="↓">
            Explore practice areas
          </Button>
          <Button href={mailtoHref} variant="secondary" icon="→">
            Contact our team
          </Button>
        </div>
      </PageHero>

      <section id="practice-areas" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="site-container">
          <SectionHeader
            title="Our practice areas"
            intro="Explore our services"
            className="mb-6"
          />

          <div className="border-b border-subtle-border">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="grid scroll-mt-28 gap-5 border-t border-subtle-border py-7 md:grid-cols-[1.08fr_0.92fr] md:gap-10 lg:gap-14 lg:py-8"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-main-background text-[13px] font-semibold tracking-wide text-accent">
                    {formatIndex(index)}
                  </span>
                  <div>
                    <h3 className="font-heading text-[22px] font-medium leading-[1.2] tracking-tight text-primary sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-secondary-text sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-x-2 gap-y-1 pl-[52px] text-[14px] leading-[1.8] text-secondary-text sm:text-[15px] md:pl-0 md:pt-1">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverable} className="inline-flex items-center gap-2">
                      <span>{deliverable}</span>
                      {deliverableIndex < service.deliverables.length - 1 && (
                        <span aria-hidden="true" className="text-accent">
                          ·
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-main-background py-16 lg:py-20">
        <div className="site-container">
          <SectionHeader
            eyebrow="Who we serve"
            title="Support for every kind of client"
            intro={clientSegments.intro}
            className="mb-8 max-w-[48rem]"
          />

          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {clientSegments.items.map((area) => (
              <article key={area.title} className="border-t border-subtle-border py-5 lg:py-6">
                <h3 className="text-base font-semibold leading-[1.4] text-primary">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.65] text-secondary-text">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApproachSection />

      <ContactSection
        tone="light"
        eyebrow="Need professional support?"
        title="Let's discuss your requirements."
        intro="Tell us what your business needs, and our team can help you identify the relevant professional services."
      />
    </main>
  );
}
