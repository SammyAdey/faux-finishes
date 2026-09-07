"use client";

import { useState } from "react";
import { site } from "@/lib/site-data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t border-border pt-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Success! We&apos;ll be in touch soon.
        </h2>
        <p className="mt-3 text-text">
          For urgent enquiries call{" "}
          <a
            href={site.phoneHref}
            className="focus-ring font-medium text-ink underline underline-offset-4 cursor-pointer"
          >
            {site.phone}
          </a>{" "}
          or{" "}
          <a
            href={site.mobileHref}
            className="focus-ring font-medium text-ink underline underline-offset-4 cursor-pointer"
          >
            {site.mobile}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="focus-ring mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-ink transition-colors duration-200 placeholder:text-muted"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="focus-ring mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-ink transition-colors duration-200 placeholder:text-muted"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="focus-ring mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-ink transition-colors duration-200 placeholder:text-muted"
          placeholder="Contact number"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="focus-ring mt-2 w-full resize-y border-0 border-b border-border bg-transparent px-0 py-3 text-ink transition-colors duration-200 placeholder:text-muted"
          placeholder="Project details, location, and timing"
        />
      </div>
      <button
        type="submit"
        className="focus-ring inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-ink transition-all duration-200 hover:gap-3 hover:text-accent"
      >
        Submit form →
      </button>
    </form>
  );
}
