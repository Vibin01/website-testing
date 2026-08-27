"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const conditions = [
  {
    id: 1,
    title: "Uncertainty",
    description: (
      <>
        When expectations,
        <br />
        information, or
        <br />
        directions are vague.
      </>
    ),
    icon: "/resources/alignment-test/uncertainty-icon.svg",
    phase: "uncertainty",
  },
  {
    id: 2,
    title: "Pressure",
    description: (
      <>
        When time, stakes, or
        <br />
        competing expectations
        <br />
        increase.
      </>
    ),
    icon: "/resources/alignment-test/pressure-icon.svg",
    phase: "pressure",
  },
  {
    id: 3,
    title: "Control",
    description: (
      <>
        When progress
        <br />
        depends on other
        <br />
        people or their actions.
      </>
    ),
    icon: "/resources/alignment-test/control-icon.svg",
    phase: "control",
  },
  {
    id: 4,
    title: "Perception",
    description: (
      <>
        When appearances,
        <br />
        signals, or impressions
        <br />
        shape interpretation.
      </>
    ),
    icon: "/resources/alignment-test/perception-icon.svg",
    phase: "perception",
  },
  {
    id: 5,
    title: "Outcome",
    description: (
      <>
        When results, closure,
        <br />
        or final commitments
        <br />
        matter.
      </>
    ),
    icon: "/resources/alignment-test/outcome-icon.svg",
    phase: "outcome",
  },
];

export default function AlignmentTest() {
  const router = useRouter();

  const handleSingleStart = (phase: string) => {
    router.push(
      `/resources/alignment-test/register?mode=single&phase=${phase}`,
    );
  };

  const handleFullStart = () => {
    router.push("/resources/alignment-test/register?mode=full");
  };

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#0668E1]
        py-[6%]
        text-white
      "
    >
      <div className="mx-auto w-full px-[6%]">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center"
        >
          <p className="text-xl font-bold uppercase tracking-wide">
            THE FIVE CONDITIONS
          </p>

          <h2
            className="
              mt-sm
              text-h2
              font-extrabold
              leading-tight
            "
          >
            Five Conditions. One Connected View.
          </h2>

          <p
            className="
              mt-sm
              text-base
              font-medium
            "
          >
            Explore how your Alignment responds across five hiring conditions.
          </p>

          <p
            className="
              mt-1
              text-base
              font-bold
            "
          >
            1 minute each · 3 situations per condition · Start anywhere
          </p>
        </motion.div>

        {/* CARDS */}
        <div
          className="
            mt-lg
            grid
            grid-cols-1
            gap-md
            sm:grid-cols-2
            md:grid-cols-5
          "
        >
          {conditions.map((condition, index) => {
            return (
              <motion.article
                key={condition.id}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                onClick={() => handleSingleStart(condition.phase)}
                className="
                  group
                  relative
                  min-w-0
                  cursor-pointer
                "
              >
                {/* CARD */}
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={{
                    rest: {
                      backgroundColor: "#2377DB",
                      color: "#FFFFFF",
                    },
                    hover: {
                      backgroundColor: "#FFFFFF",
                      color: "#111111",
                    },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    flex
                    flex-col
                    items-center
                    rounded-md
                    p-sm
                    shadow-web-medium
                  "
                >
                  {/* ICON */}
                  <motion.div
                    variants={{
                      rest: {
                        backgroundColor: "#F8FBFF",
                        color: "#0668E1",
                        borderColor: "",
                      },
                      hover: {
                        backgroundColor: "#F7FBFF",
                        color: "#0668E1",
                        borderColor: "#D1E4FE",
                      },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      flex
                      size-iconsize-2xl
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                    "
                  >
                    <img
                      src={condition.icon}
                      alt={condition.title}
                      className="size-iconsize-md scale-90"
                    />
                  </motion.div>

                  {/* TITLE */}
                  <motion.h3
                    variants={{
                      rest: {
                        color: "#FFFFFF",
                      },
                      hover: {
                        color: "#0668E1",
                      },
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      mt-sm
                      text-base
                      font-bold
                      text-center
                    "
                  >
                    {condition.title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.div
                    variants={{
                      rest: {
                        color: "#FFFFFF",
                      },
                      hover: {
                        color: "#111111",
                      },
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      mt-xs
                      text-center
                      text-xl
                      font-medium
                    "
                  >
                    {condition.description}
                  </motion.div>

                  {/* START BUTTON */}
                  <motion.div
                    variants={{
                      rest: {
                        backgroundColor: "",
                        borderColor: "#FFFFFF",
                        color: "#FFFFFF",
                      },
                      hover: {
                        backgroundColor: "#0668E1",
                        borderColor: "#0668E1",
                        color: "#FFFFFF",
                      },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      mt-sm
                      mt-auto
                      flex
                      h-[clamp(40px,calc(46_/_var(--width)*100vw),60px)]
                      w-full
                      items-center
                      justify-center
                      rounded-sm
                      border
                    "
                  >
                    <span className="text-xl font-medium">
                      Start
                    </span>

                    <motion.div
                      variants={{
                        rest: {
                          opacity: 0,
                          width: 0,
                          x: -8,
                          marginLeft: 0,
                        },
                        hover: {
                          opacity: 1,
                          width: 20,
                          x: 0,
                          marginLeft: 8,
                        },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                    >
                      <ArrowRight
                        size={18}
                        strokeWidth={2}
                        className="size-iconsize-sm"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-xl
            flex
            flex-col
            gap-md
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <h3 className="text-[18px] font-bold">
              Want the complete picture?
            </h3>

            <p className="mt-1 text-[14px] font-medium">
              Take all 5 phases to see how your alignment shifts across hiring
              situations.
            </p>
          </div>

          <motion.button
            onClick={handleFullStart}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              flex
              h-[48px]
              min-w-[250px]
              items-center
              justify-between
              rounded-[11px]
              bg-white
              px-5
              text-[#0668E1]
              shadow-[0_5px_15px_rgba(0,0,0,0.08)]
            "
          >
            <span className="text-[14px] font-bold">
              Take the Full Alignment Test
            </span>

            <motion.span
              initial={{
                x: 0,
              }}
              whileHover={{
                x: 5,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <ArrowRight
                size={19}
                strokeWidth={2}
              />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}