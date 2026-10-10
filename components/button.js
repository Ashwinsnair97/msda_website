"use client";

import Link from "next/link";
import { buttonSizeClasses, buttonVariantClasses } from "./buttonStyles";

const validVariants = Object.keys(buttonVariantClasses);
const validSizes = Object.keys(buttonSizeClasses);

export default function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  children,
  icon,
  iconPosition = "end",
  iconOnly = false,
  fullWidth = false,
  disabled = false,
  loading = false,
  hoverColor,
  onClick,
  className = "",
  style,
  "aria-label": ariaLabel,
  ...props
}) {
  if (!validVariants.includes(variant)) {
    throw new Error(`Invalid button variant "${variant}".`);
  }
  if (!validSizes.includes(size)) {
    throw new Error(`Invalid button size "${size}".`);
  }
  if (iconPosition !== "start" && iconPosition !== "end") {
    throw new Error(`Invalid button icon position "${iconPosition}".`);
  }
  if (iconOnly && !ariaLabel) {
    throw new Error("Icon-only buttons require an aria-label.");
  }

  const unavailable = disabled || loading;
  const buttonStyle =
    hoverColor === undefined
      ? style
      : { ...style, "--button-hover-color": hoverColor };
  const classes = [
    "button",
    buttonVariantClasses[variant],
    buttonSizeClasses[size],
    iconOnly && "button--icon-only",
    fullWidth && "button--full-width",
    unavailable && "button--unavailable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <span className="button__spinner" aria-hidden="true" />}
      {iconOnly ? (
        icon ? (
          <span className="button__icon" aria-hidden="true">{icon}</span>
        ) : (
          <span className="button__icon" aria-hidden="true">{children}</span>
        )
      ) : (
        <>
          {icon && iconPosition === "start" && (
            <span className="button__icon" aria-hidden="true">{icon}</span>
          )}
          <span className="button__label">{children}</span>
          {icon && iconPosition === "end" && (
            <span className="button__icon" aria-hidden="true">{icon}</span>
          )}
        </>
      )}
    </>
  );

  if (href !== undefined) {
    const LinkElement = unavailable ? "a" : Link;

    return (
      <LinkElement
        {...props}
        href={unavailable ? undefined : href}
        className={classes}
        style={buttonStyle}
        aria-label={ariaLabel}
        aria-disabled={unavailable || undefined}
        aria-busy={loading || undefined}
        tabIndex={unavailable ? -1 : props.tabIndex}
        onClick={(event) => {
          if (unavailable) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
      >
        {content}
      </LinkElement>
    );
  }

  return (
    <button
      {...props}
      type={type}
      className={classes}
      style={buttonStyle}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      disabled={unavailable}
      onClick={onClick}
    >
      {content}
    </button>
  );
}