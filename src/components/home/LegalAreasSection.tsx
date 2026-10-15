import { legalAreas } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LegalAreasSection() {
  return (
    <section className="bg-slate-50 px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Áreas jurídicas de atención"
          description="Brindamos asesoría en diversas materias del derecho. La viabilidad de atención depende de la evaluación particular de cada caso."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {legalAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-md bg-white p-5 text-center shadow-sm ring-1 ring-slate-200"
            >
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-md bg-[#f3f6fb] text-sm font-bold text-[#061d49]">
                {area.icon}
              </span>
              <h3 className="mt-4 text-sm font-bold text-[#061d49]">
                {area.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
