"use client";

import { motion } from "framer-motion";
import { alignmentMechanisms } from "./alignmentEngine.data";

export default function AlignmentEngine() {
  return (
    <section className="relative isolate max-h-[100vh] px-[5%] py-[2%] overflow-hidden bg-[#F7FAFC] text-[#07111F]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue ambient glow */}
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#0668E1]/[0.06] blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,17,31,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(7,17,31,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto flex h-full flex-col ">
        {/* =======================================================
            HEADER
        ======================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl shrink-0"
        >
        

          {/* Heading */}

          <h2 className="mt-4 max-w-3xl text-h2 leading-tight font-semibold text-[#07111F] ">
            The Alignment

            <motion.span
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="text-[#07111F]/40"
            >
               {" "}Engine
            </motion.span>
          </h2>

          {/* Description */}

          <p className="mt-3 max-w-3xl text-xl leading-6 text-slate-600">
            Connect EC’s proprietary Alignment Architecture Approach turns
            behavioural signals into visibility across the hiring system —
            from the moment a decision is required to the patterns that emerge
            across the ecosystem.
          </p>
        </motion.div>

        {/* =======================================================
            MECHANISMS
        ======================================================== */}

<div className="h-[70vh] md:h-auto
          overflow-y-scroll
          md:overflow-y-visible">
        <div className="relative mt-4 min-h-0 flex-1">
          {/* Connecting line */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "left",
            }}
            className="pointer-events-none absolute left-[8%] right-[8%] top-[27px] hidden h-px bg-gradient-to-r from-transparent via-[#0668E1]/25 to-transparent lg:block"
          />

          <div className="grid h-full gap-md lg:grid-cols-3">
            {alignmentMechanisms.map((mechanism, index) => (
              <motion.article
                key={mechanism.number}
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative flex min-h-0 flex-col"
              >
                {/* =================================================
                    NODE
                ================================================== */}

                <div className="relative z-10 mb-5 flex shrink-0 items-center">
                  <motion.div
                    initial={{
                      scale: 0.7,
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
                      delay: index * 0.12 + 0.15,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 180,
                      damping: 14,
                    }}
                    className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#07111F]/10 bg-[#F7FAFC]"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0668E1]/30 bg-[#0668E1]/[0.07] text-xs font-semibold text-[#0668E1] transition-colors duration-300 group-hover:border-[#0668E1] group-hover:bg-[#0668E1] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(6,104,225,0.25)]"
                    >
                      {mechanism.number}
                    </motion.div>
                  </motion.div>

                  <div className="ml-3 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                    Mechanism {mechanism.number}
                  </div>
                </div>

                {/* =================================================
                    CARD
                ================================================== */}

                <motion.div
                  whileHover={{
                    boxShadow: "0 20px 60px rgba(6, 104, 225, 0.10)",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[24px] border border-[#07111F]/[0.08] bg-white/80 p-6 shadow-[0_12px_40px_rgba(7,17,31,0.04)] backdrop-blur-sm transition-colors duration-500 group-hover:border-[#0668E1]/30"
                >
                  {/* Card Glow */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#0668E1]/[0.08] blur-3xl"
                  />

                  {/* Level */}

                  <div className="relative flex shrink-0 items-center justify-between gap-3">
                    <span className="rounded-full border border-[#07111F]/[0.08] bg-[#F7FAFC] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                      {mechanism.level}
                    </span>

                    <span className="text-right text-[9px] font-medium uppercase tracking-[0.14em] text-slate-400">
                      {mechanism.signal}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="relative mt-3 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0668E1]">
                      {mechanism.label}
                    </p>

                    <h3 className="mt-2  text-base font-semibold leading-[1.15] tracking-[-0.02em] text-[#07111F]">
                      {mechanism.title}
                    </h3>

                    <p className="mt-2 text-md leading-5 text-slate-500 lg:text-sm lg:leading-6">
                      {mechanism.description}
                    </p>
                  </div>

                  {/* Bottom */}

                  <div className="relative mt-5 shrink-0">
                    <div className="mb-4 h-px bg-[#07111F]/[0.07]" />

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">
                        Visibility layer
                      </span>

                      <div className="flex items-center gap-2">
                        <motion.span
                          animate={{
                            opacity: [0.4, 1, 0.4],
                            scale: [0.9, 1.15, 0.9],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-1.5 w-1.5 rounded-full bg-[#0668E1] shadow-[0_0_8px_rgba(6,104,225,0.5)]"
                        />

                        <span className="text-[10px] font-medium text-slate-500">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

 </div>
      </div>
    </section>
  );
}