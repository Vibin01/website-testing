"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const withinRoles = [
 
  {
    role: "Employer",
    img: "/icons/employer-round-icon.svg",
    url:"/resources/alignment-test/register?mode=single&phase=uncertainty"
  },
  {
    role: "Recruiter",
    img: "/icons/recruiters-round-icon.svg",
    url:"/resources/alignment-test/register?mode=single&phase=uncertainty"
  },
  
   {
    role: "Candidate",
    img: "/icons/candidate-round-icon.svg",
    url:"/resources/alignment-test/register?mode=single&phase=uncertainty"
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WithinAnimation() {
  return (
    <section className="relative w-full overflow-hidden py-[2%]">
      <div className="grid w-full grid-cols-3 px-[10%] ">
        {withinRoles.map((role,index) => (
          <WithinActor
            key={role.role}
            role={role}
index={index}
          />
        ))}
      </div>
    </section>
  );
}

function WithinActor({
  role,
  index,
}: {
  role: {
    role: string;
    img: string;
    url:string;
  },index:number;
}) {
    const router=useRouter()

  return (
    <div className="cursor-pointer relative flex h-[200px] w-full flex-col items-center">

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
        delay:9,
        repeat: 3,
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
        delay:9,
        repeat: 3,
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

<div
  className="
    absolute
    left-1/2
    top-[155px]
    z-30
    flex
    -translate-x-1/2
    items-center
    justify-center
    gap-sm
    whitespace-nowrap
  "
>
  {/* =================================================
      HEAD
      1.0s → enters
      3.2s → immediately moves toward center
  ================================================= */}

  <motion.span
    initial={{
      opacity: 0,
      x: -120,
    }}
    animate={{
      opacity: [
        0,  // 0s
        1,  // 1s
        1,  // 3.2s
        0,  // 4.6s
        0,  // 4.7s
      ],
      x: [
        -60, // start
        0,    // 1s
        0,    // 3.2s
        55,   // move toward Heart
        48,   // hide
      ],
    }}
    transition={{
        delay:1,
      duration: 3,
      times: [
        0,
        1 / 4,
        3.2 / 4,
        4.6 / 4,
        1,
      ],
      ease,
    }}
    className="
      text-base
      font-medium
      text-[#303030]
    "
  >
    Head
  </motion.span>


  {/* =================================================
      HEART
      1.0s → enters from bottom
      3.2s → already at center
  ================================================= */}

  <motion.span
    initial={{
      opacity: 0,
      y: 90,
    }}
    animate={{
      opacity: [
        0,
        1,
        1,
        0,
        0,
      ],
      y: [
        60,
        0,
        0,
        0,
        0,
      ],
    }}
    transition={{
        delay:1,
      duration: 3,
      times: [
        0,
        1 / 4,
        3.2 / 4,
        4.6 / 4,
        1,
      ],
      ease,
    }}
    className="
      text-base
      font-medium
      text-[#303030]
    "
  >
    Heart
  </motion.span>


  {/* =================================================
      HAND
      1.0s → enters
      3.2s → immediately moves toward center
  ================================================= */}

  <motion.span
    initial={{
      opacity: 0,
      x: 120,
    }}
    animate={{
      opacity: [
        0,
        1,
        1,
        0,
        0,
      ],
      x: [
        70,  // start
        0,    // 1s
        0,    // 3.2s
        -55,  // move toward Heart
        -48,  // hide
      ],
    }}
    transition={{
       delay:1,
      duration: 3,
      times: [
        0,
        1 / 4,
        3.2 / 4,
        4.6 / 4,
        1,
      ],
      ease,
    }}
    className="
      text-base
      font-medium
      text-[#303030]
    "
  >
    Hand
  </motion.span>
</div>


<motion.div
  initial={{
    opacity: 0,
    scale: 0.5,
    y: 0,
  }}
  animate={{
    opacity: [
      0, // start
      1, // HHH visible
      1, // stay
      1, // after moving up
      0, // fade out
    ],

    scale: [
      0.5,
      1.15,
      1,
      1,
      0.7,
    ],

    y: [
      0,      // initial
      0,      // HHH appears
      0,      // stays
      -110,   // MOVE UP
      -110,   // stay at top while fading
    ],
  }}
  transition={{
    duration: 2.2,
    delay: 3.5,

    times: [
      0,      // 3.8s
      0.32,   // 4.5s
      0.55,   // 5.0s
      0.86,   // 5.7s
      1,      // 6.0s
    ],

    ease,
  }}
  className="
    pointer-events-none
    absolute
    left-1/2
    top-[155px]
    z-50
    -translate-x-1/2
    text-base
    font-extrabold
    tracking-tight
    text-[#0668E1]
  "
>
  HHH
</motion.div>
{/* =====================================================
    STEP 1
    AVATAR + ROLE

    0s     → Avatar appears
    0.3s   → Role appears
    0.8s   → Role fades/moves upward
    1.0s   → Head / Heart / Hand starts
===================================================== */}

<motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay: 0,
    ease,
  }}
  className="
    absolute
    left-1/2
    top-0
    z-20
    flex
    -translate-x-1/2
    flex-col
    items-center
  "
>
  {/* AVATAR */}

  <div
    className="
      flex
      size-[clamp(80px,calc(110_/_var(--width)*100vw),400px)]
      items-center
      justify-center
      overflow-hidden
      rounded-full
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

  {/* ROLE */}

  <motion.span
    initial={{
      opacity: 0,
      y: 15,
    }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [15, 0, 0, -25],
    }}
    transition={{
      duration: 2,
      times: [0, 0.9, 0.9, 1],
      ease,
    }}
    className="
      mt-3
      whitespace-nowrap
      text-h6
      font-extrabold
uppercase
      text-[#303030]
    "
  >
    {role.role}
  </motion.span>
</motion.div>

{/* =====================================================
    FINAL HARMONY STATE
===================================================== */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.95,
  }}
  animate={{
    opacity: [0, 0, 1, 1],
    scale: 1,
  }}
  transition={{
    duration: 1.6,
    delay: 4.2,
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
      opacity: 0,
      scale: 0.65,
    }}
    animate={{
      opacity: [0, 0.9, 0.35, 0.2],
      scale: [0.65, 1.15, 1.05, 1],
    }}
    transition={{
      duration: 2,
      delay: 4.2,
      times: [0, 0.35, 0.65, 1],
      ease,
    }}
    className="
      absolute
      left-1/2
      top-1/2
      z-0
      size-[180%]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#0668E1]/20
      blur-[35px]
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
      delay: 4.5,
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