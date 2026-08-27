"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/common/Button/GradientButton";

export default function AlignmentRespont() {
  return (
    <section className="w-full overflow-hidden ">
      <div className="mx-auto flex  items-center ">
        <div className="grid w-full grid-cols-1  md:grid-cols-2 items-center ">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* Small heading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-xs text-xl font-bold uppercase tracking-wide text-primary"
            >
              Discover Your Alignment Within
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-h2 font-extrabold leading-tight"
            >
              See How Your
              <br />
              Alignment Responds
              <br />
              Through Change.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-sm text-base font-medium md:w-[80%]"
            >
              Turn 15 hiring situations into a clearer view of how
              understanding, intention, and action work together when
              conditions change.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-lg"
            >
              <GradientButton link="" text="Take the Full Alignment Test"/>
             
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex items-center justify-center md:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src="/resources/alignment-test/alignment-illustration.svg"
                alt="Alignment test illustration"
                width={500}
                height={400}
                priority
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}