import { values } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-white px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="left"
          title="¿Quiénes somos?"
          description="Somos una Asociación Civil dedicada a facilitar el acceso a la justicia mediante apoyo legal accesible, ético y humano para quienes más lo necesitan."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="border-t-2 border-[#9c6d4d] bg-white p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-bold text-[#061d49]">Misión</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Defender y promover los derechos fundamentales de personas en
              situación de vulnerabilidad mediante asesoría y representación
              legal de excelencia.
            </p>
          </article>
          <article className="border-t-2 border-[#9c6d4d] bg-white p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-bold text-[#061d49]">Visión</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Ser la red de apoyo jurídico más confiable e innovadora,
              garantizando que el acceso a la justicia sea una realidad
              tangible para todos.
            </p>
          </article>
        </div>

        <div className="mt-7">
          <p className="text-sm font-semibold text-slate-900">Nuestros valores</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
