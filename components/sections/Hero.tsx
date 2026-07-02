"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  const experience = new Date().getFullYear() - SITE.foundedYear;

  return (
    <section className="relative overflow-hidden bg-ivory pb-20 pt-16 sm:pt-24">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-wine">
            Fabricación textil desde Bogotá
          </span>

          <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-[3.75rem]">
            Confeccionamos la moda íntima que{" "}
            <span className="italic text-wine">tu marca</span> necesita.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            {experience} años de experiencia convirtiendo diseños en
            producción textil de calidad premium: diseño, patronaje, corte,
            confección, bordado y estampado, todo en una sola planta
            colombiana.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portafolio">Ver portafolio</Link>
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
                <p className="text-xs uppercase tracking-wide text-ink/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80"
              alt="Taller de confección textil con rollos de tela y máquinas de coser industriales"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-wine px-6 py-5 text-ivory shadow-xl sm:block">
            <p className="font-display text-2xl">NIT {SITE.nit}</p>
            <p className="text-xs uppercase tracking-wide text-ivory/70">
              Empresa formal colombiana
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
