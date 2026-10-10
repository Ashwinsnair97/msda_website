"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./button";
import { site } from "../data/site";

export default function Navbar() {
  const navLinks = site.navigation.filter((link) => !link.href.startsWith("mailto:"));

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={`w-full font-body transition-all duration-500 ${
          isScrolled
            ? "bg-white/20 py-2 shadow-md text-gray-700 backdrop-blur-lg md:py-3"
            : "bg-transparent py-4 text-primary md:py-6"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`flex flex-col items-start font-heading text-xl font-bold tracking-tight sm:text-2xl ${isScrolled ? "text-gray-700" : "text-primary"}`}
            >
              <span>{site.navBrand}</span>
              <span
                aria-hidden={isScrolled}
                className={`block overflow-hidden font-body text-sm font-normal tracking-tight transition-all duration-500 sm:text-base ${
                  isScrolled
                    ? "max-h-0 opacity-0 delay-100"
                    : "max-h-8 opacity-100 delay-0"
                }`}
              >
                {site.descriptor.toLowerCase()}
              </span>
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex lg:gap-8">
            <div className="flex items-center gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex flex-col gap-0.5 transition-colors hover:text-accent ${isScrolled ? "text-gray-700" : "text-primary"}`}
                >
                  {link.label}
                  <div
                    className={`h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-accent ${isScrolled ? "bg-gray-700" : "bg-primary"}`}
                  />
                </Link>
              ))}
            </div>

            <Button
              href={`mailto:${site.email}`}
              variant="nav-cta"
              size="md"
              hoverColor="var(--burnt-copper)"
              icon={<span aria-hidden="true">→</span>}
            >
              Contact Us
            </Button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative flex h-10 w-10 items-center justify-center ${isScrolled ? "text-gray-700" : "text-primary"}`}
            >
              <span
                className={`absolute left-2 right-2 h-0.5 bg-current transition-all duration-500 ${
                  isMenuOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-3"
                }`}
              />
              <span
                className={`absolute left-2 right-2 top-1/2 h-0.5 -translate-y-1/2 bg-current transition-all duration-500 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-2 right-2 h-0.5 bg-current transition-all duration-500 ${
                  isMenuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-3"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`max-h-0 overflow-hidden font-body text-sm font-medium opacity-0 transition-[max-height,opacity] duration-500 ease-in-out md:hidden ${
          isScrolled
            ? "bg-white/20 text-gray-700 shadow-md backdrop-blur-lg"
            : "bg-white/20 text-primary backdrop-blur-lg"
        } ${
          isMenuOpen ? "max-h-20 opacity-100" : ""
        }`}
      >
        <div className="overflow-x-auto">
          <div className="flex w-max min-w-full items-center justify-center gap-5 px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`group flex cursor-pointer flex-col gap-0.5 whitespace-nowrap transition-colors hover:text-accent ${isScrolled ? "text-gray-700" : "text-primary"}`}
              >
                {link.label}
                <span
                  className={`block h-0.5 w-0 transition-all duration-300 group-hover:w-full group-hover:bg-accent ${isScrolled ? "bg-gray-700" : "bg-primary"}`}
                />
              </Link>
            ))}

            <Button
              href={`mailto:${site.email}`}
              variant="nav-cta"
              size="sm"
              hoverColor="var(--burnt-copper)"
              onClick={() => setIsMenuOpen(false)}
              icon={<span aria-hidden="true">→</span>}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
