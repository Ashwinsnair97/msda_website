// Typography shared by every section intro. `tone` picks colours for light
// (ivory/white) or dark (midnight navy) section backgrounds.

const eyebrowTones = {
  light: "text-accent",
  dark: "text-accent-light",
};

const headingTones = {
  light: "text-primary",
  dark: "text-white",
};

const introTones = {
  light: "text-secondary-text",
  dark: "text-on-dark-muted",
};

export function Eyebrow({ tone = "light", className = "", children }) {
  return (
    <p
      className={`text-[length:var(--text-label)] font-semibold uppercase tracking-[0.2em] ${eyebrowTones[tone]} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  as: Heading = "h2",
  tone = "light",
  className = "",
  children,
}) {
  return (
    <Heading
      className={`font-heading text-[length:var(--text-section-heading)] font-medium leading-tight tracking-tight ${headingTones[tone]} ${className}`}
    >
      {children}
    </Heading>
  );
}

export function SectionIntro({ tone = "light", className = "", children }) {
  return (
    <p className={`mt-4 text-base leading-[1.7] ${introTones[tone]} ${className}`}>
      {children}
    </p>
  );
}

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "light",
  className = "",
  titleClassName = "",
  introClassName = "",
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <Eyebrow tone={tone} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <SectionHeading tone={tone} className={titleClassName}>
        {title}
      </SectionHeading>
      {intro && (
        <SectionIntro tone={tone} className={introClassName}>
          {intro}
        </SectionIntro>
      )}
    </div>
  );
}
