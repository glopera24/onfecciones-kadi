"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/portfolio-data";

const FILTERS = ["Todas", "Blusas", "Bodys", "Corsets", "Enterizos"];

export default function PortfolioGrid() {
  const [active, setActive] = useState("Todas");

  const items = useMemo(() => {
    if (active === "Todas") return portfolioItems;
    return portfolioItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              active === filter
                ? "bg-wine text-white shadow-lg"
                : "bg-sand text-ink hover:bg-gold hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {items.map((item, index) => (
          <motion.div
            layout
            key={item.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.35,
              delay: index * 0.03,
            }}
            className="group overflow-hidden rounded-2xl bg-white shadow-lg"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.image}
                alt={item.category}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-full transition duration-300 group-hover:translate-y-0">
                <div className="bg-gradient-to-t from-black via-black/70 to-transparent p-5">
                  <p className="text-lg font-semibold text-white">
                    {item.category}
                  </p>

                  <p className="text-sm text-white/80">
                    Confecciones Kadi S.A.S.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}