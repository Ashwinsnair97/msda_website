import Image from "next/image";
import Link from "next/link";

export default function PartnerCard({
  name,
  designation,
  practice,
  image,
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
      <h3 className={`mt-5 font-semibold text-primary ${isDetailed ? "text-xl" : "text-lg"}`}>
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
      <p className="mt-1 text-sm text-secondary-text">{designation}</p>
      {practice && <p className="text-sm text-secondary-text">{practice}</p>}
      {isDetailed && description && (
        <p className="mt-4 text-base leading-7 text-secondary-text">
          {description}
        </p>
      )}
    </article>
  );
}
