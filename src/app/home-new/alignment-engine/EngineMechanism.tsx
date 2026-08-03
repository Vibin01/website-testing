"use client";

import { motion } from "motion/react";

interface EngineMechanismProps {
  number: string;
  label: string;
  title: string;
  description: string;
  level: string;
}

export default function EngineMechanism({
  number,
  label,
  title,
  description,
  level,
}: EngineMechanismProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group relative z-10 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#0668E1]/50 hover:bg-white/[0.07]"
    >

      {/* Number */}
      <div className="flex items-center justify-between">

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-[#0668E1]">
          {number}
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {level}
        </span>

      </div>

      {/* Label */}
      <p className="mt-12 text-xs font-semibold tracking-[0.18em] text-[#0668E1]">
        {label}
      </p>

      {/* Title */}
      <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 text-sm leading-6 text-slate-400">
        {description}
      </p>

      {/* Bottom */}
      <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-5">

        <span className="h-2 w-2 rounded-full bg-[#0668E1]" />

        <span className="text-xs text-slate-500">
          {level} visibility
        </span>

      </div>

    </motion.article>
  );
}