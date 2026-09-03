"use client";

import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

// ============================================================
// TYPES
// ============================================================

type Actor = {
  id: string;
  role: string;
  title: string;
  keywords: string;
  description: string;
  buttonText: string;
  avatar: string;
  buttonLink:string;
};

// ============================================================
// DATA
// ============================================================

const actors: Actor[] = [
  {
    id: "employer",
    role: "Employer",
    title: "Hiring Strategy, Aligned",
    keywords: "Calibrate · Diagnose · Standardize · Protect",
    description:
      "Keep targets, execution signals, evaluations, and hiring transitions connected as business and market conditions change.",
    buttonText: "Explore Employer Alignment",
    avatar: "/icons/employer-round-icon.svg",
    buttonLink:""
  },
  {
    id: "recruiter",
    role: "Recruiter",
    title: "Talent Acquisition, Aligned",
    keywords: "Coordinate · Anticipate · Evaluate · Engage",
    description:
      "Keep schedules, participation, feedback, and candidate commitment connected across every hiring stage.",
    buttonText: "Explore Recruiter Alignment",
    avatar: "/icons/recruiters-round-icon.svg",
    buttonLink:""
  },
  {
    id: "candidate",
    role: "Candidate",
    title: "Career Progress, Aligned",
    keywords: "Coordinate · Prepare · Learn · Decide",
    description:
      "Keep interviews, verified employer insights, feedback, and offer decisions connected across opportunities.",
    buttonText: "Explore Candidate Alignment",
    avatar: "/icons/candidate-round-icon.svg",
buttonLink:""
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AlignmentActors() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mb-xl">
          <h2 className="text-h2 font-extrabold">
            Alignment for{" "}
            <span className="text-[#0668E1]">
              Every Actor
            </span>
          </h2>

          <p className="text-base font-medium">
            The{" "}
            <span className="font-bold">
              Alignment Architecture
            </span>{" "}
            supports three distinct goals across the hiring ecosystem.
          </p>
        </div>

        {/* ====================================================
            DESKTOP
        ==================================================== */}

        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-xl">
            {actors.map((actor, index) => (
              <motion.div
                key={actor.id}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.7,
                  delay: index * 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <AlignmentCard actor={actor} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ====================================================
            MOBILE
        ==================================================== */}

        <div className="grid grid-cols-1 gap-xl md:hidden">
          {actors.map((actor, index) => (
            <motion.div
              key={actor.id}
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.7,
                delay: index * 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <AlignmentCard actor={actor} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ============================================================
// CARD
// ============================================================

function AlignmentCard({
  actor,
}: {
  actor: Actor;
}) {
  return (
    <article
      className="
        relative
        min-h-[260px]
        overflow-hidden
        rounded-md
        mx-1
        border
        border-[#dce9f8]
        bg-white
        shadow-web-mini
      "
    >

      {/* ====================================================
          CARD CONTENT
      ==================================================== */}

      <div
        className="
          relative
          flex
          flex-col
          rounded-md
          bg-white
          p-md
        "
      >

        {/* ==================================================
            AVATAR
        ================================================== */}

        <div className="flex justify-center">
          <div>
            <img
              src={actor.avatar}
              alt={actor.role}
              className="size-iconsize-xl"
            />
          </div>
        </div>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="mt-md flex flex-col items-center justify-center">

          {/* TITLE */}

          <h3
            className="
              text-h6
              font-bold
              w-[60%]
              text-center
            "
          >
            {actor.title}
          </h3>

          {/* KEYWORDS */}

          <p
            className="
              mt-xs
              px-1
              text-xl
              font-bold
              text-[#0668E1]
            "
          >
            {actor.keywords}
          </p>

          {/* DESCRIPTION */}

          <p
            className="
              mt-sm
              text-xl
              font-medium
              text-center
            "
          >
            {actor.description}
          </p>

        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <div className="mt-auto pt-lg">
          <Link
          href={`/resources/alignment-test/register?mode=single&phase=uncertainty&role=${actor.role.toLowerCase()}`}
            className="
              group
              relative
              flex
              h-btn-h
              cursor-pointer
              items-center
              justify-center
              overflow-hidden
              rounded-md
              border-2
              border-[#0668E1]
              bg-transparent
              pl-sm
              shadow-web-mini
            "
          >

            {/* Blue background */}

            <div
              className="
                absolute
                inset-0
                z-0
                bg-[#0668E1]
                scale-x-0
              
                origin-left
                transition-transform
                duration-500
                ease-out
                group-hover:scale-x-100
              "
            />

            {/* Content */}

            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-center
                gap-sm
              "
            >

              {/* Text */}

              <span
                className="
                  font-bold
                  text-xl
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {actor.buttonText}
              </span>

              {/* Arrow */}

              <FaArrowRight
                className="
                  size-iconsize-sm
                  scale-90
                  text-white
                  opacity-0
                  -translate-x-2
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />

            </div>
          </Link>
        </div>

      </div>
    </article>
  );
}