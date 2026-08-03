"use client";

import { motion } from "motion/react";
import { Brain, Users, Activity, ArrowRight, CheckCircle2 } from "lucide-react";

const cards = [
  {
    number: "01",
    label: "ALIGNMENT WITHIN",
    title: "Head. Heart. Hand.",
    highlight: " In Harmony.",
    description:
      "Understanding, intention and action remain coherent as conditions change.",
    icon: Brain,
    items: ["Understanding", "Intention", "Action"],
  },
  {
    number: "02",
    label: "ALIGNMENT ACROSS",
    title: "Candidates. Employers. Recruiters. ",
    highlight: "In Sync.",
    description:
      "Expectations, priorities and actions remain coordinated across hiring interactions.",
    icon: Users,
    items: ["Candidates", "Employers", "Recruiters"],
  },
  {
    number: "03",
    label: "ALIGNMENT INTELLIGENCE",
    title: "Alignment Within.",
    highlight: " Alignment Across.",
    description:
      "Recognizes Alignment Continuity and reorganizes Continuity when required.",
    icon: Activity,
    items: ["Recognizes", "Evaluates", "Reorganizes"],
  },
];

export default function AlignmentSection() {
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_45%,#EEF6FF_100%)]
    
    px-[5%]
  "
    >
      <div className="relative mx-auto py-xl">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto py-[10%] text-center"
        >
          {/* Blinking Dot */}
          <div className="mb-xl inline-flex items-center gap-3 rounded-full border border-[#0668E1]/15 bg-[#0668E1]/[0.04] px-2 py-2">
            <span className="relative flex w-fit " />
            <span className=" h-2.5 w-2.5 rounded-full bg-[#0668E1] animate-pulse" />

            <span className="text-md font-semibold tracking-widest text-[#0668E1]">
              ALIGNMENT
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-bold text-[#111827] text-h1">
            Alignment Begins Within.
            <br />
            <span className="bg-gradient-to-r from-[#0668E1] to-[#3B82F6] bg-clip-text text-transparent">
              It Continues Across.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-md text-xl text-slate-500 ">
            Alignment is the condition that enables behaviour to remain coherent
            through change.
          </p>
        </motion.div>

        {/* =========================================================
            ALIGNMENT CARDS
        ========================================================= */}
        <div className="mt-xl py-xl grid gap-md lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
          <motion.article
  key={card.number}
  initial="hidden"
  whileInView="visible"
  whileHover="hover"
  viewport={{ once: true, amount: 0.15 }}
  variants={{
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
   
  }}
  transition={{
    duration: 0.65,
    delay: index * 0.12,
  }}
  className="group relative"
>
  {/* Hover Glow */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 0,
      },
      hover: {
        opacity: 1,
      },
    }}
    transition={{
      duration: 0.5,
    }}
    className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-[#0668E1]/20 via-[#0668E1]/5 to-transparent blur-sm"
  />

  {/* Card */}
  <div
    className="
      relative flex h-full flex-col justify-between
      rounded-lg border border-slate-200
      bg-white p-md
      shadow-[0_10px_40px_rgba(15,23,42,0.05)]
      transition-all duration-500
      group-hover:border-[#0668E1]/25
      group-hover:shadow-[0_20px_60px_rgba(6,104,225,0.12)]
    "
  >
    {/* Top */}
    <div className="flex items-start justify-between">
      
      {/* ICON */}
      <motion.div
        variants={{
          hidden: {
            rotate: 0,
            scale: 1,
          },
          visible: {
            rotate: 0,
            scale: 1,
          },
          hover: {
            rotate: -8,
            scale: 1.08,
          },
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex items-center justify-center
          rounded-sm p-sm
          bg-[#0668E1]/[0.07]
          text-[#0668E1]
          transition-colors duration-500
          group-hover:bg-[#0668E1]
          group-hover:text-white
        "
      >
        <Icon
          className="size-iconsize-sm"
          strokeWidth={1.8}
        />
      </motion.div>
    </div>

    {/* Label */}
    <div className="mt-md">
      <p className="text-md font-bold tracking-widest text-[#0668E1]">
        {card.label}
      </p>

      <h3 className="mt-sm text-h4 font-bold text-[#111827]">
        {card.title}

        <span className="text-[#0668E1]">
          {card.highlight}
        </span>
      </h3>
    </div>

    {/* Description */}
    <p className="mt-md text-xl leading-7 text-slate-500">
      {card.description}
    </p>

    {/* Divider */}
    <div className="my-7 h-px bg-slate-100" />

    {/* Items */}
    <div className="mt-auto space-y-3">
      {card.items.map((item) => (
        <motion.div
          key={item}
          variants={{
            hover: {
              x: 4,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          className="flex items-center gap-xs text-xl font-medium text-slate-600"
        >
          <img
            src="/icons/tick-gradient-icon.svg"
            alt="tick icon"
            className="size-iconsize-sm"
          />

          {item}
        </motion.div>
      ))}
    </div>

    {/* Bottom Animated Line */}
    <motion.div
      variants={{
        hidden: {
          width: "0%",
        },
        visible: {
          width: "0%",
        },
        hover: {
          width: "94%",
        },
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
      
        absolute bottom-0 left-3
        h-[3px]
        rounded-full
        bg-gradient-to-r
        from-[#0668E1]
        to-[#60A5FA]
      "
    />
  </div>
</motion.article>
            );
          })}
        </div>

        {/* =========================================================
            CONNECTION LINE
        ========================================================= */}
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
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto mt-10 hidden max-w-4xl origin-left lg:block"
        >
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#0668E1]/20 to-transparent">
            <motion.div
              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0668E1]"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        <div>
          <p className="mt-7 text-xl leading-7 text-slate-500 text-center py-sm ">
            Connect EC makes Alignment Within and Across visible and actionable.
            <br/>
            It reveals emerging drift early—enabling intervention before
            continuity breaks and hiring outcomes fail.
          </p>

        
        </div>
      </div>
    </section>
  );
}
