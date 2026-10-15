import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaSection() {
  return (
    <section className="bg-[#061d49] px-5 py-16 text-center text-white md:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          ¿Necesitas asesoría legal?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">
          Si te encuentras en una situación vulnerable y requieres orientación
          jurídica, completa nuestro formulario para evaluar cómo podemos
          ayudarte.
        </p>
        <div className="mt-7">
          <ButtonLink href="https://forms.gle/jPQzpuo5GkmkedG49" variant="light">
            Iniciar solicitud de apoyo
          </ButtonLink>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-xs italic leading-6 text-blue-100/80">
          El envío de la solicitud no genera una relación cliente-abogado ni
          garantiza la representación legal. Todos los casos están sujetos a una
          evaluación de viabilidad y capacidad institucional.
        </p>
      </div>
    </section>
  );
}
