import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="bg-white px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="¿Cómo funciona el proceso?" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step.title} className="text-center">
              <span
                className={`mx-auto grid h-12 w-12 place-items-center rounded-md text-sm font-bold ${
                  index === 0
                    ? "bg-[#061d49] text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-sm font-bold text-[#061d49]">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-40 text-xs leading-5 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
