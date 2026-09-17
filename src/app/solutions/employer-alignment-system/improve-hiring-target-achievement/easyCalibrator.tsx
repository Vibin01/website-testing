"use client";

import { useState } from "react";
<<<<<<< HEAD
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
=======
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
import Calibrator, { leverCards } from "./Calibrator";

const quarterlyTarget = 120;
const baseHires = 104;

<<<<<<< HEAD
interface EasyCalibratorProps {
  onClose?: () => void;
}

export default function EasyCalibrator({ onClose }: EasyCalibratorProps) {
=======
export default function EasyCalibrator() {
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
  const [ranges, setRanges] = useState(leverCards.map(() => 0));

  const getValue = (val: string) => parseInt(val) || 0;

  const addedHires = leverCards.reduce((total, card, index) => {
    const cardTotal = card.items
      .slice(0, ranges[index])
      .reduce((sum, item) => sum + getValue(item.value), 0);

    return total + cardTotal;
  }, 0);

  const projectedHires = baseHires + addedHires;
  const hiresGap = Math.max(quarterlyTarget - projectedHires, 0);
<<<<<<< HEAD

  const isTargetReached = projectedHires >= quarterlyTarget;
  const isTargetExceeded = projectedHires > quarterlyTarget;

  return (
    <div className="relative w-full bg-white rounded-lg p-md md:p-lg border border-[#D3E6FF]">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-1 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-500 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 z-10"
        >
          <X className="size-iconsize-sm" />
        </button>
      )}

      {/* Header */}
      <div className="w-full text-center flex flex-col items-center justify-center mt-4 sm:mt-0 mb-6 sm:mb-8">
        <p className="text-xl font-bold tracking-wider text-primary uppercase text-center">
          TARGET ALIGNMENT CALCULATOR
        </p>

        <h2 className="text-h2 font-extrabold mt-2 text-[#1B1C17] tracking-tight text-center">
          See the Gap. <span className="text-primary">Calibrate the Response.</span>
        </h2>

        <p className="mt-3 text-base font-medium text-[#4A4A4A] w-full md:w-[70%] text-center leading-relaxed">
          Explore how changes in hiring velocity, interview acceptance, and offer acceptance may influence progress toward your hiring target.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-lg">
        {/* Card 1: Quarterly Target */}
        <div className="bg-[#F0F7FF] border border-[#B2D0F6] rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center shadow-xs">
          <span className="text-[38px] md:text-[44px] font-extrabold text-primary exo-2 leading-none">
            {quarterlyTarget}
          </span>
          <span className="text-base font-bold text-primary mt-2.5">
            Quarterly Target
          </span>
        </div>

        {/* Card 2: Forecast Hires */}
        <div
          className={`${
            isTargetReached
              ? "bg-[#EEFDF5] border-[#9ADFA9]"
              : "bg-[#FFF4F2] border-[#FFD3CA]"
          } border rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center shadow-xs`}
        >
          <span
            className={`text-[38px] md:text-[44px] font-extrabold exo-2 leading-none ${
              isTargetReached ? "text-[#1DB05B]" : "text-[#F0431D]"
            }`}
          >
            {projectedHires}
          </span>
          <span
            className={`text-base font-bold mt-2.5 ${
              isTargetReached ? "text-[#1DB05B]" : "text-[#F0431D]"
            }`}
          >
            Forecast Hires
          </span>
        </div>

        {/* Card 3: Target Status / Hiring Gap */}
        <div
          className={`${
            isTargetReached
              ? "bg-[#EEFDF5] border-[#9ADFA9]"
              : "bg-[#FFF4F2] border-[#FFD3CA]"
          } border rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center shadow-xs`}
        >
          {isTargetReached ? (
            <div className="flex items-center justify-center">
              <Image
                src="/icons/target-exceeded-icon.svg"
                alt="Target Exceeded"
                width={44}
                height={44}
                unoptimized
                className="size-iconsize-md object-contain"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Image
                src="/icons/hiring-gap-icon.svg"
                alt="Hiring Gap"
                width={40}
                height={40}
                unoptimized
                className="size-iconsize-md object-contain"
              />
            </div>
          )}
          <span
            className={`text-base font-bold mt-2.5 ${
              isTargetReached ? "text-[#1DB05B]" : "text-[#F0431D]"
            }`}
          >
            {isTargetReached ? (
              isTargetExceeded ? "Target Exceeded" : "Target Reached"
            ) : (
              <>
                <span className="exo-2 font-extrabold">{hiresGap}</span> Hiring Gap
              </>
            )}
          </span>
        </div>
      </div>

      {/* Steps Flow Indicator */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md my-7">
        {/* Step 01 */}
        <div className="relative flex items-center gap-sm w-full">
          <div className="flex items-center justify-center text-xl p-sm rounded-xs bg-[#EEF6FF] text-primary font-extrabold shrink-0">
            01
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-primary text-xl">
              Measure Progress
            </span>
            <span className="font-medium text-[#1B1C17] text-xl mt-1">
              Understand the current position
            </span>
          </div>

          {/* Arrow 1 in the gap between Col 1 and Col 2 */}
          <div
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 translate-x-1/2 items-center justify-center pointer-events-none z-10"
            style={{ right: "calc(-0.5 * var(--spacing-md, 20px))" }}
          >
            <ArrowRight className="size-iconsize-sm text-[#1B1C17]" />
          </div>
        </div>

        {/* Step 02 */}
        <div className="relative flex items-center gap-sm w-full pl-sm">
          <div className="flex items-center justify-center text-xl p-sm rounded-xs bg-[#EEF6FF] text-primary font-extrabold shrink-0">
            02
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-primary text-xl">
              Calibrate Conditions
            </span>
            <span className="font-medium text-[#1B1C17] text-xl mt-1">
              Adjust the key hiring levers
            </span>
          </div>

          {/* Arrow 2 in the gap between Col 2 and Col 3 */}
          <div
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 translate-x-1/2 items-center justify-center pointer-events-none z-10"
            style={{ right: "calc(-0.5 * var(--spacing-md, 20px))" }}
          >
            <ArrowRight className="size-iconsize-sm text-[#1B1C17]" />
          </div>
        </div>

        {/* Step 03 */}
        <div className="relative flex items-center gap-sm w-full pl-sm">
          <div className="flex items-center justify-center text-xl p-sm rounded-xs bg-[#EEF6FF] text-primary font-extrabold shrink-0">
            03
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-primary text-xl">
              See the Projected Path
            </span>
            <span className="font-medium text-[#1B1C17] text-xl mt-1">
              View the potential impact
            </span>
          </div>
        </div>
=======
  // const isTargetReached = hiresGap === 0;

  const excessHires = Math.max(projectedHires - quarterlyTarget, 0);
const isTargetReached = projectedHires >= quarterlyTarget;
const isTargetExceeded = projectedHires > quarterlyTarget;

  const summaryCards = [
    {
      value: quarterlyTarget,
      label: "Quarterly Target",
      bg: "bg-[#EEF6FF]",
      border: "border-[#B2D0F6]",
      text: "text-[#0668E1]",
    },
    {
      value: projectedHires,
      label: "Forecast Hires",
      bg: "bg-[#E7FFF3]",
      border: "border-[#9ADFA9]",
      text: "text-[#2B9B43]",
    },
    {
      value: hiresGap,
      label: isTargetExceeded
    ? "Target Exceeded"
    : isTargetReached
    ? "Target Reached"
    : "Hiring Gap",
      bg: isTargetReached ? "bg-[#E7FFF3]" : "bg-[#FFF4F2]",
      border: isTargetReached ? "border-[#9ADFA9]" : "border-[#FFD3CA]",
      text: isTargetReached ? "text-[#2B9B43]" : "text-[#F0431D]",
    },
  ];

  return (
    <div className="mx-auto">
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">
        Easy Calibrator
      </h1>

      <p className="mt-2 text-base font-bold text-[#1B1C17]">
        The Hiring Alignment control System.
      </p>

      <p className="mt-2 text-base font-medium text-[#1B1C17]">
     Identify where hiring performance is drifting, understand which interventions will have the greatest impact, and see how those changes improve target achievement. </p>

      <p className="mt-2 text-base font-medium text-[#1B1C17]">
        Based on current pipeline performance and conversion signals.
      </p>

      <div className="grid grid-cols-3 gap-[clamp(8px,calc(16/var(--width)*100vw),40px)] mt-6">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} ${card.border} flex md:flex-row flex-col justify-center rounded-md border p-4 text-center`}
          >
           <div
  className={`text-h2 block font-extrabold md:text-nowrap ${card.text}`}
>
  {!(index === 2 && isTargetReached) && (
    <span className="exo-2">
      {card.value}
    </span>
  )}

  <span
    className={`text-base font-medium ${
      !(index === 2 && isTargetReached) ? "md:pl-[3%]" : ""
    } block md:inline-block`}
  >
    {card.label}
  </span>
</div>
          </div>
        ))}
      </div>

      <div className="font-medium flex justify-center items-center text-center gap-[clamp(8px,calc(16/var(--width)*100vw),40px)] mt-6 text-base text-[#1B1C17]">
        <span className="flex-1">Use Easy Calibrator </span>
        <span>→</span>
        <span className="flex-1">System Calculates</span>
        <span>→</span>
        <span className="flex-1">Achieve Targets</span>
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
      </div>

      <Calibrator ranges={ranges} setRanges={setRanges} />
    </div>
  );
}