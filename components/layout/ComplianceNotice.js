"use client";

import { useSyncExternalStore } from "react";
import Button from "@/components/ui/Button";

const acknowledgements = [
  "There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us to solicit any work through this website;",
  "You wish to gain more information about us for your own information and use;",
  "The information about us is provided to you on your specific request; and",
  "The information provided under this website is made available at your request for informational purposes only and should not be interpreted as soliciting or advertisement.",
];

const acknowledgementKey = "msda-compliance-notice-acknowledged";
let visibilitySnapshot;
const subscribers = new Set();

function subscribeToVisibility(callback) {
  subscribers.add(callback);
  return () => subscribers.delete(callback);
}

function getVisibilitySnapshot() {
  if (visibilitySnapshot !== undefined) {
    return visibilitySnapshot;
  }

  try {
    visibilitySnapshot = sessionStorage.getItem(acknowledgementKey) !== "true";
  } catch (error) {
    console.error("Unable to read the compliance notice session state.", error);
    visibilitySnapshot = true;
  }

  return visibilitySnapshot;
}

function getServerVisibilitySnapshot() {
  return false;
}

export default function ComplianceNotice() {
  const isVisible = useSyncExternalStore(
    subscribeToVisibility,
    getVisibilitySnapshot,
    getServerVisibilitySnapshot,
  );

  function handleAgree() {
    try {
      sessionStorage.setItem(acknowledgementKey, "true");
    } catch (error) {
      console.error("Unable to save the compliance notice session state.", error);
    }

    visibilitySnapshot = false;
    subscribers.forEach((subscriber) => subscriber());
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Professional conduct notice"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-h-[calc(100dvh-2rem)] max-w-4xl overflow-y-auto rounded-lg border border-subtle-border bg-white p-5 text-primary shadow-xl sm:inset-x-6 sm:p-6"
    >
      <div className="text-sm leading-relaxed">
        <p>
          As per the provisions of &apos;The Chartered Accountants Act, 1949&apos;,
          we are not permitted to solicit work or advertise. By clicking on the
          &apos;Agree&apos; below, you acknowledge the following:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          {acknowledgements.map((statement) => (
            <li key={statement}>{statement}</li>
          ))}
        </ul>
      </div>
      <Button
        size="sm"
        onClick={handleAgree}
        className="ml-auto mt-5 flex"
      >
        Agree
      </Button>
    </aside>
  );
}
