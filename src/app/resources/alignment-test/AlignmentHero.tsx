"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AppLinkButton } from "@/components/common/Button/AppLinkButton";

export default function AlignmentHero() {
  return (
    <section className="relative w-full   ">
      <div className="mx-auto pt-[5%] flex flex-col md:flex-row gap-xl items-center justify-between">
        
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 md:w-[60%]  flex flex-col "
        >
          {/* Small Title */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className=" text-xl font-bold"
          >
            <span className="text-primary">Situation Change</span> - <span className="block md:flex">You Know What You Would Do.</span>
          </motion.p>

          {/* Heading */}
          <h1 className="text-h2 font-extrabold leading-tight mt-1">
           But, Do You Know What 
           <br/>
           <span className="text-primary text-h1">Happens Within You?</span>

          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-sm text-base font-medium "
          >
            See how your{" "}
            <span className="font-bold">Head, Heart, and Hand</span>{" "}
            work together across changing
            <br className="hidden xl:block" />
            hiring situations — and discover the Alignment Mode that emerges.
          </motion.p>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-sm  text-xl font-medium flex items-center gap-sm "
          >
            <Image src={"/resources/alignment-test/three-icon.svg"} alt="three icon" height={100} width={100} className="object-contain w-auto h-xl"/>
                50+ Alignment Tests Completed
          </motion.p>
    

<motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }} className="mt-xl ">
         <AppLinkButton text="Know what happens within you" url="/resources/alignment-test/register?mode=single&phase=uncertainty" />
      </motion.div>
        </motion.div>

{/* ================= RIGHT CONTENT ================= */}
<motion.div
  initial={{
    opacity: 0,
    scale: 0.9,
    x: 50,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    x: 0,
  }}
  transition={{
    duration: 1,
    delay: 0.3,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    relative
    flex
    md:w-[40%]
    items-center
    justify-center
  "
>
  {/* =====================================================
      MAIN VISUAL
  ====================================================== */}

  <div
    className="
      relative
      aspect-square
      p-md
      w-[clamp(250px,calc(380_/_var(--width)*100vw),1200px)]
    "
  >

    {/* ===================================================
        CIRCULAR BACKGROUND
    =================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      z-0
      rounded-full
      bg-[radial-gradient(90%_90%_at_90%_20%,#FFFFFF_0%,#B0D9FF_100%)]
      blur-[200px]
    "
  />

  <div
  className="
    absolute
    inset-[10%]
    overflow-hidden
    rounded-full
    bg-[#B9D8FF]
  "
>
  <Image
    src="/resources/alignment-test/alignment-hero.svg"
    alt=""
    fill
    className="object-cover"
  />
</div>




    {/* ===================================================
        DYNAMIC
    =================================================== */}

    <motion.div
     animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
      className="
        absolute
        left-1/2
        top-[0%]
        z-30
        size-[clamp(50px,calc(82_/_var(--width)*100vw),260px)]
        -translate-x-1/2
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          rounded-sm
          bg-white
          p-sm
        "
      >
        <span
          className="
            mb-[clamp(5px,0.6vw,9px)]
            whitespace-nowrap
            text-[clamp(6.5px,calc(10_/_var(--width)*100vw),14px)]
            font-bold
            text-[#00C853]
          "
        >
          Dynamic
        </span>

        <ProgressCircle
          percentage={70}
          color="#00C853"
        />
      </div>
    </motion.div>


    {/* ===================================================
        MISALIGNED
    =================================================== */}

 <motion.div
  animate={{
    y: [0, -6, 0, 6, 0],
    x: [0, 2, 0, -2, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1,
  }}
      className="
        absolute
        right-[5%]
        top-[14%]
        z-30
       size-[clamp(49px,calc(80_/_var(--width)*100vw),255px)]
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          rounded-sm
          bg-white
          p-sm
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        <span
          className="
            mb-[clamp(5px,0.6vw,9px)]
            whitespace-nowrap
            text-[clamp(6.5px,calc(10_/_var(--width)*100vw),14px)]
            font-bold
            text-[#E000C7]
          "
        >
          Misaligned
        </span>

        <ProgressCircle
          percentage={40}
          color="#E000C7"
        />
      </div>
    </motion.div>


    {/* ===================================================
        UNALIGNED
    =================================================== */}

    <motion.div
     animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                delay:0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
      className="
        absolute
        left-[-1%]
        top-[18%]
        z-30
        size-[clamp(56px,calc(90_/_var(--width)*100vw),290px)]
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          rounded-sm
          bg-white
          p-sm
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        <span
          className="
            mb-[clamp(5px,0.6vw,9px)]
            whitespace-nowrap
            text-[clamp(7.5px,calc(12_/_var(--width)*100vw),16px)]
            font-bold
            text-[#E57C00]
          "
        >
          Unaligned
        </span>

        <ProgressCircle
          percentage={67}
          color="#E57C00"
        />
      </div>
    </motion.div>


    {/* ===================================================
        ALIGNED
    =================================================== */}

    <motion.div
     animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                delay:0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
      className="
        absolute
        bottom-[16%]
        left-[-9%]
        z-40
        size-[clamp(70px,calc(120_/_var(--width)*100vw),380px)]
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          rounded-sm
          border
          border-[#B2D0F6]
          bg-white
          p-sm
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        <span
          className="
            mb-[clamp(8px,1vw,14px)]
            whitespace-nowrap
            text-[clamp(14px,calc(22_/_var(--width)*100vw),28px)]
            font-bold
            text-[#0668E1]
          "
        >
          Aligned
        </span>

        <ProgressCircle
          percentage={100}
          color="#0668E1"
          large
        />
      </div>
    </motion.div>


    {/* ===================================================
        AUTO ALIGNED
    =================================================== */}

    <motion.div
     animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                delay:0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
      className="
        absolute
        bottom-[0%]
        left-1/2
        z-30
        size-[clamp(56px,calc(80_/_var(--width)*100vw),260px)]
        -translate-x-1/2
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          rounded-sm
          bg-white
          p-sm
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
      >
        <span
          className="
            mb-[clamp(5px,0.6vw,9px)]
            whitespace-nowrap
             text-[clamp(6.5px,calc(10_/_var(--width)*100vw),12px)]
            font-bold
            text-[#0668E1]
          "
        >
          Auto Aligned
        </span>

        <ProgressCircle
          percentage={75}
          color="#0668E1"
        />
      </div>
    </motion.div>

  </div>
</motion.div>
      </div>
    </section>
  );
}

function ProgressCircle({
  percentage,
  color,
  large = false,
}: {
  percentage: number;
  color: string;
  large?: boolean;
}) {
  return (
    <div
      className={`
        relative
        aspect-square
        ${large
          ? "w-[clamp(42px,5vw,75px)]"
          : "w-[clamp(30px,4vw,58px)]"
        }
      `}
    >
      {/* Outer progress */}

      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(
            ${color} ${percentage}%,
            ${color}20 ${percentage}%
          )`,
        }}
      />

      {/* Inner white circle */}

      <div
        className="
          absolute
          inset-[5px]
          md:inset-[10px]
          flex
          items-center
          justify-center
          rounded-full
          bg-white
        "
      >
        <span
          className={`
            font-bold
            ${large ? "text-[clamp(6.5px,calc(10_/_var(--width)*100vw),14px)]" : "text-[clamp(5px,calc(8_/_var(--width)*100vw),10px)]"}
          `}
          style={{
            color,
          }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
}