"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <form
      className="space-y-space-xs"
      onSubmit={(event) => {
        event.preventDefault();
        setSubscribed(true);
      }}
    >
      <div className="flex items-center bg-surface-container-low rounded-DEFAULT overflow-hidden">
        <input
          className="bg-transparent w-full px-space-md py-space-sm font-label-mono-detail text-label-mono-detail text-on-surface placeholder:text-on-surface-variant/40 outline-none"
          placeholder="ENTER FREQUENCY / EMAIL"
          type="email"
        />
        <button
          className="bg-primary-container hover:bg-secondary-fixed text-on-primary-container font-headline-sm text-[12px] uppercase px-space-md py-space-sm transition-colors"
          type="submit"
        >
          Join
        </button>
      </div>
      <span className="font-label-mono-detail text-[10px] text-on-surface-variant block">
        {subscribed
          ? "Frequency locked. Encrypted dispatch confirmed."
          : "Limited to verified addresses. Encrypted via SHA-256."}
      </span>
    </form>
  );
}
