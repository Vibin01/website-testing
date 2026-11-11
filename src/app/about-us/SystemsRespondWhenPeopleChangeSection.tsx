import { GradientButton } from "@/components/common/Button/GradientButton";
import React from "react";

export default function SystemsRespondWhenPeopleChangeSection() {
  const pills = [
    "See change earlier.",
    "Gain time to act.",
    "Protect what follows.",
  ];

  return (
    <section
      id="systems-respond-when-people-change"
      className="w-full"
    >
      <div className="mx-auto">
        {/* Eyebrow */}
        <p className="text-xl font-bold tracking-wider text-[#0668E1] uppercase mb-xs">
          WHY CONNECT EC EXISTS
        </p>

        {/* Main Headline */}
        <h2 className="text-h2 font-extrabold leading-tight tracking-tight mb-xs">
          <span className="block text-[#1B1C17]">
            We Do Not Make People
            <br />
            Behave Like Systems.
          </span>
          <span className="block text-[#0668E1] mt-sm">
            We Build Systems That Respond
            <br />
            When People Change.
          </span>
        </h2>

        {/* Benefit Pills */}
        <div className="flex flex-col md:flex-row flex-wrap items-center gap-sm w-full">
          {pills.map((pill, idx) => (
            <div
              key={idx}
              className="w-full md:w-auto text-center flex justify-center items-center rounded-full border border-[#B2D0F6] bg-[#F2F8FF] py-xs px-md text-xl font-medium text-[#0668E1]"
            >
              {pill}
            </div>
          ))}
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-[#C1D9F8] my-xl" />

        {/* Bottom Callout & CTA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-xl">
          {/* Left Title & Tagline */}
          <div className="flex flex-col text-left">
            <h3 className="text-h5 font-bold text-[#1B1C17]">
              Alignment Preserves Hiring Continuity.
            </h3>
            <p className="text-base font-medium text-[#1B1C17]">
              Connect EC® · The Hiring Alignment System™
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="shrink-0">
            <GradientButton
              text="Unlock Connect EC for Free"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export {
  SystemsRespondWhenPeopleChangeSection as WeBuildSystemsSection,
  SystemsRespondWhenPeopleChangeSection as AlignmentPreservesContinuitySection,
};
