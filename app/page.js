import Link from "next/link";
import heroImage from "@/public/CA_home_page_1.png";
import ContactSection from "@/components/contact/ContactSection";
import PartnerCard from "@/components/partners/PartnerCard";
import Button from "@/components/ui/Button";
import SectionHeader, { Eyebrow } from "@/components/ui/SectionHeader";
import { clientSegments } from "@/data/clientSegments";
import { firmHighlights } from "@/data/home";
import { partners } from "@/data/partners";
import { serviceHref, services } from "@/data/services";
import { mailtoHref } from "@/data/site";
import { formatIndex } from "@/lib/format";

const textLinkClasses =
  "focus-ring text-sm font-semibold text-primary transition-colors hover:text-accent";

export default function Home() {
  return (
    <main className="bg-main-background text-primary-text">
      <section
        className="relative flex min-h-[620px] items-center overflow-hidden bg-cover bg-center pb-20 pt-36 lg:min-h-[680px]"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-main-background/80 sm:bg-transparent sm:bg-gradient-to-r sm:from-main-background/90 sm:via-main-background/30 sm:to-main-background/0" />
        <div className="site-container relative">
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">Chartered Accountants</Eyebrow>
            <h1 className="max-w-4xl font-heading text-[length:var(--text-hero)] font-medium leading-[1.03] tracking-tight text-primary">
              <span className="sm:block">Two Decades of</span>{" "}
              <span className="sm:block">Professional Service</span>{" "}
              <span className="sm:block">Experience</span>
            </h1>
            <p className="hero-copy mt-5 text-[length:var(--text-hero-body)] leading-[1.6] text-secondary-text">
              MSDA &amp; CO provides multidisciplinary expertise across
              accounting, taxation, audit, compliance and advisory services,
              helping businesses navigate regulatory requirements and make
              informed decisions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/services" icon="→">
                Explore Our Services
              </Button>
              <Button href={mailtoHref} variant="secondary" icon="→">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Firm at a glance" className="bg-main-background text-primary-text">
        <div className="site-container grid grid-cols-1 divide-y divide-subtle-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {firmHighlights.map((highlight) => (
            <div
              key={highlight.figure}
              className="flex flex-col justify-center py-8 sm:px-8 sm:py-9 lg:first:pl-0"
            >
              <p className="text-[length:var(--text-stat)] font-semibold tracking-tight">
                {highlight.figure}
              </p>
              <p className="mt-1 text-[length:var(--text-stat-label)] text-secondary-text">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white pb-[72px] pt-16 sm:pt-[72px]">
        <div className="site-container">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="How we can help"
              title="Our Services"
              intro="Practical expertise across advisory, audit, taxation and compliance."
            />
            <Link
              href="/services"
              className={`${textLinkClasses} w-fit underline decoration-accent underline-offset-4`}
            >
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="divide-y divide-subtle-border border-y border-subtle-border">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={serviceHref(service.id)}
                className="focus-ring group flex items-center justify-between gap-5 py-5 text-primary transition-colors sm:py-6"
              >
                <span className="flex min-w-0 items-start gap-4 sm:gap-6">
                  <span className="pt-0.5 text-[13px] font-semibold tracking-wider text-accent">
                    {formatIndex(index)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                      {service.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-[1.5] text-secondary-text sm:text-[15px]">
                      {service.summary}
                    </span>
                  </span>
                </span>
                <span aria-hidden="true" className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-main-background py-12 sm:py-[72px]">
        <div className="site-container">
          <SectionHeader
            eyebrow="Our people"
            title="Meet the people behind our expertise."
            intro="Our leadership brings together experience across taxation, audit, corporate law and international advisory."
            className="mb-10 max-w-[700px]"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.slice(0, 3).map((partner) => (
              <PartnerCard
                key={partner.id}
                variant="preview"
                name={partner.name}
                designation={partner.designation}
                practice={partner.practice}
                image={partner.image}
                imagePosition={partner.imagePosition}
              />
            ))}
          </div>
          <Link href="/about" className={`${textLinkClasses} mt-8 inline-flex items-center gap-3`}>
            Meet Our Team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-[72px]">
        <div className="site-container">
          <SectionHeader
            eyebrow="Who we serve"
            title="Expertise for diverse business needs."
            intro="Our multidisciplinary capabilities support organisations and individuals across a range of sectors and business needs."
            introClassName="max-w-[720px]"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {clientSegments.map((segment) => (
              <li
                key={segment}
                className="border-t border-subtle-border py-5 pr-6 text-[15px] leading-relaxed text-primary sm:py-6"
              >
                {segment}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection
        eyebrow="Let's talk"
        title="Let's discuss how we can support your business."
        intro="Have a question or need professional guidance? Connect with our team to discuss your requirements."
      />
    </main>
  );
}
