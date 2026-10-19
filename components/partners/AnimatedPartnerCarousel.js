"use client";

import { useEffect, useRef, useState } from "react";
import CarouselControls from "./CarouselControls";
import PartnerMobileList from "./PartnerMobileList";
import PartnerProfileModal from "./PartnerProfileModal";
import PartnerSlide from "./PartnerSlide";
import { CARD_STAGGER_MS, EASE, INTRO_DURATION_MS } from "./carouselMotion";

// Every card left of the active one is inactive, so the track offset is
// purely a function of the index and the CSS sizes below — no measuring.
const TRACK_VARS =
  "[--card:clamp(11rem,22vw,17rem)] [--card-active:clamp(16.5rem,33vw,25.5rem)] [--gap:1.25rem] sm:[--gap:2rem]";

export default function AnimatedPartnerCarousel({ partners }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isIntroPlaying, setIsIntroPlaying] = useState(false);
  const carouselRef = useRef(null);

  // Play the entrance once, the first time the carousel scrolls into view.
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setHasEntered(true);
        setIsIntroPlaying(true);
        timeoutId = setTimeout(() => setIsIntroPlaying(false), INTRO_DURATION_MS);
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const activePartner = partners[activeIndex];

  const step = (direction) => {
    setActiveIndex((currentIndex) =>
      Math.max(0, Math.min(partners.length - 1, currentIndex + direction)),
    );
  };

  const openProfile = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  if (!activePartner) {
    return null;
  }

  return (
    <div>
      <PartnerMobileList partners={partners} onOpenProfile={openProfile} />

      {/* Tablet and up: the animated carousel. */}
      <div ref={carouselRef} className="hidden md:block">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Partner portraits"
          className="flex h-[clamp(26rem,calc(44vw+4rem),40rem)] items-center overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            className={`relative flex min-w-max items-center gap-[var(--gap)] transition-transform will-change-transform ${EASE} ${TRACK_VARS}`}
            style={{
              transform: `translateX(calc(${activeIndex} * -1 * (var(--card) + var(--gap))))`,
            }}
          >
            {partners.map((partner, index) => (
              <PartnerSlide
                key={partner.id}
                partner={partner}
                isActive={index === activeIndex}
                hasEntered={hasEntered}
                isIntroPlaying={isIntroPlaying}
                introDelayMs={index * CARD_STAGGER_MS}
                onSelect={() => setActiveIndex(index)}
                onOpenProfile={() => openProfile(index)}
              />
            ))}
          </div>
        </div>

        <CarouselControls
          partners={partners}
          activeIndex={activeIndex}
          hasEntered={hasEntered}
          isIntroPlaying={isIntroPlaying}
          onSelect={setActiveIndex}
          onStep={step}
        />
      </div>

      {isModalOpen && (
        <PartnerProfileModal
          partner={activePartner}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
