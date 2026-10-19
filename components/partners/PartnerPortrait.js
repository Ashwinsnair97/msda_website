import Image from "next/image";

const DEFAULT_POSITION = "50% 20%";

// Fills its positioned parent with a partner's portrait, cropped to keep the
// face in frame. Pass alt="" when the surrounding control already names them.
export default function PartnerPortrait({
  src,
  name,
  position,
  sizes,
  alt = `Portrait of ${name}`,
  className = "",
  style,
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
      style={{ objectPosition: position || DEFAULT_POSITION, ...style }}
    />
  );
}
