"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/common/Button/GradientButton";

export default function AlignmentHero() {
  return (
    <section className="relative w-full   ">
      <div className="mx-auto flex items-center justify-between">
        
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 w-1/2  flex flex-col pt-[5%] "
        >
          {/* Small Title */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className=" text-xl font-bold"
          >
            <span className="text-primary">Situation Change</span> - You Know What You Would Do.
          </motion.p>

          {/* Heading */}
          <h1 className="text-h2 font-extrabold leading-tight">
           But, Do You Know What 
           <br/>
           <span className="text-primary">Happens Within You?</span>

          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-sm  text-base font-medium "
          >
            See how your{" "}
            <span className="font-bold">Head, Heart, and Hand</span>{" "}
            work together across changing
            <br className="hidden xl:block" />
            hiring situations — and discover the Alignment Mode that emerges.
          </motion.p>

        

<motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }} className="mt-md ">
         <GradientButton text="Know what happens within you" link=""/>
      </motion.div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
      <motion.div
  initial={{
    opacity: 0,
    scale: 0.9,
    x: 50,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    x: 0,
  }}
  transition={{
    duration: 1,
    delay: 0.3,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    relative w-1/2
    scale-120
    justify-center items-center
    
    
  "
>
  <Image
    src="/resources/alignment-test/alignment-hero.svg"
    alt="Professional woman using a tablet"
    height={1000}
width={1000}
    priority
    className="object-cover w-[100%]"
  />
</motion.div>
      </div>
    </section>
  );
}