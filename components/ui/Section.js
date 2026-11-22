// Page band with a background tone. `inverse` also switches the text, accent,
// border and focus colours for everything inside (see .tone-inverse in
// styles/utilities.css), so children never need a tone prop of their own.
// Spacing stays with the caller via className.

const tones = {
  page: "bg-surface-page",
  surface: "bg-surface",
  alt: "bg-surface-alt",
  inverse: "tone-inverse bg-surface-inverse",
};

export default function Section({
  as: Element = "section",
  tone = "page",
  className = "",
  children,
  ...props
}) {
  if (!(tone in tones)) {
    throw new Error(`Invalid section tone "${tone}".`);
  }

  return (
    <Element className={`${tones[tone]} ${className}`} {...props}>
      {children}
    </Element>
  );
}
