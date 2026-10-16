import React from "react";

interface StepItem {
  number: string;
  title: string;
}

const steps: StepItem[] = [
  { number: "01", title: "Understanding" },
  { number: "02", title: "Intention" },
  { number: "03", title: "Decision" },
  { number: "04", title: "Action" },
];

function ChevronStepCard({
  number,
  title,
  className = "",
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative py-sm w-[clamp(225px,calc(290/var(--width)*100vw),370px)] flex items-center select-none ${className}`}
    >
      {/* Background SVG with left-pointing rounded chevron matching reference image, rounded right corners, white fill, and crisp 2px blue stroke */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 285 64"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="
            M 40 2
            L 265 2
            A 16 16 0 0 1 281 18
            L 281 46
            A 16 16 0 0 1 265 62
            L 40 62
            A 14 14 0 0 1 30 58
            L 11 39
            A 10 10 0 0 1 11 25
            L 30 6
            A 14 14 0 0 1 40 2
            Z
          "
          fill="white"
          stroke="#0668E1"
          strokeWidth="2.2"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
        />
      </svg>

      {/* Card Content */}
      <div className="relative z-10 flex items-center gap-sm pl-[clamp(42px,calc(52/var(--width)*100vw),66px)] pr-lg w-full">
        <span className="text-base font-bold text-[#0668E1] tracking-tight">
          {number}
        </span>
        <span className="text-h5 font-bold text-[#0668E1] tracking-tight">
          {title}
        </span>
      </div>
    </div>
  );
}

export default function ChangeIsInevitableSection() {
  return (
    <section id="change-is-inevitable" className="w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-md">
        {/* Left Column: Heading and Description Text */}
        <div className="w-full lg:w-[54%] flex flex-col items-start text-left">
          {/* Eyebrow */}
          <p className="mb-xs text-xl font-bold uppercase tracking-wider text-[#0668E1]">
            WHERE CHANGES BECOMES VISIBLE
          </p>

          {/* Main Title */}
          <h2 className="mb-md text-h2 font-extrabold tracking-tight leading-tight">
            <span className="text-[#1B1C17]">Change Is Inevitable. </span>
            <span className="text-[#0668E1]">Disconnection Is Not.</span>
          </h2>

          {/* Description Paragraph 1 */}
          <p className="mb-md text-base font-medium text-[#1B1C17] leading-relaxed">
            Alignment keeps understanding, intention, decisions and actions
            connected as conditions change.
          </p>

          {/* Description Paragraph 2 */}
          <p className="mb-md text-base font-medium text-[#1B1C17] leading-relaxed">
            It does not stop change. It makes change visible before continuity
            breaks.
          </p>

          {/* Key Callout Paragraph 3 */}
          <p className="text-xl font-bold text-[#1B1C17] leading-relaxed">
            Alignment is the structural condition that enables behavioural
            continuity to remain coherent through change.
          </p>
        </div>

        {/* Right Column: Staggered Chevron Timeline Cards */}
        <div className="w-full lg:w-[46%] flex justify-center lg:justify-end">
          <div className="relative flex flex-col gap-md py-2">
            {/* Continuous vertical connecting line passing behind cards */}
            <div className="absolute left-[clamp(135px,calc(175/var(--width)*100vw),235px)] top-[clamp(16px,calc(24/var(--width)*100vw),36px)] bottom-[clamp(16px,calc(24/var(--width)*100vw),36px)] w-[2px] bg-[#C2DCFF] z-0" />

            {/* Staggered Cards */}
            {steps.map((step, index) => {
              // Stagger offsets using clamp (+5px step increment: 30px step)
              const offsetStyles = [
                "ml-0",
                "ml-[clamp(20px,calc(30/var(--width)*100vw),45px)]",
                "ml-[clamp(40px,calc(60/var(--width)*100vw),90px)]",
                "ml-[clamp(60px,calc(90/var(--width)*100vw),135px)]",
              ];

              return (
                <div key={step.number} className={`relative z-10 ${offsetStyles[index]}`}>
                  <ChevronStepCard number={step.number} title={step.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
