import Link from "next/link";

export function TransparencySection() {
  return (
    <section className="border-b border-slate-200 bg-white px-5 py-10 text-center md:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold text-[#061d49]">
          Transparencia y Privacidad
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          En Red por la Justicia, A.C., operamos con estricto apego a la
          legalidad y la ética. Protegemos tu información personal en todo
          momento.
        </p>
        <div className="mt-4 flex flex-col justify-center gap-2 text-sm font-medium text-[#061d49] sm:flex-row sm:gap-5">
          <Link href="/aviso-de-privacidad" className="hover:underline">
            Consultar Aviso de Privacidad Integral
          </Link>
          <Link href="/terminos-y-condiciones" className="hover:underline">
            Términos y Condiciones de Uso
          </Link>
        </div>
      </div>
    </section>
  );
}
