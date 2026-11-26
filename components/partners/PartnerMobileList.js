import { ArrowUpRight } from "lucide-react";
import PartnerPortrait from "./PartnerPortrait";

// Phones: full-colour cards stacked vertically; tapping one opens the profile.
export default function PartnerMobileList({ partners, onOpenProfile }) {
  return (
    <ul className="mx-auto flex max-w-md flex-col gap-5 md:hidden">
      {partners.map((partner, index) => (
        <li key={partner.id}>
          <button
            type="button"
            onClick={() => onOpenProfile(index)}
            aria-label={`View profile of ${partner.name}`}
            className="focus-ring group relative block aspect-[4/5] w-full overflow-hidden rounded-card bg-surface-alt text-left shadow-card"
          >
            <PartnerPortrait
              src={partner.image}
              name={partner.name}
              position={partner.imagePosition}
              alt=""
              sizes="(max-width: 767px) min(100vw, 28rem), 0px"
              className="transition-transform duration-500 ease-out group-active:scale-[1.02] motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-overlay/95 via-overlay/60 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 tone-inverse">
              <div className="min-w-0">
                <p className="font-heading text-2xl leading-[1.05]">{partner.name}</p>
                {partner.qualification && (
                  <p className="mt-1 text-xs text-fg/85">{partner.qualification}</p>
                )}
                {partner.designation && (
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-accent-pale">
                    {partner.designation}
                  </p>
                )}
                {partner.practice && (
                  <p className="mt-0.5 text-xs text-fg/85">{partner.practice}</p>
                )}
              </div>
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-surface/95 text-action"
              >
                <ArrowUpRight size={18} />
              </span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
