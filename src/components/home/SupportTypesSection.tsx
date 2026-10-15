import { supportTypes } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SupportTypesSection() {
  return (
    <section id="como-podemos-ayudarte" className="bg-white px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="¿Cómo podemos ayudarte?"
          description="Ofrecemos diferentes niveles de intervención dependiendo de las características y necesidades de cada caso."
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs italic leading-6 text-slate-500">
          El envío de una solicitud no garantiza la prestación del servicio de
          representación legal. Todos los casos están sujetos a un proceso de
          evaluación previo.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportTypes.map((item) => (
            <article key={item.title} className="rounded-md bg-slate-50 p-6">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-sm font-bold text-[#061d49] shadow-sm">
                {item.icon}
              </span>
              <h3 className="mt-5 text-base font-bold text-[#061d49]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
