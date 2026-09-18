"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/common/Button/GradientButton";

interface CalibratorHeroSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
}

export default function CalibratorHeroSection({
  title,
  subTitle,
  description,
}: CalibratorHeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToCalibrator = () => {
    const element = document.getElementById("easy-calibrator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sync = () => {
      if (!containerRef.current) return;
      const spans = Array.from(
        containerRef.current.querySelectorAll<HTMLSpanElement>(".btn-text-sync")
      );
      spans.forEach((s) => (s.style.minWidth = ""));

      let maxW = 0;
      spans.forEach((s) => {
        const w = s.offsetWidth || s.scrollWidth;
        if (w > maxW) maxW = w;
      });

      if (maxW > 0) {
        spans.forEach((s) => (s.style.minWidth = `${maxW}px`));
      }
    };

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(sync);
    }
    sync();

    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <>
    <section className="flex flex-col items-center justify-center py-[5%]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  // Slow gap between each element
                  staggerChildren: 0.35,
                },
              },
            }}
            className="flex w-full flex-col items-center justify-center"
          >
            {/* TITLE */}
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="text-center text-base font-extrabold border border-[#B2D0F6] bg-[#F2F8FF] text-[#0668E1] py-xs px-lg rounded-full"
            >
              {title}
            </motion.p>
    
            {/* MAIN HEADING */}
            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: 45,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="text-center text-h1 font-extrabold text-primary"
            >
              {subTitle}
    
            </motion.h2>
    
            {/* DESCRIPTION */}
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="
                mb-lg
                text-center
                text-base
                font-medium
                md:w-[90%]
              "
            >
              {description}
    
    
            </motion.p>
    
    <div ref={containerRef} className="flex flex-col md:flex-row gap-md items-center justify-center">
            {/* BUTTON */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <GradientButton
                text="Unlock Connect EC for Free"
                link=""
                textClassName="btn-text-sync inline-block text-center"
              />
            </motion.div>

             {/* Secondary Button -> Triggers Popup */}
            <motion.button
            variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              type="button"
              onClick={scrollToCalibrator}
              className="group flex justify-center cursor-pointer items-center font-bold border-2 border-[#0668E1] text-[#0668E1] text-xl w-fit h-btn-h rounded-md px-lg transition-all duration-500 ease-out hover:bg-[#F2F8FF] hover:shadow-[0_8px_25px_rgba(6,104,225,0.15)]"
            >
              <span className="btn-text-sync inline-block text-center whitespace-nowrap">Calibrate Hiring Targets</span>
              <span className="inline-flex max-w-0 -translate-x-4 items-center overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-w-8 group-hover:ml-2 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight className="size-iconsize-sm shrink-0 text-[#0668E1]" />
              </span>
            </motion.button>
            </div>
          </motion.div>
        </section>
    </>
  );
}
