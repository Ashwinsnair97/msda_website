import Image from "next/image";
import Link from "next/link";

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
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
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
            className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
