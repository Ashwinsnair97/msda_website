"use client";

import { Check, Copy, Mail, X } from "lucide-react";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { mailtoHref, site } from "@/data/site";

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

// Small non-modal popover with the contact email, a copy button and a mailto
// link. The parent positions it (via className) next to its trigger and only
// renders it while open. Clicks on the trigger are ignored here so the
// trigger can toggle it.
export default function ContactPopover({ id, triggerRef, onClose, className = "" }) {
  const popoverRef = useRef(null);
  const copyButtonRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

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
    if (!isCopied) return;
    const timer = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleCopy = async () => {
    if (await copyText(site.email)) setIsCopied(true);
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
          Write to us
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
        Have a question? Reach our team by email.
      </p>

      <div className="mt-4 flex items-center gap-1 rounded-card border border-line bg-surface-page py-2 pl-4 pr-2">
        <span className="min-w-0 flex-1 select-all truncate text-base font-semibold">
          {site.email}
        </span>
        <button
          ref={copyButtonRef}
          type="button"
          onClick={handleCopy}
          className={iconButton}
          aria-label={isCopied ? "Email copied" : "Copy email address"}
          title={isCopied ? "Copied" : "Copy"}
        >
          {isCopied ? <Check size={17} className="text-accent" /> : <Copy size={17} />}
        </button>
        <a
          href={mailtoHref}
          onClick={onClose}
          className={iconButton}
          aria-label="Open in your email app"
          title="Open in email app"
        >
          <Mail size={17} />
        </a>
      </div>

      <p className="mt-3 text-xs text-fg-muted" aria-live="polite">
        {isCopied
          ? "Email address copied to clipboard."
          : "Copy the email address or open your default email application."}
      </p>
    </div>
  );
}
