import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Diseño, patronaje industrial, confección para marcas, bordado, estampado y moda íntima. Conoce las líneas de servicio de Confecciones Kadi SAS.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Servicios" }]} />

      <section className="container py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Servicios
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl text-ink sm:text-5xl">
            Una línea de producción completa, bajo un mismo techo
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            No subcontratamos etapas críticas. Diseño, patronaje, corte,
            confección, bordado y estampado ocurren en nuestra planta en
            Bogotá, lo que nos permite controlar tiempos y calidad de
            principio a fin.
          </p>
        </div>

        <div className="mt-16">
          <ServicesGrid />
        </div>
      </section>

      <CTASection
        title="¿No sabes por dónde empezar?"
        description="Cuéntanos tu idea y te orientamos sobre el proceso, tiempos y cantidades mínimas."
      />
    </>
  );
}
