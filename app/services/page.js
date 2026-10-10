import { services } from "../../data/services";
import { processSteps, supportAreas } from "./constants";

export default function ServicesPage() {
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
            Professional Services Designed Around Growth and Compliance
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Services
              </p>
              <h2 className="mt-4 font-heading text-[length:var(--text-section-heading)] font-medium leading-tight tracking-tight text-primary">
                Comprehensive advisory, compliance and assurance support
              </h2>
            </div>

            <p className="max-w-xl text-base leading-[1.6] text-secondary-text">
              We support businesses with practical, multidisciplinary solutions spanning accounting, audit, taxation, compliance and strategic advisory.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-main-background py-16 lg:py-24">
        <div className="site-container">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Our practice areas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group scroll-mt-28 rounded-[5px] border border-subtle-border bg-white p-7 transition-colors duration-200 hover:border-accent"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-alternate-background text-sm font-semibold text-primary">
                  {service.title.slice(0, 1)}
                </div>
                <h3 className="font-heading text-xl font-medium leading-tight tracking-tight text-primary transition-colors group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-secondary-text">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="site-container">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              How we help
            </p>
            <h2 className="mt-3 font-heading text-[length:var(--text-section-heading)] font-medium leading-tight tracking-tight text-primary">
              Practical support across the business lifecycle
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {supportAreas.map((area) => (
              <div
                key={area}
                className="border-t border-subtle-border py-5 text-base font-medium text-primary"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-subtle-border bg-white py-16 lg:py-24">
        <div className="site-container">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Our approach
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="border-t border-subtle-border py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {item.step}
                </p>
                <h3 className="mt-4 font-heading text-xl font-medium tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-secondary-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
