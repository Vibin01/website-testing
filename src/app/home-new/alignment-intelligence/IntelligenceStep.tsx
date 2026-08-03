"use client";

import { motion } from "motion/react";

interface IntelligenceStepProps {
  number: string;
  label: string;
  title: string;
  description: string;
  isLast: boolean;
  index?: number;
}

export default function IntelligenceStep({
  number,
  label,
  title,
  description,
  isLast,
  index = 0,
}: IntelligenceStepProps) {
  // Each step starts after the previous step
  const stepDelay = index * 1.15;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.45,
        delay: stepDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* ================================
          CONNECTING LINE
      ================================= */}

      {!isLast && (
        <div
          className="
            absolute
            left-[calc(50%+24px)]
            right-[-50%]
            top-6
            hidden
            h-px
            overflow-hidden
            bg-slate-200
            lg:block
          "
        >
          <motion.div
            className="
              h-full
              w-full
              origin-left
              bg-[#0668E1]
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
              duration: 0.9,
              delay: 0.65 + index * 1.15,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      {/* ================================
          NODE
      ================================= */}

      <div className="relative z-10 mx-auto w-fit">
        {/* Pulse */}

        <motion.div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-[#0668E1]
          "
          initial={{
            scale: 1,
            opacity: 0,
          }}
          whileInView={{
            scale: [1, 1.3, 1],
            opacity: [0, 0.25, 0],
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: 0.35 + stepDelay,
            ease: "easeOut",
          }}
        />

        {/* Main Circle */}

        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            delay: stepDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 8px 25px rgba(6,104,225,0.15)",
          }}
          className="
            relative
            flex
            h-12
            w-12
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-[#0668E1]/25
            bg-white
            text-lg
            font-semibold
            text-[#0668E1]
          "
        >
          {number}

          {/* Blinking Dot */}

          <motion.span
            className="
              absolute
              bottom-[3px]
              right-[3px]
              h-1.5
              w-1.5
              rounded-full
              bg-[#0668E1]
            "
            animate={{
              opacity: [1, 0.25, 1],
              scale: [1, 0.75, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        </motion.div>
      </div>

      {/* ================================
          CONTENT
      ================================= */}

      <motion.div
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
          duration: 0.35,
          delay: 0.15 + stepDelay,
        }}
        className="mt-5 px-2 text-center"
      >
        {/* Label */}

        <p
          className="
            text-lg
            font-bold
            tracking-[0.12em]
            text-[#0668E1]
          "
        >
          {label}
        </p>

        {/* Title */}

        <h3
          className="
            mx-auto
            mt-2
            max-w-[190px]
            text-xl
            font-semibold
            leading-tight
            tracking-[-0.02em]
            text-slate-950
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-2
            max-w-[190px]
            text-md
            leading-[1.5]
            text-slate-500
          "
        >
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}