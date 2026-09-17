"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

const withinRoles = [
   {
    role: "Employer",
    img: "/icons/employer-round-icon.svg",
    url:"https://employer.connectec.app/login"
  },
  {
    role: "Recruiter",
    img: "/icons/recruiters-round-icon.svg",
    url:"https://employer.connectec.app/login"
  },

   {
    role: "Candidate",
    img: "/icons/candidate-round-icon.svg",
    url:"https://employer.connectec.app/login"
  },
];

export const DemoAcross = () => {
  return (
    <section className="relative w-full overflow-hidden py-[2%]">
      <div className="grid w-full grid-cols-3 px-[10%]">
        {withinRoles.map((role, index) => (
          <WithinActor
            key={role.role}
            role={role}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

function WithinActor({
  role,
  index,
}: {
  role: {
    role: string;
    img: string;
    url:string;
  };
  index: number;
}) {
    const router=useRouter();
  return (
    <div  className="relative flex h-[200px] w-full flex-col items-center">

    {/* =====================================================
    TWO DASH LINES
    FULL DISTANCE BETWEEN CIRCLES
===================================================== */}

{index < 2 && (
  <div
    className="
      pointer-events-none
      absolute
      left-[calc(50%+75px)]
      top-0
      z-20
      h-[clamp(80px,calc(110_/_var(--width)*100vw),400px)]
      w-[calc(100%-150px)]
    "
  >


{/* =====================================================
    CONNECTION AREA
===================================================== */}

{index < 2 && (
  <div
    className="
      pointer-events-none
      absolute
      -left-[5%]
      -right-[5%]
      top-0
      h-[clamp(80px,calc(110_/_var(--width)*100vw),400px)]
      overflow-hidden
      z-20
    "
  >

    {/* =================================================
        TOP LINE
        LEFT → RIGHT
    ================================================= */}

    <motion.div
      className="
        absolute
        left-0
        top-[30%]
        flex
        w-[15%]
        gap-[20%]
      "
      initial={{
        x: "-100%",
      }}
      animate={{
        x: [
          "-100%",
          "0%",
          "900%",
        ],
      }}
      transition={{
        duration: 1,
        delay:8,
        repeat: Infinity,
        repeatDelay: 0.2,
        ease: "linear",
        times: [
          0,
          0.08,
          1,
        ],
      }}
    >
      <span
        className="
          block
          h-1
          w-[40%]
          shrink-0
          rounded-full
          bg-[#0668E1]
        "
      />

      <span
        className="
          block
          h-1
          w-[40%]
          shrink-0
          rounded-full
          bg-[#0668E1]
        "
      />
    </motion.div>


    {/* =================================================
        BOTTOM LINE
        RIGHT → LEFT
    ================================================= */}

    <motion.div
      className="
        absolute
        right-0
        top-[66%]
        flex
        w-[15%]
        gap-[20%]
      "
      initial={{
        x: "100%",
      }}
      animate={{
        x: [
          "100%",
          "0%",
          "-900%",
        ],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.2,
        ease: "linear",
        times: [
          0,
          0.08,
          1,
        ],
      }}
    >
      <span
        className="
          block
          h-1
          w-[40%]
          shrink-0
          rounded-full
          bg-[#0668E1]
        "
      />

      <span
        className="
          block
          h-1
          w-[40%]
          shrink-0
          rounded-full
          bg-[#0668E1]
        "
      />
    </motion.div>

  </div>
)}
  </div>
)}

  
<motion.div
  initial={{
  }}
  animate={{
  }}
  transition={{
    duration: 1.6,
    times: [0, 0.35, 0.75, 1],
    ease,
  }}
  className="
    pointer-events-none
    absolute
    left-1/2
    top-0
    z-40
    flex
    -translate-x-1/2
    flex-col
    items-center
  "
>
  {/* =================================================
      GLOW
  ================================================= */}

  <motion.div
    initial={{
      
    }}
    animate={{
      
    }}
    transition={{
    }}
    className="
      absolute
      left-1/2
      top-1/2
      z-0
      size-[100%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#0668E1]/20
      blur-[150px]
    "
  />

  {/* =================================================
      AVATAR
  ================================================= */}

  <div
    className="
      relative
      z-10
      flex
      size-[clamp(80px,calc(110_/_var(--width)*100vw),400px)]
      items-center
      justify-center
      rounded-full
      border-2
      border-[#0668E1]
      bg-white
    "
  >
    <img
      src={role.img}
      alt={role.role}
      className="
        h-full
        w-full
        object-cover
      "
    />
  </div>


  {/* =================================================
      HARMONY BADGE
  ================================================= */}

  <motion.img
    src="/home/icons/harmony-badge.svg"
    alt="Harmony"
    initial={{
      opacity: 0,
      scale: 0.8,
      y: -5,
    }}
    animate={{
      opacity: [0, 1, 1],
      scale: [0.8, 1.05, 1],
      y: [-5, 0, 0],
    }}
    transition={{
      duration: 0.9,
      times: [0, 0.65, 1],
      ease,
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[70%]
      z-50
      w-full
      -translate-x-1/2
    "
  />
</motion.div>

    </div>
  );
}