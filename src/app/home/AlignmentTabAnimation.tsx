"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";

import { MdGroups } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const withinRoles = [
  {
    role: "Employer",
    imgSmile: "",
    img: "/icons/employer-round-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Recruiter",
    img: "/icons/recruiters-round-icon.svg",
    imgSmile: "",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Candidate",
    imgSmile: "",
    img: "/icons/candidate-round-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
];

const withinTextSteps = [
  { text: "Understanding", delay: 1.5 },
  { text: "Intention", delay: 3.25 },
  { text: "Action", delay: 5.0 },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

type ProcessState =
  | "within"
  | "across"
  | "aligned";

// ============================================================
// PROCESS TAB LINE
// ============================================================

function ProcessTabLine({
  activeTab,
  animationKey,
}: {
  activeTab: "within" | "across";
  animationKey: number;
}) {
  return (
    <div
      className="
        pointer-events-none
        absolute
        bottom-[-2px]
        left-0
        right-0
        h-[2px]
        overflow-hidden
      "
    >
      {/* BASE LINE */}

      <div className="absolute inset-0 bg-[#EDEDED]" />

      {/* =====================================================
          WITHIN
      ===================================================== */}

      {activeTab === "within" && (
        <motion.div
          key={`within-${animationKey}`}
          className="
            absolute
            left-0
            top-0
            h-full
            overflow-hidden
            bg-[#0668E1]
          "
          initial={{
            left: "0%",
            width: "0%",
          }}
          animate={{
            left: [
              "0%",
              "0%",
              "0%",
              "50%",
            ],
            width: [
              "0%",
              "50%",
              "50%",
              "0%",
            ],
          }}
          transition={{
            duration: 8.5,
            times: [
              0,
              0.90,
              0.92,
              1,
            ],
            ease: "easeInOut",
          }}
        />
      )}

      {/* =====================================================
          ACROSS
      ===================================================== */}

      {activeTab === "across" && (
        <motion.div
          key={`across-${animationKey}`}
          className="
            absolute
            top-0
            h-full
            overflow-hidden
            bg-[#0668E1]
          "
          initial={{
            left: "50%",
            width: "0%",
          }}
          animate={{
            left: [
              "50%",
              "50%",
              "50%",
              "100%",
            ],
            width: [
              "0%",
              "50%",
              "50%",
              "0%",
            ],
          }}
          transition={{
            duration: 7,
            times: [
              0,
              0.92,
              0.94,
              1,
            ],
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

// ============================================================
// TAB BUTTON
// ============================================================

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        relative
        flex
        cursor-pointer
        items-center
        justify-center
        gap-[clamp(4px,0.4vw,8px)]
        py-sm
        text-[12px]
        sm:text-xl
        md:text-base
        font-bold
      "
    >
      <span
        className={
          active
            ? "text-[#0668E1]"
            : "text-[#303030]"
        }
      >
        {children}
      </span>
    </button>
  );
}

function GapConnector({
  id,
  direction = "forward",
  delay = 0,
  entryDelay = 1.5,
  isMobile = false,
  showOutline = false,
}: {
  id: string;
  direction?: "forward" | "reverse";
  delay?: number;
  entryDelay?: number;
  isMobile?: boolean;
  showOutline?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0, 1, 1, 0, 0],
      }}
      transition={{
        duration: 7,
        times: [
          0,
          entryDelay / 7,
          (entryDelay + 0.3) / 7,
          3.8 / 7,
          4.2 / 7,
          1,
        ],
        ease: "linear",
      }}
      className="relative flex w-full h-full items-center justify-center"
    >
      {isMobile ? (
        <svg
          viewBox="0 0 80 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full overflow-visible mt-4"
          preserveAspectRatio="none"
        >
          {/* MOBILE FAINT BACKGROUND GUIDE TRACKS (ONLY IF showOutline IS EXPLICITLY TRUE) */}
          {showOutline && (
            <>
              <path
                d="M 3 20 C 6 19, 9 15.5, 12 14 C 14.5 12.5, 16 3, 19 3 L 61 3 C 64 3, 65.5 12.5, 68 14 C 71 15.5, 74 19, 77 20"
                fill="none"
                stroke="#0668E1"
                strokeOpacity="0"
                strokeWidth="1"
              />
              <path
                d="M 3 8 C 6 9, 9 12.5, 12 14 C 14.5 15.5, 16 25, 19 25 L 61 25 C 64 25, 65.5 15.5, 68 14 C 71 12.5, 74 9, 77 8"
                fill="none"
                stroke="#0668E1"
                strokeOpacity="0"
                strokeWidth="1"
              />
            </>
          )}

          {/* MOBILE CROSSOVER TOP RAIL: EXTRA GAP IN CENTER INSIDE */}
          <motion.path
            d="M 3 20 C 6 19, 9 15.5, 12 14 C 14.5 12.5, 16 3, 19 3 L 61 3 C 64 3, 65.5 12.5, 68 14 C 71 15.5, 74 19, 77 20"
            fill="none"
            stroke="#0668E1"
            strokeWidth="1"
            strokeLinecap="round"
            pathLength={84}
            strokeDasharray="3.5 17.5"
            animate={{
              strokeDashoffset:
                direction === "forward" ? [-10.5, -73.5] : [-10.5, 52.5],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "linear",
              delay: entryDelay + delay,
            }}
          />

          {/* MOBILE CROSSOVER BOTTOM RAIL: EXTRA GAP IN CENTER INSIDE */}
          <motion.path
            d="M 3 8 C 6 9, 9 12.5, 12 14 C 14.5 15.5, 16 25, 19 25 L 61 25 C 64 25, 65.5 15.5, 68 14 C 71 12.5, 74 9, 77 8"
            fill="none"
            stroke="#0668E1"
            strokeWidth="1"
            strokeLinecap="round"
            pathLength={84}
            strokeDasharray="3.5 17.5"
            animate={{
              strokeDashoffset:
                direction === "forward" ? [0, 63] : [0, -63],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "linear",
              delay: entryDelay + delay,
            }}
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 120 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full overflow-visible"
          preserveAspectRatio="none"
        >
          {/* DESKTOP FAINT BACKGROUND GUIDE TRACKS */}
          <path
            d="M 4 20 C 8 19, 12 15.5, 16 14 C 20 12.5, 23 3, 27 3 L 93 3 C 97 3, 100 12.5, 104 14 C 108 15.5, 112 19, 116 20"
            fill="none"
            stroke="#0668E1"
            strokeOpacity="0"
            strokeWidth="1"
          />
          <path
            d="M 4 8 C 8 9, 12 12.5, 16 14 C 20 15.5, 23 25, 27 25 L 93 25 C 97 25, 100 15.5, 104 14 C 108 12.5, 112 9, 116 8"
            fill="none"
            stroke="#0668E1"
            strokeOpacity="0"
            strokeWidth="1"
          />

          {/* DESKTOP CROSSOVER TOP RAIL: EXTRA GAP IN CENTER INSIDE */}
          <motion.path
            d="M 4 20 C 8 19, 12 15.5, 16 14 C 20 12.5, 23 3, 27 3 L 93 3 C 97 3, 100 12.5, 104 14 C 108 15.5, 112 19, 116 20"
            fill="none"
            stroke="#0668E1"
            strokeWidth="1"
            strokeLinecap="round"
            pathLength={125}
            strokeDasharray="5 32"
            animate={{
              strokeDashoffset:
                direction === "forward" ? [-30, -150] : [-30, 90],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "linear",
              delay: entryDelay + delay,
            }}
          />

          {/* DESKTOP CROSSOVER BOTTOM RAIL: EXTRA GAP IN CENTER INSIDE */}
          <motion.path
            d="M 4 8 C 8 9, 12 12.5, 16 14 C 20 15.5, 23 25, 27 25 L 93 25 C 97 25, 100 15.5, 104 14 C 108 12.5, 112 9, 116 8"
            fill="none"
            stroke="#0668E1"
            strokeWidth="1"
            strokeLinecap="round"
            pathLength={125}
            strokeDasharray="5 32"
            animate={{
              strokeDashoffset:
                direction === "forward" ? [0, 120] : [0, -120],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "linear",
              delay: entryDelay + delay,
            }}
          />
        </svg>
      )}
    </motion.div>
  );
}

function AcrossTextBox({ animationKey }: { animationKey: number }) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const initialLeft0 = isMobile ? "10%" : "23.5%";
  const initialLeft2 = isMobile ? "90%" : "76.5%";

  const finalLeft0 = isMobile ? "32%" : "44%";
  const finalLeft2 = isMobile ? "68%" : "56%";

  return (
    <motion.div
      key={`across-text-box-${animationKey}-${isMobile ? "m" : "d"}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{
        opacity: [0, 1, 1, 0, 0],
        y: [15, 0, 0, 0, 0],
      }}
      transition={{
        opacity: {
          duration: 7,
          times: [0, 0.4 / 7, 5.0 / 7, 5.2 / 7, 1],
          ease: "linear",
        },
        y: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      className="
        pointer-events-none
        absolute
        left-0
        right-0
        top-[clamp(75px,calc(100_/_var(--width)*100vw),405px)]
        z-30
        h-[clamp(39px,calc(95_/_var(--width)*100vw),95px)]
        w-full
      "
    >
      {/* ANIMATED MOVING DASHED BORDER BOX: SYMMETRICALLY WRAPS AROUND THE 3 ACTOR TEXTS */}
      {(
        <div
          className="
            pointer-events-none
            absolute
            top-0
            bottom-0
            rounded-sm
            md:rounded-xl
          "
          style={{
            left: isMobile
              ? "clamp(-20px, -4.5vw, -14px)"
              : "calc(23.5% - clamp(65px, 6vw, 95px))",
            right: isMobile
              ? "clamp(-20px, -4.5vw, -14px)"
              : "calc(23.5% - clamp(65px, 6vw, 95px))",
          }}
        >
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 7,
              times: [
                0,
                1.0 / 7,
                1.3 / 7,
                3.8 / 7,
                4.2 / 7,
                1,
              ],
              ease: "linear",
            }}
            className="pointer-events-none absolute inset-0 size-full overflow-visible rounded-2xl"
          >
            {/* INITIAL 2 DOTTED LINES: Starts 1 sec after text, 5 dashes each at left-top (0) and right-bottom (500) */}
            <motion.rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="16"
              ry="16"
              pathLength={1000}
              fill="none"
              stroke="#0668E1"
              strokeWidth={isMobile ? 1 : 2}
              strokeLinecap="round"
              strokeDasharray="5 7 5 7 5 7 5 7 5 447"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                strokeDashoffset: [0, -1000],
              }}
              transition={{
                opacity: {
                  delay: 1.0,
                  duration: 0.35,
                  ease: "easeOut",
                },
                strokeDashoffset: {
                  delay: 1.0,
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            {/* CONVERT TO 4 DOTTED LINES: Adds 2 intermediate 5-dash segments (at 250 & 750) fading in smoothly */}
            <motion.rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="16"
              ry="16"
              pathLength={1000}
              fill="none"
              stroke="#0668E1"
              strokeWidth={isMobile ? 1 : 2}
              strokeLinecap="round"
              strokeDasharray="5 7 5 7 5 7 5 7 5 447"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                strokeDashoffset: [-250, -1250],
              }}
              transition={{
                opacity: {
                  delay: 2.2,
                  duration: 0.4,
                  ease: "easeOut",
                },
                strokeDashoffset: {
                  delay: 1.0,
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          </motion.svg>
        </div>
      )}

      {/* EXPECTATIONS: Directly below Actor 0 (Employer) at same position & gap */}
      <motion.div
        initial={{ left: initialLeft0 }}
        style={{ left: initialLeft0 }}
        animate={{
          left: [
            initialLeft0,
            initialLeft0,
            finalLeft0,
            finalLeft0,
          ],
        }}
        transition={{
          duration: 7,
          times: [0, 4.4 / 7, 5.0 / 7, 1],
          ease: "easeInOut",
        }}
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <span className="whitespace-nowrap font-bold text-sm md:text-xl">
          Expectations
        </span>
      </motion.div>

      {/* GAP 1: FULLY OCCUPIES THE SPACE BETWEEN EXPECTATIONS & PRIORITIES WITH EXTRA HEIGHT */}
      <div
        className="absolute top-1/2 z-10 flex h-8 sm:h-9 md:h-8 -translate-y-1/2 items-center justify-center"
        style={{
          left: isMobile
            ? "calc(10% + clamp(28px, 7.5vw, 34px))"
            : "calc(23.5% + clamp(55px, 4.8vw, 75px))",
          right: isMobile
            ? "calc(50% + clamp(24px, 6.5vw, 30px))"
            : "calc(50% + clamp(42px, 3.5vw, 55px))",
        }}
      >
        <GapConnector id="gap-1" direction="forward" isMobile={isMobile} />
      </div>

      {/* PRIORITIES: Directly below Actor 1 (Recruiter) at center (50%) */}
      <motion.div
        style={{ left: "50%" }}
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          times: [0, 4.4 / 7, 5.0 / 7, 1],
          ease: "easeInOut",
        }}
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <span className="whitespace-nowrap font-bold text-sm md:text-xl">
          Priorities
        </span>
      </motion.div>

      {/* GAP 2: FULLY OCCUPIES THE SPACE BETWEEN PRIORITIES & ACTIONS WITH EXTRA HEIGHT */}
      <div
        className="absolute top-1/2 z-10 flex h-8 sm:h-9 md:h-8 -translate-y-1/2 items-center justify-center"
        style={{
          left: isMobile
            ? "calc(50% + clamp(24px, 6.5vw, 30px))"
            : "calc(50% + clamp(42px, 3.5vw, 55px))",
          right: isMobile
            ? "calc(10% + clamp(18px, 5vw, 24px))"
            : "calc(23.5% + clamp(36px, 3.2vw, 50px))",
        }}
      >
        <GapConnector id="gap-2" direction="forward" delay={0.15} isMobile={isMobile} />
      </div>

      {/* ACTIONS: Directly below Actor 2 (Candidate) at same position & gap */}
      <motion.div
        initial={{ left: initialLeft2 }}
        style={{ left: initialLeft2 }}
        animate={{
          left: [
            initialLeft2,
            initialLeft2,
            finalLeft2,
            finalLeft2,
          ],
        }}
        transition={{
          duration: 7,
          times: [0, 4.4 / 7, 5.0 / 7, 1],
          ease: "easeInOut",
        }}
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <span className="whitespace-nowrap font-bold text-sm md:text-xl">
          Actions
        </span>
      </motion.div>
    </motion.div>
  );
}

const acrossSubtitles = ["Expectations", "Priorities", "Action"] as const;

function WithinActor({
  role,
  index,
  processState,
  animationKey,
}: {
  role: {
    role: string;
    img: string;
    url: string;
  };
  index: number;
  processState: ProcessState;
  animationKey: number;
}) {
  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkMobile
      );
    };
  }, []);

  const isAligned =
    processState === "aligned";

  /*
   * ==========================================================
   * INITIAL POSITIONS
   * ==========================================================
   */

  const initialLeft = isMobile
    ? index === 0
      ? "10%"
      : index === 1
        ? "50%"
        : "90%"
    : index === 0
      ? "23.5%"
      : index === 1
        ? "50%"
        : "76.5%";

  /*
   * ==========================================================
   * FINAL POSITIONS
   * ==========================================================
   */

  const finalLeft = isMobile
    ? index === 0
      ? "32%"
      : index === 1
        ? "50%"
        : "68%"
    : index === 0
      ? "44%"
      : index === 1
        ? "50%"
        : "56%";

  /*
   * ==========================================================
   * SIZE
   * ==========================================================
   */

  const finalSize =
    index === 1
      ? "clamp(65px, calc(85 / var(--width) * 100vw), 400px)"
      : "clamp(55px, calc(70 / var(--width) * 100vw), 380px)";

  const initialSize =
    "clamp(65px, calc(85 / var(--width) * 100vw), 400px)";

  return (
    <motion.div
      key={`actor-${role.role}-${animationKey}`}
      initial={{
        left: initialLeft,
        top: 0,
        zIndex:
          index === 1 ? 50 : 20,
      }}
      animate={{
        /*
         * IMPORTANT:
         *
         * WITHIN
         * → stay initial
         *
         * ACROSS
         * → stay initial until 2.4s, then join to center (50%)
         *
         * ALIGNED
         * → move to final place
         */

        left: isAligned
          ? finalLeft
          : processState === "across"
            ? [
              initialLeft,
              initialLeft,
              finalLeft,
              finalLeft,
            ]
            : initialLeft,

        top: 0,

        zIndex: isAligned
          ? index === 1
            ? 40
            : 20
          : processState === "across"
            ? index === 1
              ? 40
              : 25
            : 20,

        marginTop: "0px",
      }}
      transition={{
        left: isAligned
          ? {
            duration: 0.6,
            delay:
              index === 1 ? 0 : 0.08,
            ease,
          }
          : processState === "across"
            ? {
              duration: 7,
              times: [0, 4.4 / 7, 5.0 / 7, 1],
              ease: "easeInOut",
            }
            : {
              duration: 0.5,
              ease,
            },
      }}
      className="
        absolute
        top-0
        z-20
        flex
        w-[1px]
        -translate-x-1/2
        flex-col
        items-center
      "
    >


      {/* =====================================================
          AVATAR
      ===================================================== */}

      <motion.div
        key={`avatar-${animationKey}`}
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease,
        }}
        className="
          absolute
          left-1/2
          top-0
          z-20
          flex
          -translate-x-1/2
          items-center
          justify-center
        "
        style={{
          height: initialSize,
        }}
      >
        {/* AVATAR WITH 3-PART CIRCLE BG (: 33% -> 66% -> 100%) */}

        <motion.div
          initial={{
            width: initialSize,
            height: initialSize,
          }}
          animate={{
            width: isAligned
              ? finalSize
              : processState === "across"
                ? [
                  initialSize,
                  initialSize,
                  finalSize,
                  finalSize,
                ]
                : initialSize,

            height: isAligned
              ? finalSize
              : processState === "across"
                ? [
                  initialSize,
                  initialSize,
                  finalSize,
                  finalSize,
                ]
                : initialSize,
          }}
          transition={{
            width: isAligned
              ? {
                duration: 0.6,
                delay: index === 1 ? 0 : 0.08,
                ease,
              }
              : processState === "across"
                ? {
                  duration: 7,
                  times: [0, 4.4 / 7, 5.0 / 7, 1],
                  ease: "easeInOut",
                }
                : {
                  duration: 0.5,
                  ease,
                },

            height: isAligned
              ? {
                duration: 0.6,
                delay: index === 1 ? 0 : 0.08,
                ease,
              }
              : processState === "across"
                ? {
                  duration: 7,
                  times: [0, 4.4 / 7, 5.0 / 7, 1],
                  ease: "easeInOut",
                }
                : {
                  duration: 0.5,
                  ease,
                },
          }}
          className="
            relative
            flex
            shrink-0
            items-center
            justify-center
            rounded-full
          "
        >


          <div className="relative z-10 size-full overflow-hidden rounded-full">
            {/* #DFEDFF VOLUME DISC (POPS UP FROM CENTER POINT: 28% -> 53% -> 78% -> 100%) */}
            {!isAligned && (
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
                <motion.div
                  key={`bg-volume-disc-${animationKey}`}
                  className="rounded-full bg-[#DFEDFF] shadow-[0_0_24px_rgba(223,237,255,0.8)]"
                  initial={{ width: "0%", height: "0%", opacity: 0 }}
                  animate={{
                    width: [
                      "0%",
                      "0%",
                      "32%",
                      "28%",
                      "28%",
                      "58%",
                      "53%",
                      "53%",
                      "84%",
                      "78%",
                      "78%",
                      "104%",
                      "100%",
                      "100%",
                    ],
                    height: [
                      "0%",
                      "0%",
                      "32%",
                      "28%",
                      "28%",
                      "58%",
                      "53%",
                      "53%",
                      "84%",
                      "78%",
                      "78%",
                      "104%",
                      "100%",
                      "100%",
                    ],
                    opacity: [
                      0,
                      0,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                      1,
                    ],
                  }}
                  transition={{
                    duration: 8.5,
                    times: [
                      0,
                      1.5 / 8.5,
                      1.65 / 8.5,
                      1.8 / 8.5,
                      3.25 / 8.5,
                      3.4 / 8.5,
                      3.55 / 8.5,
                      5.0 / 8.5,
                      5.15 / 8.5,
                      5.3 / 8.5,
                      6.75 / 8.5,
                      6.95 / 8.5,
                      7.2 / 8.5,
                      1,
                    ],
                    ease: "easeOut",
                  }}
                />
              </div>
            )}
            <img
              src={role.img}
              alt={role.role}
              loading="eager"
              decoding="async"
              className="
                relative
                z-10
                h-full
                w-full
                object-cover
              "
            />
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================
          TEXT TICKER (WITHIN): ROLE -> UNDERSTANDING -> INTENTION -> ACTION
          (ALL TEXTS MOVE UP AND HIDE)
      ===================================================== */}

      {processState === "within" && (
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[clamp(70px,calc(120_/_var(--width)*100vw),400px)]
            z-30
            flex
            w-[clamp(200px,26vw,360px)]
            mt-2
            md:mt-0
            -translate-x-1/2
            items-center
            justify-center
          "
        >
          {/* ROLE */}
          <motion.span
            key={`role-${role.role}-${animationKey}`}
            initial={{
              opacity: 0,
              y: isMobile ? 10 : 35,
            }}
            animate={{
              opacity: isAligned
                ? 0
                : [
                  0,
                  1,
                  1,
                  0,
                ],
              y: isAligned
                ? 0
                : [
                  isMobile ? 10 : 35,
                  0,
                  0,
                  isMobile ? -10 : -35,
                ],
            }}
            transition={{
              duration: 1.5,
              times: [
                0,
                0.18,
                0.80,
                1,
              ],
              ease: ["easeOut", "linear", "easeInOut"],
            }}
            className="
              absolute
              whitespace-nowrap
              text-sm
              md:text-xl
              font-bold
              uppercase
            "
          >
            {role.role}
          </motion.span>

          {/* UNDERSTANDING, INTENTION, ACTION */}
          {withinTextSteps.map((step) => (
            <motion.span
              key={`${step.text.toLowerCase()}-${animationKey}`}
              initial={{
                opacity: 0,
                y: isMobile ? 10 : 35,
              }}
              animate={{
                opacity: isAligned
                  ? 0
                  : [
                    0,
                    1,
                    1,
                    0,
                  ],
                y: isAligned
                  ? 0
                  : [
                    isMobile ? 10 : 35,
                    0,
                    0,
                    isMobile ? -10 : -35,
                  ],
              }}
              transition={{
                delay: step.delay,
                duration: 1.75,
                times: [
                  0,
                  0.18,
                  0.80,
                  1,
                ],
                ease: ["easeOut", "linear", "easeInOut"],
              }}
              className="
                absolute
                whitespace-nowrap
                text-sm
              md:text-xl
                font-bold
              "
            >
              {step.text}
            </motion.span>
          ))}
        </div>
      )}



      {/* =====================================================
          HARMONY STATE
      ===================================================== */}

      <motion.div
        key={`harmony-${animationKey}`}
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: isAligned
            ? 1
            : processState === "within"
              ? [
                0,
                0,
                1,
                1,
              ]
              : 1,

          scale: 1,
        }}
        transition={{
          opacity: {
            duration: isAligned
              ? 0.8
              : processState === "across"
                ? 0.3
                : 1.0,

            delay: isAligned
              ? 0
              : processState === "across"
                ? 0
                : 6.75,

            ease,
          },

          scale: {
            duration: 1.0,
            delay: isAligned ? 0 : 6.75,
            ease,
          },
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-40
          flex
          -translate-x-1/2
          items-center
          justify-center
        "
        style={{
          height: initialSize,
        }}
      >
        {/* GLOW */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.65,
          }}
          animate={{
            opacity: isAligned
              ? 0
              : processState === "across"
                ? [
                  0.2,
                  0.2,
                  0,
                  0,
                ]
                : [
                  0,
                  0.9,
                  0.35,
                  0.2,
                ],

            scale: [
              0.65,
              1.15,
              1.05,
              1,
            ],
          }}
          transition={{
            opacity: processState === "across"
              ? {
                duration: 7,
                times: [0, 4.4 / 7, 4.9 / 7, 1],
                ease: "easeInOut",
              }
              : {
                duration: 1.5,
                delay: isAligned ? 0 : 6.6,
                times: [
                  0,
                  0.35,
                  0.65,
                  1,
                ],
                ease,
              },

            scale: {
              duration: 1.5,
              delay: isAligned ? 0 : 6.6,
              times: [
                0,
                0.35,
                0.65,
                1,
              ],
              ease,
            },
          }}
          className="
            absolute
            left-1/2
            top-1/2
            z-0
            size-[180%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#0668E1]/20
            blur-[clamp(18px,2.45vw,35px)]
          "
        />

        {/* FINAL AVATAR */}

        <motion.div
          animate={{
            width: isAligned
              ? finalSize
              : processState === "across"
                ? [
                  initialSize,
                  initialSize,
                  finalSize,
                  finalSize,
                ]
                : initialSize,

            height: isAligned
              ? finalSize
              : processState === "across"
                ? [
                  initialSize,
                  initialSize,
                  finalSize,
                  finalSize,
                ]
                : initialSize,
          }}
          transition={{
            width: isAligned
              ? {
                duration: 0.6,
                delay:
                  index === 1 ? 0 : 0.08,
                ease,
              }
              : processState === "across"
                ? {
                  duration: 7,
                  times: [0, 4.4 / 7, 5.0 / 7, 1],
                  ease: "easeInOut",
                }
                : {
                  duration: 0.5,
                  ease,
                },

            height: isAligned
              ? {
                duration: 0.6,
                delay:
                  index === 1 ? 0 : 0.08,
                ease,
              }
              : processState === "across"
                ? {
                  duration: 7,
                  times: [0, 4.4 / 7, 5.0 / 7, 1],
                  ease: "easeInOut",
                }
                : {
                  duration: 0.5,
                  ease,
                },
          }}
          className="
            relative
            z-10
            flex
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-[clamp(1px,0.14vw,2px)]
            border-[#0668E1]
            bg-white
          "
        >
          <img
            src={role.img}
            alt={role.role}
            loading="eager"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </motion.div>

        {/* HARMONY / ALIGNED BADGE */}

        {!isAligned && (
          <motion.img
            src="/home/icons/harmony-badge.svg"
            alt="Harmony"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: -5,
            }}
            animate={{
              opacity: processState === "within"
                ? [0, 1, 1]
                : processState === "across"
                  ? [1, 1, 0]
                  : 0,
              scale: 1,
              y: 0,
            }}
            transition={{
              opacity: processState === "within"
                ? {
                  duration: 0.8,
                  delay: 6.85,
                  times: [0, 0.65, 1],
                  ease,
                }
                : processState === "across"
                  ? {
                    duration: 7,
                    times: [0, 6.9 / 7, 1],
                    ease,
                  }
                  : {
                    duration: 0.3,
                  },
              scale: {
                duration: 0.8,
                delay: processState === "within" ? 6.85 : 0,
                ease,
              },
              y: {
                duration: 0.8,
                delay: processState === "within" ? 6.85 : 0,
                ease,
              },
            }}
            className="scale-90 pointer-events-none absolute left-1/2 top-[70%] z-50 w-full -translate-x-1/2"
          />
        )}
      </motion.div>
    </motion.div>
  );
}

// ============================================================
// MAIN
// ============================================================

export default function AlignmentTabs() {
  const sectionRef =
    React.useRef<HTMLElement | null>(null);

  /*
   * 50% of the component must be visible
   * before animation starts.
   */
  const isInView = useInView(
    sectionRef,
    {
      amount: 0.5,
    }
  );

  const [processState, setProcessState] =
    useState<ProcessState>("within");

  /*
   * Used ONLY to restart animations
   * when the section enters viewport.
   */
  const [animationKey, setAnimationKey] =
    useState(0);

  // ==========================================================
  // RESET WHEN LEAVING VIEWPORT
  // ==========================================================

  // Preload SVG assets immediately on mount
  useEffect(() => {
    withinRoles.forEach((role) => {
      const img = new Image();
      img.src = role.img;
    });
    const harmonyBadge = new Image();
    harmonyBadge.src = "/home/icons/harmony-badge.svg";
  }, []);

  useEffect(() => {
    if (!isInView) {
      setProcessState("within");
    }
  }, [isInView]);

  // ==========================================================
  // START / RESTART WHEN ENTERING VIEWPORT
  // ==========================================================

  useEffect(() => {
    if (isInView) {
      setAnimationKey(
        (value) => value + 1
      );
    }
  }, [isInView]);

  // ==========================================================
  // PROCESS
  //
  // WITHIN  → 7 sec
  // ACROSS  → 6 sec
  // ALIGNED
  // ==========================================================

  useEffect(() => {
    if (!isInView) return;

    if (processState === "aligned") {
      return;
    }

    const delay = processState === "across" ? 7000 : 8500;

    const timer = setTimeout(() => {
      if (
        processState === "within"
      ) {
        setProcessState("across");
      }

      if (
        processState === "across"
      ) {
        setProcessState("aligned");
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [
    isInView,
    processState,
  ]);

  /*
   * ==========================================================
   * TAB
   * ==========================================================
   */

  const activeTab =
    processState === "within"
      ? "within"
      : "across";

  const isAligned =
    processState === "aligned";

  return (
    <section
      ref={sectionRef}
      className="w-full"
    >
      {/* ====================================================
          TAB AREA
      ==================================================== */}

      <AnimatePresence>
        {!isAligned && (
          <motion.div
            initial={{
              opacity: 1,
              height: "auto",
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginBottom: 0,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="overflow-hidden"
          >
            <div
              className="
                px-[clamp(0px,2.5vw,24px)]
              "
            >
              <div
                className="
                  relative
                  mx-auto
                  mb-sm
                  grid
                  w-full
                  max-w-[700px]
                  grid-cols-2
                "
              >
                {/* WITHIN */}

                <TabButton
                  active={
                    activeTab ===
                    "within"
                  }
                  onClick={() => {
                    setProcessState("within");
                    setAnimationKey((prev) => prev + 1);
                  }}
                >
                  <div className="flex items-center justify-center gap-sm">
                    <IoMdPerson className="size-iconsize-sm" />
                    Begins Within
                  </div>
                </TabButton>

                {/* ACROSS */}

                <TabButton
                  active={
                    activeTab ===
                    "across"
                  }
                  onClick={() => {
                    setProcessState("across");
                    setAnimationKey((prev) => prev + 1);
                  }}
                >
                  <div className="flex items-center justify-center gap-sm">
                    <MdGroups className="size-iconsize-sm" />
                    Continues Across
                  </div>
                </TabButton>

                {/* PROCESS LINE */}

                <ProcessTabLine
                  activeTab={activeTab}
                  animationKey={
                    animationKey
                  }
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================================
          CONTENT
      ==================================================== */}

      <div
        key={animationKey}
        className="
          relative
          px-[clamp(0px,8%,8%)]
        "
      >
        {/* ==================================================
            ACTORS
        ================================================== */}

        <section
          className="
            relative
            w-full
            py-sm
          "
        >
          <div
            className={`
              relative
              grid
              w-full
              grid-cols-3
              p-md
              px-[clamp(3%,10%,10%)]
              ${isAligned
                ? "h-[clamp(70px,calc(105_/_var(--width)*100vw),320px)]"
                : "h-[clamp(90px,calc(140_/_var(--width)*100vw),500px)]"
              }
            `}
          >
            {withinRoles.map(
              (role, index) => (
                <WithinActor
                  key={role.role}
                  role={role}
                  index={index}
                  processState={
                    processState
                  }
                  animationKey={
                    animationKey
                  }
                />
              )
            )}

            {/* ACROSS BELOW-TEXT BOX WITH MOVING DASHED BORDER & SPEEDY GAP RECTANGLES */}
            {processState === "across" && (
              <AcrossTextBox animationKey={animationKey} />
            )}
          </div>

          {/* ==================================================
              ALIGNED TEXT
          ================================================== */}

          <div className="relative flex items-center justify-center h-[22px] md:h-auto">
            <AnimatePresence mode="wait">
              {/* ALIGNED TEXT: Opens when join completes at 5.0s, and STAYS THERE permanently (not removed in aligned state) */}
              {(processState === "across" || isAligned) && (
                <motion.h2
                  key={`aligned-heading-${animationKey}`}
                  initial={
                    isAligned
                      ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                      : {
                        opacity: 0,
                        y: 14,
                        scale: 0.94,
                      }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    transition: {
                      duration: 0.35,
                      ease,
                    },
                  }}
                  transition={{
                    delay: isAligned ? 0 : 5.0,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`
                  ${isAligned ? "" : "-mt-lg"}
                  z-[60]
                    flex
                    justify-center
                    whitespace-nowrap
                    text-h3
                    font-extrabold
                    text-[#0668E1]
                    text-shadow-black
                    text-shadow-2xs
                  `}
                >
                  Aligned
                </motion.h2>
              )}

            </AnimatePresence>
          </div>

          {/* ==================================================
              POWERED BY
          ================================================== */}


        </section>

      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: isAligned
            ? 1
            : 0,

          y: isAligned
            ? 0
            : 16,
        }}
        transition={{
          duration: 1.0,
          delay: isAligned
            ? 1.2
            : 0,
          ease,
        }}
        className="
          mt-sm
          flex
          w-full
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* TOP SPARKLE ICON */}
        <div className="mb-1.5 flex items-center justify-center">
          <img
            src="/icons/star-icon.svg"
            alt="Star icon"
            className="size-iconsize-sm scale-125 "
          />
        </div>

        {/* POWERED BY */}
        <p className="font-bold text-h6 leading-none">
          Powered by
        </p>

        {/* CONNECT EC (R) */}
        <h2 className="inline-flex items-start justify-center text-[#0668E1] text-h1 font-extrabold leading-tight -mt-1 md:-mt-1.5">
          <span>Connect EC</span>
          <img
            src="/icons/r-badage-icon.svg"
            alt="Registered trademark"
            className="ml-0.5 size-3.5 sm:size-4 xl:size-5  mt-sm"
          />
        </h2>
      </motion.div>
    </section>
  );
}