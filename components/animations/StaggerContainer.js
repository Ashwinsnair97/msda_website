import { ANIMATIONS_ENABLED } from "@/config/animations";
import { MotionStaggerContainer } from "./MotionReveal";

// Reveals its StaggerItem children one after another when the group scrolls
// into view.
//
//   <StaggerContainer as="ul" className="grid …">
//     {items.map((item) => (
//       <StaggerItem as="li" key={item.id}>…</StaggerItem>
//     ))}
//   </StaggerContainer>
//
// Render the container as the list/grid element itself and each item as its
// direct child, so no extra wrappers enter the layout.
// Animation options: delay (before the first item), stagger, once.
// Defaults live in config/animations.js.
export default function StaggerContainer({
  as: Tag = "div",
  delay,
  stagger,
  once,
  children,
  ...attributes
}) {
  if (!ANIMATIONS_ENABLED) {
    return <Tag {...attributes}>{children}</Tag>;
  }

  return (
    <MotionStaggerContainer
      as={Tag}
      delay={delay}
      stagger={stagger}
      once={once}
      {...attributes}
    >
      {children}
    </MotionStaggerContainer>
  );
}
