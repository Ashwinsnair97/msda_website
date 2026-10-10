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
    <header className="relative z-50">
      <nav
        className={`fixed left-0 top-0 z-50 w-full font-body transition-all duration-500 ${
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
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? "text-gray-700" : "text-primary"}`}
            >
              <svg className="h-6 w-6 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed right-0 top-0 z-40 h-screen w-full bg-white font-body text-base font-medium text-gray-800 transition-all duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute right-4 top-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex h-full flex-col items-end justify-center gap-16 px-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}

          <Button
            href={`mailto:${site.email}`}
            variant="nav-cta"
            size="md"
            hoverColor="var(--burnt-copper)"
            onClick={() => setIsMenuOpen(false)}
            icon={<span aria-hidden="true">→</span>}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
