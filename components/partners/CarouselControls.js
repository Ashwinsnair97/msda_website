import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatIndex } from "@/lib/format";
import { EASE, INTRO_DELAY, introDelayStyle } from "./carouselMotion";

function StepButton({ label, disabled, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors [--focus-ring-offset:2px] hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary"
    >
      {children}
    </button>
  );
}

// Counter, one progress segment per partner, and previous/next buttons.
export default function CarouselControls({
  partners,
  activeIndex,
  hasEntered,
  isIntroPlaying,
  onSelect,
  onStep,
}) {
  return (
    <div
      style={introDelayStyle(isIntroPlaying, 250)}
      className={`mt-2 flex items-center gap-6 transition-opacity duration-700 ease-out motion-reduce:duration-0 ${INTRO_DELAY} ${
        hasEntered ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex max-w-md flex-1 items-center gap-4">
        <p className="w-7 text-sm font-semibold tabular-nums text-primary" aria-live="polite">
          <span className="sr-only">Partner </span>
          {formatIndex(activeIndex)}
          <span className="sr-only"> of {partners.length}</span>
        </p>

        {/* The active segment widens and fills with the accent. */}
        <div
          style={introDelayStyle(isIntroPlaying, 300)}
          className={`flex flex-1 origin-left items-center gap-1.5 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 ${INTRO_DELAY} ${
            hasEntered ? "scale-x-100" : "scale-x-0"
          }`}
        >
          {partners.map((partner, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={partner.id}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Go to ${partner.name}`}
                aria-current={isActive ? "true" : undefined}
                className={`focus-ring group/seg flex h-6 min-w-0 items-center transition-[flex-grow] [--focus-ring-offset:2px] ${EASE} ${
                  isActive ? "grow-[3]" : "grow"
                }`}
              >
                <span
                  className={`h-[3px] w-full rounded-full transition-colors duration-300 ${
                    isActive ? "bg-accent" : "bg-primary/15 group-hover/seg:bg-primary/40"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <p className="w-7 text-sm font-medium tabular-nums text-secondary-text/70" aria-hidden="true">
          {formatIndex(partners.length - 1)}
        </p>
      </div>

      <div className="ml-auto flex items-center gap-1">
        <StepButton
          label="View previous partner"
          disabled={activeIndex === 0}
          onClick={() => onStep(-1)}
        >
          <ArrowLeft size={18} />
        </StepButton>
        <StepButton
          label="View next partner"
          disabled={activeIndex === partners.length - 1}
          onClick={() => onStep(1)}
        >
          <ArrowRight size={18} />
        </StepButton>
      </div>
    </div>
  );
}
