"use client";
import { useState } from "react";

const baseHires = 104;

export const leverCards = [
  {
    title: "Hiring Velocity",
    recoveryTitle: "Hiring Velocity",
    recoveryStatus: "Improved",
    recoveryDesc: "Eliminate delays, improve throughput",
    items: [
      { text: "Expand and diversify talent pipelines", value: "+3 Hires" },
      { text: "Increase interview scheduling frequency", value: "+3 Hires" },
      { text: "Eliminate delays across hiring stages", value: "+2 Hires" },
    ],
  },
  {
    title: "Interview Acceptance",
    recoveryTitle: "Interview Acceptance",
    recoveryStatus: "Optimized",
    recoveryDesc: "Reduce friction, align expectations",
    items: [
      {
        text: "Reduce interview scheduling friction points",
        value: "+2 Hires",
      },
      {
        text: "Improve recruiter responsiveness and coordination",
        value: "+2 Hires",
      },
      { text: "Align expectations before interview stages", value: "+1 Hire" },
    ],
  },
  {
    title: "Offer Acceptance",
    recoveryTitle: "Offer Acceptance",
    recoveryStatus: "Strengthened",
    recoveryDesc: "Align role, compensation",
    items: [
      { text: "Reduce offer delays and uncertainty gaps", value: "+3 Hires" },
      {
        text: "Strengthen value communication and positioning",
        value: "+3 Hires",
      },
      {
        text: "Align compensation with market expectations",
        value: "+3 Hires",
      },
    ],
  },
];

const getValue = (val: string) => parseInt(val) || 0;

type CalibratorProps = {
  ranges: number[];
  setRanges: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function Calibrator({ ranges, setRanges }: CalibratorProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getCardTotal = (index: number) => {
    return leverCards[index].items
      .slice(0, ranges[index])
      .reduce((sum, item) => sum + getValue(item.value), 0);
  };

  let runningTotal = baseHires;

  const recoverySteps = [
    {
      value: baseHires,
      title: "Baseline",
      desc: "Misalignment present",
      totalHires: "",
      status: "",
      active: true,
    },
    ...leverCards.map((card, index) => {
      const gain = getCardTotal(index);
      runningTotal += gain;

      return {
        value: runningTotal,
        title: card.recoveryTitle,
        totalHires: `(${gain > 0 ? "+" : ""}${gain} hires)`,
        status: ranges[index] === card.items.length ? card.recoveryStatus : "",
        desc: card.recoveryDesc,
        active: gain > 0,
      };
    }),
  ];

  return (
    <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-md mt-lg">
      {/* LEFT SIDE */}
      <div className="space-y-6">
        {leverCards.map((card, index) => {
          const total = getCardTotal(index);

          return (
            <div
              key={index}
              className="bg-white border border-[#D1E4FF] rounded-md p-md shadow-mobile-medium md:shadow-web-medium"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base">{card.title}</h3>

                <div
                  className={`rounded-[8px] border px-3 py-1 text-xl font-bold ${
                    total > 0
                      ? "bg-[#E7FFF3] border-[#9ADFA9] text-[#2B9B43]"
                      : "bg-[#FFF4F2] border-[#FFD3CA] text-[#F0431D]"
                  }`}
                >
                  {total > 0 ? "+" : ""}
                  {total} Hires
                </div>
              </div>

              {/* SLIDER */}
              <div className="relative flex items-center w-full mt-3 h-6">
                {/* Track Line: Primary active, gray-300 inactive */}
                <div
                  className="absolute inset-x-0 h-2 rounded-full pointer-events-none"
                  style={{
                    background:
                      ranges[index] === 0
                        ? "#D1D5DB"
                        : ranges[index] === 3
                          ? "#0668E1"
                          : `linear-gradient(to right, #0668E1 calc((100% - 20px) * (${ranges[index]} / 3) + 10px), #D1D5DB calc((100% - 20px) * (${ranges[index]} / 3) + 10px))`,
                  }}
                />

                <input
                  type="range"
                  min={0}
                  max={3}
                  step={1}
                  value={ranges[index]}
                  onChange={(e) => {
                    const newRanges = [...ranges];
                    newRanges[index] = Number(e.target.value);
                    setRanges(newRanges);
                  }}
                  className="relative z-10 w-full h-6 m-0 p-0 bg-transparent appearance-none cursor-pointer outline-none
                    [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:w-full
                    [&::-moz-range-track]:bg-transparent [&::-moz-range-track]:h-2 [&::-moz-range-track]:w-full
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0668E1] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#0668E1] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer
                    active:[&::-webkit-slider-thumb]:bg-[#0668E1] focus:[&::-webkit-slider-thumb]:bg-[#0668E1]
                    active:[&::-moz-range-thumb]:bg-[#0668E1] focus:[&::-moz-range-thumb]:bg-[#0668E1]"
                />
              </div>

              {/* ITEMS */}
              {ranges[index] > 0 && (
                <div className="mt-4 space-y-2 text-xl font-medium text-[#2C2C2C]">
                  {card.items.slice(0, ranges[index]).map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between gap-4">
                      <span>{item.text}</span>
                      <span className="text-nowrap">
                        {itemIndex < ranges[index] ? item.value : "0 Hires"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white border border-[#D1E4FF] rounded-md p-md shadow-mobile-medium md:shadow-web-medium">
        <h3 className="font-bold text-base">Alignment Recovery Path</h3>

        <p className="mt-1 text-xl font-medium">
          How calibration restores hiring alignment
        </p>

        <div className="mt-4 space-y-4">
          {recoverySteps.map((step, index) => (
            <div key={index}>
              <div
                className={`text-h2 exo-2 font-extrabold ${
                  index === 0
                    ? "text-[#0668E1]"
                    : step.active
                      ? "text-[#2B9B43]"
                      : "text-[#7A7A7A]"
                }`}
              >
                {step.value}
              </div>

              <div className="font-bold text-xl">
                {step.title}
                {step.status && <span> {step.status}</span>} {step.totalHires}
              </div>
              <div
                className={`text-xl font-medium ${
                  step.active || index === 0
                    ? "text-[#2C2C2C]"
                    : "text-[#7A7A7A]"
                }`}
              >
                {step.desc}
              </div>
            </div>
          ))}

          <div className="relative mt-4 inline-flex items-center gap-2">
            {/* Icon */}
            <img
              src="/icons/info-round-icon.svg"
              alt="info-icon"
              className="size-iconsize-sm cursor-pointer"
              onClick={() => setShowTooltip(!showTooltip)}
            />

            {/* Text */}
            <span className="text-lg font-medium text-[#2C2C2C]">
              Recommendations powered by real-time hiring data
            </span>

            {/* Tooltip */}
            <div
              className={`
      absolute bottom-[140%] -left-[6%] z-50
      rounded-[18px] border border-[#9EC5FF]
      bg-[#EAF4FF] px-5 py-4
      shadow-mobile-small md:shadow-web-small
      transition-all duration-300
      ${showTooltip ? "opacity-100 visible" : "opacity-0 invisible"}
      md:group-hover:opacity-100
      md:group-hover:visible
    `}
            >
              <p className="text-xl font-medium text-[#0668E1]">
                The interface shown is a conceptual representation of the
                Connect EC solution. Features, styling, content, workflows, and
                screen layouts may vary in the final product.
              </p>

              <div className="absolute left-[18px] top-full h-4 w-4 -translate-y-1/2 rotate-45 border-b border-r border-[#9EC5FF] bg-[#EAF4FF]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
