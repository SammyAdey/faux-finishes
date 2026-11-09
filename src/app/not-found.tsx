import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <main id="main" className="flex-1 border-b border-border">
      <section className="mx-auto max-w-[100rem] px-5 py-[var(--space-section)] sm:px-8 lg:px-10">
        <p className="page-eyebrow">404. Page not found.</p>
        <h1 className="display-title mt-4 max-w-3xl">Let’s get you back<br />to the right place.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary">
          This page may have moved or the address may be incorrect. Explore our
          work, or get in touch to discuss your project.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/projects" variant="text">Explore our projects</ButtonLink>
        </div>
      </section>
    </main>
  );
}
