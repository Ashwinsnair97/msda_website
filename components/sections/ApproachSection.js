import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { approachSteps } from "@/data/approach";

// "Our approach" band shared by the About and Services pages.
export default function ApproachSection() {
  return (
    <Section tone="inverse" className="py-20 lg:py-[96px]">
      <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <SectionHeader
            eyebrow="Our approach"
            title="Understand the business. Bring the right expertise. Deliver with purpose."
            intro="Every business has its own priorities, challenges and regulatory considerations. Our approach begins with understanding these nuances and bringing together the right expertise to deliver practical, considered and professionally sound solutions."
            titleClassName="max-w-[28rem]"
            introClassName="max-w-[32rem]"
          />
        </Reveal>

        <StaggerContainer>
          {approachSteps.map((step, index) => (
            <StaggerItem key={step.title} className="border-t border-line pt-5">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/80 text-[11px] font-semibold text-accent">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[19px] font-semibold leading-[1.4] text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.75] text-fg-muted">
                    {step.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
