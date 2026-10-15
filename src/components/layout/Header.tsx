import Link from "next/link";
import { navItems } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Red por la Justicia">
      
      <img
        src="/images/logo/RPJ_LogoHorizontal_V01_20260824.svg"
        alt="Red por la Justicia"
        className="h-11 w-auto md:h-14"
      />
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-[#061d49]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="https://forms.gle/Vnfj6W7BjM22G1hC7">Solicitar apoyo</ButtonLink>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
