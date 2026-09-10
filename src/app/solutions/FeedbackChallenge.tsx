"use client";

import { motion, type Variants } from "framer-motion";

/* ============================================================
   TYPES
============================================================ */

type FeedbackCard = {
  id: string;
  title: string;
  heading: string;
  description: string;
};

type FeedbackChallengeData = {
  eyebrow: string;

  heading: {
    normal: string;
    highlight: string;
  };

  description: string;

  cards: FeedbackCard[];

  bottomText: string;
};





/* ============================================================
   EASING
============================================================ */

/*
  Explicit tuple type prevents TypeScript from converting
  the cubic-bezier values into number[].
*/

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
];

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

const cardContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.1,
      ease: smoothEase,
    },
  },
};

/* ============================================================
   COMPONENT
============================================================ */

export const FeedbackChallenge = ({data}:{data:FeedbackChallengeData}) => {
  return (
    <section className="">
      <div className="mx-auto w-full">

        {/* =====================================================
            HERO
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          {/* EYEBROW */}

          <motion.p
            variants={fadeUpVariants}
            className="
              font-bold
              text-[#0668E1]
              text-h5
            "
          >
            {data.eyebrow}
          </motion.p>

          {/* HEADING */}

          <motion.h2
            variants={fadeUpVariants}
            className="
              mt-sm
              text-center
              font-extrabold
              leading-tight
              text-h2
            "
          >
            {data.heading.normal}

            <br />

            <span className="text-[#0668E1]">
              {data.heading.highlight}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            variants={fadeUpVariants}
            className="
            sm:w-[90%] md:w-[70%]
              mt-sm
              text-center
              text-base
              font-medium
            "
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={cardContainerVariants}
          className="
            mt-xl
            grid
            w-full
            grid-cols-1
            gap-md
            md:grid-cols-3
          "
        >
          {data.cards.map((card) => (
            <motion.article
              key={card.id}
              variants={cardVariants}
              className="
                flex
                min-w-0
                w-full
                flex-col
                rounded-md
                border
                border-[#DEEDFF]
                bg-white
                p-md
                shadow-mobile-medium
                md:shadow-web-medium

              "
            >
              {/* NUMBER */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-sm
                  bg-[#DEEDFF]
                  text-base
                  font-medium
                  text-[#0668E1]
                  size-[40px]
                  md:size-iconsize-lg
                "
              >
                {card.id}
              </div>

              {/* CARD TITLE */}

              <h3
                className="
                  mt-sm
                  text-base
                  font-bold
                  text-[#0668E1]
                "
              >
                {card.title}
              </h3>

              {/* INNER BOX */}

              <div
                className="
                  mt-sm
                  flex
                  flex-1
                  flex-col
                  rounded-md
                  border
                  border-[#FFD3CA]
                  bg-white
                  p-sm
                "
              >
                {/* INFO ICON */}

               <img src={"/icons/info-red-icon.svg"}
               about="info red icon" 
               className="size-iconsize-sm object-contain"
               />

                {/* INNER HEADING */}

                <h4
                  className="
                    mt-sm
                    text-base
                    font-bold
                    
                  "
                >
                  {card.heading}
                </h4>

                {/* INNER DESCRIPTION */}

                <p
                  className="
                    mt-xs
                    text-xl
                    font-medium
                   
                  "
                >
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM TEXT
        ===================================================== */}

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariants}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            mx-auto
            mt-md
            text-center
            text-base
            font-medium
            md:w-[70%]
          "
        >
          {data.bottomText}
        </motion.p>
      </div>
    </section>
  );
};
