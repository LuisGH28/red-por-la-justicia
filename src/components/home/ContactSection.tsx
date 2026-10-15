import { contactItems } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-white px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-[#061d49] md:text-3xl">
          Contacto
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <article key={item.label} className="text-center">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-md bg-[#f3f6fb] text-xs font-bold text-[#061d49]">
                {item.label.charAt(0)}
              </span>
              <h3 className="mt-4 text-sm font-bold text-[#061d49]">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
