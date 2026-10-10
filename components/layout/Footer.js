import Link from "next/link";
import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-dark-section-border bg-primary pb-6 pt-10 text-white sm:pt-12">
      <div className="site-container">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.2fr_0.9fr] lg:gap-10">
          <div className="max-w-xl">
            <Link
              href="/"
              className="inline-flex flex-col text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5a06e]"
            >
              <span>{site.name}</span>
              <span className="text-xs font-medium tracking-[0.12em] text-[#d5dce8]">
                {site.descriptor}
              </span>
            </Link>
            <p className="mt-5 font-heading text-2xl text-white">
              {site.positioningStatement}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#d5dce8]">
              {site.positioningDescription}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-white">Explore</h2>
            <ul className="mt-4 space-y-3">
              {site.footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#d5dce8] transition-colors duration-200 hover:text-[#e5a06e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5a06e]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our expertise">
            <h2 className="text-sm font-semibold text-[#e5a06e]">Our Expertise</h2>
            <ul className="mt-4 space-y-3">
              {site.footerExpertise.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#d5dce8] transition-colors duration-200 hover:text-[#e5a06e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5a06e]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-[#e5a06e]">Get in touch</h2>
            <p className="mt-4 text-sm text-[#d5dce8]">Write to us</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-sm text-[#d5dce8] transition-colors duration-200 hover:text-[#e5a06e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5a06e]"
            >
              {site.email}
            </a>
            <Link
              href={site.callbackHref}
              className="mt-4 block w-fit text-sm text-[#d5dce8] transition-colors duration-200 hover:text-[#e5a06e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5a06e]"
            >
              Request a Callback
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-dark-section-border pt-5 text-xs text-[#d5dce8] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p>{site.descriptor}</p>
        </div>
      </div>
    </footer>
  );
}
