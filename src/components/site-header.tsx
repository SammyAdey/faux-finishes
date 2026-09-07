"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site-data";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [navPath, setNavPath] = useState(pathname);

  if (navPath !== pathname) {
    setNavPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-[#f6f5f1]/90 backdrop-blur-md">
      <a
        href="#main"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to Main Content
      </a>

      <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex min-w-0 flex-col">
          <Link
            href="/"
            className="focus-ring font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent cursor-pointer"
          >
            {site.name}
          </Link>
          <p className="hidden text-[11px] tracking-[0.14em] text-muted uppercase sm:block">
            Bowen Hills, QLD
          </p>
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.primary
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring text-sm transition-colors duration-200 cursor-pointer ${
                  isActive(pathname, item.href)
                    ? "text-ink underline underline-offset-4"
                    : "text-secondary hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/contact"
            className="focus-ring text-link text-sm"
          >
            Partner with us
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex size-10 items-center justify-center text-ink cursor-pointer lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-surface lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-[100rem] flex-col gap-1 px-5 py-6 sm:px-8"
            aria-label="Mobile"
          >
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring py-3 text-base font-medium cursor-pointer ${
                  isActive(pathname, item.href) ? "text-ink" : "text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/policies-governance"
              className="focus-ring py-3 text-base font-medium text-secondary cursor-pointer"
            >
              Policies / Governance
            </Link>
            <Link href="/contact" className="focus-ring text-link mt-4 text-base">
              Partner with us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
