import { ANIMATIONS_ENABLED } from "@/config/animations";
import { MotionReveal } from "./MotionReveal";

// Fades and lifts its content into place the first time it scrolls into view.
//
//   <Reveal><SectionHeader … /></Reveal>
//   <Reveal as="article" id="audit" delay={0.1} className="…">…</Reveal>
//
// `as` sets the element rendered (default "div"); `className`, `id` and other
// DOM attributes go on it, so the wrapper can be the layout element itself
// rather than an extra node.
// Animation options: delay, duration (seconds), distance (px), once.
// Defaults live in config/animations.js.
//
// Server-component friendly: with animations off it renders a plain element
// and never mounts the client-side Motion code.
export default function Reveal({
  as: Tag = "div",
  delay,
  duration,
  distance,
  once,
  children,
  ...attributes
}) {
  if (!ANIMATIONS_ENABLED) {
    return <Tag {...attributes}>{children}</Tag>;
  }

  return (
    <MotionReveal
      as={Tag}
      delay={delay}
      duration={duration}
      distance={distance}
      once={once}
      {...attributes}
    >
      {children}
    </MotionReveal>
  );
}
