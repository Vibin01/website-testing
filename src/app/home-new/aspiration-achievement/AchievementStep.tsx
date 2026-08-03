"use client";

import { motion } from "motion/react";

interface AchievementStepProps {
  number: string;
  label: string;
  title: string;
  isLast: boolean;
}

export default function AchievementStep({
  number,
  label,
  title,
  isLast,
}: AchievementStepProps) {
  return (
    <div className="relative">

      {/* Connector */}
      {!isLast && (
        <div className="absolute left-[calc(50%+55px)] right-[-50%] top-8 hidden h-px bg-slate-200 lg:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full origin-left bg-[#0668E1]"
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          delay: Number(number) * 0.1,
        }}
        className="relative z-10 mx-auto max-w-sm text-center"
      >

        {/* Number */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-[#0668E1] shadow-sm">
          {number}
        </div>

        {/* Label */}
        <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-[#0668E1]">
          {label}
        </p>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950">
          {title}
        </h3>

      </motion.div>

    </div>
  );
}