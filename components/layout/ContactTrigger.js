"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/ui/Button";
import ContactPopover from "./ContactPopover";

const GAP = 12;
const VIEWPORT_MARGIN = 16;

// A button that toggles the contact popover (email and phone) beside itself. With a
// `variant` it renders the shared <Button>; without one, a plain <button>
// styled by `className` (e.g. a footer text link).
//
// The popover is portalled to <body> with fixed positioning so parents with
// `overflow: hidden` (the home hero) can't clip it and dark bands
// (.tone-inverse) don't recolour it. It opens below the trigger, or above
// when there isn't room below, aligned to the trigger's `align` edge. It sits
// above the fixed navbar (z-50) so the navbar's own trigger isn't covered.
//
//   <ContactTrigger variant="primary" icon="→">Contact us</ContactTrigger>
//   <ContactTrigger className="…link styles…">{site.email}</ContactTrigger>
export default function ContactTrigger({
  variant,
  size,
  icon,
  align = "start",
  className = "",
  children,
}) {
  const id = useId();
  const triggerRef = useRef(null);
  const floatRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useLayoutEffect(() => {
    if (!isOpen) return;

    const place = () => {
      const trigger = triggerRef.current;
      const float = floatRef.current;
      if (!trigger || !float) return;

      const rect = trigger.getBoundingClientRect();
      const { offsetWidth: width, offsetHeight: height } = float;
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight;

      const preferredLeft = align === "end" ? rect.right - width : rect.left;
      const left = Math.min(
        Math.max(preferredLeft, VIEWPORT_MARGIN),
        viewportWidth - width - VIEWPORT_MARGIN,
      );

      const below = rect.bottom + GAP;
      const above = rect.top - GAP - height;
      const fitsBelow = below + height <= viewportHeight - VIEWPORT_MARGIN;
      const top = !fitsBelow && above >= VIEWPORT_MARGIN ? above : below;

      float.style.left = `${left}px`;
      float.style.top = `${top}px`;
    };

    place();
    window.addEventListener("scroll", place, { passive: true, capture: true });
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place, { capture: true });
      window.removeEventListener("resize", place);
    };
  }, [isOpen, align]);

  const triggerProps = {
    ref: triggerRef,
    type: "button",
    onClick: () => setIsOpen((open) => !open),
    "aria-haspopup": "dialog",
    "aria-expanded": isOpen,
    "aria-controls": isOpen ? id : undefined,
    className,
  };

  return (
    <>
      {variant ? (
        <Button variant={variant} size={size} icon={icon} {...triggerProps}>
          {children}
        </Button>
      ) : (
        <button {...triggerProps}>{children}</button>
      )}

      {isOpen &&
        createPortal(
          <div ref={floatRef} className="fixed left-0 top-0 z-[60]">
            <ContactPopover id={id} triggerRef={triggerRef} onClose={close} />
          </div>,
          document.body,
        )}
    </>
  );
}
