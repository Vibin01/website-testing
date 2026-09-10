"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/common/Button/GradientButton";

type HeroSectionProps = {
  title: string;
  description: string;
  subTitle:string;
};

export const HeroSection = ({
  title,
  description,
  subTitle,
}: HeroSectionProps) => {
  return (
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
      </motion.div>
    </section>
  );
};