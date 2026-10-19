"use client";

import { X } from "lucide-react";
import { useEffect, useEffectEvent, useRef } from "react";
import { Eyebrow } from "@/components/ui/SectionHeader";
import PartnerPortrait from "./PartnerPortrait";

export default function PartnerProfileModal({ partner, onClose }) {
  const closeButtonRef = useRef(null);
  const handleEscape = useEffectEvent((event) => {
    if (event.key === "Escape") {
      onClose();
    }
  });

  useEffect(() => {
    const { body, documentElement } = document;
    const previouslyFocused = document.activeElement;
    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    // Reserve the scrollbar's width so the page doesn't shift behind the modal.
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleEscape);

    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;
      document.removeEventListener("keydown", handleEscape);
      previouslyFocused?.focus?.();
    };
  }, []);

  if (!partner) {
    return null;
  }

  const biography = (partner.bio ?? []).filter((paragraph) => paragraph?.trim());

  return (
    <div
      className="fixed inset-0 z-50 flex overflow-y-auto overscroll-contain bg-primary/70 p-4 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none starting:opacity-0 sm:p-8"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="partner-modal-title"
        className="relative m-auto flex max-h-[calc(100dvh-2rem)] w-full max-w-md flex-col overflow-hidden rounded-lg bg-main-background shadow-[0_28px_80px_rgba(16,27,53,0.28)] transition-[opacity,translate,scale] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none starting:translate-y-4 starting:scale-[0.98] starting:opacity-0 md:grid md:max-h-none md:max-w-[68rem] md:grid-cols-[22rem_minmax(0,1fr)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="focus-ring absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-primary shadow-[0_4px_14px_rgba(16,27,53,0.15)] transition-colors [--focus-ring-offset:2px] hover:bg-primary hover:text-white"
          aria-label="Close profile"
        >
          <X size={18} />
        </button>

        {/* Phones: this wrapper scrolls while the close button above stays put.
            Desktop: `contents` removes the wrapper so the grid lays out the two columns
            directly and nothing scrolls. */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain md:contents">
          {/* Portrait keeps a 3:4 minimum on desktop (matching the carousel cards) so
              profiles open at a consistent size; it stretches only if the text is taller. */}
          <div className="relative h-64 bg-alternate-background sm:h-80 md:h-auto md:min-h-[29.33rem]">
            <PartnerPortrait
              src={partner.image}
              name={partner.name}
              position={partner.imagePosition}
              sizes="(max-width: 767px) 28rem, 22rem"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/45 to-transparent"
            />
          </div>

          <div className="min-w-0 px-6 pb-8 pt-6 sm:px-8 md:px-12 md:py-12">
            <Eyebrow>Leadership profile</Eyebrow>

            <h2
              id="partner-modal-title"
              className="mt-3 pr-12 font-heading text-[clamp(1.75rem,3.5vw,2.25rem)] leading-[1.05] tracking-tight text-primary"
            >
              {partner.name}
            </h2>

            {(partner.designation || partner.practice) && (
              <div className="mt-3 space-y-1">
                {partner.designation && (
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                    {partner.designation}
                  </p>
                )}
                {partner.practice && (
                  <p className="text-sm text-secondary-text">{partner.practice}</p>
                )}
              </div>
            )}

            <div className="mt-6 h-px w-12 bg-accent-soft" aria-hidden="true" />

            <div className="mt-6 space-y-4 text-[0.95rem] leading-[1.75] text-body-text">
              {biography.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
