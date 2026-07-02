import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Ejemplos de producción de Confecciones Kadi SAS en moda íntima, confección para marcas, bordado, estampado y patronaje.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Portafolio" }]} />

      <section className="container py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Portafolio
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl text-ink sm:text-5xl">
            Producción real, resultados consistentes
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            Una muestra de los tipos de proyectos que desarrollamos para
            nuestros clientes. Las imágenes son ilustrativas del estilo y
            calidad de trabajo.
          </p>
        </div>

        <div className="mt-16">
          <PortfolioGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
