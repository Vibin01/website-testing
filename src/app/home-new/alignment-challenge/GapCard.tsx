"use client";

import { motion } from "motion/react";

interface GapCardProps {
  number: string;
  type: string;
  actors: string[];
  description: string;
  drifting: string[];
  aligned: string[];
}

export default function GapCard({
  number,
  type,
  actors,
  description,
  drifting,
  aligned,
}: GapCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Top */}
      <div className="p-7">

        {/* Number + label */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-400">
            {number}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-500">
            {type}
          </span>
        </div>

        {/* Actor relationship */}
        <div className="mt-10 flex items-center justify-center gap-4">

          <ActorNode name={actors[0]} />

          <div className="flex flex-col items-center">
            <div className="h-8 w-px bg-slate-300" />

            <span className="my-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#0668E1]/30 text-sm text-[#0668E1]">
              ↕
            </span>

            <div className="h-8 w-px bg-slate-300" />
          </div>

          <ActorNode name={actors[1]} />

        </div>

        {/* Description */}
        <p className="mt-8 text-center text-sm leading-6 text-slate-600">
          {description}
        </p>

      </div>

      {/* Drift */}
      <div className="border-t border-slate-200 bg-slate-50 p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          When Alignment Drifts
        </p>

        <div className="mt-4 space-y-3">
          {drifting.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-slate-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Aligned */}
      <div className="border-t border-slate-200 p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0668E1]">
          When Aligned
        </p>

        <div className="mt-4 space-y-3">
          {aligned.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-slate-700"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0668E1]/10 text-xs text-[#0668E1]">
                ✓
              </span>

              {item}
            </div>
          ))}
        </div>
      </div>

    </motion.article>
  );
}

function ActorNode({ name }: { name: string }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-center text-xs font-semibold text-slate-800 shadow-sm">
      {name}
    </div>
  );
}