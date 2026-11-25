import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactTrigger from "@/components/layout/ContactTrigger";
import Section from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { offices, site, telHref } from "@/data/site";

// White version of the MSDA & Co. | CA India lockup for the navy footer.
// Dimensions match public/msda_logo.png; update them if the white file differs.
const footerLogo = { src: "/msda_logo_white.png", width: 2047, height: 450 };

const contactLinkClasses =
  "focus-ring inline-flex items-center gap-3 text-base text-fg transition-colors duration-200 hover:text-accent";

function OfficeLocations() {
  return (
    <div className="grid gap-10 py-12 lg:grid-cols-[14rem_1fr] lg:gap-0 lg:py-10">
      <div className="lg:flex lg:flex-col lg:justify-center lg:pr-10">
        <Eyebrow as="h2">Our offices</Eyebrow>
        <span aria-hidden="true" className="mt-4 block h-1 w-20 bg-accent" />
      </div>

      {/* One column on phones, two from md up. A rule sits above every row
          but the first (stopping short of the column gap), and a vertical
          rule runs down the middle of the gap. */}
      <ul className="relative grid gap-y-7 md:grid-cols-2 md:gap-x-20 md:before:absolute md:before:inset-y-0 md:before:left-1/2 md:before:border-l md:before:border-line md:before:content-[''] lg:border-l lg:border-line lg:pl-10 lg:before:left-[calc(50%+1.25rem)]">
        {offices.map((office) => (
          <li
            key={office.id}
            className="flex items-start gap-3 border-line max-md:[&+&]:border-t max-md:[&+&]:pt-7 md:[&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:pt-7"
          >
            <MapPin
              size={20}
              strokeWidth={2}
              aria-hidden="true"
              className="mt-1 shrink-0 text-accent"
            />
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-fg">{office.name}</h3>
              <address className="mt-1.5 text-sm not-italic leading-6 text-fg-copy">
                {office.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            {/* Directions links are hidden for now; each office still has a
                `directionsHref` in data/site.js for when they come back. */}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BrandRow() {
  return (
    <div className="grid gap-8 border-t border-line py-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-0">
      <Link href="/" className="focus-ring block w-fit lg:pr-10">
        <Image
          {...footerLogo}
          alt={site.name}
          sizes="(min-width: 640px) 288px, 240px"
          className="h-auto w-60 sm:w-72"
        />
      </Link>

      <div className="max-w-xl lg:self-stretch lg:border-l lg:border-line lg:px-10 lg:py-2">
        <p className="font-heading text-2xl text-fg">{site.positioningStatement}</p>
        <p className="mt-2 text-base leading-7 text-fg-copy">{site.positioningDescription}</p>
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-0">
        <div className="sm:pr-8 lg:border-l lg:border-line lg:pl-10">
          <ContactTrigger
            align="end"
            className={`${contactLinkClasses} underline decoration-1 underline-offset-4`}
          >
            <Mail size={24} strokeWidth={1.75} aria-hidden="true" />
            {site.email}
          </ContactTrigger>
        </div>
        <div className="sm:border-l sm:border-line sm:pl-8">
          <a href={telHref} className={contactLinkClasses}>
            <Phone size={22} strokeWidth={1.75} aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap gap-x-12 gap-y-3">
          {site.footerNavigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="focus-ring text-base text-fg transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-fg-copy sm:text-base">
        <span>
          © {site.copyrightYear} {site.name}. All rights reserved.
        </span>
        <span aria-hidden="true" className="hidden h-5 border-l border-line sm:block" />
        <span>{site.descriptor}</span>
      </p>
    </div>
  );
}

// Sits directly under each page's ContactSection (also a navy band), so it
// opens with a divider rather than its own top padding.
export default function Footer() {
  return (
    <Section as="footer" tone="inverse" className="pb-8">
      <div className="site-container border-t border-line">
        <OfficeLocations />
        <BrandRow />
        <BottomBar />
      </div>
    </Section>
  );
}
