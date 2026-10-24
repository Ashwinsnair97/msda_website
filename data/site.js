export const site = {
  name: "MSDA & Co",
  navBrand: "MSDA & Co",
  descriptor: "CHARTERED ACCOUNTANTS",
  email: "contact@msda.co",
  copyrightYear: 2026,
  positioningStatement: "Professional expertise. Practical solutions.",
  positioningDescription:
    "Supporting businesses and individuals with accounting, audit, taxation and advisory services.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  footerNavigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
  ],
  callbackHref: "/callback",
};

export const mailtoHref = `mailto:${site.email}`;
