"use client";

import { X } from "lucide-react";
import { useEffect, useEffectEvent, useRef } from "react";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { openingApplyHref, openingLocation, vacancyLabel } from "@/data/careers";
import { formatIndex } from "@/lib/format";

const detailLabel = "text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-muted";

// Full description of one opening, opened from OpeningsList. Same behaviour
// as PartnerProfileModal: locks page scroll, focuses the close button, closes
// on Escape or a backdrop click and returns focus to the listing.
export default function JobDetailModal({ opening, index, onClose }) {
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

  const titleId = `job-${opening.id}-title`;

  return (
    <div
      className="fixed inset-0 z-50 flex overflow-y-auto overscroll-contain bg-overlay/70 p-4 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none starting:opacity-0 sm:p-8"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative m-auto flex max-h-[calc(100dvh-2rem)] w-full max-w-[44rem] flex-col overflow-hidden rounded-lg bg-surface shadow-modal transition-[opacity,translate,scale] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none starting:translate-y-4 starting:scale-[0.98] starting:opacity-0 sm:max-h-[calc(100dvh-4rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="focus-ring absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-page text-fg transition-colors [--focus-ring-offset:2px] hover:bg-action hover:text-on-action"
          aria-label="Close position details"
        >
          <X size={18} />
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-8 pt-7 sm:px-10 sm:pt-10">
          <Eyebrow>Opening {formatIndex(index)}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 pr-12 font-heading text-[clamp(1.75rem,3.5vw,2.25rem)] leading-[1.08] tracking-tight text-fg"
          >
            {opening.title}
          </h2>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fg-muted">
            <span className="font-semibold uppercase tracking-[0.1em] text-accent">
              {vacancyLabel(opening.vacancies)}
            </span>
            {[opening.experience, openingLocation(opening)].filter(Boolean).map((item) => (
              <span key={item} className="flex items-center gap-3">
                <span aria-hidden="true">·</span>
                {item}
              </span>
            ))}
          </p>

          <div className="mt-6 h-px w-12 bg-accent-soft" aria-hidden="true" />

          {opening.summary && (
            <p className="mt-6 text-[0.975rem] leading-[1.75] text-fg-copy">{opening.summary}</p>
          )}

          {opening.responsibilities?.length > 0 && (
            <section className="mt-8">
              <h3 className="text-base font-semibold text-fg">Responsibilities</h3>
              <ul className="mt-3 space-y-2.5">
                {opening.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-[1.65] text-fg-copy">
                    <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-8">
            <h3 className="text-base font-semibold text-fg">Requirements</h3>
            <dl className="mt-3 grid gap-x-8 gap-y-5 rounded-card border border-line bg-surface-page p-5 sm:grid-cols-2">
              <div>
                <dt className={detailLabel}>Education</dt>
                <dd className="mt-1.5 text-[15px] font-medium text-fg-copy">{opening.education}</dd>
              </div>
              <div>
                <dt className={detailLabel}>Experience</dt>
                <dd className="mt-1.5 text-[15px] font-medium text-fg-copy">{opening.experience}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className={detailLabel}>Key skills</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {opening.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] font-medium text-fg-copy"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <div className="flex flex-col gap-3 border-t border-line bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="text-sm leading-6 text-fg-muted">
            You&apos;ll be asked for your contact details and latest CV.
          </p>
          <Button href={openingApplyHref(opening)} icon="→" className="w-full sm:w-auto">
            Apply for this role
          </Button>
        </div>
      </div>
    </div>
  );
}
