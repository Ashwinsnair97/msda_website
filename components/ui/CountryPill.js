import Image from "next/image";

// Compact pill: circular flag on the left, country name on the right.
//
//   <CountryPill name="Country name" flag="/flags/xx.svg" />
//
// The visible name is what identifies the country, so the flag is decorative
// (empty alt). Screen readers then hear each country once, not
// "Flag of X, X".
export default function CountryPill({ name, flag, className = "" }) {
  return (
    <span
      className={`inline-flex h-[38px] shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface pl-2 pr-3.5 text-sm font-medium text-fg ${className}`}
    >
      <Image
        src={flag}
        alt=""
        width={22}
        height={22}
        className="size-[22px] shrink-0 rounded-full object-cover ring-1 ring-line"
      />
      {name}
    </span>
  );
}
