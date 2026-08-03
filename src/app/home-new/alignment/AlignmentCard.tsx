"use client";

import { motion } from "motion/react";

interface AlignmentCardProps {
  number: string;
  label: string;
  title: string;
  description: string;
}

export default function AlignmentCard({
  number,
  label,
  title,
  description,
}: AlignmentCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative min-h-[380px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#0668E1]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Number */}
      <div className="relative flex items-center justify-between">
        

        <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-500">
          {label}
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-16">
        <h2 className=" text-2xl font-semibold leading-tight tracking-tight text-slate-950">
          {title}
        </h2>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>

      {/* Bottom indicator */}
      <div className="absolute bottom-7 left-7 right-7">
        <div className="h-px w-full bg-slate-200" />

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Explore alignment
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 group-hover:border-[#0668E1] group-hover:bg-[#0668E1] group-hover:text-white">
            →
          </span>
        </div>
      </div>
    </motion.article>
  );
}