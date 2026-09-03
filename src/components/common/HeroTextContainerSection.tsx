"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AppLinkButton } from "./Button/AppLinkButton";

interface HeroStage { id: number; title: string; icon: string; } 
 interface HeroDataType { title: string; subTitle: string; stages: HeroStage[]; button_text: string; button_link: string; }

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroTextContainerSection({data}:{data:HeroDataType}) {
 const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="text-center w-full"
        >
          <p className="text-h5 font-bold text-[#0668E1]">
            {data.title}
          </p>

          <h2
            className="
              text-h1
              font-extrabold
              leading-tight
          w-full
            "
          >
            {data.subTitle}
          </h2>
        </motion.div>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <div
          className="
            
            flex
        
            items-center
    justify-center
          "
        >
           {data.stages.map((stage, index) => (
          <ProcessCard
            key={stage.title}
            index={index}
            title={stage.title}
            icon={stage.icon}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
        </div>

<div className="flex justify-center items-center ">
        <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 3,
                      ease: [0.16, 1, 0.3, 1],
                    }} className="mt-md ">
                 <AppLinkButton text={data.button_text} url={data.button_link}/>
              </motion.div>
              </div>
      </div>
    </section>
  );
}

// ============================================================
// PROCESS CARD
// ============================================================

function ProcessCard({
  index,
  title,
  icon,
  activeCard,
  setActiveCard,
}: {
  index: number;
  title: string;
  icon: string;
  activeCard: number | null;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      animate={{
        y: activeCard === index ? 40 : 0,
      }}
      transition={{
        x: {
          delay: index * 0.65,
          duration: 0.7,
          ease,
        },
        opacity: {
          delay: index * 0.65,
          duration: 0.7,
          ease,
        },
        y: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      onClick={() => {
        if (window.innerWidth >= 640) return;

        setActiveCard(index);
      }}
      data-process-card={index}
      className="
        relative
        min-w-0
        w-[256px]-
        shrink-0
        -ml-[70px]
        sm:-ml-[clamp(20px,calc(30_/_var(--width)*100vw),40px)]
        md:first:-ml-0
        first:ml-[10px]
      "
    >
      <div className="relative aspect-[256/174]- w-full max-w-[256px]-">
        <svg
          viewBox="0 0 256 174"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id={`arrow-shadow-${index}`}
              x="0"
              y="0"
              width="255.973"
              height="174"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />

              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="
                  0 0 0 0 0.0235294
                  0 0 0 0 0.407843
                  0 0 0 0 0.882353
                  0 0 0 0.1 0
                "
                result="hardAlpha"
              />

              <feMorphology
                radius="4"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow"
              />

              <feOffset
                dx="-2"
                dy="4"
              />

              <feGaussianBlur
                stdDeviation="10"
              />

              <feComposite
                in2="hardAlpha"
                operator="out"
              />

              <feColorMatrix
                type="matrix"
                values="
                  0 0 0 0 0.0235294
                  0 0 0 0 0.407843
                  0 0 0 0 0.882353
                  0 0 0 0.1 0
                "
              />

              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />

              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>

          <g filter={`url(#arrow-shadow-${index})`}>
            {/* Main white shape */}
            <path
              d="
                M27.8904 38.4321
                C22.8179 30.4429 28.5574 20 38.021 20
                H189.592
                C193.699 20 197.521 22.1006 199.723 25.5679
                L232.104 76.5679
                C234.596 80.4937 234.596 85.5063 232.104 89.4321
                L199.723 140.432
                C197.521 143.899 193.699 146 189.592 146
                H38.021
                C28.5574 146 22.8179 135.557 27.8904 127.568
                L52.1036 89.4321
                C54.5962 85.5063 54.5962 80.4937 52.1036 76.5679
                L27.8904 38.4321
                Z
              "
              fill="white"
            />

            {/* Border */}
            <path
              d="
                M38.0205 20.5
                H189.592
                C193.528 20.5 197.191 22.5131 199.301 25.8359
                L231.682 76.8359
                C234.07 80.5982 234.07 85.4018 231.682 89.1641
                L199.301 140.164
                C197.191 143.487 193.528 145.5 189.592 145.5
                H38.0205
                C28.9516 145.5 23.4514 135.492 28.3125 127.836
                L52.5254 89.7002
                C55.1218 85.6108 55.1218 80.3892 52.5254 76.2998
                L28.3125 38.1641
                C23.4514 30.5078 28.9514 20.5003 38.0205 20.5
                Z
              "
              stroke="#DEEDFF"
              strokeWidth="1"
            />
          </g>
        </svg>

        {/* Content */}
        <div
          className="
            size-[clamp(140px,calc(220_/_var(--width)*100vw),600px)]
          "
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center justify-center">
            <Image
              src={icon}
              alt={title}
              height={100}
              width={100}
              className="
                size-iconsize-md
                text-[#0668E1]
              "
            />

            <p className="mt-1 text-xl md:text-h6 font-bold">
              {title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}