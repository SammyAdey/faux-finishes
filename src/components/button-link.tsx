import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  external?: boolean;
  showArrow?: boolean;
};

const variants = {
  primary:
    "rounded-sm bg-cta px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-cta-hover",
  secondary:
    "rounded-sm border border-border bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink",
  text: "text-link text-sm",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  showArrow = false,
}: Props) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 cursor-pointer ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {(showArrow || variant === "text") && (
        <ArrowUpRight className="size-4" aria-hidden />
      )}
    </>
  );

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    const isWebExternal = external && href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isWebExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
