"use client";

// Motion-powered implementations behind Reveal, StaggerContainer and
// StaggerItem. Pages should import those wrappers instead: when
// ANIMATIONS_ENABLED is false they never render these components, so no
// Motion component mounts and no viewport observers are created.
//
// LazyMotion + `m` with the domAnimation feature set (no drag/layout
// features) keeps Motion's footprint small.

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { REVEAL } from "@/config/animations";

// Rendered on every animated element. globals.css forces these visible
// for reduced-motion users and when JavaScript is unavailable.
const REVEAL_ATTR = { "data-reveal": "" };

function riseVariants(distance) {
  return {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
  };
}

function viewportOptions(once) {
  return { once, margin: REVEAL.viewportMargin };
}

export function MotionReveal({
  as = "div",
  delay = 0,
  duration = REVEAL.duration,
  distance = REVEAL.distance,
  once = REVEAL.once,
  children,
  ...attributes
}) {
  const reduceMotion = useReducedMotion();
  const Component = m[as];

  return (
    <LazyMotion features={domAnimation}>
      <Component
        {...REVEAL_ATTR}
        {...attributes}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions(once)}
        variants={riseVariants(reduceMotion ? 0 : distance)}
        transition={
          reduceMotion ? { duration: 0 } : { duration, delay, ease: REVEAL.ease }
        }
      >
        {children}
      </Component>
    </LazyMotion>
  );
}

export function MotionStaggerContainer({
  as = "div",
  delay = 0,
  stagger = REVEAL.stagger,
  once = REVEAL.once,
  children,
  ...attributes
}) {
  const reduceMotion = useReducedMotion();
  const Component = m[as];

  return (
    <LazyMotion features={domAnimation}>
      <Component
        {...attributes}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions(once)}
        variants={{
          hidden: {},
          visible: {
            transition: reduceMotion
              ? {}
              : { delayChildren: delay, staggerChildren: stagger },
          },
        }}
      >
        {children}
      </Component>
    </LazyMotion>
  );
}

// Takes its "hidden" → "visible" cue from the nearest StaggerContainer.
export function MotionStaggerItem({
  as = "div",
  duration = REVEAL.duration,
  distance = REVEAL.distance,
  children,
  ...attributes
}) {
  const reduceMotion = useReducedMotion();
  const Component = m[as];

  return (
    <LazyMotion features={domAnimation}>
      <Component
        {...REVEAL_ATTR}
        {...attributes}
        variants={riseVariants(reduceMotion ? 0 : distance)}
        transition={
          reduceMotion ? { duration: 0 } : { duration, ease: REVEAL.ease }
        }
      >
        {children}
      </Component>
    </LazyMotion>
  );
}
