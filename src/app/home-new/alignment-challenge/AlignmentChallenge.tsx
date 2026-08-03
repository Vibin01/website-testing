"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  AlertCircle,
  Users,
} from "lucide-react";

const cards = [
  {
    number: "01",
    type: "VISION GAP",
    actors: "Candidate ↔ Employer",
    description:
      "Candidate expectations and employer begin to diverge.",
    drift: [
      "Hesitation grows",
      "Confidence weakens",
      "Decisions slow",
    ],
    aligned: [
      "Clearer expectations",
      "Stronger decision confidence",
      "Fewer late-stage declines",
    ],
  },
  {
    number: "02",
    type: "STRATEGY GAP",
    actors: "Employer ↔ Recruiter",
    description:
      "Employer priorities and recruiter execution begin to diverge.",
    drift: [
      "Pressure builds",
      "Role progress slows",
      "Hiring targets slip",
    ],
    aligned: [
      "Clearer priorities",
      "Stronger hiring momentum",
      "More predictable target progress",
    ],
  },
  {
    number: "03",
    type: "EXECUTION GAP",
    actors: "Recruiter ↔ Candidate",
    description:
      "Recruiter coordination and candidate begin to diverge.",
    drift: [
      "Responses slow",
      "Interviews are missed",
      "Feedback stalls",
    ],
    aligned: [
      "Clearer communication",
      "More reliable interviews",
      "Steadier stage progression",
    ],
  },
];

export default function AlignmentChallenge() {
  return (
    <section
      className="
        relative
        max-h-[100vh]
        w-full
        overflow-hidden
        bg-[linear-gradient(135deg,#FFFFFF_0%,#F7FBFF_45%,#EAF4FF_100%)]
        py-8
        sm:py-10
        lg:py-8
      "
    >
     

      <div className="relative mx-auto w-full px-[5%]">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

        

          {/* Heading */}

          <h2
            className="
              text-h2
              font-bold
              leading-[1.05]
              tracking-[-0.045em]
              text-[#111827]
              
            "
          >
            Alignment Weakens{" "}
            <span className="bg-[linear-gradient(90deg,#0668E1,#3B82F6)] bg-clip-text text-transparent">
              at the Seams.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-md
              leading-5
              text-slate-500
              sm:text-sm mt-sm
            "
          >
            Every hiring interaction connects two actors. When their
            expectations, priorities or actions begin to separate,
            an alignment gap emerges.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <div className="mt-xl h-[50vh] md:h-auto overflow-y-scroll md:overflow-y-visible grid gap-md md:grid-cols-3">
  {cards.map((card, index) => (
    <motion.article
      key={card.number}
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
        duration: 0.4,
        delay: index * 0.08,
      }}
     
      className="group relative"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-md
          border
          border-slate-200
          bg-white/90
          p-3
          shadow-[0_5px_20px_rgba(15,23,42,0.035)]
          backdrop-blur-sm
          transition-all
          duration-300
          group-hover:border-[#0668E1]/20
          group-hover:shadow-[0_10px_25px_rgba(6,104,225,0.07)]
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div
            className="
              flex
              p-sm              items-center
              justify-center
              rounded-md
              bg-[#0668E1]/[0.07]
              text-[#0668E1]
              transition
              duration-300
              group-hover:bg-[#0668E1]
              group-hover:text-white
            "
          >
            <Users className="size-iconsize-sm" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <div className="mt-sm">
          <p className="text-md font-bold tracking-[0.16em] text-[#0668E1]">
            {card.type}
          </p>

          <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
            {card.actors}
          </h3>

          <p className="mt-1 text-lg text-slate-500">
            {card.description}
          </p>
        </div>

        {/* Divider */}
        <div className="my-2.5 h-px bg-slate-100" />

        {/* Drift */}
        <div>
          <div className="mb-1 flex items-center gap-1">
            <div
              className="
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                bg-slate-100
                text-slate-400
              "
            >
              <AlertCircle size={8} />
            </div>

            <span className="text-xl font-bold tracking-[0.1em] text-slate-400">
              WHEN ALIGNMENT DRIFTS
            </span>
          </div>

          <div className="space-y-0.5">
            {card.drift.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-1.5
                  text-lg
                  leading-4
                  text-slate-500
                "
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300" />

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Aligned */}
        <div
          className="
            mt-2.5
            rounded-md
            border
            border-[#0668E1]/10
            bg-[linear-gradient(135deg,#F8FBFF_0%,#EDF6FF_100%)]
            p-2
          "
        >
          <div className="mb-1 flex items-center gap-1">
            <div
              className="
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                bg-[#0668E1]/10
                text-[#0668E1]
              "
            >
              <Check size={8} />
            </div>

            <span className="text-xl font-bold tracking-[0.1em] text-[#0668E1]">
              WHEN ALIGNED
            </span>
          </div>

          <div className="space-y-0.5">
            {card.aligned.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-1.5
                  text-lg
                  leading-4
                  font-medium
                  text-slate-700
                "
              >
                <span
                  className="
                    flex
                    h-3
                    w-3
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0668E1]
                  "
                >
                  <Check size={7} className="text-white" />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>

    
      </div>
    </motion.article>
  ))}
</div>

      </div>
    </section>
  );
}