import { digitalServices } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DigitalSupportSection() {
  return (
    <section id="servicios" className="bg-slate-50 px-5 py-16 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Accesibilidad e Inclusión Digital"
          title="Servicios de apoyo jurídico y digital"
          description="La tecnología no debería ser una barrera para acceder a tus derechos."
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600">
          Además del acompañamiento jurídico tradicional, apoyamos a personas
          que encuentran dificultades para realizar trámites por internet,
          utilizar plataformas digitales institucionales o gestionar su
          documentación legal en formato digital.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs italic leading-6 text-slate-500">
          Servicios complementarios de acompañamiento para la reducción de la
          brecha digital, diseñados para garantizar un acceso efectivo a
          trámites e instituciones.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {digitalServices.map((service) => (
            <article key={service.title} className="rounded-md bg-white p-7 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-[#f3f6fb] text-sm font-bold text-[#061d49]">
                D
              </span>
              <h3 className="mt-5 text-base font-bold text-[#061d49]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <div className="mt-5 rounded-md bg-slate-50 p-4">
                <p className="text-xs font-bold text-[#061d49]">Cómo te apoyamos:</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {service.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <ButtonLink href="https://forms.gle/Vnfj6W7BjM22G1hC7">Solicitar orientación</ButtonLink>
        </div>
      </div>
    </section>
  );
}
