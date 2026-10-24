"use client";

import { useEffect, useState } from "react";

// True once the page has scrolled past `threshold` px. Shared by the navbar
// (which compacts) and anything that should appear in step with it.
export default function useIsScrolled(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
