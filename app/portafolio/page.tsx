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
  Nuestras Referencias
</h1>

<p className="mt-6 leading-relaxed text-ink/70">
  Cada prenda refleja nuestra experiencia en diseño, confección y producción.
  Estas referencias corresponden a algunos de los desarrollos realizados por
  Confecciones Kadi S.A.S. para diferentes marcas y proyectos. Fabricamos bajo
  especificaciones de cada cliente, garantizando calidad, cumplimiento y
  excelentes acabados.
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
