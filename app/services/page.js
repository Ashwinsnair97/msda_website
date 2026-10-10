import Button from "../../components/button";
import { site } from "../../data/site";
import { practiceAreas, processSteps, supportAreas } from "./constants";

export default function ServicesPage() {
  return (
    <main className="bg-white font-body text-primary-text">
      <section className="border-b border-subtle-border bg-main-background pb-16 pt-28 lg:pb-[72px] lg:pt-32">
        <div className="site-container">
          <div className="max-w-[58rem]">
            <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[0.18em] text-accent">
              Our services
            </p>
            <h1 className="mt-5 max-w-[56rem] font-heading text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-primary">
              Expertise for every stage of your business.
            </h1>
            <p className="mt-6 max-w-[49rem] text-[17px] leading-[1.7] text-secondary-text">
              From business structuring and statutory compliance to audit, taxation and
              transaction advisory, MSDA &amp; CO provides professional support tailored to your
              requirements.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                href="#practice-areas"
                variant="primary"
                icon={<span aria-hidden="true">↓</span>}
              >
                Explore practice areas
              </Button>
              <Button
                href={`mailto:${site.email}`}
                variant="secondary"
                icon={<span aria-hidden="true">→</span>}
              >
                Contact our team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="practice-areas" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="site-container">
          <div className="mb-6">
            <h2 className="font-heading text-[length:var(--text-section-heading)] font-medium leading-tight tracking-tight text-primary">
              Our practice areas
            </h2>
            <p className="mt-3 text-base leading-[1.6] text-secondary-text">
              Explore our services
            </p>
          </div>

          <div className="border-b border-subtle-border">
            {practiceAreas.map((practice, index) => (
              <article
                key={practice.id}
                id={practice.id}
                className="relative scroll-mt-28 grid gap-5 border-t border-subtle-border py-7 md:grid-cols-[1.08fr_0.92fr] md:gap-10 lg:gap-14 lg:py-8"
              >
                {practice.id === "audit-and-assurance" && (
                  <span
                    id="public-sector-advisory-audit"
                    className="absolute left-0 top-0 scroll-mt-28"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-main-background text-[13px] font-semibold tracking-wide text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-[22px] font-medium leading-[1.2] tracking-tight text-primary sm:text-2xl">
                      {practice.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.65] text-secondary-text sm:text-base">
                      {practice.description}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-x-2 gap-y-1 pl-[52px] text-[14px] leading-[1.8] text-secondary-text md:pl-0 md:pt-1 sm:text-[15px]">
                  {practice.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverable} className="inline-flex items-center gap-2">
                      <span>{deliverable}</span>
                      {deliverableIndex < practice.deliverables.length - 1 && (
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
          <div className="mb-8 max-w-[48rem]">
            <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[0.18em] text-accent">
              How we help
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,3vw,2.375rem)] font-medium leading-tight tracking-tight text-primary">
              Support that extends beyond individual engagements
            </h2>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {supportAreas.map((area) => (
              <article
                key={area.title}
                className="border-t border-subtle-border py-5 lg:py-6"
              >
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

      <section className="bg-primary pb-12 pt-16 text-white lg:pb-14 lg:pt-[80px]">
        <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[length:var(--text-label)] font-semibold uppercase tracking-[0.18em] text-[#e5a06e]">
              Our approach
            </p>
            <h2 className="mt-4 max-w-[34rem] font-heading text-[clamp(2.125rem,3vw,2.5rem)] font-medium leading-tight tracking-tight text-white">
              Understand the business. Apply the right expertise.
            </h2>
            <p className="mt-5 max-w-[32rem] text-[15px] leading-[1.75] text-[#d5dce8] sm:text-base">
              A clear, considered approach begins with understanding each client&apos;s context
              and identifying the professional support relevant to the engagement.
            </p>
          </div>

          <div>
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="border-t border-dark-section-border py-5 first:pt-5"
              >
                <p className="text-[13px] font-semibold tracking-[0.12em] text-[#e5a06e]">
                  {item.step}
                </p>
                <h3 className="mt-2 text-[19px] font-semibold leading-[1.4] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#d5dce8]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-main-background py-10 text-primary sm:py-12">
        <div className="site-container grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-3 text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] text-accent">
              Need professional support?
            </p>
            <h2 className="font-heading text-[clamp(2.375rem,3.5vw,2.625rem)] font-medium leading-tight tracking-tight text-primary">
              Let&apos;s discuss your requirements.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-[1.6] text-secondary-text">
              Tell us what your business needs, and our team can help you identify the relevant
              professional services.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="lg:text-right">
              <p className="text-sm font-medium text-primary">Write to us</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-block text-base text-secondary-text transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {site.email}
              </a>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href={`mailto:${site.email}`}
                variant="primary"
                className="w-full sm:w-auto"
                icon={<span aria-hidden="true">→</span>}
              >
                Contact Us
              </Button>
              <Button
                href={site.callbackHref}
                variant="secondary"
                className="w-full sm:w-auto"
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
