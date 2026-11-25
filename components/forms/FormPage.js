import Link from "next/link";
import { Eyebrow } from "@/components/ui/SectionHeader";

// Page shell for a standalone form (callback request, job application): a
// white card on the ivory page with the heading and intro above the form.
// Top padding clears the fixed navbar.
export default function FormPage({ eyebrow, title, intro, back, children }) {
  return (
    <main className="bg-surface-page pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="site-container">
        <div className="mx-auto max-w-3xl">
          {back && (
            <Link
              href={back.href}
              className="focus-ring mb-5 inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-accent"
            >
              <span aria-hidden="true">←</span>
              {back.label}
            </Link>
          )}
          <div className="rounded border border-line bg-surface p-6 sm:p-10">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-3 font-heading text-page-heading leading-tight text-fg">{title}</h1>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">{intro}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
