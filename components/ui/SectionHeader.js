// Typography shared by every section intro. Colours come from the roles, so
// inside a dark band (<Section tone="inverse">) they switch automatically.

// `as` lets an eyebrow serve as a section's only heading (e.g. as="h2").
export function Eyebrow({ as: Tag = "p", className = "", children, ...props }) {
  return (
    <Tag
      className={`text-label font-semibold uppercase tracking-[0.2em] text-accent ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({ as: Heading = "h2", className = "", children }) {
  return (
    <Heading
      className={`font-heading text-section-heading font-medium leading-tight tracking-tight text-fg ${className}`}
    >
      {children}
    </Heading>
  );
}

export function SectionIntro({ className = "", children }) {
  return (
    <p className={`mt-4 text-base leading-[1.7] text-fg-muted ${className}`}>
      {children}
    </p>
  );
}

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  className = "",
  titleClassName = "",
  introClassName = "",
}) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <SectionHeading className={titleClassName}>{title}</SectionHeading>
      {intro && <SectionIntro className={introClassName}>{intro}</SectionIntro>}
    </div>
  );
}
