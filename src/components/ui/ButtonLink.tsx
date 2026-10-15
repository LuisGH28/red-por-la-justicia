import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-[#061d49] text-white hover:bg-[#0a2b66] focus-visible:outline-[#061d49]",
    secondary:
      "border border-[#061d49]/20 bg-white text-[#061d49] hover:border-[#061d49]/40 hover:bg-[#f4f7fb] focus-visible:outline-[#061d49]",
    light:
      "bg-white text-[#061d49] hover:bg-[#eef3fb] focus-visible:outline-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-10 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {children}
    </Link>
  );
}
