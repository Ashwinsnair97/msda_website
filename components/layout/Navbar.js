"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import ContactTrigger from "./ContactTrigger";
import useIsScrolled from "@/lib/useIsScrolled";

// Solid rather than blurred glass: a fixed backdrop blur re-renders on every
// scroll frame and was costing noticeable FPS.
const navSurface = "bg-surface-page";

function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// The current page's link keeps its underline, drawn in the accent colour.
function NavLink({ href, onClick, isActive, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className="group flex flex-col gap-0.5 whitespace-nowrap transition-colors hover:text-accent"
    >
      {children}
      <span
        className={`block h-0.5 transition-all duration-300 ${
          isActive ? "w-full bg-accent" : "w-0 bg-current group-hover:w-full"
        }`}
      />
    </Link>
  );
}

function MenuToggle({ isOpen, onToggle }) {
  const bar = "absolute left-2 right-2 h-0.5 bg-current transition-all duration-500";

  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={onToggle}
      className="relative flex h-10 w-10 items-center justify-center md:hidden"
    >
      <span className={`${bar} ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-3"}`} />
      <span className={`${bar} top-1/2 -translate-y-1/2 ${isOpen ? "opacity-0" : "opacity-100"}`} />
      <span className={`${bar} ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-3"}`} />
    </button>
  );
}

export default function Navbar() {
  const isScrolled = useIsScrolled();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full font-body text-fg">
      <nav
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? `${navSurface} py-2 shadow-md md:py-3`
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="site-container flex items-center justify-between gap-4">
          {/* The logo stretches to the row height, and its negative margins
              cancel the nav's vertical padding so it fills (almost) the whole
              bar and shrinks with it on scroll. The image is `fill`, so it adds
              no intrinsic height of its own. */}
          <Link
            href="/"
            aria-label={site.navBrand}
            className={`relative flex-1 self-stretch transition-all duration-500 ${
              isScrolled ? "-my-0 md:-my-1" : "-my-1 md:-my-2"
            }`}
          >
            {/* Inset 6% top and bottom: the logo renders at 88% of the
                available height in both states. */}
            <span className="absolute inset-x-0 inset-y-[6%]">
              <Image
                src="/msda_logo.png"
                alt={site.navBrand}
                fill
                sizes="(min-width: 768px) 320px, 220px"
                loading="eager"
                fetchPriority="high"
                className="object-contain object-left"
              />
            </span>
          </Link>

          <div className="hidden items-center gap-4 font-semibold md:flex lg:gap-8">
            {site.navigation.map((link) => (
              <NavLink key={link.href} href={link.href} isActive={isActivePath(pathname, link.href)}>
                {link.label}
              </NavLink>
            ))}
            <ContactTrigger variant="nav-cta" size="md" icon="→" align="end">
              Contact us
            </ContactTrigger>
          </div>

          <MenuToggle isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`max-h-0 overflow-hidden text-sm font-medium opacity-0 transition-[max-height,opacity] duration-500 ease-in-out md:hidden ${navSurface} ${
          isScrolled ? "shadow-md" : ""
        } ${isMenuOpen ? "max-h-20 opacity-100" : ""}`}
      >
        <div className="overflow-x-auto">
          <div className="flex w-max min-w-full items-center justify-center gap-5 px-4 py-2">
            {site.navigation.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                isActive={isActivePath(pathname, link.href)}
              >
                {link.label}
              </NavLink>
            ))}
            <ContactTrigger variant="nav-cta" size="sm" icon="→">
              Contact us
            </ContactTrigger>
          </div>
        </div>
      </div>
    </header>
  );
}
