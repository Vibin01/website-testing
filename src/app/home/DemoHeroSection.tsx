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
    img: "/icons/employer-round-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Recruiter",
    img: "/icons/recruiters-round-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Candidate",
    img: "/icons/candidate-round-icon.svg",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
];

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
            duration: 8,
            times: [
              0,
              0.8,
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
            duration: 8,
            times: [
              0,
              0.8,
              0.92,
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
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="
        relative
        flex
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

// ============================================================
// WITHIN ACTOR
// ============================================================

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
      ? "clamp(70px, calc(100 / var(--width) * 100vw), 400px)"
      : "clamp(60px, calc(80 / var(--width) * 100vw), 400px)";

  const initialSize =
    "clamp(60px, calc(110 / var(--width) * 100vw), 400px)";

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
         * → still stay initial
         *
         * ALIGNED
         * → move to final
         */

        left: isAligned
          ? finalLeft
          : initialLeft,

        top: isAligned
          ? "clamp(-10px, -4.2vw, -60px)"
          : 0,

        zIndex: isAligned
          ? index === 1
            ? 50
            : 20
          : 20,

        marginTop: isAligned
          ? index === 1
            ? "clamp(-10px, -0.7vw, -10px)"
            : 0
          : 0,
      }}
      transition={{
        left: {
          duration: 1.8,
          delay:
            index === 1 ? 0 : 0.15,
          ease,
        },

        top: {
          duration: 1.8,
          delay:
            index === 1 ? 0 : 0.15,
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
          CONNECTION LINES
      ===================================================== */}

      {!isAligned && index < 2 && (
        <div
          className="
            pointer-events-none
            absolute
            left-[calc(50%+clamp(48px,5.2vw,75px))]
            top-0
            z-10
            h-[clamp(70px,calc(110_/_var(--width)*100vw),400px)]
            w-[clamp(90px,16vw,300px)]
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
            "
          >
            {/* TOP FLOW */}

            <motion.div
              key={`top-flow-${animationKey}`}
              className="
                absolute
                left-0
                top-[30%]
                flex
                w-[15%]
                gap-[20%]
              "
              initial={{
                x: "-100%",
              }}
              animate={{
                x: [
                  "-100%",
                  "0%",
                  "900%",
                ],
              }}
              transition={{
                duration: 1,
                delay: 9,
                repeat: 3,
                ease: "linear",
                times: [
                  0,
                  0.08,
                  1,
                ],
              }}
            >
              <span
                className="
                  block
                  h-[clamp(3px,0.28vw,4px)]
                  w-[40%]
                  shrink-0
                  rounded-full
                  bg-[#0668E1]
                "
              />

              <span
                className="
                  block
                  h-[clamp(3px,0.28vw,4px)]
                  w-[40%]
                  shrink-0
                  rounded-full
                  bg-[#0668E1]
                "
              />
            </motion.div>

            {/* BOTTOM FLOW */}

            <motion.div
              key={`bottom-flow-${animationKey}`}
              className="
                absolute
                right-0
                top-[66%]
                flex
                w-[15%]
                gap-[20%]
              "
              initial={{
                x: "100%",
              }}
              animate={{
                x: [
                  "100%",
                  "0%",
                  "-900%",
                ],
              }}
              transition={{
                duration: 1,
                delay: 9,
                repeat: 3,
                ease: "linear",
                times: [
                  0,
                  0.08,
                  1,
                ],
              }}
            >
              <span
                className="
                  block
                  h-[clamp(3px,0.28vw,4px)]
                  w-[40%]
                  shrink-0
                  rounded-full
                  bg-[#0668E1]
                "
              />

              <span
                className="
                  block
                  h-[clamp(3px,0.28vw,4px)]
                  w-[40%]
                  shrink-0
                  rounded-full
                  bg-[#0668E1]
                "
              />
            </motion.div>
          </div>
        </div>
      )}

      {/* =====================================================
          HEAD / HEART / HAND
      ===================================================== */}

      <motion.div
        animate={{
          opacity: isAligned ? 0 : 1,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
        className="
          absolute
          left-1/2
          top-[clamp(70px,10.8vw,155px)]
          z-30
          flex
          -translate-x-1/2
          items-center
          justify-center
          gap-[clamp(6px,0.55vw,12px)]
          whitespace-nowrap
        "
      >
        {/* HEAD */}

        <motion.span
          key={`head-${animationKey}`}
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: [
              0,
              1,
              1,
              0,
              0,
            ],
            x: [
              -60,
              0,
              0,
              55,
              48,
            ],
          }}
          transition={{
            delay: 1,
            duration: 3,
            times: [
              0,
              1 / 4,
              3.2 / 4,
              4.6 / 4,
              1,
            ],
            ease,
          }}
          className="
            text-[9px]
            md:text-xl
            font-medium
          "
        >
          Head
        </motion.span>

        {/* HEART */}

        <motion.span
          key={`heart-${animationKey}`}
          initial={{
            opacity: 0,
            y: 90,
          }}
          animate={{
            opacity: [
              0,
              1,
              1,
              0,
              0,
            ],
            y: [
              60,
              0,
              0,
              0,
              0,
            ],
          }}
          transition={{
            delay: 1,
            duration: 3,
            times: [
              0,
              1 / 4,
              3.2 / 4,
              4.6 / 4,
              1,
            ],
            ease,
          }}
          className="
            text-[9px]
            md:text-xl
            font-medium
          "
        >
          Heart
        </motion.span>

        {/* HAND */}

        <motion.span
          key={`hand-${animationKey}`}
          initial={{
            opacity: 0,
            x: 70,
          }}
          animate={{
            opacity: [
              0,
              1,
              1,
              0,
              0,
            ],
            x: [
              70,
              0,
              0,
              -55,
              -48,
            ],
          }}
          transition={{
            delay: 1,
            duration: 3,
            times: [
              0,
              1 / 4,
              3.2 / 4,
              4.6 / 4,
              1,
            ],
            ease,
          }}
          className="
            text-[9px]
            md:text-xl
            font-medium
          "
        >
          Hand
        </motion.span>
      </motion.div>

      {/* =====================================================
          HHH
      ===================================================== */}

      <motion.div
        key={`hhh-${animationKey}`}
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 0,
        }}
        animate={{
          opacity: isAligned
            ? 0
            : [
                0,
                1,
                1,
                1,
                0,
              ],

          scale: [
            0.5,
            1.15,
            1,
            1,
            0.7,
          ],

          y: [
            0,
            0,
            0,
            -110,
            -110,
          ],
        }}
        transition={{
          duration: 2.2,
          delay: 3.5,
          times: [
            0,
            0.32,
            0.55,
            0.86,
            1,
          ],
          ease,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[clamp(95px,10.8vw,155px)]
          z-50
          -translate-x-1/2
          text-[clamp(13px,1vw,16px)]
          font-extrabold
          tracking-tight
          text-[#0668E1]
        "
      >
        HHH
      </motion.div>

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
          flex-col
          items-center
        "
      >
        {/* AVATAR */}

        <motion.div
          initial={{
            width: initialSize,
            height: initialSize,
          }}
          animate={{
            width: isAligned
              ? finalSize
              : initialSize,

            height: isAligned
              ? finalSize
              : initialSize,
          }}
          transition={{
            duration: 1.8,
            delay:
              index === 1 ? 0 : 0.15,
            ease,
          }}
          className="
            flex
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
          "
        >
          <img
            src={role.img}
            alt={role.role}
            className="
              h-full
              w-full
              object-cover
            "
          />
        </motion.div>

        {/* ROLE */}

        <motion.span
          key={`role-${role.role}-${animationKey}`}
          initial={{
            opacity: 0,
            y: 15,
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

            y: [
              15,
              0,
              0,
              -25,
            ],
          }}
          transition={{
            duration: 2,
            times: [
              0,
              0.9,
              0.9,
              1,
            ],
            ease,
          }}
          className="
            mt-[clamp(6px,0.75vw,12px)]
            whitespace-nowrap
            text-base
            font-extrabold
            uppercase
          "
        >
          {role.role}
        </motion.span>
      </motion.div>

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
            : [
                0,
                0,
                1,
                1,
              ],

          scale: 1,
        }}
        transition={{
          opacity: {
            duration: isAligned
              ? 0.8
              : 1.6,

            delay: isAligned
              ? 0
              : 4.2,

            ease,
          },

          scale: {
            duration: 1.6,
            delay: 4.2,
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
          flex-col
          items-center
        "
      >
        {/* GLOW */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.65,
          }}
          animate={{
            opacity: [
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
            duration: 2,
            delay: 4.2,
            times: [
              0,
              0.35,
              0.65,
              1,
            ],
            ease,
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
              : initialSize,

            height: isAligned
              ? finalSize
              : initialSize,
          }}
          transition={{
            duration: 1.8,
            delay:
              index === 1 ? 0 : 0.15,
            ease,
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
            className="
              h-full
              w-full
              object-cover
            "
          />
        </motion.div>

        {/* HARMONY BADGE */}

        <motion.img
          src="/home/icons/harmony-badge.svg"
          alt="Harmony"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: -5,
          }}
          animate={{
            opacity: isAligned
              ? 0
              : [
                  0,
                  1,
                  1,
                ],

            scale: isAligned
              ? 0.95
              : [
                  0.8,
                  1.05,
                  1,
                ],

            y: isAligned
              ? -5
              : [
                  -5,
                  0,
                  0,
                ],
          }}
          transition={
            isAligned
              ? {
                  duration: 1.5,
                  ease,
                }
              : {
                  duration: 0.9,
                  delay: 4.5,
                  times: [
                    0,
                    0.65,
                    1,
                  ],
                  ease,
                }
          }
          className="
            scale-90
            pointer-events-none
            absolute
            left-1/2
            top-[70%]
            z-50
            w-full
            -translate-x-1/2
          "
        />
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
  // WITHIN  → 8 sec
  // ACROSS  → 8 sec
  // ALIGNED
  // ==========================================================

  useEffect(() => {
    if (!isInView) return;

    if (processState === "aligned") {
      return;
    }

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
    }, 8000);

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
            pt-[clamp(0px,3%,4%)]
            pb-[clamp(12px,2%,2%)]
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
              ${
                isAligned
                  ? "h-[clamp(70px,calc(120_/_var(--width)*100vw),320px)]"
                  : "h-[clamp(90px,calc(140_/_var(--width)*100vw),380px)]"
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
          </div>

          {/* ==================================================
              ALIGNED TEXT
          ================================================== */}

          <motion.span
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.85,
            }}
            animate={{
              opacity: isAligned
                ? 1
                : 0,

              y: isAligned
                ? 0
                : 12,

              scale: isAligned
                ? 1
                : 0.85,
            }}
            transition={{
              duration: 1.2,
              delay: isAligned
                ? 1.8
                : 0,
              ease,
            }}
            className="
              z-[60]
              flex
              justify-center
              whitespace-nowrap
              text-h2
              font-extrabold
              text-[#0668E1]
              text-shadow-black
              text-shadow-2xs
            "
          >
            Aligned
          </motion.span>

          {/* ==================================================
              POWERED BY
          ================================================== */}

         
        </section>
        
      </div>
       <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: isAligned
                ? 1
                : 0,

              y: isAligned
                ? 0
                : 12,
            }}
            transition={{
              duration: 1.2,
              delay: isAligned
                ? 2
                : 0,
              ease,
            }}
            className="
              mt-md
              flex
              w-full
              items-center
              justify-center
            "
          >
            <div
              className="
                w-fit
                max-w-full
                rounded-full
                border
                border-[#B2D0F6]
                bg-[#F2F8FF]
                p-sm
              "
            >
              <h3
                className="
                  flex
                  items-center
                  justify-center
                  whitespace-nowrap
                  text-xl
                  font-extrabold
                  text-[#0668E1]
                  md:text-h5
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-[clamp(6px,0.55vw,12px)]
                  "
                >
                  <img
                    src="/icons/star-icon.svg"
                    alt="Star icon"
                    className="
                      inline
                      size-iconsize-md
                      animate-pulse
                    "
                  />

                  Powered by Alignment
                  Intelligence
                </span>
              </h3>
            </div>
          </motion.div>
    </section>
  );
}