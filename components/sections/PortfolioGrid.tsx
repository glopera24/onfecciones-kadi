"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Línea básica algodón",
    category: "Moda íntima",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Colección encaje premium",
    category: "Moda íntima",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Producción por lote",
    category: "Confección para marcas",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Bordado de logo",
    category: "Bordado",
    image:
      "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Estampado textil",
    category: "Estampado",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Patronaje digital",
    category: "Patronaje",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
  },
];

export default function PortfolioGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ITEMS.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand"
        >
          <Image
            src={item.image}
            alt={`${item.title} — ${item.category}, Confecciones Kadi`}
            fill
            sizes="(max-width: 1024px) 90vw, 32vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-xs uppercase tracking-wide text-gold">
              {item.category}
            </p>
            <p className="mt-1 font-display text-lg text-ivory">{item.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
