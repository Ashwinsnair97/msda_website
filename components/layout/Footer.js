import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/public/msda_logo_jpeg.jpeg";
import Section from "@/components/ui/Section";
import { mailtoHref, site } from "@/data/site";
import { serviceHref, services } from "@/data/services";

const linkClasses =
  "focus-ring text-sm text-fg-muted transition-colors duration-200 hover:text-accent";

const expertiseLinks = services.map((service) => ({
  label: service.shortTitle,
  href: serviceHref(service.id),
}));

function FooterNav({ label, title, titleClassName, links }) {
  return (
    <nav aria-label={label}>
      <h2 className={`text-sm font-semibold ${titleClassName}`}>{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className={linkClasses}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <Section as="footer" tone="inverse" className="border-t border-line pb-6 pt-10 sm:pt-12">
      <div className="site-container">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.2fr_0.9fr] lg:gap-10">
          <div className="max-w-xl">
            <Link href="/" className="focus-ring inline-block">
              <Image
                src={footerLogo}
                alt={site.name}
                sizes="(min-width: 640px) 256px, 224px"
                className="h-auto w-56 rounded-card sm:w-64"
              />
            </Link>
            <p className="mt-5 font-heading text-2xl text-fg">
              {site.positioningStatement}
            </p>
            <p className="mt-3 text-sm leading-6 text-fg-muted">
              {site.positioningDescription}
            </p>
          </div>

          <FooterNav
            label="Footer navigation"
            title="Explore"
            titleClassName="text-fg"
            links={site.footerNavigation}
          />

          <FooterNav
            label="Our expertise"
            title="Our Expertise"
            titleClassName="text-accent"
            links={expertiseLinks}
          />

          <div>
            <h2 className="text-sm font-semibold text-accent">Get in touch</h2>
            <p className="mt-4 text-sm text-fg-muted">Write to us</p>
            <a href={mailtoHref} className={`mt-2 inline-block ${linkClasses}`}>
              {site.email}
            </a>
            <Link href={site.callbackHref} className={`mt-4 block w-fit ${linkClasses}`}>
              Request a Callback
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p>{site.descriptor}</p>
        </div>
      </div>
    </Section>
  );
}
