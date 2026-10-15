import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.85fr_1fr]">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
            Acceso a la justicia, oportunidades para el futuro
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Brindamos orientación y acompañamiento jurídico a personas que
            enfrenten dificultades para acceder y defender sus derechos.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonLink href="https://forms.gle/Vnfj6W7BjM22G1hC7">Solicitar apoyo jurídico</ButtonLink>
            <ButtonLink href="#servicios" variant="secondary">
              Conocer nuestros servicios
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#d8d3cc] shadow-sm">
            <Image
              src="/images/home/hero-consulta.webp"
              alt="Consulta de orientación jurídica en una oficina"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, (min-width: 768px) 80vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
