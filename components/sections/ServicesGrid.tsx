"use client";

import { motion } from "framer-motion";
import { Scissors, Ruler, Factory, Sparkles, Palette, Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

const ICONS = {
  diseno: Palette,
  patronaje: Ruler,
  confeccion: Factory,
  bordado: Sparkles,
  estampado: Scissors,
  "moda-intima": Shirt,
} as const;

export default function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service, i) => {
        const Icon = ICONS[service.slug];
        return (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <Card className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wine/10 text-wine">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {service.summary}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
