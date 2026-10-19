// Shared easing/duration so the card, track, text and backdrop move as one.
// Approximates the critically-damped spring the carousel used before.
export const EASE =
  "duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0";

// Entrance choreography: elements read their stagger from --intro-delay, which is
// only set while the intro plays, so later interactions respond without delay.
export const INTRO_DELAY =
  "[transition-delay:var(--intro-delay,0ms)] motion-reduce:[transition-delay:0ms]";

export const INTRO_DURATION_MS = 1400;
export const CARD_STAGGER_MS = 70;

export function introDelayStyle(isIntroPlaying, ms) {
  return isIntroPlaying ? { "--intro-delay": `${ms}ms` } : undefined;
}
