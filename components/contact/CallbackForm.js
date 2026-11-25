"use client";

import {
  ConsentField,
  PhoneField,
  PreviewForm,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/forms/fields";
import { services } from "@/data/services";
import { site } from "@/data/site";

const assistanceAreas = [...services.map((service) => service.shortTitle), "Other"];

export default function CallbackForm() {
  return (
    <PreviewForm
      statusId="callback-form-status"
      submitLabel="Callback requests are not enabled yet"
      status={
        <>
          This form is a preview and does not submit information. To contact the firm,
          email <span className="font-medium text-fg">{site.email}</span>.
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Name" name="name" autoComplete="name" required />
        <TextField label="Company name" name="company" autoComplete="organization" optional />
        <PhoneField required />
        <TextField label="Email address" name="email" type="email" autoComplete="email" required />
        <SelectField
          label="Area of assistance"
          name="assistance"
          defaultValue=""
          placeholder="Select an area"
          options={assistanceAreas}
        />
        <TextField
          label="Preferred callback time"
          name="callback-time"
          placeholder="For example, weekday afternoons"
          optional
        />
        <TextAreaField
          label="Details"
          name="details"
          placeholder="Anything else you'd like us to know before we call"
          optional
          className="sm:col-span-2"
        />
      </div>

      <ConsentField>I consent to {site.name} contacting me about this request.</ConsentField>
    </PreviewForm>
  );
}
