"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export default function StatsBar() {
  const experience = new Date().getFullYear() - SITE.foundedYear;
  const stats = [
    [`${experience}+`, "Años en el mercado"],
    ["100%", "Producción en Bogotá"],
    ["6", "Líneas de servicio"],
    ["Nacional", "Cobertura de despacho"],
  ];

  return (
    <div className="border-y border-sand bg-sand/40">
      <div className="container grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        {stats.map(([value, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <p className="font-display text-3xl text-wine sm:text-4xl">{value}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink/60">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
