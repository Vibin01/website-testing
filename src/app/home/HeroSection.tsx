"use client";

import { motion } from "framer-motion";
import AlignmentTabs from "./DemoHeroSection";


export const HeroSection = () => {


  return (
    <section className="flex items-center justify-center px-[5%] sm:px-0 pb-[4%]">
     <motion.div
        initial={{
          opacity: 0,
          y: 90,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-[13%] flex w-full flex-col items-center justify-center text-center md:mt-[3%]"
      >
        <p className="font-extrabold text-h5 text-[#0668E1]">
          Hiring Alignment{" "}
          <span className="inline-flex  gap-xs">
            System
            <img
              src={"/icons/tm-badge.svg"}
              alt="tm-badge"
              className="size-iconsize-sm inline scale-90"
            />
          </span>
        </p>

        <h1 className="font-extrabold text-h1 pb-lg leading-tight">
          Alignment Preserves
          <br/><span className="text-[#0668E1]"> Hiring Continuity.</span>
        </h1>
<div className="w-full mt-md">
          <AlignmentTabs />

      </div>
      </motion.div>
    </section>
  );
};


