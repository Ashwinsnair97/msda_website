import { Eyebrow } from "./SectionHeader";

// Opening section for inner pages (About, Services). `children` renders below
// the intro, e.g. a tagline or call-to-action buttons.
export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="border-b border-subtle-border bg-main-background pb-16 pt-28 lg:pb-[72px] lg:pt-32">
      <div className="site-container">
        <div className="max-w-[58rem]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[56rem] font-heading text-[length:var(--text-page-heading)] font-medium leading-[1.05] tracking-tight text-primary">
            {title}
          </h1>
          <p className="mt-6 max-w-[49rem] text-[17px] leading-[1.7] text-secondary-text">
            {intro}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
