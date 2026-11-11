"use client";

import React from "react";
import { GradientButton } from "@/components/common/Button/GradientButton";

export default function AboutUsHeroSection() {
  const points = [
    "We broadcast opportunities.",
    "We automate workflows.",
    "We optimize processes.",
  ];

  return (
    <section className="relative w-full">
      <div className="mx-auto flex flex-col items-center text-center">
        {/* Top Tagline */}
        <p className="mb-xs text-base font-bold text-[#1B1C17] tracking-tight">
          The Hiring Alignment System
        </p>

        {/* Main Title */}
        <h1 className="mb-md text-h1 font-extrabold text-primary leading-tight">
          We Optimized the system.
          <br />
          Hiring Still Breaks.
        </h1>

        {/* Three Pillars with Dividers */}
        <div className="mb-sm flex flex-wrap items-center justify-center text-base font-bold text-[#1B1C17]">
          {points.map((point, index) => (
            <React.Fragment key={index}>
              <span className="px-sm">{point}</span>
              {index < points.length - 1 && (
                <span
                  className="hidden sm:inline-block self-stretch w-[2px] bg-[#B2D0F6] my-1"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Supporting Description */}
        <p className="mb-md text-base font-medium leading-relaxed">
          But human behaviour drives every opportunity, workflow and process.
          And people can change after a decision is recorded.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center">
          <p className="mb-xs text-xl font-bold text-[#1B1C17]">
            Alignment Preserves Hiring Continuity.
          </p>

          <GradientButton
            text="Unlock Connect EC for Free"
          />
        </div>
      </div>
    </section>
  );
}
