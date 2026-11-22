import Section from "./Section";
import { Eyebrow } from "./SectionHeader";

// Opening section for inner pages (About, Services). `children` renders below
// the intro, e.g. a tagline or call-to-action buttons.
export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <Section tone="page" className="border-b border-line pb-16 pt-28 lg:pb-[72px] lg:pt-32">
      <div className="site-container">
        <div className="max-w-[58rem]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[56rem] font-heading text-page-heading font-medium leading-[1.05] tracking-tight text-fg">
            {title}
          </h1>
          <p className="mt-6 max-w-[49rem] text-[17px] leading-[1.7] text-fg-muted">
            {intro}
          </p>
          {children}
        </div>
      </div>
    </Section>
  );
}
