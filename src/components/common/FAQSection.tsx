"use client";

import { useEffect, useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

type FAQSectionProps = {
  data: {
    question: string;
    points: string[];
  }[];
};

export default function FAQSection({ data }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToFaq");

    if (shouldScroll) {
      sessionStorage.removeItem("scrollToFaq");
      faqRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <section
      ref={faqRef}
      className="w-full bg-white pb-[10%] md:px-[15%] md:pb-[2%]"
    >
      <div className="mx-auto">
        <h2 className="text-center text-h2 font-extrabold text-[#1B1C17]">
          Frequently Asked Questions
        </h2>

        <div className="mt-lg space-y-sm">
          {data.map((faq, index) => {
            const isOpen = openItem === index;

            return (
              <div key={index} className="space-y-xs">
                {/* Question Box */}
                <div
                  className={`overflow-hidden rounded-md border bg-white ${
                    isOpen
                      ? "border-[#D3E6FF]"
                      : "border-[#E8E8E8]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="flex w-full cursor-pointer items-center justify-between px-md py-sm text-left"
                  >
                    <span
                      className={`pr-md text-base font-semibold ${
                        isOpen
                          ? "text-[#0668E1]"
                          : "text-[#2C2C2C]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Plus → X Animation */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 45 : 0,
                        color: isOpen ? "#0668E1" : "#2F2F2F",
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="flex shrink-0"
                    >
                      <IoAddCircle className="size-iconsize-sm" />
                    </motion.div>
                  </button>
                </div>

                {/* Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -8,
                      }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                        y: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-md border border-[#D3E6FF] bg-white px-md py-sm">
                        <div className="space-y-xs">
                          {faq.points.map((point, pointIndex) => (
                            <motion.div
                              key={pointIndex}
                              initial={{
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: pointIndex * 0.05,
                                ease: "easeOut",
                              }}
                              className="flex items-start gap-3"
                            >
                              <img
                                src="/icons/tick-gradient-icon.svg"
                                alt="tick icon"
                                className="size-iconsize-sm shrink-0"
                              />

                              <p className="text-xl font-medium text-[#2C2C2C]">
                                {point}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
