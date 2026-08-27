"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Role = "employer" | "recruiter" | "candidate";

type ContinuityCard = {
  title: string;
  description: string;
  icon: string;
  iconCircle:string,
  breakTitle: string;
  breakDescription: string;
};

type RoleData = {
  label: string;
  image: string;
  stages: string[];
  cards: ContinuityCard[];
  bottomCards: {
    type: "within" | "preserve" | "across";
    icon: string;
    title: string;
    description: string;
  }[];
};

const roleData: Record<Role, RoleData> = {
  employer: {
    label: "Employer",
    image: "/home/employer-thinking.svg",

    stages: ["Target", "Evaluation", "Selection", "Hiring"],

    cards: [
      {
        title: "TARGET → EVALUATION",
        description:
          "The employer moves from defining hiring targets to aligning priorities and capacity for candidate evaluation.",
        icon: "/home/icons/target-evalution-red-icon.svg",
        iconCircle:"/home/icons/target-evalution-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "The hiring target is defined, but capacity, hiring pressure, and position load are not assessed together—putting target achievement at risk.",
      },
      {
        title: "EVALUATION → SELECTION",
        description:
          "The employer moves from evaluating candidates to selecting the right talent through consistent standards.",
        icon: "/home/icons/evaluation-selection-red-icon.svg",
        iconCircle:"/home/icons/evaluation-selection-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "Candidates are evaluated, but inconsistent evaluation criteria and fragmented feedback across evaluators often delay clear, timely selection decisions.",
      },
      {
        title: "SELECTION → HIRING",
        description:
          "The employer moves from selecting a candidate to securing the hire through joining.",
        icon: "/home/icons/selecion-hiring-red-icon.svg",
        iconCircle:"/home/icons/selecion-hiring-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "The candidate is selected, but weak post-offer engagement, changing candidate intent, and disconnected commitment signals put the hire at risk.",
      },
    ],

    bottomCards: [
      {
        type: "within",
        icon: "/home/icons/broken-link-icon.svg",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type: "preserve",
        icon: "/home/icons/star-icon.svg",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },
      {
        type: "across",
        icon: "/home/icons/department-line-icon.svg",
        title: "Continuity breaks Across",
        description: "When coordination breaks.",
      },
    ],
  },

  recruiter: {
    label: "Recruiter",
    image: "/home/recruiter-thinking.svg",

    stages: ["Sourcing", "Scheduling", "Evaluation", "Closure"],

    cards: [
      {
        title: "SOURCING → SCHEDULING",
        description:
          "The recruiter moves from identifying a candidate to coordinating and confirming an interview.",
        icon: "/home/icons/sourcing-scheduling-red-icon.svg",
        iconCircle:"/home/icons/sourcing-scheduling-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "The recruiter identifies the candidate, but changing availability, reschedules, and scattered communication delay interview confirmation.",
      },
      {
        title: "SCHEDULING → EVALUATION",
        description:
          "The recruiter moves from scheduling the interview to securing reliable participation and completing the evaluation.",
        icon: "/home/icons/target-evalution-red-icon.svg",
        iconCircle:"/home/icons/target-evalution-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "The interview is scheduled, but last-minute withdrawals, candidate no-shows, and delayed panel feedback prevent a reliable transition to evaluation.",
      },
      {
        title: "EVALUATION → CLOSURE",
        description:
          "The recruiter moves from evaluation to communicating the decision and sustaining commitment through joining.",
                icon: "/home/icons/selecion-hiring-red-icon.svg",
        iconCircle:"/home/icons/selecion-hiring-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "Evaluation is completed, but delayed decision communication, weak post-offer engagement, and changing candidate intent put joining at risk.",
      },
    ],

    bottomCards: [
      {
        type: "within",
        icon: "/home/icons/broken-link-icon.svg",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type: "preserve",
        icon: "/home/icons/star-icon.svg",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },
      {
        type: "across",
        icon: "/home/icons/department-line-icon.svg",
        title: "Continuity breaks Across",
        description: "When coordination breaks.",
      },
    ],
  },

  candidate: {
    label: "Candidate",
    image: "/home/candidate-thinking.svg",

    stages: ["Application", "Interview", "Offer", "Joining"],

    cards: [
      {
        title: "APPLICATION → INTERVIEW",
        description:
          "The candidate moves from applying for a role to confirming and preparing for an interview.",
        icon: "/home/icons/application-interview-red-icon.svg",
        iconCircle:"/home/icons/application-interview-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "The candidate applies for the role, but delayed responses, scheduling changes, and scattered communication prevent the candidate from confirming and preparing for the interview.",
      },
      {
        title: "INTERVIEW → OFFER",
        description:
          "The candidate moves from completing the interview to understanding the hiring outcome and next steps.",
        icon: "/home/icons/interview-offer-red-icon.svg",
        iconCircle:"/home/icons/interview-offer-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "The interview is completed, but delayed feedback, unclear decision status, and inconsistent communication leave the candidate uncertain about the outcome and what follows.",
      },
      {
        title: "OFFER → JOINING",
        description:
          "The candidate moves from receiving an offer to evaluating it, communicating a decision, and progressing toward joining.",
                icon: "/home/icons/selecion-hiring-red-icon.svg",
        iconCircle:"/home/icons/selecion-hiring-blue-icon.svg",
        breakTitle: "Continuity Break",
        breakDescription:
          "The offer is received, but limited evaluation time, decision pressure, and weak post-offer engagement put the candidate’s offer decision and joining commitment at risk.",
      },
    ],

    bottomCards: [
      {
        type: "within",
        icon: "/home/icons/broken-link-icon.svg",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type: "preserve",
        icon: "/home/icons/star-icon.svg",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },
      {
        type: "across",
        icon: "/home/icons/department-line-icon.svg",
        title: "Continuity breaks Across",
        description: "When coordination breaks.",
      },
    ],
  },
};

export default function HiringContinuity() {
  const [activeRole, setActiveRole] =
    useState<Role>("recruiter");

  // Card 0 = first icon active initially
  const [activeCard, setActiveCard] = useState(0);

  const data = roleData[activeRole];
  const currentCard = data.cards[activeCard];

  /* ============================================================
     CHANGE ROLE
  ============================================================ */

  const handleRoleChange = (role: Role) => {
    setActiveRole(role);
    setActiveCard(0);
  };

  /* ============================================================
     PREVIOUS
  ============================================================ */

  const handlePrevious = () => {
    if (activeCard > 0) {
      setActiveCard((current) => current - 1);
    }
  };

  /* ============================================================
     NEXT
  ============================================================ */

  const handleNext = () => {
    if (activeCard < data.cards.length - 1) {
      setActiveCard((current) => current + 1);
    }
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto w-full">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-lg text-center">
          <p className="mb-xs text-xl font-bold uppercase tracking-wide text-[#0668E1]">
            THREE ACTORS. THREE JOURNEYS.
          </p>

          <h2 className="text-h2 font-extrabold">
            One Hiring Continuity.
          </h2>
        </div>

        {/* =====================================================
            ROLE TABS
        ===================================================== */}

        <div className="mb-xl flex justify-center">
          <div
            className="
              flex
              
              items-center
              rounded-full
              border
              border-[#B2D0F6]
              bg-white
            gap-xs
            
            p-xs
            "
          >
            {(["employer", "recruiter", "candidate"] as Role[]).map(
              (role) => {
                const item = roleData[role];
                const active = activeRole === role;

                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleRoleChange(role)}
                    className={`
                      flex
                      h-full
                      
                      items-center
                      justify-center
                      rounded-full
                      px-md
                      md:px-lg
                      py-sm
                      text-xl
                      md:text-base
                      font-bold
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-[#0668E1] text-white"
                          : "text-[#0668E1] hover:bg-[#F2F7FF]"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* =====================================================
            MAIN AREA
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-[5%]
            py-[1%]
          "
        >

{/* ===================================================
    LEFT SIDE
=================================================== */}

<div
  className="
    
    flex
    w-full
    items-center
    justify-center
    
    md:w-[35%]
    p-xl
    md:p-0
  "
>
  <div className="relative w-fit flex justify-center items-center">
 


{/* =================================================
    CIRCULAR PROGRESS LINE
================================================= */}

<div
  className="
    pointer-events-none
    absolute
    z-[5]
    size-[clamp(310px,calc(410_/_var(--width)*100vw),630px)]
    max-w-[90vw]
    max-h-[90vw]
  "
>
  <svg
    viewBox="0 0 430 430"
    preserveAspectRatio="xMidYMid meet"
    className="
      block
      h-full
      w-full
    "
  >
    {/* =================================================
        LIGHT CIRCLE — FULL ORBIT
    ================================================= */}

    <circle
      cx="215"
      cy="215"
      r="180"
      fill="none"
      stroke="#D9E9FC"
      strokeWidth="4"
    />

    {/* =================================================
        RED CIRCULAR PROGRESS
        Starts at TOP and moves CLOCKWISE
    ================================================= */}

    <motion.circle
      cx="215"
      cy="215"
      r="180"
      fill="none"
      stroke="#F0431D"
      strokeWidth="4"
      strokeLinecap="round"
      pathLength={1}
      transform="rotate(-90 215 215)"
      initial={{
        pathLength: 0.01,
      }}
      animate={{
        pathLength:
          activeCard === 0
            ? 0.36
            : activeCard === 1
              ? 0.64
              : 1,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  </svg>
</div>

  {/* =================================================
      PERSON IMAGE
  ================================================= */}

  <AnimatePresence mode="wait">
    <motion.div
      key={data.image}
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -20,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-10
        flex
        size-[clamp(240px,calc(310_/_var(--width)*100vw),500px)]
        max-w-[90vw]
        items-end
        justify-center
      "
    >
      <Image
        src={data.image}
        alt={data.label}
        width={400}
        height={500}
        className="
          h-full
          w-auto
          max-w-full
          object-contain
        "
      />
    </motion.div>
  </AnimatePresence>

  {/* =================================================
      ICON 1 — TOP
  ================================================= */}

  <motion.button
    type="button"
    onClick={() => setActiveCard(0)}
    animate={{
      scale: activeCard === 0 ? 1.05 : 1,
    }}
    transition={{
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      absolute
      left-1/2

      -top-[clamp(30px,calc(40_/_var(--width)*100vw),80px)]

      md:-top-[clamp(25px,calc(40_/_var(--width)*100vw),80px)]

      z-20
      flex
      p-sm
      -translate-x-1/2
      items-center
      justify-center
      rounded-md
      border
      border-[#BBD4F5]
      bg-white
    "
  >
    <Image
      src={data.cards[0].iconCircle}
      alt=""
      width={40}
      height={40}
      className={`
        size-iconsize-md
        max-[480px]:size-[clamp(28px,9vw,40px)]
        transition-all
        duration-500
        ${
          activeCard === 0
            ? "opacity-100"
            : "opacity-65"
        }
      `}
    />
  </motion.button>

  {/* =================================================
      ICON 2 — BOTTOM RIGHT
  ================================================= */}

  <motion.button
    type="button"
    onClick={() => setActiveCard(1)}
    animate={{
      scale: activeCard === 1 ? 1.05 : 1,
    }}
    transition={{
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      absolute
      z-20
      flex
      items-center
      justify-center
      rounded-md
      border
      border-[#BBD4F5]
      bg-white
      p-sm

      /*
       * DESKTOP — KEEP YOUR ORIGINAL VALUE
       */
      right-[calc(50%-190px)]-
      bottom-[clamp(25px,calc(40_/_var(--width)*100vw),60px)]

      /*
       * MOBILE
       */
      -right-[4%]
      max-md:bottom-[clamp(25px,8vw,45px)]
    "
  >
    <Image
      src={data.cards[1].iconCircle}
      alt=""
      width={40}
      height={40}
      className={`
        size-iconsize-md
        max-[480px]:size-[clamp(28px,9vw,40px)]
        transition-all
        duration-500
        ${
          activeCard === 1
            ? "opacity-100"
            : "opacity-65"
        }
      `}
    />
  </motion.button>

  {/* =================================================
      ICON 3 — BOTTOM LEFT
  ================================================= */}

  <motion.button
    type="button"
    onClick={() => setActiveCard(2)}
    animate={{
      scale: activeCard === 2 ? 1.05 : 1,
    }}
    transition={{
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      absolute
      z-20
      flex
      items-center
      justify-center
      rounded-md
      border
      border-[#BBD4F5]
      bg-white
      p-sm

      /*
       * DESKTOP — KEEP YOUR ORIGINAL VALUE
       */
      left-[calc(50%-180px)]-
      bottom-[clamp(25px,calc(40_/_var(--width)*100vw),60px)]

      /*
       * MOBILE
       */
      -left-[4%]
      max-md:bottom-[clamp(25px,8vw,45px)]
    "
  >
    <Image
      src={data.cards[2].iconCircle}
      alt=""
      width={40}
      height={40}
      className={`
        size-iconsize-md
        max-[480px]:size-[clamp(28px,9vw,40px)]
        transition-all
        duration-500
        ${
          activeCard === 2
            ? "opacity-100"
            : "opacity-65"
        }
      `}
    />
  </motion.button>
  </div>
</div>
          {/* ===================================================
              RIGHT SIDE
          =================================================== */}

          <div className="w-[90%] md:w-[60%] relative flex items-center gap-sm">

            {/* =================================================
                PREVIOUS
            ================================================= */}

            <button
              type="button"
              onClick={handlePrevious}
              disabled={activeCard === 0}
              aria-label="Previous condition"
              className={`
                absolute
md:relative
z-10
-left-[5%]
md:left-0
                size-iconsize-lg
                shrink-0
                items-center
                justify-center
                rounded-full
                transition-all
                flex
                
                ${
                  activeCard === 0
                    ? "cursor-not-allowed bg-[#0668E1] text-white opacity-50"
                    : "bg-[#0668E1] text-white hover:bg-[#055BC6] cursor-pointer"
                }
              `}
            >
              <ArrowLeft className="size-iconsize-sm scale-120" />
            </button>

            {/* =================================================
                ACTIVE CARD
            ================================================= */}

            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeRole}-${activeCard}`}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    w-full
                    rounded-md
                    border
                    border-[#DCE8F6]
                    bg-white
                    p-md
                    shadow-web-medium
                  "
                >

                  {/* TITLE */}

                  <h3 className="text-base font-bold">
                    {currentCard.title.split(" → ")[0]}

                    <span className="text-[#0668E1]">
                      {" → "}
                      {currentCard.title.split(" → ")[1]}
                    </span>
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-xs text-xl font-medium">
                    {currentCard.description}
                  </p>

                  {/* =================================================
                      CONTINUITY BREAK
                  ================================================= */}

                  <div
                    className="
                      mt-sm
                      rounded-sm
                      border
                      border-[#FFD3CA]
                      bg-[#FFF4F2]
                      p-sm
                    "
                  >
                    <div className="mb-xs">
                      <Image
                        src={currentCard.icon}
                        alt=""
                        width={100}
                        height={100}
                        className="size-iconsize-sm"
                      />
                    </div>

                    <h4 className="text-xl font-bold">
                      {currentCard.breakTitle}
                    </h4>

                    <p className="mt-xs text-xl font-medium">
                      {currentCard.breakDescription}
                    </p>
                  </div>

                  {/* =================================================
                      MOBILE PROGRESS
                  ================================================= */}

                  <div className="mt-md flex justify-center gap-xs md:hidden">
                    {data.cards.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveCard(index)}
                        className={`
                          h-[6px]
                          rounded-full
                          transition-all
                          ${
                            activeCard === index
                              ? "w-[24px] bg-[#0668E1]"
                              : "w-[6px] bg-[#D0E5FF]"
                          }
                        `}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =================================================
                NEXT
            ================================================= */}

            <button
              type="button"
              onClick={handleNext}
              disabled={
                activeCard === data.cards.length - 1
              }
              aria-label="Next condition"
              className={`
                absolute
                md:relative
                -right-[5%]
                md:right-0
                z-10
                size-iconsize-lg
                shrink-0
                items-center
                justify-center
                rounded-full
                transition-all
                flex
                ${
                  activeCard === data.cards.length - 1
                    ? "cursor-not-allowed bg-[#0668E1] text-white opacity-50"
                    : "bg-[#0668E1] text-white hover:bg-[#055BC6] cursor-pointer"
                }
              `}
            >
              <ArrowRight className="size-iconsize-sm scale-120" />
            </button>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CARDS
        ===================================================== */}

        <div className="mt-lg grid grid-cols-1 gap-md md:grid-cols-3">
          {data.bottomCards.map((card) => {
            const preserve = card.type === "preserve";

            return (
              <div
                key={card.type}
                className={`
                  rounded-md
                  border
                  p-sm
                  ${
                    preserve
                      ? "border-[#0668E1] bg-[#0668E1] text-white"
                      : "border-[#DEEDFF] bg-white text-[#303030]"
                  }
                `}
              >
                <div className="flex items-start gap-xs">

                  <div
                    className={`
                      flex
                      size-iconsize-md
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      ${
                        preserve
                          ? "bg-white"
                          : "bg-[#DEEDFF]"
                      }
                    `}
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      height={100}
                      width={100}
                      className="size-iconsize-sm"
                    />
                  </div>

                  <div>
                    <span className="text-base font-bold">
                      {card.title}
                    </span>

                    <p
                      className={`
                        mt-1
                        text-xl
                        font-medium
                        ${
                          preserve
                            ? "text-white"
                            : "text-[#303030]"
                        }
                      `}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}