"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Link2Off,
} from "lucide-react";
import Image from "next/image";
import HiringContinuityMobile from "../../app/employer-alignment-system/HiringContinuityMobile";
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

type ContinuityData = {
  eyebrow: string;
  heading: string;
  headingHighlight: string;

  breaksTitle: string;
  alignmentTitle: string;

  stages: Stage[];
  connections: Connection[];

  continuityActions: string[];

  continuityDescription: string;
  continuityButton: string;
};

 type ContinuityBreaksSectionProps = {
  data: ContinuityData;
};

/* ============================================================
   DATA
============================================================ */




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
  3 * STEP_DURATION + 0.8;

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
          className="size-iconsize-md "
        />
      </div>

      <div className="mt-xs whitespace-nowrap text-xl font-medium w-iconsize-2xl text-center">
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

  const blueStart = stepStart-1;

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

      <div className="relative lg:h-iconsize-2xl w-full">
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
          delay: cardStart - 1.2 ,
          duration: CARD_DURATION + 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full"
      >
        <div className=" rounded-md border border-red-200 bg-[#fff7f5] p-sm text-center shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
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

function AlignmentConnectsCard({title}:{title:string}) {
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
    py-sm
    pr-lg
    pl-sm
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
        pr-xl
        md:pr-0
      "
    >
      {title}
    </motion.div>
  </motion.div>
</motion.div>
  );
}


function AlignmentContinuityCard({data}:{data: ContinuityData}) {
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
          {data.stages.map((stage, index) => (
            <div
              key={`skeleton-stage-${stage.title}`}
              className={`flex min-w-0 items-start ${
                index < data.stages.length - 1
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

              {index < data.stages.length - 1 && (
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
          {data.continuityActions.map((action, index) => (
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
                    sm:h-7
                    sm:w-28
                  "
                />
              </div>

              {index < data.continuityActions.length - 1 && (
                <div className="flex shrink-0 items-center px-2 sm:px-3">
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
              sm:h-6
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
          duration: 2.5,
          ease: [0.16, 1, 0.3, 1],
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
          {data.stages.map((stage, index) => (
            <div
              key={stage.title}
              className={`flex min-w-0 items-center ${
                index < data.stages.length - 1
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

              {index < data.stages.length - 1 && (
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
                        1.5 +
                        index * 1.4,
                      duration: 2.5,
                      ease: [0.16, 1, 0.3, 1],
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
          {data.continuityActions.map((action, index) => {
            const isInitial = index === 0;

            const actionDelay =
              BLUE_CARD_DELAY +
              2.0 +
              (index - 1) * 1.5;

            return (
              <div
                key={action}
                className={`flex min-w-0 items-center ${
                  index < data.continuityActions.length - 1
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
                          duration: 1.8,
                          ease: [0.16, 1, 0.3, 1],
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

                {index < data.continuityActions.length - 1 && (
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
                            delay: actionDelay + 0.5,
                            duration: 1.4,
                            ease: [0.16, 1, 0.3, 1],
                          }
                    }
                    className="
                      w-full
                      text-center
                      px-2
                      text-h4
                      font-medium
                      leading-none
                      sm:px-3
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
            delay: BLUE_CARD_DELAY + 6.8,
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-lg
            text-center
            text-xl
            font-medium
          "
        >
          {data.continuityDescription}
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
            delay: BLUE_CARD_DELAY + 7.8,
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
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
            pl-sm
            pr-md
            py-sm
            text-lg
            font-bold
            backdrop-blur-sm
          "
        >
          <span className="">
            <Image
              src="/icons/star-icon.svg"
              alt="Alignment"
              width={100}
              height={100}
              className="size-iconsize-sm brightness-0 invert"
            />
          </span>

          <span>
            {data.continuityButton}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}



/* ============================================================
   MAIN COMPONENT
============================================================ */

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function ContinuityBreaksSection({
  data,
}: ContinuityBreaksSectionProps) {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.5,
    
  });

  return (
    <section ref={sectionRef} className="">
      {isInView && (
        <>
          <p className="mb-1 text-xl font-bold text-primary text-center">
            {data.eyebrow}
          </p>

          <h2 className="text-h2 font-extrabold leading-tight text-center">
            {data.heading}
            <br />
            <span className="text-primary">
              {data.headingHighlight}
            </span>
          </h2>

          <div className="hidden sm:flex flex-col">
            <div className="relative w-full gap-xl mt-xl">
              <div className="mx-auto w-full rounded-lg bg-white px-lg pt-lg pb-[10%] md:pb-xl shadow-web-medium">

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
                  {data.breaksTitle}
                </motion.h3>

                {/* ====================================================
                    DESKTOP
                ===================================================== */}

                <div className="mt-xl hidden sm:block">
                  <div className="flex items-start">

                    {/* ==================================================
                        TARGET
                    =================================================== */}

                    <StageNode stage={data.stages[0]} />

                    {/* ==================================================
                        CONNECTION 1
                    =================================================== */}

                    <div className="min-w-0 flex-1 pt-1">
                      <AnimatedConnection
                        index={0}
                        {...data.connections[0]}
                      />
                    </div>

                    {/* ==================================================
                        EVALUATION
                    =================================================== */}

                    <StageNode stage={data.stages[1]} />

                    {/* ==================================================
                        CONNECTION 2
                    =================================================== */}

                    <div className="min-w-0 flex-1 pt-1">
                      <AnimatedConnection
                        index={1}
                        {...data.connections[1]}
                      />
                    </div>

                    {/* ==================================================
                        SELECTION
                    =================================================== */}

                    <StageNode stage={data.stages[2]} />

                    {/* ==================================================
                        CONNECTION 3
                    =================================================== */}

                    <div className="min-w-0 flex-1 pt-1">
                      <AnimatedConnection
                        index={2}
                        {...data.connections[2]}
                      />
                    </div>

                    {/* ==================================================
                        HIRING
                    =================================================== */}

                    <StageNode stage={data.stages[3]} />
                  </div>
                </div>
              </div>

              {/* ====================================================
                  ALIGNMENT CONNECTS CARD
              ===================================================== */}

              <div className="absolute left-1/2 lg:top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
                <AlignmentConnectsCard
                  title={data.alignmentTitle}
                />
              </div>

              {/* ====================================================
                  ALIGNMENT CONTINUITY CARD
              ===================================================== */}

              <div className="flex w-full justify-center">
                <AlignmentContinuityCard data={data} />
              </div>
            </div>
          </div>

          {/* ====================================================
              MOBILE
          ===================================================== */}

          <div className="mt-10 sm:hidden">
            <HiringContinuityMobile data={data} />
          </div>
        </>
      )}
    </section>
  );
}