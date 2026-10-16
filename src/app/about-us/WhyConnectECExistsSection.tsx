import React from "react";

interface BenefitCard {
  number: string;
  title: string;
  description: string;
}

const cards: BenefitCard[] = [
  {
    number: "01",
    title: "Reveal",
    description: "Make emerging change visible.",
  },
  {
    number: "02",
    title: "Focus",
    description: "Show what requires attention.",
  },
  {
    number: "03",
    title: "Intervene",
    description: "Create time to act.",
  },
  {
    number: "04",
    title: "Protect",
    description: "Keep the transition connected.",
  },
];

function RibbonBadge({ number }: { number: string }) {
  return (
    <div className="relative w-[clamp(36px,calc(52/var(--width)*100vw),62px)] h-[clamp(48px,calc(62/var(--width)*100vw),74px)] flex items-center justify-center select-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 36 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M 4 0
            L 32 0
            A 4 4 0 0 1 36 4
            L 36 30
            A 3 3 0 0 1 34.6 32.4
            L 19.4 41.2
            A 3 3 0 0 1 16.6 41.2
            L 1.4 32.4
            A 3 3 0 0 1 0 30
            L 0 4
            A 4 4 0 0 1 4 0
            Z
          "
          fill="#0668E1"
        />
      </svg>
      <span className="relative z-10 text-white font-bold text-lg tracking-wide -mt-1">
        {number}
      </span>
    </div>
  );
}

export default function WhyConnectECExistsSection() {
  return (
    <section id="why-connect-ec-exists" className="w-full">
      {/* Header Area */}
      <div className="flex flex-col items-start text-left mb-xl">
        {/* Eyebrow */}
        <p className="mb-xs text-xl font-bold uppercase tracking-wider text-[#0668E1]">
          WHY CONNECT EC EXISTS
        </p>

        {/* Main Title */}
        <h2 className="mb-xs text-h2 font-extrabold text-[#1B1C17] tracking-tight leading-tight">
          See What Status Cannot Show.
        </h2>

        {/* Subtitle */}
        <p className="text-base font-medium text-[#1B1C17] leading-relaxed">
          Connect EC reveals the changing conditions influencing what happens next.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {cards.map((card) => (
          <div
            key={card.number}
            className="flex flex-col items-start rounded-md border border-[#D0E5FF] bg-white p-sm shadow-mobile-mini md:shadow-web-mini transition-all hover:shadow-md"
          >
            {/* Step Ribbon Badge */}
            <div className="mb-xs">
              <RibbonBadge number={card.number} />
            </div>

            {/* Title */}
            <h3 className="mb-xs text-base font-bold text-[#0668E1]">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-xl font-medium text-[#1B1C17]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Summary Callout Bar */}
      <div className="mt-xl flex flex-col md:flex-row items-center justify-between gap-md rounded-md border border-[#D9E9FC] bg-white p-sm shadow-mobile-medium md:shadow-web-medium">
        <div className="flex-1 text-center py-2">
          <p className="text-base font-bold text-[#1B1C17]">
            <span className="text-[#0668E1]">Connect EC </span>
            keeps human judgement in control.
          </p>
        </div>

        <div className="w-full md:flex-1 rounded-md border border-[#B2D0F6] bg-[#F2F8FF] px-md py-md text-center">
          <p className="text-xl font-bold text-[#0668E1]">
            It gives people earlier visibility and more time to act.
          </p>
        </div>
      </div>
    </section>
  );
}
