"use client";

import { motion, type Variants, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";

/* ============================================================
   TYPES
============================================================ */

type AlignmentCard = {
  id: string;
  title: string;
  icon: string;
  active?: boolean;
};

type FeedbackAlignmentData = {
  heading: {
    normal: string;
    highlight: string;
  };

  cards: AlignmentCard[];

  description: string;
};

/* ============================================================
   EASING
============================================================ */

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
];

/* ============================================================
   DESKTOP CARD VARIANTS
============================================================ */

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 1.1,
      delay: index * 1.1,
      ease: smoothEase,
    },
  }),
};

/* ============================================================
   DESKTOP ARROW VARIANTS
============================================================ */

const arrowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      delay: index * 1.1 + 0.65,
      ease: smoothEase,
    },
  }),
};

/* ============================================================
   MOBILE CARD VARIANTS — SLOW & SMOOTH
============================================================ */

const mobileCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    scale: 0.97,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 1.5,
      delay: index * 1.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ============================================================
   MOBILE ARROW VARIANTS — SLOW & SMOOTH
============================================================ */

const mobileArrowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
    scale: 0.8,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      delay: index * 1.7 + 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ============================================================
   DESCRIPTION VARIANTS
============================================================ */

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      delay: 4.2,
      ease: smoothEase,
    },
  },
};

/* ============================================================
   DESKTOP ARROW
============================================================ */

function AlignmentArrow({
  index,
  isVisible,
}: {
  index: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={arrowVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="
        absolute
        -right-[4%]
        top-1/2
        z-20
        flex
        shrink-0
        -translate-y-1/2
        items-center
        justify-center
      "
    >
      <div
        className="
          flex
          items-center
          justify-center
          rounded-full
          bg-[#0668E1]
          p-[10%]
        "
      >
        <ArrowRight
          size={13}
          strokeWidth={2}
          className="size-iconsize-sm scale-90 text-white"
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   MOBILE ARROW
============================================================ */

function MobileAlignmentArrow({
  index,
  isVisible,
}: {
  index: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={mobileArrowVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="
        absolute
        bottom-0
        flex
        w-full
        items-center
        justify-center
      "
    >
      <div
        className="
          flex
          items-center
          justify-center
          rounded-full
          bg-[#0668E1]
          p-[2%]
        "
      >
        <ArrowDown
          size={14}
          strokeWidth={2.5}
          className="size-iconsize-md text-white"
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   DESKTOP CARD
============================================================ */

function AlignmentCardItem({
  card,
  index,
  isVisible,
  onAnimationComplete,
}: {
  card: AlignmentCard;
  index: number;
  isVisible: boolean;
  onAnimationComplete?: () => void;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onAnimationComplete={(definition) => {
        if (definition === "visible") {
          onAnimationComplete?.();
        }
      }}
      className={`
        relative
        flex
        w-full
        min-w-0
        flex-1
        flex-col
        items-center
        justify-center
        rounded-md
        p-sm
        shadow-mobile-mini
        md:shadow-web-mini
        ${
          card.active
            ? "border border-[#0668E1] bg-[#0668E1]"
            : "border-2 border-[#FFFFFF] bg-[#FFFFFF33]"
        }
      `}
    >
      {/* TITLE */}

      <h3
        className={`
          text-h5
          font-bold
          leading-none
          ${
            card.active
              ? "text-white"
              : "text-[#202020]"
          }
        `}
      >
        {card.title}
      </h3>

      {/* ICON */}

      <div className="mt-md flex items-center justify-center">
        {card.active ? (
          <div
            className="
              flex
              size-iconsize-2xl
              items-center
              justify-center
              rounded-full
            "
          >
            <Image
              src={card.icon}
              alt={card.title}
              width={100}
              height={100}
              className="size-iconsize-2xl"
            />
          </div>
        ) : (
          <Image
            src={card.icon}
            alt={card.title}
            width={100}
            height={100}
            className="size-iconsize-2xl"
          />
        )}
      </div>
    </motion.div>
  );
}

/* ============================================================
   MOBILE CARD
============================================================ */

function MobileAlignmentCardItem({
  card,
  index,
  isVisible,
  onAnimationComplete,
}: {
  card: AlignmentCard;
  index: number;
  isVisible: boolean;
  onAnimationComplete?: () => void;
}) {
  return (
    <motion.div
      custom={index}
      variants={mobileCardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onAnimationComplete={(definition) => {
        if (definition === "visible") {
          onAnimationComplete?.();
        }
      }}
      className={`
        mt-sm
        relative
        flex
        w-full
        flex-col
        items-center
        justify-center
        rounded-md
        p-lg
        md:p-md
        shadow-mobile-mini

        ${
          card.active
            ? "border border-[#0668E1] bg-[#0668E1]"
            : "border-2 border-[#FFFFFF] bg-[#FFFFFF33]"
        }
      `}
    >
      {/* TITLE */}

      <h3
        className={`
          sm:pt-sm
          text-h5
          font-bold
          leading-none
          ${
            card.active
              ? "text-white"
              : ""
          }
        `}
      >
        {card.title}
      </h3>

      {/* ICON */}

      <div className="mt-md flex items-center justify-center sm:pb-sm">
        <Image
          src={card.icon}
          alt={card.title}
          width={100}
          height={100}
          className="size-iconsize-2xl"
        />
      </div>
    </motion.div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export const FeedbackAlignment = ({
  data,
  onAnimationComplete,
  children,
}: {
  data: FeedbackAlignmentData;
  onAnimationComplete?: () => void;
  children?: React.ReactNode;
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);

  const isVisible = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const notifyComplete = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    if (sectionRef.current) {
      sectionRef.current.dataset.alignmentComplete = "true";
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("feedbackAlignmentComplete"));
    }
    onAnimationComplete?.();
  };

  useEffect(() => {
    if (isVisible) {
      // Fallback timer (6.5s) to guarantee completion event fires
      const timer = setTimeout(() => {
        notifyComplete();
      }, 6500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} data-feedback-alignment="true">
      <div className="mx-auto w-full">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          transition={{
            duration: 0.8,
            ease: smoothEase,
          }}
          className="
            text-center
            text-h2
            font-extrabold
            leading-tight
          "
        >
          <span className="text-[#0668E1]">
            {data.heading.highlight}
          </span>{" "}
          <span className="text-[#202020]">
            {data.heading.normal}
          </span>
        </motion.h2>

        {/* =====================================================
            DESKTOP VERSION
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-xl
            hidden
            w-full
            items-center
            gap-md
            md:flex
          "
        >
          {data.cards.map((card, index) => (
            <div
              key={card.id}
              className="
                relative
                flex
                min-w-0
                flex-1
                items-center
              "
            >
              {/* CARD */}

              <AlignmentCardItem
                card={card}
                index={index}
                isVisible={isVisible}
                onAnimationComplete={
                  index === data.cards.length - 1 ? notifyComplete : undefined
                }
              />

              {/* ARROW */}

              {index < data.cards.length - 1 && (
                <AlignmentArrow
                  index={index}
                  isVisible={isVisible}
                />
              )}
            </div>
          ))}
        </div>

        {/* =====================================================
            MOBILE VERSION
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-xl
            flex
            w-full
            flex-col
            items-center
            md:hidden
          "
        >
          {data.cards.map((card, index) => (
            <div
              key={card.id}
              className="
                relative
                flex
                w-full
                flex-col
                items-center
                space-y-xl
                px-[10%]
                md:px-0
              "
            >
              {/* CARD */}

              <MobileAlignmentCardItem
                card={card}
                index={index}
                isVisible={isVisible}
                onAnimationComplete={
                  index === data.cards.length - 1 ? notifyComplete : undefined
                }
              />

              {/* DOWN ARROW */}

              {index < data.cards.length - 1 && (
                <MobileAlignmentArrow
                  index={index}
                  isVisible={isVisible}
                />
              )}
            </div>
          ))}
        </div>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <motion.p
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={descriptionVariants}
          className="
            mx-auto
            mt-lg
            w-full
            text-center
            text-base
            font-medium
            md:w-[70%]
          "
        >
          {data.description}
        </motion.p>
        {children}
      </div>
    </section>
  );
};

export default FeedbackAlignment;