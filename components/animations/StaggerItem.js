import { ANIMATIONS_ENABLED } from "@/config/animations";
import { MotionStaggerItem } from "./MotionReveal";

// One entry in a StaggerContainer. It must sit inside one; it has no viewport
// trigger of its own (use <Reveal> for standalone elements).
// Animation options: duration, distance. DOM attributes pass through.
export default function StaggerItem({
  as: Tag = "div",
  duration,
  distance,
  children,
  ...attributes
}) {
  if (!ANIMATIONS_ENABLED) {
    return <Tag {...attributes}>{children}</Tag>;
  }

  return (
    <MotionStaggerItem as={Tag} duration={duration} distance={distance} {...attributes}>
      {children}
    </MotionStaggerItem>
  );
}
