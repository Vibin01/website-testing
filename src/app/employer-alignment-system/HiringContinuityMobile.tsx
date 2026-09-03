"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link2Off, Sparkles } from "lucide-react";

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




/* ============================================================
   ANIMATION SETTINGS
============================================================ */



const STAGE_DURATION = 0.45;
const LINE_DURATION = 0.45;

const CONNECTION_DELAY = 0.95;
const CONNECTION_DURATION = 0.55;
const CARD_DELAY = 0.45;

const STAGE_STEP = 1.55;

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   STAGE NODE
============================================================ */

function MobileStage({
  stage,
  index,
}: {
  stage: Stage;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: index * STAGE_STEP,
        duration: STAGE_DURATION,
        ease,
      }}
      className="
        relative
        z-20
        flex
        w-[62px]
        shrink-0
        flex-col
        items-center
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          size-[42px]
          items-center
          justify-center
        "
      >
        <Image
          src={stage.icon}
          alt={stage.title}
          width={100}
          height={100}
          className="
            size-[30px]
            object-contain
          "
        />
      </div>

      {/* TITLE */}

      <p
        className="
        -mt-1
          whitespace-nowrap
          text-center
          text-[12px]
          font-medium
          leading-tight
          text-[#171717]
        "
      >
        {stage.title}
      </p>
    </motion.div>
  );
}

/* ============================================================
   VERTICAL STAGE LINE
============================================================ */

function StageLine({
  index,
}: {
  index: number;
}) {
  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: 34,
        opacity: 1,
      }}
      transition={{
        delay: index * STAGE_STEP + 0.5,
        duration: LINE_DURATION,
        ease,
      }}
      className="
        absolute
        left-1/2
        top-[57px]
        z-0
        w-[2px]
        -translate-x-1/2
        bg-[#B8D7FA]
      "
    />
  );
}

/* ============================================================
   BROKEN CONNECTION
============================================================ */
function MobileBrokenConnection({
  connection,
  index,
}: {
  connection: Connection;
  index: number;
}) {
  /*
    Sequence:

    Stage
      ↓
    Stage line
      ↓
    Broken connection
      ↓
    Card
      ↓
    Next stage
  */

  const delay = index * STAGE_STEP + CONNECTION_DELAY;

  return (
    <div
      className="
        relative
        flex
        w-full
        items-center
        gap-0
      "
    >
      {/* ======================================================
          LEFT TIMELINE
      ======================================================= */}

      <div
        className="
          relative
          flex
          w-[62px]
          shrink-0
          justify-center
        "
      >
        {/* VERTICAL RED LINE */}

        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: 34,
            opacity: 1,
          }}
          transition={{
            delay,
            duration: CONNECTION_DURATION,
            ease,
          }}
          className="
            absolute
            top-0
            left-1/2
            w-[2px]
            -translate-x-1/2
            bg-[#FFD3CA]
          "
        />

        {/* RED BROKEN LINK */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: delay + 0.25,
            duration: 0.35,
            ease,
          }}
          className="
            absolute
            -top-[8px]
            z-30
            flex
            size-[18px]
            items-center
            justify-center
            rounded-full
            bg-white
          "
        >
          <Link2Off
            className="
              size-[13px]
              text-red-500
            "
            strokeWidth={2.5}
          />
        </motion.div>
      </div>

      {/* ======================================================
          RED DASHED CONNECTION
      ======================================================= */}

      <div
        className="
          relative
          flex
          flex-1
          items-center
          mr-[5%]
        "
      >
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "100%",
            opacity: 1,
          }}
          transition={{
            delay: delay + 0.25,
            duration: CONNECTION_DURATION,
            ease,
          }}
          className="
            absolute
            left-0
            top-1/2
            h-[1px]
            -translate-y-1/2
            border-t-2
            border-dashed
            border-red-400
          "
        />

        {/* ==================================================
            CONNECTION CARD
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            delay: delay + CARD_DELAY,
            duration: 0.5,
            ease,
          }}
          className="
            relative
            z-20
            ml-auto
            w-[calc(100%-30px)]
            max-w-[190px]
            
          "
        >
          <div
            className="
              rounded-sm
              border
              border-red-200
              bg-[#FFF8F6]
              px-3
              py-2.5
              text-center
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
            "
          >
            <h3
              className="
                text-[11px]
                font-bold
                leading-4
                text-[#171717]
              "
            >
              {connection.title}
            </h3>

            <p
              className="
                mt-1
                text-[11px]
                leading-[17px]
                text-[#444]
              "
            >
              {connection.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============================================================
   TOP WHITE SECTION
============================================================ */

function MobileBreaksCard({data}: {data: ContinuityData}) {
  return (
    <div
      className="
        relative
        z-10
        w-full
        rounded-md
        bg-white
        px-sm
        py-[15%]
        shadow-web-medium
      "
    >
      {/* ======================================================
          TITLE
      ======================================================= */}

      <motion.h3
        initial={{
          opacity: 0,
          y: -8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease,
        }}
        className="
          text-center
          text-base
          font-bold
          
        "
      >
        {data?.alignmentTitle}
      </motion.h3>

      {/* ======================================================
          TIMELINE
      ======================================================= */}

      <div className="mt-5">

        {/* ====================================================
            APPLICATION
        ===================================================== */}

        <div className="relative flex">
          <div className="relative flex w-[62px] shrink-0 justify-center">
            <MobileStage
              stage={data.stages[0]}
              index={0}
            />

            <StageLine index={0} />
          </div>

          <div className="flex-1" />
        </div>

        {/* ====================================================
            CONNECTION 1
        ===================================================== */}

        <MobileBrokenConnection
          connection={data
            .connections[0]}
          index={0}
        />

        {/* ====================================================
            INTERVIEW
        ===================================================== */}

        <div className="relative flex">
          <div className="relative flex w-[62px] shrink-0 justify-center">
            <MobileStage
              stage={data.stages[1]}
              index={1}
            />

            <StageLine index={1} />
          </div>

          <div className="flex-1" />
        </div>

        {/* ====================================================
            CONNECTION 2
        ===================================================== */}

        <MobileBrokenConnection
          connection={data.connections[1]}
          index={1}
        />

        {/* ====================================================
            OFFER
        ===================================================== */}

        <div className="relative flex">
          <div className="relative flex w-[62px] shrink-0 justify-center">
            <MobileStage
              stage={data.stages[2]}
              index={2}
            />

            <StageLine index={2} />
          </div>

          <div className="flex-1" />
        </div>

        {/* ====================================================
            CONNECTION 3
        ===================================================== */}

        <MobileBrokenConnection
          connection={data.connections[2]}
          index={2}
        />

        {/* ====================================================
            JOINING
        ===================================================== */}

        <div className="relative flex">
          <div className="relative flex w-[62px] shrink-0 justify-center">
            <MobileStage
              stage={data.stages[3]}
              index={3}
            />
          </div>

          <div className="flex-1" />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ALIGNMENT CONNECTS PILL
============================================================ */

function AlignmentConnectsPill({data}: {data: ContinuityData}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay:5 ,
        duration: 0.6,
        ease,
      }}
      className="
        absolute
        bottom-[-27px]
        left-1/2
        z-40
        flex
        min-h-[58px]
        min-w-[238px]
        -translate-x-1/2
        items-center
        gap-2
        rounded-full
        border
        border-[#B2D0F6]
        bg-[#EEF6FF]
        px-4
        py-2
        shadow-[0_5px_20px_rgba(6,104,225,0.08)]
      "
    >
      {/* ICON */}

      <div className="flex shrink-0">
        <Image
                src="/icons/star-icon.svg"
                alt="Alignment"
                width={100}
                height={100}
                className="size-iconsize-xl"
              />
      </div>

      {/* TEXT */}

      <p
        className="
          text-xl
          font-bold
          leading-[18px]
          text-[#0668E1]
        "
      >
        {data.alignmentTitle}
      </p>
    </motion.div>
  );
}

/* ============================================================
   CONTINUITY STAGE
============================================================ */

function ContinuityStage({
  data,
  stage,
  index,
}: {
  data: ContinuityData;
  stage: Stage;
  index: number;
}) {
  /*
    BLUE CARD APPEARS FIRST

    5.1s → Blue card starts appearing

    AFTER BLUE CARD:
    
    Application
        ↓
      line
        ↓
    Interview
        ↓
      line
        ↓
      Offer
        ↓
      line
        ↓
     Joining
  */

  const BLUE_CARD_DELAY = 5.1;

  const stageDelay =
    BLUE_CARD_DELAY + 0.9 + index * 1.8;

  const lineDelay =
    stageDelay + 0.65;

  return (
    <div
      className="
        relative
        flex
        
        w-full
        items-start
      "
    >
      {/* ICON */}

      <div
        className="
          relative
          z-20
          flex
          flex-col
          w-[92px]
          shrink-0
          items-center
          justify-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: stageDelay,
            duration: 0.5,
            ease,
          }}
          className="
            relative
            z-20
            flex
            size-[40px]
            items-center
            justify-center
          "
        >
          <Image
            src={stage.icon}
            alt={stage.title}
            width={100}
            height={100}
            className="
              size-[29px]
              object-contain
              brightness-0
              invert
            "
          />
        </motion.div>
{/* TITLE */}

      <motion.p
        initial={{
          opacity: 0,
          x: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: stageDelay + 0.2,
          duration: 0.5,
          ease,
        }}
        className="
         
          text-[12px]
          font-medium
          leading-none
          text-white
        "
      >
        {stage.title}
      </motion.p>
        {/* LINE */}

        {index < data.stages.length - 1 && (
          <motion.div
            initial={{
              height: 0,
              opacity: 1,
            }}
            animate={{
              height: 25,
              opacity: 1,
            }}
            transition={{
              delay: lineDelay,
              duration: 0.8,
              ease,
            }}
            className="
              absolute
              left-1/2
              top-[62px]
              z-0
              w-[2px]
              -translate-x-1/2
              bg-white
            "
          />
        )}
      </div>

      
    </div>
  );
}
/* ============================================================
   ACTION
============================================================ */

function ContinuityAction({
  data,
  action,
  index,
}: {
  data: ContinuityData;
  action: string;
  index: number;
}) {
  /*
    ACTIONS ALSO START AFTER BLUE CARD

    Blue card
       ↓
    Coordinate
       ↓
    Prepare
       ↓
    Learn
       ↓
    Decide
  */

  const BLUE_CARD_DELAY = 5.1;

  const actionDelay =
    BLUE_CARD_DELAY + 1.25 + index * 1.8;

  return (
    <div className="flex flex-col items-center mt-[20px] ">

      {/* ACTION */}

      <motion.p
        initial={{
          opacity: 0,
          x: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: actionDelay,
          duration: 0.5,
          ease,
        }}
        className="
          text-[13px]
          font-bold
          leading-none
          text-white
        "
      >
        {action}
      </motion.p>

      {/* DOWN ARROW */}

      {index < data.continuityActions.length - 1 && (
        <motion.div
          initial={{
            opacity: 0,
            y: -5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: actionDelay + 0.45,
            duration: 0.4,
            ease,
          }}
          className="
            mt-[32px]
            text-[17px]
            font-light
            leading-none
            text-white
            rotate-90
          "
        >
          »
        </motion.div>
      )}
    </div>
  );
}

/* ============================================================
   BLUE CONTINUITY CARD
============================================================ */

function AlignmentContinuityMobile({data}: {data: ContinuityData}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 5.1,
        duration: 0.8,
        ease,
      }}
      className="
        relative
        z-10
        mt-md
        w-full
        overflow-hidden
        rounded-md
        bg-[#0668E1]
        px-[4%]
        py-[15%]
        text-white
      "
    >
      <div className="flex w-full">

        {/* LEFT STAGES */}

        <div className="flex w-[62px] shrink-0 flex-col">
          {data.stages.map((stage, index) => (
            <div
              key={stage.title}
              className="
                flex
                h-[87px]
                w-full
                items-start
              "
            >

              <ContinuityStage
              data={data}
                stage={stage}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* RIGHT ACTIONS */}

        <div className="flex flex-1 flex-col">
          {data.continuityActions.map((action, index) => (
            <div
              key={action}
              className="
                flex
                h-[87px]
                w-full
                flex-col
                items-center
                justify-start
              "
            >
              <ContinuityAction
                data={data}
                action={action}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESCRIPTION */}

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
          delay: 7.0,
          duration: 0.6,
          ease,
        }}
        className="
          mx-auto
          mt-2
          max-w-[310px]
          text-center
          text-xl
          font-medium
          leading-[18px]
          text-white
          px-[5%]
        "
      >
        {data.continuityDescription}
      </motion.p>
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
                  delay: 7.2,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mx-auto
                  mt-10
                  flex
                  w-[90%]
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white
                  bg-white/15
                  px-7
                  py-4
                  text-xl
                  font-bold
                  backdrop-blur-sm
                "
              >
                  <Image
              src="/icons/star-icon.svg"
              alt="Alignment"
              width={100}
              height={100}
              className="size-iconsize-md  brightness-0 invert"
            />
      
                <span>
                  Alignment Preserve Employer Continuity
                </span>
              </motion.div>
    </motion.div>
  );
}

/* ============================================================
   MAIN MOBILE COMPONENT
============================================================ */

export default function HiringContinuityMobile({ data }: { data: ContinuityData }) {
  return (
    <div className="w-full ">

      {/* ======================================================
          WHITE BREAKS CARD
      ======================================================= */}

      <div className="relative w-full">
        <MobileBreaksCard data={data} />

        {/* ALIGNMENT PILL */}

        <AlignmentConnectsPill data={data} />
      </div>

      {/* ======================================================
          BLUE CONTINUITY CARD
      ======================================================= */}

      <AlignmentContinuityMobile data={data} />
    </div>
  );
}