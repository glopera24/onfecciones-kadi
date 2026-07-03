import type { Metadata } from "next";
import Link from "next/link";
import PlantPreview from "@/components/sections/PlantPreview";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ClientsLogos from "@/components/sections/ClientsLogos";
import CTASection from "@/components/sections/CTASection";
import SeamDivider from "@/components/ui/seam-divider";
import { Button } from "@/components/ui/button";


export const metadata: Metadata = {
  title: "Fabricante de moda íntima y confección para marcas en Bogotá",
  description:
    "Confecciones Kadi SAS: más de 20 años fabricando moda íntima y confección textil para marcas en Bogotá. Diseño, patronaje, corte, bordado y estampado en una sola planta.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-4xl text-ink">
              Todo lo que necesitas para producir, en un solo lugar
            </h2>
            <p className="mt-4 text-ink/60">
              Desde la idea hasta la prenda terminada: cubrimos cada etapa de
              la cadena de confección con estándares de calidad premium.
            </p>
          </div>
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <SeamDivider />

      <section className="py-24">
        <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-balance font-display text-4xl text-ink">
              Nuestro proceso, de la idea a la entrega
            </h2>
            <p className="mt-4 max-w-md text-ink/60">
              Un flujo de producción claro y trazable, pensado para que sepas
              exactamente en qué etapa está tu pedido.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/proceso">Ver proceso completo</Link>
            </Button>
          </div>
         <ProcessTimeline />
</div>
</section>

<PlantPreview />
<section className="bg-sand/40 py-24">
  <div className="container">
    <h2 className="text-center font-display text-3xl text-ink">
      Trabajamos con
    </h2>
    <div className="mt-10">
      <ClientsLogos />
    </div>
  </div>
</section>

      <CTASection />
    </>
  );
}
