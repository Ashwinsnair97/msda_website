"use client";

import { useSyncExternalStore } from "react";

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
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-4xl rounded-lg border border-subtle-border bg-white p-5 text-primary shadow-xl sm:inset-x-6 sm:flex sm:items-center sm:gap-6 sm:p-6"
    >
      <p className="text-sm leading-relaxed sm:flex-1">
        As per the provisions of &apos;The Chartered Accountants Act, 1949&apos;,
        we are not permitted to solicit work or advertise. By clicking on the
        &apos;Agree&apos; below, you acknowledge
      </p>
      <button
        type="button"
        onClick={handleAgree}
        className="button button--primary button--sm mt-4 w-full shrink-0 sm:mt-0 sm:w-auto"
      >
        Agree
      </button>
    </aside>
  );
}
