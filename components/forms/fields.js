"use client";

// Shared building blocks for the site's forms (callback request, job
// application). Each field renders its own label, so a form is a list of
// fields:
//
//   <PreviewForm statusId="…" submitLabel="…" status={…}>
//     <div className="grid gap-5 sm:grid-cols-2">
//       <TextField label="Name" name="name" autoComplete="name" required />
//       <PhoneField required />
//     </div>
//     <ConsentField name="consent">I consent to …</ConsentField>
//   </PreviewForm>

import { Upload } from "lucide-react";
import { useId, useState } from "react";
import Button from "@/components/ui/Button";

export const fieldClasses =
  "mt-2 min-h-12 w-full rounded border border-line bg-surface px-4 py-3 text-base text-fg outline-none transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30";

const labelClasses = "block text-sm font-medium text-fg";

function LabelText({ label, required, optional }) {
  return (
    <>
      {label}
      {required && <span aria-hidden="true"> *</span>}
      {optional && <span className="font-normal text-fg-muted"> (optional)</span>}
    </>
  );
}

export function TextField({ label, required, optional, className = "", type = "text", ...inputProps }) {
  return (
    <label className={`${labelClasses} ${className}`}>
      <LabelText label={label} required={required} optional={optional} />
      <input className={fieldClasses} type={type} required={required} {...inputProps} />
    </label>
  );
}

export function TextAreaField({ label, required, optional, className = "", rows = 5, ...textareaProps }) {
  return (
    <label className={`${labelClasses} ${className}`}>
      <LabelText label={label} required={required} optional={optional} />
      <textarea
        className={`${fieldClasses} resize-y`}
        rows={rows}
        required={required}
        {...textareaProps}
      />
    </label>
  );
}

export function PhoneField({ label = "Phone number", name = "phone", ...props }) {
  return (
    <TextField
      label={label}
      name={name}
      type="tel"
      autoComplete="tel"
      inputMode="tel"
      pattern="[+]?[0-9 ()-]{7,20}"
      title="Enter a valid phone number using digits, spaces, parentheses, hyphens, and an optional leading plus sign."
      {...props}
    />
  );
}

// `options` are strings or { value, label } objects. `placeholder` adds an
// empty first option.
export function SelectField({
  label,
  required,
  optional,
  placeholder,
  options,
  className = "",
  ...selectProps
}) {
  return (
    <label className={`${labelClasses} ${className}`}>
      <LabelText label={label} required={required} optional={optional} />
      <select className={fieldClasses} required={required} {...selectProps}>
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map((option) => {
          const { value, label: optionLabel } =
            typeof option === "string" ? { value: option, label: option } : option;
          return (
            <option key={value} value={value}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </label>
  );
}

// Dashed drop-zone style file picker. `accept` is a list of extensions
// (e.g. [".pdf", ".docx"]); files of another type or over `maxSizeMb` are
// rejected as soon as they are chosen, with the reason shown under the field.
export function FileField({
  label,
  name,
  required,
  optional,
  accept,
  maxSizeMb,
  hint,
  className = "",
}) {
  const hintId = useId();
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    const reject = (message) => {
      input.value = "";
      setFileName("");
      setError(message);
    };

    if (!file) {
      setFileName("");
      setError("");
      return;
    }
    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (accept && !accept.includes(extension)) {
      reject("This file type isn't accepted. Please choose another file.");
      return;
    }
    if (maxSizeMb && file.size > maxSizeMb * 1024 * 1024) {
      reject(`This file is larger than ${maxSizeMb} MB. Please choose a smaller file.`);
      return;
    }
    setFileName(file.name);
    setError("");
  }

  return (
    <div className={className}>
      <label className={labelClasses}>
        <LabelText label={label} required={required} optional={optional} />
        <span className="mt-2 flex min-h-20 cursor-pointer items-center justify-between gap-4 rounded border border-dashed border-line bg-surface px-5 py-4 text-base transition hover:border-fg-muted has-[:focus-visible]:border-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent/30">
          <span className={`min-w-0 truncate ${fileName ? "font-medium text-fg" : "text-fg-muted"}`}>
            {fileName || "Choose file"}
          </span>
          <Upload size={18} aria-hidden="true" className="shrink-0 text-fg-muted" />
          <input
            className="sr-only"
            type="file"
            name={name}
            accept={accept?.join(",")}
            required={required}
            aria-describedby={hintId}
            aria-invalid={error ? true : undefined}
            onChange={handleChange}
          />
        </span>
      </label>
      <p id={hintId} className="mt-2 text-sm text-fg-muted" aria-live="polite">
        {error ? <span className="font-medium text-accent">{error}</span> : hint}
      </p>
    </div>
  );
}

export function ConsentField({ name = "consent", children }) {
  return (
    <label className="flex items-start gap-3 text-sm leading-6 text-fg-muted">
      <input
        className="focus-ring mt-1 size-4 accent-action [--focus-ring-offset:2px]"
        name={name}
        type="checkbox"
        required
      />
      <span>
        {children}
        <span aria-hidden="true"> *</span>
      </span>
    </label>
  );
}

// Form whose submission isn't wired to a backend yet: the submit button is
// disabled and `status` tells visitors how to reach the firm instead. Once a
// backend exists, replace the disabled button with a real submit.
export function PreviewForm({ statusId, submitLabel, status, children }) {
  return (
    <form
      className="space-y-5"
      aria-describedby={statusId}
      onSubmit={(event) => event.preventDefault()}
    >
      {children}
      <Button disabled>{submitLabel}</Button>
      <p id={statusId} className="text-sm leading-6 text-fg-muted">
        {status}
      </p>
    </form>
  );
}
