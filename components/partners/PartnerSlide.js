import { ArrowUpRight } from "lucide-react";
import PartnerPortrait from "./PartnerPortrait";
import { EASE, INTRO_DELAY, introDelayStyle } from "./carouselMotion";

export default function PartnerSlide({
  partner,
  isActive,
  hasEntered,
  isIntroPlaying,
  introDelayMs,
  onSelect,
  onOpenProfile,
}) {
  const isColour = isActive && hasEntered;
  const [summary] = partner.bio ?? [];

  return (
    <div
      style={introDelayStyle(isIntroPlaying, introDelayMs)}
      className={`group relative aspect-[3/4] flex-none overflow-hidden rounded-[5px] bg-alternate-background text-left transition-[width,box-shadow,opacity,translate] ${EASE} ${INTRO_DELAY} ${
        hasEntered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${
        isActive
          ? "w-[var(--card-active)] shadow-[0_18px_38px_rgba(16,27,53,0.2)]"
          : "w-[var(--card)] shadow-[0_0_0_rgba(16,27,53,0)]"
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={isActive}
        aria-label={`${partner.name}${isActive ? ", selected" : ""}`}
        className="focus-ring absolute inset-0 h-full w-full [--focus-ring-offset:-3px]"
      >
        <PartnerPortrait
          src={partner.image}
          name={partner.name}
          position={partner.imagePosition}
          sizes="(max-width: 800px) 264px, (max-width: 1236px) 33vw, 408px"
          className={`transition-[filter] ease-in-out motion-reduce:duration-0 ${INTRO_DELAY} ${
            isIntroPlaying ? "duration-[900ms]" : "duration-500"
          } ${isColour ? "grayscale-0" : "grayscale group-hover:grayscale-[65%]"}`}
          style={introDelayStyle(isIntroPlaying, 350)}
        />
      </button>

      {/* Text stack is pinned to the bottom; the backdrop lives inside it,
          so the gradient only ever covers the text and grows with it. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-3 pb-5 text-white sm:px-4">
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 -top-16 bottom-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent transition-opacity ${EASE} ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`relative origin-bottom-left transition-transform will-change-transform ${EASE} ${
            isActive ? "scale-100" : "scale-[0.667]"
          }`}
        >
          <p className="line-clamp-2 font-heading text-[clamp(1rem,2.2vw,1.5rem)] leading-[1.05]">
            {isActive ? partner.name : (partner.short_name ?? partner.name)}
          </p>
          {partner.designation && (
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-accent-pale sm:text-xs">
              {partner.designation}
            </p>
          )}
          {partner.practice && (
            <p className="mt-0.5 line-clamp-1 text-[10px] text-white/85 sm:text-xs">
              {partner.practice}
            </p>
          )}
        </div>

        {summary && (
          // 0fr → 1fr grid rows animate the panel's height, which pushes
          // the name up smoothly instead of jumping to a fixed offset.
          <div
            inert={!isActive}
            className={`relative grid transition-[grid-template-rows,opacity] ${EASE} ${
              isActive
                ? "pointer-events-auto grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <p className="pt-2 line-clamp-3 text-[10px] leading-[1.4] text-white/90 sm:text-xs">
                {summary}
              </p>
              <button
                type="button"
                onClick={onOpenProfile}
                className="focus-ring mb-1 mt-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white underline decoration-accent-soft underline-offset-4 [--focus-ring-color:var(--white)] [--focus-ring-offset:2px] sm:text-xs"
              >
                Know more
                <ArrowUpRight size={13} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
