"use client";

import { ReactNode, useRef } from "react";
import { MotionValue, useScroll } from "motion/react";

interface ScrollSectionProps {
  children: (progress: MotionValue<number>) => ReactNode;
  height?: string;
  className?: string;
  id?: string;
}

export default function ScrollSection({
  children,
  height = "300vh",
  className = "",
  id,
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      id={id}
      style={{ height }}
      className={`relative ${className}`}
    >
      <div className="sticky top-0 h-screen w-full">
        {children(scrollYProgress)}
      </div>
    </section>
  );
}