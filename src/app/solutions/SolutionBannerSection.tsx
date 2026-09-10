"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

/* ============================================================
   TYPES
============================================================ */

export type SolutionBannerHighlight =
  | {
      prefix?: string;
      highlight: string;
      suffix?: string;
    }
  | string;

export type SolutionBannerItem = {
  id?: string | number;
  icon?: string | React.ReactNode;
  iconAlt?: string;
  title: string;
  description: string;
  highlights?: SolutionBannerHighlight[];
  bgColor?: string; // custom background class, default: bg-[#0668E1]
  textColor?: string; // custom text class, default: text-white
  className?: string;
};

export type SolutionBannerSectionProps = {
  data?: SolutionBannerItem[];
  items?: SolutionBannerItem[]; // alias for convenience
  className?: string;
};

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.99,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ============================================================
   HIGHLIGHT PARSER HELPER
============================================================ */

function HighlightItem({
  item,
}: {
  item: SolutionBannerHighlight;
  key?: React.Key;
}) {
  if (typeof item === "object") {
    return (
      <span className="inline-flex items-center gap-xs leading-normal">
        {item.prefix && (
          <span className="font-medium ">{item.prefix}</span>
        )}
        <span className="font-bold text-white tracking-wide">{item.highlight}</span>
        {item.suffix && (
          <span className="font-medium ">{item.suffix}</span>
        )}
      </span>
    );
  }

  // If string contains markdown bold format: "Targets become **visible.**"
  if (item.includes("**")) {
    const parts = item.split(/(\*\*.*?\*\*)/g);
    return (
      <span className="inline-flex items-center gap-xs leading-normal">
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <span key={i} className="font-bold text-white tracking-wide">
                {part.slice(2, -2)}
              </span>
            );
          }
          return (
            <span key={i} className="font-normal">
              {part}
            </span>
          );
        })}
      </span>
    );
  }

  // If normal string, auto-bold the last word (e.g. "Targets become visible.")
  const trimmed = item.trim();
  const lastSpaceIndex = trimmed.lastIndexOf(" ");
  if (lastSpaceIndex !== -1) {
    const prefix = trimmed.slice(0, lastSpaceIndex);
    const lastWord = trimmed.slice(lastSpaceIndex + 1);
    return (
      <span className="inline-flex items-center gap-xs leading-normal">
        <span className="font-medium">{prefix}</span>
        <span className="font-bold text-white tracking-wide">{lastWord}</span>
      </span>
    );
  }

  return <span className="font-bold text-white leading-normal">{item}</span>;
}



/* ============================================================
   SINGLE CARD COMPONENT
============================================================ */

export function SolutionBannerCard({
  item,
}: {
  item: SolutionBannerItem;
  index?: number;
  key?: React.Key;
}) {
  const bgClass = item.bgColor ?? "bg-[#0668E1]";
  const textClass = item.textColor ?? "text-white";

  return (
    <motion.div
      variants={cardVariants}
      className={`relative w-full rounded-md ${bgClass} py-md pl-md pr-md  shadow-mobile-medium md:shadow-web-medium transition-all duration-300 overflow-hidden ${
        item.className ?? ""
      }`}
    >
      <div className="flex flex-col items-start md:grid md:grid-cols-[max-content_1fr] md:items-stretch gap-sm">
        {/* Left Side: Icon Container */}
        <motion.div
          
          
          className="flex-center shrink-0 w-[60px] h-[60px] md:w-auto md:h-full aspect-square"
        >
          {typeof item.icon === "string" ? (
            <img
              src={item.icon}
              alt={item.iconAlt ?? item.title}
              className="h-full w-full object-contain"
            />
          ) : item.icon && (
            item.icon
          ) }
          
        </motion.div>

        {/* Right Side: Text Information */}
        <div className={`flex space-y-1 flex-col justify-center flex-1 text-left ${textClass}`}>
          {/* Title */}
          <h3 className="text-h5 font-bold text-white">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-xl font-medium mb-sm w-[94%]" >
            {item.description}
          </p>

          {/* Highlights / Tags */}
          {item.highlights && item.highlights.length > 0 && (
            <div className="flex flex-wrap items-center justify-start gap-x-lg gap-y-xs text-xl font-medium">
              {item.highlights.map((highlight, hIndex) => (
                <HighlightItem key={hIndex} item={highlight} />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   MAIN SECTION COMPONENT (Maps the array of values)
============================================================ */

export default function SolutionBannerSection({
  data,
  items,
  className = "",
}: SolutionBannerSectionProps) {
  const bannerItems = data ?? items;

  if (!bannerItems || bannerItems.length === 0) {
    return null;
  }

  return (
    <section className={`w-full mt-md ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="flex flex-col gap-md w-full"
            >
        {bannerItems.map((item, index) => (
          <SolutionBannerCard
            key={item.id ?? index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
