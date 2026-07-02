import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Proceso de producción",
  description:
    "Conoce el proceso de producción de Confecciones Kadi SAS: diseño, patronaje, corte, confección, bordado, estampado y control de calidad.",
  alternates: { canonical: "/proceso" },
};

export default function ProcesoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Proceso" }]} />

      <section className="container py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Cómo trabajamos
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl text-ink sm:text-5xl">
            Un proceso trazable, de la idea a la entrega
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            Cada pedido pasa por seis etapas controladas. Así sabes siempre en
            qué punto está tu producción y qué sigue.
          </p>
        </div>

        <div className="mt-16 max-w-3xl">
          <ProcessTimeline />
        </div>
      </section>

      <CTASection />
    </>
  );
}
