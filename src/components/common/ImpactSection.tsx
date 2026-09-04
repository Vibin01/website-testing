"use client";

import { motion } from "framer-motion";

type ImpactCard = {
  title: string;
  description: string;
};

type ImpactData = {
  eyebrow: string;
  heading: {
    first: string;
    second: string;
    third: string;
  };
  description: string;
  cards: ImpactCard[];
};

type ImpactSectionProps = {
  data: ImpactData;
};

export default function ImpactSection({ data }: ImpactSectionProps) {
  return (
    <section className="w-full overflow-hidden bg-[#0868E1] px-[5%] py-[10%] text-white md:py-[6%]">
      <div className="mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="text-xl font-bold uppercase"
        >
          {data.eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            mt-xs
            flex
            flex-wrap
            items-center
            gap-x-md
            gap-y-xs
            text-h2
            font-extrabold
            leading-tight
          "
        >
          <span>{data.heading.first}</span>

          <span className="text-h4 font-normal">»</span>

          <span>{data.heading.second}</span>

          <span className="text-h4 font-normal">»</span>

          <span>{data.heading.third}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="
            mt-md
            text-base
            font-medium
          "
        >
          {data.description}
        </motion.p>

        {/* ============================================================
            MOBILE — ARROW + DESCRIPTION PAIRS
        ============================================================ */}

        <div className="mt-lg grid grid-cols-1 gap-xl md:hidden">
          {data.cards.map((card, index) => (
            <motion.div
              key={`mobile-card-${card.title}`}
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.45,
                ease: "easeOut",
              }}
              className="flex flex-col gap-md"
            >
              {/* Arrow Header Box */}
              <div className="relative h-btn-h w-full">
                {/* SVG Arrow Background */}
                <svg
                  viewBox="0 0 400 46"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="
                      M 10 1
                      H 377

                      Q 381 1 384 5
                      L 399 21

                      Q 400 23 399 25
                      L 384 41

                      Q 381 45 377 45
                      H 10

                      Q 5 45 7 42
                      L 18 33

                      Q 30 23 32 21
                      L 5 4

                      Q 5 1 8 1

                      Z
                    "
                    fill="rgba(255,255,255,0.035)"
                    stroke="rgba(255,255,255,0.65)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Text */}
                <div className="relative z-10 flex h-full items-center justify-center">
                  <span className="text-base font-bold text-white">
                    {card.title}
                  </span>
                </div>
              </div>

              {/* Description Card */}
              <motion.div
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  flex
                  min-h-[92px]
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-[#B2D0F6]
                  bg-[#FFFFFF1A]
                  p-md
                  text-center
                  transition-colors
                  duration-500
                "
              >
                <p className="text-base font-medium">
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ============================================================
            DESKTOP — KEEP YOUR EXISTING TWO ROW LAYOUT
        ============================================================ */}

{/* Desktop Cards */}
<div className="mt-md hidden grid-cols-1 gap-md md:grid md:grid-cols-3">
  {data.cards.map((card, index) => (
    <motion.div
      key={`card-${card.title}`}
      initial={{
        opacity: 0,
        x: -60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: 0.6 + index * 0.45,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.2,
        },
      }}
      className="flex flex-col"
    >
      {/* Arrow Header Box */}
      <div className="relative h-btn-h w-full">
        {/* SVG Arrow Background */}
        <svg
          viewBox="0 0 400 46"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M 10 1
              H 377

              Q 381 1 384 5
              L 399 21

              Q 400 23 399 25
              L 384 41

              Q 381 45 377 45
              H 10

              Q 5 45 7 42
              L 18 33

              Q 30 23 32 21
              L 5 4

              Q 5 1 8 1

              Z
            "
            fill="rgba(255,255,255,0.035)"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        {/* Text */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <span className="text-base font-bold text-white">
            {card.title}
          </span>
        </div>
      </div>

      {/* Description Card */}
      <div
        className="
          mt-lg
          flex
          min-h-[92px]
          items-center
          justify-center
          rounded-md
          border
          border-[#B2D0F6]
          bg-[#FFFFFF1A]
          p-md
          text-center
          transition-colors
          duration-500
        "
      >
        <p className="text-base font-medium">
          {card.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}