import Button from "../../components/button";
import PartnerCard from "../../components/partners/PartnerCard";
import { partners } from "../../data/partners";
import { site } from "../../data/site";
import { overviewPoints, professionalPrinciples } from "./constants";

export default function AboutPage() {
  return (
    <main className="bg-white font-body text-primary-text">
      <section className="border-b border-subtle-border bg-main-background pb-16 pt-28 lg:pb-[72px] lg:pt-32">
        <div className="site-container">
          <div className="max-w-[56rem] text-left">
            <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[0.18em] text-accent">
              About the firm
            </p>
            <h1 className="mt-5 max-w-[850px] font-heading text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-primary">
              Built on experience. Guided by professional expertise.
            </h1>
            <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-secondary-text">
              MSDA &amp; CO brings together experienced chartered accountants and specialists
              across taxation, audit, corporate law and advisory. Our multidisciplinary
              capabilities support businesses and individuals in navigating complex financial and
              regulatory requirements.
            </p>
            <p className="mt-5 text-[17px] font-medium leading-[1.6] text-primary">
              Practical guidance. Bespoke solutions. Professional perspective.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-20 lg:pb-[72px] lg:pt-[88px]">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <h2 className="font-heading text-[clamp(2.25rem,3vw,2.5rem)] font-medium leading-tight tracking-tight text-primary">
                A multidisciplinary approach to professional services.
              </h2>
              <p className="mt-5 max-w-[28rem] text-[15px] leading-[1.7] text-secondary-text sm:text-base">
                Our practice brings together capabilities across accounting, taxation, audit,
                compliance and advisory, serving a diverse range of organisations and
                individuals.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {overviewPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="border-t border-subtle-border pt-5 sm:pt-6"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {String(index + 1).padStart(2, "0")}
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
        </div>
      </section>

      <section className="bg-[var(--midnight-navy)] py-20 text-white lg:py-[96px]">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[0.18em] text-accent">
              Our approach
            </p>
            <h2 className="mt-4 max-w-[28rem] font-heading text-[clamp(2.125rem,3vw,2.5rem)] font-medium leading-tight tracking-tight text-white">
              Professional knowledge, applied with purpose.
            </h2>
            <p className="mt-5 max-w-[32rem] text-[15px] leading-[1.8] text-[#d3d9e3] sm:text-base">
              Every engagement begins with understanding the client's circumstances,
              requirements and regulatory context. Our multidisciplinary experience helps us bring
              relevant professional perspectives to the work.
            </p>
          </div>

          <div className="space-y-0">
            {professionalPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="border-t border-[#334056] pt-5"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#a84b12]/80 text-[11px] font-semibold text-accent">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[19px] font-semibold leading-[1.4] text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-[1.75] text-[#d3d9e3]">
                      {principle.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-main-background pb-16 pt-20 lg:pb-[80px] lg:pt-[104px]">
        <div className="site-container">
          <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[0.18em] text-accent">
            Our people
          </p>
          <h2 className="mt-4 max-w-[52rem] font-heading text-[clamp(2.25rem,3vw,2.5rem)] font-medium leading-tight tracking-tight text-primary">
            Experience across disciplines. Expertise in practice.
          </h2>
          <p className="mt-5 max-w-[48rem] text-[17px] leading-[1.7] text-secondary-text">
            Our leadership brings together experience across taxation, audit, corporate law,
            international taxation and public sector advisory.
          </p>
        </div>

        <div className="site-container mt-10 grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              variant="detailed"
              name={partner.name}
              designation={partner.designation}
              practice={partner.practice}
              image={partner.image}
              imagePosition={partner.imagePosition}
              description={partner.description}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-primary py-12 text-white sm:py-16">
        <div className="site-container grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-3 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] text-[#e5a06e]">
              Let&apos;s talk
            </p>
            <h2 className="font-heading text-[clamp(2.375rem,3.5vw,2.625rem)] font-medium leading-tight tracking-tight text-white">
              Let&apos;s start a conversation.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-[1.6] text-[#d5dce8]">
              If you would like to discuss your professional requirements, our team is
              available to understand your needs and explore how we may be able to assist.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="lg:text-right">
              <p className="text-sm font-medium text-white">Write to us</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-block text-base text-[#d5dce8] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5a06e]"
              >
                {site.email}
              </a>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href={`mailto:${site.email}`}
                variant="primary"
                className="button--contact-cta w-full sm:w-auto"
                hoverColor="var(--stone-beige)"
                icon={<span aria-hidden="true">→</span>}
              >
                Contact Us
              </Button>
              <Button
                href={site.callbackHref}
                variant="secondary"
                className="button--contact-secondary w-full sm:w-auto"
              >
                Request a Callback
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
