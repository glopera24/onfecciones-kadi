"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { plantaImages } from "@/lib/planta-data";

export default function PlantGallery() {
  return (
    <section className="py-20">
      <div className="container">

        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-wine">
            Infraestructura
          </span>

          <h2 className="mt-4 font-display text-4xl text-ink">
            Nuestras instalaciones
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
            Nuestra planta cuenta con espacios diseñados para garantizar un
            proceso de producción eficiente, seguro y con altos estándares de
            calidad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {plantaImages.map((item, index) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <h3 className="font-display text-2xl text-white">
                    {item.title}
                  </h3>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}