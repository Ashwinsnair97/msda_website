import Link from "next/link";
import CA_home from "../public/CA_home_page_1.png";
import Button from "../components/button";
import { firmHighlights } from "./constants";
import PartnerCard from "../components/partners/PartnerCard";
import { clientSegments } from "../data/clientSegments";
import { partners } from "../data/partners";
import { services } from "../data/services";
import { site } from "../data/site";

export default function Home() {
  return (
    <main className="bg-main-background text-primary-text">
      <section
        className="relative flex min-h-[620px] items-center overflow-hidden bg-cover bg-center pb-20 pt-36 lg:min-h-[680px]"
        style={{ backgroundImage: `url(${CA_home.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-main-background/90 via-main-background/30 to-main-background/0" />
        <div className="site-container relative">
          <div className="max-w-2xl">
            <p className="mb-4 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] text-accent">
              Chartered Accountants
            </p>
            <h1 className="max-w-4xl font-heading text-[length:var(--text-hero)] font-medium leading-[1.03] tracking-tight text-primary">
              <span className="sm:block">Two Decades of</span>{" "}
              <span className="sm:block">Professional Services</span>{" "}
              <span className="sm:block">Experience</span>
            </h1>
            <p className="hero-copy mt-5 text-[length:var(--text-hero-body)] leading-[1.6] text-secondary-text">
              MSDA &amp; CO provides multidisciplinary expertise across
              accounting, taxation, audit, compliance and advisory services,
              helping businesses navigate regulatory requirements and make
              informed decisions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/services"
                variant="primary"
                icon={<span aria-hidden="true">→</span>}
              >
                Explore Our Services
              </Button>
              <Button
                href={`mailto:${site.email}`}
                variant="secondary"
                icon={<span aria-hidden="true">→</span>}
              >
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
            <div>
              <p className="mb-4 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] text-accent">
                How we can help
              </p>
              <h2 className="font-heading text-[clamp(2.375rem,3vw,2.5rem)] font-medium leading-tight tracking-tight text-primary">
                Our Services
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-secondary-text">
                Practical expertise across advisory, audit, taxation and compliance.
              </p>
            </div>
            <Link
              href="/services"
              className="w-fit text-sm font-semibold text-primary underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
            >
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="divide-y divide-[#e2e5e9] border-y border-[#e2e5e9]">
            {services.slice(0, 5).map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="group flex items-center justify-between gap-5 py-5 text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:py-6"
              >
                <span className="flex min-w-0 items-start gap-4 sm:gap-6">
                  <span className="pt-0.5 text-[13px] font-semibold tracking-wider text-accent">
                    {String(index + 1).padStart(2, "0")}
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
          <div className="mb-10 max-w-[700px]">
            <p className="mb-4 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] text-accent">
              Our people
            </p>
            <h2 className="font-heading text-[clamp(2.375rem,3vw,2.5rem)] font-medium leading-tight tracking-tight text-primary">
              Meet the people behind our expertise.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-text">
              Our leadership brings together experience across taxation, audit,
              corporate law and international advisory.
            </p>
          </div>
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
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Meet Our Team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-[72px]">
        <div className="site-container">
          <p className="mb-4 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] text-accent">
            Who we serve
          </p>
          <h2 className="font-heading text-[clamp(2.375rem,3vw,2.5rem)] font-medium leading-tight tracking-tight text-primary">
            Expertise for diverse business needs.
          </h2>
          <p className="mt-4 max-w-[720px] text-base leading-relaxed text-secondary-text">
            Our multidisciplinary capabilities support organisations and
            individuals across a range of sectors and business needs.
          </p>
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

      <section id="contact" className="scroll-mt-24 bg-primary py-12 text-white sm:py-16">
        <div className="site-container grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-3 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] text-[#e5a06e]">
              Let&apos;s talk
            </p>
            <h2 className="font-heading text-[clamp(2.375rem,3.5vw,2.625rem)] font-medium leading-tight tracking-tight text-white">
              Let&apos;s discuss how we can support your business.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-[1.6] text-[#d5dce8]">
              Have a question or need professional guidance? Connect with our
              team to discuss your requirements.
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
