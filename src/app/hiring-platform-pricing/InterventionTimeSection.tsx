"use client";

import React from "react";

export default function InterventionTimeSection() {
  const tiers = [
    {
      percentage: "10%",
      label: "Tier 1 · Foundational intervention time",
    },
    {
      percentage: "20%",
      label: "Tier 2 · Advanced intervention time",
    },
    {
      percentage: "40%",
      label: "Tier 3 · Expanded intervention time",
    },
  ];

  return (
    <section className="w-full mt-xl pt-xl">
      {/* Blue Feature Card */}
      <div
        style={{
          background:
            "linear-gradient(203.87deg, #0075FF 15.37%, #004BA6 84.69%)",
          border: "1px solid #0668E1",
        }}
        className="w-full rounded-lg p-lg text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-start">
          {/* Left Column */}
          <div className="col-span-1 md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-h2 font-extrabold leading-[1.15] tracking-tight">
                What does <br />
                &ldquo;intervention time&rdquo; <br />
                mean?
              </h2>

              <p className="mt-xl text-white text-base font-medium">
                Intervention time represents the window between initiation and the scheduled interview or joining outcome during which recruiters can take action.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 flex flex-col gap-md">
            {/* 3 Pills */}
            <div className="flex flex-col gap-md">
              {tiers.map((item) => (
                <div
                  key={item.percentage}
                  className="bg-white rounded-md p-md flex items-center gap-md"
                >
                  <span className="text-[#0668E1] text-h5 font-extrabold">
                    {item.percentage}
                  </span>
                  <span className="text-[#1B1C17] text-base font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Explanation text below pills */}
            <div className="space-y-sm text-white text-lg font-medium">
              <p className=" text-xl font-medium">
                Example: across a 24-hour interview window, 10% = 2.4 hours, 20% = 4.8 hours and 40% = 9.6 hours of potential intervention time per candidate.
              </p>
              <p className=" text-xl font-medium">
                For interviews, initiation occurs when the interview is confirmed. For offers, initiation occurs when the offer is released.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
