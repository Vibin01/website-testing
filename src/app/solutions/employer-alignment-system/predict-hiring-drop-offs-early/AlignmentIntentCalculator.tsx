"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { MdGroups } from "react-icons/md";

export type ActiveTab = "interview" | "offer";

interface AlignmentIntentCalculatorProps {
  onClose?: () => void;
  defaultTab?: ActiveTab;
}

export default function AlignmentIntentCalculator({
  onClose,
  defaultTab = "offer",
}: AlignmentIntentCalculatorProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>(defaultTab);
  const [inputCount, setInputCount] = useState<number | string>(10);
  const [appliedCount, setAppliedCount] = useState<number>(10);

  // Single candidate values
  const perCandidateValue = activeTab === "interview" ? 9.6 : 1.6;
  const unit = activeTab === "interview" ? "Hours" : "Days";

  // Calculate aggregate
  const currentCount = Number(appliedCount) > 0 ? Number(appliedCount) : 1;
  const rawAggregate = currentCount * perCandidateValue;
  const aggregateValue = Number.isInteger(rawAggregate)
    ? rawAggregate
    : Number(rawAggregate.toFixed(1));

  const handleCalculate = () => {
    const parsed = Number(inputCount);
    if (!isNaN(parsed) && parsed > 0) {
      setAppliedCount(parsed);
    } else {
      setAppliedCount(10);
      setInputCount(10);
    }
  };

  const handleTabSwitch = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative w-full bg-white rounded-lg  p-md">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-[1%] rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-500 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20"
        >
          <X className="size-iconsize-sm" />
        </button>
      )}

      {/* Header */}
      <div className="text-center flex flex-col items-center justify-center mx-auto mt-10 md:mt-0 mb-6 sm:mb-8">
        <p className="text-xl font-bold tracking-wider text-primary uppercase">
          Intervention Time Calculator
        </p>
        <h2 className="text-h2 font-extrabold mt-1">
          Turn Earlier Visibility into{" "}
          <span className="text-primary">Intervention Time.</span>
        </h2>
        <p className="text-base font-medium mt-2 w-full md:w-[70%]">
          Estimate how early alignment signals may emerge before an outcome—and
          how much intervention time that earlier visibility may create.
        </p>
      </div>

      {/* 2-Column Grid (Responsive Stack: Calculator Form First on Mobile) */}
      <div className="flex flex-col md:flex-row gap-md">
        {/* LEFT COLUMN: Results & Visual Timeline (7 cols on desktop, order-2 on mobile) */}
        <div className="order-2 md:order-1 flex flex-col gap-md w-full md:w-[65%]">
          {/* Card 1: Intervention Time Gained */}
          <div className="rounded-md border border-[#D3E6FF] p-sm bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold">
                Intervention Time Gained
              </h3>

              <div className="mt-2 flex items-baseline">
                <span className="text-h2 font-extrabold text-primary">
                  +{perCandidateValue}
                </span>
                <span className="text-xl font-bold text-primary ml-1.5">
                  {unit}
                </span>
              </div>

              <p className="text-xl font-medium mt-xs">
                Per Candidate
              </p>
              <p className="text-xl font-medium mt-1">
                {activeTab === "offer"
                  ? "Alignment signals are projected to become visible 1.6 days before the joining outcome."
                  : "Alignment signals are projected to become visible 9.6 hours before the interview outcome."}
              </p>
            </div>            {/* Timeline Graphic */}
            <div className="pt-xs">
              <div className="flex items-center justify-between gap-1.5 sm:gap-sm">
                {/* Left Milestone */}
                <div className="flex flex-col items-center text-center shrink-0 w-[20%] sm:w-[15%]">
                   <Image
                    src={activeTab === "offer" ? "/icons/offer-icon.svg" : "/icons/video-icon.svg"}
                    alt={activeTab === "offer" ? "Int Date" : "Joining Date"}
                    width={32}
                    height={32}
                    className="size-7 sm:size-iconsize-md scale-90 object-contain mb-1 sm:mb-1.5"
                  />
                  <span className="text-[11px] sm:text-sm font-medium leading-tight">
                    {activeTab === "offer" ? "Offer Released" : "Int Confirmed"}
                  </span>
                  <span className="text-[10px] sm:text-sm text-[#727272] font-medium leading-tight mt-0.5 whitespace-nowrap">
                    Mon 10:00 AM
                  </span>
                </div>

                {/* Center Timeline Track */}
                <div className="flex-1 flex flex-col justify-end min-w-0">
                  {/* Tooltip badge placed above the blue highlight section */}
                  <div className="flex justify-end pr-0.5 sm:pr-1 mb-xs mr-xs">
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-xs border border-[#B2D0F6] bg-white text-[11px] sm:text-md font-medium text-primary whitespace-nowrap">
                      {activeTab === "offer"
                        ? "1.6 days earlier"
                        : "1.6 hours earlier"}
                    </span>
                  </div>

                  <div className="h-7 sm:h-9 rounded-full bg-[#DEEDFF] flex items-center justify-between p-1 w-full relative">
                    <AnimatePresence mode="wait">
                      {activeTab === "offer" ? (
                        <motion.div
                          key="offer-timeline"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex items-center relative"
                        >
                          {/* Blue highlight for Thu & Fri (1.6 days earlier window) */}
                          <div className="absolute right-0 top-0 bottom-0 w-[40%] rounded-full bg-[#0066FF] " />

                          {/* 5 Equally Spaced Days */}
                          <div className="w-full grid grid-cols-5 items-center relative z-10 text-[8px] sm:text-sm">
                            <div className="flex items-center justify-start">
                              <span className="h-5 sm:h-7 px-1.5 sm:px-3 rounded-full border border-[#0066FF] bg-white text-[#0066FF] font-medium flex items-center justify-center">
                                Mon
                              </span>
                            </div>
                            <div className="flex items-center justify-center">
                              <span className="font-semibold text-[#0066FF]">
                                Tue
                              </span>
                            </div>
                            <div className="flex items-center justify-center">
                              <span className="font-semibold text-[#0066FF]">
                                Wed
                              </span>
                            </div>
                            <div className="flex items-center justify-center">
                              <span className="font-semibold text-white">
                                Thu
                              </span>
                            </div>
                            <div className="flex items-center justify-center">
                              <span className="font-semibold text-white">
                                Fri
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="interview-timeline"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full h-full flex items-center relative"
                        >
                          {/* Blue highlight for 22.20 & 24:00 (last 50%) */}
                          <div className="absolute right-0 top-0 bottom-0 w-[40%] md:w-[30%] rounded-full bg-[#0066FF] " />

                          {/* 4 Equally Spaced Timestamps */}
                          <div className="w-full grid grid-cols-3 items-center relative z-10 text-[8px] sm:text-sm">
                            <div className="flex items-center justify-start">
                              <span className="h-5 sm:h-7 px-1.5 sm:px-3 rounded-full border border-[#0066FF] bg-white text-[#0066FF] font-semibold flex items-center justify-center">
                                00:00
                              </span>
                            </div>
                            <div className="flex items-center justify-center">
                              <span className="font-semibold text-[#0066FF]">
                                12:00
                              </span>
                            </div>
                            <div className="flex items-center justify-end gap-1 sm:gap-md px-xs">
                              <span className="font-semibold text-white">
                                22.20
                              </span>
                              <span className="font-semibold text-white">
                                24:00
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Milestone */}
                <div className="flex flex-col items-center text-center shrink-0 w-[20%] sm:w-[15%]">
                  <Image
                    src={activeTab === "interview" ? "/icons/calender-icon.svg" : "/icons/joining-icon.svg"}
                    alt={activeTab === "interview" ? "Int Date" : "Joining Date"}
                    width={32}
                    height={32}
                    className="size-7 sm:size-iconsize-md scale-90 object-contain mb-1 sm:mb-1.5"
                  />
                  <span className="text-[11px] sm:text-sm font-medium leading-tight">
                    {activeTab === "offer" ? "Joining Date" : "Int Date"}
                  </span>
                  <span className="text-[10px] sm:text-sm text-[#727272] font-medium leading-tight mt-0.5 whitespace-nowrap">
                    {activeTab === "offer" ? "Fri 10:00 AM" : "Tue 10:00 AM"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Aggregate Intervention Time Gained */}
          <div className="rounded-md border border-[#D3E6FF] p-sm bg-white w-full">
            <h3 className="text-base font-bold">
              Aggregate Intervention Time Gained
            </h3>

            <div className="my-2 border-t border-[#D3E6FF]" />

            <div className="flex items-baseline mt-2">
              <motion.span
                key={aggregateValue}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-h2 font-extrabold text-primary"
              >
                {aggregateValue}
              </motion.span>
              <span className="text-h6 font-bold text-primary ml-1.5">
                {unit}
              </span>
            </div>

            <p className="text-xl font-medium mt-1">
              Across {currentCount} Candidates
            </p>
            <p className="text-xl font-medium mt-0.5">
              Equivalent to {perCandidateValue} {unit.toLowerCase()} of earlier
              visibility per candidate.
            </p>

            {/* Formula Banner Box */}
            <div className="mt-4 rounded-md border border-[#B2D0F6] bg-[#F2F8FF] p-sm flex flex-col gap-xs">
              <div className="flex items-center gap-xs sm:gap-md text-xl font-medium text-primary">
                <MdGroups className="size-iconsize-sm scale-110 text-primary shrink-0" />
                <span className="font-medium">x</span>
                <span>
                  {perCandidateValue} {unit.toLowerCase()} earlier
                </span>
              </div>

              <div className="w-full py-2.5 px-3 bg-primary text-white font-medium text-xl rounded-sm text-center break-words">
                {perCandidateValue} {unit.toLowerCase()} * {currentCount}{" "}
                Candidates = {aggregateValue} {unit.toLowerCase()}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Calculator Form (5 cols on desktop, order-1 on mobile) */}
        <div className="order-1 md:order-2 w-full md:w-[35%] h-fit flex flex-col justify-between rounded-2xl border border-[#D3E6FF] p-sm bg-white">
          <div>
            <h3 className="text-base font-bold mb-4">
              Calculate Intervention Time
            </h3>

            {/* Segmented Switch */}
            <div className="grid grid-cols-2 rounded-xl border border-gray-200 p-1 bg-white mb-5">
              <button
                type="button"
                onClick={() => handleTabSwitch("interview")}
                className={`py-2 rounded-lg text-xl transition-all cursor-pointer ${
                  activeTab === "interview"
                    ? "bg-primary text-white font-bold"
                    : "font-medium text-gray-700"
                }`}
              >
                Interview
              </button>

              <button
                type="button"
                onClick={() => handleTabSwitch("offer")}
                className={`py-2 rounded-lg text-xl transition-all cursor-pointer ${
                  activeTab === "offer"
                    ? "bg-primary text-white font-bold"
                    : "font-medium text-gray-700"
                }`}
              >
                Offer
              </button>
            </div>

            {/* Explanatory description */}
            <p className="text-xl font-medium mb-md">
              Estimate how early alignment signals may emerge before an
              outcome—and how much intervention time that earlier visibility
              may create.
            </p>

            {/* Milestone Dates Summary (Static display UI) */}
            <div className="space-y-4 mb-md">
              <div>
                <p className="text-md font-medium mb-1.5">
                  {activeTab === "interview"
                    ? "Interview Confirmed:"
                    : "Offer Released:"}
                </p>
                <div className="flex items-center gap-sm rounded-sm border border-[#D3E6FF] bg-white px-3.5 py-2.5">
                  <Image
                    src={activeTab === "interview" ? "/icons/video-icon.svg" : "/icons/offer-icon.svg"}
                    alt="Milestone 1"
                    width={20}
                    height={20}
                    className="size-5 grayscale opacity-60 shrink-0"
                  />
                  <span className="text-md font-medium text-[#727272] ">
                    Mon 10:00 AM
                  </span>
                </div>
              </div>

              <div>
                <p className="text-md font-medium mb-1.5">
                  {activeTab === "interview"
                    ? "Interview Date:"
                    : "Joining Date:"}
                </p>
                <div className="flex items-center gap-sm rounded-sm border border-[#D3E6FF] bg-white px-3.5 py-2">
                  <Image
                    src={activeTab === "interview" ? "/icons/calender-icon.svg" : "/icons/joining-icon.svg"}
                    alt="Milestone 2"
                    width={20}
                    height={20}
                    className="size-5 grayscale opacity-60 shrink-0"
                  />
                  <span className="text-md font-medium text-[#727272] ">
                    {activeTab === "interview" ? "Tue 10:00 AM" : "Tue 10:00 AM"}
                  </span>
                </div>
              </div>
            </div>

            {/* Input adjustment */}
            <div>
              <label
                htmlFor="candidate-count-input"
                className="block text-md font-medium mb-2"
              >
                Adjust the candidate count to estimate aggregate intervention time.
              </label>
              <div className="mt-1 flex items-center rounded-sm border border-gray-300 bg-white px-3.5 py-2.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                
                <input
                  id="candidate-count-input"
                  type="number"
                  min="1"
                  max="10000"
                  placeholder="Candidate Count: 10"
                  value={inputCount}
                  onChange={(e) => setInputCount(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCalculate();
                  }}
                  className="w-full text-md font-medium placeholder:text-[#727272] outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            type="button"
            onClick={handleCalculate}
            className="w-full mt-md py-sm bg-primary hover:bg-blue-500 active:scale-[0.99] text-white font-bold rounded-sm text-base transition-all flex items-center justify-center cursor-pointer"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}