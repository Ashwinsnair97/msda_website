import PartnerCard from "../../components/partners/PartnerCard";
import { clientSegments } from "../../data/clientSegments";
import { overviewPoints, keyCredentials, coreStrengths } from "./constants";
import { partners } from "../../data/partners";
import { site } from "../../data/site";

export default function AboutPage() {
  return (
    <main className="bg-white font-body text-primary-text">
      <section className="border-b border-subtle-border bg-main-background pb-10 pt-28 lg:pb-14 lg:pt-32">
        <div className="site-container">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            MSDA &amp; CO
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.28em] text-accent">
            CHARTERED ACCOUNTANTS
          </p>
          <h1 className="mt-6 max-w-4xl font-heading text-[length:var(--text-page-heading)] font-medium leading-tight tracking-tight text-primary">
            MSDA &amp; CO at a Glance: Creating Long-Term Value
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <div>
              <h2 className="font-heading text-[length:var(--text-section-heading)] font-medium tracking-tight text-primary">
                Two decades of experience
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-secondary-text">
                A trusted professional services partner serving a diverse range of businesses.
              </p>
            </div>

            <div className="space-y-6 border-l border-subtle-border pl-0 lg:pl-8">
              {overviewPoints.map((point) => (
                <div key={point.title} className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">{point.title}</h3>
                  <p className="text-base leading-7 text-secondary-text">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-main-background py-14 lg:py-20">
        <div className="site-container">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Key credentials
            </p>
            <h2 className="mt-3 max-w-3xl font-heading text-[length:var(--text-section-heading)] font-medium leading-tight tracking-tight text-primary">
              80+ professionals supporting clients’ growth objectives.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {keyCredentials.map((credential) => (
              <div
                key={credential}
                className="border-t border-subtle-border py-5 text-base leading-8 text-secondary-text md:text-lg"
              >
                {credential}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-subtle-border bg-white py-6">
        <div className="site-container flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center text-sm font-medium uppercase tracking-[0.08em] text-primary md:text-base">
          <span>Core strengths:</span>
          {coreStrengths.map((strength, index) => (
            <span key={strength} className="inline-flex items-center gap-4">
              <span>{strength}</span>
              {index < coreStrengths.length - 1 ? <span className="text-accent">|</span> : null}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-main-background py-16 lg:py-24">
        <div className="site-container site-container--narrow">
          <h2 className="font-heading text-[length:var(--text-section-heading)] font-medium leading-tight tracking-tight text-primary">
            MSDA &amp; CO Leadership Team: Our Core Strength
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-secondary-text">
            A highly experienced senior team bringing together professionals with diverse industry exposure and strong advisory backgrounds.
          </p>
        </div>

        <div className="site-container mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              variant="detailed"
              name={partner.name}
              designation={partner.designation}
              practice={partner.practice}
              image={partner.image}
              description={partner.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="site-container">
          <h2 className="font-heading text-[length:var(--text-section-heading)] font-medium tracking-tight text-primary">
            Client segments
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clientSegments.map((segment) => (
              <div
                key={segment}
                className="border-t border-subtle-border py-5 pr-6 text-base leading-7 text-primary sm:py-6"
              >
                {segment}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
