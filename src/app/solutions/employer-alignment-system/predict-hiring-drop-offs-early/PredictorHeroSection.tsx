"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import AlignmentIntentCalculator from "./AlignmentIntentCalculator";
import { GradientButton } from "@/components/common/Button/GradientButton";

interface PredictorHeroSectionProps {
  title?: string;
  subTitle?: string;
  description?: string;
}

export default function PredictorHeroSection({
  title = "EASY PREDICTOR",
  subTitle = "Hiring Outcomes, Aligned.",
  description = "Detect the Shift. Read the Risk. Intervene Earlier.",
}: PredictorHeroSectionProps) {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

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
              className="text-center text-h5 font-extrabold border border-[#B2D0F6] bg-[#F2F8FF] text-[#0668E1] py-sm px-lg rounded-full"
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
              className="text-center text-h1 font-extrabold"
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
    
    <div className="flex flex-col md:flex-row gap-md">
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
              onClick={() => setIsCalculatorOpen(true)}
              className="group gap-xs flex justify-center cursor-pointer items-center  cursor-pointer font-bold border-2 border-[#0668E1] text-[#0668E1] text-xl w-fit h-btn-h rounded-md px-lg"
            >
              <span>Calculate Intervention Time</span>
              <ArrowRight className="size-iconsize-sm text-primary" />
            </motion.button>
            </div>
          </motion.div>
        </section>

      {/* Popup Modal with shadcn Dialog */}
      <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
        <DialogContent
          className="w-[90%] md:w-[70%] mx-auto p-0 border-0 bg-transparent shadow-none max-h-[92vh] overflow-y-scroll scrollbar-hidden"
          showCloseButton={false}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <DialogTitle className="sr-only">
            Intervention Time Calculator
          </DialogTitle>
          <DialogDescription className="sr-only">
            Estimate how early alignment signals may emerge before an outcome and how much intervention time that earlier visibility may create.
          </DialogDescription>
          <AlignmentIntentCalculator
            onClose={() => setIsCalculatorOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
