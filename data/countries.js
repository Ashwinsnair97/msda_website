// Countries shown in the "Countries We Serve" ribbon on the homepage, in
// display order.
//
// `name`: the country name exactly as it should appear.
// `flag`: path to the flag image under /public. Square (1:1) SVGs work best,
//         since the pill crops the flag to a circle. They live in
//         public/flags/, named by ISO 3166-1 alpha-2 code, and come from the
//         MIT-licensed flag-icons set (github.com/lipis/flag-icons).
//
// While this list is empty the ribbon is not rendered.
export const countries = [
  { name: "Spain", flag: "/flags/es.svg" },
  { name: "UK", flag: "/flags/gb.svg" },
  { name: "US", flag: "/flags/us.svg" },
  { name: "France", flag: "/flags/fr.svg" },
  { name: "Austria", flag: "/flags/at.svg" },
  { name: "Netherlands", flag: "/flags/nl.svg" },
  { name: "Germany", flag: "/flags/de.svg" },
  // Dubai is a city; it shows the flag of the United Arab Emirates.
  { name: "Dubai", flag: "/flags/ae.svg" },
  { name: "Malaysia", flag: "/flags/my.svg" },
  { name: "Singapore", flag: "/flags/sg.svg" },
  { name: "Israel", flag: "/flags/il.svg" },
  { name: "Canada", flag: "/flags/ca.svg" },
  { name: "China", flag: "/flags/cn.svg" },
  { name: "Czech Republic", flag: "/flags/cz.svg" },
];
