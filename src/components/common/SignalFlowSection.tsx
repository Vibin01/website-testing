"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

type SignalFlowCard = {
  top: string;
  mobile_top?: string;
  mobile_left?: string;
  mobile_right?: string;
  left?: string;
  right?: string;
  icon: string;
  text: string;
};

type SignalFlowItem = {
  text: string;
};

type SignalFlowData = {
  title: string;
  titleHighlight: string;
  centerImage: string;
  centerText: string;
  leftCards: SignalFlowCard[];
  rightCards: SignalFlowCard[];
  flowData: SignalFlowItem[];
};

export default function SignalFlowSection({
  data,
}: {
  data: SignalFlowData;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="relative overflow-hidden py-[8%] md:py-[5%]"
    >
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-center text-h2 font-extrabold px-[4%] md:px-0"
        >
          {data.title}
          <br />
          <span className="text-[#0668E1]">{data.titleHighlight}</span>
        </motion.h2>

        <div className="relative mt-lg">
          <div className="flex items-center md:items-end px-md relative h-[40vh]- sm:h-[60vh] bg-[url('/background/lines-bg-mobile.svg')] md:bg-[url('/background/lines-bg.svg')] bg-no-repeat bg-center sm:bg-center bg-[length:100%_auto]">

<div className=" flex flex-col items-center justify-center gap-y-sm">
            {/* left cards */}
            {data.leftCards.map((card, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className={`sm:absolute left-0 sm:left-auto p-sm w-[85px] sm:w-[10vw] rounded-md border border-[#e5e7eb] bg-white shadow-mobile-small md:shadow-web-small`}
                style={{
                  top: isMobile ? card.mobile_top : card.top,
                  left: isMobile ? card.mobile_left : card.left,
                }}
              >
                <div className="mb-sm ">
                  <img
                    src={card.icon}
                    alt={card.text}
                    className="size-iconsize-sm"
                  />
                </div>

                <p className="font-medium text-lg">
                  {card.text
                    .split(" ")
                    .reduce<string[]>((acc, _, i, arr) => {
                      if (arr.length === 2) return arr;
                      if (i % 2 === 0)
                        acc.push(arr.slice(i, i + 2).join(" "));
                      return acc;
                    }, [])
                    .map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                </p>
              </motion.div>
            ))}
</div>
            {/* center card */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative mx-auto flex flex-col justify-evenly items-left w-[40%] md:w-[22%] rounded-md border border-[#D3E6FF] bg-white p-sm text-center shadow-mobile-small md:shadow-web-small"
            >
              <img
                src={data.centerImage}
                alt="Changing Situation Icon"
                className="mb-sm h-auto"
              />

              <div className="flex justify-center items-start w-full">
                <p className="text-xl md:max-w-[90%] font-medium text-center">
                  {data.centerText}
                </p>
              </div>
            </motion.div>
<div className="flex flex-col items-center justify-center gap-y-sm">
            {/* right cards */}
            {data.rightCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 60,
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
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="sm:absolute p-sm w-[85px] sm:w-[10vw] rounded-md border border-[#e5e7eb] bg-white shadow-mobile-small md:shadow-web-small"
                style={{
                  top: isMobile ? card.mobile_top : card.top,
                  right: isMobile ? card.mobile_right : card.right,
                }}
              >
                <div className="mb-sm text-base text-[#1d72f3]">
                  <img
                    src={card.icon}
                    alt={card.text}
                    className="size-iconsize-sm"
                  />
                </div>

                <p className="font-medium text-lg">
                  {card.text
                    .split(" ")
                    .reduce<string[]>((acc, _, i, arr) => {
                      if (arr.length === 2) return arr;
                      if (i % 2 === 0)
                        acc.push(arr.slice(i, i + 2).join(" "));
                      return acc;
                    }, [])
                    .map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                </p>
              </motion.div>
            ))}
            </div>
          </div>

          {/* bottom content */}
        </div>
      </div>
    </motion.section>
  );
}