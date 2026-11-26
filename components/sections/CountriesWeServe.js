import { Reveal } from "@/components/animations";
import CountryPill from "@/components/ui/CountryPill";
import Section from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { countries } from "@/data/countries";

// Seconds each pill takes to cross its own width. The marquee speed then stays
// the same however many countries are listed.
const SECONDS_PER_COUNTRY = 4;

function CountryList({ className = "", ...props }) {
  return (
    <ul className={`countries-marquee__list ${className}`} {...props}>
      {countries.map((country) => (
        <li key={country.name} className="flex">
          <CountryPill name={country.name} flag={country.flag} />
        </li>
      ))}
    </ul>
  );
}

// Ribbon listing the countries the firm serves. From 768px the label sits
// beside the row with a divider; below that it sits on top. The row is a slow
// CSS marquee on every device that never pauses. With reduced
// motion it is a static row you swipe or arrow-key through. All behaviour is
// CSS (styles/components/countries.css).
export default function CountriesWeServe() {
  if (countries.length === 0) return null;

  return (
    <Section
      tone="page"
      aria-labelledby="countries-we-serve-heading"
      className="border-t border-line py-8 md:py-7"
    >
      <Reveal className="site-container flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <Eyebrow
          as="h2"
          id="countries-we-serve-heading"
          className="shrink-0 whitespace-nowrap"
        >
          Countries we serve
        </Eyebrow>

        <span aria-hidden="true" className="hidden h-8 w-px shrink-0 bg-line md:block" />

        <div className="countries-marquee">
          {/* Focusable so keyboard users can scroll the static row shown with
              reduced motion. */}
          <div
            className="countries-marquee__viewport focus-ring"
            role="region"
            aria-labelledby="countries-we-serve-heading"
            tabIndex={0}
          >
            <div
              className="countries-marquee__track"
              style={{
                "--marquee-duration": `${countries.length * SECONDS_PER_COUNTRY}s`,
              }}
            >
              <CountryList />
              {/* Second copy makes the loop seamless. Shown only while the
                  marquee runs, and hidden from screen readers either way. */}
              <CountryList aria-hidden="true" className="countries-marquee__clone" />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
