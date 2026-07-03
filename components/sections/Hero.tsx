"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  const experience = new Date().getFullYear() - SITE.foundedYear;

  return (
<section className="relative min-h-[85vh] overflow-hidden">
  {/* Video de fondo */}
<div className="absolute inset-0">
  <video
    className="h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src="/video/video-textil.mp4" type="video/mp4" />
  </video>

  {/* Capa oscura */}
<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

  {/* Degradado */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
</div>
<div className="container relative z-10 flex min-h-[85vh] items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
<span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
  Fabricación textil desde Bogotá
</span>

<h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-[3.75rem]">
            Confeccionamos la moda íntima que{" "}
            <span className="italic text-wine">tu marca</span> necesita.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            {experience} años de experiencia convirtiendo diseños en
            producción textil de calidad premium: diseño, patronaje, corte,
            confección, bordado y estampado, todo en una sola planta
            colombiana.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
           <Button
  asChild
  size="lg"
  className="border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-ink"
>
  <Link href="/portafolio">Ver referencias</Link>
</Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {[
              [`${experience}+`, "años de experiencia"],
              ["100%", "producción nacional"],
              ["6", "líneas de servicio"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl text-wine">{value}</p>
                <p className="text-xs uppercase tracking-wide text-white/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
