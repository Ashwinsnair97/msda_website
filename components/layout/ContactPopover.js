"use client";

import { Check, Copy, Mail, Phone, X } from "lucide-react";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { mailtoHref, site, telHref } from "@/data/site";

const iconButton =
  "focus-ring inline-flex h-9 w-9 flex-none items-center justify-center rounded-full text-fg transition-colors [--focus-ring-offset:2px] hover:bg-action hover:text-on-action";

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API is unavailable on insecure origins and some older
    // browsers; fall back to a hidden textarea.
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  }
}

// One contact detail: label and value on the left, copy and open actions on
// the right.
function ContactRow({
  label,
  value,
  href,
  openLabel,
  OpenIcon,
  isCopied,
  onCopy,
  onOpen,
  copyButtonRef,
}) {
  return (
    <li className="flex items-center gap-1 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-fg-muted">
          {label}
        </p>
        <p className="mt-0.5 select-all truncate text-base font-semibold">{value}</p>
      </div>
      <button
        ref={copyButtonRef}
        type="button"
        onClick={onCopy}
        className={iconButton}
        aria-label={isCopied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
        title={isCopied ? "Copied" : "Copy"}
      >
        {isCopied ? <Check size={17} className="text-accent" /> : <Copy size={17} />}
      </button>
      <a
        href={href}
        onClick={onOpen}
        className={iconButton}
        aria-label={openLabel}
        title={openLabel}
      >
        <OpenIcon size={17} />
      </a>
    </li>
  );
}

// Small non-modal popover with the contact email and phone number, each with
// a copy button and a mailto / tel link. The parent positions it (via
// className) next to its trigger and only renders it while open. Clicks on
// the trigger are ignored here so the trigger can toggle it.
export default function ContactPopover({ id, triggerRef, onClose, className = "" }) {
  const popoverRef = useRef(null);
  const copyButtonRef = useRef(null);
  // Which detail was just copied: "email", "phone" or null.
  const [copied, setCopied] = useState(null);

  const handleKeyDown = useEffectEvent((event) => {
    if (event.key === "Escape") {
      onClose();
      triggerRef?.current?.focus();
    }
  });

  const handlePointerDown = useEffectEvent((event) => {
    const target = event.target;
    if (popoverRef.current?.contains(target)) return;
    if (triggerRef?.current?.contains(target)) return;
    onClose();
  });

  useEffect(() => {
    copyButtonRef.current?.focus({ preventScroll: true });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(null), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = (key, text) => async () => {
    if (await copyText(text)) setCopied(key);
  };

  return (
    <div
      ref={popoverRef}
      id={id}
      role="dialog"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`}
      className={`w-[25rem] max-w-[calc(100vw-2rem)] rounded-lg border border-line bg-surface p-5 text-fg shadow-floating transition-[opacity,translate,scale] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none starting:-translate-y-1 starting:scale-[0.98] starting:opacity-0 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id={`${id}-title`} className="font-heading text-2xl leading-tight tracking-tight">
          Get in touch
        </h2>
        <button
          type="button"
          onClick={() => {
            onClose();
            triggerRef?.current?.focus();
          }}
          className={`${iconButton} -mr-2 -mt-1.5 text-fg-muted`}
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
      <p id={`${id}-description`} className="mt-1 text-[0.95rem] text-fg-copy">
        Have a question? Reach our team by email or phone.
      </p>

      <ul className="mt-3 divide-y divide-line">
        <ContactRow
          label="Email"
          value={site.email}
          href={mailtoHref}
          openLabel="Open in your email app"
          OpenIcon={Mail}
          isCopied={copied === "email"}
          onCopy={copy("email", site.email)}
          onOpen={onClose}
          copyButtonRef={copyButtonRef}
        />
        <ContactRow
          label="Phone"
          value={site.phone}
          href={telHref}
          openLabel="Call this number"
          OpenIcon={Phone}
          isCopied={copied === "phone"}
          onCopy={copy("phone", site.phone)}
          onOpen={onClose}
        />
      </ul>

      {/* Announces a successful copy; the check icon is the visual cue. */}
      <p className="sr-only" aria-live="polite">
        {copied === "email" && "Email address copied to clipboard."}
        {copied === "phone" && "Phone number copied to clipboard."}
      </p>
    </div>
  );
}
