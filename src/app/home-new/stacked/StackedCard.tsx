"use client";

import { motion, MotionValue, useTransform } from "motion/react";

interface StackedCardProps {
  index: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}

export default function StackedCard({
  index,
  progress,
  children,
}: StackedCardProps) {
  const totalCards = 6;

  const start = index / totalCards;
  const end = (index + 1) / totalCards;

  /*
   * Card moves upward as the next card takes over.
   */
  const y = useTransform(
    progress,
    [start, end],
    [0, -80]
  );

  /*
   * Slightly scale the card behind.
   */
  const scale = useTransform(
    progress,
    [start, end],
    [1, 0.94]
  );

  /*
   * Slight darkening of previous cards.
   */
  const opacity = useTransform(
    progress,
    [start, end],
    [1, 0.75]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
      }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}