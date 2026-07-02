"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessTimeline() {
  return (
    <div className="relative">
      <div
        className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-sand sm:block"
        aria-hidden
      />
      <ol className="space-y-10">
        {PROCESS_STEPS.map((step, i) => (
          <motion.li
            key={step.number}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative flex gap-6 sm:pl-0"
          >
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ivory font-display text-lg text-wine">
              {step.number}
            </span>
            <div className="pt-2">
              <h3 className="font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink/60">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
