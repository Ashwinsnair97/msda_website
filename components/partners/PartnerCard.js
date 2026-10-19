import Link from "next/link";
import PartnerPortrait from "./PartnerPortrait";

export default function PartnerCard({
  name,
  designation,
  practice,
  image,
  imagePosition,
  description,
  href,
  variant = "preview",
}) {
  const isDetailed = variant === "detailed";

  return (
    <article>
      <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-[5px] border border-subtle-border bg-white text-center">
        {image ? (
          <PartnerPortrait
            src={image}
            name={name}
            position={imagePosition}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
        ) : (
          <span
            role="img"
            aria-label={`Portrait placeholder for ${name}`}
            className="px-6 text-sm text-secondary-text"
          >
            Approved portrait pending
          </span>
        )}
      </div>
      <h3 className="mb-1.5 mt-5 min-h-[1.75rem] text-[19px] font-semibold leading-[1.35] text-primary">
        {href ? (
          <Link
            href={href}
            className="focus-ring transition-colors hover:text-accent [--focus-ring-offset:2px]"
          >
            {name}
          </Link>
        ) : (
          name
        )}
      </h3>
      <div className="min-h-12 text-sm leading-[1.5] text-secondary-text">
        <p>{designation}</p>
        {practice && <p>{practice}</p>}
      </div>
      {isDetailed && description && (
        <p className="mt-5 text-[0.9375rem] leading-[1.7] text-secondary-text">
          {description}
        </p>
      )}
    </article>
  );
}
