"use client";

import { useId, useState } from "react";
import { site } from "@/lib/site-data";

export function ContactForm() {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="block text-sm font-medium text-ink">
            Name *
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            className="focus-ring mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-ink transition-colors duration-200 placeholder:text-muted"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="block text-sm font-medium text-ink">
            Email *
          </label>
          <input
            id={`${id}-email`}
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
        <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-ink">
          Phone
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          className="focus-ring mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-ink transition-colors duration-200 placeholder:text-muted"
          placeholder="Contact number"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-business`} className="block text-sm font-medium text-ink">Business name</label>
          <input id={`${id}-business`} name="business" autoComplete="organization" className="focus-ring mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-ink placeholder:text-muted" placeholder="Your company" />
        </div>
        <div>
          <label htmlFor={`${id}-location`} className="block text-sm font-medium text-ink">Project location</label>
          <input id={`${id}-location`} name="location" className="focus-ring mt-2 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-ink placeholder:text-muted" placeholder="Suburb or site address" />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="block text-sm font-medium text-ink">
          Message *
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={3}
          className="focus-ring mt-2 w-full resize-y border-0 border-b border-border bg-transparent px-0 py-3 text-ink transition-colors duration-200 placeholder:text-muted"
          placeholder="Project details, location, and timing"
        />
      </div>
      <p className="text-xs leading-relaxed text-secondary">Your details are for your project enquiry. <a href="/policies-governance" className="focus-ring underline underline-offset-4">Privacy policy</a>.</p>
      {submitted && <p role="status" className="text-sm leading-relaxed text-text">This form isn’t connected to enquiry delivery yet. Please call <a href={site.phoneHref} className="focus-ring underline underline-offset-4">{site.phone}</a> to discuss your project.</p>}
      <button
        type="submit"
        className="focus-ring flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 rounded-sm bg-ink px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-cta-hover"
      >
        Discuss my project ↗
      </button>
    </form>
  );
}
