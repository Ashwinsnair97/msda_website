"use client";

import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import Button from "@/components/ui/Button";
import { openingLocation, vacancyLabel } from "@/data/careers";
import JobDetailModal from "./JobDetailModal";

const detailLabel = "text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-muted";
const detailValue = "mt-1.5 text-[15px] font-medium leading-snug text-fg-copy";

// Horizontal job listings. The whole card is clickable: the "View and apply"
// button stretches over the card with an ::after overlay. It is an outline
// button at rest (a repeated, secondary action) and fills navy only on the
// card under the pointer, so the header's Contact us pill stays the one
// filled pill on the page.
//
// Phones and tablets: title and meta, then education and skills side by side,
// then the button. Desktop: one row.
export default function OpeningsList({ openings }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selected = selectedIndex === null ? null : openings[selectedIndex];

  return (
    <>
      <StaggerContainer as="ul" className="grid gap-4">
        {openings.map((opening, index) => {
          const location = openingLocation(opening);

          return (
            <StaggerItem
              as="li"
              key={opening.id}
              className="group relative grid grid-cols-2 gap-x-6 gap-y-6 rounded-card border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-action hover:shadow-raised motion-reduce:transition-none sm:px-8 sm:py-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)_minmax(0,1fr)_auto] lg:items-center lg:gap-x-10"
            >
              <div className="col-span-2 lg:col-span-1">
                <h3 className="font-heading text-[23px] leading-[1.2] tracking-tight text-fg">
                  {opening.title}
                </h3>
                <p className="mt-3">
                  <span className="inline-block rounded-full bg-surface-page px-3 py-0.5 text-[13px] font-medium text-fg">
                    {vacancyLabel(opening.vacancies)}
                  </span>
                </p>
                <p className="mt-2.5 text-sm text-fg-muted">
                  {[opening.experience, location].filter(Boolean).join(" · ")}
                </p>
              </div>

              <dl className="contents">
                <div>
                  <dt className={detailLabel}>Education</dt>
                  <dd className={detailValue}>{opening.education}</dd>
                </div>
                <div>
                  <dt className={detailLabel}>Key skills</dt>
                  <dd className={detailValue}>{opening.skills.join(", ")}</dd>
                </div>
              </dl>

              <div className="col-span-2 lg:col-span-1">
                <Button
                  variant="secondary"
                  onClick={() => setSelectedIndex(index)}
                  aria-haspopup="dialog"
                  aria-label={`View and apply: ${opening.title}`}
                  icon={
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px] motion-reduce:transition-none">
                      →
                    </span>
                  }
                  className="w-full after:absolute after:inset-0 after:rounded-card after:content-[''] group-hover:bg-action group-hover:text-on-action sm:w-auto"
                >
                  View and apply
                </Button>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {selected && (
        <JobDetailModal
          opening={selected}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
