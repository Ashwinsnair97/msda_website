"use client";

import { useState } from "react";
import {
  ConsentField,
  FileField,
  PhoneField,
  PreviewForm,
  SelectField,
  TextField,
} from "@/components/forms/fields";
import { applicationEmailHref, careersEmail, roleOptions } from "@/data/careers";
import { site } from "@/data/site";

// Job application. `defaultRole` (an opening id or GENERAL_APPLICATION)
// preselects the role the visitor clicked Apply on.
export default function ApplicationForm({ defaultRole = "" }) {
  const [role, setRole] = useState(defaultRole);

  return (
    <PreviewForm
      statusId="application-form-status"
      submitLabel="Online applications are not enabled yet"
      status={
        <>
          This form is a preview and does not submit information. To apply, email your CV
          to{" "}
          <a
            href={applicationEmailHref(role)}
            className="focus-ring font-medium text-fg underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
          >
            {careersEmail}
          </a>
          .
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Full name" name="name" autoComplete="name" required />
        <TextField label="Email address" name="email" type="email" autoComplete="email" required />
        <PhoneField required />
        <SelectField
          label="Role"
          name="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          placeholder="Select a role"
          options={roleOptions}
          required
        />
        <FileField
          label="Upload your latest CV"
          name="resume"
          accept={[".pdf", ".doc", ".docx"]}
          maxSizeMb={2}
          hint="Accepted formats: PDF, DOC, DOCX · Maximum size 2 MB"
          required
          className="sm:col-span-2"
        />
      </div>

      <ConsentField>
        I consent to {site.name} using these details to assess my application.
      </ConsentField>
    </PreviewForm>
  );
}
