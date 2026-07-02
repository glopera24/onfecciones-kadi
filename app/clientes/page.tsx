import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientsLogos from "@/components/sections/ClientsLogos";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "Marcas de moda íntima, boutiques y negocios de e-commerce que confían su producción a Confecciones Kadi SAS.",
  alternates: { canonical: "/clientes" },
};

const TESTIMONIALS = [
  {
    quote:
      "El acabado de las prendas mejoró notablemente desde que trabajamos con Kadi. Cumplen tiempos y son claros en la comunicación.",
    author: "Marca de moda íntima independiente",
  },
  {
    quote:
      "Nos ayudaron a desarrollar el patronaje desde cero. El proceso fue transparente de principio a fin.",
    author: "Emprendimiento de e-commerce de moda",
  },
];

export default function ClientesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Clientes" }]} />

      <section className="container py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Clientes
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl text-ink sm:text-5xl">
            Marcas que confían su producción a Kadi
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            Trabajamos con marcas de distintos tamaños, desde emprendimientos
            que fabrican su primer lote hasta negocios con producción
            recurrente.
          </p>
        </div>

        <div className="mt-16">
          <ClientsLogos />
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl border border-sand bg-ivory p-8"
            >
              <p className="font-display text-lg italic leading-relaxed text-ink">
                “{t.quote}”
              </p>
              <footer className="mt-4 text-sm text-ink/50">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
