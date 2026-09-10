"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, ChevronsRight } from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

export type FeedbackStep = {
  id: string;
  number: string;

  badge: string;
  title: string;
  description: string;

  see: {
    label?: string;
    items: string[];
  };

  act: {
    label?: string;
    items: string[];
  };

  separator?: "single" | "double" | string;
};

export type FeedbackFlowData = {
  heading: {
    normal: string;
    highlight: string;
    highlightFirst?: boolean;
  };

  description: string;
  bottomText: string;
  bottomHighlightText?: string;
  separator?: "single" | "double" | string;
  steps: FeedbackStep[];
};

/* ============================================================
   ALL DATA
   Everything for this component comes from this object.
============================================================ */



/* ============================================================
   COMPONENT
============================================================ */

export default function FeedbackFlow({data}:{data:FeedbackFlowData}) {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = data.steps[activeStep];

  const isFirstStep = activeStep === 0;
const isLastStep =
  activeStep === data.steps.length - 1;

  /* ============================================================
     NAVIGATION
  ============================================================ */

  const goToStep = (index: number) => {
    if (
      index < 0 ||
      index >= data.steps.length
    ) {
      return;
    }

    setActiveStep(index);
  };

const goNext = () => {
  setActiveStep((prev) =>
    Math.min(prev + 1, data.steps.length - 1)
  );
};

const goPrevious = () => {
  setActiveStep((prev) => Math.max(prev - 1, 0));
};

  return (
    <section className="w-full ">
      <div className="mx-auto w-full">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="text-center">

          <h2 className="text-h2 font-extrabold leading-tight">
            {data.heading.highlightFirst ? (
              <>
                <span className="text-[#0868E1]">
                  {data.heading.highlight}
                </span>{" "}
                {data.heading.normal}
              </>
            ) : (
              <>
                {data.heading.normal}{" "}
                <span className="text-[#0868E1]">
                  {data.heading.highlight}
                </span>
              </>
            )}
          </h2>

          <p dangerouslySetInnerHTML={{ __html: data.description }} className="mx-auto mt-xs md:w-[90%] text-base font-medium">
          </p>

        </div>

        {/* ======================================================
            STEPPER
        ====================================================== */}

        <div className="mx-auto mt-lg flex w-[90%] md:w-[50%] items-center justify-center">

          {data.steps.map((step, index) => {
            const isActive = index <= activeStep;
            const isLast =
              index === data.steps.length - 1;

            return (
              <div
                key={step.id}
                className={`flex ${isLast?"":"flex-1"} items-center`}
              >

                {/* STEP */}

                <button
                  type="button"
                  onClick={() => goToStep(index)}
                  aria-label={`Go to ${step.badge}`}
                  className="relative z-10 shrink-0"
                >
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "#0668E1"
                        : "#FFFFFF",
                      color: isActive
                        ? "#FFFFFF"
                        : "#0668E1",
                      scale:
                        activeStep === index
                          ? 1.04
                          : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      flex
                      size-[40px]
                      md:size-iconsize-xl
                      items-center
                      justify-center
                      rounded-sm
                      md:rounded-md
                      text-xl
                      font-bold
                    "
                  >
                    {step.number}
                  </motion.div>
                </button>

                {/* CONNECTING LINE */}

                {!isLast && (
                  <div className="relative mx-2 h-[2px] flex-1 overflow-hidden bg-[#D7E5F8]- sm:mx-xs">

                    <motion.div
                      className="absolute left-0 top-0 h-full bg-[#B2D0F6]"
                      initial={{ width: "0%" }}
                      animate={{
                        width:
                          index < activeStep
                            ? "100%"
                            : "0%",
                      }}
                      transition={{
                        duration: 1.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />

                  

                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* ======================================================
            MAIN CONTENT AREA
        ====================================================== */}

        <div className="relative mx-auto mt-xl w-[95%] md:w-[75%] ">

          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={goPrevious}
  disabled={isFirstStep}
            aria-label="Previous step"
            className="
              absolute
              -left-3
              md:left-[-75px]
              top-1/2
              z-20
              size-iconsize-2xl
              md:size-iconsize-md
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#0868E1]
              text-white
              transition-transform
              duration-300
              hover:scale-105
              flex
              disabled:opacity-40
            "
          >
            <ArrowLeft size={27} strokeWidth={1.8} className="size-iconsize-sm" />
          </button>

          {/* RIGHT ARROW */}

          <button
            type="button"
           onClick={goNext}
  disabled={isLastStep}
            aria-label="Next step"
            className="
              absolute
              -right-3
              md:right-[-75px]
              top-1/2
              z-20
              size-iconsize-2xl
              md:size-iconsize-md
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#0868E1]
              text-white
              transition-transform
              duration-300
              hover:scale-105
              flex
              disabled:opacity-40
            "
          >
            <ArrowRight size={27} strokeWidth={1.8} className="size-iconsize-sm"/>
          </button>

          {/* ====================================================
              CARD
          ==================================================== */}
            <AnimatePresence mode="wait">

          <motion.div
          key={currentStep.id}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -35,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
            className="
               min-h-[450px]
               md:min-h-0
              rounded-lg
              bg-white
              p-md
              shadow-mobile-medium
              md:shadow-web-medium
              
            "
          >


              <div
                
                className="h-full"
              >

                {/* BADGE */}

                <div
                  className="
                    flex
                    w-fit
                    py-sm
                    px-xl
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B2D0F6]
                    bg-[#F2F8FF]
                    text-xl
                    font-bold
                    text-[#0868E1]
                  "
                >
                  {currentStep.badge}
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-sm
                    text-h6
                    font-bold
                  "
                >
                  {currentStep.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-1
                    text-xl
                    font-medium
                  "
                >
                  {currentStep.description}
                </p>

                {/* SEE / ACT BOX */}

                <div
                  className="
                    mt-md
                    rounded-md
                    border
                    border-[#B2D0F6]
                    bg-[#F2F8FF]
                    p-sm
                  "
                >

                  {/* SEE */}

                  <div className="flex flex-col gap-xs">

                    <div
                      className="
                        shrink-0
                        text-xl
                        font-bold
                        text-[#0868E1]
                      "
                    >
                      {currentStep.see.label || "See"}
                    </div>

                    <div
                      className="
                        flex
                        flex-wrap
                        flex-col
                        sm:flex-row
                    sm:items-center
                        gap-y-xs
                      "
                    >

                      {currentStep.see.items.map(
                        (item, index) => (
                          <div
                            key={`${item}-${index}`}
                            className="flex items-center"
                          >

                            <span
                              className="
                                text-xl
                                font-medium
                              "
                            >
                              {item}
                            </span>

                            {index !==
                              currentStep.see.items.length -
                                1 && (
                              (currentStep.separator === "double" || data.separator === "double") ? (
                                <ChevronsRight
                                  size={18}
                                  strokeWidth={2}
                                  className="mx-2 text-[#777777]"
                                />
                              ) : (
                                <ChevronRight
                                  size={22}
                                  strokeWidth={1.8}
                                  className="mx-2 text-[#777777]"
                                />
                              )
                            )}

                          </div>
                        )
                      )}

                    </div>

                  </div>

                  {/* ACT */}

                  <div
                    className="
                      mt-sm
                      flex
                      flex-col
                      gap-xs
                    "
                  >

                    <div
                      className="
                        shrink-0
                        text-xl
                        font-bold
                        text-[#0868E1]
                        
                      "
                    >
                      {currentStep.act.label || "Act"}
                    </div>

                    <div
                      className="
                      
                        flex
                        flex-wrap
                        flex-col
                        sm:flex-row
                    sm:items-center
                        gap-y-xs
                      "
                    >

                      {currentStep.act.items.map(
                        (item, index) => (
                          <div
                            key={`${item}-${index}`}
                            className="flex items-center"
                          >

                            <span
                              className="
                                text-xl
                                font-medium
                              "
                            >
                              {item}
                            </span>

                            {index !==
                              currentStep.act.items.length -
                                1 && (
                              (currentStep.separator === "double" || data.separator === "double") ? (
                                <ChevronsRight
                                  size={18}
                                  strokeWidth={2}
                                  className="mx-2 text-[#777777]"
                                />
                              ) : (
                                <ChevronRight
                                  size={22}
                                  strokeWidth={1.8}
                                  className="mx-2 text-[#777777]"
                                />
                              )
                            )}

                          </div>
                        )
                      )}

                    </div>

                  </div>

                </div>

              </div>


          </motion.div>
            </AnimatePresence>

        </div>

     

        {/* ======================================================
            BOTTOM TEXT
        ====================================================== */}

        <div className="mx-auto mt-lg text-center md:w-[90%]">
          {data?.bottomHighlightText && (
            <motion.p
              key="bottom-highlight-text"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-base
                font-bold
              "
            >
              {data.bottomHighlightText}
            </motion.p>
          )}

          {data?.bottomText && (
            <motion.p
              key="bottom-main-text"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-xs
                text-base
                font-medium
              "
            >
              {data.bottomText}
            </motion.p>
          )}
        </div>

      </div>
    </section>
  );
}
