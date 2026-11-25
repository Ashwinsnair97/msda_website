import { BriefcaseBusiness, GraduationCap, TrendingUp, Users } from "lucide-react";
import heroImage from "@/public/career_image.jpg";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import OpeningsList from "@/components/careers/OpeningsList";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeader, { Eyebrow, SectionHeading, SectionIntro } from "@/components/ui/SectionHeader";
import { benefits, careersApplyHref, openings } from "@/data/careers";
import { site } from "@/data/site";

export const metadata = {
  title: "Careers",
  description: `Explore career opportunities at ${site.name} across accounting, taxation, audit and advisory.`,
};

const benefitIcons = {
  development: GraduationCap,
  engagements: BriefcaseBusiness,
  collaboration: Users,
  opportunities: TrendingUp,
};

// Same treatment as the home hero: full-bleed photo with the ivory
// .hero-scrim fading in behind the copy.
function CareersHero() {
  return (
    <section
      className="relative flex min-h-[560px] items-center overflow-hidden bg-surface-page bg-cover bg-center pb-20 pt-36 lg:min-h-[620px]"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div aria-hidden="true" className="hero-scrim absolute inset-0" />
      <div className="site-container relative">
        <div className="max-w-2xl">
          <Eyebrow className="mb-4">Careers at {site.name}</Eyebrow>
          <h1 className="font-heading text-hero font-medium leading-[1.03] tracking-tight text-fg">
            Build your career with purpose.
          </h1>
          <p className="hero-copy mt-5 text-hero-body leading-[1.6] text-fg-copy">
            Join a team of professionals working across accounting, taxation, audit and
            advisory. Explore opportunities to develop your expertise, take on meaningful
            responsibilities and grow with us.
          </p>
          <div className="mt-8">
            <Button href="#openings" icon="↓">
              View current openings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyJoinSection() {
  return (
    <Section tone="surface" className="py-20 lg:py-[88px]">
      <div className="site-container">
        <Reveal>
          <SectionHeader
            eyebrow="Why build your career here?"
            title="More than a job. An opportunity to grow."
            intro={`At ${site.name}, professional experience is built through practical work, collaboration and exposure to different areas of the profession.`}
            titleClassName="max-w-[40rem]"
            introClassName="max-w-[44rem]"
          />
        </Reveal>

        <StaggerContainer
          as="ul"
          className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
        >
          {benefits.map((benefit) => {
            const Icon = benefitIcons[benefit.icon];
            return (
              <StaggerItem as="li" key={benefit.title} className="border-t border-line pt-6">
                <Icon size={24} strokeWidth={1.6} aria-hidden="true" className="text-accent" />
                <h3 className="mt-5 text-lg font-semibold leading-snug text-fg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-fg-muted">{benefit.text}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}

function OpeningsSection() {
  return (
    <Section id="openings" tone="page" className="scroll-mt-20 py-20 lg:py-24">
      <div className="site-container">
        <Reveal className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Opportunities"
            title="Find your next opportunity."
            intro="We are always looking for talented professionals to join our team. Explore our current openings and find a role that matches your qualifications and experience."
            introClassName="max-w-[44rem]"
          />
          <p className="shrink-0 text-sm font-medium text-fg-muted">
            {openings.length} open {openings.length === 1 ? "role" : "roles"}
          </p>
        </Reveal>

        <OpeningsList openings={openings} />
      </div>
    </Section>
  );
}

// Navy band directly above the footer, which opens with its own divider.
function OpenApplicationSection() {
  return (
    <Section tone="inverse" className="py-12 sm:py-16">
      <div className="site-container grid gap-8 lg:grid-cols-[3fr_1fr] lg:items-center lg:gap-10">
        <Reveal>
          <Eyebrow>Open applications</Eyebrow>
          <SectionHeading className="mt-4">Don&apos;t see the right role?</SectionHeading>
          <SectionIntro>
            If you are interested in joining {site.name}, we&apos;d still like to hear from you.
            Send us your CV and tell us about the work that interests you.
          </SectionIntro>
        </Reveal>
        <Reveal delay={0.1} className="flex lg:justify-end">
          <Button
            href={careersApplyHref}
            variant="inverse"
            icon="→"
            className="w-full sm:w-auto"
          >
            Send your profile
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

export default function CareersPage() {
  return (
    <main className="bg-surface-page font-body text-fg">
      <CareersHero />
      <WhyJoinSection />
      <OpeningsSection />
      <OpenApplicationSection />
    </main>
  );
}
