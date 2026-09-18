"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import Calibrator, { leverCards } from "./Calibrator";

const quarterlyTarget = 120;
const baseHires = 104;

interface EasyCalibratorProps {
  onClose?: () => void;
}

export default function EasyCalibrator({ onClose }: EasyCalibratorProps) {
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

  const isTargetReached = projectedHires >= quarterlyTarget;
  const isTargetExceeded = projectedHires > quarterlyTarget;

  return (
    <div className="relative w-full">
      

      {/* Header */}
      <div className="w-full text-center flex flex-col items-center justify-center mt-10 md:mt-0 mb-6 sm:mb-8">
        <p className="text-xl font-bold tracking-wider text-primary uppercase text-center">
          TARGET ALIGNMENT CALCULATOR
        </p>

        <h2 className="text-h2 font-extrabold mt-2 text-[#1B1C17] tracking-tight text-center">
          See the Gap. <span className="text-primary block md:inline">Calibrate the Response.</span>
        </h2>

        <p className="mt-3 text-base font-medium text-[#4A4A4A] w-full md:w-[70%] text-center leading-relaxed">
          Explore how changes in hiring velocity, interview acceptance, and offer acceptance may influence progress toward your hiring target.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-sm md:gap-md mt-lg">
        {/* Card 1: Quarterly Target */}
        <div className="bg-[#F0F7FF] border border-[#B2D0F6] rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center shadow-xs">
          <span className="text-h2 font-extrabold text-primary exo-2 leading-none">
            {quarterlyTarget}
          </span>
          <span className="text-xl md:text-base font-bold text-primary mt-2.5">
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
            className={`text-h2 font-extrabold exo-2 leading-none ${
              isTargetReached ? "text-[#1DB05B]" : "text-[#F0431D]"
            }`}
          >
            {projectedHires}
          </span>
          <span
            className={`text-xl md:text-base font-bold mt-2.5 ${
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
            className={`text-xl md:text-base font-bold mt-2.5 md:text-nowrap ${
              isTargetReached ? "text-[#1DB05B]" : "text-[#F0431D]"
            }`}
          >
            {isTargetReached ? (
              isTargetExceeded ? "Target Exceeded" : "Target Reached"
            ) : (
              <>
                <span className="exo-2 font-extrabold px-[1%]">{hiresGap}</span> Hiring Gap
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
        <div className="relative flex items-center gap-sm w-full md:pl-sm">
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
        <div className="relative flex items-center gap-sm w-full md:pl-sm">
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
      </div>

      <Calibrator ranges={ranges} setRanges={setRanges} />
    </div>
  );
}