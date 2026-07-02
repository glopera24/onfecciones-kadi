import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre pedido mínimo, producción de marca privada, tiempos de entrega y tejidos disponibles en Confecciones Kadi SAS.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Preguntas frecuentes" }]} />

      <section className="container py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Preguntas frecuentes
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl text-ink sm:text-5xl">
            Resolvemos tus dudas
          </h1>
        </div>

        <div className="mt-14 max-w-3xl">
          <FAQAccordion />
        </div>
      </section>

      <CTASection
        title="¿Tu pregunta no está aquí?"
        description="Escríbenos directamente y te respondemos personalmente."
      />
    </>
  );
}
