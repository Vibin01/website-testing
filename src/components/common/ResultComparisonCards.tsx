import React from "react";

export interface ComparisonItem {
  originalLabel?: string;
  originalResult?: string;
  currentLabel?: string;
  currentResult?: string;
}

export interface ResultComparisonCardsProps {
  originalLabel?: string;
  originalResult?: string;
  currentLabel?: string;
  currentResult?: string;
  items?: ComparisonItem[];
  className?: string;
}

export default function ResultComparisonCards({
  originalLabel = "THE ORIGINAL RESULT",
  originalResult = "Gets you there on time.",
  currentLabel = "THE CURRENT RESULT",
  currentResult = "Gets you there late.",
  items,
  className = "",
}: ResultComparisonCardsProps) {
  // If items array is provided, render all items, otherwise render single pair with default/passed props
  const cardList: ComparisonItem[] = items && items.length > 0
    ? items
    : [
        {
          originalLabel,
          originalResult,
          currentLabel,
          currentResult,
        },
      ];

  return (
    <div className={`space-y-4 my-8 not-prose ${className}`}>
      {cardList.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Original Result Card */}
          <div className="flex flex-col justify-center bg-[#F0F7FF] border border-[#BFDBFE] rounded-2xl py-6 px-6 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#0668E1] text-white shrink-0 shadow-xs">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.08em] text-[#0668E1] uppercase">
                {item.originalLabel || originalLabel}
              </span>
            </div>
            <div className="pl-[34px] mt-2">
              <span className="text-[18px] sm:text-[20px] font-bold text-[#0668E1]">
                {item.originalResult || originalResult}
              </span>
            </div>
          </div>

          {/* Current Result Card */}
          <div className="flex flex-col justify-center bg-white border border-[#BFDBFE] rounded-2xl py-6 px-6 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-[22px] h-[22px] shrink-0 text-[#334155]">
                <svg
                  className="w-5 h-5 text-[#334155]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 12a8.5 8.5 0 1 0 8.5-8.5 8.5 8.5 0 0 0-6 2.5L3 9" />
                  <polyline points="3 4 3 9 8 9" />
                  <polyline points="12 7 12 12 8 12" />
                </svg>
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.08em] text-[#334155] uppercase">
                {item.currentLabel || currentLabel}
              </span>
            </div>
            <div className="pl-[34px] mt-2">
              <span className="text-[18px] sm:text-[20px] font-bold text-[#1E293B]">
                {item.currentResult || currentResult}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
