"use client";

import { motion } from "framer-motion";
import {
  ChartNoAxesColumnIncreasing,
  Handshake,
  Link2Off,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";

/* ============================================================
   TYPES
============================================================ */

type Stage = {
  title: string;
  icon: string;
};

type Connection = {
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const stages: Stage[] = [
  {
    title: "Target",
    icon: "/employer/icons/recruiters-pursue-icon.svg",
  },
  {
    title: "Evaluation",
    icon: "/employer/icons/recruiters-pursue-icon.svg",
  },
  {
    title: "Selection",
    icon: "/employer/icons/recruiters-pursue-icon.svg",
  },
  {
    title: "Hiring",
    icon: "/employer/icons/recruiters-pursue-icon.svg",
  },
];

const connections: Connection[] = [
  {
    title: "Target → Evaluation",
    description: "Target feasibility and readiness weaken.",
  },
  {
    title: "Evaluation → Selection",
    description: "Consistency and decision clarity weaken.",
  },
  {
    title: "Selection → Hiring",
    description: "Post-offer commitment visibility weakens.",
  },
];


const BLUE_DURATION = 1.4;
const RED_DURATION = 1.4;
const VERTICAL_DURATION = 1.1;
const CARD_DURATION = 0.5;

const STEP_GAP = 0.4;

const STEP_DURATION =
  BLUE_DURATION +
  RED_DURATION +
  CARD_DURATION +
  STEP_GAP;

  const ALIGNMENT_CARD_DELAY =
  connections.length * STEP_DURATION + 0.8;

  const BLUE_CARD_DELAY =
  ALIGNMENT_CARD_DELAY + 2.2;

const BLUE_CARD_STAGGER = 0.35;

/* ============================================================
   STAGE NODE
============================================================ */

function StageNode({
  stage,
}: {
  stage: Stage;
}) {

  return (
    <div className="relative z-40 flex shrink-0 flex-col items-center">
      <div className="flex size-iconsize-md items-center justify-center">
        <Image
        src={stage.icon}
        alt={stage.title}
        height={100}
        width={100}
          className="size-iconsize-md text-blue-600"
        />
      </div>

      <div className="mt-xs whitespace-nowrap text-xl font-medium">
        {stage.title}
      </div>
    </div>
  );
}

/* ============================================================
   BROKEN LINK ICON
============================================================ */

function BrokenLink({
  delay,
}: {
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        
      }}
      animate={{
        opacity: [0, 0, 1],
        
      }}
      transition={{
        delay,
        duration: 0.45,
        ease: "easeOut",
      }}
      className="absolute left-1/2 top-1/2 z-30 flex size-iconsize-md -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
    >
      <Link2Off
        className="size-iconsize-sm text-red-500"
        strokeWidth={2.5}
      />
    </motion.div>
  );
}

/* ============================================================
   ANIMATED CONNECTION

   IMPORTANT:

   There is NO permanent/fixed horizontal line.

   The actual line grows.

   BLUE:

   [ICON] ───────▶ CENTER

   RED:

   CENTER ───────▶ [ICON]

   VERTICAL:

   CENTER
      │
      │
      ▼
     CARD
============================================================ */

function AnimatedConnection({
  index,
  title,
  description,
}: Connection & {
  index: number;
}) {
  const stepStart = index * STEP_DURATION;

  /*
    BLUE starts immediately.

    RED starts only after blue reaches center.

    VERTICAL starts together with RED.

    CARD starts after red + vertical.
  */

  const blueStart = stepStart;

  const redStart =
    stepStart + BLUE_DURATION ;

  const cardStart =
    redStart +
    Math.max(
      RED_DURATION,
      VERTICAL_DURATION
    ) ;

  return (
    <div className="relative  flex w-full flex-col items-center">
      {/* ======================================================
          HORIZONTAL LINE
      ======================================================= */}

      <div className="relative h-[54px] w-full">
        {/* ====================================================
            BLUE MOVING LINE

            IMPORTANT:

            This is NOT a fixed line.

            It physically grows from left → center.
        ===================================================== */}

        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: "40%",
          }}
          transition={{
            delay: blueStart,
            duration: BLUE_DURATION,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-blue-500"
        />

        {/* ====================================================
            RED MOVING LINE

            Starts from center and physically grows
            toward the next icon.

            There is NO red line before this animation.
        ===================================================== */}

<motion.div
  initial={{
    width: "0%",
  }}
  animate={{
    width: "50%",
  }}
  transition={{
    delay: redStart,
    duration: RED_DURATION,
    ease: [0, 1, 0.36, 1],
  }}
  className="absolute left-1/2 top-1/2 h-[2px] -translate-y-1/2 bg-red-400"
/>

        {/* ====================================================
            CENTER BROKEN LINK
        ===================================================== */}

        <BrokenLink
          delay={
            blueStart +
            BLUE_DURATION -
            0.25
          }
        />
      </div>


      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: 76,
          opacity: 1,
        }}
        transition={{
          delay: redStart,
          duration: VERTICAL_DURATION,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="border-l-2 border-dashed border-red-500"
      />

      {/* ======================================================
          CARD
      ======================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: cardStart - 1 ,
          duration: CARD_DURATION + 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full"
      >
        <div className=" rounded-[20px] border border-red-200 bg-[#fff7f5] px-5 py-7 text-center shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
          <h3 className="text-base font-bold">
            {title}
          </h3>

          <p className="mx-auto mt-3 text-xl font-medium">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   ALIGNMENT CONNECTS CARD
============================================================ */

function AlignmentConnectsCard() {
  return (
<motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    opacity: {
      delay: ALIGNMENT_CARD_DELAY,
      duration: 0.4,
    },
    y: {
      delay: ALIGNMENT_CARD_DELAY,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  className="
    relative
    mt-xl
    flex
    w-fit
    items-center
    justify-center
    p-sm
  "
>
  {/* =====================================================
      ANIMATED BACKGROUND + BORDER
  ====================================================== */}

  <motion.div
    initial={{
      scale: 0,
    }}
    animate={{
      scale: 1,
    }}
    transition={{
      delay: ALIGNMENT_CARD_DELAY,
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    style={{
      transformOrigin: "center",
    }}
    className="
      absolute
      inset-0
      rounded-full
      border
      border-[#B2D0F6]
      bg-[#EEF6FF]
    "
  />

  {/* =====================================================
      CONTENT
  ====================================================== */}

  <motion.div
    layout
    className="
      relative
      z-20
      flex
      items-center
      justify-center
    "
  >
    {/* =====================================================
        IMAGE
    ====================================================== */}

    <motion.div
      initial={{
        x: 0,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        delay: ALIGNMENT_CARD_DELAY + 0.3,
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        shrink-0
        items-center
        justify-center
      "
    >
      <Image
        src="/icons/star-icon.svg"
        alt="Alignment"
        width={100}
        height={100}
        className="size-iconsize-xl"
      />
    </motion.div>

    {/* =====================================================
        TEXT
    ====================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        width: 0,
        marginLeft: 0,
      }}
      animate={{
        opacity: 1,
        width: "auto",
        marginLeft: "1rem",
      }}
      transition={{
        delay: ALIGNMENT_CARD_DELAY + 1.35,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        overflow-hidden
        whitespace-nowrap
        text-center
        text-h5
        font-bold
        text-primary
        pr-sm
      "
    >
      When Alignment Connects the Stages
    </motion.div>
  </motion.div>
</motion.div>
  );
}


/* ============================================================
   ALIGNMENT CONTINUITY BLUE CARD
============================================================ */

const continuityActions = [
  "Calibrate",
  "Diagnose",
  "Standardize",
  "Protect",
];

function AlignmentContinuityCard() {
  return (
    <div className="relative w-full">
      {/* =====================================================
          SKELETON
          
          SHOWS IMMEDIATELY
          Does NOT wait for BLUE_CARD_DELAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          mt-12
          w-full
          overflow-hidden
          rounded-lg
          bg-[#0668E1]
          p-md
          text-white
        
        "
      >
        {/* =================================================
            SKELETON STAGES
        ================================================== */}

        <div className="flex items-start justify-between">
          {stages.map((stage, index) => (
            <div
              key={`skeleton-stage-${stage.title}`}
              className={`flex min-w-0 items-start ${
                index < stages.length - 1
                  ? "flex-1"
                  : "shrink-0"
              }`}
            >
              {/* SKELETON ICON + TITLE */}

              <div className="flex shrink-0 flex-col items-center">
                <div
                  className="
                    size-14
                    animate-pulse
                    rounded-full
                    bg-white/20
                  "
                />

                <div
                  className="
                    mt-2
                    h-5
                    w-20
                    animate-pulse
                    rounded-full
                    bg-white/20
                  "
                />
              </div>

              {/* SKELETON LINE */}

              {index < stages.length - 1 && (
                <div className="flex min-w-0 flex-1 items-center px-4 pt-7">
                  <div
                    className="
                      h-[3px]
                      w-full
                      animate-pulse
                      rounded-full
                      bg-white/20
                    "
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* =================================================
            SKELETON ACTIONS
        ================================================== */}

        <div className="mt-7 flex w-full items-center">
          {continuityActions.map((action, index) => (
            <div
              key={`skeleton-action-${action}`}
              className="flex min-w-0 flex-1 items-center"
            >
              <div className="flex flex-1 justify-center">
                <div
                  className="
                    h-6
                    w-24
                    animate-pulse
                    rounded-full
                    bg-white/20
                    md:h-7
                    md:w-28
                  "
                />
              </div>

              {index < continuityActions.length - 1 && (
                <div className="flex shrink-0 items-center px-2 md:px-3">
                  <div
                    className="
                      h-7
                      w-5
                      animate-pulse
                      rounded
                      bg-white/20
                    "
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* =================================================
            SKELETON DESCRIPTION
        ================================================== */}

        <div className="mt-7 flex justify-center">
          <div
            className="
              h-5
              w-[70%]
              animate-pulse
              rounded-full
              bg-white/20
              md:h-6
            "
          />
        </div>

        {/* =================================================
            SKELETON BUTTON
        ================================================== */}

        <div className="mt-10 flex justify-center">
          <div
            className="
              h-[58px]
              w-[310px]
              animate-pulse
              rounded-full
              bg-white/20
            "
          />
        </div>
      </div>

      {/* =====================================================
          REAL CARD
          
          THIS WAITS FOR BLUE_CARD_DELAY
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: BLUE_CARD_DELAY,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          mt-xl
          w-full
          flex
          flex-col
          justify-center
          items-center
          overflow-hidden
          rounded-lg
          bg-primary
          py-lg
          text-white
         px-[5%]
        "
      >
        {/* =====================================================
            STAGES + ANIMATED LINES
        ===================================================== */}

<div className="flex w-full items-start">
  {stages.map((stage, index) => (
    <div
      key={stage.title}
      className={`flex min-w-0 items-center ${
        index < stages.length - 1
          ? "flex-1"
          : "shrink-0"
      }`}
    >

      <div className="flex shrink-0 flex-col items-center p-sm">
        <Image
          src={stage.icon}
          alt={stage.title}
          width={100}
          height={100}
          className="size-iconsize-md brightness-0 invert"
        />

        <div className="mt-sm whitespace-nowrap text-xl font-medium">
          {stage.title}
        </div>
      </div>


      {index < stages.length - 1 && (
        <div className="flex min-w-0 flex-1 items-center px-1">
          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              delay:
                BLUE_CARD_DELAY +
                0.35 +
                index * 0.55,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              h-[3px]
              w-full
              origin-left
              rounded-full
              bg-white
            "
          />
        </div>
      )}
    </div>
  ))}
</div>


{/* =====================================================
    CONTINUITY ACTIONS
===================================================== */}

<div className="mt-sm flex w-full items-center">
  {continuityActions.map((action, index) => {
    const isInitial = index === 0;

    const actionDelay =
      BLUE_CARD_DELAY +
      0.35 +
      (index - 1) * 0.55;

    return (
      <div
        key={action}
        className={`flex min-w-0 items-center ${
          index < continuityActions.length - 1
            ? "flex-1"
            : "shrink-0"
        }`}
      >
        {/* =================================================
            ACTION
        ================================================== */}

        <motion.div
          initial={
            isInitial
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: -30,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={
            isInitial
              ? {
                  duration: 0,
                }
              : {
                  delay: actionDelay,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }
              }
          className="
            
            flex-1
            text-base
            font-bold
          "
        >
          {action}
        </motion.div>

        {/* =================================================
            DOUBLE ARROW
        ================================================== */}


        {index < continuityActions.length - 1 && (
          <motion.div
            initial={
              isInitial
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: -10,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={
              isInitial
                ? {
                    duration: 0,
                  }
                : {
                    delay: actionDelay + 0.15,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }
              }
            className="
              
          w-full 
          text-center
              px-2
              text-h4
              font-medium
              leading-none
              md:px-3
            "
          >
            »
          </motion.div>
        )}
      </div>
    );
  })}
</div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

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
            delay: BLUE_CARD_DELAY + 2.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-lg
            text-center
            text-xl
            font-medium
            
          "
        >
          Employer Alignment keeps each hiring activity connected to what follows.
        </motion.p>

        {/* =====================================================
            BOTTOM BUTTON
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: BLUE_CARD_DELAY + 2.45,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-10
            flex
            w-fit
            items-center
            gap-3
            rounded-full
            border
            border-white
            bg-white/15
            px-7
            py-4
            text-lg
            font-bold
            backdrop-blur-sm
          "
        >
          <span className="text-2xl">✦</span>

          <span>
            Alignment Preserve Employer Continuity
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function ContinuityBreaksSection() {
  return (
    <section className="">
      <p className="mb-1 text-xl font-bold text-primary text-center">EMPLOYER CONTINUITY</p>
      <h2 className="text-h2 font-extrabold leading-tight text-center">From Separate Interactions to 
        <br/>
        <span className="text-primary">
One Connected Employer Journey
</span>
</h2>
      <div className="relative w-full gap-xl mt-xl">
      <div className="mx-auto w-full rounded-lg bg-white px-lg pt-lg pb-xl shadow-web-medium">
        {/* ====================================================
            TITLE
        ===================================================== */}

        <motion.h3
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center text-h5 font-bold"
        >
          When Continuity Breaks between Stages
        </motion.h3>

        {/* ====================================================
            DESKTOP
        ===================================================== */}

        <div className="mt-xl hidden md:block">
          <div className="flex items-start">
            {/* ==================================================
                TARGET
            =================================================== */}

            <StageNode stage={stages[0]} />

            {/* ==================================================
                CONNECTION 1
            =================================================== */}

            <div className="min-w-0 flex-1 pt-1">
              <AnimatedConnection
                index={0}
                {...connections[0]}
              />
            </div>

            {/* ==================================================
                EVALUATION
            =================================================== */}

            <StageNode stage={stages[1]} />

            {/* ==================================================
                CONNECTION 2
            =================================================== */}

            <div className="min-w-0 flex-1 pt-1">
              <AnimatedConnection
                index={1}
                {...connections[1]}
              />
            </div>

            {/* ==================================================
                SELECTION
            =================================================== */}

            <StageNode stage={stages[2]} />

            {/* ==================================================
                CONNECTION 3
            =================================================== */}

            <div className="min-w-0 flex-1 pt-1">
              <AnimatedConnection
                index={2}
                {...connections[2]}
              />
            </div>

            {/* ==================================================
                HIRING
            =================================================== */}

            <StageNode stage={stages[3]} />
          </div>
                  {/* ====================================================
            ALIGNMENT CONNECTS THE STAGES
        ===================================================== */}


        </div>




        {/* ====================================================
            MOBILE
        ===================================================== */}

        <div className="mt-10 md:hidden">
          {/* ==================================================
              ALL STAGES
          =================================================== */}

          <div className="grid grid-cols-4 gap-1">
            {stages.map((stage) => {

              return (
                <div
                  key={stage.title}
                  className="flex flex-col items-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center">
                    <Image
                    src={stage.icon}
                    alt={stage.title}
                    height={100}
                    width={100}
                      className="h-8 w-8 text-blue-600"
                    />
                  </div>

                  <span className="mt-xs text-center text-xl font-medium">
                    {stage.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ==================================================
              MOBILE CONNECTIONS
          =================================================== */}

          <div className="mt-7 space-y-10">
            {connections.map((connection, index) => {
              const stepStart =
                index * STEP_DURATION;

              const blueStart = stepStart;

              const redStart =
                stepStart + BLUE_DURATION;

              const cardStart =
                redStart +
                Math.max(
                  RED_DURATION,
                  VERTICAL_DURATION
                );

              return (
                <div
                  key={connection.title}
                  className="flex flex-col items-center"
                >
                  {/* ========================================
                      HORIZONTAL
                  ========================================= */}

                  <div className="relative h-[42px] w-full">
                    {/* BLUE */}

                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      animate={{
                        width: "50%",
                      }}
                      transition={{
                        delay: blueStart,
                        duration: BLUE_DURATION,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-blue-500"
                    />

                    {/* RED */}

                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      animate={{
                        width: "50%",
                      }}
                      transition={{
                        delay: redStart,
                        duration: RED_DURATION,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute right-0 top-1/2 h-[2px] -translate-y-1/2 bg-red-400"
                    />

                    {/* CENTER ICON */}

                    <BrokenLink
                      delay={
                        blueStart +
                        BLUE_DURATION -
                        0.25
                      }
                    />

                    {/* BLUE DOT */}

                    <motion.div
                      initial={{
                        left: "0%",
                        opacity: 0,
                      }}
                      animate={{
                        left: "50%",
                        opacity: [0, 1, 1],
                      }}
                      transition={{
                        delay: blueStart,
                        duration: BLUE_DURATION,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute top-1/2 z-50 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600"
                    />

                    {/* RED DOT */}

                    <motion.div
                      initial={{
                        left: "50%",
                        opacity: 0,
                      }}
                      animate={{
                        left: "100%",
                        opacity: [0, 1, 1],
                      }}
                      transition={{
                        delay: redStart,
                        duration: RED_DURATION,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute top-1/2 z-50 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"
                    />
                  </div>

                  {/* ========================================
                      VERTICAL
                  ========================================= */}

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 48,
                      opacity: 1,
                    }}
                    transition={{
                      delay: redStart,
                      duration: VERTICAL_DURATION,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-l-2 border-dashed border-red-500"
                  />

                  {/* ========================================
                      CARD
                  ========================================= */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 18,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      delay: cardStart,
                      duration: CARD_DURATION,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full"
                  >
                    <div className="rounded-[20px] border border-red-200 bg-[#fff7f5] px-5 py-6 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)]">
                      <h3 className="text-[17px] font-bold text-slate-900">
                        {connection.title}
                      </h3>

                      <p className="mt-2 text-[15px] leading-6 text-slate-700">
                        {connection.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
            {/* ====================================================
          ALIGNMENT CONNECTS CARD
      ===================================================== */}

      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
        <AlignmentConnectsCard />
      </div>

      {/* ====================================================
          ALIGNMENT CONTINUITY CARD
      ===================================================== */}

      <div className="flex w-full justify-center">
        <AlignmentContinuityCard />
      </div>
      </div>
    </section>
  );
}