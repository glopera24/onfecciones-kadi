import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PlantPreview() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-sand/20">
      <div className="container grid items-center gap-20 lg:grid-cols-[1.3fr_0.7fr]">

        <div className="group relative overflow-hidden rounded-[32px] shadow-2xl">
            <div className="absolute left-6 top-6 z-10 rounded-2xl bg-black/60 px-5 py-3 text-white backdrop-blur-md">
  <p className="text-xs uppercase tracking-[0.25em] text-white/70">
    Planta de Producción
  </p>

  <p className="mt-1 text-lg font-semibold">
    Bogotá D.C.
  </p>
</div>
          <Image
  src="/images/planta/FACHADA.jpeg"
  alt="Planta de Producción Confecciones Kadi"
  width={1600}
  height={1000}
  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Nuestra Planta
          </span>

          <h2 className="mt-4 font-display text-4xl text-ink">
            Conozca nuestras instalaciones
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Contamos con instalaciones propias, maquinaria especializada y un
            equipo humano altamente calificado que nos permite desarrollar
            proyectos textiles con altos estándares de calidad y cumplimiento.
          </p>

          <Button
  asChild
  size="lg"
  className="mt-8 rounded-full px-8"
>
            <Link href="/planta">
              Conocer nuestras instalaciones
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}