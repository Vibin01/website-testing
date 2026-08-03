"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { intelligenceSteps } from "./intelligence.data";
import IntelligenceStep from "./IntelligenceStep";

export default function AlignmentIntelligence() {
  return (
    <section
      className="
        relative
        h-[100vh]
        max-h-[100vh]
        w-full
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          
          md:h-full
          flex-col
          justify-center
          px-[5%]
          py-[2%]
         
        "
      >
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto  text-center"
        >
          {/* Label */}

          <div className="mb-1 flex items-center justify-center gap-2">
           
            <p
              className="
                text-base
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#0668E1]
              "
            >
              Alignment Intelligence
            </p>
          </div>

          {/* Heading */}

          <h2
            className="
              text-h2
              font-bold
              text-slate-950
           leading-tight
            "
          >
            From Hiring Visibility to
            <br />

            <span className="text-[#0668E1]">
               Timely Intervention
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-sm
              text-xl
              text-slate-500
            "
          >
            Visibility reveals the shift. Alignment Intelligence
            enables coherent adaptation within actors and across
            interactions.
          </p>
        </motion.div>

        {/* =========================================
            JOURNEY
        ========================================= */}
<div className="h-[70vh] md:h-auto
          overflow-y-scroll
          md:overflow-y-visible">
        <div className="mt-8 lg:mt-10 ">
          <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            {intelligenceSteps.map((step, index) => (
              <IntelligenceStep
                key={step.number}
                {...step}
                index={index}
                isLast={index === intelligenceSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* =========================================
            RESULT
        ========================================= */}

      <motion.div
  initial={{
    opacity: 0,
    y: 15,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.4,
  }}
  transition={{
    duration: 0.6,
    delay: 0.5,
  }}
  className="mx-auto mt-xl w-full max-w-5xl"
>
  {/* Result connector */}
  <div className="flex items-center justify-center gap-3 sm:gap-5">
    {/* Left line */}
    <div className="relative h-px flex-1 overflow-hidden bg-slate-200">
      <motion.div
        className="
          absolute
          right-0
          top-0
          h-full
          w-full
          origin-right
          bg-[linear-gradient(90deg,transparent,#0668E1)]
        "
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: "easeOut",
        }}
      />
    </div>

    {/* Left dot */}
    <motion.span
      className="
        relative
        flex
        h-2
        w-2
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#0668E1]
      "
      animate={{
        scale: [1, 1.35, 1],
        opacity: [1, 0.55, 1],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="absolute h-4 w-4 rounded-full border border-[#0668E1]/20" />
    </motion.span>

    {/* Center Result */}
    <div className="flex shrink-0 flex-col items-center px-1 text-center sm:px-3">
      <motion.p
        initial={{
          opacity: 0,
          y: 5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.4,
          delay: 0.9,
        }}
        className="
          text-lg
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#0668E1]
        "
      >
        The Result
      </motion.p>

      <h3
        className="
          mt-1
          whitespace-nowrap
          text-xl
          font-semibold
          tracking-[-0.03em]
          text-slate-950
        "
      >
        Seamless Yield Emerges
      </h3>
    </div>

    {/* Right dot */}
    <motion.span
      className="
        relative
        flex
        h-2
        w-2
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#0668E1]
      "
      animate={{
        scale: [1, 1.35, 1],
        opacity: [1, 0.55, 1],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.9,
      }}
    >
      <span className="absolute h-4 w-4 rounded-full border border-[#0668E1]/20" />
    </motion.span>

    {/* Right line */}
    <div className="relative h-px flex-1 overflow-hidden bg-slate-200">
      <motion.div
        className="
          absolute
          left-0
          top-0
          h-full
          w-full
          origin-left
          bg-[linear-gradient(90deg,#0668E1,transparent)]
        "
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: "easeOut",
        }}
      />
    </div>
  </div>

  {/* Supporting copy */}
  <motion.p
    initial={{
      opacity: 0,
      y: 8,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.5,
      delay: 1,
    }}
    className="
      mx-auto
      mt-3
      text-center
      text-md
      font-medium
      max-w-2xl
      leading-5
      text-slate-500
    "
  >
    When alignment is seen early, understood clearly and strengthened
    in time—within actors and across interactions—hiring continuity
    remains coherent.
  </motion.p>
</motion.div>
</div>
       
      </div>
    </section>
  );
}