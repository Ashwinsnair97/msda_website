"use client";

import { ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { clientSegments } from "@/data/clientSegments";
import useIsScrolled from "@/lib/useIsScrolled";

const TAB_WIDTH = "2.75rem";

// A tab pinned to the right edge that slides open into the client-segment
// list. It stays off-screen over the hero and eases in once the navbar
// compacts, using the same scroll signal.
export default function WhoWeServeRibbon() {
  const isScrolled = useIsScrolled();
  const [isOpen, setIsOpen] = useState(false);
  const ribbonRef = useRef(null);

  // Scrolling back to the hero hides the ribbon, so close it too; otherwise
  // it would slide back in already open.
  if (!isScrolled && isOpen) {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const handlePointerDown = (event) => {
      if (!ribbonRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const transform = !isScrolled
    ? "translateX(100%)"
    : isOpen
      ? "translateX(0)"
      : `translateX(calc(100% - ${TAB_WIDTH}))`;

  return (
    <aside
      ref={ribbonRef}
      aria-label="Who we serve"
      inert={!isScrolled}
      style={{ transform }}
      className={`fixed bottom-6 right-0 z-40 flex items-end will-change-transform transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="who-we-serve-panel"
        style={{ width: TAB_WIDTH }}
        className="focus-ring flex flex-none cursor-pointer flex-col items-center gap-3 rounded-l-[5px] bg-primary py-5 text-white shadow-[0_10px_24px_rgba(16,27,53,0.22)] transition-colors hover:bg-[var(--button-primary-hover)]"
      >
        <ChevronLeft
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
        />
        <span className="rotate-180 text-xs font-semibold uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
          Who we serve
        </span>
      </button>

      <div
        id="who-we-serve-panel"
        inert={!isOpen}
        className="flex max-h-[calc(100dvh-8rem)] w-[min(22rem,calc(100vw-2.75rem))] flex-col rounded-tl-[5px] bg-white p-6 shadow-[0_18px_38px_rgba(16,27,53,0.2)]"
      >
        <Eyebrow className="mb-3">Who we serve</Eyebrow>
        <p className="font-heading text-2xl leading-[1.15] text-primary">
          Expertise for diverse business needs.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-secondary-text">
          Our multidisciplinary capabilities support organisations and
          individuals across a range of sectors and business needs.
        </p>
        {/* Only the list scrolls when the screen is too short for it. */}
        <ul className="-mr-3 mt-5 min-h-0 overflow-y-auto pr-3">
          {clientSegments.map((segment) => (
            <li
              key={segment}
              className="border-t border-subtle-border py-3 text-[15px] leading-relaxed text-primary"
            >
              {segment}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
