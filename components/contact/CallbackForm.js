"use client";

import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { mailtoHref, site } from "@/data/site";

const assistanceAreas = [...services.map((service) => service.shortTitle), "Other"];

const fieldClasses =
  "mt-2 min-h-12 w-full rounded border border-subtle-border bg-white px-4 py-3 text-base text-primary outline-none transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30";

export default function CallbackForm() {
  function preventUnwiredSubmission(event) {
    event.preventDefault();
  }

  return (
    <form
      className="space-y-5"
      aria-describedby="callback-form-status"
      onSubmit={preventUnwiredSubmission}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-primary">
          Name <span aria-hidden="true">*</span>
          <input
            className={fieldClasses}
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </label>
        <label className="block text-sm font-medium text-primary">
          Company name <span className="font-normal text-secondary-text">(optional)</span>
          <input
            className={fieldClasses}
            name="company"
            type="text"
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm font-medium text-primary">
          Phone number <span aria-hidden="true">*</span>
          <input
            className={fieldClasses}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[+]?[0-9 ()-]{7,20}"
            title="Enter a valid phone number using digits, spaces, parentheses, hyphens, and an optional leading plus sign."
            required
          />
        </label>
        <label className="block text-sm font-medium text-primary">
          Area of assistance
          <select className={fieldClasses} name="assistance" defaultValue="">
            <option value="">Select an area</option>
            {assistanceAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-primary sm:col-span-2">
          Preferred callback time <span className="font-normal text-secondary-text">(optional)</span>
          <input
            className={fieldClasses}
            name="callback-time"
            type="text"
            placeholder="For example, weekday afternoons"
          />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-secondary-text">
        <input
          className="focus-ring mt-1 size-4 accent-primary [--focus-ring-offset:2px]"
          name="consent"
          type="checkbox"
          required
        />
        <span>
          I consent to MSDA &amp; CO contacting me about this request.
          <span aria-hidden="true"> *</span>
        </span>
      </label>

      <Button disabled>Callback requests are not enabled yet</Button>
      <p id="callback-form-status" className="text-sm leading-6 text-secondary-text">
        This form is a preview and does not submit information. To contact the firm,
        email{" "}
        <a
          className="focus-ring font-medium text-primary underline underline-offset-4 [--focus-ring-offset:2px]"
          href={mailtoHref}
        >
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
