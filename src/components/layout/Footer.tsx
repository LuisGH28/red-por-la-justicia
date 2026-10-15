import Link from "next/link";
import { navItems } from "@/data/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

const socialLinks = [
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/red_por_la_justicia?stkn=c2wweDU3MmdlMXA5",
  },
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/share/18EdfRQQ52/",
  },
  {
    label: "TikTok",
    icon: "tiktok",
    href: "https://www.tiktok.com/@red.por.la.justic?_r=1&_t=ZS-9A69QTY8QUe",
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="text-base font-bold text-[#061d49]">Red por la Justicia</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Acceso a la justicia, oportunidades para el futuro.
          </p>
          <p className="mt-5 text-xs text-slate-500">
            © 2026 Red por la Justicia, A.C. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-md text-[#061d49] transition-colors hover:bg-slate-100 hover:text-[#17457f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17457f]"
              >
                <SocialIcon name={social.icon} />
              </Link>
            ))}
          </div>
        </div>

        <nav className="grid gap-2 text-sm text-slate-600">
          {navItems.slice(1, 4).map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-[#061d49]">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="grid gap-2 text-sm text-slate-600">
          <Link href="https://forms.gle/Vnfj6W7BjM22G1hC7" className="hover:text-[#061d49]">
            Solicitar Apoyo
          </Link>
          <Link href="/aviso-de-privacidad" className="hover:text-[#061d49]">
            Aviso de Privacidad
          </Link>
          <Link href="/terminos-y-condiciones" className="hover:text-[#061d49]">
            Términos y condiciones
          </Link>
        </nav>
      </div>
    </footer>
  );
}
