import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-950">
      <Header />
      <main className="flex flex-1 items-center bg-[#f6f8fb]">
        <section className="w-full px-5 py-20 text-center md:px-8 md:py-28">
          <div className="mx-auto max-w-2xl">
            <p className="text-7xl font-bold text-[#061d49] md:text-8xl">404</p>
            <div className="mx-auto mt-6 h-px w-16 bg-[#9c6d4d]" />
            <h1 className="mt-7 text-3xl font-semibold text-[#061d49] md:text-4xl">
              Página no disponible
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg">
              La página que buscas aún no está disponible.
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              Estamos preparando esta sección para ofrecerte información clara
              y completa. Te invitamos a volver al inicio mientras terminamos
              de trabajar en ella.
            </p>
            <div className="mt-8">
              <ButtonLink href="/">Volver al inicio</ButtonLink>
            </div>
            {/* TODO: Add the Abogato mascot when a suitable local asset is available. */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
