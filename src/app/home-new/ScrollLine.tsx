"use client";

import { MotionValue, motion, useTransform } from "motion/react";

interface ScrollLineProps {
  progress: MotionValue<number>;
}

export default function ScrollLine({
  progress,
}: ScrollLineProps) {
  const width = useTransform(
    progress,
    [0.15, 0.85],
    ["0%", "100%"]
  );

  return (
    <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200">
      <motion.div
        style={{ width }}
        className="h-full origin-left bg-[#0668E1]"
      />
    </div>
  );
}