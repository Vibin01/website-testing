"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ActorCardProps {
  number: string;
  role: string;
  title: string;
  actions: string[];
  description: string;
  cta: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ActorCard({
  number,
  role,
  title,
  actions,
  description,
  cta,
  isActive,
  onClick,
}: ActorCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      transition={{
        layout: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="group relative md:h-[56vh] w-full overflow-hidden rounded-md text-left outline-none"
    >
      {/* =====================================================
          CARD BACKGROUND
      ====================================================== */}

      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#0668E1] via-[#0A72E8] to-[#4C9CF5]"
      />

      {/* =====================================================
          INACTIVE BACKGROUND
      ====================================================== */}

      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 0 : 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="absolute inset-0 bg-white"
      />

      {/* =====================================================
          ACTIVE LIGHT GLOW
      ====================================================== */}

      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.8,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/20 blur-[90px]"
      />

      {/* =====================================================
          BOTTOM GLOW
      ====================================================== */}

      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 0.7 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-white/10 blur-[80px]"
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <motion.div
        initial={false}
        animate={{
          opacity: isActive ? 0.08 : 0.025,
        }}
        transition={{
          duration: 0.6,
        }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex h-full flex-col p-md">
        {/* ===================================================
            TOP
        ==================================================== */}

        <div className="flex shrink-0 items-center justify-between">
          {/* Number */}

          <motion.span
            animate={{
              color: isActive ? "rgba(255,255,255,0.75)" : "#94A3B8",
            }}
            transition={{
              duration: 0.45,
            }}
            className="text-xs font-semibold tracking-[0.15em]"
          >
            {number}
          </motion.span>

          {/* Role */}

          <motion.span
            animate={{
              borderColor: isActive
                ? "rgba(255,255,255,0.22)"
                : "#E2E8F0",

              backgroundColor: isActive
                ? "rgba(255,255,255,0.10)"
                : "#F8FAFC",

              color: isActive ? "#FFFFFF" : "#64748B",
            }}
            transition={{
              duration: 0.45,
            }}
            className="rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em]"
          >
            {role}
          </motion.span>
        </div>

        {/* ===================================================
            ALIGNMENT INDICATOR
        ==================================================== */}

        <div className="mt-2 flex shrink-0 items-center gap-3">
          <motion.span
            animate={{
              height: isActive ? 32 : 18,
              backgroundColor: isActive ? "#FFFFFF" : "#0668E1",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-[2px] rounded-full"
          />

          <motion.span
            animate={{
              color: isActive ? "rgba(255,255,255,0.75)" : "#0668E1",
            }}
            transition={{
              duration: 0.45,
            }}
            className="text-[9px] font-semibold uppercase tracking-[0.18em]"
          >
            Alignment Layer
          </motion.span>
        </div>

        {/* ===================================================
            MAIN
        ==================================================== */}

        <div className="mt-2 flex min-h-0 flex-1 flex-col">
          {/* =================================================
              TITLE
          ================================================== */}

          <motion.h3
            layout="position"
            animate={{
              color: isActive ? "#FFFFFF" : "#020617",
            }}
            transition={{
              duration: 0.5,
            }}
            className="max-w-[420px] text-h4 font-semibold leading-[1.08] tracking-[-0.035em]"
          >
            {title}
          </motion.h3>

          {/* =================================================
              EXPANDED CONTENT
          ================================================== */}

          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                key="expanded"
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  height: {
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  },

                  opacity: {
                    duration: 0.4,
                    delay: 0.3,
                  },
                }}
                className="overflow-hidden"
              >
                {/* =================================================
                    CORE BEHAVIOURS
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.45,
                  }}
                  className="mt-3"
                >
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    Core Behaviours
                  </p>

                  {/* Actions */}

                  <div className="flex flex-wrap gap-2">
                    {actions.map((action, index) => (
                      <motion.span
                        key={action}
                        initial={{
                          opacity: 0,
                          y: 12,
                          scale: 0.94,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: 0.6 + index * 0.14,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm"
                      >
                        {action}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-3 text-sm leading-6 text-white/75"
                >
                  {description}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =================================================
              CTA
          ================================================== */}

          <motion.div
            layout
            className="mt-auto pt-2"
          >
            <motion.div
              animate={{
                backgroundColor: isActive
                  ? "rgba(255,255,255,0.20)"
                  : "#E2E8F0",
              }}
              transition={{
                duration: 0.45,
              }}
              className="mb-2 h-px"
            />

            <div className="flex items-center justify-between">
              <motion.span
                animate={{
                  color: isActive ? "#FFFFFF" : "#0F172A",
                  opacity: isActive ? 1 : 0.65,
                }}
                transition={{
                  duration: 0.4,
                  delay: isActive ? 1.25 : 0,
                }}
                className="text-xs font-semibold"
              >
                {cta}
              </motion.span>

            </div>
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}