// Central animation settings for the site's scroll reveals.
//
// MASTER SWITCH: set ANIMATIONS_ENABLED to false to turn off every reveal
// built with <Reveal>, <StaggerContainer> and <StaggerItem>, plus the partner
// carousel's entrance. With it off, the wrappers render plain elements with
// the same classes, so the layout stays identical, content is visible at
// once, and the Motion runtime never mounts.
//
// Interaction feedback (navbar compaction, carousel sliding, modal open,
// Who We Serve panel, button hovers) is functional rather than decorative,
// so it stays independent of this switch. It already honours
// prefers-reduced-motion through `motion-reduce:` utilities.
export const ANIMATIONS_ENABLED = true;

// Shared timing for every reveal. Seconds and pixels.
export const REVEAL = {
  duration: 0.55,
  // Vertical offset content rises from.
  distance: 20,
  // Gap between consecutive items in a StaggerContainer.
  stagger: 0.09,
  // Ease-out curve; matches the partner carousel's easing.
  ease: [0.22, 1, 0.36, 1],
  // Reveal once; scrolling back up does not replay it.
  once: true,
  // Start once the element is 64px into the viewport, not on its first pixel.
  viewportMargin: "0px 0px -64px 0px",
};
