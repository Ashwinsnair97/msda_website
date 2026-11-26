// Opens Google Maps searching for the address. To pin an exact place, replace
// an office's `directionsHref` with its Google Maps share link.
const mapsSearchHref = (addressLines) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLines.join(" "))}`;

const office = ({ addressLines, ...rest }) => ({
  ...rest,
  addressLines,
  directionsHref: mapsSearchHref(addressLines),
});

export const site = {
  name: "MSDA & Co",
  navBrand: "MSDA & Co",
  descriptor: "Chartered Accountants",
  email: "contact@msda.co",
  phone: "+91 91806 13396",
  copyrightYear: 2026,
  positioningStatement: "Professional expertise. Practical solutions.",
  positioningDescription:
    "Supporting businesses and individuals with accounting, audit, taxation and advisory services.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
  ],
  footerNavigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
  ],
  callbackHref: "/callback",
};

export const mailtoHref = `mailto:${site.email}`;
export const telHref = `tel:${site.phone.replace(/\s/g, "")}`;

// Listed row by row: the footer shows them in two columns from tablet width up.
// Each entry in `addressLines` is one line of the printed address.
export const offices = [
  office({
    id: "bengaluru-basavagudi",
    name: "Bengaluru – Basavagudi",
    addressLines: [
      "Indiqube South Mile, Vijayarangam Layout, Basavagudi,",
      "Bengaluru, Karnataka – 560004",
    ],
  }),
  office({
    id: "bengaluru-basaveshwar-nagar",
    name: "Bengaluru – Basaveshwar Nagar",
    addressLines: [
      "No. 19, Ground Floor, 1st ‘C’ Cross, SN Layout, 3rd Stage, 4th Block,",
      "Basaveshwar Nagar, Bengaluru, Karnataka – 560079",
    ],
  }),
  office({
    id: "raipur",
    name: "Raipur",
    addressLines: [
      "#M-26, Veena Chambers, High Street Rama World, Behind MGM Eye Hospital,",
      "Vidhana Sabha Road, Raipur, Chhattisgarh – 492001",
    ],
  }),
  office({
    id: "hyderabad",
    name: "Hyderabad",
    addressLines: [
      "4th Floor, Jana Arcade, 7-1-214/4, Dharam Karan Rd,",
      "Balkampet, Hyderabad, Telangana 500016",
    ],
  }),
];
