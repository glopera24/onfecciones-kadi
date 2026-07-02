"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Divisor de sección en forma de puntada de costura (signature element).
 * Se dibuja progresivamente al entrar en el viewport, referenciando
 * el oficio de confección de la marca.
 */
export default function SeamDivider({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto flex w-full max-w-6xl items-center px-6", className)}>
      <svg
        viewBox="0 0 1200 24"
        className="h-6 w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1="0"
          y1="12"
          x2="1200"
          y2="12"
          stroke="#B08D57"
          strokeWidth="2"
          strokeDasharray="14 10"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
