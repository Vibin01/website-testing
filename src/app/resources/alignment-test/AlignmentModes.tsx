"use client";

const alignmentModes = [
  {
    label: "AUTO-ALIGNED",
    title: "Pattern-Led Response",
    description:
      "Established approaches continue to guide responses even as conditions begin to.",
    badge: "bg-[#36C354]",
    card: "border-[#36C354] bg-[#36C3541A]",
  },
  {
    label: "ALIGNED",
    title: "Clarity-Led Response",
    description:
      "Understanding, intention, and action remain coherent as conditions continue to change.",
    badge: "bg-[#2B9B43]",
    card: "border-[#2B9B43] bg-[#2B9B431A]",
  },
  {
    label: "DYNAMIC",
    title: "Context-Led Response",
    description:
      "Different patterns emerge across situations, with no single mode consistently guiding.",
    badge: "bg-[#0668E1]",
    card: "border-[#0668E1] bg-[#0668E11A]",
  },
  {
    label: "UNALIGNED",
    title: "Action-Led Response",
    description:
      "Action moves before understanding and intention becomes sufficiently clear to guide it.",
    badge: "bg-[#F9A620]",
    card: "border-[#F9A620] bg-[#F9A6201A]",
  },
  {
    label: "MISALIGNED",
    title: "Perception-Led Response",
    description:
      "Interpretation shapes the response before what is happening is sufficiently validated.",
    badge: "bg-[#F0431D]",
    card: "border-[#F0431D] bg-[#F0431D1A]",
  },
];

export default function Page() {
  return (
    <>
      {/* ================================
          MAIN SECTION
      ================================= */}

      <section className="w-full overflow-hidden bg-white py-[5%]">
        {/* ================================
            HEADER
        ================================= */}

        <div className="mx-auto px-[5%]">
          <p className="text-xl font-bold text-primary">
            THE FIVE ALIGNMENT MODES
          </p>

          <h1 className="mt-xs text-h2 font-extrabold">
            Five Ways Alignment Can Organize Through Change.
          </h1>

          <p className="mt-1 text-base font-medium">
            Your responses reveal the Alignment Mode that emerges across
            changing hiring situations.
          </p>
        </div>

        {/* ================================
            MARQUEE
        ================================= */}

        <div className="mt-md w-full overflow-hidden">
          <div className="marquee-track flex w-max py-lg">

            {/* FIRST SET */}
            <div className="flex shrink-0 gap-md pr-md">
              {alignmentModes.map((item, index) => (
                <div
                  key={`first-${index}`}
                  className={`
                    w-[clamp(280px,calc(400_/_var(--width)*100vw),600px)]
                    shrink-0
                    rounded-md
                    border
                    p-sm
                    
                    ${item.card}
                  `}
                >
                  {/* Badge */}
                  <span
                    className={`
                      inline-flex
                      rounded-sm
                      p-xs
                      text-xl
                      font-bold
                      text-white
                      ${item.badge}
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Title */}
                  <h2 className="mt-sm text-base font-bold">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-1 text-xl font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* SECOND SET - DUPLICATE FOR SEAMLESS LOOP */}
             <div className="flex shrink-0 gap-md">
              {alignmentModes.map((item, index) => (
                <div
                  key={`second-${index}`}
                  className={`
                    w-[clamp(280px,calc(400_/_var(--width)*100vw),600px)]
                    shrink-0
                    rounded-md
                    border
                    p-sm
                    
                    ${item.card}
                  `}
                >
                  {/* Badge */}
                  <span
                    className={`
                      inline-flex
                      rounded-sm
                      p-xs
                      text-xl
                      font-bold
                      text-white
                      ${item.badge}
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Title */}
                  <h2 className="mt-sm text-base font-bold">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-1 text-xl font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          MARQUEE CSS
      ================================= */}

      <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 45s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}