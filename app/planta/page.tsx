import type { Metadata } from "next";
import Image from "next/image";
import PlantGallery from "@/components/sections/PlantGallery";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Nuestra Planta de Producción",
  description:
    "Conozca las instalaciones, maquinaria y procesos de Confecciones Kadi S.A.S.",
};

export default function PlantaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Nuestra Planta" }]} />

      <section className="container py-16">

        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Instalaciones
          </span>

          <h1 className="mt-4 font-display text-5xl text-ink">
            Nuestra Planta de Producción
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            En Confecciones Kadi S.A.S. contamos con instalaciones propias,
            maquinaria especializada y un equipo humano comprometido con la
            calidad. Nuestra infraestructura nos permite desarrollar proyectos
            textiles con altos estándares de producción y cumplimiento.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/planta/FACHADA.jpeg"
            alt="Planta de Producción Confecciones Kadi"
            width={1600}
            height={900}
            className="h-[500px] w-full object-cover"
            priority
          />
        </div>

      </section>
    
    <PlantGallery />

      <CTASection />
    </>
  );
}