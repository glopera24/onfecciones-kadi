import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/sections/CTASection";
import SeamDivider from "@/components/ui/seam-divider";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Confecciones Kadi SAS: más de 20 años de trayectoria como fabricante colombiano de moda íntima y confección para marcas en Bogotá.",
  alternates: { canonical: "/nosotros" },
};

const VALUES = [
  {
    title: "Calidad en cada puntada",
    text: "Control de calidad en cada etapa del proceso, no solo al final.",
  },
  {
    title: "Producción nacional",
    text: "100% fabricado en nuestra planta en Bogotá, con mano de obra colombiana.",
  },
  {
    title: "Confidencialidad de marca",
    text: "Tus diseños y desarrollos se manejan con reserva total.",
  },
  {
    title: "Cumplimiento",
    text: "Tiempos de entrega claros, comunicados y respetados.",
  },
];

export default function NosotrosPage() {
  const experience = new Date().getFullYear() - SITE.foundedYear;

  return (
    <>
      <Breadcrumbs items={[{ label: "Nosotros" }]} />

      <section className="container grid items-center gap-16 py-16 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Nuestra historia
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl text-ink sm:text-5xl">
            {experience} años vistiendo marcas colombianas
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            Confecciones Kadi SAS nació en Bogotá con un propósito simple:
            ofrecer producción textil de calidad premium a marcas que quieren
            crecer sin sacrificar el nivel de terminación de sus prendas.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            Con el tiempo nos especializamos en moda íntima femenina, un
            segmento que exige precisión en el patronaje, cuidado en los
            acabados y control estricto de calidad. Hoy acompañamos tanto a
            marcas emergentes que fabrican su primer lote, como a empresas
            establecidas que necesitan un aliado de producción constante.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
          <Image
            src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=900&q=80"
            alt="Equipo de confección trabajando en planta de producción textil"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
        </div>
      </section>

      <SeamDivider />

      <section className="py-20">
        <div className="container grid gap-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-sand p-8">
            <h2 className="font-display text-2xl text-ink">Misión</h2>
            <p className="mt-3 leading-relaxed text-ink/60">
              Fabricar moda íntima y prendas de confección con estándares de
              calidad premium, siendo el aliado de producción confiable de
              marcas colombianas en crecimiento.
            </p>
          </div>
          <div className="rounded-2xl border border-sand p-8">
            <h2 className="font-display text-2xl text-ink">Visión</h2>
            <p className="mt-3 leading-relaxed text-ink/60">
              Ser reconocidos como el fabricante textil de referencia en
              Colombia para marcas que buscan calidad, cumplimiento y
              capacidad de producción a escala.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand/40 py-20">
        <div className="container">
          <h2 className="text-center font-display text-3xl text-ink">
            Lo que nos define
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 className="font-display text-lg text-wine">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
