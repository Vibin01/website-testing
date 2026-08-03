"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { alignmentActors } from "./alignmentActors.data";
import ActorCard from "./ActorCard";

export default function AlignmentActors() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeActor = alignmentActors[activeIndex];

  return (
    <section className="relative isolate  max-h-[120vh] overflow-hidden bg-[#F7FAFC] text-slate-950">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Animated blue glow */}

        <motion.div
          animate={{
            x: `${(activeIndex - 1) * 100}px`,
            opacity: 0.7,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-1/2 top-[-300px] h-[600px] w-[850px] -translate-x-1/2 rounded-full bg-[#0668E1]/[0.045] blur-[130px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-8 lg:px-8 lg:py-10">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="shrink-0"
        >
          {/* Eyebrow */}

          <div className="flex  items-center gap-3">
           
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0668E1] sm:text-xs">
              Alignment for Every Actor
            </p>
          </div>


          <div className="mt-4 flex flex-col  ">
            <h2 className="max-w-2xl text-h2 leading-tight font-semibold tracking-[-0.04em] text-slate-950 ">
              Alignment Built Around
              <br />

              <span className="text-slate-950/35">
                Every Actor.
              </span>
            </h2>

            <p className=" text-xs leading-5 text-slate-500 sm:text-sm">
              Candidates seek career progress. Recruiters sustain hiring
              delivery. Employers pursue hiring targets.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            ACTOR CARDS
        ==================================================== */}
<div className="h-[70vh] md:h-auto
          overflow-y-scroll
          md:overflow-y-visible">
        <div className="mt-5 min-h-0 flex-1">
          <div className="flex h-full min-h-0 flex-col gap-3 lg:flex-row">
            {alignmentActors.map((actor, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={actor.number}
                  layout
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: index * 0.1,
                    },
                    y: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    layout: {
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  animate={{
                    flex: isActive ? 2.2 : 1,
                  }}
                  className="min-h-0 flex-1"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <ActorCard
                    {...actor}
                    isActive={isActive}
                    onClick={() => setActiveIndex(index)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
</div>
        {/* ===================================================
            BOTTOM SYSTEM BAR
        ==================================================== */}

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
            duration: 0.5,
            delay: 0.45,
          }}
          className="mt-4 shrink-0 flex items-center justify-end" 
        >
          <div className="md:w-[60%] flex items-center justify-between rounded-2xl border border-slate-200 bg-white/75 px-5 py-3 shadow-sm backdrop-blur-md">
            {/* Left */}

            <div className="flex items-center gap-3">
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#0668E1]"
              />

              <span className="text-[10px] text-slate-500 sm:text-xs">
                Different goals. One connected hiring system.
              </span>
            </div>

            {/* Right */}

            <motion.div
              key={activeActor.role}
              initial={{
                opacity: 0,
                x: 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="flex items-center gap-2"
            >
              <span className="hidden text-[9px] uppercase tracking-[0.15em] text-slate-400 sm:block">
                Active Actor
              </span>

              <span className="text-xs font-semibold text-[#0668E1]">
                {activeActor.role}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}